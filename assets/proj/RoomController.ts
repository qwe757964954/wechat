/**
 * Name = RoomController
 * URL = db://assets/proj/RoomController.ts
 * Time = Fri Jun 17 2022 15:51:55 GMT+0800 (中国标准时间)
 * Author = xueya
 * 游戏控制器的基类 通用游戏事件（此类存在的前提是:游戏场景已存在）
 * 房间控制器的生命周期: constructor -> onInitModuleEvent -> onInit ->clear
 * 附属场景的生命周期: onViewLoad->onViewStart->onViewDestroy
 */

import { Desk } from "../cache/Desk";
import { GCache } from "../cache/GCache";
import { AppEvent } from "../config/AppEvent";
import { ClientInfo } from "../config/GameConfig";
import { GConstants } from "../config/GameConstant";
import { GameTxt } from "../config/GameTxt";
import { Encrypt } from "../framework/crypto/Encrypto";
import { CountTime } from "../framework/extend/CountTime";
import { inf_GameIntoParams } from "../framework/InterfaceDefines";
import { EventManager } from "../framework/manager/EventManager";
import { Utils } from "../framework/Utils";
import { BaseControll } from "../framework/vc/BaseController";
import { GameRoomHelper } from "./GameRoomHelper";
import { GlobalCMDHead } from "./gnet/GlobalCMD";

export class RoomController extends BaseControll {
	protected _className = "";
	/**当前使用的桌子缓存数据 */
	protected _deskCache: Desk = null;
	/**重连时资源延时加载时间 秒 */
	protected _reconnResLoadTime = 3;
	/**重连时加载定时器句柄 */
	protected _handlerReconnResLoad = null;

	/** 游戏场景是否被激活 */
	protected _gameValid: boolean = false;
	/**发送登录请求超时的超时检测句柄 */
	protected _handlerTimeOutLoginGame = null;
	/**发送登录次数最大的次数 */
	protected _sendLoginMaxCount = 2;
	/**当前发送登录请求的次数 */
	protected _sendLoginCurrowNum = 0;

	/**发送登录请求超时的时间 */
	protected _sendLoginTimeout = 15;
	/**请求登录时发送的数据 */
	protected _sendLoginData = null;
	/** 是否重连 */
	protected _isReconn: boolean = false;

	/** 是否退出游戏 */
	protected _isExitsGame: boolean = false;

	/**进入房间发送的参数 */
	protected _intoGameData: inf_GameIntoParams = null;
	/** 游戏内倒计时的句柄队列 */
	protected _handlerCountTimeMap: Map<string, CountTime> = new Map();

	/** 中途退出房间的数据 */
	protected _halfwayExitRoomData = null;

	protected static _instance = null;
	//实例化
	constructor(name: string) {
		super(name);
		this._className = name;
		this._intoGameData = GCache.SelectGame?.intoGameData;
		GameRoomHelper.intoRoomInit();
		this.onInit();

	};

