System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14", "__unresolved_15"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Color, Label, Layout, Node, ScrollView, Sprite, SpriteFrame, UITransform, _decorator, instantiate, GCache, AppEvent, AppSound, GConstants, GameRes, GameTxt, ReportConfig, UIID, Utils, Encrypt, GifRenderLoad, resLoader, EventManager, BaseComponent, Platform, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _crd, ccclass, property, menu, atyCenterPrefabCtr;

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

  function _reportPossibleCrUseOfUtils(extras) {
    _reporterNs.report("Utils", "../../../framework/Utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEncrypt(extras) {
    _reporterNs.report("Encrypt", "../../../framework/crypto/Encrypto", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGifRenderLoad(extras) {
    _reporterNs.report("GifRenderLoad", "../../../framework/gui/gif/GifRenderLoad", _context.meta, extras);
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
      ScrollView = _cc.ScrollView;
      Sprite = _cc.Sprite;
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
      GConstants = _unresolved_5.GConstants;
    }, function (_unresolved_6) {
      GameRes = _unresolved_6.GameRes;
    }, function (_unresolved_7) {
      GameTxt = _unresolved_7.GameTxt;
    }, function (_unresolved_8) {
      ReportConfig = _unresolved_8.ReportConfig;
    }, function (_unresolved_9) {
      UIID = _unresolved_9.UIID;
    }, function (_unresolved_10) {
      Utils = _unresolved_10.Utils;
    }, function (_unresolved_11) {
      Encrypt = _unresolved_11.Encrypt;
    }, function (_unresolved_12) {
      GifRenderLoad = _unresolved_12.GifRenderLoad;
    }, function (_unresolved_13) {
      resLoader = _unresolved_13.resLoader;
    }, function (_unresolved_14) {
      EventManager = _unresolved_14.EventManager;
    }, function (_unresolved_15) {
      BaseComponent = _unresolved_15.BaseComponent;
    }, function (_unresolved_16) {
      Platform = _unresolved_16.Platform;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ab32fkwiCxEuaXNsqnMerz6", "atyCenterPrefabCtr", undefined);

      __checkObsolete__(['Color', 'EventTouch', 'Label', 'Layout', 'Node', 'ScrollView', 'Sprite', 'SpriteFrame', 'UITransform', '_decorator', 'instantiate']);

      ({
        ccclass,
        property,
        menu
      } = _decorator);
      /**
       * Name = atyCenterPrefabCtr
       * URL = db://assets/package/hall/scripts/atyCenterPrefabCtr.ts
       * Time = (中国标准时间)
       * Author = Tomoe
       *	活动中心
       * Life: onLoad-->onEnable->start->update->lateUpdate->onDisable->onDestroy
       */

      _export("atyCenterPrefabCtr", atyCenterPrefabCtr = (_dec = ccclass('atyCenterPrefabCtr'), _dec2 = menu('prefab/activity/atyCenterPrefabCtr'), _dec3 = property({
        tooltip: "页面标签",
        type: Node
      }), _dec4 = property({
        tooltip: "页面标签",
        type: Node
      }), _dec5 = property({
        tooltip: "内容标签Layer",
        type: Node
      }), _dec6 = property({
        tooltip: "小标签",
        type: Node
      }), _dec7 = property({
        tooltip: "暂无内容节点",
        type: Node
      }), _dec8 = property({
        tooltip: "活动内容背景节点",
        type: Node
      }), _dec9 = property({
        tooltip: "活动内容玩牌任务节点",
        type: Node
      }), _dec10 = property({
        tooltip: "暂无内容节点",
        type: Node
      }), _dec11 = property({
        tooltip: "暂无内容节点",
        type: Node
      }), _dec12 = property({
        tooltip: "公告滚动容器节点",
        type: Node
      }), _dec13 = property({
        tooltip: "公告标题",
        type: Label
      }), _dec14 = property({
        tooltip: "暂无内容节点",
        type: SpriteFrame
      }), _dec15 = property({
        tooltip: "公告背景图片",
        type: SpriteFrame
      }), _dec(_class = _dec2(_class = (_class2 = class atyCenterPrefabCtr extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "tabNode1", _descriptor, this);

          _initializerDefineProperty(this, "tabNode2", _descriptor2, this);

          _initializerDefineProperty(this, "subTabLayer", _descriptor3, this);

          _initializerDefineProperty(this, "cloneSubtab", _descriptor4, this);

          _initializerDefineProperty(this, "panelActivity", _descriptor5, this);

          _initializerDefineProperty(this, "bgPanelActivity", _descriptor6, this);

          _initializerDefineProperty(this, "taskPanelActivity", _descriptor7, this);

          _initializerDefineProperty(this, "panelNotice", _descriptor8, this);

          _initializerDefineProperty(this, "noticeContent", _descriptor9, this);

          _initializerDefineProperty(this, "noticeScrollow", _descriptor10, this);

          _initializerDefineProperty(this, "noticeTitle", _descriptor11, this);

          _initializerDefineProperty(this, "noContent", _descriptor12, this);

          _initializerDefineProperty(this, "sprBgNotice", _descriptor13, this);

          this.currowChooseTabID = 0;
          this.currowChooseSubID = null;
          this.currowChooseData = null;
          this.tabLayer = {};
          this.atyData = null;
          this.noticeData = null;
          this.showData = null;
          this._redDotView = {};
          this._initSize = {
            panelActivity: null,
            noticePic: null
          };
        }

        /**初始化添加事件绑定 */
        onInitModuleEvent() {
          /** 礼包红点更新 */
          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NOTIFY_UPDATE_RED_DOT, this.refreshRedDot);
        }

        onLoad() {
          this.tabLayer = {
            0: this.tabNode1,
            1: this.tabNode2
          };
          this._redDotView = {
            [(_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
              error: Error()
            }), GConstants) : GConstants).RedDotConf.ActivityNormal]: this.tabNode1,
            [(_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
              error: Error()
            }), GConstants) : GConstants).RedDotConf.ActivityNotice]: this.tabNode2
          };
          this.getData();
          this.findFirstShowAct();
          this.initView();
        }

        start() {}

        getData() {
          this.atyData = (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
            error: Error()
          }), GCache) : GCache).TaskInfo.atyData;
          this.noticeData = (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
            error: Error()
          }), GCache) : GCache).TaskInfo.NoticeData;
        }

        initView() {
          this.panelActivity.active = false;
          this.panelNotice.active = false;
          this.cloneSubtab.active = false;
          this._initSize["panelActivity"] = {
            width: this.panelActivity.getComponent(UITransform).width,
            height: this.panelActivity.getComponent(UITransform).height
          };
          this._initSize["noticePic"] = {
            width: this.noticeContent.getComponent(UITransform).width,
            height: this.noticeContent.getComponent(UITransform).height
          };
          this.updateTabList();
          this.updateSubList();
          this.updateRightView();
        }
        /** 活动中心优先展示的活动*/


        findFirstShowAct() {
          //判断红点展示
          var showIndexByRed = this.atyData.findIndex(item => {
            return item['red_dot_type'] == 1;
          }); //判断进入活动中心优先要展示的活动数据 

          var showIndexByFirst = this.atyData.findIndex(item => {
            return item['is_first'] == 1;
          }); //  配置了某一条需要优先展示

          if (showIndexByFirst > -1) {
            this.currowChooseSubID = showIndexByFirst;
          } //只有红点


          if (showIndexByRed > -1 && showIndexByFirst == -1) {
            this.currowChooseSubID = showIndexByRed;
          } //既没有红点也没有配置特殊要展示的  默认展示第 0个下标数据


          this.currowChooseSubID = 0;
        }
        /** 活动中心配置返回 */


        respAtyCenterConfig(event, receiveData, reqData) {
          if (receiveData.code != 0) {
            return;
          }

          this.getData();
          this.updateSubList();
          this.updateRightView();
        }
        /** 红点更新  函数有问题 但是暂不影响功能*/


        refreshRedDot(event, keyType, params) {
          var _this = this;

          if (event === void 0) {
            event = null;
          }

          if (keyType === void 0) {
            keyType = null;
          }

          if (params === void 0) {
            params = null;
          }

          if (keyType == null) {
            var _loop = function _loop(_keyType) {
              var nodeOrList = _this._redDotView[_keyType];
              var imgRedDot = null;

              if (nodeOrList instanceof Array) {
                nodeOrList.forEach((node, index) => {
                  imgRedDot = node.getChildByName("img_reddot");

                  if (imgRedDot) {
                    imgRedDot.active = false; //GCache.RedDot.hasRedDot(keyType);
                  }
                });
              } else {
                imgRedDot = nodeOrList.getChildByName("img_reddot");

                if (imgRedDot) {
                  imgRedDot.active = false; //GCache.RedDot.hasRedDot(keyType);
                }
              }
            };

            for (var _keyType in this._redDotView) {
              _loop(_keyType);
            }
          } else {
            if (this._redDotView[keyType] == null) {
              return;
            }

            var nodeOrList = this._redDotView[keyType];
            var imgRedDot = null;

            if (nodeOrList instanceof Array) {
              nodeOrList.forEach((node, index) => {
                imgRedDot = node.getChildByName("img_reddot");

                if (imgRedDot) {
                  imgRedDot.active = false; //GCache.RedDot.hasRedDot(keyType);
                }
              });
            } else {
              imgRedDot = nodeOrList.getChildByName("img_reddot");

              if (imgRedDot) {
                imgRedDot.active = false; //GCache.RedDot.hasRedDot(keyType);
              }
            }
          }
        }
        /**设置远端图片 */


        setSpriteFrame(node, path) {
          if (!path) {
            return;
          }

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
                var pngNode = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                  error: Error()
                }), Utils) : Utils).create_2DSprite(spriteFrame);

                if (self.bgPanelActivity == node) {
                  self.setAdaptivePng(self._initSize.panelActivity, pngNode, false);
                } else if (self.noticeContent == node) {
                  self.setAdaptivePng(self._initSize.noticePic, pngNode);
                }

                self.addSchedulerOnce(0.01, () => {
                  node.addChild(pngNode);
                });
              }
            });
          }
        }
        /** 设置图片适配 */


        setAdaptivePng(sizeConf, pngNode, isOnlyWidth) {
          if (isOnlyWidth === void 0) {
            isOnlyWidth = true;
          }

          if (!sizeConf || sizeConf.width == null || sizeConf.height == null) {
            return;
          }

          this.addSchedulerOnce(0, () => {
            var scale = [1, 1, 1];
            var scW = 1;
            var scH = 1;
            var uiTransComp = pngNode.getComponent(UITransform);
            var pngWidth = uiTransComp.width;
            var pngHeight = uiTransComp.height;

            if (sizeConf.width > pngWidth) {
              var scWidth = pngWidth / sizeConf.width;
              var scHeight = pngHeight / sizeConf.width;
              scW = scWidth > scHeight ? scHeight : scWidth;
            } else if (sizeConf.width < pngWidth) {
              var _scWidth = sizeConf.width / pngWidth;

              var _scHeight = sizeConf.width / pngHeight;

              scW = _scWidth > _scHeight ? _scHeight : _scWidth;
            }

            if (isOnlyWidth == false) {
              var sprite = pngNode.getComponent(Sprite);
              sprite.sizeMode = 1;
              sprite.type = 0;
              uiTransComp.width = sizeConf.width;
              uiTransComp.height = sizeConf.height;
            } else {
              uiTransComp.width = scW * pngWidth;
              uiTransComp.height = scW * pngHeight;
            }
          });
        }
        /** 更新大标签 */


        updateTabList() {
          if (this.currowChooseTabID == null || this.currowChooseTabID >= 2 || this.currowChooseTabID < 0) {
            this.currowChooseTabID = 0;
          }

          for (var _key in this.tabLayer) {
            var v = this.tabLayer[_key];
            var select = v.getChildByName("tab_selected");
            var img_reddot = v.getChildByName("img_reddot");

            if (_key == String(this.currowChooseTabID)) {
              img_reddot.active = false;
              select.active = true;
            } else {
              select.active = false;
            }
          }
        }
        /** 根据大类型ID获取二级标签数据 */


        __getSubConfByBigID(bigID) {
          if (bigID == 0) {
            return {
              data: this.atyData,
              redKey: (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
                error: Error()
              }), GConstants) : GConstants).RedDotConf.ActivityNormal,
              redUpdateFunc: (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
                error: Error()
              }), GCache) : GCache).RedDot.update_Activity_NormalRed
            };
          } else if (bigID == 1) {
            return {
              data: this.noticeData,
              redKey: (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
                error: Error()
              }), GConstants) : GConstants).RedDotConf.ActivityNotice,
              redUpdateFunc: (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
                error: Error()
              }), GCache) : GCache).RedDot.update_Activity_NoticeRed
            };
          }

          return {};
        }
        /**更新二级标签*/


        updateSubList() {
          if (this.currowChooseSubID == null) {
            this.currowChooseSubID = 0;
          }

          var smallTabConf = this.__getSubConfByBigID(this.currowChooseTabID);

          var data = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).table_verify(smallTabConf.data, true);
          var max = data.length;

          if (max == 0) {
            this.currowChooseSubID = null;
            this.currowChooseData = null;
          }

          if (max < this.subTabLayer.children.length) {
            max = this.subTabLayer.children.length;
          }

          for (var i = max - 1; i >= 0; i--) {
            var nodeItem = this.subTabLayer.children[i];

            if (nodeItem && !data[i]) {
              nodeItem.destroy();
            }
          }

          for (var _i = 0; _i < data.length; _i++) {
            var _nodeItem = this.subTabLayer.children[_i];

            if (!_nodeItem) {
              _nodeItem = instantiate(this.cloneSubtab);
              this.subTabLayer.addChild(_nodeItem);
            }

            var nodeTxt = _nodeItem.getChildByName("label_title");

            var titleLabel = nodeTxt.getComponent(Label);

            var tag_hot = _nodeItem.getChildByName("tag_hot");

            var img_reddot = _nodeItem.getChildByName("img_reddot");

            var select = _nodeItem.getChildByName("img_selected");

            if (this.currowChooseTabID == 0) {
              //只有活动才有标签
              if (data[_i].mark_url) {
                this.setSpriteFrame(tag_hot, data[_i].mark_url);
                tag_hot.active = true;
              } else {
                tag_hot.active = false;
              }
            } else {
              tag_hot.active = false;
            }

            titleLabel.string = data[_i].title;
            _nodeItem["currowChooseSubID"] = _i;
            _nodeItem["data"] = data[_i]; // 全部更新一次红点

            img_reddot.active = (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
              error: Error()
            }), GCache) : GCache).RedDot.hasRedDot(smallTabConf.redKey, data[_i]["config_id"]);

            if (_i == this.currowChooseSubID) {
              titleLabel.color = new Color(136, 86, 45);
              smallTabConf.redUpdateFunc.call((_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
                error: Error()
              }), GCache) : GCache).RedDot, data[_i], false);
              select.active = true;
              this.currowChooseData = _nodeItem["data"];
            } else {
              select.active = false;
              titleLabel.color = new Color(242, 206, 179); //未选中的更新红点

              img_reddot.active = (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
                error: Error()
              }), GCache) : GCache).RedDot.hasRedDot(smallTabConf.redKey, data[_i]["config_id"]);
            }

            _nodeItem.active = true;
          }

          this.subTabLayer.getComponent(Layout).updateLayout();
        }
        /** 点击了二级标签 */


        onClickSubTab(event) {
          var node = event.target;

          if (this.currowChooseSubID == node["currowChooseSubID"]) {
            return;
          }

          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).SYS_PLAY_EFFECT, (_crd && AppSound === void 0 ? (_reportPossibleCrUseOfAppSound({
            error: Error()
          }), AppSound) : AppSound).CommClick);
          this.currowChooseSubID = node["currowChooseSubID"];
          this.currowChooseData = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).table_verify(node["data"]);
          this.updateSubList();
          this.updateRightView();
        }
        /** 更新右侧界面 */


        updateRightView() {
          console.log("当前数据==>", this.currowChooseData);

          if (!this.currowChooseData || (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).table_isEmpty(this.currowChooseData)) {
            if (this.currowChooseTabID == 0) {
              this.bgPanelActivity["ReloadUrl"] = null;
              this.taskPanelActivity["AtyType"] = null;
              this.bgPanelActivity.removeAllChildren();
              this.taskPanelActivity.removeAllChildren();
              this.panelActivity.active = true;
              this.panelNotice.active = false;
            } else {
              this.noticeTitle.string = "";
              this.noticeScrollow.getComponent(ScrollView).scrollToTop(0, false);
              this.noticeContent.removeAllChildren();
              this.panelNotice.active = true;
              this.panelActivity.active = false;
            }

            return;
          }

          if (this.currowChooseTabID == 0) {
            if (this.bgPanelActivity["ReloadUrl"] != this.currowChooseData["bg_pic"]) {
              this.bgPanelActivity.removeAllChildren(); // 判断当前图片格式 .gif

              if (String(this.currowChooseData["bg_pic"]).includes(".gif")) {
                var pngNode = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                  error: Error()
                }), Utils) : Utils).create_2DNode("bg_pic");
                var gifRenderLoad = pngNode.addComponent(_crd && GifRenderLoad === void 0 ? (_reportPossibleCrUseOfGifRenderLoad({
                  error: Error()
                }), GifRenderLoad) : GifRenderLoad);
                gifRenderLoad.setRemoteUrl(this.currowChooseData["bg_pic"]);
                this.bgPanelActivity.addChild(pngNode);
              } else {
                this.setSpriteFrame(this.bgPanelActivity, this.currowChooseData["bg_pic"]);
              }

              this.bgPanelActivity["ReloadUrl"] = this.currowChooseData["bg_pic"];
            } else {
              this.bgPanelActivity.active = true;
            } //牌局任务界面


            this.checkSpeActivityTask(this.taskPanelActivity, this.currowChooseData["aty_type"]);
            this.panelActivity.active = true;
            this.panelNotice.active = false;
          } else {
            this.noticeTitle.string = this.currowChooseData["title"];
            this.noticeContent.removeAllChildren();
            this.setSpriteFrame(this.noticeContent, this.currowChooseData["content"]);
            this.noticeScrollow.getComponent(ScrollView).scrollToTop(0, false);
            this.panelActivity.active = false;
            this.panelNotice.active = true;
          }
        }
        /** 检查特殊的任务 */


        checkSpeActivityTask(parentNode, atyType) {
          return false;
        }
        /** 点击了活动 */


        onClickActivity(event) {
          if (this.currowChooseTabID == 0) {
            return;
          }

          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).SYS_PLAY_EFFECT, (_crd && AppSound === void 0 ? (_reportPossibleCrUseOfAppSound({
            error: Error()
          }), AppSound) : AppSound).CommClick);
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).REPORT_CLIENT_CLICK, {
            eventID: (_crd && ReportConfig === void 0 ? (_reportPossibleCrUseOfReportConfig({
              error: Error()
            }), ReportConfig) : ReportConfig).activityCenter_1
          });
          this.currowChooseTabID = 0;
          this.currowChooseSubID = 0;
          this.currowChooseData = null;
          this.updateTabList();
          this.updateSubList();
          this.updateRightView();
        }
        /** 点击了公告 */


        onClickNotice(event) {
          if (this.currowChooseTabID == 1) {
            return;
          }

          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).SYS_PLAY_EFFECT, (_crd && AppSound === void 0 ? (_reportPossibleCrUseOfAppSound({
            error: Error()
          }), AppSound) : AppSound).CommClick);
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).REPORT_CLIENT_CLICK, {
            eventID: (_crd && ReportConfig === void 0 ? (_reportPossibleCrUseOfReportConfig({
              error: Error()
            }), ReportConfig) : ReportConfig).activityCenter_2
          });
          this.currowChooseTabID = 1;
          this.currowChooseSubID = 0;
          this.currowChooseData = null;
          this.updateTabList();
          this.updateSubList();
          this.updateRightView();
        }
        /** 点击了关闭 */


        onClickClose(event) {
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).SYS_PLAY_EFFECT, (_crd && AppSound === void 0 ? (_reportPossibleCrUseOfAppSound({
            error: Error()
          }), AppSound) : AppSound).CommClick);
          this.node.destroy();
        }
        /** 点击了当前活动执行对应的跳转 */


        onClickActJump(event) {
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).SYS_PLAY_EFFECT, (_crd && AppSound === void 0 ? (_reportPossibleCrUseOfAppSound({
            error: Error()
          }), AppSound) : AppSound).CommClick);
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).REPORT_CLIENT_CLICK, {
            eventID: (_crd && ReportConfig === void 0 ? (_reportPossibleCrUseOfReportConfig({
              error: Error()
            }), ReportConfig) : ReportConfig).activityCenter_4
          });

          if (this.currowChooseData['is_jump'] == 1) {
            //跳转位置
            var _jumpData = (_crd && Encrypt === void 0 ? (_reportPossibleCrUseOfEncrypt({
              error: Error()
            }), Encrypt) : Encrypt).JsonDecode(this.currowChooseData['jump_code']);

            var jmmpCmd = Number(_jumpData['cmd']) || 0;
            var mallScene = _jumpData['tag'] || 0;

            switch (jmmpCmd) {
              //跳转到商城
              case (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
                error: Error()
              }), GConstants) : GConstants).JumpViewConf.POS_ACT_MALL:
                (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
                  error: Error()
                }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
                  error: Error()
                }), AppEvent) : AppEvent).VIEW_UI_OPEN, (_crd && UIID === void 0 ? (_reportPossibleCrUseOfUIID({
                  error: Error()
                }), UIID) : UIID).MallPrefab, {
                  id: Number(mallScene),
                  pay_scene: 0
                }, {});
                this.node.destroy();
                break;

              case (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
                error: Error()
              }), GConstants) : GConstants).JumpViewConf.POS_ACT_DESK_SIGN_POS_ACT_SPECIALGIFT:
                switch (mallScene) {
                  //添加到桌面
                  case (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
                    error: Error()
                  }), GConstants) : GConstants).JumpViewConf.POS_ACT_DESK_TAG:
                    break;
                  //联系客服有奖

                  case (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
                    error: Error()
                  }), GConstants) : GConstants).JumpViewConf.POS_ACT_CUSTOMER_SERVICE:
                    var shareKefuData = (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
                      error: Error()
                    }), GCache) : GCache).ShareInfo.getShareConfigByType((_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
                      error: Error()
                    }), GConstants) : GConstants).ShareSceneConf.kefugift);
                    var shareParams = {};

                    if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                      error: Error()
                    }), Utils) : Utils).table_isEmpty(shareKefuData)) {
                      shareParams = {
                        sessionFrom: "",
                        success: () => {},
                        // 成功的回调
                        fail: () => {},
                        // 失败的回调
                        complete: () => {},
                        // 失败或者的回调
                        showMessageCard: true,
                        //是否发送小程序气泡消息
                        sendMessageTitle: (_crd && GameTxt === void 0 ? (_reportPossibleCrUseOfGameTxt({
                          error: Error()
                        }), GameTxt) : GameTxt).share_wx_friends_txt,
                        //通用标题, //转发标题，不传则默认使用当前小游戏的昵称
                        sendMessagePath: '',
                        //气泡消息小程序路径
                        sendMessageImg: (_crd && GameRes === void 0 ? (_reportPossibleCrUseOfGameRes({
                          error: Error()
                        }), GameRes) : GameRes).AppCommon_Share_Friend_Comm.path,
                        // 转发图片
                        shareID: shareKefuData[0]['share_id']
                      };
                    } else {
                      shareParams = {
                        sessionFrom: "",
                        success: () => {},
                        // 成功的回调
                        fail: () => {},
                        // 失败的回调
                        complete: () => {},
                        // 失败或者的回调
                        showMessageCard: true,
                        //是否发送小程序气泡消息
                        sendMessageTitle: shareKefuData[0]['title'],
                        //转发标题，不传则默认使用当前小游戏的昵称
                        sendMessagePath: '',
                        //气泡消息小程序路径
                        sendMessageImg: shareKefuData[0]['img'],
                        // 转发图片
                        shareID: shareKefuData[0]['share_id']
                      };
                    }

                    (_crd && Platform === void 0 ? (_reportPossibleCrUseOfPlatform({
                      error: Error()
                    }), Platform) : Platform).openCustomerServiceConversation(shareParams, (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                      error: Error()
                    }), Utils) : Utils).handler(this, this.__doCallBackSerCon));
                    break;
                  // 跳转到特价礼包

                  case (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
                    error: Error()
                  }), GConstants) : GConstants).JumpViewConf.POS_ACT_SPECIALGIFT_TAG:
                    (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
                      error: Error()
                    }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
                      error: Error()
                    }), AppEvent) : AppEvent).VIEW_UI_OPEN, (_crd && UIID === void 0 ? (_reportPossibleCrUseOfUIID({
                      error: Error()
                    }), UIID) : UIID).GiftDiscountPrefab, {
                      id: 0,
                      pay_scene: 0
                    }, {});
                    break;
                  // 跳转到签到

                  case (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
                    error: Error()
                  }), GConstants) : GConstants).JumpViewConf.POS_ACT_SIGN_TAG:
                    (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
                      error: Error()
                    }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
                      error: Error()
                    }), AppEvent) : AppEvent).VIEW_UI_OPEN, (_crd && UIID === void 0 ? (_reportPossibleCrUseOfUIID({
                      error: Error()
                    }), UIID) : UIID).SigninPrefab);
                    break;
                }

                break;

              case (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
                error: Error()
              }), GConstants) : GConstants).JumpViewConf.POS_ACT_GAME:
                (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
                  error: Error()
                }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
                  error: Error()
                }), AppEvent) : AppEvent).SYS_TOAST_TIP, {
                  content: "去玩牌,待玩牌完成之后介入"
                });
                break;
              // 跳转到好友

              case (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
                error: Error()
              }), GConstants) : GConstants).JumpViewConf.POS_ACT_FRIEND:
                (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
                  error: Error()
                }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
                  error: Error()
                }), AppEvent) : AppEvent).VIEW_UI_OPEN, (_crd && UIID === void 0 ? (_reportPossibleCrUseOfUIID({
                  error: Error()
                }), UIID) : UIID).FriendPrefab, null, null, null, true);
                this.node.destroy();
                break;
              // 跳转到大厅

              case (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
                error: Error()
              }), GConstants) : GConstants).JumpViewConf.POS_ACT_HALL:
                //销毁活动中心
                this.node.destroy();
                break;
              // 跳转到个人信息

              case (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
                error: Error()
              }), GConstants) : GConstants).JumpViewConf.POS_ACT_USERINFO:
                this.node.destroy();
                (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
                  error: Error()
                }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
                  error: Error()
                }), AppEvent) : AppEvent).VIEW_UI_OPEN, (_crd && UIID === void 0 ? (_reportPossibleCrUseOfUIID({
                  error: Error()
                }), UIID) : UIID).PlayerInfoCenter);
                break;
            }
          } // 点击打开到商场某个商品的支付


          var _jumpGoodsData = this.currowChooseData;
          var jmmpGoodsType = Number(_jumpGoodsData['goods_type']) || 0;
          var jmmpGoodsID = Number(_jumpGoodsData['goods_id']) || 0;
          var self = this;

          if (jmmpGoodsID) {
            var goodsProp = (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
              error: Error()
            }), GCache) : GCache).ShopInfo.getShopDataByGoodsID(jmmpGoodsID);

            if (goodsProp["gid"]) {
              (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
                error: Error()
              }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
                error: Error()
              }), AppEvent) : AppEvent).REPORT_CLIENT_CLICK, {
                eventID: (_crd && ReportConfig === void 0 ? (_reportPossibleCrUseOfReportConfig({
                  error: Error()
                }), ReportConfig) : ReportConfig).activityCenter_5,
                body: {
                  gsubname: goodsProp["gid"]
                }
              });

              switch (jmmpGoodsType) {
                case (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
                  error: Error()
                }), GConstants) : GConstants).ShopBigTabType.SILVER_COIN:
                  var goodsItem = (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
                    error: Error()
                  }), GCache) : GCache).ShopInfo.getShopDataByGoodsID(jmmpGoodsID);
                  var param = {
                    title: (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
                      error: Error()
                    }), GConstants) : GConstants).DialogTitle.Goods_content,
                    itemData: goodsItem,
                    isConfirm: goodsItem['specialDesc'] ? false : true,
                    //没有加赠 值为 'false  
                    callFunc: pData => {
                      //模拟支付
                      self.__paySure(pData, {
                        payID: (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
                          error: Error()
                        }), GConstants) : GConstants).PayType.RMB,
                        price: goodsItem['price']
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
                }), GConstants) : GConstants).ShopBigTabType.PROPS:
                  var paramProp = {
                    goodsId: goodsProp["gid"],
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
                  }), UIID) : UIID).BuyPropDialogPrefab, paramProp);
                  break;

                default:
                  break;
              }
            }
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
              (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
                error: Error()
              }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
                error: Error()
              }), AppEvent) : AppEvent).OTHER_PAY_WILL, (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
                error: Error()
              }), GConstants) : GConstants).ShopBigTabType.SILVER_COIN, data.gid);
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
        } //联系客服的回调


        __doCallBackSerCon(state, option) {
          if (option === void 0) {
            option = null;
          }

          if (!state) {
            return;
          }

          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_REQ_SHARE_AWARD, option["shareID"], (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
            error: Error()
          }), GConstants) : GConstants).ReqUrl.shareType.other, false);
        } //销毁


        onDestroy() {
          //获取活动中心配置数据
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_CMD_REQ_TASK_ACT_CONFIG);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "tabNode1", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "tabNode2", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "subTabLayer", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "cloneSubtab", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "panelActivity", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "bgPanelActivity", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "taskPanelActivity", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "panelNotice", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "noticeContent", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "noticeScrollow", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "noticeTitle", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "noContent", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "sprBgNotice", [_dec15], {
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
//# sourceMappingURL=019993ddbe82c28bf0d8a7e173df26f86a35fb9b.js.map