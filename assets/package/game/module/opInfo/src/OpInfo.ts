import { instantiate, Layout, Node, Prefab, _decorator } from 'cc';
import { inf_SpineAniCreate } from '../../../../../framework/InterfaceDefines';
import { EventManager } from '../../../../../framework/manager/EventManager';
import { Utils } from '../../../../../framework/Utils';
import { BaseComponent } from '../../../../../framework/vc/BaseComponent';
import { OperationMgr } from '../../../cache/OperationMgr';
import { RoomMgr } from '../../../cache/RoomMgr';
import { GameStatus, OPCode } from '../../../common/FXJConfig';
import { FXJEvent } from '../../../common/FXJEvent';
import { FXJRes } from '../../../common/FXJRes';
import { FXJSound } from '../../../common/FXJSound';
import { GameEvent } from '../../../common/GameEvent';
import { Common } from '../../../common/idl/Common';
import { Game } from '../../../common/idl/Game';
import { Card } from '../../card/src/Card';
import { Carditem } from './Carditem';
const { ccclass, property } = _decorator;

export interface OpType {
    node?: Layout | null;
    code?: number | null;
}

@ccclass('OpInfo')
export class OpInfo extends BaseComponent {
    @property(Node)
    public opBtns: Node | null = null;

    @property(Layout)
    public guoLayout: Layout | null = null;

    @property(Layout)
    public huLayout: Layout | null = null;

    @property(Layout)
    public gangLayout: Layout | null = null;

    @property(Layout)
    public pengLayout: Layout | null = null;

    @property(Layout)
    public chiLayout: Layout | null = null;

    @property(Layout)
    public zimoLayout: Layout | null = null;

    @property(Layout)
    public ganghuaLayout: Layout | null = null;

    // 手牌节点
	@property({ tooltip: "手牌预制体", type: Prefab })
	private CardItemPrefab: Prefab | null = null;
    //可以显示响应按钮的opCode
    btnCodeMap = new Map<number, Layout>();

    //可以显示响应按钮的opCode
    btnSkelMap = new Map<number, string>();

    opTypeArr:OpType[] = [];

    /** 时间更新句柄 */
	_handlerTimeUpdate = null;

    protected onInitModuleEvent() {
        this.addModelListener(GameEvent.CLOSE_OPRATION_INFO, this.closeOpInfo);
		
	};

    onLoad () {
        this.updateCodeMap();
	};

    updateCodeMap(){
        this.btnCodeMap.set(OPCode.OPE_PASS, this.guoLayout);
        this.btnCodeMap.set(OPCode.OPE_RIGHT_CHI, this.chiLayout);
        this.btnCodeMap.set(OPCode.OPE_MIDDLE_CHI, this.chiLayout);
        this.btnCodeMap.set(OPCode.OPE_LEFT_CHI, this.chiLayout);
        this.btnCodeMap.set(OPCode.OPE_PENG, this.pengLayout);
        this.btnCodeMap.set(OPCode.OPE_QIANG_PENG, this.pengLayout);
        this.btnCodeMap.set(OPCode.OPE_HU, this.huLayout);
        this.btnCodeMap.set(OPCode.OPE_ZI_MO, this.zimoLayout);
        this.btnCodeMap.set(OPCode.OPE_AN_GANG, this.gangLayout);
        this.btnCodeMap.set(OPCode.OPE_GANG, this.gangLayout);
        this.btnCodeMap.set(OPCode.OPE_BU_GANG, this.gangLayout);


        this.btnSkelMap.set(OPCode.OPE_PASS, "icon_guo");
        this.btnSkelMap.set(OPCode.OPE_RIGHT_CHI, "icon_chi");
        this.btnSkelMap.set(OPCode.OPE_MIDDLE_CHI, "icon_chi");
        this.btnSkelMap.set(OPCode.OPE_LEFT_CHI, "icon_chi");
        this.btnSkelMap.set(OPCode.OPE_PENG, "icon_peng");
        this.btnSkelMap.set(OPCode.OPE_QIANG_PENG, "icon_peng");
        this.btnSkelMap.set(OPCode.OPE_HU, "icon_hu");
        this.btnSkelMap.set(OPCode.OPE_ZI_MO, "icon_zimo");
        this.btnSkelMap.set(OPCode.OPE_AN_GANG, "icon_gang");
        this.btnSkelMap.set(OPCode.OPE_GANG, "icon_gang");
        this.btnSkelMap.set(OPCode.OPE_BU_GANG, "icon_gang");
    }

	/** 开始更新时间 */
	startOperationTime() {
        this.stopSchedulerOnce(this._handlerTimeUpdate);
		this._handlerTimeUpdate = null;
        let timeOut:number = RoomMgr.getInstance().getTimeOut(GameStatus.OPERATION);
        this._handlerTimeUpdate = this.addSchedulerOnce(timeOut, Utils.handler(this, this.resetView))
	}
    

