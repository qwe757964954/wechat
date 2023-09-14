System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, game, sys, Platform, Logger, Network, _crd, NetworkEvent, NetworkState, NetWorkName;

  function _reportPossibleCrUseOfPlatform(extras) {
    _reporterNs.report("Platform", "../../platform/Platform", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLogger(extras) {
    _reporterNs.report("Logger", "../log/Logger", _context.meta, extras);
  }

  _export({
    Network: void 0,
    NetworkEvent: void 0,
    NetworkState: void 0
  });

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      game = _cc.game;
      sys = _cc.sys;
    }, function (_unresolved_2) {
      Platform = _unresolved_2.Platform;
    }, function (_unresolved_3) {
      Logger = _unresolved_3.Logger;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "06a3ayfWydC8pY/lWnVtcRP", "NetState", undefined);

      __checkObsolete__(['game', 'sys']);

      (function (NetworkEvent) {
        NetworkEvent["CHANGE_STATE"] = "NetworkEvent.CHANGE_STATE";
        NetworkEvent["CHANGE_NAME"] = "NetworkEvent.CHANGE_NAME";
      })(NetworkEvent || _export("NetworkEvent", NetworkEvent = {}));

      (function (NetworkState) {
        NetworkState["UNKNOWN"] = "unknown";
        NetworkState["ONLINE"] = "online";
        NetworkState["OFFLINE"] = "offline";
      })(NetworkState || _export("NetworkState", NetworkState = {}));

      /** 网络名称 */
      _export("NetWorkName", NetWorkName = {
        ["WIFI"]: "wifi",
        //wifi 网络
        ["2G"]: "2g",
        //2g 网络
        ["3G"]: "3g",
        //3g 网络
        ["4G"]: "4g",
        //4g 网络
        ["5G"]: "5g",
        //5g 网络
        ["UNKNOWN"]: "unknown",
        //Android 下不常见的网络类型
        ["NONE"]: "none" //无网络

      });
      /** 网络变化类 */


      _export("Network", Network = class Network {
        //1：wifi  2:2G  3:3G  4:4G  5:5G 6:未知 -1:未知或无网络
        static get instance() {
          if (!this._instance || this._instance == null) {
            this._instance = new Network();
          }

          return this._instance;
        }

        constructor() {
          this._state = NetworkState.UNKNOWN;
          this._name = NetWorkName.UNKNOWN;

          this._callbackNetworkState(navigator.onLine);

          this._callbackNetworkName(NetWorkName.UNKNOWN);

          switch (sys.platform) {
            case sys.Platform.WECHAT_GAME:
              this._weixinInit();

              break;

            case sys.Platform.DESKTOP_BROWSER:
              this._webInit();

              break;

            default:
              break;
          }

          this.initNetWorkState();
        }
        /**
         * 获取网络状态
         */


        get state() {
          return this._state;
        }
        /**
         * 设置网络状态
         */


        set state(state) {
          this._state = state;
        }
        /**
         * 获取网络名称
         */


        get name() {
          return this._name;
        }
        /** 
         * 设置网络名称
         */


        set name(str) {
          this._name = str || NetWorkName.UNKNOWN;
        } //状态改变


        changeState(state) {
          if (this._state === state) {
            return;
          }

          this._state = state;
          game.emit(NetworkEvent.CHANGE_STATE);
        } //切换网络


        changeName(name) {
          if (this._name === name) {
            return;
          }

          this._name = name;
          game.emit(NetworkEvent.CHANGE_NAME);
        }
        /** web平台注册 */


        _webInit() {
          var _window = window;
          var el = document.body;

          if (el.addEventListener) {
            _window.addEventListener("online", () => {
              this._callbackNetworkState(true);
            }, true);

            _window.addEventListener("offline", () => {
              this._callbackNetworkState(false);
            }, true);
          } else if (el.attachEvent) {
            _window.attachEvent("ononline", () => {
              this._callbackNetworkState(true);
            });

            _window.attachEvent("onoffline", () => {
              this._callbackNetworkState(false);
            });
          } else {
            _window.ononline = () => {
              this._callbackNetworkState(true);
            };

            _window.onoffline = () => {
              this._callbackNetworkState(false);
            };
          } // PC模式用 online.js判断网络连接


          if (!sys.isMobile) {
            window.onLineHandler = () => {
              this._callbackNetworkState(true);
            };

            window.offLineHandler = () => {
              this._callbackNetworkState(false);
            };
          }
        }
        /** wx平台注册 */


        _weixinInit() {
          var self = this;
          (_crd && Platform === void 0 ? (_reportPossibleCrUseOfPlatform({
            error: Error()
          }), Platform) : Platform).regWxNetWorkCallback(res => {
            (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
              error: Error()
            }), Logger) : Logger).logNet("网络状态改变：", res);

            if (res && res["networkType"]) {
              self._callbackNetworkName(res["networkType"]);
            } else {
              self._callbackNetworkName(NetWorkName.UNKNOWN);
            }

            if (res && res["isConnected"] == true) {
              self._callbackNetworkState(true);
            } else {
              self._callbackNetworkState(false);
            }

            ;
          });
        }
        /** 初始化网络状态 */


        initNetWorkState() {
          var self = this;
          (_crd && Platform === void 0 ? (_reportPossibleCrUseOfPlatform({
            error: Error()
          }), Platform) : Platform).updateNetWorkType(() => {
            switch ((_crd && Platform === void 0 ? (_reportPossibleCrUseOfPlatform({
              error: Error()
            }), Platform) : Platform).NetWorkType) {
              case -1:
                self._callbackNetworkName(NetWorkName.NONE);

                self._callbackNetworkState(false);

                break;

              case 1:
                self._callbackNetworkName(NetWorkName.WIFI);

                self._callbackNetworkState(true);

                break;

              case 2:
                self._callbackNetworkName(NetWorkName["2G"]);

                self._callbackNetworkState(true);

                break;

              case 3:
                self._callbackNetworkName(NetWorkName["3G"]);

                self._callbackNetworkState(true);

                break;

              case 4:
                self._callbackNetworkName(NetWorkName["4G"]);

                self._callbackNetworkState(true);

                break;

              case 5:
                self._callbackNetworkName(NetWorkName["5G"]);

                self._callbackNetworkState(true);

                break;

              case 6:
                self._callbackNetworkName(NetWorkName.UNKNOWN);

                self._callbackNetworkState(true);

                break;

              default:
                break;
            }
          });
        }
        /** 网络状态改变 */


        _callbackNetworkState(online) {
          if (online) {
            this.changeState(NetworkState.ONLINE);
            (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
              error: Error()
            }), Logger) : Logger).ReportConf.isCanReport = true;
          } else {
            this.changeState(NetworkState.OFFLINE);
            (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
              error: Error()
            }), Logger) : Logger).ReportConf.isCanReport = false;
          }
        }
        /** 网络名称改变 */


        _callbackNetworkName(name) {
          this.changeName(name);
        }

      });

      Network._instance = null;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=722901e50cce8fa48d4937c05de7eaa1245a886f.js.map