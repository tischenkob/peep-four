<template>
  <div id="app" class="app">
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Lato|Rubik&display=swap");

* {
  padding: 0;
  margin: 0;
}

html {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: rgb(238, 238, 238);
}

#app {
  background-color: white;
  width: 600px;
  height: 300px;
  font-family: "Lato", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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
</style>
