
import { Node, sp, _decorator } from 'cc';
import { DelegateComponent } from '../layer/DelegateComponent';
import { BaseComponent } from './BaseComponent';
const { ccclass, property, menu } = _decorator;

/**
 * Name = NetLoadingComponent
 * URL = db://assets/framework/vc/NetLoadingComponent.ts
 * Time = Tue Sep 06 2022 12:30:05 GMT+0800 (中国标准时间)
 * Author = Tomoe
 *
 * Life: onLoad-->onEnable->start->update->lateUpdate->onDisable->onDestroy
 */

@ccclass('NetLoadingComponent')
//方便编辑器识别的菜单项目
@menu('vc/NetLoadingComponent')
export class NetLoadingComponent extends BaseComponent {

	//动画根节点
	@property({ tooltip: "spine动画加载节点", type: Node })
	private spineAniNode: Node | null = null;

	//加载动画资源组件根节点
	@property({ tooltip: "spine动画加载节点", type: sp.Skeleton })
	private spineAniSkeleton: sp.Skeleton | null = null;

	/** 超时自动关闭的时间 */
	private _countTime: number = 15;
	onLoad() {
		this.setSpineAni(0, "loading_big", true);
		this.getParamData();
		this.startCountDown();
	};
	/** 获取传递参数 */
	getParamData() {
		let comp = null;
		comp = this.node.getComponent(DelegateComponent)
		if (comp) {
			let param = comp.getParams();
			if (param && param["time"] != null) {
				this._countTime = param["time"];
			}
		}
	}
	start() {

	};
	/** 开始倒计时 */
	startCountDown() {
		let self = this;
		this.addSchedulerOnce(this._countTime, () => {
			if (self.node && self.node.isValid == true) {
				self.node.destroy();
			}
		})
	}
	//根据传入参数播放指定骨骼动画
	setSpineAni(num, name, isLoop) {
		this.spineAniSkeleton.setAnimation(num, name, isLoop)
	}
	//销毁
	onDestroy() {
	};

}

