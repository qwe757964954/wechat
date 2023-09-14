System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Label, Node, UITransform, _decorator, SystemConf, BaseComponent, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, menu, ToastComponent;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfSystemConf(extras) {
    _reporterNs.report("SystemConf", "../../config/GameConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "./BaseComponent", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Label = _cc.Label;
      Node = _cc.Node;
      UITransform = _cc.UITransform;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      SystemConf = _unresolved_2.SystemConf;
    }, function (_unresolved_3) {
      BaseComponent = _unresolved_3.BaseComponent;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "de1daMgSoJNGqNHLZHoRzt1", "ToastComponent", undefined);

      __checkObsolete__(['Label', 'Node', 'UITransform', '_decorator']);

      ({
        ccclass,
        property,
        menu
      } = _decorator);

      _export("ToastComponent", ToastComponent = (_dec = ccclass('ToastComponent'), _dec2 = menu('vc/ToastComponent'), _dec3 = property({
        tooltip: "吐司根节点",
        type: Node
      }), _dec4 = property({
        tooltip: "吐司背景",
        type: Node
      }), _dec5 = property({
        tooltip: "吐司文本内容",
        type: Label
      }), _dec(_class = _dec2(_class = (_class2 = class ToastComponent extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "toastRoot", _descriptor, this);

          _initializerDefineProperty(this, "lab_Bg", _descriptor2, this);

          _initializerDefineProperty(this, "lab_content", _descriptor3, this);

          this._overWidth = 40;
          this._isLoad = false;
          this._toastParam = null;
        }

        onLoad() {
          this._isLoad = true;
          this.updateTxt(this._toastParam ? this._toastParam["content"] : "");
          this.updateView();
        }

        updateTxt(str) {
          if (str === void 0) {
            str = "";
          }

          if (this.lab_content) {
            this.lab_content.string = String(str);
            console.log("显示吐司===>content:", str);
          }
        }

        updateView() {
          var lblWidth = this.lab_content.getComponent(UITransform).width;
          var bgWidth = this.lab_Bg.getComponent(UITransform).width;

          if (lblWidth >= bgWidth) {
            var maxWidth = lblWidth + this._overWidth;

            if (maxWidth > (_crd && SystemConf === void 0 ? (_reportPossibleCrUseOfSystemConf({
              error: Error()
            }), SystemConf) : SystemConf).DEV_SIZE.width) {
              maxWidth = (_crd && SystemConf === void 0 ? (_reportPossibleCrUseOfSystemConf({
                error: Error()
              }), SystemConf) : SystemConf).DEV_SIZE.width;
            }

            this.lab_Bg.getComponent(UITransform).width = maxWidth;
          }
        }
        /**
         * 显示操作
         * @param param 文本
         */


        toast(param) {
          this._toastParam = param;

          if (!this._isLoad) {
            return;
          }

          this.updateTxt(this._toastParam ? this._toastParam["content"] : "");
          this.updateView();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "toastRoot", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "lab_Bg", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "lab_content", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=712dd7f64006ddb1f5a61f2be642ec45910727b8.js.map