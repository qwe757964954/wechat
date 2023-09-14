System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Node, _decorator, EventManager, BaseComponent, OperationMgr, OperationResultMgr, PlayerMgr, RoomMgr, OPCode, GameEvent, MajiangUtil, CardUtil, MyPlayerCard, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, CardPlayManeger;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfEventManager(extras) {
    _reporterNs.report("EventManager", "../../../../framework/manager/EventManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../../../framework/vc/BaseComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfOperationMgr(extras) {
    _reporterNs.report("OperationMgr", "../../cache/OperationMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfOperationResultMgr(extras) {
    _reporterNs.report("OperationResultMgr", "../../cache/OperationResultMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerMgr(extras) {
    _reporterNs.report("PlayerMgr", "../../cache/PlayerMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoomMgr(extras) {
    _reporterNs.report("RoomMgr", "../../cache/RoomMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfOPCode(extras) {
    _reporterNs.report("OPCode", "../../common/FXJConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameEvent(extras) {
    _reporterNs.report("GameEvent", "../../common/GameEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGame(extras) {
    _reporterNs.report("Game", "../../common/idl/Game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMajiangUtil(extras) {
    _reporterNs.report("MajiangUtil", "../../common/MajiangUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCardUtil(extras) {
    _reporterNs.report("CardUtil", "../../util/CardUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMyPlayerCard(extras) {
    _reporterNs.report("MyPlayerCard", "./MyPlayerCard", _context.meta, extras);
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
      EventManager = _unresolved_2.EventManager;
    }, function (_unresolved_3) {
      BaseComponent = _unresolved_3.BaseComponent;
    }, function (_unresolved_4) {
      OperationMgr = _unresolved_4.OperationMgr;
    }, function (_unresolved_5) {
      OperationResultMgr = _unresolved_5.OperationResultMgr;
    }, function (_unresolved_6) {
      PlayerMgr = _unresolved_6.PlayerMgr;
    }, function (_unresolved_7) {
      RoomMgr = _unresolved_7.RoomMgr;
    }, function (_unresolved_8) {
      OPCode = _unresolved_8.OPCode;
    }, function (_unresolved_9) {
      GameEvent = _unresolved_9.GameEvent;
    }, function (_unresolved_10) {
      MajiangUtil = _unresolved_10.MajiangUtil;
    }, function (_unresolved_11) {
      CardUtil = _unresolved_11.CardUtil;
    }, function (_unresolved_12) {
      MyPlayerCard = _unresolved_12.MyPlayerCard;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a8830euEiJGB5xuwrztd7a9", "CardPlayManeger", undefined);

      __checkObsolete__(['Node', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Name = MyPlayer
       * URL = db://assets/package/game/scripts/MyPlayer.ts
       * Time = Fri Aug 11 2023 11:08:16 GMT+0800 (中国标准时间)
       * Author = qwe757964
       *
       * Life: onLoad-->onInitModuleEvent-->onEnable->start->update->lateUpdate->onDisable->onDestroy
       * 
       */

      _export("CardPlayManeger", CardPlayManeger = (_dec = ccclass('CardPlayManeger'), _dec2 = property({
        tooltip: "手牌节点",
        type: Node
      }), _dec(_class = (_class2 = class CardPlayManeger extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "nodeCardView", _descriptor, this);

          this.pengArr = [(_crd && OPCode === void 0 ? (_reportPossibleCrUseOfOPCode({
            error: Error()
          }), OPCode) : OPCode).OPE_PENG, (_crd && OPCode === void 0 ? (_reportPossibleCrUseOfOPCode({
            error: Error()
          }), OPCode) : OPCode).OPE_QIANG_PENG];
          this.chiArr = [(_crd && OPCode === void 0 ? (_reportPossibleCrUseOfOPCode({
            error: Error()
          }), OPCode) : OPCode).OPE_RIGHT_CHI, (_crd && OPCode === void 0 ? (_reportPossibleCrUseOfOPCode({
            error: Error()
          }), OPCode) : OPCode).OPE_MIDDLE_CHI, (_crd && OPCode === void 0 ? (_reportPossibleCrUseOfOPCode({
            error: Error()
          }), OPCode) : OPCode).OPE_LEFT_CHI];
        }

        /** override 初始化模块事件 */
        onInitModuleEvent() {
          this.addModelListener((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).VIEW_BROADCAST_DEAL_CARD, this.onDealCard);
          this.addModelListener((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).RECEIVE_DEAL_CARD, this.receiveDealCard);
          this.addModelListener((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).DRAW_MY_CARD, this.drawMyCard);
          this.addModelListener((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).UPDATE_OPERATION_RESULT, this.onPlayerOpResult);
          this.addModelListener((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).VIEW_BROADCAST_GAME_OVER, this.onBroadcastGameOver);
        }

        onBroadcastGameOver() {
          var myHand = this.nodeCardView.getComponent(_crd && MyPlayerCard === void 0 ? (_reportPossibleCrUseOfMyPlayerCard({
            error: Error()
          }), MyPlayerCard) : MyPlayerCard);
          myHand.node.active = false; // myHand.showdownCard();
        } //自己抓牌


        drawMyCard(event) {
          var cardsList = (_crd && OperationMgr === void 0 ? (_reportPossibleCrUseOfOperationMgr({
            error: Error()
          }), OperationMgr) : OperationMgr).getInstance().getDrawCardList();

          if (cardsList.length === 0) {
            return;
          }

          var myHand = this.nodeCardView.getComponent(_crd && MyPlayerCard === void 0 ? (_reportPossibleCrUseOfMyPlayerCard({
            error: Error()
          }), MyPlayerCard) : MyPlayerCard);
          myHand.drawByte = cardsList[0]; //自己抓牌

          myHand.drawCard(myHand.drawByte);
        } //分牌


        onDealCard(event, resp) {
          var myHand = this.nodeCardView.getComponent(_crd && MyPlayerCard === void 0 ? (_reportPossibleCrUseOfMyPlayerCard({
            error: Error()
          }), MyPlayerCard) : MyPlayerCard); //自己是庄家        

          var isDealer = resp.cards.length === 14;
          myHand.addHandCards(resp.cards, isDealer, null, isDealer);
          myHand.node.active = true;
          myHand.playAnimOfShow();
        } //重连分牌


        receiveDealCard(event) {
          var myHand = this.nodeCardView.getComponent(_crd && MyPlayerCard === void 0 ? (_reportPossibleCrUseOfMyPlayerCard({
            error: Error()
          }), MyPlayerCard) : MyPlayerCard);
          myHand.node.active = true;
          myHand.addHandCards((_crd && PlayerMgr === void 0 ? (_reportPossibleCrUseOfPlayerMgr({
            error: Error()
          }), PlayerMgr) : PlayerMgr).getInstance().getMyhands(), false, null, false);
          myHand.playAnimOfShow();
        } //自己出牌


        onOutCard() {
          var myHand = this.nodeCardView.getComponent(_crd && MyPlayerCard === void 0 ? (_reportPossibleCrUseOfMyPlayerCard({
            error: Error()
          }), MyPlayerCard) : MyPlayerCard);
          (_crd && PlayerMgr === void 0 ? (_reportPossibleCrUseOfPlayerMgr({
            error: Error()
          }), PlayerMgr) : PlayerMgr).getInstance().dumpMyHands();
          var indexs = (_crd && PlayerMgr === void 0 ? (_reportPossibleCrUseOfPlayerMgr({
            error: Error()
          }), PlayerMgr) : PlayerMgr).getInstance().getOpIndexs((_crd && OperationResultMgr === void 0 ? (_reportPossibleCrUseOfOperationResultMgr({
            error: Error()
          }), OperationResultMgr) : OperationResultMgr).getInstance().opCards);
          var removed = myHand.playCardFromHandAnim(indexs[0], indexs.length === 0);

          if (removed) {
            var insertIndex = (_crd && PlayerMgr === void 0 ? (_reportPossibleCrUseOfPlayerMgr({
              error: Error()
            }), PlayerMgr) : PlayerMgr).getInstance().getIndexByHandCards(myHand.drawByte, (_crd && OperationResultMgr === void 0 ? (_reportPossibleCrUseOfOperationResultMgr({
              error: Error()
            }), OperationResultMgr) : OperationResultMgr).getInstance().opCard);
            myHand.makeSlotAnim(insertIndex);
            myHand.drawCardToSlot();
          }

          (_crd && OperationMgr === void 0 ? (_reportPossibleCrUseOfOperationMgr({
            error: Error()
          }), OperationMgr) : OperationMgr).getInstance().getMyHandCardResult((_crd && OperationResultMgr === void 0 ? (_reportPossibleCrUseOfOperationResultMgr({
            error: Error()
          }), OperationResultMgr) : OperationResultMgr).getInstance().opCards); // PlayerMgr.getInstance().dumpMyHands();

          myHand.updateHandPositionAndName(); // PlayerMgr.getInstance().dumpMyHands();

          (_crd && OperationMgr === void 0 ? (_reportPossibleCrUseOfOperationMgr({
            error: Error()
          }), OperationMgr) : OperationMgr).getInstance().myOpCode = 0;
        } //自己碰杠


        onPengGangCard() {
          var myHand = this.nodeCardView.getComponent(_crd && MyPlayerCard === void 0 ? (_reportPossibleCrUseOfMyPlayerCard({
            error: Error()
          }), MyPlayerCard) : MyPlayerCard);
          var indexs = (_crd && PlayerMgr === void 0 ? (_reportPossibleCrUseOfPlayerMgr({
            error: Error()
          }), PlayerMgr) : PlayerMgr).getInstance().getOpIndexs((_crd && OperationResultMgr === void 0 ? (_reportPossibleCrUseOfOperationResultMgr({
            error: Error()
          }), OperationResultMgr) : OperationResultMgr).getInstance().opCards);
          (_crd && MajiangUtil === void 0 ? (_reportPossibleCrUseOfMajiangUtil({
            error: Error()
          }), MajiangUtil) : MajiangUtil).deleteHasInList((_crd && PlayerMgr === void 0 ? (_reportPossibleCrUseOfPlayerMgr({
            error: Error()
          }), PlayerMgr) : PlayerMgr).getInstance().getMyhands(), (_crd && OperationResultMgr === void 0 ? (_reportPossibleCrUseOfOperationResultMgr({
            error: Error()
          }), OperationResultMgr) : OperationResultMgr).getInstance().opCards);
          myHand.stackAnim(indexs); // myHand.updateHandPositionAndName();
        }

        getIndexByCards(insertCard) {
          var myCards = (_crd && PlayerMgr === void 0 ? (_reportPossibleCrUseOfPlayerMgr({
            error: Error()
          }), PlayerMgr) : PlayerMgr).getInstance().getMyhands();
          var cards = [...myCards];
          cards = (_crd && CardUtil === void 0 ? (_reportPossibleCrUseOfCardUtil({
            error: Error()
          }), CardUtil) : CardUtil).sortFeiXiaoJiCards(cards);

          for (var index = 0; index < cards.length; index++) {
            if (cards[index] == insertCard) {
              // console.log("=getIndexByCards=", cards, insertCard, insertCard.toString(16), index)
              return index;
            }
          }

          return 0;
        } //暗杠


        onAnGangCard() {
          var myHand = this.nodeCardView.getComponent(_crd && MyPlayerCard === void 0 ? (_reportPossibleCrUseOfMyPlayerCard({
            error: Error()
          }), MyPlayerCard) : MyPlayerCard);
          var indexs = (_crd && PlayerMgr === void 0 ? (_reportPossibleCrUseOfPlayerMgr({
            error: Error()
          }), PlayerMgr) : PlayerMgr).getInstance().getOpIndexs((_crd && OperationResultMgr === void 0 ? (_reportPossibleCrUseOfOperationResultMgr({
            error: Error()
          }), OperationResultMgr) : OperationResultMgr).getInstance().opCards);
          var isGrab = (_crd && OperationResultMgr === void 0 ? (_reportPossibleCrUseOfOperationResultMgr({
            error: Error()
          }), OperationResultMgr) : OperationResultMgr).getInstance().opCards.indexOf(myHand.drawByte) !== -1;

          if (isGrab) {
            myHand.removeDrawCard();
            myHand.stackAnim(indexs);
            (_crd && OperationMgr === void 0 ? (_reportPossibleCrUseOfOperationMgr({
              error: Error()
            }), OperationMgr) : OperationMgr).getInstance().getMyHandCardResult((_crd && OperationResultMgr === void 0 ? (_reportPossibleCrUseOfOperationResultMgr({
              error: Error()
            }), OperationResultMgr) : OperationResultMgr).getInstance().opCards);
          } else {
            var index = (_crd && OperationMgr === void 0 ? (_reportPossibleCrUseOfOperationMgr({
              error: Error()
            }), OperationMgr) : OperationMgr).getInstance().getIndexByCards(myHand.drawByte);
            (_crd && OperationMgr === void 0 ? (_reportPossibleCrUseOfOperationMgr({
              error: Error()
            }), OperationMgr) : OperationMgr).getInstance().getMyHandCardResult((_crd && OperationResultMgr === void 0 ? (_reportPossibleCrUseOfOperationResultMgr({
              error: Error()
            }), OperationResultMgr) : OperationResultMgr).getInstance().opCards);
            myHand.stackAnim(indexs, myHand.drawByte, index);
          }
        } //补杠


        onBuGangCard() {
          var myHand = this.nodeCardView.getComponent(_crd && MyPlayerCard === void 0 ? (_reportPossibleCrUseOfMyPlayerCard({
            error: Error()
          }), MyPlayerCard) : MyPlayerCard);
          myHand.removeDrawCard();
        } //自己吃


        onChiCard() {
          var myHand = this.nodeCardView.getComponent(_crd && MyPlayerCard === void 0 ? (_reportPossibleCrUseOfMyPlayerCard({
            error: Error()
          }), MyPlayerCard) : MyPlayerCard);
          var indexs = (_crd && PlayerMgr === void 0 ? (_reportPossibleCrUseOfPlayerMgr({
            error: Error()
          }), PlayerMgr) : PlayerMgr).getInstance().getOpIndexs((_crd && OperationResultMgr === void 0 ? (_reportPossibleCrUseOfOperationResultMgr({
            error: Error()
          }), OperationResultMgr) : OperationResultMgr).getInstance().opCards);
          myHand.cancelOpcardTouch((_crd && OperationResultMgr === void 0 ? (_reportPossibleCrUseOfOperationResultMgr({
            error: Error()
          }), OperationResultMgr) : OperationResultMgr).getInstance().opCard);
          (_crd && OperationResultMgr === void 0 ? (_reportPossibleCrUseOfOperationResultMgr({
            error: Error()
          }), OperationResultMgr) : OperationResultMgr).getInstance().opCards = (_crd && OperationResultMgr === void 0 ? (_reportPossibleCrUseOfOperationResultMgr({
            error: Error()
          }), OperationResultMgr) : OperationResultMgr).getInstance().opCards.filter(item => item !== (_crd && OperationResultMgr === void 0 ? (_reportPossibleCrUseOfOperationResultMgr({
            error: Error()
          }), OperationResultMgr) : OperationResultMgr).getInstance().opCard);
          (_crd && MajiangUtil === void 0 ? (_reportPossibleCrUseOfMajiangUtil({
            error: Error()
          }), MajiangUtil) : MajiangUtil).deleteHasInList((_crd && PlayerMgr === void 0 ? (_reportPossibleCrUseOfPlayerMgr({
            error: Error()
          }), PlayerMgr) : PlayerMgr).getInstance().getMyhands(), (_crd && OperationResultMgr === void 0 ? (_reportPossibleCrUseOfOperationResultMgr({
            error: Error()
          }), OperationResultMgr) : OperationResultMgr).getInstance().opCards);
          myHand.stackAnim(indexs);
          (_crd && OperationMgr === void 0 ? (_reportPossibleCrUseOfOperationMgr({
            error: Error()
          }), OperationMgr) : OperationMgr).getInstance().chiUpdateOutCardList((_crd && PlayerMgr === void 0 ? (_reportPossibleCrUseOfPlayerMgr({
            error: Error()
          }), PlayerMgr) : PlayerMgr).getInstance().getMyhands()); // myHand.updateHandPositionAndName();
        }

        playerMySelfCard() {
          var myHand = this.nodeCardView.getComponent(_crd && MyPlayerCard === void 0 ? (_reportPossibleCrUseOfMyPlayerCard({
            error: Error()
          }), MyPlayerCard) : MyPlayerCard);

          switch ((_crd && OperationResultMgr === void 0 ? (_reportPossibleCrUseOfOperationResultMgr({
            error: Error()
          }), OperationResultMgr) : OperationResultMgr).getInstance().opCode) {
            case (_crd && OPCode === void 0 ? (_reportPossibleCrUseOfOPCode({
              error: Error()
            }), OPCode) : OPCode).OPE_OUT_CARD:
              myHand.updateOpcardTouch(); //自己出牌

              this.onOutCard();
              break;

            case (_crd && OPCode === void 0 ? (_reportPossibleCrUseOfOPCode({
              error: Error()
            }), OPCode) : OPCode).OPE_PENG:
              //自己碰
              this.onPengGangCard();
              break;

            case (_crd && OPCode === void 0 ? (_reportPossibleCrUseOfOPCode({
              error: Error()
            }), OPCode) : OPCode).OPE_AN_GANG:
              //自己暗杠
              this.onAnGangCard();
              break;

            case (_crd && OPCode === void 0 ? (_reportPossibleCrUseOfOPCode({
              error: Error()
            }), OPCode) : OPCode).OPE_GANG:
              //自己杠
              this.onPengGangCard();
              break;

            case (_crd && OPCode === void 0 ? (_reportPossibleCrUseOfOPCode({
              error: Error()
            }), OPCode) : OPCode).OPE_BU_GANG:
              //自己补杠
              this.onBuGangCard();
              break;

            case (_crd && OPCode === void 0 ? (_reportPossibleCrUseOfOPCode({
              error: Error()
            }), OPCode) : OPCode).OPE_LEFT_CHI:
              //自己左吃
              this.onChiCard();
              break;

            case (_crd && OPCode === void 0 ? (_reportPossibleCrUseOfOPCode({
              error: Error()
            }), OPCode) : OPCode).OPE_MIDDLE_CHI:
              //自己中吃
              this.onChiCard();
              break;

            case (_crd && OPCode === void 0 ? (_reportPossibleCrUseOfOPCode({
              error: Error()
            }), OPCode) : OPCode).OPE_RIGHT_CHI:
              //自己右吃
              this.onChiCard();
              break;
          }
        } //操作


        onPlayerOpResult(event, resp) {
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).UPDATE_USER_OPERATION_RESULT, resp); //我自己

          if ((_crd && OperationResultMgr === void 0 ? (_reportPossibleCrUseOfOperationResultMgr({
            error: Error()
          }), OperationResultMgr) : OperationResultMgr).getInstance().seatId === (_crd && RoomMgr === void 0 ? (_reportPossibleCrUseOfRoomMgr({
            error: Error()
          }), RoomMgr) : RoomMgr).getInstance().mySeatId) {
            this.playerMySelfCard(); // console.log("减去我自己出的牌操作",resp);
          } else {
            console.log("其他玩家操作", resp);
          }
        }

        resetView() {
          var myHand = this.nodeCardView.getComponent(_crd && MyPlayerCard === void 0 ? (_reportPossibleCrUseOfMyPlayerCard({
            error: Error()
          }), MyPlayerCard) : MyPlayerCard);
          myHand.resetView();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "nodeCardView", [_dec2], {
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
//# sourceMappingURL=4294a4a3474b6a12dcda2de63cefc9c17fb15235.js.map