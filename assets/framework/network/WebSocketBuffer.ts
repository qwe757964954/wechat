/**
 * Name = ArrayBufferEx
 * URL = db://assets/framework/extend/ArrayBufferEx.ts
 * Time = Wed May 18 2022 12:44:06 GMT+0800 (中国标准时间)
 * Author = xueya
 * 字节缓冲区扩展
 */

import { Encrypt } from "../crypto/Encrypto";
import { Int64 } from "../libs/Int64";
import { Utils } from "../Utils";

export interface IArrayBuffer {
	/** 是否是小端 自定义的解析 */
	isLittleEndian: boolean,
	/** 二进制数据 */
	byteArray: Array<number>,
	/** 读取的二进制数据 */
	readByteArray: Array<number>,
}
//数据队列
//ArrayBuffer集合[packetID = buffer : IArrayBuffer]
const MapArrayBuffer = {};

/** 本地是否是小端 网络全部以大端传输 */
const checkLocalLittleEndian = function (): boolean {
	let arrayBuffer = new ArrayBuffer(2);
	let uint8Array = new Uint8Array(arrayBuffer);
	let uint16array = new Uint16Array(arrayBuffer);
	uint8Array[0] = 0xAA; // set first byte
	uint8Array[1] = 0xBB; // set second byte
	if (uint16array[0] === 0xBBAA) {
		return true;
	} else if (uint16array[0] === 0xAABB) {
		return false;
	} else {
		throw new Error("大小端检测异常");
	};
}

//开始的id
let MapPacketID = 0;

/** 写数据 */
class WriteBuffer {
	//ArrayBuffer集合[packetID = buffer : IArrayBuffer]

	private static _instance = null;
	/** 本地机器大小端 */
	private isLocalLittleEndian = false;

	public static instance(): WriteBuffer {
		if (!this._instance || this._instance == null) {
			this._instance = new WriteBuffer("WriteBuffer");
		}
		return this._instance;
	}

	//实例化
	constructor(name: string) {
		console.log(`${name} 初始化`)
		this.isLocalLittleEndian = checkLocalLittleEndian();
	};
	//获取新的包ID
	get PacketID(): string {
		MapPacketID = MapPacketID + 1
		return `PacketID_${MapPacketID}`
	}

	/**
	 * 新增一个包
	 * @param size 包体大小 默认0
	 * @param isLittleEndian 是否小端包 默认小端
	 * @returns packetID 包体ID
	 */
	newPacket(size: number = 0, isLittleEndian: boolean = false): string {
		let byteArray = new Array()
		let readByteArray = new Array()
		let array: IArrayBuffer = {
			isLittleEndian: isLittleEndian,
			byteArray: byteArray,
			readByteArray: readByteArray,
		}
		let packetID = this.PacketID
		MapArrayBuffer[packetID] = array
		return packetID
	}
	/**
	 * 插入一个包
	 * @param arrayBuffer 
	 * @param isLittleEndian 是否是小端包
	 * @returns packetID 包体ID
	 */
	insertPacket(arrayBuffer: ArrayBuffer, isLittleEndian: boolean = false): string | null {
		if (!arrayBuffer) {
			return null
		}
		let byteArray = new Array()
		let readByteArray = new Array()
		let array: IArrayBuffer = {
			isLittleEndian: isLittleEndian,
			byteArray: byteArray,
			readByteArray: readByteArray,
		}

		let dataView = new DataView(arrayBuffer, 0)
		//取出来
		let commondBuffer = dataView.buffer.slice(0, dataView.buffer.byteLength)
		let uBuffer = new Int8Array(commondBuffer) /**注意 */
		//合并
		for (let index = 0; index < uBuffer.byteLength; index++) {
			array.byteArray.push(uBuffer[index])
			array.readByteArray.push(uBuffer[index])
		}
		let packetID = this.PacketID
		MapArrayBuffer[packetID] = array
		return packetID

	}

