/** 
 * Name = AppEvent
 * URL = db://assets/config/AppEvent.ts
 * Time = Sat Apr 02 2022 17:47:24 GMT+0800 (中国标准时间)
 * Author = xueya
 * 事件定义
 */
//全局唯一
let AppEventID = 0

const key = "FXJ"
/** 获取一个新的事件ID */
export const GetAppEventID = function (): string {
    AppEventID = AppEventID + 1
    return (key + "_" + AppEventID.toString())
}

/** 系统事件配置 */
export class AppEvent {
    /** ** --------系统事件------------ */
    /** 程序生命周期(场景模块的过度) */
    static SYS_APP_LIFE = GetAppEventID();
    /** 前后台事件 */
    static SYS_SHOW_OR_HIDE = GetAppEventID();
    /** 网络名称改变 */
    static SYS_NET_CHANGE_NAME = GetAppEventID();
    /** 网络状态改变*/
    static SYS_NET_CHANGE_STATE = GetAppEventID();
    /** 窗口适配*/
    static SYS_WINDOW_ADAPTIVE = GetAppEventID();
    /** 窗口尺寸改变*/
    static SYS_WINDOW_CHANGE = GetAppEventID();
    /** 本地资源加载 */
    static SYS_RELOADD_LOCAL = GetAppEventID();
    /** 远端资源加载 */
    static SYS_RELOADD_REMOTE = GetAppEventID();
    /** 清理资源记录 */
    static SYS_RELOADD_RECORD_REMOVE = GetAppEventID();

    /** 播放上次播放的音乐 */
    static SYS_PLAY_MUSIC_LAST = GetAppEventID();
    /** 播放音乐 */
    static SYS_PLAY_MUSIC = GetAppEventID();
    /** 播放音效 */
    static SYS_PLAY_EFFECT = GetAppEventID();
    /** 停止播放音乐 */
    static SYS_STOP_PLAY_MUSIC = GetAppEventID();
    /** 停止播放音效 */
    static SYS_STOP_PLAY_EFFECT = GetAppEventID();

    /** 提示弹窗 */
    static SYS_POPUP_WINDOW = GetAppEventID();
    /** 网络loading：显示 */
    static SYS_SHOW_NETLOADING = GetAppEventID();
    /** 网络loading：关闭 */
    static SYS_CLOSE_NETLOADING = GetAppEventID();
    /** 吐司提示 */
    static SYS_TOAST_TIP = GetAppEventID();
    /** 播放动画 */
    static SYS_ANI_PLAY = GetAppEventID();
    /** 停止播放动画 */
    static SYS_ANI_STOP = GetAppEventID();

    /** 更新协议解析 */
    static SYS_UPDATE_PROTOBUF = GetAppEventID();
    /** 更新命令绑定映射 */
    static SYS_UPDATE_CMDMAPPING = GetAppEventID();
    /** 更新心跳间隔 */
    static SYS_UPDATE_HEART_TIME = GetAppEventID();
    /** 通知:红点刷新 */
    static NOTIFY_UPDATE_RED_DOT = GetAppEventID();
    /** 通知:菜单刷新 */
    static NOTIFY_UPDATE_MENUS = GetAppEventID();
    /** 分包加载进度显示 */
    static SYS_PACKAGE_LOAD_SHOW = GetAppEventID();
    /** 开始加载分包 */
    static SYS_PACKAGE_LOAD = GetAppEventID();
    /** 添加一个分包加载任务 */
    static SYS_PACKAGE_LOAD_TASK_ADD = GetAppEventID();
    /** 分包加载任务取消 */
    static SYS_PACKAGE_LOAD_TASK_CANCLE = GetAppEventID();
    /** 分包加载取消确认了 */
    static SYS_PACKAGE_LOAD_TASK_CANCLE_SURE = GetAppEventID();

    /** 系统信息显示刷新 */
    static SYS_INFO_REFRESH = GetAppEventID();

