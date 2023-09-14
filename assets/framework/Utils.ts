import { Color, error, ImageAsset, Layers, Node, ResolutionPolicy, screen, Sprite, SpriteFrame, sys, Texture2D, UITransform, Vec2, Vec3, view } from "cc";
import { GameConfig } from "../config/GameConfig";
import { GameTxt } from "../config/GameTxt";
import { Logger } from "./log/Logger";

/**
 * Name = Utils
 * URL = db://assets/framework/Utils.ts
 * Time = Fri Apr 08 2022 14:34:14 GMT+0800 (中国标准时间)
 * Author = xueya
 *
 */

//货币单位
const UNIT_TYPE = {
	NONE: 0,
	K: 1,
	M: 2,
	B: 3,
	T: 4,
}



export namespace Utils {
	/** 克隆对象 */
	export function clone(data) {
		if (data == null) {
			return null;
		}
		if (typeof data === 'symbol') {           //Symbol 暂未处理
			console.log("暂未处理symbol", data);
			return data;
		} else if (typeof data != 'object') {      //基本类型
			return data;
		} else if (data instanceof Array) {      //Array
			let temp = [];
			data.forEach((item, key) => {
				if (item == null || item == undefined) {
					temp[key] = null;
				} else {
					temp[key] = clone(item);
				}
			})
			return temp;
		} else if (data instanceof Object) {   //Object
			let res = {};
			for (let key in data) {
				if (data[key] == null || data[key] == undefined) {
					res[key] = null;
				} else {
					res[key] = clone(data[key]);
				}
			}
			return res;
		} else {                                //系统对象、自定义对象
			if (data.constructor) {
				return new data.constructor(data);
			} else {
				console.log("错误", typeof data, data)
				return null
			}
		}
	}


	/** 日志输出 替换console.table */
	export function dump(...args: any[]) {
		if (args.length < 0) {
			return;
		}
		let backLog = Logger.realLog;
		let backContent = backLog;
		let color = "color:#ee7700;";
		let deLog = stack(3) + stack(4);
		backLog.call(null, "%c%s%s:", color, Logger.getDateString(), deLog);

		if (sys.platform == sys.Platform.DESKTOP_BROWSER) {
			backContent = Logger.realTable;
		}
		for (let i = 0; i < args.length; i++) {
			let type = args[i] ? typeof (args[i]) : null;
			if (args[i] && typeof (args[i]) == "object") {
				backContent.call(null, args[i]);
			} else {
				backContent.call(null, args[i]);
			}
		}
	}
	/** 堆栈 */
	export function stack(index: number): string {
		let e = new Error();
		let lines = e.stack!.split("\n");
		let result: Array<any> = [];
		lines.forEach((line) => {
			line = line.substring(7);
			let lineBreak = line.split(" ");
			if (lineBreak.length < 2) {
				result.push(lineBreak[0]);
			}
			else {
				result.push({ [lineBreak[0]]: lineBreak[1] });
			}
		});

		let list: string[] = [];
		let splitList: Array<string> = [];
		if (index < result.length - 1) {
			let value: string;
			for (let a in result[index]) {
				let splitList = a.split(".");
				if (splitList.length == 2) {
					list = splitList.concat();
				}
				else {
					value = result[index][a];
					let start = value!.lastIndexOf("/");
					let end = value!.lastIndexOf(".");
					if (start > -1 && end > -1) {
						let r = value!.substring(start + 1, end);
						list.push(r);
					}
					else {
						list.push(value);
					}
				}
			}
		}
		if (list.length == 1) {
			return "[" + list[0] + ".ts]";
		}
		else if (list.length == 2) {
			return "[" + list[0] + ".ts->" + list[1] + "]";
		}
		return "";
	}


	/**针对this指向性问题 */
	export function handler(obj: Object, func: Function) {
		return (...args: any[]) => {
			return func.call(obj, ...args)
		}
	}
	/** 判断空 */
	export function isNull(param): boolean {
		if (typeof (param) == "number" && isNaN(param) == false) {
			return false;
		}
		if (param != null && param != undefined) {
			return false
		}
		return true
	}
	/** 判断都不为空 */
	export function isNotNull(...args: any[]): boolean {
		let res = true;
		for (let i = 0; i < args.length; i++) {
			if (isNull(args[i])) {
				return false;
			}
		}
		return res;
	}

	/** 为空设置默认值 */
	export function nullToDefault(param, del: any = null) {
		if (isNull(param)) {
			return del
		}
		return param
	}
	/**
	 * 合并数组 返回一个新数组
	 * @param args 多个 Array参数 必须全是 []
	 * @returns 
	 */
	export function mergeArray(...args: any[]) {
		let params = new Array();
		let objectNum = 0;
		let formList = [];
		[].push.apply(formList, args)
		if (formList.length > 0) {
			formList.forEach((item, index) => {
				if (item instanceof Array) {
					objectNum = objectNum + 1;
					for (let i = 0; i < item.length; i++) {
						let value = item[i];
						params.push(value);
					}
				}
			})
		}
		if (objectNum == 0) {
			return params
		}
		return params
	}

	/**
	 * 合并对象 返回一个新对象
	 * @param args 多个 Object参数 必须全是 {}
	 * @returns 
	 */
	export function mergeObject(...args: any[]) {
		let params = {}
		let objectNum = 0;
		let formList = [];
		[].push.apply(formList, args)
		if (formList.length > 0) {
			formList.forEach((item, index) => {
				if (item && typeof (item) == "object") {
					objectNum = objectNum + 1
					for (let key in item) {
						if (Object.prototype.hasOwnProperty.call(item, key)) {
							let value = item[key];
							if (value != null && params[key] != null) {//注意：null的类型为object
								if (typeof (value) == "object" && typeof (params[key]) == "object") {
									value = mergeObject(params[key], value)
								}
							}
							params[key] = value
						}
					}
				}
			})
		}
		if (objectNum == 0) {
			return {}
		}
		return params
	}
	/**
	 * 合并对象 返回第一个遇见的对象(原始表)
	 * @param args 多个 Object参数 必须全是 {}
	 * @returns 
	 */
	export function mergeObjectSelf(...args: any[]) {
		let params = null;
		let objectNum = 0;
		let formList = [];
		[].push.apply(formList, args)
		if (formList.length > 0) {
			formList.forEach((item, index) => {
				if (item && typeof (item) == "object") {
					objectNum = objectNum + 1
					if (!params) {
						params = item;
					}
					for (let key in item) {
						if (Object.prototype.hasOwnProperty.call(item, key)) {
							let value = item[key];
							if (value != null && params[key] != null) {//注意：null的类型为object
								if (typeof (value) == "object" && typeof (params[key]) == "object") {
									value = mergeObject(params[key], value)
								}
							}
							params[key] = value;
						}
					}
				}
			})
		}
		if (objectNum == 0) {
			return {}
		}
		return params
	}

