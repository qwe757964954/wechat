/**
 * Name = ActivityController
 * URL = db://assets/proj/ActivityController.ts
 * Time = Wed Jun 22 2022 19:03:18 GMT+0800 (中国标准时间)
 * Author = xueya
 * 活动控制器
 */

import { GCache } from "../cache/GCache";
import { AppEvent } from "../config/AppEvent";
import { GConstants } from "../config/GameConstant";
import { GameTxt } from "../config/GameTxt";
import { UIID } from "../config/UIConfig";
import { inf_GetPropItem } from "../framework/InterfaceDefines";
import { EventManager } from "../framework/manager/EventManager";
import { Utils } from "../framework/Utils";
import { BaseControll } from "../framework/vc/BaseController";
import { GameRoomHelper } from "./GameRoomHelper";
import { GlobalCMD, GlobalCMDHead } from "./gnet/GlobalCMD";


export class ActivityController extends BaseControll {
    private static _instance = null;
    public static getInstance(): ActivityController {
        if (!this._instance || this._instance == null) {
            this._instance = new ActivityController("ActivityController");
        }
        return this._instance;
    }
    //破产来自:
    reqBankUpFrom = null;
    //实例化
    constructor(name: string) {
        super(name)
    };
    public static init(): ActivityController {
        if (this._instance) {
            this._instance.clear()
        }
        this._instance = null
        ActivityController.getInstance();
        return
    }

    /**初始化添加事件绑定 */
    protected onInitModuleEvent(): void {
        //请求新手活动信息
        this.addModelListener(AppEvent.NET_REQ_NEW_PLAYER_CONFIG, this.reqNewPlayerActivity)
        //新手活动信息返回
        this.addModelListener(AppEvent.NET_FORWARD_NEW_PLAYER_CONFIG, this.respNewPlayerActivity)
        //请求新手活动奖励列表
        this.addModelListener(AppEvent.NET_REQ_NEW_PLAYER_GIFT_LIST, this.reqNewPlayerActivityGiftList)
        //新手活动奖励列表返回
        this.addModelListener(AppEvent.NET_FORWARD_NEW_PLAYER_GIFT_LIST, this.respNewPlayerActivityGiftList)

        //请求新手奖励/邀请奖励
        this.addModelListener(AppEvent.NET_REQ_NEW_PLAYER_REWARD, this.reqNewPlayerReward)
        //新手奖励/邀请奖励返回
        this.addModelListener(AppEvent.NET_FORWARD_NEW_PLAYER_REWARD, this.respNewPlayerReward)
        //请求限时折扣
        this.addModelListener(AppEvent.NET_REQ_HOLIDAYS_GIFTPACKAGE, this.reqHolidaysGiftPackage)
        //限时折扣返回
        this.addModelListener(AppEvent.NET_FORWARD_HOLIDAYS_GIFTPACKAGE, this.respHolidaysGiftPackage)

        //请求签到配置数据
        this.addModelListener(AppEvent.NET_REQ_SIGNIN_CONFIG, this.reqSigninConfig)
        //请求签到配置数据返回
        this.addModelListener(AppEvent.NET_FORWARD_SIGNIN_CONFIG, this.respSigninConfig)
        //请求签到
        this.addModelListener(AppEvent.NET_REQ_SIGNIN_AWARD, this.reqSignin)
        //请求签到返回
        this.addModelListener(AppEvent.NET_FORWARD_SIGNIN_AWARD, this.respSignin)
        //请求连续签到奖励
        this.addModelListener(AppEvent.NET_REQ_SIGNIN_CONTINU_AWARD, this.reqContinusAward)
        //请求连续签到奖励返回
        this.addModelListener(AppEvent.NET_FORWARD_SIGNIN_CONTINU_AWARD, this.respSignContinusAward)

        /************************破产礼包相关************************/
        //请求新版破产礼包配置
        this.addModelListener(AppEvent.NET_REQ_BANKRUPT_GIFT_CONF, this.reqBankUpGiftConf)
        //返回新版破产礼包配置
        this.addModelListener(AppEvent.NET_RESP_BANKRUPT_GIFT_CONF, this.respBankUpGiftConf)

        /************************破产相关************************/
        //请求获取破产线
        this.addModelListener(AppEvent.NET_REQ_BANKRUPT_CONFIG, this.reqBankUpData)
        //返回获取破产线
        this.addModelListener(AppEvent.NET_RESP_BANKRUPT_CONFIG, this.respBankUpData)

        //请求获取破产次数
        this.addModelListener(AppEvent.NET_REQ_BANKRUPT_COUNT, this.reqBankUpCount)
        //返回获取破产次数
        this.addModelListener(AppEvent.NET_RESP_BANKRUPT_COUNT, this.respBankUpCount)
        //破产文案显示
        this.addModelListener(AppEvent.NET_FORWARD_BANKRUPT_TOAST, this.receiveBankUpToast)

        //请求救济金
        this.addModelListener(AppEvent.NET_REQ_BANKRUPT, this.reqBankUpMoney)
        //返回用户破产请求
        this.addModelListener(AppEvent.NET_RESP_BANKRUPT, this.respBankUpMoney)

        //请求首充礼包配置
        this.addModelListener(AppEvent.NET_REQ_FIRST_PAY_CONFIG, this.reqFirstPayConfig)
        //请求首充礼包配置返回
        this.addModelListener(AppEvent.NET_RESP_FIRST_PAY_CONFIG, this.respFirstPayConfig)

    }


