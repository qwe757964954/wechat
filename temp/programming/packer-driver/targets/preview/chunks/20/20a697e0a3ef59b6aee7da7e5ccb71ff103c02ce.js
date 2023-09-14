System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14", "__unresolved_15", "__unresolved_16", "__unresolved_17"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Node, EventManager, Utils, BaseComponent, PlayerMgr, RoomMgr, OPCode, FXJController, FXJEvent, FXJSound, GameEvent, NodeClockCtr, NodeDiceCtr, NodeHandCardCtr, NodeHuCardCtr, NodeMeldCardCtr, NodeOutCardCtr, NodeWallCtr, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _crd, ccclass, property, menu, GameDeskPrefabCtr;

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

  function _reportPossibleCrUseOfPlayerMgr(extras) {
    _reporterNs.report("PlayerMgr", "../cache/PlayerMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoomMgr(extras) {
    _reporterNs.report("RoomMgr", "../cache/RoomMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfOPCode(extras) {
    _reporterNs.report("OPCode", "../common/FXJConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFXJController(extras) {
    _reporterNs.report("FXJController", "../common/FXJController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFXJEvent(extras) {
    _reporterNs.report("FXJEvent", "../common/FXJEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFXJSound(extras) {
    _reporterNs.report("FXJSound", "../common/FXJSound", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameEvent(extras) {
    _reporterNs.report("GameEvent", "../common/GameEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGame(extras) {
    _reporterNs.report("Game", "../common/idl/Game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNodeClockCtr(extras) {
    _reporterNs.report("NodeClockCtr", "./NodeClockCtr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNodeDiceCtr(extras) {
    _reporterNs.report("NodeDiceCtr", "./NodeDiceCtr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNodeHandCardCtr(extras) {
    _reporterNs.report("NodeHandCardCtr", "./NodeHandCardCtr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNodeHuCardCtr(extras) {
    _reporterNs.report("NodeHuCardCtr", "./NodeHuCardCtr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNodeMeldCardCtr(extras) {
    _reporterNs.report("NodeMeldCardCtr", "./NodeMeldCardCtr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNodeOutCardCtr(extras) {
    _reporterNs.report("NodeOutCardCtr", "./NodeOutCardCtr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNodeWallCtr(extras) {
    _reporterNs.report("NodeWallCtr", "./NodeWallCtr", _context.meta, extras);
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
    }, function (_unresolved_2) {
      EventManager = _unresolved_2.EventManager;
    }, function (_unresolved_3) {
      Utils = _unresolved_3.Utils;
    }, function (_unresolved_4) {
      BaseComponent = _unresolved_4.BaseComponent;
    }, function (_unresolved_5) {
      PlayerMgr = _unresolved_5.PlayerMgr;
    }, function (_unresolved_6) {
      RoomMgr = _unresolved_6.RoomMgr;
    }, function (_unresolved_7) {
      OPCode = _unresolved_7.OPCode;
    }, function (_unresolved_8) {
      FXJController = _unresolved_8.FXJController;
    }, function (_unresolved_9) {
      FXJEvent = _unresolved_9.FXJEvent;
    }, function (_unresolved_10) {
      FXJSound = _unresolved_10.FXJSound;
    }, function (_unresolved_11) {
      GameEvent = _unresolved_11.GameEvent;
    }, function (_unresolved_12) {
      NodeClockCtr = _unresolved_12.NodeClockCtr;
    }, function (_unresolved_13) {
      NodeDiceCtr = _unresolved_13.NodeDiceCtr;
    }, function (_unresolved_14) {
      NodeHandCardCtr = _unresolved_14.NodeHandCardCtr;
    }, function (_unresolved_15) {
      NodeHuCardCtr = _unresolved_15.NodeHuCardCtr;
    }, function (_unresolved_16) {
      NodeMeldCardCtr = _unresolved_16.NodeMeldCardCtr;
    }, function (_unresolved_17) {
      NodeOutCardCtr = _unresolved_17.NodeOutCardCtr;
    }, function (_unresolved_18) {
      NodeWallCtr = _unresolved_18.NodeWallCtr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6a214pRcM9AKaCghVkSG6rA", "GameDeskPrefabCtr", undefined);

      __checkObsolete__(['_decorator', 'Node']);

      ({
        ccclass,
        property,
        menu
      } = _decorator);
      /**
       * Name = GameDeskPrefabCtr
       * URL = db://assets/package/game/scripts/GameDeskPrefabCtr.ts
       * Time = Thu Aug 03 2023 11:48:42 GMT+0800 (中国标准时间)
       * Author = harvyson
       *
       * Life: onLoad-->onInitModuleEvent-->onEnable->start->update->lateUpdate->onDisable->onDestroy
       * 
       */

      _export("GameDeskPrefabCtr", GameDeskPrefabCtr = (_dec = ccclass('GameDeskPrefabCtr'), _dec2 = menu('prefab/game/GameDeskPrefabCtr'), _dec3 = property({
        tooltip: "桌子节点",
        type: Node
      }), _dec4 = property({
        tooltip: "牌墙节点",
        type: _crd && NodeWallCtr === void 0 ? (_reportPossibleCrUseOfNodeWallCtr({
          error: Error()
        }), NodeWallCtr) : NodeWallCtr
      }), _dec5 = property({
        tooltip: "出牌节点",
        type: _crd && NodeOutCardCtr === void 0 ? (_reportPossibleCrUseOfNodeOutCardCtr({
          error: Error()
        }), NodeOutCardCtr) : NodeOutCardCtr
      }), _dec6 = property({
        tooltip: "手牌节点",
        type: _crd && NodeHandCardCtr === void 0 ? (_reportPossibleCrUseOfNodeHandCardCtr({
          error: Error()
        }), NodeHandCardCtr) : NodeHandCardCtr
      }), _dec7 = property({
        tooltip: "碰杠牌节点",
        type: _crd && NodeMeldCardCtr === void 0 ? (_reportPossibleCrUseOfNodeMeldCardCtr({
          error: Error()
        }), NodeMeldCardCtr) : NodeMeldCardCtr
      }), _dec8 = property({
        tooltip: "胡牌节点",
        type: _crd && NodeHuCardCtr === void 0 ? (_reportPossibleCrUseOfNodeHuCardCtr({
          error: Error()
        }), NodeHuCardCtr) : NodeHuCardCtr
      }), _dec9 = property({
        tooltip: "闹钟节点",
        type: _crd && NodeClockCtr === void 0 ? (_reportPossibleCrUseOfNodeClockCtr({
          error: Error()
        }), NodeClockCtr) : NodeClockCtr
      }), _dec10 = property({
        tooltip: "色子节点",
        type: _crd && NodeDiceCtr === void 0 ? (_reportPossibleCrUseOfNodeDiceCtr({
          error: Error()
        }), NodeDiceCtr) : NodeDiceCtr
      }), _dec(_class = _dec2(_class = (_class2 = class GameDeskPrefabCtr extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        // 桌子节点
        // 牌墙节点
        // 出牌节点
        // 手牌节点
        // 碰杠牌节点
        // 胡牌节点
        // 闹钟节点
        // 色子节点
        // 杠牌数 计数，用于界面逻辑

        /** 音效配置 */
        constructor() {
          super();

          _initializerDefineProperty(this, "nodeDesk", _descriptor, this);

          _initializerDefineProperty(this, "nodeWall", _descriptor2, this);

          _initializerDefineProperty(this, "nodeOutCard", _descriptor3, this);

          _initializerDefineProperty(this, "nodeHandCard", _descriptor4, this);

          _initializerDefineProperty(this, "nodeMeldCard", _descriptor5, this);

          _initializerDefineProperty(this, "nodeHuCard", _descriptor6, this);

          _initializerDefineProperty(this, "nodeClock", _descriptor7, this);

          _initializerDefineProperty(this, "nodeDice", _descriptor8, this);

          this._gangCount = 0;
          this._soundConfig = ["wan", "tong", "tiao", "feng", "jian"];
          console.log("==============飞小鸡游戏桌子初始化========");
          this.init();
        } //加载初始化


        init() {
          (_crd && FXJController === void 0 ? (_reportPossibleCrUseOfFXJController({
            error: Error()
          }), FXJController) : FXJController).getInstance().GameDeskCtr = this;
        }
        /** override 初始化模块事件 */


        onInitModuleEvent() {
          // 游戏开始
          this.addModelListener((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).VIEW_BROADCAST_GAME_START, this.onGameStart); // 摇色子

          this.addModelListener((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).VIEW_BROADCAST_ZHI_TOU, this.onRollDices); // 发牌

          this.addModelListener((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).VIEW_BROADCAST_DEAL_CARD, this.onDealCard); // 操作开始

          this.addModelListener((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).VIEW_BROADCAST_OPERATION_START, this.onOperationStart); // 操作选项

          this.addModelListener((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).VIEW_USER_OPERATION, this.onOperationSelect); // 出牌 吃碰杠 胡

          this.addModelListener((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).UPDATE_USER_OPERATION_RESULT, this.onOperationResult); // 抓牌

          this.addModelListener((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).VIEW_BROADCAST_GRAB_CARD, this.onTakeCard); // 游戏结束

          this.addModelListener((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).VIEW_BROADCAST_GAME_OVER, this.onGameOver);
          this.addModelListener((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).RECEIVE_DEAL_CARD, this.onReconnect);
        }

        onLoad() {
          this.initData();
          this.initView();
        }

        start() {}

        /** 初始化数据 */
        initData() {}

        /** 初始化界面 */
        initView() {}

        /** 更新界面 */
        updateView() {}

        /** 重置界面 */
        resetView() {
          this._gangCount = 0;
        }
        /** 换位 */


        OnChangedSeat(hostDir) {
          this.nodeWall.OnChangedSeat(hostDir);
          this.nodeHandCard.OnChangedSeat(hostDir);
          this.nodeOutCard.OnChangedSeat(hostDir);
          this.nodeMeldCard.OnChangedSeat(hostDir);
          this.nodeClock.OnChangedSeat(hostDir);
        } // 牌墙 ---------------------------------------------------------------------

        /** 开始游戏 */


        onGameStart() {
          this.log("GameDeskPrefabCtr.onGameStart"); // 需要根据玩家位置旋转方位

          var hostDir = (_crd && RoomMgr === void 0 ? (_reportPossibleCrUseOfRoomMgr({
            error: Error()
          }), RoomMgr) : RoomMgr).getInstance().mySeatId - 1; // mark

          this.node.setRotationFromEuler(0, -90 * hostDir, 0);
          this.nodeDesk.setRotationFromEuler(0, 90 * hostDir, 0); // 为了保留桌子水印，反向旋转桌子

          this.resetView();
          this.nodeWall.onGameStart();
          this.nodeHandCard.onGameStart();
          this.nodeOutCard.onGameStart();
          this.nodeMeldCard.onGameStart();
          this.nodeClock.onGameStart();
        }
        /** 摇色子 */


        onRollDices(event, data) {
          this.log("GameDeskPrefabCtr.onRollDices", data);

          if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).isNull(data) || (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).table_isEmpty(data.diceInfo)) {
            this.log("GameDeskPrefabCtr.onRollDices", "数据异常", data);
            return;
          }

          var bankerSeatId = data.diceInfo[0].seatId;
          var diceList = data.diceInfo[0].dices;

          if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).isNull(bankerSeatId) || bankerSeatId < 1 || bankerSeatId > 4) {
            this.log("GameDeskPrefabCtr.onRollDices", "庄家座位非法", bankerSeatId);
            return;
          }

          if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).table_isEmpty(diceList) || diceList.length != 2) {
            this.log("GameDeskPrefabCtr.onRollDices", "骰子数量非法", diceList);
            return;
          }

          for (var i = 0; i < diceList.length; i++) {
            var dice = diceList[i];

            if (dice < 1 || dice > 6) {
              this.log("GameDeskPrefabCtr.onRollDices", "骰子数值非法", diceList);
              return;
            }
          }

          this.nodeWall.onRollDices(data);
          this.nodeDice.onRollDices(data);
        }
        /** 发牌 */


        onDealCard(event, data) {
          this.log("GameDeskPrefabCtr.onDealCard", data);

          if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).isNull(data) || (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).table_isEmpty(data.cards)) {
            this.log("GameDeskPrefabCtr.onDealCard", "没有手牌数据");
            return;
          }

          this.nodeWall.onDealCard(data);
          this.nodeHandCard.onDealCard(data);
        }
        /** 操作开始 */


        onOperationStart(event, data) {
          this.log("GameDeskPrefabCtr.onOperationStart", data);
          this.nodeClock.onOperationStart(data);
          this.nodeDice.onOperationStart(data);
        }
        /** 操作选项 */


        onOperationSelect(event, data) {
          this.log("GameDeskPrefabCtr.onOperationSelect", data);
          this.nodeClock.onOperationSelect(data);
        }
        /** 操作结果 */


        onOperationResult(event, data) {
          if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).isNull(data) || (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).isNull(data.seatId) || (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).isNull(data.opCode)) {
            this.log("GameDeskPrefabCtr.onOperationResult", "数据异常", data);
            return;
          }

          switch (data.opCode) {
            case (_crd && OPCode === void 0 ? (_reportPossibleCrUseOfOPCode({
              error: Error()
            }), OPCode) : OPCode).OPE_OUT_CARD:
              // 出牌
              this.onOutCard(event, data);
              break;

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
              this.onPengGang(event, data);
              break;

            case (_crd && OPCode === void 0 ? (_reportPossibleCrUseOfOPCode({
              error: Error()
            }), OPCode) : OPCode).OPE_AN_GANG: // 暗杠

            case (_crd && OPCode === void 0 ? (_reportPossibleCrUseOfOPCode({
              error: Error()
            }), OPCode) : OPCode).OPE_GANG: // 杠

            case (_crd && OPCode === void 0 ? (_reportPossibleCrUseOfOPCode({
              error: Error()
            }), OPCode) : OPCode).OPE_BU_GANG:
              // 补杠
              this.onPengGang(event, data);
              this._gangCount++;
              break;

            case (_crd && OPCode === void 0 ? (_reportPossibleCrUseOfOPCode({
              error: Error()
            }), OPCode) : OPCode).OPE_HU: // 胡

            case (_crd && OPCode === void 0 ? (_reportPossibleCrUseOfOPCode({
              error: Error()
            }), OPCode) : OPCode).OPE_ZI_MO:
              // 自摸
              this.onHu(event, data);
              break;

            case (_crd && OPCode === void 0 ? (_reportPossibleCrUseOfOPCode({
              error: Error()
            }), OPCode) : OPCode).OPE_DIAO:
              // 调牌
              break;

            default:
              break;
          }

          this.playEffect(event, data);
        }

        playEffect(event, data) {
          var roleName = "xiaobo";
          var player = (_crd && PlayerMgr === void 0 ? (_reportPossibleCrUseOfPlayerMgr({
            error: Error()
          }), PlayerMgr) : PlayerMgr).getInstance().findPlayerWithSeatId(data.seatId);

          if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).isNotNull(player)) {
            var sex = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).number_valueOf(player.gameUserInfo.sex);

            if (sex == 2) {
              roleName = "xiaoya";
            }
          }

          switch (data.opCode) {
            case (_crd && OPCode === void 0 ? (_reportPossibleCrUseOfOPCode({
              error: Error()
            }), OPCode) : OPCode).OPE_OUT_CARD:
              // 出牌
              var cardValue = data.opCard >> 8 & 0x0F;
              var cardType = data.opCard >> 12;

              if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                error: Error()
              }), Utils) : Utils).isNotNull(this._soundConfig[cardType])) {
                var path = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                  error: Error()
                }), Utils) : Utils).string_format((_crd && FXJSound === void 0 ? (_reportPossibleCrUseOfFXJSound({
                  error: Error()
                }), FXJSound) : FXJSound).GameDiscard.path, roleName, this._soundConfig[cardType], cardValue);
                (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
                  error: Error()
                }), EventManager) : EventManager).dispatch((_crd && FXJEvent === void 0 ? (_reportPossibleCrUseOfFXJEvent({
                  error: Error()
                }), FXJEvent) : FXJEvent).SYS_PLAY_EFFECT, {
                  bundle: (_crd && FXJSound === void 0 ? (_reportPossibleCrUseOfFXJSound({
                    error: Error()
                  }), FXJSound) : FXJSound).GameDiscard.bundle,
                  path: path
                });
              }

              break;

            case (_crd && OPCode === void 0 ? (_reportPossibleCrUseOfOPCode({
              error: Error()
            }), OPCode) : OPCode).OPE_RIGHT_CHI: // 右吃

            case (_crd && OPCode === void 0 ? (_reportPossibleCrUseOfOPCode({
              error: Error()
            }), OPCode) : OPCode).OPE_MIDDLE_CHI: // 中吃

            case (_crd && OPCode === void 0 ? (_reportPossibleCrUseOfOPCode({
              error: Error()
            }), OPCode) : OPCode).OPE_LEFT_CHI:
              // 左吃
              (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
                error: Error()
              }), EventManager) : EventManager).dispatch((_crd && FXJEvent === void 0 ? (_reportPossibleCrUseOfFXJEvent({
                error: Error()
              }), FXJEvent) : FXJEvent).SYS_PLAY_EFFECT, {
                bundle: (_crd && FXJSound === void 0 ? (_reportPossibleCrUseOfFXJSound({
                  error: Error()
                }), FXJSound) : FXJSound).GameChi.bundle,
                path: (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                  error: Error()
                }), Utils) : Utils).string_format((_crd && FXJSound === void 0 ? (_reportPossibleCrUseOfFXJSound({
                  error: Error()
                }), FXJSound) : FXJSound).GameChi.path, roleName)
              });
              break;

            case (_crd && OPCode === void 0 ? (_reportPossibleCrUseOfOPCode({
              error: Error()
            }), OPCode) : OPCode).OPE_PENG: // 碰

            case (_crd && OPCode === void 0 ? (_reportPossibleCrUseOfOPCode({
              error: Error()
            }), OPCode) : OPCode).OPE_QIANG_PENG:
              // 抢碰
              (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
                error: Error()
              }), EventManager) : EventManager).dispatch((_crd && FXJEvent === void 0 ? (_reportPossibleCrUseOfFXJEvent({
                error: Error()
              }), FXJEvent) : FXJEvent).SYS_PLAY_EFFECT, {
                bundle: (_crd && FXJSound === void 0 ? (_reportPossibleCrUseOfFXJSound({
                  error: Error()
                }), FXJSound) : FXJSound).GamePeng.bundle,
                path: (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                  error: Error()
                }), Utils) : Utils).string_format((_crd && FXJSound === void 0 ? (_reportPossibleCrUseOfFXJSound({
                  error: Error()
                }), FXJSound) : FXJSound).GamePeng.path, roleName)
              });
              break;

            case (_crd && OPCode === void 0 ? (_reportPossibleCrUseOfOPCode({
              error: Error()
            }), OPCode) : OPCode).OPE_AN_GANG: // 暗杠

            case (_crd && OPCode === void 0 ? (_reportPossibleCrUseOfOPCode({
              error: Error()
            }), OPCode) : OPCode).OPE_GANG: // 杠

            case (_crd && OPCode === void 0 ? (_reportPossibleCrUseOfOPCode({
              error: Error()
            }), OPCode) : OPCode).OPE_BU_GANG:
              // 补杠
              (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
                error: Error()
              }), EventManager) : EventManager).dispatch((_crd && FXJEvent === void 0 ? (_reportPossibleCrUseOfFXJEvent({
                error: Error()
              }), FXJEvent) : FXJEvent).SYS_PLAY_EFFECT, {
                bundle: (_crd && FXJSound === void 0 ? (_reportPossibleCrUseOfFXJSound({
                  error: Error()
                }), FXJSound) : FXJSound).GameGang.bundle,
                path: (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                  error: Error()
                }), Utils) : Utils).string_format((_crd && FXJSound === void 0 ? (_reportPossibleCrUseOfFXJSound({
                  error: Error()
                }), FXJSound) : FXJSound).GameGang.path, roleName)
              });
              break;

            case (_crd && OPCode === void 0 ? (_reportPossibleCrUseOfOPCode({
              error: Error()
            }), OPCode) : OPCode).OPE_HU:
              // 胡
              (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
                error: Error()
              }), EventManager) : EventManager).dispatch((_crd && FXJEvent === void 0 ? (_reportPossibleCrUseOfFXJEvent({
                error: Error()
              }), FXJEvent) : FXJEvent).SYS_PLAY_EFFECT, {
                bundle: (_crd && FXJSound === void 0 ? (_reportPossibleCrUseOfFXJSound({
                  error: Error()
                }), FXJSound) : FXJSound).GameHu.bundle,
                path: (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                  error: Error()
                }), Utils) : Utils).string_format((_crd && FXJSound === void 0 ? (_reportPossibleCrUseOfFXJSound({
                  error: Error()
                }), FXJSound) : FXJSound).GameHu.path, roleName)
              });
              break;

            case (_crd && OPCode === void 0 ? (_reportPossibleCrUseOfOPCode({
              error: Error()
            }), OPCode) : OPCode).OPE_ZI_MO:
              // 自摸
              (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
                error: Error()
              }), EventManager) : EventManager).dispatch((_crd && FXJEvent === void 0 ? (_reportPossibleCrUseOfFXJEvent({
                error: Error()
              }), FXJEvent) : FXJEvent).SYS_PLAY_EFFECT, {
                bundle: (_crd && FXJSound === void 0 ? (_reportPossibleCrUseOfFXJSound({
                  error: Error()
                }), FXJSound) : FXJSound).GameZiMo.bundle,
                path: (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                  error: Error()
                }), Utils) : Utils).string_format((_crd && FXJSound === void 0 ? (_reportPossibleCrUseOfFXJSound({
                  error: Error()
                }), FXJSound) : FXJSound).GameZiMo.path, roleName)
              });
              break;

            case (_crd && OPCode === void 0 ? (_reportPossibleCrUseOfOPCode({
              error: Error()
            }), OPCode) : OPCode).OPE_DIAO:
              // 调牌
              break;

            default:
              break;
          }
        }
        /** 抓牌 */


        onTakeCard(event, data) {
          if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).isNull(data)) {
            this.log("GameDeskPrefabCtr.onTakeCard", "没有抓牌数据");
            return;
          }

          var dataTakeCard = {
            seatId: data.seatId,
            gangCount: this._gangCount,
            remian: data.remainCardNum
          };
          this.log("GameDeskPrefabCtr.onTakeCard", dataTakeCard);
          this.nodeWall.onTakeCard(dataTakeCard);
          this.nodeHandCard.onTakeCard(dataTakeCard);
          this.nodeClock.onTakeCard(dataTakeCard);
        } // 出牌 ---------------------------------------------------------------------

        /** 出牌 */


        onOutCard(event, data) {
          this.log("GameDeskPrefabCtr.onOutCard", data);

          if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).isNull(data) || (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).isNull(data.seatId) || (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).isNull(data.opCard)) {
            this.log("GameDeskPrefabCtr.onOutCard", "出牌数据错误");
            return;
          }

          this.nodeOutCard.onOutCard(data);
          this.nodeHandCard.onOutCard(data);
        }
        /** 碰杠 */


        onPengGang(event, data) {
          if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).isNull(data) || (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).isNull(data.seatId) || (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).isNull(data.cardSeatId) || (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).isNull(data.opCard)) {
            this.log("GameDeskPrefabCtr.onPengGang", "碰杠数据错误");
            return;
          }

          if (data.cardSeatId == 0) {
            this.log("GameDeskPrefabCtr.onPengGang", "无效座位号");
            return;
          }

          this.log("GameDeskPrefabCtr.onPengGang", data);
          this.nodeOutCard.onPengGang(data);
          this.nodeHandCard.onPengGang(data);
          this.nodeMeldCard.onPengGang(data);
        }
        /** 胡牌 */


        onHu(event, data) {
          if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).isNull(data) || (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).isNull(data.seatId) || (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).isNull(data.cardSeatId) || (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).isNull(data.opCard)) {
            this.log("GameDeskPrefabCtr.onHu", "胡牌数据错误");
            return;
          }

          if (data.cardSeatId == 0) {
            this.log("GameDeskPrefabCtr.onHu", "无效座位号");
            return;
          }

          this.log("GameDeskPrefabCtr.onHu", data);
          this.nodeOutCard.onHu(data);
          this.nodeHandCard.onHu(data);
          this.nodeHuCard.onHu(data);
        }
        /** 清理 */


        onGameOver(event, data) {
          this.log("GameDeskPrefabCtr.onGameOver", data);

          if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).isNull(data) || (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).table_isEmpty(data.handCards)) {
            this.log("GameDeskPrefabCtr.onGameOver", "结算数据错误");
            return;
          }

          this.nodeWall.onGameOver(data);
          this.nodeHandCard.onGameOver(data);
          this.nodeOutCard.onGameOver(data);
          this.nodeMeldCard.onGameOver(data);
          this.nodeClock.onGameOver(data);
        } // ---------------------------------------------------------------------

        /** 重连 */


        onReconnect() {
          this.nodeWall.onReconnect();
          this.nodeHandCard.onReconnect();
          this.nodeOutCard.onReconnect();
          this.nodeMeldCard.onReconnect();
          this.nodeClock.onReconnect();
        } //销毁


        onDestroy() {}

        log() {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          console.log(args);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "nodeDesk", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "nodeWall", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "nodeOutCard", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "nodeHandCard", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "nodeMeldCard", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "nodeHuCard", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "nodeClock", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "nodeDice", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=20a697e0a3ef59b6aee7da7e5ccb71ff103c02ce.js.map