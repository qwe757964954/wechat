
/**
 * Name = DelegateComponent
 * URL = db://assets/framework/layer/DelegateComponent.ts
 * Time = Thu Apr 14 2022 12:03:00 GMT+0800 (中国标准时间)
 * Author = xueya
 * Gui模块绑定的通用组件
 */
import { Component, Node, _decorator } from "cc";
import { AppEvent } from "../../config/AppEvent";
import { inf_ViewParams } from "../InterfaceDefines";
import { resLoader } from "../loader/ResLoader";
import { Logger } from "../log/Logger";
import { EventManager } from "../manager/EventManager";

const { ccclass, menu } = _decorator;

/** 窗口事件触发组件 */
@ccclass('DelegateComponent')
//方便编辑器识别的菜单项目
@menu('layer/DelegateComponent')

export class DelegateComponent extends Component {
    /** 外部传递的参数 */
    public viewParams: inf_ViewParams | null = null;

    add() {
        let viewParams = this.viewParams!;

        // 通知外部UI管理窗口添加到父节点后的事件
        if (typeof viewParams.noticeToRoot!.onAdded === "function") {
            viewParams.noticeToRoot!.onAdded(this.node, viewParams);
        }
        // 触发窗口组件上添加到父节点后的事件
        this.applyComponentsFunction(this.node, "onAdded", viewParams.params);
        if (typeof viewParams.callbacks!.onAdded === "function") {
            viewParams.callbacks!.onAdded(this.node, viewParams.params);
        }
        //发送全局事件
        let array = {
            UIID: viewParams.uuid,
            Prefab: viewParams.prefabPath,
            Bundle: viewParams.bundle,
        }
        EventManager.dispatch(AppEvent.VIEW_UI_OPENED, array)
    }

    /** 删除节点，该方法只能调用一次，将会触发onBeforeRemoved回调 */
    remove(isDestroy: boolean) {
        let viewParams = this.viewParams!;

        if (viewParams.valid) {
            // 触发窗口组件上移除之前的事件
            this.applyComponentsFunction(this.node, "onBeforeRemove", viewParams.params);

            // 通知外部UI管理窗口添加到父节点后的事件
            if (typeof viewParams.noticeToRoot!.onBeforeRemove === "function") {
                viewParams.noticeToRoot!.onBeforeRemove(this.node,
                    () => {
                        this.removed(viewParams, isDestroy);
                    });
            }

            //  通知外部对象窗口组件上移除之前的事件（关闭窗口前的关闭动画处理）
            if (typeof viewParams.callbacks!.onBeforeRemove === "function") {
                viewParams.callbacks!.onBeforeRemove(
                    this.node,
                    () => {
                        this.removed(viewParams, isDestroy);
                    });
            }
            else {
                this.removed(viewParams, isDestroy);
            }
        }
    }

    /**销毁 */
    onDestroy() {
        let viewParams = this.viewParams!;
        if (viewParams) {
            viewParams.valid = false;
            if (viewParams.isAutoRecover == true) {
                Logger.logView(`释放资源:${viewParams.prefabPath}`)
                resLoader.release(viewParams.prefabPath)
            }
        }
        // 触发窗口组件上窗口移除之后的事件
        this.applyComponentsFunction(this.node, "onRemoved", viewParams?.params);

        // 通知外部UI管理窗口移除之后的事件
        if (typeof viewParams.noticeToRoot!.onRemoved === "function") {
            viewParams.noticeToRoot!.onRemoved(this.node, viewParams);
        }
        // 通知外部对象窗口移除之后的事件
        if (typeof viewParams.callbacks!.onRemoved === "function") {
            viewParams.callbacks!.onRemoved(this.node, viewParams);
        }
        //发送全局事件
        let array = {
            UIID: viewParams.uuid,
            Prefab: viewParams.prefabPath,
            Bundle: viewParams.bundle,
        }
        EventManager.dispatch(AppEvent.VIEW_UI_CLOSED, array)
        this.viewParams = null;
    }


    /** 窗口组件中触发移除事件与释放窗口对象 */
    private removed(viewParams: inf_ViewParams, isDestroy: boolean) {
        viewParams.valid = false;

        if (isDestroy) {
            this.node.destroy();
        } else {
            this.node.removeFromParent();
        }
    }
    protected applyComponentsFunction(node: Node, funName: string, params: any) {
        for (let i = 0; i < node.components.length; i++) {
            let component: any = node.components[i];
            let func = component[funName];
            if (func) {
                func.call(component, params);
            }
        }
    }
    /**获取传递的所有数据 */
    public getViewParams() {
        return this.viewParams;
    }
    /**获取主动传递的参数 */
    public getParams() {
        if (this.viewParams) {
            return this.viewParams.params
        }
        return null
    }


}