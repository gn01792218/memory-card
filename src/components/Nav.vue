<template>
  <nav class="w-full flex justify-end bg-black text-white ml-auto mr-auto">
    <ul class="w-1/4 flex justify-around">
      <li class="hover:text-slate-500" v-for="(item, index) in navData" :key="index"
      @mouseover="rePlayAudio(hoverSoundEle)"
      >
        <router-link :to="item.path">{{item.name}}</router-link>
      </li>
      <li class="cursor-pointer" @click="setAllAudiomouted(gameSoundControlEle,!gameSoundMouted)">
        <i v-show="!gameSoundMouted" class="bi bi-volume-up text-lg"></i>
        <i v-show="gameSoundMouted" class="bi bi-volume-mute text-lg"></i>
      </li>
    </ul>
  </nav>
</template>
<script setup lang="ts">
import { reactive,onMounted } from 'vue'
import useAudio from '../composables/util/useAudio'
import useGame from '@/composables/useGame';
const { gameSoundControlEle,setAllAudiomouted} = useAudio()
const { gameSoundMouted } = useGame()
const { rePlayAudio , hoverSoundEle } = useAudio()
interface navItem {
  name: string
  path: string
}
const navData = reactive<navItem[]>([
  { name: 'Home', path: '/' },
  { name: 'About', path: '/About' }
])
</script>
