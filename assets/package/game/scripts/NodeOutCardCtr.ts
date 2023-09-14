
import { Node, Tween, Vec3, _decorator, instantiate, tween } from 'cc';
import { Utils } from '../../../framework/Utils';
import { EventManager } from '../../../framework/manager/EventManager';
import { BaseComponent } from '../../../framework/vc/BaseComponent';
import { FXJEvent } from '../common/FXJEvent';
import { GameViewConfig } from '../common/GameViewConfig';
import { Game } from '../common/idl/Game';
import { NodeCardCtr } from './NodeCardCtr';
const { ccclass, property } = _decorator;

/**
 * Name = NodeOutCardCtr
 * URL = db://assets/package/game/scripts/NodeOutCardCtr.ts
 * Time = Mon Aug 14 2023 12:07:51 GMT+0800 (中国标准时间)
 * Author = harvyson
 *
 * Life: onLoad-->onInitModuleEvent-->onEnable->start->update->lateUpdate->onDisable->onDestroy
 * 
 */

@ccclass('NodeOutCardCtr')
export class NodeOutCardCtr extends BaseComponent {
    /** 牌节点 */
    @property({ tooltip: "牌节点", type: Node })
    private nodeCard: Node = null;

    /** 箭头节点 */
    @property({ tooltip: "箭头节点", type: Node })
    private nodeArrow: Node = null;

    /** 麻将数量列表 */
    private _numList: number[] = null;
    /** 麻将位置列表 */
    private _seatList: Node[][] = null;
    /** 箭头初始位置 */
    private _offsetArrow: Vec3 = null;

    /** override 初始化模块事件 */
    protected onInitModuleEvent() {
    };

    onLoad() {
        this.initData()
        this.initView()
    };


    start() {

    }

    initData() {
        this._numList = [0, 0, 0, 0];
        this._seatList = new Array(4);
    }

    initView() {
        let scale = GameViewConfig.CardConfig.ScaleOutCard;
        let width = GameViewConfig.CardConfig.Width * scale;
        let height = GameViewConfig.CardConfig.Height * scale;
        let groundToCard = GameViewConfig.CardConfig.GroundToCard * scale;
        
        let indexStart = (width * 6 + GameViewConfig.CardConfig.SpaceOutCard * (6 - 1)) / 2
            - width / 2 - 2 // 往右2米。这里-2
        let distance = GameViewConfig.CardConfig.CenterToOutCard;
        for (let dir = 0; dir < 4; dir++) {
            // 每个方向的手牌设定一个父节点，方便管理
            let nodeSeat = new Node();
            nodeSeat.setRotationFromEuler(0, 90 * dir, 0);
            this.node.addChild(nodeSeat);

            this._seatList[dir] = [];
            for (let i = 0; i < 18; i++) {
                let length = this._seatList[dir].length;
                let layer = Math.floor(length / 6);
                let index = length % 6;
                let distanceFromCenter = distance + ((layer - 1) * height); // 离桌面中心的垂直距离
                let leftToRight = -indexStart + index * (width + GameViewConfig.CardConfig.SpaceOutCard); // 指定层的第index张牌的位置
                let card = instantiate(this.nodeCard);
                card.setScale(card.scale.x * scale, card.scale.y * scale, card.scale.z * scale);
                card.setPosition(leftToRight, groundToCard, distanceFromCenter);
                nodeSeat.addChild(card);
                this._seatList[dir].push(card);
            }

            // 超过18张的地方
            for (let i = 0; i < 9; i++) {
                let length = this._seatList[dir].length;
                let layer = Math.ceil((i + 1) / 3);
                let index = length % 3;
                let distanceFromCenter = distance + ((layer - 2) * height); // 离桌面中心的垂直距离
                let leftToRight = -indexStart + 6 * width + 1 + index * (width + GameViewConfig.CardConfig.SpaceOutCard); // 指定层的第index张牌的位置
                let card = instantiate(this.nodeCard);
                card.setScale(card.scale.x * scale, card.scale.y * scale, card.scale.z * scale);
                card.setPosition(leftToRight, groundToCard, distanceFromCenter);
                nodeSeat.addChild(card);
                this._seatList[dir].push(card);
            }
        }

        this.nodeArrow.setPosition(0, -4.5, 0);
        let pos = this.nodeArrow.getPosition();
        this._offsetArrow = new Vec3(pos.x, pos.y + groundToCard, pos.z);
        this.nodeArrow.setPosition(this._offsetArrow);
    }

