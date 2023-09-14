/**
 * Name = GlobalController
 * URL = db://assets/proj/GlobalController.ts
 * Time = Mon Apr 18 2022 11:04:41 GMT+0800 (中国标准时间)
 * Author = xueya
 *
 */

import { director, Scene, SceneAsset } from "cc";
import { GCache } from "../cache/GCache";
import { AppEvent } from "../config/AppEvent";
import { APPState } from "../config/GameConfig";
import { GConstants } from "../config/GameConstant";
import { GameRes } from "../config/GameRes";
import { GameTxt } from "../config/GameTxt";
import { UIConfigData, UIID } from "../config/UIConfig";
import { Encrypt } from "../framework/crypto/Encrypto";
import { inf_GetPropItem } from "../framework/InterfaceDefines";
import { LayerManager } from "../framework/layer/LayerManager";
import { resLoader } from "../framework/loader/ResLoader";
import { Logger } from "../framework/log/Logger";
import { AudioManager } from "../framework/manager/AudioManager";
import { EventManager } from "../framework/manager/EventManager";
import { PkgLoaderManager } from "../framework/manager/PkgLoaderManager";
import { ResLoaderManager } from "../framework/manager/ResLoaderManager";
import { SpineAniManager } from "../framework/manager/SpineAniManager";
import { INetMessage, INetPHPMessage } from "../framework/network/NetInterface";
import { Network, NetworkState } from "../framework/network/NetState";
import { Utils } from "../framework/Utils";
import { BaseControll } from "../framework/vc/BaseController";
import { Platform } from "../platform/Platform";
import { ActivityController } from "./ActivityController";
import { GameController } from "./GameController";
import { GCmdMapping } from "./gnet/GCmdMapping";
import { GlobalCMD, GlobalCMDHead, GlobalHeadCmdBinding } from "./gnet/GlobalCMD";
import { GPBWriteAndRead } from "./gnet/GPBWriteAndRead";
import { GSocket } from "./gnet/GSocket";
import { HallController } from "./HallController";
import { LoginController } from "./LoginController";
import { OrderRecode } from "./PayAgent";
import { ReportController } from "./ReportController";
import { GoodsDataServers } from "./servers/GoodsDataServers";
import { MessageServers } from "./servers/MessageServers";
import { PopupServers } from "./servers/PopupServers";
import { RecommendPopServers } from "./servers/RecommendPopServers";
import { ReportServers } from "./servers/ReportServers";
import { SelectGameServers } from "./servers/SelectGameServers";
import { ShareServers } from "./servers/ShareServers";
import { TaskServers } from "./servers/TaskServer";
import { UserServers } from "./servers/UserServer";

class _GlobalController extends BaseControll {
    //切换场景次数
    private countChangeScene: number = 0;
    /** 生命周期队列 */
    private _cycleLifeQuene: Array<any> = [];