	//**number扩展 */  -15  4  = 1   -15  -4  = -3
	/**
	 * number取模
	 * @param a 
	 * @param b 
	 * @returns number
	 */
	export function number_mod(a: number, b: number): number {
		let c = Math.abs(a) % Math.abs(b)
		if (a < 0) {
			if (b < 0) {
				c = 0 - c;
			} else {
				if (c != 0) {
					c = 0 - c;
					c = c + b;
				}

			}
		} else {
			if (b < 0) {
				if (c != 0) {
					c = 0 - c;
					c = c + Math.abs(b);
					c = 0 - c;
				}
			}
		}
		return c;
	}
	//转换成0x0000格式的十六进制数
	export function number_formatToHex(param) {
		param = number_valueOf(param)
		let str = param.toString(16)
		return "0x" + str
	}

	/**
	 * 转换成数字，若无法转换成数字，返回默认值，没给定默认值则返回0
	 * @param param 
	 * @param d 
	 * @returns 
	 */
	export function number_valueOf(param, d: any = 0) {
		let num = Number(param)
		if (isNaN(num)) {
			return d
		}
		return num
	}

	//判断数字长度，超出限制转化为文字显示
	export function number_textOf(param: number, retainNum: number) {//传入一个需要保留的位数：
		if (!param) {
			return ""
		}
		let numLen: number = param.toString().length;
		let numString: string;
		if (numLen >= 3 && numLen <= 5) {
			numString = param.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1,');
		} else if (numLen > 5 && numLen <= 8) {
			let a = Math.floor(param / 10000);
			let b = Math.floor((param % 10000) / Math.pow(10, 4 - retainNum));
			if (retainNum == 0) {
				numString = `${a}万`
			} else {
				numString = `${a}.${b}万`
			}

		} else if (numLen > 8) {
			let a = Math.floor(param / 100000000);
			let b = Math.floor((param % 100000000) / Math.pow(10, 8 - retainNum));
			if (retainNum == 0) {
				numString = `${a}亿`
			} else {
				numString = `${a}.${b}亿`
			}
		}
		return numString;
	}

	//小数点后最多dot位 例如：(23458, 3, 2)->(2.35万, 2.35, 1)
	export function getFormatNumber(param: number, dot: number = 2) {
		let _k = 10000 //K
		let _m = 1000000 //M
		let _b = 1000000000 //B
		let _t = 1000000000000 //T

		param = param || 0

		let originNum = param

		let b = 0 > param
		let __number = Math.abs(param)

		let u = UNIT_TYPE.NONE
		if (__number >= _t) {
			__number = __number / _t
			u = UNIT_TYPE.T
		} else if (__number >= _b) {
			__number = __number / _b
			u = UNIT_TYPE.B
		} else if (__number >= _m) {
			__number = __number / _m
			u = UNIT_TYPE.M
		} else if (__number >= _k) {
			__number = __number / _k
			u = UNIT_TYPE.K
		}

		if (u >= UNIT_TYPE.NONE) {
			let ndot = Math.pow(10, dot)
			let ndecimal = 1 / ndot
			//修正小数精度问题
			__number = __number + 0.000001
			__number = __number - __number % ndecimal

			if (originNum > 0 && originNum < 0.01) {
				__number = 0.01
			}

		}
		/** 修正高精度数字不太精准问题 */
		let s = __number.toString()
		let biaodian_index = s.indexOf(".")
		if (biaodian_index > 0) {
			s = s.substring(0, biaodian_index + dot + 1)
		}

		switch (u) {
			case UNIT_TYPE.K:
				s = s + GameTxt.unit_k
				break;
			case UNIT_TYPE.M:
				s = s + GameTxt.unit_m
				break;
			case UNIT_TYPE.B:
				s = s + GameTxt.unit_b
				break;
			case UNIT_TYPE.T:
				s = s + GameTxt.unit_t
				break;
			default:
				break;
		}
		if (b) {
			s = "-" + s
		}
		return s
	}
	//返回插入特殊字符后的人民币 数字，88,888,888]]
	/**
	 * 数字按千分位转换 88,888,888 
	 * @param num 要转换的数字
	 * @param letter 用来填充的字符
	 * @param isShowPN 是否显示正负 默认显示
	 * @returns 
	 */
	export function string_matchStr(num: number = null, letter: string = ",", isShowPN: boolean = true): string | null {
		num = Number(num);
		if (num == null || num == undefined || isNaN(num)) {
			return null
		}
		//正或负
		let PorN: boolean = num >= 0
		let appendStr = ""
		let tempNum = Math.abs(num)
		let tempstr = ""

		while (tempNum > 0) {
			if (tempNum < 1000) {
				tempstr = (tempNum % 1000) + ""
				if (appendStr.length > 0) {
					appendStr = tempstr + letter + appendStr
					tempNum = Math.floor(tempNum / 1000)
				} else {
					appendStr = tempstr + "" + appendStr
					tempNum = Math.floor(tempNum / 1000)
				}
			} else {
				if (appendStr.length == 0) {
					tempstr = (1000 + tempNum % 1000) + ""
					appendStr = appendStr + "" + tempstr.slice(1, 4)
					tempNum = Math.floor(tempNum / 1000)
				} else {
					tempstr = (1000 + tempNum % 1000) + ""
					appendStr = tempstr.slice(1, 4) + letter + appendStr
					tempNum = Math.floor(tempNum / 1000)
				}
			}
		}
		if (appendStr.length == 0) {
			appendStr = tempNum + ""
		}
		if (isShowPN) {
			if (!PorN) {
				appendStr = "-" + appendStr
			}
		}
		return appendStr
	}
	/**
	 * 将长数值转为以“万”或“亿”结尾的数值
	 * uihelper.to_short_number(1234567) -> 123.46万
	 * uihelper.to_short_number(1230000) -> 123万
	 * @param money 
	 * @param isSimplify 是否小数去零 默认false 不取
	 * @returns 
	 */
	export function string_moneyToShortNumber(money, isSimplify = false): string {
		money = number_valueOf(money);
		let str = "";

		if (money >= 100000000) {
			money = Number(money / 100000000);
			let findTab = String(money).split(".");
			str = str + String(findTab[0]);
			if (findTab.length == 2) {
				let endStr = String(findTab[1]).slice(0, 2);

				if (isSimplify) {
					for (let i = endStr.length - 1; i >= 0; i--) {
						if (endStr.substring(i + 1, i) == "0") {
							endStr = endStr.substring(0, i);
						} else {
							break;
						}
					}
				}
				if (endStr.length > 0) {
					str = str + "." + endStr;
				}
			}
			str = str + "亿";
			return str;
		}
		if (money >= 10000) {
			money = Number(money / 10000);
			let findTab = String(money).split(".");
			str = str + String(findTab[0]);
			if (findTab.length == 2) {
				let endStr = String(findTab[1]).slice(0, 2);

				if (isSimplify) {
					for (let i = endStr.length - 1; i >= 0; i--) {
						if (endStr.substring(i + 1, i) == "0") {
							endStr = endStr.substring(0, i);
						} else {
							break;
						}
					}
				}
				if (endStr.length > 0) {
					str = str + "." + endStr;
				}
			}
			str = str + "万";
			return str;
		}
		str = String(money);
		return str;
	}
	/**
	 * 格式化货币
	 * @param money 要格式化的数值
	 * @param isWager 是否取整
	 * @param isSimplify 是否小数去零
	 * @param isSign 是否加+ -
	 * @param isEnglish 是否英文单位
	 */
	export function string_moneyToChange(money, isWager = false, isSimplify = false, isSign = false, isEnglish = false) {
		money = number_valueOf(money);
		let str = "";
		if (isSign) {
			if (money < 0) {
				money = money - (money * 2);
				str = "-";
			} else if (money > 0) {
				str = "+";
			}
		}
		//换算的位算
		let getNumberStr = function (standardNum) {
			//1234567 若standardNum = 5  a=123 b=45
			let strMoney = String(money);
			let a = strMoney.substring(0, strMoney.length - standardNum + 1);
			if (isWager) {
				return a;
			};
			//后续两位
			let b = strMoney.substring(strMoney.length - standardNum + 1, strMoney.length - standardNum + 3);
			if (isSimplify) {
				for (let i = b.length - 1; i >= 0; i--) {
					if (b.substring(i + 1, i) == "0") {
						b = b.substring(0, i);
					} else {
						break;
					}
				}
				if (b.length < 1) {
					return a;
				}
			}
			return a + "." + b;
		}
		if (money >= 100000000) {
			str = str + getNumberStr(9) + "亿";
		} else if (money >= 10000) {
			if (isEnglish) {
				str = str + getNumberStr(5) + "w";
			} else {
				str = str + getNumberStr(5) + "万";
			}
		} else {
			str = str + String(money);
		}
		return str;
	}
	//**string扩展 */
	//英文字母转成ascii数字 得到的是个十进制数
	export function string_codeToASCII(param: string): number | null {
		let res = null;
		param = String(param);
		if (param && param.length) {

			for (let i = 0; i < param.length; i++) {
				let aa = param.charCodeAt(i)

				if (!isNaN(aa)) {
					if (!res) {
						res = ""
					}
					res = res + aa
				}
			}
			if (res) {
				res = Number(res)
			}
		}

		return res
	}
	//获取字符串字节长度
	export function string_getBytesLength(param: string): number {
		let totalLength = 0;
		param = String(param);
		if (param && param.length) {
			let charCode;
			for (let i = 0; i < param.length; i++) {
				charCode = param.charCodeAt(i);
				if (charCode < 0x007f) {
					totalLength++;
				} else if ((0x0080 <= charCode) && (charCode <= 0x07ff)) {
					totalLength += 2;
				} else if ((0x0800 <= charCode) && (charCode <= 0xffff)) {
					totalLength += 3;
				} else {
					totalLength += 4;
				}
			}
		}

		return totalLength;
	}

