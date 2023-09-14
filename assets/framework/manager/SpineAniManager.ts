import { assetManager, error, Node, sp, Vec3, _decorator } from 'cc';
import { AppEvent } from '../../config/AppEvent';
import { inf_SpineAniCreate, inf_UIConfig } from '../InterfaceDefines';
import { LayerManager } from '../layer/LayerManager';
import { Utils } from '../Utils';
import { BaseControll } from '../vc/BaseController';
const { ccclass } = _decorator;

/**
 * Name = SpineAniManager
 * URL = db://assets/framework/manager/SpineAniManager.ts
 * Time = Tue Sep 20 2022 14:20:23 GMT+0800 (中国标准时间)
 * Author = Tomoe
 *
 * Life: onLoad-->onEnable->start->update->lateUpdate->onDisable->onDestroy
 */

@ccclass('SpineAniManager')
export class SpineAniManager extends BaseControll {

	private static _instance: SpineAniManager;
	public static getInstance(): SpineAniManager {
		if (!this._instance || this._instance == null) {
			this._instance = new SpineAniManager("SpineAniManager");
		}
		return this._instance;
	}
	/** 骨骼动画资源映射 */
	private _skinAniMapping = {};
	/** 当前播放的动画节点队列 */
	static AniNodeMap: Map<string, Node> = new Map();

	public static init(): SpineAniManager {
		if (this._instance) {
			this._instance.clear();
		}
		this._instance = null
		SpineAniManager.getInstance();
		return
	}

	/** 初始化模块事件 */
	protected onInitModuleEvent() {
		//播放动画
		this.addModelListener(AppEvent.SYS_ANI_PLAY, this.startPlayAni);
		//停止播放动画
		this.addModelListener(AppEvent.SYS_ANI_STOP, this.stopPlayAni);
	}
	/**
	 * 加载骨骼动画目录
	 * @param bundle 包名
	 * @param dirPath 根目录文件夹名
	 * @param upFunc 进度更新
	 * @param cb 完成回调
	 */
	public preLoadSkinAniDir(bundle: string, dirPath: string, upFunc: Function = null, cb: Function = null) {
		if (dirPath == null || dirPath == "") {
			return;
		}
		let filePathList = String(dirPath).split("/");
		//包名|根目录|文件名 or 包名|文件名
		let preKey = bundle;
		if (filePathList.length > 1) {
			dirPath = filePathList[0];
			preKey = preKey + "|" + dirPath;
		}


		const self = this;

		// 自动加载bundle
		assetManager.loadBundle(bundle, (err, bundle) => {
			if (err) {
				self.print("加载包名出错", err);
				if (cb) {
					cb(err, bundle);
				}
				return;
			}
			bundle.loadDir(dirPath, sp.SkeletonData,
				(finished: number, total: number, item) => {
					if (upFunc) {
						upFunc(finished, total, item);
					}
				},
				(err, data: any) => {
					if (err) {
						self.print(err);
						if (cb) {
							cb(err, data);
						}
						return;
					}
					for (let i = 0; i < data.length; i++) {
						if (data[i]["_name"] != null) {
							let fileName = data[i]["_name"];//文件名
							let keyName = preKey + "|" + fileName;
							self._skinAniMapping[keyName] = data[i];
						}
					}
					if (cb) {
						cb(null, data);
					}
				});
		})
	}

	/**
	 * 批量预加载骨骼动画目录
	 * @param list inf_UIConfig的Array集合
	 * @param cb 根目录文件夹名
	 */
	public preLoadSkinAniDirList(list: Array<inf_UIConfig>, updateFunc: Function = null, cb: Function = null) {
		if (!list || list?.length <= 0) {
			return;
		}
		// this.print("开始预加载", list)
		for (let i = 0; i < list.length; i++) {
			let resConf: inf_UIConfig = list[i];
			if (Utils.isNotNull(resConf.bundle, resConf.prefab)) {
				this.preLoadSkinAniDir(resConf.bundle, resConf.prefab, updateFunc, cb);
			}
		}
	}

