
import { EventTouch, Label, Node, ScrollView, Sprite, SpriteAtlas, SpriteFrame, UITransform, _decorator, instantiate } from 'cc';
import { GCache } from '../../../cache/GCache';
import { AppEvent } from '../../../config/AppEvent';
import { AppSound } from '../../../config/AppSound';
import { GConstants } from '../../../config/GameConstant';
import { GameRes } from '../../../config/GameRes';
import { Utils } from '../../../framework/Utils';
import { resLoader } from '../../../framework/loader/ResLoader';
import { EventManager } from '../../../framework/manager/EventManager';
import { BaseComponent } from '../../../framework/vc/BaseComponent';
import { PayAgent } from '../../../proj/PayAgent';

const { ccclass, property, menu } = _decorator;

/**
 * Name = buyDialogCtr
 * Time = Wed Apr 13 2022 16:27:07 GMT+0800 (中国标准时间)
 * Author = Aby
 * Life: onLoad-->onEnable->start->update->lateUpdate->onDisable->onDestroy
 * 购买弹窗
 */

@ccclass('buyDialogCtr')

//方便编辑器识别的菜单项目
@menu('vc/buyDialogCtr')

export class buyDialogCtr extends BaseComponent {

    //标题sprite
    @property({ tooltip: "标题sprite", type: Sprite })
    private sprite_title: Sprite | null = null;

    //滚动容器节点
    @property({ tooltip: "滚动容器节点", type: Node })
    private node_Scroll: Node | null = null;

    //滚动容器View
    @property({ tooltip: "滚动容器View", type: Node })
    private node_ScrollView: Node | null = null;

    //滚动容器内容父节点
    @property({ tooltip: "滚动容器内容父节点", type: Node })
    private node_scrollContent: Node | null = null;

    //二次确认父节点
    @property({ tooltip: "二次确认父节点", type: Node })
    private node_sureconfirm: Node | null = null;
    //二次确认价格
    @property({ tooltip: "二次确认价格", type: Label })
    private label_surePrice: Label | null = null;
    //二次确认货币ICON
    @property({ tooltip: "二次确认货币ICON", type: Sprite })
    private sprite_sureIcon: Sprite | null = null;
    //二次确认商品名称
    @property({ tooltip: "二次确认商品名称", type: Label })
    private label_sureName: Label | null = null;

    //确认返还父节点
    @property({ tooltip: "确认返还父节点", type: Node })
    private node_confirmBack: Node | null = null;
    //确认返还价格
    @property({ tooltip: "确认返还价格", type: Label })
    private label_confirmBackPrice: Label | null = null;
    //确认返还货币ICON
    @property({ tooltip: "确认返还货币ICON", type: Sprite })
    private sprite_confirmBackIcon: Sprite | null = null;
    //确认返还商品名称
    @property({ tooltip: "确认返还商品名称", type: Label })
    private label_confirmBackName: Label | null = null;

    //点击关闭按钮节点
    @property({ tooltip: "点击关闭按钮节点", type: Node })
    private node_btnClose: Node | null = null;
    //点击购买按钮节点
    @property({ tooltip: "点击购买按钮节点", type: Node })
    private node_btnBuy: Node | null = null;
    //点击确定按钮节点
    @property({ tooltip: "点击确定按钮节点", type: Node })
    private node_btnSure: Node | null = null;

    //兑换节点
    @property({ tooltip: "兑换节点", type: Node })
    private node_Exchange: Node | null = null;

    //兑换icon节点
    @property({ tooltip: "兑换icon节点", type: Sprite })
    private sprite_ExchangeIcon: Sprite | null = null;
    //兑换价格label
    @property({ tooltip: "兑换价格label", type: Label })
    private label_Exchange: Label | null = null;

    //rmb购买节点
    @property({ tooltip: "rmb购买label", type: Label })
    private label_Rmb: Label | null = null;

    /** 用于克隆的道具 */
    @property({ tooltip: "用于克隆的道具", type: Node })
    private cloneItem: Node | null = null;

    //钻石Icon图片
    @property({ tooltip: "钻石Icon图片", type: SpriteFrame })
    private spriFrame_Diamond: SpriteFrame | null = null;

    //金豆Icon图片
    @property({ tooltip: "金豆Icon图片", type: SpriteFrame })
    private spriFrame_Gold: SpriteFrame | null = null;

