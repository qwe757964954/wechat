/**
 * Name = ButtonTouchLong
 * URL = db://assets/framework/gui/button/ButtonTouchLong.ts
 * Time = Thu Apr 07 2022 13:02:05 GMT+0800 (中国标准时间)
 * Author = xueya
 * 长按按钮点击(触摸事件)
 */
import { Component, error, EventHandler, EventTouch, Node, Rect, UITransform, Vec3, _decorator } from "cc";

let { ccclass, property, menu } = _decorator;

/** ButtonTouchLong 回调时的状态 */
export const ButtonTouchLongStatus = {
    /** 开始点击(只有长按才有) */
    START: "START",
    /** 运行时(只有长按才有) */
    RUN: "RUNNING",
    /** 点击结束 */
    END: "END",
}

@ccclass("ButtonTouchLong")
//方便编辑器识别的菜单项目
@menu('gui/button/ButtonTouchLong')
export class ButtonTouchLong extends Component {
    @property({
        tooltip: "按钮是否可交互,这一项未选中时，按钮处于事件禁用状态"
    })
    private interactable: boolean = true;

    @property({
        tooltip: "长按时间（秒）等于0则为点击",
        min: 0,
    })
    private touchlongtime: number = 1;

    @property({
        tooltip: "长按时是否只回调一次",
        visible: function () { return this.touchlongtime > 0 }
    })
    private onceLongCallback: boolean = false;

    @property({
        tooltip: "长按的回调监听函数",
        type: EventHandler,
        visible: function () { return this.touchlongtime > 0 }
    })
    private clickLongFunc = new EventHandler();

    @property({
        tooltip: "点击的回调监听函数",
        type: EventHandler
    })
    private clickFunc = new EventHandler();

    /** 自定义点击回调 */
    private _touchHandler: Function = null;
    /** 自定义点击传递数据 */
    private _touchParam = null;

    /** 是否处于长按状态 */
    private _isTouchLong = false;
    /** 当前长按的时间 */
    private _currowPassTime = 0;
    /** 当前按下的事件 */
    private _currowEvent: EventTouch = null;

