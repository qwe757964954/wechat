/**
 * Name = SettleServer
 * URL = db://assets/package/game/server/SettleServer.ts
 * Time = Mon Jul 24 2023 19:27:07 GMT+0800 (中国标准时间)
 * Author = xueya
 * 结算服务
 */

import { BaseControll } from "../../../../framework/vc/BaseController";

export class SettleServer extends BaseControll {
	private static _instance = null;
	public static get instance(): SettleServer {
		if (!this._instance || this._instance == null) {
			this._instance = new SettleServer("SettleServer");
		}
		return this._instance;
	}
	//实例化
	constructor(name: string = null) {
		super(name)
	};
	/**初始化添加事件绑定 */
	protected onInitModuleEvent(): void {

	}

}

