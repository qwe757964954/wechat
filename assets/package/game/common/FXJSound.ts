import { AppSound, AudioPackage } from "../../../config/AppSound";
/**
 * Name = FXJSound
 * URL = db://assets/package/game/common/FXJRes.ts
 * Time = Mon Jul 24 2023 18:46:53 GMT+0800 (中国标准时间)
 * Author = xueya
 * 游戏音效配置
 */


/** 系统音乐 */
export class FXJSound extends AppSound {

    static BgGame = { bundle: AudioPackage.GAME, path: "music/game_bg" };

    /** 互动表情 */
    static InteractProp = { bundle: AudioPackage.GAME, path: "interactProp/Prop_{0}" };
    /** 快捷聊天音效:男 */
    static QuickChatXiaoBo = { bundle: AudioPackage.GAME, path: "chatxiaobo/" };
    /** 快捷聊天音效:女 */
    static QuickChatXiaoYa = { bundle: AudioPackage.GAME, path: "chatxiaoya/" };

    //////////////////////////////////////// 麻将 /////////////////////////////////////////
    /** 对局开始、对局结束 */
    static GameBattle = { bundle: AudioPackage.GAME, path: "effect/battle_start_end" };
    /** 摇色子 */
    static GameRoll = { bundle: AudioPackage.GAME, path: "effect/roll_dices" };
    /** 点击 */
    static GameClick = { bundle: AudioPackage.GAME, path: "effect/click" };
    /** 提牌 */
    static GamePushUp = { bundle: AudioPackage.GAME, path: "effect/ti_pai" };
    /** 理牌 */
    static GameAdjust = { bundle: AudioPackage.GAME, path: "effect/adjust" };
    /** 出牌 */
    static GameDiscard = { bundle: AudioPackage.GAME, path: "{0}/type_{1}_{2}" };
    /** 吃 */
    static GameChi = { bundle: AudioPackage.GAME, path: "{0}/action_chi" };
    /** 碰 */
    static GamePeng = { bundle: AudioPackage.GAME, path: "{0}/action_peng" };
    /** 杠 */
    static GameGang = { bundle: AudioPackage.GAME, path: "{0}/action_gang" };
    /** 胡 */
    static GameHu = { bundle: AudioPackage.GAME, path: "{0}/action_hu" };
    /** 自摸 */
    static GameZiMo = { bundle: AudioPackage.GAME, path: "{0}/action_zimo" };
    // /** 本家听牌后摸牌 心跳声 */
    // static GameTing = { bundle: AudioPackage.GAME, path: "effect/zimo" };
    /** 点炮动画 */
    static GameDianPaoAni = { bundle: AudioPackage.GAME, path: "effect/hu1" };
    /** 胡牌动画 */
    static GameHuAni = { bundle: AudioPackage.GAME, path: "effect/hu2" };
    // /** 碰动画 */
    // static GamePengAni = { bundle: AudioPackage.GAME, path: "effect/peng" };
    /** 起牌 */
    static GameQiPai = { bundle: AudioPackage.GAME, path: "effect/qi_pai" };
    /** 起牌 */
    static GameTiPai = { bundle: AudioPackage.GAME, path: "effect/ti_pai" };
    /** 赢钱跳动 */
    static GameMoneyDance = { bundle: AudioPackage.GAME, path: "effect/money_dance" };

    //////////////////////////////////////// 麻将牌型 /////////////////////////////////////////
}
