System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _EventManager, Observer, _crd, EventManager;

  _export("_EventManager", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "98299TitIxEPp9ooWvS44HF", "EventManager", undefined);

      /**
       * Name = _EventManager 
       * URL = db://assets/framework/manager/_EventManager.ts
       * Time = Wed Apr 06 2022 10:47:07 GMT+0800 (中国标准时间)
       * Author = xueya
       * 事件消息处理
       */
      _export("_EventManager", _EventManager = class _EventManager {
        constructor() {
          this.listeners = {};
        }

        static get instance() {
          if (!this._instance || this._instance == null) {
            this._instance = new _EventManager();
          }

          return this._instance;
        }
        /** 
         * 注册事件 每一个事件对应n个上下文
         * @param name 事件名称
         * @param callback 回调函数
         * @param context 上下文 可空
         */


        addListener(name, callback, context) {
          var observers = this.listeners[name];

          if (!observers) {
            this.listeners[name] = [];
          }

          this.listeners[name].push(new Observer(callback, context));
        }
        /**
         * 移除事件
         * @param name 事件名称
         * @param callback 回调函数
         * @param context 上下文
         */


        removeListener(name, context) {
          var observers = this.listeners[name];
          if (!observers) return;
          var length = observers.length;

          for (var i = 0; i < length; i++) {
            var observer = observers[i];

            if (observer.compar(context)) {
              observers.splice(i, 1);
              break;
            }
          }

          if (observers.length == 0) {
            delete this.listeners[name];
          }
        }
        /**
         * 根据上下文移除所有事件
         * @param context 
         * @returns 
         */


        removeListenerByContext(context) {
          var deleteList = [];

          for (var event in this.listeners) {
            if (Object.prototype.hasOwnProperty.call(this.listeners, event)) {
              var observers = this.listeners[event];

              if (observers) {
                for (var i = length - 1; i >= 0; i--) {
                  var observer = observers[i];

                  if (observer.compar(context)) {
                    observers.splice(i, 1);
                    break;
                  }
                }
              }

              ;

              if (observers.length == 0) {
                deleteList.push(event);
              }

              ;
            }
          }

          for (var _i = 0; _i < deleteList.length; _i++) {
            if (this.listeners[deleteList[_i]]) {
              delete this.listeners[deleteList[_i]];
            }

            ;
          }

          ;
        }
        /**
         * 分发事件
         * @param event 事件名称
         */


        dispatch(event) {
          /**获取该事件相关的所有上下文 */
          var observers = this.listeners[event];
          if (!observers) return;
          var length = observers.length;

          for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            args[_key - 1] = arguments[_key];
          }

          for (var i = 0; i < length; i++) {
            var observer = observers[i];
            observer.notify(event, ...args);
          }
        }

      });
      /**
       * 观察者
       */


      _EventManager._instance = null;
      Observer = class Observer {
        /** 回调函数 */

        /** 上下文 */
        constructor(callback, context) {
          this.callback = null;
          this.context = null;
          var self = this;
          self.callback = callback;
          self.context = context;
        }
        /**
         * 发送通知
         * @param args 不定参数
         */


        notify() {
          var self = this;

          for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
          }

          self.callback.call(self.context, ...args);
        }
        /**
         * 上下文比较
         * @param context 上下文
         */


        compar(context) {
          return context == this.context;
        }

      };

      _export("EventManager", EventManager = _EventManager.instance);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=fde7aea1f621f3aeee040287c0d89c66a47e7ca5.js.map