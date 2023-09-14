System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14", "__unresolved_15", "__unresolved_16", "__unresolved_17"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Node, Prefab, SpriteAtlas, _decorator, GCache, inf_LayerType, LayerManager, LayerPopUp, EventManager, BaseComponent, PlayerMgr, FXJController, FXJEvent, FXJRes, FXJUIConfig, FXJUIID, GameEvent, BugangBottom, BugangTop, Remain, Match, OpInfo, NodeUserCtr, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _crd, ccclass, property, menu, GameScenePrefabCtr;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfGCache(extras) {
    _reporterNs.report("GCache", "../../../cache/GCache", _context.meta, extras);
  }

  function _reportPossibleCrUseOfinf_LayerType(extras) {
    _reporterNs.report("inf_LayerType", "../../../framework/InterfaceDefines", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLayerManager(extras) {
    _reporterNs.report("LayerManager", "../../../framework/layer/LayerManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLayerPopUp(extras) {
    _reporterNs.report("LayerPopUp", "../../../framework/layer/LayerPopup", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventManager(extras) {
    _reporterNs.report("EventManager", "../../../framework/manager/EventManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../../framework/vc/BaseComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerMgr(extras) {
    _reporterNs.report("PlayerMgr", "../cache/PlayerMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFXJController(extras) {
    _reporterNs.report("FXJController", "../common/FXJController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFXJEvent(extras) {
    _reporterNs.report("FXJEvent", "../common/FXJEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFXJRes(extras) {
    _reporterNs.report("FXJRes", "../common/FXJRes", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFXJUIConfig(extras) {
    _reporterNs.report("FXJUIConfig", "../common/FXJRes", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFXJUIID(extras) {
    _reporterNs.report("FXJUIID", "../common/FXJRes", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameEvent(extras) {
    _reporterNs.report("GameEvent", "../common/GameEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGame(extras) {
    _reporterNs.report("Game", "../common/idl/Game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBugangBottom(extras) {
    _reporterNs.report("BugangBottom", "../module/bugang/src/BugangBottom", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBugangTop(extras) {
    _reporterNs.report("BugangTop", "../module/bugang/src/BugangTop", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRemain(extras) {
    _reporterNs.report("Remain", "../module/bugang/src/Remain", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMatch(extras) {
    _reporterNs.report("Match", "../module/match/src/Match", _context.meta, extras);
  }

  function _reportPossibleCrUseOfOpInfo(extras) {
    _reporterNs.report("OpInfo", "../module/opInfo/src/OpInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNodeUserCtr(extras) {
    _reporterNs.report("NodeUserCtr", "./NodeUserCtr", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Node = _cc.Node;
      Prefab = _cc.Prefab;
      SpriteAtlas = _cc.SpriteAtlas;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      GCache = _unresolved_2.GCache;
    }, function (_unresolved_3) {
      inf_LayerType = _unresolved_3.inf_LayerType;
    }, function (_unresolved_4) {
      LayerManager = _unresolved_4.LayerManager;
    }, function (_unresolved_5) {
      LayerPopUp = _unresolved_5.LayerPopUp;
    }, function (_unresolved_6) {
      EventManager = _unresolved_6.EventManager;
    }, function (_unresolved_7) {
      BaseComponent = _unresolved_7.BaseComponent;
    }, function (_unresolved_8) {
      PlayerMgr = _unresolved_8.PlayerMgr;
    }, function (_unresolved_9) {
      FXJController = _unresolved_9.FXJController;
    }, function (_unresolved_10) {
      FXJEvent = _unresolved_10.FXJEvent;
    }, function (_unresolved_11) {
      FXJRes = _unresolved_11.FXJRes;
      FXJUIConfig = _unresolved_11.FXJUIConfig;
      FXJUIID = _unresolved_11.FXJUIID;
    }, function (_unresolved_12) {
      GameEvent = _unresolved_12.GameEvent;
    }, function (_unresolved_13) {
      BugangBottom = _unresolved_13.BugangBottom;
    }, function (_unresolved_14) {
      BugangTop = _unresolved_14.BugangTop;
    }, function (_unresolved_15) {
      Remain = _unresolved_15.Remain;
    }, function (_unresolved_16) {
      Match = _unresolved_16.Match;
    }, function (_unresolved_17) {
      OpInfo = _unresolved_17.OpInfo;
    }, function (_unresolved_18) {
      NodeUserCtr = _unresolved_18.NodeUserCtr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f3c52TX5I9AdLaa0LpQr0m+", "GameScenePrefabCtr", undefined);

      __checkObsolete__(['Node', 'Prefab', 'SpriteAtlas', '_decorator']);

      ({
        ccclass,
        property,
        menu
      } = _decorator);
      /**
       * Name = GameScenePrefabCtr
       * URL = db://assets/package/game/scripts/GameScenePrefabCtr.ts
       * Time = Thu Jul 27 2023 18:05:11 GMT+0800 (中国标准时间)
       * Author = harvyson
       * 飞小鸡游戏场景
       * Life: onLoad-->onInitModuleEvent-->onEnable->start->update->lateUpdate->onDisable->onDestroy
       * 
       */

      _export("GameScenePrefabCtr", GameScenePrefabCtr = (_dec = ccclass('GameScenePrefabCtr'), _dec2 = menu('prefab/game/GameScenePrefabCtr'), _dec3 = property({
        tooltip: "背景节点",
        type: Node
      }), _dec4 = property({
        tooltip: "角色节点——其它",
        type: Node
      }), _dec5 = property({
        tooltip: "角色节点——自己",
        type: Node
      }), _dec6 = property({
        tooltip: "用户节点",
        type: _crd && NodeUserCtr === void 0 ? (_reportPossibleCrUseOfNodeUserCtr({
          error: Error()
        }), NodeUserCtr) : NodeUserCtr
      }), _dec7 = property({
        tooltip: "手牌节点",
        type: Node
      }), _dec8 = property({
        tooltip: "菜单节点",
        type: Node
      }), _dec9 = property({
        tooltip: "普通动画操作根节点",
        type: Node
      }), _dec10 = property({
        tooltip: "弹框节点",
        type: Node
      }), _dec11 = property(_crd && OpInfo === void 0 ? (_reportPossibleCrUseOfOpInfo({
        error: Error()
      }), OpInfo) : OpInfo), _dec12 = property(_crd && BugangTop === void 0 ? (_reportPossibleCrUseOfBugangTop({
        error: Error()
      }), BugangTop) : BugangTop), _dec13 = property(_crd && Remain === void 0 ? (_reportPossibleCrUseOfRemain({
        error: Error()
      }), Remain) : Remain), _dec14 = property(_crd && Match === void 0 ? (_reportPossibleCrUseOfMatch({
        error: Error()
      }), Match) : Match), _dec15 = property(_crd && BugangBottom === void 0 ? (_reportPossibleCrUseOfBugangBottom({
        error: Error()
      }), BugangBottom) : BugangBottom), _dec(_class = _dec2(_class = (_class2 = class GameScenePrefabCtr extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        //背景节点
        //角色节点——其它
        //角色节点——自己
        //用户节点
        //手牌节点
        //菜单节点
        //普通动画操作根节点
        //弹框节点
        //真实弹窗节点
        constructor() {
          super();

          _initializerDefineProperty(this, "nodeBg", _descriptor, this);

          _initializerDefineProperty(this, "nodeRoleOther", _descriptor2, this);

          _initializerDefineProperty(this, "nodeRoleSlef", _descriptor3, this);

          _initializerDefineProperty(this, "nodeUser", _descriptor4, this);

          _initializerDefineProperty(this, "nodeHandCard", _descriptor5, this);

          _initializerDefineProperty(this, "nodeMenu", _descriptor6, this);

          _initializerDefineProperty(this, "nodeNormalAnim", _descriptor7, this);

          _initializerDefineProperty(this, "nodePopup", _descriptor8, this);

          _initializerDefineProperty(this, "opInfo", _descriptor9, this);

          _initializerDefineProperty(this, "bugangTop", _descriptor10, this);

          _initializerDefineProperty(this, "remain", _descriptor11, this);

          _initializerDefineProperty(this, "match", _descriptor12, this);

          _initializerDefineProperty(this, "bugangBottom", _descriptor13, this);

          this._nodePopUp = null;
          console.log("==============飞小鸡游戏场景初始化========");
          this.initModules();
        } //加载初始化


        initModules() {
          if (!(_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
            error: Error()
          }), GCache) : GCache).firstRunLoadSuccess) {
            return;
          }

          this.preLoaderRes();
          (_crd && FXJController === void 0 ? (_reportPossibleCrUseOfFXJController({
            error: Error()
          }), FXJController) : FXJController).init();
          (_crd && FXJController === void 0 ? (_reportPossibleCrUseOfFXJController({
            error: Error()
          }), FXJController) : FXJController).getInstance().GameSceneCtr = this;
        } //预加载


        preLoaderRes() {
          if (!(_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
            error: Error()
          }), GCache) : GCache).firstRunLoadSuccess) {
            return;
          }

          let list = [// { ddzRes: FXJRes.Prefab_GameHeadInfo, resType: Prefab },
          {
            ddzRes: (_crd && FXJRes === void 0 ? (_reportPossibleCrUseOfFXJRes({
              error: Error()
            }), FXJRes) : FXJRes).Prefab_Menu,
            resType: Prefab
          }, {
            ddzRes: (_crd && FXJRes === void 0 ? (_reportPossibleCrUseOfFXJRes({
              error: Error()
            }), FXJRes) : FXJRes).Prefab_NodeUser,
            resType: Prefab
          }, {
            ddzRes: (_crd && FXJRes === void 0 ? (_reportPossibleCrUseOfFXJRes({
              error: Error()
            }), FXJRes) : FXJRes).Prefab_Desk,
            resType: Prefab
          }, {
            ddzRes: (_crd && FXJRes === void 0 ? (_reportPossibleCrUseOfFXJRes({
              error: Error()
            }), FXJRes) : FXJRes).Prefab_HandCard,
            resType: Prefab
          }, {
            ddzRes: (_crd && FXJRes === void 0 ? (_reportPossibleCrUseOfFXJRes({
              error: Error()
            }), FXJRes) : FXJRes).Prefab_Match_Player,
            resType: Prefab
          }, {
            ddzRes: (_crd && FXJRes === void 0 ? (_reportPossibleCrUseOfFXJRes({
              error: Error()
            }), FXJRes) : FXJRes).Prefab_op,
            resType: Prefab
          }, {
            ddzRes: (_crd && FXJRes === void 0 ? (_reportPossibleCrUseOfFXJRes({
              error: Error()
            }), FXJRes) : FXJRes).Prefab_Match,
            resType: Prefab
          }, {
            ddzRes: (_crd && FXJRes === void 0 ? (_reportPossibleCrUseOfFXJRes({
              error: Error()
            }), FXJRes) : FXJRes).Prefab_GameSettle,
            resType: Prefab
          }, {
            ddzRes: (_crd && FXJRes === void 0 ? (_reportPossibleCrUseOfFXJRes({
              error: Error()
            }), FXJRes) : FXJRes).Prefab_Settle_Image,
            resType: SpriteAtlas
          } // { ddzRes: FXJRes.Atlas_Game_Clock, resType: SpriteAtlas }
          ];
          this.getPreLoaderArrayRes(list, () => {// console.log("----->", Utils.timeParse(Utils.time()));
            // let res = assetManager.getBundle("game").get(FXJRes.Prefab_Match.path, Prefab);
            // console.warn("preLoaderRes-->", res);
          });
        }
        /** override 初始化模块事件 */


        onInitModuleEvent() {
          //打开二级弹窗
          this.addModelListener((_crd && FXJEvent === void 0 ? (_reportPossibleCrUseOfFXJEvent({
            error: Error()
          }), FXJEvent) : FXJEvent).GAME_OPEN_POPUP, this.onOpenPopUp); //关闭二级弹窗

          this.addModelListener((_crd && FXJEvent === void 0 ? (_reportPossibleCrUseOfFXJEvent({
            error: Error()
          }), FXJEvent) : FXJEvent).GAME_CLOSE_POPUP, this.onClosePopUp); // //玩家进入房间

          this.addModelListener((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).VIEW_BROADCAST_GRAB_CARD, this.grabCardEvent); // this.addModelListener(GameEvent.BROADCAST_DING_ZHUANG,this.dingzhang);
          //玩家进入房间

          this.addModelListener((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).VIEW_BROADCAST_PLAYER_ENTER, this.onPlayerInto);
          this.addModelListener((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).ENTER_ROOM_UPDATE_PLAYER, this.enterRoomUpdatePlayer);
          this.addModelListener((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).VIEW_UPDATE_FAN_GANG_PAI, this.updateFanGangPai);
          this.addModelListener((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).VIEW_UPDATE_BU_GANG_PAI, this.updateBuGangPai);
          this.addModelListener((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).UPDATE_REMAIN_CARDS_COUNT, this.updateRemainCardsCount);
          this.addModelListener((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).VIEW_USER_OPERATION, this.viewUserOperation); // 玩家登录

          this.addModelListener((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).VIEW_BROADCAST_PLAYER_LOGIN, this.playerLoign);
        }

        onLoad() {
          (_crd && LayerManager === void 0 ? (_reportPossibleCrUseOfLayerManager({
            error: Error()
          }), LayerManager) : LayerManager).updateConfig(_crd && FXJUIConfig === void 0 ? (_reportPossibleCrUseOfFXJUIConfig({
            error: Error()
          }), FXJUIConfig) : FXJUIConfig);
          (_crd && FXJController === void 0 ? (_reportPossibleCrUseOfFXJController({
            error: Error()
          }), FXJController) : FXJController).getInstance().onViewLoad();
          this.initView();
        }

        updateRemainCardsCount(event = null) {
          this.remain.updateRemainCardsCount();
        }

        viewUserOperation(event = null, resp) {
          //托管操作不弹操作框
          // if(PlayerMgr.getInstance().getMyPlayerInfo().isAi){
          // 	return;
          // }
          this.opInfo.updateOpration(resp);
        }

        grabCardEvent(event = null, resp) {// Logger.log(resp);
          // this.tingCard.setCardByte(resp.card)
        }

        updateFanGangPai(event = null, resp) {
          this.bugangTop.updateFanGangPai(resp);
          this.bugangTop.node.active = true;
        }

        updateBuGangPai(event = null, resp = null) {
          this.bugangBottom.updateBuGangPai(resp);
          this.bugangBottom.node.active = true;
        }

        start() {}

        /** 初始化界面 */
        initView() {
          console.log("初始化界面"); //弹窗节点

          this._nodePopUp = new (_crd && LayerPopUp === void 0 ? (_reportPossibleCrUseOfLayerPopUp({
            error: Error()
          }), LayerPopUp) : LayerPopUp)((_crd && inf_LayerType === void 0 ? (_reportPossibleCrUseOfinf_LayerType({
            error: Error()
          }), inf_LayerType) : inf_LayerType).PopUp);
          this.nodePopup.addChild(this._nodePopUp);
          this.getPreLoaderRes((_crd && FXJRes === void 0 ? (_reportPossibleCrUseOfFXJRes({
            error: Error()
          }), FXJRes) : FXJRes).Prefab_Menu.bundle, (_crd && FXJRes === void 0 ? (_reportPossibleCrUseOfFXJRes({
            error: Error()
          }), FXJRes) : FXJRes).Prefab_Menu.path, Prefab, res => {
            this.nodeMenu.removeAllChildren();
            this.nodeMenu.addChild(res);
          });
          this.getPreLoaderRes((_crd && FXJRes === void 0 ? (_reportPossibleCrUseOfFXJRes({
            error: Error()
          }), FXJRes) : FXJRes).Prefab_Opmgr.bundle, (_crd && FXJRes === void 0 ? (_reportPossibleCrUseOfFXJRes({
            error: Error()
          }), FXJRes) : FXJRes).Prefab_Opmgr.path, Prefab, res => {
            this.nodeMenu.addChild(res);
          });
          this.getPreLoaderRes((_crd && FXJRes === void 0 ? (_reportPossibleCrUseOfFXJRes({
            error: Error()
          }), FXJRes) : FXJRes).Prefab_HandCard.bundle, (_crd && FXJRes === void 0 ? (_reportPossibleCrUseOfFXJRes({
            error: Error()
          }), FXJRes) : FXJRes).Prefab_HandCard.path, Prefab, res => {
            this.nodeHandCard.removeAllChildren();
            this.nodeHandCard.addChild(res);
          });
          this.getPreLoaderRes((_crd && FXJRes === void 0 ? (_reportPossibleCrUseOfFXJRes({
            error: Error()
          }), FXJRes) : FXJRes).Prefab_Desk.bundle, (_crd && FXJRes === void 0 ? (_reportPossibleCrUseOfFXJRes({
            error: Error()
          }), FXJRes) : FXJRes).Prefab_Desk.path, Prefab, res => {
            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).dispatch((_crd && FXJEvent === void 0 ? (_reportPossibleCrUseOfFXJEvent({
              error: Error()
            }), FXJEvent) : FXJEvent).VIEW_UI_3D_ADD, res);
          }); // this.opInfo.updateCodeMap();
        }

        /** 更新界面 */
        updateView() {}

        /** 自己登录 */
        playerLoign() {// this.getPreLoaderRes(FXJRes.Prefab_Desk.bundle, FXJRes.Prefab_Desk.path, Prefab, (res) => {
          //     EventManager.dispatch(FXJEvent.VIEW_UI_3D_ADD, res);
          // })
        }

        dingzhang() {} //进入房间更新用户信息


        enterRoomUpdatePlayer() {
          (_crd && PlayerMgr === void 0 ? (_reportPossibleCrUseOfPlayerMgr({
            error: Error()
          }), PlayerMgr) : PlayerMgr).getInstance().playerList.forEach(player => {
            let data = {
              uid: player.userId,
              // roleID: palyer.gameUserInfo.sex == 2 ? 1 : 0,
              posID: player.seatId
            };
            this.nodeUser.showUserView(data);
          });
        } //收到消息:用户进入房间


        onPlayerInto(event, uid) {
          let palyer = (_crd && PlayerMgr === void 0 ? (_reportPossibleCrUseOfPlayerMgr({
            error: Error()
          }), PlayerMgr) : PlayerMgr).getInstance().findPlayerWithUserId(uid); // this.match.addPlayer(palyer);

          if (!palyer) {
            return;
          }

          console.log("收到消息:玩家进入房间", palyer);
          let data = {
            uid: palyer.userId,
            // roleID: palyer.gameUserInfo.sex == 2 ? 1 : 0,
            posID: palyer.seatId
          };
          this.nodeUser.showUserView(data);
        }

        onClickTest(event, customEventData) {
          console.log("onClickTest", customEventData); // EventManager.dispatch(FXJEvent.GAME_OPEN_POPUP, FXJUIID.GameSettlePrefab);
        } //打开二级弹窗


        onOpenPopUp(event, UIID, Data, callbacks = null) {
          if (UIID && ((_crd && FXJUIConfig === void 0 ? (_reportPossibleCrUseOfFXJUIConfig({
            error: Error()
          }), FXJUIConfig) : FXJUIConfig)[UIID] || (_crd && FXJUIConfig === void 0 ? (_reportPossibleCrUseOfFXJUIConfig({
            error: Error()
          }), FXJUIConfig) : FXJUIConfig)[UIID])) {
            if (!(_crd && LayerManager === void 0 ? (_reportPossibleCrUseOfLayerManager({
              error: Error()
            }), LayerManager) : LayerManager).has(UIID, this._nodePopUp) && !(_crd && LayerManager === void 0 ? (_reportPossibleCrUseOfLayerManager({
              error: Error()
            }), LayerManager) : LayerManager).isLoading(UIID, this._nodePopUp)) {
              (_crd && LayerManager === void 0 ? (_reportPossibleCrUseOfLayerManager({
                error: Error()
              }), LayerManager) : LayerManager).open(UIID, Data, callbacks, this._nodePopUp);
            }
          }
        } //关闭二级弹窗


        onClosePopUp(event, UIID) {
          if (UIID && ((_crd && FXJUIConfig === void 0 ? (_reportPossibleCrUseOfFXJUIConfig({
            error: Error()
          }), FXJUIConfig) : FXJUIConfig)[UIID] || (_crd && FXJUIConfig === void 0 ? (_reportPossibleCrUseOfFXJUIConfig({
            error: Error()
          }), FXJUIConfig) : FXJUIConfig)[UIID])) {
            //聊天和菜单不需要遮罩
            if (UIID == (_crd && FXJUIID === void 0 ? (_reportPossibleCrUseOfFXJUIID({
              error: Error()
            }), FXJUIID) : FXJUIID).ToolBarPrefab || UIID == (_crd && FXJUIID === void 0 ? (_reportPossibleCrUseOfFXJUIID({
              error: Error()
            }), FXJUIID) : FXJUIID).GameChatPrefab) {
              let node = this._nodePopUp.getChildByName(UIID);

              if (node) {
                node.destroy();
                return;
              }
            } else {
              let layerConf = (_crd && FXJUIConfig === void 0 ? (_reportPossibleCrUseOfFXJUIConfig({
                error: Error()
              }), FXJUIConfig) : FXJUIConfig)[UIID] || (_crd && FXJUIConfig === void 0 ? (_reportPossibleCrUseOfFXJUIConfig({
                error: Error()
              }), FXJUIConfig) : FXJUIConfig)[UIID];
              (_crd && LayerManager === void 0 ? (_reportPossibleCrUseOfLayerManager({
                error: Error()
              }), LayerManager) : LayerManager).clear(layerConf == null ? void 0 : layerConf.layer, true, this._nodePopUp);
            }
          }
        }
        /** 销毁 */


        onDestroy() {
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && FXJEvent === void 0 ? (_reportPossibleCrUseOfFXJEvent({
            error: Error()
          }), FXJEvent) : FXJEvent).VIEW_UI_3D_REMOVE);
          (_crd && FXJController === void 0 ? (_reportPossibleCrUseOfFXJController({
            error: Error()
          }), FXJController) : FXJController).getInstance().onViewDestroy();
          (_crd && FXJController === void 0 ? (_reportPossibleCrUseOfFXJController({
            error: Error()
          }), FXJController) : FXJController).getInstance().clear();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "nodeBg", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "nodeRoleOther", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "nodeRoleSlef", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "nodeUser", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "nodeHandCard", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "nodeMenu", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "nodeNormalAnim", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "nodePopup", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "opInfo", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "bugangTop", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "remain", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "match", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "bugangBottom", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=2278d5c99e04f88b60d6142b259c14e4a829af8f.js.map