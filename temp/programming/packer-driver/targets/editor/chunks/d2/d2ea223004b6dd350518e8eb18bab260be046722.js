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
            console.log(`Error: MathEx.mod 参数不能为空 nNum=${bNum} dNum=${dNum}`);
            return null;
          }

          if (dNum == 0) {
            console.log(`Error: MathEx.mod 除数不能为0 nNum=${bNum} dNum=${dNum}`);
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
//# sourceMappingURL=d2ea223004b6dd350518e8eb18bab260be046722.js.map