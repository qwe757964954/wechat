System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, LabelComponent, Layout, Node, ScrollView, Sprite, UITransform, _decorator, instantiate, GCache, AppEvent, AppSound, GConstants, ReportConfig, Utils, ButtonSimple, DelegateComponent, resLoader, EventManager, BaseComponent, Platform, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _crd, ccclass, property, giftDiscountCtr;

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

  function _reportPossibleCrUseOfReportConfig(extras) {
    _reporterNs.report("ReportConfig", "../../../config/ReportConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUtils(extras) {
    _reporterNs.report("Utils", "../../../framework/Utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfButtonSimple(extras) {
    _reporterNs.report("ButtonSimple", "../../../framework/gui/button/ButtonSimple", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDelegateComponent(extras) {
    _reporterNs.report("DelegateComponent", "../../../framework/layer/DelegateComponent", _context.meta, extras);
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
      LabelComponent = _cc.LabelComponent;
      Layout = _cc.Layout;
      Node = _cc.Node;
      ScrollView = _cc.ScrollView;
      Sprite = _cc.Sprite;
      UITransform = _cc.UITransform;
      _decorator = _cc._decorator;
      instantiate = _cc.instantiate;
    }, function (_unresolved_2) {
      GCache = _unresolved_2.GCache;
    }, function (_unresolved_3) {
      AppEvent = _unresolved_3.AppEvent;
    }, function (_unresolved_4) {
      AppSound = _unresolved_4.AppSound;
    }, function (_unresolved_5) {
      GConstants = _unresolved_5.GConstants;
    }, function (_unresolved_6) {
      ReportConfig = _unresolved_6.ReportConfig;
    }, function (_unresolved_7) {
      Utils = _unresolved_7.Utils;
    }, function (_unresolved_8) {
      ButtonSimple = _unresolved_8.default;
    }, function (_unresolved_9) {
      DelegateComponent = _unresolved_9.DelegateComponent;
    }, function (_unresolved_10) {
      resLoader = _unresolved_10.resLoader;
    }, function (_unresolved_11) {
      EventManager = _unresolved_11.EventManager;
    }, function (_unresolved_12) {
      BaseComponent = _unresolved_12.BaseComponent;
    }, function (_unresolved_13) {
      Platform = _unresolved_13.Platform;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "14074wkkdpIsIvVq6KR0OSX", "giftDiscountCtr", undefined);

      __checkObsolete__(['EventTouch', 'LabelComponent', 'Layout', 'Node', 'ScrollView', 'Sprite', 'UITransform', '_decorator', 'instantiate']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Name = giftDiscountCtr
       * URL = db://assets/package/giftbag/scripts/giftDiscountCtr.ts
       * Time = Sun Jan 29 2023 14:47:26 GMT+0800 (中国标准时间)
       * Author = xueya
       * Life: onLoad-->onEnable->start->update->lateUpdate->onDisable->onDestroy
       * 每日特价礼包，支持RMB看视频分享购买
       */

      _export("giftDiscountCtr", giftDiscountCtr = (_dec = ccclass('giftDiscountCtr'), _dec2 = property({
        tooltip: "礼包克隆节点",
        type: Node
      }), _dec3 = property({
        tooltip: "礼包滚动容器",
        type: ScrollView
      }), _dec4 = property({
        tooltip: "礼包box容器节点",
        type: Node
      }), _dec5 = property({
        tooltip: "关闭节点",
        type: Node
      }), _dec6 = property({
        tooltip: "购买节点",
        type: Node
      }), _dec7 = property({
        tooltip: "背景节点",
        type: Node
      }), _dec(_class = (_class2 = class giftDiscountCtr extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "nodeBoxGift", _descriptor, this);

          _initializerDefineProperty(this, "scrollowView", _descriptor2, this);

          _initializerDefineProperty(this, "itemPanel", _descriptor3, this);

          _initializerDefineProperty(this, "btnClose", _descriptor4, this);

          _initializerDefineProperty(this, "btnBuy", _descriptor5, this);

          _initializerDefineProperty(this, "bgNode", _descriptor6, this);

          this._holidayConf = {};
          this._selectedIndex = -1;
          this._currowSelectItemBg = null;
          this._cloneBtnBuyicon = null;
          this._FowardPayScene = null;
          this._sendCheckWatchADsData = null;
        }

        /**初始化添加事件绑定 */
        onInitModuleEvent() {
          /** 请求分享领奖返回 */
          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_RESP_SHARE_AWARD, this.respShareAndAdsAward);
          /** 请求看视频领奖返回 */

          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_RESP_ADS_AWARD, this.respShareAndAdsAward); //限时礼包活动更新

          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).ACTIVITY_UPDATE_HOLIDAYSGIFTPACKAGE, this.updateView);
          /** 礼包红点更新 */

          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NOTIFY_UPDATE_RED_DOT, this.redDotUpdate); //rmb支付回调

          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_FORWARD_REPORT_PAY_ORDER, this.respPayOrder);
        }

        onLoad() {
          //获取上一个付费场景
          let param = this.getComponent(_crd && DelegateComponent === void 0 ? (_reportPossibleCrUseOfDelegateComponent({
            error: Error()
          }), DelegateComponent) : DelegateComponent).getParams();
          console.log(param, 'param');
          this._FowardPayScene = param ? param["pay_scene"] : null;
          this.initView();
          this.updateView(); //请求限时折扣配置数据

          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_REQ_HOLIDAYS_GIFTPACKAGE);
          (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
            error: Error()
          }), GCache) : GCache).RedDot.update_reddot_gift_holiday();
        }

        start() {
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).REPORT_CLIENT_CLICK, {
            eventID: (_crd && ReportConfig === void 0 ? (_reportPossibleCrUseOfReportConfig({
              error: Error()
            }), ReportConfig) : ReportConfig).gift_holiday_2
          });
        }

        /** 请求看视频领奖和分享领奖返回 */
        respShareAndAdsAward(event, isSuccess, respData, reqData) {
          console.log("respShareAndAdsAward", isSuccess, respData, reqData);

          if (isSuccess == false) {
            return;
          }

          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_REQ_HOLIDAYS_GIFTPACKAGE);
        }
        /** 支付订单返回 */


        respPayOrder(event, isSuccess, respData, reqData) {
          console.log("respPayOrder:discount", isSuccess, respData, reqData);

          if (isSuccess == false) {
            return;
          }

          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_REQ_HOLIDAYS_GIFTPACKAGE);
        }
        /** 初始化界面 */


        initView() {
          this.nodeBoxGift.active = false;
          this.scrollowView.node.active = true;
          this.itemPanel.active = true;
          this.btnBuy.active = false;
          this.btnClose.active = true;
          this.detailData();
          this.updateView();
        }
        /** 处理数据 */


        detailData() {
          this._holidayConf = (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
            error: Error()
          }), GCache) : GCache).Activity.getHolidaysGiftPackage();
        }
        /** 更新背景 */


        refreshImageBg() {
          let self = this;

          if (this._holidayConf && this._holidayConf["basemap"] != "") {
            (_crd && resLoader === void 0 ? (_reportPossibleCrUseOfresLoader({
              error: Error()
            }), resLoader) : resLoader).loadRemote(this._holidayConf["basemap"], {
              ext: `.jpg`
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
                this.bgNode.getComponent(Sprite).spriteFrame = spriteFrame;
              }
            });
          }
        }
        /** 更新界面 */


        updateView() {
          //当有更新时，重新获取一次礼包缓存数据
          this.detailData(); // this.refreshImageBg()

          let maxDataItem = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).table_verify(this._holidayConf['giftpack'], true).length;
          this._selectedIndex = -1;

          for (let i = 0; i < maxDataItem; i++) {
            let data = this.getItemData(i);

            if (data) {
              if (data.hadNum < data.maxNum || data.maxNum == 0) {
                this._selectedIndex = i;
                break;
              }
            }
          }

          let currowNum = this.itemPanel.children.length;

          if (currowNum < maxDataItem) {
            for (let i = currowNum; i < maxDataItem; i++) {
              let node = instantiate(this.nodeBoxGift);
              this.itemPanel.addChild(node);
            }
          } else if (currowNum > maxDataItem) {
            for (let i = currowNum - 1; i >= maxDataItem; i--) {
              let node = this.itemPanel.children[i];

              if (node) {
                node.removeFromParent();
              }
            }
          }

          this._currowSelectItemBg = null;
          let count = 0;

          for (let i = 0; i < this.itemPanel.children.length; i++) {
            let nodeItem = this.itemPanel.children[i];
            count = count + 1;
            this.updateItemBox(nodeItem, i);
          }

          let self = this;
          let layout = self.itemPanel.getComponent(Layout);
          layout.spacingX = count == 2 ? 100 : 0;
          layout.updateLayout();
          this.addSchedulerOnce(0, () => {
            if (self.itemPanel.getComponent(UITransform).width > self.scrollowView.node.getComponent(UITransform).width) {
              self.scrollowView.enabled = true;
              self.scrollowView.scrollToLeft(0.01, false);
            } else {
              self.scrollowView.enabled = false;
            }
          });
          this.updateButton();
        }
        /** 更新按钮 */


        updateButton() {
          let self = this;

          if (this._holidayConf['giftpack']) {
            let item = this._holidayConf['giftpack'][this._selectedIndex];

            if (item.buyBtnIcon) {
              (_crd && resLoader === void 0 ? (_reportPossibleCrUseOfresLoader({
                error: Error()
              }), resLoader) : resLoader).loadRemote(item.buyBtnIcon, {
                ext: `.jpg`
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
                  this.btnBuy.getComponent(Sprite).spriteFrame = spriteFrame;
                }
              });
              this.btnBuy.active = true;
            }
          } else {
            this.btnBuy.active = false;
          }
        }
        /**
         * 获取单个item的数据
         * @param idx 数据下标 0 1 2
         * @returns {}
         */


        getItemData(idx) {
          if (this._holidayConf == null || this._holidayConf['giftpack'] == null) {
            return null;
          }

          let item = this._holidayConf['giftpack'][idx];

          if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).table_isEmpty(item)) {
            return null;
          }

          let goodsId = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).number_valueOf(item['gid'], 0);

          if (goodsId <= 0) {
            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
              error: Error()
            }), AppEvent) : AppEvent).SYS_TOAST_TIP, {
              content: "err:找不到商品数据"
            });
            return;
          }

          let payData = (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
            error: Error()
          }), GCache) : GCache).ShopInfo.getPriceByGoodsSceneId((_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
            error: Error()
          }), GConstants) : GConstants).GoodsListID.limitPack, goodsId);
          let maxNum = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).number_valueOf(payData['limitNum'], 0);
          let isLimit = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).number_valueOf(payData['limit_buy_way'], 0);
          maxNum = isLimit > 0 ? maxNum : 0;
          return {
            maxNum: maxNum,
            hadNum: item.num,
            icon: item.icon
          };
        }
        /**
         * 
         * @param node 节点
         * @param idx 索引
         * @returns 
         */


        updateItemBox(node, idx) {
          let select = node.getChildByName("select");
          let bg = node.getChildByName("bg"); //选中

          let check = bg.getChildByName("check"); //蒙版

          let mask = bg.getChildByName("mask"); //购买

          let buy = bg.getChildByName("buy");
          let imgLabel = node.getChildByName("imgLabel");
          let labelNum = imgLabel.getChildByName("labelNum");
          let data = this.getItemData(idx);

          if (!data) {
            node.active = false;
            return;
          } //初始化


          node.active = true;
          check.active = false;
          select.active = false;
          mask.active = false;
          buy.active = false;
          node["Index"] = idx;
          let iconUrl = data.icon;
          console.log("_selectedIndex:updateItemBox:", this._selectedIndex);

          if (data.hadNum < data.maxNum || data.maxNum == 0) {
            if (this._selectedIndex == idx) {
              this._currowSelectItemBg = bg;
              check.active = true;
              select.active = true;
            }
          } else {
            //已经购买
            mask.active = true;
            buy.active = true;
            imgLabel.active = false;
            labelNum.active = false;
          }

          this.getPreLoaderRemoteRes(iconUrl, '.jpg', imageAsset => {
            if (!imageAsset) {
              //资源可能还在加载中
              return;
            }

            if (!bg || bg.isValid == false) {
              return;
            }

            let spriteFrame = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).image_ImageAssetToSpriteFrame(imageAsset);

            if (spriteFrame) {
              let spriteComponent = bg.getComponent(Sprite);
              spriteComponent.spriteFrame = spriteFrame;
            }
          });
          let buttonSimple = node.getComponent(_crd && ButtonSimple === void 0 ? (_reportPossibleCrUseOfButtonSimple({
            error: Error()
          }), ButtonSimple) : ButtonSimple);

          if (data.maxNum > 0) {
            buttonSimple.Interactable = data.hadNum < data.maxNum;
            labelNum.getComponent(LabelComponent).string = data.hadNum + "/" + data.maxNum;
          } else {
            imgLabel.active = false;
            labelNum.active = false;
          }
        }
        /**
         * 点击了单个Item
         * @param event 
         * @returns 
         */


        onClickChooseItem(event) {
          if (event.currentTarget["Index"] == null) {
            return;
          }

          let idx = event.currentTarget["Index"];

          if (this._selectedIndex == idx) {
            return;
          }

          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).SYS_PLAY_EFFECT, (_crd && AppSound === void 0 ? (_reportPossibleCrUseOfAppSound({
            error: Error()
          }), AppSound) : AppSound).CommClick);
          let conf = this._holidayConf['giftpack'][idx];
          let goodsId = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).number_valueOf(conf.gid, 0);
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).REPORT_CLIENT_CLICK, {
            eventID: (_crd && ReportConfig === void 0 ? (_reportPossibleCrUseOfReportConfig({
              error: Error()
            }), ReportConfig) : ReportConfig).gift_holiday_3,
            body: {
              gsubname: goodsId
            }
          }); //让当前选的进入选中状态,让老的选中进入未选中状态

          let _currowSelectItemBg = this._currowSelectItemBg; //老的成为未选中

          _currowSelectItemBg.getChildByName("check").active = false;

          let oldSelect = _currowSelectItemBg.getParent().getChildByName("select");

          oldSelect.active = false;
          this._currowSelectItemBg = event.currentTarget.getChildByName("bg");
          this._currowSelectItemBg.getChildByName("check").active = true;

          let newSelect = this._currowSelectItemBg.getParent().getChildByName("select");

          newSelect.active = true;
          this._selectedIndex = idx;
          console.log("_selectedIndex:onClickChooseItem:", this._selectedIndex);
          this.updateButton();
        }
        /** 点击了购买 */


        onClickBuyButton(event) {
          if (this._selectedIndex == -1) {
            return;
          }

          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).SYS_PLAY_EFFECT, (_crd && AppSound === void 0 ? (_reportPossibleCrUseOfAppSound({
            error: Error()
          }), AppSound) : AppSound).CommClick);

          this._buyItem(this._selectedIndex);
        }
        /**
         * 点击购买每日特价礼包
         * @param idx 索引
         * @returns 
         */


        _buyItem(idx) {
          let conf = this._holidayConf['giftpack'][idx];
          let goodsId = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).number_valueOf(conf.gid, 0);

          if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).table_isEmpty(conf) || goodsId <= 0) {
            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
              error: Error()
            }), AppEvent) : AppEvent).SYS_TOAST_TIP, {
              content: "err:找不到商品数据，支付失败"
            });
            return;
          }

          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).REPORT_CLIENT_CLICK, {
            eventID: (_crd && ReportConfig === void 0 ? (_reportPossibleCrUseOfReportConfig({
              error: Error()
            }), ReportConfig) : ReportConfig).gift_holiday_12,
            body: {
              gsubname: goodsId
            }
          });
          let payData = (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
            error: Error()
          }), GCache) : GCache).ShopInfo.getPriceByGoodsSceneId((_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
            error: Error()
          }), GConstants) : GConstants).GoodsListID.limitPack, goodsId);
          console.log("paydata:", payData);
          let payID = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).number_valueOf(payData['payID'], 0);

          if (payID <= 0) {
            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
              error: Error()
            }), AppEvent) : AppEvent).SYS_TOAST_TIP, {
              content: "err:找不到商品支付方式，支付失败"
            });
            return;
          }

          let boughtNum = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).number_valueOf(conf["num"], 0);
          let maxNum = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).number_valueOf(payData["limitNum"], 0);
          let isLimit = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).number_valueOf(payData['limit_buy_way'], 0);
          maxNum = isLimit > 0 ? maxNum : 0;

          if (boughtNum >= maxNum && maxNum > 0) {
            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
              error: Error()
            }), AppEvent) : AppEvent).SYS_TOAST_TIP, {
              content: "已超过最大购买上限"
            });
            return;
          }

          switch (payID) {
            case (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
              error: Error()
            }), GConstants) : GConstants).PayType.RMB:
              //rmb 1
              (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
                error: Error()
              }), GCache) : GCache).CurrowPaySceneType = (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
                error: Error()
              }), GConstants) : GConstants).GoodsListID.limitPack;
              (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
                error: Error()
              }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
                error: Error()
              }), AppEvent) : AppEvent).OTHER_PAY_WILL, (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
                error: Error()
              }), GConstants) : GConstants).GoodsListID.limitPack, goodsId);
              break;

            case (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
              error: Error()
            }), GConstants) : GConstants).PayType.SHARE:
              //分享支付
              let self = this;

              let _allowShareMsg = (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
                error: Error()
              }), GCache) : GCache).ShareInfo.shareTimeAllowed(goodsId, (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
                error: Error()
              }), GConstants) : GConstants).ShareSceneConf.shopshare);

              if (_allowShareMsg['allowShare']) {
                (_crd && Platform === void 0 ? (_reportPossibleCrUseOfPlatform({
                  error: Error()
                }), Platform) : Platform).shareWXFriends(_allowShareMsg['shareParams'], (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                  error: Error()
                }), Utils) : Utils).handler(self, self.__doCallBackShare), goodsId);
              } else {
                (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
                  error: Error()
                }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
                  error: Error()
                }), AppEvent) : AppEvent).SYS_TOAST_TIP, {
                  content: `请勿在短时间内重复分享`
                });
              }

              break;

            case (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
              error: Error()
            }), GConstants) : GConstants).PayType.VIDEO:
              //看视频
              (_crd && Platform === void 0 ? (_reportPossibleCrUseOfPlatform({
                error: Error()
              }), Platform) : Platform).playerAdVideo((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                error: Error()
              }), Utils) : Utils).handler(this, this.__doCallBackWatchADs), goodsId);
              break;

            default:
              (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
                error: Error()
              }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
                error: Error()
              }), AppEvent) : AppEvent).SYS_TOAST_TIP, {
                content: "err:不支持的支付方式 code=" + payID
              });
              break;
          }
        }
        /**
         * 分享完商品发放奖励发奖励
         * @param goodsID 商品ID
         */


        __doCallBackShare(goodsID) {
          console.log('__doCallBackShare', goodsID);
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_REQ_SHARE_AWARD, goodsID, (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
            error: Error()
          }), GConstants) : GConstants).ReqUrl.shareType.shop, true);
        }
        /**
         * 看完视频广告发奖励
         * @param status 是否成功
         * @param goodsID 商品ID
         * @returns 
         */


        __doCallBackWatchADs(status, goodsID) {
          if (status != true) {
            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
              error: Error()
            }), AppEvent) : AppEvent).SYS_TOAST_TIP, {
              content: "err:看广告失败"
            });
            return;
          }

          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_REQ_ADS_AWARD, goodsID, (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
            error: Error()
          }), GConstants) : GConstants).ReqUrl.shareType.shop, true);
        }
        /** 点击了关闭 */


        onClickClose(event) {
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).SYS_PLAY_EFFECT, (_crd && AppSound === void 0 ? (_reportPossibleCrUseOfAppSound({
            error: Error()
          }), AppSound) : AppSound).CommClick);
          this.node.destroy();
        } //销毁


        onDestroy() {}

        /**
         * 红点更新
         * @param event 
         * @param keyType 红点类型
         */
        redDotUpdate(event, keyType) {
          if (keyType == (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
            error: Error()
          }), GConstants) : GConstants).RedDotConf.Holiday) {}
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "nodeBoxGift", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "scrollowView", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "itemPanel", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "btnClose", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "btnBuy", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "bgNode", [_dec7], {
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
//# sourceMappingURL=5804e291d38358680a2755da11797b1d3a237dbb.js.map