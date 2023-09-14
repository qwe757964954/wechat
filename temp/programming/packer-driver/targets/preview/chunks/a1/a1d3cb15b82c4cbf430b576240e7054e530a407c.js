System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Node, _decorator, BaseComponent, GameEvent, CardPlayManeger, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, GameHandCardPrefabCtr;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../../framework/vc/BaseComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameEvent(extras) {
    _reporterNs.report("GameEvent", "../common/GameEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCardPlayManeger(extras) {
    _reporterNs.report("CardPlayManeger", "./Players/CardPlayManeger", _context.meta, extras);
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
      BaseComponent = _unresolved_2.BaseComponent;
    }, function (_unresolved_3) {
      GameEvent = _unresolved_3.GameEvent;
    }, function (_unresolved_4) {
      CardPlayManeger = _unresolved_4.CardPlayManeger;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "41ef5FPNS1MZKSNcDxQBOjP", "GameHandCardPrefabCtr", undefined);

      __checkObsolete__(['Node', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Name = GameHandCardPrefabCtr
       * URL = db://assets/package/game/scripts/GameHandCardPrefabCtr.ts
       * Time = Tue Aug 08 2023 15:24:35 GMT+0800 (中国标准时间)
       * Author = harvyson
       *
       * Life: onLoad-->onInitModuleEvent-->onEnable->start->update->lateUpdate->onDisable->onDestroy
       * 
       */

      _export("GameHandCardPrefabCtr", GameHandCardPrefabCtr = (_dec = ccclass('GameHandCardPrefabCtr'), _dec2 = property({
        tooltip: "手牌模板",
        type: Node
      }), _dec3 = property({
        tooltip: "cardZone",
        type: Node
      }), _dec(_class = (_class2 = class GameHandCardPrefabCtr extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "nodeCardTemplate", _descriptor, this);

          _initializerDefineProperty(this, "cardZone", _descriptor2, this);
        }

        /** override 初始化模块事件 */
        onInitModuleEvent() {
          this.addModelListener((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).CLEAN_HAND_CARD, this.cleanHandCard);
        }

        cleanHandCard() {
          var cardMgr = this.cardZone.getComponent(_crd && CardPlayManeger === void 0 ? (_reportPossibleCrUseOfCardPlayManeger({
            error: Error()
          }), CardPlayManeger) : CardPlayManeger);
          cardMgr.resetView();
        }

        onLoad() {
          this.initView();
        }

        /** 初始化界面 */
        initView() {
          this.nodeCardTemplate.active = false;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "nodeCardTemplate", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "cardZone", [_dec3], {
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
//# sourceMappingURL=a1d3cb15b82c4cbf430b576240e7054e530a407c.js.map