System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, GCache, AppEvent, GConstants, UIID, EventManager, Utils, BaseControll, GlobalCMD, PopupServers, RecommendPopServers, _crd;

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

  function _reportPossibleCrUseOfPopupServers(extras) {
    _reporterNs.report("PopupServers", "./PopupServers", _context.meta, extras);
  }

  _export("RecommendPopServers", void 0);

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
      EventManager = _unresolved_6.EventManager;
    }, function (_unresolved_7) {
      Utils = _unresolved_7.Utils;
    }, function (_unresolved_8) {
      BaseControll = _unresolved_8.BaseControll;
    }, function (_unresolved_9) {
      GlobalCMD = _unresolved_9.GlobalCMD;
    }, function (_unresolved_10) {
      PopupServers = _unresolved_10.PopupServers;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "bc0a23EyjhI5qpJ669Wov1y", "RecommendPopServers", undefined);

      _export("RecommendPopServers", RecommendPopServers = class RecommendPopServers extends (_crd && BaseControll === void 0 ? (_reportPossibleCrUseOfBaseControll({
        error: Error()
      }), BaseControll) : BaseControll) {
        static getInstance() {
          if (!this._instance || this._instance == null) {
            this._instance = new RecommendPopServers("RecommendPopServers");
          }

          return this._instance;
        } //实例化


        constructor(name) {
          super(name);
          this._popUpResult = [];
          this._popUIDQueue = [];
          this._currowPosID = null;
          this._delayPosID = null;
          this._checkPosData = {};
          this._curCheckPosData = null;
          this._curMainLayer = null;
          this._allCloseCallback = null;
          this._noResultTip = null;
          this.PopupID_UIIDMap = {
            /** 签到 */
            [(_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
              error: Error()
            }), GConstants) : GConstants).PopupIds.SIGNIN]: {
              UIID: (_crd && UIID === void 0 ? (_reportPossibleCrUseOfUIID({
                error: Error()
              }), UIID) : UIID).SigninPrefab,
              ckFunc: "checkSignin"
            },

            /** 首充 */
            [(_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
              error: Error()
            }), GConstants) : GConstants).PopupIds.FIRSTPAY_ACTIVITY]: {
              UIID: (_crd && UIID === void 0 ? (_reportPossibleCrUseOfUIID({
                error: Error()
              }), UIID) : UIID).FirstPayPrefab,
              ckFunc: "checkFirstPay"
            },

            /** 特价礼包 */
            [(_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
              error: Error()
            }), GConstants) : GConstants).PopupIds.HOLIDAY_ACTIVITY]: {
              UIID: (_crd && UIID === void 0 ? (_reportPossibleCrUseOfUIID({
                error: Error()
              }), UIID) : UIID).GiftDiscountPrefab,
              ckFunc: "checkHoliday"
            },

            /** 活动中心 */
            [(_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
              error: Error()
            }), GConstants) : GConstants).PopupIds.ACTIVITY_CENTER]: {
              UIID: (_crd && UIID === void 0 ? (_reportPossibleCrUseOfUIID({
                error: Error()
              }), UIID) : UIID).AtyCenterPrefab,
              ckFunc: "checkAcvitity"
            }
            /** 考虑添加桌面进入大厅领奖 */

          };
        }

        static init() {
          if (this._instance) {
            this._instance.clear();
          }

          this._instance = null;
          RecommendPopServers.getInstance();
          return;
        } //校验结果


        /**初始化添加事件绑定 */
        onInitModuleEvent() {
          /** 设置关闭所有推荐弹窗的回调 */
          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).RECOMMEND_POP_SET_CALLBACK, this.setCloseAllFunc);
          /** 设置无推荐弹窗时的吐司 */

          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).RECOMMEND_POP_SET_NO_TIP, this.setNoTip);
          /** 打开队列弹窗界面 */

          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).RECOMMEND_POP_OPEN_VIEW, this.openViewQuene);
          /** 清除队列弹窗界面 */

          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).RECOMMEND_POP_CLEAN_QUENE, this.cleanViewQuene);
          /** 用户请求推荐弹窗 */

          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).RECOMMEND_POP_GET, this.getRecommend);
          /** 用户请求推荐弹窗数据返回 */

          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_CMD_RESP_POP_ADVERTISE, this.getRespcommend);
        }
        /**
         * 请求推荐结果
         * @param popupPos 场景ID
         * @param params 附加参数
         */


        reqPopAdvByPos(popupPos, params) {
          if (params === void 0) {
            params = null;
          }

          this._currowPosID = popupPos;
          var popData = this.getPopData();

          if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).table_isEmpty(popData) == false && (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).table_isEmpty(popData[0]) == false) {
            console.log("本地已存在弹窗数据：==>", popupPos, popData);
            this.getRecommendAllPopData(null, popData);
          } else {
            console.log("请求推荐弹窗数据：==>", popupPos);
            var reqData = {
              cmd: (_crd && GlobalCMD === void 0 ? (_reportPossibleCrUseOfGlobalCMD({
                error: Error()
              }), GlobalCMD) : GlobalCMD).PHP_ACTIVITY_MODAL_POPUP,
              body: {}
            };
            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
              error: Error()
            }), AppEvent) : AppEvent).NET_SEND_MSG, reqData);
          }
        }
        /**
         * 获取次数和当前弹出的场景
         */


        getPopData() {
          var currentData = [];
          var currowMax = 0;

          if (this._currowPosID == (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
            error: Error()
          }), GConstants) : GConstants).PopupPos.POS_LOGIN) {
            currentData = (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
              error: Error()
            }), GCache) : GCache).RecommendPop.getIntoHallPropData();
            currowMax = (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
              error: Error()
            }), GCache) : GCache).RecommendPop.getIntoHallPopTime();
          } else if (this._currowPosID == (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
            error: Error()
          }), GConstants) : GConstants).PopupPos.POS_INTO_ROOM) {
            currentData = (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
              error: Error()
            }), GCache) : GCache).RecommendPop.getIntoGamePropData();
            currowMax = (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
              error: Error()
            }), GCache) : GCache).RecommendPop.getIntoGamePopTime();
          } else {
            return null;
          }

          return [currentData, currowMax];
        }
        /**
         * 请求推荐弹窗数据（事件调用）
         * @param id 
         * @param data 
         * @param isDelay 
         */


        getRecommend(event, id, data, isDelay) {
          if (event === void 0) {
            event = null;
          }

          if (data === void 0) {
            data = null;
          }

          if (isDelay === void 0) {
            isDelay = false;
          }

          if (id == null) {
            return;
          }

          if (this._curMainLayer != (_crd && PopupServers === void 0 ? (_reportPossibleCrUseOfPopupServers({
            error: Error()
          }), PopupServers) : PopupServers).getInstance().MainLayerCode) {
            this.cleanViewQuene();
            this.setNoTip(null);
            this.setCloseAllFunc(null);
          }

          this._checkPosData[id] = {
            mainCode: (_crd && PopupServers === void 0 ? (_reportPossibleCrUseOfPopupServers({
              error: Error()
            }), PopupServers) : PopupServers).getInstance().MainLayerCode,
            noResultTip: this._noResultTip,
            allCloseCallFunc: this._allCloseCallback,
            isCheck: false
          };
          this._noResultTip = null;
          this._allCloseCallback = null;

          if (this._delayPosID != null && isDelay) {
            this.getDelayRecommend();
          } else {
            this.reqPopAdvByPos(id, data);
          }
        }

        /**
         * 设置关闭所有推荐弹窗的回调
         * @param event 
         * @param callback 
         */
        setCloseAllFunc(event, callback) {
          if (event === void 0) {
            event = null;
          }

          if (callback === void 0) {
            callback = null;
          }

          this._allCloseCallback = callback;
        }
        /**
         * 设置无推荐弹窗时的吐司
         * @param event 
         * @param tips 
         */


        setNoTip(event, tips) {
          if (event === void 0) {
            event = null;
          }

          if (tips === void 0) {
            tips = null;
          }

          this._noResultTip = tips;
        }
        /** 请求延迟弹窗数据 */


        getDelayRecommend() {
          this.reqPopAdvByPos(this._delayPosID);
          this._delayPosID = null;
        }

        /**
         * 推荐弹窗数据返回
         */
        getRespcommend(event, isSuccess, respData, reqData) {
          console.log('获取获取强弹数据返回', isSuccess, respData);

          if (!isSuccess) {
            console.log('获取获取强弹数据失败', respData);
            return;
          }

          if (isSuccess && respData) {
            // 解析弹窗数据
            (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
              error: Error()
            }), GCache) : GCache).RecommendPop.updatePopData(respData); //请求之后获取的弹窗数据

            this.getRecommendAllPopData(event, this.getPopData());
          }
        }
        /** 获取指定推荐弹窗配置数据 */


        getRecommendAllPopData(event, data) {
          if (event === void 0) {
            event = null;
          }

          if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).table_isEmpty(data)) {
            return;
          }

          var popupPos = this._currowPosID; // 当前主场景

          var _cur_pos = (_crd && PopupServers === void 0 ? (_reportPossibleCrUseOfPopupServers({
            error: Error()
          }), PopupServers) : PopupServers).getInstance().MainLayerCode;
          this.print("\u83B7\u53D6\u6307\u5B9A\u63A8\u8350\u5F39\u7A97\u914D\u7F6E\u6570\u636EpopupPos=" + popupPos + ",_cur_pos=" + String(_cur_pos) + ",\u662F\u5426\u4E3A\u7A7A:" + String(this._checkPosData[popupPos]));

          if (this._checkPosData[popupPos] != null && !!this._checkPosData[popupPos]["isCheck"] != true) {
            var checkPos = this._checkPosData[popupPos]["mainCode"];
            this._checkPosData[popupPos]["isCheck"] = true;

            if (_cur_pos != checkPos) {
              this.print("\u63A8\u8350\u573A\u666F\u4E0D\u4E00\u81F4 \u4E0D\u505A\u63A8\u8350 checkPos=" + checkPos + ",_cur_pos=" + String(_cur_pos));
              return;
            }
          }

          this._curMainLayer = (_crd && PopupServers === void 0 ? (_reportPossibleCrUseOfPopupServers({
            error: Error()
          }), PopupServers) : PopupServers).getInstance().MainLayerCode;
          this._curCheckPosData = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).clone(this._checkPosData[popupPos]);
          this.checkRecommendPopup(data);
          this._allCloseCallback = null;
        }
        /** 校验推荐弹窗是否展示 */


        checkRecommendPopup(pData) {
          if (pData && pData instanceof Array && pData.length > 0) {
            //强弹队列
            var data = pData[0]; //最大可弹

            var maxLen = pData[1];
            /** 不支持的弹窗类型 */

            var notKeepPopList = [];

            for (var i = 0; i < data.length; i++) {
              var currowPopData = data[i];
              var info = null;

              if (currowPopData.length > 1) {
                //存在互斥
                info = currowPopData;
                var alrCheckInfo = [];
                this.print("checkRecommendPopup:检测到互斥数据:", info);

                for (var m = 0; m < info.length; m++) {
                  if ((_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
                    error: Error()
                  }), GCache) : GCache).RecommendPop.checkPopDayCount(info[m]) == true) {
                    alrCheckInfo.push(info[m]);
                  } else {
                    this.print("checkRecommendPopup:互斥数据 次数不满足:", info[m]);
                  }
                }

                if (alrCheckInfo.length > 0) {
                  for (var _m = 0; _m < alrCheckInfo.length; _m++) {
                    if (this.PopupID_UIIDMap[alrCheckInfo[_m]["toolid"]]) {
                      if (this.PopupID_UIIDMap[alrCheckInfo[_m]["toolid"]].ckFunc && this[this.PopupID_UIIDMap[alrCheckInfo[_m]["toolid"]].ckFunc] != null) {
                        var oldLength = this._popUpResult.length;

                        this[this.PopupID_UIIDMap[alrCheckInfo[_m]["toolid"]].ckFunc](alrCheckInfo[_m]); //满足了一个数据变动 就就终止


                        if (this._popUpResult.length > oldLength) {
                          break;
                        }
                      }
                    } else {
                      notKeepPopList.push(info);
                    }
                  }
                }
              } else {
                info = currowPopData[0];

                if ((_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
                  error: Error()
                }), GCache) : GCache).RecommendPop.checkPopDayCount(info) == true) {
                  if (this.PopupID_UIIDMap[info["toolid"]]) {
                    if (this.PopupID_UIIDMap[info["toolid"]].ckFunc && this[this.PopupID_UIIDMap[info["toolid"]].ckFunc] != null) {
                      this[this.PopupID_UIIDMap[info["toolid"]].ckFunc](info);
                    }
                  } else {
                    notKeepPopList.push(info);
                  }
                }
              }
            }

            this.print("checkRecommendPopup:要弹出的数据>>", (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).clone(this._popUpResult)); //处理最大上限

            if (this._popUpResult.length > maxLen) {
              this._popUpResult = this._popUpResult.splice(0, maxLen);
              this.print("checkRecommendPopup:\u8D85\u8FC7\u6700\u5927\u5F39\u7A97\u6B21\u6570" + maxLen + ">>", (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                error: Error()
              }), Utils) : Utils).clone(this._popUpResult));
            }

            if (this._curCheckPosData) {
              this.showRecommendPopup(this._curCheckPosData["allCloseCallFunc"], this._curCheckPosData["noResultTip"]);
            } else {
              this.showRecommendPopup(null, null);
            }
          } else {
            //关闭正在加载中
            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
              error: Error()
            }), AppEvent) : AppEvent).SYS_CLOSE_NETLOADING);

            if (this._curCheckPosData) {
              if (this._curCheckPosData["allCloseCallFunc"]) {
                this._curCheckPosData["allCloseCallFunc"]();
              }

              if (this._curCheckPosData["noResultTip"]) {
                (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
                  error: Error()
                }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
                  error: Error()
                }), AppEvent) : AppEvent).SYS_TOAST_TIP, {
                  content: this._curCheckPosData["noResultTip"]
                });
              }
            }
          }
        }
        /** 展示推荐弹窗(走到这一步 必须保证主场景标识是一致的) */


        showRecommendPopup(callback, noResultTip) {
          if (callback === void 0) {
            callback = null;
          }

          if (noResultTip === void 0) {
            noResultTip = null;
          }

          this.print("showRecommendPopup", this._popUpResult);

          if (this._popUpResult && this._popUpResult.length > 0) {
            this._popUIDQueue = [];
            var self = this;

            var showPopup = function showPopup(id, info) {
              var uiid = null;

              if (self.PopupID_UIIDMap[info["toolid"]].UIID != null) {
                uiid = self.PopupID_UIIDMap[info["toolid"]].UIID;
              }

              if (uiid != null) {
                self._checkRepeatUIID(uiid); //支付场景
                // info["pay_scene"] = GConstants.PayScene[info["scene_id"]];
                //保存的数据格式


                self._popUIDQueue.push({
                  uiid: uiid,
                  toolid: id,
                  data: info,
                  mainlayer: self._curMainLayer
                });
              }
            };

            for (var i = 0; i < this._popUpResult.length; i++) {
              var info = this._popUpResult[i];
              showPopup(info["toolid"], info);
            }

            this._popUpResult = [];
            this.openViewQuene(null, callback);
          } else {
            //关闭正在加载中
            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
              error: Error()
            }), AppEvent) : AppEvent).SYS_CLOSE_NETLOADING);

            if (callback) {
              callback();
            }

            if (noResultTip) {
              (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
                error: Error()
              }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
                error: Error()
              }), AppEvent) : AppEvent).SYS_TOAST_TIP, {
                content: noResultTip
              });
            }
          }
        }
        /** 去除重复的uiid */


        _checkRepeatUIID(uIID) {
          if (this._popUIDQueue.length == 0) {
            return;
          }

          for (var i = this._popUIDQueue.length - 1; i >= 0; i--) {
            if (this._popUIDQueue[i]["uiid"] == uIID) {
              this._popUIDQueue.splice(i, 1);
            }

            ;
          }
        }
        /** 打开弹窗队列 */


        openViewQuene(event, finishCallback) {
          if (event === void 0) {
            event = null;
          }

          if (this._popUIDQueue.length <= 0) {
            this.print("openViewQuene 1");

            if (event != null && finishCallback) {
              //最后的回调
              finishCallback();
            } else {
              //关闭正在加载中
              (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
                error: Error()
              }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
                error: Error()
              }), AppEvent) : AppEvent).SYS_CLOSE_NETLOADING);
            }

            return;
          }

          var curMainLayer = (_crd && PopupServers === void 0 ? (_reportPossibleCrUseOfPopupServers({
            error: Error()
          }), PopupServers) : PopupServers).getInstance().MainLayerCode;
          var info = null;

          for (var i = 0; i < this._popUIDQueue.length; i++) {
            if (this._popUIDQueue[i]["mainlayer"] == curMainLayer) {
              info = this._popUIDQueue[i];

              this._popUIDQueue.splice(i, 1);

              break;
            }
          }

          if (info) {
            var self = this; //正在加载中

            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
              error: Error()
            }), AppEvent) : AppEvent).SYS_SHOW_NETLOADING, 60);
            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
              error: Error()
            }), AppEvent) : AppEvent).VIEW_UI_OPEN, info["uiid"], info["data"], {
              onAdded: function onAdded(node, viewParams) {
                //关闭正在加载中
                (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
                  error: Error()
                }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
                  error: Error()
                }), AppEvent) : AppEvent).SYS_CLOSE_NETLOADING);
                self.print("弹窗队列 添加完成===>更新次数", info);
                (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
                  error: Error()
                }), GCache) : GCache).RecommendPop.updatePopDayCountData(info["data"]);
              },
              onRemoved: function onRemoved() {
                self.print("弹窗队列 移除完成===>", info);
                (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
                  error: Error()
                }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
                  error: Error()
                }), AppEvent) : AppEvent).RECOMMEND_POP_OPEN_VIEW, finishCallback);
              }
            });
          } else {
            this.print("openViewQuene 场景不一致", this._popUIDQueue, curMainLayer);
          }
        }
        /** 清除队列 */


        cleanViewQuene(event) {
          if (event === void 0) {
            event = null;
          }

          this._popUIDQueue = [];
        }
        /** 检查每日签到
         * alrCheckInfo[m], other, scene
         */


        checkSignin(info) {
          var isShow = (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
            error: Error()
          }), GCache) : GCache).RedDot.has_reddot_signin();

          if (isShow) {
            this._popUpResult.push(info);
          }
        }
        /** 检查特价礼包 */


        checkHoliday(info) {
          var isShow = (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
            error: Error()
          }), GCache) : GCache).RedDot.need_show_holiday();

          if (isShow) {
            this._popUpResult.push(info);
          }
        }
        /** 检查首充礼包
         * 
         */


        checkFirstPay(info) {
          var isShow = (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
            error: Error()
          }), GCache) : GCache).RedDot.need_show_gift_firstpay();

          if (isShow) {
            this._popUpResult.push(info);
          }
        }
        /** 检查活动中心 
         * 有数据就弹
        */


        checkAcvitity(info) {
          var isShow = (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
            error: Error()
          }), GCache) : GCache).RedDot.has_reddot_activityNormal();

          if (isShow) {
            this._popUpResult.push(info);
          }
        }

      });

      RecommendPopServers._instance = null;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=1735c0de4534fee53214d0a55c6d6bcff2a3089b.js.map