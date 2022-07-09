import { LevelObj , GameTypeEnum, GameThemeEnum , GameDifficulty } from '@/types/game/game'
import { MemoryCard } from '@/types/game/memoryCard/memoryCard'
interface State {
  gameType:GameTypeEnum,
  gameTheme:GameThemeEnum,
  gameDifficulty:GameDifficulty,
  gameTypeList:GameTypeEnum[],
  currentLevel:LevelObj,
  levelList:LevelObj[],
  memoryCardListObj:MemoryCard[],
  gameSoundMouted:boolean,
}
export const state = {
  gameType: GameTypeEnum.memoryCard,
  gameTheme: null,
  gameDifficulty:GameDifficulty.SUPEREASY,
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
  setGameType(state: State, type: GameTypeEnum) {
    state.gameType = type
  },
  setGameTheme(state: State, theme: GameThemeEnum) {
    state.gameTheme = theme
  },
  setGameDifficulty(state:State,difficulty: GameDifficulty){
    state.gameDifficulty = difficulty
  },
  setCurrentLevel(state:State,level:LevelObj){
    state.currentLevel = level
  },
  setLevelList(state:any,payload:LevelObj[]){
    console.log('重新裝遊戲關卡',payload)
    if(!state.levelList[state.gameType]) state.levelList[state.gameType] = {}
    if(!state.levelList[state.gameType][state.gameTheme])state.levelList[state.gameType][state.gameTheme] = payload //有此遊戲主題，就不需要創建
  },
  reloadLevelList(state:any,payload:LevelObj[]){
    state.levelList[state.gameType] = {}
    state.levelList[state.gameType][state.gameTheme] = payload
  },
  setMemoryCardListObj(state: any, payLoad: MemoryCard[]) {
    state.memoryCardListObj[state.gameTheme] = payLoad
  },
  setGameSoundMouted(state:State,payload:boolean){
    state.gameSoundMouted = payload
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
