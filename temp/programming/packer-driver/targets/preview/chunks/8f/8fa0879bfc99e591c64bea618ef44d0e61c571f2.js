System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Label, LabelComponent, Node, ScrollView, Sprite, UITransform, Vec3, _decorator, AppEvent, AppSound, GameTxt, EventManager, Utils, BaseComponent, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _crd, ccclass, property, menu, PopWindowComponent;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfAppEvent(extras) {
    _reporterNs.report("AppEvent", "../../config/AppEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAppSound(extras) {
    _reporterNs.report("AppSound", "../../config/AppSound", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameTxt(extras) {
    _reporterNs.report("GameTxt", "../../config/GameTxt", _context.meta, extras);
  }

  function _reportPossibleCrUseOfinf_PopWindowButton(extras) {
    _reporterNs.report("inf_PopWindowButton", "../InterfaceDefines", _context.meta, extras);
  }

  function _reportPossibleCrUseOfinf_PopWindowParams(extras) {
    _reporterNs.report("inf_PopWindowParams", "../InterfaceDefines", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventManager(extras) {
    _reporterNs.report("EventManager", "../manager/EventManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUtils(extras) {
    _reporterNs.report("Utils", "../Utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "./BaseComponent", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Label = _cc.Label;
      LabelComponent = _cc.LabelComponent;
      Node = _cc.Node;
      ScrollView = _cc.ScrollView;
      Sprite = _cc.Sprite;
      UITransform = _cc.UITransform;
      Vec3 = _cc.Vec3;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      AppEvent = _unresolved_2.AppEvent;
    }, function (_unresolved_3) {
      AppSound = _unresolved_3.AppSound;
    }, function (_unresolved_4) {
      GameTxt = _unresolved_4.GameTxt;
    }, function (_unresolved_5) {
      EventManager = _unresolved_5.EventManager;
    }, function (_unresolved_6) {
      Utils = _unresolved_6.Utils;
    }, function (_unresolved_7) {
      BaseComponent = _unresolved_7.BaseComponent;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9fa0fRIVBlG2aKGaEGZFc6h", "PopWindowComponent", undefined);

      __checkObsolete__(['EventTouch', 'Label', 'LabelComponent', 'Node', 'ScrollView', 'Sprite', 'UITransform', 'Vec3', '_decorator']);

      ({
        ccclass,
        property,
        menu
      } = _decorator);
      /**
       * Name = PopWindowComponent
       * Time = Wed Apr 13 2022 16:27:07 GMT+0800 (中国标准时间)
       * Author = Aby
       * Life: onLoad-->onEnable->start->update->lateUpdate->onDisable->onDestroy
       * 通用对话框
       */

      _export("PopWindowComponent", PopWindowComponent = (_dec = ccclass('PopWindowComponent'), _dec2 = menu('vc/PopWindowComponent'), _dec3 = property({
        tooltip: "标题内容-文本",
        type: Label
      }), _dec4 = property({
        tooltip: "标题内容-图片",
        type: Sprite
      }), _dec5 = property({
        tooltip: "所有label的box",
        type: Node
      }), _dec6 = property({
        tooltip: "包含只有一个label的父节点",
        type: Node
      }), _dec7 = property({
        tooltip: "包含只有一个label的ScrollView",
        type: ScrollView
      }), _dec8 = property({
        tooltip: "包含只有一个label的Label",
        type: Label
      }), _dec9 = property({
        tooltip: "包含两个label的父节点",
        type: Node
      }), _dec10 = property({
        tooltip: "包含两个label的Label desc的box",
        type: Node
      }), _dec11 = property({
        tooltip: "包含两个label的ScrollView",
        type: ScrollView
      }), _dec12 = property({
        tooltip: "包含只有一个label的Label",
        type: Label
      }), _dec13 = property({
        tooltip: "包含只有一个label的Label",
        type: Label
      }), _dec14 = property({
        tooltip: "包含两个按钮的父节点",
        type: Node
      }), _dec15 = property({
        tooltip: "包含一个按钮的父节点",
        type: Node
      }), _dec16 = property({
        tooltip: "关闭按钮",
        type: Node
      }), _dec(_class = _dec2(_class = (_class2 = class PopWindowComponent extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "labelTitle", _descriptor, this);

          _initializerDefineProperty(this, "sprTitle", _descriptor2, this);

          _initializerDefineProperty(this, "AllLabelbox", _descriptor3, this);

          _initializerDefineProperty(this, "OneLabelParent", _descriptor4, this);

          _initializerDefineProperty(this, "OneScrollView", _descriptor5, this);

          _initializerDefineProperty(this, "OneLabelDesc", _descriptor6, this);

          _initializerDefineProperty(this, "TwoLabelParent", _descriptor7, this);

          _initializerDefineProperty(this, "TwoLabelbox", _descriptor8, this);

          _initializerDefineProperty(this, "TwoScrollView", _descriptor9, this);

          _initializerDefineProperty(this, "TwoLabelDesc", _descriptor10, this);

          _initializerDefineProperty(this, "TwoLabelMain", _descriptor11, this);

          _initializerDefineProperty(this, "TwoButtonsParent", _descriptor12, this);

          _initializerDefineProperty(this, "OneButtonsParent", _descriptor13, this);

          _initializerDefineProperty(this, "closeNode", _descriptor14, this);

          this._params = void 0;
          this.clickFuncList = {};
          this._labelAddHeight = 80;
        }

        onLoad() {
          this._params = {
            title: "",
            //窗口标题名
            txt_title: "",
            //正文大标题
            txt_desc: "",
            //正文内容
            dec_fontSize: 32,
            //正文内容大小
            alignLeftTop: false,
            //正文是否从左上开始
            notshowClose: false,
            //不显示关闭按钮
            notAutoClickClose: false,
            //点击后不自动关闭
            buttonsMap: [],
            //按钮配置队列
            web_url: "" //网页地址

          };
          var comp = null;
          comp = this.node.getComponent("DelegateComponent");

          if (comp) {
            this._params = comp.getParams();
          }

          this.labelTitle.node.active = false;
          this.sprTitle.node.active = false;
          this.updateView();
        }

        start() {}

        //更新界面
        updateView() {
          var _this$_params, _this$_params3, _this$_params4, _this$_params11;

          if ((_this$_params = this._params) != null && _this$_params.title) {
            var _this$_params2;

            this.labelTitle.string = (_this$_params2 = this._params) == null ? void 0 : _this$_params2.title;
            this.labelTitle.node.active = true;
            this.sprTitle.node.active = false;
          } else {
            this.labelTitle.node.active = false;
            this.sprTitle.node.active = true;
          } //当前是选择只有一个文本框的还是有两个文本框的 或者webview


          var chooseType = 1;

          if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).string_isEmpty((_this$_params3 = this._params) == null ? void 0 : _this$_params3.web_url)) {
            if (this._params["txt_title"] != null) {
              chooseType = 2;
              this.TwoLabelMain.string = this._params.txt_title;
              this.TwoLabelMain.horizontalAlign = 1;
              this.TwoLabelMain.verticalAlign = 1;
            }
          } else {
            chooseType = 3;
          } //按钮配置


          var num = 1;
          var isHaveShowBtn = false;

          if ((_this$_params4 = this._params) != null && _this$_params4.buttonsMap) {
            switch (this._params.buttonsMap.length) {
              case 1:
                isHaveShowBtn = true;
                this.TwoButtonsParent.active = false;
                this.OneButtonsParent.active = true;

                for (var key in this._params.buttonsMap) {
                  if (Object.prototype.hasOwnProperty.call(this._params.buttonsMap, key)) {
                    var btnConf = this._params.buttonsMap[key];
                    var btn = this.OneButtonsParent.getChildByName("btn_" + num);

                    if (btn) {
                      btn.active = true;
                      var btnLabel = btn.getChildByName("Label");

                      if (btnLabel) {
                        var labelComm = btnLabel.getComponent(LabelComponent);

                        if (labelComm) {
                          labelComm.string = (btnConf == null ? void 0 : btnConf.label) || (_crd && GameTxt === void 0 ? (_reportPossibleCrUseOfGameTxt({
                            error: Error()
                          }), GameTxt) : GameTxt).common_btn_queding;
                        }
                      }

                      this.clickFuncList["btn_" + num] = (btnConf == null ? void 0 : btnConf.click) || null;
                    }

                    num = num + 1;
                  }
                }

                break;

              case 2:
                this.TwoButtonsParent.active = true;
                this.OneButtonsParent.active = false;
                isHaveShowBtn = true;

                for (var _key in this._params.buttonsMap) {
                  if (Object.prototype.hasOwnProperty.call(this._params.buttonsMap, _key)) {
                    var _btnConf = this._params.buttonsMap[_key];

                    var _btn = this.TwoButtonsParent.getChildByName("btn_" + num);

                    if (_btn) {
                      _btn.active = true;

                      var _btnLabel = _btn.getChildByName("Label");

                      if (_btnLabel) {
                        var _labelComm = _btnLabel.getComponent(LabelComponent);

                        if (_labelComm) {
                          _labelComm.string = (_btnConf == null ? void 0 : _btnConf.label) || (num == 1 ? (_crd && GameTxt === void 0 ? (_reportPossibleCrUseOfGameTxt({
                            error: Error()
                          }), GameTxt) : GameTxt).common_btn_queding : (_crd && GameTxt === void 0 ? (_reportPossibleCrUseOfGameTxt({
                            error: Error()
                          }), GameTxt) : GameTxt).common_btn_cancle);
                        }
                      }

                      this.clickFuncList["btn_" + num] = (_btnConf == null ? void 0 : _btnConf.click) || null;
                    }

                    num = num + 1;
                  }
                }

                break;

              default:
                isHaveShowBtn = false;
                this.TwoButtonsParent.active = false;
                this.OneButtonsParent.active = false;
                break;
            }
          } else {
            isHaveShowBtn = false;
            this.TwoButtonsParent.active = false;
            this.OneButtonsParent.active = false;
          } //文本区域


          if (chooseType == 1) {
            var _this$_params5, _this$_params6, _this$_params7;

            this.OneLabelParent.active = true;
            this.TwoLabelParent.active = false;
            var box = this.AllLabelbox;
            var scrollview = this.OneScrollView;
            var labelDesc = this.OneLabelDesc;
            var compScrollView = scrollview.getComponent(UITransform);
            var compBox = box.getComponent(UITransform);

            if (((_this$_params5 = this._params) == null ? void 0 : _this$_params5.alignLeftTop) == true) {
              labelDesc.horizontalAlign = 0;
              labelDesc.verticalAlign = 0;
            } else {
              //居中对齐
              labelDesc.horizontalAlign = 1;
              labelDesc.verticalAlign = 0;
            }

            if ((_this$_params6 = this._params) != null && _this$_params6.dec_fontSize) {
              labelDesc.fontSize = this._params.dec_fontSize; //设置正文文字大小
            }

            labelDesc.string = ((_this$_params7 = this._params) == null ? void 0 : _this$_params7.txt_desc) || "";

            if (isHaveShowBtn == false) {
              compBox.height = compBox.height + this._labelAddHeight;
              box.position = new Vec3(box.position.x, box.position.y - this._labelAddHeight / 4, box.position.z);
            } //如果文本超出滚动可视区域


            this.addSchedulerOnce(0, () => {
              var countNum = compScrollView.height / labelDesc.node.getComponent(UITransform).height;

              if (countNum < 1) {
                scrollview.vertical = true;
                scrollview.verticalScrollBar.node.active = true;
              } else {
                scrollview.vertical = false;
                scrollview.verticalScrollBar.node.active = false;

                if (countNum >= 2) {
                  var newPosY = 0 - (compScrollView.height - labelDesc.node.getComponent(UITransform).height) / 2;
                  newPosY = newPosY / 2;
                  labelDesc.node.setPosition(new Vec3(labelDesc.node.position.x, newPosY, labelDesc.node.position.z));
                }
              }
            });
          } else if (chooseType == 2) {
            var _this$_params8, _this$_params9, _this$_params10;

            this.OneLabelParent.active = false;
            this.TwoLabelParent.active = true;
            var _box = this.AllLabelbox;
            var _scrollview = this.TwoScrollView;
            var _labelDesc = this.TwoLabelDesc;

            var _compScrollView = _scrollview.getComponent(UITransform);

            var _compBox = _box.getComponent(UITransform);

            var smallBox = this.TwoLabelbox;
            var compSmallBox = smallBox.getComponent(UITransform);

            if (((_this$_params8 = this._params) == null ? void 0 : _this$_params8.alignLeftTop) == true) {
              _labelDesc.horizontalAlign = 0;
              _labelDesc.verticalAlign = 0;
            } else {
              //居中对齐
              _labelDesc.horizontalAlign = 1;
              _labelDesc.verticalAlign = 0;
            }

            if ((_this$_params9 = this._params) != null && _this$_params9.dec_fontSize) {
              _labelDesc.fontSize = this._params.dec_fontSize; //设置正文文字大小
            }

            _labelDesc.string = ((_this$_params10 = this._params) == null ? void 0 : _this$_params10.txt_desc) || "";

            if (isHaveShowBtn == false) {
              _compBox.height = _compBox.height + this._labelAddHeight;
              _box.position = new Vec3(_box.position.x, _box.position.y - this._labelAddHeight / 4, _box.position.z);
            } //如果文本超出滚动可视区域


            this.addSchedulerOnce(0.02, () => {
              if (_labelDesc.getComponent(UITransform).height > _compScrollView.height) {
                _scrollview.vertical = true;
                _scrollview.verticalScrollBar.node.active = true;
              } else {
                _scrollview.vertical = false;
                _scrollview.verticalScrollBar.node.active = false;
              }
            });
          } else if (chooseType == 3) {
            this.OneLabelParent.active = false;
            this.TwoLabelParent.active = false;
          } else {
            this.OneLabelParent.active = false;
            this.TwoLabelParent.active = false;
          } //关闭按钮的显示与隐藏


          if (((_this$_params11 = this._params) == null ? void 0 : _this$_params11.notshowClose) != null) {
            this.closeNode.active = !this._params.notshowClose;
          } else {
            this.closeNode.active = true;
          }
        } //销毁


        onDestroy() {}

        //点击了两个按钮中的左边一个
        onClickLeftByTwoButton(event) {
          var _this$_params12;

          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).SYS_PLAY_EFFECT, (_crd && AppSound === void 0 ? (_reportPossibleCrUseOfAppSound({
            error: Error()
          }), AppSound) : AppSound).CommClick);
          var node = event.getCurrentTarget();

          if (((_this$_params12 = this._params) == null ? void 0 : _this$_params12.notAutoClickClose) != true) {
            this.node.destroy();
          }

          if (this.clickFuncList[node.name]) {
            this.clickFuncList[node.name]();
          }
        } //点击了两个按钮中的右边一个


        onClickRightByTwoButton(event) {
          var _this$_params13;

          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).SYS_PLAY_EFFECT, (_crd && AppSound === void 0 ? (_reportPossibleCrUseOfAppSound({
            error: Error()
          }), AppSound) : AppSound).CommClick);
          var node = event.getCurrentTarget();

          if (((_this$_params13 = this._params) == null ? void 0 : _this$_params13.notAutoClickClose) != true) {
            this.node.destroy();
          }

          if (this.clickFuncList[node.name]) {
            this.clickFuncList[node.name]();
          }
        } //点击了一个按钮


        onClicByOneButton(event) {
          var _this$_params14;

          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).SYS_PLAY_EFFECT, (_crd && AppSound === void 0 ? (_reportPossibleCrUseOfAppSound({
            error: Error()
          }), AppSound) : AppSound).CommClick);
          var node = event.getCurrentTarget();

          if (((_this$_params14 = this._params) == null ? void 0 : _this$_params14.notAutoClickClose) != false) {
            this.node.destroy();
          }

          if (this.clickFuncList[node.name]) {
            this.clickFuncList[node.name]();
          }
        } //点击了关闭


        onClickClose(event) {
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).SYS_PLAY_EFFECT, (_crd && AppSound === void 0 ? (_reportPossibleCrUseOfAppSound({
            error: Error()
          }), AppSound) : AppSound).CommClick);
          this.node.destroy();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "labelTitle", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "sprTitle", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "AllLabelbox", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "OneLabelParent", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "OneScrollView", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "OneLabelDesc", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "TwoLabelParent", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "TwoLabelbox", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "TwoScrollView", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "TwoLabelDesc", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "TwoLabelMain", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "TwoButtonsParent", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "OneButtonsParent", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "closeNode", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=8fa0879bfc99e591c64bea618ef44d0e61c571f2.js.map