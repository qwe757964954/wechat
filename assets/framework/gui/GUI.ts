/**
 * Name = GUI
 * URL = db://assets/framework/gui/GUI.ts
 * Time = Thu Apr 28 2022 12:19:38 GMT+0800 (中国标准时间)
 * Author = xueya
 *
 * Life: onLoad-->onEnable->start->update->lateUpdate->onDisable->onDestroy
 * 图形界面适配
 */

import { Camera, Enum, ResolutionPolicy, screen, sys, UITransform, Vec3, view, _decorator } from "cc";
import { AppEvent } from "../../config/AppEvent";
import { GameConfig, SystemConf } from "../../config/GameConfig";
import { BaseComponent } from "../vc/BaseComponent";

const { ccclass, menu, property } = _decorator;
/** 适配模式 */
export enum AdaptiveModel {
    None = 0,
    GUI = 1,
    Background = 2,
    Size = 3,
    Scale = 4,
}
/** 引擎对外接口 */
@ccclass('GUI')
export class GUI extends BaseComponent {

    @property({
        tooltip: "适配模式\nGUI:以根节点方式适配，大小与设计分辨率一致\nBackground:以背景图片方式适配，大小与设计分辨率一致\nSize:改变大小达到适配 \nScale:改变缩放达到适配",
        type: Enum(AdaptiveModel)
    })
    private adaptiveModel: AdaptiveModel = AdaptiveModel.None;
    /** 适配开关 */
    private isStartAdaptive = true;

    /** 界面层矩形信息组件 */
    public transform!: UITransform;
    /** 游戏二维摄像机 */
    public camera!: Camera;

    /** 设计是否为竖屏显示 */
    public Design_Portrait!: boolean;
    /** 窗口是否为竖屏显示 */
    public Window_Portrait!: boolean;
    /** 系统缩放因子 */
    public sysScaleNum: number = 1;
    /** 节点缩放因子 */
    public nodeScaleNum: number = 1;
    /** 当前适配模式 */
    public _resoulType = ResolutionPolicy.SHOW_ALL;
    /** 节点初始宽高 */
    private _width: number = 0;
    private _height: number = 0;
    /** 最终的设计分辨率大小 */
    private _finalWidth: number = 0;
    private _finalHeight: number = 0;
    /** 最终的缩放系数 */
    private _finalScaleX = 1;
    private _finalScaleY = 1;

    onLoad() {
        this.init();
    }

    /** 初始化引擎 */
    protected init() {
        this.transform = this.getComponent(UITransform)!;
        if (this.transform) {
            this._width = this.transform.width;
            this._height = this.transform.height;
        }
        this.adaptiveDesignResolution();
        this.refreshWindow();
    }
    /**override 初始化模块事件，子类需重写该方法 */
    protected onInitModuleEvent() {
        //适配设计分辨率
        this.addModelListener(AppEvent.SYS_WINDOW_ADAPTIVE, this.adaptiveDesignResolution);
        //刷新大小
        this.addModelListener(AppEvent.SYS_WINDOW_CHANGE, this.refreshWindow);
    }

