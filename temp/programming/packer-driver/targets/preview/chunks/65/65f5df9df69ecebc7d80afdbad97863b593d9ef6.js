System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Sprite, UITransform, _decorator, BaseComponent, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, Card;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../../../../framework/vc/BaseComponent", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Sprite = _cc.Sprite;
      UITransform = _cc.UITransform;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      BaseComponent = _unresolved_2.BaseComponent;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "dd90aFKDOFFh7sLY3Sj8eZr", "Card", undefined);

      __checkObsolete__(['Sprite', 'UITransform', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Card", Card = (_dec = ccclass('Card'), _dec2 = property(UITransform), _dec3 = property(Sprite), _dec4 = property(Sprite), _dec(_class = (_class2 = class Card extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "card", _descriptor, this);

          _initializerDefineProperty(this, "bgImg", _descriptor2, this);

          _initializerDefineProperty(this, "cardImg", _descriptor3, this);
        }

        setCardByte(byte) {// let cardStr = CardUtil.getCardValue(byte);
          // let frameName = Utils.string_format(FXJRes.Prefab_Card.plistKey, cardStr)
          // resLoader.load(FXJRes.Prefab_Card.bundle, FXJRes.Prefab_Card.path, SpriteAtlas, (err: Error | null, atlas) => {
          //     if (err) {
          //         return
          //     }
          //     let spriteFrame = atlas.getSpriteFrame(frameName)
          //     if (spriteFrame) {
          //         this.cardImg.spriteFrame = spriteFrame;
          //     }
          // })
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "card", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "bgImg", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "cardImg", [_dec4], {
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
//# sourceMappingURL=65f5df9df69ecebc7d80afdbad97863b593d9ef6.js.map