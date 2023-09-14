/**
 * Name = LayerManager
 * URL = db://assets/framework/LayerManager.ts
 * Time = Thu Apr 14 2022 11:51:20 GMT+0800 (中国标准时间)
 * Author = xueya
 * 界面管理器
 */
import { Camera, isValid, Layers, Node, Tween, tween, Vec3, warn, Widget } from "cc";
import { inf_LayerType, inf_PopViewParams, inf_UICallbacks, inf_UIConfig } from "../InterfaceDefines";
import { Logger } from "../log/Logger";
import { DelegateComponent } from "./DelegateComponent";
import { LayerDialog } from "./LayerDialog";
import { LayerNotify } from "./LayerNotify";
import { LayerPopUp } from "./LayerPopup";
import { LayerUI } from "./LayerUI";




class _LayerManager {
    /** 类实例 */
    private static _instance = null;

    public static get instance(): _LayerManager {
        if (!this._instance || this._instance == null) {
            this._instance = new _LayerManager();
        }
        return this._instance;
    }

    /** 界面根节点 */
    public root!: Node;
    /** 实际根节点 */
    public guiRoot: Node = null;
    /** 界面摄像机 */
    public camera!: Camera;
    /** 游戏界面特效层 */
    public game!: Node;
    /** 新手引导层 */
    public guide!: Node;

    /** 界面层 */
    private ui!: LayerUI;
    /** 弹窗层 */
    private popup!: LayerPopUp;
    /** 一次只能弹出一个的弹窗 */
    private dialog!: LayerDialog;
    /** 一次只能弹出一个的弹窗 Dialog的附属界面*/
    private dialogTip!: LayerDialog;
    /** 系统提示弹窗（优先显示） */
    private alert!: LayerDialog;
    /** 动画展示弹窗 Dialog的附属界面*/
    private dialogAnim!: LayerDialog;
    /** 网络加载弹窗（屏蔽下层点击 只能显示一个） */
    private netwindow!: LayerDialog;
    /** 消息吐司，请使用show方法来显示 */
    private notify!: LayerNotify;
    /** UI配置 */
    private configs: { [key: number]: inf_UIConfig } = {};

