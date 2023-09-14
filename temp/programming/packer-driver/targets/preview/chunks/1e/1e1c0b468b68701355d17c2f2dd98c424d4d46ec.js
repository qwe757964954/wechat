System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Layers, inf_ViewParams, ToastComponent, LayerUI, LayerNotify, _crd;

  function _reportPossibleCrUseOfinf_UICallbacks(extras) {
    _reporterNs.report("inf_UICallbacks", "../InterfaceDefines", _context.meta, extras);
  }

  function _reportPossibleCrUseOfinf_UIConfig(extras) {
    _reporterNs.report("inf_UIConfig", "../InterfaceDefines", _context.meta, extras);
  }

  function _reportPossibleCrUseOfinf_ViewParams(extras) {
    _reporterNs.report("inf_ViewParams", "../InterfaceDefines", _context.meta, extras);
  }

  function _reportPossibleCrUseOfToastComponent(extras) {
    _reporterNs.report("ToastComponent", "../vc/ToastComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLayerUI(extras) {
    _reporterNs.report("LayerUI", "./LayerUI", _context.meta, extras);
  }

  _export("LayerNotify", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Layers = _cc.Layers;
    }, function (_unresolved_2) {
      inf_ViewParams = _unresolved_2.inf_ViewParams;
    }, function (_unresolved_3) {
      ToastComponent = _unresolved_3.ToastComponent;
    }, function (_unresolved_4) {
      LayerUI = _unresolved_4.LayerUI;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "da14ax+B2xNsL2taQFOh7we", "LayerNotify", undefined);

      __checkObsolete__(['Layers', 'Node']);

      _export("LayerNotify", LayerNotify = class LayerNotify extends (_crd && LayerUI === void 0 ? (_reportPossibleCrUseOfLayerUI({
        error: Error()
      }), LayerUI) : LayerUI) {
        constructor() {
          super(...arguments);
          this.queue = {};
          this.currentPrefabPath = {};

          this.onRemoved = (node, viewParams) => {
            setTimeout(() => {
              viewParams.valid = false;
              this.currentPrefabPath[viewParams.prefabPath] = null;
              this.next(viewParams.prefabPath);
            }, 0);
          };
        }

        //当前显示出的预制体

        /**
         * 显示toast
         * @param config.prefab 预制件路径 config.bundle 分包包名 默认resources
         * @param param 传递的参数
         * @param callbacks 回调函数 UICallbacks定义
         * @param isAutoRecover 是否自动释放加载的资源 默认false不释放
         */
        show(config, param, callbacks, isAutoRecover) {
          var bundle = config.bundle || "resources";
          var prefabPath = config.prefab;
          var uuid = this.getSoleID(prefabPath);
          var viewParams = new (_crd && inf_ViewParams === void 0 ? (_reportPossibleCrUseOfinf_ViewParams({
            error: Error()
          }), inf_ViewParams) : inf_ViewParams)();
          viewParams.uuid = uuid;
          viewParams.bundle = bundle;
          viewParams.prefabPath = prefabPath;
          viewParams.params = param || null;
          viewParams.callbacks = callbacks || {};
          viewParams.noticeToRoot = {
            onAdded: this.onAdded,
            onBeforeRemove: this.onBeforeRemove,
            onRemoved: this.onRemoved
          };
          viewParams.valid = true;
          viewParams.isAutoRecover = isAutoRecover || false;
          viewParams.isClickSpanceClose = false;

          if (!this.queue[prefabPath]) {
            this.queue[prefabPath] = [];
          }

          this.queue[prefabPath].push(viewParams);

          if (!this.currentPrefabPath[prefabPath]) {
            this.next(prefabPath);
          }
        }

        updateMaskState() {
          if (this._maskNode && this._maskNode.isValid == true) {
            this._maskNode.active = false;
          }
        }
        /**UI层的回调 UICallbacks类型 */


        load(viewParams) {
          super.load(viewParams);
        }

        createNode(needAddNode, viewParams) {
          //this不存在了
          if (this.isValid == false) {
            return;
          }

          var childNode = super.createNode(needAddNode, viewParams);

          if (!childNode) {
            return null;
          } //激活场景


          this.layer = Layers.Enum.UI_2D;
          this._activeInHierarchy = true;
          childNode.active = true;
          var toastCom = childNode.getComponent(_crd && ToastComponent === void 0 ? (_reportPossibleCrUseOfToastComponent({
            error: Error()
          }), ToastComponent) : ToastComponent);
          childNode.active = true;

          if (toastCom != null && toastCom.toast) {
            toastCom.toast(viewParams.params);
          }

          return childNode;
        } //下一个相同类型的预制体


        next(prefabPath) {
          //this不存在了
          if (this.isValid == false) {
            return;
          }

          if (prefabPath && this.queue[prefabPath]) {
            var currentParams = this.queue[prefabPath].shift();

            if (currentParams) {
              this.currentPrefabPath[currentParams.prefabPath] = true;
              this.load(currentParams);
            }
          }
        }

        remove(prefabPath, isDestroy) {
          if (prefabPath && this.queue[prefabPath]) {
            this.queue[prefabPath] = null;
          }

          super.remove(prefabPath, isDestroy);
        }
        /**
         * 执行销毁,不发送通知
         */


        toDestoryNotNotify() {
          this.queue = {};
          this.currentPrefabPath = {};
          super.toDestoryNotNotify();
        }

        clear(isDestroy) {
          this.queue = {};
          super.clear(isDestroy);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=1e1c0b468b68701355d17c2f2dd98c424d4d46ec.js.map