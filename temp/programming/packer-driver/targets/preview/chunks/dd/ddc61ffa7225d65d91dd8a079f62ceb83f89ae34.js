System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, AudioClip, AudioSource, error, _decorator, resLoader, _dec, _class, _crd, ccclass, menu, AudioEffect;

  function _reportPossibleCrUseOfresLoader(extras) {
    _reporterNs.report("resLoader", "../loader/ResLoader", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      AudioClip = _cc.AudioClip;
      AudioSource = _cc.AudioSource;
      error = _cc.error;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      resLoader = _unresolved_2.resLoader;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e52d2ysY1BEbpcT2Cz0Wwss", "AudioEffect", undefined);

      __checkObsolete__(['AudioClip', 'AudioSource', 'error', '_decorator']);

      ({
        ccclass,
        menu
      } = _decorator);
      /**
       * 注：用playOneShot播放的音乐效果，在播放期间暂时没办法即时关闭音乐
       */

      /** 游戏音效 */

      _export("AudioEffect", AudioEffect = (_dec = ccclass('AudioEffect'), _dec(_class = class AudioEffect extends AudioSource {
        constructor() {
          super();
          this._isPause = false;
          this._isStopPlay = false;
          this._isStartPlay = false;
          this._currowVolume = 1;
          this.currowPlayEffect = {
            bundle: null,
            path: null
          };
          this.effects = new Map();
        }
        /** 是否处于暂停中 */


        initData() {
          /** 是否处于暂停中 */
          this._isPause = false;
          /** 是否停止了播放 */

          this._isStopPlay = false;
          /** 是否播放阶段 */

          this._isStartPlay = false;

          if (this.clip) {
            this.stop();
          }

          this.clip = null;
          this.currowPlayEffect = {
            bundle: null,
            path: null
          };
        }

        load(bundleName, path, callback) {
          if (bundleName === void 0) {
            bundleName = "resources";
          }

          this._isStopPlay = false;
          this._isStartPlay = true;
          var self = this;
          (_crd && resLoader === void 0 ? (_reportPossibleCrUseOfresLoader({
            error: Error()
          }), resLoader) : resLoader).load(bundleName, path, AudioClip, (err, data) => {
            if (err) {
              error(err);
            }

            self.realLoadAudioClip.call(self, bundleName, path, data, callback);
          });
        }
        /** 真正的加载包 */


        realLoadAudioClip(bundleName, path, audioClip, callback) {
          this._isStartPlay = false;

          if (!this.node || this.node.isValid == false) {
            this.currowPlayEffect = {
              bundle: null,
              path: null
            };
            return;
          }

          if (this._isStopPlay == true) {
            return;
          }

          this.loop = false;
          this.clip = audioClip;
          this.currowPlayEffect = {
            bundle: bundleName,
            path: path
          };
          this.effects.set(path, bundleName);
          this.volume = this._currowVolume;
          this.startPlay();

          if (callback) {
            callback();
          }
        }
        /** 获取当前正在播放的资源配置(停止播放时清空) */


        getCurrowPlayConf() {
          return this.currowPlayEffect;
        }
        /** 是否处于播放阶段 */


        isPlay() {
          if (this._isStartPlay) {
            return true;
          }

          return this.state == AudioSource.AudioState.PLAYING;
        }
        /** 是否处于暂停阶段 */


        isPause() {
          return this.state == AudioSource.AudioState.PAUSED;
        }
        /** 播放 */


        startPlay() {
          this.play();
          this._isPause = false;
        }
        /** 暂停 */


        startPause() {
          this.pause();
          this._isPause = true;
        }
        /** 停止 */


        startStop() {
          this.stop();
          this._isStopPlay = true;
          this.currowPlayEffect = {
            bundle: null,
            path: null
          };
        }
        /** 设置音量 0~1 */


        setVolume(num) {
          num = Number(num);

          if (isNaN(num)) {
            return;
          }

          if (num > 1) {
            num = 1;
          } else if (num < 0) {
            num = 0;
          }

          this._currowVolume = num;

          if (this.isPlay() || this.isPause()) {
            this.volume = this._currowVolume;
          }
        }

        release() {
          console.log("=============>音效资源释放：", this.effects);

          for (var key in this.effects) {
            (_crd && resLoader === void 0 ? (_reportPossibleCrUseOfresLoader({
              error: Error()
            }), resLoader) : resLoader).release(key, this.effects[key]);
          }

          this.startStop();
          this.effects.clear();
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ddc61ffa7225d65d91dd8a079f62ceb83f89ae34.js.map