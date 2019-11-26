<template>
  <div class="home">
    <div class="row around">
      <TimeAndDate></TimeAndDate>
    </div>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    You are not logged in:<router-link class="link" to="/login">login</router-link> or <router-link class="link" to="/register">sign up</router-link>
    <br>
    <router-link class="link" to="/main">start</router-link> 
  </div>
</template>

<script>
import TimeAndDate from "../components/TimeAndDate.vue";

export default {
  name: "Home",
  components: { TimeAndDate
  }
};
</script>
