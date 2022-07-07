import { reactive } from 'vue'
import { MemoryCard } from '@/types/global'
import { GameThemeEnum } from '@/types/Enum/enum'
import { GhostSlayer,  Pokemon , SumikkoGurashi} from '@/types/Enum/enum'
import useShuffle from '../util/useShuffle'
import useUtil from '../util/useUtil'
import { Console } from 'console'
//建議設計成輸入的數量不符合預期時，直接回傳一個預設的卡牌陣列
export default function useGenerateMemoryCards() {
  //1.要幾張卡牌的參數
  const cardNumMin = 8
  const cardNumMax = 20
  const pokemonCardList = reactive<MemoryCard[]>([])
  const { random, getAssetsFileURL } = useUtil()
  function GenerateCard(gameTheme: GameThemeEnum, cardNum: number) {
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
  function pushMemoryCard(gameTheme: GameThemeEnum) {
    let enumLength: number
    let randomNum
    const cardDownImg = getAssetsFileURL(
      `images/memoryCard/${GameThemeEnum[gameTheme]}/cardDown.webp`
    )
    switch (gameTheme) {
      case GameThemeEnum.pokemon:
        enumLength = Object.keys(Pokemon).length / 2
        randomNum = random(0, enumLength)
        pokemonCardList.push({
          gameTheme: GameThemeEnum.pokemon,
          upImgPath: getAssetsFileURL(
            `images/memoryCard/${GameThemeEnum[gameTheme]}/${randomNum}.webp`
          ),
          downImgPath: cardDownImg,
          context: Pokemon[randomNum as unknown as number],
          isChecked: false
        })
        break
      case GameThemeEnum.ghostSlayer:
        enumLength = Object.keys(GhostSlayer).length / 2
        randomNum = random(0, enumLength)
        pokemonCardList.push({
          gameTheme: GameThemeEnum.ghostSlayer,
          upImgPath: getAssetsFileURL(
            `images/memoryCard/${GameThemeEnum[gameTheme]}/${randomNum}.webp`
          ),
          downImgPath: cardDownImg,
          context: GhostSlayer[randomNum as unknown as number],
          isChecked: false
        })
        break
        case GameThemeEnum.sumikkoGurashi:
        enumLength = Object.keys(SumikkoGurashi).length / 2
        randomNum = random(0, enumLength)
        pokemonCardList.push({
          gameTheme: GameThemeEnum.sumikkoGurashi,
          upImgPath: getAssetsFileURL(
            `images/memoryCard/${GameThemeEnum[gameTheme]}/${randomNum}.webp`
          ),
          downImgPath: cardDownImg,
          context: SumikkoGurashi[randomNum as unknown as number],
          isChecked: false
        })
        break
    }
  }
  function doubleArray(arr: MemoryCard[]): MemoryCard[] {
    let arrLength = arr.length
    for (let i = 0; i < arrLength; i++) {
      let temp: MemoryCard = {
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
