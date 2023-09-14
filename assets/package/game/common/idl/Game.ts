import { Common } from "./Common";

/** Namespace Game. */
export namespace Game {

    /** Properties of a UserLoginRoom. */
    export interface IUserLoginRoom {

        /** UserLoginRoom roomInfo */
        roomInfo?: (Common.IRoomInfo | null);

        /** UserLoginRoom playerList */
        playerList?: (Common.IPlayerInfo[] | null);
    }


    /** Properties of a FixBanker. */
    export interface IFixBanker {

        /** FixBanker bankSeatId */
        bankSeatId?: (number | null);

        /** FixBanker remainCardNum */
        remainCardNum?: (number | null);

        /** FixBanker fengStatus */
        fengStatus?: (number | null);

        /** FixBanker sequenceBanker */
        sequenceBanker?: (number | null);
    }


    /** Properties of a QuanfengInfo. */
    export interface IQuanfengInfo {

        /** QuanfengInfo quan */
        quan?: (number | null);

        /** QuanfengInfo ju */
        ju?: (number | null);
    }


    /** Properties of a SubDiceInfo. */
    export interface ISubDiceInfo {

        /** SubDiceInfo seatId */
        seatId?: (number | null);

        /** SubDiceInfo dices */
        dices?: (number[] | null);

        /** SubDiceInfo totlePoint */
        totlePoint?: (number | null);
    }


    /** Properties of a RollDice. */
    export interface IRollDice {

        /** RollDice diceInfo */
        diceInfo?: (Game.ISubDiceInfo[] | null);
    }


    /** Properties of a DealCard. */
    export interface IDealCard {

        /** DealCard cards */
        cards?: (number[] | null);

        /** DealCard cardsCount */
        cardsCount?: (number[] | null);

        /** DealCard remainCardsCount */
        remainCardsCount?: (number | null);
    }


    /** Properties of a GrabCard. */
    export interface IGrabCard {

        /** GrabCard seatId */
        seatId?: (number | null);

        /** GrabCard userId */
        userId?: (number | null);

        /** GrabCard card */
        card?: (number | null);

        /** GrabCard extendInfo */
        extendInfo?: (string | null);

        /** GrabCard remainCardNum */
        remainCardNum?: (number | null);
    }


    /** Properties of a HandCard. */
    export interface IHandCard {

        /** HandCard handCards */
        handCards?: (number[] | null);

        /** HandCard opGroups */
        opGroups?: (Common.IHandOpGroup[] | null);

        /** HandCard huCard */
        huCard?: (number | null);

        /** HandCard tingCard */
        tingCard?: (number | null);

        /** HandCard isUnTing */
        isUnTing?: (number | null);

        /** HandCard customData */
        customData?: (string | null);
    }

    export interface ISendOperation {

        /** OperationResult seatId */
        seatId?: (number | null);

        /** OperationResult userId */
        userId?: (number | null);

        /** OperationResult opCode */
        opCode?: (number | null);

        /** OperationResult opCard */
        opCard?: (number | null);

        /** OperationResult opCards */
        opCards?: (number[] | null);
    }

    /** Properties of an OperationResult. */
    export interface IOperationResult {

        /** OperationResult seatId */
        seatId?: (number | null);

        /** OperationResult userId */
        userId?: (number | null);

        /** OperationResult opCode */
        opCode?: (number | null);

        /** OperationResult opCard */
        opCard?: (number | null);

        /** OperationResult opCards */
        opCards?: (number[] | null);

        /** OperationResult cardSeatId */
        cardSeatId?: (number | null);

        /** OperationResult cardUserId */
        cardUserId?: (number | null);

        /** OperationResult handCard */
        handCard?: (Game.IHandCard | null);

        /** OperationResult huNum */
        huNum?: (number | null);

        /** OperationResult huInfo */
        huInfo?: (Common.IHuSeatInfo | null);

        /** OperationResult tingInfos */
        tingInfos?: (Common.IHuInfo[] | null);

        /** OperationResult CustomData */
        CustomData?: (string | null);

        /** OperationResult extendInfo */
        extendInfo?: (string | null);
    }


    /** Properties of a gangOperationResult. */
    export interface IgangOperationResult {

