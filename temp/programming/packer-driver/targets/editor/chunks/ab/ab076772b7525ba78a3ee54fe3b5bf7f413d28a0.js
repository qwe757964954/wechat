System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, assetManager, AudioClip, AudioSource, director, Node, _decorator, AppEvent, AudioEffect, AudioMusic, LocalStorage, BaseControll, _dec, _class, _class2, _crd, ccclass, LOCAL_STORE_KEY, AudioManager;

  function _reportPossibleCrUseOfAppEvent(extras) {
    _reporterNs.report("AppEvent", "../../config/AppEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioEffect(extras) {
    _reporterNs.report("AudioEffect", "../audio/AudioEffect", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioMusic(extras) {
    _reporterNs.report("AudioMusic", "../audio/AudioMusic", _context.meta, extras);
  }

  function _reportPossibleCrUseOfinf_AudioPlay(extras) {
    _reporterNs.report("inf_AudioPlay", "../InterfaceDefines", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLocalStorage(extras) {
    _reporterNs.report("LocalStorage", "../LocalStorage", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseControll(extras) {
    _reporterNs.report("BaseControll", "../vc/BaseController", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      assetManager = _cc.assetManager;
      AudioClip = _cc.AudioClip;
      AudioSource = _cc.AudioSource;
      director = _cc.director;
      Node = _cc.Node;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      AppEvent = _unresolved_2.AppEvent;
    }, function (_unresolved_3) {
      AudioEffect = _unresolved_3.AudioEffect;
    }, function (_unresolved_4) {
      AudioMusic = _unresolved_4.AudioMusic;
    }, function (_unresolved_5) {
      LocalStorage = _unresolved_5.LocalStorage;
    }, function (_unresolved_6) {
      BaseControll = _unresolved_6.BaseControll;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f9adcU8rCpAI4ZuI5QyfjAj", "AudioManager", undefined);

      __checkObsolete__(['assetManager', 'AudioClip', 'AudioSource', 'director', 'Node', '_decorator']);

      ({
        ccclass
      } = _decorator);
      /**
       * Name = AudioManager
       * URL = db://assets/framework/manager/AudioManager.ts
       * Time = Thu Apr 28 2022 15:19:38 GMT+0800 (中国标准时间)
       * Author = xueya
       *
       * Life: onLoad-->onEnable->start->update->lateUpdate->onDisable->onDestroy
       * 音效管理
       */

      LOCAL_STORE_KEY = "game_audio";

      _export("AudioManager", AudioManager = (_dec = ccclass('AudioManager'), _dec(_class = (_class2 = class AudioManager extends (_crd && BaseControll === void 0 ? (_reportPossibleCrUseOfBaseControll({
        error: Error()
      }), BaseControll) : BaseControll) {
        constructor(...args) {
          super(...args);
          this._audioManagerNode = null;
          this.musicPNode = null;
          this.effectPNode = null;
          this.local_data = {};
          this.nodeEffectList = [];
          this._volume_music = 1;
          this._volume_effect = 1;
          this._switch_music = true;
          this._switch_effect = true;
          this._uuid = "10000";
          this._localStorageTag = "";
          this._playMusicData = {};
          this._lastPlayMusicData = [];
        }

        static getInstance() {
          if (!this._instance || this._instance == null) {
            this._instance = new AudioManager("AudioManager");
          }

          if (!this._instance._audioManagerNode) {
            let root = director.getScene().getChildByName("root");
            let nodeAudioManager = root.getChildByName("NodeAudioManager");

            if (!nodeAudioManager) {
              nodeAudioManager = new Node("UIAudioManager");
              root.addChild(nodeAudioManager);
            }

            this._instance._audioManagerNode = nodeAudioManager;
            let nodeUIMusic = nodeAudioManager.getChildByName("NodeUIMusic");

            if (!nodeUIMusic) {
              nodeUIMusic = new Node("NodeUIMusic");
              nodeUIMusic.addComponent(_crd && AudioMusic === void 0 ? (_reportPossibleCrUseOfAudioMusic({
                error: Error()
              }), AudioMusic) : AudioMusic);
              nodeAudioManager.addChild(nodeUIMusic);
            }

            this._instance.musicPNode = nodeUIMusic;
            this._instance.music = nodeUIMusic.getComponent(_crd && AudioMusic === void 0 ? (_reportPossibleCrUseOfAudioMusic({
              error: Error()
            }), AudioMusic) : AudioMusic);
            let nodeUIEffect = nodeAudioManager.getChildByName("NodeUIEffect");

            if (!nodeUIEffect) {
              nodeUIEffect = new Node("NodeUIEffect");
            }

            this._instance.effectPNode = nodeUIEffect;

            this._instance.initData();
          }

          return this._instance;
        }

        static init() {
          if (this._instance) {
            this._instance.clear();
          }

          this._instance = null;
          AudioManager.getInstance();
          return;
        }
        /** 初始化模块事件 */


        onInitModuleEvent() {
          //播放上次播放的背景音乐
          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).SYS_PLAY_MUSIC_LAST, this.receivePlayMusicLast); //播放背景音乐

          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).SYS_PLAY_MUSIC, this.receivePlayMusic); //播放音效

          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).SYS_PLAY_EFFECT, this.receivePlayEffect); //停止播放背景音乐

          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).SYS_STOP_PLAY_MUSIC, this.receiveStopPlayMusic); //停止播放音效

          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).SYS_STOP_PLAY_EFFECT, this.receiveStopPlayEffect);
        }
        /**
         * 加载音效文件目录
         * @param bundle 包名
         * @param dirPath 根目录文件夹名
         * @param upFunc 进度更新
         * @param cb 完成回调
         */


        preLoadAudioDir(bundle, dirPath, upFunc = null, cb = null) {
          dirPath = dirPath || "";
          let preKey = bundle + "|" + dirPath;
          const self = this; // 自动加载bundle

          assetManager.loadBundle(bundle, (err, bundle) => {
            if (err) {
              self.print("加载包名出错", err);

              if (cb) {
                cb(err, bundle);
              }

              return;
            }

            bundle.loadDir(dirPath, AudioClip, (finished, total, item) => {
              if (upFunc) {
                upFunc(finished, total, item);
              }
            }, (err, data) => {
              if (err) {
                self.print(err);

                if (cb) {
                  cb(err, data);
                }

                return;
              } // console.log("加载的数据：", data)


              if (cb) {
                cb(null, data);
              }
            });
          });
        }
        /** 上次音乐文件的播放 */


        receivePlayMusicLast(event) {
          if (this._lastPlayMusicData.length == 0 || this._lastPlayMusicData[0]["path"] == null) {
            this._lastPlayMusicData = [];
            return;
          }

          this._playMusicData = {};

          let musicConf = this._lastPlayMusicData.pop();

          this.playMusic(musicConf["path"], musicConf["bundle"], musicConf["isLoop"], musicConf["callback"]);
        }
        /** 音乐文件的播放 */


        receivePlayMusic(event, param) {
          if (!param || param.path == null) {
            return;
          } // this.print("背景音乐的播放：", param)


          this.playMusic(param.path, param.bundle, true, param.callEndFunc);
        }
        /** 音效文件的播放 */


        receivePlayEffect(event, param) {
          if (!param || param.path == null) {
            return;
          }

          this.playEffect(param.path, param.bundle);
        }
        /** 停止播放背景音乐 */


        receiveStopPlayMusic(event) {
          if (this.music) {
            this.music.startStop();
            this.music.clip = null;
          }
        }
        /**
         * 停止播放音效
         * @param event 
         * @param param 默认为空 可停止指定音效 { bundle: null, path: null }
         */


        receiveStopPlayEffect(event, param = null) {
          for (let i = this.nodeEffectList.length - 1; i >= 0; i--) {
            let itemConf;
            itemConf = this.nodeEffectList[i];

            if (itemConf && itemConf["node"].isValid == true) {
              if (param) {
                let effectPlayConf = itemConf["commp"].getCurrowPlayConf();

                if (effectPlayConf["bundle"] == param.bundle && effectPlayConf["path"] == param.path) {
                  itemConf["comp"].startStop();
                  itemConf["comp"].clip = null;
                }
              } else {
                itemConf["comp"].startStop();
                itemConf["comp"].clip = null;
              }
            } else {
              this.nodeEffectList.splice(i, 1);
            }
          }
        }

        initData() {
          let data = (_crd && LocalStorage === void 0 ? (_reportPossibleCrUseOfLocalStorage({
            error: Error()
          }), LocalStorage) : LocalStorage).get(this._localStorageTag);

          if (data) {
            try {
              this.local_data = JSON.parse(data);
              this._volume_music = this.local_data.volume_music;
              this._volume_effect = this.local_data.volume_effect;
              this._switch_music = this.local_data.switch_music;
              this._switch_effect = this.local_data.switch_effect;
            } catch (e) {
              this.local_data = {};
              this._volume_music = 1;
              this._volume_effect = 1;
              this._switch_music = true;
              this._switch_effect = true;
            }

            this.music.volume = this._volume_music;
          }
        }
        /** 设置玩家唯一标识 */


        setUuid(value) {
          this._uuid = value;
          this._localStorageTag = `${LOCAL_STORE_KEY}_${this._uuid}`;
        }
        /** 获取一个全新的音效空节点 */


        getNewEffect() {
          let nodeConf = null;

          for (let i = this.nodeEffectList.length - 1; i >= 0; i--) {
            let itemConf;
            itemConf = this.nodeEffectList[i];

            if (itemConf && itemConf["node"].isValid == true) {
              if (itemConf["comp"].isPlay() == false && itemConf["comp"].isPause() == false) {
                nodeConf = itemConf;
                break;
              }
            } else {
              this.nodeEffectList.splice(i, 1);
            }
          }

          if (!nodeConf) {
            let nodeUIEffect = new Node("NodeUIEffect");
            nodeUIEffect.addComponent(_crd && AudioEffect === void 0 ? (_reportPossibleCrUseOfAudioEffect({
              error: Error()
            }), AudioEffect) : AudioEffect);
            this.effectPNode.addChild(nodeUIEffect);
            let comp = nodeUIEffect.getComponent(_crd && AudioEffect === void 0 ? (_reportPossibleCrUseOfAudioEffect({
              error: Error()
            }), AudioEffect) : AudioEffect);
            nodeConf = {
              node: nodeUIEffect,
              comp: comp
            };
            this.nodeEffectList.push(nodeConf);
          }

          nodeConf.comp.initData();
          nodeConf.comp.volume = this._volume_effect;
          return nodeConf;
        }
        /**
         *  播放背景音乐
         * @param path        资源地址
         * @param bundleName  包名
         * @param isLoop      是否循环 默认循环
         * @param callback    音乐播放完成事件
         */


        playMusic(path, bundleName = "resources", isLoop = true, callback = null) {
          if (this._playMusicData["path"]) {
            this._lastPlayMusicData.push({
              path: this._playMusicData["path"],
              bundle: this._playMusicData["bundle"],
              isLoop: this._playMusicData["isLoop"],
              callback: this._playMusicData["callback"]
            });
          } //保存参数配置


          this._playMusicData = {
            path: path,
            bundle: bundleName,
            isLoop: isLoop,
            callback: callback
          };

          if (this._switch_music) {
            this.music.load(bundleName, path);
            this.music.loop = isLoop;
            this.music.onComplete = callback;
          } else {
            this.print("播放音乐失败,开关已关闭path=", path);
          }
        }
        /**
         * 播放音效
         * @param path        资源地址
         * @param bundleName  包名
         */


        playEffect(path, bundleName = "resources") {
          if (this._switch_effect) {
            let effectConf = this.getNewEffect();
            effectConf.comp.load(bundleName, path);
            effectConf.comp.setVolume(this._volume_effect);
          }
        }
        /** 获取背景音乐音量 */


        get musicVolume() {
          return this._volume_music;
        }
        /** 设置音乐音量 */


        set MusicVolume(value) {
          this._volume_music = value;
          this.music.setVolume(value);
        }
        /** 获取音效音量 */


        get effectVolume() {
          return this._volume_effect;
        }
        /** 设置音效音量 */


        set EffectVolume(value) {
          this._volume_effect = value;
        }
        /** 获取音乐开关 */


        getSwitchMusic() {
          return this._switch_music;
        }
        /** 设置背景音乐开关 */


        setSwitchMusic(value) {
          this._switch_music = value;

          if (this._switch_music == true) {
            if (this.music.state == AudioSource.AudioState.PAUSED) {
              this.music.startPlay();
            } else if (this.music.isPlay() == false) {
              if (this._playMusicData["path"] && this._playMusicData["bundle"]) {
                let currowMusicConf = {
                  path: this._playMusicData["path"],
                  bundle: this._playMusicData["bundle"],
                  isLoop: this._playMusicData["isLoop"],
                  callback: this._playMusicData["callback"]
                };
                this._playMusicData = {};
                this.music.updatePauseState(false);
                this.playMusic(currowMusicConf["path"], currowMusicConf["bundle"], currowMusicConf["isLoop"], currowMusicConf["callback"]);
              } else {
                this.print("没有音乐文件配置");
              }
            }
          } else {
            this.music.startStop();
          }
        }
        /** 音效开关 */


        getSwitchEffect() {
          return this._switch_effect;
        }
        /** 设置音效开关 */


        setSwitchEffect(value) {
          this._switch_effect = value;

          if (value == false) {
            for (let i = this.nodeEffectList.length - 1; i >= 0; i--) {
              let itemConf;
              itemConf = this.nodeEffectList[i];

              if (itemConf && itemConf["node"].isValid == true) {
                itemConf["comp"].startStop();
                itemConf["comp"].clip = null;
              } else {
                this.nodeEffectList.splice(i, 1);
              }
            }
          }
        }
        /** 恢复所有 */


        resumeAll() {
          this.print("恢复所有:", this._switch_music, this._switch_effect, this._playMusicData);

          if (this._switch_music == true) {
            if (this.music) {
              this.print("当前音乐状态：===>", this.music.state, this.music.clip);

              if (this.music.state == AudioSource.AudioState.PAUSED && this.music.clip) {
                this.music.startPlay();
              } else if (this.music.isPlay() == false) {
                if (this._playMusicData["path"] && this._playMusicData["bundle"]) {
                  let currowMusicConf = {
                    path: this._playMusicData["path"],
                    bundle: this._playMusicData["bundle"],
                    isLoop: this._playMusicData["isLoop"],
                    callback: this._playMusicData["callback"]
                  };
                  this._playMusicData = {};
                  this.music.updatePauseState(false);
                  this.playMusic(currowMusicConf["path"], currowMusicConf["bundle"], currowMusicConf["isLoop"], currowMusicConf["callback"]);
                }
              }
            }
          } // if (this._switch_effect == true) {
          //     if (this.effect && this.effect.clip) {
          //         if (this.effect.state == AudioSource.AudioState.PAUSED) {
          //             this.effect.play();
          //         }
          //     }
          // }

        }
        /** 暂停所有 */


        pauseAll() {
          if (this.music.isPlay() == true) {
            this.music.startPause();
          }

          for (let i = this.nodeEffectList.length - 1; i >= 0; i--) {
            let itemConf;
            itemConf = this.nodeEffectList[i];

            if (itemConf && itemConf["node"].isValid == true) {
              if (itemConf["comp"].state == AudioSource.AudioState.PLAYING) {
                itemConf["comp"].startStop();
                itemConf["comp"].clip = null;
              }
            } else {
              this.nodeEffectList.splice(i, 1);
            }
          }
        }
        /** 停止播放 */


        stopAll() {
          if (this.music) {
            this.music.startStop();
            this.music.clip = null;
          }

          for (let i = this.nodeEffectList.length - 1; i >= 0; i--) {
            let itemConf;
            itemConf = this.nodeEffectList[i];

            if (itemConf && itemConf["node"].isValid == true) {
              itemConf["comp"].startStop();
              itemConf["comp"].clip = null;
            } else {
              this.nodeEffectList.splice(i, 1);
            }
          }
        }
        /** 是否关闭了所有 */


        isCloseAll() {
          if (!this.getSwitchMusic() && !this.getSwitchMusic()) {
            return true;
          }

          return false;
        }

        save() {
          this.local_data.volume_music = this._volume_music;
          this.local_data.volume_effect = this._volume_effect;
          this.local_data.switch_music = this._switch_music;
          this.local_data.switch_effect = this._switch_effect;
          let data = JSON.stringify(this.local_data);
          (_crd && LocalStorage === void 0 ? (_reportPossibleCrUseOfLocalStorage({
            error: Error()
          }), LocalStorage) : LocalStorage).set(this._localStorageTag, data);
        }
        /** 清理所有 */


        releaseAll() {
          this.print("AudioManager清理所有=====>");
          this.stopAll();
          this._playMusicData = {};

          if (this.music) {
            this.music.release();
          }

          for (let i = this.nodeEffectList.length - 1; i >= 0; i--) {
            let itemConf;
            itemConf = this.nodeEffectList[i];

            if (itemConf && itemConf["node"].isValid == true) {
              itemConf["comp"].release();
            } else {
              this.nodeEffectList.splice(i, 1);
            }
          }
        }

        clear() {
          super.clear();
          this.releaseAll();
        }

      }, _class2._instance = void 0, _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ab076772b7525ba78a3ee54fe3b5bf7f413d28a0.js.map