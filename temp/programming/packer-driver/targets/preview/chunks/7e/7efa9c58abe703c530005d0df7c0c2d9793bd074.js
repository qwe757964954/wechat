System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, GetAppEventID, GameEvent, _crd;

  function _reportPossibleCrUseOfGetAppEventID(extras) {
    _reporterNs.report("GetAppEventID", "../../../config/AppEvent", _context.meta, extras);
  }

  _export("GameEvent", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      GetAppEventID = _unresolved_2.GetAppEventID;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a17a5UjcGlLu5dHwag6h9PO", "GameEvent", undefined);

      _export("GameEvent", GameEvent = class GameEvent {});

      GameEvent.VIEW_BROADCAST_PLAYER_ENTER = (_crd && GetAppEventID === void 0 ? (_reportPossibleCrUseOfGetAppEventID({
        error: Error()
      }), GetAppEventID) : GetAppEventID)();
      GameEvent.ENTER_ROOM_UPDATE_PLAYER = (_crd && GetAppEventID === void 0 ? (_reportPossibleCrUseOfGetAppEventID({
        error: Error()
      }), GetAppEventID) : GetAppEventID)();
      GameEvent.VIEW_BROADCAST_PLAYER_EXIT = (_crd && GetAppEventID === void 0 ? (_reportPossibleCrUseOfGetAppEventID({
        error: Error()
      }), GetAppEventID) : GetAppEventID)();
      GameEvent.VIEW_BROADCAST_PLAYER_AI_SHOW = (_crd && GetAppEventID === void 0 ? (_reportPossibleCrUseOfGetAppEventID({
        error: Error()
      }), GetAppEventID) : GetAppEventID)();
      GameEvent.VIEW_BROADCAST_PLAYER_AI_HIDE = (_crd && GetAppEventID === void 0 ? (_reportPossibleCrUseOfGetAppEventID({
        error: Error()
      }), GetAppEventID) : GetAppEventID)();
      GameEvent.VIEW_BROADCAST_PLAYER_READY = (_crd && GetAppEventID === void 0 ? (_reportPossibleCrUseOfGetAppEventID({
        error: Error()
      }), GetAppEventID) : GetAppEventID)();
      GameEvent.VIEW_BROADCAST_GAME_START = (_crd && GetAppEventID === void 0 ? (_reportPossibleCrUseOfGetAppEventID({
        error: Error()
      }), GetAppEventID) : GetAppEventID)();
      GameEvent.VIEW_BROADCAST_GAME_OVER = (_crd && GetAppEventID === void 0 ? (_reportPossibleCrUseOfGetAppEventID({
        error: Error()
      }), GetAppEventID) : GetAppEventID)();
      GameEvent.VIEW_BROADCAST_DING_ZHUANG = (_crd && GetAppEventID === void 0 ? (_reportPossibleCrUseOfGetAppEventID({
        error: Error()
      }), GetAppEventID) : GetAppEventID)();
      GameEvent.VIEW_BROADCAST_ZHI_TOU = (_crd && GetAppEventID === void 0 ? (_reportPossibleCrUseOfGetAppEventID({
        error: Error()
      }), GetAppEventID) : GetAppEventID)();
      GameEvent.VIEW_BROADCAST_DEAL_CARD = (_crd && GetAppEventID === void 0 ? (_reportPossibleCrUseOfGetAppEventID({
        error: Error()
      }), GetAppEventID) : GetAppEventID)();
      GameEvent.VIEW_BROADCAST_OPERATION_START = (_crd && GetAppEventID === void 0 ? (_reportPossibleCrUseOfGetAppEventID({
        error: Error()
      }), GetAppEventID) : GetAppEventID)();
      GameEvent.VIEW_BROADCAST_GRAB_CARD = (_crd && GetAppEventID === void 0 ? (_reportPossibleCrUseOfGetAppEventID({
        error: Error()
      }), GetAppEventID) : GetAppEventID)();
      GameEvent.UPDATE_REMAIN_CARDS_COUNT = (_crd && GetAppEventID === void 0 ? (_reportPossibleCrUseOfGetAppEventID({
        error: Error()
      }), GetAppEventID) : GetAppEventID)();
      GameEvent.VIEW_UPDATE_FAN_GANG_PAI = (_crd && GetAppEventID === void 0 ? (_reportPossibleCrUseOfGetAppEventID({
        error: Error()
      }), GetAppEventID) : GetAppEventID)();
      GameEvent.VIEW_UPDATE_BU_GANG_PAI = (_crd && GetAppEventID === void 0 ? (_reportPossibleCrUseOfGetAppEventID({
        error: Error()
      }), GetAppEventID) : GetAppEventID)();
      GameEvent.VIEW_USER_OPERATION = (_crd && GetAppEventID === void 0 ? (_reportPossibleCrUseOfGetAppEventID({
        error: Error()
      }), GetAppEventID) : GetAppEventID)();
      GameEvent.SEND_PLAYER_OPERATION = (_crd && GetAppEventID === void 0 ? (_reportPossibleCrUseOfGetAppEventID({
        error: Error()
      }), GetAppEventID) : GetAppEventID)();
      GameEvent.UPDATE_USER_OPERATION_RESULT = (_crd && GetAppEventID === void 0 ? (_reportPossibleCrUseOfGetAppEventID({
        error: Error()
      }), GetAppEventID) : GetAppEventID)();
      GameEvent.NEXT_GAME_OPERATION = (_crd && GetAppEventID === void 0 ? (_reportPossibleCrUseOfGetAppEventID({
        error: Error()
      }), GetAppEventID) : GetAppEventID)();
      GameEvent.DRAW_MY_CARD = (_crd && GetAppEventID === void 0 ? (_reportPossibleCrUseOfGetAppEventID({
        error: Error()
      }), GetAppEventID) : GetAppEventID)();
      GameEvent.UPDATE_OPERATION_RESULT = (_crd && GetAppEventID === void 0 ? (_reportPossibleCrUseOfGetAppEventID({
        error: Error()
      }), GetAppEventID) : GetAppEventID)();
      GameEvent.RECEIVE_DEAL_CARD = (_crd && GetAppEventID === void 0 ? (_reportPossibleCrUseOfGetAppEventID({
        error: Error()
      }), GetAppEventID) : GetAppEventID)();
      GameEvent.VIEW_PLAYER_AI_SHOW = (_crd && GetAppEventID === void 0 ? (_reportPossibleCrUseOfGetAppEventID({
        error: Error()
      }), GetAppEventID) : GetAppEventID)();
      GameEvent.VIEW_PLAYER_EMOJ_SHOW = (_crd && GetAppEventID === void 0 ? (_reportPossibleCrUseOfGetAppEventID({
        error: Error()
      }), GetAppEventID) : GetAppEventID)();
      GameEvent.CLEAN_HAND_CARD = (_crd && GetAppEventID === void 0 ? (_reportPossibleCrUseOfGetAppEventID({
        error: Error()
      }), GetAppEventID) : GetAppEventID)();
      GameEvent.CLOSE_OPRATION_INFO = (_crd && GetAppEventID === void 0 ? (_reportPossibleCrUseOfGetAppEventID({
        error: Error()
      }), GetAppEventID) : GetAppEventID)();
      GameEvent.SHOW_HIDEN_MATCH_VIEW = (_crd && GetAppEventID === void 0 ? (_reportPossibleCrUseOfGetAppEventID({
        error: Error()
      }), GetAppEventID) : GetAppEventID)();
      GameEvent.CLEAN_AI_SHOWING = (_crd && GetAppEventID === void 0 ? (_reportPossibleCrUseOfGetAppEventID({
        error: Error()
      }), GetAppEventID) : GetAppEventID)();
      GameEvent.EXITS_SETTLE_VIEW = (_crd && GetAppEventID === void 0 ? (_reportPossibleCrUseOfGetAppEventID({
        error: Error()
      }), GetAppEventID) : GetAppEventID)();
      GameEvent.EXITS_GAME_ROOM_VIEW = (_crd && GetAppEventID === void 0 ? (_reportPossibleCrUseOfGetAppEventID({
        error: Error()
      }), GetAppEventID) : GetAppEventID)();

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=7efa9c58abe703c530005d0df7c0c2d9793bd074.js.map