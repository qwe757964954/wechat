System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, instantiate, Node, Vec3, EventManager, Utils, BaseComponent, RoomMgr, OPCode, FXJEvent, GameViewConfig, CardUtil, NodeCardCtr, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, NodeMeldCardCtr;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfEventManager(extras) {
    _reporterNs.report("EventManager", "../../../framework/manager/EventManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUtils(extras) {
    _reporterNs.report("Utils", "../../../framework/Utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../../framework/vc/BaseComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoomMgr(extras) {
    _reporterNs.report("RoomMgr", "../cache/RoomMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfOPCode(extras) {
    _reporterNs.report("OPCode", "../common/FXJConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFXJEvent(extras) {
    _reporterNs.report("FXJEvent", "../common/FXJEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameViewConfig(extras) {
    _reporterNs.report("GameViewConfig", "../common/GameViewConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGame(extras) {
    _reporterNs.report("Game", "../common/idl/Game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCardUtil(extras) {
    _reporterNs.report("CardUtil", "../util/CardUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNodeCardCtr(extras) {
    _reporterNs.report("NodeCardCtr", "./NodeCardCtr", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      instantiate = _cc.instantiate;
      Node = _cc.Node;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      EventManager = _unresolved_2.EventManager;
    }, function (_unresolved_3) {
      Utils = _unresolved_3.Utils;
    }, function (_unresolved_4) {
      BaseComponent = _unresolved_4.BaseComponent;
    }, function (_unresolved_5) {
      RoomMgr = _unresolved_5.RoomMgr;
    }, function (_unresolved_6) {
      OPCode = _unresolved_6.OPCode;
    }, function (_unresolved_7) {
      FXJEvent = _unresolved_7.FXJEvent;
    }, function (_unresolved_8) {
      GameViewConfig = _unresolved_8.GameViewConfig;
    }, function (_unresolved_9) {
      CardUtil = _unresolved_9.CardUtil;
    }, function (_unresolved_10) {
      NodeCardCtr = _unresolved_10.NodeCardCtr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "057889IyxlL36fxEZdr/9kN", "NodeMeldCardCtr", undefined);

      __checkObsolete__(['_decorator', 'instantiate', 'Node', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Name = NodeMeldCardCtr
       * URL = db://assets/package/game/scripts/NodeMeldCardCtr.ts
       * Time = Mon Aug 14 2023 12:07:38 GMT+0800 (中国标准时间)
       * Author = harvyson
       *
       * Life: onLoad-->onInitModuleEvent-->onEnable->start->update->lateUpdate->onDisable->onDestroy
       * 
       */

      _export("NodeMeldCardCtr", NodeMeldCardCtr = (_dec = ccclass('NodeMeldCardCtr'), _dec2 = property({
        tooltip: "牌节点",
        type: Node
      }), _dec(_class = (_class2 = class NodeMeldCardCtr extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "nodeCard", _descriptor, this);

          this._hostDir = 0;
          this._seatList = null;
          this._dataList = null;
          this._edgeList = null;
          this._distanceList = null;
        }

        /** override 初始化模块事件 */
        onInitModuleEvent() {}

        onLoad() {
          this.initData();
          this.initView();
        }

        start() {}

        initData() {
          this._seatList = new Array(4);
          this._dataList = [[], [], [], []];
          this._edgeList = [0, 0, 0, 0];
          this._distanceList = [0, 0, 0, 0];
        }

        initView() {
          for (var dir = 0; dir < 4; dir++) {
            var nodeSeat = new Node();
            nodeSeat.setRotationFromEuler(0, 90 * dir, 0);
            this.node.addChild(nodeSeat);
            this._seatList[dir] = nodeSeat;
          }
        }

        resetView() {
          this._hostDir = (_crd && RoomMgr === void 0 ? (_reportPossibleCrUseOfRoomMgr({
            error: Error()
          }), RoomMgr) : RoomMgr).getInstance().mySeatId - 1;
          this._edgeList[this.getDir(0)] = (_crd && GameViewConfig === void 0 ? (_reportPossibleCrUseOfGameViewConfig({
            error: Error()
          }), GameViewConfig) : GameViewConfig).CardConfig.EdgeToMeld[0]; // 本家配置

          this._edgeList[this.getDir(1)] = (_crd && GameViewConfig === void 0 ? (_reportPossibleCrUseOfGameViewConfig({
            error: Error()
          }), GameViewConfig) : GameViewConfig).CardConfig.EdgeToMeld[1]; // 下家配置

          this._edgeList[this.getDir(2)] = (_crd && GameViewConfig === void 0 ? (_reportPossibleCrUseOfGameViewConfig({
            error: Error()
          }), GameViewConfig) : GameViewConfig).CardConfig.EdgeToMeld[2]; // 对家配置

          this._edgeList[this.getDir(3)] = (_crd && GameViewConfig === void 0 ? (_reportPossibleCrUseOfGameViewConfig({
            error: Error()
          }), GameViewConfig) : GameViewConfig).CardConfig.EdgeToMeld[3]; // 上家配置

          this._distanceList[this.getDir(0)] = (_crd && GameViewConfig === void 0 ? (_reportPossibleCrUseOfGameViewConfig({
            error: Error()
          }), GameViewConfig) : GameViewConfig).CardConfig.CenterToMeld[0]; // 本家配置

          this._distanceList[this.getDir(1)] = (_crd && GameViewConfig === void 0 ? (_reportPossibleCrUseOfGameViewConfig({
            error: Error()
          }), GameViewConfig) : GameViewConfig).CardConfig.CenterToMeld[1]; // 下家配置

          this._distanceList[this.getDir(2)] = (_crd && GameViewConfig === void 0 ? (_reportPossibleCrUseOfGameViewConfig({
            error: Error()
          }), GameViewConfig) : GameViewConfig).CardConfig.CenterToMeld[2]; // 对家配置

          this._distanceList[this.getDir(3)] = (_crd && GameViewConfig === void 0 ? (_reportPossibleCrUseOfGameViewConfig({
            error: Error()
          }), GameViewConfig) : GameViewConfig).CardConfig.CenterToMeld[3]; // 上家配置

          this._dataList = [[], [], [], []];

          this._seatList.forEach((value, index, array) => {
            value.removeAllChildren();
          });
        }

        getDir(dirLocal) {
          var dir = this._hostDir + dirLocal;
          return dir % 4;
        }
        /** 游戏开始 */


        onGameStart() {
          this.resetView();
        }
        /** 换位 */


        OnChangedSeat(hostDir) {
          this._hostDir = hostDir;
          this.resetView(); // 换位需要重置碰杠牌显示配置
        }
        /** 碰杠 */


        onPengGang(data) {
          var dir = data.seatId - 1;
          var dirOut = data.cardSeatId - 1;

          switch (data.opCode) {
            case (_crd && OPCode === void 0 ? (_reportPossibleCrUseOfOPCode({
              error: Error()
            }), OPCode) : OPCode).OPE_RIGHT_CHI: // 右吃

            case (_crd && OPCode === void 0 ? (_reportPossibleCrUseOfOPCode({
              error: Error()
            }), OPCode) : OPCode).OPE_MIDDLE_CHI: // 中吃

            case (_crd && OPCode === void 0 ? (_reportPossibleCrUseOfOPCode({
              error: Error()
            }), OPCode) : OPCode).OPE_LEFT_CHI: // 左吃

            case (_crd && OPCode === void 0 ? (_reportPossibleCrUseOfOPCode({
              error: Error()
            }), OPCode) : OPCode).OPE_PENG: // 碰

            case (_crd && OPCode === void 0 ? (_reportPossibleCrUseOfOPCode({
              error: Error()
            }), OPCode) : OPCode).OPE_QIANG_PENG:
              // 抢碰
              this.makeMeldPeng(dir, dirOut, data.opCode, data.opCard, data.opCards, true);
              break;

            case (_crd && OPCode === void 0 ? (_reportPossibleCrUseOfOPCode({
              error: Error()
            }), OPCode) : OPCode).OPE_AN_GANG:
              // 暗杠
              this.makeMeldAnGang(dir, dirOut, data.opCode, data.opCard, data.opCards, false);
              break;

            case (_crd && OPCode === void 0 ? (_reportPossibleCrUseOfOPCode({
              error: Error()
            }), OPCode) : OPCode).OPE_GANG:
              // 杠
              this.makeMeldMingGang(dir, dirOut, data.opCode, data.opCard, data.opCards, false);
              break;

            case (_crd && OPCode === void 0 ? (_reportPossibleCrUseOfOPCode({
              error: Error()
            }), OPCode) : OPCode).OPE_BU_GANG:
              // 补杠
              this.makeMeldBuGang(dir, dirOut, data.opCode, data.opCard, data.opCards, false);
              break;

            default:
              break;
          }
        }
        /** 碰 */


        makeMeldPeng(dir, dirOut, opCode, opCard, opCards, showAnim) {
          var who = (_crd && CardUtil === void 0 ? (_reportPossibleCrUseOfCardUtil({
            error: Error()
          }), CardUtil) : CardUtil).calculatePlayerPosition(dir + 1, dirOut + 1);
          var width = (_crd && GameViewConfig === void 0 ? (_reportPossibleCrUseOfGameViewConfig({
            error: Error()
          }), GameViewConfig) : GameViewConfig).CardConfig.Width;
          var height = (_crd && GameViewConfig === void 0 ? (_reportPossibleCrUseOfGameViewConfig({
            error: Error()
          }), GameViewConfig) : GameViewConfig).CardConfig.Height;
          var groundToCard = (_crd && GameViewConfig === void 0 ? (_reportPossibleCrUseOfGameViewConfig({
            error: Error()
          }), GameViewConfig) : GameViewConfig).CardConfig.GroundToCard;
          var rightToLeft = this._edgeList[dir];
          var distance = this._distanceList[dir];
          var buPos = null;
          var middleCard = null;

          for (var i = 0; i < 3; i++) {
            var card = instantiate(this.nodeCard);

            if (i == 0 && who == "下家" || // 下家的第一张牌
            i == 1 && who == "对家" || // 对家的第二张牌
            i == 2 && who == "上家") {
              // 上家的第三张牌
              buPos = new Vec3(rightToLeft - height * 0.5, groundToCard, distance - width * 1.5);
              card.setPosition(rightToLeft - height * 0.5, groundToCard, distance - width * 0.5);
              card.setRotationFromEuler(0, 90, 0);
              rightToLeft -= height + (_crd && GameViewConfig === void 0 ? (_reportPossibleCrUseOfGameViewConfig({
                error: Error()
              }), GameViewConfig) : GameViewConfig).CardConfig.SpaceMeldCard;
            } else {
              card.setPosition(rightToLeft - width * 0.5, groundToCard, distance - height * 0.5);
              card.setRotationFromEuler(0, 0, 0);
              rightToLeft -= width + (_crd && GameViewConfig === void 0 ? (_reportPossibleCrUseOfGameViewConfig({
                error: Error()
              }), GameViewConfig) : GameViewConfig).CardConfig.SpaceMeldCard;
            }

            card.active = true;

            this._seatList[dir].addChild(card);

            card.getComponent(_crd && NodeCardCtr === void 0 ? (_reportPossibleCrUseOfNodeCardCtr({
              error: Error()
            }), NodeCardCtr) : NodeCardCtr).setCardByte(opCards[i]); // mark

            if (i == 1) {
              middleCard = card;
            }
          }

          this._edgeList[dir] = rightToLeft - width * 0.5; // 追加两堆牌之间的间距

          this._dataList[dir].push({
            opCard: opCard,
            opCards: opCards,
            opCode: opCode,
            buPos: buPos
          }); // 碰牌烟雾动画 mark


          if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).isNotNull(middleCard)) {
            if (showAnim) {
              var data = {
                seatId: dir + 1,
                aniType: (_crd && GameViewConfig === void 0 ? (_reportPossibleCrUseOfGameViewConfig({
                  error: Error()
                }), GameViewConfig) : GameViewConfig).AnimType.Peng,
                pos: middleCard.getWorldPosition()
              };
              (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
                error: Error()
              }), EventManager) : EventManager).dispatch((_crd && FXJEvent === void 0 ? (_reportPossibleCrUseOfFXJEvent({
                error: Error()
              }), FXJEvent) : FXJEvent).VIEW_UI_3D_GET_CAMERA, (_crd && FXJEvent === void 0 ? (_reportPossibleCrUseOfFXJEvent({
                error: Error()
              }), FXJEvent) : FXJEvent).VIEW_OUT_CARD_ANI_PLAY, data);
            }
          }
        }
        /** 补杠 */


        makeMeldBuGang(dir, dirOut, opCode, opCard, opCards, showAnim) {
          var _this = this;

          var dataList = this._dataList[dir];

          for (var i = 0; i < dataList.length; i++) {
            var data = dataList[i];

            if ((data.opCode == (_crd && OPCode === void 0 ? (_reportPossibleCrUseOfOPCode({
              error: Error()
            }), OPCode) : OPCode).OPE_PENG || data.opCard == (_crd && OPCode === void 0 ? (_reportPossibleCrUseOfOPCode({
              error: Error()
            }), OPCode) : OPCode).OPE_QIANG_PENG) && (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).isNotNull(data.buPos)) {
              var _ret = function () {
                var map = {};
                opCards.forEach((value, index, array) => {
                  map[value] = true;
                });
                var contain = true;
                data.opCards.forEach((value, index, array) => {
                  if (!map[value]) {
                    contain = false;
                  }
                });

                if (contain) {
                  var card = instantiate(_this.nodeCard);
                  card.setPosition(data.buPos);
                  card.setRotationFromEuler(0, 90, 0);
                  card.active = true;

                  _this._seatList[dir].addChild(card);

                  card.getComponent(_crd && NodeCardCtr === void 0 ? (_reportPossibleCrUseOfNodeCardCtr({
                    error: Error()
                  }), NodeCardCtr) : NodeCardCtr).setCardByte(opCard); // mark

                  data.opCode = (_crd && OPCode === void 0 ? (_reportPossibleCrUseOfOPCode({
                    error: Error()
                  }), OPCode) : OPCode).OPE_BU_GANG; // 补杠

                  return {
                    v: void 0
                  };
                }
              }();

              if (typeof _ret === "object") return _ret.v;
            }
          }
        }
        /** 明杠 */


        makeMeldMingGang(dir, dirOut, opCode, opCard, opCards, showAnim) {
          var who = (_crd && CardUtil === void 0 ? (_reportPossibleCrUseOfCardUtil({
            error: Error()
          }), CardUtil) : CardUtil).calculatePlayerPosition(dir + 1, dirOut + 1);
          var width = (_crd && GameViewConfig === void 0 ? (_reportPossibleCrUseOfGameViewConfig({
            error: Error()
          }), GameViewConfig) : GameViewConfig).CardConfig.Width;
          var height = (_crd && GameViewConfig === void 0 ? (_reportPossibleCrUseOfGameViewConfig({
            error: Error()
          }), GameViewConfig) : GameViewConfig).CardConfig.Height;
          var groundToCard = (_crd && GameViewConfig === void 0 ? (_reportPossibleCrUseOfGameViewConfig({
            error: Error()
          }), GameViewConfig) : GameViewConfig).CardConfig.GroundToCard;
          var rightToLeft = this._edgeList[dir];
          var distance = this._distanceList[dir];

          for (var i = 0; i < 4; i++) {
            // 四张牌
            var card = instantiate(this.nodeCard);

            if (i == 0 && who == "下家" || // 下家的第一张牌
            i == 2 && who == "对家" || // 对家的第三张牌
            i == 3 && who == "上家") {
              // 上家的第四张牌
              card.setPosition(rightToLeft - height * 0.5, groundToCard, distance - width * 0.5);
              card.setRotationFromEuler(0, 90, 0);
              rightToLeft -= height + (_crd && GameViewConfig === void 0 ? (_reportPossibleCrUseOfGameViewConfig({
                error: Error()
              }), GameViewConfig) : GameViewConfig).CardConfig.SpaceMeldCard;
            } else {
              card.setPosition(rightToLeft - width * 0.5, groundToCard, distance - height * 0.5);
              card.setRotationFromEuler(0, 0, 0);
              rightToLeft -= width + (_crd && GameViewConfig === void 0 ? (_reportPossibleCrUseOfGameViewConfig({
                error: Error()
              }), GameViewConfig) : GameViewConfig).CardConfig.SpaceMeldCard;
            }

            card.active = true;

            this._seatList[dir].addChild(card);

            card.getComponent(_crd && NodeCardCtr === void 0 ? (_reportPossibleCrUseOfNodeCardCtr({
              error: Error()
            }), NodeCardCtr) : NodeCardCtr).setCardByte(opCards[i]); // mark
          }

          this._edgeList[dir] = rightToLeft - width * 0.5; // 追加两堆牌之间的间距

          this._dataList[dir].push({
            opCard: opCard,
            opCards: opCards,
            opCode: opCode
          });
        }
        /** 暗杠 */


        makeMeldAnGang(dir, dirOut, opCode, opCard, opCards, showAnim) {
          var width = (_crd && GameViewConfig === void 0 ? (_reportPossibleCrUseOfGameViewConfig({
            error: Error()
          }), GameViewConfig) : GameViewConfig).CardConfig.Width;
          var height = (_crd && GameViewConfig === void 0 ? (_reportPossibleCrUseOfGameViewConfig({
            error: Error()
          }), GameViewConfig) : GameViewConfig).CardConfig.Height;
          var groundToCard = (_crd && GameViewConfig === void 0 ? (_reportPossibleCrUseOfGameViewConfig({
            error: Error()
          }), GameViewConfig) : GameViewConfig).CardConfig.GroundToCard;
          var rightToLeft = this._edgeList[dir];
          var distance = this._distanceList[dir];

          for (var i = 0; i < 4; i++) {
            var card = instantiate(this.nodeCard);
            card.setPosition(rightToLeft - width * 0.5, groundToCard, distance - height * 0.5);

            if (i == 0 || i == 4) {
              card.setRotationFromEuler(0, 0, 180);
            } else {
              card.setRotationFromEuler(0, 0, 0);
            }

            card.active = true;

            this._seatList[dir].addChild(card);

            card.getComponent(_crd && NodeCardCtr === void 0 ? (_reportPossibleCrUseOfNodeCardCtr({
              error: Error()
            }), NodeCardCtr) : NodeCardCtr).setCardByte(opCards[i]); // mark

            rightToLeft -= width + (_crd && GameViewConfig === void 0 ? (_reportPossibleCrUseOfGameViewConfig({
              error: Error()
            }), GameViewConfig) : GameViewConfig).CardConfig.SpaceMeldCard;
          }

          this._edgeList[dir] = rightToLeft - (width + (_crd && GameViewConfig === void 0 ? (_reportPossibleCrUseOfGameViewConfig({
            error: Error()
          }), GameViewConfig) : GameViewConfig).CardConfig.SpaceMeldCard);

          this._dataList[dir].push({
            opCard: opCard,
            opCards: opCards,
            opCode: opCode
          });
        }

        getWho(dir, dirOut) {
          var a = dir; // 自己位置

          var b = dirOut; // 待查位置

          var x = (b + 4 - a) % 4;
          return x;
        }
        /** 游戏结束 */


        onGameOver(data) {}
        /** 重连 */


        onReconnect(data) {
          this.resetView();
          data.playerList.forEach((value, index, array) => {
            for (var i = 0; i < value.opGroups.length; i++) {
              var dataItem = value.opGroups[i];
              var dir = value.seatId - 1;
              var dirOut = value.seatId - 1;
              var cards = dataItem.opCards;

              switch (dataItem.opCode) {
                case (_crd && OPCode === void 0 ? (_reportPossibleCrUseOfOPCode({
                  error: Error()
                }), OPCode) : OPCode).OPE_RIGHT_CHI: // 右吃

                case (_crd && OPCode === void 0 ? (_reportPossibleCrUseOfOPCode({
                  error: Error()
                }), OPCode) : OPCode).OPE_MIDDLE_CHI: // 中吃

                case (_crd && OPCode === void 0 ? (_reportPossibleCrUseOfOPCode({
                  error: Error()
                }), OPCode) : OPCode).OPE_LEFT_CHI: // 左吃

                case (_crd && OPCode === void 0 ? (_reportPossibleCrUseOfOPCode({
                  error: Error()
                }), OPCode) : OPCode).OPE_PENG: // 碰

                case (_crd && OPCode === void 0 ? (_reportPossibleCrUseOfOPCode({
                  error: Error()
                }), OPCode) : OPCode).OPE_QIANG_PENG:
                  // 抢碰
                  this.makeMeldPeng(dir, dirOut, dataItem.opCode, cards[0], cards, false);
                  break;

                case (_crd && OPCode === void 0 ? (_reportPossibleCrUseOfOPCode({
                  error: Error()
                }), OPCode) : OPCode).OPE_AN_GANG:
                  // 暗杠
                  this.makeMeldAnGang(dir, dirOut, dataItem.opCode, cards[0], cards, false);
                  break;

                case (_crd && OPCode === void 0 ? (_reportPossibleCrUseOfOPCode({
                  error: Error()
                }), OPCode) : OPCode).OPE_GANG:
                  // 杠
                  this.makeMeldMingGang(dir, dirOut, dataItem.opCode, cards[0], cards, false);
                  break;

                case (_crd && OPCode === void 0 ? (_reportPossibleCrUseOfOPCode({
                  error: Error()
                }), OPCode) : OPCode).OPE_BU_GANG:
                  // 补杠
                  this.makeMeldBuGang(dir, dirOut, dataItem.opCode, cards[0], cards, false);
                  break;

                default:
                  break;
              }
            }
          });
        } //销毁


        onDestroy() {}

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "nodeCard", [_dec2], {
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
//# sourceMappingURL=55c4aa9c18ab44e66341745d650afaba628ef428.js.map