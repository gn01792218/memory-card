import { gsap } from 'gsap'
import { computed } from 'vue'
import { useStore } from 'vuex'
import { memoryCard } from '@/types/global'
import { ghostSlayer , pokemon} from '@/types/Enum/enum'
export default function useMemoryCard<T>(cardItem: memoryCard<T>) {
  const store = useStore()
  const checkCardCount = computed(() => {
    return store.state.memoryCard.checkCardCount
  })
  function checkCard() {
    if (cardItem.isChecked) return
    if (checkCardCount.value>2) return
    //標記被翻的是第幾張卡牌
    store.commit('memoryCard/addCheckCardIndexArr', cardItem.cardIndex)
    //翻牌次數統計++
    store.commit('memoryCard/addCheckCardCount')
    //翻開牌
    cardItem.isChecked = true
    //依據現在翻到第幾張牌，設置記憶卡牌的內容
    store.commit(`memoryCard/setCheckCard${checkCardCount.value}`, cardItem.context)
    checkCardAniMation()
  }
  function checkCardAniMation() {
    //翻卡的特效
    gsap.fromTo(
      `#memory-card-up-${cardItem.cardIndex}`,
      {
        rotateY: 180
      },
      {
        rotateY: 0
      }
    )
    gsap.fromTo(
      `#memory-card-down-${cardItem.cardIndex}`,
      {
        rotateY: 0
      },
      {
        rotateY: -180
      }
    )
  }
  return {
    checkCard,
  }
}
