import { AudioClip, AudioSource, error, _decorator } from 'cc';
import { resLoader } from '../loader/ResLoader';
const { ccclass, menu } = _decorator;

/**
 * 注：用playOneShot播放的音乐效果，在播放期间暂时没办法即时关闭音乐
 */

/** 游戏音效 */
@ccclass('AudioEffect')
export class AudioEffect extends AudioSource {
    constructor() {
        super();
    }
    /** 是否处于暂停中 */
    private _isPause: boolean = false;
    /** 是否停止了播放 */
    private _isStopPlay: boolean = false;
    /** 是否播放阶段 */
    private _isStartPlay: boolean = false;
    /** 当前音量 */
    private _currowVolume: number = 1;
    /** 当前正在播放的记录 */
    private currowPlayEffect = {
        bundle: null,
        path: null
    };

    /** 所有播放过的记录 */
    private effects: Map<string, string> = new Map<string, string>();

    initData() {
        /** 是否处于暂停中 */
        this._isPause = false;
        /** 是否停止了播放 */
        this._isStopPlay = false;
        /** 是否播放阶段 */
        this._isStartPlay = false;
        if (this.clip) {
            this.stop();
        }
        this.clip = null;

        this.currowPlayEffect = { bundle: null, path: null };
    }
    public load(bundleName: string = "resources", path: string, callback?: Function) {
        this._isStopPlay = false;
        this._isStartPlay = true;
        let self = this;

        resLoader.load(bundleName, path, AudioClip, (err: Error | null, data: AudioClip) => {
            if (err) {
                error(err);
            }
            self.realLoadAudioClip.call(self, bundleName, path, data, callback);
        });

    }

    /** 真正的加载包 */
    private realLoadAudioClip(bundleName, path, audioClip: AudioClip, callback?: Function) {
        this._isStartPlay = false;
        if (!this.node || this.node.isValid == false) {
            this.currowPlayEffect = { bundle: null, path: null };
            return;
        }
        if (this._isStopPlay == true) {
            return;
        }
        this.loop = false;
        this.clip = audioClip;
        this.currowPlayEffect = { bundle: bundleName, path: path };
        this.effects.set(path, bundleName);
        this.volume = this._currowVolume;
        this.startPlay();

        if (callback) {
            callback();
        }
    }
    /** 获取当前正在播放的资源配置(停止播放时清空) */
    getCurrowPlayConf() {
        return this.currowPlayEffect;
    }
    /** 是否处于播放阶段 */
    isPlay(): boolean {
        if (this._isStartPlay) {
            return true;
        }
        return this.state == AudioSource.AudioState.PLAYING;
    }
    /** 是否处于暂停阶段 */
    isPause(): boolean {
        return this.state == AudioSource.AudioState.PAUSED;
    }

    /** 播放 */
    startPlay() {
        this.play();
        this._isPause = false;
    }
    /** 暂停 */
    startPause() {
        this.pause();
        this._isPause = true;
    }
    /** 停止 */
    startStop() {
        this.stop();
        this._isStopPlay = true;
        this.currowPlayEffect = { bundle: null, path: null };
    }
    /** 设置音量 0~1 */
    setVolume(num: number) {
        num = Number(num);
        if (isNaN(num)) {
            return;
        }
        if (num > 1) {
            num = 1;
        } else if (num < 0) {
            num = 0
        }
        this._currowVolume = num;
        if (this.isPlay() || this.isPause()) {
            this.volume = this._currowVolume;
        }

    }
    release() {
        console.log("=============>音效资源释放：", this.effects)
        for (let key in this.effects) {
            resLoader.release(key, this.effects[key]);
        }
        this.startStop();
        this.effects.clear();


    }
}
