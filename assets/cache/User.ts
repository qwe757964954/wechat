/**
 * Name = User
 * URL = db://assets/cache/User.ts
 * Time = Mon May 09 2022 14:43:04 GMT+0800 (中国标准时间)
 * Author = xueya
 * 用户数据缓存
 */

import { AppEvent } from "../config/AppEvent";
import { ClientInfo } from "../config/GameConfig";
import { CloundKey, GConstants, StoreKey } from "../config/GameConstant";
import { GameRes } from "../config/GameRes";
import { GameTxt } from "../config/GameTxt";
import { Encrypt } from "../framework/crypto/Encrypto";
import { LocalStorage } from "../framework/LocalStorage";
import { EventManager } from "../framework/manager/EventManager";
import { Utils } from "../framework/Utils";
import { BaseCache } from "../framework/vc/BaseCache";
import { Platform } from "../platform/Platform";
import { Activity } from "./Activity";
import { BackPack } from "./BackPack";
import { BankrupData } from "./BankrupData";
import { GoodsData } from "./GoodsData";
import { MailInfo } from "./MailInfo";
import { MenuInfo } from "./MenuInfo";
import { PropsConf } from "./PropsConf";
import { RecommendPop } from "./RecommendPop";
import { RedDot } from "./RedDot";
import { SelectGame } from "./SelectGame";
import { ShareInfo } from "./ShareInfo";
import { ShopInfo } from "./ShopInfo";
import { TaskInfo } from "./TaskInfo";
import { WatchMessage } from "./WatchMessage";

export class User extends BaseCache {
    /** 附属类:Activity */
    private __activity: Activity = null;
    /** 附属类:GoodsData */
    private __goodsData: GoodsData = null;
    /** 附属类:RecommendPop */
    private __recommendPop: RecommendPop = null;
    /** 附属类:BankrupData */
    private __bankrupData: BankrupData = null;
    /** 附属类:ShopInfo */
    private __shopInfo: ShopInfo = null;
    /** 附属类:TaskInfo */
    private __TaskInfo: TaskInfo = null;
    /** 附属类:MailInfo */
    private __mailInfo: MailInfo = null;
    /** 附属类:WatchMessage */
    private __watchMessage: WatchMessage = null;
    /** 附属类:SelectGame */
    private __selectGame: SelectGame = null;
    /** 附属类:ShareInfo */
    private __shareInfo: ShareInfo = null;
    /** 附属类:BackPack */
    private __backPack: BackPack = null;
    /** 附属类:MenuInfo */
    private __menuInfo: MenuInfo = null;
    /** 附属类:propsconf */
    private __propsConf: PropsConf = null;

    /** 附属类:RedDot */
    private __redDot: RedDot = null;

    /** 登录状态(GConstants.UserLoginState) */
    private _loginState = 0;
    /** 登录游戏房间状态 */
    private _loginRoomState = false;

    /** 用户基础信息 */
    private _userInfo = {};
    /** 资产信息 类型:PropertyType */
    private _propertyInfo = {};
    //历史登录信息
    private _historyLoginInfo = null;
    //上次登录的保存在本地的数据
    private _lastlocalLoginInfo = null;
    //用户登录次数记录
    private _loginSuccessCountArray = null
    //经验等级体系
    private _levelExpConfig = null;
    //道具信息
    private _propsInfo = {};
    //vip信息
    private _vipInfo = {};
    //玩的游戏记录
    private _gamePlayInfoRecord = {};
    /** 登录成功时间 */
    private _loginSuccessTime: number = null;
    /** 今日事件 */
    private _todayEventData: Object = null;
    /** 点击次数记录数据 */
    private _clickedRecordData: Object = null;

    //实例化
    constructor() {
        super("User");
        this.initSubClass()
    };
    /** 初始化附加类 */
    public initSubClass() {
        this.print(">>>>初始化附加类<<<<")
        this.__goodsData = new GoodsData(this);
        this.__recommendPop = new RecommendPop(this);
        this.__shopInfo = new ShopInfo(this);
        this.__TaskInfo = new TaskInfo(this);
        this.__mailInfo = new MailInfo(this);
        this.__watchMessage = new WatchMessage(this);
        this.__selectGame = new SelectGame(this);
        this.__shareInfo = new ShareInfo(this);
        this.__activity = new Activity(this);
        this.__bankrupData = new BankrupData(this);
        this.__redDot = new RedDot(this);
        this.__menuInfo = new MenuInfo(this);
        this.__backPack = new BackPack(this);
        this.__propsConf = new PropsConf(this);
    }
    /** 获取附属类 GoodsData */
    public get GoodsData(): GoodsData {
        return this.__goodsData;
    }
    /** 获取附属类 RecommendPop */
    public get RecommendPop(): RecommendPop {
        return this.__recommendPop;
    }
    /** 获取附属类 ShopInfo*/
    public get ShopInfo(): ShopInfo {
        return this.__shopInfo;
    }
    /** 获取附属类 TaskInfo*/
    public get TaskInfo(): TaskInfo {
        return this.__TaskInfo;
    }
    /** 获取附属类 Activity*/
    public get Activity(): Activity {
        return this.__activity;
    }
    /** 获取附属类 BankrupData*/
    public get BankrupData(): BankrupData {
        return this.__bankrupData;
    }
    /** 获取附属类 MailInfo*/
    public get MailInfo(): MailInfo {
        return this.__mailInfo;
    }
    /** 获取附属类 WatchMessage*/
    public get WatchMessage(): WatchMessage {
        return this.__watchMessage;
    }
    /** 获取附属类 SelectGame*/
    public get SelectGame(): SelectGame {
        return this.__selectGame;
    }
    /** 获取附属类 RedDot */
    public get RedDot(): RedDot {
        return this.__redDot;
    }
    /** 获取附属类 ShareInfo */
    public get ShareInfo(): ShareInfo {
        return this.__shareInfo;
    }
    /** 获取附属类 MenuInfo */
    public get MenuInfo(): MenuInfo {
        return this.__menuInfo;
    }
    /** 获取附属类 BackPack*/
    public get BackPack(): BackPack {
        return this.__backPack;
    }

