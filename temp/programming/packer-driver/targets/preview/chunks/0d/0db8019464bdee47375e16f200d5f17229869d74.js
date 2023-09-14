System.register(["__unresolved_0", "cc", "cc/env", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, game, Game, input, Input, KeyCode, ResolutionPolicy, sp, sys, view, EDITOR, GCache, LocalStorage, EventManager, Network, NetworkEvent, Utils, Platform, GSocket, AppEvent, GConstants, StoreKey, UIID, GameConfig, _crd, SystemConf, GameSwitchConf, APPState, GameNetType, ClientInfo;

  function _reportPossibleCrUseOfGCache(extras) {
    _reporterNs.report("GCache", "../cache/GCache", _context.meta, extras);
  }

  function _reportPossibleCrUseOfinf_AppUrlConf(extras) {
    _reporterNs.report("inf_AppUrlConf", "../framework/InterfaceDefines", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLocalStorage(extras) {
    _reporterNs.report("LocalStorage", "../framework/LocalStorage", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventManager(extras) {
    _reporterNs.report("EventManager", "../framework/manager/EventManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNetwork(extras) {
    _reporterNs.report("Network", "../framework/network/NetState", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNetworkEvent(extras) {
    _reporterNs.report("NetworkEvent", "../framework/network/NetState", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUtils(extras) {
    _reporterNs.report("Utils", "../framework/Utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlatform(extras) {
    _reporterNs.report("Platform", "../platform/Platform", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGSocket(extras) {
    _reporterNs.report("GSocket", "../proj/gnet/GSocket", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAppEvent(extras) {
    _reporterNs.report("AppEvent", "./AppEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGConstants(extras) {
    _reporterNs.report("GConstants", "./GameConstant", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStoreKey(extras) {
    _reporterNs.report("StoreKey", "./GameConstant", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIID(extras) {
    _reporterNs.report("UIID", "./UIConfig", _context.meta, extras);
  }

  _export({
    GameConfig: void 0,
    APPState: void 0,
    GameNetType: void 0
  });

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      game = _cc.game;
      Game = _cc.Game;
      input = _cc.input;
      Input = _cc.Input;
      KeyCode = _cc.KeyCode;
      ResolutionPolicy = _cc.ResolutionPolicy;
      sp = _cc.sp;
      sys = _cc.sys;
      view = _cc.view;
    }, function (_ccEnv) {
      EDITOR = _ccEnv.EDITOR;
    }, function (_unresolved_2) {
      GCache = _unresolved_2.GCache;
    }, function (_unresolved_3) {
      LocalStorage = _unresolved_3.LocalStorage;
    }, function (_unresolved_4) {
      EventManager = _unresolved_4.EventManager;
    }, function (_unresolved_5) {
      Network = _unresolved_5.Network;
      NetworkEvent = _unresolved_5.NetworkEvent;
    }, function (_unresolved_6) {
      Utils = _unresolved_6.Utils;
    }, function (_unresolved_7) {
      Platform = _unresolved_7.Platform;
    }, function (_unresolved_8) {
      GSocket = _unresolved_8.GSocket;
    }, function (_unresolved_9) {
      AppEvent = _unresolved_9.AppEvent;
    }, function (_unresolved_10) {
      GConstants = _unresolved_10.GConstants;
      StoreKey = _unresolved_10.StoreKey;
    }, function (_unresolved_11) {
      UIID = _unresolved_11.UIID;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1bf0237DaVJoZg3DlOHjKKL", "GameConfig", undefined);

      __checkObsolete__(['EventKeyboard', 'game', 'Game', 'input', 'Input', 'KeyCode', 'ResolutionPolicy', 'sp', 'sys', 'view']);

      /** 系统应用配置 */
      _export("SystemConf", SystemConf = {
        //设计分辨率
        DEV_SIZE: {
          width: 1280,
          height: 720
        },
        //微信平台右边UI空隙
        WX_RIGHT_SPANCE_X: 100
      });
      /** 游戏内的开关配置 */


      _export("GameSwitchConf", GameSwitchConf = {
        // HeadUpload: false, // true: 屏蔽头像上传
        CustomizeChatSwitch: false,
        // true：屏蔽自定义聊天入口
        // NickSwitch: false, // true：昵称过滤
        // NickModify: true, // 是否允许修改昵称
        // slotGameSwitch : true, // 小游戏是否关闭
        // ReportSwitch: false, // true：开启点击失败上报，false：默认不上报
        // LocationSwitch: false, // 定位相关功能
        GameOverShare: true //游戏结算分享开关

      });
      /**应用显隐 */


      (function (APPState) {
        APPState[APPState["SHOW"] = 0] = "SHOW";
        APPState[APPState["HIDE"] = 1] = "HIDE";
      })(APPState || _export("APPState", APPState = {}));

      (function (GameNetType) {
        GameNetType[GameNetType["NET_TEST"] = 0] = "NET_TEST";
        GameNetType[GameNetType["NET_DEV"] = 1] = "NET_DEV";
        GameNetType[GameNetType["NET_ONLINE"] = 2] = "NET_ONLINE";
      })(GameNetType || _export("GameNetType", GameNetType = {}));

      /**客户端设备信息 */
      _export("ClientInfo", ClientInfo = {
        /** 调试开关 */
        DEBUG: true,

        /** 当前服务器 */
        CurrowServer: GameNetType.NET_TEST,

        /** 版本 */
        AppVer: "1.2.1",

        /** 大厅版本号 */
        HallVer: 1978,

        /** 小程序APPID */
        WX_AppID: "wx7f5020ca94d64ab1",

        /** 米大师侧注册的应用ID */
        WX_PayOfferId: "1450087932",

        /** 支付环境（0:正式 1:沙箱） */
        WX_PayEnv: 1,

        /** 大渠道ID */
        ChannelId: "",

        /** 渠道Key */
        ChannelKey: "",

        /** 区域ID */
        RegionId: 0,

        /** 激励视频广告ID */
        AdVideoUnitId: "",

        /** 平台ID */
        get PlatFormAppID() {
          if ((_crd && Platform === void 0 ? (_reportPossibleCrUseOfPlatform({
            error: Error()
          }), Platform) : Platform).isIOS()) {
            return 45101000;
          }

          return 45103000;
        },

        /**操作系统版本*/
        get SysVer() {
          return (_crd && Platform === void 0 ? (_reportPossibleCrUseOfPlatform({
            error: Error()
          }), Platform) : Platform)._platformVer;
        },

        /**物理网卡地址*/
        get MachineId() {
          return (_crd && Platform === void 0 ? (_reportPossibleCrUseOfPlatform({
            error: Error()
          }), Platform) : Platform)._Machineid;
        },

        /**物理网卡型号*/
        get MachineModel() {
          return (_crd && Platform === void 0 ? (_reportPossibleCrUseOfPlatform({
            error: Error()
          }), Platform) : Platform)._MachineModel;
        },

        /**设备机型*/
        get PhoneModel() {
          return (_crd && Platform === void 0 ? (_reportPossibleCrUseOfPlatform({
            error: Error()
          }), Platform) : Platform)._PhoneModel;
        },

        /**设备ID*/
        get Guid() {
          return (_crd && Platform === void 0 ? (_reportPossibleCrUseOfPlatform({
            error: Error()
          }), Platform) : Platform)._Guid;
        },

        /**设备imsi*/
        get IMSI() {
          return (_crd && Platform === void 0 ? (_reportPossibleCrUseOfPlatform({
            error: Error()
          }), Platform) : Platform)._IMSI;
        },

        /**设备iccid*/
        get ICCID() {
          return (_crd && Platform === void 0 ? (_reportPossibleCrUseOfPlatform({
            error: Error()
          }), Platform) : Platform)._ICCID;
        },

        /**设备iMEI*/
        get IMEI() {
          return (_crd && Platform === void 0 ? (_reportPossibleCrUseOfPlatform({
            error: Error()
          }), Platform) : Platform)._IMEI;
        },

        /**设备SSAID*/
        get SSAID() {
          return (_crd && Platform === void 0 ? (_reportPossibleCrUseOfPlatform({
            error: Error()
          }), Platform) : Platform)._Guid;
        },

        /**运营商类型*/
        get PhoneCardType() {
          return (_crd && Platform === void 0 ? (_reportPossibleCrUseOfPlatform({
            error: Error()
          }), Platform) : Platform)._PhoneCardType;
        },

        /**网络类型*/
        get NetWorkType() {
          return (_crd && Platform === void 0 ? (_reportPossibleCrUseOfPlatform({
            error: Error()
          }), Platform) : Platform).NetWorkType;
        },

        /**客户端安全码【安卓客户端必填】*/
        get SignDeviceId() {
          return "";
        },

        /**客户端安全码(针对物理网卡地址)*/
        get SignMacAddress() {
          return "";
        },

        /**客户端安全码(针对Guid)*/
        get SignGuid() {
          return "";
        },

        /**iOS厂商ID*/
        get FactoryId() {
          return "";
        },

        /**包名*/
        get BundleId() {
          return "";
        }

      });
      /**应用配置 */


      _export("GameConfig", GameConfig = class GameConfig {
        constructor() {
          this._AppFPS = 60;
          this._ApplicationState = APPState.SHOW;
          this._ResolutionPolicyType = ResolutionPolicy.UNKNOWN;
          this.NetWorkState = (_crd && Network === void 0 ? (_reportPossibleCrUseOfNetwork({
            error: Error()
          }), Network) : Network).instance.state;

          this.print = function () {
            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }

            console.log("\u3010" + this._className + "\u3011", ...args);
          };

          this.dump = function (arg1, args2) {
            if (args2 === void 0) {
              args2 = null;
            }

            if (!args2) {
              args2 = "打印输出 :";
            }

            this.print(args2);

            if (sys.platform == sys.Platform.DESKTOP_BROWSER) {
              console.table(arg1);
            } else {
              (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                error: Error()
              }), Utils) : Utils).dump(arg1);
            }
          };
        }

        static get instance() {
          if (!this._instance || this._instance == null) {
            this._instance = new GameConfig();

            this._instance.initInput();
          }

          return this._instance;
        }
        /** 地址配置 */


        //应用显示状态
        set ApplicationState(state) {
          this._ApplicationState = state;
        } //获取应用显示状态


        get ApplicationState() {
          return this._ApplicationState;
        }
        /** 设置适配模式 */


        set ResolutionPolicyType(type) {
          this._ResolutionPolicyType = type;
        } //获取适配模式


        get ResolutionPolicyType() {
          return this._ResolutionPolicyType;
        }
        /** 获取当前网络地址配置 */


        get AppUrlConf() {
          return GameConfig.ServerUrlConf[ClientInfo.CurrowServer];
        }
        /** 设置游戏帧率 */


        set FPS(num) {
          this._AppFPS = num; // this._AppFPS = 59;
          // game.frameRate = this._AppFPS;
        }
        /** 设置游戏帧率 */


        get FPS() {
          return this._AppFPS;
        }
        /** 是否线上 */


        isOnlineServer() {
          return ClientInfo.CurrowServer == GameNetType.NET_ONLINE;
        }
        /** 初始化基础事件监听 */


        initInput() {
          this.FPS = this._AppFPS;
          this.clearAllListener();
          /** 系统后台事件 */

          game.on(Game.EVENT_HIDE, function () {
            GameConfig.instance.ApplicationState = APPState.HIDE;
            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
              error: Error()
            }), AppEvent) : AppEvent).SYS_SHOW_OR_HIDE, GameConfig.instance.ApplicationState);
          });
          /** 系统前台事件 */

          game.on(Game.EVENT_SHOW, function () {
            GameConfig.instance.ApplicationState = APPState.SHOW;
            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
              error: Error()
            }), AppEvent) : AppEvent).SYS_SHOW_OR_HIDE, GameConfig.instance.ApplicationState);
          });
          /** 按键监听 */

          if (sys.platform == sys.Platform.DESKTOP_BROWSER) {
            input.on(Input.EventType.KEY_DOWN, this.onkeyDownCallback, this);
          }
          /** 网络名称变化 */


          game.on((_crd && NetworkEvent === void 0 ? (_reportPossibleCrUseOfNetworkEvent({
            error: Error()
          }), NetworkEvent) : NetworkEvent).CHANGE_NAME, function () {
            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
              error: Error()
            }), AppEvent) : AppEvent).SYS_NET_CHANGE_NAME, (_crd && Network === void 0 ? (_reportPossibleCrUseOfNetwork({
              error: Error()
            }), Network) : Network).instance.name);
          });
          /** 网络状态变化 */

          game.on((_crd && NetworkEvent === void 0 ? (_reportPossibleCrUseOfNetworkEvent({
            error: Error()
          }), NetworkEvent) : NetworkEvent).CHANGE_STATE, function () {
            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
              error: Error()
            }), AppEvent) : AppEvent).SYS_NET_CHANGE_STATE, (_crd && Network === void 0 ? (_reportPossibleCrUseOfNetwork({
              error: Error()
            }), Network) : Network).instance.state);
          });
          /** 窗口尺寸大小变化 */

          view.setResizeCallback(() => {
            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
              error: Error()
            }), AppEvent) : AppEvent).SYS_WINDOW_ADAPTIVE);
            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
              error: Error()
            }), AppEvent) : AppEvent).SYS_WINDOW_CHANGE);
          });
        }
        /** 重连游戏 */


        toReqConnectRoom() {
          if (!(_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
            error: Error()
          }), GCache) : GCache).User || (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
            error: Error()
          }), GCache) : GCache).User.isLoginSuccesed() == false) {
            (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
              error: Error()
            }), GCache) : GCache).User.setLoginState(0);
            (_crd && GSocket === void 0 ? (_reportPossibleCrUseOfGSocket({
              error: Error()
            }), GSocket) : GSocket).instance.closeConnect();
            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
              error: Error()
            }), AppEvent) : AppEvent).LOGIN_GOTO_SHOW);
            return;
          } //设置缓存数据


          var body = {
            GameID: (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
              error: Error()
            }), GCache) : GCache).Desk.getCurGameID(),
            Level: (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
              error: Error()
            }), GCache) : GCache).Desk.getCurLevelID(),
            TableID: (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
              error: Error()
            }), GCache) : GCache).Desk.getCurTableID(),
            isReconn: true
          };
          (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
            error: Error()
          }), GCache) : GCache).SelectGame.intoGameData = body;
          (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
            error: Error()
          }), GCache) : GCache).User.LoginRoomState = false; //加载游戏场景

          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).GAME_GOTO_SHOW);
        }

        //按键监听
        onkeyDownCallback(event) {
          console.log("***********\u6309\u952E\u76D1\u542C keyCode:" + event.keyCode + "********");

          switch (event.keyCode) {
            case KeyCode.F1:
              (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
                error: Error()
              }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
                error: Error()
              }), AppEvent) : AppEvent).NET_REQ_GOODS_INFO, {
                scene: 1
              });
              break;

            case KeyCode.F2:
              (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
                error: Error()
              }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
                error: Error()
              }), AppEvent) : AppEvent).NET_REQ_BANKRUPT_GIFT_CONF, 2000, 12); //请求破产线

              (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
                error: Error()
              }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
                error: Error()
              }), AppEvent) : AppEvent).NET_REQ_BANKRUPT_CONFIG);
              (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
                error: Error()
              }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
                error: Error()
              }), AppEvent) : AppEvent).VIEW_UI_OPEN, (_crd && UIID === void 0 ? (_reportPossibleCrUseOfUIID({
                error: Error()
              }), UIID) : UIID).BankupGift);
              break;

            case KeyCode.F3:
              (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
                error: Error()
              }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
                error: Error()
              }), AppEvent) : AppEvent).NET_REQ_GOODS_INFO, {
                scene: (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
                  error: Error()
                }), GConstants) : GConstants).GoodsListID.limitPack
              });
              break;

            case KeyCode.F5:
              //请求重连
              this.toReqConnectRoom();
              break;

            case KeyCode.F6:
              //请求重连
              // EventManager.dispatch(DGZEvent.GAME_OPTION_SHOW, DGZConstant.OPT_STATE.START_KOUDI, null)
              break;

            case KeyCode.ESCAPE:
              //踢到登录
              this.__toForwardLogin();

              break;

            default:
              break;
          }
        }
        /** 跳转到登录 */


        __toForwardLogin() {
          this.print("---跳转到登录---");
          (_crd && LocalStorage === void 0 ? (_reportPossibleCrUseOfLocalStorage({
            error: Error()
          }), LocalStorage) : LocalStorage).set((_crd && StoreKey === void 0 ? (_reportPossibleCrUseOfStoreKey({
            error: Error()
          }), StoreKey) : StoreKey).LOGIN_LAST_CHECK_AGREE, false);
          (_crd && LocalStorage === void 0 ? (_reportPossibleCrUseOfLocalStorage({
            error: Error()
          }), LocalStorage) : LocalStorage).clear();
          (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
            error: Error()
          }), GCache) : GCache).User.setLoginState(0);
          (_crd && GSocket === void 0 ? (_reportPossibleCrUseOfGSocket({
            error: Error()
          }), GSocket) : GSocket).instance.closeConnect();
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).LOGIN_GOTO_SHOW);
        } //清理事件监听


        clearAllListener() {
          game.off(Game.EVENT_HIDE);
          game.off(Game.EVENT_SHOW);
          game.off((_crd && NetworkEvent === void 0 ? (_reportPossibleCrUseOfNetworkEvent({
            error: Error()
          }), NetworkEvent) : NetworkEvent).CHANGE_STATE);
          game.off((_crd && NetworkEvent === void 0 ? (_reportPossibleCrUseOfNetworkEvent({
            error: Error()
          }), NetworkEvent) : NetworkEvent).CHANGE_NAME);

          if (sys.platform == sys.Platform.DESKTOP_BROWSER) {
            input.off(Input.EventType.KEY_DOWN);
          }
        } //当前类日志输出


      });

      GameConfig._instance = null;
      GameConfig.ServerUrlConf = {
        /** 测试服 */
        [GameNetType.NET_TEST]: {
          /** 自定义命名 */
          Name: "测试服",

          /** Web地址 */
          Web: "http://192.168.201.78/dfqp/index.php",

          /** socket */
          Socket: "ws://192.168.203.219:10102"
        },

        /** 预发布 */
        [GameNetType.NET_DEV]: {
          /** 自定义命名 */
          Name: "预发布",

          /** Web地址 */
          Web: "http://192.168.201.78/dfqp/index.php",

          /** socket */
          Socket: "wss://dfnewaccess01.boyaa.com/"
        },

        /** 正式服 */
        [GameNetType.NET_ONLINE]: {
          /** 自定义命名 */
          Name: "正式服",

          /** Web地址 */
          Web: "https://mvsnspus01.ifere.com/ddfqp/index.php",

          /** socket */
          Socket: "wss://dfnewac01.ifere.com/"
        }
      };

      if (EDITOR) {
        // 重写update方法 达到在编辑模式下 自动播放动画的功能
        sp.Skeleton.prototype['update'] = function (dt) {
          if (EDITOR) {
            ['engine']["_animatingInEditMode"] = 1;
            ['engine']["animatingInEditMode"] = 1;
          }

          if (this.paused) return;
          dt *= this.timeScale * sp['timeScale'];

          if (this.isAnimationCached()) {
            // Cache mode and has animation queue.
            if (this._isAniComplete) {
              if (this._animationQueue.length === 0 && !this._headAniInfo) {
                var frameCache = this._frameCache;

                if (frameCache && frameCache.isInvalid()) {
                  frameCache.updateToFrame();
                  var frames = frameCache.frames;
                  this._curFrame = frames[frames.length - 1];
                }

                return;
              }

              if (!this._headAniInfo) {
                this._headAniInfo = this._animationQueue.shift();
              }

              this._accTime += dt;

              if (this._accTime > this._headAniInfo.delay) {
                var aniInfo = this._headAniInfo;
                this._headAniInfo = null;
                this.setAnimation(0, aniInfo.animationName, aniInfo.loop);
              }

              return;
            }

            this._updateCache(dt);
          } else {
            this._updateRealtime(dt);
          }
        };
      }

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=0db8019464bdee47375e16f200d5f17229869d74.js.map