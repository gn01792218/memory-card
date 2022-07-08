<template>
  <div class="w-full">
    <div class="flex justify-center">
      <img :src="img2" alt="" width="400" height="400">
    </div>
    <GameDifficultyBar/>
    <!-- <GameTypeList/> -->
    <GameThemesList />
  </div>
</template>
<script setup lang="ts">

import { useStore } from 'vuex'
import GameDifficultyBar from '@/components/Home/GameDifficultyBar.vue';
import GameThemesList from '@/components/Home/GameThemsList.vue'
import useUtil from '@/composables/util/useUtil'
const store = useStore() 
const {getAssetsFileURL} = useUtil()
const img2 = getAssetsFileURL('images/KidsGame-logo-white.png')
store.commit('game/loadGameTypeList')
</script>

<style scoped></style>
