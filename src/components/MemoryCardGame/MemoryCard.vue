<template>
  <div>
    <div>
        <img :src="cardItem.backImgPath" alt="記憶卡牌背面">
    </div>
    <div>
        <img :src="cardItem.frontImgPath" alt="記憶卡牌正面">
    </div>
  </div>
</template>
<script setup lang="ts">
import { defineProps } from "vue";
import { memoryCard } from "@/types/global";

defineProps<{
    cardItem:memoryCard,
}>();
</script>
