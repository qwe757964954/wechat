System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Node, sp, _decorator, DelegateComponent, BaseComponent, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, menu, NetLoadingComponent;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfDelegateComponent(extras) {
    _reporterNs.report("DelegateComponent", "../layer/DelegateComponent", _context.meta, extras);
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
      Node = _cc.Node;
      sp = _cc.sp;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      DelegateComponent = _unresolved_2.DelegateComponent;
    }, function (_unresolved_3) {
      BaseComponent = _unresolved_3.BaseComponent;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d1a6fhGz09KFarc5/aRpN7w", "NetLoadingComponent", undefined);

      __checkObsolete__(['Node', 'sp', '_decorator']);

      ({
        ccclass,
        property,
        menu
      } = _decorator);
      /**
       * Name = NetLoadingComponent
       * URL = db://assets/framework/vc/NetLoadingComponent.ts
       * Time = Tue Sep 06 2022 12:30:05 GMT+0800 (中国标准时间)
       * Author = Tomoe
       *
       * Life: onLoad-->onEnable->start->update->lateUpdate->onDisable->onDestroy
       */

      _export("NetLoadingComponent", NetLoadingComponent = (_dec = ccclass('NetLoadingComponent'), _dec2 = menu('vc/NetLoadingComponent'), _dec3 = property({
        tooltip: "spine动画加载节点",
        type: Node
      }), _dec4 = property({
        tooltip: "spine动画加载节点",
        type: sp.Skeleton
      }), _dec(_class = _dec2(_class = (_class2 = class NetLoadingComponent extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "spineAniNode", _descriptor, this);

          _initializerDefineProperty(this, "spineAniSkeleton", _descriptor2, this);

          this._countTime = 15;
        }

        onLoad() {
          this.setSpineAni(0, "loading_big", true);
          this.getParamData();
          this.startCountDown();
        }

        /** 获取传递参数 */
        getParamData() {
          var comp = null;
          comp = this.node.getComponent(_crd && DelegateComponent === void 0 ? (_reportPossibleCrUseOfDelegateComponent({
            error: Error()
          }), DelegateComponent) : DelegateComponent);

          if (comp) {
            var param = comp.getParams();

            if (param && param["time"] != null) {
              this._countTime = param["time"];
            }
          }
        }

        start() {}

        /** 开始倒计时 */
        startCountDown() {
          var self = this;
          this.addSchedulerOnce(this._countTime, () => {
            if (self.node && self.node.isValid == true) {
              self.node.destroy();
            }
          });
        } //根据传入参数播放指定骨骼动画


        setSpineAni(num, name, isLoop) {
          this.spineAniSkeleton.setAnimation(num, name, isLoop);
        } //销毁


        onDestroy() {}

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "spineAniNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "spineAniSkeleton", [_dec4], {
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
//# sourceMappingURL=93ef5f590641540bcc00578a92771c72d6c656e8.js.map