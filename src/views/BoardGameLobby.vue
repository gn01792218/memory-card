<template>
    <main class="w-full text-white text-center">
      <nav>
        <ul class="flex justify-center">
          <li class="mr-2"> <router-link to="/BoardGameLobby/BoardGameMonstrt">棋盤怪獸大戰</router-link> </li>
          <li> <router-link to="/BoardGameLobby/BoardGameEightQueen">8Queen難題</router-link> </li>
        </ul>
      </nav>
      <router-view></router-view>
    </main>
  </template>
  <script setup lang="ts">
  
  </script>