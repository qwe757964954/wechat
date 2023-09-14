System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, Enum, ImageAsset, Sprite, UITransform, _decorator, resLoader, Utils, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _crd, ccclass, property, menu, SpriteLoadModel, SpriteLoad;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfresLoader(extras) {
    _reporterNs.report("resLoader", "../../loader/ResLoader", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUtils(extras) {
    _reporterNs.report("Utils", "../../Utils", _context.meta, extras);
  }

  _export("SpriteLoadModel", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Component = _cc.Component;
      Enum = _cc.Enum;
      ImageAsset = _cc.ImageAsset;
      Sprite = _cc.Sprite;
      UITransform = _cc.UITransform;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      resLoader = _unresolved_2.resLoader;
    }, function (_unresolved_3) {
      Utils = _unresolved_3.Utils;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "99bdeuuXVxMiLPD/qMLrRdV", "SpriteLoad", undefined);

      __checkObsolete__(['Component', 'Enum', 'ImageAsset', 'Sprite', 'SpriteFrame', 'UITransform', '_decorator']);

      ({
        ccclass,
        property,
        menu
      } = _decorator);
      /**
       * Name = SpriteLoad
       * URL = db://assets/framework/gui/sprite/SpriteLoad.ts
       * Time = Thu Apr 07 2022 13:02:05 GMT+0800 (中国标准时间)
       * Author = xueya
       * 图片加载{支持本地和远端}
       */

      /** spriteFrame支持加载的类型 */

      (function (SpriteLoadModel) {
        SpriteLoadModel[SpriteLoadModel["LOCAL"] = 0] = "LOCAL";
        SpriteLoadModel[SpriteLoadModel["REMOTE"] = 1] = "REMOTE";
      })(SpriteLoadModel || _export("SpriteLoadModel", SpriteLoadModel = {}));

      _export("default", SpriteLoad = (_dec = ccclass('SpriteLoad'), _dec2 = menu('gui/sprite/SpriteLoad'), _dec3 = property({
        tooltip: "设置要加载的模式 LOCAL:本地 REMOTE:远端",
        type: Enum(SpriteLoadModel),

        visible() {
          this.checkSpriteComp();
          return true;
        }

      }), _dec4 = property({
        tooltip: "远端图片地址Url",

        visible() {
          if (this.modelType != SpriteLoadModel.REMOTE) {
            return false;
          }

          return true;
        }

      }), _dec5 = property({
        tooltip: "是否提前做预加载",

        visible() {
          if (this.modelType != SpriteLoadModel.REMOTE) {
            return false;
          }

          return true;
        }

      }), _dec6 = property({
        tooltip: "分包包名,不填则默认为'resources'",

        visible() {
          if (this.modelType != SpriteLoadModel.LOCAL) {
            return false;
          }

          return true;
        }

      }), _dec7 = property({
        tooltip: "相对包名的相对资源路径,不可为空,不带后缀",

        visible() {
          if (this.modelType != SpriteLoadModel.LOCAL) {
            return false;
          }

          return true;
        }

      }), _dec(_class = _dec2(_class = (_class2 = class SpriteLoad extends Component {
        /** 加载模式 */

        /*******************远端加载**************************/

        /*******************本地加载**************************/

        /** 真实加载的资源数据 */

        /** 本类是否加载完毕 */

        /** ui界面原本是否有Sprite组件(非代码添加) */

        /** 是否可以一启动就加载 */
        //实例化
        constructor(name) {
          super(name);

          _initializerDefineProperty(this, "modelType", _descriptor, this);

          _initializerDefineProperty(this, "remoteUrl", _descriptor2, this);

          _initializerDefineProperty(this, "preLoadUrl", _descriptor3, this);

          _initializerDefineProperty(this, "bundleName", _descriptor4, this);

          _initializerDefineProperty(this, "resPath", _descriptor5, this);

          this._className = "SpriteLoad";
          this._realLoadSprite = null;
          this._isLoad = false;
          this._uiHaveSprite = true;
          this._isCanOnloadRevire = false;
          this.checkPreLoad();
        }

        /** 检查预加载 */
        checkPreLoad() {
          if (this._isCanOnloadRevire == true) {
            return;
          }

          this._isCanOnloadRevire = false;

          if (this.modelType == SpriteLoadModel.LOCAL) {
            if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).string_isEmpty(this.bundleName) == false && (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).string_isEmpty(this.resPath) == false) {
              this._isCanOnloadRevire = true;
              this.setLocalLoad(this.bundleName, this.resPath);
            }
          } else if (this.modelType == SpriteLoadModel.REMOTE) {
            if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).string_isEmpty(this.remoteUrl) == false) {
              this._isCanOnloadRevire = true;
            }
          }

          if (this.modelType == SpriteLoadModel.REMOTE && this.preLoadUrl == true) {
            this.setRemoteUrl(this.remoteUrl);
          }
        }
        /** 检查uiTransform和spritefram组件 */


        checkSpriteComp() {
          let uiTransform = this.node.getComponent(UITransform);

          if (!uiTransform) {
            uiTransform = this.node.addComponent(UITransform);
            uiTransform.width = 100;
            uiTransform.height = 100;
          }

          let sprite = this.node.getComponent(Sprite);

          if (!sprite) {
            sprite = this.node.addComponent(Sprite);
            sprite.spriteFrame = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).image_CreateDefaultSpriteFrame(uiTransform.width, uiTransform.height);
            sprite.sizeMode = 0;
            sprite.type = 0;
            this._uiHaveSprite = false;
          } else {
            if (this._uiHaveSprite == true) {
              if (sprite.spriteFrame == null) {
                sprite.spriteFrame = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                  error: Error()
                }), Utils) : Utils).image_CreateDefaultSpriteFrame(uiTransform.width, uiTransform.height);
              }
            }
          }

          return sprite;
        }

        onLoad() {
          this._isLoad = true;
          this.updateView();
        }

        start() {}
        /** Local:本地图片资源加载 */


        setLocalLoad(bundle, path) {
          if ((bundle == null || bundle == "") && (path == null || path == "")) {
            return;
          }

          if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).string_isEmpty(bundle) || (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).string_isEmpty(bundle)) {
            console.error(`${this._className} 本地资源加载失败，bundle:${bundle} path:${path}`);
            return;
          }

          let self = this;
          this.bundleName = bundle;
          this.resPath = path;
          (_crd && resLoader === void 0 ? (_reportPossibleCrUseOfresLoader({
            error: Error()
          }), resLoader) : resLoader).load(this.bundleName, this.resPath, ImageAsset, (err, imageAsset) => {
            if (err) {
              console.error(`${this._className} 加载资源出错，bundle:${bundle} path:${path}`);
              return;
            }

            if (!self.node || self.node.isValid == false) {
              return;
            }

            if (!imageAsset) {
              //资源可能还在加载中
              return;
            }

            self._realLoadSprite = imageAsset;

            if (self._isLoad == true) {
              self._isCanOnloadRevire = true;
              self.updateView();
            }
          });
        }
        /** REMOTE:设置Url */


        setRemoteUrl(url) {
          if (url == null || url == "") {
            return;
          }

          let self = this;
          this.remoteUrl = url;

          if (String(url).includes("http://") || String(url).includes("https://")) {
            (_crd && resLoader === void 0 ? (_reportPossibleCrUseOfresLoader({
              error: Error()
            }), resLoader) : resLoader).loadRemote(url, {
              ext: `.jpg`
            }, (err, imageAsset) => {
              if (!imageAsset) {
                //资源可能还在加载中
                return;
              }

              self._realLoadSprite = imageAsset;

              if (self._isLoad == true) {
                self._isCanOnloadRevire = true;
                self.updateView();
              }
            });
          } else {
            console.error(`${this._className}加载Url出错 url不正确 url=${url}`);
          }
        }
        /** 更新界面 */


        updateView() {
          if (this._isLoad == false || this._isCanOnloadRevire != true) {
            return;
          }

          if (this.modelType == SpriteLoadModel.REMOTE) {
            if (!this._realLoadSprite) {
              this.setRemoteUrl(this.remoteUrl);
              return;
            }

            let sprite = this.checkSpriteComp();
            let spriteFrame = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).image_ImageAssetToSpriteFrame(this._realLoadSprite);

            if (this._uiHaveSprite == false) {
              //自己添加的 就改为自适应
              sprite.sizeMode = 2;
              sprite.type = 0;
            }

            sprite.spriteFrame = spriteFrame;
          } else {
            if (!this._realLoadSprite) {
              this.setLocalLoad(this.bundleName, this.resPath);
              return;
            }

            let sprite = this.checkSpriteComp();
            let spriteFrame = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).image_ImageAssetToSpriteFrame(this._realLoadSprite);

            if (this._uiHaveSprite == false) {
              //自己添加的 就改为和父节点一致
              sprite.sizeMode = 0;
              sprite.type = 0;
            }

            sprite.spriteFrame = spriteFrame;
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "modelType", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return SpriteLoadModel.LOCAL;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "remoteUrl", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return "";
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "preLoadUrl", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return true;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "bundleName", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return "resources";
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "resPath", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return "";
        }
      })), _class2)) || _class) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d2d8288faede2eb86fb747b4c1bfba5f30002fd7.js.map