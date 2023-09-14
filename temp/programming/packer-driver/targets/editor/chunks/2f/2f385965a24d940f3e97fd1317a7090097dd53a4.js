System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, AppEvent, GConstants, StoreKey, LocalStorage, EventManager, Utils, BaseCache, WatchMessage, _crd;

  function _reportPossibleCrUseOfAppEvent(extras) {
    _reporterNs.report("AppEvent", "../config/AppEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGConstants(extras) {
    _reporterNs.report("GConstants", "../config/GameConstant", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStoreKey(extras) {
    _reporterNs.report("StoreKey", "../config/GameConstant", _context.meta, extras);
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

  function _reportPossibleCrUseOfMailInfo(extras) {
    _reporterNs.report("MailInfo", "./MailInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUser(extras) {
    _reporterNs.report("User", "./User", _context.meta, extras);
  }

  _export("WatchMessage", void 0);

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
      LocalStorage = _unresolved_4.LocalStorage;
    }, function (_unresolved_5) {
      EventManager = _unresolved_5.EventManager;
    }, function (_unresolved_6) {
      Utils = _unresolved_6.Utils;
    }, function (_unresolved_7) {
      BaseCache = _unresolved_7.BaseCache;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4a6a64lyVZPsLF7AJId5MbS", "WatchMessage", undefined);

      _export("WatchMessage", WatchMessage = class WatchMessage extends (_crd && BaseCache === void 0 ? (_reportPossibleCrUseOfBaseCache({
        error: Error()
      }), BaseCache) : BaseCache) {
        /** 用户类 */

        /** 邮件类 */
        //实例化
        constructor(superClass) {
          super("WatchMessage");
          this.__User = null;
          this.__MailInfo = null;
          this.__User = superClass;
          this.__MailInfo = this.__User.MailInfo;
        }

        getMaxId(msgList) {
          let maxId = 0;

          for (let i = 0; i < msgList.length; i++) {
            let v = msgList[i];
            let num = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).number_valueOf(v["id"]);

            if (num > maxId) {
              maxId = num;
            }
          }

          return maxId;
        }
        /**处理数据*/


        dealData(arr) {
          if (!(_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).isArray(arr)) {
            return;
          }

          let data = [];

          for (let item of arr) {
            if (Object.prototype.hasOwnProperty.call(item, "is_html") && (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).number_valueOf(item.is_html, 0) > 0) {
              continue;
            }

            data.push(item);
          }

          if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).table_isEmpty(data)) {
            return;
          }

          let tmp = [];

          for (let k = 0; k < data.length; k++) {
            let v1 = data[k]; //初始化邮件状态

            v1.status = (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
              error: Error()
            }), GConstants) : GConstants).MsgStatus.MSG_STATUS_FRESH;
            tmp.push(v1);
          }

          this.saveMaxEmailId(tmp);

          this.__User.MailInfo.saveDataFromNet(tmp); //有新数据刷新邮件界面


          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NOTIFY_EMAIL_CHANGE);
        }
        /**
         * 存储邮件最大ID
         * @param msgList 
         */


        saveMaxEmailId(msgList) {
          //当前本地存储的ID
          let key_SystemLastId = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).string_format((_crd && StoreKey === void 0 ? (_reportPossibleCrUseOfStoreKey({
            error: Error()
          }), StoreKey) : StoreKey).WATCH_MESSAGE_SYSTEMID, this.__User.getUserMid());
          let systemLastId = (_crd && LocalStorage === void 0 ? (_reportPossibleCrUseOfLocalStorage({
            error: Error()
          }), LocalStorage) : LocalStorage).get(key_SystemLastId, 0);
          let currentMaxId = this.getMaxId(msgList);

          if (currentMaxId > systemLastId) {
            (_crd && LocalStorage === void 0 ? (_reportPossibleCrUseOfLocalStorage({
              error: Error()
            }), LocalStorage) : LocalStorage).set(key_SystemLastId, currentMaxId);
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=2f385965a24d940f3e97fd1317a7090097dd53a4.js.map