	/**
	 * 向指定数据包末尾写入4字节int类型的数据(有符号)
	 * @param packetID 
	 * @param value 
	 */
	writeInt(packetID: string = null, value: number = null): boolean {
		if (!packetID) {
			return null
		}
		if (MapArrayBuffer[packetID] && value != null) {
			let array: IArrayBuffer = MapArrayBuffer[packetID]
			//新长度
			let newBuffer = new ArrayBuffer(4)
			let newDataView = new DataView(newBuffer)
			newDataView.setInt32(0, value, array.isLittleEndian)  /**注意 */

			//取出来
			let commondBuffer = newDataView.buffer.slice(0, newDataView.buffer.byteLength)
			let uBuffer = new Int8Array(commondBuffer) /**注意 */
			//合并
			for (let index = 0; index < uBuffer.byteLength; index++) {
				array.byteArray.push(uBuffer[index])
				array.readByteArray.push(uBuffer[index])
			}
			return true
		}
		return null
	}
	/**
	 * 向指定数据包末尾写入4字节int类型的数据(无符号)
	 * @param packetID 
	 * @param value 
	 */
	writeUInt(packetID: string = null, value: number = null): boolean {
		if (!packetID) {
			return null
		}
		if (MapArrayBuffer[packetID] && value != null) {
			let array: IArrayBuffer = MapArrayBuffer[packetID]
			//新长度
			let newBuffer = new ArrayBuffer(4)
			let newDataView = new DataView(newBuffer)
			newDataView.setUint32(0, value, array.isLittleEndian)  /**注意 */

			//取出来
			let commondBuffer = newDataView.buffer.slice(0, newDataView.buffer.byteLength)
			let uBuffer = new Uint8Array(commondBuffer) /**注意 */
			//合并
			for (let index = 0; index < uBuffer.byteLength; index++) {
				array.byteArray.push(uBuffer[index])
				array.readByteArray.push(uBuffer[index])
			}
			return true
		}
		return null
	}
	/**
	 * 向指定数据包末尾写入2字节int类型的数据(有符号)
	 * @param packetID 
	 * @param value 
	 */
	writeShort(packetID: string = null, value: number = null) {
		if (!packetID) {
			return null
		}
		if (MapArrayBuffer[packetID] && value != null) {
			let array: IArrayBuffer = MapArrayBuffer[packetID]
			//新长度
			let newBuffer = new ArrayBuffer(2)
			let newDataView = new DataView(newBuffer)
			newDataView.setInt16(0, value)  /**注意 */

			//取出来
			let commondBuffer = newDataView.buffer.slice(0, newDataView.buffer.byteLength)
			let uBuffer = new Int8Array(commondBuffer) /**注意 */

			//合并
			for (let index = 0; index < uBuffer.byteLength; index++) {
				array.byteArray.push(uBuffer[index])
				array.readByteArray.push(uBuffer[index])
			}
			return true
		}
		return null
	}
	/**
	 * 向指定数据包末尾写入2字节int类型的数据(无符号)
	 * @param packetID 
	 * @param value 
	 */
	writeUShort(packetID: string = null, value: number = null) {
		if (!packetID) {
			return null
		}
		if (MapArrayBuffer[packetID] && value != null) {
			let array: IArrayBuffer = MapArrayBuffer[packetID]
			//新长度
			let newBuffer = new ArrayBuffer(2)
			let newDataView = new DataView(newBuffer)
			newDataView.setUint16(0, value)  /**注意 */

			//取出来
			let commondBuffer = newDataView.buffer.slice(0, newDataView.buffer.byteLength)
			let uBuffer = new Uint8Array(commondBuffer) /**注意 */
			//合并
			for (let index = 0; index < uBuffer.byteLength; index++) {
				array.byteArray.push(uBuffer[index])
				array.readByteArray.push(uBuffer[index])
			}
			return true
		}
		return null
	}
	/**
	 * 向指定数据包末尾写入1字节int类型的数据(有符号)
	 * @param packetID 
	 * @param value 
	 */
	writeByte(packetID: string = null, value: number = null) {
		if (!packetID) {
			return null
		}
		if (MapArrayBuffer[packetID] && value != null) {
			let array: IArrayBuffer = MapArrayBuffer[packetID]
			//新长度
			let newBuffer = new ArrayBuffer(1)
			let newDataView = new DataView(newBuffer)
			newDataView.setInt8(0, value)  /**注意 */

			//取出来
			let commondBuffer = newDataView.buffer.slice(0, newDataView.buffer.byteLength)
			let uBuffer = new Int8Array(commondBuffer) /**注意 */
			//合并
			for (let index = 0; index < uBuffer.byteLength; index++) {
				array.byteArray.push(uBuffer[index])
				array.readByteArray.push(uBuffer[index])
			}
			return true
		}
		return null
	}
	/**
	 * 向指定数据包末尾写入1字节int类型的数据(无符号)
	 * @param packetID 
	 * @param value 
	 */
	writeUByte(packetID: string = null, value: number = null) {
		if (!packetID) {
			return null
		}
		if (MapArrayBuffer[packetID] && value != null) {
			let array: IArrayBuffer = MapArrayBuffer[packetID]
			//新长度
			let newBuffer = new ArrayBuffer(1)
			let newDataView = new DataView(newBuffer)
			newDataView.setUint8(0, value)  /**注意 */

			//取出来
			let commondBuffer = newDataView.buffer.slice(0, newDataView.buffer.byteLength)
			let uBuffer = new Uint8Array(commondBuffer) /**注意 */
			//合并
			for (let index = 0; index < uBuffer.byteLength; index++) {
				array.byteArray.push(uBuffer[index])
				array.readByteArray.push(uBuffer[index])
			}
			return true
		}
		return null
	}
	/**
	 * 向指定数据包末尾写入字符串（无符号） 头部有4字节的长度 尾部有\0（1字节）结尾
	 * @param packetID 
	 * @param str 
	 */
	writeString(packetID: string = null, str: string = null) {
		if (!packetID) {
			return null
		}
		if (MapArrayBuffer[packetID]) {
			let newLength = 1
			//字符串字节长度
			let strByteLength = 0
			//字符串转字节数组
			let byteArray = Encrypt.stringToByte(str)
			if (byteArray) {
				strByteLength = byteArray.length
			}
			if (strByteLength > 0) {
				newLength = newLength + strByteLength
			}
			//写入正文头
			this.writeInt(packetID, newLength)
			//构建正文数据
			let newBuffer = new ArrayBuffer(newLength)
			let newDataView = new DataView(newBuffer)
			let offset = -1

			if (newLength > 1) {//写入\0
				//写正文
				for (let index = 0; index < byteArray.length; index++) {
					offset++;
					newDataView.setUint8(index, byteArray[index]); /**注意 */
				}
			}
			offset = offset + 1
			newDataView.setUint8(offset, Utils.string_codeToASCII("\0"))  /**注意 */

			//取出来
			let commondBuffer = newDataView.buffer.slice(0, newDataView.buffer.byteLength)
			let uBuffer = new Uint8Array(commondBuffer) /**注意 */

			//合并
			let array: IArrayBuffer = MapArrayBuffer[packetID]
			for (let index = 0; index < uBuffer.byteLength; index++) {
				array.byteArray.push(uBuffer[index])
				array.readByteArray.push(uBuffer[index])
			}
			return true
		}
	}
	/**
	 * 向指定数据包末尾写入字符串（无符号 非UTF编码） 头部有4字节的长度
	 * @param packetID 
	 * @param str 
	 */
	 writeStringNoZeroEnd(packetID: string = null, str: string = null) {
		if (!packetID) {
			return null
		}
		if (MapArrayBuffer[packetID]) {
			let newLength = 0
			//字符串字节长度
			let strByteLength = 0
			//字符串转字节数组
			let byteArray = Encrypt.stringToByte(str,false)
			if (byteArray) {
				strByteLength = byteArray.length
			}
			if (strByteLength > 0) {
				newLength = newLength + strByteLength
			}
			//写入正文头
			this.writeInt(packetID, newLength)
			//构建正文数据
			let newBuffer = new ArrayBuffer(newLength)
			let newDataView = new DataView(newBuffer)
			let offset = -1

			if (newLength > 0) {
				//写正文
				for (let index = 0; index < byteArray.length; index++) {
					offset++;
					newDataView.setUint8(index, byteArray[index]); /**注意 */
				}
			}

			//取出来
			let commondBuffer = newDataView.buffer.slice(0, newDataView.buffer.byteLength)
			let uBuffer = new Uint8Array(commondBuffer) /**注意 */

			//合并
			let array: IArrayBuffer = MapArrayBuffer[packetID]
			for (let index = 0; index < uBuffer.byteLength; index++) {
				array.byteArray.push(uBuffer[index])
				array.readByteArray.push(uBuffer[index])
			}
			return true
		}
	}

}

