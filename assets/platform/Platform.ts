/**
 * Name = Platform
 * URL = db://assets/platform/Platform.ts
 * Time = Wed Apr 27 2022 14:05:27 GMT+0800 (中国标准时间)
 * Author = xueya
 * 平台管理
 */

import { error, sys } from "cc";
import { AppEvent } from "../config/AppEvent";
import { ClientInfo, GameConfig } from "../config/GameConfig";
import { GConstants, StoreKey } from "../config/GameConstant";
import { GameRes } from "../config/GameRes";
import { GameTxt } from "../config/GameTxt";
import { Encrypt } from "../framework/crypto/Encrypto";
import { inf_LoginViewInfo } from "../framework/InterfaceDefines";
import { LocalStorage } from "../framework/LocalStorage";
import { Logger } from "../framework/log/Logger";
import { EventManager } from "../framework/manager/EventManager";
import { HttpRequest } from "../framework/network/HttpRequest";
import { Utils } from "../framework/Utils";
import { WXSdk } from "./weixin/WXSdk";
import { WXSdk_AuthSetting, WXSdk_VibrateShortType, _InterFace_WXSdk_ButtonStyle, _InterFace_WXSdk_SystemInfo, __InterFace_WXSdk_OnShareAppMessage, __InterFace_WXSdk_OnShareTimeline } from "./weixin/WXSdkDefines";


class _Platform {
    private static _instance = null;
    public static get instance(): _Platform {
        if (!this._instance || this._instance == null) {
            this._instance = new _Platform();
        }
        return this._instance;
    }
    //当前平台
    _currowPlatForm = sys.platform;
    //设备识别码
    _DeviceID = "";
    //系统信息
    _SystemInfo = null;
    //平台版本
    _platformVer: string = "";
    //sdk版本(基础库)
    _SDKVer: string = "";
    //客户端平台 (ios:iOS微信（包含 iPhone、iPad）android:Android微信 windows:Windows微信 mac:macOS微信)
    _platFormClient = null;
    //设备id
    _Guid = null;
    //物理网卡地址
    _Machineid = null;
    //物理网卡类型
    _MachineModel = null;
    //终端型号
    _PhoneModel = null;
    //终端设备号
    _IMSI = null;
    //_ICCID
    _ICCID = null;
    //imei
    _IMEI = null;
    //移动终端设备所使用的网络运营商(1:移动, 2:联通, 3:电信)
    _PhoneCardType = -1;
    //网络类型 1：wifi  2:2G  3:3G  4:4G  5:5G 6:未知 -1:未知或无网络
    _NetWorkType = -1;
    //信号强弱
    _NetWorkSignal = 3;

    /** 自定义分享好友信息 */
    CustomShareFriendsInfo: __InterFace_WXSdk_OnShareAppMessage = null;
    /** 自定义分享朋友圈信息 */
    CustomSharePYQInfo: __InterFace_WXSdk_OnShareTimeline = null;

    //微信登录code(失效后为空)
    WxLoginCode = null;
    //微信AccessToken
    WxAccessToken = null;
    /** 微信授权用户信息 0:未授权 1已授权 -1拒绝授权 */
    WxAuthSettingUserInfo = 0;
    /** 微信授权好友信息 0:未授权 1已授权 -1拒绝授权 */
    WxAuthSettingFriends = 0;
    /** 微信授权订阅信息 */
    WxAuthSettingSubscriptions = null;
    /** 微信授权按钮 */
    WxAuthSettingButton = null;
    /** 授权按钮的屏幕参数{pos:?,size:?,img:?,withCredentials:?} */
    WxAuthSettingButtonParam = null;

    /** 微信用户信息 */
    WxUserInfo = null;
    /** 平台用户登录的信息 */
    PLogInfo: inf_LoginViewInfo = { access_token: null, openId: null, userinfo: null };
    /** 刘海屏高度 为0时代表没有 刘海屏比普通屏多20像素 */
    TopBarHeight = 0;
    /** 启动参数 */
    AppLaunchOptions = {};
    /** 显示时附带的参数 */
    AppEnterOptions = {};

    constructor() {
        Logger.logPlatform("***************************************")
        Logger.logPlatform("\\\\\\\\\\\\\\\平台初始化\\\\\\\\\\\\\\\\")
        Logger.logPlatform(`当前平台:\n      ${this._currowPlatForm}`)
        Logger.logPlatform(`系统信息:\n`)
        this.dump()
        Logger.logPlatform("\\\\\\\\\\\\\\\平台初始化\\\\\\\\\\\\\\\\")
        Logger.logPlatform("***************************************")
    }

    /** 初始化支持 */
    initBase() {
        switch (this._currowPlatForm) {
            case sys.Platform.WECHAT_GAME:
                this.SystemInfo;
                this.Lang;
                this.PlatFormVersion;
                this.SDKVersion;
                this.ClientPlatform;

                Logger.logPlatform("输出系统信息：====>")
                Logger.table(this._SystemInfo)
                Logger.logPlatform(this._SystemInfo)
                //打开调试开关
                if (ClientInfo.DEBUG == true && this.isWXPlatform() && (this.isAndroid() == true || this.isIOS() == true)) {
                    WXSdk.instance.setEnableDebug(ClientInfo.DEBUG);
                }
                WXSdk.instance.onShareAppMessage(Utils.handler(this, this.getShareFriendFunc));
                WXSdk.instance.onShareTimeline(Utils.handler(this, this.getSharePYQFunc));
                WXSdk.instance.onShareMessageToFriend(Utils.handler(this, this.getShareMessageToFriend));
                WXSdk.instance.showShareMenu(true, ['shareAppMessage', 'shareTimeline'])

                WXSdk.instance.setKeepScreenOn(true);
            case sys.Platform.DESKTOP_BROWSER:
                this.SystemInfo;
                this.Lang;
                this.PlatFormVersion;
                this.SDKVersion;
                this.ClientPlatform;
            default:
                this.SystemInfo;
                break;
        }
        this.DeviceID;
        this.getLaunchOptionsSync();
        this.getEnterOptionsSync();
    }
    /** 生成唯一设备识别码 */
    private _initDeviceID() {
        let key = "DeviceID";
        let str_1 = Utils.string_format("platform:{0} platformVer:{1} sdkVer:{2}", this._currowPlatForm, this._platformVer, this._SDKVer);

        this._DeviceID = Encrypt.base64_encode(str_1) + "_";
        LocalStorage.set(key, this._DeviceID);
        Logger.logPlatform("生成唯一设备识别码==>device =", this._DeviceID, str_1)
    }

    /**输出系统信息 */
    dump() {
        sys.dump()
    }
    /** 打开一个Url 并非所有平台有效*/
    openURL(url: string) {
        sys.openURL(url)
    }

    /** 是否是wx平台 */
    isWXPlatform() {
        return this._currowPlatForm == sys.Platform.WECHAT_GAME
    }
    /** 是否是安卓平台 */
    isAndroid() {
        return this.ClientPlatform == "android";
    }
    /** 是否是windows平台 */
    isWindows() {
        return this.ClientPlatform == "windows";
    }

