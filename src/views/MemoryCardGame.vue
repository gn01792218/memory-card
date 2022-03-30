<template>
  <div>
    <GameCounter />
    <button class="text-white" @click="pauseCount">暫停</button>
    <button class="text-white" @click="runCountDown(3)">開始</button>
    <MemoryCardList v-if="memoryCardListObj" :cardList="memoryCardListObj[gameTheme]" />
  </div>
</template>
<script setup lang="ts">
import MemoryCardList from '@/components/MemoryCardGame/MemoryCardList.vue'
import GameCounter from '@/components/Util/GameCounter.vue'
import useGame from '@/composables/useGame'
import useMemoryCardGame from '@/composables/memoryCard/useMemoryCardGame'
import useGameCounter from '@/composables/util/useGameCounter';
const { currentLevel } = useGame()
const { gameTheme, memoryCardListObj } = useMemoryCardGame()
const { runCountDown , stopCount ,pauseCount } = useGameCounter()
if(currentLevel.value.timeCount>=0) runCountDown(currentLevel.value.timeCount)
</script>
