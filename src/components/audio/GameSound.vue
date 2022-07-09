<template>
  <div id="audio-control">
    <audio id="memory-card-turn" preload="true">
      <source src="@/assets/audio/turn.wav" type="audio/mp3" />
    </audio>
    <audio id="memory-card-match">
      <source src="@/assets/audio/match.wav" type="audio/mp3" />
    </audio>
    <audio id="memory-card-pass">
      <source src="@/assets/audio/pass.wav" type="audio/mp3" />
    </audio>
  </div>
</template>>
<script setup lang="ts">
import { onMounted } from '@vue/runtime-core'
import useAudio from '../../composables/util/useAudio'
const { loadAudioControlElement ,loadTurnSoundEle,loadMatchSoundEle ,loadPassSoundEle} = useAudio()
onMounted(()=>{
  loadAudioControlElement(document.getElementById('audio-control') as HTMLElement)
  loadTurnSoundEle(document.getElementById('memory-card-turn') as HTMLAudioElement)
  loadMatchSoundEle(document.getElementById('memory-card-match') as HTMLAudioElement)
  loadPassSoundEle(document.getElementById('memory-card-pass') as HTMLAudioElement)
})
</script>