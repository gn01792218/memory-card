import {gameThemeEnum} from '@/types/Enum/enum'
export interface memoryCard<T>{
    gameTheme:gameThemeEnum,
    cardIndex:number,
    upImgPath:string,
    downImgPath:string,
    context:T,
    isChecked:boolean,
}
export interface levelObj{
    level:number,
    cardNum:number,
    timeCount:number,
}
