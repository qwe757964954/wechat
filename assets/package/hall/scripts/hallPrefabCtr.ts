
import { EventTouch, Label, Node, Prefab, ScrollView, Sprite, UITransform, Vec3, _decorator, sp } from 'cc';
import { GCache } from '../../../cache/GCache';
import { AppEvent } from '../../../config/AppEvent';
import { AppSound } from '../../../config/AppSound';
import { GConstants } from '../../../config/GameConstant';
import { GameRes } from '../../../config/GameRes';
import { GameTxt } from '../../../config/GameTxt';
import { ReportConfig } from '../../../config/ReportConfig';
import { UIID } from '../../../config/UIConfig';
import { inf_SpineAniCreate } from '../../../framework/InterfaceDefines';
import { Utils } from '../../../framework/Utils';
import SpriteLoad from '../../../framework/gui/sprite/SpriteLoad';
import { resLoader } from '../../../framework/loader/ResLoader';
import { EventManager } from '../../../framework/manager/EventManager';
import { BaseComponent } from '../../../framework/vc/BaseComponent';
import { Platform } from '../../../platform/Platform';
const { ccclass, property, menu } = _decorator;

/**
 * Name = hallSceneCtr
 * URL = db://assets/model/hall/hallSceneCtr.ts
 * Time = Sat Apr 02 2022 17:35:04 GMT+0800 (中国标准时间)
 * Author = Tomoe
 *	
 * Life: onLoad-->onEnable->start->update->lateUpdate->onDisable->onDestroy
 */

@ccclass('hallSceneCtr_prefab')

//方便编辑器识别的菜单项目
@menu('prefab/hall/hallScene')

export class hallSceneCtr extends BaseComponent {

    //背景动画根节点
    @property({ tooltip: "背景动画根节点", type: Node })
    private spineBgNode: Node | null = null;

    //大厅人物动画根节点
    @property({ tooltip: "大厅人物动画根节点", type: Node })
    private spineRoleNode: Node | null = null;

    //经典场条框动画根节点
    @property({ tooltip: "可吃场条框动画根节点", type: Node })
    private nodeItemKeChi: Node | null = null;

    //不洗牌场条框动画根节点
    @property({ tooltip: "不可吃场条框动画根节点", type: Node })
    private nodeItemBuKeChi: Node | null = null;

    //用户昵称
    @property({ tooltip: "用户昵称", type: Label })
    userName: Label = null!;

    //用户头像
    @property({ tooltip: "用户头像", type: Node })
    headNode: Node = null!;

    //用户头像框
    @property({ tooltip: "用户头像框", type: Node })
    private headBoxNode: Node | null = null;

    //用户头像红点
    @property({ tooltip: "用户头像红点", type: Node })
    private headRedDotNode: Node | null = null;

    //商城按钮节点
    @property({ tooltip: "商城按钮节点", type: Node })
    private nodeShop: Node = null!;

    //签到按钮节点
    @property({ tooltip: "签到按钮节点", type: Node })
    private nodeSignin: Node = null!;

    //好友按钮节点
    @property({ tooltip: "好友按钮节点", type: Node })
    private nodeFriend: Node = null!;

    //活动按钮节点
    @property({ tooltip: "活动按钮节点", type: Node })
    private nodeActivity: Node = null!;

    //首充礼包按钮节点
    @property({ tooltip: "首充礼包按钮节点", type: Node })
    private nodeFirstPayGift: Node = null!;

    //折扣礼包按钮节点
    @property({ tooltip: "折扣礼包按钮节点", type: Node })
    private nodeLimitGift: Node = null!;

    //快速开始按钮节点
    @property({ tooltip: "快速开始按钮节点", type: Node })
    private nodeQuickStart: Node | null = null;

    //快速开始按钮节点
    @property({ tooltip: "快速开始按钮文字", type: Label })
    private labelQuickStart: Label | null = null;

    //右边滚动容器
    @property({ tooltip: "右边滚动容器", type: ScrollView })
    private scrollViewRight: ScrollView | null = null;

    //右边滚动容器内容节点
    @property({ tooltip: "右边滚动容器内容节点", type: Node })
    private nodeScrollViewRightContent: Node | null = null;

    // 遮挡节点
    @property({ tooltip: "遮挡节点", type: Node })
    private maskNode: Node = null!;

