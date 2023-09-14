import { error, log, sys, warn } from "cc";
import { WXSdk } from "../../platform/weixin/WXSdk";

/** 日志类型 */
export enum LogType {
    /** 网络层日志 */
    Net = 1,
    /** Crotroll/Server层日志 */
    Model = 2,
    /** 数据缓存层日志 */
    Cache = 4,
    /** 视图层日志 */
    View = 8,
    /** 平台日志 */
    Platform = 16,
    /** 标准日志 */
    Normal = 32,
    /** 警告 */
    Warn = 64,
    /** 支付 */
    Pay = 128,
}

/** 日志文本颜色 */
export enum LogColor {
    /** 蓝色 */
    Blue = "color:#0000FF;",
    /** 栗色 */
    Maroon = "color:#800000;",
    /** 橙色 */
    Orange = "color:#FF4700;",
    /** 橙红色 */
    OrangeRed = "color:#FF4500;",
    /** 白色 */
    White = "color:#000000;",
    /** 灰色 */
    Gray = "color:gray;",
    /** 猩红 */
    Crimson = "color:#DC143C;",
}

let names = {
    "1": "【Net】",
    "2": "【Model】",
    "4": "【Cache】",
    "8": "【View】",
    "16": "【Platform】",
    "32": "【标准】",
    "64": "【Warn】",
    "128": "【Pay】"
}
/** 日志颜色配置 */
let LogColorConf = {
    [LogType.Normal]: LogColor.White,
    [LogType.Platform]: LogColor.Gray,
    [LogType.Net]: LogColor.Orange,
    [LogType.Model]: LogColor.OrangeRed,
    [LogType.Cache]: LogColor.Blue,
    [LogType.View]: LogColor.Maroon,
    [LogType.Pay]: LogColor.Crimson,
}


/**
 * Name = Logger 日志管理
 * URL = db://assets/framework/log/Logger.ts
 * Time = Thu Apr 07 2022 15:30:42 GMT+0800 (中国标准时间)
 * 
 * Logger.log("默认标准日志");
 * Logger.logPlatform("灰色配置日志");
 * Logger.logNet("橙色网络日志");
 * Logger.logModel("橙红色数据日志");
 * Logger.logCache("蓝色业务日志");
 * Logger.logView("栗色视图日志");
 */


export class Logger {
    static realLog = console.log || log;
    static realWarn = console.warn || warn;
    static realTable = console.table || Logger.realLog;
    static realError = console.error || error;

    static tags: number = 0;

    /** 是否微信平台 */
    static isWxPlatForm: boolean = (sys.platform == sys.Platform.WECHAT_GAME);
    /** 上报的日志信息队列 */
    static ReportLogList: Array<any> = [];
    /** 上报的警告信息队列 */
    static ReportWarnList: Array<any> = [];
    /** 上报的错误信息队列 */
    static ReportErrorList: Array<any> = [];
    /** 上报配置 */
    static ReportConf = {
        /** 上报的基础信息 */
        BaseInfo: "",
        /** 上报的时间间隔 毫秒*/
        TimeSpance: 30000,
        /** 上次上报的时间 */
        LastTime: 0,
        /** 每次上报最大条数 */
        MaxSize: 1,
        /** 是否可以上报 */
        isCanReport: true,
    }

    /** 日志开启开关 */
    static open() {
        // @ts-ignore
        Logger.init();
    }
    /** 初始化 */
    static init(): void {

        /** 按需注释 */
        Logger.tags =
            // LogType.Net |
            LogType.Model |
            LogType.Cache |
            LogType.View |
            LogType.Platform |
            LogType.Normal |
            LogType.Pay;

        //重载console.log
        console.log = Logger.log;
        //重载console.warn
        console.warn = Logger.warn;
        //重载console.error
        console.error = Logger.error;
    }



