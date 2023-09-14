System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, AppEvent, EventManager, BaseCache, BackPack, _crd;

  function _reportPossibleCrUseOfAppEvent(extras) {
    _reporterNs.report("AppEvent", "../config/AppEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventManager(extras) {
    _reporterNs.report("EventManager", "../framework/manager/EventManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseCache(extras) {
    _reporterNs.report("BaseCache", "../framework/vc/BaseCache", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUser(extras) {
    _reporterNs.report("User", "./User", _context.meta, extras);
  }

  _export("BackPack", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      AppEvent = _unresolved_2.AppEvent;
    }, function (_unresolved_3) {
      EventManager = _unresolved_3.EventManager;
    }, function (_unresolved_4) {
      BaseCache = _unresolved_4.BaseCache;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1cbc6OFAbpFRJ14xl3bbnIO", "BackPack", undefined);

      /**
       * Name = BackPack
       * URL = db://assets/cache/BackPack.ts
       * Time = 
       * Author = xueya
       * 背包缓存
       */
      _export("BackPack", BackPack = class BackPack extends (_crd && BaseCache === void 0 ? (_reportPossibleCrUseOfBaseCache({
        error: Error()
      }), BaseCache) : BaseCache) {
        /** 用户类 */

        /** 背包数据 */

        /** 背包物品大类型 */
        constructor(superClass) {
          super("BackPack");
          this.__User = null;
          this.bagData = {};
          this.bagList = [];
          this.__User = superClass;
          this.bagData = [];
        }

        /** 获取背包物品大类型 */
        get BagList() {
          return this.bagList;
        }
        /** 获取背包数据 */


        get BagData() {
          return this.bagData;
        }
        /** 更新背包数据 */


        updateBagData(result) {
          this.bagData = result;
          console.log('获得最新的背包数据', this.bagData);
        }
        /** 在使用道具完后更新数据 拉取最新的背包数据 */


        useUpdate() {
          console.log('道具发生改变再次拉取背包数据');
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_CMD_REQ_USER_BACKPACK);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a52df8d0e7bda573e23f5049ba149d753c787657.js.map