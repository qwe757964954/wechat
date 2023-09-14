

import { GCache } from "../../../cache/GCache";
import { BaseCache } from "../../../framework/vc/BaseCache";
import { MahjongMap } from "../common/FXJConfig";
import { Common } from "../common/idl/Common";
import { Game } from "../common/idl/Game";
import { CardUtil } from "../util/CardUtil";
import { RoomMgr } from "./RoomMgr";

export interface Observer {
	updatePlayerList(data: Common.IPlayerInfo[]): void;
	updateCardsCount():void;
}


  


export class PlayerMgr extends BaseCache {
    public playerList?: Common.IPlayerInfo[] = [];
    public handOpGroup?: Common.IHandOpGroup = null;
    public myPlayerInfo?: Common.IPlayerInfo = null;
	public gangCount?: number = 0;
	public observers: Observer[] = [];
	

    private static instance: PlayerMgr | null = null;
    constructor(name = "") {
		super(name);
	};
    public static getInstance(): PlayerMgr {
        if (!PlayerMgr.instance) {
            PlayerMgr.instance = new PlayerMgr();
        }
        return PlayerMgr.instance;
    }
	addObserver(observer: Observer) {
		this.observers.push(observer);
	}
	
	  // 取消注册观察者
	removeObserver(observer: Observer) {
		const index = this.observers.indexOf(observer);
		if (index !== -1) {
			this.observers.splice(index, 1);
		}
	}
	
	  // 当数据发生变化时，通知所有观察者

	public setPlayerList(data: Common.IPlayerInfo[]): void {
		this.parseUseInfo(data);
		this.playerList = CardUtil.sortPlayersBySeatId(data,RoomMgr.getInstance().mySeatId);
	}

	public resertPlayer():void{
		this.playerList = [];
	}

	public notifyObservers(): void {
		for (const observer of this.observers) {
		  	observer.updatePlayerList(this.playerList);
		}
	}

	public getOpIndexs(opCards:number[]):number[]{
		let myPlayer:Common.IPlayerInfo = PlayerMgr.getInstance().getMyPlayerInfo();
		let indexs:number[] = []
		for (let i = 0; i < opCards.length; i++) {
			const index = myPlayer.handCards.indexOf(opCards[i]);
			//如果存在则添加
			if(index !== -1){
				indexs.push(index);
			}
		}
		return indexs;
	}

	public updateMyhands(nums:number[]){
		let myPlayer:Common.IPlayerInfo = PlayerMgr.getInstance().getMyPlayerInfo();
		myPlayer.handCards = nums;
	}

	public getMyhands(): number[]{
		let myPlayer:Common.IPlayerInfo = PlayerMgr.getInstance().getMyPlayerInfo();
		return myPlayer.handCards
	}

	public getLastMyhands(): number{
		let myPlayer:Common.IPlayerInfo = PlayerMgr.getInstance().getMyPlayerInfo();
		return myPlayer.handCards[myPlayer.handCards.length - 1];
	}

	public includesMyhands(opCard?:number): boolean{
		let myPlayer:Common.IPlayerInfo = PlayerMgr.getInstance().getMyPlayerInfo();
		let inList = false;
		for (let i = 0; i < myPlayer.handCards.length; i++) {
            let cardNum = myPlayer.handCards[i]
            if(CardUtil.getMajiangValue(cardNum) === CardUtil.getMajiangValue(opCard)){
                inList = true;
                break;
            }
        }
		return inList;
	}

	public getHandCardByIndex(index:number):number{
		let myPlayer:Common.IPlayerInfo = PlayerMgr.getInstance().getMyPlayerInfo();
		return myPlayer.handCards[index];
	}

	deleteMyHands(bytes:number[]){
		
	}

	//要插入的牌在手牌中应有的位置
    public getIndexByHandCards(insertCard: number, removeCard: number): number {
        let myCards = this.getMyhands();
        let cards = [...myCards];
        for (let i = cards.length - 1; i >= 0; i--) { //如果此时手牌中还存在要移除的牌，则先移除，再计算插入牌的index
            if (cards[i] === removeCard) {
                cards.splice(i, 1);
                break;
            }
        }
        // console.log("=getIndexByHandCards=cards==", cards, insertCard.toString(16), removeCard);
		//如果要插入的牌是小鸡，放在第一位
		if(CardUtil.getCardValue(insertCard) === "0x21"){
			return 0;
		}

        for (let index = 0; index < cards.length; index++) {
            let card = cards[index];
			let checkIndex
            if (card == insertCard) {
                checkIndex = index;
            } else if (card < insertCard && index + 1 < cards.length && insertCard <= cards[index + 1]) {
                checkIndex = index + 1;
            } else if (index == cards.length - 1 && insertCard > card) {
                checkIndex = cards.length;
            }
			
            if (checkIndex) {
                return checkIndex;
            }
        }
		
        return 0;
    }

