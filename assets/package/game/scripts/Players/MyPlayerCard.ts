
import { animation, Animation, AnimationClip, EventTouch, instantiate, Node, Tween, Vec3, _decorator } from 'cc';
import { GCache } from '../../../../cache/GCache';
import { EventManager } from '../../../../framework/manager/EventManager';
import { Utils } from '../../../../framework/Utils';
import { BaseComponent } from '../../../../framework/vc/BaseComponent';
import { OperationMgr } from '../../cache/OperationMgr';
import { OperationResultMgr } from '../../cache/OperationResultMgr';
import { PlayerMgr } from '../../cache/PlayerMgr';
import { OPCode } from '../../common/FXJConfig';
import { FXJEvent } from '../../common/FXJEvent';
import { FXJSound } from '../../common/FXJSound';
import { GameEvent } from '../../common/GameEvent';
import { Game } from '../../common/idl/Game';
import { CardUtil } from '../../util/CardUtil';
import { NodeCardCtr } from '../NodeCardCtr';
import { drawCardDisRatio, MjSize } from './CardConfigs';
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
 
@ccclass('MyPlayerCard')
export class MyPlayerCard extends BaseComponent {
	public selectedNode: Node | null = null;
	
    public _drawCardNode: Node | null = null;

	public	_mjList:Node[] = [];
	
	private myHandCardY: number = 0;

	// 手牌模板
	@property({ tooltip: "手牌模板", type: Node })
	private nodeCardTemplate: Node | null = null;

	_slotIndex: number;
	private _drawByte: number;

	_playHandCardCb: any;

    private _isTouched: boolean;

    public _touchNode: Node | null = null;

    private moveDistance: number = 0; // 阈值距离，用于判断是否出牌
    private thresholdDistance: number = 0.5; // 阈值距离，用于判断是否出牌
    private startPosition = new Vec3(); // 初始点击位置
    private touchNodePos = new Vec3();
	get drawByte(): number {
		return this._drawByte;
	}