    private static _instance = null;
    public static get instance(): _GlobalController {
        if (!this._instance || this._instance == null) {
            this._instance = new _GlobalController("GlobalController");
        }
        return this._instance;
    }
    //重连超时句柄
    _handlerNetOutTime = null;
    //实例化
    constructor(name: string) {
        super(name)
        PkgLoaderManager.init();
    };
    public init() {
        /** 初始化数据上报控制器 */
        ReportController.init();
        /** 初始化音效控制器 */
        AudioManager.init();
        /** 初始化资源管理控制器 */
        ResLoaderManager.init();
        /** 初始化Spine管理控制器 */
        SpineAniManager.init();

        /** 初始化登录控制器 */
        LoginController.init();
        /** 初始化大厅控制器 */
        HallController.init();
        /** 初始化游戏场景控制器 */
        GameController.init();
        /** 初始化活动控制器 */
        ActivityController.init();

        /** 初始化弹窗控制器 */
        PopupServers.init();
        /**初始化分享 */
        ShareServers.init();
        /**初始化活动/任务中心 */
        TaskServers.init()
        /** 初始化物品控制器 */
        GoodsDataServers.init();

        /** 初始化信箱控制器 */
        MessageServers.init();
        /** 初始化用户控制器 */
        UserServers.init()
        /** 初始化游戏选场控制器 */
        SelectGameServers.init()
        /** 初始化数据上报控制器 */
        ReportServers.init()
        /** 初始化推荐弹窗控制器 */
        RecommendPopServers.init()
    }
    /**初始化添加事件绑定 */
    protected onInitModuleEvent(): void {
        //程序生命周期
        this.addModelListener(AppEvent.SYS_APP_LIFE, this.appLifeChange)
        //前后台事件
        this.addModelListener(AppEvent.SYS_SHOW_OR_HIDE, this.processApplicationActions)
        //网络状态切换
        this.addModelListener(AppEvent.SYS_NET_CHANGE_STATE, this.networkChange)
        //开启聊天服
        this.addModelListener(AppEvent.NET_START_CONNECT, this.startGSConnect)
        //开启心跳
        this.addModelListener(AppEvent.NET_HEART_BEAT_ONLOADING, this.heartbeatOnLoading)

        //发送数据
        this.addModelListener(AppEvent.NET_SEND_MSG, this.sendSocketMsg)

        //切换场景
        this.addModelListener(AppEvent.VIEW_SCENE_TO_CHANGE, this.changeScene)

        //更新协议解析
        this.addModelListener(AppEvent.SYS_UPDATE_PROTOBUF, this.updatePBConf)
        //更新命令绑定映射
        this.addModelListener(AppEvent.SYS_UPDATE_CMDMAPPING, this.updateCmdMapping)
        //分包加载任务被中断
        this.addModelListener(AppEvent.SYS_PACKAGE_LOAD_TASK_CANCLE, this.receiveCanclePkgLoadTask)
        //更新心跳间隔
        this.addModelListener(AppEvent.SYS_UPDATE_HEART_TIME, this.updateHeartTime)

        //新大厅事件
        this.addModelListener(AppEvent.NET_RECEIVE_MSG_PHPNEW, this.receiveNetPhpMsg)

        //推送消息
        this.addModelListener(AppEvent.NET_RECEIVE_PHP_PUSH_MSG, this.receivePhpPushMsg)

        //广播支付银币
        this.addModelListener(AppEvent.NET_RECEIVE_PHP_PUSH_PAY_MONEY, this.receivePhpPushPayMoney)

    }
    /** 程序的生命周期 */
    appLifeChange(event: string, param) {
        this.print(`*******【Sys cycle change to ${param}】*********`);
        if (param == GConstants.AppRunLife.MainScence) {
            GCache.firstRunLoading = true;
            Logger.open();
            GCache.init();
            this._cycleLifeQuene = [];
        } else if (param == GConstants.AppRunLife.RunScence) {
            //全局控制器初始化附加载
            this.init();
            this.addScheduler(0.01, Utils.handler(this, this.onSchedulerUpdate))
        } else if (param == GConstants.AppRunLife.Login_Will_Open) {
            // GCache.User.initSubClass();
            // GCache.reloadSubClass();
        } else if (param == GConstants.AppRunLife.Login_Closed) {
            OrderRecode.instance.startRun();
        }
        this._cycleLifeQuene.push(param);

        this.print("当前生命周期队列", this._cycleLifeQuene);
    }
    /**前后台事件 */
    processApplicationActions(event: string, state: APPState) {
        this.print(`[系统前后台事件]:${state == APPState.SHOW && "前台" || "后台"}`);
        if (!GCache.firstRunLoadSuccess) {
            return;
        }
        if (state == APPState.SHOW) {
            AudioManager.getInstance().resumeAll();
            Platform.getEnterOptionsSync();
        } else if (state == APPState.HIDE) {
            AudioManager.getInstance().pauseAll();
        }
    }
    /** 网络状态改变 */
    networkChange(event: string) {
        if (Network.instance.state == NetworkState.OFFLINE) {
            EventManager.dispatch(AppEvent.SYS_TOAST_TIP, { content: GameTxt.netWorkDisconnected })
        }
    }
    /**开启网络连接 */
    startGSConnect(event: string, urlOption: any) {
        this.print("开启网络连接===>url= " + urlOption, "网络状态:" + Network.instance.state)
        if (Network.instance.state != NetworkState.ONLINE) {
            EventManager.dispatch(AppEvent.SYS_TOAST_TIP, { content: GameTxt.netWorkErrorTips })
            EventManager.dispatch(AppEvent.SYS_CLOSE_NETLOADING);
            return;
        }
        this.print("输出网络连接状态:", GSocket.instance.isConnected())
        if (GSocket.instance.isConnected() == false) {
            EventManager.dispatch(AppEvent.SYS_SHOW_NETLOADING);
        }
        GSocket.instance.startConnect(urlOption)
    }
    /** 心跳 */
    heartbeatOnLoading(event: string, state: boolean = false) {
        GSocket.instance.heartbeatOnLoading(state)
    }
    /** 发送socket消息 */
    sendSocketMsg(event: string, param: INetMessage) {
        if (param && param.cmd) {
            GSocket.instance.sendMsg(param.cmd, param.body, param.timeout)
        }
    }

