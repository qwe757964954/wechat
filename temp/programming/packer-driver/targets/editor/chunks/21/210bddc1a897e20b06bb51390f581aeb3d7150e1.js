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

          this.print = function (...args) {
            (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
              error: Error()
            }), Logger) : Logger).logCache(5, `【${this._className}】`, ...args);
          };

          this._className = name || "BaseCache";
          (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
            error: Error()
          }), Logger) : Logger).logCache(5, `Cache: ${this._className}初始化...`);
          this._data = {};
        }

        /** 设置数据 */
        setData(key = null, value = null) {
          if (key) {
            this._data[key] = value;
          }

          return this._data[key];
        }
        /** 获取数据 */


        getData(key = null) {
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

          let oldKeyArray = {};
          let newArray = {};

          for (let index = 0; index < keyArray.length; index++) {
            oldKeyArray[keyArray[index]] = true;
            newArray[keyArray[index]] = null;
          }

          array = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).table_verify(array);

          for (let key in array) {
            if (Object.prototype.hasOwnProperty.call(array, key)) {
              let value = array[key];

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

          let defaultValueArray = {};
          let defaultKeyArray = {};
          let newArray = {};

          for (let key in keyValueArray) {
            if (Object.prototype.hasOwnProperty.call(keyValueArray, key)) {
              let value = keyValueArray[key];
              defaultValueArray[key] = value;
              defaultKeyArray[key] = true;
            }
          }

          array = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).table_verify(array);

          for (let key in keyValueArray) {
            if (Object.prototype.hasOwnProperty.call(keyValueArray, key)) {
              let value = array[key];

              if (defaultKeyArray[key]) {
                if (value == null || value == undefined) {
                  value = defaultValueArray[key];
                } else {
                  if (typeof value == "object") {
                    if (JSON.stringify(value) != "[]" && JSON.stringify(value) != "{}") {
                      if (JSON.stringify(keyValueArray[key]) == "[]" || JSON.stringify(keyValueArray[key]) == "{}") {
                        value = value;
                      } else {
                        value = this.mergeArrayDefault(defaultValueArray[key], value);
                      }
                    }
                  }
                }

                newArray[key] = value;
              }
            }
          }

          return newArray;
        }
        /** 清理缓存数据 */


        clear() {
          (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
            error: Error()
          }), Logger) : Logger).logCache(5, `Cache:${this._className}清理数据...`);
        } //当前类日志输出


      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=210bddc1a897e20b06bb51390f581aeb3d7150e1.js.map