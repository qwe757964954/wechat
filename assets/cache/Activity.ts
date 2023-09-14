/**
 * Name = Activity
 * URL = db://assets/cache/Activity.ts
 * Time = Mon May 23 2022 10:54:59 GMT+0800 (中国标准时间)
 * Author = xueya
 * 活动数据缓存
 */

import { GConstants } from "../config/GameConstant";
import { Utils } from "../framework/Utils";
import { BaseCache } from "../framework/vc/BaseCache";
import { Platform } from "../platform/Platform";
import { User } from "./User";


export class Activity extends BaseCache {
    /** 用户类 */
    private __User: User = null;
    //新手福利活动
    _newPlayerActivityConfig = null;
    //新手福利活动数据(main)
    _newPlayerActivityMain = null;
    //限时折扣
    _holidaysGiftPackage = null;

    //签到数据
    _signinData = null;
    _continueAwardDay = null;

    //签到活动数据
    _signGiftData = null;

    //今日奖品
    _signTodayGift = null;

    //限时礼包数据
    _limitPackData = null;

    //首充礼包数据
    _firstPayData = null;

    //实例化
    constructor(superClass) {
        super("Activity");
        this.__User = superClass;
    };

    //更新新手福利活动配置
    updateNewPlayerActivityCfg(body) {
        let imgCFG = {
            ["helpBtn"]: "",  // 帮助按钮
            ["closeBtn"]: "", // 关闭按钮
            ["oldBg"]: "", // 邀请页背景
            ["copyBtn"]: "", // 复制邀请码按钮
            ["shareBtn"]: "", // 分享按钮
            ["goFillBtn"]: "", // 去填码按钮
            ["newBg"]: "", // 新人页背景图
            ["getBtn"]: "", // 领奖按钮
            ["goShareBtn"]: "", // 去分享按钮
            ["itemBtn"]: "",  // 奖励背景
            ["seletImg"]: "", // 触发时的奖励框上的闪光框
            ["bubble"]: "",  // 气泡
            ["TipsViewBg"]: "",   // 提示 规则页背景

            // 进度条
            ["progress1"]: "",  // 第一个进度条未达到时的图片
            ["progress2"]: "",  // 中间进度条未达到时的图片
            ["progress3"]: "",  // 最后一个进度条未达到时的图片
            ["progress_acheive1"]: "",  // 第一个进度条达到时的图片
            ["progress_acheive2"]: "",  // 中间进度条达到时的图片
            ["progress_acheive3"]: "",  // 最后一个进度条达到时的图片
        }
        body = Utils.table_verify(body)

        if (body["imageCfg"]) {
            for (let key in body["imageCfg"]) {
                if (Object.prototype.hasOwnProperty.call(body["imageCfg"], key)) {
                    let value = body["imageCfg"][key];
                    imgCFG[key] = value;
                }
            }
        }
        this._newPlayerActivityConfig = {
            status: body["status"],
            oldUserDouble: body["oldUserDouble"],
            oldDayPopNum: body["oldDayPopNum"],
            oldWeekPopNum: body["oldWeekPopNum"],
            NewPopNum: body["NewPopNum"],
            baseIcon: body["baseIcon"],
            firstIcon: body["firstIcon"],
            rule: body["rule"],
            newRule: body["newRule"],
            hallTip: body["hallTip"],
            newUserTip: body["newUserTip"],
            shareTip: body["shareTip"],
            inviteTip: body["inviteTip"],
            imageCfg: imgCFG,
            effectiveDate: body["effectiveDate"],
            id: body["id"],
            edit_time: body["edit_time"],
            sdate: body["sdate"],
            edate: body["edate"],
            userType: body["userType"],  // 2是新用户 1是老用户
        }
        /**
         * "status": 1,
        "oldUserDouble": "1.2",
        "oldDayPopNum": 5,
        "oldWeekPopNum": 5,
        "NewPopNum": 5,
        "baseIcon": "",
        "firstIcon": "https://dfqppic.266.com/dfqp/pic/shop/ixoc4d7p.png",
        "rule": "1.每个用户进入活动页面可以生成自己的分享码，复制给新用户，新用户注册后在活动页面输入分享码，即可领取分享礼
        2. 新用户输入分享码， 并玩牌3局后， 老用户即可领取相应奖励
        3. 被邀请的对象必须是： 新注册玩家。 每人最多邀请10位好友
        4. 系统会对被邀请者做判断， 如被邀者领取不到奖励， 则说明他不符合条件 ",
        "newRule ":"
        2. 新用户输入分享码， 并玩牌3局后， 老用户即可领取相应奖励
        3. 被邀请的对象必须是： 新注册玩家。 每人最多邀请10位好友
        4. 系统会对被邀请者做判断， 如被邀者领取不到奖励， 则说明他不符合条件 ","
        hallTip ":"
        最高送6W银币 ","
        newUserTip ":"
        价\ n值\ n6\ n万\ n银\ n币 ","
        shareTip ":"
        价\ n值\ n6\ n万\ n银\ n币 ","
        inviteTip ":"#
        n邀请# s24# cffe62e 30# n天以上未登录的朋友， 可获# s24# cffe62e 2# n倍奖励 ","
        imageCfg ":{"
            helpBtn ":"
            ","
            closeBtn ":"
            ","
            oldBg ":"https: //dfqppic.266.com/dfqp/pic/shop/txxvlec0.png",
            "copyBtn":"",
            "shareBtn":"",
            "goFillBtn":"",
            "newBg":"https://dfqppic.266.com/dfqp/pic/shop/3bx1gu0s.png",
            "getBtn":"",
            "goShareBtn":"",
            "itemBtn":"",
            "seletImg":"",
            "descBubble":"",
            "goldTextBtn":"",
            "TipsViewBg":"",
            "progress1":"","progress2":"",
            "progress3":"",
            "progress_acheive1":"",
            "progress_acheive2":"",
            "progress_acheive3":""
        },
        "effectiveDate":"2022-05-01 00:00:00 至 2022-05-31 23:59:59",
        "id":1,
        "edit_time":1652783831,
        "sdate":1651334400,
        "edate":1654012799,
        "userType":1
         */
    }
    //获取新手福利活动配置的某一个值
    getNewPlayerActivityCfgBykey(key: string, del: any = null) {
        if (Utils.isNull(key) || Utils.isNull(this._newPlayerActivityConfig)) {
            return null
        }
        return this._newPlayerActivityConfig[key] || del
    }

