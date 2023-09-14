
import { EditBox, EventTouch, Label, Node, ScrollView, ToggleContainer, _decorator } from 'cc';
import { GCache } from '../../cache/GCache';
import { AppEvent } from '../../config/AppEvent';
import { ClientInfo, GameConfig, GameNetType } from '../../config/GameConfig';
import { Platform } from '../../platform/Platform';
import { GSocket } from '../../proj/gnet/GSocket';
import { Utils } from '../Utils';
import { EventManager } from '../manager/EventManager';
import { Network } from '../network/NetState';
import { BaseComponent } from './BaseComponent';
const { ccclass, property } = _decorator;

/**
 * Name = DebugComponent
 * URL = db://assets/framework/vc/DebugComponent.ts
 * Time = Sat May 06 2023 11:58:36 GMT+0800 (中国标准时间)
 * Author = xueya
 *
 * Life: onLoad-->onEnable->start->update->lateUpdate->onDisable->onDestroy
 */

@ccclass('DebugComponent')
export class DebugComponent extends BaseComponent {
	//debug界面
	@property({ tooltip: "debug界面", type: Node })
	private nodeDebugView: Node | null = null;

	//debug显示隐藏开关
	@property({ tooltip: "debug显示隐藏开关", type: Node })
	private nodeDebugSwitch: Node | null = null;

	//操作按钮的滚动容器
	@property({ tooltip: "操作按钮的滚动容器", type: ScrollView })
	private scrollowList: ScrollView | null = null;

    //光照界面
    @property({ tooltip: "光照界面", type: Node })
	private nodeLight: Node | null = null;

	//系统信息显示标签
	@property({ tooltip: "系统信息显示标签", type: Label })
	private sysInfoLabel: Label | null = null;
	//更新信息显示标签
	@property({ tooltip: "更新信息显示标签", type: Label })
	private updateInfoLabel: Label | null = null;
	//选服节点
	@property({ tooltip: "选服节点", type: Node })
	private nodeChooseServer: Node | null = null;
	//选服单选列表节点
	@property({ tooltip: "选服单选列表节点", type: ToggleContainer })
	private toggleGroup: ToggleContainer | null = null;
	/** 自动关闭界面句柄 */
	private _handlerAutoCloseView = null;

    
	/** 环境标识 */
	private _envTxt = {
		[GameNetType.NET_TEST]: "dev",
		[GameNetType.NET_DEV]: "pre",
		[GameNetType.NET_ONLINE]: "prod",
	}
	protected onInitModuleEvent() {
		//登录界面改变
		this.addModelListener(AppEvent.LOGIN_GOTO_SHOW, this.updateAllInfo);
		//登录界面传参
		this.addModelListener(AppEvent.LOGIN_SEND_SHOW, this.updateAllInfo);
		//系统信息刷新
		this.addModelListener(AppEvent.SYS_INFO_REFRESH, this.updateAllInfo);
		//登录状态改变
		this.addModelListener(AppEvent.LOGIN_STATE_CHANGE, this.updateAllInfo);
		//网络状态改变
		this.addModelListener(AppEvent.SYS_NET_CHANGE_STATE, this.updateLabelInfo);
		//网络名称改变
		this.addModelListener(AppEvent.SYS_NET_CHANGE_NAME, this.updateLabelInfo);
		// //用户注销了账号
		// this.addModelListener(AppEvent.NET_CMD_RESP_SET_USERINFO, this.respSetUserInfo);
        //获取光照数据
		this.addModelListener(AppEvent.VIEW_GET_LIGHT_DATA_RESP, this.updateLightInfo);
	}

	onLoad() {
		this.initView();
	};

	start() {

	};
	initView() {
		this.nodeDebugView.active = true;
		this.nodeDebugSwitch.active = true;
		this.scrollowList.node.active = false;
        this.nodeLight.active = false;
		this.updateAllInfoByInit();
		this.sysInfoLabel.node.active = true;
		this.updateInfoLabel.node.active = true;
		this.nodeChooseServer.active = false;
		this.toggleGroup.node.active = true;
	}
	/** 点击了debug显/隐开关 */
	onClickShowOrHideSwitch(event: EventTouch = null) {
		let willState = !this.scrollowList.node.active;;
		this.scrollowList.node.active = !this.scrollowList.node.active;
		if (willState == true) {
			this.nodeChooseServer.active = false;
			this.startAutoHideScrollow();
			this.scrollowList.node.active = willState;
			this.scrollowList.scrollToTop(0, false);
		} else {
			this.stopScheduler(this._handlerAutoCloseView);
			this._handlerAutoCloseView = null;
			this.scrollowList.node.active = willState;
		}

        this.nodeLight.active = willState;
        if (willState) {
            EventManager.dispatch(AppEvent.VIEW_GET_LIGHT_DATA);
        }
	}

