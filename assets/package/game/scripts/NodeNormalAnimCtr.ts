
import { Camera, Node, UITransform, Vec3, _decorator, tween } from 'cc';
import { inf_SpineAniCreate } from '../../../framework/InterfaceDefines';
import { Utils } from '../../../framework/Utils';
import { EventManager } from '../../../framework/manager/EventManager';
import { BaseComponent } from '../../../framework/vc/BaseComponent';
import { FXJConstant } from '../common/FXJConstant';
import { FXJEvent } from '../common/FXJEvent';
import { FXJRes, FXJUIID } from '../common/FXJRes';
import { FXJSound } from '../common/FXJSound';
import { GameViewConfig } from '../common/GameViewConfig';
import { NodeUserCtr } from './NodeUserCtr';
import { NodeUserPrefabCtr } from './NodeUserPrefabCtr';
const { ccclass, property } = _decorator;

@ccclass('NodeNormalAnimCtr')
export class NodeNormalAnimCtr extends BaseComponent {

    //玩家节点
    @property({ tooltip: "玩家节点", type: NodeUserCtr })
    private allUserNode: NodeUserCtr | null = null;

    /** 飞机预备 */
    private _prepareFeiji: Node = null;

    protected onInitModuleEvent() {
        //播放动画
        this.addModelListener(FXJEvent.VIEW_DESK_ANI_PLAY, this.startPlayAnim);

        // // 显示角色技能动画和声音
        // this.addModelListener(FXJEvent.VIEW_PLAYER_USE_ROLE_SKILL, this.playRoleSkillAnim);
        // 显示玩家出牌动画
        this.addModelListener(FXJEvent.VIEW_OUT_CARD_ANI_PLAY, this.startPlayOutCardAnim);

        // this.addModelListener(FXJEvent.GAME_HAND_CARDS_RECORD_UPDATE, this.prepareFeiji);

    }

    onLoad() {
        console.log("动画节点出现了")
        this.node.active = true;
    };

    start() {

    };
    /** 开始播放动画 */
    startPlayAnim(event, animType, pData) {
        switch (animType) {
            case FXJConstant.AnimNormal.HudongProp:
                this.__showHuDongDaoju(pData);
                break;
            // case FXJConstant.AnimNormal.ZhadanTip:   // 炸弹提示
            //     this.showBombTip(pData);
            //     break;
            default:
                break;
        }
    }
    /** 显示互动道具 */
    __showHuDongDaoju(pData) {
        console.log("动画节点出现了:__showHuDongDaoju")
        //uid: 10086089, prop_id: 3, to_uid: 10086845
        if (this.allUserNode.node.children.length == 0) {
            return;
        }
        pData = Utils.table_verify(pData);
        
        let animConf = FXJConstant.HuDongPropConf.anim[Utils.number_valueOf(pData["prop_id"], -1)];
        if (!animConf) {
            return;
        }
        let fromNode: Node = null;
        let toNode: Node = null;
        let fromPos = null;
        let toPos = null;

        for (let i = 0; i < this.allUserNode.node.children.length; i++) {
            let userNode = this.allUserNode.node.children[i];
            let NodeUserCtr = userNode.getComponent(NodeUserPrefabCtr);
            if (NodeUserCtr.UID == pData["uid"]) {
                fromNode = userNode;
                fromPos = NodeUserCtr.PosID;
            }
            if (NodeUserCtr.UID == pData["to_uid"]) {
                toNode = userNode;
                toPos = NodeUserCtr.PosID;
            }
        }
        if (fromNode && toNode && fromNode != toNode) {
            let startPos = fromNode.getPosition();
            let endPos = toNode.getPosition();

            let direction = FXJConstant.HuDongPropConf["direction"][toPos];
            let aniNameStart = Utils.string_format(animConf["action"], direction);
            let self = this;
            let startPlayerAnim = function (actionName, aniName, toPos: Vec3) {
                let aniNode = Utils.create_2DNode("HuDongPropAni");
                self.node.addChild(aniNode);
                aniNode.setPosition(toPos);
                let param: inf_SpineAniCreate = {   
                    resConf: FXJRes.Spine_Hddj,
                    aniName: aniName,
                    parentNode: aniNode,
                    trackIndex: 0,
                    isLoop: false, 
                    callStartFunc: () => {
                        if (actionName == "action") {
                            tween(aniNode)
                                .to(animConf["time"], { position: new Vec3(endPos.x, endPos.y + 54, endPos.z), })
                                .call(() => {
                                    // -- 音效
                                    EventManager.dispatch(FXJEvent.SYS_PLAY_EFFECT, { bundle: FXJSound.InteractProp.bundle, path: Utils.string_format(FXJSound.InteractProp.path, pData["prop_id"]) });
                                })
                                .start();
                        }
                    }
                }
                EventManager.dispatch(FXJEvent.SYS_ANI_PLAY, param);
               
            }
            console.log("开始位置：===", startPos, endPos)
            startPlayerAnim("action", aniNameStart, new Vec3(startPos.x, startPos.y + 150, startPos.z))
            if (animConf["action_end"]) {
                let aniNameEnd = Utils.string_format(animConf["action_end"], direction);
                startPlayerAnim("action_end", aniNameEnd, new Vec3(endPos.x, endPos.y + 150, endPos.z))
            }
        }
    }

