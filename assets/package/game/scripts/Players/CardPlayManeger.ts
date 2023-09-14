
import { Node, _decorator } from 'cc';
import { EventManager } from '../../../../framework/manager/EventManager';
import { BaseComponent } from '../../../../framework/vc/BaseComponent';
import { OperationMgr } from '../../cache/OperationMgr';
import { OperationResultMgr } from '../../cache/OperationResultMgr';
import { PlayerMgr } from '../../cache/PlayerMgr';
import { RoomMgr } from '../../cache/RoomMgr';
import { OPCode } from '../../common/FXJConfig';
import { GameEvent } from '../../common/GameEvent';
import { Game } from '../../common/idl/Game';
import { MajiangUtil } from '../../common/MajiangUtil';
import { CardUtil } from '../../util/CardUtil';
import { MyPlayerCard } from './MyPlayerCard';
const { ccclass, property } = _decorator;

/**
 * Name = MyPlayer
 * URL = db://assets/package/game/scripts/MyPlayer.ts
 * Time = Fri Aug 11 2023 11:08:16 GMT+0800 (中国标准时间)
 * Author = qwe757964
 *
 * Life: onLoad-->onInitModuleEvent-->onEnable->start->update->lateUpdate->onDisable->onDestroy
 * 
 */
 
@ccclass('CardPlayManeger')
export class CardPlayManeger extends BaseComponent {
	// 手牌节点
	@property({ tooltip: "手牌节点", type: Node })
	private nodeCardView: Node | null = null;
    
    private pengArr:number[] = [OPCode.OPE_PENG,OPCode.OPE_QIANG_PENG];
    private chiArr:number[] = [OPCode.OPE_RIGHT_CHI,OPCode.OPE_MIDDLE_CHI,OPCode.OPE_LEFT_CHI];
	/** override 初始化模块事件 */
	protected onInitModuleEvent() {
        this.addModelListener(GameEvent.VIEW_BROADCAST_DEAL_CARD, this.onDealCard);
        this.addModelListener(GameEvent.RECEIVE_DEAL_CARD, this.receiveDealCard);
		this.addModelListener(GameEvent.DRAW_MY_CARD, this.drawMyCard);
		this.addModelListener(GameEvent.UPDATE_OPERATION_RESULT, this.onPlayerOpResult);
        this.addModelListener(GameEvent.VIEW_BROADCAST_GAME_OVER, this.onBroadcastGameOver);
	};
    onBroadcastGameOver(){
        let myHand:MyPlayerCard = this.nodeCardView.getComponent(MyPlayerCard)
        myHand.node.active = false;
        // myHand.showdownCard();
    }

    //自己抓牌
    drawMyCard(event:null){
		let cardsList: number[] = OperationMgr.getInstance().getDrawCardList();
		if(cardsList.length === 0){
			return;
		}
        let myHand:MyPlayerCard = this.nodeCardView.getComponent(MyPlayerCard)
        myHand.drawByte = cardsList[0];
		//自己抓牌
        console.log("onBuGangCard________________________",cardsList,CardUtil.getMajiangValues(cardsList));
        PlayerMgr.getInstance().dumpMyHands();
		myHand.drawCard(myHand.drawByte);
	}
    //分牌
    onDealCard(event, resp:Game.IDealCard) {
		let myHand:MyPlayerCard = this.nodeCardView.getComponent(MyPlayerCard)
        //自己是庄家        
        let isDealer:boolean = resp.cards.length === 14;
        myHand.addHandCards(resp.cards,isDealer,null,isDealer);
        myHand.node.active = true;
        myHand.playAnimOfShow();
	}
    //重连分牌
    receiveDealCard(event){
        let myHand:MyPlayerCard = this.nodeCardView.getComponent(MyPlayerCard)
        myHand.node.active = true;
        myHand.addHandCards(PlayerMgr.getInstance().getMyhands(),false,null,false);
        myHand.playAnimOfShow();
    }

    isChiInRange(num: number): boolean {
        return num >= 1001 && num <= 1003;
    }

    //自己出牌
    onOutCard() {
		let myHand:MyPlayerCard = this.nodeCardView.getComponent(MyPlayerCard)
        let opCards = OperationResultMgr.getInstance().opCards;
        let opCard = OperationResultMgr.getInstance().opCard;
        let indexs:number[] = PlayerMgr.getInstance().getOpIndexs(opCards);
        let removed:boolean = myHand.playCardFromHandAnim(indexs[0],indexs.length === 0);
        if(removed){
            let insertIndex:number = PlayerMgr.getInstance().getIndexByHandCards(myHand.drawByte,opCard);        
            myHand.makeSlotAnim(insertIndex);
            myHand.drawCardToSlot();
        }
        if(!this.isChiInRange(OperationMgr.getInstance().myOpCode)){
            OperationMgr.getInstance().getMyHandCardResult(opCards);
        }
        myHand.updateHandPositionAndName();
        OperationMgr.getInstance().myOpCode = 0;
	}
    //自己碰杠
    onPengGangCard(){
        let opCards = OperationResultMgr.getInstance().opCards;
        let myHand:MyPlayerCard = this.nodeCardView.getComponent(MyPlayerCard)
        let indexs:number[] = PlayerMgr.getInstance().getOpIndexs(opCards);
        MajiangUtil.deleteHasInList(PlayerMgr.getInstance().getMyhands(),opCards);
        myHand.stackAnim(indexs);
        // myHand.updateHandPositionAndName();
    }

