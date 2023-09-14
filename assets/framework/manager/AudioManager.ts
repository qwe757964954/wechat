import { assetManager, AudioClip, AudioSource, director, Node, _decorator } from "cc";
import { AppEvent } from "../../config/AppEvent";
import { AudioEffect } from "../audio/AudioEffect";
import { AudioMusic } from "../audio/AudioMusic";
import { inf_AudioPlay } from "../InterfaceDefines";
import { LocalStorage } from "../LocalStorage";
import { BaseControll } from "../vc/BaseController";

const { ccclass } = _decorator;
/**
 * Name = AudioManager
 * URL = db://assets/framework/manager/AudioManager.ts
 * Time = Thu Apr 28 2022 15:19:38 GMT+0800 (中国标准时间)
 * Author = xueya
 *
 * Life: onLoad-->onEnable->start->update->lateUpdate->onDisable->onDestroy
 * 音效管理
 */

const LOCAL_STORE_KEY = "game_audio";


@ccclass('AudioManager')
export class AudioManager extends BaseControll {

    private static _instance: AudioManager;

    private _audioManagerNode: Node = null;

    public musicPNode: Node = null;
    public effectPNode: Node = null;

    public static getInstance(): AudioManager {
        if (!this._instance || this._instance == null) {
            this._instance = new AudioManager("AudioManager");
        }
        if (!this._instance._audioManagerNode) {
            let root = director.getScene().getChildByName("root");
            let nodeAudioManager = root.getChildByName("NodeAudioManager");
            if (!nodeAudioManager) {
                nodeAudioManager = new Node("UIAudioManager");
                root.addChild(nodeAudioManager);
            }
            this._instance._audioManagerNode = nodeAudioManager;

            let nodeUIMusic = nodeAudioManager.getChildByName("NodeUIMusic");
            if (!nodeUIMusic) {
                nodeUIMusic = new Node("NodeUIMusic");
                nodeUIMusic.addComponent(AudioMusic);
                nodeAudioManager.addChild(nodeUIMusic);
            }
            this._instance.musicPNode = nodeUIMusic;
            this._instance.music = nodeUIMusic.getComponent(AudioMusic);

            let nodeUIEffect = nodeAudioManager.getChildByName("NodeUIEffect");
            if (!nodeUIEffect) {
                nodeUIEffect = new Node("NodeUIEffect");
            }
            this._instance.effectPNode = nodeUIEffect;

            this._instance.initData();
        }
        return this._instance;
    }
    public static init(): AudioManager {
        if (this._instance) {
            this._instance.clear();
        }
        this._instance = null
        AudioManager.getInstance();
        return
    }

    /** 初始化模块事件 */
    protected onInitModuleEvent() {
        //播放上次播放的背景音乐
        this.addModelListener(AppEvent.SYS_PLAY_MUSIC_LAST, this.receivePlayMusicLast);
        //播放背景音乐
        this.addModelListener(AppEvent.SYS_PLAY_MUSIC, this.receivePlayMusic);
        //播放音效
        this.addModelListener(AppEvent.SYS_PLAY_EFFECT, this.receivePlayEffect);
        //停止播放背景音乐
        this.addModelListener(AppEvent.SYS_STOP_PLAY_MUSIC, this.receiveStopPlayMusic);
        //停止播放音效
        this.addModelListener(AppEvent.SYS_STOP_PLAY_EFFECT, this.receiveStopPlayEffect);

    }

    /**
     * 加载音效文件目录
     * @param bundle 包名
     * @param dirPath 根目录文件夹名
     * @param upFunc 进度更新
     * @param cb 完成回调
     */
    public preLoadAudioDir(bundle: string, dirPath: string, upFunc: Function = null, cb: Function = null) {
        dirPath = dirPath || "";

        let preKey = bundle + "|" + dirPath;
        const self = this;

        // 自动加载bundle
        assetManager.loadBundle(bundle, (err, bundle) => {
            if (err) {
                self.print("加载包名出错", err);
                if (cb) {
                    cb(err, bundle);
                }
                return;
            }
            bundle.loadDir(dirPath, AudioClip,
                (finished: number, total: number, item) => {
                    if (upFunc) {
                        upFunc(finished, total, item);
                    }
                },
                (err, data: any) => {
                    if (err) {
                        self.print(err);
                        if (cb) {
                            cb(err, data);
                        }
                        return;
                    }
                    // console.log("加载的数据：", data)
                    if (cb) {
                        cb(null, data);
                    }
                });
        })
    }