    //当前游戏ID
    private _currowGameID = GConstants.GameID.FXJ
    //当前选中场次(tabid 当前写死)
    private _currowLeaveTabID = null;

    private _roleSex = null;

    /** 右侧所有功能菜单 */
    private _rightMenuList: Array<Number> = [
        /** 折扣礼包 */
        GConstants.MenuIDConf.ZKLB,
    ];

    /** 红点UI队列 */
    private _redDotView: { [key: string]: Node | Array<Node> } = {};

    /** 头像红点UI队列 */
    private _headRedDotView: { [key: string]: Node | Array<Node> } = {};
    /** 活动中心红点UI队列 */
    private _activityRedDotView: { [key: string]: Node | Array<Node> } = {};
    /** 快速开始手势动画循环播放的句柄 */
    private _handlerForeverQuickStart = null;

    /** 快速开始按钮的手势动画 */
    private _quickHandlerClickSpine: inf_SpineAniCreate = null;

    /** 初始的滚动容器大小 */
    private _initScrollRightHeight = 0;

    constructor() {
        super();
    }
    /** override */
    protected onInitModuleEvent() {
        //用户信息更新
        this.addModelListener(AppEvent.USER_UPDATE_INFO, this.updateUserInfo)
        //用户资产更新
        this.addModelListener(AppEvent.USER_UPDATE_PROPERTY, this.updateGameLevelView)
        //限时礼包活动更新
        this.addModelListener(AppEvent.ACTIVITY_UPDATE_HOLIDAYSGIFTPACKAGE, this.updateGiftBtnLimitGift)
        //更新签到配置
        this.addModelListener(AppEvent.ACTIVITY_UPDATE_SIGNIN_CONF, this.updateMenuSignin)
        // 更新房间配置
        this.addModelListener(AppEvent.HALL_UPDATE_GAME_LEVEL_TAB, this.updateGameLevelView);
        /** 红点更新 */
        this.addModelListener(AppEvent.NOTIFY_UPDATE_RED_DOT, this.refreshRedDot);
        //首充礼包活动更新
        this.addModelListener(AppEvent.ACTIVITY_UPDATE_FIRSTPAY_CONF, this.updateGiftBtnFirstPayGift)

        // 活动中心数据配置返回
        this.addModelListener(AppEvent.NET_CMD_RESP_TASK_ACT_CONFIG, this.respAtyCenterConfig);
    }
    onLoad() {
        super.onLoad();
        EventManager.dispatch(AppEvent.SYS_PLAY_MUSIC, AppSound.BgHall);
        this.initData();
        this.initView();
        //请求破产线
        EventManager.dispatch(AppEvent.NET_REQ_BANKRUPT_CONFIG);
        // 请求返回破产次数
        EventManager.dispatch(AppEvent.NET_REQ_BANKRUPT_COUNT);
        this.checkAddDesk();
    }

    initData() {
        this._redDotView = {
            /** 七日签到 */
            [GConstants.RedDotConf.Sign]: this.nodeSignin,
            /** 商城 */
            [GConstants.RedDotConf.Shop]: this.nodeShop,
            /** 好友 */
            [GConstants.RedDotConf.Friend]: this.nodeFriend,
            /** 首充礼包 */
            [GConstants.RedDotConf.FirstPay]: this.nodeFirstPayGift,
            /** 付费礼包 */
            [GConstants.RedDotConf.Holiday]: this.nodeLimitGift,
        }

        this._headRedDotView = {
            // [GConstants.RedDotConf.DressChatFrame]: this.headRedDotNode,
            // [GConstants.RedDotConf.DressClock]: this.headRedDotNode,
            // [GConstants.RedDotConf.DressHeadFrame]: this.headRedDotNode,
            [GConstants.RedDotConf.UserHead]: this.headRedDotNode,
        }
        this._activityRedDotView = {
            /** 活动中心 */
            [GConstants.RedDotConf.ActivityNormal]: this.nodeActivity,
            /** 活动中心 */
            [GConstants.RedDotConf.ActivityNotice]: this.nodeActivity,
        }
    }

