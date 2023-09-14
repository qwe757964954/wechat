System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, GCache, AppEvent, ClientInfo, GConstants, GameTxt, Logger, EventManager, Utils, BaseControll, Platform, GlobalCMD, OrderRecode, PayAgent, _crd, PayAgentState, PayReqSceneiIDRecord;

  function _reportPossibleCrUseOfGCache(extras) {
    _reporterNs.report("GCache", "../cache/GCache", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAppEvent(extras) {
    _reporterNs.report("AppEvent", "../config/AppEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfClientInfo(extras) {
    _reporterNs.report("ClientInfo", "../config/GameConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGConstants(extras) {
    _reporterNs.report("GConstants", "../config/GameConstant", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameTxt(extras) {
    _reporterNs.report("GameTxt", "../config/GameTxt", _context.meta, extras);
  }

  function _reportPossibleCrUseOfinf_OrderRecord(extras) {
    _reporterNs.report("inf_OrderRecord", "../framework/InterfaceDefines", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLogger(extras) {
    _reporterNs.report("Logger", "../framework/log/Logger", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventManager(extras) {
    _reporterNs.report("EventManager", "../framework/manager/EventManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUtils(extras) {
    _reporterNs.report("Utils", "../framework/Utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseControll(extras) {
    _reporterNs.report("BaseControll", "../framework/vc/BaseController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlatform(extras) {
    _reporterNs.report("Platform", "../platform/Platform", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGlobalCMD(extras) {
    _reporterNs.report("GlobalCMD", "./gnet/GlobalCMD", _context.meta, extras);
  }

  _export({
    OrderRecode: void 0,
    PayAgent: void 0
  });

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
      GConstants = _unresolved_5.GConstants;
    }, function (_unresolved_6) {
      GameTxt = _unresolved_6.GameTxt;
    }, function (_unresolved_7) {
      Logger = _unresolved_7.Logger;
    }, function (_unresolved_8) {
      EventManager = _unresolved_8.EventManager;
    }, function (_unresolved_9) {
      Utils = _unresolved_9.Utils;
    }, function (_unresolved_10) {
      BaseControll = _unresolved_10.BaseControll;
    }, function (_unresolved_11) {
      Platform = _unresolved_11.Platform;
    }, function (_unresolved_12) {
      GlobalCMD = _unresolved_12.GlobalCMD;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2a36dm0sztExamITPevVqWW", "PayAgent", undefined);

      PayAgentState = {
        Check: 0,
        Start: 1,
        Waiting: 2,
        DoOrder: 3,
        End: 4
      };
      /** 订单记录 */

      _export("OrderRecode", OrderRecode = class OrderRecode extends (_crd && BaseControll === void 0 ? (_reportPossibleCrUseOfBaseControll({
        error: Error()
      }), BaseControll) : BaseControll) {
        constructor() {
          super(...arguments);
          this._handlerSendScheduler = null;
          this._OuttimeOrderMap = {};
          this._OuttimeHandlerMap = {};
          this._FailOrderMap = {};
          this._checkTime = 5;
          this.maxOuttime = 4;
          this.maxFailNum = 2;

          this.print = function () {
            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }

            (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
              error: Error()
            }), Logger) : Logger).logPay(5, ...args);
          };
        }

        static get instance() {
          if (!this._instance || this._instance == null) {
            this._instance = new OrderRecode("OrderRecode");
          }

          return this._instance;
        }
        /** 定时检查句柄 */


        onInitModuleEvent() {
          //登录状态变化
          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).LOGIN_STATE_CHANGE, this.loginStateChange); //订单回调

          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_FORWARD_PAYMENT_ORDER, this.respForWardOrder);
        }
        /** 插入一个订单 */


        setOrder(id, order, reportData, isNotRun) {
          if (isNotRun === void 0) {
            isNotRun = false;
          }

          if (id && order) {
            //达到最大失败次数 不再请求
            if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).number_valueOf(this._FailOrderMap[id]) > this.maxFailNum) {
              this.print("Fail:\u5F53\u524D\u8BA2\u5355code:" + id + " \u5DF2\u8FBE\u6700\u5927\u5931\u8D25\u6B21\u6570\uFF0C\u505C\u6B62\u8BF7\u6C42\uFF01\uFF01\uFF01", order, reportData);
              var txt = "Error:创建订单失败，已达失败上限！";
              (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
                error: Error()
              }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
                error: Error()
              }), AppEvent) : AppEvent).SYS_TOAST_TIP, {
                content: txt
              });

              if (OrderRecode.OrderList.length == 0) {
                this.stopRun();
              }

              return;
            }

            this.print("\u5F00\u59CB\u63D2\u5165\u4E00\u4E2A\u8BA2\u5355 \u5F53\u524D\u8BA2\u5355code:" + id + ",\u8BA2\u5355\u6570\u636E:", order);
            var oneRecord = {
              id: id,
              order: order,
              reportData: reportData
            };
            OrderRecode.OrderList.push(oneRecord);

            if (isNotRun == false) {
              this.startRun();
            }
          }
        }
        /** 取出一个订单 */


        getOrder() {
          if (OrderRecode.OrderList.length == 0) {
            return null;
          }

          return OrderRecode.OrderList.shift();
        } //开始执行


        startRun() {
          this.stopRun();

          if (OrderRecode.OrderList.length > 0) {
            this.print("\u6267\u884C\u8BA2\u5355\u68C0\u6D4B\u51FD\u6570==>\u5F85\u5904\u7406\u6570\u76EE:" + OrderRecode.OrderList.length);

            if (this._checkTime > 0) {
              this.reqSendOrder();
            }

            this._handlerSendScheduler = this.addScheduler(this._checkTime, this.reqSendOrder);
          }
        }
        /** 发送订单 */


        reqSendOrder(dt) {
          if ((_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
            error: Error()
          }), GCache) : GCache).User.isLoginSuccesed() == false) {
            return;
          }

          var oneOrder = OrderRecode.instance.getOrder();

          if (!oneOrder) {
            OrderRecode.instance.stopRun();
            return;
          } //请求更新微信登录凭据


          var self = this;
          this.print("MID:" + (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
            error: Error()
          }), GCache) : GCache).User.getUserMid() + ",\u8BF7\u6C42\u53D1\u9001\u8BA2\u5355,\u5F53\u524D\u8BA2\u5355code=" + oneOrder.id + " \u8BA2\u5355\u6570\u636E:", oneOrder.order);
          this.print("\u5B9E\u65F6\u66F4\u65B0access_token,\u4E4B\u524D:" + (_crd && Platform === void 0 ? (_reportPossibleCrUseOfPlatform({
            error: Error()
          }), Platform) : Platform).PLogInfo.access_token + " ");
          (_crd && Platform === void 0 ? (_reportPossibleCrUseOfPlatform({
            error: Error()
          }), Platform) : Platform).updateReFreshAccessToken(state => {
            var isLogined = (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
              error: Error()
            }), GCache) : GCache).User.isLoginSuccesed();
            this.print("\u5B9E\u65F6\u66F4\u65B0access_token,\u4E4B\u540E:" + (_crd && Platform === void 0 ? (_reportPossibleCrUseOfPlatform({
              error: Error()
            }), Platform) : Platform).PLogInfo.access_token + ",\u767B\u5F55\u72B6\u6001:" + isLogined + ",\u66F4\u65B0\u72B6\u6001:" + state);

            if (isLogined == false || state != true) {
              this.print("Fail:\u65E0\u6CD5\u6267\u884C\u521B\u5EFA\u8BA2\u5355,\u5373\u5C06\u63D2\u5165\u7F13\u5B58\u961F\u5217\uFF0C\u7B49\u5F85\u540E\u7EED\u6267\u884C,\u5F53\u524D\u767B\u5F55\u72B6\u6001:" + isLogined + ",\u66F4\u65B0\u72B6\u6001:" + state);
              OrderRecode.instance.setOrder(oneOrder.id, oneOrder.order, oneOrder.reportData, isLogined == false);
              return;
            } //使用最新的access_token


            if (oneOrder.order["otherEx"]) {
              oneOrder.order["otherEx"]["access_token"] = (_crd && Platform === void 0 ? (_reportPossibleCrUseOfPlatform({
                error: Error()
              }), Platform) : Platform).PLogInfo.access_token;
            }

            var sendMsg = {
              cmd: (_crd && GlobalCMD === void 0 ? (_reportPossibleCrUseOfGlobalCMD({
                error: Error()
              }), GlobalCMD) : GlobalCMD).PHP_SEND_PAYMENT_ORDER,
              body: oneOrder.order
            };
            self.checkOuttime(oneOrder.id, oneOrder.order, oneOrder.reportData);
            self.print("ToServer:\u8BF7\u6C42\u521B\u5EFA\u8BA2\u5355:code=" + oneOrder.id);
            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
              error: Error()
            }), AppEvent) : AppEvent).SYS_TOAST_TIP, {
              content: (_crd && GameTxt === void 0 ? (_reportPossibleCrUseOfGameTxt({
                error: Error()
              }), GameTxt) : GameTxt).pay_creater_order
            });
            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
              error: Error()
            }), AppEvent) : AppEvent).NET_SEND_MSG, sendMsg);
          });
        } //开启超时检测


        checkOuttime(orderid, order, reportData) {
          this.print("\u5F00\u542F\u521B\u5EFA\u8BA2\u5355\u7684\u8D85\u65F6\u68C0\u6D4B code=" + orderid);

          if (!orderid) {
            return;
          }

          if (this._OuttimeOrderMap[orderid]) {
            this.stopScheduler(this._OuttimeOrderMap[orderid]["handler"]);
            this._OuttimeOrderMap[orderid]["handler"] = null;
            this._OuttimeOrderMap[orderid]["order"] = order;
            this._OuttimeOrderMap[orderid]["reportData"] = reportData;
          } else {
            this._OuttimeOrderMap[orderid] = {
              handler: null,
              order: order,
              reportData: reportData
            };
          }

          var handler = this.addScheduler(this.maxOuttime, this.updateOuttime);
          this._OuttimeHandlerMap[handler] = orderid;
          this._OuttimeOrderMap[orderid]["handler"] = handler;
        }
        /** 检测超时回调 */


        updateOuttime(dt, handler) {
          if (!this._OuttimeHandlerMap[handler]) {
            return;
          }

          var orderid = this._OuttimeHandlerMap[handler];
          this.print("********\u8BA2\u5355\u68C0\u6D4B\u8D85\u65F6\u56DE\u8C03**********code:" + orderid + ",handler:" + handler);

          if (this._OuttimeOrderMap[orderid]) {
            var order = this._OuttimeOrderMap[orderid]["order"];
            var reportData = this._OuttimeOrderMap[orderid]["reportData"];
            this.stopScheduler(handler);
            this._OuttimeOrderMap[orderid]["handler"] = null;
            this._OuttimeOrderMap[orderid] = null;
            this._OuttimeHandlerMap[handler] = null;
            this._FailOrderMap[orderid] = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).number_valueOf(this._FailOrderMap[orderid]) + 1;
            this.print("Fail:\u8BA2\u5355\u68C0\u6D4B\u8D85\u65F6,code:" + orderid + ",handler:" + handler + ",\u5F53\u524D\u5931\u8D25\u6B21\u6570:" + this._FailOrderMap[orderid]);
            this.setOrder(orderid, order, reportData);
          } else {
            this.print("没有订单？停止超时检测", this._OuttimeOrderMap[orderid]);
            this.stopScheduler(handler);
          }
        } //订单回调


        respForWardOrder(event, isSuccess, respData, reqData) {
          this.print("reqData", reqData, "respData", respData);
          var orderid = null;

          if (isSuccess) {
            if (respData["retCode"]) {
              orderid = respData["retCode"];
            }

            ;
          } else {
            if (respData["extraInfo"]["retCode"]) {
              orderid = respData["extraInfo"]["retCode"];
            }

            ;
          }

          this.print("ByServer:\u670D\u52A1\u7AEF\u521B\u5EFA\u8BA2\u5355\u7ED3\u679C:" + isSuccess + " code:" + orderid); //订单上报记录数据

          var reportData = null;

          if (orderid != null && orderid != undefined) {
            if (this._OuttimeOrderMap[orderid]) {
              //停止超时检测
              var handler = this._OuttimeOrderMap[orderid]["handler"];
              this.stopScheduler(this._OuttimeOrderMap[orderid]["handler"]);
              reportData = this._OuttimeOrderMap[orderid]["reportData"];

              if (isSuccess == false && respData["errorType"] == 2000) {
                var tab = {
                  id: orderid,
                  order: this._OuttimeOrderMap[orderid]["order"],
                  reportData: reportData
                };
                this._OuttimeOrderMap[orderid] = null;
                this._OuttimeHandlerMap[handler] = null;
                this._FailOrderMap[orderid] = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                  error: Error()
                }), Utils) : Utils).number_valueOf(this._FailOrderMap[orderid]) + 1;
                this.print("Fail:\u68C0\u6D4B\u5230\u63D0\u4EA4\u5F97\u5230\u7684token\u8BB0\u5F55\u6709\u8BEF\uFF0C\u91CD\u65B0\u63D0\u4EA4 code:" + orderid + ",\u5F53\u524D\u5931\u8D25\u6B21\u6570:" + this._FailOrderMap[orderid]);
                var isLogined = (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
                  error: Error()
                }), GCache) : GCache).User.isLoginSuccesed();
                OrderRecode.instance.setOrder(tab.id, tab.order, tab.reportData, isLogined == false);
                return;
              }

              this._OuttimeOrderMap[orderid] = null;
              this._OuttimeHandlerMap[handler] = null;
            } else {
              this._OuttimeOrderMap[orderid] = null;
            }
          }

          console.log("订单上报记录数据==>", reportData);

          if (isSuccess == true) {
            delete this._FailOrderMap[orderid];
            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
              error: Error()
            }), AppEvent) : AppEvent).SYS_TOAST_TIP, {
              content: (_crd && GameTxt === void 0 ? (_reportPossibleCrUseOfGameTxt({
                error: Error()
              }), GameTxt) : GameTxt).pay_success
            }); //上报订单记录

            if (reportData && respData["orderid"]) {
              reportData["orderID"] = respData["orderid"];
              this.print("Success:\u521B\u5EFA\u8BA2\u5355\u6210\u529F\uFF0C\u5373\u5C06\u4E0A\u62A5\u8BA2\u5355\u8BB0\u5F55,MID:" + (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
                error: Error()
              }), GCache) : GCache).User.getUserMid() + ",\u4E0A\u62A5\u6570\u636E:", reportData);
              (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
                error: Error()
              }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
                error: Error()
              }), AppEvent) : AppEvent).NET_REQ_REPORT_PAY_ORDER, reportData);
            }
          } else {
            this.print("Fail:\u8BA2\u5355\u521B\u5EFA\u5931\u8D25,\u4E0D\u518D\u91CD\u65B0\u63D0\u4EA4 code:" + orderid + ",ErrorCode:" + respData["errorType"] + ",ErrorTips:" + respData["errorTips"]);
            var txt = (_crd && GameTxt === void 0 ? (_reportPossibleCrUseOfGameTxt({
              error: Error()
            }), GameTxt) : GameTxt).pay_failed;

            if (!(_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).string_isEmpty(respData["errorTips"])) {
              txt = respData["errorTips"];
            }

            ;
            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
              error: Error()
            }), AppEvent) : AppEvent).SYS_TOAST_TIP, {
              content: txt
            });
          }

          ;
        } //停止执行发送


        stopRun() {
          this.stopScheduler(this._handlerSendScheduler);
          this._handlerSendScheduler = null;
        } //登录状态发生改变变化


        loginStateChange(event, state) {
          if (state == (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
            error: Error()
          }), GConstants) : GConstants).UserLoginState.LoginSuccess) {
            // this.print("登录成功了，开始订单发送===>订单数:", OrderRecode.OrderList.length)
            this.startRun();
          } else {
            // this.print("断开登录了暂停订单发送===>")
            this.stopAllScheduler();

            for (var orderID in this._OuttimeOrderMap) {
              if (Object.prototype.hasOwnProperty.call(this._OuttimeOrderMap, orderID)) {
                var oneRecode = this._OuttimeOrderMap[orderID];
                this.setOrder(orderID, oneRecode["order"], oneRecode["reportData"], true);
              }
            }

            this._OuttimeOrderMap = {};
            this._OuttimeHandlerMap = {};
          }
        } //当前类日志输出


      });

      OrderRecode._instance = null;
      OrderRecode.OrderList = [];
      OrderRecode.waitingOrderList = [];
      ; //记录请求的SceneID

      PayReqSceneiIDRecord = {};
      /** 支付代理 */

      _export("PayAgent", PayAgent = class PayAgent extends (_crd && BaseControll === void 0 ? (_reportPossibleCrUseOfBaseControll({
        error: Error()
      }), BaseControll) : BaseControll) {
        //唯一code

        /** 当前商品详情 */
        //代理状态：PayAgentState
        //支付回调
        //代理回调
        //默认商品分区ID
        //生成订单所用的参数
        //订单上报所用的参数
        //实例化
        constructor(param) {
          super("PayAgent");
          this._data = null;
          this._code = null;
          this._currowGoodGift = null;
          this._agentState = PayAgentState.Check;
          this._doPayCallback = null;
          this._delegateCallback = null;
          this._zoneId = 1;
          this._orderParam = null;
          this._orderReportParam = null;

          this.print = function () {
            for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
              args[_key2] = arguments[_key2];
            }

            (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
              error: Error()
            }), Logger) : Logger).logPay(5, ...args);
          };

          this._data = param;
          this._code = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).timeEx();
          this._orderParam = null;
          this._orderReportParam = null;
          this._doPayCallback = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).handler(this, this.doPayCallback);
          this.print("MID:" + (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
            error: Error()
          }), GCache) : GCache).User.getUserMid() + ",\u8BF7\u6C42\u4E86\u652F\u4ED8,\u6570\u636E\u4E3A:", this._data);

          if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).isNotNull(this._data, this._data["scene"], this._data["gid"])) {
            this.doCheck();
          } else {
            this.dump(this._data, "错误的支付代理参数");
          }
        }

        /**初始化添加事件绑定 */
        onInitModuleEvent() {
          //商品信息有更新
          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).ACTIVITY_GOODSLIST_UPDATE, this.doCheckAgain);
        }
        /** 设置支付参数 选择支付 */


        setPayParam(param) {}

        doCheck(event) {
          if (event === void 0) {
            event = null;
          }

          if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).isNotNull(this._data, this._data["scene"], this._data["gid"]) == false) {
            this.print("错误的支付代理参数");
            return;
          } //记录商品详情请求的次数


          var oldNum = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).number_valueOf(PayReqSceneiIDRecord[this._data["scene"]], 0);
          var newNum = oldNum + 1;
          PayReqSceneiIDRecord[this._data["scene"]] = newNum;
          var goodInfo = (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
            error: Error()
          }), GCache) : GCache).GoodsData.getGoodsGiftByGoodsID(this._data["scene"]);

          if (!goodInfo) {
            this._agentState = PayAgentState.Check;

            if (newNum >= 2) {
              (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
                error: Error()
              }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
                error: Error()
              }), AppEvent) : AppEvent).SYS_TOAST_TIP, {
                content: (_crd && GameTxt === void 0 ? (_reportPossibleCrUseOfGameTxt({
                  error: Error()
                }), GameTxt) : GameTxt).pay_fail_no_goods
              });
            } else {
              (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
                error: Error()
              }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
                error: Error()
              }), AppEvent) : AppEvent).NET_REQ_GOODS_INFO, {
                scene: this._data["scene"],
                code: this._code
              });
            }

            return;
          }

          this._currowGoodGift = (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
            error: Error()
          }), GCache) : GCache).GoodsData.getOneGoodGift(this._data["scene"], this._data["gid"]);
          this._zoneId = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).nullToDefault(this._currowGoodGift["zoneId"], 1);
          this.doPay();
        }

        doCheckAgain(event, scene, param) {
          if (scene != this._data["scene"]) {
            return;
          }

          if (!param || param["code"] != this._code) {
            return;
          }

          if (this._agentState != PayAgentState.Check) {
            //支付代理不在检查状态
            return;
          }

          this.doCheck();
        }

        doPay() {
          if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).isNotNull(this._currowGoodGift) == false) {
            //支付失败，商品信息不存在
            this.doEnd((_crd && GameTxt === void 0 ? (_reportPossibleCrUseOfGameTxt({
              error: Error()
            }), GameTxt) : GameTxt).pay_fail_no_goods);
            return;
          }

          this._agentState = PayAgentState.Start;

          switch (this._currowGoodGift["currency"]) {
            //支付的货币类型
            case (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
              error: Error()
            }), GConstants) : GConstants).GoodMoneyType.rmb:
              // if (Platform.isAndroid() == false && Platform.isWindows() == false) {
              // 	//支付失败，IOS暂时不支持
              // 	this.doEnd(GameTxt.pay_fail_platform_not_support);
              // 	return;
              // }
              var price = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                error: Error()
              }), Utils) : Utils).nullToDefault(this._currowGoodGift["pamount"], null);

              if (!price) {
                //支付失败，价格配置错误
                this.print("支付失败，价格配置错误");
                this.doEnd();
                return;
              }

              if (this.createOrderParam() == false) {
                this.print("支付失败，订单参数生成有误");
                this.doEnd();
                return;
              }

              ;
              this._agentState = PayAgentState.Waiting;
              this.print("MID:" + (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
                error: Error()
              }), GCache) : GCache).User.getUserMid() + ",\u53D1\u8D77\u4E00\u7B14\u652F\u4ED8,\u5546\u54C1ID:" + this._data["scene"] + ",GID:" + this._data["gid"] + ",RMB:" + price + "\u5143,code:" + this._code);
              (_crd && Platform === void 0 ? (_reportPossibleCrUseOfPlatform({
                error: Error()
              }), Platform) : Platform).reqSendPay({
                //支付
                num: price,
                callback: this._doPayCallback,
                code: this._code,
                scene: this._data["scene"],
                gid: this._data["gid"],
                zoneId: this._zoneId
              });
              break;

            case (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
              error: Error()
            }), GConstants) : GConstants).GoodMoneyType.diamond:
              //支付失败，支付代理暂时不支持钻石支付
              this.print("支付失败，支付代理暂时不支持钻石支付");
              this.doEnd();
              return;

            case (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
              error: Error()
            }), GConstants) : GConstants).GoodMoneyType.gold:
              //支付失败，支付代理暂时不支持金条支付
              this.print("支付失败，支付代理暂时不支持金条支付");
              this.doEnd();
              break;

            default:
              //支付失败，不支持的支付类型
              this.print("支付失败，不支持的支付类型 type = " + this._currowGoodGift["currency"]);
              this.doEnd((_crd && GameTxt === void 0 ? (_reportPossibleCrUseOfGameTxt({
                error: Error()
              }), GameTxt) : GameTxt).pay_fail_no_goods);
              return;
          }
        } //判断支付方式是否属于RMB支付


        static isRMB(_type) {
          _type = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).number_valueOf(_type);

          if (_type == (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
            error: Error()
          }), GConstants) : GConstants).PayType.FREE || _type == (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
            error: Error()
          }), GConstants) : GConstants).PayType.SILVER || _type == (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
            error: Error()
          }), GConstants) : GConstants).PayType.TICKET || _type == (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
            error: Error()
          }), GConstants) : GConstants).PayType.SHARE || _type == (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
            error: Error()
          }), GConstants) : GConstants).PayType.VIDEO) {
            //免费、银币，兑换券，分享，看视频不属于RMB支付
            return false;
          }

          return true;
        }
        /** 创建订单参数 */


        createOrderParam() {
          if (!this._currowGoodGift) {
            return false;
          } //测试代码
          // Platform.PLogInfo.access_token = "58_eQWNrWIjmP1dYhMv31_k1cxvAopu5o8c4bg6fLpiMb1r5w-OXvE6NVJ89sOrXVdD24PVkADVmaJJP5sf-9WS-eqJ4r8UI-13x-MBmyzcYVpiqOzdq7qhVy3h2i_S9Ox_3frMUOxd5-b8qSAyVVGjACAZZK";
          // Platform.PLogInfo.openId = "owvGE5QcLfmK3jHkkwAMlsUyoJDc";


          (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).dump("创建订单参数", this._currowGoodGift);
          var param = {
            item_id: this._currowGoodGift["id"],
            //商品Id
            ptype: 937,
            //支付渠道
            sceneId: this._data["scene"],
            //支付商品分类
            v: (_crd && Platform === void 0 ? (_reportPossibleCrUseOfPlatform({
              error: Error()
            }), Platform) : Platform).isAndroid() == true ? 2 : 0,
            //支付版本：1为IOS(老版本)、2为安卓、6: IOS(新版) 其他为PC客户端
            operation: (_crd && ClientInfo === void 0 ? (_reportPossibleCrUseOfClientInfo({
              error: Error()
            }), ClientInfo) : ClientInfo).PhoneCardType,
            bundleId: (_crd && ClientInfo === void 0 ? (_reportPossibleCrUseOfClientInfo({
              error: Error()
            }), ClientInfo) : ClientInfo).BundleId,
            mobileid: 0,
            hall_version: (_crd && ClientInfo === void 0 ? (_reportPossibleCrUseOfClientInfo({
              error: Error()
            }), ClientInfo) : ClientInfo).HallVer
          };

          if (this._currowGoodGift["extra"]) {
            for (var key in this._currowGoodGift["extra"]) {
              if (Object.prototype.hasOwnProperty.call(this._currowGoodGift["extra"], key)) {
                var value = this._currowGoodGift["extra"][key];

                if (typeof value == "string" || typeof value == "number" || typeof value == "boolean") {
                  param[key] = value;
                }
              }
            }
          }

          ;
          var other_param = {
            code: this._code,
            //订单唯一标识
            env: (_crd && ClientInfo === void 0 ? (_reportPossibleCrUseOfClientInfo({
              error: Error()
            }), ClientInfo) : ClientInfo).WX_PayEnv,
            //支付环境（0:正式 1:沙箱）
            offerId: (_crd && ClientInfo === void 0 ? (_reportPossibleCrUseOfClientInfo({
              error: Error()
            }), ClientInfo) : ClientInfo).WX_PayOfferId,
            //米大师侧注册的应用ID
            zoneId: this._zoneId,
            //分区ID
            openId: (_crd && Platform === void 0 ? (_reportPossibleCrUseOfPlatform({
              error: Error()
            }), Platform) : Platform).PLogInfo.openId,
            //用户openId
            access_token: (_crd && Platform === void 0 ? (_reportPossibleCrUseOfPlatform({
              error: Error()
            }), Platform) : Platform).PLogInfo.access_token,
            //access_token(实时的)
            price: this._currowGoodGift["pamount"],
            //实际支付价格
            time: (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).time() //订单生成时间戳

          };
          param["otherEx"] = other_param;
          this._orderParam = param; //支付方式

          var payType = 0;

          if (this._currowGoodGift["pmodes"] && this._currowGoodGift["pmodes"].length > 0) {
            payType = this._currowGoodGift["pmodes"][0]["id"];
          } //订单上报的数据结构


          var reportData = {
            orderID: null,
            //订单ID(创建时补上)
            gameID: (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).number_valueOf(this._data["otherEx"]["gameID"]),
            levelID: (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).number_valueOf(this._data["otherEx"]["levelID"]),
            pmode: payType,
            //下单时的支付方式
            currency: this._currowGoodGift["currency"],
            //币种类型，比如F币，人民币
            pamount: this._currowGoodGift["pamount"],
            //实际支付价格
            scene: this._currowGoodGift["scene"],
            //商品类型
            id: this._currowGoodGift["id"],
            //商品ID
            pchips: this._currowGoodGift["pchips"],
            //商品数量
            sceneType: this._data["sceneType"] //场景类型

          };
          this._orderReportParam = reportData;
          return true;
        }
        /** 平台支付的回调 */


        doPayCallback(respParam) {
          if (!respParam) {
            return;
          }

          this.print("MID:" + (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
            error: Error()
          }), GCache) : GCache).User.getUserMid() + ",\u5546\u54C1ID:" + respParam["req"]["scene"] + ",GID:" + respParam["req"]["gid"] + ",RMB:" + respParam["req"]["num"] + "\u5143,code:" + this._code + ",\u5E73\u53F0\u652F\u4ED8\u7ED3\u679C:" + (respParam["respCode"] == 0 ? "成功" : "失败"));
          var txt = null;

          if (respParam["respCode"] == (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
            error: Error()
          }), GConstants) : GConstants).AppPayResult.UNINE) {
            txt = (_crd && GameTxt === void 0 ? (_reportPossibleCrUseOfGameTxt({
              error: Error()
            }), GameTxt) : GameTxt).pay_fail_platform_not_support;
          }

          ;

          if (respParam["req"]["code"] == this._code) {
            if (respParam["respCode"] == (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
              error: Error()
            }), GConstants) : GConstants).AppPayResult.SUCCESS) {
              this.doReqOrder();
            } else {
              this.doEnd(txt);
            }
          }
        }

        /** 请求生成订单 */
        doReqOrder() {
          if (!this._orderParam) {
            //支付失败，不支持的支付类型
            this.print("支付成功，但是创建订单失败，无创建参数");
            this.doEnd((_crd && GameTxt === void 0 ? (_reportPossibleCrUseOfGameTxt({
              error: Error()
            }), GameTxt) : GameTxt).pay_fail_platform_error);
            return;
          }

          this._agentState = PayAgentState.DoOrder;
          OrderRecode.instance.setOrder(this._code, this._orderParam, this._orderReportParam);
        } //主动结束


        doEnd(txt) {
          if (txt === void 0) {
            txt = null;
          }

          this._agentState = PayAgentState.End;

          if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).string_isEmpty(txt) == false) {
            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
              error: Error()
            }), AppEvent) : AppEvent).SYS_TOAST_TIP, {
              content: txt
            });
          }

          this.release();
        }

        release() {
          super.clear();
        } //当前类日志输出


      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d6298f5735a0db713ec4e149ff043b98222218cb.js.map