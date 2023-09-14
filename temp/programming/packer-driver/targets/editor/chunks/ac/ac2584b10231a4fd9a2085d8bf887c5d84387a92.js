System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Vec4, _crd, MjSize, MjTabel, PlayerRole, CardInfo, i, i, i, i, i, drawCardDisRatio, CountDownInfo;

  _export("PlayerRole", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Vec4 = _cc.Vec4;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a36443Z+F9P3qMZU/74+a4T", "CardConfigs", undefined);

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

      for (i = 11; i < 20; i++) {
        CardInfo[i] = new Vec4(1, 1, (i - 10) / 9, 0); // 饼 1.2.3....
      }

      for (i = 21; i < 30; i++) {
        CardInfo[i] = new Vec4(1, 1, (i - 20) / 9, 0.25); //条 1.2.3....
      }

      for (i = 31; i < 35; i++) {
        CardInfo[i] = new Vec4(1, 1, (i - 30) / 9, 0.5); //东南西北
      }

      for (i = 41; i < 44; i++) {
        CardInfo[i] = new Vec4(1, 1, (i - 40 + 4) / 9, 0.5); //中发白
      }

      _export("drawCardDisRatio", drawCardDisRatio = 2);

      _export("CountDownInfo", CountDownInfo = [new Vec4(-1, 1, 0.25, 0), new Vec4(-1, 1, 0.5, 0), new Vec4(-1, 1, 0.75, 0), new Vec4(-1, 1, 0, 0), new Vec4(-1, 1, 0.25, 0.333333), new Vec4(-1, 1, 0.5, 0.333333), new Vec4(-1, 1, 0.75, 0.333333), new Vec4(-1, 1, 0, 0.333333), new Vec4(-1, 1, 0.25, 0.666667), new Vec4(-1, 1, 0.5, 0.666667)]);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ac2584b10231a4fd9a2085d8bf887c5d84387a92.js.map