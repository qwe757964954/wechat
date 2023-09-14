
import { EventTouch, instantiate, Label, Node, Sprite, SpriteAtlas, SpriteFrame, _decorator } from 'cc';
import { GCache } from '../../../cache/GCache';
import { Encrypt } from '../../../framework/crypto/Encrypto';
import SpriteLoad from '../../../framework/gui/sprite/SpriteLoad';
import { DelegateComponent } from '../../../framework/layer/DelegateComponent';
import { EventManager } from '../../../framework/manager/EventManager';
import { Utils } from '../../../framework/Utils';
import { BaseComponent } from '../../../framework/vc/BaseComponent';
import { Platform } from '../../../platform/Platform';
import { PlayerMgr } from '../cache/PlayerMgr';
import { FXJConstant } from '../common/FXJConstant';
import { FXJEvent } from '../common/FXJEvent';
import { FXJRes } from '../common/FXJRes';
import { FXJSound } from '../common/FXJSound';
import { GameEvent } from '../common/GameEvent';
const { ccclass, property, menu } = _decorator;


/**
 * Name = GameHeadInfoPrefabCtr
 * URL = db://assets/package/game/scripts/GameHeadInfoPrefabCtr.ts
 * Time = Fri Sep 09 2022 11:45:37 GMT+0800 (中国标准时间)
 * Author = Tomoe
 *
 * Life: onLoad-->onEnable->start->update->lateUpdate->onDisable->onDestroy
 */

@ccclass('GameHeadInfoPrefabCtr')
//方便编辑器识别的菜单项目
@menu('prefab/game/GameHeadInfoPrefabCtr')
export class GameHeadInfoPrefabCtr extends BaseComponent {

	//头像节点
	@property({ tooltip: "头像节点", type: Node })
	private headNode: Node | null = null;

	//头像框节点
	@property({ tooltip: "头像框节点", type: Node })
	private headFrameNode: Node | null = null;

	//性别节点
	@property({ tooltip: "性别", type: Node })
	private sexNode: Node | null = null;

	//昵称
	@property({ tooltip: "昵称", type: Label })
	private nameLabel: Label | null = null;

	//用户ID
	@property({ tooltip: "用户ID", type: Label })
	private playIdLabel: Label | null = null;


	//钱币类型
	@property({ tooltip: "钱币类型", type: Sprite })
	private moneyCoin: Sprite | null = null;

	//钱币数量
	@property({ tooltip: "钱币数量", type: Label })
	private moneyLabel: Label | null = null;

	//道具父节点
	@property({ tooltip: "道具父节点", type: Node })
	private propList: Node | null = null;

	//克隆道具
	@property({ tooltip: "克隆道具", type: Node })
	private cloneProp: Node | null = null;

	//性别男
	@property({ tooltip: "性别男", type: SpriteFrame })
	private manPic: SpriteFrame | null = null;

	//性别女
	@property({ tooltip: "性别女", type: SpriteFrame })
	private womanPic: SpriteFrame | null = null;

	//玩家id
	private _uid: number;
	//玩家座位号
	private _posID: number;

	//玩家缓存
	private _player = null;

	/**初始化添加事件绑定 */
	protected onInitModuleEvent(): void {
		//玩家基本信息有更新
		this.addModelListener(FXJEvent.USER_UPDATE_INFO, this.updateUserInfo);
		//玩家资产有更新
		this.addModelListener(FXJEvent.USER_UPDATE_PROPERTY, this.updateCoin);
		//玩家退出
		this.addModelListener(GameEvent.VIEW_BROADCAST_PLAYER_EXIT, this.receiveUserExitRoom);
	}


	onLoad() {
		this.getComp();
		this.checkBaseData();
		this.initView();
		this.updateUserInfo();
		this.updateListProps();
	};

	start() {

	};
	/** 更新玩家数据 */
	updateUserPlayer() {
		this._player = PlayerMgr.getInstance().findPlayerWithUserId(this._uid)
		if (this._player) {
			this._posID = this._player.seatId;
		} else {
			this._posID = null;
		}
	}
	initView() {
		this.cloneProp.active = false;
		this.propList.active = true;
	}
	getComp() {
		let comp = this.node.getComponent(DelegateComponent)
		if (comp) {
			let param = comp.getParams();
			if (Utils.isNull(param) == false) {
				this._uid = param.uid;
			}
		}
	}

	/**
	 * 检验用户基础信息
	 * @returns 
	 */
	checkBaseData() {
		if (!this._uid) {
			return;
		}
		this.updateUserPlayer();
		if (!this._player) {
			return;
		}
	}
	/** 更新玩家信息 */
	updateUserInfo(event = null, uid = null) {
		if (event != null && uid != this._uid) {
			return;
		}
		this.updateUserPlayer();
		if (!this._player) {
			return;
		}
		this.updateHead();
		this.updateUserHeadBox();
		this.updateCoin();
	}


