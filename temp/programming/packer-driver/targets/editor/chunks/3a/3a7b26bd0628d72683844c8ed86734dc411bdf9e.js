System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, _dec, _class, _crd, ccclass, property, OprationCtr;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6fac5HmRXpPi6fBSQe44v4s", "OprationCtr", undefined);

      __checkObsolete__(['EventTouch', '_decorator', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Name = OprationCtr
       * URL = db://assets/package/game/scripts/OprationCtr.ts
       * Time = Tue Aug 22 2023 14:25:09 GMT-0700 (北美太平洋夏令时间)
       * Author = qwe757964
       *
       * Life: onLoad-->onInitModuleEvent-->onEnable->start->update->lateUpdate->onDisable->onDestroy
       * 
       */

      _export("OprationCtr", OprationCtr = (_dec = ccclass('OprationCtr'), _dec(_class = class OprationCtr extends BaseComponent {
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
//# sourceMappingURL=3a7b26bd0628d72683844c8ed86734dc411bdf9e.js.map