    /** 是否是mac平台 */
    isMac() {
        return this.ClientPlatform == "mac";
    }

    /** 是否是ios平台 */
    isIOS() {
        return this.ClientPlatform == "ios";
    }
    /** 是否支持支付 */
    isCanPay(): boolean {
        // if (!this.isWXPlatform() || (this.isAndroid() == false && this.isWindows() == false)) {
        // 	return false;
        // }
        return true;
    }
    /** 检查刘海屏高度 */
    checkTopBarHeight() {
        this.TopBarHeight = 0;
        if (this._SystemInfo) {
            let model = this._SystemInfo["model"];
            let keyList = [
                ["iPhone 11"],
                ["iPhone 12"],
                ["iPhone 13"],
                ["iPhone14,5"],
                ["iPhone14"],
                ["iPhone", "Pro"],
                ["iPhone", "mini"],
                ["iPhone", "X"],
            ];
            if (model && Utils.number_valueOf(this._SystemInfo["statusBarHeight"]) > 20) {
                let isFind = false;
                for (let i = 0; i < keyList.length; i++) {
                    if (keyList[i].length == 1) {
                        if (model.includes(keyList[i][0])) {
                            isFind = true;
                            break;
                        }
                    } else if (keyList[i].length == 2) {
                        if (model.includes(keyList[i][0]) && model.includes(keyList[i][1])) {
                            isFind = true;
                            break;
                        }
                    }
                }
                if (isFind == true) {
                    //刘海屏比普通屏多20像素
                    this.TopBarHeight = 20;
                }
            }
        }
    }

    /** 获取设备ID */
    get DeviceID(): string {
        this._initDeviceID();
        return this._DeviceID;
    }
    /** 获取平台语言 */
    get Lang(): string | null {
        switch (this._currowPlatForm) {
            case sys.Platform.WECHAT_GAME:
                this.SystemInfo;
                if (this._SystemInfo) {
                    return this._SystemInfo["language"]
                }
                return null
            case sys.Platform.DESKTOP_BROWSER:
                return sys.language
            default:
                break;
        }
        return null
    }
    /** 获取平台版本 */
    get PlatFormVersion(): string | null {
        switch (this._currowPlatForm) {
            case sys.Platform.WECHAT_GAME: //微信版本 如:8.0.5
                if (!this._platformVer) {
                    this.SystemInfo;
                    if (this._SystemInfo) {
                        this._platformVer = this._SystemInfo["version"];
                    }
                }
                return this._platformVer
            case sys.Platform.DESKTOP_BROWSER:
                this._platformVer = sys.browserVersion;
                return this._platformVer
            default:
                this._platformVer = ""
                break;
        }
        return this._platformVer
    }
    /** 获取sdk版本 */
    get SDKVersion() {
        switch (this._currowPlatForm) {
            case sys.Platform.WECHAT_GAME: //基础库版本 如:2.24.5
                if (!this._SDKVer) {
                    this.SystemInfo;
                    if (this._SystemInfo) {
                        this._SDKVer = this._SystemInfo["SDKVersion"];
                    }
                }
                return this._SDKVer;
            case sys.Platform.DESKTOP_BROWSER:
                this._SDKVer = "";
                return this._SDKVer;
            default:
                this._SDKVer = "";
                break;
        }
        return this._SDKVer
    }
    /** 获取客户端类型 安卓 ios windows */
    get ClientPlatform() {
        switch (this._currowPlatForm) {
            case sys.Platform.WECHAT_GAME:
                if (!this._platFormClient) {
                    this.SystemInfo;
                    if (this._SystemInfo) {
                        this._platFormClient = this._SystemInfo["platform"]
                    }
                }
                return this._platFormClient;
            case sys.Platform.DESKTOP_BROWSER:
                this._platFormClient = "windows";
                return this._platFormClient;
            default:
                this._platFormClient = null;
                break;
        }
        return this._platFormClient;
    }
    /** 获取网络类型 */
    get NetWorkType() {
        return this._NetWorkType;
    }
    /** 更新网络类型 */
    updateNetWorkType(callback: Function = null) {
        switch (this._currowPlatForm) {
            case sys.Platform.WECHAT_GAME:
                let self = this;
                WXSdk.instance.getNetworkType((res) => {
                    Logger.logPlatform("getNetworkType（网络状态，信号强度）的返回", res);
                    if (res) {
                        if (res["networkType"]) {
                            let netName = String(res["networkType"]).toUpperCase();
                            switch (netName) {
                                case "WIFI":
                                    self._NetWorkType = 1;
                                    break;
                                case "2G":
                                    self._NetWorkType = 2;
                                    break;
                                case "3G":
                                    self._NetWorkType = 3;
                                    break;
                                case "4G":
                                    self._NetWorkType = 4;
                                    break;
                                case "5G":
                                    self._NetWorkType = 5;
                                case "UNKNOWN":
                                    self._NetWorkType = 6;
                                    break;
                                default:
                                    self._NetWorkType = -1;
                                    break;
                            };
                        };
                        if (res["signalStrength"]) {
                            self._NetWorkSignal = res["signalStrength"];
                        };
                        if (callback) {
                            callback();
                        };
                    }
                });
                break;

            default:
                this._NetWorkType = 6;
                if (callback) {
                    callback();
                };
                break;
        }
        return this._NetWorkType;
    }


