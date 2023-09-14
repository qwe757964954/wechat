System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Label, Layout, Node, Sprite, _decorator, instantiate, AppEvent, AppSound, GameRes, Utils, DelegateComponent, EventManager, BaseComponent, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _crd, ccclass, property, menu, animConfig, getPopPrefabCtr;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfAppEvent(extras) {
    _reporterNs.report("AppEvent", "../../../config/AppEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAppSound(extras) {
    _reporterNs.report("AppSound", "../../../config/AppSound", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameRes(extras) {
    _reporterNs.report("GameRes", "../../../config/GameRes", _context.meta, extras);
  }

  function _reportPossibleCrUseOfinf_GetPropItem(extras) {
    _reporterNs.report("inf_GetPropItem", "../../../framework/InterfaceDefines", _context.meta, extras);
  }

  function _reportPossibleCrUseOfinf_SpineAniCreate(extras) {
    _reporterNs.report("inf_SpineAniCreate", "../../../framework/InterfaceDefines", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUtils(extras) {
    _reporterNs.report("Utils", "../../../framework/Utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDelegateComponent(extras) {
    _reporterNs.report("DelegateComponent", "../../../framework/layer/DelegateComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventManager(extras) {
    _reporterNs.report("EventManager", "../../../framework/manager/EventManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../../framework/vc/BaseComponent", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Label = _cc.Label;
      Layout = _cc.Layout;
      Node = _cc.Node;
      Sprite = _cc.Sprite;
      _decorator = _cc._decorator;
      instantiate = _cc.instantiate;
    }, function (_unresolved_2) {
      AppEvent = _unresolved_2.AppEvent;
    }, function (_unresolved_3) {
      AppSound = _unresolved_3.AppSound;
    }, function (_unresolved_4) {
      GameRes = _unresolved_4.GameRes;
    }, function (_unresolved_5) {
      Utils = _unresolved_5.Utils;
    }, function (_unresolved_6) {
      DelegateComponent = _unresolved_6.DelegateComponent;
    }, function (_unresolved_7) {
      EventManager = _unresolved_7.EventManager;
    }, function (_unresolved_8) {
      BaseComponent = _unresolved_8.BaseComponent;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b9954T7KsVG06QZdSs/OFJI", "getPopPrefabCtr", undefined);

      __checkObsolete__(['Label', 'Layout', 'Node', 'Sprite', '_decorator', 'instantiate']);

      ({
        ccclass,
        property,
        menu
      } = _decorator);
      /**
       * Name = getPopPrefabCtr
       * URL = db://assets/package/hall/scripts/getPopPrefabCtr.ts
       * Time = Wed Nov 16 2022 17:50:14 GMT+0800 (中国标准时间)
       * Author = Tomoe
       *
       * Life: onLoad-->onEnable->start->update->lateUpdate->onDisable->onDestroy
       */

      animConfig = {
        get: ["doudou", "get", "get_loop"],
        get_TS: ["TS_light_chuchang", "TS_light_loop", "TS_tihuan"],
        light: ["light"],
        //skin:["A","B","S","SS"]
        GetRoles: ["getroles", "getroles_loop"] //skin:["A","B","S","SS"]

      };

      _export("getPopPrefabCtr", getPopPrefabCtr = (_dec = ccclass('getPopPrefabCtr'), _dec2 = menu('prefab/activity/getPopPrefabCtr'), _dec3 = property({
        tooltip: "道具页面",
        type: Node
      }), _dec4 = property({
        tooltip: "道具动画节点",
        type: Node
      }), _dec5 = property({
        tooltip: "用户头像框",
        type: Node
      }), _dec6 = property({
        tooltip: "道具节点",
        type: Node
      }), _dec7 = property({
        tooltip: "金豆动画",
        type: Node
      }), _dec(_class = _dec2(_class = (_class2 = class getPopPrefabCtr extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "itemLayout", _descriptor, this);

          _initializerDefineProperty(this, "itemBgAnim", _descriptor2, this);

          _initializerDefineProperty(this, "itemIdList", _descriptor3, this);

          _initializerDefineProperty(this, "itemNode", _descriptor4, this);

          _initializerDefineProperty(this, "goldAnim", _descriptor5, this);

          this.awardData = [];
        }

        onLoad() {
          this.getComp();
          this.initView();
          this.showGetPropsAnim();
        }

        /** 隐藏遮罩层 */
        hideMaskNode() {
          var maskNode = this.node.parent.getChildByName("Mask");

          if (maskNode) {
            maskNode.active = false;
          }
        }

        getComp() {
          var comp = this.node.getComponent(_crd && DelegateComponent === void 0 ? (_reportPossibleCrUseOfDelegateComponent({
            error: Error()
          }), DelegateComponent) : DelegateComponent);

          if (comp) {
            this.awardData = comp.getParams();
          }

          this.awardData = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).table_verify(this.awardData, true);
        }

        start() {
          this.hideMaskNode();
        }

        initView() {
          this.itemLayout.active = false;
          this.itemNode.active = false;
        }
        /** 显示道具获得动画 */


        showGetPropsAnim() {
          this.itemLayout.active = true;
          this.playItemAnim();
        }

        playItemAnim(isGold) {
          if (isGold === void 0) {
            isGold = false;
          }

          var self = this;
          var goldAni = {
            resConf: (_crd && GameRes === void 0 ? (_reportPossibleCrUseOfGameRes({
              error: Error()
            }), GameRes) : GameRes).Spine_Get_Item,
            aniName: animConfig.get[0],
            parentNode: this.goldAnim,
            trackIndex: null,
            isLoop: false,
            callStartFunc: () => {
              (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
                error: Error()
              }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
                error: Error()
              }), AppEvent) : AppEvent).SYS_PLAY_EFFECT, (_crd && AppSound === void 0 ? (_reportPossibleCrUseOfAppSound({
                error: Error()
              }), AppSound) : AppSound).GetGoodsCoin);
            }
          };
          var getLoopAni = {
            resConf: (_crd && GameRes === void 0 ? (_reportPossibleCrUseOfGameRes({
              error: Error()
            }), GameRes) : GameRes).Spine_Get_Item,
            aniName: animConfig.get[2],
            parentNode: this.itemBgAnim,
            trackIndex: null,
            isLoop: true,
            callStartFunc: () => {
              self.showItem();

              if (isGold == true) {
                (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
                  error: Error()
                }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
                  error: Error()
                }), AppEvent) : AppEvent).SYS_ANI_PLAY, goldAni);
              } else {
                (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
                  error: Error()
                }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
                  error: Error()
                }), AppEvent) : AppEvent).SYS_PLAY_EFFECT, (_crd && AppSound === void 0 ? (_reportPossibleCrUseOfAppSound({
                  error: Error()
                }), AppSound) : AppSound).GetGoods);
              }
            }
          };
          var param1 = {
            resConf: (_crd && GameRes === void 0 ? (_reportPossibleCrUseOfGameRes({
              error: Error()
            }), GameRes) : GameRes).Spine_Get_Item,
            aniName: animConfig.get[1],
            parentNode: this.itemBgAnim,
            trackIndex: null,
            isLoop: false,
            callStartFunc: () => {
              // if (isGold == false) {
              // 	// EventManager.dispatch(AppEvent.SYS_PLAY_EFFECT, AppSound.GetGoods);
              // }else{
              // 	EventManager.dispatch(AppEvent.SYS_PLAY_EFFECT, AppSound.GetGoodsCoin);
              // }
              self.itemBgAnim.removeAllChildren();
              (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
                error: Error()
              }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
                error: Error()
              }), AppEvent) : AppEvent).SYS_ANI_PLAY, getLoopAni);
            },
            callEndFunc: () => {// EventManager.dispatch(AppEvent.SYS_ANI_PLAY, getLoopAni)
              // if (isGold == true) {
              // 	EventManager.dispatch(AppEvent.SYS_ANI_PLAY, goldAni)
              // }
            }
          };
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).SYS_ANI_PLAY, getLoopAni);
        }

        showItem() {
          var _this = this;

          if (!this.node || this.node.isValid == false) {
            return;
          }

          if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).table_isEmpty(this.awardData)) {
            for (var item of this.itemIdList.children) {
              item.destroy();
            }

            return;
          }

          var max = this.awardData.length;
          var childLength = this.itemIdList.children.length;
          var childs = this.itemIdList.children;

          if (max < childLength) {
            max = childLength;
          }

          for (var i = max - 1; i >= 0; i--) {
            var nodeItem = childs[i];

            if (nodeItem && !this.awardData[i]) {
              nodeItem.destroy();
            }
          }

          var _loop = function _loop(j) {
            var data = _this.awardData[j];
            var nodeItem = childs[j];

            if (!nodeItem) {
              nodeItem = instantiate(_this.itemNode);

              _this.itemIdList.addChild(nodeItem);
            }

            var type = data['type'];
            var num = data['num'];
            var name = data['name'];
            var str = "";
            var numStr = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).string_moneyToShortNumber(num, true);

            if (!(_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).string_isEmpty(name)) {
              str = name + "X" + numStr;
            } else {
              str = String(num);
            }

            var itemName = nodeItem.getChildByName('numlabel').getComponent(Label);
            var itemCoin = nodeItem.getChildByName('img_icon').getComponent(Sprite);
            itemName.string = str;
            itemCoin.node.active = false;

            _this.getPreLoaderRemoteRes(data['icon'], '.png', imageAsset => {
              if (!imageAsset) {
                //资源可能还在加载中
                return;
              }

              if (!itemCoin.node || itemCoin.node.isValid == false) {
                return;
              }

              var spriteFrame = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                error: Error()
              }), Utils) : Utils).image_ImageAssetToSpriteFrame(imageAsset);

              if (spriteFrame) {
                itemCoin.spriteFrame = spriteFrame;
                itemCoin.node.active = true;
              }
            });

            nodeItem.active = true;
          };

          for (var j = 0; j < this.awardData.length; j++) {
            _loop(j);
          }

          this.itemIdList.getComponent(Layout).updateLayout();
          this.itemIdList.active = true;
        } //播放角色动画 暂时无
        // playRoleAnim(skin, roleID) {
        // 	this.roleBgAnim.removeAllChildren();
        // 	let param = {
        // 		resConf: GameRes.Spine_Get_Role,
        // 		aniName: animConfig.GetRoles[1],
        // 		parentNode: this.roleBgAnim,
        // 		trackIndex: null,
        // 		isLoop: true,
        // 		skin: skin,
        // 	}
        // 	EventManager.dispatch(AppEvent.SYS_ANI_PLAY, param)
        // 	let param2 = {
        // 		resConf: GCache.GoodsData.getRoleAnimConfigById(roleID).path,
        // 		aniName: GCache.GoodsData.getRoleAnimConfigById(roleID).standby[2],
        // 		parentNode: this.roleAnim,
        // 		trackIndex: null,
        // 		isLoop: true,
        // 	}
        // 	EventManager.dispatch(AppEvent.SYS_ANI_PLAY, param2)
        // 	let param3 = {
        // 		resConf: GameRes.Spine_Get_Close,
        // 		aniName: animConfig.light[0],
        // 		parentNode: this.lightAnim,
        // 		trackIndex: null,
        // 		isLoop: false,
        // 		skin: skin,
        // 	}
        // 	EventManager.dispatch(AppEvent.SYS_ANI_PLAY, param3)
        // }


        onCloseClick() {
          console.log("点击了");
          this.node.destroy();
        } //销毁


        onDestroy() {}

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "itemLayout", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "itemBgAnim", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "itemIdList", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "itemNode", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "goldAnim", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=2e7866bca968dfde8e2650688e5a43a4a2db49d9.js.map