    getIndexByCards(insertCard: number): number {
        let myCards = PlayerMgr.getInstance().getMyhands();
        let cards = [...myCards];
        cards = CardUtil.sortFeiXiaoJiCards(cards);
        for (let index = 0; index < cards.length; index++) {
            if (cards[index] == insertCard) {
                // console.log("=getIndexByCards=", cards, insertCard, insertCard.toString(16), index)
                return index
            }
        }
        return 0;
    }

    //暗杠
    onAnGangCard(){
        let opCards = OperationResultMgr.getInstance().opCards;
        let myHand:MyPlayerCard = this.nodeCardView.getComponent(MyPlayerCard)
        let indexs:number[] = PlayerMgr.getInstance().getOpIndexs(opCards);
        let isGrab = opCards.indexOf(myHand.drawByte) !== -1;
        if(isGrab){
            myHand.removeDrawCard();
            MajiangUtil.deleteHasInList(PlayerMgr.getInstance().getMyhands(),opCards);
            myHand.stackAnim(indexs);
        }else{
            let index = OperationMgr.getInstance().getIndexByCards(myHand.drawByte);
            OperationMgr.getInstance().getMyHandCardResult(opCards);
            myHand.stackAnim(indexs,myHand.drawByte,index);
        }
    }
    //补杠
    onBuGangCard(){
        let myHand:MyPlayerCard = this.nodeCardView.getComponent(MyPlayerCard);
        let opCards = OperationResultMgr.getInstance().opCards;
        let opCard = OperationResultMgr.getInstance().opCard;
        CardUtil.getMajiangValues(opCards);
        let indexs:number[] = PlayerMgr.getInstance().getOpIndexs(opCards);
        let removed:boolean = myHand.playCardFromHandAnim(indexs[0],indexs.length === 0);
        if(removed){
            let insertIndex:number = PlayerMgr.getInstance().getIndexByHandCards(myHand.drawByte,opCard);     
            myHand.makeSlotAnim(insertIndex);
            myHand.drawCardToSlot();
        }
        PlayerMgr.getInstance().dumpMyHands();
        OperationMgr.getInstance().getMyHandCardResult(opCards);
        // MajiangUtil.deleteHasInList(PlayerMgr.getInstance().getMyhands(),opCards);
        console.log("onBuGangCard________________________",opCards,CardUtil.getMajiangValues(opCards));
        PlayerMgr.getInstance().dumpMyHands();
        myHand.updateHandPositionAndName();
    }

     //自己吃
     onChiCard(){
        let opCards = OperationResultMgr.getInstance().opCards;
        let myHand:MyPlayerCard = this.nodeCardView.getComponent(MyPlayerCard)
        let indexs:number[] = PlayerMgr.getInstance().getOpIndexs(opCards);
        opCards = opCards.filter(item => item !== OperationResultMgr.getInstance().opCard);
        MajiangUtil.deleteHasInList(PlayerMgr.getInstance().getMyhands(),opCards);
        myHand.stackAnim(indexs);
        myHand.cancelOpcardTouch(OperationResultMgr.getInstance().opCard);
    }

    playerMySelfCard(){
        let myHand:MyPlayerCard = this.nodeCardView.getComponent(MyPlayerCard)
        let opCards = OperationResultMgr.getInstance().opCards;
        switch (OperationResultMgr.getInstance().opCode) {
            case OPCode.OPE_OUT_CARD:
                if(this.isChiInRange(OperationMgr.getInstance().myOpCode)){
                    MajiangUtil.deleteHasInList(PlayerMgr.getInstance().getMyhands(),opCards);
                    myHand.updateOpcardTouch();
                }
                //自己出牌
                this.onOutCard();
                break;
            case OPCode.OPE_PENG:
                //自己碰
                this.onPengGangCard();
                break;
            case OPCode.OPE_AN_GANG:
                //自己暗杠
                this.onAnGangCard();
                break;
            case OPCode.OPE_GANG:
                //自己杠
                this.onPengGangCard();
                break;
            case OPCode.OPE_BU_GANG:
                //自己补杠
                this.onBuGangCard();
                break;
            case OPCode.OPE_LEFT_CHI:
                //自己左吃
                this.onChiCard();
                break;
            case OPCode.OPE_MIDDLE_CHI:
                //自己中吃
                this.onChiCard();
                break;
            case OPCode.OPE_RIGHT_CHI:
                //自己右吃
                this.onChiCard();
                break;
        }
    }

    //操作
	onPlayerOpResult(event,resp:Game.IOperationResult){
        // EventManager.dispatch(GameEvent.UPDATE_USER_OPERATION_RESULT,resp);
        //我自己
        if(OperationResultMgr.getInstance().seatId === RoomMgr.getInstance().mySeatId){
            this.playerMySelfCard();
            // console.log("减去我自己出的牌操作",resp);
            
            
        }else{
            console.log("其他玩家操作",resp);
        }
        EventManager.dispatch(GameEvent.CLOSE_OPRATION_INFO);
	}
    
    resetView() {
        let myHand:MyPlayerCard = this.nodeCardView.getComponent(MyPlayerCard)
        myHand.resetView();
	}
    
}

