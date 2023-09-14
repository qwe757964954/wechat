System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, MahjongMap, CardUtil, _crd;

  function _reportPossibleCrUseOfMahjongMap(extras) {
    _reporterNs.report("MahjongMap", "../common/FXJConfig", _context.meta, extras);
  }

  _export("CardUtil", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      MahjongMap = _unresolved_2.MahjongMap;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4b37bXSsqpKgbzPBcSO/G5V", "CardUtil", undefined);

      _export("CardUtil", CardUtil = class CardUtil {
        static sortFeiXiaoJiCards(array) {
          var result = [...array].sort((a, b) => a - b); // 创建数组副本

          for (var i = 0; i < result.length; i++) {
            if (CardUtil.getCardValue(result[i]) === "0x21") {
              var element = result.splice(i, 1)[0];
              result.unshift(element);
            }
          }

          return result;
        }

        static addLeadingZero(num) {
          if (num < 10) {
            return "0" + num;
          }

          return num.toString();
        }

        static toHex(num) {
          var hex = num.toString(16);
          return hex.length === 1 ? "0" + hex : hex;
        }
        /**
         * 获取牌的value
         * @param key 键
         */


        static getCardValue(value) {
          var mahjongValue = value >> 8;
          var ret = null;
          ret = "0x" + CardUtil.toHex(mahjongValue);
          return ret;
        }

        static getMajiangValue(value) {
          var cardStr = CardUtil.getCardValue(value);
          return (_crd && MahjongMap === void 0 ? (_reportPossibleCrUseOfMahjongMap({
            error: Error()
          }), MahjongMap) : MahjongMap).get(cardStr);
        }

        static getMajiangValues(values) {
          var strArr = [];
          values.forEach(value => {
            var cardStr = CardUtil.getCardValue(value);
            strArr.push((_crd && MahjongMap === void 0 ? (_reportPossibleCrUseOfMahjongMap({
              error: Error()
            }), MahjongMap) : MahjongMap).get(cardStr));
          });
          return strArr;
        } //计算麻将玩家位置


        static calculatePlayerPosition(mySeatId, playerSeatId) {
          var seatDifference = (playerSeatId - mySeatId + 4) % 4;

          switch (seatDifference) {
            case 1:
              return "下家";

            case 2:
              return "对家";

            case 3:
              return "上家";

            default:
              return "自己";
          }
        } //计算麻将玩家位置


        static calculatePlayerSeat(mySeatId, playerSeatId) {
          var seatDifference = (playerSeatId - mySeatId + 4) % 4;
          return seatDifference;
        }

        static sortPlayersBySeatId(playerList, mySeatId) {
          var sortedPlayers = [];
          var myPlayer = playerList.find(player => player.seatId === mySeatId);

          if (myPlayer) {
            sortedPlayers.push(myPlayer);

            var _loop = function _loop(i) {
              var player = playerList.find(p => (p.seatId - mySeatId + 4) % 4 === i);

              if (player) {
                sortedPlayers.push(player);
              }
            };

            for (var i = 1; i <= 3; i++) {
              _loop(i);
            }
          }

          return sortedPlayers;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=c29184827bbb793984c1500f2df52706122e9325.js.map