System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, BaseCache, OperationResultMgr, _crd;

  function _reportPossibleCrUseOfBaseCache(extras) {
    _reporterNs.report("BaseCache", "../../../framework/vc/BaseCache", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCommon(extras) {
    _reporterNs.report("Common", "../common/idl/Common", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGame(extras) {
    _reporterNs.report("Game", "../common/idl/Game", _context.meta, extras);
  }

  _export("OperationResultMgr", void 0);

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

      _cclegacy._RF.push({}, "d454dNxweROooLfeEP6DrLd", "OperationResultMgr", undefined);

      _export("OperationResultMgr", OperationResultMgr = class OperationResultMgr extends (_crd && BaseCache === void 0 ? (_reportPossibleCrUseOfBaseCache({
        error: Error()
      }), BaseCache) : BaseCache) {
        constructor(name = "") {
          super(name);
          this.seatId = 0;
          this.userId = 0;
          this.opCode = 0;
          this.opCard = 0;
          this.opCards = [];
          this.cardSeatId = 0;
          this.cardUserId = 0;
          this.handCard = null;
          this.huNum = 0;
          this.huInfo = null;
          this.tingInfos = null;
          this.CustomData = "";
          this.extendInfo = "";
        }

        static getInstance() {
          if (!OperationResultMgr.instance) {
            OperationResultMgr.instance = new OperationResultMgr();
          }

          return OperationResultMgr.instance;
        } //更新房间信息list数据


        userOperationResult(resp) {
          this.seatId = resp.seatId;
          this.userId = resp.userId;
          this.opCode = resp.opCode;
          this.opCard = resp.opCard;
          this.opCards = resp.opCards;
          this.cardSeatId = resp.cardSeatId;
          this.cardUserId = resp.cardUserId;
          this.handCard = resp.handCard;
          this.huNum = resp.huNum;
          this.huInfo = resp.huInfo;
          this.tingInfos = resp.tingInfos;
          this.CustomData = resp.CustomData;
          this.extendInfo = resp.extendInfo;
        } //清理房间数据


        clear() {// this.bankerInfo = null;
        }

      });

      OperationResultMgr.instance = null;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=58b9dc2180fc4df8face842619413b4de2fc0571.js.map