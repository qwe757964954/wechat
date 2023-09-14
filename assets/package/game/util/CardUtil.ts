/*
麻将编码如下
=============================================
0x01 0x02 0x03 0x04 0x05 0x06 0x07 0x08 0x09
一万 二万 三万 四万 五万 六万 七万 八万 九万
=============================================
0x11 0x12 0x13 0x14 0x15 0x16 0x17 0x18 0x19
一筒 二筒 三筒 四筒 五筒 六筒 七筒 八筒 九筒
=============================================
0x21 0x22 0x23 0x24 0x25 0x26 0x27 0x28 0x29
一条 二条 三条 四条 五条 六条 七条 八条 九条
=============================================
0x31 0x32 0x33 0x34
东风 南风 西风 北风
=============================================
0x41 0x42 0x43
红中 发财 白板
=============================================
0x51 0x52 0x53 0x54 0x55 0x56 0x57 0x58
春   夏   秋   冬   梅   兰   菊   竹
*/

import { MahjongMap } from "../common/FXJConfig";

export class CardUtil {
  


    public static sortFeiXiaoJiCards(array: number[]): number[] {
        const result = [...array].sort((a, b) => a - b); // 创建数组副本
        for (let i = 0; i < result.length; i++) {
          if (CardUtil.getCardValue(result[i]) === "0x21") {
            const element = result.splice(i, 1)[0];
            result.unshift(element);
          }
        }
        return result;
    }

    public static addLeadingZero(num: number): string {
        if (num < 10) {
          return "0" + num;
        }
        return num.toString();
    }
    public static toHex(num: number): string {
        const hex = num.toString(16);
        return hex.length === 1 ? "0" + hex : hex;
    }
    /**
     * 获取牌的value
     * @param key 键
     */
    public static getCardValue(value: number): string {
        let mahjongValue = value >> 8;
        let ret: string | null = null;
        ret = `0x${CardUtil.toHex(mahjongValue)}`;
        return ret
    }

    public static getMajiangValue(value: number): string {
        let cardStr = CardUtil.getCardValue(value);
        return MahjongMap.get(cardStr);
    }

    public static getMajiangValues(values: number[]): string[] {
      let strArr:string[] = []
      values.forEach(value => {
          let cardStr = CardUtil.getCardValue(value);
          strArr.push(MahjongMap.get(cardStr));
      });
      
      return strArr;
  }

    //计算麻将玩家位置
    public static calculatePlayerPosition(mySeatId: number, playerSeatId: number): string {
        const seatDifference = (playerSeatId - mySeatId + 4) % 4;
        switch (seatDifference) {
          case 1:
            return "下家";
          case 2:
            return "对家";
          case 3:
            return "上家";
          default:
            return "本家";
        }
    }
    
     //计算麻将玩家位置
    public static calculatePlayerSeat(mySeatId: number, playerSeatId: number): number {
        const seatDifference = (playerSeatId - mySeatId + 4) % 4;
        return seatDifference;
    }

    public static sortPlayersBySeatId(playerList: any[], mySeatId: number): any[] {
        const sortedPlayers: any[] = [];
        const myPlayer = playerList.find((player) => player.seatId === mySeatId);
      
        if (myPlayer) {
          sortedPlayers.push(myPlayer);
      
          for (let i = 1; i <= 3; i++) {
              const player = playerList.find((p) => (p.seatId - mySeatId + 4) % 4 === i);
              if (player) {
                sortedPlayers.push(player);
              }
          }
        }
        return sortedPlayers;
    } 
}


