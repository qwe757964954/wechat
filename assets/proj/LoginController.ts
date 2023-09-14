/**
 * Name = LoginController
 * URL = db://assets/proj/LoginController.ts
 * Time = Mon Apr 18 2022 11:30:53 GMT+0800 (中国标准时间)
 * Author = xueya
 * 登录控制器
 */

import { GCache } from "../cache/GCache";
import { AppEvent } from "../config/AppEvent";
import { ClientInfo, GameConfig, SystemConf } from "../config/GameConfig";
import { GConstants, StoreKey } from "../config/GameConstant";
import { GameTxt } from "../config/GameTxt";
import { UIConfigData, UIID } from "../config/UIConfig";
import { Encrypt } from "../framework/crypto/Encrypto";
import { inf_GameIntoParams, inf_LoginViewInfo, inf_PopWindowParams } from "../framework/InterfaceDefines";
import { LayerManager } from "../framework/layer/LayerManager";
import { LocalStorage } from "../framework/LocalStorage";
import { Logger } from "../framework/log/Logger";
import { EventManager } from "../framework/manager/EventManager";
import { Utils } from "../framework/Utils";
import { BaseControll } from "../framework/vc/BaseController";
import { Platform } from "../platform/Platform";
import { GlobalCMD } from "./gnet/GlobalCMD";
import { GSocket } from "./gnet/GSocket";

export class LoginController extends BaseControll {

    //界面传递的数据
    _viewLoginParam: inf_LoginViewInfo | null = null;
    //当前请求的登录数据
    _reqloginInfo = null;
    //当前登录请求次数
    _reqLoginNum = 0;
    //登录最大请求次数
    _reqLoginMaxNum = 3;

    private static _instance = null;
    public static getInstance(): LoginController {
        if (!this._instance || this._instance == null) {
            this._instance = new LoginController("LoginController");
        }
        return this._instance;
    }
    public static init(): LoginController {
        if (this._instance) {
            this._instance.clear()
        }
        this._instance = null
        LoginController.getInstance()
        return
    }

