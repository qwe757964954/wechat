/**
 * Name = UIConfig
 * URL = db://assets/config/UIConfig.ts
 * Time = Thu Apr 14 2022 11:47:19 GMT+0800 (中国标准时间)
 * Author = xueya
 *
 */

import { inf_LayerType, inf_UIConfig, inf_UIDataConfig } from "../framework/InterfaceDefines";
import { GameRes } from "./GameRes";

//全局唯一
let AppUIID = 0
/**获取一个新的UIID */
export const GetUIID = function (): number {
	AppUIID = AppUIID + 1
	return AppUIID;
}

/** 界面唯一标识（方便服务器通过编号数据触发界面打开） */
export class UIID {
	/** 登录界面 */
	static LoginPrefab = GetUIID();
	/** 吐司提示界面 */
	static ToastTip = GetUIID();
	/** 系统弹窗 */
	static SysPopWindow = GetUIID();
	/** 通用对话框 */
	static PopWindow = GetUIID();
	/**网络加载动画*/
	static NetLoading = GetUIID();
	/**大厅预制体界面*/
	static HallPrefab = GetUIID();
	/**破产弹窗界面*/
	static BankupGift = GetUIID();
	/**个人信息界面*/
	static PlayerInfoCenter = GetUIID();
	/** 选场界面*/
	static SelectLevelPrefab = GetUIID();
    /** 规则说明界面 */
	static GameRuleDialog = GetUIID();
	/**新手礼包界面*/
	static NewUserGiftPrefab = GetUIID();
	/**设置界面*/
	static SettingPrefab = GetUIID();
	/**游戏场景界面*/
	static GameScenePrefab = GetUIID();
	/** 好友界面*/
	static FriendPrefab = GetUIID();
	/** 恭喜获得道具界面*/
	static GongXiHuoDePrefab = GetUIID();
	/**用户协议和隐私政策界面*/
	static UserAgreePrivate = GetUIID();
	/** 图片提示对话框 */
	static PictureDialog = GetUIID();

	/** 商城界面*/
	static MallPrefab = GetUIID();
	/** 购买弹窗*/
	static BuyDialogPrefab = GetUIID();
	/** 购买道具弹窗*/
	static BuyPropDialogPrefab = GetUIID();
	/**签到界面*/
	static SigninPrefab = GetUIID();
	/** 邮箱界面*/
	static MailPrefab = GetUIID();
	/** 付费礼包-每日特价 */
	static GiftDiscountPrefab = GetUIID();
	/** 活动中心界面*/
	static AtyCenterPrefab = GetUIID();
	/**首充界面*/
	static FirstPayPrefab = GetUIID();
}

/**预加载的ID */
export enum PreloadID {
	START = 1,
	HALL = 2,
	COMMON = 3,
	GAME = 4,

}

/**资源释放的ID */
export enum ReleaseID {

	COMMON = 1,
	HALL = 2,
	GAME = 3,

}