        /** gangOperationResult seatId */
        seatId?: (number | null);

        /** gangOperationResult userId */
        userId?: (number | null);

        /** gangOperationResult gangNum */
        gangNum?: (number | null);

        /** gangOperationResult gangType */
        gangType?: (string | null);
    }


    /** Properties of an Operation. */
    export interface IOperation {

        /** Operation seatId */
        seatId?: (number | null);

        /** Operation userId */
        userId?: (number | null);

        /** Operation cardSeatId */
        cardSeatId?: (number | null);

        /** Operation cardUserId */
        cardUserId?: (number | null);
        
        /** Operation opGroups */
        opGroups?: (Common.IOpGroup[] | null);

        /** Operation tingInfos */
        tingInfos?: (Common.ITingInfo[] | null);

        /** Operation extendInfo */
        extendInfo?: (string | null);
    }


    /** Properties of a SettleRecordData. */
    export interface ISettleRecordData {

        /** SettleRecordData huType */
        huType?: (number | null);

        /** SettleRecordData huCard */
        huCard?: (number | null);

        /** SettleRecordData losers */
        losers?: (number[] | null);

        /** SettleRecordData paoSeatId */
        paoSeatId?: (number | null);

        /** SettleRecordData winners */
        winners?: (number[] | null);
    }


    /** Properties of a Settle. */
    export interface ISettle {

        /** Settle settleMoney */
        settleMoney?: (Common.IOnceSettleMoney[] | null);

        /** Settle opCode */
        opCode?: (number | null);
    }


    /** Properties of a UserCancel. */
    export interface IUserCancel {

        /** UserCancel code */
        code?: (number | null);
    }


    /** Properties of a PackageAck. */
    export interface IPackageAck {

        /** PackageAck cmd */
        cmd?: (number | null);

        /** PackageAck result */
        result?: (number | null);

        /** PackageAck msg */
        msg?: (string | null);
    }


    /** Properties of a UserWaitOperate. */
    export interface IUserWaitOperate {

        /** UserWaitOperate opCard */
        opCard?: (number | null);
    }


    /** Properties of a SelectGangCard. */
    export interface ISelectGangCard {

        /** SelectGangCard seatId */
        seatId?: (number | null);

        /** SelectGangCard userId */
        userId?: (number | null);

        /** SelectGangCard card */
        card?: (number | null);

        /** SelectGangCard cards */
        cards?: (number[] | null);
    }


    /** Properties of a GangCards. */
    export interface IGangCards {

        /** GangCards cards */
        cards?: (number[] | null);
    }


    /** Properties of a Gang. */
    export interface IGang {

        /** Gang seatId */
        seatId?: (number | null);

        /** Gang userId */
        userId?: (number | null);

        /** Gang opCode */
        opCode?: (number | null);

        /** Gang cardSeatId */
        cardSeatId?: (number | null);

        /** Gang cardUserId */
        cardUserId?: (number | null);

        /** Gang gangMoney */
        gangMoney?: (number[] | null);
    }


    /** Properties of a FenZhang. */
    export interface IFenZhang {

        /** FenZhang seatId */
        seatId?: (number | null);

        /** FenZhang userId */
        userId?: (number | null);

        /** FenZhang cards */
        cards?: (number[] | null);

        /** FenZhang opGroups */
        opGroups?: (Common.IOpGroup[] | null);
    }


    /** Properties of a UserPaoQian. */
    export interface IUserPaoQian {

        /** UserPaoQian seatId */
        seatId?: (number | null);

        /** UserPaoQian userId */
        userId?: (number | null);

        /** UserPaoQian option */
        option?: (number | null);
    }


    /** Properties of a PaoQianOption. */
    export interface IPaoQianOption {

        /** PaoQianOption options */
        options?: (number[] | null);

        /** PaoQianOption limit */
        limit?: (number[] | null);
    }


    /** Properties of a UserDingQue. */
    export interface IUserDingQue {

        /** UserDingQue seatId */
        seatId?: (number | null);

        /** UserDingQue userId */
        userId?: (number | null);

        /** UserDingQue option */
        option?: (number | null);

        /** UserDingQue selectFeiQue */
        selectFeiQue?: (number | null);
    }


    /** Properties of a DingQueResult. */
    export interface IDingQueResult {

