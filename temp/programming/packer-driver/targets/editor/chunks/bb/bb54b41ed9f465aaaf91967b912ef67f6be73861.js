System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, AppEvent, GConstants, StoreKey, Encrypt, LocalStorage, EventManager, Utils, BaseCache, Platform, RedDot, _crd;

  function _reportPossibleCrUseOfAppEvent(extras) {
    _reporterNs.report("AppEvent", "../config/AppEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGConstants(extras) {
    _reporterNs.report("GConstants", "../config/GameConstant", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStoreKey(extras) {
    _reporterNs.report("StoreKey", "../config/GameConstant", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEncrypt(extras) {
    _reporterNs.report("Encrypt", "../framework/crypto/Encrypto", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLocalStorage(extras) {
    _reporterNs.report("LocalStorage", "../framework/LocalStorage", _context.meta, extras);
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

  function _reportPossibleCrUseOfPlatform(extras) {
    _reporterNs.report("Platform", "../platform/Platform", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUser(extras) {
    _reporterNs.report("User", "./User", _context.meta, extras);
  }

  _export("RedDot", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      AppEvent = _unresolved_2.AppEvent;
    }, function (_unresolved_3) {
      GConstants = _unresolved_3.GConstants;
      StoreKey = _unresolved_3.StoreKey;
    }, function (_unresolved_4) {
      Encrypt = _unresolved_4.Encrypt;
    }, function (_unresolved_5) {
      LocalStorage = _unresolved_5.LocalStorage;
    }, function (_unresolved_6) {
      EventManager = _unresolved_6.EventManager;
    }, function (_unresolved_7) {
      Utils = _unresolved_7.Utils;
    }, function (_unresolved_8) {
      BaseCache = _unresolved_8.BaseCache;
    }, function (_unresolved_9) {
      Platform = _unresolved_9.Platform;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "cfbddiJsXRFYY+odiH5dUre", "RedDot", undefined);

      /**
       * Name = RedDot
       * URL = db://assets/cache/RedDot.ts
       * Time = Mon May 09 2022 14:43:04 GMT+0800 (中国标准时间)
       * Author = xueya
       * 红点
       */
      _export("RedDot", RedDot = class RedDot extends (_crd && BaseCache === void 0 ? (_reportPossibleCrUseOfBaseCache({
        error: Error()
      }), BaseCache) : BaseCache) {
        /** 用户类 */

        /** 数据(非本地存储) */

        /** 数据(支持本地存储) */

        /** 红点判断映射 */
        //实例化
        constructor(superClass) {
          super("RedDot");
          this.__User = null;
          this._redConfData = {};
          this._redConfLocalData = {};
          this._hasRedDotMapping = {};
          this.__User = superClass;
          this.initMapping();
        }

        /** 初始化检测映射 */
        initMapping() {
          this._hasRedDotMapping = {
            /** 七日签到 */
            [(_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
              error: Error()
            }), GConstants) : GConstants).RedDotConf.Sign]: (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).handler(this, this.has_reddot_signin),

            /** 邮件 */
            [(_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
              error: Error()
            }), GConstants) : GConstants).RedDotConf.Email]: (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).handler(this, this.has_reddot_mail),

            /** 商城 */
            [(_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
              error: Error()
            }), GConstants) : GConstants).RedDotConf.Shop]: (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).handler(this, this.has_reddot_shop),

            /** 好友 */
            [(_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
              error: Error()
            }), GConstants) : GConstants).RedDotConf.Friend]: (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).handler(this, this.has_reddot_friend),

            /** 活动中心-活动 */
            [(_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
              error: Error()
            }), GConstants) : GConstants).RedDotConf.ActivityNormal]: (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).handler(this, this.has_reddot_activityNormal),

            /** 活动中心-公告 */
            [(_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
              error: Error()
            }), GConstants) : GConstants).RedDotConf.ActivityNotice]: (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).handler(this, this.has_reddot_activityNotice),

            /** 装扮-头像 */
            [(_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
              error: Error()
            }), GConstants) : GConstants).RedDotConf.UserHead]: (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).handler(this, this.has_reddot_userHead),

            /** 新手活动 */
            [(_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
              error: Error()
            }), GConstants) : GConstants).RedDotConf.NewUserActivity]: (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).handler(this, this.has_reddot_newuserActivity),

            /** 首充礼包 */
            [(_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
              error: Error()
            }), GConstants) : GConstants).RedDotConf.FirstPay]: (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).handler(this, this.has_reddot_firstPay),

            /** 付费礼包 */
            [(_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
              error: Error()
            }), GConstants) : GConstants).RedDotConf.Holiday]: (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).handler(this, this.has_reddot_holiday)
          };
        }
        /** 加载本地数据 */


        reloadLocalData() {
          let key = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).string_format((_crd && StoreKey === void 0 ? (_reportPossibleCrUseOfStoreKey({
            error: Error()
          }), StoreKey) : StoreKey).USER_RED_RECORD, this.__User.getUserMid());
          let data = (_crd && LocalStorage === void 0 ? (_reportPossibleCrUseOfLocalStorage({
            error: Error()
          }), LocalStorage) : LocalStorage).get(key, null);

          if (data != null) {
            this._redConfLocalData = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).table_verify((_crd && Encrypt === void 0 ? (_reportPossibleCrUseOfEncrypt({
              error: Error()
            }), Encrypt) : Encrypt).JsonDecode(data));
          }
        }
        /** 保存本地数据 */


        updateLocalData() {
          let data = (_crd && Encrypt === void 0 ? (_reportPossibleCrUseOfEncrypt({
            error: Error()
          }), Encrypt) : Encrypt).JsonEncode(this._redConfLocalData);
          let key = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).string_format((_crd && StoreKey === void 0 ? (_reportPossibleCrUseOfStoreKey({
            error: Error()
          }), StoreKey) : StoreKey).USER_RED_RECORD, this.__User.getUserMid());
          (_crd && LocalStorage === void 0 ? (_reportPossibleCrUseOfLocalStorage({
            error: Error()
          }), LocalStorage) : LocalStorage).set(key, data);
        }
        /** 判断红点 */


        hasRedDot(key, param = null) {
          this.print("hasRedDot", key);

          if (key == null || this._hasRedDotMapping[key] == null) {
            return false;
          }

          this.print("hasRedDot", this._hasRedDotMapping[key](param));
          return this._hasRedDotMapping[key](param) || false;
        }
        /** 8.签到 */


        update_signin(data) {
          this._redConfData[(_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
            error: Error()
          }), GConstants) : GConstants).RedDotConf.Sign] = data; //通知:红点更新

          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NOTIFY_UPDATE_RED_DOT, (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
            error: Error()
          }), GConstants) : GConstants).RedDotConf.Sign, this.hasRedDot((_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
            error: Error()
          }), GConstants) : GConstants).RedDotConf.Sign));
        }
        /** 判断签到红点 */


        has_reddot_signin() {
          if (!this._redConfData[(_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
            error: Error()
          }), GConstants) : GConstants).RedDotConf.Sign]) {
            return false;
          }

          this.print("RedDot", this._redConfData[(_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
            error: Error()
          }), GConstants) : GConstants).RedDotConf.Sign]);

          if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).isNull(this._redConfData[(_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
            error: Error()
          }), GConstants) : GConstants).RedDotConf.Sign]["todayStatus"])) {
            return false;
          } else if (this._redConfData[(_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
            error: Error()
          }), GConstants) : GConstants).RedDotConf.Sign]["todayStatus"] == 0) {
            return true;
          }

          if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).isNull(this._redConfData[(_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
            error: Error()
          }), GConstants) : GConstants).RedDotConf.Sign]["continueAward"])) {
            return false;
          }

          let res = false;
          let data = this._redConfData[(_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
            error: Error()
          }), GConstants) : GConstants).RedDotConf.Sign]["signin_info"];

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
          console.log("通知更新"); //通知:红点更新

          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NOTIFY_UPDATE_RED_DOT, (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
            error: Error()
          }), GConstants) : GConstants).RedDotConf.Email, this.hasRedDot((_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
            error: Error()
          }), GConstants) : GConstants).RedDotConf.Email));
        }
        /** 判断邮件红点 */


        has_reddot_mail() {
          let data = this.__User.MailInfo.getDataByLocal();

          let flag = false;

          for (let key in data) {
            if (Object.prototype.hasOwnProperty.call(data, key) && flag == false) {
              let v = data[key];

              if (data[key]["status"] == (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
                error: Error()
              }), GConstants) : GConstants).MsgStatus.MSG_STATUS_FRESH) {
                flag = true;
              }
            }
          }

          return flag;
        }
        /** 邮件入口是否可见 */


        need_show_email() {
          return true;
        }
        /** 10.商城红点增加判断逻辑：只要商城内有可免费购买的商品，则一直显示红点*/


        update_shop_red() {
          //通知:红点更新
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NOTIFY_UPDATE_RED_DOT, (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
            error: Error()
          }), GConstants) : GConstants).RedDotConf.Shop, this.hasRedDot((_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
            error: Error()
          }), GConstants) : GConstants).RedDotConf.Shop));
        }
        /** 判断商城红点 */


        has_reddot_shop() {
          // 商城是否有免费商品 有的话展示红点
          return this.__User.ShopInfo.isExitFreeGoods();
        }
        /** 11.好友红点*/


        update_friend_red() {
          //通知:红点更新
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NOTIFY_UPDATE_RED_DOT, (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
            error: Error()
          }), GConstants) : GConstants).RedDotConf.Friend, this.hasRedDot((_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
            error: Error()
          }), GConstants) : GConstants).RedDotConf.Friend));
        }
        /** 判断好友红点 */


        has_reddot_friend() {
          //后续修改
          return false; // app.model.friendInfo:isShowRedDot();
        }
        /**
         * 15.判断玩家-头像红点
         * @param item_id 物品ID 为空时判断整个聊天框
         * @returns 
         */


        has_reddot_userHead(item_id = null) {// let type = GConstants.RedDotConf.UserHead;
          // if (!this._redConfLocalData[type]) {
          //     return false;
          // }
          // if (item_id != null) {
          //     return this._redConfLocalData[type][item_id] == true;
          // }
          // let count = 0;
          // for (let key in this._redConfLocalData[type]) {
          //     if (Object.prototype.hasOwnProperty.call(this._redConfLocalData[type], key)) {
          //         let status = this._redConfLocalData[type][key];
          //         if (status == true) {
          //             count = count + 1;
          //         }
          //     }
          // }
          // return count > 0;
        }
        /** 新手活动:更新 */


        update_reddot_newuserActivity() {
          let key = `${(_crd && StoreKey === void 0 ? (_reportPossibleCrUseOfStoreKey({
            error: Error()
          }), StoreKey) : StoreKey).ACTIVITY_LAST_OPEN_TIME}_${this.__User.getUserMid()}`;
          (_crd && LocalStorage === void 0 ? (_reportPossibleCrUseOfLocalStorage({
            error: Error()
          }), LocalStorage) : LocalStorage).set(key, (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).time());
        }
        /**
         * 新手活动是否显示
         * 以下情况可见：
         *   1、今日注册的 还未打开过新手
         *   2、以前注册的 在本设备上还未打开过新手,即将打开
         */


        need_show_newuserActivity() {
          let ret = false; //今日注册的

          let isRegisterToday = this.__User.isRegisterToday(); //上次打开的时间


          let key = `${(_crd && StoreKey === void 0 ? (_reportPossibleCrUseOfStoreKey({
            error: Error()
          }), StoreKey) : StoreKey).ACTIVITY_LAST_OPEN_TIME}_${this.__User.getUserMid()}`;
          let lastOpenTime = (_crd && LocalStorage === void 0 ? (_reportPossibleCrUseOfLocalStorage({
            error: Error()
          }), LocalStorage) : LocalStorage).get(key, null);

          if (isRegisterToday) {
            if (!lastOpenTime) {
              //今日注册的 还未打开过新手,即将打开
              ret = true;
            }
          } else {
            let isFirstLoginCurrow = this.__User.isFirstLoginCurrow();

            if (isFirstLoginCurrow == true && lastOpenTime == null) {
              //以前注册的 在本设备上还未打开过新手,即将打开
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


        update_dress_red(item_id, status = false) {// if (item_id != null) {
          //     let item_kind = this.__User.GoodsData.getGoodItemKindByID(item_id);
          //     let key = null;
          //     if (item_kind == GConstants.GoodsSubTypes.CHAT_FRAME) {
          //         key = GConstants.RedDotConf.DressChatFrame;
          //     } else if (item_kind == GConstants.GoodsSubTypes.CLOCK) {
          //         key = GConstants.RedDotConf.DressClock;
          //     } else if (item_kind == GConstants.GoodsSubTypes.AVATAR_FRAME) {
          //         key = GConstants.RedDotConf.DressHeadFrame;
          //     } else if (item_kind == GConstants.GoodsSubTypes.AVATAR) {
          //         key = GConstants.RedDotConf.UserHead;
          //     }
          //     if (key == null) {
          //         return;
          //     }
          //     this._redConfLocalData[key] = Utils.table_verify(this._redConfLocalData[key]);
          //     let oldStatus = this._redConfLocalData[key][item_id];
          //     this._redConfLocalData[key][item_id] = status;
          //     if (status == false) {
          //         delete this._redConfLocalData[key][item_id];
          //     }
          //     this.updateLocalData();
          //     if (oldStatus != null && oldStatus != status) {//可见
          //         //通知:红点更新
          //         EventManager.dispatch(AppEvent.NOTIFY_UPDATE_RED_DOT, key, this.hasRedDot(key, item_id));
          //         console.log("装扮信息红点有更新：", item_id, key, status);
          //     }
          // }
        }
        /** 更新活动中心-活动红点*/


        update_Activity_NormalRed(activityData, status = false) {
          let key = (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
            error: Error()
          }), GConstants) : GConstants).RedDotConf.ActivityNormal;

          if (activityData != null) {
            let config_id = activityData["config_id"]; //红点类型 0,无 1.每天一次 2.每次登陆 3.活动期间

            let red_dot_type = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).number_valueOf(activityData["red_dot_type"], 0); //开始时间

            let begin_time = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).number_valueOf(activityData["begin_time"], null); //结束时间

            let end_time = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).number_valueOf(activityData["end_time"], null);
            this._redConfLocalData[key] = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).table_verify(this._redConfLocalData[key]);
            let oldStatus = this._redConfLocalData[key][config_id]; //是否转发消息

            let isForward = false; //今天的时间戳

            let currowTime = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).time();

            if (status == true) {
              if (oldStatus != null) {
                if (red_dot_type == 3) {
                  //3.活动期间
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
                } else if (red_dot_type == 2) {
                  //2.每次登陆
                  if (oldStatus == false) {
                    this._redConfLocalData[key][config_id] = true;
                    isForward = true;
                  }
                } else if (red_dot_type == 1) {
                  //1.每天一次
                  if (oldStatus == false && this.check_reddot_by_name(config_id, key) == false) {
                    this._redConfLocalData[key][config_id] = true;
                    isForward = true;
                  }
                } else {
                  if (oldStatus == false) {
                    //默认状态下 打开了就没有了
                    this._redConfLocalData[key][config_id] = false;
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
                } else if (red_dot_type == 2) {
                  //2.每次登陆
                  this._redConfLocalData[key][config_id] = true;
                  isForward = true;
                } else if (red_dot_type == 1) {
                  //1.每天一次
                  if (this.check_reddot_by_name(config_id, key) == false) {
                    this._redConfLocalData[key][config_id] = true;
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

              if (red_dot_type == 3) {
                //3.活动期间
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
              } else if (red_dot_type == 1) {
                //1.每天一次
                this.update_reddot_by_name(config_id, key);
                this._redConfLocalData[key][config_id] = false;
              } else {
                this._redConfLocalData[key][config_id] = false;
              }
            }

            this.updateLocalData();

            if (isForward == true) {
              //通知:红点更新
              (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
                error: Error()
              }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
                error: Error()
              }), AppEvent) : AppEvent).NOTIFY_UPDATE_RED_DOT, key, this.hasRedDot(key, config_id));
            }
          } else {
            this._redConfLocalData[key] = {};
            this.updateLocalData(); //通知:红点更新

            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
              error: Error()
            }), AppEvent) : AppEvent).NOTIFY_UPDATE_RED_DOT, key, this.hasRedDot(key, null));
          }
        }
        /** 判断活动中心活动红点 */


        has_reddot_activityNormal(config_id = null) {
          let type = (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
            error: Error()
          }), GConstants) : GConstants).RedDotConf.ActivityNormal;

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
          let key = (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
            error: Error()
          }), GConstants) : GConstants).RedDotConf.ActivityNotice;

          if (activityData != null) {
            let config_id = activityData["config_id"]; //红点类型 1.每天一次 2.每次登陆 3.活动期间

            let red_dot_type = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).number_valueOf(activityData["red_dot_type"], 0); //开始时间

            let begin_time = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).number_valueOf(activityData["begin_time"], null); //结束时间

            let end_time = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).number_valueOf(activityData["end_time"], null);
            this._redConfLocalData[key] = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).table_verify(this._redConfLocalData[key]);
            let oldStatus = this._redConfLocalData[key][config_id]; //是否转发消息

            let isForward = false; //今天的时间戳

            let currowTime = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).time();

            if (status == true) {
              if (oldStatus != null) {
                if (red_dot_type == 3) {
                  //3.活动期间
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
                } else if (red_dot_type == 2) {
                  //2.每次登陆
                  if (oldStatus == false) {
                    this._redConfLocalData[key][config_id] = true;
                    isForward = true;
                  }
                } else if (red_dot_type == 1) {
                  //1.每天一次
                  if (oldStatus == false && this.check_reddot_by_name(config_id, key) == false) {
                    this._redConfLocalData[key][config_id] = true;
                    isForward = true;
                  }
                } else {
                  if (oldStatus == false) {
                    //默认状态下 打开了就没有了
                    this._redConfLocalData[key][config_id] = false;
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
                } else if (red_dot_type == 2) {
                  //2.每次登陆
                  this._redConfLocalData[key][config_id] = true;
                  isForward = true;
                } else if (red_dot_type == 1) {
                  //1.每天一次
                  if (this.check_reddot_by_name(config_id, key) == false) {
                    this._redConfLocalData[key][config_id] = true;
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

              if (red_dot_type == 3) {
                //3.活动期间
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
              } else if (red_dot_type == 1) {
                //1.每天一次
                this.update_reddot_by_name(config_id, key);
                this._redConfLocalData[key][config_id] = false;
              } else {
                this._redConfLocalData[key][config_id] = false;
              }
            }

            this.updateLocalData();

            if (isForward == true) {
              //通知:红点更新
              (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
                error: Error()
              }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
                error: Error()
              }), AppEvent) : AppEvent).NOTIFY_UPDATE_RED_DOT, key, this.hasRedDot(key, config_id));
            }
          } else {
            this._redConfLocalData[key] = {};
            this.updateLocalData(); //通知:红点更新

            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
              error: Error()
            }), AppEvent) : AppEvent).NOTIFY_UPDATE_RED_DOT, key, this.hasRedDot(key, null));
          }
        }
        /** 判断活动中心公告红点 */


        has_reddot_activityNotice(config_id = null) {
          let type = (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
            error: Error()
          }), GConstants) : GConstants).RedDotConf.ActivityNotice;

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


        check_reddot_by_name(name, key) {
          let realKey = String(key) + String(name);
          return this.__User.getTodayLocalRecord(realKey, false);
        }
        /** 更新已经打开的界面红点 */


        update_reddot_by_name(name, key) {
          if (key == null) {
            return;
          }

          let realKey = String(key) + String(name);

          let res = this.__User.setTodayLocalRecord(realKey, true);

          if (res) {
            let param = this.hasRedDot(key, name); //通知:红点更新

            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
              error: Error()
            }), AppEvent) : AppEvent).NOTIFY_UPDATE_RED_DOT, key, param);
          }

          return;
        }
        /** 1.礼包之首充 更新数据*/


        update_gift_firstpay(data) {
          if (data) {
            this._redConfData[(_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
              error: Error()
            }), GConstants) : GConstants).RedDotConf.FirstPay] = data; //通知:红点更新

            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
              error: Error()
            }), AppEvent) : AppEvent).NOTIFY_UPDATE_RED_DOT, (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
              error: Error()
            }), GConstants) : GConstants).RedDotConf.FirstPay, this.hasRedDot((_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
              error: Error()
            }), GConstants) : GConstants).RedDotConf.FirstPay));
          }
        }
        /**
         * 首充礼包入口是否显示
         * @returns 
         */


        need_show_gift_firstpay() {
          if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).table_isEmpty(this._redConfData[(_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
            error: Error()
          }), GConstants) : GConstants).RedDotConf.FirstPay])) {
            return false;
          }

          return true;
        }
        /** 判断首充礼包是否显示红点 */


        has_reddot_firstPay() {
          let flag = this.check_reddot_by_name('gift_firstpay_red_dot', (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
            error: Error()
          }), GConstants) : GConstants).RedDotConf.FirstPay);
          return flag != true;
        }
        /** 首充通知更新红点 */


        update_reddot_gift_firstpay() {
          this.update_reddot_by_name("gift_firstpay_red_dot", (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
            error: Error()
          }), GConstants) : GConstants).RedDotConf.FirstPay);
        }
        /** 付费礼包更新数据*/


        update_gift_holiday(data) {
          if (data) {
            this._redConfData[(_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
              error: Error()
            }), GConstants) : GConstants).RedDotConf.Holiday] = data; //通知:红点更新

            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
              error: Error()
            }), AppEvent) : AppEvent).NOTIFY_UPDATE_RED_DOT, (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
              error: Error()
            }), GConstants) : GConstants).RedDotConf.Holiday, this.hasRedDot((_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
              error: Error()
            }), GConstants) : GConstants).RedDotConf.Holiday));
          }
        }
        /**
          * 付费礼包入口是否可见 
          * @returns 
          */


        need_show_holiday() {
          if ((_crd && Platform === void 0 ? (_reportPossibleCrUseOfPlatform({
            error: Error()
          }), Platform) : Platform).isCanPay() == false) {
            return false;
          }

          let data = this._redConfData[(_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
            error: Error()
          }), GConstants) : GConstants).RedDotConf.Holiday];

          if (data) {
            if (data["sdate"] && data["edate"]) {
              let currowTime = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                error: Error()
              }), Utils) : Utils).time();

              if (currowTime >= data["sdate"] && currowTime < data["edate"]) {
                return true;
              }
            }
          }

          return false;
        }
        /** 判断特价礼包是否显示红点 */


        has_reddot_holiday() {
          let flag = this.check_reddot_by_name('gift_holiday_red_dot', (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
            error: Error()
          }), GConstants) : GConstants).RedDotConf.Holiday);
          return flag != true;
        }
        /** 特价礼包通知更新红点 */


        update_reddot_gift_holiday() {
          this.update_reddot_by_name("gift_holiday_red_dot", (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
            error: Error()
          }), GConstants) : GConstants).RedDotConf.Holiday);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=bb54b41ed9f465aaaf91967b912ef67f6be73861.js.map