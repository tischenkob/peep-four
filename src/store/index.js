import Vue from "vue";
import Vuex from "vuex";
import entries from "./modules/entries";
import user from "./modules/user";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    BACKEND_URL: "se.ifmo.ru/s******/web4/api/"
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    user,
    entries
  }
});
