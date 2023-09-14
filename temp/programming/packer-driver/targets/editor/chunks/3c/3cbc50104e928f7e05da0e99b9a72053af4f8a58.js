System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, FXJEvent, _crd, FXJPBPackageID, CmdBingdingPB, FXJCMDHead, FXJCmdBinding;

  function _reportPossibleCrUseOfFXJEvent(extras) {
    _reporterNs.report("FXJEvent", "../common/FXJEvent", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      FXJEvent = _unresolved_2.FXJEvent;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d90c641erFH3Zjd3B2AHTH7", "FXJCmd", undefined);

      /** 飞小鸡包名配置 */
      _export("FXJPBPackageID", FXJPBPackageID = {
        /** 游戏通用 */
        Common: "Common",

        /** 游戏房间 */
        Game: "Game"
      });
      /**
       * cmd与PB之间的绑定
       * @param pbPackageID PB包名
       * @param pbFuncName 解析的函数名
       * @param respEvent 收到消息时回调发送的事件
       * @returns 
       */


      _export("CmdBingdingPB", CmdBingdingPB = function (pbPackageID, pbFuncName, respEvent = null) {
        let binding = {
          /**  PB包名 */
          packageID: pbPackageID,

          /** 解析/包装的函数名 */
          funcName: pbFuncName,

          /** 返回时绑定的事件 */
          respEvent: respEvent
        };
        return binding;
      });
      /** 头命令 */


      _export("FXJCMDHead", FXJCMDHead = {
        /** 服务端-->客户端 */
        S2C: {
          SERVER_BROADCAST_PLAYER_LOGIN: 0x100D,
          //广播用户登入
          SERVER_BROADCAST_PLAYER_READY: 0x4001,
          //用户准备
          ROOM_LOGIN_SUCCESS: 0x1007,
          //登入房间成功
          SERVER_BROADCAST_PLAYER_LOGOUT: 0x100E,
          //广播用户退出
          ROOM_LOGOUT_SUCCESS: 0x1008,
          //退出房间成功
          SERVER_BROADCAST_JIFEN_RECORD_INFO: 0x8001,
          //广播积分房数据
          ROOM_RECONNECT: 0x1009,
          BROADCAST_LUA_ERROR: 0x3105,
          // 服务端lua报错
          BROADCAST_WAIT_HINT: 0x5030,
          //广播等待其他玩家操作的消息
          //旧框架的协议
          GRAP_CARD: 0x15006,
          //-广播抓牌，数据包含 card opcodeMapIndexList,opcodeGroups
          OUT_CARD: 0x15008,
          //-广播玩家出牌，数据包含 只发自己的牌，count list : {byte,...}
          OPERATION: 0x15010,
          //-广播用户进行了什么操作
          // BROADCAST_GAME_SETTLE   : 0x15012, //-游戏结算
          // BROADCAST_GAME_OVER       : 0x5014, //-广播游戏结束
          // BROADCAST_ROOM_INFO : 0x15016, //广播房间信息
          //BROADCAST_WAIT_HINT : 0x15048, //广播等待其他玩家操作的消息
          BROADCAST_USER_PIAO_GANG: 0x15020,
          //广播杠可以飘的钱数
          BROADCAST_BANKER_ACTION: 0x15024,
          // 庄家开始行动
          BROADCAST_PAOQIAN_OPTIONS: 0x17002,
          // 跑钱选项
          BROADCAST_PAOQIAN_RESULT: 0x17004,
          // 广播跑钱选择结果
          BROADCAST_USER_GIVE_UP: 0x17018,
          //认输广播
          BROADCAST_FAN_PI_GU_RESULT: 0x17016,
          //翻屁股
          // BROADCAST_SYNC_LAIZI : 0x13046, //广播同步癞子牌
          BROADCAST_COUZHUANG: 0x13048,
          //广播凑庄成功
          // BROADCAST_FOLDCARD : 0x13050, //广播弃牌 server change
          BROADCAST_DOUBLE_CARDS: 0x5336,
          //-广播抽奖信息
          BROADCAST_REWARD_CARDS: 0x5337,
          //-广播抽奖牌信息
          ////游戏相关
          PACKAGE_ACK: 0x5000,
          //-ack包,判断客户端发的消息是否成功
          BROADCAST_GAME_START: 0x5002,
          //广播开始游戏
          BROADCAST_GAME_OVER: 0x5004,
          //广播游戏结束
          BROADCAST_DING_ZHUANG: 0x5006,
          //广播定庄
          BROADCAST_ZHI_TOU: 0x5008,
          //广播掷骰
          BROADCAST_DING_FENG: 0x5010,
          //广播定圈风
          BROADCAST_USER_OPERATION: 0x5012,
          //广播玩家可以有的操作
          BROADCAST_USER_OPERATION_RESULT: 0x5014,
          //广播玩家进行的操作
          DEAL_CARD: 0x5018,
          //服务器发牌
          GRAB_CARD: 0x5020,
          //通知玩家抓牌
          BROADCAST_PLAYING_JI_TYPE: 0x5022,
          //广播玩家冲锋or责任信息
          BROADCAST_ZHUO_JI: 0x5024,
          //广播翻牌后捉鸡动画信息
          BROADCAST_SETTLE: 0x5026,
          // 结算
          BROADCAST_HANDCARDS: 0x5028,
          // 广播摊开手牌的信息    
          BROADCAST_BANKER_FIRST_OPERATION: 0x5032,
          //广播庄家首次操作
          BROADCAST_UPDATE_PLAYER_MONEY: 0x5034,
          //-广播玩家金币
          BROADCAST_GANG_OPERATION_RESULT: 0x5036,
          // 广播玩家特殊杠操作产生的信息
          BROADCAST_ROOM_INFO: 0x5100,
          //广播房间信息
          BROADCAST_DING_LAIZI: 0x5338,
          ////-广播定癞子
          BROADCAST_DI_TING: 0x3021,
          //地听
          BROADCAST_BU_HUA: 0x3031,
          //补花
          BROADCAST_TO_WAIT_USER_GIVE_UP: 0x3044,
          //广播等待玩家认输
          BROADCAST_BAO_JIAO: 0x3062,
          //报叫
          BROADCAST_WAIT_TIME_BEFORE_GRAB: 0x3064,
          //等待一些时间再抓牌
          BROADCAST_SPECIAL_CARDS: 0x3068,
          //广播同步特殊牌，类似于同步癞子牌
          //下注，买点，跑钱，加刚，飘
          BROADCAST_XIAZHU_OPTIONS: 0x5302,
          BROADCAST_XIAZHU_RESULT: 0x5304,
          BROADCAST_SELECT_GANG_CARDS: 0x5306,
          //广播那个玩家选择候选杠牌 //（后端框架已有协议）
          BROADCAST_GANG_CARDS: 0x5308,
          //广播候选杠牌有哪些 //（后端框架已有协议）
          BROADCAST_DINGQUE_OPTIONS: 0x5312,
          //广播定缺选项
          BROADCAST_ONE_DINGQUE_RESULT: 0x5314,
          //广播玩家定缺结果
          BROADCAST_ALL_DINGQUE_RESULT: 0x5316,
          // 定缺结果
          BROADCAST_SHUAIQIANG_RESULT: 0x5324,
          //广播玩家摔枪结果
          BROADCAST_CHAQUE_RESULT: 0x5328,
          //广播查缺结果
          BROADCAST_MAIDUANMEN_USER: 0x5332,
          //-广播买断门的玩家信息
          BROADCAST_MAIDUANMEN_RESULT: 0x5334,
          //-广播买断门的结果
          BROADCAST_FEN_ZHANG: 0x5340,
          // 广播分张
          BROADCAST_UPDATE_FAN_GANG_PAI: 0x5342,
          ////-广播更新翻杠牌
          BROADCAST_SELECT_FAN_GANG_PAI: 0x5344,
          ////-广播选择翻杠牌
          BROADCAST_GEN_ZHUANG_SUCC: 0x5346,
          ////-广播跟庄成功
          BROADCAST_FOLDCARD: 0x5348,
          //广播用户弃牌
          BROADCAST_LAST_TIME_HUANG_ZHUANG: 0x5350,
          //广播上局荒庄信息
          BROADCAST_PAIXINGTEST_RESULT: 0x5354,
          //- 广播牌型测试结果
          BROADCAST_FAN_GANG_PAI: 0x5352,
          ////-广播翻杠的牌
          BROADCAST_LEFT_CARDS_UPDATE: 0x5356,
          //更新剩余牌数
          BROADCAST_LAPAI_OPTIONS: 0x5358,
          //广播拉牌选项
          BROADCAST_LAPAI_RESULT: 0x5360,
          //广播玩家拉牌结果
          BROADCAST_LAPAI_FINAL_RESULTS: 0x5362,
          //广播所有玩家最终拉牌结果
          BROADCAST_CHI_SAN_KOU: 0x5364,
          //-广播玩家完成吃三口
          BROADCAST_USER_GIVE_UP_RESULTS: 0x5368,
          //广播该玩家认输或者取钱完成
          BROADCAST_DITING_START: 0x5374,
          // 广播地听流程开始
          BROADCAST_DITING_END: 0x5376,
          // 广播地听流程结束
          BROADCAST_MAI_MA_RESULT: 0x5370,
          //广播买马结果
          BROADCAST_MAI_MA_SETTLE: 0x5372,
          //广播买马结算结果 
          BROADCAST_UPDATE_USER_PAO_CARD: 0x5378,
          //广播更新玩家的炮牌
          BROADCAST_GUAN_SI: 0x5380,
          //广播关死玩家
          BROADCAST_JI_QIANG_RESULT: 0x5382,
          //广播鸡枪结果
          BROADCAST_PIAO_OPTION: 0x5386,
          // 广播漂选项
          BROADCAST_PIAO_RESULT: 0x5388,
          // 广播漂结果
          BROADCAST_HUAN_SAN_ZHANG: 0x5390,
          // 广播开始换三张
          BROADCAST_ONE_HUAN_SAN_ZHANG_RESULT: 0x5392,
          // 广播一个玩家完成换三张
          BROADCAST_ALL_HUAN_SAN_ZHANG: 0x5394,
          // 广播所有玩家完成换三张
          BROADCAST_BAO_HU: 0x5396,
          // 广播包胡信息
          BROADCAST_BU_HUA_PAI: 0x5397,
          //补花之后抓牌
          BROADCAST_BAOPAI_RESULT: 0x5400,
          //广播宝牌信息
          BROADCAST_HUAN_BAO: 0x5402,
          //广播换宝
          BROADCAST_RESTORE_DIAO: 0x5404,
          // 恢复原来的调牌
          BROADCAST_NEXT_OPERATION_USER: 0x5406,
          //茶馆房卡广播下个操作的玩家
          BROADCAST_CAI_SHEN_RESULT: 0x5408,
          //广播财神牌信息
          BROADCAST_DING_LIPAI: 0x5410,
          // 广播立牌信息   
          BROADCAST_YOU_JIN_STATUS: 0x5412,
          // 广播（用户）游金状态     
          BROADCAST_DIRVER_CLIENT_VARS: 0x5414,
          //广播服务器驱动客户端的变量
          DEBUG_STOP_GAME_SUCCESS: 0x5998,
          //结束游戏成功
          CHECK_VERSION_RESULT: 0x5996,
          //是否强制更新
          REMOVE_HUAPAI: 0x6102,
          //广播移除花牌
          RES_RULESCONFIG: 0x6000,
          //响应ruleConfig内容 
          BROADCAST_DIRVERCLIENTVARS: 0x6001 //广播服务器驱动客户端的变量

        },

        /** 客户端-->服务端 */
        C2S: {
          OUT_CARD: 0x5007,
          // 0x5007 出牌 
          OPERATION: 0x5009,
          // 0x5009 用户提交操作
          ROOM_USER_CHAT: 0x1003,
          //用户对话
          ROOM_USER_FACE: 0x1004,
          //用户表情
          CANCEL_OPERATION: 0x5017,
          // 0x5017 用户取消操作
          USER_XIAZHU_REQUEST: 0x5303,
          //用户提交跑钱结果
          USER_SUBMIT_GANG_CARD: 0x5307,
          //选择杠牌  //（后端框架已有协议）
          USER_DINGQUE_REQUEST: 0x5313,
          //用户提交定缺结果
          USER_BREAK_UP_OPTION: 0x5317,
          //玩家破产后选择认输还是继续(玩家破产后选择取钱或者认输)
          USER_PIAO_REQUEST: 0x5321,
          //用户提交飘结果
          USER_MAIDUANMEN_REQUEST: 0x5335,
          //用户提交买断们结果
          USER_OPERATION_RESULT: 0x5337,
          //用户提交操作
          USER_SELECT_FAN_GANG_PAI: 0x5339,
          //玩家提交选择的翻杠牌
          USER_PAIXINGTEST_REQUEST: 0x5341,
          //玩家提交牌型测试请求
          USER_LAPAI_REQUEST: 0x5359,
          //用户提交拉牌结果
          USER_GIVE_UP_OPTION: 0x5367,
          //玩家提交认输或者取钱结果
          USER_SELECT_PIAO: 0x5387,
          //玩家提交漂结果
          USER_HUAN_SAN_ZHANG_RESULT: 0x5391,
          // 玩家提交换三张结果
          USER_CHOSE_GROUPS: 0x5393,
          // 玩家提交选刻结果
          USER_DU_ZI_MO_RESULT: 0x5395,
          // 玩家提交赌自摸的结果       
          DEBUG_STOP_GAME: 0x5999,
          //调试模式一键结束游戏
          CHECK_VERSION: 0x5997,
          //版本号
          REQ_RULESCONFIG: 0x6001 //请求ruleConfig内容 

        }
      });
      /** 飞小鸡协议绑定 */


      _export("FXJCmdBinding", FXJCmdBinding = {
        /** 请求消息 clv-->sev */
        REQ: {
          /** 客户端-->服务端 出牌*/
          [FXJCMDHead.C2S.OUT_CARD]: CmdBingdingPB(FXJPBPackageID.Game, "OutCard", null),
          [FXJCMDHead.C2S.ROOM_USER_CHAT]: CmdBingdingPB(null, "onReqCommonUserChat", null),
          [FXJCMDHead.C2S.ROOM_USER_FACE]: CmdBingdingPB(null, "onReqCommonUserFace", null),
          //  [FXJCMDHead.C2S.OPERATION]:CmdBingdingPB(FXJPBPackageID.Game, "OperationResult", null),
          //  [FXJCMDHead.C2S.OPERATION]:CmdBingdingPB(FXJPBPackageID.Game, "onReqOperation", null),
          [FXJCMDHead.C2S.CANCEL_OPERATION]: CmdBingdingPB(FXJPBPackageID.Game, "UserCancel", null),
          [FXJCMDHead.C2S.USER_XIAZHU_REQUEST]: CmdBingdingPB(FXJPBPackageID.Game, "UserXiaZhu", null),
          [FXJCMDHead.C2S.USER_SUBMIT_GANG_CARD]: CmdBingdingPB(FXJPBPackageID.Game, "SelectGangCard", null),
          [FXJCMDHead.C2S.USER_DINGQUE_REQUEST]: CmdBingdingPB(FXJPBPackageID.Game, "UserDingQue", null),
          [FXJCMDHead.C2S.USER_BREAK_UP_OPTION]: CmdBingdingPB(FXJPBPackageID.Game, "UserBreakUpOption", null),
          [FXJCMDHead.C2S.USER_PIAO_REQUEST]: CmdBingdingPB(FXJPBPackageID.Game, "UserDingQue", null),
          [FXJCMDHead.C2S.USER_MAIDUANMEN_REQUEST]: CmdBingdingPB(FXJPBPackageID.Game, "MaiDuanMenResult", null),
          [FXJCMDHead.C2S.USER_OPERATION_RESULT]: CmdBingdingPB(FXJPBPackageID.Game, "OperationResult", null),
          [FXJCMDHead.C2S.USER_SELECT_FAN_GANG_PAI]: CmdBingdingPB(FXJPBPackageID.Game, "SelectFanGangPai", null),
          [FXJCMDHead.C2S.USER_PAIXINGTEST_REQUEST]: CmdBingdingPB(FXJPBPackageID.Game, "PaiXingTestRequest", null),
          [FXJCMDHead.C2S.USER_LAPAI_REQUEST]: CmdBingdingPB(FXJPBPackageID.Game, "UserXiaZhu", null),
          [FXJCMDHead.C2S.USER_GIVE_UP_OPTION]: CmdBingdingPB(FXJPBPackageID.Game, "UserGiveUpOption", null),
          [FXJCMDHead.C2S.USER_SELECT_PIAO]: CmdBingdingPB(FXJPBPackageID.Game, "UserXiaZhu", null),
          [FXJCMDHead.C2S.USER_HUAN_SAN_ZHANG_RESULT]: CmdBingdingPB(FXJPBPackageID.Game, "HuanSanZhang", null),
          [FXJCMDHead.C2S.USER_CHOSE_GROUPS]: CmdBingdingPB(FXJPBPackageID.Game, "UserChoseGroups", null),
          [FXJCMDHead.C2S.USER_DU_ZI_MO_RESULT]: CmdBingdingPB(FXJPBPackageID.Game, "UserDuResult", null),
          [FXJCMDHead.C2S.DEBUG_STOP_GAME]: CmdBingdingPB(FXJPBPackageID.Game, "UserCancel", null),
          [FXJCMDHead.C2S.CHECK_VERSION]: CmdBingdingPB(FXJPBPackageID.Game, "CheckVersion", null),
          [FXJCMDHead.C2S.REQ_RULESCONFIG]: CmdBingdingPB(FXJPBPackageID.Game, "REQ_RULESCONFIG", null) // [FXJCMDHead.C2S.USER_MAIDUANMEN_REQUEST]:CmdBingdingPB(FXJPBPackageID.Game, "MaiDuanMenResult", null),

        },

        /** 响应消息 sev-->clv */
        RESP: {
          /** 登录成功 */
          [FXJCMDHead.S2C.ROOM_LOGIN_SUCCESS]: CmdBingdingPB(FXJPBPackageID.Game, "UserLoginRoom", (_crd && FXJEvent === void 0 ? (_reportPossibleCrUseOfFXJEvent({
            error: Error()
          }), FXJEvent) : FXJEvent).NET_RECEIVE_GAME_LOGIN_SUCCESS),
          [FXJCMDHead.S2C.SERVER_BROADCAST_PLAYER_LOGIN]: CmdBingdingPB(FXJPBPackageID.Common, "PlayerInfo", (_crd && FXJEvent === void 0 ? (_reportPossibleCrUseOfFXJEvent({
            error: Error()
          }), FXJEvent) : FXJEvent).SERVER_BROADCAST_PLAYER_LOGIN),
          [FXJCMDHead.S2C.ROOM_RECONNECT]: CmdBingdingPB(FXJPBPackageID.Game, "UserReconnect", (_crd && FXJEvent === void 0 ? (_reportPossibleCrUseOfFXJEvent({
            error: Error()
          }), FXJEvent) : FXJEvent).NET_RECEIVE_GAME_RECONNECT_SUCCESS),
          //    [FXJCMDHead.S2C.SERVER_BROADCAST_PLAYER_READY]: CmdBingdingPB(FXJPBPackageID.Common, "", FXJEvent.SERVER_BROADCAST_PLAYER_READY),

          /** 定庄 */
          [FXJCMDHead.S2C.BROADCAST_DING_ZHUANG]: CmdBingdingPB(FXJPBPackageID.Game, "FixBanker", (_crd && FXJEvent === void 0 ? (_reportPossibleCrUseOfFXJEvent({
            error: Error()
          }), FXJEvent) : FXJEvent).BROADCAST_DING_ZHUANG),

          /** 抓牌 */
          [FXJCMDHead.S2C.GRAB_CARD]: CmdBingdingPB(FXJPBPackageID.Game, "GrabCard", (_crd && FXJEvent === void 0 ? (_reportPossibleCrUseOfFXJEvent({
            error: Error()
          }), FXJEvent) : FXJEvent).BROADCAST_GRAB_CARD),

          /** 广播掷骰 */
          [FXJCMDHead.S2C.BROADCAST_ZHI_TOU]: CmdBingdingPB(FXJPBPackageID.Game, "RollDice", (_crd && FXJEvent === void 0 ? (_reportPossibleCrUseOfFXJEvent({
            error: Error()
          }), FXJEvent) : FXJEvent).BROADCAST_ZHI_TOU),

          /** 广播定圈风 */
          [FXJCMDHead.S2C.BROADCAST_DING_FENG]: CmdBingdingPB(FXJPBPackageID.Game, "QuanfengInfo", (_crd && FXJEvent === void 0 ? (_reportPossibleCrUseOfFXJEvent({
            error: Error()
          }), FXJEvent) : FXJEvent).BROADCAST_DING_FENG),

          /** 广播玩家可以有的操作 */
          [FXJCMDHead.S2C.BROADCAST_USER_OPERATION]: CmdBingdingPB(FXJPBPackageID.Game, "Operation", (_crd && FXJEvent === void 0 ? (_reportPossibleCrUseOfFXJEvent({
            error: Error()
          }), FXJEvent) : FXJEvent).BROADCAST_USER_OPERATION),

          /** 广播玩家进行的操作 */
          [FXJCMDHead.S2C.BROADCAST_USER_OPERATION_RESULT]: CmdBingdingPB(FXJPBPackageID.Game, "OperationResult", (_crd && FXJEvent === void 0 ? (_reportPossibleCrUseOfFXJEvent({
            error: Error()
          }), FXJEvent) : FXJEvent).BROADCAST_USER_OPERATION_RESULT),

          /** 服务器发牌 */
          [FXJCMDHead.S2C.DEAL_CARD]: CmdBingdingPB(FXJPBPackageID.Game, "DealCard", (_crd && FXJEvent === void 0 ? (_reportPossibleCrUseOfFXJEvent({
            error: Error()
          }), FXJEvent) : FXJEvent).BROADCAST_DEAL_CARD),

          /** 广播定缺选项 */
          [FXJCMDHead.S2C.BROADCAST_DINGQUE_OPTIONS]: CmdBingdingPB(FXJPBPackageID.Game, "DingQueOption", (_crd && FXJEvent === void 0 ? (_reportPossibleCrUseOfFXJEvent({
            error: Error()
          }), FXJEvent) : FXJEvent).BROADCAST_DINGQUE_OPTIONS),

          /** 广播庄家首次操作 */
          [FXJCMDHead.S2C.BROADCAST_BANKER_FIRST_OPERATION]: CmdBingdingPB(FXJPBPackageID.Game, "FixBanker", (_crd && FXJEvent === void 0 ? (_reportPossibleCrUseOfFXJEvent({
            error: Error()
          }), FXJEvent) : FXJEvent).BROADCAST_BANKER_FIRST_OPERATION),

          /** 广播玩家金币 */
          [FXJCMDHead.S2C.BROADCAST_UPDATE_PLAYER_MONEY]: CmdBingdingPB(FXJPBPackageID.Game, "UpdatePlayerMoney", (_crd && FXJEvent === void 0 ? (_reportPossibleCrUseOfFXJEvent({
            error: Error()
          }), FXJEvent) : FXJEvent).BROADCAST_UPDATE_PLAYER_MONEY),

          /** 广播玩家特殊杠操作产生的信息 */
          [FXJCMDHead.S2C.BROADCAST_GANG_OPERATION_RESULT]: CmdBingdingPB(FXJPBPackageID.Game, "gangOperationResult", (_crd && FXJEvent === void 0 ? (_reportPossibleCrUseOfFXJEvent({
            error: Error()
          }), FXJEvent) : FXJEvent).BROADCAST_GANG_OPERATION_RESULT),

          /** 广播定癞子 */
          [FXJCMDHead.S2C.BROADCAST_DING_LAIZI]: CmdBingdingPB(FXJPBPackageID.Game, "FixLaizi", (_crd && FXJEvent === void 0 ? (_reportPossibleCrUseOfFXJEvent({
            error: Error()
          }), FXJEvent) : FXJEvent).BROADCAST_DING_LAIZI),

          /** 广播等待玩家认输 */
          [FXJCMDHead.S2C.BROADCAST_TO_WAIT_USER_GIVE_UP]: CmdBingdingPB(FXJPBPackageID.Game, "ToWaitGiveup", (_crd && FXJEvent === void 0 ? (_reportPossibleCrUseOfFXJEvent({
            error: Error()
          }), FXJEvent) : FXJEvent).BROADCAST_TO_WAIT_USER_GIVE_UP),

          /** 广播定癞子 */
          // [FXJCMDHead.S2C.BROADCAST_DI_TING]: CmdBingdingPB(FXJPBPackageID.Game, "FixLaizi", FXJEvent.BROADCAST_DI_TING),

          /** 下注，买点，跑钱，加刚，飘 */
          [FXJCMDHead.S2C.BROADCAST_XIAZHU_OPTIONS]: CmdBingdingPB(FXJPBPackageID.Game, "XiaZhuOption", (_crd && FXJEvent === void 0 ? (_reportPossibleCrUseOfFXJEvent({
            error: Error()
          }), FXJEvent) : FXJEvent).BROADCAST_XIAZHU_OPTIONS),

          /** 下注，买点，跑钱，加刚，飘 */
          [FXJCMDHead.S2C.BROADCAST_XIAZHU_RESULT]: CmdBingdingPB(FXJPBPackageID.Game, "UserXiaZhu", (_crd && FXJEvent === void 0 ? (_reportPossibleCrUseOfFXJEvent({
            error: Error()
          }), FXJEvent) : FXJEvent).BROADCAST_XIAZHU_RESULT),

          /** 广播杠可以飘的钱数 */
          // [FXJCMDHead.S2C.BROADCAST_USER_PIAO_GANG]: CmdBingdingPB(FXJPBPackageID.Game, "Gang", FXJEvent.BROADCAST_USER_PIAO_GANG),

          /** 跑钱选项 */
          [FXJCMDHead.S2C.BROADCAST_PAOQIAN_OPTIONS]: CmdBingdingPB(FXJPBPackageID.Game, "PaoQianOption", (_crd && FXJEvent === void 0 ? (_reportPossibleCrUseOfFXJEvent({
            error: Error()
          }), FXJEvent) : FXJEvent).BROADCAST_PAOQIAN_OPTIONS),

          /** 广播玩家定缺结果 */
          [FXJCMDHead.S2C.BROADCAST_ONE_DINGQUE_RESULT]: CmdBingdingPB(FXJPBPackageID.Game, "UserDingQue", (_crd && FXJEvent === void 0 ? (_reportPossibleCrUseOfFXJEvent({
            error: Error()
          }), FXJEvent) : FXJEvent).BROADCAST_ONE_DINGQUE_RESULT),

          /** 广播玩家定缺结果 */
          [FXJCMDHead.S2C.BROADCAST_ALL_DINGQUE_RESULT]: CmdBingdingPB(FXJPBPackageID.Game, "DingQueResult", (_crd && FXJEvent === void 0 ? (_reportPossibleCrUseOfFXJEvent({
            error: Error()
          }), FXJEvent) : FXJEvent).BROADCAST_ALL_DINGQUE_RESULT),

          /** 广播玩家摔枪结果 */
          [FXJCMDHead.S2C.BROADCAST_SHUAIQIANG_RESULT]: CmdBingdingPB(FXJPBPackageID.Game, "ShuaiQiang", (_crd && FXJEvent === void 0 ? (_reportPossibleCrUseOfFXJEvent({
            error: Error()
          }), FXJEvent) : FXJEvent).BROADCAST_SHUAIQIANG_RESULT),

          /** 广播玩家摔枪结果 */
          [FXJCMDHead.S2C.BROADCAST_CHAQUE_RESULT]: CmdBingdingPB(FXJPBPackageID.Game, "UserChaQue", (_crd && FXJEvent === void 0 ? (_reportPossibleCrUseOfFXJEvent({
            error: Error()
          }), FXJEvent) : FXJEvent).BROADCAST_CHAQUE_RESULT),

          /** 广播买断门的玩家信息 */
          [FXJCMDHead.S2C.BROADCAST_MAIDUANMEN_USER]: CmdBingdingPB(FXJPBPackageID.Game, "MaiDuanMenUser", (_crd && FXJEvent === void 0 ? (_reportPossibleCrUseOfFXJEvent({
            error: Error()
          }), FXJEvent) : FXJEvent).BROADCAST_MAIDUANMEN_USER),

          /** 广播买断门的结果 */
          [FXJCMDHead.S2C.BROADCAST_MAIDUANMEN_RESULT]: CmdBingdingPB(FXJPBPackageID.Game, "MaiDuanMenResult", (_crd && FXJEvent === void 0 ? (_reportPossibleCrUseOfFXJEvent({
            error: Error()
          }), FXJEvent) : FXJEvent).BROADCAST_MAIDUANMEN_RESULT),

          /** 广播分张 */
          [FXJCMDHead.S2C.BROADCAST_FEN_ZHANG]: CmdBingdingPB(FXJPBPackageID.Game, "FenZhang", (_crd && FXJEvent === void 0 ? (_reportPossibleCrUseOfFXJEvent({
            error: Error()
          }), FXJEvent) : FXJEvent).BROADCAST_FEN_ZHANG),

          /** 广播更新翻杠牌 */
          [FXJCMDHead.S2C.BROADCAST_UPDATE_FAN_GANG_PAI]: CmdBingdingPB(FXJPBPackageID.Game, "UpdateFanGangPai", (_crd && FXJEvent === void 0 ? (_reportPossibleCrUseOfFXJEvent({
            error: Error()
          }), FXJEvent) : FXJEvent).BROADCAST_UPDATE_FAN_GANG_PAI),

          /** 广播选择翻杠牌 */
          [FXJCMDHead.S2C.BROADCAST_SELECT_FAN_GANG_PAI]: CmdBingdingPB(FXJPBPackageID.Game, "SelectFanGangPai", (_crd && FXJEvent === void 0 ? (_reportPossibleCrUseOfFXJEvent({
            error: Error()
          }), FXJEvent) : FXJEvent).BROADCAST_SELECT_FAN_GANG_PAI),

          /** 广播翻杠牌 */
          [FXJCMDHead.S2C.BROADCAST_FAN_GANG_PAI]: CmdBingdingPB(FXJPBPackageID.Game, "FanGangPai", (_crd && FXJEvent === void 0 ? (_reportPossibleCrUseOfFXJEvent({
            error: Error()
          }), FXJEvent) : FXJEvent).BROADCAST_FAN_GANG_PAI),

          /** 广播抽奖信息 */
          [FXJCMDHead.S2C.BROADCAST_DOUBLE_CARDS]: CmdBingdingPB(FXJPBPackageID.Game, "ChouJiang", (_crd && FXJEvent === void 0 ? (_reportPossibleCrUseOfFXJEvent({
            error: Error()
          }), FXJEvent) : FXJEvent).BROADCAST_DOUBLE_CARDS),

          /** 广播抽奖牌信息 */
          [FXJCMDHead.S2C.BROADCAST_REWARD_CARDS]: CmdBingdingPB(FXJPBPackageID.Game, "ChouJiangCards", (_crd && FXJEvent === void 0 ? (_reportPossibleCrUseOfFXJEvent({
            error: Error()
          }), FXJEvent) : FXJEvent).BROADCAST_REWARD_CARDS),

          /** 广播玩家冲锋or责任信息 */
          [FXJCMDHead.S2C.BROADCAST_PLAYING_JI_TYPE]: CmdBingdingPB(FXJPBPackageID.Game, "PlayingJiType", (_crd && FXJEvent === void 0 ? (_reportPossibleCrUseOfFXJEvent({
            error: Error()
          }), FXJEvent) : FXJEvent).BROADCAST_PLAYING_JI_TYPE),

          /** 广播翻牌后捉鸡动画信息 */
          [FXJCMDHead.S2C.BROADCAST_ZHUO_JI]: CmdBingdingPB(FXJPBPackageID.Game, "ZhuoJi", (_crd && FXJEvent === void 0 ? (_reportPossibleCrUseOfFXJEvent({
            error: Error()
          }), FXJEvent) : FXJEvent).BROADCAST_ZHUO_JI),

          /** 结算 */
          [FXJCMDHead.S2C.BROADCAST_SETTLE]: CmdBingdingPB(FXJPBPackageID.Game, "SettleItem", (_crd && FXJEvent === void 0 ? (_reportPossibleCrUseOfFXJEvent({
            error: Error()
          }), FXJEvent) : FXJEvent).BROADCAST_SETTLE),

          /** 广播摊开手牌的信息 */
          [FXJCMDHead.S2C.BROADCAST_HANDCARDS]: CmdBingdingPB(FXJPBPackageID.Game, "HandCards", (_crd && FXJEvent === void 0 ? (_reportPossibleCrUseOfFXJEvent({
            error: Error()
          }), FXJEvent) : FXJEvent).BROADCAST_HANDCARDS),

          /** 广播摊开手牌的信息 */
          [FXJCMDHead.S2C.BROADCAST_GEN_ZHUANG_SUCC]: CmdBingdingPB(FXJPBPackageID.Game, "FixBanker", (_crd && FXJEvent === void 0 ? (_reportPossibleCrUseOfFXJEvent({
            error: Error()
          }), FXJEvent) : FXJEvent).BROADCAST_GEN_ZHUANG_SUCC),

          /** 游戏结束 */
          [FXJCMDHead.S2C.BROADCAST_GAME_OVER]: CmdBingdingPB(FXJPBPackageID.Common, "GameState", (_crd && FXJEvent === void 0 ? (_reportPossibleCrUseOfFXJEvent({
            error: Error()
          }), FXJEvent) : FXJEvent).BROADCAST_GAME_OVER),

          /** 游戏开始 */
          [FXJCMDHead.S2C.BROADCAST_GAME_START]: CmdBingdingPB(FXJPBPackageID.Common, "GameState", (_crd && FXJEvent === void 0 ? (_reportPossibleCrUseOfFXJEvent({
            error: Error()
          }), FXJEvent) : FXJEvent).BROADCAST_GAME_START)
        }
      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=3cbc50104e928f7e05da0e99b9a72053af4f8a58.js.map