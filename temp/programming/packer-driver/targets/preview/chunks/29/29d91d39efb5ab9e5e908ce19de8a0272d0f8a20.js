System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, GConstants, StoreKey, Encrypt, LocalStorage, Utils, BaseCache, MailInfo, _crd;

  function _reportPossibleCrUseOfGConstants(extras) {
    _reporterNs.report("GConstants", "../config/GameConstant", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStoreKey(extras) {
    _reporterNs.report("StoreKey", "../config/GameConstant", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEncrypt(extras) {
    _reporterNs.report("Encrypt", "../framework/crypto/Encrypto", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLocalStorage(extras) {
    _reporterNs.report("LocalStorage", "../framework/LocalStorage", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUtils(extras) {
    _reporterNs.report("Utils", "../framework/Utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseCache(extras) {
    _reporterNs.report("BaseCache", "../framework/vc/BaseCache", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUser(extras) {
    _reporterNs.report("User", "./User", _context.meta, extras);
  }

  _export("MailInfo", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      GConstants = _unresolved_2.GConstants;
      StoreKey = _unresolved_2.StoreKey;
    }, function (_unresolved_3) {
      Encrypt = _unresolved_3.Encrypt;
    }, function (_unresolved_4) {
      LocalStorage = _unresolved_4.LocalStorage;
    }, function (_unresolved_5) {
      Utils = _unresolved_5.Utils;
    }, function (_unresolved_6) {
      BaseCache = _unresolved_6.BaseCache;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c6a57Wz/jxLdZ3UC6ZJ0kNy", "MailInfo", undefined);

      _export("MailInfo", MailInfo = class MailInfo extends (_crd && BaseCache === void 0 ? (_reportPossibleCrUseOfBaseCache({
        error: Error()
      }), BaseCache) : BaseCache) {
        /** 用户类 */

        /** 邮件数据 */
        //实例化
        constructor(superClass) {
          super("MailInfo");
          this.__User = null;
          this._mailData = [];
          this.__User = superClass;
        }

        /** 邮件数据 */
        get MailData() {
          return (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).clone(this._mailData);
        }
        /**
         * 获取存储在本地的数据
         * @returns 
         */


        getDataByLocal() {
          //说明此时本地没有邮件配置，防止是被清缓存的时候清掉
          var key = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).string_format((_crd && StoreKey === void 0 ? (_reportPossibleCrUseOfStoreKey({
            error: Error()
          }), StoreKey) : StoreKey).USER_MAIL_CACHE, this.__User.getUserMid());
          var totalData = (_crd && LocalStorage === void 0 ? (_reportPossibleCrUseOfLocalStorage({
            error: Error()
          }), LocalStorage) : LocalStorage).get(key, "");

          if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).string_isEmpty(totalData)) {
            this._mailData = [];
          } else {
            this._mailData = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).table_verify((_crd && Encrypt === void 0 ? (_reportPossibleCrUseOfEncrypt({
              error: Error()
            }), Encrypt) : Encrypt).JsonDecode(totalData), true);
          }

          return this._mailData;
        }
        /**
         * 保存数据到本地
         * @param data 
         */


        saveDataToLocal(data) {
          if (!data) {
            data = [];
          }

          if (data instanceof Array) {
            var key = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).string_format((_crd && StoreKey === void 0 ? (_reportPossibleCrUseOfStoreKey({
              error: Error()
            }), StoreKey) : StoreKey).USER_MAIL_CACHE, this.__User.getUserMid());
            (_crd && LocalStorage === void 0 ? (_reportPossibleCrUseOfLocalStorage({
              error: Error()
            }), LocalStorage) : LocalStorage).set(key, (_crd && Encrypt === void 0 ? (_reportPossibleCrUseOfEncrypt({
              error: Error()
            }), Encrypt) : Encrypt).JsonEncode(data));
          }
        }
        /**
         * 对传入邮件数组根据ID去重
         * @param data
         * @returns 
         */


        uniqueData(data) {
          console.log("uniqueData");
          var arr = [];

          if (data instanceof Array) {
            var len = data.length;

            if (len > 0) {
              var idArr = [];

              for (var i = 0; i < len; i++) {
                var v = data[i];
                var id = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                  error: Error()
                }), Utils) : Utils).number_valueOf(v.id);
                var index = idArr.indexOf(id);

                if (index == -1) {
                  idArr.push(id);
                  arr.push(v);
                }
              }
            }
          }

          return arr;
        }
        /**
         * 获取存储在本地的邮件的最大ID
         * @returns 
         */


        getMaxId() {
          var key_SystemLastId = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).string_format((_crd && StoreKey === void 0 ? (_reportPossibleCrUseOfStoreKey({
            error: Error()
          }), StoreKey) : StoreKey).WATCH_MESSAGE_SYSTEMID, this.__User.getUserMid());
          var systemLastId = (_crd && LocalStorage === void 0 ? (_reportPossibleCrUseOfLocalStorage({
            error: Error()
          }), LocalStorage) : LocalStorage).get(key_SystemLastId, 0);
          return systemLastId;
        }
        /**
         * 根据消息ID获取邮件消息
         * @param msgid 
         * @return data | null 
         */


        getMsgByID(msgid) {
          if (msgid == null) {
            return null;
          }

          for (var i = 0; i < this._mailData.length; i++) {
            if (this._mailData[i]["id"] == msgid) {
              return (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                error: Error()
              }), Utils) : Utils).clone(this._mailData[i]);
            }

            ;
          }

          return null;
        }
        /**
         * 通过请求的获取数据和本地数据进行合并存本地
         * @param data 请求获取的数据
         * @returns 处理后的数据
         */


        saveDataFromNet(data) {
          //根据当前用户的id不同区分
          //因为是增量，所以需要把新数据跟老数据合并
          data = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).table_verify(data, true);
          console.log("saveDataFromNet:", data);
          var oldData = this.getDataByLocal();
          console.log("oldData:", oldData);
          var totalData = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).mergeArray(data, oldData);
          totalData = this.uniqueData(totalData);
          console.log("totalData:", totalData);
          this._mailData = this.sliceData(totalData);
          this.saveDataToLocal(this._mailData);

          this.__User.RedDot.update_mail_red();

          return this._mailData;
        }
        /**
         * 针对现有的数据进行截取,最多保留一百条
         * @param totalData 
         * @returns 
         */


        sliceData(totalData) {
          var diff = totalData.length - (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
            error: Error()
          }), GConstants) : GConstants).MessageMaxNum;

          if (diff <= 0) {
            return totalData;
          } // ID升序,方便删除,还得去重


          var arr = totalData.sort((a, b) => Number(a.id) - Number(b.id));
          var cols = [];
          var num = 0;

          for (var i = 0; i < arr.length; i++) {
            var v = arr[i];
            var awardArr = (_crd && Encrypt === void 0 ? (_reportPossibleCrUseOfEncrypt({
              error: Error()
            }), Encrypt) : Encrypt).JsonDecode(v.awards);

            if (num < diff) {
              if (v.status == (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
                error: Error()
              }), GConstants) : GConstants).MsgStatus.MSG_STATUS_HANDLED || (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                error: Error()
              }), Utils) : Utils).table_isEmpty(awardArr) && v.status == (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
                error: Error()
              }), GConstants) : GConstants).MsgStatus.MSG_STATUS_READ) {
                num += 1;
                continue;
              }
            }

            cols.push(v);
          }

          var newDiff = cols.length - (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
            error: Error()
          }), GConstants) : GConstants).MessageMaxNum;
          var tmpArr = [];

          if (newDiff > 0) {
            for (var j = 0; j < cols.length; j++) {
              if (j >= newDiff) {
                tmpArr.push(cols[j]);
              }
            }
          } else {
            tmpArr = cols;
          } //降序


          var tmpArr2 = tmpArr.sort((a, b) => Number(b.id) - Number(a.id));
          return tmpArr2;
        }
        /**
         * 更新邮件缓存
         * @param currentData 
         */


        updateMailDataInCache(currentData) {
          var data = this.getDataByLocal();
          var len = data.length;

          for (var i = 0; i < len; i++) {
            if (data[i]['id'] == currentData.id) {
              var obj = currentData;
              data[i] = obj;
            }
          }

          var arr = this.uniqueData(data);
          this.saveDataToLocal(arr);

          this.__User.RedDot.update_mail_red();

          return true;
        }
        /**
         * 对数据进行排序
         * @param data 
         * @returns 
         */


        sortMsgData(data) {
          var handledArr = [];
          var unHandleArr = [];

          for (var i = 0; i < data.length; i++) {
            var v = data[i];
            var awardArr = (_crd && Encrypt === void 0 ? (_reportPossibleCrUseOfEncrypt({
              error: Error()
            }), Encrypt) : Encrypt).JsonDecode(v.awards);

            if (v.status == (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
              error: Error()
            }), GConstants) : GConstants).MsgStatus.MSG_STATUS_FRESH || !(_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).table_isEmpty(awardArr) && v.status == (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
              error: Error()
            }), GConstants) : GConstants).MsgStatus.MSG_STATUS_READ) {
              unHandleArr.push(v);
            }

            if (v.status == (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
              error: Error()
            }), GConstants) : GConstants).MsgStatus.MSG_STATUS_HANDLED || (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).table_isEmpty(awardArr) && v.status == (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
              error: Error()
            }), GConstants) : GConstants).MsgStatus.MSG_STATUS_READ) {
              handledArr.push(v);
            }
          } //倒序排序


          var tmpHandleArr = handledArr.sort((a, b) => Number(b.id) - Number(a.id));
          var tmpUnHandleArr = unHandleArr.sort((a, b) => Number(b.id) - Number(a.id));
          var arr = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).mergeArray(tmpUnHandleArr, tmpHandleArr);
          return arr;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=29d91d39efb5ab9e5e908ce19de8a0272d0f8a20.js.map