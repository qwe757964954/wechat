
import { Button, EventTouch, ImageAsset, Label, Node, Sprite, _decorator } from 'cc';
import { GCache } from '../../../cache/GCache';
import { AppEvent } from '../../../config/AppEvent';
import { AppSound } from '../../../config/AppSound';
import { GConstants } from '../../../config/GameConstant';
import { GameRes } from '../../../config/GameRes';
import { UIID } from '../../../config/UIConfig';
import { Utils } from '../../../framework/Utils';
import { resLoader } from '../../../framework/loader/ResLoader';
import { EventManager } from '../../../framework/manager/EventManager';
import { BaseComponent } from '../../../framework/vc/BaseComponent';
import { Platform } from '../../../platform/Platform';

const { ccclass, property, menu } = _decorator;

/**
 * Name = buyPropDialogCtr
 * Time = Wed Apr 13 2022 16:27:07 GMT+0800 (中国标准时间)
 * Author = Aby
 * Life: onLoad-->onEnable->start->update->lateUpdate->onDisable->onDestroy
 * 购买道具通用弹窗
 */

@ccclass('buyPropDialogCtr')

//方便编辑器识别的菜单项目
@menu('vc/buyPropDialogCtr')


export class buyPropDialogCtr extends BaseComponent {

    //标题Node
    @property({ tooltip: "顶部标题节点", type: Node })
    titleNode: Node = null!;

    //道具父节点
    @property({ tooltip: "道具父节点", type: Node })
    nodeCenter: Node = null!;
    //道具节点
    @property({ tooltip: "道具节点", type: Node })
    nodeItem: Node = null!;

    //购买按钮节点
    @property({ tooltip: "购买按钮节点", type: Node })
    btnBuy: Node = null!;

    //购买按钮节点-icon
    @property({ tooltip: "购买按钮节点-icon", type: Sprite })
    btnBuyIcon: Sprite = null!;

    //购买按钮节点-price
    @property({ tooltip: "购买按钮节点-price", type: Label })
    btnBuyPrice: Label = null!;


    //道具数量
    @property({ tooltip: "购买按钮节点-price", type: Label })
    itemNum: Label = null!;

    //增加按钮节点
    @property({ tooltip: "增加按钮节点", type: Node })
    btnAdd: Node = null!;
    //减少按钮节点
    @property({ tooltip: "减少按钮节点", type: Node })
    btnCut: Node = null!;


    //当前传递的参数
    private _currowParam = {
        /** 商品ID */
        goodsId: null,
        /** 分类ID（可不传） */
        itmeId: null,
        /** 支付场景 */
        scene: null,
        /** 是否来自游戏 */
        fromGame: false,
        /** 付费场景 */
        pay_scene: null
    };

    private _currowViewParam = {
        num: 1,
        payInfo: null
    };
    //fromGame:false
    // goodsId: goodid,
    // itmeId: GConstants.GoodItemIDs.SIGN_CARD,
    // scene: GConstants.PayModel.sign_card


    onInitModuleEvent() {
        //添加兑换结果监听
        this.addModelListener(AppEvent.NOTIFY_EXCHANGE_RESULT, this.notifyExchangeRes)
    }
    onLoad() {
        this.getParams();
        this.initView();
    };

    start() {
        if (Utils.table_isEmpty(this._currowParam)) {
            this.node.destroy();
            return;
        }
        this.updateView();
    };

    getParams() {
        let comp;
        comp = this.node.getComponent("DelegateComponent")
        if (comp) {
            let params = comp.getParams();
            if (Utils.table_isEmpty(params)) {
                this._currowParam = null;
                return;
            }
            this._currowParam = params;
        }
    }


