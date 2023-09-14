System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, GCache, AppEvent, ClientInfo, UIID, Md5, EventManager, BaseControll, GlobalCMD, TaskServers, _crd;

  function _reportPossibleCrUseOfGCache(extras) {
    _reporterNs.report("GCache", "../../cache/GCache", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAppEvent(extras) {
    _reporterNs.report("AppEvent", "../../config/AppEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfClientInfo(extras) {
    _reporterNs.report("ClientInfo", "../../config/GameConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIID(extras) {
    _reporterNs.report("UIID", "../../config/UIConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMd(extras) {
    _reporterNs.report("Md5", "../../framework/crypto/Md5", _context.meta, extras);
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

  _export("TaskServers", void 0);

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
      UIID = _unresolved_5.UIID;
    }, function (_unresolved_6) {
      Md5 = _unresolved_6.Md5;
    }, function (_unresolved_7) {
      EventManager = _unresolved_7.EventManager;
    }, function (_unresolved_8) {
      BaseControll = _unresolved_8.BaseControll;
    }, function (_unresolved_9) {
      GlobalCMD = _unresolved_9.GlobalCMD;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a12bf9n0JZIe5J2Mj9xdQzE", "TaskServer", undefined);

      _export("TaskServers", TaskServers = class TaskServers extends (_crd && BaseControll === void 0 ? (_reportPossibleCrUseOfBaseControll({
        error: Error()
      }), BaseControll) : BaseControll) {
        static getInstance() {
          if (!this._instance || this._instance == null) {
            this._instance = new TaskServers("TaskServers");
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
          TaskServers.getInstance();
          return;
        }
        /**初始化添加事件绑定 */


        onInitModuleEvent() {
          //获取活动中心配置数据
          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_CMD_REQ_TASK_ACT_CONFIG, this.reqAtyCenterConfig); //获取活动中心配置数据返回

          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_CMD_RESP_TASK_ACT_CONFIG, this.respAtyCenterConfig); //请求添加桌面领奖

          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_REQ_ADDDESK_AWARD, this.reqAddDeskAWard);
          /** 请求添加桌面领奖领奖返回 */

          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_RESP_ADDDESK_AWARD, this.respAddDeskAWard);
        }
        /** 获取活动中心配置数据 */


        reqAtyCenterConfig(event = null) {
          let sendMsg = {
            cmd: (_crd && GlobalCMD === void 0 ? (_reportPossibleCrUseOfGlobalCMD({
              error: Error()
            }), GlobalCMD) : GlobalCMD).PHP_ACTIVITY_TASK_CONFIG,
            body: {}
          };
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_SEND_MSG, sendMsg);
          this.print("请求活动中心配置");
        }
        /**获取活动中心配置数据返回 */


        respAtyCenterConfig(event, isSuccess, respData, reqData) {
          this.print("获取活动中心配置返回", isSuccess, respData, reqData);

          if (isSuccess && respData) {
            (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
              error: Error()
            }), GCache) : GCache).TaskInfo.updateActivityCenterData(respData);

            let _activity_id = (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
              error: Error()
            }), GCache) : GCache).TaskInfo.checkUserReceiveInToByDesk();

            console.log('添加桌面发奖成立条件', !!_activity_id);

            if (!!_activity_id) {
              (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
                error: Error()
              }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
                error: Error()
              }), AppEvent) : AppEvent).NET_REQ_ADDDESK_AWARD, _activity_id);
            }

            ;
          }
        }
        /** 请求添加桌面领奖 */


        reqAddDeskAWard(event, activity_id) {
          let _mark = "123!@#*&908byaa" + activity_id + (_crd && ClientInfo === void 0 ? (_reportPossibleCrUseOfClientInfo({
            error: Error()
          }), ClientInfo) : ClientInfo).PlatFormAppID + (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
            error: Error()
          }), GCache) : GCache).User.getUserMid();

          let sendMsg = {
            cmd: (_crd && GlobalCMD === void 0 ? (_reportPossibleCrUseOfGlobalCMD({
              error: Error()
            }), GlobalCMD) : GlobalCMD).PHP_ADD_DESK_AWARD,
            body: {
              activity_id: activity_id,
              mark: (_crd && Md5 === void 0 ? (_reportPossibleCrUseOfMd({
                error: Error()
              }), Md5) : Md5)(_mark)
            }
          };
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_SEND_MSG, sendMsg);
        }
        /** 请求添加桌面领奖返回*/


        respAddDeskAWard(event, isSuccess, respData, reqData) {
          console.log('进入大厅添加应用到桌面奖励返回', isSuccess, respData);

          if (!isSuccess) {
            console.log('进入大厅发奖失败', respData);
            return;
          }

          let _add_desk_reward = [];
          respData['reward'].forEach(item => {
            _add_desk_reward.push({
              name: item.name,
              icon: item.icon,
              num: item.num
            });
          });
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).VIEW_UI_OPEN, (_crd && UIID === void 0 ? (_reportPossibleCrUseOfUIID({
            error: Error()
          }), UIID) : UIID).GongXiHuoDePrefab, _add_desk_reward);
        }

      });

      TaskServers._instance = null;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=07fee18518be0859fb0e1a5424fa20ca06ea09f4.js.map