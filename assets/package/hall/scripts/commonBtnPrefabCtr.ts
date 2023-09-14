
import { Label, Node, _decorator } from 'cc';
import { GCache } from '../../../cache/GCache';
import { AppEvent } from '../../../config/AppEvent';
import { AppSound } from '../../../config/AppSound';
import { GConstants } from '../../../config/GameConstant';
import { GameRes } from '../../../config/GameRes';
import { ReportConfig } from '../../../config/ReportConfig';
import { UIID } from '../../../config/UIConfig';
import { Utils } from '../../../framework/Utils';
import { EventManager } from '../../../framework/manager/EventManager';
import { BaseComponent } from '../../../framework/vc/BaseComponent';
import { Platform } from '../../../platform/Platform';
const { ccclass, property, menu } = _decorator;

/**
 * Name = commonBtnPrefabCtr
 * URL = db://assets/package/hall/scripts/commonBtnPrefabCtr.ts
 * Time = Wed Sep 07 2022 18:23:56 GMT+0800 (中国标准时间)
 * Author = Tomoe
 *
 * Life: onLoad-->onEnable->start->update->lateUpdate->onDisable->onDestroy
 */

@ccclass('commonBtnPrefabCtr')
//方便编辑器识别的菜单项目
@menu('prefab/hall/commonBtnPrefabCtr')
export class commonBtnPrefabCtr extends BaseComponent {

    // //钻石展示节点
    // @property({ tooltip: "金币展示节点", type: Node })
    // private goldNode: Node | null = null;

    // //钻石展示节点
    // @property({ tooltip: "钻石展示节点", type: Node })
    // private diamondNode: Node | null = null;

    // //钻石数量
    // @property({ tooltip: "钻石数量", type: Label })
    // private diamondLabel: Label | null = null;

    //银币数量
    @property({ tooltip: "银币数量", type: Label })
    private goldenLabel: Label | null = null;

    // //金条+
    // @property({ tooltip: "金条+", type: Node })
    // private diamondNodeAdd: Node | null = null;

    //银币+
    @property({ tooltip: "银币+", type: Node })
    private goldNodeAdd: Node | null = null;

    //邮件按钮节点
    @property({ tooltip: "邮件按钮节点", type: Node })
    private btnEmailNode: Node | null = null;

    /**是否点击显示商城*/
    set isShowShop(is: boolean) {
        this._isShowShopAdd = is != null ? is : null;
    };

    /** 红点UI队列 */
    _redDotView = {};

    /** 是否初始显示 */
    private _isShowShopAdd: boolean = null;

    /** 是否可点击 */
    private _isCanClickShop: boolean = true;
    /**初始化添加事件绑定 */
    protected onInitModuleEvent(): void {
        //玩家资产更新
        this.addModelListener(AppEvent.USER_UPDATE_PROPERTY, this.updatePropty);
        //红点更新
        this.addModelListener(AppEvent.NOTIFY_UPDATE_RED_DOT, this.refreshRedDot);
        //有界面被打开
        this.addModelListener(AppEvent.VIEW_UI_OPENED, this.notifyOpenedUI);
        //有界面被关闭
        this.addModelListener(AppEvent.VIEW_UI_CLOSED, this.notifyClosedUI);
    }
    onLoad() {
        this.initData()
    };

    start() {
        this.initView()
    };
    notifyOpenedUI(event, viewParam) {
        if (!this.node || this.node.isValid == false) {
            return
        }
        if (!this.goldNodeAdd) {
            return;
        }
        if (viewParam && viewParam["Prefab"] == GameRes.Prefab_Mall.path) {
            this.goldNodeAdd.active = false;
            this._isCanClickShop = false;
        }
    }

    notifyClosedUI(event, viewParam) {
        if (!this.node || this.node.isValid == false) {
            return
        }
        if (!this.goldNodeAdd) {
            return;
        }
        if (viewParam && viewParam["Prefab"] == GameRes.Prefab_Mall.path) {
            let status = Platform.isCanPay();
            this.goldNodeAdd.active = status;
            this._isCanClickShop = status;
        }
    }

    //初始化数据
    initData() {
        this._redDotView = {
            /** 邮件 */
            //	[GConstants.RedDotConf.Email]: this.btnEmailNode,
        }
    }
    //初始化界面
    initView() {
        this.updatePropty();
        this.initShopView();
        this.refreshRedDot();
    }


