<template>
  <div>
    <div class="row around">
      <router-link id="link-home" to="/">
        <ion-icon name="ios-arrow-round-back" alt="back" />
      </router-link>
        <TimeAndDate />
        <p></p>
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
