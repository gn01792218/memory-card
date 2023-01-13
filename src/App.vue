<template>
  <div class="container h-screen mx-auto p-10">
    <GameSound />
    <TheHeader />
    <router-view />
  </div>
</template>
<script setup lang="ts">
import TheHeader from "@/components/TheHeader.vue";
import GameSound from "@/components/audio/GameSound.vue"
</script>
<style></style>
