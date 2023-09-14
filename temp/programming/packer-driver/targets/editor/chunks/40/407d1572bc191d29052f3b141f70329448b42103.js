System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, error, sys, pbkiller, Logger, Utils, BaseProtobuf, _crd;

  function _reportPossibleCrUseOfpbkiller(extras) {
    _reporterNs.report("pbkiller", "../../framework/crypto/pbkiller", _context.meta, extras);
  }

  function _reportPossibleCrUseOfinf_PBConf(extras) {
    _reporterNs.report("inf_PBConf", "../../framework/InterfaceDefines", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLogger(extras) {
    _reporterNs.report("Logger", "../../framework/log/Logger", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUtils(extras) {
    _reporterNs.report("Utils", "../../framework/Utils", _context.meta, extras);
  }

  _export("BaseProtobuf", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      error = _cc.error;
      sys = _cc.sys;
    }, function (_unresolved_2) {
      pbkiller = _unresolved_2.pbkiller;
    }, function (_unresolved_3) {
      Logger = _unresolved_3.Logger;
    }, function (_unresolved_4) {
      Utils = _unresolved_4.Utils;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e9422JMzTxN0bp3o7LyqKdb", "BaseProtobuf", undefined);

      __checkObsolete__(['error', 'sys']);

      _export("BaseProtobuf", BaseProtobuf = class BaseProtobuf {
        /** 当前PB的配置  */

        /** 当前PB类加载 */
        //Builder
        constructor(name) {
          this._className = "BaseProtobuf";
          this._PBConf = null;
          this._PBBuilder = null;

          this.print = function (...args) {
            (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
              error: Error()
            }), Logger) : Logger).logModel(6, `【${this._className}】`, ...args);
          };

          this.error = function (...args) {
            console.error(`【${this._className}】`, ...args);
          };

          this.dump = function (arg1, args2 = null) {
            if (!args2) {
              args2 = "打印输出 :";
            }

            (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
              error: Error()
            }), Logger) : Logger).logModel(5, args2);

            if (sys.platform == sys.Platform.DESKTOP_BROWSER) {
              console.table(arg1);
            } else {
              (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                error: Error()
              }), Utils) : Utils).dump(arg1);
            }
          };

          this._className = name;
          (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
            error: Error()
          }), Logger) : Logger).logModel(5, `${this._className}初始化...`);
        }

        onInitModuleEvent() {}
        /** 重新加载PB */


        reloadPB(pbConf) {
          if (!pbConf) {
            return;
          }

          (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
            error: Error()
          }), Logger) : Logger).logModel(5, `${this._className} reloadPB 加载PB...`);
          this._PBConf = pbConf;
          this._PBBuilder = (_crd && pbkiller === void 0 ? (_reportPossibleCrUseOfpbkiller({
            error: Error()
          }), pbkiller) : pbkiller).loadFromFile(pbConf.FilePath, pbConf.PackageName);
          this.reloadFinish();
        }
        /** 加载完成要干的事情 */


        reloadFinish() {}
        /**
         * 发送：包装要发送的数据
         * @param pData 待序列化的数据
         * @param funcName proto中的方法名
         * @returns 返回字节数组 ArrayBuffer | null
         */


        encodeBody(pData, funcName = null) {
          if (!this._PBBuilder) {
            this.error(`包装数据失败，PB未加载`);
            return null;
          }

          if (this._PBBuilder[funcName] == null || this._PBBuilder[funcName] == undefined) {
            this.error(`包装数据失败，协议函数名称：${funcName} 找不到`);
            return null;
          }

          ; // Logger.logModel(5,`encodeBody 原始数据:`, pData);

          let copyData = this.delEmptyBody(pData); // Logger.logModel(5,`encodeBody 原始数据 去除空后:`, copyData);

          let newBody = this._PBBuilder[funcName].encode(copyData, null, true); //返回的私有属性 MessagePrototype
          // let bufferData = newBody.toArrayBuffer();
          // Logger.logModel(5,`encodeBody 编码后:`, newBody);
          // Logger.logModel(5,`encodeBody 编码后:toArrayBuffer==>`, bufferData);
          // let decodeBody = this._PBBuilder[funcName].decode(bufferData);
          // Logger.logModel(5,`encodeBody 尝试对包装数据解码:==========>`, decodeBody)
          // let resData = this.loopDecodeBody(decodeBody, funcName);
          // Logger.logModel(5,`encodeBody 尝试对包装数据解码:明文==========>`, resData)


          return newBody.toArrayBuffer();
        }
        /**
         * 接收：解析收到的数据 
         * @param bufferData ByteBuffer字节数组 或者string
         * @param funcName proto中的方法名
         * @param funcName bufferData为string时使用的解析函数(decode64、decodeJSON、decodeHex、decodeDelimited)
         * @returns object 对象
         */


        decodeBody(bufferData, funcName = null, decodeStrFunc = "decode64") {
          if (!this._PBBuilder) {
            this.error("解析数据失败，PB未加载");
            return;
          }

          if (this._PBBuilder[funcName] == null || this._PBBuilder[funcName] == undefined) {
            this.error(`解析数据失败，协议函数名称：${funcName} 找不到`);
            return;
          }

          if (!bufferData) {
            (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
              error: Error()
            }), Logger) : Logger).logModel(5, "这是一个空包:", funcName, bufferData);
            return;
          }

          let pbData = null;
          let resData = null;

          if (typeof bufferData == 'string') {
            if (!this._PBBuilder[funcName][decodeStrFunc]) {
              (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
                error: Error()
              }), Logger) : Logger).logModel(5, "解析字符串类型时出错 解析函数不存在:", decodeStrFunc, funcName, bufferData);
              return;
            }

            pbData = this._PBBuilder[funcName][decodeStrFunc](bufferData);
          } else {
            try {
              pbData = this._PBBuilder[funcName].decode(bufferData, bufferData.byteLength);
            } catch (err) {
              pbData = null;
              (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
                error: Error()
              }), Logger) : Logger).logModel(5, "解析ByteBuffer类型时出错", funcName, bufferData);
              error(err);
            }
          }

          if (pbData) {
            // Logger.logModel(5,`decodeBody 反序列化（前） funcName = ${funcName} `, pbData,)
            // console.log("转换之后:", pbData.toRaw());
            resData = this.loopDecodeBody(pbData, funcName);
          } // Logger.logModel(5,`decodeBody 反序列化（后） funcName = ${funcName} `, resData, typeof (resData));


          return resData;
        }
        /** 去除空数据 */


        delEmptyBody(obj) {
          if (obj == null) {
            return null;
          }

          if (typeof obj != "object") {
            return obj;
          }

          let self = this;
          Object.keys(obj).forEach(key => {
            let value = obj[key];

            if (value != null) {
              if (typeof value == 'object') {
                self.delEmptyBody(value);
              }
            } else {
              delete obj[key];
            }
          });
          return obj;
        }

        /**
         * orrvide 数据解析 循环迭代器
         * @param body 待解析的数据
         * @param funcName 函数名
         * @param loopCount 循环迭代的深度
         * @returns body 已处理好的数据
         */
        loopDecodeBody(body, funcName = null, loopCount = 0) {
          loopCount = loopCount + 1;
          let _body = null;

          if (body != null && typeof body == "object") {
            //默认状态下:将所有 byte 转换成 string
            let newBody = body.toRawDefault(true, true);
            _body = newBody;
          } else {
            _body = body;
          }

          return _body;
        } //当前类日志输出


      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=407d1572bc191d29052f3b141f70329448b42103.js.map