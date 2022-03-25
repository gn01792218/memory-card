import { gameThemeEnum } from '@/types/themesEnum/themesEnum'
import { memoryCard } from '@/types/global'
export const state = {
    gameTheme:null,
    memoryCardListObj:{},//卡牌陣列
  }
  export const actions = {}
  
  export const mutations = {
    setGameTheme(state:any,theme:gameThemeEnum){
        state.gameTheme = theme
    },
    setmemoryCardListObj(state:any,payLoad:any){ //思考payLoad如何變成memoryCard且帶不同類型
      if(!state.memoryCardListObj[state.gameTheme]){
        state.memoryCardListObj[state.gameTheme] = payLoad
      }
    },
  }
  export const getters = {}
  
  export default {
    state,
    actions,
    mutations,
    getters,
    namespaced: true
  }
  