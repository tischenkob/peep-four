import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import { store } from "./store";
// import VueToast from "vue-toast-notification";

Vue.config.productionTip = false;
// Vue.use(VueToast, {
//   position: "top-left"
// });
Vue.use(axios);
export const eventBus = new Vue();

// ПРИВЕТ, ЛИЗА!!!!

new Vue({
  router,
  store,
  render: h => h(App),
  created() {
    store.dispatch("LOGIN_FROM_STORAGE");
  }
}).$mount("#app");
