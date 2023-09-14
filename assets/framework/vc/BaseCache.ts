/**
 * Name = BaseCache
 * URL = db://assets/framework/vc/BaseCache.ts
 * Time = Mon May 09 2022 14:31:39 GMT+0800 (中国标准时间)
 * Author = xueya
 * 缓存数据的基类
 */

import { Logger } from "../log/Logger";
import { Utils } from "../Utils";


export class BaseCache {

	_className: string = "BaseCache";
	//存储的数据
	_data: {};
	//实例化
	constructor(name?: string) {
		this._className = name || "BaseCache"
		Logger.logCache(5, `Cache: ${this._className}初始化...`)
		this._data = {}
	};
	/** 设置数据 */
	setData(key: any = null, value: any = null) {
		if (key) {
			this._data[key] = value
		}
		return this._data[key]
	}
	/** 获取数据 */
	getData(key: any = null) {
		if (key && this._data[key]) {
			return this._data[key]
		}
		return null
	}
	//合并
	mergeArray(keyArray, array) {
		if (Utils.isNull(keyArray) || Utils.isNull(array)) {
			return null
		}
		let oldKeyArray = {}
		let newArray = {}
		for (let index = 0; index < keyArray.length; index++) {
			oldKeyArray[keyArray[index]] = true
			newArray[keyArray[index]] = null
		}
		array = Utils.table_verify(array)
		for (let key in array) {
			if (Object.prototype.hasOwnProperty.call(array, key)) {
				let value = array[key];
				if (oldKeyArray[key]) {
					newArray[key] = value
				}
			}
		}
		return newArray
	}
	/**
	 * 合并（有默认值的Array<key-value>）
	 * @param keyValueArray 
	 * @param array 
	 * @returns 
	 */
	mergeArrayDefault(keyValueArray, array) {
		if (Utils.isNull(keyValueArray) || Utils.isNull(array)) {
			return null
		}
		let defaultValueArray = {}
		let defaultKeyArray = {}
		let newArray = {}
		for (let key in keyValueArray) {
			if (Object.prototype.hasOwnProperty.call(keyValueArray, key)) {
				let value = keyValueArray[key];
				defaultValueArray[key] = value
				defaultKeyArray[key] = true
			}
		}
		array = Utils.table_verify(array)

		for (let key in keyValueArray) {
			if (Object.prototype.hasOwnProperty.call(keyValueArray, key)) {
				let value = array[key];
				if (defaultKeyArray[key]) {
					if (value == null || value == undefined) {
						value = defaultValueArray[key]
					} else {
						if (typeof (value) == "object") {
							if ((JSON.stringify(value) != "[]" && JSON.stringify(value) != "{}")) {
								if ((JSON.stringify(keyValueArray[key]) == "[]" || JSON.stringify(keyValueArray[key]) == "{}")) {
									value = value;
								} else {
									value = this.mergeArrayDefault(defaultValueArray[key], value)
								}
							}
						}
					}
					newArray[key] = value
				}
			}
		}

		return newArray

	}


	/** 清理缓存数据 */
	clear() {
		Logger.logCache(5, `Cache:${this._className}清理数据...`)
	}

	//当前类日志输出
	protected print = function (...args: any[]) {
		Logger.logCache(5, `【${this._className}】`, ...args)
	}
}