    /** 节点List */
    private NodeList = {};
    /** 节点层级配置 */
    private ZorderConf = {};
    /**
     * 开始加载UI
     */
    public load(root: Node) {
        if (this.root) {
            return
        }
        this.load(root)
    }
    /**
     * 重新加载UI
     */
    public reload(root: Node) {
        if (!root) {
            warn(`重新加载UI失败，root不存在`);
        }
        this.clear()
        this.root = null;
        this._load(root)
    }
    /**
     * _load
     */
    private _load(root: Node) {
        Logger.logView("成功初始化！！！")
        this.root = root;
        this.camera = this.root.getComponentInChildren(Camera)!;
        this.initGuiNode()
    }
    /** 初始化添加所有节点 */
    initGuiNode() {
        if (!this.guiRoot || this.guiRoot.isValid == false) {
            if (this.root) {
                this.guiRoot = this.create_node("GUI");
                this.root.addChild(this.guiRoot);
            } else {
                return;
            }
        } else {
            let childMaps = this.guiRoot.children
            if (childMaps && childMaps?.length > 0) {
                for (let i = 0; i < childMaps.length; i++) {
                    let child = childMaps[i];
                    this.removeByNode(child, true)
                }
            }
        }
        this.game = this.create_node(inf_LayerType.Game);
        this.ui = new LayerUI(inf_LayerType.UI);
        this.popup = new LayerPopUp(inf_LayerType.PopUp);
        this.dialog = new LayerDialog(inf_LayerType.Dialog);
        this.dialogTip = new LayerDialog(inf_LayerType.DialogTip);
        this.alert = new LayerDialog(inf_LayerType.Alert);
        this.dialogAnim = new LayerDialog(inf_LayerType.DialogTip);
        this.netwindow = new LayerDialog(inf_LayerType.NetWindow);
        this.notify = new LayerNotify(inf_LayerType.Notify);

        this.guide = this.create_node(inf_LayerType.Guide);

        /** UI出现的层级 */
        this.ZorderConf = {
            [inf_LayerType.Game]: 0,
            [inf_LayerType.UI]: 1,
            [inf_LayerType.PopUp]: 2,
            [inf_LayerType.Dialog]: 3,
            [inf_LayerType.DialogTip]: 4,
            [inf_LayerType.Alert]: 5,
            [inf_LayerType.Animal]: 6,
            [inf_LayerType.NetWindow]: 7,
            [inf_LayerType.Notify]: 8,
            [inf_LayerType.Guide]: 9,
        }
        this.NodeList = {
            [inf_LayerType.Game]: this.game,
            [inf_LayerType.UI]: this.ui,
            [inf_LayerType.PopUp]: this.popup,
            [inf_LayerType.Dialog]: this.dialog,
            [inf_LayerType.DialogTip]: this.dialogTip,
            [inf_LayerType.Alert]: this.alert,
            [inf_LayerType.Animal]: this.dialogAnim,
            [inf_LayerType.NetWindow]: this.netwindow,
            [inf_LayerType.Notify]: this.notify,
            [inf_LayerType.Guide]: this.guide,
        };
        this.guiRoot.addChild(this.game);
        this.guiRoot.addChild(this.ui);
        this.guiRoot.addChild(this.popup);
        this.guiRoot.addChild(this.dialog);
        this.guiRoot.addChild(this.dialogTip);
        this.guiRoot.addChild(this.alert);
        this.guiRoot.addChild(this.dialogAnim);
        this.guiRoot.addChild(this.netwindow);
        this.guiRoot.addChild(this.notify);
        this.guiRoot.addChild(this.guide);

        this.updateZorder()
    }
    /** 更新节点位置 */
    updateZorder() {
        for (let layerType in this.NodeList) {
            if (Object.prototype.hasOwnProperty.call(this.NodeList, layerType)) {
                let node: Node = this.NodeList[layerType];
                let zorder = this.ZorderConf[layerType];
                node.setSiblingIndex(zorder);
                node.layer = Layers.Enum.UI_2D;
            }
        }
    }
    /**
     * 初始化所有UI的配置对象
     * @param configs 配置对象
     */
    public initUIConfig(configs: { [key: number]: inf_UIConfig }): void {
        this.configs = configs;
    }
    /**
     * 插入一条UIConfig配置项
     * @param UIID   要设置的界面id
     * @param config 要设置的配置
     */
    public updateConfig(UIConfigList): void {
        if (!UIConfigList) {
            return
        }
        for (let UIID in UIConfigList) {
            if (Object.prototype.hasOwnProperty.call(UIConfigList, UIID)) {
                let config = UIConfigList[UIID];
                if (!this.configs) {
                    this.configs = {};
                }
                this.configs[UIID] = config;
            }
        }
    }
    /**
     * 打开一个UIConfig配置的界面
     * @param uiId 配置的UIID
     * @param uiArgs 要传递给UI的数据
     * @param callbacks 回调函数 参照UICallbacks的定义
     * @param parent 自定义父节点
     * @param isClickSpanceClose 是否点击空白区域关闭 默认false，不关闭
     * @param isAutoRecover 是否自动释放加载的资源 默认false不释放
     * @returns 
     */
    public open(uiId: number, uiArgs: any = null, callbacks: inf_UICallbacks = null, parent = null, isClickSpanceClose: boolean = false, isAutoRecover: boolean = false): void {
        if (LayerManager.loadState == false) {
            warn(`打开编号为【${uiId}】的界面失败`);
            return
        }
        let config = this.configs[uiId];
        if (config == null) {
            warn(`打开编号为【${uiId}】的界面失败，配置信息不存在`);
            return;
        }
        let prefab = config["prefab"]
        console.log(`正在打开编号为【${uiId}】= ${prefab} 的界面`);

        if (parent) {
            switch (config.layer) {
                case inf_LayerType.UI:   //界面UI
                    if (typeof (parent.add) == "function") {
                        parent.add(config, uiArgs, callbacks, isClickSpanceClose, isAutoRecover)
                    }
                case inf_LayerType.NetWindow: //网络弹窗:
                    if (!this.has(uiId, parent) || this.isLoading(uiId, parent) == true) {
                        if (typeof (parent.add) == "function") {
                            parent.add(config, uiArgs, callbacks, isClickSpanceClose, isAutoRecover)
                        }
                    }
                    break;
                case inf_LayerType.Notify: //吐司或通知
                    if (typeof (parent.show) == "function") {
                        if (uiArgs && uiArgs["pos"] == "top") {
                            parent.show(config, uiArgs, this.getToastEffectByTop(callbacks), isAutoRecover)
                        } else {
                            parent.show(config, uiArgs, this.getToastEffectByCenter(callbacks), isAutoRecover)
                        }
                    }
                    break;
                default:
                    if (typeof (parent.add) == "function") {
                        parent.add(config, uiArgs, callbacks || this.getPopCommonEffect(), isClickSpanceClose, isAutoRecover)
                    } else {
                        warn(`打开编号为【${uiId}】的界面失败，函数【add】不存在`);
                    }
                    break;
            }
            return;
        }
        switch (config.layer) {
            case inf_LayerType.UI:   //界面UI
                this.ui.add(config, uiArgs, callbacks, isClickSpanceClose, isAutoRecover);
                break;
            case inf_LayerType.PopUp: //弹窗
                this.popup.add(config, uiArgs, this.getPopCommonEffect(callbacks), isClickSpanceClose, isAutoRecover);
                break;
            case inf_LayerType.Dialog: //对话框
                this.dialog.add(config, uiArgs, this.getPopCommonEffect(callbacks), isClickSpanceClose, isAutoRecover);
                break;
            case inf_LayerType.DialogTip: //对话框附属弹窗
                this.dialogTip.add(config, uiArgs, this.getPopCommonEffect(callbacks), isClickSpanceClose, isAutoRecover);
                break;
            case inf_LayerType.Alert: //系统弹窗
                this.alert.add(config, uiArgs, this.getPopCommonEffect(callbacks), isClickSpanceClose, isAutoRecover);
                break;
            case inf_LayerType.NetWindow: //网络弹窗
                if (!this.has(uiId) && this.isLoading(uiId) == false) {
                    this.netwindow.add(config, uiArgs, callbacks, isClickSpanceClose, isAutoRecover);
                }
                break;
            case inf_LayerType.Notify: //吐司或通知
                if (uiArgs && uiArgs["pos"] == "top") {
                    this.notify.show(config, uiArgs, this.getToastEffectByTop(callbacks), isAutoRecover)
                } else {
                    this.notify.show(config, uiArgs, this.getToastEffectByCenter(callbacks), isAutoRecover)
                }
                break;
            default:
                warn(`打开编号为【${uiId}】= ${prefab} 的界面失败，类型配置错误`)
                break;
        }
    }


