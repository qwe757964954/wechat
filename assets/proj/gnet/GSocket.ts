/**
 * Name = GSocket
 * URL = db://assets/proj/GSocket.ts
 * Time = Wed Apr 13 2022 18:43:26 GMT+0800 (中国标准时间)
 * Author = xueya
 * 全局gloablSocket
 */

import { GCache } from "../../cache/GCache";
import { AppEvent } from "../../config/AppEvent";
import { GConstants } from "../../config/GameConstant";
import { GameTxt } from "../../config/GameTxt";
import { EventManager } from "../../framework/manager/EventManager";
import { Logger } from "../../framework/log/Logger";
import { IRequestProtocol, IResponseProtocol } from "../../framework/network/NetInterface";
import { NetManager } from "../../framework/network/NetManager";
import { NetConnectOptions, NetNode } from "../../framework/network/NetNode";
import { Network, NetworkState } from "../../framework/network/NetState";
import { WebSocketTask } from "../../framework/network/WebSocketTask";
import { SchedulerManager } from "../../framework/manager/SchedulerManager";
import { Utils } from "../../framework/Utils";
import { GCmdMapping } from "./GCmdMapping";
import { GlobalCMD, GlobalCMDHead } from "./GlobalCMD";
import { GlobalProtocol } from "./GlobalProtocol";
import { GPBAdaptive } from "./GPBAdaptive";

//接收到的php消息缓存队列
const ReceivePHPDataQueve: Array<IResponseProtocol> = []
//每次处理的数量
const ReceiveMaxDetail = 3

export class GSocket {

    private static _instance = null;
    public static get instance(): GSocket {
        if (!this._instance || this._instance == null) {
            this._instance = new GSocket();
        }
        return this._instance;
    }
    //发送php数据的队列
    private reqPhpSendDataQuene = [];
    //socket实体
    private netNode: NetNode | null = null;
    private socketIndex: number | null = null;
    //数据包装
    private PB: GPBAdaptive = null;

    private _globalProtocol = null;
    //保活句柄
    private keepAliveHandler = null
    //保活发送间隔(秒)
    private keepAliveTimer = 5 * 60;
    //保活超时句柄
    private keepAliveTimeOuterHandler = null;
    //保活超时检测间隔(秒)
    private keepAliveTimeOuterTimer = 6;

    //最大重连次数
    public static maxReConnectNum = 2;
    //当前已重连
    //实例化
    constructor() {
        [this.netNode, this.socketIndex] = NetManager.getInstance().addNetNode()
        let globalProtocol = new GlobalProtocol()
        if (this.netNode) {
            this.netNode.init(new WebSocketTask(), globalProtocol, null, Utils.handler(this, this.onMessage));
        }
        this.PB = new GPBAdaptive()

        this._globalProtocol = globalProtocol

        //刷新cmd队列
        GCmdMapping.initCommonMapping()
    };
    //开启连接
    startConnect(url: string) {
        if (!url) {
            return
        }
        if (!this.netNode) {
            [this.netNode, this.socketIndex] = NetManager.getInstance().addNetNode()
            let globalProtocol = new GlobalProtocol()
            this.netNode.init(new WebSocketTask(), globalProtocol, null, Utils.handler(this, this.onMessage));
        }
        //发送的数据结构
        let options = {
            url: url,
            autoReconnect: GSocket.maxReConnectNum
        }
        //设置成功与错误的回调
        let optionsCallback = {
            error: Utils.handler(this, this.errorConnectedCallback),
            connected: Utils.handler(this, this.connectedCallback),
            disconnect: Utils.handler(this, this.disconnectCallback),
            connectouttime: Utils.handler(this, this.connectOutTime)
        }
        NetManager.getInstance().setNetNodeCallback(this.socketIndex, optionsCallback)
        //开启连接
        Logger.logNet("GSocket 主动开启连接")
        NetManager.getInstance().connect(this.socketIndex, options)
    }
    //断开连接
    closeConnect(param = null) {
        Logger.logNet(`GSocket${param == null ? "主动" : "被动"} 断开连接 `)
        if (this.netNode) {
            this.netNode.setCallbackState(false)
            this.netNode.close()
            this.netNode = null
            this.reqPhpSendDataQuene = []
        }
    }
    //心跳加载
    heartbeatOnLoading(isStart: boolean = false) {
        this.stopKeepAlive()
        if (this.netNode) {
            if (isStart) {
                Logger.logNet("GSocket 开启心跳")
                this.netNode.startHeart()
            } else {
                Logger.logNet("GSocket 关闭心跳")
                this.netNode.stopHeart()
            }

        }
    }
    /**
     * 设置心跳间隔
     * @param time 毫秒级别
     */
    setHeartTime(time: number = null) {
        if (this.netNode) {
            if (time == null) {
                time = 10000 * 3 / 4
            }
            this.netNode.setHeartTime(time)
        }
    }
    /**
     * 开始保活命令
     * @param isFirst 是否首次开启
     * @returns 
     */
    startKeepAlive(isFirst: boolean = false) {
        if (this.keepAliveHandler) {
            return
        }
        if (isFirst) {
            GSocket.instance.sendKeepAliveCmd()
        }
        this.keepAliveHandler = SchedulerManager.schedulerInterval((dt: number) => {
            GSocket.instance.sendKeepAliveCmd()
        }, this.keepAliveTimer)
        return
    }
    //开启保活超时
    startKeepAliveTimeOuter() {
        this.stopKeepAliveTimeOuter()
        this.keepAliveTimeOuterHandler = SchedulerManager.schedulerTimeout((dt: number) => {
            GSocket.instance.checkKeepAliveTimeOuter()
        }, this.keepAliveTimeOuterTimer)
    }
    //停止保活超时检测
    stopKeepAliveTimeOuter() {
        if (this.keepAliveTimeOuterHandler) {
            SchedulerManager.unscheduleTimeout(this.keepAliveTimeOuterHandler)
        }
        this.keepAliveTimeOuterHandler = null
    }