    //初始化商城的显示状态(IOS暂不支持微信支付功能)
    initShopView() {
        // if (!this.diamondNode || !this.goldNode) {
        // 	return;
        // }

        // if (Platform.isCanPay()) {
        // 	this.diamondNode.active = true;
        // } else {
        // 	this.diamondNode.active = false;
        // }
        // this.goldNode.active = true;

        let status = true;
        if (this._isShowShopAdd == false) {
            status = false;
            // this.diamondNodeAdd.active = status;
            this.goldNodeAdd.active = status;
            this._isCanClickShop = status;
        } else {
            status = Platform.isCanPay();
            // this.diamondNodeAdd.active = status;
            this.goldNodeAdd.active = status;
            this._isCanClickShop = status;
        }

    }


    /**更新玩家资产*/
    updatePropty(event = null, param = null) {
        if (param) {
            if (param["type"] == GConstants.PropertyType.SILVER_COIN) {
                this.goldenLabel.string = Utils.string_matchStr(GCache.User.getUserMoneyByID(GConstants.PropertyType.SILVER_COIN));
            }
        } else {
            this.goldenLabel.string = Utils.string_matchStr(GCache.User.getUserMoneyByID(GConstants.PropertyType.SILVER_COIN));
        }

    }

    /** 红点更新 */
    refreshRedDot(event = null, keyType = null) {
        if (keyType == null) {
            keyType = GConstants.RedDotConf.Email;
        }
        if (keyType != GConstants.RedDotConf.Email) {
            return;
        }
        this.btnEmailNode.active = GCache.RedDot.need_show_email();
        if (this.btnEmailNode.active == true) {
            let imgRedDot = this.btnEmailNode.getChildByName("img_dot");
            if (imgRedDot) {
                imgRedDot.active = GCache.RedDot.hasRedDot(keyType);
            }
        }
    }

    //点击客服按钮
    onKeFuClick(event: Event) {
        EventManager.dispatch(AppEvent.SYS_PLAY_EFFECT, AppSound.CommClick);
        EventManager.dispatch(AppEvent.REPORT_CLIENT_CLICK, { eventID: ReportConfig.hall_20 });
        console.log("点击事件响应===>>>>客服")
        if (Platform.isWXPlatform()) {
            Platform.openCustomerServiceConversation();
        } else {
            EventManager.dispatch(AppEvent.SYS_TOAST_TIP, { content: "点击了联系客服" });
        }
    }
    //点击设置按钮
    onSettingClick(event: Event) {
        EventManager.dispatch(AppEvent.REPORT_CLIENT_CLICK, { eventID: ReportConfig.hall_15 });
        EventManager.dispatch(AppEvent.SYS_PLAY_EFFECT, AppSound.CommClick);
        EventManager.dispatch(AppEvent.VIEW_UI_OPEN, UIID.SettingPrefab, null, null, null, true);
    }

    //点击邮箱按钮
    onMailClick(event: Event) {
        EventManager.dispatch(AppEvent.SYS_PLAY_EFFECT, AppSound.CommClick);
        EventManager.dispatch(AppEvent.VIEW_UI_OPEN, UIID.MailPrefab, null, null, null, true);
    }

    //点击银币按钮
    onGoldenClick(event: Event) {
        EventManager.dispatch(AppEvent.REPORT_CLIENT_CLICK, { eventID: ReportConfig.hall_2 });
        if (this._isCanClickShop) {
            if (Platform.isCanPay() == false) {
                return;
            }
            // EventManager.dispatch(AppEvent.SYS_PLAY_EFFECT, AppSound.CommClick);
            EventManager.dispatch(AppEvent.VIEW_UI_OPEN, UIID.MallPrefab, { id: GConstants.ShopBigTabType.SILVER_COIN }, {});
        }
    }

    //点击金条按钮 二期迭代
    onDiamonClick(event: Event) {
        // if (this._isCanClickShop) {
        // 	if (Platform.isCanPay() == false) {
        // 		return;
        // 	}
        // 	EventManager.dispatch(AppEvent.SYS_PLAY_EFFECT, AppSound.CommClick);
        // 	EventManager.dispatch(AppEvent.VIEW_UI_OPEN, UIID.MallPrefab, { id: GConstants.ShopBigTabType.DIAMOND }, {});
        // }
    }

    //销毁
    onDestroy() {

    };

}

