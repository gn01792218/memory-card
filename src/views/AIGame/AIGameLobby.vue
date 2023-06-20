<template>
  <section class="text-white">
    請選擇遊戲
    <nav class="mb-5">
      <ul class="flex justify-center">
        <li
          class="mr-5 text-gray-300 hover:text-gray-500"
          :class="[{ 'active': currentGame === AiGameList.PICTORIDDLE }]"
          @click="currentGame = AiGameList.PICTORIDDLE"
        >
          <router-link :to="`/AIGameLobby/${AiGameList.PICTORIDDLE}`">AI 畫畫猜猜</router-link>
        </li>
      </ul>
    </nav>
    <router-view></router-view>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { AiGameList } from '@/types/game/aiGame/aiGame'
const currentGame = ref('')
</script>