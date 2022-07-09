<template>
  <div class="mb-10">
    <ul class="flex justify-center">
      <li
        class="text-white mr-2 cursor-pointer p-5"
        :class="[{ 'active': gameDifficulty === GameDifficulty.SUPEREASY }]"
        @click="switchGameDifficulty(GameDifficulty.SUPEREASY)"
        @mouseover="rePlayAudio(hoverSoundEle)"
      >
        小寶寶模式
      </li>
      <li
        class="text-white mr-2 cursor-pointer p-5"
        :class="[{ 'active': gameDifficulty === GameDifficulty.EASY }]"
        @click="switchGameDifficulty(GameDifficulty.EASY)"
        @mouseover="rePlayAudio(hoverSoundEle)"
      >
        簡單模式
      </li>
      <li
        class="text-white mr-2 cursor-pointer p-5"
        :class="[{ 'active': gameDifficulty === GameDifficulty.MEDIUM }]"
        @click="switchGameDifficulty(GameDifficulty.MEDIUM)"
        @mouseover="rePlayAudio(hoverSoundEle)"
      >
        正常模式
      </li>
      <li
        class="text-red-400 mr-2 cursor-pointer p-5"
        :class="[{ 'active': gameDifficulty === GameDifficulty.HARD }]"
        @click="switchGameDifficulty(GameDifficulty.HARD)"
        @mouseover="rePlayAudio(hoverSoundEle)"
      >
        丟猴模式
      </li>
      <li
        class="text-red-500 mr-2 cursor-pointer p-5"
        :class="[{ 'active': gameDifficulty === GameDifficulty.SUPERHARD }]"
        @click="switchGameDifficulty(GameDifficulty.SUPERHARD)"
        @mouseover="rePlayAudio(hoverSoundEle)"
      >
        不可能成功模式
      </li>
    </ul>
  </div>
</template>
<script setup lang="ts">
import { GameDifficulty } from '@/types/game/game'
import useGame from '@/composables/useGame'
import useUtil from '@/composables/util/useUtil'
import useCreateLevel from '@/composables/useCreateLevel'
import useAudio from '@/composables/util/useAudio'
const { rePlayAudio , hoverSoundEle} = useAudio()
const { gameDifficulty } = useGame()
const { switchGameDifficulty } = useCreateLevel()
const { getEnumValueList } = useUtil()

</script>