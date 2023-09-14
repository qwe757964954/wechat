import { UIDataMapping } from "../config/UIConfig";
import { inf_UIDataConfig } from "../framework/InterfaceDefines";
import { Utils } from "../framework/Utils";
import { BaseCache } from "../framework/vc/BaseCache";
import { User } from "./User";

/**
 * Name = MenuInfo
 * URL = db://assets/cache/MenuInfo.ts
 * Time = Mon May 09 2022 14:43:04 GMT+0800 (中国标准时间)
 * Author = xueya
 * 菜单配置缓存
 */

export class MenuInfo extends BaseCache {
    /** 用户类 */
    private __User: User = null;

    /** 菜单配置数据 */
    private menuDataConfig = [];
    /** 映射 UIID-->{menuID,reddotID,popID} */
    private mapUIID: { [key: string]: inf_UIDataConfig } = {};
    /** 映射 menuID-->{uiID,reddotID,popID} */
    private mapMenuID: { [key: number]: inf_UIDataConfig } = {};
    /** 映射 reddotID-->{uiID,menuID,popID} */
    private mapRedDotID: { [key: string]: inf_UIDataConfig } = {};
    /** 映射 popID-->{uiID,menuID,reddotID} */
    private mapPopID: { [key: string]: inf_UIDataConfig } = {};
    //实例化
    constructor(superClass) {
        super("MenuInfo")
        this.__User = superClass;
        this.initMapping();
    };

    /** 菜单配置数据 */
    get MenuData() {
        return Utils.table_verify(this.menuDataConfig, true);
    }
    /** 初始化映射队列 */
    initMapping() {
        this.mapUIID = {};
        this.mapMenuID = {};
        this.mapRedDotID = {};
        this.mapPopID = {};
        for (let i = 0; i < UIDataMapping.length; i++) {
            let conf = UIDataMapping[i];
            let newConf = Utils.clone(conf);
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
        if (Utils.isNull(menuID) || isNaN(Number(menuID))) {
            return null;
        }
        menuID = Number(menuID);
        for (let i = 0; i < this.menuDataConfig.length; i++) {
            if (this.menuDataConfig[i]["id"] == menuID) {
                return Utils.clone(this.menuDataConfig[i]);
            };
        }
        return null;
    }
    /** 根据红点获取对应的UIdata映射配置 */
    getUIDataByRedDot(reddotID): inf_UIDataConfig {
        if (Utils.isNull(reddotID)) {
            return null;
        }
        reddotID = String(reddotID);
        return this.mapRedDotID[reddotID];
    }
    /** 根据红点获取对应的UIdata映射配置 */
    getUIDataByMenuID(menuID): inf_UIDataConfig {
        if (Utils.isNull(menuID)) {
            return null;
        }
        menuID = Number(menuID);
        return this.mapMenuID[menuID];
    }


    /** 根据UIID获取菜单开关状态 */
    getSwitchStateByUIID(uiid): boolean {
        if (Utils.isNull(uiid)) {
            return false;
        }
        if (this.mapUIID[uiid]) {
            let menuID = this.mapUIID[uiid].menuID;
            let menuData = this.getMenuDataByMenuID(menuID);
            if (menuData) {
                return menuData["showBol"];
            }
        }
        return false;
    }
    /** 根据MenuID获取菜单开关状态 */
    getSwitchStateByMenuID(menuID): boolean {
        if (Utils.isNull(menuID)) {
            return false;
        }
        let menuData = this.getMenuDataByMenuID(menuID);
        if (menuData) {
            return menuData["showBol"];
        }
        return false;
    }
    /** 根据RedDotID获取菜单开关状态 */
    getSwitchStateByRedDotID(reddotID): boolean {
        if (Utils.isNull(reddotID)) {
            return false;
        }
        reddotID = String(reddotID);
        if (this.mapRedDotID[reddotID]) {
            let menuID = this.mapRedDotID[reddotID].menuID;
            let menuData = this.getMenuDataByMenuID(menuID);
            if (menuData) {
                return menuData["showBol"];
            }
        }
        return false;
    }
    /** 根据PopID获取菜单开关状态 */
    getSwitchStateByPopID(popID): boolean {
        if (Utils.isNull(popID)) {
            return false;
        }
        if (this.mapPopID[popID]) {
            let menuID = this.mapPopID[popID].menuID;
            let menuData = this.getMenuDataByMenuID(menuID);
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
    sortCustomMenus(menuArray, notCheckSwitch = false): Array<object> | null {
        if (Utils.table_isEmpty(menuArray)) {
            return null;
        }
        if (menuArray instanceof Array) {
            let allMenuData = [];
            let menuData = null;
            for (let i = 0; i < menuArray.length; i++) {
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
            }
            //排序 从小到大
            allMenuData.sort((a, b) => {
                return Utils.number_valueOf(a["order"]) - Utils.number_valueOf(b["order"]);
            })
            return allMenuData;
        }
        return null;
    }
}