/**
 * Name = PayAgent
 * URL = db://assets/proj/PayAgent.ts
 * Time = Tue Jun 28 2022 20:52:03 GMT+0800 (中国标准时间)
 * Author = xueya
 * 支付代理类
 */

import { GCache } from "../cache/GCache";
import { AppEvent } from "../config/AppEvent";
import { ClientInfo } from "../config/GameConfig";
import { GConstants } from "../config/GameConstant";
import { GameTxt } from "../config/GameTxt";
import { inf_OrderRecord } from "../framework/InterfaceDefines";
import { Logger } from "../framework/log/Logger";
import { EventManager } from "../framework/manager/EventManager";
import { Utils } from "../framework/Utils";
import { BaseControll } from "../framework/vc/BaseController";
import { Platform } from "../platform/Platform";
import { GlobalCMD } from "./gnet/GlobalCMD";

const PayAgentState = {
	Check: 0,
	Start: 1,
	Waiting: 2,
	DoOrder: 3,
	End: 4,
}
/** 订单记录 */
export class OrderRecode extends BaseControll {
	private static _instance = null;
	/** 代发送订单记录{订单号：ArrayObject} */
	public static OrderList: Array<inf_OrderRecord> = [];
	/** 等待核实的订单(已发送 未返回) */
	public static waitingOrderList: Array<inf_OrderRecord> = [];

	public static get instance(): OrderRecode {
		if (!this._instance || this._instance == null) {
			this._instance = new OrderRecode("OrderRecode");
		}
		return this._instance;
	}
	/** 定时检查句柄 */
	private _handlerSendScheduler = null;
	/** 超时 order -> handler 映射{}*/
	private _OuttimeOrderMap = {};
	/** 超时  handler->order 映射{}*/
	private _OuttimeHandlerMap = {};
	/** 失败的订单记录 orderid->num*/
	private _FailOrderMap = {};
	/** 检查发送间隔时间 */
	private _checkTime = 5;
	/** 最大超时时长 */
	private maxOuttime = 4;
	/** 最大失败次数 */
	private maxFailNum = 2;

	protected onInitModuleEvent(): void {
		//登录状态变化
		this.addModelListener(AppEvent.LOGIN_STATE_CHANGE, this.loginStateChange);
		//订单回调
		this.addModelListener(AppEvent.NET_FORWARD_PAYMENT_ORDER, this.respForWardOrder);

	}

