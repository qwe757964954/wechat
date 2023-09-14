System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Label, Node, Sprite, SpriteAtlas, SpriteFrame, UITransform, _decorator, AppEvent, AppSound, GConstants, GameRes, Utils, resLoader, EventManager, BaseComponent, PayAgent, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25, _descriptor26, _descriptor27, _crd, ccclass, property, menu, buyDialogCtr;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

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

  function _reportPossibleCrUseOfPayAgent(extras) {
    _reporterNs.report("PayAgent", "../../../proj/PayAgent", _context.meta, extras);
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
      SpriteAtlas = _cc.SpriteAtlas;
      SpriteFrame = _cc.SpriteFrame;
      UITransform = _cc.UITransform;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      AppEvent = _unresolved_2.AppEvent;
    }, function (_unresolved_3) {
      AppSound = _unresolved_3.AppSound;
    }, function (_unresolved_4) {
      GConstants = _unresolved_4.GConstants;
    }, function (_unresolved_5) {
      GameRes = _unresolved_5.GameRes;
    }, function (_unresolved_6) {
      Utils = _unresolved_6.Utils;
    }, function (_unresolved_7) {
      resLoader = _unresolved_7.resLoader;
    }, function (_unresolved_8) {
      EventManager = _unresolved_8.EventManager;
    }, function (_unresolved_9) {
      BaseComponent = _unresolved_9.BaseComponent;
    }, function (_unresolved_10) {
      PayAgent = _unresolved_10.PayAgent;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "14f26/mfSVBPqjkYO+W5WTS", "buyDialogCtr", undefined);

      __checkObsolete__(['EventTouch', 'Label', 'Node', 'ScrollView', 'Sprite', 'SpriteAtlas', 'SpriteFrame', 'UITransform', '_decorator', 'instantiate']);

      ({
        ccclass,
        property,
        menu
      } = _decorator);
      /**
       * Name = buyDialogCtr
       * Time = Wed Apr 13 2022 16:27:07 GMT+0800 (中国标准时间)
       * Author = Aby
       * Life: onLoad-->onEnable->start->update->lateUpdate->onDisable->onDestroy
       * 购买弹窗
       */

      _export("buyDialogCtr", buyDialogCtr = (_dec = ccclass('buyDialogCtr'), _dec2 = menu('vc/buyDialogCtr'), _dec3 = property({
        tooltip: "标题sprite",
        type: Sprite
      }), _dec4 = property({
        tooltip: "滚动容器节点",
        type: Node
      }), _dec5 = property({
        tooltip: "滚动容器View",
        type: Node
      }), _dec6 = property({
        tooltip: "滚动容器内容父节点",
        type: Node
      }), _dec7 = property({
        tooltip: "二次确认父节点",
        type: Node
      }), _dec8 = property({
        tooltip: "二次确认价格",
        type: Label
      }), _dec9 = property({
        tooltip: "二次确认货币ICON",
        type: Sprite
      }), _dec10 = property({
        tooltip: "二次确认商品名称",
        type: Label
      }), _dec11 = property({
        tooltip: "确认返还父节点",
        type: Node
      }), _dec12 = property({
        tooltip: "确认返还价格",
        type: Label
      }), _dec13 = property({
        tooltip: "确认返还货币ICON",
        type: Sprite
      }), _dec14 = property({
        tooltip: "确认返还商品名称",
        type: Label
      }), _dec15 = property({
        tooltip: "点击关闭按钮节点",
        type: Node
      }), _dec16 = property({
        tooltip: "点击购买按钮节点",
        type: Node
      }), _dec17 = property({
        tooltip: "点击确定按钮节点",
        type: Node
      }), _dec18 = property({
        tooltip: "兑换节点",
        type: Node
      }), _dec19 = property({
        tooltip: "兑换icon节点",
        type: Sprite
      }), _dec20 = property({
        tooltip: "兑换价格label",
        type: Label
      }), _dec21 = property({
        tooltip: "rmb购买label",
        type: Label
      }), _dec22 = property({
        tooltip: "用于克隆的道具",
        type: Node
      }), _dec23 = property({
        tooltip: "钻石Icon图片",
        type: SpriteFrame
      }), _dec24 = property({
        tooltip: "金豆Icon图片",
        type: SpriteFrame
      }), _dec25 = property({
        tooltip: "加赠节点",
        type: Node
      }), _dec26 = property({
        tooltip: "加赠商品",
        type: Node
      }), _dec27 = property({
        tooltip: "加赠商品名字",
        type: Label
      }), _dec28 = property({
        tooltip: "加赠商品图片",
        type: Node
      }), _dec29 = property({
        tooltip: "加赠商品图片",
        type: Label
      }), _dec(_class = _dec2(_class = (_class2 = class buyDialogCtr extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "sprite_title", _descriptor, this);

          _initializerDefineProperty(this, "node_Scroll", _descriptor2, this);

          _initializerDefineProperty(this, "node_ScrollView", _descriptor3, this);

          _initializerDefineProperty(this, "node_scrollContent", _descriptor4, this);

          _initializerDefineProperty(this, "node_sureconfirm", _descriptor5, this);

          _initializerDefineProperty(this, "label_surePrice", _descriptor6, this);

          _initializerDefineProperty(this, "sprite_sureIcon", _descriptor7, this);

          _initializerDefineProperty(this, "label_sureName", _descriptor8, this);

          _initializerDefineProperty(this, "node_confirmBack", _descriptor9, this);

          _initializerDefineProperty(this, "label_confirmBackPrice", _descriptor10, this);

          _initializerDefineProperty(this, "sprite_confirmBackIcon", _descriptor11, this);

          _initializerDefineProperty(this, "label_confirmBackName", _descriptor12, this);

          _initializerDefineProperty(this, "node_btnClose", _descriptor13, this);

          _initializerDefineProperty(this, "node_btnBuy", _descriptor14, this);

          _initializerDefineProperty(this, "node_btnSure", _descriptor15, this);

          _initializerDefineProperty(this, "node_Exchange", _descriptor16, this);

          _initializerDefineProperty(this, "sprite_ExchangeIcon", _descriptor17, this);

          _initializerDefineProperty(this, "label_Exchange", _descriptor18, this);

          _initializerDefineProperty(this, "label_Rmb", _descriptor19, this);

          _initializerDefineProperty(this, "cloneItem", _descriptor20, this);

          _initializerDefineProperty(this, "spriFrame_Diamond", _descriptor21, this);

          _initializerDefineProperty(this, "spriFrame_Gold", _descriptor22, this);

          _initializerDefineProperty(this, "node_jiaZen", _descriptor23, this);

          _initializerDefineProperty(this, "node_jiaZenGoos", _descriptor24, this);

          _initializerDefineProperty(this, "label_jiaZenGoosName", _descriptor25, this);

          _initializerDefineProperty(this, "node_jiaZenGoosImg", _descriptor26, this);

          _initializerDefineProperty(this, "node_jiaZenGoosDesc", _descriptor27, this);

          this._needBackGoodList = [];
          this._isSureNeedBack = false;
          this._param = {
            /** 标题 */
            title: "",

            /** s商品数据 */
            itemData: null,

            /** 点击的回调函数 */
            callFunc: null,

            /** 是否为确认购买的弹窗 */
            isConfirm: false
          };
        }

        /** 预加载 */
        preLoad() {
          this.getPreLoaderRes((_crd && GameRes === void 0 ? (_reportPossibleCrUseOfGameRes({
            error: Error()
          }), GameRes) : GameRes).Atlas_DialogTitle.bundle, (_crd && GameRes === void 0 ? (_reportPossibleCrUseOfGameRes({
            error: Error()
          }), GameRes) : GameRes).Atlas_DialogTitle.path, SpriteAtlas);
          this.getPreLoaderRes((_crd && GameRes === void 0 ? (_reportPossibleCrUseOfGameRes({
            error: Error()
          }), GameRes) : GameRes).Atlas_Common1.bundle, (_crd && GameRes === void 0 ? (_reportPossibleCrUseOfGameRes({
            error: Error()
          }), GameRes) : GameRes).Atlas_Common1.path, SpriteAtlas);
        }

        onLoad() {
          this.preLoad();
          this.getCompParam();
          this.cloneItem.active = false;
          this.node_confirmBack.active = false;
          this._isSureNeedBack = false;
          console.log("购买弹窗 参数内容:>>>", this._param);
        }

        getCompParam() {
          var comp = null;
          comp = this.node.getComponent("DelegateComponent");

          if (comp) {
            this._param = comp.getParams();
          }

          this._param = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).table_verify(this._param);
        }

        start() {
          this.updateView();
        }

        //更新Title
        updateTitle() {
          if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).string_isEmpty(this._param.title)) {
            return;
          }

          var titleKey = "dialog_title/" + this._param.title;
          var self = this;
          this.getPreLoaderRes((_crd && GameRes === void 0 ? (_reportPossibleCrUseOfGameRes({
            error: Error()
          }), GameRes) : GameRes).Atlas_DialogTitle.bundle, (_crd && GameRes === void 0 ? (_reportPossibleCrUseOfGameRes({
            error: Error()
          }), GameRes) : GameRes).Atlas_DialogTitle.path, SpriteAtlas, res => {
            if (self.node && self.node.isValid == true) {
              self.sprite_title.spriteFrame = res.spriteFrames[titleKey];
            }
          });
        } //更新界面


        updateView() {
          this.updateTitle();

          if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).table_isEmpty(this._param.itemData)) {
            return;
          }

          if (this._param.isConfirm == true) {
            this.updateOnSureView();
          } else {
            this.updateGoodInfoView();
          }
        }
        /** 检测是否有返还 */


        checkIsBack(resID) {}
        /** 更新加赠/物品列表详情界面 */


        updateGoodInfoView() {
          //判空确保有数据
          this._param.itemData = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).table_verify(this._param.itemData);
          this.node_scrollContent.removeAllChildren();
          this.node_Scroll.active = true;
          this.node_ScrollView.active = true;
          this.node_scrollContent.active = true;
          this.node_sureconfirm.active = false;
          this.node_confirmBack.active = false;
          this.node_btnSure.active = false;
          this.node_btnClose.active = true;
          this.node_scrollContent.getComponent(UITransform).width = 0;
          console.log('有加赠的数据', this._param.itemData); // 	//判断是否存在加赠信息

          if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).table_isEmpty(this._param.itemData["specialDesc"])) {
            //打开加赠节点
            this.node_jiaZen.active = true; //设置名称

            this.label_jiaZenGoosName.string = this._param.itemData["name"]; //设置图片

            this.setSpriteFrame(this.node_jiaZenGoosImg, this._param.itemData["icon"]);
            this.node_jiaZenGoosDesc.string = this._param.itemData["name"] + "," + this._param.itemData["specialDesc"];
          } else {
            this.node_jiaZen.active = false;
          } //金条支付 待完善


          var PayWay = this._param.itemData.currency || 0;
          var PayPrice = this._param.itemData.price || 0;

          if (PayWay) {
            //商品价格
            switch (PayWay) {
              case (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
                error: Error()
              }), GConstants) : GConstants).PayType.RMB:
                this.node_Exchange.active = false;
                this.label_Rmb.node.active = true;
                this.label_Rmb.string = PayPrice + "\u5143";
                break;

              case (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
                error: Error()
              }), GConstants) : GConstants).PayType.SILVER:
                this.node_Exchange.active = false;
                this.label_Rmb.node.active = true;
                this.label_Rmb.string = PayPrice + "\u94F6\u5E01";
                break;

              case (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
                error: Error()
              }), GConstants) : GConstants).PayType.FREE:
                this.node_Exchange.active = false;
                this.label_Rmb.node.active = true;
                this.label_Rmb.string = "免费";
                break;

              case (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
                error: Error()
              }), GConstants) : GConstants).PayType.TICKET:
                this.node_Exchange.active = false;
                this.label_Rmb.node.active = true;
                this.label_Rmb.string = PayPrice + "\u5151\u6362\u5238";
                break;

              default:
                (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
                  error: Error()
                }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
                  error: Error()
                }), AppEvent) : AppEvent).SYS_TOAST_TIP, {
                  content: "当前支付方式不存在"
                });
                break;
            }

            this.node_btnBuy.active = true;
            return;
          } else {
            this.node_btnBuy.active = true;
          }
        }
        /**设置远端图片 */


        setSpriteFrame(node, path) {
          if (!path) {
            return;
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

              if (!self.node || self.node.isValid == false) {
                return;
              }

              var spriteFrame = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                error: Error()
              }), Utils) : Utils).image_ImageAssetToSpriteFrame(imageAsset);

              if (spriteFrame) {
                node.getComponent(Sprite).spriteFrame = spriteFrame;
              }
            });
          }
        }
        /** 更新确认购买的界面 */


        updateOnSureView() {
          this.node_jiaZen.active = false;
          this.node_scrollContent.active = false;
          this.node_sureconfirm.active = true;
          this.node_btnBuy.active = false;
          this.node_btnSure.active = true;
          this.node_btnClose.active = true;
          this.label_sureName.string = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).nullToDefault(this._param.itemData["name"], "");
          var payGold = this._param.itemData.crystal;
          var payData = this._param.itemData.currency;

          if (payData) {
            var iconUITransform = this.sprite_sureIcon.node.getComponent(UITransform);

            if ((_crd && PayAgent === void 0 ? (_reportPossibleCrUseOfPayAgent({
              error: Error()
            }), PayAgent) : PayAgent).isRMB(payData)) {
              iconUITransform.width = 0;
              iconUITransform.height = 0;
              this.label_surePrice.string = this._param.itemData.price + "\u5143";
            } else if (payData == (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
              error: Error()
            }), GConstants) : GConstants).PayType.SILVER) {
              this.label_surePrice.string = this._param.itemData.price + "\u94F6\u5E01";
              this.sprite_sureIcon.spriteFrame = this.spriFrame_Diamond;
              this.sprite_sureIcon.node.active = true;
            } else {
              iconUITransform.width = 0;
              iconUITransform.height = 0;
            }
          }
        }
        /**设置远端图片 */


        setSpriteFrameByRemote(node, path) {
          if (!path) {
            return;
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

              if (!self.node || self.node.isValid == false) {
                return;
              }

              var spriteFrame = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                error: Error()
              }), Utils) : Utils).image_ImageAssetToSpriteFrame(imageAsset);

              if (spriteFrame) {
                node.getComponent(Sprite).spriteFrame = spriteFrame;
              }
            });
          }
        }
        /** 切换到确认返还界面 */


        changeToNeedBackView() {// 暂无返还的概念
          // this.node_Scroll.active = false;
          // this.node_sureconfirm.active = false;
          // this.node_btnBuy.active = false;
          // let txtGoodName = "";
          // let num = 0;
          // let ty = null;
          // for (let i = 0; i < this._needBackGoodList.length; i++) {
          //     let v = this._needBackGoodList[i];
          //     txtGoodName = txtGoodName + "[" + v["item_name"] + "]";
          //     num = num + v["back_assets_number"];
          //     if (ty == null) {
          //         ty = v["back_assets_type"];
          //     }
          // }
          // this.node_confirmBack.active = true;
          // this.node_btnSure.active = true;
          // this.addSchedulerOnce(2, () => {
          //     this._isSureNeedBack = true;
          // })
        }
        /** 点击购买按钮 */


        onClickBuy(event) {
          console.log('点击了购买按钮', this._param.callFunc, this._param.itemData);
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).SYS_PLAY_EFFECT, (_crd && AppSound === void 0 ? (_reportPossibleCrUseOfAppSound({
            error: Error()
          }), AppSound) : AppSound).CommClick); // if (this._needBackGoodList.length > 0 && this._isSureNeedBack == false) {
          // 	this.changeToNeedBackView();
          // 	return;
          // }

          this.node.destroy();

          if (this._param.callFunc) {
            this._param.callFunc(this._param.itemData);
          }
        }
        /** 点击确定按钮 */


        onClickSure(event) {
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).SYS_PLAY_EFFECT, (_crd && AppSound === void 0 ? (_reportPossibleCrUseOfAppSound({
            error: Error()
          }), AppSound) : AppSound).CommClick);
          this.node.destroy();

          if (this._param.callFunc) {
            this._param.callFunc(this._param.itemData);
          }
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

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "sprite_title", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "node_Scroll", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "node_ScrollView", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "node_scrollContent", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "node_sureconfirm", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "label_surePrice", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "sprite_sureIcon", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "label_sureName", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "node_confirmBack", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "label_confirmBackPrice", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "sprite_confirmBackIcon", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "label_confirmBackName", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "node_btnClose", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "node_btnBuy", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "node_btnSure", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "node_Exchange", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "sprite_ExchangeIcon", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "label_Exchange", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "label_Rmb", [_dec21], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, "cloneItem", [_dec22], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, "spriFrame_Diamond", [_dec23], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, "spriFrame_Gold", [_dec24], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor23 = _applyDecoratedDescriptor(_class2.prototype, "node_jiaZen", [_dec25], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor24 = _applyDecoratedDescriptor(_class2.prototype, "node_jiaZenGoos", [_dec26], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor25 = _applyDecoratedDescriptor(_class2.prototype, "label_jiaZenGoosName", [_dec27], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor26 = _applyDecoratedDescriptor(_class2.prototype, "node_jiaZenGoosImg", [_dec28], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor27 = _applyDecoratedDescriptor(_class2.prototype, "node_jiaZenGoosDesc", [_dec29], {
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
//# sourceMappingURL=480e9417720d4b79a1b437a6e4d4966e2759218f.js.map