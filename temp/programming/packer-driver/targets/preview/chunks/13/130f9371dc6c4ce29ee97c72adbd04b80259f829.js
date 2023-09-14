System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Enum, ResolutionPolicy, screen, sys, UITransform, Vec3, view, _decorator, AppEvent, GameConfig, SystemConf, BaseComponent, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, menu, property, AdaptiveModel, GUI;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfAppEvent(extras) {
    _reporterNs.report("AppEvent", "../../config/AppEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameConfig(extras) {
    _reporterNs.report("GameConfig", "../../config/GameConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSystemConf(extras) {
    _reporterNs.report("SystemConf", "../../config/GameConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../vc/BaseComponent", _context.meta, extras);
  }

  _export("AdaptiveModel", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Enum = _cc.Enum;
      ResolutionPolicy = _cc.ResolutionPolicy;
      screen = _cc.screen;
      sys = _cc.sys;
      UITransform = _cc.UITransform;
      Vec3 = _cc.Vec3;
      view = _cc.view;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      AppEvent = _unresolved_2.AppEvent;
    }, function (_unresolved_3) {
      GameConfig = _unresolved_3.GameConfig;
      SystemConf = _unresolved_3.SystemConf;
    }, function (_unresolved_4) {
      BaseComponent = _unresolved_4.BaseComponent;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9461cd/dGNEGK5I5J24xY6L", "GUI", undefined);

      __checkObsolete__(['Camera', 'Enum', 'ResolutionPolicy', 'screen', 'sys', 'UITransform', 'Vec3', 'view', '_decorator']);

      ({
        ccclass,
        menu,
        property
      } = _decorator);
      /** 适配模式 */

      (function (AdaptiveModel) {
        AdaptiveModel[AdaptiveModel["None"] = 0] = "None";
        AdaptiveModel[AdaptiveModel["GUI"] = 1] = "GUI";
        AdaptiveModel[AdaptiveModel["Background"] = 2] = "Background";
        AdaptiveModel[AdaptiveModel["Size"] = 3] = "Size";
        AdaptiveModel[AdaptiveModel["Scale"] = 4] = "Scale";
      })(AdaptiveModel || _export("AdaptiveModel", AdaptiveModel = {}));

      /** 引擎对外接口 */
      _export("GUI", GUI = (_dec = ccclass('GUI'), _dec2 = property({
        tooltip: "适配模式\nGUI:以根节点方式适配，大小与设计分辨率一致\nBackground:以背景图片方式适配，大小与设计分辨率一致\nSize:改变大小达到适配 \nScale:改变缩放达到适配",
        type: Enum(AdaptiveModel)
      }), _dec(_class = (_class2 = class GUI extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "adaptiveModel", _descriptor, this);

          this.isStartAdaptive = true;
          this.sysScaleNum = 1;
          this.nodeScaleNum = 1;
          this._resoulType = ResolutionPolicy.SHOW_ALL;
          this._width = 0;
          this._height = 0;
          this._finalWidth = 0;
          this._finalHeight = 0;
          this._finalScaleX = 1;
          this._finalScaleY = 1;
        }

        onLoad() {
          this.init();
        }
        /** 初始化引擎 */


        init() {
          this.transform = this.getComponent(UITransform);

          if (this.transform) {
            this._width = this.transform.width;
            this._height = this.transform.height;
          }

          this.adaptiveDesignResolution();
          this.refreshWindow();
        }
        /**override 初始化模块事件，子类需重写该方法 */


        onInitModuleEvent() {
          //适配设计分辨率
          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).SYS_WINDOW_ADAPTIVE, this.adaptiveDesignResolution); //刷新大小

          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).SYS_WINDOW_CHANGE, this.refreshWindow);
        }
        /** 适配设计分辨率 */


        adaptiveDesignResolution() {
          //设计分辨率
          var dr = (_crd && SystemConf === void 0 ? (_reportPossibleCrUseOfSystemConf({
            error: Error()
          }), SystemConf) : SystemConf).DEV_SIZE || {
            width: 1280,
            height: 720
          };

          if (dr.width >= dr.height) {
            this.Design_Portrait = false;
          } else {
            this.Design_Portrait = true;
          } //物理像素


          var s = screen.windowSize;
          var rw = s.width;
          var rh = s.height;
          this._finalWidth = dr.width;
          this._finalHeight = dr.height;

          if (rw / rh >= 1) {
            //窗口横屏显示
            this.Window_Portrait = false; // console.log("窗口横屏显示");
          } else {
            //窗口竖屏显示
            this.Window_Portrait = true; // console.log("窗口竖屏显示");
          }

          if (this.Window_Portrait == true) {
            if (this.Design_Portrait == true) {
              if (dr.width / rw >= dr.height / rh) {
                //以屏幕宽度适配优先
                this.sysScaleNum = dr.width / rw;
                this._resoulType = ResolutionPolicy.FIXED_WIDTH;
              } else {
                this.sysScaleNum = dr.height / rh;
                this._resoulType = ResolutionPolicy.FIXED_HEIGHT;
              }
            } else {
              if (dr.width / rw >= dr.height / rh) {
                //以屏幕宽度适配优先
                this.sysScaleNum = dr.width / rw;
                this._resoulType = ResolutionPolicy.FIXED_WIDTH;
              } else {
                this.sysScaleNum = dr.height / rh;
                this._resoulType = ResolutionPolicy.FIXED_HEIGHT;
              }
            } //非浏览器使用


            if (sys.platform != sys.Platform.DESKTOP_BROWSER && sys.platform != sys.Platform.MOBILE_BROWSER) {
              this.sysScaleNum = dr.width / rw;
              this._resoulType = ResolutionPolicy.FIXED_WIDTH;
            }
          } else {
            if (this.Design_Portrait == true) {
              if (dr.width / rw >= dr.height / rh) {
                //以屏幕宽度适配优先
                this.sysScaleNum = dr.height / rh;
                this._resoulType = ResolutionPolicy.FIXED_HEIGHT;
              } else {
                this.sysScaleNum = dr.width / rw;
                this._resoulType = ResolutionPolicy.FIXED_WIDTH;
              }
            } else {
              if (dr.width / rw >= dr.height / rh) {
                //以屏幕宽度适配优先
                this.sysScaleNum = dr.height / rh;
                this._resoulType = ResolutionPolicy.FIXED_HEIGHT;
              } else {
                this.sysScaleNum = dr.width / rw;
                this._resoulType = ResolutionPolicy.FIXED_WIDTH;
              }
            } //非浏览器使用


            if (sys.platform != sys.Platform.DESKTOP_BROWSER && sys.platform != sys.Platform.MOBILE_BROWSER) {
              this.sysScaleNum = dr.height / rh;
              this._resoulType = ResolutionPolicy.FIXED_HEIGHT;
            }
          }

          var tLog = "\u8BBE\u8BA1\u662F:" + (this.Design_Portrait == false ? "横屏" : "竖屏") + ",\u7A97\u53E3\u662F:" + (this.Window_Portrait == false ? "横屏" : "竖屏");
          tLog = tLog + (" \u9002\u914D\u7B56\u7565: " + (this._resoulType == ResolutionPolicy.FIXED_WIDTH ? "宽度" : this._resoulType == ResolutionPolicy.FIXED_HEIGHT ? "高度" : this._resoulType) + "\u4F18\u5148");
          tLog = tLog + (" \u7CFB\u7EDF\u7F29\u653E\u56E0\u5B50:" + this.sysScaleNum);
          tLog = tLog + (" \u5C4F\u5E55\u5BBD\u9AD8: width:" + s.width + " height:" + s.height); // console.log("GUI:适配： " + tLog)

          if (this._resoulType == ResolutionPolicy.FIXED_WIDTH) {
            this._finalWidth = dr.width;
            this._finalHeight = this._finalWidth * s.height / s.width;

            if (this.Design_Portrait == false && this.Window_Portrait == true) {
              this._finalHeight = dr.height;
            }
          } else if (this._resoulType == ResolutionPolicy.FIXED_HEIGHT) {
            this._finalHeight = dr.height;
            this._finalWidth = this._finalHeight * s.width / s.height;

            if (this.Design_Portrait == true && this.Window_Portrait == false) {
              this._finalWidth = dr.width;
            }
          }

          this._finalScaleX = dr.width / this._finalWidth;
          this._finalScaleY = dr.height / this._finalHeight; // console.log("GUI:适配宽高： " + `width:${this._finalWidth} height:${this._finalHeight}`)
          // console.log("GUI:适配系数： " + `width:${this._finalScaleX} height:${this._finalScaleY}`)
          //设置设计分辨率

          if (this.isStartAdaptive == false) {
            view.setDesignResolutionSize(dr.width, dr.height, ResolutionPolicy.FIXED_HEIGHT);
            (_crd && GameConfig === void 0 ? (_reportPossibleCrUseOfGameConfig({
              error: Error()
            }), GameConfig) : GameConfig).instance.ResolutionPolicyType = ResolutionPolicy.FIXED_HEIGHT;
            return;
          }

          (_crd && GameConfig === void 0 ? (_reportPossibleCrUseOfGameConfig({
            error: Error()
          }), GameConfig) : GameConfig).instance.ResolutionPolicyType = this._resoulType;
          view.setDesignResolutionSize(this._finalWidth, this._finalHeight, this._resoulType);
        }
        /** 刷新窗口大小 */


        refreshWindow(event) {
          if (event === void 0) {
            event = null;
          }

          if (this.isStartAdaptive == false) {
            return;
          } // console.log("刷新节点大小:" + this.adaptiveModel)


          switch (this.adaptiveModel) {
            case AdaptiveModel.GUI:
              this.adaptiveGui();
              break;

            case AdaptiveModel.Background:
              this.adaptiveBackground();
              break;

            case AdaptiveModel.Size:
              this.adaptiveSize();
              break;

            case AdaptiveModel.Scale:
              this.adaptiveScale();
              break;

            default:
              break;
          }
        }
        /** 根节点适配 */


        adaptiveGui() {
          if (!this.transform) {
            return;
          }

          this.transform.width = this._finalWidth;
          this.transform.height = this._finalHeight;
        }
        /** 背景图片适配 */


        adaptiveBackground() {
          if (!this.transform) {
            return;
          }

          this.transform.width = this._finalWidth;
          this.transform.height = this._finalHeight;
        }
        /** 大小适配 */


        adaptiveSize() {
          if (!this.transform) {
            return;
          }

          var realWidth = this._width * this._finalScaleX;
          var realHeight = this._height * this._finalScaleY; // console.log(`初始宽高:${this._width}${this._height} 结果宽高: ${realWidth}${realHeight}`)

          this.transform.width = realWidth;
          this.transform.height = realHeight;
        }
        /** 缩放适配 */


        adaptiveScale() {
          this.node.scale = new Vec3(this._finalScaleX, this._finalScaleY, this.node.scale.z);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "adaptiveModel", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return AdaptiveModel.None;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=130f9371dc6c4ce29ee97c72adbd04b80259f829.js.map