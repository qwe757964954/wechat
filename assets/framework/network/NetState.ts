/*
 * 检测监听网络状态 
 * web模式基于HTML5 API
 */
import { game, sys } from "cc";
import { Platform } from "../../platform/Platform";
import { Logger } from "../log/Logger";

export enum NetworkEvent {
    /** 网络状态变化事件 */
    CHANGE_STATE = "NetworkEvent.CHANGE_STATE",
    /** 网络切换名称 */
    CHANGE_NAME = "NetworkEvent.CHANGE_NAME",
}

/** 网络状态 */
export enum NetworkState {
    /** 未知 */
    UNKNOWN = "unknown",
    /** 联网在线 */
    ONLINE = "online",
    /** 断网 */
    OFFLINE = "offline"
}
/** 网络名称 */
export const NetWorkName = {
    ["WIFI"]: "wifi",	//wifi 网络
    ["2G"]: "2g",      //2g 网络
    ["3G"]: "3g",	    //3g 网络
    ["4G"]: "4g",	    //4g 网络
    ["5G"]: "5g",	    //5g 网络
    ["UNKNOWN"]: "unknown",	//Android 下不常见的网络类型
    ["NONE"]: "none",	 //无网络
}
/** 网络变化类 */
export class Network {
    //1：wifi  2:2G  3:3G  4:4G  5:5G 6:未知 -1:未知或无网络
    private _state: NetworkState = NetworkState.UNKNOWN;
    private _name: string = NetWorkName.UNKNOWN;

    private static _instance = null;
    public static get instance(): Network {
        if (!this._instance || this._instance == null) {
            this._instance = new Network();
        }
        return this._instance;
    }

    constructor() {
        this._callbackNetworkState(navigator.onLine);
        this._callbackNetworkName(NetWorkName.UNKNOWN);
        switch (sys.platform) {
            case sys.Platform.WECHAT_GAME:
                this._weixinInit();
                break;
            case sys.Platform.DESKTOP_BROWSER:
                this._webInit();
                break;
            default:
                break;
        }
        this.initNetWorkState();
    }

    /**
     * 获取网络状态
     */
    get state(): NetworkState {
        return this._state;
    }

    /**
     * 设置网络状态
     */
    set state(state) {
        this._state = state;
    }


    /**
     * 获取网络名称
     */
    get name(): string {
        return this._name;
    }
    /** 
     * 设置网络名称
     */
    set name(str: string) {
        this._name = str || NetWorkName.UNKNOWN;
    }
    //状态改变
    private changeState(state: NetworkState) {
        if (this._state === state) {
            return;
        }
        this._state = state;
        game.emit(NetworkEvent.CHANGE_STATE)
    }

    //切换网络
    private changeName(name: string) {
        if (this._name === name) {
            return;
        }
        this._name = name;
        game.emit(NetworkEvent.CHANGE_NAME)
    }

    /** web平台注册 */
    private _webInit() {
        let _window = <any>window;
        let el: any = document.body;
        if (el.addEventListener) {
            _window.addEventListener("online", () => {
                this._callbackNetworkState(true)
            }, true);
            _window.addEventListener("offline", () => {
                this._callbackNetworkState(false)
            }, true);
        }
        else if (el.attachEvent) {
            _window.attachEvent("ononline", () => {
                this._callbackNetworkState(true)
            });
            _window.attachEvent("onoffline", () => {
                this._callbackNetworkState(false)
            });
        }
        else {
            _window.ononline = () => {
                this._callbackNetworkState(true)
            };
            _window.onoffline = () => {
                this._callbackNetworkState(false)
            };
        }

        // PC模式用 online.js判断网络连接
        if (!sys.isMobile) {
            (<any>window).onLineHandler = () => {
                this._callbackNetworkState(true);
            }
            (<any>window).offLineHandler = () => {
                this._callbackNetworkState(false);
            }
        }
    }
    /** wx平台注册 */
    private _weixinInit() {
        const self = this;
        Platform.regWxNetWorkCallback((res) => {
            Logger.logNet("网络状态改变：", res);
            if (res && res["networkType"]) {
                self._callbackNetworkName(res["networkType"]);
            } else {
                self._callbackNetworkName(NetWorkName.UNKNOWN);
            }
            if (res && res["isConnected"] == true) {
                self._callbackNetworkState(true);
            } else {
                self._callbackNetworkState(false);
            };
        })
    }
    /** 初始化网络状态 */
    initNetWorkState() {
        const self = this;
        Platform.updateNetWorkType(() => {
            switch (Platform.NetWorkType) {
                case -1:
                    self._callbackNetworkName(NetWorkName.NONE);
                    self._callbackNetworkState(false);
                    break;
                case 1:
                    self._callbackNetworkName(NetWorkName.WIFI);
                    self._callbackNetworkState(true);
                    break;
                case 2:
                    self._callbackNetworkName(NetWorkName["2G"]);
                    self._callbackNetworkState(true);
                    break;
                case 3:
                    self._callbackNetworkName(NetWorkName["3G"]);
                    self._callbackNetworkState(true);
                    break;
                case 4:
                    self._callbackNetworkName(NetWorkName["4G"]);
                    self._callbackNetworkState(true);
                    break;
                case 5:
                    self._callbackNetworkName(NetWorkName["5G"]);
                    self._callbackNetworkState(true);
                    break;
                case 6:
                    self._callbackNetworkName(NetWorkName.UNKNOWN);
                    self._callbackNetworkState(true);
                    break;
                default:
                    break;
            }
        })
    }

    /** 网络状态改变 */
    private _callbackNetworkState(online: boolean) {
        if (online) {
            this.changeState(NetworkState.ONLINE);
            Logger.ReportConf.isCanReport = true;
        }
        else {
            this.changeState(NetworkState.OFFLINE);
            Logger.ReportConf.isCanReport = false;
        }
    }
    /** 网络名称改变 */
    private _callbackNetworkName(name: string) {
        this.changeName(name);
    }

}