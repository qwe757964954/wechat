import { AssetManager, Component, Enum, ImageAsset, Sprite, SpriteFrame, UITransform, _decorator } from 'cc';
import { Utils } from '../../Utils';
import { resLoader } from '../../loader/ResLoader';
import { decompressFrames, parseGIF } from './gif';
const { ccclass, property, menu } = _decorator;

/**
 * Name = GifRenderLoad
 * URL = db://assets/framework/gui/gif/GifRenderLoad.ts
 * Time = Thu Apr 07 2022 13:02:05 GMT+0800 (中国标准时间)
 * Author = xueya
 * Gif动图加载{支持本地和远端}
 */

/** gif支持加载的类型 */
enum GifRenderLoadModel {
    /** 本地路径 */
    LOCAL,
    /** 远端路径Url */
    REMOTE,
}

const GifArrayBufferList = {};

@ccclass('GifRenderLoad')
//方便编辑器识别的菜单项目
@menu('gui/sprite/GifRenderLoad')
export class GifRenderLoad extends Component {
    /** 加载模式 */
    @property({
        tooltip: "设置要加载的模式 LOCAL:本地 REMOTE:远端",
        type: Enum(GifRenderLoadModel),
        visible() {
            return true;
        }
    })
    modelType = GifRenderLoadModel.LOCAL;

    /*******************远端加载**************************/
    @property({
        tooltip: "远端图片地址Url",
        visible() {
            if (this.modelType != GifRenderLoadModel.REMOTE) {
                return false;
            }
            return true;
        }
    })
    remoteUrl: string = ""!;

    @property({
        tooltip: "是否提前做预加载",
        visible() {
            if (this.modelType != GifRenderLoadModel.REMOTE) {
                return false;
            }
            return true;
        }
    })
    preLoadUrl: boolean = true;

    /*******************本地加载**************************/
    @property({
        tooltip: "分包包名,不填则默认为'resources'",
        visible() {
            if (this.modelType != GifRenderLoadModel.LOCAL) {
                return false;
            }
            return true;
        }
    })
    bundleName: string = "resources"!;

    @property({
        tooltip: "相对包名的相对资源路径,不可为空,不带后缀",
        visible() {
            if (this.modelType != GifRenderLoadModel.LOCAL) {
                return false;
            }
            return true;
        }
    })
    resPath: string = ""!;

    /** 类名 */
    private _className: string = "GifRenderLoad";
    /** 当前用于显示的sprite */
    private _showSprite: Sprite = null;
    /** 真实加载的资源数据 */
    private _realLoadSprite = null;
    /** 本类是否加载完毕 */
    private _isLoad = false;
    /** ui界面原本是否有Sprite组件(非代码添加) */
    private _uiHaveSprite = true;
    /** 是否可以一启动就加载 */
    private _isCanOnloadRevire = false;

    private _mainCavas = null;
    private _tmpCavas = null;
    private _mainCtx = null;
    private _tmpCtx = null;
    //实例化
    constructor(name?: string) {
        super(name);
        this.checkPreLoad();
    };


    /** 检查预加载 */
    private checkPreLoad() {
        if (this._isCanOnloadRevire == true) {
            return;
        }
        this._isCanOnloadRevire = false;
        if (this.modelType == GifRenderLoadModel.LOCAL) {
            if (Utils.string_isEmpty(this.bundleName) == false && Utils.string_isEmpty(this.resPath) == false) {
                this._isCanOnloadRevire = true;
                this.setLocalLoad(this.bundleName, this.resPath);
            }
        } else if (this.modelType == GifRenderLoadModel.REMOTE) {
            if (Utils.string_isEmpty(this.remoteUrl) == false) {
                this._isCanOnloadRevire = true;
            }
        }
        if (this.modelType == GifRenderLoadModel.REMOTE && this.preLoadUrl == true) {
            this.setRemoteUrl(this.remoteUrl);
        }
    }

    /** 检查uiTransform和spritefram组件 */
    private checkSpriteComp(): Sprite {
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
            console.error(`${this._className} 初始化画布出错 `)
            return;
        }
        this._mainCtx = this._mainCavas.getContext('2d');
        this._tmpCtx = this._tmpCavas.getContext("2d");

