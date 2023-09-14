/** Namespace Common. */
export namespace Common {

    /** Properties of a HuInfo. */
    export interface IHuInfo {

        /** HuInfo card */
        card?: (number | null);

        /** HuInfo huType */
        huType?: (number | null);

        /** HuInfo remain */
        remain?: (number | null);

        /** HuInfo totalFan */
        totalFan?: (number | null);

        /** HuInfo totalBei */
        totalBei?: (number | null);

        /** HuInfo fanInfo */
        fanInfo?: (Common.IFanInfo[] | null);
    }

    /** Properties of a TingInfo. */
    export interface ITingInfo {

        /** TingInfo card */
        card?: (number | null);

        /** TingInfo info */
        info?: (Common.IHuInfo[] | null);
    }


    /** Properties of a FanInfo. */
    export interface IFanInfo {

        /** FanInfo type */
        type?: (string | null);

        /** FanInfo fan */
        fan?: (number | null);

        /** FanInfo bei */
        bei?: (number | null);
    }


    /** Properties of a SettleInfo. */
    export interface ISettleInfo {

        /** SettleInfo fan */
        fan?: (number | null);

        /** SettleInfo bei */
        bei?: (number | null);

        /** SettleInfo bWin */
        bWin?: (number | null);

        /** SettleInfo fanInfo */
        fanInfo?: (Common.IFanInfo[] | null);

        /** SettleInfo turnExp */
        turnExp?: (number | null);

        /** SettleInfo winMoney */
        winMoney?: (number | null);

        /** SettleInfo turnMoney */
        turnMoney?: (number | null);

        /** SettleInfo moneyItemList */
        moneyItemList?: (Common.ISettleMoney[] | null);

        /** SettleInfo isBroked */
        isBroked?: (number | null);

        /** SettleInfo isLessWin */
        isLessWin?: (number | null);

        /** SettleInfo isTing */
        isTing?: (number | null);

        /** SettleInfo totalFan */
        totalFan?: (number | null);

        /** SettleInfo fengDingFan */
        fengDingFan?: (number | null);
    }


    /** Properties of a SettleMoney. */
    export interface ISettleMoney {

        /** SettleMoney name */
        name?: (string | null);

        /** SettleMoney totalMoney */
        totalMoney?: (number | null);

        /** SettleMoney p2pMoney */
        p2pMoney?: (number[] | null);

        /** SettleMoney isShow */
        isShow?: (number | null);
    }


    /** Properties of a Card. */
    export interface ICard {

        /** Card card */
        card?: (number | null);

        /** Card status */
        status?: (number | null);
    }


    /** Properties of a Cards. */
    export interface ICards {

        /** Cards cards */
        cards?: (number[] | null);
    }


    /** Properties of a HandOpGroup. */
    export interface IHandOpGroup {

        /** HandOpGroup opCode */
        opCode?: (number | null);

        /** HandOpGroup opCards */
        opCards?: (number[] | null);
    }


    /** Properties of an OpGroup. */
    export interface IOpGroup {

        /** OpGroup opCode */
        opCode?: (number | null);

        /** OpGroup cardsList */
        cardsList?: (Common.ICards[] | null);
    }

    export interface GameUserInfo {
        appid: number;
        avatar_b: string;
        avatar_m: string;
        avatar_s: string;
        cid: number;
        city: string;
        crystal: number;
        diamond: number;
        drawCount: number;
        exp: number;
        gold: number;
        headBox: string;
        ladderScore: number;
        level: string;
        loseCount: number;
        m_identity: number;
        money: number;
        nickName: string;
        sex: number;
        userId: number;
        winCount: number;
    }

    /** Properties of a PlayerInfo. */
    export interface IPlayerInfo {

        /** PlayerInfo seatId */
        seatId?: (number | null);

        /** PlayerInfo userId */
        userId?: (number | null);

        /** PlayerInfo isReady */
        isReady?: (number | null);

        /** PlayerInfo isAi */
        isAi?: (number | null);

        /** PlayerInfo strUserInfo */
        strUserInfo?: (string | null);

        /** PlayerInfo money */
        money?: (number | null);

