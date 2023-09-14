System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, BaseComponent, Card, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, BugangTop;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../../../../framework/vc/BaseComponent", _context.meta, extras);
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
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      BaseComponent = _unresolved_2.BaseComponent;
    }, function (_unresolved_3) {
      Card = _unresolved_3.Card;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c980fqyeclATJCmbQtKIZYW", "BugangTop", undefined);

      __checkObsolete__(['EventTouch', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Name = BugangTop
       * URL = db://assets/package/game/module/bugang/src/BugangTop.ts
       * Time = Thu Aug 03 2023 10:36:13 GMT+0800 (中国标准时间)
       * Author = qwe757964
       *
       * Life: onLoad-->onInitModuleEvent-->onEnable->start->update->lateUpdate->onDisable->onDestroy
       * 
       */

      _export("BugangTop", BugangTop = (_dec = ccclass('BugangTop'), _dec2 = property(_crd && Card === void 0 ? (_reportPossibleCrUseOfCard({
        error: Error()
      }), Card) : Card), _dec3 = property(_crd && Card === void 0 ? (_reportPossibleCrUseOfCard({
        error: Error()
      }), Card) : Card), _dec(_class = (_class2 = class BugangTop extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "leftCard", _descriptor, this);

          _initializerDefineProperty(this, "rightCard", _descriptor2, this);
        }

        /** override 初始化模块事件 */
        onInitModuleEvent() {}

        onLoad() {}

        updateFanGangPai(cards) {
          //card
          const cardArray = [this.leftCard, this.rightCard];
          cards.forEach((card, index) => {
            // 执行循环体操作，element是当前元素的值
            cardArray[index].setCardByte(card);
          });
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
//# sourceMappingURL=970026913318b9b3c4a39742d09b8e2802bab9bc.js.map