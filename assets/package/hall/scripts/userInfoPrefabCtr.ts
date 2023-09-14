
import { EventTouch, Label, Node, Sprite, Toggle, _decorator } from 'cc';
import { GCache } from '../../../cache/GCache';
import { AppEvent } from '../../../config/AppEvent';
import { AppSound } from '../../../config/AppSound';
import { GConstants } from '../../../config/GameConstant';
import { GameRes } from '../../../config/GameRes';
import { ReportConfig } from '../../../config/ReportConfig';
import { UIID } from '../../../config/UIConfig';
import { Utils } from '../../../framework/Utils';
import SpriteLoad from '../../../framework/gui/sprite/SpriteLoad';
import { EventManager } from '../../../framework/manager/EventManager';
import { BaseComponent } from '../../../framework/vc/BaseComponent';
import { Platform } from '../../../platform/Platform';
const { ccclass, property, menu } = _decorator;

/**
 * Name = prefab_playerCenter
 * URL = db://assets/resources/prefab/prefab_playerCenter.ts
 * Time = Thu Apr 07 2022 11:37:28 GMT+0800 (中国标准时间)
 * Author = Tomoe
 *
 * Life: onLoad-->onEnable->start->update->lateUpdate->onDisable->onDestroy
 */

@ccclass('prefab_playerCenter')
//方便编辑器识别的菜单项目
@menu('prefab/hall/playerCenter')

export class prefab_playerCenter extends BaseComponent {
	/**性别选择按钮父节点 */
	@property(Node)
	sexBtnNode: Node = null!;
	/** 银币数量*/
	@property(Label)
	coinLabel: Label = null!;
	/**用户昵称 */
	@property(Label)
	userName: Label = null!;
	/** 用户ID*/
	@property(Label)
	userID: Label = null!;

	@property(Label)
	otherUserID: Label = null!;
	/** 用户头像*/
	@property(Node)
	headNode: Node = null!;

	//同步微信用户信息
	@property({ tooltip: "同步微信用户信息", type: Node })
	private btnGetWXInfo: Node | null = null;

	@property({ tooltip: "男性图标", type: Node })
	private maleNode: Node | null = null;

	@property({ tooltip: "女性图标", type: Node })
	private femaleNode: Node | null = null;

	
	/** 用户性别 */
	userSexNum: number;
	/** 修改性别缓存 */
	cacheSex = null;
	/** 微信昵称 */
	wechatNick = null;
	/** 头像 */
	avatar = null;
	/** 是否是微信登录 */
	private _isWxLogin = false;
	private _openViewCount = 0;
	/** 是否在游戏中 */
	private _isGameIn = false;
	onLoad() {

		this.updateUserInfo(null);
		//设置授权按钮的坐标
		Platform.WxAuthSettingButtonParam = Utils.node_PositionSizeToScreen(this.btnGetWXInfo);
		this._openViewCount = 0;
		this.updateWXSettingButtonVisible(false);
		//打开了界面
		this.addModelListener(AppEvent.VIEW_UI_OPENED, this.onOpenedViewCallback)
		//关闭了界面
		this.addModelListener(AppEvent.VIEW_UI_CLOSED, this.onClosedViewCallback)
	};


	protected onInitModuleEvent() {
		//用户信息更新
		this.addModelListener(AppEvent.USER_UPDATE_INFO, this.updateUserInfo)
		//用户资产更新
		this.addModelListener(AppEvent.USER_UPDATE_PROPERTY, this.updateUserMoney)

		//授权按钮创建成功/授权成功
		this.addModelListener(AppEvent.PLATFORM_AUTHSETTING_UPDATE, this.respAuthButtonCreator)
	}

	
	checkIsInGame() {
		let userId = GCache.User.getUserMid("");
		userId = Utils.number_valueOf(userId);
		this._isGameIn =  GCache.User.LoginRoomState;
	}

	//更新用户信息
	updateUserInfo(event = null, body = null) {
		this.checkIsInGame();
		let gender = GCache.User.getUserSex()
		gender = Utils.number_valueOf(gender);
		gender = gender > 0 ? gender : 1;
		if (this._isGameIn) {
			this.sexBtnNode.active = false;
			this.maleNode.active = true;
			this.femaleNode.active = false;
			if (gender==2) {
				let sp = this.femaleNode.getComponent(Sprite).spriteFrame;
				this.maleNode.getComponent(Sprite).spriteFrame = sp;
			} 
		}
		
		if (body) {
			this.userName.string = GCache.User.getUserName();
			this.changeSex(gender);
			if (Utils.isNotNull(body['nick'])) {
				EventManager.dispatch(AppEvent.SYS_TOAST_TIP, { content: "已同步微信昵称和头像" });
			}	
		} else {
			this.updateUserMoney();
			this.userName.string = GCache.User.getUserName();
			this.userID.string = GCache.User.getUserMid("");
			this.otherUserID.string = this.userID.string;
			this.changeBtnActive();
			this.changeSex(gender);
		}
	}
	/**
	 * 更新用户资产
	 * @param event 
	 * @param body 
	 */
	updateUserMoney(event = null, body = null) {
		this.coinLabel.string = Utils.string_matchStr(GCache.User.getUserMoneyByID(0));//货币类型 0:银币，1：金条 2：兑换券
	}


