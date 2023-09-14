/**
 * Name = RecommendPopServers
 * URL = db://assets/proj/servers/RecommendPopServers.ts
 * Time = Wed Jun 22 2022 19:03:18 GMT+0800 (中国标准时间)
 * Author = xueya
 * 推荐弹窗服务与管理
 */

import { GCache } from "../../cache/GCache";
import { AppEvent } from "../../config/AppEvent";
import { GConstants } from "../../config/GameConstant";
import { UIID } from "../../config/UIConfig";
import { EventManager } from "../../framework/manager/EventManager";
import { Utils } from "../../framework/Utils";
import { BaseControll } from "../../framework/vc/BaseController";
import { GlobalCMD } from "../gnet/GlobalCMD";
import { PopupServers } from "./PopupServers";

export class RecommendPopServers extends BaseControll {
    private static _instance = null;
    public static getInstance(): RecommendPopServers {
        if (!this._instance || this._instance == null) {
            this._instance = new RecommendPopServers("RecommendPopServers");
        }
        return this._instance;
    }
    //实例化
    constructor(name: string) {
        super(name)
    };
    public static init(): RecommendPopServers {
        if (this._instance) {
            this._instance.clear()
        }
        this._instance = null
        RecommendPopServers.getInstance();
        return
    }

    //校验结果
    _popUpResult = [];
    /** 弹窗uid队列 { uid: uiid, toolid: id, data: info, mainlayer: self._curMainLayer }*/
    _popUIDQueue: Array<any> = [];
    // 当前场景id
    _currowPosID = null;
    // 延迟场景id
    _delayPosID = null;
    // 场景校验数据
    _checkPosData = {};
    //当前使用的校验数据
    _curCheckPosData = null;
    //当前主场景UID
    _curMainLayer = null;
    /** 推荐弹窗全部被关闭之后的回调 */
    _allCloseCallback: Function = null;
    /** 无推荐结果时的吐司 */
    _noResultTip: string = null;
    /** 弹窗ID-{UIID 检查函数}的映射 */
    private PopupID_UIIDMap: { [key: number]: { UIID: any, ckFunc: string } } = {
        /** 签到 */
        [GConstants.PopupIds.SIGNIN]: { UIID: UIID.SigninPrefab, ckFunc: "checkSignin" },
        /** 首充 */
        [GConstants.PopupIds.FIRSTPAY_ACTIVITY]: { UIID: UIID.FirstPayPrefab, ckFunc: "checkFirstPay" },
        /** 特价礼包 */
        [GConstants.PopupIds.HOLIDAY_ACTIVITY]: { UIID: UIID.GiftDiscountPrefab, ckFunc: "checkHoliday" },
        /** 活动中心 */
        [GConstants.PopupIds.ACTIVITY_CENTER]: { UIID: UIID.AtyCenterPrefab, ckFunc: "checkAcvitity" },

        /** 考虑添加桌面进入大厅领奖 */
    }
    /**初始化添加事件绑定 */
    protected onInitModuleEvent(): void {
        /** 设置关闭所有推荐弹窗的回调 */
        this.addModelListener(AppEvent.RECOMMEND_POP_SET_CALLBACK, this.setCloseAllFunc);
        /** 设置无推荐弹窗时的吐司 */
        this.addModelListener(AppEvent.RECOMMEND_POP_SET_NO_TIP, this.setNoTip);
        /** 打开队列弹窗界面 */
        this.addModelListener(AppEvent.RECOMMEND_POP_OPEN_VIEW, this.openViewQuene);
        /** 清除队列弹窗界面 */
        this.addModelListener(AppEvent.RECOMMEND_POP_CLEAN_QUENE, this.cleanViewQuene);
        /** 用户请求推荐弹窗 */
        this.addModelListener(AppEvent.RECOMMEND_POP_GET, this.getRecommend);
        /** 用户请求推荐弹窗数据返回 */
        this.addModelListener(AppEvent.NET_CMD_RESP_POP_ADVERTISE, this.getRespcommend);
    }
    /**
     * 请求推荐结果
     * @param popupPos 场景ID
     * @param params 附加参数
     */
    private reqPopAdvByPos(popupPos, params = null) {
        this._currowPosID = popupPos;
        let popData = this.getPopData();
        if (Utils.table_isEmpty(popData) == false && Utils.table_isEmpty(popData[0]) == false) {
            console.log("本地已存在弹窗数据：==>", popupPos, popData)
            this.getRecommendAllPopData(null, popData)
        } else {
            console.log("请求推荐弹窗数据：==>", popupPos)
            let reqData = {
                cmd: GlobalCMD.PHP_ACTIVITY_MODAL_POPUP,
                body: {},
            }
            EventManager.dispatch(AppEvent.NET_SEND_MSG, reqData);
        }


    }
    /**
     * 获取次数和当前弹出的场景
     */
    private getPopData() {
        let currentData = [];
        let currowMax = 0;
        if (this._currowPosID == GConstants.PopupPos.POS_LOGIN) {
            currentData = GCache.RecommendPop.getIntoHallPropData();
            currowMax = GCache.RecommendPop.getIntoHallPopTime();
        } else if (this._currowPosID == GConstants.PopupPos.POS_INTO_ROOM) {
            currentData = GCache.RecommendPop.getIntoGamePropData();
            currowMax = GCache.RecommendPop.getIntoGamePopTime();

        } else {
            return null;
        }
        return [currentData, currowMax]
    }
    /**
     * 请求推荐弹窗数据（事件调用）
     * @param id 
     * @param data 
     * @param isDelay 
     */
    private getRecommend(event = null, id, data = null, isDelay: boolean = false) {
        if (id == null) {
            return;
        }
        if (this._curMainLayer != PopupServers.getInstance().MainLayerCode) {
            this.cleanViewQuene();
            this.setNoTip(null);
            this.setCloseAllFunc(null);
        }
        this._checkPosData[id] = {
            mainCode: PopupServers.getInstance().MainLayerCode,
            noResultTip: this._noResultTip,
            allCloseCallFunc: this._allCloseCallback,
            isCheck: false
        }

        this._noResultTip = null;
        this._allCloseCallback = null;

        if (this._delayPosID != null && isDelay) {
            this.getDelayRecommend();
        } else {
            this.reqPopAdvByPos(id, data);
        }
    };
    /**
     * 设置关闭所有推荐弹窗的回调
     * @param event 
     * @param callback 
     */
    private setCloseAllFunc(event = null, callback: Function = null) {
        this._allCloseCallback = callback;
    }
    /**
     * 设置无推荐弹窗时的吐司
     * @param event 
     * @param tips 
     */
    private setNoTip(event = null, tips = null) {
        this._noResultTip = tips;
    }
    /** 请求延迟弹窗数据 */
    private getDelayRecommend() {
        this.reqPopAdvByPos(this._delayPosID);
        this._delayPosID = null;
    };

