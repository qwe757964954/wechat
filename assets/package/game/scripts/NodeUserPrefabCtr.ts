
import { Label, Node, SpriteAtlas, UITransform, Vec3, _decorator } from 'cc';
import { GCache } from '../../../cache/GCache';
import { inf_SpineAniCreate } from '../../../framework/InterfaceDefines';
import { Utils } from '../../../framework/Utils';
import SpriteLoad from '../../../framework/gui/sprite/SpriteLoad';
import { EventManager } from '../../../framework/manager/EventManager';
import { BaseComponent } from '../../../framework/vc/BaseComponent';
import { PlayerMgr } from '../cache/PlayerMgr';
import { RoomMgr } from '../cache/RoomMgr';
import { FXJConfig } from '../common/FXJConfig';
import { FXJConstant } from '../common/FXJConstant';
import { FXJEvent } from '../common/FXJEvent';
import { FXJRes, FXJUIID } from '../common/FXJRes';
import { FXJSound } from '../common/FXJSound';
import { GameEvent } from '../common/GameEvent';
import { Common } from '../common/idl/Common';
import { FaceType, MsgType } from '../common/server/ChatServer';
import { CardUtil } from '../util/CardUtil';
const { ccclass, property, menu } = _decorator;

/**
 * Name = NodeUserPrefabCtr
 * URL = db://assets/package/game/scripts/NodeUserPrefabCtr.ts
 * Time = Fri Sep 16 2022 11:06:58 GMT+0800 (中国标准时间)
 * Author = Tomoe
 *
 * Life: onLoad-->onEnable->start->update->lateUpdate->onDisable->onDestroy
 * 玩家节点
 */

@ccclass('NodeUserPrefabCtr')
//方便编辑器识别的菜单项目
@menu('prefab/game/NodeUserPrefabCtr')
export class NodeUserPrefabCtr extends BaseComponent {

	//玩家信息背景
	@property({ tooltip: "玩家信息背景", type: Node })
	private infoBgPlayer: Node | null = null;

	/** 玩家托管 */
	@property({ tooltip: "玩家显示托管状态", type: Node })
	private nodeDeposit: Node | null = null;

	//用户头像
	@property({ tooltip: "用户头像", type: Node })
	headNode: Node = null!;
	//用户头像框
	@property({ tooltip: "用户头像框", type: Node })
	public headBoxNode: Node | null = null;
	//银币
	@property({ tooltip: "银币", type: Label })
	private coinLabel: Label | null = null;

	//聊天气泡节点
	@property({ tooltip: "聊天气泡节点", type: Node })
	private nodeChat: Node | null = null;

	//表情动画节点
	@property({ tooltip: "表情动画节点", type: Node })
	private nodeEmoji: Node | null = null;

	//庄家节点
	@property({ tooltip: "庄家节点", type: Node })
	private nodeZhuang: Node = null!;

	/** 自动隐藏快捷聊天的句柄 */
	private _handlerChatTextAutoHide = null;
	//是否已经加载了
	private _isReload: boolean = false;
	//玩家id
	private _uid: number = null;
	//玩家座位号
	private _posID: number = null;
	/**初始化添加事件绑定 */
	protected onInitModuleEvent(): void {
		//玩家退出
		this.addModelListener(GameEvent.VIEW_BROADCAST_PLAYER_EXIT, this.palyerExit);
		//玩家资产有更新
		this.addModelListener(FXJEvent.VIEW_PLAYER_UPDATE_PROPERTY, this.updateCoin);
		//玩家表情聊天通知
		this.addModelListener(FXJEvent.VIEW_PLAYER_CHAT_SHOW, this.showChatMsg);
		this.addModelListener(GameEvent.VIEW_PLAYER_EMOJ_SHOW, this.showEmojMsg);

		// 通知托管
		this.addModelListener(GameEvent.VIEW_PLAYER_AI_SHOW, this.modifyPlayerDeposit);

		// 定庄
		this.addModelListener(GameEvent.VIEW_BROADCAST_DING_ZHUANG, this.palyerDingZhuang);
	}

	onLoad() {
		this._isReload = true;
		console.log("NodeUser: onload==>", this._uid);
		this.preloadRes();
		this.initUI();
	}
	initUI() {
		this.infoBgPlayer.active = true;
		this.nodeChat.active = false;
		this.nodeEmoji.active = true;
		this.node.active = true;
		this.nodeDeposit.active = false;
		this.nodeZhuang.active = false;
		this.palyerRefresh(null, this._uid);
	}
	/** 预加载 */
	preloadRes() {
		this.getPreLoaderRes(FXJRes.Atlas_Game_CardNum.bundle, FXJRes.Atlas_Game_CardNum.path, SpriteAtlas);
		this.getPreLoaderRes(FXJRes.Atlas_Player_Common.bundle, FXJRes.Atlas_Player_Common.path, SpriteAtlas);

	}
	start() {

	};
	/** get uid */
	get UID() {
		return this._uid;
	}
	/** set PosID */
	set PosID(posID) {
		this._posID = posID;
	}
	/** get PosID */
	get PosID() {
		return this._posID;
	}

