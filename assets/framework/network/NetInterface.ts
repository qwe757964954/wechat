
/*
 * 网络相关接口定义
 */
export type NetData = (string | ArrayBufferLike | Blob | ArrayBufferView);
export type NetCallFunc = (data: any) => void;

/** socket消息数据接口 */
export interface INetMessage {
    cmd: any;
    body?: any;
    timeout?: number;
    isStream?: boolean;
    host?: string;
    /** 用于做标识 resp会传递回来 */
    code?: any;

}

/** php消息数据接口 */
export interface INetPHPMessage {
    cmd?: number,
    mid?: any,
    compressType?: number, //1 压缩 0未压缩
    body?: any             //处理之后的数据
}

/** 命令通用绑定接口 */
export interface ICMD_BINDING_HEAD {
    /** 请求头 */
    reqHead: number;
    /** 响应头 */
    respHead: number;
    /** 动作名 */
    action: string;
    /** 返回时绑定的事件 */
    respEvent?: string;
    /** 读还是写 只有头部命令有 0读 1写*/
    pbType?: number;
    /** 解析函数 只有头部命令有 */
    pbFunc?: Function;
}

/** 请求协议 */
export interface IRequestProtocol {
    /**头部命令 */
    headCmd: number;
    /** 动作名 */
    action?: string;
    /** 回调方法名 */
    callback?: string;
    /** 是否压缩 */
    isCompress?: boolean;
    /** 消息内容 */
    data?: any;
    /** 加密成的buffer data */
    buffer?: any;
    /**超时时间 毫秒*/
    outtime?: number;
}

/** 服务端下发的相应协议 */
export interface IResponseProtocol {
    /**头部命令 */
    headCmd: number;
    /** 动作名 */
    action?: string;
    /** 消息内容 */
    data?: any;
    /** 加密成的buffer data 服务端下发*/
    buffer: NetData;
    /** 请求的原数据 */
    reqData?: any;
}

/** 回调对象 */
export interface CallbackObject {
    target: any;                // 回调对象，不为null时调用target.callback(xxx)
    callback: NetCallFunc;      // 回调函数
}

/** 请求对象 */
export interface RequestObject {
    reqArray: IRequestProtocol;                   // 请求的数据队列
}

/** 协议辅助接口 */
export interface IProtocolHelper {
    PacketSize: number;                                                 //最大包长                        
    getHeadlen(): number;                                               // 返回包头长度
    getHearbeatPackage(): IRequestProtocol | null;                      // 返回一个心跳包
    getPackageLen(msg: NetData): number;                                // 返回整个包的长度
    checkRequestPackage(msg: NetData): boolean;                         // 检查请求包数据是否合法（避免客户端报错崩溃）
    checkResponsePackage(msg: NetData): boolean;                        // 检查响应包数据是否合法（避免客户端报错崩溃）
    handlerRequestPackage(reqProtocol: IRequestProtocol): boolean;      // 处理请求包数据
    handlerResponsePackage(msg: NetData): IResponseProtocol | null;     // 处理响应包数据
}

/** 默认字符串协议对象 */
export class DefStringProtocol implements IProtocolHelper {
    PacketSize: number = 0;

    getHeadlen(): number {
        return 0;
    }
    getHearbeatPackage(): IRequestProtocol | null {
        return null;
    }
    getPackageLen(msg: NetData): number {
        return msg.toString().length;
    }
    checkRequestPackage(msg: NetData): boolean {
        return true;
    }
    checkResponsePackage(msg: NetData): boolean {
        return true;
    }

    handlerResponsePackage(msg: NetData): IResponseProtocol | null {
        return null
    }

    handlerRequestPackage(reqProtocol: IRequestProtocol): boolean {
        return true;
    }

    isLittleEndian(): boolean {
        return false;
    }
}

export type SocketFunc = (event: any) => void;
export type MessageFunc = (msg: NetData) => void;


/** 网络提示接口 */
export interface INetworkTips {
    connectTips(isShow: boolean): void;
    reconnectTips(isShow: boolean): void;
    requestTips(isShow: boolean): void;
    responseErrorCode(code: number): void;
}