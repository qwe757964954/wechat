
import { Color, EventTouch, Label, Layout, Node, ScrollView, Sprite, SpriteFrame, UITransform, _decorator, instantiate } from 'cc';
import { GCache } from '../../../cache/GCache';
import { AppEvent } from '../../../config/AppEvent';
import { AppSound } from '../../../config/AppSound';
import { GConstants } from '../../../config/GameConstant';
import { GameRes } from '../../../config/GameRes';
import { GameTxt } from '../../../config/GameTxt';
import { ReportConfig } from '../../../config/ReportConfig';
import { UIID } from '../../../config/UIConfig';
import { Utils } from '../../../framework/Utils';
import { Encrypt } from '../../../framework/crypto/Encrypto';
import { GifRenderLoad } from '../../../framework/gui/gif/GifRenderLoad';
import { resLoader } from '../../../framework/loader/ResLoader';
import { EventManager } from '../../../framework/manager/EventManager';
import { BaseComponent } from '../../../framework/vc/BaseComponent';
import { Platform } from '../../../platform/Platform';
const { ccclass, property, menu } = _decorator;

/**
 * Name = atyCenterPrefabCtr
 * URL = db://assets/package/hall/scripts/atyCenterPrefabCtr.ts
 * Time = (中国标准时间)
 * Author = Tomoe
 *	活动中心
 * Life: onLoad-->onEnable->start->update->lateUpdate->onDisable->onDestroy
 */

@ccclass('atyCenterPrefabCtr')
//方便编辑器识别的菜单项目
@menu('prefab/activity/atyCenterPrefabCtr')
export class atyCenterPrefabCtr extends BaseComponent {
    //页面标签
    @property({ tooltip: "页面标签", type: Node })
    private tabNode1: Node | null = null;
    //页面标签
    @property({ tooltip: "页面标签", type: Node })
    private tabNode2: Node | null = null;

    //内容标签Layer
    @property({ tooltip: "内容标签Layer", type: Node })
    private subTabLayer: Node | null = null;

    //小标签
    @property({ tooltip: "小标签", type: Node })
    private cloneSubtab: Node | null = null;

    //活动内容节点
    @property({ tooltip: "暂无内容节点", type: Node })
    private panelActivity: Node | null = null;

    //活动内容背景节点
    @property({ tooltip: "活动内容背景节点", type: Node })
    private bgPanelActivity: Node | null = null;

    //活动内容玩牌任务节点
    @property({ tooltip: "活动内容玩牌任务节点", type: Node })
    private taskPanelActivity: Node | null = null;

    //公告内容节点
    @property({ tooltip: "暂无内容节点", type: Node })
    private panelNotice: Node | null = null;

    //公告具体内容节点
    @property({ tooltip: "暂无内容节点", type: Node })
    private noticeContent: Node | null = null;

    //公告滚动容器节点
    @property({ tooltip: "公告滚动容器节点", type: Node })
    private noticeScrollow: Node | null = null;

    //公告标题
    @property({ tooltip: "公告标题", type: Label })
    private noticeTitle: Label | null = null;

    //无内容图片
    @property({ tooltip: "暂无内容节点", type: SpriteFrame })
    private noContent: SpriteFrame | null = null;

    //公告背景图片
    @property({ tooltip: "公告背景图片", type: SpriteFrame })
    private sprBgNotice: SpriteFrame | null = null;

    /** 当前选择菜单 */
    currowChooseTabID: number = 0;
    /** 当前选择小标签 */
    currowChooseSubID: number = null;

    /** 当前右侧页面数据 */
    currowChooseData = null;



    /** 大标签 */
    tabLayer = {};

    atyData = null;
    noticeData = null;
    showData = null;
    /** 红点UI队列 */
    private _redDotView: { [key: string]: Node | Array<Node> } = {};

    private _initSize = {
        panelActivity: null,
        noticePic: null,
    };/**初始化添加事件绑定 */
    protected onInitModuleEvent(): void {
        /** 礼包红点更新 */
        this.addModelListener(AppEvent.NOTIFY_UPDATE_RED_DOT, this.refreshRedDot);

    }

