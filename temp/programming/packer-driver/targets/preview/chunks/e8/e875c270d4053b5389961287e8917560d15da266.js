System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, AppEvent, _crd, AppEventID, key, GetAppEventID;

  _export("AppEvent", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ad60eT0UeRGq51ZIEvVCVd2", "AppEvent", undefined);

      /** 
       * Name = AppEvent
       * URL = db://assets/config/AppEvent.ts
       * Time = Sat Apr 02 2022 17:47:24 GMT+0800 (中国标准时间)
       * Author = xueya
       * 事件定义
       */
      //全局唯一
      AppEventID = 0;
      key = "FXJ";
      /** 获取一个新的事件ID */

      _export("GetAppEventID", GetAppEventID = function GetAppEventID() {
        AppEventID = AppEventID + 1;
        return key + "_" + AppEventID.toString();
      });
      /** 系统事件配置 */


      _export("AppEvent", AppEvent = class AppEvent {});

      AppEvent.SYS_APP_LIFE = GetAppEventID();
      AppEvent.SYS_SHOW_OR_HIDE = GetAppEventID();
      AppEvent.SYS_NET_CHANGE_NAME = GetAppEventID();
      AppEvent.SYS_NET_CHANGE_STATE = GetAppEventID();
      AppEvent.SYS_WINDOW_ADAPTIVE = GetAppEventID();
      AppEvent.SYS_WINDOW_CHANGE = GetAppEventID();
      AppEvent.SYS_RELOADD_LOCAL = GetAppEventID();
      AppEvent.SYS_RELOADD_REMOTE = GetAppEventID();
      AppEvent.SYS_RELOADD_RECORD_REMOVE = GetAppEventID();
      AppEvent.SYS_PLAY_MUSIC_LAST = GetAppEventID();
      AppEvent.SYS_PLAY_MUSIC = GetAppEventID();
      AppEvent.SYS_PLAY_EFFECT = GetAppEventID();
      AppEvent.SYS_STOP_PLAY_MUSIC = GetAppEventID();
      AppEvent.SYS_STOP_PLAY_EFFECT = GetAppEventID();
      AppEvent.SYS_POPUP_WINDOW = GetAppEventID();
      AppEvent.SYS_SHOW_NETLOADING = GetAppEventID();
      AppEvent.SYS_CLOSE_NETLOADING = GetAppEventID();
      AppEvent.SYS_TOAST_TIP = GetAppEventID();
      AppEvent.SYS_ANI_PLAY = GetAppEventID();
      AppEvent.SYS_ANI_STOP = GetAppEventID();
      AppEvent.SYS_UPDATE_PROTOBUF = GetAppEventID();
      AppEvent.SYS_UPDATE_CMDMAPPING = GetAppEventID();
      AppEvent.SYS_UPDATE_HEART_TIME = GetAppEventID();
      AppEvent.NOTIFY_UPDATE_RED_DOT = GetAppEventID();
      AppEvent.NOTIFY_UPDATE_MENUS = GetAppEventID();
      AppEvent.SYS_PACKAGE_LOAD_SHOW = GetAppEventID();
      AppEvent.SYS_PACKAGE_LOAD = GetAppEventID();
      AppEvent.SYS_PACKAGE_LOAD_TASK_ADD = GetAppEventID();
      AppEvent.SYS_PACKAGE_LOAD_TASK_CANCLE = GetAppEventID();
      AppEvent.SYS_PACKAGE_LOAD_TASK_CANCLE_SURE = GetAppEventID();
      AppEvent.SYS_INFO_REFRESH = GetAppEventID();
      AppEvent.REPORT_UPDATE_LOGGER_REPORT_INFO = GetAppEventID();
      AppEvent.REPORT_CLIENT_LOG = GetAppEventID();
      AppEvent.REPORT_CLIENT_CLICK = GetAppEventID();
      AppEvent.REPORT_LIBS_REYUN = GetAppEventID();
      AppEvent.NET_REQ_REPORT_PAY_ORDER = GetAppEventID();
      AppEvent.NET_FORWARD_REPORT_PAY_ORDER = GetAppEventID();
      AppEvent.VIEW_PLAY_ANI = GetAppEventID();
      AppEvent.VIEW_SCENE_TO_CHANGE = GetAppEventID();
      AppEvent.VIEW_UI_MAIN_UPDATE = GetAppEventID();
      AppEvent.VIEW_UI_MAIN_ROLLBACK = GetAppEventID();
      AppEvent.VIEW_UI_OPEN = GetAppEventID();
      AppEvent.VIEW_UI_CLOSE = GetAppEventID();
      AppEvent.VIEW_UI_OPENED = GetAppEventID();
      AppEvent.VIEW_UI_CLOSED = GetAppEventID();
      AppEvent.VIEW_UI_JUMP = GetAppEventID();
      AppEvent.VIEW_UI_3D_ADD = GetAppEventID();
      AppEvent.VIEW_UI_3D_REMOVE = GetAppEventID();
      AppEvent.HALL_GOTO_SHOW = GetAppEventID();
      AppEvent.HALL_TODO_SHOW = GetAppEventID();
      AppEvent.HALL_UPDATE_GAME_CONFIG = GetAppEventID();
      AppEvent.HALL_UPDATE_GAME_ONLINE_PERSON = GetAppEventID();
      AppEvent.HALL_UPDATE_GAME_LEVEL_PERSON = GetAppEventID();
      AppEvent.HALL_UPDATE_GAME_LEVEL_TAB = GetAppEventID();
      AppEvent.HALL_RECEIVE_BANKRUP_MONEY = GetAppEventID();
      AppEvent.LOGIN_GOTO_SHOW = GetAppEventID();
      AppEvent.LOGIN_SEND_SHOW = GetAppEventID();
      AppEvent.LOGIN_PLATFORM_FAIL = GetAppEventID();
      AppEvent.LOGIN_PLATFORM_SUCCESS = GetAppEventID();
      AppEvent.PLATFORM_AUTHSETTING_UPDATE = GetAppEventID();
      AppEvent.LOGIN_STATE_CHANGE = GetAppEventID();
      AppEvent.LOGIN_WX_ACCESS_UPDATE = GetAppEventID();
      AppEvent.LOGIN_AGREE_PRIVATE = GetAppEventID();
      AppEvent.GAME_GOTO_SHOW = GetAppEventID();
      AppEvent.ROOM_VIEW_ONLOAD = GetAppEventID();
      AppEvent.GAME_RECONNECT_RESLOAD = GetAppEventID();
      AppEvent.GAME_GOTO_EXIT = GetAppEventID();
      AppEvent.GAME_ROOM_LEVEL_CHANGE = GetAppEventID();
      AppEvent.GAME_ROOM_LEVEL_UP = GetAppEventID();
      AppEvent.GAME_ROOM_LEVEL_DOWN_RECHANGE = GetAppEventID();
      AppEvent.GAME_ROOM_BANKUP_REDDOT_REFRESH = GetAppEventID();
      AppEvent.GAME_ROOM_STATE_CHANGE = GetAppEventID();
      AppEvent.USER_UPDATE_PROPERTY = GetAppEventID();
      AppEvent.USER_UPDATE_INFO = GetAppEventID();
      AppEvent.USER_UPDATE_LEVEL = GetAppEventID();
      AppEvent.USER_UPDATE_PROPS = GetAppEventID();
      AppEvent.USER_UPDATE_GAMERECORD = GetAppEventID();
      AppEvent.RECOMMEND_POP_GET = GetAppEventID();
      AppEvent.NET_CMD_RESP_POP_ADVERTISE = GetAppEventID();
      AppEvent.RECOMMEND_POP_SET_CALLBACK = GetAppEventID();
      AppEvent.RECOMMEND_POP_SET_NO_TIP = GetAppEventID();
      AppEvent.RECOMMEND_POP_OPEN_VIEW = GetAppEventID();
      AppEvent.RECOMMEND_POP_CLEAN_QUENE = GetAppEventID();
      AppEvent.RECOMMEND_POP_FINISH = GetAppEventID();
      AppEvent.ACTIVITY_UPDATE_NEW_PLAYER_GIFT = GetAppEventID();
      AppEvent.ACTIVITY_UPDATE_HOLIDAYSGIFTPACKAGE = GetAppEventID();
      AppEvent.ACTIVITY_BANKUP_BACK = GetAppEventID();
      AppEvent.ACTIVITY_GOODSLIST_UPDATE = GetAppEventID();
      AppEvent.OTHER_PAY_WILL = GetAppEventID();
      AppEvent.OTHER_PAY_RESULT = GetAppEventID();
      AppEvent.OTHER_SHTRE_FRIEND_RESULT = GetAppEventID();
      AppEvent.NET_START_CONNECT = GetAppEventID();
      AppEvent.NET_HEART_BEAT_ONLOADING = GetAppEventID();
      AppEvent.NET_SEND_MSG = GetAppEventID();
      AppEvent.NET_RECEIVE_MSG_PHP = GetAppEventID();
      AppEvent.NET_RECEIVE_MSG_PHPNEW = GetAppEventID();
      AppEvent.NET_RECEIVE_LOGIN_SUCCESS = GetAppEventID();
      AppEvent.NET_RECEIVE_MULTI_DEVICE_LOGIN = GetAppEventID();
      AppEvent.NET_RECEIVE_KEEP_ALIVE = GetAppEventID();
      AppEvent.NET_REQ_GAME_PLAY_INFO = GetAppEventID();
      AppEvent.NET_RECEIVE_GAME_PLAY_INFO = GetAppEventID();
      AppEvent.NET_RECEIVE_PHP_PUSH_MSG = GetAppEventID();
      AppEvent.NET_RECEIVE_PHP_SERVER_USER_VIP_INFO = GetAppEventID();
      AppEvent.NET_RECEIVE_PHP_PUSH_PAY_MONEY = GetAppEventID();
      AppEvent.NET_GOTO_START_LOGIN = GetAppEventID();
      AppEvent.NET_FORWARD_USER_LOGIN_CORE = GetAppEventID();
      AppEvent.NET_REQ_USER_LOGIN_YOUKE = GetAppEventID();
      AppEvent.NET_FORWARD_USER_LOGIN_YOUKE = GetAppEventID();
      AppEvent.NET_REQ_USER_LOGIN_CORE_INIT = GetAppEventID();
      AppEvent.NET_FORWARD_USER_LOGIN_CORE_INIT = GetAppEventID();
      AppEvent.NET_REQ_SET_USERINFO = GetAppEventID();
      AppEvent.NET_FORWARD_SET_USERINFO = GetAppEventID();
      AppEvent.NET_REQ_LEVEL_MODEL_CONFIG = GetAppEventID();
      AppEvent.NET_FORWARD_LEVEL_MODEL_CONFIG = GetAppEventID();
      AppEvent.NET_REQ_PROPS_INFO = GetAppEventID();
      AppEvent.NET_FORWARD_PROPS_INFO = GetAppEventID();
      AppEvent.NET_REQ_HALL_GAME_CONFIG = GetAppEventID();
      AppEvent.NET_FORWARD_HALL_GAME_CONFIG = GetAppEventID();
      AppEvent.NET_REQ_HALL_QUICK_START_CONFIG = GetAppEventID();
      AppEvent.NET_FORWARD_HALL_QUICK_START_CONFIG = GetAppEventID();
      AppEvent.NET_REQ_ONLINE_PERSON = GetAppEventID();
      AppEvent.NET_FORWARD_ONLINE_PERSON = GetAppEventID();
      AppEvent.NET_REQ_GAME_LEVEL_ROOM_TAB = GetAppEventID();
      AppEvent.NET_FORWARD_GAME_LEVEL_ROOM_TAB = GetAppEventID();
      AppEvent.NET_REQ_GAME_LEVEL_PERSON_COUNT = GetAppEventID();
      AppEvent.NET_FORWARD_GAME_LEVEL_PERSON_COUNT = GetAppEventID();
      AppEvent.NET_REQ_REPORT_GAME_VERSION = GetAppEventID();
      AppEvent.NET_FORWARD_REPORT_GAME_VERSION = GetAppEventID();
      AppEvent.NET_REQ_ROOM_LOGIN = GetAppEventID();
      AppEvent.NET_CHECK_OUT_TIME_ROOM_JOIN = GetAppEventID();
      AppEvent.NET_STOP_CHECK_OUT_TIME_ROOM_JOIN = GetAppEventID();
      AppEvent.NET_REQ_BANKRUPT_CONFIG = GetAppEventID();
      AppEvent.NET_RESP_BANKRUPT_CONFIG = GetAppEventID();
      AppEvent.NET_REQ_BANKRUPT_GIFT_CONF = GetAppEventID();
      AppEvent.NET_RESP_BANKRUPT_GIFT_CONF = GetAppEventID();
      AppEvent.NET_REQ_GOODS_INFO = GetAppEventID();
      AppEvent.NET_FORWARD_GOODS_INFO = GetAppEventID();
      AppEvent.NET_REQ_NEW_PLAYER_CONFIG = GetAppEventID();
      AppEvent.NET_FORWARD_NEW_PLAYER_CONFIG = GetAppEventID();
      AppEvent.NET_REQ_NEW_PLAYER_GIFT_LIST = GetAppEventID();
      AppEvent.NET_FORWARD_NEW_PLAYER_GIFT_LIST = GetAppEventID();
      AppEvent.NET_REQ_NEW_PLAYER_REWARD = GetAppEventID();
      AppEvent.NET_FORWARD_NEW_PLAYER_REWARD = GetAppEventID();
      AppEvent.NET_REQ_HOLIDAYS_GIFTPACKAGE = GetAppEventID();
      AppEvent.NET_FORWARD_HOLIDAYS_GIFTPACKAGE = GetAppEventID();
      AppEvent.NET_FORWARD_PAYMENT_ORDER = GetAppEventID();
      AppEvent.NET_RECEIVE_GAME_LOGIN_SUCCESS = GetAppEventID();
      AppEvent.NET_RECEIVE_GAME_RECONNECT_SUCCESS = GetAppEventID();
      AppEvent.SERVER_BROADCAST_PLAYER_LOGIN = GetAppEventID();
      AppEvent.SERVER_BROADCAST_PLAYER_READY = GetAppEventID();
      AppEvent.NET_RECEIVE_GAME_LOGIN_FAIL = GetAppEventID();
      AppEvent.NET_RECEIVE_GAME_EXIT_ROOM_SUCCESS = GetAppEventID();
      AppEvent.NET_RECEIVE_GAME_STOP_PLAYING = GetAppEventID();
      AppEvent.NET_REQ_LOGOUT_IN_GAME_TRY = GetAppEventID();
      AppEvent.NET_REQ_LOGOUT_IN_GAME = GetAppEventID();
      AppEvent.NET_REQ_LOGOUT_IN_GAME_FORCE = GetAppEventID();
      AppEvent.NET_RESP_LOGOUT_IN_GAME = GetAppEventID();
      AppEvent.NET_REQ_GAME_CHANGE_DESK = GetAppEventID();
      AppEvent.NET_RECEIVE_GAME_CHANGE_DESK_ERROR = GetAppEventID();
      AppEvent.NET_RECEIVE_GAME_ROOM_INFO = GetAppEventID();
      AppEvent.NET_RECEIVE_GAME_READY_INFO = GetAppEventID();
      AppEvent.NET_RECEIVE_GAME_PLAYER_INTO = GetAppEventID();
      AppEvent.NET_RECEIVE_GAME_PLAYER_LOGOUT = GetAppEventID();
      AppEvent.NET_REQ_PLAYER_READY = GetAppEventID();
      AppEvent.NET_RECEIVE_GAME_PLAYER_READY = GetAppEventID();
      AppEvent.NET_RECEIVE_ROOM_LEVEL_UP = GetAppEventID();
      AppEvent.NET_REQ_GAME_USER_CHAT = GetAppEventID();
      AppEvent.NET_RECEIVE_GAME_USER_CHAT = GetAppEventID();
      AppEvent.NET_REQ_GAME_USER_FACE = GetAppEventID();
      AppEvent.NET_RECEIVE_GAME_USER_FACE = GetAppEventID();
      AppEvent.NET_REQ_GAME_USER_AI = GetAppEventID();
      AppEvent.NET_RECEIVE_GAME_PLAYER_AI = GetAppEventID();
      AppEvent.NOTIFY_GONGXIHUODE_SHOW = GetAppEventID();
      AppEvent.NOTIFY_SHARE_CHANGE = GetAppEventID();
      AppEvent.NOTIFY_EXCHANGE_RESULT = GetAppEventID();
      AppEvent.NET_REQ_BANKRUPT_COUNT = GetAppEventID();
      AppEvent.NET_RESP_BANKRUPT_COUNT = GetAppEventID();
      AppEvent.NET_FORWARD_BANKRUPT_TOAST = GetAppEventID();
      AppEvent.NET_REQ_BANKRUPT = GetAppEventID();
      AppEvent.NET_RESP_BANKRUPT = GetAppEventID();
      AppEvent.NET_REQ_SHARE_CONFIG = GetAppEventID();
      AppEvent.NET_RESP_SHARE_CONFIG = GetAppEventID();
      AppEvent.NET_CMD_REQ_USER_BACKPACK = GetAppEventID();
      AppEvent.NET_CMD_RESP_USER_BACKPACK = GetAppEventID();
      AppEvent.NET_REQ_SHARE_AWARD = GetAppEventID();
      AppEvent.NET_RESP_SHARE_AWARD = GetAppEventID();
      AppEvent.NET_REQ_ADS_AWARD = GetAppEventID();
      AppEvent.NET_RESP_ADS_AWARD = GetAppEventID();
      AppEvent.NET_REQ_ADDDESK_AWARD = GetAppEventID();
      AppEvent.NET_RESP_ADDDESK_AWARD = GetAppEventID();
      AppEvent.NOTIFY_GOODS_CHANGE = GetAppEventID();
      AppEvent.NET_CMD_REQ_BUY_MALL_PROP = GetAppEventID();
      AppEvent.NET_CMD_RESP_BUY_MALL_PROP = GetAppEventID();
      AppEvent.ACTIVITY_SHOPLIST_UPDATE = GetAppEventID();
      AppEvent.NET_REQ_SIGNIN_CONFIG = GetAppEventID();
      AppEvent.NET_FORWARD_SIGNIN_CONFIG = GetAppEventID();
      AppEvent.NET_REQ_SIGNIN_AWARD = GetAppEventID();
      AppEvent.NET_FORWARD_SIGNIN_AWARD = GetAppEventID();
      AppEvent.NET_REQ_SIGNIN_CONTINU_AWARD = GetAppEventID();
      AppEvent.NET_FORWARD_SIGNIN_CONTINU_AWARD = GetAppEventID();
      AppEvent.ACTIVITY_UPDATE_SIGNIN_CONF = GetAppEventID();
      AppEvent.NET_CMD_REQ_WATCH = GetAppEventID();
      AppEvent.NET_CMD_RESP_WATCH = GetAppEventID();
      AppEvent.NET_CMD_REQ_DELETE_WATCH = GetAppEventID();
      AppEvent.NET_CMD_RESP_DELETE_WATCH = GetAppEventID();
      AppEvent.NET_CMD_REQ_MODIFY_WATCH = GetAppEventID();
      AppEvent.NET_CMD_RESP_MODIFY_WATCH = GetAppEventID();
      AppEvent.NET_CMD_REQ_PULL_WATCH = GetAppEventID();
      AppEvent.NET_CMD_RESP_PULL_WATCH = GetAppEventID();
      AppEvent.NOTIFY_EMAIL_CHANGE = GetAppEventID();
      AppEvent.NET_REQ_EMAIL_REWARD = GetAppEventID();
      AppEvent.NET_RESP_EMAIL_REWARD = GetAppEventID();
      AppEvent.NET_REQ_GOODS_BASE = GetAppEventID();
      AppEvent.NET_RESP_GOODS_BASE = GetAppEventID();
      AppEvent.BROADCAST_GAME_OVER = GetAppEventID();
      AppEvent.BROADCAST_GAME_START = GetAppEventID();
      AppEvent.BROADCAST_ROOM_INFO = GetAppEventID();
      AppEvent.NET_CMD_REQ_TASK_ACT_CONFIG = GetAppEventID();
      AppEvent.NET_CMD_RESP_TASK_ACT_CONFIG = GetAppEventID();
      AppEvent.NET_REQ_FIRST_PAY_CONFIG = GetAppEventID();
      AppEvent.NET_RESP_FIRST_PAY_CONFIG = GetAppEventID();
      AppEvent.ACTIVITY_UPDATE_FIRSTPAY_CONF = GetAppEventID();

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=e875c270d4053b5389961287e8917560d15da266.js.map