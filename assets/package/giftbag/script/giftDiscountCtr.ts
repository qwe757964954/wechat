
import { EventTouch, LabelComponent, Layout, Node, ScrollView, Sprite, UITransform, _decorator, instantiate } from 'cc';
import { GCache } from '../../../cache/GCache';
import { AppEvent } from '../../../config/AppEvent';
import { AppSound } from '../../../config/AppSound';
import { GConstants } from '../../../config/GameConstant';
import { ReportConfig } from '../../../config/ReportConfig';
import { Utils } from '../../../framework/Utils';
import ButtonSimple from '../../../framework/gui/button/ButtonSimple';
import { DelegateComponent } from '../../../framework/layer/DelegateComponent';
import { resLoader } from '../../../framework/loader/ResLoader';
import { EventManager } from '../../../framework/manager/EventManager';
import { BaseComponent } from '../../../framework/vc/BaseComponent';
import { Platform } from '../../../platform/Platform';
const { ccclass, property } = _decorator;

/**
 * Name = giftDiscountCtr
 * URL = db://assets/package/giftbag/scripts/giftDiscountCtr.ts
 * Time = Sun Jan 29 2023 14:47:26 GMT+0800 (中国标准时间)
 * Author = xueya
 * Life: onLoad-->onEnable->start->update->lateUpdate->onDisable->onDestroy
 * 每日特价礼包，支持RMB看视频分享购买
 */

@ccclass('giftDiscountCtr')
export class giftDiscountCtr extends BaseComponent {

    //礼包克隆节点
    @property({ tooltip: "礼包克隆节点", type: Node })
    private nodeBoxGift: Node | null = null;
    //礼包box容器节点
    @property({ tooltip: "礼包滚动容器", type: ScrollView })
    private scrollowView: ScrollView | null = null;

    //礼包box容器节点
    @property({ tooltip: "礼包box容器节点", type: Node })
    private itemPanel: Node | null = null;
    //关闭节点
    @property({ tooltip: "关闭节点", type: Node })
    private btnClose: Node | null = null;
    //购买节点
    @property({ tooltip: "购买节点", type: Node })
    private btnBuy: Node | null = null;

    //背景节点
    @property({ tooltip: "背景节点", type: Node })
    private bgNode: Node | null = null;
    /** 基本配置 */
    private _holidayConf = {}
    /** 当前选中的Item索引 （-1：未选择 0 1 2） */
    private _selectedIndex = -1;
    /** 当前选中的Item背景图片 */
    private _currowSelectItemBg = null;

    private _cloneBtnBuyicon = null;
    /** 上一个跳转过来的付费场景 */
    private _FowardPayScene: string = null;
    /** 发送的看广告的数据 */
    private _sendCheckWatchADsData = null;
    /**初始化添加事件绑定 */
    protected onInitModuleEvent(): void {
        /** 请求分享领奖返回 */
        this.addModelListener(AppEvent.NET_RESP_SHARE_AWARD, this.respShareAndAdsAward)
        /** 请求看视频领奖返回 */
        this.addModelListener(AppEvent.NET_RESP_ADS_AWARD, this.respShareAndAdsAward);

        //限时礼包活动更新
        this.addModelListener(AppEvent.ACTIVITY_UPDATE_HOLIDAYSGIFTPACKAGE, this.updateView)
        /** 礼包红点更新 */
        this.addModelListener(AppEvent.NOTIFY_UPDATE_RED_DOT, this.redDotUpdate);

        //rmb支付回调
        this.addModelListener(AppEvent.NET_FORWARD_REPORT_PAY_ORDER, this.respPayOrder);
    }

    onLoad() {
        //获取上一个付费场景
        let param = this.getComponent(DelegateComponent).getParams();
        console.log(param, 'param');
        this._FowardPayScene = param ? param["pay_scene"] : null;
        this.initView();
        this.updateView();
        //请求限时折扣配置数据
        EventManager.dispatch(AppEvent.NET_REQ_HOLIDAYS_GIFTPACKAGE);
        GCache.RedDot.update_reddot_gift_holiday();
    };

    start() {
        EventManager.dispatch(AppEvent.REPORT_CLIENT_CLICK, { eventID: ReportConfig.gift_holiday_2 });
    };

