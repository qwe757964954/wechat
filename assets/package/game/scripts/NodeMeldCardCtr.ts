
import { _decorator, instantiate, Node, Vec3 } from 'cc';
import { EventManager } from '../../../framework/manager/EventManager';
import { Utils } from '../../../framework/Utils';
import { BaseComponent } from '../../../framework/vc/BaseComponent';
import { RoomMgr } from '../cache/RoomMgr';
import { OPCode } from '../common/FXJConfig';
import { FXJEvent } from '../common/FXJEvent';
import { GameViewConfig } from '../common/GameViewConfig';
import { Game } from '../common/idl/Game';
import { CardUtil } from '../util/CardUtil';
import { NodeCardCtr } from './NodeCardCtr';
const { ccclass, property } = _decorator;

/**
 * Name = NodeMeldCardCtr
 * URL = db://assets/package/game/scripts/NodeMeldCardCtr.ts
 * Time = Mon Aug 14 2023 12:07:38 GMT+0800 (中国标准时间)
 * Author = harvyson
 *
 * Life: onLoad-->onInitModuleEvent-->onEnable->start->update->lateUpdate->onDisable->onDestroy
 * 
 */

@ccclass('NodeMeldCardCtr')
export class NodeMeldCardCtr extends BaseComponent {
    /** 牌节点 */
    @property({ tooltip: "牌节点", type: Node })
    private nodeCard: Node = null;

    /** 本家方位 */
    private _hostDir: number = 0;
    /** 麻将位置列表 */
    private _seatList: Node[] = null;

    /** 麻将节点列表 */
    private _dataList: GameViewConfig.MeldSeatConfig[][] = null;

    /** 麻将与麻将桌边缘距离列表 */
    private _edgeList: number[] = null;

    /** 麻将与麻将桌中心距离列表 */
    private _distanceList: number[] = null;

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

    onLoad() {
        this.initData()
        this.initView()
    };


    start() {

    }

    initData() {
        this._seatList = new Array(4);
        this._dataList = [[], [], [], []];
        this._edgeList = [0, 0, 0, 0];
        this._distanceList = [0, 0, 0, 0];

    }

    initView() {
        let scale = GameViewConfig.CardConfig.ScaleMeldCard;
        let width = GameViewConfig.CardConfig.Width * scale;
        let height = GameViewConfig.CardConfig.Height * scale;
        let thickness = GameViewConfig.CardConfig.Thickness * scale;
        let groundToCard = GameViewConfig.CardConfig.GroundToCard * scale;

        this._scale = scale;
        this._width = width;
        this._height = height;
        this._thickness = thickness;
        this._groundToCard = groundToCard;

        for (let dir = 0; dir < 4; dir++) {
            let nodeSeat = new Node();
            nodeSeat.setRotationFromEuler(0, 90 * dir, 0);
            this.node.addChild(nodeSeat);
            this._seatList[dir] = nodeSeat;
        }
    }

    resetView() {
        this._hostDir = RoomMgr.getInstance().mySeatId - 1;

        this._edgeList[this.getDir(0)] = GameViewConfig.CardConfig.EdgeToMeld[0]; // 本家配置
        this._edgeList[this.getDir(1)] = GameViewConfig.CardConfig.EdgeToMeld[1]; // 下家配置
        this._edgeList[this.getDir(2)] = GameViewConfig.CardConfig.EdgeToMeld[2]; // 对家配置
        this._edgeList[this.getDir(3)] = GameViewConfig.CardConfig.EdgeToMeld[3]; // 上家配置

        this._distanceList[this.getDir(0)] = GameViewConfig.CardConfig.CenterToMeld[0]; // 本家配置
        this._distanceList[this.getDir(1)] = GameViewConfig.CardConfig.CenterToMeld[1]; // 下家配置
        this._distanceList[this.getDir(2)] = GameViewConfig.CardConfig.CenterToMeld[2]; // 对家配置
        this._distanceList[this.getDir(3)] = GameViewConfig.CardConfig.CenterToMeld[3]; // 上家配置

        this._dataList = [[], [], [], []];
        this._seatList.forEach((value, index, array) => {
            value.removeAllChildren();
        });
    }

    private getDir(dirLocal: number): number {
        let dir = this._hostDir + dirLocal;
        return dir % 4;
    }

    /** 游戏开始 */
    onGameStart() {
        this.resetView();
    }

    /** 换位 */
    OnChangedSeat(hostDir: number) {
        this._hostDir = hostDir;
        this.resetView(); // 换位需要重置碰杠牌显示配置
    }

