System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, GCache, AppEvent, GConstants, GameTxt, UIConfigData, UIID, LayerManager, EventManager, Utils, BaseControll, Platform, _GameRoomHelper, _crd, GameRoomHelper;

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

  function _reportPossibleCrUseOfUIConfigData(extras) {
    _reporterNs.report("UIConfigData", "../config/UIConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIID(extras) {
    _reporterNs.report("UIID", "../config/UIConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLayerManager(extras) {
    _reporterNs.report("LayerManager", "../framework/layer/LayerManager", _context.meta, extras);
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

  function _reportPossibleCrUseOfPlatform(extras) {
    _reporterNs.report("Platform", "../platform/Platform", _context.meta, extras);
  }

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
      UIConfigData = _unresolved_6.UIConfigData;
      UIID = _unresolved_6.UIID;
    }, function (_unresolved_7) {
      LayerManager = _unresolved_7.LayerManager;
    }, function (_unresolved_8) {
      EventManager = _unresolved_8.EventManager;
    }, function (_unresolved_9) {
      Utils = _unresolved_9.Utils;
    }, function (_unresolved_10) {
      BaseControll = _unresolved_10.BaseControll;
    }, function (_unresolved_11) {
      Platform = _unresolved_11.Platform;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "de609KvJXhFFK5HRZsPILvh", "GameRoomHelper", undefined);

      /**
       [[
      	破产弹窗逻辑，先判断是否有首充礼包
      	 1、有首充礼包，保险箱资产是否足够
      			 1.1、保险箱资产足够，首充+保险箱取款        弹窗1
      			 1.2、保险箱资产不足，判断是否还有破产补助
      				 1.2.1 有破产补助：首充+破产补助          弹窗3
      				 1.2.2 无破产补助：首充+无破产补助提示     弹窗5
      	 2、无首充礼包，显示破产礼包,保险箱资产是否足够
      		 2.1、保险箱资产足够，破产礼包+保险箱取款        弹窗2
      		 2.2、保险箱资产不足，判断是否还有破产补助
      			 2.2.1 有破产补助：破产礼包+破产补助          弹窗4
      			 2.2.2 无破产补助：破产礼包+无破产补助提示     弹窗6
       ]]
       */
      _GameRoomHelper = class _GameRoomHelper extends (_crd && BaseControll === void 0 ? (_reportPossibleCrUseOfBaseControll({
        error: Error()
      }), BaseControll) : BaseControll) {
        constructor() {
          super("GameRoomHelper");
          this.checkShowBankruptParam = null;
        } //请求了检查破产礼包 但此时无数据 在返回数据是要显示


        initData() {
          this.checkShowBankruptParam = null;
        } //进入房间主动调用方法


        intoRoomInit() {
          this.initData();
        }
        /**获取游戏对应场次是否存在破产礼包信息 */


        getBankruptGifts(gameId, levelID) {
          var isExit = false;
          levelID = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).number_valueOf(levelID, 0);
          var newBankUpGiftData = (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
            error: Error()
          }), GCache) : GCache).BankrupData.getNewBankUpGiftConf();
          newBankUpGiftData = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).table_verify(newBankUpGiftData);

          if (newBankUpGiftData["gameids"] && newBankUpGiftData["levelids"]) {
            for (var i in newBankUpGiftData["gameids"]) {
              if (Object.prototype.hasOwnProperty.call(newBankUpGiftData["gameids"], i)) {
                var v = newBankUpGiftData["gameids"][i];

                if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                  error: Error()
                }), Utils) : Utils).number_valueOf(v, -1) == (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                  error: Error()
                }), Utils) : Utils).number_valueOf(gameId, -2)) {
                  isExit = true;
                }
              }
            }
          }

          if (isExit) {
            isExit = false;

            for (var _i in newBankUpGiftData["levelids"]) {
              if (Object.prototype.hasOwnProperty.call(newBankUpGiftData["levelids"], _i)) {
                var _v = newBankUpGiftData["levelids"][_i];

                if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                  error: Error()
                }), Utils) : Utils).string_endsWith(levelID, (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                  error: Error()
                }), Utils) : Utils).nullToDefault(_v, -1)) == true) {
                  isExit = true;
                }
              }
            }
          }

          if (isExit) {
            return (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).table_verify(newBankUpGiftData);
          } else {
            return {};
          }
        }
        /**
         * 检查显示破产界面
         * @param gameID 游戏ID
         * @param levelID 房间level
         * @param moneyID 货币id
         * @param status 
         * @param time 
         * @returns 
         */


        checkShowBankruptView(gameID, levelID, moneyID, status, time) {
          if (status === void 0) {
            status = null;
          }

          if (time === void 0) {
            time = null;
          }

          gameID = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).number_valueOf(gameID, null);
          levelID = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).number_valueOf(levelID, null);

          if (gameID == null || levelID == null) {
            return;
          }

          if ((_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
            error: Error()
          }), GCache) : GCache).BankrupData.isMineBankrupt() == true) {
            this.print("===破产了  即将显示破产界面逻辑==="); //破产礼包数据

            var data = this.getBankruptGifts(gameID, levelID);

            if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).table_isEmpty(data) || (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).table_isEmpty(data["giftPack"])) {
              //没有礼包配置数据，发送请求获取
              (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
                error: Error()
              }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
                error: Error()
              }), AppEvent) : AppEvent).NET_REQ_BANKRUPT_GIFT_CONF, gameID, levelID); //标注破产礼包返回时要再次调用

              this.checkShowBankruptParam = {
                gameID: gameID,
                levelID: levelID,
                moneyID: moneyID,
                status: status,
                time: time
              };
              return;
            }

            var body = {
              gameID: gameID,
              levelID: levelID,
              moneyID: moneyID,
              status: status,
              time: time,
              config: data
            }; //请求破产次数

            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
              error: Error()
            }), AppEvent) : AppEvent).NET_REQ_BANKRUPT_COUNT);
            var needMoney = 3000;
            var info = (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
              error: Error()
            }), GCache) : GCache).SelectGame.getGameRoomInfoByRoomLevelID(gameID, levelID);
            info = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).table_verify(info); //当前场次需要多少银币

            needMoney = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).number_valueOf(info["min_money"], needMoney); //需要购买的银币数

            body["difMoney"] = Math.abs(needMoney - (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
              error: Error()
            }), GCache) : GCache).User.getUserMoneyByID(body.moneyID)); //是否还有首充

            body["has_first_pay"] = false; //检查数据

            body = this.checkBankrupt(data);

            if ((_crd && Platform === void 0 ? (_reportPossibleCrUseOfPlatform({
              error: Error()
            }), Platform) : Platform).isCanPay() == false) {
              //不支持支付 则直接领取救济金
              this.print("不支持支付 则直接领取救济金"); //领取救济金

              (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
                error: Error()
              }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
                error: Error()
              }), AppEvent) : AppEvent).NET_REQ_BANKRUPT);
              return;
            } //打开破产界面


            (_crd && LayerManager === void 0 ? (_reportPossibleCrUseOfLayerManager({
              error: Error()
            }), LayerManager) : LayerManager).clear((_crd && UIConfigData === void 0 ? (_reportPossibleCrUseOfUIConfigData({
              error: Error()
            }), UIConfigData) : UIConfigData)[(_crd && UIID === void 0 ? (_reportPossibleCrUseOfUIID({
              error: Error()
            }), UIID) : UIID).BankupGift].layer);
            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
              error: Error()
            }), AppEvent) : AppEvent).VIEW_UI_OPEN, (_crd && UIID === void 0 ? (_reportPossibleCrUseOfUIID({
              error: Error()
            }), UIID) : UIID).BankupGift, body);
            (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).dump("打开破产界面造的数据==>", body);
          }
        } //检查破产的 首充礼包、破产奖励、保险箱 逻辑


        checkBankrupt(data) {
          if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).number_valueOf(data["status"]) == 1) {
            //忽略保险箱和破产补助
            //无破产补助：破产礼包+无破产补助提示
            data["bankrupt_type"] = (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
              error: Error()
            }), GConstants) : GConstants).UserBankUpType.BANKRUPT_TYPE_OVER;
            data["title"] = (_crd && GameTxt === void 0 ? (_reportPossibleCrUseOfGameTxt({
              error: Error()
            }), GameTxt) : GameTxt).bankup_gift_title_1;
            data._type = (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
              error: Error()
            }), GConstants) : GConstants).BankupDialogType.GIVE_UP;
            return data;
          }

          if ((_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
            error: Error()
          }), GCache) : GCache).User.getUserMoneyByID(data.moneyID, true) >= (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
            error: Error()
          }), GConstants) : GConstants).UserBankUpType.BANKRUPT_TYPE_MINI) {
            //总资产足够，破产礼包+保险箱取款
            data["bankrupt_type"] = (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
              error: Error()
            }), GConstants) : GConstants).UserBankUpType.BANKRUPT_TYPE_SAFEBOX;
            data["title"] = (_crd && GameTxt === void 0 ? (_reportPossibleCrUseOfGameTxt({
              error: Error()
            }), GameTxt) : GameTxt).bankup_gift_title_2;
            data._type = data.has_first_pay ? (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
              error: Error()
            }), GConstants) : GConstants).BankupDialogType.FIRST_SAFEBOX : (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
              error: Error()
            }), GConstants) : GConstants).BankupDialogType.BANKRUPT_SAFEBOX;
          } else {
            if ((_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
              error: Error()
            }), GCache) : GCache).BankrupData.isMineBankrupt() && (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
              error: Error()
            }), GCache) : GCache).BankrupData.isBankruptRewardRemain()) {
              //有破产补助：破产礼包+破产补助，并且没有配置破产回馈配置 
              data["bankrupt_type"] = (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
                error: Error()
              }), GConstants) : GConstants).UserBankUpType.BANKRUPT_TYPE_BANKRUPT;
              data["title"] = (_crd && GameTxt === void 0 ? (_reportPossibleCrUseOfGameTxt({
                error: Error()
              }), GameTxt) : GameTxt).bankup_gift_title_3;
              data._type = data.has_first_pay ? (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
                error: Error()
              }), GConstants) : GConstants).BankupDialogType.BANKRUPT_FIRST : (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
                error: Error()
              }), GConstants) : GConstants).BankupDialogType.BANKRUPT_BANKRUPTGIFT;
            } else {
              //无破产补助：破产礼包+无破产补助提示
              data["bankrupt_type"] = (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
                error: Error()
              }), GConstants) : GConstants).UserBankUpType.BANKRUPT_TYPE_OVER;
              data["title"] = (_crd && GameTxt === void 0 ? (_reportPossibleCrUseOfGameTxt({
                error: Error()
              }), GameTxt) : GameTxt).bankup_gift_title_1;
              data._type = data.has_first_pay ? (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
                error: Error()
              }), GConstants) : GConstants).BankupDialogType.FIRST_NOBANKRUPT : (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
                error: Error()
              }), GConstants) : GConstants).BankupDialogType.BANKRUPTGIFT_NOBANKRUPT;
              ;
            }
          }

          return data;
        }
        /** 检查破产小红点 */


        checkBankruptFeedBackRedDot() {
          var bankruptFeedBackData = (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
            error: Error()
          }), GCache) : GCache).BankrupData.getBankUpFeedbackData();
          bankruptFeedBackData = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).table_verify(bankruptFeedBackData);
          bankruptFeedBackData["eTime"] = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).number_valueOf(bankruptFeedBackData["eTime"], 0);

          if (bankruptFeedBackData["eTime"] < (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).time()) {
            //刷新破产小红点
            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
              error: Error()
            }), AppEvent) : AppEvent).GAME_ROOM_BANKUP_REDDOT_REFRESH, false);
            return;
          }

          var isShow = false;

          if (bankruptFeedBackData["stallData"]) {
            bankruptFeedBackData["stallData"] = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).table_verify(bankruptFeedBackData["stallData"]);

            for (var i in bankruptFeedBackData["stallData"]) {
              if (Object.prototype.hasOwnProperty.call(bankruptFeedBackData["stallData"], i)) {
                var value = bankruptFeedBackData["stallData"][i];

                if (value["state"] == 1) {
                  //已购买
                  var goods = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                    error: Error()
                  }), Utils) : Utils).table_verify(value["goods"]);

                  for (var b in goods) {
                    if (Object.prototype.hasOwnProperty.call(goods, b)) {
                      if (goods[b]["state"] == 1) {
                        isShow = true;
                      }
                    }
                  }
                }
              }
            }
          } //刷新破产小红点


          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).GAME_ROOM_BANKUP_REDDOT_REFRESH, isShow);
        }
        /** 检查是否破产 */


        checkIsBankrupt(gameID, levelID) {
          gameID = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).nullToDefault(gameID, null);
          levelID = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).nullToDefault(levelID, null);

          if ((_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
            error: Error()
          }), GCache) : GCache).SelectGame.getPropByLevelPropName(gameID, levelID, "broken_stat_in") == false) {
            //子游戏不检查破产
            this.print("checkIsBankrupt : 子游戏不检查破产");
            return false;
          }

          return (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
            error: Error()
          }), GCache) : GCache).BankrupData.isMineBankrupt();
        }
        /**
         * 结算后检查是否破产
         * 破产逻辑：房间内判断破产后，调用 当破产时发送消息checkIsBankruptAfterGameOver 如果配置开启了破产支付，就会调用支付。否则会退出房间
         * @returns 
         */


        checkIsBankruptAfterGameOver() {
          var state = (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
            error: Error()
          }), GCache) : GCache).BankrupData.isMineBankrupt();

          if (state) {
            if ((_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
              error: Error()
            }), GCache) : GCache).BankrupData.isShowBankruptPayInRoom()) {
              //房间破产需要弹出破产支付弹框
              (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
                error: Error()
              }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
                error: Error()
              }), AppEvent) : AppEvent).NET_REQ_GOODS_INFO, {
                scene: (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
                  error: Error()
                }), GConstants) : GConstants).GoodsListID.Bankruptcy
              });
            } else {
              //没有房间破产充值的情况下，踢出房间
              (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
                error: Error()
              }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
                error: Error()
              }), AppEvent) : AppEvent).NET_REQ_LOGOUT_IN_GAME_FORCE);
            }

            return true;
          } else {
            return false;
          }
        } //结算时，检测场次升降级


        checkIsLevelUp(isByLoginMoney) {
          if (isByLoginMoney === void 0) {
            isByLoginMoney = false;
          }

          var kickStatus = (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
            error: Error()
          }), GCache) : GCache).Desk.KickUserStatus;

          if ((_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
            error: Error()
          }), GCache) : GCache).Desk.KickUserStatus == 9001) {
            //此时server要升级，重新走换桌流程
            (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
              error: Error()
            }), GCache) : GCache).Desk.KickUserStatus = 0;
          }

          var flag = false;
          var roomUpLevelInfo = (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
            error: Error()
          }), GCache) : GCache).SelectGame.getRoomUpLevelInfo(); //升降级信息

          if (roomUpLevelInfo) {
            if (roomUpLevelInfo["flag"] == 1) {
              //升级
              this._handleLevelUp(roomUpLevelInfo["level"]);

              flag = true;
            } else if (roomUpLevelInfo["flag"] == -1) {
              this._handleLevelDown(roomUpLevelInfo["level"]); // 降级时，调用支付


              (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
                error: Error()
              }), GCache) : GCache).SelectGame.setRoomUpLevelInfo({});
              flag = false;
            }
          } else {
            if (isByLoginMoney) {} else {}
          }
        }
        /** 游戏升场 */


        _handleLevelUp(newLevelId) {
          if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).isNull(newLevelId)) {
            return;
          }

          (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
            error: Error()
          }), GCache) : GCache).Desk.setCurLevelID(newLevelId);
          (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
            error: Error()
          }), GCache) : GCache).Desk.updateRoomInfoByKey("level", newLevelId);
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).GAME_ROOM_LEVEL_CHANGE);
          var data = {
            exp: 0,
            level: newLevelId
          };
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).GAME_ROOM_LEVEL_UP, data);
          (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
            error: Error()
          }), GCache) : GCache).SelectGame.setRoomUpLevelInfo({});
        }
        /** 资产不足降场 */


        _handleLevelDown(newLevelId) {
          if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).isNull(newLevelId)) {
            return;
          }

          var curGameId = (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
            error: Error()
          }), GCache) : GCache).Desk.getCurGameID();
          var curLevelId = (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
            error: Error()
          }), GCache) : GCache).Desk.getCurLevelID();
          var minLoginMoney = (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
            error: Error()
          }), GCache) : GCache).SelectGame.getPropByLevelPropName(curGameId, curLevelId, "min_money");
          minLoginMoney = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).number_valueOf(minLoginMoney);
          var userMoney = (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
            error: Error()
          }), GCache) : GCache).Desk.mySelfPlayer.money;
          var diff = minLoginMoney - userMoney; // let data = {
          // 	gameid : curGameId,
          // 	level :curLevelId,
          // 	newLevel : level,
          // 	scene : PayIsolater.eGoodsListId.RoomLevelDown,
          // 	diffMoney = diff,
          // };
          // let info = {
          // 	param : data,
          // 	scene : data.scene,
          // 	diffMoney : diff;
          // 	newLevel : level;
          // 	propertyType = RoomPropertyData.getInstance(): getCurPropertyId();
          // };
          // let action = GameMechineConfig.ACTION_RECHARGE;
          // MechineManage.getInstance(): receiveAction(action, info);

          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).GAME_ROOM_LEVEL_DOWN_RECHANGE);
          (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
            error: Error()
          }), GCache) : GCache).SelectGame.setDegradeInfo({});
        } //当前场次是否能继续游戏
        //根据入场银币上下线来判断

        /** 当前场次是否能继续游戏  根据入场银币上下线来判断*/


        checkIsLegalPlay() {
          return this._checkIsLegal(false);
        }
        /**
         * 
         * @param isByExitMoney 是否以退场下限值为判断条件
         * @param data 
         */


        _checkIsLegal(isByExitMoney, data) {
          if (isByExitMoney === void 0) {
            isByExitMoney = false;
          }

          if (data === void 0) {
            data = null;
          }
        }

      };

      _export("GameRoomHelper", GameRoomHelper = new _GameRoomHelper());

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=60be01e28fcd9549543aa8fc0d5f91c94d1b743a.js.map