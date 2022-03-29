<template>
  <div class="w-full">
    <h1 class="text-white text-center">遊戲關卡列表</h1>
    <MemoryCardLevelList v-if="gameType == gameTypeEnum.memoryCard"/>
  </div>
</template>
<script setup lang="ts">
import { useStore } from 'vuex'
import useGame from '@/composables/useGame'
import { gameTypeEnum } from '@/types/Enum/enum'
import MemoryCardLevelList from '@/components/MemoryCardGame/MemoryCardLevelList.vue'
const store = useStore()
const {gameType} = useGame()
</script>
