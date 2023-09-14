
import { Node, _decorator } from 'cc';
import { Utils } from '../../../framework/Utils';
import { EventManager } from '../../../framework/manager/EventManager';
import { BaseComponent } from '../../../framework/vc/BaseComponent';
import { OperationMgr } from '../cache/OperationMgr';
import { PlayerMgr } from '../cache/PlayerMgr';
import { RoomMgr } from '../cache/RoomMgr';
import { OPCode } from '../common/FXJConfig';
import { FXJController } from '../common/FXJController';
import { FXJEvent } from '../common/FXJEvent';
import { FXJSound } from '../common/FXJSound';
import { GameEvent } from '../common/GameEvent';
import { GameViewConfig } from '../common/GameViewConfig';
import { Game } from '../common/idl/Game';
import { NodeClockCtr } from './NodeClockCtr';
import { NodeDiceCtr } from './NodeDiceCtr';
import { NodeHandCardCtr } from './NodeHandCardCtr';
import { NodeHuCardCtr } from './NodeHuCardCtr';
import { NodeMeldCardCtr } from './NodeMeldCardCtr';
import { NodeOutCardCtr } from './NodeOutCardCtr';
import { NodeWallCtr } from './NodeWallCtr';
const { ccclass, property, menu } = _decorator;

/**
 * Name = GameDeskPrefabCtr
 * URL = db://assets/package/game/scripts/GameDeskPrefabCtr.ts
 * Time = Thu Aug 03 2023 11:48:42 GMT+0800 (中国标准时间)
 * Author = harvyson
 *
 * Life: onLoad-->onInitModuleEvent-->onEnable->start->update->lateUpdate->onDisable->onDestroy
 * 
 */

@ccclass('GameDeskPrefabCtr')
//方便编辑器识别的菜单项目
@menu('prefab/game/GameDeskPrefabCtr')
export class GameDeskPrefabCtr extends BaseComponent {
    // 桌子节点
    @property({ tooltip: "桌子节点", type: Node })
    private nodeDesk: Node = null;

    // 牌墙节点
    @property({ tooltip: "牌墙节点", type: NodeWallCtr })
    private nodeWall: NodeWallCtr = null;

    // 出牌节点
    @property({ tooltip: "出牌节点", type: NodeOutCardCtr })
    private nodeOutCard: NodeOutCardCtr = null;

    // 手牌节点
    @property({ tooltip: "手牌节点", type: NodeHandCardCtr })
    private nodeHandCard: NodeHandCardCtr = null;

    // 碰杠牌节点
    @property({ tooltip: "碰杠牌节点", type: NodeMeldCardCtr })
    private nodeMeldCard: NodeMeldCardCtr = null;

    // 胡牌节点
    @property({ tooltip: "胡牌节点", type: NodeHuCardCtr })
    private nodeHuCard: NodeHuCardCtr = null;

    // 闹钟节点
    @property({ tooltip: "闹钟节点", type: NodeClockCtr })
    private nodeClock: NodeClockCtr = null;

    // 色子节点
    @property({ tooltip: "色子节点", type: NodeDiceCtr })
    private nodeDice: NodeDiceCtr = null;

    // 杠牌数 计数，用于界面逻辑
    private _gangCount: number = 0;

    /** 音效配置 */
    private _soundConfig = ["wan", "tong", "tiao", "feng", "jian"];

    constructor() {
        super()
        console.log("==============飞小鸡游戏桌子初始化========");
        this.init();
    }

    //加载初始化
    init() {
        FXJController.getInstance().GameDeskCtr = this;
    }

    /** override 初始化模块事件 */
    protected onInitModuleEvent() {
        // 游戏开始
        this.addModelListener(GameEvent.VIEW_BROADCAST_GAME_START, this.onGameStart);
        // 摇色子
        this.addModelListener(GameEvent.VIEW_BROADCAST_ZHI_TOU, this.onRollDices);
        // 发牌
        this.addModelListener(GameEvent.VIEW_BROADCAST_DEAL_CARD, this.onDealCard);
        // 操作开始
        this.addModelListener(GameEvent.VIEW_BROADCAST_OPERATION_START, this.onOperationStart);
        // 操作选项
        this.addModelListener(GameEvent.VIEW_USER_OPERATION, this.onOperationSelect);
        // 出牌 吃碰杠 胡
        this.addModelListener(GameEvent.UPDATE_USER_OPERATION_RESULT, this.onOperationResult);
        // 抓牌
        this.addModelListener(GameEvent.VIEW_BROADCAST_GRAB_CARD, this.onTakeCard);
        // 游戏结束
        this.addModelListener(GameEvent.VIEW_BROADCAST_GAME_OVER, this.onGameOver);
        // 重连
        this.addModelListener(GameEvent.RECEIVE_DEAL_CARD, this.onReconnect);
    };
    onLoad() {
        this.initData()
        this.initView()
    };


