System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, AppEvent, BaseControll, ReportServers, _crd;

  function _reportPossibleCrUseOfAppEvent(extras) {
    _reporterNs.report("AppEvent", "../../config/AppEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfinf_ClickReport(extras) {
    _reporterNs.report("inf_ClickReport", "../../framework/InterfaceDefines", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHttpRequest(extras) {
    _reporterNs.report("HttpRequest", "../../framework/network/HttpRequest", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseControll(extras) {
    _reporterNs.report("BaseControll", "../../framework/vc/BaseController", _context.meta, extras);
  }

  _export("ReportServers", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      AppEvent = _unresolved_2.AppEvent;
    }, function (_unresolved_3) {
      BaseControll = _unresolved_3.BaseControll;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ca027BrsbdCZKDj4y1vEkvC", "ReportServers", undefined);

      _export("ReportServers", ReportServers = class ReportServers extends (_crd && BaseControll === void 0 ? (_reportPossibleCrUseOfBaseControll({
        error: Error()
      }), BaseControll) : BaseControll) {
        constructor(...args) {
          super(...args);
          this._maxSize = 50;
          this._tempClientClickList = [];
          this._lastReportTime = 0;
          this._reportTimeSpance = void 0;
          this._handlerHttpReport = null;
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
          // //登录状态改变(更新客户端数据上报的信息)
          // this.addModelListener(AppEvent.LOGIN_STATE_CHANGE, this.updateLoggerReportInfo)
          // //更新客户端数据上报的信息
          // this.addModelListener(AppEvent.REPORT_UPDATE_LOGGER_REPORT_INFO, this.updateLoggerReportInfo);
          //客户端点击事件
          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).REPORT_CLIENT_CLICK, this.reqReportClick); // //上报支付订单
          // this.addModelListener(AppEvent.NET_REQ_REPORT_PAY_ORDER, this.reqReportPayOrder);
          // //支付订单上报回调
          // this.addModelListener(AppEvent.NET_FORWARD_REPORT_PAY_ORDER, this.respReportPayOrder);
        } // /** 更新数据上报的基础信息 */


        updateLoggerReportInfo() {// let uid = null;
          // let platform = Platform.ClientPlatform;
          // let sdkVersion = Platform.SDKVersion;
          // if (GCache && GCache.User) {
          // 	uid = GCache.User.getUserMid();
          // }
          // let info = `[HallVer:${ClientInfo.HallVer},Uid:${uid}]`;
          // Logger.ReportConf.BaseInfo = info;
        }
        /** 请求客户端点击上报 */


        reqReportClick(event, param) {// 	if (Utils.table_isEmpty(param) == true) {
          // 		return;
          // 	}
          // 	if (param.eventID == null || Number(param.eventID) == NaN) {
          // 		return;
          // 	}
          // 	let actionID = Number(param.eventID);
          // 	let item = this.__genPackageBody(actionID, param.body);
          // 	// item["_index_"] = Utils.timeEx();
          // 	this._tempClientClickList.push(item);
          // 	if (this.__checkCanReport(param["isFouce"]) == false) {
          // 		return;
          // 	}
          // 	//开始上报
          // 	this.__startReport();
        } // /** 执行上报 */
        // private __startReport() {
        // 	let max = (this._tempClientClickList.length >= this._maxSize ? this._maxSize : this._tempClientClickList.length);
        // 	let tempList = this._tempClientClickList.slice(0, max);
        // 	if (tempList.length <= 0) {
        // 		return;
        // 	}
        // 	this.print("开始上报==>", tempList)
        // 	let hostUrl = GameConfig.instance.AppUrlConf.Web;
        // 	if (!this._handlerHttpReport) {
        // 		this._handlerHttpReport = new HttpRequest();
        // 	} else {
        // 		this._handlerHttpReport.abort();
        // 	}
        // 	this._handlerHttpReport.server = hostUrl;
        // 	this._handlerHttpReport.timeout = 5000;
        // 	this.print("开始上报客户端点击事件:", tempList);
        // 	let body = {
        // 		evt_list: tempList,
        // 		channel: ClientInfo.ChannelId,
        // 		uid: GCache.User.getUserMid(),
        // 	}
        // 	let packageConf = GCmdMapping.getReqPacketByEvent(AppEvent.NET_CMD_REQ_ClIENT_REPORT);
        // 	if (!packageConf) {
        // 		this.print(`__startReport 未找到相关映射 eventCode = ${AppEvent.NET_CMD_REQ_ClIENT_REPORT}`);
        // 		return;
        // 	}
        // 	this.print("当前映射:", packageConf)
        // 	let newBody: ArrayBuffer = GPBAdaptive.instance.encodePacket(body, packageConf.packageID, packageConf.funcName);
        // 	if (!newBody) {
        // 		this.print(`__startReport 初次包装的数据结构体为空 解析函数为 = ${packageConf.funcName}`);
        // 		return;
        // 	}
        // 	let byteBuffer = pbkiller.ByteBuffer.wrap(newBody); //body.toString("binary")// Encrypt.arrayBufferToString(_body, true);
        // 	let str = byteBuffer.toString("base64");
        // 	let reqParam = {
        // 		rpcName: packageConf.rpcName,
        // 		param: str
        // 	}
        // 	let content = Encrypt.JsonEncode(reqParam);
        // 	this.print("请求的数据===>", reqParam,)
        // 	let self = this;
        // 	this._handlerHttpReport.post(hostUrl, content, (respData) => {
        // 		let res = Encrypt.JsonDecode(respData);
        // 		console.log("返回成功的数据：", res);
        // 		if (res && res["code"] == 0) {
        // 			if (self._tempClientClickList.length >= max) {
        // 				self._tempClientClickList.splice(0, max);
        // 			}
        // 			self._lastReportTime = Utils.timeEx();
        // 		}
        // 	}, (respData) => {
        // 		console.log("返回失败的数据：", respData);
        // 	})
        // }
        // /** 检查是否可以上报 */
        // private __checkCanReport(isFouce: boolean = false) {
        // 	//空数据、网络异常时不上报
        // 	if (this._tempClientClickList.length == 0 || Network.instance.state != NetworkState.ONLINE) {
        // 		return false;
        // 	}
        // 	// 非强制上报时数据不足
        // 	if (isFouce == false && this._tempClientClickList.length < this._maxSize) {
        // 		return false;
        // 	}
        // 	if (this._lastReportTime != 0 && (Utils.timeEx() - this._lastReportTime) < this._reportTimeSpance) {
        // 		return false;
        // 	}
        // 	return true;
        // }
        // /** 包装数据 */
        // private __genPackageBody(eventID, param = null) {
        // 	let body = {
        // 		act_id: eventID,
        // 		lts_at: Utils.time(),
        // 	};
        // 	if (Utils.table_isEmpty(param) == false) {
        // 		// --渗透参数
        // 		body["gsubname"] = Encrypt.JsonEncode(param);
        // 	}
        // 	return body;
        // }
        // /** 支付订单上报 */
        // reqReportPayOrder(event, reportOrderData) {
        // 	this.print("支付订单上报==>", reportOrderData)
        // }
        // /** 支付订单上报回调 */
        // respReportPayOrder(event, isSuccess, respData, reqData) {
        // 	this.print("支付订单上报回调==>" + isSuccess);
        // 	this.dump(respData);
        // }


      });

      ReportServers._instance = null;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=7a010894b492701c86801f0498006c2c6780e784.js.map