System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, GCache, AppEvent, ClientInfo, EventManager, Utils, BaseControll, GlobalCMD, UserServers, _crd;

  function _reportPossibleCrUseOfGCache(extras) {
    _reporterNs.report("GCache", "../../cache/GCache", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAppEvent(extras) {
    _reporterNs.report("AppEvent", "../../config/AppEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfClientInfo(extras) {
    _reporterNs.report("ClientInfo", "../../config/GameConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventManager(extras) {
    _reporterNs.report("EventManager", "../../framework/manager/EventManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUtils(extras) {
    _reporterNs.report("Utils", "../../framework/Utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseControll(extras) {
    _reporterNs.report("BaseControll", "../../framework/vc/BaseController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGlobalCMD(extras) {
    _reporterNs.report("GlobalCMD", "../gnet/GlobalCMD", _context.meta, extras);
  }

  _export("UserServers", void 0);

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
      ClientInfo = _unresolved_4.ClientInfo;
    }, function (_unresolved_5) {
      EventManager = _unresolved_5.EventManager;
    }, function (_unresolved_6) {
      Utils = _unresolved_6.Utils;
    }, function (_unresolved_7) {
      BaseControll = _unresolved_7.BaseControll;
    }, function (_unresolved_8) {
      GlobalCMD = _unresolved_8.GlobalCMD;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e5622+2NqZHCoBdGAnfAH4h", "UserServer", undefined);

      _export("UserServers", UserServers = class UserServers extends (_crd && BaseControll === void 0 ? (_reportPossibleCrUseOfBaseControll({
        error: Error()
      }), BaseControll) : BaseControll) {
        static getInstance() {
          if (!this._instance || this._instance == null) {
            this._instance = new UserServers("UserServers");
          }

          return this._instance;
        }

        static init() {
          if (this._instance) {
            this._instance.clear();
          }

          this._instance = null;
          UserServers.getInstance();
          return;
        }

        onInitModuleEvent() {
          //请求拉取用户背包数据
          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_CMD_REQ_USER_BACKPACK, this.reqUserBagPack); //请求拉取用户背包数据返回

          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_CMD_RESP_USER_BACKPACK, this.respUserBagPack); //推送消息

          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_RECEIVE_PHP_SERVER_USER_VIP_INFO, this.receiveServerUserVipInfo);
        }
        /** 请求拉取用户背包数据 */


        reqUserBagPack(event = null) {
          console.log('背包数据请求');
          let param = {
            action: "bag.boxlist",
            page: 1,
            pagenum: 1000,
            // 无实际背包页面只拉取一页查询页设置条数为1000
            hall_version: (_crd && ClientInfo === void 0 ? (_reportPossibleCrUseOfClientInfo({
              error: Error()
            }), ClientInfo) : ClientInfo).HallVer,
            timestamp: (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).time(),
            appid: (_crd && ClientInfo === void 0 ? (_reportPossibleCrUseOfClientInfo({
              error: Error()
            }), ClientInfo) : ClientInfo).PlatFormAppID,
            mid: (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
              error: Error()
            }), GCache) : GCache).User.getUserMid(),
            ssid: (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
              error: Error()
            }), GCache) : GCache).User.getDataUser("ssid", "")
          };
          let sendMsg = {
            cmd: (_crd && GlobalCMD === void 0 ? (_reportPossibleCrUseOfGlobalCMD({
              error: Error()
            }), GlobalCMD) : GlobalCMD).PHP_PACKAGE_BAGLIST,
            body: param
          };
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_SEND_MSG, sendMsg);
        }
        /** 请求拉取用户背包数据返回 */


        respUserBagPack(event, isSuccess, respData, reqData) {
          console.log('背包道具数据的返回', isSuccess, respData);
          reqData = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).table_verify(reqData);
          reqData["code"] = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).table_verify(reqData["code"]);

          if (respData) {
            (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
              error: Error()
            }), GCache) : GCache).BackPack.updateBagData(respData.box); //赋值最新的背包数据
          }
        } //广播:server返回用户VIP详细信息


        receiveServerUserVipInfo(event, isSuccess, respData, reqData) {
          console.log('广播:server返回用户VIP详细信息的返回', isSuccess, respData);

          if (!isSuccess) {
            return;
          } //通知更新背包道具 


          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_CMD_REQ_USER_BACKPACK);
        }

      });

      UserServers._instance = null;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=0f1f3fdd73a5a34104826a206f850df8b00e734c.js.map