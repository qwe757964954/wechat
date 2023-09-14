/**
 * Name = PlatFormDefines
 * URL = db://assets/platform/PlatFormDefines.ts
 * Time = Wed Apr 27 2022 14:27:47 GMT+0800 (中国标准时间)
 * Author = xueya
 * 平台自定义管理
 * {接口、常量定义}
 */

//微信sdk所用语言
export const WXSdk_Lang = {
	en: "en",                 //英文
	zh_CN: "zh_CN",           //简体中文
	zh_TW: "zh_TW"            //繁体中文
}
//scope	权限对应接口、描述
export const WXSdk_AuthSetting = {
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
}

/** 短时间震动强度 */
export const WXSdk_VibrateShortType = {
	/** 重 */
	heavy: "heavy",
	/** 中等 */
	medium: "medium",
	/** 较轻 */
	light: "light",
}

//系统信息
export interface _InterFace_WXSdk_SystemInfo {
	// 属性	类型	说明	最低版本
	brand: string,	              //设备品牌 ver >= 1.5.0
	model: string,	              //设备型号。新机型刚推出一段时间会显示unknown，微信会尽快进行适配。	
	pixelRatio: number,	      //设备像素比	
	screenWidth: number,	      //屏幕宽度，单位px ver >= 1.1.0
	screenHeight: number,	      //屏幕高度，单位px ver >= 1.1.0
	windowWidth: number,	      //可使用窗口宽度，单位px	
	windowHeight: number,	      //可使用窗口高度，单位px	
	statusBarHeight: number,	  //状态栏的高度，单位px	1.9.0
	language: string,	          //微信设置的语言	
	version: string,	          //微信版本号	
	system: string,	          //操作系统及版本	
	platform: string,	          //客户端平台 (ios:iOS微信（包含 iPhone、iPad）android:Android微信 windows:Windows微信 mac:macOS微信)
	fontSizeSetting: number,	  //用户字体大小（单位px）。以微信客户端「我-设置-通用-字体大小」中的设置为准 ver >= 1.5.0
	SDKVersion: string,	      //客户端基础库版本	ver >= 1.1.0
	benchmarkLevel: number,	  //设备性能等级（仅 Android）。取值为：-2 或 0（该设备无法运行小游戏），-1（性能未知），>=1（设备性能值，该值越高，设备性能越好，目前最高不到50）	ver >= 1.8.0
	albumAuthorized: boolean,	  //允许微信使用相册的开关（仅 iOS 有效）	ver >= 2.6.0
	cameraAuthorized: boolean,	  //允许微信使用摄像头的开关	ver >= 2.6.0
	locationAuthorized: boolean, //允许微信使用定位的开关	ver >= 2.6.0
	microphoneAuthorized: boolean,	//允许微信使用麦克风的开关	ver >= 2.6.0
	notificationAuthorized: boolean,	  //允许微信通知的开关	ver >= 2.6.0
	notificationAlertAuthorized: boolean,	//允许微信通知带有提醒的开关（仅 iOS 有效）	ver >= 2.6.0
	notificationBadgeAuthorized: boolean,	//允许微信通知带有标记的开关（仅 iOS 有效）	ver >= 2.6.0
	notificationSoundAuthorized: boolean,	//允许微信通知带有声音的开关（仅 iOS 有效）	ver >= 2.6.0
	phoneCalendarAuthorized: boolean,	  //允许微信使用日历的开关	ver >= 2.19.3
	bluetoothEnabled: boolean,	          //蓝牙的系统开关	ver >= 2.6.0
	locationEnabled: boolean,	          //地理位置的系统开关	ver >= 2.6.0
	wifiEnabled: boolean,	              //Wi-Fi 的系统开关	ver >= 2.6.0
	safeArea: Object,	                  //在竖屏正方向下的安全区域{left:number 安全区域左上角横坐标 right:number 安全区域右下角横坐标 top:number 安全区域左上角纵坐标 bottom:number 安全区域右下角纵坐标 width:number 安全区域的宽度，单位逻辑像素 height:number 安全区域的高度，单位逻辑像素}	ver >= 2.7.0
	locationReducedAccuracy: boolean,	  //`true` 表示模糊定位，`false` 表示精确定位，仅 iOS 支持	
	theme: string,	                      //系统当前主题，取值为`light`或`dark`，全局配置`"darkmode":true`时才能获取，否则为 undefined （不支持小游戏）	ver >= 2.11.0
	host: Object,	                      //当前小程序运行的宿主环境{appId:string 宿主 app 对应的 appId}	ver >= 2.12.3
	enableDebug: boolean,	              //是否已打开调试。可通过右上角菜单或 wx.setEnableDebug 打开调试。	ver >= 2.15.0
	deviceOrientation: string	          //设备方向 {portrait	竖屏 landscape	横屏}	
}
//用户消息
export interface __InterFace_WXSdk_UserInfo {
	nickName: string,   //用户昵称
	avatarUrl?: string,  //用户头像图片的 URL。URL 最后一个数值代表正方形头像大小（有 0、46、64、96、132 数值可选，0 代表 640x640 的正方形头像，46 表示 46x46 的正方形头像，剩余数值以此类推。默认132），用户没有头像时该项为空。若用户更换头像，原有头像 URL 将失效。
	gender?: number,     //用户性别。(0未知，1男 2女) wx不再返回
	country?: string,    //用户所在国家。wx不再返回
	city?: string,       //用户所在城市。wx不再返回
	province?: string,   //用户所在省份。wx不再返回
	language?: string,   //显示 country，province，city 所用的语言。强制返回 “zh_CN” {en英文zh_CN简体中文zh_TW繁体中文}
}
/**提交数据的函数接口 常见于微信小程序 */
export interface __InterFace_WXSdk_SubmitCallback {
	success?: Function,
	fail?: Function,
	completed?: Function
}

