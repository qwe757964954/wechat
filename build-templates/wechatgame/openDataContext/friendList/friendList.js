const AbyUtils = require('../AbyUtils');
const Layout = require('../engine').default;
const BaseClass = require('../BaseClass');
const bodyData = require('./bodyData');

/*
<view class="container" id="main">
  <view class="friendList">
        <scrollview class="list" scrollY="true">
            {{~it.data :item:index}}
                    <view class="listItem">
                  	
                    {{? index % 2 === 1 }}
                    <view class="viewItem viewItemOld">
                    {{?}}
                    {{? index % 2 === 0 }}
                    <view class="viewItem">
                    {{?}}
                    <view class="listHeadImg" >
                      <image class=' HeadwarpBg'  src="{{= item.headFrame }}" ></image>
                      <image class=' HeadImg' src="{{= item.avatarUrl }}"></image>
                     </view>
                      <text class="textItemName" value="{{= item.nickname}}"></text>
                      <view class="listRightItem">
                            <view class="listTextItem">
                                  <text class="textRightTopDesc" value="{{= item.lastOnLineTime}}"></text>
                            </view>                             
                            <view class="listBtnItem">
                                  <image class="btnInvide" src="{{= item.imgInvide }}"></image>
                            </view>    
                      </view>
                    </view>
               </view>
            {{~}}
        </scrollview>
    </view>
</view>

*/

// 上述模板经过模板引擎编译成版本函数，可通过 olado.github.io/doT/index.html 在线获得
function anonymous(it, showShareBtn) {
    var out = '<view class="container" id="main"> <view class="friendList"> <scrollview class="list" scrollY="true"> ';
    var arr1 = it.data;
    if (arr1) {
        var item, index = -1,
            l1 = arr1.length - 1;
        while (index < l1) {
            item = arr1[index += 1];
            out += ' <view class="listItem">  ';
            if (index % 2 === 1) {
                out += ' <view class="viewItem viewItemOld"> ';
            }
            out += ' ';
            if (index % 2 === 0) {
                out += ' <view class="viewItem"> ';
            }
            if (showShareBtn == true && item.canShare == true) {
                out += ' <view class="listHeadImg" > <image class="HeadwarpBg" src="' + (item.headFrame) + '"></image> <image class="HeadImg" src="' + (item.avatarUrl) + '"></image></view> <text class="textItemName" value="' + (item.nickname) + '"></text> <view class="listRightItem"> <view class="listTextItem"> <text class="textRightTopDesc" value="' + (item.lastOnLineTime) + '"></text> </view>                              <view class="listBtnItem"> <image class="btnInvide" src="' + (item.imgInvide) + '"></image> </view>                       </view> </view> </view> ';
            } else {
                out += ' <view class="listHeadImg" > <image class="HeadwarpBg" src="' + (item.headFrame) + '"></image> <image class="HeadImg" src="' + (item.avatarUrl) + '"></image></view> <text class="textItemName" value="' + (item.nickname) + '"></text> <view class="listRightItem"> <view class="listTextItem"> <text class="textRightTopDescCenter" value="' + (item.lastOnLineTime) + '"></text> </view>  </view> </view> </view> ';
            }

        }
    }
    out += ' </scrollview> </view></view>';
    return out;
}


class friendList extends BaseClass {
    constructor() {
        super("friendList")
    }

