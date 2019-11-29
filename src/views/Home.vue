<template>
  <div class="home">
    <div class="row around">
      <TimeAndDate></TimeAndDate>
    </div>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <div class="column">
      <div v-if="!isAuthenticated">
        You are not logged in:
        <router-link class="link" to="/login">log in</router-link>
        <span style="margin: 0 5px;">or</span>
        <router-link class="link" to="/register">sign up</router-link>
      </div>
      <div v-else>
        You are logged in as: {{ username }}
        <br />
        <br />
        <br />
        <div class="row">
          <button @click="logout" class="link">
            <span>LOG OUT</span>
          </button>
          <span style="margin: 0 5px;">or</span>
          <router-link class="link" to="/main">
            <span>ENTER</span>
          </router-link>
        </div>
      </div>
    </div>

    <br />
    <br />
    <ion-icon name="information-circle-outline" :title="info"></ion-icon>
  </div>
</template>

<script>
import TimeAndDate from "../components/TimeAndDate.vue";
import { store } from "../store";
export default {
  name: "Home",
  components: { TimeAndDate },
  data() {
    return {
      info: "p3200 · 200032 \n front - Тищенко \n back - Борисенко"
    };
  },
  methods: {
    logout() {
      // TEST
      // /
      store.dispatch("LOGOUT");
    }
  },
  computed: {
    username() {
      return store.getters.USERNAME;
    },
    isAuthenticated() {
      return store.getters.IS_AUTHENTICATED;
    }
  },
  mounted() {
    () => alert(store.backend);
  }
};
</script>

<style scoped>
.link span {
  position: relative;
  top: -6px;
}
</style>
