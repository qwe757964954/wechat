
import { Button, EventTouch, Label, Node, PageView, Sprite, SpriteAtlas, Tween, UIOpacity, UITransform, Vec3, _decorator, instantiate, tween } from 'cc';
import { GCache } from '../../../cache/GCache';
import { AppEvent } from '../../../config/AppEvent';
import { AppSound } from '../../../config/AppSound';
import { GameRes } from '../../../config/GameRes';
import { Utils } from '../../../framework/Utils';
import SpriteLoad from '../../../framework/gui/sprite/SpriteLoad';
import { EventManager } from '../../../framework/manager/EventManager';
import { BaseComponent } from '../../../framework/vc/BaseComponent';
const { ccclass, property } = _decorator;

/**
 * Name = signinCtr
 * URL = db://assets/package/activity/script/signinCtr.ts
 * Time = Tue Jun 27 2023 12:00:14 GMT+0800 (中国标准时间)
 * Author = harvyson
 *
 * Life: onLoad-->onEnable->start->update->lateUpdate->onDisable->onDestroy
 */

@ccclass('signinCtr')
export class signinCtr extends BaseComponent {
	//活动时间
	@property({ tooltip: "活动时间", type: Label })
	time: Label = null!;

	@property({ tooltip: "每日签到节点", type: Node })
	itemView: Node = null!;

	@property({ tooltip: "每日签到模板", type: Node })
	itemTemplate: Node = null!;

	@property({ tooltip: "连续签到节点", type: Node })
	continueView: Node = null!;

	@property({ tooltip: "连续签到模板", type: Node })
	continueTemplate: Node = null!;

	@property({ tooltip: "签到按钮", type: Button })
	confirmBtn: Button = null!;

	@property({ tooltip: "签到按钮动画", type: Node })
	confirmBtnAnim: Node = null!;

	@property({ tooltip: "连续签到页左边按钮", type: Button })
	continueLeftBtn: Button = null!;

	@property({ tooltip: "连续签到页右边按钮", type: Button })
	continueRightBtn: Button = null!;

	_data = null;
	/** 今天 */
	_itemToday: Node = null;
	/** 今天下标 */
	_itemIndexToday: number = null;

	/**初始化添加事件绑定 */
	protected onInitModuleEvent(): void {
		/** 签到配置数据更新 */
		this.addModelListener(AppEvent.ACTIVITY_UPDATE_SIGNIN_CONF, this.respUpdateSignConf)
		/** 签到结果返回 */
		this.addModelListener(AppEvent.NET_FORWARD_SIGNIN_AWARD, this.respSignResult)
		/** 连续签到结果返回 */
		this.addModelListener(AppEvent.NET_FORWARD_SIGNIN_CONTINU_AWARD, this.respSignContinueAwardResult)
	}

	onLoad() {
		GCache.Activity.updateTodayOpenSign();
		this.initView();
		this.updateData();
		this.updateView(true);
	};

	start() {

	};

	//销毁
	onDestroy() {

	};