    /** 请求看视频领奖和分享领奖返回 */
    respShareAndAdsAward(event, isSuccess, respData, reqData) {
        console.log("respShareAndAdsAward", isSuccess, respData, reqData)
        if (isSuccess == false) {
            return;
        }
        EventManager.dispatch(AppEvent.NET_REQ_HOLIDAYS_GIFTPACKAGE);
    }


    /** 支付订单返回 */
    respPayOrder(event, isSuccess, respData, reqData) {
        console.log("respPayOrder:discount", isSuccess, respData, reqData)
        if (isSuccess == false) {
            return;
        }
        EventManager.dispatch(AppEvent.NET_REQ_HOLIDAYS_GIFTPACKAGE);
    }

    /** 初始化界面 */
    initView() {
        this.nodeBoxGift.active = false;
        this.scrollowView.node.active = true;
        this.itemPanel.active = true;
        this.btnBuy.active = false;
        this.btnClose.active = true;
        this.detailData();
        this.updateView();
    }

    /** 处理数据 */
    detailData() {
        this._holidayConf = GCache.Activity.getHolidaysGiftPackage()
    }

    /** 更新背景 */
    refreshImageBg() {
        let self = this;
        if (this._holidayConf && this._holidayConf["basemap"] != "") {
            resLoader.loadRemote(this._holidayConf["basemap"], { ext: `.jpg` }, (err, imageAsset) => {
                if (!imageAsset) { //资源可能还在加载中
                    return
                }
                if (!self.node || self.node.isValid == false) {
                    return;
                }
                let spriteFrame = Utils.image_ImageAssetToSpriteFrame(imageAsset)
                if (spriteFrame) {
                    this.bgNode.getComponent(Sprite).spriteFrame = spriteFrame;
                }
            });
        }
    }

    /** 更新界面 */
    updateView() {
        //当有更新时，重新获取一次礼包缓存数据
        this.detailData();
        // this.refreshImageBg()
        let maxDataItem = Utils.table_verify(this._holidayConf['giftpack'], true).length
        this._selectedIndex = -1;
        for (let i = 0; i < maxDataItem; i++) {
            let data = this.getItemData(i);
            if (data) {
                if (data.hadNum < data.maxNum || data.maxNum == 0) {
                    this._selectedIndex = i;
                    break;
                }
            }
        }
        let currowNum = this.itemPanel.children.length;
        if (currowNum < maxDataItem) {
            for (let i = currowNum; i < maxDataItem; i++) {
                let node = instantiate(this.nodeBoxGift);
                this.itemPanel.addChild(node);
            }
        } else if (currowNum > maxDataItem) {
            for (let i = (currowNum - 1); i >= maxDataItem; i--) {
                let node = this.itemPanel.children[i];
                if (node) {
                    node.removeFromParent();
                }
            }
        }
        this._currowSelectItemBg = null;
        let count = 0;
        for (let i = 0; i < this.itemPanel.children.length; i++) {
            let nodeItem = this.itemPanel.children[i];
            count = count + 1;
            this.updateItemBox(nodeItem, i);
        }
        let self = this;
        let layout = self.itemPanel.getComponent(Layout);
        layout.spacingX = (count == 2 ? 100 : 0);
        layout.updateLayout();
        this.addSchedulerOnce(0, () => {
            if (self.itemPanel.getComponent(UITransform).width > self.scrollowView.node.getComponent(UITransform).width) {
                self.scrollowView.enabled = true;
                self.scrollowView.scrollToLeft(0.01, false);
            } else {
                self.scrollowView.enabled = false;
            }
        })
        this.updateButton()
    }

    /** 更新按钮 */
    updateButton() {
        let self = this;
        if (this._holidayConf['giftpack']) {
            let item = this._holidayConf['giftpack'][this._selectedIndex];
            if (item.buyBtnIcon) {
                resLoader.loadRemote(item.buyBtnIcon, { ext: `.jpg` }, (err, imageAsset) => {
                    if (!imageAsset) { //资源可能还在加载中
                        return
                    }
                    if (!self.node || self.node.isValid == false) {
                        return;
                    }
                    let spriteFrame = Utils.image_ImageAssetToSpriteFrame(imageAsset)
                    if (spriteFrame) {
                        this.btnBuy.getComponent(Sprite).spriteFrame = spriteFrame;
                    }
                });
                this.btnBuy.active = true;
            }
        } else {
            this.btnBuy.active = false;
        }

    }


