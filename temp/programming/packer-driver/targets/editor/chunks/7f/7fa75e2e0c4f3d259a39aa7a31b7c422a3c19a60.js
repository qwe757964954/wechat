System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, User, GCache, _crd;

  function _reportPossibleCrUseOfActivity(extras) {
    _reporterNs.report("Activity", "./Activity", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBackPack(extras) {
    _reporterNs.report("BackPack", "./BackPack", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBankrupData(extras) {
    _reporterNs.report("BankrupData", "./BankrupData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGoodsData(extras) {
    _reporterNs.report("GoodsData", "./GoodsData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMailInfo(extras) {
    _reporterNs.report("MailInfo", "./MailInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMenuInfo(extras) {
    _reporterNs.report("MenuInfo", "./MenuInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPropsConf(extras) {
    _reporterNs.report("PropsConf", "./PropsConf", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRecommendPop(extras) {
    _reporterNs.report("RecommendPop", "./RecommendPop", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRedDot(extras) {
    _reporterNs.report("RedDot", "./RedDot", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSelectGame(extras) {
    _reporterNs.report("SelectGame", "./SelectGame", _context.meta, extras);
  }

  function _reportPossibleCrUseOfShareInfo(extras) {
    _reporterNs.report("ShareInfo", "./ShareInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfShopInfo(extras) {
    _reporterNs.report("ShopInfo", "./ShopInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTaskInfo(extras) {
    _reporterNs.report("TaskInfo", "./TaskInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUser(extras) {
    _reporterNs.report("User", "./User", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWatchMessage(extras) {
    _reporterNs.report("WatchMessage", "./WatchMessage", _context.meta, extras);
  }

  _export("GCache", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      User = _unresolved_2.User;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "3710eJVjilD44v0ra8UZmiA", "GCache", undefined);

      _export("GCache", GCache = class GCache {
        //用户首次运行加载
        //用户首次加载已完成
        //当前操作的支付场景(用于数据上报)
        //用户缓存

        /** 用户背包缓存 */

        /** 用户商城缓存 */

        /** 用户活动中心/任务缓存 */

        /** 用户邮件缓存 */

        /** 用户信箱缓存 */

        /** 选场游戏缓存 */

        /**用户分享缓存 */

        /** 红点缓存 */

        /** 菜单缓存 */

        /** 推荐弹窗缓存 */
        //桌子缓存
        //暂存 后续要改
        //活动缓存

        /** 商品列表 */

        /** 物品配置 */
        //破产缓存
        static init() {
          GCache.User = new (_crd && User === void 0 ? (_reportPossibleCrUseOfUser({
            error: Error()
          }), User) : User)();
          GCache.reloadSubClass();
          GCache.CurrowPaySceneType = null;
        }

        static reloadSubClass() {
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
        } //初始化桌子


        static setDesk(deskClass) {
          if (deskClass) {
            GCache.Desk = new deskClass();
          } else {
            if (GCache.Desk) {
              GCache.Desk.clear();
            }

            GCache.Desk = null;
          }
        }

      });

      GCache.firstRunLoading = false;
      GCache.firstRunLoadSuccess = false;
      GCache.CurrowPaySceneType = null;
      GCache.User = null;
      GCache.BackPack = null;
      GCache.ShopInfo = null;
      GCache.TaskInfo = null;
      GCache.MailInfo = null;
      GCache.WatchMessage = null;
      GCache.SelectGame = null;
      GCache.ShareInfo = null;
      GCache.RedDot = null;
      GCache.MenuInfo = null;
      GCache.RecommendPop = null;
      GCache.Desk = null;
      GCache.Activity = null;
      GCache.GoodsData = null;
      GCache.PropsConf = null;
      GCache.BankrupData = null;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=7fa75e2e0c4f3d259a39aa7a31b7c422a3c19a60.js.map