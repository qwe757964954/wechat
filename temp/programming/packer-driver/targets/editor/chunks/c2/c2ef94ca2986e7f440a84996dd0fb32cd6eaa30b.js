System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Node, Prefab, Sprite, UITransform, Vec3, _decorator, GCache, AppEvent, ClientInfo, GConstants, GameRes, GameResPreLoad, UIConfigData, Utils, LayerManager, EventManager, BaseComponent, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _crd, ccclass, property, menu, runSceneCtr;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfGCache(extras) {
    _reporterNs.report("GCache", "../../cache/GCache", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAppEvent(extras) {
    _reporterNs.report("AppEvent", "../../config/AppEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfClientInfo(extras) {
    _reporterNs.report("ClientInfo", "../../config/GameConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGConstants(extras) {
    _reporterNs.report("GConstants", "../../config/GameConstant", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameRes(extras) {
    _reporterNs.report("GameRes", "../../config/GameRes", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameResPreLoad(extras) {
    _reporterNs.report("GameResPreLoad", "../../config/GameRes", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIConfigData(extras) {
    _reporterNs.report("UIConfigData", "../../config/UIConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfinf_PkgLoaderTaskAdd(extras) {
    _reporterNs.report("inf_PkgLoaderTaskAdd", "../../framework/InterfaceDefines", _context.meta, extras);
  }

  function _reportPossibleCrUseOfinf_ResLoader(extras) {
    _reporterNs.report("inf_ResLoader", "../../framework/InterfaceDefines", _context.meta, extras);
  }

  function _reportPossibleCrUseOfinf_SpineAniCreate(extras) {
    _reporterNs.report("inf_SpineAniCreate", "../../framework/InterfaceDefines", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUtils(extras) {
    _reporterNs.report("Utils", "../../framework/Utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLayerManager(extras) {
    _reporterNs.report("LayerManager", "../../framework/layer/LayerManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventManager(extras) {
    _reporterNs.report("EventManager", "../../framework/manager/EventManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../framework/vc/BaseComponent", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Node = _cc.Node;
      Prefab = _cc.Prefab;
      Sprite = _cc.Sprite;
      UITransform = _cc.UITransform;
      Vec3 = _cc.Vec3;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      GCache = _unresolved_2.GCache;
    }, function (_unresolved_3) {
      AppEvent = _unresolved_3.AppEvent;
    }, function (_unresolved_4) {
      ClientInfo = _unresolved_4.ClientInfo;
    }, function (_unresolved_5) {
      GConstants = _unresolved_5.GConstants;
    }, function (_unresolved_6) {
      GameRes = _unresolved_6.GameRes;
      GameResPreLoad = _unresolved_6.GameResPreLoad;
    }, function (_unresolved_7) {
      UIConfigData = _unresolved_7.UIConfigData;
    }, function (_unresolved_8) {
      Utils = _unresolved_8.Utils;
    }, function (_unresolved_9) {
      LayerManager = _unresolved_9.LayerManager;
    }, function (_unresolved_10) {
      EventManager = _unresolved_10.EventManager;
    }, function (_unresolved_11) {
      BaseComponent = _unresolved_11.BaseComponent;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "98ae21b5m1BW6Mb9txxuQ55", "runSceneCtr", undefined);

      __checkObsolete__(['EventTouch', 'Node', 'Prefab', 'Sprite', 'UITransform', 'Vec3', '_decorator']);

      ({
        ccclass,
        property,
        menu
      } = _decorator);
      /**
       * Name = runSceneCtr
       * URL = db://assets/scenes/run/runSceneCtr.ts
       * Time = Tue Apr 26 2022 17:01:25 GMT+0800 (中国标准时间)
       * Author = xueya
       *
       * Life: onLoad-->onEnable->start->update->lateUpdate->onDisable->onDestroy
       */

      _export("runSceneCtr", runSceneCtr = (_dec = ccclass('runSceneCtr'), _dec2 = menu('scenes/runSceneCtr'), _dec3 = property({
        tooltip: "UI底图",
        type: Sprite
      }), _dec4 = property({
        tooltip: "UI根节点",
        type: Node
      }), _dec5 = property({
        tooltip: "UI根节点",
        type: Node
      }), _dec6 = property({
        tooltip: "3D摄像头节点",
        type: Node
      }), _dec7 = property({
        tooltip: "游戏debug节点",
        type: Node
      }), _dec8 = property({
        tooltip: "加载节点",
        type: Node
      }), _dec9 = property({
        tooltip: "点击最上层",
        type: Node
      }), _dec(_class = _dec2(_class = (_class2 = class runSceneCtr extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "bg", _descriptor, this);

          _initializerDefineProperty(this, "gui", _descriptor2, this);

          _initializerDefineProperty(this, "root3D", _descriptor3, this);

          _initializerDefineProperty(this, "nodeCamera3D", _descriptor4, this);

          _initializerDefineProperty(this, "debugNode", _descriptor5, this);

          _initializerDefineProperty(this, "loading", _descriptor6, this);

          _initializerDefineProperty(this, "aniClick", _descriptor7, this);

          this._handlerLoadPackage = null;
        }

        onInitModuleEvent() {
          //分包加载任务
          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).SYS_PACKAGE_LOAD, this.packageLoad); // //生命周期变化
          // this.addModelListener(AppEvent.SYS_APP_LIFE, this.appChangeLife)

          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).VIEW_UI_3D_ADD, this.view3DAdd);
          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).VIEW_UI_3D_REMOVE, this.view3DRemove);
        }

        onLoad() {
          this.initCamera3D(); // this.bgSkel.enabled = true;

          this.regTouchEvent(); //通知:sys周期变化

          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).SYS_APP_LIFE, (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
            error: Error()
          }), GConstants) : GConstants).AppRunLife.RunScence);
          (_crd && LayerManager === void 0 ? (_reportPossibleCrUseOfLayerManager({
            error: Error()
          }), LayerManager) : LayerManager).initUIConfig(_crd && UIConfigData === void 0 ? (_reportPossibleCrUseOfUIConfigData({
            error: Error()
          }), UIConfigData) : UIConfigData);
          (_crd && LayerManager === void 0 ? (_reportPossibleCrUseOfLayerManager({
            error: Error()
          }), LayerManager) : LayerManager).reload(this.gui);
          this.loading.active = true;
          this.reloadDebugView(); //加载进入登录

          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).LOGIN_GOTO_SHOW, {
            state: "first_login"
          });
        }

        start() {}

        initCamera3D() {// //物理像素
          // let windowSize = screen.windowSize;
          // if (windowSize.width / windowSize.height < 1.55) {
          // 	this.nodeCamera3D.setPosition(0, 138.7, 111.6);
          // 	this.nodeCamera3D.setRotationFromEuler(-53, 0, 0);
          // } else {
          // 	this.nodeCamera3D.setPosition(0, 106.4, 105.0);
          // 	this.nodeCamera3D.setRotationFromEuler(-48.3, 0, 0);
          // }
        }
        /** 加载debug界面 */


        reloadDebugView() {
          this.debugNode.removeAllChildren();

          if ((_crd && ClientInfo === void 0 ? (_reportPossibleCrUseOfClientInfo({
            error: Error()
          }), ClientInfo) : ClientInfo).DEBUG) {
            let self = this;
            let param = {
              bundle: (_crd && GameRes === void 0 ? (_reportPossibleCrUseOfGameRes({
                error: Error()
              }), GameRes) : GameRes).Prefab_DebugWindow.bundle,
              path: (_crd && GameRes === void 0 ? (_reportPossibleCrUseOfGameRes({
                error: Error()
              }), GameRes) : GameRes).Prefab_DebugWindow.path,
              resType: Prefab,
              callFunc: (debugNode, key) => {
                if (debugNode && self.debugNode && self.debugNode.isValid == true) {
                  self.debugNode.addChild(debugNode);
                }
              }
            };
            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
              error: Error()
            }), AppEvent) : AppEvent).SYS_RELOADD_LOCAL, param);
          }
        }
        /** 分包加载 */


        packageLoad(event, taskID, callbackFunc) {
          this.loading.active = false;
          let self = this;
          let startCallFunc = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).handler(this, this.onStartCallback);
          let updateCallFunc = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).handler(this, this.onUpdateLoadingCallback);

          let endCallFunc = function (_taskID) {
            if (_taskID == (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
              error: Error()
            }), GConstants) : GConstants).PkgLoaderTaskList.Login) {
              (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
                error: Error()
              }), GCache) : GCache).firstRunLoadSuccess = true;
            }

            self.stopScheduler(self._handlerLoadPackage);
            self._handlerLoadPackage = self.addScheduler(1, () => {
              self.stopScheduler(self._handlerLoadPackage);

              if (self.loading && self.loading.isValid == true) {
                self.loading.active = false;
              }

              if (callbackFunc) {
                callbackFunc();
              }
            });
          };

          let param = {
            taskID: taskID,
            taskList: (_crd && GameResPreLoad === void 0 ? (_reportPossibleCrUseOfGameResPreLoad({
              error: Error()
            }), GameResPreLoad) : GameResPreLoad)[taskID],
            startCallFunc: startCallFunc,
            updateCallFunc: updateCallFunc,
            endCallFunc: endCallFunc
          };
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).SYS_PACKAGE_LOAD_TASK_ADD, param);
        } // /** 生命周期变化 */
        // appChangeLife(event, life) {
        // 	if (life == GConstants.AppRunLife.Hall_Opened || life == GConstants.AppRunLife.Game_Opened) {
        // 		if (this.bgSkel.enabled == false) {
        // 			return;
        // 		}
        // 		this.bgSkel.enabled = false;
        // 	} else {
        // 		if (this.bgSkel.enabled == true) {
        // 			return;
        // 		}
        // 		this.bgSkel.enabled = true;
        // 	}
        // }


        onStartCallback(taskID) {
          if (!this.node || this.node.isValid == false) {
            return;
          }

          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).SYS_PACKAGE_LOAD_SHOW, 0, taskID);
          this.loading.active = true;
        }

        onUpdateLoadingCallback(taskID, progress) {
          if (!this.node || this.node.isValid == false) {
            return;
          }

          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).SYS_PACKAGE_LOAD_SHOW, progress, taskID);
        }
        /** 注册定义事件 */


        regTouchEvent() {
          if (!this.node) {
            return;
          }

          this.aniClick.on(Node.EventType.TOUCH_START, this.onTouchtStart, this, true);
        }
        /** 点击效果 */


        onTouchtStart(event) {
          let touchUIPos = event.touch.getUILocation();
          let outPos = new Vec3();
          this.aniClick.getComponent(UITransform).convertToNodeSpaceAR(new Vec3(touchUIPos.x, touchUIPos.y, 0), outPos);
          let roleAni = {
            parentNode: this.aniClick,
            resConf: (_crd && GameRes === void 0 ? (_reportPossibleCrUseOfGameRes({
              error: Error()
            }), GameRes) : GameRes).Spine_ClickAni,
            aniName: "dianji_ani",
            trackIndex: 0,
            isLoop: false,
            toPos: outPos
          };
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).SYS_ANI_PLAY, roleAni);
        }
        /** 添加3D界面 */


        view3DAdd(event, node) {
          this.print("view3DAdd:");

          if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).isNotNull(node)) {
            this.root3D.addChild(node);
          }
        }
        /** 移除3D界面 */


        view3DRemove(event) {
          this.print("view3DRemove:");
          this.root3D.removeAllChildren();
        } //销毁


        onDestroy() {
          if (this.aniClick) {
            this.aniClick.off(Node.EventType.TOUCH_START, this.onTouchtStart, this, true);
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "bg", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "gui", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "root3D", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "nodeCamera3D", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "debugNode", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "loading", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "aniClick", [_dec9], {
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
//# sourceMappingURL=c2ef94ca2986e7f440a84996dd0fb32cd6eaa30b.js.map