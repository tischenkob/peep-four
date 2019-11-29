<template>
  <form @submit.prevent="submit">
    <div class="column">
      <label for="email">email</label>
      <input
        ref="username"
        v-model="username"
        type="email"
        id="email"
        required="required"
      />
      <label for="password">password</label>
      <input
        ref="password"
        v-model="password"
        type="password"
        id="password"
        required="required"
      />
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
      let formData = new FormData();
      formData.append("username", this.username);
      formData.append("password", this.password);
      let operation = this.type === "login" ? "LOGIN" : "REGISTER";
      this.$store.dispatch(operation, formData);
    }
  }
};
</script>

<style></style>
