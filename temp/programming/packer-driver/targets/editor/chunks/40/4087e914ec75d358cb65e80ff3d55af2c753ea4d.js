System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, EventHandler, EventTouch, Node, PageView, ScrollView, Vec2, Vec3, _decorator, SuperLayout, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _crd, ccclass, property, menu, quintEaseOut, EPSILON, OUT_OF_BOUNDARY_BREAKING_FACTOR, _tempVec2, ScrollViewDirection, SuperScrollView;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfSuperLayout(extras) {
    _reporterNs.report("SuperLayout", "./SuperLayout", _context.meta, extras);
  }

  _export("ScrollViewDirection", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      EventHandler = _cc.EventHandler;
      EventTouch = _cc.EventTouch;
      Node = _cc.Node;
      PageView = _cc.PageView;
      ScrollView = _cc.ScrollView;
      Vec2 = _cc.Vec2;
      Vec3 = _cc.Vec3;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      SuperLayout = _unresolved_2.SuperLayout;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "37114ZKFFROdL3wpou2aYLh", "SuperScrollView", undefined);

      __checkObsolete__(['EventHandler', 'EventTouch', 'Node', 'PageView', 'ScrollView', 'Vec2', 'Vec3', '_decorator']);

      ({
        ccclass,
        property,
        menu
      } = _decorator);

      quintEaseOut = time => {
        time -= 1;
        return time * time * time * time * time + 1;
      };

      EPSILON = 1e-4;
      OUT_OF_BOUNDARY_BREAKING_FACTOR = 0.015;
      _tempVec2 = new Vec2();

      (function (ScrollViewDirection) {
        ScrollViewDirection[ScrollViewDirection["HORIZONTAL"] = 0] = "HORIZONTAL";
        ScrollViewDirection[ScrollViewDirection["VERTICAL"] = 1] = "VERTICAL";
        ScrollViewDirection[ScrollViewDirection["NONE"] = 2] = "NONE";
      })(ScrollViewDirection || _export("ScrollViewDirection", ScrollViewDirection = {}));

      /**
       * Name = SuperScrollView
       * URL = db://assets/framework/gui/scrollview/SuperScrollView.ts
       * Time = Mon Feb 27 2023 09:54:35 GMT+0800 (中国标准时间)
       * Author = xueya
       *
       * Life: onLoad-->onEnable->start->update->lateUpdate->onDisable->onDestroy
       */
      _export("SuperScrollView", SuperScrollView = (_dec = ccclass('SuperScrollView'), _dec2 = menu('gui/scrollview/SuperScrollView'), _dec3 = property({
        tooltip: "注意！向上传递事件只会发送当前滑动相反方向,如果开启horizontal则会发送vertical事件。如果开启vertical则会发送horizontal事件。同时开启horizontal和vertical 不会发送任何事件"
      }), _dec4 = property({
        displayName: "顶部偏移量",
        tooltip: "下拉时超过此偏移会发送下拉事件",
        visible: function () {
          return this.pullRefresh;
        }
      }), _dec5 = property({
        displayName: "满足触发Header的倍数",
        visible: function () {
          return this.pullRefresh;
        }
      }), _dec6 = property({
        displayName: "底部偏移量",
        tooltip: "上拉时超过此偏移会发送上拉事件",
        visible: function () {
          return this.pullRefresh;
        }
      }), _dec7 = property({
        displayName: "满足触发Footer的倍数",
        visible: function () {
          return this.pullRefresh;
        }
      }), _dec8 = property({
        type: EventHandler,
        visible: function () {
          return this.pullRefresh;
        }
      }), _dec9 = property({
        type: EventHandler,
        visible: function () {
          return this.pullRefresh;
        }
      }), _dec(_class = _dec2(_class = (_class2 = class SuperScrollView extends ScrollView {
        constructor(...args) {
          super(...args);
          this.direction = ScrollViewDirection.NONE;

          _initializerDefineProperty(this, "isTransmitEvent", _descriptor, this);

          _initializerDefineProperty(this, "pullRefresh", _descriptor2, this);

          _initializerDefineProperty(this, "headerOutOffset", _descriptor3, this);

          _initializerDefineProperty(this, "headerMultiple", _descriptor4, this);

          _initializerDefineProperty(this, "footerOutOffset", _descriptor5, this);

          _initializerDefineProperty(this, "footerMultiple", _descriptor6, this);

          _initializerDefineProperty(this, "headerEvents", _descriptor7, this);

          _initializerDefineProperty(this, "footerEvents", _descriptor8, this);

          this.prevLocation = new Vec2();
          this.location = new Vec2();
          this._touchBeganPosition = new Vec2();
          this._touchEndPosition = new Vec2();
          this.isMoveHeader = false;
          this.isMoveFooter = false;
          this.isLockHeader = false;
          this.isLockFooter = false;
          this.headerProgress = 0;
          this.footerProgress = 0;
          this.isCustomScroll = false;
          this.canTouchMove = true;
          this.isCallSoonFinish = false;
        }

        set autoScrolling(value) {
          this._autoScrolling = value;
        }

        onLoad() {
          if (this.layout.autoCenter) {
            this.brake = 0.7;
          }
        }

        onEnable() {
          super.onEnable();
          this.node.on(PageView.EventType.SCROLL_ENG_WITH_THRESHOLD, this.dispatchPageTurningEvent, this);
        }

        onDisable() {
          super.onDisable();
          this.node.off(PageView.EventType.SCROLL_ENG_WITH_THRESHOLD, this.dispatchPageTurningEvent, this);
        }

        get layout() {
          if (!this._layout) {
            var _this$content;

            this._layout = (_this$content = this.content) == null ? void 0 : _this$content.getComponent(_crd && SuperLayout === void 0 ? (_reportPossibleCrUseOfSuperLayout({
              error: Error()
            }), SuperLayout) : SuperLayout);
          }

          return this._layout;
        }

        get curPageIdx() {
          return this.layout["_currPageIndex"];
        }

        getPages() {
          return new Array(this.layout.itemTotal);
        }

        _getContentTopBoundary() {
          if (!this._content) {
            return -1;
          }

          let offset = this.layout.isOfTopBoundary == 0 ? this._topBoundary : this.layout.isOfTopBoundary;
          return offset;
        }

        _getContentBottomBoundary() {
          if (!this._content) {
            return -1;
          }

          let offset = this.layout.isOfButtomBoundary == 0 ? this._bottomBoundary : this.layout.isOfButtomBoundary;
          return offset;
        }

        _getContentLeftBoundary() {
          if (!this._content) {
            return -1;
          }

          let offset = this.layout.isOfLeftBoundary == 0 ? this._leftBoundary : this.layout.isOfLeftBoundary;
          return offset;
        }

        _getContentRightBoundary() {
          if (!this._content) {
            return -1;
          }

          let offset = this.layout.isOfRightBoundary == 0 ? this._rightBoundary : this.layout.isOfRightBoundary;
          return offset;
        }

        _onTouchBegan(event, captureListeners) {
          this.isCallSoonFinish = false;
          this.isCustomScroll = false;
          this.layout["onTouchBegin"]();
          if (!this.canTouchMove) return;
          this.direction = ScrollViewDirection.NONE;

          if (this.layout.isPageView) {
            event.touch.getUILocation(_tempVec2);
            Vec2.set(this._touchBeganPosition, _tempVec2.x, _tempVec2.y);
          }

          super._onTouchBegan(event, captureListeners);

          if (this.isTransmitEvent) {
            this.transmitEvent(event, Node.EventType.TOUCH_START);
          }
        }

        _onTouchMoved(event, captureListeners) {
          var _event$touch, _event$touch2;

          this.isCallSoonFinish = false;
          this.isCustomScroll = false;
          if (!this.canTouchMove) return;

          if (this.isTransmitEvent) {
            if (this.direction == ScrollViewDirection.NONE) {
              var start = event.getStartLocation();
              var curre = event.getLocation();
              var xOffset = Math.abs(start.x - curre.x);
              var yOffset = Math.abs(start.y - curre.y);

              if (xOffset > yOffset) {
                // 本ScrollView滑动方向过程中达到一定偏移量是也可以向上发送事件
                // if (this.vertical) {
                //     if (xOffset - yOffset > 50) {
                //         this.direction = UIScrollViewDirection.HORIZONTAL
                //     }
                // }
                this.direction = ScrollViewDirection.HORIZONTAL;
              } else if (yOffset > xOffset) {
                // 本ScrollView滑动方向过程中达到一定偏移量是也可以向上发送事件
                // if (this.horizontal) {
                //     if (yOffset - xOffset > 50) {
                //         this.direction = UIScrollViewDirection.VERTICAL
                //     }
                // }
                this.direction = ScrollViewDirection.VERTICAL;
              }
            }

            var canTransmit = this.vertical && this.direction === ScrollViewDirection.HORIZONTAL || this.horizontal && this.direction == ScrollViewDirection.VERTICAL;

            if (canTransmit) {
              this.transmitEvent(event, Node.EventType.TOUCH_MOVE);
              return;
            }
          }

          this.prevLocation = (_event$touch = event.touch) == null ? void 0 : _event$touch.getPreviousLocation();
          this.location = (_event$touch2 = event.touch) == null ? void 0 : _event$touch2.getLocation();

          super._onTouchMoved(event, captureListeners);

          if (this.pullRefresh) {
            let outOfBoundary = this._getHowMuchOutOfBoundary();

            let offset = this.vertical ? outOfBoundary.y : -outOfBoundary.x;

            if (offset > 0 && !this.isLockHeader && !this.isLockFooter) {
              this.headerProgress = offset < EPSILON ? 0 : offset / this.headerOutOffset;
              this.isMoveHeader = this.headerProgress >= this.headerMultiple;
              EventHandler.emitEvents(this.headerEvents, this, {
                action: false,
                progress: this.headerProgress,
                stage: this.isMoveHeader ? "wait" : "touch"
              });
              EventHandler.emitEvents(this.footerEvents, this, {
                action: false,
                progress: 0,
                stage: "release"
              });
            } else if (offset < 0 && !this.isLockHeader && !this.isLockFooter) {
              this.footerProgress = -offset < EPSILON ? 0 : -offset / this.footerOutOffset;
              this.isMoveFooter = this.footerProgress >= this.footerMultiple;
              EventHandler.emitEvents(this.footerEvents, this, {
                action: false,
                progress: this.footerProgress,
                stage: this.isMoveFooter ? "wait" : "touch"
              });
              EventHandler.emitEvents(this.headerEvents, this, {
                action: false,
                progress: 0,
                stage: "release"
              });
            } else if (offset == 0 && !this.isLockHeader && !this.isLockFooter) {
              this.clearProgress();
            }
          }
        }

        _onTouchEnded(event, captureListeners) {
          this.isCallSoonFinish = false;
          this.isCustomScroll = false;
          if (!this.canTouchMove) return;

          if (this.layout.isPageView) {
            event.touch.getUILocation(_tempVec2);
            Vec2.set(this._touchEndPosition, _tempVec2.x, _tempVec2.y);
          }

          super._onTouchEnded(event, captureListeners);

          if (this.isTransmitEvent) {
            this.transmitEvent(event, Node.EventType.TOUCH_END);
          }
        }

        _onTouchCancelled(event, captureListeners) {
          this.isCallSoonFinish = false;
          this.isCustomScroll = false;
          if (!this.canTouchMove) return;

          if (this.layout.isPageView) {
            event.touch.getUILocation(_tempVec2);
            Vec2.set(this._touchEndPosition, _tempVec2.x, _tempVec2.y);
          }

          if (this.isTransmitEvent) {
            this.transmitEvent(event, Node.EventType.TOUCH_CANCEL);
          }

          super._onTouchCancelled(event, captureListeners);
        }

        scrollToAny(moveDelta, timeInSecond, attenuated = true) {
          this.isCustomScroll = true;

          if (timeInSecond) {
            this._startAutoScroll(moveDelta, timeInSecond, attenuated, true);
          } else {
            this._moveContent(moveDelta);
          }
        }

        release() {
          this.isMoveHeader = false;
          this.isMoveFooter = false;

          if (this.isLockHeader || this.isLockFooter) {
            this.vertical && this.isLockHeader && (this._topBoundary += this.headerOutOffset);
            this.vertical && this.isLockFooter && (this._bottomBoundary -= this.footerOutOffset);
            this.horizontal && this.isLockHeader && (this._leftBoundary -= this.headerOutOffset);
            this.horizontal && this.isLockFooter && (this._rightBoundary += this.footerOutOffset);
            this.clearProgress();
            this.layout["onPositionChanged"]();
            this.isLockHeader = false;
            this.isLockFooter = false;
            this.startAutoScroll();
          }
        }

        startAutoScroll() {
          this._autoScrolling = true;
          this._outOfBoundaryAmountDirty = true;
        }

        _startAutoScroll(deltaMove, timeInSecond, attenuated, flag = false) {
          if (this.pullRefresh) {
            // 如果没有刷新/加载的监听者 则不计算 
            if (this.isMoveHeader && !this.isLockHeader) {
              if (this.vertical) {
                this._topBoundary -= this.headerOutOffset;
                deltaMove.y -= this.headerOutOffset;
              }

              if (this.horizontal) {
                this._leftBoundary += this.headerOutOffset;
                deltaMove.x += this.headerOutOffset;
              }

              this.isLockHeader = true;
              EventHandler.emitEvents(this.headerEvents, this, {
                action: true,
                progress: this.headerProgress,
                stage: 'lock'
              });
            } else if (this.isMoveFooter && !this.isLockFooter) {
              if (this.vertical) {
                this._bottomBoundary += this.footerOutOffset;
                deltaMove.y += this.footerOutOffset;
              }

              if (this.horizontal) {
                this._rightBoundary -= this.footerOutOffset;
                deltaMove.x -= this.footerOutOffset;
              }

              this.isLockFooter = true;
              EventHandler.emitEvents(this.footerEvents, this, {
                action: true,
                progress: this.footerProgress,
                stage: 'lock'
              });
            }
          }

          super._startAutoScroll(deltaMove, timeInSecond, attenuated);

          if (!flag && this.layout.autoCenter) {
            const touchMoveVelocity = this._calculateTouchMoveVelocity();

            if (!this.isQuicklyScrollable(touchMoveVelocity)) {
              this.soonFinish();
            }
          }
        }

        _updateScrollBar(outOfBoundary) {
          super._updateScrollBar(new Vec2(outOfBoundary.x, outOfBoundary.y));

          if (this._autoScrollBraking) return; // 自动回弹时不计算 （非手动）

          if (!this._autoScrolling) return; // 非自动滚动时不计算 

          if (!this.pullRefresh) return;
          let offset = this.vertical ? outOfBoundary.y : -outOfBoundary.x;

          if (offset > 0) {
            // 下滑
            let progress = offset < EPSILON ? 0 : offset / this.headerOutOffset; //根据参数 headerOutOffset 计算当前下滑的办百分比

            if (this.isLockHeader) {
              this.headerProgress = this.headerProgress == 1 ? this.headerProgress : Math.max(progress, 1);
              EventHandler.emitEvents(this.headerEvents, this, {
                action: false,
                progress: this.headerProgress,
                stage: "lock"
              });
            } else {
              this.headerProgress = progress < this.headerProgress ? progress : this.headerProgress;
              EventHandler.emitEvents(this.headerEvents, this, {
                action: false,
                progress: this.headerProgress,
                stage: "release"
              });
            }
          } else if (offset < 0) {
            let progress = -offset < EPSILON ? 0 : -offset / this.footerOutOffset; //根据参数 footerOutOffset 计算当前下滑的办百分比

            if (this.isLockFooter) {
              this.footerProgress = this.footerProgress == 1 ? this.footerProgress : Math.max(progress, 1);
              EventHandler.emitEvents(this.footerEvents, this, {
                action: false,
                progress: this.footerProgress,
                stage: "lock"
              });
            } else {
              this.footerProgress = progress < this.footerProgress ? progress : this.footerProgress;
              EventHandler.emitEvents(this.footerEvents, this, {
                action: false,
                progress: this.footerProgress,
                stage: "release"
              });
            }
          } else if (offset == 0) {
            // 正常滑动时 如果没有锁定头和尾时 释放所有进度
            if (!this.isLockHeader && !this.isLockFooter) {
              this.clearProgress();
            }
          }
        }

        clearProgress() {
          EventHandler.emitEvents(this.headerEvents, this, {
            action: false,
            progress: 0,
            stage: "release"
          });
          EventHandler.emitEvents(this.footerEvents, this, {
            action: false,
            progress: 0,
            stage: "release"
          });
        }

        dispatchPageTurningEvent() {
          if (this.layout["_lastPageIndex"] === this.layout["_currPageIndex"]) return;
          this.layout["_lastPageIndex"] = this.layout["_currPageIndex"];
          EventHandler.emitEvents(this.layout.pageEvents, this, PageView.EventType.PAGE_TURNING);
          this.node.emit(PageView.EventType.PAGE_TURNING, this);
          console.log("滚动结束====>");
        }

        _handleReleaseLogic(touch) {
          if (this.layout.isPageView) {
            this._autoScrollToPage();

            if (this._scrolling) {
              this._scrolling = false;

              if (!this._autoScrolling) {
                this._dispatchEvent(ScrollView.EventType.SCROLL_ENDED);
              }
            }
          } else {
            super._handleReleaseLogic(touch);
          }
        }

        _autoScrollToPage() {
          const bounceBackStarted = this._startBounceBackIfNeeded();

          if (bounceBackStarted) {
            const bounceBackAmount = this._getHowMuchOutOfBoundary();

            this._clampDelta(bounceBackAmount);

            if (bounceBackAmount.x > 0 || bounceBackAmount.y < 0) {
              if (this.layout.horizontal) {
                if (this.layout.horizontalAxisDirection == (_crd && SuperLayout === void 0 ? (_reportPossibleCrUseOfSuperLayout({
                  error: Error()
                }), SuperLayout) : SuperLayout).HorizontalAxisDirection.LEFT_TO_RIGHT) {
                  this.layout["_currPageIndex"] = this.layout.itemTotal === 0 ? 0 : this.layout.itemTotal - 1;
                } else {
                  this.layout["_currPageIndex"] = 0;
                }
              } else {
                if (this.layout.verticalAxisDirection == (_crd && SuperLayout === void 0 ? (_reportPossibleCrUseOfSuperLayout({
                  error: Error()
                }), SuperLayout) : SuperLayout).VerticalAxisDirection.TOP_TO_BOTTOM) {
                  this.layout["_currPageIndex"] = this.layout.itemTotal === 0 ? 0 : this.layout.itemTotal - 1;
                } else {
                  this.layout["_currPageIndex"] = 0;
                }
              }
            }

            if (bounceBackAmount.x < 0 || bounceBackAmount.y > 0) {
              if (this.layout.horizontal) {
                if (this.layout.horizontalAxisDirection == (_crd && SuperLayout === void 0 ? (_reportPossibleCrUseOfSuperLayout({
                  error: Error()
                }), SuperLayout) : SuperLayout).HorizontalAxisDirection.LEFT_TO_RIGHT) {
                  this.layout["_currPageIndex"] = 0;
                } else {
                  this.layout["_currPageIndex"] = this.layout.itemTotal === 0 ? 0 : this.layout.itemTotal - 1;
                }
              } else {
                if (this.layout.verticalAxisDirection == (_crd && SuperLayout === void 0 ? (_reportPossibleCrUseOfSuperLayout({
                  error: Error()
                }), SuperLayout) : SuperLayout).VerticalAxisDirection.TOP_TO_BOTTOM) {
                  this.layout["_currPageIndex"] = 0;
                } else {
                  this.layout["_currPageIndex"] = this.layout.itemTotal === 0 ? 0 : this.layout.itemTotal - 1;
                }
              }
            }

            if (this.layout.indicator) {
              this.layout.indicator._changedState();
            }
          } else {
            const moveOffset = new Vec2();
            Vec2.subtract(moveOffset, this._touchBeganPosition, this._touchEndPosition);
            const index = this.layout["_currPageIndex"];
            var nextIndex = index + this.getDragDirection(moveOffset);
            var timeInSecond = this.layout.pageTurningSpeed * Math.abs(index - nextIndex);

            if (this.layout.footerLoop) {
              if (nextIndex >= this.layout.itemTotal) {
                nextIndex = 0;
              }
            }

            if (this.layout.headerLoop) {
              if (nextIndex < 0) {
                nextIndex = this.layout.itemTotal - 1;
              }
            }

            const count = this.layout.itemTotal;

            if (nextIndex < count) {
              if (this.isScrollable(moveOffset, index, nextIndex)) {
                this.scrollToPage(nextIndex, timeInSecond);
                return;
              } else {
                const touchMoveVelocity = this._calculateTouchMoveVelocity();

                if (this.isQuicklyScrollable(touchMoveVelocity)) {
                  this.scrollToPage(nextIndex, timeInSecond);
                  return;
                }
              }
            }

            this.scrollToPage(index, timeInSecond);
          }
        }

        savePageIndex(idx) {
          if (idx < 0 || idx >= this.layout.itemTotal) {
            return false;
          }

          this.layout["_currPageIndex"] = idx;

          if (this.layout.indicator) {
            this.layout.indicator._changedState();
          }

          return true;
        }

        scrollToPage(idx, timeInSecond = 0.3) {
          if (idx < 0 || idx >= this.layout.itemTotal) {
            return;
          }

          if (this.savePageIndex(idx)) {
            this.layout.scrollToIndex(idx, timeInSecond);
          }
        } // 快速滑动


        isQuicklyScrollable(touchMoveVelocity) {
          if (this.horizontal) {
            if (Math.abs(touchMoveVelocity.x) > this.layout.autoPageTurningThreshold) {
              return true;
            }
          } else if (this.vertical) {
            if (Math.abs(touchMoveVelocity.y) > this.layout.autoPageTurningThreshold) {
              return true;
            }
          }

          return false;
        }

        getDragDirection(moveOffset) {
          if (this.horizontal) {
            if (moveOffset.x === 0) {
              return 0;
            }

            if (this.layout.horizontalAxisDirection == (_crd && SuperLayout === void 0 ? (_reportPossibleCrUseOfSuperLayout({
              error: Error()
            }), SuperLayout) : SuperLayout).HorizontalAxisDirection.LEFT_TO_RIGHT) {
              return moveOffset.x > 0 ? this.layout.groupItemTotal : -this.layout.groupItemTotal;
            } else {
              return moveOffset.x < 0 ? this.layout.groupItemTotal : -this.layout.groupItemTotal;
            }
          } else {
            // 由于滚动 Y 轴的原点在在右上角所以应该是小于 0
            if (moveOffset.y === 0) {
              return 0;
            }

            if (this.layout.verticalAxisDirection == (_crd && SuperLayout === void 0 ? (_reportPossibleCrUseOfSuperLayout({
              error: Error()
            }), SuperLayout) : SuperLayout).VerticalAxisDirection.TOP_TO_BOTTOM) {
              return moveOffset.y < 0 ? this.layout.groupItemTotal : -this.layout.groupItemTotal;
            } else {
              return moveOffset.y > 0 ? this.layout.groupItemTotal : -this.layout.groupItemTotal;
            }
          }
        } // 是否超过自动滚动临界值


        isScrollable(offset, index, nextIndex) {
          const viewTrans = this.view;

          if (!viewTrans) {
            return false;
          }

          if (this.horizontal) {
            return Math.abs(offset.x) >= viewTrans.width * this.layout.scrollThreshold;
          } else if (this.vertical) {
            return Math.abs(offset.y) >= viewTrans.height * this.layout.scrollThreshold;
          }

          return false;
        }

        transmitEvent(event, eventType) {
          var e = new EventTouch(event.getTouches(), event.bubbles, eventType);
          e.type = eventType;
          e.touch = event.touch;
          let target = event.target;
          target.parent.dispatchEvent(e);
        }

        soonFinish() {
          this.isCallSoonFinish = true;
          this.layout["soonFinish"]();
        }
        /**
         * 重写此方法 实际上没有任何改动 只是修改了OUT_OF_BOUNDARY_BREAKING_FACTOR 从0.05 改成0.015
         * 吐槽一下 变量 OUT_OF_BOUNDARY_BREAKING_FACTOR 定义方式
         */


        _processAutoScrolling(dt) {
          const isAutoScrollBrake = this._isNecessaryAutoScrollBrake();

          const brakingFactor = isAutoScrollBrake ? OUT_OF_BOUNDARY_BREAKING_FACTOR : 1;
          this._autoScrollAccumulatedTime += dt * (1 / brakingFactor);
          let percentage = Math.min(1, this._autoScrollAccumulatedTime / this._autoScrollTotalTime);

          if (this._autoScrollAttenuate) {
            percentage = quintEaseOut(percentage);
          }

          const clonedAutoScrollTargetDelta = this._autoScrollTargetDelta.clone();

          clonedAutoScrollTargetDelta.multiplyScalar(percentage);

          const clonedAutoScrollStartPosition = this._autoScrollStartPosition.clone();

          clonedAutoScrollStartPosition.add(clonedAutoScrollTargetDelta);
          let reachedEnd = Math.abs(percentage - 1) <= EPSILON;
          const fireEvent = Math.abs(percentage - 1) <= this.getScrollEndedEventTiming();

          if (fireEvent && !this._isScrollEndedWithThresholdEventFired) {
            this._dispatchEvent(ScrollView.EventType.SCROLL_ENG_WITH_THRESHOLD);

            this._isScrollEndedWithThresholdEventFired = true;
          }

          if (this.elastic) {
            const brakeOffsetPosition = clonedAutoScrollStartPosition.clone();
            brakeOffsetPosition.subtract(this._autoScrollBrakingStartPosition);

            if (isAutoScrollBrake) {
              brakeOffsetPosition.multiplyScalar(brakingFactor);
            }

            clonedAutoScrollStartPosition.set(this._autoScrollBrakingStartPosition);
            clonedAutoScrollStartPosition.add(brakeOffsetPosition);
          } else {
            const moveDelta = clonedAutoScrollStartPosition.clone();
            moveDelta.subtract(this.getContentPosition());

            const outOfBoundary = this._getHowMuchOutOfBoundary(moveDelta);

            if (!outOfBoundary.equals(Vec3.ZERO, EPSILON)) {
              clonedAutoScrollStartPosition.add(outOfBoundary);
              reachedEnd = true;
            }
          }

          if (reachedEnd) {
            this._autoScrolling = false;
          }

          if (this.layout.autoCenter && !this.isCallSoonFinish && !this.isCustomScroll) {
            if (this._autoScrollTotalTime < 2 || percentage >= 0.8) {
              this.soonFinish();
            }
          }

          const deltaMove = clonedAutoScrollStartPosition.clone();
          deltaMove.subtract(this.getContentPosition());

          this._clampDelta(deltaMove);

          this._moveContent(deltaMove, reachedEnd); // this._dispatchEvent(ScrollView.EventType.SCROLLING);


          if (!this._autoScrolling) {
            this._isBouncing = false;
            this._scrolling = false;

            this._dispatchEvent(ScrollView.EventType.SCROLL_ENDED);
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "isTransmitEvent", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "pullRefresh", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "headerOutOffset", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 200;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "headerMultiple", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 2;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "footerOutOffset", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 200;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "footerMultiple", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 2;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "headerEvents", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "footerEvents", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      })), _class2)) || _class) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=4087e914ec75d358cb65e80ff3d55af2c753ea4d.js.map