    /**------------数据上报----------  */
    /** 更新数据上报的基础信息 */
    static REPORT_UPDATE_LOGGER_REPORT_INFO = GetAppEventID();
    /** 客户端日志上报 */
    static REPORT_CLIENT_LOG = GetAppEventID();
    /** 客户端点击上报 */
    static REPORT_CLIENT_CLICK = GetAppEventID();
    /** 客户端点击事件上报返回 */
    static REPORT_RESP_CLIENT_CLICK = GetAppEventID();
    /** 上报热云 */
    static REPORT_LIBS_REYUN = GetAppEventID();
    /** 支付订单上报 */
    static NET_REQ_REPORT_PAY_ORDER = GetAppEventID();
    /** 支付订单回调 */
    static NET_FORWARD_REPORT_PAY_ORDER = GetAppEventID();

    /**-----------VIEW相关----------- */
    /** 播放动画 */
    static VIEW_PLAY_ANI = GetAppEventID();
    /** 切换场景 */
    static VIEW_SCENE_TO_CHANGE = GetAppEventID();
    /** 设置当前主场景标志 */
    static VIEW_UI_MAIN_UPDATE = GetAppEventID();
    /** 回滚当前主场景标志 */
    static VIEW_UI_MAIN_ROLLBACK = GetAppEventID();

    /** 打开界面 */
    static VIEW_UI_OPEN = GetAppEventID();
    /** 关闭界面 */
    static VIEW_UI_CLOSE = GetAppEventID();
    /** 继承于LayUI的界面被打开了 */
    static VIEW_UI_OPENED = GetAppEventID();
    /** 继承于LayUI的界面被关闭了 */
    static VIEW_UI_CLOSED = GetAppEventID();
    /** 跳转界面 */
    static VIEW_UI_JUMP = GetAppEventID();
    /** 添加3D界面 */
    static VIEW_UI_3D_ADD = GetAppEventID();
    /** 移除3D界面 */
    static VIEW_UI_3D_REMOVE = GetAppEventID();
    /** 获取场景camera */
    static VIEW_UI_3D_GET_CAMERA = GetAppEventID();
    /** 获取场景光照数据 */
    static VIEW_GET_LIGHT_DATA = GetAppEventID();
    /** 获取场景光照数据 */
    static VIEW_GET_LIGHT_DATA_RESP = GetAppEventID();
    /** 设置场景光照数据 */
    static VIEW_SET_LIGHT_DATA = GetAppEventID();

    /**-----------大厅相关----------- */
    /** 显示大厅界面 */
    static HALL_GOTO_SHOW = GetAppEventID();
    /** 大厅显示完成后需要做的操作 */
    static HALL_TODO_SHOW = GetAppEventID();
    /** 快速开始 */
    // static HALL_QUICK_START = GetAppEventID();
    //大厅游戏配置有更新
    static HALL_UPDATE_GAME_CONFIG = GetAppEventID();
    //大厅实时在线人数更新
    static HALL_UPDATE_GAME_ONLINE_PERSON = GetAppEventID();
    //大厅场次人数更新
    static HALL_UPDATE_GAME_LEVEL_PERSON = GetAppEventID();
    //大厅游戏场次信息更新
    static HALL_UPDATE_GAME_LEVEL_TAB = GetAppEventID();

    /**-----------登录相关----------- */

    /** 显示登录界面 */
    static LOGIN_GOTO_SHOW = GetAppEventID();
    /** 给登录界面传参 */
    static LOGIN_SEND_SHOW = GetAppEventID();
    /** 平台返回=登录失败 */
    static LOGIN_PLATFORM_FAIL = GetAppEventID();
    /** 平台返回=获取用户信息成功 */
    static LOGIN_PLATFORM_SUCCESS = GetAppEventID();
    /** 授权按钮创建成功 */
    static PLATFORM_AUTHSETTING_UPDATE = GetAppEventID();
    /** 登录状态改变 */
    static LOGIN_STATE_CHANGE = GetAppEventID();

