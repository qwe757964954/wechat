const friemdStyle = require('./friendList/style')
const friendList = require('./friendList/friendList')


const Layout = require('./engine').default;

let __env = GameGlobal.wx || GameGlobal.tt || GameGlobal.swan;
let sharedCanvas = __env.getSharedCanvas();
let sharedContext = sharedCanvas.getContext('2d');
//UI功能配置
const UIConfig = {
    ["friendList"]: { UI: friendList, Style: friemdStyle },
}
/** 开放数据域的数据缓存 */
const OpenDataCache = {
    /** 当前绘制的UI */
    currowUI: null,
}

//初始化
function staretInit(key, funcName, param = null) {
    if (key == null) {
        return false;
    }
    if (funcName == null) {
        funcName = "init";
    }
    if (UIConfig[key].UI[funcName]) {
        UIConfig[key].UI[funcName](param, (allData) => {
            console.log("初始化的结果返回,", allData)
        })
    }
}
//UI绘制
function startDraw(key, funcName, param = null) {
    if (key == null) {
        return false;
    }
    if (funcName == null) {
        funcName = "reloadUI";
    }

    let currowKey = key + "-" + funcName;
    OpenDataCache.currowUI = currowKey;

    if (UIConfig[key].UI[funcName]) {
        UIConfig[key].UI[funcName](param, (uiData) => {
            if (uiData && OpenDataCache.currowUI == currowKey) {
                Layout.init(uiData, UIConfig[key].Style);
                Layout.layout(sharedContext);
                UIConfig[key].UI.registerItemEvent(Layout);
            }
        })
    } else {
        Layout.init(UIConfig[key].UI, UIConfig[key].Style);
        Layout.layout(sharedContext);
        UIConfig[key].UI.registerItemEvent(Layout);
    }
}

//UI销毁
function startDestrory(key, param = null) {
    if (key == null) {
        return false;
    }
    OpenDataCache.currowUI = null;
    if (UIConfig[key]) {
        UIConfig[key].UI.uninstallItemEvent(Layout);
    }
    Layout.clear();
}
//更新UI位置
function updateViewPort(data) {
    Layout.updateViewPort({
        x: data.x,
        y: data.y,
        width: data.width,
        height: data.height,
    });
}
//接收到主域的消息
__env.onMessage(data => {
    if (data.type === 'engine' && data.event === 'viewport') {
        //显示 只更新位置
        updateViewPort(data);
    } else if (data.UIKey && UIConfig[data.UIKey]) {
        console.log("刷新自定义===>", data)
        if (data.init == true) {
            staretInit(data.UIKey, "init", data["param"]);
        } else if (data.reloadUI == true) {
            startDraw(data.UIKey, "reloadUI", data["param"]);
        } else if (data.findByKey == true) {
            startDraw(data.UIKey, "findByKey", data["param"]);
        } else if (data.close == true) {
            startDestrory(data.UIKey);
        }
    }
});
