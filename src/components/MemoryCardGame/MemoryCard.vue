<template>
  <div
    class="w-48 h-80 m-2 relative cursor-pointer perspective-1500"
    @click="checkCard(cardItem,index)"
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
import { memoryCard } from '@/types/global'
import useMemoryCard from '@/composables/memoryCard/useMemoryCard'
const props = defineProps<{
  index: number
  cardItem: memoryCard
}>()
//翻牌特效:
const {checkCard} = useMemoryCard()
</script>