    /**
     * 判断界面上是否存在该编号的UI
     * @param uiId UI编号
     * @param parent 自定义父节点
     * @returns boolean
     */
    public has(uiId: number, parent = null): boolean {
        if (LayerManager.loadState == false) {
            warn(`判断界面编号为【${uiId}】的界面失败`);
            return false
        }
        let config = this.configs[uiId];
        if (config == null) {
            warn(`编号为【${uiId}】的界面失败，配置信息不存在`);
            return;
        }
        if (parent) {
            if (typeof (parent.has) == "function") {
                return parent.has(config.prefab);
            }
            return false;
        }
        let result = false;
        switch (config.layer) {
            case inf_LayerType.UI:
                result = this.ui.has(config.prefab);
                break;
            case inf_LayerType.PopUp:
                result = this.popup.has(config.prefab);
                break;
            case inf_LayerType.Dialog:
                result = this.dialog.has(config.prefab);
                break;
            case inf_LayerType.DialogTip:
                result = this.dialogTip.has(config.prefab);
                break;
            case inf_LayerType.Alert:
                result = this.alert.has(config.prefab);
                break;
            case inf_LayerType.NetWindow: //网络弹窗
                result = this.netwindow.has(config.prefab);
                break;
        }
        return result;
    }
    /**
     * 判断是否正在加载该编号的UI
     * @param uiId UI编号
     * @param parent 自定义父节点
     * @returns boolean
     */
    public isLoading(uiId: number, parent = null): boolean {
        if (LayerManager.loadState == false) {
            warn(`判断界面编号为【${uiId}】的界面失败`);
            return false
        }
        let config = this.configs[uiId];
        if (config == null) {
            warn(`编号为【${uiId}】的界面失败，配置信息不存在`);
            return;
        }
        if (parent) {
            if (typeof (parent.isLoading) == "function") {
                return parent.isLoading(config.prefab);
            }
            return false;
        }
        let result = false;
        switch (config.layer) {
            case inf_LayerType.UI:
                result = this.ui.isLoading(config.prefab);
                break;
            case inf_LayerType.PopUp:
                result = this.popup.isLoading(config.prefab);
                break;
            case inf_LayerType.Dialog:
                result = this.dialog.isLoading(config.prefab);
                break;
            case inf_LayerType.DialogTip:
                result = this.dialogTip.isLoading(config.prefab);
                break;
            case inf_LayerType.Alert:
                result = this.alert.isLoading(config.prefab);
                break;
            case inf_LayerType.NetWindow: //网络弹窗
                result = this.netwindow.isLoading(config.prefab);
                break;
        }
        return result;
    }

