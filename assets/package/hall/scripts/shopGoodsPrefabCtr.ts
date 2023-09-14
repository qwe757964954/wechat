
import { EventTouch, Label, Layout, Node, Sprite, SpriteFrame, _decorator } from 'cc';
import { GConstants } from '../../../config/GameConstant';
import { Utils } from '../../../framework/Utils';
import { resLoader } from '../../../framework/loader/ResLoader';
import { BaseComponent } from '../../../framework/vc/BaseComponent';
const { ccclass, property, menu } = _decorator;

/**
 * Name = shopGoodsPrefabCtr
 * URL = db://assets/package/hall/scripts/shopGoodsPrefabCtr.ts
 * Time = Mon Oct 31 2022 12:19:06 GMT+0800 (中国标准时间)
 * Author = Tomoe
 *
 * Life: onLoad-->onEnable->start->update->lateUpdate->onDisable->onDestroy
 */

@ccclass('shopGoodsPrefabCtr')
@menu('prefab/hall/shopGoodsPrefabCtr')
export class shopGoodsPrefabCtr extends BaseComponent {
    //商品名称
    @property({ tooltip: "商品名称", type: Label })
    private labelName: Label | null = null;

    //商品兑换价格根节点
    @property({ tooltip: "商品兑换价格根节点", type: Node })
    private node_Exchange: Node | null = null;

    //商品兑换图标
    @property({ tooltip: "商品兑换图标", type: Node })
    private node_ExchangeIcon: Node | null = null;
    //商品兑换价格
    @property({ tooltip: "商品兑换价格", type: Label })
    private label_ExchangePrice: Label | null = null;


    //商品人民币/免费价格
    @property({ tooltip: "商品人民币/免费价格", type: Label })
    private label_RmbPrice: Label | null = null;


    //商品数量背景显示
    @property({ tooltip: "商品数量背景显示", type: Node })
    private node_NumBg: Node | null = null;
    //商品数量
    @property({ tooltip: "商品数量", type: Label })
    private label_NumBg: Label | null = null;

    //商品优惠角标显示
    @property({ tooltip: "商品优惠角标显示", type: Sprite })
    private sprite_Corner: Sprite | null = null;

    //商品图片根节点
    @property({ tooltip: "商品图片根节点", type: Node })
    private node_ItemBg: Node | null = null;
    //商品图片节点
    @property({ tooltip: "商品图片", type: Node })
    private node_ItemIcon: Node | null = null;

    //商品已拥有显示
    @property({ tooltip: "商品已拥有显示", type: Node })
    private node_HadBuy: Node | null = null;

    //商品选中节点
    @property({ tooltip: "商品选中节点", type: Node })
    private node_Select: Node | null = null;
    //加赠文字展示节点
    @property({ tooltip: "加赠文字展示节点", type: Node })
    private node_showJiaZeng: Node | null = null;
    //加赠文字展示
    @property({ tooltip: "加赠文字展示", type: Label })
    private label_showJiaZeng: Label | null = null;
    //分享Icon图片
    @property({ tooltip: "分享Icon图片", type: SpriteFrame })
    private spriFrame_share: SpriteFrame | null = null;

    //看视频Icon图片
    @property({ tooltip: "看视频Icon图片", type: SpriteFrame })
    private spriFrame_video: SpriteFrame | null = null;

    //角标-首充加赠
    @property({ tooltip: "角标-首充加赠", type: SpriteFrame })
    private spriFrame_FirstPay: SpriteFrame | null = null;

    //商品点击层节点
    @property({ tooltip: "商品点击层节点", type: Node })
    private node_ClickMask: Node | null = null;


    //商品数据缓存
    _goodsData = null;
    /** 商品是否可显示选中框 */
    isGoodsSelect: boolean = false;
    /** 是否已加载 */
    _isOnLoad = false;

    /** 回调函数 */
    _callbackFunc = null;
    // corner: ""
    // desc: ""
    // gifts: []
    // goodsID:  38
    // hadBuy: false
    // icon: "http://xxddz-static.17c.cn/images/libao-1636528611.png"
    // isPag:  true
    // item_url: ""
    // limitNum: {maxNum: 1, hadNum: 0, timeUnit: 2}
    // limitTime:  {}
    // name:  "超级钻石礼包"
    // order: 3
    // ownStatus: 2
    // pay: [{…}]
    // res: [{…}, {…}]

    /** 设置物品数据 */
    set goodsData(data) {
        this._goodsData = data;
        if (this._isOnLoad) {
            this.updateView();
        }
    }
    get goodsData() {
        return this._goodsData;
    }

