System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Layout, Prefab, _decorator, EventManager, Utils, BaseComponent, PlayerMgr, RoomMgr, FXJEvent, FXJRes, GameEvent, CardUtil, Player, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, Match;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfEventManager(extras) {
    _reporterNs.report("EventManager", "../../../../../framework/manager/EventManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUtils(extras) {
    _reporterNs.report("Utils", "../../../../../framework/Utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../../../../framework/vc/BaseComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerMgr(extras) {
    _reporterNs.report("PlayerMgr", "../../../cache/PlayerMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoomMgr(extras) {
    _reporterNs.report("RoomMgr", "../../../cache/RoomMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFXJEvent(extras) {
    _reporterNs.report("FXJEvent", "../../../common/FXJEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFXJRes(extras) {
    _reporterNs.report("FXJRes", "../../../common/FXJRes", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameEvent(extras) {
    _reporterNs.report("GameEvent", "../../../common/GameEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCommon(extras) {
    _reporterNs.report("Common", "../../../common/idl/Common", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCardUtil(extras) {
    _reporterNs.report("CardUtil", "../../../util/CardUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayer(extras) {
    _reporterNs.report("Player", "./Player", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Layout = _cc.Layout;
      Prefab = _cc.Prefab;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      EventManager = _unresolved_2.EventManager;
    }, function (_unresolved_3) {
      Utils = _unresolved_3.Utils;
    }, function (_unresolved_4) {
      BaseComponent = _unresolved_4.BaseComponent;
    }, function (_unresolved_5) {
      PlayerMgr = _unresolved_5.PlayerMgr;
    }, function (_unresolved_6) {
      RoomMgr = _unresolved_6.RoomMgr;
    }, function (_unresolved_7) {
      FXJEvent = _unresolved_7.FXJEvent;
    }, function (_unresolved_8) {
      FXJRes = _unresolved_8.FXJRes;
    }, function (_unresolved_9) {
      GameEvent = _unresolved_9.GameEvent;
    }, function (_unresolved_10) {
      CardUtil = _unresolved_10.CardUtil;
    }, function (_unresolved_11) {
      Player = _unresolved_11.Player;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b7092Ut/VlLeq2BMPMsHAq+", "Match", undefined);

      __checkObsolete__(['Layout', 'Node', 'Prefab', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Name = match
       * URL = db://assets/package/game/module/match/src/match.ts
       * Time = Fri Aug 04 2023 11:18:15 GMT+0800 (中国标准时间)
       * Author = qwe757964
       *
       * Life: onLoad-->onInitModuleEvent-->onEnable->start->update->lateUpdate->onDisable->onDestroy
       * 
       */

      _export("Match", Match = (_dec = ccclass('Match'), _dec2 = property({
        tooltip: "玩家人物容器",
        type: Layout
      }), _dec(_class = (_class2 = class Match extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "layoutPlayerList", _descriptor, this);

          this.willAddPlayer = {};
          this.playerList = {};
          this._handlerTimeUpdate = null;
        }

        /** override 初始化模块事件 */
        onInitModuleEvent() {
          this.addModelListener((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).VIEW_BROADCAST_PLAYER_ENTER, this.addPlayer);
          this.addModelListener((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).VIEW_BROADCAST_PLAYER_EXIT, this.onPalyerExit);
        }

        onLoad() {
          this.resetPlayer();
          this.loadPlayerList();
          this.startMatchTime();
        }

        startMatchTime() {
          this.stopSchedulerOnce(this._handlerTimeUpdate);
          this._handlerTimeUpdate = null;
          this._handlerTimeUpdate = this.addSchedulerOnce(0.5, (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).handler(this, this.resetView));
        }

        resetView() {
          this.onReady();
        }

        onReady() {
          if (!(_crd && PlayerMgr === void 0 ? (_reportPossibleCrUseOfPlayerMgr({
            error: Error()
          }), PlayerMgr) : PlayerMgr).getInstance().getMyPlayerInfo().isReady) {
            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).dispatch((_crd && FXJEvent === void 0 ? (_reportPossibleCrUseOfFXJEvent({
              error: Error()
            }), FXJEvent) : FXJEvent).NET_REQ_PLAYER_READY);
          }
        }

        resetPlayer() {
          this.playerList = {};
          this.layoutPlayerList.node.removeAllChildren();
        }

        loadPlayerList() {
          (_crd && PlayerMgr === void 0 ? (_reportPossibleCrUseOfPlayerMgr({
            error: Error()
          }), PlayerMgr) : PlayerMgr).getInstance().playerList.forEach(player => {
            this.showPlayer(player);
          });
        }

        start() {}

        showPlayer(player) {
          var seatId = (_crd && CardUtil === void 0 ? (_reportPossibleCrUseOfCardUtil({
            error: Error()
          }), CardUtil) : CardUtil).calculatePlayerSeat((_crd && RoomMgr === void 0 ? (_reportPossibleCrUseOfRoomMgr({
            error: Error()
          }), RoomMgr) : RoomMgr).getInstance().mySeatId, player.seatId);

          if (this.playerList[seatId]) {
            if (this.playerList[seatId].isValid == false) {
              this.playerList[seatId] = null;
            }
          }

          if (this.playerList[seatId]) {
            console.warn("玩家匹配 座位号重复，player");
            var scriptPlayer = this.playerList[seatId].getComponent(_crd && Player === void 0 ? (_reportPossibleCrUseOfPlayer({
              error: Error()
            }), Player) : Player);
            scriptPlayer.updatePlayerProperty(player);
            return;
          }

          this.willAddPlayer[seatId] = true;
          this.getPreLoaderRes((_crd && FXJRes === void 0 ? (_reportPossibleCrUseOfFXJRes({
            error: Error()
          }), FXJRes) : FXJRes).Prefab_Match_Player.bundle, (_crd && FXJRes === void 0 ? (_reportPossibleCrUseOfFXJRes({
            error: Error()
          }), FXJRes) : FXJRes).Prefab_Match_Player.path, Prefab, nodeRes => {
            if (this.willAddPlayer[seatId] != true) {
              return;
            }

            delete this.willAddPlayer[seatId];
            this.layoutPlayerList.node.addChild(nodeRes);
            this.layoutPlayerList.updateLayout();
            this.playerList[seatId] = nodeRes;
            var scriptPlayer = nodeRes.getComponent(_crd && Player === void 0 ? (_reportPossibleCrUseOfPlayer({
              error: Error()
            }), Player) : Player);
            scriptPlayer.updatePlayerProperty(player);
            console.log("this.playerList______________add", this.playerList);
          });
        }

        hidenPlayer(player) {
          var seatId = (_crd && CardUtil === void 0 ? (_reportPossibleCrUseOfCardUtil({
            error: Error()
          }), CardUtil) : CardUtil).calculatePlayerSeat((_crd && RoomMgr === void 0 ? (_reportPossibleCrUseOfRoomMgr({
            error: Error()
          }), RoomMgr) : RoomMgr).getInstance().mySeatId, player.seatId);

          if (this.playerList[seatId]) {
            if (this.playerList[seatId].isValid == false) {
              this.playerList[seatId] = null;
            }
          }

          if (!this.playerList[seatId]) {
            return;
          }

          var scriptPlayer = this.playerList[seatId].getComponent(_crd && Player === void 0 ? (_reportPossibleCrUseOfPlayer({
            error: Error()
          }), Player) : Player);

          if (scriptPlayer.seatId === player.seatId) {
            delete this.willAddPlayer[seatId];
            this.playerList[seatId].removeFromParent();
            this.playerList[seatId] = null; // this.playerList = this.playerList.filter(item => item.seatId === player.seatId);

            console.log("this.playerList______________delete", this.playerList);
          }

          this.layoutPlayerList.updateLayout();
        }

        addPlayer(event, uid) {
          var player = (_crd && PlayerMgr === void 0 ? (_reportPossibleCrUseOfPlayerMgr({
            error: Error()
          }), PlayerMgr) : PlayerMgr).getInstance().findPlayerWithUserId(uid);
          this.showPlayer(player);
        }

        onPalyerExit(event, uid) {
          var player = (_crd && PlayerMgr === void 0 ? (_reportPossibleCrUseOfPlayerMgr({
            error: Error()
          }), PlayerMgr) : PlayerMgr).getInstance().findPlayerWithUserId(uid);
          this.deletePlayer(player);
        }

        deletePlayer(player) {
          this.hidenPlayer(player);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "layoutPlayerList", [_dec2], {
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
//# sourceMappingURL=75198d8f0bbde76ebc02ac0a4e192e8cc3b80a19.js.map