    /** 加赠新的布局 */
    /** 最外层节点 */
    @property({ tooltip: "加赠节点", type: Node })
    private node_jiaZen: Node | null = null;
    /** 加赠加赠商品 */
    @property({ tooltip: "加赠商品", type: Node })
    private node_jiaZenGoos: Node | null = null;
    /** 加赠商品名字 */
    @property({ tooltip: "加赠商品名字", type: Label })
    private label_jiaZenGoosName: Label | null = null;
    /** 加赠商品图片 */
    @property({ tooltip: "加赠商品图片", type: Node })
    private node_jiaZenGoosImg: Node | null = null;
    /** 加赠商品描述 */
    @property({ tooltip: "加赠商品图片", type: Label })
    private node_jiaZenGoosDesc: Label | null = null;

    /** 需要返还的商品数据 */
    private _needBackGoodList = [];
    /** 是否确认过了返还 */
    private _isSureNeedBack: boolean = false;
    /** 商品数据 */
    private _param = {
        /** 标题 */
        title: "",
        /** s商品数据 */
        itemData: null,
        /** 点击的回调函数 */
        callFunc: null,
        /** 是否为确认购买的弹窗 */
        isConfirm: false,
    };
    /** 预加载 */
    preLoad() {
        this.getPreLoaderRes(GameRes.Atlas_DialogTitle.bundle, GameRes.Atlas_DialogTitle.path, SpriteAtlas)
        this.getPreLoaderRes(GameRes.Atlas_Common1.bundle, GameRes.Atlas_Common1.path, SpriteAtlas)
    }
    onLoad() {
        this.preLoad();
        this.getCompParam();
        this.cloneItem.active = false;
        this.node_confirmBack.active = false;
        this._isSureNeedBack = false;
        console.log("购买弹窗 参数内容:>>>", this._param)
    };

