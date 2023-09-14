
import { Label, Node, ProgressBar, Vec3, _decorator } from 'cc';
import { GCache } from '../../cache/GCache';
import { AppEvent } from '../../config/AppEvent';
import { AppSound } from '../../config/AppSound';
import { GConstants } from '../../config/GameConstant';
import { EventManager } from '../manager/EventManager';
import { BaseComponent } from './BaseComponent';
const { ccclass, property } = _decorator;

/**
 * Name = PkgLoadComponent
 * URL = db://assets/framework/vc/PkgLoadComponent.ts
 * Time = Thu Feb 02 2023 17:50:10 GMT+0800 (中国标准时间)
 * Author = xueya
 *
 * Life: onLoad-->onEnable->start->update->lateUpdate->onDisable->onDestroy
 */

@ccclass('PkgLoadComponent')
export class PkgLoadComponent extends BaseComponent {

	//一类加载父节点
	@property({ tooltip: "一类加载父节点", type: Node })
	normalParentNode: Node = null!;

	//二类加载父节点
	@property({ tooltip: "二类加载父节点", type: Node })
	gameParentNode: Node = null!;

	/**********一类加载************ */
	//进度条组件
	@property({ tooltip: "进度条组件", type: ProgressBar })
	normalProgressNode: ProgressBar = null!;

	//进度条Bar节点
	@property({ tooltip: "进度条Bar节点", type: Node })
	normalProgressBarNode: Node = null!;

	//进度条动画节点
	@property({ tooltip: "进度条动画节点", type: Node })
	normalProgressAniNode: Node = null!;

	@property({ tooltip: "进度条动画结束节点", type: Node })
	normalAniEndNode: Node = null!;

	//提示文本节点
	@property({ tooltip: "提示文本Label", type: Label })
	normalTipLabel: Label = null!;

	/**********二类加载************ */
	//进度条组件
	@property({ tooltip: "进度条组件", type: ProgressBar })
	gameProgressNode: ProgressBar = null!;

	//进度条Bar节点
	@property({ tooltip: "进度条Bar节点", type: Node })
	gameProgressBarNode: Node = null!;

	//进度条动画节点
	@property({ tooltip: "进度条动画节点", type: Node })
	gameProgressAniNode: Node = null!;

	@property({ tooltip: "进度条动画结束节点", type: Node })
	gameAniEndNode: Node = null!;

	//提示文本节点
	@property({ tooltip: "提示文本节点", type: Label })
	gameTipLabel: Label = null!;

	//提示进度文本Label
	@property({ tooltip: "提示进度文本Label", type: Label })
	gameTipProgress: Label = null!;

	/** 动画节点初始位置 */
	private _initAniPosNormal: Vec3 = null;
	private _initAniPosGame: Vec3 = null;
	/** 总长度 */
	private _allWidthNormal: number = 0;
	private _allWidthGame: number = 0;
	/** 当前的选择 */
	private _chooseType: GConstants.PkgLoaderTaskList = null;

	/** 是否可点击取消 */
	private _isCanClickCancle: boolean = false;
	/** 是否已加载完毕 */
	private _isLoad: boolean = false;
	/** 当前正在加载的task */
	private _currowLoadTask = null;
	/** 位置是否初始化 */
	private _isInitPos = false;

	protected onInitModuleEvent() {
		/** 更新加载的回调 */
		this.addModelListener(AppEvent.SYS_PACKAGE_LOAD_SHOW, this.updateLoading);
		/** 取消任务的回调 */
		this.addModelListener(AppEvent.SYS_PACKAGE_LOAD_TASK_CANCLE_SURE, this.onCallbackCancle);
	}

	onLoad() {
		this._isLoad == true;
		this.node.active = false;

		this.initUI(this._chooseType);
	};
	//初始化设置位置
	initSetPos() {
		if (this._isInitPos == true) {
			return;
		}
		this._initAniPosNormal = new Vec3(this.normalProgressAniNode.position.x, this.normalProgressAniNode.position.y, this.normalProgressAniNode.position.z)
		this._allWidthNormal = (this.normalAniEndNode.position.x - this.normalProgressAniNode.position.x);
		this._initAniPosGame = new Vec3(this.gameProgressAniNode.position.x, this.gameProgressAniNode.position.y, this.gameProgressAniNode.position.z)
		this._allWidthGame = (this.gameAniEndNode.position.x - this.gameProgressAniNode.position.x);

		this._isInitPos = true;
	}

