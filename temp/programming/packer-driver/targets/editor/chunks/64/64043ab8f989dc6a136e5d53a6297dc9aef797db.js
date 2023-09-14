System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, StoreKey, CloundKey, GConstants;

  _export("GConstants", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "956c9/490FNB5vV9kBQJM0T", "GameConstant", undefined);

      /**
       * 常量
       * Name : GameConstant 
       * URL : db : //assets/config/GameConstant.ts
       * Time : Fri Apr 08 2022 18 : 23 : 42 GMT+0800 (中国标准时间)
       * Author : xueya
       * 常量类
       */

      /** 本地数据存储key */
      _export("StoreKey", StoreKey = {
        /** 系统版本 */
        SYS_ClientVer: "sys_clientVer",

        /** 音效{0-1 0为关} */
        SYS_EffectVolume: "sys_effectVolume",

        /** 音乐{0-1 0为关} */
        SYS_MusicVolume: "sys_musicVolume",

        /** 静音(boolean) */
        SYS_CloseAllMusic: "sys_closeAllMusic",

        /** 震动(boolean) */
        SYS_Shock: "sys_shock",
        //聊天(boolean)
        SYS_Chat: "sys_chat",
        //读牌(boolean)
        SYS_ReadCard: "readCard",
        //用户微信的openid
        LOGIN_USER_OPENID: "user_wx_openid_{0}",
        //用户登录账号的历史信息
        LOGIN_USER_HISTORY: "login_history",
        //上次登录成功的信息
        LOGIN_LAST_INFO: "login_last_info",
        //上次协议勾选状态
        LOGIN_LAST_CHECK_AGREE: "login_last_check_agree",
        //登录成功次数的记录
        LOGIN_SUCCESS_COUNT: "login_success_count",
        //打开新手礼包的时间
        ACTIVITY_LAST_OPEN_TIME: "last_open_view_activity",

        /** 信箱中系统消息ID */
        WATCH_MESSAGE_SYSTEMID: "user_system_last_id_{0}",

        /** 信箱中用户消息ID */
        WATCH_MESSAGE_USRERID: "user_last_id_{0}",

        /** 本地邮件数据缓存 */
        USER_MAIL_CACHE: "user_mail_cache_{0}",

        /** 用户推荐弹窗数据 */
        USER_RECOMMEND_POP: "user_recommend_pop_{0}",

        /** 用户红点数据记录 */
        USER_RED_RECORD: "user_red_record_{0}",

        /** 用户上次登录成功的时间 */
        USER_LOGIN_LAST_TIME: "user_login_last_time_{0}",

        /** 用户今日事件 uid-key*/
        USER_TODAY_EVENT: "user_today_event_{0}",

        /** 用户点击的记录 */
        USER_CLICKED_RECORD: "user_clicked_record_{0}",

        /** 用户想进入的房间数据 */
        USER_INTO_GAME_RECORD: "user_into_game_{0}",

        /** 用户是否领取从桌面进入的奖励 */
        USER_REWARD_BY_DESK: "user_reward_by_desk_{0}",

        /** 普通商品图片相关配置 */
        PROPS_BASE_CONF: "props_base_conf",

        /** 额外商品图片相关配置 */
        PROPS_UNION_CONF: "props_union_conf",

        /** 额外商品图片相关配置 */
        PROPS_ICON_PRE: "props_icon_pre",

        /** 好友邀请：用户当前点击的openid */
        FRIEND_CURROW_CLICK: "friend_currow_click"
      });
      /** 云存储数据 */


      _export("CloundKey", CloundKey = {
        /** 用户uid */
        USER_UID: "user_uid",

        /** 用户登录的时间 */
        USER_LOGIN_TIME: "user_login_time",

        /** 用户头像框 */
        USER_HEAD_FRAME: "user_head_frame"
      });
      /** 系统常量 */


      (function (_GConstants) {
        const AppRunLife = _GConstants.AppRunLife = {
          /** main场景运行 */
          MainScence: "main-scene",

          /** run场景运行 */
          RunScence: "run-scene",

          /**  登录:即将打开界面(脚本都没加载) */
          Login_Will_Open: "login-will-open",

          /**  登录:已经打开界面(Ui调用了onStart) */
          Login_Opened: "login-opened",

          /**  登录:已经关闭界面(Ui调用了destory) */
          Login_Closed: "login-closed",

          /**  大厅:即将打开界面(脚本都没加载) */
          Hall_Will_Open: "hall-will-open",

          /**  大厅:已经打开界面(Ui调用了onStart) */
          Hall_Opened: "hall-opened",

          /**  大厅:已经关闭界面(Ui调用了destory) */
          Hall_Closed: "hall-closed",

          /**  游戏:即将打开界面(脚本都没加载) */
          Game_Will_Open: "game-will-open",

          /**  游戏:已经打开界面(Ui调用了onStart) */
          Game_Opened: "game-opened",

          /** 游戏:已经关闭界面(Ui调用了destory) */
          Game_Closed: "game-closed"
        };
        let PkgLoaderTaskList;

        (function (PkgLoaderTaskList) {
          PkgLoaderTaskList[PkgLoaderTaskList["Main"] = 0] = "Main";
          PkgLoaderTaskList[PkgLoaderTaskList["Login"] = 1] = "Login";
          PkgLoaderTaskList[PkgLoaderTaskList["Hall"] = 2] = "Hall";
          PkgLoaderTaskList[PkgLoaderTaskList["Game"] = 3] = "Game";
        })(PkgLoaderTaskList || (PkgLoaderTaskList = {}));

        _GConstants.PkgLoaderTaskList = PkgLoaderTaskList;
        const LoginStateCode = _GConstants.LoginStateCode = {
          /** wx平台登录code获取失败 */
          platform_fail_wx_logincode: 1,

          /** wx获取用户信息失败(已取得授权)*/
          platform_fail_wx_userinfo: 2,

          /** wx用户未获得授权*/
          platform_fail_wx_notAuthSetting: 3,

          /** wx用户拒绝授权*/
          platform_fail_wx_notAgreeAuthSetting: 4,

          /** wx创建授权按钮失败 原因是未获得平台登录code*/
          platform_fail_wx_logincode_authSettingBtn: 5,

          /** wx使用code获取sessio失败*/
          platform_fail_wx_code2session_error: 6,

          /** wx使用获取accert_token失败*/
          platform_fail_wx_access_token_error: 7
        };
        const UserLoginType = _GConstants.UserLoginType = {
          NONE: -1,
          // 默认
          Token: 1,
          Acount: 2,
          BoyaaPassportResetPsd: 3,
          //博雅通行证重置密码
          Notoken: 4,
          //游客登陆
          BoyaaPassportRegister: 5,
          //博雅通行证注册
          BoyaaPassportLogin: 6,
          //博雅通行证登录
          TaobaoLogin: 10,
          //淘宝账号登录
          Qihu360Login: 11,
          //360账号登录
          HeYouXiLogin: 12,
          //移动基地联运(和游戏)
          AiYouXiLogin: 13,
          //爱游戏联运
          HuaWei: 14,
          //华为登录
          OPPO: 15,
          // oppo登陆
          WechatLogin: 18,
          //微信登录
          AppleLogin: 20,
          //apple登录
          VIVO: 19 // vivo登陆

        };
        const UserUType = _GConstants.UserUType = {
          None: -1,
          //没有登录过
          Guest: 1,
          //试玩登录
          BoyaaPassport: 2,
          //博雅通行证
          Sina: 3,
          //新浪/微游戏
          Tencent: 4,
          //腾讯
          Taobao: 5,
          //淘宝
          Qihu360: 6,
          //360
          HeYouXi: 7,
          //移动基地联运(和游戏)
          AiYouXi: 8,
          //爱游戏
          HuaWei: 9,
          //华为
          OPPO: 11,
          // oppo
          Wechat: 14,
          //微信
          Apple: 16,
          //apple
          VIVO: 15 //vivo

        };
        const UserIdentity = _GConstants.UserIdentity = {
          Normal: 0,
          //普通用户
          Rmb: 1,
          //付费用户
          Vip: 2,
          //vip用户
          RmbAndVip: 3 //既是付费用户又是vip用户

        };
        const UserPropsType = _GConstants.UserPropsType = {
          TYPE_VIP: 1,
          //vip
          TYPE_VIP_HEAD: 2,
          //专属头像
          TYPE_VIP_KICK: 3,
          //踢人
          TYPE_VIP_MAGU: 4,
          //马股提示
          TYPE_VIP_GAME: 5,
          //专属比赛
          TYPE_VIP_FACE: 6,
          //专属表情
          TYPE_VIP_DEG: 7,
          //VIP破产
          TYPE_VIP_LOG: 8,
          //签到奖励
          TYPE_MATCHCARD_LOW: 9,
          //初级参赛券
          TYPE_BUQIANCARD: 10,
          //补签卡
          // 200~249为社交道具
          TYPE_ROSE: 200,
          // 鲜花
          TYPE_EGG: 201,
          // 鸡蛋
          TYPE_SHOES: 202,
          // 拖鞋
          TYPE_BOMB: 203,
          // 炸弹
          TYPE_SILVER: 150 // 银元

        };
        const PropertyType = _GConstants.PropertyType = {
          /** 银币 */
          SILVER_COIN: 0,

          /** 金条 */
          GOLD_BAR: 1,

          /** 兑换券 */
          DIAMOND: 2,

          /** 积分 */
          JIFEN: 3
        };
        const UserGameRecodeState = _GConstants.UserGameRecodeState = {
          Lose: -1,
          //输
          Draw: 0,
          //平局
          Win: 1,
          //赢
          WinMax: 2,
          //最大赢钱数
          LadderScore: 3 //天梯分

        };
        const GameRoomState = _GConstants.GameRoomState = {
          STATUS_NORMAL: 0,
          //未开始
          STATUS_READY: 1,
          //开始准备
          STATUS_READED: 2,
          //已经准备了
          STATUS_START: 3,
          //游戏开始
          STATUS_PLAYING: 4,
          //开始玩
          STATUS_GAMEOVER: 5,
          //结算中
          STATUS_EXITSUCCESS: 6 //退出成功

        };
        const GameRoomLevelConf = _GConstants.GameRoomLevelConf = {
          XINSHOU_ROOMID: 12,
          //新手场
          PRIVATE_ROOMID: 100,
          //私人房银币场
          PRIVATE_ROOMID_CRYSTAL: 10100,
          //私人房金条场
          PRIVATE_ROOMID_JIFEN: 30100,
          //私人房积分场
          MATCH_DINGJU_ROOMID: 500,
          //定局赛
          MATCH_XIANSHI_ROOMID: 600,
          //限时赛
          MATCH_DINGSHI_ROOMID: 700,
          //定时赛
          //私人房
          privateRoomLevel: [100, //私人房银币场,100
          10100, //私人房金条场,10100
          30100 //私人房积分场,30100
          ],
          //比赛房
          matchRoomLevel: [500, //定局赛,500
          600, //限时赛,600
          700 //定时赛,700
          ]
        };
        const UserLoginFailCode = _GConstants.UserLoginFailCode = {
          ERR_MOVE_SERVER: 1004,
          //server迁服
          ERR_FOBID_GUEST_LOGIN: 1051,
          //禁止试玩账号登录
          ERR_FORBID_VIRTUAL_MACHINE_LOGIN: 1070,
          //禁止模拟器登录
          ERR_STOP_SERVER: 1,
          //停服
          ERR_DISABLE_ACCOUNT: 1003,
          //账号被封
          ERR_DISABLE_GUEST: 1038,
          // 不允许游客登录
          ERR_VerifyCode_ERROR: 1074,
          //验证码错误
          ERR_REG_IDIOM_ERROR: 1076,
          //注册__需要成语验证码
          ERR_REG_PHONENUMBER_ERROR: 1077,
          //注册__需要手机号码注册
          ERR_LOGIN_BINDPHONE_ERROR: 1078,
          //需要绑定手机后登录
          ERR_LOGIN_IDIOM_ERROR: 1079,
          //需要成语验证码
          ERR_LOGIN_OVER_TIMES: 1080,
          //登录验证超过次数
          ERR_LOGIN_ANTIADDICTION_EXIT: 1088,
          // 登录失败，触发实名认证或防沉迷，强制退出游戏
          ERR_LOGIN_ANTIADDICTION_NOTICE: 1089,
          // 登录失败，提示需要实名认证
          ERR_LOGIN_ANTIADDICTION: 1090,
          // 登录失败，需要实名认证
          ERR_LOGIN_NOTICE: 1091 // 登录失败，弹窗提示

        };
        const UserLoginState = _GConstants.UserLoginState = {
          None: 0,
          //没登录
          Logining: 1,
          //正在登录中
          Switching: 2,
          //切换账户中
          LoginSuccess: 3,
          //登录成功
          LoginFailed: 4,
          //登录失败
          Offline: 5,
          //网络断线
          Kicked: 6,
          //被踢出房间
          MultiDeviceLogin: 7,
          //异地登录
          PhpKickout: 8,
          //在后台管理页上被踢
          SessionTimeOut: 9,
          //会话超时
          ServerStop: 10,
          //server停服
          DisableAccount: 1003,
          //账户被禁用了
          ForbidGuestLogin: 1051 //禁止试玩登录

        };
        const RedDotConf = _GConstants.RedDotConf = {
          /** 七日签到 */
          Sign: "Sign",

          /** 邮件 */
          Email: "Email",

          /** 商城 */
          Shop: "Shop",

          /** 好友 */
          Friend: "Friend",

          /** 活动中心-活动 */
          ActivityNormal: "Activity-Normal",

          /** 活动中心-公告 */
          ActivityNotice: "Activity-Notice",

          /** 头像 */
          UserHead: "User-Head",

          /** 新手活动 */
          NewUserActivity: "NewUserActivity",

          /** 首充活动 */
          FirstPay: 'Activity-FirstPay',

          /** 付费礼包 */
          Holiday: "Activity-Holiday",

          /** 破产礼包 */
          bankruptcy: "Giftbag-Bankruptcy"
        };
        const GoodsSubTypes = _GConstants.GoodsSubTypes = {
          PROP: 1,
          // 其他道具
          ROLE_EXPER: 2,
          // 角色体验卡 
          ROLE_MATERIAL: 3,
          // 角色材料
          AVATAR: 4,
          // 头像
          AVATAR_FRAME: 5,
          // 头像框
          CLOCK: 6,
          // 闹钟
          CHAT_FRAME: 7,
          // 聊天框
          EMOTI: 8,
          // 互动表情
          EMOTI_GIFT: 9,
          // 表情包
          ROOM_PROP: 10,
          // 牌局道具
          SKIN: 11,
          // 皮肤
          PET_ROLE: 12,
          // 宠物角色
          PET_PROP: 13,
          // 宠物道具
          ROLE: 14,
          // 人物角色
          ROLE_KSIN: 15,
          // 皮肤体验卡
          GOLD: 16,
          // 金币
          DIAMOND: 17,
          // 钻石
          Activity: 18,
          // 活跃度
          BUILD: 19,
          // 建造币
          QUICK_VOICE: 22 //快捷语音

        };
        const UserBankUpState = _GConstants.UserBankUpState = {
          /** 假破产 */
          Fake: -1,

          /**没有破产  */
          None: 0,

          /**真破产 */
          Real: 1
        };
        const UserBankUpType = _GConstants.UserBankUpType = {
          /** 保险箱资产足够 */
          BANKRUPT_TYPE_SAFEBOX: 1,

          /** 当前还有破产补助可领取 */
          BANKRUPT_TYPE_BANKRUPT: 2,

          /** 当前无破产补助可领取 */
          BANKRUPT_TYPE_OVER: 3,

          /** 破产最低银币数量 */
          BANKRUPT_TYPE_MINI: 3000
        };
        const BankupDialogType = _GConstants.BankupDialogType = {
          FIRST_SAFEBOX: 1,
          // 保险箱资产足够，首充+保险箱取款        弹窗1
          BANKRUPT_SAFEBOX: 2,
          // 保险箱资产足够，破产礼包+保险箱取款        弹窗2
          BANKRUPT_FIRST: 3,
          // 有破产补助：首充+破产补助          弹窗3
          BANKRUPT_BANKRUPTGIFT: 4,
          // 有破产补助：破产礼包+破产补助          弹窗4
          FIRST_NOBANKRUPT: 5,
          // 无破产补助：首充+无破产补助提示     弹窗5
          BANKRUPTGIFT_NOBANKRUPT: 6,
          // 无破产补助：破产礼包+无破产补助提示     弹窗6
          GIVE_UP: 7 // 游戏认输界面，调用破产礼包。屏蔽 破产补助+首充+保险箱逻辑，隐藏"去商城"和"回到大厅"

        };
        const MsgStatus = _GConstants.MsgStatus = {
          /** 原始状态 */
          MSG_STATUS_FRESH: 1,

          /** 已读 */
          MSG_STATUS_READ: 2,

          /** 已处理 */
          MSG_STATUS_HANDLED: 3
        };
        const MsgAwardStatus = _GConstants.MsgAwardStatus = {
          GOT: 1,
          NOT_GOT: 0
        };
        const MessageMaxNum = _GConstants.MessageMaxNum = 100;
        const UserGoodsDataType = _GConstants.UserGoodsDataType = {
          GOODS_CONFIG: 1,
          // 物品配置
          ROLES_CONFIG: 2,
          // 角色配置
          ROLES_SKILL: 3,
          // 角色技能
          BUILD_CONFIG: 4 // 建造配置

        };
        const ShopBigTabType = _GConstants.ShopBigTabType = {
          ALL: 0,
          SILVER_COIN: 1,
          //银币
          PROPS: 3 // 道具
          // GOLD: 12, // 金条

        };
        const GoodsListID = _GConstants.GoodsListID = {
          MarketSilver: 1,
          //商城银币商品信息
          MarketVip: 2,
          //商城VIP商品信息
          MarketProp: 3,
          //商城道具商品信息
          MarketGold: 12,
          //商城金条商品信息
          MarketHot: 4,
          //商城促销商品信息  (2.0没用了)
          // MarketCrystal: 12,				//商城金条商品信息
          Broken: 5,
          //破产商品
          HallPlus: 6,
          //快捷支付大厅加号
          RoomPay: 7,
          //快捷支付房间内 （这个列表会根据gameid 和 level而变化）
          VipCharge: 8,
          //VIP支付
          FirstRecharge: 9,
          //首冲
          SecondePay: 10,
          //二次付费
          Degrade: 11,
          //快捷支付入场 降级、入场 （这个列表会根据gameid 和 level而变化）
          AgentCard: 999,
          //代理年卡
          // FisrtPay : 17,//首充模块
          Bankruptcy: 19,
          //破产新窗口
          MarketGoldLevelChange: 20,
          // 商城升级礼包商品信息
          MallSlotMachine: 21,
          //商城老虎机
          RoomLevelDown: 22,
          //降场商品配置
          safebox: 23,
          //保险箱商品
          bankrupt_firstPay: 24,
          // 破产首充
          dressUp: 25,
          //装扮商品
          GiftPack: 26,
          //礼包商品，新首充
          // BankruptcyFeedBack : 27,					//破产新窗口  旧的，不用了
          limitPack: 28,
          //限时折扣礼包
          newYearPack: 29,
          // 超值福利（新年活动）
          BankruptcyFeedBack: 30,
          //破产新窗口
          GiftPackDaily: 31,
          // 每日礼包
          piggyBank: 32 // 存钱罐

        };
        const GoodsType = _GConstants.GoodsType = {
          SILVER_COIN: {
            id: 0,
            name: "银币"
          },
          GOLD_BAR: {
            id: 1,
            name: "金条"
          },
          DIAMOND: {
            id: 2,
            name: "兑换券"
          },
          JIFEN: {
            id: 3,
            name: "积分"
          }
        };
        const ShopSmallTabType = _GConstants.ShopSmallTabType = {
          SILVER_COIN: 1,
          //金条
          PROPS: 3 //道具
          // GOLD: 12, // 金条

        };
        const getGoodsTypeNameByScene = _GConstants.getGoodsTypeNameByScene = [{
          scene: 1,
          name: '银币'
        }, {
          scene: 3,
          name: '道具'
        }, {
          scene: 12,
          name: '金条'
        }];
        const GoodMoneyType = _GConstants.GoodMoneyType = {
          rmb: 1,
          //人民币
          gold: 2,
          //银币
          diamond: 3 //兑换券

        };
        const AppPayResult = _GConstants.AppPayResult = {
          /** 不支持 */
          UNINE: -1,

          /** 成功 */
          SUCCESS: 0,

          /** 失败 */
          FAIL: 1
        };
        const GameID = _GConstants.GameID = {
          // DDZ: 203,
          FXJ: 2000
        };
        const GameTab = _GConstants.GameTab = {
          /** 可吃场 */
          kechi: "kechi",

          /** 不可吃场 */
          bukechi: "bukechi"
        };
        const UBPaySceneConfig = _GConstants.UBPaySceneConfig = {
          kHallMarketGold: "1",
          //大厅商城银币
          kHallMarketVip: "2",
          //大厅商城VIP购买
          kHallMarketCrystal: "19",
          //大厅商城金条购买 
          kHallBroken: "3",
          //大厅破产
          //kGameLevelList                              : "4",            //游戏列表
          //kHallUserInfo                            : "5",               //个人资料(没有用，会跳转到商城)
          //kHallRankList                            : "6",               //排行榜(没有用，会跳转到商城)
          //KRoomRecharge                            : "7",               //房间充值(目前包含了 工具条和桌面上的按钮 已被拆分)
          KRoomBrokenRecharge: "8",
          //房间破产
          //KMatchApplyRecharge                         : "9",               //赛事
          //kGameFinishRecharge                         : "10",               //游戏结束充值
          KGameDescendRecharege: "11",
          //降场充值
          //kRoomToolBarRecharge                        : "12",               //房间工具条充值
          kRoomTableRecharge: "13",
          //房间桌面充值
          //kRoomVipPropRecharge                        : "14",               //房间桌面上的vip充值(如马股vip充值)
          kRoomChatWndVipRecharge: "15",
          //房间聊天框购买vip
          kRoomUserInfoVipRecharge: "16",
          //房间个人信息Vip充值（踢人充值）
          //kActivityRecharge                           : "17",               //活动中心直接调用充值
          kAgencyRecharge: "18",
          //代理商充值
          kMatchMarketGold: "20",
          //比赛商城银币
          kMatchMarketCrystal: "21",
          //比赛商城金条
          kMatchMarketVip: "22",
          //比赛商城vip
          kPrivateRoomMarketGold: "23",
          //私人房商城银币
          kPrivateRoomMarketCrystal: "24",
          //私人房商城金条
          kPrivateRoomMarketVip: "25",
          //私人房商城vip
          kBankruptMarketGold: "26",
          //破产商城银币
          kBankruptMarketCrystal: "27",
          //破产商城金条
          kBankruptMarketVip: "28",
          //破产商城vip
          kRankMarketGold: "29",
          //排行榜商城银币
          kRankMarketCrystal: "30",
          //排行榜商城金条
          kRankMarketVip: "31",
          //排行榜商城vip
          kTaskMarketGold: "32",
          //任务商城银币
          kTaskMarketCrystal: "33",
          //任务商城金条
          kTaskMarketVip: "34",
          //任务商城vip
          kPrivateRoomButtonMarketGold: "35",
          //私人房按钮商城银币
          kPrivateRoomButtonMarketCrystal: "36",
          //私人房按钮商城金条
          kPrivateRoomButtonMarketVip: "37",
          //私人房按钮商城vip
          kHallButtonMarketGold: "38",
          //大厅按钮商城银币
          kHallButtonMarketCrystal: "39",
          //大厅按钮商城金条
          kHallButtonMarketVip: "40",
          //大厅按钮商城vip
          kCommonJumpMarketGold: "41",
          //统一跳转商城银币(活动中心)
          kCommonJumpMarketCrystal: "42",
          //统一跳转商城金条(活动中心)
          kCommonJumpMarketVip: "43",
          //统一跳转商城vip(活动中心)
          //kUserInfoMarketGold                         : "44",               //个人信息商城银币（拆分）
          //kUserInfoMarketCrystal                      : "45",               //个人信息商城金条（拆分）
          //kUserInfoMarketVip                          : "46",               //个人信息商城vip（拆分）
          kHallGameMarketGold: "47",
          //大厅子游戏选场商城银币
          kHallGameMarketCrystal: "48",
          //大厅子游戏选场商城金条购买 
          kHallGameMarketVip: "49",
          //大厅子游戏选场商城VIP购买
          kHallUserInfoMarketGold: "50",
          //大厅个人信息商城银币
          kHallUserInfoMarketCrystal: "51",
          //大厅个人信息商城金条
          kHallUserInfoMarketVip: "52",
          //大厅个人信息商城vip
          kMatchUserInfoMarketGold: "53",
          //比赛个人信息商城银币
          kMatchUserInfoMarketCrystal: "54",
          //比赛个人信息商城金条
          kMatchUserInfoMarketVip: "55",
          //比赛个人信息商城vip
          kPrivateUserInfoMarketGold: "56",
          //私人房个人信息商城银币
          kPrivateUserInfoMarketCrystal: "57",
          //私人房个人信息商城金条
          kPrivateUserInfoMarketVip: "58",
          //私人房个人信息商城vip
          kPrivateCreateRoom: "59",
          //私人房创建房间
          kPrivateEnterRoom: "60",
          //私人房进入房间
          KInvitationalMatchCreate: "61",
          //邀请赛创建
          KInvitationalMatchSignup: "62",
          //邀请赛报名
          kMatchSignup: "63",
          //比赛列表报名
          kMatchSignupNext: "64",
          //比赛报名下一场
          kHallGameLevelEnter: "65",
          //大厅子游戏场次进入
          kHallGameUserInfoMarketGold: "66",
          //大厅子游戏选场个人资料商城银币
          kHallGameUserInfoMarketCrystal: "67",
          //大厅子游戏选场个人资料商城金条
          kHallGameUserInfoMarketVip: "68",
          //大厅子游戏选场个人资料商城vip
          kRoomMenuBarMarket: "69",
          //房间菜单商城
          kRoomGameRecharge: "80",
          //子游戏发起的支付（房间桌面上的vip充值和游戏结束充值）
          kMatchMarketButtonGold: "81",
          //比赛场按钮商城银币
          kMatchMarketButtonCrystal: "82",
          //比赛场按钮商城金条
          kMatchMarketButtonVip: "83",
          //比赛场按钮商城vip
          kFirstPay_1: "93",
          //登录弹出的首充礼包
          kFirstPay_2: "94",
          //大厅icon进入的首充礼包
          kFirstPay_3: "95",
          //破产时弹出的首充礼包
          KExitRecharge: "96",
          //退出时弹出的充值
          KBankrupt_1: "97",
          //手动领取弹窗付费
          KBankrupt_2: "98",
          //自动领取弹窗付费
          kHallGameLevelEnterBankrupt: "99",
          //大厅子游戏破产状态下进入
          KMallSlotMachineRecharge1: "100",
          //商城老虎机的充值(自动弹出)
          KMallSlotMachineRecharge2: "101",
          //商城老虎机的充值(手动点击)
          KGameLevelUp: "102",
          //升场礼包购买
          KGameLevelDown: "103",
          //降场礼包购买
          KSafebox: "104",
          //保险箱支付
          KBankruptFeedBack: "105",
          //破产回馈请求
          KAeroplanChess: "106",
          //向前冲活动付费
          KHolidayGifg: "107",
          //限时特惠付费礼包
          KBankrupt_3: "108",
          //游戏认输界面，调用破产礼包支付
          kActivity_1: "109",
          //新年活动支付
          kDailyGiftPack: "110",
          //每日礼包
          //kDailyGiftPack_2                            : "111",               //大厅icon的每日礼包
          KPiggyBank: "112" //大厅存钱罐

        };
        const UBPayLastSceneConfig = _GConstants.UBPayLastSceneConfig = {
          kHallScene: 1,
          // 大厅场景
          kHallSceneButton: 2,
          // 大厅场景按钮
          kMatchHallScene: 3,
          // 比赛场景
          kMatchHallSceneButton: 4,
          // 比赛场景按钮
          kPrivateRoomScene: 5,
          // 私人房场景
          kPrivateRoomSceneButton: 6,
          // 私人房场景按钮
          kBankruptScene: 7,
          // 破产场景
          kRankScene: 8,
          // 排行榜场景
          kTaskScene: 9,
          // 任务场景
          kCommonJump: 10,
          // 统一跳转(活动中心)
          kHallSceneGame: 11,
          // 大厅子游戏场景
          kHallUserInfoScene: 12,
          // 大厅个人信息
          kMatchUserInfoScene: 13,
          // 比赛个人信息
          kPrivateUserInfoScene: 14,
          // 私人房个人信息
          kGameUserInfoScene: 15 // 大厅子游戏选场个人信息

        };
        const JumpViewConf = _GConstants.JumpViewConf = {
          /** 登录 */
          POS_LOGIN: 1,

          /** 跳转至个人资料界面 */
          POS_ACT_USERINFO: 1005,

          /** 跳转至好友界 */
          POS_ACT_FRIEND: 1011,

          /** 跳转至大厅界面 */
          POS_ACT_HALL: 1006,

          /** 活动中心跳转玩牌 */
          POS_ACT_GAME: 1007,

          /** 活动中心跳转商城 */
          POS_ACT_MALL: 1008,

          /** 桌面添加银币,特价礼包，每日签到 */
          POS_ACT_DESK_SIGN_POS_ACT_SPECIALGIFT: 1045,

          /** 跳转至特价礼包界面  tag 映射和服务端约定 */
          POS_ACT_SPECIALGIFT_TAG: "SPECIALSGIFTPACK",

          /** 跳转至每日签到  tag*/
          POS_ACT_SIGN_TAG: "SIGN",

          /** 桌面添加银币 tag*/
          POS_ACT_DESK_TAG: "DESKTOPCOIN",

          /** 活动中心跳转联系客服有奖 */
          POS_ACT_CUSTOMER_SERVICE: 'KEFUCOIN'
        };
        const PopupPos = _GConstants.PopupPos = {
          /** 登录 */
          POS_LOGIN: 1,

          /** 登出（退出应用）*/
          POS_LOGOUT: 2,

          /** 结算 */
          POS_BALANCE: 3,

          /** 返回大厅（从选场返回）*/
          POS_BACK_HALL: 4,

          /** 进入房间 */
          POS_INTO_ROOM: 5,

          /** 退出房间（返回选场）*/
          // POS_OUT_ROOM : 6,    

          /** 商城返回大厅 */
          POS_Mall_GO_Lobby: 6
        };
        const PopupIds = _GConstants.PopupIds = {
          /** 签到 */
          SIGNIN: 1000,

          /** 分享 */
          SHARE: 10020,

          /** 活动中心 */
          ACTIVITY_CENTER: 2,

          /** 首充 */
          FIRSTPAY_ACTIVITY: 30,

          /** 特价礼包 */
          HOLIDAY_ACTIVITY: 33,

          /** 破产礼包 */
          GIFTBAG_BANKRUPTCY: 35
        };
        const PayMode = _GConstants.PayMode = {
          WEIXIN_PMODE: "431",
          // 微信支付3.0
          WEBCHAT_PMODE: "756",
          // 微信web支付
          APPLE_PMODE: "99" // iOS支付

        };
        const PayType = _GConstants.PayType = {
          /** 免费 */
          FREE: 0,

          /** 人民币 */
          RMB: 1,

          /** 银币 */
          SILVER: 2,

          /** 兑换券 */
          TICKET: 3,

          /** 分享 */
          SHARE: 4,

          /** 看视频 */
          VIDEO: 5,

          /** 金条 */
          GOLD: 6,

          /** 微信虚拟支付 */
          WXTSET: 937
        };
        const PayScene = _GConstants.PayScene = {
          hall: "大厅",
          game: "游戏"
        };
        const PayModel = _GConstants.PayModel = {
          sign_card: "签到_补签卡",
          sign_video: "签到_视频补签",
          userinfo_dress: "个人信息_装扮",
          role_expbook: "角色_经验书",
          role_buy: "角色_购买",
          shop: "商城",
          shop_hot: "商城_热销",
          shop_gold: "商城_金豆",
          shop_silver_coin: "商城_银币",
          shop_props: "商城_道具",
          shop_dress: "商城_装扮",
          shop_role: "商城_角色",
          shop_jewelry: "商城_宝珠",
          gift_newUser: "新手/首充礼包",
          gift_limit: "限量礼包",
          gift_flash: "限时礼包",
          gift_discount: "特价礼包",
          gift_weekly: "续航礼",
          spring_limit: "春日限定装扮",
          buy_limit: "限购礼包",
          quick_pay: "通用支付"
        };
        const BtnConf = _GConstants.BtnConf = {
          /**同意-小 */
          Label_Agree: "agree",

          /**已发送 */
          Label_Has_send: "has_send",

          /**忽略 */
          Label_Ignore: "ignore",

          /**允许 */
          Label_Allow: "img_allow",

          /**活动专属 */
          Label_Activity: "label_activity",

          /**同意-大 */
          Label_Agree_big: "label_agree",

          /**购买 */
          Label_Buy: "label_buy",

          /**取消 */
          Label_Cancel: "label_cancel",

          /**切换账号 */
          Label_Change: "label_change",

          /**确认 */
          Label_Confirm: "label_confirm",

          /**删除 */
          Label_Del_1: "label_del_1",

          /**删除 */
          Label_Del: "label_delete",

          /**不同意并退出 */
          Label_Exit2: "label_exit2",

          /**出战 */
          Label_Fight: "label_fight",

          /**已出战 */
          Label_Has_fight: "label_fight_gray",

          /**前往 */
          Label_Goto: "label_goto",

          /**活动限定 */
          Label_Limit: "label_limit",

          /**修改 */
          Label_Modify: "label_modify",

          /**否*/
          Label_No: "label_no",

          /**不允许 */
          Label_Not_allow: "label_not_allow",

          /**提交 */
          Label_Push: "label_push",

          /**领取 */
          Label_Receive: "label_receive",

          /**领取_小 */
          Label_Receive_small: "label_receive_1",

          /**出售 */
          Label_Sell: "label_sell",

          /**分享 */
          Label_Share: "label_share",

          /**升级 */
          Label_Upgrade: "label_upgrade",

          /**立即使用 */
          Label_Use: "label_use",

          /**使用 */
          Label_Use2: "label_use2",

          /**使用中 */
          Label_Use3: "label_use3",

          /**是 */
          Label_Yes: "label_yes",

          /**退出登录 */
          Label_Logout: "label_logout",

          /**发送 */
          Label_Send: "label_send",

          /**点赞 */
          Label_Support: "label_support",

          /**蓝色按钮框——小*/
          Btn_Blue_Small: "btn_blue_1",

          /**蓝色按钮框——大*/
          Btn_Blue_Big: "btn_blue",

          /**灰色按钮框——小*/
          Btn_Gray_Small: "btn_gray_1",

          /**灰色按钮框——大*/
          Btn_Gray_Big: "btn_gray",

          /**红色按钮框——小*/
          Btn_Red_Small: "btn_red_1",

          /**红色按钮框——大*/
          Btn_Red_Big: "btn_red",

          /**黄色按钮框——小*/
          Btn_Yellow_Small: "btn_yellow_1",

          /**黄色按钮框——大*/
          Btn_Yellow_Big: "btn_yellow"
        };
        const DialogTitle = _GConstants.DialogTitle = {
          /**添加标签*/
          Add_tag: "add_tag",

          /**权限请求*/
          Authority: "authority",

          /**更换头像*/
          Change_head: "change_head",

          /**小小斗地主*/
          Ddz_title: "ddz_title",

          /**好友列表*/
          Friend_list: "friend_list",

          /**礼包内容*/
          Gift_content: "gift_comtent",

          /**商品内容*/
          Goods_content: "goods_comtent",

          /**未成年人防沉迷限制提示*/
          Indulge: "indulge",

          /**发现新版本*/
          New_version: "new_version",

          /**手机绑定*/
          Phone_bind: "phone_bind",

          /**手机登录*/
          Phone_login: "phone_login",

          /**实名认证*/
          Real_name: "real_name",

          /**角色升级*/
          Role_upgrade: "role_upgrade",

          /**温馨提示*/
          Tips: "tips",

          /**确认购买*/
          Tobuy: "tobuy",

          /**修改地区*/
          Update_address: "update_address",

          /**修改信息*/
          Update_msg: "update_msg",

          /**使用规则*/
          Use_rule: "use_rule"
        };
        const ShareSceneConf = _GConstants.ShareSceneConf = {
          /** 客服分享 */
          kefugift: "kefugift",

          /** 分享有礼 */
          sharegift: "sharegift",

          /** 商城分享(礼包类的分享配置都属于商城周睿木海东闯一起确定) */
          shopshare: "shopshare",

          /** 好友界面分享 */
          friend: "friend",

          /** 特价礼包分享 */
          limitDiscount: "sharegift"
        };
        const MenuIDConf = _GConstants.MenuIDConf = {
          ZKLB: 1 // 折扣礼包
          // XSLB: 1, // 新手礼包/首充礼包 GiftNewUserLayer
          // XSTH: 2, // 限时特惠 GiftFlashLayer
          // KNIFT: 3, // 小小飞刀 GiftKnifeLayer
          // MRTJ: 4, // 每日特价 GiftDiscountLayer
          // PTHD: 5, // 拼图寻宝 JigsawView
          // JRHD: 6, // 节日活动/国庆玩牌 FestivalActivityView
          // XSQT: 7, // 新手七天 NewUser7DayLayer
          // LIMIT: 8, // 限量礼包/限量抢购 GiftLimitLayer
          // JSTY: 9, //角色体验 playCardsTaskLayer
          // EGG: 10, // 扭蛋机 GiftEggLayer
          // CAR: 11, //停车活动 stopCarView
          // ACTIVITYCENTER: 12, //活动合集 SpringView
          // SPRING_LIMIT: 13, // 春节限定装扮 SpringLimitView
          // WEEKLY: 14,//周卡(续航礼) GiftWeekly
          // LUCKY: 15,//许愿池 LuckyView
          // SYNTHESIS_ACTIVITY: 16,//合成活动 synthesisActivity
          // HAPPY: 50,//翻翻乐活动 Happy5CardsView
          // PIGGY: 51, // 储豆罐 PiggyBankView
          // TREASURE: 52,//挖宝活动 TreasureView
          // XGLB: 17, // 限购礼包 BuyLimitView
          // ZSS: 53, //钻石山
          // ADVEDIO: 59, // 视频广告
          // MOREGOLDS: 55, // 金豆多多
          // BLINDBOX: 56,// 盲盒
          // FREEGOLD: 57, // 免费金币
          // LUCKLOTTERY: 58, // 幸运抽奖
          // LDJHD: 60, // 劳动节活动
          // XMLB: 61, // 小满礼包
          // ZKLB: 70, // 折扣礼包

        };
        const WatchMessageFrdType = _GConstants.WatchMessageFrdType = {
          inval: 0,
          // 非法值
          invite: 1,
          // 点赞邀请
          likes: 2,
          // 点赞信息
          add_result: 3,
          // 好友申请结果通知
          add_info: 4,
          // 好友申请
          gift: 5,
          // 好友礼物
          gift_thank: 6 // 好友礼物感谢

        };
        const FriendUserInfoSceneTab = _GConstants.FriendUserInfoSceneTab = {
          list: 1,
          lately: 2,
          friendMsg: 3
        };
        const ReqUrl = _GConstants.ReqUrl = {
          //类型 1-商城视频，商城分享 2-其他分享
          shareType: {
            shop: 1,
            other: 2
          },
          //	请求接口url常量 action字段
          shopShareUrl: 'applet.getShareInfo',
          shareCBUrl: 'applet.callback'
        };
        const goodsIsHave = _GConstants.goodsIsHave = {
          isNotHave: 0,
          isHave: 1
        };
        const AppLunchScene = _GConstants.AppLunchScene = {
          ["1000"]: 1000,

          /** 其他 **/
          ["1001"]: 1001,

          /** 发现页小程序「最近使用」列表（基础库2.2.4-2.29.0版本包含「我的小程序」列表，2.29.1版本起仅为「最近使用」列表）**/
          ["1005"]: 1005,

          /** 微信首页顶部搜索框的搜索结果页	**/
          ["1006"]: 1006,

          /** 发现栏小程序主入口搜索框的搜索结果页	**/
          ["1007"]: 1007,

          /** 单人聊天会话中的小程序消息卡片	**/
          ["1008"]: 1008,

          /** 群聊会话中的小程序消息卡片	**/
          ["1010"]: 1010,

          /** 收藏夹	**/
          ["1011"]: 1011,

          /** 扫描二维码	**/
          ["1012"]: 1012,

          /** 长按图片识别二维码	**/
          ["1013"]: 1013,

          /** 扫描手机相册中选取的二维码	**/
          ["1014"]: 1014,

          /** 小程序订阅消息（与1107相同）	**/
          ["1017"]: 1017,

          /** 前往小程序体验版的入口页	**/
          ["1018"]: 1018,

          /** openWeApp JSAPI，网页打开进入小程序	**/
          ["1019"]: 1019,

          /** 微信钱包（微信客户端7.0.0版本改为支付入口）	 **/
          ["1020"]: 1020,

          /** 公众号 profile 页相关小程序列表（已废弃）	 **/
          ["1022"]: 1022,

          /** 聊天顶部置顶小程序入口（微信客户端6.6.1版本起废弃）**/
          ["1023"]: 1023,

          /** 安卓系统桌面图标 **/
          ["1024"]: 1024,

          /** 小程序 profile 页 **/
          ["1025"]: 1025,

          /** 扫描一维码 **/
          ["1026"]: 1026,

          /** 发现栏小程序主入口，「附近的小程序」列表 **/
          ["1027"]: 1027,

          /** 微信首页顶部搜索框搜索结果页「使用过的小程序」列表 **/
          ["1028"]: 1028,

          /** 卡包里的券和礼品卡，打开小程序 **/
          ["1029"]: 1029,

          /** 小程序中的卡券详情页 **/
          ["1030"]: 1030,

          /** 自动化测试下打开小程序	**/
          ["1031"]: 1031,

          /** 长按图片识别一维码 **/
          ["1032"]: 1032,

          /** 扫描手机相册中选取的一维码 **/
          ["1034"]: 1034,

          /** 微信支付完成页 **/
          ["1035"]: 1035,

          /** 公众号自定义菜单 **/
          ["1036"]: 1036,

          /** App 分享消息卡片 **/
          ["1037"]: 1037,

          /** 小程序打开小程序 **/
          ["1038"]: 1038,

          /** 从另一个小程序返回 **/
          ["1039"]: 1039,

          /** 摇电视 **/
          ["1042"]: 1042,

          /** 添加好友搜索框的搜索结果页 **/
          ["1043"]: 1043,

          /** 公众号模板消息 **/
          ["1044"]: 1044,

          /** 带 shareTicket 的小程序消息卡片 详情 **/
          ["1045"]: 1045,

          /** 朋友圈广告 **/
          ["1046"]: 1046,

          /** 朋友圈广告详情页 **/
          ["1047"]: 1047,

          /** 扫描小程序码 **/
          ["1048"]: 1048,

          /** 长按图片识别小程序码 **/
          ["1049"]: 1049,

          /** 扫描手机相册中选取的小程序码 **/
          ["1052"]: 1052,

          /** 卡券的适用门店列表 **/
          ["1053"]: 1053,

          /** 发现页进入搜一搜的搜索结果页 **/
          ["1054"]: 1054,

          /** 顶部搜索框小程序快捷入口（微信客户端版本6.7.4起废弃）**/
          ["1055"]: 1055,

          /** JSAPI网页打开小程序	**/
          ["1056"]: 1056,

          /** 聊天顶部音乐播放器右上角菜单 **/
          ["1057"]: 1057,

          /** 钱包中的银行卡详情页 **/
          ["1058"]: 1058,

          /** 公众号文章调用openWeApp **/
          ["1059"]: 1059,

          /** 体验版小程序绑定邀请页	**/
          ["1064"]: 1064,

          /** 微信首页连Wi-Fi状态栏 **/
          ["1065"]: 1065,

          /** URL scheme 详情	**/
          ["1067"]: 1067,

          /** 公众号文章广告 **/
          ["1068"]: 1068,

          /** 附近小程序列表广告（已废弃）	**/
          ["1069"]: 1069,

          /** 移动应用通过 openSDK 进入微信，打开小程序 **/
          ["1071"]: 1071,

          /** 钱包中的银行卡列表页 **/
          ["1072"]: 1072,

          /** 二维码收款页面 **/
          ["1073"]: 1073,

          /** 客服消息列表下发的小程序消息卡片 **/
          ["1074"]: 1074,

          /** 公众号会话下发的小程序消息卡片 **/
          ["1077"]: 1077,

          /** 摇周边 **/
          ["1078"]: 1078,

          /** 微信连Wi-Fi成功提示页 **/
          ["1081"]: 1081,

          /** 客服消息下发的文字链 **/
          ["1082"]: 1082,

          /** 公众号会话下发的文字链 **/
          ["1084"]: 1084,

          /** 朋友圈广告原生页 **/
          ["1088"]: 1088,

          /** 会话中 系统消息，打开小程序 **/
          ["1089"]: 1089,

          /** 微信聊天主界面下拉，「最近使用」栏（基础库2.2.4-2.29.0版本包含「我的小程序」栏，2.29.1版本起仅为「最近使用」栏 **/
          ["1090"]: 1090,

          /** 长按小程序右上角退出键唤出最近使用历史 **/
          ["1091"]: 1091,

          /** 公众号文章商品卡片 **/
          ["1092"]: 1092,

          /** 城市服务入口 **/
          ["1095"]: 1095,

          /** 小程序广告组件 **/
          ["1096"]: 1096,

          /** 聊天记录，打开小程序 **/
          ["1097"]: 1097,

          /** 微信支付签约原生页，打开小程序 **/
          ["1099"]: 1099,

          /** 页面内嵌插件	**/
          ["1100"]: 1100,

          /** 红包封面详情页打开小程序 **/
          ["1101"]: 1101,

          /** 远程调试热更新（开发者工具中，预览 -> 自动预览 -> 编译并预览） **/
          ["1102"]: 1102,

          /** 公众号profile页服务预览模块，打开小程序 **/
          ["1103"]: 1103,

          /** 发现页小程序「我的小程序」列表（基础库2.2.4-2.29.0版本废弃，2.29.1版本起生效）	**/
          ["1104"]: 1104,

          /** 微信聊天主界面下拉，「我的小程序」栏（基础库2.2.4-2.29.0版本废弃，2.29.1版本起生效）	**/
          ["1106"]: 1106,

          /** 聊天主界面下拉，从顶部搜索结果页，打开小程序	**/
          ["1107"]: 1107,

          /** 订阅消息，打开小程序	**/
          ["1113"]: 1113,

          /** 安卓手机负一屏，打开小程序（三星）	**/
          ["1114"]: 1114,

          /** 安卓手机侧边栏，打开小程序（三星）	**/
          ["1124"]: 1124,

          /** 扫“一物一码”打开小程序	**/
          ["1125"]: 1125,

          /** 长按图片识别“一物一码”	**/
          ["1126"]: 1126,

          /** 扫描手机相册中选取的“一物一码”	**/
          ["1129"]: 1129,

          /** 微信爬虫访问 详情	**/
          ["1131"]: 1131,

          /** 浮窗（8.0版本起仅包含被动浮窗）	**/
          ["1133"]: 1133,

          /** 硬件设备打开小程序 详情	**/
          ["1135"]: 1135,

          /** 小程序profile页其他小程序列表，打开小程序 **/
          ["1144"]: 1144,

          /** 公众号文章 - 视频贴片 **/
          ["1145"]: 1145,

          /** 发现栏 - 发现小程序 **/
          ["1146"]: 1146,

          /** 地理位置信息打开出行类小程序 **/
          ["1148"]: 1148,

          /** 卡包-交通卡，打开小程序	**/
          ["1150"]: 1150,

          /** 扫一扫商品条码结果页打开小程序 **/
          ["1152"]: 1152,

          /** 订阅号视频打开小程序 **/
          ["1153"]: 1153,

          /** “识物”结果页打开小程序 **/
          ["1154"]: 1154,

          /** 朋友圈内打开“单页模式” **/
          ["1155"]: 1155,

          /** “单页模式”打开小程序 **/
          ["1158"]: 1158,

          /** 群工具打开小程序 **/
          ["1160"]: 1160,

          /** 群待办 **/
          ["1167"]: 1167,

          /** H5 通过开放标签打开小程序 详情	**/
          ["1168"]: 1168,

          /** 移动 网站应用直接运行小程序	**/
          ["1177"]: 1177,

          /** 视频号直播商品 **/
          ["1178"]: 1178,

          /** 在电脑打开手机上打开的小程序 **/
          ["1179"]: 1179,

          /** #话题页打开小程序 **/
          ["1181"]: 1181,

          /** 网站应用打开PC小程序	**/
          ["1184"]: 1184,

          /** 视频号链接打开小程序 **/
          ["1187"]: 1187,

          /** 浮窗（8.0版本起） **/
          ["1193"]: 1193,

          /** 视频号主页服务菜单打开小程序 **/
          ["1194"]: 1194,

          /** URL Link 详情	**/
          ["1197"]: 1197,

          /** 视频号主播从直播间返回小游戏 **/
          ["1198"]: 1198,

          /** 视频号开播界面打开小游戏 **/
          ["1199"]: 1199,

          /** 小游戏内“更多游戏”入口打开小程序	**/
          ["1200"]: 1200,

          /** 视频号广告打开小程序 **/
          ["1201"]: 1201,

          /** 视频号广告详情页打开小程序 **/
          ["1205"]: 1205,

          /** 非广告进入视频号直播间打开游戏卡片	**/
          ["1206"]: 1206,

          /** 视频号小游戏直播间打开小游戏 **/
          ["1219"]: 1219,

          /** 视频号直播间小游戏一键上车	**/
          ["1223"]: 1223,

          /** 安卓桌面Widget打开小程序 **/
          ["1228"]: 1228,

          /** 视频号原生广告组件打开小程序 **/
          ["1230"]: 1230,

          /** 订阅号H5广告进入小程序 **/
          ["1231"]: 1231,

          /** 动态消息提醒入口打开小程序 **/
          ["1232"]: 1232,

          /** 搜一搜竞价广告打开小程序	**/
          ["1233"]: 1233,

          /** 小程序搜索推荐模块打开小游戏	**/
          ["1238"]: 1238,

          /** 看一看信息流广告打开小程序	**/
          ["1239"]: 1239
          /** 视频号小游戏直播间气泡浮窗打开小游戏	**/

        };
        const shareSucConditions = _GConstants.shareSucConditions = {
          shareUseTime: 3
        };
      })(GConstants || _export("GConstants", GConstants = {}));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=64043ab8f989dc6a136e5d53a6297dc9aef797db.js.map