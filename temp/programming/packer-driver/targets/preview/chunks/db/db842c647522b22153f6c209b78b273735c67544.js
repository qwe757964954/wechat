System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _crd, GameViewConfig;

  function _reportPossibleCrUseOfCommon(extras) {
    _reporterNs.report("Common", "./idl/Common", _context.meta, extras);
  }

  _export("GameViewConfig", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "696b1pTblpN76hqkWXJRzos", "GameViewConfig", undefined);

      __checkObsolete__(['Vec3']);

      (function (_GameViewConfig) {
        var WallStatus;

        (function (WallStatus) {
          WallStatus[WallStatus["Top"] = 1] = "Top";
          WallStatus[WallStatus["Bottom"] = 2] = "Bottom";
          WallStatus[WallStatus["Moving"] = 3] = "Moving";
        })(WallStatus || (WallStatus = {}));

        _GameViewConfig.WallStatus = WallStatus;
        var HandCardStatus;

        (function (HandCardStatus) {
          HandCardStatus[HandCardStatus["Idle"] = 1] = "Idle";
          HandCardStatus[HandCardStatus["Sort"] = 2] = "Sort";
          HandCardStatus[HandCardStatus["Show"] = 3] = "Show";
          HandCardStatus[HandCardStatus["Over"] = 4] = "Over";
        })(HandCardStatus || (HandCardStatus = {}));

        _GameViewConfig.HandCardStatus = HandCardStatus;
        var DiceStatus;

        (function (DiceStatus) {
          DiceStatus[DiceStatus["Stop"] = 1] = "Stop";
          DiceStatus[DiceStatus["Move"] = 2] = "Move";
          DiceStatus[DiceStatus["Pause"] = 3] = "Pause";
        })(DiceStatus || (DiceStatus = {}));

        _GameViewConfig.DiceStatus = DiceStatus;
        var CardConfig = _GameViewConfig.CardConfig = {
          Width: 3.1,
          // 宽
          Height: 4.1,
          // 高
          Thickness: 2,
          // 牌厚度
          GroundToCard: 1.2,
          // 牌到桌面的高度
          GroundToHandCard: 2.2,
          // 手牌到桌面的高度
          ScaleWallCard: 1,
          // 牌墙比例
          ScaleHandCard: 1.1,
          // 手牌比例
          ScaleOutCard: 1.25,
          // 出牌比例
          ScaleMeldCard: 1.1,
          // 碰杠牌比例
          ScaleHuCard: 1.1,
          // 胡牌比例
          SpaceOutCard: 3.1 * 1.25 * 0.01,
          // 出牌间隙
          SpaceHuCard: 3.1 * 1.1 * 0.01,
          // 胡牌间隙
          CenterToWallCard: 31.2,
          // 牌墙与桌子中心的距离
          CenterToOutCard: 20,
          // 出牌与桌子中心的距离
          CenterToHandCard: 40,
          // 手牌与桌子中心的距离
          CenterToHuCard: 31.2,
          // 胡牌与桌子中心的距离
          CenterToHuCardX: 27,
          // 胡牌与桌子边缘的距离
          CenterToMeld: [45, 50, 45, 50],
          // 碰杠牌与桌子中心的距离：东南西北
          EdgeToMeld: [50, 26, 50, 34],
          // 碰杠牌与桌子边缘的距离：东南西北
          SpaceMeldCard: 3.1 * 0.01 // 出牌间隙

        };
        var AnimType;

        (function (AnimType) {
          AnimType[AnimType["GameStart"] = 0] = "GameStart";
          AnimType[AnimType["GameOver"] = 1] = "GameOver";
          AnimType[AnimType["Hu"] = 2] = "Hu";
          AnimType[AnimType["Hu2"] = 3] = "Hu2";
          AnimType[AnimType["Peng"] = 4] = "Peng";
        })(AnimType || (AnimType = {}));

        _GameViewConfig.AnimType = AnimType;
      })(GameViewConfig || _export("GameViewConfig", GameViewConfig = {}));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=db842c647522b22153f6c209b78b273735c67544.js.map