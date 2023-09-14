
import { instantiate, Layout, Node, Prefab, UITransform, _decorator } from 'cc';
import { EventManager } from '../../../../../framework/manager/EventManager';
import { BaseComponent } from '../../../../../framework/vc/BaseComponent';
import { OperationMgr } from '../../../cache/OperationMgr';
import { GameEvent } from '../../../common/GameEvent';
import { Common } from '../../../common/idl/Common';
import { Game } from '../../../common/idl/Game';
import { Card } from '../../card/src/Card';
import { Item } from './Item';
import { OpType } from './OpInfo';
const { ccclass, property } = _decorator;

/**
 * Name = Carditem
 * URL = db://assets/package/game/module/opInfo/src/Carditem.ts
 * Time = Fri Aug 18 2023 15:19:38 GMT-0700 (北美太平洋夏令时间)
 * Author = qwe757964
 *
 * Life: onLoad-->onInitModuleEvent-->onEnable->start->update->lateUpdate->onDisable->onDestroy
 * 
 */
 
@ccclass('Carditem')
export class Carditem extends BaseComponent {
	@property({ tooltip: "手牌预制体", type: Prefab })
	private CardPrefab: Prefab | null = null;
	@property(Prefab)
	private itemPrefab: Prefab | null = null;
	@property(Layout)
	private opCards: Layout | null = null;
	/** override 初始化模块事件 */
	protected onInitModuleEvent() {

	};

	public updateCardItemProp(opTypes:OpType[]){
		let opNode = opTypes[0].node;
		this.node.removeAllChildren();
		this.node.getComponent(UITransform).width = 0;
		let item_width = 0;
		let rowNum = 0;
		for (let i = 0;i<opTypes.length;i++){
			let opType:OpType = opTypes[i];
			let cardList:Common.ICards[] = OperationMgr.getInstance().getOprationCardList(opType.code);
			for (let idx = 0; idx < cardList.length; idx++) {
				let item = instantiate(this.itemPrefab);
				item.getComponent(UITransform).width = 0;
				item.removeAllChildren();
				let cardInfo:Common.ICards = cardList[idx];
				let cards:number[] = OperationMgr.getInstance().getOprationListNumber(opType.code,idx);
				cards.sort((a, b) => b - a);
				cards.forEach(cardValue => {
					let node = instantiate(this.CardPrefab);
					node.getComponent(Card).setCardByte(cardValue);
					node.getComponent(Card).setCardSize(52,85);
					item.addChild(node);
				});
				item.getComponent(Item).index = idx;
				item.getComponent(Layout).constraint = Layout.Constraint.FIXED_COL;
				item.getComponent(Layout).constraintNum = cards.length;
				item.off(Node.EventType.TOUCH_END);
				item.on(Node.EventType.TOUCH_END, (event) => {
					let id_num:number =  event.target.getComponent(Item).index;
					this.opClick(opType.code,id_num);
				}, this);
				rowNum++;
				item_width = cards.length * 53
				//= item_width;
				item.getComponent(Layout).updateLayout();
				// item_width = item.getComponent(UITransform).width 
				this.node.addChild(item);
			}
		}
		let cardLayout:Layout = this.node.getComponent(Layout);
		let constraintNum:number = rowNum > 2 ? 2 : rowNum;
		cardLayout.updateLayout();
		this.node.getComponent(UITransform).height = Math.round(rowNum / 2) * 86;
		this.node.getComponent(UITransform).width = constraintNum * (item_width + cardLayout.spacingX);
		opNode.node.addChild(this.node);
		opNode.node.getComponent(Layout).updateLayout();
	}

	public opClick(opCode?:number,index?:number){
		let req: Game.ISendOperation = {
            opCard:OperationMgr.getInstance().getPassNumber(),
			opCode:opCode,
			opCards:OperationMgr.getInstance().getOprationListNumber(opCode,index),
			seatId:OperationMgr.getInstance().seatId,
			userId:OperationMgr.getInstance().userId
        }
		EventManager.dispatch(GameEvent.SEND_PLAYER_OPERATION, req);
		EventManager.dispatch(GameEvent.CLOSE_OPRATION_INFO);
        OperationMgr.getInstance().myOpCode = opCode;
	}
}

