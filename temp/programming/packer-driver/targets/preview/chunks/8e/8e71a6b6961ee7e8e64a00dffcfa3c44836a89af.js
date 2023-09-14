System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Button, Color, LabelComponent, Node, Sprite, SpriteAtlas, _decorator, instantiate, Utils, resLoader, EventManager, BaseComponent, FXJConstant, FXJEvent, FXJRes, FXJSound, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _crd, ccclass, property, menu, GameChatPrefabCtr;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfUtils(extras) {
    _reporterNs.report("Utils", "../../../framework/Utils", _context.meta, extras);
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

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Button = _cc.Button;
      Color = _cc.Color;
      LabelComponent = _cc.LabelComponent;
      Node = _cc.Node;
      Sprite = _cc.Sprite;
      SpriteAtlas = _cc.SpriteAtlas;
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
      FXJConstant = _unresolved_6.FXJConstant;
    }, function (_unresolved_7) {
      FXJEvent = _unresolved_7.FXJEvent;
    }, function (_unresolved_8) {
      FXJRes = _unresolved_8.FXJRes;
    }, function (_unresolved_9) {
      FXJSound = _unresolved_9.FXJSound;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c8003fk/L5LTpmr+ilib1EA", "GameChatPrefabCtr", undefined);

      __checkObsolete__(['Button', 'Color', 'EventTouch', 'LabelComponent', 'Node', 'Sprite', 'SpriteAtlas', '_decorator', 'instantiate']);

      ({
        ccclass,
        property,
        menu
      } = _decorator);
      /**
       * Name = GameChatPrefabCtr
       * URL = db://assets/package/game/scripts/GameChatPrefabCtr.ts
       * Time = Fri Sep 09 2022 11:52:39 GMT+0800 (中国标准时间)
       * Author = Tomoe
       * 游戏聊天界面
       * Life: onLoad-->onEnable->start->update->lateUpdate->onDisable->onDestroy
       */

      _export("GameChatPrefabCtr", GameChatPrefabCtr = (_dec = ccclass('GameChatPrefabCtr'), _dec2 = menu('prefab/game/GameChatPrefabCtr'), _dec3 = property({
        tooltip: "标签-常用语",
        type: Node
      }), _dec4 = property({
        tooltip: "标签-表情",
        type: Node
      }), _dec5 = property({
        tooltip: "常用语列表",
        type: Node
      }), _dec6 = property({
        tooltip: "表情列表",
        type: Node
      }), _dec7 = property({
        tooltip: "常用语父节点",
        type: Node
      }), _dec8 = property({
        tooltip: "表情父节点",
        type: Node
      }), _dec9 = property({
        tooltip: "常用语节点",
        type: Node
      }), _dec10 = property({
        tooltip: "表情节点",
        type: Node
      }), _dec(_class = _dec2(_class = (_class2 = class GameChatPrefabCtr extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "tabMsg", _descriptor, this);

          _initializerDefineProperty(this, "tabEmoji", _descriptor2, this);

          _initializerDefineProperty(this, "msgList", _descriptor3, this);

          _initializerDefineProperty(this, "emojiList", _descriptor4, this);

          _initializerDefineProperty(this, "msgContent", _descriptor5, this);

          _initializerDefineProperty(this, "emojiContent", _descriptor6, this);

          _initializerDefineProperty(this, "nodeMsg", _descriptor7, this);

          _initializerDefineProperty(this, "nodeEmoji", _descriptor8, this);
        }

        onInitModuleEvent() {}

        onLoad() {
          this.hideMaskNode();
          this.updateView();
          this.changeTag(this.tabMsg);
        }

        /** 隐藏遮罩层 */
        hideMaskNode() {
          var maskNode = this.node.parent.getChildByName("Mask");

          if (maskNode) {
            maskNode.active = false;
          }
        }

        start() {}

        /** 标签切换 */
        changeTag(chooseNode) {
          chooseNode.getComponent(Button).interactable = false;
          chooseNode.getChildByName("Checkmark").active = true;

          if (chooseNode == this.tabMsg) {
            this.tabEmoji.getComponent(Button).interactable = true;
            this.tabEmoji.getChildByName("Checkmark").active = false;
            this.msgList.active = true;
            this.emojiList.active = false;
          } else if (chooseNode == this.tabEmoji) {
            this.tabMsg.getComponent(Button).interactable = true;
            this.tabMsg.getChildByName("Checkmark").active = false;
            this.msgList.active = false;
            this.emojiList.active = true;
          }
        }

        updateView() {
          this.nodeMsg.active = false;
          this.nodeEmoji.active = false;
          this.updateMessageList();
          this.updateEmoList();
        }
        /** 更新消息列表 */


        updateMessageList() {
          var chatTextData = []; //热门聊天语

          var hotTxtConfig = (_crd && FXJConstant === void 0 ? (_reportPossibleCrUseOfFXJConstant({
            error: Error()
          }), FXJConstant) : FXJConstant).ChatText.hot;

          for (var i = 0; i < hotTxtConfig.length; i++) {
            var data = {
              tag: "tag_hot",
              index: String(i + 1),
              text: hotTxtConfig[i]
            };

            if (i == 0) {
              data["isTag"] = true;
            }

            chatTextData.push(data);
          } //经典聊天语


          var classicTxtConfig = (_crd && FXJConstant === void 0 ? (_reportPossibleCrUseOfFXJConstant({
            error: Error()
          }), FXJConstant) : FXJConstant).ChatText.classic;

          for (var _i = 0; _i < classicTxtConfig.length; _i++) {
            var _data = {
              tag: "tag_classic",
              index: "Classic_" + String(_i + 1),
              text: classicTxtConfig[_i]
            };

            if (_i == 0) {
              _data["isTag"] = true;
            }

            chatTextData.push(_data);
          } //麻将聊天语


          var majiangTxtConfig = (_crd && FXJConstant === void 0 ? (_reportPossibleCrUseOfFXJConstant({
            error: Error()
          }), FXJConstant) : FXJConstant).ChatText.majiang;

          for (var _i2 = 0; _i2 < majiangTxtConfig.length; _i2++) {
            var _data2 = {
              tag: "tag_majiang",
              index: "Majiang_" + String(_i2 + 1),
              text: majiangTxtConfig[_i2]
            };

            if (_i2 == 0) {
              _data2["isTag"] = true;
            }

            chatTextData.push(_data2);
          }

          var currowDaysNum = this.msgContent.children.length;

          if (currowDaysNum < chatTextData.length) {
            for (var _i3 = currowDaysNum; _i3 < chatTextData.length; _i3++) {
              var node = instantiate(this.nodeMsg);
              this.msgContent.addChild(node);
            }
          } else if (currowDaysNum > chatTextData.length) {
            for (var _i4 = currowDaysNum - 1; _i4 >= chatTextData.length; _i4--) {
              var _node = this.msgContent.children[_i4];

              if (_node) {
                _node.removeFromParent();
              }
            }
          }

          for (var _i5 = 0; _i5 < this.msgContent.children.length; _i5++) {
            var _node2 = this.msgContent.children[_i5];
            this.updateMsgItem(_node2, _i5, chatTextData[_i5], _i5 == chatTextData.length - 1);
          }
        }
        /** 更新单条消息 */


        updateMsgItem(item, index, data, isEndIndx) {
          if (isEndIndx === void 0) {
            isEndIndx = false;
          }

          item.active = true;
          var buttonComp = item.getComponent(Button);
          item["chatMsg"] = data;
          var tag = item.getChildByName("tag");
          var txtLabel = item.getChildByName("Label");
          var tab_line = item.getChildByName("tab_line");
          tab_line.active = isEndIndx != true;

          if (data) {
            buttonComp.interactable = true;

            if (data["isTag"] && data["tag"]) {
              var frameName = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                error: Error()
              }), Utils) : Utils).string_format((_crd && FXJRes === void 0 ? (_reportPossibleCrUseOfFXJRes({
                error: Error()
              }), FXJRes) : FXJRes).Atlas_Game_Desk.plistKey, data["tag"]);
              (_crd && resLoader === void 0 ? (_reportPossibleCrUseOfresLoader({
                error: Error()
              }), resLoader) : resLoader).load((_crd && FXJRes === void 0 ? (_reportPossibleCrUseOfFXJRes({
                error: Error()
              }), FXJRes) : FXJRes).Atlas_Game_Desk.bundle, (_crd && FXJRes === void 0 ? (_reportPossibleCrUseOfFXJRes({
                error: Error()
              }), FXJRes) : FXJRes).Atlas_Game_Desk.path, SpriteAtlas, (err, atlas) => {
                if (err) {
                  return;
                }

                if (!tag || tag.isValid == false) {
                  return;
                }

                var spriteFrame = atlas.getSpriteFrame(frameName);

                if (spriteFrame) {
                  var spriteComponent = tag.getComponent(Sprite);
                  spriteComponent.sizeMode = 0;
                  spriteComponent.spriteFrame = spriteFrame;
                  tag.active = true;
                }
              });
            } else {
              tag.active = false;
            }

            if (data["text"] != null) {
              var fontColor = {
                tag_role: new Color(163, 138, 231),
                tag_hot: new Color(241, 110, 63),
                tag_classic: new Color(145, 81, 19)
              };
              var labelComponent = txtLabel.getComponent(LabelComponent);
              labelComponent.string = data["text"] || "";

              if (fontColor[data["tag"]]) {
                labelComponent.color = fontColor[data["tag"]];
              }

              txtLabel.active = true;
            }
          } else {
            tag.active = false;
            txtLabel.active = false;
            buttonComp.interactable = false;
          }
        }
        /** 更新 */


        updateEmoList() {
          var emojiDataList = [];

          for (var i = 0; i < 16; i++) {
            var key = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).string_format((_crd && FXJRes === void 0 ? (_reportPossibleCrUseOfFXJRes({
              error: Error()
            }), FXJRes) : FXJRes).Atlas_Game_Desk.plistKey, "emoji_default_" + String(i + 1));
            var resConf = {
              bundle: (_crd && FXJRes === void 0 ? (_reportPossibleCrUseOfFXJRes({
                error: Error()
              }), FXJRes) : FXJRes).Atlas_Game_Desk.bundle,
              path: (_crd && FXJRes === void 0 ? (_reportPossibleCrUseOfFXJRes({
                error: Error()
              }), FXJRes) : FXJRes).Atlas_Game_Desk.path,
              plistKey: key
            };
            emojiDataList.push(resConf);
          }

          console.log("emojiDataList==>", emojiDataList);
          var currowDaysNum = this.emojiContent.children.length;

          if (currowDaysNum < emojiDataList.length) {
            for (var _i6 = currowDaysNum; _i6 < emojiDataList.length; _i6++) {
              var node = instantiate(this.nodeEmoji);
              this.emojiContent.addChild(node);
            }
          } else if (currowDaysNum > emojiDataList.length) {
            for (var _i7 = currowDaysNum - 1; _i7 >= emojiDataList.length; _i7--) {
              var _node3 = this.emojiContent.children[_i7];

              if (_node3) {
                _node3.removeFromParent();
              }
            }
          }

          for (var _i8 = 0; _i8 < this.emojiContent.children.length; _i8++) {
            var _node4 = this.emojiContent.children[_i8];
            this.updateEmojiItem(_node4, _i8, emojiDataList[_i8], _i8 == emojiDataList.length - 1);
          }
        }
        /** 更新单个表情 */


        updateEmojiItem(item, index, data, isEndIndx) {
          if (isEndIndx === void 0) {
            isEndIndx = false;
          }

          var buttonComp = item.getComponent(Button);
          item["chatMsg"] = String(index + 1);

          if (data) {
            buttonComp.interactable = true;
            (_crd && resLoader === void 0 ? (_reportPossibleCrUseOfresLoader({
              error: Error()
            }), resLoader) : resLoader).load(data.bundle, data.path, SpriteAtlas, (err, atlas) => {
              if (err) {
                return;
              }

              if (!item || item.isValid == false) {
                return;
              }

              var spriteFrame = atlas.getSpriteFrame(data.plistKey);

              if (spriteFrame) {
                var spriteComponent = item.getComponent(Sprite);
                spriteComponent.sizeMode = 0;
                spriteComponent.spriteFrame = spriteFrame;
                item.active = true;
              }
            });
          } else {
            buttonComp.interactable = false;
          }
        }
        /** tab标签的点击事件 */


        onClickTabMenu(event) {
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && FXJEvent === void 0 ? (_reportPossibleCrUseOfFXJEvent({
            error: Error()
          }), FXJEvent) : FXJEvent).SYS_PLAY_EFFECT, (_crd && FXJSound === void 0 ? (_reportPossibleCrUseOfFXJSound({
            error: Error()
          }), FXJSound) : FXJSound).CommClick);
          this.changeTag(event.currentTarget);
        } //点击发送快捷短语


        onMsgClick(event) {
          console.log("点击发送快捷短语", event.currentTarget["chatMsg"]);

          if (event.currentTarget["chatMsg"] == null) {
            return;
          } // {
          // 	"tag": "tag_hot",
          // 	"index": "hot_1",
          // 	"text": "搞快点!搞快点!"
          // }


          var param = event.currentTarget["chatMsg"];
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && FXJEvent === void 0 ? (_reportPossibleCrUseOfFXJEvent({
            error: Error()
          }), FXJEvent) : FXJEvent).SYS_PLAY_EFFECT, (_crd && FXJSound === void 0 ? (_reportPossibleCrUseOfFXJSound({
            error: Error()
          }), FXJSound) : FXJSound).CommClick);
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && FXJEvent === void 0 ? (_reportPossibleCrUseOfFXJEvent({
            error: Error()
          }), FXJEvent) : FXJEvent).GAME_REQ_PLAYER_CHAET_MSG, param["index"], param["text"]);
          this.node.destroy();
        } //点击发送表情


        onEmojiClick(event) {
          console.log("点击发送表情", event.currentTarget["chatMsg"]);

          if (event.currentTarget["chatMsg"] == null) {
            return;
          }

          var param = event.currentTarget["chatMsg"];
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && FXJEvent === void 0 ? (_reportPossibleCrUseOfFXJEvent({
            error: Error()
          }), FXJEvent) : FXJEvent).SYS_PLAY_EFFECT, (_crd && FXJSound === void 0 ? (_reportPossibleCrUseOfFXJSound({
            error: Error()
          }), FXJSound) : FXJSound).CommClick);
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && FXJEvent === void 0 ? (_reportPossibleCrUseOfFXJEvent({
            error: Error()
          }), FXJEvent) : FXJEvent).GAME_REQ_PLAYER_CHAET_EMOJI, param);
          this.node.destroy();
        } //点击关闭界面


        onCloseClick(event) {
          console.log("点击事件响应===>>>>关闭界面");
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && FXJEvent === void 0 ? (_reportPossibleCrUseOfFXJEvent({
            error: Error()
          }), FXJEvent) : FXJEvent).SYS_PLAY_EFFECT, (_crd && FXJSound === void 0 ? (_reportPossibleCrUseOfFXJSound({
            error: Error()
          }), FXJSound) : FXJSound).CommClick);
          this.node.destroy();
        } //销毁


        onDestroy() {}

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "tabMsg", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "tabEmoji", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "msgList", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "emojiList", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "msgContent", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "emojiContent", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "nodeMsg", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "nodeEmoji", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=8e71a6b6961ee7e8e64a00dffcfa3c44836a89af.js.map