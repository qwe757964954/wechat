/**
 * 资源加载管理
 */
import { Asset, AssetManager, assetManager, Constructor, error, js, resources, __private } from "cc";
import { GameConfig } from "../../config/GameConfig";
import { Utils } from "../Utils";

// 资源加载的处理回调
export type ProgressCallback = __private._cocos_core_asset_manager_shared__ProgressCallback;
// 资源加载的完成回调
export type CompleteCallback<T = any> = __private._cocos_core_asset_manager_shared__CompleteCallbackWithData;

export type IRemoteOptions = __private._cocos_core_asset_manager_shared__IRemoteOptions;
export type AssetType<T = Asset> = Constructor<T>;

// load方法的参数结构
interface ILoadResArgs<T extends Asset> {
    bundle?: string;            /**包名 可空 */
    dir?: string;               /**目录 可空 */
    paths: string | string[];   /**路径 */
    type: AssetType<T> | null;  /** 加载资源类型 */
    onProgress: ProgressCallback | null; /**处理回调 */
    onComplete: CompleteCallback<T> | null; /** 完成回调 */
}

class ResLoader {
    /**
     * 设置重试下载的最大次数，默认 3 次。若不需要重试下载，可设置为 0，则下载失败时会立即返回错误
     * @param num 默认3
     */
    public setMaxRetryCount(num: number) {
        if (num == null) {
            return;
        }
        assetManager.downloader.maxRetryCount = num;
    }
    /**
     * 设置重试下载的间隔时间，默认 2000 ms。若设置为 4000 ms，则下载失败时会先等待 4000 ms，然后再重新下载。
     * @param num 默认3
     */
    public setRetryInterval(num: number) {
        if (num == null) {
            return;
        }
        assetManager.downloader.retryInterval = num;
    }


    /**
     * 设置下载的最大并发连接数，若当前连接数超过限制，将会进入等待队列。
     * @param num 默认10
     */
    public setMaxConcurrency(num: number) {
        if (num == null) {
            return;
        }
        assetManager.downloader.maxConcurrency = num;
    }
    /**
     * 设置每帧发起的最大请求数，从而均摊发起请求的 CPU 开销，避免单帧过于卡顿。如果此帧发起的连接数已经达到上限，将延迟到下一帧发起请求。
     * @param num 默认6
     */
    public setMaxRequestsPerFrame(num: number) {
        if (num == null) {
            return;
        }
        assetManager.downloader.maxRequestsPerFrame = num;
    }


    public loadResourcePromise(url: string, callFunc?: Function) {
        return new Promise<AssetManager.Bundle>((resolve, reject) => {
            assetManager.loadBundle(url, (err, bundle: AssetManager.Bundle) => {
                if (err) {
                    return error(err);
                }
                resolve(bundle);
            });
        });
    }

    /**
     * 加载资源包
     * @param url       资源地址
     * @param complete  完成事件
     * @param v         资源MD5版本号
     */
    public loadBundle(url: string, callback: Function = null, v?: string) {

        return new Promise<AssetManager.Bundle>((resolve, reject) => {
            assetManager.loadBundle(url, { version: v }, (err, bundle: AssetManager.Bundle) => {
                if (err) {
                    if (callback) {
                        callback(err, bundle);
                    }
                    return error(err);
                }
                resolve(bundle);
                if (callback) {
                    callback(err, bundle);
                }
            });
        });
    }
    /**解析加载参数 */
    public parseLoadResArgs<T extends Asset>(
        paths: string | string[],
        type?: AssetType<T> | ProgressCallback | CompleteCallback | null,
        onProgress?: AssetType<T> | ProgressCallback | CompleteCallback | null,
        onComplete?: ProgressCallback | CompleteCallback | null
    ) {
        let pathsOut: any = paths;
        let typeOut: any = type;
        let onProgressOut: any = onProgress;
        let onCompleteOut: any = onComplete;
        if (onComplete === undefined) {
            const isValidType = js.isChildClassOf(type as AssetType, Asset);
            if (onProgress) {
                onCompleteOut = onProgress as CompleteCallback;
                if (isValidType) {
                    onProgressOut = null;
                }
            }
            else if (onProgress === undefined && !isValidType) {
                onCompleteOut = type as CompleteCallback;
                onProgressOut = null;
                typeOut = null;
            }
            if (onProgress !== undefined && !isValidType) {
                onProgressOut = type as ProgressCallback;
                typeOut = null;
            }
        }
        return { paths: pathsOut, type: typeOut, onProgress: onProgressOut, onComplete: onCompleteOut };
    }