    /** 获取附属类 PropsConf */
    public get PropsConf(): PropsConf {
        return this.__propsConf;
    }


    //登录成功后加载解析登录数据 （默认 0为true 1为false）
    onloadLoginSuccessParams(user, game, account, otherEx = {}) {
        user = Utils.table_verify(user);
        game = Utils.table_verify(game);
        account = Utils.table_verify(account);
        //----------------------------------------------------------
        //mid
        user["mid"] = Number(Utils.nullToDefault(user["mid"], -1));
        user["guid"] = Utils.nullToDefault(user["guid"], "");
        user["appid"] = Number(Utils.nullToDefault(user["appid"], -1));
        user["province"] = user["province"]
        user["region"] = user["region"]
        //昵称
        user["nick"] = Utils.nullToDefault(user["nick"], "");
        user["status"] = Number(Utils.nullToDefault(user["status"], -1));
        //上次登录的时间
        user["lastlogin"] = Number(user["lastlogin"]);
        //性别 0 - 保密，1 - 男 ,2 - 女（默认显示男头像）
        user["sex"] = Number(Utils.nullToDefault(user["sex"], 1))
        user["join"] = Number(user["join"]);
        user["ssid"] = Utils.nullToDefault(user["ssid"], "");
        //城市
        user["city"] = Utils.nullToDefault(user["city"], "");
        user["platformid"] = Utils.nullToDefault(user["platformid"], "");
        user["bagvol"] = user["bagvol"]
        user["cid"] = user["cid"]
        user["friend_des"] = user["friend_des"]
        user["silverCrystalFlag"] = user["silverCrystalFlag"]
        user["is_guide_by"] = user["is_guide_by"]
        user["age"] = Number(Utils.nullToDefault(user["age"], 0))
        //是否实名
        user["is_real_name_auth"] = user["is_real_name_auth"] || false
        //vip级别
        user["vipLevel"] = Number(Utils.nullToDefault(user["vipLevel"], 0))
        user["vipPrivileges"] = user["vipPrivileges"]
        //今日首次登录
        user["isFirstLogin"] = Number(Utils.nullToDefault(user["isFirstLogin"], 0)) == 0 ? true : false
        user["avatar_auditing"] = Number(Utils.nullToDefault(user["avatar_auditing"], -1));
        //通行证账号
        user["byacc"] = user["byacc"]
        //用户头像框
        user["headBox"] = Utils.nullToDefault(user["hdIcon"], "");
        user["hometown"] = user["hometown"]

        //头像相关
        user["avatar_s"] = Utils.nullToDefault(user["avatar_s"], "");  //小
        user["avatar_m"] = Utils.nullToDefault(user["avatar_m"], "");  //中
        user["avatar_b"] = Utils.nullToDefault(user["avatar_b"], "");  //大
        user["avatar_auditing"] = Number(Utils.nullToDefault(user["avatar_auditing"], -1));
        user["avatar_audit"] = Utils.nullToDefault(user["avatar_audit"], "");

        //----------------------------------------------------------
        //经验值
        game["exp"] = Utils.nullToDefault(Number(game["exp"]), 0)
        //游戏内金币
        game["money"] = Utils.nullToDefault(Number(game["money"]), 0)
        //用户总金币
        game["totalmoney"] = Utils.nullToDefault(Number(game["totalmoney"]), 0)
        //保险箱中的金币
        game["safebox"] = Utils.nullToDefault(Number(game["safebox"]), 0)
        //用户总金条
        game["crystal"] = Utils.nullToDefault(Number(game["crystal"]), 0)
        //保险箱中的金条
        game["crystalsafebox"] = Utils.nullToDefault(Number(game["crystalsafebox"]), 0)
        //用户总兑换券
        game["bdiamond"] = Utils.nullToDefault(Number(game["bdiamond"]), 0)

        game["silver"] = Number(game["silver"]);
        //----------------------------------------------------------
        account["access_token"] = Utils.nullToDefault(account["access_token"], "");
        account["bid"] = account["bid"]
        account["login_type"] = Number(account["login_type"]);
        account["guid"] = Utils.nullToDefault(account["guid"], "").toString().trim()
        account["register"] = Number(account["register"]);
        account["utype"] = Number(account["utype"]);

        this.saveCurLoginInfo(user, game, account, otherEx)

        Utils.dump(user)
        Utils.dump(game)
        Utils.dump(account)
        Utils.dump(otherEx)
    }
    //设置玩家的登录状态
    setLoginState(param) {
        let lastLoginState = this._loginState;
        this._loginState = param;
        let isChange = false;
        //状态改变通知
        //登录成功
        if (param == GConstants.UserLoginState.LoginSuccess && lastLoginState != GConstants.UserLoginState.LoginSuccess) {
            this.updateLastLoginTime();
            this._todayEventData = null;
            this.LoginRoomState = false;

            this.updateLocalDataByLoginSuccess();
            EventManager.dispatch(AppEvent.LOGIN_STATE_CHANGE, this._loginState);
        }
        //退出登录状态
        if (lastLoginState == GConstants.UserLoginState.LoginSuccess && param != GConstants.UserLoginState.LoginSuccess) {
            this._loginSuccessTime = null;
            this.LoginRoomState = false;

            EventManager.dispatch(AppEvent.LOGIN_STATE_CHANGE, this._loginState);
        }
    }
    /** 用户登录成功:改变清除本地缓存 */
    updateLocalDataByLoginSuccess() {
        let lastClientVer = LocalStorage.get(StoreKey.SYS_ClientVer, ClientInfo.AppVer);
        let isSameVer = (String(lastClientVer) == String(ClientInfo.AppVer));
        //版本号不一致时 当清除本地缓存
        if (isSameVer == false) {
            // this.RecommendPop.initLocalData();
        } else {
            this.RecommendPop.reloadLocalData();
        }
        //初始化大厅游戏配置
        this.SelectGame.initHallGameConfigByLocal();

        this.PropsConf.initDataByLocal();
        this.MailInfo.getDataByLocal();
        this.RedDot.reloadLocalData();
       

    }
    /**
     * 更新用户今日事件(本地存储)
     * @param key 
     * @param data 
     */
    setTodayLocalRecord(key, saveData = null) {
        if (Utils.string_isEmpty(key)) {
            return false;
        }
        let uid = String(this.getUserMid());
        let realKey = Utils.string_format(StoreKey.USER_TODAY_EVENT, uid);
        if (!this._todayEventData) {
            let oldData = LocalStorage.get(realKey, null);
            oldData = Encrypt.JsonDecode(oldData);
            oldData = Utils.table_verify(oldData);
            this._todayEventData = oldData;
        }
        key = String(key);
        this._todayEventData[key] = saveData;
        this.print("更新用户今日事件==> key:", key, saveData, this._todayEventData);
        LocalStorage.set(realKey, Encrypt.JsonEncode2(this._todayEventData));
        return true
    }
    /**
     * 获取用户今日事件(本地存储)
     * @param key
     * @param def 默认值
     */
    getTodayLocalRecord(key, def = null) {
        if (Utils.string_isEmpty(key)) {
            return null;
        }
        if (!this._todayEventData) {
            let uid = String(this.getUserMid());
            let realKey = Utils.string_format(StoreKey.USER_TODAY_EVENT, uid);
            let oldData = LocalStorage.get(realKey, null);
            oldData = Encrypt.JsonDecode(oldData);
            oldData = Utils.table_verify(oldData);
            this._todayEventData = oldData;
        }
        key = String(key);
        console.log("获取用户今日事件==>", key, this._todayEventData[key])
        return (this._todayEventData[key] != null ? this._todayEventData[key] : def);
    }
    /**
     * 更新上次登录的时间(只有成功登录了才会更新)
     */
    updateLastLoginTime() {
        this._loginSuccessTime = Utils.time();
        let key = Utils.string_format(StoreKey.USER_LOGIN_LAST_TIME, this.getUserMid());
        let lastLoginTime = LocalStorage.get(key, null);
        if (lastLoginTime == null || Utils.time_isSampleDay(this._loginSuccessTime, lastLoginTime) == false) {
            //非同一天 清除今日记录
            this.cleanTodayLocalRecord();
        }
        LocalStorage.set(key, this._loginSuccessTime);
    }
    /**
     * 清除今日记录
     */
    cleanTodayLocalRecord() {
        let uid = String(this.getUserMid());
        let realKey = Utils.string_format(StoreKey.USER_TODAY_EVENT, uid);
        LocalStorage.set(realKey, null);
        this._todayEventData = null;
        console.log("清除今日记录结果", LocalStorage.get(realKey))
    }

