import { BaseCache } from "../../../framework/vc/BaseCache";
import { Game } from "../common/idl/Game";

export class BankerMgr extends BaseCache {
    bankerInfo?: Game.IFixBanker = null;
    
    private static instance: BankerMgr | null = null;
    constructor(name = "") {
		super(name);
	};
    public static getInstance(): BankerMgr {
        if (!BankerMgr.instance) {
            BankerMgr.instance = new BankerMgr();
        }
        return BankerMgr.instance;
    }
    //更新房间信息list数据
	public updateRoomInfo(info:Game.IFixBanker): void {
		this.bankerInfo = info;
	}
    
    //清理房间数据
	public clear(): void {
		this.bankerInfo = null;
	}
}