import { Label, Node, UITransform, _decorator } from "cc";
import { SystemConf } from "../../config/GameConfig";
import { BaseComponent } from "./BaseComponent";

const { ccclass, property, menu } = _decorator;

@ccclass('ToastComponent')
//方便编辑器识别的菜单项目
@menu('vc/ToastComponent')

export class ToastComponent extends BaseComponent {
    @property({ tooltip: "吐司根节点", type: Node })
    private toastRoot: Node | null = null;

    @property({ tooltip: "吐司背景", type: Node })
    private lab_Bg: Node | null = null;

    @property({ tooltip: "吐司文本内容", type: Label })
    private lab_content: Label | null = null;

    private _overWidth = 40;

    private _isLoad = false;
    /**
     * 吐司附加参数
     *  { 
     *      content: null, 正文内容 string
     *  }
     */
    private _toastParam: { content: null } = null;
    onLoad() {
        
        this._isLoad = true;
        this.updateTxt(this._toastParam ? this._toastParam["content"] : "");
        this.updateView();
    }

    private updateTxt(str = "") {
        if (this.lab_content) {
            this.lab_content.string = String(str);
            console.log("显示吐司===>content:", str)
        }
    }
    private updateView() {
        let lblWidth = this.lab_content.getComponent(UITransform).width;
        let bgWidth = this.lab_Bg.getComponent(UITransform).width;
        if (lblWidth >= bgWidth) {
            let maxWidth = lblWidth + this._overWidth;
            if (maxWidth > SystemConf.DEV_SIZE.width) {
                maxWidth = SystemConf.DEV_SIZE.width;
            }
            this.lab_Bg.getComponent(UITransform).width = maxWidth;
        }
    }
    /**
     * 显示操作
     * @param param 文本
     */
    public toast(param: any) {
        this._toastParam = param;
        if (!this._isLoad) {
            return;
        }
        this.updateTxt(this._toastParam ? this._toastParam["content"] : "");

        this.updateView();
    }

}