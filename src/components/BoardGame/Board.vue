<template>
    <section class="board">
        <section class="flex"
        v-for="row in size" :key="row"
        >
            <div class="board-col" :id="`board-${row}${col}`"
            v-for="col in size" :key="col"
            @click="clickBoardCol(row,col)"
            @mouseover="hint(row,col)"
            @mouseleave="removeHint(row,col)"
            >
            </div>
        </section>
    </section>
</template>
<script setup lang="ts">
import useUtil from '@/composables/util/useUtil';
interface BoardObj{
    size:number,
    openHint:boolean
}
const props = defineProps<BoardObj>()
const { getAssetsFileURL } = useUtil()
function getQueenImg(){
    const queenImg = document.createElement('IMG') as HTMLImageElement
    queenImg.src = getAssetsFileURL('images/boardGame/queen.png')
    queenImg.classList.add('w-full')
    queenImg.classList.add('h-full')
    queenImg.classList.add('queen')
    return queenImg
}
function clickBoardCol(row:number,col:number){
    //擺放皇后
    const colElement = document.getElementById(`board-${row}${col}`)
    //沒有圖片的話+圖片
    const queenImg = colElement?.firstChild
    if(queenImg) queenImg.remove()
    else colElement?.appendChild(getQueenImg())
}
function hint(row:number,col:number){ //當游標移動到該col上時
    if(!props.openHint) return 
    //1.利用獲得之座標，判斷要顯示的col有哪些

}
function removeHint(row:number,col:number){ //當游標離開該格時，移除提示
    if(!props.openHint) return 
}

</script>