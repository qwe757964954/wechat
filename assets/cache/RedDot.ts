import { AppEvent } from "../config/AppEvent";
import { GConstants, StoreKey } from "../config/GameConstant";
import { Encrypt } from "../framework/crypto/Encrypto";
import { LocalStorage } from "../framework/LocalStorage";
import { EventManager } from "../framework/manager/EventManager";
import { Utils } from "../framework/Utils";
import { BaseCache } from "../framework/vc/BaseCache";
import { Platform } from "../platform/Platform";
import { User } from "./User";
/**
 * Name = RedDot
 * URL = db://assets/cache/RedDot.ts
 * Time = Mon May 09 2022 14:43:04 GMT+0800 (中国标准时间)
 * Author = xueya
 * 红点
 */

export class RedDot extends BaseCache {
    /** 用户类 */
    private __User: User = null;

    /** 数据(非本地存储) */
    private _redConfData = {};
    /** 数据(支持本地存储) */
    private _redConfLocalData = {};

    /** 红点判断映射 */
    private _hasRedDotMapping = {};

    //实例化
    constructor(superClass) {
        super("RedDot")
        this.__User = superClass;
        this.initMapping();
    };
    /** 初始化检测映射 */
    private initMapping() {
        this._hasRedDotMapping = {
            /** 七日签到 */
            [GConstants.RedDotConf.Sign]: Utils.handler(this, this.has_reddot_signin),
            /** 邮件 */
            [GConstants.RedDotConf.Email]: Utils.handler(this, this.has_reddot_mail),
            /** 商城 */
            [GConstants.RedDotConf.Shop]: Utils.handler(this, this.has_reddot_shop),
            /** 好友 */
            [GConstants.RedDotConf.Friend]: Utils.handler(this, this.has_reddot_friend),
            /** 活动中心-活动 */
            [GConstants.RedDotConf.ActivityNormal]: Utils.handler(this, this.has_reddot_activityNormal),
            /** 活动中心-公告 */
            [GConstants.RedDotConf.ActivityNotice]: Utils.handler(this, this.has_reddot_activityNotice),
            /** 装扮-头像 */
            [GConstants.RedDotConf.UserHead]: Utils.handler(this, this.has_reddot_userHead),
            /** 新手活动 */
            [GConstants.RedDotConf.NewUserActivity]: Utils.handler(this, this.has_reddot_newuserActivity),
            /** 首充礼包 */
            [GConstants.RedDotConf.FirstPay]: Utils.handler(this, this.has_reddot_firstPay),
            /** 付费礼包 */
            [GConstants.RedDotConf.Holiday]: Utils.handler(this, this.has_reddot_holiday),


        }
    }
    /** 加载本地数据 */
    reloadLocalData() {
        let key = Utils.string_format(StoreKey.USER_RED_RECORD, this.__User.getUserMid());
        let data = LocalStorage.get(key, null);
        if (data != null) {
            this._redConfLocalData = Utils.table_verify(Encrypt.JsonDecode(data));
        }
    }
    /** 保存本地数据 */
    updateLocalData() {
        let data = Encrypt.JsonEncode(this._redConfLocalData);
        let key = Utils.string_format(StoreKey.USER_RED_RECORD, this.__User.getUserMid());
        LocalStorage.set(key, data);
    }
    /** 判断红点 */
    public hasRedDot(key, param = null) {
        if (key == null || this._hasRedDotMapping[key] == null) {
            return false;
        }
        this.print("单条数据是否有红点", this._hasRedDotMapping[key](param), 'key', key, 'param', param)
        return this._hasRedDotMapping[key](param) || false;
    }

