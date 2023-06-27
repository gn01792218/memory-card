
<template>
  <div class="w-full text-white">
    <p class="text-center mb-10">
      選擇遊戲
    </p>
    <nav class="w-full flex justify-center">
      <router-link class="text-center mr-10 w-[200px] h-[200px]" 
      to="/MemoryCardLobby"
      @mouseover="rePlayAudio(hoverSoundEle)"
      >
        記憶類遊戲
        <img class="w-full h-full hover:scale-95" :src="getAssetsFileURL(`images/memory_game.webp`)" alt="gameThemeEnum[theme]">
      </router-link>
      <router-link class="text-center w-[200px] h-[200px]"
      to="/BoardGameLobby"
      @mouseover="rePlayAudio(hoverSoundEle)"
      >
        棋盤類遊戲
        <img class="w-full h-full hover:scale-95" :src="getAssetsFileURL(`images/board_game.webp`)" alt="gameThemeEnum[theme]">
      </router-link>
    </nav>
  </div>
</template>
<script setup lang="ts">
import useUtil from "@/composables/util/useUtil";
import useAudio from '../composables/util/useAudio'
const { rePlayAudio , hoverSoundEle, gameSoundControlEle, setAllAudiomouted} = useAudio()
const { getAssetsFileURL } = useUtil()
  </script>