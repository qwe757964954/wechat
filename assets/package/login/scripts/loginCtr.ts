
import { Button, EditBox, EventTouch, Node, Toggle, Widget, _decorator } from 'cc';
import { GCache } from '../../../cache/GCache';
import { AppEvent } from '../../../config/AppEvent';
import { AppSound } from '../../../config/AppSound';
import { GConstants, StoreKey } from '../../../config/GameConstant';
import { GameRes } from '../../../config/GameRes';
import { UIID } from '../../../config/UIConfig';
import { inf_LoginViewInfo } from '../../../framework/InterfaceDefines';
import { LocalStorage } from '../../../framework/LocalStorage';
import { Logger } from '../../../framework/log/Logger';
import { AudioManager } from '../../../framework/manager/AudioManager';
import { EventManager } from '../../../framework/manager/EventManager';
import { Utils } from '../../../framework/Utils';
import { BaseComponent } from '../../../framework/vc/BaseComponent';
import { Platform } from '../../../platform/Platform';
const { ccclass, property, menu } = _decorator;

/**
 * Name = loginCtr
 * URL = db://assets/package/login/scripts/loginCtr.ts
 * Time = Tue Sep 06 2022 14:45:40 GMT+0800 (中国标准时间)
 * Author = Tomoe
 *
 * Life: onLoad-->onEnable->start->update->lateUpdate->onDisable->onDestroy
 */

@ccclass('loginCtr')
//方便编辑器识别的菜单项目
@menu('prefab/login/loginCtr')
export class loginCtr extends BaseComponent {

	//开始游戏按钮节点
	@property({ tooltip: "开始游戏按钮组件", type: Button })
	private btnLogin: Button | null = null;

	//输入框节点
	@property({ tooltip: "输入框节点", type: Node })
	private editBoxNode: Node | null = null;

	//输入框
	@property({ tooltip: "输入框", type: EditBox })
	private editBox: EditBox | null = null;

	//用户协议和隐私政策勾选框
	@property({ tooltip: "用户协议和隐私政策勾选框", type: Toggle })
	private toggleAgreeGou: Toggle | null = null;

	isChangeScene: boolean = false;

	//wx平台的授权按钮
	autoSettingButton = null;
	//wx平台的授权按钮上次的显示状态
	autoSettingButtonVisible = false;
	//登录传递的参数
	loginParam: inf_LoginViewInfo = { access_token: null, openId: null, userinfo: null };
	//是否是微信登录
	_isWxLogin: boolean = false;
	//上次登录的错误吗
	_lastLoginFailCode: number = 0;
	constructor() {
		super();
		if (GCache.firstRunLoadSuccess) {
			AudioManager.getInstance().releaseAll();
		}
		EventManager.dispatch(AppEvent.SYS_PLAY_MUSIC, AppSound.BgHall);
	}

	/** overload */
	onInitModuleEvent() {
		//授权按钮创建成功/授权成功
		this.addModelListener(AppEvent.PLATFORM_AUTHSETTING_UPDATE, this.respAuthButtonCreator)
		//平台登录失败
		this.addModelListener(AppEvent.LOGIN_PLATFORM_FAIL, this.respPlatformFail)
		//平台获取数据成功
		this.addModelListener(AppEvent.LOGIN_PLATFORM_SUCCESS, this.respPlatformSuccess)
		//用户隐私同意状态有更新
		this.addModelListener(AppEvent.LOGIN_AGREE_PRIVATE, this.respUserAgreePrivate)

	}

	onLoad() {
		//设置授权按钮的坐标
		this.btnLogin.node.getComponent(Widget).updateAlignment();
		Platform.WxAuthSettingButtonParam = Utils.node_PositionSizeToScreen(this.btnLogin.node);
		Platform.WxAuthSettingButtonParam["img"] = GameRes.AppCommon_Login_WX.path;

		this._isWxLogin = Platform.isWXPlatform();
		this.updateLoginButtonVisible(false);
		this.editBoxNode.active = false;

		this.loginParam = { access_token: null, openId: null, userinfo: null };

		this.addModelListener(AppEvent.LOGIN_SEND_SHOW, this.onReceiveLoginData)
	};

	start() {

	};

	//获取用户协议与隐私政策同意状态 
	checkIsAgree(): boolean {
		let res = LocalStorage.get(StoreKey.LOGIN_LAST_CHECK_AGREE, false);
		console.log("获取用户协议与隐私政策同意状态===>", res)
		if (!res) {
			let callbackArgs = {
				onAdded: Utils.handler(this, this.onCallbackOpenView),
				onRemoved: Utils.handler(this, this.onCallbackCloseView),
			}
			EventManager.dispatch(AppEvent.VIEW_UI_OPEN, UIID.UserAgreePrivate, null, callbackArgs);
		}
		this.toggleAgreeGou.isChecked = res;
		return res
	}

