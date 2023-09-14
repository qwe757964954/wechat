import { MapEx } from "../extend/MapEx";
import { IRequestProtocol } from "./NetInterface";
import { NetConnectOptions, NetNode } from "./NetNode";

/*
 * 网络节点管理类({NetNode})
 */
export class NetManager {
    private static _instance: NetManager;
    protected _channels = new MapEx();

    public static getInstance(): NetManager {
        if (!this._instance) {
            this._instance = new NetManager();
        }
        return this._instance;
    }
    /** 添加Node，返回NetNode对象 */
    public addNetNode(): [netnode: NetNode, index: number] {
        let netnode = new NetNode()
        let index = NetManager.getInstance().setNetNode(netnode)
        return [netnode, index]
    }
    /** 添加Node，返回ChannelID */
    public setNetNode(newNode: NetNode): number {
        let key = this._channels.size
        let newKey = key + 1
        this._channels.set(newKey, newNode)
        return newKey
    }

    /** 移除Node */
    public removeNetNode(channelId: number) {
        if (channelId) {
            let netNode = this._channels.has(channelId)
            if (netNode) {
                if (netNode.dtor) {
                    netNode.dtor()
                }
                this._channels.delete(channelId)
            }
        }
    }
    /**设置回调 */
    public setNetNodeCallback(channelId: number, options: { error?: Function, connected?: Function, disconnect?: Function, connectouttime?: Function }) {
        if (channelId) {
            let netNode = this._channels.has(channelId)
            if (netNode) {
                netNode.errorConnectedCallback = options.error
                netNode.connectedCallback = options.connected
                netNode.disconnectCallback = options.disconnect
                netNode.connectOutTimeCallback = options.connectouttime
                return true
            }
        }
        return false;
    }

    /** 调用Node连接 */
    public connect(channelId: number, options: NetConnectOptions): boolean {
        if (channelId) {
            let netNode = this._channels.has(channelId)
            if (netNode) {
                return netNode.connect(options);
            }
        }
        return false;
    }

    /** 调用Node发送 */
    public send(channelId: number, reqProtocol: IRequestProtocol, force: boolean = false): number {
        if (channelId) {
            let netNode = this._channels.has(channelId)
            if (netNode) {
                return netNode!.send(reqProtocol, force);
            }
        }
        return -1;
    }

    /** 发起请求 */
    public request(channelId: number, reqProtocol: IRequestProtocol, force: boolean = false) {
        if (channelId) {
            let netNode = this._channels.has(channelId)
            if (netNode) {
                netNode.request(reqProtocol, force);
            }
        }
    }

    /** 同request，但在request之前会先判断队列中是否已有rspCmd，如有重复的则直接返回 */
    public requestUnique(channelId: number, reqProtocol: IRequestProtocol, force: boolean = false): boolean {
        if (channelId) {
            let netNode = this._channels.has(channelId)
            if (netNode) {
                return netNode.requestUnique(reqProtocol, force);
            }
        }
        return false;
    }

    /** 调用Node关闭 */
    public close(channelId: number, code?: number, reason?: string) {
        if (channelId) {
            let netNode = this._channels.has(channelId)
            if (netNode) {
                return netNode.closeSocket(code, reason);
            }
        }
    }

    //关闭所有连接
    public closeAll(code?: number, reason?: string) {
        let netNodes = this._channels.values()
        netNodes.forEach((key, index) => {
            netNodes[index].closeSocket(code, reason);
        });
    }
    /** 移除所有Node */
    public removeNetNodeAll() {
        let netNodes = this._channels.values()

        netNodes.forEach((key, index) => {
            if (netNodes[index].dtor) {
                netNodes[index].dtor()
            }
        });
        this._channels.clear()
    }
}