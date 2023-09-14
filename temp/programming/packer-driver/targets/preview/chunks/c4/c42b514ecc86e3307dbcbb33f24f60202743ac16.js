System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Node, _decorator, GCache, EventManager, BaseComponent, FXJEvent, FXJUIID, FXJSound, GameEvent, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _crd, ccclass, property, menu, GameMenuPrefabCtr;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfGCache(extras) {
    _reporterNs.report("GCache", "../../../cache/GCache", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventManager(extras) {
    _reporterNs.report("EventManager", "../../../framework/manager/EventManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../../framework/vc/BaseComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFXJEvent(extras) {
    _reporterNs.report("FXJEvent", "../common/FXJEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFXJUIID(extras) {
    _reporterNs.report("FXJUIID", "../common/FXJRes", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFXJSound(extras) {
    _reporterNs.report("FXJSound", "../common/FXJSound", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameEvent(extras) {
    _reporterNs.report("GameEvent", "../common/GameEvent", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Node = _cc.Node;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      GCache = _unresolved_2.GCache;
    }, function (_unresolved_3) {
      EventManager = _unresolved_3.EventManager;
    }, function (_unresolved_4) {
      BaseComponent = _unresolved_4.BaseComponent;
    }, function (_unresolved_5) {
      FXJEvent = _unresolved_5.FXJEvent;
    }, function (_unresolved_6) {
      FXJUIID = _unresolved_6.FXJUIID;
    }, function (_unresolved_7) {
      FXJSound = _unresolved_7.FXJSound;
    }, function (_unresolved_8) {
      GameEvent = _unresolved_8.GameEvent;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "7a0cdqsdhVF0Z2DVIp6qRB6", "GameMenuPrefabCtr", undefined);

      __checkObsolete__(['Node', '_decorator']);

      ({
        ccclass,
        property,
        menu
      } = _decorator);
      /**
       * Name = GameMenuPrefabCtr
       * URL = db://assets/package/game/scripts/GameMenuPrefabCtr.ts
       * Time = Thu Jul 27 2023 16:05:53 GMT+0800 (中国标准时间)
       * Author = harvyson
       * 游戏菜单
       * Life: onLoad-->onInitModuleEvent-->onEnable->start->update->lateUpdate->onDisable->onDestroy
       * 
       */

      _export("GameMenuPrefabCtr", GameMenuPrefabCtr = (_dec = ccclass('GameMenuPrefabCtr'), _dec2 = menu('prefab/game/GameMenuPrefabCtr'), _dec3 = property({
        tooltip: "更多按钮节点",
        type: Node
      }), _dec4 = property({
        tooltip: "返回按钮节点",
        type: Node
      }), _dec5 = property({
        tooltip: "聊天按钮节点",
        type: Node
      }), _dec6 = property({
        tooltip: "时间节点",
        type: Node
      }), _dec(_class = _dec2(_class = (_class2 = class GameMenuPrefabCtr extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "btnToolBar", _descriptor, this);

          _initializerDefineProperty(this, "btnBack", _descriptor2, this);

          _initializerDefineProperty(this, "btnChat", _descriptor3, this);

          _initializerDefineProperty(this, "timeLayout", _descriptor4, this);

          this._redDotView = {};
        }

        /**模块事件定义 */
        onInitModuleEvent() {
          //显示或隐藏更多
          this.addModelListener((_crd && FXJEvent === void 0 ? (_reportPossibleCrUseOfFXJEvent({
            error: Error()
          }), FXJEvent) : FXJEvent).VIEW_DESK_BTN_MENU_UPDATE, this.showOrHideBtnMore); // //玩家进入房间 显示更新时间

          this.addModelListener((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).VIEW_BROADCAST_PLAYER_ENTER, this.onPlayerInto); //红点更新

          this.addModelListener((_crd && FXJEvent === void 0 ? (_reportPossibleCrUseOfFXJEvent({
            error: Error()
          }), FXJEvent) : FXJEvent).NOTIFY_UPDATE_RED_DOT, this.refreshRedDot);
        }

        onLoad() {
          // this.btnToolBar.active = false;
          // this.btnBack.active = false;
          // this.btnChat.active = false;
          this.timeLayout.active = false;
          this.initData();
          this.refreshRedDot();
        }

        start() {}

        //初始化数据
        initData() {
          this._redDotView = {// /** 每日任务 */
            // [GConstants.RedDotConf.Task_Day]: this.btnTask,
            // /** 每周任务 */
            // [GConstants.RedDotConf.Task_Week]: this.btnTask,
          };
        }
        /** 显示或隐藏更多 */


        showOrHideBtnMore(event, state) {
          if (event === void 0) {
            event = null;
          }

          this.btnToolBar.active = state;
        }
        /** 收到消息:用户进入房间 */


        onPlayerInto(event, uid) {
          // if (uid == GCache.User.getUserMid()) {
          this.btnBack.active = true;
          this.btnToolBar.active = true;
          this.btnChat.active = true; // }
        } //点击退出


        onClickBack(event) {
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && FXJEvent === void 0 ? (_reportPossibleCrUseOfFXJEvent({
            error: Error()
          }), FXJEvent) : FXJEvent).SYS_PLAY_EFFECT, (_crd && FXJSound === void 0 ? (_reportPossibleCrUseOfFXJSound({
            error: Error()
          }), FXJSound) : FXJSound).CommClick); // EventManager.dispatch(FXJEvent.GAME_REQ_PLAYER_QUIT);
          // EventManager.dispatch(FXJEvent.REPORT_CLIENT_CLICK, { eventID: ReportConfig.game_1 });
        } //点击更多


        onClickToolBar(event) {
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && FXJEvent === void 0 ? (_reportPossibleCrUseOfFXJEvent({
            error: Error()
          }), FXJEvent) : FXJEvent).SYS_PLAY_EFFECT, (_crd && FXJSound === void 0 ? (_reportPossibleCrUseOfFXJSound({
            error: Error()
          }), FXJSound) : FXJSound).CommClick);
          this.showOrHideBtnMore(null, false);
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && FXJEvent === void 0 ? (_reportPossibleCrUseOfFXJEvent({
            error: Error()
          }), FXJEvent) : FXJEvent).GAME_OPEN_POPUP, (_crd && FXJUIID === void 0 ? (_reportPossibleCrUseOfFXJUIID({
            error: Error()
          }), FXJUIID) : FXJUIID).ToolBarPrefab, null, {}); // EventManager.dispatch(FXJEvent.REPORT_CLIENT_CLICK, { eventID: ReportConfig.game_2 });
        } //点击聊天


        onClickChat(event) {
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && FXJEvent === void 0 ? (_reportPossibleCrUseOfFXJEvent({
            error: Error()
          }), FXJEvent) : FXJEvent).SYS_PLAY_EFFECT, (_crd && FXJSound === void 0 ? (_reportPossibleCrUseOfFXJSound({
            error: Error()
          }), FXJSound) : FXJSound).CommClick);
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && FXJEvent === void 0 ? (_reportPossibleCrUseOfFXJEvent({
            error: Error()
          }), FXJEvent) : FXJEvent).GAME_OPEN_POPUP, (_crd && FXJUIID === void 0 ? (_reportPossibleCrUseOfFXJUIID({
            error: Error()
          }), FXJUIID) : FXJUIID).GameChatPrefab, null, {}); // EventManager.dispatch(FXJEvent.REPORT_CLIENT_CLICK, { eventID: ReportConfig.game_6 });
        }
        /** 红点更新 */


        refreshRedDot(event, keyType) {
          if (event === void 0) {
            event = null;
          }

          if (keyType === void 0) {
            keyType = null;
          }

          if (keyType == null) {
            for (var _keyType in this._redDotView) {
              var imgRedDot = this._redDotView[_keyType].getChildByName("img_dot");

              if (imgRedDot) {
                imgRedDot.active = (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
                  error: Error()
                }), GCache) : GCache).RedDot.hasRedDot(_keyType, _keyType);
              }
            }
          } else {
            if (this._redDotView[keyType] == null) {
              return;
            }

            var _imgRedDot = this._redDotView[keyType].getChildByName("img_dot");

            if (_imgRedDot) {
              _imgRedDot.active = (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
                error: Error()
              }), GCache) : GCache).RedDot.hasRedDot(keyType, keyType);
            }
          }
        } //销毁


        onDestroy() {}

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "btnToolBar", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "btnBack", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "btnChat", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "timeLayout", [_dec6], {
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
//# sourceMappingURL=c42b514ecc86e3307dbcbb33f24f60202743ac16.js.map