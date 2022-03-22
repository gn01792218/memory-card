<template>
  <div
    class="w-48 h-80 relative cursor-pointer perspective-1500"
    @click="switchStatus"
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
import useMemoryCard from '@/composables/memoryCard'
const props = defineProps<{
  index: number
  cardItem: memoryCard
}>()
//翻牌特效:
console.log(props.cardItem.downImgPath)
const {checkCard,resetCard} = useMemoryCard(props.index)
//controller
const checkCardSataus = ref<boolean>(false)
watch(checkCardSataus, () => {
  checkCardSataus.value ? checkCard() :resetCard()
})
function switchStatus(){ 
  checkCardSataus.value = !checkCardSataus.value
}
</script>
