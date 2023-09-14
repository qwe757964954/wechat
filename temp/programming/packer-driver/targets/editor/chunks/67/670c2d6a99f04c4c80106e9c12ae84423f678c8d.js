System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, _base64keyStr, _sendByteList, _receiveByteList, Encrypt;

  _export("Encrypt", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a24ffF+f+5KloZ6h4bLNh7N", "Encrypto", undefined);

      /**
       * Name = Encrypt
       * URL = db://assets/framework/crypto/Encrypt.ts
       * Time = Thu Apr 07 2022 15:30:42 GMT+0800 (中国标准时间)
       * Author = xueya
       * 加解密
       */
      _base64keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="; //发送字节映射表

      _sendByteList = [0x70, 0x2F, 0x40, 0x5F, 0x44, 0x8E, 0x6E, 0x45, 0x7E, 0xAB, 0x2C, 0x1F, 0xB4, 0xAC, 0x9D, 0x91, 0x0D, 0x36, 0x9B, 0x0B, 0xD4, 0xC4, 0x39, 0x74, 0xBF, 0x23, 0x16, 0x14, 0x06, 0xEB, 0x04, 0x3E, 0x12, 0x5C, 0x8B, 0xBC, 0x61, 0x63, 0xF6, 0xA5, 0xE1, 0x65, 0xD8, 0xF5, 0x5A, 0x07, 0xF0, 0x13, 0xF2, 0x20, 0x6B, 0x4A, 0x24, 0x59, 0x89, 0x64, 0xD7, 0x42, 0x6A, 0x5E, 0x3D, 0x0A, 0x77, 0xE0, 0x80, 0x27, 0xB8, 0xC5, 0x8C, 0x0E, 0xFA, 0x8A, 0xD5, 0x29, 0x56, 0x57, 0x6C, 0x53, 0x67, 0x41, 0xE8, 0x00, 0x1A, 0xCE, 0x86, 0x83, 0xB0, 0x22, 0x28, 0x4D, 0x3F, 0x26, 0x46, 0x4F, 0x6F, 0x2B, 0x72, 0x3A, 0xF1, 0x8D, 0x97, 0x95, 0x49, 0x84, 0xE5, 0xE3, 0x79, 0x8F, 0x51, 0x10, 0xA8, 0x82, 0xC6, 0xDD, 0xFF, 0xFC, 0xE4, 0xCF, 0xB3, 0x09, 0x5D, 0xEA, 0x9C, 0x34, 0xF9, 0x17, 0x9F, 0xDA, 0x87, 0xF8, 0x15, 0x05, 0x3C, 0xD3, 0xA4, 0x85, 0x2E, 0xFB, 0xEE, 0x47, 0x3B, 0xEF, 0x37, 0x7F, 0x93, 0xAF, 0x69, 0x0C, 0x71, 0x31, 0xDE, 0x21, 0x75, 0xA0, 0xAA, 0xBA, 0x7C, 0x38, 0x02, 0xB7, 0x81, 0x01, 0xFD, 0xE7, 0x1D, 0xCC, 0xCD, 0xBD, 0x1B, 0x7A, 0x2A, 0xAD, 0x66, 0xBE, 0x55, 0x33, 0x03, 0xDB, 0x88, 0xB2, 0x1E, 0x4E, 0xB9, 0xE6, 0xC2, 0xF7, 0xCB, 0x7D, 0xC9, 0x62, 0xC3, 0xA6, 0xDC, 0xA7, 0x50, 0xB5, 0x4B, 0x94, 0xC0, 0x92, 0x4C, 0x11, 0x5B, 0x78, 0xD9, 0xB1, 0xED, 0x19, 0xE9, 0xA1, 0x1C, 0xB6, 0x32, 0x99, 0xA3, 0x76, 0x9E, 0x7B, 0x6D, 0x9A, 0x30, 0xD6, 0xA9, 0x25, 0xC7, 0xAE, 0x96, 0x35, 0xD0, 0xBB, 0xD2, 0xC8, 0xA2, 0x08, 0xF3, 0xD1, 0x73, 0xF4, 0x48, 0x2D, 0x90, 0xCA, 0xE2, 0x58, 0xC1, 0x18, 0x52, 0xFE, 0xDF, 0x68, 0x98, 0x54, 0xEC, 0x60, 0x43, 0x0F]; //接收字节映射表

      _receiveByteList = [0x51, 0xA1, 0x9E, 0xB0, 0x1E, 0x83, 0x1C, 0x2D, 0xE9, 0x77, 0x3D, 0x13, 0x93, 0x10, 0x45, 0xFF, 0x6D, 0xC9, 0x20, 0x2F, 0x1B, 0x82, 0x1A, 0x7D, 0xF5, 0xCF, 0x52, 0xA8, 0xD2, 0xA4, 0xB4, 0x0B, 0x31, 0x97, 0x57, 0x19, 0x34, 0xDF, 0x5B, 0x41, 0x58, 0x49, 0xAA, 0x5F, 0x0A, 0xEF, 0x88, 0x01, 0xDC, 0x95, 0xD4, 0xAF, 0x7B, 0xE3, 0x11, 0x8E, 0x9D, 0x16, 0x61, 0x8C, 0x84, 0x3C, 0x1F, 0x5A, 0x02, 0x4F, 0x39, 0xFE, 0x04, 0x07, 0x5C, 0x8B, 0xEE, 0x66, 0x33, 0xC4, 0xC8, 0x59, 0xB5, 0x5D, 0xC2, 0x6C, 0xF6, 0x4D, 0xFB, 0xAE, 0x4A, 0x4B, 0xF3, 0x35, 0x2C, 0xCA, 0x21, 0x78, 0x3B, 0x03, 0xFD, 0x24, 0xBD, 0x25, 0x37, 0x29, 0xAC, 0x4E, 0xF9, 0x92, 0x3A, 0x32, 0x4C, 0xDA, 0x06, 0x5E, 0x00, 0x94, 0x60, 0xEC, 0x17, 0x98, 0xD7, 0x3E, 0xCB, 0x6A, 0xA9, 0xD9, 0x9C, 0xBB, 0x08, 0x8F, 0x40, 0xA0, 0x6F, 0x55, 0x67, 0x87, 0x54, 0x80, 0xB2, 0x36, 0x47, 0x22, 0x44, 0x63, 0x05, 0x6B, 0xF0, 0x0F, 0xC7, 0x90, 0xC5, 0x65, 0xE2, 0x64, 0xFA, 0xD5, 0xDB, 0x12, 0x7A, 0x0E, 0xD8, 0x7E, 0x99, 0xD1, 0xE8, 0xD6, 0x86, 0x27, 0xBF, 0xC1, 0x6E, 0xDE, 0x9A, 0x09, 0x0D, 0xAB, 0xE1, 0x91, 0x56, 0xCD, 0xB3, 0x76, 0x0C, 0xC3, 0xD3, 0x9F, 0x42, 0xB6, 0x9B, 0xE5, 0x23, 0xA7, 0xAD, 0x18, 0xC6, 0xF4, 0xB8, 0xBE, 0x15, 0x43, 0x70, 0xE0, 0xE7, 0xBC, 0xF1, 0xBA, 0xA5, 0xA6, 0x53, 0x75, 0xE4, 0xEB, 0xE6, 0x85, 0x14, 0x48, 0xDD, 0x38, 0x2A, 0xCC, 0x7F, 0xB1, 0xC0, 0x71, 0x96, 0xF8, 0x3F, 0x28, 0xF2, 0x69, 0x74, 0x68, 0xB7, 0xA3, 0x50, 0xD0, 0x79, 0x1D, 0xFC, 0xCE, 0x8A, 0x8D, 0x2E, 0x62, 0x30, 0xEA, 0xED, 0x2B, 0x26, 0xB9, 0x81, 0x7C, 0x46, 0x89, 0x73, 0xA2, 0xF7, 0x72];

      (function (_Encrypt) {
        function UnicodeDecode(str, delFault) {
          if (!str) {
            return delFault || null;
          }

          return eval("'" + str + "'");
        }

        _Encrypt.UnicodeDecode = UnicodeDecode;

        function UnicodeEncode(convertStr, delFault) {
          let stringBytes = stringToByte(convertStr);

          if (!stringBytes) {
            return delFault || null;
          }

          return escape(convertStr).replace(/\%u/g, '\\u');
        }

        _Encrypt.UnicodeEncode = UnicodeEncode;

        function stringToByte(str, isUTF8 = true) {
          if (!str) {
            return null;
          }

          str = String(str);
          let bytes = new Array();
          let len, c;
          len = str.length;

          if (isUTF8 == true) {
            for (let i = 0; i < len; i++) {
              c = str.charCodeAt(i);

              if (c >= 0x010000 && c <= 0x10FFFF) {
                bytes.push(c >> 18 & 0x07 | 0xF0);
                bytes.push(c >> 12 & 0x3F | 0x80);
                bytes.push(c >> 6 & 0x3F | 0x80);
                bytes.push(c & 0x3F | 0x80);
              } else if (c >= 0x000800 && c <= 0x00FFFF) {
                bytes.push(c >> 12 & 0x0F | 0xE0);
                bytes.push(c >> 6 & 0x3F | 0x80);
                bytes.push(c & 0x3F | 0x80);
              } else if (c >= 0x000080 && c <= 0x0007FF) {
                bytes.push(c >> 6 & 0x1F | 0xC0);
                bytes.push(c & 0x3F | 0x80);
              } else {
                bytes.push(c & 0xFF);
              }
            }
          } else {
            for (let i = 0; i < len; i++) {
              c = null;
              c = str.charCodeAt(i);
              bytes.push(c);
            }

            return bytes;
          }

          return bytes;
        }

        _Encrypt.stringToByte = stringToByte;

        function bytesToString(bytes, isUTF8 = true) {
          if (!bytes) {
            return null;
          }

          if (typeof bytes === 'string') {
            return bytes;
          }

          let str = [];
          let _arr = bytes;

          if (isUTF8 == true) {
            for (let i = 0; i < _arr.length; i++) {
              let one = _arr[i].toString(2);

              let v = one.match(/^1+?(?=0)/);

              if (v && one.length == 8) {
                let bytesLength = v[0].length;

                let store = _arr[i].toString(2).slice(7 - bytesLength);

                for (let st = 1; st < bytesLength; st++) {
                  store += _arr[st + i].toString(2).slice(2);
                }

                str.push(String.fromCharCode(parseInt(store, 2)));
                i += bytesLength - 1;
              } else {
                str.push(String.fromCharCode(_arr[i]));
              }
            }
          } else {
            for (let i = 0; i < bytes.length; i++) {
              str.push(String.fromCharCode(bytes[i]));
            }
          }

          return str.join("");
        }

        _Encrypt.bytesToString = bytesToString;

        function bytesToHexString(arrBytes) {
          let str = "";

          for (var i = 0; i < arrBytes.length; i++) {
            let tmp;
            let num = arrBytes[i];

            if (num < 0) {
              //此处填坑，当byte因为符合位导致数值为负时候，需要对数据进行处理
              tmp = (255 + num + 1).toString(16);
            } else {
              tmp = num.toString(16);
            }

            if (tmp.length == 1) {
              tmp = "0" + tmp;
            }

            str += tmp;
          }

          return str;
        }

        _Encrypt.bytesToHexString = bytesToHexString;

        function stringToHex(arr) {
          if (!arr) {
            return null;
          }

          arr = String(arr);
          let val = "";

          for (let i = 0; i < arr.length; i++) {
            if (val == "") {
              val = arr.charCodeAt(i).toString(16);
            } else {
              val += arr.charCodeAt(i).toString(16);
            }
          }

          return val;
        }

        _Encrypt.stringToHex = stringToHex;

        function hexStringToString(arr) {
          if (!arr) {
            return null;
          }

          arr = String(arr);
          let val = "",
              len = arr.length / 2;

          for (var i = 0; i < len; i++) {
            val += String.fromCharCode(parseInt(arr.substring(i * 2, 2), 16));
          }

          console.log('16进制转字符串', val);
          return val;
        }

        _Encrypt.hexStringToString = hexStringToString;

        function hexToByte(arr) {
          return parseInt(arr, 16);
        }

        _Encrypt.hexToByte = hexToByte;

        function hexStringToBytes(arr) {
          let hexlen = arr.length;
          let uint8Array;

          if (hexlen % 2 == 1) {
            // 奇数
            hexlen++;
            uint8Array = new Uint8Array(hexlen / 2);
            arr = "0" + arr;
          } else {
            // 偶数
            uint8Array = new Uint8Array(hexlen / 2);
          }

          let j = 0;

          for (let i = 0; i < hexlen; i += 2) {
            uint8Array[j] = hexToByte(arr.substring(i, i + 2));
            j++;
          }

          let result = []; // byte队列

          for (let index = 0; index < uint8Array.byteLength; index++) {
            result.push(uint8Array[index]);
          }

          return result;
        }

        _Encrypt.hexStringToBytes = hexStringToBytes;

        function utf8to16(str) {
          var out, i, len, c;
          var char2, char3;
          out = "";
          len = str.length;
          i = 0;

          while (i < len) {
            c = str.charCodeAt(i++);

            switch (c >> 4) {
              case 0:
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
              case 6:
              case 7:
                out += str.charAt(i - 1);
                break;

              case 12:
              case 13:
                char2 = str.charCodeAt(i++);
                out += String.fromCharCode((c & 0x1F) << 6 | char2 & 0x3F);
                break;

              case 14:
                char2 = str.charCodeAt(i++);
                char3 = str.charCodeAt(i++);
                out += String.fromCharCode((c & 0x0F) << 12 | (char2 & 0x3F) << 6 | (char3 & 0x3F) << 0);
                break;
            }
          }

          console.log('out:', out);
          return out;
        }

        _Encrypt.utf8to16 = utf8to16;

        function utf8_encode(str) {
          if (!str || !str.replace) {
            return;
          }

          str = str.replace(/\r\n/g, "\n");
          let utftext = "";

          for (let n = 0; n < str.length; n++) {
            let c = str.charCodeAt(n);

            if (c < 128) {
              utftext += String.fromCharCode(c);
            } else if (c > 127 && c < 2048) {
              utftext += String.fromCharCode(c >> 6 | 192);
              utftext += String.fromCharCode(c & 63 | 128);
            } else {
              utftext += String.fromCharCode(c >> 12 | 224);
              utftext += String.fromCharCode(c >> 6 & 63 | 128);
              utftext += String.fromCharCode(c & 63 | 128);
            }
          }

          return utftext;
        }

        _Encrypt.utf8_encode = utf8_encode;

        function utf8_decode(utftext) {
          if (!utftext) {
            return "";
          }

          utftext = String(utftext);
          let str = "";
          let i = 0;
          let c = 0;
          let c1 = c;
          let c2 = c;

          while (i < utftext.length) {
            c = utftext.charCodeAt(i);

            if (c < 128) {
              str += String.fromCharCode(c);
              i++;
            } else if (c > 191 && c < 224) {
              c1 = utftext.charCodeAt(i + 1);
              str += String.fromCharCode((c & 31) << 6 | c1 & 63);
              i += 2;
            } else {
              c1 = utftext.charCodeAt(i + 1);
              c2 = utftext.charCodeAt(i + 2);
              str += String.fromCharCode((c & 15) << 12 | (c1 & 63) << 6 | c2 & 63);
              i += 3;
            }
          }

          return str;
        }

        _Encrypt.utf8_decode = utf8_decode;

        function base64_encode(input, isUtf8Encode) {
          if (!input) {
            return null;
          }

          input = String(input);
          let output = "";
          let chr1, chr2, chr3, enc1, enc2, enc3, enc4;
          let i = 0;

          if (isUtf8Encode) {
            input = utf8_encode(input);
          }

          while (i < input.length) {
            chr1 = input.charCodeAt(i++);
            chr2 = input.charCodeAt(i++);
            chr3 = input.charCodeAt(i++);
            enc1 = chr1 >> 2;
            enc2 = (chr1 & 3) << 4 | chr2 >> 4;
            enc3 = (chr2 & 15) << 2 | chr3 >> 6;
            enc4 = chr3 & 63;

            if (isNaN(chr2)) {
              enc3 = enc4 = 64;
            } else if (isNaN(chr3)) {
              enc4 = 64;
            }

            output = output + _base64keyStr.charAt(enc1) + _base64keyStr.charAt(enc2) + _base64keyStr.charAt(enc3) + _base64keyStr.charAt(enc4);
          }

          if (input.length > 0 && output.length < 1) {
            return null;
          }

          return output;
        }

        _Encrypt.base64_encode = base64_encode;

        function base64_decode(input, isUtf8Decode) {
          if (!input) {
            return null;
          }

          input = String(input);
          let output = "";
          let outBytes = [];
          let chr1, chr2, chr3;
          let enc1, enc2, enc3, enc4;
          let i = 0;
          input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");

          while (i < input.length) {
            enc1 = _base64keyStr.indexOf(input.charAt(i++));
            enc2 = _base64keyStr.indexOf(input.charAt(i++));
            enc3 = _base64keyStr.indexOf(input.charAt(i++));
            enc4 = _base64keyStr.indexOf(input.charAt(i++));
            chr1 = enc1 << 2 | enc2 >> 4;
            chr2 = (enc2 & 15) << 4 | enc3 >> 2;
            chr3 = (enc3 & 3) << 6 | enc4;
            output = output + String.fromCharCode(chr1);

            if (enc3 != 64) {
              output = output + String.fromCharCode(chr2);
            }

            if (enc4 != 64) {
              output = output + String.fromCharCode(chr3);
            }
          }

          if (isUtf8Decode) {
            output = utf8_decode(output);
          }

          if (input.length > 0 && output.length < 1) {
            return null;
          }

          return output;
        }

        _Encrypt.base64_decode = base64_decode;
        ;
        /**
         * base64转无符号字节数组
         * @param base64String 
         * @returns 
         */

        function base64ToUint8Array(base64String) {
          let padding = '='.repeat((4 - base64String.length % 4) % 4);
          let base64 = (base64String + padding).replace(/\-/g, '+').replace(/_/g, '/');
          let rawData = base64_decode(base64);
          let outputArray = new Uint8Array(rawData.length);

          for (let i = 0; i < rawData.length; ++i) {
            outputArray[i] = rawData.charCodeAt(i);
          }

          return outputArray;
        }

        _Encrypt.base64ToUint8Array = base64ToUint8Array;

        function uint8ArrayToBase64(buffer) {
          let binary = '';
          let bytes;

          if (buffer instanceof Uint8Array) {
            bytes = buffer;
          } else {
            bytes = new Uint8Array(buffer);
          }

          let len = bytes.byteLength;

          for (var i = 0; i < len; i++) {
            binary += String.fromCharCode(bytes[i]);
          }

          return base64_encode(binary);
        }

        _Encrypt.uint8ArrayToBase64 = uint8ArrayToBase64;

        function arrayBufferToString(buffer, isSymbol = false, isUTF = false) {
          if (!buffer || (buffer == null ? void 0 : buffer.byteLength) == null) {
            return null;
          }

          let bytes = [];
          let byteArray;
          let str = "";

          if (isSymbol == true) {
            byteArray = new Int8Array(buffer);

            for (let index = 0; index < byteArray.byteLength; index++) {
              bytes[index] = byteArray[index];
            }
          } else {
            byteArray = new Uint8Array(buffer);

            for (let index = 0; index < byteArray.byteLength; index++) {
              bytes[index] = byteArray[index];
            }
          }

          if (bytes.length > 0) {
            str = bytesToString(bytes, isUTF);
          }

          return str;
        }

        _Encrypt.arrayBufferToString = arrayBufferToString;

        function stringToArrayBuffer(str, isSymbol = false, isUTF = false) {
          if (!str) {
            return null;
          }

          str = String(str);
          let bytes = stringToByte(str, isUTF); //构建正文数据

          let newBuffer = new ArrayBuffer(bytes.length);
          let newDataView = new DataView(newBuffer); //写正文

          if (isSymbol == true) {
            for (let index = 0; index < bytes.length; index++) {
              newDataView.setInt8(index, bytes[index]);
            }
          } else {
            for (let index = 0; index < bytes.length; index++) {
              newDataView.setUint8(index, bytes[index]);
            }
          }

          let arrayBuffer = newDataView.buffer.slice(0, newDataView.buffer.byteLength);
          return arrayBuffer;
        }

        _Encrypt.stringToArrayBuffer = stringToArrayBuffer;

        function bytesToUint8Array(bytes, isSymbol = false) {
          if (!bytes || bytes.length == null) {
            return null;
          } //构建正文数据


          let newBuffer = new ArrayBuffer(bytes.length);
          let newDataView = new DataView(newBuffer);
          let array;

          if (isSymbol == true) {
            for (let index = 0; index < bytes.length; index++) {
              newDataView.setInt8(index, bytes[index]);
            }

            let arrayBuffer = newDataView.buffer.slice(0, newDataView.buffer.byteLength);
            array = new Int8Array(arrayBuffer);
          } else {
            for (let index = 0; index < bytes.length; index++) {
              newDataView.setUint8(index, bytes[index]);
            }

            let arrayBuffer = newDataView.buffer.slice(0, newDataView.buffer.byteLength);
            array = new Uint8Array(arrayBuffer);
          }

          return array;
        }

        _Encrypt.bytesToUint8Array = bytesToUint8Array;

        function createWordArray() {
          return utf8Parse("");
        }

        _Encrypt.createWordArray = createWordArray;

        function aesEncrypt(msg, key, iv) {
          msg = String(msg);
          key = String(key);
          iv = String(iv);
          let encrypt = CryptoJS.AES.encrypt(msg, utf8Parse(key), {
            iv: utf8Parse(iv),
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
          });
          return encrypt.toString(); //base64输出的
        }

        _Encrypt.aesEncrypt = aesEncrypt;

        function aesDecrypt(str, key, iv) {
          str = String(str);
          key = String(key);
          iv = String(iv);
          let decrypt = CryptoJS.AES.decrypt(str, utf8Parse(key), {
            iv: utf8Parse(iv),
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
          });
          return CryptoJS.enc.Utf8.stringify(decrypt);
        }

        _Encrypt.aesDecrypt = aesDecrypt;

        /**
         * 字符串转WordArray
         * @param utf8Str 
         * @returns 单词集合 WordArray
         */
        function utf8Parse(utf8Str) {
          return CryptoJS.enc.Utf8.parse(utf8Str);
        } //-------------------------------Json扩展-----------------------------------------

        /**
         * json编码,通常将一个对象或数组编码成字符串的形式,等价于 json.stringify
         * @param value 值要转换的JavaScript值，通常是对象或数组。
         * @param replacer 替换用于转换结果的函数。
         * @param space 空格将缩进、空格和换行字符添加到返回值JSON文本中，以便于阅读。
         * @returns 结果:字符串
         */


        function JsonEncode(value, replacer, space) {
          let res = "";

          try {
            res = JSON.stringify(value, replacer, space);
          } catch (error) {
            console.error("JsonEncode Error:" + error);
          }

          return res;
        }

        _Encrypt.JsonEncode = JsonEncode;

        function JsonEncode2(value, replacer, space) {
          let res = "";

          try {
            return JSON.stringify(value, replacer, space);
          } catch (error) {
            console.error("JsonEncode Error:" + error);
          }

          return res;
        }

        _Encrypt.JsonEncode2 = JsonEncode2;

        function JsonDecode(text, reviver) {
          if (!text || text == "") {
            return text;
          }

          let res = null;

          try {
            return JSON.parse(text, reviver);
          } catch (error) {
            console.error("解析Json出错,", text);
            console.error("JsonDecode Error:" + error);
          }

          return res;
        }

        _Encrypt.JsonDecode = JsonDecode;

        function UnZlibZip(str) {
          if (!str) {
            return null;
          }

          let data = null;

          try {
            // @ts-ignore
            data = pako.inflate(str, {
              to: 'string'
            });
          } catch (error) {
            console.error(error);
          }

          return data;
        }

        _Encrypt.UnZlibZip = UnZlibZip;

        function ZlibZip(data, level) {
          if (!data) {
            return null;
          }

          let binaryString = null;

          try {
            //@ts-ignore
            binaryString = pako.deflate(data, {
              to: 'string',
              level: level || 9
            });
          } catch (error) {
            console.error(error);
          }

          return binaryString;
        }

        _Encrypt.ZlibZip = ZlibZip;

        function UnZlibZipRaw(str) {
          if (!str) {
            return null;
          }

          let data = null;

          try {
            // @ts-ignore
            data = pako.inflateRaw(str, {
              to: 'string'
            });
          } catch (error) {
            console.error(error);
          }

          return data;
        }

        _Encrypt.UnZlibZipRaw = UnZlibZipRaw;

        function ZlibZipRaw(data, level) {
          if (!data) {
            return null;
          }

          let binaryString = null;

          try {
            //@ts-ignore
            binaryString = pako.deflateRaw(data, {
              to: 'string',
              level: level || 9
            });
          } catch (error) {
            console.error(error);
          }

          return binaryString;
        }

        _Encrypt.ZlibZipRaw = ZlibZipRaw;

        function UnGZip(str) {
          if (!str) {
            return null;
          }

          let data = null;

          try {
            // @ts-ignore
            data = pako.ungzip(str, {
              to: 'string'
            });
          } catch (error) {
            console.error(error);
          }

          return data;
        }

        _Encrypt.UnGZip = UnGZip;

        function GZip(data, level) {
          if (!data) {
            return null;
          }

          let binaryString = null;

          try {
            //@ts-ignore
            binaryString = pako.gzip(data, {
              gzip: true,
              to: 'string',
              level: level || 9
            });
          } catch (error) {
            console.error(error);
          }

          return binaryString;
        }

        _Encrypt.GZip = GZip;

        function consoleStr(data) {
          let startIndex = 0;
          let endIndex = data.byteLength;
          let code = []; // Unicode编码字符

          for (let index = startIndex; index < endIndex; index++) {
            code.push(data[index]);
          } // UTF.Decode_UTF8(()=>{
          //     if(startIndex < endIndex){
          //         return data[startIndex++]
          //     }else{
          //         return null  // 返回null时会退出此转换函数
          //     }
          // },(resCode)=>{
          //     code.push(resCode)
          // });
          // UTF.Decode_UTF8_to_UTF16(function () {
          //     console.log(`startIndex:${startIndex}  endIndex:${endIndex}`)
          //     if(startIndex < endIndex){
          //         return data[startIndex++]
          //     }else{
          //         return null  // 返回null时会退出此转换函数
          //     }
          // }, (char) => {
          //     if(char){
          //         code.push(char);
          //     }else{
          //         // console.log("空数据==>")
          //     }
          // })


          let strData = code.reduce((prev, next) => {
            return prev + String.fromCharCode(next);
          }, '');
          console.log("输出字符串>>>");
          console.log(utf8_decode(strData));
          return strData;
        }

        _Encrypt.consoleStr = consoleStr;

        function encodeBuffer(headLen, maxBufferSize, dataView, isLittle = false) {
          // console.log("加密前==>")
          // Utils.dump(dataView)
          if (!dataView) {
            return null;
          }

          if (dataView.getUint8(14) != 0) {
            //已加密
            console.log("已加密 无需加密");
            return dataView;
          } //头部中定义的长度


          let nSize = dataView.getInt32(0, isLittle); //0~3 正文数据长度
          // console.log(`头部中定义的长度 ${nSize} 总长度 ${dataView.byteLength} 长度 ${dataView.buffer.byteLength}`)
          //求得整个正文长度（不含包头）

          let wDataSize = nSize + 4 - headLen;

          if (wDataSize < 0 || wDataSize > maxBufferSize) {
            console.log(`EncryptBuffer Error：length error!!! wDataSize Size:${wDataSize} max Size:${maxBufferSize}`);
            return null;
          } else if (wDataSize == 0) {
            return dataView;
          }

          let cbCheckCode = new Uint8Array(1); //头buffer

          let headBuffer = dataView.buffer.slice(0, headLen);
          let hBuffer = new Uint8Array(headBuffer); //正文Buffer

          let commondBuffer = dataView.buffer.slice(headLen, dataView.buffer.byteLength);
          let uBuffer = new Uint8Array(commondBuffer);
          wDataSize = uBuffer.byteLength;

          for (let index = 0; index < wDataSize; index++) {
            // console.log(`加密过程 之前: code = ${cbCheckCode[0]}  value = ${uBuffer[index]}`)
            cbCheckCode[0] += uBuffer[index]; // 校验码求和  从正文数据开始 不含包头

            uBuffer[index] = _sendByteList[uBuffer[index]]; // console.log(`加密过程  之后: code = ${cbCheckCode[0]}  value = ${uBuffer[index]}`)
          } //合并


          let newB = new Int8Array(hBuffer.byteLength + uBuffer.byteLength);

          for (let index = 0; index < newB.length; index++) {
            if (index < hBuffer.byteLength) {
              newB[index] = hBuffer[index];
            } else {
              newB[index] = uBuffer[index - hBuffer.byteLength];
            }
          }

          let _newBuffer = newB.buffer.slice(0, newB.byteLength);

          let newDataView = new DataView(_newBuffer); //设置加密标识

          newDataView.setUint8(14, ~cbCheckCode[0] + 1); // 取反加一
          // console.log("加密后==>")
          // Utils.dump(newDataView)

          return newDataView;
        }

        _Encrypt.encodeBuffer = encodeBuffer;

        function decodeBuffer(headLen, maxBufferSize, dataView, isLittle = false) {
          if (!dataView) {
            return null;
          } // if (dataView.getUint8(14) == 0) { //未加密
          //     console.log("已解密 无需解密", dataView);
          //     // alert("已解密 无需解密===>" + dataView)
          //     return dataView
          // }
          //头部中定义的长度


          let nSize = dataView.getInt32(0, isLittle); //0~3 正文数据长度
          //求得整个正文长度（不含包头）

          let wDataSize = nSize + 4 - headLen;

          if (wDataSize < 0 || wDataSize > maxBufferSize) {
            console.log(`DecryptBuffer Error：length error!!! wDataSize Size:${wDataSize} max Size:${maxBufferSize}`);
            return null;
          } else if (wDataSize == 0) {
            //设置解密标识
            dataView.setUint8(14, 0); // 解密成功标识

            return dataView;
          } //效验码与字节映射


          let cbCheckCode = new Uint8Array(1);
          cbCheckCode[0] = dataView.getUint8(14);
          let headBuffer = dataView.buffer.slice(0, headLen);
          let hBuffer = new Uint8Array(headBuffer);
          let newBuffer = dataView.buffer.slice(headLen, dataView.buffer.byteLength);
          let uBuffer = new Uint8Array(newBuffer);
          wDataSize = uBuffer.byteLength;

          for (let index = 0; index < wDataSize; index++) {
            // console.log(`解密过程 之前: code = ${cbCheckCode[0]}  value = ${uBuffer[index]}`)
            uBuffer[index] = _receiveByteList[uBuffer[index]]; //还原字节映射 解密

            cbCheckCode[0] += uBuffer[index]; //校验码求和,从正文数据开始 不含包头
            // console.log(`解密过程 之后: code = ${cbCheckCode[0]}  value = ${uBuffer[index]}`)
          }

          if (cbCheckCode[0] != 0) // 不等于0则校验失败
            {
              console.log("校验失败===>" + cbCheckCode[0]);
              return null;
            } //合并Map


          let newB = new Int8Array(hBuffer.byteLength + uBuffer.byteLength);

          for (let index = 0; index < newB.length; index++) {
            if (index < hBuffer.byteLength) {
              newB[index] = hBuffer[index];
            } else {
              newB[index] = uBuffer[index - hBuffer.byteLength];
            }
          }

          let _newBuffer = newB.buffer.slice(0, newB.byteLength);

          let newDataView = new DataView(_newBuffer); //设置解密标识

          newDataView.setUint8(14, 0); // 解密成功标识

          return newDataView;
        }

        _Encrypt.decodeBuffer = decodeBuffer;
      })(Encrypt || _export("Encrypt", Encrypt = {}));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=670c2d6a99f04c4c80106e9c12ae84423f678c8d.js.map