    /** 
     * 设置显示的日志类型，默认值为不显示任何类型日志
     * @example
     *Logger.setTags(LogType.View|LogType.Cache)
     */
    static setTags(tag: LogType = null!) {
        if (tag) {
            Logger.tags = tag;
        }
    }
    /**
     * 记录开始计时
     * @param describe  标题描述
     * @example
        Logger.start();
        ...
        省略N行代码
        ...
        Logger.end();
     */
    static start(describe: string = "Time"): void {
        console.time(describe);
    }

    /**
     * 打印范围内时间消耗
     * @param describe  标题描述
     * @example
        Logger.start();
        ...
        省略N行代码
        ...
        Logger.end();
     */
    static end(describe: string = "Time"): void {
        console.timeEnd(describe);
    }

    /**
     * 打印表格
     * @param msg       日志消息
     * @param describe  标题描述
     * @example
        let object:any = {uid:1000, name:"oops"};
        Logger.table(object);
     */
    static table(...args: any[]) {
        if (!Logger.isOpen(LogType.Normal)) {
            return;
        }
        Logger.realTable.apply(Logger.realTable, arguments);
    }

    /**
     * 打印标准日志(console.log的覆盖)
     * @param msg       日志消息
     */
    static log(...args: any[]) {
        // 标记没有打开，不打印该日志
        if (!Logger.isOpen(LogType.Normal)) {
            return;
        }
        let stackIndex = 3;
        let tag = null;
        let color = null;
        let regix = "%c%s%s:";
        if (arguments.length > 0) {
            tag = Array.prototype.shift.call(arguments);
            color = LogColorConf[tag];
            if (arguments.length == 0) {
                regix = "%c%s%s:";
            } else if (arguments.length == 1) {

            } else if (arguments.length >= 2) {
                regix = "%c%s%s:";
            };
        }
        let startIndex = 2;
        let currData = Logger.getDateString();
        let stackStr = Logger.stack(stackIndex);
        if (color != null) {
            Array.prototype.unshift.call(arguments, regix, color, currData[0], stackStr);
            startIndex = 4;
        } else {
            Array.prototype.unshift.call(arguments, currData[0], stackStr, tag);
        }
        Logger.reportLog(LogType.Normal, stackStr, currData, Array.prototype.slice.call(arguments, startIndex, arguments.length));
        Logger.realLog.apply(Logger.realLog, arguments);
    }
    /**
     * 警告(console.warn的覆盖)
     * @param args 
     * @returns 
     */
    static warn(...args: any[]) {
        let stackIndex = 3;
        let tag = null;
        let color = null;
        let regix = "%c%s%s:";
        if (arguments.length > 0) {
            tag = Array.prototype.shift.call(arguments);
            color = LogColorConf[tag];
            if (arguments.length == 0) {
                regix = "%c%s%s:";
            } else if (arguments.length == 1) {

            } else if (arguments.length >= 2) {
                regix = "%c%s%s:";
            };
        }
        let startIndex = 2;
        let currData = Logger.getDateString();
        let stackStr = Logger.stack(stackIndex);
        if (color != null) {
            Array.prototype.unshift.call(arguments, regix, color, currData[0], stackStr);
            startIndex = 4;
        } else {
            Array.prototype.unshift.call(arguments, currData[0], stackStr, tag);
        }
        Logger.reportLog(LogType.Warn, stackStr, currData, Array.prototype.slice.call(arguments, startIndex, arguments.length));

        Logger.realWarn.apply(Logger.realWarn, arguments);
    }

