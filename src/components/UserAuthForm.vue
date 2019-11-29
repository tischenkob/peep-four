<template>
  <form @submit.prevent="submit">
    <div class="column">
      <label for="email">email</label>
      <input v-model="username" type="email" required="required" />
      <label for="password">password</label>
      <input v-model="password" type="password" required="required" />
      <div class="row around">
        <router-link class="link" id="link-home" to="/">
          BACK
        </router-link>
        <button class="link" type="submit">SUBMIT</button>
      </div>
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
      }  
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

<style></style>
