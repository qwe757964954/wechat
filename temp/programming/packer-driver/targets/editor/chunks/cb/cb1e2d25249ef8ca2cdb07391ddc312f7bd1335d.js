System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, MathEx, _crd, Bit;

  function _reportPossibleCrUseOfMathEx(extras) {
    _reporterNs.report("MathEx", "../extend/MathEx", _context.meta, extras);
  }

  _export("Bit", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      MathEx = _unresolved_2.MathEx;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c1576oTSixIPobvQ2R0jrAh", "Bit", undefined);

      (function (_Bit) {
        const bnot = _Bit.bnot = bit_not;
        const band = _Bit.band = bit_and;
        const bor = _Bit.bor = bit_or;
        const bxor = _Bit.bxor = bit_xor;
        const brshift = _Bit.brshift = bit_rshift;
        const blshift = _Bit.blshift = bit_lshift;
        const bxor2 = _Bit.bxor2 = bit_xor2;
        const rshift = _Bit.rshift = _rshift;
        const d2b = _Bit.d2b = _d2b;
        const tobits = _Bit.tobits = to_bits;
        const tonumb = _Bit.tonumb = tbl_to_number;
        const data32 = [];

        for (let index = 0; index < 32; index++) {
          data32[index] = 2 ** (32 - index - 1);
        }

        function check_int(n) {
          // checking not float
          if (n - Math.floor(n) > 0) {
            console.log("Error:trying to use bitwise operation on non-integer!");
          }
        }

        _Bit.check_int = check_int;

        function to_bits(n = null) {
          if (n == null || n == undefined) {
            return null;
          }

          if (n < 0) {
            // negative
            return to_bits(bit_not(Math.abs(n)) + 1);
          } // to bits table


          let tbl = [];
          let cnt = 0;

          while (n > 0) {
            let last = (_crd && MathEx === void 0 ? (_reportPossibleCrUseOfMathEx({
              error: Error()
            }), MathEx) : MathEx).mod(n, 2);

            if (last == 1) {
              tbl[cnt] = 1;
            } else {
              tbl[cnt] = 0;
            }

            n = (n - last) / 2;
            cnt = cnt + 1;
          }

          return tbl;
        }

        _Bit.to_bits = to_bits;

        function tbl_to_number(tbl) {
          if (!tbl) {
            return 0;
          }

          let n = tbl.length;
          let rslt = 0;
          let power = 1;

          for (let index = 0; index < n; index++) {
            rslt = rslt + tbl[index] * power;
            power = power * 2;
          }

          return rslt;
        }

        _Bit.tbl_to_number = tbl_to_number;

        function expand(tbl_m, tbl_n) {
          let big = [];
          let small = [];

          if (tbl_m.length > tbl_n.length) {
            big = tbl_m;
            small = tbl_n;
          } else {
            big = tbl_n;
            small = tbl_m;
          } // expand small


          if (small && big) {
            for (let index = small.length; index < big.length; index++) {
              small[index] = 0;
            }
          }
        }

        _Bit.expand = expand;

        function bit_or(m, n) {
          let tbl_m = to_bits(m);
          let tbl_n = to_bits(n);
          expand(tbl_m, tbl_n);
          let tbl = [];
          let rslt = Math.max(tbl_m.length, tbl_n.length);

          for (let i = 0; i < rslt; i++) {
            if (tbl_m[i] == 0 && tbl_n[i] == 0) {
              tbl[i] = 0;
            } else {
              tbl[i] = 1;
            }
          }

          return tbl_to_number(tbl);
        }

        _Bit.bit_or = bit_or;

        function bit_and(m, n) {
          let tbl_m = to_bits(m);
          let tbl_n = to_bits(n);
          expand(tbl_m, tbl_n);
          let tbl = [];
          let rslt = Math.max(tbl_m.length, tbl_n.length);

          for (let i = 0; i < rslt; i++) {
            if (tbl_m[i] == 0 || tbl_n[i] == 0) {
              tbl[i] = 0;
            } else {
              tbl[i] = 1;
            }
          }

          return tbl_to_number(tbl);
        }

        _Bit.bit_and = bit_and;

        function bit_not(n) {
          let tbl = to_bits(n);
          let size = Math.max(tbl.length, 32);

          for (let i = 0; i < size; i++) {
            if (tbl[i] == 1) {
              tbl[i] = 0;
            } else {
              tbl[i] = 1;
            }
          }

          return tbl_to_number(tbl);
        }

        _Bit.bit_not = bit_not;

        function bit_xor(m, n) {
          let tbl_m = to_bits(m);
          let tbl_n = to_bits(n);
          expand(tbl_m, tbl_n);
          let tbl = [];
          let rslt = Math.max(tbl_m.length, tbl_n.length);

          for (let i = 0; i < rslt; i++) {
            if (tbl_m[i] != tbl_n[i]) {
              tbl[i] = 1;
            } else {
              tbl[i] = 0;
            }
          }

          return tbl_to_number(tbl);
        }

        _Bit.bit_xor = bit_xor;

        function bit_rshift(n, bits) {
          check_int(n);
          let high_bit = 0;

          if (n < 0) {
            // negative
            n = bit_not(Math.abs(n)) + 1;
            high_bit = 2147483648; // 0x80000000
          }

          for (let index = 0; index < bits; index++) {
            n = n / 2;
            n = bit_or(Math.floor(n), high_bit);
          }

          return Math.floor(n);
        }

        _Bit.bit_rshift = bit_rshift;

        function bit_lshift(n, bits) {
          check_int(n);

          if (n < 0) {
            // negative
            n = bit_not(Math.abs(n)) + 1;
          }

          for (let index = 0; index < bits; index++) {
            n = n * 2;
          }

          return bit_and(n, 9223372036854775807); // sint64
          // return bit_and(n, 4294967295) -- 0xFFFFFFFF
        }

        _Bit.bit_lshift = bit_lshift;

        function bit_xor2(m, n) {
          let rhs = bit_or(bit_not(m), bit_not(n));
          let lhs = bit_or(m, n);
          let rslt = bit_and(lhs, rhs);
          return rslt;
        }

        _Bit.bit_xor2 = bit_xor2;

        function _b2d(arg) {
          let nr = 0;

          for (let i = 0; i < 32; i++) {
            if (arg[i] == 1) {
              nr = nr + data32[i];
            }
          }

          return nr;
        }

        _Bit._b2d = _b2d;

        function _d2b(arg) {
          arg = arg >= 0 ? arg : 0xFFFFFFFF + arg + 1;
          let tr = [];

          for (let i = 0; i < 32; i++) {
            if (arg >= data32[i]) {
              tr[i] = 1;
              arg = arg - data32[i];
            } else {
              tr[i] = 0;
            }
          }

          return tr;
        }

        _Bit._d2b = _d2b;

        function _and(a, b) {
          let op1 = _d2b(a);

          let op2 = _d2b(b);

          let r = [];

          for (let i = 0; i < 32; i++) {
            if (op1[i] == 1 && op2[i] == 1) {
              r[i] = 1;
            } else {
              r[i] = 0;
            }
          }

          return _b2d(r);
        }

        _Bit._and = _and;

        function _rshift(a, n) {
          let op1 = _d2b(a);

          n = n <= 32 ? n : 32;
          n = n >= 0 ? n : 0;
          let count = 0;

          for (let i = 32; i > n; i--) {
            count = count + 1;
            op1[i - 1] = op1[i - 1 - n];
          }

          for (let i = 0; i < n; i++) {
            op1[i] = 0;
          }

          return _b2d(op1);
        }

        _Bit._rshift = _rshift;

        function _not(a) {
          let op1 = _d2b(a);

          let r = [];

          for (let i = 0; i < 32; i++) {
            if (op1[i] == 1) {
              r[i] = 0;
            } else {
              r[i] = 1;
            }
          }

          return _b2d(r);
        }

        _Bit._not = _not;

        function _or(a, b) {
          let op1 = _d2b(a);

          let op2 = _d2b(b);

          let r = [];

          for (let i = 0; i < 32; i++) {
            if (op1[i] == 1 || op2[i] == 1) {
              r[i] = 1;
            } else {
              r[i] = 0;
            }
          }

          return _b2d(r);
        }

        _Bit._or = _or;
      })(Bit || _export("Bit", Bit = {}));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=cb1e2d25249ef8ca2cdb07391ddc312f7bd1335d.js.map