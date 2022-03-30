import { ref , watch} from 'vue'
import { gsap, Power1 ,Power4 } from 'gsap'
import store from '@/store'
export default function useGameCounter() {
  const timer = ref<any | null>(null)
  const count = ref<number>(0)
  const displayNum = ref<number | string>('00')
  watch(displayNum,()=>{
    store.commit('game/setGameCounterDisplayNum',displayNum.value)
  })
  function runCountDown(countdownMaxNum: number) {
    //倒數計時
    count.value = countdownMaxNum //先設置count
    timer.value = setInterval(() => {
      if (count.value <= 0) {
        //完成時
        //假如要呈現00，就改成<=0即可
        clearInterval(timer.value)
        timer.value = null
        gsap.fromTo(
          //隱藏數字
          '#countNumber',
          { display: 'none' },
          { ease: Power4.easeInOut, display: 'none' }
        )
      } else {
        //在1以上時才會執行
        count.value -= 1
        if (count.value < 10) {
          //小於10的前面補0
          displayNum.value = `0${count.value}`
        } else {
          displayNum.value = count.value
        }
        countAnimation()
      }
    }, 1000)
  }
  function pauseCount(){
    
  }
  function stopCount() {
    //終止計時器
    if (!timer.value) return
    //關閉顯示
    // let temp = document.querySelector('.counter') as HTMLElement
    //     temp.style.display = 'none'
    let border = document.querySelector('#loading') as HTMLElement
    let number = document.querySelector('#countNumber') as HTMLElement
    border.style.display = 'none'
    number.style.display = 'none'
    timer.value ? clearInterval(timer.value) : null
  }
  function countAnimation() {
    //計時器loading特效
    //外框動畫
    if (count.value < 10) {
      gsap.to('#loading', {
        keyframes: [
          { rotation: 0, display: 'block' },
          {
            duration: 1,
            ease: Power1.easeInOut,
            rotation: 360,
            borderColor: 'transparent transparent red brown',
            display: 'none'
          }
        ]
      })
    } else {
      gsap.to('#loading', {
        keyframes: [
          {
            rotation: 0,
            display: 'block',
            borderColor: 'transparent transparent #724a0a #9b7726'
          },
          { duration: 1, ease: Power1.easeInOut, rotation: 360, display: 'none' }
        ]
      })
    }
    // 數字動畫
    gsap.fromTo('#countNumber', { display: 'block' }, { ease: Power4.easeIn })
  }
  return {
    runCountDown,
    stopCount,
    displayNum,
    pauseCount,
  }
}