    resetView() {
        for (let dir = 0; dir < this._seatList.length; dir++) {
            let cards = this._seatList[dir];
            for (let i = 0; i < cards.length; i++) {
                cards[i].active = false;
            }
        }

        this._numList = [0, 0, 0, 0];

        this.nodeArrow.active = false;
    }

    /** 游戏开始 */
    onGameStart() {
        this.resetView();
    }

    /** 换位 */
    OnChangedSeat(hostDir: number) {
        // 换位不影响出牌
    }

    /** 出牌 */
    onOutCard(data: Game.IOperationResult) {
        let dir = data.seatId - 1;
        this.showCard(dir, data.opCard);
    }

    private showCard(dir: number, cardNumber: number) {
        let cardList = this._seatList[dir];
        let num = this._numList[dir] + 1;
        if (num > cardList.length) {
            console.log("NodeOutCardCtr.showCard", "出牌数量已超上限", "num", num);
            return;
        }

        let index = num - 1;
        cardList[index].active = true;
        cardList[index].getComponent(NodeCardCtr).setCardByte(cardNumber);
        let pos = cardList[index].getPosition();
        this.nodeArrow.active = true;
        Tween.stopAllByTarget(this.nodeArrow);
        this.nodeArrow.setPosition(pos.x + this._offsetArrow.x, this._offsetArrow.y, pos.z + this._offsetArrow.z)
        Utils.rotate3DAround(this.nodeArrow, new Vec3(0, 0, 0), new Vec3(0, 90 * dir, 0), false)
        let moveTween = tween(this.nodeArrow)
            .by(0.6, { position: new Vec3(0, 1, 0) })
            .by(0.6, { position: new Vec3(0, -1, 0) })

        tween(this.nodeArrow)
            .repeatForever(moveTween)
            .start();
        this._numList[dir] = num;
    }

    private hideCard(dir: number, cardNumber: number, showAnim: boolean) {
        let cardList = this._seatList[dir];
        let num = this._numList[dir];
        if (num < 1) {
            return;
        }

        let index = num - 1;
        if (showAnim) {
            // 胡牌动画
            let data: GameViewConfig.AnimConfig = {
                seatId : dir + 1,
                aniType : GameViewConfig.AnimType.Hu2,
                pos : cardList[index].getWorldPosition(),
            }
            EventManager.dispatch(FXJEvent.VIEW_UI_3D_GET_CAMERA, FXJEvent.VIEW_OUT_CARD_ANI_PLAY, data);

            let huTime = 0.5
            tween(this.node)
                .delay(huTime)
                .call(() => {
                    cardList[index].active = false;
                    this.nodeArrow.active = false;
                    this._numList[dir] = index;
                })
                .start();
        } else {
            cardList[index].active = false;
            this.nodeArrow.active = false;
            this._numList[dir] = index;
        }
    }

    /** 碰杠 */
    onPengGang(data: Game.IOperationResult) {
        let dir = data.cardSeatId - 1;
        this.hideCard(dir, data.opCard, false);
    }

    /** 胡牌 */
    onHu(data: Game.IOperationResult) {
        if (data.cardSeatId == data.seatId) {
            console.log("NodeOutCardCtr.onHu", "自摸不需要移除牌");
            return;
        }

        let dir = data.cardSeatId - 1;
        this.hideCard(dir, data.opCard, true);
    }

    /** 游戏结束 */
    onGameOver(data: Game.IHandCards) {
    }

    /** 重连 */
    onReconnect(data: GameViewConfig.ReconnectConfig) {
        this.resetView();

        data.playerList.forEach((value, index, array) => {
            let dir = value.seatId - 1;
            let cards = value.outCards;
            if (!Utils.table_isEmpty(cards)) {
                for (let i = 0; i < cards.length; i++) { 
                    if (Utils.isNotNull(cards[i].status) && cards[i].status != 1) {
                        this.showCard(dir, cards[i].card);
                    }
                    
                }
            }
        });
    }

    //销毁
    onDestroy() {
        Tween.stopAllByTarget(this.nodeArrow);
    };

}


