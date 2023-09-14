/**
 * Name = PkgLoaderManager
 * URL = db://assets/framework/manager/PkgLoaderManager.ts
 * Time = Thu Feb 02 2023 17:52:47 GMT+0800 (中国标准时间)
 * Author = xueya
 * 分包加载控制器
 */

import { AudioClip, error, Prefab } from "cc";
import { AppEvent } from "../../config/AppEvent";
import { pbkiller } from "../crypto/pbkiller";
import { inf_PkgLoaderTaskAdd, inf_PkgLoaderTaskList } from "../InterfaceDefines";
import { CompleteCallback, ProgressCallback, resLoader } from "../loader/ResLoader";
import { Utils } from "../Utils";
import { BaseControll } from "../vc/BaseController";
import { AudioManager } from "./AudioManager";
import { EventManager } from "./EventManager";
import { SpineAniManager } from "./SpineAniManager";


/** 正在运行的任务 */
interface inf_PkgLoaderTask {
	/** 任务ID */
	taskID: any,
	/** 任务队列 */
	taskList: inf_PkgLoaderTaskList,
	/** 任务数量 */
	taskNum: number,
	/** 当前加载进度 0~100 */
	progress: number,
	/** 开始的回调 */
	startCallFunc?: Function,
	/** 更新的回调 */
	updateCallFunc?: Function,
	/** 完成的回调*/
	endCallFunc?: Function
}


export class PkgLoaderManager extends BaseControll {
	private static _instance = null;
	public static getInstance(): PkgLoaderManager {
		if (!this._instance || this._instance == null) {
			this._instance = new PkgLoaderManager("PkgLoaderManager");
		}
		return this._instance;
	}
	//实例化
	constructor(name: string) {
		super("PkgLoaderManager")
	};
	/** 模块事件 */
	protected onInitModuleEvent() {
		/** 添加一个分包加载任务 */
		this.addModelListener(AppEvent.SYS_PACKAGE_LOAD_TASK_ADD, this.addTask);
		/** 分包加载任务取消 */
		this.addModelListener(AppEvent.SYS_PACKAGE_LOAD_TASK_CANCLE, this.cancleTask);
	}
	public static init(): PkgLoaderManager {
		if (this._instance) {
			this._instance.clear();
		}
		this._instance = null
		PkgLoaderManager.getInstance();
		return
	}
	/** 已经加载的任务 */
	private _alreadyLoad = {};
	/** 当前正在加载的任务 */
	private _currowLoad: { [taskID: number]: inf_PkgLoaderTask } = {};

