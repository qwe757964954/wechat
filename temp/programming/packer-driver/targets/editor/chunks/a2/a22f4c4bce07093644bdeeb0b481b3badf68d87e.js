System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Node, Vec3, EventManager, BaseComponent, RoomMgr, FXJEvent, FXJSound, GameViewConfig, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _crd, ccclass, property, NodeDiceCtr;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfEventManager(extras) {
    _reporterNs.report("EventManager", "../../../framework/manager/EventManager", _context.meta, extras);
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

  function _reportPossibleCrUseOfFXJSound(extras) {
    _reporterNs.report("FXJSound", "../common/FXJSound", _context.meta, extras);
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
      _decorator = _cc._decorator;
      Node = _cc.Node;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      EventManager = _unresolved_2.EventManager;
    }, function (_unresolved_3) {
      BaseComponent = _unresolved_3.BaseComponent;
    }, function (_unresolved_4) {
      RoomMgr = _unresolved_4.RoomMgr;
    }, function (_unresolved_5) {
      FXJEvent = _unresolved_5.FXJEvent;
    }, function (_unresolved_6) {
      FXJSound = _unresolved_6.FXJSound;
    }, function (_unresolved_7) {
      GameViewConfig = _unresolved_7.GameViewConfig;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "dadb49ebEtAeZ0OHirDGawW", "NodeDiceCtr", undefined);

      __checkObsolete__(['_decorator', 'Node', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Name = NodeDiceCtr
       * URL = db://assets/package/game/scripts/NodeDiceCtr.ts
       * Time = Tue Aug 15 2023 15:37:25 GMT+0800 (中国标准时间)
       * Author = harvyson
       *
       * Life: onLoad-->onInitModuleEvent-->onEnable->start->update->lateUpdate->onDisable->onDestroy
       * 
       */

      _export("NodeDiceCtr", NodeDiceCtr = (_dec = ccclass('NodeDiceCtr'), _dec2 = property({
        tooltip: "麻将桌盖板节点",
        type: Node
      }), _dec3 = property({
        tooltip: "色子节点",
        type: Node
      }), _dec4 = property({
        tooltip: "色子节点1",
        type: Node
      }), _dec5 = property({
        tooltip: "色子节点2",
        type: Node
      }), _dec(_class = (_class2 = class NodeDiceCtr extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "nodeGaiBan", _descriptor, this);

          _initializerDefineProperty(this, "nodeDiceView", _descriptor2, this);

          _initializerDefineProperty(this, "nodeDice1", _descriptor3, this);

          _initializerDefineProperty(this, "nodeDice2", _descriptor4, this);

          this._hostDir = 0;
          this._diceStatus = (_crd && GameViewConfig === void 0 ? (_reportPossibleCrUseOfGameViewConfig({
            error: Error()
          }), GameViewConfig) : GameViewConfig).DiceStatus.Stop;
          this._dices = null;
          this._time = 0;
          this._config = {
            LAP: 5,
            LAP_LOCAL: 10,
            TIME_ROTATE: 1,
            TIME_MOVE: 0.5,
            TIME_LOOK: 0.5,
            SECOND_LAP_LOCAL: 10 / 1,
            // LAP_LOCAL/TIME_ROTATE
            SECOND_LAP: 5 / 1,
            // LAP/TIME_ROTATE
            BEGIN_X: 2,
            MOVE_X: 1
          };
        }

        /** override 初始化模块事件 */
        onInitModuleEvent() {}

        onLoad() {}

        start() {}

        /** 初始化界面 */
        initView() {}

        /** 更新界面 */
        updateView() {}

        resetView() {
          this._hostDir = (_crd && RoomMgr === void 0 ? (_reportPossibleCrUseOfRoomMgr({
            error: Error()
          }), RoomMgr) : RoomMgr).getInstance().mySeatId - 1;
          this.updateViewDir();
          this._time = 0;
          this._diceStatus = (_crd && GameViewConfig === void 0 ? (_reportPossibleCrUseOfGameViewConfig({
            error: Error()
          }), GameViewConfig) : GameViewConfig).DiceStatus.Stop;
        }
        /** 更新色子方位 */


        updateViewDir() {
          this.node.setRotationFromEuler(0, 90 * this._hostDir, 0);
        }
        /** 游戏开始 */


        onGameStart() {
          this.resetView();
        }
        /** 换位 */


        OnChangedSeat(hostDir) {
          this._hostDir = hostDir;
          this.updateViewDir(); // 换位需要重置色子节点方向
        }
        /** 摇色子 */


        onRollDices(data) {
          this._dices = data.diceInfo[0].dices;
          this._time = 0;
          this.nodeDice1.setPosition(this._config.BEGIN_X, 0, 0);
          this.nodeDice2.setPosition(-this._config.BEGIN_X, 0, 0);
          this.nodeGaiBan.active = false;
          this._diceStatus = (_crd && GameViewConfig === void 0 ? (_reportPossibleCrUseOfGameViewConfig({
            error: Error()
          }), GameViewConfig) : GameViewConfig).DiceStatus.Move;
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && FXJEvent === void 0 ? (_reportPossibleCrUseOfFXJEvent({
            error: Error()
          }), FXJEvent) : FXJEvent).SYS_PLAY_EFFECT, (_crd && FXJSound === void 0 ? (_reportPossibleCrUseOfFXJSound({
            error: Error()
          }), FXJSound) : FXJSound).GameRoll);
        }

        update(dt) {
          if (this._diceStatus == (_crd && GameViewConfig === void 0 ? (_reportPossibleCrUseOfGameViewConfig({
            error: Error()
          }), GameViewConfig) : GameViewConfig).DiceStatus.Move) {
            this._time += dt;
            let dtLapLocal = dt * 360 * this._config.SECOND_LAP_LOCAL;
            let rotation1 = this.nodeDice1.eulerAngles;
            this.nodeDice1.setRotationFromEuler(rotation1.x + dtLapLocal, rotation1.y + dtLapLocal, rotation1.z + dtLapLocal);
            let rotation2 = this.nodeDice2.eulerAngles;
            this.nodeDice2.setRotationFromEuler(rotation2.x + dtLapLocal, rotation2.y + dtLapLocal, rotation2.z + dtLapLocal);
            let dtLap = dt * 360 * this._config.SECOND_LAP;
            let rotaionView = this.nodeDiceView.eulerAngles;
            this.nodeDiceView.setRotationFromEuler(rotaionView.x, rotaionView.y + dtLap, rotaionView.z);

            if (this._time >= this._config.TIME_ROTATE) {
              let endRotation1 = this.getRotationByValue(this._dices[0]);
              this.nodeDice1.setRotationFromEuler(endRotation1);
              let endRotation2 = this.getRotationByValue(this._dices[1]);
              this.nodeDice2.setRotationFromEuler(endRotation2);
              this._diceStatus = (_crd && GameViewConfig === void 0 ? (_reportPossibleCrUseOfGameViewConfig({
                error: Error()
              }), GameViewConfig) : GameViewConfig).DiceStatus.Pause;
            }
          } else if (this._diceStatus == (_crd && GameViewConfig === void 0 ? (_reportPossibleCrUseOfGameViewConfig({
            error: Error()
          }), GameViewConfig) : GameViewConfig).DiceStatus.Pause) {
            if (this._time >= this._config.TIME_ROTATE + this._config.TIME_MOVE + this._config.TIME_ROTATE) {
              this._diceStatus = (_crd && GameViewConfig === void 0 ? (_reportPossibleCrUseOfGameViewConfig({
                error: Error()
              }), GameViewConfig) : GameViewConfig).DiceStatus.Stop;
            }
          } else if (this._diceStatus == (_crd && GameViewConfig === void 0 ? (_reportPossibleCrUseOfGameViewConfig({
            error: Error()
          }), GameViewConfig) : GameViewConfig).DiceStatus.Stop) {// 停止了
          }
        }

        getRotationByValue(value) {
          let rotateX = 0;
          let rotateZ = 0;

          switch (value) {
            case 1:
              rotateX = 90;
              rotateZ = 0;
              break;

            case 2:
              rotateX = 270;
              rotateZ = 0;
              break;

            case 3:
              rotateX = 180;
              rotateZ = 0;
              break;

            case 4:
              rotateX = 0;
              rotateZ = 90;
              break;

            case 5:
              rotateX = 0;
              rotateZ = 0;
              break;

            case 6:
              rotateX = 0;
              rotateZ = 180;
              break;

            default:
              break;
          }

          return new Vec3(rotateX, 0, rotateZ);
        }
        /** 操作开始 */


        onOperationStart(data) {
          this.nodeGaiBan.active = true;
        }
        /** 游戏结束 */


        onGameOver(data) {}
        /** 重连 */


        onReconnect() {
          this.resetView();
        } //销毁


        onDestroy() {}

        log(...args) {
          console.log(this.name, args);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "nodeGaiBan", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "nodeDiceView", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "nodeDice1", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "nodeDice2", [_dec5], {
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
//# sourceMappingURL=a22f4c4bce07093644bdeeb0b481b3badf68d87e.js.map