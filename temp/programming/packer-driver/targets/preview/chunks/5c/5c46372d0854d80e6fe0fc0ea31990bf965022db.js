System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, UIDataMapping, Utils, BaseCache, MenuInfo, _crd;

  function _reportPossibleCrUseOfUIDataMapping(extras) {
    _reporterNs.report("UIDataMapping", "../config/UIConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfinf_UIDataConfig(extras) {
    _reporterNs.report("inf_UIDataConfig", "../framework/InterfaceDefines", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUtils(extras) {
    _reporterNs.report("Utils", "../framework/Utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseCache(extras) {
    _reporterNs.report("BaseCache", "../framework/vc/BaseCache", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUser(extras) {
    _reporterNs.report("User", "./User", _context.meta, extras);
  }

  _export("MenuInfo", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      UIDataMapping = _unresolved_2.UIDataMapping;
    }, function (_unresolved_3) {
      Utils = _unresolved_3.Utils;
    }, function (_unresolved_4) {
      BaseCache = _unresolved_4.BaseCache;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d58f2xiQXhD4YBzK1KyWvqX", "MenuInfo", undefined);

      /**
       * Name = MenuInfo
       * URL = db://assets/cache/MenuInfo.ts
       * Time = Mon May 09 2022 14:43:04 GMT+0800 (中国标准时间)
       * Author = xueya
       * 菜单配置缓存
       */
      _export("MenuInfo", MenuInfo = class MenuInfo extends (_crd && BaseCache === void 0 ? (_reportPossibleCrUseOfBaseCache({
        error: Error()
      }), BaseCache) : BaseCache) {
        /** 用户类 */

        /** 菜单配置数据 */

        /** 映射 UIID-->{menuID,reddotID,popID} */

        /** 映射 menuID-->{uiID,reddotID,popID} */

        /** 映射 reddotID-->{uiID,menuID,popID} */

        /** 映射 popID-->{uiID,menuID,reddotID} */
        //实例化
        constructor(superClass) {
          super("MenuInfo");
          this.__User = null;
          this.menuDataConfig = [];
          this.mapUIID = {};
          this.mapMenuID = {};
          this.mapRedDotID = {};
          this.mapPopID = {};
          this.__User = superClass;
          this.initMapping();
        }

        /** 菜单配置数据 */
        get MenuData() {
          return (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).table_verify(this.menuDataConfig, true);
        }
        /** 初始化映射队列 */


        initMapping() {
          this.mapUIID = {};
          this.mapMenuID = {};
          this.mapRedDotID = {};
          this.mapPopID = {};

          for (var i = 0; i < (_crd && UIDataMapping === void 0 ? (_reportPossibleCrUseOfUIDataMapping({
            error: Error()
          }), UIDataMapping) : UIDataMapping).length; i++) {
            var conf = (_crd && UIDataMapping === void 0 ? (_reportPossibleCrUseOfUIDataMapping({
              error: Error()
            }), UIDataMapping) : UIDataMapping)[i];
            var newConf = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).clone(conf);

            if (newConf.uiID != null) {
              this.mapUIID[newConf.uiID] = newConf;
            }

            if (newConf.menuID != null) {
              this.mapMenuID[Number(newConf.menuID)] = newConf;
            }

            if (newConf.reddotID != null) {
              this.mapRedDotID[newConf.reddotID] = newConf;
            }

            if (newConf.popID != null) {
              this.mapPopID[newConf.popID] = newConf;
            }
          }
        }
        /** 更新大厅菜单信息 */

        /**
        updateMenusConfig(content) {
            if (!content) {
                return;
            }
            let ver = 0;
            let menusData = null;
            this.menuDataConfig = [];
            for (let k1 = 0; k1 < content.length; k1++) {
                let v1 = content[k1];
                // 系统消息
                let data = Utils.table_verify(v1["msg_list"], true);
                for (let k2 = 0; k2 < data.length; k2++) {
                    if (data[k2]["type"] == GConstants.WatchMessageType.MESSAGE_HALL_MENU) {
                        //大厅菜单信息
                        if (ver < data[k2]["id"]) {
                            ver = data[k2]["id"];
                            menusData = data[k2]["content"];
                        }
                    }
                }
            }
            if (!menusData) {
                //通知刷新菜单
                EventManager.dispatch(AppEvent.NOTIFY_UPDATE_MENUS);
                return;
            }
            // 对数据进行处理过滤
            let allMenuData = [];  //所有配置数据，包括无效的 被关闭的
            // allMenuData = [{
            //     "parent": true,
            //     "indexS": 1,
            //     "id": 3,
            //     "showBol": true,  开关
            //     "showIcon": false, 大厅显示开关
            //     "order": 12,
            //     "maxVersion": "337",
            //     "minVersion": "0",
            //     "res": {
            //         "type": 1,
            //         "url": "",
            //         "md5": ""
            //     },
            //     "children": []
            // },...]
             let decodeData = Encrypt.JsonDecode(menusData);
            //检查有效性
            let isSupport = false,
                menuID = null,
                minVer = null,
                maxVer = null;
             let checkValid = function (val) {
                isSupport = false;
                menuID = Utils.number_valueOf(val["id"]);
                minVer = Utils.number_valueOf(val["minVersion"]);
                maxVer = Utils.number_valueOf(val["maxVersion"]);
                if (Utils.table_keyof(GConstants.MenuIDConf, menuID) != null) {
                    if (ClientInfo.HallVer >= minVer && ClientInfo.HallVer <= maxVer) {
                        isSupport = true;
                    }
                    if (isSupport == true && val["showBol"] == false) {//版本支持但是开关不支持
                        val["showBol"] = false;
                    } else {
                        val["showBol"] = isSupport;
                    }
                } else {
                    return null;
                }
                return val;
            }
            decodeData = Utils.table_verify(decodeData, true);
            for (let i = 0; i < decodeData.length; i++) {
                if (Utils.number_valueOf(decodeData[i]["chan"], -1) == ClientInfo.ChannelId) {
                    let value = Utils.table_verify(decodeData[i]["value"], true);
                    for (let k = 0; k < value.length; k++) {
                        //若存在子菜单,先将数据从子菜单中拿出来 将所有数据放在同一级别
                        for (let m = 0; m < value[k]["children"].length; m++) {
                            if (checkValid(value[k]["children"][m]) != null) {
                                allMenuData.push(value[k]["children"][m]);
                            }
                        }
                        if (checkValid(value[k]) != null) {
                            value[k]["children"] = [];
                            allMenuData.push(value[k]);
                        }
                        // if (checkValid(value[k]) != null) {
                        //     let children = [];
                        //     for (let m = 0; m < value[k]["children"].length; m++) {
                        //         if (checkValid(value[k]["children"][m]) != null) {
                        //             children.push(value[k]["children"][m]);
                        //         }
                        //     }
                        //     value[k]["children"] = children;
                        //     allMenuData.push(Utils.clone(value[k]));
                        // };
                    }
                };
            }
            if (allMenuData.length == 0) {
                //通知刷新菜单
                EventManager.dispatch(AppEvent.NOTIFY_UPDATE_MENUS);
                return;
            }
            //排序 从小到大
            allMenuData.sort((a, b) => {
                return Utils.number_valueOf(a["order"]) - Utils.number_valueOf(b["order"])
            })
            // 本地数据
            this.menuDataConfig = allMenuData;
            //初始化映射
            this.initMapping();
            //通知刷新菜单
            EventManager.dispatch(AppEvent.NOTIFY_UPDATE_MENUS);
        }
        */

        /** 根据菜单ID获取菜单数据（克隆的） */


        getMenuDataByMenuID(menuID) {
          if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).isNull(menuID) || isNaN(Number(menuID))) {
            return null;
          }

          menuID = Number(menuID);

          for (var i = 0; i < this.menuDataConfig.length; i++) {
            if (this.menuDataConfig[i]["id"] == menuID) {
              return (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                error: Error()
              }), Utils) : Utils).clone(this.menuDataConfig[i]);
            }

            ;
          }

          return null;
        }
        /** 根据红点获取对应的UIdata映射配置 */


        getUIDataByRedDot(reddotID) {
          if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).isNull(reddotID)) {
            return null;
          }

          reddotID = String(reddotID);
          return this.mapRedDotID[reddotID];
        }
        /** 根据红点获取对应的UIdata映射配置 */


        getUIDataByMenuID(menuID) {
          if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).isNull(menuID)) {
            return null;
          }

          menuID = Number(menuID);
          return this.mapMenuID[menuID];
        }
        /** 根据UIID获取菜单开关状态 */


        getSwitchStateByUIID(uiid) {
          if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).isNull(uiid)) {
            return false;
          }

          if (this.mapUIID[uiid]) {
            var menuID = this.mapUIID[uiid].menuID;
            var menuData = this.getMenuDataByMenuID(menuID);

            if (menuData) {
              return menuData["showBol"];
            }
          }

          return false;
        }
        /** 根据MenuID获取菜单开关状态 */


        getSwitchStateByMenuID(menuID) {
          if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).isNull(menuID)) {
            return false;
          }

          var menuData = this.getMenuDataByMenuID(menuID);

          if (menuData) {
            return menuData["showBol"];
          }

          return false;
        }
        /** 根据RedDotID获取菜单开关状态 */


        getSwitchStateByRedDotID(reddotID) {
          if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).isNull(reddotID)) {
            return false;
          }

          reddotID = String(reddotID);

          if (this.mapRedDotID[reddotID]) {
            var menuID = this.mapRedDotID[reddotID].menuID;
            var menuData = this.getMenuDataByMenuID(menuID);

            if (menuData) {
              return menuData["showBol"];
            }
          }

          return false;
        }
        /** 根据PopID获取菜单开关状态 */


        getSwitchStateByPopID(popID) {
          if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).isNull(popID)) {
            return false;
          }

          if (this.mapPopID[popID]) {
            var menuID = this.mapPopID[popID].menuID;
            var menuData = this.getMenuDataByMenuID(menuID);

            if (menuData) {
              return menuData["showBol"];
            }
          }

          return false;
        }
        /**
         * 排序自定义菜单(从小到大)升序
         * @param menuArray 菜单列表[menuID,...]
         * @param notCheckSwitch 不检查开关 默认false,检查
         * @returns 返回 null 或者菜单数据对象集合
         */


        sortCustomMenus(menuArray, notCheckSwitch) {
          if (notCheckSwitch === void 0) {
            notCheckSwitch = false;
          }

          if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).table_isEmpty(menuArray)) {
            return null;
          }

          if (menuArray instanceof Array) {
            var allMenuData = [];
            var menuData = null;

            for (var i = 0; i < menuArray.length; i++) {
              menuData = this.getMenuDataByMenuID(menuArray[i]);

              if (menuData) {
                if (notCheckSwitch == true) {
                  allMenuData.push(menuData);
                } else {
                  if (menuData["showBol"] == true) {
                    allMenuData.push(menuData);
                  }
                }
              }
            } //排序 从小到大


            allMenuData.sort((a, b) => {
              return (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                error: Error()
              }), Utils) : Utils).number_valueOf(a["order"]) - (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                error: Error()
              }), Utils) : Utils).number_valueOf(b["order"]);
            });
            return allMenuData;
          }

          return null;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=5c46372d0854d80e6fe0fc0ea31990bf965022db.js.map