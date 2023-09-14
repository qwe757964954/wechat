/**
 * Name = init
 * URL = db://assets/cache/GCache.ts
 * Time = Mon May 09 2022 14:48:30 GMT+0800 (中国标准时间)
 * Author = xueya
 * 缓存数据
 */

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
import { User } from "./User";
import { WatchMessage } from "./WatchMessage";

export class GCache {
	//用户首次运行加载
	static firstRunLoading = false;
	//用户首次加载已完成
	static firstRunLoadSuccess = false;
	//当前操作的支付场景(用于数据上报)
	static CurrowPaySceneType = null;

	//用户缓存
	static User: User = null;
	/** 用户背包缓存 */
	static BackPack: BackPack = null;
	/** 用户商城缓存 */
	static ShopInfo: ShopInfo = null;
    
    /** 用户活动中心/任务缓存 */
	static TaskInfo: TaskInfo = null;
	/** 用户邮件缓存 */
	static MailInfo: MailInfo = null;
	/** 用户信箱缓存 */
	static WatchMessage: WatchMessage = null;
	/** 选场游戏缓存 */
	static SelectGame: SelectGame = null;
	/**用户分享缓存 */
	static ShareInfo: ShareInfo = null;
	/** 红点缓存 */
	static RedDot: RedDot = null;
	/** 菜单缓存 */
	static MenuInfo: MenuInfo = null;
	/** 推荐弹窗缓存 */
	static RecommendPop: RecommendPop = null;

	//桌子缓存
	static Desk = null;  //暂存 后续要改
	//活动缓存
	static Activity: Activity = null;
	/** 商品列表 */
	static GoodsData: GoodsData = null;
	/** 物品配置 */
	static PropsConf: PropsConf = null;


	//破产缓存
	static BankrupData: BankrupData = null;

	public static init() {
		GCache.User = new User();
		GCache.reloadSubClass();
		GCache.CurrowPaySceneType = null;
	}
	public static reloadSubClass() {
		GCache.Activity = GCache.User.Activity;
		GCache.BankrupData = GCache.User.BankrupData;
		GCache.GoodsData = GCache.User.GoodsData;
		GCache.RecommendPop = GCache.User.RecommendPop;
		GCache.ShopInfo = GCache.User.ShopInfo;
		GCache.TaskInfo = GCache.User.TaskInfo;
		GCache.MailInfo = GCache.User.MailInfo;
		GCache.WatchMessage = GCache.User.WatchMessage;
		GCache.PropsConf = GCache.User.PropsConf;
		GCache.SelectGame = GCache.User.SelectGame;
		GCache.ShareInfo = GCache.User.ShareInfo;
		GCache.RedDot = GCache.User.RedDot;
		GCache.MenuInfo = GCache.User.MenuInfo;
		GCache.BackPack = GCache.User.BackPack;		
		GCache.firstRunLoading = true;
		GCache.firstRunLoadSuccess = false;
		GCache.setDesk(null);
	}

	//初始化桌子
	public static setDesk(deskClass) {
		if (deskClass) {
			GCache.Desk = new (deskClass);
		} else {
			if (GCache.Desk) {
				GCache.Desk.clear()
			}
			GCache.Desk = null
		}
	}
}