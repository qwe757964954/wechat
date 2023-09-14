System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, _decorator, AppEvent, resLoader, Logger, EventManager, _dec, _dec2, _class, _crd, ccclass, menu, DelegateComponent;

  function _reportPossibleCrUseOfAppEvent(extras) {
    _reporterNs.report("AppEvent", "../../config/AppEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfinf_ViewParams(extras) {
    _reporterNs.report("inf_ViewParams", "../InterfaceDefines", _context.meta, extras);
  }

  function _reportPossibleCrUseOfresLoader(extras) {
    _reporterNs.report("resLoader", "../loader/ResLoader", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLogger(extras) {
    _reporterNs.report("Logger", "../log/Logger", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventManager(extras) {
    _reporterNs.report("EventManager", "../manager/EventManager", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Component = _cc.Component;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      AppEvent = _unresolved_2.AppEvent;
    }, function (_unresolved_3) {
      resLoader = _unresolved_3.resLoader;
    }, function (_unresolved_4) {
      Logger = _unresolved_4.Logger;
    }, function (_unresolved_5) {
      EventManager = _unresolved_5.EventManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d8f1fGRD7dBzIeBSkOpd/Py", "DelegateComponent", undefined);

      __checkObsolete__(['Component', 'Node', '_decorator']);

      ({
        ccclass,
        menu
      } = _decorator);
      /** 窗口事件触发组件 */

      _export("DelegateComponent", DelegateComponent = (_dec = ccclass('DelegateComponent'), _dec2 = menu('layer/DelegateComponent'), _dec(_class = _dec2(_class = class DelegateComponent extends Component {
        constructor(...args) {
          super(...args);
          this.viewParams = null;
        }

        add() {
          let viewParams = this.viewParams; // 通知外部UI管理窗口添加到父节点后的事件

          if (typeof viewParams.noticeToRoot.onAdded === "function") {
            viewParams.noticeToRoot.onAdded(this.node, viewParams);
          } // 触发窗口组件上添加到父节点后的事件


          this.applyComponentsFunction(this.node, "onAdded", viewParams.params);

          if (typeof viewParams.callbacks.onAdded === "function") {
            viewParams.callbacks.onAdded(this.node, viewParams.params);
          } //发送全局事件


          let array = {
            UIID: viewParams.uuid,
            Prefab: viewParams.prefabPath,
            Bundle: viewParams.bundle
          };
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).VIEW_UI_OPENED, array);
        }
        /** 删除节点，该方法只能调用一次，将会触发onBeforeRemoved回调 */


        remove(isDestroy) {
          let viewParams = this.viewParams;

          if (viewParams.valid) {
            // 触发窗口组件上移除之前的事件
            this.applyComponentsFunction(this.node, "onBeforeRemove", viewParams.params); // 通知外部UI管理窗口添加到父节点后的事件

            if (typeof viewParams.noticeToRoot.onBeforeRemove === "function") {
              viewParams.noticeToRoot.onBeforeRemove(this.node, () => {
                this.removed(viewParams, isDestroy);
              });
            } //  通知外部对象窗口组件上移除之前的事件（关闭窗口前的关闭动画处理）


            if (typeof viewParams.callbacks.onBeforeRemove === "function") {
              viewParams.callbacks.onBeforeRemove(this.node, () => {
                this.removed(viewParams, isDestroy);
              });
            } else {
              this.removed(viewParams, isDestroy);
            }
          }
        }
        /**销毁 */


        onDestroy() {
          let viewParams = this.viewParams;

          if (viewParams) {
            viewParams.valid = false;

            if (viewParams.isAutoRecover == true) {
              (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
                error: Error()
              }), Logger) : Logger).logView(`释放资源:${viewParams.prefabPath}`);
              (_crd && resLoader === void 0 ? (_reportPossibleCrUseOfresLoader({
                error: Error()
              }), resLoader) : resLoader).release(viewParams.prefabPath);
            }
          } // 触发窗口组件上窗口移除之后的事件


          this.applyComponentsFunction(this.node, "onRemoved", viewParams == null ? void 0 : viewParams.params); // 通知外部UI管理窗口移除之后的事件

          if (typeof viewParams.noticeToRoot.onRemoved === "function") {
            viewParams.noticeToRoot.onRemoved(this.node, viewParams);
          } // 通知外部对象窗口移除之后的事件


          if (typeof viewParams.callbacks.onRemoved === "function") {
            viewParams.callbacks.onRemoved(this.node, viewParams);
          } //发送全局事件


          let array = {
            UIID: viewParams.uuid,
            Prefab: viewParams.prefabPath,
            Bundle: viewParams.bundle
          };
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).VIEW_UI_CLOSED, array);
          this.viewParams = null;
        }
        /** 窗口组件中触发移除事件与释放窗口对象 */


        removed(viewParams, isDestroy) {
          viewParams.valid = false;

          if (isDestroy) {
            this.node.destroy();
          } else {
            this.node.removeFromParent();
          }
        }

        applyComponentsFunction(node, funName, params) {
          for (let i = 0; i < node.components.length; i++) {
            let component = node.components[i];
            let func = component[funName];

            if (func) {
              func.call(component, params);
            }
          }
        }
        /**获取传递的所有数据 */


        getViewParams() {
          return this.viewParams;
        }
        /**获取主动传递的参数 */


        getParams() {
          if (this.viewParams) {
            return this.viewParams.params;
          }

          return null;
        }

      }) || _class) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=423c10bdf283f28153a124cfa1276705d3a54865.js.map