<template>
  <div class="w-full">
    <h1 class="text-white text-center text-xl">選擇遊戲主題</h1>
    <div class="text-white flex justify-center">
      <div class="text-center cursor-pointer mr-5"
       v-for="theme in gameThemeList" :key="theme"
        @click="goToTheme(theme)"
      >
        <h1 class="mr-5 text-2xl hover:text-slate-500"
        
      >{{GameThemeEnum[theme]}}</h1>
      <div class="w-48 h-48">
        <img class="w-full h-full hover:scale-95" :src="getAssetsFileURL(`images/memoryCard/${GameThemeEnum[theme]}/cardDown.webp`)" alt="gameThemeEnum[theme]">
      </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import useGame from '../../composables/useGame'
import { GameThemeEnum } from '../../types/game/game'
import useUtil from '../../composables/util/useUtil'
const router = useRouter()
const store = useStore()
const { gameThemeList } = useGame()
const { getAssetsFileURL } = useUtil()
function goToTheme(themeEnum: GameThemeEnum) {
  //設置場控主題
  store.commit('game/setGameTheme', themeEnum)
  //前往該路由
  router.push('/LevelList')
}
</script>