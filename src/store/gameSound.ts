interface State{
    audioConTrolEle:HTMLElement | null,
    turnSoundEle:HTMLAudioElement | null,
    matchSoundEle:HTMLAudioElement | null,
    passSoundEle:HTMLAudioElement | null,
  }
  export const state:State = {
    //這整個要寫localStorage
    audioConTrolEle:null,
    turnSoundEle:null,
    matchSoundEle:null,
    passSoundEle:null,
  }
  export const actions = {}
  
  export const mutations = {
    getaudioControlEle(state:State,payLoad:HTMLElement){
        if(!state.audioConTrolEle)state.audioConTrolEle = payLoad
    },
    getTurnSoundEle(state:State,payLoad:HTMLAudioElement){
      if(!state.turnSoundEle) state.turnSoundEle = payLoad
    },
    getMatchSoundEle(state:State,payLoad:HTMLAudioElement){
      if(!state.matchSoundEle) state.matchSoundEle = payLoad
    },
    getPassSoundEle(state:State,payLoad:HTMLAudioElement){
      if(!state.passSoundEle) state.passSoundEle = payLoad
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
  