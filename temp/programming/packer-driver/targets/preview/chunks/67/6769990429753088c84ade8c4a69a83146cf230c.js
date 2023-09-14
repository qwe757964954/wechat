System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Layout, Node, _decorator, EventManager, Utils, BaseComponent, OperationMgr, RoomMgr, GameStatus, OPCode, GameEvent, Card, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _crd, ccclass, property, OpInfo;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfEventManager(extras) {
    _reporterNs.report("EventManager", "../../../../../framework/manager/EventManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUtils(extras) {
    _reporterNs.report("Utils", "../../../../../framework/Utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../../../../framework/vc/BaseComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfOperationMgr(extras) {
    _reporterNs.report("OperationMgr", "../../../cache/OperationMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoomMgr(extras) {
    _reporterNs.report("RoomMgr", "../../../cache/RoomMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameStatus(extras) {
    _reporterNs.report("GameStatus", "../../../common/FXJConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfOPCode(extras) {
    _reporterNs.report("OPCode", "../../../common/FXJConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameEvent(extras) {
    _reporterNs.report("GameEvent", "../../../common/GameEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCommon(extras) {
    _reporterNs.report("Common", "../../../common/idl/Common", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGame(extras) {
    _reporterNs.report("Game", "../../../common/idl/Game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCard(extras) {
    _reporterNs.report("Card", "../../card/src/Card", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Layout = _cc.Layout;
      Node = _cc.Node;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      EventManager = _unresolved_2.EventManager;
    }, function (_unresolved_3) {
      Utils = _unresolved_3.Utils;
    }, function (_unresolved_4) {
      BaseComponent = _unresolved_4.BaseComponent;
    }, function (_unresolved_5) {
      OperationMgr = _unresolved_5.OperationMgr;
    }, function (_unresolved_6) {
      RoomMgr = _unresolved_6.RoomMgr;
    }, function (_unresolved_7) {
      GameStatus = _unresolved_7.GameStatus;
      OPCode = _unresolved_7.OPCode;
    }, function (_unresolved_8) {
      GameEvent = _unresolved_8.GameEvent;
    }, function (_unresolved_9) {
      Card = _unresolved_9.Card;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "631f7TN/sNLS4DSstZCbtvq", "OpInfo", undefined);

      __checkObsolete__(['Layout', 'Node', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator); // import { XComponent } from 'bos/framework/component/XComponent';
      // import { OpCode } from 'game/mahjong/config/OpCode';
      // import { MahjongRoom } from 'game/mahjong/Room';
      // import { GamePlayer } from 'game/mahjong/model/GamePlayer';
      // import { Audio, Log } from 'bos/exports';
      // import { Event } from 'game/mahjong/config/Event';
      // import { ExtendTable, OperateInfo, OperateOption } from 'game/mahjong/idl/tss/mahjong/extendtable';
      // import { AudioUtils } from 'game/mahjong/AudioUtils';
      // import { AudioConfig } from 'game/mahjong/config/AudioConfig';

      _export("OpInfo", OpInfo = (_dec = ccclass('OpInfo'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(Layout), _dec9 = property(Layout), _dec10 = property(Layout), _dec(_class = (_class2 = class OpInfo extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "opBtns", _descriptor, this);

          _initializerDefineProperty(this, "guoBtn", _descriptor2, this);

          _initializerDefineProperty(this, "huBtn", _descriptor3, this);

          _initializerDefineProperty(this, "gangBtn", _descriptor4, this);

          _initializerDefineProperty(this, "pengBtn", _descriptor5, this);

          _initializerDefineProperty(this, "chiBtn", _descriptor6, this);

          _initializerDefineProperty(this, "huLayout", _descriptor7, this);

          _initializerDefineProperty(this, "zimoLayout", _descriptor8, this);

          _initializerDefineProperty(this, "ganghuaLayout", _descriptor9, this);

          this.btnCodeMap = new Map();
          this._handlerTimeUpdate = null;

          this.getShowBtn = function (code) {
            for (var [opCode, btn] of this.btnCodeMap) {
              if (code == opCode) {
                return btn;
              }
            }

            return null;
          };
        }

        onInitModuleEvent() {}

        onLoad() {
          this.updateCodeMap();
        }

        updateCodeMap() {
          this.btnCodeMap.set((_crd && OPCode === void 0 ? (_reportPossibleCrUseOfOPCode({
            error: Error()
          }), OPCode) : OPCode).OPE_PASS, this.guoBtn);
          this.btnCodeMap.set((_crd && OPCode === void 0 ? (_reportPossibleCrUseOfOPCode({
            error: Error()
          }), OPCode) : OPCode).OPE_RIGHT_CHI, this.chiBtn);
          this.btnCodeMap.set((_crd && OPCode === void 0 ? (_reportPossibleCrUseOfOPCode({
            error: Error()
          }), OPCode) : OPCode).OPE_MIDDLE_CHI, this.chiBtn);
          this.btnCodeMap.set((_crd && OPCode === void 0 ? (_reportPossibleCrUseOfOPCode({
            error: Error()
          }), OPCode) : OPCode).OPE_LEFT_CHI, this.chiBtn);
          this.btnCodeMap.set((_crd && OPCode === void 0 ? (_reportPossibleCrUseOfOPCode({
            error: Error()
          }), OPCode) : OPCode).OPE_PENG, this.pengBtn);
          this.btnCodeMap.set((_crd && OPCode === void 0 ? (_reportPossibleCrUseOfOPCode({
            error: Error()
          }), OPCode) : OPCode).OPE_QIANG_PENG, this.pengBtn);
          this.btnCodeMap.set((_crd && OPCode === void 0 ? (_reportPossibleCrUseOfOPCode({
            error: Error()
          }), OPCode) : OPCode).OPE_HU, this.huLayout);
          this.btnCodeMap.set((_crd && OPCode === void 0 ? (_reportPossibleCrUseOfOPCode({
            error: Error()
          }), OPCode) : OPCode).OPE_ZI_MO, this.zimoLayout);
          this.btnCodeMap.set((_crd && OPCode === void 0 ? (_reportPossibleCrUseOfOPCode({
            error: Error()
          }), OPCode) : OPCode).OPE_AN_GANG, this.gangBtn);
          this.btnCodeMap.set((_crd && OPCode === void 0 ? (_reportPossibleCrUseOfOPCode({
            error: Error()
          }), OPCode) : OPCode).OPE_GANG, this.gangBtn);
          this.btnCodeMap.set((_crd && OPCode === void 0 ? (_reportPossibleCrUseOfOPCode({
            error: Error()
          }), OPCode) : OPCode).OPE_BU_GANG, this.gangBtn);
        }
        /** 开始更新时间 */


        startOperationTime() {
          this.stopSchedulerOnce(this._handlerTimeUpdate);
          this._handlerTimeUpdate = null;
          var timeOut = (_crd && RoomMgr === void 0 ? (_reportPossibleCrUseOfRoomMgr({
            error: Error()
          }), RoomMgr) : RoomMgr).getInstance().getTimeOut((_crd && GameStatus === void 0 ? (_reportPossibleCrUseOfGameStatus({
            error: Error()
          }), GameStatus) : GameStatus).OPERATION);
          this._handlerTimeUpdate = this.addSchedulerOnce(timeOut, (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).handler(this, this.resetView));
        } //点击操作,发送操作code  碰/杠/胡/过


        opClick(opInfo) {
          var req = {
            opCard: (_crd && OperationMgr === void 0 ? (_reportPossibleCrUseOfOperationMgr({
              error: Error()
            }), OperationMgr) : OperationMgr).getInstance().getPassNumber(),
            opCode: opInfo.opCode,
            opCards: (_crd && OperationMgr === void 0 ? (_reportPossibleCrUseOfOperationMgr({
              error: Error()
            }), OperationMgr) : OperationMgr).getInstance().getOprationListNumber(opInfo.opCode),
            seatId: (_crd && OperationMgr === void 0 ? (_reportPossibleCrUseOfOperationMgr({
              error: Error()
            }), OperationMgr) : OperationMgr).getInstance().seatId,
            userId: (_crd && OperationMgr === void 0 ? (_reportPossibleCrUseOfOperationMgr({
              error: Error()
            }), OperationMgr) : OperationMgr).getInstance().userId
          };
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).SEND_PLAYER_OPERATION, req);
          (_crd && OperationMgr === void 0 ? (_reportPossibleCrUseOfOperationMgr({
            error: Error()
          }), OperationMgr) : OperationMgr).getInstance().myOpCode = opInfo.opCode;
          this.resetView();
        }

        updateOpration(resp) {
          this.resetView(); //抓牌

          if (resp.opGroups.length === 1) {
            return;
          }

          console.log("updateOpration______________", resp.opGroups);
          resp.opGroups.forEach(opInfo => {
            var btn = this.getShowBtn(opInfo.opCode);
            console.log("==this.btnCodeMap==", this.btnCodeMap, opInfo, btn);

            if (btn) {
              btn.active = true;
              console.log("==btn==", btn.active);
            }

            if (btn instanceof Layout) {
              btn.node.active = true;
              var card = btn.node.getChildByName("Card").getComponent(_crd && Card === void 0 ? (_reportPossibleCrUseOfCard({
                error: Error()
              }), Card) : Card);
              card.setCardByte((_crd && OperationMgr === void 0 ? (_reportPossibleCrUseOfOperationMgr({
                error: Error()
              }), OperationMgr) : OperationMgr).getInstance().getPassNumber());
              btn = btn.node.getChildByName("hu");
            }

            if (btn) {
              btn.off(Node.EventType.TOUCH_END);
              btn.on(Node.EventType.TOUCH_END, () => {
                this.opClick(opInfo);
              }, this);
            }
          });
          this.startOperationTime();
        }

        resetView() {
          this.guoBtn.active = false;
          this.huLayout.node.active = false;
          this.zimoLayout.node.active = false;
          this.ganghuaLayout.node.active = false;
          this.gangBtn.active = false;
          this.pengBtn.active = false;
          this.chiBtn.active = false;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "opBtns", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "guoBtn", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "huBtn", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "gangBtn", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "pengBtn", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "chiBtn", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "huLayout", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "zimoLayout", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "ganghuaLayout", [_dec10], {
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
//# sourceMappingURL=6769990429753088c84ade8c4a69a83146cf230c.js.map