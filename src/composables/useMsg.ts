import { Msg, MsgType } from '@/types/msg/msgBox'
import { ref } from 'vue'

//控制選項
const msgDelay = 500 //每則訊息停留的時間
export default function useMsgBox(){
    //訊息陣列
    const msgArray = ref<Msg[]>([])
    function pushMsg(targetErrorArray: Msg[], msg: string, msgType: MsgType,fontSize:number = 14, delay:number = msgDelay) {
        targetErrorArray.push({
            type: msgType,
            content: msg,
            fontSize
        })
        setTimeout(() => {
            targetErrorArray.shift()
        }, delay)
    }
    return {
        //訊息陣列
        msgArray,
        //methods
        pushMsg,
    }
}