    //发送保活命令
    sendKeepAliveCmd() {
        this.sendMsg(GlobalCMD.PHP_KEEPALIVE, {})
        this.startKeepAliveTimeOuter()
    }
    //检测保活超时
    checkKeepAliveTimeOuter() {
        this.sendKeepAliveCmd()
        this.startKeepAlive()
    }
    //停止保活
    stopKeepAlive() {
        this.stopKeepAliveTimeOuter()
        if (this.keepAliveHandler) {
            SchedulerManager.unscheduleInterval(this.keepAliveHandler)
        }
        this.keepAliveHandler = null
    }

    //连接成功回调
    connectedCallback(info: any) {
        Logger.logNet("GSocket 连接成功开启保活会话,并开始登录")
        EventManager.dispatch(AppEvent.SYS_CLOSE_NETLOADING)
        EventManager.dispatch(AppEvent.NET_GOTO_START_LOGIN)
    }
    //连接超时的回调
    connectOutTime(endReconnerNumber: number) {
        Logger.logNet(`GSocket连接超时：次数：${endReconnerNumber}`)
        let txt = GameTxt.netWorkTimeout;
        if (endReconnerNumber == GSocket.maxReConnectNum) {
            txt = GameTxt.netWorkTimeout;
        }
        EventManager.dispatch(AppEvent.SYS_TOAST_TIP, { content: txt })
    }
    //连接错误回调（
    errorConnectedCallback(connectOptions: NetConnectOptions, event: any, endReconnerNumber: number) {
        Logger.logNet(`GSocket连接错误回调`)
    }
    //连接关闭的回调
    disconnectCallback(endReconnerNumber: number) {
        Logger.logNet(`连接失败 是否重连：${endReconnerNumber > 0} 剩余重连次数：${endReconnerNumber}`)
        //先停止保活
        GSocket.instance.stopKeepAlive()
        if (endReconnerNumber <= 0 || Network.instance.state == NetworkState.OFFLINE || GCache.User.getLoginState() != GConstants.UserLoginState.LoginSuccess) {//非重连 或者 无网络 或者从来没有连接成功过
            GSocket.instance.closeConnect(true);
            EventManager.dispatch(AppEvent.SYS_TOAST_TIP, { content: GameTxt.netWorkError })
            EventManager.dispatch(AppEvent.SYS_CLOSE_NETLOADING);
            EventManager.dispatch(AppEvent.LOGIN_GOTO_SHOW, { state: "reconnect_fail" })

        } else {
            EventManager.dispatch(AppEvent.SYS_SHOW_NETLOADING);
            EventManager.dispatch(AppEvent.SYS_TOAST_TIP, { content: GameTxt.netWorkReconnect });
        }
    }

