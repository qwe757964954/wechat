System.register(["__unresolved_0", "cc", "cc/env", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Node, setDisplayStats, _decorator, DEBUG, AppEvent, APPState, GameConfig, GConstants, UIConfigData, LayerManager, EventManager, SchedulerManager, Network, BaseComponent, Platform, GlobalHeadCmdBinding, GPBWriteAndRead, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, menu, mainSceneCtr;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfAppEvent(extras) {
    _reporterNs.report("AppEvent", "../../config/AppEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAPPState(extras) {
    _reporterNs.report("APPState", "../../config/GameConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameConfig(extras) {
    _reporterNs.report("GameConfig", "../../config/GameConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGConstants(extras) {
    _reporterNs.report("GConstants", "../../config/GameConstant", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIConfigData(extras) {
    _reporterNs.report("UIConfigData", "../../config/UIConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLayerManager(extras) {
    _reporterNs.report("LayerManager", "../../framework/layer/LayerManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventManager(extras) {
    _reporterNs.report("EventManager", "../../framework/manager/EventManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSchedulerManager(extras) {
    _reporterNs.report("SchedulerManager", "../../framework/manager/SchedulerManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNetwork(extras) {
    _reporterNs.report("Network", "../../framework/network/NetState", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../framework/vc/BaseComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlatform(extras) {
    _reporterNs.report("Platform", "../../platform/Platform", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGlobalHeadCmdBinding(extras) {
    _reporterNs.report("GlobalHeadCmdBinding", "../../proj/gnet/GlobalCMD", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGPBWriteAndRead(extras) {
    _reporterNs.report("GPBWriteAndRead", "../../proj/gnet/GPBWriteAndRead", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Node = _cc.Node;
      setDisplayStats = _cc.setDisplayStats;
      _decorator = _cc._decorator;
    }, function (_ccEnv) {
      DEBUG = _ccEnv.DEBUG;
    }, function (_unresolved_2) {
      AppEvent = _unresolved_2.AppEvent;
    }, function (_unresolved_3) {
      APPState = _unresolved_3.APPState;
      GameConfig = _unresolved_3.GameConfig;
    }, function (_unresolved_4) {
      GConstants = _unresolved_4.GConstants;
    }, function (_unresolved_5) {
      UIConfigData = _unresolved_5.UIConfigData;
    }, function (_unresolved_6) {
      LayerManager = _unresolved_6.LayerManager;
    }, function (_unresolved_7) {
      EventManager = _unresolved_7.EventManager;
    }, function (_unresolved_8) {
      SchedulerManager = _unresolved_8.SchedulerManager;
    }, function (_unresolved_9) {
      Network = _unresolved_9.Network;
    }, function (_unresolved_10) {
      BaseComponent = _unresolved_10.BaseComponent;
    }, function (_unresolved_11) {
      Platform = _unresolved_11.Platform;
    }, function (_unresolved_12) {
      GlobalHeadCmdBinding = _unresolved_12.GlobalHeadCmdBinding;
    }, function (_unresolved_13) {
      GPBWriteAndRead = _unresolved_13.GPBWriteAndRead;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f3dfdca23VK1KzAbpHHLfpG", "mainSceneCtr", undefined);

      __checkObsolete__(['Node', 'setDisplayStats', '_decorator']);

      ({
        ccclass,
        property,
        menu
      } = _decorator);
      /**
       * Name = mainSceneCtr
       * URL = db://assets/launcher/mainSceneCtr.ts
       * Time = Sat Apr 02 2022 17:39:10 GMT+0800 (中国标准时间)
       * Author = xueya
       *
       * Life: onLoad-->onEnable->start->update->lateUpdate->onDisable->onDestroy
       */

      _export("mainSceneCtr", mainSceneCtr = (_dec = ccclass('mainSceneCtr'), _dec2 = menu('scenes/mainSceneCtr'), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec(_class = _dec2(_class = (_class2 = class mainSceneCtr extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "gui", _descriptor, this);

          _initializerDefineProperty(this, "bg", _descriptor2, this);

          _initializerDefineProperty(this, "logo", _descriptor3, this);

          this.nextScene = void 0;
        }

        onLoad() {
          (_crd && SchedulerManager === void 0 ? (_reportPossibleCrUseOfSchedulerManager({
            error: Error()
          }), SchedulerManager) : SchedulerManager).unscheduleAll(); //通知:sys周期变化

          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).SYS_APP_LIFE, (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
            error: Error()
          }), GConstants) : GConstants).AppRunLife.MainScence);
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).SYS_SHOW_OR_HIDE, (_crd && APPState === void 0 ? (_reportPossibleCrUseOfAPPState({
            error: Error()
          }), APPState) : APPState).SHOW);
          this.bg.active = true;
          this.logo.active = true;
          this.initBase();
          this.nextScene = "runScene"; //预加载
          // director.preloadScene(this.nextScene);
        }

        start() {
          (_crd && LayerManager === void 0 ? (_reportPossibleCrUseOfLayerManager({
            error: Error()
          }), LayerManager) : LayerManager).reload(this.gui);
          this.enterGameScene();
        }

        //销毁
        onDestroy() {}

        //进入场景
        enterGameScene() {
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).VIEW_SCENE_TO_CHANGE, {
            next: this.nextScene,
            success: () => {},
            fail: name => {
              console.log(`进入场景${name}失败`);
            }
          });
        }

        //初始化基础配置
        initBase() {
          /**设置FPS是否显示 */
          if (DEBUG) {
            setDisplayStats(false);
          }

          ;
          (_crd && Platform === void 0 ? (_reportPossibleCrUseOfPlatform({
            error: Error()
          }), Platform) : Platform).initBase();
          (_crd && Network === void 0 ? (_reportPossibleCrUseOfNetwork({
            error: Error()
          }), Network) : Network).instance;
          (_crd && GameConfig === void 0 ? (_reportPossibleCrUseOfGameConfig({
            error: Error()
          }), GameConfig) : GameConfig).instance;
          (_crd && LayerManager === void 0 ? (_reportPossibleCrUseOfLayerManager({
            error: Error()
          }), LayerManager) : LayerManager).initUIConfig(_crd && UIConfigData === void 0 ? (_reportPossibleCrUseOfUIConfigData({
            error: Error()
          }), UIConfigData) : UIConfigData);
          (_crd && GPBWriteAndRead === void 0 ? (_reportPossibleCrUseOfGPBWriteAndRead({
            error: Error()
          }), GPBWriteAndRead) : GPBWriteAndRead).Write.initCommonCmd(_crd && GlobalHeadCmdBinding === void 0 ? (_reportPossibleCrUseOfGlobalHeadCmdBinding({
            error: Error()
          }), GlobalHeadCmdBinding) : GlobalHeadCmdBinding, true);
          (_crd && GPBWriteAndRead === void 0 ? (_reportPossibleCrUseOfGPBWriteAndRead({
            error: Error()
          }), GPBWriteAndRead) : GPBWriteAndRead).Read.initCommonCmd(_crd && GlobalHeadCmdBinding === void 0 ? (_reportPossibleCrUseOfGlobalHeadCmdBinding({
            error: Error()
          }), GlobalHeadCmdBinding) : GlobalHeadCmdBinding, true);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "gui", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "bg", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "logo", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=b60572de2775f7ebfb85e7a7847561cedb1efe4c.js.map