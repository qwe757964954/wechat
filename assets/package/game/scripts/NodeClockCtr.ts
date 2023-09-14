
import { MeshRenderer, Node, Texture2D, _decorator } from 'cc';
import { GCache } from '../../../cache/GCache';
import { Utils } from '../../../framework/Utils';
import { BaseComponent } from '../../../framework/vc/BaseComponent';
import { RoomMgr } from '../cache/RoomMgr';
import { GameStatus } from '../common/FXJConfig';
import { FXJRes } from '../common/FXJRes';
import { GameViewConfig } from '../common/GameViewConfig';
import { Game } from '../common/idl/Game';
const { ccclass, property } = _decorator;

/**
 * Name = NodeClockCtr
 * URL = db://assets/package/game/scripts/NodeClockCtr.ts
 * Time = Mon Aug 14 2023 10:42:21 GMT+0800 (中国标准时间)
 * Author = harvyson
 *
 * Life: onLoad-->onInitModuleEvent-->onEnable->start->update->lateUpdate->onDisable->onDestroy
 * 
 */

@ccclass('NodeClockCtr')
export class NodeClockCtr extends BaseComponent {
    /** 麻将桌东指示灯节点 - 东 */
    @property({ tooltip: "麻将桌东指示灯节点 - 东", type: Node })
    private nodeLightDong: Node = null;

    /** 麻将桌东指示灯节点 - 南 */
    @property({ tooltip: "麻将桌东指示灯节点 - 南", type: Node })
    private nodeLightNan: Node = null;

    /** 麻将桌东指示灯节点 - 西 */
    @property({ tooltip: "麻将桌东指示灯节点 - 西", type: Node })
    private nodeLightXi: Node = null;

    /** 麻将桌东指示灯节点 - 北 */
    @property({ tooltip: "麻将桌东指示灯节点 - 北", type: Node })
    private nodeLightBei: Node = null;

    /** 麻将桌倒计时节点 */
    @property({ tooltip: "麻将桌倒计时节点", type: Node })
    private nodeTimer: Node = null;

    /** 指示灯节点 */
    private _nodeLight: Node[] = null;

    /** 指示灯节点配置 */
    private _nodeLightConfig: string[][] = [
        ["dong_1", "dong_2"],
        ["nan_1", "nan_2"],
        ["xi_1", "xi_2"],
        ["bei_1", "bei_2"],
    ];

    /** 指示灯方向 */
    private _nodeLightDir: number = -1;

    /** 本家方位 */
    private _hostDir: number = 0;

    /** 计时 */
    private _timeCount: number = 0;

    constructor() {
        super();
        if (!GCache.firstRunLoadSuccess) {
            return;
        }
        this.preloadRes();
    }