    /**切换场景 */
    changeScene(event: string, param: any) {
        this.print(`即将切换场景：>>>${param?.next}`)
        if (this.countChangeScene < 1) {
            //首次切换 预加载资源
            resLoader.load(GameRes.Prefab_Login.bundle, GameRes.Prefab_Login.path)
        }
        if (param && param.next) {
            director.preloadScene(param.next, (error: null | Error, sceneAsset?: SceneAsset) => {
                if (!error) {
                    LayerManager.clear()
                    director.loadScene(param.next, (error: null | Error, scene?: Scene) => {
                        if (scene) {
                            GlobalController.countChangeScene = GlobalController.countChangeScene + 1
                            if (param.success) {
                                param.success.call(param.next)
                            }
                        }
                    })
                } else {
                    Logger.error(error)
                    if (param.fail) {
                        param.fail.call(param.next)
                    }
                }
            });
        } else {
            Logger.error("场景切换失败，param.next 不存在")
            if (param.fail) {
                param.fail.call(param.next)
            }
        }
    }

    /** 协议解析更新  0读 1写*/
    updatePBConf(event, type, arrayList) {
        if (type == 0) {
            GPBWriteAndRead.Read.updateCmdArrayFunc(arrayList)
        } else if (type == 1) {
            GPBWriteAndRead.Write.updateCmdArrayFunc(arrayList)
        }
    }
    /** 更新命令绑定映射 */
    updateCmdMapping(event, cmdBindingList) {
        if (Utils.table_isEmpty(cmdBindingList)) {
            GCmdMapping.initCommonMapping();
            return;
        }
        cmdBindingList = Utils.table_verify(cmdBindingList)
        GCmdMapping.pushHeadMapping(cmdBindingList)

    }
    /** 更新心跳间隔 */
    updateHeartTime(event, time: number) {
        GSocket.instance.setHeartTime(time)
    }
    /** 定时器的回调 */
    onSchedulerUpdate() {
        GSocket.instance.checkReceiveQueve()
    }
    /** 收到php端的消息 */
    receiveNetPhpMsg(event: string, respData: INetPHPMessage, reqData) {
        if (!respData.cmd || !respData.body) {
            return
        }
        let reqSSID = null
        //php请求参数
        if (reqData) {
            reqSSID = reqData.ssid
        }
        let errorInfo = this.generateErrorInfo(respData.body, reqSSID)
        let eventBindindCmd = GlobalCMDHead.PHP_CMD_CONSTANT + respData.cmd

        let p_ISSuccess = false
        let p_RespData = errorInfo
        let p_ReqParam = reqData
        if (!errorInfo.errorTips && respData.body) {
            p_ISSuccess = true
            p_RespData = respData.body["info"]
        }
        if (eventBindindCmd == GlobalCMD.PHP_KEEPALIVE) {
            GSocket.instance.stopKeepAliveTimeOuter()
        }
        Logger.logModel(`[NetReceive] ：收到来自大厅的消息cmd = {[10进制] ${eventBindindCmd} [16进制] ${Utils.number_formatToHex(eventBindindCmd)}} action = ${GCmdMapping.getActionByCmd(eventBindindCmd)}`)
        let eventID = GCmdMapping.getEventIDByCmd(eventBindindCmd)
        if (eventID) {
            EventManager.dispatch(eventID, p_ISSuccess, p_RespData, p_ReqParam)
        } else {
            Logger.logNet(`undifine ==>收到cmd = ${eventBindindCmd} 的消息 但是没有找到对应的事件绑定`)
        }

    }
    /**
     * 获取通用错误信息
     * @param packetInfo 下发的数据包
     * @param ssid 请求的ssid
     */
    generateErrorInfo(packetInfo, ssid) {
        let errorArray = {
            errorType: "",
            errorTips: null,
            extraInfo: {},
        }

        if (!packetInfo) {
            return errorArray
        }
        let errorType = packetInfo.type
        let errorTips = null;
        let status = packetInfo.status;

        if (Utils.isNull(errorType)) {
            errorType = ""
        }
        if (Utils.isNull(status)) {
            status = 1
        }
        if (Utils.isArray(packetInfo) == false && Utils.isObject(packetInfo) == false) {
            errorTips = GameTxt.networkReqError
        } else {
            if (status == 1) {
                errorTips = packetInfo.msg
            }
            if (errorTips == "") {
                errorType = errorType.toString()
                let majorType = errorType.substring(0, 0)
                let minorType = errorType.substring(2, 2)

                errorType = `phpError${majorType}_${minorType}`
                errorTips = GameTxt[errorType] || GameTxt.networkReqError
            }
            if (errorType == 2 && Utils.string_isEmpty(ssid) == false) {//会话超时
                //登录成功后会话超时 需要重新登录
                this.print("会话超时 需要重新登录 还没做")
            }
        }

        errorArray = {
            errorType: errorType,
            errorTips: errorTips,
            extraInfo: packetInfo.info || {},
        }
        return errorArray
    }
    /** receive：PHP推送消息 */
    receivePhpPushMsg(event: string, respData) {
        if (!respData.result) {
            return
        }
        respData.result = Utils.table_verify(respData.result)
        let mtype = respData.result["mtype"];
        this.print("PHP推送: 收到一条消息 mtype = " + mtype)
        let str = "PHP推送:"
        let body = null;
        switch (mtype) {
            //1 和 17 是私信
            case 1:  //此时是私信,兼容老四川

                break;
            case 2:  //此时是房间任务消息
                body = respData.result["info"];
                this.dump(body, str + "房间任务消息")
                break;
            case 6:
            case 10:
            case 11:
            case 12:
                break;
            case 13:
                let field = Utils.number_valueOf(respData.result["info"]["field"], null); //0:银币, 1:金条 2:兑换券
                let value = Utils.number_valueOf(respData.result["info"]["value"], null);
                if (!Utils.isNull(field) && !Utils.isNull(value)) {
                    if (field == 0 || field == 1 || field == 2) {
                        GCache.User.updateUserMoneyByID(field, value);

                    }
                }
                this.dump(body, str + "刷新用户信息");
                break;
            case 15:
                break;
            case 16:
                body = respData.result["info"];
                this.dump(body, str + "完成牌局任务");
                break;
            case 17:
                body = respData.result["info"];
                this.dump(body, str + "收到私信");
                EventManager.dispatch(AppEvent.NET_CMD_REQ_WATCH);
                break;
            case 19:
                this.dump(body, str + "代理商注册成功");
                break;
            case 20:
                body = respData.result["info"];
                body["ip"] = body["ip"]
                body["port"] = body["port"]
                this.dump(body, str + "立即切换大厅IP与端口");
                break;
            case 21:
                break;
            case 27:
                body = respData.result["info"];
                this.dump(body, str + "推送银元场当前牌局数");
                break;
            case 28:
                this.dump(body, str + "新物品箱 线下物品兑换推送");
                break;
            case 29:
                this.dump(body, str + "物品箱 刷新物品箱数据 入口显示小红点消息体 ");
                break;
            case 30:
                this.dump(body, str + "物品箱 领奖记录入口显示小红点");
                break;
            case 31:
                body = respData.result["info"];
                body["agentphone"] = body["agentphone"]
                this.dump(body, str + "代理商电话");
                break;
            case 32:
                this.dump(body, str + "推送银元场当前牌局数");
                break;
            case 34:
                this.dump(body, str + "接收子游戏 | 子模块的推送信息");
                break;
            case 36:
                body = respData.result["info"];
                body["propsId"] = body["propsId"]
                this.dump(body, str + "装扮道具Id");
                break;
            case 999:
                body = respData.result["info"];
                this.dump(body, str + "刷新服务器地址");
                break;
            case 998:
                body = respData.result["info"];
                let param = {
                    txt_desc: body,         //正文内容
                    alignLeftTop: true,
                    notshowClose: true,
                    buttonsMap: [{}],
                }
                EventManager.dispatch(AppEvent.VIEW_UI_OPEN, UIID.PopWindow, param)
                this.dump(body, str + "推送弹窗");
                break;
            case 996:
                body = respData.result["giftTip"];
                this.dump(body, str + "礼包推送文案(用于已拥有的头像框，先弹购买成功，再弹折现成其他道具)");
                break;
            case 997:
                body = {
                    notice_msg: respData.result["notice_msg"],
                    notice_type: respData.result["notice_type"],
                };
                this.dump(body, str + "强制实名弹窗");
                break;
            case 1001:
                this.dump(body, str + "存钱罐集满了");
                break;
            default:
                this.print(str + "未识别的推送数据 ");
                break;
        }
    }
    /** 广播支付银币 */
    receivePhpPushPayMoney(event: string, respData) {
        respData = Utils.table_verify(respData);
        this.print("PHP推送: 广播支付银币", respData)

        let detailData = Encrypt.JsonDecode(respData.data);
        this.print("PHP推送: 数据解析", detailData)
        switch (respData.type) {
            case 0:   //老的支付广播接口

                break;
            case 1:   //购买金条

                break;
            case 3:   //购买VIP

                break;
            case 4:   //新的支付广播接口(特价礼包)
                this.detailPaySuccess(detailData);
                break;
            case 6:   //首充购买推送

                break;

            case 7:   //保险箱购买

                break;

            case 8://充值礼包推送(首充)
                this.detailBuyGiftSuccess(detailData);
                break;
            case 9://激活破产回馈
                break;

            case 10://存钱罐


                break;


            default:
                break;
        }
    }
    /** 处理支付成功 */
    detailPaySuccess(detailData) {
        this.print("处理支付成功====>", detailData);
        if (Utils.table_isEmpty(detailData)) {
            return;
        }
        //获得的物品信息
        let awardData: Array<inf_GetPropItem> = [];

        if (Utils.number_valueOf(detailData["gold"]) > 0) {
            let prop = Utils.clone(GConstants.GoodsType.SILVER_COIN);
            let propInfo = GCache.PropsConf.getPropsInfoById(prop["id"]);
            if (propInfo && propInfo["item_name"]) {
                let oneData: inf_GetPropItem = {
                    icon: propInfo["url"],
                    name: propInfo["item_name"],
                    num: Utils.number_valueOf(detailData["gold"]),
                }
                awardData.push(oneData)
            }
        }
        if (Utils.number_valueOf(detailData["diamond"]) > 0) {
            let prop = Utils.clone(GConstants.GoodsType.DIAMOND);
            let propInfo = GCache.PropsConf.getPropsInfoById(prop["id"]);
            if (propInfo && propInfo["item_name"]) {
                let oneData: inf_GetPropItem = {
                    icon: propInfo["url"],
                    name: propInfo["item_name"],
                    num: Utils.number_valueOf(detailData["diamond"]),
                }
                awardData.push(oneData)
            }
        }

        if (GCache.Desk && GCache.Desk.mySelfPlayer) {
            let moneyID = GCache.Desk.MoneyTypeID;
            let money = GCache.User.getUserMoneyByID(moneyID);
            GCache.Desk.mySelfPlayer.updateInfo({ "money": money });
        }

        let payMoney = Utils.number_valueOf(detailData["gold"]); //获得银币

        let award_gold = 0; //加赠得到的银币信息
        let award_diamond = 0; //获得的兑换券新
        let award_props = {}; //加赠信息

        //合并加赠信息
        let privilege = Utils.table_verify(detailData.privilege);
        if (privilege["status"] != null) {
            award_gold = award_gold + Utils.number_valueOf(privilege["gold"]);
            award_diamond = award_diamond + Utils.number_valueOf(privilege["diamond"]);
            if (Utils.table_isEmpty(privilege["props"]) == false) {
                award_props = privilege["props"];
            }
        }
        let bouns = Utils.table_verify(detailData["bouns"]);
        award_gold = award_gold + Utils.number_valueOf(bouns["gold"], 0);
        award_diamond = award_diamond + Utils.number_valueOf(bouns["diamond"], 0);
        if (Utils.table_isEmpty(bouns["props"]) == false) {
            for (let key in bouns["props"]) {
                if (Object.prototype.hasOwnProperty.call(bouns["props"], key)) {
                    if (isNaN(Number(key)) == false) {
                        award_props[Number(key)] = bouns["props"][key];
                    } else {
                        award_props[key] = bouns["props"][key];
                    }

                }
            }
        }
        let desc = String("成功购买*银币").replace("*", Utils.string_moneyToShortNumber(payMoney,true));
        //加赠银币
        if (award_gold > 0) {
            desc = desc + String(",加赠*银币").replace("*", String(award_gold));

            let prop = Utils.clone(GConstants.GoodsType.SILVER_COIN);
            let propInfo = GCache.PropsConf.getPropsInfoById(prop["id"]);
            if (propInfo && propInfo["item_name"]) {
                let oneData: inf_GetPropItem = {
                    icon: propInfo["url"],
                    name: propInfo["item_name"],
                    num: award_gold,
                    newAdd: true,
                }
                awardData.push(oneData)
            }
        }
        //加赠兑换券
        if (award_diamond > 0) {
            desc = desc + String(",加赠*兑换券").replace("*", String(award_diamond));
            let prop = Utils.clone(GConstants.GoodsType.DIAMOND);
            let propInfo = GCache.PropsConf.getPropsInfoById(prop["id"]);
            if (propInfo && propInfo["item_name"]) {
                let oneData: inf_GetPropItem = {
                    icon: propInfo["url"],
                    name: propInfo["item_name"],
                    num: award_diamond,
                    newAdd: true,
                }
                awardData.push(oneData)
            }
        }
        //加赠道具
        for (let propID in award_props) {
            if (Object.prototype.hasOwnProperty.call(award_props, propID)) {
                let num = award_props[propID];
                let propInfo = GCache.PropsConf.getPropsInfoById(propID);
                if (propInfo && propInfo["item_name"]) {
                    desc = desc + ",加赠" + propInfo["item_name"] + "x" + num;
                    let oneData: inf_GetPropItem = {
                        icon: propInfo["url"],
                        name: propInfo["item_name"],
                        num: num,
                        newAdd: true
                    }
                    awardData.push(oneData);
                }
            }
        }
        console.log("支付成功，描述文本:" + desc);
        console.log("支付成功，获得的物品:" + awardData)
        if (awardData.length > 0) {
            console.log("显示恭喜获得===>", awardData);
            //通知:恭喜获得
            EventManager.dispatch(AppEvent.VIEW_UI_OPEN, UIID.GongXiHuoDePrefab, awardData)
        }
        //请求更新道具 待定
        EventManager.dispatch(AppEvent.NET_REQ_PROPS_INFO);
        //更新本地资产
        if (Utils.isNotNull(detailData["cur_money"])) {
            let value = 0;
            value = Utils.number_valueOf(detailData["cur_money"]);
            GCache.User.updateUserMoneyByID(0, value);
        }
    }
    //处理礼包支付成功 type = 8
    detailBuyGiftSuccess(detailData) { 
        this.print("detailBuyGiftSuccess 处理支付成功====>", detailData);
        if (Utils.table_isEmpty(detailData)) {
            return;
        }
        //获得的物品信息
        let awardData = [];
        if (Utils.isNotNull(detailData["buy"])) {
            for (let key in detailData["buy"]) {
                if (Object.prototype.hasOwnProperty.call(detailData["buy"], key)) {
                    let num = Utils.number_valueOf(detailData["buy"][key]);
                  
                    if (num > 0) { 
                        let conf = GCache.PropsConf.getPropsInfoById(key);
                        let icon = detailData["gicons"][key];
                        if (Utils.string_isEmpty(icon)) { 
                            icon = conf["url"];
                        }
                        let tmp:inf_GetPropItem = {
                            num: num,
                            icon: icon,
                            name: conf['item_name'],
                            newAdd: false,
                        }
                        awardData.push(tmp);
                    }
                    
                }
            }
        }
        
        if (Utils.isNotNull(detailData["extra"])) {
            for (let key in detailData["extra"]) {
                if (Object.prototype.hasOwnProperty.call(detailData["extra"], key)) {
                    let obj = detailData["extra"][key];
                    let gname = obj['gname'];
                    let num = Utils.number_valueOf(obj['gnum']);
                    let icon = obj['gicon'];
                    if (num > 0) {
                        let tmp:inf_GetPropItem = {
                            name:gname,
                            num: num,
                            icon: icon,
                            newAdd: true,
                        }
                        awardData.push(tmp);
                    }                   
                    
                }
            }
        }
        //恭喜获得
        if (awardData.length > 0) {
            console.log("显示恭喜获得===>", awardData);
            //通知:恭喜获得
            EventManager.dispatch(AppEvent.VIEW_UI_OPEN, UIID.GongXiHuoDePrefab, awardData)
        }
        EventManager.dispatch(AppEvent.NET_REQ_PROPS_INFO);
        //更新本地资产
        if (Utils.isNotNull(detailData["total_property"])) {
            for (let key in detailData["total_property"]) {
                if (Object.prototype.hasOwnProperty.call(detailData["total_property"], key)) {
                    let value = Utils.number_valueOf(detailData["total_property"][key]);
                    GCache.User.updateUserMoneyByID(Number(key), value);
                }
            }
        }
    }
    // function GlobalSocketMessageHandler:_paySucc(detailInfo,func)
    // 	local payMoney = tonumber(detailInfo.gold) or 0; --支付银币
    // 	local cur_money = tonumber(detailInfo.cur_money) or kUserInfoData:getMoney();
    // 	local cur_diamond = tonumber(detailInfo.diamond) or kUserInfoData:getDiamond();
    // 	kUserInfoData:setMoney(cur_money);
    // 	kUserInfoData:setDiamond(cur_diamond);

