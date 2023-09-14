System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, _crd, ccclass, property, testFileIO;

  _export("testFileIO", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "845d3391hVI5qe1gIaAsZzg", "testFileIO", undefined);

      __checkObsolete__(['_decorator']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = testFileIO
       * DateTime = Wed May 11 2022 17:56:51 GMT+0800 (中国标准时间)
       * Author = xueya
       * FileBasename = testFileIO.ts
       * FileBasenameNoExtension = testFileIO
       * URL = db://assets/scripts/testFileIO.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/zh/
       *
       */

      (function (_testFileIO) {
        function openLocalFile(accept, callback) {
          var inputEl = document.getElementById('file_input');

          if (!inputEl) {
            // console.log('xxxxxx createElement input');
            inputEl = document.createElement('input');
            inputEl.id = 'file_input';
            inputEl.setAttribute('id', 'file_input');
            inputEl.setAttribute('type', 'file');
            inputEl.setAttribute('class', 'fileToUpload');
            inputEl.style.opacity = '0';
            inputEl.style.position = 'absolute';
            inputEl.setAttribute('left', '-999px');
            document.body.appendChild(inputEl);
          }

          accept = accept || ".*";
          inputEl.setAttribute('accept', accept); // inputEl.addEventListener('change', (event) => {
          //     console.log('xxx onchange1', event, inputEl.value);
          // });

          inputEl.onchange = event => {
            // console.log('xxx onchange2', event, inputEl.files);
            var files = inputEl.files;

            if (files && files.length > 0) {
              var file = files[0];
              if (callback) callback(file);
            }
          };

          inputEl.click();
        }

        _testFileIO.openLocalFile = openLocalFile;
        var READ_FILE_TYPE;

        (function (READ_FILE_TYPE) {
          READ_FILE_TYPE[READ_FILE_TYPE["DATA_URL"] = 0] = "DATA_URL";
          READ_FILE_TYPE[READ_FILE_TYPE["TEXT"] = 1] = "TEXT";
          READ_FILE_TYPE[READ_FILE_TYPE["BINARY"] = 2] = "BINARY";
          READ_FILE_TYPE[READ_FILE_TYPE["ARRAYBUFFER"] = 3] = "ARRAYBUFFER";
        })(READ_FILE_TYPE || (READ_FILE_TYPE = {}));

        _testFileIO.READ_FILE_TYPE = READ_FILE_TYPE;

        function readLocalFile(file, readType, callback) {
          var reader = new FileReader();

          reader.onload = function (event) {
            if (callback) {
              if (reader.readyState == FileReader.DONE) {
                // console.log('xxx FileReader', event, reader.result);
                callback(reader.result);
              } else {
                callback(null);
              }
            }
          };

          switch (readType) {
            case READ_FILE_TYPE.DATA_URL:
              reader.readAsDataURL(file);
              break;

            case READ_FILE_TYPE.TEXT:
              reader.readAsText(file); //作为字符串读出
              //reader.readAsText(file,'gb2312');   //默认是用utf-8格式输出的，想指定输出格式就再添加一个参数，像txt的ANSI格式只能用国标才能显示出来

              break;

            case READ_FILE_TYPE.BINARY:
              reader.readAsBinaryString(file);
              break;

            case READ_FILE_TYPE.ARRAYBUFFER:
              reader.readAsArrayBuffer(file);
              break;
          }
        }

        _testFileIO.readLocalFile = readLocalFile;
      })(testFileIO || _export("testFileIO", testFileIO = {}));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=e394fd4533ae72f6e602b760bc9fd8295cd509e0.js.map