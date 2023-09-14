
import { _decorator } from 'cc';
import { BaseComponent } from '../../../../../framework/vc/BaseComponent';
const { ccclass, property } = _decorator;

/**
 * Name = Item
 * URL = db://assets/package/game/module/opInfo/src/Item.ts
 * Time = Mon Aug 21 2023 21:35:06 GMT-0700 (北美太平洋夏令时间)
 * Author = qwe757964
 *
 * Life: onLoad-->onInitModuleEvent-->onEnable->start->update->lateUpdate->onDisable->onDestroy
 * 
 */
 
@ccclass('Item')
export class Item extends BaseComponent {
	public index:number = 0;
	/** override 初始化模块事件 */
	protected onInitModuleEvent() {

	};
	
}