    //更新新手活动(main)
    updateNewPlayerActivityMain(body) {
        this._newPlayerActivityMain = body
    }
    //获取新手活动(main)
    getNewPlayerActivityMain() {
        return this._newPlayerActivityMain
    }
    //更新限时折扣礼包
    updateHolidaysGiftPackage(body) {
        body = Utils.table_verify(body)
        if (Utils.isNull(body["giftpack"]) || Utils.isNull(body["sdate"]) || Utils.isNull(body["edate"])) {
            return false
        }
        body["sdate"] = Utils.number_valueOf(body["sdate"])
        body["edate"] = Utils.number_valueOf(body["edate"])
        //保存的key
        let keyArray = [
            "add_time",
            "appid",
            "basemap",
            "buyBtn",
            "edate",
            "edit_time",
            "firstIcon",
            "giftpack", //商品道具
            "id",
            "sdate",   //开始时间
            "sedate",  //结束时间
            "status"
        ]
        this._holidaysGiftPackage = this.mergeArray(keyArray, body);
        this.__User.RedDot.update_gift_holiday(this._holidaysGiftPackage);
    }
    /** 获取限时折扣礼包 */
    getHolidaysGiftPackage() {
        return this._holidaysGiftPackage;
    }

    /**
     * 判断是否强弹 
     * @returns boolean 
    */
    checkHolidayPop(): boolean {
        if (Platform.isCanPay() == false) {
            return false;
        }
        if (this._holidaysGiftPackage) {
            if (this._holidaysGiftPackage["sdate"] && this._holidaysGiftPackage["edate"]) {
                let currowTime = Utils.time();
                if (currowTime < this._holidaysGiftPackage["sdate"] || currowTime > this._holidaysGiftPackage["edate"]) {
                    return false;
                }
            }
        }
        //如果没有次数了
        let giftpack = this._holidaysGiftPackage['giftpack'];
        let flag = false;
        //获取剩余次数
        for (let value of giftpack) {
            let num = Utils.number_valueOf(value['num']);
            let goodsId = Utils.number_valueOf(value['gid']);
            if (goodsId <= 0) {
                continue;
            }
            let payData = this.__User.ShopInfo.getPriceByGoodsSceneId(GConstants.GoodsListID.limitPack, goodsId);
            let maxNum = Utils.number_valueOf(payData['limitNum'], 0);
            let isLimit = Utils.number_valueOf(payData['limit_buy_way'], 0);
            if (isLimit == 0 || maxNum > num) {
                flag = true;
                break;
            }
        }
        return flag;
    }


