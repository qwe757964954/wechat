
import { Node, ScrollView, _decorator } from 'cc';
import { AppEvent } from '../../../config/AppEvent';
import { AppSound } from '../../../config/AppSound';
import { Utils } from '../../../framework/Utils';
import { EventManager } from '../../../framework/manager/EventManager';
import { BaseComponent } from '../../../framework/vc/BaseComponent';

const { ccclass, property } = _decorator;

/**
 * Name = gameRuleDialogPrefabCtr
 * URL = db://assets/package/login/scripts/gameRuleDialogPrefabCtr.ts
 * Time = Thu Aug 04 2022 17:12:23 GMT+0800 (中国标准时间)
 * Author = xueya
 *
 * Life: onLoad-->onEnable->start->update->lateUpdate->onDisable->onDestroy
 * 
 * 用户协议和隐私政策
 */

@ccclass('gameRuleDialogPrefabCtr')
export class gameRuleDialogPrefabCtr extends BaseComponent {
    //滚动条容器
    @property({ tooltip: "滚动条容器", type: Node })
    scrollowContent: Node = null!;

    //内容节点1
    @property({ tooltip: "内容节点1", type: Node })
    nodeContent1: Node = null!;
    //内容节点2
    @property({ tooltip: "内容节点2", type: Node })
    nodeContent2: Node = null!;

    //内容列表
    private _contentList: Node[] = null;

    //当前选择tab
    private _curSeletedTab: number = 0;
    
    onLoad() {
        this.initData();
        this.initView();
        this.updateView();
    };
    start() {
    }

    initData() {
        
    }

    initView() {
        this._contentList = [this.nodeContent1, this.nodeContent2];
        this._curSeletedTab = 0;
    }

    /** 更新界面 */
    updateView() {
        this._contentList.forEach((value, index, array) => {
            value.active = index == this._curSeletedTab;
        });
        this.scrollowContent.getComponent(ScrollView).scrollToTop(0.01, false);
    }

    onClickItem(event: Event, customEventData: string) {
        this._curSeletedTab = Utils.number_valueOf(customEventData, 0)
        this.updateView();
    }

    //点击了取消/关闭
    onClickCancel() {
        EventManager.dispatch(AppEvent.SYS_PLAY_EFFECT, AppSound.CommClick);
        this.node.destroy();
    }

    //销毁
    onDestroy() {

    };

}

