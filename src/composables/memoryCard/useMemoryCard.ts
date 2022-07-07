import { gsap } from 'gsap'
import { computed } from 'vue'
import { useStore } from 'vuex'
import { MemoryCard } from '@/types/game/memoryCard/memoryCard'
export default function useMemoryCard() {
  const localStorage = window.localStorage
  const store = useStore()
  const checkCardCount = computed(() => {
    return store.state.memoryCard.checkCardCount
  })
  function checkCard(cardItem:MemoryCard,cardIndex:number) {
    if (cardItem.isChecked) return
    if (checkCardCount.value>2) return
    //標記被翻的是第幾張卡牌
    store.commit('memoryCard/addCheckCardIndexArr', cardIndex)
    //翻牌次數統計++
    store.commit('memoryCard/addCheckCardCount')
    //翻開牌
    cardItem.isChecked = true
    // console.log('設置卡牌被翻過了',cardIndex,cardItem)
    //依據現在翻到第幾張牌，設置記憶卡牌的內容
    store.commit(`memoryCard/setCheckCard${checkCardCount.value}`, cardItem.context)
    checkCardAniMation(cardIndex)
  }
  function checkCardAniMation(cardIndex:number) {
    //翻卡的特效
    gsap.fromTo(
      `#memory-card-up-${cardIndex}`,
      {
        rotateY: 180
      },
      {
        duration:0.5,
        rotateY: 0
      }
    )
    gsap.fromTo(
      `#memory-card-down-${cardIndex}`,
      {
        rotateY: 0
      },
      {
        duration:0.5,
        rotateY: -180
      }
    )
  }
  return {
    checkCard,
  }
}
