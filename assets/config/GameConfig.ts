/**
 * Name = Config
 * URL = db://assets/config/Config.ts
 * Time = Wed Apr 06 2022 16:07:18 GMT+0800 (中国标准时间)
 * Author = xueya
 *
 */

import { EventKeyboard, game, Game, input, Input, KeyCode, ResolutionPolicy, sp, sys, view } from "cc";
import { EDITOR } from "cc/env";
import { GCache } from "../cache/GCache";
import { inf_AppUrlConf } from "../framework/InterfaceDefines";
import { LocalStorage } from "../framework/LocalStorage";
import { EventManager } from "../framework/manager/EventManager";
import { Network, NetworkEvent } from "../framework/network/NetState";
import { Utils } from "../framework/Utils";
import { Platform } from "../platform/Platform";
import { GSocket } from "../proj/gnet/GSocket";
import { AppEvent } from "./AppEvent";
import { GConstants, StoreKey } from "./GameConstant";
import { UIID } from "./UIConfig";

/** 系统应用配置 */
export const SystemConf = {
    //设计分辨率
    DEV_SIZE: { width: 1280, height: 720 },
    //微信平台右边UI空隙
    WX_RIGHT_SPANCE_X: 100,
}
/** 游戏内的开关配置 */
export const GameSwitchConf = {
    // HeadUpload: false, // true: 屏蔽头像上传
    CustomizeChatSwitch: false, // true：屏蔽自定义聊天入口
    // NickSwitch: false, // true：昵称过滤
    // NickModify: true, // 是否允许修改昵称
    // slotGameSwitch : true, // 小游戏是否关闭
    // ReportSwitch: false, // true：开启点击失败上报，false：默认不上报
    // LocationSwitch: false, // 定位相关功能
    GameOverShare: true,         //游戏结算分享开关

}

/**应用显隐 */
export enum APPState {
    SHOW,
    HIDE,
}

/** 网络环境 */
export enum GameNetType {
    NET_TEST,  //测试环境
    NET_DEV, //开发环境
    NET_ONLINE, //外网
}

/**客户端设备信息 */
export const ClientInfo = {
    /** 调试开关 */
    DEBUG: true,
    /** 当前服务器 */
    CurrowServer: GameNetType.NET_ONLINE,
    /** 版本 */
    AppVer: "1.0.1",
    /** 大厅版本号 */
    HallVer: 1978,

    /** 小程序APPID */
    WX_AppID: "wx7f5020ca94d64ab1",
    /** 米大师侧注册的应用ID */
    WX_PayOfferId: "1450087932",
    /** 支付环境（0:正式 1:沙箱） */
    WX_PayEnv: 0,

    /** 大渠道ID */
    ChannelId: "",
    /** 渠道Key */
    ChannelKey: "",

    /** 区域ID */
    RegionId: 0,
    /** 激励视频广告ID */
    AdVideoUnitId: "",

    /** 平台ID */
    get PlatFormAppID() {
        if (Platform.isIOS()) {
            return 45101000;
        }
        return 45103000;
    },
    /**操作系统版本*/
    get SysVer() {
        return Platform._platformVer
    },
    /**物理网卡地址*/
    get MachineId() {
        return Platform._Machineid
    },
    /**物理网卡型号*/
    get MachineModel() {
        return Platform._MachineModel
    },
    /**设备机型*/
    get PhoneModel() {
        return Platform._PhoneModel
    },
    /**设备ID*/
    get Guid() {
        return Platform._Guid
    },
    /**设备imsi*/
    get IMSI() {
        return Platform._IMSI
    },
    /**设备iccid*/
    get ICCID() {
        return Platform._ICCID
    },
    /**设备iMEI*/
    get IMEI() {
        return Platform._IMEI
    },

    /**设备SSAID*/
    get SSAID() {
        return Platform._Guid
    },

    /**运营商类型*/
    get PhoneCardType() {
        return Platform._PhoneCardType
    },
    /**网络类型*/
    get NetWorkType() {
        return Platform.NetWorkType
    },
    /**客户端安全码【安卓客户端必填】*/
    get SignDeviceId() {
        return ""
    },
    /**客户端安全码(针对物理网卡地址)*/
    get SignMacAddress() {
        return ""
    },
    /**客户端安全码(针对Guid)*/
    get SignGuid() {
        return ""
    },
    /**iOS厂商ID*/
    get FactoryId() {
        return ""
    },
    /**包名*/
    get BundleId() {
        return ""
    },

}

/**应用配置 */
export class GameConfig {

