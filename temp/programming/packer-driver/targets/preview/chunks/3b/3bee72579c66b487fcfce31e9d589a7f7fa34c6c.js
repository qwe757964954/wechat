System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, UTF;

  _export("UTF", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9f257GW7ItBprqS1yNV2epE", "UTF", undefined);

      (function (_UTF) {
        function UTF16_to_UTF8(src, dst) {
          var c1,
              c2 = null;

          while (true) {
            if ((c1 = c2 !== null ? c2 : src()) === null) break;

            if (c1 >= 0xD800 && c1 <= 0xDFFF) {
              if ((c2 = src()) !== null) {
                if (c2 >= 0xDC00 && c2 <= 0xDFFF) {
                  dst((c1 - 0xD800) * 0x400 + c2 - 0xDC00 + 0x10000);
                  c2 = null;
                  continue;
                }
              }
            }

            dst(c1);
          }

          if (c2 !== null) dst(c2);
        }

        _UTF.UTF16_to_UTF8 = UTF16_to_UTF8;

        function Encode_UTF16_to_UTF8(src, dst) {
          UTF16_to_UTF8(src, function (cp) {
            Encode_UTF8(cp, dst);
          });
        }

        _UTF.Encode_UTF16_to_UTF8 = Encode_UTF16_to_UTF8;
        ;

        function Encode_UTF8(src, dst) {
          var cp = null;

          if (typeof src === 'number') {
            cp = src, src = function src() {
              return null;
            };
          }

          while (cp !== null || (cp = src()) !== null) {
            if (cp < 0x80) dst(cp & 0x7F);else if (cp < 0x800) dst(cp >> 6 & 0x1F | 0xC0), dst(cp & 0x3F | 0x80);else if (cp < 0x10000) dst(cp >> 12 & 0x0F | 0xE0), dst(cp >> 6 & 0x3F | 0x80), dst(cp & 0x3F | 0x80);else dst(cp >> 18 & 0x07 | 0xF0), dst(cp >> 12 & 0x3F | 0x80), dst(cp >> 6 & 0x3F | 0x80), dst(cp & 0x3F | 0x80);
            cp = null;
          }
        }

        _UTF.Encode_UTF8 = Encode_UTF8;
        ;

        function UTF8_to_UTF16(src, dst) {
          var cp = null;
          if (typeof src === 'number') cp = src, src = function src() {
            return null;
          };

          while (cp !== null || (cp = src()) !== null) {
            if (cp <= 0xFFFF) dst(cp);else cp -= 0x10000, dst((cp >> 10) + 0xD800), dst(cp % 0x400 + 0xDC00);
            cp = null;
          }
        }

        _UTF.UTF8_to_UTF16 = UTF8_to_UTF16;
        ;
        /**解码 */

        function Decode_UTF8_to_UTF16(funcSrc, dst) {
          Decode_UTF8(funcSrc, function (cp) {
            UTF8_to_UTF16(cp, dst);
          });
        }

        _UTF.Decode_UTF8_to_UTF16 = Decode_UTF8_to_UTF16;
        ;

        function Decode_UTF8(funcSrc, dst) {
          var a,
              b,
              c,
              d,
              fail = function fail(b) {
            b = b.slice(0, b.indexOf(null));
            var err = Error(b.toString());
            err.name = "TruncatedError";
            err['bytes'] = b;
            throw err;
          };

          while ((a = funcSrc()) !== null) {
            if ((a & 0x80) === 0) dst(a);else if ((a & 0xE0) === 0xC0) (b = funcSrc()) === null && fail([a, b]), dst((a & 0x1F) << 6 | b & 0x3F);else if ((a & 0xF0) === 0xE0) ((b = funcSrc()) === null || (c = funcSrc()) === null) && fail([a, b, c]), dst((a & 0x0F) << 12 | (b & 0x3F) << 6 | c & 0x3F);else if ((a & 0xF8) === 0xF0) ((b = funcSrc()) === null || (c = funcSrc()) === null || (d = funcSrc()) === null) && fail([a, b, c, d]), dst((a & 0x07) << 18 | (b & 0x3F) << 12 | (c & 0x3F) << 6 | d & 0x3F);else throw RangeError("Illegal starting byte: " + a);
          }
        }

        _UTF.Decode_UTF8 = Decode_UTF8;
        ;
      })(UTF || _export("UTF", UTF = {}));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=3bee72579c66b487fcfce31e9d589a7f7fa34c6c.js.map