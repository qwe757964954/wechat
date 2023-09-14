/*
 * 消息提示层，类似以前Toast
 * 请直接调用 show方法来显示提示
 */
/**
 * Name = LayerNotify
 * URL = db://assets/framework/layer/LayerNotify.ts
 * Time = Thu Apr 14 2022 12:03:00 GMT+0800 (中国标准时间)
 * Author = xueya
 * 消息提示层，类似Toast
 * 请直接调用 show方法来显示提示
 * 
 * 该层的节点对于同一个路径的预制体将一次只显示一个，删除以后会自动从队列当中取下一个相同路径的预制体，直到队列为空
 */
import { Layers, Node } from "cc";
import { inf_UICallbacks, inf_UIConfig, inf_ViewParams } from "../InterfaceDefines";
import { ToastComponent } from "../vc/ToastComponent";
import { LayerUI } from "./LayerUI";


export class LayerNotify extends LayerUI {
    private queue = {};
    private currentPrefabPath = {}; //当前显示出的预制体
    /**
     * 显示toast
     * @param config.prefab 预制件路径 config.bundle 分包包名 默认resources
     * @param param 传递的参数
     * @param callbacks 回调函数 UICallbacks定义
     * @param isAutoRecover 是否自动释放加载的资源 默认false不释放
     */
    show(config: inf_UIConfig, param: any, callbacks?: inf_UICallbacks, isAutoRecover?: boolean): void {
        let bundle = config.bundle || "resources"
        let prefabPath = config.prefab
        let uuid = this.getSoleID(prefabPath);

        var viewParams = new inf_ViewParams();
        viewParams.uuid = uuid;
        viewParams.bundle = bundle
        viewParams.prefabPath = prefabPath;
        viewParams.params = param || null;
        viewParams.callbacks = callbacks || {};
        viewParams.noticeToRoot = {
            onAdded: this.onAdded,
            onBeforeRemove: this.onBeforeRemove,
            onRemoved: this.onRemoved
        }
        viewParams.valid = true;
        viewParams.isAutoRecover = isAutoRecover || false;
        viewParams.isClickSpanceClose = false;

        if (!this.queue[prefabPath]) {
            this.queue[prefabPath] = []
        }
        this.queue[prefabPath].push(viewParams);

        if (!this.currentPrefabPath[prefabPath]) {
            this.next(prefabPath)
        }

    }

    protected updateMaskState() {
        if (this._maskNode && this._maskNode.isValid == true) {
            this._maskNode.active = false;
        }
    }
    /**UI层的回调 UICallbacks类型 */
    protected onRemoved = (node: Node | null, viewParams: inf_ViewParams) => {
        setTimeout(() => {
            viewParams.valid = false;
            this.currentPrefabPath[viewParams.prefabPath] = null;
            this.next(viewParams.prefabPath)
        }, 0);
    }

    protected load(viewParams: inf_ViewParams) {
        super.load(viewParams)
    }

    protected createNode(needAddNode: Node | null, viewParams: inf_ViewParams) {
        //this不存在了
        if (this.isValid == false) {
            return;
        }
        let childNode: Node = super.createNode(needAddNode, viewParams);
        if (!childNode) {
            return null
        }

        //激活场景
        this.layer = Layers.Enum.UI_2D
        this._activeInHierarchy = true;

        childNode.active = true;
        let toastCom = childNode.getComponent(ToastComponent)!;
        childNode.active = true;

        if (toastCom?.toast) {
            toastCom.toast(viewParams.params)
        }
        return childNode;
    }
    //下一个相同类型的预制体
    private next(prefabPath: string) {
        //this不存在了
        if (this.isValid == false) {
            return;
        }
        if (prefabPath && this.queue[prefabPath]) {
            let currentParams = this.queue[prefabPath].shift()!;
            if (currentParams) {
                this.currentPrefabPath[currentParams.prefabPath] = true
                this.load(currentParams);
            }
        }
    }
    remove(prefabPath: string, isDestroy: boolean): void {
        if (prefabPath && this.queue[prefabPath]) {
            this.queue[prefabPath] = null
        }
        super.remove(prefabPath, isDestroy)
    }
    /**
     * 执行销毁,不发送通知
     */
    toDestoryNotNotify() {
        this.queue = {};
        this.currentPrefabPath = {};
        super.toDestoryNotNotify();
    }

    clear(isDestroy: boolean) {
        this.queue = {}
        super.clear(isDestroy)
    }
}