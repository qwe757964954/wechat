System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, error, warn, Logger, Utils, NetNode, _crd, NetNodeStateStrs, NetTipsType, NetNodeState;

  function _reportPossibleCrUseOfLogger(extras) {
    _reporterNs.report("Logger", "../log/Logger", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUtils(extras) {
    _reporterNs.report("Utils", "../Utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfINetworkTips(extras) {
    _reporterNs.report("INetworkTips", "./NetInterface", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIProtocolHelper(extras) {
    _reporterNs.report("IProtocolHelper", "./NetInterface", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIRequestProtocol(extras) {
    _reporterNs.report("IRequestProtocol", "./NetInterface", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIResponseProtocol(extras) {
    _reporterNs.report("IResponseProtocol", "./NetInterface", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRequestObject(extras) {
    _reporterNs.report("RequestObject", "./NetInterface", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWebSocketTask(extras) {
    _reporterNs.report("WebSocketTask", "./WebSocketTask", _context.meta, extras);
  }

  _export({
    NetNode: void 0,
    NetTipsType: void 0,
    NetNodeState: void 0
  });

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      error = _cc.error;
      warn = _cc.warn;
    }, function (_unresolved_2) {
      Logger = _unresolved_2.Logger;
    }, function (_unresolved_3) {
      Utils = _unresolved_3.Utils;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "57f0fB90kNBUJ98yyu+jxjx", "NetNode", undefined);

      __checkObsolete__(['error', 'warn']);

      NetNodeStateStrs = ["已关闭", "关闭中", "连接中", "验证中", "可传输数据"];

      (function (NetTipsType) {
        NetTipsType[NetTipsType["Connecting"] = 0] = "Connecting";
        NetTipsType[NetTipsType["ReConnecting"] = 1] = "ReConnecting";
        NetTipsType[NetTipsType["Requesting"] = 2] = "Requesting";
      })(NetTipsType || _export("NetTipsType", NetTipsType = {}));

      (function (NetNodeState) {
        NetNodeState[NetNodeState["Closed"] = 0] = "Closed";
        NetNodeState[NetNodeState["Closing"] = 1] = "Closing";
        NetNodeState[NetNodeState["Connecting"] = 2] = "Connecting";
        NetNodeState[NetNodeState["Checking"] = 3] = "Checking";
        NetNodeState[NetNodeState["Working"] = 4] = "Working";
      })(NetNodeState || _export("NetNodeState", NetNodeState = {}));

      //单个的websocket 节点类
      _export("NetNode", NetNode = class NetNode {
        constructor() {
          this._connectOptions = null;
          this._autoReconnect_old = 0;
          this._autoReconnect = 0;
          this._isSocketInit = false;
          this._isSocketOpen = false;
          this._state = NetNodeState.Closed;
          this._socket = null;
          this._isCanCallback = true;
          this._networkTips = null;
          this._protocolHelper = null;
          this._callbackExecuter = null;
          this.connectOutTimeCallback = null;
          this.connectedCallback = null;
          this.disconnectCallback = null;
          this.errorConnectedCallback = null;
          this._isStartHeart = false;
          this._keepAliveTimer = null;
          this._receiveMsgTimer = null;
          this._reconnectTimer = null;
          this._heartFirstTime = 1000;
          this._heartTime = 10000;
          this._receiveTime = 20000;
          this._reconnetTimeOut = 5000;
          this._requests = Array();
          this._maxReqQuene = 3;
        }

        //队列请求：每次最多同时请求次数

        /********************** 网络相关处理 *********************/

        /**公开：初始化网络配置*/

        /**
         * 公开：初始化网络配置
         * @param socket Websocket类
         * @param protocol  包解析对象
         * @param networkTips 网络提示ui对象（请求提示、断线重连提示等）
         * @param execFunc 回调执行
         */
        init(socket, protocol, networkTips, execFunc) {
          if (networkTips === void 0) {
            networkTips = null;
          }

          if (execFunc === void 0) {
            execFunc = null;
          }

          (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
            error: Error()
          }), Logger) : Logger).logNet("\u7F51\u7EDC\u521D\u59CB\u5316");
          this._socket = socket;
          this._protocolHelper = protocol;
          this._networkTips = networkTips;
          this._callbackExecuter = execFunc ? execFunc : responseData => {};
        }
        /**
         * 开启连接
         * @param options 详见 NetConnectOptions
         * @returns 是否连接成功
         */


        connect(options) {
          if (this._socket && this._state == NetNodeState.Closed) {
            if (!this._isSocketInit) {
              this.initSocket();
            }

            this._state = NetNodeState.Connecting;

            if (!this._socket.connect(options)) {
              this.updateNetTips(NetTipsType.Connecting, false);
              return false;
            }

            if (this._connectOptions == null && typeof options.autoReconnect == "number") {
              this._autoReconnect_old = options.autoReconnect;
              this._autoReconnect = options.autoReconnect;
            }

            this._connectOptions = options;
            this.updateNetTips(NetTipsType.Connecting, true);
            return true;
          } else {
            (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
              error: Error()
            }), Logger) : Logger).logNet("Socket\u8FDE\u63A5\u5DF2\u5F00\u542F \u8981\u5F00\u542F\u8BF7\u5148\u5173\u95ED");
          }

          return false;
        }
        /**
         * 主动开启心跳
         */


        startHeart() {
          if (!this.isSocketOpend()) {
            (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
              error: Error()
            }), Logger) : Logger).logNet("主动开启心跳失败，socket从未连接成功");
            return;
          }

          if (this._isStartHeart == true) {
            return;
          }

          this._isStartHeart = true;
          this.resetHearbeatTimer(true);
        }
        /**
         * 主动关闭心跳
         */


        stopHeart() {
          this._isStartHeart = false;
          this.resetHearbeatTimer(false);
        }
        /**
         * 设置心跳间隔
         * @param time 毫秒级别
         */


        setHeartTime(time) {
          if (time === void 0) {
            time = null;
          }

          if (time == null) {
            return;
          }

          this._heartTime = time;
        }
        /**私有：初始化网络socket */


        initSocket() {
          if (this._socket) {
            this._socket.onConnectedCB = event => {
              this.onConnected(event);
            };

            this._socket.onMessageCB = msg => {
              this.onMessage(msg);
            };

            this._socket.onErrorCB = event => {
              this.onError(event);
            };

            this._socket.onCloseCB = event => {
              this.onClosed(event);
            };

            this._isSocketInit = true;
          }
        }
        /**私有:更新网络状态提示 */


        updateNetTips(tipsType, isShow) {
          if (this._networkTips) {
            if (tipsType == NetTipsType.Requesting) {
              this._networkTips.requestTips(isShow);
            } else if (tipsType == NetTipsType.Connecting) {
              this._networkTips.connectTips(isShow);
            } else if (tipsType == NetTipsType.ReConnecting) {
              this._networkTips.reconnectTips(isShow);
            }
          }
        }
        /**私有: 网络连接成功 */


        onConnected(event) {
          (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
            error: Error()
          }), Logger) : Logger).logNet("网络已连接");
          this._isSocketOpen = true;
          this._autoReconnect = this._autoReconnect_old;
          this._state = NetNodeState.Checking;
          this.onChecked();
          (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
            error: Error()
          }), Logger) : Logger).logNet("\u7F51\u7EDC\u5DF2\u8FDE\u63A5\u5F53\u524D\u72B6\u6001\u4E3A\u3010" + NetNodeStateStrs[this._state] + "\u3011"); // 如果设置了成功回调，在连接完成后进入检查阶段，等待检查结束

          if (this.connectedCallback !== null && this._isCanCallback) {
            this.connectedCallback(() => {});
          }
        }
        /**私有: 连接验证成功，进入工作状态 */


        onChecked() {
          (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
            error: Error()
          }), Logger) : Logger).logNet("连接验证成功，进入工作状态");
          this._state = NetNodeState.Working; // 关闭连接或重连中的状态显示

          this.updateNetTips(NetTipsType.Connecting, false);
          this.updateNetTips(NetTipsType.ReConnecting, false); // 重发待发送信息

          this.checkReqQuene();
        }
        /**私有: 接收到一个完整的消息包 */


        onMessage(msg) {
          var _this$_protocolHelper;

          (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
            error: Error()
          }), Logger) : Logger).logNet("******[Socket]:onMessage 收到一条消息*******");

          if (this._state == NetNodeState.Closing || this._state == NetNodeState.Closed) {
            (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
              error: Error()
            }), Logger) : Logger).logNet("\u62D2\u6536\u6D88\u606F\uFF1A\u63A5\u53D7\u6D88\u606F\u72B6\u6001\u4E3A\u3010" + NetNodeStateStrs[this._state] + "\u3011");
            return;
          } // 接受到数据，停止超时检测


          this.resetReceiveMsgTimer(null, true); // 重置心跳包发送器

          this.resetHearbeatTimer(); // 进行头部的校验（实际包长与头部长度是否匹配）

          if (!this._protocolHelper.checkResponsePackage(msg)) {
            error("\u6821\u9A8C\u63A5\u53D7\u6D88\u606F\u6570\u636E\u5F02\u5E38");
            return;
          } // 开始解包


          var respData = (_this$_protocolHelper = this._protocolHelper) == null ? void 0 : _this$_protocolHelper.handlerResponsePackage(msg); // Utils.dump(respData)

          if (respData) {
            if (this._isCanCallback) {
              //触发回调
              this._callbackExecuter(respData);
            }
          } else {
            (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
              error: Error()
            }), Logger) : Logger).logNet("[Socket]:\u6536\u5230\u4E00\u6761\u672A\u77E5\u7684\u547D\u4EE4 \u89E3\u5305\u5931\u8D25");
          } // 触发消息执行


          if (this._state == NetNodeState.Working) {
            this.checkReqQuene();
          }
        }
        /**检查发送队列 */


        checkReqQuene() {
          // 待发送信息 每次最多同时发送3条
          var requests = this._requests.concat();

          if (requests.length > 0) {
            var maxCount = requests.length > this._maxReqQuene ? this._maxReqQuene : requests.length;
            (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
              error: Error()
            }), Logger) : Logger).logNet("[Socket]:checkReqQuene \u961F\u5217\u4E2D\u6709\u3010" + this._requests.length + "\u3011\u4E2A\u5F85\u53D1\u9001\u7684\u4FE1\u606F,\u672C\u6B21\u53D1\u9001 " + maxCount + " \u6761");

            for (var i = 0; i < maxCount; i++) {
              var array = requests[i];

              if (array) {
                var _array$reqArray;

                if (array != null && (_array$reqArray = array.reqArray) != null && _array$reqArray.buffer) {
                  (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
                    error: Error()
                  }), Logger) : Logger).logNet("[Socket]:checkReqQuene \u53D1\u9001\u547D\u4EE4\u4E3A\u3010" + array.reqArray.headCmd + "\u3011\u3010" + array.reqArray.action + "\u3011\u7684\u8BF7\u6C42\uFF0C\u7B49\u5F85\u8BF7\u6C42\u6570\u636E\u7684\u56DE\u8C03");

                  var sendRes = this._socket.send(array.reqArray.buffer);

                  this.resetReceiveMsgTimer(array.reqArray.outtime);

                  if (sendRes == 1) {
                    requests.splice(i, 1);
                  } else {
                    break;
                  }
                }
              }
            } // 如果还有等待返回的请求，启动网络请求层


            this.updateNetTips(NetTipsType.Requesting, requests.length > 0);
          }

          this._requests = requests;
        }
        /**连接错误 */


        onError(event) {
          if (this.errorConnectedCallback && this._isCanCallback) {
            this.errorConnectedCallback(this._connectOptions, event, this._autoReconnect);
            (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
              error: Error()
            }), Logger) : Logger).logNet("[Socket]:onError \u8FDE\u63A5\u9519\u8BEF");
            return;
          }

          error(event);
        }
        /**连接失败 */


        onClosed(event) {
          var _event, _event2;

          event = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).table_verify(event);
          (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
            error: Error()
          }), Logger) : Logger).logNet("***Websocket \u8FDE\u63A5\u5173\u95ED\uFF0Ccode:" + ((_event = event) == null ? void 0 : _event.code) + ",reason:" + ((_event2 = event) == null ? void 0 : _event2.reason) + "***");
          this.clearTimer(); //主动关闭不回调

          if (!this._isCanCallback) {
            this._state = NetNodeState.Closed;
            return;
          } // 自动重连


          if (this.isAutoReconnect()) {
            // 执行断线回调，参数为剩余重连的次数
            if (this.disconnectCallback) {
              this.disconnectCallback(this._autoReconnect);
              (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
                error: Error()
              }), Logger) : Logger).logNet("[Socket]:onClosed \u65AD\u5F00\u8FDE\u63A5");
            }

            this.updateNetTips(NetTipsType.ReConnecting, true);
            this._reconnectTimer = setTimeout(() => {
              this._socket.close();

              this._state = NetNodeState.Closed; //主动关闭不回调

              if (!this._isCanCallback) {
                return;
              }

              (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
                error: Error()
              }), Logger) : Logger).logNet("[Socket]:执行重连逻辑 先关闭 再连接...");
              this.connect(this._connectOptions);

              if (this._autoReconnect > 0) {
                this._autoReconnect -= 1;
              }
            }, this._reconnetTimeOut);
          } else {
            this._state = NetNodeState.Closed; // 执行断线回调，参数为剩余重连的次数 此时不再重连

            if (this.disconnectCallback) {
              this.disconnectCallback(this._autoReconnect);
              (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
                error: Error()
              }), Logger) : Logger).logNet("[Socket]:onClosed \u65AD\u5F00\u8FDE\u63A5");
              this.disconnectCallback = null;
            }
          }
        }
        /** 主动关闭连接 （停止所有定时器 停止重连）*/


        close(code, reason) {
          (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
            error: Error()
          }), Logger) : Logger).logNet("=====================主动关闭连接======================");
          this.clearTimer();
          this.rejectReconnect();
          this._requests = Array();
          this._requests.length = 0;
          this._isStartHeart = false;

          if (this._networkTips) {
            this._networkTips.connectTips(false);

            this._networkTips.reconnectTips(false);

            this._networkTips.requestTips(false);
          }

          if (this._socket) {
            this._state = NetNodeState.Closing;

            this._socket.close(code, reason);
          } else {
            this._state = NetNodeState.Closed;
          }
        }
        /** 只是关闭Socket套接字（仍然重用缓存与当前状态） */


        closeSocket(code, reason) {
          if (this._socket) {
            this._socket.close(code, reason);
          }
        }
        /** 发起包，如果当前处于重连中，进入缓存列表等待重连完成后发送 */


        send(reqProtocol, force) {
          if (force === void 0) {
            force = false;
          }

          var res = this._protocolHelper.handlerRequestPackage(reqProtocol);

          if (!res || !reqProtocol.buffer) {
            error("\u53D1\u9001\u6570\u636E\u683C\u5F0F\u6709\u8BEF \u7F13\u5B58\u53D1\u9001\u5931\u8D25");
            return -1;
          }

          if (this._state == NetNodeState.Working || force) {
            (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
              error: Error()
            }), Logger) : Logger).logNet("[Send]:心跳包发送成功");

            var sendRes = this._socket.send(reqProtocol.buffer);

            this.resetReceiveMsgTimer(reqProtocol.outtime);
            return sendRes;
          } else if (this._state == NetNodeState.Checking || this._state == NetNodeState.Connecting) {
            this._requests.push({
              reqArray: reqProtocol
            });

            (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
              error: Error()
            }), Logger) : Logger).logNet("\u5F53\u524D\u72B6\u6001\u4E3A\u3010" + NetNodeStateStrs[this._state] + "\u3011,\u7E41\u5FD9\u5E76\u7F13\u51B2\u53D1\u9001\u6570\u636E");
            return 0;
          } else {
            error("\u5F53\u524D\u72B6\u6001\u4E3A\u3010" + NetNodeStateStrs[this._state] + "\u3011,\u8BF7\u6C42\u9519\u8BEF");
            return -1;
          }
        }
        /**发起请求，并进入缓存列表
         * 此处要对 data进行包装加密
         * @param reqProtocol 
         * @param force 
         */


        request(reqProtocol, force) {
          if (force === void 0) {
            force = false;
          }

          var res = this._protocolHelper.handlerRequestPackage(reqProtocol); // Logger.logNet("发起请求，并进入缓存列表===>"+res)


          if (res) {
            this.base_request(reqProtocol, force);
          }
        }
        /** 唯一request(利用action唯一)，确保没有同一响应的请求（避免一个请求重复发送） */


        requestUnique(reqProtocol, force) {
          if (force === void 0) {
            force = false;
          }

          var action = reqProtocol.action;

          if (!action) {
            return;
          }

          for (var index = 0; index < this._requests.length; index++) {
            var _req = this._requests[index];

            if (_req && _req.reqArray && _req.reqArray.action == action) {
              (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
                error: Error()
              }), Logger) : Logger).logNet("[Socket]:requestUnique \u547D\u4EE4 action\u3010" + _req.reqArray.action + "\u3011\u91CD\u590D\u8BF7\u6C42 \u5DF2\u62D2\u7EDD\u518D\u6B21\u6267\u884C");
              return false;
            }
          }

          this.request(reqProtocol, force);
          return true;
        }
        /**
         * 将要发送的数据命令保存起来，要不缓存要不立即发送
         * @param reqProtocol 请求的结构体
         * @param force 强制发送
         * @returns 
         */


        base_request(reqProtocol, force) {
          if (force === void 0) {
            force = false;
          }

          var buf = null;

          try {
            buf = JSON.stringify(reqProtocol);
          } catch (error) {
            error("\u7F13\u5B58\u6570\u636E\u5931\u8D25 \u5F53\u524Daction" + reqProtocol.action);
          }

          if (buf && reqProtocol && reqProtocol.buffer != null) {
            // Logger.logNet("进入缓存列表")
            // 进入发送缓存列表
            this._requests.push({
              reqArray: reqProtocol
            });
          }

          if (this._state == NetNodeState.Working || force) {
            this.checkReqQuene();
          }
        }
        /********************** 心跳、超时相关处理 *********************/
        //重置超时定时器


        resetReceiveMsgTimer(outTime, isOnlyStop) {
          if (this._receiveMsgTimer !== null) {
            clearTimeout(this._receiveMsgTimer);
          }

          if (isOnlyStop) {
            return;
          }

          this._receiveMsgTimer = setTimeout(() => {
            warn("接收消息定时器超时 关闭网络连接"); // 执行超时回调，参数为剩余重连的次数

            if (this.connectOutTimeCallback && this._isCanCallback) {
              this.connectOutTimeCallback(this._autoReconnect);
              (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
                error: Error()
              }), Logger) : Logger).logNet("[Socket]:\u7F51\u7EDC\u8FDE\u63A5\u8D85\u65F6");
            }

            this._socket.close();
          }, outTime || this._receiveTime);
        } //重置心跳定时器


        resetHearbeatTimer(isFirstStart) {
          if (isFirstStart === void 0) {
            isFirstStart = false;
          }

          if (this._keepAliveTimer !== null) {
            clearTimeout(this._keepAliveTimer);
          } //必须主动开启


          this.sendHeartbeatPacket(isFirstStart);
        } //发送心跳包


        sendHeartbeatPacket(isFirstStart) {
          if (this._isStartHeart == true && this._state == NetNodeState.Working) {
            var time = 0;

            if (isFirstStart) {
              time = this._heartFirstTime;
              this._keepAliveTimer = setTimeout(() => {
                (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
                  error: Error()
                }), Logger) : Logger).logNet("[Socket]:持续发送心跳信息中...");
                this.send(this._protocolHelper.getHearbeatPackage());
              }, this._heartFirstTime);
            }

            this._keepAliveTimer = setInterval(() => {
              (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
                error: Error()
              }), Logger) : Logger).logNet("[Socket]:持续发送心跳信息中...");
              this.send(this._protocolHelper.getHearbeatPackage());
            }, (this._heartTime + time) * 3 / 4);
          }
        } //清理所有定时器


        clearTimer() {
          if (this._receiveMsgTimer !== null) {
            clearTimeout(this._receiveMsgTimer);
          }

          if (this._keepAliveTimer !== null) {
            clearTimeout(this._keepAliveTimer);
          }

          if (this._reconnectTimer !== null) {
            clearTimeout(this._reconnectTimer);
          }

          this._isStartHeart = false;
        }
        /**是否开启过 */


        isSocketOpend() {
          return this._isSocketOpen;
        }
        /**是否初始化过 */


        isSocketInited() {
          return this._isSocketInit;
        }
        /** 是否自动重连 */


        isAutoReconnect() {
          return this._autoReconnect != 0;
        }
        /** 停止重连 */


        rejectReconnect() {
          this._autoReconnect = 0;
          this.clearTimer();
        }
        /**删除 */


        dtor() {
          this._networkTips = null;
          this.close();
        }
        /**设置是否可回调 */


        setCallbackState(state) {
          if (state != null) {
            this._isCanCallback = state;
          }
        }
        /** 是否连接成功 */


        isConnected() {
          if (this._socket) {
            return this._socket.readyState() != WebSocket.CLOSED && this._socket.readyState() != WebSocket.CLOSING;
          }

          return false;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=5d6e2dc59e0995f18a2f569d3c6ff724850c781f.js.map