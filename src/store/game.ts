import { LevelObj , GameTypeEnum, GameThemeEnum , GameDifficulty } from '@/types/game/game'
import { MemoryCard } from '@/types/game/memoryCard/memoryCard'
interface State {
  gameType:GameTypeEnum,
  gameTheme:GameThemeEnum,
  gameDifficulty:GameDifficulty,
  gameTypeList:GameTypeEnum[],
  currentLevel:LevelObj,
  levelList:LevelObj[],
  memoryCardListObj:MemoryCard[]
}
export const state = {
  gameType: GameTypeEnum.memoryCard,
  gameTheme: null,
  gameDifficulty:GameDifficulty[GameDifficulty.SUPEREASY],
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
  setGameDifficulty(state:any,difficulty: GameDifficulty){
    state.gameDifficulty = difficulty
  },
  setCurrentLevel(state:any,level:LevelObj){
    state.currentLevel = level
  },
  setLevelList(state:any,payload:LevelObj[]){
    // console.log('重新裝遊戲關卡',payload)
    if(!state.levelList[state.gameType]) state.levelList[state.gameType] = {}
    // if(!state.levelList[state.gameType][state.gameTheme]) 
    state.levelList[state.gameType][state.gameTheme] = payload //有此遊戲主題，就不需要創建
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