    /** 8.签到 */
    update_signin(data) {
        this._redConfData[GConstants.RedDotConf.Sign] = data;
        //通知:红点更新
        EventManager.dispatch(AppEvent.NOTIFY_UPDATE_RED_DOT, GConstants.RedDotConf.Sign, this.hasRedDot(GConstants.RedDotConf.Sign));
    }
    /** 判断签到红点 */
    has_reddot_signin() {
        if (!this._redConfData[GConstants.RedDotConf.Sign]) {
            return false;
        }

        this.print("RedDot", this._redConfData[GConstants.RedDotConf.Sign])
        if (Utils.isNull(this._redConfData[GConstants.RedDotConf.Sign]["todayStatus"])) {
            return false;
        } else if (this._redConfData[GConstants.RedDotConf.Sign]["todayStatus"] == 0) {
            return true;
        }

        if (Utils.isNull(this._redConfData[GConstants.RedDotConf.Sign]["continueAward"])) {
            return false;
        }

        let res = false;

        let data = this._redConfData[GConstants.RedDotConf.Sign]["signin_info"];
        for (let key in data) {
            if (Object.prototype.hasOwnProperty.call(data, key) && res == false) {
                if (data[key]["status"] == 1) {
                    res = true;
                }
            }
        }
        return res;
    }
    /** 邮件 */
    update_mail_red() {
        console.log("通知更新")
        //通知:红点更新
        EventManager.dispatch(AppEvent.NOTIFY_UPDATE_RED_DOT, GConstants.RedDotConf.Email, this.hasRedDot(GConstants.RedDotConf.Email));
    }
    /** 判断邮件红点 */
    has_reddot_mail() {
        let data = this.__User.MailInfo.MailData;
        let flag = false;
        for (let key in data) {
            if (Object.prototype.hasOwnProperty.call(data, key) && flag == false) {
                let v = data[key];
                if (data[key]["status"] == GConstants.MsgStatus.MSG_STATUS_FRESH) {
                    flag = true;
                }
            }
        }
        return flag
    }
    /** 邮件入口是否可见 */
    need_show_email() {
        return true;
    }
    /** 10.商城红点增加判断逻辑：只要商城内有可免费购买的商品，则一直显示红点*/
    update_shop_red() {
        //通知:红点更新
        EventManager.dispatch(AppEvent.NOTIFY_UPDATE_RED_DOT, GConstants.RedDotConf.Shop, this.hasRedDot(GConstants.RedDotConf.Shop));
    }
    /** 判断商城红点 */
    has_reddot_shop() {
        // 商城是否有免费商品 有的话展示红点
        return this.__User.ShopInfo.isExitFreeGoods();
    }
    /** 11.好友红点*/
    update_friend_red() {
        //通知:红点更新
        EventManager.dispatch(AppEvent.NOTIFY_UPDATE_RED_DOT, GConstants.RedDotConf.Friend, this.hasRedDot(GConstants.RedDotConf.Friend));
    }
    /** 判断好友红点 */
    has_reddot_friend() {//后续修改
        return false // app.model.friendInfo:isShowRedDot();
    }

    /**
     * 15.判断玩家-头像红点
     * @param item_id 物品ID 为空时判断整个聊天框
     * @returns 
     */
    has_reddot_userHead(item_id = null) {
    }