	/**初始化添加事件绑定 */
	protected onInitModuleEvent(): void {
		/************************登录相关************************/
		//房间界面再次加载(一般用于重连)
		this.addModelListener(AppEvent.ROOM_VIEW_ONLOAD, this.onViewLoad)

		//登录游戏房间(一键或重连)
		this.addModelListener(AppEvent.NET_REQ_ROOM_LOGIN, this.reqEnterGameLogin)
		//开启检测登录超时
		this.addModelListener(AppEvent.NET_CHECK_OUT_TIME_ROOM_JOIN, this.loginRoomOutTime)
		//停止检测登录超时
		this.addModelListener(AppEvent.NET_STOP_CHECK_OUT_TIME_ROOM_JOIN, this.stopcheckLoginCheckTimeOut)

		//游戏房间登录成功
		this.addModelListener(AppEvent.NET_RECEIVE_GAME_LOGIN_SUCCESS, this.receiveLoginRoomSuccess)
		//游戏房间重连成功
		this.addModelListener(AppEvent.NET_RECEIVE_GAME_RECONNECT_SUCCESS, this.receiveReConnectSuccess)
		//广播:游戏结束
		// this.addModelListener(AppEvent.BROADCAST_GAME_OVER, this.receiveGameOver)
		// //广播:游戏开始
		// this.addModelListener(AppEvent.BROADCAST_GAME_START, this.receiveGameStart)
		//游戏房间登录失败
		this.addModelListener(AppEvent.NET_RECEIVE_GAME_LOGIN_FAIL, this.receiveLoginRoomFail)
		//下发房间信息
		this.addModelListener(AppEvent.NET_RECEIVE_GAME_ROOM_INFO, this.receiveRoomInfo)
		//server通知准备相关信息
		this.addModelListener(AppEvent.NET_RECEIVE_GAME_READY_INFO, this.receiveReadyInfo)
		//请求:玩家准备请求
		this.addModelListener(AppEvent.NET_REQ_PLAYER_READY, this.reqPlayerReady)
		//广播:玩家准备
		this.addModelListener(AppEvent.NET_RECEIVE_GAME_PLAYER_READY, this.receivePlayerReady)
		//广播:玩家进入
		// this.addModelListener(AppEvent.NET_RECEIVE_GAME_PLAYER_INTO, this.receivePlayerInto)
		//广播:玩家退出
		this.addModelListener(AppEvent.NET_RECEIVE_GAME_PLAYER_LOGOUT, this.receivePlayerLogOut)

		//请求:玩家请求退出
		this.addModelListener(AppEvent.NET_REQ_LOGOUT_IN_GAME_TRY, this.reqTryLogOutInGame)
		//响应:Server回应退出请求(游戏中退出)
		this.addModelListener(AppEvent.NET_RESP_LOGOUT_IN_GAME, this.respTryLogOutInGame)
		//请求:玩家确定要退出房间
		this.addModelListener(AppEvent.NET_REQ_LOGOUT_IN_GAME, this.reqLogOutInGame)
		//请求:玩家确定要退出房间
		this.addModelListener(AppEvent.NET_REQ_LOGOUT_IN_GAME_FORCE, this.reqLogOutInGameForce)
		//退出游戏房间成功
		this.addModelListener(AppEvent.NET_RECEIVE_GAME_EXIT_ROOM_SUCCESS, this.receiveExitRoomSuccess)
		//广播:游戏强制结束（游戏中有玩家退出）
		this.addModelListener(AppEvent.NET_RECEIVE_GAME_STOP_PLAYING, this.receiveStopPlaying)

		/************************其它相关************************/
		//广播:表情
		this.addModelListener(AppEvent.NET_RECEIVE_GAME_USER_FACE, this.receiveGameUserFace)
		//广播:聊天
		this.addModelListener(AppEvent.NET_RECEIVE_GAME_USER_CHAT, this.receiveGameUserChat)
		//请求:玩家请求托管或取消托管
		this.addModelListener(AppEvent.NET_REQ_GAME_USER_AI, this.reqGamePlayerAI)
		//广播:玩家托管
		this.addModelListener(AppEvent.NET_RECEIVE_GAME_PLAYER_AI, this.receiveGamePlayerAI)

		//广播:升降场信息
		this.addModelListener(AppEvent.NET_RECEIVE_ROOM_LEVEL_UP, this.receiveRoomLevelUp)

		//请求:换桌
		this.addModelListener(AppEvent.NET_REQ_GAME_CHANGE_DESK, this.reqGameChangeTable)
		//广播:换桌失败
		this.addModelListener(AppEvent.NET_RECEIVE_GAME_CHANGE_DESK_ERROR, this.receiveChangeTableError)
		//房间状态有改变
		this.addModelListener(AppEvent.GAME_ROOM_STATE_CHANGE, this.receiveRoomStateChange)
		//破产结果通知
		this.addModelListener(AppEvent.ACTIVITY_BANKUP_BACK, this.receiveBankUpBack)
		
	}

