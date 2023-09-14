import { AppEvent } from "../config/AppEvent";
import { GConstants } from "../config/GameConstant";
import { Utils } from "../framework/Utils";
import { EventManager } from "../framework/manager/EventManager";
import { BaseCache } from "../framework/vc/BaseCache";
import { PayAgent } from "../proj/PayAgent";
import { User } from "./User";
/**
 * Name = ShopInfo
 * URL = db://assets/cache/ShopInfo.ts
 * Time = Mon May 09 2022 14:43:04 GMT+0800 (中国标准时间)
 * Author = xueya
 * 商城缓存
 */
export class ShopInfo extends BaseCache {
    /** 用户类 */
    private __User: User = null;

    /** 所有物品列表，详情请见 GoodsListID */
    private _shopList = {};
    //商城大标签数据
    private _shopTab = {};
    //二级标签页数据
    private _shopSubTab = {};
    //商城数据
    private _shopData = {};

    /** 菜单归属配置 */
    //没有子分类时默认展示主类
    static TabConfig = {
        [GConstants.ShopBigTabType.SILVER_COIN]: [GConstants.ShopSmallTabType.SILVER_COIN],
        [GConstants.ShopBigTabType.PROPS]: [GConstants.ShopSmallTabType.PROPS],
    }
    //实例化
    constructor(superClass) {
        super("ShopInfo")
        this.__User = superClass;
    };
    // 获取商城大类
    get shopTab() {
        return this._shopTab;
    }
    /** 无大类小类返回，更具场景生成所需数据 */
    getGoodsTypeNameByScene(type) {
        let sceneName = '银币'
        if (type) {
            let sceneData = GConstants.getGoodsTypeNameByScene.find(item => { return item.scene == type })
            sceneData ? sceneName = sceneData.name : "类型有误"
        }
        return sceneName
    }

    /** 更新商城数据 */
    update(body) {
        if (Utils.table_isEmpty(body) || body["scene"] == null) {
            return;
        }
        let newBody = Utils.clone(body);

        //处理大标签数据 本地有映射再添加
        Object.keys(GConstants.ShopBigTabType).forEach(key => {
            if (GConstants.ShopBigTabType[key] == newBody["scene"]) {
                this._shopTab[newBody["scene"]] = newBody;
            }
        })
        //处理子标签
        newBody["subTab"] = Utils.table_verify(newBody["subTab"], true);
        if (newBody["subTab"].length > 1) {
            //存在子类 此处暂时为空 暂不处理
        } else {
            newBody["subTab"] = []
            //不存在子类增加一个默认
            newBody["subTab"].push(
                {
                    cid: newBody["scene"],
                    order: 1,
                    name: this.getGoodsTypeNameByScene(newBody["scene"]),
                    gList: newBody.ginfo
                }
            )
            //二级标签
            this._shopSubTab[newBody["scene"]] = newBody["subTab"]
            //按照二级分类储存数据
            Object.keys(GConstants.ShopBigTabType).forEach(key => {
                if (GConstants.ShopBigTabType[key] == newBody["scene"]) {
                    this._shopData[String(newBody["scene"])] = newBody["subTab"][0];
                }
            })
        }
        this._shopList[newBody["scene"]] = newBody;
        //检查免费商品
        this.isExitFreeGoods(true);
        //通知：商城列表数据有更新
        EventManager.dispatch(AppEvent.ACTIVITY_SHOPLIST_UPDATE, newBody["scene"]);
        console.log('商城数据：this._shopData', this._shopData)
        console.log('所有商城意义下的数据：this._shopList==>', this._shopList)
    }
    /**
     * Shop:是否有免费商品
     * @params needDispatch大厅商城入口需要显示红点 默认 false 不显示
     */
    isExitFreeGoods(needDispatch: boolean = false): boolean {
        let res = false;
        return res;
    }
    /** 购买分享看视频成功，刷新商品的信息 */
    private _onGoodsBuySucc(gid, data) {
        gid = gid || 0;
        data = data || {};
        let goods = this.getShopDataByGoodsID(gid);
        if (goods) {
            goods["isHave"] = GConstants.goodsIsHave.isHave; //标记为已
            if (Number(goods["bought_num"]) >= 0 && data['finish_num']) {
                goods["bought_num"] = data['finish_num']; //购买/分享获得的最新次数
            }
            console.log('当前商品已分享次数', goods["bought_num"])
            //通知:商品有更新
            EventManager.dispatch(AppEvent.NOTIFY_GOODS_CHANGE, goods);
        }
    }

    /**
     * 获取商城大/小类型和物品id对应的商品价格信息
     *--1-银币 3-道具 
     * @param subType Number 商城子类型 详见GConstants.ShopSmallTabType
     * @param resId Number 物品id
     */
    getPriceByResId(subType, resId) {
        subType = Number(subType);
        resId = Number(resId);
        let List = this._getDataBySubType(subType);
        let temp = null;
        let _temp = List["ginfo"] || {};
        for (let key in _temp) {
            if (Object.prototype.hasOwnProperty.call(_temp, key) && temp == null) {
                let value = _temp[key];
                if (value['gid'] == resId) {
                    if (value['currency'] && value['price']) {
                        temp = {};
                        temp.payID = value['currency']; //支付方式
                        temp.price = value['price']; //支付价格
                        temp.goodsID = value.gid;
                        temp.name = value.name;
                        temp.icon = value.icon;
                        temp.limit_buy_num = value.limit_buy_num;
                    }
                }


            }
        }
        if (!temp) {
            temp = { payID: 0, price: 0, isEmpty: true };
        }
        return temp;
    }

