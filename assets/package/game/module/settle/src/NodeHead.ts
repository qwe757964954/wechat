
import { Node, _decorator } from 'cc';
import SpriteLoad from '../../../../../framework/gui/sprite/SpriteLoad';
import { Utils } from '../../../../../framework/Utils';
import { BaseComponent } from '../../../../../framework/vc/BaseComponent';
import { FXJRes } from '../../../common/FXJRes';
import { Common } from '../../../common/idl/Common';
const { ccclass, property } = _decorator;

/**
 * Name = NodeHead
 * URL = db://assets/package/game/module/settle/src/NodeHead.ts
 * Time = Wed Aug 09 2023 16:24:25 GMT+0800 (中国标准时间)
 * Author = qwe757964
 *
 * Life: onLoad-->onInitModuleEvent-->onEnable->start->update->lateUpdate->onDisable->onDestroy
 * 
 */

@ccclass('NodeHead')
export class NodeHead extends BaseComponent {
	@property({ tooltip: "玩家信息背景", type: Node })
	public headNode: Node | null = null;

	@property({ tooltip: "玩家信息背景", type: Node })
	public headBoxNode: Node | null = null;

	/** override 初始化模块事件 */
	protected onInitModuleEvent() {

	};

	onLoad() {

	};

	//更新用户头像
	updateUserHead(playerInfo: Common.GameUserInfo) {
		let spriteLoad = this.headNode.getComponent(SpriteLoad);
		let headArray = {
			s: playerInfo.avatar_s,
			m: playerInfo.avatar_m,
			b: playerInfo.avatar_b,
		}
		if (Utils.string_isHttp(headArray.s)) {
			spriteLoad.setRemoteUrl(headArray.s, () => {
				if (playerInfo.sex == 2) {
					spriteLoad.setLocalLoad(FXJRes.Picture_UserBigHead_girl.bundle, FXJRes.Picture_UserBigHead_girl.path);
				} else {
					spriteLoad.setLocalLoad(FXJRes.Picture_UserBigHead_boy.bundle, FXJRes.Picture_UserBigHead_boy.path);
				}
			})
		} else {
			if (playerInfo.sex == 2) {
				spriteLoad.setLocalLoad(FXJRes.Picture_UserBigHead_girl.bundle, FXJRes.Picture_UserBigHead_girl.path);
			} else {
				spriteLoad.setLocalLoad(FXJRes.Picture_UserBigHead_boy.bundle, FXJRes.Picture_UserBigHead_boy.path);
			}
		}
	}
	//更新用户头像框
	updateUserHeadBox(playerInfo: Common.GameUserInfo) {
		let spriteLoad = this.headBoxNode.getComponent(SpriteLoad);
		if (Utils.string_isEmpty(playerInfo.headBox) == false) {
			spriteLoad.setRemoteUrl(playerInfo.headBox)
		}
	}

}