    //实例化
    constructor(name: string) {
        super(name)
    };
    /**初始化添加事件绑定 */
    protected onInitModuleEvent(): void {
        //登陆
        this.addModelListener(AppEvent.NET_GOTO_START_LOGIN, this.startLogin)
        //显示登录界面
        this.addModelListener(AppEvent.LOGIN_GOTO_SHOW, this.showLoginView)

        //请求游客登录
        this.addModelListener(AppEvent.NET_REQ_USER_LOGIN_YOUKE, this.reqYoukeLogin)
        //请求游客登录后返回的结果
        this.addModelListener(AppEvent.NET_FORWARD_USER_LOGIN_YOUKE, this.respNetLoginYouke)
        //请求登录后返回的结果
        this.addModelListener(AppEvent.NET_FORWARD_USER_LOGIN_CORE, this.respNetLoginCore)
        //广播：大厅登录成功
        this.addModelListener(AppEvent.NET_RECEIVE_LOGIN_SUCCESS, this.respNetLoginSuccess)
        //广播:异地登录
        this.addModelListener(AppEvent.NET_RECEIVE_MULTI_DEVICE_LOGIN, this.respNetLoginMultiDevice)
        //保活检测
        this.addModelListener(AppEvent.NET_RECEIVE_KEEP_ALIVE, this.respNetKeepAlive)
        //登录状态改变
        this.addModelListener(AppEvent.LOGIN_STATE_CHANGE, this.receiveLoginStateChange)

    }
    //开始登录
    startLogin(event, reqParam: inf_LoginViewInfo = null) {
        if (reqParam) {
            this._viewLoginParam = reqParam
        }
        if (this._reqLoginNum >= this._reqLoginMaxNum) {//此时要断开连接并显示界面
            this._resetFirstLogin()
            this.showLoginView()
        } else {
            let loginType = null;
            if (this._viewLoginParam && this._viewLoginParam.access_token && this._viewLoginParam.openId && this._viewLoginParam.userinfo) {
                loginType = GConstants.UserLoginType.WechatLogin;
            }
            this.autoLogin(loginType);
        }
    }
    //自动登录
    autoLogin(loginType = null) {
        if (!GSocket.instance.isConnected()) {
            let url = GameConfig.instance.AppUrlConf.Socket;
            EventManager.dispatch(AppEvent.NET_START_CONNECT, url)
            return
        }
        let _loginType = loginType || GCache.User.getLastlocalLoginType();

        switch (_loginType) {
            case GConstants.UserLoginType.BoyaaPassportLogin:  //boyaa通行证登录
                this.startByaccLogin();
                break;
            case GConstants.UserLoginType.WechatLogin:  //wx登录
                this.startWeiXinLogin();
                break;
            default:
                this.reqYoukeLogin();
                break;
        }
    }
    //通行证登录
    startByaccLogin() {
        let lastLoginInfo = GCache.User.getLastlocalLoginInfo()
        if (!lastLoginInfo) {
            return
        }
        let lastLoginByacc = GCache.User.getLastlocalByacc()
        let loginAccount, loginPsd, bid, access_token;
        let mType = 0;
        if (!Utils.string_isEmpty(lastLoginByacc)) {
            loginAccount = lastLoginByacc;

            let [isExsit, key, value] = GCache.User.checkIsExsitAccountInfo(loginAccount)

            let loginInfo = value;

            loginPsd = loginInfo["loginPsd"];
            bid = loginInfo["bid"] || lastLoginInfo["bid"];
            access_token = loginInfo["access_token"] || GCache.User.getLastlocalToken();

            if (!Utils.string_isEmpty(loginAccount) && !Utils.string_isEmpty(loginPsd)) {//有账号有密码，则通行证登录 
                mType = 1;
            } else if (!Utils.string_isEmpty(loginAccount) && !Utils.string_isEmpty(bid) && !Utils.string_isEmpty(access_token)) { //有账号没有密码，则使用bid和accessToken登录
                mType = 2;
            } else {
                mType = 3;
            }

            switch (mType) {
                case 1:  //有账号有密码，则博雅通行证登录 
                    this._boyaaPassportLogin(loginAccount, loginPsd, bid, access_token);
                    break;
                case 2:  //有账号没有密码，则使用bid和accessToken登录 
                    this._boyaaPassportBidTokenLogin(loginAccount, loginPsd, bid, access_token);
                    break;
                case 3:
                    this.reqYoukeLogin()
                    break;
                default:
                    this.reqYoukeLogin()
                    break;
            }

        }

    }
    //通行证登录：有账号有密码
    _boyaaPassportLogin(account = null, password = null, bid = null, access_token = null, reg_type = null, verifyCode = null) {
        let loginType = GConstants.UserLoginType.BoyaaPassportLogin;
        let uType = GConstants.UserUType.BoyaaPassport;

        let data = {
            phone: account,
            pwd: password,
            flag: 0
        };

        let extraData = {
            bid: bid,
            accesstoken: access_token
        };
        extraData.bid = bid;
        extraData.accesstoken = access_token;

        // this.m_loginAccount = account;
        // this.m_loginPswd = password;

        this.reqCoreGameLogin(null, loginType, uType, data, extraData, reg_type, verifyCode);
    }
    //通行证登录：有账号没有密码（账户+bid+token）
    _boyaaPassportBidTokenLogin(account = null, password = null, bid = null, access_token = null) {
        let loginType = GConstants.UserLoginType.BoyaaPassportLogin;
        let uType = GConstants.UserUType.BoyaaPassport;

        let data = {
            phone: account,
            pwd: password,
            flag: 0
        };

        let extraData = {
            bid: bid,
            accesstoken: access_token
        };
        extraData.bid = bid;
        extraData.accesstoken = access_token;

        this.reqCoreGameLogin(null, loginType, uType, data, extraData);
    }
    /** 开始微信登录 */
    startWeiXinLogin() {
        let loginType = GConstants.UserLoginType.WechatLogin;
        let uType = GConstants.UserUType.Guest;

        let in_param = {
            access_token: this._viewLoginParam.access_token,
        }
        let ext_param = {
            openId: this._viewLoginParam.openId,
            userInfo: this._viewLoginParam.userinfo,
        }
        GCache.User.setLoginState(GConstants.UserLoginState.Logining);
        this.reqCoreGameLogin(null, loginType, uType, in_param, ext_param)
    }
    /**
     * 登录Core 造数据
     * @param event 
     * @param loginType 登录类型 详见 UserLoginType
     * @param uType  用户类型 详见 UserUType
     * @param in_param getLoginDefaultParam的字段
     * @param in_extParam getDefaultExtramParam的字段
     * @param reg_type 
     * @param verifyCode 
     */
    private reqCoreGameLogin(event, loginType, uType, in_param = null, in_extParam = null, reg_type = null, verifyCode = null) {
        this.print("接到消息 开始造登录数据===>")
        let curTime = Utils.time();

        let defaultParam = this._getLoginDefaultParam()

        if (reg_type) {
            defaultParam["reg_type"] = reg_type;
        }
        defaultParam.login_type = loginType;
        defaultParam.utype = uType;
        defaultParam.access_token = GCache.User.getLastLoginValueByKey("token", "");
        defaultParam.mid = GCache.User.getLastLoginValueByKey("mid", "")

        if (verifyCode) {
            defaultParam.verify_code = verifyCode;
        }

        let _in_param = Utils.table_verify(in_param)
        for (let key in _in_param) {
            if (Object.prototype.hasOwnProperty.call(_in_param, key)) {
                let value = _in_param[key];
                if (value) {
                    defaultParam[key] = value
                }
            }
        }
        let extParam_data = this.getDefaultExtramParam();

        extParam_data.timestamp = curTime;

        let _in_extParam = Utils.table_verify(in_extParam)
        for (let key in _in_extParam) {
            if (Object.prototype.hasOwnProperty.call(_in_extParam, key)) {
                let value = _in_extParam[key];
                if (value) {
                    extParam_data[key] = value
                }
            }
        }
        defaultParam.param = Encrypt.JsonEncode2(extParam_data)
        //记录本次登录信息
        this._reqloginInfo = defaultParam
        this.print("登录Core 造数据:", defaultParam);
        if (defaultParam.utype == GConstants.UserUType.Guest) {  // 游客登录
            let newBody = {
                guid: defaultParam.guid,
                api: ClientInfo.PlatFormAppID
            }
            this.sendCoreGameLogin(newBody, GlobalCMD.PHP_CORE_GUEST)
            // this.sendCoreGameLogin(defaultParam)
        } else {
            this.sendCoreGameLogin(defaultParam)
        }
    }
    //发送登录消息
    sendCoreGameLogin(param, cmd = null) {
        this._reqLoginNum = this._reqLoginNum + 1;
        cmd = cmd || GlobalCMD.PHP_CORE_LOGIN;
        let sendMsg = {
            cmd: cmd,
            body: param,
            timeout: 15000
        }
        this.dump(sendMsg, "================sendCoreGameLogin======================")
        EventManager.dispatch(AppEvent.NET_SEND_MSG, sendMsg)
    }
    //请求游客登录
    reqYoukeLogin() {
        let loginType = GConstants.UserLoginType.Notoken;
        let uType = GConstants.UserUType.Guest;

        let lastUType = GCache.User.getLastLoginValueByKey("uType");

        let inParam = null
        if (lastUType == GConstants.UserUType.Guest) {
            let token = GCache.User.getLastLoginValueByKey("token");
            if (token && token != "") {
                loginType = GConstants.UserLoginType.Token
            } else {
                inParam = {
                    guid: this._viewLoginParam.access_token
                }
            }
        } else if (lastUType == null) {
            inParam = {
                guid: this._viewLoginParam.access_token
            }
        }
        GCache.User.setLoginState(GConstants.UserLoginState.Logining)
        this.reqCoreGameLogin(null, loginType, uType, inParam)
    }
    //游客登录后返回的结果
    respNetLoginYouke(event, param) {
        this.dump(param, "这是游客登录返回的结果")
        if (param.errorType == 1083) { //已经绑定手机 跳转手机登录

        } else {
            GCache.User.setLoginState(GConstants.UserLoginState.Logining)
            this.sendCoreGameLogin(this._reqloginInfo)
        }

    }
    //登录返回的结果
    respNetLoginCore(event, isSuccess, respData, reqData) {
        this.dump(respData, "登录是否成功？===>" + isSuccess)

        let resultInfo = {};
        if (!isSuccess) {
            resultInfo = respData
        } else {
            let info = respData
            if (!info || Utils.isNull(info["game"]) || Utils.isNull(info["user"]) || Utils.isNull(info["account"])) {
                Utils.dump(respData);
                console.error("登录数据有误 字段有空数据")
                isSuccess = false
            } else {
                ClientInfo.RegionId = info["user"]["region"];
                let otherEx = {
                    serverConf: GameConfig.instance.AppUrlConf
                }
                GCache.User.onloadLoginSuccessParams(info["user"], info["game"], info["account"], otherEx);
                isSuccess = true;
            }
        }
        if (isSuccess == true) {
            this.receiveLoginSuccess()
        } else {
            this.receiveLoginFail(respData)
        }
        //判断是否开启发送心跳包
        EventManager.dispatch(AppEvent.NET_HEART_BEAT_ONLOADING, isSuccess)
    }
    /** 统一处理登录成功 */
    receiveLoginSuccess() {
        //保存用户openid
        if (this._viewLoginParam && Utils.string_isEmpty(this._viewLoginParam.openId) != null) {
            let key: any = GCache.User.getUserMid();
            key = Utils.string_format(StoreKey.LOGIN_USER_OPENID, key)
            console.log('当前用户openId', this._viewLoginParam.openId)
            LocalStorage.set(key, this._viewLoginParam.openId)
        }
        GCache.User.setLoginState(GConstants.UserLoginState.LoginSuccess);
        EventManager.dispatch(AppEvent.SYS_CLOSE_NETLOADING);
        this._reqLoginNum = 0
    }
    /** 统一处理登录失败 */
    receiveLoginFail(errInfo) {
        GCache.User.setLoginState(GConstants.UserLoginState.LoginFailed);

        this.dump(errInfo, `[Login Fail]登录失败了,是否需要自动重新请求登录 ${this._reqLoginNum < this._reqLoginMaxNum}`)

        if (this._reqLoginNum < this._reqLoginMaxNum) {
            //更新每次请求的时间戳
            let extParam_data = Encrypt.JsonDecode(this._reqloginInfo.param);
            extParam_data.timestamp = Utils.time();
            this._reqloginInfo.param = Encrypt.JsonEncode2(extParam_data);
            //此处针对wx平台 要做access_token的实时更新
            if (this._reqloginInfo && this._reqloginInfo["login_type"] == GConstants.UserLoginType.WechatLogin) {
                Platform.updateReFreshAccessToken((state) => {
                    if (state == true) {
                        this._reqloginInfo["access_token"] = Platform.PLogInfo.access_token;
                        this.sendCoreGameLogin(this._reqloginInfo);
                        return;
                    }
                    this._reqloginInfo = null;
                    this._resetFirstLogin();
                    EventManager.dispatch(AppEvent.SYS_CLOSE_NETLOADING);
                    this.showLoginView();
                    EventManager.dispatch(AppEvent.SYS_TOAST_TIP, { content: "Fail:用户信息获取异常，请重新登录" })
                })
                return;
            }
            this.sendCoreGameLogin(this._reqloginInfo);
        } else {
            //断开连接 并显示登录
            this._reqloginInfo = null;
            EventManager.dispatch(AppEvent.SYS_CLOSE_NETLOADING);
            GSocket.instance.closeConnect()
            this.showLoginView()
        }
        let errorType = errInfo ? errInfo["errorType"] : null
        switch (errorType) {
            case GConstants.UserLoginFailCode.ERR_MOVE_SERVER:
                this.print("receiveLoginFail: 登录失败>>>>server迁服")
                break;
            case GConstants.UserLoginFailCode.ERR_STOP_SERVER:
                this.print("receiveLoginFail: 登录失败>>>>计划性停服")
                GCache.User.setLoginState(GConstants.UserLoginState.ServerStop);

                break;
            case GConstants.UserLoginFailCode.ERR_VerifyCode_ERROR:
                this.print("receiveLoginFail: 登录失败>>>>验证码错误")
                break;
            case GConstants.UserLoginFailCode.ERR_REG_IDIOM_ERROR:
                this.print("receiveLoginFail: 登录失败>>>>注册__需要成语验证码")
                break;
            case GConstants.UserLoginFailCode.ERR_REG_PHONENUMBER_ERROR:
                this.print("receiveLoginFail: 登录失败>>>>注册__需要手机号码注册")
                break;
            case GConstants.UserLoginFailCode.ERR_LOGIN_BINDPHONE_ERROR:
                this.print("receiveLoginFail: 登录失败>>>>需要绑定手机后登录")
                break;

            default:
                this.print("receiveLoginFail: 登录失败>>>>" + errorType)
                if (errInfo && errInfo["errorTips"] && errInfo["errorTips"] != "") {
                    EventManager.dispatch(AppEvent.SYS_TOAST_TIP, { content: errInfo["errorTips"] })
                }
                break;
        }

    }

