
import { Button, ImageAsset, Node, ScrollView, Sprite, SpriteFrame, _decorator } from 'cc';
import { GCache } from '../../../cache/GCache';
import { AppEvent } from '../../../config/AppEvent';
import { AppSound } from '../../../config/AppSound';
import { StoreKey } from '../../../config/GameConstant';
import { GameRes } from '../../../config/GameRes';
import { resLoader } from '../../../framework/loader/ResLoader';
import { LocalStorage } from '../../../framework/LocalStorage';
import { EventManager } from '../../../framework/manager/EventManager';
import { Utils } from '../../../framework/Utils';
import { BaseComponent } from '../../../framework/vc/BaseComponent';
import { Platform } from '../../../platform/Platform';
const { ccclass, property } = _decorator;

/**
 * Name = UserAgreePrivateCtr
 * URL = db://assets/package/login/scripts/UserAgreePrivateCtr.ts
 * Time = Thu Aug 04 2022 17:12:23 GMT+0800 (中国标准时间)
 * Author = xueya
 *
 * Life: onLoad-->onEnable->start->update->lateUpdate->onDisable->onDestroy
 * 
 * 用户协议和隐私政策
 */

@ccclass('UserAgreePrivateCtr')
export class UserAgreePrivateCtr extends BaseComponent {

    //正文标题
    @property({ tooltip: "隐私保护内容指引节点", type: Node })
    privateHelpNode: Node = null!;
    //正文标题
    @property({ tooltip: "标题内容", type: Node })
    titleNode: Node = null!;

    //正文节点
    @property({ tooltip: "正文节点", type: Node })
    contentNode: Node = null!;
    //滚动容器
    @property({ tooltip: "滚动容器", type: Node })
    scrollContent: Node = null!;

    @property({ tooltip: "滚动条节点", type: Node })
    scrollowBarNode: Node = null!;


    @property({ tooltip: "菜单标签-用户协议", type: Node })
    menuUserAgree: Node = null!;

    @property({ tooltip: "菜单标签-隐私政策", type: Node })
    menuPrivatePro: Node = null!;

    @property({ tooltip: "两个按钮的父节点", type: Node })
    nodeTwoBtn: Node = null!;

    @property({ tooltip: "一个按钮的父节点", type: Node })
    nodeOneBtn: Node = null!;

    //无内容时的节点
    @property({ tooltip: "无内容时的节点", type: Node })
    nodeNoTips: Node = null!;

    //TAB标签
    @property({ tooltip: "TAB标签", type: Node })
    nodeTab: Node = null!;

    //用户协议图集
    _userAgreeRes: Map<number, ImageAsset> = new Map();
    //隐私政策图集
    _priRes: Map<number, ImageAsset> = new Map();
    //当前最大资源加载数量
    _curMaxResNum = -1;
    //当前类型
    _currowType = 0;
    //是否上报给平台
    _isReportToPlatform = false;

    _isLoad: boolean = false;
    constructor() {
        super();
        this.preLoad();
    }
    //预加载
    preLoad() {
        if (!GCache.firstRunLoadSuccess) {
            return;
        }
        let self = this;
        for (let i = 0; i < GameRes.Picture_UserPrivacyPolicy.length; i++) {
            let oneResConf = GameRes.Picture_UserPrivacyPolicy[i];
            resLoader.load(oneResConf.bundle, oneResConf.path, ImageAsset, (err: Error | null, imageAsset) => {
                if (err || !self._priRes) {
                    return;
                }

                self._priRes.delete(i);
                self._priRes.set(i, imageAsset);
                if (self._currowType == 2) {
                    self.onLoadCallback(self._currowType);
                }
            });
        };
        for (let i = 0; i < GameRes.Picture_UserAgree.length; i++) {
            let oneResConf = GameRes.Picture_UserAgree[i];
            resLoader.load(oneResConf.bundle, oneResConf.path, ImageAsset, (err: Error | null, imageAsset) => {
                if (err || !self._userAgreeRes) {
                    return;
                }
                self._userAgreeRes.delete(i);
                self._userAgreeRes.set(i, imageAsset);

                if (self._currowType == 1) {
                    self.onLoadCallback(self._currowType);
                }
            });
        }

    }
    onLoad() {
        let comp = null;
        let currowType = null;
        let isHaveTag = true;

        comp = this.node.getComponent("DelegateComponent")
        if (comp) {
            let params = Utils.table_verify(comp.getParams());
            currowType = params["type"];
            isHaveTag = params["isHaveTag"] != false;
        }
        this._isReportToPlatform = (currowType == null);
        this.privateHelpNode.active = Platform.checkPrivacyContract();
        this.nodeTab.active = isHaveTag;
        this._currowType = currowType ? currowType : 2;
        this._isLoad = true;
        this.updateView();
        if (this._isReportToPlatform) {
            Platform.onNeedPrivacyAuthorization_WX("exposureAuthorization");
        }
    };
    start() {
        if (this._currowType == 1) {
            this.onClickMenuUserAgree();
        } else {
            this.onClickMenuPrivatePro();
        }
    }

