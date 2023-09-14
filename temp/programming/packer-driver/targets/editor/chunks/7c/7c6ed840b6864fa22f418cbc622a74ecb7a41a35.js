System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, error, sys, AppEvent, ClientInfo, GameConfig, GConstants, StoreKey, GameRes, GameTxt, Encrypt, LocalStorage, Logger, EventManager, HttpRequest, Utils, WXSdk, WXSdk_AuthSetting, WXSdk_VibrateShortType, _Platform, _crd, Platform;

  function _reportPossibleCrUseOfAppEvent(extras) {
    _reporterNs.report("AppEvent", "../config/AppEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfClientInfo(extras) {
    _reporterNs.report("ClientInfo", "../config/GameConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameConfig(extras) {
    _reporterNs.report("GameConfig", "../config/GameConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGConstants(extras) {
    _reporterNs.report("GConstants", "../config/GameConstant", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStoreKey(extras) {
    _reporterNs.report("StoreKey", "../config/GameConstant", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameRes(extras) {
    _reporterNs.report("GameRes", "../config/GameRes", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameTxt(extras) {
    _reporterNs.report("GameTxt", "../config/GameTxt", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEncrypt(extras) {
    _reporterNs.report("Encrypt", "../framework/crypto/Encrypto", _context.meta, extras);
  }

  function _reportPossibleCrUseOfinf_LoginViewInfo(extras) {
    _reporterNs.report("inf_LoginViewInfo", "../framework/InterfaceDefines", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLocalStorage(extras) {
    _reporterNs.report("LocalStorage", "../framework/LocalStorage", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLogger(extras) {
    _reporterNs.report("Logger", "../framework/log/Logger", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventManager(extras) {
    _reporterNs.report("EventManager", "../framework/manager/EventManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHttpRequest(extras) {
    _reporterNs.report("HttpRequest", "../framework/network/HttpRequest", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUtils(extras) {
    _reporterNs.report("Utils", "../framework/Utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWXSdk(extras) {
    _reporterNs.report("WXSdk", "./weixin/WXSdk", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWXSdk_AuthSetting(extras) {
    _reporterNs.report("WXSdk_AuthSetting", "./weixin/WXSdkDefines", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWXSdk_VibrateShortType(extras) {
    _reporterNs.report("WXSdk_VibrateShortType", "./weixin/WXSdkDefines", _context.meta, extras);
  }

  function _reportPossibleCrUseOf_InterFace_WXSdk_ButtonStyle(extras) {
    _reporterNs.report("_InterFace_WXSdk_ButtonStyle", "./weixin/WXSdkDefines", _context.meta, extras);
  }

  function _reportPossibleCrUseOf_InterFace_WXSdk_SystemInfo(extras) {
    _reporterNs.report("_InterFace_WXSdk_SystemInfo", "./weixin/WXSdkDefines", _context.meta, extras);
  }

  function _reportPossibleCrUseOf__InterFace_WXSdk_OnShareAppMessage(extras) {
    _reporterNs.report("__InterFace_WXSdk_OnShareAppMessage", "./weixin/WXSdkDefines", _context.meta, extras);
  }

  function _reportPossibleCrUseOf__InterFace_WXSdk_OnShareTimeline(extras) {
    _reporterNs.report("__InterFace_WXSdk_OnShareTimeline", "./weixin/WXSdkDefines", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      error = _cc.error;
      sys = _cc.sys;
    }, function (_unresolved_2) {
      AppEvent = _unresolved_2.AppEvent;
    }, function (_unresolved_3) {
      ClientInfo = _unresolved_3.ClientInfo;
      GameConfig = _unresolved_3.GameConfig;
    }, function (_unresolved_4) {
      GConstants = _unresolved_4.GConstants;
      StoreKey = _unresolved_4.StoreKey;
    }, function (_unresolved_5) {
      GameRes = _unresolved_5.GameRes;
    }, function (_unresolved_6) {
      GameTxt = _unresolved_6.GameTxt;
    }, function (_unresolved_7) {
      Encrypt = _unresolved_7.Encrypt;
    }, function (_unresolved_8) {
      LocalStorage = _unresolved_8.LocalStorage;
    }, function (_unresolved_9) {
      Logger = _unresolved_9.Logger;
    }, function (_unresolved_10) {
      EventManager = _unresolved_10.EventManager;
    }, function (_unresolved_11) {
      HttpRequest = _unresolved_11.HttpRequest;
    }, function (_unresolved_12) {
      Utils = _unresolved_12.Utils;
    }, function (_unresolved_13) {
      WXSdk = _unresolved_13.WXSdk;
    }, function (_unresolved_14) {
      WXSdk_AuthSetting = _unresolved_14.WXSdk_AuthSetting;
      WXSdk_VibrateShortType = _unresolved_14.WXSdk_VibrateShortType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6075cZw3U9LPKfYAhrfGROo", "Platform", undefined);

      __checkObsolete__(['error', 'sys']);

      _Platform = class _Platform {
        static get instance() {
          if (!this._instance || this._instance == null) {
            this._instance = new _Platform();
          }

          return this._instance;
        } //当前平台


        constructor() {
          this._currowPlatForm = sys.platform;
          this._DeviceID = "";
          this._SystemInfo = null;
          this._platformVer = "";
          this._SDKVer = "";
          this._platFormClient = null;
          this._Guid = null;
          this._Machineid = null;
          this._MachineModel = null;
          this._PhoneModel = null;
          this._IMSI = null;
          this._ICCID = null;
          this._IMEI = null;
          this._PhoneCardType = -1;
          this._NetWorkType = -1;
          this._NetWorkSignal = 3;
          this.CustomShareFriendsInfo = null;
          this.CustomSharePYQInfo = null;
          this.WxLoginCode = null;
          this.WxAccessToken = null;
          this.WxAuthSettingUserInfo = 0;
          this.WxAuthSettingFriends = 0;
          this.WxAuthSettingSubscriptions = null;
          this.WxAuthSettingButton = null;
          this.WxAuthSettingButtonParam = null;
          this.WxUserInfo = null;
          this.PLogInfo = {
            access_token: null,
            openId: null,
            userinfo: null
          };
          this.TopBarHeight = 0;
          this.AppLaunchOptions = {};
          this.AppEnterOptions = {};
          (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
            error: Error()
          }), Logger) : Logger).logPlatform("***************************************");
          (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
            error: Error()
          }), Logger) : Logger).logPlatform("\\\\\\\\\\\\\\\平台初始化\\\\\\\\\\\\\\\\");
          (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
            error: Error()
          }), Logger) : Logger).logPlatform(`当前平台:\n      ${this._currowPlatForm}`);
          (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
            error: Error()
          }), Logger) : Logger).logPlatform(`系统信息:\n`);
          this.dump();
          (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
            error: Error()
          }), Logger) : Logger).logPlatform("\\\\\\\\\\\\\\\平台初始化\\\\\\\\\\\\\\\\");
          (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
            error: Error()
          }), Logger) : Logger).logPlatform("***************************************");
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
              (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
                error: Error()
              }), Logger) : Logger).logPlatform("输出系统信息：====>");
              (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
                error: Error()
              }), Logger) : Logger).table(this._SystemInfo);
              (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
                error: Error()
              }), Logger) : Logger).logPlatform(this._SystemInfo); //打开调试开关

              if ((_crd && ClientInfo === void 0 ? (_reportPossibleCrUseOfClientInfo({
                error: Error()
              }), ClientInfo) : ClientInfo).DEBUG == true && this.isWXPlatform() && (this.isAndroid() == true || this.isIOS() == true)) {
                (_crd && WXSdk === void 0 ? (_reportPossibleCrUseOfWXSdk({
                  error: Error()
                }), WXSdk) : WXSdk).instance.setEnableDebug((_crd && ClientInfo === void 0 ? (_reportPossibleCrUseOfClientInfo({
                  error: Error()
                }), ClientInfo) : ClientInfo).DEBUG);
              }

              (_crd && WXSdk === void 0 ? (_reportPossibleCrUseOfWXSdk({
                error: Error()
              }), WXSdk) : WXSdk).instance.onShareAppMessage((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                error: Error()
              }), Utils) : Utils).handler(this, this.getShareFriendFunc));
              (_crd && WXSdk === void 0 ? (_reportPossibleCrUseOfWXSdk({
                error: Error()
              }), WXSdk) : WXSdk).instance.onShareTimeline((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                error: Error()
              }), Utils) : Utils).handler(this, this.getSharePYQFunc));
              (_crd && WXSdk === void 0 ? (_reportPossibleCrUseOfWXSdk({
                error: Error()
              }), WXSdk) : WXSdk).instance.onShareMessageToFriend((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                error: Error()
              }), Utils) : Utils).handler(this, this.getShareMessageToFriend));
              (_crd && WXSdk === void 0 ? (_reportPossibleCrUseOfWXSdk({
                error: Error()
              }), WXSdk) : WXSdk).instance.showShareMenu(true, ['shareAppMessage', 'shareTimeline']);
              (_crd && WXSdk === void 0 ? (_reportPossibleCrUseOfWXSdk({
                error: Error()
              }), WXSdk) : WXSdk).instance.setKeepScreenOn(true);

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


        _initDeviceID() {
          let key = "DeviceID";
          let str_1 = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).string_format("platform:{0} platformVer:{1} sdkVer:{2}", this._currowPlatForm, this._platformVer, this._SDKVer);
          this._DeviceID = (_crd && Encrypt === void 0 ? (_reportPossibleCrUseOfEncrypt({
            error: Error()
          }), Encrypt) : Encrypt).base64_encode(str_1) + "_";
          (_crd && LocalStorage === void 0 ? (_reportPossibleCrUseOfLocalStorage({
            error: Error()
          }), LocalStorage) : LocalStorage).set(key, this._DeviceID);
          (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
            error: Error()
          }), Logger) : Logger).logPlatform("生成唯一设备识别码==>device =", this._DeviceID, str_1);
        }
        /**输出系统信息 */


        dump() {
          sys.dump();
        }
        /** 打开一个Url 并非所有平台有效*/


        openURL(url) {
          sys.openURL(url);
        }
        /** 是否是wx平台 */


        isWXPlatform() {
          return this._currowPlatForm == sys.Platform.WECHAT_GAME;
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


        isCanPay() {
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
            let keyList = [["iPhone 11"], ["iPhone 12"], ["iPhone 13"], ["iPhone14,5"], ["iPhone14"], ["iPhone", "Pro"], ["iPhone", "mini"], ["iPhone", "X"]];

            if (model && (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).number_valueOf(this._SystemInfo["statusBarHeight"]) > 20) {
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


        get DeviceID() {
          this._initDeviceID();

          return this._DeviceID;
        }
        /** 获取平台语言 */


        get Lang() {
          switch (this._currowPlatForm) {
            case sys.Platform.WECHAT_GAME:
              this.SystemInfo;

              if (this._SystemInfo) {
                return this._SystemInfo["language"];
              }

              return null;

            case sys.Platform.DESKTOP_BROWSER:
              return sys.language;

            default:
              break;
          }

          return null;
        }
        /** 获取平台版本 */


        get PlatFormVersion() {
          switch (this._currowPlatForm) {
            case sys.Platform.WECHAT_GAME:
              //微信版本 如:8.0.5
              if (!this._platformVer) {
                this.SystemInfo;

                if (this._SystemInfo) {
                  this._platformVer = this._SystemInfo["version"];
                }
              }

              return this._platformVer;

            case sys.Platform.DESKTOP_BROWSER:
              this._platformVer = sys.browserVersion;
              return this._platformVer;

            default:
              this._platformVer = "";
              break;
          }

          return this._platformVer;
        }
        /** 获取sdk版本 */


        get SDKVersion() {
          switch (this._currowPlatForm) {
            case sys.Platform.WECHAT_GAME:
              //基础库版本 如:2.24.5
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

          return this._SDKVer;
        }
        /** 获取客户端类型 安卓 ios windows */


        get ClientPlatform() {
          switch (this._currowPlatForm) {
            case sys.Platform.WECHAT_GAME:
              if (!this._platFormClient) {
                this.SystemInfo;

                if (this._SystemInfo) {
                  this._platFormClient = this._SystemInfo["platform"];
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


        updateNetWorkType(callback = null) {
          switch (this._currowPlatForm) {
            case sys.Platform.WECHAT_GAME:
              let self = this;
              (_crd && WXSdk === void 0 ? (_reportPossibleCrUseOfWXSdk({
                error: Error()
              }), WXSdk) : WXSdk).instance.getNetworkType(res => {
                (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
                  error: Error()
                }), Logger) : Logger).logPlatform("getNetworkType（网络状态，信号强度）的返回", res);

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
                    }

                    ;
                  }

                  ;

                  if (res["signalStrength"]) {
                    self._NetWorkSignal = res["signalStrength"];
                  }

                  ;

                  if (callback) {
                    callback();
                  }

                  ;
                }
              });
              break;

            default:
              this._NetWorkType = 6;

              if (callback) {
                callback();
              }

              ;
              break;
          }

          return this._NetWorkType;
        }
        /** 获取系统信息 */


        get SystemInfo() {
          let self = this;

          let initInfoBase = function () {
            self._Guid = "";
            self._Machineid = "";
            self._MachineModel = "";
            self._PhoneModel = "";
            self._IMSI = "";
            self._ICCID = "";
            self._IMEI = "";
            self._PhoneCardType = -1;
            self._NetWorkType = -1;
          };

          switch (this._currowPlatForm) {
            case sys.Platform.WECHAT_GAME:
              if (!this._SystemInfo && (_crd && WXSdk === void 0 ? (_reportPossibleCrUseOfWXSdk({
                error: Error()
              }), WXSdk) : WXSdk)) {
                let sysInfo = (_crd && WXSdk === void 0 ? (_reportPossibleCrUseOfWXSdk({
                  error: Error()
                }), WXSdk) : WXSdk).instance.getSystemInfoSync();
                this._SystemInfo = sysInfo;
                this.checkTopBarHeight();
              }

              initInfoBase();
              this.updateNetWorkType;
              return this._SystemInfo;

            case sys.Platform.DESKTOP_BROWSER:
              initInfoBase();
              return sys;

            default:
              initInfoBase();
              break;
          }

          return null;
        }
        /**
         * 更新授权按钮的显隐
         * @param visible 不传则销毁
         */


        updateWxAuthSettingButtonVisible(visible = null) {
          if (visible == false) {
            if (Platform.WxAuthSettingButton && Platform.WxAuthSettingButton.hide) {
              Platform.WxAuthSettingButton.hide();
            }
          } else if (visible == true) {
            if (Platform.WxAuthSettingButton && Platform.WxAuthSettingButton.show) {
              Platform.WxAuthSettingButton.show();
            } else {
              if ((_crd && WXSdk === void 0 ? (_reportPossibleCrUseOfWXSdk({
                error: Error()
              }), WXSdk) : WXSdk).instance.isCanCreateUserInfoButton()) {
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
          (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
            error: Error()
          }), Logger) : Logger).logPlatform("获取平台用户信息:>>>");

          switch (this._currowPlatForm) {
            /** 微信小程序平台 获取用户信息 */
            case sys.Platform.WECHAT_GAME:
              //获取登录凭证 code（先检查是否失效）
              let getLoginCode = function (callback) {
                if (Platform.WxLoginCode != null) {
                  (_crd && WXSdk === void 0 ? (_reportPossibleCrUseOfWXSdk({
                    error: Error()
                  }), WXSdk) : WXSdk).instance.checkSession(() => {
                    (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
                      error: Error()
                    }), Logger) : Logger).logPlatform("Success:登录凭证未失效 Code = " + Platform.WxLoginCode);
                    callback({
                      code: Platform.WxLoginCode
                    });
                  }, () => {
                    (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
                      error: Error()
                    }), Logger) : Logger).logPlatform("Fail:登录凭证已失效 即将请求登录");
                    Platform.WxLoginCode = null;
                    getLoginCode(callback);
                  }, () => {
                    (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
                      error: Error()
                    }), Logger) : Logger).logPlatform("Fail:登录凭证已失效 即将请求登录");
                    Platform.WxLoginCode = null;
                    getLoginCode(callback);
                  });
                  return;
                }

                (_crd && WXSdk === void 0 ? (_reportPossibleCrUseOfWXSdk({
                  error: Error()
                }), WXSdk) : WXSdk).instance.login(5000, param => {
                  (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
                    error: Error()
                  }), Logger) : Logger).logPlatform(`成功获取登录凭证 code = ${param.code}`);
                  Platform.WxLoginCode = param.code;
                  callback({
                    code: Platform.WxLoginCode
                  });
                }, () => {
                  (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
                    error: Error()
                  }), Logger) : Logger).logPlatform(`获取登录凭证失败`);
                  callback(null);
                });
              }; //显示授权弹窗


              let startShowAuthorize = function (callback) {
                (_crd && WXSdk === void 0 ? (_reportPossibleCrUseOfWXSdk({
                  error: Error()
                }), WXSdk) : WXSdk).instance.authorize((_crd && WXSdk_AuthSetting === void 0 ? (_reportPossibleCrUseOfWXSdk_AuthSetting({
                  error: Error()
                }), WXSdk_AuthSetting) : WXSdk_AuthSetting).userInfo, () => {
                  (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
                    error: Error()
                  }), Logger) : Logger).logPlatform(`授权成功`);
                  Platform.WxAuthSettingUserInfo = 1;
                  callback(true);
                }, () => {
                  (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
                    error: Error()
                  }), Logger) : Logger).logPlatform(`授权失败`);
                  Platform.WxAuthSettingUserInfo = -1;
                  callback(false);
                });
              }; //获取授权信息


              let getSetting = function (callback) {
                (_crd && WXSdk === void 0 ? (_reportPossibleCrUseOfWXSdk({
                  error: Error()
                }), WXSdk) : WXSdk).instance.getSetting(false, param => {
                  if (param.authSetting[(_crd && WXSdk_AuthSetting === void 0 ? (_reportPossibleCrUseOfWXSdk_AuthSetting({
                    error: Error()
                  }), WXSdk_AuthSetting) : WXSdk_AuthSetting).userInfo]) {
                    Platform.WxAuthSettingUserInfo = 1;
                    (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
                      error: Error()
                    }), Logger) : Logger).logPlatform(`getSetting:已授权用户信息`); //进入下一步

                    callback(param.authSetting[(_crd && WXSdk_AuthSetting === void 0 ? (_reportPossibleCrUseOfWXSdk_AuthSetting({
                      error: Error()
                    }), WXSdk_AuthSetting) : WXSdk_AuthSetting).userInfo]);
                  } else {
                    (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
                      error: Error()
                    }), Logger) : Logger).logPlatform("getSetting:没有获得授权");
                    Platform.WxAuthSettingUserInfo = 0;

                    if ((_crd && WXSdk === void 0 ? (_reportPossibleCrUseOfWXSdk({
                      error: Error()
                    }), WXSdk) : WXSdk).instance.isCanCreateUserInfoButton()) {
                      (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
                        error: Error()
                      }), Logger) : Logger).logPlatform("getSetting:创建授权按钮");
                      Platform.updateWxAuthSettingButtonVisible(true);
                    } else {
                      (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
                        error: Error()
                      }), Logger) : Logger).logPlatform("getSetting:弹出授权弹窗"); //弹出授权弹窗

                      startShowAuthorize(callback);
                    }
                  }
                }, () => {
                  (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
                    error: Error()
                  }), Logger) : Logger).logPlatform("getSetting:获取授权信息失败");
                  callback(null);
                });
              }; //获取用户信息


              let getUserInfo = function (callback) {
                let sysInfo = Platform.SystemInfo;
                (_crd && WXSdk === void 0 ? (_reportPossibleCrUseOfWXSdk({
                  error: Error()
                }), WXSdk) : WXSdk).instance.getUserInfo(true, sysInfo["language"], param => {
                  (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
                    error: Error()
                  }), Logger) : Logger).logPlatform(`getUserInfo:获取用户信息成功`);
                  (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                    error: Error()
                  }), Utils) : Utils).dump(param);
                  let userInfo = {
                    avatarUrl: (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                      error: Error()
                    }), Utils) : Utils).nullToDefault(param["userInfo"]["avatarUrl"], ""),
                    city: (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                      error: Error()
                    }), Utils) : Utils).nullToDefault(param["userInfo"]["city"], ""),
                    country: (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                      error: Error()
                    }), Utils) : Utils).nullToDefault(param["userInfo"]["country"], ""),
                    gender: (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                      error: Error()
                    }), Utils) : Utils).nullToDefault(param["userInfo"]["gender"], 0),
                    language: (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                      error: Error()
                    }), Utils) : Utils).nullToDefault(param["userInfo"]["language"], sysInfo["language"]),
                    nickName: (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                      error: Error()
                    }), Utils) : Utils).nullToDefault(param["userInfo"]["nickName"], ""),
                    province: (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                      error: Error()
                    }), Utils) : Utils).nullToDefault(param["userInfo"]["province"], "")
                  };
                  Platform.WxUserInfo = userInfo;
                  (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
                    error: Error()
                  }), Logger) : Logger).logPlatform("输出用户信息：");
                  (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
                    error: Error()
                  }), Logger) : Logger).logPlatform(Platform.WxUserInfo);
                  callback(param);
                }, () => {
                  (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
                    error: Error()
                  }), Logger) : Logger).logPlatform("获取用户信息失败");
                  Platform.WxUserInfo = null;
                  callback(null);
                });
              }; //获取OpenID和AccessToken


              let getOpenIDAndAccestToken = function (callback) {
                getLoginCode(loginRsp => {
                  if (loginRsp && loginRsp.code) {
                    Platform.WxLoginCode = loginRsp.code;
                    let data = {
                      action: "core.getMiniConfig",
                      code: Platform.WxLoginCode,
                      appid: (_crd && ClientInfo === void 0 ? (_reportPossibleCrUseOfClientInfo({
                        error: Error()
                      }), ClientInfo) : ClientInfo).PlatFormAppID
                    };
                    let http = new (_crd && HttpRequest === void 0 ? (_reportPossibleCrUseOfHttpRequest({
                      error: Error()
                    }), HttpRequest) : HttpRequest)();
                    http.post((_crd && GameConfig === void 0 ? (_reportPossibleCrUseOfGameConfig({
                      error: Error()
                    }), GameConfig) : GameConfig).instance.AppUrlConf.Web, JSON.stringify(data), res => {
                      let openID = null;
                      let access_token = null;

                      if (res && res["code"] == 200) {
                        if (res["result"]) {
                          if (res["result"]["session"]) {
                            //OpenID
                            openID = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                              error: Error()
                            }), Utils) : Utils).nullToDefault(res["result"]["session"]["openid"], null);
                          }

                          if (res["result"]["token"]) {
                            //access_token
                            access_token = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                              error: Error()
                            }), Utils) : Utils).nullToDefault(res["result"]["token"]["access_token"], null);
                          }
                        }
                      }

                      if (openID && access_token) {
                        let data = {
                          openid: openID,
                          access_token: access_token
                        };
                        (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
                          error: Error()
                        }), Logger) : Logger).logPlatform(`Success:获取OpenID 和 AccessToken成功 openID=${data.openid} access_token=${data.access_token}`);
                        callback(data);
                      } else {
                        (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
                          error: Error()
                        }), Logger) : Logger).logPlatform(`Fail:获取OpenID 和 AccessToken失败`);
                        callback(null);
                      }
                    }, res => {
                      (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
                        error: Error()
                      }), Logger) : Logger).logPlatform(`Fail:获取OpenID 和 AccessToken失败`, res);
                      callback(null);
                    }, 'json');
                  } else {
                    (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
                      error: Error()
                    }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
                      error: Error()
                    }), AppEvent) : AppEvent).LOGIN_PLATFORM_FAIL, (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
                      error: Error()
                    }), GConstants) : GConstants).LoginStateCode.platform_fail_wx_logincode);
                  }
                });
              };
              /** 执行步骤：
               * 1、调用 wx.login(object) 接口获取登录凭证 code。
               * 2、如果第1步成功，在“success”中调用 wx.getSetting(object)，检查是否已经授权。
               * 3、如果已经授权，则可以直接调用 wx.getUserInfo(object) 拿到用户信息。
               * 4、如果未授权，调用wx.createUserInfoButton(object)，调起授权按钮，授权成功后可以拿到用户信息。
               */


              let startLogin = function () {
                getOpenIDAndAccestToken(param => {
                  if (param) {
                    Platform.updateWxAuthSettingButtonVisible(); //保存用于登录的信息

                    Platform.PLogInfo = {
                      access_token: param["access_token"],
                      openId: param["openid"],
                      userinfo: Platform.WxUserInfo
                    };
                    (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
                      error: Error()
                    }), Logger) : Logger).logPlatform("平台登录信息：>>>", Platform.PLogInfo);
                    (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
                      error: Error()
                    }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
                      error: Error()
                    }), AppEvent) : AppEvent).LOGIN_PLATFORM_SUCCESS, Platform.PLogInfo);
                  } else {
                    //失败
                    (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
                      error: Error()
                    }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
                      error: Error()
                    }), AppEvent) : AppEvent).LOGIN_PLATFORM_FAIL, (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
                      error: Error()
                    }), GConstants) : GConstants).LoginStateCode.platform_fail_wx_code2session_error);
                  }
                });
              }; //已拒绝授权


              if (Platform.WxAuthSettingUserInfo == -1) {
                (_crd && WXSdk === void 0 ? (_reportPossibleCrUseOfWXSdk({
                  error: Error()
                }), WXSdk) : WXSdk).instance.showModal({
                  content: '博雅打滚子需要获取您的用户信息，是否去设置打开?',
                  confirmText: "确认",
                  cancelText: "取消",
                  success: function (res) {
                    //点击“确认”时打开设置页面
                    if (res.confirm) {
                      (_crd && WXSdk === void 0 ? (_reportPossibleCrUseOfWXSdk({
                        error: Error()
                      }), WXSdk) : WXSdk).instance.openSetting(false, param => {
                        if (param.authSetting[(_crd && WXSdk_AuthSetting === void 0 ? (_reportPossibleCrUseOfWXSdk_AuthSetting({
                          error: Error()
                        }), WXSdk_AuthSetting) : WXSdk_AuthSetting).userInfo]) {
                          Platform.WxAuthSettingUserInfo = 1;
                          (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
                            error: Error()
                          }), Logger) : Logger).logPlatform(`已授权用户信息`);
                          Platform.reqPlatformLoginInfo();
                        } else {
                          (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
                            error: Error()
                          }), Logger) : Logger).logPlatform("没有获得授权");
                          Platform.WxAuthSettingUserInfo = -1;
                          Platform.WxUserInfo = null;
                          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
                            error: Error()
                          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
                            error: Error()
                          }), AppEvent) : AppEvent).LOGIN_PLATFORM_FAIL, (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
                            error: Error()
                          }), GConstants) : GConstants).LoginStateCode.platform_fail_wx_notAuthSetting);
                        }
                      }, res => {
                        (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
                          error: Error()
                        }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
                          error: Error()
                        }), AppEvent) : AppEvent).LOGIN_PLATFORM_FAIL, (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
                          error: Error()
                        }), GConstants) : GConstants).LoginStateCode.platform_fail_wx_notAgreeAuthSetting);
                      });
                    } else {
                      //点击了取消
                      (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
                        error: Error()
                      }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
                        error: Error()
                      }), AppEvent) : AppEvent).LOGIN_PLATFORM_FAIL, (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
                        error: Error()
                      }), GConstants) : GConstants).LoginStateCode.platform_fail_wx_notAgreeAuthSetting);
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

              getLoginCode(loginRsp => {
                if (loginRsp && loginRsp.code) {
                  //检查授权
                  getSetting(isTrue => {
                    if (isTrue != null) {
                      if (isTrue == false) {
                        //拒绝授权了
                        (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
                          error: Error()
                        }), Logger) : Logger).logPlatform("用户拒绝授权了");
                        (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
                          error: Error()
                        }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
                          error: Error()
                        }), AppEvent) : AppEvent).LOGIN_PLATFORM_FAIL, (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
                          error: Error()
                        }), GConstants) : GConstants).LoginStateCode.platform_fail_wx_notAgreeAuthSetting);
                        return;
                      }

                      getUserInfo(userInfo => {
                        if (userInfo) {
                          Platform.WxLoginCode = null;
                          startLogin();
                        } else {
                          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
                            error: Error()
                          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
                            error: Error()
                          }), AppEvent) : AppEvent).LOGIN_PLATFORM_FAIL, (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
                            error: Error()
                          }), GConstants) : GConstants).LoginStateCode.platform_fail_wx_userinfo);
                        }
                      });
                    } else {
                      (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
                        error: Error()
                      }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
                        error: Error()
                      }), AppEvent) : AppEvent).LOGIN_PLATFORM_FAIL, (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
                        error: Error()
                      }), GConstants) : GConstants).LoginStateCode.platform_fail_wx_notAuthSetting);
                    }
                  });
                } else {
                  (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
                    error: Error()
                  }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
                    error: Error()
                  }), AppEvent) : AppEvent).LOGIN_PLATFORM_FAIL, (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
                    error: Error()
                  }), GConstants) : GConstants).LoginStateCode.platform_fail_wx_logincode);
                }
              });
              break;

            case sys.Platform.DESKTOP_BROWSER:
              (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
                error: Error()
              }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
                error: Error()
              }), AppEvent) : AppEvent).LOGIN_PLATFORM_FAIL, (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
                error: Error()
              }), GConstants) : GConstants).LoginStateCode.platform_fail_wx_logincode);
              break;

            default:
              (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
                error: Error()
              }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
                error: Error()
              }), AppEvent) : AppEvent).LOGIN_PLATFORM_FAIL, (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
                error: Error()
              }), GConstants) : GConstants).LoginStateCode.platform_fail_wx_logincode);
              break;
          }
        }
        /**
         * 更新微信的login code凭证
         * @param cb 
         * @returns 
         */


        updateWXLoginCode(cb = null) {
          if (!this.isWXPlatform()) {
            return false;
          }

          (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
            error: Error()
          }), Logger) : Logger).logPlatform("updateWXLoginCode:更新微信的login code凭证：目前:>>" + Platform.WxLoginCode); //获取登录凭证 code（先检查是否失效）

          let getLoginCode = function (callback) {
            if (Platform.WxLoginCode != null) {
              (_crd && WXSdk === void 0 ? (_reportPossibleCrUseOfWXSdk({
                error: Error()
              }), WXSdk) : WXSdk).instance.checkSession(() => {
                (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
                  error: Error()
                }), Logger) : Logger).logPlatform("Success:登录凭证未失效 Code = " + Platform.WxLoginCode);
              }, () => {
                (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
                  error: Error()
                }), Logger) : Logger).logPlatform("Fail:登录凭证已失效 ");
                Platform.WxLoginCode = null;
              }, () => {
                (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
                  error: Error()
                }), Logger) : Logger).logPlatform("getLoginCode:登录凭证是否失效：", Platform.WxLoginCode == null);

                if (Platform.WxLoginCode) {
                  callback({
                    code: Platform.WxLoginCode
                  });
                } else {
                  getLoginCode(callback);
                }
              });
              return;
            } else {
              (_crd && WXSdk === void 0 ? (_reportPossibleCrUseOfWXSdk({
                error: Error()
              }), WXSdk) : WXSdk).instance.login(5000, param => {
                (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
                  error: Error()
                }), Logger) : Logger).logPlatform(`成功获取登录凭证 code = ${param.code}`);
                Platform.WxLoginCode = param.code;
                callback({
                  code: Platform.WxLoginCode
                });
              }, () => {
                (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
                  error: Error()
                }), Logger) : Logger).logPlatform(`获取登录凭证失败`);
                callback(null);
              });
            }
          };

          getLoginCode(pCall => {
            if (cb) {
              cb(pCall);
            }
          });
          return true;
        }
        /** 创建授权按钮 */


        createrAuthSettingButton_WX() {
          if (!this.isWXPlatform()) {
            return;
          }

          if (!this.WxAuthSettingButtonParam) {
            return;
          }

          if (Platform.WxAuthSettingButton && Platform.WxAuthSettingButton.destroy) {
            return Platform.WxAuthSettingButton.destroy();
          }

          Platform.WxAuthSettingButton = null;
          (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
            error: Error()
          }), Logger) : Logger).logPlatform("创建授权按钮", Platform.WxAuthSettingButtonParam); //创建授权按钮

          let createrButton = function () {
            let sysInfo = Platform.SystemInfo;
            let buttonStyle = {
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
              lineHeight: Platform.WxAuthSettingButtonParam["size"]["height"]
            };
            let button = (_crd && WXSdk === void 0 ? (_reportPossibleCrUseOfWXSdk({
              error: Error()
            }), WXSdk) : WXSdk).instance.createUserInfoButton({
              type: "image",
              image: Platform.WxAuthSettingButtonParam["img"],
              style: buttonStyle,
              withCredentials: Platform.WxAuthSettingButtonParam["withCredentials"] != null ? Platform.WxAuthSettingButtonParam["withCredentials"] : true
            });

            if (!button) {
              //平台不支持创建授权按钮
              return null;
            }

            button.onTap(function (res) {
              (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
                error: Error()
              }), Logger) : Logger).logPlatform("=====授权按钮:点击返回=====", res);

              if (res && res["userInfo"]) {
                (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
                  error: Error()
                }), Logger) : Logger).logPlatform("=====授权按钮:用户授权成功=====");
                (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
                  error: Error()
                }), Logger) : Logger).logPlatform(res);
                let userInfo = {
                  avatarUrl: (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                    error: Error()
                  }), Utils) : Utils).nullToDefault(res["userInfo"]["avatarUrl"], ""),
                  city: (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                    error: Error()
                  }), Utils) : Utils).nullToDefault(res["userInfo"]["city"], ""),
                  country: (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                    error: Error()
                  }), Utils) : Utils).nullToDefault(res["userInfo"]["country"], ""),
                  gender: (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                    error: Error()
                  }), Utils) : Utils).nullToDefault(res["userInfo"]["gender"], 0),
                  language: (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                    error: Error()
                  }), Utils) : Utils).nullToDefault(res["userInfo"]["language"], sysInfo["language"]),
                  nickName: (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                    error: Error()
                  }), Utils) : Utils).nullToDefault(res["userInfo"]["nickName"], ""),
                  province: (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                    error: Error()
                  }), Utils) : Utils).nullToDefault(res["userInfo"]["province"], "")
                };
                Platform.WxUserInfo = userInfo;
                Platform.WxAuthSettingUserInfo = 1; //已授权，并通知

                (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
                  error: Error()
                }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
                  error: Error()
                }), AppEvent) : AppEvent).PLATFORM_AUTHSETTING_UPDATE); //交给UI处理授权成功之后
              } else {
                Platform.updateWxAuthSettingButtonVisible(true);
                Platform.WxAuthSettingUserInfo = 0;
                (_crd && WXSdk === void 0 ? (_reportPossibleCrUseOfWXSdk({
                  error: Error()
                }), WXSdk) : WXSdk).instance.showModal({
                  title: (_crd && GameTxt === void 0 ? (_reportPossibleCrUseOfGameTxt({
                    error: Error()
                  }), GameTxt) : GameTxt).common_window_titlt,
                  content: (_crd && GameTxt === void 0 ? (_reportPossibleCrUseOfGameTxt({
                    error: Error()
                  }), GameTxt) : GameTxt).wx_authsetting_not_allow_userinfo,
                  showCancel: false
                });
              }
            });
            button.show();
            return button;
          };

          Platform.WxAuthSettingButton = createrButton();
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).PLATFORM_AUTHSETTING_UPDATE, Platform.WxAuthSettingButton);
          return Platform.WxAuthSettingButton;
        }
        /** 启动隐私授权上报弹窗 */


        onNeedPrivacyAuthorization_WX(event = null) {
          (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
            error: Error()
          }), Logger) : Logger).logPlatform("启动隐私授权上报");

          switch (this._currowPlatForm) {
            case sys.Platform.WECHAT_GAME:
              (_crd && WXSdk === void 0 ? (_reportPossibleCrUseOfWXSdk({
                error: Error()
              }), WXSdk) : WXSdk).instance.onNeedPrivacyAuthorization(event);
              break;

            default:
              break;
          }

          ;
        }
        /** 检查隐私保护指引是否支持 */


        checkPrivacyContract() {
          if (this._currowPlatForm == sys.Platform.WECHAT_GAME) {
            return (_crd && WXSdk === void 0 ? (_reportPossibleCrUseOfWXSdk({
              error: Error()
            }), WXSdk) : WXSdk).instance.openPrivacyContract(true);
          }

          return false;
        }
        /** 打开隐私保护指引 */


        openPrivacyContract_WX(callback = null) {
          (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
            error: Error()
          }), Logger) : Logger).logPlatform("打开隐私保护指引");
          let res = false;

          let callFunc = function (state) {
            if (callback && res == false) {
              callback(state);
              res = true;
            }
          };

          switch (this._currowPlatForm) {
            case sys.Platform.WECHAT_GAME:
              (_crd && WXSdk === void 0 ? (_reportPossibleCrUseOfWXSdk({
                error: Error()
              }), WXSdk) : WXSdk).instance.openPrivacyContract(false, () => {
                callFunc(true);
              }, () => {
                callFunc(false);
              });
              break;

            default:
              break;
          }

          ;
        }
        /**
         * 联系客服
         * @param option 传递的参数 会回传
         * @param callback 回调函数
         */


        openCustomerServiceConversation(option = {}, callback = null) {
          (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
            error: Error()
          }), Logger) : Logger).logPlatform("点击了联系客服");
          let res = false;

          let callFunc = function (state, errParam = null) {
            if (callback && res == false) {
              setTimeout(() => {
                callback(state, option);
              }, 1500);
            }

            res = true;
          };

          switch (this._currowPlatForm) {
            case sys.Platform.WECHAT_GAME:
              // 分享之后的回调函数实际是callFunc()
              (_crd && WXSdk === void 0 ? (_reportPossibleCrUseOfWXSdk({
                error: Error()
              }), WXSdk) : WXSdk).instance.openCustomerServiceConversation(option['sessionFrom'], () => {
                callFunc(true);
              }, errParam => {
                callFunc(false, errParam);
              }, null, option['showMessageCard'], option['sendMessageTitle'], option['sendMessagePath'], option['sendMessageImg']);
              ;
              break;

            default:
              callFunc(true);
              break;
          }

          ;
        }
        /**
         * 设置自定义分享参数（只能用一次）
         * @param friends 分享好友参数 __InterFace_WXSdk_OnShareAppMessage
         * @param pyq 分享朋友圈参数__InterFace_WXSdk_OnShareTimeline
         */


        setCustomShareInfo(friends = null, pyq = null) {
          Platform.CustomShareFriendsInfo = friends;
          Platform.CustomSharePYQInfo = pyq;
        }
        /** wx:监听用户点击 分享好友 按钮时触发的事件 */


        getShareFriendFunc() {
          (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
            error: Error()
          }), Logger) : Logger).logPlatform("点击了分享给朋友");

          if (Platform.CustomShareFriendsInfo) {
            let info = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).clone(Platform.CustomShareFriendsInfo);
            Platform.CustomShareFriendsInfo = null;
            return info;
          }

          let param = {};
          param.title = (_crd && GameTxt === void 0 ? (_reportPossibleCrUseOfGameTxt({
            error: Error()
          }), GameTxt) : GameTxt).share_wx_friends_txt;
          param.imageUrl = (_crd && GameRes === void 0 ? (_reportPossibleCrUseOfGameRes({
            error: Error()
          }), GameRes) : GameRes).AppCommon_Share_Friend_Comm.path;
          return param;
        }
        /** wx：监听用户点击 分享朋友圈 按钮时触发的事件*/


        getSharePYQFunc() {
          (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
            error: Error()
          }), Logger) : Logger).logPlatform("点击了分享到朋友圈");

          if (Platform.CustomSharePYQInfo) {
            let info = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).clone(Platform.CustomSharePYQInfo);
            Platform.CustomSharePYQInfo = null;
            return info;
          }

          let param = {};
          param.title = (_crd && GameTxt === void 0 ? (_reportPossibleCrUseOfGameTxt({
            error: Error()
          }), GameTxt) : GameTxt).share_wx_pyq_txt;
          param.imageUrl = (_crd && GameRes === void 0 ? (_reportPossibleCrUseOfGameRes({
            error: Error()
          }), GameRes) : GameRes).AppCommon_Share_PYQ_Comm.path;
          return param;
        }
        /** wx：监听用户「分享到指定朋友」触发的结果事件*/


        getShareMessageToFriend(respParam = {}) {
          (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
            error: Error()
          }), Logger) : Logger).logPlatform("用户分享到了指定好友", respParam);
          let res = true;

          if (!respParam || respParam["success"] != true) {
            res = false;
          } //通知:分享结果


          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).OTHER_SHTRE_FRIEND_RESULT, res);
        }
        /**
         * 微信分享：好友
         * @param wxParam 分享好友的参数
         * @param callback 回调函数
         * @param callbackData 请求时传递的参数附加参数
         * @returns 
         */


        shareWXFriends(wxParam = null, callback = null, callbackData = null) {
          if (this.isWXPlatform() == false) {
            if (callback) {
              callback(callbackData);
            }

            return;
          }

          (_crd && WXSdk === void 0 ? (_reportPossibleCrUseOfWXSdk({
            error: Error()
          }), WXSdk) : WXSdk).instance.shareAppMessage(wxParam || this.getShareFriendFunc());

          if (callback) {
            setTimeout(() => {
              callback(callbackData);
            }, 1500);
          }
        }
        /** 复制 */


        copyClipboard(str, callback) {
          if (!str) {
            return;
          }

          str = String(str);

          switch (this._currowPlatForm) {
            case sys.Platform.WECHAT_GAME:
              (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
                error: Error()
              }), Logger) : Logger).logPlatform("调用复制");
              (_crd && WXSdk === void 0 ? (_reportPossibleCrUseOfWXSdk({
                error: Error()
              }), WXSdk) : WXSdk).instance.setClipboardData(str, res => {
                callback && callback(str);
              }, res => {
                (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
                  error: Error()
                }), Logger) : Logger).logPlatform("复制失败:", res);
                callback && callback(null);
              });
              break;

            case sys.Platform.DESKTOP_BROWSER:
              let save = function (e) {
                e.clipboardData.setData('text/plain', str);
                e.preventDefault();
                (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
                  error: Error()
                }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
                  error: Error()
                }), AppEvent) : AppEvent).SYS_TOAST_TIP, {
                  content: (_crd && GameTxt === void 0 ? (_reportPossibleCrUseOfGameTxt({
                    error: Error()
                  }), GameTxt) : GameTxt).copySuccess
                });
                callback && callback(str);
              };

              document.addEventListener('copy', save);
              document.execCommand('copy');
              document.removeEventListener('copy', save);
              break;

            default:
              callback && callback(null);
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


        connectSocket(url, binaryType = "arraybuffer", success = null, fail = null, completed = null, header = null, timeout = null) {
          (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
            error: Error()
          }), Logger) : Logger).logPlatform("创建websocket:>>>url:" + url);

          if (this._currowPlatForm == sys.Platform.WECHAT_GAME) {
            return (_crd && WXSdk === void 0 ? (_reportPossibleCrUseOfWXSdk({
              error: Error()
            }), WXSdk) : WXSdk).instance.connectSocket(url, success, fail, completed, header, timeout);
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


        closeSocket(wsHandler, code = 1000, reason = "") {
          if (this._currowPlatForm == sys.Platform.WECHAT_GAME) {
            if (wsHandler && wsHandler.close) {
              wsHandler.close({
                code: code,
                reason: reason
              });
            } else {
              (_crd && WXSdk === void 0 ? (_reportPossibleCrUseOfWXSdk({
                error: Error()
              }), WXSdk) : WXSdk).instance.closeSocket(code, reason);
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


        reqSendPay(body) {
          //返回数据的格式
          let respBody = {
            respCode: (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
              error: Error()
            }), GConstants) : GConstants).AppPayResult.UNINE,
            req: body,
            msg: null
          };

          if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).isNull(body) || (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).isNull(body["num"]) || (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).isNull(body["zoneId"])) {
            if (body["callback"]) {
              body["callback"](respBody);
            }

            return;
          }

          if (this.isCanPay() == false) {
            (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
              error: Error()
            }), Logger) : Logger).logPlatform(`${this.ClientPlatform} 不支持支付`); //测试代码
            // respBody.respCode = GConstants.AppPayResult.SUCCESS;

            if (body["callback"]) {
              body["callback"](respBody);
            }

            return;
          }

          (_crd && WXSdk === void 0 ? (_reportPossibleCrUseOfWXSdk({
            error: Error()
          }), WXSdk) : WXSdk).instance.requestMidasPayment(body["num"], (_crd && ClientInfo === void 0 ? (_reportPossibleCrUseOfClientInfo({
            error: Error()
          }), ClientInfo) : ClientInfo).WX_PayOfferId, (_crd && ClientInfo === void 0 ? (_reportPossibleCrUseOfClientInfo({
            error: Error()
          }), ClientInfo) : ClientInfo).WX_PayEnv, body["zoneId"], res => {
            (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
              error: Error()
            }), Logger) : Logger).logPlatform("******支付成功***********");
            (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
              error: Error()
            }), Logger) : Logger).logPlatform(res);
            respBody.respCode = (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
              error: Error()
            }), GConstants) : GConstants).AppPayResult.SUCCESS;
            respBody.msg = res;

            if (body["callback"]) {
              body["callback"](respBody);
            } //支付结果


            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
              error: Error()
            }), AppEvent) : AppEvent).OTHER_PAY_RESULT, respBody);
          }, res => {
            (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
              error: Error()
            }), Logger) : Logger).logPlatform("******支付失败***********");
            (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
              error: Error()
            }), Logger) : Logger).logPlatform(res);
            respBody.respCode = (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
              error: Error()
            }), GConstants) : GConstants).AppPayResult.FAIL;
            respBody.msg = res;
            let errorTip = null;

            if (res["errCode"] != 1) {
              //非取消支付
              errorTip = (_crd && GameTxt === void 0 ? (_reportPossibleCrUseOfGameTxt({
                error: Error()
              }), GameTxt) : GameTxt).pay_error_codelist[res["errCode"]];

              if (!errorTip) {
                errorTip = res["errMsg"];
              }

              if (errorTip) {
                (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
                  error: Error()
                }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
                  error: Error()
                }), AppEvent) : AppEvent).SYS_TOAST_TIP, {
                  content: errorTip
                });
              }
            }

            if (body["callback"]) {
              body["callback"](respBody);
            } //支付结果


            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
              error: Error()
            }), AppEvent) : AppEvent).OTHER_PAY_RESULT, respBody);
          });
        }
        /** 注册网络回调函数 */


        regWxNetWorkCallback(callback) {
          if (this.isWXPlatform() == false) {
            return;
          }

          (_crd && WXSdk === void 0 ? (_reportPossibleCrUseOfWXSdk({
            error: Error()
          }), WXSdk) : WXSdk).instance.onNetworkStatusChange(callback);
        }
        /** 获取最新的 wx凭据 */


        updateReFreshAccessToken(_callback = null) {
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
          } //获取登录凭证 code（先检查是否失效）


          let getLoginCode = function (callback) {
            if (Platform.WxLoginCode != null) {
              (_crd && WXSdk === void 0 ? (_reportPossibleCrUseOfWXSdk({
                error: Error()
              }), WXSdk) : WXSdk).instance.checkSession(() => {
                (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
                  error: Error()
                }), Logger) : Logger).logPlatform("Success:登录凭证未失效 Code = " + Platform.WxLoginCode);
              }, () => {
                (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
                  error: Error()
                }), Logger) : Logger).logPlatform("Fail:登录凭证已失效 ");
                Platform.WxLoginCode = null;
              }, () => {
                (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
                  error: Error()
                }), Logger) : Logger).logPlatform("getLoginCode:登录凭证是否失效：" + Platform.WxLoginCode == null);

                if (Platform.WxLoginCode) {
                  callback({
                    code: Platform.WxLoginCode
                  });
                } else {
                  getLoginCode(callback);
                }
              });
              return;
            } else {
              (_crd && WXSdk === void 0 ? (_reportPossibleCrUseOfWXSdk({
                error: Error()
              }), WXSdk) : WXSdk).instance.login(5000, param => {
                (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
                  error: Error()
                }), Logger) : Logger).logPlatform(`成功获取登录凭证 code = ${param.code}`);
                Platform.WxLoginCode = param.code;
                callback({
                  code: Platform.WxLoginCode
                });
              }, () => {
                (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
                  error: Error()
                }), Logger) : Logger).logPlatform(`获取登录凭证失败`);
                callback(null);
              });
            }
          }; //获取OpenID和AccessToken


          let getOpenIDAndAccestToken = function (callback) {
            //注意:为了确保每次都是新的 必须重置；
            Platform.WxLoginCode = null;
            getLoginCode(loginRsp => {
              if (loginRsp && loginRsp.code) {
                Platform.WxLoginCode = loginRsp.code;
                let data = {
                  action: "core.getMiniConfig",
                  code: Platform.WxLoginCode,
                  appid: (_crd && ClientInfo === void 0 ? (_reportPossibleCrUseOfClientInfo({
                    error: Error()
                  }), ClientInfo) : ClientInfo).PlatFormAppID
                };
                let http = new (_crd && HttpRequest === void 0 ? (_reportPossibleCrUseOfHttpRequest({
                  error: Error()
                }), HttpRequest) : HttpRequest)();
                http.post((_crd && GameConfig === void 0 ? (_reportPossibleCrUseOfGameConfig({
                  error: Error()
                }), GameConfig) : GameConfig).instance.AppUrlConf.Web, JSON.stringify(data), res => {
                  //wxLoginCode已用过了
                  Platform.WxLoginCode = null;
                  let openID = null;
                  let access_token = null;

                  if (res && res["code"] == 200) {
                    if (res["result"]) {
                      if (res["result"]["session"]) {
                        //OpenID
                        openID = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                          error: Error()
                        }), Utils) : Utils).nullToDefault(res["result"]["session"]["openid"], null);
                      }

                      if (res["result"]["token"]) {
                        //access_token
                        access_token = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                          error: Error()
                        }), Utils) : Utils).nullToDefault(res["result"]["token"]["access_token"], null);
                      }
                    }
                  }

                  if (openID && access_token) {
                    let data = {
                      openid: openID,
                      access_token: access_token
                    };
                    (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
                      error: Error()
                    }), Logger) : Logger).logPlatform(`Success:获取OpenID 和 AccessToken成功 openID=${data.openid} access_token=${data.access_token}`);
                    callback(data);
                  } else {
                    (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
                      error: Error()
                    }), Logger) : Logger).logPlatform(`Fail:获取OpenID 和 AccessToken失败`);
                    callback(null);
                  }
                }, res => {
                  (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
                    error: Error()
                  }), Logger) : Logger).logPlatform(`Fail:获取OpenID 和 AccessToken失败`, res);
                  callback(null);
                }, 'json');
              } else {
                callback(null);
              }
            });
          };

          getOpenIDAndAccestToken(param => {
            if (param) {
              //保存用于登录的信息
              Platform.PLogInfo = {
                access_token: param["access_token"],
                openId: param["openid"],
                userinfo: Platform.WxUserInfo
              };
            }

            if (_callback) {
              _callback(param != null);
            } //通知：凭据信息有更新


            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
              error: Error()
            }), AppEvent) : AppEvent).LOGIN_WX_ACCESS_UPDATE, param != null, Platform.PLogInfo);
          });
        }
        /** 获取平台朋友圈授权信息*/


        reqPlatformFriendInteraction(callFunc = null) {
          (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
            error: Error()
          }), Logger) : Logger).logPlatform("获取平台朋友圈授权信息:>>>");

          let endFunc = function (res) {
            (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
              error: Error()
            }), Logger) : Logger).logPlatform("获取平台朋友圈授权信息:>>>授权结果:" + String(res));

            if (callFunc && typeof callFunc == "function") {
              callFunc(res);
            }
          };

          switch (this._currowPlatForm) {
            case sys.Platform.WECHAT_GAME:
              //显示授权弹窗
              let startShowAuthorize = function (callback) {
                (_crd && WXSdk === void 0 ? (_reportPossibleCrUseOfWXSdk({
                  error: Error()
                }), WXSdk) : WXSdk).instance.authorize((_crd && WXSdk_AuthSetting === void 0 ? (_reportPossibleCrUseOfWXSdk_AuthSetting({
                  error: Error()
                }), WXSdk_AuthSetting) : WXSdk_AuthSetting).WxFriendInteraction, () => {
                  (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
                    error: Error()
                  }), Logger) : Logger).logPlatform(`授权成功`);
                  Platform.WxAuthSettingFriends = 1;
                  callback(true);
                }, () => {
                  (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
                    error: Error()
                  }), Logger) : Logger).logPlatform(`授权失败`);
                  Platform.WxAuthSettingFriends = -1;
                  callback(false);
                });
              }; //获取授权信息


              let getSetting = function (callback) {
                (_crd && WXSdk === void 0 ? (_reportPossibleCrUseOfWXSdk({
                  error: Error()
                }), WXSdk) : WXSdk).instance.getSetting(false, param => {
                  if (param.authSetting[(_crd && WXSdk_AuthSetting === void 0 ? (_reportPossibleCrUseOfWXSdk_AuthSetting({
                    error: Error()
                  }), WXSdk_AuthSetting) : WXSdk_AuthSetting).WxFriendInteraction]) {
                    (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
                      error: Error()
                    }), Logger) : Logger).logPlatform(`getSetting:已授权好友信息`);
                    (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
                      error: Error()
                    }), Logger) : Logger).logPlatform("信息：", param.authSetting[(_crd && WXSdk_AuthSetting === void 0 ? (_reportPossibleCrUseOfWXSdk_AuthSetting({
                      error: Error()
                    }), WXSdk_AuthSetting) : WXSdk_AuthSetting).WxFriendInteraction]);
                    Platform.WxAuthSettingFriends = 1; //进入下一步

                    callback(true);
                  } else {
                    (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
                      error: Error()
                    }), Logger) : Logger).logPlatform("getSetting:没有获得授权 默认已经登录成功 弹出授权弹窗");
                    Platform.WxAuthSettingFriends = 0; //弹出授权弹窗

                    startShowAuthorize(callback);
                  }
                }, () => {
                  (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
                    error: Error()
                  }), Logger) : Logger).logPlatform("getSetting:获取授权信息失败");
                  callback(null);
                });
              };

              return getSetting(endFunc);

            case sys.Platform.DESKTOP_BROWSER:
              break;

            default:
              break;
          }
        }
        /** 设置平台云数据 */


        setPlatformCloudStorage(keyValueList, callback = null) {
          (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
            error: Error()
          }), Logger) : Logger).logPlatform("设置平台云数据:key>>>", keyValueList);

          if (Platform.WxAuthSettingFriends != 1) {
            if (callback) {
              callback(false);
            }

            return;
          } //所有键的集合


          let keys = [];

          let endFunc = function (res) {
            (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
              error: Error()
            }), Logger) : Logger).logPlatform("设置平台云数据:>>>结果", res);

            if (callback && typeof callback == "function") {
              //测试
              Platform.getPlatformCloudStorage(keys);
              callback(res);
            }
          };

          switch (this._currowPlatForm) {
            case sys.Platform.WECHAT_GAME:
              let pData = [];

              for (let i = 0; i < keyValueList.length; i++) {
                let data = {
                  key: String(keyValueList[i]["key"]),
                  value: String(keyValueList[i]["value"])
                };
                pData.push(data);
                keys.push(data.key);
              }

              (_crd && WXSdk === void 0 ? (_reportPossibleCrUseOfWXSdk({
                error: Error()
              }), WXSdk) : WXSdk).instance.setUserCloudStorage(pData, param => {
                (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
                  error: Error()
                }), Logger) : Logger).logPlatform("setUserCloudStorage 设置平台云数据", pData, param);
                endFunc(true);
              }, () => {
                (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
                  error: Error()
                }), Logger) : Logger).logPlatform("setUserCloudStorage 设置平台云数据 失败", pData);
                endFunc(false);
              });
              break;

            case sys.Platform.DESKTOP_BROWSER:
              break;

            default:
              break;
          }
        }
        /** 获取平台云数据 */


        getPlatformCloudStorage(key, callback = null) {
          (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
            error: Error()
          }), Logger) : Logger).logPlatform("获取平台云数据:key>>>", key);

          if (Platform.WxAuthSettingFriends != 1) {
            if (callback) {
              callback(null);
            }

            return;
          }

          let endFunc = function (res) {
            (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
              error: Error()
            }), Logger) : Logger).logPlatform("获取平台云数据:>>>结果", res);

            if (callback && typeof callback == "function") {
              callback(res);
            }
          };

          switch (this._currowPlatForm) {
            case sys.Platform.WECHAT_GAME:
              (_crd && WXSdk === void 0 ? (_reportPossibleCrUseOfWXSdk({
                error: Error()
              }), WXSdk) : WXSdk).instance.getUserCloudStorage(key, param => {
                (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
                  error: Error()
                }), Logger) : Logger).logPlatform("setUserCloudStorage 获取平台云数据", param);
                endFunc(param);
              }, () => {
                (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
                  error: Error()
                }), Logger) : Logger).logPlatform("reqFriendKVList 获取平台云数据 失败", key);
                endFunc(null);
              });
              break;

            case sys.Platform.DESKTOP_BROWSER:
              break;

            default:
              break;
          }
        }
        /** 向开放的数据域发送消息 */


        postMessage(message) {
          switch (this._currowPlatForm) {
            case sys.Platform.WECHAT_GAME:
              (_crd && WXSdk === void 0 ? (_reportPossibleCrUseOfWXSdk({
                error: Error()
              }), WXSdk) : WXSdk).instance.postMessage(message);
              break;

            case sys.Platform.DESKTOP_BROWSER:
              break;

            default:
              break;
          }
        }
        /** 获取消息订阅状态 */


        getSettingSubscribeMessageStates(callback = null) {
          switch (this._currowPlatForm) {
            case sys.Platform.WECHAT_GAME:
              (_crd && WXSdk === void 0 ? (_reportPossibleCrUseOfWXSdk({
                error: Error()
              }), WXSdk) : WXSdk).instance.getSetting(true, param => {
                Platform.WxAuthSettingSubscriptions = param == null ? void 0 : param.subscriptionsSetting;

                if (callback) {
                  callback(Platform.WxAuthSettingSubscriptions);
                }
              }, () => {
                (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
                  error: Error()
                }), Logger) : Logger).logPlatform("getSetting:获取消息订阅状态失败");
                Platform.WxAuthSettingSubscriptions = null;

                if (callback) {
                  callback(Platform.WxAuthSettingSubscriptions);
                }
              });
              break;

            case sys.Platform.DESKTOP_BROWSER:
              break;

            default:
              break;
          }
        }
        /** 请求订阅消息 */


        requestSubscribeMessage(tmplIds, callback = null) {
          let callFunc = param => {
            if (callback) {
              callback(param);
            }
          };

          switch (this._currowPlatForm) {
            case sys.Platform.WECHAT_GAME:
              (_crd && WXSdk === void 0 ? (_reportPossibleCrUseOfWXSdk({
                error: Error()
              }), WXSdk) : WXSdk).instance.requestSubscribeMessage(tmplIds, param => {
                (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
                  error: Error()
                }), Logger) : Logger).logPlatform("请求订阅消息成功：", tmplIds, param);
                callFunc(param);
              }, param => {
                (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
                  error: Error()
                }), Logger) : Logger).logPlatform("请求订阅消息失败：", tmplIds, param);
                callFunc(param);
              });
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


        vibrate(isLong = false, type = null, callback = null) {
          let callFunc = param => {
            if (callback) {
              callback(param);
            }
          };

          let shorkOpen = (_crd && LocalStorage === void 0 ? (_reportPossibleCrUseOfLocalStorage({
            error: Error()
          }), LocalStorage) : LocalStorage).get((_crd && StoreKey === void 0 ? (_reportPossibleCrUseOfStoreKey({
            error: Error()
          }), StoreKey) : StoreKey).SYS_Shock, true);

          if (!shorkOpen) {
            return;
          }

          switch (this._currowPlatForm) {
            case sys.Platform.WECHAT_GAME:
              if (isLong == true) {
                (_crd && WXSdk === void 0 ? (_reportPossibleCrUseOfWXSdk({
                  error: Error()
                }), WXSdk) : WXSdk).instance.vibrateLong(param => {
                  (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
                    error: Error()
                  }), Logger) : Logger).logPlatform("请求长时间震动成功：", param);
                  callFunc(param);
                }, param => {
                  (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
                    error: Error()
                  }), Logger) : Logger).logPlatform("请求长时间震动失败：", param);
                  callFunc(param);
                });
              } else {
                type = type || (_crd && WXSdk_VibrateShortType === void 0 ? (_reportPossibleCrUseOfWXSdk_VibrateShortType({
                  error: Error()
                }), WXSdk_VibrateShortType) : WXSdk_VibrateShortType).heavy;
                (_crd && WXSdk === void 0 ? (_reportPossibleCrUseOfWXSdk({
                  error: Error()
                }), WXSdk) : WXSdk).instance.vibrateShort(type, param => {
                  (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
                    error: Error()
                  }), Logger) : Logger).logPlatform("请求短时间震动成功：", type, param);
                  callFunc(param);
                }, param => {
                  (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
                    error: Error()
                  }), Logger) : Logger).logPlatform("请求短时间震动失败：", type, param);
                  callFunc(param);
                });
              }

              break;

            case sys.Platform.DESKTOP_BROWSER:
              break;

            default:
              break;
          }
        }
        /** 初始化广告组件 */


        initAdVideo(adUnitId) {
          switch (this._currowPlatForm) {
            case sys.Platform.WECHAT_GAME:
              (_crd && WXSdk === void 0 ? (_reportPossibleCrUseOfWXSdk({
                error: Error()
              }), WXSdk) : WXSdk).instance.createRewardedVideoAd(adUnitId);
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


        playerAdVideo(callback = null, callData = null) {
          let startCallFunc = function () {
            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
              error: Error()
            }), AppEvent) : AppEvent).SYS_CLOSE_NETLOADING);
          };

          let failCallFunc = function () {
            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
              error: Error()
            }), AppEvent) : AppEvent).SYS_CLOSE_NETLOADING);
          };

          let onClickCloseCallFunc = function (res) {
            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
              error: Error()
            }), AppEvent) : AppEvent).SYS_CLOSE_NETLOADING);

            if (callback) {
              callback(res == true, callData);
            }
          };

          switch (this._currowPlatForm) {
            case sys.Platform.WECHAT_GAME:
              (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
                error: Error()
              }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
                error: Error()
              }), AppEvent) : AppEvent).SYS_SHOW_NETLOADING, 15);
              (_crd && WXSdk === void 0 ? (_reportPossibleCrUseOfWXSdk({
                error: Error()
              }), WXSdk) : WXSdk).instance.playRewardedVideoShow(startCallFunc, failCallFunc, onClickCloseCallFunc);
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


        downloadFile(url, callback = null) {
          (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
            error: Error()
          }), Logger) : Logger).logPlatform("文件下载");
          let isReturn = false;

          let callFunc = function (res) {
            if (callback && isReturn == false) {
              isReturn = true;
              let param = {
                url: url,
                code: res ? res.statusCode : -1,
                filePath: res ? res.tempFilePath : null
              };
              console.log(`文件下载 是否成功${param.code === 200} 所有参数:`, res);
              callback(param);
            }
          };

          switch (this._currowPlatForm) {
            case sys.Platform.WECHAT_GAME:
              (_crd && WXSdk === void 0 ? (_reportPossibleCrUseOfWXSdk({
                error: Error()
              }), WXSdk) : WXSdk).instance.downloadFile(url, null, null, callFunc, callFunc, null);
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
              let res = (_crd && WXSdk === void 0 ? (_reportPossibleCrUseOfWXSdk({
                error: Error()
              }), WXSdk) : WXSdk).instance.getLaunchOptionsSync();
              this.AppLaunchOptions = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                error: Error()
              }), Utils) : Utils).table_verify(res);
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
              let res = (_crd && WXSdk === void 0 ? (_reportPossibleCrUseOfWXSdk({
                error: Error()
              }), WXSdk) : WXSdk).instance.getEnterOptionsSync();
              this.AppEnterOptions = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                error: Error()
              }), Utils) : Utils).table_verify(res);
              break;

            default:
              this.AppEnterOptions = {};
              break;
          }

          console.log("获取小游戏启动/显示时的参数==>", this.AppEnterOptions);
          return this.AppEnterOptions;
        }

      };
      _Platform._instance = null;

      _export("Platform", Platform = _Platform.instance);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=7c6ed840b6864fa22f418cbc622a74ecb7a41a35.js.map