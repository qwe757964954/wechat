System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14", "__unresolved_15", "__unresolved_16", "__unresolved_17", "__unresolved_18"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Color, Label, Layout, Node, Prefab, ScrollView, Sprite, SpriteAtlas, SpriteFrame, UITransform, _decorator, instantiate, GCache, AppEvent, AppSound, APPState, GConstants, GameRes, GameTxt, ReportConfig, UIID, Utils, ButtonSimple, DelegateComponent, resLoader, EventManager, BaseComponent, Platform, commonBtnPrefabCtr, shopGoodsPrefabCtr, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _crd, ccclass, property, menu, mallPrefabCtr;

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

  function _reportPossibleCrUseOfAPPState(extras) {
    _reporterNs.report("APPState", "../../../config/GameConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGConstants(extras) {
    _reporterNs.report("GConstants", "../../../config/GameConstant", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameRes(extras) {
    _reporterNs.report("GameRes", "../../../config/GameRes", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameTxt(extras) {
    _reporterNs.report("GameTxt", "../../../config/GameTxt", _context.meta, extras);
  }

  function _reportPossibleCrUseOfReportConfig(extras) {
    _reporterNs.report("ReportConfig", "../../../config/ReportConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIID(extras) {
    _reporterNs.report("UIID", "../../../config/UIConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfinf_SpineAniCreate(extras) {
    _reporterNs.report("inf_SpineAniCreate", "../../../framework/InterfaceDefines", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUtils(extras) {
    _reporterNs.report("Utils", "../../../framework/Utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfButtonSimple(extras) {
    _reporterNs.report("ButtonSimple", "../../../framework/gui/button/ButtonSimple", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDelegateComponent(extras) {
    _reporterNs.report("DelegateComponent", "../../../framework/layer/DelegateComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfresLoader(extras) {
    _reporterNs.report("resLoader", "../../../framework/loader/ResLoader", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventManager(extras) {
    _reporterNs.report("EventManager", "../../../framework/manager/EventManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseComponent(extras) {
    _reporterNs.report("BaseComponent", "../../../framework/vc/BaseComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlatform(extras) {
    _reporterNs.report("Platform", "../../../platform/Platform", _context.meta, extras);
  }

  function _reportPossibleCrUseOfcommonBtnPrefabCtr(extras) {
    _reporterNs.report("commonBtnPrefabCtr", "./commonBtnPrefabCtr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfshopGoodsPrefabCtr(extras) {
    _reporterNs.report("shopGoodsPrefabCtr", "./shopGoodsPrefabCtr", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Color = _cc.Color;
      Label = _cc.Label;
      Layout = _cc.Layout;
      Node = _cc.Node;
      Prefab = _cc.Prefab;
      ScrollView = _cc.ScrollView;
      Sprite = _cc.Sprite;
      SpriteAtlas = _cc.SpriteAtlas;
      SpriteFrame = _cc.SpriteFrame;
      UITransform = _cc.UITransform;
      _decorator = _cc._decorator;
      instantiate = _cc.instantiate;
    }, function (_unresolved_2) {
      GCache = _unresolved_2.GCache;
    }, function (_unresolved_3) {
      AppEvent = _unresolved_3.AppEvent;
    }, function (_unresolved_4) {
      AppSound = _unresolved_4.AppSound;
    }, function (_unresolved_5) {
      APPState = _unresolved_5.APPState;
    }, function (_unresolved_6) {
      GConstants = _unresolved_6.GConstants;
    }, function (_unresolved_7) {
      GameRes = _unresolved_7.GameRes;
    }, function (_unresolved_8) {
      GameTxt = _unresolved_8.GameTxt;
    }, function (_unresolved_9) {
      ReportConfig = _unresolved_9.ReportConfig;
    }, function (_unresolved_10) {
      UIID = _unresolved_10.UIID;
    }, function (_unresolved_11) {
      Utils = _unresolved_11.Utils;
    }, function (_unresolved_12) {
      ButtonSimple = _unresolved_12.default;
    }, function (_unresolved_13) {
      DelegateComponent = _unresolved_13.DelegateComponent;
    }, function (_unresolved_14) {
      resLoader = _unresolved_14.resLoader;
    }, function (_unresolved_15) {
      EventManager = _unresolved_15.EventManager;
    }, function (_unresolved_16) {
      BaseComponent = _unresolved_16.BaseComponent;
    }, function (_unresolved_17) {
      Platform = _unresolved_17.Platform;
    }, function (_unresolved_18) {
      commonBtnPrefabCtr = _unresolved_18.commonBtnPrefabCtr;
    }, function (_unresolved_19) {
      shopGoodsPrefabCtr = _unresolved_19.shopGoodsPrefabCtr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "30cd5vDBlBE/I1KmRVOKwi5", "mallPrefabCtr", undefined);

      __checkObsolete__(['Color', 'EventTouch', 'Label', 'Layout', 'Node', 'Prefab', 'ScrollView', 'Sprite', 'SpriteAtlas', 'SpriteFrame', 'UITransform', '_decorator', 'instantiate']);

      ({
        ccclass,
        property,
        menu
      } = _decorator);
      /**
       * Name = mallPrefabCtr
       * URL = db://assets/package/hall/scripts/mallPrefabCtr.ts
       * Time = Tue Sep 13 2022 15:54:48 GMT+0800 (中国标准时间)
       * Author = Tomoe
       * Life: onLoad-->onEnable->start->update->lateUpdate->onDisable->onDestroy
       * 商城模块
       */

      _export("mallPrefabCtr", mallPrefabCtr = (_dec = ccclass('mallPrefabCtr'), _dec2 = menu('prefab/hall/mallPrefabCtr'), _dec3 = property({
        tooltip: "云-背景动画根节点",
        type: Node
      }), _dec4 = property({
        tooltip: "树-背景动画根节点",
        type: Node
      }), _dec5 = property({
        tooltip: "帘布-背景动画根节点",
        type: Node
      }), _dec6 = property({
        tooltip: "切换动画根节点",
        type: Node
      }), _dec7 = property({
        tooltip: "大标签滚动容器",
        type: ScrollView
      }), _dec8 = property({
        tooltip: "大标签父节点",
        type: Node
      }), _dec9 = property({
        tooltip: "大标签节点",
        type: Node
      }), _dec10 = property({
        tooltip: "银币根节点",
        type: Node
      }), _dec11 = property({
        tooltip: "银币页面节点",
        type: Node
      }), _dec12 = property({
        tooltip: "道具根节点",
        type: Node
      }), _dec13 = property({
        tooltip: "道具根节点",
        type: Node
      }), _dec14 = property({
        tooltip: "克隆的商品节点",
        type: Node
      }), _dec15 = property({
        tooltip: "钻石Icon图片",
        type: SpriteFrame
      }), _dec16 = property({
        tooltip: "金豆Icon图片",
        type: SpriteFrame
      }), _dec17 = property({
        tooltip: "二级标签和吊坠父节点",
        type: Node
      }), _dec18 = property({
        tooltip: "二级标签父节点",
        type: Node
      }), _dec19 = property({
        tooltip: "克隆二级标签节点",
        type: Node
      }), _dec(_class = _dec2(_class = (_class2 = class mallPrefabCtr extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "spineYun", _descriptor, this);

          _initializerDefineProperty(this, "spineShu", _descriptor2, this);

          _initializerDefineProperty(this, "spineLianBu", _descriptor3, this);

          _initializerDefineProperty(this, "spineQieHuan", _descriptor4, this);

          _initializerDefineProperty(this, "bigTabScrollView", _descriptor5, this);

          _initializerDefineProperty(this, "bigTabLayer", _descriptor6, this);

          _initializerDefineProperty(this, "bigTab", _descriptor7, this);

          _initializerDefineProperty(this, "silverCoinLayer", _descriptor8, this);

          _initializerDefineProperty(this, "silverView", _descriptor9, this);

          _initializerDefineProperty(this, "propLayer", _descriptor10, this);

          _initializerDefineProperty(this, "propView", _descriptor11, this);

          _initializerDefineProperty(this, "cloneItemNode", _descriptor12, this);

          _initializerDefineProperty(this, "diamondIcon", _descriptor13, this);

          _initializerDefineProperty(this, "goldIcon", _descriptor14, this);

          _initializerDefineProperty(this, "smallTabRoot", _descriptor15, this);

          _initializerDefineProperty(this, "smallTabLayer", _descriptor16, this);

          _initializerDefineProperty(this, "cloneSmallTab", _descriptor17, this);

          this.mallViewLayer = {};
          this.currentScene = null;
          this.currowChooseSmallTagCid = null;
          this.currowChooseGoodsID = null;
          this.payScene = null;
          this._FowardPayScene = null;
          this._isOnload = false;
          this._clickGoodItemCallBack = null;
          this._isStartCountDown = true;
          this._currowShareData = null;
          this._bigTabList = [{
            scene: (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
              error: Error()
            }), GConstants) : GConstants).ShopBigTabType.SILVER_COIN,
            normal: "mall/tab_sliver_normal",
            choose: "mall/tab_silver_pressI"
          } // { scene: GConstants.ShopBigTabType.PROPS, normal: "mall/tab_prop_normal", choose: "mall/tab_prop_pressI" },
          ];
        }

        /**初始化添加事件绑定 */
        onInitModuleEvent() {
          /**通知:商品有更新 */
          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NOTIFY_GOODS_CHANGE, this.refreshViewByData);
          /**通知:商品场景 */

          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).ACTIVITY_SHOPLIST_UPDATE, this.refreshViewByScene); //前后台事件

          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).SYS_SHOW_OR_HIDE, this.processApplicationActions);
        }

        onLoad() {
          this.mallViewLayer = {
            [(_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
              error: Error()
            }), GConstants) : GConstants).ShopBigTabType.SILVER_COIN]: this.silverView,
            [(_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
              error: Error()
            }), GConstants) : GConstants).ShopBigTabType.PROPS]: this.propView // [GConstants.ShopBigTabType.GOLD]: this.goldView, //下一版本迭代

          };
          this.getComp();
          this.initView(true);
        }

        start() {
          this._isOnload = true;
          this._clickGoodItemCallBack = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).handler(this, this.onClickGoodsItem);
          this.initView(); // 根据BigTab请求拉取对应商城配置

          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_REQ_GOODS_INFO, {
            scene: (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
              error: Error()
            }), GConstants) : GConstants).GoodsListID.MarketSilver
          }); // EventManager.dispatch(AppEvent.NET_REQ_GOODS_INFO, { scene: GConstants.GoodsListID.MarketProp });
        }

        getComp() {
          var comp = this.node.getComponent(_crd && DelegateComponent === void 0 ? (_reportPossibleCrUseOfDelegateComponent({
            error: Error()
          }), DelegateComponent) : DelegateComponent);

          if (comp) {
            var param = comp.getParams();
            param = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).table_verify(param); //获取上一个付费场景

            this._FowardPayScene = param["pay_scene"] || null;
            this.currentScene = param["id"] != null ? param["id"] : (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
              error: Error()
            }), GConstants) : GConstants).ShopBigTabType.SILVER_COIN;
            this.updatePayScene();
          }
        }

        getShopData(type) {
          if (type === void 0) {
            type = null;
          }

          var res = (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
            error: Error()
          }), GCache) : GCache).ShopInfo.getDataList(type);
          return (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).clone(res);
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


        processApplicationActions(event, state) {
          if (this._isStartCountDown != true) {
            return;
          } //先后台再前台


          this.print("[\u5546\u57CE\u524D\u540E\u53F0\u4E8B\u4EF6]:" + (state == (_crd && APPState === void 0 ? (_reportPossibleCrUseOfAPPState({
            error: Error()
          }), APPState) : APPState).SHOW && "前台" || "后台"));

          if (state == (_crd && APPState === void 0 ? (_reportPossibleCrUseOfAPPState({
            error: Error()
          }), APPState) : APPState).SHOW) {
            this._isStartCountDown = false;
            var isCanShare = (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
              error: Error()
            }), GCache) : GCache).ShareInfo.checkCanShareToFriend();
            console.log('gid', isCanShare, this._currowShareData);

            if (isCanShare == true && this._currowShareData) {
              (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
                error: Error()
              }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
                error: Error()
              }), AppEvent) : AppEvent).NET_REQ_SHARE_AWARD, this._currowShareData, (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
                error: Error()
              }), GConstants) : GConstants).ReqUrl.shareType.shop, true);
            } else {
              // 判断有gid是分享再提示
              if (this._currowShareData) {
                (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
                  error: Error()
                }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
                  error: Error()
                }), AppEvent) : AppEvent).SYS_TOAST_TIP, {
                  content: (_crd && GameTxt === void 0 ? (_reportPossibleCrUseOfGameTxt({
                    error: Error()
                  }), GameTxt) : GameTxt).shareFailMsg
                });
              }
            }
          } else if (state == (_crd && APPState === void 0 ? (_reportPossibleCrUseOfAPPState({
            error: Error()
          }), APPState) : APPState).HIDE) {
            //后台事件开始计时
            (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
              error: Error()
            }), GCache) : GCache).ShareInfo.recodeShareFriendStart();
          }
        } //初始化界面


        initView(isOnload) {
          if (isOnload === void 0) {
            isOnload = false;
          }

          // 初始化界面展示次数
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).REPORT_CLIENT_CLICK, {
            eventID: (_crd && ReportConfig === void 0 ? (_reportPossibleCrUseOfReportConfig({
              error: Error()
            }), ReportConfig) : ReportConfig).mall_4
          });

          if (isOnload) {
            this.cloneItemNode.active = false;

            for (var key in this.mallViewLayer) {
              var pageNode = this.mallViewLayer[key];
              pageNode.active = false;
            }

            this.smallTabRoot.active = false;
            var self = this;
            this.getPreLoaderRes((_crd && GameRes === void 0 ? (_reportPossibleCrUseOfGameRes({
              error: Error()
            }), GameRes) : GameRes).Prefab_HallTopUI.bundle, (_crd && GameRes === void 0 ? (_reportPossibleCrUseOfGameRes({
              error: Error()
            }), GameRes) : GameRes).Prefab_HallTopUI.path, Prefab, res => {
              var comp = res.getComponent(_crd && commonBtnPrefabCtr === void 0 ? (_reportPossibleCrUseOfcommonBtnPrefabCtr({
                error: Error()
              }), commonBtnPrefabCtr) : commonBtnPrefabCtr);
              comp.isShowShop = false;

              if (self.node && self.node.isValid == true) {
                self.node.addChild(res);
              }
            });
          } else {
            this.updateBigTab();
            this.updateView();
          }
        }
        /**设置远端图片 */


        setSpriteFrameByRemote(node, path) {
          if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).string_isHttp(path)) {
            var self = this;
            (_crd && resLoader === void 0 ? (_reportPossibleCrUseOfresLoader({
              error: Error()
            }), resLoader) : resLoader).loadRemote(path, {
              ext: '.jpg'
            }, (err, imageAsset) => {
              if (!imageAsset) {
                //资源可能还在加载中
                return;
              }

              if (!self.node || self.node.isValid == false) {
                return;
              }

              var spriteFrame = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                error: Error()
              }), Utils) : Utils).image_ImageAssetToSpriteFrame(imageAsset);

              if (spriteFrame) {
                node.getComponent(Sprite).spriteFrame = spriteFrame;
                node.active = true;
              }
            });
          }
        } //点击标签切换亮布


        showChangeLightBuAni() {
          var self = this;

          var changeAni = function changeAni(aniName, isLoop) {
            if (isLoop === void 0) {
              isLoop = false;
            }

            var aniConf = {
              parentNode: self.spineQieHuan,
              resConf: (_crd && GameRes === void 0 ? (_reportPossibleCrUseOfGameRes({
                error: Error()
              }), GameRes) : GameRes).Spine_Mall_Qiehuan,
              aniName: aniName,
              trackIndex: 0,
              isLoop: isLoop,
              callEndFunc: () => {
                if (aniName == "qiehuan_lianbu") {
                  changeAni("loop_lianbu", true);
                }
              }
            };
            self.spineQieHuan.removeAllChildren(); // EventManager.dispatch(AppEvent.SYS_ANI_PLAY, aniConf);
          };

          changeAni("qiehuan_lianbu", false);
        }
        /**更新大标签 */


        updateBigTab() {
          var _this = this;

          var childLength = this.bigTabLayer.children.length;
          var max = this._bigTabList.length;

          if (max < childLength) {
            max = childLength;
          }

          for (var i = max - 1; i >= 0; i--) {
            var nodeItem = this.bigTabLayer.children[i];

            if (nodeItem && !this._bigTabList[i]) {
              nodeItem.destroy();
            }
          }

          if (this.currentScene == null) {
            this.currentScene = (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
              error: Error()
            }), GConstants) : GConstants).ShopBigTabType.SILVER_COIN;
          }

          var bigTagData = (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
            error: Error()
          }), GCache) : GCache).ShopInfo.shopTab;

          var _loop = function _loop(_i) {
            var nodeItem = _this.bigTabLayer.children[_i];

            if (!nodeItem) {
              nodeItem = instantiate(_this.bigTab);

              _this.bigTabLayer.addChild(nodeItem);

              _this.onTouch(nodeItem);

              var nodeNormal = nodeItem.getChildByName("normal");
              var nodeChoose = nodeItem.getChildByName("choose");
              nodeItem["Normal"] = nodeNormal;
              nodeItem["Choose"] = nodeChoose;
            }

            nodeItem.active = true;
            var self = _this;

            if (nodeItem['pageID'] != _this._bigTabList[_i].scene) {
              _this.getPreLoaderRes((_crd && GameRes === void 0 ? (_reportPossibleCrUseOfGameRes({
                error: Error()
              }), GameRes) : GameRes).Atlas_Mall.bundle, (_crd && GameRes === void 0 ? (_reportPossibleCrUseOfGameRes({
                error: Error()
              }), GameRes) : GameRes).Atlas_Mall.path, SpriteAtlas, atlas => {
                var normal = atlas.getSpriteFrame(self._bigTabList[_i].normal);
                var choose = atlas.getSpriteFrame(self._bigTabList[_i].choose);

                if (normal && choose) {
                  nodeItem["Normal"].getComponent(Sprite).spriteFrame = normal;
                  nodeItem["Choose"].getComponent(Sprite).spriteFrame = choose;
                }
              });
            }

            if (bigTagData[_this._bigTabList[_i].scene]) {
              nodeItem['pageID'] = _this._bigTabList[_i].scene;
            } else {
              nodeItem['pageID'] = null;
            }

            if (_this.currentScene == nodeItem['pageID']) {
              nodeItem["Normal"].active = false;
              nodeItem["Choose"].active = true;
            } else {
              nodeItem["Normal"].active = true;
              nodeItem["Choose"].active = false;
            }
          };

          for (var _i = 0; _i < this._bigTabList.length; _i++) {
            _loop(_i);
          }

          var self = this;
          var layout = self.bigTabLayer.getComponent(Layout);
          layout.updateLayout();
          this.addSchedulerOnce(0, () => {
            if (self.bigTabLayer.getComponent(UITransform).width > self.bigTabScrollView.node.getComponent(UITransform).width) {
              self.bigTabScrollView.enabled = true;
              self.bigTabScrollView.scrollToLeft(0.01, false);
            } else {
              self.bigTabScrollView.enabled = false;
            }
          });
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


        onClickBigTab(event) {
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
              case (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
                error: Error()
              }), GConstants) : GConstants).ShopBigTabType.SILVER_COIN:
                (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
                  error: Error()
                }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
                  error: Error()
                }), AppEvent) : AppEvent).REPORT_CLIENT_CLICK, {
                  eventID: (_crd && ReportConfig === void 0 ? (_reportPossibleCrUseOfReportConfig({
                    error: Error()
                  }), ReportConfig) : ReportConfig).mall_1
                });
                break;

              case (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
                error: Error()
              }), GConstants) : GConstants).ShopBigTabType.PROPS:
                (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
                  error: Error()
                }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
                  error: Error()
                }), AppEvent) : AppEvent).REPORT_CLIENT_CLICK, {
                  eventID: (_crd && ReportConfig === void 0 ? (_reportPossibleCrUseOfReportConfig({
                    error: Error()
                  }), ReportConfig) : ReportConfig).mall_2
                });
                break;
            }
          }
        }
        /**刷新商城页面 */


        updateView() {
          if (this.currentScene == null) {
            this.currentScene = (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
              error: Error()
            }), GConstants) : GConstants).ShopBigTabType.SILVER_COIN;
            this.updatePayScene();
          }

          for (var key in this.mallViewLayer) {
            var pageNode = this.mallViewLayer[key];

            if (key == String(this.currentScene)) {
              pageNode.active = true;
            } else {
              pageNode.active = false;
            }
          }

          this.updateSmallTag();
          this.updateCenterLayout();
        } //刷新小标签显示


        updateSmallTag() {
          var smallTagData = (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
            error: Error()
          }), GCache) : GCache).ShopInfo.getSubTbs(this.currentScene);

          if (!smallTagData) {
            this.smallTabRoot.active = false;
            return;
          }

          var childLength = this.smallTabLayer.children.length;
          var max = smallTagData.length;

          if (max < childLength) {
            max = childLength;
          }

          for (var i = max - 1; i >= 0; i--) {
            var nodeItem = this.smallTabLayer.children[i];

            if (nodeItem && !smallTagData[i]) {
              nodeItem.destroy();
            }
          }

          var allSmallNode = [];

          for (var _i2 = 0; _i2 < smallTagData.length; _i2++) {
            var _nodeItem = this.smallTabLayer.children[_i2];

            if (!_nodeItem) {
              _nodeItem = instantiate(this.cloneSmallTab);
              this.smallTabLayer.addChild(_nodeItem);
            }

            _nodeItem["lantern_light_bg"] = _nodeItem.getChildByName("lantern_light_bg");
            _nodeItem["label"] = _nodeItem.getChildByName("label");

            if (!_nodeItem["aniNode"]) {
              _nodeItem["aniNode"] = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                error: Error()
              }), Utils) : Utils).create_2DNode("aniNode");

              _nodeItem["lantern_light_bg"].addChild(_nodeItem["aniNode"]);

              var roleAni = {
                parentNode: _nodeItem["aniNode"],
                resConf: (_crd && GameRes === void 0 ? (_reportPossibleCrUseOfGameRes({
                  error: Error()
                }), GameRes) : GameRes).Spine_DengLongAni,
                aniName: "XC_denglong_loop",
                trackIndex: 0,
                isLoop: true
              }; // EventManager.dispatch(AppEvent.SYS_ANI_PLAY, roleAni);
            }

            _nodeItem["label"].getComponent(Label).string = smallTagData[_i2]["name"];
            _nodeItem["cid"] = smallTagData[_i2]["cid"];
            allSmallNode.push(_nodeItem);
          }

          if (this.currowChooseSmallTagCid == null) {
            if (allSmallNode.length > 0) {
              this.currowChooseSmallTagCid = allSmallNode[0]["cid"];
            }
          }

          if (this.currowChooseSmallTagCid != null && allSmallNode.length > 0) {
            for (var _i3 = 0; _i3 < allSmallNode.length; _i3++) {
              var buttonSimple = allSmallNode[_i3].getComponent(_crd && ButtonSimple === void 0 ? (_reportPossibleCrUseOfButtonSimple({
                error: Error()
              }), ButtonSimple) : ButtonSimple);

              if (this.currowChooseSmallTagCid == allSmallNode[_i3]["cid"]) {
                allSmallNode[_i3]["lantern_light_bg"].active = true;
                allSmallNode[_i3]["label"].getComponent(Label).color = new Color(163, 139, 104, 255);
                buttonSimple.Interactable = false;
              } else {
                allSmallNode[_i3]["lantern_light_bg"].active = false;
                buttonSimple.Interactable = true;
                allSmallNode[_i3]["label"].getComponent(Label).color = new Color(78, 70, 58, 255);
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
            case (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
              error: Error()
            }), GConstants) : GConstants).ShopBigTabType.SILVER_COIN:
              this.showSilverView();
              break; // case GConstants.ShopBigTabType.PROPS:
              //     this.showPropView();

              break;

            default:
              break;
          }
        } //更新支付场景ID


        updatePayScene() {
          console.log('更新了支付场景,updatePayScene');

          switch (this.currentScene) {
            case (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
              error: Error()
            }), GConstants) : GConstants).ShopBigTabType.SILVER_COIN:
              this.payScene = (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
                error: Error()
              }), GConstants) : GConstants).PayModel.shop_silver_coin;
              break;

            case (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
              error: Error()
            }), GConstants) : GConstants).ShopBigTabType.PROPS:
              this.payScene = (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
                error: Error()
              }), GConstants) : GConstants).PayModel.shop_props;
              break;

            default:
              this.payScene = (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
                error: Error()
              }), GConstants) : GConstants).PayModel.shop;
              break;
          }
        }
        /**显示银币商品 */


        showSilverView() {
          var childLength = this.silverCoinLayer.children.length;
          var goodsData = this.getShopData(this.currowChooseSmallTagCid);
          goodsData = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).table_verify(goodsData, true);
          console.log('当前商品类别==》》', this.currowChooseSmallTagCid);
          goodsData = goodsData.sort((a, b) => {
            return Number(b.item_order) - Number(a.item_order);
          });
          console.log('当前渲染的商品', goodsData);
          var max = goodsData.length;

          if (max < childLength) {
            max = childLength;
          }

          for (var i = max - 1; i >= 0; i--) {
            var nodeItem = this.silverCoinLayer.children[i];

            if (nodeItem && !goodsData[i]) {
              nodeItem.destroy();
            }
          }

          for (var _i4 = 0; _i4 < goodsData.length; _i4++) {
            var _nodeItem2 = this.silverCoinLayer.children[_i4];

            if (!_nodeItem2) {
              _nodeItem2 = instantiate(this.cloneItemNode);
              this.silverCoinLayer.addChild(_nodeItem2);
            }

            var comp = _nodeItem2.getComponent(_crd && shopGoodsPrefabCtr === void 0 ? (_reportPossibleCrUseOfshopGoodsPrefabCtr({
              error: Error()
            }), shopGoodsPrefabCtr) : shopGoodsPrefabCtr);

            comp.goodsData = goodsData[_i4]; //赋值渲染数据

            comp.clickCallback = this._clickGoodItemCallBack;
            _nodeItem2.active = true;
          }
        } // /**显示道具商品 */


        showPropView() {
          var childLength = this.propLayer.children.length;
          var goodsData = this.getShopData(this.currowChooseSmallTagCid);
          goodsData = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).table_verify(goodsData, true);
          var max = goodsData.length;

          if (max < childLength) {
            max = childLength;
          }

          for (var i = max - 1; i >= 0; i--) {
            var nodeItem = this.propLayer.children[i];

            if (nodeItem && !goodsData[i]) {
              nodeItem.destroy();
            }
          }

          for (var _i5 = 0; _i5 < goodsData.length; _i5++) {
            var _nodeItem3 = this.propLayer.children[_i5];

            if (!_nodeItem3) {
              _nodeItem3 = instantiate(this.cloneItemNode);
              this.propLayer.addChild(_nodeItem3);
            }

            var comp = _nodeItem3.getComponent(_crd && shopGoodsPrefabCtr === void 0 ? (_reportPossibleCrUseOfshopGoodsPrefabCtr({
              error: Error()
            }), shopGoodsPrefabCtr) : shopGoodsPrefabCtr);

            comp.goodsData = goodsData[_i5];
            ;
            comp.clickCallback = this._clickGoodItemCallBack;
            _nodeItem3.active = true;
          }
        } // /**显示金条商品 下一期迭代 */


        showGoldView() {// let childLength = this.goldLayer.children.length;
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


        onClickPageView(event) {
          //EventManager.dispatch(AppEvent.SYS_PLAY_EFFECT, AppSound.CommClick);
          var goodData = event.target["GoodData"];

          if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).table_isEmpty(goodData)) {
            return;
          }

          console.log("点击了页签==>", event.target["GoodData"]);
          console.log("即将跳转==>", goodData["item_url"]);

          if (goodData["item_url"] != null) {//EventManager.dispatch(AppEvent.VIEW_UI_JUMP, { url: goodData["item_url"] })
          }
        }
        /** 商品点击*/


        onClickGoodsItem(event) {
          var nodeGoodItem = event.target.parent;
          var nodeGoodItemComp = nodeGoodItem.getComponent(_crd && shopGoodsPrefabCtr === void 0 ? (_reportPossibleCrUseOfshopGoodsPrefabCtr({
            error: Error()
          }), shopGoodsPrefabCtr) : shopGoodsPrefabCtr);
          nodeGoodItemComp.isSelect = true;
          var parentNode = nodeGoodItem.parent;

          for (var node of parentNode.children) {
            if (node != nodeGoodItem) {
              node.getComponent(_crd && shopGoodsPrefabCtr === void 0 ? (_reportPossibleCrUseOfshopGoodsPrefabCtr({
                error: Error()
              }), shopGoodsPrefabCtr) : shopGoodsPrefabCtr).isSelect = false;
            }
          }

          var goodsID = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).table_verify(nodeGoodItemComp.goodsData)["gid"];
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).REPORT_CLIENT_CLICK, {
            eventID: (_crd && ReportConfig === void 0 ? (_reportPossibleCrUseOfReportConfig({
              error: Error()
            }), ReportConfig) : ReportConfig).mall_3,
            body: {
              gsubname: goodsID
            }
          });

          if (!goodsID) {
            return;
          }

          this.currowChooseGoodsID = goodsID; //以最新的缓存数据为准再次查找数据

          var goodsData = (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
            error: Error()
          }), GCache) : GCache).ShopInfo.getShopDataByGoodsID(this.currowChooseGoodsID);
          console.log('普通商品点击===>，在缓存里查找对应的数据', goodsData);
          this.payProcess(goodsData);
        }
        /**先走一遍支付流程 */


        payProcess(goodsItem) {
          var payData = (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
            error: Error()
          }), GCache) : GCache).ShopInfo.getPriceByGoodsSceneId(this.currentScene, this.currowChooseGoodsID);
          console.log('当前要支付的商品', goodsItem, '缓存查到的支付的信息', payData); // 如果超过最大购买数量，直接弹出提示

          if (Number(goodsItem.limit_buy_way) == 1 && Number(goodsItem.bought_num) > 0 && Number(goodsItem.bought_num) >= Number(goodsItem.limit_buy_num)) {
            return (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
              error: Error()
            }), AppEvent) : AppEvent).SYS_TOAST_TIP, {
              content: "已超过最大购买上限"
            });
          }

          var self = this;

          switch (goodsItem.currency) {
            case (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
              error: Error()
            }), GConstants) : GConstants).PayType.RMB:
              //rmb 1
              //获取人民币类型
              var param = {
                title: (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
                  error: Error()
                }), GConstants) : GConstants).DialogTitle.Goods_content,
                itemData: goodsItem,
                isConfirm: goodsItem.specialDesc ? false : true,
                //没有加赠 值为 'false  
                callFunc: pData => {
                  //模拟支付
                  self.__paySure(pData, {
                    payID: (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
                      error: Error()
                    }), GConstants) : GConstants).PayType.RMB,
                    price: goodsItem.price
                  });
                }
              };
              (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
                error: Error()
              }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
                error: Error()
              }), AppEvent) : AppEvent).VIEW_UI_OPEN, (_crd && UIID === void 0 ? (_reportPossibleCrUseOfUIID({
                error: Error()
              }), UIID) : UIID).BuyDialogPrefab, param);
              break;

            case (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
              error: Error()
            }), GConstants) : GConstants).PayType.SILVER:
              //银币支付 2
              //银币购买道具
              if (this.currentScene == (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
                error: Error()
              }), GConstants) : GConstants).ShopBigTabType.PROPS) {
                //考虑配置多种支付
                return this.willShowBuyPropDialog(goodsItem, {
                  payID: payData['payID'],
                  price: payData['price']
                });
              }

              break;

            case (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
              error: Error()
            }), GConstants) : GConstants).PayType.TICKET:
              //兑换券支付
              break;

            case (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
              error: Error()
            }), GConstants) : GConstants).PayType.SHARE:
              // 判断是否可以分享 返回分享的参数和距离下次分享的时间
              var _allowShareMsg = (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
                error: Error()
              }), GCache) : GCache).ShareInfo.shareTimeAllowed(goodsItem['gid'], (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
                error: Error()
              }), GConstants) : GConstants).ShareSceneConf.shopshare);

              if (_allowShareMsg['allowShare']) {
                (_crd && Platform === void 0 ? (_reportPossibleCrUseOfPlatform({
                  error: Error()
                }), Platform) : Platform).shareWXFriends(_allowShareMsg['shareParams'], (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                  error: Error()
                }), Utils) : Utils).handler(self, self.__doCallBackShare), _allowShareMsg['gid']);
              } else {
                // 请勿在短时间内重复分享
                (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
                  error: Error()
                }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
                  error: Error()
                }), AppEvent) : AppEvent).SYS_TOAST_TIP, {
                  content: "\u8BF7\u5728" + _allowShareMsg['nextSharetime'] + "\u79D2\u540E\u518D\u6B21\u5206\u4EAB"
                });
              }

              break;

            case (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
              error: Error()
            }), GConstants) : GConstants).PayType.VIDEO:
              //看视频
              if ((_crd && Platform === void 0 ? (_reportPossibleCrUseOfPlatform({
                error: Error()
              }), Platform) : Platform).isWXPlatform()) {
                this.__doCallBackWatchADs(true, goodsItem['gid']);

                (_crd && Platform === void 0 ? (_reportPossibleCrUseOfPlatform({
                  error: Error()
                }), Platform) : Platform).playerAdVideo((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                  error: Error()
                }), Utils) : Utils).handler(this, this.__doCallBackWatchADs), goodsItem['gid']);
              } else {
                this.__doCallBackWatchADs(true, goodsItem['gid']);
              }

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
            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
              error: Error()
            }), AppEvent) : AppEvent).SYS_TOAST_TIP, {
              content: "err:看广告失败"
            });
            return;
          }

          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_REQ_ADS_AWARD, goodsID, (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
            error: Error()
          }), GConstants) : GConstants).ReqUrl.shareType.shop, true);
        }
        /** 即将显示购买道具弹窗 */


        willShowBuyPropDialog(goodData, payData) {
          if ((_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
            error: Error()
          }), GCache) : GCache).User.getUserMoneyByID(0) < payData.price) {
            //银币不够且只有一个方式 跳转商城购买 商城内不用跳转
            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
              error: Error()
            }), AppEvent) : AppEvent).SYS_TOAST_TIP, {
              content: "银币不足"
            });
          } else {
            var param = {
              goodsId: goodData["gid"],
              scene: (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
                error: Error()
              }), GConstants) : GConstants).PayModel.shop_props
            };
            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
              error: Error()
            }), AppEvent) : AppEvent).VIEW_UI_OPEN, (_crd && UIID === void 0 ? (_reportPossibleCrUseOfUIID({
              error: Error()
            }), UIID) : UIID).BuyPropDialogPrefab, param);
          }
        }
        /**支付确认 */


        __paySure(data, payData) {
          if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).table_isEmpty(data) || (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).table_isEmpty(payData)) {
            return;
          }

          switch (payData.payID) {
            case (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
              error: Error()
            }), GConstants) : GConstants).PayType.SILVER:
              // EventManager.dispatch(AppEvent.SYS_TOAST_TIP, { content: "调接口去开始兑换" });
              break;

            case (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
              error: Error()
            }), GConstants) : GConstants).PayType.RMB:
              (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
                error: Error()
              }), GCache) : GCache).CurrowPaySceneType = (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
                error: Error()
              }), GConstants) : GConstants).UBPaySceneConfig.kHallMarketGold;
              (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
                error: Error()
              }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
                error: Error()
              }), AppEvent) : AppEvent).OTHER_PAY_WILL, (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
                error: Error()
              }), GConstants) : GConstants).ShopBigTabType.SILVER_COIN, data.gid);
              break;
          }
        } //点击小标签


        onClickSmallTag(event) {
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).SYS_PLAY_EFFECT, (_crd && AppSound === void 0 ? (_reportPossibleCrUseOfAppSound({
            error: Error()
          }), AppSound) : AppSound).CommClick);
          var node = event.target;
          var cid = node["cid"];

          for (var child of this.smallTabLayer.children) {
            if (child["cid"]) {
              var buttonSimple = child.getComponent(_crd && ButtonSimple === void 0 ? (_reportPossibleCrUseOfButtonSimple({
                error: Error()
              }), ButtonSimple) : ButtonSimple);

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
        } //点击返回按钮


        onClickReturn(event) {
          for (var child of this.bigTabLayer.children) {
            this.closeTouch(child);
          }

          this.node.destroy();
        } //销毁


        onDestroy() {
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).SYS_PLAY_MUSIC_LAST);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "spineYun", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "spineShu", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "spineLianBu", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "spineQieHuan", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "bigTabScrollView", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "bigTabLayer", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "bigTab", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "silverCoinLayer", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "silverView", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "propLayer", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "propView", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "cloneItemNode", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "diamondIcon", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "goldIcon", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "smallTabRoot", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "smallTabLayer", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "cloneSmallTab", [_dec19], {
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
//# sourceMappingURL=4ab6e32ba33bf62c31b87c054d18b8f689e49ee3.js.map