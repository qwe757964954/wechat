/**
 * Name = ButtonSimple
 * URL = db://assets/framework/gui/button/ButtonSimple.ts
 * Time = Thu Apr 07 2022 13:02:05 GMT+0800 (中国标准时间)
 * Author = xueya
 * 延迟按钮点击(触摸事件)
 */
import { Component, error, EventHandler, EventTouch, game, Node, _decorator } from "cc";

const { ccclass, property, menu } = _decorator;

@ccclass("ButtonSimple")
//方便编辑器识别的菜单项目
@menu('gui/button/ButtonSimple')
export default class ButtonSimple extends Component {
    @property({
        tooltip: "是否只能触发一次"
    })
    private onlyOnce: boolean = false;

    @property({
        tooltip: "每次触发间隔(毫秒)"
    })
    private delay_time: number = 500;

    @property({
        tooltip: "按钮是否可交互,这一项未选中时，按钮处于事件禁用状态"
    })
    private interactable: boolean = true;

    @property({
        tooltip: "点击回调监听函数",
        type: EventHandler
    })
    private clickFunc = new EventHandler();
    //点击次数
    private touchCount = 0;

    private touchtEndTime = 0;
    /** 自定义点击回调 */
    private _touchHandler: Function = null;
    /** 自定义点击传递数据 */
    private _touchParam = null;

    onLoad() {
        this.regTouchEvent();
    }
    /** 注册定义事件 */
    public regTouchEvent() {
        if (!this.node) {
            return;
        }
        this.node.on(Node.EventType.TOUCH_START, this.onTouchtStart, this);
        this.node.on(Node.EventType.TOUCH_END, this.onTouchEnd, this);
        this.node.on(Node.EventType.TOUCH_CANCEL, this.onTouchCancel, this);
    }
    /**
     * 按钮是否可交互
     * @param bool 
     */
    set Interactable(bool: boolean) {
        if (typeof (bool) != "boolean") {
            error(`setInteractable 参数类型传递错误 期待:boolean 结果:${typeof (bool)}`)
            return;
        }
        this.interactable = bool == null ? true : bool;
    }
    /**
     * 按钮是否可交互
     */
    get Interactable(): boolean {
        return this.interactable;
    }
    /**
     * 公开:设置自定义点击函数
     * @param findNode 要绑定的函数所在的组件类绑定的节点
     * @param component 要绑定的函数所在的组件
     * @param handler 要绑定的函数
     * @param customEventData 自定义传递数据
     */
    public setCustomEventHandler(findNode: Node = null, component: string = null, handler: string = null, customEventData: string = null) {
        this.clickFunc.target = findNode;
        this.clickFunc.component = component;
        this.clickFunc.handler = handler;
        this.setCustomEventData(customEventData);
    };
    /**
     * 公开:设置自定义点击传递数据
     * @param customEventData 自定义传递数据
     */
    public setCustomEventData(customEventData = null) {
        this.clickFunc.customEventData = customEventData;
        this._touchParam = customEventData;
    };

    /**
     * 公开:设置监听函数
     * @param callback 要绑定的函数
     * @param param 要传递的参数
     */
    public addTouchEventListener(callback: Function = null, param = null) {
        this._touchHandler = callback;
        this.setCustomEventData(param);
    }
    /** 公开：设置只能点击一次 */
    public setOnlyOnce(isOnlyonce: boolean) {
        this.onlyOnce = isOnlyonce || false
    }
    /** 公开：设置延迟时间 单位:毫秒 */
    public set delayTime(time: number) {
        this.delay_time = time || 500
    }

    /** 触摸开始 */
    protected onTouchtStart(event: EventTouch) {
    }

    /** 触摸按下 */
    protected onTouchEnd(event: EventTouch) {
        if (this.onlyOnce) {
            if (this.touchCount > 0) {
                event.propagationStopped = true;
                return;
            }
            this.touchCount++;
        }

        // 防连点500毫秒触发一次事件
        if (game.totalTime - this.touchtEndTime >= this.delay_time) {
            if (this.interactable) {
                this.clickFunc?.emit([event, this.clickFunc?.customEventData])
                if (this._touchHandler) {
                    this._touchHandler(event, this._touchParam);
                }
            }
        }
        if (this.touchtEndTime && game.totalTime - this.touchtEndTime < this.delay_time) {
            event.propagationStopped = true;
        } else {
            this.touchtEndTime = game.totalTime;
        }
    }
    /** 触摸结束 */
    protected onTouchCancel(event: EventTouch) {

    }
    onDestroy() {
        this.node.off(Node.EventType.TOUCH_START, this.onTouchtStart, this);
        this.node.off(Node.EventType.TOUCH_END, this.onTouchEnd, this);
        this.node.off(Node.EventType.TOUCH_CANCEL, this.onTouchCancel, this);
    }
}
