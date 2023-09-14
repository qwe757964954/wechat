System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, RandomManager;

  _export("RandomManager", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b843ep28dBO1bnnmLBQm2vo", "RandomManager", undefined);

      (function (_RandomManager) {
        const seedrandom = _RandomManager.seedrandom = null;

        function getRandom() {
          if (RandomManager.seedrandom) {
            return RandomManager.seedrandom.quick();
          }

          return Math.random();
        }

        _RandomManager.getRandom = getRandom;

        function setSeed(seed) {
          // @ts-ignore
          RandomManager.seedrandom = new Math.seedrandom(seed);
        }

        _RandomManager.setSeed = setSeed;

        function getRandomInt(min, max, type = 2) {
          min = Math.ceil(min);
          max = Math.floor(max);

          switch (type) {
            case 1:
              // [min,max) 得到一个两数之间的随机整数,这个值不小于min（如果min不是整数的话，得到一个向上取整的 min），并且小于（但不等于）max  
              return Math.floor(RandomManager.getRandom() * (max - min)) + min;

            case 2:
              // [min,max] 得到一个两数之间的随机整数，包括两个数在内,这个值比min大（如果min不是整数，那就不小于比min大的整数），但小于（但不等于）max
              return Math.floor(RandomManager.getRandom() * (max - min + 1)) + min;

            case 3:
              // (min,max) 得到一个两数之间的随机整数
              return Math.floor(RandomManager.getRandom() * (max - min - 1)) + min + 1;
          }

          return 0;
        }

        _RandomManager.getRandomInt = getRandomInt;

        function getRandomByMinMaxList(min, max, n, type = 2) {
          let result = [];

          for (let i = 0; i < n; i++) {
            result.push(RandomManager.getRandomInt(min, max));
          }

          return result;
        }

        _RandomManager.getRandomByMinMaxList = getRandomByMinMaxList;

        function getRandomByObjectList(objects, n) {
          let temp = objects.slice();
          let result = [];

          for (let i = 0; i < n; i++) {
            let index = RandomManager.getRandomInt(0, n, 1);
            result.push(temp.splice(index, 1)[0]);
          }

          return result;
        }

        _RandomManager.getRandomByObjectList = getRandomByObjectList;

        function getRandomBySumList(n, sum) {
          let residue = sum;
          let value = 0;
          let result = [];

          for (let i = 0; i < n; i++) {
            value = RandomManager.getRandomInt(0, residue, 3);

            if (i == n - 1) {
              value = residue;
            } else {
              residue -= value;
            }

            result.push(value);
          }

          return result;
        }

        _RandomManager.getRandomBySumList = getRandomBySumList;
      })(RandomManager || _export("RandomManager", RandomManager = {}));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=0855d25118a35af3efd93df2adb47e3ac520fa0f.js.map