System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, GCache, BaseCache, RoomMgr, _crd;

  function _reportPossibleCrUseOfGCache(extras) {
    _reporterNs.report("GCache", "../../../cache/GCache", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseCache(extras) {
    _reporterNs.report("BaseCache", "../../../framework/vc/BaseCache", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameStatus(extras) {
    _reporterNs.report("GameStatus", "../common/FXJConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCommon(extras) {
    _reporterNs.report("Common", "../common/idl/Common", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGame(extras) {
    _reporterNs.report("Game", "../common/idl/Game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfObserver(extras) {
    _reporterNs.report("Observer", "./PlayerMgr", _context.meta, extras);
  }

  _export("RoomMgr", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      GCache = _unresolved_2.GCache;
    }, function (_unresolved_3) {
      BaseCache = _unresolved_3.BaseCache;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ea7f0VBNGJIKowo0diJ1tNw", "RoomMgr", undefined);

      _export("RoomMgr", RoomMgr = class RoomMgr extends (_crd && BaseCache === void 0 ? (_reportPossibleCrUseOfBaseCache({
        error: Error()
      }), BaseCache) : BaseCache) {
        // public roomInfo?: Common.IRoomInfo = null;
        constructor(name) {
          if (name === void 0) {
            name = "";
          }

          super(name);
          this.roomCfg = null;
          this.bankSeatId = null;
          this.dices = null;
          this.mySeatId = null;
          this.totalCardCount = null;
          this.timerInfoList = null;
          this.laiziInfo = null;
          this.rollDice = null;
          this.remainCardsCount = 0;
          this.fangangCards = null;
          this.selectFanGangCards = null;
          this.timePass = 0;
          this.observers = [];
        }

        static getInstance() {
          if (!RoomMgr.instance) {
            RoomMgr.instance = new RoomMgr();
          }

          return RoomMgr.instance;
        } //更新房间信息list数据


        addObserver(observer) {
          this.observers.push(observer);
        }

        removeObserver(observer) {
          var index = this.observers.indexOf(observer);

          if (index !== -1) {
            this.observers.splice(index, 1);
          }
        }

        notifyObservers() {
          for (var observer of this.observers) {
            observer.updateCardsCount();
          }
        }

        getRoomInfoData(GameID) {
          var gameData = (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
            error: Error()
          }), GCache) : GCache).SelectGame.getServerGameLevelTabListByGameID(GameID);
          var roomInfo = {};
          gameData.forEach(gameInfo => {
            var dataArr = gameInfo.data;
            dataArr.forEach(info => {
              if (info.level === this.roomCfg.level) {
                roomInfo = info;
              }
            });
          });
          return roomInfo;
        }

        mySelfIsBanker() {
          return this.bankSeatId === this.mySeatId;
        }

        getTimeOut(state) {
          var timeOut = 0;
          this.timerInfoList.forEach(timeInfo => {
            if (timeInfo.timerId == state) {
              timeOut = timeInfo.timeout;
            }
          });
          return timeOut;
        }

        updateRoomInfo(resp) {
          this.roomCfg = resp.roomInfo.roomCfg;
          this.bankSeatId = resp.roomInfo.gameInfo.bankSeatId;
          this.dices = resp.roomInfo.gameInfo.dices;
          this.fangangCards = resp.roomInfo.gameInfo.fanGangPai;
          this.mySeatId = resp.roomInfo.gameInfo.mySeatId;
          this.updateRemainCardsCount(resp.roomInfo.gameInfo.remainCardCount);
          this.timerInfoList = resp.roomInfo.gameInfo.timerInfoList;
          this.totalCardCount = resp.roomInfo.gameInfo.totalCardCount;
        }

        updateRemainCardsCount(count) {
          this.remainCardsCount = count;
          this.notifyObservers();
        } //清理房间数据


        clear() {// this.roomInfo = null;
        }

      });

      RoomMgr.instance = null;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=5914573de6983ff581e300a88fd91684fd66e6ef.js.map