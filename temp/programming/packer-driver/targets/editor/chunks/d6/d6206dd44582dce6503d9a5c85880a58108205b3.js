System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14", "__unresolved_15", "__unresolved_16", "__unresolved_17", "__unresolved_18"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, GCache, Encrypt, Utils, EventManager, RoomController, PlayerMgr, Room, RoomMgr, FXJCMDHead, FXJWriteAndRead, FXJConstant, FXJEvent, FXJObserver, FXJUIID, GameEvent, ChatServer, RoundServer, SettleServer, FXJController, _crd;

  function _reportPossibleCrUseOfGCache(extras) {
    _reporterNs.report("GCache", "../../../cache/GCache", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEncrypt(extras) {
    _reporterNs.report("Encrypt", "../../../framework/crypto/Encrypto", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUtils(extras) {
    _reporterNs.report("Utils", "../../../framework/Utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventManager(extras) {
    _reporterNs.report("EventManager", "../../../framework/manager/EventManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoomController(extras) {
    _reporterNs.report("RoomController", "../../../proj/RoomController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerMgr(extras) {
    _reporterNs.report("PlayerMgr", "../cache/PlayerMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoom(extras) {
    _reporterNs.report("Room", "../cache/Room", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoomMgr(extras) {
    _reporterNs.report("RoomMgr", "../cache/RoomMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFXJCMDHead(extras) {
    _reporterNs.report("FXJCMDHead", "../net/FXJCmd", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFXJWriteAndRead(extras) {
    _reporterNs.report("FXJWriteAndRead", "../net/FXJWriteAndRead", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameDeskPrefabCtr(extras) {
    _reporterNs.report("GameDeskPrefabCtr", "../scripts/GameDeskPrefabCtr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameScenePrefabCtr(extras) {
    _reporterNs.report("GameScenePrefabCtr", "../scripts/GameScenePrefabCtr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFXJConstant(extras) {
    _reporterNs.report("FXJConstant", "./FXJConstant", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFXJEvent(extras) {
    _reporterNs.report("FXJEvent", "./FXJEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFXJObserver(extras) {
    _reporterNs.report("FXJObserver", "./FXJObserver", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFXJUIID(extras) {
    _reporterNs.report("FXJUIID", "./FXJRes", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameEvent(extras) {
    _reporterNs.report("GameEvent", "./GameEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCommon(extras) {
    _reporterNs.report("Common", "./idl/Common", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGame(extras) {
    _reporterNs.report("Game", "./idl/Game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfChatServer(extras) {
    _reporterNs.report("ChatServer", "./server/ChatServer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoundServer(extras) {
    _reporterNs.report("RoundServer", "./server/RoundServer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSettleServer(extras) {
    _reporterNs.report("SettleServer", "./server/SettleServer", _context.meta, extras);
  }

  _export("FXJController", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      GCache = _unresolved_2.GCache;
    }, function (_unresolved_3) {
      Encrypt = _unresolved_3.Encrypt;
    }, function (_unresolved_4) {
      Utils = _unresolved_4.Utils;
    }, function (_unresolved_5) {
      EventManager = _unresolved_5.EventManager;
    }, function (_unresolved_6) {
      RoomController = _unresolved_6.RoomController;
    }, function (_unresolved_7) {
      PlayerMgr = _unresolved_7.PlayerMgr;
    }, function (_unresolved_8) {
      Room = _unresolved_8.Room;
    }, function (_unresolved_9) {
      RoomMgr = _unresolved_9.RoomMgr;
    }, function (_unresolved_10) {
      FXJCMDHead = _unresolved_10.FXJCMDHead;
    }, function (_unresolved_11) {
      FXJWriteAndRead = _unresolved_11.FXJWriteAndRead;
    }, function (_unresolved_12) {
      FXJConstant = _unresolved_12.FXJConstant;
    }, function (_unresolved_13) {
      FXJEvent = _unresolved_13.FXJEvent;
    }, function (_unresolved_14) {
      FXJObserver = _unresolved_14.FXJObserver;
    }, function (_unresolved_15) {
      FXJUIID = _unresolved_15.FXJUIID;
    }, function (_unresolved_16) {
      GameEvent = _unresolved_16.GameEvent;
    }, function (_unresolved_17) {
      ChatServer = _unresolved_17.ChatServer;
    }, function (_unresolved_18) {
      RoundServer = _unresolved_18.RoundServer;
    }, function (_unresolved_19) {
      SettleServer = _unresolved_19.SettleServer;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "cac59TzRsRFB6HeEdgLHfe2", "FXJController", undefined);

      _export("FXJController", FXJController = class FXJController extends (_crd && RoomController === void 0 ? (_reportPossibleCrUseOfRoomController({
        error: Error()
      }), RoomController) : RoomController) {
        static getInstance() {
          if (!this._instance || this._instance == null) {
            this._instance = new FXJController("FXJController");
          }

          return this._instance;
        }

        static init() {
          if (this._instance) {
            this._instance.clear();
          }

          this._instance = null;
          FXJController.getInstance();
          return;
        }

        clear() {
          this.print("[ FXJController ]clear 清理 重置所有定时器");

          this.__clearServerClass();

          super.clear();
          FXJController._instance = null;
        }
        /** 场景组件 */


        //实例化
        constructor(name) {
          super(name);
          this.GameSceneCtr = null;
          this.GameDeskCtr = null;
          this.RoundServer = null;
          this.SettleServer = null;
          this.ChatServer = null;
          this.fxjObserver = null;
        }

        /** override:加载模块 */
        onInit() {
          super.onInit(); // 设置GameMgr中 GameDelegate的代理

          (_crd && FXJWriteAndRead === void 0 ? (_reportPossibleCrUseOfFXJWriteAndRead({
            error: Error()
          }), FXJWriteAndRead) : FXJWriteAndRead).getInstance().initPB();
          (_crd && FXJWriteAndRead === void 0 ? (_reportPossibleCrUseOfFXJWriteAndRead({
            error: Error()
          }), FXJWriteAndRead) : FXJWriteAndRead).getInstance().initCMDMapping();
        }
        /** override:场景加载/界面强制重新刷新 */


        onViewLoad(event = null) {
          (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
            error: Error()
          }), GCache) : GCache).setDesk(_crd && Room === void 0 ? (_reportPossibleCrUseOfRoom({
            error: Error()
          }), Room) : Room);
          this._deskCache = (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
            error: Error()
          }), GCache) : GCache).Desk;
          this.fxjObserver = new (_crd && FXJObserver === void 0 ? (_reportPossibleCrUseOfFXJObserver({
            error: Error()
          }), FXJObserver) : FXJObserver)();
          (_crd && PlayerMgr === void 0 ? (_reportPossibleCrUseOfPlayerMgr({
            error: Error()
          }), PlayerMgr) : PlayerMgr).getInstance().addObserver(this.fxjObserver);
          (_crd && RoomMgr === void 0 ? (_reportPossibleCrUseOfRoomMgr({
            error: Error()
          }), RoomMgr) : RoomMgr).getInstance().addObserver(this.fxjObserver);

          this.__initModuleEvent();

          this.__initServerClass();

          super.onViewLoad(event);
        } // /** 预加载 */
        // preloadRes() {
        // 	this.getPreLoaderRes(FXJRes.Atlas_Game_CardNum.bundle, FXJRes.Atlas_Game_CardNum.path, SpriteAtlas);
        // 	this.getPreLoaderRes(FXJRes.Atlas_Player_Common.bundle, FXJRes.Atlas_Player_Common.path, SpriteAtlas);
        // }

        /** 初始化附属类 */


        __initServerClass() {
          this.__clearServerClass();

          this.RoundServer = new (_crd && RoundServer === void 0 ? (_reportPossibleCrUseOfRoundServer({
            error: Error()
          }), RoundServer) : RoundServer)();
          this.SettleServer = new (_crd && SettleServer === void 0 ? (_reportPossibleCrUseOfSettleServer({
            error: Error()
          }), SettleServer) : SettleServer)();
          this.ChatServer = new (_crd && ChatServer === void 0 ? (_reportPossibleCrUseOfChatServer({
            error: Error()
          }), ChatServer) : ChatServer)();
        }
        /** 清理附属类 */


        __clearServerClass() {
          if (this.RoundServer) {
            this.RoundServer.clear();
          }

          if (this.SettleServer) {
            this.SettleServer.clear();
          }

          if (this.ChatServer) {
            this.ChatServer.clear();
          }
        }
        /** 初始化添加事件绑定 */


        __initModuleEvent() {
          this.addModelListener((_crd && FXJEvent === void 0 ? (_reportPossibleCrUseOfFXJEvent({
            error: Error()
          }), FXJEvent) : FXJEvent).BROADCAST_DING_ZHUANG, this.broadcastDingZhuang);
          this.addModelListener((_crd && FXJEvent === void 0 ? (_reportPossibleCrUseOfFXJEvent({
            error: Error()
          }), FXJEvent) : FXJEvent).SERVER_BROADCAST_PLAYER_LOGIN, this.serverBroadcastPlayerLogin); // this.addModelListener(FXJEvent.SERVER_BROADCAST_PLAYER_READY, this.serverBroadcastPlayerReady);

          this.addModelListener((_crd && FXJEvent === void 0 ? (_reportPossibleCrUseOfFXJEvent({
            error: Error()
          }), FXJEvent) : FXJEvent).BROADCAST_GRAB_CARD, this.broadcastGrabCard);
          this.addModelListener((_crd && FXJEvent === void 0 ? (_reportPossibleCrUseOfFXJEvent({
            error: Error()
          }), FXJEvent) : FXJEvent).BROADCAST_DINGQUE_OPTIONS, this.broadcastDingQueOptions);
          this.addModelListener((_crd && FXJEvent === void 0 ? (_reportPossibleCrUseOfFXJEvent({
            error: Error()
          }), FXJEvent) : FXJEvent).BROADCAST_USER_PIAO_GANG, this.broadcastUserPiaoGang);
          this.addModelListener((_crd && FXJEvent === void 0 ? (_reportPossibleCrUseOfFXJEvent({
            error: Error()
          }), FXJEvent) : FXJEvent).BROADCAST_PAOQIAN_OPTIONS, this.broadcastPaoQianOptions);
          this.addModelListener((_crd && FXJEvent === void 0 ? (_reportPossibleCrUseOfFXJEvent({
            error: Error()
          }), FXJEvent) : FXJEvent).BROADCAST_ONE_DINGQUE_RESULT, this.broadcastOneDingqueResult);
          this.addModelListener((_crd && FXJEvent === void 0 ? (_reportPossibleCrUseOfFXJEvent({
            error: Error()
          }), FXJEvent) : FXJEvent).BROADCAST_ALL_DINGQUE_RESULT, this.broadcastAllDingqueResult);
          this.addModelListener((_crd && FXJEvent === void 0 ? (_reportPossibleCrUseOfFXJEvent({
            error: Error()
          }), FXJEvent) : FXJEvent).BROADCAST_SHUAIQIANG_RESULT, this.broadcastAllShuaiQiangResult);
          this.addModelListener((_crd && FXJEvent === void 0 ? (_reportPossibleCrUseOfFXJEvent({
            error: Error()
          }), FXJEvent) : FXJEvent).BROADCAST_CHAQUE_RESULT, this.broadcastChaqueResult);
          this.addModelListener((_crd && FXJEvent === void 0 ? (_reportPossibleCrUseOfFXJEvent({
            error: Error()
          }), FXJEvent) : FXJEvent).BROADCAST_MAIDUANMEN_USER, this.broadcastMaiDuanMenUser);
          this.addModelListener((_crd && FXJEvent === void 0 ? (_reportPossibleCrUseOfFXJEvent({
            error: Error()
          }), FXJEvent) : FXJEvent).BROADCAST_MAIDUANMEN_RESULT, this.broadcastMaiDuanMenResult);
          this.addModelListener((_crd && FXJEvent === void 0 ? (_reportPossibleCrUseOfFXJEvent({
            error: Error()
          }), FXJEvent) : FXJEvent).BROADCAST_FEN_ZHANG, this.broadcastFenZhang);
          this.addModelListener((_crd && FXJEvent === void 0 ? (_reportPossibleCrUseOfFXJEvent({
            error: Error()
          }), FXJEvent) : FXJEvent).BROADCAST_UPDATE_FAN_GANG_PAI, this.broadcastUpdateFanGangPai);
          this.addModelListener((_crd && FXJEvent === void 0 ? (_reportPossibleCrUseOfFXJEvent({
            error: Error()
          }), FXJEvent) : FXJEvent).BROADCAST_SELECT_FAN_GANG_PAI, this.broadcastSelectFanGangPai);
          this.addModelListener((_crd && FXJEvent === void 0 ? (_reportPossibleCrUseOfFXJEvent({
            error: Error()
          }), FXJEvent) : FXJEvent).BROADCAST_DEAL_CARD, this.broadcastDealCard);
          this.addModelListener((_crd && FXJEvent === void 0 ? (_reportPossibleCrUseOfFXJEvent({
            error: Error()
          }), FXJEvent) : FXJEvent).BROADCAST_USER_OPERATION_RESULT, this.broadcastUserOperationResult);
          this.addModelListener((_crd && FXJEvent === void 0 ? (_reportPossibleCrUseOfFXJEvent({
            error: Error()
          }), FXJEvent) : FXJEvent).BROADCAST_USER_OPERATION, this.broadcastUserOperation);
          this.addModelListener((_crd && FXJEvent === void 0 ? (_reportPossibleCrUseOfFXJEvent({
            error: Error()
          }), FXJEvent) : FXJEvent).BROADCAST_DING_FENG, this.broadcastDingFeng);
          this.addModelListener((_crd && FXJEvent === void 0 ? (_reportPossibleCrUseOfFXJEvent({
            error: Error()
          }), FXJEvent) : FXJEvent).BROADCAST_ZHI_TOU, this.broadcastZhiTou);
          this.addModelListener((_crd && FXJEvent === void 0 ? (_reportPossibleCrUseOfFXJEvent({
            error: Error()
          }), FXJEvent) : FXJEvent).BROADCAST_DOUBLE_CARDS, this.broadcastDoubleCards);
          this.addModelListener((_crd && FXJEvent === void 0 ? (_reportPossibleCrUseOfFXJEvent({
            error: Error()
          }), FXJEvent) : FXJEvent).BROADCAST_REWARD_CARDS, this.broadcastRewardCards);
          this.addModelListener((_crd && FXJEvent === void 0 ? (_reportPossibleCrUseOfFXJEvent({
            error: Error()
          }), FXJEvent) : FXJEvent).BROADCAST_PLAYING_JI_TYPE, this.broadcastPlayingJiType);
          this.addModelListener((_crd && FXJEvent === void 0 ? (_reportPossibleCrUseOfFXJEvent({
            error: Error()
          }), FXJEvent) : FXJEvent).BROADCAST_ZHUO_JI, this.broadcastZhuoJi);
          this.addModelListener((_crd && FXJEvent === void 0 ? (_reportPossibleCrUseOfFXJEvent({
            error: Error()
          }), FXJEvent) : FXJEvent).BROADCAST_SETTLE, this.broadcastSettleItem);
          this.addModelListener((_crd && FXJEvent === void 0 ? (_reportPossibleCrUseOfFXJEvent({
            error: Error()
          }), FXJEvent) : FXJEvent).BROADCAST_HANDCARDS, this.broadcastHandCards);
          this.addModelListener((_crd && FXJEvent === void 0 ? (_reportPossibleCrUseOfFXJEvent({
            error: Error()
          }), FXJEvent) : FXJEvent).BROADCAST_BANKER_FIRST_OPERATION, this.broadcastBankerFirstOperation);
          this.addModelListener((_crd && FXJEvent === void 0 ? (_reportPossibleCrUseOfFXJEvent({
            error: Error()
          }), FXJEvent) : FXJEvent).BROADCAST_UPDATE_PLAYER_MONEY, this.broadcastUpdatePlayerMoney);
          this.addModelListener((_crd && FXJEvent === void 0 ? (_reportPossibleCrUseOfFXJEvent({
            error: Error()
          }), FXJEvent) : FXJEvent).BROADCAST_GANG_OPERATION_RESULT, this.broadcastGameOperationResult);
          this.addModelListener((_crd && FXJEvent === void 0 ? (_reportPossibleCrUseOfFXJEvent({
            error: Error()
          }), FXJEvent) : FXJEvent).BROADCAST_DING_LAIZI, this.broadcastDingLaizi);
          this.addModelListener((_crd && FXJEvent === void 0 ? (_reportPossibleCrUseOfFXJEvent({
            error: Error()
          }), FXJEvent) : FXJEvent).BROADCAST_TO_WAIT_USER_GIVE_UP, this.broadcastToWaitUserGiveUp);
          this.addModelListener((_crd && FXJEvent === void 0 ? (_reportPossibleCrUseOfFXJEvent({
            error: Error()
          }), FXJEvent) : FXJEvent).BROADCAST_XIAZHU_OPTIONS, this.broadcastXiazhuOptions);
          this.addModelListener((_crd && FXJEvent === void 0 ? (_reportPossibleCrUseOfFXJEvent({
            error: Error()
          }), FXJEvent) : FXJEvent).BROADCAST_XIAZHU_RESULT, this.broadcastXiazhuResult);
          this.addModelListener((_crd && FXJEvent === void 0 ? (_reportPossibleCrUseOfFXJEvent({
            error: Error()
          }), FXJEvent) : FXJEvent).BROADCAST_GEN_ZHUANG_SUCC, this.broadcastGenZhuangSucc);
          this.addModelListener((_crd && FXJEvent === void 0 ? (_reportPossibleCrUseOfFXJEvent({
            error: Error()
          }), FXJEvent) : FXJEvent).BROADCAST_GAME_OVER, this.broadcastGameOver);
          this.addModelListener((_crd && FXJEvent === void 0 ? (_reportPossibleCrUseOfFXJEvent({
            error: Error()
          }), FXJEvent) : FXJEvent).BROADCAST_GAME_START, this.broadcastGameStart);
          this.addModelListener((_crd && FXJEvent === void 0 ? (_reportPossibleCrUseOfFXJEvent({
            error: Error()
          }), FXJEvent) : FXJEvent).BROADCAST_FAN_GANG_PAI, this.broadcastFanGangPai); //游戏房间重连成功
          // this.addModelListener(FXJEvent.BROADCAST_ROOM_RECONNECT, this.broadcastRoomReconnect)

          this.addModelListener((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).SEND_PLAYER_OPERATION, this.sendPlayerOpration);
          this.addModelListener((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).NEXT_GAME_OPERATION, this.onNextGameOperation);
        }

        broadcastGameOver(event = null, resp = null) {
          this.dump(resp, "广播:游戏结束==>");
          (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
            error: Error()
          }), GCache) : GCache).Desk.gameOverResult(); // this.dump(resp);
        }

        onNextGameOperation(event = null) {
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).CLEAN_HAND_CARD);
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).SHOW_HIDEN_MATCH_VIEW, true); // EventManager.dispatch(FXJEvent.GAME_OPEN_POPUP, FXJUIID.GameMatchPrefab,null,{});
        } //操作


        sendPlayerOpration(event = null, info) {
          let sendMsg = {
            cmd: (_crd && FXJCMDHead === void 0 ? (_reportPossibleCrUseOfFXJCMDHead({
              error: Error()
            }), FXJCMDHead) : FXJCMDHead).C2S.USER_OPERATION_RESULT,
            body: info
          };
          (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
            error: Error()
          }), GCache) : GCache).Desk.turnMe = false;
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && FXJEvent === void 0 ? (_reportPossibleCrUseOfFXJEvent({
            error: Error()
          }), FXJEvent) : FXJEvent).NET_SEND_MSG, sendMsg);
        }

        broadcastGameStart(event = null, resp = null) {
          console.log(resp, "广播:游戏开始==>"); // EventManager.dispatch(FXJEvent.GAME_CLOSE_POPUP, FXJUIID.GameMatchPrefab,null,{});

          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).SHOW_HIDEN_MATCH_VIEW, false);
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).VIEW_BROADCAST_GAME_START);
        }

        reqEnterGameLogin(event = null) {
          super.reqEnterGameLogin(event);
        }
        /** override:重连成功 */


        receiveReConnectSuccess(event = null, respData = null) {
          super.receiveReConnectSuccess(event, respData);
          console.log("重连成功___________________________", respData);
          (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
            error: Error()
          }), GCache) : GCache).Desk.reconnectionRoomUpdate(respData);
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).ENTER_ROOM_UPDATE_PLAYER);
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).VIEW_BROADCAST_GAME_START);
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).VIEW_UPDATE_FAN_GANG_PAI);
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).RECEIVE_DEAL_CARD);
          console.log("重连成功___________________________2", respData);

          if (!(_crd && PlayerMgr === void 0 ? (_reportPossibleCrUseOfPlayerMgr({
            error: Error()
          }), PlayerMgr) : PlayerMgr).getInstance().getMyPlayerInfo().isReady) {
            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).dispatch((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
              error: Error()
            }), GameEvent) : GameEvent).SHOW_HIDEN_MATCH_VIEW, true); // EventManager.dispatch(FXJEvent.GAME_OPEN_POPUP, FXJUIID.GameMatchPrefab,null,{});
          }

          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).VIEW_BROADCAST_PLAYER_LOGIN);
        }
        /** override:房间登录成功 */


        receiveLoginRoomSuccess(event = null, respData = null) {
          super.receiveLoginRoomSuccess(event, respData);
          console.log("房间登录成功___________________________", respData);
          (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
            error: Error()
          }), GCache) : GCache).Desk.enterRoomUpdate(respData);
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).ENTER_ROOM_UPDATE_PLAYER);

          if (!(_crd && PlayerMgr === void 0 ? (_reportPossibleCrUseOfPlayerMgr({
            error: Error()
          }), PlayerMgr) : PlayerMgr).getInstance().getMyPlayerInfo().isReady) {
            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).dispatch((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
              error: Error()
            }), GameEvent) : GameEvent).SHOW_HIDEN_MATCH_VIEW, true); // EventManager.dispatch(FXJEvent.GAME_OPEN_POPUP, FXJUIID.GameMatchPrefab,null,{});
          }

          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).VIEW_BROADCAST_PLAYER_LOGIN);
        }
        /** override:广播玩家登录房间 */


        serverBroadcastPlayerLogin(event = null, resp = null) {
          (_crd && PlayerMgr === void 0 ? (_reportPossibleCrUseOfPlayerMgr({
            error: Error()
          }), PlayerMgr) : PlayerMgr).getInstance().addPlayerList(resp);
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).VIEW_BROADCAST_PLAYER_ENTER, resp.userId);
        }

        receivePlayerReady(event = null, respData = null) {
          super.receivePlayerReady(event, respData);
          console.log(respData, "广播:玩家准备==>");
          (_crd && PlayerMgr === void 0 ? (_reportPossibleCrUseOfPlayerMgr({
            error: Error()
          }), PlayerMgr) : PlayerMgr).getInstance().updatePlayerReadyStatus(respData.userId);
        }

        broadcastFanGangPai(event = null, respData = null) {
          console.log(respData, "broadcastFanGangPai补杠==>");
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).VIEW_UPDATE_BU_GANG_PAI, respData);
        }

        receiveGamePlayerAI(event = null, respData = null) {
          super.receiveGamePlayerAI(event, respData);
          console.log(respData, "有玩家托管了==>");
          (_crd && PlayerMgr === void 0 ? (_reportPossibleCrUseOfPlayerMgr({
            error: Error()
          }), PlayerMgr) : PlayerMgr).getInstance().updatePlayerAiStatus(respData.mid, respData.ai);
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).VIEW_PLAYER_AI_SHOW, respData);
        }
        /** override:广播玩家退出房间 */


        receivePlayerLogOut(event = null, respData = null) {
          super.receivePlayerLogOut(event, respData);
          console.log(respData, "广播:玩家退出==>");
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).VIEW_BROADCAST_PLAYER_EXIT, respData.mid);
          (_crd && PlayerMgr === void 0 ? (_reportPossibleCrUseOfPlayerMgr({
            error: Error()
          }), PlayerMgr) : PlayerMgr).getInstance().deletePlayerLeave(respData.mid);
        } // protected serverBroadcastPlayerReady(event = null, resp = null ): void{
        // 	console.log("serverBroadcastPlayerReady::::::::::::"+resp);
        // PlayerMgr.getInstance().addPlayerList(resp);
        // console.log("serverBroadcastPlayerReady::::::::::::"+PlayerMgr.getInstance().playerList);
        // }


        broadcastZhiTou(event = null, resp = null) {
          this.dump(resp, "广播:掷投==>");
          (_crd && RoomMgr === void 0 ? (_reportPossibleCrUseOfRoomMgr({
            error: Error()
          }), RoomMgr) : RoomMgr).getInstance().rollDice = resp;
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).VIEW_BROADCAST_ZHI_TOU, resp);
        }

        broadcastDingZhuang(event = null, resp) {
          this.dump(resp, "广播:定庄==>");
          (_crd && RoomMgr === void 0 ? (_reportPossibleCrUseOfRoomMgr({
            error: Error()
          }), RoomMgr) : RoomMgr).getInstance().laiziInfo = resp;
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).VIEW_BROADCAST_DING_ZHUANG, resp.bankSeatId);
        }

        broadcastGrabCard(event = null, resp) {
          console.log(resp, "广播:出牌==>");
          (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
            error: Error()
          }), GCache) : GCache).Desk.gameGrabCard(resp);
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).VIEW_BROADCAST_GRAB_CARD, resp); // EventManager.dispatch(FXJEvent.GAME_OPEN_POPUP, FXJUIID.GameSettlePrefab, null,{});
          // EventManager.dispatch(FXJEvent.GAME_OPEN_POPUP, FXJUIID.GameSettlePrefab, null, {});
        }

        broadcastDingQueOptions(event = null, resp) {
          this.dump(resp, "广播:定缺==>");
          console.log("broadcastDingQueOptions::::::::::::" + resp);
        }

        broadcastUserPiaoGang(event = null, resp) {
          this.dump(resp, "广播:飘杠==>");
          console.log("broadcastUserPiaoGang::::::::::::" + resp);
        }

        broadcastPaoQianOptions(event = null, resp) {
          this.dump(resp, "广播:飘缺选项==>");
          console.log("broadcastPaoQianOptions::::::::::::" + resp);
        }

        broadcastOneDingqueResult(event = null, resp) {
          this.dump(resp, "广播:broadcastOneDingqueResult==>");
        }

        broadcastAllShuaiQiangResult(event = null, resp) {
          this.dump(resp, "广播:broadcastAllShuaiQiangResult==>");
        }

        broadcastAllDingqueResult(event = null, resp) {
          this.dump(resp, "广播:broadcastAllDingqueResult==>");
        }

        broadcastChaqueResult(event = null, resp) {
          this.dump(resp, "广播:broadcastChaqueResult==>");
          console.log("broadcastChaqueResult::::::::::::" + resp);
        }

        broadcastMaiDuanMenUser(event = null, resp) {
          this.dump(resp, "广播:broadcastMaiDuanMenUser==>");
          console.log("broadcastMaiDuanMenUser::::::::::::" + resp);
        }

        broadcastMaiDuanMenResult(event = null, resp) {
          this.dump(resp, "广播:broadcastMaiDuanMenResult==>");
        }

        broadcastFenZhang(event = null, resp) {
          this.dump(resp, "广播:broadcastFenZhang==>");
        }

        broadcastUpdateFanGangPai(event = null, resp) {
          this.dump(resp, "广播:broadcastUpdateFanGangPai==>");
          (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
            error: Error()
          }), GCache) : GCache).Desk.updateFanGangCards(resp);
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).VIEW_UPDATE_FAN_GANG_PAI);
        }

        broadcastSelectFanGangPai(event = null, resp) {
          this.dump(resp, "广播:broadcastSelectFanGangPai==>");
          (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
            error: Error()
          }), GCache) : GCache).Desk.updateSelectFanGangCards(resp);
        }

        broadcastDealCard(event = null, resp) {
          console.log(resp, "广播:分牌==>");
          (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
            error: Error()
          }), GCache) : GCache).Desk.dealCardUpdate(resp);
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).VIEW_BROADCAST_DEAL_CARD, resp);
        }

        broadcastUserOperationResult(event = null, resp) {
          console.log(resp, "广播:broadcastUserOperationResult==>");
          (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
            error: Error()
          }), GCache) : GCache).Desk.userOperationResult(resp);
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).UPDATE_OPERATION_RESULT, resp);
        }

        broadcastUserOperation(event = null, resp) {
          console.log(resp, "广播:broadcastUserOperation==>");
          (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
            error: Error()
          }), GCache) : GCache).Desk.userOperation(resp);
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).VIEW_USER_OPERATION, resp);
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).DRAW_MY_CARD);
        }

        broadcastDingFeng(event = null, resp) {
          this.dump(resp, "广播:broadcastDingFeng==>");
        }

        broadcastDoubleCards(event = null, resp) {
          this.dump(resp, "广播:broadcastDoubleCards==>");
        }

        broadcastRewardCards(event = null, resp) {
          this.dump(resp, "广播:broadcastRewardCards==>");
        }

        broadcastPlayingJiType(event = null, resp) {
          this.dump(resp, "广播:broadcastPlayingJiType==>");
        }

        broadcastZhuoJi(event = null, resp) {
          // this.dump(resp, "广播:broadcastZhuoJi==>")
          console.log(resp, "广播:broadcastUserOperation==>");
        }

        broadcastSettleItem(event = null, resp) {
          // this.dump(resp, "广播:broadcastSettleItem==>")
          console.log(resp, "广播:broadcastSettleItem==>");
          (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
            error: Error()
          }), GCache) : GCache).Desk.updateSettleResult(resp);
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && FXJEvent === void 0 ? (_reportPossibleCrUseOfFXJEvent({
            error: Error()
          }), FXJEvent) : FXJEvent).GAME_OPEN_POPUP, (_crd && FXJUIID === void 0 ? (_reportPossibleCrUseOfFXJUIID({
            error: Error()
          }), FXJUIID) : FXJUIID).GameSettlePrefab);
        }

        broadcastHandCards(event = null, resp) {
          console.log(resp, "广播:手牌==>");
          (_crd && PlayerMgr === void 0 ? (_reportPossibleCrUseOfPlayerMgr({
            error: Error()
          }), PlayerMgr) : PlayerMgr).getInstance().updateHandCards(resp);
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).VIEW_BROADCAST_GAME_OVER, resp);
        }

        broadcastBankerFirstOperation(event = null, resp) {
          this.dump(resp, "广播:broadcastBankerFirstOperation==>");
          (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
            error: Error()
          }), GCache) : GCache).Desk.bankerFirstOperation(resp);
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).VIEW_BROADCAST_OPERATION_START, resp);
        }

        broadcastUpdatePlayerMoney(event = null, resp) {
          this.dump(resp, "广播:更新玩家钱==>");
          (_crd && PlayerMgr === void 0 ? (_reportPossibleCrUseOfPlayerMgr({
            error: Error()
          }), PlayerMgr) : PlayerMgr).getInstance().updatePlayerMoney(resp.moneys);
        }

        broadcastGameOperationResult(event = null, resp) {
          console.log("broadcastGameOperationResult::::::::::::", resp);
        }

        broadcastDingLaizi(event = null, resp) {
          this.dump(resp, "广播:定癞子==>");
          (_crd && RoomMgr === void 0 ? (_reportPossibleCrUseOfRoomMgr({
            error: Error()
          }), RoomMgr) : RoomMgr).getInstance().laiziInfo = resp;
        }

        broadcastToWaitUserGiveUp(event = null, resp) {
          this.dump(resp, "广播:broadcastToWaitUserGiveUp==>");
        }

        broadcastXiazhuOptions(event = null, resp) {
          this.dump(resp, "广播:broadcastXiazhuOptions==>");
        }

        broadcastXiazhuResult(event = null, resp) {
          this.dump(resp, "广播:broadcastXiazhuResult==>");
        }

        broadcastGenZhuangSucc(event = null, resp) {
          this.dump(resp, "广播:broadcastGenZhuangSucc==>");
        }
        /**广播: 表情 */


        receiveGameUserFace(event = null, respData = null) {
          super.receiveGameUserFace();
          console.log(respData, "有玩家发表情了==>");
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).VIEW_PLAYER_EMOJ_SHOW, respData);
        }
        /**广播: 聊天 */


        receiveGameUserChat(event = null, respData = null) {
          super.receiveGameUserChat();
          console.log(respData, "有玩家发聊天消息了==>FXJ");

          if (respData) {
            let msg = (_crd && Encrypt === void 0 ? (_reportPossibleCrUseOfEncrypt({
              error: Error()
            }), Encrypt) : Encrypt).JsonDecode(respData['msg']);

            if (msg && msg['from'] && msg['to']) {
              let index = respData['index'];
              let mid = respData['mid'];
              let fromUid = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                error: Error()
              }), Utils) : Utils).number_valueOf(msg['from'], 0);
              let toUid = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                error: Error()
              }), Utils) : Utils).number_valueOf(msg['to'], 0);

              if (fromUid > 0 && toUid > 0 && index > 0) {
                // 格式:uid: 10086089, prop_id: 3, to_uid: 10086845
                let info = {
                  uid: fromUid,
                  prop_id: index,
                  to_uid: toUid
                };
                console.log("有玩家发互动道具了==>FXJ", respData, info);
                (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
                  error: Error()
                }), EventManager) : EventManager).dispatch((_crd && FXJEvent === void 0 ? (_reportPossibleCrUseOfFXJEvent({
                  error: Error()
                }), FXJEvent) : FXJEvent).VIEW_DESK_ANI_PLAY, (_crd && FXJConstant === void 0 ? (_reportPossibleCrUseOfFXJConstant({
                  error: Error()
                }), FXJConstant) : FXJConstant).AnimNormal.HudongProp, info);
              }
            } else {
              (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
                error: Error()
              }), EventManager) : EventManager).dispatch((_crd && FXJEvent === void 0 ? (_reportPossibleCrUseOfFXJEvent({
                error: Error()
              }), FXJEvent) : FXJEvent).VIEW_PLAYER_CHAT_SHOW, respData);
            }
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d6206dd44582dce6503d9a5c85880a58108205b3.js.map