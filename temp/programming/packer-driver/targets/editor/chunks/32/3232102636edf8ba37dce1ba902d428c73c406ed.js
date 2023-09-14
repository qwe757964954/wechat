System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, EventManager, GameEvent, FXJObserver, _crd;

  function _reportPossibleCrUseOfEventManager(extras) {
    _reporterNs.report("EventManager", "../../../framework/manager/EventManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfObserver(extras) {
    _reporterNs.report("Observer", "../cache/PlayerMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameEvent(extras) {
    _reporterNs.report("GameEvent", "./GameEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCommon(extras) {
    _reporterNs.report("Common", "./idl/Common", _context.meta, extras);
  }

  _export("FXJObserver", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      EventManager = _unresolved_2.EventManager;
    }, function (_unresolved_3) {
      GameEvent = _unresolved_3.GameEvent;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "aad3ar0RyNIcpWddAYltiAe", "FXJObserver", undefined);

      _export("FXJObserver", FXJObserver = class FXJObserver {
        updatePlayerList(data) {}

        updateCardsCount() {
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).UPDATE_REMAIN_CARDS_COUNT);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=3232102636edf8ba37dce1ba902d428c73c406ed.js.map