	/**
	 * 修改默认头像,如果有数据则用远程图片,没有则用默认头像
	 * @param value 
	 */
	changeSex(value: number) {
		let spriteLoad = this.headNode.getComponent(SpriteLoad);
		let headArray = GCache.User.getUserHeadArray();
		if (headArray && headArray.b != "") {
			let self = this;
			spriteLoad.setRemoteUrl(headArray.b)
		} else { 
			if (value == 2) {
				spriteLoad.setLocalLoad(GameRes.Picture_UserBigHead_girl.bundle, GameRes.Picture_UserBigHead_girl.path);
			} else {
				spriteLoad.setLocalLoad(GameRes.Picture_UserBigHead_boy.bundle, GameRes.Picture_UserBigHead_boy.path);
			}
		}
	}

	/**
	 * 可见
	 */
	onEnable() {
		this.updateWXSettingButtonVisible(true);
		this._openViewCount = 0;
	}

	/**
	 * 不可见
	 */
	onDisable() {
		this.updateWXSettingButtonVisible(false);
	}

	/**
	 * 界面打开的回调
	 * @param event 
	 * @param viewParam 
	 * @returns 
	 */
	onOpenedViewCallback(event = null, viewParam) {
		if (this.node.active == false) {
			return;
		}
		//防止重叠
		if (viewParam["Prefab"] == GameRes.Prefab_ToastTip.path) {
			return;
		}
		this._openViewCount = this._openViewCount + 1;
		this.updateWXSettingButtonVisible(false);
	}

	/**
	 * 界面关闭的回调
	 * @param event 
	 * @param viewParam 
	 * @returns 
	 */
	onClosedViewCallback(event = null, viewParam) {
		if (this.node.active == false) {
			return;
		}
		if (viewParam["Prefab"] == GameRes.Prefab_ToastTip.path) {
			return;
		}
		this._openViewCount = this._openViewCount - 1;
		if (this._openViewCount < 0) {
			this._openViewCount = 0;
		}
		if (this._openViewCount == 0) {
			this.updateWXSettingButtonVisible(true);
		} else {
			this.updateWXSettingButtonVisible(false);
		}
	}


	//更新同步微信用户信息按钮的显示和隐藏状态
	updateWXSettingButtonVisible(visible?: boolean) {
		if (this._isGameIn) { 
			this.btnGetWXInfo.active = false;
			if (this._isWxLogin == true) {
				Platform.updateWxAuthSettingButtonVisible(false);
			}
			return;
		}
		
		if (this._isWxLogin == true) {
			Platform.updateWxAuthSettingButtonVisible(visible);
			if (this.node && this.node.isValid) {
				this.btnGetWXInfo.active = false;
			}
		} else {
			if (this.btnGetWXInfo && this.btnGetWXInfo.isValid) {
				this.btnGetWXInfo.active = visible;
			}
		}
	}


	/**
	 * 平台返回的登录失败,由微信调
	 * @param event 
	 * @param errorCode 
	 */
	respPlatformFail(event, errorCode: number) {
		console.log(`平台返回的授权失败 errorCode = ${errorCode}`)
		if (errorCode <= GConstants.LoginStateCode.platform_fail_wx_access_token_error) {
			//全是wx平台的错误
			if (errorCode == GConstants.LoginStateCode.platform_fail_wx_notAuthSetting) {
				//未取得授权

			} else {
				//其他错误
			}
			this.updateWXSettingButtonVisible(true);
		}
	}


	/**
	 * 授权按钮创建成功/授权成功
	 * @param event 
	 * @param button 
	 */
	respAuthButtonCreator(event, button) {
		if (button) {
			this.updateWXSettingButtonVisible(true);
		} else {
			if (Platform.WxAuthSettingUserInfo == 1) {//授权成功
				console.log("授权成功 平台用户信息", Platform.WxUserInfo)
				this.__toChangeInfo(Platform.WxUserInfo["nickName"], Platform.WxUserInfo["avatarUrl"])
			}
		}
	}

