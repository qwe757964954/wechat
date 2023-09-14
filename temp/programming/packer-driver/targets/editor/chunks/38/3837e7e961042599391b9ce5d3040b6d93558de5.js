System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, GConstants, Utils, BaseCache, Desk, _crd;

  function _reportPossibleCrUseOfGConstants(extras) {
    _reporterNs.report("GConstants", "../config/GameConstant", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUtils(extras) {
    _reporterNs.report("Utils", "../framework/Utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseCache(extras) {
    _reporterNs.report("BaseCache", "../framework/vc/BaseCache", _context.meta, extras);
  }

  _export("Desk", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      GConstants = _unresolved_2.GConstants;
    }, function (_unresolved_3) {
      Utils = _unresolved_3.Utils;
    }, function (_unresolved_4) {
      BaseCache = _unresolved_4.BaseCache;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "aa885SgT8pNzImipsXlQA4g", "Desk", undefined);

      _export("Desk", Desk = class Desk extends (_crd && BaseCache === void 0 ? (_reportPossibleCrUseOfBaseCache({
        error: Error()
      }), BaseCache) : BaseCache) {
        // 比赛类型
        // 一般快速赛
        // 定时赛
        // JJ模式
        // 投注赛
        // 比赛重连
        // 比赛游戏中重连
        //房间信息
        //当前房间id
        // protected _levelID: number = 0;
        // //桌子ID
        // //当前游戏ID
        // protected _gameID: number = 0;
        //当前房间状态
        //房间状态记录(非重复)
        //踢人状态
        //是否可以退出游戏
        //是否检查破产
        //钱币类型
        //玩家列表
        // protected _playerList: Array<Player> = new Array<Player>()
        // //我自己
        // protected _mySelfPlayer: Player = null;
        //准备的时间
        //实例化
        constructor(name = "") {
          super(name);
          this.ROOM_TYPE = {
            NORMAL_ROOM_RECONNECT: 100 + 10,
            //普通房间重连
            ROOM_NORMAL: 100 + 0,
            //普通房间
            PRIVATE_ROOM: 100 + 1,
            //私人房
            PRIVATE_ROOM_RECONNECT: 100 + 2,
            //私人房重连
            PRIVATE_ROOM_STATUS_CHECK: 100 + 3,
            NORMAL_ROOM_FRIEND_INVITE: 100 + 4 //普通房间好友邀请进房间

          };
          this.NORMAL_IMMEDIATE_MATCH = 0;
          this.FIXED_TIME_MATCH = 3;
          this.JJ_MATCH = 7;
          this.BET_MATCH = 8;
          this.MATCH_RECONNECT = 1000 + 1;
          this.MATCH_RECONNECT_INGAME = 1000 + 2;
          this.MATCH_NONE = 1000 + 3;
          this.roomInfo = void 0;
          this._tableID = 0;
          this._roomStates = -1;
          this._roomStatesList = [];
          this._kickUserStatus = 0;
          this.basechiptype = 0;
          this._isCanExitGame = true;
          this._isCheckBankrupt = true;
          this._moneyTypeID = 0;
          this._readyTime = 10;
          this.canExitGame = true;
        }

        //钱币类型
        set MoneyTypeID(state) {
          this._moneyTypeID = state;
        } //获取钱币类型


        get MoneyTypeID() {
          return this._moneyTypeID;
        } //设置踢人状态 （true 被踢出 9001 server升级踢出）


        set KickUserStatus(state) {
          this._kickUserStatus = state;
        } //获取踢人状态


        get KickUserStatus() {
          return this._kickUserStatus;
        } //设置检查破产开关


        set switchCheckBankrupt(state) {
          this._isCheckBankrupt = state;
        } //获取是否检查破产


        get switchCheckBankrupt() {
          return this._isCheckBankrupt;
        }
        /** set 我自己 */
        // set mySelfPlayer(obj: Player) {
        // 	this._mySelfPlayer = obj;
        // 	this._mySelfPlayer.isMySelf = true;
        // }
        // /** get 我自己 */
        // get mySelfPlayer(): Player {
        // 	return this._mySelfPlayer
        // }

        /** set 准备的时间配置 */


        set readyTime(num) {
          this._readyTime = num;
        }
        /** get 准备的时间配置 */


        get readyTime() {
          return this._readyTime || 10;
        }
        /**
         * 登录成功
         * @param param 
         */


        onSaveLoginSuccess(param = null) {}
        /** 更新房间信息 */


        updateRoomInfo(body) {
          this.roomInfo = { ...body
          };
        }
        /** 获取房间信息 */


        getRoomInfo() {
          return this.roomInfo;
        }
        /** 重置玩家列表玩家 */
        // resertPlayer() {
        // 	this._playerList.splice(0, this._playerList.length);
        // 	this._mySelfPlayer = null;
        // }
        // /** 新增一位玩家 */


        insertPlayer(body) {} // /** 根据Mid获取玩家类 */


        getPlayerByMID(mid) {
          return null;
        }
        /**
         * 更新玩家的准备状态
         * @param mid 玩家Mid
         * @param readyNum 0未准备 1已准备
         * @returns 
         */


        updatePlayerOnReady(mid, readyNum = null) {}
        /**
         * 根据Mid获取玩家准备状态
         * @param mid 
         * @returns 
         */


        getPlayerReadyStateByMid(mid) {
          return false;
        } // /** 根据座位号获取玩家类 */


        getPlayerByLocalSeatID(seatid) {
          return null;
        } // /** 根据座位号获取下一位玩家 */


        getNextPlayerBySeatID(seatid) {
          return null;
        } // /** 获取玩家排序后的数组 从小到大获取玩家类 */


        getPlayerSortSeat() {
          return null;
        } // /** 输出所有玩家信息 */


        dumpPlayers() {} // /** 输出所有玩家准备信息 */


        dumpPlayersReadyState() {}
        /** 重置游戏数据 */


        resetGameData() {}
        /**更新房间状态 */


        setRoomStates(state) {
          this._roomStates = state;

          if (this._roomStatesList.length == 0) {
            this._roomStatesList.push(this._roomStates);
          } else {
            if (this._roomStatesList[this._roomStatesList.length - 1] != this._roomStates) {
              this._roomStatesList.push(this._roomStates);
            }

            ;
          }

          ;
        }
        /** 获取房间状态 */


        getRoomStates() {
          return this._roomStates;
        }
        /** 获取上一个房间状态 */


        getLastRoomStates() {
          if (this._roomStatesList.length == 0) {
            return -1;
          }

          return this._roomStatesList[this._roomStatesList.length - 1];
        }
        /** 获取上上一个房间状态 */


        getLastLastRoomStates() {
          if (this._roomStatesList.length < 2) {
            return -1;
          }

          return this._roomStatesList[this._roomStatesList.length - 2];
        }
        /**更新游戏状态 */


        setGameStates(state) {}
        /** 获取游戏状态 */


        getGameStates() {
          return null;
        }
        /** 设置当前房间ID */


        setCurLevelID(levelID) {
          this.roomInfo.levelId = levelID;
        }
        /** 获取当前房间ID */


        getCurLevelID() {
          return this.roomInfo.levelId;
        }
        /** 设置当前桌子ID */


        setCurTableID(tableID) {
          this._tableID = tableID;
        } // /** 获取当前桌子ID */


        getCurTableID() {
          return this._tableID;
        }
        /** 设置当前游戏ID */


        setCurGameID(gameID) {// this.roomInfo.gameId = gameID;
        }
        /** 获取当前游戏ID */


        getCurGameID() {
          return this.roomInfo.gameId;
        }
        /** 是否可以退出房间 */


        set canExitGame(state) {
          if (state == null || state == undefined) {
            state = true;
          }

          this._isCanExitGame = state;
        }
        /** 是否可以退出房间 */


        get canExitGame() {
          return this._isCanExitGame;
        }
        /** 获取货币名称  0:银币，1：金条 2：兑换券 */


        getMoneyNameByID(moneyID) {
          switch (moneyID) {
            case 0:
              return "银币";

            case 1:
              return "金条";

            case 2:
              return "兑换券";

            default:
              return "";
          }
        }
        /** 判断是否是在定局/定时 比赛房间中 */


        isInMatchRoom() {
          let roomLevelId = this.getCurLevelID();

          if (roomLevelId == this.NORMAL_IMMEDIATE_MATCH || roomLevelId == this.FIXED_TIME_MATCH || roomLevelId == this.JJ_MATCH || roomLevelId == this.BET_MATCH || roomLevelId == this.MATCH_RECONNECT || roomLevelId == this.MATCH_RECONNECT_INGAME) {
            return true;
          } else {
            return this.checkIsMatchRoomLevel(roomLevelId);
          }
        }
        /** 判断是否是在私人房间中 */


        isInPrivateRoom() {
          let roomLevelId = this.getCurLevelID();
          return this.checkIsPrivateRoomLevel(roomLevelId);
        }
        /** 判断是不是在私人房积分场 */


        isInJiFenRoom() {
          let roomLevelId = this.getCurLevelID();
          return roomLevelId == (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
            error: Error()
          }), GConstants) : GConstants).GameRoomLevelConf.privateRoomLevel[2];
        }
        /** 是否是比赛房间 */


        checkIsMatchRoomLevel(roomLevel) {
          roomLevel = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).number_valueOf(roomLevel);

          for (let i = 0; i < (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
            error: Error()
          }), GConstants) : GConstants).GameRoomLevelConf.matchRoomLevel.length; i++) {
            if ((_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
              error: Error()
            }), GConstants) : GConstants).GameRoomLevelConf.matchRoomLevel[i] == roomLevel) {
              return true;
            }
          }

          return false;
        }
        /** 是否是私人房间 */


        checkIsPrivateRoomLevel(roomLevel) {
          roomLevel = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).number_valueOf(roomLevel);

          for (let i = 0; i < (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
            error: Error()
          }), GConstants) : GConstants).GameRoomLevelConf.privateRoomLevel.length; i++) {
            if ((_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
              error: Error()
            }), GConstants) : GConstants).GameRoomLevelConf.privateRoomLevel[i] == roomLevel) {
              return true;
            }
          }

          return false;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=3837e7e961042599391b9ce5d3040b6d93558de5.js.map