import { LevelObj , GameTypeEnum, GameThemeEnum } from '@/types/game/game'
import { MemoryCard } from '@/types/game/memoryCard/memoryCard'
// interface State {
//   gameType:gameTypeEnum,
//   gameTheme:gameThemeEnum,
//   gameTypeList:gameTypeEnum[],
//   currentLevel:levelObj,
//   levelList:levelObj[],
//   memoryCardListObj:memoryCard[]
// }
export const state = {
  gameType: GameTypeEnum.memoryCard,
  gameTheme: null,
  gameTypeList: {},
  currentLevel:{}, //當前關卡物件
  levelList:{}, //關卡物件陣列
  memoryCardListObj: {}, //翻翻記憶卡牌陣列
}
export const actions = {}

export const mutations = {
  loadGameTypeList(state:any){
    state.gameTypeList[GameTypeEnum.other] = [GameThemeEnum.ghostSlayer]
    state.gameTypeList[GameTypeEnum.mathGame] = [GameThemeEnum.pokemon]
    state.gameTypeList[GameTypeEnum.memoryCard] = [GameThemeEnum.pokemon, GameThemeEnum.ghostSlayer,GameThemeEnum.sumikkoGurashi]
  },
  setGameType(state: any, type: GameTypeEnum) {
    state.gameType = type
  },
  setGameTheme(state: any, theme: GameThemeEnum) {
    state.gameTheme = theme
  },
  setCurrentLevel(state:any,level:LevelObj){
    state.currentLevel = level
  },
  setLevelList(state:any,payload:LevelObj[]){
    if(!state.levelList[state.gameType]) state.levelList[state.gameType] = {}
    if(!state.levelList[state.gameType][state.gameTheme]) state.levelList[state.gameType][state.gameTheme] = payload //有此遊戲主題，就不需要創建
  },
  setMemoryCardListObj(state: any, payLoad: MemoryCard[]) {
    state.memoryCardListObj[state.gameTheme] = payLoad
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
