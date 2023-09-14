
import { Node, _decorator } from 'cc';
import { BaseComponent } from '../../../framework/vc/BaseComponent';
import { GameEvent } from '../common/GameEvent';
import { CardPlayManeger } from './Players/CardPlayManeger';
const { ccclass, property } = _decorator;

/**
 * Name = GameHandCardPrefabCtr
 * URL = db://assets/package/game/scripts/GameHandCardPrefabCtr.ts
 * Time = Tue Aug 08 2023 15:24:35 GMT+0800 (中国标准时间)
 * Author = harvyson
 *
 * Life: onLoad-->onInitModuleEvent-->onEnable->start->update->lateUpdate->onDisable->onDestroy
 * 
 */
 

@ccclass('GameHandCardPrefabCtr')
export class GameHandCardPrefabCtr extends BaseComponent {
	// 手牌模板
	@property({ tooltip: "手牌模板", type: Node })
	private nodeCardTemplate: Node | null = null;
	
	@property({ tooltip: "cardZone", type: Node })
	private cardZone: Node | null = null;
	/** override 初始化模块事件 */
	protected onInitModuleEvent() {
		this.addModelListener(GameEvent.CLEAN_HAND_CARD, this.cleanHandCard);
		
	};
	cleanHandCard(){
		let cardMgr:CardPlayManeger = this.cardZone.getComponent(CardPlayManeger);
		cardMgr.resetView();
	}
	onLoad () {
		this.initView()
	};
	
	/** 初始化界面 */
	initView () {
		this.nodeCardTemplate.active = false;
	};

}

