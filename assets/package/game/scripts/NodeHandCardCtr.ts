
import { Node, Tween, Vec3, _decorator, instantiate, tween } from 'cc';
import { Utils } from '../../../framework/Utils';
import { EventManager } from '../../../framework/manager/EventManager';
import { BaseComponent } from '../../../framework/vc/BaseComponent';
import { RoomMgr } from '../cache/RoomMgr';
import { OPCode } from '../common/FXJConfig';
import { FXJEvent } from '../common/FXJEvent';
import { FXJSound } from '../common/FXJSound';
import { GameViewConfig } from '../common/GameViewConfig';
import { Game } from '../common/idl/Game';
import { NodeCardCtr } from './NodeCardCtr';
const { ccclass, property } = _decorator;

/**
 * Name = NodeHandCardCtr
 * URL = db://assets/package/game/scripts/NodeHandCardCtr.ts
 * Time = Mon Aug 14 2023 12:07:20 GMT+0800 (中国标准时间)
 * Author = harvyson
 *
 * Life: onLoad-->onInitModuleEvent-->onEnable->start->update->lateUpdate->onDisable->onDestroy
 * 
 */

@ccclass('NodeHandCardCtr')
export class NodeHandCardCtr extends BaseComponent {
    /** 牌节点 */
    @property({ tooltip: "牌节点", type: Node })
    private nodeCard: Node = null;

    /** 本家方位 */
    private _hostDir: number = 0;
    /** 麻将数量列表 */
    private _numList: number[] = null;
    /** 麻将位置列表 */
    private _seatList: Node[][] = null;
    /** 麻将动画Target列表 */
    private _seatListTarget: Vec3[][] = null;
    /** 手牌开始位置 */
    private _cardStart: number = 0;
    /** 最后一张手牌间隔 */
    private _spaceLast: number = 0;
    /** 手牌宽度 */
    private _width: number = 0;
    /** 手牌高度 */
    private _height: number = 0;
    /** 手牌厚度 */
    private _thickness: number = 0;
    /** 手牌与桌子的距离 */
    private _groundToCard: number = 0;