    initView() {
        this.updateUserInfo();

        this.updateMenu();
        this.updateGiftBtn()

        this.updateSpineAni();
        this.updateQuickStartBtn();

        this.getPreLoaderRes(GameRes.Prefab_HallTopUI.bundle, GameRes.Prefab_HallTopUI.path, Prefab, (res) => {
            this.node.addChild(res);
        })

        this.nodeShop.active = Platform.isCanPay();
        this.nodeScrollViewRightContent.active = false;

        this._initScrollRightHeight = this.scrollViewRight.node.getComponent(UITransform).height;
        this.scrollViewRight.scrollToTop(0.01, false);
    }



    onEnable() {
        this.maskNode.active = true;
        this.addScheduler(1, () => {
            this.maskNode.active = false
        })
    }

    /**获取活动中心配置数据返回 */
    respAtyCenterConfig(event, isSuccess) {
        if (isSuccess != true) {
            return;
        }
        this.checkAddDesk();
    }
    //检查添加桌面的任务
    checkAddDesk() {
        let _activity_id = GCache.TaskInfo.checkUserReceiveInToByDesk()
        console.log('添加桌面发奖成立条件', !!_activity_id)
        if (!!_activity_id) {
            EventManager.dispatch(AppEvent.NET_REQ_ADDDESK_AWARD, _activity_id)
        };
    }
    //更新房间信息
    updateGameLevelView() {
        this.updateQuickStartBtn();
    }

    //更新菜单状态
    updateMenu() {
        this.updateMenuSignin()
    }

    //更新菜单状态——签到
    updateMenuSignin() {
        this.nodeSignin.active = GCache.Activity.checkHaveSignin()
    }

    //更新礼包按钮状态
    updateGiftBtn(event: string = null) {
        this.updateGiftBtnFirstPayGift()
        this.updateGiftBtnLimitGift()
    }

    //更新礼包按钮状态——折扣礼包
    updateGiftBtnLimitGift() {
        let flag = GCache.RedDot.need_show_holiday();
        this.nodeLimitGift.active = flag;
        if (flag) {
            let data = GCache.Activity.getHolidaysGiftPackage()
            console.log("holiday:", data)
            let limitPackIcon = data.firstIcon
            let self = this;
            resLoader.loadRemote(limitPackIcon, { ext: '.jpg' }, (err, imageAsset) => {
                if (!imageAsset) { //资源可能还在加载中
                    return
                }
                if (!self.node || self.node.isValid == false) {
                    return;
                }
                let spriteFrame = Utils.image_ImageAssetToSpriteFrame(imageAsset)
                if (spriteFrame) {
                    this.nodeLimitGift.getComponent(Sprite).spriteFrame = spriteFrame;
                }
            })
        }
    }


    /**
     * 更新首充按钮状态——首充礼包,当数据为空时,首充按钮不显示
     */
    updateGiftBtnFirstPayGift() {
        let flag = GCache.RedDot.need_show_gift_firstpay();
        this.nodeFirstPayGift.active = flag;
        if (flag) {
            let data = GCache.Activity.getFirstPayPackage();
            console.log("firstpay:", data)
            let firstPackIcon = data.firstIcon
            let self = this;
            resLoader.loadRemote(firstPackIcon, { ext: '.jpg' }, (err, imageAsset) => {
                if (!imageAsset) { //资源可能还在加载中
                    return
                }
                if (!self.node || self.node.isValid == false) {
                    return;
                }
                let spriteFrame = Utils.image_ImageAssetToSpriteFrame(imageAsset);
                if (spriteFrame) {
                    this.nodeFirstPayGift.getComponent(Sprite).spriteFrame = spriteFrame;
                }
            })
        }




    }

    start() {
        this.refreshRedDot();
        this.nodeScrollViewRightContent.active = true;
        this.reqQueneList()
    };

