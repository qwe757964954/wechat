System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, sys, Logger, EventManager, SchedulerManager, Utils, BaseControll, _crd;

  function _reportPossibleCrUseOfLogger(extras) {
    _reporterNs.report("Logger", "../log/Logger", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventManager(extras) {
    _reporterNs.report("EventManager", "../manager/EventManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSchedulerManager(extras) {
    _reporterNs.report("SchedulerManager", "../manager/SchedulerManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUtils(extras) {
    _reporterNs.report("Utils", "../Utils", _context.meta, extras);
  }

  _export("BaseControll", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      sys = _cc.sys;
    }, function (_unresolved_2) {
      Logger = _unresolved_2.Logger;
    }, function (_unresolved_3) {
      EventManager = _unresolved_3.EventManager;
    }, function (_unresolved_4) {
      SchedulerManager = _unresolved_4.SchedulerManager;
    }, function (_unresolved_5) {
      Utils = _unresolved_5.Utils;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8ddf0/P2vdAzIPmPlQU+FMv", "BaseController", undefined);

      __checkObsolete__(['sys']);

      _export("BaseControll", BaseControll = class BaseControll {
        //实例化
        constructor(name) {
          this._className = "BaseControll";
          this._Eventlistener = {};
          this._schedulerHandler = {};
          this._schedulerHandlerOnce = {};

          this.print = function () {
            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }

            (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
              error: Error()
            }), Logger) : Logger).logModel(5, ...args);
          };

          this.dump = function (arg1, args2) {
            if (args2 === void 0) {
              args2 = null;
            }

            if (!args2) {
              args2 = "打印输出 :";
            }

            (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
              error: Error()
            }), Logger) : Logger).logModel(5, args2);

            if (sys.platform == sys.Platform.DESKTOP_BROWSER) {
              console.table(arg1);
            } else {
              (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                error: Error()
              }), Utils) : Utils).dump(arg1);
            }
          };

          this._className = name;
          (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
            error: Error()
          }), Logger) : Logger).logModel(5, this._className + "\u521D\u59CB\u5316...");
          this.onInitModuleEvent();
        }

        /**
         * 添加一个延时
         * @param time 时间 单位:秒
         * @param callback 更新函数(默认为:onSchedulerUpdate) 
         * @param return 定时器句柄number
         */
        addSchedulerOnce(time, callback) {
          if (time === void 0) {
            time = 0;
          }

          if (callback === void 0) {
            callback = this.onSchedulerUpdate;
          }

          var content = this;
          var handler = (_crd && SchedulerManager === void 0 ? (_reportPossibleCrUseOfSchedulerManager({
            error: Error()
          }), SchedulerManager) : SchedulerManager).schedulerTimeout(dt => {
            callback.call(content, dt, handler);
            content.stopSchedulerOnce(handler);
          }, time);
          this._schedulerHandlerOnce[handler] = true;
          return handler;
        }
        /** 停止延时定时器 */


        stopSchedulerOnce(handler) {
          (_crd && SchedulerManager === void 0 ? (_reportPossibleCrUseOfSchedulerManager({
            error: Error()
          }), SchedulerManager) : SchedulerManager).unscheduleTimeout(handler);

          if (handler != null && this._schedulerHandlerOnce[handler] == true) {
            this._schedulerHandlerOnce[handler] = null;
          }
        }
        /**
         * 添加一个定时器
         * @param time 时间 单位:秒
         * @param callback 更新函数(默认为:onSchedulerUpdate) 
         * @param return 定时器句柄number
         */


        addScheduler(time, callback) {
          if (time === void 0) {
            time = 0;
          }

          if (callback === void 0) {
            callback = this.onSchedulerUpdate;
          }

          var content = this;
          var handler = (_crd && SchedulerManager === void 0 ? (_reportPossibleCrUseOfSchedulerManager({
            error: Error()
          }), SchedulerManager) : SchedulerManager).schedulerInterval((dt, _handler) => {
            callback.call(content, dt, handler);
          }, time);
          this._schedulerHandler[handler] = true;
          return handler;
        }
        /** 停止定时器 */


        stopScheduler(handler) {
          (_crd && SchedulerManager === void 0 ? (_reportPossibleCrUseOfSchedulerManager({
            error: Error()
          }), SchedulerManager) : SchedulerManager).unscheduleInterval(handler);

          if (handler != null && this._schedulerHandler[handler] == true) {
            this._schedulerHandler[handler] = null;
          }
        }
        /** 停止所有定时器 */


        stopAllScheduler() {
          for (var handler in this._schedulerHandler) {
            if (Object.prototype.hasOwnProperty.call(this._schedulerHandler, handler)) {
              this.stopScheduler(Number(handler));
            }
          }

          for (var _handler2 in this._schedulerHandlerOnce) {
            if (Object.prototype.hasOwnProperty.call(this._schedulerHandlerOnce, _handler2)) {
              this.stopSchedulerOnce(Number(_handler2));
            }
          }
        }
        /**override 定时器的回调更新，子类需重写该方法 */


        onSchedulerUpdate(dt) {}
        /**override 初始化模块事件，子类需重写该方法 */


        onInitModuleEvent() {}
        /**
         * 添加事件绑定
         * @param name 事件名称
         * @param callback 回调函数
         */


        addModelListener(name, callback) {
          this.removeModelListener(name);
          this._Eventlistener[name] = name;
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).addListener(name, callback, this);
        }
        /**
         * 移除事件
         * @param name 
         */


        removeModelListener(name) {
          if (this._Eventlistener[name]) {
            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).removeListener(name, this);
            this._Eventlistener[name] = null;
          }
        }
        /**
         * 移除所有事件
         * @param name 
         */


        removeAllModelListener() {
          for (var event in this._Eventlistener) {
            if (Object.prototype.hasOwnProperty.call(this._Eventlistener, event)) {
              this.removeModelListener(event);
            }
          }

          this._Eventlistener = {};
        }
        /**清理所有 */


        clear() {
          this.stopAllScheduler();
          this.removeAllModelListener();
        } //当前类日志输出


      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=c83f6ed76759d97daf22184bd6ffbdec45b381bd.js.map