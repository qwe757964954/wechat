System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, SettleMgr, Desk, EventManager, FXJEvent, FXJUIID, GameEvent, BankerMgr, OperationMgr, OperationResultMgr, PlayerMgr, RoomMgr, Room, _crd;

  function _reportPossibleCrUseOfSettleMgr(extras) {
    _reporterNs.report("SettleMgr", "./SettleMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDesk(extras) {
    _reporterNs.report("Desk", "../../../cache/Desk", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventManager(extras) {
    _reporterNs.report("EventManager", "../../../framework/manager/EventManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFXJEvent(extras) {
    _reporterNs.report("FXJEvent", "../common/FXJEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFXJUIID(extras) {
    _reporterNs.report("FXJUIID", "../common/FXJRes", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameEvent(extras) {
    _reporterNs.report("GameEvent", "../common/GameEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGame(extras) {
    _reporterNs.report("Game", "../common/idl/Game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBankerMgr(extras) {
    _reporterNs.report("BankerMgr", "./BankerMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfOperationMgr(extras) {
    _reporterNs.report("OperationMgr", "./OperationMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfOperationResultMgr(extras) {
    _reporterNs.report("OperationResultMgr", "./OperationResultMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerMgr(extras) {
    _reporterNs.report("PlayerMgr", "./PlayerMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoomMgr(extras) {
    _reporterNs.report("RoomMgr", "./RoomMgr", _context.meta, extras);
  }

  _export("Room", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      SettleMgr = _unresolved_2.SettleMgr;
    }, function (_unresolved_3) {
      Desk = _unresolved_3.Desk;
    }, function (_unresolved_4) {
      EventManager = _unresolved_4.EventManager;
    }, function (_unresolved_5) {
      FXJEvent = _unresolved_5.FXJEvent;
    }, function (_unresolved_6) {
      FXJUIID = _unresolved_6.FXJUIID;
    }, function (_unresolved_7) {
      GameEvent = _unresolved_7.GameEvent;
    }, function (_unresolved_8) {
      BankerMgr = _unresolved_8.BankerMgr;
    }, function (_unresolved_9) {
      OperationMgr = _unresolved_9.OperationMgr;
    }, function (_unresolved_10) {
      OperationResultMgr = _unresolved_10.OperationResultMgr;
    }, function (_unresolved_11) {
      PlayerMgr = _unresolved_11.PlayerMgr;
    }, function (_unresolved_12) {
      RoomMgr = _unresolved_12.RoomMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6e6f67ndmJMNroVdVEpJ406", "Room", undefined);

      _export("Room", Room = class Room extends (_crd && Desk === void 0 ? (_reportPossibleCrUseOfDesk({
        error: Error()
      }), Desk) : Desk) {
        //实例化
        constructor() {
          super("Room");
          this.turnMe = false;
          this.bankerMgr = (_crd && BankerMgr === void 0 ? (_reportPossibleCrUseOfBankerMgr({
            error: Error()
          }), BankerMgr) : BankerMgr).getInstance();
        }

        enterRoomUpdate(resp) {
          (_crd && RoomMgr === void 0 ? (_reportPossibleCrUseOfRoomMgr({
            error: Error()
          }), RoomMgr) : RoomMgr).getInstance().updateRoomInfo(resp);
          (_crd && PlayerMgr === void 0 ? (_reportPossibleCrUseOfPlayerMgr({
            error: Error()
          }), PlayerMgr) : PlayerMgr).getInstance().setPlayerList(resp == null ? void 0 : resp.playerList);
          (_crd && PlayerMgr === void 0 ? (_reportPossibleCrUseOfPlayerMgr({
            error: Error()
          }), PlayerMgr) : PlayerMgr).getInstance().getMyPlayerInfo();
        }

        reconnectionRoomUpdate(resp) {
          (_crd && RoomMgr === void 0 ? (_reportPossibleCrUseOfRoomMgr({
            error: Error()
          }), RoomMgr) : RoomMgr).getInstance().updateRoomInfo(resp);
          (_crd && PlayerMgr === void 0 ? (_reportPossibleCrUseOfPlayerMgr({
            error: Error()
          }), PlayerMgr) : PlayerMgr).getInstance().setPlayerList(resp == null ? void 0 : resp.players);
          (_crd && PlayerMgr === void 0 ? (_reportPossibleCrUseOfPlayerMgr({
            error: Error()
          }), PlayerMgr) : PlayerMgr).getInstance().getMyPlayerInfo();
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).RECEIVE_DEAL_CARD);

          if (resp.operation) {
            this.userOperation(resp.operation);
            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).dispatch((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
              error: Error()
            }), GameEvent) : GameEvent).VIEW_USER_OPERATION, resp);
            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).dispatch((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
              error: Error()
            }), GameEvent) : GameEvent).DRAW_MY_CARD);
          }

          if (resp.settleItems) {
            resp.settleItems.forEach(item => {
              this.updateSettleResult(item);
              (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
                error: Error()
              }), EventManager) : EventManager).dispatch((_crd && FXJEvent === void 0 ? (_reportPossibleCrUseOfFXJEvent({
                error: Error()
              }), FXJEvent) : FXJEvent).GAME_OPEN_POPUP, (_crd && FXJUIID === void 0 ? (_reportPossibleCrUseOfFXJUIID({
                error: Error()
              }), FXJUIID) : FXJUIID).GameSettlePrefab);
            });
          }
        }

        dealCardUpdate(resp) {
          (_crd && PlayerMgr === void 0 ? (_reportPossibleCrUseOfPlayerMgr({
            error: Error()
          }), PlayerMgr) : PlayerMgr).getInstance().updatePlayerCardsNum(resp.cardsCount);
          (_crd && PlayerMgr === void 0 ? (_reportPossibleCrUseOfPlayerMgr({
            error: Error()
          }), PlayerMgr) : PlayerMgr).getInstance().updateMyhands(resp.cards);
          (_crd && RoomMgr === void 0 ? (_reportPossibleCrUseOfRoomMgr({
            error: Error()
          }), RoomMgr) : RoomMgr).getInstance().updateRemainCardsCount(resp.remainCardsCount);
        }

        gameGrabCard(resp) {
          (_crd && RoomMgr === void 0 ? (_reportPossibleCrUseOfRoomMgr({
            error: Error()
          }), RoomMgr) : RoomMgr).getInstance().updateRemainCardsCount(resp.remainCardNum);
          (_crd && PlayerMgr === void 0 ? (_reportPossibleCrUseOfPlayerMgr({
            error: Error()
          }), PlayerMgr) : PlayerMgr).getInstance().updateOutCards(resp);
        }

        updateFanGangCards(resp) {
          (_crd && RoomMgr === void 0 ? (_reportPossibleCrUseOfRoomMgr({
            error: Error()
          }), RoomMgr) : RoomMgr).getInstance().updateRemainCardsCount(resp.remainCardCount);
          (_crd && RoomMgr === void 0 ? (_reportPossibleCrUseOfRoomMgr({
            error: Error()
          }), RoomMgr) : RoomMgr).getInstance().fangangCards = resp.cards;
          (_crd && PlayerMgr === void 0 ? (_reportPossibleCrUseOfPlayerMgr({
            error: Error()
          }), PlayerMgr) : PlayerMgr).getInstance().gangCount = resp.gangCount;
        }

        updateSelectFanGangCards(resp) {
          (_crd && RoomMgr === void 0 ? (_reportPossibleCrUseOfRoomMgr({
            error: Error()
          }), RoomMgr) : RoomMgr).getInstance().selectFanGangCards = resp.card;
        }

        bankerFirstOperation(resp) {
          (_crd && RoomMgr === void 0 ? (_reportPossibleCrUseOfRoomMgr({
            error: Error()
          }), RoomMgr) : RoomMgr).getInstance().updateRemainCardsCount(resp.remainCardNum);
          (_crd && RoomMgr === void 0 ? (_reportPossibleCrUseOfRoomMgr({
            error: Error()
          }), RoomMgr) : RoomMgr).getInstance().bankSeatId = resp.bankSeatId;
        }

        userOperation(resp) {
          (_crd && OperationMgr === void 0 ? (_reportPossibleCrUseOfOperationMgr({
            error: Error()
          }), OperationMgr) : OperationMgr).getInstance().updateMyselfOpration(resp);
          this.turnMe = true;
        }

        userOperationResult(resp) {
          (_crd && OperationResultMgr === void 0 ? (_reportPossibleCrUseOfOperationResultMgr({
            error: Error()
          }), OperationResultMgr) : OperationResultMgr).getInstance().userOperationResult(resp);
        }

        updateSettleResult(resp) {
          (_crd && SettleMgr === void 0 ? (_reportPossibleCrUseOfSettleMgr({
            error: Error()
          }), SettleMgr) : SettleMgr).getInstance().updateSelectInfo(resp);
        }

        gameOverResult() {
          // SettleMgr.getInstance().updateSelectInfo(resp);
          (_crd && PlayerMgr === void 0 ? (_reportPossibleCrUseOfPlayerMgr({
            error: Error()
          }), PlayerMgr) : PlayerMgr).getInstance().getMyPlayerInfo().isReady = 0;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ab50bd2982ed727e9c166c0527ffa69f7e2b5d49.js.map