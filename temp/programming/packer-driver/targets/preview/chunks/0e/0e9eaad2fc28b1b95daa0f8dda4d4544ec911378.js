System.register(["__unresolved_0", "cc", "cc/env", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, sys, PREVIEW, Md5, _crd, LocalStorage;

  function _reportPossibleCrUseOfMd(extras) {
    _reporterNs.report("Md5", "./crypto/Md5", _context.meta, extras);
  }

  _export("LocalStorage", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      sys = _cc.sys;
    }, function (_ccEnv) {
      PREVIEW = _ccEnv.PREVIEW;
    }, function (_unresolved_2) {
      Md5 = _unresolved_2.Md5;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2151aAnO4pP7LGA0o4fnH5q", "LocalStorage", undefined);

      __checkObsolete__(['sys']);

      (function (_LocalStorage) {
        var _key = null;
        var _iv = null;

        var _id = -1;
        /**
         * 初始化密钥
         * @param key aes加密的key 
         * @param iv  aes加密的iv
         */


        function init(key, iv) {
          _key = (_crd && Md5 === void 0 ? (_reportPossibleCrUseOfMd({
            error: Error()
          }), Md5) : Md5)(key);
          _iv = (_crd && Md5 === void 0 ? (_reportPossibleCrUseOfMd({
            error: Error()
          }), Md5) : Md5)(iv);
        }

        _LocalStorage.init = init;

        function setUser(id) {
          _id = id;
        }

        _LocalStorage.setUser = setUser;

        function set(key, value) {
          var newKey = key + "_" + _id;

          if (null == newKey) {
            console.error("[" + key + "]\u5B58\u50A8\u7684key\u4E0D\u80FD\u4E3A\u7A7A");
            return;
          }

          if (!PREVIEW) {
            newKey = (_crd && Md5 === void 0 ? (_reportPossibleCrUseOfMd({
              error: Error()
            }), Md5) : Md5)(newKey);
          }

          if (null == value) {
            console.warn("[" + key + "]\u5B58\u50A8\u7684\u503C\u4E3A\u7A7A\uFF0C\u5219\u76F4\u63A5\u79FB\u9664\u8BE5\u5B58\u50A8");
            remove(key);
            return;
          }

          if (typeof value === 'function') {
            console.error("[" + key + "]\u50A8\u5B58\u7684\u503C\u4E0D\u80FD\u4E3A\u65B9\u6CD5");
            return;
          }

          if (typeof value === 'object') {
            try {
              value = JSON.stringify(value);
            } catch (e) {
              console.error("[" + key + "]\u89E3\u6790\u5931\u8D25\uFF0Cstr = " + value);
              return;
            }
          } else if (typeof value === 'number') {
            value = value + "";
          } // if (!PREVIEW && null != _key && null != _iv) {
          // 	try {
          // 		value = Encrypt.aesEncrypt(value, _key, _iv);
          // 	}
          // 	catch (e) {
          // 		value = null;
          // 	}
          // }
          // console.log("key===>set：",key, newKey, value)


          sys.localStorage.setItem(newKey, value);
        }

        _LocalStorage.set = set;

        function get(key, defaultValue) {
          if (null == key) {
            console.error("[" + key + "]\u5B58\u50A8\u7684key\u4E0D\u80FD\u4E3A\u7A7A");
            return;
          }

          var newKey = key + "_" + _id;

          if (!PREVIEW) {
            newKey = (_crd && Md5 === void 0 ? (_reportPossibleCrUseOfMd({
              error: Error()
            }), Md5) : Md5)(newKey);
          }

          var str = sys.localStorage.getItem(newKey); // if (null != str && '' !== str && !PREVIEW && null != _key && null != _iv) {
          // 	try {
          // 		console.log("获取本地之前：", key, _iv, str)
          // 		str = Encrypt.aesDecrypt(str, _key, _iv); //str可为"null" "undefined"  "true"
          // 		console.log("获取本地 解密后：", key, _iv, str)
          // 	}
          // 	catch (e) {
          // 		str = null;
          // 	}
          // }
          // console.log("key===>get：", key,newKey, str)

          /** 注：可能为空字符串 */

          if (str == "null" || str == "undefined") {
            str = null;
          }

          if (null == defaultValue || typeof defaultValue === 'string') {
            return str;
          }

          if (null === str) {
            return defaultValue;
          }

          if (typeof defaultValue === 'number') {
            return Number(str) || 0;
          }

          if (typeof defaultValue === 'boolean') {
            return "true" == String(str); // 不要使用Boolean("false");
          }

          if (typeof defaultValue === 'object') {
            try {
              return JSON.parse(str);
            } catch (e) {
              console.error("[" + key + "]\u89E3\u6790\u6570\u636E\u5931\u8D25,str=" + str);
              return defaultValue;
            }
          }

          return str;
        }

        _LocalStorage.get = get;

        function remove(key) {
          if (null == key) {
            console.error("[" + key + "]\u5B58\u50A8\u7684key\u4E0D\u80FD\u4E3A\u7A7A");
            return;
          }

          key = key + "_" + _id;

          if (!PREVIEW) {
            key = (_crd && Md5 === void 0 ? (_reportPossibleCrUseOfMd({
              error: Error()
            }), Md5) : Md5)(key);
          }

          sys.localStorage.removeItem(key);
        }

        _LocalStorage.remove = remove;

        function clear() {
          sys.localStorage.clear();
        }

        _LocalStorage.clear = clear;
      })(LocalStorage || _export("LocalStorage", LocalStorage = {}));

      //设置通用密钥
      LocalStorage.init("Creator", "3.62"); //设置用户标识

      LocalStorage.setUser(0);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=0e9eaad2fc28b1b95daa0f8dda4d4544ec911378.js.map