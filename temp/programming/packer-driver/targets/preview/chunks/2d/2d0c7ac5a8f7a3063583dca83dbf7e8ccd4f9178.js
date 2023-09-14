System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, GCache, AppEvent, EventManager, BaseControll, FXJCMDHead, FXJEvent, GameEvent, ChatServer, _crd;

  function _reportPossibleCrUseOfGCache(extras) {
    _reporterNs.report("GCache", "../../../../cache/GCache", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAppEvent(extras) {
    _reporterNs.report("AppEvent", "../../../../config/AppEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventManager(extras) {
    _reporterNs.report("EventManager", "../../../../framework/manager/EventManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseControll(extras) {
    _reporterNs.report("BaseControll", "../../../../framework/vc/BaseController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFXJCMDHead(extras) {
    _reporterNs.report("FXJCMDHead", "../../net/FXJCmd", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFXJEvent(extras) {
    _reporterNs.report("FXJEvent", "../FXJEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameEvent(extras) {
    _reporterNs.report("GameEvent", "../GameEvent", _context.meta, extras);
  }

  _export("ChatServer", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      GCache = _unresolved_2.GCache;
    }, function (_unresolved_3) {
      AppEvent = _unresolved_3.AppEvent;
    }, function (_unresolved_4) {
      EventManager = _unresolved_4.EventManager;
    }, function (_unresolved_5) {
      BaseControll = _unresolved_5.BaseControll;
    }, function (_unresolved_6) {
      FXJCMDHead = _unresolved_6.FXJCMDHead;
    }, function (_unresolved_7) {
      FXJEvent = _unresolved_7.FXJEvent;
    }, function (_unresolved_8) {
      GameEvent = _unresolved_8.GameEvent;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6acf0InGUlN66HdbVJqkN81", "ChatServer", undefined);

      _export("ChatServer", ChatServer = class ChatServer extends (_crd && BaseControll === void 0 ? (_reportPossibleCrUseOfBaseControll({
        error: Error()
      }), BaseControll) : BaseControll) {
        static get instance() {
          if (!this._instance || this._instance == null) {
            this._instance = new ChatServer("ChatServer");
          }

          return this._instance;
        } //实例化


        constructor(name) {
          if (name === void 0) {
            name = null;
          }

          super(name);
        }

        /**初始化添加事件绑定 */
        onInitModuleEvent() {
          //请求:文字聊天
          this.addModelListener((_crd && FXJEvent === void 0 ? (_reportPossibleCrUseOfFXJEvent({
            error: Error()
          }), FXJEvent) : FXJEvent).GAME_REQ_PLAYER_CHAET_MSG, this.reqGameChatMsg); //请求:表情聊天

          this.addModelListener((_crd && FXJEvent === void 0 ? (_reportPossibleCrUseOfFXJEvent({
            error: Error()
          }), FXJEvent) : FXJEvent).GAME_REQ_PLAYER_CHAET_EMOJI, this.reqGameChatEmoji); //请求:互动表情

          this.addModelListener((_crd && FXJEvent === void 0 ? (_reportPossibleCrUseOfFXJEvent({
            error: Error()
          }), FXJEvent) : FXJEvent).GAME_REQ_EMOJI_PROPS_MSG, this.reqGameEmojiProps);
        } // let req: Game.ISendOperation = {
        //     opCard:OperationMgr.getInstance().getSendCardListNumber(index)[0],
        //     opCode:OPCode.OPE_OUT_CARD,
        //     opCards:OperationMgr.getInstance().getSendCardListNumber(index),
        //     seatId:OperationMgr.getInstance().seatId,
        //     userId:OperationMgr.getInstance().userId
        // }

        /** 请求发送聊天文本 */


        reqGameChatMsg(event, index, text) {
          if (index == null || text == null) {
            return;
          }

          var req = {
            index: index,
            msg: text
          };
          var sendMsg = {
            cmd: (_crd && FXJCMDHead === void 0 ? (_reportPossibleCrUseOfFXJCMDHead({
              error: Error()
            }), FXJCMDHead) : FXJCMDHead).C2S.ROOM_USER_CHAT,
            body: req
          };
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_SEND_MSG, sendMsg);
          req.mid = (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
            error: Error()
          }), GCache) : GCache).User.getUserMid();
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && FXJEvent === void 0 ? (_reportPossibleCrUseOfFXJEvent({
            error: Error()
          }), FXJEvent) : FXJEvent).VIEW_PLAYER_CHAT_SHOW, req);
        }
        /** 请求发送表情聊天 */


        reqGameChatEmoji(event, index) {
          if (index == null) {
            return;
          }

          var num = parseInt(index);
          var req = {
            vipType: 1,
            faceValue: num + Math.pow(2, 16)
          };
          var sendMsg = {
            cmd: (_crd && FXJCMDHead === void 0 ? (_reportPossibleCrUseOfFXJCMDHead({
              error: Error()
            }), FXJCMDHead) : FXJCMDHead).C2S.ROOM_USER_FACE,
            body: req
          };
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_SEND_MSG, sendMsg);
          req.mid = (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
            error: Error()
          }), GCache) : GCache).User.getUserMid();
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).VIEW_PLAYER_EMOJ_SHOW, req);
        }

        receiveGameChatMsg() {}
        /** 请求发送互动道具 */


        reqGameEmojiProps(event, index, text) {
          if (index == null || text == null) {
            return;
          }

          var req = {
            index: index,
            //道具ID
            msg: text // json from  to {from: to:}

          };
          var sendMsg = {
            cmd: (_crd && FXJCMDHead === void 0 ? (_reportPossibleCrUseOfFXJCMDHead({
              error: Error()
            }), FXJCMDHead) : FXJCMDHead).C2S.ROOM_USER_CHAT,
            body: req
          };
          console.log("reqGameEmojiProps", sendMsg);
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_SEND_MSG, sendMsg);
        }

      });

      ChatServer._instance = null;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=2d0c7ac5a8f7a3063583dca83dbf7e8ccd4f9178.js.map