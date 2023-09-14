// import { Event } from 'game/mahjong/config/Event';

import { Button, Node, Prefab, SpriteAtlas, _decorator } from 'cc';
import { GCache } from '../../../cache/GCache';
import { GConstants } from '../../../config/GameConstant';
import { inf_LayerType } from '../../../framework/InterfaceDefines';
import { LayerManager } from '../../../framework/layer/LayerManager';
import { LayerPopUp } from '../../../framework/layer/LayerPopup';
import { EventManager } from '../../../framework/manager/EventManager';
import { BaseComponent } from '../../../framework/vc/BaseComponent';
import { PlayerMgr } from '../cache/PlayerMgr';
import { RoomMgr } from '../cache/RoomMgr';
import { FXJController } from '../common/FXJController';
import { FXJEvent } from '../common/FXJEvent';
import { FXJRes, FXJUIConfig, FXJUIID } from '../common/FXJRes';
import { FXJSound } from '../common/FXJSound';
import { GameEvent } from '../common/GameEvent';
import { Game } from '../common/idl/Game';
import { Ai } from '../module/ai/src/Ai';
import { BugangBottom } from '../module/bugang/src/BugangBottom';
import { BugangTop } from '../module/bugang/src/BugangTop';
import { Remain } from '../module/bugang/src/Remain';
import { Match } from '../module/match/src/Match';
import { OpInfo } from '../module/opInfo/src/OpInfo';
import { NodeUserCtr } from './NodeUserCtr';
const { ccclass, property, menu } = _decorator;

/**
 * Name = GameScenePrefabCtr
 * URL = db://assets/package/game/scripts/GameScenePrefabCtr.ts
 * Time = Thu Jul 27 2023 18:05:11 GMT+0800 (中国标准时间)
 * Author = harvyson
 * 飞小鸡游戏场景
 * Life: onLoad-->onInitModuleEvent-->onEnable->start->update->lateUpdate->onDisable->onDestroy
 * 
 */

@ccclass('GameScenePrefabCtr')
//方便编辑器识别的菜单项目
@menu('prefab/game/GameScenePrefabCtr')
export class GameScenePrefabCtr extends BaseComponent {
	//背景节点
	@property({ tooltip: "背景节点", type: Node })
	private nodeBg: Node | null = null;

	//角色节点——其它
	@property({ tooltip: "角色节点——其它", type: Node })
	private nodeRoleOther: Node | null = null;

	//角色节点——自己
	@property({ tooltip: "角色节点——自己", type: Node })
	private nodeRoleSlef: Node | null = null;

	//用户节点
	@property({ tooltip: "用户节点", type: NodeUserCtr })
	private nodeUser: NodeUserCtr | null = null;

	//手牌节点
	@property({ tooltip: "手牌节点", type: Node })
	private nodeHandCard: Node | null = null;

	//菜单节点
	@property({ tooltip: "菜单节点", type: Node })
	private nodeMenu: Node | null = null;

	//菜单节点
	@property({ tooltip: "操作节点", type: Node })
	private opration: Node | null = null;

	//普通动画操作根节点
	@property({ tooltip: "普通动画操作根节点", type: Node })
	private nodeNormalAnim: Node | null = null;

	//弹框节点
	@property({ tooltip: "弹框节点", type: Node })
	private nodePopup: Node | null = null;

	//退出按钮
	@property({ tooltip: "退出按钮", type: Button })
	private btnBack: Button | null = null;

	//ai弹框
	@property({ tooltip: "ai弹窗", type: Ai })
	private ai: Ai | null = null;

	@property(OpInfo)
	public opInfo: OpInfo | null = null;

	@property(BugangTop)
	public bugangTop: BugangTop | null = null;

	@property(Remain)
	public remain: Remain | null = null;

	@property(Match)
	public match: Match | null = null;

	@property(BugangBottom)
	public bugangBottom: BugangBottom | null = null;

	//真实弹窗节点
	private _nodePopUp: LayerPopUp = null;

	constructor() {
		super()
		console.log("==============飞小鸡游戏场景初始化========");
		this.initModules();
	}
	//加载初始化
	initModules() {
		if (!GCache.firstRunLoadSuccess) {
			return;
		}
		this.preLoaderRes();

		FXJController.init();
		FXJController.getInstance().GameSceneCtr = this;
	}

