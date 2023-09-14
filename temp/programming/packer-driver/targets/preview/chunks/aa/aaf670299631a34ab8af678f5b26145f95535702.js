System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, GCache, AppEvent, Logger, EventManager, Utils, BaseControll, GlobalCMD, ReportController, _crd;

  function _reportPossibleCrUseOfGCache(extras) {
    _reporterNs.report("GCache", "../cache/GCache", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAppEvent(extras) {
    _reporterNs.report("AppEvent", "../config/AppEvent", _context.meta, extras);
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

  function _reportPossibleCrUseOfGlobalCMD(extras) {
    _reporterNs.report("GlobalCMD", "./gnet/GlobalCMD", _context.meta, extras);
  }

  _export("ReportController", void 0);

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
      Logger = _unresolved_4.Logger;
    }, function (_unresolved_5) {
      EventManager = _unresolved_5.EventManager;
    }, function (_unresolved_6) {
      Utils = _unresolved_6.Utils;
    }, function (_unresolved_7) {
      BaseControll = _unresolved_7.BaseControll;
    }, function (_unresolved_8) {
      GlobalCMD = _unresolved_8.GlobalCMD;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4b735ICWgJJzaWkoycPJz0Y", "ReportController", undefined);

      _export("ReportController", ReportController = class ReportController extends (_crd && BaseControll === void 0 ? (_reportPossibleCrUseOfBaseControll({
        error: Error()
      }), BaseControll) : BaseControll) {
        static getInstance() {
          if (!this._instance || this._instance == null) {
            this._instance = new ReportController("ReportController");
          }

          return this._instance;
        }

        static init() {
          if (this._instance) {
            this._instance.clear();
          }

          this._instance = null;
          ReportController.getInstance();
          return;
        }
        /**初始化添加事件绑定 */


        onInitModuleEvent() {
          //上报支付订单
          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_REQ_REPORT_PAY_ORDER, this.reqReportPayOrder); //支付订单上报回调

          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_FORWARD_REPORT_PAY_ORDER, this.respReportPayOrder);
        }
        /** 支付订单上报 */


        reqReportPayOrder(event, reportOrderData) {
          (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
            error: Error()
          }), Logger) : Logger).logPay("支付订单上报==>", reportOrderData);
          var sceneType = (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
            error: Error()
          }), GCache) : GCache).CurrowPaySceneType;
          var body = {
            order_id: reportOrderData["orderID"],
            //支付中心订单ID
            gameid: (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).nullToDefault(reportOrderData["gameID"], 0),
            //下单时所在的游戏ID
            level: (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).nullToDefault(reportOrderData["levelID"], 0),
            //下单时所在的房间等级
            gameparty_anto: "",
            //下单时底注场
            gameparty_pname: "",
            //场景，大厅、游戏场、比赛场
            gameparty_subname: "",
            //下单时牌局场二级分类，比如游戏场的新手场，初级场，高级场，淘汰场，即：level对应的名称
            gameparty_gsubname: (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).nullToDefault(reportOrderData["matchName"], ""),
            //比赛名称  
            bankrupt: (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
              error: Error()
            }), GCache) : GCache).BankrupData.checkIsBankrupt((_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
              error: Error()
            }), GCache) : GCache).User.getUserMoneyByID(0)) == true ? 1 : 0,
            //下单时用户是否处于破产状态（ 0:否, 1：是 ）
            pay_scene: sceneType,
            //付费场景，在哪个游戏入口下单（如游戏界面、结算界面、降级充值、破产充值、商城）
            pay_scene_type: sceneType,
            pm_name: (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).nullToDefault(reportOrderData["pmode"], 0),
            //下单时所用的支付方式名称（支付宝，银联啥的）
            currency_type: (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).number_valueOf(reportOrderData["currency"], 1),
            //币种类型，比如F币，人民币
            currency_num: (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).number_valueOf(reportOrderData["pamount"], 0),
            //币种数量
            item_category: (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).number_valueOf(reportOrderData["scene"], 1),
            //商品场景：1 银币 2 vip 3 道具 12 金条 999 代理年卡
            item_id: (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).number_valueOf(reportOrderData["id"]),
            //购买物品gid, 
            item_num: (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).number_valueOf(reportOrderData["pchips"]),
            platform_order_id: "",
            //平台订单流水号
            fee: 0,
            //手续费用
            is_pay_done: 0,
            //是否支付完成 0为创建订单 1为支付完成
            award_type: [],
            match_type: 0
          };
          (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
            error: Error()
          }), Logger) : Logger).logPay("上报数据：", body); // local sceneType, reprotData = RechargeDataInterface.getInstance():getSceneType();
          // --body
          // local param = {};
          // param.order_id = orderData.orderinfo.ORDER;--支付中心订单ID
          // param.gameid = reprotData.gameId or 0;--下单时所在的游戏ID
          // param.level = reprotData.levelId or 0;--下单时所在的房间等级
          // param.gameparty_anto = "";--下单时底注场
          // local gsubname = reprotData.matchName;
          // param.gameparty_pname = ""; -- 场景，大厅、游戏场、比赛场
          // param.gameparty_subname = ""; -- 下单时牌局场二级分类，比如游戏场的新手场，初级场，高级场，淘汰场，即：level对应的名称
          // param.gameparty_gsubname = gsubname; --  比赛名称   
          // param.bankrupt = kBankruptDataInterface:checkIsBankrupt(kUserInfoData:getMoney()) == true and 1 or 0 ; --下单时用户是否处于破产状态（ 0:否, 1：是 ）
          // param.pay_scene = sceneType;--付费场景，在哪个游戏入口下单（如游戏界面、结算界面、降级充值、破产充值、商城）
          // param.pm_name = orderData.orderinfo.PMODE; --下单时所用的支付方式名称（支付宝，银联啥的） 
          // param.currency_type = curPaymentInfo.goodInfo.currency; --币种类型，比如F币，人民币
          // param.currency_num = orderData.orderinfo.PAMOUNT;-- 币种数量
          // param.item_category = curPaymentInfo.goodInfo.scene;-- 场景：1 银币 2 vip 3 道具 12 金条 999 代理年卡
          // param.item_id = curPaymentInfo.goodInfo.id;  --购买物品id, 当购买虚拟道具时，填写相关道具id 
          // param.item_num =  orderData.orderinfo.PCHIPS;  --购买物品数量
          // param.platform_order_id = ""; --平台订单流水号
          // param.fee = 0;     --手续费用
          // param.is_pay_done = 0;--是否支付完成 0为创建订单 1为支付完成
          // param.pay_scene_type = sceneType;--付费场景，在哪个游戏入口下单（如游戏界面、结算界面、降级充值、破产充值、商城）
          // param.award_type = reprotData.matchAwardsList or {}; -- 比赛奖励
          // param.match_type = reprotData.matchType or 0; -- 比赛类型
          // param.gameparty_gsubname = reprotData.matchName or self:getCurMatchName(); -- 比赛名称
          // OnlineSocketManager.getInstance():sendMsg(PHP_ROOM_PAY_SEND_ORDER,param);

          var sendMsg = {
            cmd: (_crd && GlobalCMD === void 0 ? (_reportPossibleCrUseOfGlobalCMD({
              error: Error()
            }), GlobalCMD) : GlobalCMD).PHP_ROOM_PAY_SEND_ORDER,
            body: body
          };
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_SEND_MSG, sendMsg);
        }
        /** 支付订单上报回调 */


        respReportPayOrder(event, isSuccess, respData, reqData) {
          (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
            error: Error()
          }), Logger) : Logger).logPay("\u652F\u4ED8\u8BA2\u5355\u4E0A\u62A5\u56DE\u8C03\u7ED3\u679C:" + isSuccess + ",\u8FD4\u56DE\u6570\u636E:", respData);
        }

      });

      ReportController._instance = null;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=aaf670299631a34ab8af678f5b26145f95535702.js.map