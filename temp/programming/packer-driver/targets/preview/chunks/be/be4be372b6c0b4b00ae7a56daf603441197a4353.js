System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Node, Tween, Vec3, _decorator, instantiate, tween, Utils, EventManager, BaseComponent, RoomMgr, OPCode, FXJEvent, FXJSound, GameViewConfig, NodeCardCtr, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, NodeHandCardCtr;

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

  function _reportPossibleCrUseOfRoomMgr(extras) {
    _reporterNs.report("RoomMgr", "../cache/RoomMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfOPCode(extras) {
    _reporterNs.report("OPCode", "../common/FXJConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFXJEvent(extras) {
    _reporterNs.report("FXJEvent", "../common/FXJEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFXJSound(extras) {
    _reporterNs.report("FXJSound", "../common/FXJSound", _context.meta, extras);
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
      RoomMgr = _unresolved_5.RoomMgr;
    }, function (_unresolved_6) {
      OPCode = _unresolved_6.OPCode;
    }, function (_unresolved_7) {
      FXJEvent = _unresolved_7.FXJEvent;
    }, function (_unresolved_8) {
      FXJSound = _unresolved_8.FXJSound;
    }, function (_unresolved_9) {
      GameViewConfig = _unresolved_9.GameViewConfig;
    }, function (_unresolved_10) {
      NodeCardCtr = _unresolved_10.NodeCardCtr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2d9565M3txPHI3NCQcz6sdN", "NodeHandCardCtr", undefined);

      __checkObsolete__(['Node', 'Tween', 'Vec3', '_decorator', 'instantiate', 'tween']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Name = NodeHandCardCtr
       * URL = db://assets/package/game/scripts/NodeHandCardCtr.ts
       * Time = Mon Aug 14 2023 12:07:20 GMT+0800 (中国标准时间)
       * Author = harvyson
       *
       * Life: onLoad-->onInitModuleEvent-->onEnable->start->update->lateUpdate->onDisable->onDestroy
       * 
       */

      _export("NodeHandCardCtr", NodeHandCardCtr = (_dec = ccclass('NodeHandCardCtr'), _dec2 = property({
        tooltip: "牌节点",
        type: Node
      }), _dec(_class = (_class2 = class NodeHandCardCtr extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "nodeCard", _descriptor, this);

          this._hostDir = 0;
          this._numList = null;
          this._seatList = null;
          this._cardStart = 0;
          this._spaceLast = 0;
          this._cardStatus = (_crd && GameViewConfig === void 0 ? (_reportPossibleCrUseOfGameViewConfig({
            error: Error()
          }), GameViewConfig) : GameViewConfig).HandCardStatus.Idle;
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
          var num = 14;
          var width = (_crd && GameViewConfig === void 0 ? (_reportPossibleCrUseOfGameViewConfig({
            error: Error()
          }), GameViewConfig) : GameViewConfig).CardConfig.Width;
          var spaceLast = width * 0.5; // 行牌玩家新拿的一张牌，放在最右侧，并与其他牌保持一定距离

          var start = width * num / 2 + spaceLast - width / 2;
          this._cardStart = start;
          this._spaceLast = spaceLast;

          for (var dir = 0; dir < 4; dir++) {
            // 每个方向的手牌设定一个父节点，方便管理
            var nodeSeat = new Node();
            nodeSeat.setRotationFromEuler(0, 90 * dir, 0);
            this.node.addChild(nodeSeat); // 四个方向的手牌都以东方向为基础方向，旋转父节点分别对应到四个方向
            // 以东为基础方向后，二维坐标系，向右为x轴正方向，向上为y轴正方向

            this._seatList[dir] = [];

            for (var i = 0; i < num; i++) {
              var leftToRight = -start + i * width;

              if (i == num) {
                leftToRight += spaceLast;
              }

              var card = instantiate(this.nodeCard);
              card.setPosition(leftToRight, (_crd && GameViewConfig === void 0 ? (_reportPossibleCrUseOfGameViewConfig({
                error: Error()
              }), GameViewConfig) : GameViewConfig).CardConfig.GroundToHandCard, (_crd && GameViewConfig === void 0 ? (_reportPossibleCrUseOfGameViewConfig({
                error: Error()
              }), GameViewConfig) : GameViewConfig).CardConfig.CenterToHandCard);
              card.setRotationFromEuler(90, 0, 0);
              nodeSeat.addChild(card);

              this._seatList[dir].push(card);
            }
          }
        }

        resetView() {
          this._hostDir = (_crd && RoomMgr === void 0 ? (_reportPossibleCrUseOfRoomMgr({
            error: Error()
          }), RoomMgr) : RoomMgr).getInstance().mySeatId - 1; // 清空所有手牌

          for (var dir = 0; dir < this._seatList.length; dir++) {
            var cards = this._seatList[dir];

            for (var i = 0; i < cards.length; i++) {
              cards[i].active = false;
              Tween.stopAllByTarget(cards[i]);
              var pos = cards[i].getPosition();
              cards[i].setPosition(pos.x, (_crd && GameViewConfig === void 0 ? (_reportPossibleCrUseOfGameViewConfig({
                error: Error()
              }), GameViewConfig) : GameViewConfig).CardConfig.GroundToHandCard, (_crd && GameViewConfig === void 0 ? (_reportPossibleCrUseOfGameViewConfig({
                error: Error()
              }), GameViewConfig) : GameViewConfig).CardConfig.CenterToHandCard);
            }
          }

          this._numList = [0, 0, 0, 0];
          this._cardStatus = (_crd && GameViewConfig === void 0 ? (_reportPossibleCrUseOfGameViewConfig({
            error: Error()
          }), GameViewConfig) : GameViewConfig).HandCardStatus.Idle;
        }
        /** 游戏开始 */


        onGameStart() {
          this.resetView();
        }
        /** 换位 */


        OnChangedSeat(hostDir) {
          this._hostDir = hostDir; // 换位需要重置手牌（本家不显示手牌）
        }
        /** 发牌 */


        onDealCard(data) {
          this.dealCard(data.cardsCount);
          this.playAnimOfSort();
        }
        /** 发牌处理 */


        dealCard(countList) {
          if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).isNull(this._hostDir) || this._hostDir < 0 || this._hostDir >= 4) {
            console.log("NodeHandCardCtr.dealCard", "本家座位号无效");
            return;
          }

          for (var dir = 0; dir < this._seatList.length; dir++) {
            var num = countList[dir];
            var cards = this._seatList[dir];

            for (var i = 0; i < cards.length; i++) {
              if (dir == this._hostDir) {
                cards[i].active = false;
              } else {
                cards[i].active = i + 1 <= num;
              }
            }

            this._numList[dir] = dir == this._hostDir ? 0 : num;
            this.adjustPosition(dir);
          }
        }
        /** 调整手牌的位置 */


        adjustPosition(dir) {
          var num = this._numList[dir];
          var cards = this._seatList[dir];

          for (var i = 0; i < num; i++) {
            var leftToRight = -this._cardStart + i * (_crd && GameViewConfig === void 0 ? (_reportPossibleCrUseOfGameViewConfig({
              error: Error()
            }), GameViewConfig) : GameViewConfig).CardConfig.Width;

            if (i == num - 1 && this.turnToMe(num)) {
              leftToRight += this._spaceLast;
            }

            var card = cards[i];
            var pos = card.getPosition();
            card.setPosition(leftToRight, pos.y, pos.z);
          }
        }
        /** 是否轮到我出牌 */


        turnToMe(cardNum) {
          return cardNum % 3 == 2;
        }
        /** 触发手牌排序动画 */


        playAnimOfSort() {
          if (this._cardStatus != (_crd && GameViewConfig === void 0 ? (_reportPossibleCrUseOfGameViewConfig({
            error: Error()
          }), GameViewConfig) : GameViewConfig).HandCardStatus.Idle) {
            return;
          }

          var t1 = 0.25;
          var t2 = 0.25;

          for (var dir = 0; dir < this._seatList.length; dir++) {
            this.playAnimOfSortByDir(dir, t1, t2);
          }

          this._cardStatus = (_crd && GameViewConfig === void 0 ? (_reportPossibleCrUseOfGameViewConfig({
            error: Error()
          }), GameViewConfig) : GameViewConfig).HandCardStatus.Sort;
          tween(this.node).delay(t1 + t2 + 0.01).call(() => {
            this._cardStatus = (_crd && GameViewConfig === void 0 ? (_reportPossibleCrUseOfGameViewConfig({
              error: Error()
            }), GameViewConfig) : GameViewConfig).HandCardStatus.Idle;

            for (var _dir = 0; _dir < this._seatList.length; _dir++) {
              var cards = this._seatList[_dir];

              for (var i = 0; i < cards.length; i++) {
                cards[i].setRotationFromEuler(90, 0, 0);
              }
            }
          }).start();
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && FXJEvent === void 0 ? (_reportPossibleCrUseOfFXJEvent({
            error: Error()
          }), FXJEvent) : FXJEvent).SYS_PLAY_EFFECT, (_crd && FXJSound === void 0 ? (_reportPossibleCrUseOfFXJSound({
            error: Error()
          }), FXJSound) : FXJSound).GameAdjust);
        }
        /** 播放整理牌的动画 */


        playAnimOfSortByDir(dir, t1, t2) {
          var num = this._numList[dir];
          var cards = this._seatList[dir];

          var _loop = function _loop(i) {
            if (i + 1 > num) {
              return "break";
            } // 沿麻将牌面下边缘旋转，转到牌面向下后再转回原位置


            var rotaionEuler = new Vec3(cards[i].eulerAngles);
            var pos = new Vec3(cards[i].getPosition());
            var point = new Vec3(pos.x, 0, pos.z + (_crd && GameViewConfig === void 0 ? (_reportPossibleCrUseOfGameViewConfig({
              error: Error()
            }), GameViewConfig) : GameViewConfig).CardConfig.Thickness - (_crd && GameViewConfig === void 0 ? (_reportPossibleCrUseOfGameViewConfig({
              error: Error()
            }), GameViewConfig) : GameViewConfig).CardConfig.GroundToCard);
            var tweenTargetVec3 = new Vec3(0, 0, 0);
            var tw = new Tween(tweenTargetVec3).by(t1, new Vec3(90, 0, 0), {
              onUpdate: (target, ratio) => {
                (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                  error: Error()
                }), Utils) : Utils).rotate3DAroundByPositionRotaion(cards[i], pos, rotaionEuler, point, target, true);
              }
            }).by(t2, new Vec3(-90, 0, 0), {
              onUpdate: (target, ratio) => {
                (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                  error: Error()
                }), Utils) : Utils).rotate3DAroundByPositionRotaion(cards[i], pos, rotaionEuler, point, target, true);
              }
            }).start();
          };

          for (var i = 0; i < cards.length; i++) {
            var _ret = _loop(i);

            if (_ret === "break") break;
          }
        }
        /** 抓牌 */


        onTakeCard(data) {
          if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).isNull(data.seatId) || data.seatId < 1 || data.seatId > 4) {
            console.log("NodeHandCardCtr.onTakeCard", "座位号错误");
            return;
          }

          var dir = data.seatId - 1;
          this.takeCard(dir);
        }
        /** 抓牌 */


        takeCard(dir) {
          if (this._hostDir == dir) {
            return;
          }

          if (this._cardStatus != (_crd && GameViewConfig === void 0 ? (_reportPossibleCrUseOfGameViewConfig({
            error: Error()
          }), GameViewConfig) : GameViewConfig).HandCardStatus.Idle) {
            return;
          }

          if (this.turnToMe(this._numList[dir])) {
            console.log("NodeHandCardCtr.takeCard", "手牌数量异常，可能未正常移除", "dir", dir);
          }

          var cards = this._seatList[dir];
          var num = this._numList[dir] + 1;
          console.log("NodeHandCardCtr.takeCard", "dir", dir, "num", num);

          if (num > cards.length) {
            console.log("NodeHandCardCtr.takeCard", "手牌数量太多", "dir", dir);
            return;
          }

          cards[num - 1].active = true;
          this._numList[dir] = num;
          this.adjustPosition(dir);
        }
        /** 出牌 */


        onOutCard(data) {
          var dir = data.seatId - 1;

          if (!this.turnToMe(this._numList[dir])) {
            console.log("NodeHandCardCtr.takeCard", "手牌数量异常，可能未正常拿牌", "dir", dir);
            this.adjustPosition(dir);
            return;
          }

          this.outCardAny(dir, 1);
        }
        /** 出牌或碰杠(一般用于正常出牌、碰或杠) */


        outCardAny(dir, count) {
          console.log("NodeHandCardCtr.outCardAny", "dir", dir, "count", count);
          console.log("NodeHandCardCtr.outCardAny", "numList", this._numList);

          if (this._hostDir == dir) {
            return;
          }

          if (this._cardStatus != (_crd && GameViewConfig === void 0 ? (_reportPossibleCrUseOfGameViewConfig({
            error: Error()
          }), GameViewConfig) : GameViewConfig).HandCardStatus.Idle) {
            return;
          }

          this.adjustPosition(dir);
          var luckyNum = Math.floor(Math.random() * 100);

          if (luckyNum % 2 == 1) {
            // this.simpleOutCardAny(dir, count);
            this.normalOutCardAny(dir, count);
          } else {
            this.normalOutCardAny(dir, count);
          }
        }
        /** 简单出牌，直接丢出最右侧的牌 */


        simpleOutCardAny(dir, count) {
          console.log("NodeHandCardCtr.simpleOutCardAny");
          var num = this._numList[dir];

          if (num < count) {
            return;
          }

          var cards = this._seatList[dir];

          for (var i = 0; i < count; i++) {
            cards[num - 1].active = false;
            num--;
          }

          this._numList[dir] = num;
        }
        /** 
         * 模拟真实出牌，从中间打出一张，然后将最右侧的牌插入到空槽 
         * 1. [已实现] 直接打出新拿的牌，无需整理
         * 2. [已实现] 从手牌中抽出一张打出，然后空槽右侧牌全部向左推，整理完成
         * 3. [未实现] 从手牌中抽出一张打出，最右侧新拿的牌直接插入空槽，整理完成
         * 4. [未实现] 从手牌中抽出一张打出，中间一部分牌向左或向右移动，产生另一个空槽，再将最右侧新拿的牌插入空槽，整理完成
         * */


        normalOutCardAny(dir, count) {
          console.log("NodeHandCardCtr.normalOutCardAny begin", this._numList[dir]);
          var num = this._numList[dir];

          if (num < count) {
            return;
          }

          var a = count;
          var b = num - 1;
          var luckyNum = Math.min(Math.floor(Math.random() * (b + 1 - a) + a), b);
          var cards = this._seatList[dir];
          var removeNodeList = cards.splice(luckyNum - count, count);
          removeNodeList.forEach((value, index, array) => {
            value.active = false;
          });

          for (var i = 0; i < removeNodeList.length; i++) {
            cards.push(removeNodeList[i]);
          }

          num -= count;
          this._numList[dir] = num;
          console.log("NodeHandCardCtr.normalOutCardAny end", this._numList[dir]); //

          for (var _i = 0; _i < num; _i++) {
            var pos = cards[_i].getPosition(); // 使用动画移动到目标位置


            var x = -this._cardStart + _i * (_crd && GameViewConfig === void 0 ? (_reportPossibleCrUseOfGameViewConfig({
              error: Error()
            }), GameViewConfig) : GameViewConfig).CardConfig.Width;

            if (_i == num - 1 && num % 3 == 2) {
              x += this._spaceLast;
            }

            tween(cards[_i]).to(0.06 * count, {
              position: new Vec3(x, pos.y, pos.z)
            }).start();
          }
        }
        /** 碰杠 */


        onPengGang(data) {
          var dir = data.seatId - 1;

          switch (data.opCode) {
            case (_crd && OPCode === void 0 ? (_reportPossibleCrUseOfOPCode({
              error: Error()
            }), OPCode) : OPCode).OPE_PENG: // 碰

            case (_crd && OPCode === void 0 ? (_reportPossibleCrUseOfOPCode({
              error: Error()
            }), OPCode) : OPCode).OPE_QIANG_PENG:
              // 抢碰
              this.outCardAny(dir, 2);
              break;

            case (_crd && OPCode === void 0 ? (_reportPossibleCrUseOfOPCode({
              error: Error()
            }), OPCode) : OPCode).OPE_AN_GANG:
              // 暗杠
              this.outCardAny(dir, 1);
              break;

            case (_crd && OPCode === void 0 ? (_reportPossibleCrUseOfOPCode({
              error: Error()
            }), OPCode) : OPCode).OPE_GANG:
              // 杠
              this.outCardAny(dir, 3);
              break;

            case (_crd && OPCode === void 0 ? (_reportPossibleCrUseOfOPCode({
              error: Error()
            }), OPCode) : OPCode).OPE_BU_GANG:
              // 补杠
              this.outCardAny(dir, 4);
              break;

            default:
              break;
          }
        }
        /** 胡牌 */


        onHu(data) {
          var dir = data.cardSeatId - 1;

          if (!this.turnToMe(this._numList[dir])) {
            // 手里是否有一张未打出的牌，有则移除
            return;
          }

          this.outCardAny(dir, 1);
        }
        /** 游戏结束 */


        onGameOver(data) {
          for (var i = 0; i < data.handCards.length; i++) {
            var dir = i;
            var cards = data.handCards[i].handCards;

            if (cards.length > 14) {
              console.log("NodeHandCardCtr.onGameOver", "手牌数据异常", cards);
              return;
            }

            var nodes = this._seatList[dir];

            for (var j = 0; j < cards.length; j++) {
              nodes[j].getComponent(_crd && NodeCardCtr === void 0 ? (_reportPossibleCrUseOfNodeCardCtr({
                error: Error()
              }), NodeCardCtr) : NodeCardCtr).setCardByte(cards[j]);
            }
          }

          this.playAnimOfShow();
        }
        /** 触发亮牌动画 */


        playAnimOfShow() {
          var _this = this;

          if (this._cardStatus != (_crd && GameViewConfig === void 0 ? (_reportPossibleCrUseOfGameViewConfig({
            error: Error()
          }), GameViewConfig) : GameViewConfig).HandCardStatus.Idle) {
            return;
          }

          var duration = 0.3;

          var _loop2 = function _loop2(dir) {
            var cards = _this._seatList[dir];
            var num = _this._numList[dir];

            var _loop3 = function _loop3(i) {
              if (i + 1 > num) {
                return "break";
              }

              var rotaionEuler = new Vec3(cards[i].eulerAngles);
              var pos = new Vec3(cards[i].getPosition());
              var point = new Vec3(pos.x, 0, pos.z - (_crd && GameViewConfig === void 0 ? (_reportPossibleCrUseOfGameViewConfig({
                error: Error()
              }), GameViewConfig) : GameViewConfig).CardConfig.GroundToCard);
              var tweenTargetVec3 = new Vec3(0, 0, 0);
              var tw = new Tween(tweenTargetVec3).by(duration, new Vec3(-90, 0, 0), {
                onUpdate: (target, ratio) => {
                  (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                    error: Error()
                  }), Utils) : Utils).rotate3DAroundByPositionRotaion(cards[i], pos, rotaionEuler, point, target, true);
                }
              }).start();
            };

            for (var i = 0; i < cards.length; i++) {
              var _ret2 = _loop3(i);

              if (_ret2 === "break") break;
            }
          };

          for (var dir = 0; dir < this._seatList.length; dir++) {
            _loop2(dir);
          }

          this._cardStatus = (_crd && GameViewConfig === void 0 ? (_reportPossibleCrUseOfGameViewConfig({
            error: Error()
          }), GameViewConfig) : GameViewConfig).HandCardStatus.Show;
          tween(this.node).delay(duration + 0.01).call(() => {
            this._cardStatus = (_crd && GameViewConfig === void 0 ? (_reportPossibleCrUseOfGameViewConfig({
              error: Error()
            }), GameViewConfig) : GameViewConfig).HandCardStatus.Over;
          }).start();
        }
        /** 重连 */


        onReconnect() {
          this.resetView();
        } //销毁


        onDestroy() {
          this.resetView();
        }

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
//# sourceMappingURL=be4be372b6c0b4b00ae7a56daf603441197a4353.js.map