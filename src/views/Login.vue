<template>
  <div>
    <div class="row around">
      <TimeAndDate />
    </div>
    <br><br>
    <div class="row around">
      <form @submit.prevent>
        <label for="email">email</label> <br>
        <input type="email" name="j_username" id="email" /> <br> <br>
        <label for="password">password</label> <br>
        <input type="password" name="j_password" id="password" /> <br> <br><br>
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
  }
};
</script>

<style></style>
