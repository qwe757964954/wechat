System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, MeshRenderer, Node, Texture2D, Vec3, _decorator, instantiate, Utils, resLoader, BaseComponent, FXJRes, CardUtil, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, NodeCardCtr;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfUtils(extras) {
    _reporterNs.report("Utils", "../../../framework/Utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfresLoader(extras) {
    _reporterNs.report("resLoader", "../../../framework/loader/ResLoader", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../../framework/vc/BaseComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFXJRes(extras) {
    _reporterNs.report("FXJRes", "../common/FXJRes", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCardUtil(extras) {
    _reporterNs.report("CardUtil", "../util/CardUtil", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      MeshRenderer = _cc.MeshRenderer;
      Node = _cc.Node;
      Texture2D = _cc.Texture2D;
      Vec3 = _cc.Vec3;
      _decorator = _cc._decorator;
      instantiate = _cc.instantiate;
    }, function (_unresolved_2) {
      Utils = _unresolved_2.Utils;
    }, function (_unresolved_3) {
      resLoader = _unresolved_3.resLoader;
    }, function (_unresolved_4) {
      BaseComponent = _unresolved_4.BaseComponent;
    }, function (_unresolved_5) {
      FXJRes = _unresolved_5.FXJRes;
    }, function (_unresolved_6) {
      CardUtil = _unresolved_6.CardUtil;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "04179w8t55OcJMp9MIkyYwz", "NodeCardCtr", undefined);

      __checkObsolete__(['MeshRenderer', 'Node', 'Texture2D', 'Vec3', '_decorator', 'instantiate']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Name = NodeCardCtr
       * URL = db://assets/package/game/scripts/NodeCardCtr.ts
       * Time = Tue Aug 08 2023 15:30:03 GMT+0800 (中国标准时间)
       * Author = harvyson
       *
       * Life: onLoad-->onInitModuleEvent-->onEnable->start->update->lateUpdate->onDisable->onDestroy
       * 
       */

      _export("NodeCardCtr", NodeCardCtr = (_dec = ccclass('NodeCardCtr'), _dec2 = property({
        tooltip: "手牌模型节点",
        type: Node
      }), _dec3 = property({
        tooltip: "手牌标签模板节点",
        type: Node
      }), _dec(_class = (_class2 = class NodeCardCtr extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "nodeCardMesh", _descriptor, this);

          _initializerDefineProperty(this, "nodeCardTabTemplate", _descriptor2, this);

          this.nodeCardTab = null;
          this.byte = 0;
        }

        /** override 初始化模块事件 */
        onInitModuleEvent() {}

        onLoad() {}
        /** 设置手牌数值 */


        setCardByte(byte) {
          this.byte = byte;
          let cardStr = (_crd && CardUtil === void 0 ? (_reportPossibleCrUseOfCardUtil({
            error: Error()
          }), CardUtil) : CardUtil).getCardValue(byte);
          let path = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).string_format((_crd && FXJRes === void 0 ? (_reportPossibleCrUseOfFXJRes({
            error: Error()
          }), FXJRes) : FXJRes).Picture_Game_Card.path, cardStr); // console.log("NodeCardCtr", "setCardByte", "path", path)

          (_crd && resLoader === void 0 ? (_reportPossibleCrUseOfresLoader({
            error: Error()
          }), resLoader) : resLoader).load((_crd && FXJRes === void 0 ? (_reportPossibleCrUseOfFXJRes({
            error: Error()
          }), FXJRes) : FXJRes).Picture_Game_Card.bundle, path, Texture2D, (err, tex) => {
            if (err) {
              console.log("NodeCardCtr", "setCardByte", err);
              return;
            }

            if (tex) {
              this.nodeCardMesh.getComponent(MeshRenderer).material.setProperty('albedoMap', tex);
            }
          });

          if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).isNotNull(this.nodeCardTabTemplate)) {
            let isLaizi = true;

            if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).isNotNull(this.nodeCardTab)) {
              this.nodeCardTab.active = isLaizi;
            } else {
              if (isLaizi) {
                this.nodeCardTab = instantiate(this.nodeCardTabTemplate);
                this.node.addChild(this.nodeCardTab);
                this.nodeCardTab.active = true;
              }
            }
          }
        }
        /** 设置是否变黑 */


        setBlack(vlaue) {
          if (vlaue) {
            this.nodeCardMesh.getComponent(MeshRenderer).material.setProperty('albedo', new Vec3(0.2, 0.2, 0.2));
          } else {
            this.nodeCardMesh.getComponent(MeshRenderer).material.setProperty('albedo', new Vec3(1, 1, 1));
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "nodeCardMesh", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "nodeCardTabTemplate", [_dec3], {
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
//# sourceMappingURL=96e4fb25a2bf32cc9a626081789e2cb35f1e5317.js.map