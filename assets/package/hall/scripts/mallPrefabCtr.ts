
import { Color, EventTouch, instantiate, Label, Layout, Node, Prefab, ScrollView, Sprite, SpriteAtlas, SpriteFrame, UITransform, _decorator } from 'cc';
import { GCache } from '../../../cache/GCache';
import { AppEvent } from '../../../config/AppEvent';
import { AppSound } from '../../../config/AppSound';
import { APPState } from '../../../config/GameConfig';
import { GConstants } from '../../../config/GameConstant';
import { GameRes } from '../../../config/GameRes';
import { GameTxt } from '../../../config/GameTxt';
import { ReportConfig } from '../../../config/ReportConfig';
import { UIID } from '../../../config/UIConfig';
import ButtonSimple from '../../../framework/gui/button/ButtonSimple';
import { inf_SpineAniCreate } from '../../../framework/InterfaceDefines';
import { DelegateComponent } from '../../../framework/layer/DelegateComponent';
import { resLoader } from '../../../framework/loader/ResLoader';
import { EventManager } from '../../../framework/manager/EventManager';
import { Utils } from '../../../framework/Utils';
import { BaseComponent } from '../../../framework/vc/BaseComponent';
import { Platform } from '../../../platform/Platform';
import { commonBtnPrefabCtr } from './commonBtnPrefabCtr';
import { shopGoodsPrefabCtr } from './shopGoodsPrefabCtr';

const { ccclass, property, menu } = _decorator;

/**
 * Name = mallPrefabCtr
 * URL = db://assets/package/hall/scripts/mallPrefabCtr.ts
 * Time = Tue Sep 13 2022 15:54:48 GMT+0800 (中国标准时间)
 * Author = Tomoe
 * Life: onLoad-->onEnable->start->update->lateUpdate->onDisable->onDestroy
 * 商城模块
 */

@ccclass('mallPrefabCtr')
@menu('prefab/hall/mallPrefabCtr')
export class mallPrefabCtr extends BaseComponent {

    //背景动画根节点
    @property({ tooltip: "云-背景动画根节点", type: Node })
    private spineYun: Node | null = null;
    //背景动画根节点
    @property({ tooltip: "树-背景动画根节点", type: Node })
    private spineShu: Node | null = null;
    //背景动画根节点
    @property({ tooltip: "帘布-背景动画根节点", type: Node })
    private spineLianBu: Node | null = null;



    //切换动画根节点
    @property({ tooltip: "切换动画根节点", type: Node })
    private spineQieHuan: Node | null = null;

    //大标签滚动容器
    @property({ tooltip: "大标签滚动容器", type: ScrollView })
    private bigTabScrollView: ScrollView | null = null;

    //大标签父节点
    @property({ tooltip: "大标签父节点", type: Node })
    private bigTabLayer: Node | null = null;

    //大标签节点
    @property({ tooltip: "大标签节点", type: Node })
    private bigTab: Node | null = null;


    //银币商品根节点
    @property({ tooltip: "银币根节点", type: Node })
    private silverCoinLayer: Node | null = null;

    //银币页面节点
    @property({ tooltip: "银币页面节点", type: Node })
    private silverView: Node | null = null;

    //道具商品根节点
    @property({ tooltip: "道具根节点", type: Node })
    private propLayer: Node | null = null;

    //道具页面节点
    @property({ tooltip: "道具根节点", type: Node })
    private propView: Node | null = null;

    // //金条商品根节点
    // @property({ tooltip: "金条根节点", type: Node })
    // private goldLayer: Node | null = null;

    // //金条页面节点
    // @property({ tooltip: "金条根节点", type: Node })
    // private goldView: Node | null = null;

    // 克隆的商品节点
    @property({ tooltip: "克隆的商品节点", type: Node })
    private cloneItemNode: Node | null = null;


    //钻石Icon图片
    @property({ tooltip: "钻石Icon图片", type: SpriteFrame })
    private diamondIcon: SpriteFrame | null = null;

    //金豆Icon图片
    @property({ tooltip: "金豆Icon图片", type: SpriteFrame })
    private goldIcon: SpriteFrame | null = null;


    //二级标签和吊坠父节点
    @property({ tooltip: "二级标签和吊坠父节点", type: Node })
    private smallTabRoot: Node | null = null;