    /**
     * 根据编号移除UI
     * @param uiId 
     * @param isDestroy 
     * @param parent 自定义父节点
     * @returns 
     */
    public remove(uiId: number, isDestroy = true, parent = null) {
        if (LayerManager.loadState == false) {
            warn(`根据编号移除UI 编号为【${uiId}】失败`);
            return
        }
        let config = this.configs[uiId];
        if (config == null) {
            warn(`删除编号为【${uiId}】的界面失败，配置信息不存在`);
            return;
        }
        if (parent) {
            if (config.layer == inf_LayerType.NetWindow) {
                if (typeof (parent.removeAll) == "function") {
                    return parent.removeAll(config.prefab);
                }
            } else {
                if (typeof (parent.remove) == "function") {
                    return parent.remove(config.prefab);
                }
            }
            return;
        }

        switch (config.layer) {
            case inf_LayerType.UI:
                this.ui.remove(config.prefab, isDestroy);
                break;
            case inf_LayerType.PopUp:
                this.popup.remove(config.prefab, isDestroy);
                break;
            case inf_LayerType.Dialog:
                this.dialog.remove(config.prefab, isDestroy);
                break;
            case inf_LayerType.DialogTip:
                this.dialogTip.remove(config.prefab, isDestroy);
                break;
            case inf_LayerType.Alert:
                this.alert.remove(config.prefab, isDestroy);
                break;
            case inf_LayerType.NetWindow:
                this.netwindow.removeAll(config.prefab, isDestroy);
                break;
        }
    }

    /**
     * 删除一个通过this.add框架添加进来的节点
     * @param node 要删除的节点
     * @param isDestroy 是否销毁
     * @returns 
     */
    public removeByNode(node: Node, isDestroy: boolean = false) {
        if (node instanceof Node) {
            let comp = node.getComponent(DelegateComponent);
            if (comp && comp.viewParams) {
                (node.parent as LayerUI).removeByUuid(comp.viewParams.uuid, isDestroy);
            }
            else {
                // warn(`当前删除的node不是通过界面管理器添加到舞台上`);
                node.destroy();
            }
            return;
        }
    }
    /**
     * 清除根节点下所有界面
     * @param layerType 界面类型 null 则清空所有
     * @param isDestroy 是否销毁
     * @param parent 自定义父节点
     */
    public clear(layerType: inf_LayerType = null, isDestroy: boolean = true, parent = null) {
        if (!this.root) {
            warn(`Layermanager还没有初始化`);
            return
        }
        if (isValid(this.root) == false) {
            warn(`Layermanager还没有初始化`);
            this.root = null;
            return
        }
        if (parent) {
            if (typeof (parent.clear) == "function") {
                parent.clear(isDestroy);
            }
            return;
        }

        switch (layerType) {
            case inf_LayerType.UI:
                this.ui.clear(isDestroy);
                break;
            case inf_LayerType.PopUp:
                this.popup.clear(isDestroy);
                break;
            case inf_LayerType.Dialog:
                this.dialog.clear(isDestroy);
                break;
            case inf_LayerType.DialogTip:
                this.dialogTip.clear(isDestroy);
                break;
            case inf_LayerType.Alert:
                this.alert.clear(isDestroy);
                break;
            case inf_LayerType.NetWindow:
                this.netwindow.clear(isDestroy)
                break;
            default:
                this.initGuiNode();
                break;
        }
        this.updateZorder();

    }
    /**
     * 除该节点之外都清除
     * @param layerType 界面类型 null 则清空所有
     * @param isIncludeNetWindow 是否包含网络加载页面 默认false 不包含
     * @param parent 自定义父节点
     */
    public clearOther(layerType: inf_LayerType = null, isIncludeNetWindow: boolean = false) {
        if (!this.root) {
            warn(`Layermanager还没有初始化`);
            return
        }
        if (isValid(this.root) == false) {
            warn(`Layermanager还没有初始化`);
            this.root = null;
            return
        }
        let allTypes = [
            { type: inf_LayerType.UI, node: this.ui },
            { type: inf_LayerType.PopUp, node: this.popup },
            { type: inf_LayerType.Dialog, node: this.dialog },
            { type: inf_LayerType.DialogTip, node: this.dialogTip },
            { type: inf_LayerType.Alert, node: this.alert },
            // { type: inf_LayerType.NetWindow, node: this.netwindow },
        ]
        if (isIncludeNetWindow == true) {
            allTypes.push({ type: inf_LayerType.NetWindow, node: this.netwindow });
        }
        for (let i = allTypes.length - 1; i >= 0; i--) {
            if (layerType != allTypes[i].type) {
                allTypes[i].node.toDestoryNotNotify();
            }
        }
        this.updateZorder();

    }