    /**
     * 更新用户点击操作次数(本地存储)
     * @param key 点击的标识
     * @returns 
     */
    updateClickRecord(key) {
        if (Utils.string_isEmpty(key)) {
            return false;
        }
        let uid = String(this.getUserMid());
        let realKey = Utils.string_format(StoreKey.USER_CLICKED_RECORD, uid);
        if (!this._clickedRecordData) {
            let oldData = LocalStorage.get(realKey, null);
            oldData = Encrypt.JsonDecode(oldData);
            oldData = Utils.table_verify(oldData);
            this._clickedRecordData = oldData;
        }
        key = String(key);
        this._clickedRecordData[key] = Utils.number_valueOf(this._clickedRecordData[key], 0) + 1;
        this.print("更新用户点击操作次数==> key:", key, this._clickedRecordData[key], this._clickedRecordData);
        LocalStorage.set(realKey, Encrypt.JsonEncode2(this._clickedRecordData));
        return true
    }
    /**
     * 获取用户点击操作次数(本地存储)
     * @param key:number|null
     */
    getClickRecord(key): number {
        if (Utils.string_isEmpty(key)) {
            return null;
        }
        if (!this._clickedRecordData) {
            let uid = String(this.getUserMid());
            let realKey = Utils.string_format(StoreKey.USER_CLICKED_RECORD, uid);
            let oldData = LocalStorage.get(realKey, null);
            oldData = Encrypt.JsonDecode(oldData);
            oldData = Utils.table_verify(oldData);
            this._clickedRecordData = oldData;
        }
        key = String(key);
        console.log("获取用户点击操作次数==>", key, this._clickedRecordData[key])
        return Utils.number_valueOf(this._clickedRecordData[key], 0);
    }

    //获取玩家的登录状态
    getLoginState() {
        return this._loginState
    }
    //设置玩家游戏房间登录状态
    set LoginRoomState(param: boolean) {
        this._loginRoomState = param || false;
    }
    //获取玩家游戏房间登录状态
    get LoginRoomState(): boolean {
        return this._loginRoomState
    }

    /** 玩家是否登录成功 */
    isLoginSuccesed(): boolean {
        if (this._loginState == GConstants.UserLoginState.LoginSuccess) {
            return true
        }
        return false
    }
    /** 玩家是否正在登录中 */
    isLogining(): boolean {
        if (this._loginState == GConstants.UserLoginState.Logining) {
            return true
        }
        return false
    }