    onLoad() {
        this.tabLayer = {
            0: this.tabNode1,
            1: this.tabNode2,
        }
        this._redDotView = {
            [GConstants.RedDotConf.ActivityNormal]: this.tabNode1,
            [GConstants.RedDotConf.ActivityNotice]: this.tabNode2,
        };

        this.getData();
        this.findFirstShowAct()
        this.initView();

    };

    start() {

    };

    getData() {
        this.atyData = GCache.TaskInfo.atyData;
        this.noticeData = GCache.TaskInfo.NoticeData;
    }
    initView() {
        this.panelActivity.active = false;
        this.panelNotice.active = false;
        this.cloneSubtab.active = false;
        this._initSize["panelActivity"] = { width: this.panelActivity.getComponent(UITransform).width, height: this.panelActivity.getComponent(UITransform).height };
        this._initSize["noticePic"] = { width: this.noticeContent.getComponent(UITransform).width, height: this.noticeContent.getComponent(UITransform).height };

        this.updateTabList();
        this.updateSubList();
        this.updateRightView();
        this.refreshRedDot();

    }
    /** 活动中心优先展示的活动*/
    findFirstShowAct() {
        //判断红点展示
        let showIndexByRed = this.atyData.findIndex((item) => { return item['red_dot_type'] == 1 })
        //判断进入活动中心优先要展示的活动数据 
        let showIndexByFirst = this.atyData.findIndex((item) => { return item['is_first'] == 1 })
        //  配置了某一条需要优先展示
        if (showIndexByFirst > -1) {
            this.currowChooseSubID = showIndexByFirst
            return
        }
        //只有红点
        if (showIndexByRed > -1 && showIndexByFirst == -1) {
            this.currowChooseSubID = showIndexByRed
            return
        }
        //既没有红点也没有配置特殊要展示的  默认展示第 0个下标数据
        this.currowChooseSubID = 0
    }

    /** 活动中心配置返回 */
    respAtyCenterConfig(event, receiveData, reqData) {
        if (receiveData.code != 0) {
            return;
        }
        this.getData();
        this.updateSubList();
        this.updateRightView();
        this.refreshRedDot();
    }

    /** 红点更新  函数有问题 */
    refreshRedDot(event = null, keyType = null, params = null) {
        console.log('刷新红点', keyType, params)
        if (keyType == null) {
            for (let keyType in this._redDotView) {
                let nodeOrList = this._redDotView[keyType];

                let imgRedDot = null;
                if (nodeOrList instanceof Array) {
                    nodeOrList.forEach((node, index) => {
                        imgRedDot = node.getChildByName("img_reddot");

                        if (imgRedDot) {
                            imgRedDot.active = false//GCache.RedDot.hasRedDot(keyType);
                        }
                    })
                } else {
                    imgRedDot = nodeOrList.getChildByName("img_reddot");
                    if (imgRedDot) {
                        imgRedDot.active = false//GCache.RedDot.hasRedDot(keyType);
                    }

                }
            }
        } else {
            if (this._redDotView[keyType] == null) {
                return;
            }
            let nodeOrList = this._redDotView[keyType];
            let imgRedDot = null;
            if (nodeOrList instanceof Array) {
                nodeOrList.forEach((node, index) => {
                    imgRedDot = node.getChildByName("img_reddot");
                    if (imgRedDot) {
                        imgRedDot.active = false//GCache.RedDot.hasRedDot(keyType);
                    }
                })
            } else {
                imgRedDot = nodeOrList.getChildByName("img_reddot");
                if (imgRedDot) {
                    imgRedDot.active = false//GCache.RedDot.hasRedDot(keyType);
                }

            }
        }
    }


    /**设置远端图片 */
    setSpriteFrame(node, path) {
        if (!path) {
            return
        }
        if (Utils.string_isHttp(path)) {

            let self = this;
            resLoader.loadRemote(path, { ext: '.jpg' }, (err, imageAsset) => {
                if (!imageAsset) { //资源可能还在加载中
                    return
                }
                if (!self.node || self.node.isValid == false) {
                    return;
                }
                let spriteFrame = Utils.image_ImageAssetToSpriteFrame(imageAsset)
                if (spriteFrame) {
                    let pngNode = Utils.create_2DSprite(spriteFrame);
                    if (self.bgPanelActivity == node) {
                        self.setAdaptivePng(self._initSize.panelActivity, pngNode, false);
                    } else if (self.noticeContent == node) {
                        self.setAdaptivePng(self._initSize.noticePic, pngNode);
                    }
                    self.addSchedulerOnce(0.01, () => {
                        node.addChild(pngNode);
                    })
                }
            })
        }
    }

