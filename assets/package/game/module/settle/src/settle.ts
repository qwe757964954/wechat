

import { Color, instantiate, Label, Layout, Node, Prefab, ScrollView, Sprite, SpriteAtlas, Vec3, _decorator } from 'cc';
import { EventManager } from '../../../../../framework/manager/EventManager';
import { Utils } from '../../../../../framework/Utils';
import { BaseComponent } from '../../../../../framework/vc/BaseComponent';
import { PlayerMgr } from '../../../cache/PlayerMgr';
import { SettleMgr } from '../../../cache/SettleMgr';
import { FXJEvent } from '../../../common/FXJEvent';
import { FXJRes, FXJUIID } from '../../../common/FXJRes';
import { FXJSound } from '../../../common/FXJSound';
import { GameEvent } from '../../../common/GameEvent';
import { Common } from '../../../common/idl/Common';
import { Game } from '../../../common/idl/Game';
import { Card } from '../../card/src/Card';
import { BottomItem } from './BottomItem';
import { FanItem } from './FanItem';
import List from './list/List';
const { ccclass, property } = _decorator;
/**
 * Name = settle
 * URL = db://assets/package/game/module/settle/src/settle.ts
 * Time = Wed Aug 02 2023 10:58:00 GMT+0800 (中国标准时间)
 * Author = qwe757964
 *
 * Life: onLoad-->onInitModuleEvent-->onEnable->start->update->lateUpdate->onDisable->onDestroy
 * 
 */

export enum TitleColor {
	Win = "#D23A00",
	Fail = "#667AD2"
}

export enum Gender {
	Male = "xiaobo",
	Female = "xiaoya",
}

export enum VictoryStatus {
	Win = "win",
	Fail = "fail",
}

@ccclass('settle')
export class settle extends BaseComponent {
	@property(Sprite)
	public bg: Sprite | null = null;

	@property(Sprite)
	public left_bg: Sprite | null = null;

	@property(Sprite)
	public title: Sprite | null = null;

	@property(Sprite)
	public title_bg: Sprite | null = null;

	@property(Sprite)
	public playerSprite: Sprite | null = null;


	@property(ScrollView)
	public scrollView: ScrollView | null = null;

	@property(Node)
	public huLayout: Node | null = null;

	@property(Node)
	public moneyLayout: Node | null = null;

	@property(Label)
	public tittle_str: Label | null = null;

	@property(Layout)
	public card_layout: Layout | null = null;

	@property(Prefab)
	public card_Prefab: Prefab | null = null;

	@property(Node)
	public huTag: Node | null = null;

	//水平列表
	@property(List)
	bottomScroll: List = null;

	//垂直列表
	@property(List)
	moneyScroll: List = null;

	//code 对应的图集
	titleMap = new Map<string, string>();

	private _moneyResKey = { "+": "+", "-": "-", ".": ".", "万": "wan", "亿": "yi", "0": "0", "1": "1", "2": "2", "3": "3", "4": "4", "5": "5", "6": "6", "7": "7", "8": "8", "9": "9", };
	private _huResKey = { "共胡": "gonghu", "次": "ci", "0": "0", "1": "1", "2": "2", "3": "3", "4": "4", "5": "5", "6": "6", "7": "7", "8": "8", "9": "9", };

	/** override 初始化模块事件 */
	protected onInitModuleEvent() {

	};

	onLoad() {
		this.titleMap.set("common_hu", "平胡");
		this.titleMap.set("zi_mo", "自摸");
		this.titleMap.set("huang_zhuang", "黄庄");
		let fanExtendInfos: Game.ISettleFanExtendInfo[] = SettleMgr.getInstance().filterFanExtendInfo();
		this.moneyScroll.numItems = fanExtendInfos.length;
		let opponentInfos: Game.ITotalInfo[] = SettleMgr.getInstance().getOpponentTotalInfo();
		this.bottomScroll.numItems = opponentInfos.length;
		this.updateSettleInfo();
	};

	onListBottomHRender(item: Node, idx: number) {
		let opponentInfos: Game.ITotalInfo[] = SettleMgr.getInstance().getOpponentTotalInfo();
		let info: Game.ITotalInfo = opponentInfos[idx];
		var scriptPlayer: BottomItem = item.getComponent(BottomItem);
		scriptPlayer.updateItemProps(info);
	}

