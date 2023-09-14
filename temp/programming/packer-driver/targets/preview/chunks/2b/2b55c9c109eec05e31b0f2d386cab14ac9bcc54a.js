System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Label, Node, Prefab, Quat, ScrollView, Sprite, SpriteAtlas, SpriteFrame, Vec3, _decorator, instantiate, tween, GCache, AppEvent, AppSound, GConstants, GameRes, ReportConfig, UIID, Utils, DelegateComponent, resLoader, EventManager, BaseComponent, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _crd, ccclass, property, menu, selectGameLevelPrefabCtr;

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

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Label = _cc.Label;
      Node = _cc.Node;
      Prefab = _cc.Prefab;
      Quat = _cc.Quat;
      ScrollView = _cc.ScrollView;
      Sprite = _cc.Sprite;
      SpriteAtlas = _cc.SpriteAtlas;
      SpriteFrame = _cc.SpriteFrame;
      Vec3 = _cc.Vec3;
      _decorator = _cc._decorator;
      instantiate = _cc.instantiate;
      tween = _cc.tween;
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
      ReportConfig = _unresolved_7.ReportConfig;
    }, function (_unresolved_8) {
      UIID = _unresolved_8.UIID;
    }, function (_unresolved_9) {
      Utils = _unresolved_9.Utils;
    }, function (_unresolved_10) {
      DelegateComponent = _unresolved_10.DelegateComponent;
    }, function (_unresolved_11) {
      resLoader = _unresolved_11.resLoader;
    }, function (_unresolved_12) {
      EventManager = _unresolved_12.EventManager;
    }, function (_unresolved_13) {
      BaseComponent = _unresolved_13.BaseComponent;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d38ec4HqS9HyIVbxoCUt7Nj", "selectGameLevelPrefabCtr", undefined);

      __checkObsolete__(['EventTouch', 'Label', 'Node', 'Prefab', 'Quat', 'ScrollView', 'Sprite', 'SpriteAtlas', 'SpriteFrame', 'Vec3', '_decorator', 'instantiate', 'tween']);

      ({
        ccclass,
        property,
        menu
      } = _decorator);
      /**
       * Name = selectGameLevelPrefabCtr
       * URL = db://assets/package/hall/scripts/selectGameLevelPrefabCtr.ts
       * Time = Wed Sep 07 2022 17:11:23 GMT+0800 (中国标准时间)
       * Author = Tomoe
       *
       * Life: onLoad-->onEnable->start->update->lateUpdate->onDisable->onDestroy
       */

      _export("selectGameLevelPrefabCtr", selectGameLevelPrefabCtr = (_dec = ccclass('selectGameLevelPrefabCtr'), _dec2 = menu('prefab/hall/selectGameLevelPrefabCtr'), _dec3 = property({
        tooltip: "后背景动画根节点",
        type: Node
      }), _dec4 = property({
        tooltip: "前背景动画根节点",
        type: Node
      }), _dec5 = property({
        tooltip: "大厅人物动画根节点",
        type: Node
      }), _dec6 = property({
        tooltip: "蝴蝶动画根节点",
        type: Node
      }), _dec7 = property({
        tooltip: "按钮动画根节点",
        type: Node
      }), _dec8 = property({
        tooltip: "选中动画根节点",
        type: Node
      }), _dec9 = property({
        tooltip: "选场房间节点",
        type: Node
      }), _dec10 = property({
        tooltip: "选场房间列表节点",
        type: Node
      }), _dec11 = property({
        tooltip: "选场房间列表滚动视图组件",
        type: ScrollView
      }), _dec12 = property({
        tooltip: "头像根节点",
        type: Node
      }), _dec13 = property({
        tooltip: "可吃场灯笼按钮节点",
        type: Node
      }), _dec14 = property({
        tooltip: "不可吃场灯笼按钮节点",
        type: Node
      }), _dec15 = property({
        tooltip: "tip节点",
        type: Node
      }), _dec16 = property({
        tooltip: "选场资源图集",
        type: SpriteAtlas
      }), _dec(_class = _dec2(_class = (_class2 = class selectGameLevelPrefabCtr extends (_crd && BaseComponent === void 0 ? (_reportPossibleCrUseOfBaseComponent({
        error: Error()
      }), BaseComponent) : BaseComponent) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "spineQianNode", _descriptor, this);

          _initializerDefineProperty(this, "spineHouNode", _descriptor2, this);

          _initializerDefineProperty(this, "spineRoleNode", _descriptor3, this);

          _initializerDefineProperty(this, "hudieAni", _descriptor4, this);

          _initializerDefineProperty(this, "btnAni", _descriptor5, this);

          _initializerDefineProperty(this, "choiceAni", _descriptor6, this);

          _initializerDefineProperty(this, "roomNode", _descriptor7, this);

          _initializerDefineProperty(this, "roomListNode", _descriptor8, this);

          _initializerDefineProperty(this, "roomListView", _descriptor9, this);

          _initializerDefineProperty(this, "roleName", _descriptor10, this);

          _initializerDefineProperty(this, "kechiLight", _descriptor11, this);

          _initializerDefineProperty(this, "bukechiLight", _descriptor12, this);

          _initializerDefineProperty(this, "nodeTips", _descriptor13, this);

          _initializerDefineProperty(this, "selectAtlas", _descriptor14, this);

          this.curRoleID = null;
          this.curRoleSex = null;
          this.curRoomConf = null;
          this.curRoomType = null;
          this.roomAnteLevel = {
            "初级场": 1,
            //"初级",     
            "中级场": 2,
            // "中级",     
            "高级场": 3 // "高级",

          };
          this.roomTab = [(_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
            error: Error()
          }), GConstants) : GConstants).GameTab.kechi, (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
            error: Error()
          }), GConstants) : GConstants).GameTab.bukechi];
          this.roomTabID = {
            [(_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
              error: Error()
            }), GConstants) : GConstants).GameTab.kechi]: 0,
            [(_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
              error: Error()
            }), GConstants) : GConstants).GameTab.bukechi]: 1
          };
          this._currowGameID = null;
          this._currowLeaveRoomID = null;
          this._currowLeaveData = null;
        }

        /**初始化添加事件绑定 */
        onInitModuleEvent() {
          // /**角色数据更新 */
          // this.addModelListener(AppEvent.USER_UPDATE_ROLE_INFO, this.updateRoleShow);
          // /**选场数据有更新 */
          // this.addModelListener(AppEvent.HALL_UPDATE_SELECT_GAME, this.updateSelectData);

          /**玩家数据更新 */
          this.addModelListener((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).USER_UPDATE_INFO, this.updateRoleShow);
        }

        onLoad() {
          this.getComp();
          this.initData();
          this.initView();
          this.loadGameRes();
        }

        /**加载游戏资源 */
        loadGameRes() {// mark
          // resLoader.loadDir("game", "spineAni", (error, data: any) => {
          // 	if (error) {
          // 		console.log(error);
          // 		return;
          // 	}
          // });
        }

        start() {}

        getComp() {
          var comp = this.node.getComponent(_crd && DelegateComponent === void 0 ? (_reportPossibleCrUseOfDelegateComponent({
            error: Error()
          }), DelegateComponent) : DelegateComponent);

          if (comp) {
            var param = comp.getParams();

            if (param) {
              this._currowGameID = param["game_id"];
              this.curRoomType = this.roomTab[param["tab_id"]];
            }
          }
        }

        initData() {
          // //请求拉取底注场场次数据
          // EventManager.dispatch(AppEvent.NET_CMD_REQ_ROOM_CATALOGLIST, GConstants.GameRoomType.ROOM_TYPE_ANTE);
          // if (!GCache || !GCache.SelectGame) {
          // 	return
          // }
          // let roomID = GCache.SelectGame.getRoomId(this.curRoomType);
          // let gameType = GCache.SelectGame.getCurRoomInfo();
          // let intoRoomData = GCache.SelectGame.getIntoRoomData();
          // // console.log("获取进入游戏房间的数据", this.curRoomType, roomeID);
          // // console.log("获取当前选择的游戏玩法类型", gameType);
          // // console.log("roomID======>>>>>>", intoRoomData);
          // let curRoomConf = GCache.SelectGame.getRoomId(this.curRoomType);
          if (this._currowGameID != null) {
            //请求游戏房间信息
            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
              error: Error()
            }), AppEvent) : AppEvent).NET_REQ_GAME_LEVEL_ROOM_TAB, this._currowGameID); //请求游戏场次人数
            // EventManager.dispatch(AppEvent.NET_REQ_GAME_LEVEL_PERSON_COUNT, this._currowGameID)
          }
        } //初始化界面


        initView() {
          this.getPreLoaderRes((_crd && GameRes === void 0 ? (_reportPossibleCrUseOfGameRes({
            error: Error()
          }), GameRes) : GameRes).Prefab_HallTopUI.bundle, (_crd && GameRes === void 0 ? (_reportPossibleCrUseOfGameRes({
            error: Error()
          }), GameRes) : GameRes).Prefab_HallTopUI.path, Prefab, res => {
            this.node.addChild(res);
          });
          this.setInitAni();
          this.updateRoom();
          this.selectLanternTab();
          this.updateRoleShow();
        }
        /**选场数据有更新 */


        updateSelectData(event, param) {
          console.log("选场数据有更新");
        }
        /**更新玩家展示角色*/


        updateRoleShow(event, data) {
          if (event === void 0) {
            event = null;
          }

          // mark 临时配置，上角色版本再处理
          var userSex = (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
            error: Error()
          }), GCache) : GCache).User.getUserSex();

          if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).isNotNull(this.curRoleSex) && this.curRoleSex == userSex) {
            return;
          }

          this.curRoleSex == userSex;
          this.spineRoleNode.removeAllChildren();
          var param = {
            resConf: (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
              error: Error()
            }), GCache) : GCache).GoodsData.getRoleAnimConfigById(this.curRoleID).path,
            aniName: (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
              error: Error()
            }), GCache) : GCache).GoodsData.getRoleAnimConfigById(this.curRoleID).standby[0],
            parentNode: this.spineRoleNode,
            trackIndex: null,
            isLoop: true
          };
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).SYS_ANI_PLAY, param);
          this.updateRoleName();
        }

        setInitAni() {
          var bgQianAni = {
            parentNode: this.spineQianNode,
            resConf: (_crd && GameRes === void 0 ? (_reportPossibleCrUseOfGameRes({
              error: Error()
            }), GameRes) : GameRes).Spine_Xc_Bg,
            aniName: "qian",
            trackIndex: 0,
            isLoop: true
          };
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).SYS_ANI_PLAY, bgQianAni);
          var bgAni = {
            parentNode: this.spineHouNode,
            resConf: (_crd && GameRes === void 0 ? (_reportPossibleCrUseOfGameRes({
              error: Error()
            }), GameRes) : GameRes).Spine_Xc_Bg,
            aniName: "hou",
            trackIndex: 0,
            isLoop: true
          };
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).SYS_ANI_PLAY, bgAni);
          var btnAni = {
            parentNode: this.btnAni,
            resConf: (_crd && GameRes === void 0 ? (_reportPossibleCrUseOfGameRes({
              error: Error()
            }), GameRes) : GameRes).Spine_Xc_Btn,
            aniName: "btn",
            trackIndex: 0,
            isLoop: true
          };
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).SYS_ANI_PLAY, btnAni);
          var hudieAni = {
            parentNode: this.hudieAni,
            resConf: (_crd && GameRes === void 0 ? (_reportPossibleCrUseOfGameRes({
              error: Error()
            }), GameRes) : GameRes).Spine_Xc_Hudie,
            aniName: "hudie_r",
            //"hudie_l", "hudie_r"
            trackIndex: 0,
            isLoop: true,
            toPos: new Vec3(233, 239, 0)
          };
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).SYS_ANI_PLAY, hudieAni);
        }
        /**刷新角色名称 */


        updateRoleName() {
          var res = (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
            error: Error()
          }), GCache) : GCache).GoodsData.getRoleAnimConfigById(this.curRoleID).name;
          this.getPreLoaderRes(res.bundle, res.path, SpriteFrame, sprite => {
            this.roleName.getComponent(Sprite).spriteFrame = sprite;
            this.roleName.getComponent(Sprite).sizeMode = 2;
          });
        } //刷新房间显示


        updateRoom() {
          this.roomListNode.removeAllChildren();
          var num = 3; // if (num > 3) {
          // 	this.roomListView.enabled = true
          // } else {
          // 	this.roomListView.enabled = false
          // }

          for (var i = 0; i < num; i++) {
            var itemNode = instantiate(this.roomNode);
            this.roomListNode.addChild(itemNode);
          }
        }
        /**玩法标签 */


        selectLanternTab() {
          this.roomListNode.removeAllChildren();
          this.nodeTips.active = false;

          if (this.curRoomType == (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
            error: Error()
          }), GConstants) : GConstants).GameTab.kechi) {
            //可吃玩法
            this.kechiLight.active = true;
            this.bukechiLight.active = false;
            this.showLevlelList();
          } else if (this.curRoomType == (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
            error: Error()
          }), GConstants) : GConstants).GameTab.bukechi) {
            //不可吃玩法
            this.kechiLight.active = false;
            this.bukechiLight.active = true;
            this.showLevlelList();
          }
        }

        showLevlelList() {
          var currowLeaveTabID = this.roomTabID[this.curRoomType];

          if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).isNull(currowLeaveTabID)) {
            return;
          }

          this._currowLeaveData = (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
            error: Error()
          }), GCache) : GCache).SelectGame.getGameLevelTabInfo(this._currowGameID, currowLeaveTabID);
          var levelData = (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
            error: Error()
          }), GCache) : GCache).SelectGame.getGameLevelRoomSortList(this._currowGameID, currowLeaveTabID);

          if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).table_isEmpty(levelData)) {
            return;
          }

          console.log("显示不洗牌场次列表", levelData);
          var currentMaxIndex = this.hightLightGameLevel(levelData);
          console.log("显示不洗牌场次高亮", currentMaxIndex);

          for (var i = 0; i < levelData.length; i++) {
            var value = levelData[i];

            if (i == currentMaxIndex) {
              this.createCommonItem(this.curRoomType, value, true);
            } else {
              this.createCommonItem(this.curRoomType, value);
            }
          }
        }
        /** 通用:创建房间条目 */


        createCommonItem(play, itemData, isHightLight) {
          if (isHightLight === void 0) {
            isHightLight = false;
          }

          // room:ante:level 该场次的等级，初级，中级，高级，精英，大师
          var layout_item = instantiate(this.roomNode);
          var img_bg = layout_item.getChildByName("img_item");
          var icon = layout_item.getChildByName("img_icon");
          this.setSpriteFrame(img_bg, itemData.icon);
          var bottomScore = layout_item.getChildByName("label_score");
          var goinScore = layout_item.getChildByName("label_into");
          bottomScore.getComponent(Label).string = String(itemData.base_chip || 0);
          var lowScore = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).string_moneyToShortNumber(itemData.min_money || 0);
          var hightScore = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).string_moneyToShortNumber(itemData.max_money || 0); // //小于等于0代表无上限

          if (itemData.max_money <= 0) {
            goinScore.getComponent(Label).string = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).string_formatByLua("准入%s以上", lowScore);
          } else {
            goinScore.getComponent(Label).string = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).string_formatByLua("准入%s-%s", lowScore, hightScore);
          }

          if (isHightLight) {
            var img_circle = layout_item.getChildByName("img_circle");
            tween(img_circle).by(30, {
              rotation: new Quat(0, 0, 0, 0)
            }).call(() => {}).start();
            this.selectAni(layout_item);
          }

          icon.getComponent(Sprite).spriteFrame = this.selectAtlas.spriteFrames["selectField/icon_" + this.roomAnteLevel[itemData.levelname]];
          layout_item["data"] = itemData;
          layout_item.active = true;
          this.roomListNode.addChild(layout_item);
        }

        hightLightGameLevel(data) {
          var currentMaxIndex = 0;
          var currentMin = (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
            error: Error()
          }), GCache) : GCache).User.getUserMoneyByID(0);

          for (var i = 0; i < data.length; i++) {
            var v = data[i];
            var lowLimit = v.min_money || 0;
            var different = (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
              error: Error()
            }), GCache) : GCache).User.getUserMoneyByID(0) - lowLimit;

            if (different >= 0 && different <= currentMin) {
              currentMaxIndex = i;
              currentMin = different;
            }
          }

          return currentMaxIndex;
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
                node.getComponent(Sprite).spriteFrame = spriteFrame;
              }
            });
          }
        }

        selectAni(node) {
          node.getChildByName("img_select").active = true;
          var spineNode = node.getChildByName("spineNode");

          if (spineNode) {
            var chooseAni = {
              parentNode: spineNode,
              resConf: (_crd && GameRes === void 0 ? (_reportPossibleCrUseOfGameRes({
                error: Error()
              }), GameRes) : GameRes).Spine_Xc_Choice,
              aniName: "XC_xuanzhong_light",
              trackIndex: 0,
              isLoop: true,
              toPos: null
            };
            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
              error: Error()
            }), AppEvent) : AppEvent).SYS_ANI_PLAY, chooseAni);
            var chooseLightAni = {
              parentNode: spineNode,
              resConf: (_crd && GameRes === void 0 ? (_reportPossibleCrUseOfGameRes({
                error: Error()
              }), GameRes) : GameRes).Spine_Xc_Choice,
              aniName: "XC_xuanzhong_light2",
              trackIndex: 0,
              isLoop: true,
              toPos: null
            };
            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
              error: Error()
            }), AppEvent) : AppEvent).SYS_ANI_PLAY, chooseLightAni);
          }
        } //点击房间


        onClickLevelRoom(event) {
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).SYS_PLAY_EFFECT, (_crd && AppSound === void 0 ? (_reportPossibleCrUseOfAppSound({
            error: Error()
          }), AppSound) : AppSound).CommClick); // EventManager.dispatch(AppEvent.REPORT_CLIENT_CLICK, { eventID: ReportConfig.selectGame_6 });

          var node = event.target;

          for (var child of this.roomListNode.children) {
            child.getChildByName("img_select").active = false;
            child.getChildByName("spineNode").removeAllChildren();
          }

          this.selectAni(node);
          var itemData = node["data"];
          (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
            error: Error()
          }), GCache) : GCache).SelectGame.checkIntoRoom(this._currowGameID, itemData);
        } //点击返回大厅按钮


        onReturnClick(event) {
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).SYS_PLAY_EFFECT, (_crd && AppSound === void 0 ? (_reportPossibleCrUseOfAppSound({
            error: Error()
          }), AppSound) : AppSound).CommClick); // EventManager.dispatch(AppEvent.REPORT_CLIENT_CLICK, { eventID: ReportConfig.selectGame_1 });
          // GCache.SelectGame.saveChooseData(null);

          this.node.destroy();
        } //点击角色按钮


        onRoleClick(event) {// EventManager.dispatch(AppEvent.SYS_PLAY_EFFECT, AppSound.CommClick);
          // EventManager.dispatch(AppEvent.VIEW_UI_OPEN, UIID.RoleScenePrefab, {}, {});
        } //点击切换可吃按钮


        onClickKeChi(event) {
          console.log("onClickKeChi", this.curRoomType);

          if (this.curRoomType == (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
            error: Error()
          }), GConstants) : GConstants).GameTab.kechi) {
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
            }), ReportConfig) : ReportConfig).selectGame_7
          });
          this.curRoomType = (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
            error: Error()
          }), GConstants) : GConstants).GameTab.kechi;
          this.selectLanternTab();
        } //点击切换不可吃按钮


        onClickBuKeChi(event) {
          console.log("onClickKeChi", this.curRoomType);

          if (this.curRoomType == (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
            error: Error()
          }), GConstants) : GConstants).GameTab.bukechi) {
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
            }), ReportConfig) : ReportConfig).selectGame_7
          });
          this.curRoomType = (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
            error: Error()
          }), GConstants) : GConstants).GameTab.bukechi;
          this.selectLanternTab();
        } //快速开始


        onClickQuickStart(event) {
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).SYS_PLAY_EFFECT, (_crd && AppSound === void 0 ? (_reportPossibleCrUseOfAppSound({
            error: Error()
          }), AppSound) : AppSound).CommClick);
          var currowLeaveTabID = this.roomTabID[this.curRoomType];

          if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).isNull(currowLeaveTabID)) {
            return;
          }

          (_crd && GCache === void 0 ? (_reportPossibleCrUseOfGCache({
            error: Error()
          }), GCache) : GCache).SelectGame.checkQuickGame(this._currowGameID, currowLeaveTabID);
        }
        /** 点击了规则按钮 */


        onClickBtnRule(event) {
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
          }), AppEvent) : AppEvent).VIEW_UI_OPEN, (_crd && UIID === void 0 ? (_reportPossibleCrUseOfUIID({
            error: Error()
          }), UIID) : UIID).PictureTabDialog, "玩法规则");
        } //销毁


        onDestroy() {// //通知:请求推荐弹窗
          // EventManager.dispatch(AppEvent.RECOMMEND_POP_GET, GConstants.PopupPos.POS_BACK_HALL)
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "spineQianNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "spineHouNode", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "spineRoleNode", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "hudieAni", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "btnAni", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "choiceAni", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "roomNode", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "roomListNode", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "roomListView", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "roleName", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "kechiLight", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "bukechiLight", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "nodeTips", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "selectAtlas", [_dec16], {
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
//# sourceMappingURL=2b55c9c109eec05e31b0f2d386cab14ac9bcc54a.js.map