
import { _decorator, instantiate, Node, tween } from 'cc';
import { EventManager } from '../../../framework/manager/EventManager';
import { Utils } from '../../../framework/Utils';
import { BaseComponent } from '../../../framework/vc/BaseComponent';
import { RoomMgr } from '../cache/RoomMgr';
import { FXJEvent } from '../common/FXJEvent';
import { GameRuleConfig } from '../common/GameRuleConfig';
import { GameViewConfig } from '../common/GameViewConfig';
import { Game } from '../common/idl/Game';
import { CardUtil } from '../util/CardUtil';
import { NodeCardCtr } from './NodeCardCtr';
const { ccclass, property } = _decorator;

/**
 * Name = NodeHuCardCtr
 * URL = db://assets/package/game/scripts/NodeHuCardCtr.ts
 * Time = Tue Aug 15 2023 18:54:40 GMT+0800 (中国标准时间)
 * Author = harvyson
 *
 * Life: onLoad-->onInitModuleEvent-->onEnable->start->update->lateUpdate->onDisable->onDestroy
 * 
 */
 
@ccclass('NodeHuCardCtr')
export class NodeHuCardCtr extends BaseComponent {
	/** 牌节点 */
    @property({ tooltip: "牌节点", type: Node })
    private nodeCard: Node = null;

    /** 本家方位 */
    private _hostDir: number = 0;
    /** 麻将位置列表 */
    private _seatList: Node[] = null;

    /** 手牌比例 */
    private _scale: number = 0;
    /** 手牌宽度 */
    private _width: number = 0;
    /** 手牌高度 */
    private _height: number = 0;
    /** 手牌厚度 */
    private _thickness: number = 0;
    /** 手牌与桌子的距离 */
    private _groundToCard: number = 0;
    
	/** override 初始化模块事件 */
	protected onInitModuleEvent() {

	};
	
	onLoad () {
        this.initData()
        this.initView()
	};


	start () {

	};

    initData() {
        
    }
	
	initView () {
        let scale = GameViewConfig.CardConfig.ScaleHuCard;
        let width = GameViewConfig.CardConfig.Width * scale;
        let height = GameViewConfig.CardConfig.Height * scale;
        let thickness = GameViewConfig.CardConfig.Thickness * scale;
        let groundToCard = GameViewConfig.CardConfig.GroundToCard * scale;
        
        this._scale = scale;
        this._width = width;
        this._height = height;
        this._thickness = thickness;
        this._groundToCard = groundToCard;

        this._seatList = new Array(4);
        for (let dir = 0; dir < this._seatList.length; dir++) {
            let node = new Node();
            this.node.addChild(node);
            node.setRotationFromEuler(0, 90*dir, 0);
            this._seatList[dir] = node;
        }
	};
	
	updateView () {

	};
	
	resetView() {
        this._hostDir = RoomMgr.getInstance().mySeatId - 1;

        this._seatList.forEach((value, index, array) => {
            value.removeAllChildren();
        });
    }

    /** 游戏开始 */
    onGameStart() {
        this.resetView();
    }

    /** 换位 */
    OnChangedSeat(hostDir: number) {
        this._hostDir = hostDir;
    }

    /** 胡牌 */
    onHu(data: Game.IOperationResult) {
        let dir = data.seatId - 1;
        let card = data.opCard;
        this.showHuCard(dir, card, false);
    }

    private showHuCard(dir: number, cardNumber: number, isReconnect: boolean) {
        let node = this._seatList[dir];
        if (node.children.length >= GameRuleConfig.CardHuNum) {
            console.log("NodeHuCardCtr.showHuCard", "胡牌数量超过最大限制", node.children.length, GameRuleConfig.CardHuNum);
            return;
        }

        let who = CardUtil.calculatePlayerPosition(this._hostDir + 1, dir + 1);
        if (who == "上家" || who == "下家") { // 上下家
            tween(this.node)
                .delay(isReconnect ? 0 : 0.5)
                .call(() => {
                    this.pushCardB(dir, cardNumber, isReconnect);
                })
                .start();
        } else {
            tween(this.node)
                .delay(isReconnect ? 0 : 0.5)
                .call(() => {
                    this.pushCardA(dir, cardNumber, isReconnect);
                })
                .start();

        }
    }

