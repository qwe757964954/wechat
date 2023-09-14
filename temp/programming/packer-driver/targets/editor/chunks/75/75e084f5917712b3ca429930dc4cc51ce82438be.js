System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Label, Node, _decorator, GCache, AppEvent, AppSound, GConstants, GameRes, ReportConfig, UIID, Utils, EventManager, BaseComponent, Platform, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, menu, commonBtnPrefabCtr;

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
      EventManager = _unresolved_10.EventManager;
    }, function (_unresolved_11) {
      BaseComponent = _unresolved_11.BaseComponent;
    }, function (_unresolved_12) {
      Platform = _unresolved_12.Platform;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "35350GpV+9BeIK9hLQntanI", "commonBtnPrefabCtr", undefined);

      __checkObsolete__(['Label', 'Node', '_decorator']);

      ({
        ccclass,
        property,
        menu
      } = _decorator);
      /**
       * Name = commonBtnPrefabCtr
       * URL = db://assets/package/hall/scripts/commonBtnPrefabCtr.ts
       * Time = Wed Sep 07 2022 18:23:56 GMT+0800 (中国标准时间)
       * Author = Tomoe
       *
       * Life: onLoad-->onEnable->start->update->lateUpdate->onDisable->onDestroy
       */

      _export("commonBtnPrefabCtr", commonBtnPrefabCtr = (_dec = ccclass('commonBtnPrefabCtr'), _dec2 = menu('prefab/hall/commonBtnPrefabCtr'), _dec3 = property({
        tooltip: "银币数量",
        type: Label
      }), _dec4 = property({
        tooltip: "银币+",
        type: Node
      }), _dec5 = property({
        tooltip: "邮件按钮节点",
        type: Node
      }), _dec(_class = _dec2(_class = (_class2 = class commonBtnPrefabCtr extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "goldenLabel", _descriptor, this);

          _initializerDefineProperty(this, "goldNodeAdd", _descriptor2, this);

          _initializerDefineProperty(this, "btnEmailNode", _descriptor3, this);

          this._redDotView = {};
          this._isShowShopAdd = null;
          this._isCanClickShop = true;
        }

        /**是否点击显示商城*/
        set isShowShop(is) {
          this._isShowShopAdd = is != null ? is : null;
        }

        /**初始化添加事件绑定 */
        onInitModuleEvent() {
          //玩家资产更新
          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).USER_UPDATE_PROPERTY, this.updatePropty); //红点更新

          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NOTIFY_UPDATE_RED_DOT, this.refreshRedDot); //有界面被打开

          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).VIEW_UI_OPENED, this.notifyOpenedUI); //有界面被关闭

          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).VIEW_UI_CLOSED, this.notifyClosedUI);
        }

        onLoad() {
          this.initData();
        }

        start() {
          this.initView();
        }

        notifyOpenedUI(event, viewParam) {
          if (!this.node || this.node.isValid == false) {
            return;
          }

          if (!this.goldNodeAdd) {
            return;
          }

          if (viewParam && viewParam["Prefab"] == (_crd && GameRes === void 0 ? (_reportPossibleCrUseOfGameRes({
            error: Error()
          }), GameRes) : GameRes).Prefab_Mall.path) {
            this.goldNodeAdd.active = false;
            this._isCanClickShop = false;
          }
        }

        notifyClosedUI(event, viewParam) {
          if (!this.node || this.node.isValid == false) {
            return;
          }

          if (!this.goldNodeAdd) {
            return;
          }

          if (viewParam && viewParam["Prefab"] == (_crd && GameRes === void 0 ? (_reportPossibleCrUseOfGameRes({
            error: Error()
          }), GameRes) : GameRes).Prefab_Mall.path) {
            let status = (_crd && Platform === void 0 ? (_reportPossibleCrUseOfPlatform({
              error: Error()
            }), Platform) : Platform).isCanPay();
            this.goldNodeAdd.active = status;
            this._isCanClickShop = status;
          }
        } //初始化数据


        initData() {
          this._redDotView = {
            /** 邮件 */
            //	[GConstants.RedDotConf.Email]: this.btnEmailNode,
          };
        } //初始化界面


        initView() {
          this.updatePropty();
          this.initShopView();
          this.refreshRedDot();
        } //初始化商城的显示状态(IOS暂不支持微信支付功能)


        initShopView() {
          // if (!this.diamondNode || !this.goldNode) {
          // 	return;
          // }
          // if (Platform.isCanPay()) {
          // 	this.diamondNode.active = true;
          // } else {
          // 	this.diamondNode.active = false;
          // }
          // this.goldNode.active = true;
          let status = true;

          if (this._isShowShopAdd == false) {
            status = false; // this.diamondNodeAdd.active = status;

            this.goldNodeAdd.active = status;
            this._isCanClickShop = status;
          } else {
            status = (_crd && Platform === void 0 ? (_reportPossibleCrUseOfPlatform({
              error: Error()
            }), Platform) : Platform).isCanPay(); // this.diamondNodeAdd.active = status;

            this.goldNodeAdd.active = status;
            this._isCanClickShop = status;
          }
        }
        /**更新玩家资产*/


        updatePropty(event = null, param = null) {
          if (param) {
            if (param["type"] == (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
              error: Error()
            }), GConstants) : GConstants).PropertyType.SILVER_COIN) {
              this.goldenLabel.string = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                error: Error()
              }), Utils) : Utils).string_matchStr((_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
                error: Error()
              }), GCache) : GCache).User.getUserMoneyByID((_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
                error: Error()
              }), GConstants) : GConstants).PropertyType.SILVER_COIN));
            }
          } else {
            this.goldenLabel.string = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).string_matchStr((_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
              error: Error()
            }), GCache) : GCache).User.getUserMoneyByID((_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
              error: Error()
            }), GConstants) : GConstants).PropertyType.SILVER_COIN));
          }
        }
        /** 红点更新 */


        refreshRedDot(event = null, keyType = null) {
          if (keyType == null) {
            keyType = (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
              error: Error()
            }), GConstants) : GConstants).RedDotConf.Email;
          }

          if (keyType != (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
            error: Error()
          }), GConstants) : GConstants).RedDotConf.Email) {
            return;
          }

          this.btnEmailNode.active = (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
            error: Error()
          }), GCache) : GCache).RedDot.need_show_email();

          if (this.btnEmailNode.active == true) {
            let imgRedDot = this.btnEmailNode.getChildByName("img_dot");

            if (imgRedDot) {
              imgRedDot.active = (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
                error: Error()
              }), GCache) : GCache).RedDot.hasRedDot(keyType);
            }
          }
        } //点击客服按钮


        onKeFuClick(event) {
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
            }), ReportConfig) : ReportConfig).hall_20
          });
          console.log("点击事件响应===>>>>客服");

          if ((_crd && Platform === void 0 ? (_reportPossibleCrUseOfPlatform({
            error: Error()
          }), Platform) : Platform).isWXPlatform()) {
            (_crd && Platform === void 0 ? (_reportPossibleCrUseOfPlatform({
              error: Error()
            }), Platform) : Platform).openCustomerServiceConversation();
          } else {
            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
              error: Error()
            }), AppEvent) : AppEvent).SYS_TOAST_TIP, {
              content: "点击了联系客服"
            });
          }
        }
        /**
         * 待活动完成后转移活动页面 联系客服的回调
         * @param event 
         */


        _doCallBackOpenCus(shareID) {
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_REQ_SHARE_AWARD, shareID, (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
            error: Error()
          }), GConstants) : GConstants).ReqUrl.shareType.other, false);
        } //点击设置按钮


        onSettingClick(event) {
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).REPORT_CLIENT_CLICK, {
            eventID: (_crd && ReportConfig === void 0 ? (_reportPossibleCrUseOfReportConfig({
              error: Error()
            }), ReportConfig) : ReportConfig).hall_15
          });
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
          }), AppEvent) : AppEvent).VIEW_UI_OPEN, (_crd && UIID === void 0 ? (_reportPossibleCrUseOfUIID({
            error: Error()
          }), UIID) : UIID).SettingPrefab);
        } //点击邮箱按钮


        onMailClick(event) {
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
          }), AppEvent) : AppEvent).VIEW_UI_OPEN, (_crd && UIID === void 0 ? (_reportPossibleCrUseOfUIID({
            error: Error()
          }), UIID) : UIID).MailPrefab, null, null, null, true);
        } //点击银币按钮


        onGoldenClick(event) {
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).REPORT_CLIENT_CLICK, {
            eventID: (_crd && ReportConfig === void 0 ? (_reportPossibleCrUseOfReportConfig({
              error: Error()
            }), ReportConfig) : ReportConfig).hall_2
          });

          if (this._isCanClickShop) {
            if ((_crd && Platform === void 0 ? (_reportPossibleCrUseOfPlatform({
              error: Error()
            }), Platform) : Platform).isCanPay() == false) {
              return;
            } // EventManager.dispatch(AppEvent.SYS_PLAY_EFFECT, AppSound.CommClick);


            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
              error: Error()
            }), AppEvent) : AppEvent).VIEW_UI_OPEN, (_crd && UIID === void 0 ? (_reportPossibleCrUseOfUIID({
              error: Error()
            }), UIID) : UIID).MallPrefab, {
              id: (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
                error: Error()
              }), GConstants) : GConstants).ShopBigTabType.SILVER_COIN
            }, {});
          }
        } //点击金条按钮 二期迭代


        onDiamonClick(event) {// if (this._isCanClickShop) {
          // 	if (Platform.isCanPay() == false) {
          // 		return;
          // 	}
          // 	EventManager.dispatch(AppEvent.SYS_PLAY_EFFECT, AppSound.CommClick);
          // 	EventManager.dispatch(AppEvent.VIEW_UI_OPEN, UIID.MallPrefab, { id: GConstants.ShopBigTabType.DIAMOND }, {});
          // }
        } //销毁


        onDestroy() {}

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "goldenLabel", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "goldNodeAdd", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "btnEmailNode", [_dec5], {
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
//# sourceMappingURL=75e084f5917712b3ca429930dc4cc51ce82438be.js.map