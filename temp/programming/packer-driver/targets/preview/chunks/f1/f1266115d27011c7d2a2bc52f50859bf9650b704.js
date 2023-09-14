System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, MathEx;

  _export("MathEx", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "3ba17dTHotK07oFCtlNUO4v", "MathEx", undefined);

      (function (_MathEx) {
        function mod(bNum, dNum) {
          if (!bNum || !dNum) {
            console.log("Error: MathEx.mod \u53C2\u6570\u4E0D\u80FD\u4E3A\u7A7A nNum=" + bNum + " dNum=" + dNum);
            return null;
          }

          if (dNum == 0) {
            console.log("Error: MathEx.mod \u9664\u6570\u4E0D\u80FD\u4E3A0 nNum=" + bNum + " dNum=" + dNum);
            return null;
          }

          return (bNum % dNum + dNum) % dNum;
        }

        _MathEx.mod = mod;
      })(MathEx || _export("MathEx", MathEx = {}));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f1266115d27011c7d2a2bc52f50859bf9650b704.js.map