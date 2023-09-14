
import { Button, Color, EventTouch, instantiate, LabelComponent, Node, Sprite, SpriteAtlas, _decorator } from 'cc';
import { EventManager } from '../../../framework/manager/EventManager';
import { Utils } from '../../../framework/Utils';
import { BaseComponent } from '../../../framework/vc/BaseComponent';
import { FXJConstant } from '../common/FXJConstant';
import { FXJEvent } from '../common/FXJEvent';
import { FXJRes } from '../common/FXJRes';
import { FXJSound } from '../common/FXJSound';
const { ccclass, property, menu } = _decorator;

/**
 * Name = GameChatPrefabCtr
 * URL = db://assets/package/game/scripts/GameChatPrefabCtr.ts
 * Time = Fri Sep 09 2022 11:52:39 GMT+0800 (中国标准时间)
 * Author = Tomoe
 * 游戏聊天界面
 * Life: onLoad-->onEnable->start->update->lateUpdate->onDisable->onDestroy
 */

@ccclass('GameChatPrefabCtr')
//方便编辑器识别的菜单项目
@menu('prefab/game/GameChatPrefabCtr')
export class GameChatPrefabCtr extends BaseComponent {

	//标签-常用语
	@property({ tooltip: "标签-常用语", type: Node })
	private tabMsg: Node | null = null;
	//标签-表情
	@property({ tooltip: "标签-表情", type: Node })
	private tabEmoji: Node | null = null;
	//常用语列表
	@property({ tooltip: "常用语列表", type: Node })
	private msgList: Node | null = null;

	//表情列表
	@property({ tooltip: "表情列表", type: Node })
	private emojiList: Node | null = null;

	//常用语父节点
	@property({ tooltip: "常用语父节点", type: Node })
	private msgContent: Node | null = null;

	//表情父节点
	@property({ tooltip: "表情父节点", type: Node })
	private emojiContent: Node | null = null;

	//常用语节点
	@property({ tooltip: "常用语节点", type: Node })
	private nodeMsg: Node | null = null;

	//表情节点
	@property({ tooltip: "表情节点", type: Node })
	private nodeEmoji: Node | null = null;

	onInitModuleEvent() {

	}
	onLoad() {
		this.hideMaskNode();
		this.updateView();
		this.changeTag(this.tabMsg);
	};

	/** 隐藏遮罩层 */
	hideMaskNode() {
		let maskNode = this.node.parent.getChildByName("Mask");
		if (maskNode) {
			maskNode.active = false;
		}
	}
	start() {

	};


	/** 标签切换 */
	changeTag(chooseNode: Node) {
		chooseNode.getComponent(Button).interactable = false;
		chooseNode.getChildByName("Checkmark").active = true;
		if (chooseNode == this.tabMsg) {
			this.tabEmoji.getComponent(Button).interactable = true;
			this.tabEmoji.getChildByName("Checkmark").active = false;

			this.msgList.active = true;
			this.emojiList.active = false;
		} else if (chooseNode == this.tabEmoji) {
			this.tabMsg.getComponent(Button).interactable = true;
			this.tabMsg.getChildByName("Checkmark").active = false;

			this.msgList.active = false;
			this.emojiList.active = true;
		}
	}
	updateView() {
		this.nodeMsg.active = false;
		this.nodeEmoji.active = false;
		this.updateMessageList();
		this.updateEmoList();
	}
	/** 更新消息列表 */
	updateMessageList() {
		let chatTextData = [];

		//热门聊天语
		let hotTxtConfig = FXJConstant.ChatText.hot;
		for (let i = 0; i < hotTxtConfig.length; i++) {
			let data = {
				tag: "tag_hot",
				index: String(i + 1),
				text: hotTxtConfig[i],
			}
			if (i == 0) {
				data["isTag"] = true;
			}
			chatTextData.push(data);
		}

		//经典聊天语
		let classicTxtConfig = FXJConstant.ChatText.classic;
		for (let i = 0; i < classicTxtConfig.length; i++) {
			let data = {
				tag: "tag_classic",
				index: "Classic_" + String(i + 1),
				text: classicTxtConfig[i],
			}
			if (i == 0) {
				data["isTag"] = true;
			}
			chatTextData.push(data);
		}

		//麻将聊天语
		let majiangTxtConfig = FXJConstant.ChatText.majiang;
		for (let i = 0; i < majiangTxtConfig.length; i++) {
			let data = {
				tag: "tag_majiang",
				index: "Majiang_" + String(i + 1),
				text: majiangTxtConfig[i],
			}
			if (i == 0) {
				data["isTag"] = true;
			}
			chatTextData.push(data);
		}

		let currowDaysNum = this.msgContent.children.length;
		if (currowDaysNum < chatTextData.length) {
			for (let i = currowDaysNum; i < chatTextData.length; i++) {
				let node = instantiate(this.nodeMsg);
				this.msgContent.addChild(node);
			}
		} else if (currowDaysNum > chatTextData.length) {
			for (let i = (currowDaysNum - 1); i >= chatTextData.length; i--) {
				let node = this.msgContent.children[i];
				if (node) {
					node.removeFromParent();
				}
			}
		}
		for (let i = 0; i < this.msgContent.children.length; i++) {
			let node = this.msgContent.children[i];
			this.updateMsgItem(node, i, chatTextData[i], i == (chatTextData.length - 1));
		}
	}
	/** 更新单条消息 */
	updateMsgItem(item: Node, index: number, data, isEndIndx: boolean = false) {
		item.active = true;
		let buttonComp = item.getComponent(Button);

		item["chatMsg"] = data;

		let tag = item.getChildByName("tag");
		let txtLabel = item.getChildByName("Label");
		let tab_line = item.getChildByName("tab_line");

		tab_line.active = (isEndIndx != true);

		if (data) {
			buttonComp.interactable = true;
			if (data["isTag"] && data["tag"]) {
				let frameName = Utils.string_format(FXJRes.Atlas_Game_Desk.plistKey, data["tag"])
				this.getPreLoaderRes(FXJRes.Atlas_Game_Desk.bundle, FXJRes.Atlas_Game_Desk.path, SpriteAtlas, (atlas) => {
					if (!atlas) {
						return
					}
					if (!tag || tag.isValid == false) {
						return;
					}
					let spriteFrame = atlas.getSpriteFrame(frameName)
					if (spriteFrame) {
						let spriteComponent = tag.getComponent(Sprite);
						spriteComponent.sizeMode = 0;
						spriteComponent.spriteFrame = spriteFrame;
						tag.active = true;
					}
				})
			} else {
				tag.active = false;
			}
			if (data["text"] != null) {
				let fontColor = {
					tag_role: new Color(163, 138, 231),
					tag_hot: new Color(241, 110, 63),
					tag_classic: new Color(145, 81, 19),
				}
				let labelComponent = txtLabel.getComponent(LabelComponent);
				labelComponent.string = data["text"] || "";
				if (fontColor[data["tag"]]) {
					labelComponent.color = fontColor[data["tag"]];
				}
				txtLabel.active = true;
			}
		} else {
			tag.active = false;
			txtLabel.active = false;
			buttonComp.interactable = false;
		}
	}


