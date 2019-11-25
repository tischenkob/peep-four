<template>
  <div class="main">
    <router-link id="link-home" to="/">
      <ion-icon name="ios-arrow-round-back" alt="back" />
    </router-link>
    <div class="row">
      <CoordPlane id="coords" />
      <Form id="form" />
    </div>
  </div>
</template>

<script>
import CoordPlane from "../components/CoordPlane.vue";
import Form from "../components/Form.vue";

export default {
  name: "Main",
  components: { CoordPlane, Form }
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
.row {
  display: flex;
  justify-content: space-evenly;
}
</style>