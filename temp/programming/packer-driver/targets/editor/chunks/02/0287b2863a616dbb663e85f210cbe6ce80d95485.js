System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14", "__unresolved_15", "__unresolved_16"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, GCache, AppEvent, ClientInfo, GameConfig, SystemConf, GConstants, StoreKey, GameTxt, UIConfigData, UIID, Encrypt, LayerManager, LocalStorage, Logger, EventManager, Utils, BaseControll, Platform, GlobalCMD, GSocket, LoginController, _crd;

  function _reportPossibleCrUseOfGCache(extras) {
    _reporterNs.report("GCache", "../cache/GCache", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAppEvent(extras) {
    _reporterNs.report("AppEvent", "../config/AppEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfClientInfo(extras) {
    _reporterNs.report("ClientInfo", "../config/GameConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameConfig(extras) {
    _reporterNs.report("GameConfig", "../config/GameConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSystemConf(extras) {
    _reporterNs.report("SystemConf", "../config/GameConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGConstants(extras) {
    _reporterNs.report("GConstants", "../config/GameConstant", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStoreKey(extras) {
    _reporterNs.report("StoreKey", "../config/GameConstant", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameTxt(extras) {
    _reporterNs.report("GameTxt", "../config/GameTxt", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIConfigData(extras) {
    _reporterNs.report("UIConfigData", "../config/UIConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIID(extras) {
    _reporterNs.report("UIID", "../config/UIConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEncrypt(extras) {
    _reporterNs.report("Encrypt", "../framework/crypto/Encrypto", _context.meta, extras);
  }

  function _reportPossibleCrUseOfinf_GameIntoParams(extras) {
    _reporterNs.report("inf_GameIntoParams", "../framework/InterfaceDefines", _context.meta, extras);
  }

  function _reportPossibleCrUseOfinf_LoginViewInfo(extras) {
    _reporterNs.report("inf_LoginViewInfo", "../framework/InterfaceDefines", _context.meta, extras);
  }

  function _reportPossibleCrUseOfinf_PopWindowParams(extras) {
    _reporterNs.report("inf_PopWindowParams", "../framework/InterfaceDefines", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLayerManager(extras) {
    _reporterNs.report("LayerManager", "../framework/layer/LayerManager", _context.meta, extras);
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

  function _reportPossibleCrUseOfGSocket(extras) {
    _reporterNs.report("GSocket", "./gnet/GSocket", _context.meta, extras);
  }

  _export("LoginController", void 0);

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
      GameConfig = _unresolved_4.GameConfig;
      SystemConf = _unresolved_4.SystemConf;
    }, function (_unresolved_5) {
      GConstants = _unresolved_5.GConstants;
      StoreKey = _unresolved_5.StoreKey;
    }, function (_unresolved_6) {
      GameTxt = _unresolved_6.GameTxt;
    }, function (_unresolved_7) {
      UIConfigData = _unresolved_7.UIConfigData;
      UIID = _unresolved_7.UIID;
    }, function (_unresolved_8) {
      Encrypt = _unresolved_8.Encrypt;
    }, function (_unresolved_9) {
      LayerManager = _unresolved_9.LayerManager;
    }, function (_unresolved_10) {
      LocalStorage = _unresolved_10.LocalStorage;
    }, function (_unresolved_11) {
      Logger = _unresolved_11.Logger;
    }, function (_unresolved_12) {
      EventManager = _unresolved_12.EventManager;
    }, function (_unresolved_13) {
      Utils = _unresolved_13.Utils;
    }, function (_unresolved_14) {
      BaseControll = _unresolved_14.BaseControll;
    }, function (_unresolved_15) {
      Platform = _unresolved_15.Platform;
    }, function (_unresolved_16) {
      GlobalCMD = _unresolved_16.GlobalCMD;
    }, function (_unresolved_17) {
      GSocket = _unresolved_17.GSocket;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c5046IeEphAEqKa6TrSQpyW", "LoginController", undefined);

      _export("LoginController", LoginController = class LoginController extends (_crd && BaseControll === void 0 ? (_reportPossibleCrUseOfBaseControll({
        error: Error()
      }), BaseControll) : BaseControll) {
        //界面传递的数据
        //当前请求的登录数据
        //当前登录请求次数
        //登录最大请求次数
        static getInstance() {
          if (!this._instance || this._instance == null) {
            this._instance = new LoginController("LoginController");
          }

          return this._instance;
        }

        static init() {
          if (this._instance) {
            this._instance.clear();
          }

          this._instance = null;
          LoginController.getInstance();
          return;
        } //实例化


        constructor(name) {
          super(name);
          this._viewLoginParam = null;
          this._reqloginInfo = null;
          this._reqLoginNum = 0;
          this._reqLoginMaxNum = 3;
        }

        /**初始化添加事件绑定 */
        onInitModuleEvent() {
          //登陆
          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_GOTO_START_LOGIN, this.startLogin); //显示登录界面

          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).LOGIN_GOTO_SHOW, this.showLoginView); //请求游客登录

          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_REQ_USER_LOGIN_YOUKE, this.reqYoukeLogin); //请求游客登录后返回的结果

          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_FORWARD_USER_LOGIN_YOUKE, this.respNetLoginYouke); //请求登录后返回的结果

          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_FORWARD_USER_LOGIN_CORE, this.respNetLoginCore); //广播：大厅登录成功

          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_RECEIVE_LOGIN_SUCCESS, this.respNetLoginSuccess); //广播:异地登录

          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_RECEIVE_MULTI_DEVICE_LOGIN, this.respNetLoginMultiDevice); //保活检测

          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_RECEIVE_KEEP_ALIVE, this.respNetKeepAlive); //登录状态改变

          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).LOGIN_STATE_CHANGE, this.receiveLoginStateChange);
        } //开始登录


        startLogin(event, reqParam = null) {
          if (reqParam) {
            this._viewLoginParam = reqParam;
          }

          if (this._reqLoginNum >= this._reqLoginMaxNum) {
            //此时要断开连接并显示界面
            this._resetFirstLogin();

            this.showLoginView();
          } else {
            let loginType = null;

            if (this._viewLoginParam && this._viewLoginParam.access_token && this._viewLoginParam.openId && this._viewLoginParam.userinfo) {
              loginType = (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
                error: Error()
              }), GConstants) : GConstants).UserLoginType.WechatLogin;
            }

            this.autoLogin(loginType);
          }
        } //自动登录


        autoLogin(loginType = null) {
          if (!(_crd && GSocket === void 0 ? (_reportPossibleCrUseOfGSocket({
            error: Error()
          }), GSocket) : GSocket).instance.isConnected()) {
            let url = (_crd && GameConfig === void 0 ? (_reportPossibleCrUseOfGameConfig({
              error: Error()
            }), GameConfig) : GameConfig).instance.AppUrlConf.Socket;
            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
              error: Error()
            }), AppEvent) : AppEvent).NET_START_CONNECT, url);
            return;
          }

          let _loginType = loginType || (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
            error: Error()
          }), GCache) : GCache).User.getLastlocalLoginType();

          switch (_loginType) {
            case (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
              error: Error()
            }), GConstants) : GConstants).UserLoginType.BoyaaPassportLogin:
              //boyaa通行证登录
              this.startByaccLogin();
              break;

            case (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
              error: Error()
            }), GConstants) : GConstants).UserLoginType.WechatLogin:
              //wx登录
              this.startWeiXinLogin();
              break;

            default:
              this.reqYoukeLogin();
              break;
          }
        } //通行证登录


        startByaccLogin() {
          let lastLoginInfo = (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
            error: Error()
          }), GCache) : GCache).User.getLastlocalLoginInfo();

          if (!lastLoginInfo) {
            return;
          }

          let lastLoginByacc = (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
            error: Error()
          }), GCache) : GCache).User.getLastlocalByacc();
          let loginAccount, loginPsd, bid, access_token;
          let mType = 0;

          if (!(_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).string_isEmpty(lastLoginByacc)) {
            loginAccount = lastLoginByacc;
            let [isExsit, key, value] = (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
              error: Error()
            }), GCache) : GCache).User.checkIsExsitAccountInfo(loginAccount);
            let loginInfo = value;
            loginPsd = loginInfo["loginPsd"];
            bid = loginInfo["bid"] || lastLoginInfo["bid"];
            access_token = loginInfo["access_token"] || (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
              error: Error()
            }), GCache) : GCache).User.getLastlocalToken();

            if (!(_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).string_isEmpty(loginAccount) && !(_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).string_isEmpty(loginPsd)) {
              //有账号有密码，则通行证登录 
              mType = 1;
            } else if (!(_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).string_isEmpty(loginAccount) && !(_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).string_isEmpty(bid) && !(_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).string_isEmpty(access_token)) {
              //有账号没有密码，则使用bid和accessToken登录
              mType = 2;
            } else {
              mType = 3;
            }

            switch (mType) {
              case 1:
                //有账号有密码，则博雅通行证登录 
                this._boyaaPassportLogin(loginAccount, loginPsd, bid, access_token);

                break;

              case 2:
                //有账号没有密码，则使用bid和accessToken登录 
                this._boyaaPassportBidTokenLogin(loginAccount, loginPsd, bid, access_token);

                break;

              case 3:
                this.reqYoukeLogin();
                break;

              default:
                this.reqYoukeLogin();
                break;
            }
          }
        } //通行证登录：有账号有密码


        _boyaaPassportLogin(account = null, password = null, bid = null, access_token = null, reg_type = null, verifyCode = null) {
          let loginType = (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
            error: Error()
          }), GConstants) : GConstants).UserLoginType.BoyaaPassportLogin;
          let uType = (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
            error: Error()
          }), GConstants) : GConstants).UserUType.BoyaaPassport;
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
          extraData.accesstoken = access_token; // this.m_loginAccount = account;
          // this.m_loginPswd = password;

          this.reqCoreGameLogin(null, loginType, uType, data, extraData, reg_type, verifyCode);
        } //通行证登录：有账号没有密码（账户+bid+token）


        _boyaaPassportBidTokenLogin(account = null, password = null, bid = null, access_token = null) {
          let loginType = (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
            error: Error()
          }), GConstants) : GConstants).UserLoginType.BoyaaPassportLogin;
          let uType = (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
            error: Error()
          }), GConstants) : GConstants).UserUType.BoyaaPassport;
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
          let loginType = (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
            error: Error()
          }), GConstants) : GConstants).UserLoginType.WechatLogin;
          let uType = (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
            error: Error()
          }), GConstants) : GConstants).UserUType.Guest;
          let in_param = {
            access_token: this._viewLoginParam.access_token
          };
          let ext_param = {
            openId: this._viewLoginParam.openId,
            userInfo: this._viewLoginParam.userinfo
          };
          (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
            error: Error()
          }), GCache) : GCache).User.setLoginState((_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
            error: Error()
          }), GConstants) : GConstants).UserLoginState.Logining);
          this.reqCoreGameLogin(null, loginType, uType, in_param, ext_param);
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


        reqCoreGameLogin(event, loginType, uType, in_param = null, in_extParam = null, reg_type = null, verifyCode = null) {
          this.print("接到消息 开始造登录数据===>");
          let curTime = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).time();

          let defaultParam = this._getLoginDefaultParam();

          if (reg_type) {
            defaultParam["reg_type"] = reg_type;
          }

          defaultParam.login_type = loginType;
          defaultParam.utype = uType;
          defaultParam.access_token = (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
            error: Error()
          }), GCache) : GCache).User.getLastLoginValueByKey("token", "");
          defaultParam.mid = (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
            error: Error()
          }), GCache) : GCache).User.getLastLoginValueByKey("mid", "");

          if (verifyCode) {
            defaultParam.verify_code = verifyCode;
          }

          let _in_param = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).table_verify(in_param);

          for (let key in _in_param) {
            if (Object.prototype.hasOwnProperty.call(_in_param, key)) {
              let value = _in_param[key];

              if (value) {
                defaultParam[key] = value;
              }
            }
          }

          let extParam_data = this.getDefaultExtramParam();
          extParam_data.timestamp = curTime;

          let _in_extParam = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).table_verify(in_extParam);

          for (let key in _in_extParam) {
            if (Object.prototype.hasOwnProperty.call(_in_extParam, key)) {
              let value = _in_extParam[key];

              if (value) {
                extParam_data[key] = value;
              }
            }
          }

          defaultParam.param = (_crd && Encrypt === void 0 ? (_reportPossibleCrUseOfEncrypt({
            error: Error()
          }), Encrypt) : Encrypt).JsonEncode2(extParam_data); //记录本次登录信息

          this._reqloginInfo = defaultParam;
          this.print("登录Core 造数据:", defaultParam);

          if (defaultParam.utype == (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
            error: Error()
          }), GConstants) : GConstants).UserUType.Guest) {
            // 游客登录
            let newBody = {
              guid: defaultParam.guid,
              api: (_crd && ClientInfo === void 0 ? (_reportPossibleCrUseOfClientInfo({
                error: Error()
              }), ClientInfo) : ClientInfo).PlatFormAppID
            };
            this.sendCoreGameLogin(newBody, (_crd && GlobalCMD === void 0 ? (_reportPossibleCrUseOfGlobalCMD({
              error: Error()
            }), GlobalCMD) : GlobalCMD).PHP_CORE_GUEST); // this.sendCoreGameLogin(defaultParam)
          } else {
            this.sendCoreGameLogin(defaultParam);
          }
        } //发送登录消息


        sendCoreGameLogin(param, cmd = null) {
          this._reqLoginNum = this._reqLoginNum + 1;
          cmd = cmd || (_crd && GlobalCMD === void 0 ? (_reportPossibleCrUseOfGlobalCMD({
            error: Error()
          }), GlobalCMD) : GlobalCMD).PHP_CORE_LOGIN;
          let sendMsg = {
            cmd: cmd,
            body: param,
            timeout: 15000
          };
          this.dump(sendMsg, "================sendCoreGameLogin======================");
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_SEND_MSG, sendMsg);
        } //请求游客登录


        reqYoukeLogin() {
          let loginType = (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
            error: Error()
          }), GConstants) : GConstants).UserLoginType.Notoken;
          let uType = (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
            error: Error()
          }), GConstants) : GConstants).UserUType.Guest;
          let lastUType = (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
            error: Error()
          }), GCache) : GCache).User.getLastLoginValueByKey("uType");
          let inParam = null;

          if (lastUType == (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
            error: Error()
          }), GConstants) : GConstants).UserUType.Guest) {
            let token = (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
              error: Error()
            }), GCache) : GCache).User.getLastLoginValueByKey("token");

            if (token && token != "") {
              loginType = (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
                error: Error()
              }), GConstants) : GConstants).UserLoginType.Token;
            } else {
              inParam = {
                guid: this._viewLoginParam.access_token
              };
            }
          } else if (lastUType == null) {
            inParam = {
              guid: this._viewLoginParam.access_token
            };
          }

          (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
            error: Error()
          }), GCache) : GCache).User.setLoginState((_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
            error: Error()
          }), GConstants) : GConstants).UserLoginState.Logining);
          this.reqCoreGameLogin(null, loginType, uType, inParam);
        } //游客登录后返回的结果


        respNetLoginYouke(event, param) {
          this.dump(param, "这是游客登录返回的结果");

          if (param.errorType == 1083) {//已经绑定手机 跳转手机登录
          } else {
            (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
              error: Error()
            }), GCache) : GCache).User.setLoginState((_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
              error: Error()
            }), GConstants) : GConstants).UserLoginState.Logining);
            this.sendCoreGameLogin(this._reqloginInfo);
          }
        } //登录返回的结果


        respNetLoginCore(event, isSuccess, respData, reqData) {
          this.dump(respData, "登录是否成功？===>" + isSuccess);
          let resultInfo = {};

          if (!isSuccess) {
            resultInfo = respData;
          } else {
            let info = respData;

            if (!info || (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).isNull(info["game"]) || (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).isNull(info["user"]) || (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).isNull(info["account"])) {
              (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                error: Error()
              }), Utils) : Utils).dump(respData);
              console.error("登录数据有误 字段有空数据");
              isSuccess = false;
            } else {
              (_crd && ClientInfo === void 0 ? (_reportPossibleCrUseOfClientInfo({
                error: Error()
              }), ClientInfo) : ClientInfo).RegionId = info["user"]["region"];
              (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
                error: Error()
              }), GCache) : GCache).User.onloadLoginSuccessParams(info["user"], info["game"], info["account"]);
              isSuccess = true;
            }
          }

          if (isSuccess == true) {
            this.receiveLoginSuccess();
          } else {
            this.receiveLoginFail(respData);
          } //判断是否开启发送心跳包


          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_HEART_BEAT_ONLOADING, isSuccess);
        }
        /** 统一处理登录成功 */


        receiveLoginSuccess() {
          //保存用户openid
          if (this._viewLoginParam && (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).string_isEmpty(this._viewLoginParam.openId) != null) {
            let key = (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
              error: Error()
            }), GCache) : GCache).User.getUserMid();
            key = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).string_format((_crd && StoreKey === void 0 ? (_reportPossibleCrUseOfStoreKey({
              error: Error()
            }), StoreKey) : StoreKey).LOGIN_USER_OPENID, key);
            console.log('当前用户openId', this._viewLoginParam.openId);
            (_crd && LocalStorage === void 0 ? (_reportPossibleCrUseOfLocalStorage({
              error: Error()
            }), LocalStorage) : LocalStorage).set(key, this._viewLoginParam.openId);
          }

          (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
            error: Error()
          }), GCache) : GCache).User.setLoginState((_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
            error: Error()
          }), GConstants) : GConstants).UserLoginState.LoginSuccess);
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).SYS_CLOSE_NETLOADING);
          this._reqLoginNum = 0;
        }
        /** 统一处理登录失败 */


        receiveLoginFail(errInfo) {
          (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
            error: Error()
          }), GCache) : GCache).User.setLoginState((_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
            error: Error()
          }), GConstants) : GConstants).UserLoginState.LoginFailed);
          this.dump(errInfo, `[Login Fail]登录失败了,是否需要自动重新请求登录 ${this._reqLoginNum < this._reqLoginMaxNum}`);

          if (this._reqLoginNum < this._reqLoginMaxNum) {
            //更新每次请求的时间戳
            let extParam_data = (_crd && Encrypt === void 0 ? (_reportPossibleCrUseOfEncrypt({
              error: Error()
            }), Encrypt) : Encrypt).JsonDecode(this._reqloginInfo.param);
            extParam_data.timestamp = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).time();
            this._reqloginInfo.param = (_crd && Encrypt === void 0 ? (_reportPossibleCrUseOfEncrypt({
              error: Error()
            }), Encrypt) : Encrypt).JsonEncode2(extParam_data); //此处针对wx平台 要做access_token的实时更新

            if (this._reqloginInfo && this._reqloginInfo["login_type"] == (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
              error: Error()
            }), GConstants) : GConstants).UserLoginType.WechatLogin) {
              (_crd && Platform === void 0 ? (_reportPossibleCrUseOfPlatform({
                error: Error()
              }), Platform) : Platform).updateReFreshAccessToken(state => {
                if (state == true) {
                  this._reqloginInfo["access_token"] = (_crd && Platform === void 0 ? (_reportPossibleCrUseOfPlatform({
                    error: Error()
                  }), Platform) : Platform).PLogInfo.access_token;
                  this.sendCoreGameLogin(this._reqloginInfo);
                  return;
                }

                this._reqloginInfo = null;

                this._resetFirstLogin();

                (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
                  error: Error()
                }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
                  error: Error()
                }), AppEvent) : AppEvent).SYS_CLOSE_NETLOADING);
                this.showLoginView();
                (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
                  error: Error()
                }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
                  error: Error()
                }), AppEvent) : AppEvent).SYS_TOAST_TIP, {
                  content: "Fail:用户信息获取异常，请重新登录"
                });
              });
              return;
            }

            this.sendCoreGameLogin(this._reqloginInfo);
          } else {
            //断开连接 并显示登录
            this._reqloginInfo = null;
            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
              error: Error()
            }), AppEvent) : AppEvent).SYS_CLOSE_NETLOADING);
            (_crd && GSocket === void 0 ? (_reportPossibleCrUseOfGSocket({
              error: Error()
            }), GSocket) : GSocket).instance.closeConnect();
            this.showLoginView();
          }

          let errorType = errInfo ? errInfo["errorType"] : null;

          switch (errorType) {
            case (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
              error: Error()
            }), GConstants) : GConstants).UserLoginFailCode.ERR_MOVE_SERVER:
              this.print("receiveLoginFail: 登录失败>>>>server迁服");
              break;

            case (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
              error: Error()
            }), GConstants) : GConstants).UserLoginFailCode.ERR_STOP_SERVER:
              this.print("receiveLoginFail: 登录失败>>>>计划性停服");
              (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
                error: Error()
              }), GCache) : GCache).User.setLoginState((_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
                error: Error()
              }), GConstants) : GConstants).UserLoginState.ServerStop);
              break;

            case (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
              error: Error()
            }), GConstants) : GConstants).UserLoginFailCode.ERR_VerifyCode_ERROR:
              this.print("receiveLoginFail: 登录失败>>>>验证码错误");
              break;

            case (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
              error: Error()
            }), GConstants) : GConstants).UserLoginFailCode.ERR_REG_IDIOM_ERROR:
              this.print("receiveLoginFail: 登录失败>>>>注册__需要成语验证码");
              break;

            case (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
              error: Error()
            }), GConstants) : GConstants).UserLoginFailCode.ERR_REG_PHONENUMBER_ERROR:
              this.print("receiveLoginFail: 登录失败>>>>注册__需要手机号码注册");
              break;

            case (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
              error: Error()
            }), GConstants) : GConstants).UserLoginFailCode.ERR_LOGIN_BINDPHONE_ERROR:
              this.print("receiveLoginFail: 登录失败>>>>需要绑定手机后登录");
              break;

            default:
              this.print("receiveLoginFail: 登录失败>>>>" + errorType);

              if (errInfo && errInfo["errorTips"] && errInfo["errorTips"] != "") {
                (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
                  error: Error()
                }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
                  error: Error()
                }), AppEvent) : AppEvent).SYS_TOAST_TIP, {
                  content: errInfo["errorTips"]
                });
              }

              break;
          }
        } //广播:登录成功(断线重连)


        respNetLoginSuccess(event, respData, reqData) {
          (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
            error: Error()
          }), Logger) : Logger).logModel("广播:登录成功 开启会话保活 即将跳转==>");
          this.print("respNetLoginSuccess", this._reqloginInfo);
          this.print(respData);
          (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
            error: Error()
          }), GCache) : GCache).User.setLoginState((_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
            error: Error()
          }), GConstants) : GConstants).UserLoginState.LoginSuccess);
          (_crd && GSocket === void 0 ? (_reportPossibleCrUseOfGSocket({
            error: Error()
          }), GSocket) : GSocket).instance.startKeepAlive(true); //更新登录计次

          (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
            error: Error()
          }), GCache) : GCache).User.updateLoginSuccessCount(); //请求通用队列

          this._reqCommSuccessQuene(); //******************重连游戏********************/


          let isSupportGame = false;
          let roomId = 0;
          let gameId = 0;
          let roomLevel = 0;

          if (respData["ret"] == 1) {
            roomId = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).number_valueOf(respData["roomId"]);
            gameId = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).number_valueOf(respData["gameType"]);

            if (roomId > 0) {
              roomLevel = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                error: Error()
              }), Utils) : Utils).number_valueOf(respData["roomLevel"]);
            }

            for (let key in (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
              error: Error()
            }), GConstants) : GConstants).GameID) {
              if (Object.prototype.hasOwnProperty.call((_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
                error: Error()
              }), GConstants) : GConstants).GameID, key)) {
                let id = (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
                  error: Error()
                }), GConstants) : GConstants).GameID[key];

                if (gameId == id) {
                  isSupportGame = true;
                }
              }
            }
          } //比赛场


          let matchRecInfo = respData["matchInfo"];
          let matchGameId = 0;

          if (!(_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).table_isEmpty(matchRecInfo)) {
            matchGameId = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).number_valueOf(matchRecInfo["gameId"]);
          }

          let onlookerInfo = respData["onlookerInfo"];
          let onlookerGameId = 0;

          if (!(_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).table_isEmpty(onlookerInfo)) {
            onlookerGameId = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).number_valueOf(onlookerInfo["gameId"]);
          }

          if (roomId > 0 && gameId > 0) {
            if (isSupportGame == true) {
              //不支持的游戏
              if ((_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
                error: Error()
              }), GCache) : GCache).Desk) {
                (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
                  error: Error()
                }), GCache) : GCache).Desk.setCurGameID(gameId);
                (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
                  error: Error()
                }), GCache) : GCache).Desk.setCurTableID(roomId);
                (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
                  error: Error()
                }), GCache) : GCache).Desk.setCurLevelID(roomLevel);
              }

              this.print("****************在游戏中 重连进入************"); //设置缓存数据

              let body = {
                GameID: gameId,
                Level: roomLevel,
                TableID: roomId,
                isReconn: true
              };
              (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
                error: Error()
              }), GCache) : GCache).SelectGame.intoGameData = body; //加载游戏场景

              (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
                error: Error()
              }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
                error: Error()
              }), AppEvent) : AppEvent).GAME_GOTO_SHOW);
              return;
            } else {
              this.print(`进入游戏gameID = ${gameId}失败，当前版本不支持`);
              (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
                error: Error()
              }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
                error: Error()
              }), AppEvent) : AppEvent).SYS_TOAST_TIP, {
                content: (_crd && GameTxt === void 0 ? (_reportPossibleCrUseOfGameTxt({
                  error: Error()
                }), GameTxt) : GameTxt).login_goto_room_no_game
              });
            }
          }

          this._reqSuccessQueneToHall();

          this._toForwardHallView(null);
        } //广播：异地登录


        respNetLoginMultiDevice(event, param) {
          this.print("广播:异地登录");
          (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
            error: Error()
          }), GCache) : GCache).User.setLoginState((_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
            error: Error()
          }), GConstants) : GConstants).UserLoginState.MultiDeviceLogin);
          (_crd && LocalStorage === void 0 ? (_reportPossibleCrUseOfLocalStorage({
            error: Error()
          }), LocalStorage) : LocalStorage).set((_crd && StoreKey === void 0 ? (_reportPossibleCrUseOfStoreKey({
            error: Error()
          }), StoreKey) : StoreKey).LOGIN_LAST_CHECK_AGREE, false);
          (_crd && GSocket === void 0 ? (_reportPossibleCrUseOfGSocket({
            error: Error()
          }), GSocket) : GSocket).instance.closeConnect();
          let tipParam = {
            title: "异地登录",
            alignLeftTop: false,
            notshowClose: true,
            txt_desc: (_crd && GameTxt === void 0 ? (_reportPossibleCrUseOfGameTxt({
              error: Error()
            }), GameTxt) : GameTxt).remote_login,
            //正文内容
            dec_fontSize: 28,
            buttonsMap: [{
              label: (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
                error: Error()
              }), GConstants) : GConstants).BtnConf.Label_Confirm,
              click: () => {
                // 点击回调
                (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
                  error: Error()
                }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
                  error: Error()
                }), AppEvent) : AppEvent).LOGIN_GOTO_SHOW);
              }
            }]
          }; //增加弹窗异地登录

          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).VIEW_UI_OPEN, (_crd && UIID === void 0 ? (_reportPossibleCrUseOfUIID({
            error: Error()
          }), UIID) : UIID).SysPopWindow, tipParam);
        } //保活检测


        respNetKeepAlive(event, isSuccess, respData, reqData) {
          if (isSuccess == true && respData["ssid"]) {
            (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
              error: Error()
            }), GCache) : GCache).User.updateDataUserKey("ssid", respData["ssid"]);
          }
        }
        /** 登录状态改变 */


        receiveLoginStateChange(event, state) {} //登录成功后 请求的通用队列 必定会请求


        _reqCommSuccessQuene() {
          //请求登录初始化
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_REQ_USER_LOGIN_CORE_INIT); //请求大厅游戏配置

          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_REQ_HALL_GAME_CONFIG); //请求游戏房间信息

          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_REQ_GAME_LEVEL_ROOM_TAB, (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
            error: Error()
          }), GConstants) : GConstants).GameID.FXJ); //请求快速开始配置

          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_REQ_HALL_QUICK_START_CONFIG); //请求分享配置

          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_REQ_SHARE_CONFIG); //请求背包配置

          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_CMD_REQ_USER_BACKPACK); //请求等级配置

          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_REQ_LEVEL_MODEL_CONFIG); //请求道具信息

          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_REQ_PROPS_INFO); //请求玩家玩某个游戏的信息

          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_REQ_GAME_PLAY_INFO, (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
            error: Error()
          }), GConstants) : GConstants).GameID.FXJ);
        } //登录成功后 请求的队列


        _reqSuccessQueneToHall() {
          // //请求子游戏场次中人数
          // EventManager.dispatch(AppEvent.NET_REQ_GAME_LEVEL_PERSON_COUNT, GConstants.GameID.FXJ);
          //请求签到数据
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_REQ_SIGNIN_CONFIG); //请求限时折扣

          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_REQ_HOLIDAYS_GIFTPACKAGE); //请求限时折扣礼包数据

          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_REQ_GOODS_INFO, {
            scene: (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
              error: Error()
            }), GConstants) : GConstants).GoodsListID.limitPack
          }); //请求首充礼包商品数据

          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_REQ_GOODS_INFO, {
            scene: (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
              error: Error()
            }), GConstants) : GConstants).GoodsListID.GiftPack
          }); //请求商城银币

          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_REQ_GOODS_INFO, {
            scene: (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
              error: Error()
            }), GConstants) : GConstants).GoodsListID.MarketSilver
          }); //请求商城道具

          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_REQ_GOODS_INFO, {
            scene: (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
              error: Error()
            }), GConstants) : GConstants).GoodsListID.MarketProp
          }); //请求邮箱数据

          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_CMD_REQ_WATCH); //请求活动中心数据

          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_CMD_REQ_TASK_ACT_CONFIG); //请求首充礼包配置

          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_REQ_FIRST_PAY_CONFIG);
        } //显示登录页


        showLoginView(event = null, param = null) {
          (_crd && GameConfig === void 0 ? (_reportPossibleCrUseOfGameConfig({
            error: Error()
          }), GameConfig) : GameConfig).instance.FPS = 30;
          let isFirstLogin = false;

          if (param) {
            if (param.state == "first_login") {
              //首次登录
              isFirstLogin = true;
              (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
                error: Error()
              }), GCache) : GCache).User.setLoginState((_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
                error: Error()
              }), GConstants) : GConstants).UserLoginState.None);
            } else if (param.state == "reconnect_fail") {
              (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
                error: Error()
              }), GCache) : GCache).User.setLoginState((_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
                error: Error()
              }), GConstants) : GConstants).UserLoginState.Offline);
            }
          }

          if ((_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
            error: Error()
          }), GCache) : GCache).User.getLoginState() == (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
            error: Error()
          }), GConstants) : GConstants).UserLoginState.LoginSuccess) {
            (_crd && LayerManager === void 0 ? (_reportPossibleCrUseOfLayerManager({
              error: Error()
            }), LayerManager) : LayerManager).clear((_crd && UIConfigData === void 0 ? (_reportPossibleCrUseOfUIConfigData({
              error: Error()
            }), UIConfigData) : UIConfigData)[(_crd && UIID === void 0 ? (_reportPossibleCrUseOfUIID({
              error: Error()
            }), UIID) : UIID).LoginPrefab].layer);
            return;
          }

          let self = this;

          if (!(_crd && LayerManager === void 0 ? (_reportPossibleCrUseOfLayerManager({
            error: Error()
          }), LayerManager) : LayerManager).has((_crd && UIID === void 0 ? (_reportPossibleCrUseOfUIID({
            error: Error()
          }), UIID) : UIID).LoginPrefab) && !(_crd && LayerManager === void 0 ? (_reportPossibleCrUseOfLayerManager({
            error: Error()
          }), LayerManager) : LayerManager).isLoading((_crd && UIID === void 0 ? (_reportPossibleCrUseOfUIID({
            error: Error()
          }), UIID) : UIID).LoginPrefab)) {
            if ((_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
              error: Error()
            }), GCache) : GCache).User.getLoginState() == (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
              error: Error()
            }), GConstants) : GConstants).UserLoginState.LoginSuccess) {
              (_crd && LayerManager === void 0 ? (_reportPossibleCrUseOfLayerManager({
                error: Error()
              }), LayerManager) : LayerManager).clear((_crd && UIConfigData === void 0 ? (_reportPossibleCrUseOfUIConfigData({
                error: Error()
              }), UIConfigData) : UIConfigData)[(_crd && UIID === void 0 ? (_reportPossibleCrUseOfUIID({
                error: Error()
              }), UIID) : UIID).LoginPrefab].layer);
              return;
            }

            (_crd && LayerManager === void 0 ? (_reportPossibleCrUseOfLayerManager({
              error: Error()
            }), LayerManager) : LayerManager).clearOther(null, true);
            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
              error: Error()
            }), AppEvent) : AppEvent).SYS_PACKAGE_LOAD, (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
              error: Error()
            }), GConstants) : GConstants).PkgLoaderTaskList.Login, () => {
              if ((_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
                error: Error()
              }), GCache) : GCache).User.isLoginSuccesed() == true) {
                return;
              }

              self._checkServerChange(isFirstLogin); //通知:sys周期变化


              (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
                error: Error()
              }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
                error: Error()
              }), AppEvent) : AppEvent).SYS_APP_LIFE, (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
                error: Error()
              }), GConstants) : GConstants).AppRunLife.Login_Will_Open); //打开登录界面

              (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
                error: Error()
              }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
                error: Error()
              }), AppEvent) : AppEvent).VIEW_UI_OPEN, (_crd && UIID === void 0 ? (_reportPossibleCrUseOfUIID({
                error: Error()
              }), UIID) : UIID).LoginPrefab, null, {
                onAdded: function () {
                  //通知:主场景更换
                  (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
                    error: Error()
                  }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
                    error: Error()
                  }), AppEvent) : AppEvent).VIEW_UI_MAIN_UPDATE, (_crd && UIID === void 0 ? (_reportPossibleCrUseOfUIID({
                    error: Error()
                  }), UIID) : UIID).LoginPrefab); //通知:sys周期变化

                  (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
                    error: Error()
                  }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
                    error: Error()
                  }), AppEvent) : AppEvent).SYS_APP_LIFE, (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
                    error: Error()
                  }), GConstants) : GConstants).AppRunLife.Login_Opened);

                  if ((_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
                    error: Error()
                  }), GCache) : GCache).User.getLoginState() == (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
                    error: Error()
                  }), GConstants) : GConstants).UserLoginState.LoginSuccess) {
                    (_crd && LayerManager === void 0 ? (_reportPossibleCrUseOfLayerManager({
                      error: Error()
                    }), LayerManager) : LayerManager).clear((_crd && UIConfigData === void 0 ? (_reportPossibleCrUseOfUIConfigData({
                      error: Error()
                    }), UIConfigData) : UIConfigData)[(_crd && UIID === void 0 ? (_reportPossibleCrUseOfUIID({
                      error: Error()
                    }), UIID) : UIID).LoginPrefab].layer);
                    return;
                  }

                  (_crd && LayerManager === void 0 ? (_reportPossibleCrUseOfLayerManager({
                    error: Error()
                  }), LayerManager) : LayerManager).clearOther((_crd && UIConfigData === void 0 ? (_reportPossibleCrUseOfUIConfigData({
                    error: Error()
                  }), UIConfigData) : UIConfigData)[(_crd && UIID === void 0 ? (_reportPossibleCrUseOfUIID({
                    error: Error()
                  }), UIID) : UIID).LoginPrefab].layer, true); //加载完毕给登录界面传参

                  (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
                    error: Error()
                  }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
                    error: Error()
                  }), AppEvent) : AppEvent).LOGIN_SEND_SHOW, param);
                },
                onRemoved: function () {
                  //通知:sys周期变化
                  (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
                    error: Error()
                  }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
                    error: Error()
                  }), AppEvent) : AppEvent).SYS_APP_LIFE, (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
                    error: Error()
                  }), GConstants) : GConstants).AppRunLife.Login_Closed);
                }
              });
            });
          } else {
            (_crd && LayerManager === void 0 ? (_reportPossibleCrUseOfLayerManager({
              error: Error()
            }), LayerManager) : LayerManager).clearOther((_crd && UIConfigData === void 0 ? (_reportPossibleCrUseOfUIConfigData({
              error: Error()
            }), UIConfigData) : UIConfigData)[(_crd && UIID === void 0 ? (_reportPossibleCrUseOfUIID({
              error: Error()
            }), UIID) : UIID).LoginPrefab].layer, true);

            self._checkServerChange(isFirstLogin); //加载完毕给登录界面传参


            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
              error: Error()
            }), AppEvent) : AppEvent).LOGIN_SEND_SHOW, param);
          } //系统信息刷新


          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).SYS_INFO_REFRESH);
        }
        /** 检测服务端变化（即将跳转登录界面时） */


        _checkServerChange(isFirstLogin = false) {
          //代码 和 本地 冲突， 以本地为准
          //没有 本地 ，代码为准
          let lastClientVer = (_crd && LocalStorage === void 0 ? (_reportPossibleCrUseOfLocalStorage({
            error: Error()
          }), LocalStorage) : LocalStorage).get((_crd && StoreKey === void 0 ? (_reportPossibleCrUseOfStoreKey({
            error: Error()
          }), StoreKey) : StoreKey).SYS_ClientVer, (_crd && ClientInfo === void 0 ? (_reportPossibleCrUseOfClientInfo({
            error: Error()
          }), ClientInfo) : ClientInfo).AppVer);
          let oldServerConf = (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
            error: Error()
          }), GCache) : GCache).User.getLastlocalLoginServerConf();
          let newServerConf = (_crd && GameConfig === void 0 ? (_reportPossibleCrUseOfGameConfig({
            error: Error()
          }), GameConfig) : GameConfig).instance.AppUrlConf;

          if (!oldServerConf) {
            //说明没有登录成功过
            (_crd && LocalStorage === void 0 ? (_reportPossibleCrUseOfLocalStorage({
              error: Error()
            }), LocalStorage) : LocalStorage).set((_crd && StoreKey === void 0 ? (_reportPossibleCrUseOfStoreKey({
              error: Error()
            }), StoreKey) : StoreKey).SYS_ClientVer, (_crd && ClientInfo === void 0 ? (_reportPossibleCrUseOfClientInfo({
              error: Error()
            }), ClientInfo) : ClientInfo).AppVer);
            return;
          }

          let isSameVer = String(lastClientVer) == String((_crd && ClientInfo === void 0 ? (_reportPossibleCrUseOfClientInfo({
            error: Error()
          }), ClientInfo) : ClientInfo).AppVer);
          let isChangeServer = false;

          for (let key in newServerConf) {
            if (Object.prototype.hasOwnProperty.call(newServerConf, key)) {
              if (oldServerConf[key] != newServerConf[key]) {
                isChangeServer = true;
              }

              ;
            }
          } //版本号不一致且地址不一致 以代码为主


          if (isSameVer == false && isChangeServer == true) {
            console.warn("---【版本号不一致且服务器地址不一致，重置本地所有数据存储】---");
            console.log(`当前版本:${(_crd && ClientInfo === void 0 ? (_reportPossibleCrUseOfClientInfo({
              error: Error()
            }), ClientInfo) : ClientInfo).AppVer} 上个版本:${lastClientVer}`);
            (_crd && LocalStorage === void 0 ? (_reportPossibleCrUseOfLocalStorage({
              error: Error()
            }), LocalStorage) : LocalStorage).clear();
            (_crd && LocalStorage === void 0 ? (_reportPossibleCrUseOfLocalStorage({
              error: Error()
            }), LocalStorage) : LocalStorage).set((_crd && StoreKey === void 0 ? (_reportPossibleCrUseOfStoreKey({
              error: Error()
            }), StoreKey) : StoreKey).SYS_ClientVer, (_crd && ClientInfo === void 0 ? (_reportPossibleCrUseOfClientInfo({
              error: Error()
            }), ClientInfo) : ClientInfo).AppVer);
            return;
          } //服务器地址不一致 以代码为主


          if (isChangeServer == true) {
            if (isFirstLogin == true) {
              //首次登录 切换为已有的登录历史
              let currowServer = (_crd && ClientInfo === void 0 ? (_reportPossibleCrUseOfClientInfo({
                error: Error()
              }), ClientInfo) : ClientInfo).CurrowServer;
              let isFind = false;

              for (let key in (_crd && GameConfig === void 0 ? (_reportPossibleCrUseOfGameConfig({
                error: Error()
              }), GameConfig) : GameConfig).ServerUrlConf) {
                if (Object.prototype.hasOwnProperty.call((_crd && GameConfig === void 0 ? (_reportPossibleCrUseOfGameConfig({
                  error: Error()
                }), GameConfig) : GameConfig).ServerUrlConf, key) && isFind == false) {
                  if (oldServerConf["Socket"] == (_crd && GameConfig === void 0 ? (_reportPossibleCrUseOfGameConfig({
                    error: Error()
                  }), GameConfig) : GameConfig).ServerUrlConf[key].Socket) {
                    isFind = true;
                    currowServer = Number(key);
                  }
                }
              }

              (_crd && ClientInfo === void 0 ? (_reportPossibleCrUseOfClientInfo({
                error: Error()
              }), ClientInfo) : ClientInfo).CurrowServer = currowServer;
              (_crd && LocalStorage === void 0 ? (_reportPossibleCrUseOfLocalStorage({
                error: Error()
              }), LocalStorage) : LocalStorage).set((_crd && StoreKey === void 0 ? (_reportPossibleCrUseOfStoreKey({
                error: Error()
              }), StoreKey) : StoreKey).SYS_ClientVer, (_crd && ClientInfo === void 0 ? (_reportPossibleCrUseOfClientInfo({
                error: Error()
              }), ClientInfo) : ClientInfo).AppVer);
              return;
            }

            console.warn("---【服务器地址有切换 ，重置本地所有数据存储】---");
            (_crd && LocalStorage === void 0 ? (_reportPossibleCrUseOfLocalStorage({
              error: Error()
            }), LocalStorage) : LocalStorage).clear();
            (_crd && LocalStorage === void 0 ? (_reportPossibleCrUseOfLocalStorage({
              error: Error()
            }), LocalStorage) : LocalStorage).set((_crd && StoreKey === void 0 ? (_reportPossibleCrUseOfStoreKey({
              error: Error()
            }), StoreKey) : StoreKey).SYS_ClientVer, (_crd && ClientInfo === void 0 ? (_reportPossibleCrUseOfClientInfo({
              error: Error()
            }), ClientInfo) : ClientInfo).AppVer);
            return;
          }
        } //登录成功 跳转大厅


        _toForwardHallView(param, isNotNeedTip = false) {
          if (isNotNeedTip == false) {
            //显示吐司
            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
              error: Error()
            }), AppEvent) : AppEvent).SYS_TOAST_TIP, {
              content: (_crd && GameTxt === void 0 ? (_reportPossibleCrUseOfGameTxt({
                error: Error()
              }), GameTxt) : GameTxt).login_success
            });
          }

          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).HALL_GOTO_SHOW, param);
        } //重置登录


        _resetFirstLogin() {
          this._reqLoginNum = 0;
          (_crd && GSocket === void 0 ? (_reportPossibleCrUseOfGSocket({
            error: Error()
          }), GSocket) : GSocket).instance.closeConnect();

          if ((_crd && Platform === void 0 ? (_reportPossibleCrUseOfPlatform({
            error: Error()
          }), Platform) : Platform).isWXPlatform() && (_crd && Platform === void 0 ? (_reportPossibleCrUseOfPlatform({
            error: Error()
          }), Platform) : Platform).WxLoginCode) {
            (_crd && Platform === void 0 ? (_reportPossibleCrUseOfPlatform({
              error: Error()
            }), Platform) : Platform).updateWXLoginCode();
          }
        } //获取登录的基础信息


        _getLoginDefaultParam(phone = "") {
          let param_data = {
            api_ver: 2,
            //接口版本号
            channel_id: (_crd && ClientInfo === void 0 ? (_reportPossibleCrUseOfClientInfo({
              error: Error()
            }), ClientInfo) : ClientInfo).ChannelId,
            channelKey: (_crd && ClientInfo === void 0 ? (_reportPossibleCrUseOfClientInfo({
              error: Error()
            }), ClientInfo) : ClientInfo).ChannelKey,
            mac: (_crd && ClientInfo === void 0 ? (_reportPossibleCrUseOfClientInfo({
              error: Error()
            }), ClientInfo) : ClientInfo).MachineId,
            machine_type: (_crd && ClientInfo === void 0 ? (_reportPossibleCrUseOfClientInfo({
              error: Error()
            }), ClientInfo) : ClientInfo).MachineModel,
            os: (_crd && ClientInfo === void 0 ? (_reportPossibleCrUseOfClientInfo({
              error: Error()
            }), ClientInfo) : ClientInfo).SysVer,
            resolution: `${(_crd && SystemConf === void 0 ? (_reportPossibleCrUseOfSystemConf({
              error: Error()
            }), SystemConf) : SystemConf).DEV_SIZE.width}*${(_crd && SystemConf === void 0 ? (_reportPossibleCrUseOfSystemConf({
              error: Error()
            }), SystemConf) : SystemConf).DEV_SIZE.height}`,
            imsi: (_crd && ClientInfo === void 0 ? (_reportPossibleCrUseOfClientInfo({
              error: Error()
            }), ClientInfo) : ClientInfo).IMSI,
            operator: (_crd && ClientInfo === void 0 ? (_reportPossibleCrUseOfClientInfo({
              error: Error()
            }), ClientInfo) : ClientInfo).PhoneCardType,
            net: (_crd && ClientInfo === void 0 ? (_reportPossibleCrUseOfClientInfo({
              error: Error()
            }), ClientInfo) : ClientInfo).NetWorkType,
            guid: (_crd && ClientInfo === void 0 ? (_reportPossibleCrUseOfClientInfo({
              error: Error()
            }), ClientInfo) : ClientInfo).Guid,
            ssaid: (_crd && ClientInfo === void 0 ? (_reportPossibleCrUseOfClientInfo({
              error: Error()
            }), ClientInfo) : ClientInfo).SSAID,
            appid: (_crd && ClientInfo === void 0 ? (_reportPossibleCrUseOfClientInfo({
              error: Error()
            }), ClientInfo) : ClientInfo).PlatFormAppID,
            nick: (_crd && ClientInfo === void 0 ? (_reportPossibleCrUseOfClientInfo({
              error: Error()
            }), ClientInfo) : ClientInfo).PhoneModel,
            version: (_crd && ClientInfo === void 0 ? (_reportPossibleCrUseOfClientInfo({
              error: Error()
            }), ClientInfo) : ClientInfo).AppVer,
            hall_version: (_crd && ClientInfo === void 0 ? (_reportPossibleCrUseOfClientInfo({
              error: Error()
            }), ClientInfo) : ClientInfo).HallVer,
            login_type: 1,
            //登录类型
            utype: 1,
            //用户类型
            sex: 0,
            //性别
            phone: phone || "",
            access_token: "",
            pwd: "",
            verify_code: -1,
            verify_msg: "",
            verify_word: "",
            param: "",
            mid: ""
          };
          return param_data;
        } //获取默认的param参数


        getDefaultExtramParam() {
          let param_data = {
            iccid: (_crd && ClientInfo === void 0 ? (_reportPossibleCrUseOfClientInfo({
              error: Error()
            }), ClientInfo) : ClientInfo).ICCID,
            imei: (_crd && ClientInfo === void 0 ? (_reportPossibleCrUseOfClientInfo({
              error: Error()
            }), ClientInfo) : ClientInfo).IMEI,
            imsi: (_crd && ClientInfo === void 0 ? (_reportPossibleCrUseOfClientInfo({
              error: Error()
            }), ClientInfo) : ClientInfo).IMSI,
            timestamp: (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).time(),
            safecode: (_crd && ClientInfo === void 0 ? (_reportPossibleCrUseOfClientInfo({
              error: Error()
            }), ClientInfo) : ClientInfo).SignDeviceId,
            safecode_mac: (_crd && ClientInfo === void 0 ? (_reportPossibleCrUseOfClientInfo({
              error: Error()
            }), ClientInfo) : ClientInfo).SignMacAddress,
            safecode_guid: (_crd && ClientInfo === void 0 ? (_reportPossibleCrUseOfClientInfo({
              error: Error()
            }), ClientInfo) : ClientInfo).SignGuid,
            factoryid: (_crd && ClientInfo === void 0 ? (_reportPossibleCrUseOfClientInfo({
              error: Error()
            }), ClientInfo) : ClientInfo).FactoryId,
            update_site_realtime: 1,
            //客户端是否支持登录接口更新请求入口配置（切服务器）
            bundleId: (_crd && ClientInfo === void 0 ? (_reportPossibleCrUseOfClientInfo({
              error: Error()
            }), ClientInfo) : ClientInfo).BundleId // if System.getPlatform() == kPlatformAndroid then
            // 	--android 平台禁止模拟器登录
            // 	local isVirtual, flag : kClientInfo:isVirtual(),
            // 	isSimulator : isVirtual,
            // 	simulatorCheckFlag : flag,
            // end

          };
          return param_data;
        }

      });

      LoginController._instance = null;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=0287b2863a616dbb663e85f210cbe6ce80d95485.js.map