	/** 更新 */
	updateEmoList() {
		let emojiDataList = [];
		for (let i = 0; i < 16; i++) {
			let key = Utils.string_format(FXJRes.Atlas_Game_Desk.plistKey, "emoji_default_" + String(i + 1));
			let resConf = {
				bundle: FXJRes.Atlas_Game_Desk.bundle,
				path: FXJRes.Atlas_Game_Desk.path,
				plistKey: key
			}
			emojiDataList.push(resConf);
		}
		console.log("emojiDataList==>", emojiDataList)
		let currowDaysNum = this.emojiContent.children.length;
		if (currowDaysNum < emojiDataList.length) {
			for (let i = currowDaysNum; i < emojiDataList.length; i++) {
				let node = instantiate(this.nodeEmoji);
				this.emojiContent.addChild(node);
			}
		} else if (currowDaysNum > emojiDataList.length) {
			for (let i = (currowDaysNum - 1); i >= emojiDataList.length; i--) {
				let node = this.emojiContent.children[i];
				if (node) {
					node.removeFromParent();
				}
			}
		}
		for (let i = 0; i < this.emojiContent.children.length; i++) {
			let node = this.emojiContent.children[i];
			this.updateEmojiItem(node, i, emojiDataList[i], i == (emojiDataList.length - 1));
		}
	}
	/** 更新单个表情 */
	updateEmojiItem(item: Node, index: number, data, isEndIndx: boolean = false) {
		let buttonComp = item.getComponent(Button);

		item["chatMsg"] = String(index + 1);

		if (data) {
			buttonComp.interactable = true;
			this.getPreLoaderRes(data.bundle, data.path, SpriteAtlas, (atlas) => {
				if (!atlas) {
					return
				}
				if (!item || item.isValid == false) {
					return;
				}
				let spriteFrame = atlas.getSpriteFrame(data.plistKey)
				if (spriteFrame) {
					let spriteComponent = item.getComponent(Sprite);
					spriteComponent.sizeMode = 0;
					spriteComponent.spriteFrame = spriteFrame;
					item.active = true;
				}
			})

		} else {
			buttonComp.interactable = false;
		}

	}

	/** tab标签的点击事件 */
	onClickTabMenu(event: EventTouch) {
		EventManager.dispatch(FXJEvent.SYS_PLAY_EFFECT, FXJSound.CommClick);
		this.changeTag(event.currentTarget);
	}

	//点击发送快捷短语
	onMsgClick(event: EventTouch) {
		console.log("点击发送快捷短语", event.currentTarget["chatMsg"]);
		if (event.currentTarget["chatMsg"] == null) {
			return;
		}
		// {
		// 	"tag": "tag_hot",
		// 	"index": "hot_1",
		// 	"text": "搞快点!搞快点!"
		// }
		let param = event.currentTarget["chatMsg"];
		EventManager.dispatch(FXJEvent.SYS_PLAY_EFFECT, FXJSound.CommClick);
		EventManager.dispatch(FXJEvent.GAME_REQ_PLAYER_CHAET_MSG, param["index"], param["text"]);
		this.node.destroy();
	}

	//点击发送表情
	onEmojiClick(event: EventTouch) {
		console.log("点击发送表情", event.currentTarget["chatMsg"]);
		if (event.currentTarget["chatMsg"] == null) {
			return;
		}
		let param = event.currentTarget["chatMsg"];
		EventManager.dispatch(FXJEvent.SYS_PLAY_EFFECT, FXJSound.CommClick);

		EventManager.dispatch(FXJEvent.GAME_REQ_PLAYER_CHAET_EMOJI, param)

		this.node.destroy();
	}

	//点击关闭界面
	onCloseClick(event: Event) {
		console.log("点击事件响应===>>>>关闭界面");
		EventManager.dispatch(FXJEvent.SYS_PLAY_EFFECT, FXJSound.CommClick);
		this.node.destroy();
	}

	//销毁
	onDestroy() {

	};

}