	set drawByte(newValue: number) {
		this._drawByte = newValue;
	}
	/** override 初始化模块事件 */
	protected onInitModuleEvent() {

	};
    onLoad() {
        this.node.on(Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.node.on(Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        this.node.on(Node.EventType.TOUCH_END, this.onTouchEnd, this);
        this.node.on(Node.EventType.TOUCH_CANCEL, this.onTouchCancel, this);
    }
   
	//移除对应的索引的牌去构成stack, 刷新整体node的位置
	stackAnim(indexList: number[], tByte?: number, insertIndex?: number, cb?:any) {
		let pos = new Vec3();
		if(indexList.length === 2){
            this.removeHandCard(indexList,true);
			//碰牌直接移除两张牌, 刷新位置
			pos = this.node.getPosition();
			// Vec3.add(pos, new Vec3(0, 0, 0), new Vec3(0, 0, 0));
			this.node.setPosition(pos);
		}else if (indexList.length == 3){
            this.removeHandCard(indexList,true);
			//杠牌直接移除三张牌, 刷新位置
			pos = this.node.getPosition();
            // Vec3.add(pos, new Vec3(0, 0, 0), new Vec3(0, 0, 0));
            this.node.setPosition(pos);
            return
		}else if (indexList.length == 4 && insertIndex!==null){
            insertIndex = insertIndex - indexList.length;
            this.removeHandCard(indexList);
			this.removeDrawCard();
            this.addHandCard(tByte, insertIndex);
            pos = this.node.getPosition();
            // Vec3.add(pos, new Vec3(0, 0, 0), new Vec3(0, 0, 0));
            this.node.setPosition(pos);
            return
		}
        /*
		//吃碰时候移除两张,平移一张到抽牌区 
        let startPos = pos;
        let endPos = new Vec3();
        Vec3.add(endPos, startPos, startPos) 
        
        let ac = new AnimationClip()
        ac.duration = 0.1
        let track = new animation.VectorTrack();
        track.componentsCount = 3;
        track.path = new animation.TrackPath().toProperty("position")
        let [x] = track.channels();
       
        x.curve.assignSorted([
            [0, {value: startPos.x}],
            [0.1, {value: endPos.x}]
        ])

        let animCom: Animation;

        if (this.node.getComponent(Animation) == null)
        {
            animCom = this.node.addComponent(Animation)
        }
        else
        {
            animCom = this.node.getComponent(Animation)
            animCom.removeAll(Animation.EventType.FINISHED)
        } 

        if(cb)
        {
            animCom.on(Animation.EventType.FINISHED, cb, this)
            // this._stackCb = cb
        }

        ac.addTrack(track)
        animCom.defaultClip = ac
        animCom.play(); 
        */

        
        this._drawCardNode = this._mjList.pop();
        this._drawCardNode .name = "drawCardNode";
        this.drawByte =  PlayerMgr.getInstance().getLastMyhands();
        
        let startPosDraw = this._drawCardNode.getPosition();
        let endPosDraw = new Vec3(startPosDraw.x + MjSize.width, startPosDraw.y, startPosDraw.z)
        this._drawCardNode.setPosition(endPosDraw);
        
        let acDraw = new AnimationClip()
        acDraw.duration = 0.1
        let trackDraw = new animation.VectorTrack();
        trackDraw.componentsCount = 3;
        trackDraw.path = new animation.TrackPath().toProperty("position")
        let [drawX] = trackDraw.channels();
       
        drawX.curve.assignSorted([
            [0, {value: startPosDraw.x}],
            [0.1, {value: endPosDraw.x}]
        ])
        
        let animDrawCom: Animation;

        if (this._drawCardNode.getComponent(Animation) == null)
        {
            animDrawCom = this._drawCardNode.addComponent(Animation)
        }
        else
        {
            animDrawCom = this._drawCardNode.getComponent(Animation)
            animDrawCom.removeAll(Animation.EventType.FINISHED)
        }

        if(cb)
        {  
            animDrawCom.on(Animation.EventType.FINISHED, cb, this)
            // this._stackCb = cb
        }

        acDraw.addTrack(trackDraw)
        animDrawCom.defaultClip = acDraw
        animDrawCom.play(); 
        
	}

	//移除一张手牌, 没有动画时的接口, 未来会使用动画接口出牌
    removeDrawCard() {
        if (this._drawCardNode) {
            this._drawCardNode.removeFromParent();
            this._drawCardNode = null;
        }
        else {
            console.log("当前没有渲染牌,无法移除")
        }
    }
	//添加一张牌到手牌的指定位置
	addHandCard(tByte: number, index: number) {

        if (index > this._mjList.length) {
            console.log("索引大于当前渲染手牌的数量请检查逻辑", index)
            return;
        }

        if (this._mjList.length >= 13) {
            console.log("当前渲染手牌数量已满--> 13", index)
            return;
        } 

		let insertNode = instantiate(this.nodeCardTemplate)
		let cardValue = tByte;
		insertNode.getComponent(NodeCardCtr).setCardByte(cardValue);
		insertNode.active = true;        
        insertNode.name = "MJBlock" + index

        this.node.addChild(insertNode)
		this._mjList.splice(index, 0, insertNode); // 在指定索引处插入对象

        this.updateHandPositionAndName()
    }

	//抓一张牌
    drawCard(tByte: number,hiden?:boolean) {
		this.drawByte = tByte;
		this._drawCardNode = instantiate(this.nodeCardTemplate)
		this._drawCardNode.getComponent(NodeCardCtr).setCardByte(tByte);
		this._drawCardNode.active = true;
		this.node.addChild(this._drawCardNode);
        this.cardAddTouchEvent(this._drawCardNode);
		this._drawCardNode.setPosition(this.getLastPosition() + drawCardDisRatio * MjSize.width, 0, 0)
        if(hiden){
            this._drawCardNode.setRotationFromEuler(90, 0, 0);
        }
	}

    showDrawCard(){
        let duration = 0.3;
        let rotaionEuler = new Vec3(this._drawCardNode.eulerAngles);
        let pos = new Vec3(this._drawCardNode.getPosition());
        let point = new Vec3(pos.x, 0,
            0);
        let tweenTargetVec3 = new Vec3(0, 0, 0);
        let tw = new Tween(tweenTargetVec3)
            .by(duration, new Vec3(0, 0, 0), {
                onUpdate: (target: Vec3, ratio: number) => {
                    Utils.rotate3DAroundByPositionRotaion(this._drawCardNode, pos, rotaionEuler, point, target, true)
                }
            })
            .by(duration, new Vec3(-90, 0, 0), {
                onUpdate: (target: Vec3, ratio: number) => {
                    Utils.rotate3DAroundByPositionRotaion(this._drawCardNode, pos, rotaionEuler, point, target, true)
                }
            })
            .start();
    }

	updateHandPositionAndName(hiden?:boolean){
        this._mjList = this._mjList.filter(item => item !== null && item !== undefined);
		for (let i = 0; i < this._mjList.length; i++) {
            let handNode = this._mjList[i]
            handNode.name = "MJBlock" + i;
            handNode.getComponent(NodeCardCtr).setCardByte(PlayerMgr.getInstance().getHandCardByIndex(i));
            this.cardAddTouchEvent(handNode);
            handNode.setPosition(MjSize.width / 2 + MjSize.width * i, 0, 0);
            if(hiden){
                handNode.setRotationFromEuler(90, 0, 0);
            }
        }
	}
    
    playAnimOfShow() {
        let duration = 0.3;
        for (let i = 0; i < this._mjList.length; i++) {
            let rotaionEuler = new Vec3(this._mjList[i].eulerAngles);
            let pos = new Vec3(this._mjList[i].getPosition());
            let point = new Vec3(pos.x, 0,
                0);

            let tweenTargetVec3 = new Vec3(0, 0, 0);
            let tw = new Tween(tweenTargetVec3)
                .by(duration, new Vec3(0, 0, 0), {
                    onUpdate: (target: Vec3, ratio: number) => {
                        Utils.rotate3DAroundByPositionRotaion(this._mjList[i], pos, rotaionEuler, point, target, true)
                    }
                })
                .by(duration, new Vec3(-90, 0, 0), {
                    onUpdate: (target: Vec3, ratio: number) => {
                        Utils.rotate3DAroundByPositionRotaion(this._mjList[i], pos, rotaionEuler, point, target, true)
                    }
                })
                .start();
        }
        if(this._drawCardNode){
            this.showDrawCard();
        }
    }
    showdownDrawCard(){
        let duration = 0.3;
        let rotaionEuler = new Vec3(this._drawCardNode.eulerAngles);
        let pos = new Vec3(this._drawCardNode.getPosition());
        let point = new Vec3(pos.x, 0,
            0);
        let tweenTargetVec3 = new Vec3(0, 0, 0);
        let tw = new Tween(tweenTargetVec3)
            .by(duration, new Vec3(-90, 0, 0), {
                onUpdate: (target: Vec3, ratio: number) => {
                    Utils.rotate3DAroundByPositionRotaion(this._drawCardNode, pos, rotaionEuler, point, target, true)
                }
            })
            .start();
    }

    showdownCard() {
        let duration = 0.3;
        for (let i = 0; i < this._mjList.length; i++) {
            let rotaionEuler = new Vec3(this._mjList[i].eulerAngles);
            let pos = new Vec3(this._mjList[i].getPosition());
            let point = new Vec3(pos.x, 0,
                0);
            let tweenTargetVec3 = new Vec3(0, 0, 0);
            let tw = new Tween(tweenTargetVec3)
                .by(duration, new Vec3(-90, 0, 0), {
                    onUpdate: (target: Vec3, ratio: number) => {
                        Utils.rotate3DAroundByPositionRotaion(this._mjList[i], pos, rotaionEuler, point, target, true)
                    }
                })
                .start();
        }
        if(this._drawCardNode){
            this.showdownDrawCard();
        }
    }

    cardAddTouchEvent(handNode?:Node){
        // handNode.off(Node.EventType.TOUCH_END);
        handNode.off(Node.EventType.TOUCH_START);
        handNode.on(Node.EventType.TOUCH_START, (event) => {
            this._touchNode = event.target
            this.touchNodePos = this._touchNode.getPosition();
        }, this);
        // handNode.on(Node.EventType.TOUCH_END, (event) => {
            // this.playSelectAnim(event.target);
        // }, this);
    }

    cancelOpcardTouch(opcard?:number){
        this._mjList = this._mjList.filter(item => item !== null && item !== undefined);
        let inList = false;
		for (let i = 0; i < this._mjList.length; i++) {
            let handNode = this._mjList[i]
            let byte:number = handNode.getComponent(NodeCardCtr).byte;
            if(CardUtil.getMajiangValue(byte) === CardUtil.getMajiangValue(opcard)){
                handNode.off(Node.EventType.TOUCH_START);
                handNode.getComponent(NodeCardCtr).setBlack(true);
                inList = true;
                break;
            }
        }
        if(!inList && PlayerMgr.getInstance().includesMyhands(OperationResultMgr.getInstance().opCard)){
            this._drawCardNode.off(Node.EventType.TOUCH_START);
            this._drawCardNode.getComponent(NodeCardCtr).setBlack(true);
        }
         
    }
    updateOpcardTouch(){
        this._mjList = this._mjList.filter(item => item !== null && item !== undefined);
		for (let i = 0; i < this._mjList.length; i++) {
            let handNode = this._mjList[i];
            this.cardAddTouchEvent(handNode);
            handNode.getComponent(NodeCardCtr).setBlack(false);
        }  
    }
    
    onTouchStart(event: EventTouch) {
        this._isTouched = true;
        if(this._touchNode === null){
            return;
        }
        let location = event.getLocation();
        this.startPosition = new Vec3(location.x,location.y,0)
    }

    onTouchMove(event: EventTouch) {
        this._isTouched = true;
        if(this._touchNode === null){
            return;
        }
        let pos = this._touchNode.getPosition();
        let location = event.getDelta();
        Vec3.add(pos,pos,new Vec3(location.x,location.y,0));
        this._touchNode.setPosition(pos);
        let endPos = this._touchNode.getPosition();
        this.moveDistance = endPos.subtract(this.touchNodePos).length();
    }
    onTouchEnd(event: EventTouch) {
        if(this._touchNode === null){
            return;
        }
        // if (this.moveDistance  > this.thresholdDistance && GCache.Desk.turnMe) {
            // 出牌
            // let byte:number = this._touchNode.getComponent(NodeCardCtr).byte;
            // this.onSendCard(byte);
            
        // } else {
            // 放回原处
            // if(this._touchNode){
            //     let posx = this.getSelectNodePosx(this._touchNode);
            //     this._touchNode.setPosition(posx,0,0);
            // }
        // }
        this.playSelectAnim(this._touchNode);
        this._touchNode = null;
        this._isTouched = false;
        this.moveDistance = 0;
    }

    onTouchCancel(event: EventTouch) {
        if(this._touchNode === null){
            return;
            
        }
        let posx = this.getSelectNodePosx(this._touchNode);
        this._touchNode.setPosition(posx,0,0);
        this._touchNode = null;
        this._isTouched = false;
        this.moveDistance = 0;
    }

    //将抓上来的牌打出去
    playDrawCard( cb?: any){
        let toOutCard = this._drawCardNode;
        toOutCard.removeFromParent();
        this._drawCardNode = null;        
    }
	playCardFromHandAnim(index: number,rmDraw?:boolean,cb?: any):boolean {
		this._slotIndex = index;

        let toOutCard = this._mjList[index]
        if (Utils.isNotNull(toOutCard) && rmDraw === false){
            this._mjList[index] = null
            toOutCard.removeFromParent();
            return true;
        }else if(Utils.isNotNull(this._drawCardNode) || rmDraw === true){
            this._drawCardNode.removeFromParent();
            this._drawCardNode = null;   
            return false;
        }
	}
	
	//从手牌移除指定位置的一张或者多张牌，并且出牌之后，如果抓牌未移除，需要把抓的牌放到手牌中，抓牌为空
    removeHandCard(indexList: number[], updateCard: boolean = false) {
		indexList.sort((a, b) => b - a)
		
		for (let index of indexList) { 
            if (index < this._mjList.length) {  
                let removeNode = this._mjList.splice(index, 1);
                removeNode[0].removeFromParent();
            } 
            else {
                console.log("索引大于等于当前渲染手牌的数量请检查逻辑", index)
                return;
            }
        }   
        if (updateCard)
        {
            this.updateHandPositionAndName()
        }

	}

	makeSlotAnim(index: number)
    {
        if (this._slotIndex == -1 || this._mjList[this._slotIndex] != null)
        {
            console.log("当前没有空的手牌位置,无法空出对应的索引位置", this._slotIndex, index)

            return;
        }

        if (this._slotIndex < index) // 2空  4
        {
			for (let i = this._slotIndex + 1; i <= index; i++)
            {
                let ac = new AnimationClip()
                ac.duration = 0.2
                let track = new animation.VectorTrack();
                track.componentsCount = 3;
                track.path = new animation.TrackPath().toProperty("position")
                let [x, _, z] = track.channels();
                let mjNode = this._mjList[i];
                let startPos = mjNode.getPosition() ;
                let endPos = this.getHandPosition(i - 1);
                
                x.curve.assignSorted([
                    [0, {value: startPos.x}],
                    [0.2, {value: endPos.x}]
                ])

                z.curve.assignSorted([
                    [0, {value: startPos.z}],
                    [0.2, {value: endPos.z}]
                ])

                let animCom = mjNode.addComponent(Animation)
                ac.addTrack(track)
                animCom.defaultClip = ac
                animCom.play(); 
            }

            for (let i = this._slotIndex; i < index; i++)
            {
                this._mjList[i] = this._mjList[i + 1] // 同步平移在列表内的位置
            }
        }
        else if(index < this._slotIndex) // 2  4空
        {

			for (let i = index; i < this._slotIndex; i++)
            {
                let ac = new AnimationClip() 
                ac.duration = 0.2
                let track = new animation.VectorTrack();
                track.componentsCount = 3;
                track.path = new animation.TrackPath().toProperty("position")
                let [x, _, z] = track.channels();
                let mjNode = this._mjList[i];
                let startPos = mjNode.getPosition() ;
                let endPos = this.getHandPosition(i + 1);

                x.curve.assignSorted([
                    [0, {value: startPos.x}], 
                    [0.2, {value: endPos.x}]
                ])

                z.curve.assignSorted([
                    [0, {value: startPos.z}],
                    [0.2, {value: endPos.z}]
                ])

                let animCom = mjNode.addComponent(Animation)
                ac.addTrack(track)
                animCom.defaultClip = ac
                animCom.play(); 
            }

            for (let i = this._slotIndex; i > index; i--)
            {
                this._mjList[i] = this._mjList[i - 1] // 同步平移在列表内的位置
            }
        }  
        this._mjList[index] = null //平移后空出来的列表位置
        this._slotIndex = index
    }

	
	drawCardToSlot(cb?: any){
		if (this._drawCardNode == null)
        {
            console.log("没有渲染抽牌节点, 抽牌到手牌动画失败")
            return;
        }

		this._mjList[this._slotIndex] = this._drawCardNode
        this._drawCardNode = null
        let startPos = this._mjList[this._slotIndex].getPosition()
        let endPos = this.getHandPosition(this._slotIndex)

        const ac = new AnimationClip();  

        ac.duration = 0.5
        
        const track = new animation.VectorTrack();
        track.componentsCount = 3;
        track.path = new animation.TrackPath().toProperty("position")
        const [posx, posy, posz] = (track as animation.VectorTrack).channels();
        posx.curve.assignSorted([
            [0, {easingMethod : 2, value: startPos.x}], 
            [0.1, {easingMethod : 2, value: startPos.x}], 
            [0.4, {easingMethod : 2, value: endPos.x}],
            [0.5, {easingMethod : 2, value: endPos.x}]
        ]);
        posy.curve.assignSorted([
            [0, {easingMethod : 2, value: startPos.y}], 
            [0.1, {easingMethod : 2, value: startPos.y + 20}], 
            [0.4, {easingMethod : 2, value: startPos.y + 20}], 
            [0.5, {easingMethod : 2, value: endPos.y}]
        ]);
        posz.curve.assignSorted([
            [0, {easingMethod : 2, value: startPos.z}], 
            [0.1, {easingMethod : 2, value: startPos.z - 3.5}], 
            [0.4,{easingMethod : 2, value:  startPos.z - 3.5}],
            [0.5,{easingMethod : 2, value:  endPos.z}]
        ]);

        let animCom: Animation;

        if (this._mjList[this._slotIndex].getComponent(Animation) == null)
        {
            animCom = this._mjList[this._slotIndex].addComponent(Animation)
        }
        else
        {
            animCom = this._mjList[this._slotIndex].getComponent(Animation)
            animCom.removeAll(Animation.EventType.FINISHED)
        }

        if(cb)
        {
            animCom.on(Animation.EventType.FINISHED, cb, this)
            this._playHandCardCb = cb
        }

        ac.addTrack(track)

        animCom.defaultClip = ac

        animCom.play()
		
	}


	getListBytes():number[]{
		let bytes:number[] = [];
		for (let i = 0; i < this._mjList.length; i++) {
			let node_byte: number = this._mjList[i].getComponent(NodeCardCtr).byte;
			bytes.push(node_byte);
		}
		return bytes;
	}

	useByteFindIndexs(bytes:number[]):number[]{
		let indexs:number[] = [];

		bytes.forEach((byte) => {
			for (let i = 0; i < this._mjList.length; i++) {
				let node_byte: number = this._mjList[i].getComponent(NodeCardCtr).byte;
				if(byte === node_byte){
					indexs.push(i);
					break;
				}
			}
		})
		return indexs;
	}

	getNodeIndex(node: Node)
    {
        return this._mjList.findIndex(theNode => theNode == node, this);
    }

	addHandCards(valueList: number[], active: boolean, stackCount?: number, hasDrawCard: boolean = false)
    {
		let handCardCount =  valueList.length;
        
        if (hasDrawCard)
        {
            handCardCount = valueList.length - 1
        }

		for (let i = 0; i < handCardCount; i++)
        { 
			let mjNode = instantiate(this.nodeCardTemplate)
			let cardValue = valueList[i]
			mjNode.getComponent(NodeCardCtr).setCardByte(cardValue);
			mjNode.active = true;
			this._mjList.push(mjNode);
			this.node.addChild(mjNode);
		}
		this.updateHandPositionAndName(true);
		if (hasDrawCard)
        {
            this.drawCard(valueList[handCardCount],true)
            this._drawCardNode.active = active
        }

	}

	getHandPosition(index: number){
		return new Vec3(MjSize.width / 2 + MjSize.width * index, 0, 0)
	}

    getHandPositionX(index: number){
		return MjSize.width / 2 + MjSize.width * index
	}
	
    getLastPosition():number{
		return MjSize.width / 2 + MjSize.width * (this._mjList.length - 1);
	}

    getSelectNodePosx(node: Node):number{
        let posx = 0;
        if(node.name && node.name.includes("MJBlock")){
            posx = this.getHandPositionX(parseInt(node.name.replace("MJBlock", "")));
        }else{
            posx =  this.getLastPosition() + drawCardDisRatio * MjSize.width;
            // posx =  this._drawCardNode.getPosition().x
        }
        return posx;
    }

	playSelectAnim(node: Node){
		if(this.selectedNode){
			this.playUnselectAnim(this.selectedNode);
			if(this.selectedNode == node){
                if(GCache.Desk.turnMe){
                    let byte:number = this.selectedNode.getComponent(NodeCardCtr).byte;
                    this.onSendCard(byte);
                }
				this.selectedNode = null;
				return;
			}
		}

		this.selectedNode = node
        console.log(this.selectedNode,node)
        let posx = this.getSelectNodePosx(this.selectedNode);
        
        const ac = new AnimationClip();  

        ac.duration = 0.1

        const trackPos = new animation.VectorTrack();
        trackPos.componentsCount = 3;
        trackPos.path = new animation.TrackPath().toProperty("position")
        const [x, y, z] = (trackPos as animation.VectorTrack).channels();
        x.curve.assignSorted([
            [0, {easingMethod : 2, value: posx}], 
            [0.1, {easingMethod : 2, value: posx}]
        ]);
        y.curve.assignSorted([
            [0, {easingMethod : 2, value: 0}], 
            [0.1, {easingMethod : 2, value: 20}]
        ]);
        // z.curve.assignSorted([
        //     [0, {easingMethod : 2, value: startPos.z}], 
        //     [0.1,{easingMethod : 2, value:  startPos.z - 0.8}]
        // ]);

        let animCom: Animation;

        if (this.selectedNode.getComponent(Animation) == null)
        {
            animCom = this.selectedNode.addComponent(Animation)
        }
        else
        {
            animCom = this.selectedNode.getComponent(Animation)
            animCom.removeAll(Animation.EventType.FINISHED)
            
            
        }
        EventManager.dispatch(FXJEvent.SYS_PLAY_EFFECT, FXJSound.GameTiPai);
        ac.addTrack(trackPos)

        animCom.defaultClip = ac

        animCom.play()
	}
	playUnselectAnim(node: Node){
        let startPos = this.selectedNode.getPosition()
		const ac = new AnimationClip();  

        ac.duration = 0.1 
        let posx = this.getSelectNodePosx(this.selectedNode);
        const trackPos = new animation.VectorTrack();
        trackPos.componentsCount = 3;
        trackPos.path = new animation.TrackPath().toProperty("position")
        const [x, y, z] = (trackPos as animation.VectorTrack).channels();
        x.curve.assignSorted([
            [0, {easingMethod : 2, value: posx}], 
            [0.1, {easingMethod : 2, value: posx}]
        ]);
        y.curve.assignSorted([
            [0, {easingMethod : 2, value: 20}], 
            [0.1, {easingMethod : 2, value: 0}]
        ]);
        // z.curve.assignSorted([ 
        //     [0, {easingMethod : 2, value: startPos.z}], 
        //     [0.1,{easingMethod : 2, value:  startPos.z + 0.8}]
        // ]); 

        let animCom: Animation;

        if (node.getComponent(Animation) == null)
        {
            animCom = node.addComponent(Animation)
        }
        else
        {
            animCom = node.getComponent(Animation)
            animCom.removeAll(Animation.EventType.FINISHED)
        }

        ac.addTrack(trackPos)

        animCom.defaultClip = ac

        animCom.play()
	}

	//出牌
	onSendCard(byte:number){
		let index:number = OperationMgr.getInstance().getSendCardIndex(byte);
        let req: Game.ISendOperation = {
            opCard:byte,
			opCode:OPCode.OPE_OUT_CARD,
			opCards:[byte],
			seatId:OperationMgr.getInstance().seatId,
			userId:OperationMgr.getInstance().userId
            
        }
        EventManager.dispatch(GameEvent.SEND_PLAYER_OPERATION, req);
	}

	//游戏开始或结束，清空手牌区，包括抓牌，保持初始状态
    resetView() {
        this.node.removeAllChildren();
        this._mjList = [];
        this._drawCardNode = null;
        // this.initNodePos();
    }
}

