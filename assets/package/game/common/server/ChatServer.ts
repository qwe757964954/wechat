/**
 * Name = ChatServer
 * URL = db://assets/package/game/common/server/ChatServer.ts
 * Time = Thu Jul 27 2023 17:20:44 GMT+0800 (中国标准时间)
 * Author = harvyson
 * 聊天服务
 */

import { GCache } from "../../../../cache/GCache";
import { Encrypt } from "../../../../framework/crypto/Encrypto";
import { EventManager } from "../../../../framework/manager/EventManager";
import { BaseControll } from "../../../../framework/vc/BaseController";
import { FXJCMDHead } from "../../net/FXJCmd";
import { FXJConstant } from "../FXJConstant";
import { FXJEvent } from "../FXJEvent";
import { GameEvent } from "../GameEvent";



export interface FaceType {
    /** vipType  */
    vipType?: (number | null);

    /** faceValue  */
    faceValue?: (number | null);
    /** mid  */
    mid?: (number | null);
}

export interface MsgType {
    /** vipType  */
    index?: (number | null);
    /** faceValue  */
    msg?: (string | null);
    /** mid  */
    mid?: (number | null);
}


export class ChatServer extends BaseControll {
    private static _instance = null;
    public static get instance(): ChatServer {
        if (!this._instance || this._instance == null) {
            this._instance = new ChatServer("ChatServer");
        }
        return this._instance;
    }
    /** 延迟发送文字聊天的句柄 */
    private _handlerCanSendChat = null;

     /** 延迟发送文字互动道具的句柄 */
    private _handlerCanSendInterProp = null;
    
     /** 延迟发送表情的句柄 */
     private _handlerCanSendEmoji = null;

    //实例化
    constructor(name: string = null) {
        super(name)
    };
    /**初始化添加事件绑定 */
    protected onInitModuleEvent(): void {
        //请求:文字聊天
        this.addModelListener(FXJEvent.GAME_REQ_PLAYER_CHAET_MSG, this.reqGameChatMsg);
        //请求:表情聊天
        this.addModelListener(FXJEvent.GAME_REQ_PLAYER_CHAET_EMOJI, this.reqGameChatEmoji);

        //请求:互动表情
        this.addModelListener(FXJEvent.GAME_REQ_EMOJI_PROPS_MSG, this.reqGameEmojiProps);
    }
    // let req: Game.ISendOperation = {
    //     opCard:OperationMgr.getInstance().getSendCardListNumber(index)[0],
    //     opCode:OPCode.OPE_OUT_CARD,
    //     opCards:OperationMgr.getInstance().getSendCardListNumber(index),
    //     seatId:OperationMgr.getInstance().seatId,
    //     userId:OperationMgr.getInstance().userId
    // }


    /** 请求发送聊天文本 */
    reqGameChatMsg(event, index, text) {
        if (index == null || text == null) {
            return;
        }
        if (this._handlerCanSendChat != null) { 
            EventManager.dispatch(FXJEvent.SYS_TOAST_TIP, { content: "发送太频繁" });
            return;
        }
        let req: MsgType = {
            index: index,
            msg: text,
        };

        let sendMsg = {
            cmd: FXJCMDHead.C2S.ROOM_USER_CHAT,
            body: req,
        }
        EventManager.dispatch(FXJEvent.NET_SEND_MSG, sendMsg);
        req.mid = GCache.User.getUserMid();
        EventManager.dispatch(FXJEvent.VIEW_PLAYER_CHAT_SHOW, req);

        this.stopScheduler(this._handlerCanSendChat);
        let self = this;
        this._handlerCanSendChat = this.addScheduler(FXJConstant.QuickChatDelay, () => { 
            self.stopScheduler(self._handlerCanSendChat);
            self._handlerCanSendChat = null;
        })
    }
    /** 请求发送表情聊天 */
    reqGameChatEmoji(event, index) {
        if (index == null) {
            return;
        }
        if (this._handlerCanSendEmoji != null) { 
            EventManager.dispatch(FXJEvent.SYS_TOAST_TIP, { content: "发送太频繁" });
            return;
        }
        
        const num: number = parseInt(index);
        let req: FaceType = {
            vipType: 1,
            faceValue: num + Math.pow(2, 16),
        };

        let sendMsg = {
            cmd: FXJCMDHead.C2S.ROOM_USER_FACE,
            body: req,
        }
        EventManager.dispatch(FXJEvent.NET_SEND_MSG, sendMsg);
        req.mid = GCache.User.getUserMid();
        EventManager.dispatch(GameEvent.VIEW_PLAYER_EMOJ_SHOW, req);

        this.stopScheduler(this._handlerCanSendEmoji);
        let self = this;
        this._handlerCanSendEmoji = this.addScheduler(FXJConstant.QuickChatDelay, () => { 
            self.stopScheduler(self._handlerCanSendEmoji);
            self._handlerCanSendEmoji = null;
        })
        
    }


    receiveGameChatMsg() {

    }

    /** 请求发送互动道具 */
    reqGameEmojiProps(event, index, text) {
        if (index == null || text == null) {
            return;
        }

        if (this._handlerCanSendInterProp != null) { 
            EventManager.dispatch(FXJEvent.SYS_TOAST_TIP, { content: "发送太频繁" });
            return;
        }
        
        let req = {
            index: index, //道具ID
            msg: text,  // json from  to {from: to:}
        };

        let sendMsg = {
            cmd: FXJCMDHead.C2S.ROOM_USER_CHAT,
            body: req,
        }
        console.log("reqGameEmojiProps", sendMsg)
        EventManager.dispatch(FXJEvent.NET_SEND_MSG, sendMsg);

        let textObj = Encrypt.JsonDecode(text);
        let hdInfo = {
			uid: textObj.from,
			prop_id: index,
			to_uid:textObj.to,
        }
        console.log("reqGameEmojiProps1", hdInfo);
		EventManager.dispatch(FXJEvent.VIEW_DESK_ANI_PLAY, FXJConstant.AnimNormal.HudongProp, hdInfo);

        this.stopScheduler(this._handlerCanSendInterProp);
        let self = this;
        this._handlerCanSendInterProp = this.addScheduler(FXJConstant.QuickChatDelay, () => { 
            self.stopScheduler(self._handlerCanSendInterProp);
            self._handlerCanSendInterProp = null;
        })
        
    }

}

