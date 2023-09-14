
import { Node, _decorator } from 'cc';
import { EventManager } from '../../../../../framework/manager/EventManager';
import { BaseComponent } from '../../../../../framework/vc/BaseComponent';
import { PlayerMgr } from '../../../cache/PlayerMgr';
import { FXJEvent } from '../../../common/FXJEvent';
import { FXJSound } from '../../../common/FXJSound';
const { ccclass, property } = _decorator;

/**
 * Name = ai
 * URL = db://assets/package/game/module/ai/src/ai.ts
 * Time = Wed Aug 23 2023 19:33:00 GMT+0800 (中国标准时间)
 * Author = qwe757964
 *
 * Life: onLoad-->onInitModuleEvent-->onEnable->start->update->lateUpdate->onDisable->onDestroy
 * 
 */
 
@ccclass('Ai')
export class Ai extends BaseComponent {
	
	/** override 初始化模块事件 */
	protected onInitModuleEvent() {
		this.node.on(Node.EventType.TOUCH_END, this.onOprationTouchEnd, this);
	};
	
	onOprationTouchEnd(){
		if(PlayerMgr.getInstance().getMyPlayerInfo().isAi){
			EventManager.dispatch(FXJEvent.NET_REQ_GAME_USER_AI, !PlayerMgr.getInstance().getMyPlayerInfo().isAi);
		}
	}

	onCloseAi(){
		this.node.active = false;
		EventManager.dispatch(FXJEvent.SYS_PLAY_EFFECT, FXJSound.CommClick);
	}

	showAiView(isShow?:boolean){
		this.node.active = isShow;
		EventManager.dispatch(FXJEvent.SYS_PLAY_EFFECT, FXJSound.CommClick);
	}
}

