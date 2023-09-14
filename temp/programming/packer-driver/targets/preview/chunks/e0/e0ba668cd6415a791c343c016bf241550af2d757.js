System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, BaseControll, SelectGameServers, _crd;

  function _reportPossibleCrUseOfBaseControll(extras) {
    _reporterNs.report("BaseControll", "../../framework/vc/BaseController", _context.meta, extras);
  }

  _export("SelectGameServers", void 0);

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

      _cclegacy._RF.push({}, "9c7e01FK9ZDWqwO8rYHYk2J", "SelectGameServers", undefined);

      /**
       * Name = SelectGameServers
       * URL = db://assets/proj/servers/SelectGameServers.ts
       * Time = Wed 2023 07.25 19:03:18 GMT+0800 (中国标准时间)
       * Author = xueya
       * 选场相关服务
       */
      _export("SelectGameServers", SelectGameServers = class SelectGameServers extends (_crd && BaseControll === void 0 ? (_reportPossibleCrUseOfBaseControll({
        error: Error()
      }), BaseControll) : BaseControll) {
        static getInstance() {
          if (!this._instance || this._instance == null) {
            this._instance = new SelectGameServers("SelectGameServers");
          }

          return this._instance;
        } //实例化


        constructor(name) {
          super(name);
        }

        static init() {
          if (this._instance) {
            this._instance.clear();
          }

          this._instance = null;
          SelectGameServers.getInstance();
          return;
        }
        /**初始化添加事件绑定 */


        onInitModuleEvent() {}

      });

      SelectGameServers._instance = null;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=e0ba668cd6415a791c343c016bf241550af2d757.js.map