/** 
 * Name = FXJController
 * URL = db://assets/package/game/common/FXJController.ts
 * Time = Mon Jul 24 2023 18:46:09 GMT+0800 (中国标准时间)
 * Author = xueya
 * 游戏主控制器
 */

import { GCache } from "../../../cache/GCache";
import { Encrypt } from "../../../framework/crypto/Encrypto";
import { EventManager } from "../../../framework/manager/EventManager";
import { Utils } from "../../../framework/Utils";
import { RoomController } from "../../../proj/RoomController";
import { PlayerMgr } from "../cache/PlayerMgr";
import { Room } from "../cache/Room";
import { RoomMgr } from "../cache/RoomMgr";
import { SettleMgr } from "../cache/SettleMgr";
import { FXJCMDHead } from "../net/FXJCmd";
import { FXJWriteAndRead } from "../net/FXJWriteAndRead";
import { GameDeskPrefabCtr } from "../scripts/GameDeskPrefabCtr";
import { GameScenePrefabCtr } from "../scripts/GameScenePrefabCtr";
import { OPCode } from "./FXJConfig";
import { FXJConstant } from "./FXJConstant";
import { FXJEvent } from "./FXJEvent";
import { FXJObserver } from "./FXJObserver";
import { FXJUIID } from "./FXJRes";
import { GameEvent } from "./GameEvent";
import { Common } from "./idl/Common";
import { Game } from "./idl/Game";
import { ChatServer } from "./server/ChatServer";
import { RoundServer } from "./server/RoundServer";
import { SettleServer } from "./server/SettleServer";

export class FXJController extends RoomController {

	public static getInstance(): FXJController {
		if (!this._instance || this._instance == null) {
			this._instance = new FXJController("FXJController");
		}
		return this._instance;
	}
	public static init(): FXJController {
		if (this._instance) {
			this._instance.clear();
		}
		this._instance = null
		FXJController.getInstance();
		return
	}

	public clear() {
		this.print("[ FXJController ]clear 清理 重置所有定时器");
		this.__clearServerClass();
		super.clear()
		FXJController._instance = null;
	}

	/** 场景组件 */
	public GameSceneCtr: GameScenePrefabCtr = null;
	/** 桌子组件 */
	public GameDeskCtr: GameDeskPrefabCtr = null;
	/** 局服务 */
	public RoundServer: RoundServer = null;
	/** 结算服务 */
	public SettleServer: SettleServer = null;
	/** 聊天服务 */
	public ChatServer: ChatServer = null;
	/** 结算服务 */
	public fxjObserver: FXJObserver = null;
	//实例化
	constructor(name: string) {
		super(name)
	};

	/** override:加载模块 */
	protected onInit(): void {
		super.onInit();
		// 设置GameMgr中 GameDelegate的代理

		FXJWriteAndRead.getInstance().initPB();
		FXJWriteAndRead.getInstance().initCMDMapping();
	}
	/** override:场景加载/界面强制重新刷新 */
	public onViewLoad(event = null): void {
		GCache.setDesk(Room);
		this._deskCache = GCache.Desk;
		this.fxjObserver = new FXJObserver();
		PlayerMgr.getInstance().addObserver(this.fxjObserver);
		RoomMgr.getInstance().addObserver(this.fxjObserver);
		this.__initModuleEvent();
		this.__initServerClass();
		super.onViewLoad(event);

	}

	// /** 预加载 */
	// preloadRes() {
	// 	this.getPreLoaderRes(FXJRes.Atlas_Game_CardNum.bundle, FXJRes.Atlas_Game_CardNum.path, SpriteAtlas);
	// 	this.getPreLoaderRes(FXJRes.Atlas_Player_Common.bundle, FXJRes.Atlas_Player_Common.path, SpriteAtlas);

	// }

	/** 初始化附属类 */
	private __initServerClass() {
		this.__clearServerClass();
		this.RoundServer = new RoundServer();
		this.SettleServer = new SettleServer();
		this.ChatServer = new ChatServer();
	}

