import { toRaw } from "@vue/reactivity";
import { computed } from 'vue'
import { useStore } from 'vuex'
import { Game, GameDifficulty, GameThemeEnum, GameTypeEnum } from '@/types/game/game'
import { MemoryCardLevel } from '@/types/game/memoryCard/memoryCard'
export default function useGame() {
  //store
  const store = useStore()
  const gameStoreState = store.state.game
  const gameType = computed<GameTypeEnum>(() => {
    return gameStoreState.gameType
  })
  const gameTheme = computed<GameThemeEnum>(() => {
    return gameStoreState.gameTheme
  })
  const gameTypeList = computed<GameTypeEnum[]>(()=>{
    return gameStoreState.gameTypeList
  })
  const gameDifficulty = computed<GameDifficulty>(()=>{
    return gameStoreState.gameDifficulty
  })
  const gameThemeList = computed<GameThemeEnum[]>(()=>{
    return gameStoreState.gameTypeList[gameType.value]
  })
  const currentLevel = computed<MemoryCardLevel>(() => {
    return gameStoreState.currentLevel
  })
  const levelList = computed(() => {
    return toRaw(gameStoreState.levelList)
  })
  const memoryCardListObj = computed(() => {
    return gameStoreState.memoryCardListObj
  })
  const gameSoundMouted = computed<boolean>(()=>{
    return gameStoreState.gameSoundMouted
  })
  return {
    //data
    gameType,
    gameTheme,
    gameDifficulty,
    gameTypeList,
    gameThemeList,
    currentLevel,
    levelList,
    memoryCardListObj,
    gameSoundMouted,
  }
}