    //广播:登录成功(断线重连)
    respNetLoginSuccess(event, respData: any, reqData: any) {
        Logger.logModel("广播:登录成功 开启会话保活 即将跳转==>")
        this.print("respNetLoginSuccess", this._reqloginInfo);
        this.print(respData);
        GCache.User.setLoginState(GConstants.UserLoginState.LoginSuccess);

        GSocket.instance.startKeepAlive(true)
        //更新登录计次
        GCache.User.updateLoginSuccessCount()

        //请求通用队列
        this._reqCommSuccessQuene();
        //******************重连游戏********************/
        let isSupportGame = false;
        let roomId = 0;
        let gameId = 0;
        let roomLevel = 0;

        if (respData["ret"] == 1) {
            roomId = Utils.number_valueOf(respData["roomId"]);
            gameId = Utils.number_valueOf(respData["gameType"]);

            if (roomId > 0) {
                roomLevel = Utils.number_valueOf(respData["roomLevel"]);
            }
            for (let key in GConstants.GameID) {
                if (Object.prototype.hasOwnProperty.call(GConstants.GameID, key)) {
                    let id = GConstants.GameID[key];
                    if (gameId == id) {
                        isSupportGame = true;
                    }
                }
            }
        }

        //比赛场
        let matchRecInfo = respData["matchInfo"];
        let matchGameId = 0;

        if (!Utils.table_isEmpty(matchRecInfo)) {
            matchGameId = Utils.number_valueOf(matchRecInfo["gameId"]);
        }

        let onlookerInfo = respData["onlookerInfo"];
        let onlookerGameId = 0;
        if (!Utils.table_isEmpty(onlookerInfo)) {
            onlookerGameId = Utils.number_valueOf(onlookerInfo["gameId"]);
        }

        if (roomId > 0 && gameId > 0) {
            if (isSupportGame == true) {//不支持的游戏
                if (GCache.Desk) {
                    GCache.Desk.setCurGameID(gameId);
                    GCache.Desk.setCurTableID(roomId);
                    GCache.Desk.setCurLevelID(roomLevel);
                }
                this.print("****************在游戏中 重连进入************")
                //设置缓存数据
                let body: inf_GameIntoParams = {
                    GameID: gameId,
                    Level: roomLevel,
                    TableID: roomId,
                    isReconn: true,
                };
                GCache.SelectGame.intoGameData = body;
                //加载游戏场景
                EventManager.dispatch(AppEvent.GAME_GOTO_SHOW)
                return;
            } else {
                this.print(`进入游戏gameID = ${gameId}失败，当前版本不支持`);
                EventManager.dispatch(AppEvent.SYS_TOAST_TIP, { content: GameTxt.login_goto_room_no_game });
            }
        }
        this._reqSuccessQueneToHall()
        this._toForwardHallView(null)
    }
    //广播：异地登录
    respNetLoginMultiDevice(event, param: any) {
        this.print("广播:异地登录")
        GCache.User.setLoginState(GConstants.UserLoginState.MultiDeviceLogin);
        GCache.User.cleanLastlocalLoginToken();

        let tipParam: inf_PopWindowParams = {
            title: "异地登录",
            alignLeftTop: false,
            notshowClose: true,
            txt_desc: GameTxt.remote_login,//正文内容
            dec_fontSize: 28,
            buttonsMap: [
                {
                    label: GConstants.BtnConf.Label_Confirm,
                    click: () => {
                        //清除推荐弹窗队列
                        EventManager.dispatch(AppEvent.RECOMMEND_POP_CLEAN_QUENE);
                        // 点击回调
                        EventManager.dispatch(AppEvent.LOGIN_GOTO_SHOW);
                    }
                },

            ],
        }
        //增加弹窗异地登录
        EventManager.dispatch(AppEvent.VIEW_UI_OPEN, UIID.SysPopWindow, tipParam);
        this._resetFirstLogin();
    }
    //保活检测
    respNetKeepAlive(event, isSuccess, respData, reqData) {
        if (isSuccess == true && respData["ssid"]) {
            GCache.User.updateDataUserKey("ssid", respData["ssid"])
        }
    }