    initView() {
        this.btnBuy.active = false;
        this.nodeCenter.active = false;
    }
    updateView() {
        let isExitGoods = GCache.ShopInfo.isExitByGoodsid(this._currowParam.goodsId);
        console.log("购买道具界面传递的参数", this._currowParam, isExitGoods)
        if (isExitGoods == false) {
            if (this._currowParam.itmeId != null) {
                let temp = GCache.ShopInfo.getPriceByResId(GConstants.ShopSmallTabType.PROPS, this._currowParam.itmeId);
                this._currowParam.goodsId = temp.goodsID;
            } else {
                return;
            }
        }

        let config = {
            num: 1,
            payInfo: GCache.ShopInfo.getPriceByResId(GConstants.ShopSmallTabType.PROPS, this._currowParam.goodsId),
        }
        this._currowViewParam = config;
        console.log("输出商品：" + this._currowParam.goodsId)
        let item = this.nodeItem.getChildByName("item");
        let name = this.nodeItem.getChildByName("name");
        this.setSpriteFrame(item, config.payInfo.icon)
        name.getComponent(Label).string = config.payInfo.name || "";
        this.updateBuyConf();
        this.updateOptBtnState();
        this.btnBuy.active = true;
        this.nodeCenter.active = true;

    }
    //更新购买价格和货币图标显示
    updateBuyConf() {
        console.log('this._currowViewParam', this._currowViewParam)
        console.log('渲染价格', this._currowViewParam.payInfo.payID, GConstants.PayType.SILVER)
        if (this._currowViewParam.payInfo.payID == GConstants.PayType.SILVER) {
            let path = GameRes.Picture_Hall_Coin_bg;
            let self = this;
            this.getPreLoaderRes(path.bundle, path.path, ImageAsset, (imgAssert: ImageAsset) => {
                if (!self.btnBuyIcon || self.btnBuyIcon.isValid == false) {
                    return;
                }
                let spriteFrame = Utils.image_ImageAssetToSpriteFrame(imgAssert)
                if (spriteFrame) {
                    self.btnBuyIcon.spriteFrame = spriteFrame;
                }
            })
        }
        //道具默认银币购买 预留金条
        this.updateBuyPrice();

    }
    /** 更新购买价格 */
    updateBuyPrice() {
        let price = this._currowViewParam.payInfo.price * this._currowViewParam.num;
        this.btnBuyPrice.string = Utils.nullToDefault(price, "--");
    }
    /** 按钮减的点击事件 */
    onClicBtnCut(event: EventTouch) {
        EventManager.dispatch(AppEvent.SYS_PLAY_EFFECT, AppSound.CommClick);
        this._currowViewParam.num = this._currowViewParam.num - 1;
        this.itemNum.string = String(this._currowViewParam.num);
        this.updateBuyPrice();
        this.updateOptBtnState();
    }
    /** 按钮加的点击事件 */
    onClicBtnAdd(event: EventTouch) {
        EventManager.dispatch(AppEvent.SYS_PLAY_EFFECT, AppSound.CommClick);
        this._currowViewParam.num = this._currowViewParam.num + 1;
        this.itemNum.string = String(this._currowViewParam.num);
        this.updateBuyPrice();
        this.updateOptBtnState();
    }
    /** 更新增减按钮的状态 */
    updateOptBtnState() {
        if (this._currowViewParam.num <= 1) {
            this.btnCut.getComponent(Button).interactable = false;
            this.btnCut.getComponent(Sprite).grayscale = true;
        } else {
            this.btnCut.getComponent(Button).interactable = true;
            this.btnCut.getComponent(Sprite).grayscale = false;
        }
        if (this._currowViewParam.payInfo.payID == GConstants.PayType.GOLD) {
            let lower = 0;
            if (GCache.User.LoginRoomState == true && GCache.Desk) {
                let levelData = GCache.Desk.LevelData;
                if (levelData && levelData.antes_room) {
                    let limit = levelData.antes_room.in_bankroll_limit || [];
                    lower = Utils.number_valueOf(limit[0]);
                }
            }
            if ((GCache.User.getUserMoneyByID(GConstants.PropertyType.SILVER_COIN) - lower) < (this._currowViewParam.payInfo.price * (this._currowViewParam.num + 1))) {
                this.btnAdd.getComponent(Button).interactable = false;
                this.btnAdd.getComponent(Sprite).grayscale = true;
            } else {
                this.btnAdd.getComponent(Button).interactable = true;
                this.btnAdd.getComponent(Sprite).grayscale = false;
            }
        }
        //判断当前选择的数量是否已经超过购买限制数量
        if (this._currowViewParam.payInfo && this._currowViewParam.payInfo.limitNum != null) {
            let limitNum = this._currowViewParam.payInfo.limitNum;
            if ((limitNum["hadNum"] + this._currowViewParam.num) >= limitNum["maxNum"]) {
                //超过数量限制，按钮不开点击
                this.btnAdd.getComponent(Button).interactable = false;
                this.btnAdd.getComponent(Sprite).grayscale = true;
            }
        }
    }
    /** 点击了购买 */
    onClickBuy(event: EventTouch) {
        console.log('点击了购买')
        let res = this._checkProperty();
        if (res) {
            EventManager.dispatch(AppEvent.SYS_TOAST_TIP, { content: res[1] });
            let jump_temp = {
                //银币跳转道具
                [GConstants.PayType.SILVER]: GConstants.ShopBigTabType.PROPS,
                //人民币跳转银币 
                [GConstants.PayType.RMB]: GConstants.ShopBigTabType.SILVER_COIN,
            }
            if (jump_temp[res[0]] != null) {
                this.node.destroy();
                if (Platform.isCanPay() == false) {
                    return;
                }
                //跳转商城
                EventManager.dispatch(AppEvent.VIEW_UI_OPEN, UIID.MallPrefab, { id: jump_temp[res[0]] }, {});
                return;
            }
        }
        this._startExchange();
    }

