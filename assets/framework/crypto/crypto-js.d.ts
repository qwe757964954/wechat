export const global: any;
declare global {

    class WordArray {
        init: Function;
        toString: Function;
        concat: Function;
        clamp: Function;
        clone: Function;
        random: Function;
    }

    namespace CryptoJS {

        namespace AES {
            /**
             * 加密
             * @param message 
             * @param key 
             * @param cfg 
             * @returns WordArray toString会返回base64
             */
            export function encrypt(message: string | WordArray, key: string | WordArray, cfg: { iv: string | WordArray, mode: mode, padding: pad }): WordArray;
            /**
             * 解密
             * @param text 
             * @param key 
             * @param cfg 
             * @returns WordArray toString会返回hex
             */
            export function decrypt(text: string, key: string | WordArray, cfg: { iv: string | WordArray, mode: mode, padding: pad }): WordArray;
        }

        namespace enc {
            namespace Utf8 {
                /**将字符串转换成WordArray */
                export function parse(key: WordArray): WordArray;
                /** 将加密数据字符串化 */
                export function stringify(word: WordArray): string;
                /** 将加密数据 */
                export function uint8Array(word: WordArray): string;
            }
            /** 16进制 */
            namespace Hex {
                /**将字符串转换成WordArray */
                export function parse(key: string): WordArray;
                /** 将加密数据字符串化 */
                export function stringify(word: WordArray): string;
            }

            /** U8Array进制 */
            namespace U8Array {
                /**将字符串转换成WordArray */
                export function parse(key: string): WordArray;
                /** 将加密数据字符串化 */
                export function stringify(word: WordArray): string;
            }
            /** Base64 */
            namespace Base64 {
                /**将字符串转换成WordArray */
                export function parse(key: string): WordArray;
                /** 将加密数据字符串化 */
                export function stringify(word: WordArray): string;
            }


        }
        namespace lib {
            namespace WordArray {

            }
            namespace ByteArray {

            }

        }

        export enum mode {
            CBC
        }

        export enum pad {
            Pkcs7,
            NoPadding,
        }
    }
}