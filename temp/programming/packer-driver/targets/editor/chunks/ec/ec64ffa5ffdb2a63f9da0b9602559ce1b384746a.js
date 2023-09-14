System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, error, log, sys, warn, WXSdk, Logger, _crd, LogType, LogColor, names, LogColorConf;

  function _reportPossibleCrUseOfWXSdk(extras) {
    _reporterNs.report("WXSdk", "../../platform/weixin/WXSdk", _context.meta, extras);
  }

  _export({
    Logger: void 0,
    LogType: void 0,
    LogColor: void 0
  });

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      error = _cc.error;
      log = _cc.log;
      sys = _cc.sys;
      warn = _cc.warn;
    }, function (_unresolved_2) {
      WXSdk = _unresolved_2.WXSdk;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "79a44hR9nRKE5qDKgss3EHr", "Logger", undefined);

      __checkObsolete__(['error', 'log', 'sys', 'warn']);

      (function (LogType) {
        LogType[LogType["Net"] = 1] = "Net";
        LogType[LogType["Model"] = 2] = "Model";
        LogType[LogType["Cache"] = 4] = "Cache";
        LogType[LogType["View"] = 8] = "View";
        LogType[LogType["Platform"] = 16] = "Platform";
        LogType[LogType["Normal"] = 32] = "Normal";
        LogType[LogType["Warn"] = 64] = "Warn";
        LogType[LogType["Pay"] = 128] = "Pay";
      })(LogType || _export("LogType", LogType = {}));

      (function (LogColor) {
        LogColor["Blue"] = "color:#0000FF;";
        LogColor["Maroon"] = "color:#800000;";
        LogColor["Orange"] = "color:#FF4700;";
        LogColor["OrangeRed"] = "color:#FF4500;";
        LogColor["White"] = "color:#000000;";
        LogColor["Gray"] = "color:gray;";
        LogColor["Crimson"] = "color:#DC143C;";
      })(LogColor || _export("LogColor", LogColor = {}));

      names = {
        "1": "【Net】",
        "2": "【Model】",
        "4": "【Cache】",
        "8": "【View】",
        "16": "【Platform】",
        "32": "【标准】",
        "64": "【Warn】",
        "128": "【Pay】"
      };
      /** 日志颜色配置 */

      LogColorConf = {
        [LogType.Normal]: LogColor.White,
        [LogType.Platform]: LogColor.Gray,
        [LogType.Net]: LogColor.Orange,
        [LogType.Model]: LogColor.OrangeRed,
        [LogType.Cache]: LogColor.Blue,
        [LogType.View]: LogColor.Maroon,
        [LogType.Pay]: LogColor.Crimson
      };
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

      _export("Logger", Logger = class Logger {
        /** 是否微信平台 */

        /** 上报的日志信息队列 */

        /** 上报的警告信息队列 */

        /** 上报的错误信息队列 */

        /** 上报配置 */

        /** 日志开启开关 */
        static open() {
          // @ts-ignore
          Logger.init();
        }
        /** 初始化 */


        static init() {
          /** 按需注释 */
          Logger.tags = // LogType.Net |
          LogType.Model | LogType.Cache | LogType.View | LogType.Platform | LogType.Normal | LogType.Pay; //重载console.log

          console.log = Logger.log; //重载console.warn

          console.warn = Logger.warn; //重载console.error

          console.error = Logger.error;
        }
        /** 
         * 设置显示的日志类型，默认值为不显示任何类型日志
         * @example
         *Logger.setTags(LogType.View|LogType.Cache)
         */


        static setTags(tag = null) {
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


        static start(describe = "Time") {
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


        static end(describe = "Time") {
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


        static table(...args) {
          if (!Logger.isOpen(LogType.Normal)) {
            return;
          }

          Logger.realTable.apply(Logger.realTable, arguments);
        }
        /**
         * 打印标准日志(console.log的覆盖)
         * @param msg       日志消息
         */


        static log(...args) {
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
            } else if (arguments.length == 1) {} else if (arguments.length >= 2) {
              regix = "%c%s%s:";
            }

            ;
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


        static warn(...args) {
          let stackIndex = 3;
          let tag = null;
          let color = null;
          let regix = "%c%s%s:";

          if (arguments.length > 0) {
            tag = Array.prototype.shift.call(arguments);
            color = LogColorConf[tag];

            if (arguments.length == 0) {
              regix = "%c%s%s:";
            } else if (arguments.length == 1) {} else if (arguments.length >= 2) {
              regix = "%c%s%s:";
            }

            ;
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


        static error(...args) {
          let stackIndex = 3;
          let tag = null;
          let color = null;
          let regix = "%c%s%s:";

          if (arguments.length > 0) {
            tag = Array.prototype.shift.call(arguments);
            color = LogColorConf[tag];

            if (arguments.length == 0) {
              regix = "%c%s%s:";
            } else if (arguments.length == 1) {} else if (arguments.length >= 2) {
              regix = "%c%s%s:";
            }

            ;
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


        static logNet(...args) {
          let stackIndex = Array.prototype.shift.call(arguments);

          if (typeof stackIndex != "number") {
            Array.prototype.unshift.call(arguments, stackIndex);
            stackIndex = 4;
          }

          Array.prototype.unshift.call(arguments, LogType.Net, LogColorConf[LogType.Net], stackIndex);
          Logger.print.apply(Logger.logNet, arguments);
        }
        /**
         * 打印数据层日志
         */


        static logModel(...args) {
          let stackIndex = Array.prototype.shift.call(arguments);

          if (typeof stackIndex != "number") {
            Array.prototype.unshift.call(arguments, stackIndex);
            stackIndex = 4;
          }

          Array.prototype.unshift.call(arguments, LogType.Model, LogColorConf[LogType.Model], stackIndex);
          Logger.print.apply(Logger.logModel, arguments);
        }
        /**
         * 打印View日志
         */


        static logView(...args) {
          let stackIndex = Array.prototype.shift.call(arguments);

          if (typeof stackIndex != "number") {
            Array.prototype.unshift.call(arguments, stackIndex);
            stackIndex = 4;
          }

          Array.prototype.unshift.call(arguments, LogType.View, LogColorConf[LogType.View], stackIndex);
          Logger.print.apply(Logger.logView, arguments);
        }
        /**
         * 打印Cache层日志
         */


        static logCache(...args) {
          let stackIndex = Array.prototype.shift.call(arguments);

          if (typeof stackIndex != "number") {
            Array.prototype.unshift.call(arguments, stackIndex);
            stackIndex = 4;
          }

          Array.prototype.unshift.call(arguments, LogType.Cache, LogColorConf[LogType.Cache], stackIndex);
          Logger.print.apply(Logger.logCache, arguments);
        }
        /** 打印平台日志 */


        static logPlatform(...args) {
          let stackIndex = Array.prototype.shift.call(arguments);

          if (typeof stackIndex != "number") {
            Array.prototype.unshift.call(arguments, stackIndex);
            stackIndex = 4;
          }

          Array.prototype.unshift.call(arguments, LogType.Platform, LogColorConf[LogType.Platform], stackIndex);
          Logger.print.apply(Logger.logPlatform, arguments);
        }
        /** 打印支付日志 */


        static logPay(...args) {
          let stackIndex = Array.prototype.shift.call(arguments);

          if (typeof stackIndex != "number") {
            Array.prototype.unshift.call(arguments, stackIndex);
            stackIndex = 4;
          }

          Array.prototype.unshift.call(arguments, LogType.Pay, LogColorConf[LogType.Pay], stackIndex);
          Logger.print.apply(Logger.logPay, arguments);
        }

        static isOpen(tag) {
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
          let stackNum = Array.prototype.shift.call(arguments); // 标记没有打开，不打印该日志

          if (!Logger.isOpen(logType)) {
            return;
          }

          let tag = names[logType];
          let stackIndex = isNaN(Number(stackNum)) == false ? Number(stackNum) : 4;
          let regix = "%c%s%s:";

          if (arguments.length == 0) {
            regix = "%c%s%s:";
          } else if (arguments.length == 1) {} else if (arguments.length >= 2) {
            regix = "%c%s%s:";
          }

          ;
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


        static stack(index) {
          let e = new Error();
          let lines = e.stack.split("\n");
          let result = [];
          lines.forEach(line => {
            line = line.substring(7);
            let lineBreak = line.split(" ");

            if (lineBreak.length < 2) {
              result.push(lineBreak[0]);
            } else {
              result.push({
                [lineBreak[0]]: lineBreak[1]
              });
            }
          });
          let list = [];
          let splitList = [];

          if (index < result.length - 1) {
            let value;

            for (let a in result[index]) {
              let splitList = a.split(".");

              if (splitList.length == 2) {
                list = splitList.concat();
              } else {
                value = result[index][a];
                let start = value.lastIndexOf("/");
                let end = value.lastIndexOf(".");

                if (start > -1 && end > -1) {
                  let r = value.substring(start + 1, end);
                  list.push(r);
                } else {
                  list.push(value);
                }
              }
            }
          }

          if (list.length == 1) {
            return "[" + list[0] + ".ts]";
          } else if (list.length == 2) {
            return "[" + list[0] + ".ts->" + list[1] + "]";
          }

          return "";
        }
        /** 获取日期时间 */


        static getDateString() {
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


        static reportLog(logType, stackStr, currData, ...agrgs) {
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

          if (time - Logger.ReportConf.LastTime >= Logger.ReportConf.TimeSpance || Logger.ReportLogList.length >= Logger.ReportConf.MaxSize) {
            while (Logger.ReportLogList.length > 0) {
              let max = Logger.ReportLogList.length >= Logger.ReportConf.MaxSize ? Logger.ReportConf.MaxSize : Logger.ReportLogList.length;
              let list = Logger.ReportLogList.splice(0, max); // Logger.realLog("要开始上报了:", list);

              list.unshift(Logger.ReportConf.BaseInfo);

              if (Logger.isWxPlatForm) {
                let realtimeLogManager = (_crd && WXSdk === void 0 ? (_reportPossibleCrUseOfWXSdk({
                  error: Error()
                }), WXSdk) : WXSdk).instance.getRealtimeLogManager();

                if (realtimeLogManager) {
                  // Logger.realLog("日志上报:", list)
                  realtimeLogManager.info(list);
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


        static filterObject(...args) {
          if (typeof args != "object") {
            return args;
          }

          for (let key in args) {
            if (typeof args[key] == "object") {
              if (args[key] instanceof Object) {
                try {
                  args[key] = JSON.stringify(args[key]);
                } catch (error) {}
              }
            }
          }

          return args;
        }

      });

      Logger.realLog = console.log || log;
      Logger.realWarn = console.warn || warn;
      Logger.realTable = console.table || Logger.realLog;
      Logger.realError = console.error || error;
      Logger.tags = 0;
      Logger.isWxPlatForm = sys.platform == sys.Platform.WECHAT_GAME;
      Logger.ReportLogList = [];
      Logger.ReportWarnList = [];
      Logger.ReportErrorList = [];
      Logger.ReportConf = {
        /** 上报的基础信息 */
        BaseInfo: "",

        /** 上报的时间间隔 毫秒*/
        TimeSpance: 30000,

        /** 上次上报的时间 */
        LastTime: 0,

        /** 每次上报最大条数 */
        MaxSize: 1,

        /** 是否可以上报 */
        isCanReport: true
      };

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ec64ffa5ffdb2a63f9da0b9602559ce1b384746a.js.map