	/** 初始化服务器时 */
	updateAllInfoByInit() {
		this.updateBaseLabelInfo(null, true);
		this.updateLabelInfo();
	}
	/** 所有信息刷新 */
	updateAllInfo() {
		this.updateBaseLabelInfo();
		this.updateLabelInfo();
	}
	/** 请求设置用户信息返回 */
	respSetUserInfo(event, receiveData, reqData) {
		if (receiveData.code != 0) {
			EventManager.dispatch(AppEvent.SYS_TOAST_TIP, { content: receiveData["msg"] });
			return;
		}
		if (reqData && reqData["logout_status"] == 1) {
			this.print("请求了注销账号，注销成功", reqData)
			this.onClickExitLogin(null, true);
		}
	}

	/** 更新基本信息 */
	updateBaseLabelInfo(event = null, isInitServer = null) {
		let title = "[-----BASE-----]";
		let server = "服务器:";
		if (isInitServer !== true) {
			server = server + GameConfig.instance.AppUrlConf.Name;
		}
		let hallver = "大厅版本:" + ClientInfo.HallVer;
		let appver = "应用版本:" + ClientInfo.AppVer;
		let payEnv = "支付方式:" + (ClientInfo.WX_PayEnv == 0 ? "正式" : "沙箱");

		this.sysInfoLabel.string = title + "\n" + server + "\n" + hallver + "\n" + appver + "\n" + payEnv;
	}
	/** 更新标签文本显示 */
	updateLabelInfo(event = null) {
		let title = "[----UPDATE----]";
		let netName = "网络名称:" + Network.instance.name;
		let netState = "网络状态:" + Network.instance.state;
		let socketState = "Socket:" + (GSocket.instance.isConnected() == true ? "已连接" : "未连接");
		let loginState = "登录状态:" + (this.getLoginState() == true ? "已登录" : "未登录");

		this.updateInfoLabel.string = title + "\n" + netName + "\n" + netState + "\n" + socketState + "\n" + loginState;
	}
	/** 获取玩家登录状态 */
	getLoginState(): boolean {
		if (GCache && GCache.User) {
			return GCache.User.isLoginSuccesed();
		}

		return false;
	}
	/** 更新单选 */
	updateToggleGroup() {
		// this.toggleGroup.toggleItems[0]["CurrowServer"] = GameNetType.NET_TEST;
		// this.toggleGroup.toggleItems[1]["CurrowServer"] = GameNetType.NET_DEV;
		// this.toggleGroup.toggleItems[2]["CurrowServer"] = GameNetType.NET_ONLINE;
		if (ClientInfo.CurrowServer == GameNetType.NET_TEST) {
			this.toggleGroup.toggleItems[0].isChecked = true;
		} else if (ClientInfo.CurrowServer == GameNetType.NET_DEV) {
			this.toggleGroup.toggleItems[1].isChecked = true;
		} else if (ClientInfo.CurrowServer == GameNetType.NET_ONLINE) {
			this.toggleGroup.toggleItems[2].isChecked = true;
		}
	}
	/** 开启自动隐藏滚动容器 */
	startAutoHideScrollow() {
		this.stopScheduler(this._handlerAutoCloseView);
		this._handlerAutoCloseView = this.addScheduler(28, () => {
			this.onClickShowOrHideSwitch();
		})
	}
	/** 退出登录 */
	onClickExitLogin(event: EventTouch = null, isNotAutoShow = false) {
		this.print("---跳转到登录---")
		GCache.User.cleanLastlocalLoginToken();
		GCache.init();
		GSocket.instance.closeConnect();
		//清除推荐弹窗队列
		EventManager.dispatch(AppEvent.RECOMMEND_POP_CLEAN_QUENE);
		EventManager.dispatch(AppEvent.LOGIN_GOTO_SHOW, { state: "first_login" });
		if (isNotAutoShow != true) {
			this.onClickShowOrHideSwitch();
		}
	}
	/** 复制OpenID */
	onClickCopyOpenID(event: EventTouch = null) {
		this.print("---复制OpenID---")
		Platform.copyClipboard(Platform.PLogInfo.openId);
	}