    /** 登录状态改变 */
    receiveLoginStateChange(event, state) {

    }

    //登录成功后 请求的通用队列 必定会请求
    private _reqCommSuccessQuene() {
        //请求登录初始化
        EventManager.dispatch(AppEvent.NET_REQ_USER_LOGIN_CORE_INIT);
        //请求大厅游戏配置
        EventManager.dispatch(AppEvent.NET_REQ_HALL_GAME_CONFIG);
        //请求游戏房间信息
        EventManager.dispatch(AppEvent.NET_REQ_GAME_LEVEL_ROOM_TAB, GConstants.GameID.FXJ);
        //请求分享配置
        EventManager.dispatch(AppEvent.NET_REQ_SHARE_CONFIG);
        //请求背包配置
        EventManager.dispatch(AppEvent.NET_CMD_REQ_USER_BACKPACK);

        //请求等级配置
        EventManager.dispatch(AppEvent.NET_REQ_LEVEL_MODEL_CONFIG);
        //请求道具信息
        EventManager.dispatch(AppEvent.NET_REQ_PROPS_INFO);
        //请求玩家玩某个游戏的信息
        EventManager.dispatch(AppEvent.NET_REQ_GAME_PLAY_INFO, GConstants.GameID.FXJ);


    }
    //登录成功后 请求的队列
    private _reqSuccessQueneToHall() {

        // //请求子游戏场次中人数
        // EventManager.dispatch(AppEvent.NET_REQ_GAME_LEVEL_PERSON_COUNT, GConstants.GameID.FXJ);

        //请求签到数据
        EventManager.dispatch(AppEvent.NET_REQ_SIGNIN_CONFIG)
        //请求限时折扣
        EventManager.dispatch(AppEvent.NET_REQ_HOLIDAYS_GIFTPACKAGE);
        //请求限时折扣礼包数据
        EventManager.dispatch(AppEvent.NET_REQ_GOODS_INFO, { scene: GConstants.GoodsListID.limitPack });

        //请求首充礼包商品数据
        EventManager.dispatch(AppEvent.NET_REQ_GOODS_INFO, { scene: GConstants.GoodsListID.GiftPack });

        //请求商城银币
        EventManager.dispatch(AppEvent.NET_REQ_GOODS_INFO, { scene: GConstants.GoodsListID.MarketSilver });
        //请求商城道具
        EventManager.dispatch(AppEvent.NET_REQ_GOODS_INFO, { scene: GConstants.GoodsListID.MarketProp });
        //请求邮箱数据
        EventManager.dispatch(AppEvent.NET_CMD_REQ_WATCH);

        //请求活动中心数据
        EventManager.dispatch(AppEvent.NET_CMD_REQ_TASK_ACT_CONFIG);
        //请求首充礼包配置
        EventManager.dispatch(AppEvent.NET_REQ_FIRST_PAY_CONFIG)
    }

