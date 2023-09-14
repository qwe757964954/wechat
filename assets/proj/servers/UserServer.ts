/**
 * Name = UserServers
 * URL = db://assets/proj/servers/UserServers.ts
 * Time = Wed 2023 07.19 19:31:18 GMT+0800 (中国标准时间)
 * Author = xueya
 * 用户背包相关服务
 */

import { GCache } from "../../cache/GCache";
import { AppEvent } from "../../config/AppEvent";
import { ClientInfo } from "../../config/GameConfig";
import { EventManager } from "../../framework/manager/EventManager";
import { Utils } from "../../framework/Utils";
import { BaseControll } from "../../framework/vc/BaseController";
import { GlobalCMD } from "../gnet/GlobalCMD";

export class UserServers extends BaseControll {
  private static _instance = null;
  public static getInstance(): UserServers {
    if (!this._instance || this._instance == null) {
      this._instance = new UserServers("UserServers");
    }
    return this._instance;
  }
  public static init(): UserServers {
    if (this._instance) {
      this._instance.clear()
    }
    this._instance = null
    UserServers.getInstance()
    return
  }
  protected onInitModuleEvent(): void {
    //请求拉取用户背包数据
    this.addModelListener(AppEvent.NET_CMD_REQ_USER_BACKPACK, this.reqUserBagPack)
    //请求拉取用户背包数据返回
    this.addModelListener(AppEvent.NET_CMD_RESP_USER_BACKPACK, this.respUserBagPack)
    //推送消息
    this.addModelListener(AppEvent.NET_RECEIVE_PHP_SERVER_USER_VIP_INFO, this.receiveServerUserVipInfo)
  }
  /** 请求拉取用户背包数据 */
  reqUserBagPack(event = null) {
    console.log('背包数据请求')
    let param = {
      action: "bag.boxlist",
      page: 1,
      pagenum: 1000,// 无实际背包页面只拉取一页查询页设置条数为1000
      hall_version: ClientInfo.HallVer,
      timestamp: Utils.time(),
      appid: ClientInfo.PlatFormAppID,
      mid: GCache.User.getUserMid(),
      ssid: GCache.User.getDataUser("ssid", ""),
    }
    let sendMsg = {
      cmd: GlobalCMD.PHP_PACKAGE_BAGLIST,
      body: param,
    }
    EventManager.dispatch(AppEvent.NET_SEND_MSG, sendMsg);
  }
  /** 请求拉取用户背包数据返回 */
  respUserBagPack(event, isSuccess, respData, reqData) {
    console.log('背包道具数据的返回', isSuccess, respData)
    reqData = Utils.table_verify(reqData);
    reqData["code"] = Utils.table_verify(reqData["code"]);
    if (respData) {
      GCache.BackPack.updateBagData(respData.box);//赋值最新的背包数据
    }
  }
  //广播:server返回用户VIP详细信息
  receiveServerUserVipInfo(event, isSuccess, respData, reqData) {
    console.log('广播:server返回用户VIP详细信息的返回', isSuccess, respData)
    if (!isSuccess) {
      return
    }
    //通知更新背包道具 
    EventManager.dispatch(AppEvent.NET_CMD_REQ_USER_BACKPACK);

  }
}