    /** 更新签到数据(服务端下发) */
    updateSigninData(body) {
        body = Utils.table_verify(body)

        if (Utils.isNull(body.today) || Utils.isNull(body.signAward)) {
            return
        }

        body.today = Utils.number_valueOf(body.today);

        for (let k in body.signAward) {
            body.signAward[k].today = body.today;
        }

        this._signinData = body;

        this.print("updateSigninData: ", body);

        this.__User.RedDot.update_signin(this._signinData);
    }
    /** 更新签到数据(成功之后) */
    updateSigninBySuccess(body) {

        body = Utils.table_verify(body)

        if (Utils.isNull(this._signinData)) {
            return null;
        }
        let signinDataToday = null;

        this._signinData.todayStatus = 1;

        if (!Utils.table_isEmpty(this._signinData.signAward)) {
            let itemData = this._signinData.signAward[this._signinData.today - 1]
            if (!Utils.table_isEmpty(itemData)) {
                itemData.status = 3;
                signinDataToday = itemData;
            }
        }


        if (Utils.isNotNull(body.ctDay) && body.ctDay > 0) {
            if (!Utils.table_isEmpty(this._signinData.continueAward)) {
                for (let index = 0; index < this._signinData.continueAward.length; index++) {
                    let itemData = this._signinData.continueAward[index]
                    if (!Utils.table_isEmpty(itemData) && itemData.day == body.ctDay) {
                        itemData.status = 1;
                    }
                }
            }
        }

        this.__User.RedDot.update_signin(this._signinData);
        return signinDataToday;
    }

    updateContinusAward(body, day: number) {
        let continueAwardToday = null;

        body = Utils.table_verify(body)

        if (Utils.isNull(this._signinData)) {
            return continueAwardToday;
        }

        if (Utils.isNotNull(day) && day > 0) {
            if (!Utils.table_isEmpty(this._signinData.continueAward)) {
                for (let index = 0; index < this._signinData.continueAward.length; index++) {
                    let itemData = this._signinData.continueAward[index]
                    if (!Utils.table_isEmpty(itemData) && itemData.day == day) {
                        itemData.status = 2;
                        continueAwardToday = itemData;
                    }
                }
            }
        }

        this.__User.RedDot.update_signin(this._signinData);
        return continueAwardToday;
    }

    /** 获取签到数据 */
    getSigninData() {
        return this._signinData;
    }

    /** 是否有签到数据 */
    checkHaveSignin(): boolean {
        return Utils.isNotNull(this._signinData);
    }
    /** 今日是否打开签到 */
    checkTodayIsOpenSign(): boolean {
        return this.__User.getTodayLocalRecord("hasShowSignin", false)
    }
    /** 更新今日签到状态 */
    updateTodayOpenSign() {
        this.__User.setTodayLocalRecord("hasShowSignin", true)
    }

    setContinusAwardDay(value: number) {
        this._continueAwardDay = value;
    }

    getContinusAwardDay() {
        return this._continueAwardDay;
    }

    /** 更新特价礼包数据(服务端下发) */
    updateLimitPackData(body) {
        body = Utils.table_verify(body)

        if (Utils.isNull(body.id) || Utils.isNull(body.giftpack)) {
            return
        }
        body.id = Utils.number_valueOf(body.id);
        this._limitPackData = body;
        this.print("limitPackData: ", body);
    }

    /** 是否有特价礼包数据 */
    checkHaveLimitPack(): boolean {
        return Utils.isNotNull(this._limitPackData);
    }

    /** 获取特价礼包数据  */
    getLimitPackData() {
        return this._limitPackData
    }

    /** 获取特价礼包数据  */
    getLimitPackIcon() {
        return this._limitPackData.firstIcon
    }


    /** 设置首充礼包 */
    updateFirstPayPackage(body) {
        body = Utils.table_verify(body)
        if (!Utils.table_isEmpty(body)) {
            if (Utils.isNull(body["giftpack"]) || Utils.isNull(body["gid"]) || Utils.isNull(body["price"])) {
                return false
            }
            body["gid"] = Utils.number_valueOf(body["gid"])
            body["price"] = Utils.number_valueOf(body["price"])
            //保存的key
            let keyArray = [
                "gid",
                "price",
                "goodsBaseMap",
                "firstIcon",
                "giftpack",
                "button",
                "popNum",
                "original_price",
            ];
            this._firstPayData = this.mergeArray(keyArray, body)
        } else {
            this._firstPayData = {};
        }
        this.__User.RedDot.update_gift_firstpay(this._firstPayData);
    }

    /** 获取首充礼包 */
    getFirstPayPackage() {
        return this._firstPayData;
    }
}

