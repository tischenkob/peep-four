<template>
  <div class="home">
    <TimeAndDate />
    <router-link to="/main">start</router-link>
  </div>
</template>

<script>
// @ is an alias to /src
import TimeAndDate from "@/components/TimeAndDate.vue";

export default {
  name: "home",
  components: {
    TimeAndDate
  }
};
</script>
