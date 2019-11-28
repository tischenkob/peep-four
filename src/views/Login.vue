<template>
  <div>
    <div class="row around">
      <TimeAndDate />
    </div>
    <br />
    <div class="row around">
      <form @submit.prevent="login">
        <label for="email">email</label> <br />
        <input ref="username" type="email" name="j_username" id="email" />
        <br />
        <br />
        <label for="password">password</label> <br />
        <input ref="password" type="password" name="j_password" id="password" />
        <br />
        <br /><br />
        <div class="row around">
          <router-link id="link-home" to="/">back</router-link>
          <button type="submit">log in</button>
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
  methods: {
    login() {
      this.$http
        .post("адрес", {
          username: this.$refs.username.value,
          password: this.$refs.password.value
        }) // АДРЕС
        .then(() => {
          this.$root.$data.username = this.$refs.username.value;
          this.$root.$data.password = this.$refs.password.value;
          this.$root.$data.loggedIn = true;
          this.$router.push("/main");
        })
        .catch(data => this.showError(data.message));

      // this.$root.$data.username = this.$refs.username.value;
      // this.$root.$data.password = this.$refs.password.value;
      // this.$root.$data.loggedIn = true;
      // this.$router.push("/main");
    },
    showError(msg) {
      alert("an error" + msg);
    }
  }
};
</script>

<style></style>
