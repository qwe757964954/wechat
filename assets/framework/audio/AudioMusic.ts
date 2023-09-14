import { AudioClip, AudioSource, error, _decorator } from 'cc';
import { resLoader } from '../loader/ResLoader';
const { ccclass, menu } = _decorator;

/** 背景音乐 */
@ccclass('AudioMusic')
export class AudioMusic extends AudioSource {
    public onComplete: Function | null = null;

    private _progress: number = 0;
    private _bundle: string = "resources";
    private _path: string | null = null;

    /** 是否处于暂停中 */
    private _isPause: boolean = false;
    /** 是否停止了播放 */
    private _isStopPlay: boolean = false;
    /** 是否播放阶段 */
    private _isStartPlay: boolean = false;
    /** 当前音量 */
    private _currowVolume: number = 1;

    constructor() {
        super();
    }
    /**
     * 设置音乐当前播放进度
     * @param progress 进度百分比(0~1)
     */
    public get progress() {
        this._progress = this.currentTime / this.duration;
        return this._progress;
    }
    public set progress(value: number) {
        this._progress = value;
        this.currentTime = value * this.duration;
    }

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
    }

    public load(bundleName: string = "resources", path: string, callback?: Function) {
        //针对同一音频不再重复播放
        if (this._path == path && this._bundle == bundleName) {
            if (this.isPlay() == true) {
                if (callback) {
                    callback();
                }
                console.log("针对同一音频不再重复播放--->", 1, this._isPause)
                return;
            } else {
                if (this.clip) {
                    if (this._isPause == false) {
                        if (this.playing == false) {//此处有可能为中断
                            this.startPause();
                            this.startPlay();
                        }
                    }
                    if (callback) {
                        callback();
                    }
                    console.log("针对同一音频不再重复播放--->", 2, this._isPause, this.playing, this.state)
                    return;
                }
            }
        }
        this._isStopPlay = false;
        this._isStartPlay = true;
        // console.log(" 开始播放===>", path)
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
            return;
        }
        if (this._isStopPlay == true) {
            return;
        }
        if (this.playing || this.state == AudioSource.AudioState.INTERRUPTED) {
            this.startStop();
            if (this._path != path && this._bundle != bundleName) {
                resLoader.release(this._path!, this._bundle);
            }
        }
        this.clip = audioClip;
        this.currentTime = 0;
        this.volume = this._currowVolume;
        if (this._isPause == false) {
            this.startPlay();
        }
        if (callback) {
            callback();
        }

        this._path = path;
        this._bundle = bundleName
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
    }
    /** 更新暂停状态 */
    updatePauseState(state: boolean) {
        this._isPause = state || false;
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
            num = 0;
        }
        this._currowVolume = num;
        if (this.isPlay() || this.isPause()) {
            this.volume = this._currowVolume;
        }

    }
    release() {
        if (this._path) {
            resLoader.release(this._path, this._bundle);
            this._path = null;
            this._bundle = "resources"
        }
        this.startStop();
        this._isPause = false;
    }
}
