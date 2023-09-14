System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Logger, Utils, BaseCache, _crd;

  function _reportPossibleCrUseOfLogger(extras) {
    _reporterNs.report("Logger", "../log/Logger", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUtils(extras) {
    _reporterNs.report("Utils", "../Utils", _context.meta, extras);
  }

  _export("BaseCache", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      Logger = _unresolved_2.Logger;
    }, function (_unresolved_3) {
      Utils = _unresolved_3.Utils;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0b8cbTfDt9FSpiUwWDb2OiO", "BaseCache", undefined);

      _export("BaseCache", BaseCache = class BaseCache {
        //存储的数据
        //实例化
        constructor(name) {
          this._className = "BaseCache";
          this._data = void 0;

          this.print = function () {
            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }

            (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
              error: Error()
            }), Logger) : Logger).logCache(5, "\u3010" + this._className + "\u3011", ...args);
          };

          this._className = name || "BaseCache";
          (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
            error: Error()
          }), Logger) : Logger).logCache(5, "Cache: " + this._className + "\u521D\u59CB\u5316...");
          this._data = {};
        }

        /** 设置数据 */
        setData(key, value) {
          if (key === void 0) {
            key = null;
          }

          if (value === void 0) {
            value = null;
          }

          if (key) {
            this._data[key] = value;
          }

          return this._data[key];
        }
        /** 获取数据 */


        getData(key) {
          if (key === void 0) {
            key = null;
          }

          if (key && this._data[key]) {
            return this._data[key];
          }

          return null;
        } //合并


        mergeArray(keyArray, array) {
          if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).isNull(keyArray) || (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).isNull(array)) {
            return null;
          }

          var oldKeyArray = {};
          var newArray = {};

          for (var index = 0; index < keyArray.length; index++) {
            oldKeyArray[keyArray[index]] = true;
            newArray[keyArray[index]] = null;
          }

          array = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).table_verify(array);

          for (var key in array) {
            if (Object.prototype.hasOwnProperty.call(array, key)) {
              var value = array[key];

              if (oldKeyArray[key]) {
                newArray[key] = value;
              }
            }
          }

          return newArray;
        }
        /**
         * 合并（有默认值的Array<key-value>）
         * @param keyValueArray 
         * @param array 
         * @returns 
         */


        mergeArrayDefault(keyValueArray, array) {
          if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).isNull(keyValueArray) || (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).isNull(array)) {
            return null;
          }

          var defaultValueArray = {};
          var defaultKeyArray = {};
          var newArray = {};

          for (var key in keyValueArray) {
            if (Object.prototype.hasOwnProperty.call(keyValueArray, key)) {
              var value = keyValueArray[key];
              defaultValueArray[key] = value;
              defaultKeyArray[key] = true;
            }
          }

          array = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).table_verify(array);

          for (var _key2 in keyValueArray) {
            if (Object.prototype.hasOwnProperty.call(keyValueArray, _key2)) {
              var _value = array[_key2];

              if (defaultKeyArray[_key2]) {
                if (_value == null || _value == undefined) {
                  _value = defaultValueArray[_key2];
                } else {
                  if (typeof _value == "object") {
                    if (JSON.stringify(_value) != "[]" && JSON.stringify(_value) != "{}") {
                      if (JSON.stringify(keyValueArray[_key2]) == "[]" || JSON.stringify(keyValueArray[_key2]) == "{}") {
                        _value = _value;
                      } else {
                        _value = this.mergeArrayDefault(defaultValueArray[_key2], _value);
                      }
                    }
                  }
                }

                newArray[_key2] = _value;
              }
            }
          }

          return newArray;
        }
        /** 清理缓存数据 */


        clear() {
          (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
            error: Error()
          }), Logger) : Logger).logCache(5, "Cache:" + this._className + "\u6E05\u7406\u6570\u636E...");
        } //当前类日志输出


      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=388a63f90acebf868c35413fb4b449e696038490.js.map