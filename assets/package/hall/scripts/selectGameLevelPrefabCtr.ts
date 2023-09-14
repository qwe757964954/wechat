
import { EventTouch, Label, Node, Prefab, Quat, ScrollView, Sprite, SpriteAtlas, SpriteFrame, Vec3, _decorator, instantiate, tween } from 'cc';
import { GCache } from '../../../cache/GCache';
import { AppEvent } from '../../../config/AppEvent';
import { AppSound } from '../../../config/AppSound';
import { GConstants } from '../../../config/GameConstant';
import { GameRes } from '../../../config/GameRes';
import { UIID } from '../../../config/UIConfig';
import { inf_SpineAniCreate } from '../../../framework/InterfaceDefines';
import { Utils } from '../../../framework/Utils';
import { DelegateComponent } from '../../../framework/layer/DelegateComponent';
import { resLoader } from '../../../framework/loader/ResLoader';
import { EventManager } from '../../../framework/manager/EventManager';
import { BaseComponent } from '../../../framework/vc/BaseComponent';
const { ccclass, property, menu } = _decorator;

/**
 * Name = selectGameLevelPrefabCtr
 * URL = db://assets/package/hall/scripts/selectGameLevelPrefabCtr.ts
 * Time = Wed Sep 07 2022 17:11:23 GMT+0800 (中国标准时间)
 * Author = Tomoe
 *
 * Life: onLoad-->onEnable->start->update->lateUpdate->onDisable->onDestroy
 */

@ccclass('selectGameLevelPrefabCtr')
//方便编辑器识别的菜单项目
@menu('prefab/hall/selectGameLevelPrefabCtr')
export class selectGameLevelPrefabCtr extends BaseComponent {

	//后背景动画根节点
	@property({ tooltip: "后背景动画根节点", type: Node })
	private spineQianNode: Node | null = null;
	//前背景动画根节点
	@property({ tooltip: "前背景动画根节点", type: Node })
	private spineHouNode: Node | null = null;

	//大厅人物动画根节点
	@property({ tooltip: "大厅人物动画根节点", type: Node })
	private spineRoleNode: Node | null = null;

	//蝴蝶动画根节点
	@property({ tooltip: "蝴蝶动画根节点", type: Node })
	private hudieAni: Node | null = null;

	//按钮动画根节点
	@property({ tooltip: "按钮动画根节点", type: Node })
	private btnAni: Node | null = null;

	//选中动画根节点
	@property({ tooltip: "选中动画根节点", type: Node })
	private choiceAni: Node | null = null;

	//选场房间节点
	@property({ tooltip: "选场房间节点", type: Node })
	private roomNode: Node | null = null;

	//选场房间列表节点
	@property({ tooltip: "选场房间列表节点", type: Node })
	private roomListNode: Node | null = null;

	//选场房间列表滚动视图组件
	@property({ tooltip: "选场房间列表滚动视图组件", type: ScrollView })
	private roomListView: ScrollView | null = null;

	//角色名称节点
	@property({ tooltip: "头像根节点", type: Node })
	private roleName: Node | null = null;

	//可吃场灯笼按钮节点
	@property({ tooltip: "可吃场灯笼按钮节点", type: Node })
	private kechiLight: Node | null = null;

	//不可吃场灯笼按钮节点
	@property({ tooltip: "不可吃场灯笼按钮节点", type: Node })
	private bukechiLight: Node | null = null;

	//tip节点
	@property({ tooltip: "tip节点", type: Node })
	private nodeTips: Node | null = null;

	//选场资源图集
	@property({ tooltip: "选场资源图集", type: SpriteAtlas })
	private selectAtlas: SpriteAtlas | null = null;

	//当前出战角色ID
	curRoleID: string = null;

	//当前角色性别
	curRoleSex = null;

	//当前场次配置缓存
	curRoomConf = null;
	//当前房间类型
	curRoomType: string = null;



	/** 场次等级  */
	roomAnteLevel = {
		"初级场": 1,    //"初级",     
		"中级场": 2,   // "中级",     
		"高级场": 3      // "高级",
	}

	roomTab = [
		GConstants.GameTab.bukechi,
		GConstants.GameTab.kechi,
	]
	roomTabID = {
		[GConstants.GameTab.bukechi]: 0,
		[GConstants.GameTab.kechi]: 1,
	}

	//当前游戏ID
	_currowGameID = null
	// //当前选中玩法(tabid 当前写死)
	// _currowLeaveTabID = null;
	//当前选中房间
	_currowLeaveRoomID = null;
	//当前房间列表信息
	_currowLeaveData = null;