	/** 外部传递参数 */
	public setTaskID(taskID: GConstants.PkgLoaderTaskList) {
		this._chooseType = taskID;
		if (this._isLoad) {
			this.initUI(taskID);
		}
	}
	/** 初始化UI */
	initUI(taskID = null) {
		this.gameParentNode.children.forEach((child, index) => {
			if (child.name != "btnCancle") {
				child.active = true;
			} else {
				child.active = false;
			}
		});
		this.normalParentNode.children.forEach((child, index) => {
			child.active = true;
		});
		if (taskID != null) {
			this.checkIsReconn(taskID);
			this.gameParentNode.active = (taskID == GConstants.PkgLoaderTaskList.Game);
			this.normalParentNode.active = (taskID != GConstants.PkgLoaderTaskList.Game);
		} else {
			this.gameParentNode.active = false;
			this.normalParentNode.active = false;
		}
	}
	start() {

	};

	//初始化加载
	initLoading(taskID) {
		this.initSetPos();
		this._currowLoadTask = taskID;
		if (taskID == GConstants.PkgLoaderTaskList.Game) {
			this.checkIsReconn(taskID);
			this.gameProgressNode.progress = 0;
			this.gameProgressAniNode.position = new Vec3(this._initAniPosGame.x, this._initAniPosGame.y, this._initAniPosGame.z);
		} else {
			this.normalProgressNode.progress = 0;
			this.normalProgressAniNode.position = new Vec3(this._initAniPosNormal.x, this._initAniPosNormal.y, this._initAniPosNormal.z);
		}
		this.initUI(taskID)
		this.node.active = true;
		//关闭正在加载中
		EventManager.dispatch(AppEvent.SYS_CLOSE_NETLOADING);
	}
	/** 检测重连游戏去除关闭按钮显示 */
	checkIsReconn(taskID) {
		if (taskID != GConstants.PkgLoaderTaskList.Game) {
			return;
		}
		//重连游戏不可关闭界面
		let nodeBtnCancle = this.gameParentNode.getChildByName("btnCancle");
		if (GCache && GCache.SelectGame) {
			let intoGameData = GCache.SelectGame.getIntoRoomData();
			if (intoGameData && intoGameData.isReconn == true) {
				nodeBtnCancle.active = false;
			} else {
				nodeBtnCancle.active = true;
			}
		} else {
			nodeBtnCancle.active = true;
		}
	}
	/** 更新加载进度 progress:0~100 */
	updateLoading(event, progress, taskID) {
		// console.log("更新加载进度====>", progress, taskID)
		if (this._currowLoadTask == null) {
			this.initLoading(taskID);
			this._isCanClickCancle = true;
		}
		if (progress <= 0) {
			progress = 0;
		} else if (progress >= 100) {
			progress = 100;
			this._isCanClickCancle = false;
			this._currowLoadTask = null;
		}
		if (taskID == GConstants.PkgLoaderTaskList.Game) {
			let x = this._allWidthGame * progress / 100;
			this.gameProgressNode.progress = (progress / 100);
			this.gameProgressAniNode.position = new Vec3(this._initAniPosGame.x + x, this._initAniPosGame.y, this._initAniPosGame.x)

			this.gameTipProgress.string = `(${Math.floor(progress)}/100)`;
		} else {
			let x = this._allWidthNormal * progress / 100;
			this.normalProgressNode.progress = (progress / 100);
			this.normalProgressAniNode.position = new Vec3(this._initAniPosNormal.x + x, this._initAniPosNormal.y, this._initAniPosNormal.x)
		}
	}
	/** 点击了取消 */
	onClickCancle(event) {
		if (this._isCanClickCancle == false) {
			return;
		}
		console.log("点击了取消=====>")
		EventManager.dispatch(AppEvent.SYS_PLAY_EFFECT, AppSound.CommClick);
		EventManager.dispatch(AppEvent.SYS_PACKAGE_LOAD_TASK_CANCLE, this._currowLoadTask);
	}
	/** 取消加载任务的回调 */
	onCallbackCancle(event, taskID) {
		this._isCanClickCancle = false;
		this._currowLoadTask = null;
		this.node.active = false;
	}
	//销毁
	onDestroy() {

	};

}