    /** 设置图片适配 */
    setAdaptivePng(sizeConf, pngNode: Node, isOnlyWidth: boolean = true) {
        if (!sizeConf || sizeConf.width == null || sizeConf.height == null) {
            return;
        }
        this.addSchedulerOnce(0, () => {
            let scale = [1, 1, 1];
            let scW = 1;
            let scH = 1;

            let uiTransComp = pngNode.getComponent(UITransform);

            let pngWidth = uiTransComp.width;
            let pngHeight = uiTransComp.height;
            if (sizeConf.width > pngWidth) {
                let scWidth = pngWidth / sizeConf.width;
                let scHeight = pngHeight / sizeConf.width;

                scW = (scWidth > scHeight ? scHeight : scWidth);
            } else if (sizeConf.width < pngWidth) {
                let scWidth = sizeConf.width / pngWidth;
                let scHeight = sizeConf.width / pngHeight;

                scW = (scWidth > scHeight ? scHeight : scWidth);
            }

            if (isOnlyWidth == false) {
                let sprite = pngNode.getComponent(Sprite);
                sprite.sizeMode = 1;
                sprite.type = 0;
                uiTransComp.width = sizeConf.width;
                uiTransComp.height = sizeConf.height;
            } else {
                uiTransComp.width = scW * pngWidth;
                uiTransComp.height = scW * pngHeight;
            }
        })
    }
    /** 更新大标签 */
    updateTabList() {
        if (this.currowChooseTabID == null || this.currowChooseTabID >= 2 || this.currowChooseTabID < 0) {
            this.currowChooseTabID = 0;
        }
        for (let key in this.tabLayer) {
            let v = this.tabLayer[key];
            let select = v.getChildByName("tab_selected");
            let img_reddot = v.getChildByName("img_reddot");
            if (key == String(this.currowChooseTabID)) {
                img_reddot.active = false;
                select.active = true;
            } else {
                select.active = false;
                // 判断未选中的数据是否有红点
                // if(){}
                img_reddot.active = false;
            }
        }
    }
    /** 根据大类型ID获取二级标签数据 */
    __getSubConfByBigID(bigID) {
        if (bigID == 0) {
            return {
                data: this.atyData,
                redKey: GConstants.RedDotConf.ActivityNormal,
                redUpdateFunc: GCache.RedDot.update_Activity_NormalRed
            }
        } else if (bigID == 1) {
            return {
                data: this.noticeData,
                redKey: GConstants.RedDotConf.ActivityNotice,
                redUpdateFunc: GCache.RedDot.update_Activity_NoticeRed
            }
        }
        return {};
    }
    /**更新二级标签*/
    updateSubList() {
        if (this.currowChooseSubID == null) {
            this.currowChooseSubID = 0;
        }
        let smallTabConf = this.__getSubConfByBigID(this.currowChooseTabID);
        let data = Utils.table_verify(smallTabConf.data, true);
        let max = data.length;

        if (max == 0) {
            this.currowChooseSubID = null;
            this.currowChooseData = null;
        }

        if (max < this.subTabLayer.children.length) {
            max = this.subTabLayer.children.length;
        }
        for (let i = (max - 1); i >= 0; i--) {
            let nodeItem = this.subTabLayer.children[i];
            if (nodeItem && !data[i]) {
                nodeItem.destroy();
            }
        }
        for (let i = 0; i < data.length; i++) {
            let nodeItem = this.subTabLayer.children[i];
            if (!nodeItem) {
                nodeItem = instantiate(this.cloneSubtab);
                this.subTabLayer.addChild(nodeItem);
            }
            let nodeTxt = nodeItem.getChildByName("label_title");
            let titleLabel = nodeTxt.getComponent(Label);
            let tag_hot = nodeItem.getChildByName("tag_hot");
            let img_reddot = nodeItem.getChildByName("img_reddot");
            let select = nodeItem.getChildByName("img_selected");
            if (this.currowChooseTabID == 0) {//只有活动才有标签
                if (data[i].mark_url) {
                    this.setSpriteFrame(tag_hot, data[i].mark_url);
                    tag_hot.active = true;
                } else {
                    tag_hot.active = false;
                }
            } else {
                tag_hot.active = false;
            }
            titleLabel.string = data[i].title;

            nodeItem["currowChooseSubID"] = i;
            nodeItem["data"] = data[i];
            // 全部更新一次红点
            img_reddot.active = GCache.RedDot.hasRedDot(smallTabConf.redKey, data[i]["config_id"]);
            if (i == this.currowChooseSubID) {
                titleLabel.color = new Color(136, 86, 45);
                smallTabConf.redUpdateFunc.call(GCache.RedDot, data[i], false);
                select.active = true;
                this.currowChooseData = nodeItem["data"];
            } else {
                select.active = false;
                titleLabel.color = new Color(242, 206, 179);
                //未选中的更新红点
                img_reddot.active = GCache.RedDot.hasRedDot(smallTabConf.redKey, data[i]["config_id"]);
            }
            nodeItem.active = true;
        }
        this.subTabLayer.getComponent(Layout).updateLayout();
    }

