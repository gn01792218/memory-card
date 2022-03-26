<template>
  <div class="w-full">
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

const store = useStore()
store.commit('game/loadGameTypeList')
</script>

<style scoped></style>
