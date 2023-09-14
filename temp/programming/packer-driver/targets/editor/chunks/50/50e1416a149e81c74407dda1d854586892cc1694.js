System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Node, _decorator, SpriteLoad, Utils, BaseComponent, FXJRes, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, NodeHead;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfSpriteLoad(extras) {
    _reporterNs.report("SpriteLoad", "../../../../../framework/gui/sprite/SpriteLoad", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUtils(extras) {
    _reporterNs.report("Utils", "../../../../../framework/Utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../../../../framework/vc/BaseComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFXJRes(extras) {
    _reporterNs.report("FXJRes", "../../../common/FXJRes", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCommon(extras) {
    _reporterNs.report("Common", "../../../common/idl/Common", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Node = _cc.Node;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      SpriteLoad = _unresolved_2.default;
    }, function (_unresolved_3) {
      Utils = _unresolved_3.Utils;
    }, function (_unresolved_4) {
      BaseComponent = _unresolved_4.BaseComponent;
    }, function (_unresolved_5) {
      FXJRes = _unresolved_5.FXJRes;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "88f7e8I6bZNgo9GuHr3Nkc0", "NodeHead", undefined);

      __checkObsolete__(['Node', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Name = NodeHead
       * URL = db://assets/package/game/module/settle/src/NodeHead.ts
       * Time = Wed Aug 09 2023 16:24:25 GMT+0800 (中国标准时间)
       * Author = qwe757964
       *
       * Life: onLoad-->onInitModuleEvent-->onEnable->start->update->lateUpdate->onDisable->onDestroy
       * 
       */

      _export("NodeHead", NodeHead = (_dec = ccclass('NodeHead'), _dec2 = property({
        tooltip: "玩家信息背景",
        type: Node
      }), _dec3 = property({
        tooltip: "玩家信息背景",
        type: Node
      }), _dec(_class = (_class2 = class NodeHead extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "headNode", _descriptor, this);

          _initializerDefineProperty(this, "headBoxNode", _descriptor2, this);
        }

        /** override 初始化模块事件 */
        onInitModuleEvent() {}

        onLoad() {}

        //更新用户头像
        updateUserHead(playerInfo) {
          let spriteLoad = this.headNode.getComponent(_crd && SpriteLoad === void 0 ? (_reportPossibleCrUseOfSpriteLoad({
            error: Error()
          }), SpriteLoad) : SpriteLoad);
          let headArray = {
            s: playerInfo.avatar_s,
            m: playerInfo.avatar_m,
            b: playerInfo.avatar_b
          };

          if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).string_isHttp(headArray.s)) {
            spriteLoad.setRemoteUrl(headArray.s, () => {
              if (playerInfo.sex == 2) {
                spriteLoad.setLocalLoad((_crd && FXJRes === void 0 ? (_reportPossibleCrUseOfFXJRes({
                  error: Error()
                }), FXJRes) : FXJRes).Picture_UserBigHead_girl.bundle, (_crd && FXJRes === void 0 ? (_reportPossibleCrUseOfFXJRes({
                  error: Error()
                }), FXJRes) : FXJRes).Picture_UserBigHead_girl.path);
              } else {
                spriteLoad.setLocalLoad((_crd && FXJRes === void 0 ? (_reportPossibleCrUseOfFXJRes({
                  error: Error()
                }), FXJRes) : FXJRes).Picture_UserBigHead_boy.bundle, (_crd && FXJRes === void 0 ? (_reportPossibleCrUseOfFXJRes({
                  error: Error()
                }), FXJRes) : FXJRes).Picture_UserBigHead_boy.path);
              }
            });
          } else {
            if (playerInfo.sex == 2) {
              spriteLoad.setLocalLoad((_crd && FXJRes === void 0 ? (_reportPossibleCrUseOfFXJRes({
                error: Error()
              }), FXJRes) : FXJRes).Picture_UserBigHead_girl.bundle, (_crd && FXJRes === void 0 ? (_reportPossibleCrUseOfFXJRes({
                error: Error()
              }), FXJRes) : FXJRes).Picture_UserBigHead_girl.path);
            } else {
              spriteLoad.setLocalLoad((_crd && FXJRes === void 0 ? (_reportPossibleCrUseOfFXJRes({
                error: Error()
              }), FXJRes) : FXJRes).Picture_UserBigHead_boy.bundle, (_crd && FXJRes === void 0 ? (_reportPossibleCrUseOfFXJRes({
                error: Error()
              }), FXJRes) : FXJRes).Picture_UserBigHead_boy.path);
            }
          }
        } //更新用户头像框


        updateUserHeadBox(playerInfo) {
          let spriteLoad = this.headBoxNode.getComponent(_crd && SpriteLoad === void 0 ? (_reportPossibleCrUseOfSpriteLoad({
            error: Error()
          }), SpriteLoad) : SpriteLoad);

          if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).string_isEmpty(playerInfo.headBox) == false) {
            spriteLoad.setRemoteUrl(playerInfo.headBox);
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "headNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "headBoxNode", [_dec3], {
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
//# sourceMappingURL=50e1416a149e81c74407dda1d854586892cc1694.js.map