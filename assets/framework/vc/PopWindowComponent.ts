
import { EventTouch, Label, LabelComponent, Node, ScrollView, Sprite, UITransform, Vec3, _decorator } from 'cc';
import { AppEvent } from '../../config/AppEvent';
import { AppSound } from '../../config/AppSound';
import { GameTxt } from '../../config/GameTxt';
import { inf_PopWindowButton, inf_PopWindowParams } from '../InterfaceDefines';
import { EventManager } from '../manager/EventManager';
import { Utils } from '../Utils';
import { BaseComponent } from './BaseComponent';
const { ccclass, property, menu } = _decorator;

/**
 * Name = PopWindowComponent
 * Time = Wed Apr 13 2022 16:27:07 GMT+0800 (中国标准时间)
 * Author = Aby
 * Life: onLoad-->onEnable->start->update->lateUpdate->onDisable->onDestroy
 * 通用对话框
 */

@ccclass('PopWindowComponent')

//方便编辑器识别的菜单项目
@menu('vc/PopWindowComponent')


export class PopWindowComponent extends BaseComponent {

	//正文标题
	@property({ tooltip: "标题内容-文本", type: Label })
	labelTitle: Label = null!;
	//正文标题
	@property({ tooltip: "标题内容-图片", type: Sprite })
	sprTitle: Sprite = null!;

	//所有label的box
	@property({ tooltip: "所有label的box", type: Node })
	AllLabelbox: Node = null!;

	//包含只有一个label的父节点
	@property({ tooltip: "包含只有一个label的父节点", type: Node })
	OneLabelParent: Node = null!;
	//包含只有一个label的ScrollView
	@property({ tooltip: "包含只有一个label的ScrollView", type: ScrollView })
	OneScrollView: ScrollView = null!;
	//包含只有一个label的Label
	@property({ tooltip: "包含只有一个label的Label", type: Label })
	OneLabelDesc: Label = null!;

	//包含两个label的父节点
	@property({ tooltip: "包含两个label的父节点", type: Node })
	TwoLabelParent: Node = null!;
	//包含两个label的Label desc的box
	@property({ tooltip: "包含两个label的Label desc的box", type: Node })
	TwoLabelbox: Node = null!;
	//包含两个label的ScrollView
	@property({ tooltip: "包含两个label的ScrollView", type: ScrollView })
	TwoScrollView: ScrollView = null!;
	//包含两个label的Label desc
	@property({ tooltip: "包含只有一个label的Label", type: Label })
	TwoLabelDesc: Label = null!;
	//包含两个label的Label main
	@property({ tooltip: "包含只有一个label的Label", type: Label })
	TwoLabelMain: Label = null!;

	//包含两个按钮的父节点
	@property({ tooltip: "包含两个按钮的父节点", type: Node })
	TwoButtonsParent: Node = null!;

	//包含一个按钮的父节点
	@property({ tooltip: "包含一个按钮的父节点", type: Node })
	OneButtonsParent: Node = null!;

	//关闭按钮
	@property({ tooltip: "关闭按钮", type: Node })
	closeNode: Node = null!;

	//传递的参数(详见 PopWindowParams的配置)
	_params: inf_PopWindowParams;
	//点击的回调函数
	clickFuncList = {};
	//没有按钮的情况下 label额外添加的高度
	_labelAddHeight = 80;

	onLoad() {
		this._params = {
			title: "",            //窗口标题名
			txt_title: "",         //正文大标题
			txt_desc: "",          //正文内容
			dec_fontSize: 32,      //正文内容大小
			alignLeftTop: false,   //正文是否从左上开始
			notshowClose: false,   //不显示关闭按钮
			notAutoClickClose: false,   //点击后不自动关闭
			buttonsMap: [],        //按钮配置队列
			web_url: "",            //网页地址
		};
		let comp = null;
		comp = this.node.getComponent("DelegateComponent")
		if (comp) {
			this._params = comp.getParams()
		}
		this.labelTitle.node.active = false;
		this.sprTitle.node.active = false;
		this.updateView();
	};

