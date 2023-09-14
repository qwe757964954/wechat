
import { Node, Vec3, _decorator, instantiate, tween } from 'cc';
import { BaseComponent } from '../../../framework/vc/BaseComponent';
import { RoomMgr } from '../cache/RoomMgr';
import { GameRuleConfig } from '../common/GameRuleConfig';
import { GameViewConfig } from '../common/GameViewConfig';
import { Game } from '../common/idl/Game';
const { ccclass, property } = _decorator;

/**
 * Name = NodeWallCtr
 * URL = db://assets/package/game/scripts/NodeWallCtr.ts
 * Time = Mon Aug 14 2023 12:08:03 GMT+0800 (中国标准时间)
 * Author = harvyson
 *
 * Life: onLoad-->onInitModuleEvent-->onEnable->start->update->lateUpdate->onDisable->onDestroy
 * 
 */

@ccclass('NodeWallCtr')
export class NodeWallCtr extends BaseComponent {
    /** 牌节点 */
    @property({ tooltip: "牌节点", type: Node })
    private nodeCard: Node = null;

    /** 升降台节点1 */
    @property({ tooltip: "升降台节点1", type: Node })
    private nodeDeskLift1: Node = null;

    /** 升降台节点2 */
    @property({ tooltip: "升降台节点2", type: Node })
    private nodeDeskLift2: Node = null;

    /** 升降台节点3 */
    @property({ tooltip: "升降台节点3", type: Node })
    private nodeDeskLift3: Node = null;

    /** 升降台节点4 */
    @property({ tooltip: "升降台节点4", type: Node })
    private nodeDeskLift4: Node = null;

    /** 牌墙节点 */
    private _nodeWall: Node = null;

    /** 牌墙状态 */
    private _wallStatus: GameViewConfig.WallStatus = GameViewConfig.WallStatus.Top;

    /** 正向拿牌，当前下标 */
    private _headIndex: number = -1;

    /** 反向拿牌下标 */
    private _tailIndex: number = -1;

    /** 剩余牌数 */
    private _remian: number = 0;

    /** 杠牌数 */
    private _gangCount: number = 0;

    /** 牌墙列表：东南西北*/
    private _wallList: Node[] = null;

    /** 牌数列表：东南西北 */
    private _numList: number[] = null;

    /** 升降台节点列表 */
    private _nodeDeskLiftList: Node[] = null;

    /** 本家方位 */
    private _hostDir: number = 0;

    /** override 初始化模块事件 */
    protected onInitModuleEvent() {
    };

    onLoad() {
        this.initData()
        this.initView()
    };


    start() {

    };

    /** 初始化数据 */
    initData() {
        let cardTotalNum = GameRuleConfig.CardTotalNum;

        this._wallList = new Array(cardTotalNum)
        this._numList = new Array(4)

        let total = cardTotalNum / 2;
        let a = Math.floor(total / 4);

        for (let i = 0; i < 4; i++) {
            this._numList[i] = a * 2;
        }
        console.log("NodeWallCtr.initData", this._numList)

    };

    /** 初始化界面 */
    initView() {
        this._nodeWall = new Node();
        this.node.addChild(this._nodeWall);

        this._nodeDeskLiftList = [this.nodeDeskLift1, this.nodeDeskLift2, this.nodeDeskLift3, this.nodeDeskLift4]

        let scale = GameViewConfig.CardConfig.ScaleWallCard;
        let width = GameViewConfig.CardConfig.Width * scale;
        let height = GameViewConfig.CardConfig.Height * scale;
        let thickness = GameViewConfig.CardConfig.Thickness * scale;
        let groundHeight = GameViewConfig.CardConfig.GroundToCard * scale;
        let distance = GameViewConfig.CardConfig.CenterToWallCard;
        // mark：待优化
        let indexWall = 0;
        for (let dir = 4 - 1; dir >= 0; dir--) {
            let size = this._numList[dir] / 2;
            let cardList: Node[] = new Array(size);
            let start = -((width * size) * 0.5) + width * 0.5;
            let index = 0;
            for (let i = this._numList[dir] / 2 - 1; i >= 0; i--) {
                for (let j = 0; j < 2; j++) {
                    let card = instantiate(this.nodeCard);
                    this._nodeWall.addChild(card);

                    // 东南西北
                    if (dir == 0) {
                        card.setRotationFromEuler(0, 0, 180)
                        card.setPosition(start + i * width, groundHeight + thickness * j, distance)
                    } else if (dir == 1) {
                        card.setRotationFromEuler(0, 90, 180)
                        card.setPosition(distance, groundHeight + thickness * j, start + i * width)
                    } else if (dir == 2) {
                        card.setRotationFromEuler(0, 0, 180)
                        card.setPosition(start + i * width, groundHeight + thickness * j, -distance)
                    } else if (dir == 3) {
                        card.setRotationFromEuler(0, 90, 180)
                        card.setPosition(-distance, groundHeight + thickness * j, start + i * width)
                    }
                    cardList[index++] = card;
                }
            }

            console.log("NodeWallCtr.initView", "cardList.length", cardList.length);

            if (dir == 0 || dir == 3) {
                for (let i = 0; i < cardList.length; i += 2) {
                    this._wallList[indexWall++] = cardList[i + 1];
                    this._wallList[indexWall++] = cardList[i];
                }
            } else if (dir == 1 || dir == 2) {
                for (let i = cardList.length - 1; i > 0; i -= 2) {
                    this._wallList[indexWall++] = cardList[i];
                    this._wallList[indexWall++] = cardList[i - 1];
                }
            }
        }
        console.log("NodeWallCtr.initView", "this._wallList.length", this._wallList.length);
    };

