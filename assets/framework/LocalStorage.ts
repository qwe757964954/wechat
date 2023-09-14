/**
 * Name = LocalStorage
 * URL = db://assets/framework/LocalStorage.ts
 * Time = Mon Apr 11 2022 21:14:48 GMT+0800 (中国标准时间)
 * Author = xueya
 * 本地存储管理
 */

import { sys } from "cc";
import { PREVIEW } from "cc/env";
import { Md5 } from "./crypto/Md5";


export namespace LocalStorage {
	let _key: string | null = null;
	let _iv: string | null = null;
	let _id: number | string = -1;

	/**
	 * 初始化密钥
	 * @param key aes加密的key 
	 * @param iv  aes加密的iv
	 */
	export function init(key: string, iv: string) {
		_key = Md5(key);
		_iv = Md5(iv);
	}

	/**
	 * 设置用户标识
	 * @param id 
	 */
	export function setUser(edx: any) {
		_id = edx;
	}

	/**
	 * 存储
	 * @param key 存储key
	 * @param value 存储值
	 * @returns 
	 */
	export function set(key: string, value: any) {
		let newKey = `${_id}_${key}`;

		if (null == newKey) {
			console.error(`[${key}]存储的key不能为空`);
			return;
		}
		if (!PREVIEW) {
			newKey = Md5(newKey);
		}
		if (null == value) {
			console.warn(`[${key}]存储的值为空，则直接移除该存储`);
			remove(key);
			return;
		}
		if (typeof value === 'function') {
			console.error(`[${key}]储存的值不能为方法`);
			return;
		}
		if (typeof value === 'object') {
			try {
				value = JSON.stringify(value);
			}
			catch (e) {
				console.error(`[${key}]解析失败，str = ${value}`);
				return;
			}
		}
		else if (typeof value === 'number') {
			value = value + "";
		}
		// if (!PREVIEW && null != _key && null != _iv) {
		// 	try {
		// 		value = Encrypt.aesEncrypt(value, _key, _iv);
		// 	}
		// 	catch (e) {
		// 		value = null;
		// 	}
		// }
		// console.log("key===>set：",key, newKey, value)
		sys.localStorage.setItem(newKey, value);
	}

	/**
	 * 获取
	 * @param key 获取的key
	 * @param defaultValue 获取的默认值
	 * @returns 
	 */
	export function get(key: string, defaultValue?: any) {
		if (null == key) {
			console.error(`[${key}]存储的key不能为空`);
			return;
		}

		let newKey = `${_id}_${key}`;
		if (!PREVIEW) {
			newKey = Md5(newKey);
		}
		let str: string | null = sys.localStorage.getItem(newKey);
		// if (null != str && '' !== str && !PREVIEW && null != _key && null != _iv) {
		// 	try {
		// 		console.log("获取本地之前：", key, _iv, str)
		// 		str = Encrypt.aesDecrypt(str, _key, _iv); //str可为"null" "undefined"  "true"
		// 		console.log("获取本地 解密后：", key, _iv, str)
		// 	}
		// 	catch (e) {
		// 		str = null;
		// 	}

		// }
		// console.log("key===>get：", key,newKey, str)
		/** 注：可能为空字符串 */
		if (str == "null" || str == "undefined") {
			str = null;
		}
		if (null == defaultValue || typeof defaultValue === 'string') {
			return str;
		}
		if (null === str) {
			return defaultValue;
		}
		if (typeof defaultValue === 'number') {
			return Number(str) || 0;
		}
		if (typeof defaultValue === 'boolean') {
			return "true" == String(str); // 不要使用Boolean("false");
		}
		if (typeof defaultValue === 'object') {
			try {
				return JSON.parse(str);
			}
			catch (e) {
				console.error(`[${key}]解析数据失败,str=` + str);
				return defaultValue;
			}

		}
		return str;
	}

	/**
	 * 移除某个值
	 * @param key 需要移除的key 
	 * @returns 
	 */
	export function remove(key: string) {
		if (null == key) {
			console.error(`[${key}]存储的key不能为空`);
			return;
		}

		key = `${_id}_${key}`;
		if (!PREVIEW) {
			key = Md5(key);
		}
		sys.localStorage.removeItem(key);
	}

	/**
	 * 清空整个本地存储
	 */
	export function clear() {
		sys.localStorage.clear();
	}
}
//设置通用密钥
LocalStorage.init("Creator", "3.62")
//设置用户标识
LocalStorage.setUser("FXJ")