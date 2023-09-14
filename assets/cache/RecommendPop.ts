/**
 * Name = RecommendPop
 * URL = db://assets/cache/RecommendPop.ts
 * Time = Mon May 09 2022 14:43:04 GMT+0800 (中国标准时间)
 * Author = xueya
 * 推荐弹窗缓存
 */

import { GConstants, StoreKey } from "../config/GameConstant";
import { Encrypt } from "../framework/crypto/Encrypto";
import { LocalStorage } from "../framework/LocalStorage";
import { Utils } from "../framework/Utils";
import { BaseCache } from "../framework/vc/BaseCache";
import { User } from "./User";

export class RecommendPop extends BaseCache {
    /** 用户类 */
    private __User: User = null;

    /** 弹窗配置 */
    private _popData = {};
    /** 登录弹总次数置 */
    private _hallPopTime = 0;
    /** 入场弹窗总次数 */
    private _gamePopTime = 0;


    /** 弹窗配置版本号 */
    private _popVersion = -1;


    /** 新弹窗弹窗配置（原始数据） */
    private _newPopConfig = {};
    /** 弹窗配置版本号 */
    private _newPopVersion = -1;

    /** 弹窗顺序配置 */
    private _popOrderData = {};
    // /** 弹窗顺序配置（原始数据） */
    // private _popOrderConfig = {};
    /** 弹窗顺序配置版本号 */
    private _popOrderVersion = -1;

    // /** 弹窗限制次数配置 */
    private _popNumLimitData = {};
    /** 弹窗限制次数配置（原始数据） */
    private _popNumLimitConfig = {};
    // /** 弹窗限制次数配置版本号 */
    // private _popNumLimitVersion = -1;