    /** 上次音乐文件的播放 */
    private receivePlayMusicLast(event) {
        if (this._lastPlayMusicData.length == 0 || this._lastPlayMusicData[0]["path"] == null) {
            this._lastPlayMusicData = [];
            return;
        }
        this._playMusicData = {};
        let musicConf = this._lastPlayMusicData.pop();
        this.playMusic(musicConf["path"], musicConf["bundle"], musicConf["isLoop"], musicConf["callback"]);
    }

    /** 音乐文件的播放 */
    private receivePlayMusic(event, param: inf_AudioPlay) {
        if (!param || param.path == null) {
            return;
        }
        // this.print("背景音乐的播放：", param)
        this.playMusic(param.path, param.bundle, true, param.callEndFunc);
    }
    /** 音效文件的播放 */
    private receivePlayEffect(event, param: inf_AudioPlay) {
        if (!param || param.path == null) {
            return;
        }
        this.playEffect(param.path, param.bundle);
    }
    /** 停止播放背景音乐 */
    private receiveStopPlayMusic(event) {
        if (this.music) {
            this.music.startStop();
            this.music.clip = null;
        }
    }
    /**
     * 停止播放音效
     * @param event 
     * @param param 默认为空 可停止指定音效 { bundle: null, path: null }
     */
    private receiveStopPlayEffect(event, param: inf_AudioPlay = null) {
        for (let i = (this.nodeEffectList.length - 1); i >= 0; i--) {
            let itemConf;
            itemConf = this.nodeEffectList[i];
            if (itemConf && itemConf["node"].isValid == true) {
                if (param) {
                    let effectPlayConf = itemConf["commp"].getCurrowPlayConf();
                    if (effectPlayConf["bundle"] == param.bundle && effectPlayConf["path"] == param.path) {
                        itemConf["comp"].startStop();
                        itemConf["comp"].clip = null;
                    }
                } else {
                    itemConf["comp"].startStop();
                    itemConf["comp"].clip = null;
                }
            } else {
                this.nodeEffectList.splice(i, 1);
            }
        }
    }

    private local_data: any = {};

    private music!: AudioMusic;
    private effect!: AudioEffect;
    /** 音效节点队列 */
    private nodeEffectList: Array<{}> = [];
    /** 音乐 0~1 */
    private _volume_music: number = 1;
    /** 音效 0~1 */
    private _volume_effect: number = 1;
    private _switch_music: boolean = true;
    private _switch_effect: boolean = true;
    private _uuid: string = "10000";                // 玩家唯一标识，一般为玩家数据库唯一编号
    private _localStorageTag: string = "";          // 本地存储标签名
    //播放背景音乐的数据
    public _playMusicData = {};
    //播放背景音乐的数据
    public _lastPlayMusicData: Array<{}> = [];

    private initData() {
        let data = LocalStorage.get(this._localStorageTag);
        if (data) {
            try {
                this.local_data = JSON.parse(data);
                this._volume_music = this.local_data.volume_music;
                this._volume_effect = this.local_data.volume_effect;
                this._switch_music = this.local_data.switch_music;
                this._switch_effect = this.local_data.switch_effect;
            }
            catch (e) {
                this.local_data = {};
                this._volume_music = 1;
                this._volume_effect = 1;
                this._switch_music = true;
                this._switch_effect = true;
            }

            this.music.volume = this._volume_music;
        }
    }

