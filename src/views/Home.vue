<template>
  <div class="w-full">
    <div class="flex justify-center">
      <img :src="img2" alt="" width="800" height="800">
    </div>
    <GameTypeList/>
    <GameThemesList />
  </div>
</template>
<script setup lang="ts">
import { computed, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import GameTypeList from '@/components/Home/GameTypeList.vue'
import GameThemesList from '@/components/Home/GameThemsList.vue'
import useUtil from '@/composables/util/useUtil'
const store = useStore() 
const {getAssetsFileURL} = useUtil()
const img2 = getAssetsFileURL('images/KidsGame-logo-white.png')
store.commit('game/loadGameTypeList')
</script>

<style scoped></style>