    reqQueneList() {
        //请求游戏房间信息
        EventManager.dispatch(AppEvent.NET_REQ_GAME_LEVEL_ROOM_TAB, this._currowGameID)
        // //请求游戏场次房间人数
        // EventManager.dispatch(AppEvent.NET_REQ_GAME_LEVEL_PERSON_COUNT, this._currowGameID)
        // //请求在线人数
        // EventManager.dispatch(AppEvent.NET_REQ_ONLINE_PERSON)
    }
    onClickMenu(event: EventTouch, custom: string) {
        this.clickEffect();
        this.print("hallSceneCtr", "onClickMenu", custom);
        if (custom == "quickStart") {   // 快速开始
            EventManager.dispatch(AppEvent.REPORT_CLIENT_CLICK, { eventID: ReportConfig.hall_5 });
            GCache.SelectGame.checkQuickGame(this._currowGameID);
        } else if (custom == "quickPay") { // 快捷充值

        } else if (custom == "personalCenter") {  // 打开个人中心
            EventManager.dispatch(AppEvent.REPORT_CLIENT_CLICK, { eventID: ReportConfig.hall_1 });
            EventManager.dispatch(AppEvent.VIEW_UI_OPEN, UIID.PlayerInfoCenter, null, null, null, true);
        } else if (custom == "shop") { // 打开商城界面
            if (Platform.isCanPay()) {
                EventManager.dispatch(AppEvent.REPORT_CLIENT_CLICK, { eventID: ReportConfig.hall_8 });
                EventManager.dispatch(AppEvent.SYS_PLAY_EFFECT, AppSound.SpecialClick);
                EventManager.dispatch(AppEvent.VIEW_UI_OPEN, UIID.MallPrefab, { id: GConstants.ShopBigTabType.SILVER_COIN }, {});
            }
        } else if (custom == "signin") { // 打开签到界面
            EventManager.dispatch(AppEvent.REPORT_CLIENT_CLICK, { eventID: ReportConfig.hall_10 });
            EventManager.dispatch(AppEvent.VIEW_UI_OPEN, UIID.SigninPrefab, null, null, null, true);
        } else if (custom == "friend") { // 打开好友界面
            EventManager.dispatch(AppEvent.SYS_PLAY_EFFECT, AppSound.CommClick);
            EventManager.dispatch(AppEvent.VIEW_UI_OPEN, UIID.FriendPrefab, null, null, null, true);

        } else if (custom == "setting") { // 打开设置界面
            EventManager.dispatch(AppEvent.VIEW_UI_OPEN, UIID.SettingPrefab, null, null, null, true);
        } else if (custom == 'activity') {//点击活动按钮bankruptcy
            EventManager.dispatch(AppEvent.REPORT_CLIENT_CLICK, { eventID: ReportConfig.hall_9 });
            EventManager.dispatch(AppEvent.SYS_PLAY_EFFECT, AppSound.CommClick);
            EventManager.dispatch(AppEvent.VIEW_UI_OPEN, UIID.AtyCenterPrefab, null, null, null, true);
        }
    }

    onClickGift(event: EventTouch, custom: string) {
        this.clickEffect();
        this.print("hallSceneCtr", "onClickGift", custom);

        if (custom == "limitGift") { // 打开限时折扣界面
            if (Platform.isCanPay() == false) {
                return false;
            }
            if (GCache.RedDot.need_show_holiday() == false) {
                this.nodeLimitGift.active = false
                EventManager.dispatch(AppEvent.SYS_TOAST_TIP, { content: GameTxt.activity_outtime })
                return
            }
            EventManager.dispatch(AppEvent.SYS_PLAY_EFFECT, AppSound.CommClick);
            EventManager.dispatch(AppEvent.VIEW_UI_OPEN, UIID.GiftDiscountPrefab, { pay_scene: GConstants.PayScene.hall }, null, null, true);
        } else if (custom == "firstPay") { // 打开首充界面
            EventManager.dispatch(AppEvent.SYS_PLAY_EFFECT, AppSound.CommClick);
            EventManager.dispatch(AppEvent.VIEW_UI_OPEN, UIID.FirstPayPrefab, null, null, null, true);
        }
    }
    onClickRoom(event: EventTouch, custom: string) {
        this.clickEffect();
        if (custom == "kechi") {  //可吃场
            EventManager.dispatch(AppEvent.REPORT_CLIENT_CLICK, { eventID: ReportConfig.hall_3 });
            this._currowLeaveTabID = 0
            this.gotoGameLeave()
        } else if (custom == "bukechi") {//不可吃场
            this._currowLeaveTabID = 1
            EventManager.dispatch(AppEvent.REPORT_CLIENT_CLICK, { eventID: ReportConfig.hall_4 });

            this.gotoGameLeave()
        }
    }

    clickEffect() {
        EventManager.dispatch(AppEvent.SYS_PLAY_EFFECT, AppSound.CommClick);
    }

