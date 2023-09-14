/**
 * Name = Desk
 * URL = db://assets/cache/Desk.ts
 * Time = Sat May 28 2022 12:10:40 GMT+0800 (中国标准时间)
 * Author = xueya
 * 游戏桌子 子类需扩展实现
 */

import { GConstants } from "../config/GameConstant";
import { Utils } from "../framework/Utils";
import { BaseCache } from "../framework/vc/BaseCache";

export interface RoomInfo {
    basechiptype: number
    gameId: number
    gameversion?: number
	level?: number
	playmode?: number
	tid?: number
	upMoney?: number
	levelId?: number
}

export class Desk extends BaseCache {
	ROOM_TYPE = {
		NORMAL_ROOM_RECONNECT: 100 + 10,//普通房间重连
		ROOM_NORMAL: 100 + 0,//普通房间
		PRIVATE_ROOM: 100 + 1,//私人房
		PRIVATE_ROOM_RECONNECT: 100 + 2,//私人房重连
		PRIVATE_ROOM_STATUS_CHECK: 100 + 3,
		NORMAL_ROOM_FRIEND_INVITE: 100 + 4,//普通房间好友邀请进房间

	}
	// 比赛类型
	NORMAL_IMMEDIATE_MATCH = 0; // 一般快速赛
	FIXED_TIME_MATCH = 3; // 定时赛
	JJ_MATCH = 7; // JJ模式
	BET_MATCH = 8; // 投注赛

	MATCH_RECONNECT = 1000 + 1;     // 比赛重连
	MATCH_RECONNECT_INGAME = 1000 + 2;     // 比赛游戏中重连
	MATCH_NONE = 1000 + 3;
	roomInfo: RoomInfo; //房间信息
	//当前房间id
	// protected _levelID: number = 0;
	// //桌子ID
	protected _tableID: number = 0;
	// //当前游戏ID
	// protected _gameID: number = 0;
	//当前房间状态
	protected _roomStates: number = -1;
	//房间状态记录(非重复)
	protected _roomStatesList = [];
	//踢人状态
	protected _kickUserStatus: number = 0;
	protected basechiptype:number = 0;
	//是否可以退出游戏
	protected _isCanExitGame: boolean = true;
	//是否检查破产
	protected _isCheckBankrupt: boolean = true;
	//钱币类型
	protected _moneyTypeID: number = 0;
	//玩家列表
	// protected _playerList: Array<Player> = new Array<Player>()
	// //我自己
	// protected _mySelfPlayer: Player = null;
	//准备的时间
	protected _readyTime: number = 10;

	//实例化
	constructor(name = "") {
		super(name)
		this.canExitGame = true;
	};

	//钱币类型
	set MoneyTypeID(state: number) {
		this._moneyTypeID = state;
	}
	//获取钱币类型
	get MoneyTypeID() {
		return this._moneyTypeID;
	}

	//设置踢人状态 （true 被踢出 9001 server升级踢出）
	set KickUserStatus(state: number) {
		this._kickUserStatus = state;
	}
	//获取踢人状态
	get KickUserStatus() {
		return this._kickUserStatus;
	}

	//设置检查破产开关
	set switchCheckBankrupt(state: boolean) {
		this._isCheckBankrupt = state;
	}
	//获取是否检查破产
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
	set readyTime(num: number) {
		this._readyTime = num;
	}
	/** get 准备的时间配置 */
	get readyTime(): number {
		return this._readyTime || 10;
	}