    /** 更新界面 */
    updateView() {

    };

    /** 重置界面 */
    resetView() {
        this._hostDir = RoomMgr.getInstance().mySeatId - 1;
        this.updateViewDir();

        this._wallStatus = GameViewConfig.WallStatus.Top;
        this._headIndex = -1;
        this._tailIndex = -1;
        this._remian = this._wallList.length;
        this._gangCount = 0;
        for (let i = 0; i < this._wallList.length; i++) {
            let node = this._wallList[i];
            node.active = true;
        }

        let pos = this._nodeWall.getPosition();
        this._nodeWall.setPosition(pos.x, 0, pos.z)
        this._nodeWall.active = false;

        for (let i = 0; i < this._nodeDeskLiftList.length; i++) {
            let node = this._nodeDeskLiftList[i]
            let pos = node.getPosition();
            node.setPosition(pos.x, 0, pos.z)
        }
    };

    /** 上升初始化 */
    private riseUpInit() {
        if (this._wallStatus != GameViewConfig.WallStatus.Top) {
            console.log("prepareRiseUp", "error", this._wallStatus);
            return;
        }

        let riseupHeight = 8;

        let pos = this._nodeWall.getPosition();
        this._nodeWall.setPosition(pos.x, pos.y - riseupHeight, pos.z)
        this._nodeWall.active = true;

        for (let i = 0; i < this._nodeDeskLiftList.length; i++) {
            let node = this._nodeDeskLiftList[i]
            let pos = node.getPosition();
            node.setPosition(pos.x, pos.y - riseupHeight / 100, pos.z)
        }

        this._wallStatus = GameViewConfig.WallStatus.Bottom;
    }

    /** 上升 */
    private riseUp() {
        if (this._wallStatus != GameViewConfig.WallStatus.Bottom) {
            console.log("prepareRiseUp", "error", this._wallStatus);
            return;
        }

        let riseupHeight = 8;
        let pos = this._nodeWall.getPosition();
        tween(this._nodeWall)
            .to(1.6, { position: new Vec3(pos.x, pos.y + riseupHeight, pos.z) })
            .call(() => {
                if (this._wallStatus != GameViewConfig.WallStatus.Top) {
                    this._wallStatus = GameViewConfig.WallStatus.Top;
                }
            })
            .start();

        for (let i = 0; i < this._nodeDeskLiftList.length; i++) {
            let node = this._nodeDeskLiftList[i]
            let pos = node.getPosition();
            tween(node)
                .to(1.6, { position: new Vec3(pos.x, pos.y + riseupHeight / 100, pos.z) })
                .start();
        }

        this._wallStatus = GameViewConfig.WallStatus.Moving;
    }

    /** 开始游戏 */
    onGameStart() {
        this.resetView();

        this.riseUpInit();
        this.riseUp()
    }

    /** 换位 */
    OnChangedSeat(hostDir: number) {
        this._hostDir = hostDir;
        this.updateViewDir(); // 换位需要旋转牌桌升降台
    }

    private updateViewDir() {
        this._nodeDeskLiftList.forEach((value, index, array) => {
            value.setRotationFromEuler(0, 90 * this._hostDir, 0); // 为了保留桌子水印，反向旋转桌子
        });
    }

    /** 摇色子 */
    onRollDices(data: Game.IRollDice) {
        this.changeHeadAndTail(data.diceInfo[0].seatId, data.diceInfo[0].dices);
    }


