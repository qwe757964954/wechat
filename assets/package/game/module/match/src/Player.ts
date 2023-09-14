
import { Label, Node, sp, Sprite, SpriteAtlas, _decorator } from 'cc';
import { GCache } from '../../../../../cache/GCache';
import { BaseComponent } from '../../../../../framework/vc/BaseComponent';
import { FXJRes } from '../../../common/FXJRes';
import { Common } from '../../../common/idl/Common';
import { NodeHead } from '../../settle/src/NodeHead';
const { ccclass, property } = _decorator;

/**
 * Name = Player
 * URL = db://assets/package/game/module/match/src/Player.ts
 * Time = Fri Aug 04 2023 14:49:13 GMT+0800 (中国标准时间)
 * Author = qwe757964
 *
 * Life: onLoad-->onInitModuleEvent-->onEnable->start->update->lateUpdate->onDisable->onDestroy
 * 
 */

@ccclass('Player')
export class Player extends BaseComponent {

	@property(Label)
	public nick_name: Label | null = null;

	@property(Sprite)
	public y_head_bg: Sprite | null = null;

	@property(Node)
	public headNode: Node | null = null;

	@property(sp.Skeleton)
	public player: sp.Skeleton = null;

	public seatId?: number = 0;



	/** override 初始化模块事件 */
	protected onInitModuleEvent() {

	};

	changeSkin(sex: number) {
		let spineConfig: any = sex == 2 ? FXJRes.Spine_XiaoYa : FXJRes.Spine_XiaoBo;
		this.getPreLoaderRes(spineConfig.bundle, spineConfig.path, sp.SkeletonData, (spineAsset) => {
			if (!spineAsset || this.player === null) {
				console.log("Failed to load asset");
				return;
			}
			// let comp = this.getComponent('sp.Skeleton') as sp.Skeleton;
			this.player.skeletonData = spineAsset!;
			let ani = this.player.setAnimation(0, 'idle1', true);
			console.log("Load Success");
		})
	}
	changeHeadBg(userId: number) {
		// let spriteLoad = this.y_head_bg.getComponent(SpriteLoad);
		let frameName: string = ""
		if (GCache.User.getUserMid() === userId) {
			frameName = "r_head_bg";
		} else {
			frameName = "y_head_bg";
		}

		this.getPreLoaderRes(FXJRes.Prefab_Match_Image.bundle, FXJRes.Prefab_Match_Image.path, SpriteAtlas, (atlas) => {
			if (!atlas) {
				return;
			}
			let spriteFrame = atlas.getSpriteFrame(frameName)
			if (spriteFrame && this.y_head_bg) {
				this.y_head_bg.spriteFrame = spriteFrame;
			}
		})
	}
	public updatePlayerProperty(player: Common.IPlayerInfo) {
		this.seatId = player.seatId;
		let playerInfo: Common.GameUserInfo = JSON.parse(player.strUserInfo)
		this.nick_name.string = playerInfo.nickName;
		let nodeHeadCtr = this.headNode.getComponent(NodeHead)
		nodeHeadCtr.updateUserHead(playerInfo);
		nodeHeadCtr.updateUserHeadBox(playerInfo);
		this.changeSkin(playerInfo.sex);
		this.changeHeadBg(player.userId);
	}
}

