System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Label, Node, ScrollView, ToggleContainer, _decorator, GCache, AppEvent, ClientInfo, GameConfig, GameNetType, Platform, GSocket, EventManager, Network, BaseComponent, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _crd, ccclass, property, DebugComponent;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfGCache(extras) {
    _reporterNs.report("GCache", "../../cache/GCache", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAppEvent(extras) {
    _reporterNs.report("AppEvent", "../../config/AppEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfClientInfo(extras) {
    _reporterNs.report("ClientInfo", "../../config/GameConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameConfig(extras) {
    _reporterNs.report("GameConfig", "../../config/GameConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameNetType(extras) {
    _reporterNs.report("GameNetType", "../../config/GameConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlatform(extras) {
    _reporterNs.report("Platform", "../../platform/Platform", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGSocket(extras) {
    _reporterNs.report("GSocket", "../../proj/gnet/GSocket", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventManager(extras) {
    _reporterNs.report("EventManager", "../manager/EventManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNetwork(extras) {
    _reporterNs.report("Network", "../network/NetState", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "./BaseComponent", _context.meta, extras);
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
      ScrollView = _cc.ScrollView;
      ToggleContainer = _cc.ToggleContainer;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      GCache = _unresolved_2.GCache;
    }, function (_unresolved_3) {
      AppEvent = _unresolved_3.AppEvent;
    }, function (_unresolved_4) {
      ClientInfo = _unresolved_4.ClientInfo;
      GameConfig = _unresolved_4.GameConfig;
      GameNetType = _unresolved_4.GameNetType;
    }, function (_unresolved_5) {
      Platform = _unresolved_5.Platform;
    }, function (_unresolved_6) {
      GSocket = _unresolved_6.GSocket;
    }, function (_unresolved_7) {
      EventManager = _unresolved_7.EventManager;
    }, function (_unresolved_8) {
      Network = _unresolved_8.Network;
    }, function (_unresolved_9) {
      BaseComponent = _unresolved_9.BaseComponent;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "3f05bWc5Q9P4a4e/6cW4wK6", "DebugComponent", undefined);

      __checkObsolete__(['EventTouch', 'Label', 'Node', 'ScrollView', 'ToggleContainer', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Name = DebugComponent
       * URL = db://assets/framework/vc/DebugComponent.ts
       * Time = Sat May 06 2023 11:58:36 GMT+0800 (中国标准时间)
       * Author = xueya
       *
       * Life: onLoad-->onEnable->start->update->lateUpdate->onDisable->onDestroy
       */

      _export("DebugComponent", DebugComponent = (_dec = ccclass('DebugComponent'), _dec2 = property({
        tooltip: "debug界面",
        type: Node
      }), _dec3 = property({
        tooltip: "debug显示隐藏开关",
        type: Node
      }), _dec4 = property({
        tooltip: "操作按钮的滚动容器",
        type: ScrollView
      }), _dec5 = property({
        tooltip: "系统信息显示标签",
        type: Label
      }), _dec6 = property({
        tooltip: "更新信息显示标签",
        type: Label
      }), _dec7 = property({
        tooltip: "选服节点",
        type: Node
      }), _dec8 = property({
        tooltip: "选服单选列表节点",
        type: ToggleContainer
      }), _dec(_class = (_class2 = class DebugComponent extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "nodeDebugView", _descriptor, this);

          _initializerDefineProperty(this, "nodeDebugSwitch", _descriptor2, this);

          _initializerDefineProperty(this, "scrollowList", _descriptor3, this);

          _initializerDefineProperty(this, "sysInfoLabel", _descriptor4, this);

          _initializerDefineProperty(this, "updateInfoLabel", _descriptor5, this);

          _initializerDefineProperty(this, "nodeChooseServer", _descriptor6, this);

          _initializerDefineProperty(this, "toggleGroup", _descriptor7, this);

          this._handlerAutoCloseView = null;
          this._envTxt = {
            [(_crd && GameNetType === void 0 ? (_reportPossibleCrUseOfGameNetType({
              error: Error()
            }), GameNetType) : GameNetType).NET_TEST]: "dev",
            [(_crd && GameNetType === void 0 ? (_reportPossibleCrUseOfGameNetType({
              error: Error()
            }), GameNetType) : GameNetType).NET_DEV]: "pre",
            [(_crd && GameNetType === void 0 ? (_reportPossibleCrUseOfGameNetType({
              error: Error()
            }), GameNetType) : GameNetType).NET_ONLINE]: "prod"
          };
        }

        onInitModuleEvent() {
          //登录界面改变
          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).LOGIN_GOTO_SHOW, this.updateAllInfo); //登录界面传参

          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).LOGIN_SEND_SHOW, this.updateAllInfo); //系统信息刷新

          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).SYS_INFO_REFRESH, this.updateAllInfo); //登录状态改变

          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).LOGIN_STATE_CHANGE, this.updateAllInfo); //网络状态改变

          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).SYS_NET_CHANGE_STATE, this.updateLabelInfo); //网络名称改变

          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).SYS_NET_CHANGE_NAME, this.updateLabelInfo); // //用户注销了账号
          // this.addModelListener(AppEvent.NET_CMD_RESP_SET_USERINFO, this.respSetUserInfo);
        }

        onLoad() {
          this.initView();
        }

        start() {}

        initView() {
          this.nodeDebugView.active = true;
          this.nodeDebugSwitch.active = true;
          this.scrollowList.node.active = false;
          this.updateAllInfoByInit();
          this.sysInfoLabel.node.active = true;
          this.updateInfoLabel.node.active = true;
          this.nodeChooseServer.active = false;
          this.toggleGroup.node.active = true;
        }
        /** 点击了debug显/隐开关 */


        onClickShowOrHideSwitch(event = null) {
          let willState = !this.scrollowList.node.active;
          ;
          this.scrollowList.node.active = !this.scrollowList.node.active;

          if (willState == true) {
            this.nodeChooseServer.active = false;
            this.startAutoHideScrollow();
            this.scrollowList.node.active = willState;
            this.scrollowList.scrollToTop(0, false);
          } else {
            this.stopScheduler(this._handlerAutoCloseView);
            this._handlerAutoCloseView = null;
            this.scrollowList.node.active = willState;
          }
        }
        /** 初始化服务器时 */


        updateAllInfoByInit() {
          this.updateBaseLabelInfo(null, true);
          this.updateLabelInfo();
        }
        /** 所有信息刷新 */


        updateAllInfo() {
          this.updateBaseLabelInfo();
          this.updateLabelInfo();
        }
        /** 请求设置用户信息返回 */


        respSetUserInfo(event, receiveData, reqData) {
          if (receiveData.code != 0) {
            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
              error: Error()
            }), AppEvent) : AppEvent).SYS_TOAST_TIP, {
              content: receiveData["msg"]
            });
            return;
          }

          if (reqData && reqData["logout_status"] == 1) {
            this.print("请求了注销账号，注销成功", reqData);
            this.onClickExitLogin(null, true);
          }
        }
        /** 更新基本信息 */


        updateBaseLabelInfo(event = null, isInitServer = null) {
          let title = "[-----BASE-----]";
          let server = "服务器:";

          if (isInitServer !== true) {
            server = server + (_crd && GameConfig === void 0 ? (_reportPossibleCrUseOfGameConfig({
              error: Error()
            }), GameConfig) : GameConfig).instance.AppUrlConf.Name;
          }

          let hallver = "大厅版本:" + (_crd && ClientInfo === void 0 ? (_reportPossibleCrUseOfClientInfo({
            error: Error()
          }), ClientInfo) : ClientInfo).HallVer;
          let appver = "应用版本:" + (_crd && ClientInfo === void 0 ? (_reportPossibleCrUseOfClientInfo({
            error: Error()
          }), ClientInfo) : ClientInfo).AppVer;
          let payEnv = "支付方式:" + ((_crd && ClientInfo === void 0 ? (_reportPossibleCrUseOfClientInfo({
            error: Error()
          }), ClientInfo) : ClientInfo).WX_PayEnv == 0 ? "正式" : "沙箱");
          this.sysInfoLabel.string = title + "\n" + server + "\n" + hallver + "\n" + appver + "\n" + payEnv;
        }
        /** 更新标签文本显示 */


        updateLabelInfo(event = null) {
          let title = "[----UPDATE----]";
          let netName = "网络名称:" + (_crd && Network === void 0 ? (_reportPossibleCrUseOfNetwork({
            error: Error()
          }), Network) : Network).instance.name;
          let netState = "网络状态:" + (_crd && Network === void 0 ? (_reportPossibleCrUseOfNetwork({
            error: Error()
          }), Network) : Network).instance.state;
          let socketState = "Socket:" + ((_crd && GSocket === void 0 ? (_reportPossibleCrUseOfGSocket({
            error: Error()
          }), GSocket) : GSocket).instance.isConnected() == true ? "已连接" : "未连接");
          let loginState = "登录状态:" + (this.getLoginState() == true ? "已登录" : "未登录");
          this.updateInfoLabel.string = title + "\n" + netName + "\n" + netState + "\n" + socketState + "\n" + loginState;
        }
        /** 获取玩家登录状态 */


        getLoginState() {
          if ((_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
            error: Error()
          }), GCache) : GCache) && (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
            error: Error()
          }), GCache) : GCache).User) {
            return (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
              error: Error()
            }), GCache) : GCache).User.isLoginSuccesed();
          }

          return false;
        }
        /** 更新单选 */


        updateToggleGroup() {
          // this.toggleGroup.toggleItems[0]["CurrowServer"] = GameNetType.NET_TEST;
          // this.toggleGroup.toggleItems[1]["CurrowServer"] = GameNetType.NET_DEV;
          // this.toggleGroup.toggleItems[2]["CurrowServer"] = GameNetType.NET_ONLINE;
          if ((_crd && ClientInfo === void 0 ? (_reportPossibleCrUseOfClientInfo({
            error: Error()
          }), ClientInfo) : ClientInfo).CurrowServer == (_crd && GameNetType === void 0 ? (_reportPossibleCrUseOfGameNetType({
            error: Error()
          }), GameNetType) : GameNetType).NET_TEST) {
            this.toggleGroup.toggleItems[0].isChecked = true;
          } else if ((_crd && ClientInfo === void 0 ? (_reportPossibleCrUseOfClientInfo({
            error: Error()
          }), ClientInfo) : ClientInfo).CurrowServer == (_crd && GameNetType === void 0 ? (_reportPossibleCrUseOfGameNetType({
            error: Error()
          }), GameNetType) : GameNetType).NET_DEV) {
            this.toggleGroup.toggleItems[1].isChecked = true;
          } else if ((_crd && ClientInfo === void 0 ? (_reportPossibleCrUseOfClientInfo({
            error: Error()
          }), ClientInfo) : ClientInfo).CurrowServer == (_crd && GameNetType === void 0 ? (_reportPossibleCrUseOfGameNetType({
            error: Error()
          }), GameNetType) : GameNetType).NET_ONLINE) {
            this.toggleGroup.toggleItems[2].isChecked = true;
          }
        }
        /** 开启自动隐藏滚动容器 */


        startAutoHideScrollow() {
          this.stopScheduler(this._handlerAutoCloseView);
          this._handlerAutoCloseView = this.addScheduler(8, () => {
            this.onClickShowOrHideSwitch();
          });
        }
        /** 退出登录 */


        onClickExitLogin(event = null, isNotAutoShow = false) {
          this.print("---跳转到登录---");
          (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
            error: Error()
          }), GCache) : GCache).User.cleanLastlocalLoginToken();
          (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
            error: Error()
          }), GCache) : GCache).init();
          (_crd && GSocket === void 0 ? (_reportPossibleCrUseOfGSocket({
            error: Error()
          }), GSocket) : GSocket).instance.closeConnect();
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).LOGIN_GOTO_SHOW, {
            state: "first_login"
          });

          if (isNotAutoShow != true) {
            this.onClickShowOrHideSwitch();
          }
        }
        /** 复制OpenID */


        onClickCopyOpenID(event = null) {
          this.print("---复制OpenID---");
          (_crd && Platform === void 0 ? (_reportPossibleCrUseOfPlatform({
            error: Error()
          }), Platform) : Platform).copyClipboard((_crd && Platform === void 0 ? (_reportPossibleCrUseOfPlatform({
            error: Error()
          }), Platform) : Platform).PLogInfo.openId);
        }
        /** 切换服务器 */


        onClickChangeServer(event = null) {
          this.nodeChooseServer.active = !this.nodeChooseServer.active;

          if (this.nodeChooseServer.active == true) {
            this.updateToggleGroup();
            this.startAutoHideScrollow();
          }
        }
        /** 点击了单选服 */


        onClickToggle(event = null) {
          let currowServer = (_crd && ClientInfo === void 0 ? (_reportPossibleCrUseOfClientInfo({
            error: Error()
          }), ClientInfo) : ClientInfo).CurrowServer;

          if (this.toggleGroup.toggleItems[0].isChecked) {
            currowServer = (_crd && GameNetType === void 0 ? (_reportPossibleCrUseOfGameNetType({
              error: Error()
            }), GameNetType) : GameNetType).NET_TEST;
          } else if (this.toggleGroup.toggleItems[1].isChecked) {
            currowServer = (_crd && GameNetType === void 0 ? (_reportPossibleCrUseOfGameNetType({
              error: Error()
            }), GameNetType) : GameNetType).NET_DEV;
          } else if (this.toggleGroup.toggleItems[2].isChecked) {
            currowServer = (_crd && GameNetType === void 0 ? (_reportPossibleCrUseOfGameNetType({
              error: Error()
            }), GameNetType) : GameNetType).NET_ONLINE;
          }

          if ((_crd && ClientInfo === void 0 ? (_reportPossibleCrUseOfClientInfo({
            error: Error()
          }), ClientInfo) : ClientInfo).CurrowServer == currowServer) {
            return;
          }

          this.addSchedulerOnce(0.5, () => {
            (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
              error: Error()
            }), GCache) : GCache).init();
            (_crd && GSocket === void 0 ? (_reportPossibleCrUseOfGSocket({
              error: Error()
            }), GSocket) : GSocket).instance.closeConnect();
            (_crd && ClientInfo === void 0 ? (_reportPossibleCrUseOfClientInfo({
              error: Error()
            }), ClientInfo) : ClientInfo).CurrowServer = currowServer;
            this.print(`切换服务器--->即将切换到：${(_crd && GameConfig === void 0 ? (_reportPossibleCrUseOfGameConfig({
              error: Error()
            }), GameConfig) : GameConfig).instance.AppUrlConf.Name}`);
            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
              error: Error()
            }), AppEvent) : AppEvent).LOGIN_GOTO_SHOW);
            this.onClickShowOrHideSwitch();
          });
        }
        /** 注销账号 */


        onClickLogOut(event = null) {
          this.print(`注销账号：${(_crd && GameConfig === void 0 ? (_reportPossibleCrUseOfGameConfig({
            error: Error()
          }), GameConfig) : GameConfig).instance.AppUrlConf.Name}`); // if (GCache && GCache.User) {
          // 	let str = GameConfig.instance.AppUrlConf.H5 + "?uid" + GCache.User.getUserMid() + "&env=" + this._envTxt[ClientInfo.CurrowServer];
          // 	let param = {
          // 		title: "注销账号",
          // 		alignLeftTop: false,
          // 		notshowClose: true,
          // 		txt_desc: `即将注销帐号 UID:${GCache.User.getUserMid()} \n是否确定？`,         //正文内容
          // 		buttonsMap: [
          // 			{
          // 				click: () => {
          // 					Platform.copyClipboard(str);
          // 					console.log("openUrl:", str);
          // 					// EventManager.dispatch(AppEvent.NET_CMD_REQ_SET_USERINFO, { logout_status: 1 })
          // 				}
          // 			},
          // 			{}
          // 		]
          // 	}
          // 	EventManager.dispatch(AppEvent.VIEW_UI_OPEN, UIID.PopWindow, param);
          // 	this.onClickShowOrHideSwitch();
          // } else {
          // 	this.print("注销账号失败，尚未登录成功！")
          // }
        }
        /** 显示或隐藏Debug */


        onClickShowOrHideDebug(event = null) {
          this.nodeDebugView.active = !this.nodeDebugView.active;
        } //销毁


        onDestroy() {}

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "nodeDebugView", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "nodeDebugSwitch", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "scrollowList", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "sysInfoLabel", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "updateInfoLabel", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "nodeChooseServer", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "toggleGroup", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=e48b91a0fde5e8eb8b3cf67dcd22bcb094d26f2d.js.map