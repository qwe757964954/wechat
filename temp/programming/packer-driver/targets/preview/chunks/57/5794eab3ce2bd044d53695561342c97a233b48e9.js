System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, MapEx, _crd;

  _export("MapEx", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2fe59HDiidL/6XmCuoSnaWL", "MapEx", undefined);

      _export("MapEx", MapEx = class MapEx {
        constructor() {
          this.keys = [];
          this.vals = [];
        }

        /**
         * 重新设置某个键对应的值，如果不存在，则添加
         * @param key 
         * @param val 
         */
        set(key, val) {
          // 判断键集合中是否存在，存在的话直接来改
          var index = this.keys.indexOf(key);

          if (index >= 0) {
            // 存在直接修改
            this.vals[index] = val;
          } else {
            // 不存在，直接添加
            this.keys.push(key);
            this.vals.push(val);
          }
        }
        /**
         * 向开始位置设置某个键对应的值，如果不存在，则添加,若存在则先删除再添加
         * @param key 
         * @param val 
         */


        setToStartIndex(key, val) {
          // 判断键集合中是否存在，存在的话直接来改
          var index = this.keys.indexOf(key);

          if (index >= 0) {
            // 存在先删除
            this.keys.splice(index, 1);
            this.vals.splice(index, 1);
          } //添加在开头


          this.keys.unshift(key);
          this.vals.unshift(val);
        }
        /**
         * 遍历键值对
         * @param callback 
         */


        forEach(callback) {
          this.keys.forEach((key, index) => {
            callback(key, this.vals[index]);
          });
        }
        /**
         * 通过指定的key 来删除val
         * @param key 
         */


        delete(key) {
          var index = this.keys.indexOf(key);

          if (index < 0) {
            // 不存在，直接抛出错误，说该键不存在
            throw new Error('this key is not exist');
          } else {
            // 存在，直接删除
            this.keys.splice(index, 1);
            this.vals.splice(index, 1);
            return true;
          }
        }
        /**
         * 判断某个键是否存在 存在则直接返回值
         * @param key 
         */


        has(key) {
          var index = this.keys.indexOf(key);

          if (index < 0) {
            // 不存在
            return null;
          } else {
            //存在
            return this.vals[index];
          }
        }
        /**
         * 返回一个新的Array对象，包含了Array对象中每个元素的值 。
         * @returns 
         */


        values() {
          var newVals = [];
          this.vals.forEach((key, index) => {
            newVals.push(this.vals[index]);
          });
          return newVals;
        }
        /**
         * 得到键的数量
         */


        get size() {
          return this.keys.length;
        }
        /**
         * 清除所有的键值对
         */


        clear() {
          this.keys = [];
          this.vals = [];
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=5794eab3ce2bd044d53695561342c97a233b48e9.js.map