    //前往单个场次
    gotoGameLeave() {
        if (GCache.SelectGame.getGameConfigByGameID(this._currowGameID) == null) {
            EventManager.dispatch(AppEvent.SYS_TOAST_TIP, { content: GameTxt.hall_game_not_have })
            EventManager.dispatch(AppEvent.NET_REQ_HALL_GAME_CONFIG);
            return
        }
        if (GCache.SelectGame.getGameLevelRule(this._currowGameID, this._currowLeaveTabID) == null) {
            EventManager.dispatch(AppEvent.SYS_TOAST_TIP, { content: GameTxt.hall_leave_not_have })
            return
        }

        let param = {
            game_id: this._currowGameID,
            tab_id: this._currowLeaveTabID
        }
        EventManager.dispatch(AppEvent.VIEW_UI_OPEN, UIID.SelectLevelPrefab, param, {});
        this.maskNode.active = true;
        let timeout = this.addScheduler(1, () => {
            this.stopScheduler(timeout);
            if (this.node && this.node.isValid == true) {
                this.maskNode.active = false;
            }
        })
    }

    //更新用户头像
    updateUserHead() {
        let userSex = GCache.User.getUserSex();
        let spriteLoad = this.headNode.getComponent(SpriteLoad);
        let headArray = GCache.User.getUserHeadArray();

        if (headArray && headArray.s != "") {
            let self = this;
            spriteLoad.setRemoteUrl(headArray.s)
        } else {
            if (userSex == 2) {
                spriteLoad.setLocalLoad(GameRes.Picture_UserBigHead_girl.bundle, GameRes.Picture_UserBigHead_girl.path);
            } else {
                spriteLoad.setLocalLoad(GameRes.Picture_UserBigHead_boy.bundle, GameRes.Picture_UserBigHead_boy.path);
            }
        }
    }


    //更新用户信息
    updateUserInfo() {
        let maxLen = 6;
        let name = GCache.User.getUserName();
        if (Utils.string_isAllOneBytes(name)) {
            maxLen = 10;
        }
        this.userName.string = Utils.string_subString(name, maxLen, false, "");
        this.updateUserHead();

        this.updateRoleShow();

    }

    //更新角色信息
    updateRoleShow() {
        this.print("updateRoleShow", GCache.User.getUserSex(), this._roleSex)
        // mark 临时配置，上角色版本再处理
        let userSex = GCache.User.getUserSex();

        if (Utils.isNotNull(this._roleSex) && this._roleSex == userSex) {
            return;
        }
        this._roleSex == userSex

        this.spineRoleNode.removeAllChildren();

        let roleAnimConf = GCache.GoodsData.getRoleAnimConfigById(null)

        let self = this;
        let standbyActIndex = 1;
        let nextStandbyAct = function () {
            if (standbyActIndex > roleAnimConf["standby"].length) {
                standbyActIndex = 1;
            }
            let act = roleAnimConf["standby"][standbyActIndex - 1];
            standbyActIndex = standbyActIndex + 1;
            return act;
        }

        let setStatus = function (actName, isloop = false) {
            if (!self.spineRoleNode || self.spineRoleNode.isValid == false) {
                return;
            }
            self.spineRoleNode.active = true;
            let roleAni: inf_SpineAniCreate = {
                parentNode: self.spineRoleNode,
                resConf: roleAnimConf.path,
                aniName: actName,
                trackIndex: 0,
                isLoop: isloop,
                callStartFunc: () => {
                    if (actName == roleAnimConf.hall) {
                        // initTouchEvent();
                        standbyActIndex = 1;
                    }
                },
                oneLoopEndcallFunc: () => {
                    setStatus(nextStandbyAct())
                },
                processCallFunc: (trackEntry: sp.spine.TrackEntry, ev) => {
                    if (trackEntry.animation.name == roleAnimConf.hall) {
                        EventManager.dispatch(AppEvent.SYS_STOP_PLAY_EFFECT);
                        // EventManager.dispatch(AppEvent.SYS_PLAY_EFFECT, AppSound["RoleInHall_" + self._showRoleID]);
                        standbyActIndex = 1;
                    } else if (trackEntry.animation.name == roleAnimConf.role) {
                        if (ev.data.name == "juese") {
                            EventManager.dispatch(AppEvent.SYS_STOP_PLAY_EFFECT);
                            // EventManager.dispatch(AppEvent.SYS_PLAY_EFFECT, AppSound["Role_" + self._showRoleID]);
                            standbyActIndex = 1;
                        } else if (ev.data.name == "shanzi_kai") {
                            // EventManager.dispatch(AppEvent.SYS_PLAY_EFFECT, AppSound.RoleOpenFan);
                        } else if (ev.data.name == "music") {
                            // EventManager.dispatch(AppEvent.SYS_PLAY_EFFECT, AppSound.Role_30_1);
                        }
                    }
                }

            }
            self.spineRoleNode.removeAllChildren();
            EventManager.dispatch(AppEvent.SYS_ANI_PLAY, roleAni);
        }
        setStatus(roleAnimConf.hall, false)
    }