	onListMoneyVRender(item: Node, idx: number) {
		let fanExtendInfos: Game.ISettleFanExtendInfo[] = SettleMgr.getInstance().filterFanExtendInfo();
		let fanExtendInfo: Game.ISettleFanExtendInfo = fanExtendInfos[idx];
		var scriptPlayer: FanItem = item.getComponent(FanItem);
		scriptPlayer.updateItemProps(idx, fanExtendInfo);
	}

	updateSettleInfo() {
		let myInfo: Game.ITotalInfo = SettleMgr.getInstance().getMyTotalInfo();
		let fanData: Game.IFanInfo = SettleMgr.getInstance().getMaxWinType();
		this.tittle_str.string = SettleMgr.getInstance().settleType === "huang_zhuang" ? this.titleMap.get(SettleMgr.getInstance().settleType) : fanData.fanName;
		let colorStr: string = myInfo.bWin !== -1 ? TitleColor.Win : TitleColor.Fail;
		let normalColor = new Color(colorStr);
		this.tittle_str.color = normalColor;

		let bgStr: string = myInfo.bWin !== -1 ? "win_bg" : "failure_bg";
		let leftStr: string = myInfo.bWin !== -1 ? "settle_win" : "settle_failure";
		let titleStr: string = myInfo.bWin !== -1 ? "win_title_bg" : "fail_title_bg";
		let forward: string = myInfo.bWin !== -1 ? "+" : "";
		let moneyAtlas = myInfo.bWin !== -1 ? FXJRes.Prefab_Settle_Win : FXJRes.Prefab_Settle_Fail;
		let huAtlas = myInfo.bWin !== -1 ? FXJRes.Prefab_Settle_Hu_Win : FXJRes.Prefab_Settle_Hu_Fail;
		let frameBg = Utils.string_format(FXJRes.Prefab_Settle_Image.plistKey, bgStr)
		let frameLeft = Utils.string_format(FXJRes.Prefab_Settle_Image.plistKey, leftStr)
		let frameTitle = Utils.string_format(FXJRes.Prefab_Settle_Image.plistKey, titleStr)

		this.updatePlayerStatus();

		this.getPreLoaderRes(FXJRes.Prefab_Settle_Image.bundle, FXJRes.Prefab_Settle_Image.path, SpriteAtlas, (atlas) => {
			if (!atlas) {
				return
			}
			let bgAtlas = atlas.getSpriteFrame(frameBg);
			if (bgAtlas) {
				this.bg.spriteFrame = bgAtlas;
			}
			let leftAtlas = atlas.getSpriteFrame(frameLeft);
			if (leftAtlas) {
				this.left_bg.spriteFrame = leftAtlas;
			}
			let titleAtlas = atlas.getSpriteFrame(frameTitle);
			if (titleAtlas) {
				this.title_bg.spriteFrame = titleAtlas;
			}
		});
		let moneyStr: string = `${forward}${myInfo.winMoney}`;
		let numList = String(moneyStr).split("");
		let numKeyList = [];
		for (let i = 0; i < numList.length; i++) {
			numKeyList.push(this._moneyResKey[numList[i]])
		}
		this.createNumSprImg(this.moneyLayout, moneyAtlas, numKeyList, 0);

		// let fanStr:string = `${myInfo.totalFanStr}次`;

		// let fanList = String(fanStr).split("");
		// if (fanList.length > 0) {
		// 	fanList.unshift("共胡");
		// }
		// let fanKeyList = [];
		// for (let i = 0; i < fanList.length; i++) {
		// 	fanKeyList.push(this._huResKey[fanList[i]])
		// }
		// this.createNumSprImg(this.huLayout, huAtlas, fanKeyList, 0);
		if (SettleMgr.getInstance().settleType === "huang_zhuang") {
			this.updateMyselfCards();
		} else {
			this.updateWinCards();
		}

	}

	updatePlayerStatus() {
		let myInfo: Game.ITotalInfo = SettleMgr.getInstance().getMyTotalInfo();
		let gameUserInfo: Common.GameUserInfo = JSON.parse(myInfo.strUserInfo);
		let playerAtlas = gameUserInfo.sex !== 2 ? FXJRes.Prefab_Settle_Xiaobo : FXJRes.Prefab_Settle_Xiaoya;
		let playerName = gameUserInfo.sex !== 2 ? Gender.Male : Gender.Female;
		let playerStatus = myInfo.bWin !== -1 ? VictoryStatus.Win : VictoryStatus.Fail;
		let playerFrame = `${playerName}_${playerStatus}`;

		this.getPreLoaderRes(playerAtlas.bundle, playerAtlas.path, SpriteAtlas, (atlas) => {
			if (!atlas) {
				return
			}
			let bgAtlas = atlas.getSpriteFrame(playerFrame);
			if (bgAtlas) {
				this.playerSprite.spriteFrame = bgAtlas;
			}
		});
	}

