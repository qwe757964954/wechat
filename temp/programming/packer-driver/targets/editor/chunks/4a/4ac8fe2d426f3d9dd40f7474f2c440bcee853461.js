System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, view, GCache, AppEvent, ClientInfo, GConstants, StoreKey, UIConfigData, UIID, Utils, Encrypt, LayerManager, EventManager, Network, BaseControll, Platform, GlobalCMD, HallController, _crd;

  function _reportPossibleCrUseOfGCache(extras) {
    _reporterNs.report("GCache", "../cache/GCache", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAppEvent(extras) {
    _reporterNs.report("AppEvent", "../config/AppEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfClientInfo(extras) {
    _reporterNs.report("ClientInfo", "../config/GameConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGConstants(extras) {
    _reporterNs.report("GConstants", "../config/GameConstant", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStoreKey(extras) {
    _reporterNs.report("StoreKey", "../config/GameConstant", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIConfigData(extras) {
    _reporterNs.report("UIConfigData", "../config/UIConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIID(extras) {
    _reporterNs.report("UIID", "../config/UIConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUtils(extras) {
    _reporterNs.report("Utils", "../framework/Utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEncrypt(extras) {
    _reporterNs.report("Encrypt", "../framework/crypto/Encrypto", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLayerManager(extras) {
    _reporterNs.report("LayerManager", "../framework/layer/LayerManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventManager(extras) {
    _reporterNs.report("EventManager", "../framework/manager/EventManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNetwork(extras) {
    _reporterNs.report("Network", "../framework/network/NetState", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseControll(extras) {
    _reporterNs.report("BaseControll", "../framework/vc/BaseController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlatform(extras) {
    _reporterNs.report("Platform", "../platform/Platform", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGlobalCMD(extras) {
    _reporterNs.report("GlobalCMD", "./gnet/GlobalCMD", _context.meta, extras);
  }

  _export("HallController", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      view = _cc.view;
    }, function (_unresolved_2) {
      GCache = _unresolved_2.GCache;
    }, function (_unresolved_3) {
      AppEvent = _unresolved_3.AppEvent;
    }, function (_unresolved_4) {
      ClientInfo = _unresolved_4.ClientInfo;
    }, function (_unresolved_5) {
      GConstants = _unresolved_5.GConstants;
      StoreKey = _unresolved_5.StoreKey;
    }, function (_unresolved_6) {
      UIConfigData = _unresolved_6.UIConfigData;
      UIID = _unresolved_6.UIID;
    }, function (_unresolved_7) {
      Utils = _unresolved_7.Utils;
    }, function (_unresolved_8) {
      Encrypt = _unresolved_8.Encrypt;
    }, function (_unresolved_9) {
      LayerManager = _unresolved_9.LayerManager;
    }, function (_unresolved_10) {
      EventManager = _unresolved_10.EventManager;
    }, function (_unresolved_11) {
      Network = _unresolved_11.Network;
    }, function (_unresolved_12) {
      BaseControll = _unresolved_12.BaseControll;
    }, function (_unresolved_13) {
      Platform = _unresolved_13.Platform;
    }, function (_unresolved_14) {
      GlobalCMD = _unresolved_14.GlobalCMD;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "96785nFOnRAxLBUmLZT/U35", "HallController", undefined);

      __checkObsolete__(['view']);

      _export("HallController", HallController = class HallController extends (_crd && BaseControll === void 0 ? (_reportPossibleCrUseOfBaseControll({
        error: Error()
      }), BaseControll) : BaseControll) {
        constructor(...args) {
          super(...args);
          this._handlerTimeOutIntoGame = null;

          this.print = function (...args) {};
        }

        static getInstance() {
          if (!this._instance || this._instance == null) {
            this._instance = new HallController("HallController");
          }

          return this._instance;
        }

        static init() {
          if (this._instance) {
            this._instance.clear();
          }

          this._instance = null;
          HallController.getInstance();
          return;
        }
        /**初始化添加事件绑定 */


        onInitModuleEvent() {
          //显示大厅界面
          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).HALL_GOTO_SHOW, this.showHall); //显示大厅界面

          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).HALL_TODO_SHOW, this.toDoHallShow); //快速开始
          // this.addModelListener(AppEvent.HALL_QUICK_START, this.quickStart)
          //请求登录初始化

          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_REQ_USER_LOGIN_CORE_INIT, this.reqLoginCoreInit); //登录初始化返回

          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_FORWARD_USER_LOGIN_CORE_INIT, this.respLoginCoreInit); //请求更新用户信息

          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_REQ_SET_USERINFO, this.reqSetUserInfo); //更新用户信息返回

          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_FORWARD_SET_USERINFO, this.respSetUserInfo); //请求经验等级配置

          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_REQ_LEVEL_MODEL_CONFIG, this.reqLevelModelConfig); //经验等级配置返回

          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_FORWARD_LEVEL_MODEL_CONFIG, this.respLevelModelConfig); //请求自己的道具信息

          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_REQ_PROPS_INFO, this.reqPropsInfo); //自己的道具信息返回

          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_FORWARD_PROPS_INFO, this.respPropsInfo); //请求大厅游戏位配置

          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_REQ_HALL_GAME_CONFIG, this.reqHallGameConfig); //大厅游戏位配置返回

          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_FORWARD_HALL_GAME_CONFIG, this.respHallGameConfig); //请求大厅在线人数

          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_REQ_ONLINE_PERSON, this.reqOnlinePerson); //大厅在线人数回调

          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_FORWARD_ONLINE_PERSON, this.respOnlinePerson); //请求子游戏场次中的房间列表

          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_REQ_GAME_LEVEL_ROOM_TAB, this.reqGameLeaveRoom); //子游戏场次中的房间列表回调

          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_FORWARD_GAME_LEVEL_ROOM_TAB, this.respGameLeaveRoom); //请求子游戏场次中人数

          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_REQ_GAME_LEVEL_PERSON_COUNT, this.reqGameLeavePersonCount); //子游戏场次中人数回调

          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_FORWARD_GAME_LEVEL_PERSON_COUNT, this.respGameLeavePersonCount); //请求是否需要更新配置

          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_REQ_GOODS_BASE, this.reqGoodsBase); //响应是否需要更新配置

          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_RESP_GOODS_BASE, this.respGoodsBase);
        }
        /**
         * 显示大厅
         * @param event 
         * @param isByGame boolean是否从游戏中来
         * @returns 
         */


        showHall(event, isByGame = false) {
          //此处要判断用户是否登录成功
          if ((_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
            error: Error()
          }), GCache) : GCache).User.isLoginSuccesed()) {
            if (!(_crd && LayerManager === void 0 ? (_reportPossibleCrUseOfLayerManager({
              error: Error()
            }), LayerManager) : LayerManager).has((_crd && UIID === void 0 ? (_reportPossibleCrUseOfUIID({
              error: Error()
            }), UIID) : UIID).HallPrefab) && !(_crd && LayerManager === void 0 ? (_reportPossibleCrUseOfLayerManager({
              error: Error()
            }), LayerManager) : LayerManager).isLoading((_crd && UIID === void 0 ? (_reportPossibleCrUseOfUIID({
              error: Error()
            }), UIID) : UIID).HallPrefab)) {
              (_crd && LayerManager === void 0 ? (_reportPossibleCrUseOfLayerManager({
                error: Error()
              }), LayerManager) : LayerManager).clearOther((_crd && UIConfigData === void 0 ? (_reportPossibleCrUseOfUIConfigData({
                error: Error()
              }), UIConfigData) : UIConfigData)[(_crd && UIID === void 0 ? (_reportPossibleCrUseOfUIID({
                error: Error()
              }), UIID) : UIID).HallPrefab].layer);
              (_crd && LayerManager === void 0 ? (_reportPossibleCrUseOfLayerManager({
                error: Error()
              }), LayerManager) : LayerManager).clear((_crd && UIConfigData === void 0 ? (_reportPossibleCrUseOfUIConfigData({
                error: Error()
              }), UIConfigData) : UIConfigData)[(_crd && UIID === void 0 ? (_reportPossibleCrUseOfUIID({
                error: Error()
              }), UIID) : UIID).HallPrefab].layer);
              (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
                error: Error()
              }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
                error: Error()
              }), AppEvent) : AppEvent).SYS_PACKAGE_LOAD, (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
                error: Error()
              }), GConstants) : GConstants).PkgLoaderTaskList.Hall, () => {
                if ((_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
                  error: Error()
                }), GCache) : GCache).User.isLoginSuccesed() == false) {
                  return;
                } //通知:sys周期变化


                (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
                  error: Error()
                }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
                  error: Error()
                }), AppEvent) : AppEvent).SYS_APP_LIFE, (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
                  error: Error()
                }), GConstants) : GConstants).AppRunLife.Hall_Will_Open);
                (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
                  error: Error()
                }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
                  error: Error()
                }), AppEvent) : AppEvent).VIEW_UI_OPEN, (_crd && UIID === void 0 ? (_reportPossibleCrUseOfUIID({
                  error: Error()
                }), UIID) : UIID).HallPrefab, null, {
                  onAdded: function () {
                    //通知:主场景更换
                    (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
                      error: Error()
                    }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
                      error: Error()
                    }), AppEvent) : AppEvent).VIEW_UI_MAIN_UPDATE, (_crd && UIID === void 0 ? (_reportPossibleCrUseOfUIID({
                      error: Error()
                    }), UIID) : UIID).HallPrefab); //通知:sys周期变化

                    (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
                      error: Error()
                    }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
                      error: Error()
                    }), AppEvent) : AppEvent).SYS_APP_LIFE, (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
                      error: Error()
                    }), GConstants) : GConstants).AppRunLife.Hall_Opened);
                    (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
                      error: Error()
                    }), GCache) : GCache).setDesk(null);
                    (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
                      error: Error()
                    }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
                      error: Error()
                    }), AppEvent) : AppEvent).HALL_TODO_SHOW, isByGame);
                  },
                  onRemoved: function () {
                    //通知:sys周期变化
                    (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
                      error: Error()
                    }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
                      error: Error()
                    }), AppEvent) : AppEvent).SYS_APP_LIFE, (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
                      error: Error()
                    }), GConstants) : GConstants).AppRunLife.Hall_Closed);
                  }
                });
              });
            } else {
              //存在大厅 判断是否在游戏中
              this.print("存在大厅 判断是否在游戏中");
              this.toDoHallShow(null, false);
            }
          } else {
            //正在登录中
            if ((_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
              error: Error()
            }), GCache) : GCache).User.isLogining()) {
              return;
            } //重新登录


            (_crd && LayerManager === void 0 ? (_reportPossibleCrUseOfLayerManager({
              error: Error()
            }), LayerManager) : LayerManager).clear(null);
            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
              error: Error()
            }), AppEvent) : AppEvent).NET_GOTO_START_LOGIN);
          }
        }
        /** 大厅显示完成后的操作 */


        toDoHallShow(event, isByGame = false) {
          //判断是否弹出签到
          // if (GCache.Activity.checkTodayIsOpenSign() == false && GCache.Activity.checkHaveSignin() == true) {
          // 	if (GCache.Activity.checkHaveSignin()) {
          // 		EventManager.dispatch(AppEvent.VIEW_UI_OPEN, UIID.SigninPrefab, null, null, null, true);
          // 	}
          // }
          //请求基础配置
          console.log("请求基础配置");
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_REQ_GOODS_BASE);

          if (isByGame) {
            //从游戏中返回
            //请求签到数据
            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
              error: Error()
            }), AppEvent) : AppEvent).NET_REQ_SIGNIN_CONFIG); //请求限时折扣

            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
              error: Error()
            }), AppEvent) : AppEvent).NET_REQ_HOLIDAYS_GIFTPACKAGE); //请求限时折扣礼包数据

            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
              error: Error()
            }), AppEvent) : AppEvent).NET_REQ_GOODS_INFO, {
              scene: (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
                error: Error()
              }), GConstants) : GConstants).GoodsListID.limitPack
            }); //请求商城破产数据

            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
              error: Error()
            }), AppEvent) : AppEvent).NET_REQ_GOODS_INFO, {
              scene: (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
                error: Error()
              }), GConstants) : GConstants).GoodsListID.Bankruptcy
            }); //请求首充礼包商品数据

            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
              error: Error()
            }), AppEvent) : AppEvent).NET_REQ_GOODS_INFO, {
              scene: (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
                error: Error()
              }), GConstants) : GConstants).GoodsListID.GiftPack
            }); //请求商城银币

            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
              error: Error()
            }), AppEvent) : AppEvent).NET_REQ_GOODS_INFO, {
              scene: (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
                error: Error()
              }), GConstants) : GConstants).GoodsListID.MarketSilver
            }); //请求商城道具

            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
              error: Error()
            }), AppEvent) : AppEvent).NET_REQ_GOODS_INFO, {
              scene: (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
                error: Error()
              }), GConstants) : GConstants).GoodsListID.MarketProp
            }); //请求邮箱数据

            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
              error: Error()
            }), AppEvent) : AppEvent).NET_CMD_REQ_WATCH); //请求活动中心数据

            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
              error: Error()
            }), AppEvent) : AppEvent).NET_CMD_REQ_TASK_ACT_CONFIG); //请求首充礼包配置

            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
              error: Error()
            }), AppEvent) : AppEvent).NET_REQ_FIRST_PAY_CONFIG);
          } else {
            //请求新手活动
            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
              error: Error()
            }), AppEvent) : AppEvent).NET_REQ_NEW_PLAYER_CONFIG); //平台好友授权

            (_crd && Platform === void 0 ? (_reportPossibleCrUseOfPlatform({
              error: Error()
            }), Platform) : Platform).reqPlatformFriendInteraction(() => {
              if ((_crd && Platform === void 0 ? (_reportPossibleCrUseOfPlatform({
                error: Error()
              }), Platform) : Platform).WxAuthSettingFriends == 1) {
                (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
                  error: Error()
                }), GCache) : GCache).User.getCloudStorageSaveList(resParam => {
                  (_crd && Platform === void 0 ? (_reportPossibleCrUseOfPlatform({
                    error: Error()
                  }), Platform) : Platform).setPlatformCloudStorage(resParam); //提前预加载数据

                  let data = {};
                  data["UIKey"] = "friendList";
                  data["init"] = true;
                  data["param"] = (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
                    error: Error()
                  }), GCache) : GCache).User.getCloudStorageParam();
                  (_crd && Platform === void 0 ? (_reportPossibleCrUseOfPlatform({
                    error: Error()
                  }), Platform) : Platform).postMessage(data);
                });
              }
            }); //通知:请求推荐弹窗

            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
              error: Error()
            }), AppEvent) : AppEvent).RECOMMEND_POP_GET, (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
              error: Error()
            }), GConstants) : GConstants).PopupPos.POS_LOGIN); //请求商城破产数据

            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
              error: Error()
            }), AppEvent) : AppEvent).NET_REQ_GOODS_INFO, {
              scene: (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
                error: Error()
              }), GConstants) : GConstants).GoodsListID.Bankruptcy
            });
          }
        }
        /** 登录初始化 */


        reqLoginCoreInit(event) {
          let data = {
            w: view.getVisibleSize().width,
            h: view.getVisibleSize().height,
            deviceno: (_crd && ClientInfo === void 0 ? (_reportPossibleCrUseOfClientInfo({
              error: Error()
            }), ClientInfo) : ClientInfo).SignDeviceId,
            networkstate: (_crd && Network === void 0 ? (_reportPossibleCrUseOfNetwork({
              error: Error()
            }), Network) : Network).instance.name,
            osversion: `${(_crd && ClientInfo === void 0 ? (_reportPossibleCrUseOfClientInfo({
              error: Error()
            }), ClientInfo) : ClientInfo).PhoneModel},${(_crd && ClientInfo === void 0 ? (_reportPossibleCrUseOfClientInfo({
              error: Error()
            }), ClientInfo) : ClientInfo).SysVer}`,
            macid: (_crd && ClientInfo === void 0 ? (_reportPossibleCrUseOfClientInfo({
              error: Error()
            }), ClientInfo) : ClientInfo).MachineId,
            guid: (_crd && ClientInfo === void 0 ? (_reportPossibleCrUseOfClientInfo({
              error: Error()
            }), ClientInfo) : ClientInfo).Guid,
            config_format: "json",
            api_ver: 2
          };
          let sendMsg = {
            cmd: (_crd && GlobalCMD === void 0 ? (_reportPossibleCrUseOfGlobalCMD({
              error: Error()
            }), GlobalCMD) : GlobalCMD).PHP_CORE_INIT,
            body: data
          };
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_SEND_MSG, sendMsg);
        }
        /** 登录初始化返回 */


        respLoginCoreInit(event, isSuccess, respData, reqData) {
          this.dump(respData, "登录初始化返回" + isSuccess);

          if (isSuccess == false) {
            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
              error: Error()
            }), AppEvent) : AppEvent).NET_REQ_USER_LOGIN_CORE_INIT);
            return;
          }

          respData = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).table_verify(respData); //结算破产开关

          if (respData["bankrupt_pay"]) {
            (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
              error: Error()
            }), GCache) : GCache).BankrupData.setBankruptPaySceneSatus(respData["bankrupt_pay"]);
          } //图片配置相关信息


          if (respData["goodsbase_url"]) {
            let conf = respData["goodsbase_url"];
            conf["srvtime"] = respData["srvtime"];
            (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
              error: Error()
            }), GCache) : GCache).PropsConf.setPropsBaseUrlConf(conf);
          }
        } //请求更新用户信息


        reqSetUserInfo(event, param) {
          if (!param) {
            return;
          }

          param = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).table_verify(param);
          let body = {};

          if (param["nick"] != null) {
            body['nick'] = param["nick"];
          }

          if (param["sex"] != null) {
            body['sex'] = param["sex"];
          }

          if (param["city"] != null) {
            body['city'] = param["city"];
          }

          if (param["avatar"] != null) {
            body['avatar'] = param["avatar"];
          }

          let sendMsg = {
            cmd: (_crd && GlobalCMD === void 0 ? (_reportPossibleCrUseOfGlobalCMD({
              error: Error()
            }), GlobalCMD) : GlobalCMD).PHP_UPDATE_USERINFO,
            body: body
          };
          console.log("发起更新信息请求:", sendMsg);
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_SEND_MSG, sendMsg);
        } //更新用户信息返回


        respSetUserInfo(event, isSuccess, respData, reqData) {
          console.log("更新用户信息返回:", isSuccess, respData, reqData);

          if (isSuccess) {
            respData = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).table_verify(respData);

            if (respData) {
              let body = {};

              if (reqData.nick && respData.nick) {
                body['nick'] = respData.nick;
              }

              if (reqData.sex && respData.sex) {
                body['sex'] = respData.sex;
              }

              if (reqData.avatar) {
                if (respData.icon) {
                  body['avatar_s'] = respData.icon;
                  body['avatar_m'] = respData.icon;
                  body['avatar_b'] = respData.icon_big;
                }
              }

              console.log("更新用户信息返回body:", body);

              for (let key in body) {
                if (Object.prototype.hasOwnProperty.call(body, key)) {
                  let value = body[key];

                  if (value != null && value != undefined) {
                    (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
                      error: Error()
                    }), GCache) : GCache).User.updateDataUserKey(key, value);
                  }
                }
              } // 用户信息有更新


              (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
                error: Error()
              }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
                error: Error()
              }), AppEvent) : AppEvent).USER_UPDATE_INFO, body);
            }
          }
        } //请求经验等级配置


        reqLevelModelConfig(event) {
          let sendMsg = {
            cmd: (_crd && GlobalCMD === void 0 ? (_reportPossibleCrUseOfGlobalCMD({
              error: Error()
            }), GlobalCMD) : GlobalCMD).PHP_LEVEL_MODEL_CONFIG,
            body: {
              cli_ver: -1
            }
          };
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_SEND_MSG, sendMsg);
        } //经验等级配置返回


        respLevelModelConfig(event, isSuccess, respData, reqData) {
          this.dump(respData, "经验等级配置返回" + isSuccess);

          if (isSuccess) {
            (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
              error: Error()
            }), GCache) : GCache).User.updateLevelExpConfig(respData["level"]); //经验等级有更新

            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
              error: Error()
            }), AppEvent) : AppEvent).USER_UPDATE_LEVEL);
          }
        } //请求自己的道具信息


        reqPropsInfo(event) {
          let sendMsg = {
            cmd: (_crd && GlobalCMD === void 0 ? (_reportPossibleCrUseOfGlobalCMD({
              error: Error()
            }), GlobalCMD) : GlobalCMD).PHP_PROPS_INFO,
            body: {}
          };
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_SEND_MSG, sendMsg);
        } //自己的道具信息返回


        respPropsInfo(event, isSuccess, respData, reqData) {
          this.dump(respData, "道具信息返回" + isSuccess);
          (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).dump(respData);

          if (isSuccess) {
            //更新道具信息
            (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
              error: Error()
            }), GCache) : GCache).User.updatePropsInfo(respData); //道具信息有更新

            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
              error: Error()
            }), AppEvent) : AppEvent).USER_UPDATE_PROPS);
          }
        } //请求大厅游戏配置


        reqHallGameConfig(event) {
          let param = {
            hall_version: (_crd && ClientInfo === void 0 ? (_reportPossibleCrUseOfClientInfo({
              error: Error()
            }), ClientInfo) : ClientInfo).HallVer,
            //hall_version 与 cli_ver不同则重新拉取数据
            cli_ver: -1,
            enable_special_game: 1,
            //此位标识特殊游戏位，1为返回，0为不返回--包括私人房，比赛场
            guid: (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
              error: Error()
            }), GCache) : GCache).User.getUserGuid(),
            lastLoginMid: (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
              error: Error()
            }), GCache) : GCache).User.getLastlocalMid() //用户上次登录的Mid, 用于游戏列表白名单控制

          };
          let sendMsg = {
            cmd: (_crd && GlobalCMD === void 0 ? (_reportPossibleCrUseOfGlobalCMD({
              error: Error()
            }), GlobalCMD) : GlobalCMD).PHP_HALLVIEW_CONFIG,
            body: param
          };
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_SEND_MSG, sendMsg);
        } //大厅游戏配置返回


        respHallGameConfig(event, isSuccess, respData, reqData) {
          this.dump(respData, "大厅游戏配置返回" + isSuccess);

          if (isSuccess) {
            (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
              error: Error()
            }), GCache) : GCache).SelectGame.updateServerGameConfig(respData.info);
            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
              error: Error()
            }), AppEvent) : AppEvent).HALL_UPDATE_GAME_CONFIG);
          }
        } //请求大厅在线人数


        reqOnlinePerson(event, param) {
          let sendMsg = {
            cmd: (_crd && GlobalCMD === void 0 ? (_reportPossibleCrUseOfGlobalCMD({
              error: Error()
            }), GlobalCMD) : GlobalCMD).PHP_HALL_GAME_PLAYER_NUM,
            body: {}
          };
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_SEND_MSG, sendMsg);
        } //大厅在线人数回调


        respOnlinePerson(event, isSuccess, respData, reqData) {
          // this.print("大厅在线人数返回 ===>" + isSuccess)
          // Utils.dump(respData)
          if (isSuccess) {
            (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
              error: Error()
            }), GCache) : GCache).SelectGame.updateServerGamePersonOnline(respData);
            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
              error: Error()
            }), AppEvent) : AppEvent).HALL_UPDATE_GAME_ONLINE_PERSON);
          }
        } //请求子游戏场次中的房间列表


        reqGameLeaveRoom(event, gameID = null, islevel_500 = 1) {
          if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).isNull(gameID)) {
            return;
          }

          if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).isNull(islevel_500)) {
            islevel_500 = 1;
          }

          let ver = (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
            error: Error()
          }), GCache) : GCache).SelectGame.getGameVersionByGameID(gameID);

          if (!ver) {
            ver = 0;
          }

          let param = {
            hall_version: (_crd && ClientInfo === void 0 ? (_reportPossibleCrUseOfClientInfo({
              error: Error()
            }), ClientInfo) : ClientInfo).HallVer,
            current_ver: 0,
            game_id: gameID,
            islevel_500: islevel_500,
            //是否返回包含快速场数据，不传或0不返回，1返回
            gameVer: ver
          };
          let sendMsg = {
            cmd: (_crd && GlobalCMD === void 0 ? (_reportPossibleCrUseOfGlobalCMD({
              error: Error()
            }), GlobalCMD) : GlobalCMD).PHP_GAME_LEVEL_LIST,
            body: param
          };
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_SEND_MSG, sendMsg);
        } //子游戏场次中的房间列表返回


        respGameLeaveRoom(event, isSuccess, respData, reqData) {
          this.dump(respData, "子游戏场次中的房间列表返回" + isSuccess);

          if (isSuccess) {
            let isReset = true;

            if (reqData && reqData["islevel_500"] != 1) {
              isReset = false;
            }

            (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
              error: Error()
            }), GCache) : GCache).SelectGame.updateServerGameLevelTabList(respData["gameid"], respData["levels"], isReset);
            this.print("当前保存的游戏房间列表缓存");
            (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).dump((_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
              error: Error()
            }), GCache) : GCache).SelectGame.getServerGameLevelTabListByGameID(respData["gameid"]));
            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
              error: Error()
            }), AppEvent) : AppEvent).HALL_UPDATE_GAME_LEVEL_TAB, respData["gameid"]);
          }
        } //请求子游戏场次中人数


        reqGameLeavePersonCount(event, gameID = null) {
          if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).isNull(gameID)) {
            return;
          }

          let param = {
            game_id: gameID
          };
          let sendMsg = {
            cmd: (_crd && GlobalCMD === void 0 ? (_reportPossibleCrUseOfGlobalCMD({
              error: Error()
            }), GlobalCMD) : GlobalCMD).PHP_GAME_LEVEL_COUNT,
            body: param
          };
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_SEND_MSG, sendMsg);
        } //子游戏场次中人数返回


        respGameLeavePersonCount(event, isSuccess, respData, reqData) {
          this.dump(respData, "子游戏场次中人数返回" + isSuccess);

          if (isSuccess) {
            (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
              error: Error()
            }), GCache) : GCache).SelectGame.updateServerGameLevelPeson(respData["game_id"], respData["level_cnt"]);
            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
              error: Error()
            }), AppEvent) : AppEvent).HALL_UPDATE_GAME_LEVEL_PERSON, respData["game_id"]);
          }
        } //当前类日志输出


        //当前类日志输出
        // public dump = function (arg1, args2 = null) {
        // }

        /**
         * 请求是否需要更新配置
         * @param event 
         */
        reqGoodsBase(event) {
          this.print("基础配置请求");
          let baseConfTime = (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
            error: Error()
          }), GCache) : GCache).PropsConf.getPropsConfTime((_crd && StoreKey === void 0 ? (_reportPossibleCrUseOfStoreKey({
            error: Error()
          }), StoreKey) : StoreKey).PROPS_BASE_CONF);
          let unionConfTime = (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
            error: Error()
          }), GCache) : GCache).PropsConf.getPropsConfTime((_crd && StoreKey === void 0 ? (_reportPossibleCrUseOfStoreKey({
            error: Error()
          }), StoreKey) : StoreKey).PROPS_UNION_CONF);
          let obj = {
            1: baseConfTime,
            2: unionConfTime
          };
          let type = (_crd && Encrypt === void 0 ? (_reportPossibleCrUseOfEncrypt({
            error: Error()
          }), Encrypt) : Encrypt).JsonEncode(obj);
          let param = {
            type: type
          };
          let sendMsg = {
            cmd: (_crd && GlobalCMD === void 0 ? (_reportPossibleCrUseOfGlobalCMD({
              error: Error()
            }), GlobalCMD) : GlobalCMD).PHP_GOODS_BASE,
            body: param
          };
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_SEND_MSG, sendMsg);
        }
        /**
         * 返回是否更新配置 
         * @param event 
         * @param isSuccess 
         * @param respData 
         * @param reqData 
         */


        respGoodsBase(event, isSuccess, respData, reqData) {
          console.log("基础配置返回", isSuccess, respData, reqData);

          if (isSuccess) {
            if (!(_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).table_isEmpty(respData)) {
              this.print("数据不为空,需要下载");
              let propsUrlConf = (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
                error: Error()
              }), GCache) : GCache).PropsConf.getPropsBaseUrlConf();
              let iconPre = propsUrlConf["icon_pre"];

              if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                error: Error()
              }), Utils) : Utils).string_isEmpty(iconPre)) {
                return;
              }

              let time = propsUrlConf["srvtime"];
              let filepre = propsUrlConf["file_pre"];
              let filename = propsUrlConf['file_name'];
              let coreGoodsBaseUrl = filepre + filename[4] + "?v=" + time;
              let unionGoodsBaseUrl = filepre + filename[5] + "?v=" + time;
              console.log("goodsurl:", coreGoodsBaseUrl, unionGoodsBaseUrl); //飞小鸡没有地区性道具

              (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
                error: Error()
              }), GCache) : GCache).PropsConf.downloadAndSavePropsConf(coreGoodsBaseUrl, (_crd && StoreKey === void 0 ? (_reportPossibleCrUseOfStoreKey({
                error: Error()
              }), StoreKey) : StoreKey).PROPS_BASE_CONF);
              (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
                error: Error()
              }), GCache) : GCache).PropsConf.downloadAndSavePropsConf(unionGoodsBaseUrl, (_crd && StoreKey === void 0 ? (_reportPossibleCrUseOfStoreKey({
                error: Error()
              }), StoreKey) : StoreKey).PROPS_UNION_CONF);
            } else {
              this.print("数据为空");
            }
          } else {
            this.print("hehe请求失败");
          }
        }

      });

      HallController._instance = null;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=4ac8fe2d426f3d9dd40f7474f2c440bcee853461.js.map