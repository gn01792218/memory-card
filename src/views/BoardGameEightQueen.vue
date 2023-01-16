<template>
    <main class="w-full text-white text-center">
        <header class="mb-5">
            <section>
                遊戲方式 : 請將所有皇后放進棋盤中，並且每個皇后都不能互相攻擊
            </section>
        </header>
        <article>
            <Board :size="boardSize"/>
        </article>
    </main>
</template>
<script setup lang="ts">
import Board from '@/components/BoardGame/Board.vue'
const boardMinSize = 4
const boardMaxSize = 8
const boardSize = 4

</script>