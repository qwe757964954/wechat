System.register(["cc"], function (_export, _context) {
  "use strict";

  var __checkObsolete__, __checkObsoleteInNamespace__, Vec4, _crd, MjSize, MjTabel, PlayerRole, CardInfo, i, _i, _i2, _i3, _i4, drawCardDisRatio, CountDownInfo;

  _export("PlayerRole", void 0);

  return {
    setters: [function (_cc) {
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Vec4 = _cc.Vec4;
    }],
    execute: function () {
      _crd = true;

      __checkObsolete__(['Vec4']);

      //暂时以这个数据为参考
      _export("MjSize", MjSize = {
        width: 63,
        height: 100,
        length: 1.1
      });

      _export("MjTabel", MjTabel = {
        innerSize: 34.7,
        outterSize: 37.2
      });

      (function (PlayerRole) {
        PlayerRole[PlayerRole["ME"] = 1] = "ME";
        PlayerRole[PlayerRole["RIGHT"] = 2] = "RIGHT";
        PlayerRole[PlayerRole["TOP"] = 3] = "TOP";
        PlayerRole[PlayerRole["LEFT"] = 4] = "LEFT";
      })(PlayerRole || _export("PlayerRole", PlayerRole = {}));

      _export("CardInfo", CardInfo = []);

      for (i = 1; i < 10; i++) {
        CardInfo[i] = new Vec4(1, 1, i / 9, -0.25); //万 1.2.3....
      }

      for (_i = 11; _i < 20; _i++) {
        CardInfo[_i] = new Vec4(1, 1, (_i - 10) / 9, 0); // 饼 1.2.3....
      }

      for (_i2 = 21; _i2 < 30; _i2++) {
        CardInfo[_i2] = new Vec4(1, 1, (_i2 - 20) / 9, 0.25); //条 1.2.3....
      }

      for (_i3 = 31; _i3 < 35; _i3++) {
        CardInfo[_i3] = new Vec4(1, 1, (_i3 - 30) / 9, 0.5); //东南西北
      }

      for (_i4 = 41; _i4 < 44; _i4++) {
        CardInfo[_i4] = new Vec4(1, 1, (_i4 - 40 + 4) / 9, 0.5); //中发白
      }

      _export("drawCardDisRatio", drawCardDisRatio = 2);

      _export("CountDownInfo", CountDownInfo = [new Vec4(-1, 1, 0.25, 0), new Vec4(-1, 1, 0.5, 0), new Vec4(-1, 1, 0.75, 0), new Vec4(-1, 1, 0, 0), new Vec4(-1, 1, 0.25, 0.333333), new Vec4(-1, 1, 0.5, 0.333333), new Vec4(-1, 1, 0.75, 0.333333), new Vec4(-1, 1, 0, 0.333333), new Vec4(-1, 1, 0.25, 0.666667), new Vec4(-1, 1, 0.5, 0.666667)]);

      _crd = false;
    }
  };
});
//# sourceMappingURL=843843beb61e31b4ca52053edf0e18f6ff7c087a.js.map