    /** 保存当前登录的信息 */
    saveCurLoginInfo(user, game, account, otherEx = {}) {
        this.setData("user", user)
        this.setData("game", game)
        this.setData("account", account)

        let data = {
            imsi: ClientInfo.IMSI,
            mid: user["mid"],
            guid: user["guid"],
            byacc: user["byacc"],
            nick: user["nick"],
            sex: user["sex"],
            uType: account["uType"],
            token: account["access_token"],
            bid: account["bid"],
            phoneNum: account["phone"],
            loginType: account["login_type"],
            registerTime: user["join"],
        };
        for (let key in otherEx) {
            if (Object.prototype.hasOwnProperty.call(otherEx, key) && data[key] == null) {
                data[key] = otherEx[key];
            }
        }
        this.saveLastlocalLoginInfo(data)

        //通行证用户保存账号信息
        if (data.uType == GConstants.UserUType.BoyaaPassport) {
            this.addAccountInfo(user.byacc, null, account["bid"], account["access_token"])
        }
    }

    getDataUser(key: string = null, del: any = null) {
        if (key) {
            let user = this.getData("user")
            if (user) {
                if (user[key] != null && user[key] != undefined) {
                    return user[key]
                }
            }
        }
        return del
    }
    getDataGame(key: string = null, del: any = null) {
        if (key) {
            let game = this.getData("game")
            if (game) {
                if (game[key] != null && game[key] != undefined) {
                    return game[key]
                }
            }
        }
        return null
    }
    getDataAccount(key: string = null, del: any = null) {
        if (key) {
            let account = this.getData("account")
            if (account[key] != null && account[key] != undefined) {
                return account[key]
            }
        }
        return null
    }
    //更新用户数据
    updateDataUserKey(key: string = null, value: any = null) {
        if (key) {
            let user = this.getData("user")
            if (user) {
                if (user[key] != null && user[key] != undefined) {
                    user[key] = value
                    this.setData("user", user)
                }
            }
        }
    }
    /** 获取玩家成功登录的时间 可能为空 */
    getLoginSuccessTime(): number {
        return this._loginSuccessTime
    }

    //更新用户游戏数据
    updateDataGameKey(key: string = null, value: any = null) {
        if (key) {
            let game = this.getData("game")
            if (game) {
                if (game[key] != null && game[key] != undefined) {
                    game[key] = value
                    this.setData("game", game)
                }
            }
        }
    }
    //更新用户Account数据
    updateDataAccountKey(key: string = null, value: any = null) {
        if (key) {
            let account = this.getData("account")
            if (account) {
                if (account[key] != null && account[key] != undefined) {
                    account[key] = value
                    this.setData("account", account)
                }
            }
        }
    }

    //保存上次登录的信息
    saveLastlocalLoginInfo(param) {
        let res = Encrypt.JsonEncode2(param)
        if (res == "") {
            res = null
        }
        if (res == null) {
            this._lastlocalLoginInfo = null
        }
        LocalStorage.set(StoreKey.LOGIN_LAST_INFO, res);
        this._lastlocalLoginInfo = null;
    }
    //清空上次登录
    cleanLastlocalLoginInfo() {
        LocalStorage.set(StoreKey.LOGIN_LAST_INFO, null)
        this._lastlocalLoginInfo = null
    }

    //清空上次登录Token
    cleanLastlocalLoginToken() {
        let tab = this.getLastlocalLoginInfo();
        if (Utils.table_isEmpty(tab) == false) {
            tab["token"] = null; // 地方是guid字段
            LocalStorage.set(StoreKey.LOGIN_LAST_INFO, tab)
        }
        this._lastlocalLoginInfo = null
    }

    //获取上次登录的信息(Array)
    getLastlocalLoginInfo() {
        if (!this._lastlocalLoginInfo) {
            this._lastlocalLoginInfo = LocalStorage.get(StoreKey.LOGIN_LAST_INFO, null)
            if (this._lastlocalLoginInfo) {
                this._lastlocalLoginInfo = Encrypt.JsonDecode(this._lastlocalLoginInfo)
            }
        }

        return this._lastlocalLoginInfo
    }

    /** 获取上次登录的某一个key的value */
    getLastLoginValueByKey(key: string, def: any = null) {
        if (!key) {
            return def
        }

        if (this.getLastlocalLoginInfo()) {
            return this._lastlocalLoginInfo[key] || def
        }
        return def
    }

    //获取上次登录的类型
    getLastlocalLoginType() {
        if (!this._lastlocalLoginInfo) {
            this.getLastlocalLoginInfo()
        }
        if (!this._lastlocalLoginInfo) {
            return GConstants.UserLoginType.NONE
        }
        return this._lastlocalLoginInfo["loginType"] || GConstants.UserLoginType.NONE
    }

    //获取上次登录的Token
    getLastlocalLoginToken() {
        if (!this._lastlocalLoginInfo) {
            this.getLastlocalLoginInfo()
        }
        if (!this._lastlocalLoginInfo) {
            return null
        }
        return this._lastlocalLoginInfo["token"] // 地方是guid字段
    }

    //获取上次登录的服务器配置地址
    getLastlocalLoginServerConf() {
        if (!this._lastlocalLoginInfo) {
            this.getLastlocalLoginInfo();
        }
        if (!this._lastlocalLoginInfo) {
            return null;
        }
        return this._lastlocalLoginInfo["serverConf"];
    }

