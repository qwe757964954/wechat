System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, MeshRenderer, Node, Texture2D, _decorator, Utils, BaseComponent, RoomMgr, GameStatus, FXJRes, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _crd, ccclass, property, NodeClockCtr;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfUtils(extras) {
    _reporterNs.report("Utils", "../../../framework/Utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../../framework/vc/BaseComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoomMgr(extras) {
    _reporterNs.report("RoomMgr", "../cache/RoomMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameStatus(extras) {
    _reporterNs.report("GameStatus", "../common/FXJConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFXJRes(extras) {
    _reporterNs.report("FXJRes", "../common/FXJRes", _context.meta, extras);
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
      MeshRenderer = _cc.MeshRenderer;
      Node = _cc.Node;
      Texture2D = _cc.Texture2D;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      Utils = _unresolved_2.Utils;
    }, function (_unresolved_3) {
      BaseComponent = _unresolved_3.BaseComponent;
    }, function (_unresolved_4) {
      RoomMgr = _unresolved_4.RoomMgr;
    }, function (_unresolved_5) {
      GameStatus = _unresolved_5.GameStatus;
    }, function (_unresolved_6) {
      FXJRes = _unresolved_6.FXJRes;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "06d44r0E6pFVZLpR0zzOqqp", "NodeClockCtr", undefined);

      __checkObsolete__(['MeshRenderer', 'Node', 'Texture2D', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Name = NodeClockCtr
       * URL = db://assets/package/game/scripts/NodeClockCtr.ts
       * Time = Mon Aug 14 2023 10:42:21 GMT+0800 (中国标准时间)
       * Author = harvyson
       *
       * Life: onLoad-->onInitModuleEvent-->onEnable->start->update->lateUpdate->onDisable->onDestroy
       * 
       */

      _export("NodeClockCtr", NodeClockCtr = (_dec = ccclass('NodeClockCtr'), _dec2 = property({
        tooltip: "麻将桌东指示灯节点 - 东",
        type: Node
      }), _dec3 = property({
        tooltip: "麻将桌东指示灯节点 - 南",
        type: Node
      }), _dec4 = property({
        tooltip: "麻将桌东指示灯节点 - 西",
        type: Node
      }), _dec5 = property({
        tooltip: "麻将桌东指示灯节点 - 北",
        type: Node
      }), _dec6 = property({
        tooltip: "麻将桌倒计时节点",
        type: Node
      }), _dec(_class = (_class2 = class NodeClockCtr extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        /** 麻将桌东指示灯节点 - 东 */

        /** 麻将桌东指示灯节点 - 南 */

        /** 麻将桌东指示灯节点 - 西 */

        /** 麻将桌东指示灯节点 - 北 */

        /** 麻将桌倒计时节点 */

        /** 指示灯节点 */

        /** 指示灯节点配置 */

        /** 指示灯方向 */

        /** 本家方位 */

        /** 计时 */
        constructor() {
          super();

          _initializerDefineProperty(this, "nodeLightDong", _descriptor, this);

          _initializerDefineProperty(this, "nodeLightNan", _descriptor2, this);

          _initializerDefineProperty(this, "nodeLightXi", _descriptor3, this);

          _initializerDefineProperty(this, "nodeLightBei", _descriptor4, this);

          _initializerDefineProperty(this, "nodeTimer", _descriptor5, this);

          this._nodeLight = null;
          this._nodeLightConfig = [["dong_1", "dong_2"], ["nan_1", "nan_2"], ["xi_1", "xi_2"], ["bei_1", "bei_2"]];
          this._nodeLightDir = -1;
          this._hostDir = 0;
          this._timeCount = 0;
          this.preloadRes();
        }
        /** 预加载 */


        preloadRes() {
          this._nodeLightConfig.forEach((value1, index1, array1) => {
            value1.forEach((value2, index2, array2) => {
              var path = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                error: Error()
              }), Utils) : Utils).string_format((_crd && FXJRes === void 0 ? (_reportPossibleCrUseOfFXJRes({
                error: Error()
              }), FXJRes) : FXJRes).Picture_Game_Desk_Light.path, value2);
              this.getPreLoaderRes((_crd && FXJRes === void 0 ? (_reportPossibleCrUseOfFXJRes({
                error: Error()
              }), FXJRes) : FXJRes).Picture_Game_Desk_Light.bundle, path, Texture2D, res => {});
            });
          });

          for (var i = 0; i <= 20; i++) {
            var path = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).string_format((_crd && FXJRes === void 0 ? (_reportPossibleCrUseOfFXJRes({
              error: Error()
            }), FXJRes) : FXJRes).Picture_Game_Desk_Timer.path, i);
            this.getPreLoaderRes((_crd && FXJRes === void 0 ? (_reportPossibleCrUseOfFXJRes({
              error: Error()
            }), FXJRes) : FXJRes).Picture_Game_Desk_Timer.bundle, path, Texture2D, res => {});
          }
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
          // 东南西北指示灯
          this._nodeLight = [this.nodeLightDong, this.nodeLightNan, this.nodeLightXi, this.nodeLightBei];
        }

        resetView() {
          this._hostDir = (_crd && RoomMgr === void 0 ? (_reportPossibleCrUseOfRoomMgr({
            error: Error()
          }), RoomMgr) : RoomMgr).getInstance().mySeatId - 1;
          this.updateViewTimerDir();
        }
        /** 更新倒计时方位 */


        updateViewTimerDir() {
          this.node.setRotationFromEuler(0, 90 * this._hostDir, 0);
        }

        updateViewLight(dir) {
          if (dir === void 0) {
            dir = -1;
          }

          if (this._nodeLightDir == dir) {
            return;
          }

          this._nodeLight.forEach((value, index, array) => {
            var config = this._nodeLightConfig[index];
            var path = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).string_format((_crd && FXJRes === void 0 ? (_reportPossibleCrUseOfFXJRes({
              error: Error()
            }), FXJRes) : FXJRes).Picture_Game_Desk_Light.path, dir == index ? config[1] : config[0]);
            this.getPreLoaderRes((_crd && FXJRes === void 0 ? (_reportPossibleCrUseOfFXJRes({
              error: Error()
            }), FXJRes) : FXJRes).Picture_Game_Desk_Light.bundle, path, Texture2D, tex => {
              if (tex) {
                value.getComponent(MeshRenderer).material.setProperty('albedoMap', tex);
              }
            });
          });

          this._nodeLightDir = dir;
        }

        updateViewTime(time) {
          if (time === void 0) {
            time = -1;
          }

          if (time >= 0) {
            this.nodeTimer.active = true;
            var path = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).string_format((_crd && FXJRes === void 0 ? (_reportPossibleCrUseOfFXJRes({
              error: Error()
            }), FXJRes) : FXJRes).Picture_Game_Desk_Timer.path, time);
            this.getPreLoaderRes((_crd && FXJRes === void 0 ? (_reportPossibleCrUseOfFXJRes({
              error: Error()
            }), FXJRes) : FXJRes).Picture_Game_Desk_Timer.bundle, path, Texture2D, tex => {
              if (tex) {
                this.nodeTimer.getComponent(MeshRenderer).material.setProperty('albedoMap', tex);
              }
            });
          } else {
            this.nodeTimer.active = false;
          }
        }
        /** 
         * 设置闹钟
         * @param dir 闹钟方向, 为空关闭闹钟
         * @param time 闹钟时间
         *  */


        onSetClock(dir, time) {
          if (dir === void 0) {
            dir = -1;
          }

          if (time === void 0) {
            time = -1;
          }

          this.log("NodeClockCtr.onSetClock", "倒计时开始", "dir", dir, "time", time);
          this.unschedule(this.onScheduleEvent);
          this.updateViewLight(dir);
          this.updateViewTime(time); // 启动计时

          if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).isNotNull(time) && time > 0) {
            this._timeCount = time;
            this.schedule(this.onScheduleEvent, 1);
          }
        }
        /** 计时回调 */


        onScheduleEvent() {
          this._timeCount--; // this.log("NodeClockCtr.onScheduleEvent", this._timeCount)

          if (this._timeCount < 0) {
            this.unschedule(this.onScheduleEvent);
          } else {
            this.updateViewTime(this._timeCount);
          }
        }
        /** 游戏开始 */


        onGameStart() {
          this.resetView();
        }
        /** 换位 */


        OnChangedSeat(hostDir) {
          this._hostDir = hostDir;
          this.updateViewTimerDir(); // 换位需要重置色子节点方向
        }
        /** 操作开始 */


        onOperationStart(data) {
          // 获取出牌时间
          var timeOut = (_crd && RoomMgr === void 0 ? (_reportPossibleCrUseOfRoomMgr({
            error: Error()
          }), RoomMgr) : RoomMgr).getInstance().getTimeOut((_crd && GameStatus === void 0 ? (_reportPossibleCrUseOfGameStatus({
            error: Error()
          }), GameStatus) : GameStatus).PLAY_CARD);
          var dir = data.bankSeatId - 1;
          this.onSetClock(dir, timeOut);
        }
        /** 操作选项 */


        onOperationSelect(data) {
          // 获取操作时间
          var timeOut = (_crd && RoomMgr === void 0 ? (_reportPossibleCrUseOfRoomMgr({
            error: Error()
          }), RoomMgr) : RoomMgr).getInstance().getTimeOut((_crd && GameStatus === void 0 ? (_reportPossibleCrUseOfGameStatus({
            error: Error()
          }), GameStatus) : GameStatus).OPERATION);
          var dir = data.seatId - 1;
          this.onSetClock(dir, timeOut);
        }
        /** 抓牌 */


        onTakeCard(data) {
          // 获取出牌时间
          var timeOut = (_crd && RoomMgr === void 0 ? (_reportPossibleCrUseOfRoomMgr({
            error: Error()
          }), RoomMgr) : RoomMgr).getInstance().getTimeOut((_crd && GameStatus === void 0 ? (_reportPossibleCrUseOfGameStatus({
            error: Error()
          }), GameStatus) : GameStatus).PLAY_CARD);
          var dir = data.seatId - 1;
          this.onSetClock(dir, timeOut);
        }
        /** 游戏结束 */


        onGameOver(data) {
          // 胡牌关闭时间和指示灯
          this.onSetClock(-1, -1);
        }
        /** 重连 */


        onReconnect() {
          this.resetView();
        } //销毁


        onDestroy() {}

        log() {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          console.log(args);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "nodeLightDong", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "nodeLightNan", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "nodeLightXi", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "nodeLightBei", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "nodeTimer", [_dec6], {
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
//# sourceMappingURL=09140736aed090121d2aae810f2d8afb7f6d9e5a.js.map