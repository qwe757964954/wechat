/**
 * Name = InterfaceDefines
 * URL = db://assets/framework/InterfaceDefines.ts
 * Time = Thu Apr 14 2022 12:03:00 GMT+0800 (中国标准时间)
 * Author = xueya
 * Gui模块常用接口类型定义
 */

import { Node, Vec3 } from "cc";

/** UI出现的类型 */
export enum inf_LayerType {
    Game = "LayerGame",     //游戏界面
    UI = "LayerUI",         //ui界面(相同路径的预制体可同时存在)
    PopUp = "LayerPopUp",   //弹窗(底部有黑色蒙版 屏蔽往下传递点击 多个节点可同时存在 不区分路径)
    Dialog = "LayerDialog", //弹窗(继承LayerPopUp) 该层的节点将一次只显示一个
    DialogTip = "LayerDialogTip", //弹窗(继承LayerPopUp) 该层的节点将一次只显示一个 dialog的子级
    Alert = "LayerAlert",   //系统弹窗(继承LayerPopUp) 该层的节点将一次只显示一个
    Animal = "LayerDialogAnimal",   //动画弹窗(继承LayerPopUp) 该层的节点将一次只显示一个
    NetWindow = "LayerNet",//网络弹窗(继承LayerPopUp)该层的弹窗一次只能显示一个 且删除时会删除队列
    Notify = "LayerNotify", //通知(吐司)同一个路径 会存入队列中 依次弹出
    Guide = "LayerGuide"    //引导层 普通node
}
/** 资源配置结构体 */
export interface inf_GameResData {
    /** 包名 */
    bundle?: string,
    /** 资源路径 */
    path: string,
    /** plist文件key */
    plistKey?: string,
}

/** UI配置结构体 */
export interface inf_UIConfig {
    /** 预制体路径(必填) */
    prefab: string;
    /** 包名(非必填 默认resource) */
    bundle?: string;
    /** ui类型 */
    layer?: inf_LayerType;
    animation?: number;
    isSpine?: boolean;
}

/** UI配置的数据结构体 */
export interface inf_UIDataConfig {
    /** uiid */
    uiID: any,
    /** 菜单id */
    menuID?: any,
    /** 红点ID */
    reddotID?: any,
    /** 弹窗ID */
    popID?: any,
}

/*** 回调参数对象定义 */
export interface inf_UICallbacks {
    /** 节点将要添加到层级的回调(预留 暂时未实现) */
    onWillAdd?: (node: Node, params: any) => void,

    /** 节点添加到层级以后的回调 */
    onAdded?: (node: Node, params: any) => void,

    /**
     * destroy之后回调
     */
    onRemoved?: (node: Node | null, viewParams: inf_ViewParams) => void,
    /** 
     * 注意：调用`delete`或`$delete`才会触发此回调，如果`this.node.destroy()`，该回调将直接忽略。
     * 
     * 如果指定onBeforeRemoved，则next必须调用，否则节点不会被正常删除。
     * 
     * 比如希望节点做一个FadeOut然后删除，则可以在`onBeforeRemoved`当中播放action动画，动画结束后调用next
     * 
     * */
    onBeforeRemove?: (node: Node, next: Function) => void
}

/** gui.popup.add 弹框层回调对象定义 */
export interface inf_PopViewParams extends inf_UICallbacks {
    /** 是否显示暗色背景 */
    modal?: boolean,

    /** 是否触摸背景关闭弹窗 */
    touchClose?: boolean,

    /** 控制暗色背景的透明度 默认为190*/
    opacity?: number;
}
/** 通用对话框的按钮配置 */
export interface inf_PopWindowButton {
    label: string,   //按钮文字
    click: Function, //按钮的点击事件
}

/** PopWindow 通用窗口数据传递配置*/
export interface inf_PopWindowParams {
    title: string,          //窗口标题名
    txt_title?: string,      //正文大标题
    txt_desc?: string,       //正文内容
    txt_fontSize?: number,   //标题文字大小
    dec_fontSize?: number,   //正文内容文字大小
    alignLeftTop?: boolean,   //正文是否从左上开始
    notshowClose?: boolean,   //不显示关闭按钮
    notAutoClickClose?: boolean,   //点击后不自动关闭
    buttonsMap?: Array<inf_PopWindowButton>,   //按钮配置队列
    web_url?: string,          //webview地址
    itemData?: Array<any>, //购买商品数据
    isGoodsContent?: boolean,//是否显示商品内容
}