    /** 获取系统信息 */
    get SystemInfo() {
        let self = this
        let initInfoBase = function () {
            self._Guid = "";
            self._Machineid = "";
            self._MachineModel = "";
            self._PhoneModel = ""
            self._IMSI = "";
            self._ICCID = "";
            self._IMEI = "";
            self._PhoneCardType = -1;
            self._NetWorkType = -1;
        }

        switch (this._currowPlatForm) {
            case sys.Platform.WECHAT_GAME:
                if (!this._SystemInfo && WXSdk) {
                    let sysInfo: _InterFace_WXSdk_SystemInfo = WXSdk.instance.getSystemInfoSync();
                    this._SystemInfo = sysInfo;
                    this.checkTopBarHeight();
                }

                initInfoBase();
                this.updateNetWorkType;
                return this._SystemInfo
            case sys.Platform.DESKTOP_BROWSER:
                initInfoBase()

                return sys
            default:
                initInfoBase()
                break;
        }
        return null
    }
    /**
     * 更新授权按钮的显隐
     * @param visible 不传则销毁
     */
    updateWxAuthSettingButtonVisible(visible: boolean = null) {
        if (visible == false) {
            if (Platform.WxAuthSettingButton && Platform.WxAuthSettingButton.hide) {
                Platform.WxAuthSettingButton.hide();
            }
        } else if (visible == true) {
            if (Platform.WxAuthSettingButton && Platform.WxAuthSettingButton.show) {
                Platform.WxAuthSettingButton.show();
            } else {
                if (WXSdk.instance.isCanCreateUserInfoButton()) {
                    Platform.createrAuthSettingButton_WX();
                }
            }

        } else {
            if (Platform.WxAuthSettingButton && Platform.WxAuthSettingButton.destroy) {
                Platform.WxAuthSettingButton.destroy();
            }
            Platform.WxAuthSettingButton = null;
        }
    }
    /** 获取平台登录信息 isNoCheckAuthSetting：是否不检查授权*/
    reqPlatformLoginInfo(isNoCheckAuthSetting = false) {
        Logger.logPlatform("获取平台用户信息:>>>")
        switch (this._currowPlatForm) {
            /** 微信小程序平台 获取用户信息 */
            case sys.Platform.WECHAT_GAME:
                //获取登录凭证 code（先检查是否失效）
                let getLoginCode = function (callback: Function) {
                    if (Platform.WxLoginCode != null) {
                        WXSdk.instance.checkSession(
                            () => {
                                Logger.logPlatform("Success:登录凭证未失效 Code = " + Platform.WxLoginCode);
                                callback({ code: Platform.WxLoginCode })
                            },
                            () => {
                                Logger.logPlatform("Fail:登录凭证已失效 即将请求登录");
                                Platform.WxLoginCode = null;
                                getLoginCode(callback);
                            },
                            () => {
                                Logger.logPlatform("Fail:登录凭证已失效 即将请求登录");
                                Platform.WxLoginCode = null;
                                getLoginCode(callback);
                            })
                        return;
                    }
                    WXSdk.instance.login(5000, (param) => {
                        Logger.logPlatform(`成功获取登录凭证 code = ${param.code}`)
                        Platform.WxLoginCode = param.code;
                        callback({ code: Platform.WxLoginCode })
                    }, () => {
                        Logger.logPlatform(`获取登录凭证失败`)
                        callback(null)
                    })
                }
                //显示授权弹窗
                let startShowAuthorize = function (callback: Function) {
                    WXSdk.instance.authorize(WXSdk_AuthSetting.userInfo,
                        () => {
                            Logger.logPlatform(`授权成功`);
                            Platform.WxAuthSettingUserInfo = 1;
                            callback(true);
                        },
                        () => {
                            Logger.logPlatform(`授权失败`);
                            Platform.WxAuthSettingUserInfo = -1;
                            callback(false);
                        }
                    )
                }
                //获取授权信息
                let getSetting = function (callback: Function) {
                    WXSdk.instance.getSetting(
                        false,
                        (param) => {
                            if (param.authSetting[WXSdk_AuthSetting.userInfo]) {
                                Platform.WxAuthSettingUserInfo = 1;
                                Logger.logPlatform(`getSetting:已授权用户信息`)
                                //进入下一步
                                callback(param.authSetting[WXSdk_AuthSetting.userInfo])
                            } else {
                                Logger.logPlatform("getSetting:没有获得授权")
                                Platform.WxAuthSettingUserInfo = 0;

                                if (WXSdk.instance.isCanCreateUserInfoButton()) {
                                    Logger.logPlatform("getSetting:创建授权按钮");
                                    Platform.updateWxAuthSettingButtonVisible(true);
                                } else {
                                    Logger.logPlatform("getSetting:弹出授权弹窗");
                                    //弹出授权弹窗
                                    startShowAuthorize(callback);
                                }
                            }
                        },
                        () => {
                            Logger.logPlatform("getSetting:获取授权信息失败")
                            callback(null)
                        }
                    )
                }
                //获取用户信息
                let getUserInfo = function (callback: Function) {
                    let sysInfo = Platform.SystemInfo
                    WXSdk.instance.getUserInfo(
                        true,
                        sysInfo["language"],
                        (param) => {
                            Logger.logPlatform(`getUserInfo:获取用户信息成功`)
                            Utils.dump(param);
                            let userInfo = {
                                avatarUrl: Utils.nullToDefault(param["userInfo"]["avatarUrl"], ""),
                                city: Utils.nullToDefault(param["userInfo"]["city"], ""),
                                country: Utils.nullToDefault(param["userInfo"]["country"], ""),
                                gender: Utils.nullToDefault(param["userInfo"]["gender"], 0),
                                language: Utils.nullToDefault(param["userInfo"]["language"], sysInfo["language"]),
                                nickName: Utils.nullToDefault(param["userInfo"]["nickName"], ""),
                                province: Utils.nullToDefault(param["userInfo"]["province"], ""),
                            }
                            Platform.WxUserInfo = userInfo;
                            Logger.logPlatform("输出用户信息：");
                            Logger.logPlatform(Platform.WxUserInfo)
                            callback(param);
                        },
                        () => {
                            Logger.logPlatform("获取用户信息失败")
                            Platform.WxUserInfo = null;
                            callback(null)
                        }
                    )
                }
                //获取OpenID和AccessToken
                let getOpenIDAndAccestToken = function (callback: Function) {
                    getLoginCode((loginRsp) => {
                        if (loginRsp && loginRsp.code) {
                            Platform.WxLoginCode = loginRsp.code;
                            let data = {
                                action: "core.getMiniConfig",
                                code: Platform.WxLoginCode,
                                appid: ClientInfo.PlatFormAppID,
                            }
                            let http = new HttpRequest();
                            http.post(GameConfig.instance.AppUrlConf.Web, JSON.stringify(data),
                                (res) => {
                                    let openID = null;
                                    let access_token = null;
                                    if (res && res["code"] == 200) {
                                        if (res["result"]) {
                                            if (res["result"]["session"]) {//OpenID
                                                openID = Utils.nullToDefault(res["result"]["session"]["openid"], null);
                                            }
                                            if (res["result"]["token"]) {//access_token
                                                access_token = Utils.nullToDefault(res["result"]["token"]["access_token"], null);
                                            }
                                        }
                                    }
                                    if (openID && access_token) {
                                        let data = {
                                            openid: openID,
                                            access_token: access_token,
                                        }
                                        Logger.logPlatform(`Success:获取OpenID 和 AccessToken成功 openID=${data.openid} access_token=${data.access_token}`);
                                        callback(data);
                                    } else {
                                        Logger.logPlatform(`Fail:获取OpenID 和 AccessToken失败`);
                                        callback(null);
                                    }
                                }, (res) => {
                                    Logger.logPlatform(`Fail:获取OpenID 和 AccessToken失败`, res);
                                    callback(null);
                                }, 'json')
                        } else {
                            EventManager.dispatch(AppEvent.LOGIN_PLATFORM_FAIL, GConstants.LoginStateCode.platform_fail_wx_logincode)
                        }
                    })
                }
                /** 执行步骤：
                 * 1、调用 wx.login(object) 接口获取登录凭证 code。
                 * 2、如果第1步成功，在“success”中调用 wx.getSetting(object)，检查是否已经授权。
                 * 3、如果已经授权，则可以直接调用 wx.getUserInfo(object) 拿到用户信息。
                 * 4、如果未授权，调用wx.createUserInfoButton(object)，调起授权按钮，授权成功后可以拿到用户信息。
                 */
                let startLogin = function () {
                    getOpenIDAndAccestToken((param) => {
                        if (param) {
                            Platform.updateWxAuthSettingButtonVisible();
                            //保存用于登录的信息
                            Platform.PLogInfo = { access_token: param["access_token"], openId: param["openid"], userinfo: Platform.WxUserInfo }
                            Logger.logPlatform("平台登录信息：>>>", Platform.PLogInfo)
                            EventManager.dispatch(AppEvent.LOGIN_PLATFORM_SUCCESS, Platform.PLogInfo)
                        } else {
                            //失败
                            EventManager.dispatch(AppEvent.LOGIN_PLATFORM_FAIL, GConstants.LoginStateCode.platform_fail_wx_code2session_error)
                        }
                    })
                }
                //已拒绝授权
                if (Platform.WxAuthSettingUserInfo == -1) {
                    WXSdk.instance.showModal({
                        content: '博雅飞小鸡需要获取您的用户信息，是否去设置打开?',
                        confirmText: "确认",
                        cancelText: "取消",
                        success: function (res) {
                            //点击“确认”时打开设置页面
                            if (res.confirm) {
                                WXSdk.instance.openSetting(false,
                                    (param) => {
                                        if (param.authSetting[WXSdk_AuthSetting.userInfo]) {
                                            Platform.WxAuthSettingUserInfo = 1;
                                            Logger.logPlatform(`已授权用户信息`)
                                            Platform.reqPlatformLoginInfo();
                                        } else {
                                            Logger.logPlatform("没有获得授权")
                                            Platform.WxAuthSettingUserInfo = -1;
                                            Platform.WxUserInfo = null;
                                            EventManager.dispatch(AppEvent.LOGIN_PLATFORM_FAIL, GConstants.LoginStateCode.platform_fail_wx_notAuthSetting);
                                        }
                                    },
                                    (res) => {
                                        EventManager.dispatch(AppEvent.LOGIN_PLATFORM_FAIL, GConstants.LoginStateCode.platform_fail_wx_notAgreeAuthSetting);
                                    },
                                )
                            } else {
                                //点击了取消
                                EventManager.dispatch(AppEvent.LOGIN_PLATFORM_FAIL, GConstants.LoginStateCode.platform_fail_wx_notAgreeAuthSetting);
                            }
                        }
                    });
                    return;
                }

                if (isNoCheckAuthSetting) {
                    Platform.WxLoginCode = null;
                    startLogin();
                    return;
                }

                getLoginCode((loginRsp) => {
                    if (loginRsp && loginRsp.code) {
                        //检查授权
                        getSetting((isTrue) => {
                            if (isTrue != null) {
                                if (isTrue == false) {//拒绝授权了
                                    Logger.logPlatform("用户拒绝授权了");
                                    EventManager.dispatch(AppEvent.LOGIN_PLATFORM_FAIL, GConstants.LoginStateCode.platform_fail_wx_notAgreeAuthSetting)
                                    return;
                                }
                                getUserInfo((userInfo) => {
                                    if (userInfo) {
                                        Platform.WxLoginCode = null;
                                        startLogin();
                                    } else {
                                        EventManager.dispatch(AppEvent.LOGIN_PLATFORM_FAIL, GConstants.LoginStateCode.platform_fail_wx_userinfo)
                                    }
                                })
                            } else {
                                EventManager.dispatch(AppEvent.LOGIN_PLATFORM_FAIL, GConstants.LoginStateCode.platform_fail_wx_notAuthSetting)
                            }
                        })
                    } else {
                        EventManager.dispatch(AppEvent.LOGIN_PLATFORM_FAIL, GConstants.LoginStateCode.platform_fail_wx_logincode)
                    }
                })

                break;

            case sys.Platform.DESKTOP_BROWSER:
                EventManager.dispatch(AppEvent.LOGIN_PLATFORM_FAIL, GConstants.LoginStateCode.platform_fail_wx_logincode)
                break;
            default:
                EventManager.dispatch(AppEvent.LOGIN_PLATFORM_FAIL, GConstants.LoginStateCode.platform_fail_wx_logincode)
                break;
        }
    }
    /**
     * 更新微信的login code凭证
     * @param cb 
     * @returns 
     */
    updateWXLoginCode(cb: Function = null): boolean {
        if (!this.isWXPlatform()) {
            return false;
        }
        Logger.logPlatform("updateWXLoginCode:更新微信的login code凭证：目前:>>" + Platform.WxLoginCode)
        //获取登录凭证 code（先检查是否失效）
        let getLoginCode = function (callback: Function) {
            if (Platform.WxLoginCode != null) {
                WXSdk.instance.checkSession(
                    () => {
                        Logger.logPlatform("Success:登录凭证未失效 Code = " + Platform.WxLoginCode);
                    },
                    () => {
                        Logger.logPlatform("Fail:登录凭证已失效 ");
                        Platform.WxLoginCode = null;
                    },
                    () => {
                        Logger.logPlatform("getLoginCode:登录凭证是否失效：", Platform.WxLoginCode == null);
                        if (Platform.WxLoginCode) {
                            callback({ code: Platform.WxLoginCode })
                        } else {
                            getLoginCode(callback);
                        }
                    })
                return;
            } else {
                WXSdk.instance.login(5000, (param) => {
                    Logger.logPlatform(`成功获取登录凭证 code = ${param.code}`);
                    Platform.WxLoginCode = param.code;
                    callback({ code: Platform.WxLoginCode });
                }, () => {
                    Logger.logPlatform(`获取登录凭证失败`);
                    callback(null);
                })
            }
        }
        getLoginCode((pCall) => {
            if (cb) {
                cb(pCall)
            }
        });
        return true;
    }
    /** 创建授权按钮 */
    createrAuthSettingButton_WX() {
        if (!this.isWXPlatform()) {
            return
        }
        if (!this.WxAuthSettingButtonParam) {
            return;
        }
        if (Platform.WxAuthSettingButton && Platform.WxAuthSettingButton.destroy) {
            return Platform.WxAuthSettingButton.destroy();
        }
        Platform.WxAuthSettingButton = null;
        Logger.logPlatform("创建授权按钮", Platform.WxAuthSettingButtonParam)
        //创建授权按钮
        let createrButton = function () {
            let sysInfo = Platform.SystemInfo;
            let buttonStyle: _InterFace_WXSdk_ButtonStyle = {
                left: Platform.WxAuthSettingButtonParam["pos"]["x"],
                top: Platform.WxAuthSettingButtonParam["pos"]["y"],
                width: Platform.WxAuthSettingButtonParam["size"]["width"],
                height: Platform.WxAuthSettingButtonParam["size"]["height"],
                backgroundColor: null,
                color: null,
                borderColor: null,
                textAlign: "center",
                fontSize: 20,
                borderWidth: 0,
                borderRadius: 0,
                lineHeight: Platform.WxAuthSettingButtonParam["size"]["height"],
            }

            let button = WXSdk.instance.createUserInfoButton({
                type: "image",
                image: Platform.WxAuthSettingButtonParam["img"],
                style: buttonStyle,
                withCredentials: ((Platform.WxAuthSettingButtonParam["withCredentials"] != null) ? Platform.WxAuthSettingButtonParam["withCredentials"] : true)
            });

            if (!button) {//平台不支持创建授权按钮
                return null;
            }
            button.onTap(function (res) {
                Logger.logPlatform("=====授权按钮:点击返回=====", res)
                if (res && res["userInfo"]) {
                    if (!Platform.WxAuthSettingButton || Platform.WxAuthSettingButton["isDelay"] == true) {
                        return;
                    }
                    Platform.WxAuthSettingButton["isDelay"] = true;
                    setTimeout(() => {
                        if (Platform.WxAuthSettingButton) {
                            Platform.WxAuthSettingButton["isDelay"] = false;
                        }
                    }, 2500)

                    Logger.logPlatform("=====授权按钮:用户授权成功=====")
                    Logger.logPlatform(res);
                    let userInfo = {
                        avatarUrl: Utils.nullToDefault(res["userInfo"]["avatarUrl"], ""),
                        city: Utils.nullToDefault(res["userInfo"]["city"], ""),
                        country: Utils.nullToDefault(res["userInfo"]["country"], ""),
                        gender: Utils.nullToDefault(res["userInfo"]["gender"], 0),
                        language: Utils.nullToDefault(res["userInfo"]["language"], sysInfo["language"]),
                        nickName: Utils.nullToDefault(res["userInfo"]["nickName"], ""),
                        province: Utils.nullToDefault(res["userInfo"]["province"], ""),
                    }
                    Platform.WxUserInfo = userInfo;
                    Platform.WxAuthSettingUserInfo = 1;
                    //已授权，并通知
                    EventManager.dispatch(AppEvent.PLATFORM_AUTHSETTING_UPDATE);
                    //交给UI处理授权成功之后
                } else {
                    Platform.updateWxAuthSettingButtonVisible(true);
                    Platform.WxAuthSettingUserInfo = 0;
                    WXSdk.instance.showModal({
                        title: GameTxt.common_window_titlt,
                        content: GameTxt.wx_authsetting_not_allow_userinfo,
                        showCancel: false,
                    });
                }
            });
            button.show();
            return button
        };
        Platform.WxAuthSettingButton = createrButton();
        EventManager.dispatch(AppEvent.PLATFORM_AUTHSETTING_UPDATE, Platform.WxAuthSettingButton);
        return Platform.WxAuthSettingButton

    }
    /** 启动隐私授权上报弹窗 */
    onNeedPrivacyAuthorization_WX(event: string = null) {
        Logger.logPlatform("启动隐私授权上报")
        switch (this._currowPlatForm) {
            case sys.Platform.WECHAT_GAME:
                WXSdk.instance.onNeedPrivacyAuthorization(event);
                break;
            default:
                break;
        };
    }
    /** 检查隐私保护指引是否支持 */
    checkPrivacyContract(): boolean {
        if (this._currowPlatForm == sys.Platform.WECHAT_GAME) {
            return WXSdk.instance.openPrivacyContract(true);
        }
        return false;
    }
    /** 打开隐私保护指引 */
    openPrivacyContract_WX(callback: Function = null) {
        Logger.logPlatform("打开隐私保护指引")
        let res = false;
        let callFunc = function (state) {
            if (callback && res == false) {
                callback(state);
                res = true;
            }
        }
        switch (this._currowPlatForm) {
            case sys.Platform.WECHAT_GAME:
                WXSdk.instance.openPrivacyContract(false, () => {
                    callFunc(true);
                }, () => {
                    callFunc(false);
                });
                break;
            default:
                break;
        };
    }
    /**
     * 联系客服
     * @param option 传递的参数 会回传
     * @param callback 回调函数
     */
    openCustomerServiceConversation(option = {}, callback: Function = null) {
        Logger.logPlatform("点击了联系客服")
        let res = false;
        let callFunc = function (state: boolean, errParam = null) {
            if (callback && res == false) {
                setTimeout(() => {
                    callback(state, option);
                }, 1500)
            }
            res = true;
        }
        switch (this._currowPlatForm) {
            case sys.Platform.WECHAT_GAME:
                // 分享之后的回调函数实际是callFunc()
                WXSdk.instance.openCustomerServiceConversation(
                    option['sessionFrom'],
                    () => {
                        callFunc(true)
                    },
                    (errParam) => {
                        callFunc(false, errParam)
                    },
                    null,
                    option['showMessageCard'],
                    option['sendMessageTitle'],
                    option['sendMessagePath'],
                    option['sendMessageImg']);;
                break;
            default:
                callFunc(true);
                break;
        };
    }
    /**
     * 设置自定义分享参数（只能用一次）
     * @param friends 分享好友参数 __InterFace_WXSdk_OnShareAppMessage
     * @param pyq 分享朋友圈参数__InterFace_WXSdk_OnShareTimeline
     */
    setCustomShareInfo(friends: __InterFace_WXSdk_OnShareAppMessage = null, pyq: __InterFace_WXSdk_OnShareTimeline = null) {
        Platform.CustomShareFriendsInfo = friends;
        Platform.CustomSharePYQInfo = pyq;
    }
    /** wx:监听用户点击 分享好友 按钮时触发的事件 */
    getShareFriendFunc() {
        Logger.logPlatform("点击了分享给朋友")
        if (Platform.CustomShareFriendsInfo) {
            let info = Utils.clone(Platform.CustomShareFriendsInfo);
            Platform.CustomShareFriendsInfo = null;
            return info;
        }
        let param: __InterFace_WXSdk_OnShareAppMessage = {}

        param.title = GameTxt.share_wx_friends_txt;
        param.imageUrl = GameRes.AppCommon_Share_Friend_Comm.path;
        return param;
    }
    /** wx：监听用户点击 分享朋友圈 按钮时触发的事件*/
    getSharePYQFunc() {
        Logger.logPlatform("点击了分享到朋友圈")
        if (Platform.CustomSharePYQInfo) {
            let info = Utils.clone(Platform.CustomSharePYQInfo);
            Platform.CustomSharePYQInfo = null;
            return info;
        }
        let param: __InterFace_WXSdk_OnShareTimeline = {}
        param.title = GameTxt.share_wx_pyq_txt;
        param.imageUrl = GameRes.AppCommon_Share_Friend_Comm.path;
        return param
    }
    /** wx：监听用户「分享到指定朋友」触发的结果事件*/
    getShareMessageToFriend(respParam = {}) {
        Logger.logPlatform("用户分享到了指定好友", respParam)
        let res = true;
        if (!respParam || respParam["success"] != true) {
            res = false;
        }
        //通知:分享结果
        EventManager.dispatch(AppEvent.OTHER_SHTRE_FRIEND_RESULT, res)
    }
    /**
     * 微信分享：好友
     * @param wxParam 分享好友的参数
     * @param callback 回调函数
     * @param callbackData 请求时传递的参数附加参数
     * @returns 
     */
    shareWXFriends(wxParam: __InterFace_WXSdk_OnShareAppMessage = null, callback: Function = null, callbackData = null) {
        if (this.isWXPlatform() == false) {
            if (callback) {
                callback(callbackData);
            }
            return;
        }
        WXSdk.instance.shareAppMessage(wxParam || this.getShareFriendFunc());
        if (callback) {
            setTimeout(() => {
                callback(callbackData);
            }, 1500)
        }
    }

