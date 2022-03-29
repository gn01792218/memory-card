<template>
  <div class="w-full">
    <ul class="flex flex-wrap text-white">
      <li v-for="(level,index) in createLevelData()" :key="index">
        <button v-show="level.unlock"
            @click="gotoGame(level.cardNum)"
        >第{{level.level}}關</button>
      </li>
    </ul>
  </div>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import { useStore } from "vuex";
import { useRouter } from 'vue-router';
import useGenerateMemoryCards from '@/composables/memoryCard/useGenerateMemoryCards'
import useCreateLevel from '@/composables/useCreateLevel'

const {createLevelData} = useCreateLevel()
const router = useRouter()
const store = useStore()
const gameThemes = computed(()=>{
    return store.state.game.gameTheme
})

function gotoGame(cardNum:number){
  const {GenerateCard} = useGenerateMemoryCards()
    //產生卡牌
  store.commit('game/setMemoryCardListObj',GenerateCard(gameThemes.value,cardNum))
  //push到memoryCard場景
  router.push('/MemoryCardGame')
}
    

</script>