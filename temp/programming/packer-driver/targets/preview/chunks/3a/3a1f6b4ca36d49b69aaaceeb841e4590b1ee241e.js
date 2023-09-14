System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, GCache, BaseCache, MahjongMap, CardUtil, RoomMgr, PlayerMgr, _crd;

  function _reportPossibleCrUseOfGCache(extras) {
    _reporterNs.report("GCache", "../../../cache/GCache", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseCache(extras) {
    _reporterNs.report("BaseCache", "../../../framework/vc/BaseCache", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMahjongMap(extras) {
    _reporterNs.report("MahjongMap", "../common/FXJConfig", _context.meta, extras);
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

  function _reportPossibleCrUseOfRoomMgr(extras) {
    _reporterNs.report("RoomMgr", "./RoomMgr", _context.meta, extras);
  }

  _export("PlayerMgr", void 0);

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
      MahjongMap = _unresolved_4.MahjongMap;
    }, function (_unresolved_5) {
      CardUtil = _unresolved_5.CardUtil;
    }, function (_unresolved_6) {
      RoomMgr = _unresolved_6.RoomMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2e88dNm8ctKM7GhUEgxZhag", "PlayerMgr", undefined);

      _export("PlayerMgr", PlayerMgr = class PlayerMgr extends (_crd && BaseCache === void 0 ? (_reportPossibleCrUseOfBaseCache({
        error: Error()
      }), BaseCache) : BaseCache) {
        constructor(name) {
          if (name === void 0) {
            name = "";
          }

          super(name);
          this.playerList = [];
          this.handOpGroup = null;
          this.myPlayerInfo = null;
          this.gangCount = 0;
          this.observers = [];
        }

        static getInstance() {
          if (!PlayerMgr.instance) {
            PlayerMgr.instance = new PlayerMgr();
          }

          return PlayerMgr.instance;
        }

        addObserver(observer) {
          this.observers.push(observer);
        } // 取消注册观察者


        removeObserver(observer) {
          var index = this.observers.indexOf(observer);

          if (index !== -1) {
            this.observers.splice(index, 1);
          }
        } // 当数据发生变化时，通知所有观察者


        setPlayerList(data) {
          this.parseUseInfo(data);
          this.playerList = (_crd && CardUtil === void 0 ? (_reportPossibleCrUseOfCardUtil({
            error: Error()
          }), CardUtil) : CardUtil).sortPlayersBySeatId(data, (_crd && RoomMgr === void 0 ? (_reportPossibleCrUseOfRoomMgr({
            error: Error()
          }), RoomMgr) : RoomMgr).getInstance().mySeatId);
        }

        resertPlayer() {
          this.playerList = [];
        }

        notifyObservers() {
          for (var observer of this.observers) {
            observer.updatePlayerList(this.playerList);
          }
        }

        getOpIndexs(opCards) {
          var myPlayer = PlayerMgr.getInstance().getMyPlayerInfo();
          var indexs = [];

          for (var i = 0; i < opCards.length; i++) {
            var index = myPlayer.handCards.indexOf(opCards[i]); //如果存在则添加

            if (index !== -1) {
              indexs.push(index);
            }
          }

          return indexs;
        }

        updateMyhands(nums) {
          var myPlayer = PlayerMgr.getInstance().getMyPlayerInfo();
          myPlayer.handCards = nums;
        }

        getMyhands() {
          var myPlayer = PlayerMgr.getInstance().getMyPlayerInfo();
          return myPlayer.handCards;
        }

        getLastMyhands() {
          var myPlayer = PlayerMgr.getInstance().getMyPlayerInfo();
          return myPlayer.handCards[myPlayer.handCards.length - 1];
        }

        includesMyhands(opCard) {
          var myPlayer = PlayerMgr.getInstance().getMyPlayerInfo();
          var inList = false;

          for (var i = 0; i < myPlayer.handCards.length; i++) {
            var cardNum = myPlayer.handCards[i];

            if ((_crd && CardUtil === void 0 ? (_reportPossibleCrUseOfCardUtil({
              error: Error()
            }), CardUtil) : CardUtil).getMajiangValue(cardNum) === (_crd && CardUtil === void 0 ? (_reportPossibleCrUseOfCardUtil({
              error: Error()
            }), CardUtil) : CardUtil).getMajiangValue(opCard)) {
              inList = true;
              break;
            }
          }

          return inList;
        }

        getHandCardByIndex(index) {
          var myPlayer = PlayerMgr.getInstance().getMyPlayerInfo();
          return myPlayer.handCards[index];
        }

        deleteMyHands(bytes) {} //要插入的牌在手牌中应有的位置


        getIndexByHandCards(insertCard, removeCard) {
          var myCards = this.getMyhands();
          var cards = [...myCards];

          for (var i = cards.length - 1; i >= 0; i--) {
            //如果此时手牌中还存在要移除的牌，则先移除，再计算插入牌的index
            if (cards[i] === removeCard) {
              cards.splice(i, 1);
              break;
            }
          } // console.log("=getIndexByHandCards=cards==", cards, insertCard.toString(16), removeCard);
          //如果要插入的牌是小鸡，放在第一位


          if ((_crd && CardUtil === void 0 ? (_reportPossibleCrUseOfCardUtil({
            error: Error()
          }), CardUtil) : CardUtil).getCardValue(insertCard) === "0x21") {
            return 0;
          }

          for (var index = 0; index < cards.length; index++) {
            var card = cards[index];
            var checkIndex = void 0;

            if (card == insertCard) {
              checkIndex = index;
            } else if (card < insertCard && index + 1 < cards.length && insertCard <= cards[index + 1]) {
              checkIndex = index + 1;
            } else if (index == cards.length - 1 && insertCard > card) {
              checkIndex = cards.length;
            }

            if (checkIndex) {
              return checkIndex;
            }
          }

          return 0;
        }

        dumpMyHands() {
          var myPlayer = PlayerMgr.getInstance().getMyPlayerInfo();
          var majiangMap = [];

          for (var i = 0; i < myPlayer.handCards.length; i++) {
            var cardStr = (_crd && CardUtil === void 0 ? (_reportPossibleCrUseOfCardUtil({
              error: Error()
            }), CardUtil) : CardUtil).getCardValue(myPlayer.handCards[i]);
            majiangMap.push((_crd && MahjongMap === void 0 ? (_reportPossibleCrUseOfMahjongMap({
              error: Error()
            }), MahjongMap) : MahjongMap).get(cardStr));
          }

          console.log("dumpMyHands______________________", majiangMap);
        }

        updatePlayerCardsNum(cardsCount) {
          for (var i = 0; i < cardsCount.length; i++) {
            var player = this.findPlayerWithSeatId(i + 1);
            player.cardCount = cardsCount[i];
          }
        }

        findOtherPlayer() {
          return this.playerList.filter(user => user.seatId === (_crd && RoomMgr === void 0 ? (_reportPossibleCrUseOfRoomMgr({
            error: Error()
          }), RoomMgr) : RoomMgr).getInstance().mySeatId);
        }

        findPlayerWithUserId(userId) {
          return this.playerList.filter(user => user.userId === userId)[0];
        }

        findPlayerWithSeatId(seatId) {
          return this.playerList.filter(user => user.seatId === seatId)[0];
        }

        getMyPlayerInfo() {
          this.myPlayerInfo = this.findPlayerWithUserId((_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
            error: Error()
          }), GCache) : GCache).User.getUserMid());
          return this.myPlayerInfo;
        } //增加玩家


        addPlayerList(info) {
          this.parseUseInfo(info);

          if (Array.isArray(info)) {
            var newItems = info.filter(item => !this.playerList.some(_ref => {
              var {
                userId
              } = _ref;
              return userId === item.userId;
            }));
            this.playerList.push(...newItems);
          } else {
            var exists = this.playerList.some(user => user.userId === info.userId);

            if (!exists) {
              this.playerList.push(info);
            }
          }

          this.playerList = (_crd && CardUtil === void 0 ? (_reportPossibleCrUseOfCardUtil({
            error: Error()
          }), CardUtil) : CardUtil).sortPlayersBySeatId(this.playerList, (_crd && RoomMgr === void 0 ? (_reportPossibleCrUseOfRoomMgr({
            error: Error()
          }), RoomMgr) : RoomMgr).getInstance().mySeatId);
        } //将玩家str解析


        parseUseInfo(info) {
          if (Array.isArray(info)) {
            info.forEach(item => {
              item.gameUserInfo = JSON.parse(item.strUserInfo);
            });
          } else {
            info.gameUserInfo = JSON.parse(info.strUserInfo);
          }
        } //删除玩家


        deletePlayerList(info) {
          if (Array.isArray(info)) {
            this.playerList = this.playerList.filter(item => !info.some(otherItem => otherItem.userId === item.userId));
          } else {
            this.playerList = this.playerList.filter(item => item.userId !== info.userId);
          }

          this.playerList = (_crd && CardUtil === void 0 ? (_reportPossibleCrUseOfCardUtil({
            error: Error()
          }), CardUtil) : CardUtil).sortPlayersBySeatId(this.playerList, (_crd && RoomMgr === void 0 ? (_reportPossibleCrUseOfRoomMgr({
            error: Error()
          }), RoomMgr) : RoomMgr).getInstance().mySeatId);
        } //清理房间数据


        clear() {
          this.playerList = null;
        }

        getPlayerReadyStatus(userId) {
          var player = this.findPlayerWithUserId(userId);
          return player.isReady;
        }

        updatePlayerReadyStatus(userId) {
          var player = this.findPlayerWithUserId(userId);
          player.isReady = 1;
        }

        updatePlayerMoney(moneys) {
          for (var i = 0; i < moneys.length; i++) {
            var player = this.findPlayerWithSeatId(i + 1);
            player.money = moneys[i];

            if (player.userId === (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
              error: Error()
            }), GCache) : GCache).User.getUserMid()) {
              (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
                error: Error()
              }), GCache) : GCache).User.updateUserMoneyByID(0, player.money);
            }
          }
        }

        updateOutCards(resp) {
          var player = this.findPlayerWithUserId(resp.userId);
          var card = {
            card: resp.card,
            status: 0
          };
          player.outCards.push(card);
        }

        updateHandCards(resp) {
          for (var i = 0; i < resp.handCards.length; i++) {
            var player = this.findPlayerWithSeatId(i + 1);
            player.handCards = resp.handCards[i].handCards;
            player.huCard = resp.handCards[i].huCard;
            player.opGroups = resp.handCards[i].opGroups;
            player.tingCard = resp.handCards[i].tingCard;
            player.isUnTing = resp.handCards[i].isUnTing;
            player.customData = resp.handCards[i].customData;
          }
        } // public userOperationResult(resp:Game.IOperationResult) : void {
        // 	PlayerMgr.getInstance().userOperationResult(resp);
        // }


        deletePlayerLeave(userId) {
          this.playerList = this.playerList.filter(item => item.userId !== userId);
        }

        updatePlayerAiStatus(userId, isAi) {
          var player = this.findPlayerWithUserId(userId);
          player.isAi = isAi;
        }

      });

      PlayerMgr.instance = null;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=3a1f6b4ca36d49b69aaaceeb841e4590b1ee241e.js.map