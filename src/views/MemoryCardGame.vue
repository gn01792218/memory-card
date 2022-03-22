<template>
    <div>
        <MemoryCardList
            :cardList="memoryCardList"
        />
    </div>
</template>
<script setup lang="ts">
import { reactive } from "vue";
import { memoryCard } from "@/types/global";
import MemoryCardList from "@/components/MemoryCardGame/MemoryCardList.vue";
import upImgUrl from '@/assets/images/memoryCard/memoryCard-back.webp';
import downImgUrl from '@/assets/images/memoryCard/memoryCard-front.webp';
const memoryCardList = reactive<memoryCard[]>([
  {
    upImgPath: upImgUrl,
    downImgPath: downImgUrl,
  },
  {
    upImgPath: "/images/memoryCard/memoryCard-back.webp",
    downImgPath: "/images/memoryCard/memoryCard-front.webp",
  },
]);
</script>