    /** 凭据信息有更新(Access_token 和 openid) */
    static LOGIN_WX_ACCESS_UPDATE = GetAppEventID();
    /** 隐私政策同意状态有更新 */
    static LOGIN_AGREE_PRIVATE = GetAppEventID();

    /**------------Game 待修改 游戏独有事件不要往里加---------- */

    /** 显示游戏界面 */
    static GAME_GOTO_SHOW = GetAppEventID();
    /** 游戏房间界面再次加载 */
    static ROOM_VIEW_ONLOAD = GetAppEventID();
    /** 重连时预加载资源 */
    static GAME_RECONNECT_RESLOAD = GetAppEventID();

    /** 退出游戏界面 */
    static GAME_GOTO_EXIT = GetAppEventID();

    //游戏升降场变化
    static GAME_ROOM_LEVEL_CHANGE = GetAppEventID();
    //游戏升场
    static GAME_ROOM_LEVEL_UP = GetAppEventID();
    //降场支付
    static GAME_ROOM_LEVEL_DOWN_RECHANGE = GetAppEventID();

    //刷新破产反馈小红点
    static GAME_ROOM_BANKUP_REDDOT_REFRESH = GetAppEventID();
    /** 游戏房间状态改变 */
    static GAME_ROOM_STATE_CHANGE = GetAppEventID();

    /**------------用户相关----------  */
    /** 用户资产有更新 */
    static USER_UPDATE_PROPERTY = GetAppEventID();
    /** 用户信息有更新 */
    static USER_UPDATE_INFO = GetAppEventID();
    /** 用户等级体系有更新 */
    static USER_UPDATE_LEVEL = GetAppEventID();
    /** 用户道具有更新 */
    static USER_UPDATE_PROPS = GetAppEventID();
    /** 用户玩局记录有更新 */
    static USER_UPDATE_GAMERECORD = GetAppEventID();
    /**------------推荐弹窗相关----------*/
    /** 请求推荐弹窗(*核心) */
    static RECOMMEND_POP_GET = GetAppEventID();
    /** 请求推荐弹窗配置返回 */
    static NET_CMD_RESP_POP_ADVERTISE = GetAppEventID();
    /** 设置关闭所有推荐弹窗的回调 */
    static RECOMMEND_POP_SET_CALLBACK = GetAppEventID();
    /** 设置无推荐弹窗时的吐司 */
    static RECOMMEND_POP_SET_NO_TIP = GetAppEventID();
    /** 打开队列弹窗界面 */
    static RECOMMEND_POP_OPEN_VIEW = GetAppEventID();
    /** 清除弹窗队列 */
    static RECOMMEND_POP_CLEAN_QUENE = GetAppEventID();

    /** 弹窗操作结束 */
    static RECOMMEND_POP_FINISH = GetAppEventID();

    /**------------活动相关----------  */

    //新手活动道具有更新
    static ACTIVITY_UPDATE_NEW_PLAYER_GIFT = GetAppEventID();
    /** 限时礼包有更新 */
    static ACTIVITY_UPDATE_HOLIDAYSGIFTPACKAGE = GetAppEventID();
    /** 通知破产成功 */
    static ACTIVITY_BANKUP_BACK = GetAppEventID();
    //商品列表数据有更新
    static ACTIVITY_GOODSLIST_UPDATE = GetAppEventID();

    /**------------第三方----------  */
    /** 即将发起支付 */
    static OTHER_PAY_WILL = GetAppEventID();
    /** 支付结果 */
    static OTHER_PAY_RESULT = GetAppEventID();

    /** 分享指定好友结果 */
    static OTHER_SHTRE_FRIEND_RESULT = GetAppEventID();
    /**----------Socket命令关键字--- */