    //请求新手活动信息
    reqNewPlayerActivity(event) {
        let sendMsg = {
            cmd: GlobalCMD.PHP_ACTIVITY_PULL_NEW_PEOPLE_GET_CFG,
            body: null,
        }
        EventManager.dispatch(AppEvent.NET_SEND_MSG, sendMsg)
    }

    //新手活动信息返回
    respNewPlayerActivity(event, isSuccess, respData, reqData) {
    }
    //请求新手活动奖励列表
    reqNewPlayerActivityGiftList(event) {
        let sendMsg = {
            cmd: GlobalCMD.PHP_ACTIVITY_PULL_NEW_PEOPLE_LIST,
            body: null,
        }
        EventManager.dispatch(AppEvent.NET_SEND_MSG, sendMsg)
    }
    //新手活动奖励列表返回
    respNewPlayerActivityGiftList(event, isSuccess, respData, reqData) {
        this.dump(respData, "新手活动奖励列表返回" + isSuccess)

        if (isSuccess) {
            GCache.Activity.updateNewPlayerActivityMain(respData)
            EventManager.dispatch(AppEvent.ACTIVITY_UPDATE_NEW_PLAYER_GIFT)

        } else {
            if (respData && !Utils.string_isEmpty(respData["errorTips"])) {
                EventManager.dispatch(AppEvent.SYS_TOAST_TIP, { content: respData["errorTips"] })
            }
        }
    }

    //请求新手奖励/邀请奖励
    reqNewPlayerReward(event, types, code) {
        if (Utils.isNull(types)) {
            return
        }
        let sendMsg = {
            cmd: GlobalCMD.PHP_ACTIVITY_PULL_NEW_PEOPLE_GET_REWARD_NEW,
            body: {
                type: types,
                code: code,
            },
        }
        EventManager.dispatch(AppEvent.NET_SEND_MSG, sendMsg)
    }
    //新手奖励/邀请奖励返回
    respNewPlayerReward(event, isSuccess, respData, reqData) {
        this.dump(respData, "新手奖励/邀请奖励返回" + isSuccess)
        if (isSuccess) {
            let reqArray = {
                type: reqData["type"],
                code: reqData["code"],
            }
            let awardData: Array<inf_GetPropItem> = [];
            for (let type in respData) {
                if (Object.prototype.hasOwnProperty.call(respData, type)) {
                    let data: inf_GetPropItem = {
                        icon: respData[type]["gicon"],
                        name: respData[type]["gname"],
                        num: respData[type]["gnum"],
                    }
                    awardData.push(data);
                }
            }
            //通知:恭喜获得
            EventManager.dispatch(AppEvent.VIEW_UI_OPEN, UIID.GongXiHuoDePrefab, awardData)
            this.reqNewPlayerActivityGiftList(null)
        } else {
            if (respData && !Utils.string_isEmpty(respData["errorTips"])) {
                EventManager.dispatch(AppEvent.SYS_TOAST_TIP, { content: respData["errorTips"] })
            }
        }
    }
    /**
     * 请求破产礼包配置，不传时，返回是否有破产礼包 有值时，返回游戏指定场次的破产礼包信息
     * @param event 
     * @param gameID 游戏ID
     * @param levelID 房间level
     */
    protected reqBankUpGiftConf(event = null, gameID: number = null, levelID: number = null) {
        console.log('广播:请求破产礼包')
        let sendMsg = {
            cmd: GlobalCMD.PHP_GET_BANKRUPTPACK,

            body: { gameid: gameID, levelid: levelID },
        }
        EventManager.dispatch(AppEvent.NET_SEND_MSG, sendMsg)
    }