	//预加载
	preLoaderRes() {
		if (!GCache.firstRunLoadSuccess) {
			return;
		}


		let list = [
			// { ddzRes: FXJRes.Prefab_GameHeadInfo, resType: Prefab },
			{ ddzRes: FXJRes.Prefab_Menu, resType: Prefab },
			{ ddzRes: FXJRes.Prefab_NodeUser, resType: Prefab },
			{ ddzRes: FXJRes.Prefab_Desk, resType: Prefab },
			{ ddzRes: FXJRes.Prefab_HandCard, resType: Prefab },
			{ ddzRes: FXJRes.Prefab_Match_Player, resType: Prefab },
			{ ddzRes: FXJRes.Prefab_op, resType: Prefab },
			{ ddzRes: FXJRes.Prefab_Match, resType: Prefab },
			{ ddzRes: FXJRes.Prefab_GameSettle, resType: Prefab },
			{ ddzRes: FXJRes.Prefab_Settle_Image, resType: SpriteAtlas },
			{ ddzRes: FXJRes.Picture_Game_Card, resType: SpriteAtlas },


			// { ddzRes: FXJRes.Atlas_Game_Clock, resType: SpriteAtlas }
		];

		this.getPreLoaderArrayRes(list, () => {
			// console.log("----->", Utils.timeParse(Utils.time()));
			// let res = assetManager.getBundle("game").get(FXJRes.Prefab_Match.path, Prefab);
			// console.warn("preLoaderRes-->", res);
		});
	}

	/** override 初始化模块事件 */
	protected onInitModuleEvent() {
		//打开二级弹窗
		this.addModelListener(FXJEvent.GAME_OPEN_POPUP, this.onOpenPopUp)
		//关闭二级弹窗
		this.addModelListener(FXJEvent.GAME_CLOSE_POPUP, this.onClosePopUp)

		// //玩家进入房间
		this.addModelListener(GameEvent.VIEW_BROADCAST_GRAB_CARD, this.grabCardEvent);
		//玩家进入房间
		this.addModelListener(GameEvent.VIEW_BROADCAST_PLAYER_ENTER, this.onPlayerInto);
		this.addModelListener(GameEvent.ENTER_ROOM_UPDATE_PLAYER, this.enterRoomUpdatePlayer);
		this.addModelListener(GameEvent.VIEW_UPDATE_FAN_GANG_PAI, this.updateFanGangPai);
		this.addModelListener(GameEvent.VIEW_UPDATE_BU_GANG_PAI, this.updateBuGangPai);
		this.addModelListener(GameEvent.UPDATE_REMAIN_CARDS_COUNT, this.updateRemainCardsCount);
		this.addModelListener(GameEvent.VIEW_USER_OPERATION, this.viewUserOperation);

		this.addModelListener(GameEvent.SHOW_HIDEN_MATCH_VIEW, this.showHidenMatchView);
		// 游戏结束
		this.addModelListener(GameEvent.VIEW_BROADCAST_GAME_OVER, this.onGameOver);
		this.addModelListener(GameEvent.VIEW_BROADCAST_GAME_START, this.onGameStart);
		this.addModelListener(GameEvent.VIEW_PLAYER_AI_SHOW, this.modifyPlayerDeposit);
		this.addModelListener(GameEvent.EXITS_SETTLE_VIEW, this.exitsSettleView);

	};
	exitsSettleView() {
		this.btnBack.node.active = true;
	}
	modifyPlayerDeposit(event, respData) {
		if (respData.mid != null) {
			if (respData.mid === PlayerMgr.getInstance().getMyPlayerInfo().userId) {
				this.ai.showAiView(respData.ai);
				// this.ai.node.active = respData.ai;
			}
		}
	}

	onGameStart() {
		this.btnBack.node.active = false;
	}

	onLoad() {
		LayerManager.updateConfig(FXJUIConfig);
		FXJController.getInstance().onViewLoad();

		this.initView()

		EventManager.dispatch(FXJEvent.SYS_PLAY_MUSIC, FXJSound.BgGame);
	};

	updateRemainCardsCount(event = null) {
		this.remain.updateRemainCardsCount();
	}

	viewUserOperation(event = null, resp: Game.IOperation) {
		//托管操作不弹操作框
		// if(PlayerMgr.getInstance().getMyPlayerInfo().isAi){
		// 	return;
		// }
		this.opInfo.updateOpration(resp);
	}

	grabCardEvent(event = null, resp: Game.IGrabCard) {
		// Logger.log(resp);
		// this.tingCard.setCardByte(resp.card)
	}

	updateFanGangPai(event = null) {
		this.bugangTop.updateFanGangPai(RoomMgr.getInstance().fangangCards);
		this.bugangTop.node.active = true;
	}

	updateBuGangPai(event = null, resp: Game.IFanGangPai = null) {
		this.bugangBottom.updateBuGangPai(resp);
		this.bugangBottom.node.active = true;
	}

	start() {

	};