/** 读数据 */
class ReadBuffer {

	private static _instance = null;
	/** 本地机器大小端 */
	private isLocalLittleEndian = false;

	public static instance(): ReadBuffer {
		if (!this._instance || this._instance == null) {
			this._instance = new ReadBuffer("ReadBuffer");
		}
		return this._instance;
	}

	//实例化
	constructor(name: string) {
		console.log(`${name} 初始化`)
		this.isLocalLittleEndian = checkLocalLittleEndian();
	};

	/**
	 * 读取包
	 * @param packetID 
	 * @param isOnlyRead 只读取不删除 
	 * @param isOriginal 是否是原始包
	 * @param isUByte 是否无符号
	 * @returns 返回DataView或Null
	 */
	readPacket(packetID: string = null, isOnlyRead: boolean = false, isOriginal: boolean = false, isUByte: boolean = false): DataView | null {
		if (!packetID) {
			return null
		}
		if (MapArrayBuffer[packetID]) {
			let array: IArrayBuffer = MapArrayBuffer[packetID]
			let size = 0;
			let newByteArray;
			if (isOriginal == true) {
				//定义取出长度
				size = array.byteArray.length      /**注意 */
				//拿出来
				newByteArray = array.byteArray.slice(0, size)
			} else {
				//定义取出长度
				size = array.readByteArray.length      /**注意 */
				//拿出来并删除原有
				newByteArray = array.readByteArray.slice(0, size)
				if (isOnlyRead == false) {
					array.readByteArray.splice(0, size)
				}
			}
			let newArray;/**注意 */
			if (isUByte == false) {
				newArray = new Int8Array(newByteArray.length)
			} else {
				newArray = new Uint8Array(newByteArray.length)
			}
			//单独装进缓冲区
			for (let index = 0; index < newArray.length; index++) {
				newArray[index] = newByteArray[index]
			}
			let newArrayBuffer = newArray.buffer.slice(0, newArray.byteLength)
			let newDataView = new DataView(newArrayBuffer)
			//返回值
			return newDataView   /**注意 */
		}
		return null
	}

