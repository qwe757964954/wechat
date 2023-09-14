System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, GConstants, _crd, GamePackage, GameRes, GameResPreLoad;

  function _reportPossibleCrUseOfinf_PkgLoaderTaskList(extras) {
    _reporterNs.report("inf_PkgLoaderTaskList", "../framework/InterfaceDefines", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGConstants(extras) {
    _reporterNs.report("GConstants", "./GameConstant", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      GConstants = _unresolved_2.GConstants;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b764aZR1GpGf4oDN+xs2+ia", "GameRes", undefined);

      //分包包名配置{key = Package}
      _export("GamePackage", GamePackage = {
        DEFAULT: "resources",
        LOGIN: "login",
        HALL: "hall",
        ACTIVITY: "activity",
        GIFTBAG: "giftbag",
        GAME: "game",
        GAMERES: "gameres",

        /** 共有资源 */
        USERPUBLIC: "userpublic",

        /** 分享 */
        SHARE: "share"
      });
      /**资源路径配置 若为包则为相对该包的相对路径 */


      _export("GameRes", GameRes = {
        /**预制体资源*/
        //Debug界面
        Prefab_DebugWindow: {
          bundle: GamePackage.DEFAULT,
          path: "prefab/DebugPrefab"
        },
        //吐司提示界面
        Prefab_ToastTip: {
          bundle: GamePackage.DEFAULT,
          path: "prefab/common/notify"
        },
        //通用对话框界面
        Prefab_DialogWindow: {
          bundle: GamePackage.DEFAULT,
          path: "prefab/common/PopWindowPrefab"
        },
        //图片提示对话框
        Prefab_PictureDialog: {
          bundle: GamePackage.DEFAULT,
          path: "prefab/common/PictureDialogPrefab"
        },
        //图片提示对话框(带Tab)
        Prefab_PictureTabDialog: {
          bundle: GamePackage.DEFAULT,
          path: "prefab/common/PictureTabDialogPrefab"
        },
        //网络等待提示
        Prefab_NetLoading: {
          bundle: GamePackage.DEFAULT,
          path: "prefab/common/netLoadingPrefab"
        },

        /*****************************登录包********************** */
        //用户协议与隐私政策
        Prefab_UserAgreePrivate: {
          bundle: GamePackage.LOGIN,
          path: "prefab/UserAgreePrivatePrefab"
        },
        //登录界面
        Prefab_Login: {
          bundle: GamePackage.LOGIN,
          path: "prefab/loginPrefab"
        },

        /*****************************大厅包********************** */
        //大厅场景界面
        Prefab_HallScene: {
          bundle: GamePackage.HALL,
          path: "prefab/hallPrefab"
        },
        //大厅顶部UI
        Prefab_HallTopUI: {
          bundle: GamePackage.HALL,
          path: "prefab/commonBtnPrefab"
        },
        //游戏选场界面
        Prefab_SelectLevelScene: {
          bundle: GamePackage.HALL,
          path: "prefab/selectGameLevelPrefab"
        },
        //商城界面
        Prefab_Mall: {
          bundle: GamePackage.HALL,
          path: "prefab/mallPrefab"
        },
        //个人信息界面
        Prefab_PlayerInfoCenter: {
          bundle: GamePackage.HALL,
          path: "prefab/userInfoPrefab"
        },
        //商城背景
        Spine_Mall_Bg: {
          bundle: GamePackage.HALL,
          path: "spineAni/shop/SC.skel"
        },
        //商城人物
        Spine_Mall_Role: {
          bundle: GamePackage.HALL,
          path: "spineAni/shop/MaoNvLang.skel"
        },
        //商城切换动画
        Spine_Mall_Qiehuan: {
          bundle: GamePackage.HALL,
          path: "spineAni/shop/SC_qiehuan.skel"
        },
        //灯笼背景
        Spine_DengLongAni: {
          bundle: GamePackage.DEFAULT,
          path: "spineAni/denglong/TongYong_denglong.json"
        },
        // //打滚子选场界面
        // Prefab_DgzLevelChoose: { bundle: GamePackage.HALL, path: "prefab/dgzLevelPrefab" },
        //活动中心界面
        Prefab_AtyCenter: {
          bundle: GamePackage.ACTIVITY,
          path: "prefab/atyCenterPrefab"
        },
        //设置界面
        Prefab_Setting: {
          bundle: GamePackage.HALL,
          path: "prefab/settingPrefab"
        },
        //开发者视窗
        Prefab_Debug: {
          bundle: GamePackage.HALL,
          path: "prefab/debugPrefab"
        },
        //新手礼包界面
        Prefab_NewUserGift: {
          bundle: GamePackage.ACTIVITY,
          path: "prefab/newPlayerBag"
        },
        //好友界面
        Prefab_Friend: {
          bundle: GamePackage.ACTIVITY,
          path: "prefab/friendPrefab"
        },
        //签到界面
        Prefab_Signin: {
          bundle: GamePackage.ACTIVITY,
          path: "prefab/signin"
        },
        //签到图集
        Atlas_Sign: {
          bundle: GamePackage.ACTIVITY,
          path: "image/signin/signin",
          plistKey: "signin/signin_day{0}"
        },
        //邮箱界面
        Prefab_Mail: {
          bundle: GamePackage.ACTIVITY,
          path: "prefab/mailPrefab"
        },
        //每日特价礼包界面
        Prefab_GiftDiscount: {
          bundle: GamePackage.ACTIVITY,
          path: "prefab/giftDiscountPrefab"
        },
        //破产礼包界面
        Prefab_BankupGift: {
          bundle: GamePackage.GIFTBAG,
          path: "prefab/bankupGift"
        },
        //首充礼包界面
        Prefab_FirstPay: {
          bundle: GamePackage.ACTIVITY,
          path: "prefab/giftFirstPayPrefab"
        },
        //获得道具、人物弹窗
        Prefab_GongXiHuoDe: {
          bundle: GamePackage.ACTIVITY,
          path: "prefab/getPopPrefab"
        },
        //购买弹窗
        Prefab_BuyDialog: {
          bundle: GamePackage.HALL,
          path: "prefab/buyDialogPrefab"
        },

        /**图片资源*/
        //大厅银币背景Ios
        Picture_Hall_Coin_bg: {
          bundle: GamePackage.HALL,
          path: "image/money_bg/spriteFrame"
        },
        //设置-关闭状态-按钮
        Picture_Setting_Btn_close: {
          bundle: GamePackage.HALL,
          path: "image/switch_off_bg/spriteFrame"
        },
        //设置-开启状态-按钮
        Picture_Setting_Btn_open: {
          bundle: GamePackage.HALL,
          path: "image/switch_on_bg/spriteFrame"
        },
        // //选场界面-快速场-logo
        // Picture_Hall_quick_logo: { bundle: GamePackage.HALL, path: "image/quick_logo" },
        // //选场界面-死棒场-logo
        // Picture_Hall_sibang_logo: { bundle: GamePackage.HALL, path: "image/sibang_logo" },
        // //选场界面-一锅场-logo
        // Picture_Hall_yiguo_logo: { bundle: GamePackage.HALL, path: "image/yiguo_logo" },
        //默认头像-男
        Picture_UserBigHead_boy: {
          bundle: GamePackage.HALL,
          path: "image/big_male_head"
        },
        //默认头像-女
        Picture_UserBigHead_girl: {
          bundle: GamePackage.HALL,
          path: "image/big_female_head"
        },
        //绿色公告临时图片
        Picture_NotiveLS: {
          bundle: GamePackage.ACTIVITY,
          path: "image/activityCenter/gg"
        },
        //游戏场景界面
        Prefab_GameScene: {
          bundle: GamePackage.GAME,
          path: "prefab/GameScenePrefab"
        },
        //购买道具弹窗
        Prefab_BuyPropDialog: {
          bundle: GamePackage.HALL,
          path: "prefab/buyPropDialogPrefab"
        },
        //应用包外使用的公工图片资源路径 相对项目路径
        //分享:个人信息-标签邀请点赞分享
        AppCommon_Share_UserInfo: {
          path: "comm/share/share_userinfo.jpg"
        },
        //分享:好友-点击分享邀请好友
        AppCommon_Share_Friend: {
          path: "comm/share/share_friend.jpg"
        },

        /*****************************骨骼动画资源*************************/
        //点击背景
        Spine_ClickAni: {
          bundle: GamePackage.DEFAULT,
          path: "spineAni/clickAni/skeleton.skel"
        },
        //大厅飞小鸡可吃场入口
        Spine_Rukou_Kechi: {
          bundle: GamePackage.HALL,
          path: "spineAni/rukou_kechi/rukou_kechi.skel"
        },
        //大厅飞小鸡不可吃场入口
        Spine_Rukou_Bukechi: {
          bundle: GamePackage.HALL,
          path: "spineAni/rukou_bukechi/rukou_bukechi.skel"
        },
        //大厅新手引导手势
        Spine_Guide_Hander_Click: {
          bundle: GamePackage.HALL,
          path: "spineAni/newGuide/hand_dianji.skel"
        },
        //选场背景
        Spine_Xc_Bg: {
          bundle: GamePackage.HALL,
          path: "spineAni/xuanchang/XC.skel"
        },
        //选场-按钮
        Spine_Xc_Btn: {
          bundle: GamePackage.HALL,
          path: "spineAni/XC_btn/XC_btn.skel"
        },
        //选场-选中
        Spine_Xc_Choice: {
          bundle: GamePackage.HALL,
          path: "spineAni/XC_xuanzhong/XC_xuanzhong.skel"
        },
        //选场-蝴蝶
        Spine_Xc_Hudie: {
          bundle: GamePackage.HALL,
          path: "spineAni/hudie/TongYong_hudie.skel"
        },
        //角色配置--小博
        Spine_Roles_XiaoBo: {
          bundle: GamePackage.HALL,
          path: "spineAni/role/xiaobo.skel"
        },
        // IMG_Roles_XiaoBo_Mask: { bundle: GamePackage.HALL, path: "image/role/role/role/icon_mask_xb" },
        // IMG_Roles_XiaoBo_Select: { bundle: GamePackage.HALL, path: "image/role/role/role/icon_select_xb" },
        IMG_Roles_XiaoBo_Name: {
          bundle: GamePackage.HALL,
          path: "image/role/role_1/role/res/name_xb"
        },
        //角色配置--小雅
        Spine_Roles_Xiaoya: {
          bundle: GamePackage.HALL,
          path: "spineAni/role/xiaoya.skel"
        },
        // IMG_Roles_Xiaoya_Mask: { bundle: GamePackage.HALL, path: "image/role/role/role/icon_mask_xy" },
        // IMG_Roles_Xiaoya_Select: { bundle: GamePackage.HALL, path: "image/role/role/role/icon_select_xy" },
        IMG_Roles_Xiaoya_Name: {
          bundle: GamePackage.HALL,
          path: "image/role/role_1/role/res/name_xya"
        },

        /**音乐资源*/
        //大厅背景音乐
        Audio_Hall_bg: {
          bundle: GamePackage.HALL,
          path: "audio/game_bg_1"
        },

        /**公共图集资源*/
        //按钮配置
        Atlas_BtnConf: {
          bundle: GamePackage.DEFAULT,
          path: "image/common/button"
        },
        //弹窗标题
        Atlas_DialogTitle: {
          bundle: GamePackage.DEFAULT,
          path: "image/common/dialog_title"
        },
        //通用图集
        Atlas_Common1: {
          bundle: GamePackage.DEFAULT,
          path: "image/common/common1"
        },
        //隐私政策
        Picture_UserPrivacyPolicy: [{
          bundle: GamePackage.USERPUBLIC,
          path: "privatepolicy/1"
        }, {
          bundle: GamePackage.USERPUBLIC,
          path: "privatepolicy/2"
        }, {
          bundle: GamePackage.USERPUBLIC,
          path: "privatepolicy/3"
        }, {
          bundle: GamePackage.USERPUBLIC,
          path: "privatepolicy/4"
        }],
        //用户协议
        Picture_UserAgree: [{
          bundle: GamePackage.USERPUBLIC,
          path: "useragree/1"
        }, {
          bundle: GamePackage.USERPUBLIC,
          path: "useragree/2"
        }, {
          bundle: GamePackage.USERPUBLIC,
          path: "useragree/3"
        }, {
          bundle: GamePackage.USERPUBLIC,
          path: "useragree/4"
        }, {
          bundle: GamePackage.USERPUBLIC,
          path: "useragree/5"
        }, {
          bundle: GamePackage.USERPUBLIC,
          path: "useragree/6"
        }],
        //适龄提示
        Picture_AgePromit: [{
          bundle: GamePackage.USERPUBLIC,
          path: "agepromit/1"
        }],
        //货币说明
        Picture_CoinHelp: [{
          bundle: GamePackage.USERPUBLIC,
          path: "coinhelp/1"
        }],
        //玩法说明
        Picture_GameRule: [{
          tab: [{
            bundle: GamePackage.USERPUBLIC,
            path: "img_tab_jiben01"
          }, {
            bundle: GamePackage.USERPUBLIC,
            path: "img_tab_jiben02"
          }],
          content: [{
            bundle: GamePackage.USERPUBLIC,
            path: "gamerule/1"
          }]
        }, {
          tab: [{
            bundle: GamePackage.USERPUBLIC,
            path: "img_tab_fanxing01"
          }, {
            bundle: GamePackage.USERPUBLIC,
            path: "img_tab_fanxing02"
          }],
          content: [{
            bundle: GamePackage.USERPUBLIC,
            path: "gamerule/2"
          }]
        }],
        //应用包外使用的公工图片资源路径 相对项目路径
        AppCommon_Login_WX: {
          path: "comm/img_wxLogin.png"
        },
        AppCommon_GetUserInfo_WX: {
          path: "comm/img_getWXUserInfo.png"
        },
        //分享好友-通用
        AppCommon_Share_Friend_Comm: {
          path: "comm/img_shareF.png"
        },
        //分享朋友圈-通用
        AppCommon_Share_PYQ_Comm: {
          path: "comm/img_shareF.png"
        },
        //分享:牌局-春天
        AppCommon_Share_Chun: {
          path: "comm/share/share_chun.jpg"
        },
        //分享:牌局-反春
        AppCommon_Share_FanChun: {
          path: "comm/share/share_fanchun.jpg"
        },
        //分享:牌局-连胜
        AppCommon_Share_Winning: {
          path: "comm/share/share_winning.jpg"
        },
        //获得道具弹窗
        Spine_Get_Item: {
          bundle: GamePackage.ACTIVITY,
          path: "spineAni/get/get.json"
        },
        //商城图集
        Atlas_Mall: {
          bundle: GamePackage.HALL,
          path: "image/mall/mall",
          plistKey: "mall/"
        }
      });
      /**预加载资源配置 */


      _export("GameResPreLoad", GameResPreLoad = {
        [(_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
          error: Error()
        }), GConstants) : GConstants).PkgLoaderTaskList.Login]: {
          protobuf: true,
          prefab: [GameRes.Prefab_ToastTip, GameRes.Prefab_PictureDialog, GameRes.Prefab_DialogWindow, GameRes.Prefab_UserAgreePrivate, GameRes.Prefab_Login, GameRes.Prefab_HallScene, GameRes.Prefab_NewUserGift],
          audio: []
        },
        // [GConstants.PkgLoaderTaskList.Hall]: {
        // 	prefab: [
        // 		GameRes.Prefab_HallScene,
        // 	],
        // },
        [(_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
          error: Error()
        }), GConstants) : GConstants).PkgLoaderTaskList.Game]: {
          package: [GamePackage.GAME, GamePackage.GAMERES],
          prefab: [GameRes.Prefab_GameScene]
        }
      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=2ad5cbe2510ce87c41becf3c455202ac9d88f3da.js.map