    /** 更新界面 */
    updateView() {
        let isAgree = LocalStorage.get(StoreKey.LOGIN_LAST_CHECK_AGREE, false);
        if (!isAgree) {
            this.nodeTwoBtn.active = true;
            this.nodeOneBtn.active = false;
        } else {
            this.nodeTwoBtn.active = false;
            this.nodeOneBtn.active = true;
        }
        this.nodeNoTips.active = true;
    }
    //点击了用户协议
    onClickMenuUserAgree(e = null) {
        if (e) {
            EventManager.dispatch(AppEvent.SYS_PLAY_EFFECT, AppSound.CommClick);
        }
        let clickSprite = this.menuUserAgree.getChildByName("Sprite");
        let clickBtn = this.menuUserAgree.getChildByName("btn");
        clickBtn.getComponent(Button).interactable = false;
        clickSprite.getComponent(Sprite).grayscale = false;

        let anotherSprite = this.menuPrivatePro.getChildByName("Sprite");
        let anotherBtn = this.menuPrivatePro.getChildByName("btn");
        anotherBtn.getComponent(Button).interactable = true;
        anotherSprite.getComponent(Sprite).grayscale = true;
        this.onLoadUserAgree();
        this.scrollContent.getComponent(ScrollView).scrollToTop(0.01, false);

    }

    //点击了隐私协议
    onClickMenuPrivatePro(e = null) {
        if (e) {
            EventManager.dispatch(AppEvent.SYS_PLAY_EFFECT, AppSound.CommClick);
        }
        let clickSprite = this.menuPrivatePro.getChildByName("Sprite");
        let clickBtn = this.menuPrivatePro.getChildByName("btn");
        clickBtn.getComponent(Button).interactable = false;
        clickSprite.getComponent(Sprite).grayscale = false;

        let anotherSprite = this.menuUserAgree.getChildByName("Sprite");
        let anotherBtn = this.menuUserAgree.getChildByName("btn");
        anotherBtn.getComponent(Button).interactable = true;
        anotherSprite.getComponent(Sprite).grayscale = true;

        this.onLoadPrivacyPolicy();
        this.scrollContent.getComponent(ScrollView).scrollToTop(0.01, false);

    }
    /** 点击了隐私保护指引 */
    onClickPrivateHelp(e = null) {
        EventManager.dispatch(AppEvent.SYS_PLAY_EFFECT, AppSound.CommClick);
        Platform.openPrivacyContract_WX();
    }
    //点击了同意
    onClickSure() {
        EventManager.dispatch(AppEvent.SYS_PLAY_EFFECT, AppSound.CommClick);
        LocalStorage.set(StoreKey.LOGIN_LAST_CHECK_AGREE, true);
        if (this._isReportToPlatform) {
            Platform.onNeedPrivacyAuthorization_WX("agree");
        }
        EventManager.dispatch(AppEvent.LOGIN_AGREE_PRIVATE, true)

        this.node.destroy();
    }

    //点击了不同意
    onClickNotSure() {
        EventManager.dispatch(AppEvent.SYS_PLAY_EFFECT, AppSound.CommClick);
        // if (this._isReportToPlatform) {
        // 	Platform.onNeedPrivacyAuthorization_WX("disagree");
        // }
        this.node.destroy();
    }

    /** 加载用户协议 */
    onLoadUserAgree() {
        this._curMaxResNum = GameRes.Picture_UserAgree.length;
        this._currowType = 1;
        this.onLoadCallback(this._currowType);
    }
    /** 加载隐私政策 */
    onLoadPrivacyPolicy() {
        this._curMaxResNum = GameRes.Picture_UserPrivacyPolicy.length;
        this._currowType = 2;
        this.onLoadCallback(this._currowType);
    }
    /** 加载完成的回调 */
    onLoadCallback(type: number = 0) {
        if (type == 0) {
            return;
        }
        if (this._isLoad == false) {
            return;
        }

        if (type == 1 && this._userAgreeRes.size == this._curMaxResNum) {
            this.contentNode.removeAllChildren();
            this.nodeNoTips.active = false;
            for (let i = 0; i < this._curMaxResNum; i++) {
                let imageAssert = this._userAgreeRes.get(i);
                if (imageAssert) {
                    let spriteFrame = Utils.image_ImageAssetToSpriteFrame(imageAssert);
                    if (spriteFrame) {
                        this.contentNode.addChild(this.creatorSpriteNode(spriteFrame));
                    }
                }

            }
        } else if (type == 2 && this._priRes.size == this._curMaxResNum) {
            this.contentNode.removeAllChildren();
            this.nodeNoTips.active = false;
            for (let i = 0; i < this._curMaxResNum; i++) {
                let imageAssert = this._priRes.get(i);
                if (imageAssert) {
                    let spriteFrame = Utils.image_ImageAssetToSpriteFrame(imageAssert);
                    if (spriteFrame) {
                        this.contentNode.addChild(this.creatorSpriteNode(spriteFrame));
                    }
                }

            }
        }

    }

    creatorSpriteNode(spriteFrame: SpriteFrame): Node {
        let node = Utils.create_2DSprite(spriteFrame, "Sprite");
        return node;
    }

    //销毁
    onDestroy() {

    };

}

