
import { EventTouch, Node, Sprite, _decorator } from 'cc';
import { GCache } from '../../../cache/GCache';
import { AppEvent } from '../../../config/AppEvent';
import { AppSound } from '../../../config/AppSound';
import { GConstants } from '../../../config/GameConstant';
import { Utils } from '../../../framework/Utils';
import { resLoader } from '../../../framework/loader/ResLoader';
import { EventManager } from '../../../framework/manager/EventManager';
import { BaseComponent } from '../../../framework/vc/BaseComponent';
import { Platform } from '../../../platform/Platform';

const { ccclass, property, menu } = _decorator;

/**
 * Name = giftFirstPayPrefabCtr
 * URL = db://assets/package/activity/script/giftFirstPayPrefabCtr.ts
 * Time = Tue Aug 01 2023 16:31:29 GMT+0800 (中国标准时间)
 * Author = flychenliuwang
 *
 * Life: onLoad-->onInitModuleEvent-->onEnable->start->update->lateUpdate->onDisable->onDestroy
 * 
 */
@ccclass('giftFirstPayPrefabCtr')
//方便编辑器识别的菜单项目
@menu('prefab/activity/giftFirstPayPrefabCtr')
export class giftFirstPayPrefabCtr extends BaseComponent {

    @property({ tooltip: "背景", type: Node })
    private bgNode: Node | null = null;

    @property({ tooltip: "购买按钮", type: Node })
    private buyBtn: Node | null = null;

    /** 首充配置 */
    private _firstPayConf = null;

    /** override 初始化模块事件 */
    protected onInitModuleEvent() {
        //首充数据更新则更新界面
        this.addModelListener(AppEvent.ACTIVITY_UPDATE_FIRSTPAY_CONF, this.updateView);
        /** 请求分享领奖返回 */
        this.addModelListener(AppEvent.NET_RESP_SHARE_AWARD, this.respShareAndAdsAward);
        /** 请求看视频领奖返回 */
        this.addModelListener(AppEvent.NET_RESP_ADS_AWARD, this.respShareAndAdsAward);
        /** 首充礼包红点更新 */
        this.addModelListener(AppEvent.NOTIFY_UPDATE_RED_DOT, this.redDotUpdate);
        //rmb支付回调
        this.addModelListener(AppEvent.NET_FORWARD_REPORT_PAY_ORDER, this.respPayOrder);
    };

    onLoad() {
        this.initView();
        this.detailData();
        this.updateView();
        //请求限时折扣配置数据
        EventManager.dispatch(AppEvent.NET_REQ_FIRST_PAY_CONFIG);
        GCache.RedDot.update_reddot_gift_firstpay();
    };

    /** 处理数据 */
    detailData() {
        this._firstPayConf = GCache.Activity.getFirstPayPackage();
    }

    start() {

    };

    /** 初始化界面 */
    initView() {
        this.buyBtn.active = false;

    };

    /** 更新界面 */
    updateView() {
        this.detailData();
        console.log("数据更新了", this._firstPayConf)
        if (Utils.table_isEmpty(this._firstPayConf)) {
            console.log("数据更新了为空", this._firstPayConf);
            this.buyBtn.active = false;
            this.node.destroy();
            return;
        }
        this.refreshImageBgAndButton();
        this.buyBtn.active = true;
    };

    //更新背景
    refreshImageBgAndButton() {
        let self = this;
        if (this._firstPayConf && this._firstPayConf["goodsBaseMap"] != "" && this._firstPayConf["button"] != "") {
            resLoader.loadRemote(this._firstPayConf["goodsBaseMap"], { ext: `.jpg` }, (err, imageAsset) => {
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

            resLoader.loadRemote(this._firstPayConf["button"], { ext: `.jpg` }, (err, imageAsset) => {
                if (!imageAsset) { //资源可能还在加载中
                    return
                }
                if (!self.node || self.node.isValid == false) {
                    return;
                }
                let spriteFrame = Utils.image_ImageAssetToSpriteFrame(imageAsset)
                if (spriteFrame) {
                    this.buyBtn.getComponent(Sprite).spriteFrame = spriteFrame;
                }
            });
        }
    }


    /** 点击了购买 */
    onClickBuyButton(event: EventTouch) {
        console.log("点击购买")
        this._buyItem();
    }

    /**
     * 点击购买每日特价礼包
     */
    _buyItem() {
        let goodsId = Utils.number_valueOf(this._firstPayConf['gid'], 0)
        let payData = GCache.ShopInfo.getPriceByGoodsSceneId(GConstants.GoodsListID.GiftPack, goodsId);
        console.log("paydata:", payData)
        let payID = Utils.number_valueOf(payData['payID'], null)
        if (!payID) {
            EventManager.dispatch(AppEvent.SYS_TOAST_TIP, { content: "err:首充礼包找不到商品支付方式，支付失败" });
            return;
        }
        switch (payID) {
            case GConstants.PayType.RMB: //rmb 1
                GCache.CurrowPaySceneType = GConstants.GoodsListID.GiftPack;
                EventManager.dispatch(AppEvent.OTHER_PAY_WILL, GConstants.GoodsListID.GiftPack, goodsId);
                break;
            case GConstants.PayType.SHARE://分享支付
                let self = this;
                let _allowShareMsg = GCache.ShareInfo.shareTimeAllowed(goodsId, GConstants.ShareSceneConf.shopshare)
                if (_allowShareMsg['allowShare']) {
                    Platform.shareWXFriends(_allowShareMsg['shareParams'], Utils.handler(self, self.__doCallBackShare), goodsId);
                } else {
                    // 请勿在短时间内重复分享
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

    /**
     * 分享完商品发放奖励发奖励
     * @param goodsID 商品ID
     */
    __doCallBackShare(goodsID) {
        EventManager.dispatch(AppEvent.NET_REQ_SHARE_AWARD, goodsID, GConstants.ReqUrl.shareType.shop, true);
    }


    /** 请求看视频领奖和分享领奖返回 */
    respShareAndAdsAward(event, isSuccess, respData, reqData) {
        console.log("首充看视频领奖和分享领奖返回", isSuccess, respData, reqData)
        if (isSuccess == false) {
            return;
        }
        EventManager.dispatch(AppEvent.NET_REQ_FIRST_PAY_CONFIG);
    }

    /** 支付订单返回 */
    respPayOrder(event, isSuccess, respData, reqData) {
        console.log("respPayOrder:firstpay", isSuccess, respData, reqData)
        if (isSuccess == false) {
            return;
        }
        EventManager.dispatch(AppEvent.NET_REQ_FIRST_PAY_CONFIG);
    }


    /**
     * 点击了关闭
     * @param event 
     */
    onClickClose(event: EventTouch) {
        EventManager.dispatch(AppEvent.SYS_PLAY_EFFECT, AppSound.CommClick);
        this.node.destroy();
    };

    //销毁
    onDestroy() {

    };


    /**
     * 红点更新
     * @param event 
     * @param keyType 红点类型
     */
    redDotUpdate(event, keyType) {
        if (keyType == GConstants.RedDotConf.FirstPay) {

        }
    }

}

