/**
 * Name = TaskServers
 * URL = db://assets/proj/servers/TaskService.ts
 * Time = (中国标准时间)
 * Author = dongchuangW
 * 任务、抽奖相关服务
 */
import { GCache } from "../../cache/GCache";
import { AppEvent } from "../../config/AppEvent";
import { ClientInfo } from "../../config/GameConfig";
import { UIID } from "../../config/UIConfig";
import { Md5 } from "../../framework/crypto/Md5";
import { EventManager } from "../../framework/manager/EventManager";
import { BaseControll } from "../../framework/vc/BaseController";
import { GlobalCMD } from "../gnet/GlobalCMD";
export class TaskServers extends BaseControll {
    private static _instance = null;
    public static getInstance(): TaskServers {
        if (!this._instance || this._instance == null) {
            this._instance = new TaskServers("TaskServers");
        }
        return this._instance;
    }
    //实例化
    constructor(name: string) {
        super(name)
    };
    public static init(): TaskServers {
        if (this._instance) {
            this._instance.clear()
        }
        this._instance = null
        TaskServers.getInstance();
        return
    }
    /**初始化添加事件绑定 */
    protected onInitModuleEvent(): void {
        //获取活动中心配置数据
        this.addModelListener(AppEvent.NET_CMD_REQ_TASK_ACT_CONFIG, this.reqAtyCenterConfig)
        //获取活动中心配置数据返回
        this.addModelListener(AppEvent.NET_CMD_RESP_TASK_ACT_CONFIG, this.respAtyCenterConfig)
        //请求添加桌面领奖
        this.addModelListener(AppEvent.NET_REQ_ADDDESK_AWARD, this.reqAddDeskAWard)
        /** 请求添加桌面领奖领奖返回 */
        this.addModelListener(AppEvent.NET_RESP_ADDDESK_AWARD, this.respAddDeskAWard);
    }
    /** 获取活动中心配置数据 */
    reqAtyCenterConfig(event = null) {
        let sendMsg = {
            cmd: GlobalCMD.PHP_ACTIVITY_TASK_CONFIG,
            body: {},
        }
        EventManager.dispatch(AppEvent.NET_SEND_MSG, sendMsg)
        this.print("请求活动中心配置")
    }
    /**获取活动中心配置数据返回 */
    respAtyCenterConfig(event, isSuccess, respData, reqData) {
        this.print("获取活动中心配置返回", isSuccess, respData, reqData)
        if (isSuccess && respData) {
            GCache.TaskInfo.updateActivityCenterData(respData)
        }
    }
    /** 请求添加桌面领奖 */
    reqAddDeskAWard(event, activity_id) {
        let _mark = "123!@#*&908byaa" + activity_id + ClientInfo.PlatFormAppID + GCache.User.getUserMid()
        let sendMsg = {
            cmd: GlobalCMD.PHP_ADD_DESK_AWARD,
            body: {
                activity_id: activity_id,
                mark: Md5(_mark)
            },
        }
        EventManager.dispatch(AppEvent.NET_SEND_MSG, sendMsg)
    }
    /** 请求添加桌面领奖返回*/
    respAddDeskAWard(event, isSuccess, respData, reqData) {
        console.log('进入大厅添加应用到桌面奖励返回', isSuccess, respData)
        if (!isSuccess) {
            console.log('进入大厅发奖失败', respData)
            return
        }
        let _add_desk_reward = []
        respData['reward'].forEach(item => {
            _add_desk_reward.push(
                {
                    name: item.name,
                    icon: item.icon,
                    num: item.num,
                }
            )
        })
        EventManager.dispatch(AppEvent.VIEW_UI_OPEN, UIID.GongXiHuoDePrefab, _add_desk_reward)
    }

}