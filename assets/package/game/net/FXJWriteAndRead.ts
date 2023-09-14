/**
 * Name = FXJWriteAndRead
 * URL = db://assets/package/game/socket/FXJWriteAndRead.ts
 * Time = Fri May 27 2022 15:58:43 GMT+0800 (中国标准时间)
 * Author = xueya
 * 游戏模块读写解析
 */

import { error } from "cc";
import { Utils } from "../../../framework/Utils";
import { Encrypt } from "../../../framework/crypto/Encrypto";
import { EventManager } from "../../../framework/manager/EventManager";
import { IRequestProtocol } from "../../../framework/network/NetInterface";
import { WebSocketBuffer } from "../../../framework/network/WebSocketBuffer";
import { FXJEvent } from "../common/FXJEvent";
import { FXJCmdBinding } from "./FXJCmd";
import { FXJPBAdaptive } from "./FXJPBAdaptive";

/** 校验读 */
const checkRead = function (packetID: string): DataView | null {
	if (!packetID) {
		return null
	}
	let dataView = WebSocketBuffer.Read.readPacket(packetID, true, false, false)
	if (!dataView) {
		return null
	}
	return dataView
}
/** 校验写 */
const checkWrite = function (packetID, reqProtocol): boolean {
	if (!packetID) {
		return false
	}
	if (!reqProtocol || !reqProtocol.data) {
		return false
	}
	return true
}

/**命令序列 */
export interface ICmdWriteReadArray {
	cmd: any,   //命令
	binding: Function,   //绑定函数
}
/** 包装包体 */
const GetPackPacket = function (headCmd: number = null, action: string = null, data: any = null, buffer = null) {
	let resp = {
		/**头部命令 */
		headCmd: headCmd,
		/** 动作名 */
		action: action,
		/** 消息内容 */
		data: data,
		/** 加密成的buffer data 服务端下发*/
		buffer: buffer,
	}
	return resp
}

export class FXJWriteAndRead {
	private static _instance = null;
	public static getInstance(): FXJWriteAndRead {
		if (!this._instance || this._instance == null) {
			this._instance = new FXJWriteAndRead("FXJWriteAndRead");
		}
		return this._instance;
	}
	public static init(): FXJWriteAndRead {
		if (this._instance) {
			this._instance = null
		}
		FXJWriteAndRead.getInstance()
		return
	}

	//请求时 cmd与pb的映射
	private req_CmdMapping = {};
	//返回时 cmd与pb的映射
	private resp_CmdMapping = {};
	//实例化
	constructor(name) {
		console.log(`${name} 实例化`)
		//实例化PB解析和包装类


	};
	/** 初始化Pb */
	initPB() {
		FXJPBAdaptive.getInstance().startReloadPBList();
		//绑定读写
		//读写 0读 1写
		let writerArray = [];
		let readArray = [];

		for (let headCmd in FXJCmdBinding.REQ) {
			if (Object.prototype.hasOwnProperty.call(FXJCmdBinding.REQ, headCmd)) {
				let _headCmd = Number(headCmd);
				let value = FXJCmdBinding.REQ[_headCmd];
				let arr: ICmdWriteReadArray = {
					cmd: _headCmd,
					binding: FXJWriteAndRead.WritePB
				}
				writerArray.push(arr)
			}
		}
		for (let headCmd in FXJCmdBinding.RESP) {
			if (Object.prototype.hasOwnProperty.call(FXJCmdBinding.RESP, headCmd)) {
				let _headCmd = Number(headCmd);
				let value = FXJCmdBinding.RESP[_headCmd];
				let arr: ICmdWriteReadArray = {
					cmd: _headCmd,
					binding: FXJWriteAndRead.ReadPB
				}
				readArray.push(arr)
			}
		}
		EventManager.dispatch(FXJEvent.SYS_UPDATE_PROTOBUF, 0, readArray);
		EventManager.dispatch(FXJEvent.SYS_UPDATE_PROTOBUF, 1, writerArray);
	}
	/** 初始化命令绑定映射 */
	initCMDMapping() {
		let allCMDList = {};
		//0读 1写
		for (let headCmd in FXJCmdBinding.REQ) {
			if (Object.prototype.hasOwnProperty.call(FXJCmdBinding.REQ, headCmd)) {
				let _headCmd = Number(headCmd);
				let value = FXJCmdBinding.REQ[_headCmd];
				allCMDList[_headCmd] = value;
			}
		}
		for (let headCmd in FXJCmdBinding.RESP) {
			if (Object.prototype.hasOwnProperty.call(FXJCmdBinding.RESP, headCmd)) {
				let _headCmd = Number(headCmd);
				let value = FXJCmdBinding.RESP[_headCmd];
				allCMDList[_headCmd] = value;
			}
		}
		EventManager.dispatch(FXJEvent.SYS_UPDATE_CMDMAPPING, allCMDList)
	}