    //开启连接
    static NET_START_CONNECT = GetAppEventID();
    //开启心跳
    static NET_HEART_BEAT_ONLOADING = GetAppEventID();
    //发送数据
    static NET_SEND_MSG = GetAppEventID();
    //接收到大厅事件
    static NET_RECEIVE_MSG_PHP = GetAppEventID();
    //接收到新大厅事件
    static NET_RECEIVE_MSG_PHPNEW = GetAppEventID();
    //接收到大厅登录成功
    static NET_RECEIVE_LOGIN_SUCCESS = GetAppEventID();
    //接收到用户异地登录
    static NET_RECEIVE_MULTI_DEVICE_LOGIN = GetAppEventID();
    //保持会话
    static NET_RECEIVE_KEEP_ALIVE = GetAppEventID();
    //请求php某个游戏的信息
    static NET_REQ_GAME_PLAY_INFO = GetAppEventID();
    //php返回某个游戏的信息
    static NET_RECEIVE_GAME_PLAY_INFO = GetAppEventID();
    //php推送消息
    static NET_RECEIVE_PHP_PUSH_MSG = GetAppEventID();
    //广播:server返回用户VIP详细信息
    static NET_RECEIVE_PHP_SERVER_USER_VIP_INFO = GetAppEventID();
    //广播支付银币
    static NET_RECEIVE_PHP_PUSH_PAY_MONEY = GetAppEventID();

    //开启登录
    static NET_GOTO_START_LOGIN = GetAppEventID();
    //登录返回
    static NET_FORWARD_USER_LOGIN_CORE = GetAppEventID();
    //请求游客登录
    static NET_REQ_USER_LOGIN_YOUKE = GetAppEventID();
    //游客登录返回
    static NET_FORWARD_USER_LOGIN_YOUKE = GetAppEventID();

    //请求登录初始化
    static NET_REQ_USER_LOGIN_CORE_INIT = GetAppEventID();
    //登录初始化返回
    static NET_FORWARD_USER_LOGIN_CORE_INIT = GetAppEventID();

    //请求更新用户信息
    static NET_REQ_SET_USERINFO = GetAppEventID();
    //更新用户信息返回
    static NET_FORWARD_SET_USERINFO = GetAppEventID();
    //请求经验等级配置
    static NET_REQ_LEVEL_MODEL_CONFIG = GetAppEventID();
    //经验等级配置返回
    static NET_FORWARD_LEVEL_MODEL_CONFIG = GetAppEventID();
    //请求自己的道具信息
    static NET_REQ_PROPS_INFO = GetAppEventID();
    //自己的道具信息返回
    static NET_FORWARD_PROPS_INFO = GetAppEventID();

    //请求大厅游戏位配置
    static NET_REQ_HALL_GAME_CONFIG = GetAppEventID();
    //大厅游戏位配置返回
    static NET_FORWARD_HALL_GAME_CONFIG = GetAppEventID();

    //请求游戏在线人数
    static NET_REQ_ONLINE_PERSON = GetAppEventID();
    //游戏在线人数返回
    static NET_FORWARD_ONLINE_PERSON = GetAppEventID();
    //请求子游戏场次中的房间列表
    static NET_REQ_GAME_LEVEL_ROOM_TAB = GetAppEventID();
    //子游戏场次中的房间列表排序返回
    static NET_FORWARD_GAME_LEVEL_ROOM_TAB = GetAppEventID();
    //请求子游戏场次中人数
    static NET_REQ_GAME_LEVEL_PERSON_COUNT = GetAppEventID();
    //子游戏场次中人数返回
    static NET_FORWARD_GAME_LEVEL_PERSON_COUNT = GetAppEventID();

    //上报子游戏版本号
    static NET_REQ_REPORT_GAME_VERSION = GetAppEventID();
    //子游戏版本号返回
    static NET_FORWARD_REPORT_GAME_VERSION = GetAppEventID();

