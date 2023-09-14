/**
 * Name = GameRoomHelper
 * URL = db://assets/proj/GameRoomHelper.ts
 * Time = Fri Jun 17 2022 12:11:10 GMT+0800 (中国标准时间)
 * Author = xueya
 * 游戏房间帮助类
 */

import { GCache } from "../cache/GCache";
import { AppEvent } from "../config/AppEvent";
import { GConstants } from "../config/GameConstant";
import { GameTxt } from "../config/GameTxt";
import { UIConfigData, UIID } from "../config/UIConfig";
import { LayerManager } from "../framework/layer/LayerManager";
import { EventManager } from "../framework/manager/EventManager";
import { Utils } from "../framework/Utils";
import { BaseControll } from "../framework/vc/BaseController";
import { Platform } from "../platform/Platform";

/**
 [[
	破产弹窗逻辑，先判断是否有首充礼包
	 1、有首充礼包，保险箱资产是否足够
			 1.1、保险箱资产足够，首充+保险箱取款        弹窗1
			 1.2、保险箱资产不足，判断是否还有破产补助
				 1.2.1 有破产补助：首充+破产补助          弹窗3
				 1.2.2 无破产补助：首充+无破产补助提示     弹窗5
	 2、无首充礼包，显示破产礼包,保险箱资产是否足够
		 2.1、保险箱资产足够，破产礼包+保险箱取款        弹窗2
		 2.2、保险箱资产不足，判断是否还有破产补助
			 2.2.1 有破产补助：破产礼包+破产补助          弹窗4
			 2.2.2 无破产补助：破产礼包+无破产补助提示     弹窗6
 ]]
 */

class _GameRoomHelper extends BaseControll {

	constructor() {
		super("GameRoomHelper")
	}
	//请求了检查破产礼包 但此时无数据 在返回数据是要显示
	checkShowBankruptParam = null;

	initData() {
		this.checkShowBankruptParam = null;
	}
	//进入房间主动调用方法
	intoRoomInit() {
		this.initData();

	}