    //显示登录页
    showLoginView(event = null, param: any = null) {
        GameConfig.instance.FPS = 30;
        let isFirstLogin = false;

        if (param) {
            if (param.state == "first_login") {//首次登录
                isFirstLogin = true;
                GCache.User.setLoginState(GConstants.UserLoginState.None);
            } else if (param.state == "reconnect_fail") {
                GCache.User.setLoginState(GConstants.UserLoginState.Offline);
            }
        }
        if (GCache.User.getLoginState() == GConstants.UserLoginState.LoginSuccess) {
            LayerManager.clear(UIConfigData[UIID.LoginPrefab].layer);
            return;
        }
        let self = this;
        if (!LayerManager.has(UIID.LoginPrefab) && !LayerManager.isLoading(UIID.LoginPrefab)) {
            if (GCache.User.getLoginState() == GConstants.UserLoginState.LoginSuccess) {
                LayerManager.clear(UIConfigData[UIID.LoginPrefab].layer);
                return;
            }
            LayerManager.clearOther(null, true);
            EventManager.dispatch(AppEvent.SYS_PACKAGE_LOAD, GConstants.PkgLoaderTaskList.Login, () => {
                if (GCache.User.isLoginSuccesed() == true) {
                    return;
                }
                self._checkServerChange(isFirstLogin);
                //通知:sys周期变化
                EventManager.dispatch(AppEvent.SYS_APP_LIFE, GConstants.AppRunLife.Login_Will_Open);
                //打开登录界面
                EventManager.dispatch(AppEvent.VIEW_UI_OPEN, UIID.LoginPrefab, null, {
                    onAdded: function () {
                        //通知:主场景更换
                        EventManager.dispatch(AppEvent.VIEW_UI_MAIN_UPDATE, UIID.LoginPrefab);
                        //通知:sys周期变化
                        EventManager.dispatch(AppEvent.SYS_APP_LIFE, GConstants.AppRunLife.Login_Opened);
                        if (GCache.User.getLoginState() == GConstants.UserLoginState.LoginSuccess) {
                            LayerManager.clear(UIConfigData[UIID.LoginPrefab].layer);
                            return;
                        }
                        LayerManager.clearOther(UIConfigData[UIID.LoginPrefab].layer, true);
                        //加载完毕给登录界面传参
                        EventManager.dispatch(AppEvent.LOGIN_SEND_SHOW, param)
                    },
                    onRemoved: function () {
                        //通知:sys周期变化
                        EventManager.dispatch(AppEvent.SYS_APP_LIFE, GConstants.AppRunLife.Login_Closed);
                    }
                })
            })

        } else {
            LayerManager.clearOther(UIConfigData[UIID.LoginPrefab].layer, true);
            self._checkServerChange(isFirstLogin);
            //加载完毕给登录界面传参
            EventManager.dispatch(AppEvent.LOGIN_SEND_SHOW, param);
        }
        //系统信息刷新
        EventManager.dispatch(AppEvent.SYS_INFO_REFRESH);
    }
    /** 检测服务端变化（即将跳转登录界面时） */
    private _checkServerChange(isFirstLogin = false) {
        //代码 和 本地 冲突， 以本地为准
        //没有 本地 ，代码为准
        let lastClientVer = LocalStorage.get(StoreKey.SYS_ClientVer, ClientInfo.AppVer);
        let oldServerConf = GCache.User.getLastlocalLoginServerConf();
        let newServerConf = GameConfig.instance.AppUrlConf;

        if (!oldServerConf) {//说明没有登录成功过
            LocalStorage.set(StoreKey.SYS_ClientVer, ClientInfo.AppVer);
            return;
        }
        let isSameVer = (String(lastClientVer) == String(ClientInfo.AppVer));
        let isChangeServer = false;
        for (let key in newServerConf) {
            if (Object.prototype.hasOwnProperty.call(newServerConf, key)) {
                if (oldServerConf[key] != newServerConf[key]) {
                    isChangeServer = true;
                };
            }
        }
        //版本号不一致且地址不一致 以代码为主
        if (isSameVer == false && isChangeServer == true) {
            console.warn("---【版本号不一致且服务器地址不一致，重置本地所有数据存储】---");
            console.log(`当前版本:${ClientInfo.AppVer} 上个版本:${lastClientVer}`)
            LocalStorage.clear();
            LocalStorage.set(StoreKey.SYS_ClientVer, ClientInfo.AppVer);
            return;
        }
        //服务器地址不一致 以代码为主
        if (isChangeServer == true) {
            if (isFirstLogin == true) {//首次登录 切换为已有的登录历史
                let currowServer = ClientInfo.CurrowServer;
                let isFind = false;
                for (let key in GameConfig.ServerUrlConf) {
                    if (Object.prototype.hasOwnProperty.call(GameConfig.ServerUrlConf, key) && isFind == false) {
                        if (oldServerConf["Socket"] == GameConfig.ServerUrlConf[key].Socket) {
                            isFind = true;
                            currowServer = Number(key);
                        }
                    }
                }
                ClientInfo.CurrowServer = currowServer;
                LocalStorage.set(StoreKey.SYS_ClientVer, ClientInfo.AppVer);
                return;
            }
            console.warn("---【服务器地址有切换 ，重置本地所有数据存储】---");
            LocalStorage.clear();
            LocalStorage.set(StoreKey.SYS_ClientVer, ClientInfo.AppVer);
            return;
        }
    }
    //登录成功 跳转大厅
    private _toForwardHallView(param: any, isNotNeedTip: boolean = false) {
        if (isNotNeedTip == false) {
            //显示吐司
            EventManager.dispatch(AppEvent.SYS_TOAST_TIP, { content: GameTxt.login_success })
        }
        EventManager.dispatch(AppEvent.HALL_GOTO_SHOW, param)
    }
    //重置登录
    private _resetFirstLogin() {
        this._reqLoginNum = 0;
        GSocket.instance.closeConnect();
        if (Platform.isWXPlatform() && Platform.WxLoginCode) {
            Platform.updateWXLoginCode();
        }
    }

