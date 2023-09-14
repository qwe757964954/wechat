
import { Node, Prefab, _decorator } from 'cc';
import { BaseComponent } from '../../../framework/vc/BaseComponent';
import { PlayerMgr } from '../cache/PlayerMgr';
import { RoomMgr } from '../cache/RoomMgr';
import { FXJRes } from '../common/FXJRes';
import { GameEvent } from '../common/GameEvent';
import { Common } from '../common/idl/Common';
import { CardUtil } from '../util/CardUtil';
import { NodeUserPrefabCtr } from './NodeUserPrefabCtr';
const { ccclass, property, menu } = _decorator;

/**
 * Name = NodeUserCtr
 * URL = db://assets/package/game/scripts/NodeUserCtr.ts
 * Time = Mon Jul 31 2023 15:54:59 GMT+0800 (中国标准时间)
 * Author = harvyson
 *
 * Life: onLoad-->onInitModuleEvent-->onEnable->start->update->lateUpdate->onDisable->onDestroy
 * 
 */

@ccclass('NodeUserCtr')
//方便编辑器识别的菜单项目
@menu('prefab/game/NodeUserCtr')
export class NodeUserCtr extends BaseComponent {
    private userSeats: number[] = [];
    private userNodes: Node[] = [];
    /** override 初始化模块事件 */
    protected onInitModuleEvent() {
        this.addModelListener(GameEvent.VIEW_BROADCAST_PLAYER_EXIT, this.palyerExit);
        this.addModelListener(GameEvent.CLEAN_AI_SHOWING, this.cleanAiShowing);
        
    };
    cleanAiShowing(){
        for(let i =0;i<this.userNodes.length;i++){
            let node = this.userNodes[i];
            node.getComponent(NodeUserPrefabCtr).cleanDepositStatus();
        }
    }
    palyerExit(event, uid: number = null){
        let player:Common.IPlayerInfo = PlayerMgr.getInstance().findPlayerWithUserId(uid);
        let seatID: number = CardUtil.calculatePlayerSeat(RoomMgr.getInstance().mySeatId, player.seatId);
        this.userSeats = this.userSeats.filter(num => num !== seatID);

        for(let i =0;i<this.userNodes.length;i++){
            let node = this.userNodes[i];
            if(node.getComponent(NodeUserPrefabCtr).UID === uid){
                node.removeFromParent();
                this.userNodes.splice(i,1);
            } 
        }
    }

    /** 显示人物信息 */
    showUserView(data) {
        let self = this;
        this.getPreLoaderRes(FXJRes.Prefab_NodeUser.bundle, FXJRes.Prefab_NodeUser.path, Prefab, (res) => {
            let comp: NodeUserPrefabCtr = res.getComponent(NodeUserPrefabCtr);
            if (!self.node || self.node.isValid == false) {
                return;
            }
            let seatID: number = CardUtil.calculatePlayerSeat(RoomMgr.getInstance().mySeatId, data.posID);

            if (this.userSeats.indexOf(seatID) === -1) {
                this.userSeats.push(seatID);
                self.node.addChild(res);
                this.userNodes.push(res);
                res.active = true;
                data.posID = seatID;
                comp.initData(data);//此处做刷新
            }
            this.userNodes.forEach(node => {
                node.active = true;
            });



            // comp.initData(data);//此处做刷新
            // for (let i = 0; i < self.node.children.length; i++) {
            // 	let node = self.node.children[i];
            // 	let nodeComp = node.getComponent(NodeUserPrefabCtr);
            // 	if (nodeComp.PosID == seatID) {
            // 		node.active = true;
            // 		isAdd = true;
            // 		comp = nodeComp;
            // 		break;
            // 	}
            // }

            // if (isAdd == false) {

            // }
            // comp.node.active = true;

        })
    }

}