	/** 播放动画 */
	private startPlayAni(event, param: inf_SpineAniCreate) {
		if (!param || !param.resConf || !param.aniName) {
			return;
		};
		if (param.isLoop == null) {
			param.isLoop = false;
		}
		if (param.isPremult == null) {
			param.isPremult = false;
		}
		if (param.toPos == null) {
			param.toPos = new Vec3(0, 0, 0);
		}
		if (param.trackIndex == null) {
			param.trackIndex = 0;
		}
		if (!param.parentNode) {
			param.parentNode = LayerManager.AnimNode;
		}
		this.setSpineAni(
			param.parentNode,
			param.resConf,
			param.trackIndex,
			param.aniName,
			param.isLoop,
			param.isPremult,
			param.skin,
			param.toPos,
			param.callStartFunc,
			param.callEndFunc,
			param.oneLoopEndcallFunc,
			param.processCallFunc,
			param.frameNum
		);
	}
	/** 停止动画 */
	private stopPlayAni(event, param: inf_SpineAniCreate) {
		if (!param || !param.resConf || !param.aniName) {
			return;
		};
		let key = param.resConf.bundle + "|" + param.resConf.path + "|" + param.aniName;
		let aniNode = this.getSpineNode(key);
		if (!aniNode || aniNode.isValid == false) {
			SpineAniManager.AniNodeMap.set(key, null);
			return;
		}
		if (aniNode.parent != param.parentNode) {
			return;
		}
		if (aniNode.isValid == true) {
			aniNode.destroy();
		}
		SpineAniManager.AniNodeMap.set(key, null);
	}
	/** 获取已添加动画节点 */
	public getSpineNode(key: string): Node | null {
		if (key && key != null) {
			let node = SpineAniManager.AniNodeMap.get(key);
			return node;
		}
		return null
	}
	/** 移除已添加动画节点 */
	public removeSpineNode(aniNode: Node) {
		let key = null;
		if (aniNode && aniNode["Anikey"]) {
			key = aniNode["Anikey"];
			if (aniNode.isValid == true) {
				aniNode.destroy();
			}
			SpineAniManager.AniNodeMap.set(key, null);
		}
	}


	/**
	 * 设置动画节点
	 * @param aniNode 要添加的父节点
	 * @param resData {bundle:包名 path:路径}
	 * @param trackIndex {播放的帧位置}
	 * @param name 动画名
	 * @param loop 是否循环 默认 false 不循环
	 * @param premultipliedAlpha 是否预乘 默认 false 不预乘
	 * @param skin 皮肤
	 * @param pos Vec3类型 添加的位置
	 * @param startCallFunc Function 开始播放的回调函数
	 * @param endCallFunc Function 结束的回调函数
	 * @param oneLoopEndCallFunc 一次循环结束的回调函数
	 * @param processCallFunc 执行过程中的动作监听
	 * @param frameNum 帧刷
	 */
	public setSpineAni(aniNode: Node, resData, trackIndex: number, name: string, loop: boolean = false, premultipliedAlpha: boolean = false, skin: string = null, pos: Vec3 = null, startCallFunc: Function = null, endCallFunc: Function = null, oneLoopEndCallFunc: Function = null, processCallFunc: Function = null, frameNum: number = null): Node {
		let key = resData.bundle + "|" + resData.path + "|" + name;
		if (!aniNode || aniNode.isValid == false) {
			error("设置动画节点 节点不存在或已销毁 资源Key = " + key)
			return;
		}
		let oldAniNode = aniNode.getChildByName(key);
		if (oldAniNode) {
			oldAniNode.destroy();
		}
		let node: Node = Utils.create_2DNode(key);
		node.addComponent(sp.Skeleton);
		this.setAniData(node, resData, trackIndex, name, loop, premultipliedAlpha, skin, startCallFunc, endCallFunc, oneLoopEndCallFunc, processCallFunc, frameNum)
		if (pos) {
			node.position = new Vec3(pos.x, pos.y, pos.z);
		}
		aniNode.addChild(node);
		//标识
		node["Anikey"] = key;
		SpineAniManager.AniNodeMap.set(key, node);
		return node;
	}