    /** 点击了二级标签 */
    onClickSubTab(event: EventTouch) {
        let node = event.target;
        if (this.currowChooseSubID == node["currowChooseSubID"]) {
            return;
        }
        EventManager.dispatch(AppEvent.SYS_PLAY_EFFECT, AppSound.CommClick);

        this.currowChooseSubID = node["currowChooseSubID"];
        this.currowChooseData = Utils.table_verify(node["data"]);
        this.updateSubList();
        this.updateRightView();
    }
    /** 更新右侧界面 */
    updateRightView() {
        console.log("当前数据==>", this.currowChooseData)
        if (!this.currowChooseData || Utils.table_isEmpty(this.currowChooseData)) {
            if (this.currowChooseTabID == 0) {
                this.bgPanelActivity["ReloadUrl"] = null;
                this.taskPanelActivity["AtyType"] = null;
                this.bgPanelActivity.removeAllChildren();
                this.taskPanelActivity.removeAllChildren();
                this.panelActivity.active = true;
                this.panelNotice.active = false;
            } else {
                this.noticeTitle.string = "";
                this.noticeScrollow.getComponent(ScrollView).scrollToTop(0, false);
                this.noticeContent.removeAllChildren();
                this.panelNotice.active = true;
                this.panelActivity.active = false;
            }
            return;
        }
        if (this.currowChooseTabID == 0) {
            if (this.bgPanelActivity["ReloadUrl"] != this.currowChooseData["bg_pic"]) {
                this.bgPanelActivity.removeAllChildren();
                // 判断当前图片格式 .gif
                if (String(this.currowChooseData["bg_pic"]).includes(".gif")) {
                    let pngNode = Utils.create_2DNode("bg_pic");
                    let gifRenderLoad = pngNode.addComponent(GifRenderLoad);
                    gifRenderLoad.setRemoteUrl(this.currowChooseData["bg_pic"]);
                    this.bgPanelActivity.addChild(pngNode);
                } else {
                    this.setSpriteFrame(this.bgPanelActivity, this.currowChooseData["bg_pic"]);
                }
                this.bgPanelActivity["ReloadUrl"] = this.currowChooseData["bg_pic"];
            } else {
                this.bgPanelActivity.active = true;
            }
            //牌局任务界面
            this.checkSpeActivityTask(this.taskPanelActivity, this.currowChooseData["aty_type"]);
            this.panelActivity.active = true;
            this.panelNotice.active = false;
        } else {
            this.noticeTitle.string = this.currowChooseData["title"];
            this.noticeContent.removeAllChildren();
            this.setSpriteFrame(this.noticeContent, this.currowChooseData["content"])
            this.noticeScrollow.getComponent(ScrollView).scrollToTop(0, false);
            this.panelActivity.active = false;
            this.panelNotice.active = true;
        }
    }