    /**
     * 获取单个item的数据
     * @param idx 数据下标 0 1 2
     * @returns {}
     */
    getItemData(idx) {
        if (this._holidayConf == null || this._holidayConf['giftpack'] == null) {
            return null;
        }
        let item = this._holidayConf['giftpack'][idx]
        if (Utils.table_isEmpty(item)) {
            return null;
        }
        let goodsId = Utils.number_valueOf(item['gid'], 0)

        if (goodsId <= 0) {
            EventManager.dispatch(AppEvent.SYS_TOAST_TIP, { content: "err:找不到商品数据" });
            return;
        }
        let payData = GCache.ShopInfo.getPriceByGoodsSceneId(GConstants.GoodsListID.limitPack, goodsId);
        let maxNum = Utils.number_valueOf(payData['limitNum'], 0);
        let isLimit = Utils.number_valueOf(payData['limit_buy_way'], 0);
        maxNum = isLimit > 0 ? maxNum : 0;
        return {
            maxNum: maxNum,
            hadNum: item.num,
            icon: item.icon
        }
    }


    /**
     * 
     * @param node 节点
     * @param idx 索引
     * @returns 
     */
    updateItemBox(node: Node, idx) {
        let select = node.getChildByName("select");
        let bg = node.getChildByName("bg");
        //选中
        let check = bg.getChildByName("check");
        //蒙版
        let mask = bg.getChildByName("mask");
        //购买
        let buy = bg.getChildByName("buy");
        let imgLabel = node.getChildByName("imgLabel");
        let labelNum = imgLabel.getChildByName("labelNum")
        let data = this.getItemData(idx);
        if (!data) {
            node.active = false;
            return;
        }

        //初始化
        node.active = true;
        check.active = false;
        select.active = false;
        mask.active = false;
        buy.active = false;

        node["Index"] = idx;
        let iconUrl = data.icon;
        console.log("_selectedIndex:updateItemBox:", this._selectedIndex)
        if (data.hadNum < data.maxNum || data.maxNum == 0) {
            if (this._selectedIndex == idx) {
                this._currowSelectItemBg = bg;
                check.active = true;
                select.active = true;
            }
        } else {
            //已经购买
            mask.active = true
            buy.active = true
            imgLabel.active = false;
            labelNum.active = false;
        }
        this.getPreLoaderRemoteRes(iconUrl, '.jpg', (imageAsset) => {
            if (!imageAsset) { //资源可能还在加载中
                return
            }
            if (!bg || bg.isValid == false) {
                return;
            }
            let spriteFrame = Utils.image_ImageAssetToSpriteFrame(imageAsset)
            if (spriteFrame) {
                let spriteComponent = bg.getComponent(Sprite);
                spriteComponent.spriteFrame = spriteFrame;
            }
        })
        let buttonSimple = node.getComponent(ButtonSimple);
        if (data.maxNum > 0) {
            buttonSimple.Interactable = (data.hadNum < data.maxNum);
            labelNum.getComponent(LabelComponent).string = data.hadNum + "/" + data.maxNum;
        }
        else {
            imgLabel.active = false;
            labelNum.active = false;
        }
    }

    /**
     * 点击了单个Item
     * @param event 
     * @returns 
     */
    onClickChooseItem(event: EventTouch) {
        if (event.currentTarget["Index"] == null) {
            return;
        }
        let idx = event.currentTarget["Index"];
        if (this._selectedIndex == idx) {
            return;
        }
        EventManager.dispatch(AppEvent.SYS_PLAY_EFFECT, AppSound.CommClick);
        let conf = this._holidayConf['giftpack'][idx]
        let goodsId = Utils.number_valueOf(conf.gid, 0)
        EventManager.dispatch(AppEvent.REPORT_CLIENT_CLICK, { eventID: ReportConfig.gift_holiday_3, body: { gsubname: goodsId } });
        //让当前选的进入选中状态,让老的选中进入未选中状态
        let _currowSelectItemBg = this._currowSelectItemBg;
        //老的成为未选中
        _currowSelectItemBg.getChildByName("check").active = false;
        let oldSelect = _currowSelectItemBg.getParent().getChildByName("select");
        oldSelect.active = false;
        this._currowSelectItemBg = event.currentTarget.getChildByName("bg");
        this._currowSelectItemBg.getChildByName("check").active = true;
        let newSelect = this._currowSelectItemBg.getParent().getChildByName("select");
        newSelect.active = true;
        this._selectedIndex = idx;
        console.log("_selectedIndex:onClickChooseItem:", this._selectedIndex);
        this.updateButton();
    }


