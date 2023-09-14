System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, error, warn, HttpRequest, _crd, urls, reqparams, HttpEvent, ResponseType;

  _export({
    HttpRequest: void 0,
    HttpEvent: void 0,
    ResponseType: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      error = _cc.error;
      warn = _cc.warn;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "806e5t8UetFy4spn89dnuan", "HttpRequest", undefined);

      __checkObsolete__(['error', 'warn']);

      urls = {}; // 当前请求地址集合

      reqparams = {}; // 请求参数

      /** Http事件 */

      (function (HttpEvent) {
        HttpEvent["NO_NETWORK"] = "http_request_no_network";
        HttpEvent["UNKNOWN_ERROR"] = "http_request_unknown_error";
        HttpEvent["TIMEOUT"] = "http_request_timout";
      })(HttpEvent || _export("HttpEvent", HttpEvent = {}));

      (function (ResponseType) {
        ResponseType["Default"] = "";
        ResponseType["ArrayBuffer"] = "arraybuffer";
        ResponseType["Blob"] = "blob";
        ResponseType["Document"] = "document";
        ResponseType["Json"] = "json";
        ResponseType["Text"] = "text";
      })(ResponseType || _export("ResponseType", ResponseType = {}));

      _export("HttpRequest", HttpRequest = class HttpRequest {
        constructor() {
          this.server = "http://192.168.1.150/";
          this.timeout = 10000;
        }

        /**
         * HTTP GET请求
         * 例：
         * 
         * Get
            let complete = function(response){
                LogWrap.log(response);
            }
            let error = function(response){
                LogWrap.log(response);
            }
            this.get(urlStr, complete, error);
        */
        get(urlStr, successCallback, errorCallback) {
          return this.sendRequest(urlStr, null, false, successCallback, errorCallback);
        }

        getWithParams(urlStr, params, successCallback, errorCallback) {
          return this.sendRequest(urlStr, params, false, successCallback, errorCallback);
        }

        getByArraybuffer(urlStr, successCallback, errorCallback) {
          return this.sendRequest(urlStr, null, false, successCallback, errorCallback, 'arraybuffer', false);
        }

        getWithParamsByArraybuffer(urlStr, params, successCallback, errorCallback) {
          return this.sendRequest(urlStr, params, false, successCallback, errorCallback, 'arraybuffer', false);
        }
        /** 
         * HTTP POST请求
         * 例：
         *      
         * Post
            let param = '{"LoginCode":"donggang_dev","Password":"e10adc3949ba59abbe56e057f20f883e"}'
            let complete = function(response){
                    let jsonData = JSON.parse(response);
                    let data = JSON.parse(jsonData.Data);
                LogWrap.log(data.Id);
            }
            let error = function(response){
                LogWrap.log(response);
            }
            this.post(urlStr, param, complete, error);
        */


        post(urlStr, params, successCallback, errorCallback, responseType) {
          return this.sendRequest(urlStr, params, true, successCallback, errorCallback, responseType);
        }
        /** 取消请求中的请求 */


        abort(urlStr) {
          if (urlStr === void 0) {
            urlStr = "";
          }

          var url = null;

          if (urlStr && urlStr.toLocaleLowerCase().indexOf("http") == 0) {
            url = urlStr;
          } else {
            url = this.server + urlStr;
          }

          var xhr = urls[url];

          if (xhr) {
            xhr.abort();
          }
        }
        /**
         * 获得字符串形式的参数
         */


        getParamString(params) {
          if (typeof params == 'string') {
            return params;
          }

          if (typeof params != 'object') {
            return params;
          }

          var result = "";

          for (var urlStr in params) {
            var data = params[urlStr];

            if (data instanceof Object) {
              for (var key in data) {
                result += key + "=" + data[key] + "&";
              }
            } else {
              result += urlStr + "=" + data + "&";
            }
          }

          return result.substr(0, result.length - 1);
        }
        /** 
         * Http请求 
         * @param urlStr(string)              请求地址
         * @param params(JSON)              请求参数
         * @param isPost(boolen)            是否为POST方式
         * @param callback(function)        请求成功回调
         * @param errorCallback(function)   请求失败回调
         * @param responseType(XMLHttpRequestResponseType)      响应类型
         * return 实际请求的地址 也是以此来取消请求的
         */


        sendRequest(urlStr, params, isPost, successCallback, errorCallback, responseType, isOpenTimeout, timeout) {
          if (isOpenTimeout === void 0) {
            isOpenTimeout = true;
          }

          if (timeout === void 0) {
            timeout = this.timeout;
          }

          if (urlStr == null || urlStr == '') {
            error("请求地址不能为空");
            return;
          }

          var url, newUrl, paramsStr;

          if (urlStr.toLocaleLowerCase().indexOf("http") == 0) {
            url = urlStr;
          } else {
            url = this.server + urlStr;
          }

          if (params) {
            paramsStr = this.getParamString(params);

            if (url.indexOf("?") > -1) {
              newUrl = url + "&" + paramsStr;
            } else {
              newUrl = url + "?" + paramsStr;
            }
          } else {
            newUrl = url;
          }

          if (urls[newUrl] != null && reqparams[newUrl] == paramsStr) {
            warn("\u5730\u5740\u3010" + url + "\u3011\u5DF2\u6B63\u5728\u8BF7\u6C42\u4E2D\uFF0C\u4E0D\u80FD\u91CD\u590D\u8BF7\u6C42");
            return;
          }
          /** 当前Http */


          var xhr = new XMLHttpRequest(); // 设置响应类型

          if (responseType) {
            xhr.responseType = responseType;
          } // 防重复请求功能


          urls[newUrl] = xhr;
          reqparams[newUrl] = paramsStr;
          var reqData = {};
          reqData.url = url;
          reqData.params = params;

          if (isPost) {
            //post需要对数据进行包装
            if (typeof params != "string") {
              params = JSON.stringify(params);
            }

            xhr.open("POST", url);
          } else {
            xhr.open("GET", newUrl);
          } //设置请求头<此处有跨域问题>


          xhr.setRequestHeader("Content-Type", "application/json;charset=utf-8");
          xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
          xhr.setRequestHeader('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
          xhr.setRequestHeader("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
          /** 回调函数 */

          var isCallback = false;

          var callbackFunc = function callbackFunc(event, respData) {
            if (respData === void 0) {
              respData = null;
            }

            //console.log("Http:Callback==>", reqData, respData)
            if (isCallback == true) {
              return;
            }

            isCallback = true;

            if (event != null) {
              if (errorCallback) {
                errorCallback(reqData, respData);
              }

              ;
              return;
            } else {
              if (successCallback) {
                successCallback(respData, reqData);
              }

              ;
            }
          }; // 请求超时


          if (isOpenTimeout) {
            xhr.timeout = timeout;

            xhr.ontimeout = a => {
              //console.log("xhr.ontimeout:", a)
              this.deleteCache(newUrl);
              callbackFunc(HttpEvent.TIMEOUT);
            };
          }

          xhr.onloadend = a => {
            //console.log("xhr.onloadend:", a)
            if (xhr.status == 500) {
              this.deleteCache(newUrl);
              callbackFunc(HttpEvent.NO_NETWORK);
            }
          };

          xhr.onerror = a => {
            //console.log("xhr.onerror:", a, xhr)
            this.deleteCache(newUrl);
            var event = null;

            if (xhr.readyState == 0 || xhr.readyState == 1 || xhr.status == 0) {
              event = HttpEvent.NO_NETWORK; // 断网 
            } else {
              event = HttpEvent.UNKNOWN_ERROR; // 未知错误
            }

            callbackFunc(event);
          };

          xhr.onreadystatechange = a => {
            //console.log("xhr.onreadystatechange:", a, xhr)
            if (xhr.readyState != 4) {
              return;
            }

            ;
            this.deleteCache(newUrl);

            if (xhr.status == 200) {
              switch (responseType) {
                case ResponseType.ArrayBuffer:
                  //此处用作文件下载
                  var buffer = xhr.response;
                  var bufferData = new Uint8Array(buffer);
                  callbackFunc(null, bufferData);
                  break;

                case ResponseType.Json:
                  var data = xhr.response;

                  if (typeof xhr.response == "string") {
                    try {
                      //console.log(typeof (xhr.response), xhr.response);
                      data = JSON.parse(xhr.response);
                    } catch (error) {
                      data = null;
                      console.error("数据解析出错 非json格式");
                    }
                  }

                  callbackFunc(null, data);
                  break;

                default:
                  callbackFunc(null, xhr.response);
                  break;
              }
            } else {
              callbackFunc(HttpEvent.UNKNOWN_ERROR, xhr.response);
            }
          };

          if (isPost) {
            if (params == null || params == "") {
              xhr.send();
            } else {
              ////console.log("发送的数据", params)
              xhr.send(params); // 根据服务器接受数据方式做选择
            }
          } else {
            xhr.send();
          }

          return newUrl;
        }

        deleteCache(url) {
          delete urls[url];
          delete reqparams[url];
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=21750d1223574ca53aa00326bef373b19e347b3d.js.map