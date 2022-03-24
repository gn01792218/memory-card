import {gameThemeEnum} from '@/types/themesEnum/themesEnum'
export interface memoryCard<T>{
    gameTheme:gameThemeEnum,
    cardIndex:number,
    upImgPath:string,
    downImgPath:string,
    context:T,
    isChecked:boolean,
}
