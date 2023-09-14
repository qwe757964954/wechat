
import { Label, Node, _decorator } from 'cc';
import { GCache } from '../../../cache/GCache';
import { AppEvent } from '../../../config/AppEvent';
import { AppSound } from '../../../config/AppSound';
import { GConstants } from '../../../config/GameConstant';
import { GameRes } from '../../../config/GameRes';
import { GameTxt } from '../../../config/GameTxt';
import { Utils } from '../../../framework/Utils';
import { EventManager } from '../../../framework/manager/EventManager';
import { BaseComponent } from '../../../framework/vc/BaseComponent';
import { Platform } from '../../../platform/Platform';
const { ccclass, property, menu } = _decorator;

/**
 * Name = friendPrefabCtr
 * URL = db://assets/package/hall/scripts/friendPrefabCtr.ts
 * Time = Tue Sep 13 2022 15:55:28 GMT+0800 (中国标准时间)
 * Author = Tomoe
 * 好友列表
 * Life: onLoad-->onEnable->start->update->lateUpdate->onDisable->onDestroy
 */

@ccclass('friendPrefabCtr')
//方便编辑器识别的菜单项目
@menu('prefab/activity/friendPrefabCtr')
export class friendPrefabCtr extends BaseComponent {

    //界面按钮父节点
    @property({ tooltip: "界面按钮父节点", type: Node })
    private sceneBtnLayer: Node | null = null;


    //搜索框
    @property({ tooltip: "搜索框", type: Label })
    private labelSearchInput: Label | null = null;

    //好友列表界面
    @property({ tooltip: "好友列表界面", type: Node })
    private frdListScene: Node | null = null;

    //添加好友提示
    @property({ tooltip: "添加好友提示", type: Node })
    private btnAddTip: Node | null = null;


    //用户好友条-添加父节点
    @property({ tooltip: "用户好友条-添加父节点", type: Node })
    private frdListView: Node | null = null;

    //用户好友条-克隆
    @property({ tooltip: "用户好友条-克隆", type: Node })
    private nodeUserItem: Node | null = null;


    //界面节点缓存
    sceneLayer = null;

    //界面选中
    sceneChoice: number = 0;
    /** 好友列表信息 */
    _friendList = [];
    /** 好友最大数列 */
    _maxFriendNum = 120;
    /** 数据域UI界面 */
    _cloundUIKey = "friendList";

    onLoad() {
        this.nodeUserItem.active = false;
        this.sceneLayer = {
            0: this.frdListScene,
        }
        this.sceneChoice = 0;
        this.showView();
    };

    start() {

    };


    showView() {
        this.updateShowBtn();
        this.updateSceneShow();
        this.refreshFrdList();
    }
    /** 刷新列表 */
    refreshFrdList() {
        if (!this.node || this.node.isValid == false) {
            return
        }
        this.frdListView.active = true;
        this.btnAddTip.active = Platform.WxAuthSettingFriends != 1;
        if (Platform.WxAuthSettingFriends == 1) {
            let self = this;
            GCache.User.getCloudStorageSaveList((resParam) => {
                Platform.setPlatformCloudStorage(resParam);
                let data = {}
                data["UIKey"] = self._cloundUIKey;
                data["reloadUI"] = true;
                data["param"] = GCache.User.getCloudStorageParam();
                Platform.postMessage(data);
            })

        } else if (Platform.WxAuthSettingFriends == -1) {
            EventManager.dispatch(AppEvent.SYS_TOAST_TIP, { content: "tip:已拒绝好友授权" })
        }
    }

    //刷新选中界面按钮
    updateShowBtn() {
        let len = this.sceneBtnLayer.children.length;
        for (let i = 0; i < len; i++) {
            let node = this.sceneBtnLayer.children[i];
            let selectDot = node.getChildByName("img_dot_selected")
            let selectImg = node.getChildByName("img_selected")
            if (String(this.sceneChoice) == String(i)) {
                selectDot.active = true;
                selectImg.active = true;
            } else {
                selectDot.active = false;
                selectImg.active = false;
            }
        }
    }

    //刷新选中界面
    updateSceneShow() {
        for (let i in this.sceneLayer) {
            let node = this.sceneLayer[i];
            if (String(this.sceneChoice) == String(i)) {
                node.active = true;
            } else {
                node.active = false;
            }
        }
    }

    /** 更新单条朋友数据 */
    updateFriendItem(item: Node, data) {
        if (!item || !data) {
            return
        }
        //更新数据
        item.active = true;
    }
    /** 点击去加好友 */
    onClickAddFriend(event = null) {
        EventManager.dispatch(AppEvent.SYS_PLAY_EFFECT, AppSound.CommClick);
        Platform.reqPlatformFriendInteraction(Utils.handler(this, this.refreshFrdList));
    }
    /** 点击搜索 */
    onClickSearch(event = null) {
        EventManager.dispatch(AppEvent.SYS_PLAY_EFFECT, AppSound.CommClick);

        this.btnAddTip.active = Platform.WxAuthSettingFriends != 1;
        console.log("搜索内容：", this.labelSearchInput.string)
        if (Platform.WxAuthSettingFriends == 1) {
            let data = {}
            data["UIKey"] = this._cloundUIKey;
            data["findByKey"] = true;
            data["param"] = { key: "nickname", search: this.labelSearchInput.string };
            Platform.postMessage(data);
        }
    }
    //点击好友列表
    onFriendListClick(event: Event) {
        EventManager.dispatch(AppEvent.SYS_PLAY_EFFECT, AppSound.CommClick);
        this.sceneChoice = 0;
        this.showView();
    }


    //点击好友消息
    onFriendMsgClick(event: Event) {
        EventManager.dispatch(AppEvent.SYS_PLAY_EFFECT, AppSound.CommClick);
        this.sceneChoice = 1;
        this.showView();
    }

    //点击添加好友
    onAddFriendClick(event: Event) {
        EventManager.dispatch(AppEvent.SYS_PLAY_EFFECT, AppSound.CommClick);
        this.sceneChoice = 2;
        this.showView();
    }

    //点击查找好友
    onCheckFrdClick(event: Event) {
        EventManager.dispatch(AppEvent.SYS_PLAY_EFFECT, AppSound.CommClick);
    }
    //点击邀请好友
    onClickInviteFriend(event: Event) {
        EventManager.dispatch(AppEvent.SYS_PLAY_EFFECT, AppSound.CommClick);
        let _shareOptions = {}
        let shopShareMsg = GCache.ShareInfo.getShareConfigByType(GConstants.ShareSceneConf.friend)
        if (Utils.table_isEmpty(shopShareMsg)) {
            _shareOptions = {
                title: GameTxt.share_wx_friends_txt, //通用标题
                imageUrl: GameRes.AppCommon_Share_Friend_Comm.path, //通用img
            }
        } else {
            _shareOptions = {
                title: shopShareMsg[0]['title'],
                imageUrl: shopShareMsg[0]['img']
            }
        }

        Platform.shareWXFriends(_shareOptions);
    }

    //点击关闭界面
    onCloseClick(event: Event) {
        EventManager.dispatch(AppEvent.SYS_PLAY_EFFECT, AppSound.CommClick);
        this.node.destroy();
    }

    //销毁
    onDestroy() {
        let data = {}
        data["UIKey"] = this._cloundUIKey;
        data["close"] = true;
        Platform.postMessage(data);
    };

}