	updateMyselfCards() {
		let array = PlayerMgr.getInstance().getMyhands();
		for (let i = 0; i < array.length; i++) {
			let cardValue: number = array[i];
			let node = instantiate(this.card_Prefab);
			node.getComponent(Card).setCardByte(cardValue);
			node.getComponent(Card).setCardSize(50,70);
			node.getComponent(Card).setCardAngle(90,0,0);
            node.getComponent(Card).setCardAlbedo(0.8, 0.8, 0.8);
			this.card_layout.node.addChild(node);
		}
	}

	// 封装带有异步操作的for循环
	asyncForLoop(): Promise<void> {
		let winPlayer: Common.IPlayerInfo = SettleMgr.getInstance().getWinPlayerInfo();
		
		
		if(Utils.isNull(winPlayer.handCards)){
			return;
		}
		console.log("winPlayer.handCards_________________", winPlayer.handCards);
		return new Promise((resolve) => {
			let array = winPlayer.handCards.filter(item => item !== winPlayer.huCard); // 移除值为3的元素
			for (let i = 0; i < array.length; i++) {
				let cardValue: number = winPlayer.handCards[i];
				let node = instantiate(this.card_Prefab);
				node.getComponent(Card).setCardByte(cardValue);
				node.getComponent(Card).setCardSize(50,70);
				node.getComponent(Card).setCardAngle(90,0,0);
                node.getComponent(Card).setCardAlbedo(0.8, 0.8, 0.8);
				this.card_layout.node.addChild(node);
				resolve();
			}
		});
	}

	async updateWinCards() {
		let winPlayer: Common.IPlayerInfo = SettleMgr.getInstance().getWinPlayerInfo();
		if (winPlayer === null) {
			return;
		}
		await this.asyncForLoop(); // 等待for循环执行完毕
		let hu_node = instantiate(this.card_Prefab);
		if (Utils.isNull(winPlayer.huCard)) {
			return;
		}
		console.log("winPlayer.huCard_________________", winPlayer.huCard);
		hu_node.getComponent(Card).setCardByte(winPlayer.huCard);
		hu_node.getComponent(Card).setCardSize(50,70);
		hu_node.getComponent(Card).setCardAngle(90,0,0);
        hu_node.getComponent(Card).setCardAlbedo(0.8, 0.8, 0.8);
		this.card_layout.node.addChild(hu_node);
		let hutag = instantiate(this.huTag);
		hutag.active = true;
		hu_node.addChild(hutag);
		hutag.setPosition(-10.006, 17.419);
	}

	onCreateNextGame() {
		EventManager.dispatch(FXJEvent.GAME_CLOSE_POPUP, FXJUIID.GameSettlePrefab);
		EventManager.dispatch(FXJEvent.SYS_PLAY_EFFECT, FXJSound.CommClick);


		EventManager.dispatch(GameEvent.EXITS_SETTLE_VIEW);
		EventManager.dispatch(GameEvent.NEXT_GAME_OPERATION);
	}

	onCloseGame() {
		EventManager.dispatch(FXJEvent.GAME_CLOSE_POPUP, FXJUIID.GameSettlePrefab);
		EventManager.dispatch(FXJEvent.SYS_PLAY_EFFECT, FXJSound.CommClick);
		EventManager.dispatch(GameEvent.EXITS_SETTLE_VIEW);
	}

	/** 创建数字图片集合 */
	createNumSprImg(parent: Node, plist: { bundle: string, path: string }, keyList: Array<string>, dianPosY: number = 0) {
		parent.removeAllChildren();
		if (!keyList || keyList.length == 0) {
			return;
		}
		this.getPreLoaderRes(plist.bundle, plist.path, SpriteAtlas, (atlas) => {
			keyList.forEach((key, index) => {
				let spriteFrame = atlas.getSpriteFrame(key)
				if (spriteFrame) {
					let sprNode = Utils.create_2DSprite(spriteFrame, key);
					parent.addChild(sprNode);
					// if ((key == "." || key == "coin_dian") && dianPosY != null) {
					sprNode.setPosition(new Vec3(sprNode.position.x, dianPosY, sprNode.position.z));
					// }
				}

			})
		});
		parent.active = true;
	}

}

