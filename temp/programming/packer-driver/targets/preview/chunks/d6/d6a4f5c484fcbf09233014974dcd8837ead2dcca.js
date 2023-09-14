System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, AppEvent, GConstants, StoreKey, GameTxt, UIID, Encrypt, LocalStorage, EventManager, Utils, BaseCache, SelectGame, _crd;

  function _reportPossibleCrUseOfAppEvent(extras) {
    _reporterNs.report("AppEvent", "../config/AppEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGConstants(extras) {
    _reporterNs.report("GConstants", "../config/GameConstant", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStoreKey(extras) {
    _reporterNs.report("StoreKey", "../config/GameConstant", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameTxt(extras) {
    _reporterNs.report("GameTxt", "../config/GameTxt", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIID(extras) {
    _reporterNs.report("UIID", "../config/UIConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEncrypt(extras) {
    _reporterNs.report("Encrypt", "../framework/crypto/Encrypto", _context.meta, extras);
  }

  function _reportPossibleCrUseOfinf_GameIntoParams(extras) {
    _reporterNs.report("inf_GameIntoParams", "../framework/InterfaceDefines", _context.meta, extras);
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

  function _reportPossibleCrUseOfUser(extras) {
    _reporterNs.report("User", "./User", _context.meta, extras);
  }

  _export("SelectGame", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      AppEvent = _unresolved_2.AppEvent;
    }, function (_unresolved_3) {
      GConstants = _unresolved_3.GConstants;
      StoreKey = _unresolved_3.StoreKey;
    }, function (_unresolved_4) {
      GameTxt = _unresolved_4.GameTxt;
    }, function (_unresolved_5) {
      UIID = _unresolved_5.UIID;
    }, function (_unresolved_6) {
      Encrypt = _unresolved_6.Encrypt;
    }, function (_unresolved_7) {
      LocalStorage = _unresolved_7.LocalStorage;
    }, function (_unresolved_8) {
      EventManager = _unresolved_8.EventManager;
    }, function (_unresolved_9) {
      Utils = _unresolved_9.Utils;
    }, function (_unresolved_10) {
      BaseCache = _unresolved_10.BaseCache;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "726a9K4GalHYYMd7qckzMAp", "SelectGame", undefined);

      _export("SelectGame", SelectGame = class SelectGame extends (_crd && BaseCache === void 0 ? (_reportPossibleCrUseOfBaseCache({
        error: Error()
      }), BaseCache) : BaseCache) {
        /** 用户类 */

        /** 服务端游戏配置 */

        /** 服务端游戏实时在线人数 */

        /** 服务端单个游戏的场次标签栏信息 */

        /** 服务端单个游戏的场次人数信息 */

        /** 降场数据 */

        /** 升场数据 */

        /** 进入房间的数据缓存 */
        //实例化
        constructor(superClass) {
          super("SelectGame");
          this.__User = null;
          this._serverGameConfig = [];
          this._serverGamePersonOnline = {};
          this._serverGameLevelTabList = {};
          this._serverGameLevelPersonList = {};
          this._degradeRoomInfo = null;
          this._upLevelRoomInfo = null;
          this._intoGameData = null;
          this.__User = superClass;
        }

        /** set 进入房间的数据缓存 */
        set intoGameData(param) {
          this._intoGameData = param || null;
        }
        /** get 进入房间的数据缓存 */


        get intoGameData() {
          return this._intoGameData;
        }
        /** 设置上次进入房间的数据(必须是已经进入成功了)) */


        setLastIntoRoomData(data) {
          var uid = this.__User.getUserMid();

          if (uid == null) {
            return;
          }

          var realData = (_crd && Encrypt === void 0 ? (_reportPossibleCrUseOfEncrypt({
            error: Error()
          }), Encrypt) : Encrypt).JsonEncode2(data);
          var key = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).string_format((_crd && StoreKey === void 0 ? (_reportPossibleCrUseOfStoreKey({
            error: Error()
          }), StoreKey) : StoreKey).USER_INTO_GAME_RECORD, uid);
          (_crd && LocalStorage === void 0 ? (_reportPossibleCrUseOfLocalStorage({
            error: Error()
          }), LocalStorage) : LocalStorage).set(key, realData);
        }
        /** 获取上次进入房间的数据(必须是已经进入成功了)) */


        getLastIntoRoomData() {
          var uid = this.__User.getUserMid();

          if (uid == null) {
            return null;
          }

          var key = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).string_format((_crd && StoreKey === void 0 ? (_reportPossibleCrUseOfStoreKey({
            error: Error()
          }), StoreKey) : StoreKey).USER_INTO_GAME_RECORD, uid);
          var data = (_crd && LocalStorage === void 0 ? (_reportPossibleCrUseOfLocalStorage({
            error: Error()
          }), LocalStorage) : LocalStorage).get(key, null);
          var lastLoginInfo = (_crd && Encrypt === void 0 ? (_reportPossibleCrUseOfEncrypt({
            error: Error()
          }), Encrypt) : Encrypt).JsonDecode(data);
          return lastLoginInfo;
        }
        /** 更新游戏配置 */


        updateServerGameConfig(body) {
          if (!body) {
            return;
          } //单个游戏的配置


          var oneGameConf = ["desc", //游戏下载描述
          "name", //游戏名称
          "id", //唯一ID
          "game_pkg", //包名
          "display", //显示位置(0为大厅 1为更多游戏  2为固定游戏位 3为推荐游戏)
          "has_free", "hash", "icon", //游戏图标
          "icon_more", "iconcomming", //游戏图标(黑白)
          "isCartoon", //是否显示icon动画；1：显示；0：不显示
          "isMatch", //是否有比赛
          "isPrivate", //是否有私人房
          "isnew", //是否新游戏（0为否 1为是）
          "play_model_labels", //游戏玩法
          "pushdate", "size", "url", "version"]; //游戏玩法

          var play_model_labels = ["pushdate", "size", "url", "version", "gpm" //场次
          ]; //场次

          var gpm = ["sort", "gpid", //也是leaveID
          "icon", "label"];
          var tmpServerGameConfig = [];

          for (var index = 0; index < body.length; index++) {
            var game = body[index];

            if (game) {
              var newGameConf = this.mergeArray(oneGameConf, game);

              if (newGameConf) {
                if (newGameConf["play_model_labels"]) {
                  newGameConf["play_model_labels"] = this.mergeArray(play_model_labels, newGameConf["play_model_labels"]);

                  if (newGameConf["play_model_labels"]["gpm"]) {
                    var gpmArray = [];

                    for (var _index = 0; _index < newGameConf["play_model_labels"]["gpm"].length; _index++) {
                      var _gpmValue = newGameConf["play_model_labels"]["gpm"][_index];

                      if (_gpmValue) {
                        var gpmValue = this.mergeArray(gpm, _gpmValue);

                        if (gpmValue) {
                          gpmArray.push(gpmValue);
                        }
                      }
                    }

                    newGameConf["play_model_labels"]["gpm"] = gpmArray;
                  }
                }

                tmpServerGameConfig.push(newGameConf);
              }
            }
          }

          this._serverGameConfig = tmpServerGameConfig;
          this.setLocalSaveGameConfig();
          (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).dump(this._serverGameConfig);
          return this._serverGameConfig;
        }
        /**
         * 本地存储大厅游戏配置
         * @returns 
         */


        setLocalSaveGameConfig() {
          console.log("大厅游戏配置返回:设置本地", this._serverGameConfig);
          (_crd && LocalStorage === void 0 ? (_reportPossibleCrUseOfLocalStorage({
            error: Error()
          }), LocalStorage) : LocalStorage).set((_crd && StoreKey === void 0 ? (_reportPossibleCrUseOfStoreKey({
            error: Error()
          }), StoreKey) : StoreKey).HALL_GAME_CONF, this._serverGameConfig);
          return true;
        } //更新游戏实时在线人数


        updateServerGamePersonOnline(body) {
          if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).isNull(body)) {
            return;
          }

          this._serverGamePersonOnline = body;
        }
        /**
         * 更新服务端配置的游戏场次标签信息
         * @param gameID 游戏ID
         * @param body 
         * @param isReset 是否重置缓存
         * @returns 
         */


        updateServerGameLevelTabList(gameID, body, isReset) {
          if (isReset === void 0) {
            isReset = false;
          }

          if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).isNull(gameID) || (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).isNull(body)) {
            return;
          }

          if (!this._serverGameLevelTabList[gameID]) {
            this._serverGameLevelTabList[gameID] = [];
          } //级别


          var levels = ["data", //房间数据 参照 roomData
          "img_off", "img_on", "tab_desc", "tab_id", //标签id（唯一）
          "tab_name", "tab_sort"]; //级别内的房间

          var roomData = ["anti_cheating", "base_chip", //底注
          "base_chip_type", //底注类型 0银币，1金条
          "canExit", //是否一局可退
          "defense_cfg", //防作弊时间段配置
          "desc", //比赛场描述
          "descend_seconds", //配桌等待的时间
          "descend_switch", //配桌降场开关', 0关， 1开
          "exchangedrop", //兑换任务描述
          "extra_info", "icon", //场次图片
          "is_silver", "is_team", "is_zuan", //是否为钻石房
          "level", //房间级别
          "levelname", //房间名称
          "lowest_version", "match", //是否为比赛场 1:是 0:否
          "max_money", //银币上限
          "min_money", //银币下限
          "play_mode", //玩法 0标准玩法，>=1 其他玩法
          "require_chips_continue", //退场下限(比银币下限低)
          "high_limit_exit", //退场上限(比银币上限高)
          "sort", //位置排序
          "times", "broken_stat_in" //是否需要检查破产 0要  1 不要
          ]; //单个游戏的tab

          var gameLevelTab = [];

          for (var index = 0; index < body.length; index++) {
            var _level = body[index];
            _level = this.mergeArray(levels, _level);

            if (_level) {
              var roomDataArray = {};

              if (_level["data"]) {
                for (var leaveID in _level["data"]) {
                  if (Object.prototype.hasOwnProperty.call(_level["data"], leaveID)) {
                    var _roomData = _level["data"][leaveID];
                    _roomData = this.mergeArray(roomData, _roomData);

                    if (_roomData) {
                      //此处做一些处理
                      _roomData["max_money"] = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                        error: Error()
                      }), Utils) : Utils).number_valueOf(_roomData["max_money"]);
                      _roomData["min_money"] = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                        error: Error()
                      }), Utils) : Utils).number_valueOf(_roomData["min_money"]);
                      _roomData["require_chips_continue"] = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                        error: Error()
                      }), Utils) : Utils).number_valueOf(_roomData["require_chips_continue"]);

                      if (_roomData["require_chips_continue"] < 0) {
                        _roomData["require_chips_continue"] = _roomData["min_money"];
                      }

                      _roomData["high_limit_exit"] = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                        error: Error()
                      }), Utils) : Utils).number_valueOf(_roomData["high_limit_exit"]);

                      if (_roomData["high_limit_exit"] < 0) {
                        _roomData["high_limit_exit"] = _roomData["max_money"];
                      }

                      _roomData["level"] = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                        error: Error()
                      }), Utils) : Utils).number_valueOf(_roomData["level"], null);
                      _roomData["sort"] = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                        error: Error()
                      }), Utils) : Utils).number_valueOf(_roomData["sort"]);
                      _roomData["broken_stat_in"] = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                        error: Error()
                      }), Utils) : Utils).number_valueOf(_roomData["broken_stat_in"]);
                      roomDataArray[leaveID] = _roomData;
                    }
                  }
                }
              }

              _level["data"] = roomDataArray;
              gameLevelTab.push(_level);
            }
          }

          if (isReset) {
            this._serverGameLevelTabList[gameID] = gameLevelTab;
          } else {
            if (gameLevelTab.length > 0) {
              if (this._serverGameLevelTabList[gameID].length == 0) {
                this._serverGameLevelTabList[gameID] = gameLevelTab;
              } else {
                for (var _index2 = 0; _index2 < gameLevelTab.length; _index2++) {
                  var onLevelTab = gameLevelTab[_index2];

                  if (onLevelTab["tab_id"] != null) {
                    var isFind = false;

                    for (var i = 0; i < this._serverGameLevelTabList[gameID].length; i++) {
                      var oldOneLevelTab = this._serverGameLevelTabList[gameID][i];

                      if (onLevelTab["tab_id"] == oldOneLevelTab["tab_id"]) {
                        this._serverGameLevelTabList[gameID][i] = gameLevelTab[_index2];
                        isFind = true;
                      }
                    }

                    if (isFind == false) {
                      this._serverGameLevelTabList[gameID].push(gameLevelTab[_index2]);
                    }
                  }
                }
              }
            }
          }

          return this._serverGameLevelTabList[gameID];
        }
        /**
         * 更新场次中的人数
         * @param gameID 
         */


        updateServerGameLevelPeson(gameID, body) {
          if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).isNull(gameID)) {
            return;
          }

          this._serverGameLevelPersonList[gameID] = body;
          return this._serverGameLevelPersonList[gameID];
        }
        /** 初始化游戏配置 */


        initHallGameConfigByLocal() {
          this.getServerGameConfig();
        }
        /**获取游戏配置 */


        getServerGameConfig() {
          var key = (_crd && StoreKey === void 0 ? (_reportPossibleCrUseOfStoreKey({
            error: Error()
          }), StoreKey) : StoreKey).HALL_GAME_CONF;

          if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).table_isEmpty(this._serverGameConfig)) {
            var obj = (_crd && LocalStorage === void 0 ? (_reportPossibleCrUseOfLocalStorage({
              error: Error()
            }), LocalStorage) : LocalStorage).get(key);
            this._serverGameConfig = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).table_verify(obj);
          }

          if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).table_isEmpty(this._serverGameConfig)) {
            this._serverGameConfig = [];
          }

          return this._serverGameConfig;
        }
        /**获取游戏在线人数配置 */


        getServerGamePersonOnline() {
          return this._serverGamePersonOnline;
        }
        /**
         * 根据游戏ID获取游戏的场次级别房间信息
         * @param gameID 
         * @returns 
         */


        getServerGameLevelTabListByGameID(gameID) {
          if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).isNull(gameID)) {
            return null;
          }

          if (this._serverGameLevelTabList[gameID]) {
            return this._serverGameLevelTabList[gameID];
          }

          return null;
        }
        /**
         * 根据游戏ID获取游戏场次内所有房间的人数集合
         * @param gameID 
         */


        getServerGameLevelPersonListByGameID(gameID) {
          if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).isNull(gameID)) {
            return null;
          }

          if (this._serverGameLevelPersonList[gameID]) {
            return this._serverGameLevelPersonList[gameID];
          }

          return null;
        }
        /**
         * 获取游戏的单个房间人数
         * @param gameID 游戏id
         * @param leaveID 场次ID
         */


        getServerGameLevelRoomPersonNum(gameID, leaveID) {
          if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).isNull(gameID) || (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).isNull(leaveID)) {
            return null;
          }

          if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).number_valueOf(leaveID, null) == null) {
            return null;
          }

          var leavePersonArray = this.getServerGameLevelPersonListByGameID(gameID);

          if (leavePersonArray && leavePersonArray[leaveID]) {
            return leavePersonArray[leaveID];
          }

          return null;
        }
        /**
         * 根据游戏ID获取游戏配置
         * @param gameID 
         * @returns 
         */


        getGameConfigByGameID(gameID) {
          if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).isNull(gameID)) {
            return null;
          }

          for (var index = 0; index < this._serverGameConfig.length; index++) {
            var game = this._serverGameConfig[index];

            if (game && game["id"] == gameID) {
              return game;
            }
          }

          return null;
        }
        /**
         * 根据游戏ID获取游戏版本
         * @param gameID 
         * @returns 
         */


        getGameVersionByGameID(gameID) {
          if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).isNull(gameID)) {
            return null;
          }

          var game = this.getGameConfigByGameID(gameID);

          if (game) {
            return game["version"];
          }

          return null;
        }
        /**
         * 根据游戏ID获取大厅配置里面的游戏玩法列表
         * @param gameID 
         * @returns 
         */


        getGameConfigLevelListByGameID(gameID) {
          if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).isNull(gameID)) {
            return null;
          }

          var game = this.getGameConfigByGameID(gameID);

          if (game && game["play_model_labels"]) {
            if (game["play_model_labels"]["gpm"]) {
              return game["play_model_labels"]["gpm"];
            }
          }

          return null;
        }
        /**
         * 根据游戏ID获取游戏玩法列表
         * @param gameID 
         * @returns 
         */


        getGameLevelListByGameID(gameID) {
          if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).isNull(gameID)) {
            return null;
          }

          var levelTab = this.getServerGameLevelTabListByGameID(gameID);

          if (levelTab && levelTab["data"]) {
            return levelTab["data"];
          }

          return null;
        }
        /**
         * 根据游戏ID、游戏玩法 获取具体玩法
         * @param gameID 
         * @param leaveID 
         * @returns 
         */


        getGameLevelRule(gameID, leaveID) {
          if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).isNull(gameID) || (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).isNull(leaveID)) {
            return null;
          }

          var playModelList = this.getGameConfigLevelListByGameID(gameID);

          if (playModelList && playModelList.length > 0) {
            for (var index = 0; index < playModelList.length; index++) {
              var gpm = playModelList[index];

              if (gpm["gpid"] == leaveID) {
                return gpm;
              }
            }
          }

          return null;
        }
        /**
         * 根据游戏ID、场次id 获取场次内的所有信息
         * @param gameID 
         * @param levelTabID 不传则获取该游戏的所有场次
         * @returns 
         */


        getGameLevelTabInfo(gameID, levelTabID) {
          if (levelTabID === void 0) {
            levelTabID = null;
          }

          if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).isNull(gameID)) {
            return null;
          }

          var levelTabList = this.getServerGameLevelTabListByGameID(gameID);

          if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).isNull(levelTabID)) {
            return levelTabList;
          }

          if (levelTabList) {
            for (var index = 0; index < levelTabList.length; index++) {
              var leaveRoom = levelTabList[index];

              if (leaveRoom["tab_id"] == levelTabID) {
                return leaveRoom;
              }
            }
          }

          return null;
        }
        /**
         * 根据游戏ID 获取游戏内所有房间
         * @param gameID 
         */


        getGameLevelRoomListAll(gameID) {
          if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).isNull(gameID)) {
            return null;
          }

          var levelTabList = this.getServerGameLevelTabListByGameID(gameID);

          if (levelTabList) {
            var roomListArray = [];

            for (var index = 0; index < levelTabList.length; index++) {
              var oneLevelTab = levelTabList[index];

              if (oneLevelTab && oneLevelTab["data"]) {
                for (var levelID in oneLevelTab["data"]) {
                  if (Object.prototype.hasOwnProperty.call(oneLevelTab["data"], levelID)) {
                    var roomData = oneLevelTab["data"][levelID];

                    if (roomData != null) {
                      roomListArray.push(roomData);
                    }
                  }
                }
              }
            }

            return roomListArray;
          }

          return null;
        }
        /**
         * 根据游戏ID、场次标签id 获取场次内排序后的房间列表
         * @param gameID 游戏ID
         * @param levelTabID 场次标签id
         * @returns 
         */


        getGameLevelRoomSortList(gameID, levelTabID) {
          if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).isNull(gameID) || (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).isNull(levelTabID)) {
            return null;
          }

          var leaveTabData = this.getGameLevelTabInfo(gameID, levelTabID);

          if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).isNull(leaveTabData)) {
            return null;
          }

          var map = new Map();

          for (var _levelID in leaveTabData["data"]) {
            if (Object.prototype.hasOwnProperty.call(leaveTabData["data"], _levelID)) {
              var roomData = leaveTabData["data"][_levelID];

              if (roomData) {
                roomData["sort"] = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                  error: Error()
                }), Utils) : Utils).number_valueOf(roomData["sort"]);
                map.set(_levelID, roomData);
              }
            }
          }

          if (map.size > 0) {
            var resultArray = [];
            var arrayLike = Array.from(map); //得到的array中索引0为map中的key,索引1为map中的value

            arrayLike.sort(function (a, b) {
              return a[1]["sort"] - b[1]["sort"];
            });

            for (var index = 0; index < arrayLike.length; index++) {
              resultArray.push(arrayLike[index][1]);
            }

            return resultArray;
          } else {
            return null;
          }
        }
        /**
         * 场次是否存在
         * @param gameID 
         * @param levelTabID 场次标签id
         */


        isLevelExist(gameID, levelTabID) {
          var roomList = this.getGameLevelRoomSortList(gameID, levelTabID);

          if (roomList) {
            return true;
          }

          return false;
        }
        /**
         * 根据游戏ID、场次级别获取最小银币房间
         * @param gameID 
         * @param levelTabID 场次标签id 不传则获取当前游戏所有房间的最小银币值
         * @returns 
         */


        getGameLevelRoomMinMoney(gameID, levelTabID) {
          if (levelTabID === void 0) {
            levelTabID = null;
          }

          if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).isNull(gameID)) {
            return null;
          }

          levelTabID = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).number_valueOf(levelTabID, null);
          var roomList;

          if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).isNotNull(levelTabID)) {
            roomList = this.getGameLevelRoomSortList(gameID, levelTabID);
          } else {
            roomList = this.getGameLevelRoomListAll(gameID);
          }

          if (roomList && roomList.length > 0) {
            var index = 0;
            var minMoney = roomList[index]["min_money"];

            for (var i = 0; i < roomList.length; i++) {
              var roomData = roomList[i];

              if (roomData["min_money"] < minMoney) {
                minMoney = roomData["min_money"];
                index = i;
              }
            }

            return roomList[index];
          }

          return null;
        }
        /**
         * 根据游戏ID、场次级别获取最小银币房间
         * @param gameID 
         * @param levelTabID 场次标签id 
         * @param levelID 场次id
         * @returns 
         */


        getGameLevelRoomCanEnter(gameID, levelTabID, levelID) {
          if (levelTabID === void 0) {
            levelTabID = null;
          }

          if (levelID === void 0) {
            levelID = null;
          }

          if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).isNull(gameID)) {
            return null;
          }

          levelTabID = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).number_valueOf(levelTabID, null);
          var roomList;

          if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).isNotNull(levelTabID)) {
            roomList = this.getGameLevelRoomSortList(gameID, levelTabID);
          } else {
            roomList = this.getGameLevelRoomListAll(gameID);
          }

          if (roomList && roomList.length > 0) {
            if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).isNotNull(levelID)) {
              // 先找满足的场次id能不能进
              for (var i = roomList.length - 1; i >= 0; i--) {
                var roomData = roomList[i];
                var level = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                  error: Error()
                }), Utils) : Utils).number_valueOf(roomData.level, null);

                var userMoney = this.__User.getUserMoneyByID(roomData.base_chip_type);

                if (levelID == level && roomData.min_money <= userMoney && userMoney <= roomData.max_money) {
                  return roomData;
                }
              } // 再找可以进的场次


              for (var _i = roomList.length - 1; _i >= 0; _i--) {
                var _roomData2 = roomList[_i];

                var _userMoney = this.__User.getUserMoneyByID(_roomData2.base_chip_type);

                if (_roomData2.min_money <= _userMoney && _userMoney <= _roomData2.max_money) {
                  return _roomData2;
                }
              } // 找不到返回第一个场次（至少有一个不破产能进去的场次）


              return roomList[0];
            } else {
              // 再找可以进的场次
              for (var _i2 = roomList.length - 1; _i2 >= 0; _i2--) {
                var _roomData3 = roomList[_i2];

                var _userMoney2 = this.__User.getUserMoneyByID(_roomData3.base_chip_type);

                if (_roomData3.min_money <= _userMoney2 && _userMoney2 <= _roomData3.max_money) {
                  return _roomData3;
                }
              } // 找不到返回第一个场次（至少有一个不破产能进去的场次）


              return roomList[0];
            }
          }

          return null;
        }
        /**
         * 根据游戏ID、房间Level 获取房间信息
         * @param gameID 
         * @param roomLevel 
         */


        getGameRoomInfoByRoomLevelID(gameID, roomLevel) {
          roomLevel = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).number_valueOf(roomLevel, null);

          if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).isNull(gameID) || (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).isNull(roomLevel)) {
            return null;
          }

          var levelTabList = this.getServerGameLevelTabListByGameID(gameID);

          if (levelTabList) {
            for (var index = 0; index < levelTabList.length; index++) {
              var oneLevelTab = levelTabList[index];

              if (oneLevelTab && oneLevelTab["data"]) {
                if (oneLevelTab["data"][roomLevel] != null) {
                  return oneLevelTab["data"][roomLevel];
                }
              }
            }
          }

          return null;
        }
        /**
         * 根据游戏ID获取在线人数
         * @param gameID 
         * @returns 
         */


        getGamePersonOnlineByGameID(gameID) {
          if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).isNull(gameID)) {
            return null;
          }

          return this._serverGamePersonOnline[gameID];
        } //设置降场数据


        setDegradeInfo(data) {
          this._degradeRoomInfo = data;
        } //获取降场数据


        getDegradeInfo() {
          return this._degradeRoomInfo;
        } //设置升场数据


        setRoomUpLevelInfo(data) {
          this._upLevelRoomInfo = data;
        } //获取升场数据


        getRoomUpLevelInfo() {
          return this._upLevelRoomInfo;
        }
        /**
         * 根据名字来取对应的level属性的方法不需要一个属性对应一个接口
         * @param gameID 
         * @param levelID 
         * @param propName =
         * -- "min_money"          --进入房间的下限  没拿到返回null
         * -- "max_money"          --进入房间的上限  没拿到返回null
         * -- "exitMinMoney"       --退出房间的下限  没拿到返回null
         * -- "exitMaxMoney"       --退出房间的上限  没拿到返回null
         * -- "readyDegradeSwitch" --配桌降场开关,返回true和false,没拿到返回false
         * -- "readyDegradeTime"   --配桌降场等待的时间，没拿到返回null
         * -- "base_chip"           --底注 没拿到返回0
         * -- "broken_stat_in"     --1:不检查破产，0：检查破产
         * -- "levelname"          --场次名称
         */


        getPropByLevelPropName(gameID, levelID, propName) {
          var roominfo = this.getGameRoomInfoByRoomLevelID(gameID, levelID);

          if (!roominfo) {
            return null;
          }

          if (propName == "broken_stat_in") {
            if (levelID == 0) {
              //快速开始时的破产状态。
              return roominfo["broken_stat_in"] == 0;
            } else {
              return roominfo["broken_stat_in"] == 0;
            }
          }

          if (propName == "min_money") {
            return (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).number_valueOf(roominfo["min_money"]);
          }

          if (propName == "max_money") {
            return (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).number_valueOf(roominfo["max_money"]);
          }

          if (propName == "levelname") {
            return roominfo["levelname"] || "";
          }

          if (propName == "base_chip") {
            return (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).number_valueOf(roominfo["base_chip"]);
          }

          if (propName == "base_chip_type") {
            return (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).number_valueOf(roominfo["base_chip_type"]);
          }

          return null;
        }
        /** 获取进入游戏房间的数据 */


        getIntoRoomData() {
          return this.intoGameData;
        } //即将请求进入房间


        willEnterGame(gameID, roomLevel) {
          if (gameID === void 0) {
            gameID = null;
          }

          if (roomLevel === void 0) {
            roomLevel = null;
          }

          if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).isNull(gameID)) {
            return;
          }

          gameID = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).number_valueOf(gameID, 0);

          if (gameID <= 0) {
            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
              error: Error()
            }), AppEvent) : AppEvent).SYS_TOAST_TIP, {
              content: (_crd && GameTxt === void 0 ? (_reportPossibleCrUseOfGameTxt({
                error: Error()
              }), GameTxt) : GameTxt).hall_goto_game_no_gameid
            });
            return;
          }

          roomLevel = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).number_valueOf(roomLevel, 0); //是否延迟

          var isDelay = false;

          if (roomLevel == 0) {
            //快速开始
            var roomList = this.getGameLevelRoomListAll(gameID);

            if (!roomList || roomList.length <= 0) {
              this.print("Error\uFF1A\u8BF7\u6C42\u8FDB\u5165\u623F\u95F4=>\u5FEB\u901F\u5F00\u59CB\uFF0C\u83B7\u53D6\u5230\u7684\u623F\u95F4\u5217\u8868\u4E3A\u7A7A \u6B64\u65F6\u91CD\u65B0\u8BF7\u6C42 " + gameID + " \u623F\u95F4\u6570\u636E\u4FE1\u606F");
              (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
                error: Error()
              }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
                error: Error()
              }), AppEvent) : AppEvent).SYS_TOAST_TIP, {
                content: (_crd && GameTxt === void 0 ? (_reportPossibleCrUseOfGameTxt({
                  error: Error()
                }), GameTxt) : GameTxt).hall_goto_game_no_levelList
              });
              (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
                error: Error()
              }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
                error: Error()
              }), AppEvent) : AppEvent).NET_REQ_GAME_LEVEL_ROOM_TAB, gameID);
              return;
            }

            isDelay = true;
          } else {
            //正常点击进入房间
            var _roomList = this.getGameRoomInfoByRoomLevelID(gameID, roomLevel);

            if (!_roomList || _roomList.length <= 0) {
              this.print("Error\uFF1A\u8BF7\u6C42\u8FDB\u5165\u623F\u95F4=>\u6B63\u5E38\u70B9\u51FB\uFF0C\u83B7\u53D6\u5230\u7684\u623F\u95F4\u5217\u8868\u4E3A\u7A7A \u6B64\u65F6\u91CD\u65B0\u8BF7\u6C42 " + gameID + " \u623F\u95F4\u6570\u636E\u4FE1\u606F");
              (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
                error: Error()
              }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
                error: Error()
              }), AppEvent) : AppEvent).SYS_TOAST_TIP, {
                content: (_crd && GameTxt === void 0 ? (_reportPossibleCrUseOfGameTxt({
                  error: Error()
                }), GameTxt) : GameTxt).hall_goto_game_no_levelList
              });
              (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
                error: Error()
              }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
                error: Error()
              }), AppEvent) : AppEvent).NET_REQ_GAME_LEVEL_ROOM_TAB, gameID);
              return;
            }
          } //设置缓存数据


          var body = {
            GameID: gameID,
            Level: roomLevel,
            TableID: 0,
            isReconn: false
          };
          this.intoGameData = body; //加载游戏场景

          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).GAME_GOTO_SHOW); // //显示网络loading
          // EventManager.dispatch(AppEvent.SYS_SHOW_NETLOADING)
        }
        /**
         * 检查快速开始
         * @param gameId = 游戏Id
         * @param tabId = 标签Id
         */


        checkQuickGame(gameId, tabId) {
          if (tabId === void 0) {
            tabId = null;
          }

          this.print("checkQuickGame", gameId, tabId);

          if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).isNull(gameId)) {
            return;
          }

          if (this.getGameConfigByGameID(gameId) == null) {
            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
              error: Error()
            }), AppEvent) : AppEvent).SYS_TOAST_TIP, {
              content: (_crd && GameTxt === void 0 ? (_reportPossibleCrUseOfGameTxt({
                error: Error()
              }), GameTxt) : GameTxt).hall_game_not_have
            });
            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
              error: Error()
            }), AppEvent) : AppEvent).NET_REQ_HALL_GAME_CONFIG);
            return;
          }

          var allRoomList = this.getGameLevelRoomListAll(gameId);
          (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).dump(allRoomList);

          if (allRoomList == null || allRoomList.length == 0) {
            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
              error: Error()
            }), AppEvent) : AppEvent).SYS_TOAST_TIP, {
              content: (_crd && GameTxt === void 0 ? (_reportPossibleCrUseOfGameTxt({
                error: Error()
              }), GameTxt) : GameTxt).hall_goto_game_no_levelList
            });
            return;
          }

          var gameTabId = null;
          var gameLevelId = null;
          var data = this.getLastIntoRoomData();
          this.print("checkQuickGame", "data", data);

          if (data && data.gameId && data.gameId == gameId) {
            if (tabId && tabId == data.playMode) {
              gameTabId = data.playMode;
              gameLevelId = data.level;
            } else {
              gameTabId = tabId;
              gameLevelId = null;
            }
          } //获取破产线


          var brokeLevel = this.__User.BankrupData.getBankruptLowestMoney(); //获取最低银币的房间 minRoomData['min_money'] 


          var minRoomData = this.getGameLevelRoomCanEnter(gameId, gameTabId, gameLevelId);

          if (minRoomData) {
            var max = minRoomData.max_money;
            var min = minRoomData.min_money; //当前用户资产

            var moneyId = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).number_valueOf(minRoomData.base_chip_type);

            var userGold = this.__User.getUserMoneyByID(moneyId); //是否有可领取破产次数


            var isBankruptRewardBol = this.__User.BankrupData.isBankruptRewardRemain(); //破产


            if (userGold < brokeLevel) {
              //且有可以领取的次数请求破产弹窗
              if (isBankruptRewardBol) {
                console.log('破产了且有破产补助次数');
                (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
                  error: Error()
                }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
                  error: Error()
                }), AppEvent) : AppEvent).NET_REQ_BANKRUPT_GIFT_CONF, gameId, minRoomData['level']);
                (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
                  error: Error()
                }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
                  error: Error()
                }), AppEvent) : AppEvent).VIEW_UI_OPEN, (_crd && UIID === void 0 ? (_reportPossibleCrUseOfUIID({
                  error: Error()
                }), UIID) : UIID).BankupGift);
                return;
              } else {
                console.log('破产了但是没有破产补助次数了');
              }
            } //推荐入房


            if (max == -1) {
              //推荐
              if (userGold < min) {
                // 当前资产小于高级场的最小限制
                (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
                  error: Error()
                }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
                  error: Error()
                }), AppEvent) : AppEvent).RECOMMEND_POP_SET_NO_TIP, (_crd && GameTxt === void 0 ? (_reportPossibleCrUseOfGameTxt({
                  error: Error()
                }), GameTxt) : GameTxt).hall_goto_game_money_not_enough);
                (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
                  error: Error()
                }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
                  error: Error()
                }), AppEvent) : AppEvent).RECOMMEND_POP_GET, (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
                  error: Error()
                }), GConstants) : GConstants).PopupPos.POS_INTO_ROOM);
                return;
              }
            } else {
              //推荐
              if (userGold > max || userGold < min) {
                if (userGold > max) {
                  (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
                    error: Error()
                  }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
                    error: Error()
                  }), AppEvent) : AppEvent).RECOMMEND_POP_SET_NO_TIP, (_crd && GameTxt === void 0 ? (_reportPossibleCrUseOfGameTxt({
                    error: Error()
                  }), GameTxt) : GameTxt).hall_goto_game_too_money);
                }

                if (userGold < min) {
                  (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
                    error: Error()
                  }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
                    error: Error()
                  }), AppEvent) : AppEvent).RECOMMEND_POP_SET_NO_TIP, (_crd && GameTxt === void 0 ? (_reportPossibleCrUseOfGameTxt({
                    error: Error()
                  }), GameTxt) : GameTxt).hall_goto_game_money_not_enough);
                }

                (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
                  error: Error()
                }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
                  error: Error()
                }), AppEvent) : AppEvent).RECOMMEND_POP_GET, (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
                  error: Error()
                }), GConstants) : GConstants).PopupPos.POS_INTO_ROOM);
                return;
              }
            } //进入房间


            var level = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).number_valueOf(minRoomData["level"]);
            var playMode = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).number_valueOf(minRoomData["play_mode"]);
            var lastIntoRoomData = {
              gameId: gameId,
              playMode: playMode,
              level: level
            };
            this.setLastIntoRoomData(lastIntoRoomData);
            this.willEnterGame(gameId, level);
          } else {
            console.warn("进入房间失败,未找到房间", minRoomData); //进入房间失败,未找到房间

            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
              error: Error()
            }), AppEvent) : AppEvent).SYS_TOAST_TIP, {
              content: (_crd && GameTxt === void 0 ? (_reportPossibleCrUseOfGameTxt({
                error: Error()
              }), GameTxt) : GameTxt).hall_goto_game_no_levelList
            });
          }
        }
        /** 检查进入房间 */


        checkIntoRoom(gameId, roomData) {
          if (roomData === void 0) {
            roomData = null;
          }

          this.print("checkIntoRoom", roomData);
          var level = roomData.level;
          var min = roomData.min_money;
          var playMode = roomData.play_mode;
          var max = roomData.max_money;
          var moneyId = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).number_valueOf(roomData.base_chip_type);

          var userGold = this.__User.getUserMoneyByID(moneyId); //获取破产线


          var brokeLevel = this.__User.BankrupData.getBankruptLowestMoney();

          if (max == -1) {
            //一锅场、高级场，无上限
            // 是否还有破产次数可以领
            var isBankruptRewardBol = this.__User.BankrupData.isBankruptRewardRemain();

            if (userGold < brokeLevel) {
              if (isBankruptRewardBol) {
                console.log('破产了且有破产补助次数');
                (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
                  error: Error()
                }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
                  error: Error()
                }), AppEvent) : AppEvent).NET_REQ_BANKRUPT_GIFT_CONF, gameId, level);
                (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
                  error: Error()
                }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
                  error: Error()
                }), AppEvent) : AppEvent).VIEW_UI_OPEN, (_crd && UIID === void 0 ? (_reportPossibleCrUseOfUIID({
                  error: Error()
                }), UIID) : UIID).BankupGift);
                return;
              } else {
                console.log('破产了但是没有破产补助次数了');
              }
            } //推荐


            if (userGold < min) {
              // 当前资产小于高级场的最小限制
              (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
                error: Error()
              }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
                error: Error()
              }), AppEvent) : AppEvent).RECOMMEND_POP_SET_NO_TIP, (_crd && GameTxt === void 0 ? (_reportPossibleCrUseOfGameTxt({
                error: Error()
              }), GameTxt) : GameTxt).hall_goto_game_money_not_enough);
              (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
                error: Error()
              }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
                error: Error()
              }), AppEvent) : AppEvent).RECOMMEND_POP_GET, (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
                error: Error()
              }), GConstants) : GConstants).PopupPos.POS_INTO_ROOM);
              return;
            } //入房


            var lastIntoRoomData = {
              gameId: gameId,
              playMode: playMode,
              level: level
            };
            this.setLastIntoRoomData(lastIntoRoomData);
            this.willEnterGame(gameId, level);
          } else {
            // 其他场次
            var getBankruptRewardBol = this.__User.BankrupData.isBankruptRewardRemain(); // 破产且有可领取的次数


            if (userGold < brokeLevel) {
              console.log('破产了');

              if (getBankruptRewardBol) {
                console.log("破产且有可以领取的破产次数");
                (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
                  error: Error()
                }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
                  error: Error()
                }), AppEvent) : AppEvent).NET_REQ_BANKRUPT_GIFT_CONF, gameId, level);
                (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
                  error: Error()
                }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
                  error: Error()
                }), AppEvent) : AppEvent).VIEW_UI_OPEN, (_crd && UIID === void 0 ? (_reportPossibleCrUseOfUIID({
                  error: Error()
                }), UIID) : UIID).BankupGift);
                return;
              } else {
                console.log('破产了但是没有破产补助次数了');
              }
            } //推荐


            if (userGold > max || userGold < min) {
              if (userGold > max) {
                (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
                  error: Error()
                }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
                  error: Error()
                }), AppEvent) : AppEvent).RECOMMEND_POP_SET_NO_TIP, (_crd && GameTxt === void 0 ? (_reportPossibleCrUseOfGameTxt({
                  error: Error()
                }), GameTxt) : GameTxt).hall_goto_game_too_money);
              }

              if (userGold < min) {
                (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
                  error: Error()
                }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
                  error: Error()
                }), AppEvent) : AppEvent).RECOMMEND_POP_SET_NO_TIP, (_crd && GameTxt === void 0 ? (_reportPossibleCrUseOfGameTxt({
                  error: Error()
                }), GameTxt) : GameTxt).hall_goto_game_money_not_enough);
              }

              (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
                error: Error()
              }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
                error: Error()
              }), AppEvent) : AppEvent).RECOMMEND_POP_GET, (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
                error: Error()
              }), GConstants) : GConstants).PopupPos.POS_INTO_ROOM);
              return;
            } //入房


            var _lastIntoRoomData = {
              gameId: gameId,
              playMode: playMode,
              level: level
            };
            this.setLastIntoRoomData(_lastIntoRoomData);
            this.willEnterGame(gameId, level);
          }
        }
        /**
         * 检查快速开始
         * @param gameId = 游戏Id
         * @param tabId = 标签Id
         */


        checkQuickGameData(gameId, tabId) {
          if (tabId === void 0) {
            tabId = null;
          }

          this.print("checkQuickGameData", gameId, tabId);

          if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).isNull(gameId)) {
            return;
          }

          if (this.getGameConfigByGameID(gameId) == null) {
            return;
          }

          var allRoomList = this.getGameLevelRoomListAll(gameId);
          (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).dump(allRoomList);

          if (allRoomList == null || allRoomList.length == 0) {
            return;
          }

          var gameTabId = null;
          var gameLevelId = null;
          var data = this.getLastIntoRoomData();
          this.print("checkQuickGameData", "data", data);

          if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).isNotNull(data) && (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).isNotNull(data.gameId) && data.gameId == gameId) {
            if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).isNotNull(tabId) && tabId == data.playMode) {
              gameTabId = data.playMode;
              gameLevelId = data.level;
            } else {
              gameTabId = tabId;
              gameLevelId = null;
            }
          } //获取最低银币的房间


          var minRoomData = this.getGameLevelRoomCanEnter(gameId, gameTabId, gameLevelId);
          console.log('最低银币进入房间', minRoomData);
          return minRoomData;
        }

        checkQuickGameName(gameId, tabId, levelId) {
          if (tabId === void 0) {
            tabId = null;
          }

          if (levelId === void 0) {
            levelId = null;
          }

          var data = this.getLastIntoRoomData();
          var gameIdShow = null;
          var playModeShow = null;

          if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).isNotNull(data) && (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).isNotNull(data.gameId) && data.gameId > 0 && data.gameId == gameId) {
            gameIdShow = data.gameId;
            playModeShow = data.playMode;
          } else {
            gameIdShow = gameId;
          }

          var gameConfig = this.getGameConfigByGameID(gameIdShow);

          if (gameConfig) {
            var levelData = this.checkQuickGameData(gameIdShow, playModeShow);

            if (levelData) {
              var tabConfig = this.getGameLevelTabInfo(gameIdShow, levelData.play_mode);

              if (tabConfig) {
                this.print("checkQuickGameName tabConfig", tabConfig);
                return tabConfig.tab_name + " " + levelData.levelname;
              } else {
                this.print("checkQuickGameName", "缺少标签配置");
              }
            } else {
              this.print("checkQuickGameName", "缺少场次配置");
            }
          } else {
            this.print("checkQuickGameName", "缺少游戏配置");
          }

          return "";
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d6a4f5c484fcbf09233014974dcd8837ead2dcca.js.map