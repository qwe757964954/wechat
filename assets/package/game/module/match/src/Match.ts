
import { Layout, Node, Prefab, _decorator } from 'cc';
import { EventManager } from '../../../../../framework/manager/EventManager';
import { Utils } from '../../../../../framework/Utils';
import { BaseComponent } from '../../../../../framework/vc/BaseComponent';
import { PlayerMgr } from '../../../cache/PlayerMgr';
import { RoomMgr } from '../../../cache/RoomMgr';
import { FXJEvent } from '../../../common/FXJEvent';
import { FXJRes } from '../../../common/FXJRes';
import { GameEvent } from '../../../common/GameEvent';
import { Common } from '../../../common/idl/Common';
import { CardUtil } from '../../../util/CardUtil';
import { Player } from './Player';

const { ccclass, property } = _decorator;

/**
 * Name = match
 * URL = db://assets/package/game/module/match/src/match.ts
 * Time = Fri Aug 04 2023 11:18:15 GMT+0800 (中国标准时间)
 * Author = qwe757964
 *
 * Life: onLoad-->onInitModuleEvent-->onEnable->start->update->lateUpdate->onDisable->onDestroy
 * 
 */
export interface Coordinate {
	x: number;
	y: number;
}



@ccclass('Match')
export class Match extends BaseComponent {

	//开始游戏按钮节点
	@property({ tooltip: "玩家人物容器", type: Layout })
	private layoutPlayerList: Layout | null = null;

	private willAddPlayer: { [key: number]: boolean } = {};
	private playerList: { [key: number]: Node } = {};

	/** 时间更新句柄 */
	_handlerTimeUpdate = null;

	/** override 初始化模块事件 */
	protected onInitModuleEvent() {
		this.addModelListener(GameEvent.VIEW_BROADCAST_PLAYER_ENTER, this.addPlayer);
		this.addModelListener(GameEvent.VIEW_BROADCAST_PLAYER_EXIT, this.onPalyerExit);
	};

	onLoad() {
		this.resetPlayer();
		this.loadPlayerList();
		
		this.startMatchTime();
	};

	startMatchTime() {
		this.stopSchedulerOnce(this._handlerTimeUpdate);
		this._handlerTimeUpdate = null;
		this._handlerTimeUpdate = this.addSchedulerOnce(0.5, Utils.handler(this, this.resetView))
	}

	resetView(){
		this.onReady();
	}

	onReady() {
		if(Utils.isNull(PlayerMgr.getInstance().getMyPlayerInfo())){
			return;
		}
		if (!PlayerMgr.getInstance().getMyPlayerInfo().isReady) {
			EventManager.dispatch(FXJEvent.NET_REQ_PLAYER_READY);
		}
	}

	resetPlayer() {
		this.playerList = {};
		this.layoutPlayerList.node.removeAllChildren();
	}


	public loadPlayerList() {
		PlayerMgr.getInstance().playerList.forEach(player => {
			this.showPlayer(player);
		});
	}


	start() {


	};

	showPlayer(player: Common.IPlayerInfo) {
		let seatId: number = CardUtil.calculatePlayerSeat(RoomMgr.getInstance().mySeatId, player.seatId);
		if (this.playerList[seatId]) {
			if (this.playerList[seatId].isValid == false) {
				this.playerList[seatId] = null;
			}
		}
		if (this.playerList[seatId]) {
			console.warn("玩家匹配 座位号重复，player");
			let scriptPlayer: Player = this.playerList[seatId].getComponent(Player);
			scriptPlayer.updatePlayerProperty(player);
			return;
		}
		this.willAddPlayer[seatId] = true;
		this.getPreLoaderRes(FXJRes.Prefab_Match_Player.bundle, FXJRes.Prefab_Match_Player.path, Prefab, (nodeRes) => {
			if (this.willAddPlayer[seatId] != true) {
				return;
			}
			delete this.willAddPlayer[seatId];

			this.layoutPlayerList.node.addChild(nodeRes);
			this.layoutPlayerList.updateLayout();
			this.playerList[seatId] = nodeRes;

			let scriptPlayer: Player = nodeRes.getComponent(Player);
			scriptPlayer.updatePlayerProperty(player);
			console.log("this.playerList______________add", this.playerList);
		})

	}
	hidenPlayer(player: Common.IPlayerInfo) {
		let seatId: number = CardUtil.calculatePlayerSeat(RoomMgr.getInstance().mySeatId, player.seatId);
		if (this.playerList[seatId]) {
			if (this.playerList[seatId].isValid == false) {
				this.playerList[seatId] = null;
			}
		}
		if (!this.playerList[seatId]) {
			return;
		}
		let scriptPlayer: Player = this.playerList[seatId].getComponent(Player);
		if (scriptPlayer.seatId === player.seatId) {
			delete this.willAddPlayer[seatId];
			this.playerList[seatId].removeFromParent();
			this.playerList[seatId] = null;
			// this.playerList = this.playerList.filter(item => item.seatId === player.seatId);
			console.log("this.playerList______________delete", this.playerList);
		}
		this.layoutPlayerList.updateLayout();
	}

	addPlayer(event, uid) {
		let player: Common.IPlayerInfo = PlayerMgr.getInstance().findPlayerWithUserId(uid);
		this.showPlayer(player);
	}
	onPalyerExit(event, uid) {
		let player = PlayerMgr.getInstance().findPlayerWithUserId(uid);
		this.deletePlayer(player);
	}


	public deletePlayer(player: Common.IPlayerInfo) {
		this.hidenPlayer(player);
	}
}

