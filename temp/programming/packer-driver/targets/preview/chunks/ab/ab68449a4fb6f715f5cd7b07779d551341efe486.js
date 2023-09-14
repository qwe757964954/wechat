System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, ccenum, Component, EventHandler, instantiate, Node, PageViewIndicator, Size, UITransform, Vec2, Vec3, _decorator, SuperScrollView, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _dec30, _dec31, _dec32, _dec33, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25, _descriptor26, _descriptor27, _descriptor28, _descriptor29, _descriptor30, _class3, _crd, ccclass, property, menu, requireComponent, EPSILON, Type, VerticalAxisDirection, HorizontalAxisDirection, ScrollDirection, IndexVerticalAxisDirection, IndexHorizontalAxisDirection, SuperLayout;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfSuperScrollView(extras) {
    _reporterNs.report("SuperScrollView", "./SuperScrollView", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      ccenum = _cc.ccenum;
      Component = _cc.Component;
      EventHandler = _cc.EventHandler;
      instantiate = _cc.instantiate;
      Node = _cc.Node;
      PageViewIndicator = _cc.PageViewIndicator;
      Size = _cc.Size;
      UITransform = _cc.UITransform;
      Vec2 = _cc.Vec2;
      Vec3 = _cc.Vec3;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      SuperScrollView = _unresolved_2.SuperScrollView;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b4600Q7U6xFDIc0O8S8gv7q", "SuperLayout", undefined);

      __checkObsolete__(['ccenum', 'Component', 'EventHandler', 'instantiate', 'Node', 'PageViewIndicator', 'Size', 'UITransform', 'Vec2', 'Vec3', '_decorator']);

      ({
        ccclass,
        property,
        menu,
        requireComponent
      } = _decorator);
      EPSILON = 1e-5;
      /**
       * Name = SuperLayout
       * URL = db://assets/framework/gui/scrollview/SuperLayout.ts
       * Time = Mon Feb 27 2023 09:54:35 GMT+0800 (中国标准时间)
       * Author = xueya
       *
       * Life: onLoad-->onEnable->start->update->lateUpdate->onDisable->onDestroy
       */

      (function (Type) {
        Type[Type["HORIZONTAL"] = 0] = "HORIZONTAL";
        Type[Type["VERTICAL"] = 1] = "VERTICAL";
      })(Type || (Type = {}));

      ccenum(Type);

      (function (VerticalAxisDirection) {
        VerticalAxisDirection[VerticalAxisDirection["TOP_TO_BOTTOM"] = 0] = "TOP_TO_BOTTOM";
        VerticalAxisDirection[VerticalAxisDirection["BOTTOM_TO_TOP"] = 1] = "BOTTOM_TO_TOP";
      })(VerticalAxisDirection || (VerticalAxisDirection = {}));

      ccenum(VerticalAxisDirection);

      (function (HorizontalAxisDirection) {
        HorizontalAxisDirection[HorizontalAxisDirection["LEFT_TO_RIGHT"] = 0] = "LEFT_TO_RIGHT";
        HorizontalAxisDirection[HorizontalAxisDirection["RIGHT_TO_LEFT"] = 1] = "RIGHT_TO_LEFT";
      })(HorizontalAxisDirection || (HorizontalAxisDirection = {}));

      ccenum(HorizontalAxisDirection);

      (function (ScrollDirection) {
        ScrollDirection[ScrollDirection["NONE"] = 0] = "NONE";
        ScrollDirection[ScrollDirection["HEADER"] = 1] = "HEADER";
        ScrollDirection[ScrollDirection["FOOTER"] = 2] = "FOOTER";
      })(ScrollDirection || (ScrollDirection = {}));

      (function (IndexVerticalAxisDirection) {
        IndexVerticalAxisDirection[IndexVerticalAxisDirection["TOP"] = 0] = "TOP";
        IndexVerticalAxisDirection[IndexVerticalAxisDirection["BOTTOM"] = 1] = "BOTTOM";
      })(IndexVerticalAxisDirection || (IndexVerticalAxisDirection = {}));

      ccenum(IndexVerticalAxisDirection);

      (function (IndexHorizontalAxisDirection) {
        IndexHorizontalAxisDirection[IndexHorizontalAxisDirection["LEFT"] = 0] = "LEFT";
        IndexHorizontalAxisDirection[IndexHorizontalAxisDirection["RIGHT"] = 1] = "RIGHT";
      })(IndexHorizontalAxisDirection || (IndexHorizontalAxisDirection = {}));

      ccenum(IndexHorizontalAxisDirection);

      _export("SuperLayout", SuperLayout = (_dec = ccclass('SuperLayout'), _dec2 = requireComponent(UITransform), _dec3 = menu('gui/scrollview/SuperLayout'), _dec4 = property({
        tooltip: "绑定了SuperScrollView的ScrollowView",
        type: _crd && SuperScrollView === void 0 ? (_reportPossibleCrUseOfSuperScrollView({
          error: Error()
        }), SuperScrollView) : SuperScrollView
      }), _dec5 = property({
        tooltip: "view的UITransform组件",
        type: UITransform
      }), _dec6 = property({
        tooltip: "用于克隆的节点",
        type: Node
      }), _dec7 = property({
        tooltip: "layout类型",
        type: Type
      }), _dec8 = property({
        type: IndexVerticalAxisDirection,
        visible: function visible() {
          return this.layoutType == Type.VERTICAL && !this.autoCenter;
        }
      }), _dec9 = property({
        type: IndexHorizontalAxisDirection,
        visible: function visible() {
          return this.layoutType == Type.HORIZONTAL && !this.autoCenter;
        }
      }), _dec10 = property({
        type: VerticalAxisDirection
      }), _dec11 = property({
        type: HorizontalAxisDirection
      }), _dec12 = property({
        tooltip: "最小值=1，大于1就是Grid模式"
      }), _dec13 = property({
        tooltip: "决定最多创建Prefab的数量"
      }), _dec14 = property({
        tooltip: "顶部填充"
      }), _dec15 = property({
        tooltip: "底部填充"
      }), _dec16 = property({
        tooltip: "左侧填充"
      }), _dec17 = property({
        tooltip: "右侧填充"
      }), _dec18 = property({
        tooltip: "横轴间距"
      }), _dec19 = property({
        tooltip: "纵轴间距"
      }), _dec20 = property({
        tooltip: "计算缩放后的尺寸"
      }), _dec21 = property({
        tooltip: "开启翻页模式"
      }), _dec22 = property({
        tooltip: "每个页面翻页时所需时间。单位：秒",
        visible: function visible() {
          return this.isPageView;
        }
      }), _dec23 = property({
        type: PageViewIndicator,
        visible: function visible() {
          return this.isPageView;
        }
      }), _dec24 = property({
        slide: true,
        range: [0, 1, 0.01],
        tooltip: "滚动临界值，默认单位百分比，当拖拽超出该数值时，松开会自动滚动下一页，小于时则还原",
        visible: function visible() {
          return this.isPageView;
        }
      }), _dec25 = property({
        tooltip: "快速滑动翻页临界值。当用户快速滑动时，会根据滑动开始和结束的距离与时间计算出一个速度值,该值与此临界值相比较，如果大于临界值，则进行自动翻页",
        visible: function visible() {
          return this.isPageView;
        }
      }), _dec26 = property({
        type: EventHandler,
        visible: function visible() {
          return this.isPageView;
        }
      }), _dec27 = property({
        tooltip: "开启自动居中",
        visible: function visible() {
          return !this.isPageView;
        }
      }), _dec28 = property({
        tooltip: "自动居中的滚动时间",
        visible: function visible() {
          return this.autoCenter;
        }
      }), _dec29 = property({
        type: Node,
        tooltip: "自动居中的参考节点，如果为空、则默认选择View中心",
        visible: function visible() {
          return this.autoCenter;
        }
      }), _dec30 = property({
        // type: Vec2,
        tooltip: "自动居中时、Item的居中锚点",
        visible: function visible() {
          return this.autoCenter;
        }
      }), _dec31 = property({
        tooltip: "上/左 无限循环"
      }), _dec32 = property({
        tooltip: "下/右 无限循环"
      }), _dec33 = property(EventHandler), _dec(_class = _dec2(_class = _dec3(_class = (_class2 = (_class3 = class SuperLayout extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "scrollView", _descriptor, this);

          _initializerDefineProperty(this, "view", _descriptor2, this);

          _initializerDefineProperty(this, "cloneNode", _descriptor3, this);

          _initializerDefineProperty(this, "layoutType", _descriptor4, this);

          _initializerDefineProperty(this, "indexVerticalAxisDirection", _descriptor5, this);

          _initializerDefineProperty(this, "indexHorizontalAxisDirection", _descriptor6, this);

          _initializerDefineProperty(this, "verticalAxisDirection", _descriptor7, this);

          _initializerDefineProperty(this, "horizontalAxisDirection", _descriptor8, this);

          _initializerDefineProperty(this, "groupItemTotal", _descriptor9, this);

          _initializerDefineProperty(this, "multiple", _descriptor10, this);

          _initializerDefineProperty(this, "paddingTop", _descriptor11, this);

          _initializerDefineProperty(this, "paddingBottom", _descriptor12, this);

          _initializerDefineProperty(this, "paddingLeft", _descriptor13, this);

          _initializerDefineProperty(this, "paddingRight", _descriptor14, this);

          _initializerDefineProperty(this, "spacingX", _descriptor15, this);

          _initializerDefineProperty(this, "spacingY", _descriptor16, this);

          _initializerDefineProperty(this, "affectedByScale", _descriptor17, this);

          _initializerDefineProperty(this, "isPageView", _descriptor18, this);

          _initializerDefineProperty(this, "pageTurningSpeed", _descriptor19, this);

          _initializerDefineProperty(this, "indicator", _descriptor20, this);

          _initializerDefineProperty(this, "scrollThreshold", _descriptor21, this);

          _initializerDefineProperty(this, "autoPageTurningThreshold", _descriptor22, this);

          _initializerDefineProperty(this, "pageEvents", _descriptor23, this);

          _initializerDefineProperty(this, "autoCenter", _descriptor24, this);

          _initializerDefineProperty(this, "centerTime", _descriptor25, this);

          _initializerDefineProperty(this, "centerNode", _descriptor26, this);

          _initializerDefineProperty(this, "centerAnchor", _descriptor27, this);

          _initializerDefineProperty(this, "headerLoop", _descriptor28, this);

          _initializerDefineProperty(this, "footerLoop", _descriptor29, this);

          _initializerDefineProperty(this, "refreshItemEvents", _descriptor30, this);

          this.stretchLock = {};
          this._currPageIndex = 0;
          this._lastPageIndex = 0;
          this.isRestart = false;
          this.scrollDirection = ScrollDirection.NONE;
          this.prevPos = new Vec3(0, 0, 0);
          this._maxPrefabTotal = 0;
          this.currentCreateItemTotal = 0;
          this._itemTotal = 0;
        }

        get currPageIndex() {
          return this._currPageIndex;
        }

        get lastPageIndex() {
          return this._lastPageIndex;
        }

        /** 是否垂直滚动 */
        get vertical() {
          return this.layoutType == Type.VERTICAL;
        }
        /** 是否水平滚动 */


        get horizontal() {
          return this.layoutType == Type.HORIZONTAL;
        }

        get transform() {
          return this.node._uiProps.uiTransformComp;
        }
        /** View 可容纳的宽度 */


        get accommodWidth() {
          return this.view.width - this.paddingLeft - this.paddingRight;
        }
        /** View 可容纳的高度 */


        get accommodHeight() {
          return this.view.height - this.paddingTop - this.paddingBottom;
        }
        /** 头部的节点 */


        get header() {
          if (this.node.children.length == 0) return null;
          return this.node.children[0]._uiProps.uiTransformComp;
        }
        /** 底部的节点 */


        get footer() {
          if (this.node.children.length == 0) return null;
          return this.node.children[this.node.children.length - 1]._uiProps.uiTransformComp;
        }
        /** 头部索引 */


        get headerIndex() {
          if (!this.header) return -1;
          var node = this.header.node;
          return node["__index"];
        }
        /** 底部索引 */


        get footerIndex() {
          if (!this.footer) return -1;
          var node = this.footer.node;
          return node["__index"];
        }
        /** Item起始位置 */


        get viewStartPoint() {
          var pos = new Vec3();

          if (this.horizontalAxisDirection == HorizontalAxisDirection.LEFT_TO_RIGHT) {
            pos.x = this.view.width * -0.5 + this.paddingLeft;
          } else {
            pos.x = this.view.width * 0.5 - this.paddingRight;
          }

          if (this.verticalAxisDirection == VerticalAxisDirection.TOP_TO_BOTTOM) {
            pos.y = this.view.height * 0.5 - this.paddingTop;
          } else {
            pos.y = this.view.height * -0.5 + this.paddingBottom;
          }

          return pos;
        }
        /** View 头部边界 */


        get viewHeaderBoundary() {
          return this.vertical ? this.view.height * 0.5 : this.view.width * -0.5;
        }
        /** View 底部边界 */


        get viewFooterBoundary() {
          return this.vertical ? this.view.height * -0.5 : this.view.width * 0.5;
        }
        /** 头部节点边界 */


        get headerBoundary() {
          if (!this.header) return 0;

          if (this.vertical) {
            if (this.verticalAxisDirection == VerticalAxisDirection.TOP_TO_BOTTOM) {
              return this.node.position.y + this.getItemYMax(this.header) + this.paddingTop;
            } else {
              return this.node.position.y + this.getItemYMin(this.header) - this.paddingBottom;
            }
          } else {
            if (this.horizontalAxisDirection == HorizontalAxisDirection.LEFT_TO_RIGHT) {
              return this.node.position.x + this.getItemXMin(this.header) - this.paddingLeft;
            } else {
              return this.node.position.x + this.getItemXMax(this.header) + this.paddingRight;
            }
          }
        }
        /** 底部节点边界 */


        get footerBoundary() {
          if (!this.footer) return 0;

          if (this.vertical) {
            if (this.verticalAxisDirection == VerticalAxisDirection.TOP_TO_BOTTOM) {
              return this.node.position.y + this.getItemYMin(this.footer) - this.paddingBottom;
            } else {
              return this.node.position.y + this.getItemYMax(this.footer) + this.paddingTop;
            }
          } else {
            if (this.horizontalAxisDirection == HorizontalAxisDirection.LEFT_TO_RIGHT) {
              return this.node.position.x + this.getItemXMax(this.footer) + this.paddingRight;
            } else {
              return this.node.position.x + this.getItemXMin(this.footer) - this.paddingLeft;
            }
          }
        }
        /** 自动居中节点头部边界 */


        get centerHeaderBoundary() {
          var key = this.vertical ? "y" : "x";
          var offset;

          if (this.centerNode) {
            offset = this.viewHeaderBoundary - this.centerNode.position[key];
          } else {
            offset = this.viewHeaderBoundary - this.view.node.position[key];
          }

          if (this.vertical && this.verticalAxisDirection == VerticalAxisDirection.TOP_TO_BOTTOM || this.horizontal && this.horizontalAxisDirection == HorizontalAxisDirection.LEFT_TO_RIGHT) {
            return this.headerBoundary + offset;
          } else {
            return this.footerBoundary + offset;
          }
        }
        /** 自动居中节点底部边界 */


        get centerFooterBoundary() {
          var key = this.vertical ? "y" : "x";
          var offset;

          if (this.centerNode) {
            offset = this.viewFooterBoundary - this.centerNode.position[key];
          } else {
            offset = this.viewFooterBoundary - this.view.node.position[key];
          }

          if (this.vertical && this.verticalAxisDirection == VerticalAxisDirection.TOP_TO_BOTTOM || this.horizontal && this.horizontalAxisDirection == HorizontalAxisDirection.LEFT_TO_RIGHT) {
            return this.footerBoundary + offset;
          } else {
            return this.headerBoundary + offset;
          }
        }
        /** 是否超出左侧边界 */


        get isOfLeftBoundary() {
          if (this.vertical) return 0;

          if (this.autoCenter) {
            if (this.scrollDirection == ScrollDirection.HEADER) {
              return this.centerHeaderBoundary;
            }

            return 0;
          }

          if (this.headerLoop) {
            if (this.header) return 0;
            return this.viewHeaderBoundary + this.node.position.x;
          }

          if (!this.header || this.fixedItemWidth <= this.view.width) {
            return this.viewHeaderBoundary + this.node.position.x;
          }

          if (this.horizontalAxisDirection == HorizontalAxisDirection.LEFT_TO_RIGHT) {
            if (this.headerIndex == 0) {
              return this.headerBoundary;
            }
          } else {
            if (this.footerIndex == this.itemTotal - 1) {
              return this.footerBoundary;
            }
          }

          return 0;
        }
        /** 是否超出顶部边界 */


        get isOfTopBoundary() {
          if (!this.vertical) return 0;

          if (this.autoCenter) {
            if (this.scrollDirection == ScrollDirection.HEADER) {
              return this.centerHeaderBoundary;
            }

            return 0;
          }

          if (this.headerLoop) {
            if (this.header) return 0;
            return this.viewHeaderBoundary + this.node.position.y;
          }

          if (!this.header || this.fixedItemHeight <= this.view.height) {
            return this.viewHeaderBoundary + this.node.position.y;
          }

          if (this.verticalAxisDirection == VerticalAxisDirection.TOP_TO_BOTTOM) {
            if (this.headerIndex == 0) {
              return this.headerBoundary;
            }
          } else {
            if (this.footerIndex == this.itemTotal - 1) {
              return this.footerBoundary;
            }
          }

          return 0;
        }
        /** 是否超出右侧边界 */


        get isOfRightBoundary() {
          if (this.vertical) return 0;

          if (this.autoCenter) {
            if (this.scrollDirection == ScrollDirection.FOOTER) {
              return this.centerFooterBoundary;
            }

            return 0;
          }

          if (this.footerLoop) {
            if (this.footer) return 0;
            return this.viewFooterBoundary + this.node.position.x;
          }

          if (!this.footer || this.fixedItemWidth <= this.view.width) {
            return this.viewFooterBoundary + this.node.position.x;
          }

          if (this.horizontalAxisDirection == HorizontalAxisDirection.LEFT_TO_RIGHT) {
            if (this.footerIndex == this.itemTotal - 1) {
              return this.footerBoundary;
            }
          } else {
            if (this.headerIndex == 0) {
              return this.headerBoundary;
            }
          }

          return 0;
        }
        /** 是否超出底部边界 */


        get isOfButtomBoundary() {
          if (!this.vertical) return 0;

          if (this.autoCenter) {
            if (this.scrollDirection == ScrollDirection.FOOTER) {
              return this.centerFooterBoundary;
            }

            return 0;
          }

          if (this.footerLoop) {
            if (this.footer) return 0;
            return this.viewFooterBoundary + this.node.position.y;
          }

          if (!this.footer || this.fixedItemHeight <= this.view.height) {
            return this.viewFooterBoundary + this.node.position.y;
          }

          if (this.verticalAxisDirection == VerticalAxisDirection.TOP_TO_BOTTOM) {
            if (this.footerIndex == this.itemTotal - 1) {
              return this.footerBoundary;
            }
          } else {
            if (this.headerIndex == 0) {
              return this.headerBoundary;
            }
          }

          return 0;
        }
        /** 从头部到底部的所有Item高度总和 */


        get fixedItemHeight() {
          if (!this.header) return 0;

          if (this.verticalAxisDirection == VerticalAxisDirection.TOP_TO_BOTTOM) {
            return Math.abs(this.getItemYMax(this.header)) + Math.abs(this.getItemYMin(this.footer));
          } else {
            return Math.abs(this.getItemYMin(this.header)) + Math.abs(this.getItemYMax(this.footer));
          }
        }
        /** 从头部到底部的所有Item宽度总和 */


        get fixedItemWidth() {
          if (!this.header) return 0;

          if (this.horizontalAxisDirection == HorizontalAxisDirection.LEFT_TO_RIGHT) {
            return Math.abs(this.getItemXMin(this.header)) + Math.abs(this.getItemXMax(this.footer));
          } else {
            return Math.abs(this.getItemXMax(this.header)) + Math.abs(this.getItemXMin(this.footer));
          }
        }
        /** 返回 header到 footer 之间的整体尺寸 如果Item数量不足以撑开View 则返回View尺寸 最小值是View尺寸 */


        get contentSize() {
          if (this.node.children.length == 0) return this.view.contentSize;
          var size = new Size(this.view.contentSize.width, this.view.contentSize.height);

          if (this.vertical) {
            if (this.verticalAxisDirection == VerticalAxisDirection.TOP_TO_BOTTOM) {
              size.height = this.headerBoundary + -this.footerBoundary;
            } else {
              size.height = this.footerBoundary + -this.headerBoundary;
            }
          } else {
            if (this.horizontalAxisDirection == HorizontalAxisDirection.LEFT_TO_RIGHT) {
              size.width = this.footerBoundary + -this.headerBoundary;
            } else {
              size.width = this.headerBoundary + -this.footerBoundary;
            }
          }

          if (size.width < this.view.contentSize.width) {
            size.width = this.view.contentSize.width;
          }

          if (size.height < this.view.contentSize.height) {
            size.height = this.view.contentSize.height;
          }

          return size;
        }

        /** 已被创建的Item数量 */
        get maxPrefabTotal() {
          return this._maxPrefabTotal;
        }

        /** 数据长度 */
        get itemTotal() {
          return this._itemTotal;
        }

        /** 自动居中的参考位置 */
        get centerPosition() {
          if (!this._centerPosition) {
            this._centerPosition = new Vec3();

            if (this.autoCenter) {
              if (this.centerNode) {
                var _this$centerNode$pare, _this$centerNode$pare2;

                var worldPos = (_this$centerNode$pare = this.centerNode.parent) == null ? void 0 : (_this$centerNode$pare2 = _this$centerNode$pare._uiProps.uiTransformComp) == null ? void 0 : _this$centerNode$pare2.convertToWorldSpaceAR(this.centerNode.position);
                this._centerPosition = this.view.convertToNodeSpaceAR(worldPos);
              }
            } else {
              if (this.vertical) {
                if (this.indexVerticalAxisDirection == IndexVerticalAxisDirection.TOP) {
                  this._centerPosition.y = this.viewHeaderBoundary;
                } else {
                  this._centerPosition.y = this.viewFooterBoundary;
                }
              } else {
                if (this.indexHorizontalAxisDirection == IndexHorizontalAxisDirection.LEFT) {
                  this._centerPosition.x = this.viewHeaderBoundary;
                } else {
                  this._centerPosition.x = this.viewFooterBoundary;
                }
              }
            }
          }

          return this._centerPosition;
        }

        onLoad() {
          var _this$transform, _this$transform2, _this$scrollView$view;

          (_this$transform = this.transform) == null ? void 0 : _this$transform.setAnchorPoint(new Vec2(.5, .5));
          (_this$transform2 = this.transform) == null ? void 0 : _this$transform2.setContentSize(this.view.contentSize);
          this.node.setPosition(Vec3.ZERO);
          if (this.isPageView) this.autoCenter = false;
          (_this$scrollView$view = this.scrollView.view) == null ? void 0 : _this$scrollView$view.node.on(Node.EventType.SIZE_CHANGED, this.onViewSizeChange, this);
          Object.defineProperty(this.transform, "contentSize", {
            get: () => this.contentSize
          });
          Object.defineProperty(this.transform, "width", {
            get: () => this.contentSize.width
          });
          Object.defineProperty(this.transform, "height", {
            get: () => this.contentSize.height
          });
        }

        onEnable() {
          this.addEventListener();
        }

        onDisable() {
          this.removeEventListener();
        }
        /**
         * 更新item数量
         * @param count 
         * @param onRefreshLastItem 如果你确定只需要刷新最后一个item 那么这个设置成true 就不会刷新所有数据
         */


        total(count, refreshLastItem) {
          if (refreshLastItem === void 0) {
            refreshLastItem = false;
          }

          this.scrollView.canTouchMove = false;
          this.currentCreateItemTotal = count;
          this.createItems(count, refreshLastItem);
          var offset = count - this.itemTotal;
          this._itemTotal = count;
          this.refreshItems(offset, refreshLastItem);
          if (!refreshLastItem) this.updateItems();
          this.scrollView.release();

          if (this.indicator) {
            this.indicator.setPageView(this.scrollView);
          }

          if (this.autoCenter) {
            this.scrollToCenter();
          }

          this.scrollView.canTouchMove = true;
          return this;
        }
        /**
         * 刷新所有item
         */


        updateItems() {
          this.resetIndexStartToEnd(this.headerIndex);
          return this;
        }
        /** 告知组件你的节点尺寸 */


        updateItemSize(node, size) {
          if (this.groupItemTotal > 1) return;
          if (!node || !size) return;
          node["__runtime_size"] = size;
          this.onChangeChildSize(node._uiProps.uiTransformComp);
        }
        /** 自动居中到最近Item */


        scrollToCenter() {
          this.soonFinish();
        }
        /** 滚动到头部 */


        scrollToHeader(timeInSecond) {
          var headerOrFooter = 0;

          if (this.vertical) {
            if (this.verticalAxisDirection == VerticalAxisDirection.TOP_TO_BOTTOM) {
              headerOrFooter = this.viewHeaderBoundary;

              if (this.indexVerticalAxisDirection == IndexVerticalAxisDirection.BOTTOM) {
                var _this$header;

                headerOrFooter -= ((_this$header = this.header) == null ? void 0 : _this$header.height) + this.paddingTop + this.paddingBottom;
              }
            } else {
              headerOrFooter = this.viewFooterBoundary;

              if (this.indexVerticalAxisDirection == IndexVerticalAxisDirection.TOP) {
                var _this$header2;

                headerOrFooter += ((_this$header2 = this.header) == null ? void 0 : _this$header2.height) + this.paddingTop + this.paddingBottom;
              }
            }
          } else {
            if (this.horizontalAxisDirection == HorizontalAxisDirection.LEFT_TO_RIGHT) {
              headerOrFooter = this.viewHeaderBoundary;

              if (this.indexHorizontalAxisDirection == IndexHorizontalAxisDirection.RIGHT) {
                var _this$header3;

                headerOrFooter += ((_this$header3 = this.header) == null ? void 0 : _this$header3.width) + this.paddingLeft + this.paddingRight;
              }
            } else {
              headerOrFooter = this.viewFooterBoundary;

              if (this.indexHorizontalAxisDirection == IndexHorizontalAxisDirection.LEFT) {
                var _this$header4;

                headerOrFooter -= ((_this$header4 = this.header) == null ? void 0 : _this$header4.width) + this.paddingLeft + this.paddingRight;
              }
            }
          }

          this.scrollToIndex(0, timeInSecond, new Vec3(headerOrFooter, headerOrFooter));
        }
        /** 滚动到尾部 */


        scrollToFooter(timeInSecond) {
          var headerOrFooter = 0;

          if (this.vertical) {
            if (this.fixedItemHeight < this.view.height) return;

            if (this.verticalAxisDirection == VerticalAxisDirection.TOP_TO_BOTTOM) {
              headerOrFooter = this.viewFooterBoundary;

              if (this.indexVerticalAxisDirection == IndexVerticalAxisDirection.BOTTOM) {
                var _this$footer;

                headerOrFooter += ((_this$footer = this.footer) == null ? void 0 : _this$footer.height) + this.paddingTop + this.paddingBottom;
              }
            } else {
              headerOrFooter = this.viewHeaderBoundary;

              if (this.indexVerticalAxisDirection == IndexVerticalAxisDirection.TOP) {
                var _this$footer2;

                headerOrFooter -= ((_this$footer2 = this.footer) == null ? void 0 : _this$footer2.height) + this.paddingTop + this.paddingBottom;
              }
            }
          } else {
            if (this.fixedItemWidth < this.view.width) return;

            if (this.horizontalAxisDirection == HorizontalAxisDirection.LEFT_TO_RIGHT) {
              headerOrFooter = this.viewFooterBoundary;

              if (this.indexHorizontalAxisDirection == IndexHorizontalAxisDirection.RIGHT) {
                var _this$footer3;

                headerOrFooter -= ((_this$footer3 = this.footer) == null ? void 0 : _this$footer3.width) + this.paddingLeft + this.paddingRight;
              }
            } else {
              headerOrFooter = this.viewHeaderBoundary;

              if (this.indexHorizontalAxisDirection == IndexHorizontalAxisDirection.LEFT) {
                var _this$footer4;

                headerOrFooter += ((_this$footer4 = this.footer) == null ? void 0 : _this$footer4.width) + this.paddingLeft + this.paddingRight;
              }
            }
          }

          this.scrollToIndex(this.itemTotal - 1, timeInSecond, new Vec3(headerOrFooter, headerOrFooter), true);
        }

        isNearFooter(index) {
          var nearFooter = false;
          var flag = index > this.footerIndex && index < this.headerIndex;

          if (flag) {
            var result = Math.abs(index - this.headerIndex) < Math.abs(index - this.footerIndex);

            if (this.vertical) {
              if (this.verticalAxisDirection == VerticalAxisDirection.TOP_TO_BOTTOM) {
                nearFooter = !result;
              } else {
                nearFooter = result;
              }
            } else {
              if (this.horizontalAxisDirection == HorizontalAxisDirection.LEFT_TO_RIGHT) {
                nearFooter = !result;
              } else {
                nearFooter = result;
              }
            }
          } else if (index > this.footerIndex) {
            if (this.vertical) {
              nearFooter = this.verticalAxisDirection == VerticalAxisDirection.TOP_TO_BOTTOM ? true : false;
            } else {
              nearFooter = this.horizontalAxisDirection == HorizontalAxisDirection.LEFT_TO_RIGHT ? true : false;
            }
          } else if (index < this.headerIndex) {
            if (this.vertical) {
              nearFooter = this.verticalAxisDirection == VerticalAxisDirection.TOP_TO_BOTTOM ? false : true;
            } else {
              nearFooter = this.horizontalAxisDirection == HorizontalAxisDirection.LEFT_TO_RIGHT ? false : true;
            }
          }

          return nearFooter;
        }

        getFooterOffset(index) {
          var footerOffset = this.footerIndex % this.groupItemTotal;
          var indexOffset = index % this.groupItemTotal;
          return indexOffset - footerOffset + this.groupItemTotal;
        }

        getHeaderOffset(index) {
          var headerOffset = this.headerIndex % this.groupItemTotal;
          var indexOffset = index % this.groupItemTotal;
          return headerOffset - indexOffset + this.groupItemTotal;
        }

        offsetToHeader(index) {
          var offset = 0;

          if (this.vertical) {
            if (this.verticalAxisDirection == VerticalAxisDirection.TOP_TO_BOTTOM) {
              offset = this.getHeaderOffset(index);
            } else {
              offset = this.getFooterOffset(index);
            }
          } else {
            if (this.horizontalAxisDirection == HorizontalAxisDirection.LEFT_TO_RIGHT) {
              offset = this.getHeaderOffset(index);
            } else {
              offset = this.getFooterOffset(index);
            }
          }

          offset -= this.groupItemTotal;

          for (var i = 0; i < offset; i++) {
            this.pushToHeader(true);
          }
        }

        offsetToFooter(index) {
          var offset = 0;

          if (this.vertical) {
            if (this.verticalAxisDirection == VerticalAxisDirection.TOP_TO_BOTTOM) {
              offset = this.getFooterOffset(index);
            } else {
              offset = this.getHeaderOffset(index);
            }
          } else {
            if (this.horizontalAxisDirection == HorizontalAxisDirection.LEFT_TO_RIGHT) {
              offset = this.getFooterOffset(index);
            } else {
              offset = this.getHeaderOffset(index);
            }
          }

          offset -= this.groupItemTotal;

          for (var i = 0; i < offset; i++) {
            this.pushToFooter(true);
          }
        }

        resetIndexStartToEnd(index) {
          for (var i = 0; i < this.node.children.length; i++) {
            var child = this.node.children[i];
            child["__index"] = index;
            index++;

            if (this.headerLoop || this.footerLoop) {
              if (index < 0 || index >= this.itemTotal) {
                index = 0;
              }
            }

            this.notifyRefreshItem(child);
          }
        }

        resetIndexEndToStart(index) {
          for (var i = this.node.children.length - 1; i >= 0; i--) {
            var child = this.node.children[i];
            child["__index"] = index;
            index--;

            if (this.headerLoop || this.footerLoop) {
              if (index < 0) {
                index = this.itemTotal - 1;
              }
            }

            this.notifyRefreshItem(child);
          }
        }
        /**
         * 跳转到指定索引位置
         * @param index 索引
         * @param timeInSecond 时间
         * @param boundary 
         * @param reverse 
         * @returns 
         */


        scrollToIndex(index, timeInSecond, boundary, reverse) {
          var _this$transform3;

          if (reverse === void 0) {
            reverse = false;
          }

          if (isNaN(index) || index < 0 || index > this.itemTotal - 1) return;
          this.scrollView.stopAutoScroll();

          if (this.isPageView) {
            this.scrollView.savePageIndex(index);
          }

          var child = this.node.children.find(item => item["__index"] == index);
          var nearFooter = this.isNearFooter(index);
          this.stretchLock.index = index;
          this.stretchLock.timeInSecond = timeInSecond;
          this.stretchLock.boundary = boundary;
          this.stretchLock.reverse = reverse;

          if (!child) {
            if (index == 0) {
              this.pushToHeader();
            }

            if (index == this.itemTotal - 1) {
              this.pushToFooter();
            }

            var flag = this.vertical && this.verticalAxisDirection == VerticalAxisDirection.TOP_TO_BOTTOM || !this.vertical && this.horizontalAxisDirection == HorizontalAxisDirection.LEFT_TO_RIGHT;

            if (nearFooter) {
              this.offsetToFooter(index);
              flag ? this.resetIndexEndToStart(index) : this.resetIndexStartToEnd(index);
            } else {
              this.offsetToHeader(index);
              flag ? this.resetIndexStartToEnd(index) : this.resetIndexEndToStart(index);
            }

            child = this.node.children.find(item => item["__index"] == index);
          }

          if (!child) return;
          var itemPos = child.getPosition().clone();

          if (!this.autoCenter) {
            if (this.vertical) {
              if (this.indexVerticalAxisDirection == IndexVerticalAxisDirection.TOP) {
                if (!reverse) {
                  itemPos.y = this.getItemYMax(child.getComponent(UITransform)) + this.paddingTop;
                } else {
                  itemPos.y = this.getItemYMin(child.getComponent(UITransform)) - this.paddingBottom;
                }
              } else {
                if (!reverse) {
                  itemPos.y = this.getItemYMin(child.getComponent(UITransform)) - this.paddingBottom;
                } else {
                  itemPos.y = this.getItemYMax(child.getComponent(UITransform)) + this.paddingTop;
                }
              }
            } else {
              if (this.indexHorizontalAxisDirection == IndexHorizontalAxisDirection.LEFT) {
                if (!reverse) {
                  itemPos.x = this.getItemXMin(child.getComponent(UITransform)) - this.paddingLeft;
                } else {
                  itemPos.x = this.getItemXMax(child.getComponent(UITransform)) + this.paddingRight;
                }
              } else {
                if (!reverse) {
                  itemPos.x = this.getItemXMax(child.getComponent(UITransform)) + this.paddingRight;
                } else {
                  itemPos.x = this.getItemXMin(child.getComponent(UITransform)) - this.paddingLeft;
                }
              }
            }
          }

          var worldPos = (_this$transform3 = this.transform) == null ? void 0 : _this$transform3.convertToWorldSpaceAR(itemPos);
          var localPos = this.view.convertToNodeSpaceAR(worldPos);
          var multiple;

          if (!this.autoCenter && boundary) {
            multiple = boundary;
          } else {
            multiple = this.getCenterAnchor(child.getComponent(UITransform), this.centerPosition);
          }

          localPos.multiply(new Vec3(-1, -1, 1)).add(multiple);
          this.scrollView.scrollToAny(localPos, timeInSecond, true);
        }

        onViewSizeChange() {
          var _this = this;

          return _asyncToGenerator(function* () {
            _this.isRestart = true;

            _this.createItems(_this.currentCreateItemTotal);

            _this.resetChilds(true);

            _this.scrollToHeader();

            for (var i = 0; i < _this.node.children.length; i++) {
              var child = _this.node.children[i];
              var transform = child.getComponent(UITransform);

              _this.setAndSaveSizeAndScale(transform);
            }

            _this.isRestart = false;
          })();
        }

        setAndSaveSizeAndScale(item) {
          item.setContentSize(this.getItemSize(item));
          item.node["__size"] = item.contentSize.clone();
          item.node["__scale"] = item.node.getScale().clone();
        }
        /** 根据centerAnchor计算自动居中的真实位置 */


        getCenterAnchor(item, center) {
          var pos = center.clone();

          if (this.vertical) {
            var anchor = item.height * this.centerAnchor.y;
            var origin = item.height * item.anchorY;
            pos.y -= anchor - origin;
          } else {
            var _anchor = item.width * this.centerAnchor.x;

            var _origin = item.width * item.anchorX;

            pos.x += _anchor - _origin;
          }

          return pos;
        }
        /** 滚动即将结束时 跑自动居中的逻辑 */


        soonFinish() {
          if (!this.autoCenter) return;
          if (this.scrollView.pullRefresh) return;
          this.scrollView.stopAutoScroll();
          var findedPos = new Vec3(999999, 999999);

          for (var i = 0; i < this.node.children.length; i++) {
            var _this$transform4;

            var child = this.node.children[i];
            var worldPos = (_this$transform4 = this.transform) == null ? void 0 : _this$transform4.convertToWorldSpaceAR(child.position);
            var localPos = this.view.convertToNodeSpaceAR(worldPos);
            var map = {
              width: false,
              height: false
            };
            var multiple = this.getCenterAnchor(child.getComponent(UITransform), this.centerPosition);
            var newLocalPos = localPos.subtract(multiple);
            map.width = Math.abs(newLocalPos.x) < Math.abs(findedPos.x);
            map.height = Math.abs(newLocalPos.y) < Math.abs(findedPos.y);

            if (this.vertical && map.height) {
              findedPos = newLocalPos;
            } else if (!this.vertical && map.width) {
              findedPos = newLocalPos;
            }
          }

          findedPos.multiply(new Vec3(-1, -1, 1));
          this.scrollView.scrollToAny(findedPos, this.centerTime);
        }
        /** 根据groupItemTotal和View可容纳的尺寸 来平均分配Item该有的尺寸 */


        getItemSize(item) {
          var size = new Size();

          if (this.vertical) {
            var spacing = this.spacingX * (this.groupItemTotal - 1);
            size.width = (this.accommodWidth - spacing) / this.groupItemTotal;
            size.height = item.height;
          } else {
            var _spacing = this.spacingY * (this.groupItemTotal - 1);

            size.height = (this.accommodHeight - _spacing) / this.groupItemTotal;
            size.width = item.width;
          }

          return size;
        }
        /** 获取Item的YMax */


        getItemYMax(item) {
          if (!item) return 0;
          var height = this.getScaleHeight(item) * (1 - item.anchorY);
          return item.node.position.y + height;
        }
        /** 获取Item的YMin */


        getItemYMin(item) {
          if (!item) return 0;
          var height = this.getScaleHeight(item) * item.anchorY;
          return item.node.position.y - height;
        }
        /** 获取Item的XMax */


        getItemXMax(item) {
          if (!item) return 0;
          var width = this.getScaleWidth(item) * (1 - item.anchorX);
          return item.node.position.x + width;
        }
        /** 获取Item的XMin */


        getItemXMin(item) {
          if (!item) return 0;
          var width = this.getScaleWidth(item) * item.anchorX;
          return item.node.position.x - width;
        }
        /** 获取一组Item中起始位置X */


        getStartX(item) {
          if (!item) return 0;
          var x = 0;

          if (this.horizontalAxisDirection == HorizontalAxisDirection.LEFT_TO_RIGHT) {
            var width = this.getScaleWidth(item) * item.anchorX;
            x = this.viewStartPoint.x + width;
          } else {
            var _width = this.getScaleWidth(item) * (1 - item.anchorX);

            x = this.viewStartPoint.x - _width;
          }

          return x;
        }
        /** 获取一组Item中结束位置X */


        getEndX(item) {
          if (!item) return 0;
          var x = 0;

          if (this.horizontalAxisDirection == HorizontalAxisDirection.LEFT_TO_RIGHT) {
            var width = this.getScaleWidth(item) * (1 - item.anchorX);
            x = -this.viewStartPoint.x - width - this.paddingRight + this.paddingLeft;
          } else {
            var _width2 = this.getScaleWidth(item) * item.anchorX;

            x = -this.viewStartPoint.x + _width2 + this.paddingLeft - this.paddingRight;
          }

          return x;
        }
        /** 获取一组Item中起始位置Y */


        getStartY(item) {
          if (!item) return 0;
          var y = 0;

          if (this.verticalAxisDirection == VerticalAxisDirection.TOP_TO_BOTTOM) {
            var height = this.getScaleHeight(item) * (1 - item.anchorY);
            y = this.viewStartPoint.y - height;
          } else {
            var _height = this.getScaleHeight(item) * item.anchorY;

            y = this.viewStartPoint.y + _height;
          }

          return y;
        }
        /** 获取一组Item中结束位置Y */


        getEndY(item) {
          if (!item) return 0;
          var y = 0;

          if (this.verticalAxisDirection == VerticalAxisDirection.TOP_TO_BOTTOM) {
            var height = this.getScaleHeight(item) * item.anchorY;
            y = -this.viewStartPoint.y + height + this.paddingBottom - this.paddingTop;
          } else {
            var _height2 = this.getScaleHeight(item) * (1 - item.anchorY);

            y = -this.viewStartPoint.y - _height2 - this.paddingTop + this.paddingBottom;
          }

          return y;
        }
        /** relative的顶部是否有也容纳空间 */


        isAccommodateByTop(relative) {
          var max = this.getItemYMax(relative);
          return max + this.paddingTop < this.accommodHeight * 0.5;
        }
        /** relative的底部是否有也容纳空间 */


        isAccommodateByBottom(relative) {
          var min = this.getItemYMin(relative);
          return min - this.paddingBottom > this.accommodHeight * -0.5;
        }
        /** relative的左侧是否有也容纳空间 */


        isAccommodateByLeft(relative) {
          var min = this.getItemXMin(relative);
          return min - this.paddingLeft > this.accommodWidth * -0.5;
        }
        /** relative的右侧是否有也容纳空间 */


        isAccommodateByRight(relative) {
          var max = this.getItemXMax(relative);
          return max + this.paddingRight < this.accommodWidth * 0.5;
        }
        /** relative的左侧位置 */


        getRelativeByLeft(item, relative) {
          var min = this.getItemXMin(relative);
          return min - this.spacingX - this.getScaleWidth(item) * (1 - item.anchorX);
        }
        /** relative的右侧位置 */


        getRelativeByRight(item, relative) {
          var max = this.getItemXMax(relative);
          return max + this.spacingX + this.getScaleWidth(item) * item.anchorX;
        }
        /** relative的顶部位置 */


        getRelativeByTop(item, relative) {
          var max = this.getItemYMax(relative);
          return max + this.spacingY + this.getScaleHeight(item) * item.anchorY;
        }
        /** relative的底部位置 */


        getRelativeByBottom(item, relative) {
          var min = this.getItemYMin(relative);
          return min - this.spacingY - this.getScaleHeight(item) * (1 - item.anchorY);
        }
        /** 设置Item的坐标位置 */


        setItemPosition(item, relative, reverse, isHeader) {
          if (reverse === void 0) {
            reverse = false;
          }

          if (isHeader === void 0) {
            isHeader = false;
          }

          var pos = new Vec3();

          if (isHeader) {
            pos.x = this.getStartX(item);
            pos.y = this.getStartY(item);
          } else {
            if (this.vertical) {
              pos = this.getVerticalRelativePosition(item, relative, reverse);
            } else {
              pos = this.getHorizontalRelativePosition(item, relative, reverse);
            }
          }

          item.node.setPosition(pos);
        }
        /** 计算垂直模式的Item应该的位置 */


        getVerticalRelativePosition(item, relative, reverse) {
          var pos = new Vec3();
          var isAccommodate = false;

          if (this.horizontalAxisDirection == HorizontalAxisDirection.LEFT_TO_RIGHT) {
            isAccommodate = !reverse ? this.isAccommodateByRight(relative) : this.isAccommodateByLeft(relative);
          } else {
            isAccommodate = !reverse ? this.isAccommodateByLeft(relative) : this.isAccommodateByRight(relative);
          } // 横轴


          if (this.horizontalAxisDirection == HorizontalAxisDirection.LEFT_TO_RIGHT) {
            if (!reverse) {
              pos.x = isAccommodate ? this.getRelativeByRight(item, relative) : this.getStartX(item);
            } else {
              pos.x = isAccommodate ? this.getRelativeByLeft(item, relative) : this.getEndX(item);
            }
          } else {
            if (!reverse) {
              pos.x = isAccommodate ? this.getRelativeByLeft(item, relative) : this.getStartX(item);
            } else {
              pos.x = isAccommodate ? this.getRelativeByRight(item, relative) : this.getEndX(item);
            }
          } // 纵轴


          if (this.verticalAxisDirection == VerticalAxisDirection.TOP_TO_BOTTOM) {
            if (!reverse) {
              pos.y = isAccommodate ? relative.node.position.y : this.getRelativeByBottom(item, relative);
            } else {
              pos.y = isAccommodate ? relative.node.position.y : this.getRelativeByTop(item, relative);
            }
          } else {
            if (!reverse) {
              pos.y = isAccommodate ? relative.node.position.y : this.getRelativeByTop(item, relative);
            } else {
              pos.y = isAccommodate ? relative.node.position.y : this.getRelativeByBottom(item, relative);
            }
          }

          return pos;
        }
        /** 计算水平模式的Item应该的位置 */


        getHorizontalRelativePosition(item, relative, reverse) {
          var pos = new Vec3();
          var isAccommodate = false;

          if (this.verticalAxisDirection == VerticalAxisDirection.TOP_TO_BOTTOM) {
            isAccommodate = !reverse ? this.isAccommodateByBottom(relative) : this.isAccommodateByTop(relative);
          } else {
            isAccommodate = !reverse ? this.isAccommodateByTop(relative) : this.isAccommodateByBottom(relative);
          } // 纵轴


          if (this.verticalAxisDirection == VerticalAxisDirection.TOP_TO_BOTTOM) {
            if (!reverse) {
              pos.y = isAccommodate ? this.getRelativeByBottom(item, relative) : this.getStartY(item);
            } else {
              pos.y = isAccommodate ? this.getRelativeByTop(item, relative) : this.getEndY(item);
            }
          } else {
            if (!reverse) {
              pos.y = isAccommodate ? this.getRelativeByTop(item, relative) : this.getStartY(item);
            } else {
              pos.y = isAccommodate ? this.getRelativeByBottom(item, relative) : this.getEndY(item);
            }
          } // 横轴


          if (this.horizontalAxisDirection == HorizontalAxisDirection.LEFT_TO_RIGHT) {
            if (!reverse) {
              pos.x = isAccommodate ? relative.node.position.x : this.getRelativeByRight(item, relative);
            } else {
              pos.x = isAccommodate ? relative.node.position.x : this.getRelativeByLeft(item, relative);
            }
          } else {
            if (!reverse) {
              pos.x = isAccommodate ? relative.node.position.x : this.getRelativeByLeft(item, relative);
            } else {
              pos.x = isAccommodate ? relative.node.position.x : this.getRelativeByRight(item, relative);
            }
          }

          return pos;
        }
        /** 当数据长度发生变化时 计算item应该怎么排列 */


        refreshItems(offset, refreshLastItem) {
          if (refreshLastItem === void 0) {
            refreshLastItem = false;
          }

          if (offset < 0) {
            for (var i = 0; i < -offset; i++) {
              if (this.headerLoop) {
                this.pushToHeader();
              } else if (this.footerLoop) {
                this.pushToHeader();
              } else {
                this.pushToHeader(true);
                this.pushToFooter();
              }
            }

            var startIndex = this.headerIndex > 0 ? this.headerIndex : 0;

            if (startIndex + this.node.children.length > this.itemTotal) {
              startIndex += offset;
            }

            if (startIndex < 0) startIndex = 0;

            for (var _i = 0; _i < this.node.children.length; _i++) {
              var child = this.node.children[_i];

              if (this.headerLoop || this.footerLoop) {
                if (startIndex > this.itemTotal - 1) {
                  startIndex = 0;
                }
              }

              child["__index"] = startIndex;
              startIndex++;

              if (refreshLastItem) {
                this.notifyRefreshItem(child);
              }
            }

            this.scrollView.stopAutoScroll();
            this.scrollView.startAutoScroll();
          } else {
            for (var _i2 = 0; _i2 < this.node.children.length; _i2++) {
              if (this.vertical) {
                if (this.verticalAxisDirection == VerticalAxisDirection.TOP_TO_BOTTOM) {
                  this.pushToFooter();
                } else {
                  this.pushToHeader();
                }
              } else {
                if (this.horizontalAxisDirection == HorizontalAxisDirection.LEFT_TO_RIGHT) {
                  this.pushToFooter();
                } else {
                  this.pushToHeader();
                }
              }
            }
          }
        }

        createItems(count, refreshLastItem) {
          var _this2 = this;

          if (refreshLastItem === void 0) {
            refreshLastItem = false;
          }

          // 有多余的item 需要删除 不处理
          if (this.node.children.length > count) {
            this.removeItems(count);
            return;
          }

          if (!this.needAddPrefab()) {
            // 已经固定item总数 不处理
            if (this._maxPrefabTotal > 0 && this._maxPrefabTotal == this.node.children.length) {
              return;
            }
          }

          var total = count - this.node.children.length; //计算当前应该创建的总数

          var _loop = function _loop(i) {
            var child = instantiate(_this2.cloneNode);
            var transform = child.getComponent(UITransform);

            _this2.setAndSaveSizeAndScale(transform);

            child["__index"] = _this2.node.children.length;

            _this2.node.addChild(child);

            reverse = false;
            index = _this2.node.children.length - 2;

            if (child["__index"] == 0) {
              relative = _this2.footer;
            } else {
              relative = _this2.node.children[index]._uiProps.uiTransformComp;
            }

            child.on(Node.EventType.SIZE_CHANGED, () => {
              _this2.onChangeChildSize(transform);
            }, _this2, true);
            child.on(Node.EventType.TRANSFORM_CHANGED, type => {
              _this2.onChangeChildScale(type, transform);
            }, _this2, true);

            _this2.notifyRefreshItem(child);

            _this2.setItemPosition(child.getComponent(UITransform), relative, reverse, child["__index"] == 0);
            /**
             * 根据排列方向 来判断对比宽度还是高度
             * 这里使用参数this.multiple来判断是否需要继续创建 默认为2倍 比如view可视尺寸为800 2倍就是1600
             * 根据之前所创建的所有item的尺寸计算是否满足这个尺寸 如果满足则不再继续创建 
             * 由于是分帧加载 所以下一次创建会等这一次的返回结果 返回false 则终止分帧任务
             */


            if (!_this2.needAddPrefab()) {
              _this2._maxPrefabTotal = _this2.node.children.length;
              console.log("已固定item数量", _this2._maxPrefabTotal);
              return "break";
            }
          };

          for (var i = 0; i < total; i++) {
            var reverse;
            var index;
            var relative;

            var _ret = _loop(i);

            if (_ret === "break") break;
          }
        }

        needAddPrefab() {
          var self = this.vertical ? this.contentSize.height : this.contentSize.width;

          if (self > 0) {
            // 当尺寸改变时 重新计算prefab的数量
            var view = this.vertical ? this.view.height : this.view.width;

            if (self < view * this.multiple) {
              return true;
            }
          }

          return false;
        }

        onChangeChildSize(item) {
          var _this3 = this;

          return _asyncToGenerator(function* () {
            var node = item.node;

            if (_this3.groupItemTotal > 1) {
              var __size = node["__size"];
              item.setContentSize(__size);
              console.warn("表格布局不支持动态修改 Size,如果你非要修改，那你把我注释掉看效果");
              return;
            }

            if (_this3.stretchLock.index == node["__index"]) {
              _this3.scrollToIndex(_this3.stretchLock.index, _this3.stretchLock.timeInSecond, _this3.stretchLock.boundary, _this3.stretchLock.reverse);
            }

            _this3.resetStrectchItems();
          })();
        }

        onChangeChildScale(type, item) {
          var _this4 = this;

          return _asyncToGenerator(function* () {
            if (type !== Node.TransformBit.SCALE) {
              return;
            }

            if (!_this4.affectedByScale) return;
            var node = item.node;

            if (_this4.groupItemTotal > 1) {
              var __scale = node["__scale"];
              item.node.setScale(__scale);
              console.warn("表格布局不支持动态修改 Scale,如果你非要修改，那你把我注释掉看效果");
              return;
            }

            if (_this4.stretchLock.index == node["__index"]) {
              _this4.scrollToIndex(_this4.stretchLock.index, _this4.stretchLock.timeInSecond, _this4.stretchLock.boundary, _this4.stretchLock.reverse);
            }

            _this4.resetStrectchItems();
          })();
        }

        resetStrectchItems() {
          if (!isNaN(this.stretchLock.index)) {
            var index = this.node.children.findIndex(item => item["__index"] == this.stretchLock.index);

            if (index != -1) {
              for (var i = index; i >= 0; i--) {
                var item = this.node.children[i];
                if (i == index) continue;

                if (i < index) {
                  this.setItemPosition(item._uiProps.uiTransformComp, this.node.children[i + 1]._uiProps.uiTransformComp, true);
                }
              }

              for (var _i3 = index; _i3 < this.node.children.length; _i3++) {
                var _item = this.node.children[_i3];
                if (_i3 == index) continue;
                this.setItemPosition(_item._uiProps.uiTransformComp, this.node.children[_i3 - 1]._uiProps.uiTransformComp);
              }

              return;
            }
          }

          if (this.scrollDirection == ScrollDirection.HEADER) {
            this.unschedule(this.stretchToFooter);
            this.scheduleOnce(this.stretchToFooter);
          } else {
            this.unschedule(this.stretchToHeader);
            this.scheduleOnce(this.stretchToHeader);
          }
        }

        stretchToHeader() {
          for (var i = this.node.children.length - 1; i >= 0; i--) {
            var item = this.node.children[i];
            if (i == this.node.children.length - 1) continue;
            this.setItemPosition(item._uiProps.uiTransformComp, this.node.children[i + 1]._uiProps.uiTransformComp, true);
          }
        }

        stretchToFooter() {
          for (var i = 0; i < this.node.children.length; i++) {
            var item = this.node.children[i];
            if (i == 0) continue;
            this.setItemPosition(item._uiProps.uiTransformComp, this.node.children[i - 1]._uiProps.uiTransformComp);
          }
        }
        /** 删除多余的item */


        removeItems(count) {
          // 有多余的item 需要删除
          var length = this.node.children.length - count; // 删除掉多余的item

          for (var i = 0; i < length; i++) {
            var child = this.node.children[this.node.children.length - 1];
            child.off(Node.EventType.SIZE_CHANGED);
            child.off(Node.EventType.TRANSFORM_CHANGED);
            this.node.removeChild(child);
            child.destroy();
          }
        }

        addEventListener() {
          this.node.on(Node.EventType.TRANSFORM_CHANGED, this.onPositionChanged, this);
        }

        removeEventListener() {
          this.node.off(Node.EventType.TRANSFORM_CHANGED, this.onPositionChanged, this);
        }
        /** 重新计算当前所有Item的位置 */


        resetChilds(start) {
          if (start === void 0) {
            start = false;
          }

          if (this.vertical && this.fixedItemHeight <= this.view.height || !this.vertical && this.fixedItemWidth <= this.view.width) {
            var _this$header5;

            var x = this.getStartX(this.header);
            var y = this.getStartY(this.header);
            (_this$header5 = this.header) == null ? void 0 : _this$header5.node.setPosition(new Vec3(x, y));
          }

          if (start) {
            if (this.vertical) {
              var _this$header6;

              var _x = this.getStartX(this.header);

              (_this$header6 = this.header) == null ? void 0 : _this$header6.node.setPosition(new Vec3(_x, this.header.node.position.y));
            } else {
              var _this$header7;

              var _y = this.getStartY(this.header);

              (_this$header7 = this.header) == null ? void 0 : _this$header7.node.setPosition(new Vec3(this.header.node.position.x, _y));
            }
          }

          this.stretchToFooter();

          if (!start) {
            this.scrollView.startAutoScroll();
          }
        }

        onTouchBegin() {
          this.stretchLock = {};
        }

        getUsedScaleValue(value) {
          return this.affectedByScale ? Math.abs(value) : 1;
        }

        getScaleWidth(trans) {
          if (!trans) return 0;
          var size = trans.node["__runtime_size"];
          var width = size ? size.width : trans.width;
          return width * this.getUsedScaleValue(trans.node.scale.x);
        }

        getScaleHeight(trans) {
          if (!trans) return 0;
          var size = trans.node["__runtime_size"];
          var height = size ? size.height : trans.height;
          return height * this.getUsedScaleValue(trans.node.scale.y);
        }

        onPositionChanged() {
          if (this.isRestart) return;

          if (this.vertical) {
            if (this.scrollView.prevLocation.y < this.scrollView.location.y) {
              this.scrollDirection = ScrollDirection.FOOTER;
            } else if (this.scrollView.prevLocation.y > this.scrollView.location.y) {
              this.scrollDirection = ScrollDirection.HEADER;
            } else {
              this.scrollDirection = ScrollDirection.NONE;
            }
          } else {
            if (this.scrollView.prevLocation.x > this.scrollView.location.x) {
              this.scrollDirection = ScrollDirection.FOOTER;
            } else if (this.scrollView.prevLocation.x < this.scrollView.location.x) {
              this.scrollDirection = ScrollDirection.HEADER;
            } else {
              this.scrollDirection = ScrollDirection.NONE;
            }
          }

          if (this.vertical) {
            for (var i = 0; i < this.node.children.length; i++) {
              var isOfBoundary = Math.abs(this.prevPos.y - this.node.position.y) > EPSILON;
              if (!isOfBoundary) continue;

              if (this.prevPos.y < this.node.position.y) {
                this.pushToFooter();
              } else if (this.prevPos.y > this.node.position.y) {
                this.pushToHeader();
              }
            }
          } else {
            for (var _i4 = 0; _i4 < this.node.children.length; _i4++) {
              var _isOfBoundary = Math.abs(this.prevPos.x - this.node.position.x) > EPSILON;

              if (!_isOfBoundary) continue;

              if (this.prevPos.x > this.node.position.x) {
                this.pushToFooter();
              } else if (this.prevPos.x < this.node.position.x) {
                this.pushToHeader();
              }
            }
          }

          this.prevPos = this.node.position.clone();
        }
        /** 向尾部填充 force如果为true 则强制填充 */


        pushToFooter(force) {
          if (force === void 0) {
            force = false;
          }

          if (this.vertical) {
            if (this.verticalAxisDirection == VerticalAxisDirection.TOP_TO_BOTTOM) {
              var _this$header8;

              if (force || this.headerBoundary - this.paddingTop > this.viewHeaderBoundary + ((_this$header8 = this.header) == null ? void 0 : _this$header8.height)) {
                this.pushToFooterHandler();
              }
            } else {
              var _this$header9;

              if (force || this.footerBoundary - this.paddingTop > this.viewHeaderBoundary + ((_this$header9 = this.header) == null ? void 0 : _this$header9.height)) {
                this.pushToHeaderHandler();
              }
            }
          } else {
            if (this.horizontalAxisDirection == HorizontalAxisDirection.LEFT_TO_RIGHT) {
              var _this$header10;

              if (force || this.headerBoundary + this.paddingLeft < this.viewHeaderBoundary - ((_this$header10 = this.header) == null ? void 0 : _this$header10.width)) {
                this.pushToFooterHandler();
              }
            } else {
              var _this$header11;

              if (force || this.footerBoundary + this.paddingLeft < this.viewHeaderBoundary - ((_this$header11 = this.header) == null ? void 0 : _this$header11.width)) {
                this.pushToHeaderHandler();
              }
            }
          }
        }
        /** 向头部填充 force如果为true 则强制填充 */


        pushToHeader(force) {
          if (force === void 0) {
            force = false;
          }

          if (this.vertical) {
            if (this.verticalAxisDirection == VerticalAxisDirection.TOP_TO_BOTTOM) {
              var _this$footer5;

              if (force || this.footerBoundary + this.paddingBottom < this.viewFooterBoundary - ((_this$footer5 = this.footer) == null ? void 0 : _this$footer5.height)) {
                this.pushToHeaderHandler();
              }
            } else {
              var _this$footer6;

              if (force || this.headerBoundary + this.paddingBottom < this.viewFooterBoundary - ((_this$footer6 = this.footer) == null ? void 0 : _this$footer6.height)) {
                this.pushToFooterHandler();
              }
            }
          } else {
            if (this.horizontalAxisDirection == HorizontalAxisDirection.LEFT_TO_RIGHT) {
              var _this$footer7;

              if (force || this.footerBoundary - this.paddingRight > this.viewFooterBoundary + ((_this$footer7 = this.footer) == null ? void 0 : _this$footer7.width)) {
                this.pushToHeaderHandler();
              }
            } else {
              var _this$footer8;

              if (force || this.headerBoundary - this.paddingRight > this.viewFooterBoundary + ((_this$footer8 = this.footer) == null ? void 0 : _this$footer8.width)) {
                this.pushToFooterHandler();
              }
            }
          }
        }

        pushToFooterHandler() {
          var _this$header12, _this$header13;

          var node = (_this$header12 = this.header) == null ? void 0 : _this$header12.node;
          var loop;

          if (this.vertical) {
            loop = this.verticalAxisDirection == VerticalAxisDirection.TOP_TO_BOTTOM ? this.footerLoop : this.headerLoop;
          } else {
            loop = this.horizontalAxisDirection == HorizontalAxisDirection.LEFT_TO_RIGHT ? this.footerLoop : this.headerLoop;
          }

          if (loop) {
            if (this.footerIndex >= this.itemTotal - 1) {
              node["__index"] = 0;
            } else {
              node["__index"] = this.footerIndex + 1;
            }
          } else {
            if (!this.footer || this.footerIndex >= this.itemTotal - 1) return;
            node["__index"] = this.footerIndex + 1;
          }

          if (node["__index"] > 0 && node["__index"] < this.currentCreateItemTotal) {
            this.notifyRefreshItem(node);
          }

          this.setItemPosition(this.header, this.footer);
          (_this$header13 = this.header) == null ? void 0 : _this$header13.node.setSiblingIndex(this.node.children.length);
        }

        pushToHeaderHandler() {
          var _this$footer9, _this$footer10;

          var node = (_this$footer9 = this.footer) == null ? void 0 : _this$footer9.node;
          var loop;

          if (this.vertical) {
            loop = this.verticalAxisDirection == VerticalAxisDirection.TOP_TO_BOTTOM ? this.headerLoop : this.footerLoop;
          } else {
            loop = this.horizontalAxisDirection == HorizontalAxisDirection.LEFT_TO_RIGHT ? this.headerLoop : this.footerLoop;
          } // 对其头部


          if (!loop && this.headerIndex == 0) {
            // 判断是否是起始位置
            var accommodate;

            if (this.vertical) {
              accommodate = this.horizontalAxisDirection == HorizontalAxisDirection.LEFT_TO_RIGHT ? this.isAccommodateByLeft(this.header) : this.isAccommodateByRight(this.header);
            } else {
              accommodate = this.verticalAxisDirection == VerticalAxisDirection.TOP_TO_BOTTOM ? this.isAccommodateByTop(this.header) : this.isAccommodateByBottom(this.header);
            }

            if (accommodate) {
              this.resetChilds(true);
            }
          }

          if (loop) {
            if (this.headerIndex == 0) {
              node["__index"] = this.itemTotal - 1;
            } else {
              node["__index"] = this.headerIndex - 1;
            }
          } else {
            if (!this.header || this.headerIndex == 0) return;
            node["__index"] = this.headerIndex - 1;
          }

          if (node["__index"] > 0 && node["__index"] < this.currentCreateItemTotal) {
            this.notifyRefreshItem(node);
          }

          this.setItemPosition(this.footer, this.header, true);
          (_this$footer10 = this.footer) == null ? void 0 : _this$footer10.node.setSiblingIndex(0);
        }
        /** 通知给定的node刷新数据 */


        notifyRefreshItem(target) {
          EventHandler.emitEvents(this.refreshItemEvents, target, target['__index']);
        }

      }, _class3.VerticalAxisDirection = VerticalAxisDirection, _class3.HorizontalAxisDirection = HorizontalAxisDirection, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "scrollView", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "view", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "cloneNode", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "layoutType", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return Type.VERTICAL;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "indexVerticalAxisDirection", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return IndexVerticalAxisDirection.TOP;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "indexHorizontalAxisDirection", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return IndexHorizontalAxisDirection.LEFT;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "verticalAxisDirection", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return VerticalAxisDirection.TOP_TO_BOTTOM;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "horizontalAxisDirection", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return HorizontalAxisDirection.LEFT_TO_RIGHT;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "groupItemTotal", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "multiple", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 2;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "paddingTop", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "paddingBottom", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "paddingLeft", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "paddingRight", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "spacingX", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "spacingY", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "affectedByScale", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "isPageView", [_dec21], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "pageTurningSpeed", [_dec22], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.3;
        }
      }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, "indicator", [_dec23], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, "scrollThreshold", [_dec24], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.5;
        }
      }), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, "autoPageTurningThreshold", [_dec25], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 100;
        }
      }), _descriptor23 = _applyDecoratedDescriptor(_class2.prototype, "pageEvents", [_dec26], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor24 = _applyDecoratedDescriptor(_class2.prototype, "autoCenter", [_dec27], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor25 = _applyDecoratedDescriptor(_class2.prototype, "centerTime", [_dec28], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      }), _descriptor26 = _applyDecoratedDescriptor(_class2.prototype, "centerNode", [_dec29], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor27 = _applyDecoratedDescriptor(_class2.prototype, "centerAnchor", [_dec30], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Vec2(.5, .5);
        }
      }), _descriptor28 = _applyDecoratedDescriptor(_class2.prototype, "headerLoop", [_dec31], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor29 = _applyDecoratedDescriptor(_class2.prototype, "footerLoop", [_dec32], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor30 = _applyDecoratedDescriptor(_class2.prototype, "refreshItemEvents", [_dec33], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class2)) || _class) || _class) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ab68449a4fb6f715f5cd7b07779d551341efe486.js.map