	/**
	 * 点击上传更新性别并关闭该预制体
	 * @param event
	 */
	onClickClose(event: EventTouch) {
		EventManager.dispatch(AppEvent.SYS_PLAY_EFFECT, AppSound.CommClick);
		if (this._isGameIn) { 
			EventManager.dispatch(AppEvent.VIEW_UI_CLOSE, UIID.PlayerInfoCenter);
			return;
		}
		if (this.cacheSex != null) {
			let body = {
				sex: this.cacheSex,
			}
			EventManager.dispatch(AppEvent.NET_REQ_SET_USERINFO, body);
		}
		EventManager.dispatch(AppEvent.SYS_PLAY_EFFECT, AppSound.CommClick);
		EventManager.dispatch(AppEvent.REPORT_CLIENT_CLICK, { eventID: ReportConfig.userInfo_1 });
		EventManager.dispatch(AppEvent.VIEW_UI_CLOSE, UIID.PlayerInfoCenter);
	}

	/**
	 * 修改性别点击监听
	 * @param event 
	 * @param custom 
	 */
	onClickSex(event: EventTouch, custom: string) {
		if (this._isGameIn) { 
			return;
		}
		if (custom == "man") {
			this.cacheSex = 1
		} else if (custom == "woman") {
			this.cacheSex = 2
		}
		//切换性别
		EventManager.dispatch(AppEvent.REPORT_CLIENT_CLICK, { eventID: ReportConfig.userInfo_2 });
	}


	/**
	 * 修改性别按钮状态:1男2女0保密,如果是0,则为男
	 */
	changeBtnActive() {
		let gender = GCache.User.getUserSex();
		gender = Utils.number_valueOf(gender,0);
		this.userSexNum = gender;
		if (this.userSexNum == 0) {
			this.userSexNum = 1;
			this.cacheSex = 1;
		}
		if (this.userSexNum == 1) {
			this.sexBtnNode.getChildByName("Toggle1").getComponent(Toggle).isChecked = true;
		} else {
			this.sexBtnNode.getChildByName("Toggle2").getComponent(Toggle).isChecked = true;
		}
	}

	/**
	 * 复制ID
	 * @param e 
	 */
	onClickCopy(e: any) {
		EventManager.dispatch(AppEvent.SYS_PLAY_EFFECT, AppSound.CommClick);
		Platform.copyClipboard(GCache.User.getUserMid());	
		EventManager.dispatch(AppEvent.REPORT_CLIENT_CLICK, { eventID: ReportConfig.userInfo_3 });
	}

	start() {
		Platform.updateWxAuthSettingButtonVisible(null);
		Platform.WxAuthSettingButtonParam["img"] = GameRes.AppCommon_GetUserInfo_WX.path;
		this._isWxLogin = Platform.isWXPlatform();
		this.updateWXSettingButtonVisible(true);
		console.log("授权按钮的屏幕参数：", Platform.WxAuthSettingButtonParam);
	};



	/**
	 * 点击同步微信昵称,这个方法在实际微信中不会调用,只是在模拟器环境下开发
	 * @param event 
	 */
	onClickSyncWXInfo(event: EventTouch = null) {
		EventManager.dispatch(AppEvent.SYS_PLAY_EFFECT, AppSound.CommClick);
		let tmpName = "测试1" + GCache.User.getUserMid();
		let avatar = 'https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTI8sibBlJEE6mfxaKkdlFtAJ9tQGGDrAOEZDIEThRUqcBIr2gWQtde0wJIEfhSc4swl4PCW72LjqIg/132';
		this.__toChangeInfo(tmpName, avatar);
	}

	/**
	 * 更新用户昵称,头像
	 * @param name 
	 * @param avatar 
	 * @returns 
	 */
	private __toChangeInfo(name: string, avatar: string) {
		if (Utils.string_isEmpty(name)) {
			EventManager.dispatch(AppEvent.SYS_TOAST_TIP, { content: "err:昵称不能为空" });
			return;
		}
		let body = {
			nick: String(name),
			avatar: avatar
		}
		EventManager.dispatch(AppEvent.NET_REQ_SET_USERINFO, body)
		EventManager.dispatch(AppEvent.REPORT_CLIENT_CLICK, { eventID: ReportConfig.userInfo_4 });
	}


	/**
	 * 销毁
	 */
	onDestroy() {
		Platform.updateWxAuthSettingButtonVisible(null);
	};

	/**
	 * 点击蒙版外面的关闭界面
	 */
	onMaskClose() {
		EventManager.dispatch(AppEvent.SYS_PLAY_EFFECT, AppSound.CommClick);
		this.node.destroy();
	}
}