    /**
     * 创建一个节点
     * @param name 节点名称
     * @returns 
     */
    private create_node(name: string) {
        let node = new Node(name);
        node.layer = Layers.Enum.UI_2D;
        let w: Widget = node.addComponent(Widget);
        w.isAlignLeft = w.isAlignRight = w.isAlignTop = w.isAlignBottom = true;
        w.left = w.right = w.top = w.bottom = 0;
        w.alignMode = 2;
        w.enabled = true;
        return node;
    }
    /** 获得动画节点 */
    get AnimNode(): Node {
        return this.dialogAnim;
    }
    /**
     * 加载状态判断
     * @returns boolean
     */
    get loadState() {
        if (!this.root) {
            warn(`isTrueload = false,根节点未初始化`);
            return false
        }
        if (isValid(this.root) == false) {
            warn(`isValid(this.root) = false,根节点未初始化`);
            return false
        }
        if (!this.configs) {
            warn(`isTrueload = false,配置信息未初始化`);
            return false
        }
        return true
    }
    /** 吐司动画（居中）*/
    public getToastEffectByCenter(callbacks?: inf_PopViewParams) {
        let newCallbacks: inf_PopViewParams = {
            // 节点添加动画
            onAdded: (node: Node, params) => {
                node.setScale(0.85, 0.85, 0.85);
                node.setPosition(0, 0, 0)
                tween(node)
                    .to(0.15, { scale: new Vec3(1, 1, 1) }, { easing: 'sineIn' })
                    .delay(1)
                    .parallel(
                        tween()
                            .to(0.2, { position: new Vec3(0, 80, 0) })
                        ,
                        tween()
                            .to(0.2, { easing: 'sineOut' })
                    )
                    .call(() => {
                        node.destroy()
                    })
                    .start();
            },
        }
        if (callbacks) {
            if (callbacks && callbacks.onAdded) {
                let onAdded = callbacks.onAdded;
                // @ts-ignore
                callbacks.onAdded = (node: Node, params: any) => {
                    onAdded(node, params);
                    // @ts-ignore
                    newCallbacks.onAdded(node, params);
                };
            }
            return callbacks;
        }
        return newCallbacks;
    }
    /** 吐司动画（居上）*/
    public getToastEffectByTop(callbacks?: inf_PopViewParams) {
        let newCallbacks: inf_PopViewParams = {
            // 节点添加动画
            onAdded: (node: Node, params) => {
                //将要设置的高度
                let widget: Widget = node.getComponent(Widget);
                if (!widget) {
                    widget = node.addComponent(Widget);
                }
                widget.isAlignLeft = widget.isAlignRight = widget.isAlignTop = true;
                widget.isAlignBottom = false;
                widget.left = widget.right = 0;
                widget.top = -50;
                widget.alignMode = 2;
                widget.enabled = true;
                widget.updateAlignment();
                tween(node)
                    .parallel(
                        tween()
                            .to(0.15, { easing: 'sineIn' })
                        ,
                        tween()
                            .by(0.15, { position: new Vec3(0, -140, 0) })
                        ,
                        tween()
                            .to(0.15, { easing: 'sineOut' })
                    )

                    .delay(2)
                    .parallel(
                        tween()
                            .by(0.2, { position: new Vec3(0, 70, 0) })
                        ,
                        tween()
                            .to(0.2, { easing: 'sineOut' })
                    )
                    .call(() => {
                        node.destroy()
                    })
                    .start()
            },
        }
        if (callbacks) {
            if (callbacks && callbacks.onAdded) {
                let onAdded = callbacks.onAdded;
                // @ts-ignore
                callbacks.onAdded = (node: Node, params: any) => {
                    onAdded(node, params);
                    // @ts-ignore
                    newCallbacks.onAdded(node, params);
                };
            }
            return callbacks;
        }
        return newCallbacks;
    }


