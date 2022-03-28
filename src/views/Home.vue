<template>
  <div class="w-full">
     <img :src="img2" alt="">
    <gameTypeList/>
    <gameThemesList />
  </div>
</template>
<script setup lang="ts">
import { computed, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import gameTypeList from '@/components/Home/gameTypeList.vue'
import gameThemesList from '@/components/Home/gameThemsList.vue'
import useUtil from '@/composables/util/useUtil'
const store = useStore() 
const {getAssetsFileURL} = useUtil()
const img2 = getAssetsFileURL('images/memoryCard/pokemon/1.webp')
store.commit('game/loadGameTypeList')
</script>

<style scoped></style>
