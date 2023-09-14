System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, instantiate, Node, tween, EventManager, Utils, BaseComponent, RoomMgr, FXJEvent, GameRuleConfig, GameViewConfig, CardUtil, NodeCardCtr, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, NodeHuCardCtr;

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

  function _reportPossibleCrUseOfFXJEvent(extras) {
    _reporterNs.report("FXJEvent", "../common/FXJEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameRuleConfig(extras) {
    _reporterNs.report("GameRuleConfig", "../common/GameRuleConfig", _context.meta, extras);
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
      tween = _cc.tween;
    }, function (_unresolved_2) {
      EventManager = _unresolved_2.EventManager;
    }, function (_unresolved_3) {
      Utils = _unresolved_3.Utils;
    }, function (_unresolved_4) {
      BaseComponent = _unresolved_4.BaseComponent;
    }, function (_unresolved_5) {
      RoomMgr = _unresolved_5.RoomMgr;
    }, function (_unresolved_6) {
      FXJEvent = _unresolved_6.FXJEvent;
    }, function (_unresolved_7) {
      GameRuleConfig = _unresolved_7.GameRuleConfig;
    }, function (_unresolved_8) {
      GameViewConfig = _unresolved_8.GameViewConfig;
    }, function (_unresolved_9) {
      CardUtil = _unresolved_9.CardUtil;
    }, function (_unresolved_10) {
      NodeCardCtr = _unresolved_10.NodeCardCtr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "3a700KxE9JHeJ3hYurNPZNj", "NodeHuCardCtr", undefined);

      __checkObsolete__(['_decorator', 'instantiate', 'Node', 'tween']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Name = NodeHuCardCtr
       * URL = db://assets/package/game/scripts/NodeHuCardCtr.ts
       * Time = Tue Aug 15 2023 18:54:40 GMT+0800 (中国标准时间)
       * Author = harvyson
       *
       * Life: onLoad-->onInitModuleEvent-->onEnable->start->update->lateUpdate->onDisable->onDestroy
       * 
       */

      _export("NodeHuCardCtr", NodeHuCardCtr = (_dec = ccclass('NodeHuCardCtr'), _dec2 = property({
        tooltip: "牌节点",
        type: Node
      }), _dec(_class = (_class2 = class NodeHuCardCtr extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "nodeCard", _descriptor, this);

          this._hostDir = 0;
          this._seatList = null;
        }

        /** override 初始化模块事件 */
        onInitModuleEvent() {}

        onLoad() {
          this.initData();
          this.initView();
        }

        start() {}

        initData() {}

        initView() {
          this._seatList = new Array(4);

          for (let dir = 0; dir < this._seatList.length; dir++) {
            let node = new Node();
            this.node.addChild(node);
            node.setRotationFromEuler(0, 90 * dir, 0);
            this._seatList[dir] = node;
          }
        }

        updateView() {}

        resetView() {
          this._hostDir = (_crd && RoomMgr === void 0 ? (_reportPossibleCrUseOfRoomMgr({
            error: Error()
          }), RoomMgr) : RoomMgr).getInstance().mySeatId - 1;

          this._seatList.forEach((value, index, array) => {
            value.removeAllChildren();
          });
        }
        /** 游戏开始 */


        onGameStart() {
          this.resetView();
        }
        /** 换位 */


        OnChangedSeat(hostDir) {
          this._hostDir = hostDir;
        }
        /** 胡牌 */


        onHu(data) {
          let dir = data.seatId - 1;
          let card = data.opCard;
          this.showHuCard(dir, card, false);
        }

        showHuCard(dir, cardNumber, isReconnect) {
          let node = this._seatList[dir];

          if (node.children.length >= (_crd && GameRuleConfig === void 0 ? (_reportPossibleCrUseOfGameRuleConfig({
            error: Error()
          }), GameRuleConfig) : GameRuleConfig).CardHuNum) {
            console.log("NodeHuCardCtr.showHuCard", "胡牌数量超过最大限制", node.children.length, (_crd && GameRuleConfig === void 0 ? (_reportPossibleCrUseOfGameRuleConfig({
              error: Error()
            }), GameRuleConfig) : GameRuleConfig).CardHuNum);
            return;
          }

          let who = (_crd && CardUtil === void 0 ? (_reportPossibleCrUseOfCardUtil({
            error: Error()
          }), CardUtil) : CardUtil).calculatePlayerPosition(this._hostDir + 1, dir + 1);

          if (who == "上家" || who == "下家") {
            // 上下家
            tween(this.node).delay(isReconnect ? 0 : 0.5).call(() => {
              this.pushCardB(dir, cardNumber, isReconnect);
            }).start();
          } else {
            tween(this.node).delay(isReconnect ? 0 : 0.5).call(() => {
              this.pushCardA(dir, cardNumber, isReconnect);
            }).start();
          }
        } // 共一排，一层4个


        pushCardA(dir, cardNumber, isReconnect) {
          let length = this._seatList[dir].children.length;
          let row = Math.floor(length / 4);
          let col = length % 4 + 1;
          let distance = (_crd && GameViewConfig === void 0 ? (_reportPossibleCrUseOfGameViewConfig({
            error: Error()
          }), GameViewConfig) : GameViewConfig).CardConfig.CenterToHuCard;
          let card = instantiate(this.nodeCard);
          let x = (_crd && GameViewConfig === void 0 ? (_reportPossibleCrUseOfGameViewConfig({
            error: Error()
          }), GameViewConfig) : GameViewConfig).CardConfig.CenterToHuCardX + ((_crd && GameViewConfig === void 0 ? (_reportPossibleCrUseOfGameViewConfig({
            error: Error()
          }), GameViewConfig) : GameViewConfig).CardConfig.Width + (_crd && GameViewConfig === void 0 ? (_reportPossibleCrUseOfGameViewConfig({
            error: Error()
          }), GameViewConfig) : GameViewConfig).CardConfig.SpaceHuCard) * col;
          let y = (_crd && GameViewConfig === void 0 ? (_reportPossibleCrUseOfGameViewConfig({
            error: Error()
          }), GameViewConfig) : GameViewConfig).CardConfig.GroundToCard + row * (_crd && GameViewConfig === void 0 ? (_reportPossibleCrUseOfGameViewConfig({
            error: Error()
          }), GameViewConfig) : GameViewConfig).CardConfig.Thickness;
          card.setPosition(x, y, distance);
          card.setRotationFromEuler(0, 0, 0);
          card.active = true;
          card.getComponent(_crd && NodeCardCtr === void 0 ? (_reportPossibleCrUseOfNodeCardCtr({
            error: Error()
          }), NodeCardCtr) : NodeCardCtr).setCardByte(cardNumber);

          this._seatList[dir].addChild(card);

          this.showHuAnim(dir, card, isReconnect);
        } // 共2排，1排2个，1层4个


        pushCardB(dir, cardNumber, isReconnect) {
          let length = this._seatList[dir].children.length;
          let row = Math.floor(length / 4);
          let col = length % 4 + 1;
          let distance = (_crd && GameViewConfig === void 0 ? (_reportPossibleCrUseOfGameViewConfig({
            error: Error()
          }), GameViewConfig) : GameViewConfig).CardConfig.CenterToHuCard;
          let card = instantiate(this.nodeCard);
          let y = (_crd && GameViewConfig === void 0 ? (_reportPossibleCrUseOfGameViewConfig({
            error: Error()
          }), GameViewConfig) : GameViewConfig).CardConfig.GroundToCard + row * (_crd && GameViewConfig === void 0 ? (_reportPossibleCrUseOfGameViewConfig({
            error: Error()
          }), GameViewConfig) : GameViewConfig).CardConfig.Thickness;
          let who = (_crd && CardUtil === void 0 ? (_reportPossibleCrUseOfCardUtil({
            error: Error()
          }), CardUtil) : CardUtil).calculatePlayerPosition(this._hostDir + 1, dir + 1);

          if (who == "下家") {
            distance += 10;
          }

          if (col == 1 || col == 2) {
            let x = (_crd && GameViewConfig === void 0 ? (_reportPossibleCrUseOfGameViewConfig({
              error: Error()
            }), GameViewConfig) : GameViewConfig).CardConfig.CenterToHuCardX + ((_crd && GameViewConfig === void 0 ? (_reportPossibleCrUseOfGameViewConfig({
              error: Error()
            }), GameViewConfig) : GameViewConfig).CardConfig.Width + (_crd && GameViewConfig === void 0 ? (_reportPossibleCrUseOfGameViewConfig({
              error: Error()
            }), GameViewConfig) : GameViewConfig).CardConfig.SpaceHuCard) * col;
            card.setPosition(x, y, distance);
          } else {
            let x = (_crd && GameViewConfig === void 0 ? (_reportPossibleCrUseOfGameViewConfig({
              error: Error()
            }), GameViewConfig) : GameViewConfig).CardConfig.CenterToHuCardX + ((_crd && GameViewConfig === void 0 ? (_reportPossibleCrUseOfGameViewConfig({
              error: Error()
            }), GameViewConfig) : GameViewConfig).CardConfig.Width + (_crd && GameViewConfig === void 0 ? (_reportPossibleCrUseOfGameViewConfig({
              error: Error()
            }), GameViewConfig) : GameViewConfig).CardConfig.SpaceHuCard) * (col - 2);
            card.setPosition(x, y, distance + (_crd && GameViewConfig === void 0 ? (_reportPossibleCrUseOfGameViewConfig({
              error: Error()
            }), GameViewConfig) : GameViewConfig).CardConfig.Height);
          }

          card.setRotationFromEuler(0, 0, 0);
          card.active = true;
          card.getComponent(_crd && NodeCardCtr === void 0 ? (_reportPossibleCrUseOfNodeCardCtr({
            error: Error()
          }), NodeCardCtr) : NodeCardCtr).setCardByte(cardNumber);

          this._seatList[dir].addChild(card);

          this.showHuAnim(dir, card, isReconnect);
        }

        showHuAnim(dir, cardNode, isReconnect) {
          if (!isReconnect) {
            let data = {
              seatId: dir + 1,
              aniType: (_crd && GameViewConfig === void 0 ? (_reportPossibleCrUseOfGameViewConfig({
                error: Error()
              }), GameViewConfig) : GameViewConfig).AnimType.Hu,
              pos: cardNode.getWorldPosition()
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

        getWho(dir, dirOut) {
          let a = dir; // 自己位置

          let b = dirOut; // 待查位置

          let x = (b + 4 - a) % 4;
          return x;
        }
        /** 游戏结束 */


        onGameOver(data) {}
        /** 重连 */


        onReconnect(data) {
          this.resetView();
          data.playerList.forEach((value, index, array) => {
            let dir = value.seatId - 1;
            let isHu = value.isHu;
            let cards = value.huCard;

            if (isHu && (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).isNotNull(cards) && cards > 0) {
              this.showHuCard(dir, cards, true);
            }
          });
        } //销毁


        onDestroy() {}

        log(...args) {
          console.log(this.name, args);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "nodeCard", [_dec2], {
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
//# sourceMappingURL=33ddc56a2add6fcbead8e1ee99d121272f77eeb3.js.map