    //二级标签父节点
    @property({ tooltip: "二级标签父节点", type: Node })
    private smallTabLayer: Node | null = null;

    //克隆二级标签节点
    @property({ tooltip: "克隆二级标签节点", type: Node })
    private cloneSmallTab: Node | null = null;
    //页面节点缓存
    mallViewLayer = {};
    //当前展示页面
    currentScene: number = null;
    //当前展示小标签
    currowChooseSmallTagCid: number = null;
    //当前选中物品ID
    currowChooseGoodsID: number = null;
    /** 当前支付场景 */
    payScene = null;
    /** 上一个跳转过来的付费场景 */
    private _FowardPayScene: string = null;


    private _isOnload = false;

    private _clickGoodItemCallBack = null;
    /** 读取前后台记录的时间 */
    private _isStartCountDown = true;
    /** 当前分享的data */
    private _currowShareData = null;
    /** 大标签定义 */
    private _bigTabList = [
        { scene: GConstants.ShopBigTabType.SILVER_COIN, normal: "mall/tab_sliver_normal", choose: "mall/tab_silver_pressI" },
        // { scene: GConstants.ShopBigTabType.PROPS, normal: "mall/tab_prop_normal", choose: "mall/tab_prop_pressI" },
    ]
    /**初始化添加事件绑定 */
    protected onInitModuleEvent(): void {
        /**通知:商品有更新 */
        this.addModelListener(AppEvent.NOTIFY_GOODS_CHANGE, this.refreshViewByData);
        /**通知:商品场景 */
        this.addModelListener(AppEvent.ACTIVITY_SHOPLIST_UPDATE, this.refreshViewByScene);
        //前后台事件
        this.addModelListener(AppEvent.SYS_SHOW_OR_HIDE, this.processApplicationActions)


    }

    onLoad() {
        this.mallViewLayer = {
            [GConstants.ShopBigTabType.SILVER_COIN]: this.silverView,
            [GConstants.ShopBigTabType.PROPS]: this.propView,
            // [GConstants.ShopBigTabType.GOLD]: this.goldView, //下一版本迭代
        }
        this.getComp();
        this.initView(true);
    };
    start() {
        this._isOnload = true;
        this._clickGoodItemCallBack = Utils.handler(this, this.onClickGoodsItem);
        this.initView();
        // 根据BigTab请求拉取对应商城配置
        EventManager.dispatch(AppEvent.NET_REQ_GOODS_INFO, { scene: GConstants.GoodsListID.MarketSilver });
        // EventManager.dispatch(AppEvent.NET_REQ_GOODS_INFO, { scene: GConstants.GoodsListID.MarketProp });
    };

    getComp() {
        let comp = this.node.getComponent(DelegateComponent)
        if (comp) {
            let param = comp.getParams();
            param = Utils.table_verify(param);
            //获取上一个付费场景
            this._FowardPayScene = (param["pay_scene"] || null);
            this.currentScene = (param["id"] != null ? param["id"] : GConstants.ShopBigTabType.SILVER_COIN);
            this.updatePayScene();
        }
    }
    getShopData(type = null) {
        let res = GCache.ShopInfo.getDataList(type);
        return Utils.clone(res);
    }
    /**商城数据有更新 */
    refreshViewByData(event, data) {
        if (!this._isOnload) {
            return;
        }
        console.log("商城数据有更新 或则角色刷新，或兑换成功===>>>", data);
        this.updateView();
    }
    /** 商城页签数据有关系 */
    refreshViewByScene(event, scene) {
        if (this.currentScene != scene) {
            return;
        }
        this.updateView();
    }

