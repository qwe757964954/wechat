/*
 * websocket
 */
import { sys } from "cc";
import { WXSdk } from "../../platform/weixin/WXSdk";
import { Logger } from "../log/Logger";
import { BaseControll } from "../vc/BaseController";

/*
*   WebSocketTask封装(基于微信平台)
*   1. 连接/断开相关接口
*   2. 网络异常回调
*   3. 数据发送与接收
*/
export class WebSocketTask extends BaseControll {
    private _wsPlatform = sys.platform;   //当前使用平台
    private _ws = null;                   // 当前websocket对象
    private _readyState = WebSocket.CLOSED; //当前连接的状态

    private _errorTimeOut: number = 6;     //错误超时时间 从出现错误开始计算
    private _handlerErrorTimeOut = null;    //错误超时句柄

    protected _onConnected: Function = null;
    protected _onMessage: Function = null;
    protected _onError: Function = null;
    protected _onClosed: Function = null;
    /** 设置回调 */
    set onConnectedCB(callback: Function) {
        this._onConnected = callback;
    }
    set onMessageCB(callback: Function) {
        this._onMessage = callback;
    }
    set onErrorCB(callback: Function) {
        this._onError = callback;
    }
    set onCloseCB(callback: Function) {
        this._onClosed = callback;
    }

    // onConnected: ((this: WebSocket, ev: Event | any) => any) | null = null;
    // onMessage: MessageFunc | null = null;
    // onError: ((this: WebSocket, ev: Event) => any) | null = null;
    // onClosed: ((this: WebSocket, ev: CloseEvent) => any) | null = null;

    constructor() {
        super("WebSocketTask");
    }
    /** 开启连接 */
    connect(options: any) {
        if (this._ws) {
            if (this._ws.readyState === WebSocket.CONNECTING) {
                Logger.logNet("websocket connecting, wait for a moment...")
                return false;
            }
        }

        let url = null;
        if (options.url) {
            url = options.url;
        }
        else {
            let ip = options.ip;
            let port = options.port;
            let protocol = options.protocol;
            url = `${protocol}://${ip}:${port}`;
        }
        //关闭错误超时检测
        this._stopCheckErrorTimeOut();
        //当前类
        const self = this;
        if (this._wsPlatform == sys.Platform.WECHAT_GAME) {
            if (this._ws) {
                this.print("***websocket开启连接 当前已经存在了一个连接 将上个连接的回调重置***");
                this._ws.onOpen(null);
                this._ws.onError(null);
                this._ws.onClose(null);
                this._ws.onMessage(null);
            }

            this._ws = WXSdk.instance.connectSocket(url, () => {
                self.onSuccessCreated();
            }, () => {
                self.onFailCreated();
            }, null, null, 6000);

            if (!this._ws) {
                return false;
            }
            this._readyState = WebSocket.CONNECTING;
            this._ws.onOpen((res) => {
                self.onOpened(res);
            });
            this._ws.onError((errMsg) => {
                self.onErrored(errMsg);
            });
            this._ws.onClose((res) => {
                self.onClosed(res);
            });
            this._ws.onMessage((data) => {
                self.onMessaged(data);
            });
            return true;
        } else {
            if (this._ws) {
                this.print("***websocket开启连接 当前已经存在了一个连接 将上个连接的回调重置***");
                this._ws.onopen(null);
                this._ws.onerror(null);
                this._ws.onclose(null);
                this._ws.onmessage(null);
            }

            let ws = new WebSocket(url);
            if (ws) {
                this._ws = ws;
                this._ws.binaryType = options.binaryType ? options.binaryType : "arraybuffer";
                this.onSuccessCreated();
            } else {
                this.onFailCreated();
            }
            if (!this._ws) {
                return false;
            }
            this._readyState = WebSocket.CONNECTING;

            this._ws.onopen = (ev: Event) => {
                self.onOpened(ev);
            };
            this._ws.onerror = (ev: Event) => {
                self.onErrored(ev);
            };
            this._ws.onclose = (ev: CloseEvent) => {
                self.onClosed(ev);
            };
            this._ws.onmessage = (msg) => {
                self.onMessaged(msg);
            };
        }
        return true;
    }

    /** 创建连接成功 */
    onSuccessCreated() {
        this.print("***websocket创建连接成功***")
    }
    /** 创建连接失败 */
    onFailCreated() {
        this.print("***websocket创建连接失败***")
    }
    /** 连接成功 */
    onOpened(param: any = null) {
        this.print("***websocket开启连接成功***")
        this._readyState = WebSocket.OPEN;
        if (this._onConnected) {
            this._onConnected(param);
        }
    }
    /** 收到消息 */
    onMessaged(param: any = null) {
        if (this._onMessage) {
            this._onMessage(param?.data);
        }
    }

    /** 连接失败 */
    onErrored(param: any = null) {
        this.print("***websocket连接错误***", param)
        if (this._onError) {
            this._onError(param);
        }
        this._startCheckErrorTimeOut()
    }
    /** 连接关闭 */
    onClosed(param: any = null) {
        this.print("***websocket连接关闭了***")
        this._readyState = WebSocket.CLOSED;
        if (this._onClosed) {
            this._onClosed(param);
        }
    }

    //开启错误超时检测
    private _startCheckErrorTimeOut() {
        this.stopScheduler(this._handlerErrorTimeOut);
        const self = this;
        this._handlerErrorTimeOut = this.addScheduler(this._errorTimeOut, () => {
            self.stopScheduler(self._handlerErrorTimeOut);
            if (self._readyState == WebSocket.CLOSED) {
                return;
            }
            if (this._ws) {
                if (this._wsPlatform == sys.Platform.WECHAT_GAME) {
                    this._ws.onClose(null);
                } else {
                    this._ws.onclose(null);
                }
            }
            this.print("***websocket错误超时检测回调***");
            self.onClosed({ code: -1, reason: "error-timeout" });
        });
    }

    //停止错误超时检测
    private _stopCheckErrorTimeOut() {
        this.stopScheduler(this._handlerErrorTimeOut);
        this._handlerErrorTimeOut = null;
    }


    //发送消息
    send(buffer: DataView): number {
        let data = buffer?.buffer;
        if (data && this._ws && this._readyState == WebSocket.OPEN) {
            // this.print(Logger.getDateString() + "Websocket 发送包===>")
            // Utils.dump(buffer)
            if (this._wsPlatform == sys.Platform.WECHAT_GAME) {
                this._ws.send({ data: data });
            } else {
                this._ws.send(data);
            }

            return 1;
        }
        return -1;
    }
    //关闭连接
    close(code?: number, reason?: string) {
        this.print("***websocket 主动调用关闭 ***当前状态:", this._readyState)
        this.print("所有State：", WebSocket.CLOSED, WebSocket.CLOSING, WebSocket.CONNECTING, WebSocket.OPEN);
        if (this._ws) {
            if (this._readyState == WebSocket.CLOSED) {
                this.print("***websocket：close 当前已经关闭了 不需要重复关闭***")
                return;
            }
            this._readyState = WebSocket.CLOSING;
            if (this._wsPlatform == sys.Platform.WECHAT_GAME) {
                this._ws.close({ code: code, reason: reason });
            } else {
                this._ws.close(code, reason);
            }
        }
    }

    /** 获取状态 */
    readyState(): number {
        return this._readyState;
    };
    /** 设置平台使用 */
    set WsPlatForm(platform) {
        this._wsPlatform = platform || sys.platform;
    }
    /** 获取当前使用平台 */
    get WsPlatForm() {
        return this._wsPlatform;
    }
}