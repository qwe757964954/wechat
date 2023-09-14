System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Logger, Utils, GlobalCmdBindingHead, GlobalHeadCmdBinding, _GCmdMapping, _crd, GCmdMapping;

  function _reportPossibleCrUseOfLogger(extras) {
    _reporterNs.report("Logger", "../../framework/log/Logger", _context.meta, extras);
  }

  function _reportPossibleCrUseOfICMD_BINDING_HEAD(extras) {
    _reporterNs.report("ICMD_BINDING_HEAD", "../../framework/network/NetInterface", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUtils(extras) {
    _reporterNs.report("Utils", "../../framework/Utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGlobalCmdBindingHead(extras) {
    _reporterNs.report("GlobalCmdBindingHead", "./GlobalCMD", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGlobalHeadCmdBinding(extras) {
    _reporterNs.report("GlobalHeadCmdBinding", "./GlobalCMD", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      Logger = _unresolved_2.Logger;
    }, function (_unresolved_3) {
      Utils = _unresolved_3.Utils;
    }, function (_unresolved_4) {
      GlobalCmdBindingHead = _unresolved_4.GlobalCmdBindingHead;
      GlobalHeadCmdBinding = _unresolved_4.GlobalHeadCmdBinding;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f8a13NxyqZK+rOLzPrmQg0m", "GCmdMapping", undefined);

      _GCmdMapping = class _GCmdMapping {
        //cmd-action映射
        //cmd-reqHead映射
        //cmd-event映射
        //headCmd-event映射
        //新增加的命令
        static get instance() {
          if (!this._instance || this._instance == null) {
            this._instance = new _GCmdMapping();
          }

          return this._instance;
        } //实例化


        constructor() {
          this.mapCmdAction = {};
          this.mapCmdReqHead = {};
          this.mapCmdEvent = {};
          this.mapHeadCmdEvent = {};
          this._addPushCmdArrayList = {};
        }

        //刷新全局mapping
        refreshGloabelMapping() {
          (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
            error: Error()
          }), Logger) : Logger).logModel("[GCmdMapping]:refreshMapping 刷新mapping");

          for (var headCmd in _crd && GlobalHeadCmdBinding === void 0 ? (_reportPossibleCrUseOfGlobalHeadCmdBinding({
            error: Error()
          }), GlobalHeadCmdBinding) : GlobalHeadCmdBinding) {
            if (Object.prototype.hasOwnProperty.call(_crd && GlobalHeadCmdBinding === void 0 ? (_reportPossibleCrUseOfGlobalHeadCmdBinding({
              error: Error()
            }), GlobalHeadCmdBinding) : GlobalHeadCmdBinding, headCmd)) {
              var mapping = (_crd && GlobalHeadCmdBinding === void 0 ? (_reportPossibleCrUseOfGlobalHeadCmdBinding({
                error: Error()
              }), GlobalHeadCmdBinding) : GlobalHeadCmdBinding)[headCmd];
              /** 序列化 方便查找 */

              this.mapHeadCmdEvent[headCmd] = mapping.respEvent;
            }
          }

          for (var cmd in _crd && GlobalCmdBindingHead === void 0 ? (_reportPossibleCrUseOfGlobalCmdBindingHead({
            error: Error()
          }), GlobalCmdBindingHead) : GlobalCmdBindingHead) {
            if (Object.prototype.hasOwnProperty.call(_crd && GlobalCmdBindingHead === void 0 ? (_reportPossibleCrUseOfGlobalCmdBindingHead({
              error: Error()
            }), GlobalCmdBindingHead) : GlobalCmdBindingHead, cmd)) {
              var _mapping = (_crd && GlobalCmdBindingHead === void 0 ? (_reportPossibleCrUseOfGlobalCmdBindingHead({
                error: Error()
              }), GlobalCmdBindingHead) : GlobalCmdBindingHead)[cmd];
              /** 序列化 方便查找 */

              this.mapCmdAction[cmd] = _mapping.action;
              this.mapCmdReqHead[cmd] = _mapping.reqHead;
              this.mapCmdEvent[cmd] = _mapping.respEvent;
            }
          }

          (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).dump(this.mapCmdEvent);
        } //初始化通用映射


        initCommonMapping() {
          //cmd-action映射
          this.mapCmdAction = {}; //cmd-reqHead映射

          this.mapCmdReqHead = {}; //cmd-event映射

          this.mapCmdEvent = {}; //headCmd-event映射

          this.mapHeadCmdEvent = {};
          this.refreshGloabelMapping();
        } //新增命令头映射


        pushHeadMapping(ArrayList) {
          if (!ArrayList) {
            return;
          }

          for (var headCmd in ArrayList) {
            if (Object.prototype.hasOwnProperty.call(ArrayList, headCmd)) {
              var mapping = ArrayList[headCmd];
              /** 序列化 方便查找 */

              if (mapping.respEvent != null) {
                this.mapHeadCmdEvent[headCmd] = mapping.respEvent;
              }
            }
          }
        } //根据Cmd获取请求头


        getReqHeadByCmd(cmd) {
          if (!cmd) {
            return null;
          }

          return this.mapCmdReqHead[cmd];
        } //根据Cmd获取action


        getActionByCmd(cmd) {
          if (!cmd) {
            return null;
          }

          return this.mapCmdAction[cmd] || null;
        } //根据cmd获取Event


        getEventIDByCmd(cmd) {
          if (!cmd) {
            return null;
          }

          return this.mapCmdEvent[cmd] || null;
        } //根据headCmd获取Event


        getEventIDByHeadCmd(headCmd) {
          if (!headCmd) {
            return null;
          }

          return this.mapHeadCmdEvent[headCmd] || null;
        }

      };
      _GCmdMapping._instance = null;

      _export("GCmdMapping", GCmdMapping = _GCmdMapping.instance);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=6dba92d015bccaaf2a14db390751999075e1f3b3.js.map