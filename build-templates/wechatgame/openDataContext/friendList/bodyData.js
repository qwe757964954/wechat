const bodyData = {
  //系统信息
  sysInfo: null,
  //当前基础库版本
  sdkVersion: null,


  /**
   * getSystemInfoSync:获取系统信息(同步)
   * @returns info:Object 详见 _InterFace_WXSdk_SystemInfo 的定义
   */

  getSystemInfoSync() {
    return wx.getSystemInfoSync();
  },

  /**
   * 比较sdk版本号
   * @param v1 
   * @param v2 
   * @returns number 0 相等 1：v1>v2 -1:v1<v2
   */
  compareSdkVersion(v1, v2) {
    let v1Sum = v1.split('.')
    let v2Sum = v2.split('.')

    let len = Math.max(v1Sum.length, v2Sum.length)

    while (v1Sum.length < len) {
      v1Sum.push('0')
    }
    while (v2Sum.length < len) {
      v2Sum.push('0')
    }

    for (let i = 0; i < len; i++) {
      let num1 = parseInt(v1Sum[i])
      let num2 = parseInt(v2Sum[i])

      if (num1 > num2) {
        return 1
      } else if (num1 < num2) {
        return -1
      }
    }
    return 0
  },

  /**
   * 检查是否可以分享好友
   */
  checkShareMessageToFriend() {
    let baseVer = '2.9.0'
    if (bodyData.compareSdkVersion(baseVer, bodyData.sdkVersion) > 0) {
      console.log(`版本不支持，当前版本:${bodyData.sdkVersion} 期待版本：${baseVer}`);
      return false;
    }
    return true;
  },

  /**
   * 获取可能对游戏感兴趣的未注册的好友名单。每次调用最多可获得 5 个好友。
   * 该接口需要用户授权，且只在开放数据域下可用。
   * @param  callback 回调函数 参数 data["list"] 
   *         list = [{"avatarUrl":string,"nickname":string,"openid":string}]
   */
  getPotentialFriendList(callback = null) {
    let isReturn = false;
    let endCall = function (res) {
      if (callback && typeof (callback) == "function" && isReturn == false) {
        callback(res);
      }
      isReturn = true;
    }
    if (wx.getPotentialFriendList) {
      wx.getPotentialFriendList({
        success: (res) => {
          endCall(res);
        },
        fail: () => {
          endCall(null);
        },
        complete: () => {
          endCall(null);
        }
      });
    }
  },
  /**
   * 拉取当前用户所有同玩好友的托管数据。该接口需要用户授权，且只在开放数据域下可用
   * @param keyList 要获取的 key 列表
   * @param success 成功的回调 参数：Array<__InterFace_WXSdk_KVData>
   * @param fail 
   * @param complete 
   * @returns 
   */
  getFriendCloudStorage(keyList, callback = null) {
    let isReturn = false;
    let endCall = function (res) {
      if (callback && typeof (callback) == "function" && isReturn == false) {
        callback(res);
      }
      isReturn = true;
    }
    if (wx.getFriendCloudStorage) {
      wx.getFriendCloudStorage({
        keyList: keyList,
        success: (res) => {
          endCall(res);
        },
        fail: () => {
          endCall(null);
        },
        complete: () => {
          endCall(null);
        }
      });
    }
  },

  /**
   * 给指定的好友分享游戏信息，该接口只可在开放数据域下使用。接收者打开之可以用 wx.modifyFriendInteractiveStorage 传入参数 quiet=true 发起一次无需弹框确认的好友互动
   * @param openId    发送对象的 openId
   * @param options = {title:string,imageUrl:string}
   * @param             -->title     转发标题，不传则默认使用当前小游戏的昵称。
   * @param             -->imageUrl 转发显示图片的链接，可以是网络图片路径或本地图片文件路径或相对代码包根目录的图片文件路径。显示图片长宽比是 5:4
   * @param             -->imageUrlId 审核通过的图片 ID，
   * @param success            接口调用成功的回调函数
   * @param fail            接口调用失败的回调函数
   * @param complete 
   * @returns 
   */
  shareMessageToFriend(openId, options = {}, success = null, fail = null, complete = null) {
    if (bodyData.checkShareMessageToFriend() == false) {
      return false;
    }
    if (!options) {
      return false;
    }
    wx.shareMessageToFriend(
      {
        openId: openId,
        title: options?.title,
        imageUrl: options?.imageUrl,
        imageUrlId: options?.imageUrlId,
        success: success,
        fail: fail,
        complete: complete
      }
    )
    return true;
  },

}

bodyData.sysInfo = bodyData.getSystemInfoSync() || {};
bodyData.sdkVersion = bodyData.sysInfo["SDKVersion"] || null;

module.exports = bodyData;