    //获取上次登录boyaa通行证
    getLastlocalByacc() {
        if (!this._lastlocalLoginInfo) {
            this.getLastlocalLoginInfo()
        }
        if (!this._lastlocalLoginInfo) {
            return null
        }
        return this._lastlocalLoginInfo["byacc"] || null
    }
    //获取上次登录的token
    getLastlocalToken() {
        if (!this._lastlocalLoginInfo) {
            this.getLastlocalLoginInfo()
        }
        if (!this._lastlocalLoginInfo) {
            return null
        }
        return this._lastlocalLoginInfo["token"] || null
    }
    //获取上次登录的Mid
    getLastlocalMid() {
        if (!this._lastlocalLoginInfo) {
            this.getLastlocalLoginInfo()
        }
        if (!this._lastlocalLoginInfo) {
            return null
        }
        return this._lastlocalLoginInfo["mid"] || null
    }
    /**
     * 获取玩家基础信息
     * @param key 键 字符串
     */
    getUserInfoProp(key: string = null) {
        if (key) {
            if (Utils.isNull(this._userInfo[key])) {
                return null;
            }
            return this._userInfo[key];
        } else {
            return this._userInfo;
        }
    }
    /**
     * 设置用户身份标识 
     * 0标识普通用户，1标识付费用户，2标识vip用户, 3标识即是付费用户又vip用户
     * @param keyCode 
     */
    setIdentity(keyCode: number = 0) {
        this.setData("Identity", keyCode)
    }
    //获取用户身份标识 
    getIdentity() {
        return Utils.number_valueOf(this.getData("Identity"), 0)
    }
    //是否是付费用户
    getIsPayUser(): boolean {
        let identity = this.getIdentity();
        return identity == GConstants.UserIdentity.Rmb || identity == GConstants.UserIdentity.RmbAndVip;
    }

    //获取用户的Mid
    getUserMid(del: any = null) {
        return this.getDataUser("mid", del)
    }
    //获取用户的cid
    getUserCid(del: any = null) {
        return this.getDataUser("cid", this.getDataUser("mid", del))
    }
    //获取用户的APPID
    getUserAppID(del: any = null) {
        return this.getDataUser("appid", del)
    }
    //获取用户的Guid
    getUserGuid(del: any = null) {
        return this.getDataUser("guid", del)
    }

    //获取用户的昵称
    getUserName(del: any = null) {

        return this.getDataUser("nick", del)
    }
    //获取用户的性别
    getUserSex(del: any = null) {
        return this.getDataUser("sex", del)
    }
    //获取用户的城市
    getUserCity(del: any = null) {
        return this.getDataUser("city", del)
    }
    //获取用户头像数组
    getUserHeadArray(del: any = null) {
        let headArray = {
            s: this.getDataUser("avatar_s", del),
            m: this.getDataUser("avatar_m", del),
            b: this.getDataUser("avatar_b", del)
        }
        return headArray
    }

    //获取用户头像数组
    getUserHeadBox(del: any = null) {
        return this.getDataUser("headBox", del)
    }

    //获取用户兑换券
    getUserDiamond(del: any = null) {
        return this.getDataGame("bdiamond", del == null ? 0 : del)
    }
    //获取用户金条
    getUserCrystal(del: any = null) {
        return this.getDataGame("crystal", del == null ? 0 : del)
    }
    /** 获取用户保险箱金条 */
    getUserCrystalSafeBox(del: any = null) {
        return this.getDataGame("crystalsafebox", del == null ? 0 : del)
    }

    /** 获取用户总银币 */
    getUserSilver(del: any = null) {
        let all = this.getDataGame("totalmoney", del == null ? 0 : del)
        this.print("获取总银币==>", all)
        return this.getDataGame("totalmoney", del == null ? 0 : del)
    }
    /** 获取用户现金银币 */
    getUserGameSilver(del: any = null) {
        let a = this.getDataGame("money", del == null ? 0 : del);
        this.print("获取用户现金银币==>", a)
        return a
    }

    getUserGameExp(del: any = null) {
        return this.getDataGame("exp", del == null ? 0 : del)
    }
    /**
     * 根据货币类型 获取用户身上的money
     * @param moneyID 货币类型 0:银币，1：金条 2：兑换券
     * @param isAll 是否是所有 默认非所有
     */
    getUserMoneyByID(moneyID: number = 0, isAll: boolean = false) {
        this.print("根据货币类型 获取用户身上的money===>moneyID=", moneyID)
        if (moneyID == 0) {
            if (isAll) {
                return this.getUserSilver()
            } else {
                return this.getUserGameSilver()
            }
        } else if (moneyID == 1) {
            if (isAll) {
                return (this.getUserCrystal() + this.getUserCrystalSafeBox())
            } else {
                return this.getUserCrystal()
            }
        } else if (moneyID == 2) {
            return this.getUserDiamond()
        }
        return 0
    }

    /**
     * 根据货币类型 更新用户身上的money
     * @param moneyID 货币类型 0:银币，1：金条 2：兑换券
     * @param value 数值
     */
    updateUserMoneyByID(moneyID: number = 0, value: number = 0, isAll: boolean = false) {
        let oldNum = null;
        let newNum = null;
        if (moneyID == GConstants.PropertyType.SILVER_COIN) {
            if (isAll) {
                oldNum = this.getDataGame("totalmoney", 0);
                this.updateDataGameKey("totalmoney", value)
                newNum = this.getDataGame("totalmoney", oldNum);
            } else {
                oldNum = this.getDataGame("money", 0);
                this.updateDataGameKey("money", value);
                newNum = this.getDataGame("money", oldNum);
            }
        } else if (moneyID == GConstants.PropertyType.GOLD_BAR) {
            oldNum = this.getDataGame("crystal", 0);
            this.updateDataGameKey("crystal", value);
            newNum = this.getDataGame("crystal", oldNum);
        } else if (moneyID == GConstants.PropertyType.DIAMOND) {
            oldNum = this.getDataGame("bdiamond", 0);
            this.updateDataGameKey("bdiamond", value);
            newNum = this.getDataGame("bdiamond", oldNum);
        }
        if (oldNum != null) {
            if (oldNum != newNum) {
                this.print(`>>>资产有变更 货币类型:${moneyID} 变更前:${oldNum} 变更后:${newNum}`);
                let sendBody = {
                    type: moneyID,
                    num: newNum,
                }
                //通知:资产变更
                EventManager.dispatch(AppEvent.USER_UPDATE_PROPERTY, sendBody)
            }
        }
    }

