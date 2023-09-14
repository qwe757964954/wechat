System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Label, Node, Toggle, _decorator, GCache, AppEvent, AppSound, ClientInfo, StoreKey, ReportConfig, UIID, LocalStorage, Utils, AudioManager, EventManager, BaseComponent, Platform, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _crd, ccclass, property, menu, settingPrefabCtr;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfGCache(extras) {
    _reporterNs.report("GCache", "../../../cache/GCache", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAppEvent(extras) {
    _reporterNs.report("AppEvent", "../../../config/AppEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAppSound(extras) {
    _reporterNs.report("AppSound", "../../../config/AppSound", _context.meta, extras);
  }

  function _reportPossibleCrUseOfClientInfo(extras) {
    _reporterNs.report("ClientInfo", "../../../config/GameConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStoreKey(extras) {
    _reporterNs.report("StoreKey", "../../../config/GameConstant", _context.meta, extras);
  }

  function _reportPossibleCrUseOfReportConfig(extras) {
    _reporterNs.report("ReportConfig", "../../../config/ReportConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIID(extras) {
    _reporterNs.report("UIID", "../../../config/UIConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLocalStorage(extras) {
    _reporterNs.report("LocalStorage", "../../../framework/LocalStorage", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUtils(extras) {
    _reporterNs.report("Utils", "../../../framework/Utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioManager(extras) {
    _reporterNs.report("AudioManager", "../../../framework/manager/AudioManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventManager(extras) {
    _reporterNs.report("EventManager", "../../../framework/manager/EventManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../../framework/vc/BaseComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlatform(extras) {
    _reporterNs.report("Platform", "../../../platform/Platform", _context.meta, extras);
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
      Toggle = _cc.Toggle;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      GCache = _unresolved_2.GCache;
    }, function (_unresolved_3) {
      AppEvent = _unresolved_3.AppEvent;
    }, function (_unresolved_4) {
      AppSound = _unresolved_4.AppSound;
    }, function (_unresolved_5) {
      ClientInfo = _unresolved_5.ClientInfo;
    }, function (_unresolved_6) {
      StoreKey = _unresolved_6.StoreKey;
    }, function (_unresolved_7) {
      ReportConfig = _unresolved_7.ReportConfig;
    }, function (_unresolved_8) {
      UIID = _unresolved_8.UIID;
    }, function (_unresolved_9) {
      LocalStorage = _unresolved_9.LocalStorage;
    }, function (_unresolved_10) {
      Utils = _unresolved_10.Utils;
    }, function (_unresolved_11) {
      AudioManager = _unresolved_11.AudioManager;
    }, function (_unresolved_12) {
      EventManager = _unresolved_12.EventManager;
    }, function (_unresolved_13) {
      BaseComponent = _unresolved_13.BaseComponent;
    }, function (_unresolved_14) {
      Platform = _unresolved_14.Platform;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e6438sxhM1Gc4L7Hy2S19RN", "settingPrefabCtr", undefined);

      __checkObsolete__(['EventTouch', 'Label', 'Node', 'Toggle', '_decorator']);

      ({
        ccclass,
        property,
        menu
      } = _decorator);
      /**
       * Name = settingPrefabCtr
       * URL = db://assets/package/hall/scripts/settingPrefabCtr.ts
       * Time = Thu Sep 08 2022 10:03:30 GMT+0800 (中国标准时间)
       * Author = Tomoe
       *
       * Life: onLoad-->onEnable->start->update->lateUpdate->onDisable->onDestroy
       */

      _export("settingPrefabCtr", settingPrefabCtr = (_dec = ccclass('settingPrefabCtr'), _dec2 = menu('prefab/hall/settingPrefabCtr'), _dec3 = property({
        tooltip: "账号",
        type: Label
      }), _dec4 = property({
        tooltip: "游戏设置按钮未选中背景",
        type: Node
      }), _dec5 = property({
        tooltip: "版本信息按钮未选中背景",
        type: Node
      }), _dec6 = property({
        tooltip: "设置面板",
        type: Node
      }), _dec7 = property({
        tooltip: "版本信息面板",
        type: Node
      }), _dec8 = property({
        tooltip: "当前版本信息",
        type: Label
      }), _dec9 = property({
        tooltip: "最新版本信息",
        type: Label
      }), _dec10 = property({
        tooltip: "音效开关按钮",
        type: Node
      }), _dec11 = property({
        tooltip: "音乐开关按钮",
        type: Node
      }), _dec12 = property({
        tooltip: "震动开关按钮",
        type: Node
      }), _dec(_class = _dec2(_class = (_class2 = class settingPrefabCtr extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "accountLabel", _descriptor, this);

          _initializerDefineProperty(this, "setUnselect", _descriptor2, this);

          _initializerDefineProperty(this, "versionUnselect", _descriptor3, this);

          _initializerDefineProperty(this, "settingView", _descriptor4, this);

          _initializerDefineProperty(this, "versionView", _descriptor5, this);

          _initializerDefineProperty(this, "currentVersion", _descriptor6, this);

          _initializerDefineProperty(this, "lastVersion", _descriptor7, this);

          _initializerDefineProperty(this, "effectBtn", _descriptor8, this);

          _initializerDefineProperty(this, "musicBtn", _descriptor9, this);

          _initializerDefineProperty(this, "shockBtn", _descriptor10, this);

          this.isEffect = true;
          this.isMusic = true;
          this.isShock = 1;
        }

        //开启 1 开启 2 关闭
        onLoad() {
          this.initView();
        }

        start() {}

        initView() {
          this.isEffect = (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).getInstance().getSwitchEffect();
          this.isMusic = (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).getInstance().getSwitchMusic();
          var shock = (_crd && LocalStorage === void 0 ? (_reportPossibleCrUseOfLocalStorage({
            error: Error()
          }), LocalStorage) : LocalStorage).get((_crd && StoreKey === void 0 ? (_reportPossibleCrUseOfStoreKey({
            error: Error()
          }), StoreKey) : StoreKey).SYS_Shock);
          shock = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).number_valueOf(shock);
          shock = shock > 1 ? 2 : 1;
          this.isShock = shock;
          console.log("StoreKey.SYS_Shock:初始化:", this.isShock);
          this.showSetView();
          this.showVersion();
          this.onSetClick();
        }
        /**
         * 显示版本信息
         */


        showVersion() {
          this.currentVersion.string = "\u5F53\u524D\u7248\u672C:  v" + (_crd && ClientInfo === void 0 ? (_reportPossibleCrUseOfClientInfo({
            error: Error()
          }), ClientInfo) : ClientInfo).AppVer + "(" + String((_crd && ClientInfo === void 0 ? (_reportPossibleCrUseOfClientInfo({
            error: Error()
          }), ClientInfo) : ClientInfo).HallVer) + ")"; //当前版本

          this.lastVersion.node.active = false;
        }
        /**
         * 显示设置界面
         */


        showSetView() {
          //渲染用戶
          this.accountLabel.string = String((_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
            error: Error()
          }), GCache) : GCache).User.getUserMid());
          console.log("StoreKey.SYS_Shock:渲染设置页面:", this.isShock);
          var shockIsCheck = this.isShock == 1 ? true : false;
          setTimeout(() => {
            this.effectBtn.getComponent(Toggle).isChecked = this.isEffect;
            this.musicBtn.getComponent(Toggle).isChecked = this.isMusic;
            this.shockBtn.getComponent(Toggle).isChecked = shockIsCheck;
          }, 0);
        }
        /**
         * 保存设置信息
         */


        saveSetting() {
          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).getInstance().setSwitchEffect(this.isEffect);
          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).getInstance().setSwitchMusic(this.isMusic);
          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).getInstance().save();
          console.log("StoreKey.SYS_Shock:savesetting:", this.isShock);
          (_crd && LocalStorage === void 0 ? (_reportPossibleCrUseOfLocalStorage({
            error: Error()
          }), LocalStorage) : LocalStorage).set((_crd && StoreKey === void 0 ? (_reportPossibleCrUseOfStoreKey({
            error: Error()
          }), StoreKey) : StoreKey).SYS_Shock, this.isShock);
        }
        /**
         * 点击游戏设置按钮
         * @param event 
         */


        onSetClick(event) {
          if (event === void 0) {
            event = null;
          }

          console.log("点击事件响应===>>>>游戏设置");

          if (event) {
            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
              error: Error()
            }), AppEvent) : AppEvent).SYS_PLAY_EFFECT, (_crd && AppSound === void 0 ? (_reportPossibleCrUseOfAppSound({
              error: Error()
            }), AppSound) : AppSound).CommClick);
          }

          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).REPORT_CLIENT_CLICK, {
            eventID: (_crd && ReportConfig === void 0 ? (_reportPossibleCrUseOfReportConfig({
              error: Error()
            }), ReportConfig) : ReportConfig).setting_1
          });
          this.setUnselect.active = false;
          this.versionUnselect.active = true;
          this.settingView.active = true;
          this.versionView.active = false;
        }
        /**
         * 点击版本信息按钮
         * @param event 
         */


        onVersionClick(event) {
          console.log("点击事件响应===>>>>版本信息");
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).SYS_PLAY_EFFECT, (_crd && AppSound === void 0 ? (_reportPossibleCrUseOfAppSound({
            error: Error()
          }), AppSound) : AppSound).CommClick);
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).REPORT_CLIENT_CLICK, {
            eventID: (_crd && ReportConfig === void 0 ? (_reportPossibleCrUseOfReportConfig({
              error: Error()
            }), ReportConfig) : ReportConfig).setting_2
          });
          this.setUnselect.active = true;
          this.versionUnselect.active = false;
          this.settingView.active = false;
          this.versionView.active = true;
        }
        /**
         * 点击音效按钮
         * @param event 
         */


        onEffctClick(event) {
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).SYS_PLAY_EFFECT, (_crd && AppSound === void 0 ? (_reportPossibleCrUseOfAppSound({
            error: Error()
          }), AppSound) : AppSound).CommClick);
          var node = event.target;
          var isClose = node.getChildByName("Checkmark").active;

          if (isClose == true) {
            console.log("点击事件响应===>>>>音效-关");
            this.isEffect = false;
          } else {
            console.log("点击事件响应===>>>>音效-开");
            this.isEffect = true;
          }

          this.saveSetting();
        }
        /**
         * 点击音乐按钮
         * @param event 
         */


        onMusicClick(event) {
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).SYS_PLAY_EFFECT, (_crd && AppSound === void 0 ? (_reportPossibleCrUseOfAppSound({
            error: Error()
          }), AppSound) : AppSound).CommClick);
          var node = event.target;
          var isClose = node.getChildByName("Checkmark").active;

          if (isClose == true) {
            console.log("点击事件响应===>>>>音乐-关");
            this.isMusic = false;
          } else {
            console.log("点击事件响应===>>>>音乐-开");
            this.isMusic = true;
          }

          this.saveSetting();
        }
        /**
         * 点击震动按钮
         * @param event 
         */


        onShockClick(event) {
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).SYS_PLAY_EFFECT, (_crd && AppSound === void 0 ? (_reportPossibleCrUseOfAppSound({
            error: Error()
          }), AppSound) : AppSound).CommClick);
          var node = event.target;
          var isClose = node.getChildByName("Checkmark").active;

          if (isClose == true) {
            console.log("点击事件响应===>>>>震动-关");
            this.isShock = 2;
          } else {
            console.log("点击事件响应===>>>>震动-开");
            this.isShock = 1;
          }

          this.saveSetting();
        }
        /**
         * 点击玩法规则
         * @param event 
         */


        onRuleClick(event) {
          console.log("点击事件响应===>>>>玩法规则");
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).SYS_PLAY_EFFECT, (_crd && AppSound === void 0 ? (_reportPossibleCrUseOfAppSound({
            error: Error()
          }), AppSound) : AppSound).CommClick);
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).VIEW_UI_OPEN, (_crd && UIID === void 0 ? (_reportPossibleCrUseOfUIID({
            error: Error()
          }), UIID) : UIID).PictureTabDialog, "玩法规则");
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).REPORT_CLIENT_CLICK, {
            eventID: (_crd && ReportConfig === void 0 ? (_reportPossibleCrUseOfReportConfig({
              error: Error()
            }), ReportConfig) : ReportConfig).setting_7
          });
        }
        /**
         * 点击隐私政策
         * @param event 
         */


        onPrivateClick(event) {
          console.log("点击事件响应===>>>>隐私政策");
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).SYS_PLAY_EFFECT, (_crd && AppSound === void 0 ? (_reportPossibleCrUseOfAppSound({
            error: Error()
          }), AppSound) : AppSound).CommClick);
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).VIEW_UI_OPEN, (_crd && UIID === void 0 ? (_reportPossibleCrUseOfUIID({
            error: Error()
          }), UIID) : UIID).UserAgreePrivate, {
            type: 2,
            isHaveTag: false
          });
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).REPORT_CLIENT_CLICK, {
            eventID: (_crd && ReportConfig === void 0 ? (_reportPossibleCrUseOfReportConfig({
              error: Error()
            }), ReportConfig) : ReportConfig).setting_4
          });
        }
        /**
         * 点击服务协议
         * @param event 
         */


        onServiceClick(event) {
          console.log("点击事件响应===>>>>服务协议");
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).SYS_PLAY_EFFECT, (_crd && AppSound === void 0 ? (_reportPossibleCrUseOfAppSound({
            error: Error()
          }), AppSound) : AppSound).CommClick);
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).VIEW_UI_OPEN, (_crd && UIID === void 0 ? (_reportPossibleCrUseOfUIID({
            error: Error()
          }), UIID) : UIID).UserAgreePrivate, {
            type: 1,
            isHaveTag: false
          });
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).REPORT_CLIENT_CLICK, {
            eventID: (_crd && ReportConfig === void 0 ? (_reportPossibleCrUseOfReportConfig({
              error: Error()
            }), ReportConfig) : ReportConfig).setting_5
          });
        }
        /**
         * 点击货币声明
         * @param event 
         */


        onMoneyClick(event) {
          console.log("点击事件响应===>>>>货币声明");
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).SYS_PLAY_EFFECT, (_crd && AppSound === void 0 ? (_reportPossibleCrUseOfAppSound({
            error: Error()
          }), AppSound) : AppSound).CommClick);
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).VIEW_UI_OPEN, (_crd && UIID === void 0 ? (_reportPossibleCrUseOfUIID({
            error: Error()
          }), UIID) : UIID).PictureDialog, "货币声明");
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).REPORT_CLIENT_CLICK, {
            eventID: (_crd && ReportConfig === void 0 ? (_reportPossibleCrUseOfReportConfig({
              error: Error()
            }), ReportConfig) : ReportConfig).setting_3
          });
        }
        /**
         * 点击意见反馈
         * @param event 
         */


        onOpinionClick(event) {
          console.log("点击事件响应===>>>>意见反馈");
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).SYS_PLAY_EFFECT, (_crd && AppSound === void 0 ? (_reportPossibleCrUseOfAppSound({
            error: Error()
          }), AppSound) : AppSound).CommClick);
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).REPORT_CLIENT_CLICK, {
            eventID: (_crd && ReportConfig === void 0 ? (_reportPossibleCrUseOfReportConfig({
              error: Error()
            }), ReportConfig) : ReportConfig).setting_6
          });
          (_crd && Platform === void 0 ? (_reportPossibleCrUseOfPlatform({
            error: Error()
          }), Platform) : Platform).openCustomerServiceConversation();
        }
        /**
         * 点击关闭界面
         * @param event 
         */


        onCloseClick(event) {
          console.log("点击事件响应===>>>>关闭");
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).SYS_PLAY_EFFECT, (_crd && AppSound === void 0 ? (_reportPossibleCrUseOfAppSound({
            error: Error()
          }), AppSound) : AppSound).CommClick);
          this.node.destroy();
        } //销毁


        onDestroy() {}

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "accountLabel", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "setUnselect", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "versionUnselect", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "settingView", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "versionView", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "currentVersion", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "lastVersion", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "effectBtn", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "musicBtn", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "shockBtn", [_dec12], {
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
//# sourceMappingURL=271a891d14550da7b5c5e7c24b9b6c9595e69f81.js.map