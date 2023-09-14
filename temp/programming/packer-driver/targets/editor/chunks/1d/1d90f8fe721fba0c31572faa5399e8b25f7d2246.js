System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, GCache, BaseCache, CardUtil, PlayerMgr, RoomMgr, SettleMgr, _crd;

  function _reportPossibleCrUseOfGCache(extras) {
    _reporterNs.report("GCache", "../../../cache/GCache", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseCache(extras) {
    _reporterNs.report("BaseCache", "../../../framework/vc/BaseCache", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCommon(extras) {
    _reporterNs.report("Common", "../common/idl/Common", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGame(extras) {
    _reporterNs.report("Game", "../common/idl/Game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCardUtil(extras) {
    _reporterNs.report("CardUtil", "../util/CardUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerMgr(extras) {
    _reporterNs.report("PlayerMgr", "./PlayerMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoomMgr(extras) {
    _reporterNs.report("RoomMgr", "./RoomMgr", _context.meta, extras);
  }

  _export("SettleMgr", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      GCache = _unresolved_2.GCache;
    }, function (_unresolved_3) {
      BaseCache = _unresolved_3.BaseCache;
    }, function (_unresolved_4) {
      CardUtil = _unresolved_4.CardUtil;
    }, function (_unresolved_5) {
      PlayerMgr = _unresolved_5.PlayerMgr;
    }, function (_unresolved_6) {
      RoomMgr = _unresolved_6.RoomMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1d3112vndxCYrH6v8qWw5aG", "SettleMgr", undefined);

      _export("SettleMgr", SettleMgr = class SettleMgr extends (_crd && BaseCache === void 0 ? (_reportPossibleCrUseOfBaseCache({
        error: Error()
      }), BaseCache) : BaseCache) {
        // public isBaoSanJia?: boolean = false;
        constructor(name = "") {
          super(name);
          this.settleType = "";
          this.isShowGameOver = 0;
          this.isBaoSanJia = false;
          this.jiesuanCustomData = "";
          this.settleModel = null;
        }

        static getInstance() {
          if (!SettleMgr.instance) {
            SettleMgr.instance = new SettleMgr();
          }

          return SettleMgr.instance;
        }

        updateSelectInfo(resp) {
          this.settleType = resp.settleType;
          this.isShowGameOver = resp.isShowGameOver;
          this.isBaoSanJia = resp.isBaoSanJia;
          this.jiesuanCustomData = resp.jiesuanCustomData;
          this.settleModel = resp.settleModel;
          this.sortTotalInfo();
          this.setFanInfoSeatStr();
        }

        setFanInfoSeatStr() {
          let moneyList = this.settleModel.moneyItemList;
          moneyList.forEach(moneyItem => {
            for (let i = 0; i < moneyItem.fanExtendInfo.length; i++) {
              let fanData = moneyItem.fanExtendInfo[i];
              fanData.seatStr = (_crd && CardUtil === void 0 ? (_reportPossibleCrUseOfCardUtil({
                error: Error()
              }), CardUtil) : CardUtil).calculatePlayerPosition((_crd && RoomMgr === void 0 ? (_reportPossibleCrUseOfRoomMgr({
                error: Error()
              }), RoomMgr) : RoomMgr).getInstance().mySeatId, i + 1);
            }
          });
        }

        getTotalInfoIndex() {
          let index = 0;

          for (let i = 0; i < this.settleModel.totalInfo.length; i++) {
            let info = this.settleModel.totalInfo[i];

            if (info.bWin === 1) {
              index = i;
              break;
            }
          }

          return index;
        }

        getMaxWinType() {
          let fanData = null;
          this.settleModel.moneyItemList.forEach(item => {
            let winSeatId = item.winSeatId;
            let settleInfo = item.fanExtendInfo[winSeatId - 1];
            let num = -1;
            settleInfo.fanInfo.forEach(info => {
              console.log("settleInfo____________", parseInt(info.fan), num);

              if (parseInt(info.fan) > num) {
                fanData = info;
              }
            });
          });
          return fanData;
        }

        sortTotalInfo() {
          this.settleModel.totalInfo.forEach(info => {
            let player = (_crd && PlayerMgr === void 0 ? (_reportPossibleCrUseOfPlayerMgr({
              error: Error()
            }), PlayerMgr) : PlayerMgr).getInstance().findPlayerWithUserId(info.userId);
            info.seatId = player.seatId;
          });
          this.settleModel.totalInfo = (_crd && CardUtil === void 0 ? (_reportPossibleCrUseOfCardUtil({
            error: Error()
          }), CardUtil) : CardUtil).sortPlayersBySeatId(this.settleModel.totalInfo, (_crd && RoomMgr === void 0 ? (_reportPossibleCrUseOfRoomMgr({
            error: Error()
          }), RoomMgr) : RoomMgr).getInstance().mySeatId);
        }

        getOpponentTotalInfo() {
          let opponentInfo = this.settleModel.totalInfo.filter(item => item.userId !== (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
            error: Error()
          }), GCache) : GCache).User.getUserMid());
          return opponentInfo;
        }

        getMyTotalInfo() {
          let opponentInfo = this.settleModel.totalInfo.filter(item => item.userId === (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
            error: Error()
          }), GCache) : GCache).User.getUserMid())[0];
          return opponentInfo;
        }

        getWinPlayerInfo() {
          let player = null;
          this.settleModel.moneyItemList.forEach(item => {
            player = (_crd && PlayerMgr === void 0 ? (_reportPossibleCrUseOfPlayerMgr({
              error: Error()
            }), PlayerMgr) : PlayerMgr).getInstance().findPlayerWithSeatId(item.winSeatId);
          });
          return player;
        }

        filterFanExtendInfo() {
          if (this.settleModel.moneyItemList.length === 0) {
            return [];
          }

          const filteredFanExtendInfo = this.settleModel.moneyItemList[0].fanExtendInfo.filter(item => item.fanInfo.length > 0);
          return filteredFanExtendInfo;
        } //清理房间数据


        clear() {}

      });

      SettleMgr.instance = null;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=1d90f8fe721fba0c31572faa5399e8b25f7d2246.js.map