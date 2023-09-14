
import { EventTouch, _decorator } from 'cc';
import { UIID } from '../../../config/UIConfig';
import { EventManager } from '../../../framework/manager/EventManager';
import { BaseComponent } from '../../../framework/vc/BaseComponent';
import { PlayerMgr } from '../cache/PlayerMgr';
import { FXJEvent } from '../common/FXJEvent';
import { FXJSound } from '../common/FXJSound';
const { ccclass, property, menu } = _decorator;

/**
 * Name = ToolBarPrefabCtr
 * URL = db://assets/package/game/scripts/ToolBarPrefabCtr.ts
 * Time = Fri Sep 09 2022 10:51:07 GMT+0800 (中国标准时间)
 * Author = Tomoe
 * 菜单栏
 * Life: onLoad-->onEnable->start->update->lateUpdate->onDisable->onDestroy
 */

@ccclass('ToolBarPrefabCtr')
//方便编辑器识别的菜单项目
@menu('prefab/game/ToolBarPrefabCtr')
export class ToolBarPrefabCtr extends BaseComponent {

	onLoad() {
		this.hideMaskNode();
	};

	/** 隐藏遮罩层 */
	hideMaskNode() {
		let maskNode = this.node.parent.getChildByName("Mask");
		if (maskNode) {
			maskNode.active = false;
		}
	}

	start() {

	};

	//点击关闭
	onCloseClick(event: EventTouch) {
		EventManager.dispatch(FXJEvent.SYS_PLAY_EFFECT, FXJSound.CommClick);
		this.node.destroy();
	}

	//点击托管
	onTuoGuanClick(event: EventTouch) {
		// EventManager.dispatch(FXJEvent.REPORT_CLIENT_CLICK, { eventID: ReportConfig.game_3 });
		EventManager.dispatch(FXJEvent.SYS_PLAY_EFFECT, FXJSound.CommClick);
		// EventManager.dispatch(FXJEvent.GAME_CMD_PLAYER_LEAVE_REQ);
		EventManager.dispatch(FXJEvent.NET_REQ_GAME_USER_AI, !PlayerMgr.getInstance().getMyPlayerInfo().isAi);
		this.node.destroy()
	}

	//点击设置
	onSettingClick(event: EventTouch) {
		// EventManager.dispatch(FXJEvent.REPORT_CLIENT_CLICK, { eventID: ReportConfig.setLayer_2 });
		// EventManager.dispatch(FXJEvent.REPORT_CLIENT_CLICK, { eventID: ReportConfig.game_4 });
		EventManager.dispatch(FXJEvent.SYS_PLAY_EFFECT, FXJSound.CommClick);
		EventManager.dispatch(FXJEvent.VIEW_UI_OPEN, UIID.SettingPrefab, null, null, null, true);
		this.node.destroy()
	}
	//点击菜单
	onClickMore(event: EventTouch) {
		EventManager.dispatch(FXJEvent.SYS_PLAY_EFFECT, FXJSound.CommClick);
		this.node.destroy();
	}
	//销毁
	onDestroy() {
		EventManager.dispatch(FXJEvent.VIEW_DESK_BTN_MENU_UPDATE, true);
	};

}

