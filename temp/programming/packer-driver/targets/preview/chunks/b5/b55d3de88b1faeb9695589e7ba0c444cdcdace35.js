System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, NodePoolCache, _crd;

  _export("NodePoolCache", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ef79eFr46ZLl4Jr55P7UYIe", "NodePoolCache", undefined);

      /**
       * Name = NodePoolCache
       * URL = db://assets/extend/NodePoolCache.ts
       * Time = Thu Apr 07 2022 13:02:05 GMT+0800 (中国标准时间)
       * Author = xueya
       * 缓存池
       */
      _export("NodePoolCache", NodePoolCache = class NodePoolCache {
        //实例化
        constructor() {
          this.nodeCache = void 0;
          this.nodeCache = {};
        }

        get(key) {
          if (this.nodeCache[key]) {
            if (this.nodeCache[key].length > 0) {
              return this.nodeCache[key].shift();
            }
          }

          return null;
        }

        add(key, obj) {
          if (!this.nodeCache[key]) {
            this.nodeCache[key] = [];
          }

          this.nodeCache[key].push(obj);
        }

        release(key) {
          if (!this.nodeCache[key]) {
            return;
          } else {
            this.nodeCache[key] = [];
          }
        }

      }); // export let nodePoolCache = new NodePoolCache();


      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=b55d3de88b1faeb9695589e7ba0c444cdcdace35.js.map