	/**
	 * 登录成功
	 * @param param 
	 */
	onSaveLoginSuccess(param = null) {

	}
	/** 更新房间信息 */
	updateRoomInfo(body) {
		this.roomInfo = { ...body };
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
	insertPlayer(body) {

	}
	// /** 根据Mid获取玩家类 */
	getPlayerByMID(mid: number): Object | null {
		return null
	}
	/**
	 * 更新玩家的准备状态
	 * @param mid 玩家Mid
	 * @param readyNum 0未准备 1已准备
	 * @returns 
	 */
	updatePlayerOnReady(mid: number, readyNum: number = null) {

	}
	/**
	 * 根据Mid获取玩家准备状态
	 * @param mid 
	 * @returns 
	 */
	getPlayerReadyStateByMid(mid: number): boolean {
		return false
	}
	// /** 根据座位号获取玩家类 */
	getPlayerByLocalSeatID(seatid: number): any | null {
		return null
	}
	// /** 根据座位号获取下一位玩家 */
	getNextPlayerBySeatID(seatid: number): any | null {
		return null
	}
	// /** 获取玩家排序后的数组 从小到大获取玩家类 */
	getPlayerSortSeat(): any[] {
		return null
	}
	// /** 输出所有玩家信息 */
	dumpPlayers() {

	}
	// /** 输出所有玩家准备信息 */
	dumpPlayersReadyState() {

	}
	/** 重置游戏数据 */
	resetGameData() {

	}
	/**更新房间状态 */
	setRoomStates(state) {
		this._roomStates = state;

		if (this._roomStatesList.length == 0) {
			this._roomStatesList.push(this._roomStates);
		} else {
			if (this._roomStatesList[this._roomStatesList.length - 1] != this._roomStates) {
				this._roomStatesList.push(this._roomStates);
			};
		};

	}
	/** 获取房间状态 */
	getRoomStates(): any | null {
		return this._roomStates;
	}
	/** 获取上一个房间状态 */
	getLastRoomStates(): any | null {
		if (this._roomStatesList.length == 0) {
			return -1;
		}
		return this._roomStatesList[this._roomStatesList.length - 1];
	}
	/** 获取上上一个房间状态 */
	getLastLastRoomStates(): any | null {
		if (this._roomStatesList.length < 2) {
			return -1;
		}
		return this._roomStatesList[this._roomStatesList.length - 2];
	}


	/**更新游戏状态 */
	setGameStates(state) {

	}
	/** 获取游戏状态 */
	getGameStates(): any | null {
		return null
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
		this._tableID = tableID
	}
	// /** 获取当前桌子ID */
	getCurTableID() {
		return this._tableID
	}

	/** 设置当前游戏ID */
	setCurGameID(gameID) {
		// this.roomInfo.gameId = gameID;
	}
	/** 获取当前游戏ID */
	getCurGameID() {
		return this.roomInfo.gameId;
	}
	/** 是否可以退出房间 */
	set canExitGame(state: boolean) {
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
	isInMatchRoom(): boolean {
		let roomLevelId = this.getCurLevelID();
		if (roomLevelId == this.NORMAL_IMMEDIATE_MATCH
			|| roomLevelId == this.FIXED_TIME_MATCH
			|| roomLevelId == this.JJ_MATCH
			|| roomLevelId == this.BET_MATCH
			|| roomLevelId == this.MATCH_RECONNECT
			|| roomLevelId == this.MATCH_RECONNECT_INGAME) {
			return true;
		} else {
			return this.checkIsMatchRoomLevel(roomLevelId);
		}

	}
	/** 判断是否是在私人房间中 */
	isInPrivateRoom(): boolean {
		let roomLevelId = this.getCurLevelID();
		return this.checkIsPrivateRoomLevel(roomLevelId);
	}
	/** 判断是不是在私人房积分场 */
	isInJiFenRoom(): boolean {
		let roomLevelId = this.getCurLevelID();
		return roomLevelId == GConstants.GameRoomLevelConf.privateRoomLevel[2];
	}



	/** 是否是比赛房间 */
	checkIsMatchRoomLevel(roomLevel): boolean {
		roomLevel = Utils.number_valueOf(roomLevel);
		for (let i = 0; i < GConstants.GameRoomLevelConf.matchRoomLevel.length; i++) {
			if (GConstants.GameRoomLevelConf.matchRoomLevel[i] == roomLevel) {
				return true;
			}
		}
		return false;
	}
	/** 是否是私人房间 */
	checkIsPrivateRoomLevel(roomLevel): boolean {
		roomLevel = Utils.number_valueOf(roomLevel);

		for (let i = 0; i < GConstants.GameRoomLevelConf.privateRoomLevel.length; i++) {
			if (GConstants.GameRoomLevelConf.privateRoomLevel[i] == roomLevel) {
				return true;
			}
		}
		return false;

	}

}

