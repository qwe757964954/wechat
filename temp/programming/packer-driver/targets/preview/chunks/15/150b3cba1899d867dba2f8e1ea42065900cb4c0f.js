System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Color, error, ImageAsset, Layers, Node, ResolutionPolicy, screen, Sprite, SpriteFrame, sys, Texture2D, UITransform, Vec2, Vec3, view, GameConfig, GameTxt, Logger, _crd, UNIT_TYPE, Utils;

  function _reportPossibleCrUseOfGameConfig(extras) {
    _reporterNs.report("GameConfig", "../config/GameConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameTxt(extras) {
    _reporterNs.report("GameTxt", "../config/GameTxt", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLogger(extras) {
    _reporterNs.report("Logger", "./log/Logger", _context.meta, extras);
  }

  _export("Utils", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Color = _cc.Color;
      error = _cc.error;
      ImageAsset = _cc.ImageAsset;
      Layers = _cc.Layers;
      Node = _cc.Node;
      ResolutionPolicy = _cc.ResolutionPolicy;
      screen = _cc.screen;
      Sprite = _cc.Sprite;
      SpriteFrame = _cc.SpriteFrame;
      sys = _cc.sys;
      Texture2D = _cc.Texture2D;
      UITransform = _cc.UITransform;
      Vec2 = _cc.Vec2;
      Vec3 = _cc.Vec3;
      view = _cc.view;
    }, function (_unresolved_2) {
      GameConfig = _unresolved_2.GameConfig;
    }, function (_unresolved_3) {
      GameTxt = _unresolved_3.GameTxt;
    }, function (_unresolved_4) {
      Logger = _unresolved_4.Logger;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d3cc3C9jyhOcrHBg3ldfgza", "Utils", undefined);

      __checkObsolete__(['Color', 'error', 'ImageAsset', 'Layers', 'Node', 'ResolutionPolicy', 'screen', 'Sprite', 'SpriteFrame', 'sys', 'Texture2D', 'UITransform', 'Vec2', 'Vec3', 'view']);

      /**
       * Name = Utils
       * URL = db://assets/framework/Utils.ts
       * Time = Fri Apr 08 2022 14:34:14 GMT+0800 (中国标准时间)
       * Author = xueya
       *
       */
      //货币单位
      UNIT_TYPE = {
        NONE: 0,
        K: 1,
        M: 2,
        B: 3,
        T: 4
      };

      (function (_Utils) {
        function clone(data) {
          if (data == null) {
            return null;
          }

          if (typeof data === 'symbol') {
            //Symbol 暂未处理
            console.log("暂未处理symbol", data);
            return data;
          } else if (typeof data != 'object') {
            //基本类型
            return data;
          } else if (data instanceof Array) {
            //Array
            var temp = [];
            data.forEach((item, key) => {
              if (item == null || item == undefined) {
                temp[key] = null;
              } else {
                temp[key] = clone(item);
              }
            });
            return temp;
          } else if (data instanceof Object) {
            //Object
            var res = {};

            for (var key in data) {
              if (data[key] == null || data[key] == undefined) {
                res[key] = null;
              } else {
                res[key] = clone(data[key]);
              }
            }

            return res;
          } else {
            //系统对象、自定义对象
            if (data.constructor) {
              return new data.constructor(data);
            } else {
              console.log("错误", typeof data, data);
              return null;
            }
          }
        }

        _Utils.clone = clone;

        function dump() {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          if (args.length < 0) {
            return;
          }

          var backLog = (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
            error: Error()
          }), Logger) : Logger).realLog;
          var backContent = backLog;
          var color = "color:#ee7700;";
          var deLog = stack(3) + stack(4);
          backLog.call(null, "%c%s%s:", color, (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
            error: Error()
          }), Logger) : Logger).getDateString(), deLog);

          if (sys.platform == sys.Platform.DESKTOP_BROWSER) {
            backContent = (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
              error: Error()
            }), Logger) : Logger).realTable;
          }

          for (var i = 0; i < args.length; i++) {
            var type = args[i] ? typeof args[i] : null;

            if (args[i] && typeof args[i] == "object") {
              backContent.call(null, args[i]);
            } else {
              backContent.call(null, args[i]);
            }
          }
        }

        _Utils.dump = dump;

        function stack(index) {
          var e = new Error();
          var lines = e.stack.split("\n");
          var result = [];
          lines.forEach(line => {
            line = line.substring(7);
            var lineBreak = line.split(" ");

            if (lineBreak.length < 2) {
              result.push(lineBreak[0]);
            } else {
              result.push({
                [lineBreak[0]]: lineBreak[1]
              });
            }
          });
          var list = [];
          var splitList = [];

          if (index < result.length - 1) {
            var value;

            for (var a in result[index]) {
              var _splitList = a.split(".");

              if (_splitList.length == 2) {
                list = _splitList.concat();
              } else {
                value = result[index][a];
                var start = value.lastIndexOf("/");
                var end = value.lastIndexOf(".");

                if (start > -1 && end > -1) {
                  var r = value.substring(start + 1, end);
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

        _Utils.stack = stack;

        function handler(obj, func) {
          return function () {
            for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
              args[_key2] = arguments[_key2];
            }

            return func.call(obj, ...args);
          };
        }

        _Utils.handler = handler;

        function isNull(param) {
          if (typeof param == "number" && isNaN(param) == false) {
            return false;
          }

          if (param != null && param != undefined) {
            return false;
          }

          return true;
        }

        _Utils.isNull = isNull;

        function isNotNull() {
          var res = true;

          for (var i = 0; i < arguments.length; i++) {
            if (isNull(i < 0 || arguments.length <= i ? undefined : arguments[i])) {
              return false;
            }
          }

          return res;
        }

        _Utils.isNotNull = isNotNull;

        function nullToDefault(param, del) {
          if (del === void 0) {
            del = null;
          }

          if (isNull(param)) {
            return del;
          }

          return param;
        }

        _Utils.nullToDefault = nullToDefault;

        function mergeArray() {
          var params = new Array();
          var objectNum = 0;
          var formList = [];

          for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
            args[_key3] = arguments[_key3];
          }

          [].push.apply(formList, args);

          if (formList.length > 0) {
            formList.forEach((item, index) => {
              if (item instanceof Array) {
                objectNum = objectNum + 1;

                for (var i = 0; i < item.length; i++) {
                  var value = item[i];
                  params.push(value);
                }
              }
            });
          }

          if (objectNum == 0) {
            return params;
          }

          return params;
        }

        _Utils.mergeArray = mergeArray;

        function mergeObject() {
          var params = {};
          var objectNum = 0;
          var formList = [];

          for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
            args[_key4] = arguments[_key4];
          }

          [].push.apply(formList, args);

          if (formList.length > 0) {
            formList.forEach((item, index) => {
              if (item && typeof item == "object") {
                objectNum = objectNum + 1;

                for (var key in item) {
                  if (Object.prototype.hasOwnProperty.call(item, key)) {
                    var value = item[key];

                    if (value != null && params[key] != null) {
                      //注意：null的类型为object
                      if (typeof value == "object" && typeof params[key] == "object") {
                        value = mergeObject(params[key], value);
                      }
                    }

                    params[key] = value;
                  }
                }
              }
            });
          }

          if (objectNum == 0) {
            return {};
          }

          return params;
        }

        _Utils.mergeObject = mergeObject;

        function mergeObjectSelf() {
          var params = null;
          var objectNum = 0;
          var formList = [];

          for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
            args[_key5] = arguments[_key5];
          }

          [].push.apply(formList, args);

          if (formList.length > 0) {
            formList.forEach((item, index) => {
              if (item && typeof item == "object") {
                objectNum = objectNum + 1;

                if (!params) {
                  params = item;
                }

                for (var key in item) {
                  if (Object.prototype.hasOwnProperty.call(item, key)) {
                    var value = item[key];

                    if (value != null && params[key] != null) {
                      //注意：null的类型为object
                      if (typeof value == "object" && typeof params[key] == "object") {
                        value = mergeObject(params[key], value);
                      }
                    }

                    params[key] = value;
                  }
                }
              }
            });
          }

          if (objectNum == 0) {
            return {};
          }

          return params;
        }

        _Utils.mergeObjectSelf = mergeObjectSelf;

        function number_mod(a, b) {
          var c = Math.abs(a) % Math.abs(b);

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

        _Utils.number_mod = number_mod;

        function number_formatToHex(param) {
          param = number_valueOf(param);
          var str = param.toString(16);
          return "0x" + str;
        }

        _Utils.number_formatToHex = number_formatToHex;

        function number_valueOf(param, d) {
          if (d === void 0) {
            d = 0;
          }

          var num = Number(param);

          if (isNaN(num)) {
            return d;
          }

          return num;
        }

        _Utils.number_valueOf = number_valueOf;

        function number_textOf(param, retainNum) {
          //传入一个需要保留的位数：
          if (!param) {
            return "";
          }

          var numLen = param.toString().length;
          var numString;

          if (numLen >= 3 && numLen <= 5) {
            numString = param.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1,');
          } else if (numLen > 5 && numLen <= 8) {
            var a = Math.floor(param / 10000);
            var b = Math.floor(param % 10000 / Math.pow(10, 4 - retainNum));

            if (retainNum == 0) {
              numString = a + "\u4E07";
            } else {
              numString = a + "." + b + "\u4E07";
            }
          } else if (numLen > 8) {
            var _a = Math.floor(param / 100000000);

            var _b2 = Math.floor(param % 100000000 / Math.pow(10, 8 - retainNum));

            if (retainNum == 0) {
              numString = _a + "\u4EBF";
            } else {
              numString = _a + "." + _b2 + "\u4EBF";
            }
          }

          return numString;
        }

        _Utils.number_textOf = number_textOf;

        function getFormatNumber(param, dot) {
          if (dot === void 0) {
            dot = 2;
          }

          var _k = 10000; //K

          var _m = 1000000; //M

          var _b = 1000000000; //B

          var _t = 1000000000000; //T

          param = param || 0;
          var originNum = param;
          var b = 0 > param;

          var __number = Math.abs(param);

          var u = UNIT_TYPE.NONE;

          if (__number >= _t) {
            __number = __number / _t;
            u = UNIT_TYPE.T;
          } else if (__number >= _b) {
            __number = __number / _b;
            u = UNIT_TYPE.B;
          } else if (__number >= _m) {
            __number = __number / _m;
            u = UNIT_TYPE.M;
          } else if (__number >= _k) {
            __number = __number / _k;
            u = UNIT_TYPE.K;
          }

          if (u >= UNIT_TYPE.NONE) {
            var ndot = Math.pow(10, dot);
            var ndecimal = 1 / ndot; //修正小数精度问题

            __number = __number + 0.000001;
            __number = __number - __number % ndecimal;

            if (originNum > 0 && originNum < 0.01) {
              __number = 0.01;
            }
          }
          /** 修正高精度数字不太精准问题 */


          var s = __number.toString();

          var biaodian_index = s.indexOf(".");

          if (biaodian_index > 0) {
            s = s.substring(0, biaodian_index + dot + 1);
          }

          switch (u) {
            case UNIT_TYPE.K:
              s = s + (_crd && GameTxt === void 0 ? (_reportPossibleCrUseOfGameTxt({
                error: Error()
              }), GameTxt) : GameTxt).unit_k;
              break;

            case UNIT_TYPE.M:
              s = s + (_crd && GameTxt === void 0 ? (_reportPossibleCrUseOfGameTxt({
                error: Error()
              }), GameTxt) : GameTxt).unit_m;
              break;

            case UNIT_TYPE.B:
              s = s + (_crd && GameTxt === void 0 ? (_reportPossibleCrUseOfGameTxt({
                error: Error()
              }), GameTxt) : GameTxt).unit_b;
              break;

            case UNIT_TYPE.T:
              s = s + (_crd && GameTxt === void 0 ? (_reportPossibleCrUseOfGameTxt({
                error: Error()
              }), GameTxt) : GameTxt).unit_t;
              break;

            default:
              break;
          }

          if (b) {
            s = "-" + s;
          }

          return s;
        }

        _Utils.getFormatNumber = getFormatNumber;

        function string_matchStr(num, letter, isShowPN) {
          if (num === void 0) {
            num = null;
          }

          if (letter === void 0) {
            letter = ",";
          }

          if (isShowPN === void 0) {
            isShowPN = true;
          }

          num = Number(num);

          if (num == null || num == undefined || isNaN(num)) {
            return null;
          } //正或负


          var PorN = num >= 0;
          var appendStr = "";
          var tempNum = Math.abs(num);
          var tempstr = "";

          while (tempNum > 0) {
            if (tempNum < 1000) {
              tempstr = tempNum % 1000 + "";

              if (appendStr.length > 0) {
                appendStr = tempstr + letter + appendStr;
                tempNum = Math.floor(tempNum / 1000);
              } else {
                appendStr = tempstr + "" + appendStr;
                tempNum = Math.floor(tempNum / 1000);
              }
            } else {
              if (appendStr.length == 0) {
                tempstr = 1000 + tempNum % 1000 + "";
                appendStr = appendStr + "" + tempstr.slice(1, 4);
                tempNum = Math.floor(tempNum / 1000);
              } else {
                tempstr = 1000 + tempNum % 1000 + "";
                appendStr = tempstr.slice(1, 4) + letter + appendStr;
                tempNum = Math.floor(tempNum / 1000);
              }
            }
          }

          if (appendStr.length == 0) {
            appendStr = tempNum + "";
          }

          if (isShowPN) {
            if (!PorN) {
              appendStr = "-" + appendStr;
            }
          }

          return appendStr;
        }

        _Utils.string_matchStr = string_matchStr;

        function string_moneyToShortNumber(money, isSimplify) {
          if (isSimplify === void 0) {
            isSimplify = false;
          }

          money = number_valueOf(money);
          var str = "";

          if (money >= 100000000) {
            money = Number(money / 100000000);
            var findTab = String(money).split(".");
            str = str + String(findTab[0]);

            if (findTab.length == 2) {
              var endStr = String(findTab[1]).slice(0, 2);

              if (isSimplify) {
                for (var i = endStr.length - 1; i >= 0; i--) {
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

            var _findTab = String(money).split(".");

            str = str + String(_findTab[0]);

            if (_findTab.length == 2) {
              var _endStr = String(_findTab[1]).slice(0, 2);

              if (isSimplify) {
                for (var _i = _endStr.length - 1; _i >= 0; _i--) {
                  if (_endStr.substring(_i + 1, _i) == "0") {
                    _endStr = _endStr.substring(0, _i);
                  } else {
                    break;
                  }
                }
              }

              if (_endStr.length > 0) {
                str = str + "." + _endStr;
              }
            }

            str = str + "万";
            return str;
          }

          str = String(money);
          return str;
        }

        _Utils.string_moneyToShortNumber = string_moneyToShortNumber;

        function string_moneyToChange(money, isWager, isSimplify, isSign, isEnglish) {
          if (isWager === void 0) {
            isWager = false;
          }

          if (isSimplify === void 0) {
            isSimplify = false;
          }

          if (isSign === void 0) {
            isSign = false;
          }

          if (isEnglish === void 0) {
            isEnglish = false;
          }

          money = number_valueOf(money);
          var str = "";

          if (isSign) {
            if (money < 0) {
              money = money - money * 2;
              str = "-";
            } else if (money > 0) {
              str = "+";
            }
          } //换算的位算


          var getNumberStr = function getNumberStr(standardNum) {
            //1234567 若standardNum = 5  a=123 b=45
            var strMoney = String(money);
            var a = strMoney.substring(0, strMoney.length - standardNum + 1);

            if (isWager) {
              return a;
            }

            ; //后续两位

            var b = strMoney.substring(strMoney.length - standardNum + 1, strMoney.length - standardNum + 3);

            if (isSimplify) {
              for (var i = b.length - 1; i >= 0; i--) {
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
          };

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

        _Utils.string_moneyToChange = string_moneyToChange;

        function string_codeToASCII(param) {
          var res = null;
          param = String(param);

          if (param && param.length) {
            for (var i = 0; i < param.length; i++) {
              var aa = param.charCodeAt(i);

              if (!isNaN(aa)) {
                if (!res) {
                  res = "";
                }

                res = res + aa;
              }
            }

            if (res) {
              res = Number(res);
            }
          }

          return res;
        }

        _Utils.string_codeToASCII = string_codeToASCII;

        function string_getBytesLength(param) {
          var totalLength = 0;
          param = String(param);

          if (param && param.length) {
            var charCode;

            for (var i = 0; i < param.length; i++) {
              charCode = param.charCodeAt(i);

              if (charCode < 0x007f) {
                totalLength++;
              } else if (0x0080 <= charCode && charCode <= 0x07ff) {
                totalLength += 2;
              } else if (0x0800 <= charCode && charCode <= 0xffff) {
                totalLength += 3;
              } else {
                totalLength += 4;
              }
            }
          }

          return totalLength;
        }

        _Utils.string_getBytesLength = string_getBytesLength;

        function string_isEmpty(param) {
          if (isNull(param)) {
            return true;
          }

          if (param == "") {
            return true;
          }

          return false;
        }

        _Utils.string_isEmpty = string_isEmpty;

        function string_isHttp(param) {
          var res = string_isEmpty(param);

          if (res) {
            return false;
          }

          var str = String(param).toLowerCase();

          if (str.search("http://") > -1) {
            return true;
          } else if (str.search("https://") > -1) {
            return true;
          }

          return false;
        }

        _Utils.string_isHttp = string_isHttp;

        function string_isAllOneBytes(param) {
          if (!param) {
            return false;
          }

          param = String(param);
          var curStrTable = param.split("");

          for (var i = 0; i < curStrTable.length; i++) {
            var byteLen = this.string_getBytesLength(curStrTable[i]);

            if (byteLen > 1) {
              return false;
            }
          }

          return true;
        }

        _Utils.string_isAllOneBytes = string_isAllOneBytes;

        function string_subString(param, maxlen, isByte, del) {
          if (isByte === void 0) {
            isByte = false;
          }

          if (del === void 0) {
            del = "...";
          }

          //传入一个数字，表示多少位后的字符串需要省略
          if (!param) {
            return "";
          }

          param = String(param);
          var byteLenth = this.string_getBytesLength(param);
          var str;

          if (isByte) {
            if (byteLenth > maxlen) {
              // str = param.slice(0, maxlen)
              var curLen = 0;
              var curStrTable = param.split("");
              var curStr = "";

              for (var i = 0; i < curStrTable.length; i++) {
                var byteLen = this.string_getBytesLength(curStrTable[i]);

                if (byteLen + curLen > maxlen) {
                  break;
                } else {
                  curLen = curLen + byteLen;
                  curStr = curStr + curStrTable[i];
                }
              }

              str = curStr + del;
            } else {
              str = param;
            }

            return str;
          }

          if (param.length > maxlen) {
            str = param.slice(0, maxlen);
            str = str + del;
          } else {
            str = param;
          }

          return str;
        }

        _Utils.string_subString = string_subString;

        function string_isViolation(param) {
          var violationList = []; //违规字符的示例数组

          var str;

          for (var violationString of violationList) {
            if (param.indexOf(violationString) != -1) {
              str = param.replace(violationString, "*"); //如果含有违规字符，则替换成*
            } else {
              str = param;
            }
          }

          return str;
        }

        _Utils.string_isViolation = string_isViolation;

        function string_format(str) {
          for (var _len6 = arguments.length, args = new Array(_len6 > 1 ? _len6 - 1 : 0), _key6 = 1; _key6 < _len6; _key6++) {
            args[_key6 - 1] = arguments[_key6];
          }

          if (!str || args.length == 0) {
            return "";
          }

          var result = String(str);

          if (args.length == 1 && typeof args[0] == "object" && args[0] != null) {
            for (var key in args[0]) {
              if (Object.prototype.hasOwnProperty.call(args[0], key)) {
                var reg = new RegExp("({" + key + "})", "g");
                result = result.replace(reg, args[0][key]);
              }
            }
          } else {
            for (var i = 0; i < args.length; i++) {
              var _reg = new RegExp("({[" + i + "]})", "g");

              result = result.replace(_reg, String(args[i]));
            }
          }

          return result;
        }

        _Utils.string_format = string_format;

        function string_formatByLua(str) {
          var keyList = {
            "s": true,
            "d": true
          };
          str = String(str);
          var splitTab = str.split("");
          var newStr = "";
          var newTab = [];
          var isNeedInsert = false;
          var currowIndex = 0;
          var count = 0;

          for (var i = 0; i < splitTab.length; i++) {
            isNeedInsert = false;
            var v = splitTab[currowIndex];

            if (v) {
              if (v == "%" && splitTab[currowIndex + 1] != null) {
                var nextStr = splitTab[currowIndex + 1]; //比较小写字符串

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

          for (var _i2 = 0; _i2 < newTab.length; _i2++) {
            newStr = newStr + newTab[_i2];
          }

          ;

          for (var _len7 = arguments.length, args = new Array(_len7 > 1 ? _len7 - 1 : 0), _key7 = 1; _key7 < _len7; _key7++) {
            args[_key7 - 1] = arguments[_key7];
          }

          return string_format(newStr, ...args);
        }

        _Utils.string_formatByLua = string_formatByLua;

        function string_startWith(str, chars, position) {
          if (position === void 0) {
            position = 0;
          }

          str = String(str);
          chars = String(chars);
          return str.startsWith(chars, position);
        }

        _Utils.string_startWith = string_startWith;

        function string_endsWith(str, chars, position) {
          if (position === void 0) {
            position = null;
          }

          str = String(str);

          if (position == null || typeof position != "number") {
            position = str.length;
          }

          return str.endsWith(chars, position);
        }

        _Utils.string_endsWith = string_endsWith;

        function string_trim(str, type) {
          if (type === void 0) {
            type = "ALL";
          }

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
        }

        _Utils.string_trim = string_trim;
        ;
        /** 字符串去除所有换行 */

        function string_clearBr(str) {
          if (str == null && str == undefined) {
            return str;
          }

          str = str.replace(/<\/?.+?>/g, "");
          str = str.replace(/[\r\n]/g, "");
          return str;
        }

        _Utils.string_clearBr = string_clearBr;
        ;
        /**
         * 查找到的字符只替换最后一位
         * @param str 
         * @param findStr 
         * @param replaceStr 
         * @returns 
         */

        function string_replaceLast(str, findStr, replaceStr) {
          if (str == null && str == undefined) {
            return null;
          }

          str = String(str);
          var endIndex = str.lastIndexOf(String(findStr));

          if (endIndex == -1) {
            return str;
          }

          var one = str.substring(0, endIndex);
          var two = str.substring(endIndex + 1, str.length);
          return one + String(replaceStr) + two;
        }

        _Utils.string_replaceLast = string_replaceLast;

        function string_splitFileName(filePath, hasSuffix) {
          if (hasSuffix === void 0) {
            hasSuffix = false;
          }

          if (filePath == null && filePath == undefined || filePath == "") {
            return filePath;
          }

          filePath = String(filePath);
          var pathName = "";
          var trim = filePath.split("/");

          if (trim.length > 0) {
            pathName = trim[trim.length - 1];
            pathName = String(pathName);

            if (hasSuffix == false) {
              var dotIndex = pathName.lastIndexOf(".");

              if (dotIndex == -1) {
                //非文件属性 可能是文件夹
                return pathName;
              }

              pathName = pathName.substring(0, dotIndex);
            }
          }

          return pathName;
        }

        _Utils.string_splitFileName = string_splitFileName;
        ;
        /** 根据字符分割成两个字符串(不包含分割字符) */

        function string_spliteTwoByChar(input, char) {
          if (input == null) {
            return null;
          }

          var index = String(input).indexOf(String(char));

          if (index != -1) {
            var one = String(input).slice(0, index);
            var two = String(input).slice(index + 1, String(input).length);
            return [one, two, index];
          }

          return null;
        }

        _Utils.string_spliteTwoByChar = string_spliteTwoByChar;

        function table_isEmpty(param) {
          if (param == null || param == undefined) {
            return true;
          }

          if (typeof param != "object") {
            return true;
          }

          var res = false;

          try {
            res = JSON.stringify(param) == "[]" || JSON.stringify(param) == "{}";

            if (!res) {
              res = true;

              for (var key in param) {
                if (Object.prototype.hasOwnProperty.call(param, key) && res == true) {
                  var v = param[key];

                  if (v != null) {
                    res = false;
                  }
                }
              }
            }

            return res;
          } catch (error) {
            return res;
          }
        }

        _Utils.table_isEmpty = table_isEmpty;

        function table_delEmpty(obj) {
          if (obj == null) {
            return null;
          }

          if (typeof obj != "object") {
            return obj;
          }

          Object.keys(obj).forEach(key => {
            var value = obj[key];

            if (value != null) {
              if (typeof value == 'object') {
                table_delEmpty(value);
              }
            } else {
              delete obj[key];
            }
          });
          return obj;
        }

        _Utils.table_delEmpty = table_delEmpty;
        ;
        /** 判断Array  [] 或 new Array {}为Object*/

        function isArray(param) {
          if (param && typeof param == "object") {
            if (Object.prototype.toString.call(param) === '[object Array]') {
              return true;
            }
          }

          return false;
        }

        _Utils.isArray = isArray;

        function isObject(param) {
          if (param && typeof param == "object") {
            if (Object.prototype.toString.call(param) === '[object Object]') {
              return true;
            }
          }

          return false;
        }

        _Utils.isObject = isObject;

        function table_keyof(hashtable, value) {
          if (!hashtable || typeof hashtable != "object") {
            return null;
          }

          if (hashtable instanceof Array) {
            for (var i = 0; i < hashtable.length; i++) {
              if (value == hashtable[i]) {
                return i;
              }
            }
          } else {
            var res = null;

            for (var _i3 in hashtable) {
              if (Object.prototype.hasOwnProperty.call(hashtable, _i3) && res == null) {
                if (value == hashtable[_i3]) {
                  res = _i3;
                }
              }
            }

            return res;
          }

          return null;
        }

        _Utils.table_keyof = table_keyof;

        function table_length(table) {
          if (!table || typeof table != "object") {
            return 0;
          }

          if (table instanceof Array) {
            return table.length;
          } else {
            var count = 0;

            for (var i in table) {
              if (Object.prototype.hasOwnProperty.call(table, i)) {
                count = count + 1;
              }
            }

            return count;
          }
        }

        _Utils.table_length = table_length;

        function table_verify(param, isArray) {
          if (isArray === void 0) {
            isArray = false;
          }

          if (!param) {
            if (isArray) {
              return [];
            } else {
              return {};
            }
          }

          var propty = Object.prototype.toString.call(param);

          if (propty === '[object Object]' || propty == "[object Array]") {
            return param;
          }

          if (isArray) {
            return [];
          } else {
            return {};
          }
        }

        _Utils.table_verify = table_verify;

        function table_DeepClone(obj) {
          if (obj == null) {
            return null;
          } // console.log("table的深拷贝===<", typeof (obj), obj)


          if (typeof obj != "object") {
            return obj;
          } // 判断拷贝的要进行深拷贝的是数组还是对象，是数组的话进行数组拷贝，对象的话进行对象拷贝


          var objClone = null;

          if (Array.isArray(obj)) {
            objClone = [];
          } else {
            objClone = {};
          }

          ; // 进行深拷贝的不能为空，并且是对象或者是

          if (obj != null && typeof obj === 'object') {
            var Data = Object.keys(obj);

            for (var i = 0; i < Data.length; i += 1) {
              if (obj[Data[i]] != null && typeof obj[Data[i]] === 'object') {
                objClone[Data[i]] = table_DeepClone(obj[Data[i]]);
              } else {
                objClone[Data[i]] = obj[Data[i]];
              }
            }
          }

          return objClone;
        }

        _Utils.table_DeepClone = table_DeepClone;

        function table_sortAscii_AtoZ(table, caseIgnore) {
          if (caseIgnore === void 0) {
            caseIgnore = false;
          }

          if (!isObject(table) || !isArray(table)) {
            return null;
          }

          if (isArray(table)) {
            table.sort(function (s1, s2) {
              var x1 = s1;
              var x2 = s2;

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
            var map = new Map();

            for (var key in table) {
              if (Object.prototype.hasOwnProperty.call(table, key)) {
                map.set(key, table[key]);
              }
            }

            if (map.size > 0) {
              var arrayLike = Array.from(map); //得到的array中索引0为map中的key,索引1为map中的value

              arrayLike.sort(function (a, b) {
                var x1 = a[0];
                var x2 = b[0];

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
              });
              return arrayLike;
            }

            return null;
          }

          return null;
        }

        _Utils.table_sortAscii_AtoZ = table_sortAscii_AtoZ;

        function timeEx() {
          return new Date().getTime();
        }

        _Utils.timeEx = timeEx;

        function time() {
          return Math.round(Utils.timeEx() / 1000);
        }

        _Utils.time = time;

        function timeToDataArray(num) {
          if (isNull(num)) {
            return null;
          }

          var size = num.toString().length;

          if (size != 10 && size != 13) {
            return null;
          } //时间戳为10位需*1000，时间戳为13位的话不需乘1000


          if (size == 10) {
            num = num * 1000;
          }

          var date = new Date(num);
          var array = {
            year: date.getFullYear(),
            month: date.getMonth() + 1,
            day: date.getDate(),
            hour: date.getHours(),
            minutes: date.getMinutes(),
            seconds: date.getSeconds()
          };
          return array;
        }

        _Utils.timeToDataArray = timeToDataArray;

        function time_getWeekday() {
          var weekday = new Date().getDay();

          if (weekday == 0) {
            return 7;
          }

          return weekday;
        }

        _Utils.time_getWeekday = time_getWeekday;

        function timeParse(num, strFormat) {
          if (strFormat === void 0) {
            strFormat = null;
          }

          var data = this.timeToDataArray(num);
          var str = "";

          if (data) {
            strFormat = strFormat || "{0}年{1}月{2}日{3}时{4}分{5}秒";
            str = string_format(strFormat, data.year, data.month, data.day, data.hour, data.minutes, data.seconds);
          }

          return str;
        }

        _Utils.timeParse = timeParse;

        function time_isSampleDay(onetime, twotime) {
          onetime = Number(onetime);
          twotime = Number(twotime);

          if (isNull(onetime) || isNull(twotime)) {
            return false;
          }

          var oneArray = timeToDataArray(onetime);
          var twoArray = timeToDataArray(twotime);

          if (isNull(oneArray) || isNull(twoArray)) {
            return false;
          }

          if (oneArray["year"] == twoArray["year"] && oneArray["month"] == twoArray["month"] && oneArray["day"] == twoArray["day"]) {
            return true;
          }

          return false;
        }

        _Utils.time_isSampleDay = time_isSampleDay;

        function time_Remaining(time, isToTxt) {
          if (isToTxt === void 0) {
            isToTxt = false;
          }

          if (isNull(time)) {
            return null;
          }

          time = Number(time);
          /** 返回结构 */

          var res = {
            /** 天数 */
            day: 0,

            /** 小时数 */
            hours: 0,

            /** 分钟数 */
            minutes: 0,

            /** 秒数 */
            seconds: 0
          }; //毫秒级别

          var onDayAllTime = 24 * 3600 * 1000;
          var onHoursAllTime = 3600 * 1000;
          var onMinutesAllTime = 60 * 1000;
          var onSecondsAllTime = 1000;
          var endTime = time;

          if (endTime >= onDayAllTime) {
            res.day = Math.floor(endTime / onDayAllTime);
            endTime = endTime % onDayAllTime; //计算天数后剩余的毫秒数
          }

          ;

          if (endTime >= onHoursAllTime) {
            res.hours = Math.floor(endTime / onHoursAllTime);
            endTime = endTime % onHoursAllTime; //计算小时后剩余的毫秒数
          }

          if (endTime >= onMinutesAllTime) {
            res.minutes = Math.floor(endTime / onMinutesAllTime);
            endTime = endTime % onMinutesAllTime; //计算分钟数后剩余的毫秒数
          }

          if (endTime >= onSecondsAllTime) {
            res.seconds = Math.round(endTime / onSecondsAllTime);
            endTime = endTime % onSecondsAllTime; //计算分钟数后剩余的毫秒数
          }

          if (isToTxt) {
            var txt = "";

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

        _Utils.time_Remaining = time_Remaining;

        function file_saveForBrowser(textToWrite, fileNameToSaveAs) {
          if (sys.isBrowser) {
            var textFileAsBlob = new Blob([textToWrite], {
              type: 'application/json'
            });
            var downloadLink = document.createElement("a");
            downloadLink.download = fileNameToSaveAs;
            downloadLink.innerHTML = "Download File";

            if (window.webkitURL != null) {
              // Chrome allows the link to be clicked
              // without actually adding it to the DOM.
              downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
            } else {// Firefox requires the link to be added to the DOM
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

        _Utils.file_saveForBrowser = file_saveForBrowser;

        function image_ImageAssetToSpriteFrame(imageAsset) {
          if (imageAsset) {
            var spriteFrame = new SpriteFrame();
            var texture = new Texture2D();
            texture.image = imageAsset;
            spriteFrame.texture = texture;
            return spriteFrame;
          }

          return null;
        }

        _Utils.image_ImageAssetToSpriteFrame = image_ImageAssetToSpriteFrame;

        function image_CreateDefaultSpriteFrame(width, height, color) {
          if (color === void 0) {
            color = new Color(255, 255, 255, 255);
          }

          var count = width * height * 4;
          var data = new Uint8Array(count);

          for (var j = 0; j < count; j += 4) {
            data[j] = color.r; // r

            data[j + 1] = color.g; // g

            data[j + 2] = color.b; // b

            data[j + 3] = color.a; // a
          }

          var imageAsset = new ImageAsset();
          imageAsset.reset({
            _data: data,
            _compressed: false,
            width: width,
            height: height,
            format: Texture2D.PixelFormat.RGBA8888
          });
          var texture = new Texture2D();
          texture.reset({
            width: width,
            height: height,
            format: Texture2D.PixelFormat.RGBA8888
          });
          texture.image = imageAsset;
          var spriteFrame = new SpriteFrame();
          spriteFrame.texture = texture; // let spriteFrame = Utils.image_ImageAssetToSpriteFrame(imageAsset);
          //需要禁用其纹理的 packable 选项 不参与自动合图

          spriteFrame.packable = false;
          return spriteFrame;
        }

        _Utils.image_CreateDefaultSpriteFrame = image_CreateDefaultSpriteFrame;

        function node_PositionSizeToScreen(node) {
          if (!node) {
            return null;
          } //适配方案是Fit width


          var UIComp = node.getComponent(UITransform);

          if (!UIComp) {
            return null;
          }

          node.updateWorldTransform();
          var worldPos = new Vec3();
          node.getWorldPosition(worldPos); // console.warn("世界坐标系:getWorldPosition", worldPos)
          //panel的坐标转为屏幕坐标

          var width = UIComp.width;
          var height = UIComp.height; //屏幕分辨率

          var canvasSize = screen.windowSize; //像素比例

          var ratio = screen.devicePixelRatio; //scene的设计分辨率

          var desiginSize = view.getDesignResolutionSize(); //适配模式

          var desiginType = (_crd && GameConfig === void 0 ? (_reportPossibleCrUseOfGameConfig({
            error: Error()
          }), GameConfig) : GameConfig).instance.ResolutionPolicyType; // desiginType.
          //Fit width适配方案，以width作为缩放基准

          var scale = 1;

          if (desiginType == ResolutionPolicy.FIXED_WIDTH) {
            scale = canvasSize.width / desiginSize.width;
          } else if (desiginType == ResolutionPolicy.FIXED_HEIGHT) {
            scale = canvasSize.height / desiginSize.height;
          } //计算panel在屏幕中的尺寸


          width = scale * width;
          height = scale * height; //x,y即屏幕坐标，creator的坐标原点在左下，Android的在左上，需要做个转换。
          //x轴不变，y轴画布高减去y对应比例的值即为屏幕y坐标。（宽高都以sW为比例计算）
          // let x = (outPos.x * scale) - (width / 2);
          // let y = canvasSize.height - (outPos.y * scale) - (height / 2);

          var res = new Vec2();
          res.x = worldPos.x * scale - width / 2;
          res.y = canvasSize.height - worldPos.y * scale - height / 2;
          var size = {
            width: width,
            height: height
          }; // console.warn("输出转换结果", res, size, ratio);

          res.x = res.x / ratio;
          res.y = res.y / ratio;
          size.width = size.width / ratio;
          size.height = size.height / ratio; // console.warn("转换成像素", res, size, ratio);

          return {
            pos: res,
            size: size
          };
        }

        _Utils.node_PositionSizeToScreen = node_PositionSizeToScreen;

        function node_PositionCanvasToWorldPos(canvasPos) {
          //适配模式
          var desiginType = (_crd && GameConfig === void 0 ? (_reportPossibleCrUseOfGameConfig({
            error: Error()
          }), GameConfig) : GameConfig).instance.ResolutionPolicyType; //scene的设计分辨率

          var desiginSize = view.getDesignResolutionSize();
          var visibleSize = view.getVisibleSize(); // console.log("传进来的值:", canvasPos);
          // console.log("可见尺寸:", view.getVisibleSize());
          // console.log("画布大小:", screen.windowSize);

          var x = 0;
          var y = 0; //view基于画布的左下角坐标

          var viewPosX = 0;
          var viewPosY = 0;

          if (desiginType == ResolutionPolicy.FIXED_WIDTH || desiginType == ResolutionPolicy.SHOW_ALL) {
            x = canvasPos.x;
            viewPosY = (visibleSize.height - desiginSize.height) / 2;

            if (canvasPos.y < viewPosY) {
              y = 0 - Math.abs(canvasPos.y - viewPosY);
            } else {
              y = Math.abs(canvasPos.y - viewPosY);
            }
          } else if (desiginType == ResolutionPolicy.FIXED_HEIGHT) {
            y = canvasPos.y;
            viewPosX = (visibleSize.width - desiginSize.width) / 2;

            if (canvasPos.x < viewPosX) {
              x = 0 - Math.abs(canvasPos.x - viewPosX);
            } else {
              x = Math.abs(canvasPos.x - viewPosX);
            }
          } // console.log("计算出的伪世界坐标>", x, y, canvasPos.y, viewPosY)


          return new Vec2(x, y);
        }

        _Utils.node_PositionCanvasToWorldPos = node_PositionCanvasToWorldPos;

        function create_2DNode(name) {
          if (name === void 0) {
            name = null;
          }

          if (name != null) {
            name = String(name);
          }

          var node = new Node(name);
          node.layer = Layers.Enum.UI_2D;
          var uiTrans = node.addComponent(UITransform);
          uiTrans.anchorPoint = new Vec2(0.5, 0.5);
          uiTrans.enabled = true;
          return node;
        }

        _Utils.create_2DNode = create_2DNode;

        function create_2DSprite(spriteFrame, name) {
          if (name === void 0) {
            name = null;
          }

          var node = this.create_2DNode(name);

          if (node) {
            var sprite = node.addComponent(Sprite);
            sprite.sizeMode = 2;
            sprite.type = 0;
            sprite.trim = true;
            sprite.spriteFrame = spriteFrame;
            sprite.enabled = true;
          }

          return node;
        }

        _Utils.create_2DSprite = create_2DSprite;

        function getBezierPos(ctrlPosArr, precison) {
          console.log(ctrlPosArr);
          var resArr = new Array();
          /**贝塞尔曲线控制点数目（阶数）*/

          var number = ctrlPosArr.length;

          if (number < 2) {
            console.warn("控制点数不能小于 2");
            return resArr;
          }
          /**杨辉三角数据 */


          var yangHuiArr = Utils.getYangHuiTriangle(number); //计算坐标

          for (var i = 0; i < precison; i++) {
            var t = i / precison;
            var tmpX = 0;
            var tmpY = 0;

            for (var j = 0; j < number; j++) {
              tmpX += Math.pow(1 - t, number - j - 1) * ctrlPosArr[j].x * Math.pow(t, j) * yangHuiArr[j];
              tmpY += Math.pow(1 - t, number - j - 1) * ctrlPosArr[j].y * Math.pow(t, j) * yangHuiArr[j];
            } // resArr[i].x = tmpX;
            // resArr[i].y = tmpY;


            resArr[i] = new Vec2(tmpX, tmpY);
          }

          return resArr;
        }

        _Utils.getBezierPos = getBezierPos;

        function getYangHuiTriangle(num) {
          //计算杨辉三角
          var yangHuiArr = new Array();

          if (num === 1) {
            yangHuiArr[0] = 1;
          } else {
            yangHuiArr[0] = yangHuiArr[1] = 1;

            for (var i = 3; i <= num; i++) {
              var t = new Array();

              for (var j = 0; j < i - 1; j++) {
                t[j] = yangHuiArr[j];
              }

              yangHuiArr[0] = yangHuiArr[i - 1] = 1;

              for (var _j = 0; _j < i - 2; _j++) {
                yangHuiArr[_j + 1] = t[_j] + t[_j + 1];
              }
            }
          } // console.log(yangHuiArr);


          return yangHuiArr;
        }

        _Utils.getYangHuiTriangle = getYangHuiTriangle;

        function countPointInSegmentByY(point1, point2, insertPtY) {
          var resPoint = new Vec2();

          try {
            //斜率
            var k = 0;

            if (point1.x == point2.x) //不存在斜率x=x1为直线方程90度
              {
                resPoint.x = point1.x;
                resPoint.y = insertPtY;
                return resPoint;
              } else if (point1.y == point2.y && point1.y != insertPtY) //y=y1为直线方程,0度,两条直线平行没有交点
              {
                return resPoint;
              } else if (point1.y == point2.y && point1.y == insertPtY) //0度，两条直线重合，任意点即为交点
              {
                resPoint.x = point1.x;
                resPoint.y = insertPtY;
                return resPoint;
              } else {
              k = (point2.y - point1.y) / (point2.x - point1.x);
              var b = point1.y - k * point1.x;
              var x = (insertPtY - b) / k;
              resPoint.x = x;
              resPoint.y = insertPtY;
            }
          } catch (err) {
            console.log("point1:", point1, "point2:", point2, insertPtY);
            error("countPointInSegmentByY:通过两点计算直线公式失败：", err);
          }

          return resPoint;
        }

        _Utils.countPointInSegmentByY = countPointInSegmentByY;

        function rotate3DAround(node, point, theta, moon) {
          if (moon === void 0) {
            moon = true;
          }

          if (!node || node.isValid == false) {
            return;
          }

          var pos = node.getPosition();

          if (theta.x != 0) {
            // 绕x轴旋转
            var radian = Math.PI * theta.x / 180;
            var posx = -pos.z;
            var posy = pos.y;
            var pntx = -point.z;
            var pnty = point.y;
            var radius = Vec2.distance(new Vec2(posx, posy), new Vec2(pntx, pnty)); // 旋转半径

            var radianStart = Math.atan2(posy - pnty, posx - pntx); // 被旋转的节点相对于旋转点的起始角度

            var y = radius * Math.sin(radianStart + radian);
            var x = radius * Math.cos(radianStart + radian);
            var outx = pntx + x;
            var outy = pnty + y;
            node.setPosition(pos.x, outy, -outx);

            if (moon) {
              var eulerAngles = node.eulerAngles;
              node.setRotationFromEuler(eulerAngles.x + theta.x, eulerAngles.y, eulerAngles.z);
            }
          } else if (theta.y != 0) {
            // 绕y轴旋转
            var _radian = Math.PI * theta.y / 180;

            var _posx = pos.x;

            var _posy = -pos.z;

            var _pntx = point.x;

            var _pnty = -point.z;

            var _radius = Vec2.distance(new Vec2(_posx, _posy), new Vec2(_pntx, _pnty)); // 旋转半径


            var _radianStart = Math.atan2(_posy - _pnty, _posx - _pntx); // 被旋转的节点相对于旋转点的起始角度


            var _y = _radius * Math.sin(_radianStart + _radian);

            var _x = _radius * Math.cos(_radianStart + _radian);

            var _outx = _pntx + _x;

            var _outy = _pnty + _y;

            node.setPosition(_outx, pos.y, -_outy);

            if (moon) {
              var _eulerAngles = node.eulerAngles;
              node.setRotationFromEuler(_eulerAngles.x, _eulerAngles.y + theta.y, _eulerAngles.z);
            }
          } else if (theta.z != 0) {
            // 绕z轴旋转
            var _radian2 = Math.PI * theta.z / 180;

            var _posx2 = pos.x;
            var _posy2 = pos.y;
            var _pntx2 = point.x;
            var _pnty2 = point.y;

            var _radius2 = Vec2.distance(new Vec2(_posx2, _posy2), new Vec2(_pntx2, _pnty2)); // 旋转半径


            var _radianStart2 = Math.atan2(_posy2 - _pnty2, _posx2 - _pntx2); // 被旋转的节点相对于旋转点的起始角度


            var _y2 = _radius2 * Math.sin(_radianStart2 + _radian2);

            var _x2 = _radius2 * Math.cos(_radianStart2 + _radian2);

            var _outx2 = _pntx2 + _x2;

            var _outy2 = _pnty2 + _y2;

            node.setPosition(_outx2, _outy2, pos.z);

            if (moon) {
              var _eulerAngles2 = node.eulerAngles;
              node.setRotationFromEuler(_eulerAngles2.x, _eulerAngles2.y, _eulerAngles2.z - theta.z);
            }
          }
        }

        _Utils.rotate3DAround = rotate3DAround;

        function rotate3DAroundByPositionRotaion(node, position, rotaionEuler, point, theta, moon) {
          if (moon === void 0) {
            moon = true;
          }

          if (!node || node.isValid == false) {
            return;
          }

          var pos = position;

          if (theta.x != 0) {
            // 绕x轴旋转
            var radian = Math.PI * theta.x / 180;
            var posx = -pos.z;
            var posy = pos.y;
            var pntx = -point.z;
            var pnty = point.y;
            var radius = Vec2.distance(new Vec2(posx, posy), new Vec2(pntx, pnty)); // 旋转半径

            var radianStart = Math.atan2(posy - pnty, posx - pntx); // 被旋转的节点相对于旋转点的起始角度

            var y = radius * Math.sin(radianStart + radian);
            var x = radius * Math.cos(radianStart + radian);
            var outx = pntx + x;
            var outy = pnty + y;
            node.setPosition(pos.x, outy, -outx);

            if (moon) {
              var eulerAngles = rotaionEuler;
              node.setRotationFromEuler(eulerAngles.x + theta.x, eulerAngles.y, eulerAngles.z);
            }
          } else if (theta.y != 0) {
            // 绕y轴旋转
            var _radian3 = Math.PI * theta.y / 180;

            var _posx3 = pos.x;

            var _posy3 = -pos.z;

            var _pntx3 = point.x;

            var _pnty3 = -point.z;

            var _radius3 = Vec2.distance(new Vec2(_posx3, _posy3), new Vec2(_pntx3, _pnty3)); // 旋转半径


            var _radianStart3 = Math.atan2(_posy3 - _pnty3, _posx3 - _pntx3); // 被旋转的节点相对于旋转点的起始角度


            var _y3 = _radius3 * Math.sin(_radianStart3 + _radian3);

            var _x3 = _radius3 * Math.cos(_radianStart3 + _radian3);

            var _outx3 = _pntx3 + _x3;

            var _outy3 = _pnty3 + _y3;

            node.setPosition(_outx3, pos.y, -_outy3);

            if (moon) {
              var _eulerAngles3 = rotaionEuler;
              node.setRotationFromEuler(_eulerAngles3.x, _eulerAngles3.y + theta.y, _eulerAngles3.z);
            }
          } else if (theta.z != 0) {
            // 绕z轴旋转
            var _radian4 = Math.PI * theta.z / 180;

            var _posx4 = pos.x;
            var _posy4 = pos.y;
            var _pntx4 = point.x;
            var _pnty4 = point.y;

            var _radius4 = Vec2.distance(new Vec2(_posx4, _posy4), new Vec2(_pntx4, _pnty4)); // 旋转半径


            var _radianStart4 = Math.atan2(_posy4 - _pnty4, _posx4 - _pntx4); // 被旋转的节点相对于旋转点的起始角度


            var _y4 = _radius4 * Math.sin(_radianStart4 + _radian4);

            var _x4 = _radius4 * Math.cos(_radianStart4 + _radian4);

            var _outx4 = _pntx4 + _x4;

            var _outy4 = _pnty4 + _y4;

            node.setPosition(_outx4, _outy4, pos.z);

            if (moon) {
              var _eulerAngles4 = rotaionEuler;
              node.setRotationFromEuler(_eulerAngles4.x, _eulerAngles4.y, _eulerAngles4.z - theta.z);
            }
          }
        }

        _Utils.rotate3DAroundByPositionRotaion = rotate3DAroundByPositionRotaion;
      })(Utils || _export("Utils", Utils = {}));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=150b3cba1899d867dba2f8e1ea42065900cb4c0f.js.map