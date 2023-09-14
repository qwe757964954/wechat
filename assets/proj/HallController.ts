/**
 * Name = HallController
 * URL = db://assets/proj/HallController.ts
 * Time = Fri Apr 29 2022 14:08:39 GMT+0800 (中国标准时间)
 * Author = xueya
 * 大厅控制器
 */

import { view } from "cc";
import { GCache } from "../cache/GCache";
import { AppEvent } from "../config/AppEvent";
import { ClientInfo } from "../config/GameConfig";
import { GConstants, StoreKey } from "../config/GameConstant";
import { UIConfigData, UIID } from "../config/UIConfig";
import { Utils } from "../framework/Utils";
import { Encrypt } from "../framework/crypto/Encrypto";
import { LayerManager } from "../framework/layer/LayerManager";
import { EventManager } from "../framework/manager/EventManager";
import { Network } from "../framework/network/NetState";
import { BaseControll } from "../framework/vc/BaseController";
import { Platform } from "../platform/Platform";
import { GlobalCMD } from "./gnet/GlobalCMD";


export class HallController extends BaseControll {
    //进房超时检测句柄
    _handlerTimeOutIntoGame = null
    private static _instance = null;
    public static getInstance(): HallController {
        if (!this._instance || this._instance == null) {
            this._instance = new HallController("HallController");
        }
        return this._instance;
    }
    public static init(): HallController {
        if (this._instance) {
            this._instance.clear()
        }
        this._instance = null
        HallController.getInstance()
        return
    }

    /**初始化添加事件绑定 */
    protected onInitModuleEvent(): void {
        //显示大厅界面
        this.addModelListener(AppEvent.HALL_GOTO_SHOW, this.showHall)
        //显示大厅界面
        this.addModelListener(AppEvent.HALL_TODO_SHOW, this.toDoHallShow)

        //快速开始
        // this.addModelListener(AppEvent.HALL_QUICK_START, this.quickStart)
        //请求登录初始化
        this.addModelListener(AppEvent.NET_REQ_USER_LOGIN_CORE_INIT, this.reqLoginCoreInit)
        //登录初始化返回
        this.addModelListener(AppEvent.NET_FORWARD_USER_LOGIN_CORE_INIT, this.respLoginCoreInit)

        //请求更新用户信息
        this.addModelListener(AppEvent.NET_REQ_SET_USERINFO, this.reqSetUserInfo)
        //更新用户信息返回
        this.addModelListener(AppEvent.NET_FORWARD_SET_USERINFO, this.respSetUserInfo)
        //请求经验等级配置
        this.addModelListener(AppEvent.NET_REQ_LEVEL_MODEL_CONFIG, this.reqLevelModelConfig)
        //经验等级配置返回
        this.addModelListener(AppEvent.NET_FORWARD_LEVEL_MODEL_CONFIG, this.respLevelModelConfig)
        //请求自己的道具信息
        this.addModelListener(AppEvent.NET_REQ_PROPS_INFO, this.reqPropsInfo)
        //自己的道具信息返回
        this.addModelListener(AppEvent.NET_FORWARD_PROPS_INFO, this.respPropsInfo)

        //请求大厅游戏位配置
        this.addModelListener(AppEvent.NET_REQ_HALL_GAME_CONFIG, this.reqHallGameConfig)
        //大厅游戏位配置返回
        this.addModelListener(AppEvent.NET_FORWARD_HALL_GAME_CONFIG, this.respHallGameConfig)


        //请求大厅在线人数
        this.addModelListener(AppEvent.NET_REQ_ONLINE_PERSON, this.reqOnlinePerson)
        //大厅在线人数回调
        this.addModelListener(AppEvent.NET_FORWARD_ONLINE_PERSON, this.respOnlinePerson)
        //请求子游戏场次中的房间列表
        this.addModelListener(AppEvent.NET_REQ_GAME_LEVEL_ROOM_TAB, this.reqGameLeaveRoom)
        //子游戏场次中的房间列表回调
        this.addModelListener(AppEvent.NET_FORWARD_GAME_LEVEL_ROOM_TAB, this.respGameLeaveRoom)

        //请求子游戏场次中人数
        this.addModelListener(AppEvent.NET_REQ_GAME_LEVEL_PERSON_COUNT, this.reqGameLeavePersonCount)
        //子游戏场次中人数回调
        this.addModelListener(AppEvent.NET_FORWARD_GAME_LEVEL_PERSON_COUNT, this.respGameLeavePersonCount)

        //请求是否需要更新配置
        this.addModelListener(AppEvent.NET_REQ_GOODS_BASE, this.reqGoodsBase)
        //响应是否需要更新配置
        this.addModelListener(AppEvent.NET_RESP_GOODS_BASE, this.respGoodsBase)
    }

