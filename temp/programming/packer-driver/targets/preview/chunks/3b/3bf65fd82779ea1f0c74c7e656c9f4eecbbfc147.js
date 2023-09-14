System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, GCache, AppEvent, GConstants, UIID, Utils, Encrypt, EventManager, BaseControll, GlobalCMD, MessageServers, _crd;

  function _reportPossibleCrUseOfGCache(extras) {
    _reporterNs.report("GCache", "../../cache/GCache", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAppEvent(extras) {
    _reporterNs.report("AppEvent", "../../config/AppEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGConstants(extras) {
    _reporterNs.report("GConstants", "../../config/GameConstant", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIID(extras) {
    _reporterNs.report("UIID", "../../config/UIConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfinf_GetPropItem(extras) {
    _reporterNs.report("inf_GetPropItem", "../../framework/InterfaceDefines", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUtils(extras) {
    _reporterNs.report("Utils", "../../framework/Utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEncrypt(extras) {
    _reporterNs.report("Encrypt", "../../framework/crypto/Encrypto", _context.meta, extras);
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

  _export("MessageServers", void 0);

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
      GConstants = _unresolved_4.GConstants;
    }, function (_unresolved_5) {
      UIID = _unresolved_5.UIID;
    }, function (_unresolved_6) {
      Utils = _unresolved_6.Utils;
    }, function (_unresolved_7) {
      Encrypt = _unresolved_7.Encrypt;
    }, function (_unresolved_8) {
      EventManager = _unresolved_8.EventManager;
    }, function (_unresolved_9) {
      BaseControll = _unresolved_9.BaseControll;
    }, function (_unresolved_10) {
      GlobalCMD = _unresolved_10.GlobalCMD;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b4ef7ZM24dHJINAgN15HwUn", "MessageServers", undefined);

      _export("MessageServers", MessageServers = class MessageServers extends (_crd && BaseControll === void 0 ? (_reportPossibleCrUseOfBaseControll({
        error: Error()
      }), BaseControll) : BaseControll) {
        static getInstance() {
          if (!this._instance || this._instance == null) {
            this._instance = new MessageServers("MessageServers");
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
          MessageServers.getInstance();
          return;
        }
        /**初始化添加事件绑定 */


        onInitModuleEvent() {
          //请求拉取信箱数据
          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_CMD_REQ_WATCH, this.reqMessageData); //请求拉取信箱数据返回

          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_CMD_RESP_WATCH, this.respMessageData); //请求邮箱领奖

          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_REQ_EMAIL_REWARD, this.reqEmailAward); //请求邮箱领奖返回

          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_RESP_EMAIL_REWARD, this.respEmailAward);
        } //请求邮箱数据


        reqMessageData(event) {
          //客户端存的最大的的邮箱ID
          var maxId = (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
            error: Error()
          }), GCache) : GCache).MailInfo.getMaxId();
          maxId = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).number_valueOf(maxId, 0);
          var sendMsg = {
            cmd: (_crd && GlobalCMD === void 0 ? (_reportPossibleCrUseOfGlobalCMD({
              error: Error()
            }), GlobalCMD) : GlobalCMD).PHP_EMAIL_DATA,
            body: {
              id: maxId
            }
          };
          console.log("请求邮箱数据,maxId:", maxId, sendMsg);
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_SEND_MSG, sendMsg);
        }
        /**
         * 请求邮箱数据返回
         * @param event 
         * @param isSuccess 是否成功
         * @param respData 响应数据
         * @param reqData 请求数据
         */


        respMessageData(event, isSuccess, respData, reqData) {
          console.log("请求邮箱配置数据返回", respData, isSuccess, reqData);

          if (isSuccess) {
            if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).isNull(respData.data)) {
              return;
            }

            var data = respData.data;
            (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
              error: Error()
            }), GCache) : GCache).WatchMessage.dealData(data);
          }
        }
        /**
         * 请求邮箱奖励数据
         * @param event 事件
         * @param msgid 邮件ID
         */


        reqEmailAward(event, msgid) {
          if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).isNull(msgid)) {
            this.print("msgid error");
            return;
          }

          var sendMsg = {
            cmd: (_crd && GlobalCMD === void 0 ? (_reportPossibleCrUseOfGlobalCMD({
              error: Error()
            }), GlobalCMD) : GlobalCMD).PHP_EMAIL_REWARD,
            body: {
              msgid: msgid
            }
          };
          this.print("请求邮件领奖", sendMsg);
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_SEND_MSG, sendMsg);
        } //请求邮箱奖励返回


        respEmailAward(event, isSuccess, respData, reqData) {
          this.print("请求邮箱奖励返回", respData, isSuccess, reqData);

          if (isSuccess != true) {
            //领取失败
            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
              error: Error()
            }), AppEvent) : AppEvent).SYS_TOAST_TIP, {
              content: respData["errorTips"]
            });
            this.print("请求领取邮件道具奖励失败:", respData, reqData);
            return;
          }

          var oldData = {};

          if (respData["id"] != null) {
            oldData = (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
              error: Error()
            }), GCache) : GCache).MailInfo.getMsgByID(respData["id"]);
          }

          oldData = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).table_verify(oldData);
          var awards = (_crd && Encrypt === void 0 ? (_reportPossibleCrUseOfEncrypt({
            error: Error()
          }), Encrypt) : Encrypt).JsonDecode(oldData["awards"]);

          if (respData["awards"]) {
            var awardData = [];

            for (var i = 0; i < respData["awards"].length; i++) {
              if (awards[i]) {
                if (respData["awards"][i]["havegot"] == (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
                  error: Error()
                }), GConstants) : GConstants).MsgAwardStatus.GOT && awards[i]["havegot"] == (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
                  error: Error()
                }), GConstants) : GConstants).MsgAwardStatus.NOT_GOT) {
                  var goodType = Number(respData["awards"][i]["type"]);
                  var goodNum = Number(respData["awards"][i]["num"]); //领取成功，加银币加钱

                  if (goodType == (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
                    error: Error()
                  }), GConstants) : GConstants).PropertyType.SILVER_COIN || goodType == (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
                    error: Error()
                  }), GConstants) : GConstants).PropertyType.GOLD_BAR || goodType == (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
                    error: Error()
                  }), GConstants) : GConstants).PropertyType.DIAMOND) {
                    var money = (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
                      error: Error()
                    }), GCache) : GCache).User.getUserMoneyByID(goodType);
                    (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
                      error: Error()
                    }), GCache) : GCache).User.updateUserMoneyByID(goodType, money + goodNum);
                  }

                  var info = (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
                    error: Error()
                  }), GCache) : GCache).PropsConf.getPropsInfoById(goodType);
                  var data = {
                    icon: info['url'],
                    name: info['item_name'],
                    num: goodNum
                  };
                  console.log("awardnum:", data);
                  awardData.push(data);
                }
              }
            }

            oldData['status'] = (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
              error: Error()
            }), GConstants) : GConstants).MsgStatus.MSG_STATUS_HANDLED;
            (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
              error: Error()
            }), GCache) : GCache).MailInfo.updateMailDataInCache(oldData);

            if (awardData.length > 0) {
              //通知:恭喜获得
              (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
                error: Error()
              }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
                error: Error()
              }), AppEvent) : AppEvent).VIEW_UI_OPEN, (_crd && UIID === void 0 ? (_reportPossibleCrUseOfUIID({
                error: Error()
              }), UIID) : UIID).GongXiHuoDePrefab, awardData); //通知:领完奖励更新邮件

              (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
                error: Error()
              }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
                error: Error()
              }), AppEvent) : AppEvent).NOTIFY_EMAIL_CHANGE);
            }
          }
        }

      });

      MessageServers._instance = null;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=3bf65fd82779ea1f0c74c7e656c9f4eecbbfc147.js.map