	/** override:下发给个控制器做一些专属操作 */
	protected onInit(): void {

	}
	protected receiveGameOver(){
		
	}

	protected receiveGameStart(){
		
	}
	/** override:场景加载/界面强制重新刷新 */
	public onViewLoad(event = null): void {
		this._gameValid = true;
		this._intoGameData = GCache.SelectGame?.intoGameData;
		if (this._intoGameData) {
			if (GCache.User.LoginRoomState != true) {
				this._sendLoginCurrowNum = 0;

				if (this._handlerReconnResLoad) {
					this.stopScheduler(this._handlerReconnResLoad);
					this._handlerReconnResLoad = null;
				}
				/** 界面是否已经存在了 */
				let isHaveView = (event != null);
				if (this._intoGameData.isReconn == true) {
					/** 重连 */
					this.__reConnection(isHaveView);
				} else { /** 推荐入场 */
					this.__connection(isHaveView);
				}
			}
		}
	}
	/** 重连加载界面 */
	private __reConnection(isHaveView: boolean = false) {
		this.print("重新连接，游戏场景状态:" + `${isHaveView == true ? "存在" : "不存在"}`)
		//--重连--
		this._isReconn = true;
		this.stopScheduler(this._handlerReconnResLoad);
		this._handlerReconnResLoad = null;

		if (isHaveView == false) {
			//重连时先预加载资源
			EventManager.dispatch(AppEvent.GAME_RECONNECT_RESLOAD);
			//吐司:场景加载中
			EventManager.dispatch(AppEvent.SYS_TOAST_TIP, { content: GameTxt.login_goto_room });

			this._handlerReconnResLoad = this.addScheduler(this._reconnResLoadTime, () => {
				this.stopScheduler(this._handlerReconnResLoad);
				this._handlerReconnResLoad = null;
				//清空本次登录请求数据
				this._sendLoginData = null;
				//发送登录请求
				EventManager.dispatch(AppEvent.NET_REQ_ROOM_LOGIN);
			})
		} else {
			this.stopScheduler(this._handlerReconnResLoad);
			this._handlerReconnResLoad = null;
			//清空本次登录请求数据
			this._sendLoginData = null;
			//发送登录请求
			EventManager.dispatch(AppEvent.NET_REQ_ROOM_LOGIN);
		}
	}
	/** 正常连接 */
	private __connection(isHaveView: boolean = false) {
		this.print("推荐入场，游戏场景状态:" + `${isHaveView == true ? "存在" : "不存在"}`)
		//--非重连--
		this._isReconn = false;
		this.stopScheduler(this._handlerReconnResLoad);
		this._handlerReconnResLoad = null;

		if (isHaveView == false) {
			//吐司:场景加载中
			EventManager.dispatch(AppEvent.SYS_TOAST_TIP, { content: GameTxt.login_goto_room });
			// this._handlerReconnResLoad = this.addScheduler(this._reconnResLoadTime, () => {
			// 	this.stopScheduler(this._handlerReconnResLoad);
			// 	this._handlerReconnResLoad = null;
			// 	//清空本次登录请求数据
			// 	this._sendLoginData = null;
			// 	//发送登录请求
			// 	EventManager.dispatch(AppEvent.NET_REQ_ROOM_LOGIN);
			// })
		}
		//清空本次登录请求数据
		this._sendLoginData = null;
		//发送登录请求
		EventManager.dispatch(AppEvent.NET_REQ_ROOM_LOGIN);
	}

	/** override:场景显示 */
	public onViewStart(): void {
	}
	/** override:游戏场景被销毁 */
	public onViewDestroy(): void {
	}
	/** 重置登录请求数据为登录非重连 */
	protected resetIntoGameDataToLogin(event = null) {
		if (GCache.SelectGame.intoGameData) {
			GCache.SelectGame.intoGameData.TableID = 0;
		}
		if (this._intoGameData) {
			this._intoGameData.TableID = 0;

		}
	}

