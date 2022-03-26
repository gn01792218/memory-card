import { gameTypeEnum, gameThemeEnum } from '@/types/Enum/enum'
export const state = {
  gameType: gameTypeEnum.memoryCard,
  gameTheme: null,
  gameTypeList: {},
  memoryCardListObj: {} //翻翻記憶卡牌陣列
}
export const actions = {}

export const mutations = {
  loadGameTypeList(state:any){
    state.gameTypeList[gameTypeEnum.other] = [gameThemeEnum.ghostSlayer]
    state.gameTypeList[gameTypeEnum.mathGame] = [gameThemeEnum.pokemon]
    state.gameTypeList[gameTypeEnum.memoryCard] = [gameThemeEnum.pokemon, gameThemeEnum.ghostSlayer]
  },
  setGameType(state: any, type: gameTypeEnum) {
    state.gameType = type
  },
  setGameTheme(state: any, theme: gameThemeEnum) {
    state.gameTheme = theme
  },
  setmemoryCardListObj(state: any, payLoad: any) {
    //思考payLoad如何變成memoryCard且帶不同類型
    if (!state.memoryCardListObj[state.gameTheme]) {
      state.memoryCardListObj[state.gameTheme] = payLoad
    }
  }
}
export const getters = {}

export default {
  state,
  actions,
  mutations,
  getters,
  namespaced: true
}
