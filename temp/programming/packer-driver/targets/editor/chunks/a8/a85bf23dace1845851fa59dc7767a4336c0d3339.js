System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, GCache, AppEvent, EventManager, BaseControll, GlobalCMD, SelectGameServers, _crd;

  function _reportPossibleCrUseOfGCache(extras) {
    _reporterNs.report("GCache", "../../cache/GCache", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAppEvent(extras) {
    _reporterNs.report("AppEvent", "../../config/AppEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventManager(extras) {
    _reporterNs.report("EventManager", "../../framework/manager/EventManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseControll(extras) {
    _reporterNs.report("BaseControll", "../../framework/vc/BaseController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGlobalCMD(extras) {
    _reporterNs.report("GlobalCMD", "../gnet/GlobalCMD", _context.meta, extras);
  }

  _export("SelectGameServers", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      GCache = _unresolved_2.GCache;
    }, function (_unresolved_3) {
      AppEvent = _unresolved_3.AppEvent;
    }, function (_unresolved_4) {
      EventManager = _unresolved_4.EventManager;
    }, function (_unresolved_5) {
      BaseControll = _unresolved_5.BaseControll;
    }, function (_unresolved_6) {
      GlobalCMD = _unresolved_6.GlobalCMD;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9c7e01FK9ZDWqwO8rYHYk2J", "SelectGameServers", undefined);

      /**
       * Name = SelectGameServers
       * URL = db://assets/proj/servers/SelectGameServers.ts
       * Time = Wed 2023 07.25 19:03:18 GMT+0800 (中国标准时间)
       * Author = xueya
       * 选场相关服务
       */
      _export("SelectGameServers", SelectGameServers = class SelectGameServers extends (_crd && BaseControll === void 0 ? (_reportPossibleCrUseOfBaseControll({
        error: Error()
      }), BaseControll) : BaseControll) {
        static getInstance() {
          if (!this._instance || this._instance == null) {
            this._instance = new SelectGameServers("SelectGameServers");
          }

          return this._instance;
        } //实例化


        constructor(name) {
          super(name);
        }

        static init() {
          if (this._instance) {
            this._instance.clear();
          }

          this._instance = null;
          SelectGameServers.getInstance();
          return;
        }
        /**初始化添加事件绑定 */


        onInitModuleEvent() {
          // //请求获取游戏列表信息
          //请求快速开始配置
          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_REQ_HALL_QUICK_START_CONFIG, this.reqHallQuickStartConfig); //快速开始配置返回

          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_FORWARD_HALL_QUICK_START_CONFIG, this.respHallQuickStartConfig);
        } //请求快速开始配置


        reqHallQuickStartConfig(event) {
          let sendMsg = {
            cmd: (_crd && GlobalCMD === void 0 ? (_reportPossibleCrUseOfGlobalCMD({
              error: Error()
            }), GlobalCMD) : GlobalCMD).PHP_GET_FAST_START_CONFIG,
            body: {}
          };
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_SEND_MSG, sendMsg);
        } //快速开始配置返回


        respHallQuickStartConfig(event, isSuccess, respData, reqData) {
          this.dump(respData, "快速开始配置返回" + isSuccess);

          if (isSuccess) {
            (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
              error: Error()
            }), GCache) : GCache).SelectGame.updateServerGameConfig(respData.info); // EventManager.dispatch(AppEvent.HALL_UPDATE_GAME_CONFIG)
          }
        }

      });

      SelectGameServers._instance = null;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a85bf23dace1845851fa59dc7767a4336c0d3339.js.map