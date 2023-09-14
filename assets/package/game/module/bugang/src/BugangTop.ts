
import { EventTouch, _decorator } from 'cc';
import { BaseComponent } from '../../../../../framework/vc/BaseComponent';
import { Card } from '../../card/src/Card';
const { ccclass, property } = _decorator;

/**
 * Name = BugangTop
 * URL = db://assets/package/game/module/bugang/src/BugangTop.ts
 * Time = Thu Aug 03 2023 10:36:13 GMT+0800 (中国标准时间)
 * Author = qwe757964
 *
 * Life: onLoad-->onInitModuleEvent-->onEnable->start->update->lateUpdate->onDisable->onDestroy
 * 
 */
 
@ccclass('BugangTop')
export class BugangTop extends BaseComponent {
	@property(Card)
    public leftCard: Card | null = null;;
	
	@property(Card)
    public rightCard: Card | null = null;
	


	/** override 初始化模块事件 */
	protected onInitModuleEvent() {
	};
	
	onLoad () {
	};

	public updateFanGangPai(cards?:number[]){
		//card
		const cardArray: (Card | null)[] = [this.leftCard, this.rightCard];
		cards.forEach((card,index) => {
			// 执行循环体操作，element是当前元素的值
			cardArray[index].setCardByte(card);
		});
		  
	}

	start () {
	};
	
	/** 初始化界面 */
	initView () {
	};
	
	/** 更新界面 */
	updateView () {
	};
	
	/** 点击了关闭 */
	onClickClose(event: EventTouch){
	};
	
	//销毁
	onDestroy () {
	};

}