    /**
     * 推荐弹窗数据返回
     */
    getRespcommend(event, isSuccess, respData, reqData) {
        console.log('获取获取强弹数据返回', isSuccess, respData)
        if (!isSuccess) {
            console.log('获取获取强弹数据失败', respData)
            return
        }
        if (isSuccess && respData) {
            // 解析弹窗数据
            GCache.RecommendPop.updatePopData(respData);
            //请求之后获取的弹窗数据
            this.getRecommendAllPopData(event, this.getPopData())
        }
    }
    /** 获取指定推荐弹窗配置数据 */
    private getRecommendAllPopData(event = null, data: Array<any>) {
        if (Utils.table_isEmpty(data)) {
            return;
        }
        let popupPos = this._currowPosID;
        // 当前主场景
        let _cur_pos = PopupServers.getInstance().MainLayerCode;
        this.print(`获取指定推荐弹窗配置数据popupPos=${popupPos},_cur_pos=${String(_cur_pos)},是否为空:${String(this._checkPosData[popupPos])}`)
        if (this._checkPosData[popupPos] != null && !!this._checkPosData[popupPos]["isCheck"] != true) {
            let checkPos = this._checkPosData[popupPos]["mainCode"];
            this._checkPosData[popupPos]["isCheck"] = true
            if (_cur_pos != checkPos) {
                this.print(`推荐场景不一致 不做推荐 checkPos=${checkPos},_cur_pos=${String(_cur_pos)}`)
                return;
            }
        }
        this._curMainLayer = PopupServers.getInstance().MainLayerCode;
        this._curCheckPosData = Utils.clone(this._checkPosData[popupPos]);

        this.checkRecommendPopup(data)
        this._allCloseCallback = null;
    }
    /** 校验推荐弹窗是否展示 */
    private checkRecommendPopup(pData) {
        if (pData && pData instanceof Array && pData.length > 0) {
            //强弹队列
            let data = pData[0];
            //最大可弹
            let maxLen = pData[1];

            /** 不支持的弹窗类型 */
            let notKeepPopList = [];
            for (let i = 0; i < data.length; i++) {
                let currowPopData = data[i];
                let info = null;
                if (currowPopData.length > 1) {//存在互斥
                    info = currowPopData;
                    let alrCheckInfo = [];
                    this.print("checkRecommendPopup:检测到互斥数据:", info);
                    for (let m = 0; m < info.length; m++) {
                        if (GCache.RecommendPop.checkPopDayCount(info[m]) == true) {
                            alrCheckInfo.push(info[m]);
                        } else {
                            this.print("checkRecommendPopup:互斥数据 次数不满足:", info[m]);
                        }
                    }
                    if (alrCheckInfo.length > 0) {
                        for (let m = 0; m < alrCheckInfo.length; m++) {
                            if (this.PopupID_UIIDMap[alrCheckInfo[m]["toolid"]]) {
                                if (this.PopupID_UIIDMap[alrCheckInfo[m]["toolid"]].ckFunc && this[this.PopupID_UIIDMap[alrCheckInfo[m]["toolid"]].ckFunc] != null) {
                                    let oldLength = this._popUpResult.length;
                                    this[this.PopupID_UIIDMap[alrCheckInfo[m]["toolid"]].ckFunc](alrCheckInfo[m]);
                                    //满足了一个数据变动 就就终止
                                    if (this._popUpResult.length > oldLength) {
                                        break;
                                    }
                                }
                            } else {
                                notKeepPopList.push(info);
                            }

                        }

                    }
                } else {
                    info = currowPopData[0];
                    if (GCache.RecommendPop.checkPopDayCount(info) == true) {
                        if (this.PopupID_UIIDMap[info["toolid"]]) {
                            if (this.PopupID_UIIDMap[info["toolid"]].ckFunc && this[this.PopupID_UIIDMap[info["toolid"]].ckFunc] != null) {
                                this[this.PopupID_UIIDMap[info["toolid"]].ckFunc](info);
                            }
                        } else {
                            notKeepPopList.push(info);
                        }
                    }
                }
            }
            this.print("checkRecommendPopup:要弹出的数据>>", Utils.clone(this._popUpResult));
            //处理最大上限
            if (this._popUpResult.length > maxLen) {
                this._popUpResult = this._popUpResult.splice(0, maxLen)
                this.print(`checkRecommendPopup:超过最大弹窗次数${maxLen}>>`, Utils.clone(this._popUpResult));
            }
            if (this._curCheckPosData) {
                this.showRecommendPopup(this._curCheckPosData["allCloseCallFunc"], this._curCheckPosData["noResultTip"]);
            } else {
                this.showRecommendPopup(null, null);
            }

        } else {
            //关闭正在加载中
            EventManager.dispatch(AppEvent.SYS_CLOSE_NETLOADING);
            if (this._curCheckPosData) {
                if (this._curCheckPosData["allCloseCallFunc"]) {
                    this._curCheckPosData["allCloseCallFunc"]();
                }
                if (this._curCheckPosData["noResultTip"]) {
                    EventManager.dispatch(AppEvent.SYS_TOAST_TIP, { content: this._curCheckPosData["noResultTip"] });
                }
            }
        }
    }

