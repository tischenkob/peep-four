import Vue from "vue";
import Vuex from "vuex";
import entries from "./modules/entries";
import user from "./modules/user";
// import VueToast from "vue-toast-notification";
// import "vue-toast-notification/dist/index.css";

Vue.use(Vuex);
// Vue.use(VueToast, {
//   position: "top-left"
// });
export const store = new Vuex.Store({
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    user,
    entries
  }
});
