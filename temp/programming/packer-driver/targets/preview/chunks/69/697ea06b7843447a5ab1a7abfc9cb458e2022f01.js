System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, instantiate, Layout, Node, Prefab, _decorator, EventManager, Utils, BaseComponent, OperationMgr, RoomMgr, GameStatus, OPCode, FXJEvent, FXJRes, GameEvent, Card, Carditem, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _crd, ccclass, property, OpInfo;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfinf_SpineAniCreate(extras) {
    _reporterNs.report("inf_SpineAniCreate", "../../../../../framework/InterfaceDefines", _context.meta, extras);
  }

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

  function _reportPossibleCrUseOfFXJEvent(extras) {
    _reporterNs.report("FXJEvent", "../../../common/FXJEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFXJRes(extras) {
    _reporterNs.report("FXJRes", "../../../common/FXJRes", _context.meta, extras);
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

  function _reportPossibleCrUseOfCarditem(extras) {
    _reporterNs.report("Carditem", "./Carditem", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      instantiate = _cc.instantiate;
      Layout = _cc.Layout;
      Node = _cc.Node;
      Prefab = _cc.Prefab;
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
      FXJEvent = _unresolved_8.FXJEvent;
    }, function (_unresolved_9) {
      FXJRes = _unresolved_9.FXJRes;
    }, function (_unresolved_10) {
      GameEvent = _unresolved_10.GameEvent;
    }, function (_unresolved_11) {
      Card = _unresolved_11.Card;
    }, function (_unresolved_12) {
      Carditem = _unresolved_12.Carditem;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "631f7TN/sNLS4DSstZCbtvq", "OpInfo", undefined);

      __checkObsolete__(['instantiate', 'Layout', 'Node', 'Prefab', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("OpInfo", OpInfo = (_dec = ccclass('OpInfo'), _dec2 = property(Node), _dec3 = property(Layout), _dec4 = property(Layout), _dec5 = property(Layout), _dec6 = property(Layout), _dec7 = property(Layout), _dec8 = property(Layout), _dec9 = property(Layout), _dec10 = property({
        tooltip: "手牌预制体",
        type: Prefab
      }), _dec(_class = (_class2 = class OpInfo extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "opBtns", _descriptor, this);

          _initializerDefineProperty(this, "guoLayout", _descriptor2, this);

          _initializerDefineProperty(this, "huLayout", _descriptor3, this);

          _initializerDefineProperty(this, "gangLayout", _descriptor4, this);

          _initializerDefineProperty(this, "pengLayout", _descriptor5, this);

          _initializerDefineProperty(this, "chiLayout", _descriptor6, this);

          _initializerDefineProperty(this, "zimoLayout", _descriptor7, this);

          _initializerDefineProperty(this, "ganghuaLayout", _descriptor8, this);

          _initializerDefineProperty(this, "CardItemPrefab", _descriptor9, this);

          this.btnCodeMap = new Map();
          this.btnSkelMap = new Map();
          this.opTypeArr = [];
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

        onInitModuleEvent() {
          this.addModelListener((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).CLOSE_OPRATION_INFO, this.closeOpInfo);
        }

        onLoad() {
          this.updateCodeMap();
        }

        updateCodeMap() {
          this.btnCodeMap.set((_crd && OPCode === void 0 ? (_reportPossibleCrUseOfOPCode({
            error: Error()
          }), OPCode) : OPCode).OPE_PASS, this.guoLayout);
          this.btnCodeMap.set((_crd && OPCode === void 0 ? (_reportPossibleCrUseOfOPCode({
            error: Error()
          }), OPCode) : OPCode).OPE_RIGHT_CHI, this.chiLayout);
          this.btnCodeMap.set((_crd && OPCode === void 0 ? (_reportPossibleCrUseOfOPCode({
            error: Error()
          }), OPCode) : OPCode).OPE_MIDDLE_CHI, this.chiLayout);
          this.btnCodeMap.set((_crd && OPCode === void 0 ? (_reportPossibleCrUseOfOPCode({
            error: Error()
          }), OPCode) : OPCode).OPE_LEFT_CHI, this.chiLayout);
          this.btnCodeMap.set((_crd && OPCode === void 0 ? (_reportPossibleCrUseOfOPCode({
            error: Error()
          }), OPCode) : OPCode).OPE_PENG, this.pengLayout);
          this.btnCodeMap.set((_crd && OPCode === void 0 ? (_reportPossibleCrUseOfOPCode({
            error: Error()
          }), OPCode) : OPCode).OPE_QIANG_PENG, this.pengLayout);
          this.btnCodeMap.set((_crd && OPCode === void 0 ? (_reportPossibleCrUseOfOPCode({
            error: Error()
          }), OPCode) : OPCode).OPE_HU, this.huLayout);
          this.btnCodeMap.set((_crd && OPCode === void 0 ? (_reportPossibleCrUseOfOPCode({
            error: Error()
          }), OPCode) : OPCode).OPE_ZI_MO, this.zimoLayout);
          this.btnCodeMap.set((_crd && OPCode === void 0 ? (_reportPossibleCrUseOfOPCode({
            error: Error()
          }), OPCode) : OPCode).OPE_AN_GANG, this.gangLayout);
          this.btnCodeMap.set((_crd && OPCode === void 0 ? (_reportPossibleCrUseOfOPCode({
            error: Error()
          }), OPCode) : OPCode).OPE_GANG, this.gangLayout);
          this.btnCodeMap.set((_crd && OPCode === void 0 ? (_reportPossibleCrUseOfOPCode({
            error: Error()
          }), OPCode) : OPCode).OPE_BU_GANG, this.gangLayout);
          this.btnSkelMap.set((_crd && OPCode === void 0 ? (_reportPossibleCrUseOfOPCode({
            error: Error()
          }), OPCode) : OPCode).OPE_PASS, "icon_guo");
          this.btnSkelMap.set((_crd && OPCode === void 0 ? (_reportPossibleCrUseOfOPCode({
            error: Error()
          }), OPCode) : OPCode).OPE_RIGHT_CHI, "icon_chi");
          this.btnSkelMap.set((_crd && OPCode === void 0 ? (_reportPossibleCrUseOfOPCode({
            error: Error()
          }), OPCode) : OPCode).OPE_MIDDLE_CHI, "icon_chi");
          this.btnSkelMap.set((_crd && OPCode === void 0 ? (_reportPossibleCrUseOfOPCode({
            error: Error()
          }), OPCode) : OPCode).OPE_LEFT_CHI, "icon_chi");
          this.btnSkelMap.set((_crd && OPCode === void 0 ? (_reportPossibleCrUseOfOPCode({
            error: Error()
          }), OPCode) : OPCode).OPE_PENG, "icon_peng");
          this.btnSkelMap.set((_crd && OPCode === void 0 ? (_reportPossibleCrUseOfOPCode({
            error: Error()
          }), OPCode) : OPCode).OPE_QIANG_PENG, "icon_peng");
          this.btnSkelMap.set((_crd && OPCode === void 0 ? (_reportPossibleCrUseOfOPCode({
            error: Error()
          }), OPCode) : OPCode).OPE_HU, "icon_hu");
          this.btnSkelMap.set((_crd && OPCode === void 0 ? (_reportPossibleCrUseOfOPCode({
            error: Error()
          }), OPCode) : OPCode).OPE_ZI_MO, "icon_zimo");
          this.btnSkelMap.set((_crd && OPCode === void 0 ? (_reportPossibleCrUseOfOPCode({
            error: Error()
          }), OPCode) : OPCode).OPE_AN_GANG, "icon_gang");
          this.btnSkelMap.set((_crd && OPCode === void 0 ? (_reportPossibleCrUseOfOPCode({
            error: Error()
          }), OPCode) : OPCode).OPE_GANG, "icon_gang");
          this.btnSkelMap.set((_crd && OPCode === void 0 ? (_reportPossibleCrUseOfOPCode({
            error: Error()
          }), OPCode) : OPCode).OPE_BU_GANG, "icon_gang");
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
            }), OperationMgr) : OperationMgr).getInstance().getOprationListNumber(opInfo.opCode, 0),
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

        closeOpInfo() {
          this.resetView();
        }

        updateOpration(resp) {
          this.resetView(); //抓牌

          if (resp.opGroups.length === 1) {
            return;
          }

          console.log("updateOpration______________", resp.opGroups);
          this.opTypeArr = [];
          resp.opGroups.forEach(opInfo => {
            var layout = this.getShowBtn(opInfo.opCode);

            if (layout) {
              layout.node.active = true;
              var info = {
                code: opInfo.opCode,
                node: layout
              };
              this.opTypeArr.push(info);
            }

            if (layout instanceof Layout) {
              layout.node.active = true;
              var card = layout.node.getChildByName("Card");

              if (card) {
                card.getComponent(_crd && Card === void 0 ? (_reportPossibleCrUseOfCard({
                  error: Error()
                }), Card) : Card).setCardByte((_crd && OperationMgr === void 0 ? (_reportPossibleCrUseOfOperationMgr({
                  error: Error()
                }), OperationMgr) : OperationMgr).getInstance().getPassNumber());
              }

              var opNode = layout.node.getChildByName("sk");
              this.changeSkin(opInfo.opCode, opNode);
              opNode.off(Node.EventType.TOUCH_END);
              opNode.on(Node.EventType.TOUCH_END, () => {
                this.opClick(opInfo);
              }, this);
            }
          });
          this.findOpTypesWithSameNodeAndCode(this.opTypeArr);
          this.startOperationTime();
        }

        changeSkin(opcode, skNode) {
          var param = {
            resConf: (_crd && FXJRes === void 0 ? (_reportPossibleCrUseOfFXJRes({
              error: Error()
            }), FXJRes) : FXJRes).Spine_op,
            aniName: this.btnSkelMap.get(opcode),
            parentNode: skNode,
            trackIndex: 0,
            isLoop: true,
            callStartFunc: () => {}
          };
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && FXJEvent === void 0 ? (_reportPossibleCrUseOfFXJEvent({
            error: Error()
          }), FXJEvent) : FXJEvent).SYS_ANI_PLAY, param);
        }

        findOpTypesWithSameNodeAndCode(opTypes) {
          var opTypesMap = new Map(); // 遍历 opTypes 数组，将具有相同 node 和 code 的 OpType 放入映射中

          for (var opType of opTypes) {
            var _opTypesMap$get;

            var key = opType.node.name;

            if (!opTypesMap.has(key)) {
              opTypesMap.set(key, []);
            }

            (_opTypesMap$get = opTypesMap.get(key)) == null ? void 0 : _opTypesMap$get.push(opType);
          }

          var opMap = new Map();

          for (var [_key, _opTypes] of opTypesMap) {
            if (_opTypes.length > 1) {
              opMap.set(_key, _opTypes);
            } else {
              if ((_crd && OperationMgr === void 0 ? (_reportPossibleCrUseOfOperationMgr({
                error: Error()
              }), OperationMgr) : OperationMgr).getInstance().isMoreOpration(_opTypes[0].code)) {
                opMap.set(_key, _opTypes);
              }
            }
          } // 从映射中提取所有具有相同 node 和 code 的 OpType 数组


          for (var [name, group] of opMap) {
            var node = instantiate(this.CardItemPrefab);
            var cardItem = node.getComponent(_crd && Carditem === void 0 ? (_reportPossibleCrUseOfCarditem({
              error: Error()
            }), Carditem) : Carditem);
            cardItem.updateCardItemProp(group);
          }

          this.opBtns.getComponent(Layout).updateLayout();
        }

        cleanLayout() {
          var opNode = opTypes[0].node;
          var childrens = opNode.node.children;
          childrens.forEach(child => {
            if (child.name !== "sk") {
              child.removeFromParent();
            }
          });
        }

        resetView() {
          this.guoLayout.node.active = false;
          this.huLayout.node.active = false;
          this.zimoLayout.node.active = false;
          this.ganghuaLayout.node.active = false;
          this.gangLayout.node.active = false;
          this.pengLayout.node.active = false;
          this.chiLayout.node.active = false;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "opBtns", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "guoLayout", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "huLayout", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "gangLayout", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "pengLayout", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "chiLayout", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "zimoLayout", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "ganghuaLayout", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "CardItemPrefab", [_dec10], {
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
//# sourceMappingURL=697ea06b7843447a5ab1a7abfc9cb458e2022f01.js.map