System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, AppEvent, UIID, LayerManager, EventManager, Utils, BaseControll, PopupServers, _crd;

  function _reportPossibleCrUseOfAppEvent(extras) {
    _reporterNs.report("AppEvent", "../../config/AppEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIID(extras) {
    _reporterNs.report("UIID", "../../config/UIConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfinf_UICallbacks(extras) {
    _reporterNs.report("inf_UICallbacks", "../../framework/InterfaceDefines", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLayerManager(extras) {
    _reporterNs.report("LayerManager", "../../framework/layer/LayerManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventManager(extras) {
    _reporterNs.report("EventManager", "../../framework/manager/EventManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUtils(extras) {
    _reporterNs.report("Utils", "../../framework/Utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseControll(extras) {
    _reporterNs.report("BaseControll", "../../framework/vc/BaseController", _context.meta, extras);
  }

  _export("PopupServers", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      AppEvent = _unresolved_2.AppEvent;
    }, function (_unresolved_3) {
      UIID = _unresolved_3.UIID;
    }, function (_unresolved_4) {
      LayerManager = _unresolved_4.LayerManager;
    }, function (_unresolved_5) {
      EventManager = _unresolved_5.EventManager;
    }, function (_unresolved_6) {
      Utils = _unresolved_6.Utils;
    }, function (_unresolved_7) {
      BaseControll = _unresolved_7.BaseControll;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "811b02qf09GZ7oweULw5GJ0", "PopupServers", undefined);

      _export("PopupServers", PopupServers = class PopupServers extends (_crd && BaseControll === void 0 ? (_reportPossibleCrUseOfBaseControll({
        error: Error()
      }), BaseControll) : BaseControll) {
        static getInstance() {
          if (!this._instance || this._instance == null) {
            this._instance = new PopupServers("PopupServers");
          }

          return this._instance;
        }

        get MainLayerCode() {
          return this._curMainLayer;
        } //实例化


        constructor(name) {
          super(name);
          this._curMainLayer = null;
          this._mainLayerArray = [];
          this._dequeAnim = [];
          this._handlerNetOutTime = null;
        }

        static init() {
          if (this._instance) {
            this._instance.clear();
          }

          this._instance = null;
          PopupServers.getInstance();
          return;
        }
        /**初始化添加事件绑定 */


        onInitModuleEvent() {
          //更新主场景标志
          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).VIEW_UI_MAIN_UPDATE, this.updateMainLayer); //回滚主场景标志

          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).VIEW_UI_MAIN_ROLLBACK, this.rollBackMainLayer); //将要打开界面

          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).VIEW_UI_OPEN, this.onOpenView); //将要关闭界面

          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).VIEW_UI_CLOSE, this.onCloseView); //打开了界面

          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).VIEW_UI_OPENED, this.onOpenedView); //关闭了界面

          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).VIEW_UI_CLOSED, this.onClosedView); //显示网络loading

          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).SYS_SHOW_NETLOADING, this.showNetLoading); //关闭网络loading

          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).SYS_CLOSE_NETLOADING, this.closeNetLoading); //显示吐司提示

          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).SYS_TOAST_TIP, this.showToastTips);
        }
        /** 更新主场景标志 */


        updateMainLayer(event, code) {
          this.print("更新主场景标志: code=", code);
          this._curMainLayer = code;

          this._mainLayerArray.push(this._curMainLayer);
        }
        /** 回滚主场景标志 */


        rollBackMainLayer(event) {
          this.print("回滚主场景标志: 当前：", this._curMainLayer, "上一个:", this._mainLayerArray[this._mainLayerArray.length - 2]);

          if (this._mainLayerArray.length >= 2) {
            this._curMainLayer = this._mainLayerArray[this._mainLayerArray.length - 2];

            this._mainLayerArray.splice(this._mainLayerArray.length - 1, 1);
          } else {
            this._curMainLayer = this._mainLayerArray[0] != null ? this._mainLayerArray[0] : null;
            this._mainLayerArray = [];
          }

          this.print("回滚主场景标志: 回滚后：", this._curMainLayer);
        }
        /** 即将打开界面 */


        onOpenView(event, uiId, uiArgs = null, callbacks = null, parent = null, isClickSpanceClose = false, isAutoRecover = false) {
          this.print("[OpenView]即将打开界面:" + uiId);
          (_crd && LayerManager === void 0 ? (_reportPossibleCrUseOfLayerManager({
            error: Error()
          }), LayerManager) : LayerManager).open(uiId, uiArgs, callbacks, parent, isClickSpanceClose, isAutoRecover);
        }
        /** 即将关闭界面 */


        onCloseView(event, uiId, parent = null) {
          this.print("[CloseView]即将关闭界面:" + uiId);
          (_crd && LayerManager === void 0 ? (_reportPossibleCrUseOfLayerManager({
            error: Error()
          }), LayerManager) : LayerManager).remove(uiId, true, parent);
        }
        /** 打开了界面 */


        onOpenedView(event, viewParam) {
          this.print("[OpenedView]打开了界面:" + viewParam["Prefab"]);
        }
        /** 关闭了界面 */


        onClosedView(event, viewParam) {
          this.print("[ClosedView]关闭了界面:" + viewParam["Prefab"]);
        }
        /**显示网络loading */


        showNetLoading(event = null, time = 15) {
          this.print("===开启网络加载===");
          this.onOpenView(null, (_crd && UIID === void 0 ? (_reportPossibleCrUseOfUIID({
            error: Error()
          }), UIID) : UIID).NetLoading, {
            time: time
          });
          this.stopScheduler(this._handlerNetOutTime);
          this._handlerNetOutTime = this.addSchedulerOnce(time, () => {
            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
              error: Error()
            }), AppEvent) : AppEvent).SYS_CLOSE_NETLOADING);
          });
        }
        /**关闭网络loading */


        closeNetLoading(event = null) {
          this.print("===关闭网络加载===");
          this.stopScheduler(this._handlerNetOutTime);
          this._handlerNetOutTime = null;
          this.onCloseView(null, (_crd && UIID === void 0 ? (_reportPossibleCrUseOfUIID({
            error: Error()
          }), UIID) : UIID).NetLoading);
        }
        /**显示吐司提示 */


        showToastTips(event, param) {
          this.print("显示吐司===>");

          if (param && param.content && (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).string_isEmpty(param.content) == false) {
            this.onOpenView(null, (_crd && UIID === void 0 ? (_reportPossibleCrUseOfUIID({
              error: Error()
            }), UIID) : UIID).ToastTip, param);
          }
        }

      });

      PopupServers._instance = null;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=bccc84dca73d30bcf171fcb62bbcb9f808e3a9ab.js.map