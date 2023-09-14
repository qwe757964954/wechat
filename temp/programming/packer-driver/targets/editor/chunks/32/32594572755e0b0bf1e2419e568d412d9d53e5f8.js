System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Utils, WXSdk_VibrateShortType, WXSdk, _crd;

  function _reportPossibleCrUseOfUtils(extras) {
    _reporterNs.report("Utils", "../../framework/Utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWXSdk_VibrateShortType(extras) {
    _reporterNs.report("WXSdk_VibrateShortType", "./WXSdkDefines", _context.meta, extras);
  }

  function _reportPossibleCrUseOf_InterFace_WXSdk_CreateUserInfoButton(extras) {
    _reporterNs.report("_InterFace_WXSdk_CreateUserInfoButton", "./WXSdkDefines", _context.meta, extras);
  }

  function _reportPossibleCrUseOf__InterFace_WXSdk_GetLaunchOptionsSync(extras) {
    _reporterNs.report("__InterFace_WXSdk_GetLaunchOptionsSync", "./WXSdkDefines", _context.meta, extras);
  }

  function _reportPossibleCrUseOf__InterFace_WXSdk_KVData(extras) {
    _reporterNs.report("__InterFace_WXSdk_KVData", "./WXSdkDefines", _context.meta, extras);
  }

  function _reportPossibleCrUseOf__InterFace_WXSdk_ModalTips(extras) {
    _reporterNs.report("__InterFace_WXSdk_ModalTips", "./WXSdkDefines", _context.meta, extras);
  }

  function _reportPossibleCrUseOf__InterFace_WXSdk_OnShareAppMessage(extras) {
    _reporterNs.report("__InterFace_WXSdk_OnShareAppMessage", "./WXSdkDefines", _context.meta, extras);
  }

  function _reportPossibleCrUseOf__InterFace_WXSdk_ShowLoading(extras) {
    _reporterNs.report("__InterFace_WXSdk_ShowLoading", "./WXSdkDefines", _context.meta, extras);
  }

  function _reportPossibleCrUseOf__InterFace_WXSdk_ShowToast(extras) {
    _reporterNs.report("__InterFace_WXSdk_ShowToast", "./WXSdkDefines", _context.meta, extras);
  }

  _export("WXSdk", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      Utils = _unresolved_2.Utils;
    }, function (_unresolved_3) {
      WXSdk_VibrateShortType = _unresolved_3.WXSdk_VibrateShortType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6ead3GznBRBsYvBTjITxdyr", "WXSdk", undefined);

      _export("WXSdk", WXSdk = class WXSdk {
        /** 微信第三方 */
        //系统信息
        //当前基础库版本
        //当前日志上报类
        //文件管理类

        /** 激励视频广告实例 */

        /** 视频回调 */

        /** 注册实现自定义隐私弹窗的回调函数 */
        static get instance() {
          if (!this._instance || this._instance == null) {
            this._instance = new WXSdk();
          }

          if (!this._instance.isInit()) {
            this._instance.init();
          }

          return this._instance;
        }

        constructor() {
          this.wxSdk = void 0;
          this.wxLib = void 0;
          this._sysInfo = void 0;
          this._sdkVersion = void 0;
          this._realtimeLogManager = void 0;
          this._fileSystemManager = void 0;
          this._adRewardedVideo = null;
          this.VideoCallFunc = {
            onLoad: null,
            onError: null,
            onClickClose: null,
            isReturn: false,
            isClick: false
          };
          this.NeedPrivacyAuthorization = null;
          this.init();
          console.log("[ wxSdk ]>>>>\n");
          (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).dump(this.wxSdk);
        }
        /**
         * 是否初始化
         * @returns 
         */


        isInit() {
          return this.wxSdk != null && this.wxSdk != undefined;
        }
        /**
         * 初始化
         */


        init() {
          //@ts-ignore
          this.wxSdk = wx;

          if (this.wxSdk) {
            this.wxLib = this.wxSdk["abyLibs"];
            this._sysInfo = this.getSystemInfoSync() || {};
            this._sdkVersion = this._sysInfo["SDKVersion"] || null;
            this._realtimeLogManager = this.getRealtimeLogManager();
            this._fileSystemManager = this.getFileSystemManager();
          }
        }
        /**
         * getSystemInfoSync:获取系统信息(同步)
         * @returns info:Object 详见 _InterFace_WXSdk_SystemInfo 的定义
         */


        getSystemInfoSync() {
          return this.wxSdk.getSystemInfoSync();
        }
        /**
         * getSystemInfoAsync:获取系统信息(异步)。需要一定的微信客户端版本支持，在不支持的客户端上，会使用同步实现来返回。
         * @param success 接口调用成功的回调函数,session_key 未过期，并且在本生命周期一直有效
         * @param fail 接口调用失败的回调函数,session_key 已经失效，需要重新执行登录流程
         * @param complete 接口调用结束的回调函数（调用成功、失败都会执行）
         * @return 成功的回调 success(object:Object)=> 详见 _InterFace_WXSdk_SystemInfo 的定义
         */


        getSystemInfoAsync(success = null, fail = null, complete = null) {
          this.wxSdk.getSystemInfoAsync({
            success,
            fail,
            complete
          });
        }
        /**
         * checkSession:检查登录态是否过期。
         * @param success 接口调用成功的回调函数,session_key 未过期，并且在本生命周期一直有效
         * @param fail 接口调用失败的回调函数,session_key 已经失效，需要重新执行登录流程
         * @param complete 接口调用结束的回调函数（调用成功、失败都会执行）
         */


        checkSession(success = null, fail = null, complete = null) {
          this.wxSdk.checkSession({
            success,
            fail,
            complete
          });
        }
        /**
         * login:调用接口获取登录凭证（code）。通过凭证进而换取用户登录态信息，
         * 包括用户在当前小程序的唯一标识（openid）、微信开放平台帐号下的唯一标识（unionid，若当前小程序已绑定到微信开放平台帐号）及本次登录的会话密钥（session_key）等
         * @param timeout 超时时间，单位ms
         * @param success 接口调用成功的回调函数,返回参数包含code,param.code(string)用户登录凭证（有效期五分钟）。开发者需要在开发者服务器后台调用 auth.code2Session，使用 code 换取 openid、unionid、session_key 等信息
         * @param fail 接口调用失败的回调函数
         * @param complete 接口调用结束的回调函数（调用成功、失败都会执行）
         * @return 成功的回调 success(object:Object)=> 
         *            objec.code 用户登录凭证（有效期五分钟）
         */


        login(timeout = null, success = null, fail = null, complete = null) {
          this.wxSdk.login({
            timeout,
            success,
            fail,
            complete
          });
        }
        /**
         * 发起 HTTPS 网络请求
         * @param url 请求地址
         * @param success 成功的回调
         * @param fail 接口调用失败的回调函数
         * @param complete 接口调用结束的回调函数（调用成功、失败都会执行）
         * @param data 	string/object/ArrayBuffer 请求的参数
         * @param header 设置请求的 header，header 中不能设置 Referer。content-type 默认为 application/json	
         * @param timeout 超时时间，单位为毫秒。默认值为 60000
         * @param method  请求方法 默认GET (OPTIONS、GET、HEAD、POST、PUT、DELETE、TRACE、CONNECT)
         * @param dataType 返回的数据格式 默认JSON
         * @param responseType 响应的数据类型 默认text
         */


        request(url, success = null, fail = null, complete = null, data = null, header = null, timeout = 6000, method = "GET", dataType = "json", responseType = "text") {
          this.wxSdk.request({
            url: url,
            data: data,
            header: header,
            timeout: timeout || 6000,
            method: method,
            dataType: dataType,
            responseType: responseType,
            success: success,
            fail: fail,
            complete: complete
          });
        }
        /**
         * 调起客户端小程序设置界面，返回用户设置的操作结果。设置界面只会出现小程序已经向用户请求过的权限 注意：2.3.0 版本开始，用户发生点击行为后，才可以跳转打开设置页，管理授权信息。
         * @param withSubscriptions 
         * @param success 接口调用成功的回调函数,authSetting 用户授权结果(AuthSetting)、subscriptionsSetting（SubscriptionsSetting）用户订阅消息设置，接口参数withSubscriptions值为true时才会返回。
         * @param fail 接口调用失败的回调函数
         * @param complete 接口调用结束的回调函数（调用成功、失败都会执行） 
         * @returns 
         */


        openSetting(withSubscriptions = false, success = null, fail = null, complete = null) {
          let baseVer = '2.10.3';

          if (this.compareSdkVersion(baseVer, this._sdkVersion) > 0) {
            this.showModelNotKeep();
            return;
          }

          this.wxSdk.openSetting({
            withSubscriptions,
            success,
            fail,
            complete
          });
        }
        /**
         * 获取用户的当前设置。返回值中只会出现小程序已经向用户请求过的权限
         * @param withSubscriptions 是否同时获取用户订阅消息的订阅状态，默认不获取。注意：withSubscriptions 只返回用户勾选过订阅面板中的“总是保持以上选择，不再询问”的订阅消息
         * @param success 接口调用成功的回调函数
         * @param fail 接口调用失败的回调函数
         * @param complete 接口调用结束的回调函数（调用成功、失败都会执行）
         * @return success(object:Object)=> 
         * 		      object.authSetting	WXSdk_AuthSetting	用户授权结果	
         *		      object.subscriptionsSetting	SubscriptionsSetting	用户订阅消息设置，接口参数withSubscriptions值为true时才会返回。	2.10.1
         *		      object.miniprogramAuthSetting	AuthSetting	在插件中调用时，当前宿主小程序的用户授权结果
         */


        getSetting(withSubscriptions = false, success = null, fail = null, complete = null) {
          this.wxSdk.getSetting({
            withSubscriptions,
            success,
            fail,
            complete
          });
        }
        /**
         * 获取用户信息
         * @param withCredentials 是否带上登录态信息。当 withCredentials 为 true 时，要求此前有调用过 wx.login 且登录态尚未过期，此时返回的数据会包含 encryptedData, iv 等敏感信息；当 withCredentials 为 false 时，不要求有登录态，返回的数据不包含 encryptedData, iv 等敏感信息。
         * @param lang 显示用户信息的语言
         * @param success 接口调用成功的回调函数,返回参数包含code,param.code(string)用户登录凭证（有效期五分钟）。开发者需要在开发者服务器后台调用 auth.code2Session，使用 code 换取 openid、unionid、session_key 等信息
         * @param fail 接口调用失败的回调函数
         * @param complete 接口调用结束的回调函数（调用成功、失败都会执行）
         * @return success(object:Object)=>
         * 				 详见 __InterFace_WXSdk_GetUserInfoCallback_WXSMART 接口定义
         */


        getUserInfo(withCredentials = false, lang = "en", success = null, fail = null, complete = null) {
          this.wxSdk.getUserInfo({
            withCredentials: withCredentials,
            lang: lang,
            success: success,
            fail: fail,
            complete: complete
          });
        }
        /**
         * authorize:提前向用户发起授权请求。调用后会立刻弹窗询问用户是否同意授权小程序使用某项功能或获取用户的某些数据，
         * 但不会实际调用对应接口。如果用户之前已经同意授权，则不会出现弹窗，直接返回成功
         * 注:不会弹出授权窗口，请使用 wx.createUserInfoButton
         * @param scope: 详见 WXSdk_AuthSetting 中的定义
         * @param success 接口调用成功的回调函数
         * @param fail 接口调用失败的回调函数
         * @param complete 接口调用结束的回调函数（调用成功、失败都会执行）
         */


        authorize(scope, success = null, fail = null, complete = null) {
          this.wxSdk.authorize({
            scope,
            success,
            fail,
            complete
          });
        }
        /**
         * createUserInfoButton:创建用户信息按钮
         * @param options 详见 _InterFace_WXSdk_CreateUserInfoButton 中的定义
         * @return UserInfoButton:Object = {
         *				UserInfoButton.show()显示用户信息按钮
         *              UserInfoButton.hide()隐藏用户信息按钮
         *              UserInfoButton.destroy()销毁用户信息按钮
         *              UserInfoButton.onTap(function callback)监听用户信息按钮的点击事件
         *              UserInfoButton.offTap(function callback)取消监听用户信息按钮的点击事件
         */


        createUserInfoButton(options) {
          if (this.isCanCreateUserInfoButton() == false) {
            this.showModelNotKeep();
            return null;
          }

          return this.wxSdk.createUserInfoButton(options);
        }
        /** 是否支持创建用户授权按钮 */


        isCanCreateUserInfoButton() {
          let baseVer = '2.0.1';

          if (this.compareSdkVersion(baseVer, this._sdkVersion) > 0) {
            return false;
          }

          return true;
        }
        /**
         * 注册实现自定义隐私弹窗的回调函数
         * @param event = exposureAuthorization:告知平台隐私弹窗页面已曝光 
         * 				  agree:告知平台用户已经同意，resolve要求用户有过点击行为。
         * 				  disagree:告知平台用户已经拒绝，resolve要求用户有过点击行为。
         * @param callback 注册的句柄
         * @returns 
         */


        onNeedPrivacyAuthorization(event = null, callback = null) {
          let baseVer = '2.33.0';

          if (this.compareSdkVersion(baseVer, this._sdkVersion) > 0 || this.wxSdk["onNeedPrivacyAuthorization"] == null) {
            return false;
          }

          if (WXSdk.instance.NeedPrivacyAuthorization != null) {
            console.log("wxSdk:注册实现自定义隐私弹窗的回调函数==>", event);

            if (event) {
              WXSdk.instance.NeedPrivacyAuthorization({
                event: String(event)
              });
            }

            if (callback) {
              callback(WXSdk.instance.NeedPrivacyAuthorization);
            }

            return true;
          }

          console.log("wxSdk:注册实现自定义隐私弹窗的回调函数==>", event);
          this.wxSdk.onNeedPrivacyAuthorization(resolve => {
            WXSdk.instance.NeedPrivacyAuthorization = resolve;

            if (event) {
              WXSdk.instance.NeedPrivacyAuthorization({
                event: String(event)
              });
            }

            if (callback) {
              callback(WXSdk.instance.NeedPrivacyAuthorization);
            }
          });
          return true;
        }
        /**
         * 跳转至隐私协议页面
         * @param isCheck 是否只检查版本 默认false
         * @param success 
         * @param fail 
         * @param complete 
         * @returns 
         */


        openPrivacyContract(isCheck = false, success = null, fail = null, complete = null) {
          let baseVer = '2.33.0';

          if (this.compareSdkVersion(baseVer, this._sdkVersion) > 0) {
            return false;
          } else {
            if (isCheck == true) {
              return this.wxSdk ? this.wxSdk["openPrivacyContract"] != null : false;
            }
          }

          console.log("wxSdk:跳转至隐私协议页面==>");
          this.wxSdk.openPrivacyContract({
            success: success,
            fail: fail,
            complete: complete
          });
        }
        /**
         * 显示模态对话框 
         * @param options 详见 __InterFace_WXSdk_ModalTips 中的定义
         */


        showModal(options) {
          this.wxSdk.showModal(options);
        }
        /**
         * 显示消息提示框
         * @param options 详见 __InterFace_WXSdk_ShowToast 中的定义
         */


        showToast(options) {
          this.wxSdk.showToast(options);
        }
        /**
         * 显示 loading 提示框。需主动调用 wx.hideLoading 才能关闭提示框
         * @param options 详见 __InterFace_WXSdk_ShowToast 中的定义
         */


        showLoading(options) {
          this.wxSdk.showLoading(options);
        }
        /**
         * 隐藏消息提示框
         * @param noConflict 目前 toast 和 loading 相关接口可以相互混用，此参数可用于取消混用特性 最低版本 2.22.1
         * @param success 接口调用成功的回调函数,返回参数包含code,param.code(string)用户登录凭证（有效期五分钟）。开发者需要在开发者服务器后台调用 auth.code2Session，使用 code 换取 openid、unionid、session_key 等信息
         * @param fail 接口调用失败的回调函数
         * @param complete 接口调用结束的回调函数（调用成功、失败都会执行）
         */


        hideToast(noConflict, success = null, fail = null, complete = null) {
          let baseVer = '2.22.1';

          if (this.compareSdkVersion(baseVer, this._sdkVersion) > 0) {
            return;
          }

          this.wxSdk.hideToast({
            noConflict,
            success,
            fail,
            complete
          });
        }
        /**
         * 隐藏 loading 提示框
         * @param noConflict 目前 toast 和 loading 相关接口可以相互混用，此参数可用于取消混用特性 最低版本 2.22.1
         * @param success 接口调用成功的回调函数,返回参数包含code,param.code(string)用户登录凭证（有效期五分钟）。开发者需要在开发者服务器后台调用 auth.code2Session，使用 code 换取 openid、unionid、session_key 等信息
         * @param fail 接口调用失败的回调函数
         * @param complete 接口调用结束的回调函数（调用成功、失败都会执行）
         */


        hideLoading(noConflict, success = null, fail = null, complete = null) {
          let baseVer = '2.22.1';

          if (this.compareSdkVersion(baseVer, this._sdkVersion) > 0) {
            return;
          }

          this.wxSdk.hideLoading({
            noConflict,
            success,
            fail,
            complete
          });
        }
        /**
         * 设置系统剪贴板的内容。调用成功后，会弹出 toast 提示"内容已复制"，持续 1.5s
         * @param data 要设置的字符串
         * @param success 
         * @param fail 
         * @param complete 
         */


        setClipboardData(data, success = null, fail = null, complete = null) {
          this.wxSdk.setClipboardData({
            data: data,
            success,
            fail,
            complete
          });
        }
        /**
         * 获取系统剪贴板的内容
         * @param success 接口调用成功的回调函数,返回参数包含data,param.data(string)为剪贴板内容
         * @param fail 
         * @param complete 
         */


        getClipboardData(success = null, fail = null, complete = null) {
          this.wxSdk.getClipboardData({
            success,
            fail,
            complete
          });
        }
        /**
         * 显示当前页面的转发按钮(
         * "shareAppMessage"表示“发送给朋友”按钮，"shareTimeline"表示“分享到朋友圈”按钮
         *	显示“分享到朋友圈”按钮时必须同时显示“发送给朋友”按钮，显示“发送给朋友”按钮时则允许不显示“分享到朋友圈”按钮
         *  )
         * @param withShareTicket 是否使用带 shareTicket 的转发
         * @param menus ver>= 2.11.3 本接口为 Beta 版本，暂只在 Android 平台支持。需要显示的转发按钮名称列表，默认['shareAppMessage']。按钮名称合法值包含 "shareAppMessage"、"shareTimeline" 两种
         * @param success 接口调用成功的回调函数
         * @param fail 接口调用失败的回调函数
         * @param complete 接口调用结束的回调函数（调用成功、失败都会执行）
         */


        showShareMenu(withShareTicket = true, menus, success = null, fail = null, complete = null) {
          let baseVer = '2.11.3';

          if (this.compareSdkVersion(baseVer, this._sdkVersion) > 0) {
            this.showModelNotKeep();
            return;
          }

          this.wxSdk.showShareMenu({
            withShareTicket: withShareTicket,
            menus: menus,
            //['shareAppMessage', 'shareTimeline']
            success,
            fail,
            complete
          });
        }
        /**
         * 主动拉起转发，进入选择通讯录界面
         * @param param: __InterFace_WXSdk_OnShareAppMessage 
         */


        shareAppMessage(param) {
          this.wxSdk.shareAppMessage(param);
        }
        /**
         * 监听用户点击右上角菜单的「转发」按钮时触发的事件
         * @param callback 
         */


        onShareAppMessage(callback) {
          if (this.wxSdk && this.wxSdk["onShareAppMessage"]) {
            this.wxSdk.onShareAppMessage(() => {
              return callback && callback();
            });
          }
        }
        /**
         * 取消绑定分享参数
         */


        offShareAppMessage() {
          if (this.wxSdk && this.wxSdk["offShareAppMessage"]) {
            this.wxSdk.offShareAppMessage();
          }
        }
        /**
         * 监听绑定分享参数
         * 监听用户点击右上角菜单的「分享到朋友圈」按钮时触发的事件。本接口为 Beta 版本，暂只在 Android 平台支持
         * @param callback 
         */


        onShareTimeline(callback) {
          if (!this.wxSdk || this.wxSdk["onShareTimeline"] == null) {
            console.warn("监听绑定分享朋友圈参数失败，无此函数");
            return;
          }

          if (this.wxSdk && this.wxSdk["onShareTimeline"]) {
            this.wxSdk.onShareTimeline(() => {
              return callback && callback();
            });
          }
        }
        /**
         * 取消绑定分享参数
         */


        offShareTimeline() {
          if (this.wxSdk && this.wxSdk["offShareTimeline"]) {
            this.wxSdk.offShareTimeline();
          }
        }
        /**
         * 监听主域接收 wx.shareMessageToFriend 接口的成功失败通知
         * 监听用户「分享到指定朋友」触发的结果事件
         * @param callback:回调函数 参数为:{success:boolean 是否成功 errMsg:错误信息}
         */


        onShareMessageToFriend(callback) {
          if (!this.wxSdk || this.wxSdk["onShareMessageToFriend"] == null) {
            console.warn("监听用户「分享到指定朋友」结果 失败，无此函数");
            return;
          }

          this.wxSdk.onShareMessageToFriend(respParam => {
            return callback && callback(respParam);
          });
        }
        /**
         * 进入客服会话。要求在用户发生过至少一次 touch 事件后才能调用。后台接入方式与小程序一致，详见 客服消息接入 基础库 2.0.3 开始支持
         * @param sessionFrom 会话来源
         * @param success 接口调用成功的回调函数
         * @param fail 接口调用失败的回调函数
         * @param complete 接口调用结束的回调函数（调用成功、失败都会执行）
         * @param showMessageCard 是否发送小程序气泡消息
         * @param sendMessageTitle 气泡消息标题
         * @param sendMessagePath 气泡消息小程序路径
         * @param sendMessageImg 气泡消息图片
         */


        openCustomerServiceConversation(sessionFrom = "", success = null, fail = null, complete = null, showMessageCard = false, sendMessageTitle = null, sendMessagePath = null, sendMessageImg = null) {
          let baseVer = '2.0.3';

          if (this.compareSdkVersion(baseVer, this._sdkVersion) > 0) {
            this.showModelNotKeep();
            return;
          }

          this.wxSdk.openCustomerServiceConversation({
            sessionFrom: sessionFrom,
            success: success,
            fail: fail,
            complete: complete,
            showMessageCard: showMessageCard,
            sendMessageTitle: sendMessageTitle,
            sendMessagePath: sendMessagePath,
            sendMessageImg: sendMessageImg
          });
        }
        /**
         * 比较sdk版本号
         * @param v1 要比对的版本号
         * @param v2 
         * @returns number 0 相等 1：v1>v2 -1:v1<v2
         */


        compareSdkVersion(v1, v2) {
          let v1Sum = v1.split('.');
          let v2Sum = v2.split('.');
          let len = Math.max(v1Sum.length, v2Sum.length);

          while (v1Sum.length < len) {
            v1Sum.push('0');
          }

          while (v2Sum.length < len) {
            v2Sum.push('0');
          }

          for (let i = 0; i < len; i++) {
            let num1 = parseInt(v1Sum[i]);
            let num2 = parseInt(v2Sum[i]);

            if (num1 > num2) {
              return 1;
            } else if (num1 < num2) {
              return -1;
            }
          }

          return 0;
        }
        /** 当版本不支持时显示提示 */


        showModelNotKeep() {
          this.showModal({
            title: '提示',
            content: '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。'
          });
        }
        /************************ wx.websocket ************************ */

        /**
         * 创建一个 WebSocket 连接。需要小程序基础库版本不低于 1.9.6
         * @param url 开发者服务器 wss 接口地址	'wss://example.qq.com','ws://example.qq.com',
         * @param timeout 超时时间 单位毫秒
         * @param success 接口调用成功的回调函数
         * @param fail 接口调用失败的回调函数
         * @param header HTTP Header，Header 中不能设置 Referer
         * @param complete 接口调用结束的回调函数（调用成功、失败都会执行）
         * @param protocols 子协议数组 SdkVer>=1.4.0
         * @param tcpNoDelay 建立 TCP 连接的时候的 TCP_NODELAY设置 SdkVer>=2.4.0
         * @param perMessageDeflate 是否开启压缩扩展	SdkVer>=2.8.0
         * @returns 
         */


        connectSocket(url, success = null, fail = null, complete = null, header = null, timeout = null, protocols = null, tcpNoDelay = false, perMessageDeflate = false) {
          let baseVer = '1.9.6';

          if (this.compareSdkVersion(baseVer, this._sdkVersion) > 0) {
            this.showModelNotKeep();
            return null;
          }

          let _body = {
            url: url,
            success: success,
            fail: fail,
            complete: complete,
            timeout: timeout,
            header: {
              "Sec-WebSocket-Protocol": 'chat'
            },
            tcpNoDelay: tcpNoDelay,
            perMessageDeflate: perMessageDeflate
          };
          console.log("connectSocket：请求连接的数据:", _body);
          return this.wxSdk.connectSocket(_body);
        }
        /**
         * 关闭 WebSocket 连接。
         * 注意:
         * 	如果 wx.connectSocket 还没回调 wx.onSocketOpen，
         * 	而先调用 wx.closeSocket，那么就做不到关闭 WebSocket 的目的。必须在 WebSocket 打开期间调用 wx.closeSocket 才能关闭。
         * @param code 一个数字值表示关闭连接的状态号，表示连接被关闭的原因。1000（表示正常关闭连接），
         * @param reason 一个可读的字符串，表示连接被关闭的原因。这个字符串必须是不长于 123 字节的 UTF-8 文本（不是字符）。
         * @param success 接口调用成功的回调函数
         * @param fail 接口调用失败的回调函数
         * @param complete 接口调用结束的回调函数（调用成功、失败都会执行）
         * @returns 
         */


        closeSocket(code = 1000, reason = "", success = null, fail = null, complete = null) {
          let baseVer = '1.9.6';

          if (this.compareSdkVersion(baseVer, this._sdkVersion) > 0) {
            this.showModelNotKeep();
            return null;
          }

          return this.wxSdk.connectSocket({
            code: code,
            reason: reason,
            success: success,
            fail: fail,
            complete: complete
          });
        }
        /**
         * 发起米大师支付
         * @param buyQuantity model=game时 购买游戏币的数量(不可任意填写。需满足 buyQuantity * 游戏币单价 = 限定的价格等级)
         * @param offerId 在米大师侧申请的应用 id
         * @param env 环境（0:正式 1:沙箱）
         * @param zoneId 分区ID
         * @param success 接口调用成功的回调函数 ({errMsg = ?})=>void
         * @param fail 接口调用失败的回调函数
         * @param complete 接口调用结束的回调函数（调用成功、失败都会执行）
         */


        requestMidasPayment(buyQuantity, offerId, env = 0, zoneId = "1", success = null, fail = null, complete = null) {
          let obj = {
            buyQuantity: buyQuantity,
            offerId: offerId,
            env: env || 0,
            currencyType: "CNY",
            mode: "game",
            platform: "android",
            zoneId: zoneId,
            success: success,
            fail: fail,
            complete: complete
          };
          console.log("请求参数");
          console.log(obj);
          this.wxSdk.requestMidasPayment(obj);
        }

        /**
         * 获取网络类型
         * @param success 接口调用成功的回调函数 
         * 			({
         * 				networkType:string = ?,网络类型
         * 				signalStrength:number,信号强弱，单位 dbm
         * 				hasSystemProxy:boolean 设备是否使用了网络代理
         * 				})=>void
         * 				
         * @param fail 接口调用失败的回调函数
         * @param complete 接口调用结束的回调函数（调用成功、失败都会执行）
         */
        getNetworkType(success = null, fail = null, complete = null) {
          this.wxSdk.getNetworkType({
            success: success,
            fail: fail,
            complete: complete
          });
        }
        /**
         * 监听网络状态变化事件
         * @param callback  ({isConnected:boolean,networkType:string})>{}
         * 					isConnected:当前是否有网络连接 
         * 					networkType:网络类型(wifi:wifi网络,2g:2g网络,3g:3g网络,4g:4g网络,5g:5g网络,unknown:Android 下不常见的网络类型,none:无网络)
         */


        onNetworkStatusChange(callback) {
          this.wxSdk.onNetworkStatusChange(callback);
        }

        /**
         * 对用户托管数据进行写数据操作。允许同时写多组 KV 数据
         * 托管数据的限制
         *   每个 openid 所标识的微信用户在每个游戏上托管的数据不能超过128个 key-value 对。
         *   上报的 key-value 列表当中每一项的key+value长度都不能超过1K(1024)字节。
         *   上报的 key-value 列表当中每一个 key 长度都不能超过128字节。
         * @param KVDataList 要修改的 KV 数据列表
         * @param success 
         * @param fail 
         * @param complete 
         */
        setUserCloudStorage(KVDataList, success = null, fail = null, complete = null) {
          let baseVer = '1.9.92';

          if (this.compareSdkVersion(baseVer, this._sdkVersion) > 0) {
            this.showModelNotKeep();
            return null;
          }

          this.wxSdk.setUserCloudStorage({
            KVDataList: KVDataList,
            success: success,
            fail: fail,
            complete: complete
          });
        }
        /**
         * 获取当前用户托管数据当中对应 key 的数据。该接口只可在开放数据域下使用
         * @param keyList 要获取的 key 列表
         * @param success 成功的回调 参数：Array<__InterFace_WXSdk_KVData>
         * @param fail 
         * @param complete 
         */


        getUserCloudStorage(keyList, success = null, fail = null, complete = null) {
          let baseVer = '1.9.92';

          if (this.compareSdkVersion(baseVer, this._sdkVersion) > 0) {
            this.showModelNotKeep();
            return null;
          }

          this.wxSdk.getUserCloudStorage({
            keyList: keyList,
            success: success,
            fail: fail,
            complete: complete
          });
        }
        /**
         * 获取开放的数据域
         * @returns OpenDataContext
         */


        getOpenDataContext() {
          let baseVer = '1.9.92';

          if (this.compareSdkVersion(baseVer, this._sdkVersion) > 0) {
            this.showModelNotKeep();
            return null;
          }

          return this.wxSdk.getOpenDataContext();
        }
        /**
         * 向开放的数据域发送消息
         * @param message 要发送的消息，message 中及嵌套对象中 key 的 value 只能是 primitive value。即 number、string、boolean、null、undefined。 
         */


        postMessage(message) {
          let openDataContext = this.getOpenDataContext();

          if (openDataContext && typeof message == "object") {
            // console.log("向开放的数据域发送消息", message)
            openDataContext.postMessage(message);
          }
        }
        /**
         * 调起客户端小程序订阅消息界面，返回用户订阅消息的操作结果。
         * 当用户勾选了订阅面板中的“总是保持以上选择，不再询问”时，
         * 模板消息会被添加到用户的小程序设置页，
         * 通过 wx.getSetting 接口可获取用户对相关模板消息的订阅状态。
         * 注意事项:
         *   一次性模板 id 和永久模板 id 不可同时使用。
         *   低版本基础库2.4.4~2.8.3 已支持订阅消息接口调用，仅支持传入一个一次性 tmplId / 永久 tmplId。
         *   2.8.2 版本开始，用户发生点击行为或者发起支付回调后，才可以调起订阅消息界面。
         *   2.10.0 版本开始，开发版和体验版小程序将禁止使用模板消息 formId。
         *   一次授权调用里，每个 tmplId 对应的模板标题不能存在相同的，若出现相同的，只保留一个。
         *   2.10.0 版本开始，支持订阅语音消息提醒，
         * @param tmplIds Array<string> 需要订阅的消息模板的 id 的集合，
         *                            一次调用最多可订阅3条消息
         * 				（注意：iOS客户端7.0.6版本、Android客户端7.0.7版本之后的一次性订阅/长期订阅才支持多个模板消息，iOS客户端7.0.5版本、Android客户端7.0.6版本之前的一次订阅只支持一个模板消息）消息模板 id 在[微信公众平台(mp.weixin.qq.com)-功能 - 订阅消息]中配置。每个 tmplId 对应的模板标题需要不相同，否则会被过滤。
         * @param success 成功的回调 返回参数 object{errMsg:string,TEMPLATE_ID: string} 接口调用成功时 errMsg 值为'requestSubscribeMessage:ok'
         * @param fail 失败的回调 返回参数 object{errMsg:string,errCode: number}
         * @param complete 成功或失败都会的回调
         *  https://developers.weixin.qq.com/miniprogram/dev/api/open-api/subscribe-message/wx.requestSubscribeMessage.html
         * @returns 
         */


        requestSubscribeMessage(tmplIds, success = null, fail = null, complete = null) {
          let baseVer = '2.4.4';

          if (this.compareSdkVersion(baseVer, this._sdkVersion) > 0) {
            console.log(`error 请求【wx.requestSubscribeMessage】失败 版本不支持 当前版本${this._sdkVersion}`);
            return null;
          }

          this.wxSdk.requestSubscribeMessage({
            tmplIds: tmplIds || [],
            success: success,
            fail: fail,
            complete: complete
          });
        }
        /**
         * 使手机发生较短时间的振动（15 ms）。仅在 iPhone 7 / 7 Plus 以上及 Android 机型生效
         * @param type 详见 WXSdk_VibrateShortType定义
         * @param success 成功的回调
         * @param fail 失败的回调 {errMsg:"style is not support"}
         * @param complete 提交成功的回调
         * @returns 
         */


        vibrateShort(type = (_crd && WXSdk_VibrateShortType === void 0 ? (_reportPossibleCrUseOfWXSdk_VibrateShortType({
          error: Error()
        }), WXSdk_VibrateShortType) : WXSdk_VibrateShortType).heavy, success = null, fail = null, complete = null) {
          let baseVer = '1.9.6';

          if (this.compareSdkVersion(baseVer, this._sdkVersion) > 0) {
            console.log(`error 请求【wx.vibrateShort】失败 版本不支持 当前版本${this._sdkVersion}`);
            return null;
          }

          this.wxSdk.vibrateShort({
            type: type,
            success: success,
            fail: fail,
            complete: complete
          });
        }
        /**
         * 使手机发生较长时间的振动（400 ms)
         * @param success 成功的回调
         * @param fail 失败的回调 {errMsg:"style is not support"}
         * @param complete 提交成功的回调
         * @returns 
         */


        vibrateLong(success = null, fail = null, complete = null) {
          let baseVer = '1.9.6';

          if (this.compareSdkVersion(baseVer, this._sdkVersion) > 0) {
            console.log(`error 请求【wx.vibrateLong】失败 版本不支持 当前版本${this._sdkVersion}`);
            return null;
          }

          this.wxSdk.vibrateLong({
            success: success,
            fail: fail,
            complete: complete
          });
        }
        /**
         * 获取实时日志管理器
         * RealtimeLogManager.info()
         * 写 info 日志，暂不支持在插件使用
         * RealtimeLogManager.warn()
         * 写 warn 日志，暂不支持在插件使用
         * RealtimeLogManager.error()
         * 写 error 日志，暂不支持在插件使用
         * RealtimeLogManager.setFilterMsg(string msg)
         * 设置过滤关键字，暂不支持在插件使用
         * RealtimeLogManager.addFilterMsg(string msg)
         * @returns 
         */


        getRealtimeLogManager() {
          if (this._realtimeLogManager) {
            return this._realtimeLogManager;
          }

          let baseVer = '2.14.4';

          if (this.compareSdkVersion(baseVer, this._sdkVersion) > 0) {
            console.log(`error 请求【wx.getRealtimeLogManager 】失败 版本不支持 当前版本${this._sdkVersion}`);
            this._realtimeLogManager = null;
            return null;
          }

          this._realtimeLogManager = this.wxSdk.getRealtimeLogManager();
          return this._realtimeLogManager;
        }
        /**
         * 获取全局唯一的文件管理器
         * @returns 
         */


        getFileSystemManager() {
          if (this._fileSystemManager) {
            return this._fileSystemManager;
          }

          if (!this.wxSdk.getFileSystemManager) {
            return null;
          }

          this._fileSystemManager = this.wxSdk.getFileSystemManager();
          return this._fileSystemManager;
        }
        /**
         * 设置是否打开调试开关。此开关对正式版也能生效。
         * 基础库 1.4.0 开始支持
         * @param enableDebug 是否开启
         * @param success 
         * @param fail 
         * @param complete 
         * @returns 
         */


        setEnableDebug(enableDebug, success = null, fail = null, complete = null) {
          let baseVer = '1.4.0';

          if (this.compareSdkVersion(baseVer, this._sdkVersion) > 0) {
            console.log(`error 请求【wx.setEnableDebug 】失败 版本不支持 当前版本${this._sdkVersion}`);
            return null;
          }

          this.wxSdk.setEnableDebug({
            enableDebug: enableDebug,
            success: success,
            fail: fail,
            complete: complete
          });
        }
        /**
         * 下载文件资源到本地。客户端直接发起一个 HTTPS GET 请求，返回文件的本地临时路径 (本地路径)，单次下载允许的最大文件为 200MB。
         * @param url  传入的图片链接
         * @param timeout  超时时间，单位为毫秒 >=2.10.0
         * @param filePath 指定文件下载后存储的路径 (本地路径) >=1.8.0
         * @param success  成功的回调 = {
         * 		tempFilePath:string	临时文件路径 (本地路径)。没传入 filePath 指定文件存储路径时会返回，下载后的文件会存储到一个临时文件	
         * 	    filePath:string	用户文件路径 (本地路径)。传入 filePath 时会返回，跟传入的 filePath 一致	
         * 	    statusCode:number	开发者服务器返回的 HTTP 状态码	
         * 	    profile:Object	网络请求过程中一些调试信息，查看详细说明
         *  }
         * @param fail 失败的回调
         * @param complete 提交成功的回调
         * @returns 
         */


        downloadFile(url, timeout = 5000, filePath = null, success = null, fail = null, complete = null) {
          this.wxSdk.downloadFile({
            url: url,
            timeout: timeout,
            filePath: filePath,
            success: success,
            fail: fail,
            complete: complete
          });
        }
        /**
         * 创建激励视频实例
         * 激励视频广告组件是由客户端原生的图片、文本、视频控件组成的，层级最高，会覆盖在上屏 Canvas 上。
         * 开发者可以调用 wx.createRewardedVideoAd 创建激励视频广告组件。该方法返回的是一个全局单例。
         * 激励视频广告组件是自动拉取广告并进行更新的。在组件创建后会拉取一次广告，用户点击 关闭广告 后会去拉取下一条广告。
         * @param adUnitId 广告位ID
         * @param success 成功预加载的回调
         * @param fail 加载失败的回调
         * @returns 
         */


        createRewardedVideoAd(adUnitId, success = null, fail = null, clickCloseFunc = null) {
          let baseVer = '2.0.4';

          if (this.compareSdkVersion(baseVer, this._sdkVersion) > 0) {
            console.log(`error 请求【wx.createRewardedVideoAd 】失败 版本不支持 当前版本${this._sdkVersion}`);
            return null;
          }

          if (this._adRewardedVideo) {
            return;
          }

          this._adRewardedVideo = this.wxSdk.createRewardedVideoAd({
            adUnitId: adUnitId
          });
          this.addRewardedVideoAdListener(success, fail, clickCloseFunc, true);
        }
        /** 添加激励视频监听 */


        addRewardedVideoAdListener(success = null, fail = null, clickCloseFunc = null, isInit = false) {
          if (this._adRewardedVideo) {
            WXSdk.instance.VideoCallFunc.onLoad = success;
            WXSdk.instance.VideoCallFunc.onError = fail;
            WXSdk.instance.VideoCallFunc.onClickClose = clickCloseFunc;
            WXSdk.instance.VideoCallFunc.isReturn = false;
            WXSdk.instance.VideoCallFunc.isClick = false; //已经绑定了回调的不再绑定了

            if (isInit == false) {
              return;
            }

            this._adRewardedVideo.onLoad(param => {
              console.log(`【广告】激励视频加载成功`);

              if (WXSdk.instance.VideoCallFunc.onLoad && WXSdk.instance.VideoCallFunc.isReturn == false) {
                WXSdk.instance.VideoCallFunc.isReturn = true;
                WXSdk.instance.VideoCallFunc.onLoad();
              }
            });

            this._adRewardedVideo.onError(res => {
              console.log(`【广告】 激励视频加载失败`, res);

              if (WXSdk.instance.VideoCallFunc.onError && WXSdk.instance.VideoCallFunc.isReturn == false) {
                WXSdk.instance.VideoCallFunc.isReturn = true;
                WXSdk.instance.VideoCallFunc.onError;
              }
            }); // 用户点击了【关闭广告】按钮


            this._adRewardedVideo.onClose(res => {
              // 小于 2.1.0 的基础库版本，res 是一个 undefined
              if (res && res.isEnded || res === undefined) {
                // 正常播放结束，可以下发游戏奖励
                console.log("【广告】用户点击关闭 正常播放结束", WXSdk.instance.VideoCallFunc);

                if (WXSdk.instance.VideoCallFunc.onClickClose && WXSdk.instance.VideoCallFunc.isClick == false) {
                  WXSdk.instance.VideoCallFunc.onClickClose(true);
                }
              } else {
                // 播放中途退出，不下发游戏奖励
                console.log("【广告】用户点击关闭 播放中途退出", WXSdk.instance.VideoCallFunc);

                if (WXSdk.instance.VideoCallFunc.onClickClose && WXSdk.instance.VideoCallFunc.isClick == false) {
                  WXSdk.instance.VideoCallFunc.onClickClose(false);
                }
              }

              WXSdk.instance.VideoCallFunc.isClick = true;
            });
          }
        }
        /**
         * 播放激励视频广告
         * @param success 成功加载的回调
         * @param fail 加载失败的回调
         * @param clickCloseCallback 用户点击关闭的结果回调 (res:boolean | null)=>{}
         * @returns 
         */


        playRewardedVideoShow(success = null, fail = null, clickCloseCallback = null) {
          if (!this._adRewardedVideo) {
            console.log("【广告】播放失败 未初始化");

            if (fail) {
              fail();
            }

            return;
          }

          this.addRewardedVideoAdListener(success, fail, clickCloseCallback);

          this._adRewardedVideo.show().catch(err => {
            this._adRewardedVideo.load().then(() => this._adRewardedVideo.show());
          });
        }
        /**
         * 获取小游戏冷启动时的参数。热启动参数通过 wx.onShow 接口获取
         * @returns __InterFace_WXSdk_GetLaunchOptionsSync
         */


        getLaunchOptionsSync() {
          let baseVer = '2.1.2';

          if (this.compareSdkVersion(baseVer, this._sdkVersion) > 0) {
            console.log(`error 请求【wx.getLaunchOptionsSync 】失败 版本不支持 当前版本${this._sdkVersion}`);
            return null;
          }

          if (this.wxSdk["getLaunchOptionsSync"]) {
            return this.wxSdk.getLaunchOptionsSync();
          }

          return null;
        }
        /**
         * 获取小游戏进入时的参数。包含冷启动和热启动
         * @returns __InterFace_WXSdk_GetLaunchOptionsSync
         */


        getEnterOptionsSync() {
          let baseVer = '2.13.2';

          if (this.compareSdkVersion(baseVer, this._sdkVersion) > 0) {
            console.log(`error 请求【wx.getEnterOptionsSync 】失败 版本不支持 当前版本${this._sdkVersion}`);
            return null;
          }

          if (this.wxSdk["getEnterOptionsSync"]) {
            return this.wxSdk.getEnterOptionsSync();
          }

          return null;
        }
        /**
         * 设置是否保持常亮状态。仅在当前小程序生效，离开小程序后设置失效
         * @param isLight 是否常量 true or false
         * @param success 
         * @param fail 
         * @param complete 
         * @returns 
         */


        setKeepScreenOn(isLight, success = null, fail = null, complete = null) {
          let baseVer = '1.4.0';

          if (this.compareSdkVersion(baseVer, this._sdkVersion) > 0) {
            console.log(`error 请求【wx.setKeepScreenOn 】失败 版本不支持 当前版本${this._sdkVersion}`);
            return null;
          }

          if (this.wxSdk["setKeepScreenOn"]) {
            this.wxSdk.setKeepScreenOn({
              keepScreenOn: isLight,
              success: success,
              fail: fail,
              complete: complete
            });
          }
        }

      });

      WXSdk._instance = null;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=32594572755e0b0bf1e2419e568d412d9d53e5f8.js.map