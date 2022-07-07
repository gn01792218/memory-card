import { reactive } from 'vue'
import { MemoryCardLevel } from '@/types/game/memoryCard/memoryCard'
import { GameTypeEnum } from '@/types/game/game'
import { useStore } from 'vuex'
import useGame from '@/composables/useGame'
export default function useCreateLevel() {
  const store = useStore()
  const {
    gameType,
    gameTheme,
  } = useGame()
  let levelListData
  function createLevelData() {
    switch (gameType.value) {
      case GameTypeEnum.memoryCard:
        levelListData = reactive<MemoryCardLevel[]>([])
        const leveCardNumList = [8, 8, 12, 12, 12, 12, 16, 18, 20, 20]
        const levelTimeCountList = [0, 0, 0, 40, 35, 30, 40, 40, 45, 40]
        // const levelTimeCountList = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        for (let i = 0; i < 10; i++) {
          levelListData.push({
            gameType:gameType.value,
            gameTheme:gameTheme.value,
            level: i,
            unlock:false,
            // unlock:true, //測試用
            cardNum: leveCardNumList[i],
            timeCount: levelTimeCountList[i]
          })
        }
        levelListData[0].unlock = true //預設第一關是解鎖狀態
        //儲存到vuex中
        store.commit('game/setLevelList',levelListData)
    }
  }
  return {
    createLevelData,
  }
}