    /** 手牌状态 */
    private _cardStatus: GameViewConfig.HandCardStatus = GameViewConfig.HandCardStatus.Idle;


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
        this._seatListTarget = [[], [], [], []];
    }

    initView() {
        let num = 14;
        let scale = GameViewConfig.CardConfig.ScaleHandCard;
        let width = GameViewConfig.CardConfig.Width * scale;
        let height = GameViewConfig.CardConfig.Height * scale;
        let thickness = GameViewConfig.CardConfig.Thickness * scale;
        let groundToCard = GameViewConfig.CardConfig.GroundToHandCard * scale;
        let spaceLast = width * 0.5; // 行牌玩家新拿的一张牌，放在最右侧，并与其他牌保持一定距离
        let start = (width * num) / 2 + spaceLast - width / 2;

        this._cardStart = start;
        this._spaceLast = spaceLast;
        this._width = width;
        this._height = height;
        this._thickness = thickness;
        this._groundToCard = groundToCard;

        for (let dir = 0; dir < 4; dir++) {
            // 每个方向的手牌设定一个父节点，方便管理
            let nodeSeat = new Node();
            nodeSeat.setRotationFromEuler(0, 90 * dir, 0);
            this.node.addChild(nodeSeat);

            // 四个方向的手牌都以东方向为基础方向，旋转父节点分别对应到四个方向
            // 以东为基础方向后，二维坐标系，向右为x轴正方向，向上为y轴正方向
            this._seatList[dir] = [];
            for (let i = 0; i < num; i++) {
                let leftToRight = -start + i * width;
                if (i == num) {
                    leftToRight += spaceLast;
                }
                let card = instantiate(this.nodeCard);
                card.setScale(card.scale.x * scale, card.scale.y * scale, card.scale.z * scale);
                card.setPosition(leftToRight, groundToCard, GameViewConfig.CardConfig.CenterToHandCard);
                card.setRotationFromEuler(90, 0, 0);
                nodeSeat.addChild(card);
                this._seatList[dir].push(card);
            }
        }
    }

    resetView() {
        this._hostDir = RoomMgr.getInstance().mySeatId - 1;

        for (let dir = 0; dir < this._seatListTarget.length; dir++) {
            let targets = this._seatListTarget[dir];
            for (let i = 0; i < targets.length; i++) {
                Tween.stopAllByTarget(targets[i]);
            }
        }

        // 清空所有手牌
        for (let dir = 0; dir < this._seatList.length; dir++) {
            let cards = this._seatList[dir];
            for (let i = 0; i < cards.length; i++) {
                cards[i].active = false;
                Tween.stopAllByTarget(cards[i]);

                cards[i].setRotationFromEuler(90, 0, 0);
                let pos = cards[i].getPosition();
                cards[i].setPosition(pos.x, this._groundToCard, GameViewConfig.CardConfig.CenterToHandCard)
            }
        }

        this._numList = [0, 0, 0, 0];

        this._seatListTarget = [[], [], [], []];

        this._cardStatus = GameViewConfig.HandCardStatus.Idle;
    }

    /** 游戏开始 */
    onGameStart() {
        this.resetView();
    }

    /** 换位 */
    OnChangedSeat(hostDir: number) {
        this._hostDir = hostDir; // 换位需要重置手牌（本家不显示手牌）
    }

    /** 发牌 */
    onDealCard(data: Game.IDealCard) {
        this.dealCard(data.cardsCount);
        this.playAnimOfSort();
    }

    /** 发牌处理 */
    private dealCard(countList: number[]) {
        if (Utils.isNull(this._hostDir) || this._hostDir < 0 || this._hostDir >= 4) {
            console.log("NodeHandCardCtr.dealCard", "本家座位号无效");
            return;
        }

        for (let dir = 0; dir < this._seatList.length; dir++) {
            let num = countList[dir];
            let cards = this._seatList[dir];
            for (let i = 0; i < cards.length; i++) {
                if (dir == this._hostDir) {
                    cards[i].active = false;
                } else {
                    cards[i].active = (i + 1) <= num;
                }
            }
            this._numList[dir] = dir == this._hostDir ? 0 : num;
            this.adjustPosition(dir)
        }
    }

    /** 调整手牌的位置 */
    private adjustPosition(dir: number, offset: number = 0) {
        let num = this._numList[dir];
        let cards = this._seatList[dir];
        for (let i = 0; i < num; i++) {
            let leftToRight = -this._cardStart + i * this._width;
            if (i == (num - 1) && this.turnToMe(num)) {
                leftToRight += this._spaceLast;
            }
            let card = cards[i];
            let pos = card.getPosition();
            card.setPosition(leftToRight, this._groundToCard, GameViewConfig.CardConfig.CenterToHandCard + offset);
        }
    }

    /** 是否轮到我出牌 */
    private turnToMe(cardNum: number) {
        return cardNum % 3 == 2
    }

    /** 触发手牌排序动画 */
    private playAnimOfSort() {
        if (this._cardStatus != GameViewConfig.HandCardStatus.Idle) {
            return;
        }
        let t1 = 0.25;
        let t2 = 0.25;

        for (let dir = 0; dir < this._seatList.length; dir++) {
            this.playAnimOfSortByDir(dir, t1, t2)
        }
        this._cardStatus = GameViewConfig.HandCardStatus.Sort;
        tween(this.node)
            .delay(t1 + t2 + 0.01)
            .call(() => {
                this._cardStatus = GameViewConfig.HandCardStatus.Idle;
                for (let dir = 0; dir < this._seatList.length; dir++) {
                    let cards = this._seatList[dir];
                    for (let i = 0; i < cards.length; i++) {
                        cards[i].setRotationFromEuler(90, 0, 0);
                    }
                }
            })
            .start();
        EventManager.dispatch(FXJEvent.SYS_PLAY_EFFECT, FXJSound.GameAdjust);
    }

    /** 播放整理牌的动画 */
    private playAnimOfSortByDir(dir: number, t1: number, t2: number) {
        let targets = this._seatListTarget[dir];
        for (let i = 0; i < targets.length; i++) {
            Tween.stopAllByTarget(targets[i]);
        }
        this._seatListTarget[dir] = [];

        let num = this._numList[dir];
        let cards = this._seatList[dir];
        for (let i = 0; i < cards.length; i++) {
            if ((i + 1) > num) {
                break;
            }
            // 沿麻将牌面下边缘旋转，转到牌面向下后再转回原位置
            let rotaionEuler = new Vec3(cards[i].eulerAngles);
            let pos = new Vec3(cards[i].getPosition());
            let point = new Vec3(pos.x, 0,
                pos.z + this._thickness - GameViewConfig.CardConfig.GroundToCard);

            let tweenTargetVec3 = new Vec3(0, 0, 0);
            let tw = new Tween(tweenTargetVec3)
                .by(t1, new Vec3(90, 0, 0), {
                    onUpdate: (target: Vec3, ratio: number) => {
                        Utils.rotate3DAroundByPositionRotaion(cards[i], pos, rotaionEuler, point, target, true)
                    }
                })
                .by(t2, new Vec3(-90, 0, 0), {
                    onUpdate: (target: Vec3, ratio: number) => {
                        Utils.rotate3DAroundByPositionRotaion(cards[i], pos, rotaionEuler, point, target, true)
                    }
                })
                .start();

            this._seatListTarget[dir].push(tweenTargetVec3);
        }
    }

    /** 抓牌 */
    onTakeCard(data: any) {
        if (Utils.isNull(data.seatId) || data.seatId < 1 || data.seatId > 4) {
            console.log("NodeHandCardCtr.onTakeCard", "座位号错误");
            return;
        }


        let dir = data.seatId - 1;
        this.takeCard(dir);
    }

    /** 抓牌 */
    private takeCard(dir: number) {

        if (this._hostDir == dir) {
            return;
        }

        if (this._cardStatus != GameViewConfig.HandCardStatus.Idle) {
            return;
        }

        if (this.turnToMe(this._numList[dir])) {
            console.log("NodeHandCardCtr.takeCard", "手牌数量异常，可能未正常移除", "dir", dir);
        }

        let cards = this._seatList[dir];
        let num = this._numList[dir] + 1;
        console.log("NodeHandCardCtr.takeCard", "dir", dir, "num", num);
        if (num > cards.length) {
            console.log("NodeHandCardCtr.takeCard", "手牌数量太多", "dir", dir);
            return;
        }
        cards[num - 1].active = true;
        this._numList[dir] = num;
        this.adjustPosition(dir);
    }

    /** 出牌 */
    onOutCard(data: Game.IOperationResult) {
        let dir = data.seatId - 1;

        if (!this.turnToMe(this._numList[dir])) {
            console.log("NodeHandCardCtr.takeCard", "手牌数量异常，可能未正常拿牌", "dir", dir);
            this.adjustPosition(dir);
            return;
        }

        this.outCardAny(dir, 1)
    }

    /** 出牌或碰杠(一般用于正常出牌、碰或杠) */
    private outCardAny(dir: number, count: number) {
        console.log("NodeHandCardCtr.outCardAny", "dir", dir, "count", count);
        console.log("NodeHandCardCtr.outCardAny", "numList", this._numList);
        if (this._hostDir == dir) {
            return;
        }

        if (this._cardStatus != GameViewConfig.HandCardStatus.Idle) {
            return;
        }

        this.adjustPosition(dir);

        let luckyNum = Math.floor(Math.random() * 100);
        if (luckyNum % 2 == 1) {
            this.simpleOutCardAny(dir, count);
        } else {
            this.normalOutCardAny(dir, count);
        }

    }

    /** 简单出牌，直接丢出最右侧的牌 */
    private simpleOutCardAny(dir: number, count: number) {
        console.log("NodeHandCardCtr.simpleOutCardAny");
        let num = this._numList[dir];
        if (num < count) {
            return;
        }

        let cards = this._seatList[dir];
        for (let i = 0; i < count; i++) {
            cards[num - 1].active = false;
            num--;
        }
        this._numList[dir] = num;
    }

    /** 
     * 模拟真实出牌，从中间打出一张，然后将最右侧的牌插入到空槽 
     * 1. [已实现] 直接打出新拿的牌，无需整理
     * 2. [已实现] 从手牌中抽出一张打出，然后空槽右侧牌全部向左推，整理完成
     * 3. [未实现] 从手牌中抽出一张打出，最右侧新拿的牌直接插入空槽，整理完成
     * 4. [未实现] 从手牌中抽出一张打出，中间一部分牌向左或向右移动，产生另一个空槽，再将最右侧新拿的牌插入空槽，整理完成
     * */
    private normalOutCardAny(dir: number, count: number) {
        console.log("NodeHandCardCtr.normalOutCardAny begin", this._numList[dir]);
        let num = this._numList[dir];
        if (num < count) {
            return;
        }

        let a = count;
        let b = num - 1;
        let luckyNum = Math.min(Math.floor(Math.random() * (b + 1 - a) + a), b);

        let cards = this._seatList[dir];

        let removeNodeList = cards.splice(luckyNum - count, count);
        removeNodeList.forEach((value, index, array) => {
            value.active = false;
        });

        for (let i = 0; i < removeNodeList.length; i++) {
            cards.push(removeNodeList[i]);
        }

        num -= count;
        this._numList[dir] = num;

        console.log("NodeHandCardCtr.normalOutCardAny end", this._numList[dir]);
        //
        for (let i = 0; i < num; i++) {
            let pos = cards[i].getPosition();
            // 使用动画移动到目标位置
            let x = - this._cardStart + i * this._width;
            if (i == (num - 1) && (num % 3 == 2)) {
                x += this._spaceLast;
            }
            tween(cards[i])
                .to(0.06 * count, { position: new Vec3(x, pos.y, pos.z) })
                .start();
        }
    }

    /** 碰杠 */
    onPengGang(data: Game.IOperationResult) {
        let dir = data.seatId - 1;
        switch (data.opCode) {
            case OPCode.OPE_PENG: // 碰
            case OPCode.OPE_QIANG_PENG: // 抢碰
                this.outCardAny(dir, 2);
                break;
            case OPCode.OPE_AN_GANG: // 暗杠
                this.outCardAny(dir, 1);
                break;
            case OPCode.OPE_GANG: // 杠
                this.outCardAny(dir, 3);
                break;
            case OPCode.OPE_BU_GANG: // 补杠
                this.outCardAny(dir, 4);
                break;
            default:
                break;
        }
    }

    /** 胡牌 */
    onHu(data: Game.IOperationResult) {
        let dir = data.cardSeatId - 1;

        if (!this.turnToMe(this._numList[dir])) {
            // 手里是否有一张未打出的牌，有则移除
            return;
        }
        this.outCardAny(dir, 1);
    }

    /** 游戏结束 */
    onGameOver(data: Game.IHandCards) {
        for (let i = 0; i < data.handCards.length; i++) {
            let dir = i;
            let cards = data.handCards[i].handCards;
            if (cards.length > 14) {
                console.log("NodeHandCardCtr.onGameOver", "手牌数据异常", cards);
                return;
            }

            // 重置手牌数据
            this._numList[dir] = cards.length;
            let nodes = this._seatList[dir];
            for (let j = 0; j < nodes.length; j++) {
                if (j < cards.length) {
                    nodes[j].active = true;
                    nodes[j].getComponent(NodeCardCtr).setCardByte(cards[j]);
                } else {
                    nodes[j].active = false;
                }
            }
            this.adjustPosition(dir, this._thickness * 0.5)

            if (this.turnToMe(this._numList[dir])) {
                this.simpleOutCardAny(dir, 1);
            }
        }

        this.playAnimOfShow()
    }

    /** 触发亮牌动画 */
    private playAnimOfShow() {
        if (this._cardStatus != GameViewConfig.HandCardStatus.Idle) {
            return;
        }

        let duration = 0.3;
        for (let dir = 0; dir < this._seatList.length; dir++) {
            let cards = this._seatList[dir];
            let num = this._numList[dir];
            for (let i = 0; i < cards.length; i++) {
                if (i + 1 > num) {
                    break;
                }

                let rotaionEuler = new Vec3(cards[i].eulerAngles);
                let pos = new Vec3(cards[i].getPosition());
                let point = new Vec3(pos.x, 0,
                    pos.z - GameViewConfig.CardConfig.GroundToCard);

                let tweenTargetVec3 = new Vec3(0, 0, 0);
                let tw = new Tween(tweenTargetVec3)
                    .by(duration, new Vec3(-90, 0, 0), {
                        onUpdate: (target: Vec3, ratio: number) => {
                            Utils.rotate3DAroundByPositionRotaion(cards[i], pos, rotaionEuler, point, target, true)
                        }
                    })
                    .start();

                this._seatListTarget[dir].push(tweenTargetVec3)
            }
        }

        this._cardStatus = GameViewConfig.HandCardStatus.Show;
        tween(this.node)
            .delay(duration + 0.01)
            .call(() => {
                this._cardStatus = GameViewConfig.HandCardStatus.Over;
            })
            .start();
    }

    /** 重连 */
    onReconnect(data: GameViewConfig.ReconnectConfig) {
        this.resetView();

        let cardsCount = [0, 0, 0, 0];
        data.playerList.forEach((value, index, array) => {
            cardsCount[value.seatId - 1] = value.handCards.length;
        })

        this.dealCard(cardsCount);

        for (let dir = 0; dir < this._seatList.length; dir++) { 
            this.adjustPosition(dir)
        }
    }

    //销毁
    onDestroy() {
        this.resetView()
    };
}


