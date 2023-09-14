/**
 * Name = WatchMessage
 * URL = db://assets/cache/WatchMessage.ts
 * Time = Mon May 09 2022 14:43:04 GMT+0800 (中国标准时间)
 * Author = xueya
 * 信箱数据缓存
 */

import { AppEvent } from "../config/AppEvent";
import { GConstants, StoreKey } from "../config/GameConstant";
import { LocalStorage } from "../framework/LocalStorage";
import { EventManager } from "../framework/manager/EventManager";
import { Utils } from "../framework/Utils";
import { BaseCache } from "../framework/vc/BaseCache";
import { MailInfo } from "./MailInfo";
import { User } from "./User";

export class WatchMessage extends BaseCache {

    /** 用户类 */
    private __User: User = null;

    /** 邮件类 */
    private __MailInfo: MailInfo = null;


    //实例化
    constructor(superClass) {
        super("WatchMessage");
        this.__User = superClass;
        this.__MailInfo = this.__User.MailInfo;
    };

    getMaxId(msgList): number {
        let maxId = 0;
        for (let i = 0; i < msgList.length; i++) {
            let v = msgList[i];
            let num = Utils.number_valueOf(v["id"])
            if (num > maxId) {
                maxId = num;
            }
        }
        return maxId
    }

    /**处理数据*/
    dealData(arr) {
        if (!Utils.isArray(arr)) {
            return;
        }
        let data = [];
        for (let item of arr) {
            if (Object.prototype.hasOwnProperty.call(item, "is_html") && Utils.number_valueOf(item.is_html, 0) > 0) {
                continue;
            }
            data.push(item);
        }
        if (Utils.table_isEmpty(data)) {
            return;
        }
        let tmp = []
        for (let k = 0; k < data.length; k++) {
            let v1 = data[k];
            //初始化邮件状态
            v1.status = GConstants.MsgStatus.MSG_STATUS_FRESH
            tmp.push(v1)
        }
        this.saveMaxEmailId(tmp)
        this.__User.MailInfo.saveDataFromNet(tmp)
        //有新数据刷新邮件界面
        EventManager.dispatch(AppEvent.NOTIFY_EMAIL_CHANGE);
    }
    /**
     * 存储邮件最大ID
     * @param msgList 
     */
    saveMaxEmailId(msgList) {
        //当前本地存储的ID
        let key_SystemLastId = Utils.string_format(StoreKey.WATCH_MESSAGE_SYSTEMID, this.__User.getUserMid());
        let systemLastId = LocalStorage.get(key_SystemLastId, 0);
        let currentMaxId = this.getMaxId(msgList);
        if (currentMaxId > systemLastId) {
            LocalStorage.set(key_SystemLastId, currentMaxId);
        }
    }
}