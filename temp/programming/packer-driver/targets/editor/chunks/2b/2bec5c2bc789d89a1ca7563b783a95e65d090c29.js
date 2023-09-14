System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, t, n, i, a, o, d;

  // 源码来自于 https://github.com/matt-way/gifuct-js
  // 使用 microbundle 重新打包以减少文件体积
  //@ts-ignore
  function e(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
  }

  function r(e) {
    var r = {
      exports: {}
    };
    return e(r, r.exports), r.exports;
  }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4b10as73vhM7ZHyR7uEwWiy", "gif", undefined);

      t = r(function (e, r) {
        Object.defineProperty(r, "__esModule", {
          value: !0
        }), r.loop = r.conditional = r.parse = void 0, r.parse = function e(r, t) {
          var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
              i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : n;
          if (Array.isArray(t)) t.forEach(function (t) {
            return e(r, t, n, i);
          });else if ("function" == typeof t) t(r, n, i, e);else {
            var a = Object.keys(t)[0];
            Array.isArray(t[a]) ? (i[a] = {}, e(r, t[a], n, i[a])) : i[a] = t[a](r, n, i, e);
          }
          return n;
        }, r.conditional = function (e, r) {
          return function (t, n, i, a) {
            r(t, n, i) && a(t, e, n, i);
          };
        }, r.loop = function (e, r) {
          return function (t, n, i, a) {
            for (var o = [], d = t.pos; r(t, n, i);) {
              var u = {};
              if (a(t, e, n, u), t.pos === d) break;
              d = t.pos, o.push(u);
            }

            return o;
          };
        };
      });
      n = r(function (e, r) {
        Object.defineProperty(r, "__esModule", {
          value: !0
        }), r.readBits = r.readArray = r.readUnsigned = r.readString = r.peekBytes = r.readBytes = r.peekByte = r.readByte = r.buildStream = void 0, r.buildStream = function (e) {
          return {
            data: e,
            pos: 0
          };
        }, r.readByte = function () {
          return function (e) {
            return e.data[e.pos++];
          };
        }, r.peekByte = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
          return function (r) {
            return r.data[r.pos + e];
          };
        };

        var t = function (e) {
          return function (r) {
            return r.data.subarray(r.pos, r.pos += e);
          };
        };

        r.readBytes = t, r.peekBytes = function (e) {
          return function (r) {
            return r.data.subarray(r.pos, r.pos + e);
          };
        }, r.readString = function (e) {
          return function (r) {
            return Array.from(t(e)(r)).map(function (e) {
              return String.fromCharCode(e);
            }).join("");
          };
        }, r.readUnsigned = function (e) {
          return function (r) {
            var n = t(2)(r);
            return e ? (n[1] << 8) + n[0] : (n[0] << 8) + n[1];
          };
        }, r.readArray = function (e, r) {
          return function (n, i, a) {
            for (var o = "function" == typeof r ? r(n, i, a) : r, d = t(e), u = new Array(o), c = 0; c < o; c++) u[c] = d(n);

            return u;
          };
        }, r.readBits = function (e) {
          return function (r) {
            for (var t = function (e) {
              return e.data[e.pos++];
            }(r), n = new Array(8), i = 0; i < 8; i++) n[7 - i] = !!(t & 1 << i);

            return Object.keys(e).reduce(function (r, t) {
              var i = e[t];
              return r[t] = i.length ? function (e, r, t) {
                for (var n = 0, i = 0; i < t; i++) n += e[r + i] && Math.pow(2, t - i - 1);

                return n;
              }(n, i.index, i.length) : n[i.index], r;
            }, {});
          };
        };
      });
      i = /*@__PURE__*/e(r(function (e, r) {
        Object.defineProperty(r, "__esModule", {
          value: !0
        }), r.default = void 0;
        var i = {
          blocks: function (e) {
            for (var r = [], t = e.data.length, i = 0, a = (0, n.readByte)()(e); 0 !== a && a; a = (0, n.readByte)()(e)) {
              if (e.pos + a >= t) {
                var o = t - e.pos;
                r.push((0, n.readBytes)(o)(e)), i += o;
                break;
              }

              r.push((0, n.readBytes)(a)(e)), i += a;
            }

            for (var d = new Uint8Array(i), u = 0, c = 0; c < r.length; c++) d.set(r[c], u), u += r[c].length;

            return d;
          }
        },
            a = (0, t.conditional)({
          gce: [{
            codes: (0, n.readBytes)(2)
          }, {
            byteSize: (0, n.readByte)()
          }, {
            extras: (0, n.readBits)({
              future: {
                index: 0,
                length: 3
              },
              disposal: {
                index: 3,
                length: 3
              },
              userInput: {
                index: 6
              },
              transparentColorGiven: {
                index: 7
              }
            })
          }, {
            delay: (0, n.readUnsigned)(!0)
          }, {
            transparentColorIndex: (0, n.readByte)()
          }, {
            terminator: (0, n.readByte)()
          }]
        }, function (e) {
          var r = (0, n.peekBytes)(2)(e);
          return 33 === r[0] && 249 === r[1];
        }),
            o = (0, t.conditional)({
          image: [{
            code: (0, n.readByte)()
          }, {
            descriptor: [{
              left: (0, n.readUnsigned)(!0)
            }, {
              top: (0, n.readUnsigned)(!0)
            }, {
              width: (0, n.readUnsigned)(!0)
            }, {
              height: (0, n.readUnsigned)(!0)
            }, {
              lct: (0, n.readBits)({
                exists: {
                  index: 0
                },
                interlaced: {
                  index: 1
                },
                sort: {
                  index: 2
                },
                future: {
                  index: 3,
                  length: 2
                },
                size: {
                  index: 5,
                  length: 3
                }
              })
            }]
          }, (0, t.conditional)({
            lct: (0, n.readArray)(3, function (e, r, t) {
              return Math.pow(2, t.descriptor.lct.size + 1);
            })
          }, function (e, r, t) {
            return t.descriptor.lct.exists;
          }), {
            data: [{
              minCodeSize: (0, n.readByte)()
            }, i]
          }]
        }, function (e) {
          return 44 === (0, n.peekByte)()(e);
        }),
            d = (0, t.conditional)({
          text: [{
            codes: (0, n.readBytes)(2)
          }, {
            blockSize: (0, n.readByte)()
          }, {
            preData: function (e, r, t) {
              return (0, n.readBytes)(t.text.blockSize)(e);
            }
          }, i]
        }, function (e) {
          var r = (0, n.peekBytes)(2)(e);
          return 33 === r[0] && 1 === r[1];
        }),
            u = (0, t.conditional)({
          application: [{
            codes: (0, n.readBytes)(2)
          }, {
            blockSize: (0, n.readByte)()
          }, {
            id: function (e, r, t) {
              return (0, n.readString)(t.blockSize)(e);
            }
          }, i]
        }, function (e) {
          var r = (0, n.peekBytes)(2)(e);
          return 33 === r[0] && 255 === r[1];
        }),
            c = (0, t.conditional)({
          comment: [{
            codes: (0, n.readBytes)(2)
          }, i]
        }, function (e) {
          var r = (0, n.peekBytes)(2)(e);
          return 33 === r[0] && 254 === r[1];
        }),
            s = [{
          header: [{
            signature: (0, n.readString)(3)
          }, {
            version: (0, n.readString)(3)
          }]
        }, {
          lsd: [{
            width: (0, n.readUnsigned)(!0)
          }, {
            height: (0, n.readUnsigned)(!0)
          }, {
            gct: (0, n.readBits)({
              exists: {
                index: 0
              },
              resolution: {
                index: 1,
                length: 3
              },
              sort: {
                index: 4
              },
              size: {
                index: 5,
                length: 3
              }
            })
          }, {
            backgroundColorIndex: (0, n.readByte)()
          }, {
            pixelAspectRatio: (0, n.readByte)()
          }]
        }, (0, t.conditional)({
          gct: (0, n.readArray)(3, function (e, r) {
            return Math.pow(2, r.lsd.gct.size + 1);
          })
        }, function (e, r) {
          return r.lsd.gct.exists;
        }), {
          frames: (0, t.loop)([a, u, c, o, d], function (e) {
            var r = (0, n.peekByte)()(e);
            return 33 === r || 44 === r;
          })
        }];
        r.default = s;
      }));

      _export("parseGIF", a = function (e) {
        var r = new Uint8Array(e);
        return t.parse(n.buildStream(r), i);
      });

      _export("decompressFrame", o = function (e, r, t) {
        if (e.image) {
          var n = e.image,
              i = function (e, r, t) {
            var n,
                i,
                a,
                o,
                d,
                u,
                c,
                s,
                f,
                l,
                p,
                y,
                g,
                h,
                v,
                x,
                B = 4096,
                m = t,
                b = new Array(t),
                k = new Array(B),
                w = new Array(B),
                A = new Array(4097);

            for (d = 1 + (i = 1 << (l = e)), n = i + 2, c = -1, a = (1 << (o = l + 1)) - 1, s = 0; s < i; s++) k[s] = 0, w[s] = s;

            for (p = y = g = h = v = x = 0, f = 0; f < m;) {
              if (0 === h) {
                if (y < o) {
                  p += r[x] << y, y += 8, x++;
                  continue;
                }

                if (s = p & a, p >>= o, y -= o, s > n || s == d) break;

                if (s == i) {
                  a = (1 << (o = l + 1)) - 1, n = i + 2, c = -1;
                  continue;
                }

                if (-1 == c) {
                  A[h++] = w[s], c = s, g = s;
                  continue;
                }

                for (u = s, s == n && (A[h++] = g, s = c); s > i;) A[h++] = w[s], s = k[s];

                A[h++] = g = 255 & w[s], n < B && (k[n] = c, w[n] = g, 0 == (++n & a) && n < B && (o++, a += n)), c = u;
              }

              h--, b[v++] = A[h], f++;
            }

            for (f = v; f < m; f++) b[f] = 0;

            return b;
          }(n.data.minCodeSize, n.data.blocks, n.descriptor.width * n.descriptor.height);

          n.descriptor.lct.interlaced && (i = function (e, r) {
            for (var t = new Array(e.length), n = e.length / r, i = function (n, i) {
              var a = e.slice(i * r, (i + 1) * r);
              t.splice.apply(t, [n * r, r].concat(a));
            }, a = [0, 4, 2, 1], o = [8, 8, 4, 2], d = 0, u = 0; u < 4; u++) for (var c = a[u]; c < n; c += o[u]) i(c, d), d++;

            return t;
          }(i, n.descriptor.width));
          var a = {
            pixels: i,
            dims: {
              top: e.image.descriptor.top,
              left: e.image.descriptor.left,
              width: e.image.descriptor.width,
              height: e.image.descriptor.height
            }
          };
          return a.colorTable = n.descriptor.lct && n.descriptor.lct.exists ? n.lct : r, e.gce && (a.delay = 10 * (e.gce.delay || 10), a.disposalType = e.gce.extras.disposal, e.gce.extras.transparentColorGiven && (a.transparentIndex = e.gce.transparentColorIndex)), t && (a.patch = function (e) {
            for (var r = e.pixels.length, t = new Uint8ClampedArray(4 * r), n = 0; n < r; n++) {
              var i = 4 * n,
                  a = e.pixels[n],
                  o = e.colorTable[a] || [0, 0, 0];
              t[i] = o[0], t[i + 1] = o[1], t[i + 2] = o[2], t[i + 3] = a !== e.transparentIndex ? 255 : 0;
            }

            return t;
          }(a)), a;
        }

        console.warn("gif frame does not have associated image.");
      });

      _export("decompressFrames", d = function (e, r) {
        return e.frames.filter(function (e) {
          return e.image;
        }).map(function (t) {
          return o(t, e.gct, r);
        });
      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=2bec5c2bc789d89a1ca7563b783a95e65d090c29.js.map