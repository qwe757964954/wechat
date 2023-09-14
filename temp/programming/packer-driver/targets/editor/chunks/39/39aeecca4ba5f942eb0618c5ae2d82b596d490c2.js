System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, ReportConfig;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "bf433A8rs1J0YNqiOJ7c0tK", "ReportConfig", undefined);

      /**
       * 点击上报配置
       * 更新模块点击事件定义
       * 大厅：			10001 - 11000 
       * 选场界面：		11001 - 12000
       * 商城：  			12001 - 13000
       * 个人信息：		13001 - 14000
       * 设置：			14001 - 15000
       * 分享：			15001 - 16000
       * 大厅签到：		16001 - 17000
       * 大厅礼包：		17001 - 18000
       * 角色：		 	18001 - 19000
       * 任务：		 	19001 - 20000
       * 
       * 比赛：			20001 - 30000
       * 子游戏：		    30001 - 40000
       * 好友：			40001 - 41000
       * 活动中心          50001 - 51000
       */
      _export("ReportConfig", ReportConfig = {
        /** 大厅模块*/

        /** 大厅模块*/
        hall_1: 1505,
        //大厅-点击头像
        hall_2: 1528,
        //大厅-点击银币
        hall_3: 1520,
        //大厅-点击头像
        hall_4: 1505,
        //大厅-点击客服
        hall_5: 1515,
        //大厅-点击设置
        hall_6: 1505,
        //大厅-点击头像
        hall_7: 1518,
        //大厅-点击消息
        hall_8: 1508,
        //大厅-点击商城
        hall_9: 1509,
        //大厅-点击活动
        hall_10: 1513,
        //大厅-点击签到

        /** 商城模块*/
        mall_1: 12001,
        //商城-点击银币tab
        mall_2: 12002,
        //商城-点击道具tab
        mall_3: 12003,
        //商城-点击点击具体商品
        mall_4: 12004,
        //商城-页面展示次数

        /** 活动中心*/
        activityCenter_1: 50001,
        //活动中心-点击活动tab
        activityCenter_2: 50002,
        //活动中心-点击公告tab
        activityCenter_3: 50003,
        //活动中心-活动页各活动展示次数
        activityCenter_4: 50004,
        //活动中心-活动页-展示活动-点击转跳
        activityCenter_5: 50005,
        //活动中心-展示活动-点击调起商品
        //设置51000-52000
        setting_1: 51001,
        //游戏设置
        setting_2: 51002,
        //关于版本
        setting_3: 51003,
        //关于版本-货币声明
        setting_4: 4,
        //关于版本-隐私政策
        setting_5: 3,
        //关于版本-服务协议
        setting_6: 51006,
        //关于版本-意见反馈
        setting_7: 51007,
        //关于版本-玩法规则
        //个人信息 52001-52999
        userInfo_1: 3709,
        //个人信息关闭按钮
        userInfo_2: 3704,
        //个人信息切换性别
        userInfo_3: 52001,
        //个人信息复制按钮
        userInfo_4: 52002,
        //个人信息点击微信同步
        //特价礼包 53001-53999
        gift_holiday_1: 53001,
        //icon点击
        gift_holiday_2: 53002,
        //页面展示次数
        gift_holiday_3: 53003,
        //选择礼包
        gift_holiday_12: 53004 //点击购买按钮

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=39aeecca4ba5f942eb0618c5ae2d82b596d490c2.js.map