    /** 复制 */
    copyClipboard(str: string, callback?: Function) {
        if (!str) {
            return
        }
        str = String(str);

        switch (this._currowPlatForm) {
            case sys.Platform.WECHAT_GAME:
                Logger.logPlatform("调用复制");
                WXSdk.instance.setClipboardData(str,
                    (res) => {
                        callback && callback(str);
                    },
                    (res) => {
                        Logger.logPlatform("复制失败:", res);
                        callback && callback(null)
                    }
                )
                break;
            case sys.Platform.DESKTOP_BROWSER:
                let save = function (e) {
                    e.clipboardData.setData('text/plain', str);
                    e.preventDefault();
                    EventManager.dispatch(AppEvent.SYS_TOAST_TIP, { content: GameTxt.copySuccess })
                    callback && callback(str);
                }
                document.addEventListener('copy', save);
                document.execCommand('copy');
                document.removeEventListener('copy', save);
                break;
            default:
                callback && callback(null)
                break;
        }
    }
    /**
     * 创建websocket
     * @param url 地址 "ws://" "wss://"
     * @param binaryType 返回的数据类型 wxgame不支持自定义
     * @param success 接口调用成功的回调
     * @param fail 接口调用失败的回调
     * @param completed 接口成功的回调
     * @param timeout 超时时间：毫秒
     */
    connectSocket(url: string, binaryType: BinaryType = "arraybuffer", success: Function = null, fail: Function = null, completed: Function = null, header: object = null, timeout: number = null) {
        Logger.logPlatform("创建websocket:>>>url:" + url)

        if (this._currowPlatForm == sys.Platform.WECHAT_GAME) {
            return WXSdk.instance.connectSocket(url, success, fail, completed, header, timeout);
        } else {
            let ws = new WebSocket(url);
            if (ws) {
                ws.binaryType = binaryType ? binaryType : "arraybuffer";
                if (success) {
                    success();
                }
            } else {
                if (fail) {
                    fail();
                }
            }
            return ws;
        }
    }
    /** 关闭websocket */
    closeSocket(wsHandler, code: number = 1000, reason: string = "") {
        if (this._currowPlatForm == sys.Platform.WECHAT_GAME) {
            if (wsHandler && wsHandler.close) {
                wsHandler.close({ code: code, reason: reason });
            } else {
                WXSdk.instance.closeSocket(code, reason);
            }
        } else {
            if (wsHandler && wsHandler.close) {
                wsHandler.close(code, reason);
            } else {
                error("关闭websocket失败 缺少websocket句柄");
            }
        }
    }
    /** 请求发起支付(只支持安卓平台) */
    reqSendPay(body: Object) {
        //返回数据的格式
        let respBody = { respCode: GConstants.AppPayResult.UNINE, req: body, msg: null };

        if (Utils.isNull(body) || Utils.isNull(body["num"]) || Utils.isNull(body["zoneId"])) {
            if (body["callback"]) {
                body["callback"](respBody);
            }
            return;
        }
        if (this.isCanPay() == false) {
            Logger.logPlatform(`${this.ClientPlatform} 不支持支付`);
            //测试代码
            // respBody.respCode = GConstants.AppPayResult.SUCCESS;

            if (body["callback"]) {
                body["callback"](respBody);
            }
            return;
        }

        WXSdk.instance.requestMidasPayment(body["num"], ClientInfo.WX_PayOfferId, ClientInfo.WX_PayEnv, body["zoneId"],
            (res) => {
                Logger.logPlatform("******支付成功***********")
                Logger.logPlatform(res);
                respBody.respCode = GConstants.AppPayResult.SUCCESS;
                respBody.msg = res;
                if (body["callback"]) {
                    body["callback"](respBody);
                }
                //支付结果
                EventManager.dispatch(AppEvent.OTHER_PAY_RESULT, respBody);
            },
            (res) => {
                Logger.logPlatform("******支付失败***********")
                Logger.logPlatform(res);
                respBody.respCode = GConstants.AppPayResult.FAIL;
                respBody.msg = res;
                let errorTip = null;
                if (res["errCode"] != 1) {//非取消支付
                    errorTip = GameTxt.pay_error_codelist[res["errCode"]];
                    if (!errorTip) {
                        errorTip = res["errMsg"];
                    }
                    if (errorTip) {
                        EventManager.dispatch(AppEvent.SYS_TOAST_TIP, { content: errorTip });
                    }
                }
                if (body["callback"]) {
                    body["callback"](respBody);
                }
                //支付结果
                EventManager.dispatch(AppEvent.OTHER_PAY_RESULT, respBody);
            }
        );
    }
    /** 注册网络回调函数 */
    regWxNetWorkCallback(callback: Function) {
        if (this.isWXPlatform() == false) {
            return;
        }
        WXSdk.instance.onNetworkStatusChange(callback);
    }

