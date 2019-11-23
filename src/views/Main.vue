<template>
  <div class="main">
    <router-link id="link-home" to="/">
      <ion-icon name="ios-arrow-round-back" alt="back" />
    </router-link>
    <CoordPlane />
  </div>
</template>

<script>
import CoordPlane from "../components/CoordPlane.vue";

export default {
  name: "Main",
  components: { CoordPlane }
};
</script>

<style lang="scss" scoped>
#link-home {
  position: relative;
  left: -270px;
  top: 6px;
  font-size: 32px;
  color: black;
}
</style>