	/** 请求登录进入房间 */
	protected reqEnterGameLogin(event = null) {
		if (GCache.User.LoginRoomState == true) {
			this.print("Error:已经登录成功了，不需要再次登录")
			return;
		}
		this.stopcheckLoginCheckTimeOut();
		this.StopCountTime();
		if (this._sendLoginCurrowNum >= this._sendLoginMaxCount) {
			this.print("Error:超出登录的最大次数 直接退出游戏场景")
			EventManager.dispatch(AppEvent.SYS_TOAST_TIP, { content: GameTxt.hall_goto_game_out_time })
			this.detailExitGame();
			return;
		}
		if (!this._intoGameData) {
			this.print("Error:进入房间的缓存参数有误 直接退出游戏场景")
			this.detailExitGame(false);
			return;
		}
		this.print("请求登录进入房间===>当前登录次数:" + this._sendLoginCurrowNum)

		let gameID = Utils.number_valueOf(this._intoGameData.GameID, 0)
		let roomLevel = Utils.number_valueOf(this._intoGameData.Level, 0)
		let tableID = Utils.number_valueOf(this._intoGameData.TableID, 0);

		if (gameID <= 0) {
			EventManager.dispatch(AppEvent.SYS_TOAST_TIP, { content: GameTxt.hall_goto_game_no_gameid })
			this.detailExitGame();
			return
		}
		//先请求更新子游戏场次信息
		EventManager.dispatch(AppEvent.NET_REQ_GAME_LEVEL_ROOM_TAB, gameID, 1)
		//登录时请求的数据
		let loginParam = null;
		//登录发送的数据
		let loginSendCMD = null;
		//吐司文本
		let tips_txt = null;

		if (tableID > 0) {
			this.print(`请求重连进入游戏房间 gameID = ${gameID} roomLevel = ${roomLevel} tableID = ${tableID}`);
			let infoData = {
				version: ClientInfo.AppVer,
				api: 1,
			};
			loginParam = {
				mid: GCache.User.getUserMid(),
				roomId: tableID,
				userInfo: GCache.User.getUserLoginInfoByIntoGame(gameID),
				key: "55ff85e777d50680fb52935076d7e55b",
				plateInfo: Encrypt.JsonEncode2(infoData),
			}
			loginSendCMD = GlobalCMDHead.ROOM_SEND_LOGIN;

			tips_txt = GameTxt.login_room_reconnect;
		} else {
			this.print(`请求一键进入游戏房间 gameID = ${gameID} roomLevel = ${roomLevel} tableID = ${tableID}`);
			let roomData = null;
			if (roomLevel == 0) {
				roomData = GCache.SelectGame.getGameLevelRoomMinMoney(gameID)
			} else {
				roomData = GCache.SelectGame.getGameRoomInfoByRoomLevelID(gameID, roomLevel)
			}
			roomData = Utils.table_verify(roomData)

			let moneyId = Utils.number_valueOf(roomData["base_chip_type"])
			let minMoney = Utils.number_valueOf(roomData["min_money"])
			let currowMoney = Utils.number_valueOf(GCache.User.getUserMoneyByID(moneyId))

			loginParam = {
				gameId: gameID,
				levelId: roomLevel,
				userInfo: GCache.User.getUserLoginInfoByIntoGame(gameID),
				key: "55ff85e777d50680fb52935076d7e55b",
				flag: 1,
				changeTableType: 0,  //1或者0
				extParam: {},
				gameVersion: Utils.number_valueOf(GCache.SelectGame.getGameVersionByGameID(gameID)),      //游戏版本号
				playType: Utils.number_valueOf(roomData["play_mode"]),        //玩法类型
				propertyId: moneyId,  //货币类型：0银币，1元宝
			}
			loginSendCMD = GlobalCMDHead.ROOM_LOGIN_GAME_ONE_KEY;

			if (currowMoney < minMoney) {
				//触发降场
				console.warn("应该触发降场,但是并未处理")
				// return
			}
		}
		//吐司:重连独有
		EventManager.dispatch(AppEvent.SYS_TOAST_TIP, { content: tips_txt });
		//显示网络loading
		EventManager.dispatch(AppEvent.SYS_SHOW_NETLOADING);
		//保存请求登录时的数据
		this._sendLoginData = loginParam;
		//登录次数计次
		this._sendLoginCurrowNum = this._sendLoginCurrowNum + 1;

		let sendMsg = {
			cmd: loginSendCMD,
			body: this._sendLoginData,
		}
		//先修改心跳间隔
		EventManager.dispatch(AppEvent.SYS_UPDATE_HEART_TIME, 6000)
		//请求命令
		EventManager.dispatch(AppEvent.NET_SEND_MSG, sendMsg)
		//开启超时检测
		this.stopcheckLoginCheckTimeOut()
		this._handlerTimeOutLoginGame = this.addScheduler(this._sendLoginTimeout, () => {
			//开启登录超时检测
			EventManager.dispatch(AppEvent.NET_CHECK_OUT_TIME_ROOM_JOIN)
		})

	}
	/** 停止检测登录房间超时 */
	protected stopcheckLoginCheckTimeOut(event = null) {
		this.stopScheduler(this._handlerTimeOutLoginGame)
		this._handlerTimeOutLoginGame = null;
	}
	/** 登录游戏房间超时 */
	private loginRoomOutTime(event = null) {
		if (!this._handlerTimeOutLoginGame) {
			return
		}
		this.print("请求登录超时" + this._sendLoginCurrowNum);
		this.stopcheckLoginCheckTimeOut()
		if (this._sendLoginCurrowNum >= this._sendLoginMaxCount) {
			this.print("Error:超出登录的最大次数 直接退出游戏场景")
			//关闭网络loading
			EventManager.dispatch(AppEvent.SYS_CLOSE_NETLOADING);
			//修改心跳间隔
			EventManager.dispatch(AppEvent.SYS_UPDATE_HEART_TIME, 10000)
			EventManager.dispatch(AppEvent.SYS_TOAST_TIP, { content: GameTxt.hall_goto_game_out_time })
			this.detailExitGame();
			return;
		}
		if (GCache.User.LoginRoomState != true) {
			//发送登录请求
			EventManager.dispatch(AppEvent.NET_REQ_ROOM_LOGIN)
		}
	}
	/** 房间登录成功 */
	protected receiveLoginRoomSuccess(event = null, respData = null) {
		this.dump(respData, "房间登录成功==>")
		this._isExitsGame = false;
		//关闭网络loading
		EventManager.dispatch(AppEvent.SYS_CLOSE_NETLOADING);
		//重置登录次数
		this._sendLoginCurrowNum = 0;
		//更新用户登录游戏房间的状态
		GCache.User.LoginRoomState = true;
		//停止检测进房超时
		EventManager.dispatch(AppEvent.NET_STOP_CHECK_OUT_TIME_ROOM_JOIN)
		//重置中途退出的数据
		this._halfwayExitRoomData = null;

		//请求等级配置
		EventManager.dispatch(AppEvent.NET_REQ_LEVEL_MODEL_CONFIG);
		//请求道具信息
		EventManager.dispatch(AppEvent.NET_REQ_PROPS_INFO);
		//请求大厅游戏配置
		EventManager.dispatch(AppEvent.NET_REQ_HALL_GAME_CONFIG);
		//请求游戏房间信息
		EventManager.dispatch(AppEvent.NET_REQ_GAME_LEVEL_ROOM_TAB, this._intoGameData.GameID);
		//请求破产配置
		EventManager.dispatch(AppEvent.NET_REQ_BANKRUPT_CONFIG);
		
		if (this._deskCache) {
			// this._deskCache.resertPlayer();
			this._deskCache.canExitGame = true;
			// this._deskCache.setCurGameID(this._intoGameData.GameID);
		}
	}
	/** 房间重连成功 */
	protected receiveReConnectSuccess(event = null, respData = null) {
		this.dump(respData, "房间重连成功==>")
		//关闭网络loading
		EventManager.dispatch(AppEvent.SYS_CLOSE_NETLOADING);
		//吐司:重连成功
		EventManager.dispatch(AppEvent.SYS_TOAST_TIP, { content: GameTxt.login_reconnect_success });
		//重置登录次数
		this._sendLoginCurrowNum = 0;
		//更新用户登录游戏房间的状态
		GCache.User.LoginRoomState = true;
		//停止检测进房超时
		EventManager.dispatch(AppEvent.NET_STOP_CHECK_OUT_TIME_ROOM_JOIN);
		//重置中途退出的数据
		this._halfwayExitRoomData = null;

		//请求等级配置
		EventManager.dispatch(AppEvent.NET_REQ_LEVEL_MODEL_CONFIG);
		//请求道具信息
		EventManager.dispatch(AppEvent.NET_REQ_PROPS_INFO);
		//请求大厅游戏配置
		EventManager.dispatch(AppEvent.NET_REQ_HALL_GAME_CONFIG);
		//请求游戏房间信息
		EventManager.dispatch(AppEvent.NET_REQ_GAME_LEVEL_ROOM_TAB, this._intoGameData.GameID);
		//请求破产配置
		EventManager.dispatch(AppEvent.NET_REQ_BANKRUPT_CONFIG);

		if (this._deskCache) {
			// PlayerMgr.getInstance().resertPlayer();
			this._deskCache.canExitGame = true;
			this._deskCache.MoneyTypeID = this._sendLoginData["propertyId"];
			// this._deskCache.setCurGameID(this._intoGameData.GameID);
		}

	}
	/** 游戏房间登录失败 */
	protected receiveLoginRoomFail(event = null, respData = null) {
		this.dump(respData, "游戏房间登录失败==>" + this._sendLoginCurrowNum)
		//更新用户登录游戏房间的状态
		GCache.User.LoginRoomState = false;
		if (this._sendLoginCurrowNum >= this._sendLoginMaxCount) {
			//关闭网络loading
			EventManager.dispatch(AppEvent.SYS_CLOSE_NETLOADING);
		}
		//发送登录请求
		EventManager.dispatch(AppEvent.NET_REQ_ROOM_LOGIN)
	}
	/** 下发房间信息 */
	protected receiveRoomInfo(event = null, respData = null) {
		this._deskCache.updateRoomInfo(respData);
		this.dump(this._deskCache.getRoomInfo(), "下发房间信息==>")
	}
	/** server通知准备相关信息 */
	protected receiveReadyInfo(event = null, respData = null) {
		this.dump(respData, "server通知准备相关信息==>")
		if (respData) {
			if (this._deskCache) {
				this._deskCache.readyTime = respData["readyTime"];
			}
		}
		// //更新房间状态
		// EventManager.dispatch(AppEvent.GAME_ROOM_STATE_CHANGE, GConstants.GameRoomState.STATUS_READY);
		// //请求破产配置
		// EventManager.dispatch(AppEvent.NET_REQ_BANKRUPT_CONFIG);
	}

