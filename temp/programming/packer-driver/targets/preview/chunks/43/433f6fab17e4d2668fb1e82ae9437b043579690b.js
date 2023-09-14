System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, GCache, AppEvent, ClientInfo, GConstants, GameTxt, Encrypt, CountTime, EventManager, Utils, BaseControll, GameRoomHelper, GlobalCMDHead, RoomController, _crd;

  function _reportPossibleCrUseOfDesk(extras) {
    _reporterNs.report("Desk", "../cache/Desk", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGCache(extras) {
    _reporterNs.report("GCache", "../cache/GCache", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAppEvent(extras) {
    _reporterNs.report("AppEvent", "../config/AppEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfClientInfo(extras) {
    _reporterNs.report("ClientInfo", "../config/GameConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGConstants(extras) {
    _reporterNs.report("GConstants", "../config/GameConstant", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameTxt(extras) {
    _reporterNs.report("GameTxt", "../config/GameTxt", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEncrypt(extras) {
    _reporterNs.report("Encrypt", "../framework/crypto/Encrypto", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCountTime(extras) {
    _reporterNs.report("CountTime", "../framework/extend/CountTime", _context.meta, extras);
  }

  function _reportPossibleCrUseOfinf_GameIntoParams(extras) {
    _reporterNs.report("inf_GameIntoParams", "../framework/InterfaceDefines", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventManager(extras) {
    _reporterNs.report("EventManager", "../framework/manager/EventManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUtils(extras) {
    _reporterNs.report("Utils", "../framework/Utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseControll(extras) {
    _reporterNs.report("BaseControll", "../framework/vc/BaseController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameRoomHelper(extras) {
    _reporterNs.report("GameRoomHelper", "./GameRoomHelper", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGlobalCMDHead(extras) {
    _reporterNs.report("GlobalCMDHead", "./gnet/GlobalCMD", _context.meta, extras);
  }

  _export("RoomController", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      GCache = _unresolved_2.GCache;
    }, function (_unresolved_3) {
      AppEvent = _unresolved_3.AppEvent;
    }, function (_unresolved_4) {
      ClientInfo = _unresolved_4.ClientInfo;
    }, function (_unresolved_5) {
      GConstants = _unresolved_5.GConstants;
    }, function (_unresolved_6) {
      GameTxt = _unresolved_6.GameTxt;
    }, function (_unresolved_7) {
      Encrypt = _unresolved_7.Encrypt;
    }, function (_unresolved_8) {
      CountTime = _unresolved_8.CountTime;
    }, function (_unresolved_9) {
      EventManager = _unresolved_9.EventManager;
    }, function (_unresolved_10) {
      Utils = _unresolved_10.Utils;
    }, function (_unresolved_11) {
      BaseControll = _unresolved_11.BaseControll;
    }, function (_unresolved_12) {
      GameRoomHelper = _unresolved_12.GameRoomHelper;
    }, function (_unresolved_13) {
      GlobalCMDHead = _unresolved_13.GlobalCMDHead;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b5401i76s5IbZDQ3JXoL/f5", "RoomController", undefined);

      _export("RoomController", RoomController = class RoomController extends (_crd && BaseControll === void 0 ? (_reportPossibleCrUseOfBaseControll({
        error: Error()
      }), BaseControll) : BaseControll) {
        /**当前使用的桌子缓存数据 */

        /**重连时资源延时加载时间 秒 */

        /**重连时加载定时器句柄 */

        /** 游戏场景是否被激活 */

        /**发送登录请求超时的超时检测句柄 */

        /**发送登录次数最大的次数 */

        /**当前发送登录请求的次数 */

        /**发送登录请求超时的时间 */

        /**请求登录时发送的数据 */

        /** 是否重连 */

        /**进入房间发送的参数 */

        /** 游戏内倒计时的句柄队列 */

        /** 中途退出房间的数据 */
        //实例化
        constructor(name) {
          var _SelectGame;

          super(name);
          this._className = "";
          this._deskCache = null;
          this._reconnResLoadTime = 3;
          this._handlerReconnResLoad = null;
          this._gameValid = false;
          this._handlerTimeOutLoginGame = null;
          this._sendLoginMaxCount = 2;
          this._sendLoginCurrowNum = 0;
          this._sendLoginTimeout = 15;
          this._sendLoginData = null;
          this._isReconn = false;
          this._intoGameData = null;
          this._handlerCountTimeMap = new Map();
          this._halfwayExitRoomData = null;
          this._className = name;
          this._intoGameData = (_SelectGame = (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
            error: Error()
          }), GCache) : GCache).SelectGame) == null ? void 0 : _SelectGame.intoGameData;
          (_crd && GameRoomHelper === void 0 ? (_reportPossibleCrUseOfGameRoomHelper({
            error: Error()
          }), GameRoomHelper) : GameRoomHelper).intoRoomInit();
          this.onInit();
        }

        /**初始化添加事件绑定 */
        onInitModuleEvent() {
          /************************登录相关************************/
          //房间界面再次加载(一般用于重连)
          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).ROOM_VIEW_ONLOAD, this.onViewLoad); //登录游戏房间(一键或重连)

          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_REQ_ROOM_LOGIN, this.reqEnterGameLogin); //开启检测登录超时

          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_CHECK_OUT_TIME_ROOM_JOIN, this.loginRoomOutTime); //停止检测登录超时

          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_STOP_CHECK_OUT_TIME_ROOM_JOIN, this.stopcheckLoginCheckTimeOut); //游戏房间登录成功

          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_RECEIVE_GAME_LOGIN_SUCCESS, this.receiveLoginRoomSuccess); //游戏房间重连成功

          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_RECEIVE_GAME_RECONNECT_SUCCESS, this.receiveReConnectSuccess); //广播:游戏结束
          // this.addModelListener(AppEvent.BROADCAST_GAME_OVER, this.receiveGameOver)
          // //广播:游戏开始
          // this.addModelListener(AppEvent.BROADCAST_GAME_START, this.receiveGameStart)
          //游戏房间登录失败

          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_RECEIVE_GAME_LOGIN_FAIL, this.receiveLoginRoomFail); //下发房间信息

          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_RECEIVE_GAME_ROOM_INFO, this.receiveRoomInfo); //server通知准备相关信息

          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_RECEIVE_GAME_READY_INFO, this.receiveReadyInfo); //请求:玩家准备请求

          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_REQ_PLAYER_READY, this.reqPlayerReady); //广播:玩家准备

          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_RECEIVE_GAME_PLAYER_READY, this.receivePlayerReady); //广播:玩家进入
          // this.addModelListener(AppEvent.NET_RECEIVE_GAME_PLAYER_INTO, this.receivePlayerInto)
          //广播:玩家退出

          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_RECEIVE_GAME_PLAYER_LOGOUT, this.receivePlayerLogOut); //请求:玩家请求退出

          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_REQ_LOGOUT_IN_GAME_TRY, this.reqTryLogOutInGame); //响应:Server回应退出请求(游戏中退出)

          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_RESP_LOGOUT_IN_GAME, this.respTryLogOutInGame); //请求:玩家确定要退出房间

          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_REQ_LOGOUT_IN_GAME, this.reqLogOutInGame); //请求:玩家确定要退出房间

          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_REQ_LOGOUT_IN_GAME_FORCE, this.reqLogOutInGameForce); //退出游戏房间成功

          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_RECEIVE_GAME_EXIT_ROOM_SUCCESS, this.receiveExitRoomSuccess); //广播:游戏强制结束（游戏中有玩家退出）

          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_RECEIVE_GAME_STOP_PLAYING, this.receiveStopPlaying);
          /************************其它相关************************/
          //广播:表情

          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_RECEIVE_GAME_USER_FACE, this.receiveGameUserFace); //广播:聊天

          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_RECEIVE_GAME_USER_CHAT, this.receiveGameUserChat); //请求:玩家请求托管或取消托管

          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_REQ_GAME_USER_AI, this.reqGamePlayerAI); //广播:玩家托管

          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_RECEIVE_GAME_PLAYER_AI, this.receiveGamePlayerAI); //广播:升降场信息

          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_RECEIVE_ROOM_LEVEL_UP, this.receiveRoomLevelUp); //请求:换桌

          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_REQ_GAME_CHANGE_DESK, this.reqGameChangeTable); //广播:换桌失败

          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_RECEIVE_GAME_CHANGE_DESK_ERROR, this.receiveChangeTableError); //房间状态有改变

          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).GAME_ROOM_STATE_CHANGE, this.receiveRoomStateChange); //破产结果通知

          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).ACTIVITY_BANKUP_BACK, this.receiveBankUpBack);
        }
        /** override:下发给个控制器做一些专属操作 */


        onInit() {}

        receiveGameOver() {}

        receiveGameStart() {}
        /** override:场景加载/界面强制重新刷新 */


        onViewLoad(event) {
          var _SelectGame2;

          if (event === void 0) {
            event = null;
          }

          this._gameValid = true;
          this._intoGameData = (_SelectGame2 = (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
            error: Error()
          }), GCache) : GCache).SelectGame) == null ? void 0 : _SelectGame2.intoGameData;

          if (this._intoGameData) {
            if ((_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
              error: Error()
            }), GCache) : GCache).User.LoginRoomState != true) {
              this._sendLoginCurrowNum = 0;

              if (this._handlerReconnResLoad) {
                this.stopScheduler(this._handlerReconnResLoad);
                this._handlerReconnResLoad = null;
              }
              /** 界面是否已经存在了 */


              var isHaveView = event != null;

              if (this._intoGameData.isReconn == true) {
                /** 重连 */
                this.__reConnection(isHaveView);
              } else {
                /** 推荐入场 */
                this.__connection(isHaveView);
              }
            }
          }
        }
        /** 重连加载界面 */


        __reConnection(isHaveView) {
          if (isHaveView === void 0) {
            isHaveView = false;
          }

          this.print("重新连接，游戏场景状态:" + ("" + (isHaveView == true ? "存在" : "不存在"))); //--重连--

          this._isReconn = true;
          this.stopScheduler(this._handlerReconnResLoad);
          this._handlerReconnResLoad = null;

          if (isHaveView == false) {
            //重连时先预加载资源
            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
              error: Error()
            }), AppEvent) : AppEvent).GAME_RECONNECT_RESLOAD); //吐司:场景加载中

            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
              error: Error()
            }), AppEvent) : AppEvent).SYS_TOAST_TIP, {
              content: (_crd && GameTxt === void 0 ? (_reportPossibleCrUseOfGameTxt({
                error: Error()
              }), GameTxt) : GameTxt).login_goto_room
            });
            this._handlerReconnResLoad = this.addScheduler(this._reconnResLoadTime, () => {
              this.stopScheduler(this._handlerReconnResLoad);
              this._handlerReconnResLoad = null; //清空本次登录请求数据

              this._sendLoginData = null; //发送登录请求

              (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
                error: Error()
              }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
                error: Error()
              }), AppEvent) : AppEvent).NET_REQ_ROOM_LOGIN);
            });
          } else {
            this.stopScheduler(this._handlerReconnResLoad);
            this._handlerReconnResLoad = null; //清空本次登录请求数据

            this._sendLoginData = null; //发送登录请求

            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
              error: Error()
            }), AppEvent) : AppEvent).NET_REQ_ROOM_LOGIN);
          }
        }
        /** 正常连接 */


        __connection(isHaveView) {
          if (isHaveView === void 0) {
            isHaveView = false;
          }

          this.print("推荐入场，游戏场景状态:" + ("" + (isHaveView == true ? "存在" : "不存在"))); //--非重连--

          this._isReconn = false;
          this.stopScheduler(this._handlerReconnResLoad);
          this._handlerReconnResLoad = null;

          if (isHaveView == false) {
            //吐司:场景加载中
            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
              error: Error()
            }), AppEvent) : AppEvent).SYS_TOAST_TIP, {
              content: (_crd && GameTxt === void 0 ? (_reportPossibleCrUseOfGameTxt({
                error: Error()
              }), GameTxt) : GameTxt).login_goto_room
            }); // this._handlerReconnResLoad = this.addScheduler(this._reconnResLoadTime, () => {
            // 	this.stopScheduler(this._handlerReconnResLoad);
            // 	this._handlerReconnResLoad = null;
            // 	//清空本次登录请求数据
            // 	this._sendLoginData = null;
            // 	//发送登录请求
            // 	EventManager.dispatch(AppEvent.NET_REQ_ROOM_LOGIN);
            // })
          } //清空本次登录请求数据


          this._sendLoginData = null; //发送登录请求

          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_REQ_ROOM_LOGIN);
        }
        /** override:场景显示 */


        onViewStart() {}
        /** override:游戏场景被销毁 */


        onViewDestroy() {}
        /** 重置登录请求数据为登录非重连 */


        resetIntoGameDataToLogin(event) {
          if (event === void 0) {
            event = null;
          }

          if ((_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
            error: Error()
          }), GCache) : GCache).SelectGame.intoGameData) {
            (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
              error: Error()
            }), GCache) : GCache).SelectGame.intoGameData.TableID = 0;
          }

          if (this._intoGameData) {
            this._intoGameData.TableID = 0;
          }
        }
        /** 请求登录进入房间 */


        reqEnterGameLogin(event) {
          if (event === void 0) {
            event = null;
          }

          if ((_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
            error: Error()
          }), GCache) : GCache).User.LoginRoomState == true) {
            this.print("Error:已经登录成功了，不需要再次登录");
            return;
          }

          this.stopcheckLoginCheckTimeOut();
          this.StopCountTime();

          if (this._sendLoginCurrowNum >= this._sendLoginMaxCount) {
            this.print("Error:超出登录的最大次数 直接退出游戏场景");
            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
              error: Error()
            }), AppEvent) : AppEvent).SYS_TOAST_TIP, {
              content: (_crd && GameTxt === void 0 ? (_reportPossibleCrUseOfGameTxt({
                error: Error()
              }), GameTxt) : GameTxt).hall_goto_game_out_time
            });
            this.detailExitGame();
            return;
          }

          if (!this._intoGameData) {
            this.print("Error:进入房间的缓存参数有误 直接退出游戏场景");
            this.detailExitGame(false);
            return;
          }

          this.print("请求登录进入房间===>当前登录次数:" + this._sendLoginCurrowNum);
          var gameID = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).number_valueOf(this._intoGameData.GameID, 0);
          var roomLevel = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).number_valueOf(this._intoGameData.Level, 0);
          var tableID = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).number_valueOf(this._intoGameData.TableID, 0);

          if (gameID <= 0) {
            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
              error: Error()
            }), AppEvent) : AppEvent).SYS_TOAST_TIP, {
              content: (_crd && GameTxt === void 0 ? (_reportPossibleCrUseOfGameTxt({
                error: Error()
              }), GameTxt) : GameTxt).hall_goto_game_no_gameid
            });
            this.detailExitGame();
            return;
          } //先请求更新子游戏场次信息


          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_REQ_GAME_LEVEL_ROOM_TAB, gameID, 1); //登录时请求的数据

          var loginParam = null; //登录发送的数据

          var loginSendCMD = null; //吐司文本

          var tips_txt = null;

          if (tableID > 0) {
            this.print("\u8BF7\u6C42\u91CD\u8FDE\u8FDB\u5165\u6E38\u620F\u623F\u95F4 gameID = " + gameID + " roomLevel = " + roomLevel + " tableID = " + tableID);
            var infoData = {
              version: (_crd && ClientInfo === void 0 ? (_reportPossibleCrUseOfClientInfo({
                error: Error()
              }), ClientInfo) : ClientInfo).AppVer,
              api: 1
            };
            loginParam = {
              mid: (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
                error: Error()
              }), GCache) : GCache).User.getUserMid(),
              roomId: tableID,
              userInfo: (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
                error: Error()
              }), GCache) : GCache).User.getUserLoginInfoByIntoGame(gameID),
              key: "55ff85e777d50680fb52935076d7e55b",
              plateInfo: (_crd && Encrypt === void 0 ? (_reportPossibleCrUseOfEncrypt({
                error: Error()
              }), Encrypt) : Encrypt).JsonEncode2(infoData)
            };
            loginSendCMD = (_crd && GlobalCMDHead === void 0 ? (_reportPossibleCrUseOfGlobalCMDHead({
              error: Error()
            }), GlobalCMDHead) : GlobalCMDHead).ROOM_SEND_LOGIN;
            tips_txt = (_crd && GameTxt === void 0 ? (_reportPossibleCrUseOfGameTxt({
              error: Error()
            }), GameTxt) : GameTxt).login_room_reconnect;
          } else {
            this.print("\u8BF7\u6C42\u4E00\u952E\u8FDB\u5165\u6E38\u620F\u623F\u95F4 gameID = " + gameID + " roomLevel = " + roomLevel + " tableID = " + tableID);
            var roomData = null;

            if (roomLevel == 0) {
              roomData = (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
                error: Error()
              }), GCache) : GCache).SelectGame.getGameLevelRoomMinMoney(gameID);
            } else {
              roomData = (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
                error: Error()
              }), GCache) : GCache).SelectGame.getGameRoomInfoByRoomLevelID(gameID, roomLevel);
            }

            roomData = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).table_verify(roomData);
            var moneyId = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).number_valueOf(roomData["base_chip_type"]);
            var minMoney = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).number_valueOf(roomData["min_money"]);
            var currowMoney = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).number_valueOf((_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
              error: Error()
            }), GCache) : GCache).User.getUserMoneyByID(moneyId));
            loginParam = {
              gameId: gameID,
              levelId: roomLevel,
              userInfo: (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
                error: Error()
              }), GCache) : GCache).User.getUserLoginInfoByIntoGame(gameID),
              key: "55ff85e777d50680fb52935076d7e55b",
              flag: 1,
              changeTableType: 0,
              //1或者0
              extParam: {},
              gameVersion: (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                error: Error()
              }), Utils) : Utils).number_valueOf((_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
                error: Error()
              }), GCache) : GCache).SelectGame.getGameVersionByGameID(gameID)),
              //游戏版本号
              playType: (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                error: Error()
              }), Utils) : Utils).number_valueOf(roomData["play_mode"]),
              //玩法类型
              propertyId: moneyId //货币类型：0银币，1元宝

            };
            loginSendCMD = (_crd && GlobalCMDHead === void 0 ? (_reportPossibleCrUseOfGlobalCMDHead({
              error: Error()
            }), GlobalCMDHead) : GlobalCMDHead).ROOM_LOGIN_GAME_ONE_KEY;

            if (currowMoney < minMoney) {
              //触发降场
              console.warn("应该触发降场,但是并未处理"); // return
            }
          } //吐司:重连独有


          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).SYS_TOAST_TIP, {
            content: tips_txt
          }); //显示网络loading

          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).SYS_SHOW_NETLOADING); //保存请求登录时的数据

          this._sendLoginData = loginParam; //登录次数计次

          this._sendLoginCurrowNum = this._sendLoginCurrowNum + 1;
          var sendMsg = {
            cmd: loginSendCMD,
            body: this._sendLoginData
          }; //先修改心跳间隔

          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).SYS_UPDATE_HEART_TIME, 6000); //请求命令

          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_SEND_MSG, sendMsg); //开启超时检测

          this.stopcheckLoginCheckTimeOut();
          this._handlerTimeOutLoginGame = this.addScheduler(this._sendLoginTimeout, () => {
            //开启登录超时检测
            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
              error: Error()
            }), AppEvent) : AppEvent).NET_CHECK_OUT_TIME_ROOM_JOIN);
          });
        }
        /** 停止检测登录房间超时 */


        stopcheckLoginCheckTimeOut(event) {
          if (event === void 0) {
            event = null;
          }

          this.stopScheduler(this._handlerTimeOutLoginGame);
          this._handlerTimeOutLoginGame = null;
        }
        /** 登录游戏房间超时 */


        loginRoomOutTime(event) {
          if (event === void 0) {
            event = null;
          }

          if (!this._handlerTimeOutLoginGame) {
            return;
          }

          this.print("请求登录超时" + this._sendLoginCurrowNum);
          this.stopcheckLoginCheckTimeOut();

          if (this._sendLoginCurrowNum >= this._sendLoginMaxCount) {
            this.print("Error:超出登录的最大次数 直接退出游戏场景"); //关闭网络loading

            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
              error: Error()
            }), AppEvent) : AppEvent).SYS_CLOSE_NETLOADING); //修改心跳间隔

            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
              error: Error()
            }), AppEvent) : AppEvent).SYS_UPDATE_HEART_TIME, 10000);
            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
              error: Error()
            }), AppEvent) : AppEvent).SYS_TOAST_TIP, {
              content: (_crd && GameTxt === void 0 ? (_reportPossibleCrUseOfGameTxt({
                error: Error()
              }), GameTxt) : GameTxt).hall_goto_game_out_time
            });
            this.detailExitGame();
            return;
          }

          if ((_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
            error: Error()
          }), GCache) : GCache).User.LoginRoomState != true) {
            //发送登录请求
            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
              error: Error()
            }), AppEvent) : AppEvent).NET_REQ_ROOM_LOGIN);
          }
        }
        /** 房间登录成功 */


        receiveLoginRoomSuccess(event, respData) {
          if (event === void 0) {
            event = null;
          }

          if (respData === void 0) {
            respData = null;
          }

          this.dump(respData, "房间登录成功==>"); //关闭网络loading

          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).SYS_CLOSE_NETLOADING); //重置登录次数

          this._sendLoginCurrowNum = 0; //更新用户登录游戏房间的状态

          (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
            error: Error()
          }), GCache) : GCache).User.LoginRoomState = true; //停止检测进房超时

          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_STOP_CHECK_OUT_TIME_ROOM_JOIN); //重置中途退出的数据

          this._halfwayExitRoomData = null; //请求等级配置

          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_REQ_LEVEL_MODEL_CONFIG); //请求道具信息

          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_REQ_PROPS_INFO); //请求大厅游戏配置

          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_REQ_HALL_GAME_CONFIG); //请求游戏房间信息

          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_REQ_GAME_LEVEL_ROOM_TAB, this._intoGameData.GameID); //请求破产配置

          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_REQ_BANKRUPT_CONFIG);

          if (this._deskCache) {
            // this._deskCache.resertPlayer();
            this._deskCache.canExitGame = true; // this._deskCache.setCurGameID(this._intoGameData.GameID);
          }
        }
        /** 房间重连成功 */


        receiveReConnectSuccess(event, respData) {
          if (event === void 0) {
            event = null;
          }

          if (respData === void 0) {
            respData = null;
          }

          this.dump(respData, "房间重连成功==>"); //关闭网络loading

          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).SYS_CLOSE_NETLOADING); //吐司:重连成功

          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).SYS_TOAST_TIP, {
            content: (_crd && GameTxt === void 0 ? (_reportPossibleCrUseOfGameTxt({
              error: Error()
            }), GameTxt) : GameTxt).login_reconnect_success
          }); //重置登录次数

          this._sendLoginCurrowNum = 0; //更新用户登录游戏房间的状态

          (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
            error: Error()
          }), GCache) : GCache).User.LoginRoomState = true; //停止检测进房超时

          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_STOP_CHECK_OUT_TIME_ROOM_JOIN); //重置中途退出的数据

          this._halfwayExitRoomData = null; //请求等级配置

          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_REQ_LEVEL_MODEL_CONFIG); //请求道具信息

          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_REQ_PROPS_INFO); //请求大厅游戏配置

          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_REQ_HALL_GAME_CONFIG); //请求游戏房间信息

          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_REQ_GAME_LEVEL_ROOM_TAB, this._intoGameData.GameID); //请求破产配置

          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_REQ_BANKRUPT_CONFIG);

          if (this._deskCache) {
            // PlayerMgr.getInstance().resertPlayer();
            this._deskCache.canExitGame = true;
            this._deskCache.MoneyTypeID = this._sendLoginData["propertyId"]; // this._deskCache.setCurGameID(this._intoGameData.GameID);
          }
        }
        /** 游戏房间登录失败 */


        receiveLoginRoomFail(event, respData) {
          if (event === void 0) {
            event = null;
          }

          if (respData === void 0) {
            respData = null;
          }

          this.dump(respData, "游戏房间登录失败==>" + this._sendLoginCurrowNum); //更新用户登录游戏房间的状态

          (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
            error: Error()
          }), GCache) : GCache).User.LoginRoomState = false;

          if (this._sendLoginCurrowNum >= this._sendLoginMaxCount) {
            //关闭网络loading
            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
              error: Error()
            }), AppEvent) : AppEvent).SYS_CLOSE_NETLOADING);
          } //发送登录请求


          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_REQ_ROOM_LOGIN);
        }
        /** 下发房间信息 */


        receiveRoomInfo(event, respData) {
          if (event === void 0) {
            event = null;
          }

          if (respData === void 0) {
            respData = null;
          }

          this._deskCache.updateRoomInfo(respData);

          this.dump(this._deskCache.getRoomInfo(), "下发房间信息==>");
        }
        /** server通知准备相关信息 */


        receiveReadyInfo(event, respData) {
          if (event === void 0) {
            event = null;
          }

          if (respData === void 0) {
            respData = null;
          }

          this.dump(respData, "server通知准备相关信息==>");

          if (respData) {
            if (this._deskCache) {
              this._deskCache.readyTime = respData["readyTime"];
            }
          } // //更新房间状态
          // EventManager.dispatch(AppEvent.GAME_ROOM_STATE_CHANGE, GConstants.GameRoomState.STATUS_READY);
          // //请求破产配置
          // EventManager.dispatch(AppEvent.NET_REQ_BANKRUPT_CONFIG);

        }
        /** 请求:玩家请求准备 */


        reqPlayerReady(event) {
          if (event === void 0) {
            event = null;
          }

          // this.print("请求:玩家请求准备====>")
          var sendMsg = {
            cmd: (_crd && GlobalCMDHead === void 0 ? (_reportPossibleCrUseOfGlobalCMDHead({
              error: Error()
            }), GlobalCMDHead) : GlobalCMDHead).USER_READY_REQUEST,
            body: null
          };
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_SEND_MSG, sendMsg);
        }
        /** 广播:玩家准备 */


        receivePlayerReady(event, respData) {
          if (event === void 0) {
            event = null;
          }

          if (respData === void 0) {
            respData = null;
          }

          if (respData) {
            if (respData["userId"] == (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
              error: Error()
            }), GCache) : GCache).User.getUserMid() && this._deskCache) {
              //更新房间状态
              (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
                error: Error()
              }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
                error: Error()
              }), AppEvent) : AppEvent).GAME_ROOM_STATE_CHANGE, (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
                error: Error()
              }), GConstants) : GConstants).GameRoomState.STATUS_READED);
            }

            ;
          }

          ;
        } // /** 广播:玩家进入 */
        // protected receivePlayerInto(event = null, respData = null) {
        // 	this.dump(respData, "广播:玩家进入==>")
        // }

        /** 广播:玩家退出 */


        receivePlayerLogOut(event, respData) {
          if (event === void 0) {
            event = null;
          }

          if (respData === void 0) {
            respData = null;
          }
        }
        /** 广播:退出游戏房间成功 */


        receiveExitRoomSuccess(event, respData) {
          if (event === void 0) {
            event = null;
          }

          if (respData === void 0) {
            respData = null;
          }

          this.dump(respData, "退出房间成功==>");
          this.resetIntoGameDataToLogin(); //更新用户登录游戏房间的状态

          (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
            error: Error()
          }), GCache) : GCache).User.LoginRoomState = false;

          if (this._deskCache) {
            //更新房间状态
            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
              error: Error()
            }), AppEvent) : AppEvent).GAME_ROOM_STATE_CHANGE, (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
              error: Error()
            }), GConstants) : GConstants).GameRoomState.STATUS_EXITSUCCESS);

            this._deskCache.dumpPlayers();

            this._deskCache.dumpPlayersReadyState();

            if (this._deskCache.canExitGame == false) {
              return;
            }
          } //退出游戏场景


          this.detailExitGame(false);
        }
        /** 广播:中途退出房间 */


        receiveStopPlaying(event, respData) {
          if (event === void 0) {
            event = null;
          }

          if (respData === void 0) {
            respData = null;
          }

          this.dump(respData, "中途退出房间成功 强制结束游戏==>");
          this._halfwayExitRoomData = respData; //更新房间状态

          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).GAME_ROOM_STATE_CHANGE, (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
            error: Error()
          }), GConstants) : GConstants).GameRoomState.STATUS_EXITSUCCESS);
        }
        /** 请求:玩家请求中途退出游戏 */


        reqTryLogOutInGame(event) {
          if (event === void 0) {
            event = null;
          }

          var sendMsg = {
            cmd: (_crd && GlobalCMDHead === void 0 ? (_reportPossibleCrUseOfGlobalCMDHead({
              error: Error()
            }), GlobalCMDHead) : GlobalCMDHead).CLIENT_COMMAND_LOGOUT_IN_GAME,
            body: null
          };
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_SEND_MSG, sendMsg);
        }
        /** 请求:玩家确定要退出房间 */


        reqLogOutInGame(event) {
          if (event === void 0) {
            event = null;
          }

          var sendMsg = {
            cmd: (_crd && GlobalCMDHead === void 0 ? (_reportPossibleCrUseOfGlobalCMDHead({
              error: Error()
            }), GlobalCMDHead) : GlobalCMDHead).ROOM_SEND_LOGOUT,
            body: null
          };
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_SEND_MSG, sendMsg);
        }
        /** 强制踢人 */


        reqLogOutInGameForce(event) {
          if (event === void 0) {
            event = null;
          }

          if ((_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
            error: Error()
          }), GCache) : GCache).User.isLoginSuccesed() == false || (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
            error: Error()
          }), GCache) : GCache).User.LoginRoomState == false) {
            //退出游戏场景
            this.detailExitGame(false);
            return;
          }

          if (!this._deskCache) {
            return;
          }

          this.reqLogOutInGame();
        }
        /** 响应:玩家请求中途退出游戏 */


        respTryLogOutInGame(event, respData) {
          if (event === void 0) {
            event = null;
          }

          if (respData === void 0) {
            respData = null;
          }

          console.log(respData, "玩家请求中途退出游戏==>");
        }
        /**广播: 表情 */


        receiveGameUserFace(event, respData) {
          if (event === void 0) {
            event = null;
          }

          if (respData === void 0) {
            respData = null;
          }

          this.dump(respData, "有玩家发表情了==>");
        }
        /**广播: 聊天 */


        receiveGameUserChat(event, respData) {
          if (event === void 0) {
            event = null;
          }

          if (respData === void 0) {
            respData = null;
          }

          this.dump(respData, "有玩家发聊天消息了==>");
        }
        /** 请求:玩家请求托管或取消托管 */


        reqGamePlayerAI(event, state) {
          if (event === void 0) {
            event = null;
          }

          //0表示取消托管，非0表示托管
          state = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).number_valueOf(state, 0);
          var sendMsg = {
            cmd: (_crd && GlobalCMDHead === void 0 ? (_reportPossibleCrUseOfGlobalCMDHead({
              error: Error()
            }), GlobalCMDHead) : GlobalCMDHead).CLIENT_COMMAND_REQUEST_AI,
            body: {
              ai: state
            }
          };
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_SEND_MSG, sendMsg);
        }
        /** 广播:玩家托管 */


        receiveGamePlayerAI(event, respData) {
          if (event === void 0) {
            event = null;
          }

          if (respData === void 0) {
            respData = null;
          }
        }
        /** 广播: 收到升降场信息 **/


        receiveRoomLevelUp(event, respData) {
          if (event === void 0) {
            event = null;
          }

          if (respData === void 0) {
            respData = null;
          }

          this.dump(respData, "广播:收到升降场信息==>");
        }
        /** 请求：换桌 */


        reqGameChangeTable(event, isNeedLogout) {
          if (event === void 0) {
            event = null;
          }

          if (isNeedLogout === void 0) {
            isNeedLogout = false;
          }

          var sendMsg = {
            cmd: (_crd && GlobalCMDHead === void 0 ? (_reportPossibleCrUseOfGlobalCMDHead({
              error: Error()
            }), GlobalCMDHead) : GlobalCMDHead).CLIENT_COMMAND_CHANGE_TABLE,
            body: {}
          };
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_SEND_MSG, sendMsg);
        }
        /** 返回：换桌失败 */


        receiveChangeTableError(event, respData) {
          if (event === void 0) {
            event = null;
          }

          if (respData === void 0) {
            respData = null;
          }

          this.dump(respData, "返回：换桌失败==>");
        }
        /** 房间状态改变 */


        receiveRoomStateChange(event, currowRoomState, param) {
          if (event === void 0) {
            event = null;
          }

          if (param === void 0) {
            param = null;
          }

          if (this._deskCache && currowRoomState != null) {
            this.print("房间状态改变>>>: 上一个:", this._deskCache.getRoomStates(), " 更新为:", currowRoomState);

            this._deskCache.setRoomStates(currowRoomState);

            var roomState = this._deskCache.getRoomStates();

            switch (roomState) {
              case (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
                error: Error()
              }), GConstants) : GConstants).GameRoomState.STATUS_NORMAL:
                //开始匹配
                var isReconnected = false;

                if (this._intoGameData && (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                  error: Error()
                }), Utils) : Utils).number_valueOf(this._intoGameData.TableID) > 0) {
                  isReconnected = true;
                }

                this.startShowMathChing(isReconnected);
                break;

              case (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
                error: Error()
              }), GConstants) : GConstants).GameRoomState.STATUS_READY:
                //开始显示准备状态
                this.startShowReady(param);
                break;

              case (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
                error: Error()
              }), GConstants) : GConstants).GameRoomState.STATUS_START:
                //请求破产礼包的配置
                (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
                  error: Error()
                }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
                  error: Error()
                }), AppEvent) : AppEvent).NET_REQ_BANKRUPT_GIFT_CONF, this._deskCache.getCurGameID(), this._deskCache.getCurLevelID());
                break;

              case (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
                error: Error()
              }), GConstants) : GConstants).GameRoomState.STATUS_EXITSUCCESS:
                this.print("=======切换成结束状态:===");

                if (!this._deskCache) {
                  return;
                }

                this.startShowExitSuccess();
                /*
                this.print("是否在私人房间或比赛房间:", this._deskCache.isInMatchRoom(), this._deskCache.isInPrivateRoom());
                if (this._deskCache.isInMatchRoom() || this._deskCache.isInPrivateRoom()) {
                	return;
                }
                this.print("检查破产礼包===>>>>", GameRoomHelper.checkIsBankrupt(this._deskCache.getCurGameID(), this._deskCache.getCurLevelID()))
                	if (GameRoomHelper.checkIsBankrupt(this._deskCache.getCurGameID(), this._deskCache.getCurLevelID()) == true) {//破产了,弹出破产界面
                	this.print("破产结果: 破产了 弹出破产界面");
                	//检查破产礼包
                	GameRoomHelper.checkShowBankruptView(this._deskCache.getCurGameID(), this._deskCache.getCurLevelID(), this._deskCache.MoneyTypeID)
                	return;
                } else {
                	this.print("破产结果: 没有破产");
                }
                */

                break;

              default:
                break;
            }
          }
        }
        /** 破产结果通知 */


        receiveBankUpBack(event, isSuccess, param) {
          this.dump(param, "破产结果通知:===>" + isSuccess);
        } //开始匹配


        startShowMathChing(isReconn) {
          if (isReconn === void 0) {
            isReconn = false;
          }
        } //开始显示准备


        startShowReady(param) {
          if (param === void 0) {
            param = null;
          }
        } //开始显示退出成功


        startShowExitSuccess(param) {
          if (param === void 0) {
            param = null;
          }
        }
        /** 延迟退出游戏 */


        detailExitGame(isDetail) {
          if (isDetail === void 0) {
            isDetail = true;
          }

          if (isDetail) {
            this.StopCountTime();
            this.stopAllScheduler();
            this.addScheduler(2, () => {
              this.StopCountTime();
              this.stopAllScheduler();

              if (this._gameValid == true) {
                (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
                  error: Error()
                }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
                  error: Error()
                }), AppEvent) : AppEvent).GAME_GOTO_EXIT);
              }
            });
          } else {
            if (this._gameValid == true) {
              this.StopCountTime();
              (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
                error: Error()
              }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
                error: Error()
              }), AppEvent) : AppEvent).GAME_GOTO_EXIT);
            }
          }
        }
        /**
         * 开始一个倒计时
         * @param key 关键字
         * @param maxTime 最大时间
         * @param updateCallback 更新回调
         * @param stopCallback 停止回调
         * @param isClearAll 是否先关闭所有 停止回调
         */


        StartCountTime(key, maxTime, updateCallback, stopCallback, isClearAll) {
          if (isClearAll === void 0) {
            isClearAll = false;
          }

          if (!key) {
            return;
          }

          if (isClearAll) {
            this.StopCountTime();
          }

          var countTime = this._handlerCountTimeMap.get(key);

          if (!countTime) {
            countTime = new (_crd && CountTime === void 0 ? (_reportPossibleCrUseOfCountTime({
              error: Error()
            }), CountTime) : CountTime)();
          }

          countTime.EndTime = 0;
          countTime.StartTime = maxTime;
          countTime.UpdateCallback = updateCallback;
          countTime.StopCallback = stopCallback;
          countTime.CallbackParam = key;

          this._handlerCountTimeMap.set(key, countTime);

          countTime.Start();
        }
        /** 停止一个倒计时(不传则停止所有) */


        StopCountTime(key) {
          if (key === void 0) {
            key = null;
          }

          if (!key) {
            this._handlerCountTimeMap.forEach(countTime => {
              countTime.Stop();
            });

            return;
          }

          var countTime = this._handlerCountTimeMap.get(key);

          if (countTime) {
            countTime.Stop();
          }
        }
        /** 检测倒计时的开启关闭状态*/


        CheckCountTimeState(key) {
          if (!key) {
            return false;
          }

          var countTime = this._handlerCountTimeMap.get(key);

          if (countTime) {
            return countTime.isStart();
          }

          return false;
        }
        /** 显示破产界面 */


        showBankUpView(event) {
          var isInMatchRoom = (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
            error: Error()
          }), GCache) : GCache).Desk.isInMatchRoom();
          var isInPrivateRoom = (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
            error: Error()
          }), GCache) : GCache).Desk.isInPrivateRoom();

          if (isInMatchRoom || isInPrivateRoom) {
            //此处要重新开启socket
            return;
          }
        }

        clear() {
          super.clear();
          this._gameValid = false;
          this._deskCache = null;
        }

      });

      RoomController._instance = null;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=433f6fab17e4d2668fb1e82ae9437b043579690b.js.map