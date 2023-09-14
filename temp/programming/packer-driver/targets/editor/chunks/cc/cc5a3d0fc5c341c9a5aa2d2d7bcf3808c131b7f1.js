System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, GameTxt;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "040f2JJOGpJypZ3FPD4VzaA", "GameTxt", undefined);

      /**
       * Name : GameTxt
       * URL : db://assets/config/GameTxt.ts
       * Time : Sat Apr 02 2022 17:47:24 GMT+0800 (中国标准时间)
       * Author : xueya
       * App内文本定义
       */
      _export("GameTxt", GameTxt = {
        appCommonError: "加载出错",
        netWorkReconnect: "正在重连中",
        netWorkErrorWillReconnect: "网络连接错误,即将重连",
        netWorkError: "网络错误",
        netWorkTimeout: "网络连接超时",
        netWorkDisconnected: "网络已断开",
        netWorkJsonError: "格式错误",
        netWorkErrorTips: "网络无连接，请检查您的网络设置",
        networkReqError: "请求服务器失败",
        phpError1_1: "设备号或机器码参数不存在或存在问题",
        phpError1_2: "手机号参数不存在或存在问题",
        phpError2_1: "存储失败",
        phpError3_1: "手机与设备号&机器码不匹配. 客户端进行短信方式验证",
        phpError3_2: "验证码发送失败",
        phpError3_3: "验证码验证失败",
        phpError3_5: "密码验证失败",
        phpError3_6: "token验证失败",
        phpError4_1: "账户验证失败",
        phpError4_2: "添加短信支付信息失败",
        phpError4_3: "未找到渠道",
        phpError4_4: "未找到商品编号",
        phpError4_5: "支付中心挂啦",
        phpError4_6: "支付达到限额",
        phpError5_1: "账户验证失败",
        phpError5_2: "用户不存在",
        phpError5_3: "上传的文件类型非法",
        phpError5_4: "旧密码不正确",
        phpError5_5: "密码修改错误",
        phpError6_1: "举报达到上限",
        phpError6_2: "某条理由举报达到上限",
        phpError6_3: "举报失败",
        phpError7_1: "资料未完善",
        phpError7_2: "已经领奖",
        phpError7_3: "领奖失败",
        phpError10_1: "已经领奖",
        phpError10_2: "领奖失败",
        phpError11_1: "操作失败",
        //登录
        loginCheckAgree: "点击勾选下方复选框协议内容才可进入游戏！",
        loginContentTips: ["游戏加载中..", "请耐心等待...", "努力是为了变更好", "网络有一点点慢"],
        login_success: "登录成功",
        login_reconnect_success: "重连成功",
        login_goto_room: "场景加载中",
        //进入游戏房间
        login_room_reconnect: "正在重新连接...",
        //进入游戏房间
        login_goto_room_no_game: "重连进入游戏失败，当前版本不支持",
        //大厅场次
        hall_level_online_cnt: "在线:",
        hall_game_not_have: "游戏未开放",
        hall_leave_not_have: "当前场次未开放",
        hall_leave_not_data: "当前场次不支持操作",
        //进入房间
        hall_goto_game_too_money: "超出银币上限，请去更高的场次",
        hall_goto_game_money_not_enough: "进入房间失败,当前余额不足！",
        hall_goto_game_no_gameid: "进入游戏失败,该游戏不存在！",
        hall_goto_game_no_levelList: "进入房间失败,未找到房间",
        hall_goto_game_out_time: "房间请求超时",
        //限时折扣
        activity_holidaysgift_time: "活动时间:",
        activity_outtime: "活动已结束",
        //破产礼包
        bankup_gift_title_1: "购买优惠礼包，再来战个痛快！",
        bankup_gift_title_2: "您可以直接去保险箱取钱或是购买优惠礼包",
        bankup_gift_title_3: "可以直接领取破产补助或是购买优惠礼包",
        //货币
        unit_k: "K",
        unit_m: "M",
        unit_b: "B",
        unit_t: "T",
        copySuccess: "复制成功",
        //支付提示
        pay_creater_order: "正在创建订单",
        pay_success: "购买成功!",
        pay_failed: "购买失败!",
        pay_fail_no_goods: "支付失败,商品信息不存在",
        pay_fail_ways_not_support: "err:不支持的支付类型",
        pay_fail_platform_not_support: "err:不支持的支付平台",
        pay_fail_platform_error: "err:支付状态异常",
        pay_error_codelist: {
          [1000]: "code:参数错误",
          [1003]: "商户ID失效,请联系客服处理",
          [-15001]: "code:缺少参数",
          [-15002]: "code:错误的支付参数",
          [-15003]: "支付失败,请不要重复支付",
          [-15004]: "err:后台错误",
          [-15005]: "code:无支付权限",
          [-15006]: "不支持的货币类型",
          [-15007]: "err:订单已支付",
          [-15009]: "由于健康系统限制，本次支付已超过限额",
          [1016]: "Fail, 系统繁忙，请稍后再试",
          [-1]: "err:支付系统出现了一点问题.",
          [-2]: "支付已取消！",
          [1]: "支付已取消！",
          [2]: "err:支付操作过于频繁",
          [3]: "err:暂不支持该手机型号",
          [4]: "err:支付环境异常"
        },
        //通用
        common_window_titlt: "温馨提示",
        common_btn_queding: "确定",
        common_btn_cancle: "取消",
        //破产
        bank_receive_success: "领取救济金{0}银币成功！",
        bank_receive_fail: "领取失败，您当前银币不符合救济标准",
        bankruptErrTips0: "破产补助领取失败",
        bankruptErrTips1: "大哥，您的破产补助金已经领完了！",
        bankruptErrTips2: "亲，您的破产补助金已经领完了哦！",
        bankruptErrTips3: "抢钱啦，抢钱啦。。。大侠，小神还没到上班时间，过了这个倒计时再来找我吧!",
        bankruptErrTips4: "破产补助领取失败",
        //微信拒绝授权提示
        wx_authsetting_not_allow_userinfo: "《博雅打滚子》是一款休闲游戏，需要您的用户信息登录游戏。",
        //分享文案
        share_wx_friends_txt: "原汁原味，正宗大连打滚子。",
        share_wx_pyq_txt: "原汁原味，正宗大连打滚子。",
        // 玩牌规则
        kechiRule: "玩法说明：\n斗地主是一种三人游戏，对局开始通过叫抢地主决定阵营，阵营双方对战，先出完牌的一方获胜。\n地主拥有首出权，玩家按照逆时针方向跟牌，玩家可选择用更大的牌进行跟牌或不出。\n牌型说明：\n火箭（2倍）：双王\n炸弹（2倍）：2222（4张点数相同的牌组成）\n单牌：8\n对子：88\n三张：888三带单：888+6\n三带对：888+66\n顺子：34567（5张或以上点数相连的牌组成，2和双王除外）\n连对：334455（3对或以上连续对牌组成，2和双王除外）\n飞机：555666（2个或以上连续3张组成）\n飞机带翅膀：飞机+同数量的单牌 或 飞机+同数量对牌\n四带二：4张（点数相同的牌）+两张单牌 或者 4张+两个对牌\n牌型大小：\n火箭＞炸弹＞其他牌型",
        bukechiRule: "玩法说明：\n不洗牌玩法是在经典玩法上做优化，在每局牌结束后，不会重新洗牌，再通过切牌按照顺序发给玩家，除此之外与经典玩法规则完全相同。\n玩法特点：\n1.抓到炸弹的几率变大\n2.手牌更加整齐\n3.对局时间缩短\n4.炸弹多，游戏更刺激",
        //异地登录提示
        remote_login: '检测到您的账号在其他设备登录，\n请检测账号安全',
        //邮件删除提示
        mail_delete_tips: "确定要删除邮件吗？(删除后不可恢复)",
        //道具已领取提示
        item_has_receive: "您已领取该奖励",
        //道具领取失败
        item_receive_fail: "领取失败",
        //道具领取成功
        item_receive_success: "领取成功",
        //分享失败提示语
        shareFailMsg: "请分享到微信群后再来领奖哦",
        //连续分享同一个好友提示语
        shareFriendFailMsg: "请分享给不同的微信群/好友哦"
      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=cc5a3d0fc5c341c9a5aa2d2d7bcf3808c131b7f1.js.map