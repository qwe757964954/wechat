/**
 * Name = BankrupData
 * URL = db://assets/cache/BankrupData.ts
 * Time = Fri Jun 17 2022 15:37:14 GMT+0800 (中国标准时间)
 * Author = xueya
 * 破产相关数据
 */

import { AppEvent } from "../config/AppEvent";
import { GConstants } from "../config/GameConstant";
import { EventManager } from "../framework/manager/EventManager";
import { Utils } from "../framework/Utils";
import { BaseCache } from "../framework/vc/BaseCache";
import { User } from "./User";

export class BankrupData extends BaseCache {
    /** 用户类 */
    private __User: User = null;

    //破产数据配置
    _bankruptConf = {};
    //破产下限
    _lowestMoney = 0;
    //第几次破产
    _curCount = 0;
    //当前离领取破产补助的剩余时间
    _curleftTime = null;
    //vip等待的真实时间
    _vipActualTime = 0;
    //可领取的补助
    _curBankruptReward = 0;
    //当前是否可以免CD 0:否，1：可以
    _curCanCutCD = 0;
    //破产文案
    _bankupToast = "";

    //破产数据更新时间
    _lastUpdateTimeBankUp = 0;
    //(房间里面)是否关闭破产时弹出充值界面
    _isHideBankruptPayInRoom: boolean = true;

    //破产反馈数据(包含小红点)
    _bankrupFeedbackData = null;
    //破产礼包数据
    _newBankruptGiftData = null;
    //实例化
    constructor(superClass) {
        super("BankrupData");
        this.__User = superClass;
    };

    /** set 当前第几次破产 */
    set curBankruptCount(num: number) {
        this._curCount = num;
    }
    /** get 当前第几次破产 */
    get curBankruptCount() {
        return this._curCount;
    }
    /** set 当前离领取破产补助的剩余时间 */
    set curLeftTime(num: number) {
        this._curleftTime = num;
    }
    /** 更新新破产礼包数据 */
    updateNewBankUpGiftConf(body) {
        this._newBankruptGiftData = body;

    }

    /** 获取破产礼包数据  */
    getNewBankUpGiftConf() {
        return this._newBankruptGiftData;
    }

    /** get 当前离领取破产补助的剩余时间 */
    get curLeftTime(): number {
        if (this._curleftTime == null) {
            return 30 * 60;
        }
        return this._curleftTime;
    }
    /** set vip等待的真实时间 */
    set vipActualTime(num: number) {
        this._vipActualTime = num;
    }
    /** get vip等待的真实时间 */
    get vipActualTime() {
        return this._vipActualTime
    }
    /** set 可领取的补助 */
    set curBankruptReward(num: number) {
        this._curBankruptReward = num;
    }
    /** get 可领取的补助 */
    get curBankruptReward() {
        return this._curBankruptReward;
    }

    /** set  */
    set curCanCutCD(num: number) {
        this._curCanCutCD = num;
    }
    /** get  */
    get curCanCutCD() {
        return this._curCanCutCD;
    }
    /** set 破产文案 */
    set bankToast(txt: string) {
        this._bankupToast = txt || "";
    }
    /** get 破产文案 */
    get bankToast() {
        return this._bankupToast;
    }


    //更新上次更新的时间
    updateLastTimeBankUpCount() {
        this._lastUpdateTimeBankUp = Utils.time();
    }
    /**
     * 是否可以更新破产配置
     * @returns boolea
     */
    isCanCheckUpdateCount(): boolean {
        let time = Utils.time();
        if ((time - this._lastUpdateTimeBankUp) < 8) {
            return false;
        }
        return true
    }

    /**
     * 更新破产配置
     * @param body 
     * @returns 
     */
    updateBankruptConfig(body) {
        if (!body) {
            return;
        }
        let _body = {
            "curBankruptTime": 0, //当前破产次数
            "lowestMoney": 0,      //破产下限
            "intervals": [],      //每次领取破产时间间隔
        }
        this._bankruptConf = this.mergeArrayDefault(_body, body);
        this._bankruptConf["intervals"] = body["intervals"];
        this._lowestMoney = this._bankruptConf["lowestMoney"];
        this.print("更新破产配置===>", _body, "当前破产下限：", this._lowestMoney, this._bankruptConf)
    }
    /**
     * 设置破产信息
     * @param body 
     */
    setCurBankruptInfo(body) {
        let _info = {
            "curCount": 0,      //第几次破产
            "leftTime": 0,      //当前剩余时间
            "vipExpires": 0,    //vip过期时间
            "vipActualTime": 0, //vip等待的真实时间
            "get_money": 0,     //可领取的补助
            "shard_cd_flag": 0, //vip等待的真实时间
        };
        let __info = this.mergeArrayDefault(_info, body);
        this._bankruptConf = Utils.mergeObject(this._bankruptConf, __info)
        let info = this._bankruptConf;

        this.curBankruptCount = info["curCount"];
        this.curLeftTime = info["leftTime"];
        this.vipActualTime = info["vipActualTime"];
        this.curBankruptReward = info["get_money"];
        this.curCanCutCD = info["shard_cd_flag"];

    }
    /**
     * 获取破产下限
     * @returns number
     */
    getBankruptLowestMoney(): number {
        if (Utils.table_isEmpty(this._bankruptConf)) {
            //发送请求事件
            EventManager.dispatch(AppEvent.NET_REQ_BANKRUPT_CONFIG);
        }
        return this._lowestMoney;
    }