    // 共一排，一层4个
    private pushCardA(dir: number, cardNumber: number, isReconnect: boolean) {
        let scale = this._scale;
        let width = this._width;
        let thickness = this._thickness;
        let groundToCard = this._groundToCard;
        
        let length = this._seatList[dir].children.length;
        let row = Math.floor( length / 4);
        let col = length % 4 + 1;
        let distance = GameViewConfig.CardConfig.CenterToHuCard;
        let card = instantiate(this.nodeCard);
        card.setScale(card.scale.x * scale, card.scale.y * scale, card.scale.z * scale);
        let x = GameViewConfig.CardConfig.CenterToHuCardX + (width + GameViewConfig.CardConfig.SpaceHuCard) * col;
        let y = groundToCard + row * thickness;
        card.setPosition(x, y, distance);
        card.setRotationFromEuler(0, 0, 0);
        card.active = true;
        card.getComponent(NodeCardCtr).setCardByte(cardNumber);
        this._seatList[dir].addChild(card);

        this.showHuAnim(dir, card, isReconnect);

    }

    // 共2排，1排2个，1层4个
    private pushCardB(dir: number, cardNumber: number, isReconnect: boolean) {
        let scale = this._scale;
        let width = this._width;
        let height = this._height;
        let thickness = this._thickness;
        let groundToCard = this._groundToCard;

        let length = this._seatList[dir].children.length;
        let row = Math.floor( length / 4);
        let col = length % 4 + 1;
        let distance = GameViewConfig.CardConfig.CenterToHuCard;
        let card = instantiate(this.nodeCard);
        card.setScale(card.scale.x * scale, card.scale.y * scale, card.scale.z * scale);
        let y = groundToCard + row * thickness;
        let who = CardUtil.calculatePlayerPosition(this._hostDir + 1, dir + 1);
        if (who == "下家") {
            distance += 10;
        }

        if (col == 1 || col == 2) {
            let x = GameViewConfig.CardConfig.CenterToHuCardX + (width + GameViewConfig.CardConfig.SpaceHuCard) * col;
            card.setPosition(x, y, distance);
        } else {
            let x = GameViewConfig.CardConfig.CenterToHuCardX + (width + GameViewConfig.CardConfig.SpaceHuCard) * (col - 2);
            card.setPosition(x, y, distance + height);
        }

        card.setRotationFromEuler(0, 0, 0);
        card.active = true;
        card.getComponent(NodeCardCtr).setCardByte(cardNumber);
        this._seatList[dir].addChild(card);

        this.showHuAnim(dir, card, isReconnect);
    }

    private showHuAnim(dir: number, cardNode: Node, isReconnect: boolean) {
        if (!isReconnect) {
            let data: GameViewConfig.AnimConfig = {
                seatId : dir + 1,
                aniType : GameViewConfig.AnimType.Hu,
                pos : cardNode.getWorldPosition(),
            }
            EventManager.dispatch(FXJEvent.VIEW_UI_3D_GET_CAMERA, FXJEvent.VIEW_OUT_CARD_ANI_PLAY, data);
        }
    }

    private getWho(dir: number, dirOut: number) {
        let a = dir; // 自己位置
        let b = dirOut; // 待查位置
        let x = ((b + 4) - a) % 4
        return x;
    }

    /** 游戏结束 */
    onGameOver(data: Game.IHandCards) {
        
    }

    /** 重连 */
    onReconnect(data: GameViewConfig.ReconnectConfig) {
        this.resetView();

        data.playerList.forEach((value, index, array) => {
            let dir = value.seatId - 1;
            let isHu = value.isHu;
            let cards = value.huCard;
            if (isHu && Utils.isNotNull(cards) && cards > 0) {
                this.showHuCard(dir, cards, true);
            }
        });
    }

    //销毁
    onDestroy() {
    };

    log(...args: any[]) {
        console.log(this.name, args);
    }

}

