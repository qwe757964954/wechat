System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, animation, Animation, AnimationClip, instantiate, Node, Tween, Vec3, _decorator, GCache, EventManager, Utils, BaseComponent, OperationMgr, OperationResultMgr, PlayerMgr, OPCode, FXJEvent, FXJSound, GameEvent, CardUtil, NodeCardCtr, drawCardDisRatio, MjSize, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, MyPlayerCard;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfGCache(extras) {
    _reporterNs.report("GCache", "../../../../cache/GCache", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventManager(extras) {
    _reporterNs.report("EventManager", "../../../../framework/manager/EventManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUtils(extras) {
    _reporterNs.report("Utils", "../../../../framework/Utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../../../framework/vc/BaseComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfOperationMgr(extras) {
    _reporterNs.report("OperationMgr", "../../cache/OperationMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfOperationResultMgr(extras) {
    _reporterNs.report("OperationResultMgr", "../../cache/OperationResultMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerMgr(extras) {
    _reporterNs.report("PlayerMgr", "../../cache/PlayerMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfOPCode(extras) {
    _reporterNs.report("OPCode", "../../common/FXJConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFXJEvent(extras) {
    _reporterNs.report("FXJEvent", "../../common/FXJEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFXJSound(extras) {
    _reporterNs.report("FXJSound", "../../common/FXJSound", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameEvent(extras) {
    _reporterNs.report("GameEvent", "../../common/GameEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGame(extras) {
    _reporterNs.report("Game", "../../common/idl/Game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCardUtil(extras) {
    _reporterNs.report("CardUtil", "../../util/CardUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNodeCardCtr(extras) {
    _reporterNs.report("NodeCardCtr", "../NodeCardCtr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfdrawCardDisRatio(extras) {
    _reporterNs.report("drawCardDisRatio", "./CardConfigs", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMjSize(extras) {
    _reporterNs.report("MjSize", "./CardConfigs", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      animation = _cc.animation;
      Animation = _cc.Animation;
      AnimationClip = _cc.AnimationClip;
      instantiate = _cc.instantiate;
      Node = _cc.Node;
      Tween = _cc.Tween;
      Vec3 = _cc.Vec3;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      GCache = _unresolved_2.GCache;
    }, function (_unresolved_3) {
      EventManager = _unresolved_3.EventManager;
    }, function (_unresolved_4) {
      Utils = _unresolved_4.Utils;
    }, function (_unresolved_5) {
      BaseComponent = _unresolved_5.BaseComponent;
    }, function (_unresolved_6) {
      OperationMgr = _unresolved_6.OperationMgr;
    }, function (_unresolved_7) {
      OperationResultMgr = _unresolved_7.OperationResultMgr;
    }, function (_unresolved_8) {
      PlayerMgr = _unresolved_8.PlayerMgr;
    }, function (_unresolved_9) {
      OPCode = _unresolved_9.OPCode;
    }, function (_unresolved_10) {
      FXJEvent = _unresolved_10.FXJEvent;
    }, function (_unresolved_11) {
      FXJSound = _unresolved_11.FXJSound;
    }, function (_unresolved_12) {
      GameEvent = _unresolved_12.GameEvent;
    }, function (_unresolved_13) {
      CardUtil = _unresolved_13.CardUtil;
    }, function (_unresolved_14) {
      NodeCardCtr = _unresolved_14.NodeCardCtr;
    }, function (_unresolved_15) {
      drawCardDisRatio = _unresolved_15.drawCardDisRatio;
      MjSize = _unresolved_15.MjSize;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "3d0c77YRXRBtJNggOQz6Yof", "MyPlayerCard", undefined);

      __checkObsolete__(['animation', 'Animation', 'AnimationClip', 'EventTouch', 'instantiate', 'Node', 'Tween', 'Vec3', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Name = MyPlayer
       * URL = db://assets/package/game/scripts/MyPlayer.ts
       * Time = Fri Aug 11 2023 11:08:16 GMT+0800 (中国标准时间)
       * Author = qwe757964
       *
       * Life: onLoad-->onInitModuleEvent-->onEnable->start->update->lateUpdate->onDisable->onDestroy
       * 
       */

      _export("MyPlayerCard", MyPlayerCard = (_dec = ccclass('MyPlayerCard'), _dec2 = property({
        tooltip: "手牌模板",
        type: Node
      }), _dec(_class = (_class2 = class MyPlayerCard extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor() {
          super(...arguments);
          this.selectedNode = null;
          this._drawCardNode = null;
          this._mjList = [];
          this.myHandCardY = 0;

          _initializerDefineProperty(this, "nodeCardTemplate", _descriptor, this);

          this._slotIndex = void 0;
          this._drawByte = void 0;
          this._playHandCardCb = void 0;
          this._isTouched = void 0;
          this._touchNode = null;
          this.moveDistance = 0;
          this.thresholdDistance = 0.5;
          this.startPosition = new Vec3();
          this.touchNodePos = new Vec3();
        }

        get drawByte() {
          return this._drawByte;
        }

        set drawByte(newValue) {
          this._drawByte = newValue;
        }
        /** override 初始化模块事件 */


        onInitModuleEvent() {}

        onLoad() {
          this.node.on(Node.EventType.TOUCH_START, this.onTouchStart, this);
          this.node.on(Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
          this.node.on(Node.EventType.TOUCH_END, this.onTouchEnd, this);
          this.node.on(Node.EventType.TOUCH_CANCEL, this.onTouchCancel, this);
        } //移除对应的索引的牌去构成stack, 刷新整体node的位置


        stackAnim(indexList, tByte, insertIndex, cb) {
          var pos = new Vec3();

          if (indexList.length === 2) {
            this.removeHandCard(indexList, true); //碰牌直接移除两张牌, 刷新位置

            pos = this.node.getPosition(); // Vec3.add(pos, new Vec3(0, 0, 0), new Vec3(0, 0, 0));

            this.node.setPosition(pos);
          } else if (indexList.length == 3) {
            this.removeHandCard(indexList, true); //杠牌直接移除三张牌, 刷新位置

            pos = this.node.getPosition(); // Vec3.add(pos, new Vec3(0, 0, 0), new Vec3(0, 0, 0));

            this.node.setPosition(pos);
            return;
          } else if (indexList.length == 4 && insertIndex !== null) {
            insertIndex = insertIndex - indexList.length;
            this.removeHandCard(indexList);
            this.removeDrawCard();
            this.addHandCard(tByte, insertIndex);
            pos = this.node.getPosition(); // Vec3.add(pos, new Vec3(0, 0, 0), new Vec3(0, 0, 0));

            this.node.setPosition(pos);
            return;
          }
          /*
          //吃碰时候移除两张,平移一张到抽牌区 
          let startPos = pos;
          let endPos = new Vec3();
          Vec3.add(endPos, startPos, startPos) 
          
          let ac = new AnimationClip()
          ac.duration = 0.1
          let track = new animation.VectorTrack();
          track.componentsCount = 3;
          track.path = new animation.TrackPath().toProperty("position")
          let [x] = track.channels();
                  x.curve.assignSorted([
              [0, {value: startPos.x}],
              [0.1, {value: endPos.x}]
          ])
           let animCom: Animation;
           if (this.node.getComponent(Animation) == null)
          {
              animCom = this.node.addComponent(Animation)
          }
          else
          {
              animCom = this.node.getComponent(Animation)
              animCom.removeAll(Animation.EventType.FINISHED)
          } 
           if(cb)
          {
              animCom.on(Animation.EventType.FINISHED, cb, this)
              // this._stackCb = cb
          }
           ac.addTrack(track)
          animCom.defaultClip = ac
          animCom.play(); 
          */


          this._drawCardNode = this._mjList.pop();
          this.drawByte = (_crd && PlayerMgr === void 0 ? (_reportPossibleCrUseOfPlayerMgr({
            error: Error()
          }), PlayerMgr) : PlayerMgr).getInstance().getLastMyhands();

          var startPosDraw = this._drawCardNode.getPosition();

          var endPosDraw = new Vec3(startPosDraw.x + (_crd && MjSize === void 0 ? (_reportPossibleCrUseOfMjSize({
            error: Error()
          }), MjSize) : MjSize).width, startPosDraw.y, startPosDraw.z);

          this._drawCardNode.setPosition(endPosDraw);

          var acDraw = new AnimationClip();
          acDraw.duration = 0.1;
          var trackDraw = new animation.VectorTrack();
          trackDraw.componentsCount = 3;
          trackDraw.path = new animation.TrackPath().toProperty("position");
          var [drawX] = trackDraw.channels();
          drawX.curve.assignSorted([[0, {
            value: startPosDraw.x
          }], [0.1, {
            value: endPosDraw.x
          }]]);
          var animDrawCom;

          if (this._drawCardNode.getComponent(Animation) == null) {
            animDrawCom = this._drawCardNode.addComponent(Animation);
          } else {
            animDrawCom = this._drawCardNode.getComponent(Animation);
            animDrawCom.removeAll(Animation.EventType.FINISHED);
          }

          if (cb) {
            animDrawCom.on(Animation.EventType.FINISHED, cb, this); // this._stackCb = cb
          }

          acDraw.addTrack(trackDraw);
          animDrawCom.defaultClip = acDraw;
          animDrawCom.play();
        } //移除一张手牌, 没有动画时的接口, 未来会使用动画接口出牌


        removeDrawCard() {
          if (this._drawCardNode) {
            this._drawCardNode.removeFromParent();

            this._drawCardNode = null;
          } else {
            console.log("当前没有渲染牌,无法移除");
          }
        } //添加一张牌到手牌的指定位置


        addHandCard(tByte, index) {
          if (index > this._mjList.length) {
            console.log("索引大于当前渲染手牌的数量请检查逻辑", index);
            return;
          }

          if (this._mjList.length >= 13) {
            console.log("当前渲染手牌数量已满--> 13", index);
            return;
          }

          var insertNode = instantiate(this.nodeCardTemplate);
          var cardValue = tByte;
          insertNode.getComponent(_crd && NodeCardCtr === void 0 ? (_reportPossibleCrUseOfNodeCardCtr({
            error: Error()
          }), NodeCardCtr) : NodeCardCtr).setCardByte(cardValue);
          insertNode.active = true;
          insertNode.name = "MJBlock" + index;
          this.node.addChild(insertNode);

          this._mjList.splice(index, 0, insertNode); // 在指定索引处插入对象


          this.updateHandPositionAndName();
        } //抓一张牌


        drawCard(tByte, hiden) {
          this.drawByte = tByte;
          this._drawCardNode = instantiate(this.nodeCardTemplate);

          this._drawCardNode.getComponent(_crd && NodeCardCtr === void 0 ? (_reportPossibleCrUseOfNodeCardCtr({
            error: Error()
          }), NodeCardCtr) : NodeCardCtr).setCardByte(tByte);

          this._drawCardNode.active = true;
          this.node.addChild(this._drawCardNode);
          this.cardAddTouchEvent(this._drawCardNode);

          this._drawCardNode.setPosition(this.getLastPosition() + (_crd && drawCardDisRatio === void 0 ? (_reportPossibleCrUseOfdrawCardDisRatio({
            error: Error()
          }), drawCardDisRatio) : drawCardDisRatio) * (_crd && MjSize === void 0 ? (_reportPossibleCrUseOfMjSize({
            error: Error()
          }), MjSize) : MjSize).width, 0, 0);

          if (hiden) {
            this._drawCardNode.setRotationFromEuler(90, 0, 0);
          }
        }

        showDrawCard() {
          var duration = 0.3;
          var rotaionEuler = new Vec3(this._drawCardNode.eulerAngles);
          var pos = new Vec3(this._drawCardNode.getPosition());
          var point = new Vec3(pos.x, 0, 0);
          var tweenTargetVec3 = new Vec3(0, 0, 0);
          var tw = new Tween(tweenTargetVec3).by(duration, new Vec3(0, 0, 0), {
            onUpdate: (target, ratio) => {
              (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                error: Error()
              }), Utils) : Utils).rotate3DAroundByPositionRotaion(this._drawCardNode, pos, rotaionEuler, point, target, true);
            }
          }).by(duration, new Vec3(-90, 0, 0), {
            onUpdate: (target, ratio) => {
              (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                error: Error()
              }), Utils) : Utils).rotate3DAroundByPositionRotaion(this._drawCardNode, pos, rotaionEuler, point, target, true);
            }
          }).start();
        }

        updateHandPositionAndName(hiden) {
          this._mjList = this._mjList.filter(item => item !== null && item !== undefined);

          for (var i = 0; i < this._mjList.length; i++) {
            var handNode = this._mjList[i];
            handNode.name = "MJBlock" + i;
            handNode.getComponent(_crd && NodeCardCtr === void 0 ? (_reportPossibleCrUseOfNodeCardCtr({
              error: Error()
            }), NodeCardCtr) : NodeCardCtr).setCardByte((_crd && PlayerMgr === void 0 ? (_reportPossibleCrUseOfPlayerMgr({
              error: Error()
            }), PlayerMgr) : PlayerMgr).getInstance().getHandCardByIndex(i));
            this.cardAddTouchEvent(handNode);
            handNode.setPosition((_crd && MjSize === void 0 ? (_reportPossibleCrUseOfMjSize({
              error: Error()
            }), MjSize) : MjSize).width / 2 + (_crd && MjSize === void 0 ? (_reportPossibleCrUseOfMjSize({
              error: Error()
            }), MjSize) : MjSize).width * i, 0, 0);

            if (hiden) {
              handNode.setRotationFromEuler(90, 0, 0);
            }
          }
        }

        playAnimOfShow() {
          var _this = this;

          var duration = 0.3;

          var _loop = function _loop(i) {
            var rotaionEuler = new Vec3(_this._mjList[i].eulerAngles);
            var pos = new Vec3(_this._mjList[i].getPosition());
            var point = new Vec3(pos.x, 0, 0);
            var tweenTargetVec3 = new Vec3(0, 0, 0);
            var tw = new Tween(tweenTargetVec3).by(duration, new Vec3(0, 0, 0), {
              onUpdate: (target, ratio) => {
                (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                  error: Error()
                }), Utils) : Utils).rotate3DAroundByPositionRotaion(_this._mjList[i], pos, rotaionEuler, point, target, true);
              }
            }).by(duration, new Vec3(-90, 0, 0), {
              onUpdate: (target, ratio) => {
                (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                  error: Error()
                }), Utils) : Utils).rotate3DAroundByPositionRotaion(_this._mjList[i], pos, rotaionEuler, point, target, true);
              }
            }).start();
          };

          for (var i = 0; i < this._mjList.length; i++) {
            _loop(i);
          }

          if (this._drawCardNode) {
            this.showDrawCard();
          }
        }

        showdownDrawCard() {
          var duration = 0.3;
          var rotaionEuler = new Vec3(this._drawCardNode.eulerAngles);
          var pos = new Vec3(this._drawCardNode.getPosition());
          var point = new Vec3(pos.x, 0, 0);
          var tweenTargetVec3 = new Vec3(0, 0, 0);
          var tw = new Tween(tweenTargetVec3).by(duration, new Vec3(-90, 0, 0), {
            onUpdate: (target, ratio) => {
              (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                error: Error()
              }), Utils) : Utils).rotate3DAroundByPositionRotaion(this._drawCardNode, pos, rotaionEuler, point, target, true);
            }
          }).start();
        }

        showdownCard() {
          var _this2 = this;

          var duration = 0.3;

          var _loop2 = function _loop2(i) {
            var rotaionEuler = new Vec3(_this2._mjList[i].eulerAngles);
            var pos = new Vec3(_this2._mjList[i].getPosition());
            var point = new Vec3(pos.x, 0, 0);
            var tweenTargetVec3 = new Vec3(0, 0, 0);
            var tw = new Tween(tweenTargetVec3).by(duration, new Vec3(-90, 0, 0), {
              onUpdate: (target, ratio) => {
                (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                  error: Error()
                }), Utils) : Utils).rotate3DAroundByPositionRotaion(_this2._mjList[i], pos, rotaionEuler, point, target, true);
              }
            }).start();
          };

          for (var i = 0; i < this._mjList.length; i++) {
            _loop2(i);
          }

          if (this._drawCardNode) {
            this.showdownDrawCard();
          }
        }

        cardAddTouchEvent(handNode) {
          // handNode.off(Node.EventType.TOUCH_END);
          handNode.off(Node.EventType.TOUCH_START);
          handNode.on(Node.EventType.TOUCH_START, event => {
            this._touchNode = event.target;
            this.touchNodePos = this._touchNode.getPosition();
          }, this); // handNode.on(Node.EventType.TOUCH_END, (event) => {
          // this.playSelectAnim(event.target);
          // }, this);
        }

        cancelOpcardTouch(opcard) {
          this._mjList = this._mjList.filter(item => item !== null && item !== undefined);
          var inList = false;

          for (var i = 0; i < this._mjList.length; i++) {
            var handNode = this._mjList[i];
            var byte = handNode.getComponent(_crd && NodeCardCtr === void 0 ? (_reportPossibleCrUseOfNodeCardCtr({
              error: Error()
            }), NodeCardCtr) : NodeCardCtr).byte;

            if ((_crd && CardUtil === void 0 ? (_reportPossibleCrUseOfCardUtil({
              error: Error()
            }), CardUtil) : CardUtil).getMajiangValue(byte) === (_crd && CardUtil === void 0 ? (_reportPossibleCrUseOfCardUtil({
              error: Error()
            }), CardUtil) : CardUtil).getMajiangValue(opcard)) {
              handNode.off(Node.EventType.TOUCH_START);
              handNode.getComponent(_crd && NodeCardCtr === void 0 ? (_reportPossibleCrUseOfNodeCardCtr({
                error: Error()
              }), NodeCardCtr) : NodeCardCtr).setBlack(true);
              inList = true;
              break;
            }
          }

          if (!inList && (_crd && PlayerMgr === void 0 ? (_reportPossibleCrUseOfPlayerMgr({
            error: Error()
          }), PlayerMgr) : PlayerMgr).getInstance().includesMyhands((_crd && OperationResultMgr === void 0 ? (_reportPossibleCrUseOfOperationResultMgr({
            error: Error()
          }), OperationResultMgr) : OperationResultMgr).getInstance().opCard)) {
            this._drawCardNode.off(Node.EventType.TOUCH_START);

            this._drawCardNode.getComponent(_crd && NodeCardCtr === void 0 ? (_reportPossibleCrUseOfNodeCardCtr({
              error: Error()
            }), NodeCardCtr) : NodeCardCtr).setBlack(true);
          }
        }

        updateOpcardTouch() {
          this._mjList = this._mjList.filter(item => item !== null && item !== undefined);

          for (var i = 0; i < this._mjList.length; i++) {
            var handNode = this._mjList[i];
            this.cardAddTouchEvent(handNode);
            handNode.getComponent(_crd && NodeCardCtr === void 0 ? (_reportPossibleCrUseOfNodeCardCtr({
              error: Error()
            }), NodeCardCtr) : NodeCardCtr).setBlack(false);
          }
        }

        onTouchStart(event) {
          this._isTouched = true;

          if (this._touchNode === null) {
            return;
          }

          var location = event.getLocation();
          this.startPosition = new Vec3(location.x, location.y, 0);
        }

        onTouchMove(event) {
          this._isTouched = true;

          if (this._touchNode === null) {
            return;
          }

          var pos = this._touchNode.getPosition();

          var location = event.getDelta();
          Vec3.add(pos, pos, new Vec3(location.x, location.y, 0));

          this._touchNode.setPosition(pos);

          var endPos = this._touchNode.getPosition();

          this.moveDistance = endPos.subtract(this.touchNodePos).length();
        }

        onTouchEnd(event) {
          if (this._touchNode === null) {
            return;
          } // if (this.moveDistance  > this.thresholdDistance && GCache.Desk.turnMe) {
          // 出牌
          // let byte:number = this._touchNode.getComponent(NodeCardCtr).byte;
          // this.onSendCard(byte);
          // } else {
          // 放回原处
          // if(this._touchNode){
          //     let posx = this.getSelectNodePosx(this._touchNode);
          //     this._touchNode.setPosition(posx,0,0);
          // }
          // }


          this.playSelectAnim(this._touchNode);
          this._touchNode = null;
          this._isTouched = false;
          this.moveDistance = 0;
        }

        onTouchCancel(event) {
          if (this._touchNode === null) {
            return;
          }

          var posx = this.getSelectNodePosx(this._touchNode);

          this._touchNode.setPosition(posx, 0, 0);

          this._touchNode = null;
          this._isTouched = false;
          this.moveDistance = 0;
        } //将抓上来的牌打出去


        playDrawCard(cb) {
          var toOutCard = this._drawCardNode;
          toOutCard.removeFromParent();
          this._drawCardNode = null;
        }

        playCardFromHandAnim(index, rmDraw, cb) {
          this._slotIndex = index;
          var toOutCard = this._mjList[index];

          if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).isNotNull(toOutCard) && rmDraw === false) {
            this._mjList[index] = null;
            toOutCard.removeFromParent();
            return true;
          } else if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).isNotNull(this._drawCardNode) || rmDraw === true) {
            this._drawCardNode.removeFromParent();

            this._drawCardNode = null;
            return false;
          }
        } //从手牌移除指定位置的一张或者多张牌，并且出牌之后，如果抓牌未移除，需要把抓的牌放到手牌中，抓牌为空


        removeHandCard(indexList, updateCard) {
          if (updateCard === void 0) {
            updateCard = false;
          }

          indexList.sort((a, b) => b - a);

          for (var index of indexList) {
            if (index < this._mjList.length) {
              var removeNode = this._mjList.splice(index, 1);

              removeNode[0].removeFromParent();
            } else {
              console.log("索引大于等于当前渲染手牌的数量请检查逻辑", index);
              return;
            }
          }

          if (updateCard) {
            this.updateHandPositionAndName();
          }
        }

        makeSlotAnim(index) {
          if (this._slotIndex == -1 || this._mjList[this._slotIndex] != null) {
            console.log("当前没有空的手牌位置,无法空出对应的索引位置", this._slotIndex, index);
            return;
          }

          if (this._slotIndex < index) // 2空  4
            {
              for (var i = this._slotIndex + 1; i <= index; i++) {
                var ac = new AnimationClip();
                ac.duration = 0.2;
                var track = new animation.VectorTrack();
                track.componentsCount = 3;
                track.path = new animation.TrackPath().toProperty("position");
                var [x, _, z] = track.channels();
                var mjNode = this._mjList[i];
                var startPos = mjNode.getPosition();
                var endPos = this.getHandPosition(i - 1);
                x.curve.assignSorted([[0, {
                  value: startPos.x
                }], [0.2, {
                  value: endPos.x
                }]]);
                z.curve.assignSorted([[0, {
                  value: startPos.z
                }], [0.2, {
                  value: endPos.z
                }]]);
                var animCom = mjNode.addComponent(Animation);
                ac.addTrack(track);
                animCom.defaultClip = ac;
                animCom.play();
              }

              for (var _i = this._slotIndex; _i < index; _i++) {
                this._mjList[_i] = this._mjList[_i + 1]; // 同步平移在列表内的位置
              }
            } else if (index < this._slotIndex) // 2  4空
            {
              for (var _i2 = index; _i2 < this._slotIndex; _i2++) {
                var _ac = new AnimationClip();

                _ac.duration = 0.2;

                var _track = new animation.VectorTrack();

                _track.componentsCount = 3;
                _track.path = new animation.TrackPath().toProperty("position");

                var [_x, _2, _z] = _track.channels();

                var _mjNode = this._mjList[_i2];

                var _startPos = _mjNode.getPosition();

                var _endPos = this.getHandPosition(_i2 + 1);

                _x.curve.assignSorted([[0, {
                  value: _startPos.x
                }], [0.2, {
                  value: _endPos.x
                }]]);

                _z.curve.assignSorted([[0, {
                  value: _startPos.z
                }], [0.2, {
                  value: _endPos.z
                }]]);

                var _animCom = _mjNode.addComponent(Animation);

                _ac.addTrack(_track);

                _animCom.defaultClip = _ac;

                _animCom.play();
              }

              for (var _i3 = this._slotIndex; _i3 > index; _i3--) {
                this._mjList[_i3] = this._mjList[_i3 - 1]; // 同步平移在列表内的位置
              }
            }

          this._mjList[index] = null; //平移后空出来的列表位置

          this._slotIndex = index;
        }

        drawCardToSlot(cb) {
          if (this._drawCardNode == null) {
            console.log("没有渲染抽牌节点, 抽牌到手牌动画失败");
            return;
          }

          this._mjList[this._slotIndex] = this._drawCardNode;
          this._drawCardNode = null;

          var startPos = this._mjList[this._slotIndex].getPosition();

          var endPos = this.getHandPosition(this._slotIndex);
          var ac = new AnimationClip();
          ac.duration = 0.5;
          var track = new animation.VectorTrack();
          track.componentsCount = 3;
          track.path = new animation.TrackPath().toProperty("position");
          var [posx, posy, posz] = track.channels();
          posx.curve.assignSorted([[0, {
            easingMethod: 2,
            value: startPos.x
          }], [0.1, {
            easingMethod: 2,
            value: startPos.x
          }], [0.4, {
            easingMethod: 2,
            value: endPos.x
          }], [0.5, {
            easingMethod: 2,
            value: endPos.x
          }]]);
          posy.curve.assignSorted([[0, {
            easingMethod: 2,
            value: startPos.y
          }], [0.1, {
            easingMethod: 2,
            value: startPos.y + 20
          }], [0.4, {
            easingMethod: 2,
            value: startPos.y + 20
          }], [0.5, {
            easingMethod: 2,
            value: endPos.y
          }]]);
          posz.curve.assignSorted([[0, {
            easingMethod: 2,
            value: startPos.z
          }], [0.1, {
            easingMethod: 2,
            value: startPos.z - 3.5
          }], [0.4, {
            easingMethod: 2,
            value: startPos.z - 3.5
          }], [0.5, {
            easingMethod: 2,
            value: endPos.z
          }]]);
          var animCom;

          if (this._mjList[this._slotIndex].getComponent(Animation) == null) {
            animCom = this._mjList[this._slotIndex].addComponent(Animation);
          } else {
            animCom = this._mjList[this._slotIndex].getComponent(Animation);
            animCom.removeAll(Animation.EventType.FINISHED);
          }

          if (cb) {
            animCom.on(Animation.EventType.FINISHED, cb, this);
            this._playHandCardCb = cb;
          }

          ac.addTrack(track);
          animCom.defaultClip = ac;
          animCom.play();
        }

        getListBytes() {
          var bytes = [];

          for (var i = 0; i < this._mjList.length; i++) {
            var node_byte = this._mjList[i].getComponent(_crd && NodeCardCtr === void 0 ? (_reportPossibleCrUseOfNodeCardCtr({
              error: Error()
            }), NodeCardCtr) : NodeCardCtr).byte;

            bytes.push(node_byte);
          }

          return bytes;
        }

        useByteFindIndexs(bytes) {
          var indexs = [];
          bytes.forEach(byte => {
            for (var i = 0; i < this._mjList.length; i++) {
              var node_byte = this._mjList[i].getComponent(_crd && NodeCardCtr === void 0 ? (_reportPossibleCrUseOfNodeCardCtr({
                error: Error()
              }), NodeCardCtr) : NodeCardCtr).byte;

              if (byte === node_byte) {
                indexs.push(i);
                break;
              }
            }
          });
          return indexs;
        }

        getNodeIndex(node) {
          return this._mjList.findIndex(theNode => theNode == node, this);
        }

        addHandCards(valueList, active, stackCount, hasDrawCard) {
          if (hasDrawCard === void 0) {
            hasDrawCard = false;
          }

          var handCardCount = valueList.length;

          if (hasDrawCard) {
            handCardCount = valueList.length - 1;
          }

          for (var i = 0; i < handCardCount; i++) {
            var mjNode = instantiate(this.nodeCardTemplate);
            var cardValue = valueList[i];
            mjNode.getComponent(_crd && NodeCardCtr === void 0 ? (_reportPossibleCrUseOfNodeCardCtr({
              error: Error()
            }), NodeCardCtr) : NodeCardCtr).setCardByte(cardValue);
            mjNode.active = true;

            this._mjList.push(mjNode);

            this.node.addChild(mjNode);
          }

          this.updateHandPositionAndName(true);

          if (hasDrawCard) {
            this.drawCard(valueList[handCardCount], true);
            this._drawCardNode.active = active;
          }
        }

        getHandPosition(index) {
          return new Vec3((_crd && MjSize === void 0 ? (_reportPossibleCrUseOfMjSize({
            error: Error()
          }), MjSize) : MjSize).width / 2 + (_crd && MjSize === void 0 ? (_reportPossibleCrUseOfMjSize({
            error: Error()
          }), MjSize) : MjSize).width * index, 0, 0);
        }

        getHandPositionX(index) {
          return (_crd && MjSize === void 0 ? (_reportPossibleCrUseOfMjSize({
            error: Error()
          }), MjSize) : MjSize).width / 2 + (_crd && MjSize === void 0 ? (_reportPossibleCrUseOfMjSize({
            error: Error()
          }), MjSize) : MjSize).width * index;
        }

        getLastPosition() {
          return (_crd && MjSize === void 0 ? (_reportPossibleCrUseOfMjSize({
            error: Error()
          }), MjSize) : MjSize).width / 2 + (_crd && MjSize === void 0 ? (_reportPossibleCrUseOfMjSize({
            error: Error()
          }), MjSize) : MjSize).width * (this._mjList.length - 1);
        }

        getSelectNodePosx(node) {
          var posx = 0;

          if (node.name && node.name.includes("MJBlock")) {
            posx = this.getHandPositionX(parseInt(node.name.replace("MJBlock", "")));
          } else {
            posx = this.getLastPosition() + (_crd && drawCardDisRatio === void 0 ? (_reportPossibleCrUseOfdrawCardDisRatio({
              error: Error()
            }), drawCardDisRatio) : drawCardDisRatio) * (_crd && MjSize === void 0 ? (_reportPossibleCrUseOfMjSize({
              error: Error()
            }), MjSize) : MjSize).width;
          }

          return posx;
        }

        playSelectAnim(node) {
          if (this.selectedNode) {
            this.playUnselectAnim(this.selectedNode);

            if (this.selectedNode == node) {
              if ((_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
                error: Error()
              }), GCache) : GCache).Desk.turnMe) {
                var byte = this.selectedNode.getComponent(_crd && NodeCardCtr === void 0 ? (_reportPossibleCrUseOfNodeCardCtr({
                  error: Error()
                }), NodeCardCtr) : NodeCardCtr).byte;
                this.onSendCard(byte);
              }

              this.selectedNode = null;
              return;
            }
          }

          this.selectedNode = node;
          console.log(this.selectedNode, node);
          var posx = this.getSelectNodePosx(this.selectedNode);
          var ac = new AnimationClip();
          ac.duration = 0.1;
          var trackPos = new animation.VectorTrack();
          trackPos.componentsCount = 3;
          trackPos.path = new animation.TrackPath().toProperty("position");
          var [x, y, z] = trackPos.channels();
          x.curve.assignSorted([[0, {
            easingMethod: 2,
            value: posx
          }], [0.1, {
            easingMethod: 2,
            value: posx
          }]]);
          y.curve.assignSorted([[0, {
            easingMethod: 2,
            value: 0
          }], [0.1, {
            easingMethod: 2,
            value: 20
          }]]); // z.curve.assignSorted([
          //     [0, {easingMethod : 2, value: startPos.z}], 
          //     [0.1,{easingMethod : 2, value:  startPos.z - 0.8}]
          // ]);

          var animCom;

          if (this.selectedNode.getComponent(Animation) == null) {
            animCom = this.selectedNode.addComponent(Animation);
          } else {
            animCom = this.selectedNode.getComponent(Animation);
            animCom.removeAll(Animation.EventType.FINISHED);
          }

          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && FXJEvent === void 0 ? (_reportPossibleCrUseOfFXJEvent({
            error: Error()
          }), FXJEvent) : FXJEvent).SYS_PLAY_EFFECT, (_crd && FXJSound === void 0 ? (_reportPossibleCrUseOfFXJSound({
            error: Error()
          }), FXJSound) : FXJSound).GameTiPai);
          ac.addTrack(trackPos);
          animCom.defaultClip = ac;
          animCom.play();
        }

        playUnselectAnim(node) {
          var startPos = this.selectedNode.getPosition();
          var ac = new AnimationClip();
          ac.duration = 0.1;
          var posx = this.getSelectNodePosx(this.selectedNode);
          var trackPos = new animation.VectorTrack();
          trackPos.componentsCount = 3;
          trackPos.path = new animation.TrackPath().toProperty("position");
          var [x, y, z] = trackPos.channels();
          x.curve.assignSorted([[0, {
            easingMethod: 2,
            value: posx
          }], [0.1, {
            easingMethod: 2,
            value: posx
          }]]);
          y.curve.assignSorted([[0, {
            easingMethod: 2,
            value: 20
          }], [0.1, {
            easingMethod: 2,
            value: 0
          }]]); // z.curve.assignSorted([ 
          //     [0, {easingMethod : 2, value: startPos.z}], 
          //     [0.1,{easingMethod : 2, value:  startPos.z + 0.8}]
          // ]); 

          var animCom;

          if (node.getComponent(Animation) == null) {
            animCom = node.addComponent(Animation);
          } else {
            animCom = node.getComponent(Animation);
            animCom.removeAll(Animation.EventType.FINISHED);
          }

          ac.addTrack(trackPos);
          animCom.defaultClip = ac;
          animCom.play();
        } //出牌


        onSendCard(byte) {
          var index = (_crd && OperationMgr === void 0 ? (_reportPossibleCrUseOfOperationMgr({
            error: Error()
          }), OperationMgr) : OperationMgr).getInstance().getSendCardIndex(byte);
          var req = {
            opCard: byte,
            opCode: (_crd && OPCode === void 0 ? (_reportPossibleCrUseOfOPCode({
              error: Error()
            }), OPCode) : OPCode).OPE_OUT_CARD,
            opCards: [byte],
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
        } //游戏开始或结束，清空手牌区，包括抓牌，保持初始状态


        resetView() {
          this.node.removeAllChildren();
          this._mjList = [];
          this._drawCardNode = null; // this.initNodePos();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "nodeCardTemplate", [_dec2], {
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
//# sourceMappingURL=bead22d23e03db6fce12833566382fa81347415c.js.map