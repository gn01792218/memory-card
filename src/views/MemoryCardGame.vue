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

const memoryCardList = reactive<memoryCard[]>([
  {
    upImgPath: "src/assets/images/memoryCard/memoryCard-back.webp",
    downImgPath: "src/assets/images/memoryCard/memoryCard-front.webp",
  },
  {
    upImgPath: "src/assets/images/memoryCard/memoryCard-back.webp",
    downImgPath: "src/assets/images/memoryCard/memoryCard-front.webp",
  },
]);
</script>
