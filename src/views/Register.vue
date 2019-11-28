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
        <input type="email" name="j_username" id="email" ref="username" />
        <br />
        <br />
        <label for="password">password</label> <br />
        <input type="password" name="j_password" id="password" ref="password" />
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
import axios from "axios";

export default {
  name: "Register",
  components: {
    TimeAndDate
  },
  methods: {
    register() {
      axios
        .post("liza/api/register", {
          //ТУТ АДРЕС
          username: this.$refs.username.value,
          password: this.$refs.password.value
        })
        .then(() => {
          //showSuccess()
          this.$router.push("/login");
        })
        .catch(res => alert(res.data));
      //catch
    }
  }
};
</script>

<style></style>