    getCompParam() {
        let comp = null;
        comp = this.node.getComponent("DelegateComponent")
        if (comp) {
            this._param = comp.getParams();
        }
        this._param = Utils.table_verify(this._param);
    }
    start() {
        this.updateView();
    };
    //更新Title
    updateTitle() {
        if (Utils.string_isEmpty(this._param.title)) {
            return;
        }
        let titleKey = `dialog_title/${this._param.title}`;
        let self = this;
        this.getPreLoaderRes(GameRes.Atlas_DialogTitle.bundle, GameRes.Atlas_DialogTitle.path, SpriteAtlas, (res) => {
            if (self.node && self.node.isValid == true) {
                self.sprite_title.spriteFrame = res.spriteFrames[titleKey];
            }
        })
    }
    //更新界面
    updateView() {
        this.updateTitle();
        if (Utils.table_isEmpty(this._param.itemData)) {
            return
        }
        if (this._param.isConfirm == true) {
            this.updateOnSureView();
        } else {
            this.updateGoodInfoView();
        }
    }
    /** 检测是否有返还 */
    checkIsBack(resID) {
    }
    /** 更新加赠/物品列表详情界面 */
    updateGoodInfoView() {
        //判空确保有数据
        this._param.itemData = Utils.table_verify(this._param.itemData);
        this.node_scrollContent.removeAllChildren();
        this.node_Scroll.active = true;
        this.node_ScrollView.active = true;
        this.node_scrollContent.active = true;
        this.node_sureconfirm.active = false;
        this.node_confirmBack.active = false;
        this.node_btnSure.active = false;
        this.node_btnClose.active = true;
        this.node_scrollContent.getComponent(UITransform).width = 0;
        console.log('有加赠的数据', this._param.itemData)
        // 	//判断是否存在加赠信息
        if (Utils.table_isEmpty(this._param.itemData["specialDesc"])) {
            //打开加赠节点
            this.node_jiaZen.active = true;
            //设置名称
            this.label_jiaZenGoosName.string = this._param.itemData["name"]
            //设置图片
            this.setSpriteFrame(this.node_jiaZenGoosImg, this._param.itemData["icon"])
            this.node_jiaZenGoosDesc.string = this._param.itemData["name"] + "," + this._param.itemData["specialDesc"];
        } else {
            this.node_jiaZen.active = false;
        }
        //金条支付 待完善
        let PayWay = this._param.itemData.currency || 0
        let PayPrice = this._param.itemData.price || 0
        if (PayWay) {//商品价格
            switch (PayWay) {
                case GConstants.PayType.RMB:
                    this.node_Exchange.active = false;
                    this.label_Rmb.node.active = true;
                    this.label_Rmb.string = `${PayPrice}元`;
                    break;
                case GConstants.PayType.SILVER:
                    this.node_Exchange.active = false;
                    this.label_Rmb.node.active = true;
                    this.label_Rmb.string = `${PayPrice}银币`;
                    break;
                case GConstants.PayType.FREE:
                    this.node_Exchange.active = false;
                    this.label_Rmb.node.active = true;
                    this.label_Rmb.string = "免费";
                    break;
                case GConstants.PayType.TICKET:
                    this.node_Exchange.active = false;
                    this.label_Rmb.node.active = true;
                    this.label_Rmb.string = `${PayPrice}兑换券`;
                    break;
                default:
                    EventManager.dispatch(AppEvent.SYS_TOAST_TIP, { content: "当前支付方式不存在" })
                    break;
            }
            this.node_btnBuy.active = true;
            return;
        } else {
            this.node_btnBuy.active = true;
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
                    node.getComponent(Sprite).spriteFrame = spriteFrame;
                }
            })
        }
    }
    /** 更新确认购买的界面 */
    updateOnSureView() {
        this.node_jiaZen.active = false;
        this.node_scrollContent.active = false;
        this.node_sureconfirm.active = true;
        this.node_btnBuy.active = false;
        this.node_btnSure.active = true;
        this.node_btnClose.active = true;
        this.label_sureName.string = Utils.nullToDefault(this._param.itemData["name"], "");
        let payGold = this._param.itemData.crystal;
        let payData = this._param.itemData.currency;
        if (payData) {
            let iconUITransform = this.sprite_sureIcon.node.getComponent(UITransform);
            if (PayAgent.isRMB(payData)) {
                iconUITransform.width = 0;
                iconUITransform.height = 0;
                this.label_surePrice.string = `${this._param.itemData.price}元`;
            } else if (payData == GConstants.PayType.SILVER) {
                this.label_surePrice.string = `${this._param.itemData.price}银币`;
                this.sprite_sureIcon.spriteFrame = this.spriFrame_Diamond;
                this.sprite_sureIcon.node.active = true;
            } else {
                iconUITransform.width = 0;
                iconUITransform.height = 0;
            }
        }
    }

    /**设置远端图片 */
    setSpriteFrameByRemote(node, path) {
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
                    node.getComponent(Sprite).spriteFrame = spriteFrame;
                }
            })
        }
    }
    /** 切换到确认返还界面 */
    changeToNeedBackView() {
        // 暂无返还的概念
        // this.node_Scroll.active = false;
        // this.node_sureconfirm.active = false;
        // this.node_btnBuy.active = false;

        // let txtGoodName = "";
        // let num = 0;
        // let ty = null;
        // for (let i = 0; i < this._needBackGoodList.length; i++) {
        //     let v = this._needBackGoodList[i];
        //     txtGoodName = txtGoodName + "[" + v["item_name"] + "]";
        //     num = num + v["back_assets_number"];
        //     if (ty == null) {
        //         ty = v["back_assets_type"];
        //     }
        // }



        // this.node_confirmBack.active = true;
        // this.node_btnSure.active = true;
        // this.addSchedulerOnce(2, () => {
        //     this._isSureNeedBack = true;
        // })

    }
    /** 点击购买按钮 */
    onClickBuy(event: EventTouch) {
        console.log('点击了购买按钮', this._param.callFunc, this._param.itemData)
        EventManager.dispatch(AppEvent.SYS_PLAY_EFFECT, AppSound.CommClick);
        // if (this._needBackGoodList.length > 0 && this._isSureNeedBack == false) {
        // 	this.changeToNeedBackView();
        // 	return;
        // }
        this.node.destroy();
        if (this._param.callFunc) {
            this._param.callFunc(this._param.itemData);
        }
    }
    /** 点击确定按钮 */
    onClickSure(event: EventTouch) {
        EventManager.dispatch(AppEvent.SYS_PLAY_EFFECT, AppSound.CommClick);
        this.node.destroy();
        if (this._param.callFunc) {
            this._param.callFunc(this._param.itemData);
        }
    }
    /** 点击了关闭 */
    onClickClose(event: EventTouch) {
        EventManager.dispatch(AppEvent.SYS_PLAY_EFFECT, AppSound.CommClick);
        this.node.destroy();
    }
    //销毁
    onDestroy() {

	};
}

