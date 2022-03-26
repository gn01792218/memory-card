<template>
  <div class="w-full">
    <h1 class="text-white text-center">選擇遊戲主題</h1>
    <div class="text-white flex">
      <h1 class="mr-5 cursor-pointer"
        v-for="theme in gameThemesList" :key="theme"
        @click="goToTheme(theme)"
      >{{gameThemeEnum[theme]}}</h1>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { gameThemeEnum } from '@/types/Enum/enum'
import { computed } from '@vue/runtime-core'

const router = useRouter()
const store = useStore()
const gameType = computed(()=>{
  return store.state.game.gameType
})
const gameThemesList = computed(()=>{
  return store.state.game.gameTypeList[gameType.value]
})
function goToTheme(themeEnum: gameThemeEnum) {
  //設置場控主題
  store.commit('game/setGameTheme', themeEnum)
  //前往該路由
  router.push('/LevelList')
}
</script>