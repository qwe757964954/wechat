System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Prefab, _decorator, BaseComponent, PlayerMgr, RoomMgr, FXJRes, GameEvent, CardUtil, NodeUserPrefabCtr, _dec, _dec2, _class, _crd, ccclass, property, menu, NodeUserCtr;

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../../framework/vc/BaseComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerMgr(extras) {
    _reporterNs.report("PlayerMgr", "../cache/PlayerMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoomMgr(extras) {
    _reporterNs.report("RoomMgr", "../cache/RoomMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFXJRes(extras) {
    _reporterNs.report("FXJRes", "../common/FXJRes", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameEvent(extras) {
    _reporterNs.report("GameEvent", "../common/GameEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCommon(extras) {
    _reporterNs.report("Common", "../common/idl/Common", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCardUtil(extras) {
    _reporterNs.report("CardUtil", "../util/CardUtil", _context.meta, extras);
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
      Prefab = _cc.Prefab;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      BaseComponent = _unresolved_2.BaseComponent;
    }, function (_unresolved_3) {
      PlayerMgr = _unresolved_3.PlayerMgr;
    }, function (_unresolved_4) {
      RoomMgr = _unresolved_4.RoomMgr;
    }, function (_unresolved_5) {
      FXJRes = _unresolved_5.FXJRes;
    }, function (_unresolved_6) {
      GameEvent = _unresolved_6.GameEvent;
    }, function (_unresolved_7) {
      CardUtil = _unresolved_7.CardUtil;
    }, function (_unresolved_8) {
      NodeUserPrefabCtr = _unresolved_8.NodeUserPrefabCtr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "437eaoAHwZEyYBNA0UyRmWP", "NodeUserCtr", undefined);

      __checkObsolete__(['Node', 'Prefab', '_decorator']);

      ({
        ccclass,
        property,
        menu
      } = _decorator);
      /**
       * Name = NodeUserCtr
       * URL = db://assets/package/game/scripts/NodeUserCtr.ts
       * Time = Mon Jul 31 2023 15:54:59 GMT+0800 (中国标准时间)
       * Author = harvyson
       *
       * Life: onLoad-->onInitModuleEvent-->onEnable->start->update->lateUpdate->onDisable->onDestroy
       * 
       */

      _export("NodeUserCtr", NodeUserCtr = (_dec = ccclass('NodeUserCtr'), _dec2 = menu('prefab/game/NodeUserCtr'), _dec(_class = _dec2(_class = class NodeUserCtr extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor() {
          super(...arguments);
          this.userSeats = [];
          this.userNodes = [];
        }

        /** override 初始化模块事件 */
        onInitModuleEvent() {
          this.addModelListener((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).VIEW_BROADCAST_PLAYER_EXIT, this.palyerExit);
          this.addModelListener((_crd && GameEvent === void 0 ? (_reportPossibleCrUseOfGameEvent({
            error: Error()
          }), GameEvent) : GameEvent).CLEAN_AI_SHOWING, this.cleanAiShowing);
        }

        cleanAiShowing() {
          for (var i = 0; i < this.userNodes.length; i++) {
            var node = this.userNodes[i];
            node.getComponent(_crd && NodeUserPrefabCtr === void 0 ? (_reportPossibleCrUseOfNodeUserPrefabCtr({
              error: Error()
            }), NodeUserPrefabCtr) : NodeUserPrefabCtr).cleanDepositStatus();
          }
        }

        palyerExit(event, uid) {
          if (uid === void 0) {
            uid = null;
          }

          var player = (_crd && PlayerMgr === void 0 ? (_reportPossibleCrUseOfPlayerMgr({
            error: Error()
          }), PlayerMgr) : PlayerMgr).getInstance().findPlayerWithUserId(uid);
          var seatID = (_crd && CardUtil === void 0 ? (_reportPossibleCrUseOfCardUtil({
            error: Error()
          }), CardUtil) : CardUtil).calculatePlayerSeat((_crd && RoomMgr === void 0 ? (_reportPossibleCrUseOfRoomMgr({
            error: Error()
          }), RoomMgr) : RoomMgr).getInstance().mySeatId, player.seatId);
          this.userSeats = this.userSeats.filter(num => num !== seatID);

          for (var i = 0; i < this.userNodes.length; i++) {
            var node = this.userNodes[i];

            if (node.getComponent(_crd && NodeUserPrefabCtr === void 0 ? (_reportPossibleCrUseOfNodeUserPrefabCtr({
              error: Error()
            }), NodeUserPrefabCtr) : NodeUserPrefabCtr).UID === uid) {
              node.removeFromParent();
              this.userNodes.splice(i, 1);
            }
          }
        }
        /** 显示人物信息 */


        showUserView(data) {
          var self = this;
          this.getPreLoaderRes((_crd && FXJRes === void 0 ? (_reportPossibleCrUseOfFXJRes({
            error: Error()
          }), FXJRes) : FXJRes).Prefab_NodeUser.bundle, (_crd && FXJRes === void 0 ? (_reportPossibleCrUseOfFXJRes({
            error: Error()
          }), FXJRes) : FXJRes).Prefab_NodeUser.path, Prefab, res => {
            var comp = res.getComponent(_crd && NodeUserPrefabCtr === void 0 ? (_reportPossibleCrUseOfNodeUserPrefabCtr({
              error: Error()
            }), NodeUserPrefabCtr) : NodeUserPrefabCtr);

            if (!self.node || self.node.isValid == false) {
              return;
            }

            var seatID = (_crd && CardUtil === void 0 ? (_reportPossibleCrUseOfCardUtil({
              error: Error()
            }), CardUtil) : CardUtil).calculatePlayerSeat((_crd && RoomMgr === void 0 ? (_reportPossibleCrUseOfRoomMgr({
              error: Error()
            }), RoomMgr) : RoomMgr).getInstance().mySeatId, data.posID);

            if (this.userSeats.indexOf(seatID) === -1) {
              this.userSeats.push(seatID);
              self.node.addChild(res);
              this.userNodes.push(res);
              res.active = true;
              data.posID = seatID;
              comp.initData(data); //此处做刷新
            }

            this.userNodes.forEach(node => {
              node.active = true;
            }); // comp.initData(data);//此处做刷新
            // for (let i = 0; i < self.node.children.length; i++) {
            // 	let node = self.node.children[i];
            // 	let nodeComp = node.getComponent(NodeUserPrefabCtr);
            // 	if (nodeComp.PosID == seatID) {
            // 		node.active = true;
            // 		isAdd = true;
            // 		comp = nodeComp;
            // 		break;
            // 	}
            // }
            // if (isAdd == false) {
            // }
            // comp.node.active = true;
          });
        }

      }) || _class) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=b8f56400af0d7b132e3b334e934c564a1a511b83.js.map