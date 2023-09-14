System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, UITransform, Vec3, _decorator, tween, Utils, EventManager, BaseComponent, FXJConstant, FXJEvent, FXJRes, FXJUIID, FXJSound, GameViewConfig, NodeUserCtr, NodeUserPrefabCtr, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, NodeNormalAnimCtr;

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

  function _reportPossibleCrUseOfFXJUIID(extras) {
    _reporterNs.report("FXJUIID", "../common/FXJRes", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFXJSound(extras) {
    _reporterNs.report("FXJSound", "../common/FXJSound", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameViewConfig(extras) {
    _reporterNs.report("GameViewConfig", "../common/GameViewConfig", _context.meta, extras);
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
      UITransform = _cc.UITransform;
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
      FXJUIID = _unresolved_7.FXJUIID;
    }, function (_unresolved_8) {
      FXJSound = _unresolved_8.FXJSound;
    }, function (_unresolved_9) {
      GameViewConfig = _unresolved_9.GameViewConfig;
    }, function (_unresolved_10) {
      NodeUserCtr = _unresolved_10.NodeUserCtr;
    }, function (_unresolved_11) {
      NodeUserPrefabCtr = _unresolved_11.NodeUserPrefabCtr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c21b4qO1ulIGoGleCuwiiS1", "NodeNormalAnimCtr", undefined);

      __checkObsolete__(['Camera', 'Node', 'UITransform', 'Vec3', '_decorator', 'tween']);

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
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "allUserNode", _descriptor, this);

          this._prepareFeiji = null;
        }

        onInitModuleEvent() {
          //播放动画
          this.addModelListener((_crd && FXJEvent === void 0 ? (_reportPossibleCrUseOfFXJEvent({
            error: Error()
          }), FXJEvent) : FXJEvent).VIEW_DESK_ANI_PLAY, this.startPlayAnim); // // 显示角色技能动画和声音
          // this.addModelListener(FXJEvent.VIEW_PLAYER_USE_ROLE_SKILL, this.playRoleSkillAnim);
          // 显示玩家出牌动画

          this.addModelListener((_crd && FXJEvent === void 0 ? (_reportPossibleCrUseOfFXJEvent({
            error: Error()
          }), FXJEvent) : FXJEvent).VIEW_OUT_CARD_ANI_PLAY, this.startPlayOutCardAnim); // this.addModelListener(FXJEvent.GAME_HAND_CARDS_RECORD_UPDATE, this.prepareFeiji);
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
          let animConf = (_crd && FXJConstant === void 0 ? (_reportPossibleCrUseOfFXJConstant({
            error: Error()
          }), FXJConstant) : FXJConstant).HuDongPropConf.anim[(_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).number_valueOf(pData["prop_id"], -1)];

          if (!animConf) {
            return;
          }

          let fromNode = null;
          let toNode = null;
          let fromPos = null;
          let toPos = null;

          for (let i = 0; i < this.allUserNode.node.children.length; i++) {
            let userNode = this.allUserNode.node.children[i];
            let NodeUserCtr = userNode.getComponent(_crd && NodeUserPrefabCtr === void 0 ? (_reportPossibleCrUseOfNodeUserPrefabCtr({
              error: Error()
            }), NodeUserPrefabCtr) : NodeUserPrefabCtr);

            if (NodeUserCtr.UID == pData["uid"]) {
              fromNode = userNode;
              fromPos = NodeUserCtr.PosID;
            }

            if (NodeUserCtr.UID == pData["to_uid"]) {
              toNode = userNode;
              toPos = NodeUserCtr.PosID;
            }
          }

          if (fromNode && toNode && fromNode != toNode) {
            let startPos = fromNode.getPosition();
            let endPos = toNode.getPosition();
            let direction = (_crd && FXJConstant === void 0 ? (_reportPossibleCrUseOfFXJConstant({
              error: Error()
            }), FXJConstant) : FXJConstant).HuDongPropConf["direction"][toPos];
            let aniNameStart = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).string_format(animConf["action"], direction);
            let self = this;

            let startPlayerAnim = function (actionName, aniName, toPos) {
              let aniNode = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                error: Error()
              }), Utils) : Utils).create_2DNode("HuDongPropAni");
              self.node.addChild(aniNode);
              aniNode.setPosition(toPos);
              let param = {
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
                      position: new Vec3(endPos.x, endPos.y + 54, endPos.z)
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
              let aniNameEnd = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                error: Error()
              }), Utils) : Utils).string_format(animConf["action_end"], direction);
              startPlayerAnim("action_end", aniNameEnd, new Vec3(endPos.x, endPos.y + 150, endPos.z));
            }
          }
        }
        /** 
         * 播放出牌动画
        */


        startPlayOutCardAnim(event, data, camera3D, camera2D) {
          let aniNode = this.node.getChildByName("OutCardAni");

          if (!this.node.getChildByName("OutCardAni")) {
            aniNode = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).create_2DNode("OutCardAni");
            this.node.addChild(aniNode);
          }

          switch (data.aniType) {
            case (_crd && GameViewConfig === void 0 ? (_reportPossibleCrUseOfGameViewConfig({
              error: Error()
            }), GameViewConfig) : GameViewConfig).AnimType.GameStart:
              {
                let param = {
                  resConf: (_crd && FXJRes === void 0 ? (_reportPossibleCrUseOfFXJRes({
                    error: Error()
                  }), FXJRes) : FXJRes).Spine_Start,
                  aniName: "DJKS",
                  parentNode: aniNode,
                  trackIndex: 0,
                  isLoop: false,
                  callStartFunc: () => {}
                };
                (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
                  error: Error()
                }), EventManager) : EventManager).dispatch((_crd && FXJEvent === void 0 ? (_reportPossibleCrUseOfFXJEvent({
                  error: Error()
                }), FXJEvent) : FXJEvent).SYS_ANI_PLAY, param);
              }
              break;

            case (_crd && GameViewConfig === void 0 ? (_reportPossibleCrUseOfGameViewConfig({
              error: Error()
            }), GameViewConfig) : GameViewConfig).AnimType.GameOver:
              {
                let param = {
                  resConf: (_crd && FXJRes === void 0 ? (_reportPossibleCrUseOfFXJRes({
                    error: Error()
                  }), FXJRes) : FXJRes).Spine_Over,
                  aniName: "djjs",
                  parentNode: aniNode,
                  trackIndex: 0,
                  isLoop: false,
                  toPos: new Vec3(0, 77, 0),
                  callStartFunc: () => {}
                };
                (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
                  error: Error()
                }), EventManager) : EventManager).dispatch((_crd && FXJEvent === void 0 ? (_reportPossibleCrUseOfFXJEvent({
                  error: Error()
                }), FXJEvent) : FXJEvent).SYS_ANI_PLAY, param);
              }
              break;

            case (_crd && GameViewConfig === void 0 ? (_reportPossibleCrUseOfGameViewConfig({
              error: Error()
            }), GameViewConfig) : GameViewConfig).AnimType.Hu:
              {
                let posWorld = camera2D.screenToWorld(camera3D.worldToScreen(data.pos));
                let pos = aniNode.getComponent(UITransform).convertToNodeSpaceAR(posWorld);
                let param = {
                  resConf: (_crd && FXJRes === void 0 ? (_reportPossibleCrUseOfFXJRes({
                    error: Error()
                  }), FXJRes) : FXJRes).Spine_Hu,
                  aniName: "hupai",
                  parentNode: aniNode,
                  trackIndex: 0,
                  isLoop: false,
                  toPos: pos,
                  callStartFunc: () => {
                    (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
                      error: Error()
                    }), EventManager) : EventManager).dispatch((_crd && FXJEvent === void 0 ? (_reportPossibleCrUseOfFXJEvent({
                      error: Error()
                    }), FXJEvent) : FXJEvent).SYS_PLAY_EFFECT, (_crd && FXJSound === void 0 ? (_reportPossibleCrUseOfFXJSound({
                      error: Error()
                    }), FXJSound) : FXJSound).GameHuAni);
                  },
                  callEndFunc: () => {
                    (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
                      error: Error()
                    }), EventManager) : EventManager).dispatch((_crd && FXJEvent === void 0 ? (_reportPossibleCrUseOfFXJEvent({
                      error: Error()
                    }), FXJEvent) : FXJEvent).GAME_OPEN_POPUP, (_crd && FXJUIID === void 0 ? (_reportPossibleCrUseOfFXJUIID({
                      error: Error()
                    }), FXJUIID) : FXJUIID).GameSettlePrefab);
                  }
                };
                (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
                  error: Error()
                }), EventManager) : EventManager).dispatch((_crd && FXJEvent === void 0 ? (_reportPossibleCrUseOfFXJEvent({
                  error: Error()
                }), FXJEvent) : FXJEvent).SYS_ANI_PLAY, param);
              }
              break;

            case (_crd && GameViewConfig === void 0 ? (_reportPossibleCrUseOfGameViewConfig({
              error: Error()
            }), GameViewConfig) : GameViewConfig).AnimType.Hu2:
              {
                let posWorld = camera2D.screenToWorld(camera3D.worldToScreen(data.pos));
                let pos = aniNode.getComponent(UITransform).convertToNodeSpaceAR(posWorld);
                let param = {
                  resConf: (_crd && FXJRes === void 0 ? (_reportPossibleCrUseOfFXJRes({
                    error: Error()
                  }), FXJRes) : FXJRes).Spine_Hu,
                  aniName: "hupai2",
                  parentNode: aniNode,
                  trackIndex: 0,
                  isLoop: false,
                  toPos: pos,
                  callStartFunc: () => {
                    (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
                      error: Error()
                    }), EventManager) : EventManager).dispatch((_crd && FXJEvent === void 0 ? (_reportPossibleCrUseOfFXJEvent({
                      error: Error()
                    }), FXJEvent) : FXJEvent).SYS_PLAY_EFFECT, (_crd && FXJSound === void 0 ? (_reportPossibleCrUseOfFXJSound({
                      error: Error()
                    }), FXJSound) : FXJSound).GameDianPaoAni);
                  }
                };
                (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
                  error: Error()
                }), EventManager) : EventManager).dispatch((_crd && FXJEvent === void 0 ? (_reportPossibleCrUseOfFXJEvent({
                  error: Error()
                }), FXJEvent) : FXJEvent).SYS_ANI_PLAY, param);
              }
              break;

            case (_crd && GameViewConfig === void 0 ? (_reportPossibleCrUseOfGameViewConfig({
              error: Error()
            }), GameViewConfig) : GameViewConfig).AnimType.Peng:
              {
                let posWorld = camera2D.screenToWorld(camera3D.worldToScreen(data.pos));
                let pos = aniNode.getComponent(UITransform).convertToNodeSpaceAR(posWorld);
                let param = {
                  resConf: (_crd && FXJRes === void 0 ? (_reportPossibleCrUseOfFXJRes({
                    error: Error()
                  }), FXJRes) : FXJRes).Spine_Hu,
                  aniName: "peng_yanwu",
                  parentNode: aniNode,
                  trackIndex: 0,
                  isLoop: false,
                  toPos: pos,
                  callStartFunc: () => {// EventManager.dispatch(FXJEvent.SYS_PLAY_EFFECT, FXJSound.GameHuAni);
                  }
                };
                (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
                  error: Error()
                }), EventManager) : EventManager).dispatch((_crd && FXJEvent === void 0 ? (_reportPossibleCrUseOfFXJEvent({
                  error: Error()
                }), FXJEvent) : FXJEvent).SYS_ANI_PLAY, param);
              }
              break;

            default:
              break;
          }
        } //销毁


        onDestroy() {}

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "allUserNode", [_dec2], {
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
//# sourceMappingURL=39f2a750693c8bb657bda14d0f675c35e8f57c0b.js.map