	/** 请求:玩家请求准备 */
	protected reqPlayerReady(event = null) {
		// this.print("请求:玩家请求准备====>")
		let sendMsg = {
			cmd: GlobalCMDHead.USER_READY_REQUEST,
			body: null,
		}
		EventManager.dispatch(AppEvent.NET_SEND_MSG, sendMsg)
	}
	/** 广播:玩家准备 */
	protected receivePlayerReady(event = null, respData = null) {
		if (respData) {
			if (respData["userId"] == GCache.User.getUserMid() && this._deskCache) {
				//更新房间状态
				EventManager.dispatch(AppEvent.GAME_ROOM_STATE_CHANGE, GConstants.GameRoomState.STATUS_READED);
			};
		};

	}

	// /** 广播:玩家进入 */
	// protected receivePlayerInto(event = null, respData = null) {
	// 	this.dump(respData, "广播:玩家进入==>")
	// }
	/** 广播:玩家退出 */
	protected receivePlayerLogOut(event = null, respData = null) {
	}
	/** 广播:退出游戏房间成功 */
	protected receiveExitRoomSuccess(event = null, respData = null) {
		this.dump(respData, "退出房间成功==>")
		
		this.resetIntoGameDataToLogin();
		//更新用户登录游戏房间的状态
		GCache.User.LoginRoomState = false;
		if (this._deskCache) {

			//更新房间状态
			EventManager.dispatch(AppEvent.GAME_ROOM_STATE_CHANGE, GConstants.GameRoomState.STATUS_EXITSUCCESS);

			this._deskCache.dumpPlayers()
			this._deskCache.dumpPlayersReadyState()
			if (this._deskCache.canExitGame == false) {
				return;
			}
		}
		//退出游戏场景
		if(this._isExitsGame){
			this.detailExitGame(false);
		}
		// 
	}
	/** 广播:中途退出房间 */
	protected receiveStopPlaying(event = null, respData = null) {
		this.dump(respData, "中途退出房间成功 强制结束游戏==>")
		this._halfwayExitRoomData = respData;
		//更新房间状态
		EventManager.dispatch(AppEvent.GAME_ROOM_STATE_CHANGE, GConstants.GameRoomState.STATUS_EXITSUCCESS);
	}