    /** 设置玩家唯一标识 */
    public setUuid(value: string) {
        this._uuid = value;
        this._localStorageTag = `${LOCAL_STORE_KEY}_${this._uuid}`;
    }
    /** 获取一个全新的音效空节点 */
    private getNewEffect() {
        let nodeConf: { node: Node, comp: AudioEffect } = null;
        for (let i = (this.nodeEffectList.length - 1); i >= 0; i--) {
            let itemConf;
            itemConf = this.nodeEffectList[i];
            if (itemConf && itemConf["node"].isValid == true) {
                if (itemConf["comp"].isPlay() == false && itemConf["comp"].isPause() == false) {
                    nodeConf = itemConf;
                    break;
                }
            } else {
                this.nodeEffectList.splice(i, 1);
            }
        }
        if (!nodeConf) {
            let nodeUIEffect = new Node("NodeUIEffect");
            nodeUIEffect.addComponent(AudioEffect);
            this.effectPNode.addChild(nodeUIEffect);
            let comp = nodeUIEffect.getComponent(AudioEffect);

            nodeConf = { node: nodeUIEffect, comp: comp };
            this.nodeEffectList.push(nodeConf);
        }
        nodeConf.comp.initData();
        nodeConf.comp.volume = this._volume_effect;
        return nodeConf;
    }
    /**
     *  播放背景音乐
     * @param path        资源地址
     * @param bundleName  包名
     * @param isLoop      是否循环 默认循环
     * @param callback    音乐播放完成事件
     */
    playMusic(path: string, bundleName: string = "resources", isLoop: boolean = true, callback: Function | null = null) {
        if (this._playMusicData["path"]) {
            this._lastPlayMusicData.push({
                path: this._playMusicData["path"],
                bundle: this._playMusicData["bundle"],
                isLoop: this._playMusicData["isLoop"],
                callback: this._playMusicData["callback"]
            });
        }

        //保存参数配置
        this._playMusicData = {
            path: path,
            bundle: bundleName,
            isLoop: isLoop,
            callback: callback
        };
        if (this._switch_music) {
            this.music.load(bundleName, path);
            this.music.loop = isLoop
            this.music.onComplete = callback;
        } else {
            this.print("播放音乐失败,开关已关闭path=", path);
        }
    }

    /**
     * 播放音效
     * @param path        资源地址
     * @param bundleName  包名
     */
    playEffect(path: string, bundleName: string = "resources") {
        if (this._switch_effect) {
            let effectConf = this.getNewEffect();
            effectConf.comp.load(bundleName, path);
            effectConf.comp.setVolume(this._volume_effect);
        }
    }

    /** 获取背景音乐音量 */
    public get musicVolume(): number {
        return this._volume_music;
    }
    /** 设置音乐音量 */
    public set MusicVolume(value: number) {
        this._volume_music = value;
        this.music.setVolume(value);
    }

    /** 获取音效音量 */
    public get effectVolume(): number {
        return this._volume_effect;
    }
    /** 设置音效音量 */
    public set EffectVolume(value: number) {
        this._volume_effect = value;
    }

    /** 获取音乐开关 */
    public getSwitchMusic(): boolean {
        return this._switch_music;
    }
    /** 设置背景音乐开关 */
    public setSwitchMusic(value: boolean) {
        this._switch_music = value;

        if (this._switch_music == true) {
            if (this.music.state == AudioSource.AudioState.PAUSED) {
                this.music.startPlay();
            } else if (this.music.isPlay() == false) {
                if (this._playMusicData["path"] && this._playMusicData["bundle"]) {
                    let currowMusicConf = {
                        path: this._playMusicData["path"],
                        bundle: this._playMusicData["bundle"],
                        isLoop: this._playMusicData["isLoop"],
                        callback: this._playMusicData["callback"]
                    };
                    this._playMusicData = {};
                    this.music.updatePauseState(false);
                    this.playMusic(currowMusicConf["path"], currowMusicConf["bundle"], currowMusicConf["isLoop"], currowMusicConf["callback"]);
                } else {
                    this.print("没有音乐文件配置")
                }
            }
        } else {
            this.music.startStop();
        }
    }

