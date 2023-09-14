System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Button, error, instantiate, isValid, Layers, MaskComponent, Node, Prefab, Sprite, UITransform, Vec2, warn, Widget, inf_ViewParams, resLoader, DelegateComponent, LayerUI, _crd, countDeletcNum;

  function _reportPossibleCrUseOfinf_UICallbacks(extras) {
    _reporterNs.report("inf_UICallbacks", "../InterfaceDefines", _context.meta, extras);
  }

  function _reportPossibleCrUseOfinf_UIConfig(extras) {
    _reporterNs.report("inf_UIConfig", "../InterfaceDefines", _context.meta, extras);
  }

  function _reportPossibleCrUseOfinf_ViewParams(extras) {
    _reporterNs.report("inf_ViewParams", "../InterfaceDefines", _context.meta, extras);
  }

  function _reportPossibleCrUseOfresLoader(extras) {
    _reporterNs.report("resLoader", "../loader/ResLoader", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDelegateComponent(extras) {
    _reporterNs.report("DelegateComponent", "./DelegateComponent", _context.meta, extras);
  }

  _export("LayerUI", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Button = _cc.Button;
      error = _cc.error;
      instantiate = _cc.instantiate;
      isValid = _cc.isValid;
      Layers = _cc.Layers;
      MaskComponent = _cc.MaskComponent;
      Node = _cc.Node;
      Prefab = _cc.Prefab;
      Sprite = _cc.Sprite;
      UITransform = _cc.UITransform;
      Vec2 = _cc.Vec2;
      warn = _cc.warn;
      Widget = _cc.Widget;
    }, function (_unresolved_2) {
      inf_ViewParams = _unresolved_2.inf_ViewParams;
    }, function (_unresolved_3) {
      resLoader = _unresolved_3.resLoader;
    }, function (_unresolved_4) {
      DelegateComponent = _unresolved_4.DelegateComponent;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "02f9bWPhnlCyosSjezkc7Yq", "LayerUI", undefined);

      __checkObsolete__(['Button', 'error', 'instantiate', 'isValid', 'Layers', 'MaskComponent', 'Node', 'Prefab', 'Sprite', 'SpriteFrame', 'UITransform', 'Vec2', 'warn', 'Widget']);

      countDeletcNum = 0;

      _export("LayerUI", LayerUI = class LayerUI extends Node {
        //添加的历史记录{prefabPath = {soleID,soleID,...}}
        //[path] = [viewParams,viewParams]

        /** 遮罩层 */

        /** 遮罩层 */

        /**
         * UI基础层，允许添加多个预制件节点
         * @param name 该层名
         * @param container 容器Node
         */
        constructor(name) {
          super(name);
          this.addHistoryRecode = {};
          this.loadingMap = {};
          this.key_num = 0;
          this.ui_nodes = {};
          this._maskNode = null;
          this._buttonCompent = null;

          this.onWillAdd = (node, viewParams) => {};

          this.onAdded = (node, viewParams) => {};

          this.onRemoved = (node, viewParams) => {
            setTimeout(() => {
              viewParams.node = null;
              viewParams.valid = false;
              this.removeByUuid(viewParams.uuid, true);
            }, 0);
          };

          this.onBeforeRemove = (node, next) => {};

          this.init();
        }

        /** 初始化节点 */
        init() {
          var widget = this.getComponent(Widget);

          if (!widget) {
            widget = this.addComponent(Widget);
          }

          widget.isAlignLeft = widget.isAlignRight = widget.isAlignTop = widget.isAlignBottom = true;
          widget.left = widget.right = widget.top = widget.bottom = 0;
          widget.alignMode = 2;
          widget.enabled = true;
          widget.updateAlignment();
          this.create_Mask("Mask");
          this.on(Node.EventType.CHILD_ADDED, this.onCallbackChildAdd, this);
          this.on(Node.EventType.CHILD_REMOVED, this.onCallbackChildRemove, this);
          this.on(Node.EventType.NODE_DESTROYED, this.onCallbackDestory, this);
        }
        /**
         * 创建一个遮罩层
         * @param name 节点名称
         * @returns 
         */


        create_Mask(name) {
          if (name === void 0) {
            name = null;
          }

          if (!this._maskNode) {
            this._maskNode = new Node(name);
            this._maskNode.layer = Layers.Enum.UI_2D;
            this.addChild(this._maskNode);
          }

          var widget = this._maskNode.getComponent(Widget);

          if (!widget) {
            widget = this._maskNode.addComponent(Widget);
          }

          widget.isAlignLeft = widget.isAlignRight = widget.isAlignTop = widget.isAlignBottom = true;
          widget.left = widget.right = widget.top = widget.bottom = 0;
          widget.alignMode = 2;
          widget.enabled = true;
          widget.updateAlignment();

          var mask = this._maskNode.addComponent(MaskComponent);

          mask.type = 0;
          mask.enabled = true;
          this._buttonCompent = this._maskNode.getComponent(Button);

          if (!this._buttonCompent) {
            this._buttonCompent = this._maskNode.addComponent(Button);
          }

          this._buttonCompent.target = this._maskNode;
          this._buttonCompent.interactable = true;
          this._buttonCompent.transition = 0;
          this._buttonCompent.enabled = true;
          this._maskNode.active = false;
        }
        /**
         * 创建一个2D节点
         * @param name 节点名称
         * @returns 
         */


        create_2DNode(name) {
          if (name === void 0) {
            name = null;
          }

          if (name != null) {
            name = String(name);
          }

          var node = new Node(name);
          node.layer = Layers.Enum.UI_2D;
          var uiTrans = node.addComponent(UITransform);
          uiTrans.anchorPoint = new Vec2(0.5, 0.5);
          uiTrans.enabled = true;
          return node;
        }
        /**
         * 创建一个2D图片节点
         * @param name 节点名称
         * @returns 
         */


        create_2DSprite(spriteFrame, name) {
          if (name === void 0) {
            name = null;
          }

          var node = this.create_2DNode(name);

          if (node) {
            var sprite = node.addComponent(Sprite);
            sprite.sizeMode = 0;
            sprite.type = 0;
            sprite.trim = true;
            sprite.spriteFrame = spriteFrame;
            sprite.enabled = true;
          }

          return node;
        }
        /** 有子节点被添加 */


        onCallbackChildAdd(node) {
          // console.log("有子节点被添加", node)
          this.updateMaskState();
        }
        /** 有子节点被移除 */


        onCallbackChildRemove(node) {
          // console.log("有子节点被移除：", node)
          this.updateMaskState();
        }
        /** 节点被销毁 */


        onCallbackDestory(node) {
          this.off(Node.EventType.CHILD_ADDED, this.onCallbackChildAdd, this);
          this.off(Node.EventType.CHILD_REMOVED, this.onCallbackChildRemove, this);
          this.off(Node.EventType.NODE_DESTROYED, this.onCallbackDestory, this);
        }
        /** 更新遮罩层点击状态 */


        updateMaskState() {
          if (this.isValid == false || !this._maskNode) {
            return;
          }

          if (this.activeInHierarchy == false) {
            return;
          }

          if (this.children.length > 1) {
            this.active = true;
            this.insertChild(this._maskNode, this.children.length - 1 - 1);
            this._maskNode.active = true;
            this._buttonCompent.enabled = true;
          } else {
            this._maskNode.active = false;
          }
        }
        /** 
         * 构造一个唯一标识 同一个预制体也唯一
        */


        getSoleID(prefabPath) {
          this.key_num = this.key_num + 1;
          var soleNum = this.name + "_" + prefabPath + "_" + this.key_num;
          var soleKey = soleNum.replace(/\//g, "_"); //记录历史

          if (!this.addHistoryRecode[prefabPath]) {
            this.addHistoryRecode[prefabPath] = {};
          }

          this.addHistoryRecode[prefabPath][soleKey] = true;
          return soleKey;
        }
        /**
         * 添加一个预制件节点到层容器中，该方法将返回一个唯一`uuid`来标识该操作节点 
         * 一个层不能同时存在多个相同的uuid
         * @param config.prefab 预制件路径 config.bundle 分包包名 默认resources
         * @param params     自定义参数
         * @param callbacks  回调函数对象，可选
         * @param isClickSpanceClose 是否点击自动关闭 默认 false 不关闭
         * @param isAutoRecover 是否自动释放加载的资源 默认false不释放
         */


        add(config, params, callbacks, isClickSpanceClose, isAutoRecover) {
          //this不存在了
          if (this.isValid == false) {
            return;
          }

          var bundle = config.bundle || "resources";
          var prefabPath = config.prefab; //唯一标识

          var soleKey = this.getSoleID(prefabPath);
          var viewParams = new (_crd && inf_ViewParams === void 0 ? (_reportPossibleCrUseOfinf_ViewParams({
            error: Error()
          }), inf_ViewParams) : inf_ViewParams)();
          viewParams.uuid = soleKey;
          viewParams.bundle = bundle;
          viewParams.prefabPath = prefabPath;
          viewParams.params = params || {};
          viewParams.callbacks = callbacks || {};
          viewParams.noticeToRoot = {
            onWillAdd: this.onWillAdd,
            onAdded: this.onAdded,
            onBeforeRemove: this.onBeforeRemove,
            onRemoved: this.onRemoved
          };
          viewParams.valid = true;
          viewParams.isAutoRecover = isAutoRecover || false;
          viewParams.isClickSpanceClose = isClickSpanceClose || false;
          this.load(viewParams);
          return soleKey;
        }

        load(viewParams) {
          //this不存在了
          if (this.isValid == false) {
            return;
          }

          if (viewParams && viewParams.prefabPath) {
            this.loadingMap[viewParams.prefabPath] = true; //缓存中的资源

            var prefab = (_crd && resLoader === void 0 ? (_reportPossibleCrUseOfresLoader({
              error: Error()
            }), resLoader) : resLoader).get(viewParams.prefabPath, Prefab, viewParams.bundle);

            if (!prefab) {
              /**缓存中不存在 重新加载 */
              // 获取预制件资源 并给套上DelegateComponent 组件
              (_crd && resLoader === void 0 ? (_reportPossibleCrUseOfresLoader({
                error: Error()
              }), resLoader) : resLoader).load(viewParams.bundle, viewParams.prefabPath, (err, res) => {
                if (err) {
                  this.loadingMap[viewParams.prefabPath] = false;
                  error(err);
                  return;
                } //this不存在了


                if (this.isValid == false) {
                  this.loadingMap[viewParams.prefabPath] = null;
                  return;
                } //不在添加历史的就不做处理


                if (!this.addHistoryRecode[viewParams.prefabPath] || !this.addHistoryRecode[viewParams.prefabPath][viewParams.uuid]) {
                  this.loadingMap[viewParams.prefabPath] = null;
                  return;
                }

                var childNode = instantiate(res);
                var comp = childNode.addComponent(_crd && DelegateComponent === void 0 ? (_reportPossibleCrUseOfDelegateComponent({
                  error: Error()
                }), DelegateComponent) : DelegateComponent);
                comp.viewParams = viewParams;
                this.createNode(childNode, viewParams);
              });
            } else {
              /**缓存中存在 使用缓存的 */
              //不在添加历史的就不做处理
              if (!this.addHistoryRecode[viewParams.prefabPath] || !this.addHistoryRecode[viewParams.prefabPath][viewParams.uuid]) {
                return;
              }

              var childNode = instantiate(prefab);
              var comp = childNode.addComponent(_crd && DelegateComponent === void 0 ? (_reportPossibleCrUseOfDelegateComponent({
                error: Error()
              }), DelegateComponent) : DelegateComponent);
              comp.viewParams = viewParams;
              this.createNode(childNode, viewParams);
            }
          } else {
            warn(this.name + ".load \u52A0\u8F7D\u5931\u8D25 viewParams.bundle = " + viewParams.bundle + " viewParams.prefabPath = " + (viewParams == null ? void 0 : viewParams.prefabPath));
          }
        }
        /**
         * 创建节点界面，可覆盖重写
         * @param nedAddNode 需要添加的节点 预制体需要由instantiate()而来 
         * @param viewParams 
         */


        createNode(nedAddNode, viewParams) {
          //this不存在了
          if (this.isValid == false) {
            this.loadingMap[viewParams.prefabPath] = null;
            return;
          } //不在添加历史的就不做处理


          if (!this.addHistoryRecode[viewParams.prefabPath] || !this.addHistoryRecode[viewParams.prefabPath][viewParams.uuid]) {
            this.loadingMap[viewParams.prefabPath] = null;
            return null;
          }

          var childNode = nedAddNode;
          var comp = childNode.getComponent(_crd && DelegateComponent === void 0 ? (_reportPossibleCrUseOfDelegateComponent({
            error: Error()
          }), DelegateComponent) : DelegateComponent);

          if (childNode) {
            //激活场景
            this.layer = Layers.Enum.UI_2D;
            this._activeInHierarchy = true;
            var self = this;
            setTimeout(() => {
              //不在添加历史的就不做处理
              if (!self.addHistoryRecode[viewParams.prefabPath] || !self.addHistoryRecode[viewParams.prefabPath][viewParams.uuid]) {
                self.loadingMap[viewParams.prefabPath] = null;
                return null;
              }

              if (self.isValid == false) {
                self.loadingMap[viewParams.prefabPath] = null;
                return null;
              }

              self.addChild(childNode);
              childNode["__UUID__"] = viewParams.uuid;
              viewParams.node = childNode;
              viewParams.valid = true;
              comp == null ? void 0 : comp.add(); //数据的存储格式

              if (!self.ui_nodes[viewParams.prefabPath]) {
                self.ui_nodes[viewParams.prefabPath] = new Map();
              }

              self.ui_nodes[viewParams.prefabPath].set(viewParams.uuid, viewParams);
              childNode.active = true;
              self.loadingMap[viewParams.prefabPath] = null;
            }, 0);
          } else {
            viewParams.node = null;
            viewParams.valid = false;
            this.loadingMap[viewParams.prefabPath] = null;
          }

          return childNode;
        }
        /**
         * 根据uuid删除界面上的节点，如果节点还在队列中也会被删除
         * 注意。删除节点请直接调用 `this.node.destroy()`或 `gui.delete(node)`;
         * @param uuid 
         */


        removeByUuid(uuid, isDestroy) {
          var [key, viewParams] = this.getViewParamsSizeByUuid(uuid);

          if (viewParams) {
            var childNode = viewParams.node;
            var isRemove = isValid(childNode);

            if (isDestroy) {
              this.ui_nodes[key].delete(viewParams.uuid);
            } else {
              if (isRemove == false) {
                this.ui_nodes[key].delete(viewParams.uuid);
              }
            }

            if (isRemove) {
              //防止已被删除的 重复删除
              if (this.addHistoryRecode[viewParams.prefabPath]) {
                this.addHistoryRecode[viewParams.prefabPath][viewParams.uuid] = false;
              }

              if (childNode && childNode != null && childNode.components) {
                var comp = childNode.getComponent(_crd && DelegateComponent === void 0 ? (_reportPossibleCrUseOfDelegateComponent({
                  error: Error()
                }), DelegateComponent) : DelegateComponent);
                comp.remove(isDestroy);
              }
            }
          }
        }
        /**
         * 根据预制件路径删除 如果该预制件存在多个也会一起删除。
         * @param prefabPath 
         */


        remove(prefabPath, isDestroy) {
          if (!prefabPath) {
            return;
          }

          var viewParamsMap = this.ui_nodes[prefabPath];

          if (viewParamsMap && viewParamsMap.size > 0) {
            viewParamsMap.forEach((viewParams, uuid) => {
              var childNode = viewParams.node;
              var isRemove = isValid(childNode);

              if (isDestroy) {
                this.ui_nodes[prefabPath].delete(uuid);
              } else {
                if (isRemove == false) {
                  this.ui_nodes[prefabPath].delete(uuid);
                }
              }

              if (isRemove) {
                //防止已被删除的 重复删除
                if (this.addHistoryRecode[viewParams.prefabPath]) {
                  this.addHistoryRecode[viewParams.prefabPath][viewParams.uuid] = false;
                }

                if (childNode && childNode != null && childNode.components) {
                  var comp = childNode.getComponent(_crd && DelegateComponent === void 0 ? (_reportPossibleCrUseOfDelegateComponent({
                    error: Error()
                  }), DelegateComponent) : DelegateComponent);
                  comp.remove(isDestroy);
                }

                viewParams.valid = false;
              }
            });
          } else {
            this.addHistoryRecode[prefabPath] = null;
          }
        }
        /**
         * 执行销毁,不发送通知
         */


        toDestoryNotNotify() {
          this.addHistoryRecode = {};
          this.loadingMap = {};
          this.key_num = 0;
          this.ui_nodes = {}; //[path] = [viewParams,viewParams]

          this.off(Node.EventType.CHILD_ADDED, this.onCallbackChildAdd, this);
          this.off(Node.EventType.CHILD_REMOVED, this.onCallbackChildRemove, this);
          this.off(Node.EventType.NODE_DESTROYED, this.onCallbackDestory, this);

          if (this.children && this.children.length > 0) {
            countDeletcNum = countDeletcNum + this.children.length;

            for (var i = this.children.length - 1; i >= 0; i--) {
              var childNode = this.children[i];

              if (childNode && childNode.isValid == true) {
                var delegateComponent = childNode.getComponent(_crd && DelegateComponent === void 0 ? (_reportPossibleCrUseOfDelegateComponent({
                  error: Error()
                }), DelegateComponent) : DelegateComponent);

                if (delegateComponent) {
                  delegateComponent.enabled = false;
                }

                childNode.destroy();
              }
            }
          }
          /** 遮罩层 */


          this._maskNode = null;
          /** 遮罩层 */

          this._buttonCompent = null;
          this.create_Mask("Mask");
          this.on(Node.EventType.CHILD_ADDED, this.onCallbackChildAdd, this);
          this.on(Node.EventType.CHILD_REMOVED, this.onCallbackChildRemove, this);
          this.on(Node.EventType.NODE_DESTROYED, this.onCallbackDestory, this);
        }
        /**
         * 根据uuid获取节点配置所在位置，如果节点不存在 则返回null 
         * @param uuid 
         */


        getViewParamsSizeByUuid(uuid) {
          var _key = null;
          var _viewParam = null;

          for (var _key2 in this.ui_nodes) {
            if (Object.prototype.hasOwnProperty.call(this.ui_nodes, _key2)) {
              var viewParamsMap = this.ui_nodes[_key2];

              if (viewParamsMap.has(uuid)) {
                _key = _key2;
                _viewParam = viewParamsMap.get(uuid);
              }
            }
          }

          return [_key, _viewParam];
        }
        /**
         * 判断预制体是否正在加载
         * @param prefabPath
         * @returns 
         */


        isLoading(prefabPath) {
          return this.loadingMap[prefabPath] == true;
        }
        /**
         * 获取当前层包含指定正则匹配的Node节点。
         * @param prefabPathReg 匹配预制件路径的正则表达式对象
         */


        find(prefabPathReg) {
          var arr = [];

          var children = this.__nodes();

          for (var comp of children) {
            if (prefabPathReg.test(comp.viewParams.prefabPath)) {
              arr.push(comp.node);
            }
          }

          return arr;
        }
        /**
         * 判断当前层是否包含 uuid或预制件路径对应的Node节点。
         * @param prefabPathOrUUID 预制件路径或者UUID
         */


        has(prefabPathOrUUID) {
          var children = this.__nodes();

          for (var comp of children) {
            if (comp.viewParams.uuid === prefabPathOrUUID || comp.viewParams.prefabPath === prefabPathOrUUID) {
              return true;
            }
          }

          return false;
        }
        /**当前层上的节点 */


        __nodes() {
          var result = [];
          var children = this.children;

          for (var i = 0; i < children.length; i++) {
            var _children$i;

            if (children[i] && (_children$i = children[i]) != null && _children$i.components) {
              var comp = children[i].getComponent(_crd && DelegateComponent === void 0 ? (_reportPossibleCrUseOfDelegateComponent({
                error: Error()
              }), DelegateComponent) : DelegateComponent);

              if (comp && comp.viewParams && comp.viewParams.valid && isValid(comp)) {
                result.push(comp);
              }
            }
          }

          return result;
        }
        /**UI层的回调 UICallbacks类型 */


        /** 层节点数量 */
        size() {
          return this.children.length;
        }
        /** 清除所有节点 */


        clear(isDestroy) {
          var _this = this;

          this.addHistoryRecode = {};

          var _loop = function _loop(_key3) {
            if (Object.prototype.hasOwnProperty.call(_this.ui_nodes, _key3)) {
              var viewParamsMap = _this.ui_nodes[_key3];
              viewParamsMap.forEach((viewParams, uuid) => {
                var remove = true;
                var childNode = viewParams.node;

                if (isDestroy) {
                  _this.ui_nodes[_key3].delete(viewParams.uuid);
                } else {
                  if (isValid(childNode) == false) {
                    _this.ui_nodes[_key3].delete(viewParams.uuid);

                    remove = false;
                  }
                }

                if (remove) {
                  //防止已被删除的 重复删除
                  if (childNode && childNode != null && childNode.components) {
                    var comp = childNode.getComponent(_crd && DelegateComponent === void 0 ? (_reportPossibleCrUseOfDelegateComponent({
                      error: Error()
                    }), DelegateComponent) : DelegateComponent);
                    comp.remove(isDestroy);
                  }

                  viewParams.valid = false;
                }
              });
            }
          };

          for (var _key3 in this.ui_nodes) {
            _loop(_key3);
          }

          this.ui_nodes = {};
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=315e1145b2aff5702173710654c3b71c59d205ed.js.map