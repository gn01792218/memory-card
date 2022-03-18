<template>
  <nav class="w-full flex justify-between bg-black text-white ml-auto mr-auto">
    <p class>AAAAAAAA</p>
    <ul class="w-1/4 flex justify-around">
      <li class="hover:text-slate-500" v-for="(item, index) in navData" :key="index">
        <router-link :to="item.path">{{ item.name }}</router-link>
      </li>
    </ul>
  </nav>
</template>
<script setup lang="ts">
import { reactive } from "vue";

interface navItem {
  name: string
  path: string
}
const navData = reactive<navItem[]>([
  { name: "Home", path: "/" },
  { name: "About", path: "/About" },
  { name: "MemoryCardGame", path: "/MemoryCardGame" },
]);
</script>
