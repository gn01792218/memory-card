import {GameThemeEnum} from '@/types/Enum/enum'
export interface Game{
    gameType:number,
    gameTheme:number,
}
export interface LevelObj extends Game{
    level:number,
    unlock:boolean,
}
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