    /** 展示推荐弹窗(走到这一步 必须保证主场景标识是一致的) */
    private showRecommendPopup(callback = null, noResultTip = null) {
        this.print("showRecommendPopup", this._popUpResult)
        if (this._popUpResult && this._popUpResult.length > 0) {
            this._popUIDQueue = [];
            let self = this;
            let showPopup = function (id, info) {
                let uiid = null;

                if (self.PopupID_UIIDMap[info["toolid"]].UIID != null) {
                    uiid = self.PopupID_UIIDMap[info["toolid"]].UIID;
                }
                if (uiid != null) {
                    self._checkRepeatUIID(uiid);
                    //支付场景
                    // info["pay_scene"] = GConstants.PayScene[info["scene_id"]];
                    //保存的数据格式
                    self._popUIDQueue.push({ uiid: uiid, toolid: id, data: info, mainlayer: self._curMainLayer });
                }
            }
            for (let i = 0; i < this._popUpResult.length; i++) {
                let info = this._popUpResult[i];
                showPopup(info["toolid"], info);
            }
            this._popUpResult = [];
            this.openViewQuene(null, callback);
        } else {
            //关闭正在加载中
            EventManager.dispatch(AppEvent.SYS_CLOSE_NETLOADING);
            if (callback) {
                callback();
            }
            if (noResultTip) {
                EventManager.dispatch(AppEvent.SYS_TOAST_TIP, { content: noResultTip });
            }
        }
    }
    /** 去除重复的uiid */
    private _checkRepeatUIID(uIID) {
        if (this._popUIDQueue.length == 0) {
            return;
        }
        for (let i = this._popUIDQueue.length - 1; i >= 0; i--) {
            if (this._popUIDQueue[i]["uiid"] == uIID) {
                this._popUIDQueue.splice(i, 1);
            };
        }
    }
    /** 打开弹窗队列 */
    private openViewQuene(event = null, finishCallback) {
        if (this._popUIDQueue.length <= 0) {
            this.print("openViewQuene 1")
            if (event != null && finishCallback) {
                //最后的回调
                finishCallback();
            } else {
                //关闭正在加载中
                EventManager.dispatch(AppEvent.SYS_CLOSE_NETLOADING);
            }
            return;
        }
        let curMainLayer = PopupServers.getInstance().MainLayerCode;
        let info = null;
        for (let i = 0; i < this._popUIDQueue.length; i++) {
            if (this._popUIDQueue[i]["mainlayer"] == curMainLayer) {
                info = this._popUIDQueue[i];
                this._popUIDQueue.splice(i, 1);
                break;
            }
        }
        if (info) {
            let self = this;
            //正在加载中
            EventManager.dispatch(AppEvent.SYS_SHOW_NETLOADING, 60);
            EventManager.dispatch(AppEvent.VIEW_UI_OPEN, info["uiid"], info["data"], {
                onAdded: function (node, viewParams) {
                    //关闭正在加载中
                    EventManager.dispatch(AppEvent.SYS_CLOSE_NETLOADING);
                    self.print("弹窗队列 添加完成===>更新次数", info)
                    GCache.RecommendPop.updatePopDayCountData(info["data"]);
                },
                onRemoved: function () {
                    self.print("弹窗队列 移除完成===>", info)
                    EventManager.dispatch(AppEvent.RECOMMEND_POP_OPEN_VIEW, finishCallback);
                }
            })
        } else {
            this.print("openViewQuene 场景不一致", this._popUIDQueue, curMainLayer)
        }
    }
    /** 清除队列 */
    private cleanViewQuene(event = null) {
        this._popUIDQueue = [];
    }

    /** 检查每日签到
     * alrCheckInfo[m], other, scene
     */
    private checkSignin(info) {
        let isShow = GCache.RedDot.has_reddot_signin();

        if (isShow) {
            this._popUpResult.push(info);
        }
    }
    /** 检查特价礼包 */
    private checkHoliday(info) {
        let isShow = GCache.RedDot.need_show_holiday()
        if (isShow) {
            this._popUpResult.push(info);
        }
    }

    /** 检查首充礼包
     * 
     */
    private checkFirstPay(info) {
        let isShow = GCache.RedDot.need_show_gift_firstpay()
        if (isShow) {
            this._popUpResult.push(info);
        }
    }
    /** 检查活动中心 
     * 有数据就弹
    */
    private checkAcvitity(info) {
        let isShow = GCache.RedDot.has_reddot_activityNormal()
        if (isShow) {
            this._popUpResult.push(info);
        }
    }

}