	initView() {
		this.itemTemplate.active = false;
		this.continueTemplate.active = false;
	}
	/** 更新数据 */
	updateData() {
		this._data = Utils.table_verify(GCache.Activity.getSigninData());
	}
	/** 更新界面 */
	updateView(isAll = false) {
		if (Utils.table_isEmpty(this._data)) {
			return;
		}
		this.updateViewTime();
		if (isAll == true) {
			this.updateViewContinueList();
		}
		this.updateViewItemList(true);
		this.updateViewBtn();
	};
	/** 更新时间 */
	updateViewTime() {
		this.time.string = this._data.date || ""
	};
	/** 更新连签页面 */
	updateViewItemList(isRunAni = false) {
		if (!Utils.table_isEmpty(this._data.signAward)) {
			let data = this._data.signAward;
			let childLength = this.itemView.children.length;
			if (!data) {
				for (let i = (childLength - 1); i >= 0; i--) {
					this.itemView.children[i].destroy();
				}
				return;
			}
			let max = data.length;
			if (max < childLength) {
				max = childLength;
			}
			for (let i = (max - 1); i >= 0; i--) {
				let nodeItem = this.itemView.children[i];
				if (nodeItem && !data[i]) {
					nodeItem.destroy();
				}
			}

			for (let index = 0; index < data.length; index++) {
				let nodeItem = this.itemView.children[index];
				if (!nodeItem) {
					nodeItem = instantiate(this.itemTemplate);
					this.itemView.addChild(nodeItem);
				}

				let uiTransform = nodeItem.getComponent(UITransform)
				nodeItem.position = new Vec3(uiTransform.contentSize.width * index, 100, nodeItem.position.z)
				nodeItem.active = true;
				let uiOpacity = nodeItem.getComponent(UIOpacity)
				uiOpacity.opacity = 0;
				this.updateViewItem(nodeItem, index, data[index])

				Tween.stopAllByTarget(nodeItem);
				Tween.stopAllByTarget(uiOpacity);
				if (data[index].day == data[index].today) {
					if (isRunAni == true) {
						tween(nodeItem)
							.delay(0.1 * index)
							.to(0.5, { position: new Vec3(uiTransform.contentSize.width * index, 0, nodeItem.position.z) }, {
								easing: "backOut",
							})
							.delay(0.1 * (this._data.signAward.length - index))
							.to(0.3, { position: new Vec3(uiTransform.contentSize.width * index, 40, nodeItem.position.z) }, {
								easing: "sineOut",
							})
							.start();
						tween(uiOpacity)
							.delay(0.1 * index)
							.to(0.3, { opacity: 255 })
							.start();
					} else {
						nodeItem.setPosition(new Vec3(uiTransform.contentSize.width * index, 40, nodeItem.position.z));
						uiOpacity.opacity = 255;
					}

					this._itemToday = nodeItem;
					this._itemIndexToday = index;
				} else {
					if (isRunAni == true) {
						tween(nodeItem)
							.delay(0.1 * index)
							.to(0.5, { position: new Vec3(uiTransform.contentSize.width * index, 0, nodeItem.position.z) }, {
								easing: "backOut",
							})
							.start();

						tween(uiOpacity)
							.delay(0.1 * index)
							.to(0.3, { opacity: 255 })
							.start();
					} else {
						nodeItem.setPosition(new Vec3(uiTransform.contentSize.width * index, 0, nodeItem.position.z));
						uiOpacity.opacity = 255;
					}
				}
			}
		}
	};

