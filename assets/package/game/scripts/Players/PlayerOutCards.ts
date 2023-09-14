
import { Node, Vec3, _decorator } from 'cc';
import { BaseComponent } from '../../../../framework/vc/BaseComponent';
import { MjSize } from './CardConfigs';
const { ccclass, property } = _decorator;

/**
 * Name = OutCards
 * URL = db://assets/package/game/scripts/OutCards.ts
 * Time = Fri Aug 11 2023 11:08:55 GMT+0800 (中国标准时间)
 * Author = qwe757964
 *
 * Life: onLoad-->onInitModuleEvent-->onEnable->start->update->lateUpdate->onDisable->onDestroy
 * 
 */

interface PosInfo {
    row: number,
    column: number,
    height: number,
}


@ccclass('PlayerOutCards')
export class PlayerOutCards extends BaseComponent {
    _mjList: Node[] = [];
    /** override 初始化模块事件 */
    protected onInitModuleEvent() {

    };

    onLoad() {

    };


    start() {

    };
    //根据索引获取指定位置的牌的行列高信息
    getOutCardPosInfo(index: number): PosInfo {
        let height = Math.floor(index / 12);
        index = index - height * 12;
        let column = index % 6;
        let row = Math.floor(index / 6);

        let posInfo: PosInfo = {
            row: row,
            column: column,
            height: height,
        }
        return posInfo
    }
    //当前出牌区添加牌的位置
    getOutCardPos(): Vec3 {
        let posInfo = this.getOutCardPosInfo(this._mjList.length)
        // return new Vec3(MjSize.width/2 +posInfo.column * MjSize.width, MjSize.length/2 + posInfo.height * MjSize.length, MjSize.height/2 + MjSize.height * posInfo.row);
        return new Vec3(MjSize.width / 2 + posInfo.column * MjSize.width, MjSize.length / 2 + posInfo.height * MjSize.length, 0);
    }

    //往出牌区添加一张指定种类的牌
    pushCard(tByte: number) {
        // let mjNode = instantiate(this._mjPrefab)
        // mjNode.setPosition(this.getOutCardPos())

        // mjNode.getChildByName("Cube").getComponent(MeshRenderer).shadowCastingMode = 1;

        // //根据value决定花色
        // setSymbol(mjNode, tByte)

        // this.node.addChild(mjNode)
        // this._mjList.push(mjNode)
    }

    pushCardToList(node: Node) {
        this._mjList.push(node);
    }

    //游戏开始或结束，清空出牌区，保持初始状态
    resetView() {
        this.node.removeAllChildren()
        this._mjList = []
        // this.initNodePos()
    }
}

