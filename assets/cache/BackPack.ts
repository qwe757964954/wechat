import { AppEvent } from "../config/AppEvent";
import { EventManager } from "../framework/manager/EventManager";
import { BaseCache } from "../framework/vc/BaseCache";
import { User } from "./User";
/**
 * Name = BackPack
 * URL = db://assets/cache/BackPack.ts
 * Time = 
 * Author = xueya
 * 背包缓存
 */
export class BackPack extends BaseCache {

  /** 用户类 */
  private __User: User = null;
  /** 背包数据 */
  private bagData = {};
  /** 背包物品大类型 */
  private bagList = [];

  constructor(superClass) {
    super("BackPack")
    this.__User = superClass;
    this.bagData = [];
  };
  /** 获取背包物品大类型 */
  get BagList() {
    return this.bagList;
  }
  /** 获取背包数据 */
  get BagData() {
    return this.bagData;
  }
  /** 更新背包数据 */
  updateBagData(result: Array<object>) {
    this.bagData = result
    console.log('获得最新的背包数据', this.bagData)
  }
  /** 在使用道具完后更新数据 拉取最新的背包数据 */
  useUpdate() {
    console.log('道具发生改变再次拉取背包数据')
    EventManager.dispatch(AppEvent.NET_CMD_REQ_USER_BACKPACK);
  }

}