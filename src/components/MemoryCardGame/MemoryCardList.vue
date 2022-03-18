<template>
  <MemoryCard
    v-for="card in cardList"
    :key="card"
    :cardItem="card"
  />
</template>
<script setup lang="ts">
import { memoryCard } from "@/types/global";
import MemoryCard from "@/components/MemoryCardGame/MemoryCard.vue";

defineProps<{
    cardList:memoryCard[],
}>();
</script>
