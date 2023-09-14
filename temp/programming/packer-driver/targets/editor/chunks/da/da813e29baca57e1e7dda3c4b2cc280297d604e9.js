System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Label, Node, sp, Sprite, SpriteAtlas, _decorator, GCache, BaseComponent, FXJRes, NodeHead, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _crd, ccclass, property, Player;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfGCache(extras) {
    _reporterNs.report("GCache", "../../../../../cache/GCache", _context.meta, extras);
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

  function _reportPossibleCrUseOfNodeHead(extras) {
    _reporterNs.report("NodeHead", "../../settle/src/NodeHead", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Label = _cc.Label;
      Node = _cc.Node;
      sp = _cc.sp;
      Sprite = _cc.Sprite;
      SpriteAtlas = _cc.SpriteAtlas;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      GCache = _unresolved_2.GCache;
    }, function (_unresolved_3) {
      BaseComponent = _unresolved_3.BaseComponent;
    }, function (_unresolved_4) {
      FXJRes = _unresolved_4.FXJRes;
    }, function (_unresolved_5) {
      NodeHead = _unresolved_5.NodeHead;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c4e105rXsBMP4G5h0NdZXpw", "Player", undefined);

      __checkObsolete__(['Label', 'Node', 'sp', 'Sprite', 'SpriteAtlas', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Name = Player
       * URL = db://assets/package/game/module/match/src/Player.ts
       * Time = Fri Aug 04 2023 14:49:13 GMT+0800 (中国标准时间)
       * Author = qwe757964
       *
       * Life: onLoad-->onInitModuleEvent-->onEnable->start->update->lateUpdate->onDisable->onDestroy
       * 
       */

      _export("Player", Player = (_dec = ccclass('Player'), _dec2 = property(Label), _dec3 = property(Sprite), _dec4 = property(Node), _dec5 = property(sp.Skeleton), _dec(_class = (_class2 = class Player extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "nick_name", _descriptor, this);

          _initializerDefineProperty(this, "y_head_bg", _descriptor2, this);

          _initializerDefineProperty(this, "headNode", _descriptor3, this);

          _initializerDefineProperty(this, "player", _descriptor4, this);

          this.seatId = 0;
        }

        /** override 初始化模块事件 */
        onInitModuleEvent() {}

        changeSkin(sex) {
          let spineConfig = sex == 2 ? (_crd && FXJRes === void 0 ? (_reportPossibleCrUseOfFXJRes({
            error: Error()
          }), FXJRes) : FXJRes).Spine_XiaoYa : (_crd && FXJRes === void 0 ? (_reportPossibleCrUseOfFXJRes({
            error: Error()
          }), FXJRes) : FXJRes).Spine_XiaoBo;
          this.getPreLoaderRes(spineConfig.bundle, spineConfig.path, sp.SkeletonData, spineAsset => {
            if (!spineAsset || this.player === null) {
              console.log("Failed to load asset");
              return;
            } // let comp = this.getComponent('sp.Skeleton') as sp.Skeleton;


            this.player.skeletonData = spineAsset;
            let ani = this.player.setAnimation(0, 'idle1', true);
            console.log("Load Success");
          });
        }

        changeHeadBg(userId) {
          // let spriteLoad = this.y_head_bg.getComponent(SpriteLoad);
          let frameName = "";

          if ((_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
            error: Error()
          }), GCache) : GCache).User.getUserMid() === userId) {
            frameName = "r_head_bg";
          } else {
            frameName = "y_head_bg";
          }

          this.getPreLoaderRes((_crd && FXJRes === void 0 ? (_reportPossibleCrUseOfFXJRes({
            error: Error()
          }), FXJRes) : FXJRes).Prefab_Match_Image.bundle, (_crd && FXJRes === void 0 ? (_reportPossibleCrUseOfFXJRes({
            error: Error()
          }), FXJRes) : FXJRes).Prefab_Match_Image.path, SpriteAtlas, atlas => {
            if (!atlas) {
              return;
            }

            let spriteFrame = atlas.getSpriteFrame(frameName);

            if (spriteFrame && this.y_head_bg) {
              this.y_head_bg.spriteFrame = spriteFrame;
            }
          });
        }

        updatePlayerProperty(player) {
          this.seatId = player.seatId;
          let playerInfo = JSON.parse(player.strUserInfo);
          this.nick_name.string = playerInfo.nickName;
          let nodeHeadCtr = this.headNode.getComponent(_crd && NodeHead === void 0 ? (_reportPossibleCrUseOfNodeHead({
            error: Error()
          }), NodeHead) : NodeHead);
          nodeHeadCtr.updateUserHead(playerInfo);
          nodeHeadCtr.updateUserHeadBox(playerInfo);
          this.changeSkin(playerInfo.sex);
          this.changeHeadBg(player.userId);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "nick_name", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "y_head_bg", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "headNode", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "player", [_dec5], {
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
//# sourceMappingURL=da813e29baca57e1e7dda3c4b2cc280297d604e9.js.map