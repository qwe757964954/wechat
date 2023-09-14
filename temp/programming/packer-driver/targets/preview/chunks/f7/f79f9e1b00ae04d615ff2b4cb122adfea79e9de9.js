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
          var globalProtocol = new (_crd && GlobalProtocol === void 0 ? (_reportPossibleCrUseOfGlobalProtocol({
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
            var globalProtocol = new (_crd && GlobalProtocol === void 0 ? (_reportPossibleCrUseOfGlobalProtocol({
              error: Error()
            }), GlobalProtocol) : GlobalProtocol)();
            this.netNode.init(new (_crd && WebSocketTask === void 0 ? (_reportPossibleCrUseOfWebSocketTask({
              error: Error()
            }), WebSocketTask) : WebSocketTask)(), globalProtocol, null, (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).handler(this, this.onMessage));
          } //发送的数据结构


          var options = {
            url: url,
            autoReconnect: GSocket.maxReConnectNum
          }; //设置成功与错误的回调

          var optionsCallback = {
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


        closeConnect(param) {
          if (param === void 0) {
            param = null;
          }

          (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
            error: Error()
          }), Logger) : Logger).logNet("GSocket" + (param == null ? "主动" : "被动") + " \u65AD\u5F00\u8FDE\u63A5 ");

          if (this.netNode) {
            this.netNode.setCallbackState(false);
            this.netNode.close();
            this.netNode = null;
            this.reqPhpSendDataQuene = [];
          }
        } //心跳加载


        heartbeatOnLoading(isStart) {
          if (isStart === void 0) {
            isStart = false;
          }

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


        setHeartTime(time) {
          if (time === void 0) {
            time = null;
          }

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


        startKeepAlive(isFirst) {
          if (isFirst === void 0) {
            isFirst = false;
          }

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
          }), Logger) : Logger).logNet("GSocket\u8FDE\u63A5\u8D85\u65F6\uFF1A\u6B21\u6570\uFF1A" + endReconnerNumber);
          var txt = (_crd && GameTxt === void 0 ? (_reportPossibleCrUseOfGameTxt({
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
          }), Logger) : Logger).logNet("GSocket\u8FDE\u63A5\u9519\u8BEF\u56DE\u8C03");
        } //连接关闭的回调


        disconnectCallback(endReconnerNumber) {
          (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
            error: Error()
          }), Logger) : Logger).logNet("\u8FDE\u63A5\u5931\u8D25 \u662F\u5426\u91CD\u8FDE\uFF1A" + (endReconnerNumber > 0) + " \u5269\u4F59\u91CD\u8FDE\u6B21\u6570\uFF1A" + endReconnerNumber); //先停止保活

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

          var _cmd = cmd > 0 && (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).number_formatToHex(cmd) || cmd;

          (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
            error: Error()
          }), Logger) : Logger).logNet("CMD[10\u8FDB\u5236] = " + cmd + " CMD[16\u8FDB\u5236] = " + _cmd);

          if (cmd < (_crd && GlobalCMDHead === void 0 ? (_reportPossibleCrUseOfGlobalCMDHead({
            error: Error()
          }), GlobalCMDHead) : GlobalCMDHead).PHP_CMD_CONSTANT) {
            (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
              error: Error()
            }), Logger) : Logger).logNet("小于==>>>此为游戏请求");
            var [pCmd, pPackageInfo] = this.PB.generatPacket(cmd, body); // Logger.logNet("发送的头：===>" + pCmd)

            (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).dump(pPackageInfo);
            var isCompress = this.PB.isCompressByHeadCmd(pCmd);
            var bodyPacket = this.PB.getSendPacket(pCmd, pPackageInfo && pPackageInfo.action || null, null, pPackageInfo, isCompress, timeout);

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
            var [_pCmd, _pPackageInfo] = this.PB.generatPacket(cmd, body);

            if (_pCmd) {
              // Logger.logNet("发送的头：===>" + pCmd)
              // Utils.dump(pPackageInfo)
              var _isCompress = this.PB.isCompressByHeadCmd(_pCmd);

              var _bodyPacket = this.PB.getSendPacket(_pCmd, _pPackageInfo && _pPackageInfo.action || null, null, _pPackageInfo, _isCompress, timeout);

              if (_bodyPacket) {
                // Logger.logNet("输出===>")
                // Utils.dump(bodyPacket)
                this.reqPhpSendDataQuene[_pPackageInfo["seq"]] = _pPackageInfo;
                this.request(_bodyPacket);
              }
            } else {
              (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
                error: Error()
              }), Logger) : Logger).logNet("sendMbsg\uFF1A\u5305\u88C5\u6570\u636E\u6709\u8BEF CMD[16\u8FDB\u5236] = " + _cmd);
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
          }), Logger) : Logger).logNet("[GSocket]:onMessage \u6536\u5230\u6570\u636E CMD[10\u8FDB\u5236] = " + response.headCmd + " CMD[16\u8FDB\u5236] = " + (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).number_formatToHex(response.headCmd)); // Utils.dump(response.data)
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
            var eventID = null;
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
              }), Logger) : Logger).logNet("[GSocket]:onMessage \u6536\u5230 HeadCmd[10\u8FDB\u5236] = " + response.headCmd + " HeadCmd[16\u8FDB\u5236] = " + (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                error: Error()
              }), Utils) : Utils).number_formatToHex(response.headCmd) + " \u7684\u6D88\u606F \u4F46\u662F\u6CA1\u6709\u627E\u5230\u5BF9\u5E94\u7684\u4E8B\u4EF6\u7ED1\u5B9A");
            }
          }
        }
        /** 每1ms检查一次接收队列，并处理其中的数据(每次处理3条) */


        checkReceiveQueve() {
          if (ReceivePHPDataQueve.length > 0) {
            var count = 0;

            while (count < ReceiveMaxDetail && ReceivePHPDataQueve.length > 0) {
              count++; //绑定的事件ID

              var eventID = null;
              var respData = ReceivePHPDataQueve.shift(); //计算Action

              var action = null;

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
                }), Logger) : Logger).logNet("[GSocket]:onMessage \u6536\u5230action = " + respData.action + " \u7684\u6D88\u606F \u4F46\u662F\u6CA1\u6709\u627E\u5230\u5BF9\u5E94\u7684\u4E8B\u4EF6\u7ED1\u5B9A");
              }
            }
          }
        }
        /** 调用Node发送 */
        // send(buf: NetData,force: boolean = false): number {
        //     return NetManager.getInstance().send(this.socketIndex,buf,force)
        // }

        /** 发起请求，并在在结果返回时调用指定好的回调函数 */


        request(reqProtocol, force) {
          if (force === void 0) {
            force = false;
          }

          (_crd && NetManager === void 0 ? (_reportPossibleCrUseOfNetManager({
            error: Error()
          }), NetManager) : NetManager).getInstance().request(this.socketIndex, reqProtocol, force);
        }
        /** 同request，但在request之前会先判断队列中是否已有rspCmd，如有重复的则直接返回 */


        requestUnique(reqProtocol, force) {
          if (force === void 0) {
            force = false;
          }

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
//# sourceMappingURL=f79f9e1b00ae04d615ff2b4cb122adfea79e9de9.js.map