	/**获取游戏对应场次是否存在破产礼包信息 */
	getBankruptGifts(gameId, levelID) {
		let isExit = false;
		levelID = Utils.number_valueOf(levelID, 0);

		let newBankUpGiftData = GCache.BankrupData.getNewBankUpGiftConf();
		newBankUpGiftData = Utils.table_verify(newBankUpGiftData);

		if (newBankUpGiftData["gameids"] && newBankUpGiftData["levelids"]) {
			for (let i in newBankUpGiftData["gameids"]) {
				if (Object.prototype.hasOwnProperty.call(newBankUpGiftData["gameids"], i)) {
					let v = newBankUpGiftData["gameids"][i];
					if (Utils.number_valueOf(v, -1) == Utils.number_valueOf(gameId, -2)) {
						isExit = true;
					}
				}
			}
		}
		if (isExit) {
			isExit = false;
			for (let i in newBankUpGiftData["levelids"]) {
				if (Object.prototype.hasOwnProperty.call(newBankUpGiftData["levelids"], i)) {
					let v = newBankUpGiftData["levelids"][i];
					if (Utils.string_endsWith(levelID, Utils.nullToDefault(v, -1)) == true) {
						isExit = true;
					}
				}
			}
		}
		if (isExit) {
			return Utils.table_verify(newBankUpGiftData);
		} else {
			return {}
		}
	}
	/**
	 * 检查显示破产界面
	 * @param gameID 游戏ID
	 * @param levelID 房间level
	 * @param moneyID 货币id
	 * @param status 
	 * @param time 
	 * @returns 
	 */
	checkShowBankruptView(gameID, levelID, moneyID, status = null, time = null) {
		gameID = Utils.number_valueOf(gameID, null);
		levelID = Utils.number_valueOf(levelID, null);
		if (gameID == null || levelID == null) {
			return;
		}
		if (GCache.BankrupData.isMineBankrupt() == true) {
			this.print("===破产了  即将显示破产界面逻辑===");
			//破产礼包数据
			let data = this.getBankruptGifts(gameID, levelID);

			if (Utils.table_isEmpty(data) || Utils.table_isEmpty(data["giftPack"])) {
				//没有礼包配置数据，发送请求获取
				EventManager.dispatch(AppEvent.NET_REQ_BANKRUPT_GIFT_CONF, gameID, levelID);
				//标注破产礼包返回时要再次调用
				this.checkShowBankruptParam = { gameID: gameID, levelID: levelID, moneyID: moneyID, status: status, time: time };
				return;
			}
			let body = {
				gameID: gameID,
				levelID: levelID,
				moneyID: moneyID,
				status: status,
				time: time,
				config: data
			}

			//请求破产次数
			EventManager.dispatch(AppEvent.NET_REQ_BANKRUPT_COUNT);

			let needMoney = 3000;
			let info = GCache.SelectGame.getGameRoomInfoByRoomLevelID(gameID, levelID);
			info = Utils.table_verify(info);
			//当前场次需要多少银币
			needMoney = Utils.number_valueOf(info["min_money"], needMoney);
			//需要购买的银币数
			body["difMoney"] = Math.abs(needMoney - GCache.User.getUserMoneyByID(body.moneyID));

			//是否还有首充
			body["has_first_pay"] = false;
			//检查数据
			body = this.checkBankrupt(data);

			if (Platform.isCanPay() == false) {//不支持支付 则直接领取救济金
				this.print("不支持支付 则直接领取救济金");
				//领取救济金
				EventManager.dispatch(AppEvent.NET_REQ_BANKRUPT);
				return;
			}
			//打开破产界面
			LayerManager.clear(UIConfigData[UIID.BankupGift].layer);
			EventManager.dispatch(AppEvent.VIEW_UI_OPEN, UIID.BankupGift, body);
			Utils.dump("打开破产界面造的数据==>", body)
		}

	}
	//检查破产的 首充礼包、破产奖励、保险箱 逻辑
	checkBankrupt(data) {
		if (Utils.number_valueOf(data["status"]) == 1) {
			//忽略保险箱和破产补助
			//无破产补助：破产礼包+无破产补助提示
			data["bankrupt_type"] = GConstants.UserBankUpType.BANKRUPT_TYPE_OVER;
			data["title"] = GameTxt.bankup_gift_title_1;
			data._type = GConstants.BankupDialogType.GIVE_UP;
			return data;
		}
		if (GCache.User.getUserMoneyByID(data.moneyID, true) >= GConstants.UserBankUpType.BANKRUPT_TYPE_MINI) {
			//总资产足够，破产礼包+保险箱取款
			data["bankrupt_type"] = GConstants.UserBankUpType.BANKRUPT_TYPE_SAFEBOX;
			data["title"] = GameTxt.bankup_gift_title_2;
			data._type = data.has_first_pay ? GConstants.BankupDialogType.FIRST_SAFEBOX : GConstants.BankupDialogType.BANKRUPT_SAFEBOX;
		} else {
			if (GCache.BankrupData.isMineBankrupt() && GCache.BankrupData.isBankruptRewardRemain()) {
				//有破产补助：破产礼包+破产补助，并且没有配置破产回馈配置 
				data["bankrupt_type"] = GConstants.UserBankUpType.BANKRUPT_TYPE_BANKRUPT;
				data["title"] = GameTxt.bankup_gift_title_3;
				data._type = data.has_first_pay ? GConstants.BankupDialogType.BANKRUPT_FIRST : GConstants.BankupDialogType.BANKRUPT_BANKRUPTGIFT;

			} else {
				//无破产补助：破产礼包+无破产补助提示
				data["bankrupt_type"] = GConstants.UserBankUpType.BANKRUPT_TYPE_OVER;
				data["title"] = GameTxt.bankup_gift_title_1;
				data._type = data.has_first_pay ? GConstants.BankupDialogType.FIRST_NOBANKRUPT : GConstants.BankupDialogType.BANKRUPTGIFT_NOBANKRUPT;;
			}
		}
		return data;
	}

	/** 检查破产小红点 */
	checkBankruptFeedBackRedDot() {
		let bankruptFeedBackData = GCache.BankrupData.getBankUpFeedbackData();
		bankruptFeedBackData = Utils.table_verify(bankruptFeedBackData);
		bankruptFeedBackData["eTime"] = Utils.number_valueOf(bankruptFeedBackData["eTime"], 0);
		if (bankruptFeedBackData["eTime"] < Utils.time()) {
			//刷新破产小红点
			EventManager.dispatch(AppEvent.GAME_ROOM_BANKUP_REDDOT_REFRESH, false);
			return;
		}
		let isShow = false;
		if (bankruptFeedBackData["stallData"]) {
			bankruptFeedBackData["stallData"] = Utils.table_verify(bankruptFeedBackData["stallData"]);
			for (let i in bankruptFeedBackData["stallData"]) {
				if (Object.prototype.hasOwnProperty.call(bankruptFeedBackData["stallData"], i)) {
					let value = bankruptFeedBackData["stallData"][i];
					if (value["state"] == 1) {//已购买
						let goods = Utils.table_verify(value["goods"]);
						for (let b in goods) {
							if (Object.prototype.hasOwnProperty.call(goods, b)) {
								if (goods[b]["state"] == 1) {
									isShow = true;
								}
							}
						}
					}
				}
			}
		}
		//刷新破产小红点
		EventManager.dispatch(AppEvent.GAME_ROOM_BANKUP_REDDOT_REFRESH, isShow);
	}

