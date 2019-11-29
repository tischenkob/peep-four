<template>
  <div class="column">
    <div class="row around">
      <TimeAndDate />
    </div>
    <div class="row around">
      <UserAuthForm type="register"></UserAuthForm>
    </div>
  </div>
</template>

<script>
import TimeAndDate from "../components/TimeAndDate.vue";
import UserAuthForm from "../components/UserAuthForm.vue";

export default {
  name: "Register",
  components: {
    TimeAndDate,
    UserAuthForm
  }
};
</script>
