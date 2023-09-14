System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, BlockInputEvents, Color, ImageAsset, Layers, Node, Sprite, SpriteFrame, Texture2D, Widget, DelegateComponent, LayerUI, LayerPopUp, _crd;

  function _reportPossibleCrUseOfinf_PopViewParams(extras) {
    _reporterNs.report("inf_PopViewParams", "../InterfaceDefines", _context.meta, extras);
  }

  function _reportPossibleCrUseOfinf_UIConfig(extras) {
    _reporterNs.report("inf_UIConfig", "../InterfaceDefines", _context.meta, extras);
  }

  function _reportPossibleCrUseOfinf_ViewParams(extras) {
    _reporterNs.report("inf_ViewParams", "../InterfaceDefines", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDelegateComponent(extras) {
    _reporterNs.report("DelegateComponent", "./DelegateComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLayerUI(extras) {
    _reporterNs.report("LayerUI", "./LayerUI", _context.meta, extras);
  }

  _export("LayerPopUp", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      BlockInputEvents = _cc.BlockInputEvents;
      Color = _cc.Color;
      ImageAsset = _cc.ImageAsset;
      Layers = _cc.Layers;
      Node = _cc.Node;
      Sprite = _cc.Sprite;
      SpriteFrame = _cc.SpriteFrame;
      Texture2D = _cc.Texture2D;
      Widget = _cc.Widget;
    }, function (_unresolved_2) {
      DelegateComponent = _unresolved_2.DelegateComponent;
    }, function (_unresolved_3) {
      LayerUI = _unresolved_3.LayerUI;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "25d07BQBCFADaSsh/I3GrTX", "LayerPopup", undefined);

      __checkObsolete__(['BlockInputEvents', 'Color', 'EventTouch', 'ImageAsset', 'Layers', 'Node', 'Sprite', 'SpriteFrame', 'Texture2D', 'Widget']);

      /*
       * Popup层，调用add显示，可以显示暗色背景，弹框参数可以查看PopViewParams
       * 允许同时弹出多个不同资源文件的窗口(同一个则禁止弹出)
       */
      _export("LayerPopUp", LayerPopUp = class LayerPopUp extends (_crd && LayerUI === void 0 ? (_reportPossibleCrUseOfLayerUI({
        error: Error()
      }), LayerUI) : LayerUI) {
        constructor(name) {
          super(name);
        }

        init() {
          super.init(); //背景

          this.layer = Layers.Enum.UI_2D; //防穿透

          this.black = this.getComponent(BlockInputEvents);

          if (!this.black) {
            this.black = this.addComponent(BlockInputEvents);
          }

          this.black.enabled = false;
          this.reloadMaskSprite();
          this.regMaskTouch();
        }
        /** 重新加载maskNode蒙版(子节点) */


        reloadMaskSprite(color) {
          if (color === void 0) {
            color = new Color(0, 0, 0, 150);
          }

          var width = 100;
          var height = 100;
          var count = width * height * 4;
          var data = new Uint8Array(count);

          for (var j = 0; j < count; j += 4) {
            data[j] = color.r; // r

            data[j + 1] = color.g; // g

            data[j + 2] = color.b; // b

            data[j + 3] = color.a; // a
          }

          var imageAsset = new ImageAsset();
          imageAsset.reset({
            _data: data,
            _compressed: false,
            width: width,
            height: height,
            format: Texture2D.PixelFormat.RGBA8888
          });
          var texture = new Texture2D();
          texture.reset({
            width: width,
            height: height,
            format: Texture2D.PixelFormat.RGBA8888
          });
          texture.image = imageAsset;
          var spriteFrame = new SpriteFrame();
          spriteFrame.texture = texture; //需要禁用其纹理的 packable 选项 不参与自动合图

          spriteFrame.packable = false; //节点

          var node = this._maskNode.getChildByName("Sprite");

          var sprite = null;

          if (!node) {
            node = this.create_2DNode("Sprite");
            var w = node.addComponent(Widget);
            w.isAlignLeft = w.isAlignRight = w.isAlignTop = w.isAlignBottom = true;
            w.left = w.right = w.top = w.bottom = 0;
            w.alignMode = 2;
            w.enabled = true;
            sprite = node.addComponent(Sprite);
            sprite.enabled = true;

            this._maskNode.addChild(node);
          } else {
            sprite = node.getComponent(Sprite);
          }

          sprite.trim = true;
          sprite.sizeMode = 0;
          sprite.type = 0;
          sprite.spriteFrame = spriteFrame;
        }
        /** 注册遮罩层的点击事件 */


        regMaskTouch() {
          this._maskNode.on(Node.EventType.TOUCH_END, this.onTouchMaskEnd, this);
        }
        /** 遮罩层的点击事件 */


        onTouchMaskEnd(event) {
          if (this.children.length >= 2) {
            var topChild = this.children[this.children.length - 1];

            if (topChild && topChild.active == true && topChild.isValid == true) {
              var delegateComponent = topChild.getComponent(_crd && DelegateComponent === void 0 ? (_reportPossibleCrUseOfDelegateComponent({
                error: Error()
              }), DelegateComponent) : DelegateComponent);

              if (delegateComponent) {
                var viewParams = delegateComponent.viewParams;

                if (viewParams && viewParams.isClickSpanceClose == true) {
                  topChild.destroy();
                }
              }
            }
          }
        }
        /**
         * 添加一个预制件节点到PopUp层容器中，该方法将返回一个唯一uuid来标识该操作节点
         * @param prefabPath 预制件路径
         * @param params     传给组件onAdded、onRemoved方法的参数。
         * @param popParams  弹出界面的设置定义，详情见PopViewParams
         * @param isClickSpanceClose 是否点击自动关闭 默认 false 不关闭
         * @param isAutoRecover 是否自动释放加载的资源 默认false不释放
         */


        add(config, params, popParams, isClickSpanceClose, isAutoRecover) {
          this.black.enabled = true;
          return super.add(config, params, popParams, isClickSpanceClose, isAutoRecover);
        }
        /** 更新遮罩层点击状态 */


        updateMaskState() {
          super.updateMaskState();

          if (this.isValid == false || !this._maskNode) {
            return;
          }

          this.black.enabled = this._maskNode.active;
        }
        /**
         * 根据预制体路径移除
         * @param prefabPath 预制体路径
         * @param isDestroy 是否销毁
         */


        remove(prefabPath, isDestroy) {
          super.remove(prefabPath, isDestroy);

          if (this.isValid == false) {
            return;
          }

          this.black.enabled = false;
        }
        /**
         * 根据预制体唯一UUID移除
         * @param prefabPath 预制体路径
         * @param isDestroy 是否销毁
         */


        removeByUuid(prefabPath, isDestroy) {
          super.removeByUuid(prefabPath, isDestroy);

          if (this.isValid == false) {
            return;
          }

          this.black.enabled = false;
        }
        /**
         * 执行销毁,不发送通知
         */


        toDestoryNotNotify() {
          if (this._maskNode && this._maskNode.isValid == true) {
            this._maskNode.off(Node.EventType.TOUCH_END, this.onTouchMaskEnd, this);
          }

          super.toDestoryNotNotify();

          if (this.isValid == false) {
            return;
          }

          this.init();
          this.regMaskTouch();
        }

        clear(isDestroy) {
          super.clear(isDestroy);

          if (this.isValid == false) {
            return;
          }

          this.black.enabled = false;
          this.active = false;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f99ff93ccc0618b6d83d4b95032b953c6f50cbe4.js.map