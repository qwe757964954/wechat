System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Node, Tween, Vec3, _decorator, instantiate, tween, Utils, EventManager, BaseComponent, FXJEvent, GameViewConfig, NodeCardCtr, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, NodeOutCardCtr;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfUtils(extras) {
    _reporterNs.report("Utils", "../../../framework/Utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventManager(extras) {
    _reporterNs.report("EventManager", "../../../framework/manager/EventManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../../framework/vc/BaseComponent", _context.meta, extras);
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
      Node = _cc.Node;
      Tween = _cc.Tween;
      Vec3 = _cc.Vec3;
      _decorator = _cc._decorator;
      instantiate = _cc.instantiate;
      tween = _cc.tween;
    }, function (_unresolved_2) {
      Utils = _unresolved_2.Utils;
    }, function (_unresolved_3) {
      EventManager = _unresolved_3.EventManager;
    }, function (_unresolved_4) {
      BaseComponent = _unresolved_4.BaseComponent;
    }, function (_unresolved_5) {
      FXJEvent = _unresolved_5.FXJEvent;
    }, function (_unresolved_6) {
      GameViewConfig = _unresolved_6.GameViewConfig;
    }, function (_unresolved_7) {
      NodeCardCtr = _unresolved_7.NodeCardCtr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "30945FhsC9LTJDpcl63l0H5", "NodeOutCardCtr", undefined);

      __checkObsolete__(['Node', 'Tween', 'Vec3', '_decorator', 'instantiate', 'tween']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Name = NodeOutCardCtr
       * URL = db://assets/package/game/scripts/NodeOutCardCtr.ts
       * Time = Mon Aug 14 2023 12:07:51 GMT+0800 (中国标准时间)
       * Author = harvyson
       *
       * Life: onLoad-->onInitModuleEvent-->onEnable->start->update->lateUpdate->onDisable->onDestroy
       * 
       */

      _export("NodeOutCardCtr", NodeOutCardCtr = (_dec = ccclass('NodeOutCardCtr'), _dec2 = property({
        tooltip: "牌节点",
        type: Node
      }), _dec3 = property({
        tooltip: "箭头节点",
        type: Node
      }), _dec(_class = (_class2 = class NodeOutCardCtr extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "nodeCard", _descriptor, this);

          _initializerDefineProperty(this, "nodeArrow", _descriptor2, this);

          this._numList = null;
          this._seatList = null;
          this._offsetArrow = null;
        }

        /** override 初始化模块事件 */
        onInitModuleEvent() {}

        onLoad() {
          this.initData();
          this.initView();
        }

        start() {}

        initData() {
          this._numList = [0, 0, 0, 0];
          this._seatList = new Array(4);
        }

        initView() {
          let indexStart = ((_crd && GameViewConfig === void 0 ? (_reportPossibleCrUseOfGameViewConfig({
            error: Error()
          }), GameViewConfig) : GameViewConfig).CardConfig.Width * 6 + (_crd && GameViewConfig === void 0 ? (_reportPossibleCrUseOfGameViewConfig({
            error: Error()
          }), GameViewConfig) : GameViewConfig).CardConfig.SpaceOutCard * (6 - 1)) / 2 - (_crd && GameViewConfig === void 0 ? (_reportPossibleCrUseOfGameViewConfig({
            error: Error()
          }), GameViewConfig) : GameViewConfig).CardConfig.Width / 2 - 2; // 往右2米。这里-2

          let distance = (_crd && GameViewConfig === void 0 ? (_reportPossibleCrUseOfGameViewConfig({
            error: Error()
          }), GameViewConfig) : GameViewConfig).CardConfig.CenterToOutCard;

          for (let dir = 0; dir < 4; dir++) {
            // 每个方向的手牌设定一个父节点，方便管理
            let nodeSeat = new Node();
            nodeSeat.setRotationFromEuler(0, 90 * dir, 0);
            this.node.addChild(nodeSeat);
            this._seatList[dir] = [];

            for (let i = 0; i < 18; i++) {
              let length = this._seatList[dir].length;
              let layer = Math.floor(length / 6);
              let index = length % 6;
              let distanceFromCenter = distance + (layer - 1) * (_crd && GameViewConfig === void 0 ? (_reportPossibleCrUseOfGameViewConfig({
                error: Error()
              }), GameViewConfig) : GameViewConfig).CardConfig.Height; // 离桌面中心的垂直距离

              let leftToRight = -indexStart + index * ((_crd && GameViewConfig === void 0 ? (_reportPossibleCrUseOfGameViewConfig({
                error: Error()
              }), GameViewConfig) : GameViewConfig).CardConfig.Width + (_crd && GameViewConfig === void 0 ? (_reportPossibleCrUseOfGameViewConfig({
                error: Error()
              }), GameViewConfig) : GameViewConfig).CardConfig.SpaceOutCard); // 指定层的第index张牌的位置

              let card = instantiate(this.nodeCard);
              card.setPosition(leftToRight, (_crd && GameViewConfig === void 0 ? (_reportPossibleCrUseOfGameViewConfig({
                error: Error()
              }), GameViewConfig) : GameViewConfig).CardConfig.GroundToCard, distanceFromCenter);
              nodeSeat.addChild(card);

              this._seatList[dir].push(card);
            } // 超过18张的地方


            for (let i = 0; i < 9; i++) {
              let length = this._seatList[dir].length;
              let layer = Math.ceil((i + 1) / 3);
              let index = length % 3;
              let distanceFromCenter = distance + (layer - 2) * (_crd && GameViewConfig === void 0 ? (_reportPossibleCrUseOfGameViewConfig({
                error: Error()
              }), GameViewConfig) : GameViewConfig).CardConfig.Height; // 离桌面中心的垂直距离

              let leftToRight = -indexStart + 6 * (_crd && GameViewConfig === void 0 ? (_reportPossibleCrUseOfGameViewConfig({
                error: Error()
              }), GameViewConfig) : GameViewConfig).CardConfig.Width + 1 + index * ((_crd && GameViewConfig === void 0 ? (_reportPossibleCrUseOfGameViewConfig({
                error: Error()
              }), GameViewConfig) : GameViewConfig).CardConfig.Width + (_crd && GameViewConfig === void 0 ? (_reportPossibleCrUseOfGameViewConfig({
                error: Error()
              }), GameViewConfig) : GameViewConfig).CardConfig.SpaceOutCard); // 指定层的第index张牌的位置

              let card = instantiate(this.nodeCard);
              card.setPosition(leftToRight, (_crd && GameViewConfig === void 0 ? (_reportPossibleCrUseOfGameViewConfig({
                error: Error()
              }), GameViewConfig) : GameViewConfig).CardConfig.GroundToCard, distanceFromCenter);
              nodeSeat.addChild(card);

              this._seatList[dir].push(card);
            }
          }

          this.nodeArrow.setPosition(0, -4.5, 0);
          let pos = this.nodeArrow.getPosition();
          this._offsetArrow = new Vec3(pos.x, pos.y + (_crd && GameViewConfig === void 0 ? (_reportPossibleCrUseOfGameViewConfig({
            error: Error()
          }), GameViewConfig) : GameViewConfig).CardConfig.GroundToCard, pos.z);
          this.nodeArrow.setPosition(this._offsetArrow);
        }

        resetView() {
          for (let dir = 0; dir < this._seatList.length; dir++) {
            let cards = this._seatList[dir];

            for (let i = 0; i < cards.length; i++) {
              cards[i].active = false;
            }
          }

          this._numList = [0, 0, 0, 0];
          this.nodeArrow.active = false;
        }
        /** 游戏开始 */


        onGameStart() {
          this.resetView();
        }
        /** 换位 */


        OnChangedSeat(hostDir) {// 换位不影响出牌
        }
        /** 出牌 */


        onOutCard(data) {
          let dir = data.seatId - 1;
          this.showCard(dir, data.opCard);
        }

        showCard(dir, cardNumber) {
          let cardList = this._seatList[dir];
          let num = this._numList[dir] + 1;

          if (num > cardList.length) {
            console.log("NodeOutCardCtr.showCard", "出牌数量已超上限", "num", num);
            return;
          }

          let index = num - 1;
          cardList[index].active = true;
          cardList[index].getComponent(_crd && NodeCardCtr === void 0 ? (_reportPossibleCrUseOfNodeCardCtr({
            error: Error()
          }), NodeCardCtr) : NodeCardCtr).setCardByte(cardNumber);
          let pos = cardList[index].getPosition();
          this.nodeArrow.active = true;
          Tween.stopAllByTarget(this.nodeArrow);
          this.nodeArrow.setPosition(pos.x + this._offsetArrow.x, this._offsetArrow.y, pos.z + this._offsetArrow.z);
          (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).rotate3DAround(this.nodeArrow, new Vec3(0, 0, 0), new Vec3(0, 90 * dir, 0), false);
          let moveTween = tween(this.nodeArrow).by(0.6, {
            position: new Vec3(0, 1, 0)
          }).by(0.6, {
            position: new Vec3(0, -1, 0)
          });
          tween(this.nodeArrow).repeatForever(moveTween).start();
          this._numList[dir] = num;
        }

        hideCard(dir, cardNumber, showAnim) {
          let cardList = this._seatList[dir];
          let num = this._numList[dir];

          if (num < 1) {
            return;
          }

          let index = num - 1;

          if (showAnim) {
            // 胡牌动画
            let data = {
              seatId: dir + 1,
              aniType: (_crd && GameViewConfig === void 0 ? (_reportPossibleCrUseOfGameViewConfig({
                error: Error()
              }), GameViewConfig) : GameViewConfig).AnimType.Hu2,
              pos: cardList[index].getWorldPosition()
            };
            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).dispatch((_crd && FXJEvent === void 0 ? (_reportPossibleCrUseOfFXJEvent({
              error: Error()
            }), FXJEvent) : FXJEvent).VIEW_UI_3D_GET_CAMERA, (_crd && FXJEvent === void 0 ? (_reportPossibleCrUseOfFXJEvent({
              error: Error()
            }), FXJEvent) : FXJEvent).VIEW_OUT_CARD_ANI_PLAY, data);
            let huTime = 0.5;
            tween(this.node).delay(huTime).call(() => {
              cardList[index].active = false;
              this.nodeArrow.active = false;
              this._numList[dir] = index;
            }).start();
          } else {
            cardList[index].active = false;
            this.nodeArrow.active = false;
            this._numList[dir] = index;
          }
        }
        /** 碰杠 */


        onPengGang(data) {
          let dir = data.cardSeatId - 1;
          this.hideCard(dir, data.opCard, false);
        }
        /** 胡牌 */


        onHu(data) {
          if (data.cardSeatId == data.seatId) {
            console.log("NodeOutCardCtr.onHu", "自摸不需要移除牌");
            return;
          }

          let dir = data.cardSeatId - 1;
          this.hideCard(dir, data.opCard, true);
        }
        /** 游戏结束 */


        onGameOver(data) {}
        /** 重连 */


        onReconnect(data) {
          this.resetView();
          data.playerList.forEach((value, index, array) => {
            let dir = value.seatId - 1;
            let cards = value.outCards;

            if (!(_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).table_isEmpty(cards)) {
              for (let i = 0; i < cards.length; i++) {
                if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                  error: Error()
                }), Utils) : Utils).isNotNull(cards[i].status) && cards[i].status != 1) {
                  this.showCard(dir, cards[i].card);
                }
              }
            }
          });
        } //销毁


        onDestroy() {
          Tween.stopAllByTarget(this.nodeArrow);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "nodeCard", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "nodeArrow", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=125c1572270b8f792f251fa7984b7f36c3783ea0.js.map