System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Vec3, _decorator, BaseComponent, MjSize, _dec, _class, _crd, ccclass, property, PlayerOutCards;

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../../../framework/vc/BaseComponent", _context.meta, extras);
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
      Vec3 = _cc.Vec3;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      BaseComponent = _unresolved_2.BaseComponent;
    }, function (_unresolved_3) {
      MjSize = _unresolved_3.MjSize;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "92a5dYnfORF9a/7OJzbfzmh", "PlayerOutCards", undefined);

      __checkObsolete__(['Node', 'Vec3', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Name = OutCards
       * URL = db://assets/package/game/scripts/OutCards.ts
       * Time = Fri Aug 11 2023 11:08:55 GMT+0800 (中国标准时间)
       * Author = qwe757964
       *
       * Life: onLoad-->onInitModuleEvent-->onEnable->start->update->lateUpdate->onDisable->onDestroy
       * 
       */

      _export("PlayerOutCards", PlayerOutCards = (_dec = ccclass('PlayerOutCards'), _dec(_class = class PlayerOutCards extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor() {
          super(...arguments);
          this._mjList = [];
        }

        /** override 初始化模块事件 */
        onInitModuleEvent() {}

        onLoad() {}

        start() {}

        //根据索引获取指定位置的牌的行列高信息
        getOutCardPosInfo(index) {
          var height = Math.floor(index / 12);
          index = index - height * 12;
          var column = index % 6;
          var row = Math.floor(index / 6);
          var posInfo = {
            row: row,
            column: column,
            height: height
          };
          return posInfo;
        } //当前出牌区添加牌的位置


        getOutCardPos() {
          var posInfo = this.getOutCardPosInfo(this._mjList.length); // return new Vec3(MjSize.width/2 +posInfo.column * MjSize.width, MjSize.length/2 + posInfo.height * MjSize.length, MjSize.height/2 + MjSize.height * posInfo.row);

          return new Vec3((_crd && MjSize === void 0 ? (_reportPossibleCrUseOfMjSize({
            error: Error()
          }), MjSize) : MjSize).width / 2 + posInfo.column * (_crd && MjSize === void 0 ? (_reportPossibleCrUseOfMjSize({
            error: Error()
          }), MjSize) : MjSize).width, (_crd && MjSize === void 0 ? (_reportPossibleCrUseOfMjSize({
            error: Error()
          }), MjSize) : MjSize).length / 2 + posInfo.height * (_crd && MjSize === void 0 ? (_reportPossibleCrUseOfMjSize({
            error: Error()
          }), MjSize) : MjSize).length, 0);
        } //往出牌区添加一张指定种类的牌


        pushCard(tByte) {// let mjNode = instantiate(this._mjPrefab)
          // mjNode.setPosition(this.getOutCardPos())
          // mjNode.getChildByName("Cube").getComponent(MeshRenderer).shadowCastingMode = 1;
          // //根据value决定花色
          // setSymbol(mjNode, tByte)
          // this.node.addChild(mjNode)
          // this._mjList.push(mjNode)
        }

        pushCardToList(node) {
          this._mjList.push(node);
        } //游戏开始或结束，清空出牌区，保持初始状态


        resetView() {
          this.node.removeAllChildren();
          this._mjList = []; // this.initNodePos()
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=41bfb7726dc6a916f795a77bcb1b2a4cbfa43ab1.js.map