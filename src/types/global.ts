export interface memoryCard<T>{
    cardIndex:number,
    upImgPath:string,
    downImgPath:string,
    context:T,
    isChecked:boolean,
}
