import { Component, Enum, ImageAsset, Sprite, SpriteFrame, UITransform, _decorator } from 'cc';
import { resLoader } from '../../loader/ResLoader';
import { Utils } from '../../Utils';
const { ccclass, property, menu } = _decorator;

/**
 * Name = SpriteLoad
 * URL = db://assets/framework/gui/sprite/SpriteLoad.ts
 * Time = Thu Apr 07 2022 13:02:05 GMT+0800 (中国标准时间)
 * Author = xueya
 * 图片加载{支持本地和远端}
 */


/** spriteFrame支持加载的类型 */
enum SpriteLoadModel {
	/** 本地路径 */
	LOCAL,
	/** 远端路径Url */
	REMOTE,
}

@ccclass('SpriteLoad')
//方便编辑器识别的菜单项目
@menu('gui/sprite/SpriteLoad')
export default class SpriteLoad extends Component {
	/** 加载模式 */
	@property({
		tooltip: "设置要加载的模式 LOCAL:本地 REMOTE:远端",
		type: Enum(SpriteLoadModel),
		visible() {
			this.checkSpriteComp();
			return true;
		}
	})
	modelType = SpriteLoadModel.LOCAL;

	/*******************远端加载**************************/
	@property({
		tooltip: "远端图片地址Url",
		visible() {
			if (this.modelType != SpriteLoadModel.REMOTE) {
				return false;
			}
			return true;
		}
	})
	remoteUrl: string = ""!;

	@property({
		tooltip: "是否提前做预加载",
		visible() {
			if (this.modelType != SpriteLoadModel.REMOTE) {
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
			if (this.modelType != SpriteLoadModel.LOCAL) {
				return false;
			}
			return true;
		}
	})
	bundleName: string = "resources"!;

	@property({
		tooltip: "相对包名的相对资源路径,不可为空,不带后缀",
		visible() {
			if (this.modelType != SpriteLoadModel.LOCAL) {
				return false;
			}
			return true;
		}
	})
	resPath: string = ""!;

	private _className: string = "SpriteLoad";
	/** 真实加载的资源数据 */
	private _realLoadSprite: ImageAsset = null;
	/** 本类是否加载完毕 */
	private _isLoad = false;
	/** ui界面原本是否有Sprite组件(非代码添加) */
	private _uiHaveSprite = true;
	/** 是否可以一启动就加载 */
	private _isCanOnloadRevire = false;
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
		if (this.modelType == SpriteLoadModel.LOCAL) {
			if (Utils.string_isEmpty(this.bundleName) == false && Utils.string_isEmpty(this.resPath) == false) {
				this._isCanOnloadRevire = true;
				this.setLocalLoad(this.bundleName, this.resPath);
			}
		} else if (this.modelType == SpriteLoadModel.REMOTE) {
			if (Utils.string_isEmpty(this.remoteUrl) == false) {
				this._isCanOnloadRevire = true;
			}
		}
		if (this.modelType == SpriteLoadModel.REMOTE && this.preLoadUrl == true) {
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
			sprite.spriteFrame = Utils.image_CreateDefaultSpriteFrame(uiTransform.width, uiTransform.height);
			sprite.sizeMode = 0;
			sprite.type = 0;
			this._uiHaveSprite = false;
		} else {
			if (this._uiHaveSprite == true) {
				if (sprite.spriteFrame == null) {
					sprite.spriteFrame = Utils.image_CreateDefaultSpriteFrame(uiTransform.width, uiTransform.height);
				}
			}
		}
		return sprite;
	}
	onLoad() {
		this._isLoad = true;
		this.updateView();
	}
	start() {

	}

	/**
	 * Local:本地图片资源加载
	 * @param bundle 包名
	 * @param path 路径名
	 * @param errCallback 出错时的回调(仅当节点有效时)
	 * @returns 
	 */
	setLocalLoad(bundle: string, path: string, errCallback: Function = null) {
		if ((bundle == null || bundle == "") && (path == null || path == "")) {
			return;
		}
		if (Utils.string_isEmpty(bundle) || Utils.string_isEmpty(bundle)) {
			console.error(`${this._className} 本地资源加载失败，bundle:${bundle} path:${path}`);
			return;
		}
		this.modelType = SpriteLoadModel.LOCAL;
		let self = this;
		this.bundleName = bundle;
		this.resPath = path;
		resLoader.load(this.bundleName, this.resPath, ImageAsset, (err: Error | null, imageAsset) => {
			if (!self.node || self.node.isValid == false) {
				return;
			}
			if (err) {
				console.error(`${this._className} 加载资源出错，bundle:${bundle} path:${path}`);
				if (errCallback) {
					errCallback({ bundle: this.bundleName, path: this.resPath });
				}
				return;
			}
			if (!imageAsset) { //资源可能还在加载中
				if (errCallback) {
					errCallback({ bundle: this.bundleName, path: this.resPath });
				}
				return
			}
			self._realLoadSprite = imageAsset;
			if (self._isLoad == true) {
				self._isCanOnloadRevire = true;
				self.updateView();
			}
		})
	}
	/**
	 * REMOTE:设置Url
	 * @param url 要设置的url
	 * @param errCallback 出错时的回调(仅当节点有效时)
	 * @returns 
	 */
	setRemoteUrl(url: string, errCallback: Function = null) {
		if (url == null || url == "") {
			return;
		}
		this.modelType = SpriteLoadModel.REMOTE;
		let self = this;
		this.remoteUrl = url;
		if (String(url).includes("http://") || String(url).includes("https://")) {
			resLoader.loadRemote(url, { ext: `.jpg` }, (err, imageAsset) => {
				if (!self.node || self.node.isValid == false) {
					return;
				}
				if (err) {
					console.error(`${this._className} 加载资源出错，url:${url} `);
					if (errCallback) {
						errCallback(url);
					}
					return;
				}
				if (!imageAsset) { //资源可能还在加载中
					if (errCallback) {
						errCallback(url);
					}
					return;
				}
				self._realLoadSprite = imageAsset;
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
		if (this.modelType == SpriteLoadModel.REMOTE) {
			if (!this._realLoadSprite) {
				this.setRemoteUrl(this.remoteUrl);
				return;
			}
			let sprite = this.checkSpriteComp();
			let spriteFrame: SpriteFrame = Utils.image_ImageAssetToSpriteFrame(this._realLoadSprite);
			if (this._uiHaveSprite == false) {//自己添加的 就改为自适应
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
			let spriteFrame: SpriteFrame = Utils.image_ImageAssetToSpriteFrame(this._realLoadSprite);
			if (this._uiHaveSprite == false) {//自己添加的 就改为和父节点一致
				sprite.sizeMode = 0;
				sprite.type = 0;
			}
			sprite.spriteFrame = spriteFrame;
		}
	}
}