    /**
     * 错误(console.error的覆盖)
     * @param args 
     * @returns 
     */
    static error(...args: any[]) {
        let stackIndex = 3;
        let tag = null;
        let color = null;
        let regix = "%c%s%s:";
        if (arguments.length > 0) {
            tag = Array.prototype.shift.call(arguments);
            color = LogColorConf[tag];
            if (arguments.length == 0) {
                regix = "%c%s%s:";
            } else if (arguments.length == 1) {

            } else if (arguments.length >= 2) {
                regix = "%c%s%s:";
            };
        }
        let currData = Logger.getDateString();
        let stackStr = Logger.stack(stackIndex);
        let startIndex = 2;
        if (color != null) {
            Array.prototype.unshift.call(arguments, regix, color, currData[0], stackStr);
            startIndex = 4;
        } else {
            Array.prototype.unshift.call(arguments, currData[0], stackStr, tag);
        }
        Logger.reportLog("[Error]", stackStr, currData, Array.prototype.slice.call(arguments, startIndex, arguments.length));
        Logger.realError.apply(Logger.realError, arguments);
    }



    /**
     * 打印网络层日志
     */
    static logNet(...args: any[]) {
        let stackIndex = Array.prototype.shift.call(arguments);
        if (typeof (stackIndex) != "number") {
            Array.prototype.unshift.call(arguments, stackIndex);
            stackIndex = 4;
        }
        Array.prototype.unshift.call(arguments, LogType.Net, LogColorConf[LogType.Net], stackIndex);
        Logger.print.apply(Logger.logNet, arguments);
    }

    /**
     * 打印数据层日志
     */
    static logModel(...args: any[]) {
        let stackIndex = Array.prototype.shift.call(arguments);
        if (typeof (stackIndex) != "number") {
            Array.prototype.unshift.call(arguments, stackIndex);
            stackIndex = 4;
        }
        Array.prototype.unshift.call(arguments, LogType.Model, LogColorConf[LogType.Model], stackIndex);
        Logger.print.apply(Logger.logModel, arguments);
    }

    /**
     * 打印View日志
     */
    static logView(...args: any[]) {
        let stackIndex = Array.prototype.shift.call(arguments);
        if (typeof (stackIndex) != "number") {
            Array.prototype.unshift.call(arguments, stackIndex);
            stackIndex = 4;
        }
        Array.prototype.unshift.call(arguments, LogType.View, LogColorConf[LogType.View], stackIndex);
        Logger.print.apply(Logger.logView, arguments);
    }

    /**
     * 打印Cache层日志
     */
    static logCache(...args: any[]) {
        let stackIndex = Array.prototype.shift.call(arguments);
        if (typeof (stackIndex) != "number") {
            Array.prototype.unshift.call(arguments, stackIndex);
            stackIndex = 4;
        }
        Array.prototype.unshift.call(arguments, LogType.Cache, LogColorConf[LogType.Cache], stackIndex);
        Logger.print.apply(Logger.logCache, arguments);
    }


    /** 打印平台日志 */
    static logPlatform(...args: any[]) {
        let stackIndex = Array.prototype.shift.call(arguments);
        if (typeof (stackIndex) != "number") {
            Array.prototype.unshift.call(arguments, stackIndex);
            stackIndex = 4;
        }
        Array.prototype.unshift.call(arguments, LogType.Platform, LogColorConf[LogType.Platform], stackIndex);
        Logger.print.apply(Logger.logPlatform, arguments);
    }

    /** 打印支付日志 */
    static logPay(...args: any[]) {
        let stackIndex = Array.prototype.shift.call(arguments);
        if (typeof (stackIndex) != "number") {
            Array.prototype.unshift.call(arguments, stackIndex);
            stackIndex = 4;
        }
        Array.prototype.unshift.call(arguments, LogType.Pay, LogColorConf[LogType.Pay], stackIndex);
        Logger.print.apply(Logger.logPay, arguments);
    }