	/**初始化添加事件绑定 */
	protected onInitModuleEvent(): void {
		// /**角色数据更新 */
		// this.addModelListener(AppEvent.USER_UPDATE_ROLE_INFO, this.updateRoleShow);
		// /**选场数据有更新 */
		// this.addModelListener(AppEvent.HALL_UPDATE_SELECT_GAME, this.updateSelectData);
		/**玩家数据更新 */
		this.addModelListener(AppEvent.USER_UPDATE_INFO, this.updateRoleShow);
	}

	onLoad() {
		this.getComp()
		this.initData();
		this.initView();
		this.loadGameRes();
	};

	/**加载游戏资源 */
	loadGameRes() {
		// mark
		// resLoader.loadDir("game", "spineAni", (error, data: any) => {
		// 	if (error) {
		// 		console.log(error);
		// 		return;
		// 	}
		// });
	}

	start() {

	};

	getComp() {
		let comp = this.node.getComponent(DelegateComponent)
		if (comp) {
			let param = comp.getParams()
			if (param) {
				this._currowGameID = param["game_id"]
				this.curRoomType = this.roomTab[param["tab_id"]]
			}
		}
	}

	initData() {
		// //请求拉取底注场场次数据
		// EventManager.dispatch(AppEvent.NET_CMD_REQ_ROOM_CATALOGLIST, GConstants.GameRoomType.ROOM_TYPE_ANTE);
		// if (!GCache || !GCache.SelectGame) {
		// 	return
		// }
		// let roomID = GCache.SelectGame.getRoomId(this.curRoomType);
		// let gameType = GCache.SelectGame.getCurRoomInfo();
		// let intoRoomData = GCache.SelectGame.getIntoRoomData();
		// // console.log("获取进入游戏房间的数据", this.curRoomType, roomeID);
		// // console.log("获取当前选择的游戏玩法类型", gameType);
		// // console.log("roomID======>>>>>>", intoRoomData);

		// let curRoomConf = GCache.SelectGame.getRoomId(this.curRoomType);
		if (this._currowGameID != null) {
			//请求游戏房间信息
			EventManager.dispatch(AppEvent.NET_REQ_GAME_LEVEL_ROOM_TAB, this._currowGameID)
			//请求游戏场次人数
			// EventManager.dispatch(AppEvent.NET_REQ_GAME_LEVEL_PERSON_COUNT, this._currowGameID)

		}
	}

	//初始化界面
	initView() {
		this.getPreLoaderRes(GameRes.Prefab_HallTopUI.bundle, GameRes.Prefab_HallTopUI.path, Prefab, (res) => {
			this.node.addChild(res);
		})
		this.setInitAni()
		this.updateRoom();
		this.selectLanternTab()
		this.updateRoleShow();
	}

	/**选场数据有更新 */
	updateSelectData(event, param) {
		console.log("选场数据有更新")
	}

	/**更新玩家展示角色*/
	updateRoleShow(event = null, data?) {
		// mark 临时配置，上角色版本再处理
		let userSex = GCache.User.getUserSex();

		if (Utils.isNotNull(this.curRoleSex) && this.curRoleSex == userSex) {
			return;
		}
		this.curRoleSex == userSex

		this.spineRoleNode.removeAllChildren();
		let param = {
			resConf: GCache.GoodsData.getRoleAnimConfigById(this.curRoleID).path,
			aniName: GCache.GoodsData.getRoleAnimConfigById(this.curRoleID).standby[0],
			parentNode: this.spineRoleNode,
			trackIndex: null,
			isLoop: true,
		}
		EventManager.dispatch(AppEvent.SYS_ANI_PLAY, param)
		this.updateRoleName();
	}

	setInitAni() {
		let bgQianAni: inf_SpineAniCreate = {
			parentNode: this.spineQianNode,
			resConf: GameRes.Spine_Xc_Bg,
			aniName: "qian",
			trackIndex: 0,
			isLoop: true,
		}
		EventManager.dispatch(AppEvent.SYS_ANI_PLAY, bgQianAni);

		let bgAni: inf_SpineAniCreate = {
			parentNode: this.spineHouNode,
			resConf: GameRes.Spine_Xc_Bg,
			aniName: "hou",
			trackIndex: 0,
			isLoop: true,
		}

		EventManager.dispatch(AppEvent.SYS_ANI_PLAY, bgAni);

		let btnAni: inf_SpineAniCreate = {
			parentNode: this.btnAni,
			resConf: GameRes.Spine_Xc_Btn,
			aniName: "btn",
			trackIndex: 0,
			isLoop: true,
		}

		EventManager.dispatch(AppEvent.SYS_ANI_PLAY, btnAni);

		let hudieAni: inf_SpineAniCreate = {
			parentNode: this.hudieAni,
			resConf: GameRes.Spine_Xc_Hudie,
			aniName: "hudie_r",//"hudie_l", "hudie_r"
			trackIndex: 0,
			isLoop: true,
			toPos: new Vec3(233, 239, 0)
		}

		EventManager.dispatch(AppEvent.SYS_ANI_PLAY, hudieAni);

	}