    /** 碰杠 */
    onPengGang(data: Game.IOperationResult) {
        let dir = data.seatId - 1;
        let dirOut = data.cardSeatId - 1;

        switch (data.opCode) {
            case OPCode.OPE_RIGHT_CHI: // 右吃
            case OPCode.OPE_MIDDLE_CHI: // 中吃
            case OPCode.OPE_LEFT_CHI: // 左吃
            case OPCode.OPE_PENG: // 碰
            case OPCode.OPE_QIANG_PENG: // 抢碰
                this.makeMeldPeng(dir, dirOut, data.opCode, data.opCard, data.opCards, true);
                break;
            case OPCode.OPE_AN_GANG: // 暗杠
                this.makeMeldAnGang(dir, dirOut, data.opCode, data.opCard, data.opCards, false);
                break;
            case OPCode.OPE_GANG: // 杠
                this.makeMeldMingGang(dir, dirOut, data.opCode, data.opCard, data.opCards, false);
                break;
            case OPCode.OPE_BU_GANG: // 补杠
                this.makeMeldBuGang(dir, dirOut, data.opCode, data.opCard, data.opCards, false);
                break;
            default:
                break;
        }
    }

    /** 碰 */
    private makeMeldPeng(dir: number, dirOut: number, opCode: number, opCard: number, opCards: number[], showAnim: boolean) {
        let who = CardUtil.calculatePlayerPosition(dir + 1, dirOut + 1);
        let scale = this._scale;
        let width = this._width;
        let height = this._height;
        let groundToCard = this._groundToCard;
        let rightToLeft = this._edgeList[dir];
        let distance = this._distanceList[dir];
        let buPos: Vec3 = null;
        let middleCard: Node = null;
        for (let i = 0; i < 3; i++) {
            let card = instantiate(this.nodeCard);
            card.setScale(card.scale.x * scale, card.scale.y * scale, card.scale.z * scale);
            if ((i == 0 && who == "下家") ||  // 下家的第一张牌
                (i == 1 && who == "对家") ||  // 对家的第二张牌
                (i == 2 && who == "上家")) {  // 上家的第三张牌

                buPos = new Vec3(rightToLeft - (height * 0.5), groundToCard, distance - width * 1.5);
                card.setPosition(rightToLeft - height * 0.5, groundToCard, distance - width * 0.5);
                card.setRotationFromEuler(0, 90, 0);
                rightToLeft -= (height + GameViewConfig.CardConfig.SpaceMeldCard);
            } else {
                card.setPosition(rightToLeft - width * 0.5, groundToCard, distance - height * 0.5);
                card.setRotationFromEuler(0, 0, 0);
                rightToLeft -= (width + GameViewConfig.CardConfig.SpaceMeldCard);
            }

            card.active = true;
            this._seatList[dir].addChild(card);
            card.getComponent(NodeCardCtr).setCardByte(opCards[i]) // mark

            if (i == 1) {
                middleCard = card;
            }
        }

        this._edgeList[dir] = rightToLeft - (width * 0.5); // 追加两堆牌之间的间距
        this._dataList[dir].push({ opCard: opCard, opCards: opCards, opCode: opCode, buPos: buPos });


        // 碰牌烟雾动画 mark
        if (Utils.isNotNull(middleCard)) {
            if (showAnim) {
                let data: GameViewConfig.AnimConfig = {
                    seatId : dir + 1,
                    aniType : GameViewConfig.AnimType.Peng,
                    pos : middleCard.getWorldPosition(),
                }
                EventManager.dispatch(FXJEvent.VIEW_UI_3D_GET_CAMERA, FXJEvent.VIEW_OUT_CARD_ANI_PLAY, data);
            }
        }
    }

    /** 补杠 */
    private makeMeldBuGang(dir: number, dirOut: number, opCode: number, opCard: number, opCards: number[], showAnim: boolean) {
        let scale = this._scale;        
        let dataList = this._dataList[dir];
        for (let i = 0; i < dataList.length; i++) {
            let data = dataList[i];
            if ((data.opCode == OPCode.OPE_PENG || data.opCard == OPCode.OPE_QIANG_PENG) && Utils.isNotNull(data.buPos)) {
                let map = {};
                opCards.forEach((value, index, array) => {
                    map[value] = true;
                });

                let contain = true;
                data.opCards.forEach((value, index, array) => {
                    if(!map[value]) {
                        contain = false;
                    }
                });

                if (contain) {
                    let card = instantiate(this.nodeCard);
                card.setScale(card.scale.x * scale, card.scale.y * scale, card.scale.z * scale);
                    card.setPosition(data.buPos);
                    card.setRotationFromEuler(0, 90, 0);
                    card.active = true;
                    this._seatList[dir].addChild(card);
                    card.getComponent(NodeCardCtr).setCardByte(opCard) // mark
                    data.opCode = OPCode.OPE_BU_GANG; // 补杠
                    return;   
                }
            }
        }
    }

