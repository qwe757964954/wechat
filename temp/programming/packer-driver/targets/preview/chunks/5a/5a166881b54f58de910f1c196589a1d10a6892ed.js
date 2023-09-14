System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, instantiate, Layout, Prefab, UITransform, _decorator, BaseComponent, OperationMgr, Card, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, Carditem;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../../../../framework/vc/BaseComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfOperationMgr(extras) {
    _reporterNs.report("OperationMgr", "../../../cache/OperationMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCard(extras) {
    _reporterNs.report("Card", "../../card/src/Card", _context.meta, extras);
  }

  function _reportPossibleCrUseOfOpType(extras) {
    _reporterNs.report("OpType", "./OpInfo", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      instantiate = _cc.instantiate;
      Layout = _cc.Layout;
      Prefab = _cc.Prefab;
      UITransform = _cc.UITransform;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      BaseComponent = _unresolved_2.BaseComponent;
    }, function (_unresolved_3) {
      OperationMgr = _unresolved_3.OperationMgr;
    }, function (_unresolved_4) {
      Card = _unresolved_4.Card;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a5b47HaIfNPsaX4/AAoJYJ+", "Carditem", undefined);

      __checkObsolete__(['instantiate', 'Layout', 'Prefab', 'UITransform', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Name = Carditem
       * URL = db://assets/package/game/module/opInfo/src/Carditem.ts
       * Time = Fri Aug 18 2023 15:19:38 GMT-0700 (北美太平洋夏令时间)
       * Author = qwe757964
       *
       * Life: onLoad-->onInitModuleEvent-->onEnable->start->update->lateUpdate->onDisable->onDestroy
       * 
       */

      _export("Carditem", Carditem = (_dec = ccclass('Carditem'), _dec2 = property({
        tooltip: "手牌预制体",
        type: Prefab
      }), _dec3 = property(Prefab), _dec4 = property(Layout), _dec(_class = (_class2 = class Carditem extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "CardPrefab", _descriptor, this);

          _initializerDefineProperty(this, "itemPrefab", _descriptor2, this);

          _initializerDefineProperty(this, "opCards", _descriptor3, this);
        }

        /** override 初始化模块事件 */
        onInitModuleEvent() {}

        updateCardItemProp(opTypes) {
          var _this = this;

          this.opCards.node.removeAllChildren();

          var _loop = function _loop(i) {
            var item = instantiate(_this.itemPrefab);
            var opType = opTypes[i];
            var cards = (_crd && OperationMgr === void 0 ? (_reportPossibleCrUseOfOperationMgr({
              error: Error()
            }), OperationMgr) : OperationMgr).getInstance().getOprationListNumber(opType.code);
            cards.forEach(cardValue => {
              var node = instantiate(_this.CardPrefab);
              node.getComponent(_crd && Card === void 0 ? (_reportPossibleCrUseOfCard({
                error: Error()
              }), Card) : Card).setCardByte(cardValue);
              var transform = node.getComponent(UITransform);
              transform.setContentSize(53, 78);
              item.addChild(node);
            });

            _this.opCards.node.addChild(item);
          };

          for (var i = 0; i < opTypes.length; i++) {
            _loop(i);
          }

          var opNode = opTypes[0].node;
          opNode.addChild(this.node);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "CardPrefab", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "itemPrefab", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "opCards", [_dec4], {
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
//# sourceMappingURL=5a166881b54f58de910f1c196589a1d10a6892ed.js.map