	/**刷新角色名称 */
	updateRoleName() {
		let res = GCache.GoodsData.getRoleAnimConfigById(this.curRoleID).name
		this.getPreLoaderRes(res.bundle, res.path, SpriteFrame, (sprite) => {
			this.roleName.getComponent(Sprite).spriteFrame = sprite;
			this.roleName.getComponent(Sprite).sizeMode = 2;
		})
	}

	//刷新房间显示
	updateRoom() {
		this.roomListNode.removeAllChildren();
		let num: number = 3;
		// if (num > 3) {
		// 	this.roomListView.enabled = true
		// } else {
		// 	this.roomListView.enabled = false
		// }
		for (let i = 0; i < num; i++) {
			let itemNode = instantiate(this.roomNode);
			this.roomListNode.addChild(itemNode);
		}
	}

	/**玩法标签 */
	selectLanternTab() {
		this.roomListNode.removeAllChildren();
		this.nodeTips.active = false;
		if (this.curRoomType == GConstants.GameTab.kechi) {
			//可吃玩法
			this.kechiLight.active = true;
			this.bukechiLight.active = false;
			this.showLevlelList();
		} else if (this.curRoomType == GConstants.GameTab.bukechi) {
			//不可吃玩法
			this.kechiLight.active = false;
			this.bukechiLight.active = true;
			this.showLevlelList();
		}
	}

	showLevlelList() {
		let currowLeaveTabID = this.roomTabID[this.curRoomType];
		if (Utils.isNull(currowLeaveTabID)) {
			return;
		}

		this._currowLeaveData = GCache.SelectGame.getGameLevelTabInfo(this._currowGameID, currowLeaveTabID)
		let levelData = GCache.SelectGame.getGameLevelRoomSortList(this._currowGameID, currowLeaveTabID)
		if (Utils.table_isEmpty(levelData)) {
			return;
		}

		console.log("显示不洗牌场次列表", levelData)
		let currentMaxIndex = this.hightLightGameLevel(levelData)
		console.log("显示不洗牌场次高亮", currentMaxIndex)
		for (let i = 0; i < levelData.length; i++) {
			let value = levelData[i];
			if (i == currentMaxIndex) {
				this.createCommonItem(this.curRoomType, value, true);
			} else {
				this.createCommonItem(this.curRoomType, value);
			}
		}
	}


	/** 通用:创建房间条目 */
	createCommonItem(play, itemData, isHightLight = false) {
		// room:ante:level 该场次的等级，初级，中级，高级，精英，大师
		let layout_item = instantiate(this.roomNode);
		let img_bg = layout_item.getChildByName("img_item");
		let icon = layout_item.getChildByName("img_icon");
		this.setSpriteFrame(img_bg, itemData.icon);
		let bottomScore = layout_item.getChildByName("label_score");
		let goinScore = layout_item.getChildByName("label_into");
		bottomScore.getComponent(Label).string = String(itemData.base_chip || 0);
		let lowScore = Utils.string_moneyToShortNumber(itemData.min_money, true)
		let hightScore = Utils.string_moneyToShortNumber(itemData.max_money, true)
		// //小于等于0代表无上限
		if (itemData.max_money <= 0) {
			goinScore.getComponent(Label).string = Utils.string_formatByLua("准入%s以上", lowScore)
		}
		else {
			goinScore.getComponent(Label).string = Utils.string_formatByLua("准入%s-%s", lowScore, hightScore)
		}

		if (isHightLight) {
			let img_circle = layout_item.getChildByName("img_circle");
			tween(img_circle)
				.by(30, { rotation: new Quat(0, 0, 0, 0) })
				.call(() => {
				})
				.start()
			this.selectAni(layout_item);
		}

		icon.getComponent(Sprite).spriteFrame = this.selectAtlas.spriteFrames[`selectField/icon_${this.roomAnteLevel[itemData.levelname]}`]
		layout_item["data"] = itemData;
		layout_item.active = true;
		this.roomListNode.addChild(layout_item);
	}

	hightLightGameLevel(data) {
		let currentMaxIndex = 0;
		let currentMin = GCache.User.getUserMoneyByID(0)
		for (let i = 0; i < data.length; i++) {
			let v = data[i];
			let lowLimit = v.min_money || 0;
			let different = GCache.User.getUserMoneyByID(0) - lowLimit;
			if (different >= 0 && different <= currentMin) {
				currentMaxIndex = i;
				currentMin = different;
			}
		}
		return currentMaxIndex;
	}