	/** 判断字符串是否为空 */
	export function string_isEmpty(param: string): boolean {
		if (isNull(param)) {
			return true
		}
		if (param == "") {
			return true
		}
		return false
	}

	/** 判断字符串是否为HTTP地址 */
	export function string_isHttp(param: string): boolean {
		let res = string_isEmpty(param);
		if (res) {
			return false;
		}
		let str = String(param).toLowerCase();
		if (str.search("http://") > -1) {
			return true;
		} else if (str.search("https://") > -1) {
			return true;
		}
		return false
	}


	/** 当前字符串是否都是一个字节的 */
	export function string_isAllOneBytes(param: string): boolean {
		if (!param) {
			return false;
		}
		param = String(param);

		let curStrTable = param.split("");

		for (let i = 0; i < curStrTable.length; i++) {
			let byteLen = this.string_getBytesLength(curStrTable[i]);
			if (byteLen > 1) {
				return false;
			}
		}
		return true
	}


	/**
	 * 指定字符长度缩略（1中文 = 1长度） 如果字符串长度大于x位，第x位后的用"..."显示;
	 * @param param 要缩略的字符串
	 * @param maxlen 最大字符(节)长度
	 * @param isByte 是否字节
	 * @param del 用来替换的字符
	 * @returns 
	 */
	export function string_subString(param: string, maxlen: number, isByte: boolean = false, del: string = "...") {//传入一个数字，表示多少位后的字符串需要省略
		if (!param) {
			return ""
		}
		param = String(param);
		let byteLenth = this.string_getBytesLength(param);
		let str: string;

		if (isByte) {
			if (byteLenth > maxlen) {
				// str = param.slice(0, maxlen)
				let curLen = 0;
				let curStrTable = param.split("");
				let curStr = "";

				for (let i = 0; i < curStrTable.length; i++) {
					let byteLen = this.string_getBytesLength(curStrTable[i]);
					if ((byteLen + curLen) > maxlen) {
						break;
					} else {
						curLen = curLen + byteLen;
						curStr = curStr + curStrTable[i]
					}
				}
				str = curStr + del;
			} else {
				str = param;
			}
			return str;
		}

		if (param.length > maxlen) {
			str = param.slice(0, maxlen)
			str = str + del;
		} else {
			str = param;
		}
		return str;
	}
	//判断字符串是否违规
	export function string_isViolation(param: string) {
		let violationList = [];//违规字符的示例数组
		let str: string;
		for (let violationString of violationList) {
			if (param.indexOf(violationString) != -1) {
				str = param.replace(violationString, "*");//如果含有违规字符，则替换成*
			} else {
				str = param;
			}
		}
		return str;
	}
	//字符串格式化
	export function string_format(str, ...args: any[]): string {
		if (!str || args.length == 0) {
			return ""
		}
		let result = String(str);
		if (args.length == 1 && typeof (args[0]) == "object" && args[0] != null) {
			for (let key in args[0]) {
				if (Object.prototype.hasOwnProperty.call(args[0], key)) {
					let reg = new RegExp("({" + key + "})", "g");
					result = result.replace(reg, args[0][key]);
				}
			}
		} else {
			for (let i = 0; i < args.length; i++) {
				let reg = new RegExp("({[" + i + "]})", "g");
				result = result.replace(reg, String(args[i]));
			}
		}
		return result
	}

