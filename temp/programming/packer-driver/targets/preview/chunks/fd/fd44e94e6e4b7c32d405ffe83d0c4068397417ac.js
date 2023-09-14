System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Label, _decorator, Utils, BaseComponent, RoomMgr, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, Remain;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfUtils(extras) {
    _reporterNs.report("Utils", "../../../../../framework/Utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../../../../framework/vc/BaseComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoomMgr(extras) {
    _reporterNs.report("RoomMgr", "../../../cache/RoomMgr", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Label = _cc.Label;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      Utils = _unresolved_2.Utils;
    }, function (_unresolved_3) {
      BaseComponent = _unresolved_3.BaseComponent;
    }, function (_unresolved_4) {
      RoomMgr = _unresolved_4.RoomMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "bbc90oe+RBIpZLmkLO3cxd+", "Remain", undefined);

      __checkObsolete__(['EventTouch', 'Label', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Name = Remain
       * URL = db://assets/package/game/module/bugang/src/Remain.ts
       * Time = Wed Aug 02 2023 20:46:16 GMT+0800 (中国标准时间)
       * Author = qwe757964
       *
       * Life: onLoad-->onInitModuleEvent-->onEnable->start->update->lateUpdate->onDisable->onDestroy
       * 
       */

      _export("Remain", Remain = (_dec = ccclass('Remain'), _dec2 = property(Label), _dec3 = property(Label), _dec(_class = (_class2 = class Remain extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "timeLabel", _descriptor, this);

          _initializerDefineProperty(this, "remainCardLabel", _descriptor2, this);

          this._handlerTimeUpdate = null;
        }

        /** override 初始化模块事件 */
        onInitModuleEvent() {}

        onLoad() {
          console.log("startUpdateTime_________________________");
          this.startUpdateTime();
        }

        /** 开始更新时间 */
        startUpdateTime() {
          if (this._handlerTimeUpdate) {
            return;
          }

          this.stopScheduler(this._handlerTimeUpdate);
          this._handlerTimeUpdate = null;
          this.updateTime();
          this.addScheduler(1, (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).handler(this, this.updateTime));
        } //更新时间


        updateTime() {
          this.timeLabel.string = this.getNowTime();
        } //获取时间


        getNowTime() {
          var date = new Date(); //年 getFullYear()：四位数字返回年份

          var year = date.getFullYear(); //getFullYear()代替getYear()
          //月 getMonth()：0 ~ 11

          var month = date.getMonth() + 1; //日 getDate()：(1 ~ 31)

          var day = date.getDate(); //时 getHours()：(0 ~ 23)

          var hour = date.getHours(); //分 getMinutes()： (0 ~ 59)

          var minute = date.getMinutes(); //秒 getSeconds()：(0 ~ 59)

          var second = date.getSeconds();
          return hour + ":" + this.addZero(minute);
        }

        addZero(s) {
          return s < 10 ? '0' + s : s;
        }

        updateRemainCardsCount() {
          this.remainCardLabel.string = "" + (_crd && RoomMgr === void 0 ? (_reportPossibleCrUseOfRoomMgr({
            error: Error()
          }), RoomMgr) : RoomMgr).getInstance().remainCardsCount;
        }

        start() {}

        /** 初始化界面 */
        initView() {}

        /** 更新界面 */
        updateView() {}

        /** 点击了关闭 */
        onClickClose(event) {}

        //销毁
        onDestroy() {}

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "timeLabel", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "remainCardLabel", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=fd44e94e6e4b7c32d405ffe83d0c4068397417ac.js.map