export interface Msg{
    type:MsgType,
    content:string,
    fontSize:number
}
export interface MsgBox {
    transitionName:string,
    msgArr:Msg[]
}
export enum MsgType {
    SUCCESS,
    ERROR,
}