    //请求游戏房间登录（一键/重连）
    static NET_REQ_ROOM_LOGIN = GetAppEventID();
    /** 请求进房间超时 */
    static NET_CHECK_OUT_TIME_ROOM_JOIN = GetAppEventID();
    /** 停止检测进房间超时 */
    static NET_STOP_CHECK_OUT_TIME_ROOM_JOIN = GetAppEventID();

    /*********************礼包与活动*********************/
    //获取破产数据信息
    static NET_REQ_BANKRUPT_CONFIG = GetAppEventID();
    //接收到破产信息返回
    static NET_RESP_BANKRUPT_CONFIG = GetAppEventID();

    //请求新版破产礼包配置
    static NET_REQ_BANKRUPT_GIFT_CONF = GetAppEventID();
    //新版破产礼包配置返回
    static NET_RESP_BANKRUPT_GIFT_CONF = GetAppEventID();

    // //请求破产反馈
    // static NET_REQ_BANKRUPT_FEEDBACK = GetAppEventID();
    // //破产反馈返回
    // static NET_RESP_BANKRUPT_FEEDBACK = GetAppEventID();
    //请求商品列表/详情信息
    static NET_REQ_GOODS_INFO = GetAppEventID();
    //商品信息返回
    static NET_FORWARD_GOODS_INFO = GetAppEventID();

    //请求新手活动信息
    static NET_REQ_NEW_PLAYER_CONFIG = GetAppEventID();
    //新手活动信息返回
    static NET_FORWARD_NEW_PLAYER_CONFIG = GetAppEventID();
    //请求新用户领取邀请奖励列表
    static NET_REQ_NEW_PLAYER_GIFT_LIST = GetAppEventID();
    //新用户领取邀请奖励列表返回
    static NET_FORWARD_NEW_PLAYER_GIFT_LIST = GetAppEventID();
    //请求新手奖励/邀请奖励
    static NET_REQ_NEW_PLAYER_REWARD = GetAppEventID();
    //新手奖励/邀请奖励返回
    static NET_FORWARD_NEW_PLAYER_REWARD = GetAppEventID();
    //请求限时折扣
    static NET_REQ_HOLIDAYS_GIFTPACKAGE = GetAppEventID();
    //限时折扣礼包返回
    static NET_FORWARD_HOLIDAYS_GIFTPACKAGE = GetAppEventID();
    //订单创建返回
    static NET_FORWARD_PAYMENT_ORDER = GetAppEventID();

    /**************************通用协议发送的命令********************** */
    /** 游戏房间登录成功 */
    static NET_RECEIVE_GAME_LOGIN_SUCCESS = GetAppEventID();
    /** 游戏房间重连成功 */
    static NET_RECEIVE_GAME_RECONNECT_SUCCESS = GetAppEventID();
    /** 广播用户登入 */
    static SERVER_BROADCAST_PLAYER_LOGIN = GetAppEventID();
    /** 广播用户登入 */
    static SERVER_BROADCAST_PLAYER_READY = GetAppEventID();

    /** 游戏房间登录失败 */
    static NET_RECEIVE_GAME_LOGIN_FAIL = GetAppEventID();
    /** 退出游戏房间成功 */
    static NET_RECEIVE_GAME_EXIT_ROOM_SUCCESS = GetAppEventID();
    /** 游戏强制结束（游戏中有玩家退出） */
    static NET_RECEIVE_GAME_STOP_PLAYING = GetAppEventID();


    /** 请求:玩家请求中途退出 */
    static NET_REQ_LOGOUT_IN_GAME_TRY = GetAppEventID();
    /** 请求:玩家确定要退出 */
    static NET_REQ_LOGOUT_IN_GAME = GetAppEventID();
    /** 请求:强制踢人 */
    static NET_REQ_LOGOUT_IN_GAME_FORCE = GetAppEventID();
    /** 响应：Server回应退出请求(游戏中退出) */
    static NET_RESP_LOGOUT_IN_GAME = GetAppEventID();
    /** 请求:玩家请求换桌 */
    static NET_REQ_GAME_CHANGE_DESK = GetAppEventID();
    /** 广播:玩家换桌失败 */
    static NET_RECEIVE_GAME_CHANGE_DESK_ERROR = GetAppEventID();

