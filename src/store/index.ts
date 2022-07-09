import { createStore } from "vuex";
import game from "./game";
import gameSound from "./gameSound";
import memoryCard from "./memoryCard";
import user from './user'
export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    game,
    gameSound,
    memoryCard,
    user,
  },
});
