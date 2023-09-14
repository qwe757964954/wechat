System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, GCache, ClientInfo, Utils, GCmdMapping, GlobalCMDHead, GPBAdaptive, _crd, PHPSeqID;

  function GetPHPSeq() {
    _export("PHPSeqID", PHPSeqID = PHPSeqID + 1);

    return PHPSeqID;
  }

  function _reportPossibleCrUseOfGCache(extras) {
    _reporterNs.report("GCache", "../../cache/GCache", _context.meta, extras);
  }

  function _reportPossibleCrUseOfClientInfo(extras) {
    _reporterNs.report("ClientInfo", "../../config/GameConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIRequestProtocol(extras) {
    _reporterNs.report("IRequestProtocol", "../../framework/network/NetInterface", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUtils(extras) {
    _reporterNs.report("Utils", "../../framework/Utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGCmdMapping(extras) {
    _reporterNs.report("GCmdMapping", "./GCmdMapping", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGlobalCMDHead(extras) {
    _reporterNs.report("GlobalCMDHead", "./GlobalCMD", _context.meta, extras);
  }

  _export({
    GetPHPSeq: GetPHPSeq,
    GPBAdaptive: void 0
  });

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      GCache = _unresolved_2.GCache;
    }, function (_unresolved_3) {
      ClientInfo = _unresolved_3.ClientInfo;
    }, function (_unresolved_4) {
      Utils = _unresolved_4.Utils;
    }, function (_unresolved_5) {
      GCmdMapping = _unresolved_5.GCmdMapping;
    }, function (_unresolved_6) {
      GlobalCMDHead = _unresolved_6.GlobalCMDHead;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "213032Uj0ZBn5e1dHuIQ50z", "GPBAdaptive", undefined);

      //请求唯一ID php请求时会带给服务器 返回时会带给客户端
      _export("PHPSeqID", PHPSeqID = -1);

      _export("GPBAdaptive", GPBAdaptive = class GPBAdaptive {
        //实例化
        constructor() {}

        /**
         * 包装发送的结构体
         * @param headCmd 头部命令
         * @param action 命令关键字
         * @param callback 回调
         * @param data 数据
         * @param isCompress 是否压缩
         * @param outtime 超时时间
         * @returns 
         */
        getSendPacket(headCmd, action, callback, data, isCompress, outtime) {
          var array = {
            headCmd: headCmd,
            action: action,
            callback: callback,
            isCompress: isCompress,
            data: data,
            buffer: null,
            outtime: outtime
          };
          return array;
        }
        /**包装正文数据 */


        generatPacket(cmd, body) {
          if (cmd < (_crd && GlobalCMDHead === void 0 ? (_reportPossibleCrUseOfGlobalCMDHead({
            error: Error()
          }), GlobalCMDHead) : GlobalCMDHead).PHP_CMD_CONSTANT) {
            return [cmd, body];
          } //数据进行组装


          var phpSendCmd = (_crd && GCmdMapping === void 0 ? (_reportPossibleCrUseOfGCmdMapping({
            error: Error()
          }), GCmdMapping) : GCmdMapping).getReqHeadByCmd(cmd);
          var packetInfo = this.getJsonTable(cmd);
          packetInfo["cmd"] = cmd - (_crd && GlobalCMDHead === void 0 ? (_reportPossibleCrUseOfGlobalCMDHead({
            error: Error()
          }), GlobalCMDHead) : GlobalCMDHead).PHP_CMD_CONSTANT; //subCmd

          packetInfo["seq"] = GetPHPSeq(); //请求序列号，此序列号会带给Php，当php回复时会带给客户端

          body = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).table_verify(body);

          for (var key in body) {
            if (Object.prototype.hasOwnProperty.call(body, key)) {
              packetInfo[key] = body[key];
            }
          }

          return [phpSendCmd, packetInfo];
        }
        /**根据头部命令是否需要压缩 */


        isCompressByHeadCmd(headCmd) {
          if (headCmd === void 0) {
            headCmd = null;
          }

          var isCompress = false;

          switch (headCmd) {
            case (_crd && GlobalCMDHead === void 0 ? (_reportPossibleCrUseOfGlobalCMDHead({
              error: Error()
            }), GlobalCMDHead) : GlobalCMDHead).SEND_PHP_REQUEST:
              isCompress = true;
              break;

            case (_crd && GlobalCMDHead === void 0 ? (_reportPossibleCrUseOfGlobalCMDHead({
              error: Error()
            }), GlobalCMDHead) : GlobalCMDHead).RESPONSE_PHP_REQUEST:
              isCompress = true;
              break;

            case (_crd && GlobalCMDHead === void 0 ? (_reportPossibleCrUseOfGlobalCMDHead({
              error: Error()
            }), GlobalCMDHead) : GlobalCMDHead).SEND_PHP_REQUEST_NEW:
              isCompress = true;
              break;

            case (_crd && GlobalCMDHead === void 0 ? (_reportPossibleCrUseOfGlobalCMDHead({
              error: Error()
            }), GlobalCMDHead) : GlobalCMDHead).RESPONSE_PHP_REQUEST_NEW:
              isCompress = true;
              break;

            case (_crd && GlobalCMDHead === void 0 ? (_reportPossibleCrUseOfGlobalCMDHead({
              error: Error()
            }), GlobalCMDHead) : GlobalCMDHead).SERVER_SEND_HEART:
              //发送心跳包
              isCompress = false;
              break;

            case (_crd && GlobalCMDHead === void 0 ? (_reportPossibleCrUseOfGlobalCMDHead({
              error: Error()
            }), GlobalCMDHead) : GlobalCMDHead).SERVER_HEART_RESPONSE:
              //服务器回应心跳包
              isCompress = false;
              break;

            default:
              break;
          }

          return isCompress;
        }
        /**补全发送指令的数据 */


        getJsonTable(cmd) {
          var info = {};
          info = {
            timestamp: (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).time(),
            app: (_crd && ClientInfo === void 0 ? (_reportPossibleCrUseOfClientInfo({
              error: Error()
            }), ClientInfo) : ClientInfo).PlatFormAppID,
            ssid: (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
              error: Error()
            }), GCache) : GCache).User.getDataUser("ssid", ""),
            //会话ID 暂时为空 一般保存登录之后的
            mid: 0,
            //暂时为0,int 用户ID(地区id 用于区分不同地区，一般逻辑参数之类的都使用这个id)
            isNew: 1,
            //代表是统一大厅
            action: (_crd && GCmdMapping === void 0 ? (_reportPossibleCrUseOfGCmdMapping({
              error: Error()
            }), GCmdMapping) : GCmdMapping).getActionByCmd(cmd),
            hall_version: (_crd && ClientInfo === void 0 ? (_reportPossibleCrUseOfClientInfo({
              error: Error()
            }), ClientInfo) : ClientInfo).HallVer
          };
          var mid = (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
            error: Error()
          }), GCache) : GCache).User.getUserMid();

          if (mid == null) {
            mid = (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
              error: Error()
            }), GCache) : GCache).User.getLastlocalMid();

            if (mid == null) {
              mid = 0;
            }
          }

          info.mid = mid;
          return info;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=582489b2f00b61c83896aad69d9194f8cb392a01.js.map