    /**
     * 显示大厅
     * @param event 
     * @param isByGame boolean是否从游戏中来
     * @returns 
     */
    showHall(event, isByGame: boolean = false) {
        //此处要判断用户是否登录成功
        if (GCache.User.isLoginSuccesed()) {
            if (!LayerManager.has(UIID.HallPrefab) && !LayerManager.isLoading(UIID.HallPrefab)) {
                LayerManager.clearOther(UIConfigData[UIID.HallPrefab].layer);
                LayerManager.clear(UIConfigData[UIID.HallPrefab].layer);
                EventManager.dispatch(AppEvent.SYS_PACKAGE_LOAD, GConstants.PkgLoaderTaskList.Hall, () => {
                    if (GCache.User.isLoginSuccesed() == false) {
                        return;
                    }
                    //通知:sys周期变化
                    EventManager.dispatch(AppEvent.SYS_APP_LIFE, GConstants.AppRunLife.Hall_Will_Open);
                    EventManager.dispatch(AppEvent.VIEW_UI_OPEN, UIID.HallPrefab, null, {
                        onAdded: function () {
                            //通知:主场景更换
                            EventManager.dispatch(AppEvent.VIEW_UI_MAIN_UPDATE, UIID.HallPrefab);
                            //通知:sys周期变化
                            EventManager.dispatch(AppEvent.SYS_APP_LIFE, GConstants.AppRunLife.Hall_Opened);
                            GCache.setDesk(null);
                            EventManager.dispatch(AppEvent.HALL_TODO_SHOW, isByGame);
                        },
                        onRemoved: function () {
                            //通知:sys周期变化
                            EventManager.dispatch(AppEvent.SYS_APP_LIFE, GConstants.AppRunLife.Hall_Closed);
                        }
                    })
                })
            } else {//存在大厅 判断是否在游戏中
                this.print("存在大厅 判断是否在游戏中");
                this.toDoHallShow(null, false);
            }
        } else {
            //正在登录中
            if (GCache.User.isLogining()) {
                return
            }
            //重新登录
            LayerManager.clear(null);
            EventManager.dispatch(AppEvent.NET_GOTO_START_LOGIN);
        }

    }
    /** 大厅显示完成后的操作 */
    toDoHallShow(event, isByGame = false) {
        //判断是否弹出签到
        // if (GCache.Activity.checkTodayIsOpenSign() == false && GCache.Activity.checkHaveSignin() == true) {
        // 	if (GCache.Activity.checkHaveSignin()) {
        // 		EventManager.dispatch(AppEvent.VIEW_UI_OPEN, UIID.SigninPrefab, null, null, null, true);
        // 	}
        // }
        //请求基础配置
        console.log("请求基础配置")
        EventManager.dispatch(AppEvent.NET_REQ_GOODS_BASE)

        if (isByGame) {//从游戏中返回
            //请求签到数据
            EventManager.dispatch(AppEvent.NET_REQ_SIGNIN_CONFIG)
            //请求限时折扣
            EventManager.dispatch(AppEvent.NET_REQ_HOLIDAYS_GIFTPACKAGE);
            //请求限时折扣礼包数据
            EventManager.dispatch(AppEvent.NET_REQ_GOODS_INFO, { scene: GConstants.GoodsListID.limitPack });
            //请求商城破产数据
            EventManager.dispatch(AppEvent.NET_REQ_GOODS_INFO, { scene: GConstants.GoodsListID.Bankruptcy });
            //请求首充礼包商品数据
            EventManager.dispatch(AppEvent.NET_REQ_GOODS_INFO, { scene: GConstants.GoodsListID.GiftPack });

            //请求商城银币
            EventManager.dispatch(AppEvent.NET_REQ_GOODS_INFO, { scene: GConstants.GoodsListID.MarketSilver });
            //请求商城道具 一期暂时不上
            //EventManager.dispatch(AppEvent.NET_REQ_GOODS_INFO, { scene: GConstants.GoodsListID.MarketProp });
            //请求邮箱数据
            EventManager.dispatch(AppEvent.NET_CMD_REQ_WATCH);

            //请求活动中心数据
            EventManager.dispatch(AppEvent.NET_CMD_REQ_TASK_ACT_CONFIG);
            //请求首充礼包配置
            EventManager.dispatch(AppEvent.NET_REQ_FIRST_PAY_CONFIG)
        } else {
            //请求新手活动
            EventManager.dispatch(AppEvent.NET_REQ_NEW_PLAYER_CONFIG);
            //平台好友授权
            Platform.reqPlatformFriendInteraction(() => {
                if (Platform.WxAuthSettingFriends == 1) {
                    GCache.User.getCloudStorageSaveList((resParam) => {
                        Platform.setPlatformCloudStorage(resParam);
                        //提前预加载数据
                        let data = {}
                        data["UIKey"] = "friendList";
                        data["init"] = true;
                        data["param"] = GCache.User.getCloudStorageParam();
                        Platform.postMessage(data);
                    });
                }
            });
            //通知:请求推荐弹窗
            EventManager.dispatch(AppEvent.RECOMMEND_POP_GET, GConstants.PopupPos.POS_LOGIN)
            //请求商城破产数据
            EventManager.dispatch(AppEvent.NET_REQ_GOODS_INFO, { scene: GConstants.GoodsListID.Bankruptcy });
        }

    }

