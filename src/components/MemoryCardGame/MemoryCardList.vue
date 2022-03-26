<template>
  <MemoryCard v-for="(card, index) in cardList" :key="index" :cardItem="card" :index="index" />
</template>
<script setup lang="ts">
import { memoryCard } from '@/types/global'
import MemoryCard from '@/components/MemoryCardGame/MemoryCard.vue'
import {pokemon,ghostSlayer} from '@/types/Enum/themesEnum'
defineProps<{
  cardList: memoryCard<ghostSlayer>[]
}>()
</script>
