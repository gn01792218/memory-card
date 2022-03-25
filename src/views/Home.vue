<template>
  <div class="w-full">
    <h1 class="text-white text-center">選擇遊戲主題</h1>
    <div class="text-white flex">
      <h1 class="mr-5 cursor-pointer" @click="goToTheme(gameThemeEnum.pokemon)">寶可夢</h1>
      <h1 class="mr-5 cursor-pointer" @click="goToTheme(gameThemeEnum.ghostSlayer)">鬼滅之刃</h1>
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed, onUnmounted } from 'vue'
import { useStore } from "vuex";
import { gameThemeEnum } from '@/types/themesEnum/themesEnum';
import { useRouter } from 'vue-router';
const router = useRouter()
const store = useStore()
function goToTheme(themeEnum:gameThemeEnum){
  //設置場控主題
  store.commit('gameThemes/setGameTheme',themeEnum)
  //前往該路由
  router.push('/LevelList')
}
</script>

<style scoped></style>
