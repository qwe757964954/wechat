
import { EventTouch, Label, Node, _decorator } from 'cc';
import { Utils } from '../../../../../framework/Utils';
import { BaseComponent } from '../../../../../framework/vc/BaseComponent';
import { RoomMgr } from '../../../cache/RoomMgr';
const { ccclass, property } = _decorator;

/**
 * Name = Remain
 * URL = db://assets/package/game/module/bugang/src/Remain.ts
 * Time = Wed Aug 02 2023 20:46:16 GMT+0800 (中国标准时间)
 * Author = qwe757964
 *
 * Life: onLoad-->onInitModuleEvent-->onEnable->start->update->lateUpdate->onDisable->onDestroy
 * 
 */

@ccclass('Remain')
export class Remain extends BaseComponent {
	@property(Node)
	public rootTimeNode: Node | null = null;
	@property(Node)
	public rootRemainCardNode: Node | null = null;

	@property(Label)
	public timeLabel: Label | null = null;
	@property(Label)
	public remainCardLabel: Label | null = null;

	/** 时间更新句柄 */
	_handlerTimeUpdate = null;

	/** override 初始化模块事件 */
	protected onInitModuleEvent() {

	};

	onLoad() {
		this.initView();
		this.startUpdateTime();
	};

	/** 开始更新时间 */
	startUpdateTime() {
		if (this._handlerTimeUpdate) {
			return;
		}
		this.stopScheduler(this._handlerTimeUpdate);
		this._handlerTimeUpdate = null;
		this.updateTime();
		this.addScheduler(1, Utils.handler(this, this.updateTime));
	}

	//更新时间
	updateTime() {
		this.timeLabel.string = this.getNowTime();
	}

	//获取时间
	getNowTime() {
		var date = new Date();
		//年 getFullYear()：四位数字返回年份
		var year = date.getFullYear();  //getFullYear()代替getYear()
		//月 getMonth()：0 ~ 11
		var month = date.getMonth() + 1;
		//日 getDate()：(1 ~ 31)
		var day = date.getDate();
		//时 getHours()：(0 ~ 23)
		var hour = date.getHours();
		//分 getMinutes()： (0 ~ 59)
		var minute = date.getMinutes();
		//秒 getSeconds()：(0 ~ 59)
		var second = date.getSeconds();
		return `${hour}:${this.addZero(minute)}`;
	}
	addZero(s: number) {
		return s < 10 ? ('0' + s) : s;
	}

	public updateRemainCardsCount() {
		this.remainCardLabel.string = `${RoomMgr.getInstance().remainCardsCount}`;
	}

	start() {

	};

	/** 初始化界面 */
	initView() {
		this.rootTimeNode.active = true;
		this.rootRemainCardNode.active = true;
		this.remainCardLabel.string = "0";
		this.timeLabel.string = "00:00";
	};

	/** 更新界面 */
	updateView() {

	};

	/** 点击了关闭 */
	onClickClose(event: EventTouch) {

	};

	//销毁
	onDestroy() {

	};

}