    /** 下发房间信息 */
    static NET_RECEIVE_GAME_ROOM_INFO = GetAppEventID();
    /** server通知准备相关信息 */
    static NET_RECEIVE_GAME_READY_INFO = GetAppEventID();

    /** 广播:玩家进入 */
    static NET_RECEIVE_GAME_PLAYER_INTO = GetAppEventID();
    /** 广播:玩家退出 */
    static NET_RECEIVE_GAME_PLAYER_LOGOUT = GetAppEventID();

    /** 请求:玩家请求准备 */
    static NET_REQ_PLAYER_READY = GetAppEventID();
    /** 广播:玩家准备 */
    static NET_RECEIVE_GAME_PLAYER_READY = GetAppEventID();

    /** 升降场信息 */
    static NET_RECEIVE_ROOM_LEVEL_UP = GetAppEventID();
    /** 请求:玩家发送聊天 */
    static NET_REQ_GAME_USER_CHAT = GetAppEventID();
    /** 广播: 聊天 */
    static NET_RECEIVE_GAME_USER_CHAT = GetAppEventID();
    /** 请求:玩家发送表情 */
    static NET_REQ_GAME_USER_FACE = GetAppEventID();
    /** 广播: 表情 */
    static NET_RECEIVE_GAME_USER_FACE = GetAppEventID();
    /** 请求:玩家请求托管或取消托管 */
    static NET_REQ_GAME_USER_AI = GetAppEventID();
    /** 广播:玩家托管 */
    static NET_RECEIVE_GAME_PLAYER_AI = GetAppEventID();
    /** 通知:恭喜获得 */
    static NOTIFY_GONGXIHUODE_SHOW = GetAppEventID();
    /** 通知:分享配置有更新 */
    static NOTIFY_SHARE_CHANGE = GetAppEventID();
    /** 通知:兑换结果 */
    static NOTIFY_EXCHANGE_RESULT = GetAppEventID();
    /** 请求破产次数 */
    static NET_REQ_BANKRUPT_COUNT = GetAppEventID();
    /** 破产次数返回 */
    static NET_RESP_BANKRUPT_COUNT = GetAppEventID();
    /** 破产文案 */
    static NET_FORWARD_BANKRUPT_TOAST = GetAppEventID();
    /** 请求破产 */
    static NET_REQ_BANKRUPT = GetAppEventID();
    /** 破产返回 */
    static NET_RESP_BANKRUPT = GetAppEventID();

    /** *******************分享******************** */
    /** 请求获取分享配置 */
    static NET_REQ_SHARE_CONFIG = GetAppEventID();
    /** 请求获取分享配置返回 */
    static NET_RESP_SHARE_CONFIG = GetAppEventID();
    /** 拉取用户背包数据 */
    static NET_CMD_REQ_USER_BACKPACK = GetAppEventID();
    /** 拉取用户背包数据返回 */
    static NET_CMD_RESP_USER_BACKPACK = GetAppEventID();
    /** 请求分享领奖 */
    static NET_REQ_SHARE_AWARD = GetAppEventID();
    /** 请求分享领奖返回 */
    static NET_RESP_SHARE_AWARD = GetAppEventID();

    /** 请求看视频领奖 */
    static NET_REQ_ADS_AWARD = GetAppEventID();
    /** 请求看视频领奖返回 */
    static NET_RESP_ADS_AWARD = GetAppEventID();
    /** 请求添加桌面领奖 */
    static NET_REQ_ADDDESK_AWARD = GetAppEventID();
    /** 添加桌面领取奖励返回 */
    static NET_RESP_ADDDESK_AWARD = GetAppEventID();

