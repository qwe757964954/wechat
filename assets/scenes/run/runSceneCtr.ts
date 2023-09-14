
import { Camera, DirectionalLight, EventTouch, Node, Prefab, SphereLight, Sprite, UITransform, Vec3, _decorator, director, renderer } from 'cc';
import { GCache } from '../../cache/GCache';
import { AppEvent } from '../../config/AppEvent';
import { ClientInfo } from '../../config/GameConfig';
import { GConstants } from '../../config/GameConstant';
import { GameRes, GameResPreLoad } from '../../config/GameRes';
import { UIConfigData } from '../../config/UIConfig';
import { inf_PkgLoaderTaskAdd, inf_ResLoader, inf_SpineAniCreate } from '../../framework/InterfaceDefines';
import { Utils } from '../../framework/Utils';
import { LayerManager } from '../../framework/layer/LayerManager';
import { EventManager } from '../../framework/manager/EventManager';
import { BaseComponent } from '../../framework/vc/BaseComponent';
const { ccclass, property, menu } = _decorator;



/**
 * Name = runSceneCtr
 * URL = db://assets/scenes/run/runSceneCtr.ts
 * Time = Tue Apr 26 2022 17:01:25 GMT+0800 (中国标准时间)
 * Author = xueya
 *
 * Life: onLoad-->onEnable->start->update->lateUpdate->onDisable->onDestroy
 */

@ccclass('runSceneCtr')

//方便编辑器识别的菜单项目
@menu('scenes/runSceneCtr')

export class runSceneCtr extends BaseComponent {
	//游戏根节点
	@property({ tooltip: "UI底图", type: Sprite })
	bg: Sprite = null!;

	// //动画根节点
	// @property({ tooltip: "动画根节点", type: sp.Skeleton })
	// bgSkel: sp.Skeleton = null!;

	//游戏根节点
	@property({ tooltip: "UI根节点", type: Node })
	gui: Node = null!;

    //摄像头节点
	@property({ tooltip: "摄像头节点", type: Camera })
	camera2D: Camera = null!;

	//3D根节点
	@property({ tooltip: "UI根节点", type: Node })
	root3D: Node = null!;

	//3D摄像头
	@property({ tooltip: "3D摄像头节点", type: Camera })
	camera3D: Camera = null!;

    //球面光
	@property({ tooltip: "球面光", type: SphereLight })
	sphereLight: SphereLight = null!;

    //平行光
	@property({ tooltip: "平行光", type: DirectionalLight })
	directionalLight: DirectionalLight = null!;

	//游戏debug节点
	@property({ tooltip: "游戏debug节点", type: Node })
	debugNode: Node = null!;
	//加载节点
	@property({ tooltip: "加载节点", type: Node })
	loading: Node = null!;

	//点击最上层
	@property({ tooltip: "点击最上层", type: Node })
	aniClick: Node = null!;
	/** 分包加载延迟句柄 */
	private _handlerLoadPackage = null;

	protected onInitModuleEvent() {
		//分包加载任务
		this.addModelListener(AppEvent.SYS_PACKAGE_LOAD, this.packageLoad);
		// //生命周期变化
		// this.addModelListener(AppEvent.SYS_APP_LIFE, this.appChangeLife)

		this.addModelListener(AppEvent.VIEW_UI_3D_ADD, this.view3DAdd);
		this.addModelListener(AppEvent.VIEW_UI_3D_REMOVE, this.view3DRemove);
        this.addModelListener(AppEvent.VIEW_UI_3D_GET_CAMERA, this.view3DGetCamera);

        this.addModelListener(AppEvent.VIEW_GET_LIGHT_DATA, this.viewGetLightData);
        this.addModelListener(AppEvent.VIEW_SET_LIGHT_DATA, this.viewSetLightData);
	}

	onLoad() {
		this.initCamera3D()
		// this.bgSkel.enabled = true;
		this.regTouchEvent();
		//通知:sys周期变化
		EventManager.dispatch(AppEvent.SYS_APP_LIFE, GConstants.AppRunLife.RunScence);
		LayerManager.initUIConfig(UIConfigData)
		LayerManager.reload(this.gui)
		this.loading.active = true;
		this.reloadDebugView();
		//加载进入登录
		EventManager.dispatch(AppEvent.LOGIN_GOTO_SHOW, { state: "first_login" });
	};

	start() {

	};

