System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, AudioClip, error, Prefab, AppEvent, pbkiller, resLoader, Utils, BaseControll, AudioManager, EventManager, SpineAniManager, PkgLoaderManager, _crd;

  function _reportPossibleCrUseOfAppEvent(extras) {
    _reporterNs.report("AppEvent", "../../config/AppEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfpbkiller(extras) {
    _reporterNs.report("pbkiller", "../crypto/pbkiller", _context.meta, extras);
  }

  function _reportPossibleCrUseOfinf_PkgLoaderTaskAdd(extras) {
    _reporterNs.report("inf_PkgLoaderTaskAdd", "../InterfaceDefines", _context.meta, extras);
  }

  function _reportPossibleCrUseOfinf_PkgLoaderTaskList(extras) {
    _reporterNs.report("inf_PkgLoaderTaskList", "../InterfaceDefines", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCompleteCallback(extras) {
    _reporterNs.report("CompleteCallback", "../loader/ResLoader", _context.meta, extras);
  }

  function _reportPossibleCrUseOfProgressCallback(extras) {
    _reporterNs.report("ProgressCallback", "../loader/ResLoader", _context.meta, extras);
  }

  function _reportPossibleCrUseOfresLoader(extras) {
    _reporterNs.report("resLoader", "../loader/ResLoader", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUtils(extras) {
    _reporterNs.report("Utils", "../Utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseControll(extras) {
    _reporterNs.report("BaseControll", "../vc/BaseController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioManager(extras) {
    _reporterNs.report("AudioManager", "./AudioManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventManager(extras) {
    _reporterNs.report("EventManager", "./EventManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSpineAniManager(extras) {
    _reporterNs.report("SpineAniManager", "./SpineAniManager", _context.meta, extras);
  }

  _export("PkgLoaderManager", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      AudioClip = _cc.AudioClip;
      error = _cc.error;
      Prefab = _cc.Prefab;
    }, function (_unresolved_2) {
      AppEvent = _unresolved_2.AppEvent;
    }, function (_unresolved_3) {
      pbkiller = _unresolved_3.pbkiller;
    }, function (_unresolved_4) {
      resLoader = _unresolved_4.resLoader;
    }, function (_unresolved_5) {
      Utils = _unresolved_5.Utils;
    }, function (_unresolved_6) {
      BaseControll = _unresolved_6.BaseControll;
    }, function (_unresolved_7) {
      AudioManager = _unresolved_7.AudioManager;
    }, function (_unresolved_8) {
      EventManager = _unresolved_8.EventManager;
    }, function (_unresolved_9) {
      SpineAniManager = _unresolved_9.SpineAniManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6ec5evvx/tKwoLpzTo1Z1FZ", "PkgLoaderManager", undefined);

      __checkObsolete__(['AudioClip', 'error', 'Prefab']);

      _export("PkgLoaderManager", PkgLoaderManager = class PkgLoaderManager extends (_crd && BaseControll === void 0 ? (_reportPossibleCrUseOfBaseControll({
        error: Error()
      }), BaseControll) : BaseControll) {
        static getInstance() {
          if (!this._instance || this._instance == null) {
            this._instance = new PkgLoaderManager("PkgLoaderManager");
          }

          return this._instance;
        } //实例化


        constructor(name) {
          super("PkgLoaderManager");
          this._alreadyLoad = {};
          this._currowLoad = {};
        }

        /** 模块事件 */
        onInitModuleEvent() {
          /** 添加一个分包加载任务 */
          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).SYS_PACKAGE_LOAD_TASK_ADD, this.addTask);
          /** 分包加载任务取消 */

          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).SYS_PACKAGE_LOAD_TASK_CANCLE, this.cancleTask);
        }

        static init() {
          if (this._instance) {
            this._instance.clear();
          }

          this._instance = null;
          PkgLoaderManager.getInstance();
          return;
        }
        /** 已经加载的任务 */


        /**
         * 添加包加载任务
         * @param param 详见inf_PkgLoaderTaskAdd
         * @returns 
         */
        addTask(event, param) {
          if (!param || param.taskID == null) {
            return;
          }

          if (this._alreadyLoad[param.taskID] == true) {
            if (param.endCallFunc) {
              param.endCallFunc(param.taskID);
            }

            return;
          }

          if (this._currowLoad[param.taskID] != null) {
            return;
          }

          var task = {
            taskID: param.taskID,
            taskList: param.taskList,
            taskNum: 0,
            progress: 0,
            startCallFunc: param.startCallFunc,
            updateCallFunc: param.updateCallFunc,
            endCallFunc: param.endCallFunc
          };
          this._currowLoad[param.taskID] = task;

          this._startLoad(param.taskID);
        }
        /** 取消一个任务 */


        cancleTask(event, taskID) {
          if (taskID != null && this._currowLoad[taskID] != null) {
            this._currowLoad[taskID] = null;
            this.print(">>>\u53D6\u6D88\u52A0\u8F7D\u4EFB\u52A1:" + taskID + "\u6210\u529F\uFF01\uFF01\uFF01");
            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
              error: Error()
            }), AppEvent) : AppEvent).SYS_PACKAGE_LOAD_TASK_CANCLE_SURE, taskID);
          }
        }
        /** 开始加载 */


        _startLoad(taskID) {
          if (!this._currowLoad[taskID]) {
            return;
          }

          var self = this;
          var taskProgress = {};

          var callback = function callback(pPath, progress) {
            if (!self._currowLoad[taskID]) {
              return;
            }

            if (progress == -1) {
              error("加载任务出错 包路径：" + pPath);
              return;
            }

            taskProgress[pPath] = progress;
            var taskTab = self._currowLoad[taskID];
            var allCountProgress = 100 * taskTab.taskNum;
            var countAll = 0;

            for (var _pPath in taskProgress) {
              var oneProgess = taskProgress[_pPath];
              countAll = countAll + oneProgess;
            }

            self._currowLoad[taskID].progress = 100 * countAll / allCountProgress; // console.log("输出总进度:", self._currowLoad[taskID].progress);

            if (self._currowLoad[taskID].updateCallFunc) {
              self._currowLoad[taskID].updateCallFunc(taskID, self._currowLoad[taskID].progress);
            }

            if (self._currowLoad[taskID].progress == 100) {
              //加载完成
              self._alreadyLoad[taskID] = true;

              if (self._currowLoad[taskID].endCallFunc) {
                self._currowLoad[taskID].endCallFunc(taskID);
              }

              self._currowLoad[taskID] = null;
            }
          };

          if (this._currowLoad[taskID].taskList) {
            if (this._currowLoad[taskID].startCallFunc) {
              this._currowLoad[taskID].startCallFunc(taskID);
            }

            var isRealLoad = false;
            var oneLoad = null; //加载PB文件

            if (this._currowLoad[taskID].taskList.protobuf == true) {
              isRealLoad = true;

              this.__addPreLoadPB(this._currowLoad[taskID], callback);
            } //加载bundle


            if (this._currowLoad[taskID].taskList.package && this._currowLoad[taskID].taskList.package.length > 0) {
              for (var i = 0; i < this._currowLoad[taskID].taskList.package.length; i++) {
                oneLoad = this._currowLoad[taskID].taskList.package[i];

                if (oneLoad != null && oneLoad != "") {
                  isRealLoad = true;

                  this.__addBundleLoad(this._currowLoad[taskID], oneLoad, callback);
                }
              }
            } //加载预制体


            if (this._currowLoad[taskID].taskList.prefab && this._currowLoad[taskID].taskList.prefab.length > 0) {
              for (var _i = 0; _i < this._currowLoad[taskID].taskList.prefab.length; _i++) {
                oneLoad = this._currowLoad[taskID].taskList.prefab[_i];

                if (oneLoad && oneLoad.path != null) {
                  isRealLoad = true;

                  this.__addOneLoad(this._currowLoad[taskID], oneLoad.bundle, oneLoad.path, Prefab, callback);
                }
              }
            } //加载音乐文件


            if (this._currowLoad[taskID].taskList.audio && this._currowLoad[taskID].taskList.audio.length > 0) {
              for (var _i2 = 0; _i2 < this._currowLoad[taskID].taskList.audio.length; _i2++) {
                oneLoad = this._currowLoad[taskID].taskList.audio[_i2];

                if (oneLoad) {
                  if ((oneLoad.path == null || oneLoad.path == "") && oneLoad.bundle != null) {
                    //加载音乐包
                    isRealLoad = true;

                    this.__addPreLoadAudio(this._currowLoad[taskID], oneLoad.bundle, "", callback);
                  } else if (oneLoad.path != null && oneLoad.path != "") {
                    //加载单个音乐文件
                    isRealLoad = true;

                    this.__addOneLoad(this._currowLoad[taskID], oneLoad.bundle, oneLoad.path, AudioClip, callback);
                  }
                }
              }
            } //加载spine动画


            if (this._currowLoad[taskID].taskList.spine && this._currowLoad[taskID].taskList.spine.length > 0) {
              for (var _i3 = 0; _i3 < this._currowLoad[taskID].taskList.spine.length; _i3++) {
                oneLoad = this._currowLoad[taskID].taskList.spine[_i3];

                if (oneLoad && oneLoad.path != null && oneLoad.bundle != null) {
                  isRealLoad = true;

                  this.__addPreLoadSpine(this._currowLoad[taskID], oneLoad.bundle, oneLoad.path, callback);
                }
              }
            }

            if (isRealLoad == true) {
              return;
            }
          }

          this._alreadyLoad[taskID] = true;

          if (this._currowLoad[taskID].endCallFunc) {
            this._currowLoad[taskID].endCallFunc(taskID);
          }
        }
        /** 添加一个包加载 */


        __addBundleLoad(task, bundle, updateCallback) {
          task.taskNum = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).number_valueOf(task.taskNum) + 1;
          var currowProgress = -1;

          var onComplete = (err, data) => {
            if (err) {
              currowProgress = -1;
            } else {
              currowProgress = 100;
            }

            if (updateCallback) {
              updateCallback(bundle, currowProgress);
            }
          };

          (_crd && resLoader === void 0 ? (_reportPossibleCrUseOfresLoader({
            error: Error()
          }), resLoader) : resLoader).loadBundle(bundle, onComplete);
        }
        /** 添加一个加载 */


        __addOneLoad(task, bundle, path, type, updateCallback) {
          task.taskNum = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).number_valueOf(task.taskNum) + 1;
          var self = this;
          var currowProgress = -1;

          var onProgress = (finished, total, item) => {
            // 计算进度
            var progress = finished / total * 100;
            currowProgress = progress;

            if (currowProgress < 100 && updateCallback) {
              updateCallback(path, currowProgress);
            }
          };

          var onComplete = (err, data) => {
            if (err) {
              currowProgress = -1;
            }

            if (updateCallback) {
              updateCallback(path, currowProgress);
            }
          };

          (_crd && resLoader === void 0 ? (_reportPossibleCrUseOfresLoader({
            error: Error()
          }), resLoader) : resLoader).load(bundle, path, type, onProgress, onComplete);
        }
        /** 添加音效预加载目录 */


        __addPreLoadAudio(task, bundle, path, updateCallback) {
          task.taskNum = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).number_valueOf(task.taskNum) + 1;
          var self = this;
          var currowProgress = -1;
          var tag = bundle + "|" + path;

          var onProgress = (finished, total, item) => {
            // 计算进度
            var progress = finished / total * 100;
            currowProgress = progress;

            if (currowProgress < 100 && updateCallback) {
              updateCallback(tag, currowProgress);
            }
          };

          var onComplete = (err, data) => {
            if (err) {
              currowProgress = -1;
              return;
            }

            self.print("音效预加载目录完成", bundle, path);

            if (updateCallback) {
              updateCallback(tag, currowProgress);
            }
          };

          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).getInstance().preLoadAudioDir(bundle, path, onProgress, onComplete);
        }
        /** 添加Spine预加载目录 */


        __addPreLoadSpine(task, bundle, path, updateCallback) {
          task.taskNum = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).number_valueOf(task.taskNum) + 1;
          var self = this;
          var currowProgress = -1;
          var tag = bundle + "|" + path;

          var onProgress = (finished, total, item) => {
            // 计算进度
            var progress = finished / total * 100;
            currowProgress = progress;

            if (currowProgress < 100 && updateCallback) {
              updateCallback(tag, currowProgress);
            }
          };

          var onComplete = (err, data) => {
            if (err) {
              self.print("Error:Spine加载出错", err, data);
              currowProgress = -1;
              return;
            }

            self.print("Spine预加载目录完成", bundle, path);

            if (updateCallback) {
              updateCallback(tag, currowProgress);
            }
          };

          (_crd && SpineAniManager === void 0 ? (_reportPossibleCrUseOfSpineAniManager({
            error: Error()
          }), SpineAniManager) : SpineAniManager).getInstance().preLoadSkinAniDir(bundle, path, onProgress, onComplete);
        }
        /** 添加PB预加载目录 */


        __addPreLoadPB(task, updateCallback) {
          task.taskNum = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).number_valueOf(task.taskNum) + 1;
          var self = this;
          var currowProgress = -1;
          var tag = "pbkiller";

          var onProgress = (finished, total, item) => {
            // 计算进度
            var progress = finished / total * 100;
            currowProgress = progress;

            if (currowProgress < 100 && updateCallback) {
              updateCallback(tag, currowProgress);
            }
          };

          var onComplete = (err, data) => {
            if (err) {
              currowProgress = -1;
              (_crd && pbkiller === void 0 ? (_reportPossibleCrUseOfpbkiller({
                error: Error()
              }), pbkiller) : pbkiller).preload(onProgress, onComplete);
              return;
            }

            self.print("PB文件目录遍历完成 开始加载"); //初始化Pb加载

            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
              error: Error()
            }), AppEvent) : AppEvent).SYS_UPDATE_PROTOBUF);

            if (updateCallback) {
              updateCallback(tag, currowProgress);
            }
          };

          (_crd && pbkiller === void 0 ? (_reportPossibleCrUseOfpbkiller({
            error: Error()
          }), pbkiller) : pbkiller).preload(onProgress, onComplete);
        }

      });

      PkgLoaderManager._instance = null;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=5f21c07fce1c2b8d3c097d5b99eb47c7375e8c45.js.map