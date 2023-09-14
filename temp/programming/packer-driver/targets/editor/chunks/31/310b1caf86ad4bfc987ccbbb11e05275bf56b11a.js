System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Prefab, _decorator, BaseComponent, RoomMgr, FXJRes, CardUtil, NodeUserPrefabCtr, _dec, _dec2, _class, _crd, ccclass, property, menu, NodeUserCtr;

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../../framework/vc/BaseComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoomMgr(extras) {
    _reporterNs.report("RoomMgr", "../cache/RoomMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFXJRes(extras) {
    _reporterNs.report("FXJRes", "../common/FXJRes", _context.meta, extras);
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
      RoomMgr = _unresolved_3.RoomMgr;
    }, function (_unresolved_4) {
      FXJRes = _unresolved_4.FXJRes;
    }, function (_unresolved_5) {
      CardUtil = _unresolved_5.CardUtil;
    }, function (_unresolved_6) {
      NodeUserPrefabCtr = _unresolved_6.NodeUserPrefabCtr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "437eaoAHwZEyYBNA0UyRmWP", "NodeUserCtr", undefined);

      __checkObsolete__(['EventTouch', 'Node', 'Prefab', '_decorator']);

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
        constructor(...args) {
          super(...args);
          this.userSeats = [];
          this.userNodes = [];
        }

        /** override 初始化模块事件 */
        onInitModuleEvent() {}

        onLoad() {}

        start() {}

        /** 显示人物信息 */
        showUserView(data) {
          let self = this;
          this.getPreLoaderRes((_crd && FXJRes === void 0 ? (_reportPossibleCrUseOfFXJRes({
            error: Error()
          }), FXJRes) : FXJRes).Prefab_NodeUser.bundle, (_crd && FXJRes === void 0 ? (_reportPossibleCrUseOfFXJRes({
            error: Error()
          }), FXJRes) : FXJRes).Prefab_NodeUser.path, Prefab, res => {
            let comp = res.getComponent(_crd && NodeUserPrefabCtr === void 0 ? (_reportPossibleCrUseOfNodeUserPrefabCtr({
              error: Error()
            }), NodeUserPrefabCtr) : NodeUserPrefabCtr);

            if (!self.node || self.node.isValid == false) {
              return;
            }

            let seatID = (_crd && CardUtil === void 0 ? (_reportPossibleCrUseOfCardUtil({
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

            console.log("showUserView__________________", this.userNodes, this.userSeats);
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
        /** 点击了关闭 */


        onClickClose(event) {}

        //销毁
        onDestroy() {}

      }) || _class) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=310b1caf86ad4bfc987ccbbb11e05275bf56b11a.js.map