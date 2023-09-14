System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, MapEx, NetNode, NetManager, _crd;

  function _reportPossibleCrUseOfMapEx(extras) {
    _reporterNs.report("MapEx", "../extend/MapEx", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIRequestProtocol(extras) {
    _reporterNs.report("IRequestProtocol", "./NetInterface", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNetConnectOptions(extras) {
    _reporterNs.report("NetConnectOptions", "./NetNode", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNetNode(extras) {
    _reporterNs.report("NetNode", "./NetNode", _context.meta, extras);
  }

  _export("NetManager", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      MapEx = _unresolved_2.MapEx;
    }, function (_unresolved_3) {
      NetNode = _unresolved_3.NetNode;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d8cd5el6GBGTYTW+N8b8EuJ", "NetManager", undefined);

      /*
       * 网络节点管理类({NetNode})
       */
      _export("NetManager", NetManager = class NetManager {
        constructor() {
          this._channels = new (_crd && MapEx === void 0 ? (_reportPossibleCrUseOfMapEx({
            error: Error()
          }), MapEx) : MapEx)();
        }

        static getInstance() {
          if (!this._instance) {
            this._instance = new NetManager();
          }

          return this._instance;
        }
        /** 添加Node，返回NetNode对象 */


        addNetNode() {
          let netnode = new (_crd && NetNode === void 0 ? (_reportPossibleCrUseOfNetNode({
            error: Error()
          }), NetNode) : NetNode)();
          let index = NetManager.getInstance().setNetNode(netnode);
          return [netnode, index];
        }
        /** 添加Node，返回ChannelID */


        setNetNode(newNode) {
          let key = this._channels.size;
          let newKey = key + 1;

          this._channels.set(newKey, newNode);

          return newKey;
        }
        /** 移除Node */


        removeNetNode(channelId) {
          if (channelId) {
            let netNode = this._channels.has(channelId);

            if (netNode) {
              if (netNode.dtor) {
                netNode.dtor();
              }

              this._channels.delete(channelId);
            }
          }
        }
        /**设置回调 */


        setNetNodeCallback(channelId, options) {
          if (channelId) {
            let netNode = this._channels.has(channelId);

            if (netNode) {
              netNode.errorConnectedCallback = options.error;
              netNode.connectedCallback = options.connected;
              netNode.disconnectCallback = options.disconnect;
              netNode.connectOutTimeCallback = options.connectouttime;
              return true;
            }
          }

          return false;
        }
        /** 调用Node连接 */


        connect(channelId, options) {
          if (channelId) {
            let netNode = this._channels.has(channelId);

            if (netNode) {
              return netNode.connect(options);
            }
          }

          return false;
        }
        /** 调用Node发送 */


        send(channelId, reqProtocol, force = false) {
          if (channelId) {
            let netNode = this._channels.has(channelId);

            if (netNode) {
              return netNode.send(reqProtocol, force);
            }
          }

          return -1;
        }
        /** 发起请求 */


        request(channelId, reqProtocol, force = false) {
          if (channelId) {
            let netNode = this._channels.has(channelId);

            if (netNode) {
              netNode.request(reqProtocol, force);
            }
          }
        }
        /** 同request，但在request之前会先判断队列中是否已有rspCmd，如有重复的则直接返回 */


        requestUnique(channelId, reqProtocol, force = false) {
          if (channelId) {
            let netNode = this._channels.has(channelId);

            if (netNode) {
              return netNode.requestUnique(reqProtocol, force);
            }
          }

          return false;
        }
        /** 调用Node关闭 */


        close(channelId, code, reason) {
          if (channelId) {
            let netNode = this._channels.has(channelId);

            if (netNode) {
              return netNode.closeSocket(code, reason);
            }
          }
        } //关闭所有连接


        closeAll(code, reason) {
          let netNodes = this._channels.values();

          netNodes.forEach((key, index) => {
            netNodes[index].closeSocket(code, reason);
          });
        }
        /** 移除所有Node */


        removeNetNodeAll() {
          let netNodes = this._channels.values();

          netNodes.forEach((key, index) => {
            if (netNodes[index].dtor) {
              netNodes[index].dtor();
            }
          });

          this._channels.clear();
        }

      });

      NetManager._instance = void 0;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=b7cce4f4f8efbc94a0737ba1d8ef207ad58b9e29.js.map