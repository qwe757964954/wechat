/**
 * UI基础层，允许添加多个预制件节点(可添加多个相同预制体节点)
 * Name = LayerUI
 * URL = db://assets/framework/layer/LayerUI.ts
 * Time = Wed Apr 20 2022 17:08:37 GMT+0800 (中国标准时间)
 * Author = xueya
 * 
 * add          : 添加一个预制件节点到层容器中，该方法将返回一个唯一uuid来标识该操作Node节点。
 * delete       : 根据uuid删除Node节点，如果节点还在队列中也会被删除, 删除节点可以用gui.delete(node)或this.node.destroy()
 * deleteByUuid : 根据预制件路径删除，预制件如在队列中也会被删除，如果该预制件存在多个也会一起删除。
 * get          : 根据uuid获取Node节点，如果节点不存在或者预制件还在队列中，则返回null 。
 * getSoleID    : 根据预制件路径获取当前显示的该预制件唯一ID 同一路径ID也不同。
 * has          : 判断当前层是否包含 uuid或预制件路径对应的Node节点。
 * find         : 判断当前层是否包含 uuid或预制件路径对应的Node节点。
 * size         : 当前层上显示的所有Node节点数。
 * clear        : 清除所有Node节点，队列当中未创建的任务也会被清除。
 * getViewParamsSizeByUuid:根据uuid获取所在列表的位置和具体数据
 * isLoading    ：资源是否正在加载中
 */

import { Button, error, instantiate, isValid, Layers, MaskComponent, Node, Prefab, Sprite, SpriteFrame, UITransform, Vec2, warn, Widget } from "cc";
import { inf_UICallbacks, inf_UIConfig, inf_ViewParams } from "../InterfaceDefines";
import { resLoader } from "../loader/ResLoader";
import { DelegateComponent } from "./DelegateComponent";

let countDeletcNum = 0;
export class LayerUI extends Node {
    //添加的历史记录{prefabPath = {soleID,soleID,...}}
    protected addHistoryRecode = {};
    protected loadingMap = {};
    protected key_num = 0;
    protected ui_nodes = {};  //[path] = [viewParams,viewParams]

    /** 遮罩层 */
    protected _maskNode: Node = null;

    /** 遮罩层 */
    protected _buttonCompent: Button = null;