    /** 今日首次登录 */
    isFirstLoginToday(): boolean {
        if (this.getLoginSuccessCount(this.getUserMid()) == 1) {
            if (this.isRegisterToday()) {
                return true
            } else {
                let lastLoginTime = this.getDataUser("lastlogin", null)
                let currowTime = Utils.time()
                return Utils.time_isSampleDay(lastLoginTime, currowTime)
            }
        }
        return false
    }
    /** 当前首次登录 */
    isFirstLoginCurrow(): boolean {
        let mid = this.getUserMid()
        if (this.isFirstLoginToday() && !Utils.string_isEmpty(mid)) {
            return this.getLoginSuccessCount(mid) == 1
        }
        return false
    }
    /** 今日注册 */
    isRegisterToday(): boolean {
        let joinTime = this.getDataUser("join", null)
        let currowTime = Utils.time()
        if (!Utils.isNull(joinTime)) {
            return Utils.time_isSampleDay(joinTime, currowTime)
        }
        return false
    }

    //账号历史
    getAccountHistory() {
        if (!this._historyLoginInfo) {
            this._historyLoginInfo = LocalStorage.get(StoreKey.LOGIN_USER_HISTORY, null)
            if (this._historyLoginInfo) {
                this._historyLoginInfo = Encrypt.JsonDecode(this._historyLoginInfo)
            }
        }
        return this._historyLoginInfo || {}
    }
    //更新账号历史
    updateAccountHistory(param) {
        if (Utils.string_isEmpty(param)) {
            return
        }
        let temp = Encrypt.JsonEncode2(param)
        if (temp) {
            LocalStorage.set(StoreKey.LOGIN_USER_HISTORY, temp)
        }
        return this.getAccountHistory()
    }

    //添加新的账号信息
    addAccountInfo(loginAccount, loginPsd, bid, access_token) {
        if (Utils.string_isEmpty(loginAccount)) {
            return
        }
        let data = this.getAccountHistory();

        for (let index = 0; index < data.length; index++) {
            let value = data[index];
            if (value && value["loginAccount"] == loginAccount) {
                data.splice(index, 0)
                break;
            }
        }
        let temp = {
            loginAccount: loginAccount,
            loginPsd: loginPsd,
            access_token: access_token,
        }
        data.unshift(temp)
        this.updateAccountHistory(data)
    }
    //检查账号记录中是否存在记录
    checkIsExsitAccountInfo(loginAccount) {
        let recode = this.getAccountHistory()
        let isExsit = false;
        let key = null;
        let temp = {};

        for (let index = 0; index < recode.length; index++) {
            let value = recode[key];
            if (value["loginAccount"] && value["loginAccount"] == loginAccount) {
                isExsit = true
                key = index
                temp = value
                break;
            }
        }
        return [isExsit, key, temp]
    }
    //更新登录次数成功的记录
    updateLoginSuccessCount() {
        let mid = this.getUserMid()
        if (Utils.string_isEmpty(mid)) {
            return null
        }
        let lastCount = this.getLoginSuccessCount(mid)
        this._loginSuccessCountArray[mid] = lastCount + 1
        //保存
        let jsonStr = Encrypt.JsonEncode2(this._loginSuccessCountArray)
        if (Utils.string_isEmpty(jsonStr)) {
            jsonStr = null
            return null
        }
        this.print("更新登录次数成功的记录 ==>new = " + this._loginSuccessCountArray[mid])
        LocalStorage.set(StoreKey.LOGIN_SUCCESS_COUNT, jsonStr)
        return this._loginSuccessCountArray[mid]
    }

    //用户经验等级配置
    updateLevelExpConfig(body) {
        if (Utils.isNull(body)) {
            return
        }
        let oneArray = [
            "exp",
            "name",
            "level"
        ]
        //已经排序过了
        this._levelExpConfig = []

        let map = new Map()
        for (let level in body) {
            if (Object.prototype.hasOwnProperty.call(body, level)) {
                let expArray = body[level];
                if (expArray) {
                    expArray = this.mergeArray(oneArray, expArray)
                }
                if (expArray) {
                    map.set(level, expArray)
                }
            }
        }
        if (map.size > 0) {
            let arrayLike = Array.from(map)
            //得到的array中索引0为map中的key,索引1为map中的value
            arrayLike.sort(function (a, b) {
                return a[0] - b[0]
            })
            for (let index = 0; index < arrayLike.length; index++) {
                arrayLike[index][1]["level"] = arrayLike[index][0]
                this._levelExpConfig.push(arrayLike[index][1])
            }
        }
        return this._levelExpConfig
    }
    //用户经验等级配置
    getLevelExpConfig() {
        return this._levelExpConfig
    }
    //更新经验值获取等级
    getLevelByExp(exp, del: any = 0) {
        if (!this._levelExpConfig) {
            return del
        }
        exp = Utils.number_valueOf(exp)
        let level = null
        let levelExpConf = null
        for (let index = 0; index < this._levelExpConfig.length; index++) {
            let levelExp = this._levelExpConfig[index];
            if (levelExp && Utils.isNull(levelExp["exp"]) == false) {
                if (Utils.number_valueOf(levelExp["exp"]) > exp) {
                    if (this._levelExpConfig[index - 1]) {
                        levelExpConf = this._levelExpConfig[index - 1]
                        level = levelExpConf["level"]
                    }
                    break;
                } else if (Utils.number_valueOf(levelExp["exp"]) == exp) {
                    levelExpConf = this._levelExpConfig[index]
                    level = levelExpConf["level"]
                    break;
                }
            }
        }
        if (!level) {
            let valueConf = this._levelExpConfig[this._levelExpConfig.length - 1]
            if (Utils.number_valueOf(valueConf["exp"] < exp)) {
                levelExpConf = valueConf
                level = levelExpConf["level"]
            }
        }
        return level
    }

