
import { Color, Label, Node, Sprite, SpriteAtlas, _decorator } from 'cc';
import { Utils } from '../../../../../framework/Utils';
import { RoomMgr } from '../../../cache/RoomMgr';
import { FXJRes } from '../../../common/FXJRes';
import { Common } from '../../../common/idl/Common';
import { Game } from '../../../common/idl/Game';
import { CardUtil } from '../../../util/CardUtil';
import ListItem from './list/ListItem';
import { NodeHead } from './NodeHead';
const { ccclass, property } = _decorator;

/**
 * Name = BottomItem
 * URL = db://assets/package/game/module/settle/src/BottomItem.ts
 * Time = Tue Aug 08 2023 16:15:04 GMT+0800 (中国标准时间)
 * Author = qwe757964
 *
 * Life: onLoad-->onInitModuleEvent-->onEnable->start->update->lateUpdate->onDisable->onDestroy
 * 
 */

const winningColor: string = "#D56D44";
const losingColor: string = "#6585CA";

@ccclass('BottomItem')
export class BottomItem extends ListItem {
	@property(Sprite)
	public player_bg: Sprite | null = null;

	@property(Label)
	public up_down: Label | null = null;

	@property(Label)
	public nick_name: Label | null = null;

	@property(Label)
	public money: Label | null = null;

	@property(Sprite)
	public bankruptcy_tag: Sprite | null = null;

	@property(Node)
	public node_head: Node | null = null;

	//code 对应的图集
	upDownMap = new Map<number, string>();

	/** override 初始化模块事件 */
	protected onInitModuleEvent() {

	};


	updateItemProps(info: Game.ITotalInfo) {
		let gameUserInfo: Common.GameUserInfo = JSON.parse(info.strUserInfo)
		let nodeHeadCtr = this.node_head.getComponent(NodeHead)
		nodeHeadCtr.updateUserHead(gameUserInfo);
		nodeHeadCtr.updateUserHeadBox(gameUserInfo);

		this.nick_name.string = gameUserInfo.nickName;
		this.money.string = info.winMoney.toString();
		this.bankruptcy_tag.node.active = info.nMoney <= 0;
		this.up_down.string = CardUtil.calculatePlayerPosition(RoomMgr.getInstance().mySeatId, info.seatId);
		const colorStr: string = info.bWin === -1 ? losingColor : winningColor;
		let normalColor = new Color(colorStr);
		this.money.color = normalColor;
		let bgStr: string = info.bWin === -1 ? "player_fail_bg" : "player_win_bg";
		let frameBg = Utils.string_format(FXJRes.Prefab_Settle_Image.plistKey, bgStr);

		this.getPreLoaderRes(FXJRes.Prefab_Settle_Image.bundle, FXJRes.Prefab_Settle_Image.path, SpriteAtlas, (atlas) => {
			if (!atlas) {
				return;
			}
			let bgAtlas = atlas.getSpriteFrame(frameBg);
			if (bgAtlas) {
				this.player_bg.spriteFrame = bgAtlas;
			}
		});
	}
}

