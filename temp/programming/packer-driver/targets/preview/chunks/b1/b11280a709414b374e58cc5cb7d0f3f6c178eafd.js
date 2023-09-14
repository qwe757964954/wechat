System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Asset, assetManager, error, js, resources, GameConfig, Utils, ResLoader, _crd, resLoader;

  function _reportPossibleCrUseOfGameConfig(extras) {
    _reporterNs.report("GameConfig", "../../config/GameConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUtils(extras) {
    _reporterNs.report("Utils", "../Utils", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Asset = _cc.Asset;
      assetManager = _cc.assetManager;
      error = _cc.error;
      js = _cc.js;
      resources = _cc.resources;
    }, function (_unresolved_2) {
      GameConfig = _unresolved_2.GameConfig;
    }, function (_unresolved_3) {
      Utils = _unresolved_3.Utils;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1a2e4jFffpHrYjrpxbnC760", "ResLoader", undefined);

      __checkObsolete__(['Asset', 'AssetManager', 'assetManager', 'Constructor', 'error', 'js', 'resources', '__private']);

      ResLoader = class ResLoader {
        /**
         * 设置重试下载的最大次数，默认 3 次。若不需要重试下载，可设置为 0，则下载失败时会立即返回错误
         * @param num 默认3
         */
        setMaxRetryCount(num) {
          if (num == null) {
            return;
          }

          assetManager.downloader.maxRetryCount = num;
        }
        /**
         * 设置重试下载的间隔时间，默认 2000 ms。若设置为 4000 ms，则下载失败时会先等待 4000 ms，然后再重新下载。
         * @param num 默认3
         */


        setRetryInterval(num) {
          if (num == null) {
            return;
          }

          assetManager.downloader.retryInterval = num;
        }
        /**
         * 设置下载的最大并发连接数，若当前连接数超过限制，将会进入等待队列。
         * @param num 默认10
         */


        setMaxConcurrency(num) {
          if (num == null) {
            return;
          }

          assetManager.downloader.maxConcurrency = num;
        }
        /**
         * 设置每帧发起的最大请求数，从而均摊发起请求的 CPU 开销，避免单帧过于卡顿。如果此帧发起的连接数已经达到上限，将延迟到下一帧发起请求。
         * @param num 默认6
         */


        setMaxRequestsPerFrame(num) {
          if (num == null) {
            return;
          }

          assetManager.downloader.maxRequestsPerFrame = num;
        }

        loadResourcePromise(url, callFunc) {
          return new Promise((resolve, reject) => {
            assetManager.loadBundle(url, (err, bundle) => {
              if (err) {
                return error(err);
              }

              resolve(bundle);
            });
          });
        }
        /**
         * 加载资源包
         * @param url       资源地址
         * @param complete  完成事件
         * @param v         资源MD5版本号
         */


        loadBundle(url, callback, v) {
          if (callback === void 0) {
            callback = null;
          }

          return new Promise((resolve, reject) => {
            assetManager.loadBundle(url, {
              version: v
            }, (err, bundle) => {
              if (err) {
                if (callback) {
                  callback(err, bundle);
                }

                return error(err);
              }

              resolve(bundle);

              if (callback) {
                callback(err, bundle);
              }
            });
          });
        }
        /**解析加载参数 */


        parseLoadResArgs(paths, type, onProgress, onComplete) {
          var pathsOut = paths;
          var typeOut = type;
          var onProgressOut = onProgress;
          var onCompleteOut = onComplete;

          if (onComplete === undefined) {
            var isValidType = js.isChildClassOf(type, Asset);

            if (onProgress) {
              onCompleteOut = onProgress;

              if (isValidType) {
                onProgressOut = null;
              }
            } else if (onProgress === undefined && !isValidType) {
              onCompleteOut = type;
              onProgressOut = null;
              typeOut = null;
            }

            if (onProgress !== undefined && !isValidType) {
              onProgressOut = type;
              typeOut = null;
            }
          }

          return {
            paths: pathsOut,
            type: typeOut,
            onProgress: onProgressOut,
            onComplete: onCompleteOut
          };
        }

        loadByBundleAndArgs(bundle, args) {
          if (args.dir) {
            bundle.loadDir(args.paths, args.type, args.onProgress, args.onComplete);
          } else {
            if (typeof args.paths == 'string') {
              bundle.load(args.paths, args.type, args.onProgress, args.onComplete);
            } else {
              bundle.load(args.paths, args.type, args.onProgress, args.onComplete);
            }
          }
        }

        loadByArgs(args) {
          if (args.bundle) {
            if (assetManager.bundles.has(args.bundle)) {
              var bundle = assetManager.bundles.get(args.bundle);
              this.loadByBundleAndArgs(bundle, args);
            } else {
              // 自动加载bundle
              assetManager.loadBundle(args.bundle, (err, bundle) => {
                if (!err) {
                  this.loadByBundleAndArgs(bundle, args);
                }
              });
            }
          } else {
            this.loadByBundleAndArgs(resources, args);
          }
        }

        preloadByBundleAndArgs(bundle, args) {
          if (args.dir) {
            bundle.preloadDir(args.paths, args.type, args.onProgress, args.onComplete);
          } else {
            if (typeof args.paths == 'string') {
              bundle.preload(args.paths, args.type, args.onProgress, args.onComplete);
            } else {
              bundle.preload(args.paths, args.type, args.onProgress, args.onComplete);
            }
          }
        }

        preloadByArgs(args) {
          if (args.bundle) {
            if (assetManager.bundles.has(args.bundle)) {
              var bundle = assetManager.bundles.get(args.bundle);
              this.loadByBundleAndArgs(bundle, args);
            } else {
              // 自动加载bundle
              assetManager.loadBundle(args.bundle, (err, bundle) => {
                if (!err) {
                  this.loadByBundleAndArgs(bundle, args);
                }
              });
            }
          } else {
            this.loadByBundleAndArgs(resources, args);
          }
        }
        /**
         * 预加载资源
         * @param bundleName        assetbundle的路径（image/bg）
         * @param paths             资源paths或paths数组 相对包的相对路径
         * @param type 资源类型，默认为null
         * @param onProgress 加载进度回调
         * @param onComplete 加载完成回调
         */


        preload(bundleName, paths, type, onProgress, onComplete) {
          var args = null;

          if (typeof paths === "string" || paths instanceof Array) {
            args = this.parseLoadResArgs(paths, type, onProgress, onComplete);
            args.bundle = bundleName;
          } else {
            args = this.parseLoadResArgs(bundleName, paths, type, onProgress);
          }

          this.preloadByArgs(args);
        }
        /**
         * 开始加载资源
         * @param bundleName        assetbundle的路径（image/bg）
         * @param paths             资源paths或paths数组 相对包的相对路径
         * @param type              资源类型，默认为null
         * @param onProgess         加载进度回调
         * @param onComplete        加载完成回调
         */


        load(bundleName, paths, type, onProgress, onComplete) {
          var args = null;

          if (typeof paths === "string" || paths instanceof Array) {
            args = this.parseLoadResArgs(paths, type, onProgress, onComplete);
            args.bundle = bundleName;
          } else {
            args = this.parseLoadResArgs(bundleName, paths, type, onProgress);
          }

          this.loadByArgs(args);
        }
        /**加载目录 */


        loadDir(bundleName, dir, type, onProgress, onComplete) {
          var args = null;

          if (typeof dir === "string") {
            args = this.parseLoadResArgs(dir, type, onProgress, onComplete);
            args.bundle = bundleName;
          } else {
            args = this.parseLoadResArgs(bundleName, dir, type, onProgress);
          }

          args.dir = args.paths;
          this.loadByArgs(args);
        }
        /**加载远端资源 */


        loadRemote(url, options, onComplete) {
          if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).string_isHttp(url)) {
            if ((_crd && GameConfig === void 0 ? (_reportPossibleCrUseOfGameConfig({
              error: Error()
            }), GameConfig) : GameConfig).instance.isOnlineServer()) {
              //线上:将所有远端资源全部采用https
              url = String(url).replace("http://", "https://");
              url = String(url).replace("HTTP://", "https://");
              url = String(url).replace("uchead.static.17c.cn", "dfqppic.266.com");
            }
          }

          if (onComplete) {
            assetManager.loadRemote(url, options, onComplete);
          } else {
            assetManager.loadRemote(url, options);
          }
        }
        /**释放资源 */


        release(path, bundleName) {
          if (bundleName === void 0) {
            bundleName = "resources";
          }

          if (path) {
            var bundle = assetManager.getBundle(bundleName);
            bundle == null ? void 0 : bundle.release(path);
          }
        }
        /**释放资源 定义的list*/


        releaseList(pathList, bundleName) {
          if (bundleName === void 0) {
            bundleName = "resources";
          }

          if (pathList && pathList.length > 0) {
            for (var index = 0; index < pathList.length; index++) {
              var path = pathList[index];
              this.release(path, bundleName);
            }
          }
        }
        /**释放目录资源 */


        releaseDir(path, bundleName) {
          if (bundleName === void 0) {
            bundleName = "resources";
          }

          var bundle = assetManager.getBundle(bundleName);
          var infos = bundle == null ? void 0 : bundle.getDirWithPath(path);
          infos == null ? void 0 : infos.map(function (info) {
            var asset = assetManager.assets.get(info.uuid);
            assetManager.releaseAsset(asset);
          });

          if (path == "" && bundleName != "resources" && bundle) {
            assetManager.removeBundle(bundle);
          }
        }
        /**获取已加载的内存资源 */


        get(path, type, bundleName) {
          if (bundleName === void 0) {
            bundleName = "resources";
          }

          var bundle = assetManager.getBundle(bundleName);

          if (bundle && bundle["get"]) {
            return bundle.get(path, type);
          } else {
            return null;
          }
        }

        dump() {
          assetManager.assets.forEach((value, key) => {// console.log(key);
          });
          console.log("\u5F53\u524D\u8D44\u6E90\u603B\u6570:" + assetManager.assets.count);
        }

      };

      _export("resLoader", resLoader = new ResLoader());

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=b11280a709414b374e58cc5cb7d0f3f6c178eafd.js.map