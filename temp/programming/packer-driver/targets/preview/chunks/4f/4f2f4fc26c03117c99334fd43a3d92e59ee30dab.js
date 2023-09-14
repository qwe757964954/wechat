System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, FXJRes, _crd, FXJConstant;

  function _reportPossibleCrUseOfFXJRes(extras) {
    _reporterNs.report("FXJRes", "./FXJRes", _context.meta, extras);
  }

  _export("FXJConstant", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      FXJRes = _unresolved_2.FXJRes;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "55a3a3Pt/FETLSBRs4Xq9rt", "FXJConstant", undefined);

      (function (_FXJConstant) {
        var PlayType = _FXJConstant.PlayType = {
          NORMAL: "normal",
          MATCH: "match"
        };
        var ChatText = _FXJConstant.ChatText = {
          /** 热门聊天语 */
          hot: ["Bro，靠你了", "退退退", "我摆烂了你随意", "我不装了我摊牌了", "我服了你个老六", "我真是栓Q了", "完了,芭比Q了!", "U1S1,你牌打得也忒烂了"],

          /** 经典聊天语 */
          classic: ["向我开炮吧！", "快点我等到花儿都谢了", "醒醒啊，我们在打牌呢"]
        };
        var ChatEmojiAniConf = _FXJConstant.ChatEmojiAniConf = {
          [1]: "1_XYX",
          [2]: "2_KS",
          [3]: "3_Heng",
          [4]: "4_MR",
          [5]: "5_KuQi",
          [6]: "6_Yun",
          [7]: "7_SX",
          [8]: "8_JX",
          [9]: "9_Nu",
          [10]: "10_Se",
          [11]: "11_Zan",
          [12]: "12_Ku",
          [13]: "13_Ye",
          [14]: "14_Shuai",
          [15]: "15_WX",
          [16]: "16_CYX"
        };
        var EmojiProp = _FXJConstant.EmojiProp = [//鸡蛋
        {
          name: "鸡蛋",
          propID: 100,
          icon: "jidan",
          // audio: FXJSound.emojiProp100,
          aniPath: (_crd && FXJRes === void 0 ? (_reportPossibleCrUseOfFXJRes({
            error: Error()
          }), FXJRes) : FXJRes).Spine_Hddj,
          aniName: ["JiDan_l", "JiDan_r"]
        }, //锤子
        {
          name: "锤子",
          propID: 101,
          icon: "chuizi",
          // audio: FXJSound.emojiProp101,
          aniPath: (_crd && FXJRes === void 0 ? (_reportPossibleCrUseOfFXJRes({
            error: Error()
          }), FXJRes) : FXJRes).Spine_Hddj,
          aniName: ["ChuiZi_l", "ChuiZi_r", "ChuiZi_fly_l", "ChuiZi_fly_r"]
        }, //咖啡
        {
          name: "咖啡",
          propID: 102,
          icon: "kafei",
          // audio: FXJSound.emojiProp102,
          aniPath: (_crd && FXJRes === void 0 ? (_reportPossibleCrUseOfFXJRes({
            error: Error()
          }), FXJRes) : FXJRes).Spine_Hddj,
          aniName: ["KaFei_l", "KaFei_r"]
        }, //炸弹
        {
          name: "炸弹",
          propID: 103,
          icon: "zhadan",
          // audio: FXJSound.emojiProp103,
          aniPath: (_crd && FXJRes === void 0 ? (_reportPossibleCrUseOfFXJRes({
            error: Error()
          }), FXJRes) : FXJRes).Spine_Hddj,
          aniName: ["ZhaDan_l", "ZhaDan_r"]
        }];
        var AnimNormal = _FXJConstant.AnimNormal = {
          /** 互动道具 */
          HudongProp: "HudongProp"
        };
        var HuDongPropConf = _FXJConstant.HuDongPropConf = {
          direction: {
            [1]: "_l",
            [2]: "_r",
            [3]: "_l"
          },
          anim: {
            name: "HD_daoju",
            [100]: {
              action: "JiDan{0}",
              time: 0.54
            },
            [101]: {
              action: "ChuiZi_fly{0}",
              action_end: "ChuiZi{0}",
              time: 0.5
            },
            [102]: {
              action: "KaFei{0}",
              time: 0.83,
              delayTime: 0.5
            },
            [103]: {
              action: "ZhaDan{0}",
              time: 0.6
            }
          }
        };
      })(FXJConstant || _export("FXJConstant", FXJConstant = {}));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=4f2f4fc26c03117c99334fd43a3d92e59ee30dab.js.map