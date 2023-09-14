System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Color, inf_ViewParams, LayerPopUp, LayerDialog, _crd;

  function _reportPossibleCrUseOfinf_UICallbacks(extras) {
    _reporterNs.report("inf_UICallbacks", "../InterfaceDefines", _context.meta, extras);
  }

  function _reportPossibleCrUseOfinf_UIConfig(extras) {
    _reporterNs.report("inf_UIConfig", "../InterfaceDefines", _context.meta, extras);
  }

  function _reportPossibleCrUseOfinf_ViewParams(extras) {
    _reporterNs.report("inf_ViewParams", "../InterfaceDefines", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLayerPopUp(extras) {
    _reporterNs.report("LayerPopUp", "./LayerPopup", _context.meta, extras);
  }

  _export("LayerDialog", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Color = _cc.Color;
    }, function (_unresolved_2) {
      inf_ViewParams = _unresolved_2.inf_ViewParams;
    }, function (_unresolved_3) {
      LayerPopUp = _unresolved_3.LayerPopUp;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "dcad5w8wHlEDJpIKJ4gUxEP", "LayerDialog", undefined);

      __checkObsolete__(['Color', 'Node']);

      /*
       * Dialog 层
       * 该层的节点将一次只显示一个，删除以后会自动从队列当中取一个弹窗，直到队列为空
       */
      _export("LayerDialog", LayerDialog = class LayerDialog extends (_crd && LayerPopUp === void 0 ? (_reportPossibleCrUseOfLayerPopUp({
        error: Error()
      }), LayerPopUp) : LayerPopUp) {
        constructor() {
          super(...arguments);
          this.queue = [];

          this.onRemoved = (node, viewParams) => {
            setTimeout(() => {
              viewParams.valid = false;
              this.removeByUuid(viewParams.uuid, true);
              this.next();
            }, 0);
          };
        }

        /** 重新加载maskNode蒙版(子节点) */
        reloadMaskSprite() {
          super.reloadMaskSprite(new Color(0, 0, 0, 0));
        }
        /**
         * 添加一个预制件节点到层容器中，该方法将返回一个唯一`uuid`来标识该操作节点 
         * @param config.prefab 预制件路径 config.bundle 分包包名 默认resources
         * @param config.prefab 预制件路径
         * @param param 传递的参数
         * @param callbacks 回调函数 UICallbacks定义
         * @param isClickSpanceClose 是否点击自动关闭 默认 false 不关闭
         * @param isAutoRecover 是否自动释放加载的资源 默认false不释放
         */


        add(config, params, callbacks, isClickSpanceClose, isAutoRecover) {
          if (this.isValid == false) {
            return;
          }

          var bundle = config.bundle || "resources";
          var prefabPath = config.prefab;
          var uuid = this.getSoleID(prefabPath); //注意 此uuid为添加的历史证明

          var viewParams = new (_crd && inf_ViewParams === void 0 ? (_reportPossibleCrUseOfinf_ViewParams({
            error: Error()
          }), inf_ViewParams) : inf_ViewParams)();
          viewParams.uuid = uuid;
          viewParams.bundle = bundle;
          viewParams.prefabPath = prefabPath;
          viewParams.params = params || {};
          viewParams.callbacks = callbacks || {};
          viewParams.noticeToRoot = {
            onWillAdd: this.onWillAdd,
            onAdded: this.onAdded,
            onBeforeRemove: this.onBeforeRemove,
            onRemoved: this.onRemoved
          };
          viewParams.isAutoRecover = isAutoRecover || false;
          viewParams.isClickSpanceClose = isClickSpanceClose || false;
          this.queue.push(viewParams);

          if (this.current == null) {
            this.next();
          }

          return uuid;
        }
        /** 有子节点被移除 */


        onCallbackChildRemove(node) {
          if (this.queue.length > 0) {
            return;
          }

          this.updateMaskState();
        }
        /** 更新遮罩层点击状态 */


        updateMaskState() {
          if (this.isValid == false || !this._maskNode) {
            return;
          }

          if (this.activeInHierarchy == false) {
            return;
          }

          if (this.children.length > 1) {
            this.active = true;
            this.insertChild(this._maskNode, this.children.length - 1 - 1);
            this._maskNode.active = true;
            this._buttonCompent.enabled = true;
          } else {
            if (this.queue.length > 0) {
              return;
            }

            this._maskNode.active = false;
          }

          this.black.enabled = this._maskNode.active;
        }
        /** UI层的回调 UICallbacks类型 */


        //接着下一个
        next() {
          if (this.isValid == false) {
            return;
          }

          if (this.queue.length > 0) {
            this.black.enabled = true;
            this.current = this.queue.shift();
            this.load(this.current);
          } else {
            this.current = null;
            this.black.enabled = false;
          }
        } //根据预制体路径移除 队列中未显示的node记录默认不会移除


        remove(prefabPath, isDestroy) {
          super.remove(prefabPath, isDestroy);
        } //根据预制体路径移除所有 包括队列中未显示的


        removeAll(prefabPath, isDestroy) {
          this.addHistoryRecode[prefabPath] = null;
          var newQueue = [];
          var countNum = this.queue.length;

          for (var index = 0; index < countNum; index++) {
            var viewParams = this.queue[index];

            if (viewParams && viewParams.prefabPath != prefabPath) {
              newQueue.push(viewParams);
            }
          }

          this.queue = newQueue;
          this.current = null;
          this.remove(prefabPath, isDestroy);
        }
        /**
         * 执行销毁,不发送通知
         */


        toDestoryNotNotify() {
          super.toDestoryNotNotify();

          if (this.isValid == false) {
            return;
          }

          this.queue = [];
          this.current = null;
        }

        clear(isDestroy) {
          this.queue = [];
          this.current = null;
          super.clear(isDestroy);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ecf79cd98f64dfe3b50f5bd9cb0854373ab5ec46.js.map