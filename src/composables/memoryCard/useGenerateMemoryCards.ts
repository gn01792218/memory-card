import { reactive } from 'vue'
import { memoryCard } from '@/types/global'
import { gameThemeEnum } from '@/types/Enum/enum'
import { ghostSlayer, pokemon } from '@/types/Enum/enum'
import useShuffle from '../util/useShuffle'
import useUtil from '../util/useUtil'
//建議設計成輸入的數量不符合預期時，直接回傳一個預設的卡牌陣列
export default function useGenerateMemoryCards() {
  //1.要幾張卡牌的參數
  const cardNumMin = 10
  const cardNumMax = 18
  const pokemonCardList = reactive<memoryCard[]>([])
  const { random, getAssetsFileURL } = useUtil()
  function GenerateCard(gameTheme: gameThemeEnum, cardNum: number) {
    if (cardNum % 2 !== 0) {
      console.log('只能輸入偶數張卡牌數量')
      return
    }
    if (cardNum < cardNumMin || cardNum > cardNumMax) {
      console.log('卡牌數量只能輸入介於10~18之間的數字')
      return
    }
    const enumNum = cardNum / 2 //先產生一半的卡牌後，再double確保成對
    for (let i = 0; i < enumNum; i++) {
      pushMemoryCard(gameTheme)
    }
    return useShuffle(doubleArray(pokemonCardList))
  }
  function pushMemoryCard(gameTheme: gameThemeEnum) {
    let enumLength: number
    let randomNum
    const cardDownImg = getAssetsFileURL(
      `images/memoryCard/${gameThemeEnum[gameTheme]}/cardDown.webp`
    )
    switch (gameTheme) {
      case gameThemeEnum.pokemon:
        enumLength = Object.keys(pokemon).length / 2
        randomNum = random(0, enumLength / 2)
        pokemonCardList.push({
          gameTheme: gameThemeEnum.pokemon,
          upImgPath: getAssetsFileURL(
            `images/memoryCard/${gameThemeEnum[gameTheme]}/${randomNum}.webp`
          ),
          downImgPath: cardDownImg,
          context: pokemon[randomNum as unknown as number],
          isChecked: false
        })
        break
      case gameThemeEnum.ghostSlayer:
        enumLength = Object.keys(pokemon).length / 2
        randomNum = random(0, enumLength / 2)
        pokemonCardList.push({
          gameTheme: gameThemeEnum.ghostSlayer,
          upImgPath: getAssetsFileURL(
            `images/memoryCard/${gameThemeEnum[gameTheme]}/${randomNum}.webp`
          ),
          downImgPath: cardDownImg,
          context: ghostSlayer[randomNum as unknown as number],
          isChecked: false
        })
        break
    }
  }
  function doubleArray(arr: memoryCard[]): memoryCard[] {
    let arrLength = arr.length
    for (let i = 0; i < arrLength; i++) {
      let temp: memoryCard = {
        context: arr[i].context,
        downImgPath: arr[i].downImgPath,
        gameTheme: arr[i].gameTheme,
        isChecked: arr[i].isChecked,
        upImgPath: arr[i].upImgPath
      }
      arr.push(temp)
    }
    return arr
  }
  return {
    GenerateCard
  }
}
