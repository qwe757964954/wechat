System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, error, EventHandler, game, Node, _decorator, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _crd, ccclass, property, menu, ButtonSimple;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Component = _cc.Component;
      error = _cc.error;
      EventHandler = _cc.EventHandler;
      game = _cc.game;
      Node = _cc.Node;
      _decorator = _cc._decorator;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8d645yObX1FvJfk2sbi0rxp", "ButtonSimple", undefined);

      __checkObsolete__(['Component', 'error', 'EventHandler', 'EventTouch', 'game', 'Node', '_decorator']);

      ({
        ccclass,
        property,
        menu
      } = _decorator);

      _export("default", ButtonSimple = (_dec = ccclass("ButtonSimple"), _dec2 = menu('gui/button/ButtonSimple'), _dec3 = property({
        tooltip: "是否只能触发一次"
      }), _dec4 = property({
        tooltip: "每次触发间隔(毫秒)"
      }), _dec5 = property({
        tooltip: "按钮是否可交互,这一项未选中时，按钮处于事件禁用状态"
      }), _dec6 = property({
        tooltip: "点击回调监听函数",
        type: EventHandler
      }), _dec(_class = _dec2(_class = (_class2 = class ButtonSimple extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "onlyOnce", _descriptor, this);

          _initializerDefineProperty(this, "delay_time", _descriptor2, this);

          _initializerDefineProperty(this, "interactable", _descriptor3, this);

          _initializerDefineProperty(this, "clickFunc", _descriptor4, this);

          this.touchCount = 0;
          this.touchtEndTime = 0;
          this._touchHandler = null;
          this._touchParam = null;
        }

        onLoad() {
          this.regTouchEvent();
        }
        /** 注册定义事件 */


        regTouchEvent() {
          if (!this.node) {
            return;
          }

          this.node.on(Node.EventType.TOUCH_START, this.onTouchtStart, this);
          this.node.on(Node.EventType.TOUCH_END, this.onTouchEnd, this);
          this.node.on(Node.EventType.TOUCH_CANCEL, this.onTouchCancel, this);
        }
        /**
         * 按钮是否可交互
         * @param bool 
         */


        set Interactable(bool) {
          if (typeof bool != "boolean") {
            error(`setInteractable 参数类型传递错误 期待:boolean 结果:${typeof bool}`);
            return;
          }

          this.interactable = bool == null ? true : bool;
        }
        /**
         * 按钮是否可交互
         */


        get Interactable() {
          return this.interactable;
        }
        /**
         * 公开:设置自定义点击函数
         * @param findNode 要绑定的函数所在的组件类绑定的节点
         * @param component 要绑定的函数所在的组件
         * @param handler 要绑定的函数
         * @param customEventData 自定义传递数据
         */


        setCustomEventHandler(findNode = null, component = null, handler = null, customEventData = null) {
          this.clickFunc.target = findNode;
          this.clickFunc.component = component;
          this.clickFunc.handler = handler;
          this.setCustomEventData(customEventData);
        }

        /**
         * 公开:设置自定义点击传递数据
         * @param customEventData 自定义传递数据
         */
        setCustomEventData(customEventData = null) {
          this.clickFunc.customEventData = customEventData;
          this._touchParam = customEventData;
        }

        /**
         * 公开:设置监听函数
         * @param callback 要绑定的函数
         * @param param 要传递的参数
         */
        addTouchEventListener(callback = null, param = null) {
          this._touchHandler = callback;
          this.setCustomEventData(param);
        }
        /** 公开：设置只能点击一次 */


        setOnlyOnce(isOnlyonce) {
          this.onlyOnce = isOnlyonce || false;
        }
        /** 公开：设置延迟时间 单位:毫秒 */


        set delayTime(time) {
          this.delay_time = time || 500;
        }
        /** 触摸开始 */


        onTouchtStart(event) {}
        /** 触摸按下 */


        onTouchEnd(event) {
          if (this.onlyOnce) {
            if (this.touchCount > 0) {
              event.propagationStopped = true;
              return;
            }

            this.touchCount++;
          } // 防连点500毫秒触发一次事件


          if (game.totalTime - this.touchtEndTime >= this.delay_time) {
            if (this.interactable) {
              var _this$clickFunc, _this$clickFunc2;

              (_this$clickFunc = this.clickFunc) == null ? void 0 : _this$clickFunc.emit([event, (_this$clickFunc2 = this.clickFunc) == null ? void 0 : _this$clickFunc2.customEventData]);

              if (this._touchHandler) {
                this._touchHandler(event, this._touchParam);
              }
            }
          }

          if (this.touchtEndTime && game.totalTime - this.touchtEndTime < this.delay_time) {
            event.propagationStopped = true;
          } else {
            this.touchtEndTime = game.totalTime;
          }
        }
        /** 触摸结束 */


        onTouchCancel(event) {}

        onDestroy() {
          this.node.off(Node.EventType.TOUCH_START, this.onTouchtStart, this);
          this.node.off(Node.EventType.TOUCH_END, this.onTouchEnd, this);
          this.node.off(Node.EventType.TOUCH_CANCEL, this.onTouchCancel, this);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "onlyOnce", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "delay_time", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 500;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "interactable", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return true;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "clickFunc", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return new EventHandler();
        }
      })), _class2)) || _class) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=590fd789bbab2ee71610ca28d3f19bf6608d6509.js.map