import { BaseControll } from "../../framework/vc/BaseController";

/**
 * Name = SelectGameServers
 * URL = db://assets/proj/servers/SelectGameServers.ts
 * Time = Wed 2023 07.25 19:03:18 GMT+0800 (中国标准时间)
 * Author = xueya
 * 选场相关服务
 */

export class SelectGameServers extends BaseControll {
    private static _instance = null;
    public static getInstance(): SelectGameServers {
        if (!this._instance || this._instance == null) {
            this._instance = new SelectGameServers("SelectGameServers");
        }
        return this._instance;
    }

    //实例化
    constructor(name: string) {
        super(name)
    };
    public static init(): SelectGameServers {
        if (this._instance) {
            this._instance.clear()
        }
        this._instance = null
        SelectGameServers.getInstance();
        return
    }

    /**初始化添加事件绑定 */
    protected onInitModuleEvent(): void {

    }
}