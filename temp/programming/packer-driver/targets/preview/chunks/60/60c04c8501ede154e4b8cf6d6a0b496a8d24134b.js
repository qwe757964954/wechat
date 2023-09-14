System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, AppSound, AudioPackage, FXJSound, _crd;

  function _reportPossibleCrUseOfAppSound(extras) {
    _reporterNs.report("AppSound", "../../../config/AppSound", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioPackage(extras) {
    _reporterNs.report("AudioPackage", "../../../config/AppSound", _context.meta, extras);
  }

  _export("FXJSound", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      AppSound = _unresolved_2.AppSound;
      AudioPackage = _unresolved_2.AudioPackage;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "36323jmvupIoLD0m6svaueL", "FXJSound", undefined);

      /**
       * Name = FXJSound
       * URL = db://assets/package/game/common/FXJRes.ts
       * Time = Mon Jul 24 2023 18:46:53 GMT+0800 (中国标准时间)
       * Author = xueya
       * 游戏音效配置
       */

      /** 系统音乐 */
      _export("FXJSound", FXJSound = class FXJSound extends (_crd && AppSound === void 0 ? (_reportPossibleCrUseOfAppSound({
        error: Error()
      }), AppSound) : AppSound) {});

      FXJSound.BgGame = {
        bundle: (_crd && AudioPackage === void 0 ? (_reportPossibleCrUseOfAudioPackage({
          error: Error()
        }), AudioPackage) : AudioPackage).GAME,
        path: "music/game_bg"
      };
      FXJSound.InteractProp = {
        bundle: (_crd && AudioPackage === void 0 ? (_reportPossibleCrUseOfAudioPackage({
          error: Error()
        }), AudioPackage) : AudioPackage).GAME,
        path: "interactProp/Prop_{0}"
      };
      FXJSound.GameBattle = {
        bundle: (_crd && AudioPackage === void 0 ? (_reportPossibleCrUseOfAudioPackage({
          error: Error()
        }), AudioPackage) : AudioPackage).GAME,
        path: "effect/battle_start_end"
      };
      FXJSound.GameRoll = {
        bundle: (_crd && AudioPackage === void 0 ? (_reportPossibleCrUseOfAudioPackage({
          error: Error()
        }), AudioPackage) : AudioPackage).GAME,
        path: "effect/roll_dices"
      };
      FXJSound.GameClick = {
        bundle: (_crd && AudioPackage === void 0 ? (_reportPossibleCrUseOfAudioPackage({
          error: Error()
        }), AudioPackage) : AudioPackage).GAME,
        path: "effect/click"
      };
      FXJSound.GamePushUp = {
        bundle: (_crd && AudioPackage === void 0 ? (_reportPossibleCrUseOfAudioPackage({
          error: Error()
        }), AudioPackage) : AudioPackage).GAME,
        path: "effect/ti_pai"
      };
      FXJSound.GameAdjust = {
        bundle: (_crd && AudioPackage === void 0 ? (_reportPossibleCrUseOfAudioPackage({
          error: Error()
        }), AudioPackage) : AudioPackage).GAME,
        path: "effect/adjust"
      };
      FXJSound.GameDiscard = {
        bundle: (_crd && AudioPackage === void 0 ? (_reportPossibleCrUseOfAudioPackage({
          error: Error()
        }), AudioPackage) : AudioPackage).GAME,
        path: "{0}/type_{1}_{2}"
      };
      FXJSound.GameChi = {
        bundle: (_crd && AudioPackage === void 0 ? (_reportPossibleCrUseOfAudioPackage({
          error: Error()
        }), AudioPackage) : AudioPackage).GAME,
        path: "{0}/action_chi"
      };
      FXJSound.GamePeng = {
        bundle: (_crd && AudioPackage === void 0 ? (_reportPossibleCrUseOfAudioPackage({
          error: Error()
        }), AudioPackage) : AudioPackage).GAME,
        path: "{0}/action_peng"
      };
      FXJSound.GameGang = {
        bundle: (_crd && AudioPackage === void 0 ? (_reportPossibleCrUseOfAudioPackage({
          error: Error()
        }), AudioPackage) : AudioPackage).GAME,
        path: "{0}/action_gang"
      };
      FXJSound.GameHu = {
        bundle: (_crd && AudioPackage === void 0 ? (_reportPossibleCrUseOfAudioPackage({
          error: Error()
        }), AudioPackage) : AudioPackage).GAME,
        path: "{0}/action_hu"
      };
      FXJSound.GameZiMo = {
        bundle: (_crd && AudioPackage === void 0 ? (_reportPossibleCrUseOfAudioPackage({
          error: Error()
        }), AudioPackage) : AudioPackage).GAME,
        path: "{0}/action_zimo"
      };
      FXJSound.GameDianPaoAni = {
        bundle: (_crd && AudioPackage === void 0 ? (_reportPossibleCrUseOfAudioPackage({
          error: Error()
        }), AudioPackage) : AudioPackage).GAME,
        path: "effect/hu1"
      };
      FXJSound.GameHuAni = {
        bundle: (_crd && AudioPackage === void 0 ? (_reportPossibleCrUseOfAudioPackage({
          error: Error()
        }), AudioPackage) : AudioPackage).GAME,
        path: "effect/hu2"
      };
      FXJSound.GameQiPai = {
        bundle: (_crd && AudioPackage === void 0 ? (_reportPossibleCrUseOfAudioPackage({
          error: Error()
        }), AudioPackage) : AudioPackage).GAME,
        path: "effect/qi_pai"
      };
      FXJSound.GameTiPai = {
        bundle: (_crd && AudioPackage === void 0 ? (_reportPossibleCrUseOfAudioPackage({
          error: Error()
        }), AudioPackage) : AudioPackage).GAME,
        path: "effect/ti_pai"
      };
      FXJSound.GameMoneyDance = {
        bundle: (_crd && AudioPackage === void 0 ? (_reportPossibleCrUseOfAudioPackage({
          error: Error()
        }), AudioPackage) : AudioPackage).GAME,
        path: "effect/money_dance"
      };

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=60c04c8501ede154e4b8cf6d6a0b496a8d24134b.js.map