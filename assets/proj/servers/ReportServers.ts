/**
 * Name = ReportServers
 * URL = db://assets/proj/servers/servers/ReportServers.ts
 * Time = Wed Aug 24 2022 11:45:42 GMT+0800 (中国标准时间)
 * Author = xueya
 * Client 数据上报控制器
 */

import { GCache } from "../../cache/GCache";
import { AppEvent } from "../../config/AppEvent";
import { ClientInfo } from "../../config/GameConfig";
import { inf_ClickReport } from "../../framework/InterfaceDefines";
import { Utils } from "../../framework/Utils";
import { Encrypt } from "../../framework/crypto/Encrypto";
import { Logger } from "../../framework/log/Logger";
import { EventManager } from "../../framework/manager/EventManager";
import { Network, NetworkState } from "../../framework/network/NetState";
import { BaseControll } from "../../framework/vc/BaseController";
import { Platform } from "../../platform/Platform";
import { GlobalCMD } from "../gnet/GlobalCMD";

export class ReportServers extends BaseControll {
    private static _instance = null;
    public static getInstance(): ReportServers {
        if (!this._instance || this._instance == null) {
            this._instance = new ReportServers("ReportServers");
        }
        this._instance.updateLoggerReportInfo();
        return this._instance;
    }
    public static init(): ReportServers {
        if (this._instance) {
            this._instance.clear()
        }
        this._instance = null
        ReportServers.getInstance()
        return
    }

    /** 一次最多条 */
    private _maxSize = 5;
    /** 客户端点击上报队列 */
    private _tempClientClickList = [];
    /** 上次提交得时间 毫秒*/
    private _lastReportTime = 0;
    /** 上报的时间间隔 毫秒*/
    private _reportTimeSpance: 30000;
    /** 实际上报条数 */
    private _reportRows = 0;
    /** 可存最大条数 */
    private _maxRows = 100;

    /**初始化添加事件绑定 */
    protected onInitModuleEvent(): void {
        //登录状态改变(更新客户端数据上报的信息)
        this.addModelListener(AppEvent.LOGIN_STATE_CHANGE, this.updateLoggerReportInfo)
        //客户端点击事件请求
        this.addModelListener(AppEvent.REPORT_CLIENT_CLICK, this.reqReportClick);
        //点击事件响应
        this.addModelListener(AppEvent.REPORT_RESP_CLIENT_CLICK, this.respReportClick);
    }


    /**
     * 更新数据上报的基础信息
     */
    updateLoggerReportInfo() {
        let uid = null;
        let platform = Platform.ClientPlatform;
        let sdkVersion = Platform.SDKVersion;
        if (GCache && GCache.User) {
        	uid = GCache.User.getUserMid();
        }
        let info = `[HallVer:${ClientInfo.HallVer},Uid:${uid}]`;
        Logger.ReportConf.BaseInfo = info;
    }
   
    
    /**
     * 请求事件上报接口
     * @param event 
     * @param param 
     * @returns 
     */
    reqReportClick(event, param: inf_ClickReport) { 
        if (Utils.table_isEmpty(param) == true) {
        	return;
        }
        if (param.eventID == null || Utils.string_isEmpty(param.eventID)) {
        	return;
        }
        let actionID = Number(param.eventID);
        let item = this.__genPackageBody(actionID, param.body);
        this._tempClientClickList.push(item);
        if (this.__checkCanReport(param["isFouce"]) == false) {
        	return;
        }
        //开始上报
        this.__startReport();
    }

    /**
     * 上报请求响应
     * @param event 
     * @param isSuccess 
     * @param respData 
     * @param reqData 
     */
    respReportClick(event, isSuccess, respData, reqData) {
        if (isSuccess) {
            this._lastReportTime = Utils.timeEx();
            this._tempClientClickList.splice(0, this._reportRows);
            console.log("上报成功:", reqData, respData);
        } else {
            console.log("上报失败:", reqData, respData);
        }  
    }

    /** 执行上报 */
    private __startReport() {
    	let max = (this._tempClientClickList.length >= this._maxSize ? this._maxSize : this._tempClientClickList.length);
    	let tempList = this._tempClientClickList.slice(0, max);
    	if (tempList.length <= 0) {
    		return;
        }
        //如果条数太多了,久未上报成功,那就清空
        if (tempList.length > this._maxRows) {
            console.log("上报数据:清空");
            this._tempClientClickList.splice(0, tempList.length);
            return;
        }
        this.print("开始上报客户端点击事件==>", tempList);
        this._reportRows = tempList.length;
        let appid = GCache.User.getUserAppID();
        let body = {
            list: Encrypt.JsonEncode(tempList),      
            appid: appid,
        };
        let sendMsg = {
            cmd: GlobalCMD.PHP_CLICK_REPORT,
            body: body,
        }
        this.print("reqReportClick", sendMsg);
        EventManager.dispatch(AppEvent.NET_SEND_MSG, sendMsg);
    }
 
    /**
     * 检查是否可以上报
     * @param isFouce 是否强制
     * @returns 
     */
    private __checkCanReport(isFouce: boolean = false) {
        //空数据、网络异常时不上报
        if (this._tempClientClickList.length == 0 || Network.instance.state != NetworkState.ONLINE) {
            return false;
        }
        // 非强制上报时数据不足不上报
        if (isFouce == false && this._tempClientClickList.length < this._maxSize) {
            return false;
        }
        //如果上次上报事件不为空 且 当前时间比上次上报
        if (this._lastReportTime != 0 && (Utils.timeEx() - this._lastReportTime) < this._reportTimeSpance) {
            return false;
        }
        return true;
    }

    /**
     * 组装数据
     * @param eventID 
     * @param param 
     * @returns 
     */
    private __genPackageBody(eventID, param = null) {
        console.log("包装数据:",eventID, param)
    	let body = {
    		act_id: eventID,
    		lts_at: Utils.time(),
    	};
        if (Utils.table_isEmpty(param) == false) {
    		// --渗透参数
    		body["gsubname"] = Encrypt.JsonEncode(param);
        }
    	return body;
    }
}

