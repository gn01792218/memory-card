<template>
  <div class="w-full">
    <ul class="flex flex-wrap text-white">
      <li v-for="(level, index) in levelList[gameType][gameTheme]" :key="index">
        <div
          :class="[
            { 'cursor-pointer text-gray-50': level.unlock },
            { 'text-gray-400': !level.unlock },
            'mr-1'
          ]"
          @click="gotoGame(level)"
        >
          第{{ level.level }}關
        </div>
      </li>
    </ul>
  </div>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import useGenerateMemoryCards from '@/composables/memoryCard/useGenerateMemoryCards'
import useCreateLevel from '@/composables/useCreateLevel'
import useGame from '@/composables/useGame'
import { memoryCardLevel } from '@/types/global'

const { createLevelData } = useCreateLevel()
const { gameType , gameTheme , levelList} = useGame()
const router = useRouter()
const store = useStore()
createLevelData()
function gotoGame(level: memoryCardLevel) {
  if(!level.unlock) return
  const { GenerateCard } = useGenerateMemoryCards()
  //產生卡牌
  store.commit('game/setMemoryCardListObj', GenerateCard(gameTheme.value, level.cardNum))
  //紀錄關卡物件
  store.commit('game/setCurrentLevel',level)
  //push到memoryCard場景
  router.push('/MemoryCardGame')
}
</script>
