System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, StoreKey, LocalStorage, Utils, Encrypt, HttpRequest, BaseCache, PropsConf, _crd;

  function _reportPossibleCrUseOfStoreKey(extras) {
    _reporterNs.report("StoreKey", "../config/GameConstant", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLocalStorage(extras) {
    _reporterNs.report("LocalStorage", "../framework/LocalStorage", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUtils(extras) {
    _reporterNs.report("Utils", "../framework/Utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEncrypt(extras) {
    _reporterNs.report("Encrypt", "../framework/crypto/Encrypto", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHttpRequest(extras) {
    _reporterNs.report("HttpRequest", "../framework/network/HttpRequest", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseCache(extras) {
    _reporterNs.report("BaseCache", "../framework/vc/BaseCache", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUser(extras) {
    _reporterNs.report("User", "./User", _context.meta, extras);
  }

  _export("PropsConf", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      StoreKey = _unresolved_2.StoreKey;
    }, function (_unresolved_3) {
      LocalStorage = _unresolved_3.LocalStorage;
    }, function (_unresolved_4) {
      Utils = _unresolved_4.Utils;
    }, function (_unresolved_5) {
      Encrypt = _unresolved_5.Encrypt;
    }, function (_unresolved_6) {
      HttpRequest = _unresolved_6.HttpRequest;
    }, function (_unresolved_7) {
      BaseCache = _unresolved_7.BaseCache;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5a0eaA4IHhD85ccylER310K", "PropsConf", undefined);

      _export("PropsConf", PropsConf = class PropsConf extends (_crd && BaseCache === void 0 ? (_reportPossibleCrUseOfBaseCache({
        error: Error()
      }), BaseCache) : BaseCache) {
        /** 用户类 */

        /** 物品图片相关配置 */

        /** 基本道具配置 */

        /** 额外道具配置 */
        //实例化
        constructor(superClass) {
          super("PropsConf");
          this.__User = null;
          this._PropsUrlConf = {};
          this._BaseProps = {};
          this._UnionProps = {};
          this.__User = superClass;
        }

        /**
        * 设置图片相关配置
        * @param conf 
        */
        setPropsBaseUrlConf(conf) {
          console.log("打印相关:", conf);
          this._PropsUrlConf = conf;
        }
        /**
         * 获取图片相关配置
         * @returns 
         */


        getPropsBaseUrlConf() {
          return this._PropsUrlConf;
        }
        /**
         * 下载配置并保存到本地
         * @param url 
         * @param key 
         * @returns 
         */


        downloadAndSavePropsConf(url, key, count) {
          if (count === void 0) {
            count = 0;
          }

          if (count >= 3) {
            console.warn("downloadAndSavePropsConf:" + url, "请求失败 3次都失败 不再请求");
            return;
          }

          console.log("测试加载图片配置:", key);
          var keyArr = [(_crd && StoreKey === void 0 ? (_reportPossibleCrUseOfStoreKey({
            error: Error()
          }), StoreKey) : StoreKey).PROPS_BASE_CONF, (_crd && StoreKey === void 0 ? (_reportPossibleCrUseOfStoreKey({
            error: Error()
          }), StoreKey) : StoreKey).PROPS_UNION_CONF];
          var flag = keyArr.indexOf(key);

          if (flag == -1 || (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).string_isEmpty(key)) {
            return;
          }

          var http = new (_crd && HttpRequest === void 0 ? (_reportPossibleCrUseOfHttpRequest({
            error: Error()
          }), HttpRequest) : HttpRequest)();
          var self = this;

          var complete = function complete(response) {
            console.log("http get complete", key);

            if (response) {
              var jsonStr = (_crd && LocalStorage === void 0 ? (_reportPossibleCrUseOfLocalStorage({
                error: Error()
              }), LocalStorage) : LocalStorage).get(key, '');
              var oldTime = 0;

              if (!(_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                error: Error()
              }), Utils) : Utils).string_isEmpty(jsonStr)) {
                var oldConf = (_crd && Encrypt === void 0 ? (_reportPossibleCrUseOfEncrypt({
                  error: Error()
                }), Encrypt) : Encrypt).JsonDecode(jsonStr);
                oldTime = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                  error: Error()
                }), Utils) : Utils).number_valueOf(oldConf.GoodsBase.timestamp, 0);
              }

              var obj = (_crd && Encrypt === void 0 ? (_reportPossibleCrUseOfEncrypt({
                error: Error()
              }), Encrypt) : Encrypt).JsonDecode(response);

              if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                error: Error()
              }), Utils) : Utils).table_isEmpty(obj)) {
                return;
              }

              var timestamp = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                error: Error()
              }), Utils) : Utils).number_valueOf(obj.GoodsBase.timestamp, 0);

              if (timestamp > 0 && timestamp > oldTime) {
                (_crd && LocalStorage === void 0 ? (_reportPossibleCrUseOfLocalStorage({
                  error: Error()
                }), LocalStorage) : LocalStorage).set(key, response);

                if (key == (_crd && StoreKey === void 0 ? (_reportPossibleCrUseOfStoreKey({
                  error: Error()
                }), StoreKey) : StoreKey).PROPS_BASE_CONF) {
                  self._BaseProps = obj;
                } else if (key == (_crd && StoreKey === void 0 ? (_reportPossibleCrUseOfStoreKey({
                  error: Error()
                }), StoreKey) : StoreKey).PROPS_UNION_CONF) {
                  self._UnionProps = obj;
                }
              }
            } else {
              self.downloadAndSavePropsConf(url, key, count + 1);
            }
          };

          var error = function error(response) {
            console.log("http get error", response, key);
            self.downloadAndSavePropsConf(url, key, count + 1);
          };

          http.get(url, complete, error);
        }
        /**
            * 获取图片域名
            * @returns 
            */


        getIconPre() {
          var url = this._PropsUrlConf["icon_pre"];
          return url;
        }
        /**
         * 获取最近拉取的时间戳
         * @returns 
         */


        getPropsConfTime(key) {
          console.log("测试加载图片配置时间");
          var keyArr = [(_crd && StoreKey === void 0 ? (_reportPossibleCrUseOfStoreKey({
            error: Error()
          }), StoreKey) : StoreKey).PROPS_BASE_CONF, (_crd && StoreKey === void 0 ? (_reportPossibleCrUseOfStoreKey({
            error: Error()
          }), StoreKey) : StoreKey).PROPS_UNION_CONF];
          var flag = keyArr.indexOf(key);
          var time = 0;

          if (flag != -1) {
            var jsonStr = (_crd && LocalStorage === void 0 ? (_reportPossibleCrUseOfLocalStorage({
              error: Error()
            }), LocalStorage) : LocalStorage).get(key, '');
            var conf = (_crd && Encrypt === void 0 ? (_reportPossibleCrUseOfEncrypt({
              error: Error()
            }), Encrypt) : Encrypt).JsonDecode(jsonStr);

            if (!(_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).table_isEmpty(conf)) {
              time = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                error: Error()
              }), Utils) : Utils).number_valueOf(conf.GoodsBase.timestamp, 0);
            }
          }

          return time;
        }
        /**
            * 获取基本道具配置
            * @returns 
            */


        getBaseProps() {
          var key = (_crd && StoreKey === void 0 ? (_reportPossibleCrUseOfStoreKey({
            error: Error()
          }), StoreKey) : StoreKey).PROPS_BASE_CONF;

          if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).table_isEmpty(this._BaseProps)) {
            console.log("走缓存");
            var str = (_crd && LocalStorage === void 0 ? (_reportPossibleCrUseOfLocalStorage({
              error: Error()
            }), LocalStorage) : LocalStorage).get(key);
            var obj = (_crd && Encrypt === void 0 ? (_reportPossibleCrUseOfEncrypt({
              error: Error()
            }), Encrypt) : Encrypt).JsonDecode(str);
            this._BaseProps = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).table_verify(obj);
          }

          if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).table_isEmpty(this._BaseProps)) {
            this._BaseProps = {};
          }

          return this._BaseProps;
        }
        /**
         * 获取额外道具配置
         * @returns 
         */


        getUnionProps() {
          var key = (_crd && StoreKey === void 0 ? (_reportPossibleCrUseOfStoreKey({
            error: Error()
          }), StoreKey) : StoreKey).PROPS_UNION_CONF;

          if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).table_isEmpty(this._UnionProps)) {
            var str = (_crd && LocalStorage === void 0 ? (_reportPossibleCrUseOfLocalStorage({
              error: Error()
            }), LocalStorage) : LocalStorage).get(key);
            var obj = (_crd && Encrypt === void 0 ? (_reportPossibleCrUseOfEncrypt({
              error: Error()
            }), Encrypt) : Encrypt).JsonDecode(str);
            this._UnionProps = obj;
          }

          if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).table_isEmpty(this._UnionProps)) {
            this._UnionProps = {};
          }

          return this._UnionProps;
        }
        /**
         * 获取道具信息
         * @param id 道具ID
         * @returns 
         */


        getPropsInfoById(id) {
          //https://dfqppic.266.com/dfqp/images/goods/dev/0/0.png
          id = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).number_valueOf(id);
          var baseProps = this.getBaseProps();
          var baseConf = baseProps['GoodsBase']['list'];

          if (Object.prototype.hasOwnProperty.call(baseConf, id)) {
            var info = baseConf[id];
            var iconpre = this.getIconPre();
            var pre = id % 10;
            var url = iconpre + pre + '/' + id + '.png?v=' + info.timestamp;
            info.url = url;
            return info;
          }

          var unionProps = this.getUnionProps();
          var unionConf = unionProps['GoodsBase']['list'];

          if (Object.prototype.hasOwnProperty.call(unionConf, id)) {
            var _info = baseConf[id];

            var _iconpre = this.getIconPre();

            var _pre = id % 10;

            var _url = _iconpre + _pre + '/' + id + '?v=' + _info.timestamp;

            _info.url = _url;
            return _info;
          }

          return {};
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=785f7bbb761f920e7b13264bc0a81b52ff6f2f0b.js.map