    // 播放动画
    updateSpineAni() {
        let keChiAni: inf_SpineAniCreate = {
            parentNode: this.nodeItemKeChi,
            resConf: GameRes.Spine_Rukou_Kechi,
            aniName: "animation",
            trackIndex: 0,
            isLoop: true,
        }
        EventManager.dispatch(AppEvent.SYS_ANI_PLAY, keChiAni);

        let buKeChiAni: inf_SpineAniCreate = {
            parentNode: this.nodeItemBuKeChi,
            resConf: GameRes.Spine_Rukou_Bukechi,
            aniName: "animation",
            trackIndex: 0,
            isLoop: true,
        }
        EventManager.dispatch(AppEvent.SYS_ANI_PLAY, buKeChiAni);
    }

    // 更新快速开始
    updateQuickStartBtn() {
        this.stopScheduler(this._handlerForeverQuickStart);
        if (GCache.User.getClickRecord("快速开始") == 0) {
            //快速开始点击手势
            this._quickHandlerClickSpine = {
                parentNode: this.nodeQuickStart,
                resConf: GameRes.Spine_Guide_Hander_Click,
                aniName: "hand_dianji_loop",
                trackIndex: 0,
                isLoop: false,
                toPos: new Vec3(-10, 10, 0)
            }
            this._handlerForeverQuickStart = this.addScheduler(30, () => {
                EventManager.dispatch(AppEvent.SYS_ANI_STOP, this._quickHandlerClickSpine);
                EventManager.dispatch(AppEvent.SYS_ANI_PLAY, this._quickHandlerClickSpine);
            })
            this.addSchedulerOnce(1, () => {
                EventManager.dispatch(AppEvent.SYS_ANI_STOP, this._quickHandlerClickSpine);
                EventManager.dispatch(AppEvent.SYS_ANI_PLAY, this._quickHandlerClickSpine);
            })
        }

        let gameName = GCache.SelectGame.checkQuickGameName(this._currowGameID);
        if (!Utils.string_isEmpty(gameName)) {
            this.labelQuickStart.string = gameName;
        }

    }

    /** 红点更新 */
    refreshRedDot(event = null, keyType = null) {
        this.updateGiftBagShow();
        if (keyType == null) {
            for (let keyType in this._redDotView) {
                let nodeOrList = this._redDotView[keyType];
                let imgRedDot = null;
                if (nodeOrList instanceof Array) {
                    nodeOrList.forEach((node, index) => {
                        if (node.active == true) {
                            imgRedDot = node.getChildByName("img_dot");
                            if (imgRedDot) {
                                imgRedDot.active = GCache.RedDot.hasRedDot(keyType);
                            }
                        } else {

                            console.log("入口已经隐藏===>", keyType)
                        }

                    })
                } else {
                    if (nodeOrList.active == true) {
                        imgRedDot = nodeOrList.getChildByName("img_dot");
                        if (imgRedDot) {
                            imgRedDot.active = GCache.RedDot.hasRedDot(keyType);
                            console.log(keyType, "=====", imgRedDot.active)
                        }
                    } else {

                        console.log("入口已经隐藏===>", keyType)

                    }
                }
            }
            //头像红点
            let active = false;
            for (let keyType in this._headRedDotView) {
                if (active == false) {
                    active = GCache.RedDot.hasRedDot(keyType);
                }
            }
            this.headRedDotNode.active = active;
            //活动红点
            let atyActive = false;
            for (let keyType in this._activityRedDotView) {
                if (atyActive == false) {
                    atyActive = GCache.RedDot.hasRedDot(keyType);
                }
            }
            let imgRedDot = this.nodeActivity.getChildByName("img_dot");
            if (imgRedDot) {
                imgRedDot.active = atyActive;
            }

        } else {
            if (this._redDotView[keyType] != null) {
                let nodeOrList = this._redDotView[keyType];
                let imgRedDot = null;
                if (nodeOrList instanceof Array) {
                    nodeOrList.forEach((node, index) => {
                        if (node.active == true) {
                            imgRedDot = node.getChildByName("img_dot");
                            if (imgRedDot) {
                                imgRedDot.active = GCache.RedDot.hasRedDot(keyType);
                                console.log(keyType, "=====", imgRedDot.active)
                            }
                        }
                    })
                } else {
                    if (nodeOrList.active == true) {
                        imgRedDot = nodeOrList.getChildByName("img_dot");
                        if (imgRedDot) {
                            imgRedDot.active = GCache.RedDot.hasRedDot(keyType);
                        }
                    }
                }
            }
            //头像红点
            if (this._headRedDotView[keyType] != null) {
                let active = false;
                for (let keyType in this._headRedDotView) {
                    if (active == false) {
                        active = GCache.RedDot.hasRedDot(keyType);
                    }
                }
                this.headRedDotNode.active = active;
            }
            //活动红点
            if (this._activityRedDotView[keyType] != null) {
                let atyActive = false;
                for (let keyType in this._activityRedDotView) {
                    if (atyActive == false) {
                        atyActive = GCache.RedDot.hasRedDot(keyType);
                    }
                }
                let imgRedDot = this.nodeActivity.getChildByName("img_dot");
                if (imgRedDot) {
                    imgRedDot.active = atyActive;
                }
            }
            this.updateGiftBagShow(keyType);
        }
        this.updateRightScrollView();
    }

