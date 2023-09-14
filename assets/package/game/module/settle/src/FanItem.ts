
import { Color, Label, Sprite, SpriteAtlas, _decorator } from 'cc';
import { Utils } from '../../../../../framework/Utils';
import { SettleMgr } from '../../../cache/SettleMgr';
import { FXJRes } from '../../../common/FXJRes';
import { Game } from '../../../common/idl/Game';
import ListItem from './list/ListItem';
const { ccclass, property } = _decorator;

/**
 * Name = ListItem
 * URL = db://assets/package/game/module/settle/src/ListItem.ts
 * Time = Tue Aug 08 2023 18:10:14 GMT+0800 (中国标准时间)
 * Author = qwe757964
 *
 * Life: onLoad-->onInitModuleEvent-->onEnable->start->update->lateUpdate->onDisable->onDestroy
 * 
 */
export enum WinItemColor {
	Win = "#D34000",
	Fail = "#B67D41"
}

export enum FailItemColor {
	Win = "#457BDE",
	Fail = "#7D8ACE"
}


@ccclass('ListItem')
export class FanItem extends ListItem {
	@property(Sprite)
	public bg: Sprite | null = null;

	@property(Label)
	public up_down: Label | null = null;

	@property(Label)
	public detail: Label | null = null;

	@property(Label)
	public multiple_num: Label | null = null;
	/** override 初始化模块事件 */
	protected onInitModuleEvent() {

	};


	/** 更新界面 */
	updateItemProps(index: number, data: Game.ISettleFanExtendInfo) {
		let totalStr: string = data.totalFanStr ? data.totalFanStr : "0";
		this.multiple_num.string = totalStr + "番";
		this.up_down.string = `[${data.seatStr}]`;
		let fanList: Game.IFanInfo[] = data.fanInfo;
		let fanStr = "";
		for (let i = 0; i < fanList.length; i++) {
			const num: number = parseInt(fanList[i].fan);
			let fanName: string = fanList[i].fanName;
			if (num) {
				fanName = fanName + "X" + fanList[i].fan
			}
			if (i !== fanList.length - 1) {
				fanName = fanName + "、"
			}
			fanStr = fanStr + fanName;
		}
		this.detail.string = fanStr;

		this.setListBgColor(data);
	};

	setListBgColor(data: Game.ISettleFanExtendInfo) {
		let myInfo: Game.ITotalInfo = SettleMgr.getInstance().getMyTotalInfo();
		let prefixStr: string = myInfo.bWin !== -1 ? "win_" : "fail_";
		let listStr: string = data.totalFan > 0 ? "list2" : "list1";
		let bgStr: string = `${prefixStr}${listStr}`;
		let frameBg = Utils.string_format(FXJRes.Prefab_Settle_Image.plistKey, bgStr)

		this.getPreLoaderRes(FXJRes.Prefab_Settle_Image.bundle, FXJRes.Prefab_Settle_Image.path, SpriteAtlas, (atlas) => {
			if (!atlas) {
				return
			}
			let bgAtlas = atlas.getSpriteFrame(frameBg);
			if (bgAtlas) {
				this.bg.spriteFrame = bgAtlas;
			}
		});
		let colorItem: any = myInfo.bWin !== -1 ? WinItemColor : FailItemColor;
		let colorStr: string = data.totalFan > 0 ? colorItem.Win : colorItem.Fail;
		let normalColor = new Color(colorStr);
		this.up_down.color = normalColor;
		this.detail.color = normalColor;
		this.multiple_num.color = normalColor;
	}

}

