/**
 * Name = RoundServer
 * URL = db://assets/package/game/server/RoundServer.ts
 * Time = Mon Jul 24 2023 19:26:51 GMT+0800 (中国标准时间)
 * Author = xueya
 * 局游戏Server
 */

import { BaseControll } from "../../../../framework/vc/BaseController";

export class RoundServer extends BaseControll {
	private static _instance = null;
	public static get instance(): RoundServer {
		if (!this._instance || this._instance == null) {
			this._instance = new RoundServer("RoundServer");
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

