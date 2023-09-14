/**
 * Name = TaskInfo
 * URL = db://assets/cache/TaskInfo.ts
 * Time = (中国标准时间)
 * Author = dongchuangW
 * 任务缓存
 */

import { GConstants, StoreKey } from "../config/GameConstant";
import { Encrypt } from "../framework/crypto/Encrypto";
import { CountTime } from "../framework/extend/CountTime";
import { LocalStorage } from "../framework/LocalStorage";
import { Utils } from "../framework/Utils";
import { BaseCache } from "../framework/vc/BaseCache";
import { Platform } from "../platform/Platform";
import { User } from "./User";
export class TaskInfo extends BaseCache {
    /** 用户类 */
    private __User: User = null;
    /** 活动 */
    private atyList: Array<any> = [];
    /** 公告 */
    private noticeList: Array<any> = [];
    /** 允许分享的时间 */
    private _allowShareTime = 0;
    //实例化
    constructor(superClass) {
        super("TaskInfo");
        this.__User = superClass;
    };
    /** 活动数据 */
    get atyData() {
        let atyList = Utils.clone(this.atyList);
        return atyList;
    }
    /** 公告数据 */
    get NoticeData() {
        let noticeList = Utils.clone(this.noticeList);
        return noticeList;
    }
    /** 更新活动中心配置数据 */
    updateActivityCenterData(body) {
        if (Utils.table_isEmpty(body)) {
            return;
        }
        this.atyList = body.activity.sort((a, b) => { return Number(b.sort) - Number(a.sort) }) || [];
        this.noticeList = body.notice.sort((a, b) => { return Number(b.sort) - Number(a.sort) }) || [];
        this.atyList.forEach((data, index) => {
            this.__User.RedDot.update_Activity_NormalRed(data, true);
        })
        this.noticeList.forEach((data, index) => {
            this.__User.RedDot.update_Activity_NoticeRed(data, true);
        })
        if (this.atyList.length == 0) {
            this.__User.RedDot.update_Activity_NormalRed(null);
        }
        if (this.noticeList.length == 0) {
            this.__User.RedDot.update_Activity_NoticeRed(null);
        }
    }
    /**检测用户是否可领取桌面进入大厅的奖励 */
    checkUserReceiveInToByDesk() {
        let activity_id = ""
        if (Utils.table_isEmpty(this.atyData)) {
            return
        }


        for (let index = 0; index < this.atyData.length; index++) {
            const item = this.atyData[index];
            if (item['is_jump']) {
                let _jumpData = Encrypt.JsonDecode(item['jump_code']) || {}
                let _jumpCmd = Number(_jumpData['cmd']) || 0
                let mallScene = _jumpData['tag'] || 0
                // 存 删 查 key
                let key = Utils.string_format(StoreKey.USER_REWARD_BY_DESK, this.__User.getUserMid());
                if (_jumpCmd == GConstants.JumpViewConf.POS_ACT_DESK_SIGN_POS_ACT_SPECIALGIFT
                    && mallScene == GConstants.JumpViewConf.POS_ACT_DESK_TAG) {
                    if (Platform.isWXPlatform()) {
                        let referrerInfo = Platform.AppEnterOptions;
                        if (Number(referrerInfo['scene']) == GConstants.AppLunchScene["1023"]) {
                            console.log('从添加桌面进入了:', referrerInfo['scene'], this.__User.getUserMid())
                            // 判断时间是否允许领 允许从本地删除
                            let allowShareTime = Number(item['limit_time']) * 24 * 60 * 60
                            let startTime = new CountTime();
                            if (this._allowShareTime - Utils.time() > allowShareTime) {
                                LocalStorage.remove(key)
                                startTime.Stop(); // 关闭计时
                            }
                            let _uid = LocalStorage.get(key, 0)
                            // 不存在就去发奖
                            if (!_uid) {
                                activity_id = item['activity_id']
                                // 发奖之后开始计时
                                startTime.StartTime = 0;
                                startTime.Start();
                                this._allowShareTime = startTime.StartTime
                                LocalStorage.set(key, this.__User.getUserMid());
                                console.log('终止循环，', index)
                                break;
                            }
                        }
                    } else {
                        let key = Utils.string_format(StoreKey.USER_REWARD_BY_DESK, this.__User.getUserMid());
                        let _uid = LocalStorage.get(key, 0)
                        // 不存在就去发奖
                        if (!_uid) {
                            activity_id = item['activity_id']
                            let key_uid = Utils.string_format(StoreKey.USER_REWARD_BY_DESK, this.__User.getUserMid())
                            LocalStorage.set(key_uid, this.__User.getUserMid()); // 缓存第一次领奖成功的uid
                            console.log('终止循环', index)
                            break;
                        }

                    }
                }
            }


        }
        return activity_id
    }
}