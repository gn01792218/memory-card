<template>
  <div class="counter position-relative">
    <div id="loading" class="position-absolute"></div>
    <h1 id="countNumber" class="position-absolute">{{ gameCounterDisplayNum }}</h1>
    <!-- <h1 id="countNumber" class="position-absolute">{{ displayNum }}</h1> -->
  </div>
</template>
<script setup lang="ts">
import useGame from '@/composables/useGame'
const {gameCounterDisplayNum} = useGame()
// import useGameCounter from '@/composables/util/useGameCounter'
// const { displayNum } = useGameCounter()
</script>