    start() {

    };

    /** 初始化数据 */
    initData() {

    };

    /** 初始化界面 */
    initView() {

    };

    /** 更新界面 */
    updateView() {

    };

    /** 重置界面 */
    resetView() {
        // 需要根据玩家位置旋转方位
        let hostDir = RoomMgr.getInstance().mySeatId - 1;
        this.node.setRotationFromEuler(0, -90 * hostDir, 0);
        this.nodeDesk.setRotationFromEuler(0, 90 * hostDir, 0); // 为了保留桌子水印，反向旋转桌子
        
        this._gangCount = 0;
    }

    /** 换位 */
    OnChangedSeat(hostDir: number) {
        this.nodeWall.OnChangedSeat(hostDir);
        this.nodeHandCard.OnChangedSeat(hostDir);
        this.nodeOutCard.OnChangedSeat(hostDir);
        this.nodeMeldCard.OnChangedSeat(hostDir);
        this.nodeHuCard.OnChangedSeat(hostDir);
        this.nodeClock.OnChangedSeat(hostDir);
    }

    // 牌墙 ---------------------------------------------------------------------
    /** 开始游戏 */
    onGameStart() {
        this.log("GameDeskPrefabCtr.onGameStart");
        this.resetView();
        
        this.nodeWall.onGameStart();
        this.nodeHandCard.onGameStart();
        this.nodeOutCard.onGameStart();
        this.nodeMeldCard.onGameStart();
        this.nodeHuCard.onGameStart();
        this.nodeClock.onGameStart();

        let dataAnim: GameViewConfig.AnimConfig = {
            seatId : RoomMgr.getInstance().mySeatId,
            aniType : GameViewConfig.AnimType.GameStart,
        }
        EventManager.dispatch(FXJEvent.VIEW_OUT_CARD_ANI_PLAY, dataAnim);
    }

    /** 摇色子 */
    onRollDices(event, data: Game.IRollDice) {
        this.log("GameDeskPrefabCtr.onRollDices", data);

        if (Utils.isNull(data) || Utils.table_isEmpty(data.diceInfo)) {
            this.log("GameDeskPrefabCtr.onRollDices", "数据异常", data);
            return;
        }

        let bankerSeatId = data.diceInfo[0].seatId;
        let diceList = data.diceInfo[0].dices;

        if (Utils.isNull(bankerSeatId) || bankerSeatId < 1 || bankerSeatId > 4) {
            this.log("GameDeskPrefabCtr.onRollDices", "庄家座位非法", bankerSeatId);
            return;
        }

        if (Utils.table_isEmpty(diceList) || diceList.length != 2) {
            this.log("GameDeskPrefabCtr.onRollDices", "骰子数量非法", diceList);
            return;
        }

        for (let i = 0; i < diceList.length; i++) {
            let dice = diceList[i];
            if (dice < 1 || dice > 6) {
                this.log("GameDeskPrefabCtr.onRollDices", "骰子数值非法", diceList);
                return;
            }
        }

        this.nodeWall.onRollDices(data);
        this.nodeDice.onRollDices(data);
    }

    /** 发牌 */
    onDealCard(event, data: Game.IDealCard) {
        this.log("GameDeskPrefabCtr.onDealCard", data);
        if (Utils.isNull(data) || Utils.table_isEmpty(data.cards)) {
            this.log("GameDeskPrefabCtr.onDealCard", "没有手牌数据");
            return;
        }

        this.nodeWall.onDealCard(data);
        this.nodeHandCard.onDealCard(data);
    }

    /** 操作开始 */
    onOperationStart(event, data: Game.IFixBanker) {
        this.log("GameDeskPrefabCtr.onOperationStart", data);
        
        this.nodeClock.onOperationStart(data);
        this.nodeDice.onOperationStart(data);
    }

    /** 操作选项 */
    onOperationSelect(event, data: Game.IOperation) {
        this.log("GameDeskPrefabCtr.onOperationSelect", data);

        this.nodeClock.onOperationSelect(data);
    }

