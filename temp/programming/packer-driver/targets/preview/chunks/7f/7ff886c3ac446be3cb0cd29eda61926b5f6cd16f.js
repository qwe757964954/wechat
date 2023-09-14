System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Asset, JsonAsset, path, resources, sys, TextAsset, _crd, ProtoBuf, Long, ByteBuffer, loadProto, pbkiller;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Asset = _cc.Asset;
      JsonAsset = _cc.JsonAsset;
      path = _cc.path;
      resources = _cc.resources;
      sys = _cc.sys;
      TextAsset = _cc.TextAsset;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a9e92g1OFFMZbJ0jksWxK1Q", "pbkiller", undefined);

      __checkObsolete__(['Asset', 'JsonAsset', 'path', 'resources', 'sys', 'TextAsset']);

      // @ts-ignore
      ProtoBuf = dcodeIO.ProtoBuf; // @ts-ignore

      Long = dcodeIO.Long; // @ts-ignore

      ByteBuffer = dcodeIO.ByteBuffer;
      ProtoBuf.Util.IS_NODE = false;

      ProtoBuf.Util.fetch = function (url) {
        var asset = resources.get(path.mainFileName(url), Asset);

        if (asset instanceof TextAsset) {
          return asset.text;
        } else if (asset instanceof JsonAsset) {
          return asset.json;
        } else {
          return asset;
        }
      };

      ProtoBuf.Util.mainFileName = function (fileName) {
        if (fileName) {
          var idx = fileName.lastIndexOf('.');

          if (idx !== -1) {
            return fileName.substring(0, idx);
          }
        }

        return fileName;
      };
      /**
       * 加载proto
       */


      loadProto = ProtoBuf.loadProto.bind(ProtoBuf);

      ProtoBuf.loadProto = function (asset, builder, filename) {
        try {
          if (typeof asset === 'string') {
            loadProto(asset, builder, filename);
          } else if (asset.text) {
            loadProto(asset.text, builder, filename);
          }
        } catch (e) {
          console.warn(filename + ": protobuf syntax error");
        }
      };
      /**
       * 加载json文件 
       */


      ProtoBuf.loadJsonFile = function (filename, callback, builder) {
        if (callback && typeof callback === 'object') builder = callback, callback = null;else if (!callback || typeof callback !== 'function') callback = null;
        if (callback) return ProtoBuf.Util.fetch(typeof filename === 'string' ? filename : filename["root"] + "/" + filename["file"], function (contents) {
          if (contents === null) {
            callback(Error("Failed to fetch file"));
            return;
          }

          try {
            callback(null, ProtoBuf.loadJson(JSON.parse(contents), builder, filename));
          } catch (e) {
            callback(e);
          }
        });
        var url = typeof filename === 'object' ? filename["root"] + "/" + filename["file"] : filename;
        var json;

        if (ProtoBuf.preloaded) {
          var content = resources.get(url, Asset);

          if (content instanceof JsonAsset) {
            json = content.json;
          } else {
            // @ts-ignore
            json = console.text;
          }
        } else {
          var _content = ProtoBuf.Util.fetch(url);

          if (_content) {
            json = JSON.parse(_content);
          }
        }

        return json ? ProtoBuf.loadJson(json, builder, filename) : null;
      };

      _export("pbkiller", pbkiller = {
        //类型
        ProtoBuf: ProtoBuf,
        Long: Long,
        ByteBuffer: ByteBuffer,
        Map: ProtoBuf.Map,
        root: 'proto',
        //定义pb路径 默认resource/.. 下
        urls: [],

        preload(updateFunc, cb) {
          if (updateFunc === void 0) {
            updateFunc = null;
          }

          if (cb === void 0) {
            cb = null;
          }

          resources.loadDir(pbkiller.root, (finished, total, item) => {
            if (updateFunc) {
              updateFunc(finished, total, item);
            }
          }, (err, data) => {
            ProtoBuf.preloaded = !err;
            pbkiller.urls = data;

            if (cb) {
              cb(err, data);
            }
          });
        },

        /**
         * 加载文件proto文件，支持json、proto格式
         * @param {String|Array} files 
         */
        loadFromFile(fileNames, packageName) {
          if ((sys.isNative || sys.platform === sys.Platform.WECHAT_GAME) && !ProtoBuf.preloaded) {
            console.error('原生或微信小游戏上，需要先调用preload函数');
            return;
          }

          if (typeof fileNames === 'string') {
            fileNames = [fileNames];
          }

          var builder = ProtoBuf.newBuilder();
          builder.importRoot = pbkiller.root;
          fileNames.forEach(fileName => {
            if (!fileName.startsWith(pbkiller.root)) {
              fileName = path.join(pbkiller.root, fileName);
            }

            var extname = path.extname(fileName);
            var mainfilename = path.mainFileName(fileName);

            if (extname === '.proto') {
              ProtoBuf.loadProtoFile(mainfilename, builder);
            } else {
              console.log("nonsupport file extname, only support 'proto'");
            }
          });
          return builder.build(packageName);
        },

        /**
         * 加载所有proto文件
         * @param {String} extname 
         * @param {String} packageName 
         */
        loadAll(packageName) {
          if (packageName === void 0) {
            packageName = '';
          }

          if (pbkiller.root.endsWith('/') || pbkiller.root.endsWith('\\')) {
            pbkiller.root = pbkiller.root.substr(0, pbkiller.root.length - 1);
          } //获取pbkiller.root下的所有文件名


          var files = [];
          this.urls.forEach(asset => {
            if (asset instanceof TextAsset) {
              // @ts-ignore
              files.push(resources.getAssetInfo(asset._uuid).path + ".proto");
            }
          });
          return this.loadFromFile(files, packageName);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=7ff886c3ac446be3cb0cd29eda61926b5f6cd16f.js.map