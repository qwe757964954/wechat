/**
 * Name = BaseControll
 * URL = db://assets/framework/vc/BaseControll.ts
 * Time = Mon Apr 18 2022 10:23:29 GMT+0800 (中国标准时间)
 * Author = xueya
 *
 */

import { sys } from "cc";
import { Logger } from "../log/Logger";
import { EventManager } from "../manager/EventManager";
import { SchedulerManager } from "../manager/SchedulerManager";
import { Utils } from "../Utils";


export class BaseControll {
	protected _className = "BaseControll";

	protected _Eventlistener = {};
	protected _schedulerHandler = {};
	protected _schedulerHandlerOnce = {};
	//实例化
	constructor(name: string) {
		this._className = name;
		Logger.logModel(5, `${this._className}初始化...`)
		this.onInitModuleEvent()
	};

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

	/**override 定时器的回调更新，子类需重写该方法 */
	protected onSchedulerUpdate(dt?: number) {

	}
	/**override 初始化模块事件，子类需重写该方法 */
	protected onInitModuleEvent() {

	}
	/**
	 * 添加事件绑定
	 * @param name 事件名称
	 * @param callback 回调函数
	 */
	public addModelListener(name: string, callback: Function) {
		this.removeModelListener(name);
		this._Eventlistener[name] = name
		EventManager.addListener(name, callback, this)
	}

	/**
	 * 移除事件
	 * @param name 
	 */
	public removeModelListener(name: string) {
		if (this._Eventlistener[name]) {
			EventManager.removeListener(name, this)
			this._Eventlistener[name] = null;
		}

	}
	/**
	 * 移除所有事件
	 * @param name 
	 */
	public removeAllModelListener() {
		for (const event in this._Eventlistener) {
			if (Object.prototype.hasOwnProperty.call(this._Eventlistener, event)) {
				this.removeModelListener(event)
			}
		}
		this._Eventlistener = {}
	}
	/**清理所有 */
	public clear() {
		this.stopAllScheduler()
		this.removeAllModelListener()
	}

	//当前类日志输出
	protected print = function (...args: any[]) {
		Logger.logModel(5, ...args);
	}
	//当前类日志输出
	public dump = function (arg1, args2 = null) {
		if (!args2) {
			args2 = "打印输出 :"
		}
		Logger.logModel(5, args2);

		if (sys.platform == sys.Platform.DESKTOP_BROWSER) {
			console.table(arg1);
		} else {
			Utils.dump(arg1);
		}
	}

}