    /**
     * 根据色子点数确定牌墙的起止点
     * 以庄家为起点1，逆时针方向数。5、9在自己这方；2、6、10在下家方；3、7、11在对家方；4、8、12在上家方。
     * 看小的点数的骰子确定保留几列，如果是3点，就顺时针数，从第4列开始起牌。
     */
    private changeHeadAndTail(bankerSeatId: number, diceList: number[]) {
        console.log("NodeWallCtr.changeHeadAndTail", "bankerSeatId", bankerSeatId, "diceList", diceList);

        let num = diceList[0] + diceList[1];
        let min = Math.min(diceList[0] + diceList[1])
        if (num < 2 || num > 12) {
            console.log("NodeWallCtr.changeHeadAndTail", "骰子数值非法", diceList);
            return;
        }

        console.log("NodeWallCtr.changeHeadAndTail", "num", num, "min", min);

        let startSeatId = 0;
        if (num == 5 || num == 9) { // 庄家
            startSeatId = bankerSeatId;
        } else if (num == 2 || num == 6 || num == 10) { // 庄家下家
            startSeatId = bankerSeatId + 1;
        } else if (num == 3 || num == 7 || num == 11) { // 庄家对家
            startSeatId = bankerSeatId + 2;
        } else if (num == 4 || num == 8 || num == 12) { // 庄家上家
            startSeatId = bankerSeatId + 3;
        }
        if (startSeatId > 4) {
            startSeatId = startSeatId - 4;
        }

        console.log("NodeWallCtr.changeHeadAndTail", "startSeatId", startSeatId)

        if (startSeatId == 4) { // 北
            this._tailIndex = min * 2 - 1;
        } else if (startSeatId == 3) { // 西
            this._tailIndex = this._numList[2] + min * 2 - 1;
        } else if (startSeatId == 2) { // 南
            this._tailIndex = this._numList[2] + this._numList[1] + min * 2 - 1;
        } else if (startSeatId == 1) { // 东
            this._tailIndex = this._numList[2] + this._numList[1] + this._numList[0] + min * 2 - 1;
        }

        this._headIndex = this._tailIndex + 1;
        console.log("NodeWallCtr.changeHeadAndTail", this._headIndex, this._tailIndex)
    }

    /** 发牌 */
    onDealCard(data: Game.IDealCard) {
        let count = 0;

        for (let i = 0; i < data.cardsCount.length; i++) {
            count += data.cardsCount[i];
        }

        for (let i = 0; i < count; i++) {
            this.takeOneCard();
        }

    }

    /** 抓牌 */
    onTakeCard(data: any) {
        if (this._remian <= data.remian) {
            console.log("NodeWallCtr.onTakeCard", "牌桌剩余牌数太少");
            return;
        }

        if (data.gangCount > this._gangCount) {
            for (let i = 0; i < data.gangCount - this._gangCount; i++) {
                this.takeOneCardFromTail();
            }
        }

        if (this._remian > data.remian) {
            for (let i = 0; i < this._remian - data.remian; i++) {
                this.takeOneCard();
            }
        }
    }

    /** 抓牌 */
    private takeOneCard() {
        if (!this.hasHead()) {
            console.log("NodeWallCtr.takeOneCard", "牌墙没有起点");
            return;
        }

        if (this.isEmpty()) {
            console.log("NodeWallCtr.takeOneCard", "牌墙已空");
            return;
        }

        if (this._wallList[this._headIndex]) {
            this._wallList[this._headIndex].active = false;
            this._headIndex++;
            if (this._headIndex > this._wallList.length - 1) {
                this._headIndex = 0;
            }
            this._remian = this._remian - 1
        }
    }

    // /** 抓牌墩 */
    // private takeFourCard() {
    //     if (!this.hasHead()) {
    //         console.log("NodeWallCtr.takeOneCard", "牌墙没有起点");
    //         return;
    //     }

    //     if (this.isEmpty()) {
    //         console.log("NodeWallCtr.takeOneCard", "牌墙已空");
    //         return;
    //     }

    //     for (let i = 0; i < 4; i++) {
    //         if (this._wallList[this._headIndex]) {
    //             this._wallList[this._headIndex].active = false;
    //             this._headIndex++;
    //             if (this._headIndex > this._wallList.length - 1) {
    //                 this._headIndex = 0;
    //             }
    //             this._remian = this._remian - 1
    //         }
    //     }
    // }

    /** 杠后从牌墙尾拿牌 */
    private takeOneCardFromTail() {
        if (!this.hasHead()) {
            console.log("NodeWallCtr.takeOneCard", "牌墙没有起点");
            return;
        }

        if (this.isEmpty()) {
            console.log("NodeWallCtr.takeOneCard", "牌墙已空");
            return;
        }

        let index = this._tailIndex;
        if ((index + 1) % 2 == 0) {
            index--;
            if (this._wallList[index]) {
                this._wallList[index].active = false;
            }
        } else {
            index++;
            if (this._wallList[index]) {
                this._wallList[index].active = false;
            }
        }

        this._tailIndex--;
        if (this._tailIndex < 0) {
            this._tailIndex = this._wallList.length - 1;
        }
        this._gangCount++;
        this._remian--;
    }

    private hasHead() {
        return this._headIndex >= 0 && this._tailIndex >= 0;
    }

    private isEmpty() {
        return this._remian <= 0;
    }

    /** 游戏结束 */
    onGameOver(data: Game.IHandCards) {
    }

    /** 重连 */
    onReconnect(data: GameViewConfig.ReconnectConfig) {
        this.resetView();

        let dices = data.dices;
        let bankSeatId  = data.bankSeatId;
        let gangCount = data.gangCount;
        let remain = data.remain;

        this.changeHeadAndTail(bankSeatId, dices)

        this._wallList.forEach((value, index, array) => {
            value.active = true;
        });

        for (let i = 0; i < this._wallList.length - remain; i++) {
            this.takeOneCard()
        }

        for (let i = 0; i < gangCount; i++) {
            this.takeOneCardFromTail()
        }

        this._nodeWall.active = true;
    }


    //销毁
    onDestroy() {

    };

}


