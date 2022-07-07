<template>
<div class="max-w-[944px] h-auto flex flex-wrap justify-center">
  <MemoryCardElement v-for="(card, index) in cardList" :key="index" :cardItem="card" :index="index" />
</div>
</template>
<script setup lang="ts">
import { MemoryCard } from '@/types/global'
import MemoryCardElement from '@/components/MemoryCardGame/MemoryCard.vue'
defineProps<{
  cardList: MemoryCard[]
}>()
</script>