    /** 获取最新的 wx凭据 */
    updateReFreshAccessToken(_callback: Function = null) {
        if (this.isWXPlatform() == false) {
            if (_callback) {
                // 测试代码
                // Platform.PLogInfo.access_token = "60_4RUiwRSohQKB-aTEFFc9ZpYcc7c9VH_vyricFYiTxhjdUo4lZ607tmu8XRaGHj0Turra98bp13kyImpxKzMbmEOmYh2xlDEP8-wpqYezdJF7HhgFoMVtrEhG60hrT1ZRS2UfpXd3BTkuKLwFSNRgAHAOJN";
                // Platform.PLogInfo.openId = "owvGE5QcLfmK3jHkkwAMlsUyoJDc";
                // Platform.PLogInfo.userinfo = {
                // 	avatarUrl: "https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLoaDUhelx5SYpgvbTmysgmQLRukxvWp6VVVZZkib78fZVugwrqsRdL7kDtZGrqu2YJKTxx0jT4ZHw/132",
                // 	city: "",
                // 	country: "",
                // 	gender: 0,
                // 	language: "zh_CN",
                // 	nickName: "Ay.故",
                // 	province: "",
                // }
                // _callback(true);
                _callback(null);
            }
            return;
        }
        //获取登录凭证 code（先检查是否失效）
        let getLoginCode = function (callback: Function) {
            if (Platform.WxLoginCode != null) {
                WXSdk.instance.checkSession(
                    () => {
                        Logger.logPlatform("Success:登录凭证未失效 Code = " + Platform.WxLoginCode);
                    },
                    () => {
                        Logger.logPlatform("Fail:登录凭证已失效 ");
                        Platform.WxLoginCode = null;
                    },
                    () => {
                        Logger.logPlatform("getLoginCode:登录凭证是否失效：" + Platform.WxLoginCode == null);
                        if (Platform.WxLoginCode) {
                            callback({ code: Platform.WxLoginCode })
                        } else {
                            getLoginCode(callback);
                        }
                    })
                return;
            } else {
                WXSdk.instance.login(5000, (param) => {
                    Logger.logPlatform(`成功获取登录凭证 code = ${param.code}`);
                    Platform.WxLoginCode = param.code;
                    callback({ code: Platform.WxLoginCode });
                }, () => {
                    Logger.logPlatform(`获取登录凭证失败`);
                    callback(null);
                })
            }
        }

        //获取OpenID和AccessToken
        let getOpenIDAndAccestToken = function (callback: Function) {
            //注意:为了确保每次都是新的 必须重置；
            Platform.WxLoginCode = null;
            getLoginCode((loginRsp) => {
                if (loginRsp && loginRsp.code) {
                    Platform.WxLoginCode = loginRsp.code;
                    let data = {
                        action: "core.getMiniConfig",
                        code: Platform.WxLoginCode,
                        appid: ClientInfo.PlatFormAppID,
                    }
                    let http = new HttpRequest();
                    http.post(GameConfig.instance.AppUrlConf.Web, JSON.stringify(data),
                        (res) => {
                            //wxLoginCode已用过了
                            Platform.WxLoginCode = null;
                            let openID = null;
                            let access_token = null;
                            if (res && res["code"] == 200) {
                                if (res["result"]) {
                                    if (res["result"]["session"]) {//OpenID
                                        openID = Utils.nullToDefault(res["result"]["session"]["openid"], null);
                                    }
                                    if (res["result"]["token"]) {//access_token
                                        access_token = Utils.nullToDefault(res["result"]["token"]["access_token"], null);
                                    }
                                }
                            }
                            if (openID && access_token) {
                                let data = {
                                    openid: openID,
                                    access_token: access_token,
                                }
                                Logger.logPlatform(`Success:获取OpenID 和 AccessToken成功 openID=${data.openid} access_token=${data.access_token}`);
                                callback(data);
                            } else {
                                Logger.logPlatform(`Fail:获取OpenID 和 AccessToken失败`);
                                callback(null);
                            }
                        }, (res) => {
                            Logger.logPlatform(`Fail:获取OpenID 和 AccessToken失败`, res);
                            callback(null);
                        }, 'json')
                } else {
                    callback(null);
                }
            })
        }
        getOpenIDAndAccestToken((param) => {
            if (param) {
                //保存用于登录的信息
                Platform.PLogInfo = { access_token: param["access_token"], openId: param["openid"], userinfo: Platform.WxUserInfo }
            }
            if (_callback) {
                _callback(param != null);
            }
            //通知：凭据信息有更新
            EventManager.dispatch(AppEvent.LOGIN_WX_ACCESS_UPDATE, param != null, Platform.PLogInfo);
        })

    }
    /** 获取平台朋友圈授权信息*/
    reqPlatformFriendInteraction(callFunc = null) {
        Logger.logPlatform("获取平台朋友圈授权信息:>>>")

        let endFunc = function (res) {
            Logger.logPlatform("获取平台朋友圈授权信息:>>>授权结果:" + String(res))
            if (callFunc && typeof (callFunc) == "function") {
                callFunc(res);
            }
        }
        switch (this._currowPlatForm) {
            case sys.Platform.WECHAT_GAME:
                //显示授权弹窗
                let startShowAuthorize = function (callback: Function) {
                    WXSdk.instance.authorize(WXSdk_AuthSetting.WxFriendInteraction,
                        () => {
                            Logger.logPlatform(`授权成功`);
                            Platform.WxAuthSettingFriends = 1;
                            callback(true);
                        },
                        () => {
                            Logger.logPlatform(`授权失败`);
                            Platform.WxAuthSettingFriends = -1;
                            callback(false);
                        }
                    )
                }
                //获取授权信息
                let getSetting = function (callback: Function) {
                    WXSdk.instance.getSetting(
                        false,
                        (param) => {
                            if (param.authSetting[WXSdk_AuthSetting.WxFriendInteraction]) {
                                Logger.logPlatform(`getSetting:已授权好友信息`)
                                Logger.logPlatform("信息：", param.authSetting[WXSdk_AuthSetting.WxFriendInteraction])
                                Platform.WxAuthSettingFriends = 1;
                                //进入下一步
                                callback(true);
                            } else {
                                Logger.logPlatform("getSetting:没有获得授权 默认已经登录成功 弹出授权弹窗")
                                Platform.WxAuthSettingFriends = 0;
                                //弹出授权弹窗
                                startShowAuthorize(callback);
                            }
                        },
                        () => {
                            Logger.logPlatform("getSetting:获取授权信息失败")
                            callback(null)
                        }
                    )
                }
                return getSetting(endFunc);
            case sys.Platform.DESKTOP_BROWSER:
                break;
            default:
                break;
        }
    }
    /** 设置平台云数据 */
    setPlatformCloudStorage(keyValueList: Array<any>, callback = null) {
        Logger.logPlatform("设置平台云数据:key>>>", keyValueList)
        if (Platform.WxAuthSettingFriends != 1) {
            if (callback) {
                callback(false);
            }
            return;
        }
        //所有键的集合
        let keys = [];

        let endFunc = function (res) {
            Logger.logPlatform("设置平台云数据:>>>结果", res)
            if (callback && typeof (callback) == "function") {
                //测试
                Platform.getPlatformCloudStorage(keys);
                callback(res);
            }
        }
        switch (this._currowPlatForm) {
            case sys.Platform.WECHAT_GAME:
                let pData = [];

                for (let i = 0; i < keyValueList.length; i++) {
                    let data = { key: String(keyValueList[i]["key"]), value: String(keyValueList[i]["value"]) };
                    pData.push(data);
                    keys.push(data.key);
                }
                WXSdk.instance.setUserCloudStorage(pData,
                    (param) => {
                        Logger.logPlatform("setUserCloudStorage 设置平台云数据", pData, param)
                        endFunc(true);
                    },
                    () => {
                        Logger.logPlatform("setUserCloudStorage 设置平台云数据 失败", pData)
                        endFunc(false)
                    }
                )
                break;
            case sys.Platform.DESKTOP_BROWSER:
                break;
            default:
                break;
        }
    }
    /** 获取平台云数据 */
    getPlatformCloudStorage(key: Array<string>, callback = null) {
        Logger.logPlatform("获取平台云数据:key>>>", key)
        if (Platform.WxAuthSettingFriends != 1) {
            if (callback) {
                callback(null);
            }
            return;
        }
        let endFunc = function (res) {
            Logger.logPlatform("获取平台云数据:>>>结果", res)
            if (callback && typeof (callback) == "function") {
                callback(res);
            }
        }
        switch (this._currowPlatForm) {
            case sys.Platform.WECHAT_GAME:
                WXSdk.instance.getUserCloudStorage(key,
                    (param) => {
                        Logger.logPlatform("setUserCloudStorage 获取平台云数据", param)
                        endFunc(param);
                    },
                    () => {
                        Logger.logPlatform("reqFriendKVList 获取平台云数据 失败", key)
                        endFunc(null)
                    }
                )
                break;
            case sys.Platform.DESKTOP_BROWSER:
                break;
            default:
                break;
        }

    }