        /** PlayerInfo tingOpcode */
        tingOpcode?: (number | null);

        /** PlayerInfo tryTingOpcode */
        tryTingOpcode?: (number | null);

        /** PlayerInfo cardCount */
        cardCount?: (number | null);

        /** PlayerInfo handCards */
        handCards?: (number[] | null);

        /** PlayerInfo opGroups */
        opGroups?: (Common.IHandOpGroup[] | null);

        /** PlayerInfo outCards */
        outCards?: (Common.ICard[] | null);

        /** PlayerInfo status */
        status?: (number | null);

        /** PlayerInfo huCard */
        huCard?: (number | null);

        /** PlayerInfo opExtend */
        opExtend?: (string | null);

        /** PlayerInfo huInfoList */
        huInfoList?: (string | null);

        /** PlayerInfo isHu */
        isHu?: (number | null);
        /** PlayerInfo tingCard */
        tingCard?: (number | null);
        /** isUnTing tingCard */
        isUnTing?: (number | null);
        /** HandCard customData */
        customData?: (string | null);
        /** Operation tingInfos */
        gameUserInfo?: (Common.GameUserInfo | null);
    }


    /** Properties of a TimerInfo. */
    export interface ITimerInfo {

        /** TimerInfo timerId */
        timerId?: (number | null);

        /** TimerInfo timeout */
        timeout?: (number | null);
    }


    /** Properties of a RoomCfg. */
    export interface IRoomCfg {

        /** RoomCfg baseChip */
        baseChip?: (number | null);

        /** RoomCfg level */
        level?: (number | null);

        /** RoomCfg fee */
        fee?: (number | null);

        /** RoomCfg baseChipDi */
        baseChipDi?: (number | null);
    }

    /** Properties of a GameInfo. */
    export interface IGameInfo {

        /** GameInfo bankSeatId */
        bankSeatId?: (number | null);

        /** GameInfo dices */
        dices?: (number[] | null);

        /** GameInfo remainCardCount */
        remainCardCount?: (number | null);

        /** GameInfo timerInfoList */
        timerInfoList?: (Common.ITimerInfo[] | null);

        /** GameInfo mySeatId */
        mySeatId?: (number | null);

        /** GameInfo totalCardCount */
        totalCardCount?: (number | null);

        /** GameInfo fanGangPai */
        fanGangPai?: (number[] | null);

        /** GameInfo extendInfo */
        extendInfo?: (string | null);
    }


    /** Properties of a RoomInfo. */
    export interface IRoomInfo {

        /** RoomInfo roomCfg */
        roomCfg?: (Common.IRoomCfg | null);

        /** RoomInfo gameInfo */
        gameInfo?: (Common.IGameInfo | null);
    }


    /** Properties of an OnceSettleMoney. */
    export interface IOnceSettleMoney {

        /** OnceSettleMoney seatId */
        seatId?: (number | null);

        /** OnceSettleMoney userId */
        userId?: (number | null);

        /** OnceSettleMoney money */
        money?: (number | null);

        /** OnceSettleMoney winMoney */
        winMoney?: (number | null);

        /** OnceSettleMoney p2pMoney */
        p2pMoney?: (number[] | null);

        /** OnceSettleMoney isBroked */
        isBroked?: (number | null);

        /** OnceSettleMoney isLessWin */
        isLessWin?: (number | null);

        /** OnceSettleMoney fan */
        fan?: (number | null);

        /** OnceSettleMoney bei */
        bei?: (number | null);

        /** OnceSettleMoney fanInfo */
        fanInfo?: (Common.IFanInfo[] | null);

        /** OnceSettleMoney name */
        name?: (string | null);

        /** OnceSettleMoney isTing */
        isTing?: (number | null);
    }


    /** Properties of a GameState. */
    export interface IGameState {

        /** GameState state */
        state?: (number | null);

        /** GameState yongPaiData */
        yongPaiData?: (number[] | null);
    }

    /** Properties of a HuSeatInfo. */
    export interface IHuSeatInfo {

        /** HuSeatInfo paoSeatId */
        paoSeatId?: (number | null);

        /** HuSeatInfo huSeatList */
        huSeatList?: (number[] | null);
    }

}
