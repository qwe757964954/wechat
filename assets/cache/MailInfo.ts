/**
 * Name = MailInfo
 * URL = db://assets/cache/MailInfo.ts
 * Time = Mon May 09 2022 14:43:04 GMT+0800 (中国标准时间)
 * Author = xueya
 * 用户邮件缓存
 */

import { GConstants, StoreKey } from "../config/GameConstant";
import { Encrypt } from "../framework/crypto/Encrypto";
import { LocalStorage } from "../framework/LocalStorage";
import { Utils } from "../framework/Utils";
import { BaseCache } from "../framework/vc/BaseCache";
import { User } from "./User";

export class MailInfo extends BaseCache {


    /** 用户类 */
    private __User: User = null;
    /** 邮件数据 */
    private _mailData: Array<any> = [];
    //实例化
    constructor(superClass) {
        super("MailInfo");
        this.__User = superClass;
    };
    /** 邮件数据 */
    get MailData() {
        return Utils.clone(this._mailData);
    }
    /**
     * 获取存储在本地的数据
     * @returns 
     */
    getDataByLocal() {
        //说明此时本地没有邮件配置，防止是被清缓存的时候清掉
        let key = Utils.string_format(StoreKey.USER_MAIL_CACHE, this.__User.getUserMid());
        let totalData = LocalStorage.get(key, "");
        if (Utils.string_isEmpty(totalData)) {
            this._mailData = [];
        } else {
            this._mailData = Utils.table_verify(Encrypt.JsonDecode(totalData), true);
        }
        return this._mailData;
    }

    /**
     * 保存数据到本地
     * @param data 
     */
    saveDataToLocal(data) {
        if (!data) {
            data = [];
        }
        if (data instanceof Array) {
            let key = Utils.string_format(StoreKey.USER_MAIL_CACHE, this.__User.getUserMid());
            LocalStorage.set(key, Encrypt.JsonEncode(data));
        }
    }

    
    /**
     * 对传入邮件数组根据ID去重
     * @param data
     * @returns 
     */
    uniqueData(data) {
        console.log("uniqueData")
        let arr=[]
        if (data instanceof Array) {
            let len = data.length;
            if (len > 0) {
                let idArr=[]
                for (let i = 0; i < len;i++){
                    let v = data[i];
                    let id = Utils.number_valueOf(v.id)
                    let index = idArr.indexOf(id)
                    if (index==-1) {
                        idArr.push(id);
                        arr.push(v);
                    }    
                }
            }
        }
        return arr;
    }


    /**
     * 获取存储在本地的邮件的最大ID
     * @returns 
     */
    getMaxId(): number {
        let key_SystemLastId = Utils.string_format(StoreKey.WATCH_MESSAGE_SYSTEMID, this.__User.getUserMid());
        let systemLastId = LocalStorage.get(key_SystemLastId, 0);
        return systemLastId
    }

    /**
     * 根据消息ID获取邮件消息
     * @param msgid 
     * @return data | null 
     */
    getMsgByID(msgid) {
        if (msgid == null) {
            return null;
        }
        for (let i = 0; i < this._mailData.length; i++) {
            if (this._mailData[i]["id"] == msgid) {
                return Utils.clone(this._mailData[i]);
            };
        }
        return null;
    }
    /**
     * 通过请求的获取数据和本地数据进行合并存本地
     * @param data 请求获取的数据
     * @returns 处理后的数据
     */
    saveDataFromNet(data): Array<any> {
        //根据当前用户的id不同区分
        //因为是增量，所以需要把新数据跟老数据合并
        data = Utils.table_verify(data, true);
        console.log("saveDataFromNet:", data)
        let oldData = this.getDataByLocal();
        console.log("oldData:", oldData)
        let totalData = Utils.mergeArray(data, oldData);
        totalData=this.uniqueData(totalData)
        console.log("totalData:", totalData)
        this._mailData = this.sliceData(totalData);
        this.saveDataToLocal(this._mailData);
        this.__User.RedDot.update_mail_red();
        return this._mailData
    }


    /**
     * 针对现有的数据进行截取,最多保留一百条
     * @param totalData 
     * @returns 
     */
    sliceData(totalData) {
        let diff = totalData.length - GConstants.MessageMaxNum
        if (diff <= 0) {
            return totalData
        }
        // ID升序,方便删除,还得去重
        let arr = totalData.sort((a, b) => Number(a.id) - Number(b.id));
        let cols = [];
        let num = 0;
        for (let i = 0; i < arr.length; i++) {
            let v = arr[i];
            let awardArr = Encrypt.JsonDecode(v.awards)
            if (num < diff) {
                if ((v.status == GConstants.MsgStatus.MSG_STATUS_HANDLED) || (Utils.table_isEmpty(awardArr) && v.status == GConstants.MsgStatus.MSG_STATUS_READ)) {
                    num += 1
                    continue;
                }
            }
            cols.push(v)
        }
        let newDiff = cols.length - GConstants.MessageMaxNum
        let tmpArr = []
        if (newDiff > 0) {
            for (let j = 0; j < cols.length; j++) {
                if (j >= newDiff) {
                    tmpArr.push(cols[j])
                }
            }
        } else {
            tmpArr = cols
        }
        //降序
        let tmpArr2 = tmpArr.sort((a, b) => Number(b.id) - Number(a.id));
        return tmpArr2
    }

    /**
     * 更新邮件缓存
     * @param currentData 
     */
    updateMailDataInCache(currentData) {
        let data = this._mailData;
        let len = data.length;
         for (let i = 0; i < len; i++) {
            if (data[i]['id'] == currentData.id) {
                let obj = currentData
                data[i]=obj
            } 
        }
        let arr=this.uniqueData(data)
        this.saveDataToLocal(arr);
        this._mailData = arr;
        this.__User.RedDot.update_mail_red();
        return true;
    }

    /**
     * 对数据进行排序
     * @param data 
     * @returns 
     */
    sortMsgData(data: Array<any>) {
        let handledArr = []
        let unHandleArr = []
        for (let i = 0; i < data.length; i++) {
            let v = data[i];
            let awardArr = Encrypt.JsonDecode(v.awards)
            if (v.status == GConstants.MsgStatus.MSG_STATUS_FRESH || (!Utils.table_isEmpty(awardArr) && v.status == GConstants.MsgStatus.MSG_STATUS_READ)) {
                unHandleArr.push(v)
            }
            if ((v.status == GConstants.MsgStatus.MSG_STATUS_HANDLED) || (Utils.table_isEmpty(awardArr) && v.status == GConstants.MsgStatus.MSG_STATUS_READ)) {
                handledArr.push(v)
            }
        }
        //倒序排序
        let tmpHandleArr = handledArr.sort((a, b) => Number(b.id) - Number(a.id));
        let tmpUnHandleArr = unHandleArr.sort((a, b) => Number(b.id) - Number(a.id));
        let arr = Utils.mergeArray(tmpUnHandleArr, tmpHandleArr);
        return arr;
    }

}