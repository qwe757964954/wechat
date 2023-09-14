System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, GCache, AppEvent, GConstants, UIConfigData, UIID, LayerManager, EventManager, Utils, BaseControll, GlobalCMD, GlobalHeadCmdBinding, GPBWriteAndRead, GameController, _crd;

  function _reportPossibleCrUseOfGCache(extras) {
    _reporterNs.report("GCache", "../cache/GCache", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAppEvent(extras) {
    _reporterNs.report("AppEvent", "../config/AppEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGConstants(extras) {
    _reporterNs.report("GConstants", "../config/GameConstant", _context.meta, extras);
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

  function _reportPossibleCrUseOfGlobalCMD(extras) {
    _reporterNs.report("GlobalCMD", "./gnet/GlobalCMD", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGlobalHeadCmdBinding(extras) {
    _reporterNs.report("GlobalHeadCmdBinding", "./gnet/GlobalCMD", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGPBWriteAndRead(extras) {
    _reporterNs.report("GPBWriteAndRead", "./gnet/GPBWriteAndRead", _context.meta, extras);
  }

  _export("GameController", void 0);

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
      UIConfigData = _unresolved_5.UIConfigData;
      UIID = _unresolved_5.UIID;
    }, function (_unresolved_6) {
      LayerManager = _unresolved_6.LayerManager;
    }, function (_unresolved_7) {
      EventManager = _unresolved_7.EventManager;
    }, function (_unresolved_8) {
      Utils = _unresolved_8.Utils;
    }, function (_unresolved_9) {
      BaseControll = _unresolved_9.BaseControll;
    }, function (_unresolved_10) {
      GlobalCMD = _unresolved_10.GlobalCMD;
      GlobalHeadCmdBinding = _unresolved_10.GlobalHeadCmdBinding;
    }, function (_unresolved_11) {
      GPBWriteAndRead = _unresolved_11.GPBWriteAndRead;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1adecbsS/5EHJqAv85BT3p8", "GameController", undefined);

      _export("GameController", GameController = class GameController extends (_crd && BaseControll === void 0 ? (_reportPossibleCrUseOfBaseControll({
        error: Error()
      }), BaseControll) : BaseControll) {
        constructor(...args) {
          super(...args);
          this._reportGameVerRecord = {};
        }

        static getInstance() {
          if (!this._instance || this._instance == null) {
            this._instance = new GameController("GameController");
          }

          return this._instance;
        }

        static init() {
          if (this._instance) {
            this._instance.clear();
          }

          this._instance = null;
          GameController.getInstance();
          return;
        }
        /**初始化添加事件绑定 */


        onInitModuleEvent() {
          //显示游戏场景
          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).GAME_GOTO_SHOW, this.showGame); //退出游戏场景

          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).GAME_GOTO_EXIT, this.exitGame); //请求玩家玩某个游戏的信息

          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_REQ_GAME_PLAY_INFO, this.reqGamePlayInfo); //玩家玩某个游戏的信息返回

          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_RECEIVE_GAME_PLAY_INFO, this.respGamePlayInfo); //请求上报子游戏版本号

          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_REQ_REPORT_GAME_VERSION, this.reqReportGameVer);
        } //显示游戏界面


        showGame(event) {
          //此处要判断用户是否登录成功
          if ((_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
            error: Error()
          }), GCache) : GCache).User.isLoginSuccesed()) {
            // console.warn("是否正在加载:", LayerManager.isLoading(UIID.GameScenePrefab))
            if (!(_crd && LayerManager === void 0 ? (_reportPossibleCrUseOfLayerManager({
              error: Error()
            }), LayerManager) : LayerManager).has((_crd && UIID === void 0 ? (_reportPossibleCrUseOfUIID({
              error: Error()
            }), UIID) : UIID).GameScenePrefab) && !(_crd && LayerManager === void 0 ? (_reportPossibleCrUseOfLayerManager({
              error: Error()
            }), LayerManager) : LayerManager).isLoading((_crd && UIID === void 0 ? (_reportPossibleCrUseOfUIID({
              error: Error()
            }), UIID) : UIID).GameScenePrefab)) {
              //关闭网络加载
              (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
                error: Error()
              }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
                error: Error()
              }), AppEvent) : AppEvent).SYS_CLOSE_NETLOADING); //初始化绑定绑定映射

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
              }), GlobalHeadCmdBinding) : GlobalHeadCmdBinding, true);
              (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
                error: Error()
              }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
                error: Error()
              }), AppEvent) : AppEvent).SYS_PACKAGE_LOAD, (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
                error: Error()
              }), GConstants) : GConstants).PkgLoaderTaskList.Game, () => {
                if ((_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
                  error: Error()
                }), GCache) : GCache).User.isLoginSuccesed() == false) {
                  return;
                }

                if ((_crd && LayerManager === void 0 ? (_reportPossibleCrUseOfLayerManager({
                  error: Error()
                }), LayerManager) : LayerManager).has((_crd && UIID === void 0 ? (_reportPossibleCrUseOfUIID({
                  error: Error()
                }), UIID) : UIID).GameScenePrefab) || (_crd && LayerManager === void 0 ? (_reportPossibleCrUseOfLayerManager({
                  error: Error()
                }), LayerManager) : LayerManager).isLoading((_crd && UIID === void 0 ? (_reportPossibleCrUseOfUIID({
                  error: Error()
                }), UIID) : UIID).GameScenePrefab) == true) {
                  return;
                }

                (_crd && LayerManager === void 0 ? (_reportPossibleCrUseOfLayerManager({
                  error: Error()
                }), LayerManager) : LayerManager).clearOther((_crd && UIConfigData === void 0 ? (_reportPossibleCrUseOfUIConfigData({
                  error: Error()
                }), UIConfigData) : UIConfigData)[(_crd && UIID === void 0 ? (_reportPossibleCrUseOfUIID({
                  error: Error()
                }), UIID) : UIID).GameScenePrefab].layer);
                (_crd && LayerManager === void 0 ? (_reportPossibleCrUseOfLayerManager({
                  error: Error()
                }), LayerManager) : LayerManager).clear((_crd && UIConfigData === void 0 ? (_reportPossibleCrUseOfUIConfigData({
                  error: Error()
                }), UIConfigData) : UIConfigData)[(_crd && UIID === void 0 ? (_reportPossibleCrUseOfUIID({
                  error: Error()
                }), UIID) : UIID).GameScenePrefab].layer);
                this.print("打开游戏场景===>"); //通知:sys周期变化

                (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
                  error: Error()
                }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
                  error: Error()
                }), AppEvent) : AppEvent).SYS_APP_LIFE, (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
                  error: Error()
                }), GConstants) : GConstants).AppRunLife.Game_Will_Open);
                (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
                  error: Error()
                }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
                  error: Error()
                }), AppEvent) : AppEvent).VIEW_UI_OPEN, (_crd && UIID === void 0 ? (_reportPossibleCrUseOfUIID({
                  error: Error()
                }), UIID) : UIID).GameScenePrefab, null, {
                  onAdded: function () {
                    //通知:主场景更换
                    (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
                      error: Error()
                    }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
                      error: Error()
                    }), AppEvent) : AppEvent).VIEW_UI_MAIN_UPDATE, (_crd && UIID === void 0 ? (_reportPossibleCrUseOfUIID({
                      error: Error()
                    }), UIID) : UIID).GameScenePrefab); //通知:sys周期变化

                    (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
                      error: Error()
                    }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
                      error: Error()
                    }), AppEvent) : AppEvent).SYS_APP_LIFE, (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
                      error: Error()
                    }), GConstants) : GConstants).AppRunLife.Game_Opened);
                  },
                  onRemoved: function () {
                    //通知:sys周期变化
                    (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
                      error: Error()
                    }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
                      error: Error()
                    }), AppEvent) : AppEvent).SYS_APP_LIFE, (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
                      error: Error()
                    }), GConstants) : GConstants).AppRunLife.Game_Closed);
                  }
                });
              });
            } else {
              this.print("游戏场景已存在，强制刷新===>");
              (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
                error: Error()
              }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
                error: Error()
              }), AppEvent) : AppEvent).ROOM_VIEW_ONLOAD);
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
        } //关闭游戏界面


        exitGame() {
          if ((_crd && LayerManager === void 0 ? (_reportPossibleCrUseOfLayerManager({
            error: Error()
          }), LayerManager) : LayerManager).has((_crd && UIID === void 0 ? (_reportPossibleCrUseOfUIID({
            error: Error()
          }), UIID) : UIID).GameScenePrefab) || (_crd && LayerManager === void 0 ? (_reportPossibleCrUseOfLayerManager({
            error: Error()
          }), LayerManager) : LayerManager).isLoading((_crd && UIID === void 0 ? (_reportPossibleCrUseOfUIID({
            error: Error()
          }), UIID) : UIID).GameScenePrefab)) {
            (_crd && LayerManager === void 0 ? (_reportPossibleCrUseOfLayerManager({
              error: Error()
            }), LayerManager) : LayerManager).clear(null, true); //初始化绑定绑定映射

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
            }), GlobalHeadCmdBinding) : GlobalHeadCmdBinding, true);
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
              }

              (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
                error: Error()
              }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
                error: Error()
              }), AppEvent) : AppEvent).HALL_GOTO_SHOW, true);
            });
          }
        } //请求上报子游戏版本号


        reqReportGameVer(event, gameID) {
          gameID = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).number_valueOf(gameID, null);

          if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).isNull(gameID)) {
            return;
          }

          if (!(_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).isNull(this._reportGameVerRecord[gameID])) {
            //每一个游戏只上报一次
            return;
          }

          let ver = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).number_valueOf((_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
            error: Error()
          }), GCache) : GCache).SelectGame.getGameVersionByGameID(gameID), null);

          if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).isNull(ver)) {
            return;
          }

          let param = {
            gid: gameID,
            gameVer: ver
          };
          let sendMsg = {
            cmd: (_crd && GlobalCMD === void 0 ? (_reportPossibleCrUseOfGlobalCMD({
              error: Error()
            }), GlobalCMD) : GlobalCMD).PHP_REPORT_GAME_VERSION,
            body: param
          };
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_SEND_MSG, sendMsg);
          this._reportGameVerRecord[gameID] = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).number_valueOf(this._reportGameVerRecord[gameID], 0) + 1;
        } //请求php获取用户某个游戏的信息


        reqGamePlayInfo(event, gameID) {
          gameID = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).number_valueOf(gameID, null);

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
            }), GlobalCMD) : GlobalCMD).PHP_GAME_PLAY_INFO,
            body: param
          };
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_SEND_MSG, sendMsg);
        } //php获取用户某个游戏的信息


        respGamePlayInfo(event, isSuccess, respData, reqData) {
          this.dump(respData, "php获取用户某个游戏的信息返回" + isSuccess);

          if (isSuccess == false) {
            return;
          }

          let result = (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
            error: Error()
          }), GCache) : GCache).User.syncGamePlayRecord(respData["game_id"], respData);

          if (result != null) {
            //玩局记录有更新
            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
              error: Error()
            }), AppEvent) : AppEvent).USER_UPDATE_GAMERECORD, result);
          }
        }

      });

      GameController._instance = null;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=e80f94810c3cc3c83da73044480cc668f2db234a.js.map