//显示模态对话框时的界面配置
export interface __InterFace_WXSdk_ModalTips {
	title?: string,             //提示的标题
	content?: string,		    //提示的内容	
	showCancel?: boolean,	    //是否显示取消按钮 默认 : true
	cancelText?: string,	    //取消按钮的文字，最多 4 个字符	默认 : 取消
	cancelColor?: string,	    //取消按钮的文字颜色，必须是 16 进制格式的颜色字符串 默认 :	#000000
	confirmText?: string,	    //确认按钮的文字，最多 4 个字符	默认 : 确定
	confirmColor?: string,	    //确认按钮的文字颜色，必须是 16 进制格式的颜色字符串默认 : #576B95	
	editable?: boolean,	        //是否显示输入框	wx 2.17.1  默认 : false
	placeholderText?: string,	//显示输入框时的提示文本 wx 2.17.1 默认 :无
	success?: Function,		    //接口调用成功的回调函数	
	fail?: Function,	        //接口调用失败的回调函数	
	complete?: Function,	    //接口调用结束的回调函数（调用成功、失败都会执行）	

}
//显示消息提示框(吐司)时的界面配置
export interface __InterFace_WXSdk_ShowToast {
	title: string,		    //提示的内容	
	icon?: string,	        //图标 默认:success
	image?: string,	    //自定义图标的本地路径，image 的优先级高于 icon	1.1.0
	duration?: number,	    //提示的延迟时间（单位:毫秒）	默认:1500ms
	mask?: boolean,	    //是否显示透明蒙层，防止触摸穿透	默认:false
	success?: Function,    //接口调用成功的回调函数	
	fail?: Function,	    //接口调用失败的回调函数	
	complete?: Function,   //接口调用结束的回调函数（调用成功、失败都会执行）	
}
//显示 loading 提示框的界面配置
export interface __InterFace_WXSdk_ShowLoading {
	title: string,		    //提示的内容	
	mask?: boolean,		//是否显示透明蒙层，防止触摸穿透 默认:false
	success?: Function,	//接口调用成功的回调函数
	fail?: Function,		//接口调用失败的回调函数
	complete?: Function,	//接口调用结束的回调函数（调用成功、失败都会执行）
}
//获取用户信息(获取微信成功时的返回)
export interface __InterFace_WXSdk_GetUserInfoCallback_WXSMART {
	userInfo: __InterFace_WXSdk_UserInfo,	     //用户信息对象，不包含 openid 等敏感信息	
	rawData: string,	                             //不包括敏感信息的原始数据字符串，用于计算签名	
	signature: string,	                         //使用 sha1( rawData + sessionkey ) 得到字符串，用于校验用户信息，详见 用户数据的签名验证和加解密	
	encryptedData: string,	                     //包括敏感数据在内的完整用户信息的加密数据，详见 用户数据的签名验证和加解密	
	iv: string,	                                 //加密算法的初始向量，详见 用户数据的签名验证和加解密	
	cloudID?: string,	                         //敏感数据对应的云 ID，开通云开发的小程序才会返回，可通过云调用直接获取开放数据，详细见云调用直接获取开放数据	2.7.0
}