	/** 更新单个签到节点 */
	updateViewItem(item: Node, index: number, itemData: any) {
		this.print("updateViewItem", itemData);
		let itemBg = item.getChildByName("itemBg");
		let itemDay = itemBg.getChildByName("itemDay");
		let awardView = itemBg.getChildByName("awardView");
		let itemTag = itemBg.getChildByName("itemTag");
		let itemGet = itemBg.getChildByName("itemGet");
		let awardViewIcon = awardView.getChildByName("icon");
		let awardViewText = awardView.getChildByName("text");

		let framePngPath = Utils.string_format("day_{0}", index + 1);

		itemDay.active = false;
		this.getPreLoaderRes(GameRes.Atlas_Sign.bundle, GameRes.Atlas_Sign.path, SpriteAtlas, (atlas) => {
			let spriteFrame = atlas.getSpriteFrame(framePngPath)
			if (spriteFrame) {
				let spriteComponent = itemDay.getComponent(Sprite);
				spriteComponent.spriteFrame = spriteFrame;
				itemDay.active = true;
			}
		})

		if (itemData.day < itemData.today) {
			itemGet.active = true;
		} else if (itemData.day == itemData.today) {
			if (itemData.status == 1) {
				itemGet.active = false;
			} else {
				itemGet.active = true;
			}
		} else {
			itemGet.active = false;
		}


		let spriteLoad = awardViewIcon.getComponent(SpriteLoad)
		if (spriteLoad != null) {
			spriteLoad.setRemoteUrl(itemData.icon);
		}

		let label = awardViewText.getComponent(Label)
		if (label != null) {
			label.string = String(itemData.num)
		}

		// status: 0 不可签到 1 未签到 2 未签到（补签） 3 已签到
		if (itemData.status == 0) {
			awardView.active = true;
			itemTag.active = false;
		} else if (itemData.status == 1) {
			awardView.active = true;
			itemTag.active = false;
		} else if (itemData.status == 2) {
			awardView.active = true;
			itemTag.active = false;
		} else if (itemData.status == 3) {
			awardView.active = false;
			itemTag.active = true;
		}
	}
	/** 更新连续签到列表 */
	updateViewContinueList() {
		if (!Utils.table_isEmpty(this._data.continueAward)) {
			let pageView: PageView = this.continueView.getComponent(PageView);

			let data = this._data.continueAward;
			let childLength = pageView.getPages().length;
			if (!data) {
				for (let i = (childLength - 1); i >= 0; i--) {
					pageView.removePageAtIndex(i);
				}
				return;
			}
			let max = data.length;
			if (max < childLength) {
				max = childLength;
			}
			for (let i = (max - 1); i >= 0; i--) {
				let nodeItem = this.itemView.children[i];
				if (nodeItem && !data[i]) {
					nodeItem.destroy();
				}
			}

			let pageIndex = 0;
			let allPages = pageView.getPages();
			for (let index = 0; index < data.length; index++) {
				let nodeItem = allPages[index];
				if (!nodeItem) {
					nodeItem = instantiate(this.continueTemplate);
					pageView.addPage(nodeItem);
				}
				nodeItem.active = true;
				this.updateViewContinue(nodeItem, index, data[index]);

				if (data[index]["status"] == 2) {
					if (index == data.length - 1) {
						pageIndex = data.length - 1;
					} else {
						pageIndex = index + 1;
					}
				}

			}
			this.checkContinueBtnActive()
			pageView.stopAutoScroll();
			this.addSchedulerOnce(0, () => {
				pageView.scrollToPage(pageIndex);
			})
		}
	}
	/** 更新单个连续签到 */
	updateViewContinue(item: Node, index: number, itemData: any) {
		let continueBg = item.getChildByName("continueBg");
		let icon = item.getChildByName("icon");
		let tag = item.getChildByName("tag");
		let awardNumBg = item.getChildByName("awardNumBg");
		let awardNum = awardNumBg.getChildByName("awardNum");
		let continueAnim = item.getChildByName("continueAnim");

		let spriteContinueBg = continueBg.getComponent(Sprite);
		if (spriteContinueBg != null) {
			if (itemData.day == 3) {
				this.getPreLoaderRes(GameRes.Atlas_Sign.bundle, GameRes.Atlas_Sign.path, SpriteAtlas, (atlas) => {
					let spriteFrame = atlas.getSpriteFrame("3days")
					if (spriteFrame) {
						spriteContinueBg.spriteFrame = spriteFrame;
						spriteContinueBg.node.active = true;
					}
				})
			} else if (itemData.day == 7) {
				this.getPreLoaderRes(GameRes.Atlas_Sign.bundle, GameRes.Atlas_Sign.path, SpriteAtlas, (atlas) => {
					let spriteFrame = atlas.getSpriteFrame("7days")
					if (spriteFrame) {
						spriteContinueBg.spriteFrame = spriteFrame;
						spriteContinueBg.node.active = true;
					}
				})
			}

		}

		let spriteLoadIcon = icon.getComponent(SpriteLoad)
		if (spriteLoadIcon != null) {
			spriteLoadIcon.setRemoteUrl(itemData.icon);
		}

		let label = awardNum.getComponent(Label)
		if (label != null) {
			label.string = String(itemData.num)
		}
		let btn = icon.getComponent(Button)
		if (!Utils.table_isEmpty(btn.clickEvents)) {
			btn.clickEvents[0].customEventData = String(index)
		}

		// status: 0 不可领取 1 可领取 2 已领取
		if (itemData.status == 0) {
			tag.active = false;
			continueAnim.active = false;
		} else if (itemData.status == 1) {
			tag.active = false;
			continueAnim.active = true;
		} else if (itemData.status == 2) {
			tag.active = true;
			continueAnim.active = false;
		}
	}
	/** 更新签到按钮 */
	updateViewBtn() {
		if (this._data.todayStatus == 0) {
			this.confirmBtn.enabled = true;
			this.confirmBtn.getComponent(Sprite).grayscale = false;
			let childrenComponent = this.confirmBtn.getComponentsInChildren(Sprite);
			for (let index = 0; index < childrenComponent.length; index++) {
				childrenComponent[index].grayscale = false;
			}
			this.confirmBtnAnim.active = true;
		} else {
			this.confirmBtn.enabled = false;
			this.confirmBtn.getComponent(Sprite).grayscale = true;
			let childrenComponent = this.confirmBtn.getComponentsInChildren(Sprite);
			for (let index = 0; index < childrenComponent.length; index++) {
				childrenComponent[index].grayscale = true;
			}
			this.confirmBtnAnim.active = false;
		}
	};

