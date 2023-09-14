System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Node, _decorator, AppEvent, EventManager, BaseComponent, FXJCMDHead, Card, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, BugangBottom;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfAppEvent(extras) {
    _reporterNs.report("AppEvent", "../../../../../config/AppEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventManager(extras) {
    _reporterNs.report("EventManager", "../../../../../framework/manager/EventManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../../../../framework/vc/BaseComponent", _context.meta, extras);
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
      BaseComponent = _unresolved_4.BaseComponent;
    }, function (_unresolved_5) {
      FXJCMDHead = _unresolved_5.FXJCMDHead;
    }, function (_unresolved_6) {
      Card = _unresolved_6.Card;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "10dcbRbiXJOT4Kjrk6CCTu+", "BugangBottom", undefined);

      __checkObsolete__(['EventTouch', 'Node', '_decorator']);

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
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "leftCard", _descriptor, this);

          _initializerDefineProperty(this, "rightCard", _descriptor2, this);
        }

        /** override 初始化模块事件 */
        onInitModuleEvent() {}

        onLoad() {}

        updateBuGangPai(resp) {
          //card
          var cardArray = [this.leftCard, this.rightCard];
          resp.cards.forEach((byte, index) => {
            // 执行循环体操作，element是当前元素的值
            cardArray[index].setCardByte(byte);
            cardArray[index].node.off(Node.EventType.TOUCH_END);
            cardArray[index].node.on(Node.EventType.TOUCH_END, event => {
              this.opClick(byte);
            }, this);
          });
        }

        opClick(byte) {
          var info = {
            card: byte
          };
          var sendMsg = {
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

        start() {}

        /** 初始化界面 */
        initView() {}

        /** 更新界面 */
        updateView() {}

        /** 点击了关闭 */
        onClickClose(event) {}

        //销毁
        onDestroy() {}

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "leftCard", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "rightCard", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f28ba4f1ba94db6592b7d54c4fcd3e05cf71eac0.js.map