    /** 向开放的数据域发送消息 */
    postMessage(message: object) {
        switch (this._currowPlatForm) {
            case sys.Platform.WECHAT_GAME:
                WXSdk.instance.postMessage(message);
                break;
            case sys.Platform.DESKTOP_BROWSER:
                break;
            default:
                break;
        }
    }
    /** 获取消息订阅状态 */
    getSettingSubscribeMessageStates(callback: Function = null) {
        switch (this._currowPlatForm) {
            case sys.Platform.WECHAT_GAME:
                WXSdk.instance.getSetting(
                    true,
                    (param) => {
                        Platform.WxAuthSettingSubscriptions = param?.subscriptionsSetting;
                        if (callback) {
                            callback(Platform.WxAuthSettingSubscriptions)
                        }
                    },
                    () => {
                        Logger.logPlatform("getSetting:获取消息订阅状态失败")
                        Platform.WxAuthSettingSubscriptions = null;
                        if (callback) {
                            callback(Platform.WxAuthSettingSubscriptions);
                        }
                    }
                )
                break;
            case sys.Platform.DESKTOP_BROWSER:
                break;
            default:
                break;
        }
    }
    /** 请求订阅消息 */
    requestSubscribeMessage(tmplIds: Array<string>, callback = null) {
        let callFunc = (param) => {
            if (callback) {
                callback(param);
            }
        }
        switch (this._currowPlatForm) {
            case sys.Platform.WECHAT_GAME:
                WXSdk.instance.requestSubscribeMessage(tmplIds,
                    (param) => {
                        Logger.logPlatform("请求订阅消息成功：", tmplIds, param);
                        callFunc(param);
                    },
                    (param) => {
                        Logger.logPlatform("请求订阅消息失败：", tmplIds, param);
                        callFunc(param);
                    },
                );
                break;
            case sys.Platform.DESKTOP_BROWSER:
                break;
            default:
                break;
        }
    }
    /**
     * 震动
     * @param isLong 是否是长时间震动 默认false短时间
     * @param type 短时间震动的强度 长时间则不传
     * @param callback 成功或失败的回调
     */
    vibrate(isLong: boolean = false, type = null, callback = null) {
        let callFunc = (param) => {
            if (callback) {
                callback(param);
            }
        }
        let shorkOpen = LocalStorage.get(StoreKey.SYS_Shock, true);
        if (!shorkOpen) {
            return;
        }
        switch (this._currowPlatForm) {
            case sys.Platform.WECHAT_GAME:
                if (isLong == true) {
                    WXSdk.instance.vibrateLong(
                        (param) => {
                            Logger.logPlatform("请求长时间震动成功：", param);
                            callFunc(param);
                        },
                        (param) => {
                            Logger.logPlatform("请求长时间震动失败：", param);
                            callFunc(param);
                        },
                    );
                } else {
                    type = type || WXSdk_VibrateShortType.heavy;
                    WXSdk.instance.vibrateShort(type,
                        (param) => {
                            Logger.logPlatform("请求短时间震动成功：", type, param);
                            callFunc(param);
                        },
                        (param) => {
                            Logger.logPlatform("请求短时间震动失败：", type, param);
                            callFunc(param);
                        },
                    );
                }
                break;
            case sys.Platform.DESKTOP_BROWSER:
                break;
            default:
                break;
        }
    }
    /** 初始化广告组件 */
    initAdVideo(adUnitId: string) {
        switch (this._currowPlatForm) {
            case sys.Platform.WECHAT_GAME:
                WXSdk.instance.createRewardedVideoAd(adUnitId);
                break;
            case sys.Platform.DESKTOP_BROWSER:
                break;
            default:
                break;
        }
    }
    /**
     * 播放广告
     * @param callback 回调函数
     * @param callData 附加回调数据
     */
    playerAdVideo(callback: Function = null, callData = null) {
        let startCallFunc = function () {
            EventManager.dispatch(AppEvent.SYS_CLOSE_NETLOADING);
        }
        let failCallFunc = function () {
            EventManager.dispatch(AppEvent.SYS_CLOSE_NETLOADING);
        }
        let onClickCloseCallFunc = function (res: boolean) {
            EventManager.dispatch(AppEvent.SYS_CLOSE_NETLOADING);
            if (callback) {
                callback(res == true, callData);
            }
        }
        switch (this._currowPlatForm) {
            case sys.Platform.WECHAT_GAME:
                EventManager.dispatch(AppEvent.SYS_SHOW_NETLOADING, 15);
                WXSdk.instance.playRewardedVideoShow(startCallFunc, failCallFunc, onClickCloseCallFunc);
                break;
            case sys.Platform.DESKTOP_BROWSER:
                if (callback) {
                    callback(true, callData);
                }
                break;
            default:
                if (callback) {
                    callback(false, callData);
                }
                break;
        }
    }
    /** 文件下载 */
    downloadFile(url: string, callback: Function = null) {
        Logger.logPlatform("文件下载")

        let isReturn = false;
        let callFunc = function (res) {
            if (callback && isReturn == false) {
                isReturn = true;
                let param = {
                    url: url,
                    code: res ? res.statusCode : -1,
                    filePath: res ? res.tempFilePath : null
                }
                console.log(`文件下载 是否成功${param.code === 200} 所有参数:`, res)
                callback(param);
            }
        }
        switch (this._currowPlatForm) {
            case sys.Platform.WECHAT_GAME:
                WXSdk.instance.downloadFile(url, null, null, callFunc, callFunc, null)
                break;
            case sys.Platform.DESKTOP_BROWSER:
                break;
            default:
                break;
        }
    }
    /** 获取小游戏冷启动时的参数 */
    getLaunchOptionsSync() {
        switch (this._currowPlatForm) {
            case sys.Platform.WECHAT_GAME:
                let res = WXSdk.instance.getLaunchOptionsSync();
                this.AppLaunchOptions = Utils.table_verify(res);
                break;
            default:
                this.AppLaunchOptions = {};
                break;
        }
        console.log("获取小游戏冷启动时的参数==>", this.AppLaunchOptions);
        return this.AppLaunchOptions;
    }
    /** 获取小游戏启动/显示时的参数 */
    getEnterOptionsSync() {
        switch (this._currowPlatForm) {
            case sys.Platform.WECHAT_GAME:
                let res = WXSdk.instance.getEnterOptionsSync();
                this.AppEnterOptions = Utils.table_verify(res);
                break;
            default:
                this.AppEnterOptions = {};
                break;
        }
        console.log("获取小游戏启动/显示时的参数==>", this.AppEnterOptions);
        return this.AppEnterOptions;
    }
}

export const Platform = _Platform.instance

