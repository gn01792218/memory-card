import { LevelObj } from '@/types/game/game'
import {GameThemeEnum} from '@/types/game/game'
export interface MemoryCardLevel extends LevelObj{
    cardNum:number,
    timeCount:number,
}
export interface MemoryCard{
    gameTheme:GameThemeEnum,
    upImgPath:string,
    downImgPath:string,
    context:string,
    isChecked:boolean,
}