	public initData(data) {
		if (data) {
			this._posID = data.posID;
			this._uid = data.uid;
		}
		if (!this.node || this.node.isValid == false) {
			return;
		}
		if (this._uid) {
			let player = PlayerMgr.getInstance().findPlayerWithUserId(this._uid);
			if (player != null) {
				this.palyerRefresh(null, this._uid);
			} else {
				this.node.destroy();
			}
		}
	}
	/** 用户刷新 */
	palyerRefresh(event, uid: number) {
		if (!uid || uid != this._uid) {
			return;
		}
		let player = PlayerMgr.getInstance().findPlayerWithUserId(uid);
		if (player) {
			this._posID = CardUtil.calculatePlayerSeat(RoomMgr.getInstance().mySeatId, player.seatId);

			this.infoBgPlayer.active = true;
			this.updatePos();
			this.updateUserHead(player.gameUserInfo.sex, player.gameUserInfo.avatar_s);
			this.updateUserHeadBox(player.gameUserInfo.headBox);
			this.updateCoin(null, player.userId);
		}
	}

	//更新用户头像
	updateUserHead(sex: number, url: string) {
		let spriteLoad = this.headNode.getComponent(SpriteLoad);
		if (Utils.string_isHttp(url)) {
			spriteLoad.setRemoteUrl(url, () => {
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
	}
	//更新用户头像框
	updateUserHeadBox(headBox) {
		let spriteLoad = this.headBoxNode.getComponent(SpriteLoad);
		if (Utils.string_isHttp(headBox)) {
			spriteLoad.setRemoteUrl(headBox);
		}
	}

	/**更新玩家银币*/
	updateCoin(event = null, uid: number = null) {
		if (uid && uid == this._uid) {
			let palyer = PlayerMgr.getInstance().findPlayerWithUserId(uid);
			this.coinLabel.string = Utils.string_moneyToShortNumber(palyer ? palyer.money : 0, true);
		}
	}

	/** 更新当前位置 */
	updatePos() {
		let uiTransform = this.node.getParent().getComponent(UITransform)
		switch (this._posID) {
			case 0:
				this.node.position = new Vec3(- (uiTransform.width / 2 - 90), -(uiTransform.height / 2 - 100), 0);
				break;
			case 1:
				this.node.position = new Vec3((uiTransform.width / 2 - 130), 5, 0);
				break;
			case 2:
				this.node.position = new Vec3((uiTransform.width / 2 - 390), (uiTransform.height / 2 - 90), 0);
				break;
			case 3:
				this.node.position = new Vec3(-(uiTransform.width / 2 - 130), 5, 0);
				break;
		}
	}

	modifyPlayerDeposit(event, respData) {
		// 自己托管不用显示托管标志
		if (respData.mid != null) {
			if (respData.mid == this._uid) {
				this.nodeDeposit.active = respData.ai;
			}
		}
	}

	cleanDepositStatus(){
		this.nodeDeposit.active = false;
	}

	showEmojMsg(event, body: FaceType) {
		/*
		nodeUserPrefabCtr.ts:238 显示聊天气泡或表情 
		{mid: 9465533, faceValue: 65549, vipType: -1}
		*/
		if (this._uid !== body.mid) {
			this.nodeEmoji.active = false;
			return;
		}
		if (body.faceValue == null) {
			return;
		}
		let mojiIndex = body.faceValue - Math.pow(2, 16)

		let aniName = FXJConstant.ChatEmojiAniConf[mojiIndex]
		if (aniName) {
			//表情
			this.nodeEmoji.active = true;
			let movex = 0;
			//表情动画
			let emojiAni: inf_SpineAniCreate = {
				parentNode: this.nodeEmoji,
				resConf: FXJRes.Spine_Emoji,
				aniName: aniName,
				trackIndex: 0,
				isLoop: false,
				skin: null,
				toPos: new Vec3(movex, 0, 0)
			}
			EventManager.dispatch(FXJEvent.SYS_ANI_PLAY, emojiAni);
		} else {
			console.warn("Err:不支持的快捷表情", body)
		}
	}


	/** 显示聊天气泡或表情 */
	showChatMsg(event, body: MsgType) {
		/*
		显示聊天气泡或表情 
		nodeUserPrefabCtr.ts:238 显示聊天气泡或表情 
		{mid: 2503717, msg: '退退退', index: 2}
		*/
		console.log("聊天接收到的是:", body)
		let player: Common.IPlayerInfo = PlayerMgr.getInstance().findPlayerWithUserId(body.mid);
		if (this._uid !== body.mid) {
			this.nodeChat.active = false;
			return;
		}
		let PosId: number = CardUtil.calculatePlayerSeat(RoomMgr.getInstance().mySeatId, player.seatId);
		//快捷聊天
		if (Utils.isNotNull(PosId, body.msg)) {
			let msg = body.msg;
			//根据msg 去索引得到音效名
			let audioType = '';
			let audioIndex = -1;
			for (const key in FXJConstant.ChatText) {
				if (Object.prototype.hasOwnProperty.call(FXJConstant.ChatText, key)) {
					const arr = FXJConstant.ChatText[key];
					if (Utils.isArray(arr)) {
						let tmpIndex = arr.indexOf(msg);
						if (tmpIndex != -1) {
							audioType = key;
							audioIndex = tmpIndex;
							break;
						}
					}
				}
			}
			if (Utils.string_isEmpty(audioType) || audioIndex == -1) {
				return;
			}
			let audioName = audioType + '_' + audioIndex;
			let gender = GCache.User.getUserSex();
			if (gender == 2) {
				EventManager.dispatch(FXJEvent.SYS_PLAY_EFFECT, { bundle: FXJSound.QuickChatXiaoBo.bundle, path: FXJSound.QuickChatXiaoYa.path + audioName });
			} else {
				EventManager.dispatch(FXJEvent.SYS_PLAY_EFFECT, { bundle: FXJSound.QuickChatXiaoBo.bundle, path: FXJSound.QuickChatXiaoBo.path + audioName });
			}

			this.stopSchedulerOnce(this._handlerChatTextAutoHide);
			this._handlerChatTextAutoHide = null;
			this.nodeChat.active = true;
			let childNameList = ["right", "left", "bottom"];
			let currowName = childNameList[0];
			if (PosId === 1 || PosId === 2) {
				currowName = childNameList[PosId];
			}
			let parentNode = null;
			childNameList.forEach((nodeName, key) => {
				let pNode = this.nodeChat.getChildByName(nodeName);
				if (nodeName == currowName) {
					pNode.active = true;
					parentNode = pNode;
				} else {
					pNode.active = false;
				}
			})
			if (!parentNode) {
				return;
			}
			let bg = parentNode.getChildByName("bg");
			let label = bg?.getChildByName("Label");
			if (label) {
				label.getComponent(Label).string = String(body.msg);
			}
			this._handlerChatTextAutoHide = this.addSchedulerOnce(FXJConfig.ChatTextAutoHide, Utils.handler(this, this.hideChatText))
		}

	};
	/** 隐藏快捷聊天 */
	hideChatText() {
		if (this.nodeChat && this.nodeChat.isValid == true) {
			this.nodeChat.active = false;
		}
		this._handlerChatTextAutoHide = null;
	}

	//点击个人信息
	onClickUserInfo(event) {
		let palyer = PlayerMgr.getInstance().findPlayerWithUserId(this._uid);
		if (!palyer) {
			return;
		}
		EventManager.dispatch(FXJEvent.SYS_PLAY_EFFECT, FXJSound.CommClick);
		if (GCache.Desk.PlayType == FXJConstant.PlayType.MATCH) {
			EventManager.dispatch(FXJEvent.SYS_TOAST_TIP, { content: "比赛中无法查看玩家信息" });
			return;
		}
		if (palyer.userId == GCache.User.getUserMid()) {
			EventManager.dispatch(FXJEvent.VIEW_UI_OPEN, FXJUIID.PlayerInfoCenter, null, null, null, true);
		} else {
			let data = {
				uid: palyer.userId,
				posID: palyer.seatId,
			}
			EventManager.dispatch(FXJEvent.GAME_OPEN_POPUP, FXJUIID.GameHeadInfoPrefab, data, {});
		}
	}

	//玩家退出房间
	palyerExit(event, uid: number = null) {
		if (Utils.isNotNull(uid)) {
			if (uid == this._uid) {
				this.node.active = false;
			}
		}
	}

	palyerDingZhuang(event, seatId: number = null) {
		if (Utils.isNotNull(seatId)) {
			this.nodeZhuang.active = CardUtil.calculatePlayerSeat(RoomMgr.getInstance().mySeatId, seatId) == this._posID;
		}

	}

	//销毁
	onDestroy() {

	};

}

