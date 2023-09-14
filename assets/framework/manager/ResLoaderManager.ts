import { instantiate, Prefab, _decorator } from 'cc';
import { AppEvent } from '../../config/AppEvent';
import { inf_ResLoader } from '../InterfaceDefines';
import { resLoader } from '../loader/ResLoader';
import { BaseControll } from '../vc/BaseController';
const { ccclass } = _decorator;

/**
 * Name = ResLoaderManager
 * URL = db://assets/framework/manager/ResLoaderManager.ts
 * Time = Tue Sep 20 2022 14:20:23 GMT+0800 (中国标准时间)
 * Author = Tomoe
 *
 * Life: onLoad-->onEnable->start->update->lateUpdate->onDisable->onDestroy
 * 资源加载统一管理
 */

@ccclass('ResLoaderManager')
export class ResLoaderManager extends BaseControll {

    private static _instance: ResLoaderManager;
    public static getInstance(): ResLoaderManager {
        if (!this._instance || this._instance == null) {
            this._instance = new ResLoaderManager("ResLoaderManager");
        }
        resLoader.setMaxConcurrency(6);
        return this._instance;
    }
    public static init(): ResLoaderManager {
        if (this._instance) {
            this._instance.clear();
        }
        this._instance = null
        ResLoaderManager.getInstance();
        return
    }

    /** 所有预加载的资源 */
    private __preLoadMap = new Map();

    /** 初始化模块事件 */
    protected onInitModuleEvent() {
        //加载本地资源
        this.addModelListener(AppEvent.SYS_RELOADD_LOCAL, this.receivePreLoaderRes);
        //加资远端资源
        this.addModelListener(AppEvent.SYS_RELOADD_REMOTE, this.receivePreLoaderRemoteRes);
        //清理记录根据key
        this.addModelListener(AppEvent.SYS_RELOADD_RECORD_REMOVE, this.receiveremovePreLoaderRecord);
    }

    /**
     * 本地资源加载
     * @param event 
     * @param param 详见inf_ResLoader
     */
    private receivePreLoaderRes(event, param: inf_ResLoader) {
        this.getPreLoaderRes(param.bundle, param.path, param.resType, param.callFunc, param.isReload);
    }
    /**
     * 远端资源的加载
     * @param event 
     * @param param  详见inf_ResLoader
     */
    private receivePreLoaderRemoteRes(event, param: inf_ResLoader) {
        this.getPreLoaderRemoteRes(param.path, param.resType, param.callFunc, param.isReload);
    }
    /**
     * 移除已加载的记录
     * @param event 
     * @param param 
     */
    private receiveremovePreLoaderRecord(event, param: inf_ResLoader) {
        this.removePreLoaderRecord(param.bundle, param.path, param.resType);
    }


    /** 获取资源key */
    public getKey(bundle, path, resType = null) {
        bundle = (bundle != null ? bundle : "resources");
        let key = bundle + "|" + path;
        if (resType) {
            key = key + "|" + resType;
        }
        return key;
    }
    /**
     * 获取预加载的资源
     * @param bundle 包名
     * @param path 资源路径
     * @param resType 资源类型
     * @param callback 成功回调
     * @param isReload 是否重新加载 默认为false
     */
    public getPreLoaderRes(bundle, path, resType = null, callback = null, isReload = false) {
        if (!path) {
            return;
        }
        let self = this;

        let key = this.getKey(bundle, path, resType);

        if (isReload) {
            self.__preLoadMap.delete(key);
        }
        let preRes = self.__preLoadMap.get(key);

        if (preRes != null && preRes != undefined) {
            if (callback) {
                if (resType == Prefab) {
                    callback(instantiate(preRes), key);
                    self.__preLoadMap.delete(key);
                } else {
                    callback(preRes, key);
                }
            }
        } else {
            if (resType) {
                resLoader.load(bundle, path, resType, (err, res) => {
                    if (err) {
                        return;
                    }
                    self.__preLoadMap.set(key, res);
                    if (callback) {
                        if (resType == Prefab) {
                            callback(instantiate(res), key);
                            self.__preLoadMap.delete(key);
                        } else {
                            callback(res, key);
                        }
                    }
                })
            } else {
                resLoader.load(bundle, path, (err, res) => {
                    if (err) {
                        return;
                    }
                    self.__preLoadMap.set(key, res);
                    if (callback) {
                        if (resType == Prefab) {
                            callback(instantiate(res), key);
                            self.__preLoadMap.delete(key);
                        } else {
                            callback(res, key);
                        }
                    }
                })
            }
        }
    }
    /**
     * 获取预加载的远端资源
     * @param bundle 包名
     * @param path 资源路径
     * @param resType 资源类型 string 例'.jpg'
     * @param callback 成功回调
     * @param isReload 是否重新加载 默认为false
     */
    public getPreLoaderRemoteRes(path: string, resType = null, callback = null, isReload = false) {
        if (!path) {
            return;
        }
        let self = this;
        let bundle = "http";

        let key = this.getKey(bundle, path, resType);

        if (isReload) {
            self.__preLoadMap.delete(key);
        }
        let preRes = self.__preLoadMap.get(key);

        if (preRes != null && preRes != undefined) {
            if (callback) {
                if (resType == Prefab) {
                    callback(instantiate(preRes), key);
                    self.__preLoadMap.delete(key);
                } else {
                    callback(preRes, key);
                }
            }
        } else {
            if (resType) {
                resLoader.loadRemote(path, { ext: resType }, (err, res) => {
                    if (err) {
                        return;
                    }
                    self.__preLoadMap.set(key, res);
                    if (callback) {
                        if (resType == Prefab) {
                            callback(instantiate(res), key);
                            self.__preLoadMap.delete(key);
                        } else {
                            callback(res, key);
                        }
                    }
                })
            } else {
                resLoader.loadRemote(path, (err, res) => {
                    if (err) {
                        return;
                    }
                    self.__preLoadMap.set(key, res);
                    if (callback) {
                        if (resType == Prefab) {
                            callback(instantiate(res), key);
                            self.__preLoadMap.delete(key);
                        } else {
                            callback(res, key);
                        }
                    }
                })
            }
        }
    }
    /**
     * 清理一条加载记录
     * @param bundle 包名或key
     * @param path 路径名 可为null时 bundle为key
     * @param resType 
     */
    public removePreLoaderRecord(bundle, path = null, resType = null) {
        let key = null;
        if (bundle && path) {
            key = this.getKey(bundle, path, resType);
        } else if (bundle && path == null) {
            key = bundle;
        }
        if (key) {
            this.__preLoadMap.delete(key);
        }
    }

}