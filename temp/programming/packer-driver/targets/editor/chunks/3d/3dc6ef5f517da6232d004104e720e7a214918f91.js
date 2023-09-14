System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Prefab, _decorator, EventManager, BaseComponent, PlayerMgr, RoomMgr, FXJEvent, FXJRes, GameEvent, CardUtil, _dec, _class, _crd, ccclass, property, Match;

  function _reportPossibleCrUseOfEventManager(extras) {
    _reporterNs.report("EventManager", "../../../../../framework/manager/EventManager", _context.meta, extras);
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
      Prefab = _cc.Prefab;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      EventManager = _unresolved_2.EventManager;
    }, function (_unresolved_3) {
      BaseComponent = _unresolved_3.BaseComponent;
    }, function (_unresolved_4) {
      PlayerMgr = _unresolved_4.PlayerMgr;
    }, function (_unresolved_5) {
      RoomMgr = _unresolved_5.RoomMgr;
    }, function (_unresolved_6) {
      FXJEvent = _unresolved_6.FXJEvent;
    }, function (_unresolved_7) {
      FXJRes = _unresolved_7.FXJRes;
    }, function (_unresolved_8) {
      GameEvent = _unresolved_8.GameEvent;
    }, function (_unresolved_9) {
      CardUtil = _unresolved_9.CardUtil;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b7092Ut/VlLeq2BMPMsHAq+", "Match", undefined);

      __checkObsolete__(['Prefab', '_decorator']);

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

      _export("Match", Match = (_dec = ccclass('Match'), _dec(_class = class Match extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor(...args) {
          super(...args);
          this.coordinateList = [];
          this.playerList = [];
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
          this.playerList.forEach(nodeRes => {
            if (nodeRes) {
              nodeRes.removeFromParent();
            }
          });
          this.playerList = [];
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
          this.coordinateList = [{
            x: -377.029,
            y: -58.805
          }, {
            x: -104.611,
            y: -58.805
          }, {
            x: 163.975,
            y: -58.805
          }, {
            x: 435.111,
            y: -58.805
          }];
          this.getPreLoaderRes((_crd && FXJRes === void 0 ? (_reportPossibleCrUseOfFXJRes({
            error: Error()
          }), FXJRes) : FXJRes).Prefab_Match_Player.bundle, (_crd && FXJRes === void 0 ? (_reportPossibleCrUseOfFXJRes({
            error: Error()
          }), FXJRes) : FXJRes).Prefab_Match_Player.path, Prefab, nodeRes => {
            // let nodeRes = res.data;
            this.node.addChild(nodeRes);
            let seatId = (_crd && CardUtil === void 0 ? (_reportPossibleCrUseOfCardUtil({
              error: Error()
            }), CardUtil) : CardUtil).calculatePlayerSeat((_crd && RoomMgr === void 0 ? (_reportPossibleCrUseOfRoomMgr({
              error: Error()
            }), RoomMgr) : RoomMgr).getInstance().mySeatId, player.seatId);
            nodeRes.setPosition(this.coordinateList[seatId].x, this.coordinateList[seatId].y);
            var scriptPlayer = nodeRes.getComponent("Player");
            scriptPlayer.updatePlayerProperty(player);
            this.playerList.push(nodeRes);
          });
        }

        hidenPlayer(player) {
          this.playerList.forEach(nodeRes => {
            var scriptPlayer = nodeRes.getComponent("Player");

            if (scriptPlayer.seatId === player.seatId) {
              nodeRes.removeFromParent(); // this.playerList = this.playerList.filter(item => item.seatId === player.seatId);

              console.log("this.playerList______________", this.playerList);
            }
          });
        }

        addPlayer(event, uid) {
          let player = (_crd && PlayerMgr === void 0 ? (_reportPossibleCrUseOfPlayerMgr({
            error: Error()
          }), PlayerMgr) : PlayerMgr).getInstance().findPlayerWithUserId(uid);
          this.showPlayer(player);
        }

        onPalyerExit(event, uid) {
          let player = (_crd && PlayerMgr === void 0 ? (_reportPossibleCrUseOfPlayerMgr({
            error: Error()
          }), PlayerMgr) : PlayerMgr).getInstance().findPlayerWithUserId(uid);
          this.deletePlayer(player);
        }

        deletePlayer(player) {
          this.hidenPlayer(player);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=3dc6ef5f517da6232d004104e720e7a214918f91.js.map