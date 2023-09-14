/**
 * Name = GoodsDataServers
 * URL = db://assets/proj/servers/GoodsDataServers.ts
 * Time = Wed 2022 09.28 19:03:18 GMT+0800 (中国标准时间)
 * Author = xueya
 * {物品 道具 角色 建造 商城 付费礼包}服务
 */
import { GCache } from "../../cache/GCache";
import { AppEvent } from "../../config/AppEvent";
import { ClientInfo } from "../../config/GameConfig";
import { GConstants } from "../../config/GameConstant";
import { UIID } from "../../config/UIConfig";
import { EventManager } from "../../framework/manager/EventManager";
import { Utils } from "../../framework/Utils";
import { BaseControll } from "../../framework/vc/BaseController";
import { GlobalCMD } from "../gnet/GlobalCMD";
import { PayAgent } from "../PayAgent";


export class GoodsDataServers extends BaseControll {
    private static _instance = null;
    public static getInstance(): GoodsDataServers {
        if (!this._instance || this._instance == null) {
            this._instance = new GoodsDataServers("GoodsDataServers");
        }
        return this._instance;
    }

    /** 上次请求更新的时间 */
    private _lastUpdateTime = {
        ["GoodsData"]: 0,
        ["Props"]: 0,
        ["Roles"]: 0,
        ["RoleSkill"]: 0,
        ["BuildData"]: 0,
    };


    /** 循环的队列 */
    private eventGoodlisteners = {};
    /** 暂存的缓存队列 */
    private tempEventGoodlisteners = {};
    /** 当前请求的创建订单数据 */
    private currowReqCreaterOrder = null;
    /** 分享过期时间判断 */
    private handlerShareExpTime = null;
    //实例化
    constructor(name: string) {
        super(name)
    };
    public static init(): GoodsDataServers {
        if (this._instance) {
            this._instance.clear()
        }
        this._instance = null
        GoodsDataServers.getInstance();
        return
    }

