/**
 * Name = ShareServers
 * URL = db://assets/proj/servers/ShareServers.ts
 * Time = Wed 2022 09.28 19:03:18 GMT+0800 (中国标准时间)
 * Author = xueya
 * 分享相关服务
 */

import { GCache } from "../../cache/GCache";
import { AppEvent } from "../../config/AppEvent";
import { ClientInfo, GameConfig } from "../../config/GameConfig";
import { GConstants } from "../../config/GameConstant";
import { UIID } from "../../config/UIConfig";
import { Encrypt } from "../../framework/crypto/Encrypto";
import { Md5 } from "../../framework/crypto/Md5";
import { EventManager } from "../../framework/manager/EventManager";
import { HttpRequest } from "../../framework/network/HttpRequest";
import { Utils } from "../../framework/Utils";
import { BaseControll } from "../../framework/vc/BaseController";

export class ShareServers extends BaseControll {
    private static _instance = null;
    public static getInstance(): ShareServers {
        if (!this._instance || this._instance == null) {
            this._instance = new ShareServers("ShareServers");
        }
        return this._instance;
    }
    //实例化
    constructor(name: string) {
        super(name)
    };
    public static init(): ShareServers {
        if (this._instance) {
            this._instance.clear()
        }
        this._instance = null
        ShareServers.getInstance();
        return
    }

