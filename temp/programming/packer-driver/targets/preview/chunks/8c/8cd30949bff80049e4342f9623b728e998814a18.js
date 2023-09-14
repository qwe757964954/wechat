System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, _decorator, Logger, EventManager, ResLoaderManager, SchedulerManager, _dec, _dec2, _class, _crd, ccclass, menu, BaseComponent;

  function _reportPossibleCrUseOfLogger(extras) {
    _reporterNs.report("Logger", "../log/Logger", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventManager(extras) {
    _reporterNs.report("EventManager", "../manager/EventManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResLoaderManager(extras) {
    _reporterNs.report("ResLoaderManager", "../manager/ResLoaderManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSchedulerManager(extras) {
    _reporterNs.report("SchedulerManager", "../manager/SchedulerManager", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Component = _cc.Component;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      Logger = _unresolved_2.Logger;
    }, function (_unresolved_3) {
      EventManager = _unresolved_3.EventManager;
    }, function (_unresolved_4) {
      ResLoaderManager = _unresolved_4.ResLoaderManager;
    }, function (_unresolved_5) {
      SchedulerManager = _unresolved_5.SchedulerManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9e9f42j6dhK26+UF5RS3/rQ", "BaseComponent", undefined);

      __checkObsolete__(['Component', '_decorator']);

      ({
        ccclass,
        menu
      } = _decorator);
      /**
       * Name = BaseComponent
       * URL = db://assets/framework/vc/BaseComponent.ts
       * Time = Tue Apr 19 2022 15:46:20 GMT+0800 (中国标准时间)
       * Author = xueya
       *
       * Life: onLoad-->onEnable->start->update->lateUpdate->onDisable->onDestroy
       */

      _export("BaseComponent", BaseComponent = (_dec = ccclass('BaseComponent'), _dec2 = menu('vc/BaseComponent'), _dec(_class = _dec2(_class = class BaseComponent extends Component {
        /** 当前类预加载的资源 */

        /**子类继承的onload函数 */

        /**子类继承的销毁函数 */
        constructor() {
          super();
          /**重载onLoad */

          this.preLoadMap = new Map();
          this.extent_onLoad = null;
          this.extent_onDestroy = null;
          this._Eventlistener = {};
          this._schedulerHandler = {};
          this._schedulerHandlerOnce = {};
          this.extent_onLoad = this.onLoad;

          this.onLoad = function () {
            this.onLoadBefore();
            this.extent_onLoad();
          };
          /**重载销毁 加入自动清理 */


          this.extent_onDestroy = this.onDestroy;

          this.onDestroy = function () {
            this.onDestroyBefore();
            this.extent_onDestroy();
          };
        }

        /**
         * 在onload之前调用
         */
        onLoadBefore() {
          this.removeAllModelListener();
          this.onInitModuleEvent();
        }

        onLoad() {
          this.onLoadBefore();
        }

        onEnable() {//当状态被激活时会调用
        }

        start() {}

        /**override 定时器的回调更新，子类需重写该方法 */
        onSchedulerUpdate(dt) {}
        /**override 初始化模块事件，子类需重写该方法 */


        onInitModuleEvent() {}
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
         * 发送事件
         * @param name 事件名称
         * @param callback 回调函数
         */


        dispatchEvent(name) {
          for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            args[_key - 1] = arguments[_key];
          }

          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch(name, ...args);
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
        /** 移除当前类所有加载 */


        removePreLoadMap() {
          this.preLoadMap.forEach((VALUE, KEY) => {
            (_crd && ResLoaderManager === void 0 ? (_reportPossibleCrUseOfResLoaderManager({
              error: Error()
            }), ResLoaderManager) : ResLoaderManager).getInstance().removePreLoaderRecord(KEY);
          });
          this.preLoadMap.clear();
        }
        /**
         * 清理(在调用 onDestroy 前自动清理)
         */


        onDestroyBefore() {
          this.stopAllScheduler();
          this.removeAllModelListener();
          this.removePreLoadMap();
        } //销毁


        onDestroy() {
          this.onDestroyBefore();
        }

        /**
         * 获取预加载的资源
         * @param bundle 包名
         * @param path 资源路径
         * @param resType 资源类型
         * @param callback 成功回调
         * @param isReload 是否重新加载 默认为false
         */
        getPreLoaderRes(bundle, path, resType, callback, isReload) {
          if (resType === void 0) {
            resType = null;
          }

          if (callback === void 0) {
            callback = null;
          }

          if (isReload === void 0) {
            isReload = false;
          }

          if (!path) {
            return;
          }

          var self = this;
          (_crd && ResLoaderManager === void 0 ? (_reportPossibleCrUseOfResLoaderManager({
            error: Error()
          }), ResLoaderManager) : ResLoaderManager).getInstance().getPreLoaderRes(bundle, path, resType, (res, key) => {
            if (!self.node) {
              return;
            }

            if (self.node && self.node.isValid == true) {
              self.preLoadMap.delete(key);
              self.preLoadMap.set(key, true);

              if (callback) {
                callback(res);
              }
            }
          }, isReload);
        }
        /** 获取列表中的预加载资源 */


        getPreLoaderArrayRes(list, callback, isReload) {
          if (callback === void 0) {
            callback = null;
          }

          if (isReload === void 0) {
            isReload = false;
          }

          if (!list.length) {
            return;
          }

          var next = (index, isReload) => {
            var self = this;
            var resConf = list[index];
            var ddzRes = resConf.ddzRes;
            var resIndex = index;
            (_crd && ResLoaderManager === void 0 ? (_reportPossibleCrUseOfResLoaderManager({
              error: Error()
            }), ResLoaderManager) : ResLoaderManager).getInstance().getPreLoaderRes(ddzRes.bundle, ddzRes.path, resConf.resType, (res, key) => {
              if (self.preLoadMap) {
                self.preLoadMap.delete(key);
                self.preLoadMap.set(key, true);
              }

              resIndex++;

              if (resIndex < list.length) {
                next(resIndex, isReload);
              } else {
                callback && callback();
              }
            }, isReload);
          };

          next(0, isReload);
        }
        /**
         * 获取预加载的远端资源
         * @param bundle 包名
         * @param path 资源路径
         * @param resType 资源类型 string 例'.jpg'
         * @param callback 成功回调
         * @param isReload 是否重新加载 默认为false
         */


        getPreLoaderRemoteRes(path, resType, callback, isReload) {
          if (resType === void 0) {
            resType = null;
          }

          if (callback === void 0) {
            callback = null;
          }

          if (isReload === void 0) {
            isReload = false;
          }

          if (!path) {
            return;
          }

          var self = this;
          (_crd && ResLoaderManager === void 0 ? (_reportPossibleCrUseOfResLoaderManager({
            error: Error()
          }), ResLoaderManager) : ResLoaderManager).getInstance().getPreLoaderRemoteRes(path, resType, (res, key) => {
            if (!self) {
              return;
            }

            if (self.node && self.node.isValid == true) {
              self.preLoadMap.delete(key);
              self.preLoadMap.set(key, true);

              if (callback) {
                callback(res);
              }
            }
          }, isReload);
        }

        print() {
          for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
          }

          (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
            error: Error()
          }), Logger) : Logger).logView(5, args);
        }

      }) || _class) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=8cd30949bff80049e4342f9623b728e998814a18.js.map