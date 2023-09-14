/**
 * UI基础层，允许添加多个预制件节点
 * Name = LayerDialog
 * URL = db://assets/framework/layer/LayerDialog.ts
 * Time = Thu Apr 14 2022 12:01:05 GMT+0800 (中国标准时间)
 * Author = xueya
 * Dialog 弹窗
 * */

import { Color, Node } from "cc";
import { inf_UICallbacks, inf_UIConfig, inf_ViewParams } from "../InterfaceDefines";
import { LayerPopUp } from "./LayerPopup";

/*
 * Dialog 层
 * 该层的节点将一次只显示一个，删除以后会自动从队列当中取一个弹窗，直到队列为空
 */
export class LayerDialog extends LayerPopUp {
    private queue: Array<inf_ViewParams> = [];
    private current!: inf_ViewParams;

    /** 重新加载maskNode蒙版(子节点) */
    protected reloadMaskSprite() {
        super.reloadMaskSprite(new Color(0, 0, 0, 0));
    }
    /**
     * 添加一个预制件节点到层容器中，该方法将返回一个唯一`uuid`来标识该操作节点 
     * @param config.prefab 预制件路径 config.bundle 分包包名 默认resources
     * @param config.prefab 预制件路径
     * @param param 传递的参数
     * @param callbacks 回调函数 UICallbacks定义
     * @param isClickSpanceClose 是否点击自动关闭 默认 false 不关闭
     * @param isAutoRecover 是否自动释放加载的资源 默认false不释放
     */
    add(config: inf_UIConfig, params?: any, callbacks?: inf_UICallbacks, isClickSpanceClose?: boolean, isAutoRecover?: boolean): string {
        if (this.isValid == false) {
            return
        }

        let bundle = config.bundle || "resources";
        let prefabPath = config.prefab;
        let uuid = this.getSoleID(prefabPath);  //注意 此uuid为添加的历史证明

        let viewParams = new inf_ViewParams();
        viewParams.uuid = uuid;
        viewParams.bundle = bundle
        viewParams.prefabPath = prefabPath;
        viewParams.params = params || {};
        viewParams.callbacks = callbacks || {};
        viewParams.noticeToRoot = {
            onWillAdd: this.onWillAdd,
            onAdded: this.onAdded,
            onBeforeRemove: this.onBeforeRemove,
            onRemoved: this.onRemoved
        }
        viewParams.isAutoRecover = isAutoRecover || false;
        viewParams.isClickSpanceClose = isClickSpanceClose || false;

        this.queue.push(viewParams);
        if (this.current == null) {
            this.next();
        }
        return uuid;
    }
    /** 有子节点被移除 */
    protected onCallbackChildRemove(node: Node) {
        if (this.queue.length > 0) {
            return;
        }
        this.updateMaskState();
    }
    /** 更新遮罩层点击状态 */
    protected updateMaskState() {
        if (this.isValid == false || !this._maskNode) {
            return;
        }
        if (this.activeInHierarchy == false) {
            return;
        }
        if (this.children.length > 1) {
            this.active = true;
            this.insertChild(this._maskNode, (this.children.length - 1 - 1))
            this._maskNode.active = true;
            this._buttonCompent.enabled = true;
        } else {
            if (this.queue.length > 0) {
                return;
            }
            this._maskNode.active = false;
        }
        this.black.enabled = this._maskNode.active;
    }


    /** UI层的回调 UICallbacks类型 */
    protected onRemoved = (node: Node | null, viewParams: inf_ViewParams) => {
        setTimeout(() => {
            viewParams.valid = false;
            this.removeByUuid(viewParams.uuid, true);
            this.next();
        }, 0);
    }
    //接着下一个
    private next() {
        if (this.isValid == false) {
            return;
        }
        if (this.queue.length > 0) {
            this.black.enabled = true;
            this.current = this.queue.shift()!;
            this.load(this.current);
        } else {
            this.current = null;
            this.black.enabled = false;
        }
    }
    //根据预制体路径移除 队列中未显示的node记录默认不会移除
    remove(prefabPath: string, isDestroy: boolean): void {
        super.remove(prefabPath, isDestroy)
    }
    //根据预制体路径移除所有 包括队列中未显示的
    removeAll(prefabPath: string, isDestroy: boolean): void {
        this.addHistoryRecode[prefabPath] = null
        let newQueue: Array<inf_ViewParams> = []
        let countNum = this.queue.length
        for (let index = 0; index < countNum; index++) {
            let viewParams = this.queue[index];
            if (viewParams && viewParams.prefabPath != prefabPath) {
                newQueue.push(viewParams)
            }
        }
        this.queue = newQueue;
        this.current = null;
        this.remove(prefabPath, isDestroy)
    }
    /**
     * 执行销毁,不发送通知
     */
    toDestoryNotNotify() {
        super.toDestoryNotNotify();
        if (this.isValid == false) {
            return
        }
        this.queue = [];
        this.current = null;
    }

    clear(isDestroy: boolean) {
        this.queue = [];
        this.current = null;
        super.clear(isDestroy)
    }

}