    /** 弹窗动画 */
    public getPopCommonEffect(callbacks?: inf_PopViewParams) {
        let newCallbacks: inf_PopViewParams = {
            // 节点添加动画
            onAdded: (node, params) => {
                // setTimeout(() => {
                //     if (!node || node.isValid == false) {
                //         return;
                //     }
                //     let outScale = new Vec3(1, 1, 1);
                //     let minSpance = 0.15;
                //     node.getScale(outScale);
                //     node.setScale(outScale.x - minSpance, outScale.y - minSpance, outScale.z - minSpance);

                //     tween(node)
                //         .parallel(
                //             tween()
                //                 .to(0.15, { scale: outScale })
                //             ,
                //             tween()
                //                 .to(0.15, { easing: 'sineIn' })
                //         )
                //         .call(() => {
                //             node.setScale(outScale);
                //         })
                //         .start();
                // }, 10)
                if (!node || node.isValid == false) {
                    return;
                }
                let outScale = new Vec3(1, 1, 1);
                let minSpance = 0.15;
                node.getScale(outScale);
                node.setScale(outScale.x - minSpance, outScale.y - minSpance, outScale.z - minSpance);

                tween(node)
                    .parallel(
                        tween()
                            .to(0.15, { scale: outScale })
                        ,
                        tween()
                            .to(0.15, { easing: 'sineIn' })
                    )
                    .call(() => {
                        node.setScale(outScale);
                    })
                    .start();

            },
            // 节点删除动画
            onBeforeRemove: (node, next) => {
                setTimeout(() => {
                    if (!node || node.isValid == false) {
                        return;
                    }
                    let outScale = new Vec3(1, 1, 1);
                    let minSpance = 0.2;
                    node.getScale(outScale);

                    tween(node)
                        .parallel(
                            tween()
                                .to(0.1, { scale: new Vec3(outScale.x - minSpance, outScale.y - minSpance, outScale.z - minSpance) })
                            ,
                            tween()
                                .to(0.1, { easing: 'sineOut' })
                        )
                        .call(next)
                        .start();
                }, 0)
            },
        }

        if (callbacks) {
            if (callbacks && callbacks.onAdded) {
                let onAdded = callbacks.onAdded;
                // @ts-ignore
                callbacks.onAdded = (node: Node, params: any) => {
                    onAdded(node, params);

                    // @ts-ignore
                    newCallbacks.onAdded(node, params);
                };
            }

            if (callbacks && callbacks.onBeforeRemove) {
                let onBeforeRemove = callbacks.onBeforeRemove;
                callbacks.onBeforeRemove = (node, params) => {
                    onBeforeRemove(node, params);

                    // @ts-ignore
                    newCallbacks.onBeforeRemove(node, params);
                };
            }
            return callbacks;
        }
        return newCallbacks;
    }

    /** 震屏效果 */
    shakeScreen() {
        Tween.stopAllByTarget(this.root);
        tween(this.root)
            .sequence(
                tween(this.root).to(0.03, { position: new Vec3(5, 7) }),
                tween(this.root).to(0.03, { position: new Vec3(-6, 7) }),
                tween(this.root).to(0.03, { position: new Vec3(-13, 3) }),
                tween(this.root).to(0.03, { position: new Vec3(3, -6) }),
                tween(this.root).to(0.03, { position: new Vec3(-5, 5) }),
                tween(this.root).to(0.03, { position: new Vec3(2, -8) }),
                tween(this.root).to(0.03, { position: new Vec3(-8, -10) }),
                tween(this.root).to(0.03, { position: new Vec3(3, 10) }),
                tween(this.root).to(0.03, { position: new Vec3(0, 0) }),
            )
            .start();
    }
}

export const LayerManager = _LayerManager.instance
