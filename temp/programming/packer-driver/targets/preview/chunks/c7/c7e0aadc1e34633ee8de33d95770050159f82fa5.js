System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, GConstants, StoreKey, Encrypt, CountTime, LocalStorage, Utils, BaseCache, Platform, TaskInfo, _crd;

  function _reportPossibleCrUseOfGConstants(extras) {
    _reporterNs.report("GConstants", "../config/GameConstant", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStoreKey(extras) {
    _reporterNs.report("StoreKey", "../config/GameConstant", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEncrypt(extras) {
    _reporterNs.report("Encrypt", "../framework/crypto/Encrypto", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCountTime(extras) {
    _reporterNs.report("CountTime", "../framework/extend/CountTime", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLocalStorage(extras) {
    _reporterNs.report("LocalStorage", "../framework/LocalStorage", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUtils(extras) {
    _reporterNs.report("Utils", "../framework/Utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseCache(extras) {
    _reporterNs.report("BaseCache", "../framework/vc/BaseCache", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlatform(extras) {
    _reporterNs.report("Platform", "../platform/Platform", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUser(extras) {
    _reporterNs.report("User", "./User", _context.meta, extras);
  }

  _export("TaskInfo", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      GConstants = _unresolved_2.GConstants;
      StoreKey = _unresolved_2.StoreKey;
    }, function (_unresolved_3) {
      Encrypt = _unresolved_3.Encrypt;
    }, function (_unresolved_4) {
      CountTime = _unresolved_4.CountTime;
    }, function (_unresolved_5) {
      LocalStorage = _unresolved_5.LocalStorage;
    }, function (_unresolved_6) {
      Utils = _unresolved_6.Utils;
    }, function (_unresolved_7) {
      BaseCache = _unresolved_7.BaseCache;
    }, function (_unresolved_8) {
      Platform = _unresolved_8.Platform;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "85d07OCajxLdpQ7xOMZ/Wa3", "TaskInfo", undefined);

      _export("TaskInfo", TaskInfo = class TaskInfo extends (_crd && BaseCache === void 0 ? (_reportPossibleCrUseOfBaseCache({
        error: Error()
      }), BaseCache) : BaseCache) {
        /** 用户类 */

        /** 活动 */

        /** 公告 */

        /** 允许分享的时间 */
        //实例化
        constructor(superClass) {
          super("TaskInfo");
          this.__User = null;
          this.atyList = [];
          this.noticeList = [];
          this._allowShareTime = 0;
          this.__User = superClass;
        }

        /** 活动数据 */
        get atyData() {
          var atyList = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).clone(this.atyList);
          return atyList;
        }
        /** 公告数据 */


        get NoticeData() {
          var noticeList = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).clone(this.noticeList);
          return noticeList;
        }
        /** 更新活动中心配置数据 */


        updateActivityCenterData(body) {
          if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).table_isEmpty(body)) {
            return;
          }

          this.atyList = body.activity.sort((a, b) => {
            return Number(b.sort) - Number(a.sort);
          }) || [];
          this.noticeList = body.notice.sort((a, b) => {
            return Number(b.sort) - Number(a.sort);
          }) || [];
          this.atyList.forEach((data, index) => {
            this.__User.RedDot.update_Activity_NormalRed(data, true);
          });
          this.noticeList.forEach((data, index) => {
            this.__User.RedDot.update_Activity_NoticeRed(data, true);
          });

          if (this.atyList.length == 0) {
            this.__User.RedDot.update_Activity_NormalRed(null);
          }

          if (this.noticeList.length == 0) {
            this.__User.RedDot.update_Activity_NoticeRed(null);
          }
        }
        /**检测用户是否可领取桌面进入大厅的奖励 */


        checkUserReceiveInToByDesk() {
          var activity_id = "";

          if ((_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
            error: Error()
          }), Utils) : Utils).table_isEmpty(this.atyData)) {
            return;
          }

          try {
            this.atyData.forEach(item => {
              if (item['is_jump']) {
                // 获取跳转场景
                var _jumpData = (_crd && Encrypt === void 0 ? (_reportPossibleCrUseOfEncrypt({
                  error: Error()
                }), Encrypt) : Encrypt).JsonDecode(item['jump_code']) || {};

                var _jumpCmd = Number(_jumpData['cmd']) || 0;

                var mallScene = _jumpData['tag'] || 0; // 存 删 查 key

                var key = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                  error: Error()
                }), Utils) : Utils).string_format((_crd && StoreKey === void 0 ? (_reportPossibleCrUseOfStoreKey({
                  error: Error()
                }), StoreKey) : StoreKey).USER_REWARD_BY_DESK, this.__User.getUserMid()); // 添加到桌面

                if (_jumpCmd == (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
                  error: Error()
                }), GConstants) : GConstants).JumpViewConf.POS_ACT_DESK_SIGN_POS_ACT_SPECIALGIFT && mallScene == (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
                  error: Error()
                }), GConstants) : GConstants).JumpViewConf.POS_ACT_DESK_TAG) {
                  if ((_crd && Platform === void 0 ? (_reportPossibleCrUseOfPlatform({
                    error: Error()
                  }), Platform) : Platform).isWXPlatform()) {
                    var referrerInfo = (_crd && Platform === void 0 ? (_reportPossibleCrUseOfPlatform({
                      error: Error()
                    }), Platform) : Platform).AppEnterOptions;

                    if (Number(referrerInfo['scene']) == (_crd && GConstants === void 0 ? (_reportPossibleCrUseOfGConstants({
                      error: Error()
                    }), GConstants) : GConstants).AppLunchScene["1023"]) {
                      console.log('从添加桌面进入了:', referrerInfo['scene'], this.__User.getUserMid()); // 判断时间是否允许领 允许从本地删除

                      var allowShareTime = Number(item['limit_time']) * 24 * 60 * 60;
                      var startTime = new (_crd && CountTime === void 0 ? (_reportPossibleCrUseOfCountTime({
                        error: Error()
                      }), CountTime) : CountTime)();

                      if (this._allowShareTime - (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                        error: Error()
                      }), Utils) : Utils).time() > allowShareTime) {
                        (_crd && LocalStorage === void 0 ? (_reportPossibleCrUseOfLocalStorage({
                          error: Error()
                        }), LocalStorage) : LocalStorage).remove(key); // 关闭计时

                        startTime.Stop();
                      }

                      var _uid = (_crd && LocalStorage === void 0 ? (_reportPossibleCrUseOfLocalStorage({
                        error: Error()
                      }), LocalStorage) : LocalStorage).get(key, 0); // 不存在就去发奖


                      if (!_uid) {
                        activity_id = item['activity_id']; // 发奖之后开始计时

                        startTime.StartTime = 0;
                        startTime.Start();
                        this._allowShareTime = startTime.StartTime;
                        (_crd && LocalStorage === void 0 ? (_reportPossibleCrUseOfLocalStorage({
                          error: Error()
                        }), LocalStorage) : LocalStorage).set(key, this.__User.getUserMid());
                      }
                    }

                    throw new Error("\u83B7\u53D6\u5230\u4E86\u5F53\u524D\u7684\u573A\u666F" + referrerInfo['scene']);
                  } else {
                    var _key = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                      error: Error()
                    }), Utils) : Utils).string_format((_crd && StoreKey === void 0 ? (_reportPossibleCrUseOfStoreKey({
                      error: Error()
                    }), StoreKey) : StoreKey).USER_REWARD_BY_DESK, this.__User.getUserMid());

                    var _uid2 = (_crd && LocalStorage === void 0 ? (_reportPossibleCrUseOfLocalStorage({
                      error: Error()
                    }), LocalStorage) : LocalStorage).get(_key, 0);

                    console.log('_uid', 2503647, _uid2, !_uid2, this.__User.getUserMid()); // 不存在就去发奖

                    if (!_uid2) {
                      activity_id = item['activity_id']; // 缓存第一次领奖成功的uid

                      console.log('调用了添加桌面成功去发奖');
                      var key_uid = (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
                        error: Error()
                      }), Utils) : Utils).string_format((_crd && StoreKey === void 0 ? (_reportPossibleCrUseOfStoreKey({
                        error: Error()
                      }), StoreKey) : StoreKey).USER_REWARD_BY_DESK, this.__User.getUserMid());
                      (_crd && LocalStorage === void 0 ? (_reportPossibleCrUseOfLocalStorage({
                        error: Error()
                      }), LocalStorage) : LocalStorage).set(key_uid, this.__User.getUserMid());
                    }
                  } //如果是第一次就领取奖励


                  throw new Error("\u83B7\u53D6\u5230\u4E86\u53D1\u5956id" + item['activity_id']);
                }
              }
            });
          } catch (err) {
            console.log('error:', err);
          }

          return activity_id;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=c7e0aadc1e34633ee8de33d95770050159f82fa5.js.map