
import { EventTouch, Label, Node, Toggle, _decorator } from 'cc';
import { GCache } from '../../../cache/GCache';
import { AppEvent } from '../../../config/AppEvent';
import { AppSound } from '../../../config/AppSound';
import { ClientInfo } from '../../../config/GameConfig';
import { StoreKey } from '../../../config/GameConstant';
import { ReportConfig } from '../../../config/ReportConfig';
import { UIID } from '../../../config/UIConfig';
import { LocalStorage } from '../../../framework/LocalStorage';
import { Utils } from '../../../framework/Utils';
import { AudioManager } from '../../../framework/manager/AudioManager';
import { EventManager } from '../../../framework/manager/EventManager';
import { BaseComponent } from '../../../framework/vc/BaseComponent';
import { Platform } from '../../../platform/Platform';
const { ccclass, property, menu } = _decorator;

/**
 * Name = settingPrefabCtr
 * URL = db://assets/package/hall/scripts/settingPrefabCtr.ts
 * Time = Thu Sep 08 2022 10:03:30 GMT+0800 (中国标准时间)
 * Author = Tomoe
 *
 * Life: onLoad-->onEnable->start->update->lateUpdate->onDisable->onDestroy
 */

@ccclass('settingPrefabCtr')
//方便编辑器识别的菜单项目
@menu('prefab/hall/settingPrefabCtr')
export class settingPrefabCtr extends BaseComponent {

	/**账号 */
	@property({ tooltip: "账号", type: Label })
	private accountLabel: Label | null = null;

	/**游戏设置按钮未选中背景*/
	@property({ tooltip: "游戏设置按钮未选中背景", type: Node })
	private setUnselect: Node | null = null;

	/** 版本信息按钮未选中背景 */
	@property({ tooltip: "版本信息按钮未选中背景", type: Node })
	private versionUnselect: Node | null = null;

	/** 设置面板 */
	@property({ tooltip: "设置面板", type: Node })
	private settingView: Node | null = null;

	/** 版本信息面板 */
	@property({ tooltip: "版本信息面板", type: Node })
	private versionView: Node | null = null;

	/** 当前版本信息*/
	@property({ tooltip: "当前版本信息", type: Label })
	private currentVersion: Label | null = null;

	/**最新版本信息 */
	@property({ tooltip: "最新版本信息", type: Label })
	private lastVersion: Label | null = null;

	/** 音效开关按钮*/
	@property({ tooltip: "音效开关按钮", type: Node })
	private effectBtn: Node | null = null;

	/**音乐开关按钮 */
	@property({ tooltip: "音乐开关按钮", type: Node })
	private musicBtn: Node | null = null;

	/** 震动开关按钮 */
	@property({ tooltip: "震动开关按钮", type: Node })
	private shockBtn: Node | null = null;

	/** 音效开关*/
	isEffect: boolean = true;
	/**音乐开关 */
	isMusic: boolean = true;
	/** 震动开关 */
	isShock: number = 1; //开启 1 开启 2 关闭

	onLoad() {
		this.initView()
	};


	start() {

	};

	initView() {
		this.isEffect = AudioManager.getInstance().getSwitchEffect();
		this.isMusic = AudioManager.getInstance().getSwitchMusic();
		let shock = LocalStorage.get(StoreKey.SYS_Shock);
		shock = Utils.number_valueOf(shock);
		shock = shock > 1 ? 2 : 1;
		this.isShock = shock;
		console.log("StoreKey.SYS_Shock:初始化:", this.isShock)
		this.showSetView()
		this.showVersion();
		this.onSetClick()
	}

	/**
	 * 显示版本信息
	 */
	showVersion() {
		this.currentVersion.string = `当前版本:  v${ClientInfo.AppVer}(${String(ClientInfo.HallVer)})`; //当前版本
		this.lastVersion.node.active = false
	}

	/**
	 * 显示设置界面
	 */
	showSetView() {
		//渲染用戶
		this.accountLabel.string = String(GCache.User.getUserMid());
		console.log("StoreKey.SYS_Shock:渲染设置页面:", this.isShock)

		let shockIsCheck = this.isShock == 1 ? true : false;
		setTimeout(() => {
			this.effectBtn.getComponent(Toggle).isChecked = this.isEffect;
			this.musicBtn.getComponent(Toggle).isChecked = this.isMusic;
			this.shockBtn.getComponent(Toggle).isChecked = shockIsCheck;
		}, 0)
	}



	/**
	 * 保存设置信息
	 */
	saveSetting() {
		AudioManager.getInstance().setSwitchEffect(this.isEffect);
		AudioManager.getInstance().setSwitchMusic(this.isMusic);
		AudioManager.getInstance().save();
		console.log("StoreKey.SYS_Shock:savesetting:", this.isShock)
		LocalStorage.set(StoreKey.SYS_Shock, this.isShock);
	}

	/**
	 * 点击游戏设置按钮
	 * @param event 
	 */
	onSetClick(event: EventTouch = null) {
		console.log("点击事件响应===>>>>游戏设置")
		if (event) {
			EventManager.dispatch(AppEvent.SYS_PLAY_EFFECT, AppSound.CommClick);
		}
		EventManager.dispatch(AppEvent.REPORT_CLIENT_CLICK, { eventID: ReportConfig.setting_1 });
		this.setUnselect.active = false
		this.versionUnselect.active = true;
		this.settingView.active = true;
		this.versionView.active = false;
	}