    /** 通知:商城商品有更新 */
    static NOTIFY_GOODS_CHANGE = GetAppEventID();

    /** 商城兑换 */
    static NET_CMD_REQ_BUY_MALL_PROP = GetAppEventID();
    /** 商城兑换返回 */
    static NET_CMD_RESP_BUY_MALL_PROP = GetAppEventID();


    /** 商品列表数据有更新 */
    static ACTIVITY_SHOPLIST_UPDATE = GetAppEventID();

    //请求签到配置数据
    static NET_REQ_SIGNIN_CONFIG = GetAppEventID();
    //请求签到配置数据返回
    static NET_FORWARD_SIGNIN_CONFIG = GetAppEventID();
    //请求签到领奖
    static NET_REQ_SIGNIN_AWARD = GetAppEventID();
    //请求签到领奖返回
    static NET_FORWARD_SIGNIN_AWARD = GetAppEventID();

    //请求连续签到领奖
    static NET_REQ_SIGNIN_CONTINU_AWARD = GetAppEventID();
    //请求连续签到领奖返回
    static NET_FORWARD_SIGNIN_CONTINU_AWARD = GetAppEventID();

    //签到配置数据更新
    static ACTIVITY_UPDATE_SIGNIN_CONF = GetAppEventID();

    /** 请求更新信箱 */
    static NET_CMD_REQ_WATCH = GetAppEventID();
    /** 更新信箱返回 */
    static NET_CMD_RESP_WATCH = GetAppEventID();

    /** 请求删除邮箱数据 */
    static NET_CMD_REQ_DELETE_WATCH = GetAppEventID();
    /** 请求删除邮箱数据返回 */
    static NET_CMD_RESP_DELETE_WATCH = GetAppEventID();

    /** 请求修改邮箱数据 */
    static NET_CMD_REQ_MODIFY_WATCH = GetAppEventID();
    /** 请求修改邮箱数据返回 */
    static NET_CMD_RESP_MODIFY_WATCH = GetAppEventID();

    /** 请求获取指定信箱数据 */
    static NET_CMD_REQ_PULL_WATCH = GetAppEventID();
    /** 请求获取指定信箱数据返回 */
    static NET_CMD_RESP_PULL_WATCH = GetAppEventID();
    /** 通知:邮件有更新 */
    static NOTIFY_EMAIL_CHANGE = GetAppEventID();
    /** 请求邮件奖励 */
    static NET_REQ_EMAIL_REWARD = GetAppEventID();
    /** 响应邮件奖励返回 */
    static NET_RESP_EMAIL_REWARD = GetAppEventID();
    /** 请求是否更新配置 */
    static NET_REQ_GOODS_BASE = GetAppEventID();
    /** 响应是否更新配置 */
    static NET_RESP_GOODS_BASE = GetAppEventID();

    /** 广播游戏结束 */
    static BROADCAST_GAME_OVER = GetAppEventID();
    /** 广播开始游戏 */
    static BROADCAST_GAME_START = GetAppEventID();
    /** 广播房间信息 */
    static BROADCAST_ROOM_INFO = GetAppEventID();
    /** *******************活动中心******************** */
    /** 获取活动中心配置数据 */
    static NET_CMD_REQ_TASK_ACT_CONFIG = GetAppEventID();
    /** 获取活动中心配置数据返回 */
    static NET_CMD_RESP_TASK_ACT_CONFIG = GetAppEventID();

    /** 请求首充礼包 */
    static NET_REQ_FIRST_PAY_CONFIG = GetAppEventID();
    /** 首充礼包返回 */
    static NET_RESP_FIRST_PAY_CONFIG = GetAppEventID();
    /** 首充礼包数据有更新 */
    static ACTIVITY_UPDATE_FIRSTPAY_CONF = GetAppEventID();

}