	/**
	 * 同步包
	 * @param packetID
	 * @returns 成功或失败
	 */
	syncPacket(packetID: string = null): boolean {
		if (!packetID) {
			return false
		}
		if (MapArrayBuffer[packetID]) {
			let array: IArrayBuffer = MapArrayBuffer[packetID]

			let fromArray = array.byteArray
			let toArray = array.readByteArray

			if (toArray.length > fromArray.length) {
				toArray = toArray.slice(0, fromArray.length)
			}
			for (let index = 0; index < fromArray.length; index++) {
				toArray[index] = fromArray[index];
			}
			array.readByteArray = toArray

			return true
		}
		return false
	}
	/**
	 * 删除包
	 * @param packetID 
	 * @returns 
	 */
	delPacket(packetID: string = null): boolean {
		if (!packetID) {
			return false
		}
		if (MapArrayBuffer[packetID]) {
			MapArrayBuffer[packetID] = null
		}
		return true
	}
	/**
	 * 从指定位置开始读
	 * @param packetID 
	 * @param offset 0为首位 若为0则表示删除下标为0的readByteArray
	 */
	readPacketOffset(packetID: string = null, offset: number): boolean {
		if (!packetID) {
			return false
		}
		if (MapArrayBuffer[packetID] && offset != null && offset > 0) {
			let array: IArrayBuffer = MapArrayBuffer[packetID]

			if (array.readByteArray.length - 1 <= offset) {
				array.readByteArray.splice(0, array.readByteArray.length)
				return true
			}
			array.readByteArray.splice(0, offset + 1)
			return true
		}
		return false
	}
	/**
	 * 向指定数据包开始读取4字节int类型的数据(有符号)
	 * @param packetID 
	 * @param isLittleEndian 是否以小端的方式读取 
	 * @param isNotDel       是否只读不删
	 * @param value 
	 */
	readInt(packetID: string = null, isLittleEndian: boolean | null = null, isNotDel: boolean = false): number | null {
		if (!packetID) {
			return null
		}
		if (MapArrayBuffer[packetID]) {
			let array: IArrayBuffer = MapArrayBuffer[packetID]
			//定义取出长度
			let size = 4      /**注意 */
			if (array.readByteArray.length < size) {
				return null
			}
			//拿出来并删除原有
			let newByteArray = array.readByteArray.slice(0, size)
			if (isNotDel != true) {
				array.readByteArray.splice(0, size)
			}

			let newArray = new Int8Array(newByteArray.length)     /**注意 */
			//单独装进缓冲区
			for (let index = 0; index < newArray.length; index++) {
				newArray[index] = newByteArray[index]
			}
			let newArrayBuffer = newArray.buffer.slice(0, newArray.byteLength)

			let newDataView = new DataView(newArrayBuffer)
			//返回值
			return newDataView.getInt32(0, isLittleEndian != null ? isLittleEndian : array.isLittleEndian)   /**注意 */
		}
		return null
	}
	/**
	 * 向指定数据包开始读取4字节int类型的数据(无符号)
	 * @param packetID 
	 * @param isLittleEndian 是否以小端的方式读取 
	 * @param isNotDel       是否只读不删
	 * @param value 
	 */
	readUInt(packetID: string = null, isLittleEndian: boolean | null = null, isNotDel: boolean = false): number | null {
		if (!packetID) {
			return null
		}
		if (MapArrayBuffer[packetID]) {
			let array: IArrayBuffer = MapArrayBuffer[packetID]
			//定义取出长度
			let size = 4      /**注意 */
			if (array.readByteArray.length < size) {
				return null
			}
			//拿出来并删除原有
			let newByteArray = array.readByteArray.slice(0, size)
			if (isNotDel != true) {
				array.readByteArray.splice(0, size)
			}

			let newArray = new Uint8Array(newByteArray.length)     /**注意 */
			//单独装进缓冲区
			for (let index = 0; index < newArray.length; index++) {
				newArray[index] = newByteArray[index]
			}
			let newArrayBuffer = newArray.buffer.slice(0, newArray.byteLength)
			let newDataView = new DataView(newArrayBuffer)
			//返回值
			return newDataView.getUint32(0, isLittleEndian != null ? isLittleEndian : array.isLittleEndian)   /**注意 */
		}
		return null
	}