    /** 操作结果 */
    onOperationResult(event, data: Game.IOperationResult) {
        if (Utils.isNull(data) || Utils.isNull(data.seatId) || Utils.isNull(data.opCode)) {
            this.log("GameDeskPrefabCtr.onOperationResult", "数据异常", data);
            return;
        }
        
        
        switch (data.opCode) {
            case OPCode.OPE_OUT_CARD: // 出牌
                this.onOutCard(event, data);       
                break;
            case OPCode.OPE_RIGHT_CHI: // 右吃
            case OPCode.OPE_MIDDLE_CHI: // 中吃
            case OPCode.OPE_LEFT_CHI: // 左吃
            case OPCode.OPE_PENG: // 碰
            case OPCode.OPE_QIANG_PENG: // 抢碰
                this.onPengGang(event, data)
                break;
            case OPCode.OPE_AN_GANG: // 暗杠
            case OPCode.OPE_GANG: // 杠
            case OPCode.OPE_BU_GANG: // 补杠
                this.onPengGang(event, data)
                this._gangCount++;
                break;
            case OPCode.OPE_HU: // 胡
            case OPCode.OPE_ZI_MO: // 自摸
                this.onHu(event, data)
                break;
            case OPCode.OPE_DIAO:// 调牌
                break;
            default:
                break;
        }

        this.playEffect(event, data);
    }

    private playEffect(event, data: Game.IOperationResult) {
        let roleName = "xiaobo"
        let player = PlayerMgr.getInstance().findPlayerWithSeatId(data.seatId);
        if (Utils.isNotNull(player)) {
            let sex = Utils.number_valueOf(player.gameUserInfo.sex);
            if (sex == 2) {
                roleName = "xiaoya"
            }
        }

        switch (data.opCode) {
            case OPCode.OPE_OUT_CARD: // 出牌
                let cardValue = data.opCard >> 8 & 0x0F;
                let cardType = data.opCard >> 12;
                if (Utils.isNotNull(this._soundConfig[cardType])) {
                    let path = Utils.string_format(FXJSound.GameDiscard.path, roleName, this._soundConfig[cardType], cardValue)
                    EventManager.dispatch(FXJEvent.SYS_PLAY_EFFECT, {bundle: FXJSound.GameDiscard.bundle, path: path});
                }
                break;
            case OPCode.OPE_RIGHT_CHI: // 右吃
            case OPCode.OPE_MIDDLE_CHI: // 中吃
            case OPCode.OPE_LEFT_CHI: // 左吃
                EventManager.dispatch(FXJEvent.SYS_PLAY_EFFECT, {bundle: FXJSound.GameChi.bundle, path: Utils.string_format(FXJSound.GameChi.path, roleName)});
                break;
            case OPCode.OPE_PENG: // 碰
            case OPCode.OPE_QIANG_PENG: // 抢碰
                EventManager.dispatch(FXJEvent.SYS_PLAY_EFFECT, {bundle: FXJSound.GamePeng.bundle, path: Utils.string_format(FXJSound.GamePeng.path, roleName)});
                break;
            case OPCode.OPE_AN_GANG: // 暗杠
            case OPCode.OPE_GANG: // 杠
            case OPCode.OPE_BU_GANG: // 补杠
                EventManager.dispatch(FXJEvent.SYS_PLAY_EFFECT, {bundle: FXJSound.GameGang.bundle, path: Utils.string_format(FXJSound.GameGang.path, roleName)});
                break;
            case OPCode.OPE_HU: // 胡
                EventManager.dispatch(FXJEvent.SYS_PLAY_EFFECT, {bundle: FXJSound.GameHu.bundle, path: Utils.string_format(FXJSound.GameHu.path, roleName)});
                break;
            case OPCode.OPE_ZI_MO: // 自摸
                EventManager.dispatch(FXJEvent.SYS_PLAY_EFFECT, {bundle: FXJSound.GameZiMo.bundle, path: Utils.string_format(FXJSound.GameZiMo.path, roleName)});
                break;
            case OPCode.OPE_DIAO:// 调牌
                break;
            default:
                break;
        }
    }

    /** 抓牌 */
    onTakeCard(event, data: Game.IGrabCard) {
        
        if (Utils.isNull(data)) {
            this.log("GameDeskPrefabCtr.onTakeCard", "没有抓牌数据");
            return;
        }

        let dataTakeCard = {
            seatId: data.seatId,
            gangCount: this._gangCount,
            remian: data.remainCardNum,
        }
        this.log("GameDeskPrefabCtr.onTakeCard", dataTakeCard);
        this.nodeWall.onTakeCard(dataTakeCard);
        this.nodeHandCard.onTakeCard(dataTakeCard);
        this.nodeClock.onTakeCard(dataTakeCard);
    }

    // 出牌 ---------------------------------------------------------------------
    /** 出牌 */
    onOutCard(event, data: Game.IOperationResult) {
        this.log("GameDeskPrefabCtr.onOutCard", data);
        if (Utils.isNull(data) || Utils.isNull(data.seatId) || Utils.isNull(data.opCard)) {
            this.log("GameDeskPrefabCtr.onOutCard", "出牌数据错误");
            return;
        }

        this.nodeOutCard.onOutCard(data);
        this.nodeHandCard.onOutCard(data);
    }

