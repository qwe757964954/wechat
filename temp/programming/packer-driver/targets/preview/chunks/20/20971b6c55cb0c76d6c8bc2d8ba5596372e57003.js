System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Label, Node, ProgressBar, Vec3, _decorator, GCache, AppEvent, AppSound, GConstants, EventManager, BaseComponent, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _crd, ccclass, property, PkgLoadComponent;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfGCache(extras) {
    _reporterNs.report("GCache", "../../cache/GCache", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAppEvent(extras) {
    _reporterNs.report("AppEvent", "../../config/AppEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAppSound(extras) {
    _reporterNs.report("AppSound", "../../config/AppSound", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGConstants(extras) {
    _reporterNs.report("GConstants", "../../config/GameConstant", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventManager(extras) {
    _reporterNs.report("EventManager", "../manager/EventManager", _context.meta, extras);
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
      Label = _cc.Label;
      Node = _cc.Node;
      ProgressBar = _cc.ProgressBar;
      Vec3 = _cc.Vec3;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      GCache = _unresolved_2.GCache;
    }, function (_unresolved_3) {
      AppEvent = _unresolved_3.AppEvent;
    }, function (_unresolved_4) {
      AppSound = _unresolved_4.AppSound;
    }, function (_unresolved_5) {
      GConstants = _unresolved_5.GConstants;
    }, function (_unresolved_6) {
      EventManager = _unresolved_6.EventManager;
    }, function (_unresolved_7) {
      BaseComponent = _unresolved_7.BaseComponent;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1e2b0snP+dKNr7ObuB89vez", "PkgLoadComponent", undefined);

      __checkObsolete__(['Label', 'Node', 'ProgressBar', 'Vec3', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Name = PkgLoadComponent
       * URL = db://assets/framework/vc/PkgLoadComponent.ts
       * Time = Thu Feb 02 2023 17:50:10 GMT+0800 (中国标准时间)
       * Author = xueya
       *
       * Life: onLoad-->onEnable->start->update->lateUpdate->onDisable->onDestroy
       */

      _export("PkgLoadComponent", PkgLoadComponent = (_dec = ccclass('PkgLoadComponent'), _dec2 = property({
        tooltip: "一类加载父节点",
        type: Node
      }), _dec3 = property({
        tooltip: "二类加载父节点",
        type: Node
      }), _dec4 = property({
        tooltip: "进度条组件",
        type: ProgressBar
      }), _dec5 = property({
        tooltip: "进度条Bar节点",
        type: Node
      }), _dec6 = property({
        tooltip: "进度条动画节点",
        type: Node
      }), _dec7 = property({
        tooltip: "进度条动画结束节点",
        type: Node
      }), _dec8 = property({
        tooltip: "提示文本Label",
        type: Label
      }), _dec9 = property({
        tooltip: "进度条组件",
        type: ProgressBar
      }), _dec10 = property({
        tooltip: "进度条Bar节点",
        type: Node
      }), _dec11 = property({
        tooltip: "进度条动画节点",
        type: Node
      }), _dec12 = property({
        tooltip: "进度条动画结束节点",
        type: Node
      }), _dec13 = property({
        tooltip: "提示文本节点",
        type: Label
      }), _dec14 = property({
        tooltip: "提示进度文本Label",
        type: Label
      }), _dec(_class = (_class2 = class PkgLoadComponent extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "normalParentNode", _descriptor, this);

          _initializerDefineProperty(this, "gameParentNode", _descriptor2, this);

          _initializerDefineProperty(this, "normalProgressNode", _descriptor3, this);

          _initializerDefineProperty(this, "normalProgressBarNode", _descriptor4, this);

          _initializerDefineProperty(this, "normalProgressAniNode", _descriptor5, this);

          _initializerDefineProperty(this, "normalAniEndNode", _descriptor6, this);

          _initializerDefineProperty(this, "normalTipLabel", _descriptor7, this);

          _initializerDefineProperty(this, "gameProgressNode", _descriptor8, this);

          _initializerDefineProperty(this, "gameProgressBarNode", _descriptor9, this);

          _initializerDefineProperty(this, "gameProgressAniNode", _descriptor10, this);

          _initializerDefineProperty(this, "gameAniEndNode", _descriptor11, this);

          _initializerDefineProperty(this, "gameTipLabel", _descriptor12, this);

          _initializerDefineProperty(this, "gameTipProgress", _descriptor13, this);

          this._initAniPosNormal = null;
          this._initAniPosGame = null;
          this._allWidthNormal = 0;
          this._allWidthGame = 0;
          this._chooseType = null;
          this._isCanClickCancle = false;
          this._isLoad = false;
          this._currowLoadTask = null;
        }

        onInitModuleEvent() {
          /** 更新加载的回调 */
          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).SYS_PACKAGE_LOAD_SHOW, this.updateLoading);
          /** 取消任务的回调 */

          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).SYS_PACKAGE_LOAD_TASK_CANCLE_SURE, this.onCallbackCancle);
        }

        onLoad() {
          this._isLoad == true;
          this.node.active = false;
          this._initAniPosNormal = new Vec3(this.normalProgressAniNode.position.x, this.normalProgressAniNode.position.y, this.normalProgressAniNode.position.z);
          this._allWidthNormal = this.normalAniEndNode.position.x - this.normalProgressAniNode.position.x;
          this._initAniPosGame = new Vec3(this.gameProgressAniNode.position.x, this.gameProgressAniNode.position.y, this.gameProgressAniNode.position.z);
          this._allWidthGame = this.gameAniEndNode.position.x - this.gameProgressAniNode.position.x;
          this.initUI(this._chooseType);
        }

        /** 外部传递参数 */
        setTaskID(taskID) {
          this._chooseType = taskID;

          if (this._isLoad) {
            this.initUI(taskID);
          }
        }
        /** 初始化UI */


        initUI(taskID) {
          if (taskID === void 0) {
            taskID = null;
          }

          this.gameParentNode.children.forEach((child, index) => {
            if (child.name != "btnCancle") {
              child.active = true;
            } else {
              child.active = false;
            }
          });
          this.normalParentNode.children.forEach((child, index) => {
            child.active = true;
          });

          if (taskID != null) {
            this.checkIsReconn(taskID);
            this.gameParentNode.active = taskID == (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
              error: Error()
            }), GConstants) : GConstants).PkgLoaderTaskList.Game;
            this.normalParentNode.active = taskID != (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
              error: Error()
            }), GConstants) : GConstants).PkgLoaderTaskList.Game;
          } else {
            this.gameParentNode.active = false;
            this.normalParentNode.active = false;
          }
        }

        start() {}

        //初始化加载
        initLoading(taskID) {
          this._currowLoadTask = taskID;

          if (taskID == (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
            error: Error()
          }), GConstants) : GConstants).PkgLoaderTaskList.Game) {
            this.checkIsReconn(taskID);
            this.gameProgressNode.progress = 0;
            this.gameProgressAniNode.position = new Vec3(this._initAniPosGame.x, this._initAniPosGame.y, this._initAniPosGame.z);
          } else {
            this.normalProgressNode.progress = 0;
            this.normalProgressAniNode.position = new Vec3(this._initAniPosNormal.x, this._initAniPosNormal.y, this._initAniPosNormal.z);
          }

          this.initUI(taskID);
          this.node.active = true; //关闭正在加载中

          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).SYS_CLOSE_NETLOADING);
        }
        /** 检测重连游戏去除关闭按钮显示 */


        checkIsReconn(taskID) {
          if (taskID != (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
            error: Error()
          }), GConstants) : GConstants).PkgLoaderTaskList.Game) {
            return;
          } //重连游戏不可关闭界面


          var nodeBtnCancle = this.gameParentNode.getChildByName("btnCancle");

          if ((_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
            error: Error()
          }), GCache) : GCache) && (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
            error: Error()
          }), GCache) : GCache).SelectGame) {
            var intoGameData = (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
              error: Error()
            }), GCache) : GCache).SelectGame.getIntoRoomData();

            if (intoGameData && intoGameData.isReconn == true) {
              nodeBtnCancle.active = false;
            } else {
              nodeBtnCancle.active = true;
            }
          } else {
            nodeBtnCancle.active = true;
          }
        }
        /** 更新加载进度 progress:0~100 */


        updateLoading(event, progress, taskID) {
          // console.log("更新加载进度====>", progress, taskID)
          if (this._currowLoadTask == null) {
            this.initLoading(taskID);
            this._isCanClickCancle = true;
          }

          if (progress <= 0) {
            progress = 0;
          } else if (progress >= 100) {
            progress = 100;
            this._isCanClickCancle = false;
            this._currowLoadTask = null;
          }

          if (taskID == (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
            error: Error()
          }), GConstants) : GConstants).PkgLoaderTaskList.Game) {
            var x = this._allWidthGame * progress / 100;
            this.gameProgressNode.progress = progress / 100;
            this.gameProgressAniNode.position = new Vec3(this._initAniPosGame.x + x, this._initAniPosGame.y, this._initAniPosGame.x);
            this.gameTipProgress.string = "(" + Math.floor(progress) + "/100)";
          } else {
            var _x = this._allWidthNormal * progress / 100;

            this.normalProgressNode.progress = progress / 100;
            this.normalProgressAniNode.position = new Vec3(this._initAniPosNormal.x + _x, this._initAniPosNormal.y, this._initAniPosNormal.x);
          }
        }
        /** 点击了取消 */


        onClickCancle(event) {
          if (this._isCanClickCancle == false) {
            return;
          }

          console.log("点击了取消=====>");
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
          }), AppEvent) : AppEvent).SYS_PACKAGE_LOAD_TASK_CANCLE, this._currowLoadTask);
        }
        /** 取消加载任务的回调 */


        onCallbackCancle(event, taskID) {
          this._isCanClickCancle = false;
          this._currowLoadTask = null;
          this.node.active = false;
        } //销毁


        onDestroy() {}

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "normalParentNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "gameParentNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "normalProgressNode", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "normalProgressBarNode", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "normalProgressAniNode", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "normalAniEndNode", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "normalTipLabel", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "gameProgressNode", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "gameProgressBarNode", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "gameProgressAniNode", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "gameAniEndNode", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "gameTipLabel", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "gameTipProgress", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=20971b6c55cb0c76d6c8bc2d8ba5596372e57003.js.map