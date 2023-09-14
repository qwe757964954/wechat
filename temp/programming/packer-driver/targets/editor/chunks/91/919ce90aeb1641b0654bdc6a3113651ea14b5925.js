System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Node, Sprite, _decorator, GCache, AppEvent, AppSound, GConstants, Utils, resLoader, EventManager, BaseComponent, Platform, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, menu, giftFirstPayPrefabCtr;

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

  function _reportPossibleCrUseOfUtils(extras) {
    _reporterNs.report("Utils", "../../../framework/Utils", _context.meta, extras);
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
      Node = _cc.Node;
      Sprite = _cc.Sprite;
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
      Utils = _unresolved_6.Utils;
    }, function (_unresolved_7) {
      resLoader = _unresolved_7.resLoader;
    }, function (_unresolved_8) {
      EventManager = _unresolved_8.EventManager;
    }, function (_unresolved_9) {
      BaseComponent = _unresolved_9.BaseComponent;
    }, function (_unresolved_10) {
      Platform = _unresolved_10.Platform;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "056a1dc3ydDCL9HM5+s+UkZ", "giftFirstPayPrefabCtr", undefined);

      __checkObsolete__(['EventTouch', 'Node', 'Sprite', '_decorator']);

      ({
        ccclass,
        property,
        menu
      } = _decorator);
      /**
       * Name = giftFirstPayPrefabCtr
       * URL = db://assets/package/activity/script/giftFirstPayPrefabCtr.ts
       * Time = Tue Aug 01 2023 16:31:29 GMT+0800 (中国标准时间)
       * Author = flychenliuwang
       *
       * Life: onLoad-->onInitModuleEvent-->onEnable->start->update->lateUpdate->onDisable->onDestroy
       * 
       */

      _export("giftFirstPayPrefabCtr", giftFirstPayPrefabCtr = (_dec = ccclass('giftFirstPayPrefabCtr'), _dec2 = menu('prefab/activity/giftFirstPayPrefabCtr'), _dec3 = property({
        tooltip: "背景",
        type: Node
      }), _dec4 = property({
        tooltip: "购买按钮",
        type: Node
      }), _dec(_class = _dec2(_class = (_class2 = class giftFirstPayPrefabCtr extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "bgNode", _descriptor, this);

          _initializerDefineProperty(this, "buyBtn", _descriptor2, this);

          this._firstPayConf = null;
        }

        /** override 初始化模块事件 */
        onInitModuleEvent() {
          //首充数据更新则更新界面
          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).ACTIVITY_UPDATE_FIRSTPAY_CONF, this.updateView);
          /** 请求分享领奖返回 */

          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_RESP_SHARE_AWARD, this.respShareAndAdsAward);
          /** 请求看视频领奖返回 */

          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_RESP_ADS_AWARD, this.respShareAndAdsAward);
          /** 首充礼包红点更新 */

          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NOTIFY_UPDATE_RED_DOT, this.redDotUpdate); //rmb支付回调

          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_FORWARD_REPORT_PAY_ORDER, this.respPayOrder);
        }

        onLoad() {
          this.initView();
          this.detailData();
          this.updateView(); //请求限时折扣配置数据

          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_REQ_FIRST_PAY_CONFIG);
          (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
            error: Error()
          }), GCache) : GCache).RedDot.update_reddot_gift_firstpay();
        }

        /** 处理数据 */
        detailData() {
          this._firstPayConf = (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
            error: Error()
          }), GCache) : GCache).Activity.getFirstPayPackage();
        }

        start() {}

        /** 初始化界面 */
        initView() {
          this.buyBtn.active = false;
        }

        /** 更新界面 */
        updateView() {
          this.detailData();
          console.log("数据更新了", this._firstPayConf);

          if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).table_isEmpty(this._firstPayConf)) {
            console.log("数据更新了为空", this._firstPayConf);
            this.buyBtn.active = false;
            this.node.destroy();
            return;
          }

          this.refreshImageBgAndButton();
          this.buyBtn.active = true;
        }

        //更新背景
        refreshImageBgAndButton() {
          let self = this;

          if (this._firstPayConf && this._firstPayConf["goodsBaseMap"] != "" && this._firstPayConf["button"] != "") {
            (_crd && resLoader === void 0 ? (_reportPossibleCrUseOfresLoader({
              error: Error()
            }), resLoader) : resLoader).loadRemote(this._firstPayConf["goodsBaseMap"], {
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
            (_crd && resLoader === void 0 ? (_reportPossibleCrUseOfresLoader({
              error: Error()
            }), resLoader) : resLoader).loadRemote(this._firstPayConf["button"], {
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
                this.buyBtn.getComponent(Sprite).spriteFrame = spriteFrame;
              }
            });
          }
        }
        /** 点击了购买 */


        onClickBuyButton(event) {
          console.log("点击购买");

          this._buyItem();
        }
        /**
         * 点击购买每日特价礼包
         */


        _buyItem() {
          let goodsId = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).number_valueOf(this._firstPayConf['gid'], 0);
          let payData = (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
            error: Error()
          }), GCache) : GCache).ShopInfo.getPriceByGoodsSceneId((_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
            error: Error()
          }), GConstants) : GConstants).GoodsListID.GiftPack, goodsId);
          console.log("paydata:", payData);
          let payID = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).number_valueOf(payData['payID'], null);

          if (!payID) {
            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
              error: Error()
            }), AppEvent) : AppEvent).SYS_TOAST_TIP, {
              content: "err:首充礼包找不到商品支付方式，支付失败"
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
              }), GConstants) : GConstants).GoodsListID.GiftPack;
              (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
                error: Error()
              }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
                error: Error()
              }), AppEvent) : AppEvent).OTHER_PAY_WILL, (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
                error: Error()
              }), GConstants) : GConstants).GoodsListID.GiftPack, goodsId);
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
                // 请勿在短时间内重复分享
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
        /**
         * 分享完商品发放奖励发奖励
         * @param goodsID 商品ID
         */


        __doCallBackShare(goodsID) {
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_REQ_SHARE_AWARD, goodsID, (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
            error: Error()
          }), GConstants) : GConstants).ReqUrl.shareType.shop, true);
        }
        /** 请求看视频领奖和分享领奖返回 */


        respShareAndAdsAward(event, isSuccess, respData, reqData) {
          console.log("首充看视频领奖和分享领奖返回", isSuccess, respData, reqData);

          if (isSuccess == false) {
            return;
          }

          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_REQ_FIRST_PAY_CONFIG);
        }
        /** 支付订单返回 */


        respPayOrder(event, isSuccess, respData, reqData) {
          console.log("respPayOrder:firstpay", isSuccess, respData, reqData);

          if (isSuccess == false) {
            return;
          }

          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_REQ_FIRST_PAY_CONFIG);
        }
        /**
         * 点击了关闭
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
          this.node.destroy();
        }

        //销毁
        onDestroy() {}

        /**
         * 红点更新
         * @param event 
         * @param keyType 红点类型
         */
        redDotUpdate(event, keyType) {
          if (keyType == (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
            error: Error()
          }), GConstants) : GConstants).RedDotConf.FirstPay) {}
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "bgNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "buyBtn", [_dec4], {
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
//# sourceMappingURL=919ce90aeb1641b0654bdc6a3113651ea14b5925.js.map