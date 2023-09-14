
import { EventTouch, Label, Layout, Node, Sprite, SpriteAtlas, _decorator, instantiate } from 'cc';
import { GCache } from '../../../cache/GCache';
import { AppEvent } from '../../../config/AppEvent';
import { AppSound } from '../../../config/AppSound';
import { GConstants } from '../../../config/GameConstant';
import { GameTxt } from '../../../config/GameTxt';
import { Utils } from '../../../framework/Utils';
import { Encrypt } from '../../../framework/crypto/Encrypto';
import { resLoader } from '../../../framework/loader/ResLoader';
import { EventManager } from '../../../framework/manager/EventManager';
import { BaseComponent } from '../../../framework/vc/BaseComponent';

const { ccclass, property, menu } = _decorator;

/**
 * Name = mailPrefabCtr
 * URL = db://assets/package/hall/scripts/mailPrefabCtr.ts
 * Time = Wed Sep 14 2022 09:54:06 GMT+0800 (中国标准时间)
 * Author = Tomoe
 *
 * Life: onLoad-->onEnable->start->update->lateUpdate->onDisable->onDestroy
 */

@ccclass('mailPrefabCtr')
//方便编辑器识别的菜单项目
@menu('prefab/activity/mailPrefabCtr')
export class mailPrefabCtr extends BaseComponent {

	//左边邮件Item
	@property({ tooltip: "左边邮件Item", type: Node })
	private mailItem: Node | null = null;

	//左边邮件Layer
	@property({ tooltip: "左边邮件Layer", type: Node })
	private mailLayer: Node | null = null;

	//无邮件显示节点
	@property({ tooltip: "无邮件显示节点", type: Node })
	private noMailNode: Node | null = null;

	//邮件显示
	@property({ tooltip: "邮件显示", type: Node })
	private mailLayout: Node | null = null;

	//邮件标题
	@property({ tooltip: "邮件标题", type: Label })
	private mailTitle: Label | null = null;

	//邮件内容文本-无道具
	@property({ tooltip: "邮件内容文本-无道具", type: Label })
	private noMailContent: Label | null = null;
	//邮件内容文本-有道具
	@property({ tooltip: "邮件内容文本-有道具", type: Label })
	private hasMailContent: Label | null = null;

	//邮件内容-无道具
	@property({ tooltip: "邮件内容-无道具", type: Node })
	private noMailLayout: Node | null = null;
	//邮件内容-有道具
	@property({ tooltip: "邮件内容-有道具", type: Node })
	private hasMailLayout: Node | null = null;

	//道具列表
	@property({ tooltip: "道具列表", type: Node })
	private itemLayer: Node | null = null;
	//道具Item
	@property({ tooltip: "道具Item", type: Node })
	private itemNode: Node | null = null;


	//邮件数量显示
	@property({ tooltip: "用户头像框", type: Label })
	private mailNum: Label | null = null;

	//邮件按钮
	@property({ tooltip: "邮件按钮", type: Node })
	private btnLayer: Node | null = null;

	//邮件图集
	@property({ tooltip: "邮件图集", type: SpriteAtlas })
	private mailAtlas: SpriteAtlas | null = null;

	//邮件数据缓存
	mailData = [];

	/**当前展示内容*/
	//下标
	curentIndex = null
	//数据
	currentData = null
	currentItem = null;

	/**初始化添加事件绑定 */
	protected onInitModuleEvent(): void {
		//刷新邮件界面
		this.addModelListener(AppEvent.NOTIFY_EMAIL_CHANGE, this.updateView);
		//请求领奖成功
		this.addModelListener(AppEvent.NET_RESP_EMAIL_REWARD, this.respGetAward);
		//邮件红点更新
		this.addModelListener(AppEvent.NOTIFY_UPDATE_RED_DOT, this.redDotUpdate);
	}

	onLoad() {
		this.initData();
		this.initView();
	};

	start() {
		//请求拉取信箱数据
		EventManager.dispatch(AppEvent.NET_CMD_REQ_WATCH);
	};

	initData() {
		this.mailData = GCache.MailInfo.sortMsgData(GCache.MailInfo.MailData);
	}

	initView() {
		if (Utils.table_isEmpty(this.mailData)) {
			this.mailLayout.active = false;
			this.noMailNode.active = true;
			this.mailNum.string = `0/100`;
			this.setMailBtn()
		} else {
			this.mailNum.string = `${this.mailData.length}/100`;
		}
		this.showView();
	}

