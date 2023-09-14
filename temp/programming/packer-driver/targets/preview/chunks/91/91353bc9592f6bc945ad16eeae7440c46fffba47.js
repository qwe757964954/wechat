System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, error, Utils, Encrypt, EventManager, WebSocketBuffer, FXJEvent, FXJCmdBinding, FXJPBAdaptive, FXJWriteAndRead, _crd, checkRead, checkWrite, GetPackPacket;

  function _reportPossibleCrUseOfUtils(extras) {
    _reporterNs.report("Utils", "../../../framework/Utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEncrypt(extras) {
    _reporterNs.report("Encrypt", "../../../framework/crypto/Encrypto", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventManager(extras) {
    _reporterNs.report("EventManager", "../../../framework/manager/EventManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIRequestProtocol(extras) {
    _reporterNs.report("IRequestProtocol", "../../../framework/network/NetInterface", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWebSocketBuffer(extras) {
    _reporterNs.report("WebSocketBuffer", "../../../framework/network/WebSocketBuffer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFXJEvent(extras) {
    _reporterNs.report("FXJEvent", "../common/FXJEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFXJCmdBinding(extras) {
    _reporterNs.report("FXJCmdBinding", "./FXJCmd", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFXJPBAdaptive(extras) {
    _reporterNs.report("FXJPBAdaptive", "./FXJPBAdaptive", _context.meta, extras);
  }

  _export("FXJWriteAndRead", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      error = _cc.error;
    }, function (_unresolved_2) {
      Utils = _unresolved_2.Utils;
    }, function (_unresolved_3) {
      Encrypt = _unresolved_3.Encrypt;
    }, function (_unresolved_4) {
      EventManager = _unresolved_4.EventManager;
    }, function (_unresolved_5) {
      WebSocketBuffer = _unresolved_5.WebSocketBuffer;
    }, function (_unresolved_6) {
      FXJEvent = _unresolved_6.FXJEvent;
    }, function (_unresolved_7) {
      FXJCmdBinding = _unresolved_7.FXJCmdBinding;
    }, function (_unresolved_8) {
      FXJPBAdaptive = _unresolved_8.FXJPBAdaptive;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b570dlefCdEOYtPfFXkY0/l", "FXJWriteAndRead", undefined);

      __checkObsolete__(['error']);

      /** 校验读 */
      checkRead = function checkRead(packetID) {
        if (!packetID) {
          return null;
        }

        var dataView = (_crd && WebSocketBuffer === void 0 ? (_reportPossibleCrUseOfWebSocketBuffer({
          error: Error()
        }), WebSocketBuffer) : WebSocketBuffer).Read.readPacket(packetID, true, false, false);

        if (!dataView) {
          return null;
        }

        return dataView;
      };
      /** 校验写 */


      checkWrite = function checkWrite(packetID, reqProtocol) {
        if (!packetID) {
          return false;
        }

        if (!reqProtocol || !reqProtocol.data) {
          return false;
        }

        return true;
      };
      /**命令序列 */


      /** 包装包体 */
      GetPackPacket = function GetPackPacket(headCmd, action, data, buffer) {
        if (headCmd === void 0) {
          headCmd = null;
        }

        if (action === void 0) {
          action = null;
        }

        if (data === void 0) {
          data = null;
        }

        if (buffer === void 0) {
          buffer = null;
        }

        var resp = {
          /**头部命令 */
          headCmd: headCmd,

          /** 动作名 */
          action: action,

          /** 消息内容 */
          data: data,

          /** 加密成的buffer data 服务端下发*/
          buffer: buffer
        };
        return resp;
      };

      _export("FXJWriteAndRead", FXJWriteAndRead = class FXJWriteAndRead {
        static getInstance() {
          if (!this._instance || this._instance == null) {
            this._instance = new FXJWriteAndRead("FXJWriteAndRead");
          }

          return this._instance;
        }

        static init() {
          if (this._instance) {
            this._instance = null;
          }

          FXJWriteAndRead.getInstance();
          return;
        } //请求时 cmd与pb的映射


        //实例化
        constructor(name) {
          this.req_CmdMapping = {};
          this.resp_CmdMapping = {};
          console.log(name + " \u5B9E\u4F8B\u5316"); //实例化PB解析和包装类
        }

        /** 初始化Pb */
        initPB() {
          (_crd && FXJPBAdaptive === void 0 ? (_reportPossibleCrUseOfFXJPBAdaptive({
            error: Error()
          }), FXJPBAdaptive) : FXJPBAdaptive).getInstance().startReloadPBList(); //绑定读写
          //读写 0读 1写

          var writerArray = [];
          var readArray = [];

          for (var headCmd in (_crd && FXJCmdBinding === void 0 ? (_reportPossibleCrUseOfFXJCmdBinding({
            error: Error()
          }), FXJCmdBinding) : FXJCmdBinding).REQ) {
            if (Object.prototype.hasOwnProperty.call((_crd && FXJCmdBinding === void 0 ? (_reportPossibleCrUseOfFXJCmdBinding({
              error: Error()
            }), FXJCmdBinding) : FXJCmdBinding).REQ, headCmd)) {
              var _headCmd = Number(headCmd);

              var value = (_crd && FXJCmdBinding === void 0 ? (_reportPossibleCrUseOfFXJCmdBinding({
                error: Error()
              }), FXJCmdBinding) : FXJCmdBinding).REQ[_headCmd];
              var arr = {
                cmd: _headCmd,
                binding: FXJWriteAndRead.WritePB
              };
              writerArray.push(arr);
            }
          }

          for (var _headCmd2 in (_crd && FXJCmdBinding === void 0 ? (_reportPossibleCrUseOfFXJCmdBinding({
            error: Error()
          }), FXJCmdBinding) : FXJCmdBinding).RESP) {
            if (Object.prototype.hasOwnProperty.call((_crd && FXJCmdBinding === void 0 ? (_reportPossibleCrUseOfFXJCmdBinding({
              error: Error()
            }), FXJCmdBinding) : FXJCmdBinding).RESP, _headCmd2)) {
              var _headCmd3 = Number(_headCmd2);

              var _value = (_crd && FXJCmdBinding === void 0 ? (_reportPossibleCrUseOfFXJCmdBinding({
                error: Error()
              }), FXJCmdBinding) : FXJCmdBinding).RESP[_headCmd3];
              var _arr = {
                cmd: _headCmd3,
                binding: FXJWriteAndRead.ReadPB
              };
              readArray.push(_arr);
            }
          }

          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && FXJEvent === void 0 ? (_reportPossibleCrUseOfFXJEvent({
            error: Error()
          }), FXJEvent) : FXJEvent).SYS_UPDATE_PROTOBUF, 0, readArray);
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && FXJEvent === void 0 ? (_reportPossibleCrUseOfFXJEvent({
            error: Error()
          }), FXJEvent) : FXJEvent).SYS_UPDATE_PROTOBUF, 1, writerArray);
        }
        /** 初始化命令绑定映射 */


        initCMDMapping() {
          var allCMDList = {}; //0读 1写

          for (var headCmd in (_crd && FXJCmdBinding === void 0 ? (_reportPossibleCrUseOfFXJCmdBinding({
            error: Error()
          }), FXJCmdBinding) : FXJCmdBinding).REQ) {
            if (Object.prototype.hasOwnProperty.call((_crd && FXJCmdBinding === void 0 ? (_reportPossibleCrUseOfFXJCmdBinding({
              error: Error()
            }), FXJCmdBinding) : FXJCmdBinding).REQ, headCmd)) {
              var _headCmd = Number(headCmd);

              var value = (_crd && FXJCmdBinding === void 0 ? (_reportPossibleCrUseOfFXJCmdBinding({
                error: Error()
              }), FXJCmdBinding) : FXJCmdBinding).REQ[_headCmd];
              allCMDList[_headCmd] = value;
            }
          }

          for (var _headCmd4 in (_crd && FXJCmdBinding === void 0 ? (_reportPossibleCrUseOfFXJCmdBinding({
            error: Error()
          }), FXJCmdBinding) : FXJCmdBinding).RESP) {
            if (Object.prototype.hasOwnProperty.call((_crd && FXJCmdBinding === void 0 ? (_reportPossibleCrUseOfFXJCmdBinding({
              error: Error()
            }), FXJCmdBinding) : FXJCmdBinding).RESP, _headCmd4)) {
              var _headCmd5 = Number(_headCmd4);

              var _value2 = (_crd && FXJCmdBinding === void 0 ? (_reportPossibleCrUseOfFXJCmdBinding({
                error: Error()
              }), FXJCmdBinding) : FXJCmdBinding).RESP[_headCmd5];
              allCMDList[_headCmd5] = _value2;
            }
          }

          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && FXJEvent === void 0 ? (_reportPossibleCrUseOfFXJEvent({
            error: Error()
          }), FXJEvent) : FXJEvent).SYS_UPDATE_CMDMAPPING, allCMDList);
        }
        /** PB写 */


        static WritePB(headCmd, packetID, reqProtocol) {
          reqProtocol.isCompress = false; //pb包装

          if ((_crd && FXJCmdBinding === void 0 ? (_reportPossibleCrUseOfFXJCmdBinding({
            error: Error()
          }), FXJCmdBinding) : FXJCmdBinding).REQ[headCmd]) {
            var pbPackageID = (_crd && FXJCmdBinding === void 0 ? (_reportPossibleCrUseOfFXJCmdBinding({
              error: Error()
            }), FXJCmdBinding) : FXJCmdBinding).REQ[headCmd]["packageID"];
            var pbFuncName = (_crd && FXJCmdBinding === void 0 ? (_reportPossibleCrUseOfFXJCmdBinding({
              error: Error()
            }), FXJCmdBinding) : FXJCmdBinding).REQ[headCmd]["funcName"];

            if (pbPackageID && pbFuncName) {
              var dataArrayBuffer = (_crd && FXJPBAdaptive === void 0 ? (_reportPossibleCrUseOfFXJPBAdaptive({
                error: Error()
              }), FXJPBAdaptive) : FXJPBAdaptive).getInstance().encodePacket(reqProtocol.data, pbPackageID, pbFuncName);
              var str = (_crd && Encrypt === void 0 ? (_reportPossibleCrUseOfEncrypt({
                error: Error()
              }), Encrypt) : Encrypt).arrayBufferToString(dataArrayBuffer, false, false);

              if (str) {
                (_crd && WebSocketBuffer === void 0 ? (_reportPossibleCrUseOfWebSocketBuffer({
                  error: Error()
                }), WebSocketBuffer) : WebSocketBuffer).Write.writeStringNoZeroEnd(packetID, str);
              } else {
                error("[FXJWriteAndRead]:WritePB \u5305\u88C5\u6570\u636E\u7ED3\u6784\u51FA\u9519HeadCmd[10\u8FDB\u5236] = " + headCmd + " HeadCmd[16\u8FDB\u5236] = " + (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                  error: Error()
                }), Utils) : Utils).number_formatToHex(headCmd) + ",\u5305\u88C5\u51FD\u6570\u4E3A = " + pbFuncName);
              }
            } else if (pbPackageID == null && pbFuncName != null) {
              if (FXJWriteAndRead.getInstance()[pbFuncName] != null) {
                FXJWriteAndRead.getInstance()[pbFuncName](headCmd, packetID, reqProtocol);
              } else {
                error("[FXJWriteAndRead]:WritePB \u5305\u88C5\u6570\u636E\u7ED3\u6784\u51FA\u9519HeadCmd[10\u8FDB\u5236] = " + headCmd + " HeadCmd[16\u8FDB\u5236] = " + (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                  error: Error()
                }), Utils) : Utils).number_formatToHex(headCmd) + ",\u5305\u88C5\u51FD\u6570\u4E3A = " + pbFuncName);
              }
            }
          }

          reqProtocol.data = "";
          return reqProtocol;
        }
        /** PB读 */


        static ReadPB(headCmd, packetID) {
          console.log("FXJWriteAndRead:ReadPB pb读===>", ",HeadCmd[10\u8FDB\u5236] = " + headCmd + " HeadCmd[16\u8FDB\u5236] = " + (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).number_formatToHex(headCmd));
          var dataView = checkRead(packetID);

          if (!dataView) {
            return null;
          } //pb解析


          var packetInfo = null;

          if ((_crd && FXJCmdBinding === void 0 ? (_reportPossibleCrUseOfFXJCmdBinding({
            error: Error()
          }), FXJCmdBinding) : FXJCmdBinding).RESP[headCmd]) {
            var pbPackageID = (_crd && FXJCmdBinding === void 0 ? (_reportPossibleCrUseOfFXJCmdBinding({
              error: Error()
            }), FXJCmdBinding) : FXJCmdBinding).RESP[headCmd]["packageID"];
            var pbFuncName = (_crd && FXJCmdBinding === void 0 ? (_reportPossibleCrUseOfFXJCmdBinding({
              error: Error()
            }), FXJCmdBinding) : FXJCmdBinding).RESP[headCmd]["funcName"];

            if (pbPackageID && pbFuncName) {
              var str = (_crd && WebSocketBuffer === void 0 ? (_reportPossibleCrUseOfWebSocketBuffer({
                error: Error()
              }), WebSocketBuffer) : WebSocketBuffer).Read.readStringNoZeroEnd(packetID);
              var bytes = (_crd && Encrypt === void 0 ? (_reportPossibleCrUseOfEncrypt({
                error: Error()
              }), Encrypt) : Encrypt).stringToByte(str, false);

              if (bytes && bytes.length > 0) {
                var byteBuffer = (_crd && FXJPBAdaptive === void 0 ? (_reportPossibleCrUseOfFXJPBAdaptive({
                  error: Error()
                }), FXJPBAdaptive) : FXJPBAdaptive).getInstance().bytesToByteBuffer(bytes, false);
                packetInfo = (_crd && FXJPBAdaptive === void 0 ? (_reportPossibleCrUseOfFXJPBAdaptive({
                  error: Error()
                }), FXJPBAdaptive) : FXJPBAdaptive).getInstance().decodePacket(byteBuffer, pbPackageID, pbFuncName); //namePfunc["pbFuncName"].decode(Encrypt.bytesToUint8Array(bytes));
              }
            }

            if (!packetInfo) {
              error("[FXJWriteAndRead]:ReadPB \u89E3\u6790\u5305\u88C5\u7684\u6570\u636E\u7ED3\u6784\u4F53\u4E3A\u7A7A ,HeadCmd[10\u8FDB\u5236] = " + headCmd + " HeadCmd[16\u8FDB\u5236] = " + (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                error: Error()
              }), Utils) : Utils).number_formatToHex(headCmd) + ",\u89E3\u6790\u51FD\u6570\u4E3A = " + pbFuncName);
              packetInfo = null;
            }
          }

          return GetPackPacket(headCmd, null, packetInfo, dataView);
        } //ROOM_USER_CHAT 0x1004:发送聊天


        onReqCommonUserChat(headCmd, packetID, reqProtocol) {
          (_crd && WebSocketBuffer === void 0 ? (_reportPossibleCrUseOfWebSocketBuffer({
            error: Error()
          }), WebSocketBuffer) : WebSocketBuffer).Write.writeString(packetID, reqProtocol.data["msg"] || "");
          (_crd && WebSocketBuffer === void 0 ? (_reportPossibleCrUseOfWebSocketBuffer({
            error: Error()
          }), WebSocketBuffer) : WebSocketBuffer).Write.writeShort(packetID, reqProtocol.data["index"] || -1);
          reqProtocol.data = "";
          reqProtocol.isCompress = false;
          return reqProtocol;
        } //ROOM_USER_FACE 0x1004:发送表情


        onReqCommonUserFace(headCmd, packetID, reqProtocol) {
          (_crd && WebSocketBuffer === void 0 ? (_reportPossibleCrUseOfWebSocketBuffer({
            error: Error()
          }), WebSocketBuffer) : WebSocketBuffer).Write.writeInt(packetID, reqProtocol.data["faceValue"] || 0);
          (_crd && WebSocketBuffer === void 0 ? (_reportPossibleCrUseOfWebSocketBuffer({
            error: Error()
          }), WebSocketBuffer) : WebSocketBuffer).Write.writeInt(packetID, reqProtocol.data["vipType"] || 0);
          reqProtocol.data = "";
          reqProtocol.isCompress = false;
          return reqProtocol;
        } // onReqOperation(headCmd, packetID: string, reqProtocol: IRequestProtocol) {
        // }


      });

      FXJWriteAndRead._instance = null;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=91353bc9592f6bc945ad16eeae7440c46fffba47.js.map