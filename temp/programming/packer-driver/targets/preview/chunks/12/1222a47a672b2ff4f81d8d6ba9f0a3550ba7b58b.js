System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Button, Node, Sprite, _decorator, GCache, AppEvent, GConstants, GameTxt, Utils, resLoader, EventManager, BaseComponent, Platform, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _crd, ccclass, property, menu, bankupGift;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfGCache(extras) {
    _reporterNs.report("GCache", "../../../cache/GCache", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAppEvent(extras) {
    _reporterNs.report("AppEvent", "../../../config/AppEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGConstants(extras) {
    _reporterNs.report("GConstants", "../../../config/GameConstant", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameTxt(extras) {
    _reporterNs.report("GameTxt", "../../../config/GameTxt", _context.meta, extras);
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
      Button = _cc.Button;
      Node = _cc.Node;
      Sprite = _cc.Sprite;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      GCache = _unresolved_2.GCache;
    }, function (_unresolved_3) {
      AppEvent = _unresolved_3.AppEvent;
    }, function (_unresolved_4) {
      GConstants = _unresolved_4.GConstants;
    }, function (_unresolved_5) {
      GameTxt = _unresolved_5.GameTxt;
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

      _cclegacy._RF.push({}, "b5af1OOOTVFvJ3kzwJW9TEW", "bankupGift", undefined);

      __checkObsolete__(['Button', 'EventTouch', 'Node', 'Sprite', '_decorator']);

      ({
        ccclass,
        property,
        menu
      } = _decorator);
      /**
       * Name = bankupGift
       * URL = db://assets/package/hall/scripts/bankupGift.ts
       * Time = Wed Nov 30 2023 11:58:45 GMT+0800 (中国标准时间)
       * Author = 
       *
       *
       */

      _export("bankupGift", bankupGift = (_dec = ccclass('bankupGift'), _dec2 = menu('bankupGift'), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(Node), _dec(_class = _dec2(_class = (_class2 = class bankupGift extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        /**
         * 请求破产返回？
        */

        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "buyBtnNode", _descriptor, this);

          _initializerDefineProperty(this, "getMoneyBtnNode", _descriptor2, this);

          _initializerDefineProperty(this, "BGNode", _descriptor3, this);

          _initializerDefineProperty(this, "item_1", _descriptor4, this);

          _initializerDefineProperty(this, "item_2", _descriptor5, this);

          _initializerDefineProperty(this, "item_3", _descriptor6, this);

          this._bankrupFeedbackData = null;
          this._currowChooseIndex = -1;
          this._goodsGiftArray = [];
        }

        onLoad() {
          this._goodsGiftArray = [this.item_1, this.item_2, this.item_3];
          this.updataBankUpData();
          this.updateView();
        }

        start() {}

        //初始化模块事件
        onInitModuleEvent() {
          //领取补助结果返回
          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).ACTIVITY_BANKUP_BACK, this.getOnGetMoneyCallBack);
        } //更新破产配置


        updataBankUpData() {
          if ((_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
            error: Error()
          }), GCache) : GCache).Activity && (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
            error: Error()
          }), GCache) : GCache).BankrupData.getNewBankUpGiftConf()) {
            this._bankrupFeedbackData = (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
              error: Error()
            }), GCache) : GCache).BankrupData.getNewBankUpGiftConf();
            console.log((_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
              error: Error()
            }), GCache) : GCache).BankrupData.getNewBankUpGiftConf(), (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
              error: Error()
            }), GCache) : GCache).BankrupData.getBankUpFeedbackData(), "破产配置");
          } else {
            console.log((_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
              error: Error()
            }), GCache) : GCache).BankrupData.getNewBankUpGiftConf(), (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
              error: Error()
            }), GCache) : GCache).BankrupData.getBankUpFeedbackData(), "无破产配置");
          }
        } //更新界面


        updateView() {
          var _this = this;

          var self = this;
          var giftPack = null;

          if (this._bankrupFeedbackData) {
            giftPack = this._bankrupFeedbackData["giftPack"];
          } // 更新商品信息


          for (var index = 0; index < this._goodsGiftArray.length; index++) {
            // 默认关闭所有未选中
            var checkImg = this._goodsGiftArray[index].getChildByName('check');

            checkImg.active = false;

            if (this._currowChooseIndex == null || this._currowChooseIndex < 0) {
              this._currowChooseIndex = -1;
            }
          } //商品显示


          if (giftPack && giftPack.length != 0) {
            var len = giftPack.length;

            var _loop = function _loop(_index) {
              // 当前节点
              var itemNode = _this._goodsGiftArray[_index]; // 商品图片

              var goodBg = itemNode.getChildByName('bg');
              var icon = giftPack[_index]['icon'];

              if (icon) {
                //加载远端资源图
                if (icon && icon != "") {
                  (_crd && resLoader === void 0 ? (_reportPossibleCrUseOfresLoader({
                    error: Error()
                  }), resLoader) : resLoader).loadRemote(icon, {
                    ext: ".jpg"
                  }, (err, imageAsset) => {
                    if (!imageAsset) {
                      //资源可能还在加载中
                      return;
                    }

                    if (!self.node || self.node.isValid == false) {
                      return;
                    }

                    var spriteFrame = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                      error: Error()
                    }), Utils) : Utils).image_ImageAssetToSpriteFrame(imageAsset);

                    if (spriteFrame) {
                      goodBg.getComponent(Sprite).spriteFrame = spriteFrame;
                    }
                  });
                }
              }
            };

            for (var _index = 0; _index < len; _index++) {
              _loop(_index);
            } //更新第一个支付按钮


            this.upGoodsBuyBtn(giftPack[0]); //默认选中第0个商品

            this.openPageChoseGood(0);
          }
        } // 打开页面时候默认选中第几个


        openPageChoseGood(index) {
          var checkImg = this._goodsGiftArray[index].getChildByName('check');

          checkImg.active = true;
          this._currowChooseIndex = index;
        } //购买商品


        onClickBuyGoods(event, custom) {
          if (this._currowChooseIndex == -1 || this._currowChooseIndex == null) {
            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
              error: Error()
            }), AppEvent) : AppEvent).SYS_TOAST_TIP, {
              content: "请选择要购买的礼包"
            });
            return;
          }

          if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).isNotNull(this._currowChooseIndex, this._bankrupFeedbackData["giftPack"][this._currowChooseIndex])) {
            //支付场景赋值
            (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
              error: Error()
            }), GCache) : GCache).CurrowPaySceneType = (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
              error: Error()
            }), GConstants) : GConstants).UBPaySceneConfig.KRoomBrokenRecharge;
            var gid = this._bankrupFeedbackData["giftPack"][this._currowChooseIndex]["id"]; //查找支付类型

            var payData = (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
              error: Error()
            }), GCache) : GCache).ShopInfo.getPriceByGoodsSceneId((_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
              error: Error()
            }), GConstants) : GConstants).GoodsListID.Bankruptcy, gid);
            console.log('当前支付信息', payData);
            this.checkBuyWay(payData['payID'], gid);
          }
        } //根据支付信息做不同的处理


        checkBuyWay(payID, goodsId) {
          switch (payID) {
            case (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
              error: Error()
            }), GConstants) : GConstants).PayType.RMB:
              //rmb 1
              (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
                error: Error()
              }), GCache) : GCache).CurrowPaySceneType = (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
                error: Error()
              }), GConstants) : GConstants).GoodsListID.Bankruptcy;
              (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
                error: Error()
              }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
                error: Error()
              }), AppEvent) : AppEvent).OTHER_PAY_WILL, (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
                error: Error()
              }), GConstants) : GConstants).GoodsListID.Bankruptcy, goodsId); //支付完成 关闭自身

              this.node.destroy();
              break;

            case (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
              error: Error()
            }), GConstants) : GConstants).PayType.SHARE:
              //分享支付
              var self = this;

              var _allowShareMsg = (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
                error: Error()
              }), GCache) : GCache).ShareInfo.shareTimeAllowed(goodsId, (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
                error: Error()
              }), GConstants) : GConstants).ShareSceneConf.shopshare);

              if (_allowShareMsg['allowShare']) {
                (_crd && Platform === void 0 ? (_reportPossibleCrUseOfPlatform({
                  error: Error()
                }), Platform) : Platform).shareWXFriends(_allowShareMsg['shareParams'], (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                  error: Error()
                }), Utils) : Utils).handler(self, self.__doCallBackShare), _allowShareMsg);
              } else {
                (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
                  error: Error()
                }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
                  error: Error()
                }), AppEvent) : AppEvent).SYS_TOAST_TIP, {
                  content: "\u8BF7\u52FF\u5728\u77ED\u65F6\u95F4\u5185\u91CD\u590D\u5206\u4EAB"
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
        /** 分享完商品发放奖励发奖励 */


        __doCallBackShare(data) {
          if ((_crd && Platform === void 0 ? (_reportPossibleCrUseOfPlatform({
            error: Error()
          }), Platform) : Platform).isWXPlatform()) {
            if (data['shareUseTime'] < (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
              error: Error()
            }), GConstants) : GConstants).shareSucConditions.shareUseTime) {
              (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
                error: Error()
              }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
                error: Error()
              }), AppEvent) : AppEvent).SYS_TOAST_TIP, {
                content: (_crd && GameTxt === void 0 ? (_reportPossibleCrUseOfGameTxt({
                  error: Error()
                }), GameTxt) : GameTxt).shareFailMsg
              });
            } else {
              (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
                error: Error()
              }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
                error: Error()
              }), AppEvent) : AppEvent).NET_REQ_SHARE_AWARD, data['gid'], (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
                error: Error()
              }), GConstants) : GConstants).ReqUrl.shareType.shop, true);
            }
          } else {
            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
              error: Error()
            }), AppEvent) : AppEvent).NET_REQ_SHARE_AWARD, data['gid'], (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
              error: Error()
            }), GConstants) : GConstants).ReqUrl.shareType.shop, true);
          }
        }
        /** 看完视频广告发奖励 */


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
        } //商品的点击


        onClickGoods(event) {
          // 点击的节点
          var Checkmark = event.getCurrentTarget();

          for (var index = 0; index < this._goodsGiftArray.length; index++) {
            var checkImg = this._goodsGiftArray[index].getChildByName('check');

            if (Checkmark.name == this._goodsGiftArray[index].name) {
              this._currowChooseIndex = index;
              var currentGood = this._bankrupFeedbackData["giftPack"][index]; // 选中状态  

              checkImg.active = true; // 更新按钮

              this.upGoodsBuyBtn(currentGood);
            } else {
              checkImg.active = false;
            }
          }
        } // 更新购买按钮


        upGoodsBuyBtn(currentgoods) {
          var self = this;
          var buyBtn = currentgoods['buyBtnIcon'];

          if (buyBtn) {
            //加载远端资源图 支付按钮
            if (buyBtn && buyBtn != "") {
              (_crd && resLoader === void 0 ? (_reportPossibleCrUseOfresLoader({
                error: Error()
              }), resLoader) : resLoader).loadRemote(buyBtn, {
                ext: ".jpg"
              }, (err, imageAsset) => {
                if (!imageAsset) {
                  //资源可能还在加载中
                  return;
                }

                if (!self.node || self.node.isValid == false) {
                  return;
                }

                var spriteFrame = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                  error: Error()
                }), Utils) : Utils).image_ImageAssetToSpriteFrame(imageAsset);

                if (spriteFrame) {
                  this.buyBtnNode.getComponent(Sprite).spriteFrame = spriteFrame;
                }
              });
            }
          }
        } //关闭


        onClickReturn() {
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).GAME_GOTO_EXIT);
          this.node.destroy();
        } //领取补助


        onClickGetMoney() {
          //领取救济金
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_REQ_BANKRUPT);
        } //领取补助返回


        getOnGetMoneyCallBack(event, isSuccess, packetInfo) {
          if (isSuccess) {
            this.getMoneyBtnNode.getComponent(Button).interactable = false;
          }
        }

        onMaskClick() {
          this.node.destroy();
        } //销毁


        onDestroy() {}

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "buyBtnNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "getMoneyBtnNode", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "BGNode", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "item_1", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "item_2", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "item_3", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=1222a47a672b2ff4f81d8d6ba9f0a3550ba7b58b.js.map