<template>
  <div class="w-full mb-10">
    <h1 class="text-white text-center text-xl">選擇遊戲種類</h1>
    <div class="text-white flex justify-center">
        <button class="mr-5 cursor-pointer text-2xl hover:text-slate-500"
        v-for="(type,index) in gameTypeList" :key="type"
        @click="setGameType(index)"
        >
            {{GameTypeEnum[index]}}
        </button>
    </div>
  </div>
</template>
<script setup lang="ts">
import { GameTypeEnum } from '../../types/game/game';
import { useStore } from 'vuex'
import useGame from '../../composables/useGame'
const store = useStore()
const { gameTypeList } = useGame()
function setGameType(type:GameTypeEnum){
    store.commit('game/setGameType',type)
}

</script>

<style scoped></style>