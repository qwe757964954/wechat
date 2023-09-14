System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, AppEvent, GConstants, GameRes, GameTxt, EventManager, Utils, BaseCache, ShareInfo, _crd;

  function _reportPossibleCrUseOfAppEvent(extras) {
    _reporterNs.report("AppEvent", "../config/AppEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGConstants(extras) {
    _reporterNs.report("GConstants", "../config/GameConstant", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameRes(extras) {
    _reporterNs.report("GameRes", "../config/GameRes", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameTxt(extras) {
    _reporterNs.report("GameTxt", "../config/GameTxt", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventManager(extras) {
    _reporterNs.report("EventManager", "../framework/manager/EventManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUtils(extras) {
    _reporterNs.report("Utils", "../framework/Utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseCache(extras) {
    _reporterNs.report("BaseCache", "../framework/vc/BaseCache", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUser(extras) {
    _reporterNs.report("User", "./User", _context.meta, extras);
  }

  _export("ShareInfo", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      AppEvent = _unresolved_2.AppEvent;
    }, function (_unresolved_3) {
      GConstants = _unresolved_3.GConstants;
    }, function (_unresolved_4) {
      GameRes = _unresolved_4.GameRes;
    }, function (_unresolved_5) {
      GameTxt = _unresolved_5.GameTxt;
    }, function (_unresolved_6) {
      EventManager = _unresolved_6.EventManager;
    }, function (_unresolved_7) {
      Utils = _unresolved_7.Utils;
    }, function (_unresolved_8) {
      BaseCache = _unresolved_8.BaseCache;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "3d6c7TtxFlLXY1ZtIso6H2v", "ShareInfo", undefined);

      /**
       * Name = ShareInfo
       * URL = db://assets/cache/ShareInfo.ts
       * Time = Mon May 09 2022 14:43:04 GMT+0800 (中国标准时间)
       * Author = xueya
       * 商城缓存
       */
      _export("ShareInfo", ShareInfo = class ShareInfo extends (_crd && BaseCache === void 0 ? (_reportPossibleCrUseOfBaseCache({
        error: Error()
      }), BaseCache) : BaseCache) {
        /** 用户类 */

        /** 分享配置 */

        /** 枚举key与服务端返回一致 */

        /** 下一次的分享次数 */

        /** 分享之后开始计时的定时器 */

        /** 储存Goods.gid用于对比 */

        /** 已经分享的好友openid */

        /** 记录分享开始的时间 */
        //实例化
        constructor(superClass) {
          super("ShareInfo");
          this.__User = null;
          this._shareConfVer = null;
          this._shareConfig = {};
          this._shareCount = 0;
          this.timer = null;
          this.goodsgidArray = [];
          this.shareFriendsList = [];
          this.recodeShareStart = 0;
          this.__User = superClass;
        }

        /** 获取分享配置 */
        get ShareConfig() {
          return (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).clone((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).table_verify(this._shareConfig));
        }
        /** 更新分享配置 */


        updateConfig(shareCof) {
          if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).table_isEmpty(shareCof)) {
            return;
          }

          Object.keys(shareCof).forEach(key => {
            this._shareConfig[key] = shareCof[key];
          });
          console.log('拉取到的分享配置', shareCof);
          console.log('缓存的分享配置', this._shareConfig); //通知：分享配置有更新

          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
            error: Error()
          }), AppEvent) : AppEvent).NET_RESP_SHARE_CONFIG, true, this._shareConfig);
        }
        /** 根据分享的key获得当前的分享配置 */


        getShareConfigByType(type) {
          let currentConfig = {};
          Object.keys(this._shareConfig).forEach(key => {
            if (type == key) {
              currentConfig = this._shareConfig[type];
            }
          });
          return currentConfig;
        }
        /** 拿到分享次数 */


        getShareCount() {
          return this._shareCount;
        }
        /** 更新同步分享次数 */


        refreshShareCount(body) {
          if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).table_isEmpty(body)) {
            return;
          }

          this._shareCount = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).number_valueOf(body["cur_cnt"]) + 1;
        }
        /** 取分享开关 */


        getShareSwitch() {
          return this._shareConfig["switch"] || false;
        }
        /** 取触发分享连胜局数 */


        getWinStreak() {
          return (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).number_valueOf(this._shareConfig["win_streak"], 1);
        }
        /** 
         * 下一次分享是否有奖励
         * @returns Object 或 {}
         */


        getAwardByNextCount() {
          let count = this.getShareCount();
          count = count + 1;
          let res = {};
          /**
           * idx: 1
           * item_cnt: 2000
           * item_id: 9
           * item_type: 0
           */

          let rewards = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).table_verify(this._shareConfig["rewards"], true);

          for (let i = 0; i < rewards.length; i++) {
            if (rewards[i]["idx"] == count) {
              res = rewards[i];
              break;
            }

            ;
          }

          return res;
        }
        /** 获取一共有多少次奖励 */


        getAwardCount() {
          let rewards = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).table_verify(this._shareConfig["rewards"], true);
          return rewards.length;
        }
        /** 下一次分享是否有奖励 */


        isAwardNext() {
          let count = this.getShareCount();
          count = count + 1;
          let totalCount = this.getAwardCount();
          return count > totalCount ? false : true;
        }
        /** 获取触发分享结算倍数 */


        getComTimes() {
          return (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).number_valueOf(this._shareConfig["com_times"], 1);
        }
        /** 分享配置推送更新,重新拉取 */


        notifyConfigUpdate(body) {
          if (body) {
            let newVer = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).number_valueOf(body["ver"], -1);
            let localVer = this.getShareConfVer();

            if (newVer > localVer) {
              //请求分享配置
              (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
                error: Error()
              }), EventManager) : EventManager).dispatch((_crd && AppEvent === void 0 ? (_reportPossibleCrUseOfAppEvent({
                error: Error()
              }), AppEvent) : AppEvent).NET_REQ_SHARE_CONFIG);
            }
          }
        }
        /** 分享成功更新分享成功次数 */


        updateShareCountBySuccess(data) {
          //只有当奖励不为空的时候，才去更新分享次数
          if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).table_isEmpty(data) == false) {
            this._shareCount = this._shareCount + 1; //分享成功之后，无气泡不需要展示分享次数
            // EventManager.dispatch(AppEvent.NOTIFY_SHARE_AWARD_REFRESH);
          }
        }
        /** 获取分享更新配置的版本 */


        getShareConfVer() {
          return (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).number_valueOf(this._shareConfVer);
        }
        /** 清理版本信息 */


        clearVer() {
          this._shareConfVer = null;
        }
        /**商城分享成功之后开始读秒 */


        shareSuccessTimeAdd(gid) {
          //判断是否是之前点击过的商品
          let _gidIndex = this.goodsgidArray.findIndex(item => {
            return item['gid'] == gid;
          });

          if (_gidIndex > -1) {
            this.goodsgidArray.splice(_gidIndex, 1, {
              gid: gid,
              time: 0
            });
          } else {
            this.goodsgidArray.push({
              gid: gid,
              time: 0
            });
          } //清空上次的定时器


          clearInterval(this.timer);
          this.timer = setInterval(() => {
            if (this.goodsgidArray.length > 0) {
              this.goodsgidArray.forEach((item, index) => {
                item['time']++;
              });
            }
          }, 1000);
        }
        /** 获取距离上次分享成功的时间  */


        getAfterSharetime(gid) {
          let currentTime = this.goodsgidArray.find(item => {
            return item['gid'] == gid;
          });
          return currentTime ? {
            workTime: currentTime['time'],
            effective: true
          } : {
            workTime: 0,
            effective: false
          };
        }
        /**
         * 计算当前分享是否在允许时间范围
         * gid :比对分享时间
         * shareType获得当前分享类型的参数
         */


        shareTimeAllowed(gid, shareType) {
          let shopShareMsg = this.getShareConfigByType(shareType);
          let coolDownTime = 0;
          let shareParams = {}; // 空数组返回 true

          if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).table_isEmpty(shopShareMsg)) {
            shareParams = {
              title: (_crd && GameTxt === void 0 ? (_reportPossibleCrUseOfGameTxt({
                error: Error()
              }), GameTxt) : GameTxt).share_wx_friends_txt,
              //通用标题
              imageUrl: (_crd && GameRes === void 0 ? (_reportPossibleCrUseOfGameRes({
                error: Error()
              }), GameRes) : GameRes).AppCommon_Share_Friend_Comm.path
            };
          } else {
            shareParams = {
              title: shopShareMsg[0]['title'],
              //转发标题，不传则默认使用当前小游戏的昵称
              imageUrl: shopShareMsg[0]['img']
            };
            shopShareMsg[0]['cool_down_type'] ? shopShareMsg[0]['cool_down_time'] * 60 : 0;
          } //当前物品 距离上次分享的时间


          let lastShareMSg = this.getAfterSharetime(gid);
          let allowShareMsg = {
            gid: gid,
            allowShare: true,
            //默认允许分享
            nextSharetime: 0,
            shareParams: shareParams
          }; //允许分享：1，找到了当前定时器时间大于冷却时间 或者此时没找到,2，第一次分享找不到

          if (lastShareMSg['workTime'] >= coolDownTime || !lastShareMSg['effective']) {
            allowShareMsg.allowShare = true;
            allowShareMsg.nextSharetime = 0; //允许

            allowShareMsg.gid = gid;
          } //不允许分享
          else {
            allowShareMsg.allowShare = false;
            allowShareMsg.gid = gid;
            allowShareMsg.nextSharetime = coolDownTime - lastShareMSg['workTime']; //允许
          }

          return allowShareMsg;
        }
        /**
         *  计算当前分享时间范围
        */


        recodeShareFriendStart() {
          this.recodeShareStart = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).time();
        }
        /**
         * 校验是否可以分享到好友
         */


        checkCanShareToFriend() {
          let currowTime = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).time();
          return currowTime - this.recodeShareStart >= (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
            error: Error()
          }), GConstants) : GConstants).shareSucConditions.shareUseTime;
        }
        /** 记录已经分享的好友 */


        insertShareFriend(openID) {
          if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).string_isEmpty(openID) == false) {
            this.shareFriendsList.push(openID);
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=8c6b6e57c02443c392af583096cdfb032d6477d3.js.map