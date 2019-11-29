<template>
  <div class="column login">
    <div class="row around">
      <TimeAndDate />
    </div>
    <div class="content">
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

<style scoped>
.login {
  height: 100%;
}
.content {
  display: inline-flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  height: 100%;
}
</style>
