System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, BaseControll, RoundServer, _crd;

  function _reportPossibleCrUseOfBaseControll(extras) {
    _reporterNs.report("BaseControll", "../../../../framework/vc/BaseController", _context.meta, extras);
  }

  _export("RoundServer", void 0);

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

      _cclegacy._RF.push({}, "952fdEe+PZFT6qMQJzxfpvt", "RoundServer", undefined);

      _export("RoundServer", RoundServer = class RoundServer extends (_crd && BaseControll === void 0 ? (_reportPossibleCrUseOfBaseControll({
        error: Error()
      }), BaseControll) : BaseControll) {
        static get instance() {
          if (!this._instance || this._instance == null) {
            this._instance = new RoundServer("RoundServer");
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

      RoundServer._instance = null;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=1440b98d85966121ed12cbda3552b679d9040f41.js.map