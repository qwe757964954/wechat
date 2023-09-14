System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, BaseCache, BankerMgr, _crd;

  function _reportPossibleCrUseOfBaseCache(extras) {
    _reporterNs.report("BaseCache", "../../../framework/vc/BaseCache", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGame(extras) {
    _reporterNs.report("Game", "../common/idl/Game", _context.meta, extras);
  }

  _export("BankerMgr", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      BaseCache = _unresolved_2.BaseCache;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "3d6b1jCtTlJjINqQyKSvEfu", "BankerMgr", undefined);

      _export("BankerMgr", BankerMgr = class BankerMgr extends (_crd && BaseCache === void 0 ? (_reportPossibleCrUseOfBaseCache({
        error: Error()
      }), BaseCache) : BaseCache) {
        constructor(name) {
          if (name === void 0) {
            name = "";
          }

          super(name);
          this.bankerInfo = null;
        }

        static getInstance() {
          if (!BankerMgr.instance) {
            BankerMgr.instance = new BankerMgr();
          }

          return BankerMgr.instance;
        } //更新房间信息list数据


        updateRoomInfo(info) {
          this.bankerInfo = info;
        } //清理房间数据


        clear() {
          this.bankerInfo = null;
        }

      });

      BankerMgr.instance = null;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d242c8e108aee450674709dc101370a790c2f1f4.js.map