	/** PB写 */
	public static WritePB(headCmd, packetID: string, reqProtocol: IRequestProtocol) {
		reqProtocol.isCompress = false;
		//pb包装
		if (FXJCmdBinding.REQ[headCmd]) {
			let pbPackageID = FXJCmdBinding.REQ[headCmd]["packageID"];
			let pbFuncName = FXJCmdBinding.REQ[headCmd]["funcName"];
			if (pbPackageID && pbFuncName) {
				let dataArrayBuffer: ArrayBuffer = FXJPBAdaptive.getInstance().encodePacket(reqProtocol.data, pbPackageID, pbFuncName);
				let str = Encrypt.arrayBufferToString(dataArrayBuffer, false, false);
				if (str) {
					WebSocketBuffer.Write.writeStringNoZeroEnd(packetID, str);
				} else {
					error(`[FXJWriteAndRead]:WritePB 包装数据结构出错HeadCmd[10进制] = ${headCmd} HeadCmd[16进制] = ${Utils.number_formatToHex(headCmd)},包装函数为 = ${pbFuncName}`);
				}
			} else if (pbPackageID == null && pbFuncName != null) {
				if (FXJWriteAndRead.getInstance()[pbFuncName] != null) {
					FXJWriteAndRead.getInstance()[pbFuncName](headCmd, packetID, reqProtocol);
				} else {
					error(`[FXJWriteAndRead]:WritePB 包装数据结构出错HeadCmd[10进制] = ${headCmd} HeadCmd[16进制] = ${Utils.number_formatToHex(headCmd)},包装函数为 = ${pbFuncName}`);
				}
			}
		}
		reqProtocol.data = "";
		return reqProtocol;
	}
	/** PB读 */
	public static ReadPB(headCmd, packetID: string) {
		console.log("FXJWriteAndRead:ReadPB pb读===>", `,HeadCmd[10进制] = ${headCmd} HeadCmd[16进制] = ${Utils.number_formatToHex(headCmd)}`);
		let dataView = checkRead(packetID)
		if (!dataView) {
			return null;
		}
		//pb解析
		let packetInfo = null;
		if (FXJCmdBinding.RESP[headCmd]) {
			let pbPackageID = FXJCmdBinding.RESP[headCmd]["packageID"];
			let pbFuncName = FXJCmdBinding.RESP[headCmd]["funcName"];

			if (pbPackageID && pbFuncName) {
				let str = WebSocketBuffer.Read.readStringNoZeroEnd(packetID);
				let bytes = Encrypt.stringToByte(str, false);
				if (bytes && bytes.length > 0) {
					let byteBuffer = FXJPBAdaptive.getInstance().bytesToByteBuffer(bytes, false)
					packetInfo = FXJPBAdaptive.getInstance().decodePacket(byteBuffer, pbPackageID, pbFuncName); //namePfunc["pbFuncName"].decode(Encrypt.bytesToUint8Array(bytes));
				}
			}
			if (!packetInfo) {
				error(`[FXJWriteAndRead]:ReadPB 解析包装的数据结构体为空 ,HeadCmd[10进制] = ${headCmd} HeadCmd[16进制] = ${Utils.number_formatToHex(headCmd)},解析函数为 = ${pbFuncName}`);
				packetInfo = null;
			}
		}
		return GetPackPacket(headCmd, null, packetInfo, dataView)

	}

	//ROOM_USER_CHAT 0x1004:发送聊天
	onReqCommonUserChat(headCmd, packetID: string, reqProtocol: IRequestProtocol) {

		WebSocketBuffer.Write.writeString(packetID, reqProtocol.data["msg"] || "");
		WebSocketBuffer.Write.writeShort(packetID, reqProtocol.data["index"] || -1);

		reqProtocol.data = "";
		reqProtocol.isCompress = false
		return reqProtocol;
	}

	//ROOM_USER_FACE 0x1004:发送表情
	onReqCommonUserFace(headCmd, packetID: string, reqProtocol: IRequestProtocol) {

		WebSocketBuffer.Write.writeInt(packetID, reqProtocol.data["faceValue"] || 0);
		WebSocketBuffer.Write.writeInt(packetID, reqProtocol.data["vipType"] || 0);

		reqProtocol.data = "";
		reqProtocol.isCompress = false
		return reqProtocol;
	}

	// onReqOperation(headCmd, packetID: string, reqProtocol: IRequestProtocol) {
		
	// }
	

}

