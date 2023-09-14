
import { Asset, JsonAsset, path, resources, sys, TextAsset } from "cc";

// @ts-ignore
let ProtoBuf = dcodeIO.ProtoBuf;
// @ts-ignore
let Long = dcodeIO.Long;
// @ts-ignore
let ByteBuffer = dcodeIO.ByteBuffer;


ProtoBuf.Util.IS_NODE = false;
ProtoBuf.Util.fetch = function (url: string) {
    let asset: any = resources.get(path.mainFileName(url), Asset);
    if (asset instanceof TextAsset) {
        return asset.text;
    } else if (asset instanceof JsonAsset) {
        return asset.json;
    } else {
        return asset;
    }
}
ProtoBuf.Util.mainFileName = function (fileName: string) {
    if (fileName) {
        const idx = fileName.lastIndexOf('.');
        if (idx !== -1) {
            return fileName.substring(0, idx);
        }
    }
    return fileName;
}
/**
 * 加载proto
 */
let loadProto = ProtoBuf.loadProto.bind(ProtoBuf);
ProtoBuf.loadProto = function (asset: string | TextAsset, builder: any, filename: string) {
    try {
        if (typeof asset === 'string') {
            loadProto(asset, builder, filename);
        } else if (asset.text) {
            loadProto(asset.text, builder, filename);
        }
    } catch (e) {
        console.warn(`${filename}: protobuf syntax error`);
    }
};


/**
 * 加载json文件 
 */
ProtoBuf.loadJsonFile = function (filename: string, callback: any, builder: any) {
    if (callback && typeof callback === 'object')
        builder = callback,
            callback = null;
    else if (!callback || typeof callback !== 'function')
        callback = null;
    if (callback)
        return ProtoBuf.Util.fetch(typeof filename === 'string' ? filename : filename["root"] + "/" + filename["file"], function (contents) {
            if (contents === null) {
                callback(Error("Failed to fetch file"));
                return;
            }
            try {
                callback(null, ProtoBuf.loadJson(JSON.parse(contents), builder, filename));
            } catch (e) {
                callback(e);
            }
        });

    let url = typeof filename === 'object' ? filename["root"] + "/" + filename["file"] : filename;
    let json;
    if (ProtoBuf.preloaded) {
        let content = resources.get(url, Asset);
        if (content instanceof JsonAsset) {
            json = content.json
        } else {
            // @ts-ignore
            json = console.text;
        }

    } else {
        let content = ProtoBuf.Util.fetch(url);
        if (content) {
            json = JSON.parse(content);
        }
    }

    return json ? ProtoBuf.loadJson(json, builder, filename) : null;
};

const pbkiller = {
    //类型
    ProtoBuf: ProtoBuf,
    Long: Long,
    ByteBuffer: ByteBuffer,
    Map: ProtoBuf.Map,
    root: 'proto',  //定义pb路径 默认resource/.. 下
    urls: [],

    preload(updateFunc: Function = null, cb: Function = null) {
        resources.loadDir(
            pbkiller.root,
            (finished: number, total: number, item) => {
                if (updateFunc) {
                    updateFunc(finished, total, item);
                }

            },
            (err, data: any) => {
                ProtoBuf.preloaded = !err;
                pbkiller.urls = data;
                if (cb) {
                    cb(err, data);
                }
            });
    },
    /**
     * 加载文件proto文件，支持json、proto格式
     * @param {String|Array} files 
     */
    loadFromFile(fileNames: Array<string> | string, packageName: string) {
        if ((sys.isNative || sys.platform === sys.Platform.WECHAT_GAME) && !ProtoBuf.preloaded) {
            console.error('原生或微信小游戏上，需要先调用preload函数');
            return;
        }
        if (typeof fileNames === 'string') {
            fileNames = [fileNames];
        }

        let builder = ProtoBuf.newBuilder();
        builder.importRoot = pbkiller.root;

        fileNames.forEach((fileName: string) => {
            if (!fileName.startsWith(pbkiller.root)) {
                fileName = path.join(pbkiller.root, fileName);
            }
            let extname = path.extname(fileName);
            let mainfilename = path.mainFileName(fileName);
            if (extname === '.proto') {
                ProtoBuf.loadProtoFile(mainfilename, builder);
            } else {
                console.log(`nonsupport file extname, only support 'proto'`);
            }
        });

        return builder.build(packageName);
    },

    /**
     * 加载所有proto文件
     * @param {String} extname 
     * @param {String} packageName 
     */
    loadAll(packageName = ''): any {
        if (pbkiller.root.endsWith('/') || pbkiller.root.endsWith('\\')) {
            pbkiller.root = pbkiller.root.substr(0, pbkiller.root.length - 1);
        }

        //获取pbkiller.root下的所有文件名
        let files: Array<string> = [];
        this.urls.forEach((asset: Asset) => {
            if (asset instanceof TextAsset) {
                // @ts-ignore
                files.push(`${resources.getAssetInfo(asset._uuid).path}.proto`);
            }
        });
        return this.loadFromFile(files, packageName);
    }
}

export { pbkiller };
