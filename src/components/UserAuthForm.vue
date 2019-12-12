<template>
  <form class="column" @submit.prevent="submit">
    <label for="email">email</label>
    <input v-model="username" type="email" required ref="emailField" />
    <label for="password">password</label>
    <input v-model="password" type="password" required ref="passField" />
    <div class="row between">
      <router-link class="link" id="link-home" to="/">BACK</router-link>
      <a class="link" @click="submit">SUBMIT</a>
    </div>
  </form>
</template>

<script>
import toast from "@/lib/toast.js";

export default {
  name: "UserAuthForm",
  props: {
    type: {
      type: String
    }
  },
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    submit() {
      if (this.formIsValid()) {
        let user = {
          username: this.username,
          password: this.password
        };
        this.$store.dispatch(this.operation, user);
      } else {
        toast.error("Improper input");
      }
    },
    formIsValid() {
      let emailOk = this.$refs.emailField.value !== "";
      let passOk = this.$refs.passField.value !== "";
      return emailOk && passOk;
    }
  },
  computed: {
    operation() {
      return this.type === "login" ? "LOGIN" : "REGISTER";
    }
  }
};
</script>

<style scoped></style>
