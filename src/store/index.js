import Vue from "vue";
import Vuex from "vuex";
import entries from "./modules/entries";
import user from "./modules/user";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    user,
    entries
  }
});

export default store;