    /**发起一个请求 */
    sendMsg(cmd: number, body: any, timeout?: number) {
        if (!cmd) {
            return
        }
        if (!this.isConnected()) {
            return
        }
        let _cmd = cmd > 0 && Utils.number_formatToHex(cmd) || cmd
        Logger.logNet(`CMD[10进制] = ${cmd} CMD[16进制] = ${_cmd}`)
        if (cmd < GlobalCMDHead.PHP_CMD_CONSTANT) {
            Logger.logNet("小于==>>>此为游戏请求")
            let [pCmd, pPackageInfo] = this.PB.generatPacket(cmd, body)

            // Logger.logNet("发送的头：===>" + pCmd)
            Utils.dump(pPackageInfo)

            let isCompress = this.PB.isCompressByHeadCmd(pCmd)
            let bodyPacket = this.PB.getSendPacket(pCmd, pPackageInfo && pPackageInfo.action || null, null, pPackageInfo, isCompress, timeout)
            if (bodyPacket) {
                Utils.dump(bodyPacket);
                this.request(bodyPacket);
            }
        } else {
            Logger.logNet("大于==>>>此为PHP请求")
            let [pCmd, pPackageInfo] = this.PB.generatPacket(cmd, body)
            if (pCmd) {
                // Logger.logNet("发送的头：===>" + pCmd)
                // Utils.dump(pPackageInfo)

                let isCompress = this.PB.isCompressByHeadCmd(pCmd)
                let bodyPacket = this.PB.getSendPacket(pCmd, pPackageInfo && pPackageInfo.action || null, null, pPackageInfo, isCompress, timeout)
                if (bodyPacket) {
                    // Logger.logNet("输出===>")
                    // Utils.dump(bodyPacket)
                    this.reqPhpSendDataQuene[pPackageInfo["seq"]] = pPackageInfo

                    this.request(bodyPacket)
                }
            } else {
                Logger.logNet(`sendMbsg：包装数据有误 CMD[16进制] = ${_cmd}`)
            }
        }

    }
    //统一事件回调
    onMessage(response: IResponseProtocol) {
        if (response.headCmd == GlobalCMDHead.SERVER_HEART_RESPONSE) {
            // Logger.logNet("[GSocket]:onMessage 心跳回包")
            return
        }

        Logger.logNet(`[GSocket]:onMessage 收到数据 CMD[10进制] = ${response.headCmd} CMD[16进制] = ${Utils.number_formatToHex(response.headCmd)}`)
        // Utils.dump(response.data)
        //寻找原请求数据
        if (response?.data?.body?.seq != null) {
            // Utils.dump(this.reqPhpSendDataQuene[response.data.body.seq])
            response.reqData = this.reqPhpSendDataQuene[response.data.body.seq] || null
            this.reqPhpSendDataQuene[response.data.body.seq] = null
        }

        //如果是命令RESPONSE_PHP_REQUEST_NEW 或者 RESPONSE_HALL_LOGIN_SUCCESS 返回的数据，则需要缓存
        if (response.headCmd == GlobalCMDHead.RESPONSE_PHP_REQUEST_NEW) {
            ReceivePHPDataQueve.push(response)
        } else if (response.headCmd == GlobalCMDHead.RESPONSE_HALL_LOGIN_SUCCESS) {
            ReceivePHPDataQueve.push(response)
        } else {
            //及时发送
            //绑定的事件ID
            let eventID = null;
            /** 先从headCmd绑定事件中查找 找不到再在cmd绑定的事件中找*/
            eventID = GCmdMapping.getEventIDByHeadCmd(response.headCmd)
            if (!eventID) {
                eventID = GCmdMapping.getEventIDByCmd(response.headCmd)
            }
            if (eventID) {
                EventManager.dispatch(eventID, response.data, response.reqData)
            } else {
                Logger.logNet(`[GSocket]:onMessage 收到 HeadCmd[10进制] = ${response.headCmd} HeadCmd[16进制] = ${Utils.number_formatToHex(response.headCmd)} 的消息 但是没有找到对应的事件绑定`)
            }
        }

    }
    /** 每1ms检查一次接收队列，并处理其中的数据(每次处理3条) */
    checkReceiveQueve() {
        if (ReceivePHPDataQueve.length > 0) {
            let count = 0
            while (count < ReceiveMaxDetail && ReceivePHPDataQueve.length > 0) {
                count++;
                //绑定的事件ID
                let eventID = null;
                let respData: IResponseProtocol = ReceivePHPDataQueve.shift()
                //计算Action
                let action = null
                if (respData.data && respData.data["cmd"]) {
                    action = GCmdMapping.getActionByCmd(respData.data["cmd"])
                }
                respData.action = action

                /** 先从headCmd绑定事件中查找 找不到再在cmd绑定的事件中找*/
                eventID = GCmdMapping.getEventIDByHeadCmd(respData.headCmd)
                if (!eventID) {
                    eventID = GCmdMapping.getEventIDByCmd(respData.headCmd)
                }
                if (eventID) {
                    EventManager.dispatch(eventID, respData.data, respData.reqData)
                } else {
                    Logger.logNet(`[GSocket]:onMessage 收到action = ${respData.action} 的消息 但是没有找到对应的事件绑定`)
                }
            }

        }
    }
    /** 调用Node发送 */
    // send(buf: NetData,force: boolean = false): number {
    //     return NetManager.getInstance().send(this.socketIndex,buf,force)
    // }

    /** 发起请求，并在在结果返回时调用指定好的回调函数 */
    request(reqProtocol: IRequestProtocol, force: boolean = false) {
        NetManager.getInstance().request(this.socketIndex, reqProtocol, force)
    }

    /** 同request，但在request之前会先判断队列中是否已有rspCmd，如有重复的则直接返回 */
    requestUnique(reqProtocol: IRequestProtocol, force: boolean = false): boolean {
        return NetManager.getInstance().requestUnique(this.socketIndex, reqProtocol, force)
    }

    /** 获取连接状态 */
    isConnected(): boolean {
        if (this.netNode) {
            return this.netNode.isConnected()
        }
        return false
    }
}

