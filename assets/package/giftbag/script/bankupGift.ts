
import { Button, EventTouch, Node, Sprite, _decorator } from 'cc';
import { GCache } from '../../../cache/GCache';
import { AppEvent } from '../../../config/AppEvent';
import { GConstants } from '../../../config/GameConstant';
import { GameTxt } from '../../../config/GameTxt';
import { resLoader } from '../../../framework/loader/ResLoader';
import { EventManager } from '../../../framework/manager/EventManager';
import { Utils } from '../../../framework/Utils';
import { BaseComponent } from '../../../framework/vc/BaseComponent';
import { Platform } from '../../../platform/Platform';
const { ccclass, property, menu } = _decorator;

/**
 * Name = bankupGift
 * URL = db://assets/package/hall/scripts/bankupGift.ts
 * Time = Wed Nov 30 2023 11:58:45 GMT+0800 (中国标准时间)
 * Author = 
 *
 *
 */

@ccclass('bankupGift')
//方便编辑器识别的菜单项目
@menu('bankupGift')
export class bankupGift extends BaseComponent {
    //购买按钮节点
    @property(Node)
    buyBtnNode: Node = null!;

    //领取按钮节点
    @property(Node)
    getMoneyBtnNode: Node = null!;

    //背景节点
    @property(Node)
    BGNode: Node = null!;

    //道具
    @property(Node)
    item_1: Node = null!;
    //道具
    @property(Node)
    item_2: Node = null!;
    //道具
    @property(Node)
    item_3: Node = null!;

    //破产数据缓存
    _bankrupFeedbackData = null;


    //当前选中的商品节点
    _currowChooseIndex = -1;

    //道具节点
    _goodsGiftArray = [];

    onLoad() {
        this._goodsGiftArray = [
            this.item_1,
            this.item_2,
            this.item_3
        ]
        this.updataBankUpData();
        this.updateView()
    };

    start() {

    };

    //初始化模块事件
    onInitModuleEvent() {
        //请求破产礼包数据返回
        this.addModelListener(AppEvent.NET_RESP_BANKRUPT_GIFT_CONF, this.respBankUpGiftConf)
        //领取补助结果返回
        this.addModelListener(AppEvent.ACTIVITY_BANKUP_BACK, this.getOnGetMoneyCallBack)

    }

    //更新破产配置
    updataBankUpData() {
        if (GCache.Activity && GCache.BankrupData.getNewBankUpGiftConf()) {
            this._bankrupFeedbackData = GCache.BankrupData.getNewBankUpGiftConf();
            console.log(GCache.BankrupData.getNewBankUpGiftConf(), GCache.BankrupData.getBankUpFeedbackData(), "破产配置")
        } else {
            console.log(GCache.BankrupData.getNewBankUpGiftConf(), GCache.BankrupData.getBankUpFeedbackData(), "无破产配置")
        }
    }