	/** 请求:玩家请求中途退出游戏 */
	protected reqTryLogOutInGame(event = null) {
		let sendMsg = {
			cmd: GlobalCMDHead.CLIENT_COMMAND_LOGOUT_IN_GAME,
			body: null,
		}
		EventManager.dispatch(AppEvent.NET_SEND_MSG, sendMsg)
	}
	/** 请求:玩家确定要退出房间 */
	protected reqLogOutInGame(event = null) {
		let sendMsg = {
			cmd: GlobalCMDHead.ROOM_SEND_LOGOUT,
			body: null,
		}
		EventManager.dispatch(AppEvent.NET_SEND_MSG, sendMsg)
		this._isExitsGame = true;
	}
	/** 强制踢人 */
	protected reqLogOutInGameForce(event = null) {
		if (GCache.User.isLoginSuccesed() == false || GCache.User.LoginRoomState == false) {
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
	protected respTryLogOutInGame(event = null, respData = null) {
		console.log(respData, "玩家请求中途退出游戏==>")
	}

	/**广播: 表情 */
	protected receiveGameUserFace(event = null, respData = null) {
		this.dump(respData, "有玩家发表情了==>")
	}
	/**广播: 聊天 */
	protected receiveGameUserChat(event = null, respData = null) {
		this.dump(respData, "有玩家发聊天消息了==>")
	}
	/** 请求:玩家请求托管或取消托管 */
	protected reqGamePlayerAI(event = null, state: number) {
		//0表示取消托管，非0表示托管
		state = Utils.number_valueOf(state, 0)
		let sendMsg = {
			cmd: GlobalCMDHead.CLIENT_COMMAND_REQUEST_AI,
			body: { ai: state },
		}
		EventManager.dispatch(AppEvent.NET_SEND_MSG, sendMsg)
	}
	/** 广播:玩家托管 */
	protected receiveGamePlayerAI(event = null, respData = null) {
		
	}

	/** 广播: 收到升降场信息 **/
	protected receiveRoomLevelUp(event = null, respData = null) {
		this.dump(respData, "广播:收到升降场信息==>")
	}
	/** 请求：换桌 */
	protected reqGameChangeTable(event = null, isNeedLogout: boolean = false) {
		let sendMsg = {
			cmd: GlobalCMDHead.CLIENT_COMMAND_CHANGE_TABLE,
			body: {},
		}
		EventManager.dispatch(AppEvent.NET_SEND_MSG, sendMsg)
	}
	/** 返回：换桌失败 */
	protected receiveChangeTableError(event = null, respData = null) {
		this.dump(respData, "返回：换桌失败==>")
	}
	/** 房间状态改变 */
	protected receiveRoomStateChange(event = null, currowRoomState, param = null) {
		if (this._deskCache && currowRoomState != null) {
			this.print("房间状态改变>>>: 上一个:", this._deskCache.getRoomStates(), " 更新为:", currowRoomState)
			this._deskCache.setRoomStates(currowRoomState)
			let roomState = this._deskCache.getRoomStates();
			switch (roomState) {
				case GConstants.GameRoomState.STATUS_NORMAL://开始匹配
					let isReconnected = false;
					if (this._intoGameData && Utils.number_valueOf(this._intoGameData.TableID) > 0) {
						isReconnected = true;
					}
					this.startShowMathChing(isReconnected);
					break;
				case GConstants.GameRoomState.STATUS_READY://开始显示准备状态
					this.startShowReady(param);
					break;
				case GConstants.GameRoomState.STATUS_START:
					//请求破产礼包的配置
					EventManager.dispatch(AppEvent.NET_REQ_BANKRUPT_GIFT_CONF, this._deskCache.getCurGameID(), this._deskCache.getCurLevelID());
					break;

				case GConstants.GameRoomState.STATUS_EXITSUCCESS:
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
	protected receiveBankUpBack(event, isSuccess, param) {
		this.dump(param, "破产结果通知:===>" + isSuccess)
	}
	//开始匹配
	protected startShowMathChing(isReconn: boolean = false) {

	}
	//开始显示准备
	protected startShowReady(param = null) {

	}
	//开始显示退出成功
	protected startShowExitSuccess(param = null) {

	}


	/** 延迟退出游戏 */
	protected detailExitGame(isDetail: boolean = true) {
		if (isDetail) {
			this.StopCountTime();
			this.stopAllScheduler();
			this.addScheduler(2, () => {
				this.StopCountTime();
				this.stopAllScheduler();
				if (this._gameValid == true) {
					EventManager.dispatch(AppEvent.GAME_GOTO_EXIT);
				}
			})
		} else {
			if (this._gameValid == true) {
				this.StopCountTime();
				EventManager.dispatch(AppEvent.GAME_GOTO_EXIT);
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
	protected StartCountTime(key, maxTime, updateCallback, stopCallback, isClearAll = false) {
		if (!key) {
			return;
		}
		if (isClearAll) {
			this.StopCountTime();
		}
		let countTime = this._handlerCountTimeMap.get(key);
		if (!countTime) {
			countTime = new CountTime();
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
	protected StopCountTime(key = null) {
		if (!key) {
			this._handlerCountTimeMap.forEach((countTime) => {
				countTime.Stop();
			});
			return;
		}
		let countTime = this._handlerCountTimeMap.get(key);
		if (countTime) {
			countTime.Stop();
		}
	}
	/** 检测倒计时的开启关闭状态*/
	public CheckCountTimeState(key): boolean {
		if (!key) {
			return false;
		}
		let countTime = this._handlerCountTimeMap.get(key);
		if (countTime) {
			return countTime.isStart();
		}
		return false;
	}

	/** 显示破产界面 */
	protected showBankUpView(event) {
		let isInMatchRoom = GCache.Desk.isInMatchRoom();
		let isInPrivateRoom = GCache.Desk.isInPrivateRoom();
		if (isInMatchRoom || isInPrivateRoom) {
			//此处要重新开启socket
			return;
		}
	}
	public clear() {
		super.clear();
		this._gameValid = false;
		this._deskCache = null;
	}
}