    /**
     * 获取破产等待时间的配置
     * @returns 
     */
    getBankruptTimesInterval() {
        if (Utils.table_isEmpty(this._bankruptConf)) {
            EventManager.dispatch(AppEvent.NET_REQ_BANKRUPT_CONFIG);
        }
        let intervals = Utils.nullToDefault(this._bankruptConf["intervals"], []);
        return intervals;
    }


    /**
     * 本次破产需等待的总时间
     * @returns 
     */
    getCurTotalTime() {
        let temp = this.curBankruptCount;
        return this.getTotalTimeByCount(temp);
    }

    /**
     * 第n次破产需等待的总时间（秒）
     * @param count 
     * @returns number（秒）
     */
    getTotalTimeByCount(count: number): number {
        count = Utils.number_valueOf(count, 1);
        let intervals = this.getBankruptTimesInterval();
        let temp = intervals.length;

        count = (count <= 1 ? 1 : count);
        count = (count >= temp ? temp : count);

        let time = intervals[count];
        time = Utils.number_valueOf(time, 30);
        let totalTime = time * 60;
        return totalTime;
    }

    /**
     * 当前是否还有破产补助可以领
     * @returns boolean
     */
    isBankruptRewardRemain(): boolean {
        let curCount = this.curBankruptCount;
        let intervals = this.getBankruptTimesInterval().length;
        //大于0加1的原因是避免新用户进去的时候弹破产提示，以及第三次破产能够正常领取
        if (intervals > 0) {
            intervals = intervals + 1;
        }

        return curCount < intervals;
    }

    /** 
     * 自己的破产状态 0:没有破产；1：真破产；-1：假破产
     * @returns 详见 UserBankUpState
     */
    getBankruptStatus(): number {
        if (this.__User.isLoginSuccesed() == false) {
            return GConstants.UserBankUpState.None;
        }
        let totalMoney = this.__User.getUserSilver();//总资产
        let curMoney = this.__User.getUserGameSilver(); // 现金
        let lowestMoney = this.getBankruptLowestMoney(); //破产下限
        if (curMoney >= lowestMoney) {
            return GConstants.UserBankUpState.None;
        } else {
            if (totalMoney >= lowestMoney) {
                return GConstants.UserBankUpState.Fake;
            } else {
                return GConstants.UserBankUpState.Real;
            }
        }
    }

    /**
     * 根据金币检查是否破产
     * @param money 
     * @returns boolean
     */
    checkIsBankrupt(money): boolean {
        money = Utils.number_valueOf(money);
        let lowestMoney = Utils.number_valueOf(this.getBankruptLowestMoney());
        this.print("根据金币检查是否破产 checkIsBankrupt===>", `我的金币：${money} 破产下限: ${lowestMoney}`)
        if (money <= 0) {
            return true;
        }
        if (money < lowestMoney) {
            return true;
        }
        return false;
    }


    /**
     * 检查用户是否破产了
     * @param isCheckSafebox 是否检查总资产 默认不检查
     * @returns boolean
     */
    isMineBankrupt(isCheckSafebox: boolean = false): boolean {
        let money = this.__User.getUserGameSilver(); // 现金
        if (isCheckSafebox) {
            return this.checkIsBankrupt(money) && this.getBankruptStatus() == GConstants.UserBankUpState.Real;
        } else {
            return this.checkIsBankrupt(money)
        }
    }
    /**
     * (房间里面)是否破产时弹出充值界面 0:不弹 1:弹
     * @param state 
     */
    setBankruptPaySceneSatus(state: number) {
        this._isHideBankruptPayInRoom = (state == 0);
    }
    /**
     * 是否允许弹出充值界面
     * @returns boolean
     */
    isShowBankruptPayInRoom(): boolean {
        return !this._isHideBankruptPayInRoom;
    }

    /** 更新破产反馈数据  */
    updateBankUpFeedbackData(body) {
        this._bankrupFeedbackData = body;
    }
    /** 获取破产反馈数据  */
    getBankUpFeedbackData() {
        return this._bankrupFeedbackData;
    }



}

