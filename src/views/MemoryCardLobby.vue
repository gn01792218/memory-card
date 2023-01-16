<template>
  <div class="w-full">
    <GameDifficultyBar/>
    <GameThemesList />
  </div>
</template>
<script setup lang="ts">
import { useStore } from 'vuex'
import GameDifficultyBar from '@/components/Home/GameDifficultyBar.vue';
import GameThemesList from '@/components/Home/gameThemsList.vue'

const store = useStore() 
store.commit('game/loadGameTypeList')
</script>