    /**
     * 获取商城子类型和商id对应的商品信息
     * --小标签 --1- 3
     * @param subType 
     * @param resId 
     */
    getGoodInfoByResId(subType, resId): object {
        subType = Number(subType);
        resId = Number(resId);
        let roleList = this._getDataBySubType(subType);
        let temp = roleList["gList"] || {};
        let res = null;
        for (let key in temp) {
            if (Object.prototype.hasOwnProperty.call(temp, key) && res == null) {
                for (let m in temp[key]["res"]) {
                    if (Object.prototype.hasOwnProperty.call(temp[key]["res"], m) && res == null) {
                        let val = temp[key]["res"][m];
                        if (val["resID"] == resId) {
                            res = temp[key];
                        }
                    }
                }

            }
        }
        return res || {};
    }
    /**
     * 根据商品id返回商品价格信息
     * @param scene Number 某个场景/类别下的商品
     * @param gid Number
     */
    //返回支付付的人民币的话会不会配置多个支付？
    getPriceByGoodsSceneId(scene, gid) {
        scene = Number(scene)
        gid = Number(gid);
        //考虑配置多个商品
        let temp = {};
        Object.keys(this._shopList).forEach(_scene => {
            if (scene == _scene) {
                let _goodsList = this._shopList[scene]['ginfo']
                Object.keys(_goodsList).forEach(_gid => {
                    if (gid == _gid) {
                        temp = {
                            payID: _goodsList[gid]['currency'],
                            price: _goodsList[gid]['price'],
                            isEmpty: false,
                            name: _goodsList[gid]['name'],
                            icon: _goodsList[gid]['icon'],
                            limit_buy_way: _goodsList[gid]['limit_buy_way'],//限购类型
                            limitNum: _goodsList[gid]['limit_buy_num'],//限购数量
                            share_id: _goodsList[gid]['share_id'],
                        }

                    }
                })
            }
        })

        return temp || { payID: 0, price: 0, isEmpty: true };
    }

    /**
     * 根据商品id返回是否有该商品
     * @param gid Number
     */
    isExitByGoodsid(gid): boolean {
        gid = Number(gid);
        if (isNaN(gid)) {
            return false;
        }
        let res = false;
        for (let cid in this._shopList) {
            if (Object.prototype.hasOwnProperty.call(this._shopList, cid) && res == false) {
                let v = this._shopList[cid];
                let _temp = v["ginfo"] || {};
                for (let key in _temp) {
                    if (Object.prototype.hasOwnProperty.call(_temp, key) && res == false) {
                        let val = _temp[key];
                        if (val["gid"] == gid) {
                            res = true;
                        }
                    }
                }
            }
        }
        return res;
    }

    /**
     * 获取商品id对应的商品信息
     * @param gid Number
     * @returns 
     */
    getShopDataByGoodsID(gid) {
        gid = Number(gid);
        if (gid <= 0) {
            return null
        }
        let findGoods = false;
        let info = {};
        Object.keys(this._shopData).forEach(key => {
            if (Object.prototype.hasOwnProperty.call(this._shopData, key) && findGoods == false) {
                let v = this._shopData[key];
                let _temp = v["gList"] || {};
                Object.keys(_temp).forEach(key2 => {
                    if (Object.prototype.hasOwnProperty.call(_temp, key2) && findGoods == false) {
                        if (key2 == gid) {
                            findGoods = true;
                            info = _temp[key2]
                        }
                    }
                })
            }
        })
        return info;
    }
    /**
     * Shop:解析RBM支付的价格
     */
    detailPrice(data) {
        for (let i = 0; i < data.length; i++) {
            let value = data[i];
            for (let m = 0; m < value["pay"].length; m++) {
                let v = value["pay"][m];
                //只有人民币的才需要除一百
                if (PayAgent.isRMB(v["payID"]) == true) {
                    v["oldPrice"] = v["oldPrice"] / 100;
                    v["price"] = v["price"] / 100;
                };
            }
        }
    }
    /**
     * Shop:获取大标签下二级菜单信息
     * @param _type 等于pageID
     */
    getSubTbs(_type) {
        if (_type && this._shopSubTab[_type]) {
            let temp: Array<any> = this._shopSubTab[_type];
            return temp;
        }
    }
    /**
     * Shop:通过大/小标签类型获取对应的列表数据全局的shopList
     * @param subType 
     * 
     */
    private _getDataBySubType(subType) {
        subType = String(subType);
        if (subType && this._shopList && this._shopList[subType]) {
            let temp = this._shopList[subType];
            return Utils.clone(temp);
        }
        return {};
    }

    /**
     * 获取大/子类型菜单下的数据列表
     * @param subType 当前不存在子类默认使用大类查找数据
     */
    getDataList(subType: number) {
        let goodsDataItemArr = []
        let goodsList = this._getDataBySubType(subType);
        if (!Utils.table_isEmpty(goodsList['ginfo'])) {
            Object.keys(goodsList['ginfo']).forEach(key => {
                goodsDataItemArr.push(goodsList['ginfo'][key])
            })
        }
        return goodsDataItemArr;
    }
    /** 获取限时礼包数据 */
    getLimitGift() {
        let temp = null;
        return {}//temp || {};
    }
    /** 兑换、RMB购买、分享、看视频，其它任务等获得奖励时 */
    onUpdateGoods(gid, respData) {
        if (gid == null || !respData) {
            return;
        }
        this._onGoodsBuySucc(gid, respData);
    }

    /** 获取商品配置 */
    getShopList() {
        return this._shopList;
    }





}