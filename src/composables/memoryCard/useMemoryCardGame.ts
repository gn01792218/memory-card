import { gsap } from 'gsap'
import { computed, onMounted, watch } from 'vue'
import { useStore } from 'vuex'
import useAudio from '@/composables/util/useAudio'
import useLocalStorage from '@/composables/util/useLocalStorage'
import useGame from '@/composables/useGame'
import useGameCounter from '@/composables/util/useGameCounter'
import { useRouter } from 'vue-router'
export default function useMemoryCardGame() {
  //其他composable
  const { rePlayAudio } = useAudio()
  const { setLocalItem } = useLocalStorage()
  const { gameType, gameTheme, currentLevel, levelList, memoryCardListObj } = useGame()
  const { runCountDown, stopCount, pauseCount, displayNum } = useGameCounter()
  //router
  const router = useRouter()
  //store
  const store = useStore()
  const checkCardIndexArr = computed(() => {
    return store.state.memoryCard.checkCardIndexArr
  })
  const checkCard1 = computed(() => {
    return store.state.memoryCard.checkCard1Content
  })
  const checkCard2 = computed(() => {
    return store.state.memoryCard.checkCard2Content
  })
  const correctCardCount = computed(() => {
    return store.state.memoryCard.correctCardCount
  })
  //監聽
  watch([checkCard1, checkCard2], () => {
    judgeMemoryCard(checkCard1.value, checkCard2.value)
  })

  //判斷記憶卡牌輸贏
  function judgeMemoryCard(cardContent1: number, cardContent2: number) {
    if (cardContent1 === 0 || cardContent2 === 0) return
    if (cardContent1 !== cardContent2) {
      //翻牌之後是不一樣的情況
      console.log('翻錯卡牌')
      checkCardIndexArr.value.forEach((i: number) => {
        wrongCheck(i)
      })
      resetMemoryCard()
    } else {
      //翻牌之後是一樣的情況
      console.log('翻對牌，重置count')
      rePlayAudio(document.getElementById('memory-card-match') as HTMLAudioElement)
      rightCheck()
      resetMemoryCard()
    }
    if (correctCardCount.value === memoryCardListObj.value[gameTheme.value].length) {
      console.log('破關~你贏了!')
      rePlayAudio(document.getElementById('memory-card-pass') as HTMLAudioElement)
      //翻對的統計次數歸0
      resetMemoryCardGame()
      //將關卡物件存入LocalStorage
      setLocalItem('userLevel', JSON.stringify(currentLevel.value))
      //解鎖下一關
      if (levelList.value[gameType.value][gameTheme.value][currentLevel.value.level + 1]) { //如果有下一局
        if (!levelList.value[gameType.value][gameTheme.value][currentLevel.value.level + 1].unlock) {
          levelList.value[gameType.value][gameTheme.value][currentLevel.value.level + 1].unlock = true
        }
      }
      //回到關卡列表
      setTimeout(()=>{
        backToLevel()
      },2000)
    }
  }
  //假如翻出的兩張牌數值不同，就兩張都翻回來
  function wrongCheck(cardIndex: number) {
    //把兩張卡翻回來
    //重置目標卡牌
    gsap.fromTo(
      `#memory-card-up-${cardIndex}`,
      {
        rotateY: 0
      },
      {
        delay: 0.5,
        duration: 0.3,
        rotateY: 180
      }
    )
    gsap.fromTo(
      `#memory-card-down-${cardIndex}`,
      {
        rotateY: -180
      },
      {
        delay: 0.5,
        duration: 0.3,
        rotateY: 0
      }
    )
    memoryCardListObj.value[gameTheme.value][cardIndex].isChecked = false
    // console.log('重製牌組',gameTheme.value,cardIndex,memoryCardListObj.value[gameTheme.value][cardIndex].isChecked)
  }
  function backToLevel() {//回到關卡列表
    //停止計時器
    stopCount()
    router.back()
  }
  function rightCheck() {
    store.commit('memoryCard/addCorrectCardCount') //正確翻牌統計+2
  }
  function resetMemoryCardGame() {
    //correctCardCount歸0
    store.commit('memoryCard/resetCorrectCardCount')
  }
  function resetMemoryCard() {
    //checkCardCount歸0
    store.commit('memoryCard/setCheckCardCount', 0)
    //checkCardIndexArr歸0
    store.commit('memoryCard/reSetCheckCardIndexArr')
    //card1和card2內容重置
    store.commit('memoryCard/setCheckCard1', 0)
    store.commit('memoryCard/setCheckCard2', 0)
  }
  onMounted(() => {
    if (currentLevel.value.timeCount >= 0) {
      console.log('啟動關卡計時器', currentLevel.value.timeCount)
      runCountDown(currentLevel.value.timeCount)
    }
  })
  return {
    //data
    gameTheme,
    memoryCardListObj,
    displayNum,
    //methods
    pauseCount,
    runCountDown,
    resetMemoryCardGame,
    resetMemoryCard
  }
}
