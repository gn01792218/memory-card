<template>
  <div class="counter position-relative">
    <div id="loading" class="position-absolute"></div>
    <h1 id="countNumber" class="position-absolute">{{ displayNum.count }}</h1>
  </div>
</template>
<script setup lang="ts">
import {displayNum} from '@/composables/util/useGameCounter'
</script>
