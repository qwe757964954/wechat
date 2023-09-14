/**
 * Name = FXJEvent
 * URL = db://assets/package/game/common/FXJEvent.ts
 * Time = Mon Jul 24 2023 19:37:07 GMT+0800 (中国标准时间)
 * Author = xueya
 * 游戏事件定义
 */

import { GetAppEventID } from "../../../config/AppEvent";



export class GameEvent {
    /** 广播玩家进入房间 */
    static VIEW_BROADCAST_PLAYER_ENTER = GetAppEventID();
    /** 进入房间更新玩家 */
    static ENTER_ROOM_UPDATE_PLAYER = GetAppEventID();
    /** 广播玩家退出房间 */
    static VIEW_BROADCAST_PLAYER_EXIT = GetAppEventID();
    /** 广播玩家托管 */
    static VIEW_BROADCAST_PLAYER_AI_SHOW = GetAppEventID();
    /** 广播玩家取消托管 */
    static VIEW_BROADCAST_PLAYER_AI_HIDE = GetAppEventID();
    /** 广播玩家准备 */
    static VIEW_BROADCAST_PLAYER_READY = GetAppEventID();
    /** 广播游戏开始 */
    static VIEW_BROADCAST_GAME_START = GetAppEventID();
    /** 广播游戏结束 */
    static VIEW_BROADCAST_GAME_OVER = GetAppEventID();
    /** 广播定庄 */
    static VIEW_BROADCAST_DING_ZHUANG = GetAppEventID();
    /** 广播掷投 */
    static VIEW_BROADCAST_ZHI_TOU = GetAppEventID();
    /** 广播发牌 */
    static VIEW_BROADCAST_DEAL_CARD = GetAppEventID();
    /** 广播开始操作 */
    static VIEW_BROADCAST_OPERATION_START = GetAppEventID();

    /** 出牌 */
    static VIEW_BROADCAST_GRAB_CARD = GetAppEventID();
    /** 更新剩余牌 */
    static UPDATE_REMAIN_CARDS_COUNT = GetAppEventID();
    /** 广播更新翻杠牌 */
    static VIEW_UPDATE_FAN_GANG_PAI = GetAppEventID();
    /** 广播更新补杠牌 */
    static VIEW_UPDATE_BU_GANG_PAI = GetAppEventID();
    /** 广播用法操作 */
    static VIEW_USER_OPERATION = GetAppEventID();
    /** 发送玩家操作 */
    static SEND_PLAYER_OPERATION = GetAppEventID();
    /** 更新用户操作 */
    static UPDATE_USER_OPERATION_RESULT = GetAppEventID();

    /** 再来一局操作 */
    static NEXT_GAME_OPERATION = GetAppEventID();

    /** 玩家自己抓拍 */
    static DRAW_MY_CARD = GetAppEventID();
    /** 更新操作 */
    static UPDATE_OPERATION_RESULT = GetAppEventID();
    /** 重连分牌 */
    static RECEIVE_DEAL_CARD = GetAppEventID();
    /** 显示ai */
    static VIEW_PLAYER_AI_SHOW = GetAppEventID();
    /** 玩家表情 */
    static VIEW_PLAYER_EMOJ_SHOW = GetAppEventID();
    /** 清理手牌 */
    static CLEAN_HAND_CARD = GetAppEventID();
    /** 关闭 */
    static CLOSE_OPRATION_INFO = GetAppEventID();
    /** 显示隐藏匹配 */
    static SHOW_HIDEN_MATCH_VIEW = GetAppEventID();
    /** 清理ai */
    static CLEAN_AI_SHOWING = GetAppEventID();
    /** 退出结算 */
    static EXITS_SETTLE_VIEW = GetAppEventID();
    /** 玩家手动退出游戏 */
    static EXITS_GAME_ROOM_VIEW = GetAppEventID();
    // /**------------Socket---------- */
    // /** 请求:文字聊天 */
    // static GAME_REQ_PLAYER_CHAET_MSG = GetAppEventID();
    // /** 请求:表情聊天 */
    // static GAME_REQ_PLAYER_CHAET_EMOJI = GetAppEventID();

    // /**------------View---------- */
    // /** 打开二级弹窗 */
    // static GAME_OPEN_POPUP = GetAppEventID();
    // /** 关闭二级弹窗 */
    // static GAME_CLOSE_POPUP = GetAppEventID();

    // /** 游戏菜单更新 */
    // static VIEW_DESK_BTN_MENU_UPDATE = GetAppEventID();

