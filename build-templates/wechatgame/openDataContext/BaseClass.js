/** 继承类 */
class BaseClass {
    /** 初始化传递的数据 */
    _initParam = null;
    /** 所有数据 */
    _allData = null;
    /** 转换成UI界面的data */
    _allUIData = null;

    constructor(name = null) {
        name = name || "BaseClass";
        console.log("数据域：" + name + "初始化...")
        this._allData = null;
        this._allUIData = null;
    }
    /** 初始化 */
    init(param, callback = null) {

    }
    /** 加载UI数据 */
    reloadUI(param, callback = null) {

    }
    /** 根据Key查找数据 {key:string, search:string} */
    findByKey(param, callback = null) {

    }
    /** 注册Item事件 */
    registerItemEvent(Layout) {

    }
    /** 注册点击事件 */
    __registerClickEvent(node, callback, data) {
        if (!node) {
            return;
        }
        node["event_click"] = true;
        node.on("click", (e) => {
            if (!callback) {
                return;
            }
            callback(e, data)
        });
    }
    /** 移除点击事件 */
    __removeClickEvent(node) {
        if (!node) {
            console.log("移除点击事件失败");
            return;
        }
        if (node["event_click"] == false) {
            return;
        }
        node.off("click");
        node["event_click"] = false;
    }

    // 通过getElementsById或者getElementsByClassName获取元素之后，可以的绑定事件，支持的事件有touchstart、touchmove、touchend、touchcancel、click、scroll(只有scrollview支持）

}
module.exports = BaseClass;