	/** 字符串格式化(str为符合lua规范的字符串) */
	export function string_formatByLua(str, ...args: any[]): string {
		let keyList = { "s": true, "d": true };
		str = String(str);
		let splitTab = str.split("");
		let newStr = "";
		let newTab = [];
		let isNeedInsert = false;
		let currowIndex = 0;
		let count = 0;
		for (let i = 0; i < splitTab.length; i++) {

			isNeedInsert = false;
			let v = splitTab[currowIndex];
			if (v) {
				if (v == "%" && splitTab[currowIndex + 1] != null) {
					let nextStr = splitTab[currowIndex + 1];
					//比较小写字符串
					if (keyList[String(nextStr).toLowerCase()] != null) {
						newTab.push("{" + count + "}");
						count = count + 1;
						currowIndex = currowIndex + 1;
					} else {
						newTab.push(v);
					}
				} else {
					newTab.push(v);
				}
				currowIndex = currowIndex + 1;
				if (currowIndex > splitTab.length) {
					break;
				}
			}
		}
		for (let i = 0; i < newTab.length; i++) {
			newStr = newStr + newTab[i];
		};
		return string_format(newStr, ...args);
	}
	/**
	 * 检查字符串是否以给定字符开头 大小写敏感
	 * @param str 待搜索的字符串
	 * @param chars 要搜索的字符
	 * @param position 指定位置查找 默认0
	 * @returns boolean
	 */
	export function string_startWith(str: String, chars, position: number = 0): boolean {
		str = String(str);
		chars = String(chars);
		return str.startsWith(chars, position);
	}

	/**
	 * 检查字符串是否以给定字符结尾 大小写敏感
	 * @param str 待搜索的字符串
	 * @param chars 要搜索的字符
	 * @param position 指定位置查找 默认最后一位
	 * @returns boolean
	 */
	export function string_endsWith(str: String, chars, position: number = null): boolean {
		str = String(str);
		if (position == null || typeof (position) != "number") {
			position = str.length;
		}
		return str.endsWith(chars, position);
	}
	/**
	 * 字符串去除空格
	 * @param str 待处理的字符串
	 * @param type ALL:所有空格(默认) LEFT:左边空格 RIGHT:右边空格,CENTER:中间空格 LEFT-RIGHT:两端空格
	 * @returns 
	 */
	export function string_trim(str: String, type: String = "ALL") {
		if (str == null && str == undefined) {
			return str;
		}
		switch (type) {
			case "LEFT":
				return str.replace(/^\s*/g, "");
			case "RIGHT":
				return str.replace(/\s*$/g, "");
			case "CENTER":
				return str.replace(/\s/g, '');
			case "LEFT-RIGHT":
				return str.replace(/(^\s*)|(\s*$)/g, "");
			default:
				return str.replace(/\s+/g, "");
		}
	};
	/** 字符串去除所有换行 */
	export function string_clearBr(str: String) {
		if (str == null && str == undefined) {
			return str;
		}
		str = str.replace(/<\/?.+?>/g, "");
		str = str.replace(/[\r\n]/g, "")
		return str;
	};

	/**
	 * 查找到的字符只替换最后一位
	 * @param str 
	 * @param findStr 
	 * @param replaceStr 
	 * @returns 
	 */
	export function string_replaceLast(str, findStr, replaceStr) {
		if (str == null && str == undefined) {
			return null;
		}
		str = String(str);
		let endIndex = str.lastIndexOf(String(findStr));
		if (endIndex == -1) {
			return str;
		}
		let one = str.substring(0, endIndex);
		let two = str.substring(endIndex + 1, str.length);
		return one + String(replaceStr) + two;
	}
	/**
	 * 文件路径取文件名称
	 * @param filePath 文件路径 image/file/img.png
	 * @param hasSuffix 结果是否保留后缀名 默认false 不保留
	 * @returns string
	 */
	export function string_splitFileName(filePath: string, hasSuffix: boolean = false): string {
		if (filePath == null && filePath == undefined || filePath == "") {
			return filePath;
		}
		filePath = String(filePath);
		let pathName = "";
		let trim = filePath.split("/");
		if (trim.length > 0) {
			pathName = trim[trim.length - 1];
			pathName = String(pathName);
			if (hasSuffix == false) {
				let dotIndex = pathName.lastIndexOf(".");

				if (dotIndex == -1) {
					//非文件属性 可能是文件夹
					return pathName;
				}
				pathName = pathName.substring(0, dotIndex);
			}
		}
		return pathName;
	};
	/** 根据字符分割成两个字符串(不包含分割字符) */
	export function string_spliteTwoByChar(input, char) {
		if (input == null) {
			return null;
		}
		let index = String(input).indexOf(String(char));
		if (index != -1) {
			let one = String(input).slice(0, index);
			let two = String(input).slice(index + 1, String(input).length);
			return [one, two, index]
		}
		return null;
	}

	/**table:map、array扩展 */
	//判断是否是一个空数组/对象
	export function table_isEmpty(param): boolean {
		if (param == null || param == undefined) {
			return true;
		}
		if (typeof (param) != "object") {
			return true
		}
		let res = false;
		try {
			res = (JSON.stringify(param) == "[]" || JSON.stringify(param) == "{}");
			if (!res) {
				res = true;
				for (let key in param) {
					if (Object.prototype.hasOwnProperty.call(param, key) && res == true) {
						let v = param[key];
						if (v != null) {
							res = false;
						}
					}
				}
			}
			return res
		} catch (error) {
			return res
		}
	}
	/**
	 * 去除空数据
	 * @param obj 
	 * @returns 
	 */
	export function table_delEmpty(obj) {
		if (obj == null) {
			return null;
		}
		if (typeof (obj) != "object") {
			return obj;
		}
		Object.keys(obj).forEach((key) => {
			let value = obj[key];
			if (value != null) {
				if (typeof (value) == 'object') {
					table_delEmpty(value);
				}
			} else {
				delete obj[key];
			}
		});
		return obj;
	};