    /** 检查特殊的任务 */
    checkSpeActivityTask(parentNode: Node, atyType) {
        return false;
    }
    /** 点击了活动 */
    onClickActivity(event) {
        if (this.currowChooseTabID == 0) {
            return;
        }
        EventManager.dispatch(AppEvent.SYS_PLAY_EFFECT, AppSound.CommClick);
        EventManager.dispatch(AppEvent.REPORT_CLIENT_CLICK, { eventID: ReportConfig.activityCenter_1 });
        this.currowChooseTabID = 0;
        this.currowChooseSubID = 0;
        this.currowChooseData = null;
        this.updateTabList();
        this.updateSubList();
        this.updateRightView();
    }
    /** 点击了公告 */
    onClickNotice(event) {
        if (this.currowChooseTabID == 1) {
            return;
        }
        EventManager.dispatch(AppEvent.SYS_PLAY_EFFECT, AppSound.CommClick);
        EventManager.dispatch(AppEvent.REPORT_CLIENT_CLICK, { eventID: ReportConfig.activityCenter_2 });
        this.currowChooseTabID = 1;
        this.currowChooseSubID = 0;
        this.currowChooseData = null;
        this.updateTabList();
        this.updateSubList();
        this.updateRightView();
    }
    /** 点击了关闭 */
    onClickClose(event) {
        EventManager.dispatch(AppEvent.SYS_PLAY_EFFECT, AppSound.CommClick);
        this.node.destroy();
    }
    /** 点击了当前活动执行对应的跳转 */
    onClickActJump(event) {
        EventManager.dispatch(AppEvent.SYS_PLAY_EFFECT, AppSound.CommClick);
        EventManager.dispatch(AppEvent.REPORT_CLIENT_CLICK, { eventID: ReportConfig.activityCenter_4 });
        if (this.currowChooseData['is_jump'] == 1) {
            //跳转位置
            let _jumpData = Encrypt.JsonDecode(this.currowChooseData['jump_code'])
            let jmmpCmd = Number(_jumpData['cmd']) || 0
            let mallScene = _jumpData['tag'] || 0
            switch (jmmpCmd) {
                //跳转到商城
                case GConstants.JumpViewConf.POS_ACT_MALL:
                    EventManager.dispatch(AppEvent.VIEW_UI_OPEN, UIID.MallPrefab, { id: Number(mallScene), pay_scene: 0 }, {});
                    this.node.destroy();
                    break;
                case GConstants.JumpViewConf.POS_ACT_DESK_SIGN_POS_ACT_SPECIALGIFT:
                    switch (mallScene) {
                        //添加到桌面
                        case GConstants.JumpViewConf.POS_ACT_DESK_TAG:
                            break;
                        //联系客服有奖
                        case GConstants.JumpViewConf.POS_ACT_CUSTOMER_SERVICE:
                            let shareKefuData = GCache.ShareInfo.getShareConfigByType(GConstants.ShareSceneConf.kefugift)
                            let shareParams = {}
                            if (Utils.table_isEmpty(shareKefuData)) {
                                shareParams = {
                                    sessionFrom: "",
                                    success: () => { },// 成功的回调
                                    fail: () => { },// 失败的回调
                                    complete: () => { },// 失败或者的回调
                                    showMessageCard: true,//是否发送小程序气泡消息
                                    sendMessageTitle: GameTxt.share_wx_friends_txt, //通用标题, //转发标题，不传则默认使用当前小游戏的昵称
                                    sendMessagePath: '',//气泡消息小程序路径
                                    sendMessageImg: GameRes.AppCommon_Share_Friend_Comm.path,// 转发图片
                                    shareID: shareKefuData[0]['share_id']
                                }
                            } else {
                                shareParams = {
                                    sessionFrom: "",
                                    success: () => { },// 成功的回调
                                    fail: () => { },// 失败的回调
                                    complete: () => { },// 失败或者的回调
                                    showMessageCard: true,//是否发送小程序气泡消息
                                    sendMessageTitle: shareKefuData[0]['title'], //转发标题，不传则默认使用当前小游戏的昵称
                                    sendMessagePath: '',//气泡消息小程序路径
                                    sendMessageImg: shareKefuData[0]['img'],// 转发图片
                                    shareID: shareKefuData[0]['share_id']
                                }
                            }

                            Platform.openCustomerServiceConversation(shareParams, Utils.handler(this, this.__doCallBackSerCon))
                            break;
                        // 跳转到特价礼包
                        case GConstants.JumpViewConf.POS_ACT_SPECIALGIFT_TAG:
                            EventManager.dispatch(AppEvent.VIEW_UI_OPEN, UIID.GiftDiscountPrefab, { id: 0, pay_scene: 0 });
                            break;
                        // 跳转到签到
                        case GConstants.JumpViewConf.POS_ACT_SIGN_TAG:
                            EventManager.dispatch(AppEvent.VIEW_UI_OPEN, UIID.SigninPrefab, null, null, null, true);
                            break;
                    }
                    break;
                case GConstants.JumpViewConf.POS_ACT_GAME:
                    EventManager.dispatch(AppEvent.SYS_TOAST_TIP, { content: "去玩牌,待玩牌完成之后介入" });
                    break;
                // 跳转到好友
                case GConstants.JumpViewConf.POS_ACT_FRIEND:
                    EventManager.dispatch(AppEvent.VIEW_UI_OPEN, UIID.FriendPrefab, null, null, null, true);
                    this.node.destroy();
                    break;
                // 跳转到大厅
                case GConstants.JumpViewConf.POS_ACT_HALL:
                    //销毁活动中心
                    this.node.destroy();
                    break;
                // 跳转到个人信息
                case GConstants.JumpViewConf.POS_ACT_USERINFO:
                    this.node.destroy();
                    EventManager.dispatch(AppEvent.VIEW_UI_OPEN, UIID.PlayerInfoCenter, null, null, null, true);
                    break;
            }
        }
        // 点击打开到商场某个商品的支付
        let _jumpGoodsData = this.currowChooseData
        let jmmpGoodsType = Number(_jumpGoodsData['goods_type']) || 0
        let jmmpGoodsID = Number(_jumpGoodsData['goods_id']) || 0
        let self = this
        if (jmmpGoodsID) {
            let goodsProp = GCache.ShopInfo.getShopDataByGoodsID(jmmpGoodsID)
            if (goodsProp["gid"]) {
                EventManager.dispatch(AppEvent.REPORT_CLIENT_CLICK, { eventID: ReportConfig.activityCenter_5, body: { gsubname: goodsProp["gid"] } });
                switch (jmmpGoodsType) {
                    case GConstants.ShopBigTabType.SILVER_COIN:
                        let goodsItem = GCache.ShopInfo.getShopDataByGoodsID(jmmpGoodsID)
                        let param = {
                            title: GConstants.DialogTitle.Goods_content,
                            itemData: goodsItem,
                            isConfirm: goodsItem['specialDesc'] ? false : true, //没有加赠 值为 'false  
                            callFunc: (pData) => {
                                //模拟支付
                                self.__paySure(pData, { payID: GConstants.PayType.RMB, price: goodsItem['price'] });
                            }
                        }
                        EventManager.dispatch(AppEvent.VIEW_UI_OPEN, UIID.BuyDialogPrefab, param);
                        break
                    case GConstants.ShopBigTabType.PROPS:
                        let paramProp = {
                            goodsId: goodsProp["gid"],
                            scene: GConstants.PayModel.shop_props
                        }
                        EventManager.dispatch(AppEvent.VIEW_UI_OPEN, UIID.BuyPropDialogPrefab, paramProp);
                        break;
                    default:
                        break;
                }
            }

        }
    }
    /**支付确认 */
    __paySure(data, payData) {
        if (Utils.table_isEmpty(data) || Utils.table_isEmpty(payData)) {
            return;
        }
        switch (payData.payID) {
            case GConstants.PayType.SILVER:
                EventManager.dispatch(AppEvent.OTHER_PAY_WILL, GConstants.ShopBigTabType.SILVER_COIN, data.gid);
                break;
            case GConstants.PayType.RMB:
                GCache.CurrowPaySceneType = GConstants.UBPaySceneConfig.kHallMarketGold;
                EventManager.dispatch(AppEvent.OTHER_PAY_WILL, GConstants.ShopBigTabType.SILVER_COIN, data.gid);
                break;
        }
    }
    //联系客服的回调
    __doCallBackSerCon(state, option = null) {
        if (!state) {
            return;
        }

        EventManager.dispatch(AppEvent.NET_REQ_SHARE_AWARD, option["shareID"], GConstants.ReqUrl.shareType.other, false)
    }
    //销毁
    onDestroy() {
        //获取活动中心配置数据
        // EventManager.dispatch(AppEvent.NET_CMD_REQ_TASK_ACT_CONFIG);
    };

}