    // 	local award_gold = 0; -- 获得的银币信息
    // 	local award_diamond = 0; -- 获得的兑换券新
    // 	local award_props = {}; -- 加赠信息

    // 	-- 合并加赠信息
    // 	local privilege = table.verify(detailInfo.privilege);
    // 	if privilege.status then
    // 		award_gold = award_gold + number.valueOf(privilege.gold, 0);
    // 		award_diamond = award_diamond + number.valueOf(privilege.diamond, 0);
    // 		award_props = CombineTables(award_props, table.verify(privilege.props) );
    // 	end

    // 	local bouns = table.verify(detailInfo.bouns);
    // 	award_gold = award_gold + number.valueOf(bouns.gold, 0);
    // 	award_diamond = award_diamond + number.valueOf(bouns.diamond, 0);
    // 	award_props = CombineTables(award_props, table.verify(bouns.props) );

    // 	local desc = string.format("成功购买%s银币", ToolKit.skipMoneyEx2(payMoney) );
    // 	if award_gold > 0 then
    // 		desc = desc .. string.format(",加赠%s银币", award_gold);
    // 	end

    // 	if award_diamond > 0 then
    // 		desc = desc .. string.format(",加赠%s兑换券", award_diamond);
    // 	end

    // 	for propClassifyId, num in pairs(award_props) do
    // 		local propInfo = RechargeDataInterface.getInstance():getGoodInfoByTypeId(propClassifyId);
    // 		if propInfo and propInfo.item_name then
    // 			desc = desc .. ",加赠".. propInfo.item_name .."x" ..num;
    // 		end
    // 	end

