import { Game, DifficultyLeves, LevelItemBase } from '@/types/game/game'
import {GameThemeEnum} from '@/types/game/game'
export interface MemoryCardGame extends Game, DifficultyLeves<MemoryCardLevel>{}
export interface MemoryCardLevel extends LevelItemBase {
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