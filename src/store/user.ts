interface State{
  score:number
}
export const state = {
  //這整個要寫localStorage
  score: 0,
}
export const actions = {}

export const mutations = {
  addScore(state: State, num: number) {
    state.score += num
  },
  setUserScore(state: State, score: number) {
    state.score = score
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