	/**
	 * 添加包加载任务
	 * @param param 详见inf_PkgLoaderTaskAdd
	 * @returns 
	 */
	addTask(event, param: inf_PkgLoaderTaskAdd) {
		if (!param || param.taskID == null) {
			return;
		}
		if (this._alreadyLoad[param.taskID] == true) {
			if (param.endCallFunc) {
				param.endCallFunc(param.taskID);
			}
			return;
		}
		if (this._currowLoad[param.taskID] != null) {
			return;
		}
		let task: inf_PkgLoaderTask = {
			taskID: param.taskID,
			taskList: param.taskList,
			taskNum: 0,
			progress: 0,
			startCallFunc: param.startCallFunc,
			updateCallFunc: param.updateCallFunc,
			endCallFunc: param.endCallFunc
		}
		this._currowLoad[param.taskID] = task;

		this._startLoad(param.taskID);

	}
	/** 取消一个任务 */
	cancleTask(event, taskID) {
		if (taskID != null && this._currowLoad[taskID] != null) {
			this._currowLoad[taskID] = null;
			this.print(`>>>取消加载任务:${taskID}成功！！！`)
			EventManager.dispatch(AppEvent.SYS_PACKAGE_LOAD_TASK_CANCLE_SURE, taskID);
		}
	}
	/** 开始加载 */
	private _startLoad(taskID) {
		if (!this._currowLoad[taskID]) {
			return;
		}
		let self = this;
		let taskProgress = {};

		let callback = function (pPath, progress) {
			if (!self._currowLoad[taskID]) {
				return;
			}
			if (progress == -1) {
				error("加载任务出错 包路径：" + pPath)
				return
			}
			taskProgress[pPath] = progress;

			let taskTab = self._currowLoad[taskID];
			let allCountProgress = (100 * taskTab.taskNum);
			let countAll = 0;
			for (let pPath in taskProgress) {
				let oneProgess = taskProgress[pPath];
				countAll = countAll + oneProgess;
			}
			self._currowLoad[taskID].progress = 100 * countAll / allCountProgress;
			// console.log("输出总进度:", self._currowLoad[taskID].progress);

			if (self._currowLoad[taskID].updateCallFunc) {
				self._currowLoad[taskID].updateCallFunc(taskID, self._currowLoad[taskID].progress);
			}
			if (self._currowLoad[taskID].progress == 100) {//加载完成
				self._alreadyLoad[taskID] = true;
				if (self._currowLoad[taskID].endCallFunc) {
					self._currowLoad[taskID].endCallFunc(taskID);
				}
				self._currowLoad[taskID] = null;
			}
		}
		if (this._currowLoad[taskID].taskList) {
			if (this._currowLoad[taskID].startCallFunc) {
				this._currowLoad[taskID].startCallFunc(taskID);
			}
			let isRealLoad = false;
			let oneLoad = null;
			//加载PB文件
			if (this._currowLoad[taskID].taskList.protobuf == true) {
				isRealLoad = true;
				this.__addPreLoadPB(this._currowLoad[taskID], callback);
			}
			//加载bundle
			if (this._currowLoad[taskID].taskList.package && this._currowLoad[taskID].taskList.package.length > 0) {
				for (let i = 0; i < this._currowLoad[taskID].taskList.package.length; i++) {
					oneLoad = this._currowLoad[taskID].taskList.package[i];
					if (oneLoad != null && oneLoad != "") {
						isRealLoad = true;
						this.__addBundleLoad(this._currowLoad[taskID], oneLoad, callback);
					}
				}
			}
			//加载预制体
			if (this._currowLoad[taskID].taskList.prefab && this._currowLoad[taskID].taskList.prefab.length > 0) {
				for (let i = 0; i < this._currowLoad[taskID].taskList.prefab.length; i++) {
					oneLoad = this._currowLoad[taskID].taskList.prefab[i];
					if (oneLoad && oneLoad.path != null) {
						isRealLoad = true;
						this.__addOneLoad(this._currowLoad[taskID], oneLoad.bundle, oneLoad.path, Prefab, callback);
					}
				}
			}
			//加载音乐文件
			if (this._currowLoad[taskID].taskList.audio && this._currowLoad[taskID].taskList.audio.length > 0) {
				for (let i = 0; i < this._currowLoad[taskID].taskList.audio.length; i++) {
					oneLoad = this._currowLoad[taskID].taskList.audio[i];
					if (oneLoad) {
						if ((oneLoad.path == null || oneLoad.path == "") && oneLoad.bundle != null) {//加载音乐包
							isRealLoad = true;
							this.__addPreLoadAudio(this._currowLoad[taskID], oneLoad.bundle, "", callback);
						} else if (oneLoad.path != null && oneLoad.path != "") {//加载单个音乐文件
							isRealLoad = true;
							this.__addOneLoad(this._currowLoad[taskID], oneLoad.bundle, oneLoad.path, AudioClip, callback);
						}
					}
				}
			}
			//加载spine动画
			if (this._currowLoad[taskID].taskList.spine && this._currowLoad[taskID].taskList.spine.length > 0) {
				for (let i = 0; i < this._currowLoad[taskID].taskList.spine.length; i++) {
					oneLoad = this._currowLoad[taskID].taskList.spine[i];
					if (oneLoad && oneLoad.path != null && oneLoad.bundle != null) {
						isRealLoad = true;
						this.__addPreLoadSpine(this._currowLoad[taskID], oneLoad.bundle, oneLoad.path, callback);
					}
				}
			}
			if (isRealLoad == true) {
				return;
			}
		}
		this._alreadyLoad[taskID] = true;
		if (this._currowLoad[taskID].endCallFunc) {
			this._currowLoad[taskID].endCallFunc(taskID);
		}
	}
	/** 添加一个包加载 */
	private __addBundleLoad(task: inf_PkgLoaderTask, bundle, updateCallback?: Function) {
		task.taskNum = Utils.number_valueOf(task.taskNum) + 1;

		let currowProgress = -1;

		let onComplete: CompleteCallback = (err: Error | null, data) => {
			if (err) {
				currowProgress = -1;
			} else {
				currowProgress = 100;
			}
			if (updateCallback) {
				updateCallback(bundle, currowProgress);
			}
		}
		resLoader.loadBundle(bundle, onComplete);
	}

