System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Label, Node, _decorator, GCache, AppEvent, AppSound, GConstants, EventManager, Utils, BaseComponent, Platform, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _crd, ccclass, property, menu, friendPrefabCtr;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfGCache(extras) {
    _reporterNs.report("GCache", "../../../cache/GCache", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAppEvent(extras) {
    _reporterNs.report("AppEvent", "../../../config/AppEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAppSound(extras) {
    _reporterNs.report("AppSound", "../../../config/AppSound", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGConstants(extras) {
    _reporterNs.report("GConstants", "../../../config/GameConstant", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventManager(extras) {
    _reporterNs.report("EventManager", "../../../framework/manager/EventManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUtils(extras) {
    _reporterNs.report("Utils", "../../../framework/Utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../../framework/vc/BaseComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlatform(extras) {
    _reporterNs.report("Platform", "../../../platform/Platform", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Label = _cc.Label;
      Node = _cc.Node;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      GCache = _unresolved_2.GCache;
    }, function (_unresolved_3) {
      AppEvent = _unresolved_3.AppEvent;
    }, function (_unresolved_4) {
      AppSound = _unresolved_4.AppSound;
    }, function (_unresolved_5) {
      GConstants = _unresolved_5.GConstants;
    }, function (_unresolved_6) {
      EventManager = _unresolved_6.EventManager;
    }, function (_unresolved_7) {
      Utils = _unresolved_7.Utils;
    }, function (_unresolved_8) {
      BaseComponent = _unresolved_8.BaseComponent;
    }, function (_unresolved_9) {
      Platform = _unresolved_9.Platform;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9ff2fxBI2VFyI0frtp1sNa5", "friendPrefabCtr", undefined);

      __checkObsolete__(['Label', 'Node', '_decorator']);

      ({
        ccclass,
        property,
        menu
      } = _decorator);
      /**
       * Name = friendPrefabCtr
       * URL = db://assets/package/hall/scripts/friendPrefabCtr.ts
       * Time = Tue Sep 13 2022 15:55:28 GMT+0800 (中国标准时间)
       * Author = Tomoe
       * 好友列表
       * Life: onLoad-->onEnable->start->update->lateUpdate->onDisable->onDestroy
       */

      _export("friendPrefabCtr", friendPrefabCtr = (_dec = ccclass('friendPrefabCtr'), _dec2 = menu('prefab/activity/friendPrefabCtr'), _dec3 = property({
        tooltip: "界面按钮父节点",
        type: Node
      }), _dec4 = property({
        tooltip: "搜索框",
        type: Label
      }), _dec5 = property({
        tooltip: "好友列表界面",
        type: Node
      }), _dec6 = property({
        tooltip: "添加好友提示",
        type: Node
      }), _dec7 = property({
        tooltip: "用户好友条-添加父节点",
        type: Node
      }), _dec8 = property({
        tooltip: "用户好友条-克隆",
        type: Node
      }), _dec(_class = _dec2(_class = (_class2 = class friendPrefabCtr extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "sceneBtnLayer", _descriptor, this);

          _initializerDefineProperty(this, "labelSearchInput", _descriptor2, this);

          _initializerDefineProperty(this, "frdListScene", _descriptor3, this);

          _initializerDefineProperty(this, "btnAddTip", _descriptor4, this);

          _initializerDefineProperty(this, "frdListView", _descriptor5, this);

          _initializerDefineProperty(this, "nodeUserItem", _descriptor6, this);

          this.sceneLayer = null;
          this.sceneChoice = 0;
          this._friendList = [];
          this._maxFriendNum = 120;
          this._cloundUIKey = "friendList";
        }

        onLoad() {
          this.nodeUserItem.active = false;
          this.sceneLayer = {
            0: this.frdListScene
          };
          this.sceneChoice = 0;
          this.showView();
        }

        start() {}

        showView() {
          this.updateShowBtn();
          this.updateSceneShow();
          this.refreshFrdList();
        }
        /** 刷新列表 */


        refreshFrdList() {
          if (!this.node || this.node.isValid == false) {
            return;
          }

          this.frdListView.active = true;
          this.btnAddTip.active = (_crd && Platform === void 0 ? (_reportPossibleCrUseOfPlatform({
            error: Error()
          }), Platform) : Platform).WxAuthSettingFriends != 1;

          if ((_crd && Platform === void 0 ? (_reportPossibleCrUseOfPlatform({
            error: Error()
          }), Platform) : Platform).WxAuthSettingFriends == 1) {
            let self = this;
            (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
              error: Error()
            }), GCache) : GCache).User.getCloudStorageSaveList(resParam => {
              (_crd && Platform === void 0 ? (_reportPossibleCrUseOfPlatform({
                error: Error()
              }), Platform) : Platform).setPlatformCloudStorage(resParam);
              let data = {};
              data["UIKey"] = self._cloundUIKey;
              data["reloadUI"] = true;
              data["param"] = (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
                error: Error()
              }), GCache) : GCache).User.getCloudStorageParam();
              (_crd && Platform === void 0 ? (_reportPossibleCrUseOfPlatform({
                error: Error()
              }), Platform) : Platform).postMessage(data);
            });
          } else if ((_crd && Platform === void 0 ? (_reportPossibleCrUseOfPlatform({
            error: Error()
          }), Platform) : Platform).WxAuthSettingFriends == -1) {
            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
              error: Error()
            }), AppEvent) : AppEvent).SYS_TOAST_TIP, {
              content: "tip:已拒绝好友授权"
            });
          }
        } //刷新选中界面按钮


        updateShowBtn() {
          let len = this.sceneBtnLayer.children.length;

          for (let i = 0; i < len; i++) {
            let node = this.sceneBtnLayer.children[i];
            let selectDot = node.getChildByName("img_dot_selected");
            let selectImg = node.getChildByName("img_selected");

            if (String(this.sceneChoice) == String(i)) {
              selectDot.active = true;
              selectImg.active = true;
            } else {
              selectDot.active = false;
              selectImg.active = false;
            }
          }
        } //刷新选中界面


        updateSceneShow() {
          for (let i in this.sceneLayer) {
            let node = this.sceneLayer[i];

            if (String(this.sceneChoice) == String(i)) {
              node.active = true;
            } else {
              node.active = false;
            }
          }
        }
        /** 更新单条朋友数据 */


        updateFriendItem(item, data) {
          if (!item || !data) {
            return;
          } //更新数据


          item.active = true;
        }
        /** 点击去加好友 */


        onClickAddFriend(event = null) {
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).SYS_PLAY_EFFECT, (_crd && AppSound === void 0 ? (_reportPossibleCrUseOfAppSound({
            error: Error()
          }), AppSound) : AppSound).CommClick);
          (_crd && Platform === void 0 ? (_reportPossibleCrUseOfPlatform({
            error: Error()
          }), Platform) : Platform).reqPlatformFriendInteraction((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).handler(this, this.refreshFrdList));
        }
        /** 点击搜索 */


        onClickSearch(event = null) {
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).SYS_PLAY_EFFECT, (_crd && AppSound === void 0 ? (_reportPossibleCrUseOfAppSound({
            error: Error()
          }), AppSound) : AppSound).CommClick);
          this.btnAddTip.active = (_crd && Platform === void 0 ? (_reportPossibleCrUseOfPlatform({
            error: Error()
          }), Platform) : Platform).WxAuthSettingFriends != 1;
          console.log("搜索内容：", this.labelSearchInput.string);

          if ((_crd && Platform === void 0 ? (_reportPossibleCrUseOfPlatform({
            error: Error()
          }), Platform) : Platform).WxAuthSettingFriends == 1) {
            let data = {};
            data["UIKey"] = this._cloundUIKey;
            data["findByKey"] = true;
            data["param"] = {
              key: "nickname",
              search: this.labelSearchInput.string
            };
            (_crd && Platform === void 0 ? (_reportPossibleCrUseOfPlatform({
              error: Error()
            }), Platform) : Platform).postMessage(data);
          }
        } //点击好友列表


        onFriendListClick(event) {
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).SYS_PLAY_EFFECT, (_crd && AppSound === void 0 ? (_reportPossibleCrUseOfAppSound({
            error: Error()
          }), AppSound) : AppSound).CommClick);
          this.sceneChoice = 0;
          this.showView();
        } //点击好友消息


        onFriendMsgClick(event) {
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).SYS_PLAY_EFFECT, (_crd && AppSound === void 0 ? (_reportPossibleCrUseOfAppSound({
            error: Error()
          }), AppSound) : AppSound).CommClick);
          this.sceneChoice = 1;
          this.showView();
        } //点击添加好友


        onAddFriendClick(event) {
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).SYS_PLAY_EFFECT, (_crd && AppSound === void 0 ? (_reportPossibleCrUseOfAppSound({
            error: Error()
          }), AppSound) : AppSound).CommClick);
          this.sceneChoice = 2;
          this.showView();
        } //点击查找好友


        onCheckFrdClick(event) {
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).SYS_PLAY_EFFECT, (_crd && AppSound === void 0 ? (_reportPossibleCrUseOfAppSound({
            error: Error()
          }), AppSound) : AppSound).CommClick);
        } //点击邀请好友


        onClickInviteFriend(event) {
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).SYS_PLAY_EFFECT, (_crd && AppSound === void 0 ? (_reportPossibleCrUseOfAppSound({
            error: Error()
          }), AppSound) : AppSound).CommClick);
          let shopShareMsg = (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
            error: Error()
          }), GCache) : GCache).ShareInfo.getShareConfigByType((_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
            error: Error()
          }), GConstants) : GConstants).ShareSceneConf.friend);
          let _shareOptions = {
            title: shopShareMsg[0]['title'],
            imageUrl: shopShareMsg[0]['img']
          };
          (_crd && Platform === void 0 ? (_reportPossibleCrUseOfPlatform({
            error: Error()
          }), Platform) : Platform).shareWXFriends(_shareOptions);
        } //点击关闭界面


        onCloseClick(event) {
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).SYS_PLAY_EFFECT, (_crd && AppSound === void 0 ? (_reportPossibleCrUseOfAppSound({
            error: Error()
          }), AppSound) : AppSound).CommClick);
          this.node.destroy();
        } //销毁


        onDestroy() {
          let data = {};
          data["UIKey"] = this._cloundUIKey;
          data["close"] = true;
          (_crd && Platform === void 0 ? (_reportPossibleCrUseOfPlatform({
            error: Error()
          }), Platform) : Platform).postMessage(data);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "sceneBtnLayer", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "labelSearchInput", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "frdListScene", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "btnAddTip", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "frdListView", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "nodeUserItem", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=2cebbf44e28723c046c4b793ca9a3f4df2e36d45.js.map