        this._isLoad = true;
        this.updateView();
    }
    start() {

    }

    /** Local:本地Gif资源加载 */
    setLocalLoad(bundle: string, path: string) {
        if ((bundle == null || bundle == "") && (path == null || path == "")) {
            return;
        }
        if (Utils.string_isEmpty(bundle) || Utils.string_isEmpty(bundle)) {
            console.error(`${this._className} 本地资源加载失败，bundle:${bundle} path:${path}`);
            return;
        }
        this.modelType = GifRenderLoadModel.LOCAL;
        let self = this;
        this.bundleName = bundle;
        this.resPath = path;
        //资源地址不包含后缀
        let realPath = this.resPath.replace(/\.(?:gif|png|jpg|webp|jpeg)$/i, "");
        resLoader.loadBundle(this.bundleName, (err, bundle: AssetManager.Bundle) => {
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
            })
        })
    }

    /** REMOTE:设置Url */
    setRemoteUrl(url: string) {
        if (url == null || url == "") {
            return;
        }
        this.modelType = GifRenderLoadModel.REMOTE;
        let self = this;
        this.remoteUrl = url;
        if (String(url).includes("http://") || String(url).includes("https://")) {
            resLoader.loadRemote(url, (err, imageAsset) => {
                if (err) {
                    console.error(`${self._className} 加载远端资源出错，url:${url}`);
                    return;
                }
                if (!imageAsset) { //资源可能还在加载中
                    return;
                }
                self._realLoadSprite = imageAsset;
                self._getArrayBufferFromUrl(self.remoteUrl, imageAsset.nativeUrl)
                if (self._isLoad == true) {
                    self._isCanOnloadRevire = true;
                    self.updateView();
                }
            });
        } else {
            console.error(`${this._className}加载Url出错 url不正确 url=${url}`)
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
                this._getArrayBufferFromUrl(this.remoteUrl, this._realLoadSprite.nativeUrl)
                return;
            }
            this._showSprite = this.checkSpriteComp();
            if (this._uiHaveSprite == false) {//自己添加的 就改为自适应
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
                this._getArrayBufferFromUrl(this.resPath, this._realLoadSprite.nativeUrl)
                return;
            }

            this._showSprite = this.checkSpriteComp();
            if (this._uiHaveSprite == false) {//自己添加的 就改为和父节点一致
                this._showSprite.sizeMode = 0;
                this._showSprite.type = 0;
            }
            this._startDraw(GifArrayBufferList[this.resPath]);
        }
    }

    /** 创建一个画布 */
    private __createCanvas() {
        if (globalThis.tt && globalThis.tt.createCanvas) {
            return globalThis.tt.createCanvas()
        }
        if (globalThis.wx && globalThis.wx.createCanvas) {
            return globalThis.wx.createCanvas()
        }
        if (document && document.createElement) {
            return document.createElement("canvas");
        }
        return null
    }
    /**
     * 从远程资源获取arraybuffer数据
     * @param url 远程资源地址
     */
    private _getArrayBufferFromUrl(key, url: string) {
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
                let frames = []
                try {
                    frames = decompressFrames(parseGIF(xhr.response), true);
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
                }
                // console.log("ArrayBuffer结果：", GifArrayBufferList[key])
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
        xhr.ontimeout = (a) => {
            GifArrayBufferList[key] = null;
            console.error(`${self._className} getArrayBuffer超时`);
        }
    }

    /**
     * 开始绘制
     * @param oneCache GifArrayBufferList中的一个
     */
    private _startDraw(oneCache) {
        if (!oneCache) {
            return;
        }
        // 至此，所有准备数据有了，准备绘制
        let _needsDisposal = true;
        let _frameIndex = 0;
        let _frameWidth = 9999;
        let _frameHeight = 9999;
        let _frameData = null;
        this._mainCavas.width = oneCache.frames[0].dims.width;
        this._mainCavas.height = oneCache.frames[0].dims.height;
        // 检查引用信息
        if (oneCache.refs.indexOf(this.uuid) < 0) {
            oneCache.refs.push(this.uuid)
        }
        // 开始绘制
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
                _frameIndex = 0
            }
            if (frame.disposalType === 2) {
                _needsDisposal = true;
            }
            self._showSprite.spriteFrame = SpriteFrame.createWithImage(new ImageAsset(self._mainCavas));

            let diff = Date.now() - start;
            self.scheduleOnce(() => {
                drawFunc();
            }, Math.max(0, Math.floor(frame.delay - diff)) / 1000)
        }

        drawFunc();
    }
    /** 停止绘制 */
    public clear() {
        this.unscheduleAllCallbacks();
        this._showSprite = this.checkSpriteComp();
        this._showSprite.spriteFrame = null;
    }
}


