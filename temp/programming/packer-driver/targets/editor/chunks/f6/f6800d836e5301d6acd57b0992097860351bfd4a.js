System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, _dec, _class, _crd, ccclass, property, Carditem;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a5b47HaIfNPsaX4/AAoJYJ+", "Carditem", undefined);

      __checkObsolete__(['EventTouch', '_decorator', 'Node']);

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

      _export("Carditem", Carditem = (_dec = ccclass('Carditem'), _dec(_class = class Carditem extends BaseComponent {
        /** override 初始化模块事件 */
        onInitModuleEvent() {}

        onLoad() {}

        start() {}

        /** 初始化界面 */
        initView() {}

        /** 更新界面 */
        updateView() {}

        /** 点击了关闭 */
        onClickClose(event) {}

        //销毁
        onDestroy() {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f6800d836e5301d6acd57b0992097860351bfd4a.js.map