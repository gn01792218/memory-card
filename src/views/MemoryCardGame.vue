<template>
  <div>
    <MemoryCardList v-if="memoryCardListObj" :cardList="memoryCardListObj[gameTheme]" />
  </div>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import { memoryCard } from '@/types/global'
import MemoryCardList from '@/components/MemoryCardGame/MemoryCardList.vue'
import { gameThemeEnum } from '@/types/themesEnum/themesEnum'
import { pokemon, ghostSlayer } from '@/types/themesEnum/themesEnum'
import useRandom from '@/composables/useRandom'
import useMemoryCardGame from '@/composables/useMemoryCardGame'
import { useStore } from 'vuex'
const gameControl = useMemoryCardGame()
//以下，之後考慮由useMemoryCardGame傳出來
const store = useStore()
const gameTheme = computed<gameThemeEnum>(() => {
  return store.state.gameThemes.gameTheme
})
const memoryCardListObj = computed(() => {
  return store.state.gameThemes.memoryCardListObj
})
</script>
