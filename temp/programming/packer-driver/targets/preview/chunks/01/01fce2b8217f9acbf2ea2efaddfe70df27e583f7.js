System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Node, UITransform, Vec3, _decorator, BaseComponent, NodeCardCtr, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, NormalSize, Card;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../../../../framework/vc/BaseComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNodeCardCtr(extras) {
    _reporterNs.report("NodeCardCtr", "../../../scripts/NodeCardCtr", _context.meta, extras);
  }

  _export("NormalSize", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Node = _cc.Node;
      UITransform = _cc.UITransform;
      Vec3 = _cc.Vec3;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      BaseComponent = _unresolved_2.BaseComponent;
    }, function (_unresolved_3) {
      NodeCardCtr = _unresolved_3.NodeCardCtr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "dd90aFKDOFFh7sLY3Sj8eZr", "Card", undefined);

      __checkObsolete__(['Node', 'UITransform', 'Vec3', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator);

      (function (NormalSize) {
        NormalSize[NormalSize["Width"] = 33] = "Width";
        NormalSize[NormalSize["Height"] = 44] = "Height";
      })(NormalSize || _export("NormalSize", NormalSize = {}));

      _export("Card", Card = (_dec = ccclass('Card'), _dec2 = property(UITransform), _dec3 = property({
        tooltip: "手牌模板",
        type: Node
      }), _dec4 = property({
        tooltip: "手牌模板",
        type: Node
      }), _dec(_class = (_class2 = class Card extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "card", _descriptor, this);

          _initializerDefineProperty(this, "nodeCardTemplate", _descriptor2, this);

          _initializerDefineProperty(this, "cardTabTemplate", _descriptor3, this);
        }

        setCardByte(byte) {
          this.nodeCardTemplate.getComponent(_crd && NodeCardCtr === void 0 ? (_reportPossibleCrUseOfNodeCardCtr({
            error: Error()
          }), NodeCardCtr) : NodeCardCtr).setCardByte(byte);
        }

        setCardSize(width, height) {
          var scale = width / NormalSize.Width * 1000;
          this.nodeCardTemplate.getChildByName("majiangzi").setScale(scale, scale, scale);
          this.cardTabTemplate.setScale(scale, scale, scale);
          this.nodeCardTemplate.getComponent(UITransform).setContentSize(width, height);
          this.card.width = width;
          this.card.height = height;
        }

        setCardAngle(x, y, z) {
          this.nodeCardTemplate.getChildByName("majiangzi").setRotationFromEuler(x, y, z);
        }

        setCardAlbedo(x, y, z) {
          this.nodeCardTemplate.getComponent(_crd && NodeCardCtr === void 0 ? (_reportPossibleCrUseOfNodeCardCtr({
            error: Error()
          }), NodeCardCtr) : NodeCardCtr).setCardAlbedo(new Vec3(x, y, z));
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "card", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "nodeCardTemplate", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "cardTabTemplate", [_dec4], {
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
//# sourceMappingURL=01fce2b8217f9acbf2ea2efaddfe70df27e583f7.js.map