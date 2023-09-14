System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Node, Vec3, _decorator, instantiate, tween, BaseComponent, RoomMgr, GameRuleConfig, GameViewConfig, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _crd, ccclass, property, NodeWallCtr;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../../framework/vc/BaseComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoomMgr(extras) {
    _reporterNs.report("RoomMgr", "../cache/RoomMgr", _context.meta, extras);
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

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Node = _cc.Node;
      Vec3 = _cc.Vec3;
      _decorator = _cc._decorator;
      instantiate = _cc.instantiate;
      tween = _cc.tween;
    }, function (_unresolved_2) {
      BaseComponent = _unresolved_2.BaseComponent;
    }, function (_unresolved_3) {
      RoomMgr = _unresolved_3.RoomMgr;
    }, function (_unresolved_4) {
      GameRuleConfig = _unresolved_4.GameRuleConfig;
    }, function (_unresolved_5) {
      GameViewConfig = _unresolved_5.GameViewConfig;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "47a792lHC5HlbU3BOiWcFB8", "NodeWallCtr", undefined);

      __checkObsolete__(['Node', 'Vec3', '_decorator', 'instantiate', 'tween']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Name = NodeWallCtr
       * URL = db://assets/package/game/scripts/NodeWallCtr.ts
       * Time = Mon Aug 14 2023 12:08:03 GMT+0800 (中国标准时间)
       * Author = harvyson
       *
       * Life: onLoad-->onInitModuleEvent-->onEnable->start->update->lateUpdate->onDisable->onDestroy
       * 
       */

      _export("NodeWallCtr", NodeWallCtr = (_dec = ccclass('NodeWallCtr'), _dec2 = property({
        tooltip: "牌节点",
        type: Node
      }), _dec3 = property({
        tooltip: "升降台节点1",
        type: Node
      }), _dec4 = property({
        tooltip: "升降台节点2",
        type: Node
      }), _dec5 = property({
        tooltip: "升降台节点3",
        type: Node
      }), _dec6 = property({
        tooltip: "升降台节点4",
        type: Node
      }), _dec(_class = (_class2 = class NodeWallCtr extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "nodeCard", _descriptor, this);

          _initializerDefineProperty(this, "nodeDeskLift1", _descriptor2, this);

          _initializerDefineProperty(this, "nodeDeskLift2", _descriptor3, this);

          _initializerDefineProperty(this, "nodeDeskLift3", _descriptor4, this);

          _initializerDefineProperty(this, "nodeDeskLift4", _descriptor5, this);

          this._nodeWall = null;
          this._wallStatus = (_crd && GameViewConfig === void 0 ? (_reportPossibleCrUseOfGameViewConfig({
            error: Error()
          }), GameViewConfig) : GameViewConfig).WallStatus.Top;
          this._headIndex = -1;
          this._tailIndex = -1;
          this._remian = 0;
          this._gangCount = 0;
          this._wallList = null;
          this._numList = null;
          this._nodeDeskLiftList = null;
          this._hostDir = 0;
        }

        /** override 初始化模块事件 */
        onInitModuleEvent() {}

        onLoad() {
          this.initData();
          this.initView();
        }

        start() {}

        /** 初始化数据 */
        initData() {
          var cardTotalNum = (_crd && GameRuleConfig === void 0 ? (_reportPossibleCrUseOfGameRuleConfig({
            error: Error()
          }), GameRuleConfig) : GameRuleConfig).CardTotalNum;
          this._wallList = new Array(cardTotalNum);
          this._numList = new Array(4);
          var total = cardTotalNum / 2;
          var a = Math.floor(total / 4);

          for (var i = 0; i < 4; i++) {
            this._numList[i] = a * 2;
          }

          console.log("NodeWallCtr.initData", this._numList);
        }

        /** 初始化界面 */
        initView() {
          this._nodeWall = new Node();
          this.node.addChild(this._nodeWall);
          this._nodeDeskLiftList = [this.nodeDeskLift1, this.nodeDeskLift2, this.nodeDeskLift3, this.nodeDeskLift4];
          var width = (_crd && GameViewConfig === void 0 ? (_reportPossibleCrUseOfGameViewConfig({
            error: Error()
          }), GameViewConfig) : GameViewConfig).CardConfig.Width;
          var height = (_crd && GameViewConfig === void 0 ? (_reportPossibleCrUseOfGameViewConfig({
            error: Error()
          }), GameViewConfig) : GameViewConfig).CardConfig.Height;
          var thickness = (_crd && GameViewConfig === void 0 ? (_reportPossibleCrUseOfGameViewConfig({
            error: Error()
          }), GameViewConfig) : GameViewConfig).CardConfig.Thickness;
          var groundHeight = (_crd && GameViewConfig === void 0 ? (_reportPossibleCrUseOfGameViewConfig({
            error: Error()
          }), GameViewConfig) : GameViewConfig).CardConfig.GroundToCard;
          var distance = (_crd && GameViewConfig === void 0 ? (_reportPossibleCrUseOfGameViewConfig({
            error: Error()
          }), GameViewConfig) : GameViewConfig).CardConfig.CenterToWall; // mark：待优化

          var indexWall = 0;

          for (var dir = 4 - 1; dir >= 0; dir--) {
            var size = this._numList[dir] / 2;
            var cardList = new Array(size);
            var start = -(width * size * 0.5) + width * 0.5;
            var index = 0;

            for (var i = this._numList[dir] / 2 - 1; i >= 0; i--) {
              for (var j = 0; j < 2; j++) {
                var card = instantiate(this.nodeCard);

                this._nodeWall.addChild(card); // 东南西北


                if (dir == 0) {
                  card.setRotationFromEuler(0, 0, 180);
                  card.setPosition(start + i * width, groundHeight + thickness * j, distance);
                } else if (dir == 1) {
                  card.setRotationFromEuler(0, 90, 180);
                  card.setPosition(distance, groundHeight + thickness * j, start + i * width);
                } else if (dir == 2) {
                  card.setRotationFromEuler(0, 0, 180);
                  card.setPosition(start + i * width, groundHeight + thickness * j, -distance);
                } else if (dir == 3) {
                  card.setRotationFromEuler(0, 90, 180);
                  card.setPosition(-distance, groundHeight + thickness * j, start + i * width);
                }

                cardList[index++] = card;
              }
            }

            console.log("NodeWallCtr.initView", "cardList.length", cardList.length);

            if (dir == 0 || dir == 3) {
              for (var _i = 0; _i < cardList.length; _i += 2) {
                this._wallList[indexWall++] = cardList[_i + 1];
                this._wallList[indexWall++] = cardList[_i];
              }
            } else if (dir == 1 || dir == 2) {
              for (var _i2 = cardList.length - 1; _i2 > 0; _i2 -= 2) {
                this._wallList[indexWall++] = cardList[_i2];
                this._wallList[indexWall++] = cardList[_i2 - 1];
              }
            }
          }

          console.log("NodeWallCtr.initView", "this._wallList.length", this._wallList.length);
        }

        /** 更新界面 */
        updateView() {}

        /** 重置界面 */
        resetView() {
          this._hostDir = (_crd && RoomMgr === void 0 ? (_reportPossibleCrUseOfRoomMgr({
            error: Error()
          }), RoomMgr) : RoomMgr).getInstance().mySeatId - 1;
          this.updateViewDir();
          this._wallStatus = (_crd && GameViewConfig === void 0 ? (_reportPossibleCrUseOfGameViewConfig({
            error: Error()
          }), GameViewConfig) : GameViewConfig).WallStatus.Top;
          this._headIndex = -1;
          this._tailIndex = -1;
          this._remian = this._wallList.length;
          this._gangCount = 0;

          for (var i = 0; i < this._wallList.length; i++) {
            var node = this._wallList[i];
            node.active = true;
          }

          var pos = this._nodeWall.getPosition();

          this._nodeWall.setPosition(pos.x, 0, pos.z);

          this._nodeWall.active = false;

          for (var _i3 = 0; _i3 < this._nodeDeskLiftList.length; _i3++) {
            var _node = this._nodeDeskLiftList[_i3];

            var _pos = _node.getPosition();

            _node.setPosition(_pos.x, 0, _pos.z);
          }
        }

        /** 上升初始化 */
        riseUpInit() {
          // mark
          if (this._wallStatus != (_crd && GameViewConfig === void 0 ? (_reportPossibleCrUseOfGameViewConfig({
            error: Error()
          }), GameViewConfig) : GameViewConfig).WallStatus.Top) {
            console.log("prepareRiseUp", "error", this._wallStatus);
            return;
          }

          var riseupHeight = 8;

          var pos = this._nodeWall.getPosition();

          this._nodeWall.setPosition(pos.x, pos.y - riseupHeight, pos.z);

          this._nodeWall.active = true;

          for (var i = 0; i < this._nodeDeskLiftList.length; i++) {
            var node = this._nodeDeskLiftList[i];

            var _pos2 = node.getPosition();

            node.setPosition(_pos2.x, _pos2.y - riseupHeight / 100, _pos2.z);
          }

          this._wallStatus = (_crd && GameViewConfig === void 0 ? (_reportPossibleCrUseOfGameViewConfig({
            error: Error()
          }), GameViewConfig) : GameViewConfig).WallStatus.Bottom;
        }
        /** 上升 */


        riseUp() {
          if (this._wallStatus != (_crd && GameViewConfig === void 0 ? (_reportPossibleCrUseOfGameViewConfig({
            error: Error()
          }), GameViewConfig) : GameViewConfig).WallStatus.Bottom) {
            console.log("prepareRiseUp", "error", this._wallStatus);
            return;
          }

          var riseupHeight = 8;

          var pos = this._nodeWall.getPosition();

          tween(this._nodeWall).to(1.6, {
            position: new Vec3(pos.x, pos.y + riseupHeight, pos.z)
          }).call(() => {
            if (this._wallStatus != (_crd && GameViewConfig === void 0 ? (_reportPossibleCrUseOfGameViewConfig({
              error: Error()
            }), GameViewConfig) : GameViewConfig).WallStatus.Top) {
              this._wallStatus = (_crd && GameViewConfig === void 0 ? (_reportPossibleCrUseOfGameViewConfig({
                error: Error()
              }), GameViewConfig) : GameViewConfig).WallStatus.Top;
            }
          }).start();

          for (var i = 0; i < this._nodeDeskLiftList.length; i++) {
            var node = this._nodeDeskLiftList[i];

            var _pos3 = node.getPosition();

            tween(node).to(1.6, {
              position: new Vec3(_pos3.x, _pos3.y + riseupHeight / 100, _pos3.z)
            }).start();
          }

          this._wallStatus = (_crd && GameViewConfig === void 0 ? (_reportPossibleCrUseOfGameViewConfig({
            error: Error()
          }), GameViewConfig) : GameViewConfig).WallStatus.Moving;
        }
        /** 开始游戏 */


        onGameStart() {
          this.resetView();
          this.riseUpInit();
          this.riseUp();
        }
        /** 换位 */


        OnChangedSeat(hostDir) {
          this._hostDir = hostDir;
          this.updateViewDir(); // 换位需要旋转牌桌升降台
        }

        updateViewDir() {
          this._nodeDeskLiftList.forEach((value, index, array) => {
            value.setRotationFromEuler(0, 90 * this._hostDir, 0); // 为了保留桌子水印，反向旋转桌子
          });
        }
        /** 摇色子 */


        onRollDices(data) {
          this.changeHeadAndTail(data.diceInfo[0].seatId, data.diceInfo[0].dices);
        }
        /**
         * 根据色子点数确定牌墙的起止点
         * 以庄家为起点1，逆时针方向数。5、9在自己这方；2、6、10在下家方；3、7、11在对家方；4、8、12在上家方。
         * 看小的点数的骰子确定保留几列，如果是3点，就顺时针数，从第4列开始起牌。
         */


        changeHeadAndTail(bankerSeatId, diceList) {
          console.log("NodeWallCtr.changeHeadAndTail", "bankerSeatId", bankerSeatId, "diceList", diceList); // mark

          var num = diceList[0] + diceList[1];
          var min = Math.min(diceList[0] + diceList[1]);

          if (num < 2 || num > 12) {
            console.log("NodeWallCtr.changeHeadAndTail", "骰子数值非法", diceList);
            return;
          }

          console.log("NodeWallCtr.changeHeadAndTail", "num", num, "min", min);
          var startSeatId = 0;

          if (num == 5 || num == 9) {
            // 庄家
            startSeatId = bankerSeatId;
          } else if (num == 2 || num == 6 || num == 10) {
            // 庄家下家
            startSeatId = bankerSeatId + 1;
          } else if (num == 3 || num == 7 || num == 11) {
            // 庄家对家
            startSeatId = bankerSeatId + 2;
          } else if (num == 4 || num == 8 || num == 12) {
            // 庄家上家
            startSeatId = bankerSeatId + 3;
          }

          if (startSeatId > 4) {
            startSeatId = startSeatId - 4;
          }

          console.log("NodeWallCtr.changeHeadAndTail", "startSeatId", startSeatId);

          if (startSeatId == 4) {
            // 北
            this._tailIndex = min * 2 - 1;
          } else if (startSeatId == 3) {
            // 西
            this._tailIndex = this._numList[2] + min * 2 - 1;
          } else if (startSeatId == 2) {
            // 南
            this._tailIndex = this._numList[2] + this._numList[1] + min * 2 - 1;
          } else if (startSeatId == 1) {
            // 东
            this._tailIndex = this._numList[2] + this._numList[1] + this._numList[0] + min * 2 - 1;
          }

          this._headIndex = this._tailIndex + 1;
          console.log("NodeWallCtr.changeHeadAndTail", this._headIndex, this._tailIndex);
        }
        /** 发牌 */


        onDealCard(data) {
          var count = 0;

          for (var i = 0; i < data.cardsCount.length; i++) {
            count += data.cardsCount[i];
          }

          for (var _i4 = 0; _i4 < count; _i4++) {
            this.takeOneCard();
          }
        }
        /** 抓牌 */


        onTakeCard(data) {
          if (this._remian <= data.remian) {
            console.log("NodeWallCtr.onTakeCard", "牌桌剩余牌数太少");
            return;
          }

          if (data.gangCount > this._gangCount) {
            for (var i = 0; i < data.gangCount - this._gangCount; i++) {
              this.takeOneCardFromTail();
            }
          }

          if (this._remian > data.remian) {
            for (var _i5 = 0; _i5 < this._remian - data.remian; _i5++) {
              this.takeOneCard();
            }
          }
        }
        /** 抓牌 */


        takeOneCard() {
          if (!this.hasHead()) {
            console.log("NodeWallCtr.takeOneCard", "牌墙没有起点");
            return;
          }

          if (this.isEmpty()) {
            console.log("NodeWallCtr.takeOneCard", "牌墙已空");
            return;
          }

          if (this._wallList[this._headIndex]) {
            this._wallList[this._headIndex].active = false;
            this._headIndex++;

            if (this._headIndex > this._wallList.length - 1) {
              this._headIndex = 0;
            }

            this._remian = this._remian - 1;
          }
        } // /** 抓牌墩 */
        // private takeFourCard() {
        //     if (!this.hasHead()) {
        //         console.log("NodeWallCtr.takeOneCard", "牌墙没有起点");
        //         return;
        //     }
        //     if (this.isEmpty()) {
        //         console.log("NodeWallCtr.takeOneCard", "牌墙已空");
        //         return;
        //     }
        //     for (let i = 0; i < 4; i++) {
        //         if (this._wallList[this._headIndex]) {
        //             this._wallList[this._headIndex].active = false;
        //             this._headIndex++;
        //             if (this._headIndex > this._wallList.length - 1) {
        //                 this._headIndex = 0;
        //             }
        //             this._remian = this._remian - 1
        //         }
        //     }
        // }

        /** 杠后从牌墙尾拿牌 */


        takeOneCardFromTail() {
          if (!this.hasHead()) {
            console.log("NodeWallCtr.takeOneCard", "牌墙没有起点");
            return;
          }

          if (this.isEmpty()) {
            console.log("NodeWallCtr.takeOneCard", "牌墙已空");
            return;
          }

          var index = this._tailIndex;

          if ((index + 1) % 2 == 0) {
            index--;

            if (this._wallList[index]) {
              this._wallList[index].active = false;
            }
          } else {
            index++;

            if (this._wallList[index]) {
              this._wallList[index].active = false;
            }
          }

          this._tailIndex--;

          if (this._tailIndex < 0) {
            this._tailIndex = this._wallList.length - 1;
          }

          this._gangCount++;
          this._remian--;
        }

        hasHead() {
          return this._headIndex >= 0 && this._tailIndex >= 0;
        }

        isEmpty() {
          return this._remian <= 0;
        }
        /** 游戏结束 */


        onGameOver(data) {}
        /** 重连 */


        onReconnect() {} //销毁


        onDestroy() {}

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "nodeCard", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "nodeDeskLift1", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "nodeDeskLift2", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "nodeDeskLift3", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "nodeDeskLift4", [_dec6], {
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
//# sourceMappingURL=6839310962dd91be84cf5a5836afc2f14ec3d7ae.js.map