<template>
  <div class="home column">
    <div class="row around">
      <TimeAndDate></TimeAndDate>
    </div>
    <div class="content">
      <div v-if="!isAuthenticated">
        You are not logged in:
        <router-link class="link" to="/login">log in</router-link>
        <span style="margin: 0 5px;">or</span>
        <router-link class="link" to="/register">sign up</router-link>
      </div>
      <div v-else>
        <p>You are logged in as: {{ username }}</p>
        <p>
          <a @click="logout" class="link">
            <span>LOG OUT</span>
          </a>
          <span style="margin: 0 5px;">or</span>
          <router-link class="link" to="/main">
            <span>ENTER</span>
          </router-link>
        </p>
      </div>
    </div>
    <ion-icon id="info-icon" name="information-circle-outline" :title="info"></ion-icon>
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
.home {
  height: 100%;
}
.content {
  display: inline-flex;
  align-items: center;
  height: 80%;
}
#info-icon {
  justify-self: flex-end;
}
</style>
