<template>
  <div class="w-full">
    <h1 class="text-white text-center">遊戲關卡列表</h1>
    <div class="flex flex-wrap text-white">
        <button
            v-for="(level,index) in levelListData" :key="index"
        >第{{level.level}}關</button>
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import { useStore } from "vuex";
import { useRouter } from 'vue-router';
import useGenerateMemoryCards from '@/composables/memoryCard/useGenerateMemoryCards'
import useCreateLevel from '@/composables/useCreateLevel'
const {GenerateCard} = useGenerateMemoryCards()
const {levelListData} = useCreateLevel()
const router = useRouter()
const store = useStore()
const gameThemes = computed(()=>{
    return store.state.gameThemes.gameTheme
})

function gotoLevel(level:number){
    //產生卡牌
  store.commit('gameThemes/setmemoryCardListObj',GenerateCard(gameThemes.value))
}
    

</script>