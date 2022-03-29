import {gameThemeEnum} from '@/types/Enum/enum'
export interface game{
    gameType:number,
    gameTheme:number,
}
export interface levelObj extends game{
    level:number,
    unlock:boolean,
}
export interface memoryCardLevel extends levelObj{
    cardNum:number,
    timeCount:number,
}
export interface memoryCard{
    gameTheme:gameThemeEnum,
    upImgPath:string,
    downImgPath:string,
    context:string,
    isChecked:boolean,
}