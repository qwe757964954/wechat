System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Encrypt, Logger, WebSocketBuffer, Utils, SuperWriteAndRead, GPBRead, GPBWrite, _crd, GetPackPacket, checkRead, checkWrite, WriteAndReadType, GPBWriteAndRead;

  function _reportPossibleCrUseOfEncrypt(extras) {
    _reporterNs.report("Encrypt", "../../framework/crypto/Encrypto", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLogger(extras) {
    _reporterNs.report("Logger", "../../framework/log/Logger", _context.meta, extras);
  }

  function _reportPossibleCrUseOfINetPHPMessage(extras) {
    _reporterNs.report("INetPHPMessage", "../../framework/network/NetInterface", _context.meta, extras);
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
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "53ac9U2SxRJUrJ0sWVSUBrh", "GPBWriteAndRead", undefined);

      /** 包装包体 */
      GetPackPacket = function (headCmd = null, action = null, data = null, buffer = null) {
        let resp = {
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
      /** 校验读 */


      checkRead = function (packetID) {
        if (!packetID) {
          return null;
        }

        let dataView = (_crd && WebSocketBuffer === void 0 ? (_reportPossibleCrUseOfWebSocketBuffer({
          error: Error()
        }), WebSocketBuffer) : WebSocketBuffer).Read.readPacket(packetID, true);

        if (!dataView) {
          return null;
        }

        return dataView;
      };
      /** 校验写 */


      checkWrite = function (packetID, reqProtocol) {
        if (!packetID) {
          return false;
        }

        if (!reqProtocol || !reqProtocol.data) {
          return false;
        }

        return true;
      };
      /**命令序列 */


      //读写类型 0读 1写
      _export("WriteAndReadType", WriteAndReadType = {
        Read: 0,
        //读
        Write: 1 //写

      }); //超类解析


      SuperWriteAndRead = class SuperWriteAndRead {
        //cmd解析函数队列
        //实例化
        constructor(name = null, type = null) {
          this._CmdArrayFunc = {};
          this._className = "";
          this._type = null;

          if (name) {
            this._className = name;
            console.log(`${name} 实例化`);
          }

          this._type = type;
        }

        //初始化通用模块命令
        initCommonCmd(headCmdBinding, isReset = false) {
          if (isReset) {
            this.updateCmdArrayFunc(null, true);
          }

          if (!headCmdBinding || typeof headCmdBinding != "object") {
            return;
          }

          for (let headCmd in headCmdBinding) {
            if (Object.prototype.hasOwnProperty.call(headCmdBinding, headCmd)) {
              let value = headCmdBinding[headCmd];

              if (value && value.pbType != null) {
                let arr = {
                  cmd: headCmd,
                  binding: value.pbFunc
                };

                if (value.pbType == this._type) {
                  this.updateCmdArrayFunc([arr]);
                }
              }
            }
          }
        }
        /**
         * 更新读写队列
         * @param arrayList 要更新的队列
         * @param isReset 是否重置 默认不重置
         * @returns 
         */


        updateCmdArrayFunc(arrayList, isReset = false) {
          if (isReset) {
            this._CmdArrayFunc = {};
          } // this.cmdArrayFunc


          if (arrayList == null || arrayList == undefined) {
            return;
          }

          if (arrayList.length == 0) {
            return;
          }

          for (let index = 0; index < arrayList.length; index++) {
            let array = arrayList[index]; //只有类型无解析函数的全部用默认方式

            if (!array.binding) {
              array.binding = this.__defaultWriteOrRead;
            }

            if (array && array.cmd && array.binding) {
              this._CmdArrayFunc[array.cmd] = array.binding;
            }
          }
        }

        cleanCmdArrayFunc() {
          this._CmdArrayFunc = {};
        }
        /**开始执行操作 */


        Start(headCmd, ...args) {
          if (this._CmdArrayFunc[headCmd]) {
            return this._CmdArrayFunc[headCmd](headCmd, ...args);
          } else {
            (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
              error: Error()
            }), Logger) : Logger).warn(`【${this._className}】 【***未定义解析方法*】，HeadCmd[10进制] = ${headCmd} HeadCmd[16进制] = ${(_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).number_formatToHex(headCmd)}`);
          }

          return null;
        } //默认解析方式


        __defaultWriteOrRead(...args) {}

      };
      /**读 */

      GPBRead = class GPBRead extends SuperWriteAndRead {
        //实例化
        constructor() {
          super("GPBRead", WriteAndReadType.Read);
        }

        //读php协议
        ReadPhpRequest(headCmd, packetID) {
          let dataView = checkRead(packetID);

          if (!dataView) {
            return null;
          }

          let info = {};
          info["flag"] = (_crd && WebSocketBuffer === void 0 ? (_reportPossibleCrUseOfWebSocketBuffer({
            error: Error()
          }), WebSocketBuffer) : WebSocketBuffer).Read.readInt(packetID);
          info["cmd"] = (_crd && WebSocketBuffer === void 0 ? (_reportPossibleCrUseOfWebSocketBuffer({
            error: Error()
          }), WebSocketBuffer) : WebSocketBuffer).Read.readInt(packetID);
          let jsonStr = (_crd && WebSocketBuffer === void 0 ? (_reportPossibleCrUseOfWebSocketBuffer({
            error: Error()
          }), WebSocketBuffer) : WebSocketBuffer).Read.readString(packetID);
          info["jsonStr"] = jsonStr ? (_crd && Encrypt === void 0 ? (_reportPossibleCrUseOfEncrypt({
            error: Error()
          }), Encrypt) : Encrypt).JsonDecode(jsonStr) : null;
          return GetPackPacket(headCmd, null, info, dataView);
        } //读php新协议


        ReadPhpRequestNew(headCmd, packetID) {
          let dataView = checkRead(packetID);

          if (!dataView) {
            return null;
          }
          /** info对应 接口 INetPHPMessage 的数据 */


          let info = {};
          info.mid = (_crd && WebSocketBuffer === void 0 ? (_reportPossibleCrUseOfWebSocketBuffer({
            error: Error()
          }), WebSocketBuffer) : WebSocketBuffer).Read.readInt(packetID);
          info.cmd = (_crd && WebSocketBuffer === void 0 ? (_reportPossibleCrUseOfWebSocketBuffer({
            error: Error()
          }), WebSocketBuffer) : WebSocketBuffer).Read.readInt(packetID);
          info.compressType = (_crd && WebSocketBuffer === void 0 ? (_reportPossibleCrUseOfWebSocketBuffer({
            error: Error()
          }), WebSocketBuffer) : WebSocketBuffer).Read.readInt(packetID); //1 压缩 0未压缩

          let strData = (_crd && WebSocketBuffer === void 0 ? (_reportPossibleCrUseOfWebSocketBuffer({
            error: Error()
          }), WebSocketBuffer) : WebSocketBuffer).Read.readString(packetID);

          if (strData && info.compressType != null) {
            //解析正文
            let jsonData = (_crd && Encrypt === void 0 ? (_reportPossibleCrUseOfEncrypt({
              error: Error()
            }), Encrypt) : Encrypt).base64_decode(strData);

            if (info.compressType == 1) {
              jsonData = (_crd && Encrypt === void 0 ? (_reportPossibleCrUseOfEncrypt({
                error: Error()
              }), Encrypt) : Encrypt).UnZlibZip(jsonData);
            } // if(jsonData){
            // 	jsonData = Encrypt.UnicodeDecode(jsonData)
            // }


            if (jsonData) {
              // console.log("json即将decode==>"+jsonData)
              jsonData = (_crd && Encrypt === void 0 ? (_reportPossibleCrUseOfEncrypt({
                error: Error()
              }), Encrypt) : Encrypt).JsonDecode(jsonData);
            }

            strData = jsonData;
          }

          info.body = strData;
          return GetPackPacket(headCmd, null, info, dataView);
        } //读：RESPONSE_HALL_LOGIN_SUCCESS


        ReadHallLoginSuccess(headCmd, packetID) {
          let dataView = checkRead(packetID);

          if (!dataView) {
            return null;
          }

          let info = {};
          info["ret"] = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).nullToDefault((_crd && WebSocketBuffer === void 0 ? (_reportPossibleCrUseOfWebSocketBuffer({
            error: Error()
          }), WebSocketBuffer) : WebSocketBuffer).Read.readUByte(packetID), 0);

          if (info["ret"] === 1) {
            info["gameType"] = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).nullToDefault((_crd && WebSocketBuffer === void 0 ? (_reportPossibleCrUseOfWebSocketBuffer({
              error: Error()
            }), WebSocketBuffer) : WebSocketBuffer).Read.readUShort(packetID), 0);
            info["svid"] = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).nullToDefault((_crd && WebSocketBuffer === void 0 ? (_reportPossibleCrUseOfWebSocketBuffer({
              error: Error()
            }), WebSocketBuffer) : WebSocketBuffer).Read.readInt(packetID), -1);
            info["roomId"] = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).nullToDefault((_crd && WebSocketBuffer === void 0 ? (_reportPossibleCrUseOfWebSocketBuffer({
              error: Error()
            }), WebSocketBuffer) : WebSocketBuffer).Read.readInt(packetID), 0);
            info["roomLevel"] = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).nullToDefault((_crd && WebSocketBuffer === void 0 ? (_reportPossibleCrUseOfWebSocketBuffer({
              error: Error()
            }), WebSocketBuffer) : WebSocketBuffer).Read.readUShort(packetID), 0);
          }

          info["matchInfo"] = {};
          info["matchState"] = (_crd && WebSocketBuffer === void 0 ? (_reportPossibleCrUseOfWebSocketBuffer({
            error: Error()
          }), WebSocketBuffer) : WebSocketBuffer).Read.readUByte(packetID);

          if (info["matchState"] == 1) {
            info["matchInfo"]["gameId"] = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).nullToDefault((_crd && WebSocketBuffer === void 0 ? (_reportPossibleCrUseOfWebSocketBuffer({
              error: Error()
            }), WebSocketBuffer) : WebSocketBuffer).Read.readUShort(packetID), 0);
            info["matchInfo"]["matchId"] = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).nullToDefault((_crd && WebSocketBuffer === void 0 ? (_reportPossibleCrUseOfWebSocketBuffer({
              error: Error()
            }), WebSocketBuffer) : WebSocketBuffer).Read.readInt(packetID), -1);
            info["matchInfo"]["svid"] = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).nullToDefault((_crd && WebSocketBuffer === void 0 ? (_reportPossibleCrUseOfWebSocketBuffer({
              error: Error()
            }), WebSocketBuffer) : WebSocketBuffer).Read.readInt(packetID), 0);
            info["matchInfo"]["matchType"] = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).nullToDefault((_crd && WebSocketBuffer === void 0 ? (_reportPossibleCrUseOfWebSocketBuffer({
              error: Error()
            }), WebSocketBuffer) : WebSocketBuffer).Read.readUShort(packetID), 0);
          } //正文内容


          info["objectInfo"] = {};
          let objectInfoStr = (_crd && WebSocketBuffer === void 0 ? (_reportPossibleCrUseOfWebSocketBuffer({
            error: Error()
          }), WebSocketBuffer) : WebSocketBuffer).Read.readString(packetID);

          if (objectInfoStr != "") {
            info["objectInfo"] = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).table_verify((_crd && Encrypt === void 0 ? (_reportPossibleCrUseOfEncrypt({
              error: Error()
            }), Encrypt) : Encrypt).JsonDecode(objectInfoStr));
          }

          info["onlookerInfo"] = {};
          info["onlookerType"] = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).nullToDefault((_crd && WebSocketBuffer === void 0 ? (_reportPossibleCrUseOfWebSocketBuffer({
            error: Error()
          }), WebSocketBuffer) : WebSocketBuffer).Read.readUShort(packetID), 0); //1:围观重连

          if (info["onlookerType"] == 1) {
            info["onlookerInfo"]["userId"] = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).nullToDefault((_crd && WebSocketBuffer === void 0 ? (_reportPossibleCrUseOfWebSocketBuffer({
              error: Error()
            }), WebSocketBuffer) : WebSocketBuffer).Read.readInt(packetID), 0);
            info["onlookerInfo"]["gameId"] = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).nullToDefault((_crd && WebSocketBuffer === void 0 ? (_reportPossibleCrUseOfWebSocketBuffer({
              error: Error()
            }), WebSocketBuffer) : WebSocketBuffer).Read.readInt(packetID), 0);
            info["onlookerInfo"]["roomLevel"] = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).nullToDefault((_crd && WebSocketBuffer === void 0 ? (_reportPossibleCrUseOfWebSocketBuffer({
              error: Error()
            }), WebSocketBuffer) : WebSocketBuffer).Read.readInt(packetID), 0);
          }

          console.log("大厅登录成功，这是结果");
          (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).dump(info);
          return GetPackPacket(headCmd, null, info, dataView);
        } //心跳


        ReadServersHeart(headCmd, packetID) {
          let dataView = checkRead(packetID);

          if (!dataView) {
            return null;
          }

          return GetPackPacket(headCmd, null, null, dataView);
        } //读:Php推送消息


        ReadPhpPushMsg(headCmd, packetID) {
          let dataView = checkRead(packetID);

          if (!dataView) {
            return null;
          }
          /** info */


          let info = {
            "result": null //具体信息

          };
          info.result = (_crd && WebSocketBuffer === void 0 ? (_reportPossibleCrUseOfWebSocketBuffer({
            error: Error()
          }), WebSocketBuffer) : WebSocketBuffer).Read.readString(packetID);
          info.result = (_crd && Encrypt === void 0 ? (_reportPossibleCrUseOfEncrypt({
            error: Error()
          }), Encrypt) : Encrypt).JsonDecode(info.result);
          return GetPackPacket(headCmd, null, info, dataView);
        } //读:server返回用户VIP详细信息


        ReadPhpGetUserVipInfo(headCmd, packetID) {
          let dataView = checkRead(packetID);

          if (!dataView) {
            return null;
          }
          /** info */


          let info = {
            "mid": null,
            //具体信息
            "propDetail": []
          };
          info.mid = (_crd && WebSocketBuffer === void 0 ? (_reportPossibleCrUseOfWebSocketBuffer({
            error: Error()
          }), WebSocketBuffer) : WebSocketBuffer).Read.readInt(packetID);
          let dataLen = (_crd && WebSocketBuffer === void 0 ? (_reportPossibleCrUseOfWebSocketBuffer({
            error: Error()
          }), WebSocketBuffer) : WebSocketBuffer).Read.readInt(packetID);

          if (dataLen != null) {
            for (let i = 0; i < dataLen; i++) {
              let encodeStr = (_crd && WebSocketBuffer === void 0 ? (_reportPossibleCrUseOfWebSocketBuffer({
                error: Error()
              }), WebSocketBuffer) : WebSocketBuffer).Read.readString(packetID);
              let realObj = (_crd && Encrypt === void 0 ? (_reportPossibleCrUseOfEncrypt({
                error: Error()
              }), Encrypt) : Encrypt).JsonDecode(encodeStr);
              info.propDetail.push(realObj);
            }
          }

          return GetPackPacket(headCmd, null, info, dataView);
        } //读:广播支付银币


        ReadPhpPushPayMoney(headCmd, packetID) {
          let dataView = checkRead(packetID);

          if (!dataView) {
            return null;
          }
          /** info */


          let info = {
            "type": 0,
            //广播类型
            "data": ""
          };
          info.type = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).nullToDefault((_crd && WebSocketBuffer === void 0 ? (_reportPossibleCrUseOfWebSocketBuffer({
            error: Error()
          }), WebSocketBuffer) : WebSocketBuffer).Read.readShort(packetID), info.type);
          info.data = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).nullToDefault((_crd && WebSocketBuffer === void 0 ? (_reportPossibleCrUseOfWebSocketBuffer({
            error: Error()
          }), WebSocketBuffer) : WebSocketBuffer).Read.readString(packetID), info.data);
          return GetPackPacket(headCmd, null, info, dataView);
        } //通用:广播 游戏开始 SERVER_BROADCAST_PLAYER_READY 0x401


        comm_receiveGameStart(headCmd, packetID) {// let dataView = checkRead(packetID)
          // if (!dataView) {
          // 	return null
          // }
          // let user = {
          // 	"userId": 0
          // }
          // user.userId = Utils.nullToDefault(WebSocketBuffer.Read.readInt(packetID), user.userId)
          // return GetPackPacket(headCmd, null, user, dataView)
        } //通用:广播 游戏结束 SERVER_BROADCAST_PLAYER_READY 0x401


        comm_receiveGameOver(headCmd, packetID) {// let dataView = checkRead(packetID)
          // if (!dataView) {
          // 	return null
          // }
          // let user = {
          // 	"userId": 0
          // }
          // user.userId = Utils.nullToDefault(WebSocketBuffer.Read.readInt(packetID), user.userId)
          // return GetPackPacket(headCmd, null, user, dataView)
        } //-----------------------common---------------------
        //通用：下发房间信息 ROOM_SERVER_RESPONSE_TABLE_INFO 0x214: 


        comm_receiveRoomInfo(headCmd, packetID) {
          let dataView = checkRead(packetID);

          if (!dataView) {
            return null;
          }

          let strData = (_crd && WebSocketBuffer === void 0 ? (_reportPossibleCrUseOfWebSocketBuffer({
            error: Error()
          }), WebSocketBuffer) : WebSocketBuffer).Read.readString(packetID);
          let data = (_crd && Encrypt === void 0 ? (_reportPossibleCrUseOfEncrypt({
            error: Error()
          }), Encrypt) : Encrypt).JsonDecode(strData);

          if (data) {
            data["gameId"] = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).number_valueOf(data["gameId"]);
            data["levelId"] = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).number_valueOf(data["level"]);
            data["tid"] = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).number_valueOf(data["tid"]);
          }

          return GetPackPacket(headCmd, null, data, dataView);
        } //通用：server通知准备相关信息 SERVER_COMMAND_READY_INFO 0x80B2: 


        comm_receiveReadyInfo(headCmd, packetID) {
          let dataView = checkRead(packetID);

          if (!dataView) {
            return null;
          }

          let data = {
            "readyTime": 0
          };
          data.readyTime = (_crd && WebSocketBuffer === void 0 ? (_reportPossibleCrUseOfWebSocketBuffer({
            error: Error()
          }), WebSocketBuffer) : WebSocketBuffer).Read.readInt(packetID); //准备倒计时

          return GetPackPacket(headCmd, null, data, dataView);
        } //通用:广播 玩家准备 SERVER_BROADCAST_PLAYER_READY 0x401


        comm_receivePlayerReady(headCmd, packetID) {
          let dataView = checkRead(packetID);

          if (!dataView) {
            return null;
          }

          let user = {
            "userId": 0
          };
          user.userId = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).nullToDefault((_crd && WebSocketBuffer === void 0 ? (_reportPossibleCrUseOfWebSocketBuffer({
            error: Error()
          }), WebSocketBuffer) : WebSocketBuffer).Read.readInt(packetID), user.userId);
          return GetPackPacket(headCmd, null, user, dataView);
        } //通用：用户进入 SERVER_BROADCAST_PLAYER_LOGIN 0x100D


        comm_receivePlayerInto(headCmd, packetID) {
          let dataView = checkRead(packetID);

          if (!dataView) {
            return null;
          }

          let user = {
            "mid": 0,
            "seatid": -1,
            "isReady": 0,
            "userInfo": "",
            "money": 0,
            "hp": 0
          };
          user.mid = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).nullToDefault((_crd && WebSocketBuffer === void 0 ? (_reportPossibleCrUseOfWebSocketBuffer({
            error: Error()
          }), WebSocketBuffer) : WebSocketBuffer).Read.readInt(packetID), user.mid);
          user.seatid = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).nullToDefault((_crd && WebSocketBuffer === void 0 ? (_reportPossibleCrUseOfWebSocketBuffer({
            error: Error()
          }), WebSocketBuffer) : WebSocketBuffer).Read.readInt(packetID), user.seatid);
          user.isReady = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).nullToDefault((_crd && WebSocketBuffer === void 0 ? (_reportPossibleCrUseOfWebSocketBuffer({
            error: Error()
          }), WebSocketBuffer) : WebSocketBuffer).Read.readInt(packetID), user.isReady);
          user.userInfo = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).nullToDefault((_crd && WebSocketBuffer === void 0 ? (_reportPossibleCrUseOfWebSocketBuffer({
            error: Error()
          }), WebSocketBuffer) : WebSocketBuffer).Read.readString(packetID), user.userInfo);
          user.money = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).nullToDefault((_crd && WebSocketBuffer === void 0 ? (_reportPossibleCrUseOfWebSocketBuffer({
            error: Error()
          }), WebSocketBuffer) : WebSocketBuffer).Read.readInt64(packetID), user.money);
          user.hp = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).nullToDefault((_crd && WebSocketBuffer === void 0 ? (_reportPossibleCrUseOfWebSocketBuffer({
            error: Error()
          }), WebSocketBuffer) : WebSocketBuffer).Read.readInt(packetID), user.hp);
          return GetPackPacket(headCmd, null, user, dataView);
        } //通用：用户退出 SERVER_BROADCAST_PLAYER_LOGOUT 0x100E


        comm_receivePlayerLogout(headCmd, packetID) {
          let dataView = checkRead(packetID);

          if (!dataView) {
            return null;
          }

          let user = {
            "mid": 0 //用户mid

          };
          user.mid = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).nullToDefault((_crd && WebSocketBuffer === void 0 ? (_reportPossibleCrUseOfWebSocketBuffer({
            error: Error()
          }), WebSocketBuffer) : WebSocketBuffer).Read.readInt(packetID), user.mid);
          return GetPackPacket(headCmd, null, user, dataView);
        } //通用：我退出房间成功 ROOM_LOGOUT_SUCCESS 0x1008


        comm_receiveExitRoomSuccess(headCmd, packetID) {
          let dataView = checkRead(packetID);

          if (!dataView) {
            return null;
          }

          let packetInfo = {
            "totalMoney": -1,
            "money": 0
          }; //用户现金 不一定每个游戏都会传

          packetInfo.totalMoney = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).nullToDefault((_crd && WebSocketBuffer === void 0 ? (_reportPossibleCrUseOfWebSocketBuffer({
            error: Error()
          }), WebSocketBuffer) : WebSocketBuffer).Read.readInt64(packetID), packetInfo.totalMoney); //德州时定义的参数(坑)

          packetInfo.money = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).nullToDefault((_crd && WebSocketBuffer === void 0 ? (_reportPossibleCrUseOfWebSocketBuffer({
            error: Error()
          }), WebSocketBuffer) : WebSocketBuffer).Read.readInt64(packetID), packetInfo.money);
          return GetPackPacket(headCmd, null, packetInfo, dataView);
        } //通用:游戏强制结束（游戏中有玩家退出） SERVER_BROADCAST_STOP_GAME_IN_PLAY 0x4016


        comm_receiveStopGameInPlay(headCmd, packetID) {
          let dataView = checkRead(packetID);

          if (!dataView) {
            return null;
          }

          let packetInfo = {
            "logoutMid": 0,
            //离开的玩家id
            "playerList": [] //玩家信息列表

          };
          packetInfo.logoutMid = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).nullToDefault((_crd && WebSocketBuffer === void 0 ? (_reportPossibleCrUseOfWebSocketBuffer({
            error: Error()
          }), WebSocketBuffer) : WebSocketBuffer).Read.readInt(packetID), packetInfo.logoutMid);
          let personNum = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).nullToDefault((_crd && WebSocketBuffer === void 0 ? (_reportPossibleCrUseOfWebSocketBuffer({
            error: Error()
          }), WebSocketBuffer) : WebSocketBuffer).Read.readByte(packetID), 0);

          for (let i = 0; i < personNum; i++) {
            let userInfo = {
              "mid": 0,
              //玩家Uid
              "totalmoney": 0,
              //总现金
              "turnMoney": 0,
              //输赢的钱
              "winMoneyTotalInTable": 0 //

            };
            userInfo.mid = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).nullToDefault((_crd && WebSocketBuffer === void 0 ? (_reportPossibleCrUseOfWebSocketBuffer({
              error: Error()
            }), WebSocketBuffer) : WebSocketBuffer).Read.readInt(packetID), userInfo.mid);
            userInfo.totalmoney = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).nullToDefault((_crd && WebSocketBuffer === void 0 ? (_reportPossibleCrUseOfWebSocketBuffer({
              error: Error()
            }), WebSocketBuffer) : WebSocketBuffer).Read.readInt64(packetID), userInfo.totalmoney);
            userInfo.turnMoney = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).nullToDefault((_crd && WebSocketBuffer === void 0 ? (_reportPossibleCrUseOfWebSocketBuffer({
              error: Error()
            }), WebSocketBuffer) : WebSocketBuffer).Read.readInt64(packetID), userInfo.turnMoney);
            userInfo.winMoneyTotalInTable = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).nullToDefault((_crd && WebSocketBuffer === void 0 ? (_reportPossibleCrUseOfWebSocketBuffer({
              error: Error()
            }), WebSocketBuffer) : WebSocketBuffer).Read.readInt64(packetID), userInfo.winMoneyTotalInTable);
            packetInfo.playerList.push(userInfo);
          }

          return GetPackPacket(headCmd, null, packetInfo, dataView);
        } //通用：玩家托管 SERVER_BROADCAST_PLAYER_AI 0x4007


        comm_receivePlayerAI(headCmd, packetID) {
          let dataView = checkRead(packetID);

          if (!dataView) {
            return null;
          }

          let packetInfo = {
            "mid": 0,
            "ai": 0 //0表示取消托管，非0表示托管

          };
          packetInfo.mid = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).nullToDefault((_crd && WebSocketBuffer === void 0 ? (_reportPossibleCrUseOfWebSocketBuffer({
            error: Error()
          }), WebSocketBuffer) : WebSocketBuffer).Read.readInt(packetID), packetInfo.mid);
          packetInfo.ai = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).nullToDefault((_crd && WebSocketBuffer === void 0 ? (_reportPossibleCrUseOfWebSocketBuffer({
            error: Error()
          }), WebSocketBuffer) : WebSocketBuffer).Read.readInt(packetID), packetInfo.ai);
          return GetPackPacket(headCmd, null, packetInfo, dataView);
        } //通用：换桌失败 SERVER_COMMAND_CHANGE_TABLE_ERR 0x1029


        comm_receiveChangeDeskError(headCmd, packetID) {
          let dataView = checkRead(packetID);

          if (!dataView) {
            return null;
          }

          let packetInfo = {
            "errorCode": 0
          };
          packetInfo.errorCode = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).nullToDefault((_crd && WebSocketBuffer === void 0 ? (_reportPossibleCrUseOfWebSocketBuffer({
            error: Error()
          }), WebSocketBuffer) : WebSocketBuffer).Read.readInt(packetID), packetInfo.errorCode);
          return GetPackPacket(headCmd, null, packetInfo, dataView);
        } //通用：房间等级变化 ROOM_UP_LEVEL 0x2203 


        onCommRoomLevelUp(headCmd, packetID) {
          let dataView = checkRead(packetID);

          if (!dataView) {
            return null;
          }

          let packetInfo = {
            "level": 0,
            //目标场次level
            "flag": 0,
            //降级=-1   升级=1
            "exp": 0,
            //经验值，目前不送经验
            "msg": 0,
            //信息
            "baseChip": 0,
            //目标场次的底注
            "dis": 0 //flag==-1时表示持有银币与原场次银币的差额   flag==1时暂时为0

          };
          packetInfo.level = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).nullToDefault((_crd && WebSocketBuffer === void 0 ? (_reportPossibleCrUseOfWebSocketBuffer({
            error: Error()
          }), WebSocketBuffer) : WebSocketBuffer).Read.readShort(packetID), packetInfo.level);
          packetInfo.flag = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).nullToDefault((_crd && WebSocketBuffer === void 0 ? (_reportPossibleCrUseOfWebSocketBuffer({
            error: Error()
          }), WebSocketBuffer) : WebSocketBuffer).Read.readInt(packetID), packetInfo.flag);
          packetInfo.exp = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).nullToDefault((_crd && WebSocketBuffer === void 0 ? (_reportPossibleCrUseOfWebSocketBuffer({
            error: Error()
          }), WebSocketBuffer) : WebSocketBuffer).Read.readInt(packetID), packetInfo.exp);
          packetInfo.msg = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).nullToDefault((_crd && WebSocketBuffer === void 0 ? (_reportPossibleCrUseOfWebSocketBuffer({
            error: Error()
          }), WebSocketBuffer) : WebSocketBuffer).Read.readString(packetID), packetInfo.msg);
          packetInfo.baseChip = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).nullToDefault((_crd && WebSocketBuffer === void 0 ? (_reportPossibleCrUseOfWebSocketBuffer({
            error: Error()
          }), WebSocketBuffer) : WebSocketBuffer).Read.readInt64(packetID), packetInfo.baseChip);
          packetInfo.dis = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).nullToDefault((_crd && WebSocketBuffer === void 0 ? (_reportPossibleCrUseOfWebSocketBuffer({
            error: Error()
          }), WebSocketBuffer) : WebSocketBuffer).Read.readInt64(packetID), packetInfo.dis);
          return GetPackPacket(headCmd, null, packetInfo, dataView);
        } //通用:Server回应退出请求(游戏中退出) SERVER_COMMAND_LOGOUT_INGAME_RSP 0x1062


        comm_LogOutResp(headCmd, packetID) {
          let dataView = checkRead(packetID);

          if (!dataView) {
            return null;
          }

          let packetInfo = {
            "compensation": "" //退出游戏，需要扣除的银币数

          };
          packetInfo.compensation = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).nullToDefault((_crd && WebSocketBuffer === void 0 ? (_reportPossibleCrUseOfWebSocketBuffer({
            error: Error()
          }), WebSocketBuffer) : WebSocketBuffer).Read.readInt64(packetID), packetInfo.compensation);
          return GetPackPacket(headCmd, null, packetInfo, dataView);
        } //通用:用户表情 ROOM_USER_FACE_RESP 0x1004


        comm_UserFace(headCmd, packetID) {
          let dataView = checkRead(packetID);

          if (!dataView) {
            return null;
          }

          let packetInfo = {
            "mid": 0,
            //用户ID
            "faceValue": -1,
            "vipType": -1
          };
          packetInfo.mid = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).nullToDefault((_crd && WebSocketBuffer === void 0 ? (_reportPossibleCrUseOfWebSocketBuffer({
            error: Error()
          }), WebSocketBuffer) : WebSocketBuffer).Read.readInt(packetID), packetInfo.mid);
          packetInfo.faceValue = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).nullToDefault((_crd && WebSocketBuffer === void 0 ? (_reportPossibleCrUseOfWebSocketBuffer({
            error: Error()
          }), WebSocketBuffer) : WebSocketBuffer).Read.readInt(packetID), packetInfo.faceValue);
          packetInfo.vipType = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).nullToDefault((_crd && WebSocketBuffer === void 0 ? (_reportPossibleCrUseOfWebSocketBuffer({
            error: Error()
          }), WebSocketBuffer) : WebSocketBuffer).Read.readInt(packetID), packetInfo.vipType);
          return GetPackPacket(headCmd, null, packetInfo, dataView);
        } //通用：用户聊天 ROOM_USER_CHAT_RESP 0x1003:用户聊天


        comm_UserChat(headCmd, packetID) {
          let dataView = checkRead(packetID);

          if (!dataView) {
            return null;
          }

          let packetInfo = {
            "mid": 0,
            //用户ID
            "msg": -1,
            "index": -1
          };
          packetInfo.mid = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).nullToDefault((_crd && WebSocketBuffer === void 0 ? (_reportPossibleCrUseOfWebSocketBuffer({
            error: Error()
          }), WebSocketBuffer) : WebSocketBuffer).Read.readInt(packetID), packetInfo.mid);
          packetInfo.msg = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).nullToDefault((_crd && WebSocketBuffer === void 0 ? (_reportPossibleCrUseOfWebSocketBuffer({
            error: Error()
          }), WebSocketBuffer) : WebSocketBuffer).Read.readString(packetID), packetInfo.msg);
          packetInfo.index = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).nullToDefault((_crd && WebSocketBuffer === void 0 ? (_reportPossibleCrUseOfWebSocketBuffer({
            error: Error()
          }), WebSocketBuffer) : WebSocketBuffer).Read.readShort(packetID), packetInfo.index);
          return GetPackPacket(headCmd, null, packetInfo, dataView);
        } //通用：返回破产配置数据


        comm_respBankUpData(headCmd, packetID) {
          let dataView = checkRead(packetID);

          if (!dataView) {
            return null;
          }
          /** info */


          let info = {
            "curBankruptTime": 0,
            //当前破产次数
            "lowestMoney": 0,
            //破产下限
            "intervals": [] //每次领取破产时间间隔

          };
          info.curBankruptTime = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).nullToDefault((_crd && WebSocketBuffer === void 0 ? (_reportPossibleCrUseOfWebSocketBuffer({
            error: Error()
          }), WebSocketBuffer) : WebSocketBuffer).Read.readInt(packetID), info.curBankruptTime);
          info.lowestMoney = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).nullToDefault((_crd && WebSocketBuffer === void 0 ? (_reportPossibleCrUseOfWebSocketBuffer({
            error: Error()
          }), WebSocketBuffer) : WebSocketBuffer).Read.readInt64(packetID), info.lowestMoney);
          let count = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).nullToDefault((_crd && WebSocketBuffer === void 0 ? (_reportPossibleCrUseOfWebSocketBuffer({
            error: Error()
          }), WebSocketBuffer) : WebSocketBuffer).Read.readInt(packetID), 0);

          for (let i = 0; i < count; i++) {
            info.intervals.push((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).nullToDefault((_crd && WebSocketBuffer === void 0 ? (_reportPossibleCrUseOfWebSocketBuffer({
              error: Error()
            }), WebSocketBuffer) : WebSocketBuffer).Read.readInt(packetID), 0));
          }

          return GetPackPacket(headCmd, null, info, dataView);
        } //通用：返回破产次数


        comm_respBankUpCount(headCmd, packetID) {
          let dataView = checkRead(packetID);

          if (!dataView) {
            return null;
          }
          /** info */


          let info = {
            "curCount": 0,
            //第几次破产
            "leftTime": 0,
            //当前剩余时间
            "vipExpires": 0,
            //vip过期时间
            "vipActualTime": 0,
            //vip等待的真实时间
            "get_money": 0,
            //可领取的补助
            "shard_cd_flag": 0 //vip等待的真实时间

          };
          info.curCount = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).nullToDefault((_crd && WebSocketBuffer === void 0 ? (_reportPossibleCrUseOfWebSocketBuffer({
            error: Error()
          }), WebSocketBuffer) : WebSocketBuffer).Read.readInt(packetID), info.curCount);
          info.leftTime = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).nullToDefault((_crd && WebSocketBuffer === void 0 ? (_reportPossibleCrUseOfWebSocketBuffer({
            error: Error()
          }), WebSocketBuffer) : WebSocketBuffer).Read.readInt(packetID), info.leftTime);
          info.vipExpires = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).nullToDefault((_crd && WebSocketBuffer === void 0 ? (_reportPossibleCrUseOfWebSocketBuffer({
            error: Error()
          }), WebSocketBuffer) : WebSocketBuffer).Read.readInt(packetID), info.vipExpires);
          info.vipActualTime = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).nullToDefault((_crd && WebSocketBuffer === void 0 ? (_reportPossibleCrUseOfWebSocketBuffer({
            error: Error()
          }), WebSocketBuffer) : WebSocketBuffer).Read.readInt(packetID), info.vipActualTime);
          info.get_money = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).nullToDefault((_crd && WebSocketBuffer === void 0 ? (_reportPossibleCrUseOfWebSocketBuffer({
            error: Error()
          }), WebSocketBuffer) : WebSocketBuffer).Read.readInt(packetID), info.get_money);
          info.shard_cd_flag = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).nullToDefault((_crd && WebSocketBuffer === void 0 ? (_reportPossibleCrUseOfWebSocketBuffer({
            error: Error()
          }), WebSocketBuffer) : WebSocketBuffer).Read.readInt(packetID), info.shard_cd_flag);
          return GetPackPacket(headCmd, null, info, dataView);
        } //通用：返回破产


        comm_respBankUp(headCmd, packetID) {
          let dataView = checkRead(packetID);

          if (!dataView) {
            return null;
          }
          /** info */


          let info = {
            "flag": 0,
            //请求破产是否成功(1.成功 0失败)
            "brokeMoney": 0,
            //破产领取的钱数
            "money": 0,
            //用户当前的钱数
            "errType": 0 //失败原因：1、server记没有破产2、已经领取完了所有破产奖励3、还没有到领取破产奖励的时间4、其他原因 

          };
          info.flag = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).nullToDefault((_crd && WebSocketBuffer === void 0 ? (_reportPossibleCrUseOfWebSocketBuffer({
            error: Error()
          }), WebSocketBuffer) : WebSocketBuffer).Read.readInt(packetID), info.flag);
          info.brokeMoney = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).nullToDefault((_crd && WebSocketBuffer === void 0 ? (_reportPossibleCrUseOfWebSocketBuffer({
            error: Error()
          }), WebSocketBuffer) : WebSocketBuffer).Read.readInt64(packetID), info.brokeMoney);
          info.money = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).nullToDefault((_crd && WebSocketBuffer === void 0 ? (_reportPossibleCrUseOfWebSocketBuffer({
            error: Error()
          }), WebSocketBuffer) : WebSocketBuffer).Read.readInt64(packetID), info.money);
          info.errType = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).nullToDefault((_crd && WebSocketBuffer === void 0 ? (_reportPossibleCrUseOfWebSocketBuffer({
            error: Error()
          }), WebSocketBuffer) : WebSocketBuffer).Read.readInt(packetID), info.errType);
          return GetPackPacket(headCmd, null, info, dataView);
        } //默认未未定义解析方式的就用这个解析


        __defaultWriteOrRead(headCmd, packetID) {
          let dataView = checkRead(packetID);

          if (!dataView) {
            return null;
          }

          (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
            error: Error()
          }), Logger) : Logger).logModel(`【GPBRead】 HeadCmd[10进制] = ${headCmd} HeadCmd[16进制] = ${(_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).number_formatToHex(headCmd)} 使用默认方式解析`);
          return GetPackPacket(headCmd, null, null, dataView);
        }

      };
      /**写 */

      GPBWrite = class GPBWrite extends SuperWriteAndRead {
        //实例化
        constructor() {
          super("GPBWrite", WriteAndReadType.Write);
        }

        //写php老协议
        WritePhpRequest(headCmd, packetID, reqProtocol) {
          if (!checkWrite(packetID, reqProtocol)) {
            return null;
          }

          return;
        } //写php新协议


        WritePhpRequestNew(headCmd, packetID, reqProtocol) {
          if (!checkWrite(packetID, reqProtocol)) {
            return null;
          } //先对数据进行处理


          let jsonData = (_crd && Encrypt === void 0 ? (_reportPossibleCrUseOfEncrypt({
            error: Error()
          }), Encrypt) : Encrypt).JsonEncode(reqProtocol.data);

          if (jsonData) {
            jsonData = (_crd && Encrypt === void 0 ? (_reportPossibleCrUseOfEncrypt({
              error: Error()
            }), Encrypt) : Encrypt).ZlibZip(jsonData); // console.log("ZlibZip的Md5 = >"+ Md5(jsonData))

            jsonData = (_crd && Encrypt === void 0 ? (_reportPossibleCrUseOfEncrypt({
              error: Error()
            }), Encrypt) : Encrypt).base64_encode(jsonData);
          }

          if (!jsonData) {
            jsonData = "";
            reqProtocol.isCompress = false;
          } //再写入字节


          if (jsonData != null && jsonData != undefined) {
            (_crd && WebSocketBuffer === void 0 ? (_reportPossibleCrUseOfWebSocketBuffer({
              error: Error()
            }), WebSocketBuffer) : WebSocketBuffer).Write.writeInt(packetID, reqProtocol.data.mid);
            (_crd && WebSocketBuffer === void 0 ? (_reportPossibleCrUseOfWebSocketBuffer({
              error: Error()
            }), WebSocketBuffer) : WebSocketBuffer).Write.writeInt(packetID, reqProtocol.data.cmd);
            (_crd && WebSocketBuffer === void 0 ? (_reportPossibleCrUseOfWebSocketBuffer({
              error: Error()
            }), WebSocketBuffer) : WebSocketBuffer).Write.writeInt(packetID, reqProtocol.isCompress == true ? 1 : 0); //1 压缩 0未php压缩
            //写入正文

            (_crd && WebSocketBuffer === void 0 ? (_reportPossibleCrUseOfWebSocketBuffer({
              error: Error()
            }), WebSocketBuffer) : WebSocketBuffer).Write.writeString(packetID, jsonData);
          } else {
            (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
              error: Error()
            }), Logger) : Logger).logModel("【GPBWrite】:WritePhpRequestNew  不存在正文数据");
          }

          reqProtocol.data = jsonData;
          return reqProtocol;
        } //心跳


        WriteServersHeart(headCmd, packetID, reqProtocol) {
          if (!checkWrite(packetID, reqProtocol)) {
            return null;
          }

          reqProtocol.isCompress = false; //写入正文

          (_crd && WebSocketBuffer === void 0 ? (_reportPossibleCrUseOfWebSocketBuffer({
            error: Error()
          }), WebSocketBuffer) : WebSocketBuffer).Write.writeString(packetID, null);
          reqProtocol.data = "";
          return reqProtocol;
        }
        /******************************大厅和游戏通用******************** */
        //一键登录游戏


        comm_OneKeyLoginGame(headCmd, packetID, reqProtocol) {
          if (!checkWrite(packetID, reqProtocol)) {
            return null;
          }

          let info = reqProtocol.data;
          (_crd && WebSocketBuffer === void 0 ? (_reportPossibleCrUseOfWebSocketBuffer({
            error: Error()
          }), WebSocketBuffer) : WebSocketBuffer).Write.writeInt(packetID, (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).number_valueOf(info["gameId"], 0));
          (_crd && WebSocketBuffer === void 0 ? (_reportPossibleCrUseOfWebSocketBuffer({
            error: Error()
          }), WebSocketBuffer) : WebSocketBuffer).Write.writeInt(packetID, (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).number_valueOf(info["levelId"], 0));
          (_crd && WebSocketBuffer === void 0 ? (_reportPossibleCrUseOfWebSocketBuffer({
            error: Error()
          }), WebSocketBuffer) : WebSocketBuffer).Write.writeString(packetID, (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).nullToDefault(info["key"], ""));
          let jsonUserInfo = (_crd && Encrypt === void 0 ? (_reportPossibleCrUseOfEncrypt({
            error: Error()
          }), Encrypt) : Encrypt).JsonEncode(info["userInfo"]) || "";
          (_crd && WebSocketBuffer === void 0 ? (_reportPossibleCrUseOfWebSocketBuffer({
            error: Error()
          }), WebSocketBuffer) : WebSocketBuffer).Write.writeString(packetID, jsonUserInfo);
          (_crd && WebSocketBuffer === void 0 ? (_reportPossibleCrUseOfWebSocketBuffer({
            error: Error()
          }), WebSocketBuffer) : WebSocketBuffer).Write.writeInt(packetID, (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).number_valueOf(info["flag"], 0));
          (_crd && WebSocketBuffer === void 0 ? (_reportPossibleCrUseOfWebSocketBuffer({
            error: Error()
          }), WebSocketBuffer) : WebSocketBuffer).Write.writeShort(packetID, (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).number_valueOf(info["changeTableType"], 0)); //0为正常进 1为换桌

          let jsonExtParam = (_crd && Encrypt === void 0 ? (_reportPossibleCrUseOfEncrypt({
            error: Error()
          }), Encrypt) : Encrypt).JsonEncode(info["extParam"]) || "";
          (_crd && WebSocketBuffer === void 0 ? (_reportPossibleCrUseOfWebSocketBuffer({
            error: Error()
          }), WebSocketBuffer) : WebSocketBuffer).Write.writeString(packetID, jsonExtParam);
          (_crd && WebSocketBuffer === void 0 ? (_reportPossibleCrUseOfWebSocketBuffer({
            error: Error()
          }), WebSocketBuffer) : WebSocketBuffer).Write.writeInt(packetID, (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).number_valueOf(info["gameVersion"], 0));
          (_crd && WebSocketBuffer === void 0 ? (_reportPossibleCrUseOfWebSocketBuffer({
            error: Error()
          }), WebSocketBuffer) : WebSocketBuffer).Write.writeInt(packetID, (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).number_valueOf(info["playType"], 0));
          (_crd && WebSocketBuffer === void 0 ? (_reportPossibleCrUseOfWebSocketBuffer({
            error: Error()
          }), WebSocketBuffer) : WebSocketBuffer).Write.writeInt(packetID, (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).number_valueOf(info["propertyId"], 0)); //对数据进行处理

          let jsonData = (_crd && Encrypt === void 0 ? (_reportPossibleCrUseOfEncrypt({
            error: Error()
          }), Encrypt) : Encrypt).JsonEncode(info);
          reqProtocol.data = jsonData;
          return reqProtocol;
        } //ROOM_SEND_LOGIN: 0x1001 登录具体游戏房间


        comm_LoginGameInto(headCmd, packetID, reqProtocol) {
          if (!checkWrite(packetID, reqProtocol)) {
            return null;
          }

          let info = reqProtocol.data;
          (_crd && WebSocketBuffer === void 0 ? (_reportPossibleCrUseOfWebSocketBuffer({
            error: Error()
          }), WebSocketBuffer) : WebSocketBuffer).Write.writeInt(packetID, (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).number_valueOf(info["roomId"]));
          (_crd && WebSocketBuffer === void 0 ? (_reportPossibleCrUseOfWebSocketBuffer({
            error: Error()
          }), WebSocketBuffer) : WebSocketBuffer).Write.writeInt(packetID, (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).number_valueOf(info["mid"]));
          (_crd && WebSocketBuffer === void 0 ? (_reportPossibleCrUseOfWebSocketBuffer({
            error: Error()
          }), WebSocketBuffer) : WebSocketBuffer).Write.writeString(packetID, info["key"]);
          let jsonUserInfo = (_crd && Encrypt === void 0 ? (_reportPossibleCrUseOfEncrypt({
            error: Error()
          }), Encrypt) : Encrypt).JsonEncode(info["userInfo"]) || "";
          (_crd && WebSocketBuffer === void 0 ? (_reportPossibleCrUseOfWebSocketBuffer({
            error: Error()
          }), WebSocketBuffer) : WebSocketBuffer).Write.writeString(packetID, jsonUserInfo);
          (_crd && WebSocketBuffer === void 0 ? (_reportPossibleCrUseOfWebSocketBuffer({
            error: Error()
          }), WebSocketBuffer) : WebSocketBuffer).Write.writeInt(packetID, 1);
          reqProtocol.isCompress = false;
          reqProtocol.data = "";
          return reqProtocol;
        } //USER_READY_REQUEST 0x2001:请求准备


        comm_reqReady(headCmd, packetID, reqProtocol) {
          //请求准备无内容  空实现
          reqProtocol.isCompress = false;
          reqProtocol.data = "";
          return reqProtocol;
        } //CLIENT_COMMAND_LOGOUT_IN_GAME 0x1039:玩家请求退出


        comm_reqLogOutTry(headCmd, packetID, reqProtocol) {
          //玩家请求退出无内容  空实现
          reqProtocol.isCompress = false;
          reqProtocol.data = "";
          return reqProtocol;
        } //ROOM_SEND_LOGOUT 0x1002:玩家确定要退出


        comm_reqLogOut(headCmd, packetID, reqProtocol) {
          reqProtocol.isCompress = false;
          reqProtocol.data = "";
          return reqProtocol;
        } //CLIENT_COMMAND_REQUEST_AI 0x2005:玩家请求托管或取消托管


        comm_reqUserAI(headCmd, packetID, reqProtocol) {
          if (!checkWrite(packetID, reqProtocol)) {
            return null;
          }

          reqProtocol.isCompress = false;
          (_crd && WebSocketBuffer === void 0 ? (_reportPossibleCrUseOfWebSocketBuffer({
            error: Error()
          }), WebSocketBuffer) : WebSocketBuffer).Write.writeInt(packetID, reqProtocol.data["ai"] || 0);
          reqProtocol.data = "";
          return reqProtocol;
        } //CLIENT_COMMAND_CHANGE_TABLE 0x1028:玩家请求换桌


        comm_reqChangeTable(headCmd, packetID, reqProtocol) {
          //玩家请求换桌无内容  空实现
          reqProtocol.isCompress = false;
          reqProtocol.data = "";
          return reqProtocol;
        } //破产数据请求


        comm_reqBankUpData(headCmd, packetID, reqProtocol) {
          //玩家请求破产配置无内容  空实现
          reqProtocol.isCompress = false;
          reqProtocol.data = "";
          return reqProtocol;
        } //破产次数


        comm_reqBankUpCount(headCmd, packetID, reqProtocol) {
          if (!checkWrite(packetID, reqProtocol)) {
            return null;
          }

          let info = reqProtocol.data;
          (_crd && WebSocketBuffer === void 0 ? (_reportPossibleCrUseOfWebSocketBuffer({
            error: Error()
          }), WebSocketBuffer) : WebSocketBuffer).Write.writeInt(packetID, (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).number_valueOf(info["mid"], 0));
          (_crd && WebSocketBuffer === void 0 ? (_reportPossibleCrUseOfWebSocketBuffer({
            error: Error()
          }), WebSocketBuffer) : WebSocketBuffer).Write.writeInt(packetID, (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).number_valueOf(info["hasShard"], 0));
          reqProtocol.isCompress = false;
          reqProtocol.data = "";
          return reqProtocol;
        } //请求破产


        comm_reqBankUp(headCmd, packetID, reqProtocol) {
          if (!checkWrite(packetID, reqProtocol)) {
            return null;
          }

          let info = reqProtocol.data;
          (_crd && WebSocketBuffer === void 0 ? (_reportPossibleCrUseOfWebSocketBuffer({
            error: Error()
          }), WebSocketBuffer) : WebSocketBuffer).Write.writeInt(packetID, (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).number_valueOf(info["mid"], 0));
          reqProtocol.isCompress = false;
          reqProtocol.data = "";
          return reqProtocol;
        }

      }; //导出通用读写

      _export("GPBWriteAndRead", GPBWriteAndRead = {
        Write: new GPBWrite(),
        Read: new GPBRead()
      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f1a1781374abc4730c9687c754fafb5726307576.js.map