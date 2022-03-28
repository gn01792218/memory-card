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
    cardNum:number,
    timeCount:number,
}
