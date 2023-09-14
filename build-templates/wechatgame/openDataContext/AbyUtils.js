/** 工具函数 */
const AbyUtils = {
    /**针对this指向性问题 */
    handler(obj, func) {
        return (...args) => {
            return func.call(obj, ...args)
        }
    },

    /** 复制函数 */
    clone(data) {
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
                    temp[key] = AbyUtils.clone(item);
                }
            })
            return temp;
        } else if (data instanceof Object) {   //Object
            let res = {};
            for (let key in data) {
                if (data[key] == null || data[key] == undefined) {
                    res[key] = null;
                } else {
                    res[key] = AbyUtils.clone(data[key]);
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
    },
    /**
     * table校验，返回自身或者{}、[]
     * @param param 
     * @param isArray 默认false 为空时返回{}
     * @returns 
     */
    table_verify(param, isArray = false) {
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
    },
    /**table:map、array扩展 */
    //判断是否是一个空数组/对象
    table_isEmpty(param) {
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
    },
    /**
     * 指定字符长度缩略（1中文 = 1长度） 如果字符串长度大于x位，第x位后的用"..."显示;
     * @param param 要缩略的字符串
     * @param maxlen 最大字符(节)长度
     * @param isByte 是否字节
     * @param del 用来替换的字符
     * @returns 
     */
    string_subString(param, maxlen, isByte = false, del = "...") {//传入一个数字，表示多少位后的字符串需要省略
        if (!param) {
            return ""
        }
        param = String(param);
        let byteLenth = AbyUtils.string_getBytesLength(param);
        let str = "";

        if (isByte) {
            if (byteLenth > maxlen) {
                // str = param.slice(0, maxlen)
                let curLen = 0;
                let curStrTable = param.split("");
                let curStr = "";

                for (let i = 0; i < curStrTable.length; i++) {
                    let byteLen = AbyUtils.string_getBytesLength(curStrTable[i]);
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
    },
    /** 获取字符串字节长度 */
    string_getBytesLength(param) {
        let totalLength = 0;
        if (param == null || param == "" || param == undefined) {
            return totalLength;
        }
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
    },
    /** 字符串是否为空 */
    string_isNull(value) {
        if (value == null || value == undefined || value == "" || value == "null" || value == "undefined") {
            return true;
        }
        return false;
    },

    //字符串格式化
    string_format(str, ...args) {
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
    },
    //字符串是否是Http
    string_isHttp(str) {
        str = String(str);
        if (str.includes("http://") || str.includes("https://")) {
            return true;
        }
        return false;
    },
    /** 判断空 */
    isNull(param) {
        if (typeof (param) == "number" && param != NaN) {
            return false;
        }
        if (param != null && param != undefined) {
            return false
        }
        return true
    },

    /** KVList中根据key获取value */
    getValueByKVListKey(tab, key) {
        if (!tab || key == null) {
            return null;
        }
        if (tab?.length > 0) {
            for (let i = 0; i < tab.length; i++) {
                if (tab[i]["key"] == String(key)) {
                    return tab[i]["value"];
                }
            }
        }
        return null;
    },

    /** 时间相关 */
    /**
     * 获取时间戳 精确到毫秒
     * @returns number
     */
    timeEx() {
        return new Date().getTime()
    },
    /**
     * 获取时间戳 精确到秒
     * @returns number
     */
    time() {
        return Math.round(AbyUtils.timeEx() / 1000)
    },
    /**
     * 时间戳转时间
     * @param num 
     * @returns object {year:?,month:?,day:?,hour:?,minutes:?,seconds:?}
     */
    timeToDataArray(num) {
        num = Number(num);
        if (AbyUtils.isNull(num)) {
            return null
        }
        let size = num.toString().length
        if (size != 10 && size != 13) {
            return null
        }
        //时间戳为10位需*1000，时间戳为13位的话不需乘1000
        if (size == 10) {
            num = num * 1000;
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
    },
    /**
     * 时间字符串格式化输出
     * @param num 
     * @param strFormat 格式化的字符串 ex:{0}年{1}月{2}日{3}时{4}分{5}秒
     * @returns string 字符串
     */
    timeParse(num, strFormat) {
        let data = AbyUtils.timeToDataArray(num);
        let str = "";
        if (data) {
            strFormat = strFormat || "{0}年{1}月{2}日{3}时{4}分{5}秒";
            str = AbyUtils.string_format(strFormat, data.year, data.month, data.day, data.hour, data.minutes, data.seconds)
        }
        return str;
    },


    /**
     * 是否是同一天
     * @param onetime 要比较的时间戳
     * @param twotime 要比较的时间戳
     * @returns boolean
     */
    time_isSampleDay(onetime, twotime) {
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

}

module.exports = AbyUtils;