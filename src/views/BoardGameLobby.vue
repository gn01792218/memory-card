<template>
    <main class="w-full text-white text-center">
      <p class="mb-10">
        選擇遊戲
      </p>
      <nav class="mb-5">
        <ul class="flex justify-center">
          <li class="mr-5 text-gray-300 hover:text-gray-500" :class="[{'active-boardGame':currentBoardGame === 'BoardGameMonstrt'}]" @click="currentBoardGame = 'BoardGameMonstrt'"> <router-link to="/BoardGameLobby/BoardGameMonstrt">棋盤怪獸大戰</router-link> </li>
          <li class="text-gray-300 hover:text-gray-500"  @click="currentBoardGame = 'BoardGameEightQueen'" :class="[{'active-boardGame':currentBoardGame === 'BoardGameEightQueen'}]"> <router-link to="/BoardGameLobby/BoardGameEightQueen">8Queen難題</router-link> </li>
        </ul>
      </nav>
      <router-view></router-view>
    </main>
  </template>
  <script setup lang="ts">
  import { ref, computed } from 'vue'
import { useRoute } from 'vue-router';
  const route = useRoute()
  const game = computed(()=>{
    let gameRul = route.path.split('/')[2]
    return gameRul
  })

  const currentBoardGame = ref<string>(game.value)
  
  </script>