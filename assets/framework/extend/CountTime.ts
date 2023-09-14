import { SchedulerManager } from "../manager/SchedulerManager";

export class CountTime {
    /** 当前计时句柄 */
    private _handler: any = null;

    /** 开始值 */
    private _startTime: number = 0;
    /** 最小值 */
    private _endTime: number = 0;
    /** 每次变化时间 */
    private _time: number = 1;
    /** 每次变化的基数 */
    private _changeNum: number = 1;
    /** 当前值 */
    private _currowNum: number = null;
    /** 是否倒计时 */
    private _isDown: boolean = true;
    /** 是否可以运行 */
    private _isCanStart = false;

    /** 更新的回调 */
    private _updateCall: Function = null;
    /** 停止的回调 */
    private _stopCall: Function = null;
    /** 回调时附加的参数 */
    private _callParam = null;

    constructor() {

    }
    /** 设置开始值 */
    set StartTime(time: number) {
        time = Number(time);
        if (isNaN(time)) {
            time = 0;
        }
        this._startTime = time;
    }
    /** 设置结束值 */
    set EndTime(time: number) {
        time = Number(time);
        if (isNaN(time)) {
            time = 0;
        }
        this._endTime = time;
    }
    /** 设置是否为倒计时 */
    set isDown(down: boolean) {
        this._isDown = down;
    }
    /** 设置更新的回调 */
    set UpdateCallback(callF: Function) {
        this._updateCall = callF;
    }
    /** 设置停止的回调 */
    set StopCallback(callF: Function) {
        this._stopCall = callF;
    }
    /** 设置回调时传递的附加参数 */
    set CallbackParam(param: any) {
        this._callParam = param;
    }
    /** 获取当前的值 */
    get CurrowNum(): number {
        return this._currowNum;
    }
    /** 开启状态 */
    public isStart(): boolean {
        return this._handler != null;
    }
    /** 开始计时 */
    public Start() {
        this.Stop();
        this._initCurrowTime();
        this._isCanStart = true;

        this.Update();

        if (this._isCanStart) {
            const content = this;
            this._handler = SchedulerManager.schedulerInterval((dt: number) => {
                content.Update(dt);
            }, this._time)
        }
    }
    /** 停止计时 */
    public Stop() {
        if (this._handler) {
            SchedulerManager.unscheduleInterval(this._handler);
        }
        this._handler = null;
    }
    /** 重置当前时间 */
    private _initCurrowTime() {
        if (this._isDown) {
            this._currowNum = this._startTime + this._changeNum;
        } else {
            this._currowNum = this._startTime - this._changeNum;
        }
    }
    /** 更新时间 */
    protected Update(dt = null) {
        if (this._isDown) {
            this._currowNum = this._currowNum - this._changeNum;

            //更新中
            if (this._updateCall) {
                this._updateCall(this._currowNum, this._callParam);
            }
            //停止了
            if (this._currowNum <= this._endTime) {
                this._isCanStart = false;
                this.Stop();
                if (this._stopCall) {
                    this._stopCall(this._currowNum, this._callParam);
                }
            }
        } else {
            this._currowNum = this._currowNum + this._changeNum;
            //更新中
            if (this._updateCall) {
                this._updateCall(this._currowNum, this._callParam);
            }
            //停止了
            if (this._currowNum >= this._endTime) {
                this._isCanStart = false;
                this.Stop();
                if (this._stopCall) {
                    this._stopCall(this._currowNum, this._callParam);
                }
            }
        }
    }
}