	public dumpMyHands(){
		let myPlayer:Common.IPlayerInfo = PlayerMgr.getInstance().getMyPlayerInfo();
		let majiangMap:string[] = [];
		for (let i = 0; i < myPlayer.handCards.length; i++) {
            let cardStr = CardUtil.getCardValue(myPlayer.handCards[i]);
			majiangMap.push(MahjongMap.get(cardStr));
        }
		console.log("dumpMyHands______________________",majiangMap);
	}

	public updatePlayerCardsNum(cardsCount:number[]){
		for (let i = 0; i < cardsCount.length; i++) {
			let player :Common.IPlayerInfo = this.findPlayerWithSeatId(i+1);
			player.cardCount = cardsCount[i];
		}
	}

	public findOtherPlayer():Common.IPlayerInfo[]{
		return this.playerList.filter(user => user.seatId === RoomMgr.getInstance().mySeatId);
	}

	public findPlayerWithUserId( userId: number): Common.IPlayerInfo {
		return this.playerList.filter(user => user.userId === userId)[0];
	}

	public findPlayerWithSeatId( seatId: number): Common.IPlayerInfo {
		return this.playerList.filter(user => user.seatId === seatId)[0];
	}

	public getMyPlayerInfo(): Common.IPlayerInfo{
		this.myPlayerInfo = this.findPlayerWithUserId(GCache.User.getUserMid());
		return this.myPlayerInfo;
	}

    //增加玩家
	public addPlayerList(info: Common.IPlayerInfo | Common.IPlayerInfo[]): void {
		this.parseUseInfo(info);
		if (Array.isArray(info)) {
			const newItems = info.filter(item => !this.playerList.some(({ userId }) => userId === item.userId));
			this.playerList.push(...newItems);
		} else {
			
			const exists = this.playerList.some(user => user.userId === info.userId);
			if(!exists){
				this.playerList.push(info);
			}
		}
		this.playerList = CardUtil.sortPlayersBySeatId(this.playerList,RoomMgr.getInstance().mySeatId);
	}
	//将玩家str解析
	public parseUseInfo(info: Common.IPlayerInfo | Common.IPlayerInfo[]){
		if (Array.isArray(info)) {
			info.forEach(item => {
				item.gameUserInfo = JSON.parse(item.strUserInfo)
			});
		} else {
			info.gameUserInfo = JSON.parse(info.strUserInfo)
		}
	}
	//删除玩家
	public deletePlayerList(info: Common.IPlayerInfo | Common.IPlayerInfo[]): void {
		if (Array.isArray(info)) {
			this.playerList = this.playerList.filter((item) =>
				!info.some((otherItem) => otherItem.userId === item.userId)
			);
		} else {
			this.playerList = this.playerList.filter(item => item.userId !== info.userId);
		}
		this.playerList = CardUtil.sortPlayersBySeatId(this.playerList,RoomMgr.getInstance().mySeatId);
	}
	

    //清理房间数据
	public clear(): void {
		this.playerList = null;
	}
	getPlayerReadyStatus(userId:number):number{
		let player :Common.IPlayerInfo = this.findPlayerWithUserId(userId);
		return player.isReady;
	}
	updatePlayerReadyStatus(userId:number):void {
		let player :Common.IPlayerInfo = this.findPlayerWithUserId(userId);
		player.isReady = 1;
	}

	updatePlayerMoney(moneys:number[]):void {
		for (let i = 0; i < moneys.length; i++) {
			let player :Common.IPlayerInfo = this.findPlayerWithSeatId(i+1);
			player.money = moneys[i];
			if(player.userId === GCache.User.getUserMid()){
				GCache.User.updateUserMoneyByID(0, player.money);
			}
		}
	}
	
	updateOutCards(resp:Game.IGrabCard): void {
		let player :Common.IPlayerInfo = this.findPlayerWithUserId(resp.userId);
		let card:Common.ICard = {
			card: resp.card,
			status:0
		}
		player.outCards.push(card); 
	}

	updateHandCards(resp:Game.IHandCards):void {
		for (let i = 0; i < resp.handCards.length; i++) {
			let player :Common.IPlayerInfo = this.findPlayerWithSeatId(i+1);
			player.handCards = resp.handCards[i].handCards;
			player.huCard = resp.handCards[i].huCard;
			player.opGroups = resp.handCards[i].opGroups;
			player.tingCard = resp.handCards[i].tingCard;
			player.isUnTing = resp.handCards[i].isUnTing;
			player.customData = resp.handCards[i].customData;
		}
	}
	
	// public userOperationResult(resp:Game.IOperationResult) : void {
	// 	PlayerMgr.getInstance().userOperationResult(resp);
	// }

	deletePlayerLeave(userId:number):void {
		this.playerList = this.playerList.filter(item => item.userId !== userId);
	}
	
	updatePlayerAiStatus(userId:number,isAi:number):void {
		let player :Common.IPlayerInfo = this.findPlayerWithUserId(userId);
		player.isAi = isAi;
	}

}