	/** 判断Array  [] 或 new Array {}为Object*/
	export function isArray(param): boolean {
		if (param && typeof (param) == "object") {
			if (Object.prototype.toString.call(param) === '[object Array]') {
				return true
			}
		}
		return false
	}
	/** 判断 Object */
	export function isObject(param): boolean {
		if (param && typeof (param) == "object") {
			if (Object.prototype.toString.call(param) === '[object Object]') {
				return true
			}
		}
		return false
	}
	/**
	 * 在table中查找值相等 返回key
	 * @param hashtable []或者{}
	 * @param value 欲比较的值
	 * @returns 
	 */
	export function table_keyof(hashtable, value): any | null {
		if (!hashtable || typeof (hashtable) != "object") {
			return null;
		}
		if (hashtable instanceof Array) {
			for (let i = 0; i < hashtable.length; i++) {
				if (value == hashtable[i]) {
					return i;
				}
			}
		} else {
			let res = null;
			for (let i in hashtable) {
				if (Object.prototype.hasOwnProperty.call(hashtable, i) && res == null) {
					if (value == hashtable[i]) {
						res = i;
					}
				}
			}
			return res;
		}
		return null;
	}
	/**
	 * Object或Array的长度
	 * @param table 
	 * @returns 
	 */
	export function table_length(table): number {
		if (!table || typeof (table) != "object") {
			return 0;
		}
		if (table instanceof Array) {
			return table.length;
		} else {
			let count = 0;
			for (let i in table) {
				if (Object.prototype.hasOwnProperty.call(table, i)) {
					count = count + 1;
				}
			}
			return count;
		}
	}
	/**
	 * table校验，返回自身或者{}、[]
	 * @param param 
	 * @param isArray 默认false 为空时返回{}
	 * @returns 
	 */
	export function table_verify(param, isArray = false) {
		if (!param) {
			if (isArray) {
				return [];
			} else {
				return {};
			}
		}
		let propty = Object.prototype.toString.call(param);
		if (propty === '[object Object]' || propty == "[object Array]") {
			return param
		}
		if (isArray) {
			return [];
		} else {
			return {};
		}
	}

	/**
	 * table的深拷贝，不能进行json处理的
	 * @param obj 要拷贝的实例
	 * @returns 
	 */
	export function table_DeepClone(obj) {
		if (obj == null) {
			return null;
		}
		// console.log("table的深拷贝===<", typeof (obj), obj)
		if (typeof (obj) != "object") {
			return obj;
		}
		// 判断拷贝的要进行深拷贝的是数组还是对象，是数组的话进行数组拷贝，对象的话进行对象拷贝
		let objClone = null;
		if (Array.isArray(obj)) {
			objClone = [];
		} else {
			objClone = {};
		};
		// 进行深拷贝的不能为空，并且是对象或者是
		if (obj != null && typeof (obj) === 'object') {
			let Data = Object.keys(obj);
			for (let i = 0; i < Data.length; i += 1) {
				if (obj[Data[i]] != null && typeof (obj[Data[i]]) === 'object') {
					objClone[Data[i]] = table_DeepClone(obj[Data[i]]);
				} else {
					objClone[Data[i]] = obj[Data[i]];
				}
			}
		}
		return objClone;
	}
	/**
	 * table排序 按ASCII字母排序 A-Z
	 * @param table 要排序的数组
	 * @param caseIgnore 是否忽略大小写 默认不忽略
	 */
	export function table_sortAscii_AtoZ(table, caseIgnore: boolean = false) {
		if (!isObject(table) || !isArray(table)) {
			return null
		}
		if (isArray(table)) {
			table.sort(function (s1, s2) {
				let x1 = s1;
				let x2 = s2;
				if (caseIgnore == true) {
					x1 = s1.toUpperCase();
					x2 = s2.toUpperCase();
				}
				if (x1 < x2) {
					return -1;
				}
				if (x1 > x2) {
					return 1;
				}
				return 0;
			});
			return table;
		}
		if (isObject(table)) {
			let map = new Map();
			for (let key in table) {
				if (Object.prototype.hasOwnProperty.call(table, key)) {
					map.set(key, table[key]);
				}
			}
			if (map.size > 0) {
				let arrayLike = Array.from(map)
				//得到的array中索引0为map中的key,索引1为map中的value
				arrayLike.sort(function (a, b) {
					let x1 = a[0];
					let x2 = b[0];
					if (caseIgnore == true) {
						x1 = x1.toUpperCase();
						x2 = x2.toUpperCase();
					}
					if (x1 < x2) {
						return -1;
					}
					if (x1 > x2) {
						return 1;
					}
					return 0;
				})
				return arrayLike;
			}
			return null;
		}
		return null;
	}

	/** 时间相关 */
	/**
	 * 获取时间戳 精确到毫秒
	 * @returns number
	 */
	export function timeEx(): number {
		return new Date().getTime()
	}
	/**
	 * 获取时间戳 精确到秒
	 * @returns number
	 */
	export function time(): number {
		return Math.round(Utils.timeEx() / 1000)
	}
	/**
	 * 时间戳转时间
	 * @param num 
	 * @returns object {year:?,month:?,day:?,hour:?,minutes:?,seconds:?}
	 */
	export function timeToDataArray(num: number): Object {
		if (isNull(num)) {
			return null
		}
		let size = num.toString().length

		if (size != 10 && size != 13) {
			return null
		}
		//时间戳为10位需*1000，时间戳为13位的话不需乘1000
		if (size == 10) {
			num = num * 1000
		}
		let date = new Date(num);

		let array = {
			year: date.getFullYear(),
			month: date.getMonth() + 1,
			day: date.getDate(),
			hour: date.getHours(),
			minutes: date.getMinutes(),
			seconds: date.getSeconds()
		}
		return array;
	}
	/**
	 * 获取今天星期几
	 * @returns number 1~7
	 */
	export function time_getWeekday(): number {
		let weekday = new Date().getDay();
		if (weekday == 0) {
			return 7
		}
		return weekday;
	}

	/**
	 * 时间字符串格式化输出
	 * @param num 
	 * @param strFormat 格式化的字符串 ex:{0}年{1}月{2}日{3}时{4}分{5}秒
	 * @returns string 字符串
	 */
	export function timeParse(num: number, strFormat: string = null): string {
		let data = this.timeToDataArray(num);
		let str = "";
		if (data) {
			strFormat = strFormat || "{0}年{1}月{2}日{3}时{4}分{5}秒";
			str = string_format(strFormat, data.year, data.month, data.day, data.hour, data.minutes, data.seconds)
		}
		return str;
	}