    /** 登录初始化 */
    reqLoginCoreInit(event) {
        let data = {
            w: view.getVisibleSize().width,
            h: view.getVisibleSize().height,
            deviceno: ClientInfo.SignDeviceId,
            networkstate: Network.instance.name,
            osversion: `${ClientInfo.PhoneModel},${ClientInfo.SysVer}`,
            macid: ClientInfo.MachineId,
            guid: ClientInfo.Guid,
            config_format: "json",
            api_ver: 2,
        }
        let sendMsg = {
            cmd: GlobalCMD.PHP_CORE_INIT,
            body: data,
        }
        EventManager.dispatch(AppEvent.NET_SEND_MSG, sendMsg)
    }
    /** 登录初始化返回 */
    respLoginCoreInit(event, isSuccess, respData, reqData) {
        this.dump(respData, "登录初始化返回" + isSuccess)

        if (isSuccess == false) {
            EventManager.dispatch(AppEvent.NET_REQ_USER_LOGIN_CORE_INIT);
            return;
        }
        respData = Utils.table_verify(respData);
        //结算破产开关
        if (respData["bankrupt_pay"]) {
            GCache.BankrupData.setBankruptPaySceneSatus(respData["bankrupt_pay"]);
        }

        //图片配置相关信息
        if (respData["goodsbase_url"]) {
            let conf = respData["goodsbase_url"];
            conf["srvtime"] = respData["srvtime"];
            GCache.PropsConf.setPropsBaseUrlConf(conf)
        }

    }

    //请求更新用户信息
    reqSetUserInfo(event, param) {
        if (!param) {
            return
        }
        param = Utils.table_verify(param)
        let body = {}
        if (param["nick"] != null) {
            body['nick'] = param["nick"];
        }
        if (param["sex"] != null) {
            body['sex'] = param["sex"];
        }
        if (param["city"] != null) {
            body['city'] = param["city"];
        }
        if (param["avatar"] != null) {
            body['avatar'] = param["avatar"];
        }

        let sendMsg = {
            cmd: GlobalCMD.PHP_UPDATE_USERINFO,
            body: body,
        }
        console.log("发起更新信息请求:", sendMsg)
        EventManager.dispatch(AppEvent.NET_SEND_MSG, sendMsg)

    }

