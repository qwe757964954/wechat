System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, BaseControll, SettleServer, _crd;

  function _reportPossibleCrUseOfBaseControll(extras) {
    _reporterNs.report("BaseControll", "../../../../framework/vc/BaseController", _context.meta, extras);
  }

  _export("SettleServer", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      BaseControll = _unresolved_2.BaseControll;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f63dbRkHzFOS7cr7QGSXr0k", "SettleServer", undefined);

      _export("SettleServer", SettleServer = class SettleServer extends (_crd && BaseControll === void 0 ? (_reportPossibleCrUseOfBaseControll({
        error: Error()
      }), BaseControll) : BaseControll) {
        static get instance() {
          if (!this._instance || this._instance == null) {
            this._instance = new SettleServer("SettleServer");
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
        onInitModuleEvent() {}

      });

      SettleServer._instance = null;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=e4f3caf7af61a7efc5338c028f141145a6809330.js.map