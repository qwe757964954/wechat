System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14", "__unresolved_15"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, GCache, AppEvent, GConstants, GameTxt, EventManager, Logger, NetManager, Network, NetworkState, WebSocketTask, SchedulerManager, Utils, GCmdMapping, GlobalCMD, GlobalCMDHead, GlobalProtocol, GPBAdaptive, GSocket, _crd, ReceivePHPDataQueve, ReceiveMaxDetail;

  function _reportPossibleCrUseOfGCache(extras) {
    _reporterNs.report("GCache", "../../cache/GCache", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAppEvent(extras) {
    _reporterNs.report("AppEvent", "../../config/AppEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGConstants(extras) {
    _reporterNs.report("GConstants", "../../config/GameConstant", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameTxt(extras) {
    _reporterNs.report("GameTxt", "../../config/GameTxt", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventManager(extras) {
    _reporterNs.report("EventManager", "../../framework/manager/EventManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLogger(extras) {
    _reporterNs.report("Logger", "../../framework/log/Logger", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIRequestProtocol(extras) {
    _reporterNs.report("IRequestProtocol", "../../framework/network/NetInterface", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIResponseProtocol(extras) {
    _reporterNs.report("IResponseProtocol", "../../framework/network/NetInterface", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNetManager(extras) {
    _reporterNs.report("NetManager", "../../framework/network/NetManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNetConnectOptions(extras) {
    _reporterNs.report("NetConnectOptions", "../../framework/network/NetNode", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNetNode(extras) {
    _reporterNs.report("NetNode", "../../framework/network/NetNode", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNetwork(extras) {
    _reporterNs.report("Network", "../../framework/network/NetState", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNetworkState(extras) {
    _reporterNs.report("NetworkState", "../../framework/network/NetState", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWebSocketTask(extras) {
    _reporterNs.report("WebSocketTask", "../../framework/network/WebSocketTask", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSchedulerManager(extras) {
    _reporterNs.report("SchedulerManager", "../../framework/manager/SchedulerManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUtils(extras) {
    _reporterNs.report("Utils", "../../framework/Utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGCmdMapping(extras) {
    _reporterNs.report("GCmdMapping", "./GCmdMapping", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGlobalCMD(extras) {
    _reporterNs.report("GlobalCMD", "./GlobalCMD", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGlobalCMDHead(extras) {
    _reporterNs.report("GlobalCMDHead", "./GlobalCMD", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGlobalProtocol(extras) {
    _reporterNs.report("GlobalProtocol", "./GlobalProtocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGPBAdaptive(extras) {
    _reporterNs.report("GPBAdaptive", "./GPBAdaptive", _context.meta, extras);
  }

  _export("GSocket", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      GCache = _unresolved_2.GCache;
    }, function (_unresolved_3) {
      AppEvent = _unresolved_3.AppEvent;
    }, function (_unresolved_4) {
      GConstants = _unresolved_4.GConstants;
    }, function (_unresolved_5) {
      GameTxt = _unresolved_5.GameTxt;
    }, function (_unresolved_6) {
      EventManager = _unresolved_6.EventManager;
    }, function (_unresolved_7) {
      Logger = _unresolved_7.Logger;
    }, function (_unresolved_8) {
      NetManager = _unresolved_8.NetManager;
    }, function (_unresolved_9) {
      Network = _unresolved_9.Network;
      NetworkState = _unresolved_9.NetworkState;
    }, function (_unresolved_10) {
      WebSocketTask = _unresolved_10.WebSocketTask;
    }, function (_unresolved_11) {
      SchedulerManager = _unresolved_11.SchedulerManager;
    }, function (_unresolved_12) {
      Utils = _unresolved_12.Utils;
    }, function (_unresolved_13) {
      GCmdMapping = _unresolved_13.GCmdMapping;
    }, function (_unresolved_14) {
      GlobalCMD = _unresolved_14.GlobalCMD;
      GlobalCMDHead = _unresolved_14.GlobalCMDHead;
    }, function (_unresolved_15) {
      GlobalProtocol = _unresolved_15.GlobalProtocol;
    }, function (_unresolved_16) {
      GPBAdaptive = _unresolved_16.GPBAdaptive;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "176f1/90wRMMKefZeRaoLzk", "GSocket", undefined);

      //接收到的php消息缓存队列
      ReceivePHPDataQueve = []; //每次处理的数量

      ReceiveMaxDetail = 3;

      _export("GSocket", GSocket = class GSocket {
        static get instance() {
          if (!this._instance || this._instance == null) {
            this._instance = new GSocket();
          }

          return this._instance;
        } //发送php数据的队列


        //当前已重连
        //实例化
        constructor() {
          this.reqPhpSendDataQuene = [];
          this.netNode = null;
          this.socketIndex = null;
          this.PB = null;
          this._globalProtocol = null;
          this.keepAliveHandler = null;
          this.keepAliveTimer = 5 * 60;
          this.keepAliveTimeOuterHandler = null;
          this.keepAliveTimeOuterTimer = 6;
          [this.netNode, this.socketIndex] = (_crd && NetManager === void 0 ? (_reportPossibleCrUseOfNetManager({
            error: Error()
          }), NetManager) : NetManager).getInstance().addNetNode();
          let globalProtocol = new (_crd && GlobalProtocol === void 0 ? (_reportPossibleCrUseOfGlobalProtocol({
            error: Error()
          }), GlobalProtocol) : GlobalProtocol)();

          if (this.netNode) {
            this.netNode.init(new (_crd && WebSocketTask === void 0 ? (_reportPossibleCrUseOfWebSocketTask({
              error: Error()
            }), WebSocketTask) : WebSocketTask)(), globalProtocol, null, (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).handler(this, this.onMessage));
          }

          this.PB = new (_crd && GPBAdaptive === void 0 ? (_reportPossibleCrUseOfGPBAdaptive({
            error: Error()
          }), GPBAdaptive) : GPBAdaptive)();
          this._globalProtocol = globalProtocol; //刷新cmd队列

          (_crd && GCmdMapping === void 0 ? (_reportPossibleCrUseOfGCmdMapping({
            error: Error()
          }), GCmdMapping) : GCmdMapping).initCommonMapping();
        }

        //开启连接
        startConnect(url) {
          if (!url) {
            return;
          }

          if (!this.netNode) {
            [this.netNode, this.socketIndex] = (_crd && NetManager === void 0 ? (_reportPossibleCrUseOfNetManager({
              error: Error()
            }), NetManager) : NetManager).getInstance().addNetNode();
            let globalProtocol = new (_crd && GlobalProtocol === void 0 ? (_reportPossibleCrUseOfGlobalProtocol({
              error: Error()
            }), GlobalProtocol) : GlobalProtocol)();
            this.netNode.init(new (_crd && WebSocketTask === void 0 ? (_reportPossibleCrUseOfWebSocketTask({
              error: Error()
            }), WebSocketTask) : WebSocketTask)(), globalProtocol, null, (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).handler(this, this.onMessage));
          } //发送的数据结构


          let options = {
            url: url,
            autoReconnect: GSocket.maxReConnectNum
          }; //设置成功与错误的回调

          let optionsCallback = {
            error: (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).handler(this, this.errorConnectedCallback),
            connected: (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).handler(this, this.connectedCallback),
            disconnect: (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).handler(this, this.disconnectCallback),
            connectouttime: (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).handler(this, this.connectOutTime)
          };
          (_crd && NetManager === void 0 ? (_reportPossibleCrUseOfNetManager({
            error: Error()
          }), NetManager) : NetManager).getInstance().setNetNodeCallback(this.socketIndex, optionsCallback); //开启连接

          (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
            error: Error()
          }), Logger) : Logger).logNet("GSocket 主动开启连接");
          (_crd && NetManager === void 0 ? (_reportPossibleCrUseOfNetManager({
            error: Error()
          }), NetManager) : NetManager).getInstance().connect(this.socketIndex, options);
        } //断开连接


        closeConnect(param = null) {
          (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
            error: Error()
          }), Logger) : Logger).logNet(`GSocket${param == null ? "主动" : "被动"} 断开连接 `);

          if (this.netNode) {
            this.netNode.setCallbackState(false);
            this.netNode.close();
            this.netNode = null;
            this.reqPhpSendDataQuene = [];
          }
        } //心跳加载


        heartbeatOnLoading(isStart = false) {
          this.stopKeepAlive();

          if (this.netNode) {
            if (isStart) {
              (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
                error: Error()
              }), Logger) : Logger).logNet("GSocket 开启心跳");
              this.netNode.startHeart();
            } else {
              (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
                error: Error()
              }), Logger) : Logger).logNet("GSocket 关闭心跳");
              this.netNode.stopHeart();
            }
          }
        }
        /**
         * 设置心跳间隔
         * @param time 毫秒级别
         */


        setHeartTime(time = null) {
          if (this.netNode) {
            if (time == null) {
              time = 10000 * 3 / 4;
            }

            this.netNode.setHeartTime(time);
          }
        }
        /**
         * 开始保活命令
         * @param isFirst 是否首次开启
         * @returns 
         */


        startKeepAlive(isFirst = false) {
          if (this.keepAliveHandler) {
            return;
          }

          if (isFirst) {
            GSocket.instance.sendKeepAliveCmd();
          }

          this.keepAliveHandler = (_crd && SchedulerManager === void 0 ? (_reportPossibleCrUseOfSchedulerManager({
            error: Error()
          }), SchedulerManager) : SchedulerManager).schedulerInterval(dt => {
            GSocket.instance.sendKeepAliveCmd();
          }, this.keepAliveTimer);
          return;
        } //开启保活超时


        startKeepAliveTimeOuter() {
          this.stopKeepAliveTimeOuter();
          this.keepAliveTimeOuterHandler = (_crd && SchedulerManager === void 0 ? (_reportPossibleCrUseOfSchedulerManager({
            error: Error()
          }), SchedulerManager) : SchedulerManager).schedulerTimeout(dt => {
            GSocket.instance.checkKeepAliveTimeOuter();
          }, this.keepAliveTimeOuterTimer);
        } //停止保活超时检测


        stopKeepAliveTimeOuter() {
          if (this.keepAliveTimeOuterHandler) {
            (_crd && SchedulerManager === void 0 ? (_reportPossibleCrUseOfSchedulerManager({
              error: Error()
            }), SchedulerManager) : SchedulerManager).unscheduleTimeout(this.keepAliveTimeOuterHandler);
          }

          this.keepAliveTimeOuterHandler = null;
        } //发送保活命令


        sendKeepAliveCmd() {
          this.sendMsg((_crd && GlobalCMD === void 0 ? (_reportPossibleCrUseOfGlobalCMD({
            error: Error()
          }), GlobalCMD) : GlobalCMD).PHP_KEEPALIVE, {});
          this.startKeepAliveTimeOuter();
        } //检测保活超时


        checkKeepAliveTimeOuter() {
          this.sendKeepAliveCmd();
          this.startKeepAlive();
        } //停止保活


        stopKeepAlive() {
          this.stopKeepAliveTimeOuter();

          if (this.keepAliveHandler) {
            (_crd && SchedulerManager === void 0 ? (_reportPossibleCrUseOfSchedulerManager({
              error: Error()
            }), SchedulerManager) : SchedulerManager).unscheduleInterval(this.keepAliveHandler);
          }

          this.keepAliveHandler = null;
        } //连接成功回调


        connectedCallback(info) {
          (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
            error: Error()
          }), Logger) : Logger).logNet("GSocket 连接成功开启保活会话,并开始登录");
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).SYS_CLOSE_NETLOADING);
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_GOTO_START_LOGIN);
        } //连接超时的回调


        connectOutTime(endReconnerNumber) {
          (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
            error: Error()
          }), Logger) : Logger).logNet(`GSocket连接超时：次数：${endReconnerNumber}`);
          let txt = (_crd && GameTxt === void 0 ? (_reportPossibleCrUseOfGameTxt({
            error: Error()
          }), GameTxt) : GameTxt).netWorkTimeout;

          if (endReconnerNumber == GSocket.maxReConnectNum) {
            txt = (_crd && GameTxt === void 0 ? (_reportPossibleCrUseOfGameTxt({
              error: Error()
            }), GameTxt) : GameTxt).netWorkTimeout;
          }

          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).SYS_TOAST_TIP, {
            content: txt
          });
        } //连接错误回调（


        errorConnectedCallback(connectOptions, event, endReconnerNumber) {
          (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
            error: Error()
          }), Logger) : Logger).logNet(`GSocket连接错误回调`);
        } //连接关闭的回调


        disconnectCallback(endReconnerNumber) {
          (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
            error: Error()
          }), Logger) : Logger).logNet(`连接失败 是否重连：${endReconnerNumber > 0} 剩余重连次数：${endReconnerNumber}`); //先停止保活

          GSocket.instance.stopKeepAlive();

          if (endReconnerNumber <= 0 || (_crd && Network === void 0 ? (_reportPossibleCrUseOfNetwork({
            error: Error()
          }), Network) : Network).instance.state == (_crd && NetworkState === void 0 ? (_reportPossibleCrUseOfNetworkState({
            error: Error()
          }), NetworkState) : NetworkState).OFFLINE || (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
            error: Error()
          }), GCache) : GCache).User.getLoginState() != (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
            error: Error()
          }), GConstants) : GConstants).UserLoginState.LoginSuccess) {
            //非重连 或者 无网络 或者从来没有连接成功过
            GSocket.instance.closeConnect(true);
            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
              error: Error()
            }), AppEvent) : AppEvent).SYS_TOAST_TIP, {
              content: (_crd && GameTxt === void 0 ? (_reportPossibleCrUseOfGameTxt({
                error: Error()
              }), GameTxt) : GameTxt).netWorkError
            });
            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
              error: Error()
            }), AppEvent) : AppEvent).SYS_CLOSE_NETLOADING);
            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
              error: Error()
            }), AppEvent) : AppEvent).LOGIN_GOTO_SHOW, {
              state: "reconnect_fail"
            });
          } else {
            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
              error: Error()
            }), AppEvent) : AppEvent).SYS_SHOW_NETLOADING);
            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
              error: Error()
            }), AppEvent) : AppEvent).SYS_TOAST_TIP, {
              content: (_crd && GameTxt === void 0 ? (_reportPossibleCrUseOfGameTxt({
                error: Error()
              }), GameTxt) : GameTxt).netWorkReconnect
            });
          }
        }
        /**发起一个请求 */


        sendMsg(cmd, body, timeout) {
          if (!cmd) {
            return;
          }

          if (!this.isConnected()) {
            return;
          }

          let _cmd = cmd > 0 && (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).number_formatToHex(cmd) || cmd;

          (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
            error: Error()
          }), Logger) : Logger).logNet(`CMD[10进制] = ${cmd} CMD[16进制] = ${_cmd}`);

          if (cmd < (_crd && GlobalCMDHead === void 0 ? (_reportPossibleCrUseOfGlobalCMDHead({
            error: Error()
          }), GlobalCMDHead) : GlobalCMDHead).PHP_CMD_CONSTANT) {
            (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
              error: Error()
            }), Logger) : Logger).logNet("小于==>>>此为游戏请求");
            let [pCmd, pPackageInfo] = this.PB.generatPacket(cmd, body); // Logger.logNet("发送的头：===>" + pCmd)

            (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).dump(pPackageInfo);
            let isCompress = this.PB.isCompressByHeadCmd(pCmd);
            let bodyPacket = this.PB.getSendPacket(pCmd, pPackageInfo && pPackageInfo.action || null, null, pPackageInfo, isCompress, timeout);

            if (bodyPacket) {
              (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                error: Error()
              }), Utils) : Utils).dump(bodyPacket);
              this.request(bodyPacket);
            }
          } else {
            (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
              error: Error()
            }), Logger) : Logger).logNet("大于==>>>此为PHP请求");
            let [pCmd, pPackageInfo] = this.PB.generatPacket(cmd, body);

            if (pCmd) {
              // Logger.logNet("发送的头：===>" + pCmd)
              // Utils.dump(pPackageInfo)
              let isCompress = this.PB.isCompressByHeadCmd(pCmd);
              let bodyPacket = this.PB.getSendPacket(pCmd, pPackageInfo && pPackageInfo.action || null, null, pPackageInfo, isCompress, timeout);

              if (bodyPacket) {
                // Logger.logNet("输出===>")
                // Utils.dump(bodyPacket)
                this.reqPhpSendDataQuene[pPackageInfo["seq"]] = pPackageInfo;
                this.request(bodyPacket);
              }
            } else {
              (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
                error: Error()
              }), Logger) : Logger).logNet(`sendMbsg：包装数据有误 CMD[16进制] = ${_cmd}`);
            }
          }
        } //统一事件回调


        onMessage(response) {
          var _response$data, _response$data$body;

          if (response.headCmd == (_crd && GlobalCMDHead === void 0 ? (_reportPossibleCrUseOfGlobalCMDHead({
            error: Error()
          }), GlobalCMDHead) : GlobalCMDHead).SERVER_HEART_RESPONSE) {
            // Logger.logNet("[GSocket]:onMessage 心跳回包")
            return;
          }

          (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
            error: Error()
          }), Logger) : Logger).logNet(`[GSocket]:onMessage 收到数据 CMD[10进制] = ${response.headCmd} CMD[16进制] = ${(_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).number_formatToHex(response.headCmd)}`); // Utils.dump(response.data)
          //寻找原请求数据

          if ((response == null ? void 0 : (_response$data = response.data) == null ? void 0 : (_response$data$body = _response$data.body) == null ? void 0 : _response$data$body.seq) != null) {
            // Utils.dump(this.reqPhpSendDataQuene[response.data.body.seq])
            response.reqData = this.reqPhpSendDataQuene[response.data.body.seq] || null;
            this.reqPhpSendDataQuene[response.data.body.seq] = null;
          } //如果是命令RESPONSE_PHP_REQUEST_NEW 或者 RESPONSE_HALL_LOGIN_SUCCESS 返回的数据，则需要缓存


          if (response.headCmd == (_crd && GlobalCMDHead === void 0 ? (_reportPossibleCrUseOfGlobalCMDHead({
            error: Error()
          }), GlobalCMDHead) : GlobalCMDHead).RESPONSE_PHP_REQUEST_NEW) {
            ReceivePHPDataQueve.push(response);
          } else if (response.headCmd == (_crd && GlobalCMDHead === void 0 ? (_reportPossibleCrUseOfGlobalCMDHead({
            error: Error()
          }), GlobalCMDHead) : GlobalCMDHead).RESPONSE_HALL_LOGIN_SUCCESS) {
            ReceivePHPDataQueve.push(response);
          } else {
            //及时发送
            //绑定的事件ID
            let eventID = null;
            /** 先从headCmd绑定事件中查找 找不到再在cmd绑定的事件中找*/

            eventID = (_crd && GCmdMapping === void 0 ? (_reportPossibleCrUseOfGCmdMapping({
              error: Error()
            }), GCmdMapping) : GCmdMapping).getEventIDByHeadCmd(response.headCmd);

            if (!eventID) {
              eventID = (_crd && GCmdMapping === void 0 ? (_reportPossibleCrUseOfGCmdMapping({
                error: Error()
              }), GCmdMapping) : GCmdMapping).getEventIDByCmd(response.headCmd);
            }

            if (eventID) {
              (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
                error: Error()
              }), EventManager) : EventManager).dispatch(eventID, response.data, response.reqData);
            } else {
              (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
                error: Error()
              }), Logger) : Logger).logNet(`[GSocket]:onMessage 收到 HeadCmd[10进制] = ${response.headCmd} HeadCmd[16进制] = ${(_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                error: Error()
              }), Utils) : Utils).number_formatToHex(response.headCmd)} 的消息 但是没有找到对应的事件绑定`);
            }
          }
        }
        /** 每1ms检查一次接收队列，并处理其中的数据(每次处理3条) */


        checkReceiveQueve() {
          if (ReceivePHPDataQueve.length > 0) {
            let count = 0;

            while (count < ReceiveMaxDetail && ReceivePHPDataQueve.length > 0) {
              count++; //绑定的事件ID

              let eventID = null;
              let respData = ReceivePHPDataQueve.shift(); //计算Action

              let action = null;

              if (respData.data && respData.data["cmd"]) {
                action = (_crd && GCmdMapping === void 0 ? (_reportPossibleCrUseOfGCmdMapping({
                  error: Error()
                }), GCmdMapping) : GCmdMapping).getActionByCmd(respData.data["cmd"]);
              }

              respData.action = action;
              /** 先从headCmd绑定事件中查找 找不到再在cmd绑定的事件中找*/

              eventID = (_crd && GCmdMapping === void 0 ? (_reportPossibleCrUseOfGCmdMapping({
                error: Error()
              }), GCmdMapping) : GCmdMapping).getEventIDByHeadCmd(respData.headCmd);

              if (!eventID) {
                eventID = (_crd && GCmdMapping === void 0 ? (_reportPossibleCrUseOfGCmdMapping({
                  error: Error()
                }), GCmdMapping) : GCmdMapping).getEventIDByCmd(respData.headCmd);
              }

              if (eventID) {
                (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
                  error: Error()
                }), EventManager) : EventManager).dispatch(eventID, respData.data, respData.reqData);
              } else {
                (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
                  error: Error()
                }), Logger) : Logger).logNet(`[GSocket]:onMessage 收到action = ${respData.action} 的消息 但是没有找到对应的事件绑定`);
              }
            }
          }
        }
        /** 调用Node发送 */
        // send(buf: NetData,force: boolean = false): number {
        //     return NetManager.getInstance().send(this.socketIndex,buf,force)
        // }

        /** 发起请求，并在在结果返回时调用指定好的回调函数 */


        request(reqProtocol, force = false) {
          (_crd && NetManager === void 0 ? (_reportPossibleCrUseOfNetManager({
            error: Error()
          }), NetManager) : NetManager).getInstance().request(this.socketIndex, reqProtocol, force);
        }
        /** 同request，但在request之前会先判断队列中是否已有rspCmd，如有重复的则直接返回 */


        requestUnique(reqProtocol, force = false) {
          return (_crd && NetManager === void 0 ? (_reportPossibleCrUseOfNetManager({
            error: Error()
          }), NetManager) : NetManager).getInstance().requestUnique(this.socketIndex, reqProtocol, force);
        }
        /** 获取连接状态 */


        isConnected() {
          if (this.netNode) {
            return this.netNode.isConnected();
          }

          return false;
        }

      });

      GSocket._instance = null;
      GSocket.maxReConnectNum = 2;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=353f7978f565fb0ec5e1c884c236262eca5f7cb0.js.map