    //获取登录的基础信息
    private _getLoginDefaultParam(phone: string = "") {
        let param_data = {
            api_ver: 2,         //接口版本号
            channel_id: ClientInfo.ChannelId,
            channelKey: ClientInfo.ChannelKey,
            mac: ClientInfo.MachineId,
            machine_type: ClientInfo.MachineModel,
            os: ClientInfo.SysVer,
            resolution: `${SystemConf.DEV_SIZE.width}*${SystemConf.DEV_SIZE.height}`,
            imsi: ClientInfo.IMSI,
            operator: ClientInfo.PhoneCardType,
            net: ClientInfo.NetWorkType,
            guid: ClientInfo.Guid,
            ssaid: ClientInfo.SSAID,
            appid: ClientInfo.PlatFormAppID,

            nick: ClientInfo.PhoneModel,
            version: ClientInfo.AppVer,
            hall_version: ClientInfo.HallVer,

            login_type: 1,  //登录类型
            utype: 1,       //用户类型
            sex: 0,         //性别
            phone: phone || "",
            access_token: "",
            pwd: "",
            verify_code: -1,
            verify_msg: "",
            verify_word: "",
            param: "",
            mid: ""
        }
        return param_data;
    }
    //获取默认的param参数
    getDefaultExtramParam() {
        let param_data = {
            iccid: ClientInfo.ICCID,
            imei: ClientInfo.IMEI,
            imsi: ClientInfo.IMSI,
            timestamp: Utils.time(),
            safecode: ClientInfo.SignDeviceId,
            safecode_mac: ClientInfo.SignMacAddress,
            safecode_guid: ClientInfo.SignGuid,
            factoryid: ClientInfo.FactoryId,
            update_site_realtime: 1,    //客户端是否支持登录接口更新请求入口配置（切服务器）
            bundleId: ClientInfo.BundleId,
            // if System.getPlatform() == kPlatformAndroid then
            // 	--android 平台禁止模拟器登录
            // 	local isVirtual, flag : kClientInfo:isVirtual(),
            // 	isSimulator : isVirtual,
            // 	simulatorCheckFlag : flag,

            // end
        }
        return param_data
    }

}

