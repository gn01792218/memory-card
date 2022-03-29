import {gameThemeEnum} from '@/types/Enum/enum'
export interface memoryCard{
    gameTheme:gameThemeEnum,
    upImgPath:string,
    downImgPath:string,
    context:string,
    isChecked:boolean,
}
export interface levelObj{
    level:number,
    unlock:boolean,
}
export interface memoryCardLevel extends levelObj{
    cardNum:number,
    timeCount:number,
}