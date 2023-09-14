System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14", "__unresolved_15", "__unresolved_16"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Label, Node, Sprite, SpriteAtlas, SpriteFrame, _decorator, instantiate, GCache, AppEvent, Utils, Encrypt, SpriteLoad, DelegateComponent, resLoader, EventManager, BaseComponent, Platform, PlayerMgr, FXJConstant, FXJEvent, FXJRes, FXJSound, GameEvent, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _crd, ccclass, property, menu, GameHeadInfoPrefabCtr;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfGCache(extras) {
    _reporterNs.report("GCache", "../../../cache/GCache", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAppEvent(extras) {
    _reporterNs.report("AppEvent", "../../../config/AppEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUtils(extras) {
    _reporterNs.report("Utils", "../../../framework/Utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEncrypt(extras) {
    _reporterNs.report("Encrypt", "../../../framework/crypto/Encrypto", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSpriteLoad(extras) {
    _reporterNs.report("SpriteLoad", "../../../framework/gui/sprite/SpriteLoad", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDelegateComponent(extras) {
    _reporterNs.report("DelegateComponent", "../../../framework/layer/DelegateComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfresLoader(extras) {
    _reporterNs.report("resLoader", "../../../framework/loader/ResLoader", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventManager(extras) {
    _reporterNs.report("EventManager", "../../../framework/manager/EventManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../../framework/vc/BaseComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlatform(extras) {
    _reporterNs.report("Platform", "../../../platform/Platform", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerMgr(extras) {
    _reporterNs.report("PlayerMgr", "../cache/PlayerMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFXJConstant(extras) {
    _reporterNs.report("FXJConstant", "../common/FXJConstant", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFXJEvent(extras) {
    _reporterNs.report("FXJEvent", "../common/FXJEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFXJRes(extras) {
    _reporterNs.report("FXJRes", "../common/FXJRes", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFXJSound(extras) {
    _reporterNs.report("FXJSound", "../common/FXJSound", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameEvent(extras) {
    _reporterNs.report("GameEvent", "../common/GameEvent", _context.meta, extras);
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
      Sprite = _cc.Sprite;
      SpriteAtlas = _cc.SpriteAtlas;
      SpriteFrame = _cc.SpriteFrame;
      _decorator = _cc._decorator;
      instantiate = _cc.instantiate;
    }, function (_unresolved_2) {
      GCache = _unresolved_2.GCache;
    }, function (_unresolved_3) {
      AppEvent = _unresolved_3.AppEvent;
    }, function (_unresolved_4) {
      Utils = _unresolved_4.Utils;
    }, function (_unresolved_5) {
      Encrypt = _unresolved_5.Encrypt;
    }, function (_unresolved_6) {
      SpriteLoad = _unresolved_6.default;
    }, function (_unresolved_7) {
      DelegateComponent = _unresolved_7.DelegateComponent;
    }, function (_unresolved_8) {
      resLoader = _unresolved_8.resLoader;
    }, function (_unresolved_9) {
      EventManager = _unresolved_9.EventManager;
    }, function (_unresolved_10) {
      BaseComponent = _unresolved_10.BaseComponent;
    }, function (_unresolved_11) {
      Platform = _unresolved_11.Platform;
    }, function (_unresolved_12) {
      PlayerMgr = _unresolved_12.PlayerMgr;
    }, function (_unresolved_13) {
      FXJConstant = _unresolved_13.FXJConstant;
    }, function (_unresolved_14) {
      FXJEvent = _unresolved_14.FXJEvent;
    }, function (_unresolved_15) {
      FXJRes = _unresolved_15.FXJRes;
    }, function (_unresolved_16) {
      FXJSound = _unresolved_16.FXJSound;
    }, function (_unresolved_17) {
      GameEvent = _unresolved_17.GameEvent;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b3e9883uaZCgbaTV6NHat2K", "GameHeadInfoPrefabCtr", undefined);

      __checkObsolete__(['EventTouch', 'Label', 'Node', 'Sprite', 'SpriteAtlas', 'SpriteFrame', '_decorator', 'instantiate']);

      ({
        ccclass,
        property,
        menu
      } = _decorator);
      /**
       * Name = GameHeadInfoPrefabCtr
       * URL = db://assets/package/game/scripts/GameHeadInfoPrefabCtr.ts
       * Time = Fri Sep 09 2022 11:45:37 GMT+0800 (中国标准时间)
       * Author = Tomoe
       *
       * Life: onLoad-->onEnable->start->update->lateUpdate->onDisable->onDestroy
       */

      _export("GameHeadInfoPrefabCtr", GameHeadInfoPrefabCtr = (_dec = ccclass('GameHeadInfoPrefabCtr'), _dec2 = menu('prefab/game/GameHeadInfoPrefabCtr'), _dec3 = property({
        tooltip: "头像节点",
        type: Node
      }), _dec4 = property({
        tooltip: "头像框节点",
        type: Node
      }), _dec5 = property({
        tooltip: "性别",
        type: Node
      }), _dec6 = property({
        tooltip: "昵称",
        type: Label
      }), _dec7 = property({
        tooltip: "用户ID",
        type: Label
      }), _dec8 = property({
        tooltip: "钱币类型",
        type: Sprite
      }), _dec9 = property({
        tooltip: "钱币数量",
        type: Label
      }), _dec10 = property({
        tooltip: "道具父节点",
        type: Node
      }), _dec11 = property({
        tooltip: "克隆道具",
        type: Node
      }), _dec12 = property({
        tooltip: "性别男",
        type: SpriteFrame
      }), _dec13 = property({
        tooltip: "性别女",
        type: SpriteFrame
      }), _dec(_class = _dec2(_class = (_class2 = class GameHeadInfoPrefabCtr extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "headNode", _descriptor, this);

          _initializerDefineProperty(this, "headFrameNode", _descriptor2, this);

          _initializerDefineProperty(this, "sexNode", _descriptor3, this);

          _initializerDefineProperty(this, "nameLabel", _descriptor4, this);

          _initializerDefineProperty(this, "playIdLabel", _descriptor5, this);

          _initializerDefineProperty(this, "moneyCoin", _descriptor6, this);

          _initializerDefineProperty(this, "moneyLabel", _descriptor7, this);

          _initializerDefineProperty(this, "propList", _descriptor8, this);

          _initializerDefineProperty(this, "cloneProp", _descriptor9, this);

          _initializerDefineProperty(this, "manPic", _descriptor10, this);

          _initializerDefineProperty(this, "womanPic", _descriptor11, this);

          this._uid = void 0;
          this._posID = void 0;
          this._player = null;
        }

        /**初始化添加事件绑定 */
        onInitModuleEvent() {
          //玩家基本信息有更新
          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).USER_UPDATE_INFO, this.updateUserInfo); //玩家资产有更新

          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).USER_UPDATE_PROPERTY, this.updateCoin); //玩家退出

          this.addModelListener((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).VIEW_BROADCAST_PLAYER_EXIT, this.receiveUserExitRoom);
        }

        onLoad() {
          this.getComp();
          this.checkBaseData();
          this.initView();
          this.updateUserInfo();
          this.updateListProps();
        }

        start() {}

        /** 更新玩家数据 */
        updateUserPlayer() {
          this._player = (_crd && PlayerMgr === void 0 ? (_reportPossibleCrUseOfPlayerMgr({
            error: Error()
          }), PlayerMgr) : PlayerMgr).getInstance().findPlayerWithUserId(this._uid);

          if (this._player) {
            this._posID = this._player.seatId;
          } else {
            this._posID = null;
          }
        }

        initView() {
          this.cloneProp.active = false;
          this.propList.active = true;
        }

        getComp() {
          let comp = this.node.getComponent(_crd && DelegateComponent === void 0 ? (_reportPossibleCrUseOfDelegateComponent({
            error: Error()
          }), DelegateComponent) : DelegateComponent);

          if (comp) {
            let param = comp.getParams();

            if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).isNull(param) == false) {
              this._uid = param.uid;
            }
          }
        }
        /**
         * 检验用户基础信息
         * @returns 
         */


        checkBaseData() {
          if (!this._uid) {
            return;
          }

          this.updateUserPlayer();

          if (!this._player) {
            return;
          }
        }
        /** 更新玩家信息 */


        updateUserInfo(event = null, uid = null) {
          if (event != null && uid != this._uid) {
            return;
          }

          this.updateUserPlayer();

          if (!this._player) {
            return;
          }

          this.updateHead();
          this.updateCoin();
        }
        /**
         * 更新玩家界面信息
         * @returns 
         */


        updateHead() {
          if (!this._player) {
            return;
          }

          let gameUserInfo = this._player.gameUserInfo;
          let sex = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).number_valueOf(gameUserInfo.sex);
          sex = sex > 0 ? sex : 1;
          console.log("update123", gameUserInfo, sex);
          this.sexNode.active = true;
          let spriteLoad = this.headNode.getComponent(_crd && SpriteLoad === void 0 ? (_reportPossibleCrUseOfSpriteLoad({
            error: Error()
          }), SpriteLoad) : SpriteLoad);

          if (sex == 2) {
            //女
            this.sexNode.getComponent(Sprite).spriteFrame = this.womanPic;
            spriteLoad.setLocalLoad((_crd && FXJRes === void 0 ? (_reportPossibleCrUseOfFXJRes({
              error: Error()
            }), FXJRes) : FXJRes).Picture_UserBigHead_girl.bundle, (_crd && FXJRes === void 0 ? (_reportPossibleCrUseOfFXJRes({
              error: Error()
            }), FXJRes) : FXJRes).Picture_UserBigHead_girl.path);
          } else {
            //男
            this.sexNode.getComponent(Sprite).spriteFrame = this.manPic;
            spriteLoad.setLocalLoad((_crd && FXJRes === void 0 ? (_reportPossibleCrUseOfFXJRes({
              error: Error()
            }), FXJRes) : FXJRes).Picture_UserBigHead_boy.bundle, (_crd && FXJRes === void 0 ? (_reportPossibleCrUseOfFXJRes({
              error: Error()
            }), FXJRes) : FXJRes).Picture_UserBigHead_boy.path);
          }

          let headPic = gameUserInfo.avatar_b;
          console.log("头像:", headPic);

          if (headPic.length > 0) {
            spriteLoad.setRemoteUrl(headPic);
          } //昵称


          this.nameLabel.string = gameUserInfo.nickName;
          this.playIdLabel.string = this._player.userId;
        }
        /**
         * 更新玩家银币
         * @param event 
         * @param uid 
         * @returns 
         */


        updateCoin(event = null, uid = null) {
          if (event != null && uid != this._uid) {
            return;
          }

          this.updateUserPlayer();

          if (!this._player) {
            return;
          }

          console.log("update123:", this._player.money);
          this.moneyLabel.string = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).string_matchStr(this._player.money);
        }

        updateListProps() {
          let dataList = (_crd && FXJConstant === void 0 ? (_reportPossibleCrUseOfFXJConstant({
            error: Error()
          }), FXJConstant) : FXJConstant).EmojiProp;
          let maxLen = this.propList.children.length;

          if (dataList.length > maxLen) {
            maxLen = dataList.length;
          } // {
          // 	propID: 100,
          // 	icon: "jidan.png",
          // 	audio: FXJSound.emojiProp100,
          // 	aniConf: {bundle:"", path:""}
          // },


          for (let i = 0; i < maxLen; i++) {
            if (dataList[i]) {
              let info = dataList[i];
              let itemNode = this.propList.children[i];

              if (itemNode == null) {
                itemNode = instantiate(this.cloneProp);
                this.propList.addChild(itemNode);
              }

              let img_item = itemNode.getChildByName("img_item");
              (_crd && resLoader === void 0 ? (_reportPossibleCrUseOfresLoader({
                error: Error()
              }), resLoader) : resLoader).load((_crd && FXJRes === void 0 ? (_reportPossibleCrUseOfFXJRes({
                error: Error()
              }), FXJRes) : FXJRes).Atlas_Game_EmojiProp.bundle, (_crd && FXJRes === void 0 ? (_reportPossibleCrUseOfFXJRes({
                error: Error()
              }), FXJRes) : FXJRes).Atlas_Game_EmojiProp.path, SpriteAtlas, (err, atlas) => {
                if (err) {
                  return;
                }

                if (!img_item || img_item.isValid == false) {
                  return;
                }

                let spriteFrame = atlas.getSpriteFrame(info.icon);

                if (spriteFrame) {
                  let spriteComponent = img_item.getComponent(Sprite);
                  spriteComponent.sizeMode = 0;
                  spriteComponent.spriteFrame = spriteFrame;
                  img_item.active = true;
                }
              });
              let node_price = itemNode.getChildByName("node_price");
              let money_icon = node_price.getChildByName("money_icon");
              let label_name = node_price.getChildByName("label_name");
              node_price.active = true;
              money_icon.active = false;
              label_name.getComponent(Label).string = info.name;
              itemNode["PropData"] = info;
              itemNode.active = true;
            } else {
              if (this.propList.children[i]) {
                this.propList.children[i].destroy();
              }
            }
          }
        }
        /**
         * 点击关闭
         * @param event 
         */


        onClickClose(event) {
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && FXJEvent === void 0 ? (_reportPossibleCrUseOfFXJEvent({
            error: Error()
          }), FXJEvent) : FXJEvent).SYS_PLAY_EFFECT, (_crd && FXJSound === void 0 ? (_reportPossibleCrUseOfFXJSound({
            error: Error()
          }), FXJSound) : FXJSound).CommClick);
          this.node.destroy();
        }
        /**
         * 点击互动道具
         * @param event 
         * @returns 
         */


        onClickProp(event) {
          let node = event.currentTarget;

          if (node["PropData"] == null) {
            return;
          }

          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && FXJEvent === void 0 ? (_reportPossibleCrUseOfFXJEvent({
            error: Error()
          }), FXJEvent) : FXJEvent).SYS_PLAY_EFFECT, (_crd && FXJSound === void 0 ? (_reportPossibleCrUseOfFXJSound({
            error: Error()
          }), FXJSound) : FXJSound).CommClick);
          let info = node["PropData"];
          console.log(info);
          let propsId = info.propID;
          let fromId = (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
            error: Error()
          }), GCache) : GCache).User.getUserMid();
          fromId = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).number_valueOf(fromId);
          let obj = {
            from: fromId,
            to: this._uid
          };
          let text = (_crd && Encrypt === void 0 ? (_reportPossibleCrUseOfEncrypt({
            error: Error()
          }), Encrypt) : Encrypt).JsonEncode(obj);
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && FXJEvent === void 0 ? (_reportPossibleCrUseOfFXJEvent({
            error: Error()
          }), FXJEvent) : FXJEvent).GAME_REQ_EMOJI_PROPS_MSG, propsId, text);
          console.log("点击发送道具:onClickProp"); //自己页面上展示动画	

          let hdInfo = {
            uid: fromId,
            prop_id: propsId,
            to_uid: this._uid
          };
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && FXJEvent === void 0 ? (_reportPossibleCrUseOfFXJEvent({
            error: Error()
          }), FXJEvent) : FXJEvent).VIEW_DESK_ANI_PLAY, (_crd && FXJConstant === void 0 ? (_reportPossibleCrUseOfFXJConstant({
            error: Error()
          }), FXJConstant) : FXJConstant).AnimNormal.HudongProp, hdInfo);
          this.node.destroy();
        }
        /**
         * 玩家退出房间 关闭界面
         * @param event 
         * @param posID 
         */


        receiveUserExitRoom(event, posID) {
          if (posID != null && posID == this._posID) {
            this.node.destroy();
          }
        }
        /**
         * 复制ID
         * @param e 
         */


        onClickCopy(e) {
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && FXJEvent === void 0 ? (_reportPossibleCrUseOfFXJEvent({
            error: Error()
          }), FXJEvent) : FXJEvent).SYS_PLAY_EFFECT, (_crd && FXJSound === void 0 ? (_reportPossibleCrUseOfFXJSound({
            error: Error()
          }), FXJSound) : FXJSound).CommClick);
          let uid = String(this._uid);
          (_crd && Platform === void 0 ? (_reportPossibleCrUseOfPlatform({
            error: Error()
          }), Platform) : Platform).copyClipboard(uid);
        } //销毁


        onDestroy() {}

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "headNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "headFrameNode", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "sexNode", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "nameLabel", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "playIdLabel", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "moneyCoin", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "moneyLabel", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "propList", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "cloneProp", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "manPic", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "womanPic", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=0fcc242c198a1758fdc8d38655b8f750de0acb64.js.map