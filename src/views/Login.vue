<template>
  <div>
    <div class="row around">
      <TimeAndDate />
    </div>
    <br />
    <br />
    <div class="row around">
      <form @submit.prevent="login">
        <label for="email">email</label>
        <br />
        <input
          ref="username"
          v-model="username"
          type="email"
          id="email"
          required="required"
        />
        <br />
        <br />
        <label for="password">password</label>
        <br />
        <input
          ref="password"
          v-model="password"
          type="password"
          id="password"
          required="required"
        />
        <br />
        <br />
        <br />
        <div class="row around">
          <router-link class="link" id="link-home" to="/">
            <ion-icon name="arrow-round-back" alt="back" />
          </router-link>
          <button class="link" type="submit">LOG IN</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import TimeAndDate from "../components/TimeAndDate.vue";

export default {
  name: "Login",
  components: {
    TimeAndDate
  },
  data() {
    return {
      username: "",
      password: ""
    };
  },
  computed: {},
  methods: {
    login() {
      // FOR TEST ACCESS

      if (
        this.$refs.username.value == "admin@admin.ru" &&
        this.$refs.password.value == "123"
      ) {
        this.$store.username = this.username;
        this.$store.password = this.password;
        this.$store.isAuthenticated = true;
        this.$router.push("/main");
        return;
      }

      // /

      let formData = new FormData();
      formData.append("username", this.$refs.username.value);
      formData.append("password", this.$refs.password.value);
      this.$store.dispatch("LOGIN", formData);
    }
  }
};
</script>