	start() {


	};
	//更新界面
	updateView() {
		if (this._params?.title) {
			this.labelTitle.string = this._params?.title;
			this.labelTitle.node.active = true;
			this.sprTitle.node.active = false;
		} else {
			this.labelTitle.node.active = false;
			this.sprTitle.node.active = true;
		}
		//当前是选择只有一个文本框的还是有两个文本框的 或者webview
		let chooseType = 1;
		if (Utils.string_isEmpty(this._params?.web_url)) {
			if (this._params["txt_title"] != null) {
				chooseType = 2;
				this.TwoLabelMain.string = this._params.txt_title;
				this.TwoLabelMain.horizontalAlign = 1;
				this.TwoLabelMain.verticalAlign = 1;
			}
		} else {
			chooseType = 3;
		}

		//按钮配置
		let num = 1;
		let isHaveShowBtn = false;
		if (this._params?.buttonsMap) {
			switch (this._params.buttonsMap.length) {
				case 1:
					isHaveShowBtn = true;
					this.TwoButtonsParent.active = false;
					this.OneButtonsParent.active = true;

					for (let key in this._params.buttonsMap) {
						if (Object.prototype.hasOwnProperty.call(this._params.buttonsMap, key)) {
							let btnConf: inf_PopWindowButton = this._params.buttonsMap[key];
							let btn = this.OneButtonsParent.getChildByName("btn_" + num)
							if (btn) {
								btn.active = true;
								let btnLabel = btn.getChildByName("Label");
								if (btnLabel) {
									let labelComm = btnLabel.getComponent(LabelComponent)
									if (labelComm) {
										labelComm.string = btnConf?.label || GameTxt.common_btn_queding;
									}
								}
								this.clickFuncList["btn_" + num] = btnConf?.click || null;
							}
							num = num + 1;
						}
					}
					break;
				case 2:
					this.TwoButtonsParent.active = true;
					this.OneButtonsParent.active = false;
					isHaveShowBtn = true;

					for (let key in this._params.buttonsMap) {
						if (Object.prototype.hasOwnProperty.call(this._params.buttonsMap, key)) {
							let btnConf: inf_PopWindowButton = this._params.buttonsMap[key];
							let btn = this.TwoButtonsParent.getChildByName("btn_" + num)
							if (btn) {
								btn.active = true;
								let btnLabel = btn.getChildByName("Label");
								if (btnLabel) {
									let labelComm = btnLabel.getComponent(LabelComponent)
									if (labelComm) {
										labelComm.string = btnConf?.label || (num == 1 ? GameTxt.common_btn_queding : GameTxt.common_btn_cancle);
									}
								}
								this.clickFuncList["btn_" + num] = btnConf?.click || null;
							}
							num = num + 1;
						}
					}
					break;
				default:
					isHaveShowBtn = false;
					this.TwoButtonsParent.active = false;
					this.OneButtonsParent.active = false;
					break;
			}
		} else {
			isHaveShowBtn = false;
			this.TwoButtonsParent.active = false;
			this.OneButtonsParent.active = false;
		}
		//文本区域
		if (chooseType == 1) {
			this.OneLabelParent.active = true;
			this.TwoLabelParent.active = false;

			let box = this.AllLabelbox;
			let scrollview = this.OneScrollView;
			let labelDesc = this.OneLabelDesc;
			let compScrollView = scrollview.getComponent(UITransform);
			let compBox = box.getComponent(UITransform);

			if (this._params?.alignLeftTop == true) {
				labelDesc.horizontalAlign = 0;
				labelDesc.verticalAlign = 0;
			} else {
				//居中对齐
				labelDesc.horizontalAlign = 1;
				labelDesc.verticalAlign = 0;
			}

			if (this._params?.dec_fontSize) {
				labelDesc.fontSize = this._params.dec_fontSize //设置正文文字大小
			}
			labelDesc.string = this._params?.txt_desc || "";
			if (isHaveShowBtn == false) {
				compBox.height = compBox.height + this._labelAddHeight;
				box.position = new Vec3(box.position.x, box.position.y - (this._labelAddHeight / 4), box.position.z)
			}
			//如果文本超出滚动可视区域
			this.addSchedulerOnce(0, () => {
				let countNum = compScrollView.height / labelDesc.node.getComponent(UITransform).height;
				if (countNum < 1) {
					scrollview.vertical = true;
					scrollview.verticalScrollBar.node.active = true;
				} else {
					scrollview.vertical = false;
					scrollview.verticalScrollBar.node.active = false;
					if (countNum >= 2) {
						let newPosY = 0 - (compScrollView.height - labelDesc.node.getComponent(UITransform).height) / 2;
						newPosY = newPosY / 2;
						labelDesc.node.setPosition(new Vec3(labelDesc.node.position.x, newPosY, labelDesc.node.position.z))
					}
				}
			})


		} else if (chooseType == 2) {
			this.OneLabelParent.active = false;
			this.TwoLabelParent.active = true;

			let box = this.AllLabelbox;
			let scrollview = this.TwoScrollView;
			let labelDesc = this.TwoLabelDesc;
			let compScrollView = scrollview.getComponent(UITransform);
			let compBox = box.getComponent(UITransform);

			let smallBox = this.TwoLabelbox;
			let compSmallBox = smallBox.getComponent(UITransform);

			if (this._params?.alignLeftTop == true) {
				labelDesc.horizontalAlign = 0;
				labelDesc.verticalAlign = 0;
			} else {
				//居中对齐
				labelDesc.horizontalAlign = 1;
				labelDesc.verticalAlign = 0;
			}
			if (this._params?.dec_fontSize) {
				labelDesc.fontSize = this._params.dec_fontSize //设置正文文字大小
			}
			labelDesc.string = this._params?.txt_desc || "";

			if (isHaveShowBtn == false) {
				compBox.height = compBox.height + this._labelAddHeight;
				box.position = new Vec3(box.position.x, box.position.y - (this._labelAddHeight / 4), box.position.z)
			}
			//如果文本超出滚动可视区域
			this.addSchedulerOnce(0.02, () => {
				if (labelDesc.getComponent(UITransform).height > compScrollView.height) {
					scrollview.vertical = true;
					scrollview.verticalScrollBar.node.active = true;
				} else {
					scrollview.vertical = false;
					scrollview.verticalScrollBar.node.active = false;
				}
			})
		} else if (chooseType == 3) {
			this.OneLabelParent.active = false;
			this.TwoLabelParent.active = false;
		} else {
			this.OneLabelParent.active = false;
			this.TwoLabelParent.active = false;
		}
		//关闭按钮的显示与隐藏
		if (this._params?.notshowClose != null) {
			this.closeNode.active = !this._params.notshowClose;
		} else {
			this.closeNode.active = true;
		}
	}

