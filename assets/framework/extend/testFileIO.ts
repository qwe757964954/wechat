
import { _decorator } from 'cc';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = testFileIO
 * DateTime = Wed May 11 2022 17:56:51 GMT+0800 (中国标准时间)
 * Author = xueya
 * FileBasename = testFileIO.ts
 * FileBasenameNoExtension = testFileIO
 * URL = db://assets/scripts/testFileIO.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/zh/
 *
 */

export module testFileIO {

    // TS
    // 使用input调起文件选择窗口
    export function openLocalFile(accept: string, callback: (file: File) => void) {
        let inputEl: HTMLInputElement = <HTMLInputElement>document.getElementById('file_input');
        if (!inputEl) {
            // console.log('xxxxxx createElement input');
            inputEl = document.createElement('input');
            inputEl.id = 'file_input';
            inputEl.setAttribute('id', 'file_input');
            inputEl.setAttribute('type', 'file');
            inputEl.setAttribute('class', 'fileToUpload');
            inputEl.style.opacity = '0';
            inputEl.style.position = 'absolute';
            inputEl.setAttribute('left', '-999px');
            document.body.appendChild(inputEl);
        }

        accept = accept || ".*";
        inputEl.setAttribute('accept', accept);

        // inputEl.addEventListener('change', (event) => {
        //     console.log('xxx onchange1', event, inputEl.value);
        // });
        inputEl.onchange = (event) => {
            // console.log('xxx onchange2', event, inputEl.files);
            let files = inputEl.files
            if (files && files.length > 0) {
                var file = files[0];
                if (callback) callback(file);
            }
        }
        inputEl.click();
    }

    // 读取文件方式
    export enum READ_FILE_TYPE {
        DATA_URL,// readAsDataURL, base64
        TEXT,// readAsText
        BINARY,// readAsBinaryString
        ARRAYBUFFER,// readAsArrayBuffer
    }
    // 读取本地文件数据
    export function readLocalFile(file: File, readType: READ_FILE_TYPE, callback: (result: string | ArrayBuffer) => void) {
        var reader = new FileReader();
        reader.onload = function (event) {
            if (callback) {
                if (reader.readyState == FileReader.DONE) {
                    // console.log('xxx FileReader', event, reader.result);
                    callback(reader.result);
                } else {
                    callback(null);
                }
            }
        };
        switch (readType) {
            case READ_FILE_TYPE.DATA_URL:
                reader.readAsDataURL(file);
                break;
            case READ_FILE_TYPE.TEXT:
                reader.readAsText(file);   //作为字符串读出
                //reader.readAsText(file,'gb2312');   //默认是用utf-8格式输出的，想指定输出格式就再添加一个参数，像txt的ANSI格式只能用国标才能显示出来
                break;
            case READ_FILE_TYPE.BINARY:
                reader.readAsBinaryString(file);
                break;
            case READ_FILE_TYPE.ARRAYBUFFER:
                reader.readAsArrayBuffer(file);
                break;
        }
    }


    // base64生成Texture2D
    // export function base64ToTexture2D(base64: string, callback: (this: void, texture: Texture2D) => void) {
    //     if (base64) {
    //         var img = new Image();
    //         img.onload = function () {
    //             var texture = new Texture2D();
    //             texture.initWithElement(img);
    //             texture.handleLoadedTexture();
    //             if (callback) callback(texture);
    //         }
    //         img.onerror = function (err) {
    //         }
    //         if ((<any>base64).startsWith !== undefined && (<any>base64).startsWith("data:image")) {
    //             img.src = base64;
    //         } else {
    //             img.src = "data:image/png;base64," + base64;
    //         }
    //     } else {
    //         if (callback) callback(null);
    //     }
    // }

    // // base64生成cc.SpriteFrame
    // export function base64ToSpriteFrame(base64: string, callback: (this: void, spriteFrame: SpriteFrame) => void) {
    //     base64ToTexture2D(base64, (texture: Texture2D) => {
    //             if (texture) {
    //                 var newframe = new SpriteFrame(texture);
    //                 if (callback) callback(newframe);
    //             } else {
    //                 if (callback) callback(null);
    //             }
    //         });
    // }

}

/**
 * [1] Class member could be defined like this.
 * [2] Use `property` decorator if your want the member to be serializable.
 * [3] Your initialization goes here.
 * [4] Your update function goes here.
 *
 * Learn more about scripting: https://docs.cocos.com/creator/3.4/manual/zh/scripting/
 * Learn more about CCClass: https://docs.cocos.com/creator/3.4/manual/zh/scripting/decorator.html
 * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.4/manual/zh/scripting/life-cycle-callbacks.html
 */
