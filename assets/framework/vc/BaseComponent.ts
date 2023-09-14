
import { Component, _decorator } from 'cc';
import { Logger } from '../log/Logger';
import { EventManager } from '../manager/EventManager';
import { ResLoaderManager } from '../manager/ResLoaderManager';
import { SchedulerManager } from '../manager/SchedulerManager';
const { ccclass, menu } = _decorator;

/**
 * Name = BaseComponent
 * URL = db://assets/framework/vc/BaseComponent.ts
 * Time = Tue Apr 19 2022 15:46:20 GMT+0800 (中国标准时间)
 * Author = xueya
 *
 * Life: onLoad-->onEnable->start->update->lateUpdate->onDisable->onDestroy
 */


@ccclass('BaseComponent')
//方便编辑器识别的菜单项目
@menu('vc/BaseComponent')

export class BaseComponent extends Component {

	/** 当前类预加载的资源 */
	private preLoadMap = new Map();
	/**子类继承的onload函数 */
	private extent_onLoad = null;
	/**子类继承的销毁函数 */
	private extent_onDestroy = null;
	constructor() {
		super();
		/**重载onLoad */
		this.extent_onLoad = this.onLoad;
		this.onLoad = function () {
			this.onLoadBefore()
			this.extent_onLoad()
		}

		/**重载销毁 加入自动清理 */
		this.extent_onDestroy = this.onDestroy
		this.onDestroy = function () {
			this.onDestroyBefore()
			this.extent_onDestroy()
		}
	}

	protected _Eventlistener = {};
	protected _schedulerHandler = {};
	protected _schedulerHandlerOnce = {};
	/**
	 * 在onload之前调用
	 */
	private onLoadBefore() {
		this.removeAllModelListener()
		this.onInitModuleEvent()
	};

	onLoad() {
		this.onLoadBefore()
	};

	onEnable() {
		//当状态被激活时会调用
	}
	start() {

	};

	/**override 定时器的回调更新，子类需重写该方法 */
	protected onSchedulerUpdate(dt?: number) {

	}
	/**override 初始化模块事件，子类需重写该方法 */
	protected onInitModuleEvent() {

	}
	/**
	 * 添加一个延时
	 * @param time 时间 单位:秒
	 * @param callback 更新函数(默认为:onSchedulerUpdate) 
	 * @param return 定时器句柄number
	 */
	public addSchedulerOnce(time: number = 0, callback: Function = this.onSchedulerUpdate): number {
		const content = this
		let handler = SchedulerManager.schedulerTimeout((dt: number) => {
			callback.call(content, dt, handler);
			content.stopSchedulerOnce(handler);
		}, time)
		this._schedulerHandlerOnce[handler] = true;
		return handler
	}
	/** 停止延时定时器 */
	public stopSchedulerOnce(handler: number) {
		SchedulerManager.unscheduleTimeout(handler);
		if (handler != null && this._schedulerHandlerOnce[handler] == true) {
			this._schedulerHandlerOnce[handler] = null;
		}
	}

	/**
	 * 添加一个定时器
	 * @param time 时间 单位:秒
	 * @param callback 更新函数(默认为:onSchedulerUpdate) 
	 * @param return 定时器句柄number
	 */
	public addScheduler(time: number = 0, callback: Function = this.onSchedulerUpdate): number {
		const content = this
		let handler = SchedulerManager.schedulerInterval((dt: number, _handler) => {
			callback.call(content, dt, handler);
		}, time)
		this._schedulerHandler[handler] = true;
		return handler
	}
	/** 停止定时器 */
	public stopScheduler(handler: number) {
		SchedulerManager.unscheduleInterval(handler);
		if (handler != null && this._schedulerHandler[handler] == true) {
			this._schedulerHandler[handler] = null;
		}
	}
	/** 停止所有定时器 */
	public stopAllScheduler() {
		for (let handler in this._schedulerHandler) {
			if (Object.prototype.hasOwnProperty.call(this._schedulerHandler, handler)) {
				this.stopScheduler(Number(handler));
			}
		}
		for (let handler in this._schedulerHandlerOnce) {
			if (Object.prototype.hasOwnProperty.call(this._schedulerHandlerOnce, handler)) {
				this.stopSchedulerOnce(Number(handler));
			}
		}
	}
	/**
	 * 添加事件绑定
	 * @param name 事件名称
	 * @param callback 回调函数
	 */
	protected addModelListener(name: string, callback: Function) {
		this.removeModelListener(name);
		this._Eventlistener[name] = name
		EventManager.addListener(name, callback, this)
	}
	/**
	 * 发送事件
	 * @param name 事件名称
	 * @param callback 回调函数
	 */
	protected dispatchEvent(name: string, ...args: any[]) {
		EventManager.dispatch(name, ...args)
	}


