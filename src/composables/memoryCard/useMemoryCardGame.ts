import { gsap } from 'gsap'
import { computed ,watch,reactive} from 'vue'
import { useStore } from 'vuex'
import { gameThemeEnum } from '@/types/Enum/enum'
export default function useMemoryCardGame() {
  const store = useStore()
  const gameTheme = computed<gameThemeEnum>(()=>{
    return store.state.game.gameTheme
  })
  const memoryCardListObj = computed(()=>{
    return store.state.game.memoryCardListObj
  })
  const checkCardIndexArr = computed(() => {
    return store.state.memoryCard.checkCardIndexArr
  })
  const checkCard1 = computed(() => {
    return store.state.memoryCard.checkCard1Content
  })
  const checkCard2 = computed(() => {
    return store.state.memoryCard.checkCard2Content
  })
  //監聽
  watch([checkCard1,checkCard2],()=>{
    judgeMemoryCard(checkCard1.value,checkCard2.value)
  })
  //判斷記憶卡牌輸贏
  function judgeMemoryCard(cardContent1:number,cardContent2:number){
    if(cardContent1 === 0 || cardContent2 === 0) return
    if (cardContent1 !== cardContent2) { //翻牌之後是不一樣的情況
        console.log('翻錯卡牌')
        checkCardIndexArr.value.forEach((i: number) => {
         wrongCheck(i)
        })
        resetMemoryCard()
    }else{ //翻牌之後是一樣的情況
        console.log('翻對牌，重置count')
        rightCheck()
        resetMemoryCard()
    }
  }
  //假如翻出的兩張牌數值不同，就兩張都翻回來
  function wrongCheck(cardIndex: number) {
    //把兩張卡翻回來
    setTimeout(() => {
      //重置目標卡牌
      gsap.fromTo(
        `#memory-card-up-${cardIndex}`,
        {
          rotateY: 0
        },
        {
          rotateY: 180
        }
      )
      gsap.fromTo(
        `#memory-card-down-${cardIndex}`,
        {
          rotateY: -180
        },
        {
          rotateY: 0
        }
      )
      memoryCardListObj.value[gameTheme.value][cardIndex].isChecked = false
      // cardList[cardIndex].isChecked = false
    }, 1000)
  }
  function rightCheck(){
    
  }
  function resetMemoryCard(){
    //checkCardCount歸0
    store.commit('memoryCard/setCheckCardCount',0)
    //checkCardIndexArr歸0
    store.commit('memoryCard/reSetCheckCardIndexArr')
    //card1和card2內容重置
    store.commit('memoryCard/setCheckCard1',0)
    store.commit('memoryCard/setCheckCard2',0)
  }
  return {
    //data
    gameTheme,
    memoryCardListObj,
  }
}
