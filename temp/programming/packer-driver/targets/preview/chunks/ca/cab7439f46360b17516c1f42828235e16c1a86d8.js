System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, error, pbkiller, FXJPBPackageID, FXJPB, FXJPBAdaptive, _crd;

  function _reportPossibleCrUseOfpbkiller(extras) {
    _reporterNs.report("pbkiller", "../../../framework/crypto/pbkiller", _context.meta, extras);
  }

  function _reportPossibleCrUseOfinf_PBConf(extras) {
    _reporterNs.report("inf_PBConf", "../../../framework/InterfaceDefines", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseProtobuf(extras) {
    _reporterNs.report("BaseProtobuf", "../../../proj/gprotobuf/BaseProtobuf", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFXJPBPackageID(extras) {
    _reporterNs.report("FXJPBPackageID", "./FXJCmd", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFXJPB(extras) {
    _reporterNs.report("FXJPB", "./FXJPB", _context.meta, extras);
  }

  _export("FXJPBAdaptive", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      error = _cc.error;
    }, function (_unresolved_2) {
      pbkiller = _unresolved_2.pbkiller;
    }, function (_unresolved_3) {
      FXJPBPackageID = _unresolved_3.FXJPBPackageID;
    }, function (_unresolved_4) {
      FXJPB = _unresolved_4.FXJPB;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "3e17bYmnkJPI5h6lG96MRbV", "FXJPBAdaptive", undefined);

      __checkObsolete__(['error']);

      _export("FXJPBAdaptive", FXJPBAdaptive = class FXJPBAdaptive {
        /** 基础包配置 */
        static getInstance() {
          if (!this._instance || this._instance == null) {
            this._instance = new FXJPBAdaptive("FXJPBAdaptive");
          }

          return this._instance;
        } //当前包与解析类的映射


        //实例化
        constructor(name) {
          this._pbPackageConf = {
            /** 飞小鸡解析包配置 */
            [(_crd && FXJPBPackageID === void 0 ? (_reportPossibleCrUseOfFXJPBPackageID({
              error: Error()
            }), FXJPBPackageID) : FXJPBPackageID).Common]: {
              FilePath: "fxj/Common.proto",
              Class: _crd && FXJPB === void 0 ? (_reportPossibleCrUseOfFXJPB({
                error: Error()
              }), FXJPB) : FXJPB,
              PackageName: (_crd && FXJPBPackageID === void 0 ? (_reportPossibleCrUseOfFXJPBPackageID({
                error: Error()
              }), FXJPBPackageID) : FXJPBPackageID).Common
            },
            [(_crd && FXJPBPackageID === void 0 ? (_reportPossibleCrUseOfFXJPBPackageID({
              error: Error()
            }), FXJPBPackageID) : FXJPBPackageID).Game]: {
              FilePath: "fxj/Game.proto",
              Class: _crd && FXJPB === void 0 ? (_reportPossibleCrUseOfFXJPB({
                error: Error()
              }), FXJPB) : FXJPB,
              PackageName: (_crd && FXJPBPackageID === void 0 ? (_reportPossibleCrUseOfFXJPBPackageID({
                error: Error()
              }), FXJPBPackageID) : FXJPBPackageID).Game
            }
          };
          this._pbPackageClassMapping = new Map();
          console.log(name + "实例化...");
        }

        /**
         * 加载PB配置文件 注意:在此之前必须保证文件都加载完毕了
         * @param info inf_PBConf
         * @returns 
         */
        __reloadPBConf(info) {
          if (!info || !info.Class) {
            return false;
          }

          var pbClass = new info.Class(info.PackageName);
          pbClass.reloadPB(info);

          this._pbPackageClassMapping.set(info.PackageName, pbClass);

          return true;
        }
        /** 开始加载配置的PB队列 */


        startReloadPBList() {
          for (var pbName in this._pbPackageConf) {
            if (Object.prototype.hasOwnProperty.call(this._pbPackageConf, pbName)) {
              var conf = this._pbPackageConf[pbName];

              this.__reloadPBConf(conf);
            }
          }
        }
        /**
         * 查找PB类
         * @param pbPackageID 用来解析的类
         */


        findPBClass(pbPackageID) {
          var res = this._pbPackageClassMapping.get(pbPackageID);

          if (!res) {
            error(pbPackageID + " \u5305\u540D\u672A\u914D\u7F6E \u6216\u627E\u4E0D\u5230\u6587\u4EF6");
            return null;
          }

          return res;
        }
        /**
         * 封装包
         * @param pbPackage 要加密的包数据
         * @param pbPackageID 用来解析的类
         * @param funcName 用来解析的类方法
         * @returns 返回ArrayBuffer对象 ArrayBuffer | null
         */


        encodePacket(body, pbPackageID, funcName) {
          if (funcName === void 0) {
            funcName = null;
          }

          if (pbPackageID == null) {
            return null;
          }

          var pbClass = this.findPBClass(pbPackageID);
          var result = null;

          if (pbClass) {
            result = pbClass.encodeBody(body, funcName);
          } else {
            error("encodePacket: PB\u7C7B\u627E\u4E0D\u5230:" + pbPackageID + " funcName = " + funcName);
          }

          return result;
        }
        /**
         * 解析包
         * @param pbPackage 要解析的包数据
         * @param pbPackageID 用来解析的类
         * @param funcName 用来解析的类方法
         * @returns 返回Message对象 object | null
         */


        decodePacket(pbPackage, pbPackageID, funcName, decodeFuncName) {
          if (funcName === void 0) {
            funcName = null;
          }

          if (decodeFuncName === void 0) {
            decodeFuncName = null;
          }

          if (!pbPackage || pbPackageID == null) {
            return null;
          }

          var pbClass = this.findPBClass(pbPackageID);
          var result = null;

          if (pbClass) {
            result = pbClass.decodeBody(pbPackage, funcName, decodeFuncName);
          } else {
            error("decodePacket: PB\u7C7B\u627E\u4E0D\u5230:" + pbPackageID);
          }

          return result;
        }
        /**
         * ArrayBuffer To ByteBuffer
         * @param buffer ArrayBuffer待转换的ArrayBuffer
         * @param isSymbol 是否带符号  默认false 不带
         * @returns 返回ByteBuffer
         */


        arrayBufferToByteBuffer(buffer, isSymbol) {
          if (isSymbol === void 0) {
            isSymbol = false;
          }

          if (!buffer || (buffer == null ? void 0 : buffer.byteLength) == null) {
            return null;
          }

          var bytes = [];
          var byteArray;
          var byteBuffer = null;

          if (isSymbol) {
            byteArray = new Int8Array(buffer);

            for (var index = 0; index < byteArray.byteLength; index++) {
              bytes[index] = byteArray[index];
            }

            byteBuffer = this.bytesToByteBuffer(bytes, isSymbol);
          } else {
            byteArray = new Uint8Array(buffer);

            for (var _index = 0; _index < byteArray.byteLength; _index++) {
              bytes[_index] = byteArray[_index];
            }

            byteBuffer = this.bytesToByteBuffer(bytes, isSymbol);
          }

          return byteBuffer;
        }
        /**
         * ByteBuffer转ArrayBuffer
         * @param byteBuffer 由pbkiller.ByteBuffer创建的
         * @returns ArrayBuffer
         */


        byteBufferToArrayBuffer(byteBuffer) {
          if (!byteBuffer || (_crd && pbkiller === void 0 ? (_reportPossibleCrUseOfpbkiller({
            error: Error()
          }), pbkiller) : pbkiller).ByteBuffer.isByteBuffer(byteBuffer) == false) {
            return null;
          } //重置索引


          byteBuffer.clear();
          var arrayBuffer = byteBuffer.toBuffer();
          return arrayBuffer;
        }
        /**
         * 字节数组转ByteBuffer
         * @param bytes 
         * @param isSymbol 是否带符号  默认false 不带
         * @returns 
         */


        bytesToByteBuffer(bytes, isSymbol) {
          if (isSymbol === void 0) {
            isSymbol = false;
          }

          if (!bytes || (bytes == null ? void 0 : bytes.length) == null) {
            return null;
          }

          var byteBuffer = new (_crd && pbkiller === void 0 ? (_reportPossibleCrUseOfpbkiller({
            error: Error()
          }), pbkiller) : pbkiller).ByteBuffer(bytes.length);

          if (isSymbol) {
            for (var i = 0; i < bytes.length; i++) {
              byteBuffer.writeInt8(bytes[i], i);
            }
          } else {
            for (var _i = 0; _i < bytes.length; _i++) {
              byteBuffer.writeUint8(bytes[_i], _i);
            }
          } //重置索引


          byteBuffer.clear();
          return byteBuffer;
        }
        /**
         * ByteBuffer转字节数组
         * @param byteBuffer ByteBuffer
         * @param isSymbol 是否带符号  默认false 不带
         * @returns 
         */


        byteBufferToBytes(byteBuffer, isSymbol) {
          if (isSymbol === void 0) {
            isSymbol = false;
          }

          if (!byteBuffer || (_crd && pbkiller === void 0 ? (_reportPossibleCrUseOfpbkiller({
            error: Error()
          }), pbkiller) : pbkiller).ByteBuffer.isByteBuffer(byteBuffer) == false) {
            return null;
          }

          var bytes = [];
          var byteArray;
          var arrayBuffer = this.byteBufferToArrayBuffer(byteBuffer);

          if (arrayBuffer) {
            if (isSymbol) {
              byteArray = new Int8Array(arrayBuffer);

              for (var index = 0; index < byteArray.byteLength; index++) {
                bytes[index] = byteArray[index];
              }
            } else {
              byteArray = new Uint8Array(arrayBuffer);

              for (var _index2 = 0; _index2 < byteArray.byteLength; _index2++) {
                bytes[_index2] = byteArray[_index2];
              }
            }
          }

          return bytes;
        }

      });

      FXJPBAdaptive._instance = null;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=cab7439f46360b17516c1f42828235e16c1a86d8.js.map