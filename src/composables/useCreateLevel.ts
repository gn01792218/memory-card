import { computed, reactive } from 'vue'
import { memoryCardLevel } from '@/types/global'
import { gameTypeEnum } from '@/types/Enum/enum'
import { useStore } from 'vuex'
export default function useCreateLevel() {
  const store = useStore()
  const gameType = computed(() => {
    return store.state.game.gameType
  })
  let levelListData
  function createLevelData() {
    switch (gameType.value) {
      case gameTypeEnum.memoryCard:
        levelListData = reactive<memoryCardLevel[]>([])
        const leveCardNumList = [10, 10, 12, 12, 14, 14, 16, 16, 16, 16]
        const levelTimeCountList = [0, 0, 0, 0, 30, 30, 30, 30, 25, 25]
        for (let i = 0; i < 10; i++) {
          levelListData.push({
            level: i,
            unlock:false,
            cardNum: leveCardNumList[i],
            timeCount: levelTimeCountList[i]
          })
        }
        levelListData[0].unlock = true //預設第一關是解鎖狀態
        return levelListData
    }
  }
  return {
    createLevelData,
  }
}
