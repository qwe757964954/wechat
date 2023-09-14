/**
 * Name = GPBAdaptive
 * URL = db://assets/proj/GPBAdaptive.ts
 * Time = Mon Apr 18 2022 13:03:36 GMT+0800 (中国标准时间)
 * Author = xueya
 * 数据的包装
 */

import { GCache } from "../../cache/GCache";
import { ClientInfo } from "../../config/GameConfig";
import { IRequestProtocol, } from "../../framework/network/NetInterface";
import { Utils } from "../../framework/Utils";
import { GCmdMapping } from "./GCmdMapping";
import { GlobalCMDHead } from "./GlobalCMD";

//请求唯一ID php请求时会带给服务器 返回时会带给客户端
export let PHPSeqID = -1
export function GetPHPSeq() {
	PHPSeqID = PHPSeqID + 1
	return PHPSeqID
}

export class GPBAdaptive {

	//实例化
	constructor() {

	};

	/**
	 * 包装发送的结构体
	 * @param headCmd 头部命令
	 * @param action 命令关键字
	 * @param callback 回调
	 * @param data 数据
	 * @param isCompress 是否压缩
	 * @param outtime 超时时间
	 * @returns 
	 */
	getSendPacket(headCmd, action, callback, data, isCompress, outtime) {
		let array: IRequestProtocol = {
			headCmd: headCmd,
			action: action,
			callback: callback,
			isCompress: isCompress,
			data: data,
			buffer: null,
			outtime: outtime
		}
		return array
	}
	/**包装正文数据 */
	generatPacket(cmd: number, body: any) {
		if (cmd < GlobalCMDHead.PHP_CMD_CONSTANT) {
			return [cmd, body]
		}

		//数据进行组装
		let phpSendCmd = GCmdMapping.getReqHeadByCmd(cmd)
		let packetInfo = this.getJsonTable(cmd)
		packetInfo["cmd"] = cmd - GlobalCMDHead.PHP_CMD_CONSTANT  //subCmd
		packetInfo["seq"] = GetPHPSeq() //请求序列号，此序列号会带给Php，当php回复时会带给客户端

		body = Utils.table_verify(body)

		for (let key in body) {
			if (Object.prototype.hasOwnProperty.call(body, key)) {
				packetInfo[key] = body[key]
			}
		}
		return [phpSendCmd, packetInfo]
	}
	/**根据头部命令是否需要压缩 */
	isCompressByHeadCmd(headCmd: number = null) {
		let isCompress = false
		switch (headCmd) {
			case GlobalCMDHead.SEND_PHP_REQUEST:
				isCompress = true
				break;
			case GlobalCMDHead.RESPONSE_PHP_REQUEST:
				isCompress = true
				break;
			case GlobalCMDHead.SEND_PHP_REQUEST_NEW:
				isCompress = true
				break;
			case GlobalCMDHead.RESPONSE_PHP_REQUEST_NEW:
				isCompress = true
				break;
			case GlobalCMDHead.SERVER_SEND_HEART:  //发送心跳包
				isCompress = false
				break;
			case GlobalCMDHead.SERVER_HEART_RESPONSE: //服务器回应心跳包
				isCompress = false
				break;
			default:
				break;
		}
		return isCompress
	}

	/**补全发送指令的数据 */
	private getJsonTable(cmd: number) {
		let info: any = {};
		info = {
			timestamp: Utils.time(),
			app: ClientInfo.PlatFormAppID,
			ssid: GCache.User.getDataUser("ssid", ""),  //会话ID 暂时为空 一般保存登录之后的
			mid: 0,    //暂时为0,int 用户ID(地区id 用于区分不同地区，一般逻辑参数之类的都使用这个id)
			isNew: 1,  //代表是统一大厅
			action: GCmdMapping.getActionByCmd(cmd),
			hall_version: ClientInfo.HallVer
		}
		let mid = GCache.User.getUserMid();
		if (mid == null) {
			mid = GCache.User.getLastlocalMid();
			if (mid == null) {
				mid = 0
			}
		}
		info.mid = mid
		return info;
	}


}

