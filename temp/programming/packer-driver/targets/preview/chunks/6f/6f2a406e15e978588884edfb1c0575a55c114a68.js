System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Vec3, _decorator, tween, Utils, EventManager, BaseComponent, FXJConstant, FXJEvent, FXJRes, FXJSound, NodeUserCtr, NodeUserPrefabCtr, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, NodeNormalAnimCtr;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfinf_SpineAniCreate(extras) {
    _reporterNs.report("inf_SpineAniCreate", "../../../framework/InterfaceDefines", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUtils(extras) {
    _reporterNs.report("Utils", "../../../framework/Utils", _context.meta, extras);
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

  function _reportPossibleCrUseOfNodeUserCtr(extras) {
    _reporterNs.report("NodeUserCtr", "./NodeUserCtr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNodeUserPrefabCtr(extras) {
    _reporterNs.report("NodeUserPrefabCtr", "./NodeUserPrefabCtr", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Vec3 = _cc.Vec3;
      _decorator = _cc._decorator;
      tween = _cc.tween;
    }, function (_unresolved_2) {
      Utils = _unresolved_2.Utils;
    }, function (_unresolved_3) {
      EventManager = _unresolved_3.EventManager;
    }, function (_unresolved_4) {
      BaseComponent = _unresolved_4.BaseComponent;
    }, function (_unresolved_5) {
      FXJConstant = _unresolved_5.FXJConstant;
    }, function (_unresolved_6) {
      FXJEvent = _unresolved_6.FXJEvent;
    }, function (_unresolved_7) {
      FXJRes = _unresolved_7.FXJRes;
    }, function (_unresolved_8) {
      FXJSound = _unresolved_8.FXJSound;
    }, function (_unresolved_9) {
      NodeUserCtr = _unresolved_9.NodeUserCtr;
    }, function (_unresolved_10) {
      NodeUserPrefabCtr = _unresolved_10.NodeUserPrefabCtr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c21b4qO1ulIGoGleCuwiiS1", "NodeNormalAnimCtr", undefined);

      __checkObsolete__(['Node', 'Vec3', '_decorator', 'tween']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("NodeNormalAnimCtr", NodeNormalAnimCtr = (_dec = ccclass('NodeNormalAnimCtr'), _dec2 = property({
        tooltip: "玩家节点",
        type: _crd && NodeUserCtr === void 0 ? (_reportPossibleCrUseOfNodeUserCtr({
          error: Error()
        }), NodeUserCtr) : NodeUserCtr
      }), _dec(_class = (_class2 = class NodeNormalAnimCtr extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "allUserNode", _descriptor, this);

          this._prepareFeiji = null;
        }

        onInitModuleEvent() {
          //播放动画
          this.addModelListener((_crd && FXJEvent === void 0 ? (_reportPossibleCrUseOfFXJEvent({
            error: Error()
          }), FXJEvent) : FXJEvent).VIEW_DESK_ANI_PLAY, this.startPlayAnim); // // 显示角色技能动画和声音
          // this.addModelListener(FXJEvent.VIEW_PLAYER_USE_ROLE_SKILL, this.playRoleSkillAnim);
          // // 显示玩家出牌动画
          // this.addModelListener(FXJEvent.VIEW_PLAYER_OUT_CARD_ANI, this.playerOutCardAni);
          // this.addModelListener(FXJEvent.GAME_HAND_CARDS_RECORD_UPDATE, this.prepareFeiji);
        }

        onLoad() {
          console.log("动画节点出现了");
          this.node.active = true;
        }

        start() {}

        /** 开始播放动画 */
        startPlayAnim(event, animType, pData) {
          switch (animType) {
            case (_crd && FXJConstant === void 0 ? (_reportPossibleCrUseOfFXJConstant({
              error: Error()
            }), FXJConstant) : FXJConstant).AnimNormal.HudongProp:
              this.__showHuDongDaoju(pData);

              break;
            // case FXJConstant.AnimNormal.ZhadanTip:   // 炸弹提示
            //     this.showBombTip(pData);
            //     break;

            default:
              break;
          }
        }
        /** 显示互动道具 */


        __showHuDongDaoju(pData) {
          console.log("动画节点出现了:__showHuDongDaoju"); //uid: 10086089, prop_id: 3, to_uid: 10086845

          if (this.allUserNode.node.children.length == 0) {
            return;
          }

          pData = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).table_verify(pData);
          var animConf = (_crd && FXJConstant === void 0 ? (_reportPossibleCrUseOfFXJConstant({
            error: Error()
          }), FXJConstant) : FXJConstant).HuDongPropConf.anim[(_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).number_valueOf(pData["prop_id"], -1)];

          if (!animConf) {
            return;
          }

          var fromNode = null;
          var toNode = null;
          var fromPos = null;
          var toPos = null;

          for (var i = 0; i < this.allUserNode.node.children.length; i++) {
            var userNode = this.allUserNode.node.children[i];

            var _NodeUserCtr = userNode.getComponent(_crd && NodeUserPrefabCtr === void 0 ? (_reportPossibleCrUseOfNodeUserPrefabCtr({
              error: Error()
            }), NodeUserPrefabCtr) : NodeUserPrefabCtr);

            if (_NodeUserCtr.UID == pData["uid"]) {
              fromNode = userNode;
              fromPos = _NodeUserCtr.PosID;
            }

            if (_NodeUserCtr.UID == pData["to_uid"]) {
              toNode = userNode;
              toPos = _NodeUserCtr.PosID;
            }
          }

          if (fromNode && toNode && fromNode != toNode) {
            var startPos = fromNode.getPosition();
            var endPos = toNode.getPosition();
            var direction = (_crd && FXJConstant === void 0 ? (_reportPossibleCrUseOfFXJConstant({
              error: Error()
            }), FXJConstant) : FXJConstant).HuDongPropConf["direction"][toPos];
            var aniNameStart = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).string_format(animConf["action"], direction);
            var self = this;

            var startPlayerAnim = function startPlayerAnim(actionName, aniName, toPos) {
              var aniNode = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                error: Error()
              }), Utils) : Utils).create_2DNode("HuDongPropAni");
              self.node.addChild(aniNode);
              aniNode.setPosition(toPos);
              var param = {
                resConf: (_crd && FXJRes === void 0 ? (_reportPossibleCrUseOfFXJRes({
                  error: Error()
                }), FXJRes) : FXJRes).Spine_Hddj,
                aniName: aniName,
                parentNode: aniNode,
                trackIndex: 0,
                isLoop: false,
                callStartFunc: () => {
                  if (actionName == "action") {
                    tween(aniNode).to(animConf["time"], {
                      position: new Vec3(endPos.x, endPos.y + 110, endPos.z)
                    }).call(() => {
                      // -- 音效
                      (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
                        error: Error()
                      }), EventManager) : EventManager).dispatch((_crd && FXJEvent === void 0 ? (_reportPossibleCrUseOfFXJEvent({
                        error: Error()
                      }), FXJEvent) : FXJEvent).SYS_PLAY_EFFECT, {
                        bundle: (_crd && FXJSound === void 0 ? (_reportPossibleCrUseOfFXJSound({
                          error: Error()
                        }), FXJSound) : FXJSound).InteractProp.bundle,
                        path: (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                          error: Error()
                        }), Utils) : Utils).string_format((_crd && FXJSound === void 0 ? (_reportPossibleCrUseOfFXJSound({
                          error: Error()
                        }), FXJSound) : FXJSound).InteractProp.path, pData["prop_id"])
                      });
                    }).start();
                  }
                }
              };
              (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
                error: Error()
              }), EventManager) : EventManager).dispatch((_crd && FXJEvent === void 0 ? (_reportPossibleCrUseOfFXJEvent({
                error: Error()
              }), FXJEvent) : FXJEvent).SYS_ANI_PLAY, param);
            };

            console.log("开始位置：===", startPos, endPos);
            startPlayerAnim("action", aniNameStart, new Vec3(startPos.x, startPos.y + 150, startPos.z));

            if (animConf["action_end"]) {
              var aniNameEnd = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                error: Error()
              }), Utils) : Utils).string_format(animConf["action_end"], direction);
              startPlayerAnim("action_end", aniNameEnd, new Vec3(endPos.x, endPos.y + 150, endPos.z));
            }
          }
        } //销毁


        onDestroy() {}

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "allUserNode", [_dec2], {
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
//# sourceMappingURL=6f2a406e15e978588884edfb1c0575a55c114a68.js.map