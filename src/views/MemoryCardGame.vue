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
    backImgPath: "src/assets/images/memoryCard/memoryCard-back.png",
    frontImgPath: "src/assets/images/memoryCard/memoryCard-front.png",
  },
]);
</script>
