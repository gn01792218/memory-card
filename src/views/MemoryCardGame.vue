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
import {pokemon,ghostSlayer} from '@/types/themesEnum/themesEnum'
import useRandom from "@/composables/useRandom";
import useMemoryCardGame from "@/composables/useMemoryCardGame"
const memoryCardList = reactive<memoryCard<ghostSlayer>[]>([
  {
    cardIndex:0,
    upImgPath: upImgUrl,
    downImgPath: downImgUrl,
    context:ghostSlayer.嘴平伊之助,
    isChecked:false,
  },
  {
    cardIndex:1,
    upImgPath: upImgUrl,
    downImgPath: downImgUrl,
    context:ghostSlayer.富岡義勇,
    isChecked:false,
  },
  {
    cardIndex:2,
    upImgPath: upImgUrl,
    downImgPath: downImgUrl,
    context:ghostSlayer.富岡義勇,
    isChecked:false,
  },
]);
const gameControl = useMemoryCardGame(memoryCardList)
</script>
