export const state = {
  checkCardCount:0, //翻牌的次數計算
  checkCardIndexArr:[], //存放翻開的卡牌index
  checkCard1Content:0, //翻第一張卡牌時候得到的數字
  checkCard2Content:0, //翻第二張卡牌時候得到的數字
}
export const actions = {}

export const mutations = {
  addCheckCardCount(state:any){
    state.checkCardCount++
  },
  setCheckCardCount(state:any,num:number){
    state.checkCardCount = num
  },
  setCheckCard1(state:any, content: number | string) {
    console.log('設置翻的第一張牌',content)
    state.checkCard1Content = content
  },
  setCheckCard2(state:any, content: number | string) {
    console.log('設置翻的第二張牌',content)
    state.checkCard2Content = content
  },
  addCheckCardIndexArr(state:any,index:number){
    state.checkCardIndexArr.push(index)
  },
  reSetCheckCardIndexArr(state:any){
    state.checkCardIndexArr = []
  },
  shiftCheckCardIndexArr(state:any):number{
    return state.checkCardIndexArr.shift()
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
