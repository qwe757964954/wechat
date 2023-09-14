System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, FXJConfig, OPCode, PlayerPosition, GameStatus, MahjongMap;

  _export({
    OPCode: void 0,
    PlayerPosition: void 0,
    GameStatus: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1fc9dcPV85FUoPXmiSe538z", "FXJConfig", undefined);

      /**
       * Name = FXJConfig
       * URL = db://assets/package/game/common/FXJConfig.ts
       * Time = Mon Jul 31 2023 14:56:39 GMT+0800 (中国标准时间)
       * Author = harvyson
       * 飞小鸡游戏配置
       */
      _export("FXJConfig", FXJConfig = {
        /** 快捷聊天 自动关闭的时间 单位:秒*/
        ChatTextAutoHide: 2
      });

      (function (OPCode) {
        OPCode[OPCode["OPE_ERROR"] = 10000] = "OPE_ERROR";
        OPCode[OPCode["OPE_OUT_CARD"] = 10001] = "OPE_OUT_CARD";
        OPCode[OPCode["OPE_PASS"] = 10002] = "OPE_PASS";
        OPCode[OPCode["OPE_CANCEL"] = 10003] = "OPE_CANCEL";
        OPCode[OPCode["OPE_CANCEL_TING"] = 10004] = "OPE_CANCEL_TING";
        OPCode[OPCode["OPE_RIGHT_CHI"] = 1001] = "OPE_RIGHT_CHI";
        OPCode[OPCode["OPE_MIDDLE_CHI"] = 1002] = "OPE_MIDDLE_CHI";
        OPCode[OPCode["OPE_LEFT_CHI"] = 1003] = "OPE_LEFT_CHI";
        OPCode[OPCode["OPE_PENG"] = 2001] = "OPE_PENG";
        OPCode[OPCode["OPE_QIANG_PENG"] = 2002] = "OPE_QIANG_PENG";
        OPCode[OPCode["OPE_GANG"] = 3001] = "OPE_GANG";
        OPCode[OPCode["OPE_HUA_GANG"] = 3002] = "OPE_HUA_GANG";
        OPCode[OPCode["OPE_AN_GANG"] = 3003] = "OPE_AN_GANG";
        OPCode[OPCode["OPE_BU_GANG"] = 3004] = "OPE_BU_GANG";
        OPCode[OPCode["OPE_QIANG_GANG"] = 3005] = "OPE_QIANG_GANG";
        OPCode[OPCode["OPE_DIAO"] = 3006] = "OPE_DIAO";
        OPCode[OPCode["OPE_BAO_GANG"] = 3007] = "OPE_BAO_GANG";
        OPCode[OPCode["OPE_BU_HUA_TO_GANG"] = 3008] = "OPE_BU_HUA_TO_GANG";
        OPCode[OPCode["OPE_HUA_GANG_TO_HUA_QUAN_QI"] = 3009] = "OPE_HUA_GANG_TO_HUA_QUAN_QI";
        OPCode[OPCode["OPE_HU"] = 4001] = "OPE_HU";
        OPCode[OPCode["OPE_GANG_HU"] = 4002] = "OPE_GANG_HU";
        OPCode[OPCode["OPE_HUA_HU"] = 4003] = "OPE_HUA_HU";
        OPCode[OPCode["OPE_ZI_MO"] = 4004] = "OPE_ZI_MO";
        OPCode[OPCode["OPE_TANZI_HU"] = 4005] = "OPE_TANZI_HU";
        OPCode[OPCode["OPE_SHA_BAO"] = 4006] = "OPE_SHA_BAO";
        OPCode[OPCode["OPE_OUT_HU_QI_FENG"] = 4021] = "OPE_OUT_HU_QI_FENG";
        OPCode[OPCode["OPE_OUT_HU_SHI_FENG"] = 4022] = "OPE_OUT_HU_SHI_FENG";
        OPCode[OPCode["OPE_DUI_BAO"] = 4010] = "OPE_DUI_BAO";
        OPCode[OPCode["OPE_MO_BAO"] = 4011] = "OPE_MO_BAO";
        OPCode[OPCode["OPE_KAN_DUI_BAO"] = 4012] = "OPE_KAN_DUI_BAO";
        OPCode[OPCode["OPE_TING"] = 5001] = "OPE_TING";
        OPCode[OPCode["OPE_JIA_TING"] = 5002] = "OPE_JIA_TING";
        OPCode[OPCode["OPE_MING_LOU"] = 5003] = "OPE_MING_LOU";
        OPCode[OPCode["OPE_MING_LV"] = 5012] = "OPE_MING_LV";
        OPCode[OPCode["OPE_XIAO_SA_TING"] = 5016] = "OPE_XIAO_SA_TING";
        OPCode[OPCode["OPE_DI_TING"] = 5004] = "OPE_DI_TING";
        OPCode[OPCode["OPE_RIGHT_CHI_TING"] = 5005] = "OPE_RIGHT_CHI_TING";
        OPCode[OPCode["OPE_MIDDLE_CHI_TING"] = 5006] = "OPE_MIDDLE_CHI_TING";
        OPCode[OPCode["OPE_LEFT_CHI_TING"] = 5007] = "OPE_LEFT_CHI_TING";
        OPCode[OPCode["OPE_PENG_TING"] = 5008] = "OPE_PENG_TING";
        OPCode[OPCode["OPE_FENG_CARD"] = 5010] = "OPE_FENG_CARD";
        OPCode[OPCode["OPE_BAO_JIAO"] = 5011] = "OPE_BAO_JIAO";
        OPCode[OPCode["OPE_13_TING"] = 5018] = "OPE_13_TING";
        OPCode[OPCode["OPE_SHANG_TING"] = 5013] = "OPE_SHANG_TING";
        OPCode[OPCode["OPE_CHEN"] = 5014] = "OPE_CHEN";
        OPCode[OPCode["OPE_FAKE_TING"] = 5015] = "OPE_FAKE_TING";
        OPCode[OPCode["OPE_LANG_QI"] = 5017] = "OPE_LANG_QI";
        OPCode[OPCode["OPE_DU_ZI_MO"] = 5020] = "OPE_DU_ZI_MO";
        OPCode[OPCode["OPE_CANCEL_DU"] = 5021] = "OPE_CANCEL_DU";
        OPCode[OPCode["OPE_TRY_YOU_JIN"] = 5022] = "OPE_TRY_YOU_JIN";
        OPCode[OPCode["OPE_XFG_3X"] = 6001] = "OPE_XFG_3X";
        OPCode[OPCode["OPE_XFG_4X"] = 6002] = "OPE_XFG_4X";
        OPCode[OPCode["OPE_COUNT3_PENG_GANG"] = 6003] = "OPE_COUNT3_PENG_GANG";
        OPCode[OPCode["OPE_COUNT3_AN_GANG"] = 6004] = "OPE_COUNT3_AN_GANG";
        OPCode[OPCode["OPE_COUNT1_GANG"] = 6005] = "OPE_COUNT1_GANG";
        OPCode[OPCode["OPE_COL_1_GANG"] = 7001] = "OPE_COL_1_GANG";
        OPCode[OPCode["OPE_COL_9_GANG"] = 7002] = "OPE_COL_9_GANG";
        OPCode[OPCode["OPE_ROW_3_GANG_4"] = 7003] = "OPE_ROW_3_GANG_4";
        OPCode[OPCode["OPE_ROW_3_GANG_3"] = 7004] = "OPE_ROW_3_GANG_3";
        OPCode[OPCode["OPE_ROW_4_GANG"] = 7005] = "OPE_ROW_4_GANG";
        OPCode[OPCode["OPE_XXX_GANG"] = 7006] = "OPE_XXX_GANG";
        OPCode[OPCode["OPE_QIANG_TOU_ZHI_GANG"] = 7007] = "OPE_QIANG_TOU_ZHI_GANG";
        OPCode[OPCode["OPE_QIANG_TOU_AN_GANG"] = 7008] = "OPE_QIANG_TOU_AN_GANG";
        OPCode[OPCode["OPE_FA_CAI_GANG"] = 7009] = "OPE_FA_CAI_GANG";
        OPCode[OPCode["OPE_DONG_NAN_JI_GANG"] = 7010] = "OPE_DONG_NAN_JI_GANG";
        OPCode[OPCode["OPE_XI_BEI_TONG_GANG"] = 7011] = "OPE_XI_BEI_TONG_GANG";
        OPCode[OPCode["OPE_SHUANG_HUA_GANG"] = 7012] = "OPE_SHUANG_HUA_GANG";
        OPCode[OPCode["OPE_DAN_HUA_GANG"] = 7013] = "OPE_DAN_HUA_GANG";
        OPCode[OPCode["OPE_CAI_SHEN_GANG"] = 7014] = "OPE_CAI_SHEN_GANG";
        OPCode[OPCode["OPE_SPECIAL_BU_GANG"] = 7015] = "OPE_SPECIAL_BU_GANG";
        OPCode[OPCode["OPE_FENG_HUANG_YU_FEI"] = 7016] = "OPE_FENG_HUANG_YU_FEI";
        OPCode[OPCode["OPE_ZI_QI_DONG_LAI"] = 7017] = "OPE_ZI_QI_DONG_LAI";
        OPCode[OPCode["OPE_YUE_SHANG_LIU_SHAO"] = 7018] = "OPE_YUE_SHANG_LIU_SHAO";
        OPCode[OPCode["OPE_JIAN_PAI"] = 8001] = "OPE_JIAN_PAI";
        OPCode[OPCode["OPE_QIANG_PAI"] = 8002] = "OPE_QIANG_PAI";
        OPCode[OPCode["OPE_KA_TING"] = 8003] = "OPE_KA_TING";
        OPCode[OPCode["OPE_FENG_TING"] = 8004] = "OPE_FENG_TING";
        OPCode[OPCode["OPE_QIANG_JIN"] = 8005] = "OPE_QIANG_JIN";
        OPCode[OPCode["OPE_NOTYPE_GANG"] = 7019] = "OPE_NOTYPE_GANG";
        OPCode[OPCode["OPE_KOU_TING"] = 8006] = "OPE_KOU_TING";
      })(OPCode || _export("OPCode", OPCode = {}));

      (function (PlayerPosition) {
        PlayerPosition[PlayerPosition["\u81EA\u5DF1"] = 0] = "\u81EA\u5DF1";
        PlayerPosition[PlayerPosition["\u4E0B\u5BB6"] = 1] = "\u4E0B\u5BB6";
        PlayerPosition[PlayerPosition["\u5BF9\u5BB6"] = 2] = "\u5BF9\u5BB6";
        PlayerPosition[PlayerPosition["\u4E0A\u5BB6"] = 3] = "\u4E0A\u5BB6";
      })(PlayerPosition || _export("PlayerPosition", PlayerPosition = {}));

      (function (GameStatus) {
        GameStatus[GameStatus["DEAL_CARD"] = 1] = "DEAL_CARD";
        GameStatus[GameStatus["PLAY_CARD"] = 2] = "PLAY_CARD";
        GameStatus[GameStatus["OPERATION"] = 3] = "OPERATION";
        GameStatus[GameStatus["DING_QUE"] = 4] = "DING_QUE";
        GameStatus[GameStatus["MAI_DUAN_MEN"] = 5] = "MAI_DUAN_MEN";
        GameStatus[GameStatus["XIA_ZHU"] = 6] = "XIA_ZHU";
        GameStatus[GameStatus["DELAY_AFTER_ZHI_TOU"] = 7] = "DELAY_AFTER_ZHI_TOU";
        GameStatus[GameStatus["DELAY_AFTER_BANKER_OP"] = 8] = "DELAY_AFTER_BANKER_OP";
        GameStatus[GameStatus["MING_LOU_MING_LV"] = 9] = "MING_LOU_MING_LV";
        GameStatus[GameStatus["WAIT_USER_GIVE_UP"] = 10] = "WAIT_USER_GIVE_UP";
        GameStatus[GameStatus["HUAN_SAN_ZHANG"] = 11] = "HUAN_SAN_ZHANG";
      })(GameStatus || _export("GameStatus", GameStatus = {}));

      _export("MahjongMap", MahjongMap = new Map([['0x01', '一万'], ['0x02', '二万'], ['0x03', '三万'], ['0x04', '四万'], ['0x05', '五万'], ['0x06', '六万'], ['0x07', '七万'], ['0x08', '八万'], ['0x09', '九万'], ['0x11', '一筒'], ['0x12', '二筒'], ['0x13', '三筒'], ['0x14', '四筒'], ['0x15', '五筒'], ['0x16', '六筒'], ['0x17', '七筒'], ['0x18', '八筒'], ['0x19', '九筒'], ['0x21', '一条'], ['0x22', '二条'], ['0x23', '三条'], ['0x24', '四条'], ['0x25', '五条'], ['0x26', '六条'], ['0x27', '七条'], ['0x28', '八条'], ['0x29', '九条'], ['0x31', '东风'], ['0x32', '南风'], ['0x33', '西风'], ['0x34', '北风'], ['0x41', '红中'], ['0x42', '发财'], ['0x43', '白板'], ['0x51', '春'], ['0x52', '夏'], ['0x53', '秋'], ['0x54', '冬'], ['0x55', '梅'], ['0x56', '兰'], ['0x57', '菊'], ['0x58', '竹']]));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a779ded475c3f3d66447e8e9b39a985b21f8ed6a.js.map