	/**
	 * 向指定数据包开始读取8字节int类型的数据(实际无符号 可能精度不准)
	 * @param packetID 1.5e-23
	 * @param value 
	 */
	readInt64(packetID: string = null): number | null {
		if (!packetID) {
			return null
		}
		if (MapArrayBuffer[packetID]) {
			let array: IArrayBuffer = MapArrayBuffer[packetID]
			//定义取出长度
			let size = 8      /**注意 */
			if (array.readByteArray.length < size) {
				return null
			}
			//拿出来并删除原有
			let newByteArray = array.readByteArray.slice(0, size)
			array.readByteArray.splice(0, size)

			let newArray = new Uint8Array(newByteArray.length)     /**注意 使用int64.ts必须为无符号Uint8Array */
			//单独装进缓冲区
			for (let index = 0; index < newArray.length; index++) {
				newArray[index] = newByteArray[index];
			}
			let int64 = new Int64(newArray);
			return int64.toNumber()            /**注意 */
		}
		return null
	}

	/**
	 * 向指定数据包开始读取2字节int类型的数据(有符号)
	 * @param packetID 
	 * @param isLittleEndian 是否以小端的方式读取 
	 * @param value 
	 */
	readShort(packetID: string = null, isLittleEndian: boolean | null = null): number | null {
		if (!packetID) {
			return null
		}
		if (MapArrayBuffer[packetID]) {
			let array: IArrayBuffer = MapArrayBuffer[packetID]
			//定义取出长度
			let size = 2      /**注意 */
			if (array.readByteArray.length < size) {
				return null
			}
			//拿出来并删除原有
			let newByteArray = array.readByteArray.slice(0, size)
			array.readByteArray.splice(0, size)

			let newArray = new Int8Array(newByteArray.length)     /**注意 */
			//单独装进缓冲区
			for (let index = 0; index < newArray.length; index++) {
				newArray[index] = newByteArray[index]
			}
			let newArrayBuffer = newArray.buffer.slice(0, newArray.byteLength)
			let newDataView = new DataView(newArrayBuffer)
			//返回值
			return newDataView.getInt16(0, isLittleEndian != null ? isLittleEndian : array.isLittleEndian)   /**注意 */
		}
		return null
	}
	/**
	 * 向指定数据包开始读取2字节int类型的数据(无符号)
	 * @param packetID
	 * @param isLittleEndian 是否以小端的方式读取  
	 * @param value 
	 */
	readUShort(packetID: string = null, isLittleEndian: boolean | null = null): number | null {
		if (!packetID) {
			return null
		}
		if (MapArrayBuffer[packetID]) {
			let array: IArrayBuffer = MapArrayBuffer[packetID]
			//定义取出长度
			let size = 2      /**注意 */
			if (array.readByteArray.length < size) {
				return null
			}
			//拿出来并删除原有
			let newByteArray = array.readByteArray.slice(0, size)
			array.readByteArray.splice(0, size)

			let newArray = new Uint8Array(newByteArray.length)     /**注意 */
			//单独装进缓冲区
			for (let index = 0; index < newArray.length; index++) {
				newArray[index] = newByteArray[index]
			}
			let newArrayBuffer = newArray.buffer.slice(0, newArray.byteLength)
			let newDataView = new DataView(newArrayBuffer)
			//返回值
			return newDataView.getUint16(0, isLittleEndian != null ? isLittleEndian : array.isLittleEndian)   /**注意 */
		}
		return null
	}
	/**
	 * 向指定数据包开始读取1字节int类型的数据(有符号)
	 * @param packetID 
	 * @param value 
	 */
	readByte(packetID: string = null): number | null {
		if (!packetID) {
			return null
		}
		if (MapArrayBuffer[packetID]) {
			let array: IArrayBuffer = MapArrayBuffer[packetID]
			//定义取出长度
			let size = 1     /**注意 */
			if (array.readByteArray.length < size) {
				return null
			}
			//拿出来并删除原有
			let newByteArray = array.readByteArray.slice(0, size)
			array.readByteArray.splice(0, size)

			let newArray = new Int8Array(newByteArray.length)     /**注意 */
			//单独装进缓冲区
			for (let index = 0; index < newArray.length; index++) {
				newArray[index] = newByteArray[index]
			}
			let newArrayBuffer = newArray.buffer.slice(0, newArray.byteLength)
			let newDataView = new DataView(newArrayBuffer)
			//返回值
			return newDataView.getInt8(0)   /**注意 */
		}
		return null
	}
	/**
	 * 向指定数据包开始读取1字节int类型的数据(无符号)
	 * @param packetID 
	 * @param value 
	 */
	readUByte(packetID: string = null): number | null {
		if (!packetID) {
			return null
		}
		if (MapArrayBuffer[packetID]) {
			let array: IArrayBuffer = MapArrayBuffer[packetID]
			//定义取出长度
			let size = 1      /**注意 */
			if (array.readByteArray.length < size) {
				return null
			}
			//拿出来并删除原有
			let newByteArray = array.readByteArray.slice(0, size)
			array.readByteArray.splice(0, size)

			let newArray = new Uint8Array(newByteArray.length)     /**注意 */
			//单独装进缓冲区
			for (let index = 0; index < newArray.length; index++) {
				newArray[index] = newByteArray[index]
			}
			let newArrayBuffer = newArray.buffer.slice(0, newArray.byteLength)
			let newDataView = new DataView(newArrayBuffer)
			//返回值
			return newDataView.getUint8(0)   /**注意 */
		}
		return null
	}

