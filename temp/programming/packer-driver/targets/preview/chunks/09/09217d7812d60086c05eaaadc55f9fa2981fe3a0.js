System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, MajiangUtil, _crd;

  _export("MajiangUtil", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2b37eS3ox5III8Vw9kL5Jxh", "MajiangUtil", undefined);

      _export("MajiangUtil", MajiangUtil = class MajiangUtil {
        static deleteHasInList(currList, otherList) {
          var i = currList.length;

          while (i--) {
            if (otherList.some(x => {
              return currList[i] === x;
            })) currList.splice(i, 1);
          }
        }

        static swapElements(arr, index1, index2) {
          [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=09217d7812d60086c05eaaadc55f9fa2981fe3a0.js.map