	showView() {
		this.mailLayer.removeAllChildren();
		if (Utils.table_isEmpty(this.mailData)) {
			return;
		}
		this.noMailNode.active = false;
		let maxlenth;
		if (this.mailData.length > GConstants.MessageMaxNum) {
			maxlenth = GConstants.MessageMaxNum;
		} else {
			maxlenth = this.mailData.length;
		}
		if (this.curentIndex != null) {
			let oldID = this.currentData["id"];
			let newDataArr = this.getMailDataByID(oldID);
			if (newDataArr) {
				this.curentIndex = newDataArr[1];
				this.currentData = newDataArr[0];
			} else {
				this.curentIndex = null;
				this.currentData = null;
			}
		}

		for (let i = 0; i < maxlenth; i++) {
			let mailStatus = this.mailData[i].status;
			let data = this.mailData[i]
			let node = instantiate(this.mailItem);
			this.mailLayer.addChild(node);
			node["mailData"] = this.mailData[i];
			node["index"] = i;
			let img_new = node.getChildByName("img_new");
			let img_gift = node.getChildByName("img_gift");
			if (this.curentIndex == null && i == 0) {
				let currentData = this.mailData[0];
				this.initRightView(currentData);
				node.getChildByName("img_selected").active = true;
				if (currentData.status == GConstants.MsgStatus.MSG_STATUS_FRESH) {
					currentData.status = GConstants.MsgStatus.MSG_STATUS_READ
					GCache.MailInfo.updateMailDataInCache(currentData)
				}
				// 记录一下当前展示内容的下标
				this.curentIndex = i;
				this.updateCurrentData()
			} else if (this.curentIndex != null && this.curentIndex == i) {
				let currentData = this.mailData[i];
				//界面打开状态
				this.initRightView(currentData);
				node.getChildByName("img_selected").active = true;
				this.updateCurrentData();
			}
			//设置标题
			let titleNode = node.getChildByName("label_title");
			titleNode.getComponent(Label).string = data.title;

			//设置日期
			let timeNode = node.getChildByName("label_time");
			let time = "";
			if (data.time != null) {
				let timeArray = Utils.timeToDataArray(data.time);
				time = `${timeArray["year"]}-${timeArray["month"]}-${timeArray["day"]}`
			}
			timeNode.getComponent(Label).string = time;

			//显示 new 标识图片,是否打开,是否领取标识
			let awardArr = Encrypt.JsonDecode(data.awards);
			let giftSprite = img_gift.getComponent(Sprite);
			if (mailStatus == GConstants.MsgStatus.MSG_STATUS_FRESH) {
				img_new.active = true;
				if (Utils.table_isEmpty(awardArr)) {
					giftSprite.spriteFrame = this.mailAtlas.spriteFrames["mail/unRead"]
				}
			} else if (mailStatus == GConstants.MsgStatus.MSG_STATUS_READ) {
				if (Utils.table_isEmpty(awardArr)) {
					giftSprite.spriteFrame = this.mailAtlas.spriteFrames["mail/Read"]
				}
				img_new.active = false;
			} else {
				giftSprite.spriteFrame = this.mailAtlas.spriteFrames["mail/gift_open"]
				img_new.active = false;
			}
			node.active = true;

		}
		this.mailLayer.getComponent(Layout).updateLayout();
		//更新右边邮件总数
		this.mailNum.string = `${maxlenth}/100`;
	}



	/**
	 * 渲染邮件内容区域
	 * @param dataList 
	 */
	initRightView(dataList) {
		this.itemLayer.removeAllChildren();
		this.noMailLayout.active = false;
		this.hasMailLayout.active = false;
		//设置邮件标题
		this.mailTitle.string = dataList.title;
		let show_layout;
		let awardArr = Encrypt.JsonDecode(dataList.awards);
		//先判断是否带附件
		if (!Utils.table_isEmpty(awardArr)) {
			this.hasMailContent.string = dataList.body;
			this.hasMailLayout.active = true;
			show_layout = this.hasMailLayout;
			for (let i = 0; i < awardArr.length; i++) {
				let v = awardArr[i];
				let node = instantiate(this.itemNode);
				this.itemLayer.addChild(node);
				let numLabel = node.getComponentInChildren(Label);
				let img_item = node.getChildByName("img_item");
				
				numLabel.string = Utils.string_moneyToShortNumber(v.num,true);
				if (dataList.status == GConstants.MsgStatus.MSG_STATUS_HANDLED) {
					//已领取
					node.getComponent(Sprite).grayscale = true;  //领取状态 道具置灰
					img_item.getComponent(Sprite).grayscale = true;
				}
				let propType = Utils.number_valueOf(v['type'], 0);
				let conf = GCache.PropsConf.getPropsInfoById(propType);
				let url = conf['url'];
				this.setSpriteFrame(img_item, url);
			}
			if (dataList.status == GConstants.MsgStatus.MSG_STATUS_HANDLED) {
				this.setMailBtn();
			} else {
				this.setMailBtn(0);
			}
		} else {
			this.noMailContent.string = dataList.body;
			this.noMailLayout.active = true;
			show_layout = this.noMailLayout;
			this.setMailBtn();
		}
		let senderLabel = show_layout.getChildByName("label_sender");
		let timeLabel = show_layout.getChildByName("label_time");
		senderLabel.active = false;
		timeLabel.active = false;
		this.mailLayout.active = true;
	}



	/**
	 * 更新界面
	 * @param event 
	 * @param pData 
	 */
	updateView(event = null, pData = null) {
		this.initData();
		this.addSchedulerOnce(1, () => {
			console.log("mail request")
			this.initView();
		})
	}

