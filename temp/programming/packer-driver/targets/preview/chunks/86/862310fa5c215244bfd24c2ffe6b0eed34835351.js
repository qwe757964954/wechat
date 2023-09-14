System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Color, Label, Sprite, SpriteAtlas, _decorator, resLoader, Utils, SettleMgr, FXJRes, ListItem, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _crd, ccclass, property, WinItemColor, FailItemColor, FanItem;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfresLoader(extras) {
    _reporterNs.report("resLoader", "../../../../../framework/loader/ResLoader", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUtils(extras) {
    _reporterNs.report("Utils", "../../../../../framework/Utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSettleMgr(extras) {
    _reporterNs.report("SettleMgr", "../../../cache/SettleMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFXJRes(extras) {
    _reporterNs.report("FXJRes", "../../../common/FXJRes", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGame(extras) {
    _reporterNs.report("Game", "../../../common/idl/Game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfListItem(extras) {
    _reporterNs.report("ListItem", "./list/ListItem", _context.meta, extras);
  }

  _export({
    WinItemColor: void 0,
    FailItemColor: void 0
  });

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Color = _cc.Color;
      Label = _cc.Label;
      Sprite = _cc.Sprite;
      SpriteAtlas = _cc.SpriteAtlas;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      resLoader = _unresolved_2.resLoader;
    }, function (_unresolved_3) {
      Utils = _unresolved_3.Utils;
    }, function (_unresolved_4) {
      SettleMgr = _unresolved_4.SettleMgr;
    }, function (_unresolved_5) {
      FXJRes = _unresolved_5.FXJRes;
    }, function (_unresolved_6) {
      ListItem = _unresolved_6.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ef6acuyhSlK+oQbvTen4eX5", "FanItem", undefined);

      __checkObsolete__(['Color', 'Label', 'Sprite', 'SpriteAtlas', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Name = ListItem
       * URL = db://assets/package/game/module/settle/src/ListItem.ts
       * Time = Tue Aug 08 2023 18:10:14 GMT+0800 (中国标准时间)
       * Author = qwe757964
       *
       * Life: onLoad-->onInitModuleEvent-->onEnable->start->update->lateUpdate->onDisable->onDestroy
       * 
       */

      (function (WinItemColor) {
        WinItemColor["Win"] = "#D34000";
        WinItemColor["Fail"] = "#B67D41";
      })(WinItemColor || _export("WinItemColor", WinItemColor = {}));

      (function (FailItemColor) {
        FailItemColor["Win"] = "#457BDE";
        FailItemColor["Fail"] = "#7D8ACE";
      })(FailItemColor || _export("FailItemColor", FailItemColor = {}));

      _export("FanItem", FanItem = (_dec = ccclass('ListItem'), _dec2 = property(Sprite), _dec3 = property(Label), _dec4 = property(Label), _dec5 = property(Label), _dec(_class = (_class2 = class FanItem extends (_crd && ListItem === void 0 ? (_reportPossibleCrUseOfListItem({
        error: Error()
      }), ListItem) : ListItem) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "bg", _descriptor, this);

          _initializerDefineProperty(this, "up_down", _descriptor2, this);

          _initializerDefineProperty(this, "detail", _descriptor3, this);

          _initializerDefineProperty(this, "multiple_num", _descriptor4, this);

          this.upDownMap = new Map();
        }

        /** override 初始化模块事件 */
        onInitModuleEvent() {}

        getUpDownMap(seatid) {
          for (var [id, coord] of this.upDownMap) {
            if (seatid == id) {
              return coord;
            }
          }

          return null;
        }
        /** 更新界面 */


        updateItemProps(index, data) {
          this.upDownMap.set(3, "上");
          this.upDownMap.set(1, "下");
          this.upDownMap.set(2, "对");
          this.upDownMap.set(0, "本");
          var totalStr = data.totalFanStr ? data.totalFanStr : "0";
          this.multiple_num.string = totalStr + "番";
          var idStr = this.getUpDownMap(index);
          this.up_down.string = idStr + "家";
          var fanList = data.fanInfo;
          var fanStr = "";

          for (var i = 0; i < fanList.length; i++) {
            var num = parseInt(fanList[i].fan);
            var fanName = fanList[i].fanName;

            if (num) {
              fanName = fanName + "X" + fanList[i].fan;
            }

            if (i !== fanList.length - 1) {
              fanName = fanName + "、";
            }

            fanStr = fanStr + fanName;
          }

          this.detail.string = fanStr;
          this.setListBgColor(data);
        }

        setListBgColor(data) {
          var myInfo = (_crd && SettleMgr === void 0 ? (_reportPossibleCrUseOfSettleMgr({
            error: Error()
          }), SettleMgr) : SettleMgr).getInstance().getMyTotalInfo();
          var prefixStr = myInfo.bWin !== -1 ? "win_" : "fail_";
          var listStr = data.totalFan > 0 ? "list2" : "list1";
          var bgStr = "" + prefixStr + listStr;
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
              this.bg.spriteFrame = bgAtlas;
            }
          });
          var colorItem = myInfo.bWin !== -1 ? WinItemColor : FailItemColor;
          var colorStr = data.totalFan > 0 ? colorItem.Win : colorItem.Fail;
          var normalColor = new Color(colorStr);
          this.up_down.color = normalColor;
          this.detail.color = normalColor;
          this.multiple_num.color = normalColor;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "bg", [_dec2], {
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
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "detail", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "multiple_num", [_dec5], {
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
//# sourceMappingURL=862310fa5c215244bfd24c2ffe6b0eed34835351.js.map