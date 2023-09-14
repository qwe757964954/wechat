
import { Node, _decorator } from 'cc';
import { GCache } from '../../../cache/GCache';
import { EventManager } from '../../../framework/manager/EventManager';
import { BaseComponent } from '../../../framework/vc/BaseComponent';
import { FXJEvent } from '../common/FXJEvent';
import { FXJUIID } from '../common/FXJRes';
import { FXJSound } from '../common/FXJSound';
import { GameEvent } from '../common/GameEvent';
const { ccclass, property, menu } = _decorator;
/**
 * Name = GameMenuPrefabCtr
 * URL = db://assets/package/game/scripts/GameMenuPrefabCtr.ts
 * Time = Thu Jul 27 2023 16:05:53 GMT+0800 (中国标准时间)
 * Author = harvyson
 * 游戏菜单
 * Life: onLoad-->onInitModuleEvent-->onEnable->start->update->lateUpdate->onDisable->onDestroy
 * 
 */

@ccclass('GameMenuPrefabCtr')
//方便编辑器识别的菜单项目
@menu('prefab/game/GameMenuPrefabCtr')
export class GameMenuPrefabCtr extends BaseComponent {

	/** 更多按钮节点 */
	@property({ tooltip: "更多按钮节点", type: Node })
	private btnToolBar: Node | null = null;

	/** 返回按钮节点 */
	@property({ tooltip: "返回按钮节点", type: Node })
	private btnBack: Node | null = null;

	/** 聊天按钮节点 */
	@property({ tooltip: "聊天按钮节点", type: Node })
	private btnChat: Node | null = null;

	/** 时间节点 */
	@property({ tooltip: "时间节点", type: Node })
	private timeLayout: Node | null = null;



	/** 红点UI队列 */
	_redDotView: { [key: string]: Node } = {};

	/**模块事件定义 */
	protected onInitModuleEvent() {
		//显示或隐藏更多
		this.addModelListener(FXJEvent.VIEW_DESK_BTN_MENU_UPDATE, this.showOrHideBtnMore);
		// //玩家进入房间 显示更新时间
		this.addModelListener(GameEvent.VIEW_BROADCAST_PLAYER_ENTER, this.onPlayerInto);

		//红点更新
		this.addModelListener(FXJEvent.NOTIFY_UPDATE_RED_DOT, this.refreshRedDot);
	}

	onLoad() {
		this.btnToolBar.active = false;
		this.btnBack.active = false;
		this.btnChat.active = false;
		this.timeLayout.active = false;
		this.initData();
		this.refreshRedDot();
	};

	start() {

	};


	//初始化数据
	initData() {
		this._redDotView = {
			// /** 每日任务 */
			// [GConstants.RedDotConf.Task_Day]: this.btnTask,
			// /** 每周任务 */
			// [GConstants.RedDotConf.Task_Week]: this.btnTask,
		}


	}
	/** 显示或隐藏更多 */
	showOrHideBtnMore(event = null, state) {
		this.btnToolBar.active = state;
	}
	/** 收到消息:用户进入房间 */
	onPlayerInto(event, uid) {
		if (uid == GCache.User.getUserMid()) {
			this.btnBack.active = false;
			this.btnToolBar.active = true;
			this.btnChat.active = true;
		}
	}



	//点击退出
	onClickBack(event: Event) {
		EventManager.dispatch(FXJEvent.SYS_PLAY_EFFECT, FXJSound.CommClick);
		EventManager.dispatch(FXJEvent.NET_REQ_LOGOUT_IN_GAME);
		// EventManager.dispatch(FXJEvent.REPORT_CLIENT_CLICK, { eventID: ReportConfig.game_1 });
	}

	//点击更多
	onClickToolBar(event: Event) {
		EventManager.dispatch(FXJEvent.SYS_PLAY_EFFECT, FXJSound.CommClick);
		this.showOrHideBtnMore(null, false);
		EventManager.dispatch(FXJEvent.GAME_OPEN_POPUP, FXJUIID.ToolBarPrefab, null, {})
		// EventManager.dispatch(FXJEvent.REPORT_CLIENT_CLICK, { eventID: ReportConfig.game_2 });
	}

	//点击聊天
	onClickChat(event) {
		EventManager.dispatch(FXJEvent.SYS_PLAY_EFFECT, FXJSound.CommClick);
		EventManager.dispatch(FXJEvent.GAME_OPEN_POPUP, FXJUIID.GameChatPrefab, null, {});
		// EventManager.dispatch(FXJEvent.REPORT_CLIENT_CLICK, { eventID: ReportConfig.game_6 });
	}






	/** 红点更新 */
	refreshRedDot(event = null, keyType = null) {
		if (keyType == null) {
			for (let keyType in this._redDotView) {
				let imgRedDot = this._redDotView[keyType].getChildByName("img_dot");
				if (imgRedDot) {
					imgRedDot.active = GCache.RedDot.hasRedDot(keyType, keyType);
				}
			}
		} else {
			if (this._redDotView[keyType] == null) {
				return;
			}
			let imgRedDot = this._redDotView[keyType].getChildByName("img_dot");
			if (imgRedDot) {
				imgRedDot.active = GCache.RedDot.hasRedDot(keyType, keyType);
			}
		}
	}

	//销毁
	onDestroy() {

	};

}