	/** 初始化界面 */
	initView() {
		if (FXJController.getInstance().IsReconn != true) {
			this.match.node.active = true;
		} else {
			this.match.node.active = false;
		}
		console.log("初始化界面");

		//弹窗节点
		this._nodePopUp = new LayerPopUp(inf_LayerType.PopUp);
		this.nodePopup.addChild(this._nodePopUp);

		this.getPreLoaderRes(FXJRes.Prefab_Menu.bundle, FXJRes.Prefab_Menu.path, Prefab, (res) => {
			this.nodeMenu.removeAllChildren();
			this.nodeMenu.addChild(res);
		})

		this.getPreLoaderRes(FXJRes.Prefab_Opmgr.bundle, FXJRes.Prefab_Opmgr.path, Prefab, (res) => {
			this.nodeMenu.addChild(res);
		})

		// this.opInfo.updateCodeMap();
	};

	/** 更新界面 */
	updateView() {

	};

	/** 自己登录 */
	playerLoign() {
		this.getPreLoaderRes(FXJRes.Prefab_Desk.bundle, FXJRes.Prefab_Desk.path, Prefab, (res) => {
			EventManager.dispatch(FXJEvent.VIEW_UI_3D_ADD, res);
		})

		this.getPreLoaderRes(FXJRes.Prefab_HandCard.bundle, FXJRes.Prefab_HandCard.path, Prefab, (res) => {
			this.nodeHandCard.removeAllChildren();
			this.nodeHandCard.addChild(res);
			if (GCache.Desk.isReconnect) {
				EventManager.dispatch(GameEvent.RECEIVE_DEAL_CARD);
				EventManager.dispatch(GameEvent.DRAW_MY_CARD);
			}
		})
	};

	dingzhang() {

	}
	//进入房间更新用户信息
	enterRoomUpdatePlayer() {
		PlayerMgr.getInstance().playerList.forEach(player => {
			EventManager.dispatch(GameEvent.VIEW_BROADCAST_PLAYER_ENTER, player.userId);
		});
		this.playerLoign();
	}

	//收到消息:用户进入房间
	onPlayerInto(event, uid) {
		let palyer = PlayerMgr.getInstance().findPlayerWithUserId(uid);
		if (!palyer) {
			return;
		}
		console.log("收到消息:玩家进入房间", palyer);
		let data = {
			uid: palyer.userId,
			// roleID: palyer.gameUserInfo.sex == 2 ? 1 : 0,
			posID: palyer.seatId,
		}
		this.nodeUser.showUserView(data)
	}

	onClickTest(event: Event, customEventData: string) {
		console.log("onClickTest", customEventData);
		// EventManager.dispatch(FXJEvent.GAME_OPEN_POPUP, FXJUIID.GameSettlePrefab);

	}

	showHidenMatchView(event = null, isShow: boolean) {
		this.match.node.active = isShow;
		if (isShow) {
			this.match.getComponent(Match).onLoad();
		}
	}


	//打开二级弹窗
	onOpenPopUp(event, UIID, Data, callbacks = null) {
		if (UIID && (FXJUIConfig[UIID] || FXJUIConfig[UIID])) {
			if (!LayerManager.has(UIID, this._nodePopUp) && !LayerManager.isLoading(UIID, this._nodePopUp)) {
				LayerManager.open(UIID, Data, callbacks, this._nodePopUp);
			}
		}
	}
	//关闭二级弹窗
	onClosePopUp(event, UIID) {
		if (UIID && (FXJUIConfig[UIID] || FXJUIConfig[UIID])) {
			//聊天和菜单不需要遮罩
			if (UIID == FXJUIID.ToolBarPrefab || UIID == FXJUIID.GameChatPrefab) {
				let node: Node = this._nodePopUp.getChildByName(UIID);
				if (node) {
					node.destroy();
					return;
				}
			} else {
				let layerConf = FXJUIConfig[UIID] || FXJUIConfig[UIID];
				LayerManager.clear(layerConf?.layer, true, this._nodePopUp);
			}
		}
	}
	/** 销毁 */
	onDestroy() {
		EventManager.dispatch(FXJEvent.VIEW_UI_3D_REMOVE);

		FXJController.getInstance().onViewDestroy();
		FXJController.getInstance().clear();
	};

	onGameOver() {
		RoomMgr.getInstance().updateRemainCardsCount(0);
		this.remain.updateRemainCardsCount();
		this.opInfo.resetView();
		this.bugangBottom.node.active = false;
		EventManager.dispatch(GameEvent.CLEAN_HAND_CARD);
		this.ai.node.active = false;
		EventManager.dispatch(GameEvent.CLEAN_AI_SHOWING);
	}

	onCloseBack() {
		EventManager.dispatch(FXJEvent.SYS_PLAY_EFFECT, FXJSound.CommClick);
		//如果房间状态处于结束状态，退出游戏
		if (GCache.Desk.getRoomStates() === GConstants.GameRoomState.STATUS_EXITSUCCESS) {
			EventManager.dispatch(GameEvent.EXITS_GAME_ROOM_VIEW);
		} else {
			EventManager.dispatch(FXJEvent.NET_REQ_LOGOUT_IN_GAME);
		}


	}

}