        /** DingQueResult queData */
        queData?: (Game.IUserDingQue[] | null);
    }


    /** Properties of a DingQueOption. */
    export interface IDingQueOption {

        /** DingQueOption options */
        options?: (number[] | null);

        /** DingQueOption suggestion */
        suggestion?: (number[] | null);
    }


    /** Properties of a FanPiGuOption. */
    export interface IFanPiGuOption {

        /** FanPiGuOption cards */
        cards?: (number[] | null);
    }


    /** Properties of a FixLaizi. */
    export interface IFixLaizi {

        /** FixLaizi bankSeatId */
        bankSeatId?: (number | null);

        /** FixLaizi dices */
        dices?: (number[] | null);

        /** FixLaizi fanCard */
        fanCard?: (number[] | null);

        /** FixLaizi laizi */
        laizi?: (number[] | null);

        /** FixLaizi laiziA */
        laiziA?: (number[] | null);

        /** FixLaizi laiziB */
        laiziB?: (number[] | null);
    }


    /** Properties of a CouZhuang. */
    export interface ICouZhuang {

        /** CouZhuang card */
        card?: (number | null);
    }


    /** Properties of a FoldCard. */
    export interface IFoldCard {

        /** FoldCard cards */
        cards?: (number[] | null);

        /** FoldCard seatId */
        seatId?: (number | null);
    }


    /** Properties of a ChouJiangCards. */
    export interface IChouJiangCards {

        /** ChouJiangCards cards */
        cards?: (number[] | null);
    }


    /** Properties of a BuHua. */
    export interface IBuHua {

        /** BuHua seatId */
        seatId?: (number | null);

        /** BuHua huaCards */
        huaCards?: (number[] | null);

        /** BuHua newCards */
        newCards?: (number[] | null);

        /** BuHua newHuaCards */
        newHuaCards?: (number[] | null);

        /** BuHua isHuang */
        isHuang?: (number | null);
    }


    /** Properties of an ExChangeCardOption. */
    export interface IExChangeCardOption {

        /** ExChangeCardOption cardList */
        cardList?: (number[] | null);
    }

    /** Properties of a UserExChangeCard. */
    export interface IUserExChangeCard {

        /** UserExChangeCard seatId */
        seatId?: (number | null);

        /** UserExChangeCard userId */
        userId?: (number | null);

        /** UserExChangeCard cardList */
        cardList?: (number[] | null);
    }


    /** Properties of a ShuaiQiang. */
    export interface IShuaiQiang {

        /** ShuaiQiang seatId */
        seatId?: (number | null);

        /** ShuaiQiang userId */
        userId?: (number | null);

        /** ShuaiQiang card */
        card?: (number | null);

        /** ShuaiQiang cardList */
        cardList?: (number[] | null);

        /** ShuaiQiang huang */
        huang?: (number | null);
    }


    /** Properties of a DiTing. */
    export interface IDiTing {

        /** DiTing seatId */
        seatId?: (number | null);

        /** DiTing userId */
        userId?: (number | null);

        /** DiTing timePass */
        timePass?: (number | null);

        /** DiTing opGroups */
        opGroups?: (Common.IOpGroup[] | null);
    }

    /** Properties of a WaitSomeTime. */
    export interface IWaitSomeTime {

        /** WaitSomeTime seatId */
        seatId?: (number | null);

        /** WaitSomeTime userId */
        userId?: (number | null);

        /** WaitSomeTime timePass */
        timePass?: (number | null);
    }


    /** Properties of a MaiDuanMenUser. */
    export interface IMaiDuanMenUser {

        /** MaiDuanMenUser seatId */
        seatId?: (number | null);

        /** MaiDuanMenUser dices */
        dices?: (number[] | null);
    }


    /** Properties of a MaiDuanMenResult. */
    export interface IMaiDuanMenResult {

        /** MaiDuanMenResult seatId */
        seatId?: (number | null);

        /** MaiDuanMenResult option */
        option?: (number | null);
    }


    /** Properties of a XiaZhuOption. */
    export interface IXiaZhuOption {

        /** XiaZhuOption type */
        type?: (number | null);

        /** XiaZhuOption options */
        options?: (number[] | null);