	initCamera3D() {
        if (screen.width / screen.height < 1280 / 720) {
			this.camera3D.node.setPosition(0, 138.7, 111.6);
			this.camera3D.node.setRotationFromEuler(-53, 0, 0);
            this.camera3D.fovAxis = renderer.scene.CameraFOVAxis.HORIZONTAL;
            this.camera3D.fov = 45;
		} else {
			this.camera3D.node.setPosition(0, 106.4, 105.0);
			this.camera3D.node.setRotationFromEuler(-48.3, 0, 0);
            this.camera3D.fovAxis = renderer.scene.CameraFOVAxis.VERTICAL;
            this.camera3D.fov = 28.2;
		}
	}
	/** 加载debug界面 */
	reloadDebugView() {
		this.debugNode.removeAllChildren();
		if (ClientInfo.DEBUG) {
			let self = this;
			let param: inf_ResLoader = {
				bundle: GameRes.Prefab_DebugWindow.bundle,
				path: GameRes.Prefab_DebugWindow.path,
				resType: Prefab,
				callFunc: (debugNode, key) => {
					if (debugNode && self.debugNode && self.debugNode.isValid == true) {
						self.debugNode.addChild(debugNode);
					}
				}
			}
			EventManager.dispatch(AppEvent.SYS_RELOADD_LOCAL, param);
		}
	}
	/** 分包加载 */
	packageLoad(event, taskID, callbackFunc: Function) {
		this.loading.active = false;
		let self = this;
		let startCallFunc = Utils.handler(this, this.onStartCallback);
		let updateCallFunc = Utils.handler(this, this.onUpdateLoadingCallback);
		let endCallFunc = function (_taskID) {
			if (_taskID == GConstants.PkgLoaderTaskList.Login) {
				GCache.firstRunLoadSuccess = true;
			}
			self.stopScheduler(self._handlerLoadPackage);
			self._handlerLoadPackage = self.addScheduler(1, () => {
				self.stopScheduler(self._handlerLoadPackage);
				if (self.loading && self.loading.isValid == true) {
					self.loading.active = false;
				}
				if (callbackFunc) {
					callbackFunc();
				}
			})
		};
		let param: inf_PkgLoaderTaskAdd = {
			taskID: taskID,
			taskList: GameResPreLoad[taskID],
			startCallFunc: startCallFunc,
			updateCallFunc: updateCallFunc,
			endCallFunc: endCallFunc,
		}
		EventManager.dispatch(AppEvent.SYS_PACKAGE_LOAD_TASK_ADD, param)
	}
	// /** 生命周期变化 */
	// appChangeLife(event, life) {
	// 	if (life == GConstants.AppRunLife.Hall_Opened || life == GConstants.AppRunLife.Game_Opened) {
	// 		if (this.bgSkel.enabled == false) {
	// 			return;
	// 		}
	// 		this.bgSkel.enabled = false;

	// 	} else {
	// 		if (this.bgSkel.enabled == true) {
	// 			return;
	// 		}
	// 		this.bgSkel.enabled = true;
	// 	}
	// }
	onStartCallback(taskID) {
		if (!this.node || this.node.isValid == false) {
			return;
		}
		EventManager.dispatch(AppEvent.SYS_PACKAGE_LOAD_SHOW, 0, taskID);
		this.loading.active = true;
	}
	onUpdateLoadingCallback(taskID, progress) {
		if (!this.node || this.node.isValid == false) {
			return;
		}
		EventManager.dispatch(AppEvent.SYS_PACKAGE_LOAD_SHOW, progress, taskID);
	}

	/** 注册定义事件 */
	public regTouchEvent() {
		if (!this.node) {
			return;
		}
		this.aniClick.on(Node.EventType.TOUCH_START, this.onTouchtStart, this, true);
	}

	/** 点击效果 */
	onTouchtStart(event: EventTouch) {
		let touchUIPos = event.touch.getUILocation();
		let outPos = new Vec3();
		this.aniClick.getComponent(UITransform).convertToNodeSpaceAR(new Vec3(touchUIPos.x, touchUIPos.y, 0), outPos)

		let roleAni: inf_SpineAniCreate = {
			parentNode: this.aniClick,
			resConf: GameRes.Spine_ClickAni,
			aniName: "dianji_ani",
			trackIndex: 0,
			isLoop: false,
			toPos: outPos,
		}
		EventManager.dispatch(AppEvent.SYS_ANI_PLAY, roleAni);
	}

	/** 添加3D界面 */
	private view3DAdd(event: string, node: Node) {
		this.print("view3DAdd")
		if (Utils.isNotNull(node)) {
			this.root3D.addChild(node);
		}
	}

	/** 移除3D界面 */
	private view3DRemove(event: string) {
		this.print("view3DRemove")
		this.root3D.removeAllChildren();
	}

    /** 获取3D摄像头 */
	private view3DGetCamera(event: string, eventNotify: string, data: any) {
		this.print("view3DGetCamera")
        EventManager.dispatch(eventNotify, data, this.camera3D, this.camera2D);
	}

    /** 获取光照数据 */
    private viewGetLightData(event: string) {
        let data = {
            ambientLum: director.getScene().globals.ambient.skyIllum,
            // spherePosition: this.sphereLight.node.position,
            // sphereRotation: this.sphereLight.node.eulerAngles,
            sphereLum: this.sphereLight.luminousFlux,
            // directionalPosition: this.directionalLight.node.position,
            // directionalRotation: this.directionalLight.node.eulerAngles,
            directionalLum: this.directionalLight.illuminance,
        }
        this.print("viewGetLightData", data)
        EventManager.dispatch(AppEvent.VIEW_GET_LIGHT_DATA_RESP, data);
    }

    /** 设置光照数据 */
    private viewSetLightData(event: string, data: any) {
        this.print("viewSetLightData", data)
        if (Utils.isNull(data)) {
            return;
        }

        if (Utils.isNotNull(data.ambientLum)) {
            director.getScene().globals.ambient.skyIllum = data.ambientLum;
        }

        // if (Utils.isNotNull(data.spherePosition)) {
        //     this.sphereLight.node.setPosition(data.spherePosition);
        // }

        // if (Utils.isNotNull(data.sphereRotation)) {
        //     this.sphereLight.node.setRotationFromEuler(data.sphereRotation);
        // }

        if (Utils.isNotNull(data.sphereLum)) {
            this.sphereLight.luminousFlux = data.sphereLum;
        }

        // if (Utils.isNotNull(data.directionalPosition)) {
        //     this.directionalLight.node.setPosition(data.directionalPosition);
        // }

        // if (Utils.isNotNull(data.directionalRotation)) {
        //     this.directionalLight.node.setRotationFromEuler(data.directionalRotation);
        // }

        if (Utils.isNotNull(data.directionalLum)) {
            this.directionalLight.illuminance = data.directionalLum;
        }
    }

	//销毁
	onDestroy() {
		if (this.aniClick) {
			this.aniClick.off(Node.EventType.TOUCH_START, this.onTouchtStart, this, true);
		}
	};

}

