
import { Node, Sprite, _decorator } from 'cc';
import { inf_SpineAniCreate } from '../../../../../framework/InterfaceDefines';
import { EventManager } from '../../../../../framework/manager/EventManager';
import { BaseComponent } from '../../../../../framework/vc/BaseComponent';
import { PlayerMgr } from '../../../cache/PlayerMgr';
import { OPCode } from '../../../common/FXJConfig';
import { FXJEvent } from '../../../common/FXJEvent';
import { FXJRes } from '../../../common/FXJRes';
import { Common } from '../../../common/idl/Common';
const { ccclass, property } = _decorator;

/**
 * Name = OprationItem
 * URL = db://assets/package/game/module/opmgr/src/OprationItem.ts
 * Time = Tue Aug 08 2023 10:37:09 GMT+0800 (中国标准时间)
 * Author = qwe757964
 *
 * Life: onLoad-->onInitModuleEvent-->onEnable->start->update->lateUpdate->onDisable->onDestroy
 * 
 */
 
@ccclass('OprationItem')
export class OprationItem extends BaseComponent {
	@property(Node)
    public opration: Node | null = null;
	@property(Sprite)
    public player: Sprite | null = null;
	//code 对应的图集
    atlasCodeMap = new Map<number, string>();
	/** override 初始化模块事件 */
	protected onInitModuleEvent() {

	};
	
	onLoad () {
		// this.atlasCodeMap.set(OPCode.OPE_PASS, this.guoBtn);
        
	};

	public updateAtlasCodeMap(){
		this.atlasCodeMap.set(OPCode.OPE_PENG, "peng");
        this.atlasCodeMap.set(OPCode.OPE_QIANG_PENG, "peng");
        this.atlasCodeMap.set(OPCode.OPE_HU, "hu");
		this.atlasCodeMap.set(OPCode.OPE_RIGHT_CHI, "chi");
		this.atlasCodeMap.set(OPCode.OPE_MIDDLE_CHI, "chi");
		this.atlasCodeMap.set(OPCode.OPE_LEFT_CHI, "chi");
        this.atlasCodeMap.set(OPCode.OPE_ZI_MO, "zimo");
        this.atlasCodeMap.set(OPCode.OPE_AN_GANG, "gang");
        this.atlasCodeMap.set(OPCode.OPE_GANG, "gang");
        this.atlasCodeMap.set(OPCode.OPE_BU_GANG, "gang");
	}

	 getShowBtn (code: number): string | null {
        for (let [opCode, opstr] of this.atlasCodeMap) {
            if (code == opCode) {
                return opstr;
            }
        }
        return null;

    }

	public updateItemProps(userId?: number,opCode?: number){
		let userInfo :Common.GameUserInfo = PlayerMgr.getInstance().findPlayerWithUserId(userId).gameUserInfo;
		let sexStr = "";
		if (userInfo.sex == 2) {
			sexStr = "xiaoya"
		} else {
			sexStr = "xiaobo"
		}
		let opStr = this.getShowBtn(opCode);
		if(!opStr){
			this.node.active = false;
			return;
		}
		this.node.active = true;

        let param: inf_SpineAniCreate = {   
            resConf: FXJRes.Spine_Hu,
            aniName: "px_" + opStr,
            parentNode: this.opration,
            trackIndex: 0,
            isLoop: false, 
        }
        EventManager.dispatch(FXJEvent.SYS_ANI_PLAY, param);
        
	}

}