	/**设置远端图片 */
	setSpriteFrame(node, path) {
		if (!path) {
			return
		}
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

	selectAni(node) {
		node.getChildByName("img_select").active = true;
		let spineNode = node.getChildByName("spineNode")
		if (spineNode) {
			let chooseAni: inf_SpineAniCreate = {
				parentNode: spineNode,
				resConf: GameRes.Spine_Xc_Choice,
				aniName: "XC_xuanzhong_light",
				trackIndex: 0,
				isLoop: true,
				toPos: null,
			}
			EventManager.dispatch(AppEvent.SYS_ANI_PLAY, chooseAni);

			let chooseLightAni: inf_SpineAniCreate = {
				parentNode: spineNode,
				resConf: GameRes.Spine_Xc_Choice,
				aniName: "XC_xuanzhong_light2",
				trackIndex: 0,
				isLoop: true,
				toPos: null,
			}
			EventManager.dispatch(AppEvent.SYS_ANI_PLAY, chooseLightAni);
		}
	}

	//点击房间
	onClickLevelRoom(event: EventTouch) {
		EventManager.dispatch(AppEvent.SYS_PLAY_EFFECT, AppSound.CommClick);
		// EventManager.dispatch(AppEvent.REPORT_CLIENT_CLICK, { eventID: ReportConfig.selectGame_6 });

		let node = event.target;
		for (let child of this.roomListNode.children) {
			child.getChildByName("img_select").active = false;
			child.getChildByName("spineNode").removeAllChildren();
		}
		this.selectAni(node);

		let itemData = node["data"];

		GCache.SelectGame.checkIntoRoom(this._currowGameID, itemData);
	}

	//点击返回大厅按钮
	onReturnClick(event: EventTouch) {
		EventManager.dispatch(AppEvent.SYS_PLAY_EFFECT, AppSound.CommClick);
		// EventManager.dispatch(AppEvent.REPORT_CLIENT_CLICK, { eventID: ReportConfig.selectGame_1 });
		// GCache.SelectGame.saveChooseData(null);
		this.node.destroy();
	}

	//点击角色按钮
	onRoleClick(event: EventTouch) {
		// EventManager.dispatch(AppEvent.SYS_PLAY_EFFECT, AppSound.CommClick);
		// EventManager.dispatch(AppEvent.VIEW_UI_OPEN, UIID.RoleScenePrefab, {}, {});
	}

	//点击切换可吃按钮
	onClickKeChi(event: EventTouch) {
		console.log("onClickKeChi", this.curRoomType)
		if (this.curRoomType == GConstants.GameTab.kechi) {
			return;
		}
		EventManager.dispatch(AppEvent.SYS_PLAY_EFFECT, AppSound.CommClick);
		//EventManager.dispatch(AppEvent.REPORT_CLIENT_CLICK, { eventID: ReportConfig.selectGame_7 });
		this.curRoomType = GConstants.GameTab.kechi;
		this.selectLanternTab()
	}

	//点击切换不可吃按钮
	onClickBuKeChi(event: EventTouch) {
		console.log("onClickKeChi", this.curRoomType)
		if (this.curRoomType == GConstants.GameTab.bukechi) {
			return;
		}
		EventManager.dispatch(AppEvent.SYS_PLAY_EFFECT, AppSound.CommClick);
		//EventManager.dispatch(AppEvent.REPORT_CLIENT_CLICK, { eventID: ReportConfig.selectGame_7 });
		this.curRoomType = GConstants.GameTab.bukechi;
		this.selectLanternTab()
	}


	//快速开始
	onClickQuickStart(event: EventTouch) {
		EventManager.dispatch(AppEvent.SYS_PLAY_EFFECT, AppSound.CommClick);

		let currowLeaveTabID = this.roomTabID[this.curRoomType];
		if (Utils.isNull(currowLeaveTabID)) {
			return;
		}
		GCache.SelectGame.checkQuickGame(this._currowGameID, currowLeaveTabID);
	}
	/** 点击了规则按钮 */
	onClickBtnRule(event: EventTouch) {
		EventManager.dispatch(AppEvent.SYS_PLAY_EFFECT, AppSound.CommClick);
		EventManager.dispatch(AppEvent.VIEW_UI_OPEN, UIID.GameRuleDialog, null, null, null, true)
	}

	//销毁
	onDestroy() {
		// //通知:请求推荐弹窗
		// EventManager.dispatch(AppEvent.RECOMMEND_POP_GET, GConstants.PopupPos.POS_BACK_HALL)
	};

}