    //更新用户身上的道具信息
    updatePropsInfo(body) {
        if (Utils.isNull(body)) {
            return
        }
        let props = {};
        let vipInfo = null;
        body = Utils.table_verify(body)
        for (let i in body) {
            if (Object.prototype.hasOwnProperty.call(body, i)) {
                let item = {
                    "type": Utils.number_valueOf(body[i]["propsType"], -1),   //道具类型
                    "expires": Utils.number_valueOf(body[i]["expires"], 0),   //过期时间
                    "allowTimes": Utils.number_valueOf(body[i]["allow_times"], 0),  //道具个数
                    "updateTime": Utils.time(),
                };
                if (item.type == GConstants.UserPropsType.TYPE_VIP) {
                    vipInfo = item;
                }
                props[item.type] = item;
            }
        }
        this.setVipInfo(vipInfo);
        this._propsInfo = props;
    }
    //获取用户身上的道具信息
    getPropsInfo() {
        return this._propsInfo || {};
    }
    //获取用户身上的道具信息(根据道具类型)
    getPropsInfoByType(propType) {
        if (Utils.isNull(propType)) {
            return null;
        }
        return this._propsInfo[propType] || null;
    }
    //获取用户身上的道具个数(根据道具类型)
    getPropsNumInfoByType(propType) {
        let info = this.getPropsInfoByType(propType);
        let num = 0;
        if (info) {
            if (this.isExpireProps(propType)) {
                return 0;
            }
            num = info["allowTimes"];
        }
        return num;
    }
    //道具是否过期
    isExpireProps(propType) {
        let info = this.getPropsInfoByType(propType)
        if (!info) {
            return true;
        }
        if (info["expires"] <= 0) {
            return false;
        }
        let time = Utils.time() - info["updateTime"]
        if (time >= info["expires"]) {
            return true;
        } else {
            return false;
        }
    }

    //设置Vip信息
    setVipInfo(body) {
        if (Utils.table_isEmpty(body)) {
            this.setIdentity(GConstants.UserIdentity.Normal);
        } else if (body?.type == GConstants.UserPropsType.TYPE_VIP) {
            let isPayUser = this.getIsPayUser();
            this.setVipTime(body["expires"]);
            if (isPayUser) {
                this.setIdentity(GConstants.UserIdentity.RmbAndVip);
            } else {
                this.setIdentity(GConstants.UserIdentity.Vip);
            }
        }
    }
    //viptime vip到期时间 -1表示无限制， 0表示过期  
    setVipTime(time: number) {
        let leftTime = Utils.number_valueOf(time); //单位为秒
        this.setData("vipTime", leftTime)
    }


    //获取登录次数成功的记录
    getLoginSuccessCount(mid: string): number {
        if (!this._loginSuccessCountArray || !this._loginSuccessCountArray[mid]) {
            let record = LocalStorage.get(StoreKey.LOGIN_SUCCESS_COUNT, null)
            if (record) {
                record = Encrypt.JsonDecode(record)
            }
            this._loginSuccessCountArray = Utils.table_verify(record)
        }

        let lastCount = 0
        if (!Utils.isNull(this._loginSuccessCountArray[mid])) {
            lastCount = this._loginSuccessCountArray[mid]
            lastCount = Number(lastCount)
        }
        this.print("登录成功的次数===>" + lastCount)
        return lastCount
    }

    /**
     * 计算需要取出多少银币
     * @param minMoney 场次银币下限
     * @param maxMoney 场次银币上限
     * @param money    用户现金
     * @param totalMoney 用户总银币
     */
    calTakeOutHowMuchMoney(minMoney, maxMoney, money, totalMoney) {
        let getMoney = 2 * minMoney - money;
        getMoney = Math.min(getMoney, totalMoney - money);//不能超过保险箱中的银币
        if (maxMoney != -1) {
            getMoney = Math.min(getMoney, maxMoney - money - 1);//不能超过银币上限(前闭后开)
        }
        return getMoney;
    }

    //获取玩家进入房间所需的信息
    getUserLoginInfoByIntoGame(gameID: number) {
        gameID = Utils.number_valueOf(gameID, null);
        if (Utils.isNull(gameID)) {
            return null;
        }

        let headArray = this.getUserHeadArray()
        let commonInfo = {
            userId: this.getUserMid(0),
            cid: this.getUserCid(0),
            nickName: this.getUserName(""),
            sex: this.getUserSex(1),
            city: this.getUserCity(""),
            gold: this.getUserGameSilver(0),
            money: this.getUserGameSilver(0), //根据货币类型取得的资产数据,游戏重启马上重连时levelId不正确故此时资产类型不准
            diamond: this.getUserDiamond(0),
            crystal: this.getUserCrystal(),
            m_identity: this.getIdentity(),
            avatar_s: headArray["s"] || "",
            avatar_m: headArray["m"] || "",
            avatar_b: headArray["b"] || "",
            headBox: this.getUserHeadBox(""),
            level: this.getLevelByExp(this.getUserGameExp(0), 0),
            exp: this.getUserGameExp(0),
            //输赢平记录
            loseCount: Utils.nullToDefault(this.getGamePlayRecordByKey(gameID, GConstants.UserGameRecodeState.Lose), 0),
            winCount: Utils.nullToDefault(this.getGamePlayRecordByKey(gameID, GConstants.UserGameRecodeState.Win), 0),
            drawCount: Utils.nullToDefault(this.getGamePlayRecordByKey(gameID, GConstants.UserGameRecodeState.Draw), 0),
            ladderScore: Utils.nullToDefault(this.getGamePlayRecordByKey(gameID, GConstants.UserGameRecodeState.LadderScore), 0),

            appid: this.getUserAppID(),

        }
        return commonInfo
    }