        /** XiaZhuOption limit */
        limit?: (number[] | null);

        /** XiaZhuOption limitType */
        limitType?: (number | null);
    }


    /** Properties of a UserXiaZhu. */
    export interface IUserXiaZhu {

        /** UserXiaZhu seatId */
        seatId?: (number | null);

        /** UserXiaZhu option */
        option?: (number | null);

        /** UserXiaZhu theSeatId */
        theSeatId?: (number | null);

        /** UserXiaZhu type */
        type?: (number | null);
    }


    /** Properties of a PlayingJiType. */
    export interface IPlayingJiType {

        /** PlayingJiType type */
        type?: (number | null);

        /** PlayingJiType cardSeatId */
        cardSeatId?: (number | null);

        /** PlayingJiType doSeatId */
        doSeatId?: (number | null);

        /** PlayingJiType card */
        card?: (number | null);

        /** PlayingJiType jiType */
        jiType?: (number | null);
    }


    /** Properties of a UserChaQue. */
    export interface IUserChaQue {

        /** UserChaQue options */
        options?: (Game.IQueOption[] | null);
    }


    /** Properties of a QueOption. */
    export interface IQueOption {

        /** QueOption isQue */
        isQue?: (number | null);

        /** QueOption seatId */
        seatId?: (number | null);
    }


    /** Properties of a fanCardData. */
    export interface IfanCardData {

        /** fanCardData card */
        card?: (number | null);

        /** fanCardData shangCard */
        shangCard?: (number | null);

        /** fanCardData xiaCard */
        xiaCard?: (number | null);

        /** fanCardData jiTypeName */
        jiTypeName?: (string | null);
    }


    /** Properties of a jiCardData. */
    export interface IjiCardData {

        /** jiCardData cards */
        cards?: (number[] | null);

        /** jiCardData settleType */
        settleType?: (string | null);
    }


    /** Properties of a ZhuoJi. */
    export interface IZhuoJi {

        /** ZhuoJi fanCardData */
        fanCardData?: (Game.IfanCardData | null);

        /** ZhuoJi jiCardData */
        jiCardData?: (Game.IjiCardData[] | null);
    }


    /** Properties of a LuaError. */
    export interface ILuaError {

        /** LuaError errCode */
        errCode?: (number | null);

        /** LuaError msg */
        msg?: (string | null);
    }


    /** Properties of a Test. */
    export interface ITest {

        /** Test cmd */
        cmd?: (number | null);
    }


    /** Properties of a FanInfo. */
    export interface IFanInfo {

        /** FanInfo type */
        type?: (number | null);

        /** FanInfo fan */
        fan?: (string | null);

        /** FanInfo fanName */
        fanName?: (string | null);

        /** FanInfo paixingId */
        paixingId?: (string | null);

        /** FanInfo isBigAnim */
        isBigAnim?: (number | null);

        /** FanInfo isTitle */
        isTitle?: (number | null);

        /** FanInfo time */
        time?: (number | null);
    }


    /** Properties of a StampInfo. */
    export interface IStampInfo {

        /** StampInfo stampName */
        stampName?: (string | null);

        /** StampInfo isStamp */
        isStamp?: (boolean | null);
    }


    /** Properties of a TotalInfo. */
    export interface ITotalInfo {

        /** TotalInfo turnExp */
        turnExp?: (number | null);

        /** TotalInfo winMoney */
        winMoney?: (number | null);

        /** TotalInfo turnMoney */
        turnMoney?: (number | null);

        /** TotalInfo isBroked */
        isBroked?: (number | null);

        /** TotalInfo isLessWin */
        isLessWin?: (number | null);

        /** TotalInfo nMoney */
        nMoney?: (number | null);

        /** TotalInfo strUserInfo */
        strUserInfo?: (string | null);

        /** TotalInfo totalFan */
        totalFan?: (number | null);

        /** TotalInfo totalBei */
        totalBei?: (number | null);

        /** TotalInfo bWin */
        bWin?: (number | null);

        /** TotalInfo userId */
        userId?: (number | null);
        /** TotalInfo seatId */
        seatId?: (number | null);
        /** TotalInfo stampInfo */
        stampInfo?: (Game.IStampInfo[] | null);

        /** TotalInfo totalFanStr */
        totalFanStr?: (string | null);