    //更新界面
    updateView() {
        let self = this;
        let giftPack = null;
        if (this._bankrupFeedbackData) {
            giftPack = this._bankrupFeedbackData["giftPack"];
        }
        // 更新商品信息
        for (let index = 0; index < this._goodsGiftArray.length; index++) {
            // 默认关闭所有未选中
            let checkImg = this._goodsGiftArray[index].getChildByName('check')
            checkImg.active = false
            if (this._currowChooseIndex == null || this._currowChooseIndex < 0) {
                this._currowChooseIndex = -1
            }
        }
        //商品显示
        if (giftPack && giftPack.length != 0) {
            let len = giftPack.length;
            for (let index = 0; index < len; index++) {
                // 当前节点
                let itemNode = this._goodsGiftArray[index]
                // 商品图片
                let goodBg = itemNode.getChildByName('bg')


                let icon = giftPack[index]['icon'];
                if (icon) {
                    //加载远端资源图
                    if (icon && icon != "") {
                        resLoader.loadRemote(icon, { ext: `.jpg` }, (err, imageAsset) => {
                            if (!imageAsset) { //资源可能还在加载中
                                return
                            }
                            if (!self.node || self.node.isValid == false) {
                                return;
                            }
                            let spriteFrame = Utils.image_ImageAssetToSpriteFrame(imageAsset)
                            if (spriteFrame) {
                                goodBg.getComponent(Sprite).spriteFrame = spriteFrame;

                            }
                        })
                    }
                }
            }
            //更新第一个支付按钮
            this.upGoodsBuyBtn(giftPack[0])
            //默认选中第0个商品
            this.openPageChoseGood(0)

        }

    }
    // 打开页面时候默认选中第几个
    openPageChoseGood(index) {
        let checkImg = this._goodsGiftArray[index].getChildByName('check')
        checkImg.active = true
        this._currowChooseIndex = index
    }
    //购买商品
    onClickBuyGoods(event: EventTouch, custom: string) {
        if (this._currowChooseIndex == -1 || this._currowChooseIndex == null) {
            EventManager.dispatch(AppEvent.SYS_TOAST_TIP, { content: "请选择要购买的礼包" });
            return;
        }
        if (Utils.isNotNull(this._currowChooseIndex, this._bankrupFeedbackData["giftPack"][this._currowChooseIndex])) {
            //支付场景赋值
            GCache.CurrowPaySceneType = GConstants.UBPaySceneConfig.KRoomBrokenRecharge;
            let gid = this._bankrupFeedbackData["giftPack"][this._currowChooseIndex]["id"];
            //查找支付类型
            let payData = GCache.ShopInfo.getPriceByGoodsSceneId(GConstants.GoodsListID.Bankruptcy, gid);
            console.log('当前支付信息', payData)
            this.checkBuyWay(payData['payID'], gid)
        }
    }
    //根据支付信息做不同的处理
    checkBuyWay(payID, goodsId) {
        switch (payID) {
            case GConstants.PayType.RMB: //rmb 1
                GCache.CurrowPaySceneType = GConstants.GoodsListID.Bankruptcy;
                EventManager.dispatch(AppEvent.OTHER_PAY_WILL, GConstants.GoodsListID.Bankruptcy, goodsId);
                //支付完成 关闭自身
                this.node.destroy();
                break;
            case GConstants.PayType.SHARE://分享支付
                let self = this
                let _allowShareMsg = GCache.ShareInfo.shareTimeAllowed(goodsId, GConstants.ShareSceneConf.shopshare);
                if (_allowShareMsg['allowShare']) {
                    Platform.shareWXFriends(_allowShareMsg['shareParams'], Utils.handler(self, self.__doCallBackShare), _allowShareMsg);
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
    /** 分享完商品发放奖励发奖励 */
    __doCallBackShare(data) {
        if (Platform.isWXPlatform()) {
            if (data['shareUseTime'] < GConstants.shareSucConditions.shareUseTime) {
                EventManager.dispatch(AppEvent.SYS_TOAST_TIP, { content: GameTxt.shareFailMsg });
            } else {
                EventManager.dispatch(AppEvent.NET_REQ_SHARE_AWARD, data['gid'], GConstants.ReqUrl.shareType.shop, true)
            }
        } else {
            EventManager.dispatch(AppEvent.NET_REQ_SHARE_AWARD, data['gid'], GConstants.ReqUrl.shareType.shop, true)
        }

    }
    /** 看完视频广告发奖励 */
    __doCallBackWatchADs(status, goodsID) {
        if (status != true) {
            EventManager.dispatch(AppEvent.SYS_TOAST_TIP, { content: "err:看广告失败" });
            return;
        }
        EventManager.dispatch(AppEvent.NET_REQ_ADS_AWARD, goodsID, GConstants.ReqUrl.shareType.shop, true)
    }
    //商品的点击
    onClickGoods(event: EventTouch) {
        // 点击的节点
        let Checkmark = event.getCurrentTarget()
        for (let index = 0; index < this._goodsGiftArray.length; index++) {
            let checkImg = this._goodsGiftArray[index].getChildByName('check')
            if (Checkmark.name == this._goodsGiftArray[index].name) {
                this._currowChooseIndex = index
                if (this._bankrupFeedbackData && this._bankrupFeedbackData["giftPack"]) {
                    let currentGood = this._bankrupFeedbackData["giftPack"][index]
                    // 选中状态  
                    checkImg.active = true
                    // 更新按钮
                    this.upGoodsBuyBtn(currentGood)
                }
            } else {
                checkImg.active = false
            }
        }
    }
    // 更新购买按钮
    upGoodsBuyBtn(currentgoods) {
        let self = this;
        let buyBtn = currentgoods['buyBtnIcon'];
        if (buyBtn) {
            //加载远端资源图 支付按钮
            if (buyBtn && buyBtn != "") {
                resLoader.loadRemote(buyBtn, { ext: `.jpg` }, (err, imageAsset) => {
                    if (!imageAsset) { //资源可能还在加载中
                        return
                    }
                    if (!self.node || self.node.isValid == false) {
                        return;
                    }
                    let spriteFrame = Utils.image_ImageAssetToSpriteFrame(imageAsset)
                    if (spriteFrame) {
                        this.buyBtnNode.getComponent(Sprite).spriteFrame = spriteFrame;
                    }
                })
            }
        }
    }
    //关闭
    onClickReturn() {
        EventManager.dispatch(AppEvent.GAME_GOTO_EXIT);
        this.node.destroy();

    }

    //领取补助
    onClickGetMoney() {
        //领取救济金
        EventManager.dispatch(AppEvent.NET_REQ_BANKRUPT);
    }

    //领取补助返回
    getOnGetMoneyCallBack(event, isSuccess, packetInfo) {
        if (isSuccess) {
            this.getMoneyBtnNode.getComponent(Button).interactable = false;
        }

    }

    onMaskClick() {
        this.node.destroy();
    }

    //销毁
    onDestroy() {

    };
    /**
     * 请求破产礼包数据返回
    */
    respBankUpGiftConf(event, isSuccess, respData, reqData) {
        if (!isSuccess) {
            return;
        }
        this.updataBankUpData();
        this.updateView()
    }
}