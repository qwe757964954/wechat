
import { ImageAsset, Label, Layout, Node, Size, Sprite, SpriteFrame, UITransform, Vec3, _decorator } from 'cc';
import { GCache } from '../../cache/GCache';
import { AppEvent } from '../../config/AppEvent';
import { AppSound } from '../../config/AppSound';
import { GameRes } from '../../config/GameRes';
import { Utils } from '../Utils';
import { resLoader } from '../loader/ResLoader';
import { EventManager } from '../manager/EventManager';
import { BaseComponent } from './BaseComponent';
const { ccclass, property } = _decorator;

/**
 * Name = PictureDialogComponent
 * URL = db://assets/package/login/scripts/PictureDialogComponent.ts
 * Time = Thu Aug 04 2022 17:12:23 GMT+0800 (中国标准时间)
 * Author = xueya
 *
 * Life: onLoad-->onEnable->start->update->lateUpdate->onDisable->onDestroy
 * 
 * 图片提示框
 * 适龄提示、规则说明、玩法规则、货币声明
 */

@ccclass('PictureDialogComponent')
export class PictureDialogComponent extends BaseComponent {

	//正文标题
	@property({ tooltip: "标题内容-文本", type: Label })
	labelTitle: Label = null!;

	//正文标题
	@property({ tooltip: "标题内容-图片", type: Sprite })
	sprTitle: Sprite = null!;

	//正文和按钮的根节点
	@property({ tooltip: "正文和按钮的根节点", type: Node })
	nodePanel: Node = null!;

	//正文根节点
	@property({ tooltip: "正文根节点", type: Node })
	nodeContentRoot: Node = null!;
	//按钮根节点
	@property({ tooltip: "按钮根节点", type: Node })
	nodeButtonRoot: Node = null!;
	//关闭按钮
	@property({ tooltip: "关闭按钮", type: Node })
	nodeButtonClose: Node = null!;

	//正文节点
	@property({ tooltip: "正文节点", type: Node })
	contentNode: Node = null!;

	@property({ tooltip: "滚动条节点", type: Node })
	scrollowBarNode: Node = null!;

	@property({ tooltip: "两个按钮的父节点", type: Node })
	nodeTwoBtn: Node = null!;

	@property({ tooltip: "一个按钮的父节点", type: Node })
	nodeOneBtn: Node = null!;

	//无内容时的节点
	@property({ tooltip: "无内容时的节点", type: Node })
	nodeNoTips: Node = null!;

	private _allResMapList = {
		"适龄提示": GameRes.Picture_AgePromit,
		"货币声明": GameRes.Picture_CoinHelp,
	}
	//已经加载的资源队列{type-{}}
	private _loadResMapList = {};
	//当前最大资源加载数量
	private _curMaxResNum = -1;
	//当前类型
	private _currowType: any = null;

	constructor() {
		super();
		this.preLoad();
	}
	//预加载
	preLoad() {
		if (!GCache.firstRunLoadSuccess) {
			return;
		}
		let self = this;

		for (let type in this._allResMapList) {
			let resConf = this._allResMapList[type];
			for (let i = 0; i < resConf.length; i++) {
				let oneResConf = resConf[i];
				resLoader.load(oneResConf.bundle, oneResConf.path, ImageAsset, (err: Error | null, imageAsset) => {
					if (err || !self._loadResMapList) {
						return;
					}
					if (!self._loadResMapList[type]) {
						self._loadResMapList[type] = {};
					}
					self._loadResMapList[type][i] = null;
					self._loadResMapList[type][i] = imageAsset;
					if (self._currowType == type) {
						self.onLoadCallback(self._currowType);
					}
				});
			};
		}
	}
	onLoad() {
		let comp = null;
		comp = this.node.getComponent("DelegateComponent")
		if (comp) {
			this._currowType = comp.getParams()
		}
		this.labelTitle.node.active = false;
		this.sprTitle.node.active = false;
		this.updateView();
		this.onLoadCallback(this._currowType);
	};

	//点击了同意
	onClickSure() {
		EventManager.dispatch(AppEvent.SYS_PLAY_EFFECT, AppSound.CommClick);
		this.node.destroy();
	}
	//点击了取消/关闭
	onClickCancel() {
		EventManager.dispatch(AppEvent.SYS_PLAY_EFFECT, AppSound.CommClick);
		this.node.destroy();
	}

	//更新界面
	updateView() {
		// this.labelTitle.string = String(this._currowType);
		this.sprTitle.node.active = true;
		if (this._allResMapList[this._currowType]) {
			this._curMaxResNum = this._allResMapList[this._currowType].length;
		}
		this.nodePanel.active = true;
		let uiTransform = this.nodeContentRoot.getComponent(UITransform)
		if (this._currowType == "连炸场玩法规则") {
			this.nodeButtonRoot.active = false;
			this.nodeButtonClose.active = true;
			uiTransform.setContentSize(new Size(uiTransform.width, this.nodePanel.getComponent(UITransform).height));
		} else {
			this.nodeButtonRoot.active = true;
			this.nodeButtonClose.active = false;
			uiTransform.setContentSize(new Size(uiTransform.width, this.nodePanel.getComponent(UITransform).height - this.nodeButtonRoot.getComponent(UITransform).height));
		}

		this.nodeContentRoot.active = true;
		this.nodeOneBtn.active = true;
		this.nodeTwoBtn.active = false;
		this.nodeNoTips.active = true;
		this.nodePanel.getComponent(Layout).updateLayout();
	}
	/** 加载完成的回调 */
	onLoadCallback(type = null) {
		if (type == null || this._loadResMapList[type] == null) {
			return;
		}
		if (!this.node || this.node.isValid == false) {
			return;
		}
		if (Utils.table_length(this._loadResMapList[type]) == this._curMaxResNum) {
			this.nodeNoTips.active = false;
			let pWidth = this.contentNode.getComponent(UITransform).width;

			this.contentNode.removeAllChildren();
			for (let i = 0; i < this._curMaxResNum; i++) {
				let imageAssert = this._loadResMapList[type][i];
				if (imageAssert) {
					let spriteFrame = Utils.image_ImageAssetToSpriteFrame(imageAssert);
					if (spriteFrame) {
						let sprNode = this.creatorSpriteNode(spriteFrame);
						this.contentNode.addChild(sprNode);
						//缩放适配
						let childUITrans = sprNode.getComponent(UITransform);
						let scaleX = 1,
							scaleY = 1,
							scaleZ = 1;
						if ((childUITrans.width / pWidth) > 1) {
							scaleX = pWidth / childUITrans.width;
							scaleY = scaleX;
						} else if ((childUITrans.width / pWidth) < 1) {
							scaleX = pWidth / childUITrans.width;
							scaleY = scaleX;
						}
						sprNode.scale = new Vec3(scaleX, scaleY, scaleZ);
					}
				}

			}
		}
	}

	creatorSpriteNode(spriteFrame: SpriteFrame): Node {
		let node = Utils.create_2DSprite(spriteFrame, "Sprite");
		return node;
	}

	//销毁
	onDestroy() {

	};

}

