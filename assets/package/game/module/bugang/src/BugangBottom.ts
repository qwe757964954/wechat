
import { Node, _decorator } from 'cc';
import { EventManager } from '../../../../../framework/manager/EventManager';
import { Utils } from '../../../../../framework/Utils';
import { BaseComponent } from '../../../../../framework/vc/BaseComponent';
import { RoomMgr } from '../../../cache/RoomMgr';
import { GameStatus } from '../../../common/FXJConfig';
import { FXJEvent } from '../../../common/FXJEvent';
import { Game } from '../../../common/idl/Game';
import { FXJCMDHead } from '../../../net/FXJCmd';
import { Card } from '../../card/src/Card';
const { ccclass, property } = _decorator;

/**
 * Name = BugangBottom
 * URL = db://assets/package/game/module/bugang/src/BugangBottom.ts
 * Time = Wed Aug 09 2023 21:31:35 GMT+0800 (中国标准时间)
 * Author = qwe757964
 *
 * Life: onLoad-->onInitModuleEvent-->onEnable->start->update->lateUpdate->onDisable->onDestroy
 * 
 */

@ccclass('BugangBottom')
export class BugangBottom extends BaseComponent {
	@property(Card)
	public leftCard: Card | null = null;;

	@property(Card)
	public rightCard: Card | null = null;

	/** 时间更新句柄 */
	_handlerTimeUpdate = null;

	/** override 初始化模块事件 */
	protected onInitModuleEvent() {

	};

	onLoad() {

	};

	public updateBuGangPai(resp: Game.IUpdateFanGangPai) {
		//card
		const cardArray: (Card | null)[] = [this.leftCard, this.rightCard];
		resp.cards.forEach((byte, index) => {
			// 执行循环体操作，element是当前元素的值
			cardArray[index].setCardByte(byte);
			cardArray[index].node.off(Node.EventType.TOUCH_END);
			cardArray[index].node.on(Node.EventType.TOUCH_END, (event) => {
				this.opClick(byte);
			}, this);
		});
		this.startOperationTime();
	}
	/** 开始更新时间 */
	startOperationTime() {
		this.stopSchedulerOnce(this._handlerTimeUpdate);
		this._handlerTimeUpdate = null;
		let timeOut: number = RoomMgr.getInstance().getTimeOut(GameStatus.OPERATION);
		this._handlerTimeUpdate = this.addSchedulerOnce(timeOut, Utils.handler(this, this.resetView))
	}
	resetView() {
		this.node.active = false;
		this.stopSchedulerOnce(this._handlerTimeUpdate);
		this._handlerTimeUpdate = null;
	}

	opClick(byte: number) {
		let info: Game.ISelectFanGangPai = { card: byte };
		let sendMsg = {
			cmd: FXJCMDHead.C2S.USER_SELECT_FAN_GANG_PAI,
			body: info,
		}
		EventManager.dispatch(FXJEvent.NET_SEND_MSG, sendMsg);
		this.node.active = false;
	}

}

