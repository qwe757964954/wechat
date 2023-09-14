
import { Layout, _decorator } from 'cc';
import { Utils } from '../../../../../framework/Utils';
import { BaseComponent } from '../../../../../framework/vc/BaseComponent';
import { RoomMgr } from '../../../cache/RoomMgr';
import { OPCode } from '../../../common/FXJConfig';
import { GameEvent } from '../../../common/GameEvent';
import { Game } from '../../../common/idl/Game';
import { CardUtil } from '../../../util/CardUtil';
import { Coordinate } from '../../match/src/Match';
import { OprationItem } from './OprationItem';
const { ccclass, property } = _decorator;

/**
 * Name = OprationMgr
 * URL = db://assets/package/game/module/opmgr/src/OprationMgr.ts
 * Time = Tue Aug 08 2023 10:06:20 GMT+0800 (中国标准时间)
 * Author = qwe757964
 *
 * Life: onLoad-->onInitModuleEvent-->onEnable->start->update->lateUpdate->onDisable->onDestroy
 * 
 */
 
@ccclass('OprationMgr')
export class OprationMgr extends BaseComponent {
	// @property({ type: Prefab, visible: false })
    // _mjPrefab: Prefab | null;
	@property(Layout)
    public opmgrItem: Layout | null = null;
	/** 时间更新句柄 */
	_handlerTimeUpdate = null;
	// @property(Prefab)
    // public opmgrItem: Prefab | null = null;

	private	coordinateList:Coordinate[] = [];
	/** override 初始化模块事件 */
	protected onInitModuleEvent() {
		this.addModelListener(GameEvent.UPDATE_USER_OPERATION_RESULT, this.updateUserOperationResult);
	};
	
	onLoad () {
        this.opmgrItem.node.active = false;
		this.coordinateList = [
			{ x: 21.979, y: -132.443 }, //下
			{ x: 352.788, y: 85.391 }, //右
			{ x: 22.299, y: 256.069 }, // 上
			{ x: -344.469, y: 84.486 }]; //左
		let itemScript:OprationItem = this.opmgrItem.getComponent(OprationItem);
		itemScript.updateAtlasCodeMap();		
	};

	updateUserOperationResult(event = null,resp:Game.IOperationResult){
		if(resp.opCode === OPCode.OPE_OUT_CARD){
			return;
		}
		const relativeSeatId = CardUtil.calculatePlayerSeat(RoomMgr.getInstance().mySeatId,resp.seatId);
		const coordinate = this.coordinateList[relativeSeatId];
		this.opmgrItem.node.setPosition(coordinate.x,coordinate.y);
		this.opmgrItem.node.active = true;
		let itemScript:OprationItem = this.opmgrItem.getComponent(OprationItem);
		itemScript.updateItemProps(resp.userId,resp.opCode);
		this.startOperationTime();		
	}
	/** 开始更新时间 */
	startOperationTime() {
        this.stopSchedulerOnce(this._handlerTimeUpdate);
		this._handlerTimeUpdate = null;
        let timeOut:number = 1.1;
        this._handlerTimeUpdate = this.addSchedulerOnce(timeOut, Utils.handler(this, this.resetView))
	}
	resetView(){
		this.opmgrItem.node.active = false;
	}
	start () {

	};

}