    private loadByBundleAndArgs<T extends Asset>(bundle: AssetManager.Bundle, args: ILoadResArgs<T>): void {
        if (args.dir) {
            bundle.loadDir(args.paths as string, args.type, args.onProgress, args.onComplete);
        }
        else {
            if (typeof args.paths == 'string') {
                bundle.load(args.paths, args.type, args.onProgress, args.onComplete);
            }
            else {
                bundle.load(args.paths, args.type, args.onProgress, args.onComplete);
            }
        }
    }

    private loadByArgs<T extends Asset>(args: ILoadResArgs<T>) {
        if (args.bundle) {
            if (assetManager.bundles.has(args.bundle)) {
                let bundle = assetManager.bundles.get(args.bundle);
                this.loadByBundleAndArgs(bundle!, args);
            }
            else {
                // 自动加载bundle
                assetManager.loadBundle(args.bundle, (err, bundle) => {
                    if (!err) {
                        this.loadByBundleAndArgs(bundle, args);
                    }
                })
            }
        }
        else {
            this.loadByBundleAndArgs(resources, args);
        }
    }
    private preloadByBundleAndArgs<T extends Asset>(bundle: AssetManager.Bundle, args: ILoadResArgs<T>): void {
        if (args.dir) {
            bundle.preloadDir(args.paths as string, args.type, args.onProgress, args.onComplete);
        }
        else {
            if (typeof args.paths == 'string') {
                bundle.preload(args.paths, args.type, args.onProgress, args.onComplete);
            }
            else {
                bundle.preload(args.paths, args.type, args.onProgress, args.onComplete);
            }
        }
    }

    private preloadByArgs<T extends Asset>(args: ILoadResArgs<T>) {
        if (args.bundle) {
            if (assetManager.bundles.has(args.bundle)) {
                let bundle = assetManager.bundles.get(args.bundle);
                this.loadByBundleAndArgs(bundle!, args);
            }
            else {
                // 自动加载bundle
                assetManager.loadBundle(args.bundle, (err, bundle) => {
                    if (!err) {
                        this.loadByBundleAndArgs(bundle, args);
                    }
                })
            }
        }
        else {
            this.loadByBundleAndArgs(resources, args);
        }
    }