	//销毁
	onDestroy() {

	};
	//点击了两个按钮中的左边一个
	onClickLeftByTwoButton(event: EventTouch) {
		EventManager.dispatch(AppEvent.SYS_PLAY_EFFECT, AppSound.CommClick);
		let node: Node = event.getCurrentTarget();
		if (this._params?.notAutoClickClose != true) {
			this.node.destroy();
		}
		if (this.clickFuncList[node.name]) {
			this.clickFuncList[node.name]();
		}
	}
	//点击了两个按钮中的右边一个
	onClickRightByTwoButton(event: EventTouch) {
		EventManager.dispatch(AppEvent.SYS_PLAY_EFFECT, AppSound.CommClick);
		let node: Node = event.getCurrentTarget();
		if (this._params?.notAutoClickClose != true) {
			this.node.destroy();
		}
		if (this.clickFuncList[node.name]) {
			this.clickFuncList[node.name]();
		}
	}
	//点击了一个按钮
	onClicByOneButton(event: EventTouch) {
		EventManager.dispatch(AppEvent.SYS_PLAY_EFFECT, AppSound.CommClick);
		let node: Node = event.getCurrentTarget();
		if (this._params?.notAutoClickClose != false) {
			this.node.destroy();
		}
		if (this.clickFuncList[node.name]) {
			this.clickFuncList[node.name]();
		}
	}

	//点击了关闭
	onClickClose(event: EventTouch) {
		EventManager.dispatch(AppEvent.SYS_PLAY_EFFECT, AppSound.CommClick);
		this.node.destroy();
	}


}

