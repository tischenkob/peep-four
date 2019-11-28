import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import VueToast from "vue-toast-notification";
import "vue-toast-notification/dist/index.css";
import store from "./store";

Vue.config.productionTip = false;
Vue.use(VueToast, {
  position: "top-left"
});
Vue.use(axios);
export const eventBus = new Vue();

new Vue({
  router,
  render: h => h(App),
  data: {
    username: "",
    password: "",
    loggedIn: false,
    BACKEND_URL: "se.ifmo.ru/s******/web4/api/"
  },
  created() {
    this.username = localStorage.getItem("peep_username") || "";
    this.password = localStorage.getItem("peep_password") || "";
  }
}).$mount("#app");
