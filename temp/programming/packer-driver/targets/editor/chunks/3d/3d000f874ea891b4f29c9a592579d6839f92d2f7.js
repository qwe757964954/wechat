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

      FXJSound.InteractProp = {
        bundle: (_crd && AudioPackage === void 0 ? (_reportPossibleCrUseOfAudioPackage({
          error: Error()
        }), AudioPackage) : AudioPackage).GAME,
        path: "interactProp/Prop_{0}"
      };

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=3d000f874ea891b4f29c9a592579d6839f92d2f7.js.map