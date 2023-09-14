System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, BaseCache, OPCode, MajiangUtil, CardUtil, PlayerMgr, OperationMgr, _crd;

  function _reportPossibleCrUseOfBaseCache(extras) {
    _reporterNs.report("BaseCache", "../../../framework/vc/BaseCache", _context.meta, extras);
  }

  function _reportPossibleCrUseOfOPCode(extras) {
    _reporterNs.report("OPCode", "../common/FXJConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCommon(extras) {
    _reporterNs.report("Common", "../common/idl/Common", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGame(extras) {
    _reporterNs.report("Game", "../common/idl/Game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMajiangUtil(extras) {
    _reporterNs.report("MajiangUtil", "../common/MajiangUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCardUtil(extras) {
    _reporterNs.report("CardUtil", "../util/CardUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerMgr(extras) {
    _reporterNs.report("PlayerMgr", "./PlayerMgr", _context.meta, extras);
  }

  _export("OperationMgr", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      BaseCache = _unresolved_2.BaseCache;
    }, function (_unresolved_3) {
      OPCode = _unresolved_3.OPCode;
    }, function (_unresolved_4) {
      MajiangUtil = _unresolved_4.MajiangUtil;
    }, function (_unresolved_5) {
      CardUtil = _unresolved_5.CardUtil;
    }, function (_unresolved_6) {
      PlayerMgr = _unresolved_6.PlayerMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "66994Kjb+NKvIYnENLrxVK+", "OperationMgr", undefined);

      _export("OperationMgr", OperationMgr = class OperationMgr extends (_crd && BaseCache === void 0 ? (_reportPossibleCrUseOfBaseCache({
        error: Error()
      }), BaseCache) : BaseCache) {
        constructor(name = "") {
          super(name);
          this.seatId = 0;
          this.userId = 0;
          this.myOpCode = 0;
          this.cardSeatId = 0;
          this.cardUserId = 0;
          this.opGroups = null;
          this.tingInfos = null;
          this.extendInfo = "";
          this.outCardList = [];
        }

        static getInstance() {
          if (!OperationMgr.instance) {
            OperationMgr.instance = new OperationMgr();
          }

          return OperationMgr.instance;
        } // public findCardListWithOpcode( opCode: number):number {
        //     this.opGroups.forEach((opInfo:Common.IOpGroup) => {
        //         if(opInfo.opCode === opCode){
        //             return opInfo.cardsList[];
        //         }
        //     });
        // }


        getPassNumber() {
          let num = 0;
          this.opGroups.forEach(opInfo => {
            if (opInfo.opCode === (_crd && OPCode === void 0 ? (_reportPossibleCrUseOfOPCode({
              error: Error()
            }), OPCode) : OPCode).OPE_PASS) {
              num = opInfo.cardsList[0].cards[0];
            }
          });
          return num;
        }

        getHuNumber() {
          let num = 0;
          this.opGroups.forEach(opInfo => {
            if (opInfo.opCode === (_crd && OPCode === void 0 ? (_reportPossibleCrUseOfOPCode({
              error: Error()
            }), OPCode) : OPCode).OPE_HU) {
              num = opInfo.cardsList[0].cards[0];
            } else if (opInfo.opCode === (_crd && OPCode === void 0 ? (_reportPossibleCrUseOfOPCode({
              error: Error()
            }), OPCode) : OPCode).OPE_ZI_MO) {
              num = opInfo.cardsList[0].cards[0];
            }
          });
          return num;
        }

        getOprationListNumber(opCode, index) {
          let list = [];
          this.opGroups.forEach(opInfo => {
            if (opInfo.opCode === opCode) {
              list = opInfo.cardsList[index].cards;
            }
          });
          return list;
        }

        isMoreOpration(opCode) {
          let isMore = false;
          this.opGroups.forEach(opInfo => {
            if (opInfo.opCode === opCode) {
              isMore = opInfo.cardsList.length > 1;
            }
          });
          return isMore;
        }

        getOprationCardList(opCode) {
          let cardList = [];
          this.opGroups.forEach(opInfo => {
            if (opInfo.opCode === opCode) {
              cardList = opInfo.cardsList;
            }
          });
          return cardList;
        }

        getSendCardListNumber(index) {
          let list = [];
          this.opGroups.forEach(opInfo => {
            if (opInfo.opCode === (_crd && OPCode === void 0 ? (_reportPossibleCrUseOfOPCode({
              error: Error()
            }), OPCode) : OPCode).OPE_OUT_CARD) {
              list = opInfo.cardsList[index].cards;
            }
          });
          return list;
        }

        updateMyselfOpration(resp) {
          this.seatId = resp.seatId;
          this.userId = resp.userId;
          this.cardSeatId = resp.cardSeatId;
          this.cardUserId = resp.cardUserId;
          this.opGroups = resp.opGroups;
          this.tingInfos = resp.tingInfos;
          this.extendInfo = resp.extendInfo;
          this.getOutCardList();
        }

        getOutCardList() {
          this.outCardList = [];
          this.opGroups.forEach(opInfo => {
            if (opInfo.opCode === (_crd && OPCode === void 0 ? (_reportPossibleCrUseOfOPCode({
              error: Error()
            }), OPCode) : OPCode).OPE_OUT_CARD) {
              opInfo.cardsList.forEach(element => {
                this.outCardList.push(element.cards[0]);
              });
            }
          });
          this.outCardList = (_crd && CardUtil === void 0 ? (_reportPossibleCrUseOfCardUtil({
            error: Error()
          }), CardUtil) : CardUtil).sortFeiXiaoJiCards(this.outCardList);
        }

        getDrawCardList() {
          const cloneList = this.outCardList.slice();

          if (cloneList.length == 0) {
            return [];
          }

          (_crd && MajiangUtil === void 0 ? (_reportPossibleCrUseOfMajiangUtil({
            error: Error()
          }), MajiangUtil) : MajiangUtil).deleteHasInList(cloneList, (_crd && PlayerMgr === void 0 ? (_reportPossibleCrUseOfPlayerMgr({
            error: Error()
          }), PlayerMgr) : PlayerMgr).getInstance().getMyhands());
          return cloneList;
        }

        getMyHandCardResult(list) {
          const cloneList = this.outCardList.slice();
          (_crd && MajiangUtil === void 0 ? (_reportPossibleCrUseOfMajiangUtil({
            error: Error()
          }), MajiangUtil) : MajiangUtil).deleteHasInList(cloneList, list);
          (_crd && PlayerMgr === void 0 ? (_reportPossibleCrUseOfPlayerMgr({
            error: Error()
          }), PlayerMgr) : PlayerMgr).getInstance().updateMyhands(cloneList);
        }

        getIndexByCards(insertCard) {
          let cards = [...this.outCardList];
          cards = (_crd && CardUtil === void 0 ? (_reportPossibleCrUseOfCardUtil({
            error: Error()
          }), CardUtil) : CardUtil).sortFeiXiaoJiCards(cards);

          for (let index = 0; index < cards.length; index++) {
            if (cards[index] == insertCard) {
              return index;
            }
          }

          return 0;
        }

        chiUpdateOutCardList(list) {
          this.outCardList = list.slice();
        }

        getSendCardIndex(byte) {
          const index = this.outCardList.findIndex(item => item === byte);
          return index;
        } //清理房间数据


        clear() {// this.bankerInfo = null;
        }

      });

      OperationMgr.instance = null;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a1ab4d2e95d9849875242d69ef05bb24115cd23f.js.map