    /** 预加载 */
    preloadRes() {
        this._nodeLightConfig.forEach((value1, index1, array1) => {
            value1.forEach((value2, index2, array2) => {
                let path = Utils.string_format(FXJRes.Picture_Game_Desk_Light.path, value2);
                this.getPreLoaderRes(FXJRes.Picture_Game_Desk_Light.bundle, path, Texture2D, (res) => {
                });
            })
        });

        for (let i = 0; i <= 20; i++) {
            let path = Utils.string_format(FXJRes.Picture_Game_Desk_Timer.path, i);
            this.getPreLoaderRes(FXJRes.Picture_Game_Desk_Timer.bundle, path, Texture2D, (res) => {
            });
        }

    }


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

    }

    initView() {
        // 东南西北指示灯
        this._nodeLight = [
            this.nodeLightDong,
            this.nodeLightNan,
            this.nodeLightXi,
            this.nodeLightBei,
        ]
    }

    resetView() {
        this._hostDir = RoomMgr.getInstance().mySeatId - 1;
        this.updateViewTimerDir();
    }

    /** 更新倒计时方位 */
    private updateViewTimerDir() {
        this.node.setRotationFromEuler(0, 90 * this._hostDir, 0);
    }

    private updateViewLight(dir: number = -1) {
        if (this._nodeLightDir == dir) {
            return;
        }

        this._nodeLight.forEach((value, index, array) => {
            let config = this._nodeLightConfig[index];
            let path = Utils.string_format(FXJRes.Picture_Game_Desk_Light.path, dir == index ? config[1] : config[0]);
            this.getPreLoaderRes(FXJRes.Picture_Game_Desk_Light.bundle, path, Texture2D, (tex) => {
                if (tex) {
                    value.getComponent(MeshRenderer)!.material!.setProperty('albedoMap', tex);
                }
            })

        });

        this._nodeLightDir = dir;
    }

    private updateViewTime(time: number = -1) {
        if (time >= 0) {
            this.nodeTimer.active = true;
            let path = Utils.string_format(FXJRes.Picture_Game_Desk_Timer.path, time);
            this.getPreLoaderRes(FXJRes.Picture_Game_Desk_Timer.bundle, path, Texture2D, (tex) => {
                if (tex) {
                    this.nodeTimer.getComponent(MeshRenderer)!.material!.setProperty('albedoMap', tex);
                }
            })
        } else {
            this.nodeTimer.active = false;
        }
    }

    /** 
     * 设置闹钟
     * @param dir 闹钟方向, 为空关闭闹钟
     * @param time 闹钟时间
     *  */
    onSetClock(dir: number = -1, time: number = -1) {
        this.log("NodeClockCtr.onSetClock", "倒计时开始", "dir", dir, "time", time)
        this.unschedule(this.onScheduleEvent)
        this.updateViewLight(dir);
        this.updateViewTime(time);

        // 启动计时
        if (Utils.isNotNull(time) && time > 0) {
            this._timeCount = time;
            this.schedule(this.onScheduleEvent, 1)
        }

    }

    /** 计时回调 */
    private onScheduleEvent() {
        this._timeCount--;
        // this.log("NodeClockCtr.onScheduleEvent", this._timeCount)

        if (this._timeCount < 0) {
            this.unschedule(this.onScheduleEvent);
        } else {
            this.updateViewTime(this._timeCount);
        }
    }

    /** 游戏开始 */
    onGameStart() {
        this.resetView();
    }

    /** 换位 */
    OnChangedSeat(hostDir: number) {
        this._hostDir = hostDir;
        this.updateViewTimerDir(); // 换位需要重置色子节点方向
    }

    /** 操作开始 */
    onOperationStart(data: Game.IFixBanker) {
        // 获取出牌时间
        let timeOut = RoomMgr.getInstance().getTimeOut(GameStatus.PLAY_CARD);
        let dir = data.bankSeatId - 1;
        this.onSetClock(dir, timeOut);
    }

    /** 操作选项 */
    onOperationSelect(data: Game.IOperation) {
        // 获取操作时间
        let timeOut = RoomMgr.getInstance().getTimeOut(GameStatus.OPERATION);
        let dir = data.seatId - 1
        this.onSetClock(dir, timeOut);
    }

    /** 抓牌 */
    onTakeCard(data: any) {
        // 获取出牌时间
        let timeOut = RoomMgr.getInstance().getTimeOut(GameStatus.PLAY_CARD);
        let dir = data.seatId - 1;
        this.onSetClock(dir, timeOut);
    }

    /** 游戏结束 */
    onGameOver(data: Game.IHandCards) {
        // 胡牌关闭时间和指示灯
        this.onSetClock(-1, -1);
    }

    /** 重连 */
    onReconnect(data: GameViewConfig.ReconnectConfig) {
        this.resetView();

        if (Utils.isNull(data.operationSeatId) || data.operationSeatId < 1 || data.operationSeatId > 4) {
            this.log("NodeClockCtr.onReconnect", "座位号异常", data.operationSeatId)
            return;
        }

        if (Utils.isNull(data.operationTimePass)) {
            this.log("NodeClockCtr.onReconnect", "操作时间异常", data.operationTimePass)
            return;
        }

        // 获取出牌时间
        let timeOut = data.operationTimePass;
        let dir = data.operationSeatId - 1;
        this.onSetClock(dir, timeOut);
    }

    //销毁
    onDestroy() {
    };

    log(...args: any[]) {
        console.log(args);
    }
}