	/**
	 * 是否是同一天
	 * @param onetime 要比较的时间戳（可为10或13位）
	 * @param twotime 要比较的时间戳（可为10或13位）
	 * @returns boolean
	 */
	export function time_isSampleDay(onetime, twotime) {
		onetime = Number(onetime)
		twotime = Number(twotime)
		if (isNull(onetime) || isNull(twotime)) {
			return false
		}
		let oneArray = timeToDataArray(onetime)
		let twoArray = timeToDataArray(twotime)

		if (isNull(oneArray) || isNull(twoArray)) {
			return false
		}
		if (oneArray["year"] == twoArray["year"] && oneArray["month"] == twoArray["month"] && oneArray["day"] == twoArray["day"]) {
			return true
		}
		return false
	}
	/**
	 * 计算出剩余时间
	 * @param time 剩余时间 按照毫秒来计算
	 * @param isToTxt 是否返回文本格式 默认为false
	 */
	export function time_Remaining(time, isToTxt = false) {
		if (isNull(time)) {
			return null
		}
		time = Number(time);
		/** 返回结构 */
		let res = {
			/** 天数 */
			day: 0,
			/** 小时数 */
			hours: 0,
			/** 分钟数 */
			minutes: 0,
			/** 秒数 */
			seconds: 0
		}
		//毫秒级别
		let onDayAllTime = (24 * 3600 * 1000);
		let onHoursAllTime = (3600 * 1000);
		let onMinutesAllTime = (60 * 1000);
		let onSecondsAllTime = (1000);

		let endTime = time;
		if (endTime >= onDayAllTime) {
			res.day = Math.floor(endTime / onDayAllTime);
			endTime = endTime % onDayAllTime;    //计算天数后剩余的毫秒数
		};
		if (endTime >= onHoursAllTime) {
			res.hours = Math.floor(endTime / onHoursAllTime);
			endTime = endTime % onHoursAllTime;    //计算小时后剩余的毫秒数
		}
		if (endTime >= onMinutesAllTime) {
			res.minutes = Math.floor(endTime / onMinutesAllTime);
			endTime = endTime % onMinutesAllTime;    //计算分钟数后剩余的毫秒数
		}
		if (endTime >= onSecondsAllTime) {
			res.seconds = Math.round(endTime / onSecondsAllTime);
			endTime = endTime % onSecondsAllTime;    //计算分钟数后剩余的毫秒数
		}

		if (isToTxt) {
			let txt = "";
			if (res.day > 0) {
				txt = txt + res.day + "天";
			}
			if (res.hours > 0 || txt != "") {
				txt = txt + res.hours + "时";
			}
			if (res.minutes > 0 || txt != "") {
				txt = txt + res.minutes + "分";
			}
			if (res.seconds > 0 || txt != "") {
				txt = txt + res.seconds + "秒";
			}
			return txt;
		} else {
			return res;
		}
	}

	//**文件相关 */
	/**
	 *  保存字符串内容到文件。效果相当于从浏览器下载了一个文件到本地。
	 * @param textToWrite 要保存的文件内容
	 * @param fileNameToSaveAs 要保存的文件名
	 */
	export function file_saveForBrowser(textToWrite, fileNameToSaveAs) {
		if (sys.isBrowser) {
			let textFileAsBlob = new Blob([textToWrite], { type: 'application/json' });
			let downloadLink = document.createElement("a");
			downloadLink.download = fileNameToSaveAs;
			downloadLink.innerHTML = "Download File";
			if (window.webkitURL != null) {
				// Chrome allows the link to be clicked
				// without actually adding it to the DOM.
				downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
			}
			else {
				// Firefox requires the link to be added to the DOM
				// before it can be clicked.
				/**
				downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
				downloadLink.onclick = destroyClickedElement;
				downloadLink.style.display = "none";
				document.body.appendChild(downloadLink);
				*/
			}
			downloadLink.click();
		}
	}

	/**
	 * 将ImageAsset图片 转换成SpriteFrame
	 * @param imageAsset 
	 * @returns 
	 */
	export function image_ImageAssetToSpriteFrame(imageAsset: ImageAsset): SpriteFrame | null {
		if (imageAsset) {
			let spriteFrame = new SpriteFrame();
			let texture = new Texture2D();
			texture.image = imageAsset;
			spriteFrame.texture = texture;
			return spriteFrame
		}
		return null
	}
	/**
	 * 生成精灵帧
	 * @param width 宽
	 * @param height 高
	 * @param color 颜色
	 * @returns sprite frame
	 */
	export function image_CreateDefaultSpriteFrame(width: number, height: number, color: Color = new Color(255, 255, 255, 255)): SpriteFrame {
		let count = width * height * 4;
		let data: any = new Uint8Array(count);
		for (var j = 0; j < count; j += 4) {
			data[j] = color.r // r
			data[j + 1] = color.g // g
			data[j + 2] = color.b // b
			data[j + 3] = color.a // a

		}
		let imageAsset = new ImageAsset();
		imageAsset.reset({
			_data: data,
			_compressed: false,
			width: width,
			height: height,
			format: Texture2D.PixelFormat.RGBA8888
		});

		let texture = new Texture2D();
		texture.reset({
			width: width,
			height: height,
			format: Texture2D.PixelFormat.RGBA8888
		})
		texture.image = imageAsset;

		let spriteFrame = new SpriteFrame();
		spriteFrame.texture = texture;
		// let spriteFrame = Utils.image_ImageAssetToSpriteFrame(imageAsset);
		//需要禁用其纹理的 packable 选项 不参与自动合图
		spriteFrame.packable = false;
		return spriteFrame
	}


	/**
	 * 节点世界坐标和宽高转换成屏幕坐标宽高
	 * @param node 计算的坐标原点在屏幕左上角
	 * @returns 
	 */
	export function node_PositionSizeToScreen(node: Node) {
		if (!node) {
			return null;
		}
		//适配方案是Fit width
		let UIComp = node.getComponent(UITransform);
		if (!UIComp) {
			return null;
		}
		node.updateWorldTransform();
		let worldPos = new Vec3();
		node.getWorldPosition(worldPos);
		// console.warn("世界坐标系:getWorldPosition", worldPos)
		//panel的坐标转为屏幕坐标
		let width = UIComp.width;
		let height = UIComp.height;
		//屏幕分辨率
		let canvasSize = screen.windowSize;
		//像素比例
		let ratio = screen.devicePixelRatio;
		//scene的设计分辨率
		let desiginSize = view.getDesignResolutionSize();
		//适配模式
		let desiginType = GameConfig.instance.ResolutionPolicyType;

		// desiginType.
		//Fit width适配方案，以width作为缩放基准
		let scale = 1;
		if (desiginType == ResolutionPolicy.FIXED_WIDTH) {
			scale = (canvasSize.width / desiginSize.width);
		} else if (desiginType == ResolutionPolicy.FIXED_HEIGHT) {
			scale = (canvasSize.height / desiginSize.height);
		}

		//计算panel在屏幕中的尺寸
		width = scale * width;
		height = scale * height;

		//x,y即屏幕坐标，creator的坐标原点在左下，Android的在左上，需要做个转换。
		//x轴不变，y轴画布高减去y对应比例的值即为屏幕y坐标。（宽高都以sW为比例计算）
		// let x = (outPos.x * scale) - (width / 2);
		// let y = canvasSize.height - (outPos.y * scale) - (height / 2);
		let res = new Vec2();
		res.x = worldPos.x * scale - (width / 2);
		res.y = canvasSize.height - (worldPos.y * scale) - (height / 2);

		let size = { width: width, height: height };
		// console.warn("输出转换结果", res, size, ratio);
		res.x = res.x / ratio;
		res.y = res.y / ratio;
		size.width = size.width / ratio;
		size.height = size.height / ratio;
		// console.warn("转换成像素", res, size, ratio);

		return { pos: res, size: size };
	}


