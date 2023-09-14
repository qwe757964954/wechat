System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, ImageAsset, Node, ScrollView, Sprite, Toggle, _decorator, instantiate, GCache, AppEvent, AppSound, GameRes, Utils, resLoader, EventManager, BaseComponent, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _crd, ccclass, property, PictureTabDialogComponent;

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
    _reporterNs.report("Utils", "../../framework/Utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfresLoader(extras) {
    _reporterNs.report("resLoader", "../../framework/loader/ResLoader", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventManager(extras) {
    _reporterNs.report("EventManager", "../../framework/manager/EventManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../framework/vc/BaseComponent", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      ImageAsset = _cc.ImageAsset;
      Node = _cc.Node;
      ScrollView = _cc.ScrollView;
      Sprite = _cc.Sprite;
      Toggle = _cc.Toggle;
      _decorator = _cc._decorator;
      instantiate = _cc.instantiate;
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

      _cclegacy._RF.push({}, "519edtSIYZIgKg9aey9PQzW", "PictureTabDialogComponet", undefined);

      __checkObsolete__(['ImageAsset', 'Node', 'ScrollView', 'Sprite', 'SpriteFrame', 'Toggle', '_decorator', 'instantiate']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Name = PictureTabDialogComponent
       * URL = db://assets/package/login/scripts/PictureTabDialogComponent.ts
       * Time = Thu Aug 04 2022 17:12:23 GMT+0800 (中国标准时间)
       * Author = xueya
       *
       * Life: onLoad-->onEnable->start->update->lateUpdate->onDisable->onDestroy
       * 
       * 用户协议和隐私政策
       */

      _export("PictureTabDialogComponent", PictureTabDialogComponent = (_dec = ccclass('PictureTabDialogComponent'), _dec2 = property({
        tooltip: "标题内容",
        type: Node
      }), _dec3 = property({
        tooltip: "正文节点",
        type: Node
      }), _dec4 = property({
        tooltip: "滚动条节点",
        type: Node
      }), _dec5 = property({
        tooltip: "滚动条容器",
        type: Node
      }), _dec6 = property({
        tooltip: "菜单列表节点",
        type: Node
      }), _dec7 = property({
        tooltip: "菜单模板",
        type: Node
      }), _dec8 = property({
        tooltip: "无内容时的节点",
        type: Node
      }), _dec(_class = (_class2 = class PictureTabDialogComponent extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        //正文标题
        //正文节点
        //滚动条节点
        //滚动条容器
        //菜单模板
        //菜单模板
        //无内容时的节点
        //当前最大资源加载数量
        //当前资源加载数量
        //当前类型
        //当前选择tab
        constructor() {
          super();

          _initializerDefineProperty(this, "titleNode", _descriptor, this);

          _initializerDefineProperty(this, "contentNode", _descriptor2, this);

          _initializerDefineProperty(this, "scrollowBarNode", _descriptor3, this);

          _initializerDefineProperty(this, "scrollowContent", _descriptor4, this);

          _initializerDefineProperty(this, "menuListNode", _descriptor5, this);

          _initializerDefineProperty(this, "menuTemplate", _descriptor6, this);

          _initializerDefineProperty(this, "nodeNoTips", _descriptor7, this);

          this._allResMapList = {
            "玩法规则": (_crd && GameRes === void 0 ? (_reportPossibleCrUseOfGameRes({
              error: Error()
            }), GameRes) : GameRes).Picture_GameRule
          };
          this._loadResMapList = new Map();
          this._curMaxResNum = new Map();
          this._curResNum = new Map();
          this._dialogType = null;
          this._curSeletedTab = 0;
          this.preLoad();
        } //预加载


        preLoad() {
          if (!(_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
            error: Error()
          }), GCache) : GCache).firstRunLoadSuccess) {
            return;
          }

          var self = this;

          var _loop = function _loop(type) {
            self._loadResMapList.set(type, new Map());

            self._curMaxResNum.set(type, 0);

            self._curResNum.set(type, 0);

            var resConf = self._allResMapList[type];

            var _loop2 = function _loop2(i) {
              self._loadResMapList.get(type).set(i, new Map());

              self._loadResMapList.get(type).get(i).set("tab", new Map());

              self._loadResMapList.get(type).get(i).set("content", new Map());

              var oneResConf = resConf[i];

              var _loop3 = function _loop3(j) {
                var conf = oneResConf.tab[j];

                self._curMaxResNum.set(type, self._curMaxResNum.get(type) + 1);

                (_crd && resLoader === void 0 ? (_reportPossibleCrUseOfresLoader({
                  error: Error()
                }), resLoader) : resLoader).load(conf.bundle, conf.path, ImageAsset, (err, imageAsset) => {
                  if (err || !self._loadResMapList) {
                    self.print("error", err);
                    return;
                  }

                  self._loadResMapList.get(type).get(i).get("tab").set(j, imageAsset);

                  self._curResNum.set(type, self._curResNum.get(type) + 1);

                  if (self._dialogType == type) {
                    self.updateView();
                  }
                });
              };

              for (var j = 0; j < oneResConf.tab.length; j++) {
                _loop3(j);
              }

              var _loop4 = function _loop4(_j) {
                var conf = oneResConf.content[_j];

                self._curMaxResNum.set(type, self._curMaxResNum.get(type) + 1);

                (_crd && resLoader === void 0 ? (_reportPossibleCrUseOfresLoader({
                  error: Error()
                }), resLoader) : resLoader).load(conf.bundle, conf.path, ImageAsset, (err, imageAsset) => {
                  if (err || !self._loadResMapList) {
                    self.print("error", err);
                    return;
                  }

                  self._loadResMapList.get(type).get(i).get("content").set(_j, imageAsset);

                  self._curResNum.set(type, self._curResNum.get(type) + 1);

                  if (self._dialogType == type) {
                    self.updateView();
                  }
                });
              };

              for (var _j = 0; _j < oneResConf.content.length; _j++) {
                _loop4(_j);
              }
            };

            for (var i = 0; i < resConf.length; i++) {
              _loop2(i);
            }

            ;
          };

          for (var type in this._allResMapList) {
            _loop(type);
          }
        }

        onLoad() {
          this.initData();
          this.initView();
          this.updateView();
        }

        start() {}

        initData() {
          var comp = null;
          comp = this.node.getComponent("DelegateComponent");

          if (comp) {
            this._dialogType = comp.getParams();
            this._curSeletedTab = 0;
          }
        }

        initView() {}
        /** 更新界面 */


        updateView() {
          if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).isNull(this._dialogType)) {
            this.print("PictureTabDialogComponent", "updateView", "参数错误");
            return;
          }

          if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).isNull(this._allResMapList[this._dialogType])) {
            this.print("PictureTabDialogComponent", "updateView", "弹框类型错误");
            return;
          }

          if (this._curResNum.get(this._dialogType) != this._curMaxResNum.get(this._dialogType)) {
            this.print("PictureTabDialogComponent", "updateView", "资源加载中");
            return;
          }

          var resLoad = this._loadResMapList.get(this._dialogType);

          if (this.menuListNode.children.length <= 1) {
            for (var i = 0; i < resLoad.size; i++) {
              var oneResLoad = resLoad.get(i);

              if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                error: Error()
              }), Utils) : Utils).isNotNull(oneResLoad.get("tab"))) {
                var menuNode = instantiate(this.menuTemplate);
                var toggle = menuNode.getComponent(Toggle);
                toggle.clickEvents[0].customEventData = String(i);
                menuNode.getComponent(Sprite).spriteFrame = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                  error: Error()
                }), Utils) : Utils).image_ImageAssetToSpriteFrame(oneResLoad.get("tab").get(0));
                var checkmark = menuNode.getChildByName("Checkmark");
                checkmark.getComponent(Sprite).spriteFrame = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                  error: Error()
                }), Utils) : Utils).image_ImageAssetToSpriteFrame(oneResLoad.get("tab").get(1));
                menuNode.active = true;
                this.menuListNode.addChild(menuNode);

                if (this._curSeletedTab == i) {
                  toggle.isChecked = true;
                  this.updateViewContent();
                }
              }
            }
          }
        }

        onClickItem(event, customEventData) {
          this._curSeletedTab = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).number_valueOf(customEventData, 0);
          this.updateViewContent();
          this.scrollowContent.getComponent(ScrollView).scrollToTop(0.01, false);
        }
        /** 更新内容 */


        updateViewContent() {
          if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).isNull(this._dialogType)) {
            this.print("PictureTabDialogComponent", "updateView", "参数错误");
            return;
          }

          if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).isNull(this._allResMapList[this._dialogType])) {
            this.print("PictureTabDialogComponent", "updateView", "弹框类型错误");
            return;
          }

          var resLoad = this._loadResMapList.get(this._dialogType);

          var resSelected = resLoad.get(this._curSeletedTab);

          if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).isNull(resSelected)) {
            this.print("PictureTabDialogComponent", "updateView", "tab索引错误");
            return;
          }

          if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).isNotNull(resSelected.get("content"))) {
            this.contentNode.removeAllChildren();
            this.nodeNoTips.active = false;

            for (var i = 0; i < resSelected.get("content").size; i++) {
              var imageAssert = resSelected.get("content").get(i);

              if (imageAssert) {
                var spriteFrame = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                  error: Error()
                }), Utils) : Utils).image_ImageAssetToSpriteFrame(imageAssert);

                if (spriteFrame) {
                  this.contentNode.addChild(this.creatorSpriteNode(spriteFrame));
                }
              }
            }
          }
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
        }

        creatorSpriteNode(spriteFrame) {
          var node = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).create_2DSprite(spriteFrame, "Sprite");
          return node;
        } //销毁


        onDestroy() {}

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "titleNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "contentNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "scrollowBarNode", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "scrollowContent", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "menuListNode", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "menuTemplate", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "nodeNoTips", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=653b278bae680c456ec09afbf2a0a3a393cb29bb.js.map