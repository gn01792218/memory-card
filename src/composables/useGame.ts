import { computed } from 'vue'
import { useStore } from 'vuex'
import { GameThemeEnum, GameTypeEnum } from '@/types/game/game'
import { MemoryCardLevel } from '@/types/game/memoryCard/memoryCard'
export default function useGame() {
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
  const gameThemeList = computed<GameThemeEnum[]>(()=>{
    return gameStoreState.gameTypeList[gameType.value]
  })
  const currentLevel = computed<MemoryCardLevel>(() => {
    return gameStoreState.currentLevel
  })
  const levelList = computed(() => {
    console.log(gameStoreState.levelList)
    return gameStoreState.levelList
  })
  const memoryCardListObj = computed(() => {
    return gameStoreState.memoryCardListObj
  })
  return {
    gameType,
    gameTheme,
    gameTypeList,
    gameThemeList,
    currentLevel,
    levelList,
    memoryCardListObj,
  }
}
