<template>
  <div
    class="w-48 h-80 relative cursor-pointer perspective-1500"
    @click="checkCard"
  >
    <div :id="`memory-card-up-${String(index)}`" class="w-full h-full absolute backface-hidden">
      <img class="h-full" :src="cardItem.upImgPath" alt="記憶卡牌背面" />
    </div>
    <div :id="`memory-card-down-${String(index)}`" class="w-full h-full absolute backface-hidden">
      <img class="h-full" :src="cardItem.downImgPath" alt="記憶卡牌內容" />
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, watch } from 'vue'
import { memoryCard } from '@/types/global'
import useMemoryCard from '@/composables/memoryCard/useMemoryCard'
const props = defineProps<{
  index: number
  cardItem: memoryCard
}>()
//翻牌特效:
const {checkCard} = useMemoryCard(props.cardItem,props.index)
</script>
