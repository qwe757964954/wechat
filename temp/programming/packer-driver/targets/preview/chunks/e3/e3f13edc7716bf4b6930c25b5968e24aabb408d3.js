System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, AppSound, _crd, AudioPackage;

  _export("AppSound", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0c074xdYcFDp7yRv1hL4IjY", "AppSound", undefined);

      /**
       * 系统音乐
       */
      //分包包名配置{key = Package}
      _export("AudioPackage", AudioPackage = {
        /** 其它 */
        COMMON: "audio_common",

        /** 游戏 */
        GAME: "audio_game",

        /** 游戏角色 */
        GAME_ROLE_ACTION: "audio_gameRoleAction",

        /** 游戏角色 */
        GAME_ROLE_CARD: "audio_gameRoleCard",

        /** 抽奖 */
        LOTTERY: "audio_lottery"
      });
      /** 系统音乐 */


      _export("AppSound", AppSound = class AppSound {});

      AppSound.CommClick = {
        bundle: AudioPackage.COMMON,
        path: "common_click"
      };
      AppSound.SpecialClick = {
        bundle: AudioPackage.COMMON,
        path: "special_click"
      };
      AppSound.GetGoods = {
        bundle: AudioPackage.COMMON,
        path: "get_goods"
      };
      AppSound.GetGoodsCoin = {
        bundle: AudioPackage.COMMON,
        path: "get_goods_coin"
      };
      AppSound.GetNewRole = {
        bundle: AudioPackage.COMMON,
        path: "get_new_role"
      };
      AppSound.RoleUpGrade = {
        bundle: AudioPackage.COMMON,
        path: "role_upgrade"
      };
      AppSound.BgHall = {
        bundle: AudioPackage.COMMON,
        path: "backGroundMusic/hall_bg"
      };
      AppSound.CatWoman_Shop_1 = {
        bundle: AudioPackage.COMMON,
        path: "catWomanEffect/shop_1"
      };
      AppSound.CatWoman_Shop_2 = {
        bundle: AudioPackage.COMMON,
        path: "catWomanEffect/shop_2"
      };
      AppSound.CatWoman_Shop_Miao = {
        bundle: AudioPackage.COMMON,
        path: "catWomanEffect/meow"
      };
      AppSound.RoleInHall_28 = {
        bundle: AudioPackage.COMMON,
        path: "roleEffect/hall_tianwei"
      };
      AppSound.RoleInHall_29 = {
        bundle: AudioPackage.COMMON,
        path: "roleEffect/hall_gongyue"
      };
      AppSound.RoleInHall_30 = {
        bundle: AudioPackage.COMMON,
        path: "roleEffect/hall_xiaobo"
      };
      AppSound.RoleInHall_31 = {
        bundle: AudioPackage.COMMON,
        path: "roleEffect/hall_xiaoya"
      };
      AppSound.RoleInHall_32 = {
        bundle: AudioPackage.COMMON,
        path: "roleEffect/hall_xiaoyi"
      };
      AppSound.RoleInHall_33 = {
        bundle: AudioPackage.COMMON,
        path: "roleEffect/hall_bailing"
      };
      AppSound.Role_33 = {
        bundle: AudioPackage.COMMON,
        path: "roleEffect/role_bailing"
      };
      AppSound.Role_29 = {
        bundle: AudioPackage.COMMON,
        path: "roleEffect/role_gongyue"
      };
      AppSound.Role_28 = {
        bundle: AudioPackage.COMMON,
        path: "roleEffect/role_tianwei"
      };
      AppSound.Role_30 = {
        bundle: AudioPackage.COMMON,
        path: "roleEffect/role_xiaobo"
      };
      AppSound.Role_31 = {
        bundle: AudioPackage.COMMON,
        path: "roleEffect/role_xiaoya"
      };
      AppSound.Role_32 = {
        bundle: AudioPackage.COMMON,
        path: "roleEffect/role_xiaoyi"
      };
      AppSound.Role_30_1 = {
        bundle: AudioPackage.COMMON,
        path: "roleEffect/role_xiaobo_1"
      };
      AppSound.RoleOpenFan = {
        bundle: AudioPackage.COMMON,
        path: "roleEffect/role_bailing_open"
      };
      AppSound.RoleAction_28_Into = {
        bundle: AudioPackage.GAME_ROLE_ACTION,
        path: "role_28/action/Action_Into"
      };
      AppSound.Lottery_LuckyTurnTablePlay = {
        bundle: AudioPackage.LOTTERY,
        path: "luckyTurnTablePlay"
      };

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=e3f13edc7716bf4b6930c25b5968e24aabb408d3.js.map