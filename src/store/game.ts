import { gameTypeEnum, gameThemeEnum } from '@/types/Enum/enum'
import { levelObj, memoryCard } from '@/types/global'
export const state = {
  gameType: gameTypeEnum.memoryCard,
  gameTheme: null,
  gameTypeList: {},
  currentLevel:{}, //當前關卡物件
  levelList:{}, //關卡物件陣列
  memoryCardListObj: {}, //翻翻記憶卡牌陣列
  gameCounterDisplayNum:0, //遊戲計時器的顯示數字
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
  setCurrentLevel(state:any,level:levelObj){
    state.currentLevel = level
  },
  setLevelList(state:any,payload:levelObj[]){
    if(!state.levelList[state.gameType]) state.levelList[state.gameType] = {}
    if(!state.levelList[state.gameType][state.gameTheme]) state.levelList[state.gameType][state.gameTheme] = payload //有此遊戲主題，就不需要創建
  },
  setLevelObj(state:any,payload:levelObj){
    state.levelList
  },
  setMemoryCardListObj(state: any, payLoad: memoryCard[]) {
    state.memoryCardListObj[state.gameTheme] = payLoad
  },
  setGameCounterDisplayNum(state:any , num:number | string){
    state.gameCounterDisplayNum = num
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
