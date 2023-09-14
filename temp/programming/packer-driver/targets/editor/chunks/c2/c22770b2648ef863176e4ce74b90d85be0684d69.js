System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Label, Layout, Node, Sprite, SpriteFrame, _decorator, GConstants, Utils, resLoader, BaseComponent, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _crd, ccclass, property, menu, shopGoodsPrefabCtr;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfGConstants(extras) {
    _reporterNs.report("GConstants", "../../../config/GameConstant", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUtils(extras) {
    _reporterNs.report("Utils", "../../../framework/Utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfresLoader(extras) {
    _reporterNs.report("resLoader", "../../../framework/loader/ResLoader", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../../framework/vc/BaseComponent", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Label = _cc.Label;
      Layout = _cc.Layout;
      Node = _cc.Node;
      Sprite = _cc.Sprite;
      SpriteFrame = _cc.SpriteFrame;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      GConstants = _unresolved_2.GConstants;
    }, function (_unresolved_3) {
      Utils = _unresolved_3.Utils;
    }, function (_unresolved_4) {
      resLoader = _unresolved_4.resLoader;
    }, function (_unresolved_5) {
      BaseComponent = _unresolved_5.BaseComponent;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "3abacMe6O5CYo0JHAEUhknI", "shopGoodsPrefabCtr", undefined);

      __checkObsolete__(['EventTouch', 'Label', 'Layout', 'Node', 'Sprite', 'SpriteFrame', '_decorator']);

      ({
        ccclass,
        property,
        menu
      } = _decorator);
      /**
       * Name = shopGoodsPrefabCtr
       * URL = db://assets/package/hall/scripts/shopGoodsPrefabCtr.ts
       * Time = Mon Oct 31 2022 12:19:06 GMT+0800 (中国标准时间)
       * Author = Tomoe
       *
       * Life: onLoad-->onEnable->start->update->lateUpdate->onDisable->onDestroy
       */

      _export("shopGoodsPrefabCtr", shopGoodsPrefabCtr = (_dec = ccclass('shopGoodsPrefabCtr'), _dec2 = menu('prefab/hall/shopGoodsPrefabCtr'), _dec3 = property({
        tooltip: "商品名称",
        type: Label
      }), _dec4 = property({
        tooltip: "商品兑换价格根节点",
        type: Node
      }), _dec5 = property({
        tooltip: "商品兑换图标",
        type: Node
      }), _dec6 = property({
        tooltip: "商品兑换价格",
        type: Label
      }), _dec7 = property({
        tooltip: "商品人民币/免费价格",
        type: Label
      }), _dec8 = property({
        tooltip: "商品数量背景显示",
        type: Node
      }), _dec9 = property({
        tooltip: "商品数量",
        type: Label
      }), _dec10 = property({
        tooltip: "商品优惠角标显示",
        type: Sprite
      }), _dec11 = property({
        tooltip: "商品图片根节点",
        type: Node
      }), _dec12 = property({
        tooltip: "商品图片",
        type: Node
      }), _dec13 = property({
        tooltip: "商品已拥有显示",
        type: Node
      }), _dec14 = property({
        tooltip: "商品选中节点",
        type: Node
      }), _dec15 = property({
        tooltip: "加赠文字展示节点",
        type: Node
      }), _dec16 = property({
        tooltip: "加赠文字展示",
        type: Label
      }), _dec17 = property({
        tooltip: "分享Icon图片",
        type: SpriteFrame
      }), _dec18 = property({
        tooltip: "看视频Icon图片",
        type: SpriteFrame
      }), _dec19 = property({
        tooltip: "角标-首充加赠",
        type: SpriteFrame
      }), _dec20 = property({
        tooltip: "商品点击层节点",
        type: Node
      }), _dec(_class = _dec2(_class = (_class2 = class shopGoodsPrefabCtr extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "labelName", _descriptor, this);

          _initializerDefineProperty(this, "node_Exchange", _descriptor2, this);

          _initializerDefineProperty(this, "node_ExchangeIcon", _descriptor3, this);

          _initializerDefineProperty(this, "label_ExchangePrice", _descriptor4, this);

          _initializerDefineProperty(this, "label_RmbPrice", _descriptor5, this);

          _initializerDefineProperty(this, "node_NumBg", _descriptor6, this);

          _initializerDefineProperty(this, "label_NumBg", _descriptor7, this);

          _initializerDefineProperty(this, "sprite_Corner", _descriptor8, this);

          _initializerDefineProperty(this, "node_ItemBg", _descriptor9, this);

          _initializerDefineProperty(this, "node_ItemIcon", _descriptor10, this);

          _initializerDefineProperty(this, "node_HadBuy", _descriptor11, this);

          _initializerDefineProperty(this, "node_Select", _descriptor12, this);

          _initializerDefineProperty(this, "node_showJiaZeng", _descriptor13, this);

          _initializerDefineProperty(this, "label_showJiaZeng", _descriptor14, this);

          _initializerDefineProperty(this, "spriFrame_share", _descriptor15, this);

          _initializerDefineProperty(this, "spriFrame_video", _descriptor16, this);

          _initializerDefineProperty(this, "spriFrame_FirstPay", _descriptor17, this);

          _initializerDefineProperty(this, "node_ClickMask", _descriptor18, this);

          this._goodsData = null;
          this.isGoodsSelect = false;
          this._isOnLoad = false;
          this._callbackFunc = null;
        }

        // corner: ""
        // desc: ""
        // gifts: []
        // goodsID:  38
        // hadBuy: false
        // icon: "http://xxddz-static.17c.cn/images/libao-1636528611.png"
        // isPag:  true
        // item_url: ""
        // limitNum: {maxNum: 1, hadNum: 0, timeUnit: 2}
        // limitTime:  {}
        // name:  "超级钻石礼包"
        // order: 3
        // ownStatus: 2
        // pay: [{…}]
        // res: [{…}, {…}]

        /** 设置物品数据 */
        set goodsData(data) {
          this._goodsData = data;

          if (this._isOnLoad) {
            this.updateView();
          }
        }

        get goodsData() {
          return this._goodsData;
        }
        /** 设置选中状态 */


        set isSelect(isSelect) {
          this.isGoodsSelect = isSelect;

          if (this._isOnLoad) {
            this.updateSelelctState();
          }
        }
        /** 设置选中状态 */


        set clickCallback(func) {
          this._callbackFunc = func;
        }

        onLoad() {}

        start() {
          this._isOnLoad = true;
          this.initView();
        }

        initView() {
          this.updateView();
        }
        /** 更新界面 */


        updateView() {
          console.log("更新的商品", this._goodsData);

          if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).table_isEmpty(this._goodsData)) {
            this.node_ClickMask.active = false;
            return;
          } //商品名称


          this.labelName.string = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).nullToDefault(this._goodsData.name, ""); //更新商品图片

          this.node_ItemBg.active = true;
          this.setSpriteFrameByRemote(this.node_ItemIcon, this._goodsData.icon); //是否已购买

          let isHadBuy = false; //更新商品数量/是否限购

          if (!this._goodsData.limit_buy_way || this._goodsData.limit_buy_way == '0') {
            this.node_NumBg.active = false;
          } else {
            this.node_NumBg.active = true;
            let maxNum = this._goodsData.limit_buy_num || 0;
            let hadNum = this._goodsData.bought_num || 0;
            this.label_NumBg.string = `${hadNum}/${maxNum}`;

            if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).number_valueOf(hadNum, -1) >= (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).number_valueOf(maxNum, 0)) {
              //超限购禁止购买
              isHadBuy = true;
            }
          } // 判断是否加赠 


          if (!!this._goodsData.specialDesc) {
            this.node_showJiaZeng.active = true;
            this.label_showJiaZeng.node.active = true;
            this.label_showJiaZeng.string = this._goodsData.specialDesc;
          } else {
            this.node_showJiaZeng.active = false;
            this.label_showJiaZeng.node.active = false;
          } //更新角标图片


          if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).string_isHttp(this._goodsData.eventIcon) == true) {
            console.log('添加了角标');
            this.setSpriteFrameByRemote(this.sprite_Corner.node, this._goodsData.eventIcon);
            this.sprite_Corner.node.active = true;
          } else {
            this.sprite_Corner.node.active = false;
          } //商品价格 展示金条兑换 下次再做


          switch (this._goodsData.currency) {
            case (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
              error: Error()
            }), GConstants) : GConstants).PayType.RMB:
              // rmb 1 	//人民币支付
              this.node_Exchange.active = false;
              this.label_RmbPrice.node.active = true;
              this.node_ExchangeIcon.active = false;
              this.label_RmbPrice.string = `${this._goodsData.price}元`;
              break;

            case (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
              error: Error()
            }), GConstants) : GConstants).PayType.SILVER:
              this.node_Exchange.active = false;
              this.node_ExchangeIcon.active = false;
              this.label_RmbPrice.node.active = true;
              this.label_RmbPrice.string = `${this._goodsData.price}银币`;
              break;

            case (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
              error: Error()
            }), GConstants) : GConstants).PayType.TICKET:
              this.node_Exchange.active = false;
              this.node_ExchangeIcon.active = false;
              this.label_RmbPrice.node.active = true;
              this.label_RmbPrice.string = `${this._goodsData.price}兑换券`;
              break;

            case (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
              error: Error()
            }), GConstants) : GConstants).PayType.SHARE:
              this.node_Exchange.active = true;
              this.label_RmbPrice.node.active = false;
              this.label_ExchangePrice.node.active = true;
              this.label_ExchangePrice.string = `分享`;
              this.node_ExchangeIcon.active = true;
              this.node_ExchangeIcon.getComponent(Sprite).spriteFrame = this.spriFrame_share;
              break;

            case (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
              error: Error()
            }), GConstants) : GConstants).PayType.VIDEO:
              this.node_Exchange.active = true;
              this.label_RmbPrice.node.active = false;
              this.label_ExchangePrice.node.active = true;
              this.label_ExchangePrice.string = `看视频`;
              this.node_ExchangeIcon.active = true;
              this.node_ExchangeIcon.getComponent(Sprite).spriteFrame = this.spriFrame_video;
              break;

            default:
              break;
          }

          this.node_Exchange.getComponent(Layout).updateLayout();
          this.updateSelelctState();
          this.node_ClickMask.active = true;
        }
        /** 更新选中状态 */


        updateSelelctState() {
          this.node_Select.active = this.isGoodsSelect;
        }
        /** 点击函数 */


        onClickFunc(event) {
          if (this._callbackFunc) {
            this._callbackFunc(event);
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
            let self = this;
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

              let spriteFrame = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                error: Error()
              }), Utils) : Utils).image_ImageAssetToSpriteFrame(imageAsset);

              if (spriteFrame) {
                node.getComponent(Sprite).spriteFrame = spriteFrame;
              }
            });
          }
        } //销毁


        onDestroy() {}

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "labelName", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "node_Exchange", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "node_ExchangeIcon", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "label_ExchangePrice", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "label_RmbPrice", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "node_NumBg", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "label_NumBg", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "sprite_Corner", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "node_ItemBg", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "node_ItemIcon", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "node_HadBuy", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "node_Select", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "node_showJiaZeng", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "label_showJiaZeng", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "spriFrame_share", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "spriFrame_video", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "spriFrame_FirstPay", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "node_ClickMask", [_dec20], {
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
//# sourceMappingURL=c22770b2648ef863176e4ce74b90d85be0684d69.js.map