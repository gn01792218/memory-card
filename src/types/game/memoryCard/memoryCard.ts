import { Game, DiffcutableLeves, LevelItemBase } from '@/types/game/game'
import {GameThemeEnum} from '@/types/game/game'

export interface MemoryCardGame extends Game, DiffcutableLeves<MemoryCardLevel>{}

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