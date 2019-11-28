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
        <input
          type="email"
          name="j_username"
          id="email"
          ref="username"
          required="required"
        />
        <br />
        <br />
        <label for="password">password</label>
        <br />
        <input
          type="password"
          name="j_password"
          id="password"
          ref="password"
          required="required"
        />
        <br />
        <br />
        <br />
        <div class="row around">
          <router-link class="link" id="link-home" to="/">
            <ion-icon name="arrow-round-back" alt="back" />
          </router-link>
          <button type="submit" class="link">SIGN UP</button>
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
      let formData = new FormData();
      formData.append("username", this.$refs.username.value);
      formData.append("password", this.$refs.password.value);
      axios
        .post(this.$root.$data.BACKEND_URL + "register", formData)
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
