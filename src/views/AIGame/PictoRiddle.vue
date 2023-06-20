<template>
    <section class="text-white">
        <button class="rounded-full px-2 py-1 border-2 border-slate-300 hover:text-slate-300"
        @click="setRiddleImage"
        >產生謎題</button>
        <div>
            <img :src="riddleImageUrl" :alt="riddle">
        </div>
        <p>{{ riddleHint }}</p>
    </section>
    
</template>

<script setup lang="ts">
import { ref } from "vue";
const answer = ref('畫蛇添足')
const riddleImagePrompt = ref(`幫我畫一個塗鴉風格的畫畫猜猜謎題塗鴉，謎底為'${answer.value}'`)
const riddleHint = ref('猜動物')
const riddleImageUrl = ref('')

async function setRiddleImage (){
    
}

</script>