    /**
     * 同步下发玩的游戏记录
     * @param gameID 游戏ID
     * @param body 
     * @returns 成功返回数据 失败返回空
     */
    syncGamePlayRecord(gameID, body) {
        gameID = Utils.number_valueOf(gameID, null);
        if (Utils.isNull(gameID)) {
            return null;
        }
        let info = {
            "wintimes": 0,     //赢的局数
            "losetimes": 0,    //输的局数
            "drawtimes": 0,    //平局
            "winmax": 0,       //最大赢钱数
            "points": 0,
            "group": "",
            "eloscore": 0,     //天梯分
        }
        let _info = this.mergeArrayDefault(info, body);
        this._gamePlayInfoRecord[gameID] = _info;
        return this._gamePlayInfoRecord[gameID];
    }
    /**
     * 获取某个游戏的玩的记录
     * @param gameID 游戏ID
     * @param itemKey 要获取的键值 为空则获取所有 详见UserGameRecodeState
     * @returns 成功返回数据 失败返回空
     */
    getGamePlayRecordByKey(gameID: number, itemKey = null) {
        gameID = Utils.number_valueOf(gameID, null);
        if (Utils.isNull(gameID)) {
            return null;
        }
        if (Utils.isNull(this._gamePlayInfoRecord[gameID])) {
            return null;
        }
        if (Utils.isNull(itemKey)) {
            return this._gamePlayInfoRecord[gameID];
        }
        let key = null;
        switch (itemKey) {
            case GConstants.UserGameRecodeState.Win:
                key = "wintimes";
                break;
            case GConstants.UserGameRecodeState.Lose:
                key = "losetimes";
                break;
            case GConstants.UserGameRecodeState.Draw:
                key = "drawtimes";
                break;
            case GConstants.UserGameRecodeState.WinMax:
                key = "winmax";
                break;
            case GConstants.UserGameRecodeState.LadderScore:
                key = "eloscore";
                break;
            default:
                break;
        }
        if (key) {
            return this._gamePlayInfoRecord[gameID][key];
        }
        return null;
    }
    /**
     * 更新某个游戏的玩的记录 每次加+1
     * @param gameID 游戏ID
     * @param itemKey 要更新的键值 详见UserGameRecodeState
     */
    updateGamePlayRecordByKey(gameID: number, itemKey = null) {
        gameID = Utils.number_valueOf(gameID, null);
        if (Utils.isNull(gameID)) {
            return null;
        }
        if (Utils.isNull(this._gamePlayInfoRecord[gameID])) {
            return null;
        }
        let key = null;
        switch (itemKey) {
            case GConstants.UserGameRecodeState.Win:
                key = "wintimes";
                break;
            case GConstants.UserGameRecodeState.Lose:
                key = "losetimes";
                break;
            case GConstants.UserGameRecodeState.Draw:
                key = "drawtimes";
                break;
            case GConstants.UserGameRecodeState.WinMax:
                key = "winmax";
                break;
            case GConstants.UserGameRecodeState.LadderScore:
                key = "eloscore";
                break;
            default:
                break;
        }

        if (key) {
            let oldNum = this._gamePlayInfoRecord[gameID][key];
            if (typeof (oldNum) == "number") {
                this._gamePlayInfoRecord[gameID][key] = oldNum + 1;
            }
            return this._gamePlayInfoRecord[gameID][key];
        }
        return null
    }
    /** 获取开放数据域要保存的数据 */
    getCloudStorageSaveList(callFunc = null) {
        let headFrame = this.getUserInfoProp("picture_frame");

        Platform.downloadFile(headFrame, (res) => {
            if (res["code"] === 200) {
                headFrame = res["filePath"];
            } else {
                headFrame = "";
            }
            let param = [
                { key: CloundKey.USER_LOGIN_TIME, value: this.getLoginSuccessTime() },
                { key: CloundKey.USER_HEAD_FRAME, value: headFrame },
                { key: CloundKey.USER_UID, value: this.getUserMid() },
            ]
            if (callFunc) {
                callFunc(param);
            }
        });
    }
    /** 获取开放数据域key队列 */
    getCloudStorageKeys(): Array<String> {
        let keys = [
            CloundKey.USER_LOGIN_TIME,
            CloundKey.USER_HEAD_FRAME,
            CloundKey.USER_UID,
        ]
        return keys
    }
    /** 获取开放数据域要传递的数据 */
    getCloudStorageParam() {
        //当前用户openID的数据
        let key_openid = Utils.string_format(StoreKey.LOGIN_USER_OPENID, this.getUserMid());
        let currentOpenid = LocalStorage.get(key_openid, '');
        console.log('当前用户的openid', currentOpenid);

        let shareOptions = {}
        if (Utils.table_verify(this.__shareInfo.ShareConfig.friend)) {
            let shopShareMsg = this.__shareInfo.getShareConfigByType(GConstants.ShareSceneConf.friend)
            // 空数组返回 true
            if (Utils.table_isEmpty(shopShareMsg)) {
                shareOptions = {
                    title: GameTxt.share_wx_friends_txt, //通用标题
                    imageUrl: GameRes.AppCommon_Share_Friend_Comm.path, //通用img
                }
            } else {
                shareOptions = {
                    title: shopShareMsg[0]['title'], //转发标题，不传则默认使用当前小游戏的昵称
                    imageUrl: shopShareMsg[0]['img'],
                }

            }
        }
        console.log('邀请好友分享的数据', shareOptions)

        return {
            maxFriends: 100,
            myopenID: currentOpenid,
            keyList: this.getCloudStorageKeys(),
            shareOptions: shareOptions,
        }

    }
}