    /** 弹窗每日次数数据 */
    private _popDayCountData = {};
    //实例化
    constructor(superClass) {
        super("RecommendPop")
        this.__User = superClass;
    };
    // /** 弹窗顺序配置 */
    // get PopOrderData() {
    //     return this._popOrderData;
    // }
    /** 弹窗限制次数配置 */
    get PopNumLimitData() {
        return this._popNumLimitData;
    }
    /** 弹窗配置 */
    get PopData() {
        return this._popData;
    }
    /** 获取进入大厅弹窗配置 */
    getIntoHallPropData() {
        return Utils.clone(this._popData[GConstants.PopupPos.POS_LOGIN]);
    }
    /** 获取进入游戏弹窗配置 */
    getIntoGamePropData() {
        return Utils.clone(this._popData[GConstants.PopupPos.POS_INTO_ROOM]);
    }
    /** 获取进入大厅弹窗总次数*/
    getIntoHallPopTime() {
        return this._hallPopTime
    }
    /** 获取进入游戏弹窗配置 */
    getIntoGamePopTime() {
        return this._gamePopTime
    }
    /**
     * 更新弹窗配置数据
    */
    updatePopData(body) {
        if (!body) {
            return;
        }
        body["info"] = Utils.table_verify(body["info"], true);
        this._popData = {};
        for (let key in GConstants.PopupPos) {
            if (Object.prototype.hasOwnProperty.call(GConstants.PopupPos, key)) {
                this._popData[GConstants.PopupPos[key]] = [];
            }
        }
        //大厅强弹总次数
        this._hallPopTime = Number(body.sort_max) || 0;
        //进入游戏强弹总次数
        this._gamePopTime = Number(body.sorttwo_max) || 0;

        let intoHallData = [];
        let intoGameData = [];

        for (let i = 0; i < body["info"].length; i++) {
            let oldData = body["info"][i];
            let sort = Utils.number_valueOf(oldData["sort"], -1);
            let num = Utils.number_valueOf(oldData["num"], 0);
            let sorttwo = Utils.number_valueOf(oldData["sorttwo"], -1);
            let numtwo = Utils.number_valueOf(oldData["numtwo"], 0);
            //当且仅当排序(sort)>0 且 次数不为0 有效 次数 -1为不限制
            //登录场景 
            if (sort >= 0 && num != 0) {

                let newData = {
                    id: oldData["id"],
                    title: oldData["title"],
                    toolid: oldData["toolid"],
                    sort: sort,
                    num: num,
                    scene: GConstants.PopupPos.POS_LOGIN,
                }

                intoHallData.push(newData);
            }
            //入场场景
            if (sorttwo >= 0 && numtwo != 0) {
                let newData = {
                    id: oldData["id"],
                    title: oldData["title"],
                    toolid: oldData["toolid"],
                    sort: sorttwo,
                    num: numtwo,
                    scene: GConstants.PopupPos.POS_INTO_ROOM,
                }
                intoGameData.push(newData);
            }
        }
        //排序：升序
        intoHallData.sort((a, b) => {
            return a["sort"] - b["sort"];
        });
        intoGameData.sort((a, b) => {
            return a["sort"] - b["sort"];
        })
        //去重

        //分组
        let recordSortID = {};

        let detailHallData = [];
        let detailGameData = [];

        for (let i = 0; i < intoHallData.length; i++) {
            let index = null;
            let sort = intoHallData[i]["sort"];

            if (recordSortID[sort] == null) {
                detailHallData.push([]);
                index = detailHallData.length - 1;
                recordSortID[sort] = index;
            } else {
                index = recordSortID[sort]
            }
            detailHallData[index].push(intoHallData[i]);
        }
        recordSortID = {};
        for (let i = 0; i < intoGameData.length; i++) {
            let index = null;
            let sort = intoGameData[i]["sort"];
            let toolid = intoGameData[i]["toolid"];

            if (recordSortID[sort] == null) {
                detailGameData.push([]);
                index = detailGameData.length - 1;
                recordSortID[sort] = index;
            } else {
                index = recordSortID[sort]
            }
            detailGameData[index].push(intoGameData[i]);
        }
        this._popData[GConstants.PopupPos.POS_LOGIN] = detailHallData;
        this._popData[GConstants.PopupPos.POS_INTO_ROOM] = detailGameData;
        this.updateLocalData();
        console.log('弹窗配置数据', this._popData)
    }
    /**
     * 根据弹窗ID 获取弹窗数据
     * @param scene 场景 INTO_HALL/INTO_GAME 
     * @param popID 
     * @returns {id: oldData["id"],title: oldData["title"],toolid: oldData["toolid"],sort: sort,num: num}
     */
    getPopInfoByPopID(scene, popID) {
        popID = Number(popID);
        if (Utils.string_isEmpty(scene) || Utils.isNull(popID)) {
            return;
        }
        scene = String(scene);
        let data = this._popData[scene];
        if (Utils.table_isEmpty(data)) {
            return null;
        }
        for (let i = 0; i < data.length; i++) {
            for (let m = 0; m < data[i].length; m++) {
                if (Number(data[i][m]["toolid"]) == popID) {
                    return Utils.clone(data[i][m]);
                }
            }
        }
        return null;
    }

