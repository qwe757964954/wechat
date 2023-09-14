System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Button, ImageAsset, Node, Sprite, _decorator, GCache, AppEvent, AppSound, StoreKey, GameRes, resLoader, LocalStorage, EventManager, Utils, BaseComponent, Platform, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _crd, ccclass, property, UserAgreePrivateCtr;

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

  function _reportPossibleCrUseOfStoreKey(extras) {
    _reporterNs.report("StoreKey", "../../../config/GameConstant", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameRes(extras) {
    _reporterNs.report("GameRes", "../../../config/GameRes", _context.meta, extras);
  }

  function _reportPossibleCrUseOfresLoader(extras) {
    _reporterNs.report("resLoader", "../../../framework/loader/ResLoader", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLocalStorage(extras) {
    _reporterNs.report("LocalStorage", "../../../framework/LocalStorage", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventManager(extras) {
    _reporterNs.report("EventManager", "../../../framework/manager/EventManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUtils(extras) {
    _reporterNs.report("Utils", "../../../framework/Utils", _context.meta, extras);
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
      StoreKey = _unresolved_5.StoreKey;
    }, function (_unresolved_6) {
      GameRes = _unresolved_6.GameRes;
    }, function (_unresolved_7) {
      resLoader = _unresolved_7.resLoader;
    }, function (_unresolved_8) {
      LocalStorage = _unresolved_8.LocalStorage;
    }, function (_unresolved_9) {
      EventManager = _unresolved_9.EventManager;
    }, function (_unresolved_10) {
      Utils = _unresolved_10.Utils;
    }, function (_unresolved_11) {
      BaseComponent = _unresolved_11.BaseComponent;
    }, function (_unresolved_12) {
      Platform = _unresolved_12.Platform;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e5a5cmhP55DyboY7Kr4aOj0", "UserAgreePrivateCtr", undefined);

      __checkObsolete__(['Button', 'ImageAsset', 'Node', 'Sprite', 'SpriteFrame', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Name = UserAgreePrivateCtr
       * URL = db://assets/package/login/scripts/UserAgreePrivateCtr.ts
       * Time = Thu Aug 04 2022 17:12:23 GMT+0800 (中国标准时间)
       * Author = xueya
       *
       * Life: onLoad-->onEnable->start->update->lateUpdate->onDisable->onDestroy
       * 
       * 用户协议和隐私政策
       */

      _export("UserAgreePrivateCtr", UserAgreePrivateCtr = (_dec = ccclass('UserAgreePrivateCtr'), _dec2 = property({
        tooltip: "隐私保护内容指引节点",
        type: Node
      }), _dec3 = property({
        tooltip: "标题内容",
        type: Node
      }), _dec4 = property({
        tooltip: "正文节点",
        type: Node
      }), _dec5 = property({
        tooltip: "滚动条节点",
        type: Node
      }), _dec6 = property({
        tooltip: "菜单标签-用户协议",
        type: Node
      }), _dec7 = property({
        tooltip: "菜单标签-隐私政策",
        type: Node
      }), _dec8 = property({
        tooltip: "两个按钮的父节点",
        type: Node
      }), _dec9 = property({
        tooltip: "一个按钮的父节点",
        type: Node
      }), _dec10 = property({
        tooltip: "无内容时的节点",
        type: Node
      }), _dec11 = property({
        tooltip: "TAB标签",
        type: Node
      }), _dec(_class = (_class2 = class UserAgreePrivateCtr extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        //正文标题
        //正文标题
        //正文节点
        //无内容时的节点
        //TAB标签
        //用户协议图集
        //隐私政策图集
        //当前最大资源加载数量
        //当前类型
        //是否上报给平台
        constructor() {
          super();

          _initializerDefineProperty(this, "privateHelpNode", _descriptor, this);

          _initializerDefineProperty(this, "titleNode", _descriptor2, this);

          _initializerDefineProperty(this, "contentNode", _descriptor3, this);

          _initializerDefineProperty(this, "scrollowBarNode", _descriptor4, this);

          _initializerDefineProperty(this, "menuUserAgree", _descriptor5, this);

          _initializerDefineProperty(this, "menuPrivatePro", _descriptor6, this);

          _initializerDefineProperty(this, "nodeTwoBtn", _descriptor7, this);

          _initializerDefineProperty(this, "nodeOneBtn", _descriptor8, this);

          _initializerDefineProperty(this, "nodeNoTips", _descriptor9, this);

          _initializerDefineProperty(this, "nodeTab", _descriptor10, this);

          this._userAgreeRes = new Map();
          this._priRes = new Map();
          this._curMaxResNum = -1;
          this._currowType = 0;
          this._isReportToPlatform = false;
          this.preLoad();
        } //预加载


        preLoad() {
          if (!(_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
            error: Error()
          }), GCache) : GCache).firstRunLoadSuccess) {
            return;
          }

          var self = this;

          var _loop = function _loop(i) {
            var oneResConf = (_crd && GameRes === void 0 ? (_reportPossibleCrUseOfGameRes({
              error: Error()
            }), GameRes) : GameRes).Picture_UserPrivacyPolicy[i];
            (_crd && resLoader === void 0 ? (_reportPossibleCrUseOfresLoader({
              error: Error()
            }), resLoader) : resLoader).load(oneResConf.bundle, oneResConf.path, ImageAsset, (err, imageAsset) => {
              if (err || !self._priRes) {
                return;
              }

              self._priRes.delete(i);

              self._priRes.set(i, imageAsset);

              if (self._currowType == 2) {
                self.onLoadCallback(self._currowType);
              }
            });
          };

          for (var i = 0; i < (_crd && GameRes === void 0 ? (_reportPossibleCrUseOfGameRes({
            error: Error()
          }), GameRes) : GameRes).Picture_UserPrivacyPolicy.length; i++) {
            _loop(i);
          }

          ;

          var _loop2 = function _loop2(_i) {
            var oneResConf = (_crd && GameRes === void 0 ? (_reportPossibleCrUseOfGameRes({
              error: Error()
            }), GameRes) : GameRes).Picture_UserAgree[_i];
            (_crd && resLoader === void 0 ? (_reportPossibleCrUseOfresLoader({
              error: Error()
            }), resLoader) : resLoader).load(oneResConf.bundle, oneResConf.path, ImageAsset, (err, imageAsset) => {
              if (err || !self._userAgreeRes) {
                return;
              }

              self._userAgreeRes.delete(_i);

              self._userAgreeRes.set(_i, imageAsset);

              if (self._currowType == 1) {
                self.onLoadCallback(self._currowType);
              }
            });
          };

          for (var _i = 0; _i < (_crd && GameRes === void 0 ? (_reportPossibleCrUseOfGameRes({
            error: Error()
          }), GameRes) : GameRes).Picture_UserAgree.length; _i++) {
            _loop2(_i);
          }
        }

        onLoad() {
          var comp = null;
          var currowType = null;
          var isHaveTag = true;
          comp = this.node.getComponent("DelegateComponent");

          if (comp) {
            var params = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).table_verify(comp.getParams());
            currowType = params["type"];
            isHaveTag = params["isHaveTag"] != false;
          }

          this._isReportToPlatform = currowType == null;
          this.privateHelpNode.active = (_crd && Platform === void 0 ? (_reportPossibleCrUseOfPlatform({
            error: Error()
          }), Platform) : Platform).checkPrivacyContract();
          this.nodeTab.active = isHaveTag;
          this.updateView();
          this._currowType = currowType ? currowType : 2;

          if (this._isReportToPlatform) {
            (_crd && Platform === void 0 ? (_reportPossibleCrUseOfPlatform({
              error: Error()
            }), Platform) : Platform).onNeedPrivacyAuthorization_WX("exposureAuthorization");
          }
        }

        start() {
          if (this._currowType == 1) {
            this.onClickMenuUserAgree();
          } else {
            this.onClickMenuPrivatePro();
          }
        }
        /** 更新界面 */


        updateView() {
          var isAgree = (_crd && LocalStorage === void 0 ? (_reportPossibleCrUseOfLocalStorage({
            error: Error()
          }), LocalStorage) : LocalStorage).get((_crd && StoreKey === void 0 ? (_reportPossibleCrUseOfStoreKey({
            error: Error()
          }), StoreKey) : StoreKey).LOGIN_LAST_CHECK_AGREE, false);

          if (!isAgree) {
            this.nodeTwoBtn.active = true;
            this.nodeOneBtn.active = false;
          } else {
            this.nodeTwoBtn.active = false;
            this.nodeOneBtn.active = true;
          }

          this.nodeNoTips.active = true;
        } //点击了用户协议


        onClickMenuUserAgree(e) {
          if (e === void 0) {
            e = null;
          }

          if (e) {
            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
              error: Error()
            }), AppEvent) : AppEvent).SYS_PLAY_EFFECT, (_crd && AppSound === void 0 ? (_reportPossibleCrUseOfAppSound({
              error: Error()
            }), AppSound) : AppSound).CommClick);
          }

          var clickSprite = this.menuUserAgree.getChildByName("Sprite");
          var clickBtn = this.menuUserAgree.getChildByName("btn");
          clickBtn.getComponent(Button).interactable = false;
          clickSprite.getComponent(Sprite).grayscale = false;
          var anotherSprite = this.menuPrivatePro.getChildByName("Sprite");
          var anotherBtn = this.menuPrivatePro.getChildByName("btn");
          anotherBtn.getComponent(Button).interactable = true;
          anotherSprite.getComponent(Sprite).grayscale = true;
          this.onLoadUserAgree();
        } //点击了隐私协议


        onClickMenuPrivatePro(e) {
          if (e === void 0) {
            e = null;
          }

          if (e) {
            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
              error: Error()
            }), AppEvent) : AppEvent).SYS_PLAY_EFFECT, (_crd && AppSound === void 0 ? (_reportPossibleCrUseOfAppSound({
              error: Error()
            }), AppSound) : AppSound).CommClick);
          }

          var clickSprite = this.menuPrivatePro.getChildByName("Sprite");
          var clickBtn = this.menuPrivatePro.getChildByName("btn");
          clickBtn.getComponent(Button).interactable = false;
          clickSprite.getComponent(Sprite).grayscale = false;
          var anotherSprite = this.menuUserAgree.getChildByName("Sprite");
          var anotherBtn = this.menuUserAgree.getChildByName("btn");
          anotherBtn.getComponent(Button).interactable = true;
          anotherSprite.getComponent(Sprite).grayscale = true;
          this.onLoadPrivacyPolicy();
        }
        /** 点击了隐私保护指引 */


        onClickPrivateHelp(e) {
          if (e === void 0) {
            e = null;
          }

          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).SYS_PLAY_EFFECT, (_crd && AppSound === void 0 ? (_reportPossibleCrUseOfAppSound({
            error: Error()
          }), AppSound) : AppSound).CommClick);
          (_crd && Platform === void 0 ? (_reportPossibleCrUseOfPlatform({
            error: Error()
          }), Platform) : Platform).openPrivacyContract_WX();
        } //点击了同意


        onClickSure() {
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).SYS_PLAY_EFFECT, (_crd && AppSound === void 0 ? (_reportPossibleCrUseOfAppSound({
            error: Error()
          }), AppSound) : AppSound).CommClick);
          (_crd && LocalStorage === void 0 ? (_reportPossibleCrUseOfLocalStorage({
            error: Error()
          }), LocalStorage) : LocalStorage).set((_crd && StoreKey === void 0 ? (_reportPossibleCrUseOfStoreKey({
            error: Error()
          }), StoreKey) : StoreKey).LOGIN_LAST_CHECK_AGREE, true);

          if (this._isReportToPlatform) {
            (_crd && Platform === void 0 ? (_reportPossibleCrUseOfPlatform({
              error: Error()
            }), Platform) : Platform).onNeedPrivacyAuthorization_WX("agree");
          }

          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).LOGIN_AGREE_PRIVATE, true);
          this.node.destroy();
        } //点击了不同意


        onClickNotSure() {
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).SYS_PLAY_EFFECT, (_crd && AppSound === void 0 ? (_reportPossibleCrUseOfAppSound({
            error: Error()
          }), AppSound) : AppSound).CommClick); // if (this._isReportToPlatform) {
          // 	Platform.onNeedPrivacyAuthorization_WX("disagree");
          // }

          this.node.destroy();
        }
        /** 加载用户协议 */


        onLoadUserAgree() {
          this._curMaxResNum = (_crd && GameRes === void 0 ? (_reportPossibleCrUseOfGameRes({
            error: Error()
          }), GameRes) : GameRes).Picture_UserAgree.length;
          this._currowType = 1;
          this.onLoadCallback(this._currowType);
        }
        /** 加载隐私政策 */


        onLoadPrivacyPolicy() {
          this._curMaxResNum = (_crd && GameRes === void 0 ? (_reportPossibleCrUseOfGameRes({
            error: Error()
          }), GameRes) : GameRes).Picture_UserPrivacyPolicy.length;
          this._currowType = 2;
          this.onLoadCallback(this._currowType);
        }
        /** 加载完成的回调 */


        onLoadCallback(type) {
          if (type === void 0) {
            type = 0;
          }

          if (type == 0) {
            return;
          }

          if (!this.node || this.node.isValid == false) {
            return;
          }

          if (type == 1 && this._userAgreeRes.size == this._curMaxResNum) {
            this.contentNode.removeAllChildren();
            this.nodeNoTips.active = false;

            for (var i = 0; i < this._curMaxResNum; i++) {
              var imageAssert = this._userAgreeRes.get(i);

              if (imageAssert) {
                var spriteFrame = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                  error: Error()
                }), Utils) : Utils).image_ImageAssetToSpriteFrame(imageAssert);

                if (spriteFrame) {
                  this.contentNode.addChild(this.creatorSpriteNode(spriteFrame));
                }
              }
            }
          } else if (type == 2 && this._priRes.size == this._curMaxResNum) {
            this.contentNode.removeAllChildren();
            this.nodeNoTips.active = false;

            for (var _i2 = 0; _i2 < this._curMaxResNum; _i2++) {
              var _imageAssert = this._priRes.get(_i2);

              if (_imageAssert) {
                var _spriteFrame = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                  error: Error()
                }), Utils) : Utils).image_ImageAssetToSpriteFrame(_imageAssert);

                if (_spriteFrame) {
                  this.contentNode.addChild(this.creatorSpriteNode(_spriteFrame));
                }
              }
            }
          }
        }

        creatorSpriteNode(spriteFrame) {
          var node = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).create_2DSprite(spriteFrame, "Sprite");
          return node;
        } //销毁


        onDestroy() {}

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "privateHelpNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "titleNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "contentNode", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "scrollowBarNode", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "menuUserAgree", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "menuPrivatePro", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "nodeTwoBtn", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "nodeOneBtn", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "nodeNoTips", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "nodeTab", [_dec11], {
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
//# sourceMappingURL=0fb5652bfcd828bc53cc92ec616ffed8a2ee66c8.js.map