
import { instantiate, MeshRenderer, Node, Texture2D, Vec3, _decorator } from 'cc';
import { Utils } from '../../../framework/Utils';
import { BaseComponent } from '../../../framework/vc/BaseComponent';
import { FXJRes } from '../common/FXJRes';
import { CardUtil } from '../util/CardUtil';
const { ccclass, property } = _decorator;

/**
 * Name = NodeCardCtr
 * URL = db://assets/package/game/scripts/NodeCardCtr.ts
 * Time = Tue Aug 08 2023 15:30:03 GMT+0800 (中国标准时间)
 * Author = harvyson
 *
 * Life: onLoad-->onInitModuleEvent-->onEnable->start->update->lateUpdate->onDisable->onDestroy
 * 
 */

@ccclass('NodeCardCtr')
export class NodeCardCtr extends BaseComponent {
    // 手牌模型节点
    @property({ tooltip: "手牌模型节点", type: Node })
    private nodeCardMesh: Node | null = null;

    // 手牌标签模板节点
    @property({ tooltip: "手牌标签模板节点", type: Node })
    private nodeCardTabTemplate: Node | null = null;

    // 固有色
    private albedo: Vec3 = new Vec3(1, 1, 1);

    // 手牌标签节点
    private nodeCardTab: Node = null;

    public byte: number = 0;

    /** override 初始化模块事件 */
    protected onInitModuleEvent() {

    };

    onLoad(): void {

    }

    /** 设置手牌数值 */
    public setCardByte(byte: number) {
        this.byte = byte;
        let cardStr = CardUtil.getCardValue(byte);

        let path = Utils.string_format(FXJRes.Picture_Game_Card.path, cardStr)
        // console.log("NodeCardCtr", "setCardByte", "path", path)
        this.getPreLoaderRes(FXJRes.Picture_Game_Card.bundle, path, Texture2D, (tex) => {
            if (!tex) {
                console.log("NodeCardCtr", "setCardByte")
                return;
            }
            this.nodeCardMesh.getComponent(MeshRenderer)!.material!.setProperty('albedoMap', tex);
        })

        if (Utils.isNotNull(this.nodeCardTabTemplate)) {
            let isLaizi = CardUtil.getCardValue(this.byte) === "0x21";
            if (Utils.isNotNull(this.nodeCardTab)) {
                this.nodeCardTab.active = isLaizi;
            } else {
                if (isLaizi) {
                    this.nodeCardTab = instantiate(this.nodeCardTabTemplate);
                    this.node.addChild(this.nodeCardTab);
                    this.nodeCardTab.active = true;
                }
            }
        }
    }

    /** 设置手牌固有色 */
    public setCardAlbedo(value: Vec3) {
        this.albedo = value;
        this.nodeCardMesh.getComponent(MeshRenderer)!.material!.setProperty('albedo', this.albedo);
    }

    /** 设置是否变黑 */
    public setBlack(vlaue: boolean) {
        if (vlaue) {
            this.nodeCardMesh.getComponent(MeshRenderer)!.material!.setProperty('albedo', new Vec3(0.2, 0.2, 0.2));
        } else {
            this.nodeCardMesh.getComponent(MeshRenderer)!.material!.setProperty('albedo', this.albedo);
        }
    }



}

