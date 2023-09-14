System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, instantiate, Prefab, _decorator, AppEvent, resLoader, BaseControll, _dec, _class, _class2, _crd, ccclass, ResLoaderManager;

  function _reportPossibleCrUseOfAppEvent(extras) {
    _reporterNs.report("AppEvent", "../../config/AppEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfinf_ResLoader(extras) {
    _reporterNs.report("inf_ResLoader", "../InterfaceDefines", _context.meta, extras);
  }

  function _reportPossibleCrUseOfresLoader(extras) {
    _reporterNs.report("resLoader", "../loader/ResLoader", _context.meta, extras);
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
      instantiate = _cc.instantiate;
      Prefab = _cc.Prefab;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      AppEvent = _unresolved_2.AppEvent;
    }, function (_unresolved_3) {
      resLoader = _unresolved_3.resLoader;
    }, function (_unresolved_4) {
      BaseControll = _unresolved_4.BaseControll;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "614192N9F5BX6A3Dj9rRt18", "ResLoaderManager", undefined);

      __checkObsolete__(['instantiate', 'Prefab', '_decorator']);

      ({
        ccclass
      } = _decorator);
      /**
       * Name = ResLoaderManager
       * URL = db://assets/framework/manager/ResLoaderManager.ts
       * Time = Tue Sep 20 2022 14:20:23 GMT+0800 (中国标准时间)
       * Author = Tomoe
       *
       * Life: onLoad-->onEnable->start->update->lateUpdate->onDisable->onDestroy
       * 资源加载统一管理
       */

      _export("ResLoaderManager", ResLoaderManager = (_dec = ccclass('ResLoaderManager'), _dec(_class = (_class2 = class ResLoaderManager extends (_crd && BaseControll === void 0 ? (_reportPossibleCrUseOfBaseControll({
        error: Error()
      }), BaseControll) : BaseControll) {
        constructor(...args) {
          super(...args);
          this.__preLoadMap = new Map();
        }

        static getInstance() {
          if (!this._instance || this._instance == null) {
            this._instance = new ResLoaderManager("ResLoaderManager");
          }

          (_crd && resLoader === void 0 ? (_reportPossibleCrUseOfresLoader({
            error: Error()
          }), resLoader) : resLoader).setMaxConcurrency(6);
          return this._instance;
        }

        static init() {
          if (this._instance) {
            this._instance.clear();
          }

          this._instance = null;
          ResLoaderManager.getInstance();
          return;
        }
        /** 所有预加载的资源 */


        /** 初始化模块事件 */
        onInitModuleEvent() {
          //加载本地资源
          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).SYS_RELOADD_LOCAL, this.receivePreLoaderRes); //加资远端资源

          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).SYS_RELOADD_REMOTE, this.receivePreLoaderRemoteRes); //清理记录根据key

          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).SYS_RELOADD_RECORD_REMOVE, this.receiveremovePreLoaderRecord);
        }
        /**
         * 本地资源加载
         * @param event 
         * @param param 详见inf_ResLoader
         */


        receivePreLoaderRes(event, param) {
          this.getPreLoaderRes(param.bundle, param.path, param.resType, param.callFunc, param.isReload);
        }
        /**
         * 远端资源的加载
         * @param event 
         * @param param  详见inf_ResLoader
         */


        receivePreLoaderRemoteRes(event, param) {
          this.getPreLoaderRemoteRes(param.path, param.resType, param.callFunc, param.isReload);
        }
        /**
         * 移除已加载的记录
         * @param event 
         * @param param 
         */


        receiveremovePreLoaderRecord(event, param) {
          this.removePreLoaderRecord(param.bundle, param.path, param.resType);
        }
        /** 获取资源key */


        getKey(bundle, path, resType = null) {
          bundle = bundle != null ? bundle : "resources";
          let key = bundle + "|" + path;

          if (resType) {
            key = key + "|" + resType;
          }

          return key;
        }
        /**
         * 获取预加载的资源
         * @param bundle 包名
         * @param path 资源路径
         * @param resType 资源类型
         * @param callback 成功回调
         * @param isReload 是否重新加载 默认为false
         */


        getPreLoaderRes(bundle, path, resType = null, callback = null, isReload = false) {
          if (!path) {
            return;
          }

          let self = this;
          let key = this.getKey(bundle, path, resType);

          if (isReload) {
            self.__preLoadMap.delete(key);
          }

          let preRes = self.__preLoadMap.get(key);

          if (preRes != null && preRes != undefined) {
            if (callback) {
              if (resType == Prefab) {
                callback(instantiate(preRes), key);

                self.__preLoadMap.delete(key);
              } else {
                callback(preRes, key);
              }
            }
          } else {
            if (resType) {
              (_crd && resLoader === void 0 ? (_reportPossibleCrUseOfresLoader({
                error: Error()
              }), resLoader) : resLoader).load(bundle, path, resType, (err, res) => {
                if (err) {
                  return;
                }

                self.__preLoadMap.set(key, res);

                if (callback) {
                  if (resType == Prefab) {
                    callback(instantiate(res), key);

                    self.__preLoadMap.delete(key);
                  } else {
                    callback(res, key);
                  }
                }
              });
            } else {
              (_crd && resLoader === void 0 ? (_reportPossibleCrUseOfresLoader({
                error: Error()
              }), resLoader) : resLoader).load(bundle, path, (err, res) => {
                if (err) {
                  return;
                }

                self.__preLoadMap.set(key, res);

                if (callback) {
                  if (resType == Prefab) {
                    callback(instantiate(res), key);

                    self.__preLoadMap.delete(key);
                  } else {
                    callback(res, key);
                  }
                }
              });
            }
          }
        }
        /**
         * 获取预加载的远端资源
         * @param bundle 包名
         * @param path 资源路径
         * @param resType 资源类型 string 例'.jpg'
         * @param callback 成功回调
         * @param isReload 是否重新加载 默认为false
         */


        getPreLoaderRemoteRes(path, resType = null, callback = null, isReload = false) {
          if (!path) {
            return;
          }

          let self = this;
          let bundle = "http";
          let key = this.getKey(bundle, path, resType);

          if (isReload) {
            self.__preLoadMap.delete(key);
          }

          let preRes = self.__preLoadMap.get(key);

          if (preRes != null && preRes != undefined) {
            if (callback) {
              if (resType == Prefab) {
                callback(instantiate(preRes), key);

                self.__preLoadMap.delete(key);
              } else {
                callback(preRes, key);
              }
            }
          } else {
            if (resType) {
              (_crd && resLoader === void 0 ? (_reportPossibleCrUseOfresLoader({
                error: Error()
              }), resLoader) : resLoader).loadRemote(path, {
                ext: resType
              }, (err, res) => {
                if (err) {
                  return;
                }

                self.__preLoadMap.set(key, res);

                if (callback) {
                  if (resType == Prefab) {
                    callback(instantiate(res), key);

                    self.__preLoadMap.delete(key);
                  } else {
                    callback(res, key);
                  }
                }
              });
            } else {
              (_crd && resLoader === void 0 ? (_reportPossibleCrUseOfresLoader({
                error: Error()
              }), resLoader) : resLoader).loadRemote(path, (err, res) => {
                if (err) {
                  return;
                }

                self.__preLoadMap.set(key, res);

                if (callback) {
                  if (resType == Prefab) {
                    callback(instantiate(res), key);

                    self.__preLoadMap.delete(key);
                  } else {
                    callback(res, key);
                  }
                }
              });
            }
          }
        }
        /**
         * 清理一条加载记录
         * @param bundle 包名或key
         * @param path 路径名 可为null时 bundle为key
         * @param resType 
         */


        removePreLoaderRecord(bundle, path = null, resType = null) {
          let key = null;

          if (bundle && path) {
            key = this.getKey(bundle, path, resType);
          } else if (bundle && path == null) {
            key = bundle;
          }

          if (key) {
            this.__preLoadMap.delete(key);
          }
        }

      }, _class2._instance = void 0, _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=8943fb8a49ecd6d04911b74fd9a1087baa168e94.js.map