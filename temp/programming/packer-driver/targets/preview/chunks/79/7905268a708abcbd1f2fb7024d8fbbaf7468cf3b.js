System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, AppEvent, GetAppEventID, FXJEvent, _crd;

  function _reportPossibleCrUseOfAppEvent(extras) {
    _reporterNs.report("AppEvent", "../../../config/AppEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGetAppEventID(extras) {
    _reporterNs.report("GetAppEventID", "../../../config/AppEvent", _context.meta, extras);
  }

  _export("FXJEvent", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      AppEvent = _unresolved_2.AppEvent;
      GetAppEventID = _unresolved_2.GetAppEventID;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "07b7c4npxJFcLDFSD4soNjs", "FXJEvent", undefined);

      _export("FXJEvent", FXJEvent = class FXJEvent extends (_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
        error: Error()
      }), AppEvent) : AppEvent) {});

      FXJEvent.GAME_REQ_PLAYER_CHAET_MSG = (_crd && GetAppEventID === void 0 ? (_reportPossibleCrUseOfGetAppEventID({
        error: Error()
      }), GetAppEventID) : GetAppEventID)();
      FXJEvent.GAME_REQ_PLAYER_CHAET_EMOJI = (_crd && GetAppEventID === void 0 ? (_reportPossibleCrUseOfGetAppEventID({
        error: Error()
      }), GetAppEventID) : GetAppEventID)();
      FXJEvent.GAME_REQ_EMOJI_PROPS_MSG = (_crd && GetAppEventID === void 0 ? (_reportPossibleCrUseOfGetAppEventID({
        error: Error()
      }), GetAppEventID) : GetAppEventID)();
      FXJEvent.GAME_OPEN_POPUP = (_crd && GetAppEventID === void 0 ? (_reportPossibleCrUseOfGetAppEventID({
        error: Error()
      }), GetAppEventID) : GetAppEventID)();
      FXJEvent.GAME_CLOSE_POPUP = (_crd && GetAppEventID === void 0 ? (_reportPossibleCrUseOfGetAppEventID({
        error: Error()
      }), GetAppEventID) : GetAppEventID)();
      FXJEvent.VIEW_DESK_BTN_MENU_UPDATE = (_crd && GetAppEventID === void 0 ? (_reportPossibleCrUseOfGetAppEventID({
        error: Error()
      }), GetAppEventID) : GetAppEventID)();
      FXJEvent.VIEW_DESK_ANI_PLAY = (_crd && GetAppEventID === void 0 ? (_reportPossibleCrUseOfGetAppEventID({
        error: Error()
      }), GetAppEventID) : GetAppEventID)();
      FXJEvent.VIEW_PLAYER_INTO = (_crd && GetAppEventID === void 0 ? (_reportPossibleCrUseOfGetAppEventID({
        error: Error()
      }), GetAppEventID) : GetAppEventID)();
      FXJEvent.VIEW_PLAYER_CHAT_SHOW = (_crd && GetAppEventID === void 0 ? (_reportPossibleCrUseOfGetAppEventID({
        error: Error()
      }), GetAppEventID) : GetAppEventID)();
      FXJEvent.BROADCAST_DING_ZHUANG = (_crd && GetAppEventID === void 0 ? (_reportPossibleCrUseOfGetAppEventID({
        error: Error()
      }), GetAppEventID) : GetAppEventID)();
      FXJEvent.BROADCAST_GRAB_CARD = (_crd && GetAppEventID === void 0 ? (_reportPossibleCrUseOfGetAppEventID({
        error: Error()
      }), GetAppEventID) : GetAppEventID)();
      FXJEvent.BROADCAST_USER_OPERATION_RESULT = (_crd && GetAppEventID === void 0 ? (_reportPossibleCrUseOfGetAppEventID({
        error: Error()
      }), GetAppEventID) : GetAppEventID)();
      FXJEvent.BROADCAST_DEAL_CARD = (_crd && GetAppEventID === void 0 ? (_reportPossibleCrUseOfGetAppEventID({
        error: Error()
      }), GetAppEventID) : GetAppEventID)();
      FXJEvent.BROADCAST_DINGQUE_OPTIONS = (_crd && GetAppEventID === void 0 ? (_reportPossibleCrUseOfGetAppEventID({
        error: Error()
      }), GetAppEventID) : GetAppEventID)();
      FXJEvent.BROADCAST_USER_PIAO_GANG = (_crd && GetAppEventID === void 0 ? (_reportPossibleCrUseOfGetAppEventID({
        error: Error()
      }), GetAppEventID) : GetAppEventID)();
      FXJEvent.BROADCAST_PAOQIAN_OPTIONS = (_crd && GetAppEventID === void 0 ? (_reportPossibleCrUseOfGetAppEventID({
        error: Error()
      }), GetAppEventID) : GetAppEventID)();
      FXJEvent.BROADCAST_ONE_DINGQUE_RESULT = (_crd && GetAppEventID === void 0 ? (_reportPossibleCrUseOfGetAppEventID({
        error: Error()
      }), GetAppEventID) : GetAppEventID)();
      FXJEvent.BROADCAST_ALL_DINGQUE_RESULT = (_crd && GetAppEventID === void 0 ? (_reportPossibleCrUseOfGetAppEventID({
        error: Error()
      }), GetAppEventID) : GetAppEventID)();
      FXJEvent.BROADCAST_SHUAIQIANG_RESULT = (_crd && GetAppEventID === void 0 ? (_reportPossibleCrUseOfGetAppEventID({
        error: Error()
      }), GetAppEventID) : GetAppEventID)();
      FXJEvent.BROADCAST_CHAQUE_RESULT = (_crd && GetAppEventID === void 0 ? (_reportPossibleCrUseOfGetAppEventID({
        error: Error()
      }), GetAppEventID) : GetAppEventID)();
      FXJEvent.BROADCAST_MAIDUANMEN_USER = (_crd && GetAppEventID === void 0 ? (_reportPossibleCrUseOfGetAppEventID({
        error: Error()
      }), GetAppEventID) : GetAppEventID)();
      FXJEvent.BROADCAST_MAIDUANMEN_RESULT = (_crd && GetAppEventID === void 0 ? (_reportPossibleCrUseOfGetAppEventID({
        error: Error()
      }), GetAppEventID) : GetAppEventID)();
      FXJEvent.BROADCAST_FEN_ZHANG = (_crd && GetAppEventID === void 0 ? (_reportPossibleCrUseOfGetAppEventID({
        error: Error()
      }), GetAppEventID) : GetAppEventID)();
      FXJEvent.BROADCAST_UPDATE_FAN_GANG_PAI = (_crd && GetAppEventID === void 0 ? (_reportPossibleCrUseOfGetAppEventID({
        error: Error()
      }), GetAppEventID) : GetAppEventID)();
      FXJEvent.BROADCAST_SELECT_FAN_GANG_PAI = (_crd && GetAppEventID === void 0 ? (_reportPossibleCrUseOfGetAppEventID({
        error: Error()
      }), GetAppEventID) : GetAppEventID)();
      FXJEvent.BROADCAST_USER_OPERATION = (_crd && GetAppEventID === void 0 ? (_reportPossibleCrUseOfGetAppEventID({
        error: Error()
      }), GetAppEventID) : GetAppEventID)();
      FXJEvent.BROADCAST_DING_FENG = (_crd && GetAppEventID === void 0 ? (_reportPossibleCrUseOfGetAppEventID({
        error: Error()
      }), GetAppEventID) : GetAppEventID)();
      FXJEvent.BROADCAST_ZHI_TOU = (_crd && GetAppEventID === void 0 ? (_reportPossibleCrUseOfGetAppEventID({
        error: Error()
      }), GetAppEventID) : GetAppEventID)();
      FXJEvent.BROADCAST_GAME_OVER = (_crd && GetAppEventID === void 0 ? (_reportPossibleCrUseOfGetAppEventID({
        error: Error()
      }), GetAppEventID) : GetAppEventID)();
      FXJEvent.BROADCAST_GAME_START = (_crd && GetAppEventID === void 0 ? (_reportPossibleCrUseOfGetAppEventID({
        error: Error()
      }), GetAppEventID) : GetAppEventID)();
      FXJEvent.BROADCAST_DOUBLE_CARDS = (_crd && GetAppEventID === void 0 ? (_reportPossibleCrUseOfGetAppEventID({
        error: Error()
      }), GetAppEventID) : GetAppEventID)();
      FXJEvent.BROADCAST_REWARD_CARDS = (_crd && GetAppEventID === void 0 ? (_reportPossibleCrUseOfGetAppEventID({
        error: Error()
      }), GetAppEventID) : GetAppEventID)();
      FXJEvent.BROADCAST_PLAYING_JI_TYPE = (_crd && GetAppEventID === void 0 ? (_reportPossibleCrUseOfGetAppEventID({
        error: Error()
      }), GetAppEventID) : GetAppEventID)();
      FXJEvent.BROADCAST_ZHUO_JI = (_crd && GetAppEventID === void 0 ? (_reportPossibleCrUseOfGetAppEventID({
        error: Error()
      }), GetAppEventID) : GetAppEventID)();
      FXJEvent.BROADCAST_SETTLE = (_crd && GetAppEventID === void 0 ? (_reportPossibleCrUseOfGetAppEventID({
        error: Error()
      }), GetAppEventID) : GetAppEventID)();
      FXJEvent.BROADCAST_HANDCARDS = (_crd && GetAppEventID === void 0 ? (_reportPossibleCrUseOfGetAppEventID({
        error: Error()
      }), GetAppEventID) : GetAppEventID)();
      FXJEvent.BROADCAST_BANKER_FIRST_OPERATION = (_crd && GetAppEventID === void 0 ? (_reportPossibleCrUseOfGetAppEventID({
        error: Error()
      }), GetAppEventID) : GetAppEventID)();
      FXJEvent.BROADCAST_UPDATE_PLAYER_MONEY = (_crd && GetAppEventID === void 0 ? (_reportPossibleCrUseOfGetAppEventID({
        error: Error()
      }), GetAppEventID) : GetAppEventID)();
      FXJEvent.BROADCAST_GANG_OPERATION_RESULT = (_crd && GetAppEventID === void 0 ? (_reportPossibleCrUseOfGetAppEventID({
        error: Error()
      }), GetAppEventID) : GetAppEventID)();
      FXJEvent.BROADCAST_DING_LAIZI = (_crd && GetAppEventID === void 0 ? (_reportPossibleCrUseOfGetAppEventID({
        error: Error()
      }), GetAppEventID) : GetAppEventID)();
      FXJEvent.BROADCAST_DI_TING = (_crd && GetAppEventID === void 0 ? (_reportPossibleCrUseOfGetAppEventID({
        error: Error()
      }), GetAppEventID) : GetAppEventID)();
      FXJEvent.BROADCAST_TO_WAIT_USER_GIVE_UP = (_crd && GetAppEventID === void 0 ? (_reportPossibleCrUseOfGetAppEventID({
        error: Error()
      }), GetAppEventID) : GetAppEventID)();
      FXJEvent.BROADCAST_XIAZHU_OPTIONS = (_crd && GetAppEventID === void 0 ? (_reportPossibleCrUseOfGetAppEventID({
        error: Error()
      }), GetAppEventID) : GetAppEventID)();
      FXJEvent.BROADCAST_XIAZHU_RESULT = (_crd && GetAppEventID === void 0 ? (_reportPossibleCrUseOfGetAppEventID({
        error: Error()
      }), GetAppEventID) : GetAppEventID)();
      FXJEvent.BROADCAST_GEN_ZHUANG_SUCC = (_crd && GetAppEventID === void 0 ? (_reportPossibleCrUseOfGetAppEventID({
        error: Error()
      }), GetAppEventID) : GetAppEventID)();
      FXJEvent.BROADCAST_FAN_GANG_PAI = (_crd && GetAppEventID === void 0 ? (_reportPossibleCrUseOfGetAppEventID({
        error: Error()
      }), GetAppEventID) : GetAppEventID)();
      FXJEvent.VIEW_PLAYER_UPDATE_BASEINFO = (_crd && GetAppEventID === void 0 ? (_reportPossibleCrUseOfGetAppEventID({
        error: Error()
      }), GetAppEventID) : GetAppEventID)();
      FXJEvent.VIEW_PLAYER_UPDATE_PROPERTY = (_crd && GetAppEventID === void 0 ? (_reportPossibleCrUseOfGetAppEventID({
        error: Error()
      }), GetAppEventID) : GetAppEventID)();
      FXJEvent.VIEW_PLAYER_REMOVE = (_crd && GetAppEventID === void 0 ? (_reportPossibleCrUseOfGetAppEventID({
        error: Error()
      }), GetAppEventID) : GetAppEventID)();

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=7905268a708abcbd1f2fb7024d8fbbaf7468cf3b.js.map