    // 	local data = {};
    // 	data.title = detailInfo.pay_succ_tips;         --标题提示信息
    // 	data.rightTitle = "内容说明";
    // 	data.topTips = desc;                             --提示信息
    // 	data.rightContent = detailInfo.pay_succ_explain;
    // 	data.adUrl = detailInfo.pay_succ_pic;
    // 	data.jumpcode = detailInfo.pay_succ_jumpcode;
    // 	data.btnText = detailInfo.btn_text;
    // 	if MessageBox.isShowDirect() then
    // 		RechargeSucPop.show(data);
    // 	end
    // 	if func then
    // 		func()
    // 	end
    // end
    /** 取消了分包加载任务 */
    receiveCanclePkgLoadTask(event, taskID) {
        if (taskID == GConstants.PkgLoaderTaskList.Game) {
            this.print("游戏分包任务加载取消了 重置cmd绑定命令和pb协议解析");
            //初始化绑定绑定映射
            EventManager.dispatch(AppEvent.SYS_UPDATE_CMDMAPPING);
            GPBWriteAndRead.Write.initCommonCmd(GlobalHeadCmdBinding, true);
            GPBWriteAndRead.Read.initCommonCmd(GlobalHeadCmdBinding, true);
            //初始化UI配置
            LayerManager.initUIConfig(UIConfigData);
        }
    }
}
export const GlobalController = _GlobalController.instance