	/**
	 * 移除事件
	 * @param name 
	 */
	protected removeModelListener(name: string) {
		if (this._Eventlistener[name]) {
			EventManager.removeListener(name, this)
			this._Eventlistener[name] = null;
		}

	}
	/**
	 * 移除所有事件
	 * @param name 
	 */
	protected removeAllModelListener() {
		for (const event in this._Eventlistener) {
			if (Object.prototype.hasOwnProperty.call(this._Eventlistener, event)) {
				this.removeModelListener(event)
			}
		}
		this._Eventlistener = {}
	}
	/** 移除当前类所有加载 */
	protected removePreLoadMap() {
		this.preLoadMap.forEach((VALUE, KEY) => {
			ResLoaderManager.getInstance().removePreLoaderRecord(KEY);
		});
		this.preLoadMap.clear();
	}
	/**
	 * 清理(在调用 onDestroy 前自动清理)
	 */
	private onDestroyBefore() {
		this.stopAllScheduler()
		this.removeAllModelListener()
		this.removePreLoadMap();
	}

	//销毁
	onDestroy() {
		this.onDestroyBefore()
	};

	/**
	 * 获取预加载的资源
	 * @param bundle 包名
	 * @param path 资源路径
	 * @param resType 资源类型
	 * @param callback 成功回调
	 * @param isReload 是否重新加载 默认为false
	 */
	protected getPreLoaderRes(bundle, path, resType = null, callback = null, isReload = false) {
		if (!path) {
			return;
		}
		let self = this;
		ResLoaderManager.getInstance().getPreLoaderRes(bundle, path, resType, (res, key) => {
			if (!self.node) {
				return;
			}
			if (self.node && self.node.isValid == true) {
				self.preLoadMap.delete(key)
				self.preLoadMap.set(key, true);
				if (callback) {
					callback(res);
				}
			}

		}, isReload)
	}

	/** 获取列表中的预加载资源 */
	protected getPreLoaderArrayRes(list: any[], callback: Function = null, isReload = false) {
		if (!list.length) {
			return;
		}
		let next = (index, isReload) => {
			let self = this;
			let resConf = list[index];
			let ddzRes = resConf.ddzRes;
			let resIndex = index;
			ResLoaderManager.getInstance().getPreLoaderRes(ddzRes.bundle, ddzRes.path, resConf.resType, (res, key) => {
				if (self.preLoadMap) {
					self.preLoadMap.delete(key)
					self.preLoadMap.set(key, true);
				}
				resIndex++;
				if (resIndex < list.length) {
					next(resIndex, isReload);
				} else {
					callback && callback();
				}
			}, isReload);
		}
		next(0, isReload);
	}


	/**
	 * 获取预加载的远端资源
	 * @param bundle 包名
	 * @param path 资源路径
	 * @param resType 资源类型 string 例'.jpg'
	 * @param callback 成功回调
	 * @param isReload 是否重新加载 默认为false
	 */
	protected getPreLoaderRemoteRes(path: string, resType = null, callback = null, isReload = false) {
		if (!path) {
			return;
		}
		let self = this;
		ResLoaderManager.getInstance().getPreLoaderRemoteRes(path, resType, (res, key) => {
			if (!self) {
				return;
			}
			if (self.node && self.node.isValid == true) {
				self.preLoadMap.delete(key)
				self.preLoadMap.set(key, true);
				if (callback) {
					callback(res);
				}
			}

		}, isReload)
	}

	protected print(...args: any[]) {
		Logger.logView(5, args);
	}
}

