/**
 * Name = FXJConfig
 * URL = db://assets/package/game/common/FXJConfig.ts
 * Time = Mon Jul 31 2023 14:56:39 GMT+0800 (中国标准时间)
 * Author = harvyson
 * 飞小鸡游戏配置
 */
 
export const FXJConfig = {
	/** 快捷聊天 自动关闭的时间 单位:秒*/
	ChatTextAutoHide: 2,
}


export enum OPCode {
    OPE_ERROR                  = 10000,      //非法
	OPE_OUT_CARD               = 10001,      //出牌
	OPE_PASS                   = 10002,      //过
	OPE_CANCEL                 = 10003,      //取消
	OPE_CANCEL_TING            = 10004,      //撤听



	OPE_RIGHT_CHI              = 1001,	//右吃
	OPE_MIDDLE_CHI             = 1002,	//中吃
	OPE_LEFT_CHI               = 1003,	//左吃

	OPE_PENG                   = 2001,	//碰
	OPE_QIANG_PENG             = 2002,    //抢碰

	OPE_GANG                   = 3001,	//碰杠
	OPE_HUA_GANG               = 3002,	//花杠
	OPE_AN_GANG                = 3003,	//暗杠
	OPE_BU_GANG                = 3004,	//补杠
	OPE_QIANG_GANG             = 3005,    //抢杠
	OPE_DIAO                   = 3006,    //调牌（提牌）
	OPE_BAO_GANG               = 3007,    //宝杠
	OPE_BU_HUA_TO_GANG         = 3008,    //补花变成杠
	OPE_HUA_GANG_TO_HUA_QUAN_QI = 3009,   //花杠变花全齐

	OPE_HU                     = 4001,	//胡
	OPE_GANG_HU                = 4002,	//抢杠胡
	OPE_HUA_HU                 = 4003,	//八花胡
	OPE_ZI_MO                  = 4004,	//自摸
	OPE_TANZI_HU               = 4005, 	//塘子胡
	OPE_SHA_BAO                = 4006,   //杀报

	OPE_OUT_HU_QI_FENG         = 4021,      //七风
	OPE_OUT_HU_SHI_FENG        = 4022,      //十风

	OPE_DUI_BAO                = 4010,       //对宝
	OPE_MO_BAO                 = 4011,       //摸宝
	OPE_KAN_DUI_BAO            = 4012,       //坎对宝

	OPE_TING                   = 5001,	//听牌
	OPE_JIA_TING               = 5002,	//夹听牌
	OPE_MING_LOU               = 5003,    //明楼(用户点击明楼，准备听牌)
	OPE_MING_LV                = 5012,    //明缕
	OPE_XIAO_SA_TING           = 5016,    //潇洒听牌
	OPE_DI_TING                = 5004,       //地听
	OPE_RIGHT_CHI_TING         = 5005,       //右吃听
	OPE_MIDDLE_CHI_TING        = 5006,      //中吃听
	OPE_LEFT_CHI_TING          = 5007,       //左吃听
	OPE_PENG_TING              = 5008,       //碰听
	OPE_FENG_CARD              = 5010,       //封牌
	OPE_BAO_JIAO               = 5011,       //报叫
	OPE_13_TING                = 5018,       //13张牌的听牌
	OPE_SHANG_TING             = 5013,       //上听
	OPE_CHEN                   = 5014,       //抻
	OPE_FAKE_TING              = 5015,       //假听
	OPE_LANG_QI                = 5017,       //廊起
	OPE_DU_ZI_MO               = 5020,       //赌自摸
	OPE_CANCEL_DU              = 5021,       //取消赌自摸
	OPE_TRY_YOU_JIN            = 5022,       //游金

	OPE_XFG_3X                 = 6001,     //中发白旋风杠
	OPE_XFG_4X                 = 6002,     //东南西北旋风杠

	OPE_COUNT3_PENG_GANG       = 6003,     //三张牌成碰杠
	OPE_COUNT3_AN_GANG         = 6004,     //三张牌成暗杠
	OPE_COUNT1_GANG            = 6005,     //一张牌成杠，例如打出花牌算一个杠

