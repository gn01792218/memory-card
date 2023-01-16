<template>
    <section class="board relative">
        <MsgBox :msg-obj="{
            transitionName:'msg',
            msgArr:msgArray
        }"/>
        <section class="flex"
        v-for="row in size" :key="row"
        >
            <div class="board-col" :id="`board-${row}${col}`"
            v-for="col in size" :key="col"
            @click="placeQueen(row,col)"
            @mouseover="hint(row,col)"
            @mouseleave="removeHint(row,col)"
            >
            </div>
        </section>
    </section>
</template>
<script setup lang="ts">
import { ref, reactive, nextTick, toRefs } from 'vue'
import { MsgType } from '@/types/msg/msgBox'
import useUtil from '@/composables/util/useUtil';
import useMsg from '@/composables/useMsg'
import MsgBox from '@/components/MsgBox.vue'

interface BoardObj{
    size:number,
    openHint:boolean
}
const props = defineProps<BoardObj>()
const { size, openHint } = toRefs( props )
const { getAssetsFileURL } = useUtil()
const { pushMsg, msgArray } = useMsg()

const queensPosition = reactive<number[] | null[]>([])
const count = ref(0)
const queenImage = getAssetsFileURL('images/boardGame/queen.png')
function isSafe(row:number,col:number){
    //判斷橫線 : 如果該行上已經有皇后，直接返回false
    if( queensPosition[row] ) {
        pushMsg(msgArray.value,'不能再此行放皇后!',MsgType.ERROR)
        return false
    }
    for( let i=0 ; i< row ; i++ ){
        //判斷直線
        if( col ===  queensPosition[i]){
            pushMsg(msgArray.value,'直線上有其他皇后!',MsgType.ERROR)
            return false
        }
        //判斷X斜線
        if( Math.abs( col- queensPosition[i]!) === Math.abs(i - row)){
            pushMsg(msgArray.value,'斜線上有其他皇后!',MsgType.ERROR)
            return false
        }
    }
    return true
}
function getQueenImg(){
    const queenImg = document.createElement('IMG') as HTMLImageElement
    queenImg.src = queenImage
    queenImg.classList.add('w-full')
    queenImg.classList.add('h-full')
    queenImg.classList.add('queen')
    return queenImg
}
function placeQueen(row:number,col:number){
    const colElement = document.getElementById(`board-${row}${col}`)
    //擺放皇后
    //沒有圖片的話+圖片
    const queenImg = colElement?.firstChild
    if(queenImg) {
        //移除皇后
        queensPosition[row] = null
        queenImg.remove()
        count.value--
    }else { //放皇后
        if(!isSafe(row,col)) return  //不安全的話不能放
        queensPosition[row] = col
        count.value++
        colElement?.appendChild(getQueenImg())
        if(count.value === size.value) nextTick(()=>gameWin())
    }
}
function hint(row:number,col:number){ //當游標移動到該col上時
    if(!openHint.value) return 
    //1.利用獲得之座標，判斷要顯示的col有哪些

}
function removeHint(row:number,col:number){ //當游標離開該格時，移除提示
    if(!openHint.value) return 
}
function gameWin(){
    pushMsg(msgArray.value,'成功破解!',MsgType.SUCCESS)
}

</script>