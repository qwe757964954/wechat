System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, instantiate, Layout, Node, Prefab, UITransform, _decorator, EventManager, BaseComponent, OperationMgr, GameEvent, Card, Item, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, Carditem;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfEventManager(extras) {
    _reporterNs.report("EventManager", "../../../../../framework/manager/EventManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../../../../framework/vc/BaseComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfOperationMgr(extras) {
    _reporterNs.report("OperationMgr", "../../../cache/OperationMgr", _context.meta, extras);
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

  function _reportPossibleCrUseOfItem(extras) {
    _reporterNs.report("Item", "./Item", _context.meta, extras);
  }

  function _reportPossibleCrUseOfOpType(extras) {
    _reporterNs.report("OpType", "./OpInfo", _context.meta, extras);
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
      UITransform = _cc.UITransform;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      EventManager = _unresolved_2.EventManager;
    }, function (_unresolved_3) {
      BaseComponent = _unresolved_3.BaseComponent;
    }, function (_unresolved_4) {
      OperationMgr = _unresolved_4.OperationMgr;
    }, function (_unresolved_5) {
      GameEvent = _unresolved_5.GameEvent;
    }, function (_unresolved_6) {
      Card = _unresolved_6.Card;
    }, function (_unresolved_7) {
      Item = _unresolved_7.Item;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a5b47HaIfNPsaX4/AAoJYJ+", "Carditem", undefined);

      __checkObsolete__(['instantiate', 'Layout', 'Node', 'Prefab', 'UITransform', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Name = Carditem
       * URL = db://assets/package/game/module/opInfo/src/Carditem.ts
       * Time = Fri Aug 18 2023 15:19:38 GMT-0700 (北美太平洋夏令时间)
       * Author = qwe757964
       *
       * Life: onLoad-->onInitModuleEvent-->onEnable->start->update->lateUpdate->onDisable->onDestroy
       * 
       */

      _export("Carditem", Carditem = (_dec = ccclass('Carditem'), _dec2 = property({
        tooltip: "手牌预制体",
        type: Prefab
      }), _dec3 = property(Prefab), _dec4 = property(Layout), _dec(_class = (_class2 = class Carditem extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "CardPrefab", _descriptor, this);

          _initializerDefineProperty(this, "itemPrefab", _descriptor2, this);

          _initializerDefineProperty(this, "opCards", _descriptor3, this);
        }

        /** override 初始化模块事件 */
        onInitModuleEvent() {}

        updateCardItemProp(opTypes) {
          let opNode = opTypes[0].node;
          let childrens = opNode.node.children;
          childrens.forEach(child => {
            if (child.name !== "sk") {
              child.removeFromParent();
            }
          });
          this.node.removeAllChildren();
          this.node.getComponent(UITransform).width = 0;
          let item_width = 0;
          let rowNum = 0;

          for (let i = 0; i < opTypes.length; i++) {
            let opType = opTypes[i];
            let cardList = (_crd && OperationMgr === void 0 ? (_reportPossibleCrUseOfOperationMgr({
              error: Error()
            }), OperationMgr) : OperationMgr).getInstance().getOprationCardList(opType.code);

            for (let idx = 0; idx < cardList.length; idx++) {
              let item = instantiate(this.itemPrefab);
              item.getComponent(UITransform).width = 0;
              item.removeAllChildren();
              let cardInfo = cardList[idx];
              let cards = (_crd && OperationMgr === void 0 ? (_reportPossibleCrUseOfOperationMgr({
                error: Error()
              }), OperationMgr) : OperationMgr).getInstance().getOprationListNumber(opType.code, idx);
              cards.forEach(cardValue => {
                let node = instantiate(this.CardPrefab);
                node.getComponent(_crd && Card === void 0 ? (_reportPossibleCrUseOfCard({
                  error: Error()
                }), Card) : Card).setCardByte(cardValue);
                let transform = node.getComponent(UITransform);
                transform.setContentSize(53, 86);
                item.addChild(node);
              });
              item.getComponent(_crd && Item === void 0 ? (_reportPossibleCrUseOfItem({
                error: Error()
              }), Item) : Item).index = idx;
              item.getComponent(Layout).constraint = Layout.Constraint.FIXED_COL;
              item.getComponent(Layout).constraintNum = cards.length;
              item.off(Node.EventType.TOUCH_END);
              item.on(Node.EventType.TOUCH_END, event => {
                let id_num = event.target.getComponent(_crd && Item === void 0 ? (_reportPossibleCrUseOfItem({
                  error: Error()
                }), Item) : Item).index;
                this.opClick(opType.code, id_num);
              }, this);
              rowNum++;
              item_width = cards.length * 53;
              item.getComponent(UITransform).width = item_width;
              this.node.addChild(item);
            }
          }

          let cardLayout = this.node.getComponent(Layout);
          let constraintNum = rowNum > 2 ? 2 : rowNum; // cardLayout.updateLayout();
          // let transform = ;
          // transform.height = Math.round(rowNum / 2) * 100;

          this.node.getComponent(UITransform).width = constraintNum * item_width; // console.log("transform____________________",transform.width);

          opNode.node.addChild(this.node); // opNode.node.getComponent(Layout).updateLayout();
        }

        opClick(opCode, index) {
          let req = {
            opCard: (_crd && OperationMgr === void 0 ? (_reportPossibleCrUseOfOperationMgr({
              error: Error()
            }), OperationMgr) : OperationMgr).getInstance().getPassNumber(),
            opCode: opCode,
            opCards: (_crd && OperationMgr === void 0 ? (_reportPossibleCrUseOfOperationMgr({
              error: Error()
            }), OperationMgr) : OperationMgr).getInstance().getOprationListNumber(opCode, index),
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
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).CLOSE_OPRATION_INFO);
          (_crd && OperationMgr === void 0 ? (_reportPossibleCrUseOfOperationMgr({
            error: Error()
          }), OperationMgr) : OperationMgr).getInstance().myOpCode = opCode;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "CardPrefab", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "itemPrefab", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "opCards", [_dec4], {
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
//# sourceMappingURL=e01dd32e7d97df9e3584f3f391ac6adba8597b01.js.map