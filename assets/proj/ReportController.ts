/**
 * Name = ReportController
 * URL = db://assets/proj/ReportController.ts
 * Time = Wed Aug 24 2022 11:45:42 GMT+0800 (中国标准时间)
 * Author = xueya
 * Client数据上报控制器
 */

import { GCache } from "../cache/GCache";
import { AppEvent } from "../config/AppEvent";
import { Logger } from "../framework/log/Logger";
import { EventManager } from "../framework/manager/EventManager";
import { Utils } from "../framework/Utils";
import { BaseControll } from "../framework/vc/BaseController";
import { GlobalCMD } from "./gnet/GlobalCMD";

export class ReportController extends BaseControll {
	private static _instance = null;
	public static getInstance(): ReportController {
		if (!this._instance || this._instance == null) {
			this._instance = new ReportController("ReportController");
		}
		return this._instance;
	}
	public static init(): ReportController {
		if (this._instance) {
			this._instance.clear()
		}
		this._instance = null
		ReportController.getInstance()
		return
	}
	/**初始化添加事件绑定 */
	protected onInitModuleEvent(): void {
		//上报支付订单
		this.addModelListener(AppEvent.NET_REQ_REPORT_PAY_ORDER, this.reqReportPayOrder);
		//支付订单上报回调
		this.addModelListener(AppEvent.NET_FORWARD_REPORT_PAY_ORDER, this.respReportPayOrder);
	}
	/** 支付订单上报 */
	reqReportPayOrder(event, reportOrderData) {
		Logger.logPay("支付订单上报==>", reportOrderData)
		let sceneType = GCache.CurrowPaySceneType;

		let body = {
			order_id: reportOrderData["orderID"],       //支付中心订单ID
			gameid: Utils.nullToDefault(reportOrderData["gameID"], 0),    //下单时所在的游戏ID
			level: Utils.nullToDefault(reportOrderData["levelID"], 0),     //下单时所在的房间等级
			gameparty_anto: "",                 //下单时底注场
			gameparty_pname: "",                 //场景，大厅、游戏场、比赛场
			gameparty_subname: "",               //下单时牌局场二级分类，比如游戏场的新手场，初级场，高级场，淘汰场，即：level对应的名称
			gameparty_gsubname: Utils.nullToDefault(reportOrderData["matchName"], ""), //比赛名称  
			bankrupt: GCache.BankrupData.checkIsBankrupt(GCache.User.getUserMoneyByID(0)) == true ? 1 : 0,  //下单时用户是否处于破产状态（ 0:否, 1：是 ）
			pay_scene: sceneType,                 //付费场景，在哪个游戏入口下单（如游戏界面、结算界面、降级充值、破产充值、商城）
			pay_scene_type: sceneType,
			pm_name: Utils.nullToDefault(reportOrderData["pmode"], 0),           //下单时所用的支付方式名称（支付宝，银联啥的）
			currency_type: Utils.number_valueOf(reportOrderData["currency"], 1),  //币种类型，比如F币，人民币
			currency_num: Utils.number_valueOf(reportOrderData["pamount"], 0),    //币种数量
			item_category: Utils.number_valueOf(reportOrderData["scene"], 1),     //商品场景：1 银币 2 vip 3 道具 12 金条 999 代理年卡
			item_id: Utils.number_valueOf(reportOrderData["id"]),              //购买物品gid, 
			item_num: Utils.number_valueOf(reportOrderData["pchips"]),
			platform_order_id: "",                //平台订单流水号
			fee: 0,                               //手续费用
			is_pay_done: 0,                       //是否支付完成 0为创建订单 1为支付完成

			award_type: [],
			match_type: 0,
		}
		Logger.logPay("上报数据：", body)
		// local sceneType, reprotData = RechargeDataInterface.getInstance():getSceneType();
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

		let sendMsg = {
			cmd: GlobalCMD.PHP_ROOM_PAY_SEND_ORDER,
			body: body,
		}
		EventManager.dispatch(AppEvent.NET_SEND_MSG, sendMsg)

	}

	/** 支付订单上报回调 */
	respReportPayOrder(event, isSuccess, respData, reqData) {
		Logger.logPay(`支付订单上报回调结果:${isSuccess},返回数据:`, respData);

	}


}