    /** 当前节点包围盒 */
    private _currowBoxRect: Rect = null;
    /** 是否支持回调 */
    private _isCanCallback: boolean = false;
    /** 是否加载完毕 */
    private _isOnload: boolean = false;
    /** 是否注册了事件 */
    private _isRegEvent: boolean = false;

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
        this.updateRegEventState();
    }
    /**
     * 按钮是否可交互
     */
    get Interactable(): boolean {
        return this.interactable;
    }
    /** 设置是否可以回调(只在按下过程中起作用) */
    set CanCallback(bool: boolean) {
        this._isCanCallback = (bool == false ? false : true);
    }

    onLoad() {
        this._isOnload = true;
        this.regTouchEvent();
    }
    /** 更新注册事件的状态 */
    updateRegEventState() {
        if (!this._isOnload) {
            return;
        }
        if (this.interactable == true) {
            if (this._isRegEvent == false) {
                this.regTouchEvent();
            }
        } else {
            if (this._isRegEvent == true) {
                this.unRegTouchEvent();
            }
        }
    }
    /** 注册定义事件 */
    protected regTouchEvent() {
        if (!this.node) {
            return;
        }
        this.node.on(Node.EventType.TOUCH_START, this.onTouchtStart, this);
        this.node.on(Node.EventType.TOUCH_MOVE, this.onTouchtMove, this);
        this.node.on(Node.EventType.TOUCH_END, this.onTouchEnd, this);
        this.node.on(Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
        this._isRegEvent = true;
    }
    /** 卸载注册事件 */
    protected unRegTouchEvent() {
        if (!this.node || !this.node.isValid) {
            return;
        }
        this.node.off(Node.EventType.TOUCH_START, this.onTouchtStart, this);
        this.node.off(Node.EventType.TOUCH_MOVE, this.onTouchtMove, this);
        this.node.off(Node.EventType.TOUCH_END, this.onTouchEnd, this);
        this.node.off(Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
        this._isRegEvent = false;
    }
    /**
     * 公开:设置自定义点击函数
     * @param findNode 要绑定的函数所在的组件类绑定的节点
     * @param component 要绑定的函数所在的组件
     * @param handler 要绑定的函数
     * @param customEventData 自定义传递数据
     */
    public setCustomEventHandler(findNode: Node = null, component: string = null, handler: string = null, customEventData: string = null) {
        this.clickLongFunc.target = findNode;
        this.clickLongFunc.component = component;
        this.clickLongFunc.handler = handler;
        this.setCustomEventData(customEventData);
    };
    /**
     * 公开:设置自定义点击传递数据
     * @param customEventData 自定义传递数据
     */
    public setCustomEventData(customEventData = null) {
        this.clickLongFunc.customEventData = customEventData;
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

    /** 触摸开始 */
    onTouchtStart(event: EventTouch) {
        this._currowEvent = event;
        this._currowPassTime = 0;
        this._currowBoxRect = null;
        this._isCanCallback = true;
        this._isTouchLong = false;

        let uiTransform = this.node.getComponent(UITransform);
        if (uiTransform) {
            //计算滑动的矩形区域
            let width = Math.abs(uiTransform.width) * Math.abs(this.node.scale.x);
            let height = Math.abs(uiTransform.height) * Math.abs(this.node.scale.y);
            let worldPos = new Vec3();

            this.node.getWorldPosition(worldPos);
            // 矩形左下点的坐标。
            let nodeLeftBottomPos = {
                x: worldPos.x,
                y: worldPos.y
            }
            // console.log("世界坐标:", worldPos)
            if (uiTransform.anchorX < 0 || uiTransform.anchorX > 1 || uiTransform.anchorY < 0 || uiTransform.anchorY > 1) {
                return;
            }
            nodeLeftBottomPos.x = nodeLeftBottomPos.x - width * uiTransform.anchorX;
            nodeLeftBottomPos.y = nodeLeftBottomPos.y - height * uiTransform.anchorY;
            //矩形盒子大小
            this._currowBoxRect = new Rect(nodeLeftBottomPos.x, nodeLeftBottomPos.y, width, height);
        }

    }

    /** 触摸移动 */
    onTouchtMove(event: EventTouch) {
        this._currowEvent = event;
        this.checkRect();
    }
    /** 触摸结束 */
    onTouchEnd(event: EventTouch) {
        if (this._currowPassTime > this.touchlongtime) {
            event.propagationStopped = true;
        }
        //说明可以触发点击
        let oldEvent = this._currowEvent;
        let isTouchLong = this._isTouchLong;

        this._currowEvent = event;
        this.checkRect();

        this._currowEvent = null;
        this._isTouchLong = false;
        this._currowPassTime = 0;
        if (isTouchLong == false && oldEvent != null && this._isCanCallback == true) {//非长按
            this.onClickCallback(event, ButtonTouchLongStatus.END);
        }
        if (isTouchLong == true && oldEvent != null && this.onceLongCallback == false) {//最后一次长按
            this.onLongClickCallback(event, ButtonTouchLongStatus.END);
        }
        this._isCanCallback = false;
    }
    /** 移除长按 */
    removeTouchLong() {
        this._currowEvent = null;
        this._isTouchLong = false;
        this._isCanCallback = false;
    }

    /** 引擎更新事件 */
    update(dt: number) {
        if (this._currowEvent && this.interactable == true && this._isCanCallback == true) {
            this._currowPassTime = this._currowPassTime + dt;
            if (this.touchlongtime <= 0) {
                this._isTouchLong = false;
                this.onClickCallback(this._currowEvent, ButtonTouchLongStatus.END);
                this.removeTouchLong();
                return;
            }
            //以下长按
            if (this._currowPassTime >= this.touchlongtime) {
                let status = ButtonTouchLongStatus.RUN;
                if (this._isTouchLong == false) {
                    status = ButtonTouchLongStatus.START;
                }
                if (this.onceLongCallback == true) {
                    status = ButtonTouchLongStatus.END;
                }

                this._isTouchLong = true;
                this.onLongClickCallback(this._currowEvent, status);
                if (this.onceLongCallback == true) {
                    this.removeTouchLong();
                }
            }
        }
    }
    /** 检查矩形区域 */
    checkRect() {
        if (this._currowEvent) {
            let touchWorldPos = this._currowEvent.touch.getUILocation();
            if (this._currowBoxRect) {
                if (this._currowBoxRect.contains(touchWorldPos) == false) {
                    this._isCanCallback = false;
                }
            }

        }
    }
    /** 长按的回调 */
    onLongClickCallback(event: EventTouch, status = null) {
        // console.log("长按状态:", status);
        if (this._isCanCallback == false || this.interactable == false) {
            return;
        }
        this.clickLongFunc?.emit([event, status, this.clickLongFunc?.customEventData])
        if (this._touchHandler) {
            this._touchHandler(event, status, this._touchParam);
        }
    }
    /** 点击的回调 */
    onClickCallback(event: EventTouch, status = null) {
        // console.log("点击状态:", status);
        if (this._isCanCallback == false || this.interactable == false) {
            return;
        }
        this.clickFunc?.emit([event, status, this.clickFunc?.customEventData])
        if (this._touchHandler) {
            this._touchHandler(event, status, this._touchParam);
        }
    }

    onDestroy() {
        this._currowEvent = null;
        this.unRegTouchEvent();
    }

}
