/**
 * Name = GCmdMapping
 * URL = db://assets/proj/gnet/GCmdMapping.ts
 * Time = Fri May 13 2022 14:58:45 GMT+0800 (中国标准时间)
 * Author = xueya
 * 网络命令映射
 */
import { Logger } from "../../framework/log/Logger";
import { ICMD_BINDING_HEAD } from "../../framework/network/NetInterface";
import { Utils } from "../../framework/Utils";
import { GlobalCmdBindingHead, GlobalHeadCmdBinding } from "./GlobalCMD";

class _GCmdMapping {

	//cmd-action映射
	mapCmdAction = {};
	//cmd-reqHead映射
	mapCmdReqHead = {};
	//cmd-event映射
	mapCmdEvent = {};
	//headCmd-event映射
	mapHeadCmdEvent = {};

	//新增加的命令
	_addPushCmdArrayList = {};

	private static _instance = null;
	public static get instance(): _GCmdMapping {
		if (!this._instance || this._instance == null) {
			this._instance = new _GCmdMapping();
		}
		return this._instance;
	}

	//实例化
	constructor() {

	};
	//刷新全局mapping
	refreshGloabelMapping() {
		Logger.logModel("[GCmdMapping]:refreshMapping 刷新mapping")
		for (let headCmd in GlobalHeadCmdBinding) {
			if (Object.prototype.hasOwnProperty.call(GlobalHeadCmdBinding, headCmd)) {
				let mapping: ICMD_BINDING_HEAD = GlobalHeadCmdBinding[headCmd];
				/** 序列化 方便查找 */
				this.mapHeadCmdEvent[headCmd] = mapping.respEvent
			}
		}

		for (let cmd in GlobalCmdBindingHead) {
			if (Object.prototype.hasOwnProperty.call(GlobalCmdBindingHead, cmd)) {
				let mapping: ICMD_BINDING_HEAD = GlobalCmdBindingHead[cmd];
				/** 序列化 方便查找 */
				this.mapCmdAction[cmd] = mapping.action
				this.mapCmdReqHead[cmd] = mapping.reqHead
				this.mapCmdEvent[cmd] = mapping.respEvent
			}
		}
		Utils.dump(this.mapCmdEvent)
	}
	//初始化通用映射
	initCommonMapping() {
		//cmd-action映射
		this.mapCmdAction = {};
		//cmd-reqHead映射
		this.mapCmdReqHead = {};
		//cmd-event映射
		this.mapCmdEvent = {};
		//headCmd-event映射
		this.mapHeadCmdEvent = {};

		this.refreshGloabelMapping()
	}
	//新增命令头映射
	pushHeadMapping(ArrayList) {
		if (!ArrayList) {
			return
		}
		for (let headCmd in ArrayList) {
			if (Object.prototype.hasOwnProperty.call(ArrayList, headCmd)) {
				let mapping: ICMD_BINDING_HEAD = ArrayList[headCmd];
				/** 序列化 方便查找 */
				if (mapping.respEvent != null) {
					this.mapHeadCmdEvent[headCmd] = mapping.respEvent
				}
			}
		}

	}
	//根据Cmd获取请求头
	public getReqHeadByCmd(cmd: number) {
		if (!cmd) {
			return null
		}
		return this.mapCmdReqHead[cmd]
	}

	//根据Cmd获取action
	public getActionByCmd(cmd: number) {
		if (!cmd) {
			return null
		}
		return this.mapCmdAction[cmd] || null
	}
	//根据cmd获取Event
	public getEventIDByCmd(cmd: number) {
		if (!cmd) {
			return null
		}
		return this.mapCmdEvent[cmd] || null
	}
	//根据headCmd获取Event
	public getEventIDByHeadCmd(headCmd: number) {
		if (!headCmd) {
			return null
		}
		return this.mapHeadCmdEvent[headCmd] || null
	}

}

export const GCmdMapping = _GCmdMapping.instance