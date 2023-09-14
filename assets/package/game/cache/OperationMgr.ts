import { BaseCache } from "../../../framework/vc/BaseCache";
import { OPCode } from "../common/FXJConfig";
import { Common } from "../common/idl/Common";
import { Game } from "../common/idl/Game";
import { MajiangUtil } from "../common/MajiangUtil";
import { CardUtil } from "../util/CardUtil";
import { PlayerMgr } from "./PlayerMgr";

export class OperationMgr extends BaseCache {
    public seatId: number = 0;
    public userId: number = 0;
    public myOpCode: number = 0;
    public cardSeatId: number = 0;
    public cardUserId: number = 0;
    public opGroups: Common.IOpGroup[] = null;
    public tingInfos: Common.ITingInfo[] = null;
    public extendInfo: string = "";
    public outCardList: number[] = [];
    private static instance: OperationMgr | null = null;
    constructor(name = "") {
		super(name);
	};
    public static getInstance(): OperationMgr {
        if (!OperationMgr.instance) {
            OperationMgr.instance = new OperationMgr();
        }
        return OperationMgr.instance;
    }
    
    // public findCardListWithOpcode( opCode: number):number {
    //     this.opGroups.forEach((opInfo:Common.IOpGroup) => {
    //         if(opInfo.opCode === opCode){
    //             return opInfo.cardsList[];
    //         }
    //     });
	// }

    public getPassNumber():number{
        let num:number = 0;
        this.opGroups.forEach((opInfo:Common.IOpGroup) => {
            if(opInfo.opCode === OPCode.OPE_PASS){
                num = opInfo.cardsList[0].cards[0];
            }
        });
        return num;
    }

    public getHuNumber():number{
        let num:number = 0;
        this.opGroups.forEach((opInfo:Common.IOpGroup) => {
            if(opInfo.opCode === OPCode.OPE_HU){
                num = opInfo.cardsList[0].cards[0];
            }else if(opInfo.opCode === OPCode.OPE_ZI_MO){
                num = opInfo.cardsList[0].cards[0];
            }
        });
        return num;
    }
    

    public getOprationListNumber(opCode?:number,index?:number):number[]{
        let list:number[] = []
        this.opGroups.forEach((opInfo:Common.IOpGroup) => {
            if(opInfo.opCode === opCode){
                list = opInfo.cardsList[index].cards;
            }
        });
        return list;
    }
    
    public isMoreOpration(opCode?:number):boolean{
        let isMore = false;
        this.opGroups.forEach((opInfo:Common.IOpGroup) => {
            if(opInfo.opCode === opCode){
                isMore = opInfo.cardsList.length > 1;
            }
        });
        return isMore
    }
    
    public getOprationCardList(opCode?:number):Common.ICards[]{
        let cardList:Common.ICards[] = []
        this.opGroups.forEach((opInfo:Common.IOpGroup) => {
            if(opInfo.opCode === opCode){
                cardList = opInfo.cardsList;
            }
        });
        return cardList;
    }

    public getSendCardListNumber(index:number):number[]{
        let list:number[] = []
        this.opGroups.forEach((opInfo:Common.IOpGroup) => {
            if(opInfo.opCode === OPCode.OPE_OUT_CARD){
                list = opInfo.cardsList[index].cards;
            }
        });
        return list;
    }

    updateMyselfOpration(resp:Game.IOperation):void{
        this.seatId = resp.seatId;
        this.userId = resp.userId;
        this.cardSeatId = resp.cardSeatId;
        this.cardUserId = resp.cardUserId;
        this.opGroups = resp.opGroups;
        this.tingInfos = resp.tingInfos;
        this.extendInfo = resp.extendInfo;
        this.getOutCardList();
	}

    getOutCardList(){
        this.outCardList = [];
        this.opGroups.forEach((opInfo:Common.IOpGroup) => {
            if(opInfo.opCode === OPCode.OPE_OUT_CARD){
                opInfo.cardsList.forEach((element) => {
                    this.outCardList.push(element.cards[0]);
                });
            }
        });
        this.outCardList = CardUtil.sortFeiXiaoJiCards(this.outCardList);
    }

    getDrawCardList(): number[]{
        const cloneList = this.outCardList.slice();
        if(cloneList.length == 0) {
            return [];
        }
        MajiangUtil.deleteHasInList(cloneList,PlayerMgr.getInstance().getMyhands());
        return cloneList;
    }

    getMyHandCardResult(list:number[]){
        const cloneList = this.outCardList.slice();
        MajiangUtil.deleteHasInList(cloneList,list);
        PlayerMgr.getInstance().updateMyhands(cloneList);
    }

    getIndexByCards(insertCard: number): number {
        let cards = [...this.outCardList];
        cards = CardUtil.sortFeiXiaoJiCards(cards);
        for (let index = 0; index < cards.length; index++) {
            if (cards[index] == insertCard) {
                return index
            }
        }
        return 0;
    }
    
    getSendCardIndex(byte:number):number{
        const index = this.outCardList.findIndex(item => item === byte);
        return index;
    }

    //清理房间数据
	public clear(): void {
		// this.bankerInfo = null;
	}
}