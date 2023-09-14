System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, GameRuleConfig;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "531fdcpcEJNiL73U3R1yYRk", "GameRuleConfig", undefined);

      /**
       * Name = GameRuleConfig
       * URL = db://assets/package/game/common/GameRuleConfig.ts
       * Time = Thu Aug 10 2023 19:24:47 GMT+0800 (中国标准时间)
       * Author = harvyson
       *
       */
      _export("GameRuleConfig", GameRuleConfig = {
        /** 总牌数：万筒条 + 东西南北 + 红发白 */
        CardTotalNum: 136,

        /** 每个玩家最大胡牌数量 */
        CardHuNum: 1
      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=acf4a68f81873ae06ab1a40af8bae8e291c12f38.js.map