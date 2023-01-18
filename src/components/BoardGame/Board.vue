<template>
    <section class="board relative">
        <MsgBox :msg-obj="{
            transitionName:'msg',
            msgArr:msgArray
        }"/>
        <section class="board-row flex" :id="`board-${row}`"
        v-for="row in size" :key="row"
        >
            <div class="board-col" :id="`board-${row}-${col}`"
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
import { ref, reactive, nextTick, toRefs, watch } from 'vue'
import { MsgType } from '@/types/msg/msgBox'
import useUtil from '@/composables/util/useUtil';
import useMsg from '@/composables/useMsg'
import MsgBox from '@/components/MsgBox.vue'

interface BoardObj{
    size:number, //棋盤尺寸(n*n)
    openHint:boolean
}
enum BoardHintStatus{
    ADD,
    REMOVE
}
const props = defineProps<BoardObj>()
const { size, openHint } = toRefs( props )
const { getAssetsFileURL } = useUtil()
const { pushMsg, msgArray } = useMsg()

const queensPosition = reactive<number[] | null[]>([])
const count = ref(0)
const queenImage = getAssetsFileURL('images/boardGame/queen.png')
watch(size,()=>{
    resetBoard()
})
function isSafe(row:number,col:number){
    //判斷橫線 : 如果該行上已經有皇后，直接返回false
    if( queensPosition[row] ) {
        pushMsg(msgArray.value,'此行不能放皇后!',MsgType.ERROR,20)
        return false
    }
    for( let i=0 ; i< size.value ; i++ ){
        //判斷直線
        if( col ===  queensPosition[i]){
            pushMsg(msgArray.value,'直線上有其他皇后!',MsgType.ERROR,20)
            return false
        }
        //判斷X斜線
        if(queensPosition[i]) {
            if( Math.abs( col- queensPosition[i]!) === Math.abs(i - row)){
                pushMsg(msgArray.value,'斜線上有其他皇后!',MsgType.ERROR,20)
                return false
            }
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
    const colElement = document.getElementById(`board-${row}-${col}`)
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
    console.log(count.value)
}
function horizontalHint(row:number,col:number,status:BoardHintStatus) {
    const rowElement = document.getElementById(`board-${row}`)
    if(!rowElement) return
    const rowChildren = rowElement.children
    for( let i = 0 ; i< rowChildren.length ;i ++ ){
        if( i === col-1 ) continue  //自己那一格不需要畫
        if(status === BoardHintStatus.ADD) rowChildren[i].classList.add('board-hint')
        else rowChildren[i].classList.remove('board-hint')
    }
}
function verticalHint(row:number,col:number,status:BoardHintStatus){
    for( let i = 0; i< size.value ; i++){
        if( i === row-1 ) continue  //不用畫自己那一格
        const colElement = document.getElementById(`board-${i+1}-${col}`)
        if(status === BoardHintStatus.ADD) colElement?.classList.add('board-hint')
        else colElement?.classList.remove('board-hint')
    }
}
function diagonalHint(row:number,col:number,status:BoardHintStatus){
    //斜線\
    //斜線/
    for(let i = 0 ; i <size.value ; i++){
        let colNumber = (row - (i+1)) + col
        let colNumber2 = ( (i+1) - row ) + col
        if( (row === i+1 && col === colNumber) || (row ===i+1 && col=== colNumber2)) continue
        const colElement = document.getElementById(`board-${i+1}-${colNumber}`)
        const colElement2 = document.getElementById(`board-${i+1}-${colNumber2}`)
        if(status === BoardHintStatus.ADD) {
            colElement?.classList.add('board-hint')
            colElement2?.classList.add('board-hint')
        }else {
            colElement?.classList.remove('board-hint')
            colElement2?.classList.remove('board-hint')
        }
    }
}
function hint(row:number,col:number){ //當游標移動到該col上時
    if(!openHint.value) return 
    //1.利用獲得之座標，判斷要顯示的col有哪些
    //直線標示
    verticalHint(row,col,BoardHintStatus.ADD)
    //斜線標示
    diagonalHint(row,col,BoardHintStatus.ADD)
    //橫線標示
    horizontalHint(row,col,BoardHintStatus.ADD)
}
function removeHint(row:number,col:number){ //當游標離開該格時，移除提示
    if(!openHint.value) return 
    //直線標示
    verticalHint(row,col,BoardHintStatus.REMOVE)
    //斜線標示
    diagonalHint(row,col,BoardHintStatus.REMOVE)
    //橫線標示
    horizontalHint(row,col,BoardHintStatus.REMOVE)
}
function gameWin(){
    pushMsg(msgArray.value,'成功破解!',MsgType.SUCCESS,40,5000)
}
function resetBoard(){
    count.value = 0
    queensPosition.forEach((col,row) => {
        queensPosition[row] = null
        const colElement = document.getElementById(`board-${row}-${col}`)
        const queenImg = colElement?.firstChild
        if(queenImg)queenImg.remove()
    })
}

</script>