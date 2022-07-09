<template>
  <div class="container h-screen mx-auto p-10">
    <GameSound />
    <Nav />
    <router-view />
  </div>
</template>
<script setup lang="ts">
import Nav from "@/components/Nav.vue";
import GameSound from "@/components/audio/GameSound.vue"
</script>
<style></style>
