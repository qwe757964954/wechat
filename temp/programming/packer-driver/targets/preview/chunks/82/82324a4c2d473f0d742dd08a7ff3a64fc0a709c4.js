System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, GCache, AppEvent, GConstants, GameTxt, UIID, EventManager, Utils, BaseControll, GameRoomHelper, GlobalCMD, GlobalCMDHead, ActivityController, _crd;

  function _reportPossibleCrUseOfGCache(extras) {
    _reporterNs.report("GCache", "../cache/GCache", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAppEvent(extras) {
    _reporterNs.report("AppEvent", "../config/AppEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGConstants(extras) {
    _reporterNs.report("GConstants", "../config/GameConstant", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameTxt(extras) {
    _reporterNs.report("GameTxt", "../config/GameTxt", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIID(extras) {
    _reporterNs.report("UIID", "../config/UIConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfinf_GetPropItem(extras) {
    _reporterNs.report("inf_GetPropItem", "../framework/InterfaceDefines", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventManager(extras) {
    _reporterNs.report("EventManager", "../framework/manager/EventManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUtils(extras) {
    _reporterNs.report("Utils", "../framework/Utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseControll(extras) {
    _reporterNs.report("BaseControll", "../framework/vc/BaseController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameRoomHelper(extras) {
    _reporterNs.report("GameRoomHelper", "./GameRoomHelper", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGlobalCMD(extras) {
    _reporterNs.report("GlobalCMD", "./gnet/GlobalCMD", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGlobalCMDHead(extras) {
    _reporterNs.report("GlobalCMDHead", "./gnet/GlobalCMD", _context.meta, extras);
  }

  _export("ActivityController", void 0);

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
      GameTxt = _unresolved_5.GameTxt;
    }, function (_unresolved_6) {
      UIID = _unresolved_6.UIID;
    }, function (_unresolved_7) {
      EventManager = _unresolved_7.EventManager;
    }, function (_unresolved_8) {
      Utils = _unresolved_8.Utils;
    }, function (_unresolved_9) {
      BaseControll = _unresolved_9.BaseControll;
    }, function (_unresolved_10) {
      GameRoomHelper = _unresolved_10.GameRoomHelper;
    }, function (_unresolved_11) {
      GlobalCMD = _unresolved_11.GlobalCMD;
      GlobalCMDHead = _unresolved_11.GlobalCMDHead;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e81abRcDSRPkatmULTnyJz4", "ActivityController", undefined);

      _export("ActivityController", ActivityController = class ActivityController extends (_crd && BaseControll === void 0 ? (_reportPossibleCrUseOfBaseControll({
        error: Error()
      }), BaseControll) : BaseControll) {
        static getInstance() {
          if (!this._instance || this._instance == null) {
            this._instance = new ActivityController("ActivityController");
          }

          return this._instance;
        } //破产来自:


        //实例化
        constructor(name) {
          super(name);
          this.reqBankUpFrom = null;
        }

        static init() {
          if (this._instance) {
            this._instance.clear();
          }

          this._instance = null;
          ActivityController.getInstance();
          return;
        }
        /**初始化添加事件绑定 */


        onInitModuleEvent() {
          //请求新手活动信息
          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_REQ_NEW_PLAYER_CONFIG, this.reqNewPlayerActivity); //新手活动信息返回

          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_FORWARD_NEW_PLAYER_CONFIG, this.respNewPlayerActivity); //请求新手活动奖励列表

          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_REQ_NEW_PLAYER_GIFT_LIST, this.reqNewPlayerActivityGiftList); //新手活动奖励列表返回

          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_FORWARD_NEW_PLAYER_GIFT_LIST, this.respNewPlayerActivityGiftList); //请求新手奖励/邀请奖励

          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_REQ_NEW_PLAYER_REWARD, this.reqNewPlayerReward); //新手奖励/邀请奖励返回

          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_FORWARD_NEW_PLAYER_REWARD, this.respNewPlayerReward); //请求限时折扣

          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_REQ_HOLIDAYS_GIFTPACKAGE, this.reqHolidaysGiftPackage); //限时折扣返回

          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_FORWARD_HOLIDAYS_GIFTPACKAGE, this.respHolidaysGiftPackage); //请求签到配置数据

          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_REQ_SIGNIN_CONFIG, this.reqSigninConfig); //请求签到配置数据返回

          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_FORWARD_SIGNIN_CONFIG, this.respSigninConfig); //请求签到

          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_REQ_SIGNIN_AWARD, this.reqSignin); //请求签到返回

          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_FORWARD_SIGNIN_AWARD, this.respSignin); //请求连续签到奖励

          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_REQ_SIGNIN_CONTINU_AWARD, this.reqContinusAward); //请求连续签到奖励返回

          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_FORWARD_SIGNIN_CONTINU_AWARD, this.respSignContinusAward);
          /************************破产礼包相关************************/
          //请求新版破产礼包配置

          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_REQ_BANKRUPT_GIFT_CONF, this.reqBankUpGiftConf); //返回新版破产礼包配置

          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_RESP_BANKRUPT_GIFT_CONF, this.respBankUpGiftConf);
          /************************破产相关************************/
          //请求获取破产线

          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_REQ_BANKRUPT_CONFIG, this.reqBankUpData); //返回获取破产线

          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_RESP_BANKRUPT_CONFIG, this.respBankUpData); //请求获取破产次数

          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_REQ_BANKRUPT_COUNT, this.reqBankUpCount); //返回获取破产次数

          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_RESP_BANKRUPT_COUNT, this.respBankUpCount); //破产文案显示

          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_FORWARD_BANKRUPT_TOAST, this.receiveBankUpToast); //请求救济金

          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_REQ_BANKRUPT, this.reqBankUpMoney); //返回用户破产请求

          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_RESP_BANKRUPT, this.respBankUpMoney); //请求首充礼包配置

          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_REQ_FIRST_PAY_CONFIG, this.reqFirstPayConfig); //请求首充礼包配置返回

          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_RESP_FIRST_PAY_CONFIG, this.respFirstPayConfig);
        } //请求新手活动信息


        reqNewPlayerActivity(event) {
          var sendMsg = {
            cmd: (_crd && GlobalCMD === void 0 ? (_reportPossibleCrUseOfGlobalCMD({
              error: Error()
            }), GlobalCMD) : GlobalCMD).PHP_ACTIVITY_PULL_NEW_PEOPLE_GET_CFG,
            body: null
          };
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_SEND_MSG, sendMsg);
        } //新手活动信息返回


        respNewPlayerActivity(event, isSuccess, respData, reqData) {} //请求新手活动奖励列表


        reqNewPlayerActivityGiftList(event) {
          var sendMsg = {
            cmd: (_crd && GlobalCMD === void 0 ? (_reportPossibleCrUseOfGlobalCMD({
              error: Error()
            }), GlobalCMD) : GlobalCMD).PHP_ACTIVITY_PULL_NEW_PEOPLE_LIST,
            body: null
          };
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_SEND_MSG, sendMsg);
        } //新手活动奖励列表返回


        respNewPlayerActivityGiftList(event, isSuccess, respData, reqData) {
          this.dump(respData, "新手活动奖励列表返回" + isSuccess);

          if (isSuccess) {
            (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
              error: Error()
            }), GCache) : GCache).Activity.updateNewPlayerActivityMain(respData);
            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
              error: Error()
            }), AppEvent) : AppEvent).ACTIVITY_UPDATE_NEW_PLAYER_GIFT);
          } else {
            if (respData && !(_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).string_isEmpty(respData["errorTips"])) {
              (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
                error: Error()
              }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
                error: Error()
              }), AppEvent) : AppEvent).SYS_TOAST_TIP, {
                content: respData["errorTips"]
              });
            }
          }
        } //请求新手奖励/邀请奖励


        reqNewPlayerReward(event, types, code) {
          if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).isNull(types)) {
            return;
          }

          var sendMsg = {
            cmd: (_crd && GlobalCMD === void 0 ? (_reportPossibleCrUseOfGlobalCMD({
              error: Error()
            }), GlobalCMD) : GlobalCMD).PHP_ACTIVITY_PULL_NEW_PEOPLE_GET_REWARD_NEW,
            body: {
              type: types,
              code: code
            }
          };
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_SEND_MSG, sendMsg);
        } //新手奖励/邀请奖励返回


        respNewPlayerReward(event, isSuccess, respData, reqData) {
          this.dump(respData, "新手奖励/邀请奖励返回" + isSuccess);

          if (isSuccess) {
            var reqArray = {
              type: reqData["type"],
              code: reqData["code"]
            };
            var awardData = [];

            for (var type in respData) {
              if (Object.prototype.hasOwnProperty.call(respData, type)) {
                var data = {
                  icon: respData[type]["gicon"],
                  name: respData[type]["gname"],
                  num: respData[type]["gnum"]
                };
                awardData.push(data);
              }
            } //通知:恭喜获得


            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
              error: Error()
            }), AppEvent) : AppEvent).VIEW_UI_OPEN, (_crd && UIID === void 0 ? (_reportPossibleCrUseOfUIID({
              error: Error()
            }), UIID) : UIID).GongXiHuoDePrefab, awardData);
            this.reqNewPlayerActivityGiftList(null);
          } else {
            if (respData && !(_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).string_isEmpty(respData["errorTips"])) {
              (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
                error: Error()
              }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
                error: Error()
              }), AppEvent) : AppEvent).SYS_TOAST_TIP, {
                content: respData["errorTips"]
              });
            }
          }
        }
        /**
         * 请求破产礼包配置，不传时，返回是否有破产礼包 有值时，返回游戏指定场次的破产礼包信息
         * @param event 
         * @param gameID 游戏ID
         * @param levelID 房间level
         */


        reqBankUpGiftConf(event, gameID, levelID) {
          if (event === void 0) {
            event = null;
          }

          if (gameID === void 0) {
            gameID = null;
          }

          if (levelID === void 0) {
            levelID = null;
          }

          console.log('广播:请求破产礼包');
          var sendMsg = {
            cmd: (_crd && GlobalCMD === void 0 ? (_reportPossibleCrUseOfGlobalCMD({
              error: Error()
            }), GlobalCMD) : GlobalCMD).PHP_GET_BANKRUPTPACK,
            body: {
              gameid: gameID,
              levelid: levelID
            }
          };
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_SEND_MSG, sendMsg);
        }
        /** 返回破产礼包配置 */


        respBankUpGiftConf(event, isSuccess, respData, reqData) {
          this.dump("返回破产礼包" + isSuccess, respData);
          this.dump("广播:respData=>", respData);
          var newBankruptGiftData = {};
          var isTrueData = false;

          if (isSuccess && respData) {
            if (respData["giftPack"]) {
              newBankruptGiftData = respData;

              if (respData["goods"] && respData["goods"]["id"] != null) {
                //破产首冲礼包，读取破产首充商品信息，不是大厅的首充商品信息
                newBankruptGiftData["isFirstPay"] = true;
                newBankruptGiftData["goodsId"] = respData["goods"]["id"]; //礼包对应的商品id

                newBankruptGiftData["giftPack"].splice(0, 0, respData["goods"]);
              }

              isTrueData = true;
            }
          } //更新礼包配置


          (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
            error: Error()
          }), GCache) : GCache).BankrupData.updateNewBankUpGiftConf(newBankruptGiftData);

          if (isTrueData && (_crd && GameRoomHelper === void 0 ? (_reportPossibleCrUseOfGameRoomHelper({
            error: Error()
          }), GameRoomHelper) : GameRoomHelper).checkShowBankruptParam) {
            var toData = (_crd && GameRoomHelper === void 0 ? (_reportPossibleCrUseOfGameRoomHelper({
              error: Error()
            }), GameRoomHelper) : GameRoomHelper).checkShowBankruptParam;
            (_crd && GameRoomHelper === void 0 ? (_reportPossibleCrUseOfGameRoomHelper({
              error: Error()
            }), GameRoomHelper) : GameRoomHelper).checkShowBankruptView(toData["gameID"], toData["levelID"], toData["moneyID"], toData["status"], toData["time"]);
          }

          (_crd && GameRoomHelper === void 0 ? (_reportPossibleCrUseOfGameRoomHelper({
            error: Error()
          }), GameRoomHelper) : GameRoomHelper).checkShowBankruptParam = null;
        }
        /** 请求破产信息 */


        reqBankUpData(event) {
          if (event === void 0) {
            event = null;
          }

          this.dump("请求破产线数据");
          var sendMsg = {
            cmd: (_crd && GlobalCMDHead === void 0 ? (_reportPossibleCrUseOfGlobalCMDHead({
              error: Error()
            }), GlobalCMDHead) : GlobalCMDHead).SEND_BANKRUPT_CONFIG,
            body: null
          };
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_SEND_MSG, sendMsg);
        }
        /** 返回破产线 */


        respBankUpData(event, respData) {
          if (event === void 0) {
            event = null;
          }

          if (respData === void 0) {
            respData = null;
          }

          this.dump(respData, "破产线数据返回");

          if (respData) {
            (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
              error: Error()
            }), GCache) : GCache).BankrupData.updateBankruptConfig(respData);
            this.reqBankUpCount();
          }
        }
        /** 请求获取破产次数 */


        reqBankUpCount(event, hasShard) {
          if (event === void 0) {
            event = null;
          }

          if (hasShard === void 0) {
            hasShard = 0;
          }

          this.dump("请求获取破产次数");

          if ((_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
            error: Error()
          }), GCache) : GCache).BankrupData.isCanCheckUpdateCount() == false) {
            return;
          }

          var sendMsg = {
            cmd: (_crd && GlobalCMDHead === void 0 ? (_reportPossibleCrUseOfGlobalCMDHead({
              error: Error()
            }), GlobalCMDHead) : GlobalCMDHead).SEND_BANKRUPT_COUNT,
            body: {
              mid: (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
                error: Error()
              }), GCache) : GCache).User.getUserMid(),
              hasShard: hasShard
            }
          };
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_SEND_MSG, sendMsg);
          (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
            error: Error()
          }), GCache) : GCache).BankrupData.updateLastTimeBankUpCount();
        }
        /** 返回获取破产次数 */


        respBankUpCount(event, respData) {
          if (event === void 0) {
            event = null;
          }

          if (respData === void 0) {
            respData = null;
          }

          this.dump(respData, "获取破产次数返回");

          if (respData) {
            if ((_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
              error: Error()
            }), GCache) : GCache).User.isLoginSuccesed() == false) {
              return;
            }

            (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
              error: Error()
            }), GCache) : GCache).BankrupData.setCurBankruptInfo(respData);
            var isPayUser = (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
              error: Error()
            }), GCache) : GCache).User.getIsPayUser();

            if (respData["vipExpires"] == 0 || respData["vipExpires"] < -1) {
              //过期
              if (isPayUser) {
                (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
                  error: Error()
                }), GCache) : GCache).User.setIdentity((_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
                  error: Error()
                }), GConstants) : GConstants).UserIdentity.Rmb);
              } else {
                (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
                  error: Error()
                }), GCache) : GCache).User.setIdentity((_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
                  error: Error()
                }), GConstants) : GConstants).UserIdentity.Normal);
              }

              (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
                error: Error()
              }), GCache) : GCache).User.setVipTime(0);
            } else {
              //没有过期
              if (isPayUser) {
                (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
                  error: Error()
                }), GCache) : GCache).User.setIdentity((_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
                  error: Error()
                }), GConstants) : GConstants).UserIdentity.RmbAndVip);
              } else {
                (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
                  error: Error()
                }), GCache) : GCache).User.setIdentity((_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
                  error: Error()
                }), GConstants) : GConstants).UserIdentity.Vip);
              }

              (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
                error: Error()
              }), GCache) : GCache).User.setVipTime(respData["vipExpires"]);
            }

            this.reqBankUpToast(null, (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
              error: Error()
            }), GCache) : GCache).BankrupData.curBankruptCount);
          }
        }
        /** 请求破产文案 */


        reqBankUpToast(event, num) {
          if (event === void 0) {
            event = null;
          }

          if (num === void 0) {
            num = null;
          }

          if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).isNull(num)) {
            return;
          }

          var sendMsg = {
            cmd: (_crd && GlobalCMD === void 0 ? (_reportPossibleCrUseOfGlobalCMD({
              error: Error()
            }), GlobalCMD) : GlobalCMD).PHP_BANKRUPT_TOAST,
            body: {
              id: num
            }
          };
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_SEND_MSG, sendMsg);
        }
        /** 破产文案显示 */


        receiveBankUpToast(event, isSuccess, respData, reqData) {
          if (isSuccess) {
            if (respData["info"]) {
              (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
                error: Error()
              }), GCache) : GCache).BankrupData.bankToast = respData["info"]["copywriting"];
              this.print("破产文案内容：", (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
                error: Error()
              }), GCache) : GCache).BankrupData.bankToast);
            }
          }
        }
        /** 领取破产救济金 */


        reqBankUpMoney(event, param) {
          if (event === void 0) {
            event = null;
          }

          if (param === void 0) {
            param = null;
          }

          this.print("主动点击领取破产救济金===>");

          if ((_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
            error: Error()
          }), GCache) : GCache).BankrupData.isMineBankrupt() == false) {
            if (param == null) {
              (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
                error: Error()
              }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
                error: Error()
              }), AppEvent) : AppEvent).SYS_TOAST_TIP, {
                content: (_crd && GameTxt === void 0 ? (_reportPossibleCrUseOfGameTxt({
                  error: Error()
                }), GameTxt) : GameTxt).bank_receive_fail
              });
            }

            return;
          }

          if ((_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
            error: Error()
          }), GCache) : GCache).BankrupData.isBankruptRewardRemain() == false) {
            //补助已领取完毕
            if (param == null) {
              (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
                error: Error()
              }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
                error: Error()
              }), AppEvent) : AppEvent).SYS_TOAST_TIP, {
                content: (_crd && GameTxt === void 0 ? (_reportPossibleCrUseOfGameTxt({
                  error: Error()
                }), GameTxt) : GameTxt).bankruptErrTips2
              });
            }

            return;
          }

          this.reqBankUpFrom = param;
          var sendMsg = {
            cmd: (_crd && GlobalCMDHead === void 0 ? (_reportPossibleCrUseOfGlobalCMDHead({
              error: Error()
            }), GlobalCMDHead) : GlobalCMDHead).SEND_BANKRUPT_MONEY,
            body: {
              mid: (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
                error: Error()
              }), GCache) : GCache).User.getUserMid()
            }
          };
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_SEND_MSG, sendMsg);
        }
        /** 破产返回 */


        respBankUpMoney(event, respData) {
          if (event === void 0) {
            event = null;
          }

          if (respData === void 0) {
            respData = null;
          }

          this.dump("领取破产救济金返回==>", respData);

          if (respData) {
            var packetInfo = {
              "flag": respData["flag"],
              //请求破产是否成功(1.成功 0失败)
              "brokeMoney": respData["brokeMoney"],
              //破产领取的钱数
              "money": respData["money"],
              //用户当前的钱数
              "errType": respData["errType"] //失败原因：1、server记没有破产2、已经领取完了所有破产奖励3、还没有到领取破产奖励的时间4、其他原因 

            };
            var isSuccess = packetInfo.flag == 1;
            var content = (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
              error: Error()
            }), GCache) : GCache).BankrupData.bankToast;

            if (isSuccess && packetInfo.brokeMoney > 0) {
              (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
                error: Error()
              }), GCache) : GCache).BankrupData.curBankruptReward = packetInfo.brokeMoney;
              var moneyType = 0;

              if ((_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
                error: Error()
              }), GCache) : GCache).Desk) {
                moneyType = (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
                  error: Error()
                }), GCache) : GCache).Desk.MoneyTypeID;
              }

              var money = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                error: Error()
              }), Utils) : Utils).number_valueOf(packetInfo.money) + (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                error: Error()
              }), Utils) : Utils).number_valueOf(packetInfo.brokeMoney);
              (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
                error: Error()
              }), GCache) : GCache).User.updateUserMoneyByID(moneyType, money);
              content = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                error: Error()
              }), Utils) : Utils).string_format((_crd && GameTxt === void 0 ? (_reportPossibleCrUseOfGameTxt({
                error: Error()
              }), GameTxt) : GameTxt).bank_receive_success, packetInfo.brokeMoney);
            } else {
              this.print("领取破产救济金失败！失败原因: " + packetInfo.errType);

              if (this.reqBankUpFrom == null) {
                content = (_crd && GameTxt === void 0 ? (_reportPossibleCrUseOfGameTxt({
                  error: Error()
                }), GameTxt) : GameTxt)["\"bankruptErrTips\"" + packetInfo.errType];
              }
            } //刷新破产次数


            this.reqBankUpCount(); //显示破产吐司文案

            this.print("显示破产吐司: ", content);
            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
              error: Error()
            }), AppEvent) : AppEvent).SYS_TOAST_TIP, {
              content: content
            }); //通知破产结果

            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
              error: Error()
            }), AppEvent) : AppEvent).ACTIVITY_BANKUP_BACK, isSuccess, packetInfo);
          }

          this.reqBankUpFrom = null;
        } //请求签到配置数据


        reqSigninConfig(event) {
          var sendMsg = {
            cmd: (_crd && GlobalCMD === void 0 ? (_reportPossibleCrUseOfGlobalCMD({
              error: Error()
            }), GlobalCMD) : GlobalCMD).PHP_SIGNINAWARD_SIGNINDATA,
            body: null
          };
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_SEND_MSG, sendMsg);
        } //请求签到配置数据返回


        respSigninConfig(event, isSuccess, respData, reqData) {
          this.dump(respData, "请求签到配置数据返回" + isSuccess);

          if (isSuccess) {
            (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
              error: Error()
            }), GCache) : GCache).Activity.updateSigninData(respData); //签到配置数据有更新

            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
              error: Error()
            }), AppEvent) : AppEvent).ACTIVITY_UPDATE_SIGNIN_CONF);
          }
        } //请求签到


        reqSignin(event, day) {
          if (day === void 0) {
            day = 0;
          }

          var sendMsg = {
            cmd: (_crd && GlobalCMD === void 0 ? (_reportPossibleCrUseOfGlobalCMD({
              error: Error()
            }), GlobalCMD) : GlobalCMD).PHP_SIGNINAWARD_NEWSIGNIN,
            body: {
              day: day,
              isBuSignin: false,
              isAdSignin: false
            }
          };
          this.print("reqSignin", sendMsg);
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_SEND_MSG, sendMsg);
        } //签到返回


        respSignin(event, isSuccess, respData, reqData) {
          this.dump(respData, "签到返回" + isSuccess);

          if (isSuccess) {
            var data = (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
              error: Error()
            }), GCache) : GCache).Activity.updateSigninBySuccess(respData);

            if (data != null) {
              var obj = {
                icon: data.icon,
                name: data.name,
                num: data.num
              };
              var arr = [];
              arr.push(obj);
              (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
                error: Error()
              }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
                error: Error()
              }), AppEvent) : AppEvent).VIEW_UI_OPEN, (_crd && UIID === void 0 ? (_reportPossibleCrUseOfUIID({
                error: Error()
              }), UIID) : UIID).GongXiHuoDePrefab, arr);
            }
          }
        } // 请求连续奖励


        reqContinusAward(event, day) {
          if (day === void 0) {
            day = 0;
          }

          var sendMsg = {
            cmd: (_crd && GlobalCMD === void 0 ? (_reportPossibleCrUseOfGlobalCMD({
              error: Error()
            }), GlobalCMD) : GlobalCMD).PHP_SIGNINAWARD_CONTINUAWARD,
            body: {
              day: day
            }
          };
          this.print("reqContinusAward", sendMsg);
          (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
            error: Error()
          }), GCache) : GCache).Activity.setContinusAwardDay(day);
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_SEND_MSG, sendMsg);
        } // 连续签到领取奖励返回


        respSignContinusAward(event, isSuccess, respData, reqData) {
          this.dump(respData, "连续签到领取奖励返回" + isSuccess);

          if (isSuccess) {
            this.print("respSignContinusAward", respData);
            var day = (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
              error: Error()
            }), GCache) : GCache).Activity.getContinusAwardDay();
            var data = (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
              error: Error()
            }), GCache) : GCache).Activity.updateContinusAward(respData, day);

            if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).isNotNull(data)) {
              var obj = {
                icon: data.icon,
                name: data.name,
                num: data.num
              };
              var arr = [];
              arr.push(obj);
              (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
                error: Error()
              }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
                error: Error()
              }), AppEvent) : AppEvent).VIEW_UI_OPEN, (_crd && UIID === void 0 ? (_reportPossibleCrUseOfUIID({
                error: Error()
              }), UIID) : UIID).GongXiHuoDePrefab, arr);
            }
          }
        } //请求限时折扣


        reqHolidaysGiftPackage(event) {
          var sendMsg = {
            cmd: (_crd && GlobalCMD === void 0 ? (_reportPossibleCrUseOfGlobalCMD({
              error: Error()
            }), GlobalCMD) : GlobalCMD).PHP_HOLIDAYS_GIFTPACKAGE,
            body: null
          };
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_SEND_MSG, sendMsg);
        } //限时折扣返回


        respHolidaysGiftPackage(event, isSuccess, respData, reqData) {
          console.log("限时折扣返回", respData, isSuccess, reqData);

          if (isSuccess) {
            (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
              error: Error()
            }), GCache) : GCache).Activity.updateHolidaysGiftPackage(respData);
          } //限时折扣有更新


          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).ACTIVITY_UPDATE_HOLIDAYSGIFTPACKAGE);
        } //请求首充配置数据


        reqFirstPayConfig(event) {
          var sendMsg = {
            cmd: (_crd && GlobalCMD === void 0 ? (_reportPossibleCrUseOfGlobalCMD({
              error: Error()
            }), GlobalCMD) : GlobalCMD).PHP_FIRST_PAY_CONFIG,
            body: null
          };
          console.log("请求首充数据", sendMsg);
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_SEND_MSG, sendMsg);
        } //请求首充配置数据返回


        respFirstPayConfig(event, isSuccess, respData, reqData) {
          console.log("请求首充数据返回", isSuccess, respData, reqData);

          if (isSuccess) {
            (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
              error: Error()
            }), GCache) : GCache).Activity.updateFirstPayPackage(respData); //首充配置数据有更新

            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
              error: Error()
            }), AppEvent) : AppEvent).ACTIVITY_UPDATE_FIRSTPAY_CONF);
          }
        }

      });

      ActivityController._instance = null;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=82324a4c2d473f0d742dd08a7ff3a64fc0a709c4.js.map