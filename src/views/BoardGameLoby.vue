<template>
    <div class="w-full text-white text-center">
      這是棋盤遊戲大廳，請選擇遊戲
      <div class="cursor-pointer" @click="goToGame('棋盤')">棋盤怪獸大戰</div>
      <div class="cursor-pointer" @click="goToGame('8Q')">8Queen難題</div>
      <router-view></router-view>
    </div>
  </template>
  <script setup lang="ts">
  import { useRouter } from 'vue-router'
  const router = useRouter()
  function goToGame(type:'棋盤' | '8Q'){
    switch(type){
        case '棋盤':
            router.push('/BoardGameLoby/BoardGameMonstrt')
            break
        case '8Q' :
            router.push('/BoardGameLoby/BoardGameEightQueen')
            break
    }
  }
  </script>