    // /* 玩家进入房间 */
    // static VIEW_PLAYER_INTO = GetAppEventID();

    // /** 显示玩家聊天气泡 */
    // static VIEW_PLAYER_CHAT_SHOW = GetAppEventID();	

    // /** 广播定庄 */
    // static BROADCAST_DING_ZHUANG = GetAppEventID();	
    // /** 抓牌 */
    // static BROADCAST_GRAB_CARD = GetAppEventID();
    // /** 抓牌 */
    // static BROADCAST_USER_OPERATION_RESULT = GetAppEventID();

    // /** 发牌 */
    // static BROADCAST_DEAL_CARD = GetAppEventID();

    // /** 广播定缺选项 */
    // static BROADCAST_DINGQUE_OPTIONS = GetAppEventID();
    // /** 广播定缺选项 */
    // static BROADCAST_USER_PIAO_GANG = GetAppEventID();
    // /** 广播定缺选项 */
    // static BROADCAST_PAOQIAN_OPTIONS = GetAppEventID();
    // /** 广播定缺选项 */
    // static BROADCAST_ONE_DINGQUE_RESULT = GetAppEventID();
    // /** 定缺结果 */
    // static BROADCAST_ALL_DINGQUE_RESULT = GetAppEventID();
    // /** 广播玩家摔枪结果 */
    // static BROADCAST_SHUAIQIANG_RESULT = GetAppEventID();
    // /** 广播查缺结果 */
    // static BROADCAST_CHAQUE_RESULT = GetAppEventID();
    // /** 广播买断门的玩家信息 */
    // static BROADCAST_MAIDUANMEN_USER = GetAppEventID();
    // /** 广播买断门的结果 */
    // static BROADCAST_MAIDUANMEN_RESULT = GetAppEventID();
    // /** 广播分张 */
    // static BROADCAST_FEN_ZHANG = GetAppEventID();
    // /** 广播更新翻杠牌 */
    // static BROADCAST_UPDATE_FAN_GANG_PAI = GetAppEventID();
    // /** 广播选择翻杠牌 */
    // static BROADCAST_SELECT_FAN_GANG_PAI = GetAppEventID();
    // /** 广播选择翻杠牌 */
    // static BROADCAST_USER_OPERATION = GetAppEventID();
    // /** 广播选择翻杠牌 */
    // static BROADCAST_DING_FENG = GetAppEventID();
    // /** 广播掷骰 */
    // static BROADCAST_ZHI_TOU = GetAppEventID();
    // /** 广播游戏结束 */
    // static BROADCAST_GAME_OVER = GetAppEventID();
    // /** 广播抽奖信息 */
    // static BROADCAST_DOUBLE_CARDS = GetAppEventID();
    // /** 广播抽奖牌信息 */
    // static BROADCAST_REWARD_CARDS = GetAppEventID();
    // /** 广播玩家冲锋or责任信息 */
    // static BROADCAST_PLAYING_JI_TYPE = GetAppEventID();
    // /** 广播翻牌后捉鸡动画信息 */
    // static BROADCAST_ZHUO_JI = GetAppEventID();
    // /** 结算 */
    // static BROADCAST_SETTLE = GetAppEventID();
    // /** 广播摊开手牌的信息 */
    // static BROADCAST_HANDCARDS = GetAppEventID();
    // /** 广播庄家首次操作 */
    // static BROADCAST_BANKER_FIRST_OPERATION = GetAppEventID();
    // /** 广播玩家金币 */
    // static BROADCAST_UPDATE_PLAYER_MONEY = GetAppEventID();
    // /** 广播玩家特殊杠操作产生的信息 */
    // static BROADCAST_GANG_OPERATION_RESULT = GetAppEventID();
    // /** 广播定癞子 */
    // static BROADCAST_DING_LAIZI = GetAppEventID();
    // /** 地听 */
    // static BROADCAST_DI_TING = GetAppEventID();
    // /** 广播等待玩家认输 */
    // static BROADCAST_TO_WAIT_USER_GIVE_UP = GetAppEventID();
    // /** 下注，买点，跑钱，加刚，飘 */
    // static BROADCAST_XIAZHU_OPTIONS = GetAppEventID();
    // /** 下注，买点，跑钱，加刚，飘 */
    // static BROADCAST_XIAZHU_RESULT = GetAppEventID();
    // /** 广播跟庄成功 */
    // static BROADCAST_GEN_ZHUANG_SUCC = GetAppEventID();
}

