import { ClientInfo } from "../config/GameConfig";
import { StoreKey } from "../config/GameConstant";
import { Encrypt } from "../framework/crypto/Encrypto";
import { LocalStorage } from "../framework/LocalStorage";
import { HttpRequest } from "../framework/network/HttpRequest";
import { Utils } from "../framework/Utils";
import { BaseCache } from "../framework/vc/BaseCache";
import { User } from "./User";

export class PropsConf extends BaseCache {

	/** 用户类 */
	private __User: User = null;

	/** 物品图片相关配置 */
	private _PropsUrlConf = {};

	/** 基本道具配置 */
	private _BaseProps = {};

	/** 额外道具配置 */
	private _UnionProps = {};


	//实例化
	constructor(superClass) {
		super("PropsConf");
		this.__User = superClass;
	};

	/**
	 * 设置图片相关配置
	 * @param conf 
	 */
	setPropsBaseUrlConf(conf) {
		console.log("打印相关:", conf)
		this._PropsUrlConf = conf;
	}

	/**
	 * 获取图片相关配置
	 * @returns 
	 */
	getPropsBaseUrlConf() {
		return this._PropsUrlConf;
	}

	/**
	 * 下载配置并保存到本地
	 * @param url 
	 * @param key 
	 * @returns 
	 */
	downloadAndSavePropsConf(url: string, key: string, count = 0) {
		if (count >= 3) {
			console.warn("downloadAndSavePropsConf:" + url, "请求失败 3次都失败 不再请求")
			return;
		}
		console.log("测试加载图片配置:", key)
		let keyArr = [StoreKey.PROPS_BASE_CONF, StoreKey.PROPS_UNION_CONF]
		let flag = keyArr.indexOf(key)
		if (flag == -1 || Utils.string_isEmpty(key)) {
			return;
		}
		let realkey = key + "_" + ClientInfo.CurrowServer;
		let http = new HttpRequest();
		let self = this;

		let complete = function (response) {
			console.log("http get complete", key)
			if (response) {
				let jsonStr = LocalStorage.get(realkey, '');
				let oldTime = 0;

				if (!Utils.string_isEmpty(jsonStr)) {
					let oldConf = Encrypt.JsonDecode(jsonStr)
					oldTime = Utils.number_valueOf(oldConf.GoodsBase.timestamp, 0)
				}
				let obj = Encrypt.JsonDecode(response);
				if (Utils.table_isEmpty(obj)) {
					return;
				}
				let timestamp = Utils.number_valueOf(obj.GoodsBase.timestamp, 0);
				if (timestamp > 0 && timestamp > oldTime) {
					LocalStorage.set(realkey, response);
					if (key == StoreKey.PROPS_BASE_CONF) {
						self._BaseProps = obj;
					} else if (key == StoreKey.PROPS_UNION_CONF) {
						self._UnionProps = obj;
					}
				}
			} else {
				self.downloadAndSavePropsConf(url, key, count + 1);
			}
		}
		let error = function (response) {
			console.log("http get error", response, key);
			self.downloadAndSavePropsConf(url, key, count + 1);
		}
		http.get(url, complete, error);
	}

	/**
	 * 获取图片域名
	 * @returns 
	 */
	getIconPre() {
		let url = this._PropsUrlConf["icon_pre"];
		return url;
	}

	/**
	 * 获取最近拉取的时间戳
	 * @returns 
	 */
	getPropsConfTime(key: string) {
		console.log("测试加载图片配置时间")
		let keyArr = [StoreKey.PROPS_BASE_CONF, StoreKey.PROPS_UNION_CONF]
		let flag = keyArr.indexOf(key)
		let time = 0;
		if (flag != -1) {
			let jsonStr = LocalStorage.get(key + "_" + ClientInfo.CurrowServer, '')
			let conf = Encrypt.JsonDecode(jsonStr)
			if (!Utils.table_isEmpty(conf)) {
				time = Utils.number_valueOf(conf.GoodsBase.timestamp, 0)
			}
		}
		return time;
	}
	/** 本地缓存读取 */
	initDataByLocal() {
		this.getBaseProps();
		this.getUnionProps();
	}
	/**
	 * 获取基本道具配置
	 * @returns 
	 */
	getBaseProps() {
		let key = StoreKey.PROPS_BASE_CONF + "_" + ClientInfo.CurrowServer;
		if (Utils.table_isEmpty(this._BaseProps)) {
			let str = LocalStorage.get(key);
			let obj = Encrypt.JsonDecode(str);
			this._BaseProps = Utils.table_verify(obj);
		}
		if (Utils.table_isEmpty(this._BaseProps)) {
			this._BaseProps = {};
		}
		return this._BaseProps;
	}
	/**
	 * 获取额外道具配置
	 * @returns 
	 */
	getUnionProps() {
		let key = StoreKey.PROPS_UNION_CONF + "_" + ClientInfo.CurrowServer;
		if (Utils.table_isEmpty(this._UnionProps)) {
			let str = LocalStorage.get(key);
			let obj = Encrypt.JsonDecode(str);
			this._UnionProps = obj;
		}
		if (Utils.table_isEmpty(this._UnionProps)) {
			this._UnionProps = {};
		}
		return this._UnionProps;
	}



	/**
	 * 获取道具信息
	 * @param id 道具ID
	 * @returns 
	 */
	getPropsInfoById(id) {
		//https://dfqppic.266.com/dfqp/images/goods/dev/0/0.png
		id = Utils.number_valueOf(id);
		let baseProps = this.getBaseProps();
		if (Utils.table_isEmpty(baseProps['GoodsBase'])) {
			return {};
		}
		let baseConf = baseProps['GoodsBase']['list'];
		if (Utils.table_isEmpty(baseConf)) {
			return {};
		}
		if (Object.prototype.hasOwnProperty.call(baseConf, id)) {
			let info = baseConf[id];
			let iconpre = this.getIconPre();
			let pre = id % 10
			let url = iconpre + pre + '/' + id + '.png?v=' + info.timestamp
			info.url = url
			return info;
		}
		let unionProps = this.getUnionProps();
		if (Utils.table_isEmpty(unionProps['GoodsBase'])) {
			return {};
		}
		let unionConf = unionProps['GoodsBase']['list'];
		if (Utils.table_isEmpty(unionConf)) {
			return {};
		}
		if (Object.prototype.hasOwnProperty.call(unionConf, id)) {
			let info = baseConf[id];
			let iconpre = this.getIconPre();
			let pre = id % 10
			let url = iconpre + pre + '/' + id + '?v=' + info.timestamp
			info.url = url
			return info;
		}
		return {}
	}


}