<template>
  <div class="max-w-[820px] ml-auto mr-auto mt-10">
    <ul class="flex flex-wrap text-white">
      <li v-for="(level, index) in levelList[gameType][gameTheme]" :key="index">
        <div
          :class="[
            { 'cursor-pointer text-gray-50 border-lime-300': level.unlock },
            {'border-slate-600':!level.unlock},
            { 'text-gray-400': !level.unlock },
            'text-center mr-4 mb-10 border-2 p-2'
          ]"
          @click="gotoGame(level)"
        >
          第{{ level.level+1 }}關
          <p>{{level.cardNum}}張卡片</p>
          <p :class="[{'text-red-400':level.unlock}]" v-if="level.timeCount">*限時{{level.timeCount}}秒*</p>
          <p v-if="level.timeCount<1">無時間限制</p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script setup lang="ts">
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import useGenerateMemoryCards from '@/composables/memoryCard/useGenerateMemoryCards'
import useCreateLevel from '@/composables/useCreateLevel'
import useGame from '@/composables/useGame'
import { MemoryCardLevel } from '@/types/game/memoryCard/memoryCard'

const { createLevelData } = useCreateLevel()
const { gameType , gameTheme , levelList} = useGame()
const router = useRouter()
const store = useStore()
createLevelData()
function gotoGame(level: MemoryCardLevel) {
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
