/**
 * Name = GlobalProtocol
 * URL = db://assets/proj/GlobalProtocol.ts
 * Time = Wed Apr 13 2022 19:18:13 GMT+0800 (中国标准时间)
 * Author = xueya
 * 封包与解包
 */

import { Encrypt } from "../../framework/crypto/Encrypto";
import { Logger } from "../../framework/log/Logger";
import { IProtocolHelper, IRequestProtocol, IResponseProtocol, NetData } from "../../framework/network/NetInterface";
import { WebSocketBuffer } from "../../framework/network/WebSocketBuffer";
import { Utils } from "../../framework/Utils";
import { GlobalCMDHead } from "./GlobalCMD";
import { GPBWriteAndRead } from "./GPBWriteAndRead";


export class GlobalProtocol implements IProtocolHelper {
	//最大包长
	PacketSize: number = 16384;

	// 返回包头长度
	getHeadlen(): number {
		return 15;
	};
	// 返回一个心跳包
	getHearbeatPackage(): IRequestProtocol | null {
		let array = {
			headCmd: GlobalCMDHead.SERVER_SEND_HEART,
			isCompress: false,
			data: {},
			buffer: null
		}
		return array
	};
	// 返回整个包的长度                  
	getPackageLen(msg: NetData): number {
		return msg["byteLength"] || msg.toString().length
	};
	// 检查请求包数据是否合法（避免客户端报错崩溃） 
	checkRequestPackage(msg: NetData): boolean {
		return this.getPackageLen(msg) <= this.PacketSize;
	}
	// 检查响应包数据是否合法（避免客户端报错崩溃）                 
	checkResponsePackage(msg: NetData): boolean {
		return this.getPackageLen(msg) >= this.getHeadlen()
	};

