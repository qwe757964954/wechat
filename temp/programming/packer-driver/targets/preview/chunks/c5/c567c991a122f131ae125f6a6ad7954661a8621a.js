System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, _dec, _class, _crd, ccclass, property, Item;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "44988wis/FG351Nj45Cdfjy", "Item", undefined);

      __checkObsolete__(['EventTouch', '_decorator', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Name = Item
       * URL = db://assets/package/game/module/opInfo/src/Item.ts
       * Time = Mon Aug 21 2023 21:35:06 GMT-0700 (北美太平洋夏令时间)
       * Author = qwe757964
       *
       * Life: onLoad-->onInitModuleEvent-->onEnable->start->update->lateUpdate->onDisable->onDestroy
       * 
       */

      _export("Item", Item = (_dec = ccclass('Item'), _dec(_class = class Item extends BaseComponent {
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
//# sourceMappingURL=c567c991a122f131ae125f6a6ad7954661a8621a.js.map