	/** 切换服务器 */
	onClickChangeServer(event: EventTouch = null) {
		this.nodeChooseServer.active = !this.nodeChooseServer.active;

		if (this.nodeChooseServer.active == true) {
			this.updateToggleGroup();
			this.startAutoHideScrollow();
		}
	}
	/** 点击了单选服 */
	onClickToggle(event: EventTouch = null) {
		let currowServer = ClientInfo.CurrowServer;
		if (this.toggleGroup.toggleItems[0].isChecked) {
			currowServer = GameNetType.NET_TEST;
		} else if (this.toggleGroup.toggleItems[1].isChecked) {
			currowServer = GameNetType.NET_DEV;
		} else if (this.toggleGroup.toggleItems[2].isChecked) {
			currowServer = GameNetType.NET_ONLINE;
		}
		if (ClientInfo.CurrowServer == currowServer) {
			return;
		}
		this.addSchedulerOnce(0.5, () => {
			GCache.init();
			GSocket.instance.closeConnect();
			ClientInfo.CurrowServer = currowServer;
			this.print(`切换服务器--->即将切换到：${GameConfig.instance.AppUrlConf.Name}`)
			//清除推荐弹窗队列
			EventManager.dispatch(AppEvent.RECOMMEND_POP_CLEAN_QUENE);
			EventManager.dispatch(AppEvent.LOGIN_GOTO_SHOW);
			this.onClickShowOrHideSwitch();
		})

	}
	/** 注销账号 */
	onClickLogOut(event: EventTouch = null) {
		this.print(`注销账号：${GameConfig.instance.AppUrlConf.Name}`)
		// if (GCache && GCache.User) {

		// 	let str = GameConfig.instance.AppUrlConf.H5 + "?uid" + GCache.User.getUserMid() + "&env=" + this._envTxt[ClientInfo.CurrowServer];
		// 	let param = {
		// 		title: "注销账号",
		// 		alignLeftTop: false,
		// 		notshowClose: true,
		// 		txt_desc: `即将注销帐号 UID:${GCache.User.getUserMid()} \n是否确定？`,         //正文内容
		// 		buttonsMap: [
		// 			{
		// 				click: () => {
		// 					Platform.copyClipboard(str);
		// 					console.log("openUrl:", str);
		// 					// EventManager.dispatch(AppEvent.NET_CMD_REQ_SET_USERINFO, { logout_status: 1 })
		// 				}
		// 			},
		// 			{}
		// 		]

		// 	}
		// 	EventManager.dispatch(AppEvent.VIEW_UI_OPEN, UIID.PopWindow, param);

		// 	this.onClickShowOrHideSwitch();
		// } else {
		// 	this.print("注销账号失败，尚未登录成功！")
		// }

	}

	/** 显示或隐藏Debug */
	onClickShowOrHideDebug(event: EventTouch = null) {
		this.nodeDebugView.active = !this.nodeDebugView.active;
	}

    updateLightInfo(event: string, data: any) {
        let lightLumList = [{
                text: "环境光强度",
                value: data.ambientLum,
            },
            {
                text: "球面光强度",
                value: data.sphereLum,
            },
            {
                text: "平行光强度",
                value: data.directionalLum,
            },
        ]

        lightLumList.forEach((value, index, array) => {
            let node = this.nodeLight.getChildByName("EditBox"+index);
            let editBox = node.getComponent(EditBox)
            node.getChildByName("Label").getComponent(Label).string = value.text;
            
            editBox.editingDidEnded[0].customEventData = String(index);
            editBox.string = value.value;
        });
    }

    onEditBoxDidEnded(event: EventTouch, customEventData: string) {
        let index = Utils.number_valueOf(customEventData);
        let node = this.nodeLight.getChildByName("EditBox"+index);
        let editBox = node.getComponent(EditBox)
        let value = Utils.number_valueOf(editBox.string);
        let lightLumList = ["ambientLum", "sphereLum", "directionalLum"];
        EventManager.dispatch(AppEvent.VIEW_SET_LIGHT_DATA, {[lightLumList[index]]: value})
    }



	//销毁
	onDestroy() {

	};

}

