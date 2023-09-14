/**
 * Name = BaseProtobuf
 * URL = db://assets/proj/BaseProtobuf.ts
 * Time = Tue Sep 06 2022 10:47:29 GMT+0800 (中国标准时间)
 * Author = xueya
 * pb数据的基类
 */

import { error, sys } from "cc";
import { pbkiller } from "../../framework/crypto/pbkiller";
import { inf_PBConf } from "../../framework/InterfaceDefines";
import { Logger } from "../../framework/log/Logger";
import { Utils } from "../../framework/Utils";


export class BaseProtobuf {

    _className: string = "BaseProtobuf";
    /** 当前PB的配置  */
    _PBConf: inf_PBConf = null;

    /** 当前PB类加载 */
    _PBBuilder: any = null;   //Builder

    constructor(name?: string) {
        this._className = name;
        Logger.logModel(5, `${this._className}初始化...`)
    };

    protected onInitModuleEvent() {

    }
    /** 重新加载PB */
    public reloadPB(pbConf: inf_PBConf) {
        if (!pbConf) {
            return;
        }
        Logger.logModel(5, `${this._className} reloadPB 加载PB...`)

        this._PBConf = pbConf;

        this._PBBuilder = pbkiller.loadFromFile(pbConf.FilePath, pbConf.PackageName);

        this.reloadFinish();
    }
    /** 加载完成要干的事情 */
    protected reloadFinish() {

    }
    /**
     * 发送：包装要发送的数据
     * @param pData 待序列化的数据
     * @param funcName proto中的方法名
     * @returns 返回字节数组 ArrayBuffer | null
     */

    public encodeBody(pData: object, funcName: string = null): ArrayBuffer | null {
        if (!this._PBBuilder) {
            this.error(`包装数据失败，PB未加载`)
            return null;
        }
        if (this._PBBuilder[funcName] == null || this._PBBuilder[funcName] == undefined) {
            this.error(`包装数据失败，协议函数名称：${funcName} 找不到`)
            return null;
        };
        // Logger.logModel(5,`encodeBody 原始数据:`, pData);

        let copyData = this.delEmptyBody(pData);

        // Logger.logModel(5,`encodeBody 原始数据 去除空后:`, copyData);

        let newBody = this._PBBuilder[funcName].encode(copyData, null, true);  //返回的私有属性 MessagePrototype

        // let bufferData = newBody.toArrayBuffer();
        // Logger.logModel(5,`encodeBody 编码后:`, newBody);
        // Logger.logModel(5,`encodeBody 编码后:toArrayBuffer==>`, bufferData);

        // let decodeBody = this._PBBuilder[funcName].decode(bufferData);
        // Logger.logModel(5,`encodeBody 尝试对包装数据解码:==========>`, decodeBody)
        // let resData = this.loopDecodeBody(decodeBody, funcName);
        // Logger.logModel(5,`encodeBody 尝试对包装数据解码:明文==========>`, resData)

        return newBody.toArrayBuffer();
    }

    /**
     * 接收：解析收到的数据 
     * @param bufferData ByteBuffer字节数组 或者string
     * @param funcName proto中的方法名
     * @param funcName bufferData为string时使用的解析函数(decode64、decodeJSON、decodeHex、decodeDelimited)
     * @returns object 对象
     */
    public decodeBody(bufferData: any, funcName: string = null, decodeStrFunc = "decode64"): object | null {
        if (!this._PBBuilder) {
            this.error("解析数据失败，PB未加载")
            return;
        }
        if (this._PBBuilder[funcName] == null || this._PBBuilder[funcName] == undefined) {
            this.error(`解析数据失败，协议函数名称：${funcName} 找不到`)
            return;
        }

        if (!bufferData) {
            Logger.logModel(5, "这是一个空包:", funcName, bufferData)
            return;
        }

        let pbData = null;
        let resData = null;

        if (typeof (bufferData) == 'string') {
            if (!this._PBBuilder[funcName][decodeStrFunc]) {
                Logger.logModel(5, "解析字符串类型时出错 解析函数不存在:", decodeStrFunc, funcName, bufferData)
                return;
            }
            pbData = this._PBBuilder[funcName][decodeStrFunc](bufferData);
        } else {
            try {
                pbData = this._PBBuilder[funcName].decode(bufferData, bufferData.byteLength);
            } catch (err) {
                pbData = null;
                Logger.logModel(5, "解析ByteBuffer类型时出错", funcName, bufferData);
                error(err);
            }
        }

        if (pbData) {
            // Logger.logModel(5,`decodeBody 反序列化（前） funcName = ${funcName} `, pbData,)
            // console.log("转换之后:", pbData.toRaw());
            resData = this.loopDecodeBody(pbData, funcName);
        }
        // Logger.logModel(5,`decodeBody 反序列化（后） funcName = ${funcName} `, resData, typeof (resData));
        return resData;
    }

    /** 去除空数据 */
    protected delEmptyBody(obj) {
        if (obj == null) {
            return null;
        }
        if (typeof (obj) != "object") {
            return obj;
        }
        let self = this;
        Object.keys(obj).forEach((key) => {
            let value = obj[key];
            if (value != null) {
                if (typeof (value) == 'object') {
                    self.delEmptyBody(value);
                }
            } else {
                delete obj[key];
            }
        });
        return obj;
    };

    /**
     * orrvide 数据解析 循环迭代器
     * @param body 待解析的数据
     * @param funcName 函数名
     * @param loopCount 循环迭代的深度
     * @returns body 已处理好的数据
     */
    protected loopDecodeBody(body, funcName: string = null, loopCount: number = 0) {
        loopCount = loopCount + 1;
        let _body = null;
        if (body != null && typeof (body) == "object") {
            //默认状态下:将所有 byte 转换成 string
            let newBody = body.toRawDefault(true, true);
            _body = newBody;
        } else {
            _body = body;
        }
        return _body;
    }


    //当前类日志输出
    protected print = function (...args: any[]) {
        Logger.logModel(6, `【${this._className}】`, ...args)
    }
    //当前类错误日志输出
    public error = function (...args: any[]) {
        console.error(`【${this._className}】`, ...args)
    }

    //当前类日志输出
    public dump = function (arg1, args2 = null) {
        if (!args2) {
            args2 = "打印输出 :"
        }
        Logger.logModel(5, args2)
        if (sys.platform == sys.Platform.DESKTOP_BROWSER) {
            console.table(arg1);
        } else {
            Utils.dump(arg1);
        }
    }

}