    /** 碰杠 */
    onPengGang(event, data: Game.IOperationResult) {
        if (Utils.isNull(data) || Utils.isNull(data.seatId) || Utils.isNull(data.cardSeatId) || Utils.isNull(data.opCard)) {
            this.log("GameDeskPrefabCtr.onPengGang", "碰杠数据错误");
            return;
        }

        if (data.cardSeatId == 0) {
            this.log("GameDeskPrefabCtr.onPengGang", "无效座位号");
            return;
        }

        this.log("GameDeskPrefabCtr.onPengGang", data);
        
        this.nodeOutCard.onPengGang(data);
        this.nodeHandCard.onPengGang(data);
        this.nodeMeldCard.onPengGang(data);
    }

    /** 胡牌 */
    onHu(event, data: Game.IOperationResult) {
        if (Utils.isNull(data) || Utils.isNull(data.seatId) || Utils.isNull(data.cardSeatId) || Utils.isNull(data.opCard)) {
            this.log("GameDeskPrefabCtr.onHu", "胡牌数据错误");
            return;
        }

        if (data.cardSeatId == 0) {
            this.log("GameDeskPrefabCtr.onHu", "无效座位号");
            return;
        }

        this.log("GameDeskPrefabCtr.onHu", data);

        this.nodeOutCard.onHu(data);
        this.nodeHandCard.onHu(data);
        this.nodeHuCard.onHu(data);
    }

    /** 清理 */
    onGameOver(event, data: Game.IHandCards) {
        this.log("GameDeskPrefabCtr.onGameOver", data);
        if (Utils.isNull(data) || Utils.table_isEmpty(data.handCards)) {
            this.log("GameDeskPrefabCtr.onGameOver", "结算数据错误");
            return;
        }

        this.nodeWall.onGameOver(data);
        this.nodeHandCard.onGameOver(data);
        this.nodeOutCard.onGameOver(data);
        this.nodeMeldCard.onGameOver(data);
        this.nodeHuCard.onGameOver(data);
        this.nodeClock.onGameOver(data);

        let dataAnim: GameViewConfig.AnimConfig = {
            seatId : RoomMgr.getInstance().mySeatId,
            aniType : GameViewConfig.AnimType.GameOver,
        }
        EventManager.dispatch(FXJEvent.VIEW_OUT_CARD_ANI_PLAY, dataAnim);
    }


    // ---------------------------------------------------------------------

    /** 重连 */
    onReconnect() {
        this.resetView();
        
        let data = {
            bankSeatId: RoomMgr.getInstance().bankSeatId,
            dices: RoomMgr.getInstance().dices,
            remain: RoomMgr.getInstance().remainCardsCount,
            gangCount: 0,
            playerList: PlayerMgr.getInstance().playerList,
            operationSeatId: OperationMgr.getInstance().seatId,
            operationTimePass: RoomMgr.getInstance().timePass,
        }

        if (Utils.isNull(data) || Utils.table_isEmpty(data.dices)) {
            this.log("GameDeskPrefabCtr.onReconnect", "数据异常", data);
            return;
        }

        if (Utils.isNull(data.bankSeatId) || data.bankSeatId < 1 || data.bankSeatId > 4) {
            this.log("GameDeskPrefabCtr.onReconnect", "庄家座位非法", data.bankSeatId);
            return;
        }

        if (Utils.table_isEmpty(data.dices) || data.dices.length != 2) {
            this.log("GameDeskPrefabCtr.onReconnect", "骰子数量非法", data);
            return;
        }

        for (let i = 0; i < data.dices.length; i++) {
            let dice = data.dices[i];
            if (dice < 1 || dice > 6) {
                this.log("GameDeskPrefabCtr.onReconnect", "骰子数值非法", data);
                return;
            }
        }

        if (Utils.table_isEmpty(data.playerList)) {
            this.log("GameDeskPrefabCtr.onReconnect", "玩家数据异常", data);
            return;
        }

        data.playerList.forEach((value, index, array) => {
            for (let i = 0; i < value.opGroups.length; i++) { 
                let dataItem = value.opGroups[i];
                switch (dataItem.opCode) {
                    case OPCode.OPE_AN_GANG: // 暗杠
                        data.gangCount++;
                        break;
                    case OPCode.OPE_GANG: // 杠
                        data.gangCount++;
                        break;
                    case OPCode.OPE_BU_GANG: // 补杠
                        data.gangCount++;
                        break;
                    default:
                        break;
                }
            }
        });
        
        this._gangCount = data.gangCount;
        this.nodeWall.onReconnect(data);
        this.nodeHandCard.onReconnect(data);
        this.nodeOutCard.onReconnect(data);
        this.nodeMeldCard.onReconnect(data);
        this.nodeHuCard.onReconnect(data);
        this.nodeClock.onReconnect(data);
    }   

    //销毁
    onDestroy() {

    };

    log(...args: any[]) {
        console.log(args);
	}

}

