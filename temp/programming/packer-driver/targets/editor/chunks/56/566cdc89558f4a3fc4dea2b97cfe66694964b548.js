System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Animation, animation, AnimationClip, instantiate, Node, Vec3, _decorator, GCache, EventManager, BaseComponent, OperationMgr, PlayerMgr, GameEvent, NodeCardCtr, drawCardDisRatio, MjSize, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, MyPlayerCard;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfGCache(extras) {
    _reporterNs.report("GCache", "../../../../cache/GCache", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventManager(extras) {
    _reporterNs.report("EventManager", "../../../../framework/manager/EventManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../../../framework/vc/BaseComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfOperationMgr(extras) {
    _reporterNs.report("OperationMgr", "../../cache/OperationMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerMgr(extras) {
    _reporterNs.report("PlayerMgr", "../../cache/PlayerMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameEvent(extras) {
    _reporterNs.report("GameEvent", "../../common/GameEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNodeCardCtr(extras) {
    _reporterNs.report("NodeCardCtr", "../NodeCardCtr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfdrawCardDisRatio(extras) {
    _reporterNs.report("drawCardDisRatio", "./cardConfigs", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMjSize(extras) {
    _reporterNs.report("MjSize", "./cardConfigs", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Animation = _cc.Animation;
      animation = _cc.animation;
      AnimationClip = _cc.AnimationClip;
      instantiate = _cc.instantiate;
      Node = _cc.Node;
      Vec3 = _cc.Vec3;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      GCache = _unresolved_2.GCache;
    }, function (_unresolved_3) {
      EventManager = _unresolved_3.EventManager;
    }, function (_unresolved_4) {
      BaseComponent = _unresolved_4.BaseComponent;
    }, function (_unresolved_5) {
      OperationMgr = _unresolved_5.OperationMgr;
    }, function (_unresolved_6) {
      PlayerMgr = _unresolved_6.PlayerMgr;
    }, function (_unresolved_7) {
      GameEvent = _unresolved_7.GameEvent;
    }, function (_unresolved_8) {
      NodeCardCtr = _unresolved_8.NodeCardCtr;
    }, function (_unresolved_9) {
      drawCardDisRatio = _unresolved_9.drawCardDisRatio;
      MjSize = _unresolved_9.MjSize;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "3d0c77YRXRBtJNggOQz6Yof", "MyPlayerCard", undefined);

      __checkObsolete__(['Animation', 'animation', 'AnimationClip', 'instantiate', 'Node', 'Vec3', '_decorator']);

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
        constructor(...args) {
          super(...args);
          this.selectedNode = null;
          this._drawCardNode = null;
          this._mjList = [];
          this.myHandCardY = 0;

          _initializerDefineProperty(this, "nodeCardTemplate", _descriptor, this);

          this._slotIndex = void 0;
          this._drawByte = void 0;
          this._playHandCardCb = void 0;
        }

        get drawByte() {
          return this._drawByte;
        }

        set drawByte(newValue) {
          this._drawByte = newValue;
        }
        /** override 初始化模块事件 */


        onInitModuleEvent() {}

        //移除对应的索引的牌去构成stack, 刷新整体node的位置
        stackAnim(indexList, tByte, insertIndex, cb) {
          let pos = new Vec3();

          if (indexList.length === 2) {
            this.removeHandCard(indexList); //碰牌直接移除两张牌, 刷新位置
            // pos = this.node.getPosition();
            // Vec3.add(pos, pos, new Vec3(MjSize.width * indexList.length, 0, 0));
            // this.node.setPosition(pos);
          } else if (indexList.length == 3) {
            this.removeHandCard(indexList);
            this.updateHandPositionAndName(); //杠牌直接移除三张牌, 刷新位置
            // pos = this.node.getPosition();
            // Vec3.add(pos, pos, new Vec3(MjSize.width * indexList.length, 0, 0));
            // this.node.setPosition(pos);

            return;
          } else if (indexList.length == 4 && insertIndex !== null) {
            insertIndex = insertIndex - indexList.length;
            this.removeHandCard(indexList);
            this.removeDrawCard();
            this.addHandCard(tByte, insertIndex); // pos = this.node.getPosition();
            // Vec3.add(pos, pos, new Vec3(MjSize.width * indexList.length, 0, 0));
            // this.node.setPosition(pos);

            return;
          }
          /*
          //吃碰时候移除两张,平移一张到抽牌区 
          let startPos = pos;
          let endPos = new Vec3();
          Vec3.add(endPos, startPos, new Vec3(MjSize.width, 0, 0)) 
          
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


          this._drawCardNode = this._mjList[this._mjList.length - 1];

          let startPosDraw = this._drawCardNode.getPosition();

          let endPosDraw = new Vec3(startPosDraw.x + (_crd && MjSize === void 0 ? (_reportPossibleCrUseOfMjSize({
            error: Error()
          }), MjSize) : MjSize).width, startPosDraw.y, startPosDraw.z);
          let acDraw = new AnimationClip();
          acDraw.duration = 0.1;
          let trackDraw = new animation.VectorTrack();
          trackDraw.componentsCount = 3;
          trackDraw.path = new animation.TrackPath().toProperty("position");
          let [drawX] = trackDraw.channels();
          drawX.curve.assignSorted([[0, {
            value: startPosDraw.x
          }], [0.1, {
            value: endPosDraw.x
          }]]);
          let animDrawCom;

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

          let insertNode = instantiate(this.nodeCardTemplate);
          let cardValue = tByte;
          insertNode.getComponent(_crd && NodeCardCtr === void 0 ? (_reportPossibleCrUseOfNodeCardCtr({
            error: Error()
          }), NodeCardCtr) : NodeCardCtr).setCardByte(cardValue);
          insertNode.active = true;
          insertNode.name = "MJBlock" + index;
          this.node.addChild(insertNode);

          this._mjList.splice(index, 0, insertNode); // 在指定索引处插入对象


          this.updateHandPositionAndName();
        } //抓一张牌


        drawCard(tByte) {
          this.drawByte = tByte;
          this._drawCardNode = instantiate(this.nodeCardTemplate);

          this._drawCardNode.getComponent(_crd && NodeCardCtr === void 0 ? (_reportPossibleCrUseOfNodeCardCtr({
            error: Error()
          }), NodeCardCtr) : NodeCardCtr).setCardByte(tByte);

          this._drawCardNode.active = true;
          this.node.addChild(this._drawCardNode);

          this._drawCardNode.off(Node.EventType.TOUCH_END);

          this._drawCardNode.on(Node.EventType.TOUCH_END, event => {
            this.playSelectAnim(event.target);
          }, this);

          this._drawCardNode.setPosition(this.getLastPosition() + (_crd && drawCardDisRatio === void 0 ? (_reportPossibleCrUseOfdrawCardDisRatio({
            error: Error()
          }), drawCardDisRatio) : drawCardDisRatio) * (_crd && MjSize === void 0 ? (_reportPossibleCrUseOfMjSize({
            error: Error()
          }), MjSize) : MjSize).width, 0, 0);
        }

        updateHandPositionAndName() {
          this._mjList = this._mjList.filter(item => item !== null && item !== undefined);

          for (let i = 0; i < this._mjList.length; i++) {
            let handNode = this._mjList[i];
            handNode.name = "MJBlock" + i;
            handNode.getComponent(_crd && NodeCardCtr === void 0 ? (_reportPossibleCrUseOfNodeCardCtr({
              error: Error()
            }), NodeCardCtr) : NodeCardCtr).setCardByte((_crd && PlayerMgr === void 0 ? (_reportPossibleCrUseOfPlayerMgr({
              error: Error()
            }), PlayerMgr) : PlayerMgr).getInstance().getHandCardByIndex(i));
            handNode.off(Node.EventType.TOUCH_END);
            handNode.on(Node.EventType.TOUCH_END, event => {
              this.playSelectAnim(event.target);
            }, this);
            handNode.setPosition((_crd && MjSize === void 0 ? (_reportPossibleCrUseOfMjSize({
              error: Error()
            }), MjSize) : MjSize).width / 2 + (_crd && MjSize === void 0 ? (_reportPossibleCrUseOfMjSize({
              error: Error()
            }), MjSize) : MjSize).width * i, 0, 0);
          }
        } //将抓上来的牌打出去


        playDrawCard(cb) {
          let toOutCard = this._drawCardNode;
          toOutCard.removeFromParent();
          this._drawCardNode = null;
        }

        playCardFromHandAnim(index, remove, cb) {
          this._slotIndex = index;
          let toOutCard = this._mjList[index];

          if (remove) {
            this._mjList.splice(index, 1);
          } else {
            this._mjList[index] = null;
          }

          toOutCard.removeFromParent();
        } //从手牌移除指定位置的一张或者多张牌，并且出牌之后，如果抓牌未移除，需要把抓的牌放到手牌中，抓牌为空


        removeHandCard(indexList, updateCard = false) {
          indexList.sort((a, b) => b - a);

          for (let index of indexList) {
            if (index < this._mjList.length) {
              let removeNode = this._mjList.splice(index, 1);

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
              for (let i = this._slotIndex + 1; i <= index; i++) {
                let ac = new AnimationClip();
                ac.duration = 0.2;
                let track = new animation.VectorTrack();
                track.componentsCount = 3;
                track.path = new animation.TrackPath().toProperty("position");
                let [x, _, z] = track.channels();
                let mjNode = this._mjList[i];
                let startPos = mjNode.getPosition();
                let endPos = this.getHandPosition(i - 1);
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
                let animCom = mjNode.addComponent(Animation);
                ac.addTrack(track);
                animCom.defaultClip = ac;
                animCom.play();
              }

              for (let i = this._slotIndex; i < index; i++) {
                this._mjList[i] = this._mjList[i + 1]; // 同步平移在列表内的位置
              }
            } else if (index < this._slotIndex) // 2  4空
            {
              for (let i = index; i < this._slotIndex; i++) {
                let ac = new AnimationClip();
                ac.duration = 0.2;
                let track = new animation.VectorTrack();
                track.componentsCount = 3;
                track.path = new animation.TrackPath().toProperty("position");
                let [x, _, z] = track.channels();
                let mjNode = this._mjList[i];
                let startPos = mjNode.getPosition();
                let endPos = this.getHandPosition(i + 1);
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
                let animCom = mjNode.addComponent(Animation);
                ac.addTrack(track);
                animCom.defaultClip = ac;
                animCom.play();
              }

              for (let i = this._slotIndex; i > index; i--) {
                this._mjList[i] = this._mjList[i - 1]; // 同步平移在列表内的位置
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

          let startPos = this._mjList[this._slotIndex].getPosition();

          let endPos = this.getHandPosition(this._slotIndex);
          const ac = new AnimationClip();
          ac.duration = 0.5;
          const track = new animation.VectorTrack();
          track.componentsCount = 3;
          track.path = new animation.TrackPath().toProperty("position");
          const [posx, posy, posz] = track.channels();
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
          let animCom;

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
          let bytes = [];

          for (let i = 0; i < this._mjList.length; i++) {
            let node_byte = this._mjList[i].getComponent(_crd && NodeCardCtr === void 0 ? (_reportPossibleCrUseOfNodeCardCtr({
              error: Error()
            }), NodeCardCtr) : NodeCardCtr).byte;

            bytes.push(node_byte);
          }

          return bytes;
        }

        useByteFindIndexs(bytes) {
          let indexs = [];
          bytes.forEach(byte => {
            for (let i = 0; i < this._mjList.length; i++) {
              let node_byte = this._mjList[i].getComponent(_crd && NodeCardCtr === void 0 ? (_reportPossibleCrUseOfNodeCardCtr({
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

        addHandCards(valueList, active, stackCount, hasDrawCard = false) {
          let handCardCount = valueList.length;

          if (hasDrawCard) {
            handCardCount = valueList.length - 1;
          }

          for (let i = 0; i < handCardCount; i++) {
            let mjNode = instantiate(this.nodeCardTemplate);
            let cardValue = valueList[i];
            mjNode.getComponent(_crd && NodeCardCtr === void 0 ? (_reportPossibleCrUseOfNodeCardCtr({
              error: Error()
            }), NodeCardCtr) : NodeCardCtr).setCardByte(cardValue);
            mjNode.active = true;

            this._mjList.push(mjNode);

            this.node.addChild(mjNode);
          }

          this.updateHandPositionAndName();

          if (hasDrawCard) {
            this.drawCard(valueList[handCardCount]);
            this._drawCardNode.active = active; // let myhands = valueList.slice(0, -1)
            // PlayerMgr.getInstance().updateMyhands(myhands);
          }
        }

        getHandPosition(index) {
          return new Vec3((_crd && MjSize === void 0 ? (_reportPossibleCrUseOfMjSize({
            error: Error()
          }), MjSize) : MjSize).width / 2 + (_crd && MjSize === void 0 ? (_reportPossibleCrUseOfMjSize({
            error: Error()
          }), MjSize) : MjSize).width * index, 0, 0);
        }

        getLastPosition() {
          return (_crd && MjSize === void 0 ? (_reportPossibleCrUseOfMjSize({
            error: Error()
          }), MjSize) : MjSize).width / 2 + (_crd && MjSize === void 0 ? (_reportPossibleCrUseOfMjSize({
            error: Error()
          }), MjSize) : MjSize).width * (this._mjList.length - 1);
        }

        playSelectAnim(node) {
          if (this.selectedNode) {
            this.playUnselectAnim(this.selectedNode);

            if (this.selectedNode == node) {
              this.selectedNode = null;
              return;
            }
          }

          this.selectedNode = node;
          let startPos = this.selectedNode.getPosition();
          const ac = new AnimationClip();
          ac.duration = 0.1;
          const trackPos = new animation.VectorTrack();
          trackPos.componentsCount = 3;
          trackPos.path = new animation.TrackPath().toProperty("position");
          const [x, y, z] = trackPos.channels();
          x.curve.assignSorted([[0, {
            easingMethod: 2,
            value: startPos.x
          }], [0.1, {
            easingMethod: 2,
            value: startPos.x
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

          let animCom;

          if (this.selectedNode.getComponent(Animation) == null) {
            animCom = this.selectedNode.addComponent(Animation);
          } else {
            animCom = this.selectedNode.getComponent(Animation);
            animCom.removeAll(Animation.EventType.FINISHED);
          }

          ac.addTrack(trackPos);
          animCom.defaultClip = ac;
          animCom.play();
        }

        playUnselectAnim(node) {
          let startPos = this.selectedNode.getPosition();
          const ac = new AnimationClip();
          ac.duration = 0.1;
          const trackPos = new animation.VectorTrack();
          trackPos.componentsCount = 3;
          trackPos.path = new animation.TrackPath().toProperty("position");
          const [x, y, z] = trackPos.channels();
          x.curve.assignSorted([[0, {
            easingMethod: 2,
            value: startPos.x
          }], [0.1, {
            easingMethod: 2,
            value: startPos.x
          }]]);
          y.curve.assignSorted([[0, {
            easingMethod: 2,
            value: 0
          }], [0.1, {
            easingMethod: 2,
            value: -20
          }]]); // z.curve.assignSorted([ 
          //     [0, {easingMethod : 2, value: startPos.z}], 
          //     [0.1,{easingMethod : 2, value:  startPos.z + 0.8}]
          // ]); 

          let animCom;

          if (node.getComponent(Animation) == null) {
            animCom = node.addComponent(Animation);
          } else {
            animCom = node.getComponent(Animation);
            animCom.removeAll(Animation.EventType.FINISHED);

            if ((_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
              error: Error()
            }), GCache) : GCache).Desk.turnMe) {
              let byte = this.selectedNode.getComponent(_crd && NodeCardCtr === void 0 ? (_reportPossibleCrUseOfNodeCardCtr({
                error: Error()
              }), NodeCardCtr) : NodeCardCtr).byte;
              this.onSendCard(byte);
            }
          }

          ac.addTrack(trackPos);
          animCom.defaultClip = ac;
          animCom.play();
        } //出牌


        onSendCard(byte) {
          let index = (_crd && OperationMgr === void 0 ? (_reportPossibleCrUseOfOperationMgr({
            error: Error()
          }), OperationMgr) : OperationMgr).getInstance().getSendCardIndex(byte);
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).SEND_CARD_OPERATION, index);
        }

        cleanMjList() {
          this._mjList = [];
          this.node.removeAllChildren();
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
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=566cdc89558f4a3fc4dea2b97cfe66694964b548.js.map