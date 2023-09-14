System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, AppEvent, GConstants, EventManager, Utils, BaseCache, BankrupData, _crd;

  function _reportPossibleCrUseOfAppEvent(extras) {
    _reporterNs.report("AppEvent", "../config/AppEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGConstants(extras) {
    _reporterNs.report("GConstants", "../config/GameConstant", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventManager(extras) {
    _reporterNs.report("EventManager", "../framework/manager/EventManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUtils(extras) {
    _reporterNs.report("Utils", "../framework/Utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseCache(extras) {
    _reporterNs.report("BaseCache", "../framework/vc/BaseCache", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUser(extras) {
    _reporterNs.report("User", "./User", _context.meta, extras);
  }

  _export("BankrupData", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      AppEvent = _unresolved_2.AppEvent;
    }, function (_unresolved_3) {
      GConstants = _unresolved_3.GConstants;
    }, function (_unresolved_4) {
      EventManager = _unresolved_4.EventManager;
    }, function (_unresolved_5) {
      Utils = _unresolved_5.Utils;
    }, function (_unresolved_6) {
      BaseCache = _unresolved_6.BaseCache;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "09cdeHx6FtCkp7sFLsu9Hgy", "BankrupData", undefined);

      _export("BankrupData", BankrupData = class BankrupData extends (_crd && BaseCache === void 0 ? (_reportPossibleCrUseOfBaseCache({
        error: Error()
      }), BaseCache) : BaseCache) {
        /** 用户类 */
        //破产数据配置
        //破产下限
        //第几次破产
        //当前离领取破产补助的剩余时间
        //vip等待的真实时间
        //可领取的补助
        //当前是否可以免CD 0:否，1：可以
        //破产文案
        //破产数据更新时间
        //(房间里面)是否关闭破产时弹出充值界面
        //破产反馈数据(包含小红点)
        //破产礼包数据
        //实例化
        constructor(superClass) {
          super("BankrupData");
          this.__User = null;
          this._bankruptConf = {};
          this._lowestMoney = 0;
          this._curCount = 0;
          this._curleftTime = null;
          this._vipActualTime = 0;
          this._curBankruptReward = 0;
          this._curCanCutCD = 0;
          this._bankupToast = "";
          this._lastUpdateTimeBankUp = 0;
          this._isHideBankruptPayInRoom = true;
          this._bankrupFeedbackData = null;
          this._newBankruptGiftData = null;
          this.__User = superClass;
        }

        /** set 当前第几次破产 */
        set curBankruptCount(num) {
          this._curCount = num;
        }
        /** get 当前第几次破产 */


        get curBankruptCount() {
          return this._curCount;
        }
        /** set 当前离领取破产补助的剩余时间 */


        set curLeftTime(num) {
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


        get curLeftTime() {
          if (this._curleftTime == null) {
            return 30 * 60;
          }

          return this._curleftTime;
        }
        /** set vip等待的真实时间 */


        set vipActualTime(num) {
          this._vipActualTime = num;
        }
        /** get vip等待的真实时间 */


        get vipActualTime() {
          return this._vipActualTime;
        }
        /** set 可领取的补助 */


        set curBankruptReward(num) {
          this._curBankruptReward = num;
        }
        /** get 可领取的补助 */


        get curBankruptReward() {
          return this._curBankruptReward;
        }
        /** set  */


        set curCanCutCD(num) {
          this._curCanCutCD = num;
        }
        /** get  */


        get curCanCutCD() {
          return this._curCanCutCD;
        }
        /** set 破产文案 */


        set bankToast(txt) {
          this._bankupToast = txt || "";
        }
        /** get 破产文案 */


        get bankToast() {
          return this._bankupToast;
        } //更新上次更新的时间


        updateLastTimeBankUpCount() {
          this._lastUpdateTimeBankUp = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).time();
        }
        /**
         * 是否可以更新破产配置
         * @returns boolea
         */


        isCanCheckUpdateCount() {
          let time = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).time();

          if (time - this._lastUpdateTimeBankUp < 8) {
            return false;
          }

          return true;
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
            "curBankruptTime": 0,
            //当前破产次数
            "lowestMoney": 0,
            //破产下限
            "intervals": [] //每次领取破产时间间隔

          };
          this._bankruptConf = this.mergeArrayDefault(_body, body);
          this._bankruptConf["intervals"] = body["intervals"];
          this._lowestMoney = this._bankruptConf["lowestMoney"];
          this.print("更新破产配置===>", _body, "当前破产下限：", this._lowestMoney, this._bankruptConf);
        }
        /**
         * 设置破产信息
         * @param body 
         */


        setCurBankruptInfo(body) {
          let _info = {
            "curCount": 0,
            //第几次破产
            "leftTime": 0,
            //当前剩余时间
            "vipExpires": 0,
            //vip过期时间
            "vipActualTime": 0,
            //vip等待的真实时间
            "get_money": 0,
            //可领取的补助
            "shard_cd_flag": 0 //vip等待的真实时间

          };

          let __info = this.mergeArrayDefault(_info, body);

          this._bankruptConf = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).mergeObject(this._bankruptConf, __info);
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


        getBankruptLowestMoney() {
          if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).table_isEmpty(this._bankruptConf)) {
            //发送请求事件
            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
              error: Error()
            }), AppEvent) : AppEvent).NET_REQ_BANKRUPT_CONFIG);
          }

          return this._lowestMoney;
        }
        /**
         * 获取破产等待时间的配置
         * @returns 
         */


        getBankruptTimesInterval() {
          if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).table_isEmpty(this._bankruptConf)) {
            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
              error: Error()
            }), AppEvent) : AppEvent).NET_REQ_BANKRUPT_CONFIG);
          }

          let intervals = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).nullToDefault(this._bankruptConf["intervals"], []);
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


        getTotalTimeByCount(count) {
          count = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).number_valueOf(count, 1);
          let intervals = this.getBankruptTimesInterval();
          let temp = intervals.length;
          count = count <= 1 ? 1 : count;
          count = count >= temp ? temp : count;
          let time = intervals[count];
          time = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).number_valueOf(time, 30);
          let totalTime = time * 60;
          return totalTime;
        }
        /**
         * 当前是否还有破产补助可以领
         * @returns boolean
         */


        isBankruptRewardRemain() {
          let curCount = this.curBankruptCount;
          let intervals = this.getBankruptTimesInterval().length; //大于0加1的原因是避免新用户进去的时候弹破产提示，以及第三次破产能够正常领取

          if (intervals > 0) {
            intervals = intervals + 1;
          }

          return curCount < intervals;
        }
        /** 
         * 自己的破产状态 0:没有破产；1：真破产；-1：假破产
         * @returns 详见 UserBankUpState
         */


        getBankruptStatus() {
          if (this.__User.isLoginSuccesed() == false) {
            return (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
              error: Error()
            }), GConstants) : GConstants).UserBankUpState.None;
          }

          let totalMoney = this.__User.getUserSilver(); //总资产


          let curMoney = this.__User.getUserGameSilver(); // 现金


          let lowestMoney = this.getBankruptLowestMoney(); //破产下限

          if (curMoney >= lowestMoney) {
            return (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
              error: Error()
            }), GConstants) : GConstants).UserBankUpState.None;
          } else {
            if (totalMoney >= lowestMoney) {
              return (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
                error: Error()
              }), GConstants) : GConstants).UserBankUpState.Fake;
            } else {
              return (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
                error: Error()
              }), GConstants) : GConstants).UserBankUpState.Real;
            }
          }
        }
        /**
         * 根据金币检查是否破产
         * @param money 
         * @returns boolean
         */


        checkIsBankrupt(money) {
          money = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).number_valueOf(money);
          let lowestMoney = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).number_valueOf(this.getBankruptLowestMoney());
          this.print("根据金币检查是否破产 checkIsBankrupt===>", `我的金币：${money} 破产下限: ${lowestMoney}`);

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


        isMineBankrupt(isCheckSafebox = false) {
          let money = this.__User.getUserGameSilver(); // 现金


          if (isCheckSafebox) {
            return this.checkIsBankrupt(money) && this.getBankruptStatus() == (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
              error: Error()
            }), GConstants) : GConstants).UserBankUpState.Real;
          } else {
            return this.checkIsBankrupt(money);
          }
        }
        /**
         * (房间里面)是否破产时弹出充值界面 0:不弹 1:弹
         * @param state 
         */


        setBankruptPaySceneSatus(state) {
          this._isHideBankruptPayInRoom = state == 0;
        }
        /**
         * 是否允许弹出充值界面
         * @returns boolean
         */


        isShowBankruptPayInRoom() {
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

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ff59ba65e92d7088561f4d2327bcf67845d469a5.js.map