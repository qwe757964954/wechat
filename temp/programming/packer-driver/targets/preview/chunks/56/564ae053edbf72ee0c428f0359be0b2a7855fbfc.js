System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, EventManager, BaseComponent, FXJEvent, FXJUIID, _dec, _class, _crd, ccclass, property, begin;

  function _reportPossibleCrUseOfEventManager(extras) {
    _reporterNs.report("EventManager", "../../../../../framework/manager/EventManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../../../../framework/vc/BaseComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFXJEvent(extras) {
    _reporterNs.report("FXJEvent", "../../../common/FXJEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFXJUIID(extras) {
    _reporterNs.report("FXJUIID", "../../../common/FXJRes", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      EventManager = _unresolved_2.EventManager;
    }, function (_unresolved_3) {
      BaseComponent = _unresolved_3.BaseComponent;
    }, function (_unresolved_4) {
      FXJEvent = _unresolved_4.FXJEvent;
    }, function (_unresolved_5) {
      FXJUIID = _unresolved_5.FXJUIID;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "bbfbaH+rtFKDJWXkWDsg9kC", "begin", undefined);

      __checkObsolete__(['EventTouch', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Name = begin
       * URL = db://assets/package/game/module/begin/src/begin.ts
       * Time = Wed Aug 09 2023 15:34:46 GMT+0800 (中国标准时间)
       * Author = qwe757964
       *
       * Life: onLoad-->onInitModuleEvent-->onEnable->start->update->lateUpdate->onDisable->onDestroy
       * 
       */

      _export("begin", begin = (_dec = ccclass('begin'), _dec(_class = class begin extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor() {
          super(...arguments);
          this.handler = null;
          this.delayIndex = 0;
        }

        /** override 初始化模块事件 */
        onInitModuleEvent() {}

        onLoad() {}

        cancelSchedule() {
          this.unschedule(this.handler);
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && FXJEvent === void 0 ? (_reportPossibleCrUseOfFXJEvent({
            error: Error()
          }), FXJEvent) : FXJEvent).GAME_CLOSE_POPUP, (_crd && FXJUIID === void 0 ? (_reportPossibleCrUseOfFXJUIID({
            error: Error()
          }), FXJUIID) : FXJUIID).GameBeginPrefab);
        }

        startSchedule() {
          if (this.handler) {
            return;
          }

          this.delayIndex = 1;

          this.handler = () => {
            this.delayIndex = this.delayIndex - 1;

            if (this.delayIndex <= 0) {
              this.cancelSchedule();
            }
          };

          this.schedule(this.handler, 1);
        }

        start() {
          this.startSchedule();
        }

        /** 初始化界面 */
        initView() {}

        /** 更新界面 */
        updateView() {}

        /** 点击了关闭 */
        onClickClose(event) {}

        //销毁
        onDestroy() {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=564ae053edbf72ee0c428f0359be0b2a7855fbfc.js.map