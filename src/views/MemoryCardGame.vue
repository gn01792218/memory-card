<template>
  <div>
    <MemoryCardList v-if="memoryCardListObj" :cardList="memoryCardListObj[gameTheme]" />
  </div>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import { memoryCard } from '@/types/global'
import MemoryCardList from '@/components/MemoryCardGame/MemoryCardList.vue'
import { gameThemeEnum } from '@/types/Enum/enum'
import useMemoryCardGame from '@/composables/memoryCard/useMemoryCardGame'
import { useStore } from 'vuex'
const { gameTheme,memoryCardListObj} = useMemoryCardGame()
</script>