    /** 游戏好友队列 */
    gameFriends = [];
    /** 推荐好友openid集合 {openid=true} */
    recommendFriendsFindOpenID = {};
    /** 推荐好友队列(没玩过游戏的) */
    recommendFriends = [];
    /** 寻找推荐好友找不到的次数 */
    recommendFriendsFindNum = 3;
    /** 推荐好友允许的最大数量 */
    recommendFriendsMaxNum = 100;
    /**
     * 重新加载游戏好友数据
     * @param callback 回调函数
     */
    reloadGameFriends(callback) {
        this.gameFriends = [];
        let self = this;
        let endback = function (res) {
            let body = res ? res : { data: null };
            if (body.data) {
                for (let i = 0; i < body.data.length; i++) {
                    self.gameFriends.push(body.data[i]);
                }
            }
            console.log("重新加载游戏好友数据:==>", self.gameFriends)
            if (callback && typeof (callback) == "function") {
                callback(self.gameFriends)
            }
        }
        if (this._initParam && this._initParam["keyList"]) {
            bodyData.getFriendCloudStorage(this._initParam["keyList"], endback)
        } else {
            bodyData.getFriendCloudStorage([], endback)
        }
    }
    /**
     * 重新加载推荐好友(未注册游戏的好友列表)
     * @param callback 回调函数 param:Array<friendIfo>
     * @param isFindAll 是否寻找所有 默认false 找所有
     */
    reloadRecommendFriends(callback, isFindAll = false) {
        this.recommendFriendsFindOpenID = {};
        this.recommendFriends = [];

        let maxFriends = this.recommendFriendsMaxNum;

        let self = this;
        //查找的结果 返回是否可停止 为空则再次校验
        let findCallFunc = function (res) {
            if (res && res["list"]) {
                let count = 0;
                for (let i = 0; i < res["list"].length; i++) {
                    if (res["list"][i] && res["list"][i]["openid"]) {
                        let openID = res["list"][i]["openid"];
                        if (self.recommendFriendsFindOpenID[openID] != true) {
                            self.recommendFriends.push(res["list"][i]);
                            self.recommendFriendsFindOpenID[openID] = true;
                        } else {//重复的个数
                            count = count + 1;
                        }
                    }
                }
                return count == res["list"].length;
            }
            return null;
        }
        if (isFindAll == true) {
            let count = 0;
            let doLoop = null;
            doLoop = function () {
                bodyData.getPotentialFriendList((res) => {
                    let isStop = findCallFunc(res);
                    if (self.recommendFriends.length >= maxFriends) {
                        isStop = true;
                        count = self.recommendFriendsFindNum;
                    }
                    if (isStop == true || isStop == null) {
                        count = count + 1;
                        if (count > self.recommendFriendsFindNum) {
                            console.log("重新加载推荐好友数据==>" + self.recommendFriends.length, self.recommendFriends)
                            if (callback && typeof (callback) == "function") {
                                callback(self.recommendFriends)
                            }
                            return;
                        }
                    } else {
                        count = 0;
                    }
                    doLoop();
                })
            }
            doLoop();
            return;
        }
        bodyData.getPotentialFriendList((res) => {
            findCallFunc(res);
            count = count + 1;
            console.log("重新加载推荐好友数据==>数量:" + self.recommendFriends.length, self.recommendFriends)
            if (callback && typeof (callback) == "function") {
                callback(self.recommendFriends)
            }
        })
    }

    /** 加载所有好友数据 */
    reloadAllData(callback) {
        let self = this;
        let resultGameArray = [];
        let resultRecommArray = [];
        let callCount = 0;

        let doEndCallFunc = function () {
            callCount = callCount + 1;
            if (callCount == 2) {
                for (let i = 0; i < resultRecommArray.length; i++) {
                    resultGameArray.push(resultRecommArray[i]);
                }
                console.log("加载所有好友数据的结果:", resultGameArray)
                self._allData = resultGameArray;
                if (callback && typeof (callback) == "function") {
                    callback(resultGameArray)
                }
            }
        }
        this.reloadGameFriends((resArray) => {
            let _myGameFriends = AbyUtils.clone(resArray);
            for (let i = 0; i < _myGameFriends.length; i++) {
                resultGameArray.push(_myGameFriends[i]);
            }
            doEndCallFunc();
        });
        this.reloadRecommendFriends((recommArray) => {
            let _recommArray = AbyUtils.clone(recommArray);
            for (let i = 0; i < _recommArray.length; i++) {
                resultRecommArray.push(_recommArray[i]);
            }
            doEndCallFunc();
        }, true)

    }

