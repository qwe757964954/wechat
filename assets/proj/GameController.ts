/**
 * Name = GameController
 * URL = db://assets/proj/GameController.ts
 * Time = Fri Apr 29 2022 14:08:39 GMT+0800 (中国标准时间)
 * Author = xueya
 * 游戏控制器
 */
import { GCache } from "../cache/GCache";
import { AppEvent } from "../config/AppEvent";
import { GConstants } from "../config/GameConstant";
import { UIConfigData, UIID } from "../config/UIConfig";
import { LayerManager } from "../framework/layer/LayerManager";
import { EventManager } from "../framework/manager/EventManager";
import { Utils } from "../framework/Utils";
import { BaseControll } from "../framework/vc/BaseController";
import { GlobalCMD, GlobalHeadCmdBinding } from "./gnet/GlobalCMD";
import { GPBWriteAndRead } from "./gnet/GPBWriteAndRead";


export class GameController extends BaseControll {
	//上报游戏版本记录
	_reportGameVerRecord = {};

	private static _instance = null;
	public static getInstance(): GameController {
		if (!this._instance || this._instance == null) {
			this._instance = new GameController("GameController");
		}
		return this._instance;
	}
	public static init(): GameController {
		if (this._instance) {
			this._instance.clear()
		}
		this._instance = null
		GameController.getInstance()
		return
	}
	/**初始化添加事件绑定 */
	protected onInitModuleEvent(): void {
		//显示游戏场景
		this.addModelListener(AppEvent.GAME_GOTO_SHOW, this.showGame)
		//退出游戏场景
		this.addModelListener(AppEvent.GAME_GOTO_EXIT, this.exitGame)
		//请求玩家玩某个游戏的信息
		this.addModelListener(AppEvent.NET_REQ_GAME_PLAY_INFO, this.reqGamePlayInfo);
		//玩家玩某个游戏的信息返回
		this.addModelListener(AppEvent.NET_RECEIVE_GAME_PLAY_INFO, this.respGamePlayInfo);

		//请求上报子游戏版本号
		this.addModelListener(AppEvent.NET_REQ_REPORT_GAME_VERSION, this.reqReportGameVer)

	}
	//显示游戏界面
	showGame(event) {
		//此处要判断用户是否登录成功
		if (GCache.User.isLoginSuccesed()) {
			// console.warn("是否正在加载:", LayerManager.isLoading(UIID.GameScenePrefab))
			if (!LayerManager.has(UIID.GameScenePrefab) && !LayerManager.isLoading(UIID.GameScenePrefab)) {
				//关闭网络加载
				EventManager.dispatch(AppEvent.SYS_CLOSE_NETLOADING);
				//初始化绑定绑定映射
				EventManager.dispatch(AppEvent.SYS_UPDATE_CMDMAPPING);
				GPBWriteAndRead.Write.initCommonCmd(GlobalHeadCmdBinding, true);
				GPBWriteAndRead.Read.initCommonCmd(GlobalHeadCmdBinding, true);
				EventManager.dispatch(AppEvent.SYS_PACKAGE_LOAD, GConstants.PkgLoaderTaskList.Game, () => {
					if (GCache.User.isLoginSuccesed() == false) {
						return;
					}
					if (LayerManager.has(UIID.GameScenePrefab) || LayerManager.isLoading(UIID.GameScenePrefab) == true) {
						return;
					}

					LayerManager.clearOther(UIConfigData[UIID.GameScenePrefab].layer);
					LayerManager.clear(UIConfigData[UIID.GameScenePrefab].layer);

					this.print("打开游戏场景===>")
					//通知:sys周期变化
					EventManager.dispatch(AppEvent.SYS_APP_LIFE, GConstants.AppRunLife.Game_Will_Open);
					EventManager.dispatch(AppEvent.VIEW_UI_OPEN, UIID.GameScenePrefab, null, {
						onAdded: function () {
							//通知:主场景更换
							EventManager.dispatch(AppEvent.VIEW_UI_MAIN_UPDATE, UIID.GameScenePrefab);
							//通知:sys周期变化
							EventManager.dispatch(AppEvent.SYS_APP_LIFE, GConstants.AppRunLife.Game_Opened);
						},
						onRemoved: function () {
							//通知:sys周期变化
							EventManager.dispatch(AppEvent.SYS_APP_LIFE, GConstants.AppRunLife.Game_Closed);
						}
					})
				})
			} else {
				this.print("游戏场景已存在，强制刷新===>")
				EventManager.dispatch(AppEvent.ROOM_VIEW_ONLOAD);
			}
		} else {
			//正在登录中
			if (GCache.User.isLogining()) {
				return
			}
			//重新登录
			LayerManager.clear(null);

			EventManager.dispatch(AppEvent.NET_GOTO_START_LOGIN)
		}
	}

	//关闭游戏界面
	exitGame() {
		if (LayerManager.has(UIID.GameScenePrefab) || LayerManager.isLoading(UIID.GameScenePrefab)) {
			LayerManager.clear(null, true);
			//初始化绑定绑定映射
			EventManager.dispatch(AppEvent.SYS_UPDATE_CMDMAPPING);
			GPBWriteAndRead.Write.initCommonCmd(GlobalHeadCmdBinding, true);
			GPBWriteAndRead.Read.initCommonCmd(GlobalHeadCmdBinding, true);
			EventManager.dispatch(AppEvent.SYS_PACKAGE_LOAD, GConstants.PkgLoaderTaskList.Hall, () => {
				if (GCache.User.isLoginSuccesed() == false) {
					return;
				}
				EventManager.dispatch(AppEvent.HALL_GOTO_SHOW, true);
			})
		}
	}
	//请求上报子游戏版本号
	reqReportGameVer(event, gameID) {
		gameID = Utils.number_valueOf(gameID, null)
		if (Utils.isNull(gameID)) {
			return
		}
		if (!Utils.isNull(this._reportGameVerRecord[gameID])) {
			//每一个游戏只上报一次
			return
		}
		let ver = Utils.number_valueOf(GCache.SelectGame.getGameVersionByGameID(gameID), null)
		if (Utils.isNull(ver)) {
			return
		}
		let param = {
			gid: gameID,
			gameVer: ver
		};
		let sendMsg = {
			cmd: GlobalCMD.PHP_REPORT_GAME_VERSION,
			body: param,
		}
		EventManager.dispatch(AppEvent.NET_SEND_MSG, sendMsg)

		this._reportGameVerRecord[gameID] = Utils.number_valueOf(this._reportGameVerRecord[gameID], 0) + 1
	}
	//请求php获取用户某个游戏的信息
	reqGamePlayInfo(event, gameID: Number) {
		gameID = Utils.number_valueOf(gameID, null);
		if (Utils.isNull(gameID)) {
			return
		}
		let param = {
			game_id: gameID,
		};
		let sendMsg = {
			cmd: GlobalCMD.PHP_GAME_PLAY_INFO,
			body: param,
		}
		EventManager.dispatch(AppEvent.NET_SEND_MSG, sendMsg);
	}
	//php获取用户某个游戏的信息
	respGamePlayInfo(event, isSuccess, respData, reqData) {
		this.dump(respData, "php获取用户某个游戏的信息返回" + isSuccess)
		if (isSuccess == false) {
			return;
		}
		let result = GCache.User.syncGamePlayRecord(respData["game_id"], respData);
		if (result != null) {
			//玩局记录有更新
			EventManager.dispatch(AppEvent.USER_UPDATE_GAMERECORD, result);
		}
	}
}