    /** 新手活动:更新 */
    update_reddot_newuserActivity() {
        let key = `${StoreKey.ACTIVITY_LAST_OPEN_TIME}_${this.__User.getUserMid()}`
        LocalStorage.set(key, Utils.time())
    }
    /**
     * 新手活动是否显示
     * 以下情况可见：
     *   1、今日注册的 还未打开过新手
     *   2、以前注册的 在本设备上还未打开过新手,即将打开
     */
    need_show_newuserActivity() {
        let ret = false;
        //今日注册的
        let isRegisterToday = this.__User.isRegisterToday()
        //上次打开的时间
        let key = `${StoreKey.ACTIVITY_LAST_OPEN_TIME}_${this.__User.getUserMid()}`
        let lastOpenTime = LocalStorage.get(key, null)
        if (isRegisterToday) {
            if (!lastOpenTime) {//今日注册的 还未打开过新手,即将打开
                ret = true;
            }
        } else {
            let isFirstLoginCurrow = this.__User.isFirstLoginCurrow()
            if (isFirstLoginCurrow == true && lastOpenTime == null) {//以前注册的 在本设备上还未打开过新手,即将打开
                ret = true;
            }
        }
        return ret;
    }
    /** 新手活动是否需要显示红点 */
    has_reddot_newuserActivity() {
        return false;
    }
    /** 更新个人信息中装扮红点*/
    update_dress_red(item_id, status = false) {
    }
    /** 更新活动中心-活动红点*/
    update_Activity_NormalRed(activityData, status = false) {
        let key = GConstants.RedDotConf.ActivityNormal;
        if (activityData != null) {
            let config_id = activityData["config_id"];
            //红点类型 0 无 1.每天一次 2.每次登陆 3.活动期间
            let red_dot_type = Utils.number_valueOf(activityData["red_dot_type"], 0);
            //开始时间
            let begin_time = Utils.number_valueOf(activityData["begin_time"], null);
            //结束时间
            let end_time = Utils.number_valueOf(activityData["end_time"], null);
            this._redConfLocalData[key] = Utils.table_verify(this._redConfLocalData[key]);
            let oldStatus = this._redConfLocalData[key][config_id];
            //是否转发消息
            let isForward = false;
            //今天的时间戳
            let currowTime = Utils.time();
            if (status == true) {
                if (oldStatus != null) {
                    if (red_dot_type == 3) {//3.活动期间
                        if (begin_time != null && end_time != null) {
                            if (currowTime >= begin_time && currowTime <= end_time) {
                                this._redConfLocalData[key][config_id] = true;
                                isForward = true;
                            } else {
                                this._redConfLocalData[key][config_id] = false;
                            }
                        } else {
                            this._redConfLocalData[key][config_id] = false;
                        }
                    } else if (red_dot_type == 2) {//2.每次登陆
                        if (oldStatus == false) {
                            this._redConfLocalData[key][config_id] = true;
                            isForward = true;
                        }
                    } else if (red_dot_type == 1) {//1.每天一次
                        if (oldStatus == false && this.check_reddot_by_name(config_id, key) == false) {
                            this._redConfLocalData[key][config_id] = true;
                            isForward = true;
                        }
                    }
                    else if (red_dot_type == 0) {//0无
                        this._redConfLocalData[key][config_id] = false;
                        isForward = true;
                    } else {
                        if (oldStatus == false) {//默认状态下 打开了就没有了
                            this._redConfLocalData[key][config_id] = false;
                            isForward = true;
                        }
                    }
                } else {
                    if (red_dot_type == 3) {
                        if (begin_time != null && end_time != null) {
                            if (currowTime >= begin_time && currowTime <= end_time) {
                                this._redConfLocalData[key][config_id] = true;
                                isForward = true;
                            } else {
                                this._redConfLocalData[key][config_id] = false;
                            }
                        } else {
                            this._redConfLocalData[key][config_id] = false;
                        }
                    } else if (red_dot_type == 2) {//2.每次登陆
                        this._redConfLocalData[key][config_id] = true;
                        isForward = true;
                    } else if (red_dot_type == 1) {//1.每天一次
                        if (this.check_reddot_by_name(config_id, key) == false) {
                            this._redConfLocalData[key][config_id] = true;
                            isForward = true;
                        }
                    } else if (red_dot_type == 0) {// 0 无
                        if (this.check_reddot_by_name(config_id, key) == false) {
                            this._redConfLocalData[key][config_id] = false;
                            isForward = true;
                        }
                    } else {
                        this._redConfLocalData[key][config_id] = true;
                    }
                }
            } else if (status == false) {
                if (oldStatus != null && oldStatus != status) {
                    isForward = true;
                }
                if (red_dot_type == 3) {//3.活动期间
                    if (begin_time != null && end_time != null) {
                        if (currowTime >= begin_time && currowTime <= end_time) {
                            this._redConfLocalData[key][config_id] = true;
                            isForward = true;
                        } else {
                            this._redConfLocalData[key][config_id] = false;
                        }
                    } else {
                        this._redConfLocalData[key][config_id] = false;
                    }
                } else if (red_dot_type == 1) {//1.每天一次
                    this.update_reddot_by_name(config_id, key);
                    this._redConfLocalData[key][config_id] = false;
                } else {
                    this._redConfLocalData[key][config_id] = false;
                }

            }
            this.updateLocalData();
            if (isForward == true) {
                //通知:红点更新
                EventManager.dispatch(AppEvent.NOTIFY_UPDATE_RED_DOT, key, this.hasRedDot(key, config_id));
            }
        } else {
            this._redConfLocalData[key] = {};
            this.updateLocalData();
            //通知:红点更新
            EventManager.dispatch(AppEvent.NOTIFY_UPDATE_RED_DOT, key, this.hasRedDot(key, null));
        }
    }
    /** 判断活动中心活动红点 */
    has_reddot_activityNormal(config_id = null) {
        let type = GConstants.RedDotConf.ActivityNormal;
        if (!this._redConfLocalData[type]) {
            return false;
        }

        if (config_id != null) {
            return this._redConfLocalData[type][config_id] == true;
        }
        let count = 0;
        for (let key in this._redConfLocalData[type]) {
            if (Object.prototype.hasOwnProperty.call(this._redConfLocalData[type], key)) {
                let status = this._redConfLocalData[type][key];
                if (status == true) {
                    count = count + 1;
                }
            }
        }
        return count > 0;
    }
    /** 更新活动中心-公告红点*/
    update_Activity_NoticeRed(activityData, status = false) {

        let key = GConstants.RedDotConf.ActivityNotice;
        if (activityData != null) {
            let config_id = activityData["config_id"];
            //红点类型  0,无 1.每天一次 2.每次登陆 3.活动期间
            let red_dot_type = Utils.number_valueOf(activityData["red_dot_type"], 0);
            //开始时间
            let begin_time = Utils.number_valueOf(activityData["begin_time"], null);
            //结束时间
            let end_time = Utils.number_valueOf(activityData["end_time"], null);
            this._redConfLocalData[key] = Utils.table_verify(this._redConfLocalData[key]);
            let oldStatus = this._redConfLocalData[key][config_id];
            //是否转发消息
            let isForward = false;
            //今天的时间戳
            let currowTime = Utils.time();
            if (status == true) {
                if (oldStatus != null) {
                    if (red_dot_type == 3) {//3.活动期间
                        if (begin_time != null && end_time != null) {
                            if (currowTime >= begin_time && currowTime <= end_time) {
                                this._redConfLocalData[key][config_id] = true;
                                isForward = true;
                            } else {
                                this._redConfLocalData[key][config_id] = false;
                            }
                        } else {
                            this._redConfLocalData[key][config_id] = false;
                        }
                    } else if (red_dot_type == 2) {//2.每次登陆
                        if (oldStatus == false) {
                            this._redConfLocalData[key][config_id] = true;
                            isForward = true;
                        }
                    } else if (red_dot_type == 1) {//1.每天一次
                        if (oldStatus == false && this.check_reddot_by_name(config_id, key) == false) {
                            this._redConfLocalData[key][config_id] = true;

                            isForward = true;
                        }
                    } else if (red_dot_type == 0) {//0无
                        this._redConfLocalData[key][config_id] = false;
                        isForward = true;
                    } else {
                        if (oldStatus == false) {//默认状态下 打开了就没有了
                            this._redConfLocalData[key][config_id] = false;
                            isForward = true;
                        }
                    }

                } else {
                    if (red_dot_type == 3) {
                        if (begin_time != null && end_time != null) {
                            if (currowTime >= begin_time && currowTime <= end_time) {
                                this._redConfLocalData[key][config_id] = true;
                                isForward = true;
                            } else {
                                this._redConfLocalData[key][config_id] = false;
                            }
                        } else {
                            this._redConfLocalData[key][config_id] = false;
                        }
                    } else if (red_dot_type == 2) {//2.每次登陆
                        this._redConfLocalData[key][config_id] = true;
                        isForward = true;
                    } else if (red_dot_type == 1) {//1.每天一次
                        if (this.check_reddot_by_name(config_id, key) == false) {
                            this._redConfLocalData[key][config_id] = true;
                            isForward = true;
                        }
                    } else if (red_dot_type == 0) {//0无
                        this._redConfLocalData[key][config_id] = false;
                        isForward = true;
                    } else {
                        this._redConfLocalData[key][config_id] = true;
                    }
                }
            } else if (status == false) {
                if (oldStatus != null && oldStatus != status) {
                    isForward = true;
                }
                if (red_dot_type == 3) {//3.活动期间
                    if (begin_time != null && end_time != null) {
                        if (currowTime >= begin_time && currowTime <= end_time) {
                            this._redConfLocalData[key][config_id] = true;
                            isForward = true;
                        } else {
                            this._redConfLocalData[key][config_id] = false;
                        }
                    } else {
                        this._redConfLocalData[key][config_id] = false;
                    }
                } else if (red_dot_type == 1) {//1.每天一次
                    this.update_reddot_by_name(config_id, key);
                    this._redConfLocalData[key][config_id] = false;
                } else {
                    this._redConfLocalData[key][config_id] = false;
                }
            }
            this.updateLocalData();
            if (isForward == true) {
                //通知:红点更新
                EventManager.dispatch(AppEvent.NOTIFY_UPDATE_RED_DOT, key, this.hasRedDot(key, config_id));
            }
        } else {
            this._redConfLocalData[key] = {};
            this.updateLocalData();
            //通知:红点更新
            EventManager.dispatch(AppEvent.NOTIFY_UPDATE_RED_DOT, key, this.hasRedDot(key, null));
        }
    }
    /** 判断活动中心公告红点 */
    has_reddot_activityNotice(config_id = null) {
        let type = GConstants.RedDotConf.ActivityNotice;
        if (!this._redConfLocalData[type]) {
            return false;
        }
        if (config_id != null) {
            return this._redConfLocalData[type][config_id] == true;
        }
        let count = 0;
        for (let key in this._redConfLocalData[type]) {
            if (Object.prototype.hasOwnProperty.call(this._redConfLocalData[type], key)) {
                let status = this._redConfLocalData[type][key];
                if (status == true) {
                    count = count + 1;
                }
            }
        }
        return count > 0;
    }
    /** 判断今天是否打开过某某活动或礼包，true：已经打开过；false：未打开过 */
    private check_reddot_by_name(name, key): boolean {
        let realKey = String(key) + String(name);
        return this.__User.getTodayLocalRecord(realKey, false)
    }
    /** 更新已经打开的界面红点 */
    private update_reddot_by_name(name, key) {
        if (key == null) {
            return;
        }
        let realKey = String(key) + String(name);
        let res = this.__User.setTodayLocalRecord(realKey, true);
        if (res) {
            let param = this.hasRedDot(key, name);
            //通知:红点更新
            EventManager.dispatch(AppEvent.NOTIFY_UPDATE_RED_DOT, key, param);
        }
        return
    }



