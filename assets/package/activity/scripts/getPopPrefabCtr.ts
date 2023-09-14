import { Label, Layout, Node, Sprite, _decorator, instantiate } from 'cc';
import { AppEvent } from '../../../config/AppEvent';
import { AppSound } from '../../../config/AppSound';
import { GameRes } from '../../../config/GameRes';
import { inf_GetPropItem, inf_SpineAniCreate } from '../../../framework/InterfaceDefines';
import { Utils } from '../../../framework/Utils';
import { DelegateComponent } from '../../../framework/layer/DelegateComponent';
import { EventManager } from '../../../framework/manager/EventManager';
import { BaseComponent } from '../../../framework/vc/BaseComponent';
const { ccclass, property, menu } = _decorator;

/**
 * Name = getPopPrefabCtr
 * URL = db://assets/package/hall/scripts/getPopPrefabCtr.ts
 * Time = Wed Nov 16 2022 17:50:14 GMT+0800 (中国标准时间)
 * Author = Tomoe
 *
 * Life: onLoad-->onEnable->start->update->lateUpdate->onDisable->onDestroy
 */

let animConfig = {
	get: ["doudou", "get", "get_loop"],
	get_TS: ["TS_light_chuchang", "TS_light_loop", "TS_tihuan"],
	light: ["light"],//skin:["A","B","S","SS"]
	GetRoles: ["getroles", "getroles_loop"],//skin:["A","B","S","SS"]
}

@ccclass('getPopPrefabCtr')
//方便编辑器识别的菜单项目
@menu('prefab/activity/getPopPrefabCtr')
export class getPopPrefabCtr extends BaseComponent {

	//道具页面
	@property({ tooltip: "道具页面", type: Node })
	private itemLayout: Node | null = null;

	//道具背景动画节点
	@property({ tooltip: "道具动画节点", type: Node })
	private itemBgAnim: Node | null = null;

	//道具父节点
	@property({ tooltip: "用户头像框", type: Node })
	private itemIdList: Node | null = null;
	//道具节点
	@property({ tooltip: "道具节点", type: Node })
	private itemNode: Node | null = null;

	//金豆动画
	@property({ tooltip: "金豆动画", type: Node })
	private goldAnim: Node | null = null;

	//奖品数据
	private awardData: Array<inf_GetPropItem> = [];

	onLoad() {
		this.getComp();
		this.initView();
		this.showGetPropsAnim();
	};
	/** 隐藏遮罩层 */
	hideMaskNode() {
		let maskNode = this.node.parent.getChildByName("Mask");
		if (maskNode) {
			maskNode.active = false;
		}
	}
	getComp() {
		let comp = this.node.getComponent(DelegateComponent);
		if (comp) {
			this.awardData = comp.getParams()
		}
		this.awardData = Utils.table_verify(this.awardData, true);
	}

	start() {
		this.hideMaskNode();
	};

	initView() {
		this.itemLayout.active = false;
		this.itemNode.active = false;
	}

	/** 显示道具获得动画 */
	showGetPropsAnim() {
		this.itemLayout.active = true;
		this.playItemAnim();
	}

	playItemAnim(isGold: boolean = false) {
		let self = this;
		let goldAni: inf_SpineAniCreate = {
			resConf: GameRes.Spine_Get_Item,
			aniName: animConfig.get[0],
			parentNode: this.goldAnim,
			trackIndex: null,
			isLoop: false,
			callStartFunc: () => {
				EventManager.dispatch(AppEvent.SYS_PLAY_EFFECT, AppSound.GetGoodsCoin);
			}
		}

		let getLoopAni: inf_SpineAniCreate = {
			resConf: GameRes.Spine_Get_Item,
			aniName: animConfig.get[2],
			parentNode: this.itemBgAnim,
			trackIndex: null,
			isLoop: true,
			callStartFunc: () => {
				self.showItem();
				if (isGold == true) {
					EventManager.dispatch(AppEvent.SYS_ANI_PLAY, goldAni);
				} else {
					EventManager.dispatch(AppEvent.SYS_PLAY_EFFECT, AppSound.GetGoods);
				}
			}
		}
		let param1: inf_SpineAniCreate = {
			resConf: GameRes.Spine_Get_Item,
			aniName: animConfig.get[1],
			parentNode: this.itemBgAnim,
			trackIndex: null,
			isLoop: false,
			callStartFunc: () => {
				// if (isGold == false) {
				// 	// EventManager.dispatch(AppEvent.SYS_PLAY_EFFECT, AppSound.GetGoods);
				// }else{
				// 	EventManager.dispatch(AppEvent.SYS_PLAY_EFFECT, AppSound.GetGoodsCoin);
				// }
				self.itemBgAnim.removeAllChildren();
				EventManager.dispatch(AppEvent.SYS_ANI_PLAY, getLoopAni)
			},
			callEndFunc: () => {
				// EventManager.dispatch(AppEvent.SYS_ANI_PLAY, getLoopAni)
				// if (isGold == true) {
				// 	EventManager.dispatch(AppEvent.SYS_ANI_PLAY, goldAni)
				// }
			}
		}

		EventManager.dispatch(AppEvent.SYS_ANI_PLAY, getLoopAni)

	}