    /** 音效开关 */
    public getSwitchEffect(): boolean {
        return this._switch_effect;
    }
    /** 设置音效开关 */
    public setSwitchEffect(value: boolean) {
        this._switch_effect = value;
        if (value == false) {
            for (let i = (this.nodeEffectList.length - 1); i >= 0; i--) {
                let itemConf;
                itemConf = this.nodeEffectList[i];
                if (itemConf && itemConf["node"].isValid == true) {
                    itemConf["comp"].startStop();
                    itemConf["comp"].clip = null;
                } else {
                    this.nodeEffectList.splice(i, 1);
                }
            }
        }
    }

    /** 恢复所有 */
    public resumeAll() {
        this.print("恢复所有:", this._switch_music, this._switch_effect, this._playMusicData)
        if (this._switch_music == true) {
            if (this.music) {
                this.print("当前音乐状态：===>", this.music.state, this.music.clip);
                if (this.music.state == AudioSource.AudioState.PAUSED && this.music.clip) {
                    this.music.startPlay();
                } else if (this.music.isPlay() == false) {
                    if (this._playMusicData["path"] && this._playMusicData["bundle"]) {
                        let currowMusicConf = {
                            path: this._playMusicData["path"],
                            bundle: this._playMusicData["bundle"],
                            isLoop: this._playMusicData["isLoop"],
                            callback: this._playMusicData["callback"]
                        };
                        this._playMusicData = {};
                        this.music.updatePauseState(false);
                        this.playMusic(currowMusicConf["path"], currowMusicConf["bundle"], currowMusicConf["isLoop"], currowMusicConf["callback"]);
                    }
                }
            }
        }
        // if (this._switch_effect == true) {
        //     if (this.effect && this.effect.clip) {
        //         if (this.effect.state == AudioSource.AudioState.PAUSED) {
        //             this.effect.play();
        //         }
        //     }
        // }
    }
    /** 暂停所有 */
    public pauseAll() {
        if (this.music.isPlay() == true) {
            this.music.startPause();
        }
        for (let i = (this.nodeEffectList.length - 1); i >= 0; i--) {
            let itemConf;
            itemConf = this.nodeEffectList[i];
            if (itemConf && itemConf["node"].isValid == true) {
                if (itemConf["comp"].state == AudioSource.AudioState.PLAYING) {
                    itemConf["comp"].startStop();
                    itemConf["comp"].clip = null;
                }
            } else {
                this.nodeEffectList.splice(i, 1);
            }
        }
    }
    /** 停止播放 */
    public stopAll() {
        if (this.music) {
            this.music.startStop();
            this.music.clip = null;
        }
        for (let i = (this.nodeEffectList.length - 1); i >= 0; i--) {
            let itemConf;
            itemConf = this.nodeEffectList[i];
            if (itemConf && itemConf["node"].isValid == true) {
                itemConf["comp"].startStop();
                itemConf["comp"].clip = null;
            } else {
                this.nodeEffectList.splice(i, 1);
            }
        }
    }
    /** 是否关闭了所有 */
    public isCloseAll() {
        if (!this.getSwitchMusic() && !this.getSwitchMusic()) {
            return true
        }
        return false
    }
    public save() {
        this.local_data.volume_music = this._volume_music;
        this.local_data.volume_effect = this._volume_effect;
        this.local_data.switch_music = this._switch_music;
        this.local_data.switch_effect = this._switch_effect;

        let data = JSON.stringify(this.local_data);
        LocalStorage.set(this._localStorageTag, data);
    }
    /** 清理所有 */
    public releaseAll() {
        this.print("AudioManager清理所有=====>")
        this.stopAll()
        this._playMusicData = {};
        if (this.music) {
            this.music.release();
        }
        for (let i = (this.nodeEffectList.length - 1); i >= 0; i--) {
            let itemConf;
            itemConf = this.nodeEffectList[i];
            if (itemConf && itemConf["node"].isValid == true) {
                itemConf["comp"].release()
            } else {
                this.nodeEffectList.splice(i, 1);
            }
        }
    }

    clear() {
        super.clear();
        this.releaseAll();
    }
}

