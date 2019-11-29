<template>
  <div class="column">
    <div class="row around">
      <TimeAndDate />
    </div>
    <div class="row around">
      <UserAuthForm type="login"></UserAuthForm>
    </div>
  </div>
</template>

<script>
import TimeAndDate from "../components/TimeAndDate.vue";
import UserAuthForm from "../components/UserAuthForm.vue";

export default {
  name: "Login",
  components: {
    TimeAndDate,
    UserAuthForm
  }
};
</script>
