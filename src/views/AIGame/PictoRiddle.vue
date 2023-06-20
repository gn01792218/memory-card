<template>
    <section class="text-white">
        <button class="rounded-full px-2 py-1 border-2 border-slate-300 hover:text-slate-300">產生謎題</button>
        <img :src="riddleImageUrl" :alt="riddle">
        <p>{{ riddle }}</p>
    </section>
    
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Configuration, OpenAIApi  } from 'openai'
const config = new Configuration({
    apiKey:import.meta.env.VITE_KIDSGAME_OPENAI_KEY as string
})
console.log(import.meta.env.VITE_KIDSGAME_OPENAI_KEY)
const riddle = ref('猜動物')
const riddleImageUrl = ref('')

</script>