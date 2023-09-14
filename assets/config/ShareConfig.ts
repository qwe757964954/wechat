

/*** 分享朋友圈或好友的配置 */
export interface Inf_ShareConfig {
    /** 分享文案 */
    title?: String,
    /** 分享图片地址 */
    imageUrl?: String,
}

/** 分享配置 */
export const ShareConfig: { [key: string]: Inf_ShareConfig | Array<Inf_ShareConfig> } = {
    

}