/** 本类型仅供gui模块内部使用，请勿在功能逻辑中使用 */
export class inf_ViewParams {
    /** 界面唯一标识 */
    public uuid!: string;
    /** 分包包名 */
    public bundle: string = "resources";
    /** 预制路径 */
    public prefabPath!: string;
    /** 传递给打开界面的参数 */
    public params: any | null;
    /** 窗口事件 */
    public callbacks!: inf_UICallbacks | null;
    /** LayerUI事件 */
    public noticeToRoot!: inf_UICallbacks | null;
    /** 是否在使用状态 */
    public valid: boolean = true;
    /** 界面根节点 */
    public node: Node | null = null;
    /** 资源自动回收 */
    public isAutoRecover: boolean = false;
    /** 是否点击自动关闭 */
    public isClickSpanceClose: boolean = false;
}
/** 进入房间的缓存数据参数接口 */
export interface inf_GameIntoParams {
    /** 游戏ID */
    GameID: number;
    Level: number;
    TableID: number;
    /** 是否重连进桌 */
    isReconn?: boolean,
}
/** 界面登录时传递的参数 */
export interface inf_LoginViewInfo {
    /** access_token */
    access_token: any,
    /** 用户Uid */
    openId: any,
    /** 用户信息 */
    userinfo: any,
}
/** 订单记录 */
export interface inf_OrderRecord {
    id: any,
    order: any,
    reportData: any
}
/** 网络地址配置 */
export interface inf_AppUrlConf {
    /** 自定义命名 */
    Name: string,
    /** socket地址 */
    Socket: any,
    /** wb地址 */
    Web: any,
    /** 下载地址 */
    DownLoad?: string,
    /** H5地址 */
    H5?: string,
}
/** pb文件对应的序列 */
export interface inf_PBConf {
    /** pb文件路径 */
    FilePath: string,
    /** pb文件包名 */
    PackageName: string,
    /** pb文件解析/包装类 */
    Class?: any
}

/** Spine动画的添加创建 */
export interface inf_SpineAniCreate {
    /** 动画资源路径 */
    resConf: { bundle: string, path: string },
    /** 动画名 */
    aniName: string,
    /** 父节点 Node */
    parentNode?: Node,
    /** 帧位置 number */
    trackIndex?: number,
    /** 是否循环播放 */
    isLoop?: boolean,
    /** 是否预乘 */
    isPremult?: boolean,
    /** 要添加的位置 */
    toPos?: Vec3,
    /** skin:皮肤 */
    skin?: any,
    /** 动画开始的监听 */
    callStartFunc?: Function,
    /** 动画结束的监听 */
    callEndFunc?: Function,
    /** 一次循环结束的监听 */
    oneLoopEndcallFunc?: Function,
    /** 执行过程中的动作监听 */
    processCallFunc?: Function,
    /** 帧刷数量 值越大 刷新越快 不能超过当前最大帧率 */
    frameNum?: number,
}
/** 资源的加载 */
export interface inf_ResLoader {
    /** 包名 remote资源地址可为空 */
    bundle?: string,
    /** 资源路径或http路径 */
    path: string,
    /** 资源类型 例如 Prefab 或'.jpg' */
    resType: any,
    /** 回调函数 */
    callFunc?: Function,
    /** 是否重新加载 默认false 非必填 */
    isReload?: boolean,
}
/** 音乐/音效文件的播放 */
export interface inf_AudioPlay {
    /** 包名 remote资源地址可为空 */
    bundle?: string,
    /** 资源路径或http路径 */
    path: string,
    /** 是否循环播放 */
    isLoop?: boolean,
    /** 播放完成的监听(仅当 isLoop = false时有效) */
    callEndFunc?: Function,
}

/** 要添加的加载任务 */
export interface inf_PkgLoaderTaskAdd {
    /** 任务ID */
    taskID: any,
    /** 任务队列 */
    taskList: inf_PkgLoaderTaskList,
    /** 开始的回调 */
    startCallFunc?: Function,
    /** 更新的回调 */
    updateCallFunc?: Function,
    /** 完成的回调*/
    endCallFunc?: Function
}
/** 每一个任务队列 */
export interface inf_PkgLoaderTaskList {
    /** 是否加载pb */
    protobuf?: boolean,
    /** 加载的包 */
    package?: Array<string>,
    /** 预制体队列 */
    prefab?: Array<inf_GameResData>,
    /** 音效队列 */
    audio?: Array<inf_GameResData>,
    /** spine动画队列 */
    spine?: Array<inf_GameResData>,
}

/** 订单创建时的itemData参数 */
export interface inf_CreaterOrderMallItem {
    /** 商品分类， 热销、金豆、钻石、道具、装饰、角色等 */
    pageID?: number,
    /** 子标签页ID */
    childID?: number,
    /** 商品ID */
    goodsID: number,
    /** 支付方式ID */
    payID: number,
}

/** 支付参数 */
export interface inf_PayParams {
    /** 付费场景 */
    scene: any,
    /** 物品信息 */
    goodsInfo: any,
    /** 创建订单时的信息 */
    itemData: inf_CreaterOrderMallItem,
    /** 消费目的类型 0-给自己 1给好友 */
    costType?: number,
    /** 给谁 */
    toUid?: number,
    /** 其它附属 */
    ext?: object
}

/** 界面跳转参数 */
export interface inf_JumpViewParams {
    /** 要跳转的地址 */
    url: string,
    /** 失败跳转的回调 */
    errCallback?: Function,
    /** 即将成功跳转的回调 */
    sucCallback?: Function,
}
/** 点击上报的数据参数 */
export interface inf_ClickReport {
    /** 事件ID */
    eventID: any,
    /** 事件参数 */
    body?: any,
    /** 是否强行上报 */
    isForce?: boolean,
}
/** 获得物品 */
export interface inf_GetPropItem {
    /** 物品icon */
    icon?: string,
    /**物品名称 */
    name: string,
    /** 物品数量 */
    num: number,
    /** 加赠 */
    newAdd?: boolean
}
