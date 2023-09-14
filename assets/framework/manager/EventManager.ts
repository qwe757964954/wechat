/**
 * Name = _EventManager 
 * URL = db://assets/framework/manager/_EventManager.ts
 * Time = Wed Apr 06 2022 10:47:07 GMT+0800 (中国标准时间)
 * Author = xueya
 * 事件消息处理
 */

export class _EventManager {
    /** 监听数组 */
    private listeners: { [key: string]: Array<Observer> } = {};

    private static _instance = null;
    public static get instance(): _EventManager {
        if (!this._instance || this._instance == null) {
            this._instance = new _EventManager();
        }
        return this._instance;
    }

    /** 
     * 注册事件 每一个事件对应n个上下文
     * @param name 事件名称
     * @param callback 回调函数
     * @param context 上下文 可空
     */
    public addListener(name: string, callback: Function, context?: any) {
        let observers: Observer[] = this.listeners[name];
        if (!observers) {
            this.listeners[name] = [];
        }
        this.listeners[name].push(new Observer(callback, context));
    }

    /**
     * 移除事件
     * @param name 事件名称
     * @param callback 回调函数
     * @param context 上下文
     */
    public removeListener(name: string, context: any) {
        let observers: Observer[] = this.listeners[name];
        if (!observers) return;
        let length = observers.length;
        for (let i = 0; i < length; i++) {
            let observer = observers[i];
            if (observer.compar(context)) {
                observers.splice(i, 1);
                break;
            }
        }
        if (observers.length == 0) {
            delete this.listeners[name];
        }
    }
    /**
     * 根据上下文移除所有事件
     * @param context 
     * @returns 
     */
    public removeListenerByContext(context: any) {
        let deleteList = [];
        for (let event in this.listeners) {
            if (Object.prototype.hasOwnProperty.call(this.listeners, event)) {
                let observers: Observer[] = this.listeners[event];
                if (observers) {
                    for (let i = length - 1; i >= 0; i--) {
                        let observer = observers[i];
                        if (observer.compar(context)) {
                            observers.splice(i, 1);
                            break;
                        }
                    }
                };
                if (observers.length == 0) {
                    deleteList.push(event);
                };
            }
        }
        for (let i = 0; i < deleteList.length; i++) {
            if (this.listeners[deleteList[i]]) {
                delete this.listeners[deleteList[i]];
            };
        };

    }


    /**
     * 分发事件
     * @param event 事件名称
     */
    public dispatch(event: string, ...args: any[]) {
        /**获取该事件相关的所有上下文 */
        let observers: Observer[] = this.listeners[event];
        if (!observers) return;
        let length = observers.length;
        for (let i = 0; i < length; i++) {
            let observer = observers[i];
            observer.notify(event, ...args);
        }
    }
}

/**
 * 观察者
 */
class Observer {
    /** 回调函数 */
    private callback: Function = null;
    /** 上下文 */
    private context: any = null;

    constructor(callback: Function, context: any) {
        let self = this;
        self.callback = callback;
        self.context = context;
    }

    /**
     * 发送通知
     * @param args 不定参数
     */
    notify(...args: any[]): void {
        let self = this;
        self.callback.call(self.context, ...args);
    }

    /**
     * 上下文比较
     * @param context 上下文
     */
    compar(context: any): boolean {
        return context == this.context;
    }
}

export const EventManager = _EventManager.instance
