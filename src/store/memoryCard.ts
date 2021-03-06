interface State{
  correctCardCount:number,
  checkCardCount:number,
  checkCardIndexArr:number[],
  checkCard1Content:number | string,
  checkCard2Content:number | string,
}
export const state = {
  correctCardCount:0,//翻對牌的統計次數
  checkCardCount:0, //翻牌的次數計算
  checkCardIndexArr:[], //存放翻開的卡牌index
  checkCard1Content:0, //翻第一張卡牌時候得到的數字
  checkCard2Content:0, //翻第二張卡牌時候得到的數字
}
export const actions = {}

export const mutations = {
  addCorrectCardCount(state:State){
    state.correctCardCount+=2
  },
  resetCorrectCardCount(state:State){
    state.correctCardCount = 0
  },
  addCheckCardCount(state:State){
    state.checkCardCount++
  },
  setCheckCardCount(state:State,num:number){
    state.checkCardCount = num
  },
  setCheckCard1(state:State, content: number | string) {
    // console.log('設置翻的第一張牌',content)
    state.checkCard1Content = content
  },
  setCheckCard2(state:State, content: number | string) {
    // console.log('設置翻的第二張牌',content)
    state.checkCard2Content = content
  },
  addCheckCardIndexArr(state:State,index:number){
    state.checkCardIndexArr.push(index)
  },
  reSetCheckCardIndexArr(state:State){
    state.checkCardIndexArr = []
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