	/** 清理附属类 */
	public __clearServerClass() {
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
	/** 是否重连 */
	get IsReconn() {
		return this._intoGameData?.isReconn;
	};
	/** 初始化添加事件绑定 */
	private __initModuleEvent(): void {
		this.addModelListener(FXJEvent.BROADCAST_DING_ZHUANG, this.broadcastDingZhuang);
		this.addModelListener(FXJEvent.SERVER_BROADCAST_PLAYER_LOGIN, this.serverBroadcastPlayerLogin);
		// this.addModelListener(FXJEvent.SERVER_BROADCAST_PLAYER_READY, this.serverBroadcastPlayerReady);

		this.addModelListener(FXJEvent.BROADCAST_GRAB_CARD, this.broadcastGrabCard);
		this.addModelListener(FXJEvent.BROADCAST_DINGQUE_OPTIONS, this.broadcastDingQueOptions);
		this.addModelListener(FXJEvent.BROADCAST_USER_PIAO_GANG, this.broadcastUserPiaoGang);
		this.addModelListener(FXJEvent.BROADCAST_PAOQIAN_OPTIONS, this.broadcastPaoQianOptions);
		this.addModelListener(FXJEvent.BROADCAST_ONE_DINGQUE_RESULT, this.broadcastOneDingqueResult);
		this.addModelListener(FXJEvent.BROADCAST_ALL_DINGQUE_RESULT, this.broadcastAllDingqueResult);
		this.addModelListener(FXJEvent.BROADCAST_SHUAIQIANG_RESULT, this.broadcastAllShuaiQiangResult);
		this.addModelListener(FXJEvent.BROADCAST_CHAQUE_RESULT, this.broadcastChaqueResult);
		this.addModelListener(FXJEvent.BROADCAST_MAIDUANMEN_USER, this.broadcastMaiDuanMenUser);
		this.addModelListener(FXJEvent.BROADCAST_MAIDUANMEN_RESULT, this.broadcastMaiDuanMenResult);
		this.addModelListener(FXJEvent.BROADCAST_FEN_ZHANG, this.broadcastFenZhang);
		this.addModelListener(FXJEvent.BROADCAST_UPDATE_FAN_GANG_PAI, this.broadcastUpdateFanGangPai);
		this.addModelListener(FXJEvent.BROADCAST_SELECT_FAN_GANG_PAI, this.broadcastSelectFanGangPai);
		this.addModelListener(FXJEvent.BROADCAST_DEAL_CARD, this.broadcastDealCard);
		this.addModelListener(FXJEvent.BROADCAST_USER_OPERATION_RESULT, this.broadcastUserOperationResult);
		this.addModelListener(FXJEvent.BROADCAST_USER_OPERATION, this.broadcastUserOperation);
		this.addModelListener(FXJEvent.BROADCAST_DING_FENG, this.broadcastDingFeng);
		this.addModelListener(FXJEvent.BROADCAST_ZHI_TOU, this.broadcastZhiTou);

		this.addModelListener(FXJEvent.BROADCAST_DOUBLE_CARDS, this.broadcastDoubleCards);
		this.addModelListener(FXJEvent.BROADCAST_REWARD_CARDS, this.broadcastRewardCards);

		this.addModelListener(FXJEvent.BROADCAST_PLAYING_JI_TYPE, this.broadcastPlayingJiType);
		this.addModelListener(FXJEvent.BROADCAST_ZHUO_JI, this.broadcastZhuoJi);

		this.addModelListener(FXJEvent.BROADCAST_SETTLE, this.broadcastSettleItem);
		this.addModelListener(FXJEvent.BROADCAST_HANDCARDS, this.broadcastHandCards);
		this.addModelListener(FXJEvent.BROADCAST_BANKER_FIRST_OPERATION, this.broadcastBankerFirstOperation);
		this.addModelListener(FXJEvent.BROADCAST_UPDATE_PLAYER_MONEY, this.broadcastUpdatePlayerMoney);

		this.addModelListener(FXJEvent.BROADCAST_GANG_OPERATION_RESULT, this.broadcastGameOperationResult);
		this.addModelListener(FXJEvent.BROADCAST_DING_LAIZI, this.broadcastDingLaizi);
		this.addModelListener(FXJEvent.BROADCAST_TO_WAIT_USER_GIVE_UP, this.broadcastToWaitUserGiveUp);
		this.addModelListener(FXJEvent.BROADCAST_XIAZHU_OPTIONS, this.broadcastXiazhuOptions);
		this.addModelListener(FXJEvent.BROADCAST_XIAZHU_RESULT, this.broadcastXiazhuResult);
		this.addModelListener(FXJEvent.BROADCAST_GEN_ZHUANG_SUCC, this.broadcastGenZhuangSucc);

		this.addModelListener(FXJEvent.BROADCAST_GAME_OVER, this.broadcastGameOver);
		this.addModelListener(FXJEvent.BROADCAST_GAME_START, this.broadcastGameStart);
		this.addModelListener(FXJEvent.BROADCAST_FAN_GANG_PAI, this.broadcastFanGangPai);
		//游戏房间重连成功
		// this.addModelListener(FXJEvent.BROADCAST_ROOM_RECONNECT, this.broadcastRoomReconnect)

		this.addModelListener(GameEvent.SEND_PLAYER_OPERATION, this.sendPlayerOpration);
		this.addModelListener(GameEvent.NEXT_GAME_OPERATION, this.onNextGameOperation);
		//手动退出游戏
		this.addModelListener(GameEvent.EXITS_GAME_ROOM_VIEW, this.exitsGameRoomView)

	}
	exitsGameRoomView() {
		this.detailExitGame(false);
	}

	protected broadcastGameOver(event = null, resp: Common.IGameState = null): void {
		this.dump(resp, "广播:游戏结束==>")
		GCache.Desk.gameOverResult();
		// this.dump(resp);
	}

	protected onNextGameOperation(event = null) {
		let roomInfo = RoomMgr.getInstance().getRoomInfoData(this._intoGameData.GameID);
		console.log("onNextGameOperation___________", GCache.User.getUserSilver(), roomInfo);
		if (GCache.User.getUserSilver() < roomInfo.min_money) {
			EventManager.dispatch(GameEvent.EXITS_GAME_ROOM_VIEW);
			return;
		}

		if (Utils.isNull(PlayerMgr.getInstance().getMyPlayerInfo())) {
			EventManager.dispatch(FXJEvent.NET_REQ_ROOM_LOGIN);
		} else {
			EventManager.dispatch(GameEvent.SHOW_HIDEN_MATCH_VIEW, true);
		}
		// EventManager.dispatch(FXJEvent.GAME_OPEN_POPUP, FXJUIID.GameMatchPrefab,null,{});
	}
	//操作
	protected sendPlayerOpration(event = null, info: Game.ISendOperation): void {
		let sendMsg = {
			cmd: FXJCMDHead.C2S.USER_OPERATION_RESULT,
			body: info,
		}
		GCache.Desk.turnMe = info.opCode === OPCode.OPE_PASS;
		EventManager.dispatch(FXJEvent.NET_SEND_MSG, sendMsg);
	}
	protected broadcastGameStart(event = null, resp: Common.IGameState = null): void {
		console.log(resp, "广播:游戏开始==>")
		// EventManager.dispatch(FXJEvent.GAME_CLOSE_POPUP, FXJUIID.GameMatchPrefab,null,{});
		EventManager.dispatch(GameEvent.SHOW_HIDEN_MATCH_VIEW, false);
		EventManager.dispatch(GameEvent.VIEW_BROADCAST_GAME_START);
	}
	protected reqEnterGameLogin(event = null) {
		super.reqEnterGameLogin(event);
	}
	/** override:重连成功 */
	protected receiveReConnectSuccess(event = null, respData: Game.IUserLoginRoom = null) {
		super.receiveReConnectSuccess(event, respData);
		console.log("重连成功___________________________", respData);
		GCache.Desk.reconnectionRoomUpdate(respData);
		EventManager.dispatch(GameEvent.ENTER_ROOM_UPDATE_PLAYER);
		EventManager.dispatch(GameEvent.VIEW_BROADCAST_GAME_START);
		EventManager.dispatch(GameEvent.VIEW_UPDATE_FAN_GANG_PAI);
		if (!PlayerMgr.getInstance().getMyPlayerInfo().isReady) {
			EventManager.dispatch(GameEvent.SHOW_HIDEN_MATCH_VIEW, true);
			// EventManager.dispatch(FXJEvent.GAME_OPEN_POPUP, FXJUIID.GameMatchPrefab,null,{});
		}

	}

	/** override:房间登录成功 */
	protected receiveLoginRoomSuccess(event = null, respData: Game.IUserReconnect = null) {
		super.receiveLoginRoomSuccess(event, respData);
		console.log("房间登录成功___________________________", respData);
		GCache.Desk.enterRoomUpdate(respData);
		EventManager.dispatch(GameEvent.ENTER_ROOM_UPDATE_PLAYER);
		if (!PlayerMgr.getInstance().getMyPlayerInfo().isReady) {
			EventManager.dispatch(GameEvent.SHOW_HIDEN_MATCH_VIEW, true);
			// EventManager.dispatch(FXJEvent.GAME_OPEN_POPUP, FXJUIID.GameMatchPrefab,null,{});
		}
	}

	/** override:广播玩家登录房间 */
	protected serverBroadcastPlayerLogin(event = null, resp: Common.IPlayerInfo = null): void {
		console.log(resp, "serverBroadcastPlayerLogin==>");
		PlayerMgr.getInstance().addPlayerList(resp);
		EventManager.dispatch(GameEvent.VIEW_BROADCAST_PLAYER_ENTER, resp.userId);
	}

	protected receivePlayerReady(event = null, respData = null) {
		super.receivePlayerReady(event, respData);
		console.log(respData, "广播:玩家准备==>");
		PlayerMgr.getInstance().updatePlayerReadyStatus(respData.userId);

	}

	protected broadcastFanGangPai(event = null, respData: Game.IFanGangPai = null) {
		console.log(respData, "broadcastFanGangPai补杠==>");
		EventManager.dispatch(GameEvent.VIEW_UPDATE_BU_GANG_PAI, respData);
	}

	protected receiveGamePlayerAI(event = null, respData = null) {
		super.receiveGamePlayerAI(event, respData);
		console.log(respData, "有玩家托管了==>");
		PlayerMgr.getInstance().updatePlayerAiStatus(respData.mid, respData.ai);
		EventManager.dispatch(GameEvent.VIEW_PLAYER_AI_SHOW, respData);
	}

	/** override:广播玩家退出房间 */
	protected receivePlayerLogOut(event = null, respData = null) {
		super.receivePlayerLogOut(event, respData);
		console.log(respData, "广播:玩家退出==>");
		EventManager.dispatch(GameEvent.VIEW_BROADCAST_PLAYER_EXIT, respData.mid);
		PlayerMgr.getInstance().deletePlayerLeave(respData.mid);
	}
	/** 广播:退出游戏房间成功 */
	protected receiveExitRoomSuccess(event = null, respData = null) {
		super.receiveExitRoomSuccess(event, respData);
		PlayerMgr.getInstance().deletePlayerLeave(GCache.User.getUserMid());
	}
	// protected serverBroadcastPlayerReady(event = null, resp = null ): void{
	// 	console.log("serverBroadcastPlayerReady::::::::::::"+resp);
	// PlayerMgr.getInstance().addPlayerList(resp);
	// console.log("serverBroadcastPlayerReady::::::::::::"+PlayerMgr.getInstance().playerList);
	// }
	protected broadcastZhiTou(event = null, resp: Game.IRollDice = null): void {
		this.dump(resp, "广播:掷投==>")
		RoomMgr.getInstance().rollDice = resp;
		EventManager.dispatch(GameEvent.VIEW_BROADCAST_ZHI_TOU, resp);
	}

	protected broadcastDingZhuang(event = null, resp: Game.IFixBanker): void {
		this.dump(resp, "广播:定庄==>")
		RoomMgr.getInstance().laiziInfo = resp;

		EventManager.dispatch(GameEvent.VIEW_BROADCAST_DING_ZHUANG, resp.bankSeatId);
	}

	protected broadcastGrabCard(event = null, resp: Game.IGrabCard): void {
		console.log(resp, "广播:出牌==>")
		GCache.Desk.gameGrabCard(resp);
		EventManager.dispatch(GameEvent.VIEW_BROADCAST_GRAB_CARD, resp);
	}

	protected broadcastDingQueOptions(event = null, resp: Game.IDingQueOption): void {
		this.dump(resp, "广播:定缺==>")
		console.log("broadcastDingQueOptions::::::::::::" + resp)
	}

	protected broadcastUserPiaoGang(event = null, resp: Game.IGang): void {
		this.dump(resp, "广播:飘杠==>")
		console.log("broadcastUserPiaoGang::::::::::::" + resp)
	}

	protected broadcastPaoQianOptions(event = null, resp: Game.IPaoQianOption): void {
		this.dump(resp, "广播:飘缺选项==>")
		console.log("broadcastPaoQianOptions::::::::::::" + resp)
	}

	protected broadcastOneDingqueResult(event = null, resp: Game.IUserDingQue): void {
		this.dump(resp, "广播:broadcastOneDingqueResult==>")
	}
	protected broadcastAllShuaiQiangResult(event = null, resp: Game.IShuaiQiang): void {
		this.dump(resp, "广播:broadcastAllShuaiQiangResult==>")
	}

	protected broadcastAllDingqueResult(event = null, resp: Game.IDingQueResult): void {
		this.dump(resp, "广播:broadcastAllDingqueResult==>")
	}

	protected broadcastChaqueResult(event = null, resp: Game.IUserChaQue): void {
		this.dump(resp, "广播:broadcastChaqueResult==>")
		console.log("broadcastChaqueResult::::::::::::" + resp)
	}

	protected broadcastMaiDuanMenUser(event = null, resp: Game.IMaiDuanMenUser): void {
		this.dump(resp, "广播:broadcastMaiDuanMenUser==>")
		console.log("broadcastMaiDuanMenUser::::::::::::" + resp)
	}

	protected broadcastMaiDuanMenResult(event = null, resp: Game.IMaiDuanMenResult): void {
		this.dump(resp, "广播:broadcastMaiDuanMenResult==>")
	}

	protected broadcastFenZhang(event = null, resp: Game.IFenZhang): void {
		this.dump(resp, "广播:broadcastFenZhang==>")
	}

	protected broadcastUpdateFanGangPai(event = null, resp: Game.IUpdateFanGangPai): void {
		console.log(resp, "广播:broadcastUpdateFanGangPai==>")
		GCache.Desk.updateFanGangCards(resp);
		EventManager.dispatch(GameEvent.VIEW_UPDATE_FAN_GANG_PAI);
	}

	protected broadcastSelectFanGangPai(event = null, resp: Game.ISelectFanGangPai): void {
		console.log(resp, "广播:broadcastSelectFanGangPai==>")
		GCache.Desk.updateSelectFanGangCards(resp);
	}

	protected broadcastDealCard(event = null, resp: Game.IDealCard): void {
		console.log(resp, "广播:分牌==>")
		GCache.Desk.dealCardUpdate(resp);
		EventManager.dispatch(GameEvent.VIEW_BROADCAST_DEAL_CARD, resp);

	}

	protected broadcastUserOperationResult(event = null, resp: Game.IOperationResult): void {
		console.log(resp, "广播:broadcastUserOperationResult==>")
		GCache.Desk.userOperationResult(resp);
		EventManager.dispatch(GameEvent.UPDATE_OPERATION_RESULT, resp);

	}

	protected broadcastUserOperation(event = null, resp: Game.IOperation): void {
		console.log(resp, "广播:broadcastUserOperation==>")
		GCache.Desk.userOperation(resp);
		EventManager.dispatch(GameEvent.VIEW_USER_OPERATION, resp);
		EventManager.dispatch(GameEvent.DRAW_MY_CARD)
	}

	protected broadcastDingFeng(event = null, resp: Game.IQuanfengInfo): void {
		this.dump(resp, "广播:broadcastDingFeng==>")
	}

	protected broadcastDoubleCards(event = null, resp: Game.IChouJiang): void {
		this.dump(resp, "广播:broadcastDoubleCards==>")
	}

	protected broadcastRewardCards(event = null, resp: Game.IChouJiangCards): void {
		this.dump(resp, "广播:broadcastRewardCards==>")
	}

	protected broadcastPlayingJiType(event = null, resp: Game.IPlayingJiType): void {
		this.dump(resp, "广播:broadcastPlayingJiType==>")
	}

	protected broadcastZhuoJi(event = null, resp: Game.IZhuoJi): void {
		// this.dump(resp, "广播:broadcastZhuoJi==>")
		console.log(resp, "广播:broadcastUserOperation==>")
	}

	protected broadcastSettleItem(event = null, resp: Game.ISettleItem): void {
		// this.dump(resp, "广播:broadcastSettleItem==>")
		console.log(resp, "广播:broadcastSettleItem==>")
		GCache.Desk.updateSettleResult(resp);
		if (SettleMgr.getInstance().settleType === "huang_zhuang") {
			EventManager.dispatch(FXJEvent.GAME_OPEN_POPUP, FXJUIID.GameSettlePrefab);
		}
	}

	protected broadcastHandCards(event = null, resp: Game.IHandCards): void {
		console.log(resp, "广播:手牌==>")
		PlayerMgr.getInstance().updateHandCards(resp);
		EventManager.dispatch(GameEvent.VIEW_BROADCAST_GAME_OVER, resp);
	}

	protected broadcastBankerFirstOperation(event = null, resp: Game.IFixBanker): void {
		this.dump(resp, "广播:broadcastBankerFirstOperation==>")
		GCache.Desk.bankerFirstOperation(resp);
		EventManager.dispatch(GameEvent.VIEW_BROADCAST_OPERATION_START, resp);
	}

	protected broadcastUpdatePlayerMoney(event = null, resp: Game.IUpdatePlayerMoney): void {
		// this.dump(resp, "广播:更新玩家钱==>")
		PlayerMgr.getInstance().updatePlayerMoney(resp.moneys);
		PlayerMgr.getInstance().playerList.forEach(player => {
			EventManager.dispatch(FXJEvent.VIEW_PLAYER_UPDATE_PROPERTY, player.userId);
		});
	}

	protected broadcastGameOperationResult(event = null, resp: Game.IgangOperationResult): void {
		console.log("broadcastGameOperationResult::::::::::::", resp)
	}

	protected broadcastDingLaizi(event = null, resp: Game.IFixLaizi): void {
		this.dump(resp, "广播:定癞子==>")
		RoomMgr.getInstance().laiziInfo = resp;
	}

	protected broadcastToWaitUserGiveUp(event = null, resp: Game.IToWaitGiveup): void {
		this.dump(resp, "广播:broadcastToWaitUserGiveUp==>")
	}

	protected broadcastXiazhuOptions(event = null, resp: Game.IXiaZhuOption): void {
		this.dump(resp, "广播:broadcastXiazhuOptions==>")
	}

	protected broadcastXiazhuResult(event = null, resp: Game.IUserXiaZhu): void {
		this.dump(resp, "广播:broadcastXiazhuResult==>")

	}
	protected broadcastGenZhuangSucc(event = null, resp: Game.IFixBanker): void {
		this.dump(resp, "广播:broadcastGenZhuangSucc==>")
	}
	/**广播: 表情 */
	protected receiveGameUserFace(event = null, respData = null) {
		super.receiveGameUserFace();
		console.log(respData, "有玩家发表情了==>")
		EventManager.dispatch(GameEvent.VIEW_PLAYER_EMOJ_SHOW, respData);
	}

	/**广播: 聊天 */
	protected receiveGameUserChat(event = null, respData = null) {
		super.receiveGameUserChat();
		console.log(respData, "有玩家发聊天消息了==>FXJ")
		if (respData) {
			let msg = Encrypt.JsonDecode(respData['msg'])
			if (msg && msg['from'] && msg['to']) {
				let index = respData['index'];
				let mid = respData['mid'];
				let fromUid = Utils.number_valueOf(msg['from'], 0);
				let toUid = Utils.number_valueOf(msg['to'], 0);
				if (fromUid > 0 && toUid > 0 && index > 0) {
					let minPorpID = FXJConstant.EmojiProp[0].propID;
					let maxPorpID = FXJConstant.EmojiProp[FXJConstant.EmojiProp.length - 1].propID;
					if (index < minPorpID || index > maxPorpID) {
						console.warn("Err:收到道具消息，不支持的道具信息", respData);
						return;
					}
					// 格式:uid: 10086089, prop_id: 3, to_uid: 10086845
					let info = { uid: fromUid, prop_id: index, to_uid: toUid };
					console.log("有玩家发互动道具了==>FXJ", respData, info);
					EventManager.dispatch(FXJEvent.VIEW_DESK_ANI_PLAY, FXJConstant.AnimNormal.HudongProp, info);
				}
			} else {
				EventManager.dispatch(FXJEvent.VIEW_PLAYER_CHAT_SHOW, respData);
			}




		}
	}
}