	//动画播放配置
	private setAniData(node: Node, resData, trackIndex: number, name: string, loop: boolean, premultipliedAlpha: boolean, skin: string = null, startCallFunc: Function = null, endCallFunc: Function = null, oneLoopEndCallFunc: Function = null, processCallFunc: Function = null, frameNum: number = null) {
		let filePathName = Utils.string_splitFileName(resData.path);
		let filePathList = String(resData.path).split("/");

		//包名|根目录|文件名 or 包名|文件名
		let key = resData.bundle;
		if (filePathList.length > 1) {
			key = key + "|" + filePathList[0] + "|" + filePathName;
		} else {
			key = key + "|" + filePathName;
		}

		let skinData = this._skinAniMapping[key];

		const self = this;
		let isEndCallback = false;
		let doCallback = function () {
			skinData = self._skinAniMapping[key];
			if (!skinData) {
				error(`"SpineAniManager:骨骼动画加载失败 找不到该文件key = ${key} path = ${resData.path}`);
				return;
			}
			if (!node || node.isValid == false) {
				return;
			}
			let skeleton = node.getComponent(sp.Skeleton);
			skeleton.skeletonData = skinData;
			if (skin) {
				skeleton.setSkin(skin);
			}
			//设置开始播放的事件
			skeleton.setStartListener((trackEntry: sp.spine.TrackEntry) => {
				if (startCallFunc) {
					startCallFunc(trackEntry, skeleton);
				}
			});
			//设置播放完成的事件(对于非循环播放动画 由于无播放完成事件 特殊处理)
			skeleton.setEndListener((trackEntry: sp.spine.TrackEntry) => {
				SpineAniManager.getInstance().removeSpineNode(node);
				if (endCallFunc && isEndCallback == false) {
					isEndCallback = true;
					endCallFunc(trackEntry, skeleton);
				}
			});
			//设置动画完成一次循环后结束的监听
			skeleton.setCompleteListener((trackEntry: sp.spine.TrackEntry) => {
				if (loop == false) {
					SpineAniManager.getInstance().removeSpineNode(node);
					if (oneLoopEndCallFunc) {
						oneLoopEndCallFunc(trackEntry, skeleton);
					}
					if (endCallFunc && isEndCallback == false) {
						isEndCallback = true;
						endCallFunc(trackEntry, skeleton);
					}
				} else {
					if (oneLoopEndCallFunc) {
						oneLoopEndCallFunc(trackEntry, skeleton);
					}
				}
			})
			//设置动画播放过程中的动作监听
			skeleton.setEventListener((trackEntry: sp.spine.TrackEntry, ev: sp.spine.Event | number) => {
				if (processCallFunc) {
					processCallFunc(trackEntry, ev, skeleton);
				}
			})

			//修改帧更新
			if (frameNum != null && Number(frameNum) > 0) {
				if (!skeleton["realUpdateAnimation"]) {
					skeleton["realUpdateAnimation"] = skeleton.updateAnimation;
				}
				let _interval = 0;
				let _max_frame = frameNum;
				skeleton.updateAnimation = function (dt) {
					if ((_interval + dt) < (1 / _max_frame)) {
						_interval = _interval + dt;
						return;
					}
					_interval = 0;
					skeleton["realUpdateAnimation"](dt);
				}
			}
			skeleton.premultipliedAlpha = premultipliedAlpha;
			skeleton.setAnimation(trackIndex, name, loop);
		}
		if (!skinData) {
			this.print("==============再次加载============")
			this.preLoadSkinAniDir(resData.bundle, resData.path, null, () => {
				doCallback();
			})
		} else {
			doCallback();
		}
	}

}