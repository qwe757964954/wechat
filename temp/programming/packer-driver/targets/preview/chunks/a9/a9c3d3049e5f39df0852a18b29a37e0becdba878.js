System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, GCache, AppEvent, ClientInfo, Utils, Encrypt, Logger, EventManager, Network, NetworkState, BaseControll, Platform, GlobalCMD, ReportServers, _crd;

  function _reportPossibleCrUseOfGCache(extras) {
    _reporterNs.report("GCache", "../../cache/GCache", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAppEvent(extras) {
    _reporterNs.report("AppEvent", "../../config/AppEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfClientInfo(extras) {
    _reporterNs.report("ClientInfo", "../../config/GameConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfinf_ClickReport(extras) {
    _reporterNs.report("inf_ClickReport", "../../framework/InterfaceDefines", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUtils(extras) {
    _reporterNs.report("Utils", "../../framework/Utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEncrypt(extras) {
    _reporterNs.report("Encrypt", "../../framework/crypto/Encrypto", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLogger(extras) {
    _reporterNs.report("Logger", "../../framework/log/Logger", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventManager(extras) {
    _reporterNs.report("EventManager", "../../framework/manager/EventManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNetwork(extras) {
    _reporterNs.report("Network", "../../framework/network/NetState", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNetworkState(extras) {
    _reporterNs.report("NetworkState", "../../framework/network/NetState", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseControll(extras) {
    _reporterNs.report("BaseControll", "../../framework/vc/BaseController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlatform(extras) {
    _reporterNs.report("Platform", "../../platform/Platform", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGlobalCMD(extras) {
    _reporterNs.report("GlobalCMD", "../gnet/GlobalCMD", _context.meta, extras);
  }

  _export("ReportServers", void 0);

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
      ClientInfo = _unresolved_4.ClientInfo;
    }, function (_unresolved_5) {
      Utils = _unresolved_5.Utils;
    }, function (_unresolved_6) {
      Encrypt = _unresolved_6.Encrypt;
    }, function (_unresolved_7) {
      Logger = _unresolved_7.Logger;
    }, function (_unresolved_8) {
      EventManager = _unresolved_8.EventManager;
    }, function (_unresolved_9) {
      Network = _unresolved_9.Network;
      NetworkState = _unresolved_9.NetworkState;
    }, function (_unresolved_10) {
      BaseControll = _unresolved_10.BaseControll;
    }, function (_unresolved_11) {
      Platform = _unresolved_11.Platform;
    }, function (_unresolved_12) {
      GlobalCMD = _unresolved_12.GlobalCMD;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ca027BrsbdCZKDj4y1vEkvC", "ReportServers", undefined);

      _export("ReportServers", ReportServers = class ReportServers extends (_crd && BaseControll === void 0 ? (_reportPossibleCrUseOfBaseControll({
        error: Error()
      }), BaseControll) : BaseControll) {
        constructor() {
          super(...arguments);
          this._maxSize = 10;
          this._tempClientClickList = [];
          this._lastReportTime = 0;
          this._reportTimeSpance = void 0;
          this._reportRows = 0;
          this._maxRows = 1000;
        }

        static getInstance() {
          if (!this._instance || this._instance == null) {
            this._instance = new ReportServers("ReportServers");
          }

          this._instance.updateLoggerReportInfo();

          return this._instance;
        }

        static init() {
          if (this._instance) {
            this._instance.clear();
          }

          this._instance = null;
          ReportServers.getInstance();
          return;
        }
        /** 一次最多条 */


        /**初始化添加事件绑定 */
        onInitModuleEvent() {
          //登录状态改变(更新客户端数据上报的信息)
          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).LOGIN_STATE_CHANGE, this.updateLoggerReportInfo); //客户端点击事件请求

          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).REPORT_CLIENT_CLICK, this.reqReportClick); //点击事件响应

          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).REPORT_RESP_CLIENT_CLICK, this.respReportClick);
        }
        /**
         * 更新数据上报的基础信息
         */


        updateLoggerReportInfo() {
          var uid = null;
          var platform = (_crd && Platform === void 0 ? (_reportPossibleCrUseOfPlatform({
            error: Error()
          }), Platform) : Platform).ClientPlatform;
          var sdkVersion = (_crd && Platform === void 0 ? (_reportPossibleCrUseOfPlatform({
            error: Error()
          }), Platform) : Platform).SDKVersion;

          if ((_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
            error: Error()
          }), GCache) : GCache) && (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
            error: Error()
          }), GCache) : GCache).User) {
            uid = (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
              error: Error()
            }), GCache) : GCache).User.getUserMid();
          }

          var info = "[HallVer:" + (_crd && ClientInfo === void 0 ? (_reportPossibleCrUseOfClientInfo({
            error: Error()
          }), ClientInfo) : ClientInfo).HallVer + ",Uid:" + uid + "]";
          (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
            error: Error()
          }), Logger) : Logger).ReportConf.BaseInfo = info;
        }
        /**
         * 请求事件上报接口
         * @param event 
         * @param param 
         * @returns 
         */


        reqReportClick(event, param) {
          if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).table_isEmpty(param) == true) {
            return;
          }

          if (param.eventID == null || (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).string_isEmpty(param.eventID)) {
            return;
          }

          var actionID = Number(param.eventID);

          var item = this.__genPackageBody(actionID, param.body);

          this._tempClientClickList.push(item);

          if (this.__checkCanReport(param["isFouce"]) == false) {
            return;
          } //开始上报


          this.__startReport();
        }
        /**
         * 上报请求响应
         * @param event 
         * @param isSuccess 
         * @param respData 
         * @param reqData 
         */


        respReportClick(event, isSuccess, respData, reqData) {
          if (isSuccess) {
            this._lastReportTime = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).timeEx();

            this._tempClientClickList.splice(0, this._reportRows);

            console.log("上报成功:", reqData, respData);
          } else {
            console.log("上报失败:", reqData, respData);
          }
        }
        /** 执行上报 */


        __startReport() {
          var max = this._tempClientClickList.length >= this._maxSize ? this._maxSize : this._tempClientClickList.length;

          var tempList = this._tempClientClickList.slice(0, max);

          if (tempList.length <= 0) {
            return;
          } //如果条数太多了,久未上报成功,那就清空


          if (tempList.length > this._maxRows) {
            console.log("上报数据:清空");

            this._tempClientClickList.splice(0, tempList.length);

            return;
          }

          this.print("开始上报客户端点击事件==>", tempList);
          this._reportRows = tempList.length;
          var appid = (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
            error: Error()
          }), GCache) : GCache).User.getUserAppID();
          var body = {
            list: (_crd && Encrypt === void 0 ? (_reportPossibleCrUseOfEncrypt({
              error: Error()
            }), Encrypt) : Encrypt).JsonEncode(tempList),
            appid: appid
          };
          var sendMsg = {
            cmd: (_crd && GlobalCMD === void 0 ? (_reportPossibleCrUseOfGlobalCMD({
              error: Error()
            }), GlobalCMD) : GlobalCMD).PHP_CLICK_REPORT,
            body: body
          };
          this.print("reqReportClick", sendMsg);
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_SEND_MSG, sendMsg);
        }
        /**
         * 检查是否可以上报
         * @param isFouce 是否强制
         * @returns 
         */


        __checkCanReport(isFouce) {
          if (isFouce === void 0) {
            isFouce = false;
          }

          //空数据、网络异常时不上报
          if (this._tempClientClickList.length == 0 || (_crd && Network === void 0 ? (_reportPossibleCrUseOfNetwork({
            error: Error()
          }), Network) : Network).instance.state != (_crd && NetworkState === void 0 ? (_reportPossibleCrUseOfNetworkState({
            error: Error()
          }), NetworkState) : NetworkState).ONLINE) {
            return false;
          } // 非强制上报时数据不足不上报


          if (isFouce == false && this._tempClientClickList.length < this._maxSize) {
            return false;
          } //如果上次上报事件不为空 且 当前时间比上次上报


          if (this._lastReportTime != 0 && (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).timeEx() - this._lastReportTime < this._reportTimeSpance) {
            return false;
          }

          return true;
        }
        /**
         * 组装数据
         * @param eventID 
         * @param param 
         * @returns 
         */


        __genPackageBody(eventID, param) {
          if (param === void 0) {
            param = null;
          }

          console.log("包装数据:", eventID, param);
          var body = {
            act_id: eventID,
            lts_at: (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).time()
          };

          if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).table_isEmpty(param) == false) {
            // --渗透参数
            body["gsubname"] = (_crd && Encrypt === void 0 ? (_reportPossibleCrUseOfEncrypt({
              error: Error()
            }), Encrypt) : Encrypt).JsonEncode(param);
          }

          return body;
        }

      });

      ReportServers._instance = null;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a9c3d3049e5f39df0852a18b29a37e0becdba878.js.map