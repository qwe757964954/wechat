System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14", "__unresolved_15", "__unresolved_16", "__unresolved_17", "__unresolved_18", "__unresolved_19", "__unresolved_20", "__unresolved_21", "__unresolved_22", "__unresolved_23", "__unresolved_24", "__unresolved_25", "__unresolved_26", "__unresolved_27", "__unresolved_28", "__unresolved_29", "__unresolved_30", "__unresolved_31", "__unresolved_32", "__unresolved_33", "__unresolved_34", "__unresolved_35", "__unresolved_36", "__unresolved_37", "__unresolved_38", "__unresolved_39"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, director, GCache, AppEvent, APPState, GConstants, GameRes, GameTxt, UIConfigData, UIID, Encrypt, LayerManager, resLoader, Logger, AudioManager, EventManager, PkgLoaderManager, ResLoaderManager, SpineAniManager, Network, NetworkState, Utils, BaseControll, Platform, ActivityController, GameController, GCmdMapping, GlobalCMD, GlobalCMDHead, GlobalHeadCmdBinding, GPBWriteAndRead, GSocket, HallController, LoginController, OrderRecode, ReportController, GoodsDataServers, MessageServers, PopupServers, RecommendPopServers, ReportServers, SelectGameServers, ShareServers, TaskServers, UserServers, _GlobalController, _crd, GlobalController;

  function _reportPossibleCrUseOfGCache(extras) {
    _reporterNs.report("GCache", "../cache/GCache", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAppEvent(extras) {
    _reporterNs.report("AppEvent", "../config/AppEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAPPState(extras) {
    _reporterNs.report("APPState", "../config/GameConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGConstants(extras) {
    _reporterNs.report("GConstants", "../config/GameConstant", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameRes(extras) {
    _reporterNs.report("GameRes", "../config/GameRes", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameTxt(extras) {
    _reporterNs.report("GameTxt", "../config/GameTxt", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIConfigData(extras) {
    _reporterNs.report("UIConfigData", "../config/UIConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIID(extras) {
    _reporterNs.report("UIID", "../config/UIConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEncrypt(extras) {
    _reporterNs.report("Encrypt", "../framework/crypto/Encrypto", _context.meta, extras);
  }

  function _reportPossibleCrUseOfinf_GetPropItem(extras) {
    _reporterNs.report("inf_GetPropItem", "../framework/InterfaceDefines", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLayerManager(extras) {
    _reporterNs.report("LayerManager", "../framework/layer/LayerManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfresLoader(extras) {
    _reporterNs.report("resLoader", "../framework/loader/ResLoader", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLogger(extras) {
    _reporterNs.report("Logger", "../framework/log/Logger", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioManager(extras) {
    _reporterNs.report("AudioManager", "../framework/manager/AudioManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventManager(extras) {
    _reporterNs.report("EventManager", "../framework/manager/EventManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPkgLoaderManager(extras) {
    _reporterNs.report("PkgLoaderManager", "../framework/manager/PkgLoaderManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResLoaderManager(extras) {
    _reporterNs.report("ResLoaderManager", "../framework/manager/ResLoaderManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSpineAniManager(extras) {
    _reporterNs.report("SpineAniManager", "../framework/manager/SpineAniManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfINetMessage(extras) {
    _reporterNs.report("INetMessage", "../framework/network/NetInterface", _context.meta, extras);
  }

  function _reportPossibleCrUseOfINetPHPMessage(extras) {
    _reporterNs.report("INetPHPMessage", "../framework/network/NetInterface", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNetwork(extras) {
    _reporterNs.report("Network", "../framework/network/NetState", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNetworkState(extras) {
    _reporterNs.report("NetworkState", "../framework/network/NetState", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUtils(extras) {
    _reporterNs.report("Utils", "../framework/Utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseControll(extras) {
    _reporterNs.report("BaseControll", "../framework/vc/BaseController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlatform(extras) {
    _reporterNs.report("Platform", "../platform/Platform", _context.meta, extras);
  }

  function _reportPossibleCrUseOfActivityController(extras) {
    _reporterNs.report("ActivityController", "./ActivityController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameController(extras) {
    _reporterNs.report("GameController", "./GameController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGCmdMapping(extras) {
    _reporterNs.report("GCmdMapping", "./gnet/GCmdMapping", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGlobalCMD(extras) {
    _reporterNs.report("GlobalCMD", "./gnet/GlobalCMD", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGlobalCMDHead(extras) {
    _reporterNs.report("GlobalCMDHead", "./gnet/GlobalCMD", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGlobalHeadCmdBinding(extras) {
    _reporterNs.report("GlobalHeadCmdBinding", "./gnet/GlobalCMD", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGPBWriteAndRead(extras) {
    _reporterNs.report("GPBWriteAndRead", "./gnet/GPBWriteAndRead", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGSocket(extras) {
    _reporterNs.report("GSocket", "./gnet/GSocket", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHallController(extras) {
    _reporterNs.report("HallController", "./HallController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLoginController(extras) {
    _reporterNs.report("LoginController", "./LoginController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfOrderRecode(extras) {
    _reporterNs.report("OrderRecode", "./PayAgent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfReportController(extras) {
    _reporterNs.report("ReportController", "./ReportController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGoodsDataServers(extras) {
    _reporterNs.report("GoodsDataServers", "./servers/GoodsDataServers", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMessageServers(extras) {
    _reporterNs.report("MessageServers", "./servers/MessageServers", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPopupServers(extras) {
    _reporterNs.report("PopupServers", "./servers/PopupServers", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRecommendPopServers(extras) {
    _reporterNs.report("RecommendPopServers", "./servers/RecommendPopServers", _context.meta, extras);
  }

  function _reportPossibleCrUseOfReportServers(extras) {
    _reporterNs.report("ReportServers", "./servers/ReportServers", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSelectGameServers(extras) {
    _reporterNs.report("SelectGameServers", "./servers/SelectGameServers", _context.meta, extras);
  }

  function _reportPossibleCrUseOfShareServers(extras) {
    _reporterNs.report("ShareServers", "./servers/ShareServers", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTaskServers(extras) {
    _reporterNs.report("TaskServers", "./servers/TaskServer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUserServers(extras) {
    _reporterNs.report("UserServers", "./servers/UserServer", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      director = _cc.director;
    }, function (_unresolved_2) {
      GCache = _unresolved_2.GCache;
    }, function (_unresolved_3) {
      AppEvent = _unresolved_3.AppEvent;
    }, function (_unresolved_4) {
      APPState = _unresolved_4.APPState;
    }, function (_unresolved_5) {
      GConstants = _unresolved_5.GConstants;
    }, function (_unresolved_6) {
      GameRes = _unresolved_6.GameRes;
    }, function (_unresolved_7) {
      GameTxt = _unresolved_7.GameTxt;
    }, function (_unresolved_8) {
      UIConfigData = _unresolved_8.UIConfigData;
      UIID = _unresolved_8.UIID;
    }, function (_unresolved_9) {
      Encrypt = _unresolved_9.Encrypt;
    }, function (_unresolved_10) {
      LayerManager = _unresolved_10.LayerManager;
    }, function (_unresolved_11) {
      resLoader = _unresolved_11.resLoader;
    }, function (_unresolved_12) {
      Logger = _unresolved_12.Logger;
    }, function (_unresolved_13) {
      AudioManager = _unresolved_13.AudioManager;
    }, function (_unresolved_14) {
      EventManager = _unresolved_14.EventManager;
    }, function (_unresolved_15) {
      PkgLoaderManager = _unresolved_15.PkgLoaderManager;
    }, function (_unresolved_16) {
      ResLoaderManager = _unresolved_16.ResLoaderManager;
    }, function (_unresolved_17) {
      SpineAniManager = _unresolved_17.SpineAniManager;
    }, function (_unresolved_18) {
      Network = _unresolved_18.Network;
      NetworkState = _unresolved_18.NetworkState;
    }, function (_unresolved_19) {
      Utils = _unresolved_19.Utils;
    }, function (_unresolved_20) {
      BaseControll = _unresolved_20.BaseControll;
    }, function (_unresolved_21) {
      Platform = _unresolved_21.Platform;
    }, function (_unresolved_22) {
      ActivityController = _unresolved_22.ActivityController;
    }, function (_unresolved_23) {
      GameController = _unresolved_23.GameController;
    }, function (_unresolved_24) {
      GCmdMapping = _unresolved_24.GCmdMapping;
    }, function (_unresolved_25) {
      GlobalCMD = _unresolved_25.GlobalCMD;
      GlobalCMDHead = _unresolved_25.GlobalCMDHead;
      GlobalHeadCmdBinding = _unresolved_25.GlobalHeadCmdBinding;
    }, function (_unresolved_26) {
      GPBWriteAndRead = _unresolved_26.GPBWriteAndRead;
    }, function (_unresolved_27) {
      GSocket = _unresolved_27.GSocket;
    }, function (_unresolved_28) {
      HallController = _unresolved_28.HallController;
    }, function (_unresolved_29) {
      LoginController = _unresolved_29.LoginController;
    }, function (_unresolved_30) {
      OrderRecode = _unresolved_30.OrderRecode;
    }, function (_unresolved_31) {
      ReportController = _unresolved_31.ReportController;
    }, function (_unresolved_32) {
      GoodsDataServers = _unresolved_32.GoodsDataServers;
    }, function (_unresolved_33) {
      MessageServers = _unresolved_33.MessageServers;
    }, function (_unresolved_34) {
      PopupServers = _unresolved_34.PopupServers;
    }, function (_unresolved_35) {
      RecommendPopServers = _unresolved_35.RecommendPopServers;
    }, function (_unresolved_36) {
      ReportServers = _unresolved_36.ReportServers;
    }, function (_unresolved_37) {
      SelectGameServers = _unresolved_37.SelectGameServers;
    }, function (_unresolved_38) {
      ShareServers = _unresolved_38.ShareServers;
    }, function (_unresolved_39) {
      TaskServers = _unresolved_39.TaskServers;
    }, function (_unresolved_40) {
      UserServers = _unresolved_40.UserServers;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c24314Mp3hCAZAmJuNQeU9J", "GlobalController", undefined);

      __checkObsolete__(['director', 'Scene', 'SceneAsset']);

      _GlobalController = class _GlobalController extends (_crd && BaseControll === void 0 ? (_reportPossibleCrUseOfBaseControll({
        error: Error()
      }), BaseControll) : BaseControll) {
        //切换场景次数

        /** 生命周期队列 */
        static get instance() {
          if (!this._instance || this._instance == null) {
            this._instance = new _GlobalController("GlobalController");
          }

          return this._instance;
        } //重连超时句柄


        //实例化
        constructor(name) {
          super(name);
          this.countChangeScene = 0;
          this._cycleLifeQuene = [];
          this._handlerNetOutTime = null;
          (_crd && PkgLoaderManager === void 0 ? (_reportPossibleCrUseOfPkgLoaderManager({
            error: Error()
          }), PkgLoaderManager) : PkgLoaderManager).init();
        }

        init() {
          /** 初始化数据上报控制器 */
          (_crd && ReportController === void 0 ? (_reportPossibleCrUseOfReportController({
            error: Error()
          }), ReportController) : ReportController).init();
          /** 初始化音效控制器 */

          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).init();
          /** 初始化资源管理控制器 */

          (_crd && ResLoaderManager === void 0 ? (_reportPossibleCrUseOfResLoaderManager({
            error: Error()
          }), ResLoaderManager) : ResLoaderManager).init();
          /** 初始化Spine管理控制器 */

          (_crd && SpineAniManager === void 0 ? (_reportPossibleCrUseOfSpineAniManager({
            error: Error()
          }), SpineAniManager) : SpineAniManager).init();
          /** 初始化登录控制器 */

          (_crd && LoginController === void 0 ? (_reportPossibleCrUseOfLoginController({
            error: Error()
          }), LoginController) : LoginController).init();
          /** 初始化大厅控制器 */

          (_crd && HallController === void 0 ? (_reportPossibleCrUseOfHallController({
            error: Error()
          }), HallController) : HallController).init();
          /** 初始化游戏场景控制器 */

          (_crd && GameController === void 0 ? (_reportPossibleCrUseOfGameController({
            error: Error()
          }), GameController) : GameController).init();
          /** 初始化活动控制器 */

          (_crd && ActivityController === void 0 ? (_reportPossibleCrUseOfActivityController({
            error: Error()
          }), ActivityController) : ActivityController).init();
          /** 初始化弹窗控制器 */

          (_crd && PopupServers === void 0 ? (_reportPossibleCrUseOfPopupServers({
            error: Error()
          }), PopupServers) : PopupServers).init();
          /**初始化分享 */

          (_crd && ShareServers === void 0 ? (_reportPossibleCrUseOfShareServers({
            error: Error()
          }), ShareServers) : ShareServers).init();
          /**初始化活动/任务中心 */

          (_crd && TaskServers === void 0 ? (_reportPossibleCrUseOfTaskServers({
            error: Error()
          }), TaskServers) : TaskServers).init();
          /** 初始化物品控制器 */

          (_crd && GoodsDataServers === void 0 ? (_reportPossibleCrUseOfGoodsDataServers({
            error: Error()
          }), GoodsDataServers) : GoodsDataServers).init();
          /** 初始化信箱控制器 */

          (_crd && MessageServers === void 0 ? (_reportPossibleCrUseOfMessageServers({
            error: Error()
          }), MessageServers) : MessageServers).init();
          /** 初始化用户控制器 */

          (_crd && UserServers === void 0 ? (_reportPossibleCrUseOfUserServers({
            error: Error()
          }), UserServers) : UserServers).init();
          /** 初始化游戏选场控制器 */

          (_crd && SelectGameServers === void 0 ? (_reportPossibleCrUseOfSelectGameServers({
            error: Error()
          }), SelectGameServers) : SelectGameServers).init();
          /** 初始化数据上报控制器 */

          (_crd && ReportServers === void 0 ? (_reportPossibleCrUseOfReportServers({
            error: Error()
          }), ReportServers) : ReportServers).init();
          /** 初始化推荐弹窗控制器 */

          (_crd && RecommendPopServers === void 0 ? (_reportPossibleCrUseOfRecommendPopServers({
            error: Error()
          }), RecommendPopServers) : RecommendPopServers).init();
        }
        /**初始化添加事件绑定 */


        onInitModuleEvent() {
          //程序生命周期
          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).SYS_APP_LIFE, this.appLifeChange); //前后台事件

          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).SYS_SHOW_OR_HIDE, this.processApplicationActions); //网络状态切换

          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).SYS_NET_CHANGE_STATE, this.networkChange); //开启聊天服

          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_START_CONNECT, this.startGSConnect); //开启心跳

          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_HEART_BEAT_ONLOADING, this.heartbeatOnLoading); //发送数据

          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_SEND_MSG, this.sendSocketMsg); //切换场景

          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).VIEW_SCENE_TO_CHANGE, this.changeScene); //更新协议解析

          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).SYS_UPDATE_PROTOBUF, this.updatePBConf); //更新命令绑定映射

          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).SYS_UPDATE_CMDMAPPING, this.updateCmdMapping); //分包加载任务被中断

          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).SYS_PACKAGE_LOAD_TASK_CANCLE, this.receiveCanclePkgLoadTask); //更新心跳间隔

          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).SYS_UPDATE_HEART_TIME, this.updateHeartTime); //新大厅事件

          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_RECEIVE_MSG_PHPNEW, this.receiveNetPhpMsg); //推送消息

          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_RECEIVE_PHP_PUSH_MSG, this.receivePhpPushMsg); //广播支付银币

          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_RECEIVE_PHP_PUSH_PAY_MONEY, this.receivePhpPushPayMoney);
        }
        /** 程序的生命周期 */


        appLifeChange(event, param) {
          this.print(`*******【Sys cycle change to ${param}】*********`);

          if (param == (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
            error: Error()
          }), GConstants) : GConstants).AppRunLife.MainScence) {
            (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
              error: Error()
            }), GCache) : GCache).firstRunLoading = true;
            (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
              error: Error()
            }), Logger) : Logger).open();
            (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
              error: Error()
            }), GCache) : GCache).init();
            this._cycleLifeQuene = [];
          } else if (param == (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
            error: Error()
          }), GConstants) : GConstants).AppRunLife.RunScence) {
            //全局控制器初始化附加载
            this.init();
            this.addScheduler(0.01, (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).handler(this, this.onSchedulerUpdate));
          } else if (param == (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
            error: Error()
          }), GConstants) : GConstants).AppRunLife.Login_Will_Open) {// GCache.User.initSubClass();
            // GCache.reloadSubClass();
          } else if (param == (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
            error: Error()
          }), GConstants) : GConstants).AppRunLife.Login_Closed) {
            (_crd && OrderRecode === void 0 ? (_reportPossibleCrUseOfOrderRecode({
              error: Error()
            }), OrderRecode) : OrderRecode).instance.startRun();
          }

          this._cycleLifeQuene.push(param);

          this.print("当前生命周期队列", this._cycleLifeQuene);
        }
        /**前后台事件 */


        processApplicationActions(event, state) {
          this.print(`[系统前后台事件]:${state == (_crd && APPState === void 0 ? (_reportPossibleCrUseOfAPPState({
            error: Error()
          }), APPState) : APPState).SHOW && "前台" || "后台"}`);

          if (!(_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
            error: Error()
          }), GCache) : GCache).firstRunLoadSuccess) {
            return;
          }

          if (state == (_crd && APPState === void 0 ? (_reportPossibleCrUseOfAPPState({
            error: Error()
          }), APPState) : APPState).SHOW) {
            (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
              error: Error()
            }), AudioManager) : AudioManager).getInstance().resumeAll();
            (_crd && Platform === void 0 ? (_reportPossibleCrUseOfPlatform({
              error: Error()
            }), Platform) : Platform).getEnterOptionsSync();
          } else if (state == (_crd && APPState === void 0 ? (_reportPossibleCrUseOfAPPState({
            error: Error()
          }), APPState) : APPState).HIDE) {
            (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
              error: Error()
            }), AudioManager) : AudioManager).getInstance().pauseAll();
          }
        }
        /** 网络状态改变 */


        networkChange(event) {
          if ((_crd && Network === void 0 ? (_reportPossibleCrUseOfNetwork({
            error: Error()
          }), Network) : Network).instance.state == (_crd && NetworkState === void 0 ? (_reportPossibleCrUseOfNetworkState({
            error: Error()
          }), NetworkState) : NetworkState).OFFLINE) {
            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
              error: Error()
            }), AppEvent) : AppEvent).SYS_TOAST_TIP, {
              content: (_crd && GameTxt === void 0 ? (_reportPossibleCrUseOfGameTxt({
                error: Error()
              }), GameTxt) : GameTxt).netWorkDisconnected
            });
          }
        }
        /**开启网络连接 */


        startGSConnect(event, urlOption) {
          this.print("开启网络连接===>url= " + urlOption, "网络状态:" + (_crd && Network === void 0 ? (_reportPossibleCrUseOfNetwork({
            error: Error()
          }), Network) : Network).instance.state);

          if ((_crd && Network === void 0 ? (_reportPossibleCrUseOfNetwork({
            error: Error()
          }), Network) : Network).instance.state != (_crd && NetworkState === void 0 ? (_reportPossibleCrUseOfNetworkState({
            error: Error()
          }), NetworkState) : NetworkState).ONLINE) {
            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
              error: Error()
            }), AppEvent) : AppEvent).SYS_TOAST_TIP, {
              content: (_crd && GameTxt === void 0 ? (_reportPossibleCrUseOfGameTxt({
                error: Error()
              }), GameTxt) : GameTxt).netWorkErrorTips
            });
            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
              error: Error()
            }), AppEvent) : AppEvent).SYS_CLOSE_NETLOADING);
            return;
          }

          this.print("输出网络连接状态:", (_crd && GSocket === void 0 ? (_reportPossibleCrUseOfGSocket({
            error: Error()
          }), GSocket) : GSocket).instance.isConnected());

          if ((_crd && GSocket === void 0 ? (_reportPossibleCrUseOfGSocket({
            error: Error()
          }), GSocket) : GSocket).instance.isConnected() == false) {
            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
              error: Error()
            }), AppEvent) : AppEvent).SYS_SHOW_NETLOADING);
          }

          (_crd && GSocket === void 0 ? (_reportPossibleCrUseOfGSocket({
            error: Error()
          }), GSocket) : GSocket).instance.startConnect(urlOption);
        }
        /** 心跳 */


        heartbeatOnLoading(event, state = false) {
          (_crd && GSocket === void 0 ? (_reportPossibleCrUseOfGSocket({
            error: Error()
          }), GSocket) : GSocket).instance.heartbeatOnLoading(state);
        }
        /** 发送socket消息 */


        sendSocketMsg(event, param) {
          if (param && param.cmd) {
            (_crd && GSocket === void 0 ? (_reportPossibleCrUseOfGSocket({
              error: Error()
            }), GSocket) : GSocket).instance.sendMsg(param.cmd, param.body, param.timeout);
          }
        }
        /**切换场景 */


        changeScene(event, param) {
          this.print(`即将切换场景：>>>${param == null ? void 0 : param.next}`);

          if (this.countChangeScene < 1) {
            //首次切换 预加载资源
            (_crd && resLoader === void 0 ? (_reportPossibleCrUseOfresLoader({
              error: Error()
            }), resLoader) : resLoader).load((_crd && GameRes === void 0 ? (_reportPossibleCrUseOfGameRes({
              error: Error()
            }), GameRes) : GameRes).Prefab_Login.bundle, (_crd && GameRes === void 0 ? (_reportPossibleCrUseOfGameRes({
              error: Error()
            }), GameRes) : GameRes).Prefab_Login.path);
          }

          if (param && param.next) {
            director.preloadScene(param.next, (error, sceneAsset) => {
              if (!error) {
                (_crd && LayerManager === void 0 ? (_reportPossibleCrUseOfLayerManager({
                  error: Error()
                }), LayerManager) : LayerManager).clear();
                director.loadScene(param.next, (error, scene) => {
                  if (scene) {
                    GlobalController.countChangeScene = GlobalController.countChangeScene + 1;

                    if (param.success) {
                      param.success.call(param.next);
                    }
                  }
                });
              } else {
                (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
                  error: Error()
                }), Logger) : Logger).error(error);

                if (param.fail) {
                  param.fail.call(param.next);
                }
              }
            });
          } else {
            (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
              error: Error()
            }), Logger) : Logger).error("场景切换失败，param.next 不存在");

            if (param.fail) {
              param.fail.call(param.next);
            }
          }
        }
        /** 协议解析更新  0读 1写*/


        updatePBConf(event, type, arrayList) {
          if (type == 0) {
            (_crd && GPBWriteAndRead === void 0 ? (_reportPossibleCrUseOfGPBWriteAndRead({
              error: Error()
            }), GPBWriteAndRead) : GPBWriteAndRead).Read.updateCmdArrayFunc(arrayList);
          } else if (type == 1) {
            (_crd && GPBWriteAndRead === void 0 ? (_reportPossibleCrUseOfGPBWriteAndRead({
              error: Error()
            }), GPBWriteAndRead) : GPBWriteAndRead).Write.updateCmdArrayFunc(arrayList);
          }
        }
        /** 更新命令绑定映射 */


        updateCmdMapping(event, cmdBindingList) {
          if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).table_isEmpty(cmdBindingList)) {
            (_crd && GCmdMapping === void 0 ? (_reportPossibleCrUseOfGCmdMapping({
              error: Error()
            }), GCmdMapping) : GCmdMapping).initCommonMapping();
            return;
          }

          cmdBindingList = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).table_verify(cmdBindingList);
          (_crd && GCmdMapping === void 0 ? (_reportPossibleCrUseOfGCmdMapping({
            error: Error()
          }), GCmdMapping) : GCmdMapping).pushHeadMapping(cmdBindingList);
        }
        /** 更新心跳间隔 */


        updateHeartTime(event, time) {
          (_crd && GSocket === void 0 ? (_reportPossibleCrUseOfGSocket({
            error: Error()
          }), GSocket) : GSocket).instance.setHeartTime(time);
        }
        /** 定时器的回调 */


        onSchedulerUpdate() {
          (_crd && GSocket === void 0 ? (_reportPossibleCrUseOfGSocket({
            error: Error()
          }), GSocket) : GSocket).instance.checkReceiveQueve();
        }
        /** 收到php端的消息 */


        receiveNetPhpMsg(event, respData, reqData) {
          if (!respData.cmd || !respData.body) {
            return;
          }

          let reqSSID = null; //php请求参数

          if (reqData) {
            reqSSID = reqData.ssid;
          }

          let errorInfo = this.generateErrorInfo(respData.body, reqSSID);
          let eventBindindCmd = (_crd && GlobalCMDHead === void 0 ? (_reportPossibleCrUseOfGlobalCMDHead({
            error: Error()
          }), GlobalCMDHead) : GlobalCMDHead).PHP_CMD_CONSTANT + respData.cmd;
          let p_ISSuccess = false;
          let p_RespData = errorInfo;
          let p_ReqParam = reqData;

          if (!errorInfo.errorTips && respData.body) {
            p_ISSuccess = true;
            p_RespData = respData.body["info"];
          }

          if (eventBindindCmd == (_crd && GlobalCMD === void 0 ? (_reportPossibleCrUseOfGlobalCMD({
            error: Error()
          }), GlobalCMD) : GlobalCMD).PHP_KEEPALIVE) {
            (_crd && GSocket === void 0 ? (_reportPossibleCrUseOfGSocket({
              error: Error()
            }), GSocket) : GSocket).instance.stopKeepAliveTimeOuter();
          }

          (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
            error: Error()
          }), Logger) : Logger).logModel(`[NetReceive] ：收到来自大厅的消息cmd = {[10进制] ${eventBindindCmd} [16进制] ${(_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).number_formatToHex(eventBindindCmd)}} action = ${(_crd && GCmdMapping === void 0 ? (_reportPossibleCrUseOfGCmdMapping({
            error: Error()
          }), GCmdMapping) : GCmdMapping).getActionByCmd(eventBindindCmd)}`);
          let eventID = (_crd && GCmdMapping === void 0 ? (_reportPossibleCrUseOfGCmdMapping({
            error: Error()
          }), GCmdMapping) : GCmdMapping).getEventIDByCmd(eventBindindCmd);

          if (eventID) {
            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).dispatch(eventID, p_ISSuccess, p_RespData, p_ReqParam);
          } else {
            (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
              error: Error()
            }), Logger) : Logger).logNet(`undifine ==>收到cmd = ${eventBindindCmd} 的消息 但是没有找到对应的事件绑定`);
          }
        }
        /**
         * 获取通用错误信息
         * @param packetInfo 下发的数据包
         * @param ssid 请求的ssid
         */


        generateErrorInfo(packetInfo, ssid) {
          let errorArray = {
            errorType: "",
            errorTips: null,
            extraInfo: {}
          };

          if (!packetInfo) {
            return errorArray;
          }

          let errorType = packetInfo.type;
          let errorTips = null;
          let status = packetInfo.status;

          if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).isNull(errorType)) {
            errorType = "";
          }

          if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).isNull(status)) {
            status = 1;
          }

          if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).isArray(packetInfo) == false && (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).isObject(packetInfo) == false) {
            errorTips = (_crd && GameTxt === void 0 ? (_reportPossibleCrUseOfGameTxt({
              error: Error()
            }), GameTxt) : GameTxt).networkReqError;
          } else {
            if (status == 1) {
              errorTips = packetInfo.msg;
            }

            if (errorTips == "") {
              errorType = errorType.toString();
              let majorType = errorType.substring(0, 0);
              let minorType = errorType.substring(2, 2);
              errorType = `phpError${majorType}_${minorType}`;
              errorTips = (_crd && GameTxt === void 0 ? (_reportPossibleCrUseOfGameTxt({
                error: Error()
              }), GameTxt) : GameTxt)[errorType] || (_crd && GameTxt === void 0 ? (_reportPossibleCrUseOfGameTxt({
                error: Error()
              }), GameTxt) : GameTxt).networkReqError;
            }

            if (errorType == 2 && (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).string_isEmpty(ssid) == false) {
              //会话超时
              //登录成功后会话超时 需要重新登录
              this.print("会话超时 需要重新登录 还没做");
            }
          }

          errorArray = {
            errorType: errorType,
            errorTips: errorTips,
            extraInfo: packetInfo.info || {}
          };
          return errorArray;
        }
        /** receive：PHP推送消息 */


        receivePhpPushMsg(event, respData) {
          if (!respData.result) {
            return;
          }

          respData.result = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).table_verify(respData.result);
          let mtype = respData.result["mtype"];
          this.print("PHP推送: 收到一条消息 mtype = " + mtype);
          let str = "PHP推送:";
          let body = null;

          switch (mtype) {
            //1 和 17 是私信
            case 1:
              //此时是私信,兼容老四川
              break;

            case 2:
              //此时是房间任务消息
              body = respData.result["info"];
              this.dump(body, str + "房间任务消息");
              break;

            case 6:
            case 10:
            case 11:
            case 12:
              break;

            case 13:
              let field = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                error: Error()
              }), Utils) : Utils).number_valueOf(respData.result["info"]["field"], null); //0:银币, 1:金条 2:兑换券

              let value = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                error: Error()
              }), Utils) : Utils).number_valueOf(respData.result["info"]["value"], null);

              if (!(_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                error: Error()
              }), Utils) : Utils).isNull(field) && !(_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                error: Error()
              }), Utils) : Utils).isNull(value)) {
                if (field == 0 || field == 1 || field == 2) {
                  (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
                    error: Error()
                  }), GCache) : GCache).User.updateUserMoneyByID(field, value);
                }
              }

              this.dump(body, str + "刷新用户信息");
              break;

            case 15:
              break;

            case 16:
              body = respData.result["info"];
              this.dump(body, str + "完成牌局任务");
              break;

            case 17:
              body = respData.result["info"];
              this.dump(body, str + "收到私信");
              (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
                error: Error()
              }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
                error: Error()
              }), AppEvent) : AppEvent).NET_CMD_REQ_WATCH);
              break;

            case 19:
              this.dump(body, str + "代理商注册成功");
              break;

            case 20:
              body = respData.result["info"];
              body["ip"] = body["ip"];
              body["port"] = body["port"];
              this.dump(body, str + "立即切换大厅IP与端口");
              break;

            case 21:
              break;

            case 27:
              body = respData.result["info"];
              this.dump(body, str + "推送银元场当前牌局数");
              break;

            case 28:
              this.dump(body, str + "新物品箱 线下物品兑换推送");
              break;

            case 29:
              this.dump(body, str + "物品箱 刷新物品箱数据 入口显示小红点消息体 ");
              break;

            case 30:
              this.dump(body, str + "物品箱 领奖记录入口显示小红点");
              break;

            case 31:
              body = respData.result["info"];
              body["agentphone"] = body["agentphone"];
              this.dump(body, str + "代理商电话");
              break;

            case 32:
              this.dump(body, str + "推送银元场当前牌局数");
              break;

            case 34:
              this.dump(body, str + "接收子游戏 | 子模块的推送信息");
              break;

            case 36:
              body = respData.result["info"];
              body["propsId"] = body["propsId"];
              this.dump(body, str + "装扮道具Id");
              break;

            case 999:
              body = respData.result["info"];
              this.dump(body, str + "刷新服务器地址");
              break;

            case 998:
              body = respData.result["info"];
              let param = {
                txt_desc: body,
                //正文内容
                alignLeftTop: true,
                notshowClose: true,
                buttonsMap: [{}]
              };
              (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
                error: Error()
              }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
                error: Error()
              }), AppEvent) : AppEvent).VIEW_UI_OPEN, (_crd && UIID === void 0 ? (_reportPossibleCrUseOfUIID({
                error: Error()
              }), UIID) : UIID).PopWindow, param);
              this.dump(body, str + "推送弹窗");
              break;

            case 996:
              body = respData.result["giftTip"];
              this.dump(body, str + "礼包推送文案(用于已拥有的头像框，先弹购买成功，再弹折现成其他道具)");
              break;

            case 997:
              body = {
                notice_msg: respData.result["notice_msg"],
                notice_type: respData.result["notice_type"]
              };
              this.dump(body, str + "强制实名弹窗");
              break;

            case 1001:
              this.dump(body, str + "存钱罐集满了");
              break;

            default:
              this.print(str + "未识别的推送数据 ");
              break;
          }
        }
        /** 广播支付银币 */


        receivePhpPushPayMoney(event, respData) {
          respData = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).table_verify(respData);
          this.print("PHP推送: 广播支付银币", respData);
          let detailData = (_crd && Encrypt === void 0 ? (_reportPossibleCrUseOfEncrypt({
            error: Error()
          }), Encrypt) : Encrypt).JsonDecode(respData.data);
          this.print("PHP推送: 数据解析", detailData);

          switch (respData.type) {
            case 0:
              //老的支付广播接口
              break;

            case 1:
              //购买金条
              break;

            case 3:
              //购买VIP
              break;

            case 4:
              //新的支付广播接口(特价礼包)
              this.detailPaySuccess(detailData);
              break;

            case 6:
              //首充购买推送
              break;

            case 7:
              //保险箱购买
              break;

            case 8:
              //充值礼包推送(首充)
              this.detailBuyGiftSuccess(detailData);
              break;

            case 9:
              //激活破产回馈
              break;

            case 10:
              //存钱罐
              break;

            default:
              break;
          }
        }
        /** 处理支付成功 */


        detailPaySuccess(detailData) {
          this.print("处理支付成功====>", detailData);

          if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).table_isEmpty(detailData)) {
            return;
          } //获得的物品信息


          let awardData = [];

          if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).number_valueOf(detailData["gold"]) > 0) {
            let prop = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).clone((_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
              error: Error()
            }), GConstants) : GConstants).GoodsType.SILVER_COIN);
            let propInfo = (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
              error: Error()
            }), GCache) : GCache).PropsConf.getPropsInfoById(prop["id"]);

            if (propInfo && propInfo["item_name"]) {
              let oneData = {
                icon: propInfo["url"],
                name: propInfo["item_name"],
                num: (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                  error: Error()
                }), Utils) : Utils).number_valueOf(detailData["gold"])
              };
              awardData.push(oneData);
            }
          }

          if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).number_valueOf(detailData["diamond"]) > 0) {
            let prop = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).clone((_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
              error: Error()
            }), GConstants) : GConstants).GoodsType.DIAMOND);
            let propInfo = (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
              error: Error()
            }), GCache) : GCache).PropsConf.getPropsInfoById(prop["id"]);

            if (propInfo && propInfo["item_name"]) {
              let oneData = {
                icon: propInfo["url"],
                name: propInfo["item_name"],
                num: (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                  error: Error()
                }), Utils) : Utils).number_valueOf(detailData["diamond"])
              };
              awardData.push(oneData);
            }
          }

          if ((_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
            error: Error()
          }), GCache) : GCache).Desk && (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
            error: Error()
          }), GCache) : GCache).Desk.mySelfPlayer) {
            let moneyID = (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
              error: Error()
            }), GCache) : GCache).Desk.MoneyTypeID;
            let money = (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
              error: Error()
            }), GCache) : GCache).User.getUserMoneyByID(moneyID);
            (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
              error: Error()
            }), GCache) : GCache).Desk.mySelfPlayer.updateInfo({
              "money": money
            });
          }

          let payMoney = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).number_valueOf(detailData["gold"]); //获得银币

          let award_gold = 0; //加赠得到的银币信息

          let award_diamond = 0; //获得的兑换券新

          let award_props = {}; //加赠信息
          //合并加赠信息

          let privilege = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).table_verify(detailData.privilege);

          if (privilege["status"] != null) {
            award_gold = award_gold + (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).number_valueOf(privilege["gold"]);
            award_diamond = award_diamond + (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).number_valueOf(privilege["diamond"]);

            if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).table_isEmpty(privilege["props"]) == false) {
              award_props = privilege["props"];
            }
          }

          let bouns = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).table_verify(detailData["bouns"]);
          award_gold = award_gold + (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).number_valueOf(bouns["gold"], 0);
          award_diamond = award_diamond + (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).number_valueOf(bouns["diamond"], 0);

          if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).table_isEmpty(bouns["props"]) == false) {
            for (let key in bouns["props"]) {
              if (Object.prototype.hasOwnProperty.call(bouns["props"], key)) {
                if (isNaN(Number(key)) == false) {
                  award_props[Number(key)] = bouns["props"][key];
                } else {
                  award_props[key] = bouns["props"][key];
                }
              }
            }
          }

          let desc = String("成功购买*银币").replace("*", (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).string_moneyToShortNumber(payMoney, true)); //加赠银币

          if (award_gold > 0) {
            desc = desc + String(",加赠*银币").replace("*", String(award_gold));
            let prop = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).clone((_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
              error: Error()
            }), GConstants) : GConstants).GoodsType.SILVER_COIN);
            let propInfo = (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
              error: Error()
            }), GCache) : GCache).PropsConf.getPropsInfoById(prop["id"]);

            if (propInfo && propInfo["item_name"]) {
              let oneData = {
                icon: propInfo["url"],
                name: propInfo["item_name"],
                num: award_gold,
                newAdd: true
              };
              awardData.push(oneData);
            }
          } //加赠兑换券


          if (award_diamond > 0) {
            desc = desc + String(",加赠*兑换券").replace("*", String(award_diamond));
            let prop = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).clone((_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
              error: Error()
            }), GConstants) : GConstants).GoodsType.DIAMOND);
            let propInfo = (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
              error: Error()
            }), GCache) : GCache).PropsConf.getPropsInfoById(prop["id"]);

            if (propInfo && propInfo["item_name"]) {
              let oneData = {
                icon: propInfo["url"],
                name: propInfo["item_name"],
                num: award_diamond,
                newAdd: true
              };
              awardData.push(oneData);
            }
          } //加赠道具


          for (let propID in award_props) {
            if (Object.prototype.hasOwnProperty.call(award_props, propID)) {
              let num = award_props[propID];
              let propInfo = (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
                error: Error()
              }), GCache) : GCache).PropsConf.getPropsInfoById(propID);

              if (propInfo && propInfo["item_name"]) {
                desc = desc + ",加赠" + propInfo["item_name"] + "x" + num;
                let oneData = {
                  icon: propInfo["url"],
                  name: propInfo["item_name"],
                  num: num,
                  newAdd: true
                };
                awardData.push(oneData);
              }
            }
          }

          console.log("支付成功，描述文本:" + desc);
          console.log("支付成功，获得的物品:" + awardData);

          if (awardData.length > 0) {
            console.log("显示恭喜获得===>", awardData); //通知:恭喜获得

            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
              error: Error()
            }), AppEvent) : AppEvent).VIEW_UI_OPEN, (_crd && UIID === void 0 ? (_reportPossibleCrUseOfUIID({
              error: Error()
            }), UIID) : UIID).GongXiHuoDePrefab, awardData);
          } //请求更新道具 待定


          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_REQ_PROPS_INFO); //更新本地资产

          if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).isNotNull(detailData["cur_money"])) {
            let value = 0;
            value = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).number_valueOf(detailData["cur_money"]);
            (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
              error: Error()
            }), GCache) : GCache).User.updateUserMoneyByID(0, value);
          }
        } //处理礼包支付成功 type = 8


        detailBuyGiftSuccess(detailData) {
          this.print("detailBuyGiftSuccess 处理支付成功====>", detailData);

          if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).table_isEmpty(detailData)) {
            return;
          } //获得的物品信息


          let awardData = [];

          if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).isNotNull(detailData["buy"])) {
            for (let key in detailData["buy"]) {
              if (Object.prototype.hasOwnProperty.call(detailData["buy"], key)) {
                let num = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                  error: Error()
                }), Utils) : Utils).number_valueOf(detailData["buy"][key]);

                if (num > 0) {
                  let conf = (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
                    error: Error()
                  }), GCache) : GCache).PropsConf.getPropsInfoById(key);
                  let icon = detailData["gicons"][key];

                  if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                    error: Error()
                  }), Utils) : Utils).string_isEmpty(icon)) {
                    icon = conf["url"];
                  }

                  let tmp = {
                    num: num,
                    icon: icon,
                    name: conf['item_name'],
                    newAdd: false
                  };
                  awardData.push(tmp);
                }
              }
            }
          }

          if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).isNotNull(detailData["extra"])) {
            for (let key in detailData["extra"]) {
              if (Object.prototype.hasOwnProperty.call(detailData["extra"], key)) {
                let obj = detailData["extra"][key];
                let gname = obj['gname'];
                let num = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                  error: Error()
                }), Utils) : Utils).number_valueOf(obj['gnum']);
                let icon = obj['gicon'];

                if (num > 0) {
                  let tmp = {
                    name: gname,
                    num: num,
                    icon: icon,
                    newAdd: true
                  };
                  awardData.push(tmp);
                }
              }
            }
          } //恭喜获得


          if (awardData.length > 0) {
            console.log("显示恭喜获得===>", awardData); //通知:恭喜获得

            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
              error: Error()
            }), AppEvent) : AppEvent).VIEW_UI_OPEN, (_crd && UIID === void 0 ? (_reportPossibleCrUseOfUIID({
              error: Error()
            }), UIID) : UIID).GongXiHuoDePrefab, awardData);
          }

          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_REQ_PROPS_INFO); //更新本地资产

          if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).isNotNull(detailData["total_property"])) {
            for (let key in detailData["total_property"]) {
              if (Object.prototype.hasOwnProperty.call(detailData["total_property"], key)) {
                let value = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                  error: Error()
                }), Utils) : Utils).number_valueOf(detailData["total_property"][key]);
                (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
                  error: Error()
                }), GCache) : GCache).User.updateUserMoneyByID(Number(key), value);
              }
            }
          }
        } // function GlobalSocketMessageHandler:_paySucc(detailInfo,func)
        // 	local payMoney = tonumber(detailInfo.gold) or 0; --支付银币
        // 	local cur_money = tonumber(detailInfo.cur_money) or kUserInfoData:getMoney();
        // 	local cur_diamond = tonumber(detailInfo.diamond) or kUserInfoData:getDiamond();
        // 	kUserInfoData:setMoney(cur_money);
        // 	kUserInfoData:setDiamond(cur_diamond);
        // 	local award_gold = 0; -- 获得的银币信息
        // 	local award_diamond = 0; -- 获得的兑换券新
        // 	local award_props = {}; -- 加赠信息
        // 	-- 合并加赠信息
        // 	local privilege = table.verify(detailInfo.privilege);
        // 	if privilege.status then
        // 		award_gold = award_gold + number.valueOf(privilege.gold, 0);
        // 		award_diamond = award_diamond + number.valueOf(privilege.diamond, 0);
        // 		award_props = CombineTables(award_props, table.verify(privilege.props) );
        // 	end
        // 	local bouns = table.verify(detailInfo.bouns);
        // 	award_gold = award_gold + number.valueOf(bouns.gold, 0);
        // 	award_diamond = award_diamond + number.valueOf(bouns.diamond, 0);
        // 	award_props = CombineTables(award_props, table.verify(bouns.props) );
        // 	local desc = string.format("成功购买%s银币", ToolKit.skipMoneyEx2(payMoney) );
        // 	if award_gold > 0 then
        // 		desc = desc .. string.format(",加赠%s银币", award_gold);
        // 	end
        // 	if award_diamond > 0 then
        // 		desc = desc .. string.format(",加赠%s兑换券", award_diamond);
        // 	end
        // 	for propClassifyId, num in pairs(award_props) do
        // 		local propInfo = RechargeDataInterface.getInstance():getGoodInfoByTypeId(propClassifyId);
        // 		if propInfo and propInfo.item_name then
        // 			desc = desc .. ",加赠".. propInfo.item_name .."x" ..num;
        // 		end
        // 	end
        // 	local data = {};
        // 	data.title = detailInfo.pay_succ_tips;         --标题提示信息
        // 	data.rightTitle = "内容说明";
        // 	data.topTips = desc;                             --提示信息
        // 	data.rightContent = detailInfo.pay_succ_explain;
        // 	data.adUrl = detailInfo.pay_succ_pic;
        // 	data.jumpcode = detailInfo.pay_succ_jumpcode;
        // 	data.btnText = detailInfo.btn_text;
        // 	if MessageBox.isShowDirect() then
        // 		RechargeSucPop.show(data);
        // 	end
        // 	if func then
        // 		func()
        // 	end
        // end

        /** 取消了分包加载任务 */


        receiveCanclePkgLoadTask(event, taskID) {
          if (taskID == (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
            error: Error()
          }), GConstants) : GConstants).PkgLoaderTaskList.Game) {
            this.print("游戏分包任务加载取消了 重置cmd绑定命令和pb协议解析"); //初始化绑定绑定映射

            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
              error: Error()
            }), AppEvent) : AppEvent).SYS_UPDATE_CMDMAPPING);
            (_crd && GPBWriteAndRead === void 0 ? (_reportPossibleCrUseOfGPBWriteAndRead({
              error: Error()
            }), GPBWriteAndRead) : GPBWriteAndRead).Write.initCommonCmd(_crd && GlobalHeadCmdBinding === void 0 ? (_reportPossibleCrUseOfGlobalHeadCmdBinding({
              error: Error()
            }), GlobalHeadCmdBinding) : GlobalHeadCmdBinding, true);
            (_crd && GPBWriteAndRead === void 0 ? (_reportPossibleCrUseOfGPBWriteAndRead({
              error: Error()
            }), GPBWriteAndRead) : GPBWriteAndRead).Read.initCommonCmd(_crd && GlobalHeadCmdBinding === void 0 ? (_reportPossibleCrUseOfGlobalHeadCmdBinding({
              error: Error()
            }), GlobalHeadCmdBinding) : GlobalHeadCmdBinding, true); //初始化UI配置

            (_crd && LayerManager === void 0 ? (_reportPossibleCrUseOfLayerManager({
              error: Error()
            }), LayerManager) : LayerManager).initUIConfig(_crd && UIConfigData === void 0 ? (_reportPossibleCrUseOfUIConfigData({
              error: Error()
            }), UIConfigData) : UIConfigData);
          }
        }

      };
      _GlobalController._instance = null;

      _export("GlobalController", GlobalController = _GlobalController.instance);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=b0b8baaab507ca029e21a785c4dc64c98c037a7f.js.map