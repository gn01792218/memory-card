<template>
    <div class="mb-10">
        <h1 class="text-white text-center text-2xl">選擇挑戰難度</h1>
        <ul class="flex justify-center">
            <li class="text-white mr-2 cursor-pointer"
            :class="[{'assent-text-color':gameDifficulty===index}]"
            v-for="(difficulty,index) in getEnumValueList(GameDifficulty)" :key="difficulty"
            @click="switchGameDifficulty(difficulty)"
            >
                {{difficulty}}
            </li>
        </ul>
    </div>
</template>
<script setup lang="ts">
import { GameDifficulty } from "@/types/game/game"
import useGame from "@/composables/useGame"
import useUtil from "@/composables/util/useUtil"
import useCreateLevel from "@/composables/useCreateLevel";
const { gameDifficulty  } = useGame()
const { switchGameDifficulty } = useCreateLevel()
const { getEnumValueList } = useUtil()
</script>