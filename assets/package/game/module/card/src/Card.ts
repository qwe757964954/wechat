// import { Log } from 'bos/exports';
// import { BundleSprite } from 'bos/framework/component/BundleSprite';
import { Node, UITransform, Vec3, _decorator } from 'cc';
import { BaseComponent } from '../../../../../framework/vc/BaseComponent';
import { NodeCardCtr } from '../../../scripts/NodeCardCtr';
const { ccclass, property } = _decorator;

export enum NormalSize {
	Width = 33,
    Height = 44
}

@ccclass('Card')
export class Card extends BaseComponent {

    @property(UITransform)
    public card: UITransform | null = null;
    // 手牌模板
	@property({ tooltip: "手牌模板", type: Node })
	private nodeCardTemplate: Node | null = null;
    
    @property({ tooltip: "手牌模板", type: Node })
	private cardTabTemplate: Node | null = null;

    public setCardByte(byte: number) {
        this.nodeCardTemplate.getComponent(NodeCardCtr).setCardByte(byte);
    }
    public setCardSize(width?:number,height?:number){
        let scale:number = width / NormalSize.Width * 1000;
        this.nodeCardTemplate.getChildByName("majiangzi").setScale(scale,scale,scale);
        this.cardTabTemplate.setScale(scale,scale,scale);
        this.nodeCardTemplate.getComponent(UITransform).setContentSize(width,height);
        this.card.width = width;
        this.card.height = height;
    }

    public setCardAngle(x?:number,y?:number,z?:number){
        this.nodeCardTemplate.getChildByName("majiangzi").setRotationFromEuler(x,y,z);
    }

    public setCardAlbedo(x?:number,y?:number,z?:number){
        this.nodeCardTemplate.getComponent(NodeCardCtr).setCardAlbedo(new Vec3(x, y, z));
    }

}