    /**
     * 预加载资源
     * @param bundleName        assetbundle的路径（image/bg）
     * @param paths             资源paths或paths数组 相对包的相对路径
     * @param type 资源类型，默认为null
     * @param onProgress 加载进度回调
     * @param onComplete 加载完成回调
     */
    public preload<T extends Asset>(bundleName: string, paths: string | string[], type: AssetType<T> | null, onProgress: ProgressCallback | null, onComplete: CompleteCallback<T> | null): void;
    public preload<T extends Asset>(bundleName: string, paths: string | string[], onProgress: ProgressCallback | null, onComplete: CompleteCallback<T> | null): void;
    public preload<T extends Asset>(bundleName: string, paths: string | string[], type: AssetType<T> | null, onComplete?: CompleteCallback<T> | null): void;
    public preload<T extends Asset>(bundleName: string, paths: string | string[], onComplete?: CompleteCallback<T> | null): void;
    public preload<T extends Asset>(paths: string | string[], type: AssetType<T> | null, onProgress: ProgressCallback | null, onComplete: CompleteCallback<T> | null): void;
    public preload<T extends Asset>(paths: string | string[], onProgress: ProgressCallback | null, onComplete: CompleteCallback<T> | null): void;
    public preload<T extends Asset>(paths: string | string[], type: AssetType<T> | null, onComplete?: CompleteCallback<T> | null): void;
    public preload<T extends Asset>(paths: string | string[], onComplete?: CompleteCallback<T> | null): void;
    public preload<T extends Asset>(
        bundleName: string,
        paths?: string | string[] | AssetType<T> | ProgressCallback | CompleteCallback | null,
        type?: AssetType<T> | ProgressCallback | CompleteCallback | null,
        onProgress?: ProgressCallback | CompleteCallback | null,
        onComplete?: CompleteCallback | null,
    ) {
        let args: ILoadResArgs<T> | null = null;
        if (typeof paths === "string" || paths instanceof Array) {
            args = this.parseLoadResArgs(paths, type, onProgress, onComplete);
            args.bundle = bundleName;
        }
        else {
            args = this.parseLoadResArgs(bundleName, paths, type, onProgress);
        }
        this.preloadByArgs(args);
    }
    /**
     * 开始加载资源
     * @param bundleName        assetbundle的路径（image/bg）
     * @param paths             资源paths或paths数组 相对包的相对路径
     * @param type              资源类型，默认为null
     * @param onProgess         加载进度回调
     * @param onComplete        加载完成回调
     */
    public load<T extends Asset>(bundleName: string, paths: string | string[], type: AssetType<T> | null, onProgress: ProgressCallback | null, onComplete: CompleteCallback<T> | null): void;
    public load<T extends Asset>(bundleName: string, paths: string | string[], onProgress: ProgressCallback | null, onComplete: CompleteCallback<T> | null): void;
    public load<T extends Asset>(bundleName: string, paths: string | string[], onComplete?: CompleteCallback<T> | null): void;
    public load<T extends Asset>(bundleName: string, paths: string | string[], type: AssetType<T> | null, onComplete?: CompleteCallback<T> | null): void;
    public load<T extends Asset>(paths: string | string[], type: AssetType<T> | null, onProgress: ProgressCallback | null, onComplete: CompleteCallback<T> | null): void;
    public load<T extends Asset>(paths: string | string[], onProgress: ProgressCallback | null, onComplete: CompleteCallback<T> | null): void;
    public load<T extends Asset>(paths: string | string[], onComplete?: CompleteCallback<T> | null): void;
    public load<T extends Asset>(paths: string | string[], type: AssetType<T> | null, onComplete?: CompleteCallback<T> | null): void;
    public load<T extends Asset>(
        bundleName: string,
        paths?: string | string[] | AssetType<T> | ProgressCallback | CompleteCallback | null,
        type?: AssetType<T> | ProgressCallback | CompleteCallback | null,
        onProgress?: ProgressCallback | CompleteCallback | null,
        onComplete?: CompleteCallback | null,
    ) {
        let args: ILoadResArgs<T> | null = null;
        if (typeof paths === "string" || paths instanceof Array) {
            args = this.parseLoadResArgs(paths, type, onProgress, onComplete);
            args.bundle = bundleName;
        }
        else {
            args = this.parseLoadResArgs(bundleName, paths, type, onProgress);
        }
        this.loadByArgs(args);
    }
    /**加载目录 */
    public loadDir<T extends Asset>(bundleName: string, dir: string, type: AssetType<T> | null, onProgress: ProgressCallback | null, onComplete: CompleteCallback<T[]> | null): void;
    public loadDir<T extends Asset>(bundleName: string, dir: string, onProgress: ProgressCallback | null, onComplete: CompleteCallback<T[]> | null): void;
    public loadDir<T extends Asset>(bundleName: string, dir: string, onComplete?: CompleteCallback<T[]> | null): void;
    public loadDir<T extends Asset>(bundleName: string, dir: string, type: AssetType<T> | null, onComplete?: CompleteCallback<T[]> | null): void;
    public loadDir<T extends Asset>(dir: string, type: AssetType<T> | null, onProgress: ProgressCallback | null, onComplete: CompleteCallback<T[]> | null): void;
    public loadDir<T extends Asset>(dir: string, onProgress: ProgressCallback | null, onComplete: CompleteCallback<T[]> | null): void;
    public loadDir<T extends Asset>(dir: string, onComplete?: CompleteCallback<T[]> | null): void;
    public loadDir<T extends Asset>(dir: string, type: AssetType<T> | null, onComplete?: CompleteCallback<T[]> | null): void;
    public loadDir<T extends Asset>(
        bundleName: string,
        dir?: string | AssetType<T> | ProgressCallback | CompleteCallback | null,
        type?: AssetType<T> | ProgressCallback | CompleteCallback | null,
        onProgress?: ProgressCallback | CompleteCallback | null,
        onComplete?: CompleteCallback | null,
    ) {
        let args: ILoadResArgs<T> | null = null;
        if (typeof dir === "string") {
            args = this.parseLoadResArgs(dir, type, onProgress, onComplete);
            args.bundle = bundleName;
        }
        else {
            args = this.parseLoadResArgs(bundleName, dir, type, onProgress);
        }
        args.dir = args.paths as string;
        this.loadByArgs(args);
    }
    /**加载远端资源 */
    public loadRemote<T extends Asset>(url: string, options: IRemoteOptions | null, onComplete?: CompleteCallback<T> | null): void;
    public loadRemote<T extends Asset>(url: string, onComplete?: CompleteCallback<T> | null): void;
    public loadRemote(
        url: string,
        options?: IRemoteOptions | CompleteCallback | null,
        onComplete?: CompleteCallback | null
    ) {
        if (Utils.string_isHttp(url)) {
            if (GameConfig.instance.isOnlineServer()) {
                //线上:将所有远端资源全部采用https
                url = String(url).replace("http://", "https://")
                url = String(url).replace("HTTP://", "https://")
                url = String(url).replace("uchead.static.17c.cn", "dfqppic.266.com")
            }
        }
        if (onComplete) {
            assetManager.loadRemote(url, options, onComplete);
        } else {
            assetManager.loadRemote(url, options);
        }

    }


