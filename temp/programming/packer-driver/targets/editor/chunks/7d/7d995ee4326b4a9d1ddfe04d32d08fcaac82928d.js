System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Button, instantiate, Label, Node, PageView, Sprite, SpriteAtlas, Tween, tween, UIOpacity, UITransform, Vec3, _decorator, GCache, AppEvent, GameRes, SpriteLoad, EventManager, Utils, BaseComponent, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _crd, ccclass, property, signinCtr;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfGCache(extras) {
    _reporterNs.report("GCache", "../../../cache/GCache", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAppEvent(extras) {
    _reporterNs.report("AppEvent", "../../../config/AppEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameRes(extras) {
    _reporterNs.report("GameRes", "../../../config/GameRes", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSpriteLoad(extras) {
    _reporterNs.report("SpriteLoad", "../../../framework/gui/sprite/SpriteLoad", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventManager(extras) {
    _reporterNs.report("EventManager", "../../../framework/manager/EventManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUtils(extras) {
    _reporterNs.report("Utils", "../../../framework/Utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../../framework/vc/BaseComponent", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Button = _cc.Button;
      instantiate = _cc.instantiate;
      Label = _cc.Label;
      Node = _cc.Node;
      PageView = _cc.PageView;
      Sprite = _cc.Sprite;
      SpriteAtlas = _cc.SpriteAtlas;
      Tween = _cc.Tween;
      tween = _cc.tween;
      UIOpacity = _cc.UIOpacity;
      UITransform = _cc.UITransform;
      Vec3 = _cc.Vec3;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      GCache = _unresolved_2.GCache;
    }, function (_unresolved_3) {
      AppEvent = _unresolved_3.AppEvent;
    }, function (_unresolved_4) {
      GameRes = _unresolved_4.GameRes;
    }, function (_unresolved_5) {
      SpriteLoad = _unresolved_5.default;
    }, function (_unresolved_6) {
      EventManager = _unresolved_6.EventManager;
    }, function (_unresolved_7) {
      Utils = _unresolved_7.Utils;
    }, function (_unresolved_8) {
      BaseComponent = _unresolved_8.BaseComponent;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4c2452sElBI+ZNnl101WUMw", "signinCtr", undefined);

      __checkObsolete__(['Button', 'EventTouch', 'instantiate', 'Label', 'Node', 'PageView', 'Sprite', 'SpriteAtlas', 'Tween', 'tween', 'UIOpacity', 'UITransform', 'Vec3', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Name = signinCtr
       * URL = db://assets/package/activity/script/signinCtr.ts
       * Time = Tue Jun 27 2023 12:00:14 GMT+0800 (中国标准时间)
       * Author = harvyson
       *
       * Life: onLoad-->onEnable->start->update->lateUpdate->onDisable->onDestroy
       */

      _export("signinCtr", signinCtr = (_dec = ccclass('signinCtr'), _dec2 = property({
        tooltip: "活动时间",
        type: Label
      }), _dec3 = property({
        tooltip: "每日签到节点",
        type: Node
      }), _dec4 = property({
        tooltip: "每日签到模板",
        type: Node
      }), _dec5 = property({
        tooltip: "连续签到节点",
        type: Node
      }), _dec6 = property({
        tooltip: "连续签到模板",
        type: Node
      }), _dec7 = property({
        tooltip: "签到按钮",
        type: Button
      }), _dec8 = property({
        tooltip: "签到按钮动画",
        type: Node
      }), _dec9 = property({
        tooltip: "连续签到页左边按钮",
        type: Button
      }), _dec10 = property({
        tooltip: "连续签到页右边按钮",
        type: Button
      }), _dec(_class = (_class2 = class signinCtr extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "time", _descriptor, this);

          _initializerDefineProperty(this, "itemView", _descriptor2, this);

          _initializerDefineProperty(this, "itemTemplate", _descriptor3, this);

          _initializerDefineProperty(this, "continueView", _descriptor4, this);

          _initializerDefineProperty(this, "continueTemplate", _descriptor5, this);

          _initializerDefineProperty(this, "confirmBtn", _descriptor6, this);

          _initializerDefineProperty(this, "confirmBtnAnim", _descriptor7, this);

          _initializerDefineProperty(this, "continueLeftBtn", _descriptor8, this);

          _initializerDefineProperty(this, "continueRightBtn", _descriptor9, this);

          this._data = null;
          this._itemToday = null;
          this._itemIndexToday = null;
        }

        /**初始化添加事件绑定 */
        onInitModuleEvent() {
          /** 签到配置数据更新 */
          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).ACTIVITY_UPDATE_SIGNIN_CONF, this.respUpdateSignConf);
          /** 签到结果返回 */

          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_FORWARD_SIGNIN_AWARD, this.respSignResult);
          /** 连续签到结果返回 */

          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_FORWARD_SIGNIN_CONTINU_AWARD, this.respSignContinueAwardResult);
        }

        onLoad() {
          (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
            error: Error()
          }), GCache) : GCache).Activity.updateTodayOpenSign();
          this.initView();
          this.updateData();
          this.updateView(true);
        }

        start() {}

        //销毁
        onDestroy() {}

        initView() {
          this.itemTemplate.active = false;
          this.continueTemplate.active = false;
        }
        /** 更新数据 */


        updateData() {
          this._data = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).table_verify((_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
            error: Error()
          }), GCache) : GCache).Activity.getSigninData());
        }
        /** 更新界面 */


        updateView(isAll = false) {
          if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).table_isEmpty(this._data)) {
            return;
          }

          this.updateViewTime();

          if (isAll == true) {
            this.updateViewContinueList();
          }

          this.updateViewItemList(true);
          this.updateViewBtn();
        }

        /** 更新时间 */
        updateViewTime() {
          this.time.string = this._data.date || "";
        }

        /** 更新连签页面 */
        updateViewItemList(isRunAni = false) {
          if (!(_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).table_isEmpty(this._data.signAward)) {
            let data = this._data.signAward;
            let childLength = this.itemView.children.length;

            if (!data) {
              for (let i = childLength - 1; i >= 0; i--) {
                this.itemView.children[i].destroy();
              }

              return;
            }

            let max = data.length;

            if (max < childLength) {
              max = childLength;
            }

            for (let i = max - 1; i >= 0; i--) {
              let nodeItem = this.itemView.children[i];

              if (nodeItem && !data[i]) {
                nodeItem.destroy();
              }
            }

            for (let index = 0; index < data.length; index++) {
              let nodeItem = this.itemView.children[index];

              if (!nodeItem) {
                nodeItem = instantiate(this.itemTemplate);
                this.itemView.addChild(nodeItem);
              }

              let uiTransform = nodeItem.getComponent(UITransform);
              nodeItem.position = new Vec3(uiTransform.contentSize.width * index, 100, nodeItem.position.z);
              nodeItem.active = true;
              let uiOpacity = nodeItem.getComponent(UIOpacity);
              uiOpacity.opacity = 0;
              this.updateViewItem(nodeItem, index, data[index]);
              Tween.stopAllByTarget(nodeItem);
              Tween.stopAllByTarget(uiOpacity);

              if (data[index].day == data[index].today) {
                if (isRunAni == true) {
                  tween(nodeItem).delay(0.1 * index).to(0.5, {
                    position: new Vec3(uiTransform.contentSize.width * index, 0, nodeItem.position.z)
                  }, {
                    easing: "backOut"
                  }).delay(0.1 * (this._data.signAward.length - index)).to(0.3, {
                    position: new Vec3(uiTransform.contentSize.width * index, 40, nodeItem.position.z)
                  }, {
                    easing: "sineOut"
                  }).start();
                  tween(uiOpacity).delay(0.1 * index).to(0.3, {
                    opacity: 255
                  }).start();
                } else {
                  nodeItem.setPosition(new Vec3(uiTransform.contentSize.width * index, 40, nodeItem.position.z));
                  uiOpacity.opacity = 255;
                }

                this._itemToday = nodeItem;
                this._itemIndexToday = index;
              } else {
                if (isRunAni == true) {
                  tween(nodeItem).delay(0.1 * index).to(0.5, {
                    position: new Vec3(uiTransform.contentSize.width * index, 0, nodeItem.position.z)
                  }, {
                    easing: "backOut"
                  }).start();
                  tween(uiOpacity).delay(0.1 * index).to(0.3, {
                    opacity: 255
                  }).start();
                } else {
                  nodeItem.setPosition(new Vec3(uiTransform.contentSize.width * index, 0, nodeItem.position.z));
                  uiOpacity.opacity = 255;
                }
              }
            }
          }
        }

        /** 更新单个签到节点 */
        updateViewItem(item, index, itemData) {
          this.print("updateViewItem", itemData);
          let itemBg = item.getChildByName("itemBg");
          let itemDay = itemBg.getChildByName("itemDay");
          let awardView = itemBg.getChildByName("awardView");
          let itemTag = itemBg.getChildByName("itemTag");
          let itemGet = itemBg.getChildByName("itemGet");
          let awardViewIcon = awardView.getChildByName("icon");
          let awardViewText = awardView.getChildByName("text");
          let framePngPath = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).string_format("day_{0}", index + 1);
          itemDay.active = false;
          this.getPreLoaderRes((_crd && GameRes === void 0 ? (_reportPossibleCrUseOfGameRes({
            error: Error()
          }), GameRes) : GameRes).Atlas_Sign.bundle, (_crd && GameRes === void 0 ? (_reportPossibleCrUseOfGameRes({
            error: Error()
          }), GameRes) : GameRes).Atlas_Sign.path, SpriteAtlas, atlas => {
            let spriteFrame = atlas.getSpriteFrame(framePngPath);

            if (spriteFrame) {
              let spriteComponent = itemDay.getComponent(Sprite);
              spriteComponent.spriteFrame = spriteFrame;
              itemDay.active = true;
            }
          });

          if (itemData.day < itemData.today) {
            itemGet.active = true;
          } else if (itemData.day == itemData.today) {
            if (itemData.status == 1) {
              itemGet.active = false;
            } else {
              itemGet.active = true;
            }
          } else {
            itemGet.active = false;
          }

          let spriteLoad = awardViewIcon.getComponent(_crd && SpriteLoad === void 0 ? (_reportPossibleCrUseOfSpriteLoad({
            error: Error()
          }), SpriteLoad) : SpriteLoad);

          if (spriteLoad != null) {
            spriteLoad.setRemoteUrl(itemData.icon);
          }

          let label = awardViewText.getComponent(Label);

          if (label != null) {
            label.string = String(itemData.num);
          } // status: 0 不可签到 1 未签到 2 未签到（补签） 3 已签到


          if (itemData.status == 0) {
            awardView.active = true;
            itemTag.active = false;
          } else if (itemData.status == 1) {
            awardView.active = true;
            itemTag.active = false;
          } else if (itemData.status == 2) {
            awardView.active = true;
            itemTag.active = false;
          } else if (itemData.status == 3) {
            awardView.active = false;
            itemTag.active = true;
          }
        }
        /** 更新连续签到列表 */


        updateViewContinueList() {
          if (!(_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).table_isEmpty(this._data.continueAward)) {
            let pageView = this.continueView.getComponent(PageView);
            let data = this._data.continueAward;
            let childLength = pageView.getPages().length;

            if (!data) {
              for (let i = childLength - 1; i >= 0; i--) {
                pageView.removePageAtIndex(i);
              }

              return;
            }

            let max = data.length;

            if (max < childLength) {
              max = childLength;
            }

            for (let i = max - 1; i >= 0; i--) {
              let nodeItem = this.itemView.children[i];

              if (nodeItem && !data[i]) {
                nodeItem.destroy();
              }
            }

            let pageIndex = 0;
            let allPages = pageView.getPages();

            for (let index = 0; index < data.length; index++) {
              let nodeItem = allPages[index];

              if (!nodeItem) {
                nodeItem = instantiate(this.continueTemplate);
                pageView.addPage(nodeItem);
              }

              nodeItem.active = true;
              this.updateViewContinue(nodeItem, index, data[index]);

              if (data[index]["status"] == 2) {
                if (index == data.length - 1) {
                  pageIndex = data.length - 1;
                } else {
                  pageIndex = index + 1;
                }
              }
            }

            this.checkContinueBtnActive();
            pageView.stopAutoScroll();
            this.addSchedulerOnce(0, () => {
              pageView.scrollToPage(pageIndex);
            });
          }
        }
        /** 更新单个连续签到 */


        updateViewContinue(item, index, itemData) {
          let continueBg = item.getChildByName("continueBg");
          let icon = item.getChildByName("icon");
          let tag = item.getChildByName("tag");
          let awardNumBg = item.getChildByName("awardNumBg");
          let awardNum = awardNumBg.getChildByName("awardNum");
          let continueAnim = item.getChildByName("continueAnim");
          let spriteContinueBg = continueBg.getComponent(Sprite);

          if (spriteContinueBg != null) {
            if (itemData.day == 3) {
              this.getPreLoaderRes((_crd && GameRes === void 0 ? (_reportPossibleCrUseOfGameRes({
                error: Error()
              }), GameRes) : GameRes).Atlas_Sign.bundle, (_crd && GameRes === void 0 ? (_reportPossibleCrUseOfGameRes({
                error: Error()
              }), GameRes) : GameRes).Atlas_Sign.path, SpriteAtlas, atlas => {
                let spriteFrame = atlas.getSpriteFrame("3days");

                if (spriteFrame) {
                  spriteContinueBg.spriteFrame = spriteFrame;
                  spriteContinueBg.node.active = true;
                }
              });
            } else if (itemData.day == 7) {
              this.getPreLoaderRes((_crd && GameRes === void 0 ? (_reportPossibleCrUseOfGameRes({
                error: Error()
              }), GameRes) : GameRes).Atlas_Sign.bundle, (_crd && GameRes === void 0 ? (_reportPossibleCrUseOfGameRes({
                error: Error()
              }), GameRes) : GameRes).Atlas_Sign.path, SpriteAtlas, atlas => {
                let spriteFrame = atlas.getSpriteFrame("7days");

                if (spriteFrame) {
                  spriteContinueBg.spriteFrame = spriteFrame;
                  spriteContinueBg.node.active = true;
                }
              });
            }
          }

          let spriteLoadIcon = icon.getComponent(_crd && SpriteLoad === void 0 ? (_reportPossibleCrUseOfSpriteLoad({
            error: Error()
          }), SpriteLoad) : SpriteLoad);

          if (spriteLoadIcon != null) {
            spriteLoadIcon.setRemoteUrl(itemData.icon);
          }

          let label = awardNum.getComponent(Label);

          if (label != null) {
            label.string = String(itemData.num);
          }

          let btn = icon.getComponent(Button);

          if (!(_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).table_isEmpty(btn.clickEvents)) {
            btn.clickEvents[0].customEventData = String(index);
          } // status: 0 不可领取 1 可领取 2 已领取


          if (itemData.status == 0) {
            tag.active = false;
            continueAnim.active = false;
          } else if (itemData.status == 1) {
            tag.active = false;
            continueAnim.active = true;
          } else if (itemData.status == 2) {
            tag.active = true;
            continueAnim.active = false;
          }
        }
        /** 更新签到按钮 */


        updateViewBtn() {
          if (this._data.todayStatus == 0) {
            this.confirmBtn.enabled = true;
            this.confirmBtn.getComponent(Sprite).grayscale = false;
            let childrenComponent = this.confirmBtn.getComponentsInChildren(Sprite);

            for (let index = 0; index < childrenComponent.length; index++) {
              childrenComponent[index].grayscale = false;
            }

            this.confirmBtnAnim.active = true;
          } else {
            this.confirmBtn.enabled = false;
            this.confirmBtn.getComponent(Sprite).grayscale = true;
            let childrenComponent = this.confirmBtn.getComponentsInChildren(Sprite);

            for (let index = 0; index < childrenComponent.length; index++) {
              childrenComponent[index].grayscale = true;
            }

            this.confirmBtnAnim.active = false;
          }
        }

        onPageEventContinueView(event, customEventData) {
          this.print("onPageEventContinueView", event, customEventData);
          this.checkContinueBtnActive();
        }

        checkContinueBtnActive() {
          let pageView = this.continueView.getComponent(PageView);
          let index = pageView.getCurrentPageIndex();
          let length = pageView.getPages().length;
          this.continueLeftBtn.enabled = index > 0;
          this.continueRightBtn.enabled = index < length - 1;
          this.continueLeftBtn.node.active = index > 0;
          this.continueRightBtn.node.active = index < length - 1;
        }

        onClickContinueAward(event, customEventData) {
          this.print("onClickContinueAward", event, customEventData);

          if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).table_isEmpty(this._data)) {
            return;
          }

          if (!(_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).table_isEmpty(this._data.continueAward)) {
            let index = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).number_valueOf(customEventData);
            let data = this._data.continueAward[index];

            if (!(_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).table_isEmpty(data)) {
              if (data.status == 1) {
                (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
                  error: Error()
                }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
                  error: Error()
                }), AppEvent) : AppEvent).NET_REQ_SIGNIN_CONTINU_AWARD, data.day);
              }
            }
          }
        }
        /** 点击翻页 */


        onClickContinuePageBtn(event, customEventData) {
          this.print("onClickContinuePageBtn", event, customEventData);
          let pageView = this.continueView.getComponent(PageView);

          if (customEventData == "left") {
            pageView.scrollToPage(pageView.getCurrentPageIndex() - 1);
          } else if (customEventData == "right") {
            pageView.scrollToPage(pageView.getCurrentPageIndex() + 1);
          }
        }
        /** 签到配置数据更新 */


        respUpdateSignConf(event, isSuccess) {
          if (!isSuccess) {
            return;
          }

          this.updateData();
          this.updateView(true);
        }
        /** 签到结果 */


        respSignResult(event, isSuccess) {
          if (!isSuccess) {
            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
              error: Error()
            }), AppEvent) : AppEvent).SYS_TOAST_TIP, {
              content: "Fail:签到失败"
            });
            return;
          }

          this.updateData();
          this.updateViewItemList();
          this.updateViewBtn();
          this.updateViewContinueList();
        }
        /** 更新连续签到领奖 */


        respSignContinueAwardResult(event, isSuccess) {
          if (!isSuccess) {
            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
              error: Error()
            }), AppEvent) : AppEvent).SYS_TOAST_TIP, {
              content: "Fail:连续签到失败"
            });
            return;
          }

          this.updateData();
          this.updateViewContinueList();
        }

        onClickCloseBtn(event, custom) {
          this.node.destroy();
        }

        onClickConfirmBtn(event, customEventData) {
          this.print("onClickConfirmBtn", event, customEventData);

          if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).table_isEmpty(this._data)) {
            return;
          }

          if (this._data.todayStatus == 0) {
            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
              error: Error()
            }), AppEvent) : AppEvent).NET_REQ_SIGNIN_AWARD, this._data.today);
          } else {}
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "time", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "itemView", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "itemTemplate", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "continueView", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "continueTemplate", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "confirmBtn", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "confirmBtnAnim", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "continueLeftBtn", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "continueRightBtn", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=7d995ee4326b4a9d1ddfe04d32d08fcaac82928d.js.map