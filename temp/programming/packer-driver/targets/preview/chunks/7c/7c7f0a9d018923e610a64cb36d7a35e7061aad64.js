System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Node, Sprite, _decorator, EventManager, BaseComponent, PlayerMgr, OPCode, FXJEvent, FXJRes, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, OprationItem;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfinf_SpineAniCreate(extras) {
    _reporterNs.report("inf_SpineAniCreate", "../../../../../framework/InterfaceDefines", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventManager(extras) {
    _reporterNs.report("EventManager", "../../../../../framework/manager/EventManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../../../../framework/vc/BaseComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerMgr(extras) {
    _reporterNs.report("PlayerMgr", "../../../cache/PlayerMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfOPCode(extras) {
    _reporterNs.report("OPCode", "../../../common/FXJConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFXJEvent(extras) {
    _reporterNs.report("FXJEvent", "../../../common/FXJEvent", _context.meta, extras);
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
      Sprite = _cc.Sprite;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      EventManager = _unresolved_2.EventManager;
    }, function (_unresolved_3) {
      BaseComponent = _unresolved_3.BaseComponent;
    }, function (_unresolved_4) {
      PlayerMgr = _unresolved_4.PlayerMgr;
    }, function (_unresolved_5) {
      OPCode = _unresolved_5.OPCode;
    }, function (_unresolved_6) {
      FXJEvent = _unresolved_6.FXJEvent;
    }, function (_unresolved_7) {
      FXJRes = _unresolved_7.FXJRes;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f0718o8AetNwJapEec5j7qp", "OprationItem", undefined);

      __checkObsolete__(['Node', 'Sprite', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Name = OprationItem
       * URL = db://assets/package/game/module/opmgr/src/OprationItem.ts
       * Time = Tue Aug 08 2023 10:37:09 GMT+0800 (中国标准时间)
       * Author = qwe757964
       *
       * Life: onLoad-->onInitModuleEvent-->onEnable->start->update->lateUpdate->onDisable->onDestroy
       * 
       */

      _export("OprationItem", OprationItem = (_dec = ccclass('OprationItem'), _dec2 = property(Node), _dec3 = property(Sprite), _dec(_class = (_class2 = class OprationItem extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "opration", _descriptor, this);

          _initializerDefineProperty(this, "player", _descriptor2, this);

          this.atlasCodeMap = new Map();
        }

        /** override 初始化模块事件 */
        onInitModuleEvent() {}

        onLoad() {// this.atlasCodeMap.set(OPCode.OPE_PASS, this.guoBtn);
        }

        updateAtlasCodeMap() {
          this.atlasCodeMap.set((_crd && OPCode === void 0 ? (_reportPossibleCrUseOfOPCode({
            error: Error()
          }), OPCode) : OPCode).OPE_PENG, "peng");
          this.atlasCodeMap.set((_crd && OPCode === void 0 ? (_reportPossibleCrUseOfOPCode({
            error: Error()
          }), OPCode) : OPCode).OPE_QIANG_PENG, "peng");
          this.atlasCodeMap.set((_crd && OPCode === void 0 ? (_reportPossibleCrUseOfOPCode({
            error: Error()
          }), OPCode) : OPCode).OPE_HU, "hu");
          this.atlasCodeMap.set((_crd && OPCode === void 0 ? (_reportPossibleCrUseOfOPCode({
            error: Error()
          }), OPCode) : OPCode).OPE_RIGHT_CHI, "chi");
          this.atlasCodeMap.set((_crd && OPCode === void 0 ? (_reportPossibleCrUseOfOPCode({
            error: Error()
          }), OPCode) : OPCode).OPE_MIDDLE_CHI, "chi");
          this.atlasCodeMap.set((_crd && OPCode === void 0 ? (_reportPossibleCrUseOfOPCode({
            error: Error()
          }), OPCode) : OPCode).OPE_LEFT_CHI, "chi");
          this.atlasCodeMap.set((_crd && OPCode === void 0 ? (_reportPossibleCrUseOfOPCode({
            error: Error()
          }), OPCode) : OPCode).OPE_ZI_MO, "zimo");
          this.atlasCodeMap.set((_crd && OPCode === void 0 ? (_reportPossibleCrUseOfOPCode({
            error: Error()
          }), OPCode) : OPCode).OPE_AN_GANG, "gang");
          this.atlasCodeMap.set((_crd && OPCode === void 0 ? (_reportPossibleCrUseOfOPCode({
            error: Error()
          }), OPCode) : OPCode).OPE_GANG, "gang");
          this.atlasCodeMap.set((_crd && OPCode === void 0 ? (_reportPossibleCrUseOfOPCode({
            error: Error()
          }), OPCode) : OPCode).OPE_BU_GANG, "gang");
        }

        getShowBtn(code) {
          for (var [opCode, opstr] of this.atlasCodeMap) {
            if (code == opCode) {
              return opstr;
            }
          }

          return null;
        }

        updateItemProps(userId, opCode) {
          var userInfo = (_crd && PlayerMgr === void 0 ? (_reportPossibleCrUseOfPlayerMgr({
            error: Error()
          }), PlayerMgr) : PlayerMgr).getInstance().findPlayerWithUserId(userId).gameUserInfo;
          var sexStr = "";

          if (userInfo.sex == 2) {
            sexStr = "xiaoya";
          } else {
            sexStr = "xiaobo";
          }

          var opStr = this.getShowBtn(opCode);

          if (!opStr) {
            this.node.active = false;
            return;
          }

          this.node.active = true;
          var param = {
            resConf: (_crd && FXJRes === void 0 ? (_reportPossibleCrUseOfFXJRes({
              error: Error()
            }), FXJRes) : FXJRes).Spine_Hu,
            aniName: "px_" + opStr,
            parentNode: this.opration,
            trackIndex: 0,
            isLoop: false
          };
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && FXJEvent === void 0 ? (_reportPossibleCrUseOfFXJEvent({
            error: Error()
          }), FXJEvent) : FXJEvent).SYS_ANI_PLAY, param);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "opration", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "player", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=7c7f0a9d018923e610a64cb36d7a35e7061aad64.js.map