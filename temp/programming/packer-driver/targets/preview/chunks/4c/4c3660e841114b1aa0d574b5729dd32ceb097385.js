System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, SchedulerManager, CountTime, _crd;

  function _reportPossibleCrUseOfSchedulerManager(extras) {
    _reporterNs.report("SchedulerManager", "../manager/SchedulerManager", _context.meta, extras);
  }

  _export("CountTime", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      SchedulerManager = _unresolved_2.SchedulerManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4e1e9Mqof5BSqKHo1WuTqOF", "CountTime", undefined);

      _export("CountTime", CountTime = class CountTime {
        /** 当前计时句柄 */

        /** 开始值 */

        /** 最小值 */

        /** 每次变化时间 */

        /** 每次变化的基数 */

        /** 当前值 */

        /** 是否倒计时 */

        /** 是否可以运行 */

        /** 更新的回调 */

        /** 停止的回调 */

        /** 回调时附加的参数 */
        constructor() {
          this._handler = null;
          this._startTime = 0;
          this._endTime = 0;
          this._time = 1;
          this._changeNum = 1;
          this._currowNum = null;
          this._isDown = true;
          this._isCanStart = false;
          this._updateCall = null;
          this._stopCall = null;
          this._callParam = null;
        }
        /** 设置开始值 */


        set StartTime(time) {
          time = Number(time);

          if (isNaN(time)) {
            time = 0;
          }

          this._startTime = time;
        }
        /** 设置结束值 */


        set EndTime(time) {
          time = Number(time);

          if (isNaN(time)) {
            time = 0;
          }

          this._endTime = time;
        }
        /** 设置是否为倒计时 */


        set isDown(down) {
          this._isDown = down;
        }
        /** 设置更新的回调 */


        set UpdateCallback(callF) {
          this._updateCall = callF;
        }
        /** 设置停止的回调 */


        set StopCallback(callF) {
          this._stopCall = callF;
        }
        /** 设置回调时传递的附加参数 */


        set CallbackParam(param) {
          this._callParam = param;
        }
        /** 获取当前的值 */


        get CurrowNum() {
          return this._currowNum;
        }
        /** 开启状态 */


        isStart() {
          return this._handler != null;
        }
        /** 开始计时 */


        Start() {
          this.Stop();

          this._initCurrowTime();

          this._isCanStart = true;
          this.Update();

          if (this._isCanStart) {
            var content = this;
            this._handler = (_crd && SchedulerManager === void 0 ? (_reportPossibleCrUseOfSchedulerManager({
              error: Error()
            }), SchedulerManager) : SchedulerManager).schedulerInterval(dt => {
              content.Update(dt);
            }, this._time);
          }
        }
        /** 停止计时 */


        Stop() {
          if (this._handler) {
            (_crd && SchedulerManager === void 0 ? (_reportPossibleCrUseOfSchedulerManager({
              error: Error()
            }), SchedulerManager) : SchedulerManager).unscheduleInterval(this._handler);
          }

          this._handler = null;
        }
        /** 重置当前时间 */


        _initCurrowTime() {
          if (this._isDown) {
            this._currowNum = this._startTime + this._changeNum;
          } else {
            this._currowNum = this._startTime - this._changeNum;
          }
        }
        /** 更新时间 */


        Update(dt) {
          if (dt === void 0) {
            dt = null;
          }

          if (this._isDown) {
            this._currowNum = this._currowNum - this._changeNum; //更新中

            if (this._updateCall) {
              this._updateCall(this._currowNum, this._callParam);
            } //停止了


            if (this._currowNum <= this._endTime) {
              this._isCanStart = false;
              this.Stop();

              if (this._stopCall) {
                this._stopCall(this._currowNum, this._callParam);
              }
            }
          } else {
            this._currowNum = this._currowNum + this._changeNum; //更新中

            if (this._updateCall) {
              this._updateCall(this._currowNum, this._callParam);
            } //停止了


            if (this._currowNum >= this._endTime) {
              this._isCanStart = false;
              this.Stop();

              if (this._stopCall) {
                this._stopCall(this._currowNum, this._callParam);
              }
            }
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=4c3660e841114b1aa0d574b5729dd32ceb097385.js.map