    /** 1.礼包之首充 更新数据*/
    update_gift_firstpay(data) {
        if (data) {
            this._redConfData[GConstants.RedDotConf.FirstPay] = data;
            //通知:红点更新
            EventManager.dispatch(AppEvent.NOTIFY_UPDATE_RED_DOT, GConstants.RedDotConf.FirstPay, this.hasRedDot(GConstants.RedDotConf.FirstPay));
        }
    }
    /**
     * 首充礼包入口是否显示
     * @returns 
     */
    need_show_gift_firstpay() {
        if (Utils.table_isEmpty(this._redConfData[GConstants.RedDotConf.FirstPay])) {
            return false;
        }
        return true;
    }
    /** 判断首充礼包是否显示红点 */
    has_reddot_firstPay() {
        let flag = this.check_reddot_by_name('gift_firstpay_red_dot', GConstants.RedDotConf.FirstPay);
        return flag != true;
    }
    /** 首充通知更新红点 */
    update_reddot_gift_firstpay() {
        this.update_reddot_by_name("gift_firstpay_red_dot", GConstants.RedDotConf.FirstPay);
    }



    /** 付费礼包更新数据*/
    update_gift_holiday(data) {
        if (data) {
            this._redConfData[GConstants.RedDotConf.Holiday] = data;
            //通知:红点更新
            EventManager.dispatch(AppEvent.NOTIFY_UPDATE_RED_DOT, GConstants.RedDotConf.Holiday, this.hasRedDot(GConstants.RedDotConf.Holiday));
        }
    }

    /**
      * 付费礼包入口是否可见 
      * @returns 
      */
    need_show_holiday() {
        if (Platform.isCanPay() == false) {
            return false;
        }
        let data = this._redConfData[GConstants.RedDotConf.Holiday];
        if (data) {
            if (data["sdate"] && data["edate"]) {
                let currowTime = Utils.time();
                if (currowTime >= data["sdate"] && currowTime < data["edate"]) {
                    return true
                }
            }
        }
        return false;
    }

    /** 判断特价礼包是否显示红点 */
    has_reddot_holiday() {
        let flag = this.check_reddot_by_name('gift_holiday_red_dot', GConstants.RedDotConf.Holiday);
        return flag != true;
    }

    /** 特价礼包通知更新红点 */
    update_reddot_gift_holiday() {
        this.update_reddot_by_name("gift_holiday_red_dot", GConstants.RedDotConf.Holiday);
    }




}
