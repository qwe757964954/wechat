System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, Int64, _crd;

  _export("Int64", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b40dfvw1cxD2aGaid1ItZgg", "Int64", undefined);

      //     Int64.js
      //
      //     Copyright (c) 2012 Robert Kieffer
      //     MIT License - http://opensource.org/licenses/mit-license.php

      /**
       * Support for handling 64-bit int numbers in Javascript (node.js)
       *
       * JS Numbers are IEEE-754 binary double-precision floats, which limits the
       * range of values that can be represented with integer precision to:
       *
       * 2^^53 <= N <= 2^53
       *
       * Int64 objects wrap a node Buffer that holds the 8-bytes of int64 data.  These
       * objects operate directly on the buffer which means that if they are created
       * using an existing buffer then setting the value will modify the Buffer, and
       * vice-versa.
       *
       * Internal Representation
       *
       * The internal buffer format is Big Endian.  I.e. the most-significant byte is
       * at buffer[0], the least-significant at buffer[7].  For the purposes of
       * converting to/from JS native numbers, the value is assumed to be a signed
       * integer stored in 2's complement form.
       *
       * For details about IEEE-754 see:
       * http://en.wikipedia.org/wiki/Double_precision_floating-point_format
       */
      //
      // Int64
      //
      _export("Int64", Int64 = class Int64 {
        // Useful masks and values for bit twiddling

        /**
         * Constructor accepts any of the following argument types:
         *
         * new Int64(buffer[, offset=0]) - Existing Buffer with byte offset
         * new Int64(Uint8Array[, offset=0]) - Existing Uint8Array with a byte offset
         * new Int64(string)             - Hex string (throws if n is outside int64 range)
         * new Int64(number)             - Number (throws if n is outside int64 range)
         * new Int64(hi, lo)             - Raw bits as two 32-bit values
         */
        constructor(a1, a2) {
          this.buffer = void 0;
          this.offset = void 0;

          this._buildHex();

          if (a1 instanceof Array) {
            this.buffer = a1;
            this.offset = a2 || 0;
          } else if (Object.prototype.toString.call(a1) == '[object Uint8Array]') {
            // Under Browserify, Buffers can extend Uint8Arrays rather than an
            // instance of Buffer. We could assume the passed in Uint8Array is actually
            // a buffer but that won't handle the case where a raw Uint8Array is passed
            // in. We construct a new Buffer just in case.
            this.buffer = Array.apply([], a1);
            this.offset = a2 || 0;
          } else {
            this.buffer = this.buffer || [];
            this.offset = 0;
            this.setValue.apply(this, arguments);
          }
        } // Map for converting hex octets to strings


        _buildHex() {
          //Int64._HEX = [];
          for (var i = 0; i < 256; i++) {
            Int64._HEX[i] = (i > 0xF ? '' : '0') + i.toString(16);
          }
        }
        /**
         * Do in-place 2's compliment.  See
         * http://en.wikipedia.org/wiki/Two's_complement
         */


        _2scomp() {
          var b = this.buffer,
              o = this.offset,
              carry = 1;

          for (var i = o + 7; i >= o; i--) {
            var v = (b[i] ^ 0xff) + carry;
            b[i] = v & 0xff;
            carry = v >> 8;
          }
        }
        /**
         * Set the value. Takes any of the following arguments:
         *
         * setValue(string) - A hexidecimal string
         * setValue(number) - Number (throws if n is outside int64 range)
         * setValue(hi, lo) - Raw bits as two 32-bit values
         */


        setValue(hi, lo) {
          var negate = false;

          if (arguments.length == 1) {
            if (typeof hi == 'number') {
              // Simplify bitfield retrieval by using abs() value.  We restore sign
              // later
              negate = hi < 0;
              hi = Math.abs(hi);
              lo = hi % Int64.VAL32;
              hi = hi / Int64.VAL32;
              if (hi > Int64.VAL32) throw new RangeError(hi + ' is outside Int64 range');
              hi = hi | 0;
            } else if (typeof hi == 'string') {
              hi = (hi + '').replace(/^0x/, '');
              lo = hi.substr(-8);
              hi = hi.length > 8 ? hi.substr(0, hi.length - 8) : '';
              hi = parseInt(hi, 16);
              lo = parseInt(lo, 16);
            } else {
              throw new Error(hi + ' must be a Number or String');
            }
          } // Technically we should throw if hi or lo is outside int32 range here, but
          // it's not worth the effort. Anything past the 32'nd bit is ignored.
          // Copy bytes to buffer


          var b = this.buffer,
              o = this.offset;

          for (var i = 7; i >= 0; i--) {
            b[o + i] = lo & 0xff;
            lo = i == 4 ? hi : lo >>> 8;
          } // Restore sign of passed argument


          if (negate) this._2scomp();
        }
        /**
         * Convert to a native JS number.
         *
         * WARNING: Do not expect this value to be accurate to integer precision for
         * large (positive or negative) numbers!
         *
         * @param allowImprecise If true, no check is performed to verify the
         * returned value is accurate to integer precision.  If false, imprecise
         * numbers (very large positive or negative numbers) will be forced to +/-
         * Infinity.
         * 如果为true，则不执行任何检查以验证返回值是否精确到整数精度。
         * 如果为false，则不精确的数字（非常大的正数或负数）将强制为+/-无穷大。
         */


        toNumber(allowImprecise = false) {
          var b = this.buffer,
              o = this.offset; // Running sum of octets, doing a 2's complement

          var negate = b[o] & 0x80,
              x = 0,
              carry = 1;

          for (var i = 7, m = 1; i >= 0; i--, m *= 256) {
            var v = b[o + i]; // 2's complement for negative numbers

            if (negate) {
              v = (v ^ 0xff) + carry;
              carry = v >> 8;
              v = v & 0xff;
            }

            x += v * m;
          } // Return Infinity if we've lost integer precision


          if (!allowImprecise && x >= Int64.MAX_INT) {
            return negate ? -Infinity : Infinity;
          }

          return negate ? -x : x;
        }
        /**
         * Convert to a JS Number. Returns +/-Infinity for values that can't be
         * represented to integer precision.
         * 转换为JS编号。对于不能表示为整数精度的值，返回+/-无穷大。
         */


        valueOf() {
          return this.toNumber(false);
        }
        /**
         * Return string value
         *
         * @param radix Just like Number#toString()'s radix
         */


        toString(radix = 10) {
          return this.valueOf().toString(radix);
        }
        /**
         * Return a string showing the buffer octets, with MSB on the left.
         * 返回一个显示缓冲区八位字节的字符串，左边是MSB。
         * @param sep separator string. default is '' (empty string)
         */


        toOctetString(sep = '') {
          var out = new Array(8);
          var b = this.buffer,
              o = this.offset;

          for (var i = 0; i < 8; i++) {
            out[i] = Int64._HEX[b[o + i]];
          }

          return out.join(sep || '');
        }
        /**
         * Returns the int64's 8 bytes in a buffer.
         * 返回缓冲区中int64的8个字节。
         * @param {bool} [rawBuffer=false]  If no offset and this is true, return the internal buffer.  Should only be used if
         *                                  you're discarding the Int64 afterwards, as it breaks encapsulation.
         * 如果没有偏移量且这是真的，则返回内部缓冲区。只有在以后丢弃Int64时才应使用，因为它会破坏封装
         */


        toBuffer(rawBuffer = false) {
          if (rawBuffer && this.offset === 0) return this.buffer;
          var out = Array.call([], this.buffer);
          return out;
        }
        /**
         * 比较
         * Returns a number indicating whether this comes before or after or is the
         * same as the other in sort order.
         * 返回一个数字，指示该值是在排序顺序之前还是之后，或者与其他值相同。
         * @param {Int64} other  Other Int64 to compare.
         */


        compare(other) {
          // If sign bits differ ...
          if ((this.buffer[this.offset] & 0x80) != (other.buffer[other.offset] & 0x80)) {
            return other.buffer[other.offset] - this.buffer[this.offset];
          } // otherwise, compare bytes lexicographically


          for (var i = 0; i < 8; i++) {
            if (this.buffer[this.offset + i] !== other.buffer[other.offset + i]) {
              return this.buffer[this.offset + i] - other.buffer[other.offset + i];
            }
          }

          return 0;
        }
        /**
         * Returns a boolean indicating if this integer is equal to other.
         *
         * @param {Int64} other  Other Int64 to compare.
         */


        equals(other) {
          return this.compare(other) === 0;
        }
        /**
         * Pretty output in console.log
         */


        inspect() {
          return '[Int64 value:' + this + ' octets:' + this.toOctetString(' ') + ']';
        }

      });

      Int64.MASK31 = 0x7fffffff;
      Int64.VAL31 = 0x80000000;
      Int64.MASK32 = 0xffffffff;
      Int64.VAL32 = 0x100000000;
      Int64.MAX_INT = Math.pow(2, 53);
      Int64.MIN_INT = -Math.pow(2, 53);
      Int64._HEX = new Array();

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=fc7e729ae31e71bb5a7603703d538a44469c9523.js.map