    /**前后台事件 */
    processApplicationActions(event: string, state: APPState) {
        if (this._isStartCountDown != true) {
            return;
        }
        //先后台再前台
        this.print(`[商城前后台事件]:${state == APPState.SHOW && "前台" || "后台"}`);
        if (state == APPState.SHOW) {
            this._isStartCountDown = false;
            let isCanShare = GCache.ShareInfo.checkCanShareToFriend()
            console.log('gid', isCanShare, this._currowShareData)
            if (isCanShare == true && this._currowShareData) {
                EventManager.dispatch(AppEvent.NET_REQ_SHARE_AWARD, this._currowShareData, GConstants.ReqUrl.shareType.shop, true)
            } else {
                // 判断有gid是分享再提示
                if (this._currowShareData) {
                    EventManager.dispatch(AppEvent.SYS_TOAST_TIP, { content: GameTxt.shareFailMsg });
                }
            }

        } else if (state == APPState.HIDE) {
            //后台事件开始计时
            GCache.ShareInfo.recodeShareFriendStart()
        }
    }
    //初始化界面
    initView(isOnload = false) {
        // 初始化界面展示次数
        EventManager.dispatch(AppEvent.REPORT_CLIENT_CLICK, { eventID: ReportConfig.mall_4 });
        if (isOnload) {
            this.cloneItemNode.active = false;
            for (let key in this.mallViewLayer) {
                let pageNode = this.mallViewLayer[key];
                pageNode.active = false;
            }
            this.smallTabRoot.active = false;
            let self = this;
            this.getPreLoaderRes(GameRes.Prefab_HallTopUI.bundle, GameRes.Prefab_HallTopUI.path, Prefab, (res) => {
                let comp = res.getComponent(commonBtnPrefabCtr);
                comp.isShowShop = false;
                if (self.node && self.node.isValid == true) {
                    self.node.addChild(res);
                }
            })
        } else {
            this.updateBigTab();
            this.updateView();
        }
    }
    /**设置远端图片 */
    setSpriteFrameByRemote(node, path) {
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
                    node.active = true;
                }
            })
        }
    }
    //点击标签切换亮布
    showChangeLightBuAni() {
        let self = this;
        let changeAni = function (aniName, isLoop = false) {
            let aniConf: inf_SpineAniCreate = {
                parentNode: self.spineQieHuan,
                resConf: GameRes.Spine_Mall_Qiehuan,
                aniName: aniName,
                trackIndex: 0,
                isLoop: isLoop,
                callEndFunc: () => {
                    if (aniName == "qiehuan_lianbu") {
                        changeAni("loop_lianbu", true)
                    }
                }
            }
            self.spineQieHuan.removeAllChildren();
            // EventManager.dispatch(AppEvent.SYS_ANI_PLAY, aniConf);
        }
        changeAni("qiehuan_lianbu", false);
    }
    /**更新大标签 */
    updateBigTab() {
        let childLength = this.bigTabLayer.children.length;
        let max = this._bigTabList.length;
        if (max < childLength) {
            max = childLength;
        }
        for (let i = (max - 1); i >= 0; i--) {
            let nodeItem = this.bigTabLayer.children[i];
            if (nodeItem && !this._bigTabList[i]) {
                nodeItem.destroy();
            }
        }

        if (this.currentScene == null) {
            this.currentScene = GConstants.ShopBigTabType.SILVER_COIN;
        }
        let bigTagData = GCache.ShopInfo.shopTab;
        for (let i = 0; i < this._bigTabList.length; i++) {
            let nodeItem = this.bigTabLayer.children[i];
            if (!nodeItem) {
                nodeItem = instantiate(this.bigTab);
                this.bigTabLayer.addChild(nodeItem);
                this.onTouch(nodeItem);
                let nodeNormal: Node = nodeItem.getChildByName("normal");
                let nodeChoose: Node = nodeItem.getChildByName("choose");
                nodeItem["Normal"] = nodeNormal;
                nodeItem["Choose"] = nodeChoose;
            }
            nodeItem.active = true;
            let self = this;
            if (nodeItem['pageID'] != this._bigTabList[i].scene) {
                this.getPreLoaderRes(GameRes.Atlas_Mall.bundle, GameRes.Atlas_Mall.path, SpriteAtlas, (atlas) => {
                    let normal: SpriteFrame = atlas.getSpriteFrame(self._bigTabList[i].normal)
                    let choose: SpriteFrame = atlas.getSpriteFrame(self._bigTabList[i].choose)
                    if (normal && choose) {
                        nodeItem["Normal"].getComponent(Sprite).spriteFrame = normal;
                        nodeItem["Choose"].getComponent(Sprite).spriteFrame = choose;
                    }
                })
            }
            if (bigTagData[this._bigTabList[i].scene]) {
                nodeItem['pageID'] = this._bigTabList[i].scene
            } else {
                nodeItem['pageID'] = null;
            }
            if (this.currentScene == nodeItem['pageID']) {
                nodeItem["Normal"].active = false;
                nodeItem["Choose"].active = true;
            } else {
                nodeItem["Normal"].active = true;
                nodeItem["Choose"].active = false;
            }
        }

        let self = this;
        let layout = self.bigTabLayer.getComponent(Layout);
        layout.updateLayout();
        this.addSchedulerOnce(0, () => {
            if (self.bigTabLayer.getComponent(UITransform).width > self.bigTabScrollView.node.getComponent(UITransform).width) {
                self.bigTabScrollView.enabled = true;
                self.bigTabScrollView.scrollToLeft(0.01, false);
            } else {
                self.bigTabScrollView.enabled = false;
            }
        })
    }
    /**开启触摸监听*/
    onTouch(node) {
        node.on(Node.EventType.TOUCH_END, this.onClickBigTab, this);
    }

    /**关闭触摸监听*/
    closeTouch(node) {
        node.off(Node.EventType.TOUCH_END, this.onClickBigTab, this);
    }

    /** 底部大标签的点击大标签事件 */
    onClickBigTab(event: EventTouch) {
        if (event.target["pageID"] == null || this.currentScene == event.target["pageID"]) {
            return;
        }
        if (event.type == "touch-end") {
            this.currentScene = event.target["pageID"];
            this.currowChooseSmallTagCid = null;
            this.currowChooseGoodsID = null;
            this.updateBigTab();
            this.updatePayScene();
            this.updateView();
            switch (this.currentScene) {
                case GConstants.ShopBigTabType.SILVER_COIN:
                    EventManager.dispatch(AppEvent.REPORT_CLIENT_CLICK, { eventID: ReportConfig.mall_1 });
                    break;
                case GConstants.ShopBigTabType.PROPS:
                    EventManager.dispatch(AppEvent.REPORT_CLIENT_CLICK, { eventID: ReportConfig.mall_2 });
                    break;
            }
        }
    }
    /**刷新商城页面 */
    updateView() {
        if (this.currentScene == null) {
            this.currentScene = GConstants.ShopBigTabType.SILVER_COIN;
            this.updatePayScene();
        }
        for (let key in this.mallViewLayer) {
            let pageNode = this.mallViewLayer[key];
            if (key == String(this.currentScene)) {
                pageNode.active = true;
            } else {
                pageNode.active = false;
            }
        }
        this.updateSmallTag();
        this.updateCenterLayout();
    }

    //刷新小标签显示
    updateSmallTag() {
        let smallTagData = GCache.ShopInfo.getSubTbs(this.currentScene)
        if (!smallTagData) {
            this.smallTabRoot.active = false;
            return;
        }
        let childLength = this.smallTabLayer.children.length;
        let max = smallTagData.length;
        if (max < childLength) {
            max = childLength;
        }
        for (let i = (max - 1); i >= 0; i--) {
            let nodeItem = this.smallTabLayer.children[i];
            if (nodeItem && !smallTagData[i]) {
                nodeItem.destroy();
            }
        }

        let allSmallNode = [];
        for (let i = 0; i < smallTagData.length; i++) {
            let nodeItem = this.smallTabLayer.children[i];
            if (!nodeItem) {
                nodeItem = instantiate(this.cloneSmallTab);
                this.smallTabLayer.addChild(nodeItem);
            }
            nodeItem["lantern_light_bg"] = nodeItem.getChildByName("lantern_light_bg");
            nodeItem["label"] = nodeItem.getChildByName("label");

            if (!nodeItem["aniNode"]) {
                nodeItem["aniNode"] = Utils.create_2DNode("aniNode");
                nodeItem["lantern_light_bg"].addChild(nodeItem["aniNode"]);

                let roleAni: inf_SpineAniCreate = {
                    parentNode: nodeItem["aniNode"],
                    resConf: GameRes.Spine_DengLongAni,
                    aniName: "XC_denglong_loop",
                    trackIndex: 0,
                    isLoop: true,
                }
                // EventManager.dispatch(AppEvent.SYS_ANI_PLAY, roleAni);
            }
            nodeItem["label"].getComponent(Label).string = smallTagData[i]["name"];
            nodeItem["cid"] = smallTagData[i]["cid"];

            allSmallNode.push(nodeItem);
        }
        if (this.currowChooseSmallTagCid == null) {
            if (allSmallNode.length > 0) {
                this.currowChooseSmallTagCid = allSmallNode[0]["cid"];
            }
        }
        if (this.currowChooseSmallTagCid != null && allSmallNode.length > 0) {
            for (let i = 0; i < allSmallNode.length; i++) {
                let buttonSimple: ButtonSimple = allSmallNode[i].getComponent(ButtonSimple);

                if (this.currowChooseSmallTagCid == allSmallNode[i]["cid"]) {
                    allSmallNode[i]["lantern_light_bg"].active = true;
                    allSmallNode[i]["label"].getComponent(Label).color = new Color(163, 139, 104, 255);
                    buttonSimple.Interactable = false;
                } else {
                    allSmallNode[i]["lantern_light_bg"].active = false;
                    buttonSimple.Interactable = true;
                    allSmallNode[i]["label"].getComponent(Label).color = new Color(78, 70, 58, 255);
                }
            }
        }
        if (this.currowChooseSmallTagCid != null) {
            this.smallTabRoot.active = true;
            this.smallTabLayer.active = true;
            this.smallTabLayer.getComponent(Layout).updateLayout();
            this.smallTabRoot.getComponent(Layout).updateLayout();
            this.showChangeLightBuAni();
        } else {
            this.smallTabRoot.active = false;
        }

    }
    /** 更新中间商品界面 */
    updateCenterLayout() {
        switch (Number(this.currentScene)) {
            case GConstants.ShopBigTabType.SILVER_COIN:
                this.showSilverView();
                break;
                // case GConstants.ShopBigTabType.PROPS:
                //     this.showPropView();
                break;
            default:
                break;
        }
    }
    //更新支付场景ID
    updatePayScene() {
        console.log('更新了支付场景,updatePayScene')
        switch (this.currentScene) {
            case GConstants.ShopBigTabType.SILVER_COIN:
                this.payScene = GConstants.PayModel.shop_silver_coin;
                break;
            case GConstants.ShopBigTabType.PROPS:
                this.payScene = GConstants.PayModel.shop_props;
                break;
            default:
                this.payScene = GConstants.PayModel.shop;
                break;
        }
    }


    /**显示银币商品 */
    showSilverView() {
        let childLength = this.silverCoinLayer.children.length;
        let goodsData = this.getShopData(this.currowChooseSmallTagCid);
        goodsData = Utils.table_verify(goodsData, true);
        console.log('当前商品类别==》》', this.currowChooseSmallTagCid)
        goodsData = goodsData.sort((a, b) => { return Number(b.item_order) - Number(a.item_order) })
        console.log('当前渲染的商品', goodsData)
        let max = goodsData.length;
        if (max < childLength) {
            max = childLength;
        }
        for (let i = (max - 1); i >= 0; i--) {
            let nodeItem = this.silverCoinLayer.children[i];
            if (nodeItem && !goodsData[i]) {
                nodeItem.destroy();
            }
        }
        for (let i = 0; i < goodsData.length; i++) {
            let nodeItem = this.silverCoinLayer.children[i];
            if (!nodeItem) {
                nodeItem = instantiate(this.cloneItemNode);
                this.silverCoinLayer.addChild(nodeItem);
            }
            let comp = nodeItem.getComponent(shopGoodsPrefabCtr);
            comp.goodsData = goodsData[i];  //赋值渲染数据
            comp.clickCallback = this._clickGoodItemCallBack;
            nodeItem.active = true;
        }
    }

    // /**显示道具商品 */
    showPropView() {
        let childLength = this.propLayer.children.length;
        let goodsData = this.getShopData(this.currowChooseSmallTagCid);
        goodsData = Utils.table_verify(goodsData, true);

        let max = goodsData.length;
        if (max < childLength) {
            max = childLength;
        }
        for (let i = (max - 1); i >= 0; i--) {
            let nodeItem = this.propLayer.children[i];
            if (nodeItem && !goodsData[i]) {
                nodeItem.destroy();
            }
        }
        for (let i = 0; i < goodsData.length; i++) {
            let nodeItem = this.propLayer.children[i];
            if (!nodeItem) {
                nodeItem = instantiate(this.cloneItemNode);
                this.propLayer.addChild(nodeItem);
            }
            let comp = nodeItem.getComponent(shopGoodsPrefabCtr);
            comp.goodsData = goodsData[i];;
            comp.clickCallback = this._clickGoodItemCallBack;

            nodeItem.active = true;
        }
    }
    // /**显示金条商品 下一期迭代 */
    showGoldView() {
        // let childLength = this.goldLayer.children.length;
        // let goodsData = this.getShopData(this.currowChooseSmallTagCid);
        // goodsData = Utils.table_verify(goodsData, true);

        // let max = goodsData.length;
        // if (max < childLength) {
        // 	max = childLength;
        // }
        // for (let i = (max - 1); i >= 0; i--) {
        // 	let nodeItem = this.goldLayer.children[i];
        // 	if (nodeItem && !goodsData[i]) {
        // 		nodeItem.destroy();
        // 	}
        // }
        // for (let i = 0; i < goodsData.length; i++) {
        // 	let nodeItem = this.goldLayer.children[i];
        // 	if (!nodeItem) {
        // 		nodeItem = instantiate(this.cloneItemNode);
        // 		this.goldLayer.addChild(nodeItem);
        // 	}
        // 	let comp = nodeItem.getComponent(shopGoodsPrefabCtr);
        // 	comp.goodsData = goodsData[i];;
        // 	comp.clickCallback = this._clickGoodItemCallBack;

        // 	nodeItem.active = true;
        // }
    }

    /** 点击了页签 */
    onClickPageView(event: EventTouch) {
        //EventManager.dispatch(AppEvent.SYS_PLAY_EFFECT, AppSound.CommClick);
        let goodData = event.target["GoodData"];
        if (Utils.table_isEmpty(goodData)) {
            return;
        }
        console.log("点击了页签==>", event.target["GoodData"]);
        console.log("即将跳转==>", goodData["item_url"])
        if (goodData["item_url"] != null) {
            //EventManager.dispatch(AppEvent.VIEW_UI_JUMP, { url: goodData["item_url"] })
        }
    }

    /** 商品点击*/
    onClickGoodsItem(event: EventTouch) {
        let nodeGoodItem: Node = event.target.parent;
        let nodeGoodItemComp: shopGoodsPrefabCtr = nodeGoodItem.getComponent(shopGoodsPrefabCtr);
        nodeGoodItemComp.isSelect = true;
        let parentNode = nodeGoodItem.parent;
        for (let node of parentNode.children) {
            if (node != nodeGoodItem) {
                node.getComponent(shopGoodsPrefabCtr).isSelect = false;
            }
        }
        let goodsID = Utils.table_verify(nodeGoodItemComp.goodsData)["gid"];
        EventManager.dispatch(AppEvent.REPORT_CLIENT_CLICK, { eventID: ReportConfig.mall_3, body: { gsubname: goodsID } });
        if (!goodsID) {
            return
        }
        this.currowChooseGoodsID = goodsID;
        //以最新的缓存数据为准再次查找数据
        let goodsData = GCache.ShopInfo.getShopDataByGoodsID(this.currowChooseGoodsID)
        console.log('普通商品点击===>，在缓存里查找对应的数据', goodsData)
        this.payProcess(goodsData)
    }

    /**先走一遍支付流程 */
    payProcess(goodsItem) {
        let payData = GCache.ShopInfo.getPriceByGoodsSceneId(this.currentScene, this.currowChooseGoodsID);
        console.log('当前要支付的商品', goodsItem, '缓存查到的支付的信息', payData)
        // 如果超过最大购买数量，直接弹出提示
        if (Number(goodsItem.limit_buy_way) == 1 && Number(goodsItem.bought_num) > 0 && Number(goodsItem.bought_num) >= Number(goodsItem.limit_buy_num)) {
            return EventManager.dispatch(AppEvent.SYS_TOAST_TIP, { content: "已超过最大次数上限" })
        }
        let self = this
        switch (goodsItem.currency) {
            case GConstants.PayType.RMB: //rmb 1
                //获取人民币类型
                let param = {
                    title: GConstants.DialogTitle.Goods_content,
                    itemData: goodsItem,
                    isConfirm: goodsItem.specialDesc ? false : true, //没有加赠 值为 'false  
                    callFunc: (pData) => {
                        //模拟支付
                        self.__paySure(pData, { payID: GConstants.PayType.RMB, price: goodsItem.price });
                    }
                }
                EventManager.dispatch(AppEvent.VIEW_UI_OPEN, UIID.BuyDialogPrefab, param);
                break;
            case GConstants.PayType.SILVER: //银币支付 2
                //银币购买道具
                if (this.currentScene == GConstants.ShopBigTabType.PROPS) {
                    //考虑配置多种支付
                    return this.willShowBuyPropDialog(goodsItem, { payID: payData['payID'], price: payData['price'] });
                }
                break;
            case GConstants.PayType.TICKET://兑换券支付
                break;
            case GConstants.PayType.SHARE:
                // 判断是否可以分享 返回分享的参数和距离下次分享的时间
                let _allowShareMsg = GCache.ShareInfo.shareTimeAllowed(goodsItem['gid'], GConstants.ShareSceneConf.shopshare)
                if (_allowShareMsg['allowShare']) {
                    Platform.shareWXFriends(_allowShareMsg['shareParams'], Utils.handler(self, self.__doCallBackShare), _allowShareMsg['gid'])
                } else {
                    // 请勿在短时间内重复分享
                    EventManager.dispatch(AppEvent.SYS_TOAST_TIP, { content: `请在${_allowShareMsg['nextSharetime']}秒后再次分享` });
                }
                break;
            case GConstants.PayType.VIDEO://看视频
                Platform.playerAdVideo(Utils.handler(this, this.__doCallBackWatchADs), goodsItem['gid'])
                break;
        }
    }
    /** 分享完商品发放奖励发奖励 */
    __doCallBackShare(data) {
        this._currowShareData = data;
        this._isStartCountDown = true;
    }
    /** 看完视频广告发奖励 */
    __doCallBackWatchADs(status, goodsID) {
        if (status != true) {
            EventManager.dispatch(AppEvent.SYS_TOAST_TIP, { content: "err:看广告失败" });
            return;
        }
        EventManager.dispatch(AppEvent.NET_REQ_ADS_AWARD, goodsID, GConstants.ReqUrl.shareType.shop, true)
    }
    /** 即将显示购买道具弹窗 */
    willShowBuyPropDialog(goodData, payData) {
        if (GCache.User.getUserMoneyByID(0) < payData.price) {
            //银币不够且只有一个方式 跳转商城购买 商城内不用跳转
            EventManager.dispatch(AppEvent.SYS_TOAST_TIP, { content: "银币不足" });
        } else {
            let param = {
                goodsId: goodData["gid"],
                scene: GConstants.PayModel.shop_props
            }
            EventManager.dispatch(AppEvent.VIEW_UI_OPEN, UIID.BuyPropDialogPrefab, param);
        }
    }
    /**支付确认 */
    __paySure(data, payData) {
        if (Utils.table_isEmpty(data) || Utils.table_isEmpty(payData)) {
            return;
        }
        switch (payData.payID) {
            case GConstants.PayType.SILVER:
                // EventManager.dispatch(AppEvent.SYS_TOAST_TIP, { content: "调接口去开始兑换" });
                break;
            case GConstants.PayType.RMB:
                GCache.CurrowPaySceneType = GConstants.UBPaySceneConfig.kHallMarketGold;
                EventManager.dispatch(AppEvent.OTHER_PAY_WILL, GConstants.ShopBigTabType.SILVER_COIN, data.gid);
                break;
        }
    }
    //点击小标签
    onClickSmallTag(event: EventTouch) {
        EventManager.dispatch(AppEvent.SYS_PLAY_EFFECT, AppSound.CommClick);
        let node = event.target;
        let cid = node["cid"];
        for (let child of this.smallTabLayer.children) {
            if (child["cid"]) {
                let buttonSimple = child.getComponent(ButtonSimple);
                if (child["cid"] == cid) {
                    child["lantern_light_bg"].active = true;
                    child["label"].getComponent(Label).color = new Color(163, 139, 104, 255);
                    buttonSimple.Interactable = false;

                } else {
                    child.getChildByName("lantern_light_bg").active = false;
                    buttonSimple.Interactable = true;
                    child["label"].getComponent(Label).color = new Color(78, 70, 58, 255);
                }
            }
        }
        this.currowChooseSmallTagCid = cid;
        this.showChangeLightBuAni();
        this.updateCenterLayout();
    }
    //点击返回按钮
    onClickReturn(event: EventTouch) {
        for (let child of this.bigTabLayer.children) {
            this.closeTouch(child);
        }
        this.node.destroy();
    }

    //销毁
    onDestroy() {
        EventManager.dispatch(AppEvent.SYS_PLAY_MUSIC_LAST);
    };

}

