System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, GamePackage, GetUIID, UIID, inf_LayerType, FXJUIID, _crd, FXJRes, FXJUIConfig;

  function _reportPossibleCrUseOfGamePackage(extras) {
    _reporterNs.report("GamePackage", "../../../config/GameRes", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGetUIID(extras) {
    _reporterNs.report("GetUIID", "../../../config/UIConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIID(extras) {
    _reporterNs.report("UIID", "../../../config/UIConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfinf_LayerType(extras) {
    _reporterNs.report("inf_LayerType", "../../../framework/InterfaceDefines", _context.meta, extras);
  }

  _export("FXJUIID", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      GamePackage = _unresolved_2.GamePackage;
    }, function (_unresolved_3) {
      GetUIID = _unresolved_3.GetUIID;
      UIID = _unresolved_3.UIID;
    }, function (_unresolved_4) {
      inf_LayerType = _unresolved_4.inf_LayerType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d9350znbBNDBJEfns9k4YmE", "FXJRes", undefined);

      _export("FXJUIID", FXJUIID = class FXJUIID extends (_crd && UIID === void 0 ? (_reportPossibleCrUseOfUIID({
        error: Error()
      }), UIID) : UIID) {});

      FXJUIID.GameSettlePrefab = (_crd && GetUIID === void 0 ? (_reportPossibleCrUseOfGetUIID({
        error: Error()
      }), GetUIID) : GetUIID)();
      FXJUIID.GameMatchPrefab = (_crd && GetUIID === void 0 ? (_reportPossibleCrUseOfGetUIID({
        error: Error()
      }), GetUIID) : GetUIID)();
      FXJUIID.GameChatPrefab = (_crd && GetUIID === void 0 ? (_reportPossibleCrUseOfGetUIID({
        error: Error()
      }), GetUIID) : GetUIID)();
      FXJUIID.ToolBarPrefab = (_crd && GetUIID === void 0 ? (_reportPossibleCrUseOfGetUIID({
        error: Error()
      }), GetUIID) : GetUIID)();
      FXJUIID.GameHeadInfoPrefab = (_crd && GetUIID === void 0 ? (_reportPossibleCrUseOfGetUIID({
        error: Error()
      }), GetUIID) : GetUIID)();

      _export("FXJRes", FXJRes = {
        /******************************************预制体********************************************** */
        //菜单UI
        Prefab_Menu: {
          bundle: (_crd && GamePackage === void 0 ? (_reportPossibleCrUseOfGamePackage({
            error: Error()
          }), GamePackage) : GamePackage).GAME,
          path: "prefab/GameMenuPrefab"
        },
        //match player
        Prefab_Match_Player: {
          bundle: (_crd && GamePackage === void 0 ? (_reportPossibleCrUseOfGamePackage({
            error: Error()
          }), GamePackage) : GamePackage).GAME,
          path: "module/match/res/prefab/player"
        },
        //match
        Prefab_Match: {
          bundle: (_crd && GamePackage === void 0 ? (_reportPossibleCrUseOfGamePackage({
            error: Error()
          }), GamePackage) : GamePackage).GAME,
          path: "module/match/res/prefab/match"
        },
        //match player
        Prefab_Opmgr: {
          bundle: (_crd && GamePackage === void 0 ? (_reportPossibleCrUseOfGamePackage({
            error: Error()
          }), GamePackage) : GamePackage).GAME,
          path: "module/opmgr/res/prefab/opmgr"
        },
        //match
        Prefab_Opmgr_Item: {
          bundle: (_crd && GamePackage === void 0 ? (_reportPossibleCrUseOfGamePackage({
            error: Error()
          }), GamePackage) : GamePackage).GAME,
          path: "module/opmgr/res/prefab/opmgrItem"
        },
        //card
        Prefab_Opmgr_Image: {
          bundle: (_crd && GamePackage === void 0 ? (_reportPossibleCrUseOfGamePackage({
            error: Error()
          }), GamePackage) : GamePackage).GAME,
          path: "module/opmgr/res/image/opmgr",
          plistKey: "{0}"
        },
        //xiaobo
        Spine_XiaoBo: {
          bundle: (_crd && GamePackage === void 0 ? (_reportPossibleCrUseOfGamePackage({
            error: Error()
          }), GamePackage) : GamePackage).GAMERES,
          path: "spineAni/role/xiaobo"
        },
        //xiaoya
        Spine_XiaoYa: {
          bundle: (_crd && GamePackage === void 0 ? (_reportPossibleCrUseOfGamePackage({
            error: Error()
          }), GamePackage) : GamePackage).GAMERES,
          path: "spineAni/role/xiaoya"
        },
        //card
        Prefab_Match_Image: {
          bundle: (_crd && GamePackage === void 0 ? (_reportPossibleCrUseOfGamePackage({
            error: Error()
          }), GamePackage) : GamePackage).GAME,
          path: "module/match/res/image/match",
          plistKey: "{0}"
        },
        //card
        Prefab_Card: {
          bundle: (_crd && GamePackage === void 0 ? (_reportPossibleCrUseOfGamePackage({
            error: Error()
          }), GamePackage) : GamePackage).GAME,
          path: "image/card/card",
          plistKey: "{0}"
        },
        //op
        Prefab_op: {
          bundle: (_crd && GamePackage === void 0 ? (_reportPossibleCrUseOfGamePackage({
            error: Error()
          }), GamePackage) : GamePackage).GAME,
          path: "module/opInfo/res/prefab/OpInfo"
        },
        //更多菜单UI
        Prefab_ToolBar: {
          bundle: (_crd && GamePackage === void 0 ? (_reportPossibleCrUseOfGamePackage({
            error: Error()
          }), GamePackage) : GamePackage).GAME,
          path: "prefab/ToolBarPrefab"
        },
        //游戏聊天面板
        Prefab_GameChat: {
          bundle: (_crd && GamePackage === void 0 ? (_reportPossibleCrUseOfGamePackage({
            error: Error()
          }), GamePackage) : GamePackage).GAME,
          path: "prefab/GameChatPrefab"
        },
        //游戏结算
        Prefab_GameSettle: {
          bundle: (_crd && GamePackage === void 0 ? (_reportPossibleCrUseOfGamePackage({
            error: Error()
          }), GamePackage) : GamePackage).GAME,
          path: "module/settle/res/prefab/settle"
        },
        //玩家bottomItem
        Prefab_Bottom_Item: {
          bundle: (_crd && GamePackage === void 0 ? (_reportPossibleCrUseOfGamePackage({
            error: Error()
          }), GamePackage) : GamePackage).GAME,
          path: "module/settle/res/prefab/bottomItem"
        },
        //结算资源
        Prefab_Settle_Image: {
          bundle: (_crd && GamePackage === void 0 ? (_reportPossibleCrUseOfGamePackage({
            error: Error()
          }), GamePackage) : GamePackage).GAME,
          path: "module/settle/res/image/settle",
          plistKey: "{0}"
        },
        //失败钱资源
        Prefab_Settle_Fail: {
          bundle: (_crd && GamePackage === void 0 ? (_reportPossibleCrUseOfGamePackage({
            error: Error()
          }), GamePackage) : GamePackage).GAME,
          path: "module/settle/res/image/settle_fail",
          plistKey: "{0}"
        },
        //赢钱资源  
        Prefab_Settle_Win: {
          bundle: (_crd && GamePackage === void 0 ? (_reportPossibleCrUseOfGamePackage({
            error: Error()
          }), GamePackage) : GamePackage).GAME,
          path: "module/settle/res/image/settle_win",
          plistKey: "{0}"
        },
        //赢胡次数资源
        Prefab_Settle_Hu_Win: {
          bundle: (_crd && GamePackage === void 0 ? (_reportPossibleCrUseOfGamePackage({
            error: Error()
          }), GamePackage) : GamePackage).GAME,
          path: "module/settle/res/image/settle_hu_win",
          plistKey: "{0}"
        },
        //输胡次数资源
        Prefab_Settle_Hu_Fail: {
          bundle: (_crd && GamePackage === void 0 ? (_reportPossibleCrUseOfGamePackage({
            error: Error()
          }), GamePackage) : GamePackage).GAME,
          path: "module/settle/res/image/settle_hu_fail",
          plistKey: "{0}"
        },

        /** 玩家节点*/
        Prefab_NodeUser: {
          bundle: (_crd && GamePackage === void 0 ? (_reportPossibleCrUseOfGamePackage({
            error: Error()
          }), GamePackage) : GamePackage).GAME,
          path: "prefab/NodeUserPrefab"
        },
        //麻将桌
        Prefab_Desk: {
          bundle: (_crd && GamePackage === void 0 ? (_reportPossibleCrUseOfGamePackage({
            error: Error()
          }), GamePackage) : GamePackage).GAME,
          path: "prefab/GameDeskPrefab"
        },
        //手牌
        Prefab_HandCard: {
          bundle: (_crd && GamePackage === void 0 ? (_reportPossibleCrUseOfGamePackage({
            error: Error()
          }), GamePackage) : GamePackage).GAME,
          path: "prefab/GameHandCardPrefab"
        },
        //游戏内玩家个人信息
        GameHeadInfoPrefab: {
          bundle: (_crd && GamePackage === void 0 ? (_reportPossibleCrUseOfGamePackage({
            error: Error()
          }), GamePackage) : GamePackage).GAME,
          path: "prefab/GameHeadInfoPrefab"
        },

        /******************************************动画资源********************************************** */
        //互动道具动画
        Spine_Hddj: {
          bundle: (_crd && GamePackage === void 0 ? (_reportPossibleCrUseOfGamePackage({
            error: Error()
          }), GamePackage) : GamePackage).GAMERES,
          path: "spineAni/hdprops/HD_daoju.skel"
        },
        Spine_Emoji: {
          bundle: (_crd && GamePackage === void 0 ? (_reportPossibleCrUseOfGamePackage({
            error: Error()
          }), GamePackage) : GamePackage).GAMERES,
          path: "spineAni/emoji/emoji.json"
        },
        // 开始动画
        Spine_Start: {
          bundle: (_crd && GamePackage === void 0 ? (_reportPossibleCrUseOfGamePackage({
            error: Error()
          }), GamePackage) : GamePackage).GAMERES,
          path: "spineAni/start/MJ_DJKS.skel"
        },
        // 结束动画
        Spine_Over: {
          bundle: (_crd && GamePackage === void 0 ? (_reportPossibleCrUseOfGamePackage({
            error: Error()
          }), GamePackage) : GamePackage).GAMERES,
          path: "spineAni/over/MJ_DJJS.skel"
        },
        // 胡牌动画
        Spine_Hu: {
          bundle: (_crd && GamePackage === void 0 ? (_reportPossibleCrUseOfGamePackage({
            error: Error()
          }), GamePackage) : GamePackage).GAMERES,
          path: "spineAni/hu/mj_hu.skel"
        },

        /******************************************游戏图集资源********************************************** */
        //桌子资源图集
        Atlas_Game_Desk: {
          bundle: (_crd && GamePackage === void 0 ? (_reportPossibleCrUseOfGamePackage({
            error: Error()
          }), GamePackage) : GamePackage).GAME,
          path: "image/desk/desk",
          plistKey: "doudizhu/desk/{0}"
        },
        //小扑克牌数字图集
        Atlas_Game_CardNum: {
          bundle: (_crd && GamePackage === void 0 ? (_reportPossibleCrUseOfGamePackage({
            error: Error()
          }), GamePackage) : GamePackage).GAME,
          path: "image/handCard/card_num/card_num"
        },
        //玩家相关图集
        Atlas_Player_Common: {
          bundle: (_crd && GamePackage === void 0 ? (_reportPossibleCrUseOfGamePackage({
            error: Error()
          }), GamePackage) : GamePackage).GAME,
          path: "image/player/player",
          plistKey: "doudizhu/player/{0}"
        },
        //默认头像-男
        Picture_UserBigHead_boy: {
          bundle: (_crd && GamePackage === void 0 ? (_reportPossibleCrUseOfGamePackage({
            error: Error()
          }), GamePackage) : GamePackage).GAME,
          path: "image/player/big_male_head"
        },
        //默认头像-女
        Picture_UserBigHead_girl: {
          bundle: (_crd && GamePackage === void 0 ? (_reportPossibleCrUseOfGamePackage({
            error: Error()
          }), GamePackage) : GamePackage).GAME,
          path: "image/player/big_female_head"
        },
        //麻将子资源
        Picture_Game_Card: {
          bundle: (_crd && GamePackage === void 0 ? (_reportPossibleCrUseOfGamePackage({
            error: Error()
          }), GamePackage) : GamePackage).GAME,
          path: "mesh/majiang/card/{0}/texture"
        },
        //麻将指示灯资源
        Picture_Game_Desk_Light: {
          bundle: (_crd && GamePackage === void 0 ? (_reportPossibleCrUseOfGamePackage({
            error: Error()
          }), GamePackage) : GamePackage).GAME,
          path: "mesh/desk/{0}/texture"
        },
        //麻将倒计时资源
        Picture_Game_Desk_Timer: {
          bundle: (_crd && GamePackage === void 0 ? (_reportPossibleCrUseOfGamePackage({
            error: Error()
          }), GamePackage) : GamePackage).GAME,
          path: "mesh/daojishi/{0}/texture"
        },
        //互动道具图集 gameHeadInfo
        Atlas_Game_EmojiProp: {
          bundle: (_crd && GamePackage === void 0 ? (_reportPossibleCrUseOfGamePackage({
            error: Error()
          }), GamePackage) : GamePackage).GAME,
          path: "image/gameHeadInfo/emojiProp",
          plistKey: "{0}"
        }
      });

      _export("FXJUIConfig", FXJUIConfig = {
        //游戏聊天
        [FXJUIID.GameChatPrefab]: {
          layer: (_crd && inf_LayerType === void 0 ? (_reportPossibleCrUseOfinf_LayerType({
            error: Error()
          }), inf_LayerType) : inf_LayerType).PopUp,
          prefab: FXJRes.Prefab_GameChat.path,
          bundle: FXJRes.Prefab_GameChat.bundle
        },
        //游戏场景更多菜单UI
        [FXJUIID.ToolBarPrefab]: {
          layer: (_crd && inf_LayerType === void 0 ? (_reportPossibleCrUseOfinf_LayerType({
            error: Error()
          }), inf_LayerType) : inf_LayerType).PopUp,
          prefab: FXJRes.Prefab_ToolBar.path,
          bundle: FXJRes.Prefab_ToolBar.bundle
        },
        //游戏结算
        [FXJUIID.GameSettlePrefab]: {
          layer: (_crd && inf_LayerType === void 0 ? (_reportPossibleCrUseOfinf_LayerType({
            error: Error()
          }), inf_LayerType) : inf_LayerType).PopUp,
          prefab: FXJRes.Prefab_GameSettle.path,
          bundle: FXJRes.Prefab_GameSettle.bundle
        },
        //匹配
        [FXJUIID.GameMatchPrefab]: {
          layer: (_crd && inf_LayerType === void 0 ? (_reportPossibleCrUseOfinf_LayerType({
            error: Error()
          }), inf_LayerType) : inf_LayerType).PopUp,
          prefab: FXJRes.Prefab_Match.path,
          bundle: FXJRes.Prefab_Match.bundle
        },
        //游戏内玩家个人信息
        [FXJUIID.GameHeadInfoPrefab]: {
          layer: (_crd && inf_LayerType === void 0 ? (_reportPossibleCrUseOfinf_LayerType({
            error: Error()
          }), inf_LayerType) : inf_LayerType).PopUp,
          prefab: FXJRes.GameHeadInfoPrefab.path,
          bundle: FXJRes.GameHeadInfoPrefab.bundle
        }
      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d9880ba87afa7cb561cfbfe1463719c2eaf68105.js.map