	//二级页面的打开回调
	onCallbackOpenView() {
		this.updateLoginButtonVisible(false);
	}

	//二级页面的关闭回调
	onCallbackCloseView() {
		this.updateLoginButtonVisible(true);
	}

	//开始登录
	startLogin() {
		if (this.loginParam.access_token == null) {
			this.editBoxNode.active = (this._isWxLogin == false);
			this.updateLoginButtonVisible(true);
			return
		}
		/** 判断是否同意用户协议与隐私政策 */
		let isAgree = this.checkIsAgree();
		if (isAgree) {
			//发送登录命令
			EventManager.dispatch(AppEvent.NET_GOTO_START_LOGIN, this.loginParam)
		}
		// GCache.User.cleanLastlocalLoginInfo();

		// if (this.toggleAgree.isChecked == false) {
		// 	this.editBoxNode.active = (this._isWxLogin == false);
		// 	this.updateLoginButtonVisible(true);
		// 	EventManager.dispatch(AppEvent.SYS_TOAST_TIP, { content: GameTxt.loginCheckAgree });
		// 	return;
		// }
		//* 注意:若上次记录的token和本次不一致 则清空上次的登录记录
		// let lastKey = GCache.User.getLastlocalLoginToken();
		// if (!this._isWxLogin) {
		// 	lastKey = GCache.User.getLastLoginValueByKey("guid", null);
		// }
		// if (lastKey != this.loginParam.openId) {
		// GCache.User.cleanLastlocalLoginInfo();
		// }

	}

	/** 外部传递的事件 */
	onReceiveLoginData(event, param: any) {
		console.log("登录界面:外部传递 刷新UI", param)
		//执行到这 肯定加载完毕了
		this.updateLoginView();
	}

	/** 加载结束之后 */
	updateLoginView() {
		if (this._isWxLogin) {
			this.editBox.string = Utils.nullToDefault(GCache.User.getLastlocalLoginToken(), "");
		} else {
			let access_token = GCache.User.getLastLoginValueByKey("guid");
			this.editBox.string = Utils.nullToDefault(access_token, "");
			this.loginParam.access_token = access_token;
		}

		/** 先判断是否有登录成功的记录 */
		let lastLoginInfo = GCache.User.getLastlocalLoginInfo();
		this.print("updateLoginView", "lastLoginInfo", lastLoginInfo);
		/** 判断是否同意用户协议与隐私政策 */
		let isAgree = this.checkIsAgree();

		this.print("updateLoginView", "isAgree", isAgree);
		if (isAgree && lastLoginInfo && GCache.User.getLoginState() == GConstants.UserLoginState.None) {
			Logger.logView("[Login] 检测到有上次登录历史，开始自动登录")
			this.updateLoginButtonVisible(false);
			this.editBoxNode.active = false;

			this.loginParam = { access_token: null, openId: null, userinfo: null };

			if (this._isWxLogin) {
				this.loginParam.access_token = GCache.User.getLastlocalLoginToken();
				if (Utils.string_isEmpty(this.loginParam.access_token) == false && Utils.string_isEmpty(this.loginParam.openId) == false) {
					EventManager.dispatch(AppEvent.NET_GOTO_START_LOGIN, this.loginParam);
					return;
				}

			} else {
				this.loginParam.access_token = GCache.User.getLastLoginValueByKey("guid");
				if (Utils.string_isEmpty(this.loginParam.access_token) == false) {
					EventManager.dispatch(AppEvent.NET_GOTO_START_LOGIN, this.loginParam);
					return;
				}
			}
		}
		//走到这了 肯定不能自动登录 清除快捷登录token
		GCache.User.cleanLastlocalLoginToken();
		if (this._isWxLogin) {
			this.editBoxNode.active = false
			if (isAgree == false) {
				this.loginParam = { access_token: null, openId: Platform.WxLoginCode, userinfo: null };
				this.updateLoginButtonVisible(true);
				return;
			}
			if (Platform.WxLoginCode) {
				this.loginParam = { access_token: null, openId: Platform.WxLoginCode, userinfo: null };

				this.updateLoginButtonVisible(true);
			} else {
				this.updateLoginButtonVisible(false);
				//请求平台获取用户信息
				Platform.reqPlatformLoginInfo()
			}
		} else {
			this.updateLoginButtonVisible(true);
			this.editBoxNode.active = true
		}
	}