    /** 对外：初始化操作 */
    init(param, callback) {
        param = AbyUtils.table_verify(param);
        this._initParam = param;
        this._allData = null;
        this._allUIData = null;
        /** 游戏好友队列 */
        this.gameFriends = [];
        /** 推荐好友openid集合 {openid=true} */
        this.recommendFriendsFindOpenID = {};
        /** 推荐好友队列(没玩过游戏的) */
        this.recommendFriends = [];
        /** 推荐好友允许的最大数量 */
        this.recommendFriendsMaxNum = this._initParam["maxFriends"] != null ? this._initParam["maxFriends"] : this.recommendFriendsMaxNum;

        this.reloadAllData(callback);
    }
    /** 对外：获取所有好友的界面数据 */
    reloadUI(param, callback) {
        let self = this;
        //使用新的分享数据
        if (AbyUtils.table_isEmpty(self._initParam["shareOptions"])) {
            self._initParam["shareOptions"] = AbyUtils.table_verify(param["shareOptions"]);
        } else {
            if (AbyUtils.table_isEmpty(param["shareOptions"]) == false) {
                self._initParam["shareOptions"] = AbyUtils.table_verify(param["shareOptions"]);
            }
        }
        //使用新的openID
        if (AbyUtils.string_isNull(self._initParam["myopenID"])) {
            self._initParam["myopenID"] = param["myopenID"];
        } else {
            if (AbyUtils.string_isNull(param["myopenID"]) == false) {
                self._initParam["myopenID"] = param["myopenID"];
            }
        }

        let doEndCallFunc = function (allData) {
            let canShare = bodyData.checkShareMessageToFriend();
            let uiData = null;
            let loadUIData = [];

            for (let i = 0; i < allData.length; i++) {
                let willLoadData = {};
                willLoadData["nickname"] = AbyUtils.string_subString(allData[i]["nickname"], 14);
                willLoadData["openid"] = allData[i]["openid"];
                willLoadData["avatarUrl"] = allData[i]["avatarUrl"];

                willLoadData["imgInvide"] = "openDataContext/friendList/img/invitation.png";
                willLoadData["shareOptions"] = self._initParam["shareOptions"];
                //是否是朋友
                willLoadData["isGameFriend"] = false;

                //自定义字段 可分享
                willLoadData["canShare"] = true;
                let uid = "";
                let timeDesc = "";
                let headFrame = "";

                if (allData[i]["KVDataList"] != null) {
                    willLoadData["imgInvide"] = "openDataContext/friendList/img/share.png";
                    willLoadData["isGameFriend"] = true;
                    if (self._initParam["keyList"] && self._initParam["keyList"].length > 0) {
                        for (let index = 0; index < allData[i]["KVDataList"].length; index++) {
                            let keyName = allData[i]["KVDataList"][index]["key"];
                            let keyValue = allData[i]["KVDataList"][index]["value"];

                            if (self._initParam["keyList"][0] == keyName) {//登录时间
                                if (AbyUtils.string_isNull(keyValue) == false) {
                                    let lastloginTimeArray = AbyUtils.timeToDataArray(keyValue);
                                    if (lastloginTimeArray) {
                                        timeDesc = AbyUtils.string_format("上次登录:{0}月{1}日", lastloginTimeArray.month, lastloginTimeArray.day);
                                    }
                                }
                            };
                            if (self._initParam["keyList"][1] == keyName) {//用户头像框
                                if (AbyUtils.string_isHttp(keyValue)) {
                                    headFrame = keyValue;
                                }
                            };

                            if (self._initParam["keyList"][2] == keyName) {//uid
                                if (AbyUtils.string_isHttp(keyValue)) {
                                    uid = keyValue;
                                }
                            };
                        }
                    }
                } else {

                }
                // let bd = {
                //     KVDataList: [],
                //     avatarUrl: "https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTKCtOMaZH94cQwia9PmlojutWqN3ma39EMo2OqffWkBvdIaZsOwugzE4YoG16tgSQeOA4dBlWBLvrA/132",
                //     imgInvide: "openDataContext/friendList/img/invitation.png",
                //     lastOnLineTime: "在线时间:2012.3.01",
                //     nickname: "王五",
                //     openid: "oDnhS43hH6pwUDlYpQg7HPdArt3c",
                // }
                // let bD = AbyUtils.clone(bd);
                // bD["nickname"] = "周三";
                // body.data.push(bD);

                // bD = AbyUtils.clone(bd);
                // bD["nickname"] = "李四";
                // body.data.push(bD);
                // bD = AbyUtils.clone(bd);
                // bD["nickname"] = "王五";
                // body.data.push(bD);
                willLoadData["uid"] = timeDesc;
                willLoadData["headFrame"] = headFrame;
                willLoadData["lastOnLineTime"] = timeDesc;

                if (self._initParam["myopenID"] && self._initParam["myopenID"] == willLoadData["openid"]) {//过滤自己
                } else {
                    loadUIData.push(willLoadData)
                }
            }


            self._allUIData = { data: loadUIData };
            console.log("输出所有UIdata", self._allData);
            uiData = anonymous(self._allUIData, canShare);
            if (callback && typeof (callback) == "function") {
                callback(uiData);
            }
        }

        if (AbyUtils.table_isEmpty(this._allData) == true) {
            console.log("reloadUI：重新加载所有数据")
            this.init(param, doEndCallFunc)
        } else {
            console.log("reloadUI：已存在所有数据，直接加载uidata")
            doEndCallFunc(this._allData);
        }

    }


