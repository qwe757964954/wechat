import { BaseCache } from "../../../framework/vc/BaseCache";
import { Common } from "../common/idl/Common";
import { Game } from "../common/idl/Game";



export class OperationResultMgr extends BaseCache {
    public seatId: number = 0;
    public userId: number = 0;
    public opCode: number = 0;
    public opCard: number = 0;
    public opCards: number[] = [];
    public cardSeatId: number = 0;
    public cardUserId: number = 0;
    public handCard: Game.IHandCard = null;
    public huNum: number = 0;
    public huInfo: Common.IHuSeatInfo = null;
    public tingInfos: Common.IHuInfo[] = null;
    public CustomData: string = "";
    public extendInfo: string = "";
    private static instance: OperationResultMgr | null = null;
    constructor(name = "") {
		super(name);
	};
    public static getInstance(): OperationResultMgr {
        if (!OperationResultMgr.instance) {
            OperationResultMgr.instance = new OperationResultMgr();
        }
        return OperationResultMgr.instance;
    }
    //更新房间信息list数据
	public userOperationResult(resp:Game.IOperationResult): void {
        this.seatId = resp.seatId;
        this.userId = resp.userId;
        this.opCode = resp.opCode;
        this.opCard = resp.opCard;
        this.opCards = resp.opCards;
        this.cardSeatId = resp.cardSeatId;
        this.cardUserId = resp.cardUserId;
        this.handCard = resp.handCard;
        this.huNum = resp.huNum;
        this.huInfo = resp.huInfo;
        this.tingInfos = resp.tingInfos;
        this.CustomData = resp.CustomData;
        this.extendInfo = resp.extendInfo;
	}


    //清理房间数据
	public clear(): void {
		// this.bankerInfo = null;
	}
}