	/** 检查是否破产 */
	checkIsBankrupt(gameID, levelID) {
		gameID = Utils.nullToDefault(gameID, null);
		levelID = Utils.nullToDefault(levelID, null);
		if (GCache.SelectGame.getPropByLevelPropName(gameID, levelID, "broken_stat_in") == false) {
			//子游戏不检查破产
			this.print("checkIsBankrupt : 子游戏不检查破产");
			return false;
		}
		return GCache.BankrupData.isMineBankrupt();
	}

	/**
	 * 结算后检查是否破产
	 * 破产逻辑：房间内判断破产后，调用 当破产时发送消息checkIsBankruptAfterGameOver 如果配置开启了破产支付，就会调用支付。否则会退出房间
	 * @returns 
	 */
	checkIsBankruptAfterGameOver() {
		let state = GCache.BankrupData.isMineBankrupt();
		if (state) {
			if (GCache.BankrupData.isShowBankruptPayInRoom()) {
				//房间破产需要弹出破产支付弹框
				EventManager.dispatch(AppEvent.NET_REQ_GOODS_INFO, { scene: GConstants.GoodsListID.Bankruptcy });

			} else {
				//没有房间破产充值的情况下，踢出房间
				EventManager.dispatch(AppEvent.NET_REQ_LOGOUT_IN_GAME_FORCE);
			}
			return true;
		} else {
			return false;
		}
	}

	//结算时，检测场次升降级
	checkIsLevelUp(isByLoginMoney = false) {
		let kickStatus = GCache.Desk.KickUserStatus;
		if (GCache.Desk.KickUserStatus == 9001) {//此时server要升级，重新走换桌流程
			GCache.Desk.KickUserStatus = 0;
		}
		let flag = false;
		let roomUpLevelInfo = GCache.SelectGame.getRoomUpLevelInfo(); //升降级信息
		if (roomUpLevelInfo) {
			if (roomUpLevelInfo["flag"] == 1) {//升级
				this._handleLevelUp(roomUpLevelInfo["level"])
				flag = true;
			} else if (roomUpLevelInfo["flag"] == -1) {
				this._handleLevelDown(roomUpLevelInfo["level"]);
				// 降级时，调用支付
				GCache.SelectGame.setRoomUpLevelInfo({});
				flag = false;
			}
		} else {
			if (isByLoginMoney) {

			} else { }
		}
	}
	/** 游戏升场 */
	_handleLevelUp(newLevelId) {
		if (Utils.isNull(newLevelId)) {
			return;
		}
		GCache.Desk.setCurLevelID(newLevelId)
		GCache.Desk.updateRoomInfoByKey("level", newLevelId);

		EventManager.dispatch(AppEvent.GAME_ROOM_LEVEL_CHANGE)
		let data = { exp: 0, level: newLevelId };
		EventManager.dispatch(AppEvent.GAME_ROOM_LEVEL_UP, data)
		GCache.SelectGame.setRoomUpLevelInfo({});

	}
	/** 资产不足降场 */
	_handleLevelDown(newLevelId) {
		if (Utils.isNull(newLevelId)) {
			return;
		}
		let curGameId = GCache.Desk.getCurGameID();
		let curLevelId = GCache.Desk.getCurLevelID();
		let minLoginMoney = GCache.SelectGame.getPropByLevelPropName(curGameId, curLevelId, "min_money");
		minLoginMoney = Utils.number_valueOf(minLoginMoney);
		let userMoney = GCache.Desk.mySelfPlayer.money;

		let diff = minLoginMoney - userMoney;
		// let data = {
		// 	gameid : curGameId,
		// 	level :curLevelId,
		// 	newLevel : level,
		// 	scene : PayIsolater.eGoodsListId.RoomLevelDown,
		// 	diffMoney = diff,
		// };
		// let info = {
		// 	param : data,
		// 	scene : data.scene,
		// 	diffMoney : diff;
		// 	newLevel : level;
		// 	propertyType = RoomPropertyData.getInstance(): getCurPropertyId();
		// };
		// let action = GameMechineConfig.ACTION_RECHARGE;
		// MechineManage.getInstance(): receiveAction(action, info);
		EventManager.dispatch(AppEvent.GAME_ROOM_LEVEL_DOWN_RECHANGE);
		GCache.SelectGame.setDegradeInfo({});
	}

	//当前场次是否能继续游戏
	//根据入场银币上下线来判断
	/** 当前场次是否能继续游戏  根据入场银币上下线来判断*/
	checkIsLegalPlay() {
		return this._checkIsLegal(false);
	}
	/**
	 * 
	 * @param isByExitMoney 是否以退场下限值为判断条件
	 * @param data 
	 */
	_checkIsLegal(isByExitMoney = false, data = null) {

	}
}


export const GameRoomHelper = new _GameRoomHelper();

