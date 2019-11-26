<template>
  <div class="home">
    <div class="row around">
      <TimeAndDate></TimeAndDate>
    </div>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    You are not logged in:<router-link class="link" to="/login"
      >log in</router-link
    >
    or <router-link class="link" to="/register">sign up</router-link>
    <br />
    <router-link class="link" to="/main">start</router-link>

    <br />
    <br />
    <br />
    <br />
    <br />
    <ion-icon name="information-circle-outline" :title="info"></ion-icon>
  </div>
</template>

<script>
import TimeAndDate from "../components/TimeAndDate.vue";

export default {
  name: "Home",
  components: { TimeAndDate },
  data() {
    return {
      info: "p3200 · 200032 \n front - Тищенко \n back - Борисенко"
    };
  }
};
</script>
