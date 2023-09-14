System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Button, EditBox, Node, Toggle, Widget, _decorator, GCache, AppEvent, AppSound, GConstants, StoreKey, GameRes, UIID, LocalStorage, Logger, AudioManager, EventManager, Utils, BaseComponent, Platform, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _crd, ccclass, property, menu, loginCtr;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfGCache(extras) {
    _reporterNs.report("GCache", "../../../cache/GCache", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAppEvent(extras) {
    _reporterNs.report("AppEvent", "../../../config/AppEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAppSound(extras) {
    _reporterNs.report("AppSound", "../../../config/AppSound", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGConstants(extras) {
    _reporterNs.report("GConstants", "../../../config/GameConstant", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStoreKey(extras) {
    _reporterNs.report("StoreKey", "../../../config/GameConstant", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameRes(extras) {
    _reporterNs.report("GameRes", "../../../config/GameRes", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIID(extras) {
    _reporterNs.report("UIID", "../../../config/UIConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfinf_LoginViewInfo(extras) {
    _reporterNs.report("inf_LoginViewInfo", "../../../framework/InterfaceDefines", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLocalStorage(extras) {
    _reporterNs.report("LocalStorage", "../../../framework/LocalStorage", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLogger(extras) {
    _reporterNs.report("Logger", "../../../framework/log/Logger", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioManager(extras) {
    _reporterNs.report("AudioManager", "../../../framework/manager/AudioManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventManager(extras) {
    _reporterNs.report("EventManager", "../../../framework/manager/EventManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUtils(extras) {
    _reporterNs.report("Utils", "../../../framework/Utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../../framework/vc/BaseComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlatform(extras) {
    _reporterNs.report("Platform", "../../../platform/Platform", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Button = _cc.Button;
      EditBox = _cc.EditBox;
      Node = _cc.Node;
      Toggle = _cc.Toggle;
      Widget = _cc.Widget;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      GCache = _unresolved_2.GCache;
    }, function (_unresolved_3) {
      AppEvent = _unresolved_3.AppEvent;
    }, function (_unresolved_4) {
      AppSound = _unresolved_4.AppSound;
    }, function (_unresolved_5) {
      GConstants = _unresolved_5.GConstants;
      StoreKey = _unresolved_5.StoreKey;
    }, function (_unresolved_6) {
      GameRes = _unresolved_6.GameRes;
    }, function (_unresolved_7) {
      UIID = _unresolved_7.UIID;
    }, function (_unresolved_8) {
      LocalStorage = _unresolved_8.LocalStorage;
    }, function (_unresolved_9) {
      Logger = _unresolved_9.Logger;
    }, function (_unresolved_10) {
      AudioManager = _unresolved_10.AudioManager;
    }, function (_unresolved_11) {
      EventManager = _unresolved_11.EventManager;
    }, function (_unresolved_12) {
      Utils = _unresolved_12.Utils;
    }, function (_unresolved_13) {
      BaseComponent = _unresolved_13.BaseComponent;
    }, function (_unresolved_14) {
      Platform = _unresolved_14.Platform;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "84b18jVGShBZZzveid91O2J", "loginCtr", undefined);

      __checkObsolete__(['Button', 'EditBox', 'EventTouch', 'Node', 'Toggle', 'Widget', '_decorator']);

      ({
        ccclass,
        property,
        menu
      } = _decorator);
      /**
       * Name = loginCtr
       * URL = db://assets/package/login/scripts/loginCtr.ts
       * Time = Tue Sep 06 2022 14:45:40 GMT+0800 (中国标准时间)
       * Author = Tomoe
       *
       * Life: onLoad-->onEnable->start->update->lateUpdate->onDisable->onDestroy
       */

      _export("loginCtr", loginCtr = (_dec = ccclass('loginCtr'), _dec2 = menu('prefab/login/loginCtr'), _dec3 = property({
        tooltip: "开始游戏按钮组件",
        type: Button
      }), _dec4 = property({
        tooltip: "输入框节点",
        type: Node
      }), _dec5 = property({
        tooltip: "输入框",
        type: EditBox
      }), _dec6 = property({
        tooltip: "用户协议和隐私政策勾选框",
        type: Toggle
      }), _dec(_class = _dec2(_class = (_class2 = class loginCtr extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        //开始游戏按钮节点
        //输入框节点
        //输入框
        //用户协议和隐私政策勾选框
        //wx平台的授权按钮
        //wx平台的授权按钮上次的显示状态
        //登录传递的参数
        //是否是微信登录
        //上次登录的错误吗
        constructor() {
          super();

          _initializerDefineProperty(this, "btnLogin", _descriptor, this);

          _initializerDefineProperty(this, "editBoxNode", _descriptor2, this);

          _initializerDefineProperty(this, "editBox", _descriptor3, this);

          _initializerDefineProperty(this, "toggleAgreeGou", _descriptor4, this);

          this.isChangeScene = false;
          this.autoSettingButton = null;
          this.autoSettingButtonVisible = false;
          this.loginParam = {
            access_token: null,
            openId: null,
            userinfo: null
          };
          this._isWxLogin = false;
          this._lastLoginFailCode = 0;

          if ((_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
            error: Error()
          }), GCache) : GCache).firstRunLoadSuccess) {
            (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
              error: Error()
            }), AudioManager) : AudioManager).getInstance().releaseAll();
          }

          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).SYS_PLAY_MUSIC, (_crd && AppSound === void 0 ? (_reportPossibleCrUseOfAppSound({
            error: Error()
          }), AppSound) : AppSound).BgHall);
        }
        /** overload */


        onInitModuleEvent() {
          //授权按钮创建成功/授权成功
          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).PLATFORM_AUTHSETTING_UPDATE, this.respAuthButtonCreator); //平台登录失败

          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).LOGIN_PLATFORM_FAIL, this.respPlatformFail); //平台获取数据成功

          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).LOGIN_PLATFORM_SUCCESS, this.respPlatformSuccess); //用户隐私同意状态有更新

          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).LOGIN_AGREE_PRIVATE, this.respUserAgreePrivate);
        }

        onLoad() {
          //设置授权按钮的坐标
          this.btnLogin.node.getComponent(Widget).updateAlignment();
          (_crd && Platform === void 0 ? (_reportPossibleCrUseOfPlatform({
            error: Error()
          }), Platform) : Platform).WxAuthSettingButtonParam = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).node_PositionSizeToScreen(this.btnLogin.node);
          (_crd && Platform === void 0 ? (_reportPossibleCrUseOfPlatform({
            error: Error()
          }), Platform) : Platform).WxAuthSettingButtonParam["img"] = (_crd && GameRes === void 0 ? (_reportPossibleCrUseOfGameRes({
            error: Error()
          }), GameRes) : GameRes).AppCommon_Login_WX.path;
          this._isWxLogin = (_crd && Platform === void 0 ? (_reportPossibleCrUseOfPlatform({
            error: Error()
          }), Platform) : Platform).isWXPlatform();
          this.updateLoginButtonVisible(false);
          this.editBoxNode.active = false;
          this.loginParam = {
            access_token: null,
            openId: null,
            userinfo: null
          };
          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).LOGIN_SEND_SHOW, this.onReceiveLoginData);
        }

        start() {}

        //获取用户协议与隐私政策同意状态 
        checkIsAgree() {
          let res = (_crd && LocalStorage === void 0 ? (_reportPossibleCrUseOfLocalStorage({
            error: Error()
          }), LocalStorage) : LocalStorage).get((_crd && StoreKey === void 0 ? (_reportPossibleCrUseOfStoreKey({
            error: Error()
          }), StoreKey) : StoreKey).LOGIN_LAST_CHECK_AGREE, false);
          console.log("获取用户协议与隐私政策同意状态===>", res);

          if (!res) {
            let callbackArgs = {
              onAdded: (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                error: Error()
              }), Utils) : Utils).handler(this, this.onCallbackOpenView),
              onRemoved: (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                error: Error()
              }), Utils) : Utils).handler(this, this.onCallbackCloseView)
            };
            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
              error: Error()
            }), AppEvent) : AppEvent).VIEW_UI_OPEN, (_crd && UIID === void 0 ? (_reportPossibleCrUseOfUIID({
              error: Error()
            }), UIID) : UIID).UserAgreePrivate, null, callbackArgs);
          }

          this.toggleAgreeGou.isChecked = res;
          return res;
        } //二级页面的打开回调


        onCallbackOpenView() {
          this.updateLoginButtonVisible(false);
        } //二级页面的关闭回调


        onCallbackCloseView() {
          this.updateLoginButtonVisible(true);
        } //开始登录


        startLogin() {
          if (this.loginParam.access_token == null) {
            this.editBoxNode.active = this._isWxLogin == false;
            this.updateLoginButtonVisible(true);
            return;
          }
          /** 判断是否同意用户协议与隐私政策 */


          let isAgree = this.checkIsAgree();

          if (isAgree) {
            //发送登录命令
            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
              error: Error()
            }), AppEvent) : AppEvent).NET_GOTO_START_LOGIN, this.loginParam);
          } // GCache.User.cleanLastlocalLoginInfo();
          // if (this.toggleAgree.isChecked == false) {
          // 	this.editBoxNode.active = (this._isWxLogin == false);
          // 	this.updateLoginButtonVisible(true);
          // 	EventManager.dispatch(AppEvent.SYS_TOAST_TIP, { content: GameTxt.loginCheckAgree });
          // 	return;
          // }
          //* 注意:若上次记录的token和本次不一致 则清空上次的登录记录
          // let lastKey = GCache.User.getLastlocalLoginToken();
          // if (!this._isWxLogin) {
          // 	lastKey = GCache.User.getLastLoginValueByKey("guid", null);
          // }
          // if (lastKey != this.loginParam.openId) {
          // GCache.User.cleanLastlocalLoginInfo();
          // }

        }
        /** 外部传递的事件 */


        onReceiveLoginData(event, param) {
          console.log("登录界面:外部传递 刷新UI", param); //执行到这 肯定加载完毕了

          this.updateLoginView();
        }
        /** 加载结束之后 */


        updateLoginView() {
          if (this._isWxLogin) {
            this.editBox.string = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).nullToDefault((_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
              error: Error()
            }), GCache) : GCache).User.getLastlocalLoginToken(), "");
          } else {
            let access_token = (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
              error: Error()
            }), GCache) : GCache).User.getLastLoginValueByKey("guid");
            this.editBox.string = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).nullToDefault(access_token, "");
            this.loginParam.access_token = access_token;
          }
          /** 先判断是否有登录成功的记录 */


          let lastLoginInfo = (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
            error: Error()
          }), GCache) : GCache).User.getLastlocalLoginInfo();
          this.print("updateLoginView", "lastLoginInfo", lastLoginInfo);
          /** 判断是否同意用户协议与隐私政策 */

          let isAgree = this.checkIsAgree();
          this.print("updateLoginView", "isAgree", isAgree);

          if (isAgree && lastLoginInfo && (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
            error: Error()
          }), GCache) : GCache).User.getLoginState() == (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
            error: Error()
          }), GConstants) : GConstants).UserLoginState.None) {
            (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
              error: Error()
            }), Logger) : Logger).logView("[Login] 检测到有上次登录历史，开始自动登录");
            this.updateLoginButtonVisible(false);
            this.editBoxNode.active = false;
            this.loginParam = {
              access_token: null,
              openId: null,
              userinfo: null
            };

            if (this._isWxLogin) {
              this.loginParam.access_token = (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
                error: Error()
              }), GCache) : GCache).User.getLastlocalLoginToken();

              if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                error: Error()
              }), Utils) : Utils).string_isEmpty(this.loginParam.access_token) == false && (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                error: Error()
              }), Utils) : Utils).string_isEmpty(this.loginParam.openId) == false) {
                (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
                  error: Error()
                }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
                  error: Error()
                }), AppEvent) : AppEvent).NET_GOTO_START_LOGIN, this.loginParam);
                return;
              }
            } else {
              this.loginParam.access_token = (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
                error: Error()
              }), GCache) : GCache).User.getLastLoginValueByKey("guid");

              if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                error: Error()
              }), Utils) : Utils).string_isEmpty(this.loginParam.access_token) == false) {
                (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
                  error: Error()
                }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
                  error: Error()
                }), AppEvent) : AppEvent).NET_GOTO_START_LOGIN, this.loginParam);
                return;
              }
            }
          } //走到这了 肯定不能自动登录 清除快捷登录token


          (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
            error: Error()
          }), GCache) : GCache).User.cleanLastlocalLoginToken();

          if (this._isWxLogin) {
            this.editBoxNode.active = false;

            if (isAgree == false) {
              this.loginParam = {
                access_token: null,
                openId: (_crd && Platform === void 0 ? (_reportPossibleCrUseOfPlatform({
                  error: Error()
                }), Platform) : Platform).WxLoginCode,
                userinfo: null
              };
              this.updateLoginButtonVisible(true);
              return;
            }

            if ((_crd && Platform === void 0 ? (_reportPossibleCrUseOfPlatform({
              error: Error()
            }), Platform) : Platform).WxLoginCode) {
              this.loginParam = {
                access_token: null,
                openId: (_crd && Platform === void 0 ? (_reportPossibleCrUseOfPlatform({
                  error: Error()
                }), Platform) : Platform).WxLoginCode,
                userinfo: null
              };
              this.updateLoginButtonVisible(true);
            } else {
              this.updateLoginButtonVisible(false); //请求平台获取用户信息

              (_crd && Platform === void 0 ? (_reportPossibleCrUseOfPlatform({
                error: Error()
              }), Platform) : Platform).reqPlatformLoginInfo();
            }
          } else {
            this.updateLoginButtonVisible(true);
            this.editBoxNode.active = true;
          }
        } //平台返回的登录失败


        respPlatformFail(event, errorCode) {
          (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
            error: Error()
          }), Logger) : Logger).logView(`平台返回的登录失败 errorCode = ${errorCode}`);
          this._lastLoginFailCode = errorCode;

          if (errorCode <= (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
            error: Error()
          }), GConstants) : GConstants).LoginStateCode.platform_fail_wx_access_token_error) {
            //全是wx平台的错误
            if (errorCode == (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
              error: Error()
            }), GConstants) : GConstants).LoginStateCode.platform_fail_wx_notAuthSetting) {//未取得授权
            } else {//其他错误
            }

            this.loginParam = {
              access_token: null,
              openId: null,
              userinfo: null
            };
            this.updateLoginButtonVisible(true);
          }
        } //平台获取用户信息成功


        respPlatformSuccess(event, param) {
          (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
            error: Error()
          }), Logger) : Logger).logView("平台获取登录信息成功===>");
          (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
            error: Error()
          }), Logger) : Logger).table(param);
          this.updateLoginButtonVisible(false);
          this.loginParam = param; //暂时直接登录成功

          this.startLogin();
        } //用户隐私协议状态有更新


        respUserAgreePrivate(event, state) {
          this.toggleAgreeGou.isChecked = state;
        } //授权按钮创建成功/授权成功


        respAuthButtonCreator(event, button) {
          if (button) {
            this.updateLoginButtonVisible(true);
          } else {
            //授权成功销毁
            this.updateLoginButtonVisible();

            if ((_crd && Platform === void 0 ? (_reportPossibleCrUseOfPlatform({
              error: Error()
            }), Platform) : Platform).WxAuthSettingUserInfo == 1) {
              //授权成功
              (_crd && Platform === void 0 ? (_reportPossibleCrUseOfPlatform({
                error: Error()
              }), Platform) : Platform).reqPlatformLoginInfo(true);
            }
          }
        } //编辑结束


        updateEditBoxEnd() {
          this.editBox.string = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).nullToDefault((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).string_trim(this.editBox.string), "");
          this.editBox.string = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).nullToDefault((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).string_clearBr(this.editBox.string), "");
          this.loginParam = {
            access_token: this.editBox.string,
            openId: null,
            userinfo: null
          };
          this.startLogin();
        } //更新登录按钮的显示和隐藏状态


        updateLoginButtonVisible(visible) {
          if (this._isWxLogin == true) {
            (_crd && Platform === void 0 ? (_reportPossibleCrUseOfPlatform({
              error: Error()
            }), Platform) : Platform).updateWxAuthSettingButtonVisible(visible);

            if (this.node && this.node.isValid) {
              this.btnLogin.node.active = false;
            }
          } else {
            if (this.btnLogin.node && this.btnLogin.node.isValid) {
              this.btnLogin.node.active = visible;
            }
          }
        } //联系客服事件监听


        onClickKefu(event) {
          console.log("联系客服======>>");
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).SYS_PLAY_EFFECT, (_crd && AppSound === void 0 ? (_reportPossibleCrUseOfAppSound({
            error: Error()
          }), AppSound) : AppSound).CommClick);
          (_crd && Platform === void 0 ? (_reportPossibleCrUseOfPlatform({
            error: Error()
          }), Platform) : Platform).openCustomerServiceConversation();
        } //登录按钮事件监听


        onClickLogin(event) {
          // if (Utils.string_isEmpty(this.exidLabel.string)) {
          // alert("账号不能为空");
          // 	return;
          // }
          if (event && event.type == "touch-end") {
            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
              error: Error()
            }), AppEvent) : AppEvent).SYS_PLAY_EFFECT, (_crd && AppSound === void 0 ? (_reportPossibleCrUseOfAppSound({
              error: Error()
            }), AppSound) : AppSound).CommClick);

            if (this.loginParam.access_token == null) {
              if (this._isWxLogin) {
                this.updateLoginButtonVisible(false); //请求平台获取用户信息

                (_crd && Platform === void 0 ? (_reportPossibleCrUseOfPlatform({
                  error: Error()
                }), Platform) : Platform).reqPlatformLoginInfo();
              } else {
                this.updateEditBoxEnd();
              }
            } else {
              this.updateEditBoxEnd();
            }
          }
        } //点击了适龄提示


        onClickNotice(event) {
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).SYS_PLAY_EFFECT, (_crd && AppSound === void 0 ? (_reportPossibleCrUseOfAppSound({
            error: Error()
          }), AppSound) : AppSound).CommClick);
          let callbackArgs = {
            onAdded: (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).handler(this, this.onCallbackOpenView),
            onRemoved: (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).handler(this, this.onCallbackCloseView)
          };
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).VIEW_UI_OPEN, (_crd && UIID === void 0 ? (_reportPossibleCrUseOfUIID({
            error: Error()
          }), UIID) : UIID).PictureDialog, "适龄提示", callbackArgs);
        }
        /** 点击了用户协议和隐私政策的钩 */


        onClickUserAgreePrivate(event) {
          let state = !this.toggleAgreeGou.isChecked;
          console.log("点击了用户协议和隐私政策的钩" + state);
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).SYS_PLAY_EFFECT, (_crd && AppSound === void 0 ? (_reportPossibleCrUseOfAppSound({
            error: Error()
          }), AppSound) : AppSound).CommClick);
          (_crd && LocalStorage === void 0 ? (_reportPossibleCrUseOfLocalStorage({
            error: Error()
          }), LocalStorage) : LocalStorage).set((_crd && StoreKey === void 0 ? (_reportPossibleCrUseOfStoreKey({
            error: Error()
          }), StoreKey) : StoreKey).LOGIN_LAST_CHECK_AGREE, state);

          if (state == true) {
            (_crd && Platform === void 0 ? (_reportPossibleCrUseOfPlatform({
              error: Error()
            }), Platform) : Platform).onNeedPrivacyAuthorization_WX("exposureAuthorization");
            (_crd && Platform === void 0 ? (_reportPossibleCrUseOfPlatform({
              error: Error()
            }), Platform) : Platform).onNeedPrivacyAuthorization_WX("agree");
          }
        }
        /** 点击了用户协议 */


        onClickUserAgree(event) {
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).SYS_PLAY_EFFECT, (_crd && AppSound === void 0 ? (_reportPossibleCrUseOfAppSound({
            error: Error()
          }), AppSound) : AppSound).CommClick);
          let callbackArgs = {
            onAdded: (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).handler(this, this.onCallbackOpenView),
            onRemoved: (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).handler(this, this.onCallbackCloseView)
          };
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).VIEW_UI_OPEN, (_crd && UIID === void 0 ? (_reportPossibleCrUseOfUIID({
            error: Error()
          }), UIID) : UIID).UserAgreePrivate, {
            type: 1
          }, callbackArgs);
        }
        /** 点击了隐私政策 */


        onClickPrivate(event) {
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).SYS_PLAY_EFFECT, (_crd && AppSound === void 0 ? (_reportPossibleCrUseOfAppSound({
            error: Error()
          }), AppSound) : AppSound).CommClick);
          let callbackArgs = {
            onAdded: (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).handler(this, this.onCallbackOpenView),
            onRemoved: (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).handler(this, this.onCallbackCloseView)
          };
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).VIEW_UI_OPEN, (_crd && UIID === void 0 ? (_reportPossibleCrUseOfUIID({
            error: Error()
          }), UIID) : UIID).UserAgreePrivate, {
            type: 2
          }, callbackArgs);
        } //销毁


        onDestroy() {}

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "btnLogin", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "editBoxNode", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "editBox", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "toggleAgreeGou", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=1ee07d220835825cf21e30a48efc956f62921a60.js.map