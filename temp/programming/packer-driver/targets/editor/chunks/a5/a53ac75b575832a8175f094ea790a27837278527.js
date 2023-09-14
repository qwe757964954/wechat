System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, inf_ViewParams, _crd, inf_LayerType;

  _export({
    inf_ViewParams: void 0,
    inf_LayerType: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9e1d62a3idGF4ELveM7+OcQ", "InterfaceDefines", undefined);

      __checkObsolete__(['Node', 'Vec3']);

      (function (inf_LayerType) {
        inf_LayerType["Game"] = "LayerGame";
        inf_LayerType["UI"] = "LayerUI";
        inf_LayerType["PopUp"] = "LayerPopUp";
        inf_LayerType["Dialog"] = "LayerDialog";
        inf_LayerType["DialogTip"] = "LayerDialogTip";
        inf_LayerType["Alert"] = "LayerAlert";
        inf_LayerType["Animal"] = "LayerDialogAnimal";
        inf_LayerType["NetWindow"] = "LayerNet";
        inf_LayerType["Notify"] = "LayerNotify";
        inf_LayerType["Guide"] = "LayerGuide";
      })(inf_LayerType || _export("inf_LayerType", inf_LayerType = {}));

      /** 本类型仅供gui模块内部使用，请勿在功能逻辑中使用 */
      _export("inf_ViewParams", inf_ViewParams = class inf_ViewParams {
        constructor() {
          this.bundle = "resources";
          this.params = void 0;
          this.valid = true;
          this.node = null;
          this.isAutoRecover = false;
          this.isClickSpanceClose = false;
        }

      });
      /** 进入房间的缓存数据参数接口 */


      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a53ac75b575832a8175f094ea790a27837278527.js.map