	showItem() {
		if (!this.node || this.node.isValid == false) {
			return;
		}
		if (Utils.table_isEmpty(this.awardData)) {
			for (let item of this.itemIdList.children) {
				item.destroy()
			}
			return
		}
		let max: number = this.awardData.length
		let childLength: number = this.itemIdList.children.length
		let childs = this.itemIdList.children
		if (max < childLength) {
			max = childLength;
		}
		for (let i = (max - 1); i >= 0; i--) {
			let nodeItem = childs[i]
			if (nodeItem && !this.awardData[i]) {
				nodeItem.destroy();
			}
		}
		for (let j = 0; j < this.awardData.length; j++) {
			let data: object = this.awardData[j]
			let nodeItem = childs[j]
			if (!nodeItem) {
				nodeItem = instantiate(this.itemNode);
				this.itemIdList.addChild(nodeItem)
			}

			let type = data['type'];
			let num = data['num'];
			let name = data['name'];
			let str = "";
			let numStr = Utils.string_moneyToShortNumber(num,true);
			if (!Utils.string_isEmpty(name)) {
				str = name + "X" + numStr;
			} else {
				str = String(num);
			}
			
			let itemName = nodeItem.getChildByName('numlabel').getComponent(Label)
			let itemCoin = nodeItem.getChildByName('img_icon').getComponent(Sprite)
			itemName.string = str;
			itemCoin.node.active = false;

			this.getPreLoaderRemoteRes(data['icon'], '.png', (imageAsset) => {
				if (!imageAsset) { //资源可能还在加载中
					return
				}
				if (!itemCoin.node || itemCoin.node.isValid == false) {
					return;
				}
				let spriteFrame = Utils.image_ImageAssetToSpriteFrame(imageAsset)
				if (spriteFrame) {
					itemCoin.spriteFrame = spriteFrame;
					itemCoin.node.active = true;
				}
			});
			nodeItem.active = true
		}
		this.itemIdList.getComponent(Layout).updateLayout();
		this.itemIdList.active = true;
	}

	//播放角色动画 暂时无
	// playRoleAnim(skin, roleID) {
	// 	this.roleBgAnim.removeAllChildren();
	// 	let param = {
	// 		resConf: GameRes.Spine_Get_Role,
	// 		aniName: animConfig.GetRoles[1],
	// 		parentNode: this.roleBgAnim,
	// 		trackIndex: null,
	// 		isLoop: true,
	// 		skin: skin,
	// 	}
	// 	EventManager.dispatch(AppEvent.SYS_ANI_PLAY, param)

	// 	let param2 = {
	// 		resConf: GCache.GoodsData.getRoleAnimConfigById(roleID).path,
	// 		aniName: GCache.GoodsData.getRoleAnimConfigById(roleID).standby[2],
	// 		parentNode: this.roleAnim,
	// 		trackIndex: null,
	// 		isLoop: true,
	// 	}
	// 	EventManager.dispatch(AppEvent.SYS_ANI_PLAY, param2)
	// 	let param3 = {
	// 		resConf: GameRes.Spine_Get_Close,
	// 		aniName: animConfig.light[0],
	// 		parentNode: this.lightAnim,
	// 		trackIndex: null,
	// 		isLoop: false,
	// 		skin: skin,
	// 	}
	// 	EventManager.dispatch(AppEvent.SYS_ANI_PLAY, param3)
	// }

	onCloseClick() {
		console.log("点击了")
		this.node.destroy()
	}

	//销毁
	onDestroy() {

	};

}

