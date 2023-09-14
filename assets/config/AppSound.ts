/**
 * 系统音乐
 */

//分包包名配置{key = Package}
export const AudioPackage = {
    /** 其它 */
    COMMON: "audio_common",
    /** 游戏 */
    GAME: "audio_game",
    /** 游戏角色 */
    GAME_ROLE_ACTION: "audio_gameRoleAction",
    /** 游戏角色 */
    GAME_ROLE_CARD: "audio_gameRoleCard",
    /** 抽奖 */
    LOTTERY: "audio_lottery",

}
/** 系统音乐 */
export class AppSound {
    /** 通用点击 */
    static CommClick = { bundle: AudioPackage.COMMON, path: "common_click" };
    /** 特殊点击 */
    static SpecialClick = { bundle: AudioPackage.COMMON, path: "special_click" };

    /** 获得道具 */
    static GetGoods = { bundle: AudioPackage.COMMON, path: "get_goods" };
    /** 获得金币 */
    static GetGoodsCoin = { bundle: AudioPackage.COMMON, path: "get_goods_coin" };
    /** 获得新角色 */
    static GetNewRole = { bundle: AudioPackage.COMMON, path: "get_new_role" };
    /** 角色升级 */
    static RoleUpGrade = { bundle: AudioPackage.COMMON, path: "role_upgrade" };

    /** 背景音乐-大厅 */
    static BgHall = { bundle: AudioPackage.COMMON, path: "backGroundMusic/hall_bg" };
    // /** 背景音乐-角色 */
    // static BgRole = { bundle: AudioPackage.COMMON, path: "backGroundMusic/role_bg" };
    // /** 背景音乐-商城 */
    // static BgShop = { bundle: AudioPackage.COMMON, path: "backGroundMusic/shop_bg" };
    // /** 背景音乐-游戏内 */
    // static BgGame = { bundle: AudioPackage.GAME, path: "backGroundMusic/game_bg" };


    /** 商城-猫女郎-1 */
    static CatWoman_Shop_1 = { bundle: AudioPackage.COMMON, path: "catWomanEffect/shop_1" };
    /**  商城-猫女郎-2 */
    static CatWoman_Shop_2 = { bundle: AudioPackage.COMMON, path: "catWomanEffect/shop_2" };
    /**  商城-猫女郎-喵 */
    static CatWoman_Shop_Miao = { bundle: AudioPackage.COMMON, path: "catWomanEffect/meow" };

    /** 角色动作绑定音效（在大厅） */
    static RoleInHall_28 = { bundle: AudioPackage.COMMON, path: "roleEffect/hall_tianwei" };
    static RoleInHall_29 = { bundle: AudioPackage.COMMON, path: "roleEffect/hall_gongyue" };
    static RoleInHall_30 = { bundle: AudioPackage.COMMON, path: "roleEffect/hall_xiaobo" };
    static RoleInHall_31 = { bundle: AudioPackage.COMMON, path: "roleEffect/hall_xiaoya" };
    static RoleInHall_32 = { bundle: AudioPackage.COMMON, path: "roleEffect/hall_xiaoyi" };
    static RoleInHall_33 = { bundle: AudioPackage.COMMON, path: "roleEffect/hall_bailing" };
    /** 进入角色界面或者在角色界面点击角色也触发，萧墨和天卫还没有后续加 */
    static Role_33 = { bundle: AudioPackage.COMMON, path: "roleEffect/role_bailing" };
    static Role_29 = { bundle: AudioPackage.COMMON, path: "roleEffect/role_gongyue" };
    static Role_28 = { bundle: AudioPackage.COMMON, path: "roleEffect/role_tianwei" };
    static Role_30 = { bundle: AudioPackage.COMMON, path: "roleEffect/role_xiaobo" };
    static Role_31 = { bundle: AudioPackage.COMMON, path: "roleEffect/role_xiaoya" };
    static Role_32 = { bundle: AudioPackage.COMMON, path: "roleEffect/role_xiaoyi" };
    static Role_30_1 = { bundle: AudioPackage.COMMON, path: "roleEffect/role_xiaobo_1" };
    /** 白灵打开扇子 */
    static RoleOpenFan = { bundle: AudioPackage.COMMON, path: "roleEffect/role_bailing_open" };

    static RoleAction_28_Into = { bundle: AudioPackage.GAME_ROLE_ACTION, path: "role_28/action/Action_Into" };

    /** 幸运转盘开始转动音效 */
    static Lottery_LuckyTurnTablePlay = { bundle: AudioPackage.LOTTERY, path: "luckyTurnTablePlay" };



}
