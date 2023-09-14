System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, WXSdk_Lang, WXSdk_AuthSetting, WXSdk_VibrateShortType;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c017eKt9SVJZIquQKn621f8", "WXSdkDefines", undefined);

      /**
       * Name = PlatFormDefines
       * URL = db://assets/platform/PlatFormDefines.ts
       * Time = Wed Apr 27 2022 14:27:47 GMT+0800 (中国标准时间)
       * Author = xueya
       * 平台自定义管理
       * {接口、常量定义}
       */
      //微信sdk所用语言
      _export("WXSdk_Lang", WXSdk_Lang = {
        en: "en",
        //英文
        zh_CN: "zh_CN",
        //简体中文
        zh_TW: "zh_TW" //繁体中文

      }); //scope	权限对应接口、描述


      _export("WXSdk_AuthSetting", WXSdk_AuthSetting = {
        //用户信息 => wx.getUserInfo
        ["userInfo"]: "scope.userInfo",
        //地理位置 => wx.getLocation
        ["userLocation"]: "scope.userLocation",
        //微信运动步数 => wx.getWeRunData
        ["werun"]: "scope.werun",
        //保存到相册 => wx.saveImageToPhotosAlbum
        ["writePhotosAlbum"]: "scope.writePhotosAlbum",

        /**
         * 是否授权使用你的微信朋友信息 
         * 对应开放数据域内的 
         * wx.getFriendCloudStorage 、
         * wx.getGroupCloudStorage 、
         * wx.getGroupInfo 、
         * wx.getPotentialFriendList 、
         * wx.getUserCloudStorageKeys 、
         * wx.getUserInfo 、
         * GameServerManager.getFriendsStateData 接口，
         * 以及主域内的 wx.getUserInteractiveStorage 接口
        	 * */
        ["WxFriendInteraction"]: "scope.WxFriendInteraction"
      });
      /** 短时间震动强度 */


      _export("WXSdk_VibrateShortType", WXSdk_VibrateShortType = {
        /** 重 */
        heavy: "heavy",

        /** 中等 */
        medium: "medium",

        /** 较轻 */
        light: "light"
      }); //系统信息


      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=8f037ffa98a893f2f36e01bdafcd1643592ae9aa.js.map