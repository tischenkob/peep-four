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
      <div v-if="!this.$root.$data.loggedIn">
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
            <ion-icon name="log-out" :title="logout"></ion-icon>
            <span>LOG OUT</span>
          </button>
          <span style="margin: 0 5px;">or</span>
          <router-link class="link" to="/main">
            <span>ENTER</span>
            <ion-icon name="walk"></ion-icon>
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
import axios from "axios";

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
      this.$root.$data.loggedIn = false;

      axios
        .get(this.$root.$data.BACKEND_URL + "logout") // АДРЕС
        .then(() => {
          this.$root.$data.loggedIn = false;
          this.$root.$toast.info("Logged out.");
        })
        .catch(err =>
          this.$root.$toast.error("Could not log out, reason:\n" + err.message)
        );
    }
  },
  computed: {
    username() {
      return this.$root.$data.username;
    }
  }
};
</script>

<style scoped>
.link span {
  position: relative;
  top: -6px;
}
</style>