	// 处理请求包数据(以二进制流的方式)
	handlerRequestPackage(reqProtocol: IRequestProtocol): boolean {
		if (!reqProtocol || !reqProtocol.headCmd) {
			return false
		}
		//对数据进行转换（二进制流）
		reqProtocol.buffer = null
		//头部长度
		let headlen = this.getHeadlen()
		//处理之后的数据
		let preDetalData = null

		//////////////////////////////////
		//包ID
		let packetID = WebSocketBuffer.Write.newPacket(0, this.isLittleEndian())

		//写标头
		WebSocketBuffer.Write.writeInt(packetID, 0) //正文数据长度
		let a = Utils.string_codeToASCII("Q")
		let b = Utils.string_codeToASCII("E")
		WebSocketBuffer.Write.writeByte(packetID, a)
		WebSocketBuffer.Write.writeByte(packetID, b)
		WebSocketBuffer.Write.writeByte(packetID, 1)
		WebSocketBuffer.Write.writeByte(packetID, 0)
		WebSocketBuffer.Write.writeInt(packetID, reqProtocol.headCmd)
		WebSocketBuffer.Write.writeShort(packetID, 1)
		WebSocketBuffer.Write.writeUByte(packetID, 0)   //校验码

		Logger.logNet(`[GProtocol]:handlerRequestPackage 处理请求包数据 HeadCmd[10进制] = ${reqProtocol.headCmd} HeadCmd[16进制] = ${Utils.number_formatToHex(reqProtocol.headCmd)}`)

		//开始写
		reqProtocol = GPBWriteAndRead.Write.Start(reqProtocol.headCmd, packetID, reqProtocol)


		if (!reqProtocol) {
			//删除这个包
			WebSocketBuffer.Read.delPacket(packetID)
			return false
		}
		//读取包
		WebSocketBuffer.Read.syncPacket(packetID)
		let dataView = WebSocketBuffer.Read.readPacket(packetID, true)
		WebSocketBuffer.Read.delPacket(packetID)

		//重新设置包体正文长度
		if (dataView) {
			dataView.setInt32(0, dataView.byteLength - 4)
		}
		//心跳包不加密
		if (reqProtocol.headCmd == GlobalCMDHead.SERVER_SEND_HEART) {
			reqProtocol.buffer = dataView
		} else {
			reqProtocol.buffer = Encrypt.encodeBuffer(headlen, this.PacketSize, dataView, this.isLittleEndian())
		}

		if (!this.checkRequestPackage(dataView)) {
			reqProtocol.buffer = null
			Logger.logNet("[GProtocol]: Error:封包失败长度超出限制")
			return false;
		}
		if (!reqProtocol || reqProtocol.buffer == null) {
			return false;
		}
		return true;
	};
	// 处理响应包数据   
	handlerResponsePackage(msg: ArrayBuffer): IResponseProtocol | null {
		// Logger.logNet("处理响应包数据===>")
		if (!msg) {
			return null;
		}
		//包ID
		let packetID = WebSocketBuffer.Write.insertPacket(msg, false);
		if (!packetID) {
			return null;
		}
		let dataView = WebSocketBuffer.Read.readPacket(packetID, true);
		let headLen = this.getHeadlen()
		if (dataView.byteLength < headLen) {
			WebSocketBuffer.Read.delPacket(packetID)
			return null;
		}
		//读标头
		let contentLength = WebSocketBuffer.Read.readInt(packetID, this.isLittleEndian()) //正文数据长度
		WebSocketBuffer.Read.readByte(packetID)
		WebSocketBuffer.Read.readByte(packetID)
		WebSocketBuffer.Read.readByte(packetID)
		WebSocketBuffer.Read.readByte(packetID)
		let headCmd = WebSocketBuffer.Read.readInt(packetID, this.isLittleEndian()) //头部命令
		WebSocketBuffer.Read.readShort(packetID, this.isLittleEndian())
		WebSocketBuffer.Read.readUByte(packetID)   //校验码

		let countRealSize = contentLength + 4
		let realContentLength = countRealSize - headLen
		if (realContentLength < 0 || countRealSize > dataView.byteLength) {//等于0则可能为心跳包 大于则超出限制
			console.warn("[GProtocol]: 数据有误，正文数据比头部数据还短 或者 定义的数据长度比整个包还长 countRealSize:" + countRealSize);
			//删除这个包
			WebSocketBuffer.Read.delPacket(packetID);
			return null;
		}
		Logger.logNet(`[GProtocol]: 处理响应包数据 headCmd[10进制] = ${headCmd} headCmd[16进制] = ${Utils.number_formatToHex(headCmd)}`)
		//非心跳包需要解密
		if (headCmd != GlobalCMDHead.SERVER_HEART_RESPONSE) {
			if (Utils.number_formatToHex(headCmd) == "0x1007") {
				console.log("！！！！这是进入房间成功的数据!!!!")

				// //删除这个包
				// WebSocketBuffer.Read.delPacket(packetID)
				// //将新包推进缓存区
				// let newArrayBuffer = dataView.buffer.slice(headLen, dataView.byteLength);
				// packetID = WebSocketBuffer.Write.insertPacket(newArrayBuffer, false);
				// console.log("老包===>", dataView)
				// console.log("新包包长：===>", newArrayBuffer)
			}
			dataView = Encrypt.decodeBuffer(headLen, this.PacketSize, dataView, this.isLittleEndian())

			//删除这个包
			WebSocketBuffer.Read.delPacket(packetID)
			//将新包推进缓存区
			let newArrayBuffer = dataView.buffer.slice(0, dataView.byteLength)
			packetID = WebSocketBuffer.Write.insertPacket(newArrayBuffer, false)

			let bbView = WebSocketBuffer.Read.readPacket(packetID, true)

			//从指定位置开始读
			WebSocketBuffer.Read.readPacketOffset(packetID, headLen - 1)
		}
		let respPackage = null
		//根据头来分包解析正文
		if (packetID) {
			//开始读
			respPackage = GPBWriteAndRead.Read.Start(headCmd, packetID)

		} else {
			console.error(`[Protocol]: Error：第一步解包出错 `)
		}
		//删除这个包
		WebSocketBuffer.Read.delPacket(packetID)
		return respPackage
	}

	/** 是否是小端 */
	isLittleEndian(): boolean {
		return false
	}

}

