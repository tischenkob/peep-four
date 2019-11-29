<template>
  <form class="column" @submit.prevent="submit">
    <label for="email">email</label>
    <input v-model="username" type="email" required="required" />
    <label for="password">password</label>
    <input v-model="password" type="password" required="required" />
    <div class="row between">
      <router-link class="link" id="link-home" to="/">BACK</router-link>
      <a class="link" @click="submit">SUBMIT</a>
    </div>
  </form>
</template>

<script>
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
      let user = {
        username: this.username,
        password: this.password
      };
      this.$store.dispatch(this.operation, user);
    }
  },
  computed: {
    operation() {
      return this.type === "login" ? "LOGIN" : "REGISTER";
    }
  }
};
</script>

<style scoped>
</style>
