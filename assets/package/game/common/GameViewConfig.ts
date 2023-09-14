/**
 * Name = GameViewConfig
 * URL = db://assets/package/game/GameViewConfig.ts
 * Time = Thu Aug 10 2023 19:25:41 GMT+0800 (中国标准时间)
 * Author = harvyson
 *
 */

import { Vec3 } from "cc";
import { Common } from "./idl/Common";

 
export namespace GameViewConfig {
	/** 牌墙状态 */
	export enum WallStatus {
		Top  = 1,           // 牌桌上
		Bottom = 2,         // 牌桌下
		Moving = 3,         // 上下移动中
	}

	/** 手牌状态 */
	export enum HandCardStatus {
		Idle  = 1,          // 手牌处于站立状态
		Sort = 2,           // 手牌处于排序动画中
		Show = 3,           // 手牌处于结算亮牌动画中
		Over = 4,           // 牌局结束，手牌处于亮牌状态，牌面向上
	}

    /** 色子状态 */
	export enum DiceStatus {
		Stop  = 1,          // 停止
		Move = 2,           // 移动
        Pause = 3,          // 暂停
	}

    /** 牌相关配置 */
    export const CardConfig =  {
        Width: 3.1,                     // 宽
        Height: 4.1,                    // 高
        Thickness: 2,                   // 牌厚度
        GroundToCard: 1.2,              // 牌到桌面的高度
        GroundToHandCard: 2.2,          // 手牌到桌面的高度

        ScaleWallCard: 1,               // 牌墙比例
        ScaleHandCard: 1.1,             // 手牌比例
        ScaleOutCard: 1.25,             // 出牌比例
        ScaleMeldCard: 1.1,             // 碰杠牌比例
        ScaleHuCard: 1.1,               // 胡牌比例
        
        SpaceOutCard: (3.1 * 1.25 * 0.01),     // 出牌间隙
        SpaceHuCard: (3.1 * 1.1 * 0.01),      // 胡牌间隙

        CenterToWallCard: 31.2,             // 牌墙与桌子中心的距离
        CenterToOutCard: 20,            // 出牌与桌子中心的距离
        CenterToHandCard: 40,           // 手牌与桌子中心的距离
        CenterToHuCard: 31.2,           // 胡牌与桌子中心的距离
        CenterToHuCardX: 27,            // 胡牌与桌子边缘的距离

        CenterToMeld: [45, 50, 45, 50], // 碰杠牌与桌子中心的距离：东南西北
        EdgeToMeld: [50, 26, 50, 34],   // 碰杠牌与桌子边缘的距离：东南西北
        SpaceMeldCard: (3.1 * 0.01),    // 出牌间隙
    }


    /** 碰杠牌相关配置 */
    export interface MeldSeatConfig {
        opCode: (number | null);
        opCard: (number | null);
        opCards: (number[] | null);
        buPos?: (Vec3 | null);
    }

    /** 重连配置 */
    export interface ReconnectConfig {
        bankSeatId?: (number | null); // 庄家座位id
        dices?: (number[] | null); // 色子
        remain?: (number | null); // 属于牌数
        gangCount?: (number | null); // 杠牌数
        playerList?: (Common.IPlayerInfo[] | null); // 玩家数据
        operationSeatId?: (number | null); // 当前操作玩家的座位id
        operationTimePass?: (number | null); // 当前操作计时
    }

    /** 游戏动画配置 */
    export interface AnimConfig {
        seatId: (number | null);
        aniType: (AnimType | null);
        pos?: (Vec3 | null);
    }

    /** 游戏动画类型 */
	export enum AnimType {
		GameStart,          // 游戏开始
        GameOver,           // 游戏结束
        Hu,                 // 胡牌动画1
        Hu2,                // 胡牌动画2
        Peng,               // 碰牌动画
	}
    
}

