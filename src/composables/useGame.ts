import { computed } from 'vue'
import { useStore } from 'vuex'
import { gameThemeEnum, gameTypeEnum } from '@/types/Enum/enum'
import { levelObj,memoryCardLevel, memoryCard } from '@/types/global'
export default function useGame() {
  const store = useStore()
  const gameStoreState = store.state.game
  const gameType = computed<gameTypeEnum>(() => {
    return gameStoreState.gameType
  })
  const gameTheme = computed<gameThemeEnum>(() => {
    return gameStoreState.gameTheme
  })
  const gameTypeList = computed<gameTypeEnum[]>(()=>{
    return gameStoreState.gameTypeList
  })
  const gameThemeList = computed<gameThemeEnum[]>(()=>{
    return gameStoreState.gameTypeList[gameType.value]
  })
  const currentLevel = computed<memoryCardLevel>(() => {
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
