System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, AppEvent, GPBWriteAndRead, _crd, CmdBingding, HeadCmdBingding, GlobalCMDHead, GlobalPhpStartCmd, GetNextPhpCmd, GlobalCMD, GlobalHeadCmdBinding, GlobalCmdBindingHead;

  function _reportPossibleCrUseOfAppEvent(extras) {
    _reporterNs.report("AppEvent", "../../config/AppEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfICMD_BINDING_HEAD(extras) {
    _reporterNs.report("ICMD_BINDING_HEAD", "../../framework/network/NetInterface", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGPBWriteAndRead(extras) {
    _reporterNs.report("GPBWriteAndRead", "./GPBWriteAndRead", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      AppEvent = _unresolved_2.AppEvent;
    }, function (_unresolved_3) {
      GPBWriteAndRead = _unresolved_3.GPBWriteAndRead;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "096f6uoKqNJNYk4cdRommt9", "GlobalCMD", undefined);

      /**
       * Name = GlobalCMD
       * URL = db://assets/proj/GlobalCMD.ts
       * Time = Wed Apr 13 2022 18:51:11 GMT+0800 (中国标准时间)
       * Author = xueya
       * 全局命令配置
       */

      /** Actionbingding类型 */
      _export("CmdBingding", CmdBingding = function (reqHead = null, respHead = null, action = null, respEvent = null) {
        if (reqHead == 0) {
          reqHead = GlobalCMDHead.SEND_PHP_REQUEST_NEW;
        }

        if (respHead == 0) {
          respHead = GlobalCMDHead.RESPONSE_PHP_REQUEST_NEW;
        }

        let binding = {
          /** 请求头 */
          reqHead: reqHead,

          /** 响应头 */
          respHead: respHead,

          /** 动作名 */
          action: action,

          /** 返回时绑定的事件 */
          respEvent: respEvent,

          /** 读还是写 只有头部命令有 0读 1写*/
          pbType: null,

          /** 解析函数 */
          pbFunc: null
        };
        return binding;
      });
      /**
       * 头部命令的绑定
       * @param pbType 读写类型
       * @param pbFunc 解析函数
       * @param respEvent 响应事件 
       * @returns 
       */


      _export("HeadCmdBingding", HeadCmdBingding = function (pbType = null, pbFunc = null, respEvent = null) {
        let binding = {
          /** 请求头 */
          reqHead: null,

          /** 响应头 */
          respHead: null,

          /** 动作名 */
          action: null,

          /** 返回时绑定的事件 */
          respEvent: respEvent,

          /** 读还是写 只有头部命令有 0读 1写*/
          pbType: pbType,

          /** 解析函数 */
          pbFunc: pbFunc
        };
        return binding;
      });
      /** 头部命令 */


      _export("GlobalCMDHead", GlobalCMDHead = {
        PHP_CMD_CONSTANT: 0x10000,
        SEND_PHP_REQUEST: 0x0023,
        RESPONSE_PHP_REQUEST: 0x0024,
        PHP_REQUEST_TIMEOUT: 0x0027,
        SEND_PHP_REQUEST_NEW: 0x0038,
        RESPONSE_PHP_REQUEST_NEW: 0x0039,
        SERVER_SEND_HEART: 0x2008,
        //发送心跳包
        SERVER_HEART_RESPONSE: 0x600d,
        //服务器回应心跳包
        SERVER_USER_REQUESTCMD: 0xEEED,
        //防沉迷请求
        SERVER_USER_REPONSECMD: 0xEEED,
        //防沉迷响应
        RESPONSE_HALL_LOGIN_SUCCESS: 0x0202,
        //大厅登录成功
        RESPONSE_MULTI_DEVICE_LOGIN: 0x0043,
        //异地登录
        PHP_MSG_TO_CLIENT: 0x7850,
        // 推送消息
        PHP_RADIO_TO_CLIENT: 0x7852,
        // php对客户端广播消息
        MATCH_TIME_LIMIT_REWARD: 0xA18,
        // -
        SERVER_USER_VIP_INFO: 0x1109,
        // server返回用户VIP详细信息
        SERVER_USER_VIP_ERROR: 0x3009,
        // server返回VIP的错误
        SERVER_USER_VIP_EXPIRED: 0x110A,
        // -
        SERVER_MULTI_DEVICE_LOGIN: 0x0043,
        SERVER_REQUEST_RELOGIN: 0x0045,
        // server客户端需重新登录
        SERVER_COMMAND_BROAD_PHP_USE_PROPS: 0x2129,
        //  广播使用道具
        SERVER_COMMAND_VIPKICK_SUCCESS: 0x1024,
        // VIP踢人返回
        SERVER_COMMAND_BROAD_REFRESH_USERINFO: 0x2025,
        //  server广播更新银币与游戏中的信息 (注  历史遗留问题， 目前只有四国军棋在用 请不要使用这个命令字了)
        SERVER_COMMAND_PUSH_USERINFO: 0x2215,
        //  server主动推送用户数据给前端
        RESPONSE_BROADCAST_PAY_MONEY: 0x7052,
        //广播支付获取金币

        /**************以下为大厅与游戏公用部分****************** */

        /*********************** 请求 ***************************/
        ROOM_LOGIN_GAME_ONE_KEY: 0x119,
        //一条指令登录，省去了118,210,1001
        ROOM_SEND_LOGIN: 0x1001,
        //登录房间
        ROOM_SEND_LOGOUT: 0x1002,
        //退出房间
        USER_READY_REQUEST: 0x2001,
        //用户请求准备
        CLIENT_COMMAND_REQUEST_AI: 0x2005,
        //用户托管或取消托管
        CLIENT_COMMAND_CHANGE_TABLE: 0x1028,
        //请求换桌
        CLIENT_COMMAND_LOGOUT_IN_GAME: 0x1039,
        //玩家请求退出(游戏中)
        // ROOM_USER_CHAT_REQ 							  : 0x1003, //用户对话
        // ROOM_USER_FACE_REQ 							  : 0x1004, //用户表情

        /*********************** 接收 ***************************/
        ROOM_LOGOUT_SUCCESS: 0x1008,
        //退出房间成功
        ROOM_LOGIN_ERR: 0x1005,
        //登录房间失败
        // ROOM_LOGIN_SUCCESS: 0x1007,          //房间登录成功 //此指令由个游戏处理
        ROOM_UP_LEVEL: 0x2203,
        //房间等级变化
        ROOM_SERVER_RESPONSE_TABLE_INFO: 0x214,
        //server返回桌子信息
        SERVER_COMMAND_READY_INFO: 0x80B2,
        //server通知准备相关信息：准备倒计时
        SERVER_BROADCAST_PLAYER_READY: 0x4001,
        //广播玩家准备
        SERVER_BROADCAST_PLAYER_AI: 0x4007,
        //广播用户托管
        SERVER_BROADCAST_PLAYER_LOGOUT: 0x100E,
        //广播用户退出
        SERVER_BROADCAST_PLAYER_LOGIN: 0x100D,
        //广播用户进入
        SERVER_COMMAND_LOGOUT_INGAME_RSP: 0x1062,
        //Server回应退出请求(游戏中退出)
        ROOM_USER_CHAT_RESP: 0x1003,
        //用户对话
        ROOM_USER_FACE_RESP: 0x1004,
        //用户表情
        //破产相关(走游戏协议)
        SEND_BANKRUPT_CONFIG: 0x0005,
        //获取破产数据信息
        RESPONSE_BANKRUPT_CONFIG: 0x0006,
        //回复用户破产数据信息请求
        SEND_BANKRUPT_MONEY: 0x0009,
        //用户请求破产
        RESPONSE_BANKRUPT_MONEY: 0x0010,
        //返回用户破产请求
        SEND_BANKRUPT_COUNT: 0x0015,
        //用户请求获取破产次数
        RESPONSE_BANKRUPT_COUNT: 0x0016,
        //返回用户破产次数
        //游戏房间、大厅都用到的指令 到时提出了作为公用指令
        ROOM_SEND_JOIN_GAME: 0x113,
        //请求加入游戏
        // ROOM_LOGIN_GAME_ONE_KEY: 0x119,                    //一条指令登录，省去了118,210,1001
        // REQUEST_ROOMLEVEL 											: 0x0051, //请求房间等级
        CLIENT_COMMAND_VIPKICK: 0x1023,
        //VIP踢人
        ROOM_REQUEST_RECONNECT: 0x2127,
        //请求重连
        // ROOM_USER_CHAT 												: 0x1003, //用户对话
        // ROOM_USER_FACE 												: 0x1004, //用户表情
        ROOM_USER_INVITE: 0x1090,
        //用户普通房间内邀请登录房间
        ////////////////////// 接收命令 //////////////////////
        RESPONSE_JOIN_GAME_RESPONSE: 0x210,
        //请求加入游戏回复
        ROOM_RECONNECT: 0x1009,
        //重连进入房间
        SERVER_BROADCAST_STOP_GAME_IN_PLAY: 0x4016,
        //广播游戏强制结束（游戏中有玩家退出）
        SERVER_COMMAND_CHANGE_TABLE_ERR: 0x1029,
        //请求换桌失败
        // RESPONE_ROOMLEVEL 											: 0x0052, //请求房间等级回复
        SERVER_BROADCAST_TASK_GAME: 0x600A,
        //广播牌局任务
        SERVER_BROADCAST_TASK_COMPLETE: 0x6017,
        //广播完成的任务
        ROOM_SERVER_UPDATE_KICK: 0x9001,
        //server升级踢人
        ROOM_BROADCAST_ROOM_INFO: 0x212,
        //server向客户端发送房间信息
        ////////////////////////////////////////////////////////////////////////////////////////////////////////////-
        CLIENT_COMMAND_JIFEN_ROOM_KICK_USER: 0x7025,
        // 客户端命令字熟人积分房房主T人
        SERVER_COMMAND_BROAD_JIFEN_ROOM_KICK_USER: 0x7026,
        // 熟人积分房广播玩家被房主T出
        SERVER_COMMAND_JIFEN_ROOM_SENDTO_BEKICKED_USER: 0x7027,
        // 熟人积分房告知被T者被谁T了
        CLIENT_APPLY_JIFEN_ROOM_CHANGE_SEAT: 0x7031,
        //积分房客户端发起换位置
        SERVER_BROADCAST_JIFEN_ROOM_CHANGE_SEAT_APPLY: 0x7032,
        //积分房客户端收到换座请求
        CLIENT_REPLY_JIFEN_ROOM_CHANGE_SEAT: 0x7033,
        //积分房客户端回复是否同意换座
        SERVER_BROADCAST_JIFEN_ROOM_CHANGE_SEAT_RESULT: 0x7034,
        //server广播最终换座结果
        CLIENT_COMMAND_JIFEN_ROOM_CONTINUE_PLAY: 0x7037,
        //积分房再来一轮
        SERVER_BROADCAST_JIFEN_ROOM_CONTINUE_PLAY: 0x7038,
        //积分房再来一轮
        SERVER_BROADCAST_JIFEN_ROOM_MASTER: 0x7040,
        //广播房主
        SERVER_BROADCAST_JIFEN_ROOM_CANCLE_READY: 0x7043,
        //熟人积分房等待再开一轮过程中，玩家在成为房主前已准备，在他变为房主后准备状态取消
        SERVER_BROADCAST_JIFEN_RECORD_INFO: 0x8001,
        //广播积分房记录信息
        ////////////////////////////////////////////////////////////////////////////////////////////////////////////-
        CLIENT_COMMAND_JIFEN_DISMISS_OPT: 0x7045,
        //客户端发送解散操作：1：请求解散，2：同意解散，3：拒绝解散
        SERVER_BROADCAST_JIFEN_DISMISS_OPT: 0x7046,
        //server广播解散操作
        SERVER_BROADCAST_JIFEN_USER_OFFLINE_STATUS: 0x7047,
        //server广播玩家是否离线
        SERVER_SEND_FRIEND_JIFEN_TABLE_INFO: 0x7048,
        // 私人房配置开关
        SERVER_BROADCAST_JIFEN_DISMISS: 0x80A2,
        // 广播解散
        SERVER_BROADCAST_DISMISS_GAME: 0x80A3,
        // 广播解散房间
        ////////////////////////////////////////////////////////////////////////////////////////////////////////////-
        SERVER_BROADCAST_REFEREE_ROOMINFO: 0x8101,
        //server广播裁判房间信息
        SERVER_COMMAND_REFEREE_ALLUSER_READY_STATUS: 0x8102,
        //server通知裁判所有玩家是否都已准备
        SERVER_COMMAND_REFEREE_USER_HANDCARD: 0x8103,
        //server通知裁判玩家的手牌(命令字与字段信息统一，由子游戏发)
        CLIENT_COMMAND_REFEREE_REQUEST_OPT: 0x8104,
        //裁判请求操作
        SERVER_BROADCAST_REFEREE_OPT: 0x8105,
        //server广播裁判操作
        SERVER_COMMAND_REFEREE_RCCONNECT: 0x8106,
        //裁判重连成功（命令字统一，由子游戏发，字段同0x1009）
        SERVER_COMMAND_REFEREE_LOGIN_SUCCESS: 0x8107,
        //裁判登录成功（命令字统一，由子游戏发，字段同0x1007）
        ////////////////////////////////////////////// 天梯系统 //////////////////////////////////////////////////////-
        SERVER_COMMAND_BROADCAST_LADDER_SCORE: 0x80B1,
        //server广播天梯分

        /** 广播游戏结束 */
        BROADCAST_GAME_OVER: 0x5004,

        /** 广播开始游戏 */
        BROADCAST_GAME_START: 0x5002,

        /** 广播房间信息 */
        BROADCAST_ROOM_INFO: 0x5100
      }); //php命令cmd起始值(不可改) 65536 + 2 = 65538


      _export("GlobalPhpStartCmd", GlobalPhpStartCmd = GlobalCMDHead.PHP_CMD_CONSTANT + 0x0002);

      _export("GetNextPhpCmd", GetNextPhpCmd = function () {
        _export("GlobalPhpStartCmd", GlobalPhpStartCmd = GlobalPhpStartCmd + 1);

        return GlobalPhpStartCmd;
      });
      /** 具体命令 */


      _export("GlobalCMD", GlobalCMD = {
        /**登录命令*/
        PHP_CORE_LOGIN: GlobalCMDHead.PHP_CMD_CONSTANT + 0x0001,
        // !!!此处必须为0x01,server会去理解此cmd
        //用户信息更新
        PHP_UPDATE_USERINFO: GetNextPhpCmd(),
        PHP_NOTICE: GetNextPhpCmd(),
        PHP_MODIFY_PWD: GetNextPhpCmd(),
        PHP_USER_INFO_REWARD: GetNextPhpCmd(),
        PHP_REWARD_CONFIG: GetNextPhpCmd(),
        PHP_REWARD_MONEY: GetNextPhpCmd(),

        /** 游客登录 */
        PHP_CORE_GUEST: GetNextPhpCmd(),
        PHP_ACTIVITY_LISTS: GetNextPhpCmd(),
        PHP_ACTIVITY_NUMBER: GetNextPhpCmd(),
        PHP_GET_RANK_LIST: GetNextPhpCmd(),
        //获取排行列表
        PHP_GET_RANK_INFO: GetNextPhpCmd(),
        //获取某个用户排行信息
        PHP_GET_RANK_TAB: GetNextPhpCmd(),
        //获取排行榜tab
        PHP_CORE_INIT: GetNextPhpCmd(),
        //登录初始化接口
        PHP_UPDATE: GetNextPhpCmd(),
        //APK升级
        PHP_KEEPALIVE: GetNextPhpCmd(),
        //保持会话？？？？？
        PHP_LOGIN_sendResetToken: GetNextPhpCmd(),
        //重置token下发
        PHP_LOGIN_resetPwd: GetNextPhpCmd(),
        //通行证手机|邮箱账号重置密码
        PHP_LOGIN_checkReg: GetNextPhpCmd(),
        //检查是否绑定手机
        PHP_LOGIN_LOGIC_checkReg: GetNextPhpCmd(),
        //检查是否绑定手机LoginLogic
        PHP_IDIOM_FRESH: GetNextPhpCmd(),
        //成语验证码刷新
        PHP_LOGIN_bindPhone: GetNextPhpCmd(),
        //通行证手机绑定
        PHP_GET_MSGCODE: GetNextPhpCmd(),
        //获取运营商号码
        PHP_MSGUPCHECK: GetNextPhpCmd(),
        //短信上行检测接口
        PHP_LEVEL_PLAYER_NUM: GetNextPhpCmd(),
        //短信上行检测接口
        PHP_SEND_GETUI_ID: GetNextPhpCmd(),
        //上报个推id
        PHP_REGISTER_GETCODE: GetNextPhpCmd(),
        //获取注册验证码
        PHP_REGISTER_GETCODE_BY_VOICE: GetNextPhpCmd(),
        //语音验证获取注册验证码
        PHP_FILLINFO_CONFIG: GetNextPhpCmd(),
        //首次设置资料奖励配置
        PHP_REGISTER_FILLINFO: GetNextPhpCmd(),
        //首次设置资料奖励领取
        PHP_VERIFY_DEVICE: GetNextPhpCmd(),
        //重置常用设备验证码
        PHP_GET_SWITCH: GetNextPhpCmd(),
        // 屏蔽开关
        PHP_GET_FAST_START_CONFIG: GetNextPhpCmd(),
        // 快速开始按钮配置
        PHP_UPDATE_SAFEBOX: GetNextPhpCmd(),
        //更新保险箱
        PHP_GET_SAFEBOX_CONFIG: GetNextPhpCmd(),
        //获取保险箱配置
        PHP_USER_GETPAYLIMIT: GetNextPhpCmd(),
        //支付限额
        PHP_GET_MESSAGE: GetNextPhpCmd(),
        //获取消息
        PHP_READ_MESSAGE: GetNextPhpCmd(),
        //阅读消息
        PHP_Radio_List: GetNextPhpCmd(),
        //广播列表
        PHP_Radio_Send: GetNextPhpCmd(),
        //发布广播
        PHP_TASK_GETWEICHATINFO: GetNextPhpCmd(),
        // 获取微信分享中的内容（标题、链接、主题文字）
        PHP_DAY_MISSION_GET_LIST: GetNextPhpCmd(),
        //获取每日任务列表
        PHP_DAY_MISSION_GET_REWARD: GetNextPhpCmd(),
        //获取每日任务奖励
        PHP_DAY_MISSION_SEND_SHARE_FLAG: GetNextPhpCmd(),
        //每日任务发送分享标识
        PHP_DAY_MISSION_SEND_VIDEO: GetNextPhpCmd(),
        //每日任务视频广告标识
        PHP_DAY_MISSION_SEND_VIDEOTIMES: GetNextPhpCmd(),
        //视频广告赛标识
        PHP_GET_USERINFO: GetNextPhpCmd(),
        PHP_HALL_BOTTOM_BUTTON: GetNextPhpCmd(),
        PHP_clientMessages: GetNextPhpCmd(),
        //-社交
        PHP_FRIENDS_AD: GetNextPhpCmd(),
        //获取社交广告
        PHP_NEWS_DEL: GetNextPhpCmd(),
        PHP_FRIENDS_SEND_MSG: GetNextPhpCmd(),
        //发送消息
        PHP_RANK_AWARD_PERMSG: GetNextPhpCmd(),
        //排行榜填写领奖信息
        PHP_USER_GETAWARDS: GetNextPhpCmd(),
        //-私信获取奖励
        PHP_SIGNINAWARD_SIGNININFO: GetNextPhpCmd(),
        //新版签到
        PHP_SIGININAWARD_SIGININ: GetNextPhpCmd(),
        //-新版获取签到奖励
        PHP_SIGNINAWARD_GETSIGNINCALENDAR: GetNextPhpCmd(),
        //获取签到日历
        PHP_AGENCY_CONFIG: GetNextPhpCmd(),
        //代理商系统配置信息
        ////////////////////////////////////////////////////////////////////////////////////////
        PHP_LEVEL_MODEL_CONFIG: GetNextPhpCmd(),
        //等级信息列表
        PHP_GAME_LEVEL_LIST: GetNextPhpCmd(),
        //房间列表新接口
        PHP_GAME_LEVEL_COUNT: GetNextPhpCmd(),
        //房间列表人数
        PHP_GAME_CHAT_BAN: GetNextPhpCmd(),
        //房间内禁言
        PHP_HALL_GAME_PLAYER_NUM: GetNextPhpCmd(),
        //大厅获取各游戏人数
        PHP_HALLVIEW_CONFIG: GetNextPhpCmd(),
        //大厅配置
        PHP_HALLVIEW_CONFIG_SORT: GetNextPhpCmd(),
        // 大厅游戏位列表
        PHP_MODULELIST_CONFIG: GetNextPhpCmd(),
        //大厅支持的模块的配置
        PHP_MOREGAMES_UPDATEINSTALL: GetNextPhpCmd(),
        //用户安装的游戏更新
        ////////////////////////////////////////////////////////////////////////////////////////
        PHP_VIPPROPS: GetNextPhpCmd(),
        // VIP特权
        // PHP_MALL_VIP_AD : GetNextPhpCmd(),	//-商城底部广告条
        PHP_DEGRADE_GET_GOODS_BY_MONEY_DIS: GetNextPhpCmd(),
        //
        PHP_SHOP_DIAMOND_BUY: GetNextPhpCmd(),
        //兑换券商品购买
        PHP_SHOP_DIAMOND_RECORD: GetNextPhpCmd(),
        //兑换券购买记录
        //diamond.dmdinit，diamond.dmdtabgoods
        PHP_DIAMOND_DMDCAPTION: GetNextPhpCmd(),
        PHP_DIAMOND_DMDINIT: GetNextPhpCmd(),
        //新版兑换商城，获取配置
        PHP_DIAMOND_DMDTABGOODS: GetNextPhpCmd(),
        //获取兑换券商品tab中的详细信息
        // PHP_DIAMOND_DMDSUBSCRIPT : GetNextPhpCmd(),
        PHP_SEND_PAYMENT_ORDER: GetNextPhpCmd(),
        //IOS支付获取orderID
        PHP_SEND_PAY_ORDER: GetNextPhpCmd(),
        //IOS支付回调支付中心
        PHP_GAME_PLAY_INFO: GetNextPhpCmd(),
        //请求php获取用户某个游戏的信息
        PHP_ROOM_PAY_SEND_ORDER: GetNextPhpCmd(),
        //请求上报订单信息
        //分享
        PHP_CMD_REQ_SHARE_CONFIG: GetNextPhpCmd(),
        //获取分享配置
        PHP_CMD_REQ_SHARE_COUNT: GetNextPhpCmd(),
        //请求当前分享次数
        PHP_CMD_REQ_SHARE_AWARD: GetNextPhpCmd(),
        //分享成功上报
        //商城
        //商城兑换
        PHP_CMD_REQ_EXCHANGE: GetNextPhpCmd(),
        //商城兑换
        PHP_IOS_SWITCH_3RDPay: GetNextPhpCmd(),
        // IOS第三方支付开关
        PHP_GOODS_INFO: GetNextPhpCmd(),
        //商城数据请求返回/列表/详情
        PHP_MARKET_TABS: GetNextPhpCmd(),
        //商城Tab配置
        PHP_PROPS_INFO: GetNextPhpCmd(),
        //请求自己的道具信息
        PHP_BUY_MALL_PROP: GetNextPhpCmd(),
        // 商城请求购买道具
        PHP_VIP_LEVEL: GetNextPhpCmd(),
        //请求自己的VIP等级
        PHP_GET_MESSAGE_NUM: GetNextPhpCmd(),
        //获取消息数量
        ////////////////////////////-私人房 //////////////////////////////////////-
        PHP_PRIVATE_ROOM_CONFIG: GetNextPhpCmd(),
        //可建私人房的游戏列表
        PHP_PRIVATE_ROOM_RECORD_LIST: GetNextPhpCmd(),
        // 约牌记录列表
        PHP_PRIVATE_ROOM_RECORD_DETAIL: GetNextPhpCmd(),
        // 约牌记录详情
        ////////////////////////////-比赛相关 //////////////////////////////////////-
        PHP_SHARE_TEMPLE: GetNextPhpCmd(),
        //-获取分享主题模板
        PHP_REQUEST_MATCH_LIST: GetNextPhpCmd(),
        PHP_GAME_LABEL_LIST: GetNextPhpCmd(),
        // 子游戏场次中的房间列表
        PHP_AD_MC_LIST: GetNextPhpCmd(),
        PHP_REQUEST_MATCH_DETAIL: GetNextPhpCmd(),
        //获取某个比赛奖励，描述信息
        PHP_REQUEST_MATCH_BASIC: GetNextPhpCmd(),
        //获取某个比赛的完整信息，不包括奖励
        PHP_GET_NEXT_LOOP_MATCH: GetNextPhpCmd(),
        //获取循环赛信息
        PHP_MATCH_RECOMMEND_LIST: GetNextPhpCmd(),
        //比赛推荐位列表
        PHP_REQUEST_MATCH_TAG_LIST: GetNextPhpCmd(),
        // 比赛标签列表
        PHP_MATCH_RECORD_STATISTICS: GetNextPhpCmd(),
        // 比赛战绩统计
        PHP_MATCH_RECORD_MATCH_LIST: GetNextPhpCmd(),
        // 比赛历史战绩
        PHP_REQUEST_MATCH_CHAMPIONRANK: GetNextPhpCmd(),
        // PHP_MATCH_RECORD_REWARD_STATISTICS : GetNextPhpCmd(), // 比赛奖励统计
        // PHP_MATCH_RECORD_MASTER_RANK_LIST : GetNextPhpCmd(), // 比赛大师分排行
        ////////////////////////////-比赛相关 end////////////////////////////////////
        PHP_USE_PROPS: GetNextPhpCmd(),
        PHP_BAG_PROP_INFO: GetNextPhpCmd(),
        //获取背包内道具列表
        PHP_BAG_PROP_ABANDON: GetNextPhpCmd(),
        //丢弃背包内道具
        ////////////////////////////-统一支付////////////////////////////////////-
        PHP_GET_PMODECONFIG: GetNextPhpCmd(),
        PHP_SEND_VALIDATE: GetNextPhpCmd(),
        PHP_SEND_PAYMENT_ORDER_TEST: GetNextPhpCmd(),
        //联运下单
        PHP_CRYSTAL_BUY_GOODS: GetNextPhpCmd(),
        //用金条购买商品
        PHP_NEW_GOODS_BASE: GetNextPhpCmd(),
        //物品配置
        PHP_GOODS_DETAIL_INFO: GetNextPhpCmd(),
        //////////////////////////////摇摇乐模块//////////////////////////////////////
        PHP_SLOT_MACHINE_SWITCH: GetNextPhpCmd(),
        //获取老虎机开关配置
        PHP_SLOT_MACHINE_CONFIG: GetNextPhpCmd(),
        //获取老虎机配置
        PHP_SLOT_MACHINE_REWARD: GetNextPhpCmd(),
        //老虎机抽奖
        PHP_SLOT_MACHINE_RECORD: GetNextPhpCmd(),
        //获取老虎机抽奖记录
        PHP_SLOT_MACHINE_GAME_SWITCH: GetNextPhpCmd(),
        //获取小游戏开关配置
        PHP_GET_GAMEINFOCONTENT: GetNextPhpCmd(),
        //////////////////////////////IOS、ANDROID 审核过滤////////////////////////////
        PHP_IOS_FILTER_OPEN: GetNextPhpCmd(),
        //ios审核过滤开关
        PHP_ANDROID_FILTER_OPEN: GetNextPhpCmd(),
        // android 审核过滤开关
        //////////////////////////////举报////////////////////////////
        PHP_REPORT_PLAYER: GetNextPhpCmd(),
        // 举报
        ////////////////////////////-商城广告////////////////////////-
        PHP_MARKET_TABS_AD: GetNextPhpCmd(),
        // 商城广告
        PHP_REPORT_GAME_VERSION: GetNextPhpCmd(),
        //子游戏版本号上报
        PHP_ROOM_GET_GAME_BG: GetNextPhpCmd(),
        //房间背景桌布等配置
        PHP_AD_SENDAWARD: GetNextPhpCmd(),
        PHP_AD_GETAWARD: GetNextPhpCmd(),
        PHP_AD_GETAWARDLOG: GetNextPhpCmd(),
        PHP_AD_GETSHOWWELFARE: GetNextPhpCmd(),
        PHP_AD_RECORDUSER: GetNextPhpCmd(),
        PHP_AD_WINAWARD: GetNextPhpCmd(),
        PHP_AD_RECIVEAWARD: GetNextPhpCmd(),
        PHP_AD_GETLOSEAD: GetNextPhpCmd(),
        PHP_AD_ABANDONAD: GetNextPhpCmd(),
        PHP_AD_GETSPREADINFO: GetNextPhpCmd(),
        // PHP_AD_SAWSPREADTAIL : GetNextPhpCmd(),
        PHP_AD_GETGAMESTATE: GetNextPhpCmd(),
        PHP_AD_ISSHWO: GetNextPhpCmd(),
        PHP_AD_JUDGEISPAY: GetNextPhpCmd(),
        ////////////////////////////- 银元场 ////////////////////////////////////-
        PHP_REQUEST_SILVER_DATA: GetNextPhpCmd(),
        //////////////////////////社交短信邀请好友注册//////////////////////////////////////-
        PHP_SMS_INVITE_FRIEND: GetNextPhpCmd(),
        PHP_GET_EXTERNAL_IMDOMAIN: GetNextPhpCmd(),
        ////////////////////////////////口令//////////////////////////////-
        PHP_PASSWORD_PUSH_INFO: GetNextPhpCmd(),
        // 获取口令
        PHP_PASSWORD_POP_INFO: GetNextPhpCmd(),
        // 获取口令数据
        // PHP_SMS_INVITE_FRIEND_LIST : GetNextPhpCmd(), // 废弃
        //////////////////////////////新背包模块////////////////////////////
        PHP_PACKAGE_BAGLIST: GetNextPhpCmd(),
        // 拉取背包列表
        PHP_PACKAGE_USE: GetNextPhpCmd(),
        // 合成，使用，丢弃等功能都用这个接口
        PHP_PACKAGE_SELL: GetNextPhpCmd(),
        // 回兑
        PHP_PACKAGE_RECORD: GetNextPhpCmd(),
        // 拉取兑换历史记录
        PHP_SCAN_SHANGJIA: GetNextPhpCmd(),
        // 扫描线下商家二维码
        PHP_EXCHANGE_APPLY: GetNextPhpCmd(),
        // 线下商家兑换申请
        PHP_PACKAGE_REFRESH_PROP: GetNextPhpCmd(),
        // 根据物品ID获取玩家对应的该物品信息
        PHP_GET_FLOATBALL_CONFIG: GetNextPhpCmd(),
        //拉取浮动球配置信息
        PHP_HOLIDAYS_BG: GetNextPhpCmd(),
        // 获取节假日特色背景图
        PHP_BINDATOM: GetNextPhpCmd(),
        // 代理商V2.0-客户端扫码绑定代理商
        PHP_BINDATOMBYCOOKIE: GetNextPhpCmd(),
        // 客户端通过Cookie来进行绑定
        PHP_BINDATOMH5INFO: GetNextPhpCmd(),
        // 绑定代理商H5信息
        //////////////////////////////金条兑换//////////////////////////////
        PHP_GOLDBAR_CONFIG: GetNextPhpCmd(),
        // 获取金条兑换的配置
        PHP_GOLDBAR_EXCHANGE: GetNextPhpCmd(),
        // 兑换金条
        //////////////////////////////红包//////////////////////////////
        PHP_REDENVELOPE_CONFIG: GetNextPhpCmd(),
        // 红包配置
        PHP_REDENVELOPE_SEND: GetNextPhpCmd(),
        // 发红包
        PHP_REDENVELOPE_SEND_LIST: GetNextPhpCmd(),
        // 发红包列表
        PHP_REDENVELOPE_DETAIL: GetNextPhpCmd(),
        // 红包领取详情
        //////////////////////-猜拳模块//////////////////////////
        PHP_MORA_GAME_SWITCH: GetNextPhpCmd(),
        //获取猜拳开关配置
        PHP_MORA_GAME_CONFIG: GetNextPhpCmd(),
        //获取猜拳配置
        PHP_MORA_GAME_REWARD: GetNextPhpCmd(),
        //猜拳结果
        PHP_MORA_GAME_RECORD: GetNextPhpCmd(),
        //猜拳记录
        //////////////////////////////邀请赛//////////////////////////////
        PHP_INVITATIONAL_SELECT_CONFIG: GetNextPhpCmd(),
        //创建比赛参数选项配置
        PHP_INVITATIONAL_RULES_CONTENT: GetNextPhpCmd(),
        //获取比赛规则内容
        PHP_INVITATIONAL_AWARD_FORMULA: GetNextPhpCmd(),
        //奖圈对应奖金分配公式
        PHP_INVITATIONAL_MATCH_MIN_PLAYERS: GetNextPhpCmd(),
        //比赛创建界面最低参赛人数选项
        PHP_INVITATIONAL_MY_APPLY_LISTS: GetNextPhpCmd(),
        //我报名的列表
        PHP_INVITATIONAL_QCODEURL: GetNextPhpCmd(),
        //邀请好友二维码地址
        PHP_INVITATIONAL_AWARDRANK: GetNextPhpCmd(),
        //完整排名
        //////////////////////////////模拟器//////////////////////////////
        PHP_PREVENTCHEAT_UPLOAD: GetNextPhpCmd(),
        //上传数据
        PHP_PREVENTCHEAT_CONFIG: GetNextPhpCmd(),
        //过滤数据配置
        PHP_PREVENTCHEAT_CHECK: GetNextPhpCmd(),
        //请求检查是否为模拟器
        ////////////////////////////分享上报////////////////////
        PHP_SHARE_REPORT: GetNextPhpCmd(),
        //分享上报
        PHP_SHARE_INVITE: GetNextPhpCmd(),
        //分享邀请
        PHP_SEND_APK_COMMENTS: GetNextPhpCmd(),
        PHP_DIAMOND_GETEXCHANGEDROPCFG: GetNextPhpCmd(),
        // 获取牌局内的掉落任务
        PHP_DIAMOND_TAKEEXCHANGEDROP: GetNextPhpCmd(),
        // 领取牌局任务的奖励
        PHP_MATCH_LIMIT_REPORT: GetNextPhpCmd(),
        ////////////////////- 天梯系统 ////////////////////////
        PHP_LADDER_CONFIG: GetNextPhpCmd(),
        //////////////////////////////实名认证//////////////////////////////
        PHP_REAL_NAME_REGISTER: GetNextPhpCmd(),
        PHP_REAL_NAME_TOKEN: GetNextPhpCmd(),
        PHP_SET_PLAYSTATE: GetNextPhpCmd(),
        //15天内满1小时
        PHP_GET_PLAYSTATE: GetNextPhpCmd(),
        //15天内满1小时
        PHP_GET_PERMISSION_CONFIG: GetNextPhpCmd(),
        // 权限说明
        PHP_NOTIFY_SHIP: GetNextPhpCmd(),
        // 联运版本，通知php发货
        //////////////////////- 获取文化部的版号说明 //////////////////////////////////////////////////////////////////-
        PHP_GETCULTURE_CONFIG: GetNextPhpCmd(),
        //////////////////////////////////////////////////
        //首充
        // PHP_FRISTPAY_CONFIG : GetNextPhpCmd(),
        //充值礼包
        PHP_GIFTPACK_CONFIG: GetNextPhpCmd(),
        //每日礼包
        PHP_GIFTPACK_DAILY_CONFIG: GetNextPhpCmd(),
        //限时折扣礼包
        PHP_HOLIDAYS_GIFTPACKAGE: GetNextPhpCmd(),
        //新版破产界面，破产礼包配置
        PHP_GET_BANKRUPTPACK: GetNextPhpCmd(),
        //新增破产回馈界面，破产回馈数据
        PHP_GET_BANKRUPT_FEEDBACK: GetNextPhpCmd(),
        ////新增破产回馈界面，领破产补助
        PHP_BANKRUPT_FEEDBACK_RECIVED: GetNextPhpCmd(),
        PHP_BANKRUPT_FEEDBACK_EXPLAIN: GetNextPhpCmd(),
        //破产文案
        PHP_BANKRUPT_TOAST: GetNextPhpCmd(),
        //场次入场礼包配置
        PHP_ROOM_LEVEL_CHANGE_CONFIG: GetNextPhpCmd(),
        // 游戏入场、降场礼包配置
        PHP_ROOM_LEVEL_GIFT_CONFIG: GetNextPhpCmd(),
        //通知php发送自动领取破产补助私信
        PHP_BANKRUPT_NOTICE: GetNextPhpCmd(),
        // 获取分享领奖配置
        PHP_SHARE_CONFIG: GetNextPhpCmd(),
        // 领取分享奖励
        PHP_SHARE_REWARD: GetNextPhpCmd(),
        // 商城老虎机初始化数据
        PHP_MALLSLOT_GETDATA: GetNextPhpCmd(),
        //商城老虎机抽奖数据
        PHP_MALLSLOT_GETAWARD: GetNextPhpCmd(),
        //商城老虎机记录数据
        PHP_MALLSLOT_GETADDATA: GetNextPhpCmd(),
        PHP_MALLSLOT_GETSHARECOUNT: GetNextPhpCmd(),
        //支付成功通知删除记录
        PHP_MALLSLOT_PAYSUCCESS: GetNextPhpCmd(),
        //点击商城老虎机看视频按钮
        PHP_MALLSLOT_GETADCOUNT: GetNextPhpCmd(),
        //存钱罐配置
        PHP_PIGGYBANK_GETDATA: GetNextPhpCmd(),
        // 私人房广告配置
        PHP_PRIVATE_AD_CONFIG: GetNextPhpCmd(),
        // 装扮数据
        PHP_BAG_PRIMP: GetNextPhpCmd(),
        // 使用头像框
        PHP_BAG_USEPRIMP: GetNextPhpCmd(),
        // 使用表情包
        PHP_BAG_USEEMOJI: GetNextPhpCmd(),
        // 装扮道具属性
        PHP_BAG_EMOJI: GetNextPhpCmd(),
        // 上报实名认证信息
        PHP_NOTIFY_AUTHENTICATION: GetNextPhpCmd(),
        // 2022向前冲活动
        PHP_ACTIVITY_GOFORWARD: GetNextPhpCmd(),
        PHP_ACTIVITY_GOFORWARD_DICE: GetNextPhpCmd(),
        PHP_ACTIVITY_GOFORWARD_RECEIVE: GetNextPhpCmd(),
        PHP_ACTIVITY_GOFORWARD_RESET: GetNextPhpCmd(),
        // 新年活动
        PHP_ACTIVITY_NEWYEAR_TAB: GetNextPhpCmd(),
        PHP_ACTIVITY_NEWYEAR_LISTDATA: GetNextPhpCmd(),
        PHP_ACTIVITY_NEWYEAR_RECEIVE: GetNextPhpCmd(),
        PHP_ACTIVITY_NEWYEAR_PACKAGE: GetNextPhpCmd(),
        PHP_ACTIVITY_NEWYEAR_PACKAGE_RECEIVE: GetNextPhpCmd(),
        PHP_ACTIVITY_NEWYEAR_AUTOSHOW: GetNextPhpCmd(),
        PHP_ACTIVITY_NEWYEAR_LUCKY: GetNextPhpCmd(),
        PHP_ACTIVITY_NEWYEAR_SEND: GetNextPhpCmd(),
        PHP_ACTIVITY_NEWYEAR_GETAWARD: GetNextPhpCmd(),
        PHP_ACTIVITY_NEWYEAR_GETRECEIVE: GetNextPhpCmd(),
        PHP_ACTIVITY_NEWYEAR_SHARELIST: GetNextPhpCmd(),
        PHP_ACTIVITY_NEWYEAR_GETSHARE_OLD: GetNextPhpCmd(),
        PHP_ACTIVITY_NEWYEAR_GETSHARE_NEW: GetNextPhpCmd(),
        //调用活动配置
        PHP_ACTIVITY_FISH_CONFIG: GetNextPhpCmd(),
        //新用户领取邀请奖励列表
        PHP_ACTIVITY_PULL_NEW_PEOPLE_LIST: GetNextPhpCmd(),
        //新用户领取邀请奖励
        PHP_ACTIVITY_PULL_NEW_PEOPLE_GET_REWARD_OLD: GetNextPhpCmd(),
        //新用户领取邀请奖励
        PHP_ACTIVITY_PULL_NEW_PEOPLE_GET_REWARD_NEW: GetNextPhpCmd(),
        //新手活动配置配置
        PHP_ACTIVITY_PULL_NEW_PEOPLE_GET_CFG: GetNextPhpCmd(),
        //新签到数据
        PHP_SIGNINAWARD_SIGNINDATA: GetNextPhpCmd(),
        //新签到
        PHP_SIGNINAWARD_NEWSIGNIN: GetNextPhpCmd(),
        //新签到连续奖励
        PHP_SIGNINAWARD_CONTINUAWARD: GetNextPhpCmd(),
        //请求邮箱数据
        PHP_EMAIL_DATA: GetNextPhpCmd(),
        //请求邮箱奖励
        PHP_EMAIL_REWARD: GetNextPhpCmd(),
        //请求弹框配置
        PHP_ACTIVITY_MODAL_POPUP: GetNextPhpCmd(),
        //请求是否更新配置
        PHP_GOODS_BASE: GetNextPhpCmd(),
        //请求首充数据
        PHP_FIRST_PAY_CONFIG: GetNextPhpCmd(),
        //请求活动中心/任务
        PHP_ACTIVITY_TASK_CONFIG: GetNextPhpCmd(),
        //请求添加到桌面领奖
        PHP_ADD_DESK_AWARD: GetNextPhpCmd(),
        //PHP点击事件上报
        PHP_CLICK_REPORT: GetNextPhpCmd()
      });
      /** head命令绑定 */


      _export("GlobalHeadCmdBinding", GlobalHeadCmdBinding = {
        /************请求  写 1********* */
        //请求:心跳
        [GlobalCMDHead.SERVER_SEND_HEART]: HeadCmdBingding(1, (_crd && GPBWriteAndRead === void 0 ? (_reportPossibleCrUseOfGPBWriteAndRead({
          error: Error()
        }), GPBWriteAndRead) : GPBWriteAndRead).Write.WriteServersHeart, null),
        //请求：大厅事件
        [GlobalCMDHead.SEND_PHP_REQUEST]: HeadCmdBingding(1, (_crd && GPBWriteAndRead === void 0 ? (_reportPossibleCrUseOfGPBWriteAndRead({
          error: Error()
        }), GPBWriteAndRead) : GPBWriteAndRead).Write.WritePhpRequest, null),
        //请求：大厅事件(新)
        [GlobalCMDHead.SEND_PHP_REQUEST_NEW]: HeadCmdBingding(1, (_crd && GPBWriteAndRead === void 0 ? (_reportPossibleCrUseOfGPBWriteAndRead({
          error: Error()
        }), GPBWriteAndRead) : GPBWriteAndRead).Write.WritePhpRequestNew, null),
        //通用：请求一键登录游戏房间
        [GlobalCMDHead.ROOM_LOGIN_GAME_ONE_KEY]: HeadCmdBingding(1, (_crd && GPBWriteAndRead === void 0 ? (_reportPossibleCrUseOfGPBWriteAndRead({
          error: Error()
        }), GPBWriteAndRead) : GPBWriteAndRead).Write.comm_OneKeyLoginGame, null),
        //通用：请求登录具体游戏房间
        [GlobalCMDHead.ROOM_SEND_LOGIN]: HeadCmdBingding(1, (_crd && GPBWriteAndRead === void 0 ? (_reportPossibleCrUseOfGPBWriteAndRead({
          error: Error()
        }), GPBWriteAndRead) : GPBWriteAndRead).Write.comm_LoginGameInto, null),
        //通用：请求玩家尝试请求退出
        [GlobalCMDHead.CLIENT_COMMAND_LOGOUT_IN_GAME]: HeadCmdBingding(1, (_crd && GPBWriteAndRead === void 0 ? (_reportPossibleCrUseOfGPBWriteAndRead({
          error: Error()
        }), GPBWriteAndRead) : GPBWriteAndRead).Write.comm_reqLogOutTry, null),
        //通用：请求玩家确定要退出
        [GlobalCMDHead.ROOM_SEND_LOGOUT]: HeadCmdBingding(1, (_crd && GPBWriteAndRead === void 0 ? (_reportPossibleCrUseOfGPBWriteAndRead({
          error: Error()
        }), GPBWriteAndRead) : GPBWriteAndRead).Write.comm_reqLogOut, null),
        //通用：请求准备
        [GlobalCMDHead.USER_READY_REQUEST]: HeadCmdBingding(1, (_crd && GPBWriteAndRead === void 0 ? (_reportPossibleCrUseOfGPBWriteAndRead({
          error: Error()
        }), GPBWriteAndRead) : GPBWriteAndRead).Write.comm_reqReady, null),
        //通用：请求玩家请求托管或取消托管
        [GlobalCMDHead.CLIENT_COMMAND_REQUEST_AI]: HeadCmdBingding(1, (_crd && GPBWriteAndRead === void 0 ? (_reportPossibleCrUseOfGPBWriteAndRead({
          error: Error()
        }), GPBWriteAndRead) : GPBWriteAndRead).Write.comm_reqUserAI, null),
        //通用：玩家请求换桌
        [GlobalCMDHead.CLIENT_COMMAND_CHANGE_TABLE]: HeadCmdBingding(1, (_crd && GPBWriteAndRead === void 0 ? (_reportPossibleCrUseOfGPBWriteAndRead({
          error: Error()
        }), GPBWriteAndRead) : GPBWriteAndRead).Write.comm_reqChangeTable, null),
        //通用：请求破产配置数据
        [GlobalCMDHead.SEND_BANKRUPT_CONFIG]: HeadCmdBingding(1, (_crd && GPBWriteAndRead === void 0 ? (_reportPossibleCrUseOfGPBWriteAndRead({
          error: Error()
        }), GPBWriteAndRead) : GPBWriteAndRead).Write.comm_reqBankUpData, null),
        //通用：请求获取破产次数
        [GlobalCMDHead.SEND_BANKRUPT_COUNT]: HeadCmdBingding(1, (_crd && GPBWriteAndRead === void 0 ? (_reportPossibleCrUseOfGPBWriteAndRead({
          error: Error()
        }), GPBWriteAndRead) : GPBWriteAndRead).Write.comm_reqBankUpCount, null),
        //通用：请求破产
        [GlobalCMDHead.SEND_BANKRUPT_MONEY]: HeadCmdBingding(1, (_crd && GPBWriteAndRead === void 0 ? (_reportPossibleCrUseOfGPBWriteAndRead({
          error: Error()
        }), GPBWriteAndRead) : GPBWriteAndRead).Write.comm_reqBankUp, null),

        /************返回  读 0*********** */
        //返回:心跳
        [GlobalCMDHead.SERVER_HEART_RESPONSE]: HeadCmdBingding(0, (_crd && GPBWriteAndRead === void 0 ? (_reportPossibleCrUseOfGPBWriteAndRead({
          error: Error()
        }), GPBWriteAndRead) : GPBWriteAndRead).Read.ReadServersHeart, null),
        //返回:大厅的事件
        [GlobalCMDHead.RESPONSE_PHP_REQUEST]: HeadCmdBingding(0, (_crd && GPBWriteAndRead === void 0 ? (_reportPossibleCrUseOfGPBWriteAndRead({
          error: Error()
        }), GPBWriteAndRead) : GPBWriteAndRead).Read.ReadPhpRequest, (_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
          error: Error()
        }), AppEvent) : AppEvent).NET_RECEIVE_MSG_PHP),
        //返回:大厅返回的事件(新)
        [GlobalCMDHead.RESPONSE_PHP_REQUEST_NEW]: HeadCmdBingding(0, (_crd && GPBWriteAndRead === void 0 ? (_reportPossibleCrUseOfGPBWriteAndRead({
          error: Error()
        }), GPBWriteAndRead) : GPBWriteAndRead).Read.ReadPhpRequestNew, (_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
          error: Error()
        }), AppEvent) : AppEvent).NET_RECEIVE_MSG_PHPNEW),
        //返回:大厅登录成功
        [GlobalCMDHead.RESPONSE_HALL_LOGIN_SUCCESS]: HeadCmdBingding(0, (_crd && GPBWriteAndRead === void 0 ? (_reportPossibleCrUseOfGPBWriteAndRead({
          error: Error()
        }), GPBWriteAndRead) : GPBWriteAndRead).Read.ReadHallLoginSuccess, (_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
          error: Error()
        }), AppEvent) : AppEvent).NET_RECEIVE_LOGIN_SUCCESS),
        //返回:异地登录
        [GlobalCMDHead.RESPONSE_MULTI_DEVICE_LOGIN]: HeadCmdBingding(0, null, (_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
          error: Error()
        }), AppEvent) : AppEvent).NET_RECEIVE_MULTI_DEVICE_LOGIN),
        //广播:PHP推送消息
        [GlobalCMDHead.PHP_MSG_TO_CLIENT]: HeadCmdBingding(0, (_crd && GPBWriteAndRead === void 0 ? (_reportPossibleCrUseOfGPBWriteAndRead({
          error: Error()
        }), GPBWriteAndRead) : GPBWriteAndRead).Read.ReadPhpPushMsg, (_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
          error: Error()
        }), AppEvent) : AppEvent).NET_RECEIVE_PHP_PUSH_MSG),
        //广播:PHP推送消息
        [GlobalCMDHead.PHP_RADIO_TO_CLIENT]: HeadCmdBingding(0, (_crd && GPBWriteAndRead === void 0 ? (_reportPossibleCrUseOfGPBWriteAndRead({
          error: Error()
        }), GPBWriteAndRead) : GPBWriteAndRead).Read.ReadPhpPushMsg, null),
        //广播:支付获取银币
        [GlobalCMDHead.RESPONSE_BROADCAST_PAY_MONEY]: HeadCmdBingding(0, (_crd && GPBWriteAndRead === void 0 ? (_reportPossibleCrUseOfGPBWriteAndRead({
          error: Error()
        }), GPBWriteAndRead) : GPBWriteAndRead).Read.ReadPhpPushPayMoney, (_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
          error: Error()
        }), AppEvent) : AppEvent).NET_RECEIVE_PHP_PUSH_PAY_MONEY),
        //广播:server返回用户VIP详细信息
        [GlobalCMDHead.SERVER_USER_VIP_INFO]: HeadCmdBingding(0, (_crd && GPBWriteAndRead === void 0 ? (_reportPossibleCrUseOfGPBWriteAndRead({
          error: Error()
        }), GPBWriteAndRead) : GPBWriteAndRead).Read.ReadPhpGetUserVipInfo, (_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
          error: Error()
        }), AppEvent) : AppEvent).NET_RECEIVE_PHP_SERVER_USER_VIP_INFO),
        // //返回:房间登录成功
        // [GlobalCMDHead.ROOM_LOGIN_SUCCESS]: HeadCmdBingding(0, null, AppEvent.NET_RECEIVE_MULTI_DEVICE_LOGIN),
        //通用:房间登录失败
        [GlobalCMDHead.ROOM_LOGIN_ERR]: HeadCmdBingding(0, null, (_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
          error: Error()
        }), AppEvent) : AppEvent).NET_RECEIVE_GAME_LOGIN_FAIL),
        //通用:下发桌子信息
        [GlobalCMDHead.ROOM_SERVER_RESPONSE_TABLE_INFO]: HeadCmdBingding(0, (_crd && GPBWriteAndRead === void 0 ? (_reportPossibleCrUseOfGPBWriteAndRead({
          error: Error()
        }), GPBWriteAndRead) : GPBWriteAndRead).Read.comm_receiveRoomInfo, (_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
          error: Error()
        }), AppEvent) : AppEvent).NET_RECEIVE_GAME_ROOM_INFO),
        //通用:用户进入
        // [GlobalCMDHead.SERVER_BROADCAST_PLAYER_LOGIN]: HeadCmdBingding(0, GPBWriteAndRead.Read.comm_receivePlayerInto, AppEvent.NET_RECEIVE_GAME_PLAYER_INTO),
        //通用:用户退出
        [GlobalCMDHead.SERVER_BROADCAST_PLAYER_LOGOUT]: HeadCmdBingding(0, (_crd && GPBWriteAndRead === void 0 ? (_reportPossibleCrUseOfGPBWriteAndRead({
          error: Error()
        }), GPBWriteAndRead) : GPBWriteAndRead).Read.comm_receivePlayerLogout, (_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
          error: Error()
        }), AppEvent) : AppEvent).NET_RECEIVE_GAME_PLAYER_LOGOUT),
        //通用:server通知准备相关信息：准备倒计时配置
        [GlobalCMDHead.SERVER_COMMAND_READY_INFO]: HeadCmdBingding(0, (_crd && GPBWriteAndRead === void 0 ? (_reportPossibleCrUseOfGPBWriteAndRead({
          error: Error()
        }), GPBWriteAndRead) : GPBWriteAndRead).Read.comm_receiveReadyInfo, (_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
          error: Error()
        }), AppEvent) : AppEvent).NET_RECEIVE_GAME_READY_INFO),
        //广播:玩家准备
        [GlobalCMDHead.SERVER_BROADCAST_PLAYER_READY]: HeadCmdBingding(0, (_crd && GPBWriteAndRead === void 0 ? (_reportPossibleCrUseOfGPBWriteAndRead({
          error: Error()
        }), GPBWriteAndRead) : GPBWriteAndRead).Read.comm_receivePlayerReady, (_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
          error: Error()
        }), AppEvent) : AppEvent).NET_RECEIVE_GAME_PLAYER_READY),
        //广播:游戏结束
        [GlobalCMDHead.BROADCAST_GAME_OVER]: HeadCmdBingding(0, (_crd && GPBWriteAndRead === void 0 ? (_reportPossibleCrUseOfGPBWriteAndRead({
          error: Error()
        }), GPBWriteAndRead) : GPBWriteAndRead).Read.comm_receiveGameOver, (_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
          error: Error()
        }), AppEvent) : AppEvent).BROADCAST_GAME_OVER),
        //广播:游戏开始
        [GlobalCMDHead.BROADCAST_GAME_START]: HeadCmdBingding(0, (_crd && GPBWriteAndRead === void 0 ? (_reportPossibleCrUseOfGPBWriteAndRead({
          error: Error()
        }), GPBWriteAndRead) : GPBWriteAndRead).Read.comm_receiveGameStart, (_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
          error: Error()
        }), AppEvent) : AppEvent).BROADCAST_GAME_START),
        //广播:房间信息
        [GlobalCMDHead.BROADCAST_ROOM_INFO]: HeadCmdBingding(0, (_crd && GPBWriteAndRead === void 0 ? (_reportPossibleCrUseOfGPBWriteAndRead({
          error: Error()
        }), GPBWriteAndRead) : GPBWriteAndRead).Read.comm_receiveRoomInfo, (_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
          error: Error()
        }), AppEvent) : AppEvent).BROADCAST_ROOM_INFO),
        //通用:玩家托管
        [GlobalCMDHead.SERVER_BROADCAST_PLAYER_AI]: HeadCmdBingding(0, (_crd && GPBWriteAndRead === void 0 ? (_reportPossibleCrUseOfGPBWriteAndRead({
          error: Error()
        }), GPBWriteAndRead) : GPBWriteAndRead).Read.comm_receivePlayerAI, (_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
          error: Error()
        }), AppEvent) : AppEvent).NET_RECEIVE_GAME_PLAYER_AI),
        //房间等级变化
        [GlobalCMDHead.ROOM_UP_LEVEL]: HeadCmdBingding(0, (_crd && GPBWriteAndRead === void 0 ? (_reportPossibleCrUseOfGPBWriteAndRead({
          error: Error()
        }), GPBWriteAndRead) : GPBWriteAndRead).Read.onCommRoomLevelUp, (_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
          error: Error()
        }), AppEvent) : AppEvent).NET_RECEIVE_ROOM_LEVEL_UP),
        //通用:退出房间成功
        [GlobalCMDHead.ROOM_LOGOUT_SUCCESS]: HeadCmdBingding(0, (_crd && GPBWriteAndRead === void 0 ? (_reportPossibleCrUseOfGPBWriteAndRead({
          error: Error()
        }), GPBWriteAndRead) : GPBWriteAndRead).Read.comm_receiveExitRoomSuccess, (_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
          error: Error()
        }), AppEvent) : AppEvent).NET_RECEIVE_GAME_EXIT_ROOM_SUCCESS),
        //通用:换桌失败
        [GlobalCMDHead.SERVER_COMMAND_CHANGE_TABLE_ERR]: HeadCmdBingding(0, (_crd && GPBWriteAndRead === void 0 ? (_reportPossibleCrUseOfGPBWriteAndRead({
          error: Error()
        }), GPBWriteAndRead) : GPBWriteAndRead).Read.comm_receiveChangeDeskError, (_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
          error: Error()
        }), AppEvent) : AppEvent).NET_RECEIVE_GAME_CHANGE_DESK_ERROR),
        //通用:游戏强制结束（游戏中有玩家退出）
        [GlobalCMDHead.SERVER_BROADCAST_STOP_GAME_IN_PLAY]: HeadCmdBingding(0, (_crd && GPBWriteAndRead === void 0 ? (_reportPossibleCrUseOfGPBWriteAndRead({
          error: Error()
        }), GPBWriteAndRead) : GPBWriteAndRead).Read.comm_receiveStopGameInPlay, (_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
          error: Error()
        }), AppEvent) : AppEvent).NET_RECEIVE_GAME_STOP_PLAYING),
        //通用:表情
        [GlobalCMDHead.ROOM_USER_FACE_RESP]: HeadCmdBingding(0, (_crd && GPBWriteAndRead === void 0 ? (_reportPossibleCrUseOfGPBWriteAndRead({
          error: Error()
        }), GPBWriteAndRead) : GPBWriteAndRead).Read.comm_UserFace, (_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
          error: Error()
        }), AppEvent) : AppEvent).NET_RECEIVE_GAME_USER_FACE),
        //通用:聊天
        [GlobalCMDHead.ROOM_USER_CHAT_RESP]: HeadCmdBingding(0, (_crd && GPBWriteAndRead === void 0 ? (_reportPossibleCrUseOfGPBWriteAndRead({
          error: Error()
        }), GPBWriteAndRead) : GPBWriteAndRead).Read.comm_UserChat, (_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
          error: Error()
        }), AppEvent) : AppEvent).NET_RECEIVE_GAME_USER_CHAT),
        //通用:Server回应退出请求(游戏中退出)
        [GlobalCMDHead.SERVER_COMMAND_LOGOUT_INGAME_RSP]: HeadCmdBingding(0, (_crd && GPBWriteAndRead === void 0 ? (_reportPossibleCrUseOfGPBWriteAndRead({
          error: Error()
        }), GPBWriteAndRead) : GPBWriteAndRead).Read.comm_LogOutResp, (_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
          error: Error()
        }), AppEvent) : AppEvent).NET_RESP_LOGOUT_IN_GAME),
        //通用：返回破产配置数据
        [GlobalCMDHead.RESPONSE_BANKRUPT_CONFIG]: HeadCmdBingding(0, (_crd && GPBWriteAndRead === void 0 ? (_reportPossibleCrUseOfGPBWriteAndRead({
          error: Error()
        }), GPBWriteAndRead) : GPBWriteAndRead).Read.comm_respBankUpData, (_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
          error: Error()
        }), AppEvent) : AppEvent).NET_RESP_BANKRUPT_CONFIG),
        //通用：返回破产次数
        [GlobalCMDHead.RESPONSE_BANKRUPT_COUNT]: HeadCmdBingding(0, (_crd && GPBWriteAndRead === void 0 ? (_reportPossibleCrUseOfGPBWriteAndRead({
          error: Error()
        }), GPBWriteAndRead) : GPBWriteAndRead).Read.comm_respBankUpCount, (_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
          error: Error()
        }), AppEvent) : AppEvent).NET_RESP_BANKRUPT_COUNT),
        //通用：返回破产
        [GlobalCMDHead.RESPONSE_BANKRUPT_MONEY]: HeadCmdBingding(0, (_crd && GPBWriteAndRead === void 0 ? (_reportPossibleCrUseOfGPBWriteAndRead({
          error: Error()
        }), GPBWriteAndRead) : GPBWriteAndRead).Read.comm_respBankUp, (_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
          error: Error()
        }), AppEvent) : AppEvent).NET_RESP_BANKRUPT)
      });
      /** 具体命令的绑定 */


      _export("GlobalCmdBindingHead", GlobalCmdBindingHead = {
        //登录
        [GlobalCMD.PHP_CORE_LOGIN]: CmdBingding(0, 0, "core.login", (_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
          error: Error()
        }), AppEvent) : AppEvent).NET_FORWARD_USER_LOGIN_CORE),
        //游客登录
        [GlobalCMD.PHP_CORE_GUEST]: CmdBingding(0, 0, "passport.guest", (_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
          error: Error()
        }), AppEvent) : AppEvent).NET_FORWARD_USER_LOGIN_YOUKE),
        //保持会话
        [GlobalCMD.PHP_KEEPALIVE]: CmdBingding(0, 0, "user.keepalive", (_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
          error: Error()
        }), AppEvent) : AppEvent).NET_RECEIVE_KEEP_ALIVE),
        //请求php获取用户某个游戏的信息
        [GlobalCMD.PHP_GAME_PLAY_INFO]: CmdBingding(0, 0, "user.playinfo", (_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
          error: Error()
        }), AppEvent) : AppEvent).NET_RECEIVE_GAME_PLAY_INFO),
        //登录初始化
        [GlobalCMD.PHP_CORE_INIT]: CmdBingding(0, 0, "core.init", (_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
          error: Error()
        }), AppEvent) : AppEvent).NET_FORWARD_USER_LOGIN_CORE_INIT),
        //请求背包数据
        [GlobalCMD.PHP_PACKAGE_BAGLIST]: CmdBingding(0, 0, "bag.boxlis", (_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
          error: Error()
        }), AppEvent) : AppEvent).NET_CMD_RESP_USER_BACKPACK),
        //商城请求购买道具
        [GlobalCMD.PHP_BUY_MALL_PROP]: CmdBingding(0, 0, "shop.props", (_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
          error: Error()
        }), AppEvent) : AppEvent).NET_CMD_RESP_BUY_MALL_PROP),
        //请求修改用户信息
        [GlobalCMD.PHP_UPDATE_USERINFO]: CmdBingding(0, 0, "user.setuinfo", (_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
          error: Error()
        }), AppEvent) : AppEvent).NET_FORWARD_SET_USERINFO),
        //获取用户等级配置
        [GlobalCMD.PHP_LEVEL_MODEL_CONFIG]: CmdBingding(0, 0, "core.getLevelConfig", (_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
          error: Error()
        }), AppEvent) : AppEvent).NET_FORWARD_LEVEL_MODEL_CONFIG),
        //请求自己的道具信息
        [GlobalCMD.PHP_PROPS_INFO]: CmdBingding(0, 0, "props.propsCoreInfo", (_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
          error: Error()
        }), AppEvent) : AppEvent).NET_FORWARD_PROPS_INFO),
        //请求新手活动配置
        [GlobalCMD.PHP_ACTIVITY_PULL_NEW_PEOPLE_GET_CFG]: CmdBingding(0, 0, "residentactivity.getData", (_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
          error: Error()
        }), AppEvent) : AppEvent).NET_FORWARD_NEW_PLAYER_CONFIG),
        //请求新手活动奖励列表
        [GlobalCMD.PHP_ACTIVITY_PULL_NEW_PEOPLE_LIST]: CmdBingding(0, 0, "residentactivity.getList", (_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
          error: Error()
        }), AppEvent) : AppEvent).NET_FORWARD_NEW_PLAYER_GIFT_LIST),
        //新用户领取（邀请）奖励
        [GlobalCMD.PHP_ACTIVITY_PULL_NEW_PEOPLE_GET_REWARD_NEW]: CmdBingding(0, 0, "residentactivity.receiveGiftPack", (_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
          error: Error()
        }), AppEvent) : AppEvent).NET_FORWARD_NEW_PLAYER_REWARD),
        //请求大厅游戏配置
        [GlobalCMD.PHP_HALLVIEW_CONFIG]: CmdBingding(0, 0, "system.gamesposCfg", (_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
          error: Error()
        }), AppEvent) : AppEvent).NET_FORWARD_HALL_GAME_CONFIG),
        //快速开始配置
        [GlobalCMD.PHP_GET_FAST_START_CONFIG]: CmdBingding(0, 0, "system.hallcfg", (_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
          error: Error()
        }), AppEvent) : AppEvent).NET_FORWARD_HALL_QUICK_START_CONFIG),
        //请求在线人数
        [GlobalCMD.PHP_HALL_GAME_PLAYER_NUM]: CmdBingding(0, 0, "system.statPlayersByGame", (_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
          error: Error()
        }), AppEvent) : AppEvent).NET_FORWARD_ONLINE_PERSON),
        //请求子游戏场次中的房间列表
        [GlobalCMD.PHP_GAME_LEVEL_LIST]: CmdBingding(0, 0, "system.getLevelInfoByGameV2", (_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
          error: Error()
        }), AppEvent) : AppEvent).NET_FORWARD_GAME_LEVEL_ROOM_TAB),
        //请求场次人数
        [GlobalCMD.PHP_GAME_LEVEL_COUNT]: CmdBingding(0, 0, "system.getLevelCnt", (_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
          error: Error()
        }), AppEvent) : AppEvent).NET_FORWARD_GAME_LEVEL_PERSON_COUNT),
        //上报子游戏版本号
        [GlobalCMD.PHP_REPORT_GAME_VERSION]: CmdBingding(0, 0, "system.saveGameVer", null),
        //破产文案
        [GlobalCMD.PHP_BANKRUPT_TOAST]: CmdBingding(0, 0, "bankruptpack.bankruptpackToast", (_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
          error: Error()
        }), AppEvent) : AppEvent).NET_FORWARD_BANKRUPT_TOAST),
        //新版破产礼包配置
        [GlobalCMD.PHP_GET_BANKRUPTPACK]: CmdBingding(0, 0, "bankruptpack.getBankruptpackNew", (_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
          error: Error()
        }), AppEvent) : AppEvent).NET_RESP_BANKRUPT_GIFT_CONF),
        //商品列表/详情/分类数据返回
        [GlobalCMD.PHP_GOODS_INFO]: CmdBingding(0, 0, "shop.info", (_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
          error: Error()
        }), AppEvent) : AppEvent).NET_FORWARD_GOODS_INFO),
        //创建订单
        [GlobalCMD.PHP_SEND_PAYMENT_ORDER]: CmdBingding(0, 0, "order.create", (_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
          error: Error()
        }), AppEvent) : AppEvent).NET_FORWARD_PAYMENT_ORDER),
        //上报订单信息
        [GlobalCMD.PHP_ROOM_PAY_SEND_ORDER]: CmdBingding(0, 0, "order.creat_order_stat", (_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
          error: Error()
        }), AppEvent) : AppEvent).NET_FORWARD_REPORT_PAY_ORDER),
        //新签到数据
        [GlobalCMD.PHP_SIGNINAWARD_SIGNINDATA]: CmdBingding(0, 0, "signinaward.getSigninData", (_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
          error: Error()
        }), AppEvent) : AppEvent).NET_FORWARD_SIGNIN_CONFIG),
        //新签到
        [GlobalCMD.PHP_SIGNINAWARD_NEWSIGNIN]: CmdBingding(0, 0, "signinaward.sign", (_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
          error: Error()
        }), AppEvent) : AppEvent).NET_FORWARD_SIGNIN_AWARD),
        //新签到连续奖励
        [GlobalCMD.PHP_SIGNINAWARD_CONTINUAWARD]: CmdBingding(0, 0, "signinaward.receiveCtAward", (_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
          error: Error()
        }), AppEvent) : AppEvent).NET_FORWARD_SIGNIN_CONTINU_AWARD),
        //请求邮件数据
        [GlobalCMD.PHP_EMAIL_DATA]: CmdBingding(0, 0, "message.getMess", (_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
          error: Error()
        }), AppEvent) : AppEvent).NET_CMD_RESP_WATCH),
        //请求邮箱奖励数据
        [GlobalCMD.PHP_EMAIL_REWARD]: CmdBingding(0, 0, "user.getnewawards", (_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
          error: Error()
        }), AppEvent) : AppEvent).NET_RESP_EMAIL_REWARD),
        //请求弹框配置
        [GlobalCMD.PHP_ACTIVITY_MODAL_POPUP]: CmdBingding(0, 0, "activitymodalpopup.getList", (_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
          error: Error()
        }), AppEvent) : AppEvent).NET_CMD_RESP_POP_ADVERTISE),
        //限时折扣
        [GlobalCMD.PHP_HOLIDAYS_GIFTPACKAGE]: CmdBingding(0, 0, "specialsgiftpack.getList", (_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
          error: Error()
        }), AppEvent) : AppEvent).NET_FORWARD_HOLIDAYS_GIFTPACKAGE),
        [GlobalCMD.PHP_GOODS_BASE]: CmdBingding(0, 0, "shop.getgoodsbase", (_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
          error: Error()
        }), AppEvent) : AppEvent).NET_RESP_GOODS_BASE),
        // 活动配置
        [GlobalCMD.PHP_ACTIVITY_TASK_CONFIG]: CmdBingding(0, 0, "appletactivity.getData", (_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
          error: Error()
        }), AppEvent) : AppEvent).NET_CMD_RESP_TASK_ACT_CONFIG),
        //判断是否需要更新配置文件
        [GlobalCMD.PHP_GOODS_BASE]: CmdBingding(0, 0, "shop.getgoodsbase", (_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
          error: Error()
        }), AppEvent) : AppEvent).NET_RESP_GOODS_BASE),
        //首充接口
        [GlobalCMD.PHP_FIRST_PAY_CONFIG]: CmdBingding(0, 0, "newfirstcharge.getFirstcharge", (_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
          error: Error()
        }), AppEvent) : AppEvent).NET_RESP_FIRST_PAY_CONFIG),
        //添加到桌面请求领奖 
        [GlobalCMD.PHP_ADD_DESK_AWARD]: CmdBingding(0, 0, "applet.desktocoin", (_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
          error: Error()
        }), AppEvent) : AppEvent).NET_RESP_ADDDESK_AWARD),
        //请求上报接口
        [GlobalCMD.PHP_CLICK_REPORT]: CmdBingding(0, 0, "report.userPortrait", (_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
          error: Error()
        }), AppEvent) : AppEvent).REPORT_RESP_CLIENT_CLICK)
      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=8bf366b9a46c2792e215c9541a90a42a4f59b565.js.map