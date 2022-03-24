import { computed, watch, reactive } from 'vue'
import { useStore } from 'vuex'
import { memoryCard } from '@/types/global'
import { gameThemeEnum } from '@/types/themesEnum/themesEnum'
import { ghostSlayer, pokemon } from '@/types/themesEnum/themesEnum'
import upImgUrl from '@/assets/images/memoryCard/memoryCard-back.webp'
import downImgUrl from '@/assets/images/memoryCard/memoryCard-front.webp'
export default function useGenerateGameTheme() {
  const store = useStore()
  const gameTheme = computed<gameThemeEnum>(() => {
    return store.state.gameThemes.gameTheme
  })
  watch(gameTheme, () => {
    console.log('偵測到遊戲主題改變')
    switchGameTheme(gameTheme.value)
  })
  function switchGameTheme(gameTheme: gameThemeEnum) {
    switch (gameTheme) {
      case gameThemeEnum.pokemon:
        const pokemonCardList = reactive<memoryCard<pokemon>[]>([
          {
            gameTheme: gameThemeEnum.pokemon,
            cardIndex: 0,
            upImgPath: upImgUrl,
            downImgPath: downImgUrl,
            context: pokemon.傑尼龜,
            isChecked: false
          },
          {
            gameTheme: gameThemeEnum.pokemon,
            cardIndex: 1,
            upImgPath: upImgUrl,
            downImgPath: downImgUrl,
            context: pokemon.六尾,
            isChecked: false
          },
          {
            gameTheme: gameThemeEnum.pokemon,
            cardIndex: 2,
            upImgPath: upImgUrl,
            downImgPath: downImgUrl,
            context: pokemon.傑尼龜,
            isChecked: false
          }
        ])
        store.commit('gameThemes/setmemoryCardListObj', pokemonCardList)
        break
      case gameThemeEnum.ghostSlayer:
        //生成卡片陣列
        const ghostSlayerCardList = reactive<memoryCard<ghostSlayer>[]>([
          {
            gameTheme: gameThemeEnum.ghostSlayer,
            cardIndex: 0,
            upImgPath: upImgUrl,
            downImgPath: downImgUrl,
            context: ghostSlayer.嘴平伊之助,
            isChecked: false
          },
          {
            gameTheme: gameThemeEnum.ghostSlayer,
            cardIndex: 1,
            upImgPath: upImgUrl,
            downImgPath: downImgUrl,
            context: ghostSlayer.富岡義勇,
            isChecked: false
          },
          {
            gameTheme: gameThemeEnum.ghostSlayer,
            cardIndex: 2,
            upImgPath: upImgUrl,
            downImgPath: downImgUrl,
            context: ghostSlayer.富岡義勇,
            isChecked: false
          }
        ])
        store.commit('gameThemes/setmemoryCardListObj', ghostSlayerCardList)
        break
    }
  }
}
