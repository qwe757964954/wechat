System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, assetManager, error, sp, Vec3, _decorator, AppEvent, LayerManager, Utils, BaseControll, _dec, _class, _class2, _crd, ccclass, SpineAniManager;

  function _reportPossibleCrUseOfAppEvent(extras) {
    _reporterNs.report("AppEvent", "../../config/AppEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfinf_SpineAniCreate(extras) {
    _reporterNs.report("inf_SpineAniCreate", "../InterfaceDefines", _context.meta, extras);
  }

  function _reportPossibleCrUseOfinf_UIConfig(extras) {
    _reporterNs.report("inf_UIConfig", "../InterfaceDefines", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLayerManager(extras) {
    _reporterNs.report("LayerManager", "../layer/LayerManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUtils(extras) {
    _reporterNs.report("Utils", "../Utils", _context.meta, extras);
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
      error = _cc.error;
      sp = _cc.sp;
      Vec3 = _cc.Vec3;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      AppEvent = _unresolved_2.AppEvent;
    }, function (_unresolved_3) {
      LayerManager = _unresolved_3.LayerManager;
    }, function (_unresolved_4) {
      Utils = _unresolved_4.Utils;
    }, function (_unresolved_5) {
      BaseControll = _unresolved_5.BaseControll;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "555e7qD2ydFI69nY7RPftFe", "SpineAniManager", undefined);

      __checkObsolete__(['assetManager', 'error', 'Node', 'sp', 'Vec3', '_decorator']);

      ({
        ccclass
      } = _decorator);
      /**
       * Name = SpineAniManager
       * URL = db://assets/framework/manager/SpineAniManager.ts
       * Time = Tue Sep 20 2022 14:20:23 GMT+0800 (中国标准时间)
       * Author = Tomoe
       *
       * Life: onLoad-->onEnable->start->update->lateUpdate->onDisable->onDestroy
       */

      _export("SpineAniManager", SpineAniManager = (_dec = ccclass('SpineAniManager'), _dec(_class = (_class2 = class SpineAniManager extends (_crd && BaseControll === void 0 ? (_reportPossibleCrUseOfBaseControll({
        error: Error()
      }), BaseControll) : BaseControll) {
        constructor(...args) {
          super(...args);
          this._skinAniMapping = {};
        }

        static getInstance() {
          if (!this._instance || this._instance == null) {
            this._instance = new SpineAniManager("SpineAniManager");
          }

          return this._instance;
        }
        /** 骨骼动画资源映射 */


        static init() {
          if (this._instance) {
            this._instance.clear();
          }

          this._instance = null;
          SpineAniManager.getInstance();
          return;
        }
        /** 初始化模块事件 */


        onInitModuleEvent() {
          //播放动画
          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).SYS_ANI_PLAY, this.startPlayAni); //停止播放动画

          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).SYS_ANI_STOP, this.stopPlayAni);
        }
        /**
         * 加载骨骼动画目录
         * @param bundle 包名
         * @param dirPath 根目录文件夹名
         * @param upFunc 进度更新
         * @param cb 完成回调
         */


        preLoadSkinAniDir(bundle, dirPath, upFunc = null, cb = null) {
          if (dirPath == null || dirPath == "") {
            return;
          }

          let filePathList = String(dirPath).split("/"); //包名|根目录|文件名 or 包名|文件名

          let preKey = bundle;

          if (filePathList.length > 1) {
            dirPath = filePathList[0];
            preKey = preKey + "|" + dirPath;
          }

          const self = this; // 自动加载bundle

          assetManager.loadBundle(bundle, (err, bundle) => {
            if (err) {
              self.print("加载包名出错", err);

              if (cb) {
                cb(err, bundle);
              }

              return;
            }

            bundle.loadDir(dirPath, sp.SkeletonData, (finished, total, item) => {
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
              }

              for (let i = 0; i < data.length; i++) {
                if (data[i]["_name"] != null) {
                  let fileName = data[i]["_name"]; //文件名

                  let keyName = preKey + "|" + fileName;
                  self._skinAniMapping[keyName] = data[i];
                }
              }

              if (cb) {
                cb(null, data);
              }
            });
          });
        }
        /**
         * 批量预加载骨骼动画目录
         * @param list inf_UIConfig的Array集合
         * @param cb 根目录文件夹名
         */


        preLoadSkinAniDirList(list, updateFunc = null, cb = null) {
          if (!list || (list == null ? void 0 : list.length) <= 0) {
            return;
          } // this.print("开始预加载", list)


          for (let i = 0; i < list.length; i++) {
            let resConf = list[i];

            if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).isNotNull(resConf.bundle, resConf.prefab)) {
              this.preLoadSkinAniDir(resConf.bundle, resConf.prefab, updateFunc, cb);
            }
          }
        }
        /** 播放动画 */


        startPlayAni(event, param) {
          if (!param || !param.resConf || !param.aniName) {
            return;
          }

          ;

          if (param.isLoop == null) {
            param.isLoop = false;
          }

          if (param.isPremult == null) {
            param.isPremult = false;
          }

          if (param.toPos == null) {
            param.toPos = new Vec3(0, 0, 0);
          }

          if (param.trackIndex == null) {
            param.trackIndex = 0;
          }

          if (!param.parentNode) {
            param.parentNode = (_crd && LayerManager === void 0 ? (_reportPossibleCrUseOfLayerManager({
              error: Error()
            }), LayerManager) : LayerManager).AnimNode;
          }

          this.setSpineAni(param.parentNode, param.resConf, param.trackIndex, param.aniName, param.isLoop, param.isPremult, param.skin, param.toPos, param.callStartFunc, param.callEndFunc, param.oneLoopEndcallFunc, param.processCallFunc, param.frameNum);
        }
        /** 停止动画 */


        stopPlayAni(event, param) {
          if (!param || !param.resConf || !param.aniName) {
            return;
          }

          ;
          let key = param.resConf.bundle + "|" + param.resConf.path + "|" + param.aniName;
          let aniNode = this.getSpineNode(key);

          if (!aniNode || aniNode.isValid == false) {
            SpineAniManager.AniNodeMap.set(key, null);
            return;
          }

          if (aniNode.parent != param.parentNode) {
            return;
          }

          if (aniNode.isValid == true) {
            aniNode.destroy();
          }

          SpineAniManager.AniNodeMap.set(key, null);
        }
        /** 获取已添加动画节点 */


        getSpineNode(key) {
          if (key && key != null) {
            let node = SpineAniManager.AniNodeMap.get(key);
            return node;
          }

          return null;
        }
        /** 移除已添加动画节点 */


        removeSpineNode(aniNode) {
          let key = null;

          if (aniNode && aniNode["Anikey"]) {
            key = aniNode["Anikey"];

            if (aniNode.isValid == true) {
              aniNode.destroy();
            }

            SpineAniManager.AniNodeMap.set(key, null);
          }
        }
        /**
         * 设置动画节点
         * @param aniNode 要添加的父节点
         * @param resData {bundle:包名 path:路径}
         * @param trackIndex {播放的帧位置}
         * @param name 动画名
         * @param loop 是否循环 默认 false 不循环
         * @param premultipliedAlpha 是否预乘 默认 false 不预乘
         * @param skin 皮肤
         * @param pos Vec3类型 添加的位置
         * @param startCallFunc Function 开始播放的回调函数
         * @param endCallFunc Function 结束的回调函数
         * @param oneLoopEndCallFunc 一次循环结束的回调函数
         * @param processCallFunc 执行过程中的动作监听
         * @param frameNum 帧刷
         */


        setSpineAni(aniNode, resData, trackIndex, name, loop = false, premultipliedAlpha = false, skin = null, pos = null, startCallFunc = null, endCallFunc = null, oneLoopEndCallFunc = null, processCallFunc = null, frameNum = null) {
          let key = resData.bundle + "|" + resData.path + "|" + name;

          if (!aniNode || aniNode.isValid == false) {
            error("设置动画节点 节点不存在或已销毁 资源Key = " + key);
            return;
          }

          let oldAniNode = aniNode.getChildByName(key);

          if (oldAniNode) {
            oldAniNode.destroy();
          }

          let node = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).create_2DNode(key);
          node.addComponent(sp.Skeleton);
          this.setAniData(node, resData, trackIndex, name, loop, premultipliedAlpha, skin, startCallFunc, endCallFunc, oneLoopEndCallFunc, processCallFunc, frameNum);

          if (pos) {
            node.position = new Vec3(pos.x, pos.y, pos.z);
          }

          aniNode.addChild(node); //标识

          node["Anikey"] = key;
          SpineAniManager.AniNodeMap.set(key, node);
          return node;
        } //动画播放配置


        setAniData(node, resData, trackIndex, name, loop, premultipliedAlpha, skin = null, startCallFunc = null, endCallFunc = null, oneLoopEndCallFunc = null, processCallFunc = null, frameNum = null) {
          let filePathName = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).string_splitFileName(resData.path);
          let filePathList = String(resData.path).split("/"); //包名|根目录|文件名 or 包名|文件名

          let key = resData.bundle;

          if (filePathList.length > 1) {
            key = key + "|" + filePathList[0] + "|" + filePathName;
          } else {
            key = key + "|" + filePathName;
          }

          let skinData = this._skinAniMapping[key];
          const self = this;
          let isEndCallback = false;

          let doCallback = function () {
            skinData = self._skinAniMapping[key];

            if (!skinData) {
              error(`"SpineAniManager:骨骼动画加载失败 找不到该文件key = ${key} path = ${resData.path}`);
              return;
            }

            if (!node || node.isValid == false) {
              return;
            }

            let skeleton = node.getComponent(sp.Skeleton);
            skeleton.skeletonData = skinData;

            if (skin) {
              skeleton.setSkin(skin);
            } //设置开始播放的事件


            skeleton.setStartListener(trackEntry => {
              if (startCallFunc) {
                startCallFunc(trackEntry, skeleton);
              }
            }); //设置播放完成的事件(对于非循环播放动画 由于无播放完成事件 特殊处理)

            skeleton.setEndListener(trackEntry => {
              SpineAniManager.getInstance().removeSpineNode(node);

              if (endCallFunc && isEndCallback == false) {
                isEndCallback = true;
                endCallFunc(trackEntry, skeleton);
              }
            }); //设置动画完成一次循环后结束的监听

            skeleton.setCompleteListener(trackEntry => {
              if (loop == false) {
                SpineAniManager.getInstance().removeSpineNode(node);

                if (oneLoopEndCallFunc) {
                  oneLoopEndCallFunc(trackEntry, skeleton);
                }

                if (endCallFunc && isEndCallback == false) {
                  isEndCallback = true;
                  endCallFunc(trackEntry, skeleton);
                }
              } else {
                if (oneLoopEndCallFunc) {
                  oneLoopEndCallFunc(trackEntry, skeleton);
                }
              }
            }); //设置动画播放过程中的动作监听

            skeleton.setEventListener((trackEntry, ev) => {
              if (processCallFunc) {
                processCallFunc(trackEntry, ev, skeleton);
              }
            }); //修改帧更新

            if (frameNum != null && Number(frameNum) > 0) {
              if (!skeleton["realUpdateAnimation"]) {
                skeleton["realUpdateAnimation"] = skeleton.updateAnimation;
              }

              let _interval = 0;
              let _max_frame = frameNum;

              skeleton.updateAnimation = function (dt) {
                if (_interval + dt < 1 / _max_frame) {
                  _interval = _interval + dt;
                  return;
                }

                _interval = 0;
                skeleton["realUpdateAnimation"](dt);
              };
            }

            skeleton.premultipliedAlpha = premultipliedAlpha;
            skeleton.setAnimation(trackIndex, name, loop);
          };

          if (!skinData) {
            this.print("==============再次加载============");
            this.preLoadSkinAniDir(resData.bundle, resData.path, null, () => {
              doCallback();
            });
          } else {
            doCallback();
          }
        }

      }, _class2._instance = void 0, _class2.AniNodeMap = new Map(), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=db08eb4b597c3bbe307b0297507548b60acab242.js.map