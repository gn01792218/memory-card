<template>
  <div id="audio-control">
    <audio id="memory-card-turn">
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
const { loadAudioControlElement } = useAudio()
onMounted(()=>{
  loadAudioControlElement(document.getElementById('audio-control') as HTMLElement)
})
</script>