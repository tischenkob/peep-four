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
        <input ref="username" type="email" name="j_username" id="email" required="required" />
        <br />
        <br />
        <label for="password">password</label>
        <br />
        <input ref="password" type="password" name="j_password" id="password" required="required" />
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
import axios from "axios";

export default {
  name: "Login",
  components: {
    TimeAndDate
  },
  methods: {
    login() {
      // FOR TEST ACCESS

      if (
        this.$refs.username.value == "admin@admin.ru" ||
        this.$refs.password.value == "123"
      ) {
        this.$root.$data.username = this.$refs.username.value;
        this.$root.$data.password = this.$refs.password.value;
        this.$root.$data.loggedIn = true;
        this.$router.push("/main");
        return;
      }

      // /

      let formData = new FormData();
      formData.append("username", this.$refs.username.value);
      formData.append("password", this.$refs.password.value);
      axios
        .post(this.$root.$data.BACKEND_URL + "login", formData) // АДРЕС
        .then(() => {
          this.$root.$data.username = this.$refs.username.value;
          this.$root.$data.password = this.$refs.password.value;
          this.$root.$data.loggedIn = true;
          this.$router.push("/main");
          this.$root.$toast.success("Logged in!");
        })
        .catch(err =>
          this.$root.$toast.error("Could not log in, reason:\n" + err.message)
        );
    }
  }
};
</script>