	//平台返回的登录失败
	respPlatformFail(event, errorCode: number) {
		Logger.logView(`平台返回的登录失败 errorCode = ${errorCode}`)
		this._lastLoginFailCode = errorCode;
		if (errorCode <= GConstants.LoginStateCode.platform_fail_wx_access_token_error) {
			//全是wx平台的错误
			if (errorCode == GConstants.LoginStateCode.platform_fail_wx_notAuthSetting) {
				//未取得授权

			} else {
				//其他错误

			}
			this.loginParam = { access_token: null, openId: null, userinfo: null };
			this.updateLoginButtonVisible(true);
		}
	}
	//平台获取用户信息成功
	respPlatformSuccess(event, param) {
		Logger.logView("平台获取登录信息成功===>")
		Logger.table(param)
		this.updateLoginButtonVisible(false);
		this.loginParam = param;
		//暂时直接登录成功
		this.startLogin()
	}
	//用户隐私协议状态有更新
	respUserAgreePrivate(event, state) {
		this.toggleAgreeGou.isChecked = state;
	}
	//授权按钮创建成功/授权成功
	respAuthButtonCreator(event, button) {
		if (button) {
			this.updateLoginButtonVisible(true);
		} else {//授权成功销毁
			this.updateLoginButtonVisible();
			if (Platform.WxAuthSettingUserInfo == 1) {//授权成功
				Platform.reqPlatformLoginInfo(true);
			}
		}
	}

	//编辑结束
	updateEditBoxEnd() {
		this.editBox.string = Utils.nullToDefault(Utils.string_trim(this.editBox.string), "");
		this.editBox.string = Utils.nullToDefault(Utils.string_clearBr(this.editBox.string), "");

		this.loginParam = { access_token: this.editBox.string, openId: null, userinfo: null };
		this.startLogin()
	}

	//更新登录按钮的显示和隐藏状态
	updateLoginButtonVisible(visible?: boolean) {
		if (this._isWxLogin == true) {
			Platform.updateWxAuthSettingButtonVisible(visible);
			if (this.node && this.node.isValid) {
				this.btnLogin.node.active = false;
			}
		} else {
			if (this.btnLogin.node && this.btnLogin.node.isValid) {
				this.btnLogin.node.active = visible;
			}
		}
	}


	//联系客服事件监听
	onClickKefu(event: Event) {
		console.log("联系客服======>>");
		EventManager.dispatch(AppEvent.SYS_PLAY_EFFECT, AppSound.CommClick);
		Platform.openCustomerServiceConversation();
	}

	//登录按钮事件监听
	onClickLogin(event: Event) {
		// if (Utils.string_isEmpty(this.exidLabel.string)) {
		// alert("账号不能为空");
		// 	return;
		// }

		if (event && event.type == "touch-end") {
			EventManager.dispatch(AppEvent.SYS_PLAY_EFFECT, AppSound.CommClick);
			if (this.loginParam.access_token == null) {
				if (this._isWxLogin) {
					this.updateLoginButtonVisible(false);
					//请求平台获取用户信息
					Platform.reqPlatformLoginInfo();

				} else {
					this.updateEditBoxEnd();
				}
			} else {
				this.updateEditBoxEnd();
			}
		}
	}

	//点击了适龄提示
	onClickNotice(event: EventTouch) {
		EventManager.dispatch(AppEvent.SYS_PLAY_EFFECT, AppSound.CommClick);
		let callbackArgs = {
			onAdded: Utils.handler(this, this.onCallbackOpenView),
			onRemoved: Utils.handler(this, this.onCallbackCloseView),
		}
		EventManager.dispatch(AppEvent.VIEW_UI_OPEN, UIID.PictureDialog, "适龄提示", callbackArgs)
	}
	/** 点击了用户协议和隐私政策的钩 */
	onClickUserAgreePrivate(event: EventTouch) {
		let state = !this.toggleAgreeGou.isChecked;
		console.log("点击了用户协议和隐私政策的钩" + state)
		EventManager.dispatch(AppEvent.SYS_PLAY_EFFECT, AppSound.CommClick);
		LocalStorage.set(StoreKey.LOGIN_LAST_CHECK_AGREE, state);
		if (state == true) {
			Platform.onNeedPrivacyAuthorization_WX("exposureAuthorization");
			Platform.onNeedPrivacyAuthorization_WX("agree");
		}
	}
	/** 点击了用户协议 */
	onClickUserAgree(event: EventTouch) {
		EventManager.dispatch(AppEvent.SYS_PLAY_EFFECT, AppSound.CommClick);
		let callbackArgs = {
			onAdded: Utils.handler(this, this.onCallbackOpenView),
			onRemoved: Utils.handler(this, this.onCallbackCloseView),
		}
		EventManager.dispatch(AppEvent.VIEW_UI_OPEN, UIID.UserAgreePrivate, { type: 1 }, callbackArgs);
	}
	/** 点击了隐私政策 */
	onClickPrivate(event: EventTouch) {
		EventManager.dispatch(AppEvent.SYS_PLAY_EFFECT, AppSound.CommClick);
		let callbackArgs = {
			onAdded: Utils.handler(this, this.onCallbackOpenView),
			onRemoved: Utils.handler(this, this.onCallbackCloseView),
		}
		EventManager.dispatch(AppEvent.VIEW_UI_OPEN, UIID.UserAgreePrivate, { type: 2 }, callbackArgs);
	}

	//销毁
	onDestroy() {

	};

}

