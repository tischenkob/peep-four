<template>
  <div id="app" class="app">
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  methods: {},
  mounted() {}
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Lato|Rubik&display=swap");

@media (max-width: 600px) {
  html {
    height: 100vh;
  }
  body {
    height: 100vh;
  }
  #app {
    width: 100%;
    border-radius: 0;
    box-shadow: none;
  }
}

* {
  padding: 0;
  margin: 0;
}

html {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  background-color: rgb(238, 238, 238);
  font-family: "Lato", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  display: flex;
  justify-content: center;
  width: 100%;
}
#app {
  background-color: white;
  min-height: 300px;
  width: 600px;
  padding: 6px;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgb(170, 170, 170);
}

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.2s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}

.active {
  color: #2a95ec;
}
.icon-button {
  background: none;
  border: none;
  font-size: 1.4em;
}
.row {
  display: flex;
  width: 100%;
  align-items: center;
  flex-wrap: wrap;
}
.around {
  justify-content: space-around;
}
.between {
  justify-content: space-between;
}
.submit-button {
  color: white;
  background-color: rgb(81, 197, 52);
  height: 30px;
  border-radius: 5px;
  padding-top: 3px;
}
.link {
  text-decoration: none;
  color: #2a95ec;
}
ion-icon {
  font-size: 24px;
}
#link-home ion-icon {
  justify-self: flex-start;
  font-size: 36px;
}

form {
  height: 100%;
}
</style>
