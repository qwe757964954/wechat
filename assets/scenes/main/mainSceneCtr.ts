import { Node, setDisplayStats, _decorator } from 'cc';
import { DEBUG } from 'cc/env';
import { AppEvent } from '../../config/AppEvent';
import { APPState, GameConfig } from '../../config/GameConfig';
import { GConstants } from '../../config/GameConstant';
import { UIConfigData } from '../../config/UIConfig';
import { LayerManager } from '../../framework/layer/LayerManager';
import { EventManager } from '../../framework/manager/EventManager';
import { SchedulerManager } from '../../framework/manager/SchedulerManager';
import { Network } from '../../framework/network/NetState';
import { BaseComponent } from '../../framework/vc/BaseComponent';
import { Platform } from '../../platform/Platform';
import { GlobalHeadCmdBinding } from '../../proj/gnet/GlobalCMD';
import { GPBWriteAndRead } from '../../proj/gnet/GPBWriteAndRead';
const { ccclass, property, menu } = _decorator;



/**
 * Name = mainSceneCtr
 * URL = db://assets/launcher/mainSceneCtr.ts
 * Time = Sat Apr 02 2022 17:39:10 GMT+0800 (中国标准时间)
 * Author = xueya
 *
 * Life: onLoad-->onEnable->start->update->lateUpdate->onDisable->onDestroy
 */

@ccclass('mainSceneCtr')

//方便编辑器识别的菜单项目
@menu('scenes/mainSceneCtr')

export class mainSceneCtr extends BaseComponent {

    //游戏根节点
    @property(Node)
    gui: Node = null!;

    //bg
    @property(Node)
    bg: Node = null!;

    //logo
    @property(Node)
    logo: Node = null!;


    nextScene: string;

    onLoad() {
        SchedulerManager.unscheduleAll();
        //通知:sys周期变化
        EventManager.dispatch(AppEvent.SYS_APP_LIFE, GConstants.AppRunLife.MainScence);
        EventManager.dispatch(AppEvent.SYS_SHOW_OR_HIDE, APPState.SHOW)
        this.bg.active = true
        this.logo.active = true
        this.initBase();
        this.nextScene = "runScene"
        //预加载
        // director.preloadScene(this.nextScene);
    };

    start() {
        LayerManager.reload(this.gui)
        this.enterGameScene();

    };

    //销毁
    onDestroy() {
    };
    //进入场景
    enterGameScene() {
        EventManager.dispatch(AppEvent.VIEW_SCENE_TO_CHANGE, {
            next: this.nextScene,
            success: () => {
            },
            fail: (name: string) => {
                console.log(`进入场景${name}失败`)
            }
        })
    };

    //初始化基础配置
    initBase() {
        /**设置FPS是否显示 */
        if (DEBUG) {
            setDisplayStats(false);
        };
        Platform.initBase();
        Network.instance;
        GameConfig.instance;
        LayerManager.initUIConfig(UIConfigData)
        GPBWriteAndRead.Write.initCommonCmd(GlobalHeadCmdBinding, true)
        GPBWriteAndRead.Read.initCommonCmd(GlobalHeadCmdBinding, true)
    }
}