    /** 返回破产礼包配置 */
    protected respBankUpGiftConf(event, isSuccess, respData, reqData) {
        this.dump("返回破产礼包" + isSuccess, respData,)
        this.dump("广播:respData=>", respData,)
        let newBankruptGiftData = {};
        let isTrueData = false;
        if (isSuccess && respData) {
            if (respData["giftPack"]) {
                newBankruptGiftData = respData;
                if (respData["goods"] && respData["goods"]["id"] != null) {
                    //破产首冲礼包，读取破产首充商品信息，不是大厅的首充商品信息
                    newBankruptGiftData["isFirstPay"] = true;
                    newBankruptGiftData["goodsId"] = respData["goods"]["id"]; //礼包对应的商品id
                    newBankruptGiftData["giftPack"].splice(0, 0, respData["goods"]);
                }
                isTrueData = true;
            }

        }
        //更新礼包配置
        GCache.BankrupData.updateNewBankUpGiftConf(newBankruptGiftData);
        if (isTrueData && GameRoomHelper.checkShowBankruptParam) {
            let toData = GameRoomHelper.checkShowBankruptParam;
            GameRoomHelper.checkShowBankruptView(toData["gameID"], toData["levelID"], toData["moneyID"], toData["status"], toData["time"])
        }
        GameRoomHelper.checkShowBankruptParam = null;
    }
    /** 请求破产信息 */
    protected reqBankUpData(event = null) {
        this.dump("请求破产线数据")
        let sendMsg = {
            cmd: GlobalCMDHead.SEND_BANKRUPT_CONFIG,
            body: null,
        }
        EventManager.dispatch(AppEvent.NET_SEND_MSG, sendMsg)
    }

    /** 返回破产线 */
    protected respBankUpData(event = null, respData = null) {
        this.dump(respData, "破产线数据返回")
        if (respData) {
            GCache.BankrupData.updateBankruptConfig(respData);
            this.reqBankUpCount();
        }
    }
    /** 请求获取破产次数 */
    protected reqBankUpCount(event = null, hasShard: number = 0) {
        this.dump("请求获取破产次数")
        if (GCache.BankrupData.isCanCheckUpdateCount() == false) {
            return;
        }
        let sendMsg = {
            cmd: GlobalCMDHead.SEND_BANKRUPT_COUNT,
            body: { mid: GCache.User.getUserMid(), hasShard: hasShard },
        }
        EventManager.dispatch(AppEvent.NET_SEND_MSG, sendMsg)
        GCache.BankrupData.updateLastTimeBankUpCount();
    }