    /** 适配设计分辨率 */
    public adaptiveDesignResolution() {
        //设计分辨率
        let dr = SystemConf.DEV_SIZE || { width: 1280, height: 720 };
        if (dr.width >= dr.height) {
            this.Design_Portrait = false;
        } else {
            this.Design_Portrait = true;
        }

        //物理像素
        let s = screen.windowSize;
        let rw = s.width;
        let rh = s.height;
        this._finalWidth = dr.width;
        this._finalHeight = dr.height;

        if ((rw / rh) >= 1) {//窗口横屏显示
            this.Window_Portrait = false;
            // console.log("窗口横屏显示");
        }
        else {//窗口竖屏显示
            this.Window_Portrait = true;
            // console.log("窗口竖屏显示");
        }
        if (this.Window_Portrait == true) {
            if (this.Design_Portrait == true) {
                if (dr.width / rw >= dr.height / rh) {//以屏幕宽度适配优先
                    this.sysScaleNum = dr.width / rw;
                    this._resoulType = ResolutionPolicy.FIXED_WIDTH;
                } else {
                    this.sysScaleNum = dr.height / rh;
                    this._resoulType = ResolutionPolicy.FIXED_HEIGHT;
                }
            } else {
                if (dr.width / rw >= dr.height / rh) {//以屏幕宽度适配优先
                    this.sysScaleNum = dr.width / rw;
                    this._resoulType = ResolutionPolicy.FIXED_WIDTH;
                } else {
                    this.sysScaleNum = dr.height / rh;
                    this._resoulType = ResolutionPolicy.FIXED_HEIGHT;
                }
            }
            //非浏览器使用
            if (sys.platform != sys.Platform.DESKTOP_BROWSER && sys.platform != sys.Platform.MOBILE_BROWSER) {
                this.sysScaleNum = dr.width / rw;
                this._resoulType = ResolutionPolicy.FIXED_WIDTH;
            }
        } else {
            if (this.Design_Portrait == true) {
                if (dr.width / rw >= dr.height / rh) {//以屏幕宽度适配优先
                    this.sysScaleNum = dr.height / rh;
                    this._resoulType = ResolutionPolicy.FIXED_HEIGHT;
                } else {
                    this.sysScaleNum = dr.width / rw;
                    this._resoulType = ResolutionPolicy.FIXED_WIDTH;
                }
            } else {
                if (dr.width / rw >= dr.height / rh) {//以屏幕宽度适配优先
                    this.sysScaleNum = dr.height / rh;
                    this._resoulType = ResolutionPolicy.FIXED_HEIGHT;
                } else {
                    this.sysScaleNum = dr.width / rw;
                    this._resoulType = ResolutionPolicy.FIXED_WIDTH;
                }
            }
            //非浏览器使用
            if (sys.platform != sys.Platform.DESKTOP_BROWSER && sys.platform != sys.Platform.MOBILE_BROWSER) {
                this.sysScaleNum = dr.height / rh;
                this._resoulType = ResolutionPolicy.FIXED_HEIGHT;
            }
        }
        let tLog = `设计是:${this.Design_Portrait == false ? "横屏" : "竖屏"},窗口是:${this.Window_Portrait == false ? "横屏" : "竖屏"}`;
        tLog = tLog + ` 适配策略: ${this._resoulType == ResolutionPolicy.FIXED_WIDTH ? "宽度" : this._resoulType == ResolutionPolicy.FIXED_HEIGHT ? "高度" : this._resoulType}优先`;
        tLog = tLog + ` 系统缩放因子:${this.sysScaleNum}`;
        tLog = tLog + ` 屏幕宽高: width:${s.width} height:${s.height}`;

        // console.log("GUI:适配： " + tLog)

        if (this._resoulType == ResolutionPolicy.FIXED_WIDTH) {
            this._finalWidth = dr.width;
            this._finalHeight = this._finalWidth * s.height / s.width;

            if (this.Design_Portrait == false && this.Window_Portrait == true) {
                this._finalHeight = dr.height;
            }

        } else if (this._resoulType == ResolutionPolicy.FIXED_HEIGHT) {
            this._finalHeight = dr.height;
            this._finalWidth = this._finalHeight * s.width / s.height;

            if (this.Design_Portrait == true && this.Window_Portrait == false) {
                this._finalWidth = dr.width;
            }

        }
        this._finalScaleX = dr.width / this._finalWidth;
        this._finalScaleY = dr.height / this._finalHeight;

        // console.log("GUI:适配宽高： " + `width:${this._finalWidth} height:${this._finalHeight}`)
        // console.log("GUI:适配系数： " + `width:${this._finalScaleX} height:${this._finalScaleY}`)

        //设置设计分辨率
        if (this.isStartAdaptive == false) {
            view.setDesignResolutionSize(dr.width, dr.height, ResolutionPolicy.FIXED_HEIGHT);
            GameConfig.instance.ResolutionPolicyType = ResolutionPolicy.FIXED_HEIGHT;
            return;
        }
        GameConfig.instance.ResolutionPolicyType = this._resoulType;
        view.setDesignResolutionSize(this._finalWidth, this._finalHeight, this._resoulType);
    }

    /** 刷新窗口大小 */
    private refreshWindow(event = null) {
        if (this.isStartAdaptive == false) {
            return;
        }
        // console.log("刷新节点大小:" + this.adaptiveModel)
        switch (this.adaptiveModel) {
            case AdaptiveModel.GUI:
                this.adaptiveGui();
                break;
            case AdaptiveModel.Background:
                this.adaptiveBackground();
                break;
            case AdaptiveModel.Size:
                this.adaptiveSize();
                break;
            case AdaptiveModel.Scale:
                this.adaptiveScale();
                break;
            default:
                break;
        }
    }
    /** 根节点适配 */
    public adaptiveGui() {
        if (!this.transform) {
            return;
        }
        this.transform.width = this._finalWidth;
        this.transform.height = this._finalHeight;

    }
    /** 背景图片适配 */
    public adaptiveBackground() {
        if (!this.transform) {
            return;
        }
        this.transform.width = this._finalWidth;
        this.transform.height = this._finalHeight;

    }

    /** 大小适配 */
    public adaptiveSize() {
        if (!this.transform) {
            return;
        }
        let realWidth = this._width * this._finalScaleX;
        let realHeight = this._height * this._finalScaleY;
        // console.log(`初始宽高:${this._width}${this._height} 结果宽高: ${realWidth}${realHeight}`)
        this.transform.width = realWidth;
        this.transform.height = realHeight;
    }
    /** 缩放适配 */
    public adaptiveScale() {
        this.node.scale = new Vec3(this._finalScaleX, this._finalScaleY, this.node.scale.z);
    }
}