System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, BaseProtobuf, FXJPB, _crd;

  function _reportPossibleCrUseOfBaseProtobuf(extras) {
    _reporterNs.report("BaseProtobuf", "../../../proj/gprotobuf/BaseProtobuf", _context.meta, extras);
  }

  _export("FXJPB", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      BaseProtobuf = _unresolved_2.BaseProtobuf;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4fca0m8B95IuKrbkNHgnxXz", "FXJPB", undefined);

      _export("FXJPB", FXJPB = class FXJPB extends (_crd && BaseProtobuf === void 0 ? (_reportPossibleCrUseOfBaseProtobuf({
        error: Error()
      }), BaseProtobuf) : BaseProtobuf) {
        constructor(name) {
          super(name + "包装与解析...");
        }

        encodeBody(pData, funcName) {
          return super.encodeBody(pData, funcName);
        }

        decodeBody(body, funcName) {
          return super.decodeBody(body, funcName);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d2265b2922d89f93c89728a168df520ee1fbb85c.js.map