    /** 更新礼包入口的显示 */
    updateGiftBagShow(reddotType = null) {
        if (reddotType == null) {
            // this.btn_newUser7Day.active = GCache.RedDot.need_show_newuser7day();
            // this.btn_GiftDiscount.active = GCache.RedDot.need_show_gift_discount();
            // this.btn_GiftNewUser.active = GCache.RedDot.need_show_gift_newuser();
            // this.btn_GiftLimit.active = GCache.RedDot.need_show_gift_limit();
            // this.btn_GiftBuyLimit.active = GCache.RedDot.need_show_gift_buyLimit();
            // this.btn_MuchGold.active = GCache.RedDot.need_show_Advice_MuchGold();
            // this.btn_FreeGold.active = GCache.RedDot.need_show_Advice_FreeGold();
            return;
        }
        // if (reddotType == GConstants.RedDotConf.NewUserServenDay) {
        // 	this.btn_newUser7Day.active = GCache.RedDot.need_show_newuser7day();
        // } else if (reddotType == GConstants.RedDotConf.Gift_Discount) {
        // 	this.btn_GiftDiscount.active = GCache.RedDot.need_show_gift_discount();
        // } else if (reddotType == GConstants.RedDotConf.Gift_NewUser) {
        // 	this.btn_GiftNewUser.active = GCache.RedDot.need_show_gift_newuser();
        // } else if (reddotType == GConstants.RedDotConf.Gift_Limit) {
        // 	this.btn_GiftLimit.active = GCache.RedDot.need_show_gift_limit();
        // } else if (reddotType == GConstants.RedDotConf.Gift_BuyLimit) {
        // 	this.btn_GiftBuyLimit.active = GCache.RedDot.need_show_gift_buyLimit();
        // } else if (reddotType == GConstants.RedDotConf.AdMuchGold) {
        // 	this.btn_MuchGold.active = GCache.RedDot.need_show_Advice_MuchGold();
        // } else if (reddotType == GConstants.RedDotConf.AdFreeGold) {
        // 	this.btn_FreeGold.active = GCache.RedDot.need_show_Advice_FreeGold();
        // }
    }
    /** 更新右边的Scrollview */
    updateRightScrollView() {
        let self = this;
        setTimeout(() => {
            let currowScrollContentHeight = self.nodeScrollViewRightContent.getComponent(UITransform).height;
            if (currowScrollContentHeight > self._initScrollRightHeight) {
                self.scrollViewRight.enabled = true;
            } else {
                self.scrollViewRight.scrollToTop(0.01, false);
                self.scrollViewRight.enabled = false;
            }
        }, 0)
    }


    //销毁
    onDestroy() {
        super.onDestroy();
    };
}