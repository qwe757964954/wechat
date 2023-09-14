System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, DefStringProtocol, _crd;

  _export("DefStringProtocol", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d9f8b+CV69FyKwnUdCjOtad", "NetInterface", undefined);

      /** 默认字符串协议对象 */
      _export("DefStringProtocol", DefStringProtocol = class DefStringProtocol {
        constructor() {
          this.PacketSize = 0;
        }

        getHeadlen() {
          return 0;
        }

        getHearbeatPackage() {
          return null;
        }

        getPackageLen(msg) {
          return msg.toString().length;
        }

        checkRequestPackage(msg) {
          return true;
        }

        checkResponsePackage(msg) {
          return true;
        }

        handlerResponsePackage(msg) {
          return null;
        }

        handlerRequestPackage(reqProtocol) {
          return true;
        }

        isLittleEndian() {
          return false;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=e3fbb8f4da15222c25851fd8ffb93bca15371ad1.js.map