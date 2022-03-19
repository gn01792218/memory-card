import { gsap } from 'gsap'
export default function useMemoryCard() {
  function checkCard() {
    //翻開牌
    gsap.fromTo(
      '#memory-card-up',
      {
        rotateY: 180
      },
      {
        rotateY: 0
      }
    )
    gsap.fromTo(
      '#memory-card-down',
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
      '#memory-card-up',
      {
        rotateY: 0
      },
      {
        rotateY: 180
      }
    )
    gsap.fromTo(
      '#memory-card-down',
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
