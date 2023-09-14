/**
 * Name = FXJRes
 * URL = db://assets/package/game/common/FXJRes.ts
 * Time = Mon Jul 24 2023 18:46:53 GMT+0800 (中国标准时间)
 * Author = xueya
 * 游戏资源配置
 */

import { GamePackage } from "../../../config/GameRes";
import { GetUIID, UIID } from "../../../config/UIConfig";
import { inf_LayerType } from "../../../framework/InterfaceDefines";


export class FXJUIID extends UIID {
	/**结算*/
	static GameSettlePrefab = GetUIID();
	/**匹配*/
	static GameMatchPrefab = GetUIID();
	/**聊天界面*/
	static GameChatPrefab = GetUIID();
	/**游戏场景更多菜单UI界面*/
	static ToolBarPrefab = GetUIID();
	/** 游戏内玩家个人信息 */
	static GameHeadInfoPrefab = GetUIID();
	/** 游戏内ai信息 */
	static GameAiPrefab = GetUIID();
}

export const FXJRes = {
    /******************************************预制体********************************************** */
    //菜单UI
	Prefab_Menu: { bundle: GamePackage.GAME, path: "prefab/GameMenuPrefab" },
	//match player
	Prefab_Match_Player: { bundle: GamePackage.GAME, path: "module/match/res/prefab/player" },
	//match
	Prefab_Match: { bundle: GamePackage.GAME, path: "module/match/res/prefab/match" },
	
	//match player
	Prefab_Opmgr: { bundle: GamePackage.GAME, path: "module/opmgr/res/prefab/opmgr" },
	//match
	Prefab_Opmgr_Item: { bundle: GamePackage.GAME, path: "module/opmgr/res/prefab/opmgrItem" },
	//card
	Prefab_Opmgr_Image: { bundle: GamePackage.GAME, path: "module/opmgr/res/image/opmgr", plistKey: "{0}" },
	
	//xiaobo
	Spine_XiaoBo: { bundle: GamePackage.GAMERES, path: "spineAni/role/xiaobo" },
	//xiaoya
	Spine_XiaoYa: { bundle: GamePackage.GAMERES, path: "spineAni/role/xiaoya" },
	//card
	Prefab_Match_Image: { bundle: GamePackage.GAME, path: "module/match/res/image/match", plistKey: "{0}" },

	//card
	Prefab_Card: { bundle: GamePackage.GAME, path: "image/card/card", plistKey: "{0}" },
	//op
	Prefab_op: { bundle: GamePackage.GAME, path: "module/opInfo/res/prefab/OpInfo" },
	//更多菜单UI
	Prefab_ToolBar: { bundle: GamePackage.GAME, path: "prefab/ToolBarPrefab" },
	//游戏聊天面板
	Prefab_GameChat: { bundle: GamePackage.GAME, path: "prefab/GameChatPrefab" },
	//游戏结算
	Prefab_GameSettle: { bundle: GamePackage.GAME, path: "module/settle/res/prefab/settle" },
	//玩家bottomItem
	Prefab_Bottom_Item: { bundle: GamePackage.GAME, path: "module/settle/res/prefab/bottomItem" },
	//结算资源
	Prefab_Settle_Image: { bundle: GamePackage.GAME, path: "module/settle/res/image/settle", plistKey: "{0}" },
	//失败钱资源
	Prefab_Settle_Fail: { bundle: GamePackage.GAME, path: "module/settle/res/image/settle_fail", plistKey: "{0}" },
	//赢钱资源  
	Prefab_Settle_Win: { bundle: GamePackage.GAME, path: "module/settle/res/image/settle_win", plistKey: "{0}" },
	//赢胡次数资源
	Prefab_Settle_Hu_Win: { bundle: GamePackage.GAME, path: "module/settle/res/image/settle_hu_win", plistKey: "{0}" },
	//输胡次数资源
	Prefab_Settle_Hu_Fail: { bundle: GamePackage.GAME, path: "module/settle/res/image/settle_hu_fail", plistKey: "{0}" },
	Prefab_Settle_Xiaobo: { bundle: GamePackage.GAME, path: "module/settle/res/image/xiaobo", plistKey: "{0}" },
	Prefab_Settle_Xiaoya: { bundle: GamePackage.GAME, path: "module/settle/res/image/xiaoya", plistKey: "{0}" },

	/** 玩家节点*/
	Prefab_NodeUser: { bundle: GamePackage.GAME, path: "prefab/NodeUserPrefab" },
	//麻将桌
	Prefab_Desk: { bundle: GamePackage.GAME, path: "prefab/GameDeskPrefab" },
	//手牌
	Prefab_HandCard: { bundle: GamePackage.GAME, path: "prefab/GameHandCardPrefab" },
	//游戏内玩家个人信息
	GameHeadInfoPrefab:{ bundle: GamePackage.GAME, path: "prefab/GameHeadInfoPrefab" },
	/******************************************动画资源********************************************** */
	//互动道具动画
	Spine_Hddj: { bundle: GamePackage.GAMERES, path: "spineAni/hdprops/HD_daoju.skel" },
	
	Spine_Emoji: { bundle: GamePackage.GAMERES, path: "spineAni/emoji/emoji.json" },

    // 开始动画
    Spine_Start: { bundle: GamePackage.GAMERES, path: "spineAni/start/MJ_DJKS.skel" },
    // 结束动画
    Spine_Over: { bundle: GamePackage.GAMERES, path: "spineAni/over/MJ_DJJS.skel" },
    // 胡牌动画
    Spine_Hu: { bundle: GamePackage.GAMERES, path: "spineAni/hu/mj_hu.skel" },

    /******************************************游戏图集资源********************************************** */
	//桌子资源图集
	Atlas_Game_Desk: { bundle: GamePackage.GAME, path: "image/desk/desk", plistKey: "doudizhu/desk/{0}" },

	//小扑克牌数字图集
	Atlas_Game_CardNum: { bundle: GamePackage.GAME, path: "image/handCard/card_num/card_num" },

	//玩家相关图集
	Atlas_Player_Common: { bundle: GamePackage.GAME, path: "image/player/player", plistKey: "doudizhu/player/{0}" },

	//默认头像-男
    Picture_UserBigHead_boy: { bundle: GamePackage.GAME, path: "image/player/big_male_head" },
    //默认头像-女
	Picture_UserBigHead_girl: { bundle: GamePackage.GAME, path: "image/player/big_female_head" },
	//麻将子资源
	Picture_Game_Card: { bundle: GamePackage.GAME, path: "mesh/majiang/card/{0}/texture" },
    //麻将指示灯资源
	Picture_Game_Desk_Light: { bundle: GamePackage.GAME, path: "mesh/desk/{0}/texture" },
    //麻将倒计时资源
	Picture_Game_Desk_Timer: { bundle: GamePackage.GAME, path: "mesh/daojishi/{0}/texture" },

	//互动道具图集 gameHeadInfo
	Atlas_Game_EmojiProp: { bundle: GamePackage.GAME, path: "image/gameHeadInfo/emojiProp", plistKey: "{0}" },

    // 胡牌动画
    Spine_op: { bundle: GamePackage.GAMERES, path: "spineAni/op/MJ_btn.skel" },

	//match player
	Prefab_Ai: { bundle: GamePackage.GAME, path: "module/ai/res/prefab/ai" },
}

