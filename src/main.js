import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import resource from "vue-resource";

Vue.config.productionTip = false;

Vue.use(resource);

export const eventBus = new Vue();

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
