System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Button, ImageAsset, Label, Node, Sprite, _decorator, GCache, AppEvent, AppSound, GConstants, GameRes, UIID, Utils, resLoader, EventManager, BaseComponent, Platform, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _crd, ccclass, property, menu, buyPropDialogCtr;

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

  function _reportPossibleCrUseOfUIID(extras) {
    _reporterNs.report("UIID", "../../../config/UIConfig", _context.meta, extras);
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
      ImageAsset = _cc.ImageAsset;
      Label = _cc.Label;
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
      GameRes = _unresolved_6.GameRes;
    }, function (_unresolved_7) {
      UIID = _unresolved_7.UIID;
    }, function (_unresolved_8) {
      Utils = _unresolved_8.Utils;
    }, function (_unresolved_9) {
      resLoader = _unresolved_9.resLoader;
    }, function (_unresolved_10) {
      EventManager = _unresolved_10.EventManager;
    }, function (_unresolved_11) {
      BaseComponent = _unresolved_11.BaseComponent;
    }, function (_unresolved_12) {
      Platform = _unresolved_12.Platform;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "61bc3KF0xpHbp3QTjyyaEki", "buyPropDialogCtr", undefined);

      __checkObsolete__(['Button', 'EventTouch', 'ImageAsset', 'Label', 'Node', 'Sprite', '_decorator']);

      ({
        ccclass,
        property,
        menu
      } = _decorator);
      /**
       * Name = buyPropDialogCtr
       * Time = Wed Apr 13 2022 16:27:07 GMT+0800 (中国标准时间)
       * Author = Aby
       * Life: onLoad-->onEnable->start->update->lateUpdate->onDisable->onDestroy
       * 购买道具通用弹窗
       */

      _export("buyPropDialogCtr", buyPropDialogCtr = (_dec = ccclass('buyPropDialogCtr'), _dec2 = menu('vc/buyPropDialogCtr'), _dec3 = property({
        tooltip: "顶部标题节点",
        type: Node
      }), _dec4 = property({
        tooltip: "道具父节点",
        type: Node
      }), _dec5 = property({
        tooltip: "道具节点",
        type: Node
      }), _dec6 = property({
        tooltip: "购买按钮节点",
        type: Node
      }), _dec7 = property({
        tooltip: "购买按钮节点-icon",
        type: Sprite
      }), _dec8 = property({
        tooltip: "购买按钮节点-price",
        type: Label
      }), _dec9 = property({
        tooltip: "购买按钮节点-price",
        type: Label
      }), _dec10 = property({
        tooltip: "增加按钮节点",
        type: Node
      }), _dec11 = property({
        tooltip: "减少按钮节点",
        type: Node
      }), _dec(_class = _dec2(_class = (_class2 = class buyPropDialogCtr extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "titleNode", _descriptor, this);

          _initializerDefineProperty(this, "nodeCenter", _descriptor2, this);

          _initializerDefineProperty(this, "nodeItem", _descriptor3, this);

          _initializerDefineProperty(this, "btnBuy", _descriptor4, this);

          _initializerDefineProperty(this, "btnBuyIcon", _descriptor5, this);

          _initializerDefineProperty(this, "btnBuyPrice", _descriptor6, this);

          _initializerDefineProperty(this, "itemNum", _descriptor7, this);

          _initializerDefineProperty(this, "btnAdd", _descriptor8, this);

          _initializerDefineProperty(this, "btnCut", _descriptor9, this);

          this._currowParam = {
            /** 商品ID */
            goodsId: null,

            /** 分类ID（可不传） */
            itmeId: null,

            /** 支付场景 */
            scene: null,

            /** 是否来自游戏 */
            fromGame: false,

            /** 付费场景 */
            pay_scene: null
          };
          this._currowViewParam = {
            num: 1,
            payInfo: null
          };
        }

        //fromGame:false
        // goodsId: goodid,
        // itmeId: GConstants.GoodItemIDs.SIGN_CARD,
        // scene: GConstants.PayModel.sign_card
        onInitModuleEvent() {
          //添加兑换结果监听
          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NOTIFY_EXCHANGE_RESULT, this.notifyExchangeRes);
        }

        onLoad() {
          this.getParams();
          this.initView();
        }

        start() {
          if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).table_isEmpty(this._currowParam)) {
            this.node.destroy();
            return;
          }

          this.updateView();
        }

        getParams() {
          var comp;
          comp = this.node.getComponent("DelegateComponent");

          if (comp) {
            var params = comp.getParams();

            if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).table_isEmpty(params)) {
              this._currowParam = null;
              return;
            }

            this._currowParam = params;
          }
        }

        initView() {
          this.btnBuy.active = false;
          this.nodeCenter.active = false;
        }

        updateView() {
          var isExitGoods = (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
            error: Error()
          }), GCache) : GCache).ShopInfo.isExitByGoodsid(this._currowParam.goodsId);
          console.log("购买道具界面传递的参数", this._currowParam, isExitGoods);

          if (isExitGoods == false) {
            if (this._currowParam.itmeId != null) {
              var temp = (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
                error: Error()
              }), GCache) : GCache).ShopInfo.getPriceByResId((_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
                error: Error()
              }), GConstants) : GConstants).ShopSmallTabType.PROPS, this._currowParam.itmeId);
              this._currowParam.goodsId = temp.goodsID;
            } else {
              return;
            }
          }

          var config = {
            num: 1,
            payInfo: (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
              error: Error()
            }), GCache) : GCache).ShopInfo.getPriceByResId((_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
              error: Error()
            }), GConstants) : GConstants).ShopSmallTabType.PROPS, this._currowParam.goodsId)
          };
          this._currowViewParam = config;
          console.log("输出商品：" + this._currowParam.goodsId);
          var item = this.nodeItem.getChildByName("item");
          var name = this.nodeItem.getChildByName("name");
          this.setSpriteFrame(item, config.payInfo.icon);
          name.getComponent(Label).string = config.payInfo.name || "";
          this.updateBuyConf();
          this.updateOptBtnState();
          this.btnBuy.active = true;
          this.nodeCenter.active = true;
        } //更新购买价格和货币图标显示


        updateBuyConf() {
          console.log('this._currowViewParam', this._currowViewParam);
          console.log('渲染价格', this._currowViewParam.payInfo.payID, (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
            error: Error()
          }), GConstants) : GConstants).PayType.SILVER);

          if (this._currowViewParam.payInfo.payID == (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
            error: Error()
          }), GConstants) : GConstants).PayType.SILVER) {
            var path = (_crd && GameRes === void 0 ? (_reportPossibleCrUseOfGameRes({
              error: Error()
            }), GameRes) : GameRes).Picture_Hall_Coin_bg;
            var self = this;
            this.getPreLoaderRes(path.bundle, path.path, ImageAsset, imgAssert => {
              if (!self.btnBuyIcon || self.btnBuyIcon.isValid == false) {
                return;
              }

              var spriteFrame = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                error: Error()
              }), Utils) : Utils).image_ImageAssetToSpriteFrame(imgAssert);

              if (spriteFrame) {
                self.btnBuyIcon.spriteFrame = spriteFrame;
              }
            });
          } //道具默认银币购买 预留金条


          this.updateBuyPrice();
        }
        /** 更新购买价格 */


        updateBuyPrice() {
          var price = this._currowViewParam.payInfo.price * this._currowViewParam.num;
          this.btnBuyPrice.string = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).nullToDefault(price, "--");
        }
        /** 按钮减的点击事件 */


        onClicBtnCut(event) {
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).SYS_PLAY_EFFECT, (_crd && AppSound === void 0 ? (_reportPossibleCrUseOfAppSound({
            error: Error()
          }), AppSound) : AppSound).CommClick);
          this._currowViewParam.num = this._currowViewParam.num - 1;
          this.itemNum.string = String(this._currowViewParam.num);
          this.updateBuyPrice();
          this.updateOptBtnState();
        }
        /** 按钮加的点击事件 */


        onClicBtnAdd(event) {
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).SYS_PLAY_EFFECT, (_crd && AppSound === void 0 ? (_reportPossibleCrUseOfAppSound({
            error: Error()
          }), AppSound) : AppSound).CommClick);
          this._currowViewParam.num = this._currowViewParam.num + 1;
          this.itemNum.string = String(this._currowViewParam.num);
          this.updateBuyPrice();
          this.updateOptBtnState();
        }
        /** 更新增减按钮的状态 */


        updateOptBtnState() {
          if (this._currowViewParam.num <= 1) {
            this.btnCut.getComponent(Button).interactable = false;
            this.btnCut.getComponent(Sprite).grayscale = true;
          } else {
            this.btnCut.getComponent(Button).interactable = true;
            this.btnCut.getComponent(Sprite).grayscale = false;
          }

          if (this._currowViewParam.payInfo.payID == (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
            error: Error()
          }), GConstants) : GConstants).PayType.GOLD) {
            var lower = 0;

            if ((_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
              error: Error()
            }), GCache) : GCache).User.LoginRoomState == true && (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
              error: Error()
            }), GCache) : GCache).Desk) {
              var levelData = (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
                error: Error()
              }), GCache) : GCache).Desk.LevelData;

              if (levelData && levelData.antes_room) {
                var limit = levelData.antes_room.in_bankroll_limit || [];
                lower = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                  error: Error()
                }), Utils) : Utils).number_valueOf(limit[0]);
              }
            }

            if ((_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
              error: Error()
            }), GCache) : GCache).User.getUserMoneyByID((_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
              error: Error()
            }), GConstants) : GConstants).PropertyType.SILVER_COIN) - lower < this._currowViewParam.payInfo.price * (this._currowViewParam.num + 1)) {
              this.btnAdd.getComponent(Button).interactable = false;
              this.btnAdd.getComponent(Sprite).grayscale = true;
            } else {
              this.btnAdd.getComponent(Button).interactable = true;
              this.btnAdd.getComponent(Sprite).grayscale = false;
            }
          } //判断当前选择的数量是否已经超过购买限制数量


          if (this._currowViewParam.payInfo && this._currowViewParam.payInfo.limitNum != null) {
            var limitNum = this._currowViewParam.payInfo.limitNum;

            if (limitNum["hadNum"] + this._currowViewParam.num >= limitNum["maxNum"]) {
              //超过数量限制，按钮不开点击
              this.btnAdd.getComponent(Button).interactable = false;
              this.btnAdd.getComponent(Sprite).grayscale = true;
            }
          }
        }
        /** 点击了购买 */


        onClickBuy(event) {
          console.log('点击了购买');

          var res = this._checkProperty();

          if (res) {
            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
              error: Error()
            }), AppEvent) : AppEvent).SYS_TOAST_TIP, {
              content: res[1]
            });
            var jump_temp = {
              //银币跳转道具
              [(_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
                error: Error()
              }), GConstants) : GConstants).PayType.SILVER]: (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
                error: Error()
              }), GConstants) : GConstants).ShopBigTabType.PROPS,
              //人民币跳转银币 
              [(_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
                error: Error()
              }), GConstants) : GConstants).PayType.RMB]: (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
                error: Error()
              }), GConstants) : GConstants).ShopBigTabType.SILVER_COIN
            };

            if (jump_temp[res[0]] != null) {
              this.node.destroy();

              if ((_crd && Platform === void 0 ? (_reportPossibleCrUseOfPlatform({
                error: Error()
              }), Platform) : Platform).isCanPay() == false) {
                return;
              } //跳转商城


              (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
                error: Error()
              }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
                error: Error()
              }), AppEvent) : AppEvent).VIEW_UI_OPEN, (_crd && UIID === void 0 ? (_reportPossibleCrUseOfUIID({
                error: Error()
              }), UIID) : UIID).MallPrefab, {
                id: jump_temp[res[0]]
              }, {});
              return;
            }
          }

          this._startExchange();
        }
        /** 开始兑换 */


        _startExchange() {
          var itemData = {
            gid: this._currowViewParam.payInfo.goodsID,
            //商品ID
            gnum: this._currowViewParam.num //兑换的数量

          };
          console.log('银币兑换道具参数', itemData);
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_CMD_REQ_BUY_MALL_PROP, itemData);
        }
        /** 检查资产是否满足条件 */


        _checkProperty() {
          if (this._currowViewParam.payInfo.payID == (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
            error: Error()
          }), GConstants) : GConstants).PayType.GOLD) {
            var lower = 0; //房间内最低资产下限

            if ((_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
              error: Error()
            }), GCache) : GCache).User.LoginRoomState == true && (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
              error: Error()
            }), GCache) : GCache).Desk) {
              var levelData = (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
                error: Error()
              }), GCache) : GCache).Desk.LevelData;

              if (levelData && levelData.antes_room) {
                var limit = levelData.antes_room.in_bankroll_limit || [];
                lower = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                  error: Error()
                }), Utils) : Utils).number_valueOf(limit[0]);
              }
            }

            if ((_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
              error: Error()
            }), GCache) : GCache).User.getUserMoneyByID((_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
              error: Error()
            }), GConstants) : GConstants).PropertyType.SILVER_COIN) - lower < this._currowViewParam.payInfo.price * this._currowViewParam.num) {
              return [this._currowViewParam.payInfo.payID, "您的银币不足"];
            }
          }

          return null;
        } //点击了关闭


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
        /** 通知兑换结果 */


        notifyExchangeRes(event, res) {
          res = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).table_verify(res);

          if (res["state"] == true) {
            // 销毁当前节点
            this.node.destroy();
          }
        }
        /**设置远端图片 */


        setSpriteFrame(node, path, isSliced) {
          if (isSliced === void 0) {
            isSliced = false;
          }

          if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).string_isHttp(path)) {
            var self = this;
            (_crd && resLoader === void 0 ? (_reportPossibleCrUseOfresLoader({
              error: Error()
            }), resLoader) : resLoader).loadRemote(path, {
              ext: '.jpg'
            }, (err, imageAsset) => {
              if (!imageAsset) {
                //资源可能还在加载中
                return;
              }

              if (!node || node.isValid == false) {
                return;
              }

              var spriteFrame = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                error: Error()
              }), Utils) : Utils).image_ImageAssetToSpriteFrame(imageAsset);

              if (spriteFrame) {
                var sprite = node.getComponent(Sprite);
                sprite.spriteFrame = spriteFrame;
              }

              node.active = true;
            });
          } else {
            node.active = false;
          }
        } //销毁


        onDestroy() {}

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "titleNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "nodeCenter", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "nodeItem", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "btnBuy", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "btnBuyIcon", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "btnBuyPrice", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "itemNum", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "btnAdd", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "btnCut", [_dec11], {
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
//# sourceMappingURL=27efaeed8b5c67eec9e8ada6185df85ebff5b1ee.js.map