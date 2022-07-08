import { reactive } from 'vue'
import { MemoryCardLevel } from '@/types/game/memoryCard/memoryCard'
import { GameDifficulty, GameTypeEnum } from '@/types/game/game'
import useGame from '@/composables/useGame'
import { useStore } from 'vuex'
export default function useCreateLevel() {
  const store = useStore()
  const {
    gameType,
    gameTheme,
    gameDifficulty,
  } = useGame()
  const levelListData = reactive<MemoryCardLevel[]>([])
  function createLevelData() {
    switch (gameType.value) {
      case GameTypeEnum.memoryCard:
        const leveCardNumList = setMemoryCardLevelCardNumList(gameDifficulty.value)
        const levelTimeCountList = setMemoryCardlevelTimeCountList(gameDifficulty.value)
        //在這裡設置關卡模式的不同內容
        for (let i = 0; i < 10; i++) {
          levelListData.push({
            gameType: gameType.value,
            gameTheme: gameTheme.value,
            level: i,
            unlock: false,
            // unlock:true, //測試用
            cardNum: leveCardNumList[i],
            timeCount: levelTimeCountList[i]
          })
        }
        levelListData[0].unlock = true //預設第一關是解鎖狀態
        //儲存到vuex中
        loadGameLevelList(levelListData)
        store.commit('game/setLevelList', levelListData)
    }
  }
  //切換遊戲模式時的關卡重置作業
  function reSetLevelData() {
    switch (gameType.value) {
      case GameTypeEnum.memoryCard:
        const leveCardNumList = setMemoryCardLevelCardNumList(gameDifficulty.value)
        const levelTimeCountList = setMemoryCardlevelTimeCountList(gameDifficulty.value)
        //在這裡設置關卡模式的不同內容
        for (let i = 0; i < 10; i++) {
          levelListData.push({
            gameType: gameType.value,
            gameTheme: gameTheme.value,
            level: i,
            unlock: false,
            // unlock:true, //測試用
            cardNum: leveCardNumList[i],
            timeCount: levelTimeCountList[i]
          })
        }
        levelListData[0].unlock = true //預設第一關是解鎖狀態
        //儲存到vuex中
        loadGameLevelList(levelListData)
        store.commit('game/reloadLevelList', levelListData)
    }
  }
  //這個方法之後要想辦法移到useGenerateMemoryCard中
  function setMemoryCardLevelCardNumList(gameDifficulty: GameDifficulty) {
    switch (gameDifficulty) {
      case GameDifficulty.SUPEREASY:
        return [4, 6, 8, 10, 12, 14, 16, 18, 20, 20]
      case GameDifficulty.EASY:
        return [8, 8, 12, 12, 12, 12, 16, 18, 20, 20]
      case GameDifficulty.MEDIUM:
        return [8, 8, 12, 12, 12, 12, 16, 18, 20, 20]
      case GameDifficulty.HARD:
        return [12, 12, 14, 14, 16, 16, 18, 18, 22, 22]
      case GameDifficulty.SUPERHARD:
        return [14, 14, 16, 16, 18, 18, 20, 20, 22, 24]
    }
  }
  function setMemoryCardlevelTimeCountList(gameDifficulty: GameDifficulty) {
    switch (gameDifficulty) {
      case GameDifficulty.SUPEREASY:
        return [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      case GameDifficulty.EASY:
        return [0, 0, 0, 0, 0, 40, 40, 40, 40, 40]
      case GameDifficulty.MEDIUM:
        return [0, 0, 0, 40, 35, 30, 40, 40, 45, 40]
      case GameDifficulty.HARD:
        return [30, 30, 30, 40, 35, 30, 40, 40, 45, 40]
      case GameDifficulty.SUPERHARD:
        return [25, 25, 30, 30, 30, 30, 35, 35, 35, 40]
    }
  }
  function switchGameDifficulty(gameDifficulty: GameDifficulty) {
   let check = confirm('所有關卡紀錄將重置，確定切換模式嗎?')
   if(!check) return
    store.commit('game/setGameDifficulty', gameDifficulty)
    reSetLevelData()
  }
  function loadGameLevelList(list: MemoryCardLevel[]) {
    store.commit('game/setLevelList', list)
  }
  return {
    //data
    createLevelData,
    //methods
    switchGameDifficulty,
    loadGameLevelList,
  }
}