    /**释放资源 */
    public release(path: string, bundleName: string = "resources") {
        if (path) {
            var bundle = assetManager.getBundle(bundleName);
            bundle?.release(path);
        }
    }
    /**释放资源 定义的list*/
    public releaseList(pathList: string[], bundleName: string = "resources") {
        if (pathList && pathList.length > 0) {
            for (let index = 0; index < pathList.length; index++) {
                let path = pathList[index];
                this.release(path, bundleName)
            }
        }
    }

    /**释放目录资源 */
    public releaseDir(path: string, bundleName: string = "resources") {
        var bundle: AssetManager.Bundle | null = assetManager.getBundle(bundleName);
        var infos = bundle?.getDirWithPath(path);
        infos?.map(function (info) {
            var asset = assetManager.assets.get(info.uuid)!;
            assetManager.releaseAsset(asset);
        });

        if (path == "" && bundleName != "resources" && bundle) {
            assetManager.removeBundle(bundle);
        }
    }
    /**获取已加载的内存资源 */
    public get<T extends Asset>(path: string, type?: __private._cocos_core_asset_manager_shared__AssetType<T> | null, bundleName: string = "resources"): T | null {
        let bundle: AssetManager.Bundle | null = assetManager.getBundle(bundleName);
        if (bundle && bundle["get"]) {
            return bundle.get(path, type);
        } else {
            return null;
        }
    }

    public dump() {
        assetManager.assets.forEach((value: Asset, key: string) => {
            // console.log(key);
        })
        console.log(`当前资源总数:${assetManager.assets.count}`);
    }
}

export let resLoader = new ResLoader();