<template>
  <div>
    <GameCounter
      @timesUp="timesUp"
     />
    <MemoryCardList v-if="memoryCardListObj" :cardList="memoryCardListObj[gameTheme]" />
    <button class="text-white" @click="pauseCount">暫停</button>
    <button class="text-white" @click="runCountDown(Number(displayNum.count))">開始</button>
  </div>
</template>
<script setup lang="ts">
import MemoryCardList from '@/components/MemoryCardGame/MemoryCardList.vue'
import GameCounter from '@/components/Util/GameCounter.vue'
import useMemoryCardGame from '@/composables/memoryCard/useMemoryCardGame'
import { useRouter } from 'vue-router'
const router = useRouter()
const { gameTheme, memoryCardListObj,pauseCount,runCountDown,displayNum,resetMemoryCardGame,resetMemoryCard } = useMemoryCardGame()
function timesUp(){
  resetMemoryCardGame() //重置遊戲
  resetMemoryCard()
  router.push('/LevelList')
}
</script>
