System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Layout, _decorator, Utils, BaseComponent, RoomMgr, OPCode, GameEvent, CardUtil, OprationItem, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, OprationMgr;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfUtils(extras) {
    _reporterNs.report("Utils", "../../../../../framework/Utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../../../../framework/vc/BaseComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoomMgr(extras) {
    _reporterNs.report("RoomMgr", "../../../cache/RoomMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfOPCode(extras) {
    _reporterNs.report("OPCode", "../../../common/FXJConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameEvent(extras) {
    _reporterNs.report("GameEvent", "../../../common/GameEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGame(extras) {
    _reporterNs.report("Game", "../../../common/idl/Game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCardUtil(extras) {
    _reporterNs.report("CardUtil", "../../../util/CardUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCoordinate(extras) {
    _reporterNs.report("Coordinate", "../../match/src/Match", _context.meta, extras);
  }

  function _reportPossibleCrUseOfOprationItem(extras) {
    _reporterNs.report("OprationItem", "./OprationItem", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Layout = _cc.Layout;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      Utils = _unresolved_2.Utils;
    }, function (_unresolved_3) {
      BaseComponent = _unresolved_3.BaseComponent;
    }, function (_unresolved_4) {
      RoomMgr = _unresolved_4.RoomMgr;
    }, function (_unresolved_5) {
      OPCode = _unresolved_5.OPCode;
    }, function (_unresolved_6) {
      GameEvent = _unresolved_6.GameEvent;
    }, function (_unresolved_7) {
      CardUtil = _unresolved_7.CardUtil;
    }, function (_unresolved_8) {
      OprationItem = _unresolved_8.OprationItem;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "15743r9b2lLybTVGo3oqRbR", "OprationMgr", undefined);

      __checkObsolete__(['Layout', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Name = OprationMgr
       * URL = db://assets/package/game/module/opmgr/src/OprationMgr.ts
       * Time = Tue Aug 08 2023 10:06:20 GMT+0800 (中国标准时间)
       * Author = qwe757964
       *
       * Life: onLoad-->onInitModuleEvent-->onEnable->start->update->lateUpdate->onDisable->onDestroy
       * 
       */

      _export("OprationMgr", OprationMgr = (_dec = ccclass('OprationMgr'), _dec2 = property(Layout), _dec(_class = (_class2 = class OprationMgr extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "opmgrItem", _descriptor, this);

          this._handlerTimeUpdate = null;
          this.coordinateList = [];
        }

        /** override 初始化模块事件 */
        onInitModuleEvent() {
          this.addModelListener((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).UPDATE_USER_OPERATION_RESULT, this.updateUserOperationResult);
        }

        onLoad() {
          this.opmgrItem.node.active = false;
          this.coordinateList = [{
            x: 21.979,
            y: -132.443
          }, //下
          {
            x: 352.788,
            y: 85.391
          }, //右
          {
            x: 22.299,
            y: 256.069
          }, // 上
          {
            x: -344.469,
            y: 84.486
          }]; //左

          let itemScript = this.opmgrItem.getComponent(_crd && OprationItem === void 0 ? (_reportPossibleCrUseOfOprationItem({
            error: Error()
          }), OprationItem) : OprationItem);
          itemScript.updateAtlasCodeMap();
        }

        updateUserOperationResult(event = null, resp) {
          if (resp.opCode === (_crd && OPCode === void 0 ? (_reportPossibleCrUseOfOPCode({
            error: Error()
          }), OPCode) : OPCode).OPE_OUT_CARD) {
            return;
          }

          const relativeSeatId = (_crd && CardUtil === void 0 ? (_reportPossibleCrUseOfCardUtil({
            error: Error()
          }), CardUtil) : CardUtil).calculatePlayerSeat((_crd && RoomMgr === void 0 ? (_reportPossibleCrUseOfRoomMgr({
            error: Error()
          }), RoomMgr) : RoomMgr).getInstance().mySeatId, resp.seatId);
          const coordinate = this.coordinateList[relativeSeatId];
          this.opmgrItem.node.setPosition(coordinate.x, coordinate.y);
          this.opmgrItem.node.active = true;
          let itemScript = this.opmgrItem.getComponent(_crd && OprationItem === void 0 ? (_reportPossibleCrUseOfOprationItem({
            error: Error()
          }), OprationItem) : OprationItem);
          itemScript.updateItemProps(resp.userId, resp.opCode);
          this.startOperationTime();
        }
        /** 开始更新时间 */


        startOperationTime() {
          this.stopSchedulerOnce(this._handlerTimeUpdate);
          this._handlerTimeUpdate = null;
          let timeOut = 2;
          this._handlerTimeUpdate = this.addSchedulerOnce(timeOut, (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).handler(this, this.resetView));
        }

        resetView() {
          this.opmgrItem.node.active = false;
        }

        start() {}

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "opmgrItem", [_dec2], {
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
//# sourceMappingURL=6539a894766c9c5ce49fffae45322f5e8ae014ea.js.map