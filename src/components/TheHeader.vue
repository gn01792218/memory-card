<template>
  <nav class="w-full flex justify-end bg-black text-white ml-auto mr-auto">
    <ul class="flex justify-around">
      <li class="hover:text-slate-500 mr-10" v-for="(item, index) in navData" :key="index"
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
  <div class="flex justify-center">
        <router-link to="/">
          <img :src="img2" alt="" width="400" height="400">
        </router-link>
  </div>
</template>
<script setup lang="ts">
import { reactive } from 'vue'
import useAudio from '../composables/util/useAudio'
import useGame from '@/composables/useGame';
import useUtil from '@/composables/util/useUtil'
const { gameSoundMouted } = useGame()
const { rePlayAudio , hoverSoundEle, gameSoundControlEle, setAllAudiomouted} = useAudio()
const {getAssetsFileURL} = useUtil()
const img2 = getAssetsFileURL('images/KidsGame-logo-white.png')
interface navItem {
  name: string
  path: string
}
const navData = reactive<navItem[]>([
  { name: 'Home', path: '/' },
  { name: 'About', path: '/About' },
])
</script>
