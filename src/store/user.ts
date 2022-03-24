export const state = {
    score:0,
  }
  export const actions = {}
  
  export const mutations = {
    addScore(state:any,num:number){
      state.score+=num
    },
    setUserScore(state:any,score:number){
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
  