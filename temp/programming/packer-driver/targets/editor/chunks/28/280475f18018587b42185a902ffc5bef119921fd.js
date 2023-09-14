System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, GConstants, Utils, BaseCache, Platform, Activity, _crd;

  function _reportPossibleCrUseOfGConstants(extras) {
    _reporterNs.report("GConstants", "../config/GameConstant", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUtils(extras) {
    _reporterNs.report("Utils", "../framework/Utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseCache(extras) {
    _reporterNs.report("BaseCache", "../framework/vc/BaseCache", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlatform(extras) {
    _reporterNs.report("Platform", "../platform/Platform", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUser(extras) {
    _reporterNs.report("User", "./User", _context.meta, extras);
  }

  _export("Activity", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      GConstants = _unresolved_2.GConstants;
    }, function (_unresolved_3) {
      Utils = _unresolved_3.Utils;
    }, function (_unresolved_4) {
      BaseCache = _unresolved_4.BaseCache;
    }, function (_unresolved_5) {
      Platform = _unresolved_5.Platform;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "fd0927p5UJKyazK8o429rIW", "Activity", undefined);

      _export("Activity", Activity = class Activity extends (_crd && BaseCache === void 0 ? (_reportPossibleCrUseOfBaseCache({
        error: Error()
      }), BaseCache) : BaseCache) {
        /** 用户类 */
        //新手福利活动
        //新手福利活动数据(main)
        //限时折扣
        //签到数据
        //签到活动数据
        //今日奖品
        //限时礼包数据
        //首充礼包数据
        //实例化
        constructor(superClass) {
          super("Activity");
          this.__User = null;
          this._newPlayerActivityConfig = null;
          this._newPlayerActivityMain = null;
          this._holidaysGiftPackage = null;
          this._signinData = null;
          this._continueAwardDay = null;
          this._signGiftData = null;
          this._signTodayGift = null;
          this._limitPackData = null;
          this._firstPayData = null;
          this.__User = superClass;
        }

        //更新新手福利活动配置
        updateNewPlayerActivityCfg(body) {
          let imgCFG = {
            ["helpBtn"]: "",
            // 帮助按钮
            ["closeBtn"]: "",
            // 关闭按钮
            ["oldBg"]: "",
            // 邀请页背景
            ["copyBtn"]: "",
            // 复制邀请码按钮
            ["shareBtn"]: "",
            // 分享按钮
            ["goFillBtn"]: "",
            // 去填码按钮
            ["newBg"]: "",
            // 新人页背景图
            ["getBtn"]: "",
            // 领奖按钮
            ["goShareBtn"]: "",
            // 去分享按钮
            ["itemBtn"]: "",
            // 奖励背景
            ["seletImg"]: "",
            // 触发时的奖励框上的闪光框
            ["bubble"]: "",
            // 气泡
            ["TipsViewBg"]: "",
            // 提示 规则页背景
            // 进度条
            ["progress1"]: "",
            // 第一个进度条未达到时的图片
            ["progress2"]: "",
            // 中间进度条未达到时的图片
            ["progress3"]: "",
            // 最后一个进度条未达到时的图片
            ["progress_acheive1"]: "",
            // 第一个进度条达到时的图片
            ["progress_acheive2"]: "",
            // 中间进度条达到时的图片
            ["progress_acheive3"]: "" // 最后一个进度条达到时的图片

          };
          body = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).table_verify(body);

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
            userType: body["userType"] // 2是新用户 1是老用户

          };
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
        } //获取新手福利活动配置的某一个值


        getNewPlayerActivityCfgBykey(key, del = null) {
          if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).isNull(key) || (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).isNull(this._newPlayerActivityConfig)) {
            return null;
          }

          return this._newPlayerActivityConfig[key] || del;
        } //更新新手活动(main)


        updateNewPlayerActivityMain(body) {
          this._newPlayerActivityMain = body;
        } //获取新手活动(main)


        getNewPlayerActivityMain() {
          return this._newPlayerActivityMain;
        } //更新限时折扣礼包


        updateHolidaysGiftPackage(body) {
          body = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).table_verify(body);

          if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).isNull(body["giftpack"]) || (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).isNull(body["sdate"]) || (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).isNull(body["edate"])) {
            return false;
          }

          body["sdate"] = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).number_valueOf(body["sdate"]);
          body["edate"] = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).number_valueOf(body["edate"]); //保存的key

          let keyArray = ["add_time", "appid", "basemap", "buyBtn", "edate", "edit_time", "firstIcon", "giftpack", //商品道具
          "id", "sdate", //开始时间
          "sedate", //结束时间
          "status"];
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


        checkHolidayPop() {
          if ((_crd && Platform === void 0 ? (_reportPossibleCrUseOfPlatform({
            error: Error()
          }), Platform) : Platform).isCanPay() == false) {
            return false;
          }

          if (this._holidaysGiftPackage) {
            if (this._holidaysGiftPackage["sdate"] && this._holidaysGiftPackage["edate"]) {
              let currowTime = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                error: Error()
              }), Utils) : Utils).time();

              if (currowTime < this._holidaysGiftPackage["sdate"] || currowTime > this._holidaysGiftPackage["edate"]) {
                return false;
              }
            }
          } //如果没有次数了


          let giftpack = this._holidaysGiftPackage['giftpack'];
          let flag = false; //获取剩余次数

          for (let value of giftpack) {
            let num = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).number_valueOf(value['num']);
            let goodsId = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).number_valueOf(value['gid']);

            if (goodsId <= 0) {
              continue;
            }

            let payData = this.__User.ShopInfo.getPriceByGoodsSceneId((_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
              error: Error()
            }), GConstants) : GConstants).GoodsListID.limitPack, goodsId);

            let maxNum = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).number_valueOf(payData['limitNum'], 0);
            let isLimit = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).number_valueOf(payData['limit_buy_way'], 0);

            if (isLimit == 0 || maxNum > num) {
              flag = true;
              break;
            }
          }

          return flag;
        }
        /** 更新签到数据(服务端下发) */


        updateSigninData(body) {
          body = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).table_verify(body);

          if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).isNull(body.today) || (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).isNull(body.signAward)) {
            return;
          }

          body.today = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).number_valueOf(body.today);

          for (let k in body.signAward) {
            body.signAward[k].today = body.today;
          }

          this._signinData = body;
          this.print("updateSigninData: ", body);

          this.__User.RedDot.update_signin(this._signinData);
        }
        /** 更新签到数据(成功之后) */


        updateSigninBySuccess(body) {
          body = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).table_verify(body);

          if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).isNull(this._signinData)) {
            return null;
          }

          let signinDataToday = null;
          this._signinData.todayStatus = 1;

          if (!(_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).table_isEmpty(this._signinData.signAward)) {
            let itemData = this._signinData.signAward[this._signinData.today - 1];

            if (!(_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).table_isEmpty(itemData)) {
              itemData.status = 3;
              signinDataToday = itemData;
            }
          }

          if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).isNotNull(body.ctDay) && body.ctDay > 0) {
            if (!(_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).table_isEmpty(this._signinData.continueAward)) {
              for (let index = 0; index < this._signinData.continueAward.length; index++) {
                let itemData = this._signinData.continueAward[index];

                if (!(_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                  error: Error()
                }), Utils) : Utils).table_isEmpty(itemData) && itemData.day == body.ctDay) {
                  itemData.status = 1;
                }
              }
            }
          }

          this.__User.RedDot.update_signin(this._signinData);

          return signinDataToday;
        }

        updateContinusAward(body, day) {
          let continueAwardToday = null;
          body = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).table_verify(body);

          if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).isNull(this._signinData)) {
            return continueAwardToday;
          }

          if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).isNotNull(day) && day > 0) {
            if (!(_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).table_isEmpty(this._signinData.continueAward)) {
              for (let index = 0; index < this._signinData.continueAward.length; index++) {
                let itemData = this._signinData.continueAward[index];

                if (!(_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                  error: Error()
                }), Utils) : Utils).table_isEmpty(itemData) && itemData.day == day) {
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


        checkHaveSignin() {
          return (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).isNotNull(this._signinData);
        }
        /** 今日是否打开签到 */


        checkTodayIsOpenSign() {
          return this.__User.getTodayLocalRecord("hasShowSignin", false);
        }
        /** 更新今日签到状态 */


        updateTodayOpenSign() {
          this.__User.setTodayLocalRecord("hasShowSignin", true);
        }

        setContinusAwardDay(value) {
          this._continueAwardDay = value;
        }

        getContinusAwardDay() {
          return this._continueAwardDay;
        }
        /** 更新特价礼包数据(服务端下发) */


        updateLimitPackData(body) {
          body = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).table_verify(body);

          if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).isNull(body.id) || (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).isNull(body.giftpack)) {
            return;
          }

          body.id = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).number_valueOf(body.id);
          this._limitPackData = body;
          this.print("limitPackData: ", body);
        }
        /** 是否有特价礼包数据 */


        checkHaveLimitPack() {
          return (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).isNotNull(this._limitPackData);
        }
        /** 获取特价礼包数据  */


        getLimitPackData() {
          return this._limitPackData;
        }
        /** 获取特价礼包数据  */


        getLimitPackIcon() {
          return this._limitPackData.firstIcon;
        }
        /** 设置首充礼包 */


        updateFirstPayPackage(body) {
          body = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).table_verify(body);

          if (!(_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).table_isEmpty(body)) {
            if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).isNull(body["giftpack"]) || (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).isNull(body["gid"]) || (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).isNull(body["price"])) {
              return false;
            }

            body["gid"] = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).number_valueOf(body["gid"]);
            body["price"] = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).number_valueOf(body["price"]); //保存的key

            let keyArray = ["gid", "price", "goodsBaseMap", "firstIcon", "giftpack", "button", "popNum", "original_price"];
            this._firstPayData = this.mergeArray(keyArray, body);
          } else {
            this._firstPayData = {};
          }

          this.__User.RedDot.update_gift_firstpay(this._firstPayData);
        }
        /** 获取首充礼包 */


        getFirstPayPackage() {
          return this._firstPayData;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=280475f18018587b42185a902ffc5bef119921fd.js.map