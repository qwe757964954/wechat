
import { Node, _decorator } from 'cc';
import { GCache } from '../../../cache/GCache';
import { AppEvent } from '../../../config/AppEvent';
import { EventManager } from '../../../framework/manager/EventManager';
import { Utils } from '../../../framework/Utils';
import { BaseComponent } from '../../../framework/vc/BaseComponent';
const { ccclass, property, menu } = _decorator;

/**
 * Name = newPlayerBagCtr
 * URL = db://assets/resources/prefab/newPlayerBagCtr.ts
 * Time = Thu Apr 07 2022 17:23:43 GMT+0800 (中国标准时间)
 * Author = Tomoe
 *
 * Life: onLoad-->onEnable->start->update->lateUpdate->onDisable->onDestroy
 */

@ccclass('newPlayerBagCtr')

//方便编辑器识别的菜单项目
@menu('prefab/activity/newPlater')

export class newPlayerBagCtr extends BaseComponent {

	@property(Node)
	mainNode: Node = null!;
	//数据
	_mainData = null;
	//配置
	_newPlayerConfig = null;

	onLoad() {
		GCache.RedDot.update_reddot_newuserActivity();
		//请求获取奖励道具
		this.dispatchEvent(AppEvent.NET_REQ_NEW_PLAYER_GIFT_LIST)

		this.updateGiftList()
	};
	//模块事件
	onInitModuleEvent() {
		//更新道具列表
		this.addModelListener(AppEvent.ACTIVITY_UPDATE_NEW_PLAYER_GIFT, this.updateGiftList)
		//新手奖励/邀请奖励返回
		this.addModelListener(AppEvent.NET_FORWARD_NEW_PLAYER_REWARD, this.respNewPlayerReward)


	}

	onEnable() {

	}

	start() {

	};

	//新手奖励/邀请奖励返回
	respNewPlayerReward(event, isSuccess, respData, reqData) {

		if (isSuccess) {
			this.node.destroy();
		}
	}

	//更新道具列表
	updateGiftList(event: string = null, param = null) {
		// alert("收到消息，更新道具列表")
		let mainData = GCache.Activity.getNewPlayerActivityMain()
		if (Utils.isNull(mainData)) {
			return
		}
		mainData = Utils.table_verify(mainData)
		if (!Utils.isNull(mainData["newPeople"])) {
			let giftList = mainData["newPeople"]
			console.log("=======>>道具列表", giftList);
			this.updateItem(giftList);
		}
	}

	updateItem(giftList: any) {

	}


	onClick(e: any, custom: string) {
		if (custom == "getGift") {  //点击领取礼包
			EventManager.dispatch(AppEvent.NET_REQ_NEW_PLAYER_REWARD, 1);
			this.node.destroy();
		}
	}

	//销毁
	onDestroy() {
	};

}

