System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, GConstants, StoreKey, Encrypt, LocalStorage, Utils, BaseCache, RecommendPop, _crd;

  function _reportPossibleCrUseOfGConstants(extras) {
    _reporterNs.report("GConstants", "../config/GameConstant", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStoreKey(extras) {
    _reporterNs.report("StoreKey", "../config/GameConstant", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEncrypt(extras) {
    _reporterNs.report("Encrypt", "../framework/crypto/Encrypto", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLocalStorage(extras) {
    _reporterNs.report("LocalStorage", "../framework/LocalStorage", _context.meta, extras);
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

  _export("RecommendPop", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      GConstants = _unresolved_2.GConstants;
      StoreKey = _unresolved_2.StoreKey;
    }, function (_unresolved_3) {
      Encrypt = _unresolved_3.Encrypt;
    }, function (_unresolved_4) {
      LocalStorage = _unresolved_4.LocalStorage;
    }, function (_unresolved_5) {
      Utils = _unresolved_5.Utils;
    }, function (_unresolved_6) {
      BaseCache = _unresolved_6.BaseCache;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c843asC8WZKIKv6oVAOzUrH", "RecommendPop", undefined);

      _export("RecommendPop", RecommendPop = class RecommendPop extends (_crd && BaseCache === void 0 ? (_reportPossibleCrUseOfBaseCache({
        error: Error()
      }), BaseCache) : BaseCache) {
        /** 用户类 */

        /** 弹窗配置 */

        /** 登录弹总次数置 */

        /** 入场弹窗总次数 */

        /** 弹窗配置版本号 */

        /** 新弹窗弹窗配置（原始数据） */

        /** 弹窗配置版本号 */

        /** 弹窗顺序配置 */
        // /** 弹窗顺序配置（原始数据） */
        // private _popOrderConfig = {};

        /** 弹窗顺序配置版本号 */
        // /** 弹窗限制次数配置 */

        /** 弹窗限制次数配置（原始数据） */
        // /** 弹窗限制次数配置版本号 */
        // private _popNumLimitVersion = -1;

        /** 弹窗每日次数数据 */
        //实例化
        constructor(superClass) {
          super("RecommendPop");
          this.__User = null;
          this._popData = {};
          this._hallPopTime = 0;
          this._gamePopTime = 0;
          this._popVersion = -1;
          this._newPopConfig = {};
          this._newPopVersion = -1;
          this._popOrderData = {};
          this._popOrderVersion = -1;
          this._popNumLimitData = {};
          this._popNumLimitConfig = {};
          this._popDayCountData = {};
          this.__User = superClass;
        }

        // /** 弹窗顺序配置 */
        // get PopOrderData() {
        //     return this._popOrderData;
        // }

        /** 弹窗限制次数配置 */
        get PopNumLimitData() {
          return this._popNumLimitData;
        }
        /** 弹窗配置 */


        get PopData() {
          return this._popData;
        }
        /** 获取进入大厅弹窗配置 */


        getIntoHallPropData() {
          return (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).clone(this._popData[(_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
            error: Error()
          }), GConstants) : GConstants).PopupPos.POS_LOGIN]);
        }
        /** 获取进入游戏弹窗配置 */


        getIntoGamePropData() {
          return (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).clone(this._popData[(_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
            error: Error()
          }), GConstants) : GConstants).PopupPos.POS_INTO_ROOM]);
        }
        /** 获取进入大厅弹窗总次数*/


        getIntoHallPopTime() {
          return this._hallPopTime;
        }
        /** 获取进入游戏弹窗配置 */


        getIntoGamePopTime() {
          return this._gamePopTime;
        }
        /**
         * 更新弹窗配置数据
        */


        updatePopData(body) {
          if (!body) {
            return;
          }

          body["info"] = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).table_verify(body["info"], true);
          this._popData = {};

          for (let key in (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
            error: Error()
          }), GConstants) : GConstants).PopupPos) {
            if (Object.prototype.hasOwnProperty.call((_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
              error: Error()
            }), GConstants) : GConstants).PopupPos, key)) {
              this._popData[(_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
                error: Error()
              }), GConstants) : GConstants).PopupPos[key]] = [];
            }
          } //大厅强弹总次数


          this._hallPopTime = Number(body.sort_max) || 0; //进入游戏强弹总次数

          this._gamePopTime = Number(body.sorttwo_max) || 0;
          let intoHallData = [];
          let intoGameData = [];

          for (let i = 0; i < body["info"].length; i++) {
            let oldData = body["info"][i];
            let sort = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).number_valueOf(oldData["sort"], -1);
            let num = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).number_valueOf(oldData["num"], 0);
            let sorttwo = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).number_valueOf(oldData["sorttwo"], -1);
            let numtwo = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).number_valueOf(oldData["numtwo"], 0); //当且仅当排序(sort)>0 且 次数不为0 有效 次数 -1为不限制
            //登录场景 

            if (sort >= 0 && num != 0) {
              let newData = {
                id: oldData["id"],
                title: oldData["title"],
                toolid: oldData["toolid"],
                sort: sort,
                num: num,
                scene: (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
                  error: Error()
                }), GConstants) : GConstants).PopupPos.POS_LOGIN
              };
              intoHallData.push(newData);
            } //入场场景


            if (sorttwo >= 0 && numtwo != 0) {
              let newData = {
                id: oldData["id"],
                title: oldData["title"],
                toolid: oldData["toolid"],
                sort: sorttwo,
                num: numtwo,
                scene: (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
                  error: Error()
                }), GConstants) : GConstants).PopupPos.POS_INTO_ROOM
              };
              intoGameData.push(newData);
            }
          } //排序：升序


          intoHallData.sort((a, b) => {
            return a["sort"] - b["sort"];
          });
          intoGameData.sort((a, b) => {
            return a["sort"] - b["sort"];
          }); //去重
          //分组

          let recordSortID = {};
          let detailHallData = [];
          let detailGameData = [];

          for (let i = 0; i < intoHallData.length; i++) {
            let index = null;
            let sort = intoHallData[i]["sort"];

            if (recordSortID[sort] == null) {
              detailHallData.push([]);
              index = detailHallData.length - 1;
              recordSortID[sort] = index;
            } else {
              index = recordSortID[sort];
            }

            detailHallData[index].push(intoHallData[i]);
          }

          recordSortID = {};

          for (let i = 0; i < intoGameData.length; i++) {
            let index = null;
            let sort = intoGameData[i]["sort"];
            let toolid = intoGameData[i]["toolid"];

            if (recordSortID[sort] == null) {
              detailGameData.push([]);
              index = detailGameData.length - 1;
              recordSortID[sort] = index;
            } else {
              index = recordSortID[sort];
            }

            detailGameData[index].push(intoGameData[i]);
          }

          this._popData[(_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
            error: Error()
          }), GConstants) : GConstants).PopupPos.POS_LOGIN] = detailHallData;
          this._popData[(_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
            error: Error()
          }), GConstants) : GConstants).PopupPos.POS_INTO_ROOM] = detailGameData;
          this.updateLocalData();
          console.log('弹窗配置数据', this._popData);
        }
        /**
         * 根据弹窗ID 获取弹窗数据
         * @param scene 场景 INTO_HALL/INTO_GAME 
         * @param popID 
         * @returns {id: oldData["id"],title: oldData["title"],toolid: oldData["toolid"],sort: sort,num: num}
         */


        getPopInfoByPopID(scene, popID) {
          popID = Number(popID);

          if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).string_isEmpty(scene) || (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).isNull(popID)) {
            return;
          }

          scene = String(scene);
          let data = this._popData[scene];

          if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).table_isEmpty(data)) {
            return null;
          }

          for (let i = 0; i < data.length; i++) {
            for (let m = 0; m < data[i].length; m++) {
              if (Number(data[i][m]["toolid"]) == popID) {
                return (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                  error: Error()
                }), Utils) : Utils).clone(data[i][m]);
              }
            }
          }

          return null;
        }
        /**
         * 检验弹窗每日限制次数
         * @param info = { popup_id: info["pop_id"], scene_id: popupPos, new_id: index, config_id: info["config_id"] }
         * @returns true:可弹出 false:不可弹出
         */


        checkPopDayCount(info) {
          if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).table_isEmpty(info) == true) {
            return false;
          }

          let scene = String(info["scene"]);
          let date = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).timeToDataArray((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).time());
          let dateKey = `${date["year"]}/${date["month"]}/${date["day"]}`;
          this.print(`检验弹窗每日限制次数===>dataKey=${dateKey} info=`, this._popDayCountData, this._popNumLimitData);

          if (this._popDayCountData["date"] == null || String(this._popDayCountData["date"]) != dateKey) {
            this._popDayCountData = {
              date: dateKey
            };
          } //新配置


          if (info["toolid"] != null) {
            if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).table_isEmpty(this._popDayCountData[scene])) {
              if (info["num"] != 0) {
                return true;
              } else {
                this._popDayCountData[scene] = {};
              }
            }

            let count = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).number_valueOf(this._popDayCountData[scene][String(info["toolid"])]);
            let currowPopNum = Number(info["num"]);

            if (count < currowPopNum || currowPopNum == -1) {
              return true;
            } else {
              return false;
            }
          }

          return false;
        }
        /** 更新弹窗每日弹出次数数据 */


        updatePopDayCountData(info) {
          if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).table_isEmpty(info) == true) {
            return false;
          }

          let scene = String(info["scene"]);
          let id = String(info["toolid"]);

          if (!this._popDayCountData[scene]) {
            this._popDayCountData[scene] = {};
          }

          if (this._popDayCountData[scene][id] == null) {
            this._popDayCountData[scene][id] = 0;
          }

          this._popDayCountData[scene][id] = this._popDayCountData[scene][id] + 1;
          this.updateLocalData();
        }
        /** 解析弹窗限制次数配置 */


        updatePopNumLimitConfig(data, isInit = false) {
          if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).table_isEmpty(data)) {
            return;
          }

          if (isInit == false) {
            this.updateLocalData();
          }

          ;
        }
        /** 减少1次弹窗弹出次数数据 目前仅有限时礼包有用到，详情看recommendmanager判断处 */


        reducePopDayCountData(scene, id) {
          if (scene == null) {
            return;
          }

          if (id == null || this._popDayCountData[scene] == null) {
            return;
          }

          id = String(id);
          this._popDayCountData[scene][id] = this._popDayCountData[scene][id] - 1;
          this.updateLocalData();
        }
        /** 加载本地数据缓存 */


        reloadLocalData() {
          let key = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).string_format((_crd && StoreKey === void 0 ? (_reportPossibleCrUseOfStoreKey({
            error: Error()
          }), StoreKey) : StoreKey).USER_RECOMMEND_POP, this.__User.getUserMid());
          let data = (_crd && LocalStorage === void 0 ? (_reportPossibleCrUseOfLocalStorage({
            error: Error()
          }), LocalStorage) : LocalStorage).get(key, "");

          if (data != "") {
            data = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).table_verify((_crd && Encrypt === void 0 ? (_reportPossibleCrUseOfEncrypt({
              error: Error()
            }), Encrypt) : Encrypt).JsonDecode(data));
          }

          this._popDayCountData = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).table_verify(data.popDayCountData);
        }
        /** 更新本地数据保存 */


        updateLocalData() {
          let body = {
            popConfig: null,
            popNumLimitConfig: this._popNumLimitConfig,
            popDayCountData: this._popDayCountData,
            popAllConfig: this._newPopConfig
          };
          let data = (_crd && Encrypt === void 0 ? (_reportPossibleCrUseOfEncrypt({
            error: Error()
          }), Encrypt) : Encrypt).JsonEncode(body);
          let key = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).string_format((_crd && StoreKey === void 0 ? (_reportPossibleCrUseOfStoreKey({
            error: Error()
          }), StoreKey) : StoreKey).USER_RECOMMEND_POP, this.__User.getUserMid());
          (_crd && LocalStorage === void 0 ? (_reportPossibleCrUseOfLocalStorage({
            error: Error()
          }), LocalStorage) : LocalStorage).set(key, data);
        }
        /** 获取弹窗配置数据的版本 */


        getPopConfigVer() {
          if (isNaN(Number(this._popVersion))) {
            this._popVersion = null;
          }

          return this._popVersion;
        }
        /** 获取弹窗顺序配置数据的版本 */


        getPopOrderConfigVer() {
          if (isNaN(Number(this._popOrderVersion))) {
            this._popOrderVersion = null;
          }

          return this._popOrderVersion;
        } // /** 获取弹窗限制次数的版本 */
        // getPopNumLimitVer(): number | null {
        //     if (isNaN(Number(this._popNumLimitVersion))) {
        //         this._popNumLimitVersion = null;
        //     }
        //     return this._popNumLimitVersion;
        // }

        /** 获取新弹窗配置数据的版本 */


        getPopAllConfigVer() {
          if (isNaN(Number(this._newPopVersion))) {
            this._newPopVersion = null;
          }

          return this._newPopVersion;
        }
        /** 清理版本信息 */


        clearVer() {
          this._popVersion = null; // this._popOrderVersion = null;
          // this._popNumLimitVersion = null;
          // this._newPopVersion = null;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d8cbfeae92adcef8e9cbabdee7ca04f504f162ff.js.map