        /** TotalInfo isYouJiao */
        isYouJiao?: (number | null);
    }


    /** Properties of a SettleFanExtendInfo. */
    export interface ISettleFanExtendInfo {

        /** SettleFanExtendInfo fanInfo */
        fanInfo?: (Game.IFanInfo[] | null);

        /** SettleFanExtendInfo totalFan */
        totalFan?: (number | null);

        /** SettleFanExtendInfo fengDingFan */
        fengDingFan?: (number | null);

        /** SettleFanExtendInfo totalFanStr */
        totalFanStr?: (string | null);

        /** FanInfo localStr */
        seatStr?: (string | null);
    }

    /** Properties of a SettleMoneyItem. */
    export interface ISettleMoneyItem {

        /** SettleMoneyItem name */
        name?: (string | null);

        /** SettleMoneyItem p2pMoney */
        p2pMoney?: (number[] | null);

        /** SettleMoneyItem fanExtendInfo */
        fanExtendInfo?: (Game.ISettleFanExtendInfo[] | null);

        /** SettleMoneyItem winSeatId */
        winSeatId?: (number | null);

        /** SettleMoneyItem paoSeatId */
        paoSeatId?: (number | null);

        /** SettleMoneyItem opcode */
        opcode?: (number | null);

        /** SettleMoneyItem extendInfo */
        extendInfo?: (string | null);
    }


    /** Properties of a SettleModel. */
    export interface ISettleModel {

        /** SettleModel moneyItemList */
        moneyItemList?: (Game.ISettleMoneyItem[] | null);

        /** SettleModel totalInfo */
        totalInfo?: (Game.ITotalInfo[] | null);
    }

    /** Properties of a SettleItem. */
    export interface ISettleItem {

        /** SettleItem settleType */
        settleType?: (string | null);

        /** SettleItem settleModel */
        settleModel?: (Game.ISettleModel | null);

        /** SettleItem isShowGameOver */
        isShowGameOver?: (number | null);

        /** SettleItem isBaoSanJia */
        isBaoSanJia?: (boolean | null);

        /** SettleItem jiesuanCustomData */
        jiesuanCustomData?: (string | null);
    }


    /** Properties of a HandCards. */
    export interface IHandCards {

        /** HandCards handCards */
        handCards?: (Game.IHandCard[] | null);

        /** HandCards huInfo */
        huInfo?: (Common.IHuSeatInfo[] | null);
    }

    /** Properties of a ZhongJiangInfo. */
    export interface IZhongJiangInfo {

        /** ZhongJiangInfo cardList */
        cardList?: (number[] | null);

        /** ZhongJiangInfo seatId */
        seatId?: (number | null);

        /** ZhongJiangInfo jiangValue */
        jiangValue?: (number | null);
    }


    /** Properties of a ChouJiang. */
    export interface IChouJiang {

        /** ChouJiang tableCards */
        tableCards?: (number[] | null);

        /** ChouJiang doubleCards */
        doubleCards?: (number[] | null);

        /** ChouJiang jiangValue */
        jiangValue?: (number | null);

        /** ChouJiang jiangInfo */
        jiangInfo?: (Game.IZhongJiangInfo[] | null);
    }


    /** Properties of a UserReconnect. */
    export interface IUserReconnect {

        /** UserReconnect roomInfo */
        roomInfo?: (Common.IRoomInfo | null);

        /** UserReconnect players */
        players?: (Common.IPlayerInfo[] | null);

        /** UserReconnect settleItems */
        settleItems?: (Game.ISettleItem[] | null);

        /** UserReconnect customJson */
        customJson?: (string | null);

        /** UserReconnect operation */
        operation?: (Game.IOperation | null);

        /** UserReconnect timePass */
        timePass?: (number | null);
    }


    /** Properties of an UpdatePlayerMoney. */
    export interface IUpdatePlayerMoney {

        /** UpdatePlayerMoney moneys */
        moneys?: (number[] | null);
    }


    /** Properties of an UpdateFanGangPai. */
    export interface IUpdateFanGangPai {

        /** UpdateFanGangPai cards */
        cards?: (number[] | null);

        /** UpdateFanGangPai remainCardCount */
        remainCardCount?: (number | null);