    /**初始化添加事件绑定 */
    protected onInitModuleEvent(): void {
        //请求拉取请求拉取商城列表/详情/数据
        this.addModelListener(AppEvent.NET_REQ_GOODS_INFO, this.reqGoodsInfo)
        //商城数据返回
        this.addModelListener(AppEvent.NET_FORWARD_GOODS_INFO, this.resqGoodsInfo)
        //商城请求购买道具
        this.addModelListener(AppEvent.NET_CMD_REQ_BUY_MALL_PROP, this.reqBuyMallProp)
        //商城请求购买道具返回
        this.addModelListener(AppEvent.NET_CMD_RESP_BUY_MALL_PROP, this.respBuyMallProp)

        /************************第三方相关************************/
        //即将发起支付
        this.addModelListener(AppEvent.OTHER_PAY_WILL, this.reqWillPay)
        //支付的结果
        this.addModelListener(AppEvent.OTHER_PAY_RESULT, this.otherPayResult)
        //分享指定好友的结果
        this.addModelListener(AppEvent.OTHER_SHTRE_FRIEND_RESULT, this.otherShareFriend)

    }
    // /** 请求拉取商城列表/详情 */
    reqGoodsInfo(event, param) {
        if (Utils.table_isEmpty(param)) {
            return;
        }
        param = Utils.table_verify(param);
        param["scene"] = Utils.number_valueOf(param["scene"], GConstants.GoodsListID.MarketGold); //默认获取银币 详见 GoodsListID配置
        param["money"] = Utils.nullToDefault(param["money"], GCache.User.getUserMoneyByID());
        param["operation"] = ClientInfo.PhoneCardType;  //手机卡类型 1移动 2 联通 3 电信
        param["bundleId"] = ClientInfo.BundleId;        //包名

        let sendMsg = {
            cmd: GlobalCMD.PHP_GOODS_INFO,
            body: param,
        }
        EventManager.dispatch(AppEvent.NET_SEND_MSG, sendMsg)
    }
    //返回商品数据
    resqGoodsInfo(event, isSuccess, respData, reqData) {
        this.dump(respData, "商品商城数据返回---" + isSuccess)
        if (!isSuccess) {
            return;
        }
        if (Utils.table_isEmpty(respData)) {
            return;
        }
        GCache.ShopInfo.update(respData)
        let sceneData = GCache.GoodsData.updateGoods(respData);
        //通知商品列表有更新
        if (sceneData) {
            EventManager.dispatch(AppEvent.ACTIVITY_GOODSLIST_UPDATE, sceneData, reqData);
            GCache.ShopInfo.update(sceneData)
        }
    }
    /** 请求商城兑换 */
    reqBuyMallProp(event = null, itemData) {
        console.log('请求商城兑换', itemData)
        let param = {
            gid: itemData.gid, //兑换的商品
            gnum: itemData.gnum, //数量
            scene: GConstants.ShopBigTabType.PROPS
        }
        let sendMsg = {
            cmd: GlobalCMD.PHP_BUY_MALL_PROP,
            body: param,
        }
        EventManager.dispatch(AppEvent.NET_SEND_MSG, sendMsg);
    }
    /** 请求商城兑换返回 */
    respBuyMallProp(event, isSuccess, respData, reqData) {
        this.print("请求商城兑换(兑换道具)返回", isSuccess, respData, reqData)
        //关闭网络loading
        EventManager.dispatch(AppEvent.SYS_CLOSE_NETLOADING);
        if (isSuccess && respData['flag'] >= 0) {
            let flag = Utils.number_valueOf(respData["flag"]);
            let _data = GCache.PropsConf.getPropsInfoById(respData['propsId'])
            //购买成功 1：金条diamond 银币:money 2：兑换券
            if (flag == 1) {
                //更新资产数据 银币
                if (respData["money"] != null) {
                    GCache.User.updateUserMoneyByID(GConstants.PropertyType.SILVER_COIN, respData["money"])
                }
                //金条
                if (respData["diamond"] != null) {
                    GCache.User.updateUserMoneyByID(GConstants.PropertyType.GOLD_BAR, respData["diamond"])
                }
                //通知成功兑换结果
                EventManager.dispatch(AppEvent.NOTIFY_EXCHANGE_RESULT, { state: isSuccess, data: respData })
                //打开恭喜获得
                let paramGX = {
                    name: respData.name,
                    icon: _data['url'],
                    num: reqData['gnum'],
                }
                EventManager.dispatch(AppEvent.VIEW_UI_OPEN, UIID.GongXiHuoDePrefab, [paramGX])
            } else if (flag == -2) {//道具已满，私信发放
                //更新资产数据
                if (respData["money"] != null) {
                    GCache.User.updateUserMoneyByID(GConstants.PropertyType.SILVER_COIN, respData["money"])
                }
                if (respData["diamond"] != null) {
                    GCache.User.updateUserMoneyByID(GConstants.PropertyType.GOLD_BAR, respData["diamond"])
                }
                //通知道具已满时候兑换结果
                EventManager.dispatch(AppEvent.NOTIFY_EXCHANGE_RESULT, { state: false, data: respData })
            }
        } else {
            EventManager.dispatch(AppEvent.SYS_TOAST_TIP, { content: respData['msg'] })
            //通知失败的兑换结果
            EventManager.dispatch(AppEvent.NOTIFY_EXCHANGE_RESULT, { state: false, data: respData })
        }
    }
    /** 平台支付结果 */
    otherPayResult(event, respBody) {
        this.print("平台支付结果==>", respBody);
        if (respBody && respBody["respCode"] == GConstants.AppPayResult.SUCCESS) {

        }
    }
    public clear(): void {
        super.clear();
        this.tempEventGoodlisteners = {};
        this.eventGoodlisteners = {};
    }
    /**
     * 即将请求支付
     * @param event 
     * @param goodID 商品分类ID 详见GoodsListID
     * @param gid 具体商品ID
     */
    reqWillPay(event, goodID, gid, callback = null) {
        if (Utils.isNull(goodID) || Utils.isNull(gid)) {
            return;
        }
        let param = {
            scene: goodID,
            gid: gid,
            callback: callback,
            sceneType: GCache.CurrowPaySceneType,
            otherEx: {}
        }
        if (GCache.Desk) {
            param.otherEx = {
                gameID: GCache.Desk.getCurGameID(),
                tableID: GCache.Desk.getCurTableID(),
                levelID: GCache.Desk.getCurLevelID(),
            }
        }

        this.dump(param, "即将请求支付")
        let payAgent = new PayAgent(param);
    }
    /**
     * 邀请好友成功之后获取奖励
     * @param  
     * @param  商品分类ID 详见GoodsListID
     * @param  具体商品ID
     */
    otherShareFriend(event, shareResult) {
        if (shareResult) {
            // 获取邀请好友奖励配置
            let shareId = 0
            let friendShareMsg = GCache.ShareInfo.getShareConfigByType(GConstants.ShareSceneConf.friend) || []
            if (Utils.table_isEmpty(friendShareMsg)) {
                return  //拉取不到配置时候默认给的奖励 
            } else {
                if (friendShareMsg && friendShareMsg[0]['share_id'])
                    shareId = friendShareMsg[0]['share_id']
                EventManager.dispatch(AppEvent.NET_REQ_SHARE_AWARD, shareId, GConstants.ReqUrl.shareType.other, false)
            }
        } else {
            EventManager.dispatch(AppEvent.SYS_TOAST_TIP, { content: "请分享到指定好友" });
        }

    }
}

