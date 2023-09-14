System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14", "__unresolved_15", "__unresolved_16", "__unresolved_17", "__unresolved_18", "__unresolved_19", "__unresolved_20", "__unresolved_21", "__unresolved_22", "__unresolved_23", "__unresolved_24", "__unresolved_25"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, AppEvent, ClientInfo, CloundKey, GConstants, StoreKey, GameRes, GameTxt, Encrypt, LocalStorage, EventManager, Utils, BaseCache, Platform, Activity, BackPack, BankrupData, GoodsData, MailInfo, MenuInfo, PropsConf, RecommendPop, RedDot, SelectGame, ShareInfo, ShopInfo, TaskInfo, WatchMessage, User, _crd;

  function _reportPossibleCrUseOfAppEvent(extras) {
    _reporterNs.report("AppEvent", "../config/AppEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfClientInfo(extras) {
    _reporterNs.report("ClientInfo", "../config/GameConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCloundKey(extras) {
    _reporterNs.report("CloundKey", "../config/GameConstant", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGConstants(extras) {
    _reporterNs.report("GConstants", "../config/GameConstant", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStoreKey(extras) {
    _reporterNs.report("StoreKey", "../config/GameConstant", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameRes(extras) {
    _reporterNs.report("GameRes", "../config/GameRes", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameTxt(extras) {
    _reporterNs.report("GameTxt", "../config/GameTxt", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEncrypt(extras) {
    _reporterNs.report("Encrypt", "../framework/crypto/Encrypto", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLocalStorage(extras) {
    _reporterNs.report("LocalStorage", "../framework/LocalStorage", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventManager(extras) {
    _reporterNs.report("EventManager", "../framework/manager/EventManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUtils(extras) {
    _reporterNs.report("Utils", "../framework/Utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseCache(extras) {
    _reporterNs.report("BaseCache", "../framework/vc/BaseCache", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlatform(extras) {
    _reporterNs.report("Platform", "../platform/Platform", _context.meta, extras);
  }

  function _reportPossibleCrUseOfActivity(extras) {
    _reporterNs.report("Activity", "./Activity", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBackPack(extras) {
    _reporterNs.report("BackPack", "./BackPack", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBankrupData(extras) {
    _reporterNs.report("BankrupData", "./BankrupData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGoodsData(extras) {
    _reporterNs.report("GoodsData", "./GoodsData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMailInfo(extras) {
    _reporterNs.report("MailInfo", "./MailInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMenuInfo(extras) {
    _reporterNs.report("MenuInfo", "./MenuInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPropsConf(extras) {
    _reporterNs.report("PropsConf", "./PropsConf", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRecommendPop(extras) {
    _reporterNs.report("RecommendPop", "./RecommendPop", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRedDot(extras) {
    _reporterNs.report("RedDot", "./RedDot", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSelectGame(extras) {
    _reporterNs.report("SelectGame", "./SelectGame", _context.meta, extras);
  }

  function _reportPossibleCrUseOfShareInfo(extras) {
    _reporterNs.report("ShareInfo", "./ShareInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfShopInfo(extras) {
    _reporterNs.report("ShopInfo", "./ShopInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTaskInfo(extras) {
    _reporterNs.report("TaskInfo", "./TaskInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWatchMessage(extras) {
    _reporterNs.report("WatchMessage", "./WatchMessage", _context.meta, extras);
  }

  _export("User", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      AppEvent = _unresolved_2.AppEvent;
    }, function (_unresolved_3) {
      ClientInfo = _unresolved_3.ClientInfo;
    }, function (_unresolved_4) {
      CloundKey = _unresolved_4.CloundKey;
      GConstants = _unresolved_4.GConstants;
      StoreKey = _unresolved_4.StoreKey;
    }, function (_unresolved_5) {
      GameRes = _unresolved_5.GameRes;
    }, function (_unresolved_6) {
      GameTxt = _unresolved_6.GameTxt;
    }, function (_unresolved_7) {
      Encrypt = _unresolved_7.Encrypt;
    }, function (_unresolved_8) {
      LocalStorage = _unresolved_8.LocalStorage;
    }, function (_unresolved_9) {
      EventManager = _unresolved_9.EventManager;
    }, function (_unresolved_10) {
      Utils = _unresolved_10.Utils;
    }, function (_unresolved_11) {
      BaseCache = _unresolved_11.BaseCache;
    }, function (_unresolved_12) {
      Platform = _unresolved_12.Platform;
    }, function (_unresolved_13) {
      Activity = _unresolved_13.Activity;
    }, function (_unresolved_14) {
      BackPack = _unresolved_14.BackPack;
    }, function (_unresolved_15) {
      BankrupData = _unresolved_15.BankrupData;
    }, function (_unresolved_16) {
      GoodsData = _unresolved_16.GoodsData;
    }, function (_unresolved_17) {
      MailInfo = _unresolved_17.MailInfo;
    }, function (_unresolved_18) {
      MenuInfo = _unresolved_18.MenuInfo;
    }, function (_unresolved_19) {
      PropsConf = _unresolved_19.PropsConf;
    }, function (_unresolved_20) {
      RecommendPop = _unresolved_20.RecommendPop;
    }, function (_unresolved_21) {
      RedDot = _unresolved_21.RedDot;
    }, function (_unresolved_22) {
      SelectGame = _unresolved_22.SelectGame;
    }, function (_unresolved_23) {
      ShareInfo = _unresolved_23.ShareInfo;
    }, function (_unresolved_24) {
      ShopInfo = _unresolved_24.ShopInfo;
    }, function (_unresolved_25) {
      TaskInfo = _unresolved_25.TaskInfo;
    }, function (_unresolved_26) {
      WatchMessage = _unresolved_26.WatchMessage;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6813cBGxvlBNY29sAnSqXu8", "User", undefined);

      _export("User", User = class User extends (_crd && BaseCache === void 0 ? (_reportPossibleCrUseOfBaseCache({
        error: Error()
      }), BaseCache) : BaseCache) {
        /** 附属类:Activity */

        /** 附属类:GoodsData */

        /** 附属类:RecommendPop */

        /** 附属类:BankrupData */

        /** 附属类:ShopInfo */

        /** 附属类:TaskInfo */

        /** 附属类:MailInfo */

        /** 附属类:WatchMessage */

        /** 附属类:SelectGame */

        /** 附属类:ShareInfo */

        /** 附属类:BackPack */

        /** 附属类:MenuInfo */

        /** 附属类:propsconf */

        /** 附属类:RedDot */

        /** 登录状态(GConstants.UserLoginState) */

        /** 登录游戏房间状态 */

        /** 用户基础信息 */

        /** 资产信息 类型:PropertyType */
        //历史登录信息
        //上次登录的保存在本地的数据
        //用户登录次数记录
        //经验等级体系
        //道具信息
        //vip信息
        //玩的游戏记录

        /** 登录成功时间 */

        /** 今日事件 */

        /** 点击次数记录数据 */
        //实例化
        constructor() {
          super("User");
          this.__activity = null;
          this.__goodsData = null;
          this.__recommendPop = null;
          this.__bankrupData = null;
          this.__shopInfo = null;
          this.__TaskInfo = null;
          this.__mailInfo = null;
          this.__watchMessage = null;
          this.__selectGame = null;
          this.__shareInfo = null;
          this.__backPack = null;
          this.__menuInfo = null;
          this.__propsConf = null;
          this.__redDot = null;
          this._loginState = 0;
          this._loginRoomState = false;
          this._userInfo = {};
          this._propertyInfo = {};
          this._historyLoginInfo = null;
          this._lastlocalLoginInfo = null;
          this._loginSuccessCountArray = null;
          this._levelExpConfig = null;
          this._propsInfo = {};
          this._vipInfo = {};
          this._gamePlayInfoRecord = {};
          this._loginSuccessTime = null;
          this._todayEventData = null;
          this._clickedRecordData = null;
          this.initSubClass();
        }

        /** 初始化附加类 */
        initSubClass() {
          this.print(">>>>初始化附加类<<<<");
          this.__goodsData = new (_crd && GoodsData === void 0 ? (_reportPossibleCrUseOfGoodsData({
            error: Error()
          }), GoodsData) : GoodsData)(this);
          this.__recommendPop = new (_crd && RecommendPop === void 0 ? (_reportPossibleCrUseOfRecommendPop({
            error: Error()
          }), RecommendPop) : RecommendPop)(this);
          this.__shopInfo = new (_crd && ShopInfo === void 0 ? (_reportPossibleCrUseOfShopInfo({
            error: Error()
          }), ShopInfo) : ShopInfo)(this);
          this.__TaskInfo = new (_crd && TaskInfo === void 0 ? (_reportPossibleCrUseOfTaskInfo({
            error: Error()
          }), TaskInfo) : TaskInfo)(this);
          this.__mailInfo = new (_crd && MailInfo === void 0 ? (_reportPossibleCrUseOfMailInfo({
            error: Error()
          }), MailInfo) : MailInfo)(this);
          this.__watchMessage = new (_crd && WatchMessage === void 0 ? (_reportPossibleCrUseOfWatchMessage({
            error: Error()
          }), WatchMessage) : WatchMessage)(this);
          this.__selectGame = new (_crd && SelectGame === void 0 ? (_reportPossibleCrUseOfSelectGame({
            error: Error()
          }), SelectGame) : SelectGame)(this);
          this.__shareInfo = new (_crd && ShareInfo === void 0 ? (_reportPossibleCrUseOfShareInfo({
            error: Error()
          }), ShareInfo) : ShareInfo)(this);
          this.__activity = new (_crd && Activity === void 0 ? (_reportPossibleCrUseOfActivity({
            error: Error()
          }), Activity) : Activity)(this);
          this.__bankrupData = new (_crd && BankrupData === void 0 ? (_reportPossibleCrUseOfBankrupData({
            error: Error()
          }), BankrupData) : BankrupData)(this);
          this.__redDot = new (_crd && RedDot === void 0 ? (_reportPossibleCrUseOfRedDot({
            error: Error()
          }), RedDot) : RedDot)(this);
          this.__menuInfo = new (_crd && MenuInfo === void 0 ? (_reportPossibleCrUseOfMenuInfo({
            error: Error()
          }), MenuInfo) : MenuInfo)(this);
          this.__backPack = new (_crd && BackPack === void 0 ? (_reportPossibleCrUseOfBackPack({
            error: Error()
          }), BackPack) : BackPack)(this);
          this.__propsConf = new (_crd && PropsConf === void 0 ? (_reportPossibleCrUseOfPropsConf({
            error: Error()
          }), PropsConf) : PropsConf)(this);
        }
        /** 获取附属类 GoodsData */


        get GoodsData() {
          return this.__goodsData;
        }
        /** 获取附属类 RecommendPop */


        get RecommendPop() {
          return this.__recommendPop;
        }
        /** 获取附属类 ShopInfo*/


        get ShopInfo() {
          return this.__shopInfo;
        }
        /** 获取附属类 TaskInfo*/


        get TaskInfo() {
          return this.__TaskInfo;
        }
        /** 获取附属类 Activity*/


        get Activity() {
          return this.__activity;
        }
        /** 获取附属类 BankrupData*/


        get BankrupData() {
          return this.__bankrupData;
        }
        /** 获取附属类 MailInfo*/


        get MailInfo() {
          return this.__mailInfo;
        }
        /** 获取附属类 WatchMessage*/


        get WatchMessage() {
          return this.__watchMessage;
        }
        /** 获取附属类 SelectGame*/


        get SelectGame() {
          return this.__selectGame;
        }
        /** 获取附属类 RedDot */


        get RedDot() {
          return this.__redDot;
        }
        /** 获取附属类 ShareInfo */


        get ShareInfo() {
          return this.__shareInfo;
        }
        /** 获取附属类 MenuInfo */


        get MenuInfo() {
          return this.__menuInfo;
        }
        /** 获取附属类 BackPack*/


        get BackPack() {
          return this.__backPack;
        }
        /** 获取附属类 PropsConf */


        get PropsConf() {
          return this.__propsConf;
        } //登录成功后加载解析登录数据 （默认 0为true 1为false）


        onloadLoginSuccessParams(user, game, account) {
          user = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).table_verify(user);
          game = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).table_verify(game);
          account = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).table_verify(account); //----------------------------------------------------------
          //mid

          user["mid"] = Number((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).nullToDefault(user["mid"], -1));
          user["guid"] = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).nullToDefault(user["guid"], "");
          user["appid"] = Number((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).nullToDefault(user["appid"], -1));
          user["province"] = user["province"];
          user["region"] = user["region"]; //昵称

          user["nick"] = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).nullToDefault(user["nick"], "");
          user["status"] = Number((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).nullToDefault(user["status"], -1)); //上次登录的时间

          user["lastlogin"] = Number(user["lastlogin"]); //性别 0 - 保密，1 - 男 ,2 - 女（默认显示男头像）

          user["sex"] = Number((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).nullToDefault(user["sex"], 1));
          user["join"] = Number(user["join"]);
          user["ssid"] = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).nullToDefault(user["ssid"], ""); //城市

          user["city"] = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).nullToDefault(user["city"], "");
          user["platformid"] = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).nullToDefault(user["platformid"], "");
          user["bagvol"] = user["bagvol"];
          user["cid"] = user["cid"];
          user["friend_des"] = user["friend_des"];
          user["silverCrystalFlag"] = user["silverCrystalFlag"];
          user["is_guide_by"] = user["is_guide_by"];
          user["age"] = Number((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).nullToDefault(user["age"], 0)); //是否实名

          user["is_real_name_auth"] = user["is_real_name_auth"] || false; //vip级别

          user["vipLevel"] = Number((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).nullToDefault(user["vipLevel"], 0));
          user["vipPrivileges"] = user["vipPrivileges"]; //今日首次登录

          user["isFirstLogin"] = Number((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).nullToDefault(user["isFirstLogin"], 0)) == 0 ? true : false;
          user["avatar_auditing"] = Number((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).nullToDefault(user["avatar_auditing"], -1)); //通行证账号

          user["byacc"] = user["byacc"]; //用户头像框

          user["headBox"] = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).nullToDefault(user["hdIcon"], "");
          user["hometown"] = user["hometown"]; //头像相关

          user["avatar_s"] = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).nullToDefault(user["avatar_s"], ""); //小

          user["avatar_m"] = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).nullToDefault(user["avatar_m"], ""); //中

          user["avatar_b"] = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).nullToDefault(user["avatar_b"], ""); //大

          user["avatar_auditing"] = Number((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).nullToDefault(user["avatar_auditing"], -1));
          user["avatar_audit"] = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).nullToDefault(user["avatar_audit"], ""); //----------------------------------------------------------
          //经验值

          game["exp"] = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).nullToDefault(Number(game["exp"]), 0); //游戏内金币

          game["money"] = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).nullToDefault(Number(game["money"]), 0); //用户总金币

          game["totalmoney"] = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).nullToDefault(Number(game["totalmoney"]), 0); //保险箱中的金币

          game["safebox"] = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).nullToDefault(Number(game["safebox"]), 0); //用户总金条

          game["crystal"] = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).nullToDefault(Number(game["crystal"]), 0); //保险箱中的金条

          game["crystalsafebox"] = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).nullToDefault(Number(game["crystalsafebox"]), 0); //用户总兑换券

          game["bdiamond"] = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).nullToDefault(Number(game["bdiamond"]), 0);
          game["silver"] = Number(game["silver"]); //----------------------------------------------------------

          account["access_token"] = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).nullToDefault(account["access_token"], "");
          account["bid"] = account["bid"];
          account["login_type"] = Number(account["login_type"]);
          account["guid"] = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).nullToDefault(account["guid"], "").toString().trim();
          account["register"] = Number(account["register"]);
          account["utype"] = Number(account["utype"]);
          this.saveCurLoginInfo(user, game, account);
          (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).dump(user);
          (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).dump(game);
          (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).dump(account);
        } //设置玩家的登录状态


        setLoginState(param) {
          var lastLoginState = this._loginState;
          this._loginState = param;
          var isChange = false; //状态改变通知
          //登录成功

          if (param == (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
            error: Error()
          }), GConstants) : GConstants).UserLoginState.LoginSuccess && lastLoginState != (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
            error: Error()
          }), GConstants) : GConstants).UserLoginState.LoginSuccess) {
            this.updateLastLoginTime();
            this._todayEventData = null;
            this.LoginRoomState = false;
            this.updateLocalDataByLoginSuccess();
            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
              error: Error()
            }), AppEvent) : AppEvent).LOGIN_STATE_CHANGE, this._loginState);
          } //退出登录状态


          if (lastLoginState == (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
            error: Error()
          }), GConstants) : GConstants).UserLoginState.LoginSuccess && param != (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
            error: Error()
          }), GConstants) : GConstants).UserLoginState.LoginSuccess) {
            this._loginSuccessTime = null;
            this.LoginRoomState = false;
            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
              error: Error()
            }), AppEvent) : AppEvent).LOGIN_STATE_CHANGE, this._loginState);
          }
        }
        /** 用户登录成功:改变清除本地缓存 */


        updateLocalDataByLoginSuccess() {
          var lastClientVer = (_crd && LocalStorage === void 0 ? (_reportPossibleCrUseOfLocalStorage({
            error: Error()
          }), LocalStorage) : LocalStorage).get((_crd && StoreKey === void 0 ? (_reportPossibleCrUseOfStoreKey({
            error: Error()
          }), StoreKey) : StoreKey).SYS_ClientVer, (_crd && ClientInfo === void 0 ? (_reportPossibleCrUseOfClientInfo({
            error: Error()
          }), ClientInfo) : ClientInfo).AppVer);
          var isSameVer = String(lastClientVer) == String((_crd && ClientInfo === void 0 ? (_reportPossibleCrUseOfClientInfo({
            error: Error()
          }), ClientInfo) : ClientInfo).AppVer); //版本号不一致时 当清除本地缓存

          if (isSameVer == false) {// this.RecommendPop.initLocalData();
          } else {
            this.RecommendPop.reloadLocalData();
          }

          this.RedDot.reloadLocalData();
        }
        /**
         * 更新用户今日事件(本地存储)
         * @param key 
         * @param data 
         */


        setTodayLocalRecord(key, saveData) {
          if (saveData === void 0) {
            saveData = null;
          }

          if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).string_isEmpty(key)) {
            return false;
          }

          var uid = String(this.getUserMid());
          var realKey = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).string_format((_crd && StoreKey === void 0 ? (_reportPossibleCrUseOfStoreKey({
            error: Error()
          }), StoreKey) : StoreKey).USER_TODAY_EVENT, uid);

          if (!this._todayEventData) {
            var oldData = (_crd && LocalStorage === void 0 ? (_reportPossibleCrUseOfLocalStorage({
              error: Error()
            }), LocalStorage) : LocalStorage).get(realKey, null);
            oldData = (_crd && Encrypt === void 0 ? (_reportPossibleCrUseOfEncrypt({
              error: Error()
            }), Encrypt) : Encrypt).JsonDecode(oldData);
            oldData = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).table_verify(oldData);
            this._todayEventData = oldData;
          }

          key = String(key);
          this._todayEventData[key] = saveData;
          this.print("更新用户今日事件==> key:", key, saveData, this._todayEventData);
          (_crd && LocalStorage === void 0 ? (_reportPossibleCrUseOfLocalStorage({
            error: Error()
          }), LocalStorage) : LocalStorage).set(realKey, (_crd && Encrypt === void 0 ? (_reportPossibleCrUseOfEncrypt({
            error: Error()
          }), Encrypt) : Encrypt).JsonEncode2(this._todayEventData));
          return true;
        }
        /**
         * 获取用户今日事件(本地存储)
         * @param key
         * @param def 默认值
         */


        getTodayLocalRecord(key, def) {
          if (def === void 0) {
            def = null;
          }

          if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).string_isEmpty(key)) {
            return null;
          }

          if (!this._todayEventData) {
            var uid = String(this.getUserMid());
            var realKey = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).string_format((_crd && StoreKey === void 0 ? (_reportPossibleCrUseOfStoreKey({
              error: Error()
            }), StoreKey) : StoreKey).USER_TODAY_EVENT, uid);
            var oldData = (_crd && LocalStorage === void 0 ? (_reportPossibleCrUseOfLocalStorage({
              error: Error()
            }), LocalStorage) : LocalStorage).get(realKey, null);
            oldData = (_crd && Encrypt === void 0 ? (_reportPossibleCrUseOfEncrypt({
              error: Error()
            }), Encrypt) : Encrypt).JsonDecode(oldData);
            oldData = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).table_verify(oldData);
            this._todayEventData = oldData;
          }

          key = String(key);
          console.log("获取用户今日事件==>", key, this._todayEventData[key]);
          return this._todayEventData[key] != null ? this._todayEventData[key] : def;
        }
        /**
         * 更新上次登录的时间(只有成功登录了才会更新)
         */


        updateLastLoginTime() {
          this._loginSuccessTime = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).time();
          var key = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).string_format((_crd && StoreKey === void 0 ? (_reportPossibleCrUseOfStoreKey({
            error: Error()
          }), StoreKey) : StoreKey).USER_LOGIN_LAST_TIME, this.getUserMid());
          var lastLoginTime = (_crd && LocalStorage === void 0 ? (_reportPossibleCrUseOfLocalStorage({
            error: Error()
          }), LocalStorage) : LocalStorage).get(key, null);

          if (lastLoginTime == null || (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).time_isSampleDay(this._loginSuccessTime, lastLoginTime) == false) {
            //非同一天 清除今日记录
            this.cleanTodayLocalRecord();
          }

          (_crd && LocalStorage === void 0 ? (_reportPossibleCrUseOfLocalStorage({
            error: Error()
          }), LocalStorage) : LocalStorage).set(key, this._loginSuccessTime);
        }
        /**
         * 清除今日记录
         */


        cleanTodayLocalRecord() {
          var uid = String(this.getUserMid());
          var realKey = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).string_format((_crd && StoreKey === void 0 ? (_reportPossibleCrUseOfStoreKey({
            error: Error()
          }), StoreKey) : StoreKey).USER_TODAY_EVENT, uid);
          (_crd && LocalStorage === void 0 ? (_reportPossibleCrUseOfLocalStorage({
            error: Error()
          }), LocalStorage) : LocalStorage).set(realKey, null);
          this._todayEventData = null;
          console.log("清除今日记录结果", (_crd && LocalStorage === void 0 ? (_reportPossibleCrUseOfLocalStorage({
            error: Error()
          }), LocalStorage) : LocalStorage).get(realKey));
        }
        /**
         * 更新用户点击操作次数(本地存储)
         * @param key 点击的标识
         * @returns 
         */


        updateClickRecord(key) {
          if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).string_isEmpty(key)) {
            return false;
          }

          var uid = String(this.getUserMid());
          var realKey = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).string_format((_crd && StoreKey === void 0 ? (_reportPossibleCrUseOfStoreKey({
            error: Error()
          }), StoreKey) : StoreKey).USER_CLICKED_RECORD, uid);

          if (!this._clickedRecordData) {
            var oldData = (_crd && LocalStorage === void 0 ? (_reportPossibleCrUseOfLocalStorage({
              error: Error()
            }), LocalStorage) : LocalStorage).get(realKey, null);
            oldData = (_crd && Encrypt === void 0 ? (_reportPossibleCrUseOfEncrypt({
              error: Error()
            }), Encrypt) : Encrypt).JsonDecode(oldData);
            oldData = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).table_verify(oldData);
            this._clickedRecordData = oldData;
          }

          key = String(key);
          this._clickedRecordData[key] = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).number_valueOf(this._clickedRecordData[key], 0) + 1;
          this.print("更新用户点击操作次数==> key:", key, this._clickedRecordData[key], this._clickedRecordData);
          (_crd && LocalStorage === void 0 ? (_reportPossibleCrUseOfLocalStorage({
            error: Error()
          }), LocalStorage) : LocalStorage).set(realKey, (_crd && Encrypt === void 0 ? (_reportPossibleCrUseOfEncrypt({
            error: Error()
          }), Encrypt) : Encrypt).JsonEncode2(this._clickedRecordData));
          return true;
        }
        /**
         * 获取用户点击操作次数(本地存储)
         * @param key:number|null
         */


        getClickRecord(key) {
          if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).string_isEmpty(key)) {
            return null;
          }

          if (!this._clickedRecordData) {
            var uid = String(this.getUserMid());
            var realKey = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).string_format((_crd && StoreKey === void 0 ? (_reportPossibleCrUseOfStoreKey({
              error: Error()
            }), StoreKey) : StoreKey).USER_CLICKED_RECORD, uid);
            var oldData = (_crd && LocalStorage === void 0 ? (_reportPossibleCrUseOfLocalStorage({
              error: Error()
            }), LocalStorage) : LocalStorage).get(realKey, null);
            oldData = (_crd && Encrypt === void 0 ? (_reportPossibleCrUseOfEncrypt({
              error: Error()
            }), Encrypt) : Encrypt).JsonDecode(oldData);
            oldData = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).table_verify(oldData);
            this._clickedRecordData = oldData;
          }

          key = String(key);
          console.log("获取用户点击操作次数==>", key, this._clickedRecordData[key]);
          return (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).number_valueOf(this._clickedRecordData[key], 0);
        } //获取玩家的登录状态


        getLoginState() {
          return this._loginState;
        } //设置玩家游戏房间登录状态


        set LoginRoomState(param) {
          this._loginRoomState = param || false;
        } //获取玩家游戏房间登录状态


        get LoginRoomState() {
          return this._loginRoomState;
        }
        /** 玩家是否登录成功 */


        isLoginSuccesed() {
          if (this._loginState == (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
            error: Error()
          }), GConstants) : GConstants).UserLoginState.LoginSuccess) {
            return true;
          }

          return false;
        }
        /** 玩家是否正在登录中 */


        isLogining() {
          if (this._loginState == (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
            error: Error()
          }), GConstants) : GConstants).UserLoginState.Logining) {
            return true;
          }

          return false;
        }
        /** 保存当前登录的信息 */


        saveCurLoginInfo(user, game, account) {
          this.setData("user", user);
          this.setData("game", game);
          this.setData("account", account);
          var data = {
            imsi: (_crd && ClientInfo === void 0 ? (_reportPossibleCrUseOfClientInfo({
              error: Error()
            }), ClientInfo) : ClientInfo).IMSI,
            mid: user["mid"],
            guid: user["guid"],
            byacc: user["byacc"],
            nick: user["nick"],
            sex: user["sex"],
            uType: account["uType"],
            token: account["access_token"],
            bid: account["bid"],
            phoneNum: account["phone"],
            loginType: account["login_type"],
            registerTime: user["join"]
          };
          this.saveLastlocalLoginInfo(data); //通行证用户保存账号信息

          if (data.uType == (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
            error: Error()
          }), GConstants) : GConstants).UserUType.BoyaaPassport) {
            this.addAccountInfo(user.byacc, null, account["bid"], account["access_token"]);
          }
        }

        getDataUser(key, del) {
          if (key === void 0) {
            key = null;
          }

          if (del === void 0) {
            del = null;
          }

          if (key) {
            var user = this.getData("user");

            if (user) {
              if (user[key] != null && user[key] != undefined) {
                return user[key];
              }
            }
          }

          return del;
        }

        getDataGame(key, del) {
          if (key === void 0) {
            key = null;
          }

          if (del === void 0) {
            del = null;
          }

          if (key) {
            var game = this.getData("game");

            if (game) {
              if (game[key] != null && game[key] != undefined) {
                return game[key];
              }
            }
          }

          return null;
        }

        getDataAccount(key, del) {
          if (key === void 0) {
            key = null;
          }

          if (del === void 0) {
            del = null;
          }

          if (key) {
            var account = this.getData("account");

            if (account[key] != null && account[key] != undefined) {
              return account[key];
            }
          }

          return null;
        } //更新用户数据


        updateDataUserKey(key, value) {
          if (key === void 0) {
            key = null;
          }

          if (value === void 0) {
            value = null;
          }

          if (key) {
            var user = this.getData("user");

            if (user) {
              if (user[key] != null && user[key] != undefined) {
                user[key] = value;
                this.setData("user", user);
              }
            }
          }
        }
        /** 获取玩家成功登录的时间 可能为空 */


        getLoginSuccessTime() {
          return this._loginSuccessTime;
        } //更新用户游戏数据


        updateDataGameKey(key, value) {
          if (key === void 0) {
            key = null;
          }

          if (value === void 0) {
            value = null;
          }

          if (key) {
            var game = this.getData("game");

            if (game) {
              if (game[key] != null && game[key] != undefined) {
                game[key] = value;
                this.setData("game", game);
              }
            }
          }
        } //更新用户Account数据


        updateDataAccountKey(key, value) {
          if (key === void 0) {
            key = null;
          }

          if (value === void 0) {
            value = null;
          }

          if (key) {
            var account = this.getData("account");

            if (account) {
              if (account[key] != null && account[key] != undefined) {
                account[key] = value;
                this.setData("account", account);
              }
            }
          }
        } //保存上次登录的信息


        saveLastlocalLoginInfo(param) {
          var res = (_crd && Encrypt === void 0 ? (_reportPossibleCrUseOfEncrypt({
            error: Error()
          }), Encrypt) : Encrypt).JsonEncode2(param);

          if (res == "") {
            res = null;
          }

          if (res == null) {
            this._lastlocalLoginInfo = null;
          }

          (_crd && LocalStorage === void 0 ? (_reportPossibleCrUseOfLocalStorage({
            error: Error()
          }), LocalStorage) : LocalStorage).set((_crd && StoreKey === void 0 ? (_reportPossibleCrUseOfStoreKey({
            error: Error()
          }), StoreKey) : StoreKey).LOGIN_LAST_INFO, res);
          this._lastlocalLoginInfo = null;
        } //清空上次登录


        cleanLastlocalLoginInfo() {
          (_crd && LocalStorage === void 0 ? (_reportPossibleCrUseOfLocalStorage({
            error: Error()
          }), LocalStorage) : LocalStorage).set((_crd && StoreKey === void 0 ? (_reportPossibleCrUseOfStoreKey({
            error: Error()
          }), StoreKey) : StoreKey).LOGIN_LAST_INFO, null);
          this._lastlocalLoginInfo = null;
        } //清空上次登录Token


        cleanLastlocalLoginToken() {
          var tab = this.getLastlocalLoginInfo();

          if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).table_isEmpty(tab) == false) {
            tab["token"] = null; // 地方是guid字段

            (_crd && LocalStorage === void 0 ? (_reportPossibleCrUseOfLocalStorage({
              error: Error()
            }), LocalStorage) : LocalStorage).set((_crd && StoreKey === void 0 ? (_reportPossibleCrUseOfStoreKey({
              error: Error()
            }), StoreKey) : StoreKey).LOGIN_LAST_INFO, tab);
          }

          this._lastlocalLoginInfo = null;
        } //获取上次登录的信息(Array)


        getLastlocalLoginInfo() {
          if (!this._lastlocalLoginInfo) {
            this._lastlocalLoginInfo = (_crd && LocalStorage === void 0 ? (_reportPossibleCrUseOfLocalStorage({
              error: Error()
            }), LocalStorage) : LocalStorage).get((_crd && StoreKey === void 0 ? (_reportPossibleCrUseOfStoreKey({
              error: Error()
            }), StoreKey) : StoreKey).LOGIN_LAST_INFO, null);

            if (this._lastlocalLoginInfo) {
              this._lastlocalLoginInfo = (_crd && Encrypt === void 0 ? (_reportPossibleCrUseOfEncrypt({
                error: Error()
              }), Encrypt) : Encrypt).JsonDecode(this._lastlocalLoginInfo);
            }
          }

          return this._lastlocalLoginInfo;
        }
        /** 获取上次登录的某一个key的value */


        getLastLoginValueByKey(key, def) {
          if (def === void 0) {
            def = null;
          }

          if (!key) {
            return def;
          }

          if (this.getLastlocalLoginInfo()) {
            return this._lastlocalLoginInfo[key] || def;
          }

          return def;
        } //获取上次登录的类型


        getLastlocalLoginType() {
          if (!this._lastlocalLoginInfo) {
            this.getLastlocalLoginInfo();
          }

          if (!this._lastlocalLoginInfo) {
            return (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
              error: Error()
            }), GConstants) : GConstants).UserLoginType.NONE;
          }

          return this._lastlocalLoginInfo["loginType"] || (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
            error: Error()
          }), GConstants) : GConstants).UserLoginType.NONE;
        } //获取上次登录的Token


        getLastlocalLoginToken() {
          if (!this._lastlocalLoginInfo) {
            this.getLastlocalLoginInfo();
          }

          if (!this._lastlocalLoginInfo) {
            return null;
          }

          return this._lastlocalLoginInfo["token"]; // 地方是guid字段
        } //获取上次登录的服务器配置地址


        getLastlocalLoginServerConf() {
          if (!this._lastlocalLoginInfo) {
            this.getLastlocalLoginInfo();
          }

          if (!this._lastlocalLoginInfo) {
            return null;
          }

          return this._lastlocalLoginInfo["serverConf"];
        } //获取上次登录boyaa通行证


        getLastlocalByacc() {
          if (!this._lastlocalLoginInfo) {
            this.getLastlocalLoginInfo();
          }

          if (!this._lastlocalLoginInfo) {
            return null;
          }

          return this._lastlocalLoginInfo["byacc"] || null;
        } //获取上次登录的token


        getLastlocalToken() {
          if (!this._lastlocalLoginInfo) {
            this.getLastlocalLoginInfo();
          }

          if (!this._lastlocalLoginInfo) {
            return null;
          }

          return this._lastlocalLoginInfo["token"] || null;
        } //获取上次登录的Mid


        getLastlocalMid() {
          if (!this._lastlocalLoginInfo) {
            this.getLastlocalLoginInfo();
          }

          if (!this._lastlocalLoginInfo) {
            return null;
          }

          return this._lastlocalLoginInfo["mid"] || null;
        }
        /**
         * 获取玩家基础信息
         * @param key 键 字符串
         */


        getUserInfoProp(key) {
          if (key === void 0) {
            key = null;
          }

          if (key) {
            if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).isNull(this._userInfo[key])) {
              return null;
            }

            return this._userInfo[key];
          } else {
            return this._userInfo;
          }
        }
        /**
         * 设置用户身份标识 
         * 0标识普通用户，1标识付费用户，2标识vip用户, 3标识即是付费用户又vip用户
         * @param keyCode 
         */


        setIdentity(keyCode) {
          if (keyCode === void 0) {
            keyCode = 0;
          }

          this.setData("Identity", keyCode);
        } //获取用户身份标识 


        getIdentity() {
          return (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).number_valueOf(this.getData("Identity"), 0);
        } //是否是付费用户


        getIsPayUser() {
          var identity = this.getIdentity();
          return identity == (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
            error: Error()
          }), GConstants) : GConstants).UserIdentity.Rmb || identity == (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
            error: Error()
          }), GConstants) : GConstants).UserIdentity.RmbAndVip;
        } //获取用户的Mid


        getUserMid(del) {
          if (del === void 0) {
            del = null;
          }

          return this.getDataUser("mid", del);
        } //获取用户的cid


        getUserCid(del) {
          if (del === void 0) {
            del = null;
          }

          return this.getDataUser("cid", this.getDataUser("mid", del));
        } //获取用户的APPID


        getUserAppID(del) {
          if (del === void 0) {
            del = null;
          }

          return this.getDataUser("appid", del);
        } //获取用户的Guid


        getUserGuid(del) {
          if (del === void 0) {
            del = null;
          }

          return this.getDataUser("guid", del);
        } //获取用户的昵称


        getUserName(del) {
          if (del === void 0) {
            del = null;
          }

          return this.getDataUser("nick", del);
        } //获取用户的性别


        getUserSex(del) {
          if (del === void 0) {
            del = null;
          }

          return this.getDataUser("sex", del);
        } //获取用户的城市


        getUserCity(del) {
          if (del === void 0) {
            del = null;
          }

          return this.getDataUser("city", del);
        } //获取用户头像数组


        getUserHeadArray(del) {
          if (del === void 0) {
            del = null;
          }

          var headArray = {
            s: this.getDataUser("avatar_s", del),
            m: this.getDataUser("avatar_m", del),
            b: this.getDataUser("avatar_b", del)
          };
          return headArray;
        } //获取用户头像数组


        getUserHeadBox(del) {
          if (del === void 0) {
            del = null;
          }

          return this.getDataUser("headBox", del);
        } //获取用户兑换券


        getUserDiamond(del) {
          if (del === void 0) {
            del = null;
          }

          return this.getDataGame("bdiamond", del == null ? 0 : del);
        } //获取用户金条


        getUserCrystal(del) {
          if (del === void 0) {
            del = null;
          }

          return this.getDataGame("crystal", del == null ? 0 : del);
        }
        /** 获取用户保险箱金条 */


        getUserCrystalSafeBox(del) {
          if (del === void 0) {
            del = null;
          }

          return this.getDataGame("crystalsafebox", del == null ? 0 : del);
        }
        /** 获取用户总银币 */


        getUserSilver(del) {
          if (del === void 0) {
            del = null;
          }

          var all = this.getDataGame("totalmoney", del == null ? 0 : del);
          this.print("获取总银币==>", all);
          return this.getDataGame("totalmoney", del == null ? 0 : del);
        }
        /** 获取用户现金银币 */


        getUserGameSilver(del) {
          if (del === void 0) {
            del = null;
          }

          var a = this.getDataGame("money", del == null ? 0 : del);
          this.print("获取用户现金银币==>", a);
          return a;
        }

        getUserGameExp(del) {
          if (del === void 0) {
            del = null;
          }

          return this.getDataGame("exp", del == null ? 0 : del);
        }
        /**
         * 根据货币类型 获取用户身上的money
         * @param moneyID 货币类型 0:银币，1：金条 2：兑换券
         * @param isAll 是否是所有 默认非所有
         */


        getUserMoneyByID(moneyID, isAll) {
          if (moneyID === void 0) {
            moneyID = 0;
          }

          if (isAll === void 0) {
            isAll = false;
          }

          this.print("根据货币类型 获取用户身上的money===>moneyID=", moneyID);

          if (moneyID == 0) {
            if (isAll) {
              return this.getUserSilver();
            } else {
              return this.getUserGameSilver();
            }
          } else if (moneyID == 1) {
            if (isAll) {
              return this.getUserCrystal() + this.getUserCrystalSafeBox();
            } else {
              return this.getUserCrystal();
            }
          } else if (moneyID == 2) {
            return this.getUserDiamond();
          }

          return 0;
        }
        /**
         * 根据货币类型 更新用户身上的money
         * @param moneyID 货币类型 0:银币，1：金条 2：兑换券
         * @param value 数值
         */


        updateUserMoneyByID(moneyID, value, isAll) {
          if (moneyID === void 0) {
            moneyID = 0;
          }

          if (value === void 0) {
            value = 0;
          }

          if (isAll === void 0) {
            isAll = false;
          }

          var oldNum = null;
          var newNum = null;

          if (moneyID == (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
            error: Error()
          }), GConstants) : GConstants).PropertyType.SILVER_COIN) {
            if (isAll) {
              oldNum = this.getDataGame("totalmoney", 0);
              this.updateDataGameKey("totalmoney", value);
              newNum = this.getDataGame("totalmoney", oldNum);
            } else {
              oldNum = this.getDataGame("money", 0);
              this.updateDataGameKey("money", value);
              newNum = this.getDataGame("money", oldNum);
            }
          } else if (moneyID == (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
            error: Error()
          }), GConstants) : GConstants).PropertyType.GOLD_BAR) {
            oldNum = this.getDataGame("crystal", 0);
            this.updateDataGameKey("crystal", value);
            newNum = this.getDataGame("crystal", oldNum);
          } else if (moneyID == (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
            error: Error()
          }), GConstants) : GConstants).PropertyType.DIAMOND) {
            oldNum = this.getDataGame("bdiamond", 0);
            this.updateDataGameKey("bdiamond", value);
            newNum = this.getDataGame("bdiamond", oldNum);
          }

          if (oldNum != null) {
            if (oldNum != newNum) {
              this.print(">>>\u8D44\u4EA7\u6709\u53D8\u66F4 \u8D27\u5E01\u7C7B\u578B:" + moneyID + " \u53D8\u66F4\u524D:" + oldNum + " \u53D8\u66F4\u540E:" + newNum);
              var sendBody = {
                type: moneyID,
                num: newNum
              }; //通知:资产变更

              (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
                error: Error()
              }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
                error: Error()
              }), AppEvent) : AppEvent).USER_UPDATE_PROPERTY, sendBody);
            }
          }
        }
        /** 今日首次登录 */


        isFirstLoginToday() {
          if (this.getLoginSuccessCount(this.getUserMid()) == 1) {
            if (this.isRegisterToday()) {
              return true;
            } else {
              var lastLoginTime = this.getDataUser("lastlogin", null);
              var currowTime = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                error: Error()
              }), Utils) : Utils).time();
              return (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                error: Error()
              }), Utils) : Utils).time_isSampleDay(lastLoginTime, currowTime);
            }
          }

          return false;
        }
        /** 当前首次登录 */


        isFirstLoginCurrow() {
          var mid = this.getUserMid();

          if (this.isFirstLoginToday() && !(_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).string_isEmpty(mid)) {
            return this.getLoginSuccessCount(mid) == 1;
          }

          return false;
        }
        /** 今日注册 */


        isRegisterToday() {
          var joinTime = this.getDataUser("join", null);
          var currowTime = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).time();

          if (!(_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).isNull(joinTime)) {
            return (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).time_isSampleDay(joinTime, currowTime);
          }

          return false;
        } //账号历史


        getAccountHistory() {
          if (!this._historyLoginInfo) {
            this._historyLoginInfo = (_crd && LocalStorage === void 0 ? (_reportPossibleCrUseOfLocalStorage({
              error: Error()
            }), LocalStorage) : LocalStorage).get((_crd && StoreKey === void 0 ? (_reportPossibleCrUseOfStoreKey({
              error: Error()
            }), StoreKey) : StoreKey).LOGIN_USER_HISTORY, null);

            if (this._historyLoginInfo) {
              this._historyLoginInfo = (_crd && Encrypt === void 0 ? (_reportPossibleCrUseOfEncrypt({
                error: Error()
              }), Encrypt) : Encrypt).JsonDecode(this._historyLoginInfo);
            }
          }

          return this._historyLoginInfo || {};
        } //更新账号历史


        updateAccountHistory(param) {
          if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).string_isEmpty(param)) {
            return;
          }

          var temp = (_crd && Encrypt === void 0 ? (_reportPossibleCrUseOfEncrypt({
            error: Error()
          }), Encrypt) : Encrypt).JsonEncode2(param);

          if (temp) {
            (_crd && LocalStorage === void 0 ? (_reportPossibleCrUseOfLocalStorage({
              error: Error()
            }), LocalStorage) : LocalStorage).set((_crd && StoreKey === void 0 ? (_reportPossibleCrUseOfStoreKey({
              error: Error()
            }), StoreKey) : StoreKey).LOGIN_USER_HISTORY, temp);
          }

          return this.getAccountHistory();
        } //添加新的账号信息


        addAccountInfo(loginAccount, loginPsd, bid, access_token) {
          if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).string_isEmpty(loginAccount)) {
            return;
          }

          var data = this.getAccountHistory();

          for (var index = 0; index < data.length; index++) {
            var value = data[index];

            if (value && value["loginAccount"] == loginAccount) {
              data.splice(index, 0);
              break;
            }
          }

          var temp = {
            loginAccount: loginAccount,
            loginPsd: loginPsd,
            access_token: access_token
          };
          data.unshift(temp);
          this.updateAccountHistory(data);
        } //检查账号记录中是否存在记录


        checkIsExsitAccountInfo(loginAccount) {
          var recode = this.getAccountHistory();
          var isExsit = false;
          var key = null;
          var temp = {};

          for (var index = 0; index < recode.length; index++) {
            var value = recode[key];

            if (value["loginAccount"] && value["loginAccount"] == loginAccount) {
              isExsit = true;
              key = index;
              temp = value;
              break;
            }
          }

          return [isExsit, key, temp];
        } //更新登录次数成功的记录


        updateLoginSuccessCount() {
          var mid = this.getUserMid();

          if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).string_isEmpty(mid)) {
            return null;
          }

          var lastCount = this.getLoginSuccessCount(mid);
          this._loginSuccessCountArray[mid] = lastCount + 1; //保存

          var jsonStr = (_crd && Encrypt === void 0 ? (_reportPossibleCrUseOfEncrypt({
            error: Error()
          }), Encrypt) : Encrypt).JsonEncode2(this._loginSuccessCountArray);

          if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).string_isEmpty(jsonStr)) {
            jsonStr = null;
            return null;
          }

          this.print("更新登录次数成功的记录 ==>new = " + this._loginSuccessCountArray[mid]);
          (_crd && LocalStorage === void 0 ? (_reportPossibleCrUseOfLocalStorage({
            error: Error()
          }), LocalStorage) : LocalStorage).set((_crd && StoreKey === void 0 ? (_reportPossibleCrUseOfStoreKey({
            error: Error()
          }), StoreKey) : StoreKey).LOGIN_SUCCESS_COUNT, jsonStr);
          return this._loginSuccessCountArray[mid];
        } //用户经验等级配置


        updateLevelExpConfig(body) {
          if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).isNull(body)) {
            return;
          }

          var oneArray = ["exp", "name", "level"]; //已经排序过了

          this._levelExpConfig = [];
          var map = new Map();

          for (var level in body) {
            if (Object.prototype.hasOwnProperty.call(body, level)) {
              var expArray = body[level];

              if (expArray) {
                expArray = this.mergeArray(oneArray, expArray);
              }

              if (expArray) {
                map.set(level, expArray);
              }
            }
          }

          if (map.size > 0) {
            var arrayLike = Array.from(map); //得到的array中索引0为map中的key,索引1为map中的value

            arrayLike.sort(function (a, b) {
              return a[0] - b[0];
            });

            for (var index = 0; index < arrayLike.length; index++) {
              arrayLike[index][1]["level"] = arrayLike[index][0];

              this._levelExpConfig.push(arrayLike[index][1]);
            }
          }

          return this._levelExpConfig;
        } //用户经验等级配置


        getLevelExpConfig() {
          return this._levelExpConfig;
        } //更新经验值获取等级


        getLevelByExp(exp, del) {
          if (del === void 0) {
            del = 0;
          }

          if (!this._levelExpConfig) {
            return del;
          }

          exp = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).number_valueOf(exp);
          var level = null;
          var levelExpConf = null;

          for (var index = 0; index < this._levelExpConfig.length; index++) {
            var levelExp = this._levelExpConfig[index];

            if (levelExp && (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).isNull(levelExp["exp"]) == false) {
              if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                error: Error()
              }), Utils) : Utils).number_valueOf(levelExp["exp"]) > exp) {
                if (this._levelExpConfig[index - 1]) {
                  levelExpConf = this._levelExpConfig[index - 1];
                  level = levelExpConf["level"];
                }

                break;
              } else if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                error: Error()
              }), Utils) : Utils).number_valueOf(levelExp["exp"]) == exp) {
                levelExpConf = this._levelExpConfig[index];
                level = levelExpConf["level"];
                break;
              }
            }
          }

          if (!level) {
            var valueConf = this._levelExpConfig[this._levelExpConfig.length - 1];

            if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).number_valueOf(valueConf["exp"] < exp)) {
              levelExpConf = valueConf;
              level = levelExpConf["level"];
            }
          }

          return level;
        } //更新用户身上的道具信息


        updatePropsInfo(body) {
          if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).isNull(body)) {
            return;
          }

          var props = {};
          var vipInfo = null;
          body = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).table_verify(body);

          for (var i in body) {
            if (Object.prototype.hasOwnProperty.call(body, i)) {
              var item = {
                "type": (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                  error: Error()
                }), Utils) : Utils).number_valueOf(body[i]["propsType"], -1),
                //道具类型
                "expires": (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                  error: Error()
                }), Utils) : Utils).number_valueOf(body[i]["expires"], 0),
                //过期时间
                "allowTimes": (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                  error: Error()
                }), Utils) : Utils).number_valueOf(body[i]["allow_times"], 0),
                //道具个数
                "updateTime": (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                  error: Error()
                }), Utils) : Utils).time()
              };

              if (item.type == (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
                error: Error()
              }), GConstants) : GConstants).UserPropsType.TYPE_VIP) {
                vipInfo = item;
              }

              props[item.type] = item;
            }
          }

          this.setVipInfo(vipInfo);
          this._propsInfo = props;
        } //获取用户身上的道具信息


        getPropsInfo() {
          return this._propsInfo || {};
        } //获取用户身上的道具信息(根据道具类型)


        getPropsInfoByType(propType) {
          if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).isNull(propType)) {
            return null;
          }

          return this._propsInfo[propType] || null;
        } //获取用户身上的道具个数(根据道具类型)


        getPropsNumInfoByType(propType) {
          var info = this.getPropsInfoByType(propType);
          var num = 0;

          if (info) {
            if (this.isExpireProps(propType)) {
              return 0;
            }

            num = info["allowTimes"];
          }

          return num;
        } //道具是否过期


        isExpireProps(propType) {
          var info = this.getPropsInfoByType(propType);

          if (!info) {
            return true;
          }

          if (info["expires"] <= 0) {
            return false;
          }

          var time = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).time() - info["updateTime"];

          if (time >= info["expires"]) {
            return true;
          } else {
            return false;
          }
        } //设置Vip信息


        setVipInfo(body) {
          if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).table_isEmpty(body)) {
            this.setIdentity((_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
              error: Error()
            }), GConstants) : GConstants).UserIdentity.Normal);
          } else if ((body == null ? void 0 : body.type) == (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
            error: Error()
          }), GConstants) : GConstants).UserPropsType.TYPE_VIP) {
            var isPayUser = this.getIsPayUser();
            this.setVipTime(body["expires"]);

            if (isPayUser) {
              this.setIdentity((_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
                error: Error()
              }), GConstants) : GConstants).UserIdentity.RmbAndVip);
            } else {
              this.setIdentity((_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
                error: Error()
              }), GConstants) : GConstants).UserIdentity.Vip);
            }
          }
        } //viptime vip到期时间 -1表示无限制， 0表示过期  


        setVipTime(time) {
          var leftTime = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).number_valueOf(time); //单位为秒

          this.setData("vipTime", leftTime);
        } //获取登录次数成功的记录


        getLoginSuccessCount(mid) {
          if (!this._loginSuccessCountArray || !this._loginSuccessCountArray[mid]) {
            var record = (_crd && LocalStorage === void 0 ? (_reportPossibleCrUseOfLocalStorage({
              error: Error()
            }), LocalStorage) : LocalStorage).get((_crd && StoreKey === void 0 ? (_reportPossibleCrUseOfStoreKey({
              error: Error()
            }), StoreKey) : StoreKey).LOGIN_SUCCESS_COUNT, null);

            if (record) {
              record = (_crd && Encrypt === void 0 ? (_reportPossibleCrUseOfEncrypt({
                error: Error()
              }), Encrypt) : Encrypt).JsonDecode(record);
            }

            this._loginSuccessCountArray = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).table_verify(record);
          }

          var lastCount = 0;

          if (!(_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).isNull(this._loginSuccessCountArray[mid])) {
            lastCount = this._loginSuccessCountArray[mid];
            lastCount = Number(lastCount);
          }

          this.print("登录成功的次数===>" + lastCount);
          return lastCount;
        }
        /**
         * 计算需要取出多少银币
         * @param minMoney 场次银币下限
         * @param maxMoney 场次银币上限
         * @param money    用户现金
         * @param totalMoney 用户总银币
         */


        calTakeOutHowMuchMoney(minMoney, maxMoney, money, totalMoney) {
          var getMoney = 2 * minMoney - money;
          getMoney = Math.min(getMoney, totalMoney - money); //不能超过保险箱中的银币

          if (maxMoney != -1) {
            getMoney = Math.min(getMoney, maxMoney - money - 1); //不能超过银币上限(前闭后开)
          }

          return getMoney;
        } //获取玩家进入房间所需的信息


        getUserLoginInfoByIntoGame(gameID) {
          gameID = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).number_valueOf(gameID, null);

          if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).isNull(gameID)) {
            return null;
          }

          var headArray = this.getUserHeadArray();
          var commonInfo = {
            userId: this.getUserMid(0),
            cid: this.getUserCid(0),
            nickName: this.getUserName(""),
            sex: this.getUserSex(1),
            city: this.getUserCity(""),
            gold: this.getUserGameSilver(0),
            money: this.getUserGameSilver(0),
            //根据货币类型取得的资产数据,游戏重启马上重连时levelId不正确故此时资产类型不准
            diamond: this.getUserDiamond(0),
            crystal: this.getUserCrystal(),
            m_identity: this.getIdentity(),
            avatar_s: headArray["s"] || "",
            avatar_m: headArray["m"] || "",
            avatar_b: headArray["b"] || "",
            headBox: this.getUserHeadBox(""),
            level: this.getLevelByExp(this.getUserGameExp(0), 0),
            exp: this.getUserGameExp(0),
            //输赢平记录
            loseCount: (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).nullToDefault(this.getGamePlayRecordByKey(gameID, (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
              error: Error()
            }), GConstants) : GConstants).UserGameRecodeState.Lose), 0),
            winCount: (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).nullToDefault(this.getGamePlayRecordByKey(gameID, (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
              error: Error()
            }), GConstants) : GConstants).UserGameRecodeState.Win), 0),
            drawCount: (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).nullToDefault(this.getGamePlayRecordByKey(gameID, (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
              error: Error()
            }), GConstants) : GConstants).UserGameRecodeState.Draw), 0),
            ladderScore: (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).nullToDefault(this.getGamePlayRecordByKey(gameID, (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
              error: Error()
            }), GConstants) : GConstants).UserGameRecodeState.LadderScore), 0),
            appid: this.getUserAppID()
          };
          return commonInfo;
        }
        /**
         * 同步下发玩的游戏记录
         * @param gameID 游戏ID
         * @param body 
         * @returns 成功返回数据 失败返回空
         */


        syncGamePlayRecord(gameID, body) {
          gameID = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).number_valueOf(gameID, null);

          if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).isNull(gameID)) {
            return null;
          }

          var info = {
            "wintimes": 0,
            //赢的局数
            "losetimes": 0,
            //输的局数
            "drawtimes": 0,
            //平局
            "winmax": 0,
            //最大赢钱数
            "points": 0,
            "group": "",
            "eloscore": 0 //天梯分

          };

          var _info = this.mergeArrayDefault(info, body);

          this._gamePlayInfoRecord[gameID] = _info;
          return this._gamePlayInfoRecord[gameID];
        }
        /**
         * 获取某个游戏的玩的记录
         * @param gameID 游戏ID
         * @param itemKey 要获取的键值 为空则获取所有 详见UserGameRecodeState
         * @returns 成功返回数据 失败返回空
         */


        getGamePlayRecordByKey(gameID, itemKey) {
          if (itemKey === void 0) {
            itemKey = null;
          }

          gameID = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).number_valueOf(gameID, null);

          if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).isNull(gameID)) {
            return null;
          }

          if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).isNull(this._gamePlayInfoRecord[gameID])) {
            return null;
          }

          if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).isNull(itemKey)) {
            return this._gamePlayInfoRecord[gameID];
          }

          var key = null;

          switch (itemKey) {
            case (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
              error: Error()
            }), GConstants) : GConstants).UserGameRecodeState.Win:
              key = "wintimes";
              break;

            case (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
              error: Error()
            }), GConstants) : GConstants).UserGameRecodeState.Lose:
              key = "losetimes";
              break;

            case (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
              error: Error()
            }), GConstants) : GConstants).UserGameRecodeState.Draw:
              key = "drawtimes";
              break;

            case (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
              error: Error()
            }), GConstants) : GConstants).UserGameRecodeState.WinMax:
              key = "winmax";
              break;

            case (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
              error: Error()
            }), GConstants) : GConstants).UserGameRecodeState.LadderScore:
              key = "eloscore";
              break;

            default:
              break;
          }

          if (key) {
            return this._gamePlayInfoRecord[gameID][key];
          }

          return null;
        }
        /**
         * 更新某个游戏的玩的记录 每次加+1
         * @param gameID 游戏ID
         * @param itemKey 要更新的键值 详见UserGameRecodeState
         */


        updateGamePlayRecordByKey(gameID, itemKey) {
          if (itemKey === void 0) {
            itemKey = null;
          }

          gameID = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).number_valueOf(gameID, null);

          if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).isNull(gameID)) {
            return null;
          }

          if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).isNull(this._gamePlayInfoRecord[gameID])) {
            return null;
          }

          var key = null;

          switch (itemKey) {
            case (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
              error: Error()
            }), GConstants) : GConstants).UserGameRecodeState.Win:
              key = "wintimes";
              break;

            case (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
              error: Error()
            }), GConstants) : GConstants).UserGameRecodeState.Lose:
              key = "losetimes";
              break;

            case (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
              error: Error()
            }), GConstants) : GConstants).UserGameRecodeState.Draw:
              key = "drawtimes";
              break;

            case (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
              error: Error()
            }), GConstants) : GConstants).UserGameRecodeState.WinMax:
              key = "winmax";
              break;

            case (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
              error: Error()
            }), GConstants) : GConstants).UserGameRecodeState.LadderScore:
              key = "eloscore";
              break;

            default:
              break;
          }

          if (key) {
            var oldNum = this._gamePlayInfoRecord[gameID][key];

            if (typeof oldNum == "number") {
              this._gamePlayInfoRecord[gameID][key] = oldNum + 1;
            }

            return this._gamePlayInfoRecord[gameID][key];
          }

          return null;
        }
        /** 获取开放数据域要保存的数据 */


        getCloudStorageSaveList(callFunc) {
          if (callFunc === void 0) {
            callFunc = null;
          }

          var headFrame = this.getUserInfoProp("picture_frame");
          (_crd && Platform === void 0 ? (_reportPossibleCrUseOfPlatform({
            error: Error()
          }), Platform) : Platform).downloadFile(headFrame, res => {
            if (res["code"] === 200) {
              headFrame = res["filePath"];
            } else {
              headFrame = "";
            }

            var param = [{
              key: (_crd && CloundKey === void 0 ? (_reportPossibleCrUseOfCloundKey({
                error: Error()
              }), CloundKey) : CloundKey).USER_LOGIN_TIME,
              value: this.getLoginSuccessTime()
            }, {
              key: (_crd && CloundKey === void 0 ? (_reportPossibleCrUseOfCloundKey({
                error: Error()
              }), CloundKey) : CloundKey).USER_HEAD_FRAME,
              value: headFrame
            }, {
              key: (_crd && CloundKey === void 0 ? (_reportPossibleCrUseOfCloundKey({
                error: Error()
              }), CloundKey) : CloundKey).USER_UID,
              value: this.getUserMid()
            }];

            if (callFunc) {
              callFunc(param);
            }
          });
        }
        /** 获取开放数据域key队列 */


        getCloudStorageKeys() {
          var keys = [(_crd && CloundKey === void 0 ? (_reportPossibleCrUseOfCloundKey({
            error: Error()
          }), CloundKey) : CloundKey).USER_LOGIN_TIME, (_crd && CloundKey === void 0 ? (_reportPossibleCrUseOfCloundKey({
            error: Error()
          }), CloundKey) : CloundKey).USER_HEAD_FRAME, (_crd && CloundKey === void 0 ? (_reportPossibleCrUseOfCloundKey({
            error: Error()
          }), CloundKey) : CloundKey).USER_UID];
          return keys;
        }
        /** 获取开放数据域要传递的数据 */


        getCloudStorageParam() {
          //当前用户openID的数据
          var key_openid = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).string_format((_crd && StoreKey === void 0 ? (_reportPossibleCrUseOfStoreKey({
            error: Error()
          }), StoreKey) : StoreKey).LOGIN_USER_OPENID, this.getUserMid());
          var currentOpenid = (_crd && LocalStorage === void 0 ? (_reportPossibleCrUseOfLocalStorage({
            error: Error()
          }), LocalStorage) : LocalStorage).get(key_openid, '');
          console.log('当前用户的openid', currentOpenid);
          var shareOptions = {};

          if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).table_verify(this.__shareInfo.ShareConfig.friend)) {
            var shopShareMsg = this.__shareInfo.getShareConfigByType((_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
              error: Error()
            }), GConstants) : GConstants).ShareSceneConf.friend); // 空数组返回 true


            if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).table_isEmpty(shopShareMsg)) {
              shareOptions = {
                title: (_crd && GameTxt === void 0 ? (_reportPossibleCrUseOfGameTxt({
                  error: Error()
                }), GameTxt) : GameTxt).share_wx_friends_txt,
                //通用标题
                imageUrl: (_crd && GameRes === void 0 ? (_reportPossibleCrUseOfGameRes({
                  error: Error()
                }), GameRes) : GameRes).AppCommon_Share_Friend_Comm.path //通用img

              };
            } else {
              shareOptions = {
                title: shopShareMsg[0]['title'],
                //转发标题，不传则默认使用当前小游戏的昵称
                imageUrl: shopShareMsg[0]['img']
              };
            }
          }

          console.log('邀请好友分享的数据', shareOptions);
          return {
            maxFriends: 100,
            myopenID: currentOpenid,
            keyList: this.getCloudStorageKeys(),
            shareOptions: shareOptions
          };
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=7b497b2c9844e5270ca10318d83ec9998f79571f.js.map