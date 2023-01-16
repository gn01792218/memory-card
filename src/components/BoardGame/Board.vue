<template>
    <section class="board">
        <section class="flex"
        v-for="row in size" :key="row"
        >
            <div class="board-col"
            v-for="col in size" :key="col"
            @click="clickBoardCol(row,col)"
            >

            </div>
        </section>
    </section>
</template>
<script setup lang="ts">
interface BoardObj{
    size:number
}
defineProps<BoardObj>()

function clickBoardCol(row:number,col:number){
    
}

</script>