    static isOpen(tag: LogType): boolean {
        return (Logger.tags & tag) != 0;
    }
    /**
     * 输出日志,直接调用LogNet调用的
     * @param tag       日志类型
     * @param color     日志文本颜色
     * @param stackNum  日志深度
     * @param msg       日志内容
     */
    static print() {
        if (arguments.length < 3) {
            return;
        }
        let logType = Array.prototype.shift.call(arguments);
        let color = Array.prototype.shift.call(arguments);
        let stackNum = Array.prototype.shift.call(arguments);
        // 标记没有打开，不打印该日志
        if (!Logger.isOpen(logType)) {
            return;
        }
        let tag = names[logType];
        let stackIndex = (isNaN(Number(stackNum)) == false ? Number(stackNum) : 4);

        let regix = "%c%s%s:";

        if (arguments.length == 0) {
            regix = "%c%s%s:";
        } else if (arguments.length == 1) {

        } else if (arguments.length >= 2) {
            regix = "%c%s%s:";
        };
        let startIndex = 2;
        let currData = Logger.getDateString();
        let stackStr = Logger.stack(stackIndex);

        if (color != null) {
            Array.prototype.unshift.call(arguments, regix, color, currData[0], stackStr);
            startIndex = 4;
        } else {
            Array.prototype.unshift.call(arguments, currData[0], stackStr);
        }
        Logger.reportLog(logType, stackStr, currData, Array.prototype.slice.call(arguments, startIndex, arguments.length));

        Logger.realLog.apply(this, arguments);
    }
    /** 打印深度 */
    static stack(index: number): string {
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
    /** 获取日期时间 */
    static getDateString(): Array<any> {
        let d = new Date();
        let str = d.getHours().toString();
        let timeStr = "";
        timeStr += (str.length == 1 ? "0" + str : str) + ":";
        str = d.getMinutes().toString();
        timeStr += (str.length == 1 ? "0" + str : str) + ":";
        str = d.getSeconds().toString();
        timeStr += (str.length == 1 ? "0" + str : str) + ":";
        str = d.getMilliseconds().toString();
        if (str.length == 1) str = "00" + str;
        if (str.length == 2) str = "0" + str;
        timeStr += str;

        timeStr = "[" + timeStr + "]";
        return [timeStr, d.getTime()];
    }
    /** 上报日志信息 */
    static reportLog(logType, stackStr, currData, ...agrgs: any[]) {
        //只上报支付相关
        if (Logger.ReportConf.isCanReport == false || logType != LogType.Pay) {
            return;
        }

        let tag = names[logType];
        let time = currData[1];
        let timeStr = currData[0];
        arguments[0] = tag;
        arguments[2] = timeStr;

        arguments[3] = Logger.filterObject(arguments[3]);
        let str = Array.prototype.join.call(arguments);
        str = String.prototype.replace.call(str, /\,/g, "");

        Logger.ReportLogList.push(str);

        if (Logger.ReportConf.LastTime == 0) {
            Logger.ReportConf.LastTime = time;
            return;
        }
        if (arguments.length <= 3) {
            return;
        }

        if ((time - Logger.ReportConf.LastTime) >= (Logger.ReportConf.TimeSpance) || Logger.ReportLogList.length >= Logger.ReportConf.MaxSize) {
            while (Logger.ReportLogList.length > 0) {
                let max = (Logger.ReportLogList.length >= Logger.ReportConf.MaxSize ? Logger.ReportConf.MaxSize : Logger.ReportLogList.length);
                let list = Logger.ReportLogList.splice(0, max);
                // Logger.realLog("要开始上报了:", list);
                list.unshift(Logger.ReportConf.BaseInfo);

                if (Logger.isWxPlatForm) {
                    let realtimeLogManager = WXSdk.instance.getRealtimeLogManager();
                    if (realtimeLogManager) {
                        // Logger.realLog("日志上报:", list)
                        realtimeLogManager.info(list)
                    }
                }

            }
            Logger.ReportConf.LastTime = time;
        }
    }
    /**
     * 过滤对象
     * @param agrgs 
     */
    static filterObject(...args: any[]) {
        if (typeof (args) != "object") {
            return args;
        }
        for (let key in args) {
            if (typeof (args[key]) == "object") {
                if (args[key] instanceof Object) {
                    try {
                        args[key] = JSON.stringify(args[key]);
                    } catch (error) {

                    }
                }

            }
        }
        return args;
    }
}


