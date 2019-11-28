<template>
  <div>
    <div class="row around">
      <TimeAndDate />
    </div>
    <br />
    <br />

    <div class="row around">
      <form @submit.prevent="register">
        <label for="email">email</label>
        <br />
        <input type="email" name="j_username" id="email" ref="username" required="required" />
        <br />
        <br />
        <label for="password">password</label>
        <br />
        <input type="password" name="j_password" id="password" ref="password" required="required" />
        <br />
        <br />
        <br />
        <div class="row around">
          <router-link id="link-home" to="/">back</router-link>
          <button type="submit">sign up</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import TimeAndDate from "../components/TimeAndDate.vue";
import axios from "axios";

export default {
  name: "Register",
  components: {
    TimeAndDate
  },
  methods: {
    register() {
      axios
        .post(this.$root.$data.BACKEND_URL + "register", {
          username: this.$refs.username.value,
          password: this.$refs.password.value
        })
        .then(() => {
          this.$router.push("/login");
          this.$root.$toast.info("Success! Now log in");
        })
        .catch(err =>
          this.$root.$toast.error("Could not register, reason:\n" + err.message)
        );
      //catch
    }
  }
};
</script>

<style></style>