	OPE_COL_1_GANG             = 7001,       //1蛋
	OPE_COL_9_GANG             = 7002,       //9蛋
	OPE_ROW_3_GANG_4           = 7003,       //旋风杠
	OPE_ROW_3_GANG_3           = 7004,       //三风杠
	OPE_ROW_4_GANG             = 7005,       //喜杠
	OPE_XXX_GANG               = 7006,       //特殊杠
	OPE_QIANG_TOU_ZHI_GANG            = 7007,       //墙头直杠
	OPE_QIANG_TOU_AN_GANG             = 7008,       //墙头暗杠
	OPE_FA_CAI_GANG            = 7009,       //发财杠


	OPE_DONG_NAN_JI_GANG            = 7010,       //东南鸡杠
	OPE_XI_BEI_TONG_GANG            = 7011,       //西北筒杠
	OPE_SHUANG_HUA_GANG             = 7012,       //双花杠
	OPE_DAN_HUA_GANG                = 7013,    //单花杠（补花）
	OPE_CAI_SHEN_GANG               = 7014,    //财神杠
	OPE_SPECIAL_BU_GANG             = 7015,    //特殊补杠 自贡花麻将
	OPE_FENG_HUANG_YU_FEI     = 7016,  // 凤凰于飞(杂杠)
	OPE_ZI_QI_DONG_LAI     = 7017,  // 紫气东来(杂杠)
	OPE_YUE_SHANG_LIU_SHAO      = 7018,  // 月上柳梢(杂杠)

	OPE_JIAN_PAI                    = 8001,   // 捡牌
	OPE_QIANG_PAI                   = 8002,  // 抢牌
	OPE_KA_TING                     = 8003,  // 卡听
	OPE_FENG_TING                   = 8004,  // 风听
	OPE_QIANG_JIN                   = 8005,  // 抢金
	OPE_NOTYPE_GANG                 = 7019,  // 待配类型杠
	OPE_KOU_TING                    = 8006,  // 扣听
}

export enum PlayerPosition {
	'自己' = 0,
	'下家' = 1,
	'对家' = 2,
	'上家' = 3,
  }

  export enum GameStatus {
	DEAL_CARD = 1,
	PLAY_CARD = 2,
	OPERATION = 3,
	DING_QUE = 4,
	MAI_DUAN_MEN = 5,
	XIA_ZHU = 6,
	DELAY_AFTER_ZHI_TOU = 7,
	DELAY_AFTER_BANKER_OP = 8,
	MING_LOU_MING_LV = 9,
	WAIT_USER_GIVE_UP = 10,
	HUAN_SAN_ZHANG = 11,
  }
  
  export const MahjongMap: Map<string, string> = new Map([
    ['0x01', '一万'], ['0x02', '二万'], ['0x03', '三万'], ['0x04', '四万'], ['0x05', '五万'],
    ['0x06', '六万'], ['0x07', '七万'], ['0x08', '八万'], ['0x09', '九万'],
    ['0x11', '一筒'], ['0x12', '二筒'], ['0x13', '三筒'], ['0x14', '四筒'], ['0x15', '五筒'],
    ['0x16', '六筒'], ['0x17', '七筒'], ['0x18', '八筒'], ['0x19', '九筒'],
    ['0x21', '一条'], ['0x22', '二条'], ['0x23', '三条'], ['0x24', '四条'], ['0x25', '五条'],
    ['0x26', '六条'], ['0x27', '七条'], ['0x28', '八条'], ['0x29', '九条'],
    ['0x31', '东风'], ['0x32', '南风'], ['0x33', '西风'], ['0x34', '北风'],
    ['0x41', '红中'], ['0x42', '发财'], ['0x43', '白板'],
    ['0x51', '春'], ['0x52', '夏'], ['0x53', '秋'], ['0x54', '冬'],
    ['0x55', '梅'], ['0x56', '兰'], ['0x57', '菊'], ['0x58', '竹']
]);