        /** UpdateFanGangPai gangCount */
        gangCount?: (number | null);
    }


    /** Properties of a SelectFanGangPai. */
    export interface ISelectFanGangPai {

        /** SelectFanGangPai card */
        card?: (number | null);
    }

    /** Properties of a PaiXingTestRequest. */
    export interface IPaiXingTestRequest {

        /** PaiXingTestRequest indexs */
        indexs?: (number[] | null);

        /** PaiXingTestRequest request */
        request?: (number | null);
    }


    /** Properties of a PaiXingInfo. */
    export interface IPaiXingInfo {

        /** PaiXingInfo id */
        id?: (number | null);

        /** PaiXingInfo displayName */
        displayName?: (string | null);
    }

    /** Properties of a PaiXingTestResult. */
    export interface IPaiXingTestResult {

        /** PaiXingTestResult paiXing */
        paiXing?: (Game.IPaiXingInfo[] | null);

        /** PaiXingTestResult result */
        result?: (number | null);

        /** PaiXingTestResult paiXingIndex */
        paiXingIndex?: (number | null);
    }


    /** Properties of a LastTimeHuangZhuang. */
    export interface ILastTimeHuangZhuang {

        /** LastTimeHuangZhuang isHuang */
        isHuang?: (number | null);

        /** LastTimeHuangZhuang huangNum */
        huangNum?: (number | null);
    }

    /** Properties of an UpdateLeftCards. */
    export interface IUpdateLeftCards {

        /** UpdateLeftCards leftCards */
        leftCards?: (number | null);
    }


    /** Properties of a FanGangPai. */
    export interface IFanGangPai {

        /** FanGangPai cards */
        cards?: (number[] | null);
    }

    /** Properties of a XiaZhuResults. */
    export interface IXiaZhuResults {

        /** XiaZhuResults options */
        options?: (number[] | null);
    }


    /** Properties of a ChiSanKouResult. */
    export interface IChiSanKouResult {

        /** ChiSanKouResult isChiSanKou */
        isChiSanKou?: (boolean | null);

        /** ChiSanKouResult seat */
        seat?: (number | null);
    }


    /** Properties of a ToWaitGiveup. */
    export interface IToWaitGiveup {

        /** ToWaitGiveup seatIdList */
        seatIdList?: (number[] | null);
    }


    /** Properties of a UserGiveUpOption. */
    export interface IUserGiveUpOption {

        /** UserGiveUpOption seatId */
        seatId?: (number | null);

        /** UserGiveUpOption userId */
        userId?: (number | null);

        /** UserGiveUpOption isGiveUp */
        isGiveUp?: (number | null);
    }


    /** Properties of a MaiMaResult. */
    export interface IMaiMaResult {

        /** MaiMaResult zhuangSeatId */
        zhuangSeatId?: (number | null);

        /** MaiMaResult options */
        options?: (Game.IHorseInfo[] | null);
    }


    /** Properties of a HorseInfo. */
    export interface IHorseInfo {

        /** HorseInfo horseSeatId */
        horseSeatId?: (number | null);

        /** HorseInfo horseCard */
        horseCard?: (number | null);
    }


    /** Properties of a MaiMaSettle. */
    export interface IMaiMaSettle {

        /** MaiMaSettle options */
        options?: (number[] | null);

        /** MaiMaSettle monenys */
        monenys?: (number[] | null);
    }


    /** Properties of a DiTingStatus. */
    export interface IDiTingStatus {

        /** DiTingStatus status */
        status?: (number | null);
    }


    /** Properties of an UpdatePaoCard. */
    export interface IUpdatePaoCard {

        /** UpdatePaoCard langQiSeatId */
        langQiSeatId?: (number | null);

        /** UpdatePaoCard paoCardTBytes */
        paoCardTBytes?: (number[] | null);

        /** UpdatePaoCard newPaoCardTBytes */
        newPaoCardTBytes?: (number[] | null);
    }


    /** Properties of a GuanSi. */
    export interface IGuanSi {

        /** GuanSi seatId */
        seatId?: (number | null);
    }


    /** Properties of a JiQiangResult. */
    export interface IJiQiangResult {

        /** JiQiangResult cardList */
        cardList?: (number[] | null);
    }


