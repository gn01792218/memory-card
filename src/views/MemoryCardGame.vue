<template>
  <div>
    <MemoryCardList v-if="memoryCardListObj" :cardList="memoryCardListObj[gameTheme]" />
  </div>
</template>
<script setup lang="ts">
import MemoryCardList from '@/components/MemoryCardGame/MemoryCardList.vue'
import useMemoryCardGame from '@/composables/memoryCard/useMemoryCardGame'
const { gameTheme,memoryCardListObj} = useMemoryCardGame()
</script>
