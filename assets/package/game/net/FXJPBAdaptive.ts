import { error } from "cc";
import { pbkiller } from "../../../framework/crypto/pbkiller";
import { inf_PBConf } from "../../../framework/InterfaceDefines";
import { BaseProtobuf } from "../../../proj/gprotobuf/BaseProtobuf";
import { FXJPBPackageID } from "./FXJCmd";
import { FXJPB } from "./FXJPB";

export class FXJPBAdaptive {
    /** 基础包配置 */
    private _pbPackageConf: { [key: number]: inf_PBConf } = {
        /** 飞小鸡解析包配置 */
        [FXJPBPackageID.Common]: { FilePath: "fxj/Common.proto", Class: FXJPB, PackageName: FXJPBPackageID.Common },
        [FXJPBPackageID.Game]: { FilePath: "fxj/Game.proto", Class: FXJPB, PackageName: FXJPBPackageID.Game },
    };

    private static _instance = null;
    public static getInstance(): FXJPBAdaptive {
        if (!this._instance || this._instance == null) {
            this._instance = new FXJPBAdaptive("FXJPBAdaptive");
        }
        return this._instance;
    }
    //当前包与解析类的映射
    private _pbPackageClassMapping: Map<string, BaseProtobuf> = new Map();
    //实例化
    constructor(name: string) {
        console.log(name + "实例化...")
    };

    /**
     * 加载PB配置文件 注意:在此之前必须保证文件都加载完毕了
     * @param info inf_PBConf
     * @returns 
     */
    private __reloadPBConf(info: inf_PBConf) {
        if (!info || !info.Class) {
            return false;
        }
        let pbClass: BaseProtobuf = new info.Class(info.PackageName);
        pbClass.reloadPB(info);
        this._pbPackageClassMapping.set(info.PackageName, pbClass);
        return true;
    }
    /** 开始加载配置的PB队列 */
    public startReloadPBList() {
        for (let pbName in this._pbPackageConf) {
            if (Object.prototype.hasOwnProperty.call(this._pbPackageConf, pbName)) {
                let conf: inf_PBConf = this._pbPackageConf[pbName];
                this.__reloadPBConf(conf);
            }
        }
    }

    /**
     * 查找PB类
     * @param pbPackageID 用来解析的类
     */
    public findPBClass(pbPackageID: any): BaseProtobuf | null {
        let res = this._pbPackageClassMapping.get(pbPackageID);
        if (!res) {
            error(`${pbPackageID} 包名未配置 或找不到文件`)
            return null;
        }
        return res;
    }

    /**
     * 封装包
     * @param pbPackage 要加密的包数据
     * @param pbPackageID 用来解析的类
     * @param funcName 用来解析的类方法
     * @returns 返回ArrayBuffer对象 ArrayBuffer | null
     */
    public encodePacket(body: any, pbPackageID: any, funcName: string = null): ArrayBuffer | null {
        if (pbPackageID == null) {
            return null;
        }

        let pbClass: BaseProtobuf = this.findPBClass(pbPackageID);

        let result: ArrayBuffer = null;
        if (pbClass) {
            result = pbClass.encodeBody(body, funcName);
        } else {
            error(`encodePacket: PB类找不到:${pbPackageID} funcName = ${funcName}`);
        }
        return result;
    }

    /**
     * 解析包
     * @param pbPackage 要解析的包数据
     * @param pbPackageID 用来解析的类
     * @param funcName 用来解析的类方法
     * @returns 返回Message对象 object | null
     */
    public decodePacket(pbPackage: any, pbPackageID: any, funcName: string = null, decodeFuncName = null): object | null {
        if (!pbPackage || pbPackageID == null) {
            return null;
        }
        let pbClass: BaseProtobuf = this.findPBClass(pbPackageID);
        let result: object = null;
        if (pbClass) {
            result = pbClass.decodeBody(pbPackage, funcName, decodeFuncName);
        } else {
            error(`decodePacket: PB类找不到:${pbPackageID}`);
        }
        return result;
    }

    /**
     * ArrayBuffer To ByteBuffer
     * @param buffer ArrayBuffer待转换的ArrayBuffer
     * @param isSymbol 是否带符号  默认false 不带
     * @returns 返回ByteBuffer
     */
    public arrayBufferToByteBuffer(buffer: ArrayBuffer, isSymbol: boolean = false): any | null {
        if (!buffer || buffer?.byteLength == null) {
            return null;
        }
        let bytes = [];
        let byteArray;
        let byteBuffer = null;
        if (isSymbol) {
            byteArray = new Int8Array(buffer);
            for (let index = 0; index < byteArray.byteLength; index++) {
                bytes[index] = byteArray[index]
            }
            byteBuffer = this.bytesToByteBuffer(bytes, isSymbol);
        } else {
            byteArray = new Uint8Array(buffer);
            for (let index = 0; index < byteArray.byteLength; index++) {
                bytes[index] = byteArray[index]
            }
            byteBuffer = this.bytesToByteBuffer(bytes, isSymbol);
        }
        return byteBuffer;
    }
    /**
     * ByteBuffer转ArrayBuffer
     * @param byteBuffer 由pbkiller.ByteBuffer创建的
     * @returns ArrayBuffer
     */
    public byteBufferToArrayBuffer(byteBuffer): ArrayBuffer | null {
        if (!byteBuffer || pbkiller.ByteBuffer.isByteBuffer(byteBuffer) == false) {
            return null;
        }
        //重置索引
        byteBuffer.clear();
        let arrayBuffer: ArrayBuffer = byteBuffer.toBuffer();
        return arrayBuffer;
    }
    /**
     * 字节数组转ByteBuffer
     * @param bytes 
     * @param isSymbol 是否带符号  默认false 不带
     * @returns 
     */
    public bytesToByteBuffer(bytes: number[], isSymbol: boolean = false): any | null {
        if (!bytes || bytes?.length == null) {
            return null;
        }
        let byteBuffer = new pbkiller.ByteBuffer(bytes.length);

        if (isSymbol) {
            for (let i = 0; i < bytes.length; i++) {
                byteBuffer.writeInt8(bytes[i], i)
            }
        } else {
            for (let i = 0; i < bytes.length; i++) {
                byteBuffer.writeUint8(bytes[i], i)
            }
        }
        //重置索引
        byteBuffer.clear();

        return byteBuffer
    }
    /**
     * ByteBuffer转字节数组
     * @param byteBuffer ByteBuffer
     * @param isSymbol 是否带符号  默认false 不带
     * @returns 
     */
    public byteBufferToBytes(byteBuffer, isSymbol: boolean = false): number[] | null {
        if (!byteBuffer || pbkiller.ByteBuffer.isByteBuffer(byteBuffer) == false) {
            return null;
        }
        let bytes = [];
        let byteArray;
        let arrayBuffer = this.byteBufferToArrayBuffer(byteBuffer);
        if (arrayBuffer) {
            if (isSymbol) {
                byteArray = new Int8Array(arrayBuffer);
                for (let index = 0; index < byteArray.byteLength; index++) {
                    bytes[index] = byteArray[index];
                }
            } else {
                byteArray = new Uint8Array(arrayBuffer);
                for (let index = 0; index < byteArray.byteLength; index++) {
                    bytes[index] = byteArray[index];
                }
            }
        }
        return bytes;
    }

}