    /** Properties of a DouDiZhu. */
    export interface IDouDiZhu {

        /** DouDiZhu seatId */
        seatId?: (number | null);
    }


    /** Properties of a HuanSanZhang. */
    export interface IHuanSanZhang {

        /** HuanSanZhang seatId */
        seatId?: (number | null);

        /** HuanSanZhang cards */
        cards?: (number[] | null);
    }


    /** Properties of a BaoHuInfo. */
    export interface IBaoHuInfo {

        /** BaoHuInfo baoHuInfo */
        baoHuInfo?: (number[] | null);
    }

    /** Properties of a BuHuaZhaPai. */
    export interface IBuHuaZhaPai {

        /** BuHuaZhaPai seatId */
        seatId?: (number | null);

        /** BuHuaZhaPai cards */
        cards?: (number[] | null);

        /** BuHuaZhaPai isBanker */
        isBanker?: (boolean | null);

        /** BuHuaZhaPai remainCardNum */
        remainCardNum?: (number | null);
    }


    /** Properties of a BaoPai. */
    export interface IBaoPai {

        /** BaoPai seatId */
        seatId?: (number | null);

        /** BaoPai tingSeatId */
        tingSeatId?: (number[] | null);

        /** BaoPai cards */
        cards?: (number[] | null);

        /** BaoPai status */
        status?: (number | null);

        /** BaoPai showType */
        showType?: (number | null);

        /** BaoPai curSeat */
        curSeat?: (number | null);
    }

    /** Properties of a HuanBao. */
    export interface IHuanBao {

        /** HuanBao seatId */
        seatId?: (number | null);

        /** HuanBao curSeat */
        curSeat?: (number | null);

        /** HuanBao newCards */
        newCards?: (number | null);

        /** HuanBao oldCards */
        oldCards?: (number[] | null);

        /** HuanBao status */
        status?: (number | null);

        /** HuanBao showType */
        showType?: (number | null);

        /** HuanBao remainCardCount */
        remainCardCount?: (number | null);
    }


    /** Properties of a KeGroupInfo. */
    export interface IKeGroupInfo {

        /** KeGroupInfo groupList */
        groupList?: (Common.ICards[] | null);
    }

    /** Properties of a UserChoseGroups. */
    export interface IUserChoseGroups {

        /** UserChoseGroups chosenGroups */
        chosenGroups?: (Game.IKeGroupInfo | null);

        /** UserChoseGroups seatId */
        seatId?: (number | null);
    }


    /** Properties of a UserDuResult. */
    export interface IUserDuResult {

        /** UserDuResult isDu */
        isDu?: (number | null);

        /** UserDuResult seatId */
        seatId?: (number | null);
    }

    /** Properties of a RestoreDiao. */
    export interface IRestoreDiao {

        /** RestoreDiao seatId */
        seatId?: (number | null);

        /** RestoreDiao laiZiCard */
        laiZiCard?: (number | null);

        /** RestoreDiao nativeCard */
        nativeCard?: (number | null);

        /** RestoreDiao handCard */
        handCard?: (Game.IHandCard | null);
    }


    /** Properties of a NextOperationUser. */
    export interface INextOperationUser {

        /** NextOperationUser seatId */
        seatId?: (number | null);

        /** NextOperationUser customStr */
        customStr?: (string | null);
    }


    /** Properties of a CheckVersionResult. */
    export interface ICheckVersionResult {

        /** CheckVersionResult result */
        result?: (string | null);

        /** CheckVersionResult msg */
        msg?: (string | null);

        /** CheckVersionResult customStr */
        customStr?: (string | null);
    }


    /** Properties of a CheckVersion. */
    export interface ICheckVersion {

        /** CheckVersion version */
        version?: (string | null);

        /** CheckVersion customStr */
        customStr?: (string | null);
    }


    /** Properties of a DingLiPai. */
    export interface IDingLiPai {

        /** DingLiPai liPaiCards */
        liPaiCards?: (string | null);
    }


    /** Properties of a YouJinStatus. */
    export interface IYouJinStatus {

        /** YouJinStatus seatId */
        seatId?: (number | null);

        /** YouJinStatus youJinStatus */
        youJinStatus?: (number | null);
    }

}