    /** 开始兑换 */
    _startExchange() {
        let itemData = {
            gid: this._currowViewParam.payInfo.goodsID,  //商品ID
            gnum: this._currowViewParam.num,    //兑换的数量
        }
        console.log('银币兑换道具参数', itemData)
        EventManager.dispatch(AppEvent.NET_CMD_REQ_BUY_MALL_PROP, itemData);
    }
    /** 检查资产是否满足条件 */
    _checkProperty() {
        if (this._currowViewParam.payInfo.payID == GConstants.PayType.GOLD) {
            let lower = 0;  //房间内最低资产下限
            if (GCache.User.LoginRoomState == true && GCache.Desk) {
                let levelData = GCache.Desk.LevelData;
                if (levelData && levelData.antes_room) {
                    let limit = levelData.antes_room.in_bankroll_limit || [];
                    lower = Utils.number_valueOf(limit[0]);
                }
            }
            if ((GCache.User.getUserMoneyByID(GConstants.PropertyType.SILVER_COIN) - lower) < (this._currowViewParam.payInfo.price * this._currowViewParam.num)) {
                return [this._currowViewParam.payInfo.payID, "您的银币不足"];
            }
        }
        return null;
    }

    //点击了关闭
    onClickClose(event: EventTouch) {
        EventManager.dispatch(AppEvent.SYS_PLAY_EFFECT, AppSound.CommClick);
        this.node.destroy();
    }
    /** 通知兑换结果 */
    notifyExchangeRes(event, res) {
        res = Utils.table_verify(res);
        if (res["state"] == true) {
            // 销毁当前节点
            this.node.destroy();
        }
    }
    /**设置远端图片 */
    setSpriteFrame(node, path, isSliced = false) {
        if (Utils.string_isHttp(path)) {
            let self = this;
            resLoader.loadRemote(path, { ext: '.jpg' }, (err, imageAsset) => {
                if (!imageAsset) { //资源可能还在加载中
                    return
                }
                if (!node || node.isValid == false) {
                    return;
                }

                let spriteFrame = Utils.image_ImageAssetToSpriteFrame(imageAsset)
                if (spriteFrame) {
                    let sprite: Sprite = node.getComponent(Sprite);
                    sprite.spriteFrame = spriteFrame;
                }
                node.active = true;
            })
        } else {
            node.active = false;
        }
    }

    //销毁
    onDestroy() {

    };
}