    /** 返回获取破产次数 */
    protected respBankUpCount(event = null, respData = null) {
        this.dump(respData, "获取破产次数返回")
        if (respData) {
            if (GCache.User.isLoginSuccesed() == false) {
                return;
            }
            GCache.BankrupData.setCurBankruptInfo(respData);
            let isPayUser = GCache.User.getIsPayUser();
            if (respData["vipExpires"] == 0 || respData["vipExpires"] < -1) {//过期
                if (isPayUser) {
                    GCache.User.setIdentity(GConstants.UserIdentity.Rmb);
                } else {
                    GCache.User.setIdentity(GConstants.UserIdentity.Normal);
                }
                GCache.User.setVipTime(0);
            } else {//没有过期
                if (isPayUser) {
                    GCache.User.setIdentity(GConstants.UserIdentity.RmbAndVip);
                } else {
                    GCache.User.setIdentity(GConstants.UserIdentity.Vip);
                }
                GCache.User.setVipTime(respData["vipExpires"]);
            }
            this.reqBankUpToast(null, GCache.BankrupData.curBankruptCount);

        }
    }
    /** 请求破产文案 */
    protected reqBankUpToast(event = null, num = null) {
        if (Utils.isNull(num)) {
            return;
        }
        let sendMsg = {
            cmd: GlobalCMD.PHP_BANKRUPT_TOAST,
            body: { id: num },
        }
        EventManager.dispatch(AppEvent.NET_SEND_MSG, sendMsg)
    }
    /** 破产文案显示 */
    protected receiveBankUpToast(event, isSuccess, respData, reqData) {
        if (isSuccess) {
            if (respData["info"]) {
                GCache.BankrupData.bankToast = respData["info"]["copywriting"];
                this.print("破产文案内容：", GCache.BankrupData.bankToast)
            }
        }
    }
    /** 领取破产救济金 */
    protected reqBankUpMoney(event = null, param = null) {
        this.print("主动点击领取破产救济金===>");
        if (GCache.BankrupData.isMineBankrupt() == false) {
            if (param == null) {
                EventManager.dispatch(AppEvent.SYS_TOAST_TIP, { content: GameTxt.bank_receive_fail });
            }
            return;
        }
        if (GCache.BankrupData.isBankruptRewardRemain() == false) {//补助已领取完毕
            if (param == null) {
                EventManager.dispatch(AppEvent.SYS_TOAST_TIP, { content: GameTxt.bankruptErrTips2 });
            }
            return;
        }
        this.reqBankUpFrom = param;

        let sendMsg = {
            cmd: GlobalCMDHead.SEND_BANKRUPT_MONEY,
            body: { mid: GCache.User.getUserMid() },
        }
        EventManager.dispatch(AppEvent.NET_SEND_MSG, sendMsg)
    }
    /** 破产返回 */
    protected respBankUpMoney(event = null, respData = null) {
        this.dump("领取破产救济金返回==>", respData)
        if (respData) {
            let packetInfo = {
                "flag": respData["flag"],                  //请求破产是否成功(1.成功 0失败)
                "brokeMoney": respData["brokeMoney"],      //破产领取的钱数
                "money": respData["money"],                //用户当前的钱数
                "errType": respData["errType"],            //失败原因：1、server记没有破产2、已经领取完了所有破产奖励3、还没有到领取破产奖励的时间4、其他原因 
            };
            let isSuccess = (packetInfo.flag == 1);

            let content = GCache.BankrupData.bankToast;

            if (isSuccess && packetInfo.brokeMoney > 0) {
                GCache.BankrupData.curBankruptReward = packetInfo.brokeMoney;
                let moneyType = 0;
                if (GCache.Desk) {
                    moneyType = GCache.Desk.MoneyTypeID
                }
                let money = Utils.number_valueOf(packetInfo.money) + Utils.number_valueOf(packetInfo.brokeMoney);
                GCache.User.updateUserMoneyByID(moneyType, money);
                content = Utils.string_format(GameTxt.bank_receive_success, packetInfo.brokeMoney);

            } else {
                this.print("领取破产救济金失败！失败原因: " + packetInfo.errType)
                if (this.reqBankUpFrom == null) {
                    content = GameTxt[`"bankruptErrTips"${packetInfo.errType}`];
                }
            }
            //刷新破产次数
            this.reqBankUpCount();
            //显示破产吐司文案
            this.print("显示破产吐司: ", content);
            EventManager.dispatch(AppEvent.SYS_TOAST_TIP, { content: content });
            //通知破产结果
            EventManager.dispatch(AppEvent.ACTIVITY_BANKUP_BACK, isSuccess, packetInfo);
        }
        this.reqBankUpFrom = null;
    }