//按钮样式
export interface _InterFace_WXSdk_ButtonStyle {
	left: number,		    //左上角横坐标
	top: number,		    //左上角纵坐标
	width: number,		//宽度
	height: number,		//高度
	backgroundColor: string, //背景颜色
	borderColor: string,	  //边框颜色
	borderWidth: number,	  //边框宽度
	borderRadius: number,	  //边框圆角
	color: string,		      //文本的颜色。格式为 6 位 16 进制数
	textAlign: string,		  //文本的水平居中方式{left:居左center:居中 right:居右}
	fontSize: number,		  //字号
	lineHeight: number,      //文本的行高
}
//创建请求用户信息授权的按钮
export interface _InterFace_WXSdk_CreateUserInfoButton {
	type: string,		//按钮的类型。 text：可以设置背景色和文本的按钮 image:只能设置背景贴图的按钮，背景贴图会直接拉伸到按钮的宽高
	text?: string,		//按钮上的文本，仅当 type 为 `text` 时有效
	image?: string,	    //按钮的背景图片，仅当 type 为 `image` 时有效
	style: _InterFace_WXSdk_ButtonStyle,		//按钮的样式
	withCredentials: boolean,	//是否带上登录态信息。当 withCredentials 为 true 时，要求此前有调用过 wx.login 且登录态尚未过期，此时返回的数据会包含 encryptedData, iv 等敏感信息；当 withCredentials 为 false 时，不要求有登录态，返回的数据不包含 encryptedData, iv 等敏感信息。
	lang?: string,	            //描述用户信息的语言 默认:en
}
//绑定分享朋友圈的参数
export interface __InterFace_WXSdk_OnShareTimeline {
	title?: string,       //转发标题，不传则默认使用当前小游戏的昵称
	imageUrl?: string,    //转发显示图片的链接，可以是网络图片路径或本地图片文件路径或相对代码包根目录的图片文件路径。（该图片用于分享到朋友圈的卡片以及从朋友圈转发到会话消息的卡片展示）
	imageUrlId?: string,  //审核通过的图片 ID
	imagePreviewUrl?: string, //朋友圈预览图链接，不传则默认使用当前游戏画面截图 ver>=2.14.3
	imagePreviewUrlId?: string, //审核通过的朋友圈预览图图片 ID ver>=2.14.3
	query?: string,           //查询字符串，必须是 key1=val1&key2=val2 的格式。从这条转发消息进入后，可通过 wx.getLaunchOptionsSync() 或 wx.onShow() 获取启动参数中的 query。不传则默认使用当前页面query。
	path?: string            //独立分包路径 ver>=2.12.2
}

//绑定转发的参数
export interface __InterFace_WXSdk_OnShareAppMessage {
	title?: string,          //转发标题，不传则默认使用当前小游戏的昵称
	imageUrl?: string,       //转发显示图片的链接，可以是网络图片路径或本地图片文件路径或相对代码包根目录的图片文件路径。（该图片用于分享到朋友圈的卡片以及从朋友圈转发到会话消息的卡片展示）
	query?: string,           //查询字符串，必须是 key1=val1&key2=val2 的格式。从这条转发消息进入后，可通过 wx.getLaunchOptionsSync() 或 wx.onShow() 获取启动参数中的 query。不传则默认使用当前页面query。
	imageUrlId?: string,     //审核通过的图片 ID
	promisel?: any,           //如果该参数存在，则其它的参数将会以 resolve 结果为准，如果三秒内不 resolve，分享会使用上面传入的默认参数
	toCurrentGroup?: boolean, //是否转发到当前群。该参数只对从群工具栏打开的场景下生效，默认转发到当前群，填入false时可转发到其他会话
	path?: string            //独立分包路径 ver>=2.12.2
}
/** Websocket 由wx.connectSocket返回的值*/
export interface __InterFace_WXSdk_SocketTask {
	close: (obj: Object) => void,   //关闭 WebSocket 连接 参数 Object{ code: number = 1000, reason: string = null, success: function = null, fail: function = null, complete: function = null }
	send: Function,                //通过 WebSocket 连接发送数据 参数：{data:string/ArrayBuffer,success: function = null, fail: function = null, complete: function = null }
	onClose: (obj: Object) => void,  //监听 WebSocket 连接关闭事件 参数 Object{ code: number = 1000, reason: string = null}
	onError: (errMsg: string) => void,   //监听 WebSocket 错误事件 errMsg:错误消息
	onMessage: (data: string | ArrayBuffer) => void,  //监听 WebSocket 接受到服务器的消息事件 data	string/ArrayBuffer	服务器返回的消息
	onOpen: (obj: Object) => void,         //监听 WebSocket 连接打开事件 {header:Object	连接成功的 HTTP 响应 Sdkver>=2.0.0, profile:Object 网络请求过程中一些调试信息 Sdkver>=2.10.4}
}
/** 托管的 KV 数据 */
export interface __InterFace_WXSdk_KVData {
	key: string,
	value: string,
}

interface __InterFace_WXSdk_referrerInfo {
	/** 来源小程序、公众号或 App 的 appId */
	appId: string,
	/** 来源小程序传过来的数据，scene=1037或1038时支持 */
	extraData: object
}

/** 获取小游戏冷启动时的参数 */
export interface __InterFace_WXSdk_GetLaunchOptionsSync {
	/** 启动小游戏的场景值 */
	scene: number,
	/** 启动小游戏的 query 参数 */
	query: Object,
	/** shareTicket，详见获取更多转发信息 */
	shareTicket: string,
	/** 来源信息。从另一个小程序、公众号或 App 进入小程序时返回。否则返回 {}。部分版本在无referrerInfo的时候会返回 undefined， 建议使用 options.referrerInfo && options.referrerInfo.appId 进行判断。 */
	referrerInfo: __InterFace_WXSdk_referrerInfo,
	/** 从微信群聊/单聊打开小程序时，chatType 表示具体微信群聊/单聊类型 */
	chatType: number,
}
