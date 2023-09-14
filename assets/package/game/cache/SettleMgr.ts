import { GCache } from "../../../cache/GCache";
import { BaseCache } from "../../../framework/vc/BaseCache";
import { Common } from "../common/idl/Common";
import { Game } from "../common/idl/Game";
import { CardUtil } from "../util/CardUtil";
import { PlayerMgr } from "./PlayerMgr";
import { RoomMgr } from "./RoomMgr";




export class SettleMgr extends BaseCache {
    
    public settleType?: string = "";
    
    public isShowGameOver?: number = 0;

    public isBaoSanJia?: boolean = false;

    public jiesuanCustomData?: string = "";

    public settleModel?: Game.ISettleModel = null;

    // public isBaoSanJia?: boolean = false;

    private static instance: SettleMgr | null = null;
    

    constructor(name = "") {
		super(name);
	};
    public static getInstance(): SettleMgr {
        if (!SettleMgr.instance) {
            SettleMgr.instance = new SettleMgr();
        }
        return SettleMgr.instance;
    }
    updateSelectInfo(resp:Game.ISettleItem){
        this.settleType = resp.settleType;
        this.isShowGameOver = resp.isShowGameOver;
        this.isBaoSanJia = resp.isBaoSanJia;
        this.jiesuanCustomData = resp.jiesuanCustomData;
        this.settleModel = resp.settleModel;
        this.sortTotalInfo();
        this.setFanInfoSeatStr();
    }

    setFanInfoSeatStr(){
        let moneyList = this.settleModel.moneyItemList;
        moneyList.forEach(moneyItem => {
            for(let i=0;i<moneyItem.fanExtendInfo.length;i++){
                let fanData = moneyItem.fanExtendInfo[i];
                fanData.seatStr = CardUtil.calculatePlayerPosition(RoomMgr.getInstance().mySeatId,i+1);
            }
        });
    }

    getTotalInfoIndex(){
        let index = 0;
        for (let i =0;i<this.settleModel.totalInfo.length;i++ ){
            let info:Game.ITotalInfo = this.settleModel.totalInfo[i];
            if(info.bWin === 1){
                index = i;
                break;
            }
        }
        return index;
    }

    getMaxWinType():Game.IFanInfo{
        let fanData:Game.IFanInfo = null;
        this.settleModel.moneyItemList.forEach((item:Game.ISettleMoneyItem) => {
            let winSeatId:number = item.winSeatId;
            let settleInfo:Game.ISettleFanExtendInfo = item.fanExtendInfo[winSeatId -1];
            let num = -1;
            settleInfo.fanInfo.forEach(info => {
                if(parseInt(info.fan) > num){
                    num = parseInt(info.fan);
                    fanData = info;
                }
            });
        });
        return fanData;
    }

    sortTotalInfo(){
        this.settleModel.totalInfo.forEach(info => {
            let player:Common.IPlayerInfo = PlayerMgr.getInstance().findPlayerWithUserId(info.userId);
            info.seatId = player.seatId;
        });
        this.settleModel.totalInfo = CardUtil.sortPlayersBySeatId(this.settleModel.totalInfo,RoomMgr.getInstance().mySeatId);
    }
    

    getOpponentTotalInfo():Game.ITotalInfo[]{
        let opponentInfo:Game.ITotalInfo[] = this.settleModel.totalInfo.filter(item => item.userId !== GCache.User.getUserMid());
        return opponentInfo;
    }

    getMyTotalInfo():Game.ITotalInfo{
        let opponentInfo:Game.ITotalInfo = this.settleModel.totalInfo.filter(item => item.userId === GCache.User.getUserMid())[0];
        return opponentInfo;
    }

    getWinPlayerInfo():Common.IPlayerInfo{
        let player:Common.IPlayerInfo = null;
        this.settleModel.moneyItemList.forEach((item:Game.ISettleMoneyItem) => {
            player = PlayerMgr.getInstance().findPlayerWithSeatId(item.winSeatId);
        });
        return player
    }
    filterFanExtendInfo():Game.ISettleFanExtendInfo[]{
        if(this.settleModel.moneyItemList.length === 0){
            return [];
        }
        const filteredFanExtendInfo:Game.ISettleFanExtendInfo[] = this.settleModel.moneyItemList[0].fanExtendInfo.filter(item => item.fanInfo.length > 0);
        return filteredFanExtendInfo;
    }
    //清理房间数据
	public clear(): void {
		
	}
}
