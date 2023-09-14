import { GCache } from "../../../cache/GCache";
import { BaseCache } from "../../../framework/vc/BaseCache";
import { GameStatus } from "../common/FXJConfig";
import { Common } from "../common/idl/Common";
import { Game } from "../common/idl/Game";
import { Observer } from "./PlayerMgr";
export class RoomMgr extends BaseCache {
    // public roomInfo?: Common.IRoomInfo = null;
    public roomCfg?:Common.IRoomCfg = null;
    public bankSeatId: number = null;
    public dices: number[]  = null;
    public mySeatId: number = null;
    public totalCardCount?: number = null;
    public timerInfoList?: Common.ITimerInfo[] = null;
    public laiziInfo?: Game.IFixLaizi = null;
    public rollDice?: Game.IRollDice = null;
    public remainCardsCount?: number = 0;
    public fangangCards: number[] = null;
    public selectFanGangCards: number = null;
    public timePass?: number = 0;
    private static instance: RoomMgr | null = null;
    
    private observers: Observer[] = [];



    constructor(name = "") {
		super(name);
	};
    public static getInstance(): RoomMgr {
        if (!RoomMgr.instance) {
            RoomMgr.instance = new RoomMgr();
        }
        return RoomMgr.instance;
    }
    //更新房间信息list数据
    public addObserver(observer: Observer): void {
        this.observers.push(observer);
    }
    
    public removeObserver(observer: Observer): void {
        const index = this.observers.indexOf(observer);
        if (index !== -1) {
            this.observers.splice(index, 1);
        }
    }
    
    public notifyObservers(): void {
        for (const observer of this.observers) {
            observer.updateCardsCount();
        }
    }
    
    getRoomInfoData(GameID?: number){
        let gameData = GCache.SelectGame.getServerGameLevelTabListByGameID(GameID);
        let roomInfo = null;
        gameData.forEach(gameInfo => {
            let dataArr = gameInfo.data;
            for (const key in dataArr) {
                if (dataArr.hasOwnProperty(key)) {
                    const info = dataArr[key];
                    if(info.level === this.roomCfg.level){
                        roomInfo = info;
                    }
                }
            }
        });
        return roomInfo;
    }

    public mySelfIsBanker():boolean{
        return this.bankSeatId === this.mySeatId;
    }

    public getTimeOut(state:GameStatus):number{
        let timeOut:number = 0;
        this.timerInfoList.forEach(timeInfo => {
            if(timeInfo.timerId == state){
                timeOut = timeInfo.timeout;
            }
        });
        return timeOut
    }

    public updateRoomInfo(resp:Game.IUserLoginRoom | Game.IUserReconnect){
        this.roomCfg = resp.roomInfo.roomCfg;
        this.bankSeatId = resp.roomInfo.gameInfo.bankSeatId;
        this.dices = resp.roomInfo.gameInfo.dices;
        this.fangangCards = resp.roomInfo.gameInfo.fanGangPai;
        this.mySeatId = resp.roomInfo.gameInfo.mySeatId;
        this.updateRemainCardsCount(resp.roomInfo.gameInfo.remainCardCount);
        this.timerInfoList = resp.roomInfo.gameInfo.timerInfoList;
        this.totalCardCount = resp.roomInfo.gameInfo.totalCardCount;
    }

    public updateRemainCardsCount(count?:number){
        this.remainCardsCount = count;
        this.notifyObservers();
    } 

    //清理房间数据
	public clear(): void {
		// this.roomInfo = null;
	}
}