    /**
     * 检验弹窗每日限制次数
     * @param info = { popup_id: info["pop_id"], scene_id: popupPos, new_id: index, config_id: info["config_id"] }
     * @returns true:可弹出 false:不可弹出
     */
    checkPopDayCount(info): boolean {
        if (Utils.table_isEmpty(info) == true) {
            return false;
        }
        let scene = String(info["scene"]);

        let date = Utils.timeToDataArray(Utils.time());
        let dateKey = `${date["year"]}/${date["month"]}/${date["day"]}`;
        this.print(`检验弹窗每日限制次数===>dataKey=${dateKey} info=`, this._popDayCountData, this._popNumLimitData)
        if (this._popDayCountData["date"] == null || String(this._popDayCountData["date"]) != dateKey) {
            this._popDayCountData = {
                date: dateKey
            }
        }
        //新配置
        if (info["toolid"] != null) {

            if (Utils.table_isEmpty(this._popDayCountData[scene])) {
                if (info["num"] != 0) {
                    return true;
                } else {
                    this._popDayCountData[scene] = {};
                }
            }

            let count = Utils.number_valueOf(this._popDayCountData[scene][String(info["toolid"])]);
            let currowPopNum = Number(info["num"]);
            if (count < currowPopNum || currowPopNum == -1) {
                return true;
            } else {
                return false;
            }
        }
        return false;
    }
    /** 更新弹窗每日弹出次数数据 */
    updatePopDayCountData(info) {
        if (Utils.table_isEmpty(info) == true) {
            return false;
        }
        let scene = String(info["scene"]);

        let id = String(info["toolid"]);

        if (!this._popDayCountData[scene]) {
            this._popDayCountData[scene] = {};
        }
        if (this._popDayCountData[scene][id] == null) {
            this._popDayCountData[scene][id] = 0;
        }
        this._popDayCountData[scene][id] = this._popDayCountData[scene][id] + 1;
        this.updateLocalData();
    }
    /** 解析弹窗限制次数配置 */
    updatePopNumLimitConfig(data, isInit: boolean = false) {
        if (Utils.table_isEmpty(data)) {
            return;
        }

        if (isInit == false) {
            this.updateLocalData();
        };
    }
    /** 减少1次弹窗弹出次数数据 目前仅有限时礼包有用到，详情看recommendmanager判断处 */
    reducePopDayCountData(scene, id) {
        if (scene == null) {
            return;
        }
        if (id == null || this._popDayCountData[scene] == null) {
            return;
        }
        id = String(id);
        this._popDayCountData[scene][id] = this._popDayCountData[scene][id] - 1;
        this.updateLocalData();
    }
    /** 加载本地数据缓存 */
    reloadLocalData() {
        let key = Utils.string_format(StoreKey.USER_RECOMMEND_POP, this.__User.getUserMid());
        let data = LocalStorage.get(key, "");
        if (data != "") {
            data = Utils.table_verify(Encrypt.JsonDecode(data));
        }
        this._popDayCountData = Utils.table_verify(data.popDayCountData);
    }

    /** 更新本地数据保存 */
    updateLocalData() {
        let body = {
            popConfig: null,
            popNumLimitConfig: this._popNumLimitConfig,
            popDayCountData: this._popDayCountData,
            popAllConfig: this._newPopConfig
        }
        let data = Encrypt.JsonEncode(body);

        let key = Utils.string_format(StoreKey.USER_RECOMMEND_POP, this.__User.getUserMid());
        LocalStorage.set(key, data);
    }
    /** 获取弹窗配置数据的版本 */
    getPopConfigVer(): number | null {
        if (isNaN(Number(this._popVersion))) {
            this._popVersion = null;
        }
        return this._popVersion;
    }
    /** 获取弹窗顺序配置数据的版本 */
    getPopOrderConfigVer(): number | null {
        if (isNaN(Number(this._popOrderVersion))) {
            this._popOrderVersion = null;
        }
        return this._popOrderVersion;
    }
    // /** 获取弹窗限制次数的版本 */
    // getPopNumLimitVer(): number | null {
    //     if (isNaN(Number(this._popNumLimitVersion))) {
    //         this._popNumLimitVersion = null;
    //     }
    //     return this._popNumLimitVersion;
    // }
    /** 获取新弹窗配置数据的版本 */
    getPopAllConfigVer(): number | null {
        if (isNaN(Number(this._newPopVersion))) {
            this._newPopVersion = null;
        }
        return this._newPopVersion;
    }
    /** 清理版本信息 */
    clearVer(): void {
        this._popVersion = null;
        // this._popOrderVersion = null;
        // this._popNumLimitVersion = null;
        // this._newPopVersion = null;
    }

}