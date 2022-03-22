import { gsap } from 'gsap'
export default function useMemoryCard(cardIndex:number) {
  function checkCard() {
    //翻開牌
    gsap.fromTo(
      `#memory-card-up-${cardIndex}`,
      {
        rotateY: 180
      },
      {
        rotateY: 0
      }
    )
    gsap.fromTo(
      `#memory-card-down-${cardIndex}`,
      {
        rotateY: 0
      },
      {
        rotateY: -180
      }
    )
  }
  function resetCard() {
    //重置卡牌
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
  }
  return {
    checkCard,
    resetCard
  }
}