    //更新用户信息返回
    respSetUserInfo(event, isSuccess, respData, reqData) {
        console.log("更新用户信息返回:", isSuccess, respData, reqData)
        if (isSuccess) {
            respData = Utils.table_verify(respData)
            if (respData) {
                let body = {}
                if (reqData.nick && respData.nick) {
                    body['nick'] = respData.nick
                }
                if (reqData.sex && respData.sex) {
                    body['sex'] = respData.sex
                }
                if (reqData.avatar) {
                    if (respData.icon) {
                        body['avatar_s'] = respData.icon
                        body['avatar_m'] = respData.icon
                        body['avatar_b'] = respData.icon_big
                    }
                }
                console.log("更新用户信息返回body:", body)
                for (let key in body) {
                    if (Object.prototype.hasOwnProperty.call(body, key)) {
                        let value = body[key];
                        if (value != null && value != undefined) {
                            GCache.User.updateDataUserKey(key, value)
                        }
                    }
                }
                // 用户信息有更新
                EventManager.dispatch(AppEvent.USER_UPDATE_INFO, body)
            }
        }
    }
    //请求经验等级配置
    reqLevelModelConfig(event) {
        let sendMsg = {
            cmd: GlobalCMD.PHP_LEVEL_MODEL_CONFIG,
            body: {
                cli_ver: -1
            },
        }
        EventManager.dispatch(AppEvent.NET_SEND_MSG, sendMsg)
    }

    //经验等级配置返回
    respLevelModelConfig(event, isSuccess, respData, reqData) {
        this.dump(respData, "经验等级配置返回" + isSuccess)
        if (isSuccess) {
            GCache.User.updateLevelExpConfig(respData["level"])
            //经验等级有更新
            EventManager.dispatch(AppEvent.USER_UPDATE_LEVEL)
        }
    }
    //请求自己的道具信息
    reqPropsInfo(event) {
        let sendMsg = {
            cmd: GlobalCMD.PHP_PROPS_INFO,
            body: {},
        }
        EventManager.dispatch(AppEvent.NET_SEND_MSG, sendMsg)
    }

    //自己的道具信息返回
    respPropsInfo(event, isSuccess, respData, reqData) {
        this.dump(respData, "道具信息返回" + isSuccess)
        Utils.dump(respData)
        if (isSuccess) {
            //更新道具信息
            GCache.User.updatePropsInfo(respData);
            //道具信息有更新
            EventManager.dispatch(AppEvent.USER_UPDATE_PROPS)
        }
    }

    //请求大厅游戏配置
    reqHallGameConfig(event) {
        let param = {
            hall_version: ClientInfo.HallVer,   //hall_version 与 cli_ver不同则重新拉取数据
            cli_ver: -1,
            enable_special_game: 1,                        //此位标识特殊游戏位，1为返回，0为不返回--包括私人房，比赛场
            guid: GCache.User.getUserGuid(),
            lastLoginMid: GCache.User.getLastlocalMid(),  //用户上次登录的Mid, 用于游戏列表白名单控制
            branch: Platform.isIOS()? 0 : 1,    // 强制android使用完整包，ios使用正常包
        }
        let sendMsg = {
            cmd: GlobalCMD.PHP_HALLVIEW_CONFIG,
            body: param,
        }
        EventManager.dispatch(AppEvent.NET_SEND_MSG, sendMsg)
    }

    //大厅游戏配置返回
    respHallGameConfig(event, isSuccess, respData, reqData) {
        this.dump(respData, "大厅游戏配置返回" + isSuccess)
        if (isSuccess) {
            GCache.SelectGame.updateServerGameConfig(respData.info)
            EventManager.dispatch(AppEvent.HALL_UPDATE_GAME_CONFIG)
        }
    }





    //请求大厅在线人数
    reqOnlinePerson(event, param) {
        let sendMsg = {
            cmd: GlobalCMD.PHP_HALL_GAME_PLAYER_NUM,
            body: {},
        }
        EventManager.dispatch(AppEvent.NET_SEND_MSG, sendMsg)

    }
    //大厅在线人数回调
    respOnlinePerson(event, isSuccess, respData, reqData) {
        // this.print("大厅在线人数返回 ===>" + isSuccess)
        // Utils.dump(respData)
        if (isSuccess) {
            GCache.SelectGame.updateServerGamePersonOnline(respData)
            EventManager.dispatch(AppEvent.HALL_UPDATE_GAME_ONLINE_PERSON)
        }
    }
    //请求子游戏场次中的房间列表
    reqGameLeaveRoom(event, gameID = null, islevel_500: number = 1) {
        if (Utils.isNull(gameID)) {
            return
        }
        if (Utils.isNull(islevel_500)) {
            islevel_500 = 1
        }
        let ver = GCache.SelectGame.getGameVersionByGameID(gameID)

        if (!ver) {
            ver = 0
        }
        let param = {

            hall_version: ClientInfo.HallVer,
            current_ver: 0,
            game_id: gameID,
            islevel_500: islevel_500,        //是否返回包含快速场数据，不传或0不返回，1返回
            gameVer: ver,

        }
        let sendMsg = {
            cmd: GlobalCMD.PHP_GAME_LEVEL_LIST,
            body: param,
        }
        EventManager.dispatch(AppEvent.NET_SEND_MSG, sendMsg)
    }