    /** 设置选中状态 */
    set isSelect(isSelect: boolean) {
        this.isGoodsSelect = isSelect;
        if (this._isOnLoad) {
            this.updateSelelctState();
        }
    }
    /** 设置选中状态 */
    set clickCallback(func: Function) {
        this._callbackFunc = func;
    }


    onLoad() {

    };

    start() {
        this._isOnLoad = true;
        this.initView();
    };

    initView() {
        this.updateView();
    }


    /** 更新界面 */
    updateView() {
        console.log("更新的商品", this._goodsData)
        if (Utils.table_isEmpty(this._goodsData)) {
            this.node_ClickMask.active = false;
            return
        }
        //商品名称
        this.labelName.string = Utils.nullToDefault(this._goodsData.name, "");
        //更新商品图片
        this.node_ItemBg.active = true;
        this.setSpriteFrameByRemote(this.node_ItemIcon, this._goodsData.icon);
        //是否已购买
        let isHadBuy = false;
        //更新商品数量/是否限购
        if (!this._goodsData.limit_buy_way || this._goodsData.limit_buy_way == '0') {
            this.node_NumBg.active = false;
        } else {
            this.node_NumBg.active = true;
            let maxNum = this._goodsData.limit_buy_num || 0;
            let hadNum = this._goodsData.bought_num || 0;
            this.label_NumBg.string = `${hadNum}/${maxNum}`;
            if (Utils.number_valueOf(hadNum, -1) >= Utils.number_valueOf(maxNum, 0)) {
                //超限购禁止购买
                isHadBuy = true;
            }
        }
        // 判断是否加赠 
        if (!!this._goodsData.specialDesc) {
            this.node_showJiaZeng.active = true;
            this.label_showJiaZeng.node.active = true
            this.label_showJiaZeng.string = this._goodsData.specialDesc
        } else {
            this.node_showJiaZeng.active = false
            this.label_showJiaZeng.node.active = false
        }
        //更新角标图片
        if (Utils.string_isHttp(this._goodsData.eventIcon) == true) {
            console.log('添加了角标')
            this.setSpriteFrameByRemote(this.sprite_Corner.node, this._goodsData.eventIcon);
            this.sprite_Corner.node.active = true;
        } else {
            this.sprite_Corner.node.active = false
        }
        //商品价格 展示金条兑换 下次再做
        switch (this._goodsData.currency) {
            case GConstants.PayType.RMB:// rmb 1 	//人民币支付
                this.node_Exchange.active = false;
                this.label_RmbPrice.node.active = true;
                this.node_ExchangeIcon.active = false;
                this.label_RmbPrice.string = `${this._goodsData.price}元`;
                break;
            case GConstants.PayType.SILVER:
                this.node_Exchange.active = false;
                this.node_ExchangeIcon.active = false;
                this.label_RmbPrice.node.active = true;
                this.label_RmbPrice.string = `${this._goodsData.price}银币`;
                break;
            case GConstants.PayType.TICKET:
                this.node_Exchange.active = false;
                this.node_ExchangeIcon.active = false;
                this.label_RmbPrice.node.active = true;
                this.label_RmbPrice.string = `${this._goodsData.price}兑换券`;
                break;
            case GConstants.PayType.SHARE:
                this.node_Exchange.active = true;
                this.label_RmbPrice.node.active = false;
                this.label_ExchangePrice.node.active = true;
                this.label_ExchangePrice.string = `分享`;
                this.node_ExchangeIcon.active = true;
                this.node_ExchangeIcon.getComponent(Sprite).spriteFrame = this.spriFrame_share;
                break;
            case GConstants.PayType.VIDEO:
                this.node_Exchange.active = true;
                this.label_RmbPrice.node.active = false;
                this.label_ExchangePrice.node.active = true;
                this.label_ExchangePrice.string = `看视频`;
                this.node_ExchangeIcon.active = true;
                this.node_ExchangeIcon.getComponent(Sprite).spriteFrame = this.spriFrame_video;
                break;
            default:
                break;
        }
        this.node_Exchange.getComponent(Layout).updateLayout();
        this.updateSelelctState();
        this.node_ClickMask.active = true;
    }
    /** 更新选中状态 */
    updateSelelctState() {
        this.node_Select.active = this.isGoodsSelect;
    }

    /** 点击函数 */
    onClickFunc(event: EventTouch) {
        if (this._callbackFunc) {
            this._callbackFunc(event);
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

    //销毁
    onDestroy() {

    };

}