    /** 明杠 */
    private makeMeldMingGang(dir: number, dirOut: number, opCode: number, opCard: number, opCards: number[], showAnim: boolean) {
        let who = CardUtil.calculatePlayerPosition(dir + 1, dirOut + 1);
        let scale = this._scale;
        let width = this._width;
        let height = this._height;
        let groundToCard = this._groundToCard;
        let rightToLeft = this._edgeList[dir];
        let distance = this._distanceList[dir];
        for (let i = 0; i < 4; i++) { // 四张牌
            let card = instantiate(this.nodeCard);
            card.setScale(card.scale.x * scale, card.scale.y * scale, card.scale.z * scale);
            if ((i == 0 && who == "下家") ||  // 下家的第一张牌
                (i == 2 && who == "对家") ||  // 对家的第三张牌
                (i == 3 && who == "上家")) {  // 上家的第四张牌

                card.setPosition(rightToLeft - height * 0.5, groundToCard, distance - width * 0.5);
                card.setRotationFromEuler(0, 90, 0);
                rightToLeft -= (height + GameViewConfig.CardConfig.SpaceMeldCard);
            } else {
                card.setPosition(rightToLeft - width * 0.5, groundToCard, distance - height * 0.5);
                card.setRotationFromEuler(0, 0, 0);
                rightToLeft -= (width + GameViewConfig.CardConfig.SpaceMeldCard);
            }
            card.active = true;
            this._seatList[dir].addChild(card);
            card.getComponent(NodeCardCtr).setCardByte(opCards[i]) // mark
        }

        this._edgeList[dir] = rightToLeft - (width * 0.5); // 追加两堆牌之间的间距
        this._dataList[dir].push({ opCard: opCard, opCards: opCards, opCode: opCode });
    }

    /** 暗杠 */
    private makeMeldAnGang(dir: number, dirOut: number, opCode: number, opCard: number, opCards: number[], showAnim: boolean) {
        let scale = this._scale;
        let width = this._width;
        let height = this._height;
        let groundToCard = this._groundToCard;
        let rightToLeft = this._edgeList[dir];
        let distance = this._distanceList[dir];
        for (let i = 0; i < 4; i++) {
            let card = instantiate(this.nodeCard);
            card.setScale(card.scale.x * scale, card.scale.y * scale, card.scale.z * scale);
            card.setPosition(rightToLeft - width * 0.5, groundToCard, distance - height * 0.5);
            if (i == 0 || i == 4) {
                card.setRotationFromEuler(0, 0, 180);
            } else {
                card.setRotationFromEuler(0, 0, 0);
            }
            card.active = true;
            this._seatList[dir].addChild(card);
            card.getComponent(NodeCardCtr).setCardByte(opCards[i]) // mark
            rightToLeft -= (width + GameViewConfig.CardConfig.SpaceMeldCard);
        }

        this._edgeList[dir] = rightToLeft - (width + GameViewConfig.CardConfig.SpaceMeldCard);
        this._dataList[dir].push({ opCard: opCard, opCards: opCards, opCode: opCode });

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
            for (let i = 0; i < value.opGroups.length; i++) { 
                let dataItem = value.opGroups[i];
                let dir = value.seatId - 1;
                let dirOut = value.seatId - 1;
                let cards = dataItem.opCards;

                switch (dataItem.opCode) {
                    case OPCode.OPE_RIGHT_CHI: // 右吃
                    case OPCode.OPE_MIDDLE_CHI: // 中吃
                    case OPCode.OPE_LEFT_CHI: // 左吃
                    case OPCode.OPE_PENG: // 碰
                    case OPCode.OPE_QIANG_PENG: // 抢碰
                        this.makeMeldPeng(dir, dirOut, dataItem.opCode, cards[0], cards, false);
                        break;
                    case OPCode.OPE_AN_GANG: // 暗杠
                        this.makeMeldAnGang(dir, dirOut, dataItem.opCode, cards[0], cards, false);
                        break;
                    case OPCode.OPE_GANG: // 杠
                        this.makeMeldMingGang(dir, dirOut, dataItem.opCode, cards[0], cards, false);
                        break;
                    case OPCode.OPE_BU_GANG: // 补杠
                        this.makeMeldBuGang(dir, dirOut, dataItem.opCode, cards[0], cards, false);
                        break;
                    default:
                        break;
                }
            }
        });
    }

    //销毁
    onDestroy() {
    };
}