    //子游戏场次中的房间列表返回
    respGameLeaveRoom(event, isSuccess, respData, reqData) {
        this.dump(respData, "子游戏场次中的房间列表返回" + isSuccess)

        if (isSuccess) {
            let isReset = true
            if (reqData && reqData["islevel_500"] != 1) {
                isReset = false
            }
            GCache.SelectGame.updateServerGameLevelTabList(respData["gameid"], respData["levels"], isReset)
            this.print("当前保存的游戏房间列表缓存")
            Utils.dump(GCache.SelectGame.getServerGameLevelTabListByGameID(respData["gameid"]))
            EventManager.dispatch(AppEvent.HALL_UPDATE_GAME_LEVEL_TAB, respData["gameid"])
        }
    }
    //请求子游戏场次中人数
    reqGameLeavePersonCount(event, gameID = null) {
        if (Utils.isNull(gameID)) {
            return
        }
        let param = {
            game_id: gameID,
        }
        let sendMsg = {
            cmd: GlobalCMD.PHP_GAME_LEVEL_COUNT,
            body: param,
        }
        EventManager.dispatch(AppEvent.NET_SEND_MSG, sendMsg)
    }

    //子游戏场次中人数返回
    respGameLeavePersonCount(event, isSuccess, respData, reqData) {
        this.dump(respData, "子游戏场次中人数返回" + isSuccess)

        if (isSuccess) {
            GCache.SelectGame.updateServerGameLevelPeson(respData["game_id"], respData["level_cnt"])
            EventManager.dispatch(AppEvent.HALL_UPDATE_GAME_LEVEL_PERSON, respData["game_id"])
        }
    }
    //当前类日志输出
    public print = function (...args: any[]) {
    }
    //当前类日志输出
    // public dump = function (arg1, args2 = null) {
    // }




    /**
     * 请求是否需要更新配置
     * @param event 
     */
    reqGoodsBase(event) {
        this.print("基础配置请求")
        let baseConfTime = GCache.PropsConf.getPropsConfTime(StoreKey.PROPS_BASE_CONF);
        let unionConfTime = GCache.PropsConf.getPropsConfTime(StoreKey.PROPS_UNION_CONF);
        let obj = {
            1: baseConfTime,
            2: unionConfTime,
        }
        let type = Encrypt.JsonEncode(obj)
        let param = {
            type: type
        }
        let sendMsg = {
            cmd: GlobalCMD.PHP_GOODS_BASE,
            body: param,
        }
        EventManager.dispatch(AppEvent.NET_SEND_MSG, sendMsg)
    }

    /**
     * 返回是否更新配置 
     * @param event 
     * @param isSuccess 
     * @param respData 
     * @param reqData 
     */
    respGoodsBase(event, isSuccess, respData, reqData) {
        console.log("基础配置返回", isSuccess, respData, reqData)
        if (isSuccess) {
            if (!Utils.table_isEmpty(respData)) {
                this.print("数据不为空,需要下载");
                let propsUrlConf = GCache.PropsConf.getPropsBaseUrlConf();
                let iconPre = propsUrlConf["icon_pre"]
                if (Utils.string_isEmpty(iconPre)) {
                    return;
                }
                let time = propsUrlConf["srvtime"];
                let filepre = propsUrlConf["file_pre"];
                let filename = propsUrlConf['file_name'];
                let coreGoodsBaseUrl = filepre + filename[4] + "?v=" + time;
                let unionGoodsBaseUrl = filepre + filename[5] + "?v=" + time;
                console.log("goodsurl:", coreGoodsBaseUrl, unionGoodsBaseUrl);
                //飞小鸡没有地区性道具
                GCache.PropsConf.downloadAndSavePropsConf(coreGoodsBaseUrl, StoreKey.PROPS_BASE_CONF);
                GCache.PropsConf.downloadAndSavePropsConf(unionGoodsBaseUrl, StoreKey.PROPS_UNION_CONF);
            } else {
                this.print("数据为空")
            }
        } else {
            this.print("hehe请求失败")
        }
    }
}