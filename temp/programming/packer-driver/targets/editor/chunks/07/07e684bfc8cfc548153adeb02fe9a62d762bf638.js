System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Label, Node, Sprite, Toggle, _decorator, GCache, AppEvent, AppSound, GConstants, GameRes, ReportConfig, UIID, Utils, SpriteLoad, EventManager, BaseComponent, Platform, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _crd, ccclass, property, menu, prefab_playerCenter;

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

  function _reportPossibleCrUseOfGameRes(extras) {
    _reporterNs.report("GameRes", "../../../config/GameRes", _context.meta, extras);
  }

  function _reportPossibleCrUseOfReportConfig(extras) {
    _reporterNs.report("ReportConfig", "../../../config/ReportConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIID(extras) {
    _reporterNs.report("UIID", "../../../config/UIConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUtils(extras) {
    _reporterNs.report("Utils", "../../../framework/Utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSpriteLoad(extras) {
    _reporterNs.report("SpriteLoad", "../../../framework/gui/sprite/SpriteLoad", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventManager(extras) {
    _reporterNs.report("EventManager", "../../../framework/manager/EventManager", _context.meta, extras);
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
      Label = _cc.Label;
      Node = _cc.Node;
      Sprite = _cc.Sprite;
      Toggle = _cc.Toggle;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      GCache = _unresolved_2.GCache;
    }, function (_unresolved_3) {
      AppEvent = _unresolved_3.AppEvent;
    }, function (_unresolved_4) {
      AppSound = _unresolved_4.AppSound;
    }, function (_unresolved_5) {
      GConstants = _unresolved_5.GConstants;
    }, function (_unresolved_6) {
      GameRes = _unresolved_6.GameRes;
    }, function (_unresolved_7) {
      ReportConfig = _unresolved_7.ReportConfig;
    }, function (_unresolved_8) {
      UIID = _unresolved_8.UIID;
    }, function (_unresolved_9) {
      Utils = _unresolved_9.Utils;
    }, function (_unresolved_10) {
      SpriteLoad = _unresolved_10.default;
    }, function (_unresolved_11) {
      EventManager = _unresolved_11.EventManager;
    }, function (_unresolved_12) {
      BaseComponent = _unresolved_12.BaseComponent;
    }, function (_unresolved_13) {
      Platform = _unresolved_13.Platform;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8e549GeXuFABKF9tmYNN74p", "userInfoPrefabCtr", undefined);

      __checkObsolete__(['EventTouch', 'Label', 'Node', 'Sprite', 'Toggle', '_decorator']);

      ({
        ccclass,
        property,
        menu
      } = _decorator);
      /**
       * Name = prefab_playerCenter
       * URL = db://assets/resources/prefab/prefab_playerCenter.ts
       * Time = Thu Apr 07 2022 11:37:28 GMT+0800 (中国标准时间)
       * Author = Tomoe
       *
       * Life: onLoad-->onEnable->start->update->lateUpdate->onDisable->onDestroy
       */

      _export("prefab_playerCenter", prefab_playerCenter = (_dec = ccclass('prefab_playerCenter'), _dec2 = menu('prefab/hall/playerCenter'), _dec3 = property(Node), _dec4 = property(Label), _dec5 = property(Label), _dec6 = property(Label), _dec7 = property(Label), _dec8 = property(Node), _dec9 = property({
        tooltip: "同步微信用户信息",
        type: Node
      }), _dec10 = property({
        tooltip: "男性图标",
        type: Node
      }), _dec11 = property({
        tooltip: "女性图标",
        type: Node
      }), _dec(_class = _dec2(_class = (_class2 = class prefab_playerCenter extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "sexBtnNode", _descriptor, this);

          _initializerDefineProperty(this, "coinLabel", _descriptor2, this);

          _initializerDefineProperty(this, "userName", _descriptor3, this);

          _initializerDefineProperty(this, "userID", _descriptor4, this);

          _initializerDefineProperty(this, "otherUserID", _descriptor5, this);

          _initializerDefineProperty(this, "headNode", _descriptor6, this);

          _initializerDefineProperty(this, "btnGetWXInfo", _descriptor7, this);

          _initializerDefineProperty(this, "maleNode", _descriptor8, this);

          _initializerDefineProperty(this, "femaleNode", _descriptor9, this);

          this.userSexNum = void 0;
          this.cacheSex = null;
          this.wechatNick = null;
          this.avatar = null;
          this._isWxLogin = false;
          this._openViewCount = 0;
          this._isGameIn = false;
        }

        onLoad() {
          this.updateUserInfo(null); //设置授权按钮的坐标

          (_crd && Platform === void 0 ? (_reportPossibleCrUseOfPlatform({
            error: Error()
          }), Platform) : Platform).WxAuthSettingButtonParam = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).node_PositionSizeToScreen(this.btnGetWXInfo);
          this._openViewCount = 0;
          this.updateWXSettingButtonVisible(false); //打开了界面

          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).VIEW_UI_OPENED, this.onOpenedViewCallback); //关闭了界面

          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).VIEW_UI_CLOSED, this.onClosedViewCallback);
        }

        onInitModuleEvent() {
          //用户信息更新
          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).USER_UPDATE_INFO, this.updateUserInfo); //用户资产更新

          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).USER_UPDATE_PROPERTY, this.updateUserMoney); //授权按钮创建成功/授权成功

          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).PLATFORM_AUTHSETTING_UPDATE, this.respAuthButtonCreator);
        }

        checkIsInGame() {
          let userId = (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
            error: Error()
          }), GCache) : GCache).User.getUserMid("");
          userId = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).number_valueOf(userId);
          this._isGameIn = (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
            error: Error()
          }), GCache) : GCache).User.LoginRoomState;
        } //更新用户信息


        updateUserInfo(event = null, body = null) {
          this.checkIsInGame();
          let gender = (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
            error: Error()
          }), GCache) : GCache).User.getUserSex();
          gender = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).number_valueOf(gender);
          gender = gender > 0 ? gender : 1;

          if (this._isGameIn) {
            this.sexBtnNode.active = false;
            this.maleNode.active = true;
            this.femaleNode.active = false;

            if (gender == 2) {
              let sp = this.femaleNode.getComponent(Sprite).spriteFrame;
              this.maleNode.getComponent(Sprite).spriteFrame = sp;
            }
          }

          if (body) {
            this.userName.string = (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
              error: Error()
            }), GCache) : GCache).User.getUserName();
            this.changeSex(gender);

            if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).isNotNull(body['nick'])) {
              (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
                error: Error()
              }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
                error: Error()
              }), AppEvent) : AppEvent).SYS_TOAST_TIP, {
                content: "已同步微信昵称和头像"
              });
            }
          } else {
            this.updateUserMoney();
            this.userName.string = (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
              error: Error()
            }), GCache) : GCache).User.getUserName();
            this.userID.string = (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
              error: Error()
            }), GCache) : GCache).User.getUserMid("");
            this.otherUserID.string = this.userID.string;
            this.changeBtnActive();
            this.changeSex(gender);
          }
        }
        /**
         * 更新用户资产
         * @param event 
         * @param body 
         */


        updateUserMoney(event = null, body = null) {
          this.coinLabel.string = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).string_matchStr((_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
            error: Error()
          }), GCache) : GCache).User.getUserMoneyByID(0)); //货币类型 0:银币，1：金条 2：兑换券
        }
        /**
         * 修改默认头像,如果有数据则用远程图片,没有则用默认头像
         * @param value 
         */


        changeSex(value) {
          let spriteLoad = this.headNode.getComponent(_crd && SpriteLoad === void 0 ? (_reportPossibleCrUseOfSpriteLoad({
            error: Error()
          }), SpriteLoad) : SpriteLoad);
          let headArray = (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
            error: Error()
          }), GCache) : GCache).User.getUserHeadArray();

          if (headArray && headArray.b != "") {
            let self = this;
            spriteLoad.setRemoteUrl(headArray.b);
          } else {
            if (value == 2) {
              spriteLoad.setLocalLoad((_crd && GameRes === void 0 ? (_reportPossibleCrUseOfGameRes({
                error: Error()
              }), GameRes) : GameRes).Picture_UserBigHead_girl.bundle, (_crd && GameRes === void 0 ? (_reportPossibleCrUseOfGameRes({
                error: Error()
              }), GameRes) : GameRes).Picture_UserBigHead_girl.path);
            } else {
              spriteLoad.setLocalLoad((_crd && GameRes === void 0 ? (_reportPossibleCrUseOfGameRes({
                error: Error()
              }), GameRes) : GameRes).Picture_UserBigHead_boy.bundle, (_crd && GameRes === void 0 ? (_reportPossibleCrUseOfGameRes({
                error: Error()
              }), GameRes) : GameRes).Picture_UserBigHead_boy.path);
            }
          }
        }
        /**
         * 可见
         */


        onEnable() {
          this.updateWXSettingButtonVisible(true);
          this._openViewCount = 0;
        }
        /**
         * 不可见
         */


        onDisable() {
          this.updateWXSettingButtonVisible(false);
        }
        /**
         * 界面打开的回调
         * @param event 
         * @param viewParam 
         * @returns 
         */


        onOpenedViewCallback(event = null, viewParam) {
          if (this.node.active == false) {
            return;
          } //防止重叠


          if (viewParam["Prefab"] == (_crd && GameRes === void 0 ? (_reportPossibleCrUseOfGameRes({
            error: Error()
          }), GameRes) : GameRes).Prefab_ToastTip.path) {
            return;
          }

          this._openViewCount = this._openViewCount + 1;
          this.updateWXSettingButtonVisible(false);
        }
        /**
         * 界面关闭的回调
         * @param event 
         * @param viewParam 
         * @returns 
         */


        onClosedViewCallback(event = null, viewParam) {
          if (this.node.active == false) {
            return;
          }

          if (viewParam["Prefab"] == (_crd && GameRes === void 0 ? (_reportPossibleCrUseOfGameRes({
            error: Error()
          }), GameRes) : GameRes).Prefab_ToastTip.path) {
            return;
          }

          this._openViewCount = this._openViewCount - 1;

          if (this._openViewCount < 0) {
            this._openViewCount = 0;
          }

          if (this._openViewCount == 0) {
            this.updateWXSettingButtonVisible(true);
          } else {
            this.updateWXSettingButtonVisible(false);
          }
        } //更新同步微信用户信息按钮的显示和隐藏状态


        updateWXSettingButtonVisible(visible) {
          if (this._isGameIn) {
            this.btnGetWXInfo.active = false;

            if (this._isWxLogin == true) {
              (_crd && Platform === void 0 ? (_reportPossibleCrUseOfPlatform({
                error: Error()
              }), Platform) : Platform).updateWxAuthSettingButtonVisible(false);
            }

            return;
          }

          if (this._isWxLogin == true) {
            (_crd && Platform === void 0 ? (_reportPossibleCrUseOfPlatform({
              error: Error()
            }), Platform) : Platform).updateWxAuthSettingButtonVisible(visible);

            if (this.node && this.node.isValid) {
              this.btnGetWXInfo.active = false;
            }
          } else {
            if (this.btnGetWXInfo && this.btnGetWXInfo.isValid) {
              this.btnGetWXInfo.active = visible;
            }
          }
        }
        /**
         * 平台返回的登录失败,由微信调
         * @param event 
         * @param errorCode 
         */


        respPlatformFail(event, errorCode) {
          console.log(`平台返回的授权失败 errorCode = ${errorCode}`);

          if (errorCode <= (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
            error: Error()
          }), GConstants) : GConstants).LoginStateCode.platform_fail_wx_access_token_error) {
            //全是wx平台的错误
            if (errorCode == (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
              error: Error()
            }), GConstants) : GConstants).LoginStateCode.platform_fail_wx_notAuthSetting) {//未取得授权
            } else {//其他错误
            }

            this.updateWXSettingButtonVisible(true);
          }
        }
        /**
         * 授权按钮创建成功/授权成功
         * @param event 
         * @param button 
         */


        respAuthButtonCreator(event, button) {
          if (button) {
            this.updateWXSettingButtonVisible(true);
          } else {
            if ((_crd && Platform === void 0 ? (_reportPossibleCrUseOfPlatform({
              error: Error()
            }), Platform) : Platform).WxAuthSettingUserInfo == 1) {
              //授权成功
              console.log("授权成功 平台用户信息", (_crd && Platform === void 0 ? (_reportPossibleCrUseOfPlatform({
                error: Error()
              }), Platform) : Platform).WxUserInfo);

              this.__toChangeInfo((_crd && Platform === void 0 ? (_reportPossibleCrUseOfPlatform({
                error: Error()
              }), Platform) : Platform).WxUserInfo["nickName"], (_crd && Platform === void 0 ? (_reportPossibleCrUseOfPlatform({
                error: Error()
              }), Platform) : Platform).WxUserInfo["avatarUrl"]);
            }
          }
        }
        /**
         * 点击上传更新性别并关闭该预制体
         * @param event
         */


        onClickClose(event) {
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).SYS_PLAY_EFFECT, (_crd && AppSound === void 0 ? (_reportPossibleCrUseOfAppSound({
            error: Error()
          }), AppSound) : AppSound).CommClick);

          if (this._isGameIn) {
            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
              error: Error()
            }), AppEvent) : AppEvent).VIEW_UI_CLOSE, (_crd && UIID === void 0 ? (_reportPossibleCrUseOfUIID({
              error: Error()
            }), UIID) : UIID).PlayerInfoCenter);
            return;
          }

          if (this.cacheSex != null) {
            let body = {
              sex: this.cacheSex
            };
            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
              error: Error()
            }), AppEvent) : AppEvent).NET_REQ_SET_USERINFO, body);
          }

          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).SYS_PLAY_EFFECT, (_crd && AppSound === void 0 ? (_reportPossibleCrUseOfAppSound({
            error: Error()
          }), AppSound) : AppSound).CommClick);
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).REPORT_CLIENT_CLICK, {
            eventID: (_crd && ReportConfig === void 0 ? (_reportPossibleCrUseOfReportConfig({
              error: Error()
            }), ReportConfig) : ReportConfig).userInfo_1
          });
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).VIEW_UI_CLOSE, (_crd && UIID === void 0 ? (_reportPossibleCrUseOfUIID({
            error: Error()
          }), UIID) : UIID).PlayerInfoCenter);
        }
        /**
         * 修改性别点击监听
         * @param event 
         * @param custom 
         */


        onClickSex(event, custom) {
          if (this._isGameIn) {
            return;
          }

          if (custom == "man") {
            this.cacheSex = 1;
          } else if (custom == "woman") {
            this.cacheSex = 2;
          } //切换性别


          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).REPORT_CLIENT_CLICK, {
            eventID: (_crd && ReportConfig === void 0 ? (_reportPossibleCrUseOfReportConfig({
              error: Error()
            }), ReportConfig) : ReportConfig).userInfo_2
          });
        }
        /**
         * 修改性别按钮状态:1男2女0保密,如果是0,则为男
         */


        changeBtnActive() {
          let gender = (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
            error: Error()
          }), GCache) : GCache).User.getUserSex();
          gender = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).number_valueOf(gender, 0);
          this.userSexNum = gender;

          if (this.userSexNum == 0) {
            this.userSexNum = 1;
            this.cacheSex = 1;
          }

          if (this.userSexNum == 1) {
            this.sexBtnNode.getChildByName("Toggle1").getComponent(Toggle).isChecked = true;
          } else {
            this.sexBtnNode.getChildByName("Toggle2").getComponent(Toggle).isChecked = true;
          }
        }
        /**
         * 复制ID
         * @param e 
         */


        onClickCopy(e) {
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).SYS_PLAY_EFFECT, (_crd && AppSound === void 0 ? (_reportPossibleCrUseOfAppSound({
            error: Error()
          }), AppSound) : AppSound).CommClick);
          (_crd && Platform === void 0 ? (_reportPossibleCrUseOfPlatform({
            error: Error()
          }), Platform) : Platform).copyClipboard((_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
            error: Error()
          }), GCache) : GCache).User.getUserMid());
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).REPORT_CLIENT_CLICK, {
            eventID: (_crd && ReportConfig === void 0 ? (_reportPossibleCrUseOfReportConfig({
              error: Error()
            }), ReportConfig) : ReportConfig).userInfo_3
          });
        }

        start() {
          (_crd && Platform === void 0 ? (_reportPossibleCrUseOfPlatform({
            error: Error()
          }), Platform) : Platform).updateWxAuthSettingButtonVisible(null);
          (_crd && Platform === void 0 ? (_reportPossibleCrUseOfPlatform({
            error: Error()
          }), Platform) : Platform).WxAuthSettingButtonParam["img"] = (_crd && GameRes === void 0 ? (_reportPossibleCrUseOfGameRes({
            error: Error()
          }), GameRes) : GameRes).AppCommon_GetUserInfo_WX.path;
          this._isWxLogin = (_crd && Platform === void 0 ? (_reportPossibleCrUseOfPlatform({
            error: Error()
          }), Platform) : Platform).isWXPlatform();
          this.updateWXSettingButtonVisible(true);
          console.log("授权按钮的屏幕参数：", (_crd && Platform === void 0 ? (_reportPossibleCrUseOfPlatform({
            error: Error()
          }), Platform) : Platform).WxAuthSettingButtonParam);
        }

        /**
         * 点击同步微信昵称,这个方法在实际微信中不会调用,只是在模拟器环境下开发
         * @param event 
         */
        onClickSyncWXInfo(event = null) {
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).SYS_PLAY_EFFECT, (_crd && AppSound === void 0 ? (_reportPossibleCrUseOfAppSound({
            error: Error()
          }), AppSound) : AppSound).CommClick);
          let tmpName = "测试1" + (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
            error: Error()
          }), GCache) : GCache).User.getUserMid();
          let avatar = 'https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTI8sibBlJEE6mfxaKkdlFtAJ9tQGGDrAOEZDIEThRUqcBIr2gWQtde0wJIEfhSc4swl4PCW72LjqIg/132';

          this.__toChangeInfo(tmpName, avatar);
        }
        /**
         * 更新用户昵称,头像
         * @param name 
         * @param avatar 
         * @returns 
         */


        __toChangeInfo(name, avatar) {
          if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).string_isEmpty(name)) {
            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
              error: Error()
            }), AppEvent) : AppEvent).SYS_TOAST_TIP, {
              content: "err:昵称不能为空"
            });
            return;
          }

          let body = {
            nick: String(name),
            avatar: avatar
          };
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_REQ_SET_USERINFO, body);
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).REPORT_CLIENT_CLICK, {
            eventID: (_crd && ReportConfig === void 0 ? (_reportPossibleCrUseOfReportConfig({
              error: Error()
            }), ReportConfig) : ReportConfig).userInfo_4
          });
        }
        /**
         * 销毁
         */


        onDestroy() {
          (_crd && Platform === void 0 ? (_reportPossibleCrUseOfPlatform({
            error: Error()
          }), Platform) : Platform).updateWxAuthSettingButtonVisible(null);
        }

        /**
         * 点击蒙版外面的关闭界面
         */
        onMaskClose() {
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).SYS_PLAY_EFFECT, (_crd && AppSound === void 0 ? (_reportPossibleCrUseOfAppSound({
            error: Error()
          }), AppSound) : AppSound).CommClick);
          this.node.destroy();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "sexBtnNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "coinLabel", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "userName", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "userID", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "otherUserID", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "headNode", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "btnGetWXInfo", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "maleNode", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "femaleNode", [_dec11], {
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
//# sourceMappingURL=07e684bfc8cfc548153adeb02fe9a62d762bf638.js.map