    /** 根据Key查找数据 区分大小写 */
    findByKey(param, callback) {
        param = AbyUtils.table_verify(param);
        let keyName = param["key"] != null ? param["key"] : "nickname";
        let searchValue = param["search"] != null ? param["search"] : "";

        let endback = function (body) {
            let uiData = null;
            if (body && body?.data?.length > 0) {
                let canShare = bodyData.checkShareMessageToFriend();
                uiData = anonymous(body, canShare);
            }
            if (callback && typeof (callback) == "function") {
                callback(uiData);
            }
        }
        if (AbyUtils.table_isEmpty(this._allUIData)) {
            endback(this._allUIData);
            return;
        }
        if (AbyUtils.string_isNull(keyName)) {
            endback(this._allUIData);
            return;
        }
        let body = {
            data: []
        };
        for (let i = 0; i < this._allUIData.data.length; i++) {
            let oneData = this._allUIData.data[i];
            if (oneData[keyName]) {
                if (String(oneData[keyName]).search(String(searchValue)) != -1) {
                    body.data.push(oneData);
                }
            }
        }
        endback(body);
    }
    //注册按钮事件
    registerItemEvent() {
        let self = this;
        let btnInvide = Layout.getElementsByClassName("btnInvide");
        let clickFunc = AbyUtils.handler(this, this.onClickInvide);

        btnInvide.forEach((item, key) => {
            if (item.id != null && self._allUIData && self._allUIData.data && self._allUIData.data[Number(key)]) {
                let _data = self._allUIData.data[Number(key)];
                self.__registerClickEvent(item, clickFunc, _data);
            }
        })
    }
    //卸载按钮事件
    uninstallItemEvent() {
        let btnInvide = Layout.getElementsByClassName("btnInvide");
        let self = this;
        btnInvide.forEach((item, key) => {
            self.__removeClickEvent(item);
        })
    }

    //邀请按钮点击事件
    onClickInvide(e, data) {
        console.log("点击了邀请按钮==> ", data);
        if (data["openid"] && data["shareOptions"]) {
            bodyData.shareMessageToFriend(data["openid"], data["shareOptions"])
        }

    }
}

module.exports = new friendList();