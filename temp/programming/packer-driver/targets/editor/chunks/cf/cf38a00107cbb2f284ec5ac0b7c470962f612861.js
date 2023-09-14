System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, BaseCache, RoomMgr, _crd;

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
      BaseCache = _unresolved_2.BaseCache;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ea7f0VBNGJIKowo0diJ1tNw", "RoomMgr", undefined);

      _export("RoomMgr", RoomMgr = class RoomMgr extends (_crd && BaseCache === void 0 ? (_reportPossibleCrUseOfBaseCache({
        error: Error()
      }), BaseCache) : BaseCache) {
        // public roomInfo?: Common.IRoomInfo = null;
        constructor(name = "") {
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
          const index = this.observers.indexOf(observer);

          if (index !== -1) {
            this.observers.splice(index, 1);
          }
        }

        notifyObservers() {
          for (const observer of this.observers) {
            observer.updateCardsCount();
          }
        }

        mySelfIsBanker() {
          return this.bankSeatId === this.mySeatId;
        }

        getTimeOut(state) {
          let timeOut = 0;
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
//# sourceMappingURL=cf38a00107cbb2f284ec5ac0b7c470962f612861.js.map