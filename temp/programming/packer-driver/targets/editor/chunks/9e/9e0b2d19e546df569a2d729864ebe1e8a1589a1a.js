System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, GCache, AppEvent, ClientInfo, GameConfig, GConstants, UIID, Encrypt, Md5, EventManager, HttpRequest, Utils, BaseControll, ShareServers, _crd;

  function _reportPossibleCrUseOfGCache(extras) {
    _reporterNs.report("GCache", "../../cache/GCache", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAppEvent(extras) {
    _reporterNs.report("AppEvent", "../../config/AppEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfClientInfo(extras) {
    _reporterNs.report("ClientInfo", "../../config/GameConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameConfig(extras) {
    _reporterNs.report("GameConfig", "../../config/GameConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGConstants(extras) {
    _reporterNs.report("GConstants", "../../config/GameConstant", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIID(extras) {
    _reporterNs.report("UIID", "../../config/UIConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEncrypt(extras) {
    _reporterNs.report("Encrypt", "../../framework/crypto/Encrypto", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMd(extras) {
    _reporterNs.report("Md5", "../../framework/crypto/Md5", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventManager(extras) {
    _reporterNs.report("EventManager", "../../framework/manager/EventManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHttpRequest(extras) {
    _reporterNs.report("HttpRequest", "../../framework/network/HttpRequest", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUtils(extras) {
    _reporterNs.report("Utils", "../../framework/Utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseControll(extras) {
    _reporterNs.report("BaseControll", "../../framework/vc/BaseController", _context.meta, extras);
  }

  _export("ShareServers", void 0);

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
      GameConfig = _unresolved_4.GameConfig;
    }, function (_unresolved_5) {
      GConstants = _unresolved_5.GConstants;
    }, function (_unresolved_6) {
      UIID = _unresolved_6.UIID;
    }, function (_unresolved_7) {
      Encrypt = _unresolved_7.Encrypt;
    }, function (_unresolved_8) {
      Md5 = _unresolved_8.Md5;
    }, function (_unresolved_9) {
      EventManager = _unresolved_9.EventManager;
    }, function (_unresolved_10) {
      HttpRequest = _unresolved_10.HttpRequest;
    }, function (_unresolved_11) {
      Utils = _unresolved_11.Utils;
    }, function (_unresolved_12) {
      BaseControll = _unresolved_12.BaseControll;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6e118mxQLpGopQ4NF1p67JL", "ShareServers", undefined);

      _export("ShareServers", ShareServers = class ShareServers extends (_crd && BaseControll === void 0 ? (_reportPossibleCrUseOfBaseControll({
        error: Error()
      }), BaseControll) : BaseControll) {
        static getInstance() {
          if (!this._instance || this._instance == null) {
            this._instance = new ShareServers("ShareServers");
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
          ShareServers.getInstance();
          return;
        }
        /**初始化添加事件绑定 */


        onInitModuleEvent() {
          /** 请求获取分享配置 */
          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_REQ_SHARE_CONFIG, this.reqShareConfig);
          /** 请求获取分享配置返回 */

          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_RESP_SHARE_CONFIG, this.respShareConfig);
          /** 请求分享领奖 */

          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_REQ_SHARE_AWARD, this.reqShareAward);
          /** 请求分享领奖返回 */

          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_RESP_SHARE_AWARD, this.respShareAward); //请求看视频发奖

          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_REQ_ADS_AWARD, this.reqADSAWard);
          /** 请求看视频领奖返回 */

          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_RESP_ADS_AWARD, this.respADSAWard);
        }
        /** 请求获取所有分享配置 */


        reqShareConfig(event = null) {
          let http = new (_crd && HttpRequest === void 0 ? (_reportPossibleCrUseOfHttpRequest({
            error: Error()
          }), HttpRequest) : HttpRequest)();
          let data = {
            action: (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
              error: Error()
            }), GConstants) : GConstants).ReqUrl.shopShareUrl,
            ssid: (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
              error: Error()
            }), GCache) : GCache).User.getDataUser("ssid", ""),
            appid: (_crd && ClientInfo === void 0 ? (_reportPossibleCrUseOfClientInfo({
              error: Error()
            }), ClientInfo) : ClientInfo).PlatFormAppID
          };
          http.post((_crd && GameConfig === void 0 ? (_reportPossibleCrUseOfGameConfig({
            error: Error()
          }), GameConfig) : GameConfig).instance.AppUrlConf.Web, JSON.stringify(data), receiveData => {
            let _resultData = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).nullToDefault((_crd && Encrypt === void 0 ? (_reportPossibleCrUseOfEncrypt({
              error: Error()
            }), Encrypt) : Encrypt).JsonDecode(receiveData), {
              result: {}
            }); //更新数据之后通知数据返回


            (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
              error: Error()
            }), GCache) : GCache).ShareInfo.updateConfig(_resultData.result);
            let isSuccess = !(_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).table_isEmpty(_resultData);
          });
        }
        /** 请求分享配置返回 */


        respShareConfig(event, isSuccess, respData, reqData) {
          this.print("请求分享配置返回", isSuccess, respData);
        }
        /**
         * 请求分享领奖
         * @param event  
         * @param isShop //是否未商城分享
         * @param shareID 
         * @param type 分享类型类型 1-商城视频，商城分享 2-其他分享
         */


        reqShareAward(event, shareID, type, isShop = false) {
          console.log('执行请求分享领奖');

          if (shareID == null) {
            return;
          }

          let http = new (_crd && HttpRequest === void 0 ? (_reportPossibleCrUseOfHttpRequest({
            error: Error()
          }), HttpRequest) : HttpRequest)();

          let _md5 = '123!@#*&908byaa' + type + shareID + (_crd && ClientInfo === void 0 ? (_reportPossibleCrUseOfClientInfo({
            error: Error()
          }), ClientInfo) : ClientInfo).PlatFormAppID + (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
            error: Error()
          }), GCache) : GCache).User.getUserMid();

          let data = {
            action: (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
              error: Error()
            }), GConstants) : GConstants).ReqUrl.shareCBUrl,
            appid: (_crd && ClientInfo === void 0 ? (_reportPossibleCrUseOfClientInfo({
              error: Error()
            }), ClientInfo) : ClientInfo).PlatFormAppID,
            mid: (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
              error: Error()
            }), GCache) : GCache).User.getUserMid(),
            ssid: (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
              error: Error()
            }), GCache) : GCache).User.getDataUser("ssid", ""),
            type: type,
            mark: (_crd && Md5 === void 0 ? (_reportPossibleCrUseOfMd({
              error: Error()
            }), Md5) : Md5)(_md5)
          };

          if (isShop) {
            data["goods_id"] = shareID;
          } else {
            data["share_id"] = shareID;
          }

          http.post((_crd && GameConfig === void 0 ? (_reportPossibleCrUseOfGameConfig({
            error: Error()
          }), GameConfig) : GameConfig).instance.AppUrlConf.Web, JSON.stringify(data), receiveData => {
            let _resultData = (_crd && Encrypt === void 0 ? (_reportPossibleCrUseOfEncrypt({
              error: Error()
            }), Encrypt) : Encrypt).JsonDecode(receiveData); //JSON.parse(receiveData || '{result:{}}')


            _resultData = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).table_verify(_resultData);
            let isSuccess = !(_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).table_isEmpty(_resultData.result);
            console.log('请求分享领奖返回值', receiveData, isSuccess, _resultData);
            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
              error: Error()
            }), AppEvent) : AppEvent).NET_RESP_SHARE_AWARD, isSuccess, _resultData, data);
          });
        }
        /** 请求分享领奖返回 */


        respShareAward(event, isSuccess, respData, reqData) {
          if (isSuccess == false) {
            let toastData = respData['error'] ? respData['error'] : '分享失败请联系客服';
            this.print('请求分享失败', isSuccess, toastData);
            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
              error: Error()
            }), AppEvent) : AppEvent).SYS_TOAST_TIP, {
              content: toastData
            });
            return;
          }

          respData.result = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).table_verify(respData.result);
          respData.result.reward = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).table_verify(respData.result.reward, true);
          this.print('请求分享成功返回', reqData, respData.result); // 打开获得成功页面

          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).VIEW_UI_OPEN, (_crd && UIID === void 0 ? (_reportPossibleCrUseOfUIID({
            error: Error()
          }), UIID) : UIID).GongXiHuoDePrefab, respData.result.reward); //更新资产 PropertyType

          respData['result']['reward'].forEach(item => {
            let _type = Number(item['type']);

            let res = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).table_keyof((_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
              error: Error()
            }), GConstants) : GConstants).PropertyType, _type);
            let count = 0;

            if (res != null) {
              let curentRich = (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
                error: Error()
              }), GCache) : GCache).User.getUserMoneyByID(_type);
              (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
                error: Error()
              }), GCache) : GCache).User.updateUserMoneyByID(_type, curentRich + Number(item["num"]));
            } else {
              count = count + 1;
            }

            if (count > 0) {
              (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
                error: Error()
              }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
                error: Error()
              }), AppEvent) : AppEvent).NET_CMD_REQ_USER_BACKPACK);
            }
          }); //分享成功后根据id去查找商品(期望服务端能返回当前类别和gid)

          (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
            error: Error()
          }), GCache) : GCache).ShopInfo.onUpdateGoods(reqData.goods_id, respData.result); //分享成功之后开始计时

          (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
            error: Error()
          }), GCache) : GCache).ShareInfo.shareSuccessTimeAdd(reqData['goods_id']);
        }
        /** 请求看视频领奖 */


        reqADSAWard(event, shareID, type, isShop = false) {
          if (shareID == null) {
            return;
          }

          let http = new (_crd && HttpRequest === void 0 ? (_reportPossibleCrUseOfHttpRequest({
            error: Error()
          }), HttpRequest) : HttpRequest)();

          let _md5 = '123!@#*&908byaa' + type + shareID + (_crd && ClientInfo === void 0 ? (_reportPossibleCrUseOfClientInfo({
            error: Error()
          }), ClientInfo) : ClientInfo).PlatFormAppID + (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
            error: Error()
          }), GCache) : GCache).User.getUserMid();

          let data = {
            action: (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
              error: Error()
            }), GConstants) : GConstants).ReqUrl.shareCBUrl,
            appid: (_crd && ClientInfo === void 0 ? (_reportPossibleCrUseOfClientInfo({
              error: Error()
            }), ClientInfo) : ClientInfo).PlatFormAppID,
            mid: (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
              error: Error()
            }), GCache) : GCache).User.getUserMid(),
            ssid: (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
              error: Error()
            }), GCache) : GCache).User.getDataUser("ssid", ""),
            type: type,
            mark: (_crd && Md5 === void 0 ? (_reportPossibleCrUseOfMd({
              error: Error()
            }), Md5) : Md5)(_md5)
          };

          if (isShop) {
            data["goods_id"] = shareID;
          } else {
            data["share_id"] = shareID;
          }

          http.post((_crd && GameConfig === void 0 ? (_reportPossibleCrUseOfGameConfig({
            error: Error()
          }), GameConfig) : GameConfig).instance.AppUrlConf.Web, JSON.stringify(data), receiveData => {
            let _resultData = (_crd && Encrypt === void 0 ? (_reportPossibleCrUseOfEncrypt({
              error: Error()
            }), Encrypt) : Encrypt).JsonDecode(receiveData); //JSON.parse(receiveData || '{result:{}}')


            _resultData = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).table_verify(_resultData);
            console.log('请求看视频http', _resultData);
            let isSuccess = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).table_isEmpty(_resultData.result) != true;
            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
              error: Error()
            }), AppEvent) : AppEvent).NET_RESP_ADS_AWARD, isSuccess, _resultData, data);
          });
        }
        /** 请求看视频领奖返回 */


        respADSAWard(event, isSuccess, respData, reqData) {
          console.log('请求看视频数据返回', isSuccess, respData, reqData);

          if (isSuccess == false) {
            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
              error: Error()
            }), AppEvent) : AppEvent).SYS_TOAST_TIP, {
              content: "请勿频繁点击"
            });
            return;
          } // 打开获得成功页面


          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).VIEW_UI_OPEN, (_crd && UIID === void 0 ? (_reportPossibleCrUseOfUIID({
            error: Error()
          }), UIID) : UIID).GongXiHuoDePrefab, respData.result.reward); //更新资产 PropertyType

          respData['result']['reward'].forEach(item => {
            let _type = Number(item['type']);

            let res = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).table_keyof((_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
              error: Error()
            }), GConstants) : GConstants).PropertyType, _type);
            let count = 0;

            if (res != null) {
              let curentRich = (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
                error: Error()
              }), GCache) : GCache).User.getUserMoneyByID(_type);
              (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
                error: Error()
              }), GCache) : GCache).User.updateUserMoneyByID(_type, curentRich + Number(item["num"]));
            } else {
              count = count + 1;
            }

            if (count > 0) {
              (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
                error: Error()
              }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
                error: Error()
              }), AppEvent) : AppEvent).NET_CMD_REQ_USER_BACKPACK);
            }
          });
          (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
            error: Error()
          }), GCache) : GCache).ShopInfo.onUpdateGoods(reqData.goods_id, respData.result);
        }

      });

      ShareServers._instance = null;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=9e0b2d19e546df569a2d729864ebe1e8a1589a1a.js.map