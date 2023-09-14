System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Color, Label, Layout, Node, Prefab, ScrollView, Sprite, SpriteAtlas, UITransform, Vec3, _decorator, instantiate, Utils, resLoader, EventManager, BaseComponent, SettleMgr, FXJEvent, FXJRes, FXJUIID, GameEvent, Card, BottomItem, FanItem, List, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _crd, ccclass, property, TitleColor, Settle;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfUtils(extras) {
    _reporterNs.report("Utils", "../../../../../framework/Utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfresLoader(extras) {
    _reporterNs.report("resLoader", "../../../../../framework/loader/ResLoader", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventManager(extras) {
    _reporterNs.report("EventManager", "../../../../../framework/manager/EventManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../../../../framework/vc/BaseComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSettleMgr(extras) {
    _reporterNs.report("SettleMgr", "../../../cache/SettleMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFXJEvent(extras) {
    _reporterNs.report("FXJEvent", "../../../common/FXJEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFXJRes(extras) {
    _reporterNs.report("FXJRes", "../../../common/FXJRes", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFXJUIID(extras) {
    _reporterNs.report("FXJUIID", "../../../common/FXJRes", _context.meta, extras);
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

  function _reportPossibleCrUseOfBottomItem(extras) {
    _reporterNs.report("BottomItem", "./BottomItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFanItem(extras) {
    _reporterNs.report("FanItem", "./FanItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfList(extras) {
    _reporterNs.report("List", "./list/List", _context.meta, extras);
  }

  _export("TitleColor", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Color = _cc.Color;
      Label = _cc.Label;
      Layout = _cc.Layout;
      Node = _cc.Node;
      Prefab = _cc.Prefab;
      ScrollView = _cc.ScrollView;
      Sprite = _cc.Sprite;
      SpriteAtlas = _cc.SpriteAtlas;
      UITransform = _cc.UITransform;
      Vec3 = _cc.Vec3;
      _decorator = _cc._decorator;
      instantiate = _cc.instantiate;
    }, function (_unresolved_2) {
      Utils = _unresolved_2.Utils;
    }, function (_unresolved_3) {
      resLoader = _unresolved_3.resLoader;
    }, function (_unresolved_4) {
      EventManager = _unresolved_4.EventManager;
    }, function (_unresolved_5) {
      BaseComponent = _unresolved_5.BaseComponent;
    }, function (_unresolved_6) {
      SettleMgr = _unresolved_6.SettleMgr;
    }, function (_unresolved_7) {
      FXJEvent = _unresolved_7.FXJEvent;
    }, function (_unresolved_8) {
      FXJRes = _unresolved_8.FXJRes;
      FXJUIID = _unresolved_8.FXJUIID;
    }, function (_unresolved_9) {
      GameEvent = _unresolved_9.GameEvent;
    }, function (_unresolved_10) {
      Card = _unresolved_10.Card;
    }, function (_unresolved_11) {
      BottomItem = _unresolved_11.BottomItem;
    }, function (_unresolved_12) {
      FanItem = _unresolved_12.FanItem;
    }, function (_unresolved_13) {
      List = _unresolved_13.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6ed80FH5gBHSpWBDqW9JZXO", "settle", undefined);

      __checkObsolete__(['Color', 'Label', 'Layout', 'Node', 'Prefab', 'ScrollView', 'Sprite', 'SpriteAtlas', 'UITransform', 'Vec3', '_decorator', 'instantiate']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Name = settle
       * URL = db://assets/package/game/module/settle/src/settle.ts
       * Time = Wed Aug 02 2023 10:58:00 GMT+0800 (中国标准时间)
       * Author = qwe757964
       *
       * Life: onLoad-->onInitModuleEvent-->onEnable->start->update->lateUpdate->onDisable->onDestroy
       * 
       */

      (function (TitleColor) {
        TitleColor["Win"] = "#D23A00";
        TitleColor["Fail"] = "#667AD2";
      })(TitleColor || _export("TitleColor", TitleColor = {}));

      _export("Settle", Settle = (_dec = ccclass('Settle'), _dec2 = property(Sprite), _dec3 = property(Sprite), _dec4 = property(Sprite), _dec5 = property(Sprite), _dec6 = property(ScrollView), _dec7 = property(Node), _dec8 = property(Node), _dec9 = property(Label), _dec10 = property(Layout), _dec11 = property(Prefab), _dec12 = property(Node), _dec13 = property(_crd && List === void 0 ? (_reportPossibleCrUseOfList({
        error: Error()
      }), List) : List), _dec14 = property(_crd && List === void 0 ? (_reportPossibleCrUseOfList({
        error: Error()
      }), List) : List), _dec(_class = (_class2 = class Settle extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "bg", _descriptor, this);

          _initializerDefineProperty(this, "left_bg", _descriptor2, this);

          _initializerDefineProperty(this, "title", _descriptor3, this);

          _initializerDefineProperty(this, "title_bg", _descriptor4, this);

          _initializerDefineProperty(this, "scrollView", _descriptor5, this);

          _initializerDefineProperty(this, "huLayout", _descriptor6, this);

          _initializerDefineProperty(this, "moneyLayout", _descriptor7, this);

          _initializerDefineProperty(this, "tittle_str", _descriptor8, this);

          _initializerDefineProperty(this, "card_layout", _descriptor9, this);

          _initializerDefineProperty(this, "card_Prefab", _descriptor10, this);

          _initializerDefineProperty(this, "huTag", _descriptor11, this);

          _initializerDefineProperty(this, "bottomScroll", _descriptor12, this);

          _initializerDefineProperty(this, "moneyScroll", _descriptor13, this);

          this.titleMap = new Map();
          this._moneyResKey = {
            "+": "+",
            "-": "-",
            ".": ".",
            "万": "wan",
            "亿": "yi",
            "0": "0",
            "1": "1",
            "2": "2",
            "3": "3",
            "4": "4",
            "5": "5",
            "6": "6",
            "7": "7",
            "8": "8",
            "9": "9"
          };
          this._huResKey = {
            "共胡": "gonghu",
            "次": "ci",
            "0": "0",
            "1": "1",
            "2": "2",
            "3": "3",
            "4": "4",
            "5": "5",
            "6": "6",
            "7": "7",
            "8": "8",
            "9": "9"
          };
        }

        /** override 初始化模块事件 */
        onInitModuleEvent() {}

        onLoad() {
          this.titleMap.set("common_hu", "平胡");
          this.titleMap.set("zi_mo", "自摸");
          this.titleMap.set("huang_zhuang", "黄庄");
          var moneyItems = (_crd && SettleMgr === void 0 ? (_reportPossibleCrUseOfSettleMgr({
            error: Error()
          }), SettleMgr) : SettleMgr).getInstance().settleModel.moneyItemList;

          if (moneyItems.length === 0) {
            this.moneyScroll.numItems = 0;
          } else {
            this.moneyScroll.numItems = moneyItems[0].fanExtendInfo.length;
          }

          var opponentInfos = (_crd && SettleMgr === void 0 ? (_reportPossibleCrUseOfSettleMgr({
            error: Error()
          }), SettleMgr) : SettleMgr).getInstance().getOpponentTotalInfo();
          this.bottomScroll.numItems = opponentInfos.length;
          this.updateSettleInfo();
        }

        onListBottomHRender(item, idx) {
          var opponentInfos = (_crd && SettleMgr === void 0 ? (_reportPossibleCrUseOfSettleMgr({
            error: Error()
          }), SettleMgr) : SettleMgr).getInstance().getOpponentTotalInfo();
          var info = opponentInfos[idx];
          var scriptPlayer = item.getComponent(_crd && BottomItem === void 0 ? (_reportPossibleCrUseOfBottomItem({
            error: Error()
          }), BottomItem) : BottomItem);
          scriptPlayer.updateItemProps(info);
        }

        onListMoneyVRender(item, idx) {
          var moneyItems = (_crd && SettleMgr === void 0 ? (_reportPossibleCrUseOfSettleMgr({
            error: Error()
          }), SettleMgr) : SettleMgr).getInstance().settleModel.moneyItemList;
          var fanExtendInfo = moneyItems[0].fanExtendInfo[idx];
          var scriptPlayer = item.getComponent(_crd && FanItem === void 0 ? (_reportPossibleCrUseOfFanItem({
            error: Error()
          }), FanItem) : FanItem);
          scriptPlayer.updateItemProps(idx, fanExtendInfo);
        }

        updateSettleInfo() {
          var myInfo = (_crd && SettleMgr === void 0 ? (_reportPossibleCrUseOfSettleMgr({
            error: Error()
          }), SettleMgr) : SettleMgr).getInstance().getMyTotalInfo();
          var fanData = (_crd && SettleMgr === void 0 ? (_reportPossibleCrUseOfSettleMgr({
            error: Error()
          }), SettleMgr) : SettleMgr).getInstance().getMaxWinType();
          this.tittle_str.string = fanData.fanName; // this.tittle_str.string = this.titleMap.get(SettleMgr.getInstance().settleType);

          var colorStr = myInfo.bWin !== -1 ? TitleColor.Win : TitleColor.Fail;
          var normalColor = new Color(colorStr);
          this.tittle_str.color = normalColor;
          var bgStr = myInfo.bWin !== -1 ? "win_bg" : "failure_bg";
          var leftStr = myInfo.bWin !== -1 ? "settle_win" : "settle_failure";
          var titleStr = myInfo.bWin !== -1 ? "win_title_bg" : "fail_title_bg";
          var forward = myInfo.bWin !== -1 ? "+" : "";
          var moneyAtlas = myInfo.bWin !== -1 ? (_crd && FXJRes === void 0 ? (_reportPossibleCrUseOfFXJRes({
            error: Error()
          }), FXJRes) : FXJRes).Prefab_Settle_Win : (_crd && FXJRes === void 0 ? (_reportPossibleCrUseOfFXJRes({
            error: Error()
          }), FXJRes) : FXJRes).Prefab_Settle_Fail;
          var huAtlas = myInfo.bWin !== -1 ? (_crd && FXJRes === void 0 ? (_reportPossibleCrUseOfFXJRes({
            error: Error()
          }), FXJRes) : FXJRes).Prefab_Settle_Hu_Win : (_crd && FXJRes === void 0 ? (_reportPossibleCrUseOfFXJRes({
            error: Error()
          }), FXJRes) : FXJRes).Prefab_Settle_Hu_Fail;
          var frameBg = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).string_format((_crd && FXJRes === void 0 ? (_reportPossibleCrUseOfFXJRes({
            error: Error()
          }), FXJRes) : FXJRes).Prefab_Settle_Image.plistKey, bgStr);
          var frameLeft = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).string_format((_crd && FXJRes === void 0 ? (_reportPossibleCrUseOfFXJRes({
            error: Error()
          }), FXJRes) : FXJRes).Prefab_Settle_Image.plistKey, leftStr);
          var frameTitle = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).string_format((_crd && FXJRes === void 0 ? (_reportPossibleCrUseOfFXJRes({
            error: Error()
          }), FXJRes) : FXJRes).Prefab_Settle_Image.plistKey, titleStr);
          (_crd && resLoader === void 0 ? (_reportPossibleCrUseOfresLoader({
            error: Error()
          }), resLoader) : resLoader).load((_crd && FXJRes === void 0 ? (_reportPossibleCrUseOfFXJRes({
            error: Error()
          }), FXJRes) : FXJRes).Prefab_Settle_Image.bundle, (_crd && FXJRes === void 0 ? (_reportPossibleCrUseOfFXJRes({
            error: Error()
          }), FXJRes) : FXJRes).Prefab_Settle_Image.path, SpriteAtlas, (err, atlas) => {
            if (err) {
              return;
            }

            var bgAtlas = atlas.getSpriteFrame(frameBg);

            if (bgAtlas) {
              this.bg.spriteFrame = bgAtlas;
            }

            var leftAtlas = atlas.getSpriteFrame(frameLeft);

            if (leftAtlas) {
              this.left_bg.spriteFrame = leftAtlas;
            }

            var titleAtlas = atlas.getSpriteFrame(frameTitle);

            if (titleAtlas) {
              this.title_bg.spriteFrame = titleAtlas;
            }
          });
          var moneyStr = "" + forward + myInfo.winMoney;
          var numList = String(moneyStr).split("");
          var numKeyList = [];

          for (var i = 0; i < numList.length; i++) {
            numKeyList.push(this._moneyResKey[numList[i]]);
          }

          this.createNumSprImg(this.moneyLayout, moneyAtlas, numKeyList, 0); // let fanStr:string = `${myInfo.totalFanStr}次`;
          // let fanList = String(fanStr).split("");
          // if (fanList.length > 0) {
          // 	fanList.unshift("共胡");
          // }
          // let fanKeyList = [];
          // for (let i = 0; i < fanList.length; i++) {
          // 	fanKeyList.push(this._huResKey[fanList[i]])
          // }
          // this.createNumSprImg(this.huLayout, huAtlas, fanKeyList, 0);

          this.updateWinCards();
        } // 封装带有异步操作的for循环


        asyncForLoop() {
          var winPlayer = (_crd && SettleMgr === void 0 ? (_reportPossibleCrUseOfSettleMgr({
            error: Error()
          }), SettleMgr) : SettleMgr).getInstance().getWinPlayerInfo();
          return new Promise(resolve => {
            var array = winPlayer.handCards.filter(item => item !== winPlayer.huCard); // 移除值为3的元素

            for (var i = 0; i < array.length; i++) {
              var cardValue = winPlayer.handCards[i];
              var node = instantiate(this.card_Prefab);
              node.getComponent(_crd && Card === void 0 ? (_reportPossibleCrUseOfCard({
                error: Error()
              }), Card) : Card).setCardByte(cardValue);
              var transform = node.getComponent(UITransform);
              transform.setContentSize(53, 78);
              this.card_layout.node.addChild(node);
              resolve();
            }
          });
        }

        updateWinCards() {
          var _this = this;

          return _asyncToGenerator(function* () {
            var winPlayer = (_crd && SettleMgr === void 0 ? (_reportPossibleCrUseOfSettleMgr({
              error: Error()
            }), SettleMgr) : SettleMgr).getInstance().getWinPlayerInfo();

            if (winPlayer === null) {
              return;
            }

            yield _this.asyncForLoop(); // 等待for循环执行完毕

            var hu_node = instantiate(_this.card_Prefab);
            hu_node.getComponent(_crd && Card === void 0 ? (_reportPossibleCrUseOfCard({
              error: Error()
            }), Card) : Card).setCardByte(winPlayer.huCard);
            var transform = hu_node.getComponent(UITransform);
            transform.setContentSize(53, 78);

            _this.card_layout.node.addChild(hu_node);

            var hutag = instantiate(_this.huTag);
            hutag.active = true;
            hu_node.addChild(hutag);
            hutag.setPosition(-9.3, 23.6);
          })();
        }

        onCreateNextGame() {
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && FXJEvent === void 0 ? (_reportPossibleCrUseOfFXJEvent({
            error: Error()
          }), FXJEvent) : FXJEvent).GAME_CLOSE_POPUP, (_crd && FXJUIID === void 0 ? (_reportPossibleCrUseOfFXJUIID({
            error: Error()
          }), FXJUIID) : FXJUIID).GameSettlePrefab);
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).NEXT_GAME_OPERATION);
        }

        onCloseGame() {
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && FXJEvent === void 0 ? (_reportPossibleCrUseOfFXJEvent({
            error: Error()
          }), FXJEvent) : FXJEvent).GAME_CLOSE_POPUP, (_crd && FXJUIID === void 0 ? (_reportPossibleCrUseOfFXJUIID({
            error: Error()
          }), FXJUIID) : FXJUIID).GameSettlePrefab);
        }
        /** 创建数字图片集合 */


        createNumSprImg(parent, plist, keyList, dianPosY) {
          if (dianPosY === void 0) {
            dianPosY = 0;
          }

          parent.removeAllChildren();

          if (!keyList || keyList.length == 0) {
            return;
          }

          this.getPreLoaderRes(plist.bundle, plist.path, SpriteAtlas, atlas => {
            keyList.forEach((key, index) => {
              var spriteFrame = atlas.getSpriteFrame(key);

              if (spriteFrame) {
                var sprNode = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                  error: Error()
                }), Utils) : Utils).create_2DSprite(spriteFrame, key);
                parent.addChild(sprNode); // if ((key == "." || key == "coin_dian") && dianPosY != null) {

                sprNode.setPosition(new Vec3(sprNode.position.x, dianPosY, sprNode.position.z)); // }
              }
            });
          });
          parent.active = true;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "bg", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "left_bg", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "title", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "title_bg", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "scrollView", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "huLayout", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "moneyLayout", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "tittle_str", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "card_layout", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "card_Prefab", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "huTag", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "bottomScroll", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "moneyScroll", [_dec14], {
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
//# sourceMappingURL=da5c9952ac5a13064fe6b7307016b930df46e597.js.map