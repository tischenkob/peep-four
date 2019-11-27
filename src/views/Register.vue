<template>
  <div>
    <div class="row around">
      <TimeAndDate />
    </div>
    <br />
    <br />

    <div class="row around">
      <form @submit.prevent="register">
        <label for="email">email</label> <br />
        <input
          type="email"
          name="j_username"
          id="email"
          v-model="this.$root.$data.username"
        />
        <br />
        <br />
        <label for="password">password</label> <br />
        <input
          type="password"
          name="j_password"
          id="password"
          v-model="this.$root.$data.password"
        />
        <br />
        <br /><br />
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

export default {
  name: "Register",
  components: {
    TimeAndDate
  },
  methods: {
    register() {
      this.$http
        .post("address", { //ТУТ АДРЕС
          username: this.$root.$data.username,
          password: this.$root.$data.password
        })
        .then(() => {
          //showSuccess()
          this.$router.push("/login");
        })
        //catch
    }
  }
};
</script>

<style></style>