	//点击邮件
	onMailClick(event) {
		EventManager.dispatch(AppEvent.SYS_PLAY_EFFECT, AppSound.CommClick);
		for (let child of this.mailLayer.children) {
			child.getChildByName("img_selected").active = false;
		}
		let node = event.target;
		node.getChildByName("img_selected").active = true;

		let img_new = node.getChildByName("img_new");
		img_new.active = false;

		let img_gift = node.getChildByName("img_gift");
		let currentData = node["mailData"];

		let awardArr = Encrypt.JsonDecode(currentData.awards);
		//文字点击即算opened ,奖励要领取才算
		console.log("点击邮件:", currentData)
		if (currentData.status == GConstants.MsgStatus.MSG_STATUS_FRESH) {
			currentData.status = GConstants.MsgStatus.MSG_STATUS_READ
			GCache.MailInfo.updateMailDataInCache(currentData);
		}
		if (currentData.status == GConstants.MsgStatus.MSG_STATUS_READ && Utils.table_isEmpty(awardArr)) {
			img_gift.getComponent(Sprite).spriteFrame = this.mailAtlas.spriteFrames["mail/Read"];
		}

		// 记录一下当前展示内容的下标
		this.curentIndex = node["index"]
		this.updateCurrentData()
		this.initRightView(currentData);
	}


	/**
	 * 刷新当前选中邮件数据
	 */
	updateCurrentData() {
		let index = Number(this.curentIndex);
		let len = this.mailLayer.children.length;
		for (let i = 0; i < len; i++) {
			let node = this.mailLayer.children[index];
			if (index == i) {
				this.currentItem = node;
			}
		}
		this.currentData = this.mailData[this.curentIndex];
	}
	//根据邮件ID获取邮件内容
	getMailDataByID(mailID) {
		for (let i = 0; i < this.mailData.length; i++) {
			let data = this.mailData[i];
			if (data["id"] == mailID) {
				return [data, i];
			}
		}
		return null;
	}

	/**
	 * 设置远端图片
	 * @param node 节点
	 * @param path 图片地址
	 */
	setSpriteFrame(node, path) {
		if (Utils.string_isHttp(path)) {
			let self = this;
			resLoader.loadRemote(path, { ext: '.jpg' }, (err, imageAsset) => {
				if (!imageAsset) { //资源可能还在加载中
					return
				}
				if (!self.node || self.node.isValid == false) {
					return;
				}
				let spriteFrame = Utils.image_ImageAssetToSpriteFrame(imageAsset)
				if (spriteFrame) {
					node.getComponent(Sprite).spriteFrame = spriteFrame;
				}
			})
		}
	}

	/**
	 * 设置按钮状态
	 * index：0（领取）1（删除） null(不显示)
	 * */
	setMailBtn(index = null) {
		if (index == null) {
			this.btnLayer.active = false;
			return;
		}
		this.btnLayer.active = true;
		for (let i = 0; i < this.btnLayer.children.length; i++) {
			let child = this.btnLayer.children[i]
			if (i == index) {
				child.active = true;
			} else {
				child.active = false;
			}
		}
	}

	/**
	 * 领取道具
	 * @param event 
	 */
	onReceiveClick(event: Event) {
		EventManager.dispatch(AppEvent.SYS_PLAY_EFFECT, AppSound.CommClick);
		console.log("领取道具", this.currentData)
		let awardArr = Encrypt.JsonDecode(this.currentData.awards);
		if (this.currentData && !Utils.table_isEmpty(awardArr)) {
			if (this.currentData.status == GConstants.MsgStatus.MSG_STATUS_HANDLED) {
				//如果已经领取
				EventManager.dispatch(AppEvent.SYS_TOAST_TIP, { content: GameTxt.item_has_receive });
				this.currentItem.getComponent(Sprite).grayscale = true;  //领取状态 道具置灰
				let img_item = this.currentItem.getChildByName("img_item");
				img_item.getComponent(Sprite).grayscale = true;
				this.setMailBtn();
			} else {
				console.log("发起领取邮件奖励请求", this.currentData, this.currentData.id);
				EventManager.dispatch(AppEvent.NET_REQ_EMAIL_REWARD, this.currentData.id);
			}
		}
	}

	/**
	 * 领奖返回
	 * @param event
	 * @param isSuccess 是否成功 
	 * @param respData 响应数据
	 * @param reqData 请求数据
	 * @returns 
	 */
	respGetAward(event, isSuccess, respData, reqData) {
		if (isSuccess != true) {
			return;
		}
		if (this.currentItem && this.currentItem.getChildByName("img_gift")) {
			this.currentItem.getChildByName("img_gift").getComponent(Sprite).spriteFrame = this.mailAtlas.spriteFrames["mail/gift_open"];
		}
		this.initRightView(this.currentData);
	}

	/**
	 * 关闭
	 * @param event 
	 */
	onCloseClick(event: EventTouch) {
		EventManager.dispatch(AppEvent.SYS_PLAY_EFFECT, AppSound.CommClick);
		this.node.destroy();
	}

	//销毁
	onDestroy() {

	};

	/**
	 * 红点更新
	 * @param event 
	 * @param keyType 红点类型
	 */

	redDotUpdate(event, keyType, flag) {
		if (keyType == GConstants.RedDotConf.Email) {
		}
	}

}

