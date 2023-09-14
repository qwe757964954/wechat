System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, error, EventHandler, Node, Rect, UITransform, Vec3, _decorator, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _crd, ccclass, property, menu, ButtonTouchLongStatus, ButtonTouchLong;

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
      Node = _cc.Node;
      Rect = _cc.Rect;
      UITransform = _cc.UITransform;
      Vec3 = _cc.Vec3;
      _decorator = _cc._decorator;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e2034MX2g1EAL0jtbQF99de", "ButtonTouchLong", undefined);

      __checkObsolete__(['Component', 'error', 'EventHandler', 'EventTouch', 'Node', 'Rect', 'UITransform', 'Vec3', '_decorator']);

      ({
        ccclass,
        property,
        menu
      } = _decorator);
      /** ButtonTouchLong 回调时的状态 */

      _export("ButtonTouchLongStatus", ButtonTouchLongStatus = {
        /** 开始点击(只有长按才有) */
        START: "START",

        /** 运行时(只有长按才有) */
        RUN: "RUNNING",

        /** 点击结束 */
        END: "END"
      });

      _export("ButtonTouchLong", ButtonTouchLong = (_dec = ccclass("ButtonTouchLong"), _dec2 = menu('gui/button/ButtonTouchLong'), _dec3 = property({
        tooltip: "按钮是否可交互,这一项未选中时，按钮处于事件禁用状态"
      }), _dec4 = property({
        tooltip: "长按时间（秒）等于0则为点击",
        min: 0
      }), _dec5 = property({
        tooltip: "长按时是否只回调一次",
        visible: function () {
          return this.touchlongtime > 0;
        }
      }), _dec6 = property({
        tooltip: "长按的回调监听函数",
        type: EventHandler,
        visible: function () {
          return this.touchlongtime > 0;
        }
      }), _dec7 = property({
        tooltip: "点击的回调监听函数",
        type: EventHandler
      }), _dec(_class = _dec2(_class = (_class2 = class ButtonTouchLong extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "interactable", _descriptor, this);

          _initializerDefineProperty(this, "touchlongtime", _descriptor2, this);

          _initializerDefineProperty(this, "onceLongCallback", _descriptor3, this);

          _initializerDefineProperty(this, "clickLongFunc", _descriptor4, this);

          _initializerDefineProperty(this, "clickFunc", _descriptor5, this);

          this._touchHandler = null;
          this._touchParam = null;
          this._isTouchLong = false;
          this._currowPassTime = 0;
          this._currowEvent = null;
          this._currowBoxRect = null;
          this._isCanCallback = false;
          this._isOnload = false;
          this._isRegEvent = false;
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
          this.updateRegEventState();
        }
        /**
         * 按钮是否可交互
         */


        get Interactable() {
          return this.interactable;
        }
        /** 设置是否可以回调(只在按下过程中起作用) */


        set CanCallback(bool) {
          this._isCanCallback = bool == false ? false : true;
        }

        onLoad() {
          this._isOnload = true;
          this.regTouchEvent();
        }
        /** 更新注册事件的状态 */


        updateRegEventState() {
          if (!this._isOnload) {
            return;
          }

          if (this.interactable == true) {
            if (this._isRegEvent == false) {
              this.regTouchEvent();
            }
          } else {
            if (this._isRegEvent == true) {
              this.unRegTouchEvent();
            }
          }
        }
        /** 注册定义事件 */


        regTouchEvent() {
          if (!this.node) {
            return;
          }

          this.node.on(Node.EventType.TOUCH_START, this.onTouchtStart, this);
          this.node.on(Node.EventType.TOUCH_MOVE, this.onTouchtMove, this);
          this.node.on(Node.EventType.TOUCH_END, this.onTouchEnd, this);
          this.node.on(Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
          this._isRegEvent = true;
        }
        /** 卸载注册事件 */


        unRegTouchEvent() {
          if (!this.node || !this.node.isValid) {
            return;
          }

          this.node.off(Node.EventType.TOUCH_START, this.onTouchtStart, this);
          this.node.off(Node.EventType.TOUCH_MOVE, this.onTouchtMove, this);
          this.node.off(Node.EventType.TOUCH_END, this.onTouchEnd, this);
          this.node.off(Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
          this._isRegEvent = false;
        }
        /**
         * 公开:设置自定义点击函数
         * @param findNode 要绑定的函数所在的组件类绑定的节点
         * @param component 要绑定的函数所在的组件
         * @param handler 要绑定的函数
         * @param customEventData 自定义传递数据
         */


        setCustomEventHandler(findNode = null, component = null, handler = null, customEventData = null) {
          this.clickLongFunc.target = findNode;
          this.clickLongFunc.component = component;
          this.clickLongFunc.handler = handler;
          this.setCustomEventData(customEventData);
        }

        /**
         * 公开:设置自定义点击传递数据
         * @param customEventData 自定义传递数据
         */
        setCustomEventData(customEventData = null) {
          this.clickLongFunc.customEventData = customEventData;
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
        /** 触摸开始 */


        onTouchtStart(event) {
          this._currowEvent = event;
          this._currowPassTime = 0;
          this._currowBoxRect = null;
          this._isCanCallback = true;
          this._isTouchLong = false;
          let uiTransform = this.node.getComponent(UITransform);

          if (uiTransform) {
            //计算滑动的矩形区域
            let width = Math.abs(uiTransform.width) * Math.abs(this.node.scale.x);
            let height = Math.abs(uiTransform.height) * Math.abs(this.node.scale.y);
            let worldPos = new Vec3();
            this.node.getWorldPosition(worldPos); // 矩形左下点的坐标。

            let nodeLeftBottomPos = {
              x: worldPos.x,
              y: worldPos.y
            }; // console.log("世界坐标:", worldPos)

            if (uiTransform.anchorX < 0 || uiTransform.anchorX > 1 || uiTransform.anchorY < 0 || uiTransform.anchorY > 1) {
              return;
            }

            nodeLeftBottomPos.x = nodeLeftBottomPos.x - width * uiTransform.anchorX;
            nodeLeftBottomPos.y = nodeLeftBottomPos.y - height * uiTransform.anchorY; //矩形盒子大小

            this._currowBoxRect = new Rect(nodeLeftBottomPos.x, nodeLeftBottomPos.y, width, height);
          }
        }
        /** 触摸移动 */


        onTouchtMove(event) {
          this._currowEvent = event;
          this.checkRect();
        }
        /** 触摸结束 */


        onTouchEnd(event) {
          if (this._currowPassTime > this.touchlongtime) {
            event.propagationStopped = true;
          } //说明可以触发点击


          let oldEvent = this._currowEvent;
          let isTouchLong = this._isTouchLong;
          this._currowEvent = event;
          this.checkRect();
          this._currowEvent = null;
          this._isTouchLong = false;
          this._currowPassTime = 0;

          if (isTouchLong == false && oldEvent != null && this._isCanCallback == true) {
            //非长按
            this.onClickCallback(event, ButtonTouchLongStatus.END);
          }

          if (isTouchLong == true && oldEvent != null && this.onceLongCallback == false) {
            //最后一次长按
            this.onLongClickCallback(event, ButtonTouchLongStatus.END);
          }

          this._isCanCallback = false;
        }
        /** 移除长按 */


        removeTouchLong() {
          this._currowEvent = null;
          this._isTouchLong = false;
          this._isCanCallback = false;
        }
        /** 引擎更新事件 */


        update(dt) {
          if (this._currowEvent && this.interactable == true && this._isCanCallback == true) {
            this._currowPassTime = this._currowPassTime + dt;

            if (this.touchlongtime <= 0) {
              this._isTouchLong = false;
              this.onClickCallback(this._currowEvent, ButtonTouchLongStatus.END);
              this.removeTouchLong();
              return;
            } //以下长按


            if (this._currowPassTime >= this.touchlongtime) {
              let status = ButtonTouchLongStatus.RUN;

              if (this._isTouchLong == false) {
                status = ButtonTouchLongStatus.START;
              }

              if (this.onceLongCallback == true) {
                status = ButtonTouchLongStatus.END;
              }

              this._isTouchLong = true;
              this.onLongClickCallback(this._currowEvent, status);

              if (this.onceLongCallback == true) {
                this.removeTouchLong();
              }
            }
          }
        }
        /** 检查矩形区域 */


        checkRect() {
          if (this._currowEvent) {
            let touchWorldPos = this._currowEvent.touch.getUILocation();

            if (this._currowBoxRect) {
              if (this._currowBoxRect.contains(touchWorldPos) == false) {
                this._isCanCallback = false;
              }
            }
          }
        }
        /** 长按的回调 */


        onLongClickCallback(event, status = null) {
          var _this$clickLongFunc, _this$clickLongFunc2;

          // console.log("长按状态:", status);
          if (this._isCanCallback == false || this.interactable == false) {
            return;
          }

          (_this$clickLongFunc = this.clickLongFunc) == null ? void 0 : _this$clickLongFunc.emit([event, status, (_this$clickLongFunc2 = this.clickLongFunc) == null ? void 0 : _this$clickLongFunc2.customEventData]);

          if (this._touchHandler) {
            this._touchHandler(event, status, this._touchParam);
          }
        }
        /** 点击的回调 */


        onClickCallback(event, status = null) {
          var _this$clickFunc, _this$clickFunc2;

          // console.log("点击状态:", status);
          if (this._isCanCallback == false || this.interactable == false) {
            return;
          }

          (_this$clickFunc = this.clickFunc) == null ? void 0 : _this$clickFunc.emit([event, status, (_this$clickFunc2 = this.clickFunc) == null ? void 0 : _this$clickFunc2.customEventData]);

          if (this._touchHandler) {
            this._touchHandler(event, status, this._touchParam);
          }
        }

        onDestroy() {
          this._currowEvent = null;
          this.unRegTouchEvent();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "interactable", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return true;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "touchlongtime", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 1;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "onceLongCallback", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "clickLongFunc", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return new EventHandler();
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "clickFunc", [_dec7], {
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
//# sourceMappingURL=c262b1318c24e9519efd01d984f945e6eb03e83e.js.map