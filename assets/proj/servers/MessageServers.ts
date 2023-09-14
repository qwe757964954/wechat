/**
 * Name = MessageServers
 * URL = db://assets/proj/servers/MessageServers.ts
 * Time = Wed 2022 09.28 19:03:18 GMT+0800 (中国标准时间)
 * Author = xueya
 * 信箱相关服务
 */

import { GCache } from "../../cache/GCache";
import { AppEvent } from "../../config/AppEvent";
import { GConstants } from "../../config/GameConstant";
import { UIID } from "../../config/UIConfig";
import { inf_GetPropItem } from "../../framework/InterfaceDefines";
import { Utils } from "../../framework/Utils";
import { Encrypt } from "../../framework/crypto/Encrypto";
import { EventManager } from "../../framework/manager/EventManager";
import { BaseControll } from "../../framework/vc/BaseController";
import { GlobalCMD } from "../gnet/GlobalCMD";

export class MessageServers extends BaseControll {
    private static _instance = null;
    public static getInstance(): MessageServers {
        if (!this._instance || this._instance == null) {
            this._instance = new MessageServers("MessageServers");
        }
        return this._instance;
    }

    //实例化
    constructor(name: string) {
        super(name)
    };
    public static init(): MessageServers {
        if (this._instance) {
            this._instance.clear()
        }
        this._instance = null
        MessageServers.getInstance();
        return
    }

    /**初始化添加事件绑定 */
    protected onInitModuleEvent(): void {
        //请求拉取信箱数据
        this.addModelListener(AppEvent.NET_CMD_REQ_WATCH, this.reqMessageData)
        //请求拉取信箱数据返回
        this.addModelListener(AppEvent.NET_CMD_RESP_WATCH, this.respMessageData)
        //请求邮箱领奖
        this.addModelListener(AppEvent.NET_REQ_EMAIL_REWARD, this.reqEmailAward)
        //请求邮箱领奖返回
        this.addModelListener(AppEvent.NET_RESP_EMAIL_REWARD, this.respEmailAward)
    }


    //请求邮箱数据
    reqMessageData(event) {
        //客户端存的最大的的邮箱ID
        let maxId = GCache.MailInfo.getMaxId()
        maxId = Utils.number_valueOf(maxId, 0)
        let sendMsg = {
            cmd: GlobalCMD.PHP_EMAIL_DATA,
            body: {
                id: maxId
            },
        }
        console.log("请求邮箱数据,maxId:", maxId, sendMsg)
        EventManager.dispatch(AppEvent.NET_SEND_MSG, sendMsg)
    }

    /**
     * 请求邮箱数据返回
     * @param event 
     * @param isSuccess 是否成功
     * @param respData 响应数据
     * @param reqData 请求数据
     */
    respMessageData(event, isSuccess, respData, reqData) {
        console.log("请求邮箱配置数据返回", respData, isSuccess, reqData)
        if (isSuccess) {   
            if (Utils.isNull(respData.data)) {
                return
            }
            let data = respData.data;
            GCache.WatchMessage.dealData(data)
        }
    }

    /**
     * 请求邮箱奖励数据
     * @param event 事件
     * @param msgid 邮件ID
     */
    reqEmailAward(event, msgid) {
        if (Utils.isNull(msgid)) {
            this.print("msgid error",)
            return
        }
        let sendMsg = {
            cmd: GlobalCMD.PHP_EMAIL_REWARD,
            body: {
                msgid: msgid
            },
        }
        this.print("请求邮件领奖", sendMsg)
        EventManager.dispatch(AppEvent.NET_SEND_MSG, sendMsg)
    }


    //请求邮箱奖励返回
    respEmailAward(event, isSuccess, respData, reqData) {
        this.print("请求邮箱奖励返回", respData, isSuccess, reqData)

        if (isSuccess != true) {
            //领取失败
            EventManager.dispatch(AppEvent.SYS_TOAST_TIP, { content: respData["errorTips"] });
            this.print("请求领取邮件道具奖励失败:", respData, reqData)
            return;
        }
        let oldData = {};
        if (respData["id"] != null) {
            oldData = GCache.MailInfo.getMsgByID(respData["id"]);

        }
        oldData = Utils.table_verify(oldData);
        let awards = Encrypt.JsonDecode(oldData["awards"]);
        if (respData["awards"]) {
            let awardData = [];
            for (let i = 0; i < respData["awards"].length; i++) {
                if (awards[i]) {
                    if (respData["awards"][i]["havegot"] == GConstants.MsgAwardStatus.GOT && awards[i]["havegot"] == GConstants.MsgAwardStatus.NOT_GOT) {
                        let goodType = Number(respData["awards"][i]["type"]);
                        let goodNum = Number(respData["awards"][i]["num"]);
                        //领取成功，加银币加钱
                        if (goodType == GConstants.PropertyType.SILVER_COIN || goodType == GConstants.PropertyType.GOLD_BAR || goodType == GConstants.PropertyType.DIAMOND) {
                            let money = GCache.User.getUserMoneyByID(goodType);
                            GCache.User.updateUserMoneyByID(goodType, money + goodNum);
                        }
                        let info = GCache.PropsConf.getPropsInfoById(goodType);  
                        let data:inf_GetPropItem= {
                            icon: info['url'],
                            name:info['item_name'],
                            num:goodNum,
                        }          
                        console.log("awardnum:",data)
                        awardData.push(data);
                    }
                }
            }
            oldData['status'] = GConstants.MsgStatus.MSG_STATUS_HANDLED
            GCache.MailInfo.updateMailDataInCache(oldData)
            if (awardData.length > 0) {
                //通知:恭喜获得
                EventManager.dispatch(AppEvent.VIEW_UI_OPEN, UIID.GongXiHuoDePrefab, awardData);
                //通知:领完奖励更新邮件
                EventManager.dispatch(AppEvent.NOTIFY_EMAIL_CHANGE);
            }
        }
    }

}