System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Camera, isValid, Layers, Node, Tween, tween, Vec3, warn, Widget, inf_LayerType, Logger, DelegateComponent, LayerDialog, LayerNotify, LayerPopUp, LayerUI, _LayerManager, _crd, LayerManager;

  function _reportPossibleCrUseOfinf_LayerType(extras) {
    _reporterNs.report("inf_LayerType", "../InterfaceDefines", _context.meta, extras);
  }

  function _reportPossibleCrUseOfinf_PopViewParams(extras) {
    _reporterNs.report("inf_PopViewParams", "../InterfaceDefines", _context.meta, extras);
  }

  function _reportPossibleCrUseOfinf_UICallbacks(extras) {
    _reporterNs.report("inf_UICallbacks", "../InterfaceDefines", _context.meta, extras);
  }

  function _reportPossibleCrUseOfinf_UIConfig(extras) {
    _reporterNs.report("inf_UIConfig", "../InterfaceDefines", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLogger(extras) {
    _reporterNs.report("Logger", "../log/Logger", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDelegateComponent(extras) {
    _reporterNs.report("DelegateComponent", "./DelegateComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLayerDialog(extras) {
    _reporterNs.report("LayerDialog", "./LayerDialog", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLayerNotify(extras) {
    _reporterNs.report("LayerNotify", "./LayerNotify", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLayerPopUp(extras) {
    _reporterNs.report("LayerPopUp", "./LayerPopup", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLayerUI(extras) {
    _reporterNs.report("LayerUI", "./LayerUI", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Camera = _cc.Camera;
      isValid = _cc.isValid;
      Layers = _cc.Layers;
      Node = _cc.Node;
      Tween = _cc.Tween;
      tween = _cc.tween;
      Vec3 = _cc.Vec3;
      warn = _cc.warn;
      Widget = _cc.Widget;
    }, function (_unresolved_2) {
      inf_LayerType = _unresolved_2.inf_LayerType;
    }, function (_unresolved_3) {
      Logger = _unresolved_3.Logger;
    }, function (_unresolved_4) {
      DelegateComponent = _unresolved_4.DelegateComponent;
    }, function (_unresolved_5) {
      LayerDialog = _unresolved_5.LayerDialog;
    }, function (_unresolved_6) {
      LayerNotify = _unresolved_6.LayerNotify;
    }, function (_unresolved_7) {
      LayerPopUp = _unresolved_7.LayerPopUp;
    }, function (_unresolved_8) {
      LayerUI = _unresolved_8.LayerUI;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ad2094zom9DNqLUbiD0KRxu", "LayerManager", undefined);

      __checkObsolete__(['Camera', 'isValid', 'Layers', 'Node', 'Tween', 'tween', 'Vec3', 'warn', 'Widget']);

      _LayerManager = class _LayerManager {
        constructor() {
          this.guiRoot = null;
          this.configs = {};
          this.NodeList = {};
          this.ZorderConf = {};
        }

        static get instance() {
          if (!this._instance || this._instance == null) {
            this._instance = new _LayerManager();
          }

          return this._instance;
        }
        /** 界面根节点 */


        /**
         * 开始加载UI
         */
        load(root) {
          if (this.root) {
            return;
          }

          this.load(root);
        }
        /**
         * 重新加载UI
         */


        reload(root) {
          if (!root) {
            warn("\u91CD\u65B0\u52A0\u8F7DUI\u5931\u8D25\uFF0Croot\u4E0D\u5B58\u5728");
          }

          this.clear();
          this.root = null;

          this._load(root);
        }
        /**
         * _load
         */


        _load(root) {
          (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
            error: Error()
          }), Logger) : Logger).logView("成功初始化！！！");
          this.root = root;
          this.camera = this.root.getComponentInChildren(Camera);
          this.initGuiNode();
        }
        /** 初始化添加所有节点 */


        initGuiNode() {
          if (!this.guiRoot || this.guiRoot.isValid == false) {
            if (this.root) {
              this.guiRoot = this.create_node("GUI");
              this.root.addChild(this.guiRoot);
            } else {
              return;
            }
          } else {
            var childMaps = this.guiRoot.children;

            if (childMaps && (childMaps == null ? void 0 : childMaps.length) > 0) {
              for (var i = 0; i < childMaps.length; i++) {
                var child = childMaps[i];
                this.removeByNode(child, true);
              }
            }
          }

          this.game = this.create_node((_crd && inf_LayerType === void 0 ? (_reportPossibleCrUseOfinf_LayerType({
            error: Error()
          }), inf_LayerType) : inf_LayerType).Game);
          this.ui = new (_crd && LayerUI === void 0 ? (_reportPossibleCrUseOfLayerUI({
            error: Error()
          }), LayerUI) : LayerUI)((_crd && inf_LayerType === void 0 ? (_reportPossibleCrUseOfinf_LayerType({
            error: Error()
          }), inf_LayerType) : inf_LayerType).UI);
          this.popup = new (_crd && LayerPopUp === void 0 ? (_reportPossibleCrUseOfLayerPopUp({
            error: Error()
          }), LayerPopUp) : LayerPopUp)((_crd && inf_LayerType === void 0 ? (_reportPossibleCrUseOfinf_LayerType({
            error: Error()
          }), inf_LayerType) : inf_LayerType).PopUp);
          this.dialog = new (_crd && LayerDialog === void 0 ? (_reportPossibleCrUseOfLayerDialog({
            error: Error()
          }), LayerDialog) : LayerDialog)((_crd && inf_LayerType === void 0 ? (_reportPossibleCrUseOfinf_LayerType({
            error: Error()
          }), inf_LayerType) : inf_LayerType).Dialog);
          this.dialogTip = new (_crd && LayerDialog === void 0 ? (_reportPossibleCrUseOfLayerDialog({
            error: Error()
          }), LayerDialog) : LayerDialog)((_crd && inf_LayerType === void 0 ? (_reportPossibleCrUseOfinf_LayerType({
            error: Error()
          }), inf_LayerType) : inf_LayerType).DialogTip);
          this.alert = new (_crd && LayerDialog === void 0 ? (_reportPossibleCrUseOfLayerDialog({
            error: Error()
          }), LayerDialog) : LayerDialog)((_crd && inf_LayerType === void 0 ? (_reportPossibleCrUseOfinf_LayerType({
            error: Error()
          }), inf_LayerType) : inf_LayerType).Alert);
          this.dialogAnim = new (_crd && LayerDialog === void 0 ? (_reportPossibleCrUseOfLayerDialog({
            error: Error()
          }), LayerDialog) : LayerDialog)((_crd && inf_LayerType === void 0 ? (_reportPossibleCrUseOfinf_LayerType({
            error: Error()
          }), inf_LayerType) : inf_LayerType).DialogTip);
          this.netwindow = new (_crd && LayerDialog === void 0 ? (_reportPossibleCrUseOfLayerDialog({
            error: Error()
          }), LayerDialog) : LayerDialog)((_crd && inf_LayerType === void 0 ? (_reportPossibleCrUseOfinf_LayerType({
            error: Error()
          }), inf_LayerType) : inf_LayerType).NetWindow);
          this.notify = new (_crd && LayerNotify === void 0 ? (_reportPossibleCrUseOfLayerNotify({
            error: Error()
          }), LayerNotify) : LayerNotify)((_crd && inf_LayerType === void 0 ? (_reportPossibleCrUseOfinf_LayerType({
            error: Error()
          }), inf_LayerType) : inf_LayerType).Notify);
          this.guide = this.create_node((_crd && inf_LayerType === void 0 ? (_reportPossibleCrUseOfinf_LayerType({
            error: Error()
          }), inf_LayerType) : inf_LayerType).Guide);
          /** UI出现的层级 */

          this.ZorderConf = {
            [(_crd && inf_LayerType === void 0 ? (_reportPossibleCrUseOfinf_LayerType({
              error: Error()
            }), inf_LayerType) : inf_LayerType).Game]: 0,
            [(_crd && inf_LayerType === void 0 ? (_reportPossibleCrUseOfinf_LayerType({
              error: Error()
            }), inf_LayerType) : inf_LayerType).UI]: 1,
            [(_crd && inf_LayerType === void 0 ? (_reportPossibleCrUseOfinf_LayerType({
              error: Error()
            }), inf_LayerType) : inf_LayerType).PopUp]: 2,
            [(_crd && inf_LayerType === void 0 ? (_reportPossibleCrUseOfinf_LayerType({
              error: Error()
            }), inf_LayerType) : inf_LayerType).Dialog]: 3,
            [(_crd && inf_LayerType === void 0 ? (_reportPossibleCrUseOfinf_LayerType({
              error: Error()
            }), inf_LayerType) : inf_LayerType).DialogTip]: 4,
            [(_crd && inf_LayerType === void 0 ? (_reportPossibleCrUseOfinf_LayerType({
              error: Error()
            }), inf_LayerType) : inf_LayerType).Alert]: 5,
            [(_crd && inf_LayerType === void 0 ? (_reportPossibleCrUseOfinf_LayerType({
              error: Error()
            }), inf_LayerType) : inf_LayerType).Animal]: 6,
            [(_crd && inf_LayerType === void 0 ? (_reportPossibleCrUseOfinf_LayerType({
              error: Error()
            }), inf_LayerType) : inf_LayerType).NetWindow]: 7,
            [(_crd && inf_LayerType === void 0 ? (_reportPossibleCrUseOfinf_LayerType({
              error: Error()
            }), inf_LayerType) : inf_LayerType).Notify]: 8,
            [(_crd && inf_LayerType === void 0 ? (_reportPossibleCrUseOfinf_LayerType({
              error: Error()
            }), inf_LayerType) : inf_LayerType).Guide]: 9
          };
          this.NodeList = {
            [(_crd && inf_LayerType === void 0 ? (_reportPossibleCrUseOfinf_LayerType({
              error: Error()
            }), inf_LayerType) : inf_LayerType).Game]: this.game,
            [(_crd && inf_LayerType === void 0 ? (_reportPossibleCrUseOfinf_LayerType({
              error: Error()
            }), inf_LayerType) : inf_LayerType).UI]: this.ui,
            [(_crd && inf_LayerType === void 0 ? (_reportPossibleCrUseOfinf_LayerType({
              error: Error()
            }), inf_LayerType) : inf_LayerType).PopUp]: this.popup,
            [(_crd && inf_LayerType === void 0 ? (_reportPossibleCrUseOfinf_LayerType({
              error: Error()
            }), inf_LayerType) : inf_LayerType).Dialog]: this.dialog,
            [(_crd && inf_LayerType === void 0 ? (_reportPossibleCrUseOfinf_LayerType({
              error: Error()
            }), inf_LayerType) : inf_LayerType).DialogTip]: this.dialogTip,
            [(_crd && inf_LayerType === void 0 ? (_reportPossibleCrUseOfinf_LayerType({
              error: Error()
            }), inf_LayerType) : inf_LayerType).Alert]: this.alert,
            [(_crd && inf_LayerType === void 0 ? (_reportPossibleCrUseOfinf_LayerType({
              error: Error()
            }), inf_LayerType) : inf_LayerType).Animal]: this.dialogAnim,
            [(_crd && inf_LayerType === void 0 ? (_reportPossibleCrUseOfinf_LayerType({
              error: Error()
            }), inf_LayerType) : inf_LayerType).NetWindow]: this.netwindow,
            [(_crd && inf_LayerType === void 0 ? (_reportPossibleCrUseOfinf_LayerType({
              error: Error()
            }), inf_LayerType) : inf_LayerType).Notify]: this.notify,
            [(_crd && inf_LayerType === void 0 ? (_reportPossibleCrUseOfinf_LayerType({
              error: Error()
            }), inf_LayerType) : inf_LayerType).Guide]: this.guide
          };
          this.guiRoot.addChild(this.game);
          this.guiRoot.addChild(this.ui);
          this.guiRoot.addChild(this.popup);
          this.guiRoot.addChild(this.dialog);
          this.guiRoot.addChild(this.dialogTip);
          this.guiRoot.addChild(this.alert);
          this.guiRoot.addChild(this.dialogAnim);
          this.guiRoot.addChild(this.netwindow);
          this.guiRoot.addChild(this.notify);
          this.guiRoot.addChild(this.guide);
          this.updateZorder();
        }
        /** 更新节点位置 */


        updateZorder() {
          for (var layerType in this.NodeList) {
            if (Object.prototype.hasOwnProperty.call(this.NodeList, layerType)) {
              var node = this.NodeList[layerType];
              var zorder = this.ZorderConf[layerType];
              node.setSiblingIndex(zorder);
              node.layer = Layers.Enum.UI_2D;
            }
          }
        }
        /**
         * 初始化所有UI的配置对象
         * @param configs 配置对象
         */


        initUIConfig(configs) {
          this.configs = configs;
        }
        /**
         * 插入一条UIConfig配置项
         * @param UIID   要设置的界面id
         * @param config 要设置的配置
         */


        updateConfig(UIConfigList) {
          if (!UIConfigList) {
            return;
          }

          for (var UIID in UIConfigList) {
            if (Object.prototype.hasOwnProperty.call(UIConfigList, UIID)) {
              var config = UIConfigList[UIID];

              if (!this.configs) {
                this.configs = {};
              }

              this.configs[UIID] = config;
            }
          }
        }
        /**
         * 打开一个UIConfig配置的界面
         * @param uiId 配置的UIID
         * @param uiArgs 要传递给UI的数据
         * @param callbacks 回调函数 参照UICallbacks的定义
         * @param parent 自定义父节点
         * @param isClickSpanceClose 是否点击空白区域关闭 默认false，不关闭
         * @param isAutoRecover 是否自动释放加载的资源 默认false不释放
         * @returns 
         */


        open(uiId, uiArgs, callbacks, parent, isClickSpanceClose, isAutoRecover) {
          if (uiArgs === void 0) {
            uiArgs = null;
          }

          if (callbacks === void 0) {
            callbacks = null;
          }

          if (parent === void 0) {
            parent = null;
          }

          if (isClickSpanceClose === void 0) {
            isClickSpanceClose = false;
          }

          if (isAutoRecover === void 0) {
            isAutoRecover = false;
          }

          if (LayerManager.loadState == false) {
            warn("\u6253\u5F00\u7F16\u53F7\u4E3A\u3010" + uiId + "\u3011\u7684\u754C\u9762\u5931\u8D25");
            return;
          }

          var config = this.configs[uiId];

          if (config == null) {
            warn("\u6253\u5F00\u7F16\u53F7\u4E3A\u3010" + uiId + "\u3011\u7684\u754C\u9762\u5931\u8D25\uFF0C\u914D\u7F6E\u4FE1\u606F\u4E0D\u5B58\u5728");
            return;
          }

          var prefab = config["prefab"];
          console.log("\u6B63\u5728\u6253\u5F00\u7F16\u53F7\u4E3A\u3010" + uiId + "\u3011= " + prefab + " \u7684\u754C\u9762");

          if (parent) {
            switch (config.layer) {
              case (_crd && inf_LayerType === void 0 ? (_reportPossibleCrUseOfinf_LayerType({
                error: Error()
              }), inf_LayerType) : inf_LayerType).UI:
                //界面UI
                if (typeof parent.add == "function") {
                  parent.add(config, uiArgs, callbacks, isClickSpanceClose, isAutoRecover);
                }

              case (_crd && inf_LayerType === void 0 ? (_reportPossibleCrUseOfinf_LayerType({
                error: Error()
              }), inf_LayerType) : inf_LayerType).NetWindow:
                //网络弹窗:
                if (!this.has(uiId, parent) || this.isLoading(uiId, parent) == true) {
                  if (typeof parent.add == "function") {
                    parent.add(config, uiArgs, callbacks, isClickSpanceClose, isAutoRecover);
                  }
                }

                break;

              case (_crd && inf_LayerType === void 0 ? (_reportPossibleCrUseOfinf_LayerType({
                error: Error()
              }), inf_LayerType) : inf_LayerType).Notify:
                //吐司或通知
                if (typeof parent.show == "function") {
                  if (uiArgs && uiArgs["pos"] == "top") {
                    parent.show(config, uiArgs, this.getToastEffectByTop(callbacks), isAutoRecover);
                  } else {
                    parent.show(config, uiArgs, this.getToastEffectByCenter(callbacks), isAutoRecover);
                  }
                }

                break;

              default:
                if (typeof parent.add == "function") {
                  parent.add(config, uiArgs, callbacks || this.getPopCommonEffect(), isClickSpanceClose, isAutoRecover);
                } else {
                  warn("\u6253\u5F00\u7F16\u53F7\u4E3A\u3010" + uiId + "\u3011\u7684\u754C\u9762\u5931\u8D25\uFF0C\u51FD\u6570\u3010add\u3011\u4E0D\u5B58\u5728");
                }

                break;
            }

            return;
          }

          switch (config.layer) {
            case (_crd && inf_LayerType === void 0 ? (_reportPossibleCrUseOfinf_LayerType({
              error: Error()
            }), inf_LayerType) : inf_LayerType).UI:
              //界面UI
              this.ui.add(config, uiArgs, callbacks, isClickSpanceClose, isAutoRecover);
              break;

            case (_crd && inf_LayerType === void 0 ? (_reportPossibleCrUseOfinf_LayerType({
              error: Error()
            }), inf_LayerType) : inf_LayerType).PopUp:
              //弹窗
              this.popup.add(config, uiArgs, this.getPopCommonEffect(callbacks), isClickSpanceClose, isAutoRecover);
              break;

            case (_crd && inf_LayerType === void 0 ? (_reportPossibleCrUseOfinf_LayerType({
              error: Error()
            }), inf_LayerType) : inf_LayerType).Dialog:
              //对话框
              this.dialog.add(config, uiArgs, this.getPopCommonEffect(callbacks), isClickSpanceClose, isAutoRecover);
              break;

            case (_crd && inf_LayerType === void 0 ? (_reportPossibleCrUseOfinf_LayerType({
              error: Error()
            }), inf_LayerType) : inf_LayerType).DialogTip:
              //对话框附属弹窗
              this.dialogTip.add(config, uiArgs, this.getPopCommonEffect(callbacks), isClickSpanceClose, isAutoRecover);
              break;

            case (_crd && inf_LayerType === void 0 ? (_reportPossibleCrUseOfinf_LayerType({
              error: Error()
            }), inf_LayerType) : inf_LayerType).Alert:
              //系统弹窗
              this.alert.add(config, uiArgs, this.getPopCommonEffect(callbacks), isClickSpanceClose, isAutoRecover);
              break;

            case (_crd && inf_LayerType === void 0 ? (_reportPossibleCrUseOfinf_LayerType({
              error: Error()
            }), inf_LayerType) : inf_LayerType).NetWindow:
              //网络弹窗
              if (!this.has(uiId) && this.isLoading(uiId) == false) {
                this.netwindow.add(config, uiArgs, callbacks, isClickSpanceClose, isAutoRecover);
              }

              break;

            case (_crd && inf_LayerType === void 0 ? (_reportPossibleCrUseOfinf_LayerType({
              error: Error()
            }), inf_LayerType) : inf_LayerType).Notify:
              //吐司或通知
              if (uiArgs && uiArgs["pos"] == "top") {
                this.notify.show(config, uiArgs, this.getToastEffectByTop(callbacks), isAutoRecover);
              } else {
                this.notify.show(config, uiArgs, this.getToastEffectByCenter(callbacks), isAutoRecover);
              }

              break;

            default:
              warn("\u6253\u5F00\u7F16\u53F7\u4E3A\u3010" + uiId + "\u3011= " + prefab + " \u7684\u754C\u9762\u5931\u8D25\uFF0C\u7C7B\u578B\u914D\u7F6E\u9519\u8BEF");
              break;
          }
        }
        /**
         * 判断界面上是否存在该编号的UI
         * @param uiId UI编号
         * @param parent 自定义父节点
         * @returns boolean
         */


        has(uiId, parent) {
          if (parent === void 0) {
            parent = null;
          }

          if (LayerManager.loadState == false) {
            warn("\u5224\u65AD\u754C\u9762\u7F16\u53F7\u4E3A\u3010" + uiId + "\u3011\u7684\u754C\u9762\u5931\u8D25");
            return false;
          }

          var config = this.configs[uiId];

          if (config == null) {
            warn("\u7F16\u53F7\u4E3A\u3010" + uiId + "\u3011\u7684\u754C\u9762\u5931\u8D25\uFF0C\u914D\u7F6E\u4FE1\u606F\u4E0D\u5B58\u5728");
            return;
          }

          if (parent) {
            if (typeof parent.has == "function") {
              return parent.has(config.prefab);
            }

            return false;
          }

          var result = false;

          switch (config.layer) {
            case (_crd && inf_LayerType === void 0 ? (_reportPossibleCrUseOfinf_LayerType({
              error: Error()
            }), inf_LayerType) : inf_LayerType).UI:
              result = this.ui.has(config.prefab);
              break;

            case (_crd && inf_LayerType === void 0 ? (_reportPossibleCrUseOfinf_LayerType({
              error: Error()
            }), inf_LayerType) : inf_LayerType).PopUp:
              result = this.popup.has(config.prefab);
              break;

            case (_crd && inf_LayerType === void 0 ? (_reportPossibleCrUseOfinf_LayerType({
              error: Error()
            }), inf_LayerType) : inf_LayerType).Dialog:
              result = this.dialog.has(config.prefab);
              break;

            case (_crd && inf_LayerType === void 0 ? (_reportPossibleCrUseOfinf_LayerType({
              error: Error()
            }), inf_LayerType) : inf_LayerType).DialogTip:
              result = this.dialogTip.has(config.prefab);
              break;

            case (_crd && inf_LayerType === void 0 ? (_reportPossibleCrUseOfinf_LayerType({
              error: Error()
            }), inf_LayerType) : inf_LayerType).Alert:
              result = this.alert.has(config.prefab);
              break;

            case (_crd && inf_LayerType === void 0 ? (_reportPossibleCrUseOfinf_LayerType({
              error: Error()
            }), inf_LayerType) : inf_LayerType).NetWindow:
              //网络弹窗
              result = this.netwindow.has(config.prefab);
              break;
          }

          return result;
        }
        /**
         * 判断是否正在加载该编号的UI
         * @param uiId UI编号
         * @param parent 自定义父节点
         * @returns boolean
         */


        isLoading(uiId, parent) {
          if (parent === void 0) {
            parent = null;
          }

          if (LayerManager.loadState == false) {
            warn("\u5224\u65AD\u754C\u9762\u7F16\u53F7\u4E3A\u3010" + uiId + "\u3011\u7684\u754C\u9762\u5931\u8D25");
            return false;
          }

          var config = this.configs[uiId];

          if (config == null) {
            warn("\u7F16\u53F7\u4E3A\u3010" + uiId + "\u3011\u7684\u754C\u9762\u5931\u8D25\uFF0C\u914D\u7F6E\u4FE1\u606F\u4E0D\u5B58\u5728");
            return;
          }

          if (parent) {
            if (typeof parent.isLoading == "function") {
              return parent.isLoading(config.prefab);
            }

            return false;
          }

          var result = false;

          switch (config.layer) {
            case (_crd && inf_LayerType === void 0 ? (_reportPossibleCrUseOfinf_LayerType({
              error: Error()
            }), inf_LayerType) : inf_LayerType).UI:
              result = this.ui.isLoading(config.prefab);
              break;

            case (_crd && inf_LayerType === void 0 ? (_reportPossibleCrUseOfinf_LayerType({
              error: Error()
            }), inf_LayerType) : inf_LayerType).PopUp:
              result = this.popup.isLoading(config.prefab);
              break;

            case (_crd && inf_LayerType === void 0 ? (_reportPossibleCrUseOfinf_LayerType({
              error: Error()
            }), inf_LayerType) : inf_LayerType).Dialog:
              result = this.dialog.isLoading(config.prefab);
              break;

            case (_crd && inf_LayerType === void 0 ? (_reportPossibleCrUseOfinf_LayerType({
              error: Error()
            }), inf_LayerType) : inf_LayerType).DialogTip:
              result = this.dialogTip.isLoading(config.prefab);
              break;

            case (_crd && inf_LayerType === void 0 ? (_reportPossibleCrUseOfinf_LayerType({
              error: Error()
            }), inf_LayerType) : inf_LayerType).Alert:
              result = this.alert.isLoading(config.prefab);
              break;

            case (_crd && inf_LayerType === void 0 ? (_reportPossibleCrUseOfinf_LayerType({
              error: Error()
            }), inf_LayerType) : inf_LayerType).NetWindow:
              //网络弹窗
              result = this.netwindow.isLoading(config.prefab);
              break;
          }

          return result;
        }
        /**
         * 根据编号移除UI
         * @param uiId 
         * @param isDestroy 
         * @param parent 自定义父节点
         * @returns 
         */


        remove(uiId, isDestroy, parent) {
          if (isDestroy === void 0) {
            isDestroy = true;
          }

          if (parent === void 0) {
            parent = null;
          }

          if (LayerManager.loadState == false) {
            warn("\u6839\u636E\u7F16\u53F7\u79FB\u9664UI \u7F16\u53F7\u4E3A\u3010" + uiId + "\u3011\u5931\u8D25");
            return;
          }

          var config = this.configs[uiId];

          if (config == null) {
            warn("\u5220\u9664\u7F16\u53F7\u4E3A\u3010" + uiId + "\u3011\u7684\u754C\u9762\u5931\u8D25\uFF0C\u914D\u7F6E\u4FE1\u606F\u4E0D\u5B58\u5728");
            return;
          }

          if (parent) {
            if (config.layer == (_crd && inf_LayerType === void 0 ? (_reportPossibleCrUseOfinf_LayerType({
              error: Error()
            }), inf_LayerType) : inf_LayerType).NetWindow) {
              if (typeof parent.removeAll == "function") {
                return parent.removeAll(config.prefab);
              }
            } else {
              if (typeof parent.remove == "function") {
                return parent.remove(config.prefab);
              }
            }

            return;
          }

          switch (config.layer) {
            case (_crd && inf_LayerType === void 0 ? (_reportPossibleCrUseOfinf_LayerType({
              error: Error()
            }), inf_LayerType) : inf_LayerType).UI:
              this.ui.remove(config.prefab, isDestroy);
              break;

            case (_crd && inf_LayerType === void 0 ? (_reportPossibleCrUseOfinf_LayerType({
              error: Error()
            }), inf_LayerType) : inf_LayerType).PopUp:
              this.popup.remove(config.prefab, isDestroy);
              break;

            case (_crd && inf_LayerType === void 0 ? (_reportPossibleCrUseOfinf_LayerType({
              error: Error()
            }), inf_LayerType) : inf_LayerType).Dialog:
              this.dialog.remove(config.prefab, isDestroy);
              break;

            case (_crd && inf_LayerType === void 0 ? (_reportPossibleCrUseOfinf_LayerType({
              error: Error()
            }), inf_LayerType) : inf_LayerType).DialogTip:
              this.dialogTip.remove(config.prefab, isDestroy);
              break;

            case (_crd && inf_LayerType === void 0 ? (_reportPossibleCrUseOfinf_LayerType({
              error: Error()
            }), inf_LayerType) : inf_LayerType).Alert:
              this.alert.remove(config.prefab, isDestroy);
              break;

            case (_crd && inf_LayerType === void 0 ? (_reportPossibleCrUseOfinf_LayerType({
              error: Error()
            }), inf_LayerType) : inf_LayerType).NetWindow:
              this.netwindow.removeAll(config.prefab, isDestroy);
              break;
          }
        }
        /**
         * 删除一个通过this.add框架添加进来的节点
         * @param node 要删除的节点
         * @param isDestroy 是否销毁
         * @returns 
         */


        removeByNode(node, isDestroy) {
          if (isDestroy === void 0) {
            isDestroy = false;
          }

          if (node instanceof Node) {
            var comp = node.getComponent(_crd && DelegateComponent === void 0 ? (_reportPossibleCrUseOfDelegateComponent({
              error: Error()
            }), DelegateComponent) : DelegateComponent);

            if (comp && comp.viewParams) {
              node.parent.removeByUuid(comp.viewParams.uuid, isDestroy);
            } else {
              // warn(`当前删除的node不是通过界面管理器添加到舞台上`);
              node.destroy();
            }

            return;
          }
        }
        /**
         * 清除根节点下所有界面
         * @param layerType 界面类型 null 则清空所有
         * @param isDestroy 是否销毁
         * @param parent 自定义父节点
         */


        clear(layerType, isDestroy, parent) {
          if (layerType === void 0) {
            layerType = null;
          }

          if (isDestroy === void 0) {
            isDestroy = true;
          }

          if (parent === void 0) {
            parent = null;
          }

          if (!this.root) {
            warn("Layermanager\u8FD8\u6CA1\u6709\u521D\u59CB\u5316");
            return;
          }

          if (isValid(this.root) == false) {
            warn("Layermanager\u8FD8\u6CA1\u6709\u521D\u59CB\u5316");
            this.root = null;
            return;
          }

          if (parent) {
            if (typeof parent.clear == "function") {
              parent.clear(isDestroy);
            }

            return;
          }

          switch (layerType) {
            case (_crd && inf_LayerType === void 0 ? (_reportPossibleCrUseOfinf_LayerType({
              error: Error()
            }), inf_LayerType) : inf_LayerType).UI:
              this.ui.clear(isDestroy);
              break;

            case (_crd && inf_LayerType === void 0 ? (_reportPossibleCrUseOfinf_LayerType({
              error: Error()
            }), inf_LayerType) : inf_LayerType).PopUp:
              this.popup.clear(isDestroy);
              break;

            case (_crd && inf_LayerType === void 0 ? (_reportPossibleCrUseOfinf_LayerType({
              error: Error()
            }), inf_LayerType) : inf_LayerType).Dialog:
              this.dialog.clear(isDestroy);
              break;

            case (_crd && inf_LayerType === void 0 ? (_reportPossibleCrUseOfinf_LayerType({
              error: Error()
            }), inf_LayerType) : inf_LayerType).DialogTip:
              this.dialogTip.clear(isDestroy);
              break;

            case (_crd && inf_LayerType === void 0 ? (_reportPossibleCrUseOfinf_LayerType({
              error: Error()
            }), inf_LayerType) : inf_LayerType).Alert:
              this.alert.clear(isDestroy);
              break;

            case (_crd && inf_LayerType === void 0 ? (_reportPossibleCrUseOfinf_LayerType({
              error: Error()
            }), inf_LayerType) : inf_LayerType).NetWindow:
              this.netwindow.clear(isDestroy);
              break;

            default:
              this.initGuiNode();
              break;
          }

          this.updateZorder();
        }
        /**
         * 除该节点之外都清除
         * @param layerType 界面类型 null 则清空所有
         * @param isIncludeNetWindow 是否包含网络加载页面 默认false 不包含
         * @param parent 自定义父节点
         */


        clearOther(layerType, isIncludeNetWindow) {
          if (layerType === void 0) {
            layerType = null;
          }

          if (isIncludeNetWindow === void 0) {
            isIncludeNetWindow = false;
          }

          if (!this.root) {
            warn("Layermanager\u8FD8\u6CA1\u6709\u521D\u59CB\u5316");
            return;
          }

          if (isValid(this.root) == false) {
            warn("Layermanager\u8FD8\u6CA1\u6709\u521D\u59CB\u5316");
            this.root = null;
            return;
          }

          var allTypes = [{
            type: (_crd && inf_LayerType === void 0 ? (_reportPossibleCrUseOfinf_LayerType({
              error: Error()
            }), inf_LayerType) : inf_LayerType).UI,
            node: this.ui
          }, {
            type: (_crd && inf_LayerType === void 0 ? (_reportPossibleCrUseOfinf_LayerType({
              error: Error()
            }), inf_LayerType) : inf_LayerType).PopUp,
            node: this.popup
          }, {
            type: (_crd && inf_LayerType === void 0 ? (_reportPossibleCrUseOfinf_LayerType({
              error: Error()
            }), inf_LayerType) : inf_LayerType).Dialog,
            node: this.dialog
          }, {
            type: (_crd && inf_LayerType === void 0 ? (_reportPossibleCrUseOfinf_LayerType({
              error: Error()
            }), inf_LayerType) : inf_LayerType).DialogTip,
            node: this.dialogTip
          }, {
            type: (_crd && inf_LayerType === void 0 ? (_reportPossibleCrUseOfinf_LayerType({
              error: Error()
            }), inf_LayerType) : inf_LayerType).Alert,
            node: this.alert
          } // { type: inf_LayerType.NetWindow, node: this.netwindow },
          ];

          if (isIncludeNetWindow == true) {
            allTypes.push({
              type: (_crd && inf_LayerType === void 0 ? (_reportPossibleCrUseOfinf_LayerType({
                error: Error()
              }), inf_LayerType) : inf_LayerType).NetWindow,
              node: this.netwindow
            });
          }

          for (var i = allTypes.length - 1; i >= 0; i--) {
            if (layerType != allTypes[i].type) {
              allTypes[i].node.toDestoryNotNotify();
            }
          }

          this.updateZorder();
        }
        /**
         * 创建一个节点
         * @param name 节点名称
         * @returns 
         */


        create_node(name) {
          var node = new Node(name);
          node.layer = Layers.Enum.UI_2D;
          var w = node.addComponent(Widget);
          w.isAlignLeft = w.isAlignRight = w.isAlignTop = w.isAlignBottom = true;
          w.left = w.right = w.top = w.bottom = 0;
          w.alignMode = 2;
          w.enabled = true;
          return node;
        }
        /** 获得动画节点 */


        get AnimNode() {
          return this.dialogAnim;
        }
        /**
         * 加载状态判断
         * @returns boolean
         */


        get loadState() {
          if (!this.root) {
            warn("isTrueload = false,\u6839\u8282\u70B9\u672A\u521D\u59CB\u5316");
            return false;
          }

          if (isValid(this.root) == false) {
            warn("isValid(this.root) = false,\u6839\u8282\u70B9\u672A\u521D\u59CB\u5316");
            return false;
          }

          if (!this.configs) {
            warn("isTrueload = false,\u914D\u7F6E\u4FE1\u606F\u672A\u521D\u59CB\u5316");
            return false;
          }

          return true;
        }
        /** 吐司动画（居中）*/


        getToastEffectByCenter(callbacks) {
          var newCallbacks = {
            // 节点添加动画
            onAdded: (node, params) => {
              node.setScale(0.85, 0.85, 0.85);
              node.setPosition(0, 0, 0);
              tween(node).to(0.15, {
                scale: new Vec3(1, 1, 1)
              }, {
                easing: 'sineIn'
              }).delay(1).parallel(tween().to(0.2, {
                position: new Vec3(0, 80, 0)
              }), tween().to(0.2, {
                easing: 'sineOut'
              })).call(() => {
                node.destroy();
              }).start();
            }
          };

          if (callbacks) {
            if (callbacks && callbacks.onAdded) {
              var onAdded = callbacks.onAdded; // @ts-ignore

              callbacks.onAdded = (node, params) => {
                onAdded(node, params); // @ts-ignore

                newCallbacks.onAdded(node, params);
              };
            }

            return callbacks;
          }

          return newCallbacks;
        }
        /** 吐司动画（居上）*/


        getToastEffectByTop(callbacks) {
          var newCallbacks = {
            // 节点添加动画
            onAdded: (node, params) => {
              //将要设置的高度
              var widget = node.getComponent(Widget);

              if (!widget) {
                widget = node.addComponent(Widget);
              }

              widget.isAlignLeft = widget.isAlignRight = widget.isAlignTop = true;
              widget.isAlignBottom = false;
              widget.left = widget.right = 0;
              widget.top = -50;
              widget.alignMode = 2;
              widget.enabled = true;
              widget.updateAlignment();
              tween(node).parallel(tween().to(0.15, {
                easing: 'sineIn'
              }), tween().by(0.15, {
                position: new Vec3(0, -140, 0)
              }), tween().to(0.15, {
                easing: 'sineOut'
              })).delay(2).parallel(tween().by(0.2, {
                position: new Vec3(0, 70, 0)
              }), tween().to(0.2, {
                easing: 'sineOut'
              })).call(() => {
                node.destroy();
              }).start();
            }
          };

          if (callbacks) {
            if (callbacks && callbacks.onAdded) {
              var onAdded = callbacks.onAdded; // @ts-ignore

              callbacks.onAdded = (node, params) => {
                onAdded(node, params); // @ts-ignore

                newCallbacks.onAdded(node, params);
              };
            }

            return callbacks;
          }

          return newCallbacks;
        }
        /** 弹窗动画 */


        getPopCommonEffect(callbacks) {
          var newCallbacks = {
            // 节点添加动画
            onAdded: (node, params) => {
              setTimeout(() => {
                if (!node || node.isValid == false) {
                  return;
                }

                var outScale = new Vec3(1, 1, 1);
                var minSpance = 0.15;
                node.getScale(outScale);
                node.setScale(outScale.x - minSpance, outScale.y - minSpance, outScale.z - minSpance);
                tween(node).parallel(tween().to(0.15, {
                  scale: outScale
                }), tween().to(0.15, {
                  easing: 'sineIn'
                })).call(() => {
                  node.setScale(outScale);
                }).start();
              }, 10);
            },
            // 节点删除动画
            onBeforeRemove: (node, next) => {
              setTimeout(() => {
                if (!node || node.isValid == false) {
                  return;
                }

                var outScale = new Vec3(1, 1, 1);
                var minSpance = 0.2;
                node.getScale(outScale);
                tween(node).parallel(tween().to(0.1, {
                  scale: new Vec3(outScale.x - minSpance, outScale.y - minSpance, outScale.z - minSpance)
                }), tween().to(0.1, {
                  easing: 'sineOut'
                })).call(next).start();
              }, 0);
            }
          };

          if (callbacks) {
            if (callbacks && callbacks.onAdded) {
              var onAdded = callbacks.onAdded; // @ts-ignore

              callbacks.onAdded = (node, params) => {
                onAdded(node, params); // @ts-ignore

                newCallbacks.onAdded(node, params);
              };
            }

            if (callbacks && callbacks.onBeforeRemove) {
              var onBeforeRemove = callbacks.onBeforeRemove;

              callbacks.onBeforeRemove = (node, params) => {
                onBeforeRemove(node, params); // @ts-ignore

                newCallbacks.onBeforeRemove(node, params);
              };
            }

            return callbacks;
          }

          return newCallbacks;
        }
        /** 震屏效果 */


        shakeScreen() {
          Tween.stopAllByTarget(this.root);
          tween(this.root).sequence(tween(this.root).to(0.03, {
            position: new Vec3(5, 7)
          }), tween(this.root).to(0.03, {
            position: new Vec3(-6, 7)
          }), tween(this.root).to(0.03, {
            position: new Vec3(-13, 3)
          }), tween(this.root).to(0.03, {
            position: new Vec3(3, -6)
          }), tween(this.root).to(0.03, {
            position: new Vec3(-5, 5)
          }), tween(this.root).to(0.03, {
            position: new Vec3(2, -8)
          }), tween(this.root).to(0.03, {
            position: new Vec3(-8, -10)
          }), tween(this.root).to(0.03, {
            position: new Vec3(3, 10)
          }), tween(this.root).to(0.03, {
            position: new Vec3(0, 0)
          })).start();
        }

      };
      _LayerManager._instance = null;

      _export("LayerManager", LayerManager = _LayerManager.instance);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=422c0593e1c6440efc9707a8248c470802e062d4.js.map