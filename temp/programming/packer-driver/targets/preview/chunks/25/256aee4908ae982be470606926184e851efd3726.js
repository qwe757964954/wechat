System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, AudioClip, AudioSource, error, _decorator, resLoader, _dec, _class, _crd, ccclass, menu, AudioMusic;

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

      _cclegacy._RF.push({}, "5c1f3kqGetBiIv48/CvuaQv", "AudioMusic", undefined);

      __checkObsolete__(['AudioClip', 'AudioSource', 'error', '_decorator']);

      ({
        ccclass,
        menu
      } = _decorator);
      /** 背景音乐 */

      _export("AudioMusic", AudioMusic = (_dec = ccclass('AudioMusic'), _dec(_class = class AudioMusic extends AudioSource {
        /** 是否处于暂停中 */

        /** 是否停止了播放 */

        /** 是否播放阶段 */

        /** 当前音量 */
        constructor() {
          super();
          this.onComplete = null;
          this._progress = 0;
          this._bundle = "resources";
          this._path = null;
          this._isPause = false;
          this._isStopPlay = false;
          this._isStartPlay = false;
          this._currowVolume = 1;
        }
        /**
         * 设置音乐当前播放进度
         * @param progress 进度百分比(0~1)
         */


        get progress() {
          this._progress = this.currentTime / this.duration;
          return this._progress;
        }

        set progress(value) {
          this._progress = value;
          this.currentTime = value * this.duration;
        }

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
        }

        load(bundleName, path, callback) {
          if (bundleName === void 0) {
            bundleName = "resources";
          }

          //针对同一音频不再重复播放
          if (this._path == path && this._bundle == bundleName) {
            if (this.isPlay() == true) {
              if (callback) {
                callback();
              }

              console.log("针对同一音频不再重复播放--->", 1, this._isPause);
              return;
            } else {
              if (this.clip) {
                if (this._isPause == false) {
                  if (this.playing == false) {
                    //此处有可能为中断
                    this.startPause();
                    this.startPlay();
                  }
                }

                if (callback) {
                  callback();
                }

                console.log("针对同一音频不再重复播放--->", 2, this._isPause, this.playing, this.state);
                return;
              }
            }
          }

          this._isStopPlay = false;
          this._isStartPlay = true; // console.log(" 开始播放===>", path)

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
            return;
          }

          if (this._isStopPlay == true) {
            return;
          }

          if (this.playing || this.state == AudioSource.AudioState.INTERRUPTED) {
            this.startStop();

            if (this._path != path && this._bundle != bundleName) {
              (_crd && resLoader === void 0 ? (_reportPossibleCrUseOfresLoader({
                error: Error()
              }), resLoader) : resLoader).release(this._path, this._bundle);
            }
          }

          this.clip = audioClip;
          this.currentTime = 0;
          this.volume = this._currowVolume;

          if (this._isPause == false) {
            this.startPlay();
          }

          if (callback) {
            callback();
          }

          this._path = path;
          this._bundle = bundleName;
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
        }
        /** 更新暂停状态 */


        updatePauseState(state) {
          this._isPause = state || false;
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
          if (this._path) {
            (_crd && resLoader === void 0 ? (_reportPossibleCrUseOfresLoader({
              error: Error()
            }), resLoader) : resLoader).release(this._path, this._bundle);
            this._path = null;
            this._bundle = "resources";
          }

          this.startStop();
          this._isPause = false;
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=256aee4908ae982be470606926184e851efd3726.js.map