	/**
	 * 向指定数据包读取字符串（无符号 UTF8编码） 头部有4字节的长度 尾部有\0（1字节）结尾
	 * @param packetID 
	 * @param isLittleEndian 是否以小端的方式读取 
	 * @param str 
	 */
	readString(packetID: string = null, isLittleEndian: boolean | null = null): string | null {
		if (!packetID) {
			return null
		}
		if (MapArrayBuffer[packetID]) {
			let array: IArrayBuffer = MapArrayBuffer[packetID]

			//先读取缓存包定义的正文长度
			let readDataView = this.readPacket(packetID, true)
			if (!readDataView || readDataView.byteLength == 0) {
				return null
			}
			//开头定义的字符串长度
			let size = readDataView.getInt32(0, isLittleEndian != null ? isLittleEndian : array.isLittleEndian)  /**注意 */
			//头部字节长度
			let startHeatLength = 4
			//末尾0的长度
			let zeroLength = 1

			if (!size || (readDataView.byteLength - startHeatLength) < size) {
				console.log(`Error：readString 读取的正文长度不存在 或 超出缓冲区长度，读取长度为:${size} 实际长度为:${readDataView.byteLength - startHeatLength}`)
				return null
			}

			//实际正文长度
			let commonLength = size - 1
			if (commonLength == 0) {//这是一个空包
				//删除取出的数据 5字节 正文+\0
				array.readByteArray.splice(0, startHeatLength + zeroLength)
				return ""
			} else if (commonLength < 0) {
				console.log(`Error：readString 读取的正文长度为负，正文长度数据有误 或 不是正文，读取长度为:${size} 实际长度为:${readDataView.byteLength - startHeatLength}`)
				return null
			} else {
				array.readByteArray.splice(0, startHeatLength + size)
			}

			//单独装进缓冲区
			let commonArrayBuffer = readDataView.buffer.slice(startHeatLength, startHeatLength + commonLength)
			let commonByteArray = new Uint8Array(commonArrayBuffer)   /**注意 */

			let result = []; // byte队列
			for (let index = 0; index < commonByteArray.byteLength; index++) {
				result.push(commonByteArray[index])
			}
			//拼接的字符串
			let strData = Encrypt.bytesToString(result);

			return strData
		}
		return null
	}

