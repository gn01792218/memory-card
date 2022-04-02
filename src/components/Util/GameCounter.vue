<template>
  <div class="counter relative">
    <div id="loading" class="absolute"></div>
    <h1 id="countNumber" class="absolute">{{ displayNum.count }}</h1>
  </div>
</template>
<script setup lang="ts">
import {watch} from 'vue'
import {displayNum} from '@/composables/util/useGameCounter'
const emits = defineEmits(["timesUp"])
watch(displayNum,()=>{
  if(displayNum.count === "00"){
    setTimeout(()=>{
      emits("timesUp"); console.log(displayNum.count)
    },1000)
  } 
})
</script>
