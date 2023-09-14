/**
 * Name = LayerPopup
 * URL = db://assets/framework/layer/LayerPopup.ts
 * Time = Thu Apr 14 2022 12:03:00 GMT+0800 (中国标准时间)
 * Author = xueya
 * Pop弹窗
 */
import { BlockInputEvents, Color, EventTouch, ImageAsset, Layers, Node, Sprite, SpriteFrame, Texture2D, Widget } from "cc";
import { inf_PopViewParams, inf_UIConfig, inf_ViewParams } from "../InterfaceDefines";
import { DelegateComponent } from "./DelegateComponent";
import { LayerUI } from "./LayerUI";

/*
 * Popup层，调用add显示，可以显示暗色背景，弹框参数可以查看PopViewParams
 * 允许同时弹出多个不同资源文件的窗口(同一个则禁止弹出)
 */
export class LayerPopUp extends LayerUI {
    protected black!: BlockInputEvents;

    constructor(name: string) {
        super(name);
    }

    protected init() {
        super.init();
        //背景
        this.layer = Layers.Enum.UI_2D;
        //防穿透
        this.black = this.getComponent(BlockInputEvents);
        if (!this.black) {
            this.black = this.addComponent(BlockInputEvents);
        }
        this.black.enabled = false;
        this.reloadMaskSprite();
        this.regMaskTouch();
    }
    /** 重新加载maskNode蒙版(子节点) */
    protected reloadMaskSprite(color:Color = new Color(0, 0, 0, 150)) {
        let width = 100;
        let height = 100;

        let count = width * height * 4;
        let data: any = new Uint8Array(count);
        for (var j = 0; j < count; j += 4) {
            data[j] = color.r // r
            data[j + 1] = color.g // g
            data[j + 2] = color.b // b
            data[j + 3] = color.a // a
        }
        let imageAsset = new ImageAsset();
        imageAsset.reset({
            _data: data,
            _compressed: false,
            width: width,
            height: height,
            format: Texture2D.PixelFormat.RGBA8888
        });

        let texture = new Texture2D();
        texture.reset({
            width: width,
            height: height,
            format: Texture2D.PixelFormat.RGBA8888
        })
        texture.image = imageAsset;

        let spriteFrame = new SpriteFrame();
        spriteFrame.texture = texture;
        //需要禁用其纹理的 packable 选项 不参与自动合图
        spriteFrame.packable = false;
        //节点
        let node = this._maskNode.getChildByName("Sprite");
        let sprite: Sprite = null;
        if (!node) {
            node = this.create_2DNode("Sprite");
            let w: Widget = node.addComponent(Widget);
            w.isAlignLeft = w.isAlignRight = w.isAlignTop = w.isAlignBottom = true;
            w.left = w.right = w.top = w.bottom = 0;
            w.alignMode = 2;
            w.enabled = true;

            sprite = node.addComponent(Sprite);
            sprite.enabled = true;

            this._maskNode.addChild(node);
        } else {
            sprite = node.getComponent(Sprite);
        }
        sprite.trim = true;
        sprite.sizeMode = 0;
        sprite.type = 0;
        sprite.spriteFrame = spriteFrame;

    }

    /** 注册遮罩层的点击事件 */
    protected regMaskTouch() {
        this._maskNode.on(Node.EventType.TOUCH_END, this.onTouchMaskEnd, this);
    }
    /** 遮罩层的点击事件 */
    protected onTouchMaskEnd(event: EventTouch) {
        if (this.children.length >= 2) {
            let topChild = this.children[this.children.length - 1];
            if (topChild && topChild.active == true && topChild.isValid == true) {
                let delegateComponent = topChild.getComponent(DelegateComponent);
                if (delegateComponent) {
                    let viewParams: inf_ViewParams = delegateComponent.viewParams;
                    if (viewParams && viewParams.isClickSpanceClose == true) {
                        topChild.destroy();
                    }
                }
            }
        }
    }
    /**
     * 添加一个预制件节点到PopUp层容器中，该方法将返回一个唯一uuid来标识该操作节点
     * @param prefabPath 预制件路径
     * @param params     传给组件onAdded、onRemoved方法的参数。
     * @param popParams  弹出界面的设置定义，详情见PopViewParams
     * @param isClickSpanceClose 是否点击自动关闭 默认 false 不关闭
     * @param isAutoRecover 是否自动释放加载的资源 默认false不释放
     */
    add(config: inf_UIConfig, params: any, popParams?: inf_PopViewParams, isClickSpanceClose?: boolean, isAutoRecover?: boolean): string {
        this.black.enabled = true;
        return super.add(config, params, popParams, isClickSpanceClose, isAutoRecover);
    }
    /** 更新遮罩层点击状态 */
    protected updateMaskState() {
        super.updateMaskState()
        if (this.isValid == false || !this._maskNode) {
            return;
        }
        this.black.enabled = this._maskNode.active;
    }

    /**
     * 根据预制体路径移除
     * @param prefabPath 预制体路径
     * @param isDestroy 是否销毁
     */
    remove(prefabPath: string, isDestroy: boolean): void {
        super.remove(prefabPath, isDestroy);
        if (this.isValid == false) {
            return
        }
        this.black.enabled = false;
    }
    /**
     * 根据预制体唯一UUID移除
     * @param prefabPath 预制体路径
     * @param isDestroy 是否销毁
     */
    removeByUuid(prefabPath: string, isDestroy: boolean): void {
        super.removeByUuid(prefabPath, isDestroy);
        if (this.isValid == false) {
            return
        }
        this.black.enabled = false;
    }

    /**
     * 执行销毁,不发送通知
     */
    toDestoryNotNotify() {
        if (this._maskNode && this._maskNode.isValid == true) {
            this._maskNode.off(Node.EventType.TOUCH_END, this.onTouchMaskEnd, this);
        }
        super.toDestoryNotNotify();
        if (this.isValid == false) {
            return
        }
        this.init();
        this.regMaskTouch();
    }
    clear(isDestroy: boolean) {
        super.clear(isDestroy)
        if (this.isValid == false) {
            return
        }
        this.black.enabled = false;
        this.active = false;
    }
}