    //点击操作,发送操作code  碰/杠/胡/过
    opClick(opInfo:Common.IOpGroup) {
        let req: Game.ISendOperation = {
            opCard:OperationMgr.getInstance().getPassNumber(),
			opCode:opInfo.opCode,
			opCards:OperationMgr.getInstance().getOprationListNumber(opInfo.opCode,0),
			seatId:OperationMgr.getInstance().seatId,
			userId:OperationMgr.getInstance().userId
        } 
        EventManager.dispatch(GameEvent.SEND_PLAYER_OPERATION, req);
        OperationMgr.getInstance().myOpCode = opInfo.opCode;
        this.resetView();
    }

    closeOpInfo(){
        this.stopSchedulerOnce(this._handlerTimeUpdate);
		this._handlerTimeUpdate = null;
        this.resetView();
    }

    getShowBtn = function (code: number): Layout {
        for (let [opCode, btn] of this.btnCodeMap) {
            if (code == opCode) {
                return btn;
            }
        }
        return null;
    }

    

    updateOpration(resp:Game.IOperation){
        this.resetView();
        //抓牌
        // if(resp.opGroups.length === 1){
        //     return;
        // }
        console.log("updateOpration______________",resp.opGroups);
        this.opTypeArr = [];
        resp.opGroups.forEach((opInfo:Common.IOpGroup) => {
            let layout = this.getShowBtn(opInfo.opCode);
            if (layout) {
                layout.node.active = true;
                let info:OpType = {code:opInfo.opCode,node:layout};
                this.opTypeArr.push(info);
            }
            
            if (layout instanceof Layout) {
                layout.node.active = true;
                var card:Node= layout.node.getChildByName("Card")
                if(card){
                    card.getComponent(Card).setCardByte(OperationMgr.getInstance().getHuNumber());
                }
                let opNode:Node = layout.node.getChildByName("sk");
                this.changeSkin(opInfo.opCode,opNode);
                opNode.off(Node.EventType.TOUCH_END);
                opNode.on(Node.EventType.TOUCH_END, () => {
                    this.opClick(opInfo);
                    EventManager.dispatch(FXJEvent.SYS_PLAY_EFFECT, FXJSound.GameClick);
                }, this);
            }
            
        });
        this.findOpTypesWithSameNodeAndCode(this.opTypeArr);
        this.startOperationTime();
    }

    changeSkin(opcode:number,skNode?:Node){
        let param: inf_SpineAniCreate = {   
            resConf: FXJRes.Spine_op,
            aniName: this.btnSkelMap.get(opcode),
            parentNode: skNode,
            trackIndex: 0,
            isLoop: true, 
            callStartFunc: () => {
            }
        }
        EventManager.dispatch(FXJEvent.SYS_ANI_PLAY, param);
	}

    findOpTypesWithSameNodeAndCode(opTypes: OpType[]) {
        const opTypesMap: Map<string, OpType[]> = new Map();
    
        // 遍历 opTypes 数组，将具有相同 node 和 code 的 OpType 放入映射中
        for (const opType of opTypes) {
            const key = opType.node.name;
            if (!opTypesMap.has(key)) {
                opTypesMap.set(key, []);
            }
            opTypesMap.get(key)?.push(opType);
        }
        var opMap: Map<string, OpType[]> = new Map();
        for (const [key, opTypes] of opTypesMap) {
            if(opTypes.length > 1){
                opMap.set(key, opTypes);
            }else{
                if(OperationMgr.getInstance().isMoreOpration(opTypes[0].code)){
                    opMap.set(key, opTypes);
                }
            }
        }
        // 从映射中提取所有具有相同 node 和 code 的 OpType 数组
        for (const [name, group] of opMap) {
            let node = instantiate(this.CardItemPrefab);
            let cardItem:Carditem = node.getComponent(Carditem);
            cardItem.updateCardItemProp(group);
        }

        this.opBtns.getComponent(Layout).updateLayout();
        
    }

    cleanLayout(){
        let opLayouts:Layout[] = [this.chiLayout,this.pengLayout,this.gangLayout];
        opLayouts.forEach(layout => {
			let childrens = layout.node.children;
            childrens.forEach(child => {
                if(child.name !== "sk"){
                    child.removeFromParent();
                }
            });
		});
    }

    resetView() {
        this.guoLayout.node.active = false;
        this.huLayout.node.active = false;
        this.zimoLayout.node.active = false;
        this.ganghuaLayout.node.active = false;
        this.gangLayout.node.active = false;
        this.pengLayout.node.active = false;
        this.chiLayout.node.active = false;
        this.cleanLayout();
    }
}