	/**
	 * 点击版本信息按钮
	 * @param event 
	 */
	onVersionClick(event: EventTouch) {
		console.log("点击事件响应===>>>>版本信息")
		EventManager.dispatch(AppEvent.SYS_PLAY_EFFECT, AppSound.CommClick);
		EventManager.dispatch(AppEvent.REPORT_CLIENT_CLICK, { eventID: ReportConfig.setting_2 });
		this.setUnselect.active = true
		this.versionUnselect.active = false;
		this.settingView.active = false;
		this.versionView.active = true;
	}


	/**
	 * 点击音效按钮
	 * @param event 
	 */
	onEffctClick(event) {
		EventManager.dispatch(AppEvent.SYS_PLAY_EFFECT, AppSound.CommClick);
		let node = event.target;
		let isClose = node.getChildByName("Checkmark").active;
		if (isClose == true) {
			console.log("点击事件响应===>>>>音效-关")
			this.isEffect = false;
		} else {
			console.log("点击事件响应===>>>>音效-开")
			this.isEffect = true;
		}
		this.saveSetting()
	}


	/**
	 * 点击音乐按钮
	 * @param event 
	 */
	onMusicClick(event) {
		EventManager.dispatch(AppEvent.SYS_PLAY_EFFECT, AppSound.CommClick);
		let node = event.target;
		let isClose = node.getChildByName("Checkmark").active;
		if (isClose == true) {
			console.log("点击事件响应===>>>>音乐-关")
			this.isMusic = false;
		} else {
			console.log("点击事件响应===>>>>音乐-开")
			this.isMusic = true;
		}
		this.saveSetting()
	}

	/**
	 * 点击震动按钮
	 * @param event 
	 */
	onShockClick(event) {
		EventManager.dispatch(AppEvent.SYS_PLAY_EFFECT, AppSound.CommClick);
		let node = event.target;
		let isClose = node.getChildByName("Checkmark").active;
		if (isClose == true) {
			console.log("点击事件响应===>>>>震动-关")
			this.isShock = 2;
		} else {
			console.log("点击事件响应===>>>>震动-开")
			this.isShock = 1;
		}
		this.saveSetting()
	}


	/**
	 * 点击玩法规则
	 * @param event 
	 */
	onRuleClick(event) {
		console.log("点击事件响应===>>>>玩法规则")
		EventManager.dispatch(AppEvent.SYS_PLAY_EFFECT, AppSound.CommClick);
		EventManager.dispatch(AppEvent.VIEW_UI_OPEN, UIID.GameRuleDialog, null, null, null, true)
		EventManager.dispatch(AppEvent.REPORT_CLIENT_CLICK, { eventID: ReportConfig.setting_7 });
	}

	/**
	 * 点击隐私政策
	 * @param event 
	 */
	onPrivateClick(event) {
		console.log("点击事件响应===>>>>隐私政策")
		EventManager.dispatch(AppEvent.SYS_PLAY_EFFECT, AppSound.CommClick);
		EventManager.dispatch(AppEvent.VIEW_UI_OPEN, UIID.UserAgreePrivate, { type: 2, isHaveTag: false });
		EventManager.dispatch(AppEvent.REPORT_CLIENT_CLICK, { eventID: ReportConfig.setting_4 });
	}


	/**
	 * 点击服务协议
	 * @param event 
	 */
	onServiceClick(event) {
		console.log("点击事件响应===>>>>服务协议")
		EventManager.dispatch(AppEvent.SYS_PLAY_EFFECT, AppSound.CommClick);
		EventManager.dispatch(AppEvent.VIEW_UI_OPEN, UIID.UserAgreePrivate, { type: 1, isHaveTag: false });
		EventManager.dispatch(AppEvent.REPORT_CLIENT_CLICK, { eventID: ReportConfig.setting_5 });
	}


	/**
	 * 点击货币声明
	 * @param event 
	 */
	onMoneyClick(event) {
		console.log("点击事件响应===>>>>货币声明")
		EventManager.dispatch(AppEvent.SYS_PLAY_EFFECT, AppSound.CommClick);
		EventManager.dispatch(AppEvent.VIEW_UI_OPEN, UIID.PictureDialog, "货币声明")
		EventManager.dispatch(AppEvent.REPORT_CLIENT_CLICK, { eventID: ReportConfig.setting_3 });
	}


	/**
	 * 点击意见反馈
	 * @param event 
	 */
	onOpinionClick(event) {
		console.log("点击事件响应===>>>>意见反馈")
		EventManager.dispatch(AppEvent.SYS_PLAY_EFFECT, AppSound.CommClick);
		EventManager.dispatch(AppEvent.REPORT_CLIENT_CLICK, { eventID: ReportConfig.setting_6 });
		Platform.openCustomerServiceConversation();
	}


	/**
	 * 点击关闭界面
	 * @param event 
	 */
	onCloseClick(event: EventTouch) {
		console.log("点击事件响应===>>>>关闭")
		EventManager.dispatch(AppEvent.SYS_PLAY_EFFECT, AppSound.CommClick);
		this.node.destroy();
	}


	//销毁
	onDestroy() {

	};

}