	/** 基于画布的世界坐标转基于设计分辨率的世界坐标 */
	export function node_PositionCanvasToWorldPos(canvasPos: Vec2): Vec2 {
		//适配模式
		let desiginType = GameConfig.instance.ResolutionPolicyType;
		//scene的设计分辨率
		let desiginSize = view.getDesignResolutionSize();

		let visibleSize = view.getVisibleSize();

		// console.log("传进来的值:", canvasPos);
		// console.log("可见尺寸:", view.getVisibleSize());
		// console.log("画布大小:", screen.windowSize);

		let x = 0;
		let y = 0;
		//view基于画布的左下角坐标
		let viewPosX = 0;
		let viewPosY = 0;
		if (desiginType == ResolutionPolicy.FIXED_WIDTH || desiginType == ResolutionPolicy.SHOW_ALL) {
			x = canvasPos.x;
			viewPosY = (visibleSize.height - desiginSize.height) / 2;
			if (canvasPos.y < viewPosY) {
				y = 0 - Math.abs(canvasPos.y - viewPosY)
			} else {
				y = Math.abs(canvasPos.y - viewPosY)
			}
		} else if (desiginType == ResolutionPolicy.FIXED_HEIGHT) {
			y = canvasPos.y;
			viewPosX = (visibleSize.width - desiginSize.width) / 2;
			if (canvasPos.x < viewPosX) {
				x = 0 - Math.abs(canvasPos.x - viewPosX)
			} else {
				x = Math.abs(canvasPos.x - viewPosX)
			}
		}
		// console.log("计算出的伪世界坐标>", x, y, canvasPos.y, viewPosY)
		return new Vec2(x, y);
	}

	/**
	 * 创建一个2D节点
	 * @param name 节点名称
	 * @returns 
	 */
	export function create_2DNode(name: string = null): Node {
		if (name != null) {
			name = String(name);
		}
		let node = new Node(name);
		node.layer = Layers.Enum.UI_2D;

		let uiTrans: UITransform = node.addComponent(UITransform);
		uiTrans.anchorPoint = new Vec2(0.5, 0.5);
		uiTrans.enabled = true;
		return node;
	}
	/**
	 * 创建一个2D图片节点
	 * @param name 节点名称
	 * @returns 
	 */
	export function create_2DSprite(spriteFrame: SpriteFrame, name = null): Node {
		let node = this.create_2DNode(name);
		if (node) {
			let sprite: Sprite = node.addComponent(Sprite);
			sprite.sizeMode = 2;
			sprite.type = 0;
			sprite.trim = true;
			sprite.spriteFrame = spriteFrame;
			sprite.enabled = true;
		}
		return node;
	}
	/**
	 * 获取一段贝塞尔曲线
	 * @param ctrlPosArr 贝塞尔曲线控制点坐标数组
	 * @param precison 精度，需要计算的该条贝塞尔曲线上的点的数目
	 * @param resArr 该条贝塞尔曲线上的点（二维坐标）
	*/
	export function getBezierPos(ctrlPosArr: Array<Vec2>, precison: number): Array<Vec2> {
		console.log(ctrlPosArr)
		let resArr: Array<Vec2> = new Array<Vec2>();

		/**贝塞尔曲线控制点数目（阶数）*/
		let number: number = ctrlPosArr.length;

		if (number < 2) {
			console.warn("控制点数不能小于 2");
			return resArr;
		}

		/**杨辉三角数据 */
		let yangHuiArr: Array<number> = Utils.getYangHuiTriangle(number);

		//计算坐标
		for (let i = 0; i < precison; i++) {

			let t: number = i / precison;
			let tmpX: number = 0;
			let tmpY: number = 0;

			for (let j = 0; j < number; j++) {

				tmpX += Math.pow(1 - t, number - j - 1) * ctrlPosArr[j].x * Math.pow(t, j) * yangHuiArr[j];

				tmpY += Math.pow(1 - t, number - j - 1) * ctrlPosArr[j].y * Math.pow(t, j) * yangHuiArr[j];
			}

			// resArr[i].x = tmpX;
			// resArr[i].y = tmpY;
			resArr[i] = new Vec2(tmpX, tmpY);
		}
		return resArr;
	}

	/**
	 * 获取杨辉三角对应阶数的值
	 * @param num 杨辉三角阶数
	 */
	export function getYangHuiTriangle(num: number): Array<number> {
		//计算杨辉三角
		let yangHuiArr = new Array<number>();

		if (num === 1) {
			yangHuiArr[0] = 1;
		} else {
			yangHuiArr[0] = yangHuiArr[1] = 1;

			for (let i = 3; i <= num; i++) {
				let t = new Array<number>();
				for (let j = 0; j < i - 1; j++) {
					t[j] = yangHuiArr[j];
				}

				yangHuiArr[0] = yangHuiArr[i - 1] = 1;
				for (let j = 0; j < i - 2; j++) {
					yangHuiArr[j + 1] = t[j] + t[j + 1];
				}
			}
		}
		// console.log(yangHuiArr);
		return yangHuiArr;
	}

	/**
	 * 求位于一条线段上已知Y的点
	 * @param point1 
	 * @param point2 
	 * @param insertY 
	 */
	export function countPointInSegmentByY(point1: Vec2, point2: Vec2, insertPtY: number) {
		let resPoint = new Vec2();
		try {
			//斜率
			let k = 0;
			if (point1.x == point2.x)//不存在斜率x=x1为直线方程90度
			{
				resPoint.x = point1.x;
				resPoint.y = insertPtY;
				return resPoint;
			}
			else if (point1.y == point2.y && point1.y != insertPtY)//y=y1为直线方程,0度,两条直线平行没有交点
			{
				return resPoint;
			} else if (point1.y == point2.y && point1.y == insertPtY)//0度，两条直线重合，任意点即为交点
			{
				resPoint.x = point1.x;
				resPoint.y = insertPtY;
				return resPoint;
			} else {
				k = (point2.y - point1.y) / (point2.x - point1.x);
				let b = point1.y - k * point1.x;

				let x = (insertPtY - b) / k;
				resPoint.x = x;
				resPoint.y = insertPtY;
			}
		} catch (err) {
			console.log("point1:", point1, "point2:", point2, insertPtY)
			error("countPointInSegmentByY:通过两点计算直线公式失败：", err);
		}
		return resPoint;

	}

