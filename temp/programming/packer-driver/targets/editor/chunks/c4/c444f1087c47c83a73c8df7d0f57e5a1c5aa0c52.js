System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Label, Node, SpriteAtlas, Vec3, _decorator, GCache, SpriteLoad, EventManager, Utils, BaseComponent, PlayerMgr, RoomMgr, FXJConfig, FXJConstant, FXJEvent, FXJRes, FXJUIID, FXJSound, GameEvent, CardUtil, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _crd, ccclass, property, menu, NodeUserPrefabCtr;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfGCache(extras) {
    _reporterNs.report("GCache", "../../../cache/GCache", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSpriteLoad(extras) {
    _reporterNs.report("SpriteLoad", "../../../framework/gui/sprite/SpriteLoad", _context.meta, extras);
  }

  function _reportPossibleCrUseOfinf_SpineAniCreate(extras) {
    _reporterNs.report("inf_SpineAniCreate", "../../../framework/InterfaceDefines", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventManager(extras) {
    _reporterNs.report("EventManager", "../../../framework/manager/EventManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUtils(extras) {
    _reporterNs.report("Utils", "../../../framework/Utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../../framework/vc/BaseComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerMgr(extras) {
    _reporterNs.report("PlayerMgr", "../cache/PlayerMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoomMgr(extras) {
    _reporterNs.report("RoomMgr", "../cache/RoomMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFXJConfig(extras) {
    _reporterNs.report("FXJConfig", "../common/FXJConfig", _context.meta, extras);
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

  function _reportPossibleCrUseOfGameEvent(extras) {
    _reporterNs.report("GameEvent", "../common/GameEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCommon(extras) {
    _reporterNs.report("Common", "../common/idl/Common", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFaceType(extras) {
    _reporterNs.report("FaceType", "../common/server/ChatServer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMsgType(extras) {
    _reporterNs.report("MsgType", "../common/server/ChatServer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCardUtil(extras) {
    _reporterNs.report("CardUtil", "../util/CardUtil", _context.meta, extras);
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
      SpriteAtlas = _cc.SpriteAtlas;
      Vec3 = _cc.Vec3;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      GCache = _unresolved_2.GCache;
    }, function (_unresolved_3) {
      SpriteLoad = _unresolved_3.default;
    }, function (_unresolved_4) {
      EventManager = _unresolved_4.EventManager;
    }, function (_unresolved_5) {
      Utils = _unresolved_5.Utils;
    }, function (_unresolved_6) {
      BaseComponent = _unresolved_6.BaseComponent;
    }, function (_unresolved_7) {
      PlayerMgr = _unresolved_7.PlayerMgr;
    }, function (_unresolved_8) {
      RoomMgr = _unresolved_8.RoomMgr;
    }, function (_unresolved_9) {
      FXJConfig = _unresolved_9.FXJConfig;
    }, function (_unresolved_10) {
      FXJConstant = _unresolved_10.FXJConstant;
    }, function (_unresolved_11) {
      FXJEvent = _unresolved_11.FXJEvent;
    }, function (_unresolved_12) {
      FXJRes = _unresolved_12.FXJRes;
      FXJUIID = _unresolved_12.FXJUIID;
    }, function (_unresolved_13) {
      FXJSound = _unresolved_13.FXJSound;
    }, function (_unresolved_14) {
      GameEvent = _unresolved_14.GameEvent;
    }, function (_unresolved_15) {
      CardUtil = _unresolved_15.CardUtil;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5151fbl7YZGEatqVwf4KG7Z", "NodeUserPrefabCtr", undefined);

      __checkObsolete__(['Label', 'Node', 'SpriteAtlas', 'Vec3', '_decorator']);

      ({
        ccclass,
        property,
        menu
      } = _decorator);
      /**
       * Name = NodeUserPrefabCtr
       * URL = db://assets/package/game/scripts/NodeUserPrefabCtr.ts
       * Time = Fri Sep 16 2022 11:06:58 GMT+0800 (中国标准时间)
       * Author = Tomoe
       *
       * Life: onLoad-->onEnable->start->update->lateUpdate->onDisable->onDestroy
       * 玩家节点
       */

      _export("NodeUserPrefabCtr", NodeUserPrefabCtr = (_dec = ccclass('NodeUserPrefabCtr'), _dec2 = menu('prefab/game/NodeUserPrefabCtr'), _dec3 = property({
        tooltip: "玩家信息背景",
        type: Node
      }), _dec4 = property({
        tooltip: "玩家点击遮罩",
        type: Node
      }), _dec5 = property({
        tooltip: "玩家显示托管状态",
        type: Node
      }), _dec6 = property({
        tooltip: "用户头像",
        type: Node
      }), _dec7 = property({
        tooltip: "银币",
        type: Label
      }), _dec8 = property({
        tooltip: "聊天气泡节点",
        type: Node
      }), _dec9 = property({
        tooltip: "表情动画节点",
        type: Node
      }), _dec10 = property({
        tooltip: "庄家节点",
        type: Node
      }), _dec(_class = _dec2(_class = (_class2 = class NodeUserPrefabCtr extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "infoBgPlayer", _descriptor, this);

          _initializerDefineProperty(this, "nodeBtnMask", _descriptor2, this);

          _initializerDefineProperty(this, "nodeDeposit", _descriptor3, this);

          _initializerDefineProperty(this, "headNode", _descriptor4, this);

          _initializerDefineProperty(this, "coinLabel", _descriptor5, this);

          _initializerDefineProperty(this, "nodeChat", _descriptor6, this);

          _initializerDefineProperty(this, "nodeEmoji", _descriptor7, this);

          _initializerDefineProperty(this, "nodeZhuang", _descriptor8, this);

          this._handlerChatTextAutoHide = null;
          this._isReload = false;
          this._uid = null;
          this._posID = null;
        }

        /**初始化添加事件绑定 */
        onInitModuleEvent() {
          //玩家退出
          this.addModelListener((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).VIEW_BROADCAST_PLAYER_EXIT, this.palyerExit); // // 刷新坐下玩家数据
          // this.addModelListener(FXJEvent.VIEW_PLAYER_REFRESH, this.palyerRefresh);
          // //玩家资产有更新

          this.addModelListener((_crd && FXJEvent === void 0 ? (_reportPossibleCrUseOfFXJEvent({
            error: Error()
          }), FXJEvent) : FXJEvent).VIEW_PLAYER_UPDATE_PROPERTY, this.updateCoin); //玩家表情聊天通知

          this.addModelListener((_crd && FXJEvent === void 0 ? (_reportPossibleCrUseOfFXJEvent({
            error: Error()
          }), FXJEvent) : FXJEvent).VIEW_PLAYER_CHAT_SHOW, this.showChatMsg);
          this.addModelListener((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).VIEW_PLAYER_EMOJ_SHOW, this.showEmojMsg); //通知:有玩家托管

          this.addModelListener((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).VIEW_BROADCAST_PLAYER_AI_SHOW, this.palyerDeposit); //通知:有玩家取消托管 不传值表示取消所有玩家的托管状态

          this.addModelListener((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).VIEW_BROADCAST_PLAYER_AI_HIDE, this.palyerCancelDeposit);
          this.addModelListener((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).VIEW_PLAYER_AI_SHOW, this.modifyPlayerDeposit); // 定庄

          this.addModelListener((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).VIEW_BROADCAST_DING_ZHUANG, this.palyerDingZhuang);
        }

        onLoad() {
          this._isReload = true;
          console.log("NodeUser: onload==>", this._uid);
          this.preloadRes();
          this.initUI();
        }

        initUI() {
          this.infoBgPlayer.active = true;
          this.nodeBtnMask.active = true;
          this.nodeChat.active = false;
          this.nodeEmoji.active = true;
          this.node.active = true;
          this.nodeDeposit.active = false;
          this.nodeZhuang.active = false;
          this.palyerRefresh(null, this._uid);
        }
        /** 预加载 */


        preloadRes() {
          this.getPreLoaderRes((_crd && FXJRes === void 0 ? (_reportPossibleCrUseOfFXJRes({
            error: Error()
          }), FXJRes) : FXJRes).Atlas_Game_CardNum.bundle, (_crd && FXJRes === void 0 ? (_reportPossibleCrUseOfFXJRes({
            error: Error()
          }), FXJRes) : FXJRes).Atlas_Game_CardNum.path, SpriteAtlas);
          this.getPreLoaderRes((_crd && FXJRes === void 0 ? (_reportPossibleCrUseOfFXJRes({
            error: Error()
          }), FXJRes) : FXJRes).Atlas_Player_Common.bundle, (_crd && FXJRes === void 0 ? (_reportPossibleCrUseOfFXJRes({
            error: Error()
          }), FXJRes) : FXJRes).Atlas_Player_Common.path, SpriteAtlas);
        }

        start() {}

        /** get uid */
        get UID() {
          return this._uid;
        }
        /** set PosID */


        set PosID(posID) {
          this._posID = posID;
        }
        /** get PosID */


        get PosID() {
          return this._posID;
        }

        initData(data) {
          if (data) {
            this._posID = data.posID;
            this._uid = data.uid;
          }

          if (!this.node || this.node.isValid == false) {
            return;
          }

          if (this._uid) {
            let player = (_crd && PlayerMgr === void 0 ? (_reportPossibleCrUseOfPlayerMgr({
              error: Error()
            }), PlayerMgr) : PlayerMgr).getInstance().findPlayerWithUserId(this._uid);

            if (player != null) {
              this.palyerRefresh(null, this._uid);
            } else {
              this.node.destroy();
            }
          }
        }
        /** 用户刷新 */


        palyerRefresh(event, uid) {
          if (!uid || uid != this._uid) {
            return;
          }

          let player = (_crd && PlayerMgr === void 0 ? (_reportPossibleCrUseOfPlayerMgr({
            error: Error()
          }), PlayerMgr) : PlayerMgr).getInstance().findPlayerWithUserId(uid);

          if (player) {
            this._posID = (_crd && CardUtil === void 0 ? (_reportPossibleCrUseOfCardUtil({
              error: Error()
            }), CardUtil) : CardUtil).calculatePlayerSeat((_crd && RoomMgr === void 0 ? (_reportPossibleCrUseOfRoomMgr({
              error: Error()
            }), RoomMgr) : RoomMgr).getInstance().mySeatId, player.seatId);
            this.infoBgPlayer.active = true;
            this.nodeBtnMask.active = true;
            this.updatePos();
            this.updateUserHead(player.gameUserInfo.sex, player.gameUserInfo.avatar_s);
            this.updateCoin(null, player.userId);
          }
        } //更新用户头像


        updateUserHead(sex, url) {
          let spriteLoad = this.headNode.getComponent(_crd && SpriteLoad === void 0 ? (_reportPossibleCrUseOfSpriteLoad({
            error: Error()
          }), SpriteLoad) : SpriteLoad);
          let headArray = (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
            error: Error()
          }), GCache) : GCache).User.getUserHeadArray();

          if (!(_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).string_isEmpty(url)) {
            spriteLoad.setRemoteUrl(headArray.s);
          } else {
            if (sex == 2) {
              spriteLoad.setLocalLoad((_crd && FXJRes === void 0 ? (_reportPossibleCrUseOfFXJRes({
                error: Error()
              }), FXJRes) : FXJRes).Picture_UserBigHead_girl.bundle, (_crd && FXJRes === void 0 ? (_reportPossibleCrUseOfFXJRes({
                error: Error()
              }), FXJRes) : FXJRes).Picture_UserBigHead_girl.path);
            } else {
              spriteLoad.setLocalLoad((_crd && FXJRes === void 0 ? (_reportPossibleCrUseOfFXJRes({
                error: Error()
              }), FXJRes) : FXJRes).Picture_UserBigHead_boy.bundle, (_crd && FXJRes === void 0 ? (_reportPossibleCrUseOfFXJRes({
                error: Error()
              }), FXJRes) : FXJRes).Picture_UserBigHead_boy.path);
            }
          }
        }
        /**更新玩家银币*/


        updateCoin(event = null, uid = null) {
          if (uid && uid == this._uid) {
            let palyer = (_crd && PlayerMgr === void 0 ? (_reportPossibleCrUseOfPlayerMgr({
              error: Error()
            }), PlayerMgr) : PlayerMgr).getInstance().findPlayerWithUserId(uid);
            this.coinLabel.string = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).string_moneyToShortNumber(palyer ? palyer.money : 0);
          }
        }
        /** 更新当前位置 */


        updatePos() {
          switch (this._posID) {
            case 0:
              this.node.position = new Vec3(-530, -300, 0); // this.nodeDeposit.position = new Vec3(168, 200, 0);

              break;

            case 1:
              this.node.position = new Vec3(500, 5, 0); // this.nodeDeposit.position = new Vec3(-168, 245, 0);

              break;

            case 2:
              this.node.position = new Vec3(250, 200, 0); // this.nodeDeposit.position = new Vec3(0, 245, 0);

              break;

            case 3:
              this.node.position = new Vec3(-500, 5, 0); // this.nodeDeposit.position = new Vec3(168, 245, 0);

              break;
          }
        }

        modifyPlayerDeposit(event, respData) {
          // 自己托管不用显示托管标志
          if (respData.mid != null) {
            if (respData.mid == this._uid) {
              this.nodeDeposit.active = respData.ai;
            }
          }
        }
        /** 通知:有玩家托管 */


        palyerDeposit(event, uid) {
          // 自己托管不用显示托管标志
          if (uid != null) {
            if (uid == this._uid && this._uid != (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
              error: Error()
            }), GCache) : GCache).User.getUserMid()) {
              this.nodeDeposit.active = true;
            }
          } // PlayerMgr.getInstance().updatePlayerAiStatus(respData.mid,respData.ai);

        }
        /** 玩家取消托管  不传值表示取消所有玩家的托管状态 */


        palyerCancelDeposit(event, uid) {
          if (uid == null) {
            this.nodeDeposit.active = false;
            return;
          } else {
            if (uid == this._uid && this._uid != (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
              error: Error()
            }), GCache) : GCache).User.getUserMid()) {
              this.nodeDeposit.active = false;
            }
          }
        }

        showEmojMsg(event, body) {
          /*
          nodeUserPrefabCtr.ts:238 显示聊天气泡或表情 
          {mid: 9465533, faceValue: 65549, vipType: -1}
          */
          if (this._uid !== body.mid) {
            this.nodeEmoji.active = false;
            return;
          }

          if (body.faceValue == null) {
            return;
          }

          let mojiIndex = body.faceValue - Math.pow(2, 16);
          let aniName = (_crd && FXJConstant === void 0 ? (_reportPossibleCrUseOfFXJConstant({
            error: Error()
          }), FXJConstant) : FXJConstant).ChatEmojiAniConf[mojiIndex];

          if (aniName) {
            //表情
            this.nodeEmoji.active = true;
            let movex = 0; //表情动画

            let emojiAni = {
              parentNode: this.nodeEmoji,
              resConf: (_crd && FXJRes === void 0 ? (_reportPossibleCrUseOfFXJRes({
                error: Error()
              }), FXJRes) : FXJRes).Spine_Emoji,
              aniName: aniName,
              trackIndex: 0,
              isLoop: false,
              skin: null,
              toPos: new Vec3(movex, 0, 0)
            };
            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).dispatch((_crd && FXJEvent === void 0 ? (_reportPossibleCrUseOfFXJEvent({
              error: Error()
            }), FXJEvent) : FXJEvent).SYS_ANI_PLAY, emojiAni);
          } else {
            console.warn("Err:不支持的快捷表情", body);
          }
        }
        /** 显示聊天气泡或表情 */


        showChatMsg(event, body) {
          /*
          显示聊天气泡或表情 
          nodeUserPrefabCtr.ts:238 显示聊天气泡或表情 
          {mid: 2503717, msg: '退退退', index: 2}
          */
          let player = (_crd && PlayerMgr === void 0 ? (_reportPossibleCrUseOfPlayerMgr({
            error: Error()
          }), PlayerMgr) : PlayerMgr).getInstance().findPlayerWithUserId(body.mid);

          if (this._uid !== body.mid) {
            this.nodeChat.active = false;
            return;
          }

          let PosId = (_crd && CardUtil === void 0 ? (_reportPossibleCrUseOfCardUtil({
            error: Error()
          }), CardUtil) : CardUtil).calculatePlayerSeat((_crd && RoomMgr === void 0 ? (_reportPossibleCrUseOfRoomMgr({
            error: Error()
          }), RoomMgr) : RoomMgr).getInstance().mySeatId, player.seatId); //快捷聊天

          if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).isNotNull(PosId, body.msg)) {
            this.stopSchedulerOnce(this._handlerChatTextAutoHide);
            this._handlerChatTextAutoHide = null;
            this.nodeChat.active = true;
            let childNameList = ["right", "left"];
            let currowName = childNameList[0];

            if (PosId === 1 || PosId === 2) {
              currowName = childNameList[1];
            }

            let parentNode = null;
            childNameList.forEach((nodeName, key) => {
              let pNode = this.nodeChat.getChildByName(nodeName);

              if (nodeName == currowName) {
                pNode.active = true;
                parentNode = pNode;
              } else {
                pNode.active = false;
              }
            });

            if (!parentNode) {
              return;
            }

            let bg = parentNode.getChildByName("bg");
            let label = bg == null ? void 0 : bg.getChildByName("Label");

            if (label) {
              label.getComponent(Label).string = String(body.msg);
            }

            this._handlerChatTextAutoHide = this.addSchedulerOnce((_crd && FXJConfig === void 0 ? (_reportPossibleCrUseOfFXJConfig({
              error: Error()
            }), FXJConfig) : FXJConfig).ChatTextAutoHide, (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).handler(this, this.hideChatText));
          } // if (body["msg_type"] == FXJConstant.ChatMsgType.CHAT_MSG_EMOJI) {
          // 	let msgData = Encrypt.JsonDecode(body["msg_data"]);
          // 	//快捷聊天
          // 	if (Utils.isNotNull(msgData.index, msgData.data)) {
          // 		this.stopSchedulerOnce(this._handlerChatTextAutoHide);
          // 		this._handlerChatTextAutoHide = null;
          // 		this.nodeChat.active = true;
          // 		let childNameList = ["right", "left"];
          // 		let currowName = childNameList[0];
          // 		if (player.PosID == 2) {
          // 			currowName = childNameList[1];
          // 		}
          // 		let parentNode = null;
          // 		childNameList.forEach((nodeName, key) => {
          // 			let pNode = this.nodeChat.getChildByName(nodeName);
          // 			if (nodeName == currowName) {
          // 				pNode.active = true;
          // 				parentNode = pNode;
          // 			} else {
          // 				pNode.active = false;
          // 			}
          // 		})
          // 		if (!parentNode) {
          // 			return;
          // 		}
          // 		let bg = parentNode.getChildByName("bg");
          // 		let Label = bg?.getChildByName("Label");
          // 		if (bg && player.OrnamentIds) {
          // 			//特殊聊天背景框
          // 			let id = player.OrnamentIds[FXJConstant.OrnamentBagKind.CHAT_FRAME];
          // 			let info = GCache.GoodsData.getGoodsByID(id);
          // 			if (info && info.item_res_url) {
          // 				this.getPreLoaderRemoteRes(info.item_res_url, ".jpg", (imageAsset) => {
          // 					if (!imageAsset) { //资源可能还在加载中
          // 						return
          // 					}
          // 					if (!bg || bg.isValid == false) {
          // 						return;
          // 					}
          // 					let spriteFrame = Utils.image_ImageAssetToSpriteFrame(imageAsset)
          // 					if (spriteFrame) {
          // 						//设置九宫格
          // 						spriteFrame.insetLeft = 40;
          // 						spriteFrame.insetRight = 25;
          // 						spriteFrame.insetBottom = 50;
          // 						spriteFrame.insetTop = 50;
          // 						let spriteComponent = bg.getComponent(Sprite);
          // 						spriteComponent.spriteFrame = spriteFrame;
          // 					}
          // 				})
          // 			}
          // 		}
          // 		if (Label) {
          // 			Label.getComponent(LabelComponent).string = String(msgData.data);
          // 		}
          // 		this._handlerChatTextAutoHide = this.addSchedulerOnce(FXJConfig.ChatTextAutoHide, Utils.handler(this, this.hideChatText))
          // 		//音效
          // 		let tag = "";
          // 		let tags = String(msgData.index).split("_");
          // 		if (tags && tags.length == 3) {
          // 			tag = msgData.index;
          // 		} else {
          // 			let roleConfig = GCache.RoleList.getRoleInfoByID(player.RoleData["role_id"]);
          // 			let gender = 1;
          // 			if (Utils.table_isEmpty(roleConfig[0]) == false) {
          // 				gender = Utils.number_valueOf(roleConfig[0]["Sex"], gender);
          // 			}
          // 			let sex = (gender == 1) ? "_M" : "_W";
          // 			tag = msgData.index + sex;
          // 		}
          // 		if (tag == "") {
          // 			return;
          // 		}
          // 		let audioPath = Utils.string_format(FXJSound.Quick.path, tag);
          // 		console.log("输出音效路径：===>", audioPath)
          // 		EventManager.dispatch(FXJEvent.SYS_PLAY_EFFECT, { bundle: FXJSound.Quick.bundle, path: audioPath, })
          // 	} else if (Utils.isNotNull(msgData.index)) {
          // 	}
          // }

        }

        /** 隐藏快捷聊天 */
        hideChatText() {
          if (this.nodeChat && this.nodeChat.isValid == true) {
            this.nodeChat.active = false;
          }

          this._handlerChatTextAutoHide = null;
        } //点击个人信息


        onClickUserInfo(event) {
          let palyer = (_crd && PlayerMgr === void 0 ? (_reportPossibleCrUseOfPlayerMgr({
            error: Error()
          }), PlayerMgr) : PlayerMgr).getInstance().findPlayerWithUserId(this._uid);

          if (!palyer) {
            return;
          }

          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && FXJEvent === void 0 ? (_reportPossibleCrUseOfFXJEvent({
            error: Error()
          }), FXJEvent) : FXJEvent).SYS_PLAY_EFFECT, (_crd && FXJSound === void 0 ? (_reportPossibleCrUseOfFXJSound({
            error: Error()
          }), FXJSound) : FXJSound).CommClick);

          if ((_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
            error: Error()
          }), GCache) : GCache).Desk.PlayType == (_crd && FXJConstant === void 0 ? (_reportPossibleCrUseOfFXJConstant({
            error: Error()
          }), FXJConstant) : FXJConstant).PlayType.MATCH) {
            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).dispatch((_crd && FXJEvent === void 0 ? (_reportPossibleCrUseOfFXJEvent({
              error: Error()
            }), FXJEvent) : FXJEvent).SYS_TOAST_TIP, {
              content: "比赛中无法查看玩家信息"
            });
            return;
          }

          if (palyer.userId == (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
            error: Error()
          }), GCache) : GCache).User.getUserMid()) {
            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).dispatch((_crd && FXJEvent === void 0 ? (_reportPossibleCrUseOfFXJEvent({
              error: Error()
            }), FXJEvent) : FXJEvent).VIEW_UI_OPEN, (_crd && FXJUIID === void 0 ? (_reportPossibleCrUseOfFXJUIID({
              error: Error()
            }), FXJUIID) : FXJUIID).PlayerInfoCenter, null, null, null, true);
          } else {
            let data = {
              uid: palyer.userId,
              posID: palyer.seatId
            };
            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).dispatch((_crd && FXJEvent === void 0 ? (_reportPossibleCrUseOfFXJEvent({
              error: Error()
            }), FXJEvent) : FXJEvent).GAME_OPEN_POPUP, (_crd && FXJUIID === void 0 ? (_reportPossibleCrUseOfFXJUIID({
              error: Error()
            }), FXJUIID) : FXJUIID).GameHeadInfoPrefab, data, {});
          }
        } //玩家退出房间


        palyerExit(event, uid = null) {
          if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).isNotNull(uid)) {
            if (uid == this._uid) {
              this.node.active = false;
            }
          }
        }

        palyerDingZhuang(event, seatId = null) {
          if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).isNotNull(seatId)) {
            this.nodeZhuang.active = (_crd && CardUtil === void 0 ? (_reportPossibleCrUseOfCardUtil({
              error: Error()
            }), CardUtil) : CardUtil).calculatePlayerSeat((_crd && RoomMgr === void 0 ? (_reportPossibleCrUseOfRoomMgr({
              error: Error()
            }), RoomMgr) : RoomMgr).getInstance().mySeatId, seatId) == this._posID;
          }
        } //销毁


        onDestroy() {}

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "infoBgPlayer", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "nodeBtnMask", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "nodeDeposit", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "headNode", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "coinLabel", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "nodeChat", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "nodeEmoji", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "nodeZhuang", [_dec10], {
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
//# sourceMappingURL=c444f1087c47c83a73c8df7d0f57e5a1c5aa0c52.js.map