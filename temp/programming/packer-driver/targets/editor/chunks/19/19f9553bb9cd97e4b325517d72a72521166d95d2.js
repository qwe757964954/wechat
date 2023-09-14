System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Node, _decorator, AppEvent, EventManager, Utils, BaseComponent, RoomMgr, GameStatus, FXJCMDHead, Card, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, BugangBottom;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfAppEvent(extras) {
    _reporterNs.report("AppEvent", "../../../../../config/AppEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventManager(extras) {
    _reporterNs.report("EventManager", "../../../../../framework/manager/EventManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUtils(extras) {
    _reporterNs.report("Utils", "../../../../../framework/Utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../../../../framework/vc/BaseComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoomMgr(extras) {
    _reporterNs.report("RoomMgr", "../../../cache/RoomMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameStatus(extras) {
    _reporterNs.report("GameStatus", "../../../common/FXJConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGame(extras) {
    _reporterNs.report("Game", "../../../common/idl/Game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFXJCMDHead(extras) {
    _reporterNs.report("FXJCMDHead", "../../../net/FXJCmd", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCard(extras) {
    _reporterNs.report("Card", "../../card/src/Card", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Node = _cc.Node;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      AppEvent = _unresolved_2.AppEvent;
    }, function (_unresolved_3) {
      EventManager = _unresolved_3.EventManager;
    }, function (_unresolved_4) {
      Utils = _unresolved_4.Utils;
    }, function (_unresolved_5) {
      BaseComponent = _unresolved_5.BaseComponent;
    }, function (_unresolved_6) {
      RoomMgr = _unresolved_6.RoomMgr;
    }, function (_unresolved_7) {
      GameStatus = _unresolved_7.GameStatus;
    }, function (_unresolved_8) {
      FXJCMDHead = _unresolved_8.FXJCMDHead;
    }, function (_unresolved_9) {
      Card = _unresolved_9.Card;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "10dcbRbiXJOT4Kjrk6CCTu+", "BugangBottom", undefined);

      __checkObsolete__(['Node', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Name = BugangBottom
       * URL = db://assets/package/game/module/bugang/src/BugangBottom.ts
       * Time = Wed Aug 09 2023 21:31:35 GMT+0800 (中国标准时间)
       * Author = qwe757964
       *
       * Life: onLoad-->onInitModuleEvent-->onEnable->start->update->lateUpdate->onDisable->onDestroy
       * 
       */

      _export("BugangBottom", BugangBottom = (_dec = ccclass('BugangBottom'), _dec2 = property(_crd && Card === void 0 ? (_reportPossibleCrUseOfCard({
        error: Error()
      }), Card) : Card), _dec3 = property(_crd && Card === void 0 ? (_reportPossibleCrUseOfCard({
        error: Error()
      }), Card) : Card), _dec(_class = (_class2 = class BugangBottom extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "leftCard", _descriptor, this);

          _initializerDefineProperty(this, "rightCard", _descriptor2, this);

          this._handlerTimeUpdate = null;
        }

        /** override 初始化模块事件 */
        onInitModuleEvent() {}

        onLoad() {}

        updateBuGangPai(resp) {
          //card
          const cardArray = [this.leftCard, this.rightCard];
          resp.cards.forEach((byte, index) => {
            // 执行循环体操作，element是当前元素的值
            cardArray[index].setCardByte(byte);
            cardArray[index].node.off(Node.EventType.TOUCH_END);
            cardArray[index].node.on(Node.EventType.TOUCH_END, event => {
              this.opClick(byte);
            }, this);
          });
        }
        /** 开始更新时间 */


        startOperationTime() {
          this.stopSchedulerOnce(this._handlerTimeUpdate);
          this._handlerTimeUpdate = null;
          let timeOut = (_crd && RoomMgr === void 0 ? (_reportPossibleCrUseOfRoomMgr({
            error: Error()
          }), RoomMgr) : RoomMgr).getInstance().getTimeOut((_crd && GameStatus === void 0 ? (_reportPossibleCrUseOfGameStatus({
            error: Error()
          }), GameStatus) : GameStatus).OPERATION);
          this._handlerTimeUpdate = this.addSchedulerOnce(timeOut, (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).handler(this, this.resetView));
        }

        resetView() {
          this.node.active = false;
        }

        opClick(byte) {
          let info = {
            card: byte
          };
          let sendMsg = {
            cmd: (_crd && FXJCMDHead === void 0 ? (_reportPossibleCrUseOfFXJCMDHead({
              error: Error()
            }), FXJCMDHead) : FXJCMDHead).C2S.USER_SELECT_FAN_GANG_PAI,
            body: info
          };
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_SEND_MSG, sendMsg);
          this.node.active = false;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "leftCard", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "rightCard", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=19f9553bb9cd97e4b325517d72a72521166d95d2.js.map