/** 打开界面方式的配置数据 */
export const UIConfigData: { [key: number]: inf_UIConfig } = {
	[UIID.ToastTip]: { layer: inf_LayerType.Notify, prefab: GameRes.Prefab_ToastTip.path, bundle: GameRes.Prefab_ToastTip.bundle },
	[UIID.NetLoading]: { layer: inf_LayerType.NetWindow, prefab: GameRes.Prefab_NetLoading.path, bundle: GameRes.Prefab_NetLoading.bundle },
	[UIID.SysPopWindow]: { layer: inf_LayerType.Alert, prefab: GameRes.Prefab_DialogWindow.path, bundle: GameRes.Prefab_DialogWindow.bundle },
	[UIID.PopWindow]: { layer: inf_LayerType.PopUp, prefab: GameRes.Prefab_DialogWindow.path, bundle: GameRes.Prefab_DialogWindow.bundle },

	//用户协议和隐私政策界面
	[UIID.UserAgreePrivate]: { layer: inf_LayerType.PopUp, prefab: GameRes.Prefab_UserAgreePrivate.path, bundle: GameRes.Prefab_UserAgreePrivate.bundle },
	//图片提示对话框(适龄提示)
	[UIID.PictureDialog]: { layer: inf_LayerType.PopUp, prefab: GameRes.Prefab_PictureDialog.path, bundle: GameRes.Prefab_PictureDialog.bundle },
	//登录界面
	[UIID.LoginPrefab]: { layer: inf_LayerType.UI, prefab: GameRes.Prefab_Login.path, bundle: GameRes.Prefab_Login.bundle },
	//大厅界面
	[UIID.HallPrefab]: { layer: inf_LayerType.UI, prefab: GameRes.Prefab_HallScene.path, bundle: GameRes.Prefab_HallScene.bundle },
	//破产礼包
	[UIID.BankupGift]: { layer: inf_LayerType.PopUp, prefab: GameRes.Prefab_BankupGift.path, bundle: GameRes.Prefab_BankupGift.bundle },

	[UIID.PlayerInfoCenter]: { layer: inf_LayerType.PopUp, prefab: GameRes.Prefab_PlayerInfoCenter.path, bundle: GameRes.Prefab_PlayerInfoCenter.bundle },
	//游戏选场界面
	[UIID.SelectLevelPrefab]: { layer: inf_LayerType.PopUp, prefab: GameRes.Prefab_SelectLevelScene.path, bundle: GameRes.Prefab_SelectLevelScene.bundle },
	//规则说明界面
	[UIID.GameRuleDialog]: { layer: inf_LayerType.PopUp, prefab: GameRes.Prefab_GameRuleDialog.path, bundle: GameRes.Prefab_GameRuleDialog.bundle },

    //新手礼包
	[UIID.NewUserGiftPrefab]: { layer: inf_LayerType.PopUp, prefab: GameRes.Prefab_NewUserGift.path, bundle: GameRes.Prefab_NewUserGift.bundle },
	//设置界面
	[UIID.SettingPrefab]: { layer: inf_LayerType.PopUp, prefab: GameRes.Prefab_Setting.path, bundle: GameRes.Prefab_Setting.bundle },
	//游戏好友界面
	[UIID.FriendPrefab]: { layer: inf_LayerType.PopUp, prefab: GameRes.Prefab_Friend.path, bundle: GameRes.Prefab_Friend.bundle },
	[UIID.SigninPrefab]: { layer: inf_LayerType.PopUp, prefab: GameRes.Prefab_Signin.path, bundle: GameRes.Prefab_Signin.bundle },
	// /**游戏场景所需要的预制体资源*/
	[UIID.GameScenePrefab]: { layer: inf_LayerType.UI, prefab: GameRes.Prefab_GameScene.path, bundle: GameRes.Prefab_GameScene.bundle },
	//恭喜获得通用
	[UIID.GongXiHuoDePrefab]: { layer: inf_LayerType.PopUp, prefab: GameRes.Prefab_GongXiHuoDe.path, bundle: GameRes.Prefab_GongXiHuoDe.bundle },
	//购买弹窗
	[UIID.BuyDialogPrefab]: { layer: inf_LayerType.PopUp, prefab: GameRes.Prefab_BuyDialog.path, bundle: GameRes.Prefab_BuyDialog.bundle },
	//购买道具弹窗
	[UIID.BuyPropDialogPrefab]: { layer: inf_LayerType.PopUp, prefab: GameRes.Prefab_BuyPropDialog.path, bundle: GameRes.Prefab_BuyPropDialog.bundle },
	//商城
	[UIID.MallPrefab]: { layer: inf_LayerType.PopUp, prefab: GameRes.Prefab_Mall.path, bundle: GameRes.Prefab_Mall.bundle },

	//游戏邮箱界面
	[UIID.MailPrefab]: { layer: inf_LayerType.PopUp, prefab: GameRes.Prefab_Mail.path, bundle: GameRes.Prefab_Mail.bundle },
	//每日特价礼包界面
	[UIID.GiftDiscountPrefab]: { layer: inf_LayerType.PopUp, prefab: GameRes.Prefab_GiftDiscount.path, bundle: GameRes.Prefab_GiftDiscount.bundle },
	//活动中心界面
	[UIID.AtyCenterPrefab]: { layer: inf_LayerType.PopUp, prefab: GameRes.Prefab_AtyCenter.path, bundle: GameRes.Prefab_AtyCenter.bundle },
	//首充
	[UIID.FirstPayPrefab]: { layer: inf_LayerType.PopUp, prefab: GameRes.Prefab_FirstPay.path, bundle: GameRes.Prefab_FirstPay.bundle },

}



// export const GameResPreLoad = {
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
export const UIDataMapping: Array<inf_UIDataConfig> = [
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

];