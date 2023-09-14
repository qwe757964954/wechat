import { SettleMgr } from './SettleMgr';
/**
 * Name = Room
 * URL = db://assets/package/game/cache/Room.ts
 * Time = Mon Jul 24 2023 19:18:24 GMT+0800 (中国标准时间)
 * Author = xueya
 * 游戏房间缓存
 */

import { Desk } from "../../../cache/Desk";
import { EventManager } from '../../../framework/manager/EventManager';
import { FXJEvent } from '../common/FXJEvent';
import { FXJUIID } from '../common/FXJRes';
import { GameEvent } from '../common/GameEvent';
import { Game } from "../common/idl/Game";
import { BankerMgr } from "./BankerMgr";
import { OperationMgr } from "./OperationMgr";
import { OperationResultMgr } from "./OperationResultMgr";
import { PlayerMgr } from "./PlayerMgr";
import { RoomMgr } from "./RoomMgr";
export class Room extends Desk {
	private turnMe:boolean = false;
	private isReconnect:boolean = false;
	//实例化
	constructor() {
		super("Room")
	};
	// fixLaizi: IFixLaizi;
	// RoomMgr.getInstance()
	bankerMgr?:BankerMgr = BankerMgr.getInstance();
	public enterRoomUpdate(resp:Game.IUserLoginRoom) :void{
		RoomMgr.getInstance().updateRoomInfo(resp);
		PlayerMgr.getInstance().setPlayerList(resp?.playerList);
		PlayerMgr.getInstance().getMyPlayerInfo();
	}
	
	public reconnectionRoomUpdate(resp:Game.IUserReconnect) :void{
		RoomMgr.getInstance().updateRoomInfo(resp);
		PlayerMgr.getInstance().setPlayerList(resp?.players);
		PlayerMgr.getInstance().getMyPlayerInfo();
		RoomMgr.getInstance().timePass = resp.timePass;
		this.isReconnect = true;
		if(resp.operation){
			this.userOperation(resp.operation);
			EventManager.dispatch(GameEvent.VIEW_USER_OPERATION,resp.operation);
		}
		if(resp.settleItems){
			resp.settleItems.forEach((item:Game.ISettleItem) => {
				this.updateSettleResult(item);
				EventManager.dispatch(FXJEvent.GAME_OPEN_POPUP, FXJUIID.GameSettlePrefab);
			});
		}
		
	}

	public dealCardUpdate(resp:Game.IDealCard) :void{
		PlayerMgr.getInstance().updatePlayerCardsNum(resp.cardsCount);
		PlayerMgr.getInstance().updateMyhands(resp.cards);
		RoomMgr.getInstance().updateRemainCardsCount(resp.remainCardsCount);
	}

	public gameGrabCard(resp:Game.IGrabCard) :void {
		RoomMgr.getInstance().updateRemainCardsCount(resp.remainCardNum);
		PlayerMgr.getInstance().updateOutCards(resp);
	}

	public updateFanGangCards(resp:Game.IUpdateFanGangPai) : void {
		RoomMgr.getInstance().updateRemainCardsCount(resp.remainCardCount);
		RoomMgr.getInstance().fangangCards = resp.cards;
		PlayerMgr.getInstance().gangCount = resp.gangCount;
	}

	public updateSelectFanGangCards(resp:Game.ISelectFanGangPai) : void {
		RoomMgr.getInstance().selectFanGangCards = resp.card;
	}
	
	public bankerFirstOperation(resp:Game.IFixBanker) : void {
		RoomMgr.getInstance().updateRemainCardsCount(resp.remainCardNum);
		RoomMgr.getInstance().bankSeatId = resp.bankSeatId;
	}
	
	public userOperation(resp:Game.IOperation) : void {
		OperationMgr.getInstance().updateMyselfOpration(resp);
		this.turnMe = true;
	}
	
	public userOperationResult(resp:Game.IOperationResult) : void {
		OperationResultMgr.getInstance().userOperationResult(resp);
    }
	
	public updateSettleResult(resp:Game.ISettleItem) : void {
		SettleMgr.getInstance().updateSelectInfo(resp);
	}

	public gameOverResult() : void {
		// SettleMgr.getInstance().updateSelectInfo(resp);
		PlayerMgr.getInstance().getMyPlayerInfo().isReady = 0;
	}
}