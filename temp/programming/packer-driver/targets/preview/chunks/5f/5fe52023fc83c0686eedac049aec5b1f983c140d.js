System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, GCache, AppEvent, ClientInfo, GConstants, UIID, EventManager, Utils, BaseControll, GlobalCMD, PayAgent, GoodsDataServers, _crd;

  function _reportPossibleCrUseOfGCache(extras) {
    _reporterNs.report("GCache", "../../cache/GCache", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAppEvent(extras) {
    _reporterNs.report("AppEvent", "../../config/AppEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfClientInfo(extras) {
    _reporterNs.report("ClientInfo", "../../config/GameConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGConstants(extras) {
    _reporterNs.report("GConstants", "../../config/GameConstant", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIID(extras) {
    _reporterNs.report("UIID", "../../config/UIConfig", _context.meta, extras);
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

  function _reportPossibleCrUseOfPayAgent(extras) {
    _reporterNs.report("PayAgent", "../PayAgent", _context.meta, extras);
  }

  _export("GoodsDataServers", void 0);

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
      GConstants = _unresolved_5.GConstants;
    }, function (_unresolved_6) {
      UIID = _unresolved_6.UIID;
    }, function (_unresolved_7) {
      EventManager = _unresolved_7.EventManager;
    }, function (_unresolved_8) {
      Utils = _unresolved_8.Utils;
    }, function (_unresolved_9) {
      BaseControll = _unresolved_9.BaseControll;
    }, function (_unresolved_10) {
      GlobalCMD = _unresolved_10.GlobalCMD;
    }, function (_unresolved_11) {
      PayAgent = _unresolved_11.PayAgent;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "3fcdb0H8OZHoqQcP2YTzpG5", "GoodsDataServers", undefined);

      _export("GoodsDataServers", GoodsDataServers = class GoodsDataServers extends (_crd && BaseControll === void 0 ? (_reportPossibleCrUseOfBaseControll({
        error: Error()
      }), BaseControll) : BaseControll) {
        static getInstance() {
          if (!this._instance || this._instance == null) {
            this._instance = new GoodsDataServers("GoodsDataServers");
          }

          return this._instance;
        }
        /** 上次请求更新的时间 */


        //实例化
        constructor(name) {
          super(name);
          this._lastUpdateTime = {
            ["GoodsData"]: 0,
            ["Props"]: 0,
            ["Roles"]: 0,
            ["RoleSkill"]: 0,
            ["BuildData"]: 0
          };
          this.eventGoodlisteners = {};
          this.tempEventGoodlisteners = {};
          this.currowReqCreaterOrder = null;
          this.handlerShareExpTime = null;
        }

        static init() {
          if (this._instance) {
            this._instance.clear();
          }

          this._instance = null;
          GoodsDataServers.getInstance();
          return;
        }
        /**初始化添加事件绑定 */


        onInitModuleEvent() {
          //请求拉取请求拉取商城列表/详情/数据
          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_REQ_GOODS_INFO, this.reqGoodsInfo); //商城数据返回

          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_FORWARD_GOODS_INFO, this.resqGoodsInfo); //商城请求购买道具

          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_CMD_REQ_BUY_MALL_PROP, this.reqBuyMallProp); //商城请求购买道具返回

          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_CMD_RESP_BUY_MALL_PROP, this.respBuyMallProp);
          /************************第三方相关************************/
          //即将发起支付

          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).OTHER_PAY_WILL, this.reqWillPay); //支付的结果

          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).OTHER_PAY_RESULT, this.otherPayResult); //分享指定好友的结果

          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).OTHER_SHTRE_FRIEND_RESULT, this.otherShareFriend);
        } // /** 请求拉取商城列表/详情 */


        reqGoodsInfo(event, param) {
          if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).table_isEmpty(param)) {
            return;
          }

          param = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).table_verify(param);
          param["scene"] = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).number_valueOf(param["scene"], (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
            error: Error()
          }), GConstants) : GConstants).GoodsListID.MarketGold); //默认获取银币 详见 GoodsListID配置

          param["money"] = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).nullToDefault(param["money"], (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
            error: Error()
          }), GCache) : GCache).User.getUserMoneyByID());
          param["operation"] = (_crd && ClientInfo === void 0 ? (_reportPossibleCrUseOfClientInfo({
            error: Error()
          }), ClientInfo) : ClientInfo).PhoneCardType; //手机卡类型 1移动 2 联通 3 电信

          param["bundleId"] = (_crd && ClientInfo === void 0 ? (_reportPossibleCrUseOfClientInfo({
            error: Error()
          }), ClientInfo) : ClientInfo).BundleId; //包名

          var sendMsg = {
            cmd: (_crd && GlobalCMD === void 0 ? (_reportPossibleCrUseOfGlobalCMD({
              error: Error()
            }), GlobalCMD) : GlobalCMD).PHP_GOODS_INFO,
            body: param
          };
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_SEND_MSG, sendMsg);
        } //返回商品数据


        resqGoodsInfo(event, isSuccess, respData, reqData) {
          this.dump(respData, "商品商城数据返回---" + isSuccess);

          if (!isSuccess) {
            return;
          }

          if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).table_isEmpty(respData)) {
            return;
          }

          (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
            error: Error()
          }), GCache) : GCache).ShopInfo.update(respData);
          var sceneData = (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
            error: Error()
          }), GCache) : GCache).GoodsData.updateGoods(respData); //通知商品列表有更新

          if (sceneData) {
            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
              error: Error()
            }), AppEvent) : AppEvent).ACTIVITY_GOODSLIST_UPDATE, sceneData, reqData);
            (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
              error: Error()
            }), GCache) : GCache).ShopInfo.update(sceneData);
          }
        }
        /** 请求商城兑换 */


        reqBuyMallProp(event, itemData) {
          if (event === void 0) {
            event = null;
          }

          console.log('请求商城兑换', itemData);
          var param = {
            gid: itemData.gid,
            //兑换的商品
            gnum: itemData.gnum,
            //数量
            scene: (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
              error: Error()
            }), GConstants) : GConstants).ShopBigTabType.PROPS
          };
          var sendMsg = {
            cmd: (_crd && GlobalCMD === void 0 ? (_reportPossibleCrUseOfGlobalCMD({
              error: Error()
            }), GlobalCMD) : GlobalCMD).PHP_BUY_MALL_PROP,
            body: param
          };
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_SEND_MSG, sendMsg);
        }
        /** 请求商城兑换返回 */


        respBuyMallProp(event, isSuccess, respData, reqData) {
          this.print("请求商城兑换(兑换道具)返回", isSuccess, respData, reqData); //关闭网络loading

          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).SYS_CLOSE_NETLOADING);

          if (isSuccess && respData['flag'] >= 0) {
            var flag = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).number_valueOf(respData["flag"]);

            var _data = (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
              error: Error()
            }), GCache) : GCache).PropsConf.getPropsInfoById(respData['propsId']); //购买成功 1：金条diamond 银币:money 2：兑换券


            if (flag == 1) {
              //更新资产数据 银币
              if (respData["money"] != null) {
                (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
                  error: Error()
                }), GCache) : GCache).User.updateUserMoneyByID((_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
                  error: Error()
                }), GConstants) : GConstants).PropertyType.SILVER_COIN, respData["money"]);
              } //金条


              if (respData["diamond"] != null) {
                (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
                  error: Error()
                }), GCache) : GCache).User.updateUserMoneyByID((_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
                  error: Error()
                }), GConstants) : GConstants).PropertyType.GOLD_BAR, respData["diamond"]);
              } //通知成功兑换结果


              (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
                error: Error()
              }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
                error: Error()
              }), AppEvent) : AppEvent).NOTIFY_EXCHANGE_RESULT, {
                state: isSuccess,
                data: respData
              }); //打开恭喜获得

              var paramGX = {
                name: respData.name,
                icon: _data['url'],
                num: reqData['gnum']
              };
              (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
                error: Error()
              }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
                error: Error()
              }), AppEvent) : AppEvent).VIEW_UI_OPEN, (_crd && UIID === void 0 ? (_reportPossibleCrUseOfUIID({
                error: Error()
              }), UIID) : UIID).GongXiHuoDePrefab, [paramGX]);
            } else if (flag == -2) {
              //道具已满，私信发放
              //更新资产数据
              if (respData["money"] != null) {
                (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
                  error: Error()
                }), GCache) : GCache).User.updateUserMoneyByID((_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
                  error: Error()
                }), GConstants) : GConstants).PropertyType.SILVER_COIN, respData["money"]);
              }

              if (respData["diamond"] != null) {
                (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
                  error: Error()
                }), GCache) : GCache).User.updateUserMoneyByID((_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
                  error: Error()
                }), GConstants) : GConstants).PropertyType.GOLD_BAR, respData["diamond"]);
              } //通知道具已满时候兑换结果


              (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
                error: Error()
              }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
                error: Error()
              }), AppEvent) : AppEvent).NOTIFY_EXCHANGE_RESULT, {
                state: false,
                data: respData
              });
            }
          } else {
            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
              error: Error()
            }), AppEvent) : AppEvent).SYS_TOAST_TIP, {
              content: respData['msg']
            }); //通知失败的兑换结果

            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
              error: Error()
            }), AppEvent) : AppEvent).NOTIFY_EXCHANGE_RESULT, {
              state: false,
              data: respData
            });
          }
        }
        /** 平台支付结果 */


        otherPayResult(event, respBody) {
          this.print("平台支付结果==>", respBody);

          if (respBody && respBody["respCode"] == (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
            error: Error()
          }), GConstants) : GConstants).AppPayResult.SUCCESS) {}
        }

        clear() {
          super.clear();
          this.tempEventGoodlisteners = {};
          this.eventGoodlisteners = {};
        }
        /**
         * 即将请求支付
         * @param event 
         * @param goodID 商品分类ID 详见GoodsListID
         * @param gid 具体商品ID
         */


        reqWillPay(event, goodID, gid, callback) {
          if (callback === void 0) {
            callback = null;
          }

          if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).isNull(goodID) || (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).isNull(gid)) {
            return;
          }

          var param = {
            scene: goodID,
            gid: gid,
            callback: callback,
            sceneType: (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
              error: Error()
            }), GCache) : GCache).CurrowPaySceneType,
            otherEx: {}
          };

          if ((_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
            error: Error()
          }), GCache) : GCache).Desk) {
            param.otherEx = {
              gameID: (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
                error: Error()
              }), GCache) : GCache).Desk.getCurGameID(),
              tableID: (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
                error: Error()
              }), GCache) : GCache).Desk.getCurTableID(),
              levelID: (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
                error: Error()
              }), GCache) : GCache).Desk.getCurLevelID()
            };
          }

          this.dump(param, "即将请求支付");
          var payAgent = new (_crd && PayAgent === void 0 ? (_reportPossibleCrUseOfPayAgent({
            error: Error()
          }), PayAgent) : PayAgent)(param);
        }
        /**
         * 邀请好友成功之后获取奖励
         * @param  
         * @param  商品分类ID 详见GoodsListID
         * @param  具体商品ID
         */


        otherShareFriend() {
          // 获取邀请好友奖励配置
          var shareId = 0;
          var friendShareMsg = (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
            error: Error()
          }), GCache) : GCache).ShareInfo.getShareConfigByType((_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
            error: Error()
          }), GConstants) : GConstants).ShareSceneConf.friend) || [];

          if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).table_isEmpty(friendShareMsg)) {
            shareId = 666; //拉取不到配置时候默认给的奖励
          } else {
            shareId = friendShareMsg[0]['share_id'];
          }

          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_REQ_SHARE_AWARD, shareId, (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
            error: Error()
          }), GConstants) : GConstants).ReqUrl.shareType.other, false);
        }

      });

      GoodsDataServers._instance = null;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=5fe52023fc83c0686eedac049aec5b1f983c140d.js.map