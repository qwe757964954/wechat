/**
 * Name = PopupServers
 * URL = db://assets/proj/servers/servers/PopupServers.ts
 * Time = Sat Nov 26 2022 18:06:36 GMT+0800 (中国标准时间)
 * Author = xueya
 * 弹窗控制器
 */

import { AppEvent } from "../../config/AppEvent";
import { UIID } from "../../config/UIConfig";
import { inf_UICallbacks } from "../../framework/InterfaceDefines";
import { LayerManager } from "../../framework/layer/LayerManager";
import { EventManager } from "../../framework/manager/EventManager";
import { Utils } from "../../framework/Utils";
import { BaseControll } from "../../framework/vc/BaseController";

export class PopupServers extends BaseControll {
	private static _instance = null;
	public static getInstance(): PopupServers {
		if (!this._instance || this._instance == null) {
			this._instance = new PopupServers("PopupServers");
		}
		return this._instance;
	}

	private _curMainLayer = null;
	private _mainLayerArray: Array<any> = [];
	/** 恭喜获得弹窗队列 */
	private _dequeAnim: Array<any> = [];
	/** 网络加载超时句柄 */
	private _handlerNetOutTime = null;


	get MainLayerCode() {
		return this._curMainLayer;
	}
	//实例化
	constructor(name: string) {
		super(name);
	};
	public static init(): PopupServers {
		if (this._instance) {
			this._instance.clear()
		}
		this._instance = null
		PopupServers.getInstance();
		return
	}

	/**初始化添加事件绑定 */
	protected onInitModuleEvent(): void {
		//更新主场景标志
		this.addModelListener(AppEvent.VIEW_UI_MAIN_UPDATE, this.updateMainLayer)
		//回滚主场景标志
		this.addModelListener(AppEvent.VIEW_UI_MAIN_ROLLBACK, this.rollBackMainLayer)

		//将要打开界面
		this.addModelListener(AppEvent.VIEW_UI_OPEN, this.onOpenView)
		//将要关闭界面
		this.addModelListener(AppEvent.VIEW_UI_CLOSE, this.onCloseView)

		//打开了界面
		this.addModelListener(AppEvent.VIEW_UI_OPENED, this.onOpenedView)
		//关闭了界面
		this.addModelListener(AppEvent.VIEW_UI_CLOSED, this.onClosedView)

		//显示网络loading
		this.addModelListener(AppEvent.SYS_SHOW_NETLOADING, this.showNetLoading)
		//关闭网络loading
		this.addModelListener(AppEvent.SYS_CLOSE_NETLOADING, this.closeNetLoading)

		//显示吐司提示
		this.addModelListener(AppEvent.SYS_TOAST_TIP, this.showToastTips)


	}

	/** 更新主场景标志 */
	private updateMainLayer(event: string, code) {
		this.print("更新主场景标志: code=", code)
		this._curMainLayer = code;
		this._mainLayerArray.push(this._curMainLayer);
	}
	/** 回滚主场景标志 */
	private rollBackMainLayer(event: string) {
		this.print("回滚主场景标志: 当前：", this._curMainLayer, "上一个:", this._mainLayerArray[this._mainLayerArray.length - 2])
		if (this._mainLayerArray.length >= 2) {
			this._curMainLayer = this._mainLayerArray[this._mainLayerArray.length - 2];
			this._mainLayerArray.splice(this._mainLayerArray.length - 1, 1);
		} else {
			this._curMainLayer = this._mainLayerArray[0] != null ? this._mainLayerArray[0] : null;
			this._mainLayerArray = [];
		}
		this.print("回滚主场景标志: 回滚后：", this._curMainLayer)
	}

	/** 即将打开界面 */
	private onOpenView(event: string, uiId: number, uiArgs: any = null, callbacks: inf_UICallbacks = null, parent = null, isClickSpanceClose: boolean = false, isAutoRecover: boolean = false) {
		this.print("[OpenView]即将打开界面:" + uiId)
		LayerManager.open(uiId, uiArgs, callbacks, parent, isClickSpanceClose, isAutoRecover);
	}
	/** 即将关闭界面 */
	private onCloseView(event: string, uiId: number, parent = null) {
		this.print("[CloseView]即将关闭界面:" + uiId)
		LayerManager.remove(uiId, true, parent);
	}
	/** 打开了界面 */
	private onOpenedView(event: string, viewParam: Object) {
		this.print("[OpenedView]打开了界面:" + viewParam["Prefab"])
	}
	/** 关闭了界面 */
	private onClosedView(event: string, viewParam: Object) {
		this.print("[ClosedView]关闭了界面:" + viewParam["Prefab"])
	}

	/**显示网络loading */
	private showNetLoading(event: string = null, time = 15) {
		this.print("===开启网络加载===")
		this.onOpenView(null, UIID.NetLoading, { time: time });
		this.stopScheduler(this._handlerNetOutTime);
		this._handlerNetOutTime = this.addSchedulerOnce(time, () => {
			EventManager.dispatch(AppEvent.SYS_CLOSE_NETLOADING);
		});
	}
	/**关闭网络loading */
	private closeNetLoading(event: string = null) {
		this.print("===关闭网络加载===")
		this.stopScheduler(this._handlerNetOutTime);
		this._handlerNetOutTime = null;
		this.onCloseView(null, UIID.NetLoading);
	}

	/**显示吐司提示 */
	private showToastTips(event: string, param: any) {
		this.print("显示吐司===>")
		if (param && param.content && Utils.string_isEmpty(param.content) == false) {
			this.onOpenView(null, UIID.ToastTip, param);
		}
	}






}

