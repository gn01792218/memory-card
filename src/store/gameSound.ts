interface State{
    audioConTrolEle:HTMLElement | null
  }
  export const state:State = {
    //這整個要寫localStorage
    audioConTrolEle:null,
  }
  export const actions = {}
  
  export const mutations = {
    getaudioControlEle(state:State,payLoad:HTMLElement){
        if(!state.audioConTrolEle)state.audioConTrolEle = payLoad
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
  