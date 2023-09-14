System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, director, _Scheduler, _SchedulerManager, _crd, GHandlerInterval, GHandlerTimeOut, SchedulerManager;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      director = _cc.director;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0b55ceC5C9KHYwcBhzdM6lu", "SchedulerManager", undefined);

      __checkObsolete__(['director']);

      //定时器的实例
      _Scheduler = class _Scheduler {
        /** 定时器对象 */
        //实例化
        constructor() {
          this._scheduler = null;
          this._callback = null;
          this._updateFunc = null;
          this._scheduler = director.getScheduler();
        }

        /**
         * 开启定时器
         * @callback 回调函数
         * @interval 定时时间(单位: 秒) 若值为 0，那么回调函数每一帧都会被调用
         * @repeat 可以让定时器触发 repeat + 1 次
         * @delay 指定延迟时间，定时器会在延迟指定的时间之后开始计时，单位: 秒
         * return boolean 是否存在该定时器
         */
        schedule(callback, interval, repeat, delay) {
          if (!interval) {
            interval = 0;
          }

          this._scheduler.enableForTarget(this);

          this._updateFunc = function (dt) {
            this._callback && this._callback(dt);
          };

          this._scheduler.schedule(this._updateFunc, this, interval, repeat, delay);

          if (this._scheduler.isScheduled(this._updateFunc, this)) {
            this._callback = callback;
            return true;
          }

          return false;
        }
        /**
         * 开启一个只执行一次的定时器
         * @callback 回调函数
         * @interval 定时时间(单位: 秒) 若值为 0，那么回调函数每一帧都会被调用
         * @delay 指定延迟时间，定时器会在延迟指定的时间之后开始计时，单位: 秒
         * return boolean 是否存在该定时器
         */


        scheduleOnce(callback, interval, delay) {
          if (!interval) {
            interval = 0;
          }

          this._scheduler.enableForTarget(this);

          this._updateFunc = function (dt) {
            this._callback && this._callback(dt);
            this.unscheduleAll();
          };

          this._scheduler.schedule(this._updateFunc, this, interval, 0, delay);

          if (this._scheduler.isScheduled(this._updateFunc, this)) {
            this._callback = callback;
            return true;
          }

          return false;
        }
        /**
         * 停止计时器
         * @param callback 可空 停止后会调用该回调
         */


        unscheduleAll(callback) {
          if (this._scheduler) {
            this._scheduler.unscheduleAllForTarget();
          }

          this._callback = null;
          callback && callback();
        }

        //是否存在定时器
        isScheduled() {
          if (this._callback) {
            return this._scheduler.isScheduled(this._updateFunc, this);
          }

          return false;
        }

      };
      /** 全局定时常量保存 */

      GHandlerInterval = new Map();
      GHandlerTimeOut = new Map(); //定时器的管理

      _SchedulerManager = class _SchedulerManager {
        /**
         * 开启定时刷新(后台不会关闭) --基于 setInterval
         * @callback 回调函数
         * @interval 时间间隔(单位:秒),若值为 0，那么回调函数每一帧都会被调用
         * @return number 定时器句柄
         */
        schedulerInterval(callback, interval, call) {
          if (interval === void 0) {
            interval = 0;
          }

          var time = interval * 1000;
          var handler = null; //注意:此处可能不为number;

          var i = _SchedulerManager.index;

          if (call) {
            handler = setInterval(function () {
              callback.call(call, time, i);
            }, time);
          } else {
            handler = setInterval(function () {
              callback(time, i);
            }, time);
          }

          this.unscheduleInterval(i);
          GHandlerInterval.set(i, handler);
          return i;
        }
        /**
         * 停止计时器 基于 setInterval
         * @param 定时器句柄
         */


        unscheduleInterval(index) {
          index = Number(index);

          if (isNaN(index)) {
            return;
          }

          if (GHandlerInterval.get(index) != null && GHandlerInterval.get(index) != undefined) {
            clearInterval(GHandlerInterval.get(index));
            GHandlerInterval.delete(index);
          }
        }
        /**
         * 开启一次延迟刷新(后台不会关闭) --基于 setTimeOut
         * @callback 回调函数
         * @interval 时间间隔(单位:秒),若值为 0，那么回调函数每一帧都会被调用
         * return number 定时器句柄
         */


        schedulerTimeout(callback, interval, call) {
          if (interval === void 0) {
            interval = 0;
          }

          var time = interval * 1000;
          var handler = null; //注意:此处可能不为number;

          var i = _SchedulerManager.index;

          if (call) {
            handler = setTimeout(dt => {
              SchedulerManager.unscheduleTimeout(i);
              callback.call(call, time, i);
            }, time);
          } else {
            handler = setTimeout(dt => {
              SchedulerManager.unscheduleTimeout(i);
              callback(time, i);
            }, time);
          }

          this.unscheduleTimeout(i);
          GHandlerTimeOut.set(i, handler);
          return i;
        }
        /**
         * 停止计时器 基于 setTimeout
         * @param 定时器句柄
         */


        unscheduleTimeout(index) {
          index = Number(index);

          if (isNaN(index)) {
            return;
          }

          if (GHandlerTimeOut.get(index) != null && GHandlerTimeOut.get(index) != undefined) {
            clearTimeout(GHandlerTimeOut.get(index));
            GHandlerTimeOut.delete(index);
          }
        }
        /** 所有定时器的句柄 {key = Object}*/


        //获取一个新的index
        static get index() {
          this._index = this._index + 1;
          return this._index;
        }

        static get instance() {
          if (!this._instance || this._instance == null) {
            this._instance = new _SchedulerManager();
          }

          return this._instance;
        } //实例化


        constructor() {
          this.handler = {};
          this.handler = {};
        }

        /**
         * @callback 回调函数
         * @interval 时间间隔(单位:秒),若值为 0，那么回调函数每一帧都会被调用
         * @repeat 可以让定时器触发 repeat + 1 次
         * @delay 指定延迟时间，定时器会在延迟指定的时间之后开始计时，单位: 秒
         * return number 定时器句柄
         */
        schedule(callback, interval, repeat, delay) {
          var sc = new _Scheduler();
          sc.schedule(callback, interval, repeat, delay);
          var i = _SchedulerManager.index;
          this.handler[i] = sc;
          return i;
        }
        /**
         * @callback 回调函数
         * @interval 时间间隔(单位:秒),若值为 0，那么回调函数每一帧都会被调用
         * @delay 指定延迟时间，定时器会在延迟指定的时间之后开始计时，单位: 秒
         * return number 定时器句柄
         */


        scheduleOnce(callback, interval, delay) {
          var sc = new _Scheduler();
          var i = _SchedulerManager.index;
          sc.scheduleOnce(dt => {
            callback(dt);
            this.unschedule(i);
          }, interval, delay);
          this.handler[i] = sc;
          return i;
        }
        /**
         * 停止计时器
         * @param 定时器句柄
         */


        unschedule(_handler) {
          if (_handler && this.handler[_handler]) {
            this.handler[_handler].unscheduleAll();

            this.handler[_handler] = null;
          }
        } //释放


        unscheduleAll() {
          for (var key in this.handler) {
            if (Object.prototype.hasOwnProperty.call(this.handler, key)) {
              this.unschedule(parseInt(key));
            }
          }

          GHandlerInterval.forEach((value, handler) => {
            SchedulerManager.unscheduleInterval(handler);
          });
          GHandlerTimeOut.forEach((value, handler) => {
            SchedulerManager.unscheduleTimeout(handler);
          });
        }

      };
      _SchedulerManager._index = 0;
      _SchedulerManager._instance = null;

      _export("SchedulerManager", SchedulerManager = _SchedulerManager.instance);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=cde840044012db6c3af2911669e33083a4233b4e.js.map