    private static _instance = null;
    public static get instance(): GameConfig {
        if (!this._instance || this._instance == null) {
            this._instance = new GameConfig();
            this._instance.initInput()
        }
        return this._instance;
    }

    /** 地址配置 */
    public static ServerUrlConf: { [key: number]: inf_AppUrlConf } = {
        /** 测试服 */
        [GameNetType.NET_TEST]: {
            /** 自定义命名 */
            Name: "测试服",
            /** Web地址 */
            Web: "http://192.168.201.78/dfqp/index.php",
            /** socket */
            Socket: "ws://192.168.203.219:10102",
        },
        /** 预发布 */
        [GameNetType.NET_DEV]: {
            /** 自定义命名 */
            Name: "预发布",
            /** Web地址 */
            Web: "http://192.168.201.78/dfqp/index.php",
            /** socket */
            Socket: "ws://192.168.203.219:10102",
        },
        /** 正式服 */
        [GameNetType.NET_ONLINE]: {
            /** 自定义命名 */
            Name: "正式服",
            /** 下载文件地址 */
            DownLoad: "https://dfqppic.266.com/dfqp/wechatgame/",
            /** Web地址 */
            Web: "https://mvsnspus01.ifere.com/ddfqp/index.php",
            /** socket */
            Socket: "wss://dfnewac01.ifere.com/",
        }
    }
    /** 游戏帧率 */
    private _AppFPS = 60;
    /** 应用显示状态 */
    private _ApplicationState: APPState = APPState.SHOW;
    /** 适配模式 */
    private _ResolutionPolicyType = ResolutionPolicy.UNKNOWN;
    /** 网络状态 */
    public NetWorkState = Network.instance.state;

    //应用显示状态
    set ApplicationState(state: APPState) {
        this._ApplicationState = state
    }
    //获取应用显示状态
    get ApplicationState() {
        return this._ApplicationState
    }
    /** 设置适配模式 */
    set ResolutionPolicyType(type) {
        this._ResolutionPolicyType = type;
    }
    //获取适配模式
    get ResolutionPolicyType() {
        return this._ResolutionPolicyType;
    }
    /** 获取当前网络地址配置 */
    get AppUrlConf(): inf_AppUrlConf {
        return GameConfig.ServerUrlConf[ClientInfo.CurrowServer];
    }
    /** 设置游戏帧率 */
    set FPS(num: number) {
        this._AppFPS = num;
        // this._AppFPS = 59;
        // game.frameRate = this._AppFPS;
    }
    /** 设置游戏帧率 */
    get FPS() {
        return this._AppFPS;
    }

    /** 是否线上 */
    isOnlineServer(): boolean {
        return ClientInfo.CurrowServer == GameNetType.NET_ONLINE;
    }