	/**
	 * 向指定数据包读取字符串（无符号 非UTF8编码） 头部有4字节的长度
	 * @param packetID 
	 * @param isLittleEndian 是否以小端的方式读取 
	 * @param str 
	 */
	readStringNoZeroEnd(packetID: string = null, isLittleEndian: boolean | null = null): string | null {
		if (!packetID) {
			return null
		}
		if (MapArrayBuffer[packetID]) {
			let array: IArrayBuffer = MapArrayBuffer[packetID]

			//先读取缓存包定义的正文长度
			let readDataView = this.readPacket(packetID, true)
			if (!readDataView || readDataView.byteLength == 0) {
				return null
			}
			//开头定义的字符串长度
			let size = readDataView.getInt32(0, isLittleEndian != null ? isLittleEndian : array.isLittleEndian)  /**注意 */
			//头部字节长度
			let startHeatLength = 4
			//末尾0的长度
			let zeroLength = 0

			if (!size || (readDataView.byteLength - startHeatLength) < size) {
				console.log(`Error：readString 读取的正文长度不存在 或 超出缓冲区长度，读取长度为:${size} 实际长度为:${readDataView.byteLength - startHeatLength}`)
				return null
			}

			//实际正文长度
			let commonLength = size
			if (commonLength == 0) {//这是一个空包
				//删除取出的数据 5字节 正文+\0
				array.readByteArray.splice(0, startHeatLength + zeroLength)
				return ""
			} else if (commonLength < 0) {
				console.log(`Error：readString 读取的正文长度为负，正文长度数据有误 或 不是正文，读取长度为:${size} 实际长度为:${readDataView.byteLength - startHeatLength}`)
				return null
			} else {
				array.readByteArray.splice(0, startHeatLength + size)
			}

			//单独装进缓冲区
			let commonArrayBuffer = readDataView.buffer.slice(startHeatLength, startHeatLength + commonLength)
			let commonByteArray = new Uint8Array(commonArrayBuffer)   /**注意 */

			let result = []; // byte队列
			for (let index = 0; index < commonByteArray.byteLength; index++) {
				result.push(commonByteArray[index])
			}
			//拼接的字符串
			let strData = Encrypt.bytesToString(result, false);
			return strData
		}
		return null
	}
}

export const WebSocketBuffer = { Write: WriteBuffer.instance(), Read: ReadBuffer.instance(), isLocalLittleEndian: checkLocalLittleEndian() }