    //请求签到配置数据
    reqSigninConfig(event) {
        let sendMsg = {
            cmd: GlobalCMD.PHP_SIGNINAWARD_SIGNINDATA,
            body: null,
        }
        EventManager.dispatch(AppEvent.NET_SEND_MSG, sendMsg)
    }
    //请求签到配置数据返回
    respSigninConfig(event, isSuccess, respData, reqData) {
        this.dump(respData, "请求签到配置数据返回" + isSuccess)
        if (isSuccess) {
            GCache.Activity.updateSigninData(respData)
            //签到配置数据有更新
            EventManager.dispatch(AppEvent.ACTIVITY_UPDATE_SIGNIN_CONF)
        }
    }

    //请求签到
    reqSignin(event, day: number = 0) {
        let sendMsg = {
            cmd: GlobalCMD.PHP_SIGNINAWARD_NEWSIGNIN,
            body: {
                day: day,
                isBuSignin: false,
                isAdSignin: false,
            },
        }
        this.print("reqSignin", sendMsg);
        EventManager.dispatch(AppEvent.NET_SEND_MSG, sendMsg)
    }

    //签到返回
    respSignin(event, isSuccess, respData, reqData) {
        this.dump(respData, "签到返回" + isSuccess)
        if (isSuccess) {
            let data = GCache.Activity.updateSigninBySuccess(respData)
            if (data != null) {
                let obj = {
                    icon: data.icon,
                    name: data.name,
                    num: data.num
                }
                let arr = []
                arr.push(obj)
                EventManager.dispatch(AppEvent.VIEW_UI_OPEN, UIID.GongXiHuoDePrefab, arr)
            }
        }
    }

    // 请求连续奖励
    reqContinusAward(event, day: number = 0) {
        let sendMsg = {
            cmd: GlobalCMD.PHP_SIGNINAWARD_CONTINUAWARD,
            body: {
                day: day,
            },
        }
        this.print("reqContinusAward", sendMsg);
        GCache.Activity.setContinusAwardDay(day);
        EventManager.dispatch(AppEvent.NET_SEND_MSG, sendMsg)
    }

    // 连续签到领取奖励返回
    respSignContinusAward(event, isSuccess, respData, reqData) {
        this.dump(respData, "连续签到领取奖励返回" + isSuccess)
        if (isSuccess) {
            this.print("respSignContinusAward", respData)
            let day = GCache.Activity.getContinusAwardDay();
            let data = GCache.Activity.updateContinusAward(respData, day)
            if (Utils.isNotNull(data)) {
                let obj = {
                    icon: data.icon,
                    name: data.name,
                    num: data.num
                }
                let arr = []
                arr.push(obj)
                EventManager.dispatch(AppEvent.VIEW_UI_OPEN, UIID.GongXiHuoDePrefab, arr)
            }
        }
    }
    //请求限时折扣
    reqHolidaysGiftPackage(event) {
        let sendMsg = {
            cmd: GlobalCMD.PHP_HOLIDAYS_GIFTPACKAGE,
            body: null,
        }
        EventManager.dispatch(AppEvent.NET_SEND_MSG, sendMsg)
    }

    //限时折扣返回
    respHolidaysGiftPackage(event, isSuccess, respData, reqData) {
        console.log("限时折扣返回", respData, isSuccess, reqData)
        if (isSuccess) {
            GCache.Activity.updateHolidaysGiftPackage(respData)
        }
        //限时折扣有更新
        EventManager.dispatch(AppEvent.ACTIVITY_UPDATE_HOLIDAYSGIFTPACKAGE);
    }

    //请求首充配置数据
    reqFirstPayConfig(event) {
        let sendMsg = {
            cmd: GlobalCMD.PHP_FIRST_PAY_CONFIG,
            body: null,
        }
        console.log("请求首充数据", sendMsg)
        EventManager.dispatch(AppEvent.NET_SEND_MSG, sendMsg)
    }
    //请求首充配置数据返回
    respFirstPayConfig(event, isSuccess, respData, reqData) {
        console.log("请求首充数据返回", isSuccess, respData, reqData);
        if (isSuccess) {
            GCache.Activity.updateFirstPayPackage(respData);
            //首充配置数据有更新
            EventManager.dispatch(AppEvent.ACTIVITY_UPDATE_FIRSTPAY_CONF);
        }
    }

}