export const FXJUIConfig = {
	//游戏聊天
	[FXJUIID.GameChatPrefab]: { layer: inf_LayerType.PopUp, prefab: FXJRes.Prefab_GameChat.path, bundle: FXJRes.Prefab_GameChat.bundle },
    //游戏场景更多菜单UI
	[FXJUIID.ToolBarPrefab]: { layer: inf_LayerType.PopUp, prefab: FXJRes.Prefab_ToolBar.path, bundle: FXJRes.Prefab_ToolBar.bundle },
	//游戏结算
	[FXJUIID.GameSettlePrefab]: { layer: inf_LayerType.PopUp, prefab: FXJRes.Prefab_GameSettle.path, bundle: FXJRes.Prefab_GameSettle.bundle},
	//匹配
	[FXJUIID.GameMatchPrefab]: { layer: inf_LayerType.PopUp, prefab: FXJRes.Prefab_Match.path, bundle: FXJRes.Prefab_Match.bundle},
	//游戏内玩家个人信息
    [FXJUIID.GameHeadInfoPrefab]:{ layer: inf_LayerType.PopUp, prefab: FXJRes.GameHeadInfoPrefab.path, bundle: FXJRes.GameHeadInfoPrefab.bundle},
	//ai
	[FXJUIID.GameAiPrefab]: { layer: inf_LayerType.PopUp, prefab: FXJRes.Prefab_Ai.path, bundle: FXJRes.Prefab_Ai.bundle},
	
}

