<template>
  <div class="w-full">
    <h1 class="text-white text-center">遊戲關卡列表</h1>
    <MemoryCardLevelList
      v-if="gameType == gameTypeEnum.memoryCard"
    />
  </div>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import { useStore } from "vuex";
import { gameTypeEnum } from '@/types/Enum/enum';
import MemoryCardLevelList from '@/components/MemoryCardGame/MemoryCardLevelList.vue'
const store = useStore()
const gameType = computed(()=>{
  return store.state.game.gameType
})
const gameThemes = computed(()=>{
    return store.state.game.gameTheme
})
  
</script>