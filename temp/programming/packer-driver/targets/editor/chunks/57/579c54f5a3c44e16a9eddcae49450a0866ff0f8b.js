System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, ImageAsset, Label, Layout, Node, Size, Sprite, UITransform, Vec3, _decorator, GCache, AppEvent, AppSound, GameRes, Utils, resLoader, EventManager, BaseComponent, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _crd, ccclass, property, PictureDialogComponent;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfGCache(extras) {
    _reporterNs.report("GCache", "../../cache/GCache", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAppEvent(extras) {
    _reporterNs.report("AppEvent", "../../config/AppEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAppSound(extras) {
    _reporterNs.report("AppSound", "../../config/AppSound", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameRes(extras) {
    _reporterNs.report("GameRes", "../../config/GameRes", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUtils(extras) {
    _reporterNs.report("Utils", "../Utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfresLoader(extras) {
    _reporterNs.report("resLoader", "../loader/ResLoader", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventManager(extras) {
    _reporterNs.report("EventManager", "../manager/EventManager", _context.meta, extras);
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
      ImageAsset = _cc.ImageAsset;
      Label = _cc.Label;
      Layout = _cc.Layout;
      Node = _cc.Node;
      Size = _cc.Size;
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
      GameRes = _unresolved_5.GameRes;
    }, function (_unresolved_6) {
      Utils = _unresolved_6.Utils;
    }, function (_unresolved_7) {
      resLoader = _unresolved_7.resLoader;
    }, function (_unresolved_8) {
      EventManager = _unresolved_8.EventManager;
    }, function (_unresolved_9) {
      BaseComponent = _unresolved_9.BaseComponent;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2e341vk5rVJ3La0/ztS8QzU", "PictureDialogComponent", undefined);

      __checkObsolete__(['ImageAsset', 'Label', 'Layout', 'Node', 'Size', 'Sprite', 'SpriteFrame', 'UITransform', 'Vec3', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Name = PictureDialogComponent
       * URL = db://assets/package/login/scripts/PictureDialogComponent.ts
       * Time = Thu Aug 04 2022 17:12:23 GMT+0800 (中国标准时间)
       * Author = xueya
       *
       * Life: onLoad-->onEnable->start->update->lateUpdate->onDisable->onDestroy
       * 
       * 图片提示框
       * 适龄提示、规则说明、玩法规则、货币声明
       */

      _export("PictureDialogComponent", PictureDialogComponent = (_dec = ccclass('PictureDialogComponent'), _dec2 = property({
        tooltip: "标题内容-文本",
        type: Label
      }), _dec3 = property({
        tooltip: "标题内容-图片",
        type: Sprite
      }), _dec4 = property({
        tooltip: "正文和按钮的根节点",
        type: Node
      }), _dec5 = property({
        tooltip: "正文根节点",
        type: Node
      }), _dec6 = property({
        tooltip: "按钮根节点",
        type: Node
      }), _dec7 = property({
        tooltip: "关闭按钮",
        type: Node
      }), _dec8 = property({
        tooltip: "正文节点",
        type: Node
      }), _dec9 = property({
        tooltip: "滚动条节点",
        type: Node
      }), _dec10 = property({
        tooltip: "两个按钮的父节点",
        type: Node
      }), _dec11 = property({
        tooltip: "一个按钮的父节点",
        type: Node
      }), _dec12 = property({
        tooltip: "无内容时的节点",
        type: Node
      }), _dec(_class = (_class2 = class PictureDialogComponent extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        //正文标题
        //正文标题
        //正文和按钮的根节点
        //正文根节点
        //按钮根节点
        //关闭按钮
        //正文节点
        //无内容时的节点
        //已经加载的资源队列{type-{}}
        //当前最大资源加载数量
        //当前类型
        constructor() {
          super();

          _initializerDefineProperty(this, "labelTitle", _descriptor, this);

          _initializerDefineProperty(this, "sprTitle", _descriptor2, this);

          _initializerDefineProperty(this, "nodePanel", _descriptor3, this);

          _initializerDefineProperty(this, "nodeContentRoot", _descriptor4, this);

          _initializerDefineProperty(this, "nodeButtonRoot", _descriptor5, this);

          _initializerDefineProperty(this, "nodeButtonClose", _descriptor6, this);

          _initializerDefineProperty(this, "contentNode", _descriptor7, this);

          _initializerDefineProperty(this, "scrollowBarNode", _descriptor8, this);

          _initializerDefineProperty(this, "nodeTwoBtn", _descriptor9, this);

          _initializerDefineProperty(this, "nodeOneBtn", _descriptor10, this);

          _initializerDefineProperty(this, "nodeNoTips", _descriptor11, this);

          this._allResMapList = {
            "适龄提示": (_crd && GameRes === void 0 ? (_reportPossibleCrUseOfGameRes({
              error: Error()
            }), GameRes) : GameRes).Picture_AgePromit,
            "货币声明": (_crd && GameRes === void 0 ? (_reportPossibleCrUseOfGameRes({
              error: Error()
            }), GameRes) : GameRes).Picture_CoinHelp
          };
          this._loadResMapList = {};
          this._curMaxResNum = -1;
          this._currowType = null;
          this.preLoad();
        } //预加载


        preLoad() {
          if (!(_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
            error: Error()
          }), GCache) : GCache).firstRunLoadSuccess) {
            return;
          }

          let self = this;

          for (let type in this._allResMapList) {
            let resConf = this._allResMapList[type];

            for (let i = 0; i < resConf.length; i++) {
              let oneResConf = resConf[i];
              (_crd && resLoader === void 0 ? (_reportPossibleCrUseOfresLoader({
                error: Error()
              }), resLoader) : resLoader).load(oneResConf.bundle, oneResConf.path, ImageAsset, (err, imageAsset) => {
                if (err || !self._loadResMapList) {
                  return;
                }

                if (!self._loadResMapList[type]) {
                  self._loadResMapList[type] = {};
                }

                self._loadResMapList[type][i] = null;
                self._loadResMapList[type][i] = imageAsset;

                if (self._currowType == type) {
                  self.onLoadCallback(self._currowType);
                }
              });
            }

            ;
          }
        }

        onLoad() {
          let comp = null;
          comp = this.node.getComponent("DelegateComponent");

          if (comp) {
            this._currowType = comp.getParams();
          }

          this.labelTitle.node.active = false;
          this.sprTitle.node.active = false;
          this.updateView();
          this.onLoadCallback(this._currowType);
        }

        //点击了同意
        onClickSure() {
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).SYS_PLAY_EFFECT, (_crd && AppSound === void 0 ? (_reportPossibleCrUseOfAppSound({
            error: Error()
          }), AppSound) : AppSound).CommClick);
          this.node.destroy();
        } //点击了取消/关闭


        onClickCancel() {
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).SYS_PLAY_EFFECT, (_crd && AppSound === void 0 ? (_reportPossibleCrUseOfAppSound({
            error: Error()
          }), AppSound) : AppSound).CommClick);
          this.node.destroy();
        } //更新界面


        updateView() {
          // this.labelTitle.string = String(this._currowType);
          this.sprTitle.node.active = true;

          if (this._allResMapList[this._currowType]) {
            this._curMaxResNum = this._allResMapList[this._currowType].length;
          }

          this.nodePanel.active = true;
          let uiTransform = this.nodeContentRoot.getComponent(UITransform);

          if (this._currowType == "连炸场玩法规则") {
            this.nodeButtonRoot.active = false;
            this.nodeButtonClose.active = true;
            uiTransform.setContentSize(new Size(uiTransform.width, this.nodePanel.getComponent(UITransform).height));
          } else {
            this.nodeButtonRoot.active = true;
            this.nodeButtonClose.active = false;
            uiTransform.setContentSize(new Size(uiTransform.width, this.nodePanel.getComponent(UITransform).height - this.nodeButtonRoot.getComponent(UITransform).height));
          }

          this.nodeContentRoot.active = true;
          this.nodeOneBtn.active = true;
          this.nodeTwoBtn.active = false;
          this.nodeNoTips.active = true;
          this.nodePanel.getComponent(Layout).updateLayout();
        }
        /** 加载完成的回调 */


        onLoadCallback(type = null) {
          if (type == null || this._loadResMapList[type] == null) {
            return;
          }

          if (!this.node || this.node.isValid == false) {
            return;
          }

          if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).table_length(this._loadResMapList[type]) == this._curMaxResNum) {
            this.nodeNoTips.active = false;
            let pWidth = this.contentNode.getComponent(UITransform).width;
            this.contentNode.removeAllChildren();

            for (let i = 0; i < this._curMaxResNum; i++) {
              let imageAssert = this._loadResMapList[type][i];

              if (imageAssert) {
                let spriteFrame = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                  error: Error()
                }), Utils) : Utils).image_ImageAssetToSpriteFrame(imageAssert);

                if (spriteFrame) {
                  let sprNode = this.creatorSpriteNode(spriteFrame);
                  this.contentNode.addChild(sprNode); //缩放适配

                  let childUITrans = sprNode.getComponent(UITransform);
                  let scaleX = 1,
                      scaleY = 1,
                      scaleZ = 1;

                  if (childUITrans.width / pWidth > 1) {
                    scaleX = pWidth / childUITrans.width;
                    scaleY = scaleX;
                  } else if (childUITrans.width / pWidth < 1) {
                    scaleX = pWidth / childUITrans.width;
                    scaleY = scaleX;
                  }

                  sprNode.scale = new Vec3(scaleX, scaleY, scaleZ);
                }
              }
            }
          }
        }

        creatorSpriteNode(spriteFrame) {
          let node = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).create_2DSprite(spriteFrame, "Sprite");
          return node;
        } //销毁


        onDestroy() {}

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "labelTitle", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "sprTitle", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "nodePanel", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "nodeContentRoot", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "nodeButtonRoot", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "nodeButtonClose", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "contentNode", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "scrollowBarNode", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "nodeTwoBtn", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "nodeOneBtn", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "nodeNoTips", [_dec12], {
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
//# sourceMappingURL=579c54f5a3c44e16a9eddcae49450a0866ff0f8b.js.map