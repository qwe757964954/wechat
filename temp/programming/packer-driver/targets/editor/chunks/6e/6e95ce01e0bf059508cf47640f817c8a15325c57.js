System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Label, Node, Prefab, ScrollView, Sprite, UITransform, Vec3, _decorator, GCache, AppEvent, AppSound, GConstants, GameRes, GameTxt, ReportConfig, UIID, Utils, SpriteLoad, resLoader, EventManager, BaseComponent, Platform, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _crd, ccclass, property, menu, hallSceneCtr;

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

  function _reportPossibleCrUseOfGameTxt(extras) {
    _reporterNs.report("GameTxt", "../../../config/GameTxt", _context.meta, extras);
  }

  function _reportPossibleCrUseOfReportConfig(extras) {
    _reporterNs.report("ReportConfig", "../../../config/ReportConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIID(extras) {
    _reporterNs.report("UIID", "../../../config/UIConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfinf_SpineAniCreate(extras) {
    _reporterNs.report("inf_SpineAniCreate", "../../../framework/InterfaceDefines", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUtils(extras) {
    _reporterNs.report("Utils", "../../../framework/Utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSpriteLoad(extras) {
    _reporterNs.report("SpriteLoad", "../../../framework/gui/sprite/SpriteLoad", _context.meta, extras);
  }

  function _reportPossibleCrUseOfresLoader(extras) {
    _reporterNs.report("resLoader", "../../../framework/loader/ResLoader", _context.meta, extras);
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
      Prefab = _cc.Prefab;
      ScrollView = _cc.ScrollView;
      Sprite = _cc.Sprite;
      UITransform = _cc.UITransform;
      Vec3 = _cc.Vec3;
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
      GameTxt = _unresolved_7.GameTxt;
    }, function (_unresolved_8) {
      ReportConfig = _unresolved_8.ReportConfig;
    }, function (_unresolved_9) {
      UIID = _unresolved_9.UIID;
    }, function (_unresolved_10) {
      Utils = _unresolved_10.Utils;
    }, function (_unresolved_11) {
      SpriteLoad = _unresolved_11.default;
    }, function (_unresolved_12) {
      resLoader = _unresolved_12.resLoader;
    }, function (_unresolved_13) {
      EventManager = _unresolved_13.EventManager;
    }, function (_unresolved_14) {
      BaseComponent = _unresolved_14.BaseComponent;
    }, function (_unresolved_15) {
      Platform = _unresolved_15.Platform;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "69751DZdbVIf48LadgbJhEU", "hallPrefabCtr", undefined);

      __checkObsolete__(['EventTouch', 'Label', 'Node', 'Prefab', 'ScrollView', 'Sprite', 'UITransform', 'Vec3', '_decorator', 'sp']);

      ({
        ccclass,
        property,
        menu
      } = _decorator);
      /**
       * Name = hallSceneCtr
       * URL = db://assets/model/hall/hallSceneCtr.ts
       * Time = Sat Apr 02 2022 17:35:04 GMT+0800 (中国标准时间)
       * Author = Tomoe
       *	
       * Life: onLoad-->onEnable->start->update->lateUpdate->onDisable->onDestroy
       */

      _export("hallSceneCtr", hallSceneCtr = (_dec = ccclass('hallSceneCtr_prefab'), _dec2 = menu('prefab/hall/hallScene'), _dec3 = property({
        tooltip: "背景动画根节点",
        type: Node
      }), _dec4 = property({
        tooltip: "大厅人物动画根节点",
        type: Node
      }), _dec5 = property({
        tooltip: "可吃场条框动画根节点",
        type: Node
      }), _dec6 = property({
        tooltip: "不可吃场条框动画根节点",
        type: Node
      }), _dec7 = property({
        tooltip: "用户昵称",
        type: Label
      }), _dec8 = property({
        tooltip: "用户头像",
        type: Node
      }), _dec9 = property({
        tooltip: "用户头像框",
        type: Node
      }), _dec10 = property({
        tooltip: "用户头像红点",
        type: Node
      }), _dec11 = property({
        tooltip: "商城按钮节点",
        type: Node
      }), _dec12 = property({
        tooltip: "签到按钮节点",
        type: Node
      }), _dec13 = property({
        tooltip: "好友按钮节点",
        type: Node
      }), _dec14 = property({
        tooltip: "活动按钮节点",
        type: Node
      }), _dec15 = property({
        tooltip: "首充礼包按钮节点",
        type: Node
      }), _dec16 = property({
        tooltip: "折扣礼包按钮节点",
        type: Node
      }), _dec17 = property({
        tooltip: "快速开始按钮节点",
        type: Node
      }), _dec18 = property({
        tooltip: "快速开始按钮文字",
        type: Label
      }), _dec19 = property({
        tooltip: "右边滚动容器",
        type: ScrollView
      }), _dec20 = property({
        tooltip: "右边滚动容器内容节点",
        type: Node
      }), _dec21 = property({
        tooltip: "遮挡节点",
        type: Node
      }), _dec(_class = _dec2(_class = (_class2 = class hallSceneCtr extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        //背景动画根节点
        //大厅人物动画根节点
        //经典场条框动画根节点
        //不洗牌场条框动画根节点
        //用户昵称
        //用户头像
        //用户头像框
        //用户头像红点
        //商城按钮节点
        //签到按钮节点
        //好友按钮节点
        //活动按钮节点
        //首充礼包按钮节点
        //折扣礼包按钮节点
        //快速开始按钮节点
        //快速开始按钮节点
        //右边滚动容器
        //右边滚动容器内容节点
        // 遮挡节点
        //当前游戏ID
        //当前选中场次(tabid 当前写死)

        /** 右侧所有功能菜单 */

        /** 红点UI队列 */

        /** 头像红点UI队列 */

        /** 活动中心红点UI队列 */

        /** 快速开始手势动画循环播放的句柄 */

        /** 快速开始按钮的手势动画 */

        /** 初始的滚动容器大小 */
        constructor() {
          super();

          _initializerDefineProperty(this, "spineBgNode", _descriptor, this);

          _initializerDefineProperty(this, "spineRoleNode", _descriptor2, this);

          _initializerDefineProperty(this, "nodeItemKeChi", _descriptor3, this);

          _initializerDefineProperty(this, "nodeItemBuKeChi", _descriptor4, this);

          _initializerDefineProperty(this, "userName", _descriptor5, this);

          _initializerDefineProperty(this, "headNode", _descriptor6, this);

          _initializerDefineProperty(this, "headBoxNode", _descriptor7, this);

          _initializerDefineProperty(this, "headRedDotNode", _descriptor8, this);

          _initializerDefineProperty(this, "nodeShop", _descriptor9, this);

          _initializerDefineProperty(this, "nodeSignin", _descriptor10, this);

          _initializerDefineProperty(this, "nodeFriend", _descriptor11, this);

          _initializerDefineProperty(this, "nodeActivity", _descriptor12, this);

          _initializerDefineProperty(this, "nodeFirstPayGift", _descriptor13, this);

          _initializerDefineProperty(this, "nodeLimitGift", _descriptor14, this);

          _initializerDefineProperty(this, "nodeQuickStart", _descriptor15, this);

          _initializerDefineProperty(this, "labelQuickStart", _descriptor16, this);

          _initializerDefineProperty(this, "scrollViewRight", _descriptor17, this);

          _initializerDefineProperty(this, "nodeScrollViewRightContent", _descriptor18, this);

          _initializerDefineProperty(this, "maskNode", _descriptor19, this);

          this._currowGameID = (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
            error: Error()
          }), GConstants) : GConstants).GameID.FXJ;
          this._currowLeaveTabID = null;
          this._roleSex = null;
          this._rightMenuList = [
          /** 折扣礼包 */
          (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
            error: Error()
          }), GConstants) : GConstants).MenuIDConf.ZKLB];
          this._redDotView = {};
          this._headRedDotView = {};
          this._activityRedDotView = {};
          this._handlerForeverQuickStart = null;
          this._quickHandlerClickSpine = null;
          this._initScrollRightHeight = 0;
        }
        /** override */


        onInitModuleEvent() {
          //用户信息更新
          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).USER_UPDATE_INFO, this.updateUserInfo); //用户资产更新

          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).USER_UPDATE_PROPERTY, this.updateGameLevelView); //限时礼包活动更新

          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).ACTIVITY_UPDATE_HOLIDAYSGIFTPACKAGE, this.updateGiftBtnLimitGift); //更新签到配置

          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).ACTIVITY_UPDATE_SIGNIN_CONF, this.updateMenuSignin); // 更新房间配置

          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).HALL_UPDATE_GAME_LEVEL_TAB, this.updateGameLevelView);
          /** 红点更新 */

          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NOTIFY_UPDATE_RED_DOT, this.refreshRedDot); //首充礼包活动更新

          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).ACTIVITY_UPDATE_FIRSTPAY_CONF, this.updateGiftBtnFirstPayGift); // 活动中心数据配置返回

          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_CMD_RESP_TASK_ACT_CONFIG, this.respAtyCenterConfig);
        }

        onLoad() {
          super.onLoad();
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).SYS_PLAY_MUSIC, (_crd && AppSound === void 0 ? (_reportPossibleCrUseOfAppSound({
            error: Error()
          }), AppSound) : AppSound).BgHall);
          this.initData();
          this.initView(); //请求破产线

          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_REQ_BANKRUPT_CONFIG); // 请求返回破产次数

          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_REQ_BANKRUPT_COUNT);
          this.checkAddDesk();
        }

        initData() {
          this._redDotView = {
            /** 七日签到 */
            [(_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
              error: Error()
            }), GConstants) : GConstants).RedDotConf.Sign]: this.nodeSignin,

            /** 商城 */
            [(_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
              error: Error()
            }), GConstants) : GConstants).RedDotConf.Shop]: this.nodeShop,

            /** 好友 */
            [(_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
              error: Error()
            }), GConstants) : GConstants).RedDotConf.Friend]: this.nodeFriend,

            /** 首充礼包 */
            [(_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
              error: Error()
            }), GConstants) : GConstants).RedDotConf.FirstPay]: this.nodeFirstPayGift,

            /** 付费礼包 */
            [(_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
              error: Error()
            }), GConstants) : GConstants).RedDotConf.Holiday]: this.nodeLimitGift
          };
          this._headRedDotView = {
            // [GConstants.RedDotConf.DressChatFrame]: this.headRedDotNode,
            // [GConstants.RedDotConf.DressClock]: this.headRedDotNode,
            // [GConstants.RedDotConf.DressHeadFrame]: this.headRedDotNode,
            [(_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
              error: Error()
            }), GConstants) : GConstants).RedDotConf.UserHead]: this.headRedDotNode
          };
          this._activityRedDotView = {
            /** 活动中心 */
            [(_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
              error: Error()
            }), GConstants) : GConstants).RedDotConf.ActivityNormal]: this.nodeActivity,

            /** 活动中心 */
            [(_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
              error: Error()
            }), GConstants) : GConstants).RedDotConf.ActivityNotice]: this.nodeActivity
          };
        }

        initView() {
          this.updateUserInfo();
          this.updateMenu();
          this.updateGiftBtn();
          this.updateSpineAni();
          this.updateQuickStartBtn();
          this.getPreLoaderRes((_crd && GameRes === void 0 ? (_reportPossibleCrUseOfGameRes({
            error: Error()
          }), GameRes) : GameRes).Prefab_HallTopUI.bundle, (_crd && GameRes === void 0 ? (_reportPossibleCrUseOfGameRes({
            error: Error()
          }), GameRes) : GameRes).Prefab_HallTopUI.path, Prefab, res => {
            this.node.addChild(res);
          });
          this.nodeShop.active = (_crd && Platform === void 0 ? (_reportPossibleCrUseOfPlatform({
            error: Error()
          }), Platform) : Platform).isCanPay();
          this.nodeScrollViewRightContent.active = false;
          this._initScrollRightHeight = this.scrollViewRight.node.getComponent(UITransform).height;
          this.scrollViewRight.scrollToTop(0.01, false);
        }

        onEnable() {
          this.maskNode.active = true;
          this.addScheduler(1, () => {
            this.maskNode.active = false;
          });
        }
        /**获取活动中心配置数据返回 */


        respAtyCenterConfig(event, isSuccess) {
          if (isSuccess != true) {
            return;
          }

          this.checkAddDesk();
        } //检查添加桌面的任务


        checkAddDesk() {
          let _activity_id = (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
            error: Error()
          }), GCache) : GCache).TaskInfo.checkUserReceiveInToByDesk();

          console.log('添加桌面发奖成立条件', !!_activity_id);

          if (!!_activity_id) {
            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
              error: Error()
            }), AppEvent) : AppEvent).NET_REQ_ADDDESK_AWARD, _activity_id);
          }

          ;
        } //更新房间信息


        updateGameLevelView() {
          this.updateQuickStartBtn();
        } //更新菜单状态


        updateMenu() {
          this.updateMenuSignin();
        } //更新菜单状态——签到


        updateMenuSignin() {
          this.nodeSignin.active = (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
            error: Error()
          }), GCache) : GCache).Activity.checkHaveSignin();
        } //更新礼包按钮状态


        updateGiftBtn(event = null) {
          this.updateGiftBtnFirstPayGift();
          this.updateGiftBtnLimitGift();
        } //更新礼包按钮状态——折扣礼包


        updateGiftBtnLimitGift() {
          let flag = (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
            error: Error()
          }), GCache) : GCache).RedDot.need_show_holiday();
          this.nodeLimitGift.active = flag;

          if (flag) {
            let data = (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
              error: Error()
            }), GCache) : GCache).Activity.getHolidaysGiftPackage();
            console.log("holiday:", data);
            let limitPackIcon = data.firstIcon;
            let self = this;
            (_crd && resLoader === void 0 ? (_reportPossibleCrUseOfresLoader({
              error: Error()
            }), resLoader) : resLoader).loadRemote(limitPackIcon, {
              ext: '.jpg'
            }, (err, imageAsset) => {
              if (!imageAsset) {
                //资源可能还在加载中
                return;
              }

              if (!self.node || self.node.isValid == false) {
                return;
              }

              let spriteFrame = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                error: Error()
              }), Utils) : Utils).image_ImageAssetToSpriteFrame(imageAsset);

              if (spriteFrame) {
                this.nodeLimitGift.getComponent(Sprite).spriteFrame = spriteFrame;
              }
            });
          }
        }
        /**
         * 更新首充按钮状态——首充礼包,当数据为空时,首充按钮不显示
         */


        updateGiftBtnFirstPayGift() {
          let flag = (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
            error: Error()
          }), GCache) : GCache).RedDot.need_show_gift_firstpay();
          this.nodeFirstPayGift.active = flag;

          if (flag) {
            let data = (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
              error: Error()
            }), GCache) : GCache).Activity.getFirstPayPackage();
            console.log("firstpay:", data);
            let firstPackIcon = data.firstIcon;
            let self = this;
            (_crd && resLoader === void 0 ? (_reportPossibleCrUseOfresLoader({
              error: Error()
            }), resLoader) : resLoader).loadRemote(firstPackIcon, {
              ext: '.jpg'
            }, (err, imageAsset) => {
              if (!imageAsset) {
                //资源可能还在加载中
                return;
              }

              if (!self.node || self.node.isValid == false) {
                return;
              }

              let spriteFrame = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                error: Error()
              }), Utils) : Utils).image_ImageAssetToSpriteFrame(imageAsset);

              if (spriteFrame) {
                this.nodeFirstPayGift.getComponent(Sprite).spriteFrame = spriteFrame;
              }
            });
          }
        }

        start() {
          this.refreshRedDot();
          this.nodeScrollViewRightContent.active = true;
          this.reqQueneList();
        }

        reqQueneList() {
          //请求游戏房间信息
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_REQ_GAME_LEVEL_ROOM_TAB, this._currowGameID); // //请求游戏场次房间人数
          // EventManager.dispatch(AppEvent.NET_REQ_GAME_LEVEL_PERSON_COUNT, this._currowGameID)
          // //请求在线人数
          // EventManager.dispatch(AppEvent.NET_REQ_ONLINE_PERSON)
        }

        onClickMenu(event, custom) {
          this.clickEffect();
          this.print("hallSceneCtr", "onClickMenu", custom);

          if (custom == "quickStart") {
            // 快速开始
            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
              error: Error()
            }), AppEvent) : AppEvent).REPORT_CLIENT_CLICK, {
              eventID: (_crd && ReportConfig === void 0 ? (_reportPossibleCrUseOfReportConfig({
                error: Error()
              }), ReportConfig) : ReportConfig).hall_5
            });
            (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
              error: Error()
            }), GCache) : GCache).SelectGame.checkQuickGame(this._currowGameID);
          } else if (custom == "quickPay") {// 快捷充值
          } else if (custom == "personalCenter") {
            // 打开个人中心
            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
              error: Error()
            }), AppEvent) : AppEvent).REPORT_CLIENT_CLICK, {
              eventID: (_crd && ReportConfig === void 0 ? (_reportPossibleCrUseOfReportConfig({
                error: Error()
              }), ReportConfig) : ReportConfig).hall_1
            });
            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
              error: Error()
            }), AppEvent) : AppEvent).VIEW_UI_OPEN, (_crd && UIID === void 0 ? (_reportPossibleCrUseOfUIID({
              error: Error()
            }), UIID) : UIID).PlayerInfoCenter, null, null, null, true);
          } else if (custom == "shop") {
            // 打开商城界面
            if ((_crd && Platform === void 0 ? (_reportPossibleCrUseOfPlatform({
              error: Error()
            }), Platform) : Platform).isCanPay()) {
              (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
                error: Error()
              }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
                error: Error()
              }), AppEvent) : AppEvent).REPORT_CLIENT_CLICK, {
                eventID: (_crd && ReportConfig === void 0 ? (_reportPossibleCrUseOfReportConfig({
                  error: Error()
                }), ReportConfig) : ReportConfig).hall_8
              });
              (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
                error: Error()
              }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
                error: Error()
              }), AppEvent) : AppEvent).SYS_PLAY_EFFECT, (_crd && AppSound === void 0 ? (_reportPossibleCrUseOfAppSound({
                error: Error()
              }), AppSound) : AppSound).SpecialClick);
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
          } else if (custom == "signin") {
            // 打开签到界面
            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
              error: Error()
            }), AppEvent) : AppEvent).REPORT_CLIENT_CLICK, {
              eventID: (_crd && ReportConfig === void 0 ? (_reportPossibleCrUseOfReportConfig({
                error: Error()
              }), ReportConfig) : ReportConfig).hall_10
            });
            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
              error: Error()
            }), AppEvent) : AppEvent).VIEW_UI_OPEN, (_crd && UIID === void 0 ? (_reportPossibleCrUseOfUIID({
              error: Error()
            }), UIID) : UIID).SigninPrefab, null, null, null, true);
          } else if (custom == "friend") {
            // 打开好友界面
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
            }), UIID) : UIID).FriendPrefab, null, null, null, true);
          } else if (custom == "setting") {
            // 打开设置界面
            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
              error: Error()
            }), AppEvent) : AppEvent).VIEW_UI_OPEN, (_crd && UIID === void 0 ? (_reportPossibleCrUseOfUIID({
              error: Error()
            }), UIID) : UIID).SettingPrefab, null, null, null, true);
          } else if (custom == 'activity') {
            //点击活动按钮bankruptcy
            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
              error: Error()
            }), AppEvent) : AppEvent).REPORT_CLIENT_CLICK, {
              eventID: (_crd && ReportConfig === void 0 ? (_reportPossibleCrUseOfReportConfig({
                error: Error()
              }), ReportConfig) : ReportConfig).hall_9
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
            }), UIID) : UIID).AtyCenterPrefab, null, null, null, true);
          }
        }

        onClickGift(event, custom) {
          this.clickEffect();
          this.print("hallSceneCtr", "onClickGift", custom);

          if (custom == "limitGift") {
            // 打开限时折扣界面
            if ((_crd && Platform === void 0 ? (_reportPossibleCrUseOfPlatform({
              error: Error()
            }), Platform) : Platform).isCanPay() == false) {
              return false;
            }

            if ((_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
              error: Error()
            }), GCache) : GCache).RedDot.need_show_holiday() == false) {
              this.nodeLimitGift.active = false;
              (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
                error: Error()
              }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
                error: Error()
              }), AppEvent) : AppEvent).SYS_TOAST_TIP, {
                content: (_crd && GameTxt === void 0 ? (_reportPossibleCrUseOfGameTxt({
                  error: Error()
                }), GameTxt) : GameTxt).activity_outtime
              });
              return;
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
            }), AppEvent) : AppEvent).VIEW_UI_OPEN, (_crd && UIID === void 0 ? (_reportPossibleCrUseOfUIID({
              error: Error()
            }), UIID) : UIID).GiftDiscountPrefab, {
              pay_scene: (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
                error: Error()
              }), GConstants) : GConstants).PayScene.hall
            }, null, null, true);
          } else if (custom == "firstPay") {
            // 打开首充界面
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
            }), UIID) : UIID).FirstPayPrefab, null, null, null, true);
          }
        }

        onClickRoom(event, custom) {
          this.clickEffect();

          if (custom == "kechi") {
            //可吃场
            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
              error: Error()
            }), AppEvent) : AppEvent).REPORT_CLIENT_CLICK, {
              eventID: (_crd && ReportConfig === void 0 ? (_reportPossibleCrUseOfReportConfig({
                error: Error()
              }), ReportConfig) : ReportConfig).hall_3
            });
            this._currowLeaveTabID = 0;
            this.gotoGameLeave();
          } else if (custom == "bukechi") {
            //不可吃场
            this._currowLeaveTabID = 1;
            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
              error: Error()
            }), AppEvent) : AppEvent).REPORT_CLIENT_CLICK, {
              eventID: (_crd && ReportConfig === void 0 ? (_reportPossibleCrUseOfReportConfig({
                error: Error()
              }), ReportConfig) : ReportConfig).hall_4
            });
            this.gotoGameLeave();
          }
        }

        clickEffect() {
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).SYS_PLAY_EFFECT, (_crd && AppSound === void 0 ? (_reportPossibleCrUseOfAppSound({
            error: Error()
          }), AppSound) : AppSound).CommClick);
        } //前往单个场次


        gotoGameLeave() {
          if ((_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
            error: Error()
          }), GCache) : GCache).SelectGame.getGameConfigByGameID(this._currowGameID) == null) {
            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
              error: Error()
            }), AppEvent) : AppEvent).SYS_TOAST_TIP, {
              content: (_crd && GameTxt === void 0 ? (_reportPossibleCrUseOfGameTxt({
                error: Error()
              }), GameTxt) : GameTxt).hall_game_not_have
            });
            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
              error: Error()
            }), AppEvent) : AppEvent).NET_REQ_HALL_GAME_CONFIG);
            return;
          }

          if ((_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
            error: Error()
          }), GCache) : GCache).SelectGame.getGameLevelRule(this._currowGameID, this._currowLeaveTabID) == null) {
            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
              error: Error()
            }), AppEvent) : AppEvent).SYS_TOAST_TIP, {
              content: (_crd && GameTxt === void 0 ? (_reportPossibleCrUseOfGameTxt({
                error: Error()
              }), GameTxt) : GameTxt).hall_leave_not_have
            });
            return;
          }

          let param = {
            game_id: this._currowGameID,
            tab_id: this._currowLeaveTabID
          };
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).VIEW_UI_OPEN, (_crd && UIID === void 0 ? (_reportPossibleCrUseOfUIID({
            error: Error()
          }), UIID) : UIID).SelectLevelPrefab, param, {});
          this.maskNode.active = true;
          let timeout = this.addScheduler(1, () => {
            this.stopScheduler(timeout);

            if (this.node && this.node.isValid == true) {
              this.maskNode.active = false;
            }
          });
        } //更新用户头像


        updateUserHead() {
          let userSex = (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
            error: Error()
          }), GCache) : GCache).User.getUserSex();
          let spriteLoad = this.headNode.getComponent(_crd && SpriteLoad === void 0 ? (_reportPossibleCrUseOfSpriteLoad({
            error: Error()
          }), SpriteLoad) : SpriteLoad);
          let headArray = (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
            error: Error()
          }), GCache) : GCache).User.getUserHeadArray();

          if (headArray && headArray.s != "") {
            let self = this;
            spriteLoad.setRemoteUrl(headArray.s);
          } else {
            if (userSex == 2) {
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
        } //更新用户信息


        updateUserInfo() {
          let maxLen = 6;
          let name = (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
            error: Error()
          }), GCache) : GCache).User.getUserName();

          if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).string_isAllOneBytes(name)) {
            maxLen = 10;
          }

          this.userName.string = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).string_subString(name, maxLen, false, "");
          this.updateUserHead();
          this.updateRoleShow();
        } //更新角色信息


        updateRoleShow() {
          this.print("updateRoleShow", (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
            error: Error()
          }), GCache) : GCache).User.getUserSex(), this._roleSex); // mark 临时配置，上角色版本再处理

          let userSex = (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
            error: Error()
          }), GCache) : GCache).User.getUserSex();

          if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).isNotNull(this._roleSex) && this._roleSex == userSex) {
            return;
          }

          this._roleSex == userSex;
          this.spineRoleNode.removeAllChildren();
          let roleAnimConf = (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
            error: Error()
          }), GCache) : GCache).GoodsData.getRoleAnimConfigById(null);
          let self = this;
          let standbyActIndex = 1;

          let nextStandbyAct = function () {
            if (standbyActIndex > roleAnimConf["standby"].length) {
              standbyActIndex = 1;
            }

            let act = roleAnimConf["standby"][standbyActIndex - 1];
            standbyActIndex = standbyActIndex + 1;
            return act;
          };

          let setStatus = function (actName, isloop = false) {
            if (!self.spineRoleNode || self.spineRoleNode.isValid == false) {
              return;
            }

            self.spineRoleNode.active = true;
            let roleAni = {
              parentNode: self.spineRoleNode,
              resConf: roleAnimConf.path,
              aniName: actName,
              trackIndex: 0,
              isLoop: isloop,
              callStartFunc: () => {
                if (actName == roleAnimConf.hall) {
                  // initTouchEvent();
                  standbyActIndex = 1;
                }
              },
              oneLoopEndcallFunc: () => {
                setStatus(nextStandbyAct());
              },
              processCallFunc: (trackEntry, ev) => {
                if (trackEntry.animation.name == roleAnimConf.hall) {
                  (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
                    error: Error()
                  }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
                    error: Error()
                  }), AppEvent) : AppEvent).SYS_STOP_PLAY_EFFECT); // EventManager.dispatch(AppEvent.SYS_PLAY_EFFECT, AppSound["RoleInHall_" + self._showRoleID]);

                  standbyActIndex = 1;
                } else if (trackEntry.animation.name == roleAnimConf.role) {
                  if (ev.data.name == "juese") {
                    (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
                      error: Error()
                    }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
                      error: Error()
                    }), AppEvent) : AppEvent).SYS_STOP_PLAY_EFFECT); // EventManager.dispatch(AppEvent.SYS_PLAY_EFFECT, AppSound["Role_" + self._showRoleID]);

                    standbyActIndex = 1;
                  } else if (ev.data.name == "shanzi_kai") {// EventManager.dispatch(AppEvent.SYS_PLAY_EFFECT, AppSound.RoleOpenFan);
                  } else if (ev.data.name == "music") {// EventManager.dispatch(AppEvent.SYS_PLAY_EFFECT, AppSound.Role_30_1);
                  }
                }
              }
            };
            self.spineRoleNode.removeAllChildren();
            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
              error: Error()
            }), AppEvent) : AppEvent).SYS_ANI_PLAY, roleAni);
          };

          setStatus(roleAnimConf.hall, false);
        } // 播放动画


        updateSpineAni() {
          let keChiAni = {
            parentNode: this.nodeItemKeChi,
            resConf: (_crd && GameRes === void 0 ? (_reportPossibleCrUseOfGameRes({
              error: Error()
            }), GameRes) : GameRes).Spine_Rukou_Kechi,
            aniName: "animation",
            trackIndex: 0,
            isLoop: true
          };
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).SYS_ANI_PLAY, keChiAni);
          let buKeChiAni = {
            parentNode: this.nodeItemBuKeChi,
            resConf: (_crd && GameRes === void 0 ? (_reportPossibleCrUseOfGameRes({
              error: Error()
            }), GameRes) : GameRes).Spine_Rukou_Bukechi,
            aniName: "animation",
            trackIndex: 0,
            isLoop: true
          };
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).SYS_ANI_PLAY, buKeChiAni);
        } // 更新快速开始


        updateQuickStartBtn() {
          this.stopScheduler(this._handlerForeverQuickStart);

          if ((_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
            error: Error()
          }), GCache) : GCache).User.getClickRecord("快速开始") == 0) {
            //快速开始点击手势
            this._quickHandlerClickSpine = {
              parentNode: this.nodeQuickStart,
              resConf: (_crd && GameRes === void 0 ? (_reportPossibleCrUseOfGameRes({
                error: Error()
              }), GameRes) : GameRes).Spine_Guide_Hander_Click,
              aniName: "hand_dianji_loop",
              trackIndex: 0,
              isLoop: false,
              toPos: new Vec3(-10, 10, 0)
            };
            this._handlerForeverQuickStart = this.addScheduler(30, () => {
              (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
                error: Error()
              }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
                error: Error()
              }), AppEvent) : AppEvent).SYS_ANI_STOP, this._quickHandlerClickSpine);
              (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
                error: Error()
              }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
                error: Error()
              }), AppEvent) : AppEvent).SYS_ANI_PLAY, this._quickHandlerClickSpine);
            });
            this.addSchedulerOnce(1, () => {
              (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
                error: Error()
              }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
                error: Error()
              }), AppEvent) : AppEvent).SYS_ANI_STOP, this._quickHandlerClickSpine);
              (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
                error: Error()
              }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
                error: Error()
              }), AppEvent) : AppEvent).SYS_ANI_PLAY, this._quickHandlerClickSpine);
            });
          }

          let gameName = (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
            error: Error()
          }), GCache) : GCache).SelectGame.checkQuickGameName(this._currowGameID);

          if (!(_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).string_isEmpty(gameName)) {
            this.labelQuickStart.string = gameName;
          }
        }
        /** 红点更新 */


        refreshRedDot(event = null, keyType = null) {
          this.updateGiftBagShow();

          if (keyType == null) {
            for (let keyType in this._redDotView) {
              let nodeOrList = this._redDotView[keyType];
              let imgRedDot = null;

              if (nodeOrList instanceof Array) {
                nodeOrList.forEach((node, index) => {
                  if (node.active == true) {
                    imgRedDot = node.getChildByName("img_dot");

                    if (imgRedDot) {
                      imgRedDot.active = (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
                        error: Error()
                      }), GCache) : GCache).RedDot.hasRedDot(keyType);
                    }
                  } else {
                    console.log("入口已经隐藏===>", keyType);
                  }
                });
              } else {
                if (nodeOrList.active == true) {
                  imgRedDot = nodeOrList.getChildByName("img_dot");

                  if (imgRedDot) {
                    imgRedDot.active = (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
                      error: Error()
                    }), GCache) : GCache).RedDot.hasRedDot(keyType);
                    console.log(keyType, "=====", imgRedDot.active);
                  }
                } else {
                  console.log("入口已经隐藏===>", keyType);
                }
              }
            } //头像红点


            let active = false;

            for (let keyType in this._headRedDotView) {
              if (active == false) {
                active = (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
                  error: Error()
                }), GCache) : GCache).RedDot.hasRedDot(keyType);
              }
            }

            this.headRedDotNode.active = active; //活动红点

            let atyActive = false;

            for (let keyType in this._activityRedDotView) {
              if (atyActive == false) {
                atyActive = (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
                  error: Error()
                }), GCache) : GCache).RedDot.hasRedDot(keyType);
              }
            }

            let imgRedDot = this.nodeActivity.getChildByName("img_dot");

            if (imgRedDot) {
              imgRedDot.active = atyActive;
            }
          } else {
            if (this._redDotView[keyType] != null) {
              let nodeOrList = this._redDotView[keyType];
              let imgRedDot = null;

              if (nodeOrList instanceof Array) {
                nodeOrList.forEach((node, index) => {
                  if (node.active == true) {
                    imgRedDot = node.getChildByName("img_dot");

                    if (imgRedDot) {
                      imgRedDot.active = (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
                        error: Error()
                      }), GCache) : GCache).RedDot.hasRedDot(keyType);
                      console.log(keyType, "=====", imgRedDot.active);
                    }
                  }
                });
              } else {
                if (nodeOrList.active == true) {
                  imgRedDot = nodeOrList.getChildByName("img_dot");

                  if (imgRedDot) {
                    imgRedDot.active = (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
                      error: Error()
                    }), GCache) : GCache).RedDot.hasRedDot(keyType);
                  }
                }
              }
            } //头像红点


            if (this._headRedDotView[keyType] != null) {
              let active = false;

              for (let keyType in this._headRedDotView) {
                if (active == false) {
                  active = (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
                    error: Error()
                  }), GCache) : GCache).RedDot.hasRedDot(keyType);
                }
              }

              this.headRedDotNode.active = active;
            } //活动红点


            if (this._activityRedDotView[keyType] != null) {
              let atyActive = false;

              for (let keyType in this._activityRedDotView) {
                if (atyActive == false) {
                  atyActive = (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
                    error: Error()
                  }), GCache) : GCache).RedDot.hasRedDot(keyType);
                }
              }

              let imgRedDot = this.nodeActivity.getChildByName("img_dot");

              if (imgRedDot) {
                imgRedDot.active = atyActive;
              }
            }

            this.updateGiftBagShow(keyType);
          }

          this.updateRightScrollView();
        }
        /** 更新礼包入口的显示 */


        updateGiftBagShow(reddotType = null) {
          if (reddotType == null) {
            // this.btn_newUser7Day.active = GCache.RedDot.need_show_newuser7day();
            // this.btn_GiftDiscount.active = GCache.RedDot.need_show_gift_discount();
            // this.btn_GiftNewUser.active = GCache.RedDot.need_show_gift_newuser();
            // this.btn_GiftLimit.active = GCache.RedDot.need_show_gift_limit();
            // this.btn_GiftBuyLimit.active = GCache.RedDot.need_show_gift_buyLimit();
            // this.btn_MuchGold.active = GCache.RedDot.need_show_Advice_MuchGold();
            // this.btn_FreeGold.active = GCache.RedDot.need_show_Advice_FreeGold();
            return;
          } // if (reddotType == GConstants.RedDotConf.NewUserServenDay) {
          // 	this.btn_newUser7Day.active = GCache.RedDot.need_show_newuser7day();
          // } else if (reddotType == GConstants.RedDotConf.Gift_Discount) {
          // 	this.btn_GiftDiscount.active = GCache.RedDot.need_show_gift_discount();
          // } else if (reddotType == GConstants.RedDotConf.Gift_NewUser) {
          // 	this.btn_GiftNewUser.active = GCache.RedDot.need_show_gift_newuser();
          // } else if (reddotType == GConstants.RedDotConf.Gift_Limit) {
          // 	this.btn_GiftLimit.active = GCache.RedDot.need_show_gift_limit();
          // } else if (reddotType == GConstants.RedDotConf.Gift_BuyLimit) {
          // 	this.btn_GiftBuyLimit.active = GCache.RedDot.need_show_gift_buyLimit();
          // } else if (reddotType == GConstants.RedDotConf.AdMuchGold) {
          // 	this.btn_MuchGold.active = GCache.RedDot.need_show_Advice_MuchGold();
          // } else if (reddotType == GConstants.RedDotConf.AdFreeGold) {
          // 	this.btn_FreeGold.active = GCache.RedDot.need_show_Advice_FreeGold();
          // }

        }
        /** 更新右边的Scrollview */


        updateRightScrollView() {
          let self = this;
          setTimeout(() => {
            let currowScrollContentHeight = self.nodeScrollViewRightContent.getComponent(UITransform).height;

            if (currowScrollContentHeight > self._initScrollRightHeight) {
              self.scrollViewRight.enabled = true;
            } else {
              self.scrollViewRight.scrollToTop(0.01, false);
              self.scrollViewRight.enabled = false;
            }
          }, 0);
        } //销毁


        onDestroy() {
          super.onDestroy();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "spineBgNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "spineRoleNode", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "nodeItemKeChi", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "nodeItemBuKeChi", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "userName", [_dec7], {
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
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "headBoxNode", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "headRedDotNode", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "nodeShop", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "nodeSignin", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "nodeFriend", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "nodeActivity", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "nodeFirstPayGift", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "nodeLimitGift", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "nodeQuickStart", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "labelQuickStart", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "scrollViewRight", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "nodeScrollViewRightContent", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "maskNode", [_dec21], {
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
//# sourceMappingURL=6e95ce01e0bf059508cf47640f817c8a15325c57.js.map