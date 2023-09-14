import { EventManager } from "../../../framework/manager/EventManager";
import { Observer } from "../cache/PlayerMgr";
import { GameEvent } from "./GameEvent";
import { Common } from "./idl/Common";

export class FXJObserver implements Observer  {
    public updatePlayerList(data: Common.IPlayerInfo[]): void {
    }
    
    public updateCardsCount(): void {
        EventManager.dispatch(GameEvent.UPDATE_REMAIN_CARDS_COUNT);
    }
}