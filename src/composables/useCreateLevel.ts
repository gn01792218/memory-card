import { reactive } from 'vue'
import { memoryCardLevel } from '@/types/global'
import { gameTypeEnum } from '@/types/Enum/enum'
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
      case gameTypeEnum.memoryCard:
        levelListData = reactive<memoryCardLevel[]>([])
        const leveCardNumList = [10, 10, 12, 12, 14, 14, 16, 16, 16, 16]
        const levelTimeCountList = [0, 0, 0, 0, 30, 30, 30, 30, 25, 25]
        for (let i = 0; i < 10; i++) {
          levelListData.push({
            gameType:gameType.value,
            gameTheme:gameTheme.value,
            level: i,
            unlock:false,
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
