import { createStore } from "vuex";
import gameThemes from "./gameThemes";
import memoryCard from "./memoryCard";
import user from './user'
export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    gameThemes,
    memoryCard,
    user,
  },
});
