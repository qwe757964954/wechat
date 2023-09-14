System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, Enum, ImageAsset, Sprite, SpriteFrame, UITransform, _decorator, resLoader, Utils, decompressFrames, parseGIF, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _crd, ccclass, property, menu, GifRenderLoadModel, GifArrayBufferList, GifRenderLoad;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfresLoader(extras) {
    _reporterNs.report("resLoader", "../../loader/ResLoader", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUtils(extras) {
    _reporterNs.report("Utils", "../../Utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfdecompressFrames(extras) {
    _reporterNs.report("decompressFrames", "./gif", _context.meta, extras);
  }

  function _reportPossibleCrUseOfparseGIF(extras) {
    _reporterNs.report("parseGIF", "./gif", _context.meta, extras);
  }

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
      SpriteFrame = _cc.SpriteFrame;
      UITransform = _cc.UITransform;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      resLoader = _unresolved_2.resLoader;
    }, function (_unresolved_3) {
      Utils = _unresolved_3.Utils;
    }, function (_unresolved_4) {
      decompressFrames = _unresolved_4.decompressFrames;
      parseGIF = _unresolved_4.parseGIF;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e4d47dUGtREWJV9ywGpO6Am", "GifRenderLoad", undefined);

      __checkObsolete__(['AssetManager', 'Component', 'Enum', 'ImageAsset', 'Sprite', 'SpriteFrame', 'UITransform', '_decorator']);

      ({
        ccclass,
        property,
        menu
      } = _decorator);
      /**
       * Name = GifRenderLoad
       * URL = db://assets/framework/gui/gif/GifRenderLoad.ts
       * Time = Thu Apr 07 2022 13:02:05 GMT+0800 (中国标准时间)
       * Author = xueya
       * Gif动图加载{支持本地和远端}
       */

      /** gif支持加载的类型 */

      (function (GifRenderLoadModel) {
        GifRenderLoadModel[GifRenderLoadModel["LOCAL"] = 0] = "LOCAL";
        GifRenderLoadModel[GifRenderLoadModel["REMOTE"] = 1] = "REMOTE";
      })(GifRenderLoadModel || (GifRenderLoadModel = {}));

      GifArrayBufferList = {};

      _export("GifRenderLoad", GifRenderLoad = (_dec = ccclass('GifRenderLoad'), _dec2 = menu('gui/sprite/GifRenderLoad'), _dec3 = property({
        tooltip: "设置要加载的模式 LOCAL:本地 REMOTE:远端",
        type: Enum(GifRenderLoadModel),

        visible() {
          return true;
        }

      }), _dec4 = property({
        tooltip: "远端图片地址Url",

        visible() {
          if (this.modelType != GifRenderLoadModel.REMOTE) {
            return false;
          }

          return true;
        }

      }), _dec5 = property({
        tooltip: "是否提前做预加载",

        visible() {
          if (this.modelType != GifRenderLoadModel.REMOTE) {
            return false;
          }

          return true;
        }

      }), _dec6 = property({
        tooltip: "分包包名,不填则默认为'resources'",

        visible() {
          if (this.modelType != GifRenderLoadModel.LOCAL) {
            return false;
          }

          return true;
        }

      }), _dec7 = property({
        tooltip: "相对包名的相对资源路径,不可为空,不带后缀",

        visible() {
          if (this.modelType != GifRenderLoadModel.LOCAL) {
            return false;
          }

          return true;
        }

      }), _dec(_class = _dec2(_class = (_class2 = class GifRenderLoad extends Component {
        /** 加载模式 */

        /*******************远端加载**************************/

        /*******************本地加载**************************/

        /** 类名 */

        /** 当前用于显示的sprite */

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

          this._className = "GifRenderLoad";
          this._showSprite = null;
          this._realLoadSprite = null;
          this._isLoad = false;
          this._uiHaveSprite = true;
          this._isCanOnloadRevire = false;
          this._mainCavas = null;
          this._tmpCavas = null;
          this._mainCtx = null;
          this._tmpCtx = null;
          this.checkPreLoad();
        }

        /** 检查预加载 */
        checkPreLoad() {
          if (this._isCanOnloadRevire == true) {
            return;
          }

          this._isCanOnloadRevire = false;

          if (this.modelType == GifRenderLoadModel.LOCAL) {
            if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).string_isEmpty(this.bundleName) == false && (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).string_isEmpty(this.resPath) == false) {
              this._isCanOnloadRevire = true;
              this.setLocalLoad(this.bundleName, this.resPath);
            }
          } else if (this.modelType == GifRenderLoadModel.REMOTE) {
            if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).string_isEmpty(this.remoteUrl) == false) {
              this._isCanOnloadRevire = true;
            }
          }

          if (this.modelType == GifRenderLoadModel.REMOTE && this.preLoadUrl == true) {
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
            sprite.spriteFrame = null;
            sprite.sizeMode = 0;
            sprite.type = 0;
            this._uiHaveSprite = false;
          } else {
            if (this._uiHaveSprite == true) {
              if (sprite.spriteFrame == null) {
                sprite.spriteFrame = null;
              }
            }
          }

          return sprite;
        }

        onLoad() {
          this.checkPreLoad();
          this._mainCavas = this.__createCanvas();
          this._tmpCavas = this.__createCanvas();

          if (!this._mainCavas) {
            console.error(`${this._className} 初始化画布出错 `);
            return;
          }

          this._mainCtx = this._mainCavas.getContext('2d');
          this._tmpCtx = this._tmpCavas.getContext("2d");
          this._isLoad = true;
          this.updateView();
        }

        start() {}
        /** Local:本地Gif资源加载 */


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

          this.modelType = GifRenderLoadModel.LOCAL;
          let self = this;
          this.bundleName = bundle;
          this.resPath = path; //资源地址不包含后缀

          let realPath = this.resPath.replace(/\.(?:gif|png|jpg|webp|jpeg)$/i, "");
          (_crd && resLoader === void 0 ? (_reportPossibleCrUseOfresLoader({
            error: Error()
          }), resLoader) : resLoader).loadBundle(this.bundleName, (err, bundle) => {
            if (err) {
              console.log(err);
              console.error(`${self._className} 加载本地包出错，bundle:${bundle}`);
              return;
            }

            bundle.load(realPath, (err2, data) => {
              if (err2) {
                console.log(err2);
                console.error(`${self._className} 加载本地文件出错，bundle:${bundle} path:${path},realPath`);
                return;
              }

              self._realLoadSprite = data;

              self._getArrayBufferFromUrl(self.resPath, data.nativeUrl);

              if (self._isLoad == true) {
                self._isCanOnloadRevire = true;
                self.updateView();
              }
            });
          });
        }
        /** REMOTE:设置Url */


        setRemoteUrl(url) {
          if (url == null || url == "") {
            return;
          }

          this.modelType = GifRenderLoadModel.REMOTE;
          let self = this;
          this.remoteUrl = url;

          if (String(url).includes("http://") || String(url).includes("https://")) {
            (_crd && resLoader === void 0 ? (_reportPossibleCrUseOfresLoader({
              error: Error()
            }), resLoader) : resLoader).loadRemote(url, (err, imageAsset) => {
              if (err) {
                console.error(`${self._className} 加载远端资源出错，url:${url}`);
                return;
              }

              if (!imageAsset) {
                //资源可能还在加载中
                return;
              }

              self._realLoadSprite = imageAsset;

              self._getArrayBufferFromUrl(self.remoteUrl, imageAsset.nativeUrl);

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

          this.clear();

          if (this.modelType == GifRenderLoadModel.REMOTE) {
            if (!this._realLoadSprite) {
              this.setRemoteUrl(this.remoteUrl);
              return;
            }

            if (!GifArrayBufferList[this.remoteUrl]) {
              this._getArrayBufferFromUrl(this.remoteUrl, this._realLoadSprite.nativeUrl);

              return;
            }

            this._showSprite = this.checkSpriteComp();

            if (this._uiHaveSprite == false) {
              //自己添加的 就改为自适应
              this._showSprite.sizeMode = 2;
              this._showSprite.type = 0;
            }

            this._startDraw(GifArrayBufferList[this.remoteUrl]);
          } else {
            if (!this._realLoadSprite) {
              this.setLocalLoad(this.bundleName, this.resPath);
              return;
            }

            if (!GifArrayBufferList[this.resPath]) {
              this._getArrayBufferFromUrl(this.resPath, this._realLoadSprite.nativeUrl);

              return;
            }

            this._showSprite = this.checkSpriteComp();

            if (this._uiHaveSprite == false) {
              //自己添加的 就改为和父节点一致
              this._showSprite.sizeMode = 0;
              this._showSprite.type = 0;
            }

            this._startDraw(GifArrayBufferList[this.resPath]);
          }
        }
        /** 创建一个画布 */


        __createCanvas() {
          if (globalThis.tt && globalThis.tt.createCanvas) {
            return globalThis.tt.createCanvas();
          }

          if (globalThis.wx && globalThis.wx.createCanvas) {
            return globalThis.wx.createCanvas();
          }

          if (document && document.createElement) {
            return document.createElement("canvas");
          }

          return null;
        }
        /**
         * 从远程资源获取arraybuffer数据
         * @param url 远程资源地址
         */


        _getArrayBufferFromUrl(key, url) {
          if (GifArrayBufferList[key]) {
            return;
          }

          let self = this;
          const xhr = new XMLHttpRequest();
          xhr.open("GET", url, true);
          xhr.responseType = 'arraybuffer';

          xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
              if (!xhr.response) {
                console.warn(`${self._className} getArrayBuffer读取数据为空`);
                return;
              }

              if (GifArrayBufferList[key]) {
                // console.warn(`${self._className} getArrayBuffer数据重复`);
                return;
              }

              let frames = [];

              try {
                frames = (_crd && decompressFrames === void 0 ? (_reportPossibleCrUseOfdecompressFrames({
                  error: Error()
                }), decompressFrames) : decompressFrames)((_crd && parseGIF === void 0 ? (_reportPossibleCrUseOfparseGIF({
                  error: Error()
                }), parseGIF) : parseGIF)(xhr.response), true);
              } catch (error) {
                console.error(`${self._className} getArrayBuffer: read gif frame error`, error);
                return;
              }

              if (frames.length === 0) {
                console.warn(`${self._className} getArrayBuffer读取frames长度为空`);
                return;
              }

              GifArrayBufferList[key] = {
                url: url,
                refs: [],
                frames: frames
              }; // console.log("ArrayBuffer结果：", GifArrayBufferList[key])

              xhr.abort();

              if (self._isLoad == true) {
                self.updateView();
              }
            }
          };

          xhr.onerror = function (err) {
            console.error(`${self._className} getArrayBuffer错误`);
          };

          xhr.send(null);
          xhr.timeout = 10 * 10000;

          xhr.ontimeout = a => {
            GifArrayBufferList[key] = null;
            console.error(`${self._className} getArrayBuffer超时`);
          };
        }
        /**
         * 开始绘制
         * @param oneCache GifArrayBufferList中的一个
         */


        _startDraw(oneCache) {
          if (!oneCache) {
            return;
          } // 至此，所有准备数据有了，准备绘制


          let _needsDisposal = true;
          let _frameIndex = 0;
          let _frameWidth = 9999;
          let _frameHeight = 9999;
          let _frameData = null;
          this._mainCavas.width = oneCache.frames[0].dims.width;
          this._mainCavas.height = oneCache.frames[0].dims.height; // 检查引用信息

          if (oneCache.refs.indexOf(this.uuid) < 0) {
            oneCache.refs.push(this.uuid);
          } // 开始绘制


          let self = this;
          let drawFunc = null;

          drawFunc = function () {
            if (!self._showSprite || !self.node || self.node.isValid == false) {
              return;
            }

            let cache = oneCache;
            let frame = cache.frames[_frameIndex];
            let start = Date.now();

            if (_needsDisposal == true) {
              self._mainCtx.clearRect(0, 0, _frameWidth, _frameHeight);

              _needsDisposal = false;
            }

            let dims = frame.dims;

            if (!_frameData || dims.width !== _frameData.width || dims.height !== _frameData.height) {
              self._tmpCavas.width = dims.width;
              self._tmpCavas.height = dims.height;
              _frameData = self._mainCtx.createImageData(dims.width, dims.height);
            }

            _frameData.data.set(frame.patch);

            self._tmpCtx.putImageData(_frameData, 0, 0);

            self._mainCtx.drawImage(self._tmpCavas, dims.left, dims.top);

            _frameIndex++;

            if (_frameIndex >= cache.frames.length) {
              _frameIndex = 0;
            }

            if (frame.disposalType === 2) {
              _needsDisposal = true;
            }

            self._showSprite.spriteFrame = SpriteFrame.createWithImage(new ImageAsset(self._mainCavas));
            let diff = Date.now() - start;
            self.scheduleOnce(() => {
              drawFunc();
            }, Math.max(0, Math.floor(frame.delay - diff)) / 1000);
          };

          drawFunc();
        }
        /** 停止绘制 */


        clear() {
          this.unscheduleAllCallbacks();
          this._showSprite = this.checkSpriteComp();
          this._showSprite.spriteFrame = null;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "modelType", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return GifRenderLoadModel.LOCAL;
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
//# sourceMappingURL=3e88e255304086b52607d0a4ab1d735a9f430e6c.js.map