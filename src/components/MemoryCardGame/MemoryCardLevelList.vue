<template>
  <div class="w-full">
    <div class="flex flex-wrap text-white">
        <button
            v-for="(level,index) in levelListData" :key="index"
            @click="gotoGame(level.cardNum)"
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

const {levelListData} = useCreateLevel()
const router = useRouter()
const store = useStore()
const gameThemes = computed(()=>{
    return store.state.game.gameTheme
})

function gotoGame(cardNum:number){
  const {GenerateCard} = useGenerateMemoryCards()
    //產生卡牌
  store.commit('game/setMemoryCardListObj',GenerateCard(gameThemes.value,cardNum))
}
    

</script>