	onPageEventContinueView(event: Event, customEventData: string) {
		this.print("onPageEventContinueView", event, customEventData);
		this.checkContinueBtnActive()
	}

	checkContinueBtnActive() {
		let pageView = this.continueView.getComponent(PageView);
		let index = pageView.getCurrentPageIndex();
		let length = pageView.getPages().length;

		this.continueLeftBtn.enabled = index > 0;
		this.continueRightBtn.enabled = index < length - 1;
		this.continueLeftBtn.node.active = index > 0;
		this.continueRightBtn.node.active = index < length - 1;
	}

	onClickContinueAward(event: Event, customEventData: string) {
		this.print("onClickContinueAward", event, customEventData);
		EventManager.dispatch(AppEvent.SYS_PLAY_EFFECT, AppSound.CommClick);
		if (Utils.table_isEmpty(this._data)) {
			return;
		}

		if (!Utils.table_isEmpty(this._data.continueAward)) {
			let index = Utils.number_valueOf(customEventData);
			let data = this._data.continueAward[index];
			if (!Utils.table_isEmpty(data)) {
				if (data.status == 1) {
					EventManager.dispatch(AppEvent.NET_REQ_SIGNIN_CONTINU_AWARD, data.day)
				}
			}
		}
	}
	/** 点击翻页 */
	onClickContinuePageBtn(event: Event, customEventData: string) {
		this.print("onClickContinuePageBtn", event, customEventData);
		EventManager.dispatch(AppEvent.SYS_PLAY_EFFECT, AppSound.CommClick);
		let pageView = this.continueView.getComponent(PageView);
		if (customEventData == "left") {
			pageView.scrollToPage(pageView.getCurrentPageIndex() - 1)
		} else if (customEventData == "right") {
			pageView.scrollToPage(pageView.getCurrentPageIndex() + 1)
		}
	}
	/** 签到配置数据更新 */
	respUpdateSignConf(event, isSuccess) {
		if (!isSuccess) {
			return;
		}
		this.updateData();
		this.updateView(true);
	}
	/** 签到结果 */
	respSignResult(event, isSuccess) {
		if (!isSuccess) {
			EventManager.dispatch(AppEvent.SYS_TOAST_TIP, { content: "Fail:签到失败" })
			return;
		}
		this.updateData();
		this.updateViewItemList();
		this.updateViewBtn();
		this.updateViewContinueList();
	}
	/** 更新连续签到领奖 */
	respSignContinueAwardResult(event, isSuccess) {
		if (!isSuccess) {
			EventManager.dispatch(AppEvent.SYS_TOAST_TIP, { content: "Fail:连续签到失败" })
			return;
		}
		this.updateData();
		this.updateViewContinueList();
	}

	onClickCloseBtn(event: EventTouch, custom: string) {
		EventManager.dispatch(AppEvent.SYS_PLAY_EFFECT, AppSound.CommClick);
		this.node.destroy();
	};

	onClickConfirmBtn(event: Event, customEventData: string) {
		this.print("onClickConfirmBtn", event, customEventData);
		EventManager.dispatch(AppEvent.SYS_PLAY_EFFECT, AppSound.CommClick);
		if (Utils.table_isEmpty(this._data)) {
			return;
		}
		if (this._data.todayStatus == 0) {
			EventManager.dispatch(AppEvent.NET_REQ_SIGNIN_AWARD, this._data.today)
		} else {

		}
	}

}