    /**初始化添加事件绑定 */
    protected onInitModuleEvent(): void {
        /** 请求获取分享配置 */
        this.addModelListener(AppEvent.NET_REQ_SHARE_CONFIG, this.reqShareConfig);
        /** 请求获取分享配置返回 */
        this.addModelListener(AppEvent.NET_RESP_SHARE_CONFIG, this.respShareConfig);
        /** 请求分享领奖 */
        this.addModelListener(AppEvent.NET_REQ_SHARE_AWARD, this.reqShareAward);
        /** 请求分享领奖返回 */
        this.addModelListener(AppEvent.NET_RESP_SHARE_AWARD, this.respShareAward)
        //请求看视频发奖
        this.addModelListener(AppEvent.NET_REQ_ADS_AWARD, this.reqADSAWard)
        /** 请求看视频领奖返回 */
        this.addModelListener(AppEvent.NET_RESP_ADS_AWARD, this.respADSAWard);
    }
    /** 请求获取所有分享配置 */
    reqShareConfig(event = null) {
        let http = new HttpRequest();
        let data = {
            action: GConstants.ReqUrl.shopShareUrl,
            ssid: GCache.User.getDataUser("ssid", ""),
            appid: ClientInfo.PlatFormAppID,
        }
        http.post(GameConfig.instance.AppUrlConf.Web, JSON.stringify(data), (receiveData) => {
            let _resultData = Utils.nullToDefault(Encrypt.JsonDecode(receiveData), { result: {} });
            //更新数据之后通知数据返回
            GCache.ShareInfo.updateConfig(_resultData.result);
            let isSuccess = !Utils.table_isEmpty(_resultData)
        })
    }
    /** 请求分享配置返回 */
    respShareConfig(event, isSuccess, respData, reqData) {
        this.print("请求分享配置返回", isSuccess, respData)
    }
    /**
     * 请求分享领奖
     * @param event  
     * @param isShop //是否未商城分享
     * @param shareID 
     * @param type 分享类型类型 1-商城视频，商城分享 2-其他分享
     */
    reqShareAward(event, shareID, type, isShop: boolean = false) {
        console.log('执行请求分享领奖')
        if (shareID == null) {
            return;
        }
        let http = new HttpRequest();
        let _md5 = '123!@#*&908byaa' + type + shareID + ClientInfo.PlatFormAppID + GCache.User.getUserMid()
        let data = {
            action: GConstants.ReqUrl.shareCBUrl,
            appid: ClientInfo.PlatFormAppID,
            mid: GCache.User.getUserMid(),
            ssid: GCache.User.getDataUser("ssid", ""),
            type: type,
            mark: Md5(_md5),
        }
        if (isShop) {
            data["goods_id"] = shareID;
        } else {
            data["share_id"] = shareID;
        }
        http.post(GameConfig.instance.AppUrlConf.Web, JSON.stringify(data), (receiveData) => {
            let _resultData = Encrypt.JsonDecode(receiveData)//JSON.parse(receiveData || '{result:{}}')
            _resultData = Utils.table_verify(_resultData);
            let isSuccess = (!Utils.table_isEmpty(_resultData.result));
            console.log('请求分享领奖返回值', receiveData, isSuccess, _resultData)
            EventManager.dispatch(AppEvent.NET_RESP_SHARE_AWARD, isSuccess, _resultData, data);
        })

    }
    /** 请求分享领奖返回 */
    respShareAward(event, isSuccess, respData, reqData) {
        if (isSuccess == false) {
            let toastData = respData['error'] ? respData['error'] : '分享失败请联系客服'
            this.print('请求分享失败', isSuccess, toastData)
            EventManager.dispatch(AppEvent.SYS_TOAST_TIP, { content: toastData });
            return;
        }
        respData.result = Utils.table_verify(respData.result);
        respData.result.reward = Utils.table_verify(respData.result.reward, true);
        this.print('请求分享成功返回', reqData, respData.result)
        // 打开获得成功页面
        EventManager.dispatch(AppEvent.VIEW_UI_OPEN, UIID.GongXiHuoDePrefab, respData.result.reward)
        //更新资产 PropertyType
        respData['result']['reward'].forEach(item => {
            let _type = Number(item['type'])
            let res = Utils.table_keyof(GConstants.PropertyType, _type)
            let count = 0
            if (res != null) {
                let curentRich = GCache.User.getUserMoneyByID(_type)
                GCache.User.updateUserMoneyByID(_type, curentRich + Number(item["num"]))
            } else {
                count = count + 1;
            }
            if (count > 0) {
                EventManager.dispatch(AppEvent.NET_CMD_REQ_USER_BACKPACK);
            }
        })

        //分享成功后根据id去查找商品(期望服务端能返回当前类别和gid)
        GCache.ShopInfo.onUpdateGoods(reqData.goods_id, respData.result);
        //分享成功之后开始计时
        GCache.ShareInfo.shareSuccessTimeAdd(reqData['goods_id'])
    }
    /** 请求看视频领奖 */
    reqADSAWard(event, shareID, type, isShop: boolean = false) {
        if (shareID == null) {
            return;
        }
        let http = new HttpRequest();
        let _md5 = '123!@#*&908byaa' + type + shareID + ClientInfo.PlatFormAppID + GCache.User.getUserMid()
        let data = {
            action: GConstants.ReqUrl.shareCBUrl,
            appid: ClientInfo.PlatFormAppID,
            mid: GCache.User.getUserMid(),
            ssid: GCache.User.getDataUser("ssid", ""),
            type: type,
            mark: Md5(_md5),
        }
        if (isShop) {
            data["goods_id"] = shareID;
        } else {
            data["share_id"] = shareID;
        }
        http.post(GameConfig.instance.AppUrlConf.Web, JSON.stringify(data), (receiveData) => {
            let _resultData = Encrypt.JsonDecode(receiveData)//JSON.parse(receiveData || '{result:{}}')
            _resultData = Utils.table_verify(_resultData);
            console.log('请求看视频http', _resultData)
            let isSuccess = (Utils.table_isEmpty(_resultData.result) != true);
            EventManager.dispatch(AppEvent.NET_RESP_ADS_AWARD, isSuccess, _resultData, data);

        })
    }
    /** 请求看视频领奖返回 */
    respADSAWard(event, isSuccess, respData, reqData) {
        console.log('请求看视频数据返回', isSuccess, respData, reqData)
        if (isSuccess == false) {
            EventManager.dispatch(AppEvent.SYS_TOAST_TIP, { content: "请勿频繁点击" });
            return;
        }
        // 打开获得成功页面
        EventManager.dispatch(AppEvent.VIEW_UI_OPEN, UIID.GongXiHuoDePrefab, respData.result.reward)
        //更新资产 PropertyType
        respData['result']['reward'].forEach(item => {
            let _type = Number(item['type'])
            let res = Utils.table_keyof(GConstants.PropertyType, _type)
            let count = 0
            if (res != null) {
                let curentRich = GCache.User.getUserMoneyByID(_type)
                GCache.User.updateUserMoneyByID(_type, curentRich + Number(item["num"]))
            } else {
                count = count + 1;
            }
            if (count > 0) {
                EventManager.dispatch(AppEvent.NET_CMD_REQ_USER_BACKPACK);
            }
        })
        GCache.ShopInfo.onUpdateGoods(reqData.goods_id, respData.result);
    }


}