    /** 初始化基础事件监听 */
    initInput() {
        this.FPS = this._AppFPS;

        this.clearAllListener();
        /** 系统后台事件 */
        game.on(Game.EVENT_HIDE, function () {
            GameConfig.instance.ApplicationState = APPState.HIDE

            EventManager.dispatch(AppEvent.SYS_SHOW_OR_HIDE, GameConfig.instance.ApplicationState)
        })
        /** 系统前台事件 */
        game.on(Game.EVENT_SHOW, function () {
            GameConfig.instance.ApplicationState = APPState.SHOW
            EventManager.dispatch(AppEvent.SYS_SHOW_OR_HIDE, GameConfig.instance.ApplicationState)
        })
        /** 按键监听 */
        if (sys.platform == sys.Platform.DESKTOP_BROWSER) {
            input.on(Input.EventType.KEY_DOWN, this.onkeyDownCallback, this);
        }
        /** 网络名称变化 */
        game.on(NetworkEvent.CHANGE_NAME, function () {
            EventManager.dispatch(AppEvent.SYS_NET_CHANGE_NAME, Network.instance.name)
        })
        /** 网络状态变化 */
        game.on(NetworkEvent.CHANGE_STATE, function () {
            EventManager.dispatch(AppEvent.SYS_NET_CHANGE_STATE, Network.instance.state)
        })
        /** 窗口尺寸大小变化 */
        view.setResizeCallback(() => {
            EventManager.dispatch(AppEvent.SYS_WINDOW_ADAPTIVE);
            EventManager.dispatch(AppEvent.SYS_WINDOW_CHANGE);
        })

    }
    /** 重连游戏 */
    toReqConnectRoom() {
        if (!GCache.User || GCache.User.isLoginSuccesed() == false) {
            GCache.User.setLoginState(0);
            GSocket.instance.closeConnect()
            EventManager.dispatch(AppEvent.LOGIN_GOTO_SHOW);
            return;
        }
        //设置缓存数据
        let body = {
            GameID: GCache.Desk.getCurGameID(),
            Level: GCache.Desk.getCurLevelID(),
            TableID: GCache.Desk.getCurTableID(),
            isReconn: true,
        };
        GCache.SelectGame.intoGameData = body;
        GCache.User.LoginRoomState = false;
        //加载游戏场景
        EventManager.dispatch(AppEvent.GAME_GOTO_SHOW)
    };
    //按键监听
    onkeyDownCallback(event: EventKeyboard) {
        console.log(`***********按键监听 keyCode:${event.keyCode}********`);
        switch (event.keyCode) {
            case KeyCode.F1:
                EventManager.dispatch(AppEvent.NET_REQ_GOODS_INFO, { scene: 1 })
                break;


            case KeyCode.F2:
                EventManager.dispatch(AppEvent.NET_REQ_BANKRUPT_GIFT_CONF, 2000, 12)
                //请求破产线
                EventManager.dispatch(AppEvent.NET_REQ_BANKRUPT_CONFIG);
                EventManager.dispatch(AppEvent.VIEW_UI_OPEN, UIID.BankupGift);
                break;
            case KeyCode.F3:
                EventManager.dispatch(AppEvent.NET_REQ_GOODS_INFO, { scene: GConstants.GoodsListID.limitPack })
                break;

            case KeyCode.F5: //请求重连
                this.toReqConnectRoom();
                break;
            case KeyCode.F6: //请求重连
                // EventManager.dispatch(DGZEvent.GAME_OPTION_SHOW, DGZConstant.OPT_STATE.START_KOUDI, null)
                break;

            case KeyCode.ESCAPE: //踢到登录
                this.__toForwardLogin();
                break;
            default:
                break;
        }
    }

    /** 跳转到登录 */
    private __toForwardLogin() {
        this.print("---跳转到登录---")
        LocalStorage.set(StoreKey.LOGIN_LAST_CHECK_AGREE, false);
        LocalStorage.clear();
        GCache.User.setLoginState(0);
        GSocket.instance.closeConnect()
        EventManager.dispatch(AppEvent.LOGIN_GOTO_SHOW);
    }
    //清理事件监听
    clearAllListener() {
        game.off(Game.EVENT_HIDE);
        game.off(Game.EVENT_SHOW);
        game.off(NetworkEvent.CHANGE_STATE);
        game.off(NetworkEvent.CHANGE_NAME);
        if (sys.platform == sys.Platform.DESKTOP_BROWSER) {
            input.off(Input.EventType.KEY_DOWN);
        }
    }

    //当前类日志输出
    public print = function (...args: any[]) {
        console.log(`【${this._className}】`, ...args);
    }
    //当前类日志输出
    public dump = function (arg1, args2 = null) {
        if (!args2) {
            args2 = "打印输出 :"
        }
        this.print(args2)
        if (sys.platform == sys.Platform.DESKTOP_BROWSER) {
            console.table(arg1);
        } else {
            Utils.dump(arg1);
        }
    }


}

if (EDITOR) {
    // 重写update方法 达到在编辑模式下 自动播放动画的功能
    sp.Skeleton.prototype['update'] = function (dt) {
        if (EDITOR) {
            ['engine']["_animatingInEditMode"] = 1;
            ['engine']["animatingInEditMode"] = 1;
        }
        if (this.paused) return;
        dt *= this.timeScale * sp['timeScale'];
        if (this.isAnimationCached()) {
            // Cache mode and has animation queue.
            if (this._isAniComplete) {
                if (this._animationQueue.length === 0 && !this._headAniInfo) {
                    let frameCache = this._frameCache;
                    if (frameCache && frameCache.isInvalid()) {
                        frameCache.updateToFrame();
                        let frames = frameCache.frames;
                        this._curFrame = frames[frames.length - 1];
                    }
                    return;
                }
                if (!this._headAniInfo) {
                    this._headAniInfo = this._animationQueue.shift();
                }
                this._accTime += dt;
                if (this._accTime > this._headAniInfo.delay) {
                    let aniInfo = this._headAniInfo;
                    this._headAniInfo = null;
                    this.setAnimation(0, aniInfo.animationName, aniInfo.loop);
                }
                return;
            }
            this._updateCache(dt);
        } else {
            this._updateRealtime(dt);
        }
    }
}
