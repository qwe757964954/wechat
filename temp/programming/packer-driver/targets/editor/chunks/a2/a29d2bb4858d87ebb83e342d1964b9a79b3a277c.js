System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, BaseComponent, _dec, _class, _crd, ccclass, property, Carditem;

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../../../../framework/vc/BaseComponent", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      BaseComponent = _unresolved_2.BaseComponent;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a5b47HaIfNPsaX4/AAoJYJ+", "Carditem", undefined);

      __checkObsolete__(['Prefab', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Name = Carditem
       * URL = db://assets/package/game/module/opInfo/src/Carditem.ts
       * Time = Fri Aug 18 2023 15:19:38 GMT-0700 (北美太平洋夏令时间)
       * Author = qwe757964
       *
       * Life: onLoad-->onInitModuleEvent-->onEnable->start->update->lateUpdate->onDisable->onDestroy
       * 
       */

      _export("Carditem", Carditem = (_dec = ccclass('Carditem'), _dec(_class = class Carditem extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor(...args) {
          super(...args);
          this._CardPrefab = null;
        }

        /** override 初始化模块事件 */
        onInitModuleEvent() {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a29d2bb4858d87ebb83e342d1964b9a79b3a277c.js.map