    /** 
     * 播放出牌动画
    */
    startPlayOutCardAnim(event, data: GameViewConfig.AnimConfig, camera3D: Camera, camera2D: Camera) {
        let aniNode = this.node.getChildByName("OutCardAni");
        if (!this.node.getChildByName("OutCardAni")) {
            aniNode = Utils.create_2DNode("OutCardAni");
            this.node.addChild(aniNode);
        }

        switch (data.aniType) {
            case GameViewConfig.AnimType.GameStart: {
                    let param: inf_SpineAniCreate = {   
                        resConf: FXJRes.Spine_Start,
                        aniName: "DJKS",
                        parentNode: aniNode,
                        trackIndex: 0,
                        isLoop: false, 
                        callStartFunc: () => {
                        }
                    }
                    EventManager.dispatch(FXJEvent.SYS_ANI_PLAY, param);
                }
                break;
            case GameViewConfig.AnimType.GameOver:{
                    let param: inf_SpineAniCreate = {   
                        resConf: FXJRes.Spine_Over,
                        aniName: "djjs",
                        parentNode: aniNode,
                        trackIndex: 0,
                        isLoop: false, 
                        toPos: new Vec3(0, 77, 0),
                        callStartFunc: () => {
                        }
                    }
                    EventManager.dispatch(FXJEvent.SYS_ANI_PLAY, param);
                }
                break;
            case GameViewConfig.AnimType.Hu: {
                    let posWorld = camera2D.screenToWorld(camera3D.worldToScreen(data.pos));
                    let pos = aniNode.getComponent(UITransform).convertToNodeSpaceAR(posWorld);
                    let param: inf_SpineAniCreate = {   
                        resConf: FXJRes.Spine_Hu,
                        aniName: "hupai",
                        parentNode: aniNode,
                        trackIndex: 0,
                        isLoop: false, 
                        toPos: pos,
                        callStartFunc: () => {
                            EventManager.dispatch(FXJEvent.SYS_PLAY_EFFECT, FXJSound.GameHuAni);
                        },
                        callEndFunc: () => {
                            EventManager.dispatch(FXJEvent.GAME_OPEN_POPUP, FXJUIID.GameSettlePrefab);
                        }
                    }
                    EventManager.dispatch(FXJEvent.SYS_ANI_PLAY, param);
                }
                break;
            case GameViewConfig.AnimType.Hu2: {
                    let posWorld = camera2D.screenToWorld(camera3D.worldToScreen(data.pos));
                    let pos = aniNode.getComponent(UITransform).convertToNodeSpaceAR(posWorld);
                    let param: inf_SpineAniCreate = {   
                        resConf: FXJRes.Spine_Hu,
                        aniName: "hupai2",
                        parentNode: aniNode,
                        trackIndex: 0,
                        isLoop: false, 
                        toPos: pos,
                        callStartFunc: () => {
                            EventManager.dispatch(FXJEvent.SYS_PLAY_EFFECT, FXJSound.GameDianPaoAni);
                        }
                    }
                    EventManager.dispatch(FXJEvent.SYS_ANI_PLAY, param);
                }
                break;
            case GameViewConfig.AnimType.Peng: {
                    let posWorld = camera2D.screenToWorld(camera3D.worldToScreen(data.pos));
                    let pos = aniNode.getComponent(UITransform).convertToNodeSpaceAR(posWorld);
                    let param: inf_SpineAniCreate = {   
                        resConf: FXJRes.Spine_Hu,
                        aniName: "peng_yanwu",
                        parentNode: aniNode,
                        trackIndex: 0,
                        isLoop: false, 
                        toPos: pos,
                        callStartFunc: () => {
                            // EventManager.dispatch(FXJEvent.SYS_PLAY_EFFECT, FXJSound.GameHuAni);
                        }
                    }
                    EventManager.dispatch(FXJEvent.SYS_ANI_PLAY, param);
                }
                break;
            default:
                break;
        }
    }

    //销毁
    onDestroy() {

    };

}