    /**
     * UI基础层，允许添加多个预制件节点
     * @param name 该层名
     * @param container 容器Node
     */
    constructor(name: string) {
        super(name);
        this.init();
    };
    /** 初始化节点 */
    protected init() {
        let widget: Widget = this.getComponent(Widget);
        if (!widget) {
            widget = this.addComponent(Widget);
        }
        widget.isAlignLeft = widget.isAlignRight = widget.isAlignTop = widget.isAlignBottom = true;
        widget.left = widget.right = widget.top = widget.bottom = 0;
        widget.alignMode = 2;
        widget.enabled = true;
        widget.updateAlignment();
        this.create_Mask("Mask");
        this.on(Node.EventType.CHILD_ADDED, this.onCallbackChildAdd, this);
        this.on(Node.EventType.CHILD_REMOVED, this.onCallbackChildRemove, this);
        this.on(Node.EventType.NODE_DESTROYED, this.onCallbackDestory, this);
    }
    /**
     * 创建一个遮罩层
     * @param name 节点名称
     * @returns 
     */
    protected create_Mask(name: string = null) {
        if (!this._maskNode) {
            this._maskNode = new Node(name);
            this._maskNode.layer = Layers.Enum.UI_2D;
            this.addChild(this._maskNode);
        }
        let widget: Widget = this._maskNode.getComponent(Widget);
        if (!widget) {
            widget = this._maskNode.addComponent(Widget);
        }

        widget.isAlignLeft = widget.isAlignRight = widget.isAlignTop = widget.isAlignBottom = true;
        widget.left = widget.right = widget.top = widget.bottom = 0;
        widget.alignMode = 2;
        widget.enabled = true;
        widget.updateAlignment();

        let mask: MaskComponent = this._maskNode.addComponent(MaskComponent);
        mask.type = 0;
        mask.enabled = true;

        this._buttonCompent = this._maskNode.getComponent(Button);
        if (!this._buttonCompent) {
            this._buttonCompent = this._maskNode.addComponent(Button);
        }
        this._buttonCompent.target = this._maskNode;
        this._buttonCompent.interactable = true;
        this._buttonCompent.transition = 0;
        this._buttonCompent.enabled = true;

        this._maskNode.active = false;
    }
    /**
     * 创建一个2D节点
     * @param name 节点名称
     * @returns 
     */
    protected create_2DNode(name: string = null): Node {
        if (name != null) {
            name = String(name);
        }
        let node = new Node(name);
        node.layer = Layers.Enum.UI_2D;

        let uiTrans: UITransform = node.addComponent(UITransform);
        uiTrans.anchorPoint = new Vec2(0.5, 0.5);
        uiTrans.enabled = true;
        return node;
    }
    /**
     * 创建一个2D图片节点
     * @param name 节点名称
     * @returns 
     */
    protected create_2DSprite(spriteFrame: SpriteFrame, name = null): Node {
        let node = this.create_2DNode(name);
        if (node) {
            let sprite: Sprite = node.addComponent(Sprite);
            sprite.sizeMode = 0;
            sprite.type = 0;
            sprite.trim = true;
            sprite.spriteFrame = spriteFrame;
            sprite.enabled = true;
        }
        return node;
    }
    /** 有子节点被添加 */
    protected onCallbackChildAdd(node: Node) {
        // console.log("有子节点被添加", node)
        this.updateMaskState();
    }
    /** 有子节点被移除 */
    protected onCallbackChildRemove(node: Node) {
        // console.log("有子节点被移除：", node)
        this.updateMaskState();
    }
    /** 节点被销毁 */
    protected onCallbackDestory(node: Node) {
        this.off(Node.EventType.CHILD_ADDED, this.onCallbackChildAdd, this);
        this.off(Node.EventType.CHILD_REMOVED, this.onCallbackChildRemove, this);
        this.off(Node.EventType.NODE_DESTROYED, this.onCallbackDestory, this);
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
            this._maskNode.active = false;
        }
    }

    /** 
     * 构造一个唯一标识 同一个预制体也唯一
    */
    protected getSoleID(prefabPath: string): string {
        this.key_num = this.key_num + 1
        let soleNum = `${this.name}_${prefabPath}_${this.key_num}`;
        let soleKey = soleNum.replace(/\//g, "_");
        //记录历史
        if (!this.addHistoryRecode[prefabPath]) {
            this.addHistoryRecode[prefabPath] = {}
        }
        this.addHistoryRecode[prefabPath][soleKey] = true
        return soleKey
    }

    /**
     * 添加一个预制件节点到层容器中，该方法将返回一个唯一`uuid`来标识该操作节点 
     * 一个层不能同时存在多个相同的uuid
     * @param config.prefab 预制件路径 config.bundle 分包包名 默认resources
     * @param params     自定义参数
     * @param callbacks  回调函数对象，可选
     * @param isClickSpanceClose 是否点击自动关闭 默认 false 不关闭
     * @param isAutoRecover 是否自动释放加载的资源 默认false不释放
     */
    add(config: inf_UIConfig, params?: any, callbacks?: inf_UICallbacks, isClickSpanceClose?: boolean, isAutoRecover?: boolean): string {
        //this不存在了
        if (this.isValid == false) {
            return;
        }
        let bundle = config.bundle || "resources"
        let prefabPath = config.prefab
        //唯一标识
        let soleKey = this.getSoleID(prefabPath);

        let viewParams = new inf_ViewParams();
        viewParams.uuid = soleKey;
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
        viewParams.valid = true;
        viewParams.isAutoRecover = isAutoRecover || false;
        viewParams.isClickSpanceClose = isClickSpanceClose || false;
        this.load(viewParams)
        return soleKey
    }

    protected load(viewParams: inf_ViewParams) {
        //this不存在了
        if (this.isValid == false) {
            return;
        }
        if (viewParams && viewParams.prefabPath) {
            this.loadingMap[viewParams.prefabPath] = true
            //缓存中的资源
            let prefab: Prefab = resLoader.get(viewParams.prefabPath, Prefab, viewParams.bundle)
            if (!prefab) { /**缓存中不存在 重新加载 */
                // 获取预制件资源 并给套上DelegateComponent 组件
                resLoader.load(viewParams.bundle, viewParams.prefabPath, (err: Error | null, res: Prefab) => {
                    if (err) {
                        this.loadingMap[viewParams.prefabPath] = false;
                        error(err);
                        return
                    }
                    //this不存在了
                    if (this.isValid == false) {
                        this.loadingMap[viewParams.prefabPath] = null;
                        return;
                    }
                    //不在添加历史的就不做处理
                    if (!this.addHistoryRecode[viewParams.prefabPath] || !this.addHistoryRecode[viewParams.prefabPath][viewParams.uuid]) {
                        this.loadingMap[viewParams.prefabPath] = null;
                        return
                    }

                    let childNode: Node = instantiate(res);

                    let comp: DelegateComponent = childNode.addComponent(DelegateComponent);
                    comp.viewParams = viewParams;

                    this.createNode(childNode, viewParams);
                });
            } else {   /**缓存中存在 使用缓存的 */
                //不在添加历史的就不做处理
                if (!this.addHistoryRecode[viewParams.prefabPath] || !this.addHistoryRecode[viewParams.prefabPath][viewParams.uuid]) {
                    return
                }
                let childNode: Node = instantiate(prefab);
                let comp: DelegateComponent = childNode.addComponent(DelegateComponent);
                comp.viewParams = viewParams;

                this.createNode(childNode, viewParams);
            }
        } else {
            warn(`${this.name}.load 加载失败 viewParams.bundle = ${viewParams.bundle} viewParams.prefabPath = ${viewParams?.prefabPath}`)
        }
    }
    /**
     * 创建节点界面，可覆盖重写
     * @param nedAddNode 需要添加的节点 预制体需要由instantiate()而来 
     * @param viewParams 
     */
    protected createNode(nedAddNode: Node | null, viewParams: inf_ViewParams) {

        //this不存在了
        if (this.isValid == false) {
            this.loadingMap[viewParams.prefabPath] = null;
            return;
        }
        //不在添加历史的就不做处理
        if (!this.addHistoryRecode[viewParams.prefabPath] || !this.addHistoryRecode[viewParams.prefabPath][viewParams.uuid]) {
            this.loadingMap[viewParams.prefabPath] = null;
            return null;
        }

        let childNode: Node = nedAddNode;
        let comp: DelegateComponent | null = childNode.getComponent(DelegateComponent);
        if (childNode) {
            //激活场景
            this.layer = Layers.Enum.UI_2D
            this._activeInHierarchy = true;

            let self = this;
            setTimeout(() => {
                //不在添加历史的就不做处理
                if (!self.addHistoryRecode[viewParams.prefabPath] || !self.addHistoryRecode[viewParams.prefabPath][viewParams.uuid]) {
                    self.loadingMap[viewParams.prefabPath] = null;
                    return null;
                }
                if (self.isValid == false) {
                    self.loadingMap[viewParams.prefabPath] = null;
                    return null;
                }
                self.addChild(childNode);

                childNode["__UUID__"] = viewParams.uuid;
                viewParams.node = childNode;
                viewParams.valid = true;

                comp?.add();

                //数据的存储格式
                if (!self.ui_nodes[viewParams.prefabPath]) {
                    self.ui_nodes[viewParams.prefabPath] = new Map<string, inf_ViewParams>()
                }
                self.ui_nodes[viewParams.prefabPath].set(viewParams.uuid, viewParams)
                childNode.active = true;
                self.loadingMap[viewParams.prefabPath] = null;
            }, 0)
        } else {
            viewParams.node = null;
            viewParams.valid = false;
            this.loadingMap[viewParams.prefabPath] = null;
        }
        return childNode;
    }

    /**
     * 根据uuid删除界面上的节点，如果节点还在队列中也会被删除
     * 注意。删除节点请直接调用 `this.node.destroy()`或 `gui.delete(node)`;
     * @param uuid 
     */
    removeByUuid(uuid: string, isDestroy: boolean): void {
        let [key, viewParams] = this.getViewParamsSizeByUuid(uuid);

        if (viewParams) {
            let childNode = viewParams.node;
            let isRemove = isValid(childNode)
            if (isDestroy) {
                this.ui_nodes[key].delete(viewParams.uuid)
            } else {
                if (isRemove == false) {
                    this.ui_nodes[key].delete(viewParams.uuid);
                }
            }
            if (isRemove) {//防止已被删除的 重复删除
                if (this.addHistoryRecode[viewParams.prefabPath]) {
                    this.addHistoryRecode[viewParams.prefabPath][viewParams.uuid] = false;
                }
                if (childNode && childNode?.components) {
                    let comp = childNode.getComponent(DelegateComponent);
                    comp.remove(isDestroy);
                }
            }
        }
    }

    /**
     * 根据预制件路径删除 如果该预制件存在多个也会一起删除。
     * @param prefabPath 
     */
    remove(prefabPath: string, isDestroy: boolean): void {
        if (!prefabPath) {
            return
        }
        let viewParamsMap = this.ui_nodes[prefabPath]
        if (viewParamsMap && viewParamsMap.size > 0) {
            viewParamsMap.forEach((viewParams, uuid) => {
                let childNode = viewParams.node;
                let isRemove = isValid(childNode)
                if (isDestroy) {
                    this.ui_nodes[prefabPath].delete(uuid)
                } else {
                    if (isRemove == false) {
                        this.ui_nodes[prefabPath].delete(uuid);
                    }
                }
                if (isRemove) {//防止已被删除的 重复删除
                    if (this.addHistoryRecode[viewParams.prefabPath]) {
                        this.addHistoryRecode[viewParams.prefabPath][viewParams.uuid] = false;
                    }
                    if (childNode && childNode?.components) {
                        let comp = childNode.getComponent(DelegateComponent);
                        comp.remove(isDestroy);
                    }
                    viewParams.valid = false;
                }
            })
        } else {
            this.addHistoryRecode[prefabPath] = null;
        }
    }
    /**
     * 执行销毁,不发送通知
     */
    public toDestoryNotNotify() {
        this.addHistoryRecode = {};
        this.loadingMap = {};
        this.key_num = 0;
        this.ui_nodes = {};  //[path] = [viewParams,viewParams]

        this.off(Node.EventType.CHILD_ADDED, this.onCallbackChildAdd, this);
        this.off(Node.EventType.CHILD_REMOVED, this.onCallbackChildRemove, this);
        this.off(Node.EventType.NODE_DESTROYED, this.onCallbackDestory, this);

        if (this.children && this.children.length > 0) {
            countDeletcNum = countDeletcNum + this.children.length;
            for (let i = this.children.length - 1; i >= 0; i--) {
                let childNode: Node = this.children[i];
                if (childNode && childNode.isValid == true) {
                    let delegateComponent = childNode.getComponent(DelegateComponent);
                    if (delegateComponent) {
                        delegateComponent.enabled = false;
                    }
                    childNode.destroy();
                }
            }
        }
        /** 遮罩层 */
        this._maskNode = null;
        /** 遮罩层 */
        this._buttonCompent = null;
        this.create_Mask("Mask");

        this.on(Node.EventType.CHILD_ADDED, this.onCallbackChildAdd, this);
        this.on(Node.EventType.CHILD_REMOVED, this.onCallbackChildRemove, this);
        this.on(Node.EventType.NODE_DESTROYED, this.onCallbackDestory, this);
    }

    /**
     * 根据uuid获取节点配置所在位置，如果节点不存在 则返回null 
     * @param uuid 
     */
    getViewParamsSizeByUuid(uuid: string): [key: string, viewParam: inf_ViewParams] | null {
        let _key = null
        let _viewParam = null
        for (let key in this.ui_nodes) {
            if (Object.prototype.hasOwnProperty.call(this.ui_nodes, key)) {
                let viewParamsMap = this.ui_nodes[key]
                if (viewParamsMap.has(uuid)) {
                    _key = key
                    _viewParam = viewParamsMap.get(uuid)
                }

            }
        }
        return [_key, _viewParam];
    }

    /**
     * 判断预制体是否正在加载
     * @param prefabPath
     * @returns 
     */
    isLoading(prefabPath: string): boolean {
        return this.loadingMap[prefabPath] == true
    }
    /**
     * 获取当前层包含指定正则匹配的Node节点。
     * @param prefabPathReg 匹配预制件路径的正则表达式对象
     */
    find(prefabPathReg: RegExp): Node[] {
        let arr: Node[] = [];
        let children = this.__nodes();
        for (let comp of children) {
            if (prefabPathReg.test(comp.viewParams!.prefabPath)) {
                arr.push(comp.node);
            }
        }
        return arr;
    }

    /**
     * 判断当前层是否包含 uuid或预制件路径对应的Node节点。
     * @param prefabPathOrUUID 预制件路径或者UUID
     */
    has(prefabPathOrUUID: string): boolean {
        let children = this.__nodes();
        for (let comp of children) {
            if (comp.viewParams!.uuid === prefabPathOrUUID || comp.viewParams!.prefabPath === prefabPathOrUUID) {
                return true;
            }
        }
        return false;
    }

    /**当前层上的节点 */
    protected __nodes(): Array<DelegateComponent> {
        let result: Array<DelegateComponent> = [];
        let children = this.children;
        for (let i = 0; i < children.length; i++) {
            if (children[i] && children[i]?.components) {
                let comp = children[i].getComponent(DelegateComponent);
                if (comp && comp.viewParams && comp.viewParams.valid && isValid(comp)) {
                    result.push(comp);
                }
            }
        }
        return result;
    }
    /**UI层的回调 UICallbacks类型 */
    protected onWillAdd = (node: Node | null, viewParams: inf_ViewParams) => {

    }
    /**UI层的回调 UICallbacks类型 */
    protected onAdded = (node: Node | null, viewParams: inf_ViewParams) => {
    }
    /**UI层的回调 UICallbacks类型 */
    protected onRemoved = (node: Node | null, viewParams: inf_ViewParams) => {
        setTimeout(() => {
            viewParams.node = null;
            viewParams.valid = false;
            this.removeByUuid(viewParams.uuid, true);
        }, 0);
    }
    protected onBeforeRemove = (node: Node | null, next: Function) => {

    }


    /** 层节点数量 */
    public size(): number {
        return this.children.length;
    }

    /** 清除所有节点 */
    public clear(isDestroy: boolean): void {
        this.addHistoryRecode = {};

        for (let key in this.ui_nodes) {
            if (Object.prototype.hasOwnProperty.call(this.ui_nodes, key)) {
                let viewParamsMap = this.ui_nodes[key]
                viewParamsMap.forEach((viewParams, uuid) => {
                    let remove = true
                    let childNode = viewParams.node;
                    if (isDestroy) {
                        this.ui_nodes[key].delete(viewParams.uuid)
                    } else {
                        if (isValid(childNode) == false) {
                            this.ui_nodes[key].delete(viewParams.uuid);
                            remove = false
                        }
                    }
                    if (remove) {//防止已被删除的 重复删除
                        if (childNode && childNode?.components) {
                            let comp = childNode.getComponent(DelegateComponent);
                            comp.remove(isDestroy);
                        }
                        viewParams.valid = false;
                    }
                })
            }
        }
        this.ui_nodes = {};
    }



}

