System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Encrypt, Logger, WebSocketBuffer, Utils, GlobalCMDHead, GPBWriteAndRead, GlobalProtocol, _crd;

  function _reportPossibleCrUseOfEncrypt(extras) {
    _reporterNs.report("Encrypt", "../../framework/crypto/Encrypto", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLogger(extras) {
    _reporterNs.report("Logger", "../../framework/log/Logger", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIProtocolHelper(extras) {
    _reporterNs.report("IProtocolHelper", "../../framework/network/NetInterface", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIRequestProtocol(extras) {
    _reporterNs.report("IRequestProtocol", "../../framework/network/NetInterface", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIResponseProtocol(extras) {
    _reporterNs.report("IResponseProtocol", "../../framework/network/NetInterface", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNetData(extras) {
    _reporterNs.report("NetData", "../../framework/network/NetInterface", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWebSocketBuffer(extras) {
    _reporterNs.report("WebSocketBuffer", "../../framework/network/WebSocketBuffer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUtils(extras) {
    _reporterNs.report("Utils", "../../framework/Utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGlobalCMDHead(extras) {
    _reporterNs.report("GlobalCMDHead", "./GlobalCMD", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGPBWriteAndRead(extras) {
    _reporterNs.report("GPBWriteAndRead", "./GPBWriteAndRead", _context.meta, extras);
  }

  _export("GlobalProtocol", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      Encrypt = _unresolved_2.Encrypt;
    }, function (_unresolved_3) {
      Logger = _unresolved_3.Logger;
    }, function (_unresolved_4) {
      WebSocketBuffer = _unresolved_4.WebSocketBuffer;
    }, function (_unresolved_5) {
      Utils = _unresolved_5.Utils;
    }, function (_unresolved_6) {
      GlobalCMDHead = _unresolved_6.GlobalCMDHead;
    }, function (_unresolved_7) {
      GPBWriteAndRead = _unresolved_7.GPBWriteAndRead;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "19c82//EbBDJ4iFvx0yA6qj", "GlobalProtocol", undefined);

      _export("GlobalProtocol", GlobalProtocol = class GlobalProtocol {
        constructor() {
          this.PacketSize = 16384;
        }

        // 返回包头长度
        getHeadlen() {
          return 15;
        }

        // 返回一个心跳包
        getHearbeatPackage() {
          let array = {
            headCmd: (_crd && GlobalCMDHead === void 0 ? (_reportPossibleCrUseOfGlobalCMDHead({
              error: Error()
            }), GlobalCMDHead) : GlobalCMDHead).SERVER_SEND_HEART,
            isCompress: false,
            data: {},
            buffer: null
          };
          return array;
        }

        // 返回整个包的长度                  
        getPackageLen(msg) {
          return msg["byteLength"] || msg.toString().length;
        }

        // 检查请求包数据是否合法（避免客户端报错崩溃） 
        checkRequestPackage(msg) {
          return this.getPackageLen(msg) <= this.PacketSize;
        } // 检查响应包数据是否合法（避免客户端报错崩溃）                 


        checkResponsePackage(msg) {
          return this.getPackageLen(msg) >= this.getHeadlen();
        }

        // 处理请求包数据(以二进制流的方式)
        handlerRequestPackage(reqProtocol) {
          if (!reqProtocol || !reqProtocol.headCmd) {
            return false;
          } //对数据进行转换（二进制流）


          reqProtocol.buffer = null; //头部长度

          let headlen = this.getHeadlen(); //处理之后的数据

          let preDetalData = null; //////////////////////////////////
          //包ID

          let packetID = (_crd && WebSocketBuffer === void 0 ? (_reportPossibleCrUseOfWebSocketBuffer({
            error: Error()
          }), WebSocketBuffer) : WebSocketBuffer).Write.newPacket(0, this.isLittleEndian()); //写标头

          (_crd && WebSocketBuffer === void 0 ? (_reportPossibleCrUseOfWebSocketBuffer({
            error: Error()
          }), WebSocketBuffer) : WebSocketBuffer).Write.writeInt(packetID, 0); //正文数据长度

          let a = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).string_codeToASCII("Q");
          let b = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).string_codeToASCII("E");
          (_crd && WebSocketBuffer === void 0 ? (_reportPossibleCrUseOfWebSocketBuffer({
            error: Error()
          }), WebSocketBuffer) : WebSocketBuffer).Write.writeByte(packetID, a);
          (_crd && WebSocketBuffer === void 0 ? (_reportPossibleCrUseOfWebSocketBuffer({
            error: Error()
          }), WebSocketBuffer) : WebSocketBuffer).Write.writeByte(packetID, b);
          (_crd && WebSocketBuffer === void 0 ? (_reportPossibleCrUseOfWebSocketBuffer({
            error: Error()
          }), WebSocketBuffer) : WebSocketBuffer).Write.writeByte(packetID, 1);
          (_crd && WebSocketBuffer === void 0 ? (_reportPossibleCrUseOfWebSocketBuffer({
            error: Error()
          }), WebSocketBuffer) : WebSocketBuffer).Write.writeByte(packetID, 0);
          (_crd && WebSocketBuffer === void 0 ? (_reportPossibleCrUseOfWebSocketBuffer({
            error: Error()
          }), WebSocketBuffer) : WebSocketBuffer).Write.writeInt(packetID, reqProtocol.headCmd);
          (_crd && WebSocketBuffer === void 0 ? (_reportPossibleCrUseOfWebSocketBuffer({
            error: Error()
          }), WebSocketBuffer) : WebSocketBuffer).Write.writeShort(packetID, 1);
          (_crd && WebSocketBuffer === void 0 ? (_reportPossibleCrUseOfWebSocketBuffer({
            error: Error()
          }), WebSocketBuffer) : WebSocketBuffer).Write.writeUByte(packetID, 0); //校验码

          (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
            error: Error()
          }), Logger) : Logger).logNet(`[GProtocol]:handlerRequestPackage 处理请求包数据 HeadCmd[10进制] = ${reqProtocol.headCmd} HeadCmd[16进制] = ${(_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).number_formatToHex(reqProtocol.headCmd)}`); //开始写

          reqProtocol = (_crd && GPBWriteAndRead === void 0 ? (_reportPossibleCrUseOfGPBWriteAndRead({
            error: Error()
          }), GPBWriteAndRead) : GPBWriteAndRead).Write.Start(reqProtocol.headCmd, packetID, reqProtocol);

          if (!reqProtocol) {
            //删除这个包
            (_crd && WebSocketBuffer === void 0 ? (_reportPossibleCrUseOfWebSocketBuffer({
              error: Error()
            }), WebSocketBuffer) : WebSocketBuffer).Read.delPacket(packetID);
            return false;
          } //读取包


          (_crd && WebSocketBuffer === void 0 ? (_reportPossibleCrUseOfWebSocketBuffer({
            error: Error()
          }), WebSocketBuffer) : WebSocketBuffer).Read.syncPacket(packetID);
          let dataView = (_crd && WebSocketBuffer === void 0 ? (_reportPossibleCrUseOfWebSocketBuffer({
            error: Error()
          }), WebSocketBuffer) : WebSocketBuffer).Read.readPacket(packetID, true);
          (_crd && WebSocketBuffer === void 0 ? (_reportPossibleCrUseOfWebSocketBuffer({
            error: Error()
          }), WebSocketBuffer) : WebSocketBuffer).Read.delPacket(packetID); //重新设置包体正文长度

          if (dataView) {
            dataView.setInt32(0, dataView.byteLength - 4);
          } //心跳包不加密


          if (reqProtocol.headCmd == (_crd && GlobalCMDHead === void 0 ? (_reportPossibleCrUseOfGlobalCMDHead({
            error: Error()
          }), GlobalCMDHead) : GlobalCMDHead).SERVER_SEND_HEART) {
            reqProtocol.buffer = dataView;
          } else {
            reqProtocol.buffer = (_crd && Encrypt === void 0 ? (_reportPossibleCrUseOfEncrypt({
              error: Error()
            }), Encrypt) : Encrypt).encodeBuffer(headlen, this.PacketSize, dataView, this.isLittleEndian());
          }

          if (!this.checkRequestPackage(dataView)) {
            reqProtocol.buffer = null;
            (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
              error: Error()
            }), Logger) : Logger).logNet("[GProtocol]: Error:封包失败长度超出限制");
            return false;
          }

          if (!reqProtocol || reqProtocol.buffer == null) {
            return false;
          }

          return true;
        }

        // 处理响应包数据   
        handlerResponsePackage(msg) {
          // Logger.logNet("处理响应包数据===>")
          if (!msg) {
            return null;
          } //包ID


          let packetID = (_crd && WebSocketBuffer === void 0 ? (_reportPossibleCrUseOfWebSocketBuffer({
            error: Error()
          }), WebSocketBuffer) : WebSocketBuffer).Write.insertPacket(msg, false);

          if (!packetID) {
            return null;
          }

          let dataView = (_crd && WebSocketBuffer === void 0 ? (_reportPossibleCrUseOfWebSocketBuffer({
            error: Error()
          }), WebSocketBuffer) : WebSocketBuffer).Read.readPacket(packetID, true);
          let headLen = this.getHeadlen();

          if (dataView.byteLength < headLen) {
            (_crd && WebSocketBuffer === void 0 ? (_reportPossibleCrUseOfWebSocketBuffer({
              error: Error()
            }), WebSocketBuffer) : WebSocketBuffer).Read.delPacket(packetID);
            return null;
          } //读标头


          let contentLength = (_crd && WebSocketBuffer === void 0 ? (_reportPossibleCrUseOfWebSocketBuffer({
            error: Error()
          }), WebSocketBuffer) : WebSocketBuffer).Read.readInt(packetID, this.isLittleEndian()); //正文数据长度

          (_crd && WebSocketBuffer === void 0 ? (_reportPossibleCrUseOfWebSocketBuffer({
            error: Error()
          }), WebSocketBuffer) : WebSocketBuffer).Read.readByte(packetID);
          (_crd && WebSocketBuffer === void 0 ? (_reportPossibleCrUseOfWebSocketBuffer({
            error: Error()
          }), WebSocketBuffer) : WebSocketBuffer).Read.readByte(packetID);
          (_crd && WebSocketBuffer === void 0 ? (_reportPossibleCrUseOfWebSocketBuffer({
            error: Error()
          }), WebSocketBuffer) : WebSocketBuffer).Read.readByte(packetID);
          (_crd && WebSocketBuffer === void 0 ? (_reportPossibleCrUseOfWebSocketBuffer({
            error: Error()
          }), WebSocketBuffer) : WebSocketBuffer).Read.readByte(packetID);
          let headCmd = (_crd && WebSocketBuffer === void 0 ? (_reportPossibleCrUseOfWebSocketBuffer({
            error: Error()
          }), WebSocketBuffer) : WebSocketBuffer).Read.readInt(packetID, this.isLittleEndian()); //头部命令

          (_crd && WebSocketBuffer === void 0 ? (_reportPossibleCrUseOfWebSocketBuffer({
            error: Error()
          }), WebSocketBuffer) : WebSocketBuffer).Read.readShort(packetID, this.isLittleEndian());
          (_crd && WebSocketBuffer === void 0 ? (_reportPossibleCrUseOfWebSocketBuffer({
            error: Error()
          }), WebSocketBuffer) : WebSocketBuffer).Read.readUByte(packetID); //校验码

          let countRealSize = contentLength + 4;
          let realContentLength = countRealSize - headLen;

          if (realContentLength < 0 || countRealSize > dataView.byteLength) {
            //等于0则可能为心跳包 大于则超出限制
            console.warn("[GProtocol]: 数据有误，正文数据比头部数据还短 或者 定义的数据长度比整个包还长 countRealSize:" + countRealSize); //删除这个包

            (_crd && WebSocketBuffer === void 0 ? (_reportPossibleCrUseOfWebSocketBuffer({
              error: Error()
            }), WebSocketBuffer) : WebSocketBuffer).Read.delPacket(packetID);
            return null;
          }

          (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
            error: Error()
          }), Logger) : Logger).logNet(`[GProtocol]: 处理响应包数据 headCmd[10进制] = ${headCmd} headCmd[16进制] = ${(_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).number_formatToHex(headCmd)}`); //非心跳包需要解密

          if (headCmd != (_crd && GlobalCMDHead === void 0 ? (_reportPossibleCrUseOfGlobalCMDHead({
            error: Error()
          }), GlobalCMDHead) : GlobalCMDHead).SERVER_HEART_RESPONSE) {
            if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).number_formatToHex(headCmd) == "0x1007") {
              console.log("！！！！这是进入房间成功的数据!!!!"); // //删除这个包
              // WebSocketBuffer.Read.delPacket(packetID)
              // //将新包推进缓存区
              // let newArrayBuffer = dataView.buffer.slice(headLen, dataView.byteLength);
              // packetID = WebSocketBuffer.Write.insertPacket(newArrayBuffer, false);
              // console.log("老包===>", dataView)
              // console.log("新包包长：===>", newArrayBuffer)
            }

            dataView = (_crd && Encrypt === void 0 ? (_reportPossibleCrUseOfEncrypt({
              error: Error()
            }), Encrypt) : Encrypt).decodeBuffer(headLen, this.PacketSize, dataView, this.isLittleEndian()); //删除这个包

            (_crd && WebSocketBuffer === void 0 ? (_reportPossibleCrUseOfWebSocketBuffer({
              error: Error()
            }), WebSocketBuffer) : WebSocketBuffer).Read.delPacket(packetID); //将新包推进缓存区

            let newArrayBuffer = dataView.buffer.slice(0, dataView.byteLength);
            packetID = (_crd && WebSocketBuffer === void 0 ? (_reportPossibleCrUseOfWebSocketBuffer({
              error: Error()
            }), WebSocketBuffer) : WebSocketBuffer).Write.insertPacket(newArrayBuffer, false);
            let bbView = (_crd && WebSocketBuffer === void 0 ? (_reportPossibleCrUseOfWebSocketBuffer({
              error: Error()
            }), WebSocketBuffer) : WebSocketBuffer).Read.readPacket(packetID, true); //从指定位置开始读

            (_crd && WebSocketBuffer === void 0 ? (_reportPossibleCrUseOfWebSocketBuffer({
              error: Error()
            }), WebSocketBuffer) : WebSocketBuffer).Read.readPacketOffset(packetID, headLen - 1);
          }

          let respPackage = null; //根据头来分包解析正文

          if (packetID) {
            //开始读
            respPackage = (_crd && GPBWriteAndRead === void 0 ? (_reportPossibleCrUseOfGPBWriteAndRead({
              error: Error()
            }), GPBWriteAndRead) : GPBWriteAndRead).Read.Start(headCmd, packetID);
          } else {
            console.error(`[Protocol]: Error：第一步解包出错 `);
          } //删除这个包


          (_crd && WebSocketBuffer === void 0 ? (_reportPossibleCrUseOfWebSocketBuffer({
            error: Error()
          }), WebSocketBuffer) : WebSocketBuffer).Read.delPacket(packetID);
          return respPackage;
        }
        /** 是否是小端 */


        isLittleEndian() {
          return false;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=e78f09519514fa14ec7cc711fde2ecc899cab755.js.map