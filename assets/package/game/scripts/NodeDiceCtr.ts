
import { _decorator, Node, Vec3 } from 'cc';
import { EventManager } from '../../../framework/manager/EventManager';
import { BaseComponent } from '../../../framework/vc/BaseComponent';
import { RoomMgr } from '../cache/RoomMgr';
import { FXJEvent } from '../common/FXJEvent';
import { FXJSound } from '../common/FXJSound';
import { GameViewConfig } from '../common/GameViewConfig';
import { Game } from '../common/idl/Game';
const { ccclass, property } = _decorator;

/**
 * Name = NodeDiceCtr
 * URL = db://assets/package/game/scripts/NodeDiceCtr.ts
 * Time = Tue Aug 15 2023 15:37:25 GMT+0800 (中国标准时间)
 * Author = harvyson
 *
 * Life: onLoad-->onInitModuleEvent-->onEnable->start->update->lateUpdate->onDisable->onDestroy
 * 
 */
 
@ccclass('NodeDiceCtr')
export class NodeDiceCtr extends BaseComponent {
	/** 麻将桌盖板节点 */
    @property({ tooltip: "麻将桌盖板节点", type: Node })
    private nodeGaiBan: Node = null;

    /** 色子节点 */
    @property({ tooltip: "色子节点", type: Node })
    private nodeDiceView: Node = null;

    /** 色子节点1 */
    @property({ tooltip: "色子节点1", type: Node })
    private nodeDice1: Node = null;

    /** 色子节点2 */
    @property({ tooltip: "色子节点2", type: Node })
    private nodeDice2: Node = null;

    /** 本家方位 */
    private _hostDir: number = 0;

    /** 色子状态 */
    private _diceStatus: GameViewConfig.DiceStatus = GameViewConfig.DiceStatus.Stop;
    
    /** 色子数 */
    private _dices: number[] = null;

    /** 计时 */
    private _time: number = 0;

    private _config = {
        LAP : 5,
        LAP_LOCAL : 10,
        TIME_ROTATE : 1,
        TIME_MOVE : 0.5,
        TIME_LOOK : 0.5,
        SECOND_LAP_LOCAL : 10/1, // LAP_LOCAL/TIME_ROTATE
        SECOND_LAP : 5/1, // LAP/TIME_ROTATE
        BEGIN_X : 2,
        MOVE_X :  1,
    }

	/** override 初始化模块事件 */
	protected onInitModuleEvent() {

	};
	
	onLoad () {
	
	};


	start () {

	};
	
	/** 初始化界面 */
	initView () {

	};
	
	/** 更新界面 */
	updateView () {

	};
	
	resetView() {
        this._hostDir = RoomMgr.getInstance().mySeatId - 1;
        this.updateViewDir();

        this._time = 0;
        this._diceStatus = GameViewConfig.DiceStatus.Stop;
    }

    /** 更新色子方位 */
    private updateViewDir() {
        this.node.setRotationFromEuler(0, 90 * this._hostDir, 0);
    }

    /** 游戏开始 */
    onGameStart() {
        this.resetView();
    }

    /** 换位 */
    OnChangedSeat(hostDir: number) {
        this._hostDir = hostDir;
        this.updateViewDir(); // 换位需要重置色子节点方向
    }

    /** 摇色子 */
    onRollDices(data: Game.IRollDice) {
        this._dices = data.diceInfo[0].dices;
        this._time = 0;
        this.nodeDice1.setPosition(this._config.BEGIN_X, 0, 0);
        this.nodeDice2.setPosition(-this._config.BEGIN_X, 0, 0);
        this.nodeGaiBan.active = false;
        this._diceStatus = GameViewConfig.DiceStatus.Move;

        EventManager.dispatch(FXJEvent.SYS_PLAY_EFFECT, FXJSound.GameRoll);
    }
    
    protected update(dt: number): void {
        if (this._diceStatus == GameViewConfig.DiceStatus.Move) {
            this._time += dt;
            
            let dtLapLocal = dt*360*this._config.SECOND_LAP_LOCAL;
            let rotation1 = this.nodeDice1.eulerAngles;
            this.nodeDice1.setRotationFromEuler(rotation1.x + dtLapLocal, rotation1.y + dtLapLocal, rotation1.z + dtLapLocal);

            let rotation2 = this.nodeDice2.eulerAngles;
            this.nodeDice2.setRotationFromEuler(rotation2.x + dtLapLocal, rotation2.y + dtLapLocal, rotation2.z + dtLapLocal);
            
            let dtLap = dt*360*this._config.SECOND_LAP;
            let rotaionView = this.nodeDiceView.eulerAngles;
            this.nodeDiceView.setRotationFromEuler(rotaionView.x, rotaionView.y + dtLap, rotaionView.z);
            
            if (this._time >= this._config.TIME_ROTATE) {
                let endRotation1 = this.getRotationByValue(this._dices[0])
                this.nodeDice1.setRotationFromEuler(endRotation1);
                let endRotation2 = this.getRotationByValue(this._dices[1])
                this.nodeDice2.setRotationFromEuler(endRotation2);
                this._diceStatus = GameViewConfig.DiceStatus.Pause;
            }
        } else if (this._diceStatus == GameViewConfig.DiceStatus.Pause) {
            if (this._time >= this._config.TIME_ROTATE + this._config.TIME_MOVE + this._config.TIME_ROTATE) {
                this._diceStatus = GameViewConfig.DiceStatus.Stop;
            }
        } else if (this._diceStatus == GameViewConfig.DiceStatus.Stop) {
            // 停止了
        } 
    }

    private getRotationByValue(value): Vec3 {
        let rotateX = 0;
        let rotateZ = 0;
        switch(value) {
            case 1:
                rotateX = 90;
                rotateZ = 0;
                break;
            case 2:
                rotateX = 270;
                rotateZ = 0;
                break;
            case 3:
                rotateX = 180;
                rotateZ = 0;
                break;
            case 4:
                rotateX = 0;
                rotateZ = 90;
                break;
            case 5:
                rotateX = 0;
                rotateZ = 0;
                break;
            case 6:
                rotateX = 0;
                rotateZ = 180;
                break;
            default:
                break;
        }

        return new Vec3(rotateX, 0, rotateZ)
    }

    /** 操作开始 */
    onOperationStart(data: Game.IFixBanker) {
        this.nodeGaiBan.active = true;
    }

    /** 游戏结束 */
    onGameOver(data: Game.IHandCards) {
        
    }

    /** 重连 */
    onReconnect() {
        this.resetView();
    }

    //销毁
    onDestroy() {
    };

    log(...args: any[]) {
        console.log(this.name, args);
    }

}