	/**
	 * 更新玩家界面信息
	 * @returns 
	 */
	updateHead() {
		if (!this._player) {
			return;
		}
		let gameUserInfo = this._player.gameUserInfo;
		let sex = Utils.number_valueOf(gameUserInfo.sex);
		sex = sex > 0 ? sex : 1;
		this.sexNode.active = true;

		let spriteLoad = this.headNode.getComponent(SpriteLoad);
		if (Utils.string_isHttp(gameUserInfo.avatar_b)) {
			spriteLoad.setRemoteUrl(gameUserInfo.avatar_b, () => {
				if (sex == 2) {
					spriteLoad.setLocalLoad(FXJRes.Picture_UserBigHead_girl.bundle, FXJRes.Picture_UserBigHead_girl.path);
				} else {
					spriteLoad.setLocalLoad(FXJRes.Picture_UserBigHead_boy.bundle, FXJRes.Picture_UserBigHead_boy.path);
				}
			})
		} else {
			if (sex == 2) {
				spriteLoad.setLocalLoad(FXJRes.Picture_UserBigHead_girl.bundle, FXJRes.Picture_UserBigHead_girl.path);
			} else {
				spriteLoad.setLocalLoad(FXJRes.Picture_UserBigHead_boy.bundle, FXJRes.Picture_UserBigHead_boy.path);
			}
		}

		if (sex == 2) {//女
			this.sexNode.getComponent(Sprite).spriteFrame = this.womanPic;
		} else { //男
			this.sexNode.getComponent(Sprite).spriteFrame = this.manPic;
		}

		//昵称
		this.nameLabel.string = gameUserInfo.nickName;
		this.playIdLabel.string = this._player.userId;
	}
	//更新用户头像框
	updateUserHeadBox() {
		if (!this._player) {
			return;
		}
		let gameUserInfo = this._player.gameUserInfo;
		let spriteLoad = this.headFrameNode.getComponent(SpriteLoad);
		if (Utils.string_isHttp(gameUserInfo ? gameUserInfo["headBox"] : "")) {
			spriteLoad.setRemoteUrl(gameUserInfo["headBox"]);
		}
	}

	/**
	 * 更新玩家银币
	 * @param event 
	 * @param uid 
	 * @returns 
	 */
	updateCoin(event = null, uid = null) {
		if (event != null && uid != this._uid) {
			return;
		}
		this.updateUserPlayer();
		if (!this._player) {
			return;
		}
		this.moneyLabel.string = Utils.string_matchStr(this._player.money);
	}


	updateListProps() {
		let dataList = FXJConstant.EmojiProp;
		let maxLen = this.propList.children.length;
		if (dataList.length > maxLen) {
			maxLen = dataList.length;
		}
		// {
		// 	propID: 100,
		// 	icon: "jidan.png",
		// 	audio: FXJSound.emojiProp100,
		// 	aniConf: {bundle:"", path:""}
		// },
		for (let i = 0; i < maxLen; i++) {
			if (dataList[i]) {
				let info = dataList[i];
				let itemNode = this.propList.children[i];
				if (itemNode == null) {
					itemNode = instantiate(this.cloneProp);
					this.propList.addChild(itemNode);
				}
				let img_item = itemNode.getChildByName("img_item");
				this.getPreLoaderRes(FXJRes.Atlas_Game_EmojiProp.bundle, FXJRes.Atlas_Game_EmojiProp.path, SpriteAtlas, (atlas) => {

					if (!img_item || img_item.isValid == false) {
						return;
					}
					let spriteFrame = atlas.getSpriteFrame(info.icon)
					if (spriteFrame) {
						let spriteComponent = img_item.getComponent(Sprite);
						spriteComponent.sizeMode = 0;
						spriteComponent.spriteFrame = spriteFrame;
						img_item.active = true;
					}
				})
				let node_price = itemNode.getChildByName("node_price");
				let money_icon = node_price.getChildByName("money_icon");
				let label_name = node_price.getChildByName("label_name");
				node_price.active = true;
				money_icon.active = false;
				label_name.getComponent(Label).string = info.name;
				itemNode["PropData"] = info;
				itemNode.active = true;
			} else {
				if (this.propList.children[i]) {
					this.propList.children[i].destroy();
				}
			}
		}

	}


	/**
	 * 点击关闭
	 * @param event 
	 */
	onClickClose(event: EventTouch) {
		EventManager.dispatch(FXJEvent.SYS_PLAY_EFFECT, FXJSound.CommClick);
		this.node.destroy();
	}


	/**
	 * 点击互动道具
	 * @param event 
	 * @returns 
	 */
	onClickProp(event: EventTouch) {
		let node = event.currentTarget;
		if (node["PropData"] == null) {
			return;
		}
		EventManager.dispatch(FXJEvent.SYS_PLAY_EFFECT, FXJSound.CommClick);
		let info = node["PropData"];
		console.log(info)
		let propsId = info.propID;
		let fromId = GCache.User.getUserMid()
		fromId = Utils.number_valueOf(fromId)
		let obj = {
			from: fromId,
			to: this._uid
		}
		let text = Encrypt.JsonEncode(obj)
		EventManager.dispatch(FXJEvent.GAME_REQ_EMOJI_PROPS_MSG, propsId, text);
		console.log("点击发送道具:onClickProp")
		this.node.destroy();

	}


	/**
	 * 玩家退出房间 关闭界面
	 * @param event 
	 * @param posID 
	 */
	receiveUserExitRoom(event, posID) {
		if (posID != null && posID == this._posID) {
			this.node.destroy();
		}
	}

	/**
	 * 复制ID
	 * @param e 
	 */
	onClickCopy(e: any) {
		EventManager.dispatch(FXJEvent.SYS_PLAY_EFFECT, FXJSound.CommClick);
		let uid = String(this._uid)
		Platform.copyClipboard(uid);
	}

	//销毁
	onDestroy() {

	};

}

