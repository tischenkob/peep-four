import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
Vue.config.productionTip = false;

Vue.use(axios);

export const eventBus = new Vue();

new Vue({
  router,
  render: h => h(App),
  data: {
    username: "",
    password: "",
    loggedIn: false,
    BACKEND_URL: "se.ifmo.ru/s265063/web4/api/"
  }
}).$mount("#app");
