System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, sys, WXSdk, Logger, BaseControll, WebSocketTask, _crd;

  function _reportPossibleCrUseOfWXSdk(extras) {
    _reporterNs.report("WXSdk", "../../platform/weixin/WXSdk", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLogger(extras) {
    _reporterNs.report("Logger", "../log/Logger", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseControll(extras) {
    _reporterNs.report("BaseControll", "../vc/BaseController", _context.meta, extras);
  }

  _export("WebSocketTask", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      sys = _cc.sys;
    }, function (_unresolved_2) {
      WXSdk = _unresolved_2.WXSdk;
    }, function (_unresolved_3) {
      Logger = _unresolved_3.Logger;
    }, function (_unresolved_4) {
      BaseControll = _unresolved_4.BaseControll;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1fe5a8v9UFCKbK4xqtpnryO", "WebSocketTask", undefined);

      __checkObsolete__(['sys']);

      /*
      *   WebSocketTask封装(基于微信平台)
      *   1. 连接/断开相关接口
      *   2. 网络异常回调
      *   3. 数据发送与接收
      */
      _export("WebSocketTask", WebSocketTask = class WebSocketTask extends (_crd && BaseControll === void 0 ? (_reportPossibleCrUseOfBaseControll({
        error: Error()
      }), BaseControll) : BaseControll) {
        //当前使用平台
        // 当前websocket对象
        //当前连接的状态
        //错误超时时间 从出现错误开始计算
        //错误超时句柄

        /** 设置回调 */
        set onConnectedCB(callback) {
          this._onConnected = callback;
        }

        set onMessageCB(callback) {
          this._onMessage = callback;
        }

        set onErrorCB(callback) {
          this._onError = callback;
        }

        set onCloseCB(callback) {
          this._onClosed = callback;
        } // onConnected: ((this: WebSocket, ev: Event | any) => any) | null = null;
        // onMessage: MessageFunc | null = null;
        // onError: ((this: WebSocket, ev: Event) => any) | null = null;
        // onClosed: ((this: WebSocket, ev: CloseEvent) => any) | null = null;


        constructor() {
          super("WebSocketTask");
          this._wsPlatform = sys.platform;
          this._ws = null;
          this._readyState = WebSocket.CLOSED;
          this._errorTimeOut = 6;
          this._handlerErrorTimeOut = null;
          this._onConnected = null;
          this._onMessage = null;
          this._onError = null;
          this._onClosed = null;
        }
        /** 开启连接 */


        connect(options) {
          if (this._ws) {
            if (this._ws.readyState === WebSocket.CONNECTING) {
              (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
                error: Error()
              }), Logger) : Logger).logNet("websocket connecting, wait for a moment...");
              return false;
            }
          }

          var url = null;

          if (options.url) {
            url = options.url;
          } else {
            var ip = options.ip;
            var port = options.port;
            var protocol = options.protocol;
            url = protocol + "://" + ip + ":" + port;
          } //关闭错误超时检测


          this._stopCheckErrorTimeOut(); //当前类


          var self = this;

          if (this._wsPlatform == sys.Platform.WECHAT_GAME) {
            if (this._ws) {
              this.print("***websocket开启连接 当前已经存在了一个连接 将上个连接的回调重置***");

              this._ws.onOpen(null);

              this._ws.onError(null);

              this._ws.onClose(null);

              this._ws.onMessage(null);
            }

            this._ws = (_crd && WXSdk === void 0 ? (_reportPossibleCrUseOfWXSdk({
              error: Error()
            }), WXSdk) : WXSdk).instance.connectSocket(url, () => {
              self.onSuccessCreated();
            }, () => {
              self.onFailCreated();
            }, null, null, 6000);

            if (!this._ws) {
              return false;
            }

            this._readyState = WebSocket.CONNECTING;

            this._ws.onOpen(res => {
              self.onOpened(res);
            });

            this._ws.onError(errMsg => {
              self.onErrored(errMsg);
            });

            this._ws.onClose(res => {
              self.onClosed(res);
            });

            this._ws.onMessage(data => {
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

            var ws = new WebSocket(url);

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

            this._ws.onopen = ev => {
              self.onOpened(ev);
            };

            this._ws.onerror = ev => {
              self.onErrored(ev);
            };

            this._ws.onclose = ev => {
              self.onClosed(ev);
            };

            this._ws.onmessage = msg => {
              self.onMessaged(msg);
            };
          }

          return true;
        }
        /** 创建连接成功 */


        onSuccessCreated() {
          this.print("***websocket创建连接成功***");
        }
        /** 创建连接失败 */


        onFailCreated() {
          this.print("***websocket创建连接失败***");
        }
        /** 连接成功 */


        onOpened(param) {
          if (param === void 0) {
            param = null;
          }

          this.print("***websocket开启连接成功***");
          this._readyState = WebSocket.OPEN;

          if (this._onConnected) {
            this._onConnected(param);
          }
        }
        /** 收到消息 */


        onMessaged(param) {
          if (param === void 0) {
            param = null;
          }

          if (this._onMessage) {
            var _param;

            this._onMessage((_param = param) == null ? void 0 : _param.data);
          }
        }
        /** 连接失败 */


        onErrored(param) {
          if (param === void 0) {
            param = null;
          }

          this.print("***websocket连接错误***", param);

          if (this._onError) {
            this._onError(param);
          }

          this._startCheckErrorTimeOut();
        }
        /** 连接关闭 */


        onClosed(param) {
          if (param === void 0) {
            param = null;
          }

          this.print("***websocket连接关闭了***");
          this._readyState = WebSocket.CLOSED;

          if (this._onClosed) {
            this._onClosed(param);
          }
        } //开启错误超时检测


        _startCheckErrorTimeOut() {
          this.stopScheduler(this._handlerErrorTimeOut);
          var self = this;
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
            self.onClosed({
              code: -1,
              reason: "error-timeout"
            });
          });
        } //停止错误超时检测


        _stopCheckErrorTimeOut() {
          this.stopScheduler(this._handlerErrorTimeOut);
          this._handlerErrorTimeOut = null;
        } //发送消息


        send(buffer) {
          var data = buffer == null ? void 0 : buffer.buffer;

          if (data && this._ws && this._readyState == WebSocket.OPEN) {
            // this.print(Logger.getDateString() + "Websocket 发送包===>")
            // Utils.dump(buffer)
            if (this._wsPlatform == sys.Platform.WECHAT_GAME) {
              this._ws.send({
                data: data
              });
            } else {
              this._ws.send(data);
            }

            return 1;
          }

          return -1;
        } //关闭连接


        close(code, reason) {
          this.print("***websocket 主动调用关闭 ***当前状态:", this._readyState);
          this.print("所有State：", WebSocket.CLOSED, WebSocket.CLOSING, WebSocket.CONNECTING, WebSocket.OPEN);

          if (this._ws) {
            if (this._readyState == WebSocket.CLOSED) {
              this.print("***websocket：close 当前已经关闭了 不需要重复关闭***");
              return;
            }

            this._readyState = WebSocket.CLOSING;

            if (this._wsPlatform == sys.Platform.WECHAT_GAME) {
              this._ws.close({
                code: code,
                reason: reason
              });
            } else {
              this._ws.close(code, reason);
            }
          }
        }
        /** 获取状态 */


        readyState() {
          return this._readyState;
        }

        /** 设置平台使用 */
        set WsPlatForm(platform) {
          this._wsPlatform = platform || sys.platform;
        }
        /** 获取当前使用平台 */


        get WsPlatForm() {
          return this._wsPlatform;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a8bcdd79b777095c5223ca80f6469d4860041ae1.js.map