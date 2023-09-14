System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, inf_LayerType, GameRes, UIID, _crd, AppUIID, GetUIID, PreloadID, ReleaseID, UIConfigData, UIDataMapping;

  function _reportPossibleCrUseOfinf_LayerType(extras) {
    _reporterNs.report("inf_LayerType", "../framework/InterfaceDefines", _context.meta, extras);
  }

  function _reportPossibleCrUseOfinf_UIConfig(extras) {
    _reporterNs.report("inf_UIConfig", "../framework/InterfaceDefines", _context.meta, extras);
  }

  function _reportPossibleCrUseOfinf_UIDataConfig(extras) {
    _reporterNs.report("inf_UIDataConfig", "../framework/InterfaceDefines", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameRes(extras) {
    _reporterNs.report("GameRes", "./GameRes", _context.meta, extras);
  }

  _export({
    UIID: void 0,
    PreloadID: void 0,
    ReleaseID: void 0
  });

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      inf_LayerType = _unresolved_2.inf_LayerType;
    }, function (_unresolved_3) {
      GameRes = _unresolved_3.GameRes;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5e2c5M4Lw9D/Jgosyb+wBSB", "UIConfig", undefined);

      //全局唯一
      AppUIID = 0;
      /**获取一个新的UIID */

      _export("GetUIID", GetUIID = function GetUIID() {
        AppUIID = AppUIID + 1;
        return AppUIID;
      });
      /** 界面唯一标识（方便服务器通过编号数据触发界面打开） */


      _export("UIID", UIID = class UIID {});
      /**预加载的ID */


      UIID.LoginPrefab = GetUIID();
      UIID.ToastTip = GetUIID();
      UIID.SysPopWindow = GetUIID();
      UIID.PopWindow = GetUIID();
      UIID.NetLoading = GetUIID();
      UIID.HallPrefab = GetUIID();
      UIID.BankupGift = GetUIID();
      UIID.PlayerInfoCenter = GetUIID();
      UIID.SelectLevelPrefab = GetUIID();
      UIID.NewUserGiftPrefab = GetUIID();
      UIID.SettingPrefab = GetUIID();
      UIID.GameScenePrefab = GetUIID();
      UIID.FriendPrefab = GetUIID();
      UIID.GongXiHuoDePrefab = GetUIID();
      UIID.UserAgreePrivate = GetUIID();
      UIID.PictureDialog = GetUIID();
      UIID.PictureTabDialog = GetUIID();
      UIID.MallPrefab = GetUIID();
      UIID.BuyDialogPrefab = GetUIID();
      UIID.BuyPropDialogPrefab = GetUIID();
      UIID.SigninPrefab = GetUIID();
      UIID.MailPrefab = GetUIID();
      UIID.GiftDiscountPrefab = GetUIID();
      UIID.AtyCenterPrefab = GetUIID();
      UIID.FirstPayPrefab = GetUIID();

      (function (PreloadID) {
        PreloadID[PreloadID["START"] = 1] = "START";
        PreloadID[PreloadID["HALL"] = 2] = "HALL";
        PreloadID[PreloadID["COMMON"] = 3] = "COMMON";
        PreloadID[PreloadID["GAME"] = 4] = "GAME";
      })(PreloadID || _export("PreloadID", PreloadID = {}));

      (function (ReleaseID) {
        ReleaseID[ReleaseID["COMMON"] = 1] = "COMMON";
        ReleaseID[ReleaseID["HALL"] = 2] = "HALL";
        ReleaseID[ReleaseID["GAME"] = 3] = "GAME";
      })(ReleaseID || _export("ReleaseID", ReleaseID = {}));

      /** 打开界面方式的配置数据 */
      _export("UIConfigData", UIConfigData = {
        [UIID.ToastTip]: {
          layer: (_crd && inf_LayerType === void 0 ? (_reportPossibleCrUseOfinf_LayerType({
            error: Error()
          }), inf_LayerType) : inf_LayerType).Notify,
          prefab: (_crd && GameRes === void 0 ? (_reportPossibleCrUseOfGameRes({
            error: Error()
          }), GameRes) : GameRes).Prefab_ToastTip.path,
          bundle: (_crd && GameRes === void 0 ? (_reportPossibleCrUseOfGameRes({
            error: Error()
          }), GameRes) : GameRes).Prefab_ToastTip.bundle
        },
        [UIID.NetLoading]: {
          layer: (_crd && inf_LayerType === void 0 ? (_reportPossibleCrUseOfinf_LayerType({
            error: Error()
          }), inf_LayerType) : inf_LayerType).NetWindow,
          prefab: (_crd && GameRes === void 0 ? (_reportPossibleCrUseOfGameRes({
            error: Error()
          }), GameRes) : GameRes).Prefab_NetLoading.path,
          bundle: (_crd && GameRes === void 0 ? (_reportPossibleCrUseOfGameRes({
            error: Error()
          }), GameRes) : GameRes).Prefab_NetLoading.bundle
        },
        [UIID.SysPopWindow]: {
          layer: (_crd && inf_LayerType === void 0 ? (_reportPossibleCrUseOfinf_LayerType({
            error: Error()
          }), inf_LayerType) : inf_LayerType).Alert,
          prefab: (_crd && GameRes === void 0 ? (_reportPossibleCrUseOfGameRes({
            error: Error()
          }), GameRes) : GameRes).Prefab_DialogWindow.path,
          bundle: (_crd && GameRes === void 0 ? (_reportPossibleCrUseOfGameRes({
            error: Error()
          }), GameRes) : GameRes).Prefab_DialogWindow.bundle
        },
        [UIID.PopWindow]: {
          layer: (_crd && inf_LayerType === void 0 ? (_reportPossibleCrUseOfinf_LayerType({
            error: Error()
          }), inf_LayerType) : inf_LayerType).PopUp,
          prefab: (_crd && GameRes === void 0 ? (_reportPossibleCrUseOfGameRes({
            error: Error()
          }), GameRes) : GameRes).Prefab_DialogWindow.path,
          bundle: (_crd && GameRes === void 0 ? (_reportPossibleCrUseOfGameRes({
            error: Error()
          }), GameRes) : GameRes).Prefab_DialogWindow.bundle
        },
        //用户协议和隐私政策界面
        [UIID.UserAgreePrivate]: {
          layer: (_crd && inf_LayerType === void 0 ? (_reportPossibleCrUseOfinf_LayerType({
            error: Error()
          }), inf_LayerType) : inf_LayerType).PopUp,
          prefab: (_crd && GameRes === void 0 ? (_reportPossibleCrUseOfGameRes({
            error: Error()
          }), GameRes) : GameRes).Prefab_UserAgreePrivate.path,
          bundle: (_crd && GameRes === void 0 ? (_reportPossibleCrUseOfGameRes({
            error: Error()
          }), GameRes) : GameRes).Prefab_UserAgreePrivate.bundle
        },
        //图片提示对话框(适龄提示)
        [UIID.PictureDialog]: {
          layer: (_crd && inf_LayerType === void 0 ? (_reportPossibleCrUseOfinf_LayerType({
            error: Error()
          }), inf_LayerType) : inf_LayerType).PopUp,
          prefab: (_crd && GameRes === void 0 ? (_reportPossibleCrUseOfGameRes({
            error: Error()
          }), GameRes) : GameRes).Prefab_PictureDialog.path,
          bundle: (_crd && GameRes === void 0 ? (_reportPossibleCrUseOfGameRes({
            error: Error()
          }), GameRes) : GameRes).Prefab_PictureDialog.bundle
        },
        //图片提示对话框带tab(规则说明界面)
        [UIID.PictureTabDialog]: {
          layer: (_crd && inf_LayerType === void 0 ? (_reportPossibleCrUseOfinf_LayerType({
            error: Error()
          }), inf_LayerType) : inf_LayerType).PopUp,
          prefab: (_crd && GameRes === void 0 ? (_reportPossibleCrUseOfGameRes({
            error: Error()
          }), GameRes) : GameRes).Prefab_PictureTabDialog.path,
          bundle: (_crd && GameRes === void 0 ? (_reportPossibleCrUseOfGameRes({
            error: Error()
          }), GameRes) : GameRes).Prefab_PictureTabDialog.bundle
        },
        //登录界面
        [UIID.LoginPrefab]: {
          layer: (_crd && inf_LayerType === void 0 ? (_reportPossibleCrUseOfinf_LayerType({
            error: Error()
          }), inf_LayerType) : inf_LayerType).UI,
          prefab: (_crd && GameRes === void 0 ? (_reportPossibleCrUseOfGameRes({
            error: Error()
          }), GameRes) : GameRes).Prefab_Login.path,
          bundle: (_crd && GameRes === void 0 ? (_reportPossibleCrUseOfGameRes({
            error: Error()
          }), GameRes) : GameRes).Prefab_Login.bundle
        },
        //大厅界面
        [UIID.HallPrefab]: {
          layer: (_crd && inf_LayerType === void 0 ? (_reportPossibleCrUseOfinf_LayerType({
            error: Error()
          }), inf_LayerType) : inf_LayerType).UI,
          prefab: (_crd && GameRes === void 0 ? (_reportPossibleCrUseOfGameRes({
            error: Error()
          }), GameRes) : GameRes).Prefab_HallScene.path,
          bundle: (_crd && GameRes === void 0 ? (_reportPossibleCrUseOfGameRes({
            error: Error()
          }), GameRes) : GameRes).Prefab_HallScene.bundle
        },
        [UIID.BankupGift]: {
          layer: (_crd && inf_LayerType === void 0 ? (_reportPossibleCrUseOfinf_LayerType({
            error: Error()
          }), inf_LayerType) : inf_LayerType).PopUp,
          prefab: (_crd && GameRes === void 0 ? (_reportPossibleCrUseOfGameRes({
            error: Error()
          }), GameRes) : GameRes).Prefab_BankupGift.path,
          bundle: (_crd && GameRes === void 0 ? (_reportPossibleCrUseOfGameRes({
            error: Error()
          }), GameRes) : GameRes).Prefab_BankupGift.bundle
        },
        [UIID.PlayerInfoCenter]: {
          layer: (_crd && inf_LayerType === void 0 ? (_reportPossibleCrUseOfinf_LayerType({
            error: Error()
          }), inf_LayerType) : inf_LayerType).PopUp,
          prefab: (_crd && GameRes === void 0 ? (_reportPossibleCrUseOfGameRes({
            error: Error()
          }), GameRes) : GameRes).Prefab_PlayerInfoCenter.path,
          bundle: (_crd && GameRes === void 0 ? (_reportPossibleCrUseOfGameRes({
            error: Error()
          }), GameRes) : GameRes).Prefab_PlayerInfoCenter.bundle
        },
        // [UIID.DgzPrefab]: { layer: inf_LayerType.UI, prefab: GameRes.Prefab_DgzLevelChoose.path, bundle: GameRes.Prefab_DgzLevelChoose.bundle },
        //游戏选场界面
        [UIID.SelectLevelPrefab]: {
          layer: (_crd && inf_LayerType === void 0 ? (_reportPossibleCrUseOfinf_LayerType({
            error: Error()
          }), inf_LayerType) : inf_LayerType).UI,
          prefab: (_crd && GameRes === void 0 ? (_reportPossibleCrUseOfGameRes({
            error: Error()
          }), GameRes) : GameRes).Prefab_SelectLevelScene.path,
          bundle: (_crd && GameRes === void 0 ? (_reportPossibleCrUseOfGameRes({
            error: Error()
          }), GameRes) : GameRes).Prefab_SelectLevelScene.bundle
        },
        [UIID.NewUserGiftPrefab]: {
          layer: (_crd && inf_LayerType === void 0 ? (_reportPossibleCrUseOfinf_LayerType({
            error: Error()
          }), inf_LayerType) : inf_LayerType).PopUp,
          prefab: (_crd && GameRes === void 0 ? (_reportPossibleCrUseOfGameRes({
            error: Error()
          }), GameRes) : GameRes).Prefab_NewUserGift.path,
          bundle: (_crd && GameRes === void 0 ? (_reportPossibleCrUseOfGameRes({
            error: Error()
          }), GameRes) : GameRes).Prefab_NewUserGift.bundle
        },
        [UIID.SettingPrefab]: {
          layer: (_crd && inf_LayerType === void 0 ? (_reportPossibleCrUseOfinf_LayerType({
            error: Error()
          }), inf_LayerType) : inf_LayerType).PopUp,
          prefab: (_crd && GameRes === void 0 ? (_reportPossibleCrUseOfGameRes({
            error: Error()
          }), GameRes) : GameRes).Prefab_Setting.path,
          bundle: (_crd && GameRes === void 0 ? (_reportPossibleCrUseOfGameRes({
            error: Error()
          }), GameRes) : GameRes).Prefab_Setting.bundle
        },
        //游戏好友界面
        [UIID.FriendPrefab]: {
          layer: (_crd && inf_LayerType === void 0 ? (_reportPossibleCrUseOfinf_LayerType({
            error: Error()
          }), inf_LayerType) : inf_LayerType).PopUp,
          prefab: (_crd && GameRes === void 0 ? (_reportPossibleCrUseOfGameRes({
            error: Error()
          }), GameRes) : GameRes).Prefab_Friend.path,
          bundle: (_crd && GameRes === void 0 ? (_reportPossibleCrUseOfGameRes({
            error: Error()
          }), GameRes) : GameRes).Prefab_Friend.bundle
        },
        [UIID.SigninPrefab]: {
          layer: (_crd && inf_LayerType === void 0 ? (_reportPossibleCrUseOfinf_LayerType({
            error: Error()
          }), inf_LayerType) : inf_LayerType).PopUp,
          prefab: (_crd && GameRes === void 0 ? (_reportPossibleCrUseOfGameRes({
            error: Error()
          }), GameRes) : GameRes).Prefab_Signin.path,
          bundle: (_crd && GameRes === void 0 ? (_reportPossibleCrUseOfGameRes({
            error: Error()
          }), GameRes) : GameRes).Prefab_Signin.bundle
        },
        // /**游戏场景所需要的预制体资源*/
        [UIID.GameScenePrefab]: {
          layer: (_crd && inf_LayerType === void 0 ? (_reportPossibleCrUseOfinf_LayerType({
            error: Error()
          }), inf_LayerType) : inf_LayerType).UI,
          prefab: (_crd && GameRes === void 0 ? (_reportPossibleCrUseOfGameRes({
            error: Error()
          }), GameRes) : GameRes).Prefab_GameScene.path,
          bundle: (_crd && GameRes === void 0 ? (_reportPossibleCrUseOfGameRes({
            error: Error()
          }), GameRes) : GameRes).Prefab_GameScene.bundle
        },
        //恭喜获得通用
        [UIID.GongXiHuoDePrefab]: {
          layer: (_crd && inf_LayerType === void 0 ? (_reportPossibleCrUseOfinf_LayerType({
            error: Error()
          }), inf_LayerType) : inf_LayerType).PopUp,
          prefab: (_crd && GameRes === void 0 ? (_reportPossibleCrUseOfGameRes({
            error: Error()
          }), GameRes) : GameRes).Prefab_GongXiHuoDe.path,
          bundle: (_crd && GameRes === void 0 ? (_reportPossibleCrUseOfGameRes({
            error: Error()
          }), GameRes) : GameRes).Prefab_GongXiHuoDe.bundle
        },
        //购买弹窗
        [UIID.BuyDialogPrefab]: {
          layer: (_crd && inf_LayerType === void 0 ? (_reportPossibleCrUseOfinf_LayerType({
            error: Error()
          }), inf_LayerType) : inf_LayerType).PopUp,
          prefab: (_crd && GameRes === void 0 ? (_reportPossibleCrUseOfGameRes({
            error: Error()
          }), GameRes) : GameRes).Prefab_BuyDialog.path,
          bundle: (_crd && GameRes === void 0 ? (_reportPossibleCrUseOfGameRes({
            error: Error()
          }), GameRes) : GameRes).Prefab_BuyDialog.bundle
        },
        //购买道具弹窗
        [UIID.BuyPropDialogPrefab]: {
          layer: (_crd && inf_LayerType === void 0 ? (_reportPossibleCrUseOfinf_LayerType({
            error: Error()
          }), inf_LayerType) : inf_LayerType).PopUp,
          prefab: (_crd && GameRes === void 0 ? (_reportPossibleCrUseOfGameRes({
            error: Error()
          }), GameRes) : GameRes).Prefab_BuyPropDialog.path,
          bundle: (_crd && GameRes === void 0 ? (_reportPossibleCrUseOfGameRes({
            error: Error()
          }), GameRes) : GameRes).Prefab_BuyPropDialog.bundle
        },
        //商城
        [UIID.MallPrefab]: {
          layer: (_crd && inf_LayerType === void 0 ? (_reportPossibleCrUseOfinf_LayerType({
            error: Error()
          }), inf_LayerType) : inf_LayerType).PopUp,
          prefab: (_crd && GameRes === void 0 ? (_reportPossibleCrUseOfGameRes({
            error: Error()
          }), GameRes) : GameRes).Prefab_Mall.path,
          bundle: (_crd && GameRes === void 0 ? (_reportPossibleCrUseOfGameRes({
            error: Error()
          }), GameRes) : GameRes).Prefab_Mall.bundle
        },
        //游戏邮箱界面
        [UIID.MailPrefab]: {
          layer: (_crd && inf_LayerType === void 0 ? (_reportPossibleCrUseOfinf_LayerType({
            error: Error()
          }), inf_LayerType) : inf_LayerType).PopUp,
          prefab: (_crd && GameRes === void 0 ? (_reportPossibleCrUseOfGameRes({
            error: Error()
          }), GameRes) : GameRes).Prefab_Mail.path,
          bundle: (_crd && GameRes === void 0 ? (_reportPossibleCrUseOfGameRes({
            error: Error()
          }), GameRes) : GameRes).Prefab_Mail.bundle
        },
        //每日特价礼包界面
        [UIID.GiftDiscountPrefab]: {
          layer: (_crd && inf_LayerType === void 0 ? (_reportPossibleCrUseOfinf_LayerType({
            error: Error()
          }), inf_LayerType) : inf_LayerType).PopUp,
          prefab: (_crd && GameRes === void 0 ? (_reportPossibleCrUseOfGameRes({
            error: Error()
          }), GameRes) : GameRes).Prefab_GiftDiscount.path,
          bundle: (_crd && GameRes === void 0 ? (_reportPossibleCrUseOfGameRes({
            error: Error()
          }), GameRes) : GameRes).Prefab_GiftDiscount.bundle
        },
        //活动中心界面
        [UIID.AtyCenterPrefab]: {
          layer: (_crd && inf_LayerType === void 0 ? (_reportPossibleCrUseOfinf_LayerType({
            error: Error()
          }), inf_LayerType) : inf_LayerType).PopUp,
          prefab: (_crd && GameRes === void 0 ? (_reportPossibleCrUseOfGameRes({
            error: Error()
          }), GameRes) : GameRes).Prefab_AtyCenter.path,
          bundle: (_crd && GameRes === void 0 ? (_reportPossibleCrUseOfGameRes({
            error: Error()
          }), GameRes) : GameRes).Prefab_AtyCenter.bundle
        },
        //首充
        [UIID.FirstPayPrefab]: {
          layer: (_crd && inf_LayerType === void 0 ? (_reportPossibleCrUseOfinf_LayerType({
            error: Error()
          }), inf_LayerType) : inf_LayerType).PopUp,
          prefab: (_crd && GameRes === void 0 ? (_reportPossibleCrUseOfGameRes({
            error: Error()
          }), GameRes) : GameRes).Prefab_FirstPay.path,
          bundle: (_crd && GameRes === void 0 ? (_reportPossibleCrUseOfGameRes({
            error: Error()
          }), GameRes) : GameRes).Prefab_FirstPay.bundle
        }
      }); // export const GameResPreLoad = {
      // 	/**进入大厅之前需要预加载的资源*/
      // 	[PreloadID.HALL]: [
      // 		//预制体资源
      // 		GameRes.Prefab_HallScene,
      // 		GameRes.Prefab_DgzLevelChoose,
      // 		GameRes.Prefab_NewUserGift,
      // 		//音效资源
      // 		GameRes.Audio_HallBg,
      // 		//图片资源
      // 	],
      // 	/**进入大厅后需要预加载的资源*/
      // 	[PreloadID.COMMON]: [
      // 		//预制体资源
      // 		GameRes.Prefab_BankupGift,
      // 		GameRes.Prefab_PlayerInfoCenter,
      // 		GameRes.Prefab_NetLoading,
      // 		//音效资源
      // 		GameRes.Audio_Button_Click,
      // 		//图片资源
      // 		GameRes.Picture_Setting_Btn_close,
      // 		GameRes.Picture_Setting_Btn_open,
      // 		GameRes.Picture_Hall_quick_logo,
      // 		GameRes.Picture_Hall_sibang_logo,
      // 		GameRes.Picture_Hall_yiguo_logo,
      // 		GameRes.Picture_UserBigHead_boy,
      // 		GameRes.Picture_UserBigHead_girl,
      // 	],
      // 	/**进入游戏场景前需要预加载的资源*/
      // 	[PreloadID.GAME]: [
      // 		//预制体资源
      // 		//音效资源
      // 		//图片资源
      // 	]
      // }
      // /**资源释放配置*/
      // export const GameResRelease = {
      // 	/**暂时不需要的资源*/
      // 	[ReleaseID.COMMON]: [
      // 		//预制体资源
      // 		//音效资源
      // 		//图片资源
      // 	],
      // 	/**进入大厅后可以释放的资源*/
      // 	[ReleaseID.HALL]: [
      // 		//预制体资源
      // 		//音效资源
      // 		//图片资源
      // 	],
      // 	/**进入游戏场景后可以释放的资源*/
      // 	[ReleaseID.GAME]: [
      // 		//预制体资源
      // 		//音效资源
      // 		//图片资源
      // 	]
      // }

      /** UI数据映射 */


      _export("UIDataMapping", UIDataMapping = [
        /** 每日特价 */
        // { uiID: UIID.GiftDiscountPrefab, menuID: GConstants.MenuIDConf.MRTJ, reddotID: GConstants.RedDotConf.Gift_Discount, popID: GConstants.PopupIds.DISCOUNT },
        // /** 新手/首充礼包 */
        // { uiID: UIID.GiftNewUserPrefab, menuID: GConstants.MenuIDConf.XSLB, reddotID: GConstants.RedDotConf.Gift_NewUser, popID: GConstants.PopupIds.NEWUSER },
        // /** 限购礼包 */
        // { uiID: UIID.GiftBuyLimitPrefab, menuID: GConstants.MenuIDConf.XGLB, reddotID: GConstants.RedDotConf.Gift_BuyLimit, popID: GConstants.PopupIds.GIFT_XGLB },
        // /** 限量抢购 */
        // { uiID: UIID.GiftLimitPrefab, menuID: GConstants.MenuIDConf.LIMIT, reddotID: GConstants.RedDotConf.Gift_Limit, popID: GConstants.PopupIds.LIMIT },
        // /** 新手7天 */
        // { uiID: UIID.NewUser7DayPrefab, menuID: GConstants.MenuIDConf.XSQT, reddotID: GConstants.RedDotConf.NewUserServenDay, popID: GConstants.PopupIds.NEW7DAY },
        // /** 免费金豆 */
        // { uiID: UIID.AdFreeGoldPrefab, menuID: GConstants.MenuIDConf.FREEGOLD, reddotID: GConstants.RedDotConf.AdFreeGold, popID: GConstants.PopupIds.FREEGOLD },
        // /** 金豆多多 */
        // { uiID: UIID.AdMuchGoldPrefab, menuID: GConstants.MenuIDConf.MOREGOLDS, reddotID: GConstants.RedDotConf.AdMuchGold, popID: GConstants.PopupIds.MOREGOLDS },
        // /** 幸运抽奖 */
        // { uiID: UIID.LuckyTurnTablePrefab, menuID: GConstants.MenuIDConf.LUCKLOTTERY, reddotID: GConstants.RedDotConf.AdLuckyTurnTable },
      ]);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ca01254313d2dbe8ae714d6f38db2b262075bf34.js.map