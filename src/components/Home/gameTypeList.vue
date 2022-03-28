<template>
  <div class="w-full">
    <h1 class="text-white text-center">選擇遊戲種類</h1>
    <div class="text-white">
        <button class="mr-5 cursor-pointer"
        v-for="(type,index) in gameTypes" :key="type"
        @click="setGameType(index)"
        >
            {{gameTypeEnum[index]}}
        </button>
    </div>
  </div>
</template>
<script setup lang="ts">
import { gameTypeEnum } from '@/types/Enum/enum';
import { computed } from '@vue/runtime-core';
import { useStore } from 'vuex'
const store = useStore()
const gameTypes = computed(()=>{
    return store.state.game.gameTypeList
})
function setGameType(type:gameTypeEnum){
    store.commit('game/setGameType',type)
}

</script>

<style scoped></style>