	/** 插入一个订单 */
	setOrder(id, order, reportData, isNotRun: boolean = false) {
		if (id && order) {
			//达到最大失败次数 不再请求
			if (Utils.number_valueOf(this._FailOrderMap[id]) > this.maxFailNum) {
				this.print(`Fail:当前订单code:${id} 已达最大失败次数，停止请求！！！`, order, reportData);
				let txt = "Error:创建订单失败，已达失败上限！";
				EventManager.dispatch(AppEvent.SYS_TOAST_TIP, { content: txt });

				if (OrderRecode.OrderList.length == 0) {
					this.stopRun();
				}
				return;
			}
			this.print(`开始插入一个订单 当前订单code:${id},订单数据:`, order);
			let oneRecord: inf_OrderRecord = { id: id, order: order, reportData: reportData };
			OrderRecode.OrderList.push(oneRecord);

			if (isNotRun == false) {
				this.startRun();
			}
		}
	}
	/** 取出一个订单 */
	getOrder(): inf_OrderRecord | null {
		if (OrderRecode.OrderList.length == 0) {
			return null;
		}
		return OrderRecode.OrderList.shift();
	}
	//开始执行
	startRun() {
		this.stopRun();
		if (OrderRecode.OrderList.length > 0) {
			this.print(`执行订单检测函数==>待处理数目:${OrderRecode.OrderList.length}`);
			if (this._checkTime > 0) {
				this.reqSendOrder();
			}
			this._handlerSendScheduler = this.addScheduler(this._checkTime, this.reqSendOrder);
		}
	}
	/** 发送订单 */
	reqSendOrder(dt?: number): void {
		if (GCache.User.isLoginSuccesed() == false) {
			return;
		}
		let oneOrder = OrderRecode.instance.getOrder();
		if (!oneOrder) {
			OrderRecode.instance.stopRun();
			return;
		}
		//请求更新微信登录凭据
		let self = this;
		this.print(`MID:${GCache.User.getUserMid()},请求发送订单,当前订单code=${oneOrder.id} 订单数据:`, oneOrder.order);
		this.print(`实时更新access_token,之前:${Platform.PLogInfo.access_token} `);
		Platform.updateReFreshAccessToken((state) => {
			let isLogined = GCache.User.isLoginSuccesed();
			this.print(`实时更新access_token,之后:${Platform.PLogInfo.access_token},登录状态:${isLogined},更新状态:${state}`);
			if (isLogined == false || state != true) {
				this.print(`Fail:无法执行创建订单,即将插入缓存队列，等待后续执行,当前登录状态:${isLogined},更新状态:${state}`);
				OrderRecode.instance.setOrder(oneOrder.id, oneOrder.order, oneOrder.reportData, isLogined == false);
				return;
			}
			//使用最新的access_token
			if (oneOrder.order["otherEx"]) {
				oneOrder.order["otherEx"]["access_token"] = Platform.PLogInfo.access_token;
			}
			let sendMsg = {
				cmd: GlobalCMD.PHP_SEND_PAYMENT_ORDER,
				body: oneOrder.order,
			}
			self.checkOuttime(oneOrder.id, oneOrder.order, oneOrder.reportData);

			self.print(`ToServer:请求创建订单:code=${oneOrder.id}`);
			EventManager.dispatch(AppEvent.SYS_TOAST_TIP, { content: GameTxt.pay_creater_order });
			EventManager.dispatch(AppEvent.NET_SEND_MSG, sendMsg)


		});
	}
	//开启超时检测
	checkOuttime(orderid, order, reportData) {
		this.print(`开启创建订单的超时检测 code=${orderid}`);
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
		let handler = this.addScheduler(this.maxOuttime, this.updateOuttime);
		this._OuttimeHandlerMap[handler] = orderid;
		this._OuttimeOrderMap[orderid]["handler"] = handler;
	}
	/** 检测超时回调 */
	updateOuttime(dt, handler) {
		if (!this._OuttimeHandlerMap[handler]) {
			return;
		}
		let orderid = this._OuttimeHandlerMap[handler];
		this.print(`********订单检测超时回调**********code:${orderid},handler:${handler}`)
		if (this._OuttimeOrderMap[orderid]) {
			let order = this._OuttimeOrderMap[orderid]["order"];
			let reportData = this._OuttimeOrderMap[orderid]["reportData"];

			this.stopScheduler(handler);
			this._OuttimeOrderMap[orderid]["handler"] = null;
			this._OuttimeOrderMap[orderid] = null;
			this._OuttimeHandlerMap[handler] = null;
			this._FailOrderMap[orderid] = Utils.number_valueOf(this._FailOrderMap[orderid]) + 1;
			this.print(`Fail:订单检测超时,code:${orderid},handler:${handler},当前失败次数:${this._FailOrderMap[orderid]}`)
			this.setOrder(orderid, order, reportData);
		} else {
			this.print("没有订单？停止超时检测", this._OuttimeOrderMap[orderid]);
			this.stopScheduler(handler);
		}

	}
	//订单回调
	respForWardOrder(event, isSuccess, respData, reqData) {
		this.print("reqData", reqData, "respData", respData)

		let orderid = null;
		if (isSuccess) {
			if (respData["retCode"]) {
				orderid = respData["retCode"];
			};
		} else {
			if (respData["extraInfo"]["retCode"]) {
				orderid = respData["extraInfo"]["retCode"];
			};
		}
		this.print(`ByServer:服务端创建订单结果:${isSuccess} code:${orderid}`);
		//订单上报记录数据
		let reportData = null;
		if (orderid != null && orderid != undefined) {
			if (this._OuttimeOrderMap[orderid]) {
				//停止超时检测
				let handler = this._OuttimeOrderMap[orderid]["handler"];
				this.stopScheduler(this._OuttimeOrderMap[orderid]["handler"]);

				reportData = this._OuttimeOrderMap[orderid]["reportData"];
				if (isSuccess == false && respData["errorType"] == 2000) {
					let tab = {
						id: orderid,
						order: this._OuttimeOrderMap[orderid]["order"],
						reportData: reportData,
					};
					this._OuttimeOrderMap[orderid] = null;
					this._OuttimeHandlerMap[handler] = null;
					this._FailOrderMap[orderid] = Utils.number_valueOf(this._FailOrderMap[orderid]) + 1;
					this.print(`Fail:检测到提交得到的token记录有误，重新提交 code:${orderid},当前失败次数:${this._FailOrderMap[orderid]}`)

					let isLogined = GCache.User.isLoginSuccesed();
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

			EventManager.dispatch(AppEvent.SYS_TOAST_TIP, { content: GameTxt.pay_success });
			//上报订单记录
			if (reportData && respData["orderid"]) {
				reportData["orderID"] = respData["orderid"];

				this.print(`Success:创建订单成功，即将上报订单记录,MID:${GCache.User.getUserMid()},上报数据:`, reportData);
				EventManager.dispatch(AppEvent.NET_REQ_REPORT_PAY_ORDER, reportData);
			}
		} else {
			this.print(`Fail:订单创建失败,不再重新提交 code:${orderid},ErrorCode:${respData["errorType"]},ErrorTips:${respData["errorTips"]}`)
			let txt = GameTxt.pay_failed;
			if (!Utils.string_isEmpty(respData["errorTips"])) {
				txt = respData["errorTips"];
			};
			EventManager.dispatch(AppEvent.SYS_TOAST_TIP, { content: txt });
		};
	}
	//停止执行发送
	stopRun() {
		this.stopScheduler(this._handlerSendScheduler);
		this._handlerSendScheduler = null;
	}
	//登录状态发生改变变化
	loginStateChange(event, state) {
		if (state == GConstants.UserLoginState.LoginSuccess) {
			// this.print("登录成功了，开始订单发送===>订单数:", OrderRecode.OrderList.length)
			this.startRun();
		} else {
			// this.print("断开登录了暂停订单发送===>")
			this.stopAllScheduler();
			for (const orderID in this._OuttimeOrderMap) {
				if (Object.prototype.hasOwnProperty.call(this._OuttimeOrderMap, orderID)) {
					let oneRecode = this._OuttimeOrderMap[orderID];
					this.setOrder(orderID, oneRecode["order"], oneRecode["reportData"], true);
				}
			}
			this._OuttimeOrderMap = {};
			this._OuttimeHandlerMap = {};

		}
	}
	//当前类日志输出
	protected print = function (...args: any[]) {
		Logger.logPay(5, ...args);
	}
};

//记录请求的SceneID
const PayReqSceneiIDRecord = {};

/** 支付代理 */
export class PayAgent extends BaseControll {

	private _data = null;
	//唯一code
	private _code = null;
	/** 当前商品详情 */
	private _currowGoodGift = null;
	//代理状态：PayAgentState
	private _agentState = PayAgentState.Check;
	//支付回调
	private _doPayCallback = null;
	//代理回调
	private _delegateCallback: Function = null;
	//默认商品分区ID
	private _zoneId: number = 1;
	//生成订单所用的参数
	private _orderParam = null;
	//订单上报所用的参数
	private _orderReportParam = null;
	//实例化
	constructor(param) {
		super("PayAgent");
		this._data = param;
		this._code = Utils.timeEx();
		this._orderParam = null;
		this._orderReportParam = null;
		this._doPayCallback = Utils.handler(this, this.doPayCallback);

		this.print(`MID:${GCache.User.getUserMid()},请求了支付,数据为:`, this._data);
		if (Utils.isNotNull(this._data, this._data["scene"], this._data["gid"])) {
			this.doCheck();
		} else {
			this.dump(this._data, "错误的支付代理参数");
		}

	};
	/**初始化添加事件绑定 */
	protected onInitModuleEvent(): void {
		//商品信息有更新
		this.addModelListener(AppEvent.ACTIVITY_GOODSLIST_UPDATE, this.doCheckAgain)
	}
	/** 设置支付参数 选择支付 */
	public setPayParam(param) {

	};
	doCheck(event = null) {
		if (Utils.isNotNull(this._data, this._data["scene"], this._data["gid"]) == false) {
			this.print("错误的支付代理参数");
			return;
		}
		//记录商品详情请求的次数
		let oldNum = Utils.number_valueOf(PayReqSceneiIDRecord[this._data["scene"]], 0);
		let newNum = oldNum + 1;
		PayReqSceneiIDRecord[this._data["scene"]] = newNum;

		let goodInfo = GCache.GoodsData.getGoodsGiftByGoodsID(this._data["scene"]);
		if (!goodInfo) {
			this._agentState = PayAgentState.Check;
			if (newNum >= 2) {
				EventManager.dispatch(AppEvent.SYS_TOAST_TIP, { content: GameTxt.pay_fail_no_goods });
			} else {
				EventManager.dispatch(AppEvent.NET_REQ_GOODS_INFO, { scene: this._data["scene"], code: this._code });
			}
			return;
		}
		this._currowGoodGift = GCache.GoodsData.getOneGoodGift(this._data["scene"], this._data["gid"]);
		this._zoneId = Utils.nullToDefault(this._currowGoodGift["zoneId"], 1);
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
		if (Utils.isNotNull(this._currowGoodGift) == false) {
			//支付失败，商品信息不存在
			this.doEnd(GameTxt.pay_fail_no_goods);
			return;
		}
		this._agentState = PayAgentState.Start;

		switch (this._currowGoodGift["currency"]) {//支付的货币类型
			case GConstants.GoodMoneyType.rmb:
				// if (Platform.isAndroid() == false && Platform.isWindows() == false) {
				// 	//支付失败，IOS暂时不支持
				// 	this.doEnd(GameTxt.pay_fail_platform_not_support);
				// 	return;
				// }
				let price = Utils.nullToDefault(this._currowGoodGift["pamount"], null);
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
				};
				this._agentState = PayAgentState.Waiting;
				this.print(`MID:${GCache.User.getUserMid()},发起一笔支付,商品ID:${this._data["scene"]},GID:${this._data["gid"]},RMB:${price}元,code:${this._code}`);
				Platform.reqSendPay({ //支付
					num: price,
					callback: this._doPayCallback,
					code: this._code,
					scene: this._data["scene"],
					gid: this._data["gid"],
					zoneId: this._zoneId,
				});
				break;
			case GConstants.GoodMoneyType.diamond:
				//支付失败，支付代理暂时不支持钻石支付
				this.print("支付失败，支付代理暂时不支持钻石支付");
				this.doEnd();
				return;
			case GConstants.GoodMoneyType.gold:
				//支付失败，支付代理暂时不支持金条支付
				this.print("支付失败，支付代理暂时不支持金条支付");
				this.doEnd();
				break;
			default:
				//支付失败，不支持的支付类型
				this.print("支付失败，不支持的支付类型 type = " + this._currowGoodGift["currency"]);
				this.doEnd(GameTxt.pay_fail_no_goods);
				return;
		}
	}
	//判断支付方式是否属于RMB支付
	public static isRMB(_type): boolean {
		_type = Utils.number_valueOf(_type);
		if (_type == GConstants.PayType.FREE
			|| _type == GConstants.PayType.SILVER
			|| _type == GConstants.PayType.TICKET
			|| _type == GConstants.PayType.SHARE
			|| _type == GConstants.PayType.VIDEO) {
			//免费、银币，兑换券，分享，看视频不属于RMB支付
			return false;
		}
		return true;
	}
	/** 创建订单参数 */
	createOrderParam() {
		if (!this._currowGoodGift) {
			return false;
		}
		//测试代码
		// Platform.PLogInfo.access_token = "58_eQWNrWIjmP1dYhMv31_k1cxvAopu5o8c4bg6fLpiMb1r5w-OXvE6NVJ89sOrXVdD24PVkADVmaJJP5sf-9WS-eqJ4r8UI-13x-MBmyzcYVpiqOzdq7qhVy3h2i_S9Ox_3frMUOxd5-b8qSAyVVGjACAZZK";
		// Platform.PLogInfo.openId = "owvGE5QcLfmK3jHkkwAMlsUyoJDc";
		Utils.dump("创建订单参数", this._currowGoodGift);
		let param = {
			item_id: this._currowGoodGift["id"],      //商品Id
			ptype: 937,                               //支付渠道
			sceneId: this._data["scene"],             //支付商品分类
			v: Platform.isAndroid() == true ? 2 : 0,  //支付版本：1为IOS(老版本)、2为安卓、6: IOS(新版) 其他为PC客户端
			operation: ClientInfo.PhoneCardType,
			bundleId: ClientInfo.BundleId,
			mobileid: 0,
			hall_version: ClientInfo.HallVer,
		};
		if (this._currowGoodGift["extra"]) {
			for (let key in this._currowGoodGift["extra"]) {
				if (Object.prototype.hasOwnProperty.call(this._currowGoodGift["extra"], key)) {
					let value = this._currowGoodGift["extra"][key];
					if (typeof (value) == "string" || typeof (value) == "number" || typeof (value) == "boolean") {
						param[key] = value;
					}
				}
			}
		};
		let other_param = {
			code: this._code,                     //订单唯一标识
			env: ClientInfo.WX_PayEnv,           //支付环境（0:正式 1:沙箱）
			offerId: ClientInfo.WX_PayOfferId,   //米大师侧注册的应用ID
			zoneId: this._zoneId,                //分区ID
			openId: Platform.PLogInfo.openId,             //用户openId
			access_token: Platform.PLogInfo.access_token, //access_token(实时的)
			price: this._currowGoodGift["pamount"],  //实际支付价格
			time: Utils.time(),                  //订单生成时间戳
		}
		param["otherEx"] = other_param;
		this._orderParam = param;

		//支付方式
		let payType = 0;
		if (this._currowGoodGift["pmodes"] && this._currowGoodGift["pmodes"].length > 0) {
			payType = this._currowGoodGift["pmodes"][0]["id"];
		}
		//订单上报的数据结构
		let reportData = {
			orderID: null,                            //订单ID(创建时补上)
			gameID: Utils.number_valueOf(this._data["otherEx"]["gameID"]),
			levelID: Utils.number_valueOf(this._data["otherEx"]["levelID"]),
			pmode: payType,                                  //下单时的支付方式
			currency: this._currowGoodGift["currency"],//币种类型，比如F币，人民币
			pamount: this._currowGoodGift["pamount"],  //实际支付价格
			scene: this._currowGoodGift["scene"],       //商品类型
			id: this._currowGoodGift["id"],             //商品ID
			pchips: this._currowGoodGift["pchips"],     //商品数量
			sceneType: this._data["sceneType"]          //场景类型
		}
		this._orderReportParam = reportData;

		return true;
	}

	/** 平台支付的回调 */
	doPayCallback(respParam) {
		if (!respParam) {
			return;
		}
		this.print(`MID:${GCache.User.getUserMid()},商品ID:${respParam["req"]["scene"]},GID:${respParam["req"]["gid"]},RMB:${respParam["req"]["num"]}元,code:${this._code},平台支付结果:${respParam["respCode"] == 0 ? "成功" : "失败"}`);
		let txt = null;
		if (respParam["respCode"] == GConstants.AppPayResult.UNINE) {
			txt = GameTxt.pay_fail_platform_not_support;
		};
		if (respParam["req"]["code"] == this._code) {
			if (respParam["respCode"] == GConstants.AppPayResult.SUCCESS) {
				this.doReqOrder();
			} else {
				this.doEnd(txt);
			}
		}
	};
	/** 请求生成订单 */
	doReqOrder() {
		if (!this._orderParam) {
			//支付失败，不支持的支付类型
			this.print("支付成功，但是创建订单失败，无创建参数");
			this.doEnd(GameTxt.pay_fail_platform_error);
			return;
		}
		this._agentState = PayAgentState.DoOrder;

		OrderRecode.instance.setOrder(this._code, this._orderParam, this._orderReportParam);
	}
	//主动结束
	doEnd(txt: string = null) {
		this._agentState = PayAgentState.End;
		if (Utils.string_isEmpty(txt) == false) {
			EventManager.dispatch(AppEvent.SYS_TOAST_TIP, { content: txt });
		}
		this.release();
	}
	public release(): void {
		super.clear();
	}
	//当前类日志输出
	protected print = function (...args: any[]) {
		Logger.logPay(5, ...args);
	}
}