	/** 添加一个加载 */
	private __addOneLoad(task: inf_PkgLoaderTask, bundle, path, type, updateCallback?: Function) {
		task.taskNum = Utils.number_valueOf(task.taskNum) + 1;

		let self = this;
		let currowProgress = -1;
		let onProgress: ProgressCallback = (finished: number, total: number, item) => {
			// 计算进度
			let progress = (finished / total) * 100;
			currowProgress = progress;
			if (currowProgress < 100 && updateCallback) {
				updateCallback(path, currowProgress);
			}
		}
		let onComplete: CompleteCallback = (err: Error | null, data) => {
			if (err) {
				currowProgress = -1;
			}
			if (updateCallback) {
				updateCallback(path, currowProgress);
			}
		}
		resLoader.load(bundle, path, type, onProgress, onComplete);
	}

	/** 添加音效预加载目录 */
	private __addPreLoadAudio(task: inf_PkgLoaderTask, bundle, path, updateCallback?: Function) {
		task.taskNum = Utils.number_valueOf(task.taskNum) + 1;

		let self = this;
		let currowProgress = -1;
		let tag = bundle + "|" + path;
		let onProgress: ProgressCallback = (finished: number, total: number, item) => {
			// 计算进度
			let progress = (finished / total) * 100;
			currowProgress = progress;
			if (currowProgress < 100 && updateCallback) {
				updateCallback(tag, currowProgress);
			}
		}
		let onComplete: CompleteCallback = (err: Error | null, data) => {
			if (err) {
				currowProgress = -1;
				return;
			}
			self.print("音效预加载目录完成", bundle, path);
			if (updateCallback) {
				updateCallback(tag, currowProgress);
			}
		}
		AudioManager.getInstance().preLoadAudioDir(bundle, path, onProgress, onComplete)
	}

	/** 添加Spine预加载目录 */
	private __addPreLoadSpine(task: inf_PkgLoaderTask, bundle, path, updateCallback?: Function) {
		task.taskNum = Utils.number_valueOf(task.taskNum) + 1;

		let self = this;
		let currowProgress = -1;
		let tag = bundle + "|" + path;
		let onProgress: ProgressCallback = (finished: number, total: number, item) => {
			// 计算进度
			let progress = (finished / total) * 100;
			currowProgress = progress;
			if (currowProgress < 100 && updateCallback) {
				updateCallback(tag, currowProgress);
			}
		}
		let onComplete: CompleteCallback = (err: Error | null, data) => {
			if (err) {
				self.print("Error:Spine加载出错", err, data);
				currowProgress = -1;
				return;
			}
			self.print("Spine预加载目录完成", bundle, path);
			if (updateCallback) {
				updateCallback(tag, currowProgress);
			}
		}
		SpineAniManager.getInstance().preLoadSkinAniDir(bundle, path, onProgress, onComplete)
	}

	/** 添加PB预加载目录 */
	private __addPreLoadPB(task: inf_PkgLoaderTask, updateCallback?: Function) {
		task.taskNum = Utils.number_valueOf(task.taskNum) + 1;

		let self = this;
		let currowProgress = -1;
		let tag = "pbkiller";
		let onProgress: ProgressCallback = (finished: number, total: number, item) => {
			// 计算进度
			let progress = (finished / total) * 100;
			currowProgress = progress;
			if (currowProgress < 100 && updateCallback) {
				updateCallback(tag, currowProgress);
			}
		}
		let onComplete: CompleteCallback = (err: Error | null, data) => {
			if (err) {
				currowProgress = -1;
				pbkiller.preload(onProgress, onComplete);
				return;
			}
			self.print("PB文件目录遍历完成 开始加载");
			//初始化Pb加载
			EventManager.dispatch(AppEvent.SYS_UPDATE_PROTOBUF);
			if (updateCallback) {
				updateCallback(tag, currowProgress);
			}
		}
		pbkiller.preload(onProgress, onComplete);
	}



}