    /** 点击了购买 */
    onClickBuyButton(event: EventTouch) {
        if (this._selectedIndex == -1) {
            return;
        }
        EventManager.dispatch(AppEvent.SYS_PLAY_EFFECT, AppSound.CommClick);
        this._buyItem(this._selectedIndex);
    }

    /**
     * 点击购买每日特价礼包
     * @param idx 索引
     * @returns 
     */
    _buyItem(idx) {
        let conf = this._holidayConf['giftpack'][idx]
        let goodsId = Utils.number_valueOf(conf.gid, 0)
        if (Utils.table_isEmpty(conf) || goodsId <= 0) {
            EventManager.dispatch(AppEvent.SYS_TOAST_TIP, { content: "err:找不到商品数据，支付失败" });
            return;
        }
        EventManager.dispatch(AppEvent.REPORT_CLIENT_CLICK, { eventID: ReportConfig.gift_holiday_12, body: { gsubname: goodsId } });
        let payData = GCache.ShopInfo.getPriceByGoodsSceneId(GConstants.GoodsListID.limitPack, goodsId);
        console.log("paydata:", payData)
        let payID = Utils.number_valueOf(payData['payID'], 0)
        if (payID <= 0) {
            EventManager.dispatch(AppEvent.SYS_TOAST_TIP, { content: "err:找不到商品支付方式，支付失败" });
            return;
        }
        let boughtNum = Utils.number_valueOf(conf["num"], 0);
        let maxNum = Utils.number_valueOf(payData["limitNum"], 0)
        let isLimit = Utils.number_valueOf(payData['limit_buy_way'], 0);
        maxNum = isLimit > 0 ? maxNum : 0;
        if (boughtNum >= maxNum && maxNum > 0) {
            EventManager.dispatch(AppEvent.SYS_TOAST_TIP, { content: "已超过最大次数上限" })
            return;
        }
        switch (payID) {
            case GConstants.PayType.RMB: //rmb 1
                GCache.CurrowPaySceneType = GConstants.GoodsListID.limitPack;
                EventManager.dispatch(AppEvent.OTHER_PAY_WILL, GConstants.GoodsListID.limitPack, goodsId);
                break;
            case GConstants.PayType.SHARE://分享支付
                let self = this
                let _allowShareMsg = GCache.ShareInfo.shareTimeAllowed(goodsId, GConstants.ShareSceneConf.shopshare);
                if (_allowShareMsg['allowShare']) {
                    Platform.shareWXFriends(_allowShareMsg['shareParams'], Utils.handler(self, self.__doCallBackShare), goodsId);
                } else {
                    EventManager.dispatch(AppEvent.SYS_TOAST_TIP, { content: `请勿在短时间内重复分享` });
                }
                break;
            case GConstants.PayType.VIDEO://看视频
                Platform.playerAdVideo(Utils.handler(this, this.__doCallBackWatchADs), goodsId)
                break;
            default:
                EventManager.dispatch(AppEvent.SYS_TOAST_TIP, { content: "err:不支持的支付方式 code=" + payID });
                break;
        }
    }

    /**
     * 分享完商品发放奖励发奖励
     * @param goodsID 商品ID
     */
    __doCallBackShare(goodsID) {
        console.log('__doCallBackShare', goodsID)
        EventManager.dispatch(AppEvent.NET_REQ_SHARE_AWARD, goodsID, GConstants.ReqUrl.shareType.shop, true)
    }


    /**
     * 看完视频广告发奖励
     * @param status 是否成功
     * @param goodsID 商品ID
     * @returns 
     */
    __doCallBackWatchADs(status: boolean, goodsID) {
        if (status != true) {
            EventManager.dispatch(AppEvent.SYS_TOAST_TIP, { content: "err:看广告失败" });
            return;
        }
        EventManager.dispatch(AppEvent.NET_REQ_ADS_AWARD, goodsID, GConstants.ReqUrl.shareType.shop, true)
    }




    /** 点击了关闭 */
    onClickClose(event: EventTouch) {
        EventManager.dispatch(AppEvent.SYS_PLAY_EFFECT, AppSound.CommClick);
        this.node.destroy();
    }

    //销毁
    onDestroy() {

    };

    /**
     * 红点更新
     * @param event 
     * @param keyType 红点类型
     */
    redDotUpdate(event, keyType) {
        if (keyType == GConstants.RedDotConf.Holiday) {

        }
    }

}