	export function rotate3DAround(node: Node, point: Vec3, theta: Vec3, moon: boolean = true) {
		if (!node || node.isValid == false) {
			return;
		}

		let pos = node.getPosition()
		if (theta.x != 0) { // 绕x轴旋转
			let radian = Math.PI * theta.x / 180;
			let posx = -pos.z;
			let posy = pos.y;
			let pntx = -point.z;
			let pnty = point.y;
			let radius = Vec2.distance(new Vec2(posx, posy), new Vec2(pntx, pnty)); // 旋转半径
			let radianStart = Math.atan2(posy - pnty, posx - pntx); // 被旋转的节点相对于旋转点的起始角度
			let y = radius * Math.sin(radianStart + radian);
			let x = radius * Math.cos(radianStart + radian);
			let outx = pntx + x;
			let outy = pnty + y;
			node.setPosition(pos.x, outy, -outx);
			if (moon) {
				let eulerAngles = node.eulerAngles;
				node.setRotationFromEuler(eulerAngles.x + theta.x, eulerAngles.y, eulerAngles.z);
			}
		} else if (theta.y != 0) { // 绕y轴旋转
			let radian = Math.PI * theta.y / 180;
			let posx = pos.x;
			let posy = -pos.z;
			let pntx = point.x;
			let pnty = -point.z;
			let radius = Vec2.distance(new Vec2(posx, posy), new Vec2(pntx, pnty)); // 旋转半径
			let radianStart = Math.atan2(posy - pnty, posx - pntx); // 被旋转的节点相对于旋转点的起始角度
			let y = radius * Math.sin(radianStart + radian);
			let x = radius * Math.cos(radianStart + radian);
			let outx = pntx + x;
			let outy = pnty + y;
			node.setPosition(outx, pos.y, -outy);
			if (moon) {
				let eulerAngles = node.eulerAngles;
				node.setRotationFromEuler(eulerAngles.x, eulerAngles.y + theta.y, eulerAngles.z);
			}
		} else if (theta.z != 0) { // 绕z轴旋转
			let radian = Math.PI * theta.z / 180;
			let posx = pos.x;
			let posy = pos.y;
			let pntx = point.x;
			let pnty = point.y;
			let radius = Vec2.distance(new Vec2(posx, posy), new Vec2(pntx, pnty)); // 旋转半径
			let radianStart = Math.atan2(posy - pnty, posx - pntx); // 被旋转的节点相对于旋转点的起始角度
			let y = radius * Math.sin(radianStart + radian);
			let x = radius * Math.cos(radianStart + radian);
			let outx = pntx + x;
			let outy = pnty + y;
			node.setPosition(outx, outy, pos.z);
			if (moon) {
				let eulerAngles = node.eulerAngles;
				node.setRotationFromEuler(eulerAngles.x, eulerAngles.y, eulerAngles.z - theta.z);
			}
		}
	}

	/**
	 * 3d对象环绕某个轴旋转一定角度，并保持3d对象相对于轴的角度不变。举例如月球环绕地球
	 * @param node 
	 * @param position 
	 * @param rotaionEuler 
	 * @param point 
	 * @param theta 
	 * @param moon 
	 */
	export function rotate3DAroundByPositionRotaion(node: Node, position: Vec3, rotaionEuler: Vec3, point: Vec3, theta: Vec3, moon: boolean = true) {
		if (!node || node.isValid == false) {
			return;
		}

		let pos = position;
		if (theta.x != 0) { // 绕x轴旋转
			let radian = Math.PI * theta.x / 180;
			let posx = -pos.z;
			let posy = pos.y;
			let pntx = -point.z;
			let pnty = point.y;
			let radius = Vec2.distance(new Vec2(posx, posy), new Vec2(pntx, pnty)); // 旋转半径
			let radianStart = Math.atan2(posy - pnty, posx - pntx); // 被旋转的节点相对于旋转点的起始角度
			let y = radius * Math.sin(radianStart + radian);
			let x = radius * Math.cos(radianStart + radian);
			let outx = pntx + x;
			let outy = pnty + y;
			node.setPosition(pos.x, outy, -outx);
			if (moon) {
				let eulerAngles = rotaionEuler;
				node.setRotationFromEuler(eulerAngles.x + theta.x, eulerAngles.y, eulerAngles.z);
			}
		} else if (theta.y != 0) { // 绕y轴旋转
			let radian = Math.PI * theta.y / 180;
			let posx = pos.x;
			let posy = -pos.z;
			let pntx = point.x;
			let pnty = -point.z;
			let radius = Vec2.distance(new Vec2(posx, posy), new Vec2(pntx, pnty)); // 旋转半径
			let radianStart = Math.atan2(posy - pnty, posx - pntx); // 被旋转的节点相对于旋转点的起始角度
			let y = radius * Math.sin(radianStart + radian);
			let x = radius * Math.cos(radianStart + radian);
			let outx = pntx + x;
			let outy = pnty + y;
			node.setPosition(outx, pos.y, -outy);
			if (moon) {
				let eulerAngles = rotaionEuler;
				node.setRotationFromEuler(eulerAngles.x, eulerAngles.y + theta.y, eulerAngles.z);
			}
		} else if (theta.z != 0) { // 绕z轴旋转
			let radian = Math.PI * theta.z / 180;
			let posx = pos.x;
			let posy = pos.y;
			let pntx = point.x;
			let pnty = point.y;
			let radius = Vec2.distance(new Vec2(posx, posy), new Vec2(pntx, pnty)); // 旋转半径
			let radianStart = Math.atan2(posy - pnty, posx - pntx); // 被旋转的节点相对于旋转点的起始角度
			let y = radius * Math.sin(radianStart + radian);
			let x = radius * Math.cos(radianStart + radian);
			let outx = pntx + x;
			let outy = pnty + y;
			node.setPosition(outx, outy, pos.z);
			if (moon) {
				let eulerAngles = rotaionEuler;
				node.setRotationFromEuler(eulerAngles.x, eulerAngles.y, eulerAngles.z - theta.z);
			}
		}
	}
}
