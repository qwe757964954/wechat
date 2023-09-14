System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Color, Label, Node, Sprite, SpriteAtlas, _decorator, Utils, resLoader, RoomMgr, FXJRes, CardUtil, NodeHead, ListItem, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _crd, ccclass, property, winningColor, losingColor, BottomItem;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfUtils(extras) {
    _reporterNs.report("Utils", "../../../../../framework/Utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfresLoader(extras) {
    _reporterNs.report("resLoader", "../../../../../framework/loader/ResLoader", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoomMgr(extras) {
    _reporterNs.report("RoomMgr", "../../../cache/RoomMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFXJRes(extras) {
    _reporterNs.report("FXJRes", "../../../common/FXJRes", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCommon(extras) {
    _reporterNs.report("Common", "../../../common/idl/Common", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGame(extras) {
    _reporterNs.report("Game", "../../../common/idl/Game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCardUtil(extras) {
    _reporterNs.report("CardUtil", "../../../util/CardUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNodeHead(extras) {
    _reporterNs.report("NodeHead", "./NodeHead", _context.meta, extras);
  }

  function _reportPossibleCrUseOfListItem(extras) {
    _reporterNs.report("ListItem", "./list/ListItem", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Color = _cc.Color;
      Label = _cc.Label;
      Node = _cc.Node;
      Sprite = _cc.Sprite;
      SpriteAtlas = _cc.SpriteAtlas;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      Utils = _unresolved_2.Utils;
    }, function (_unresolved_3) {
      resLoader = _unresolved_3.resLoader;
    }, function (_unresolved_4) {
      RoomMgr = _unresolved_4.RoomMgr;
    }, function (_unresolved_5) {
      FXJRes = _unresolved_5.FXJRes;
    }, function (_unresolved_6) {
      CardUtil = _unresolved_6.CardUtil;
    }, function (_unresolved_7) {
      NodeHead = _unresolved_7.NodeHead;
    }, function (_unresolved_8) {
      ListItem = _unresolved_8.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "47d6fd3TJJKNZxN9dKPdO5P", "BottomItem", undefined);

      __checkObsolete__(['Color', 'Label', 'Node', 'Sprite', 'SpriteAtlas', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Name = BottomItem
       * URL = db://assets/package/game/module/settle/src/BottomItem.ts
       * Time = Tue Aug 08 2023 16:15:04 GMT+0800 (中国标准时间)
       * Author = qwe757964
       *
       * Life: onLoad-->onInitModuleEvent-->onEnable->start->update->lateUpdate->onDisable->onDestroy
       * 
       */

      winningColor = "#D56D44";
      losingColor = "#6585CA";

      _export("BottomItem", BottomItem = (_dec = ccclass('BottomItem'), _dec2 = property(Sprite), _dec3 = property(Label), _dec4 = property(Label), _dec5 = property(Label), _dec6 = property(Sprite), _dec7 = property(Node), _dec(_class = (_class2 = class BottomItem extends (_crd && ListItem === void 0 ? (_reportPossibleCrUseOfListItem({
        error: Error()
      }), ListItem) : ListItem) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "player_bg", _descriptor, this);

          _initializerDefineProperty(this, "up_down", _descriptor2, this);

          _initializerDefineProperty(this, "nick_name", _descriptor3, this);

          _initializerDefineProperty(this, "money", _descriptor4, this);

          _initializerDefineProperty(this, "bankruptcy_tag", _descriptor5, this);

          _initializerDefineProperty(this, "node_head", _descriptor6, this);

          this.upDownMap = new Map();
        }

        /** override 初始化模块事件 */
        onInitModuleEvent() {}

        updateItemProps(info) {
          var gameUserInfo = JSON.parse(info.strUserInfo);
          this.node_head.getComponent(_crd && NodeHead === void 0 ? (_reportPossibleCrUseOfNodeHead({
            error: Error()
          }), NodeHead) : NodeHead).updateUserHead(gameUserInfo);
          this.nick_name.string = gameUserInfo.nickName;
          this.money.string = info.winMoney.toString();
          this.up_down.string = (_crd && CardUtil === void 0 ? (_reportPossibleCrUseOfCardUtil({
            error: Error()
          }), CardUtil) : CardUtil).calculatePlayerPosition((_crd && RoomMgr === void 0 ? (_reportPossibleCrUseOfRoomMgr({
            error: Error()
          }), RoomMgr) : RoomMgr).getInstance().mySeatId, info.seatId);
          var colorStr = info.bWin === -1 ? losingColor : winningColor;
          var normalColor = new Color(colorStr);
          this.money.color = normalColor;
          var bgStr = info.bWin === -1 ? "player_fail_bg" : "player_win_bg";
          var frameBg = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).string_format((_crd && FXJRes === void 0 ? (_reportPossibleCrUseOfFXJRes({
            error: Error()
          }), FXJRes) : FXJRes).Prefab_Settle_Image.plistKey, bgStr);
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
              this.player_bg.spriteFrame = bgAtlas;
            }
          });
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "player_bg", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "up_down", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "nick_name", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "money", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "bankruptcy_tag", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "node_head", [_dec7], {
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
//# sourceMappingURL=fb71d176e9a4a239da1fb9952ff66995ada33794.js.map